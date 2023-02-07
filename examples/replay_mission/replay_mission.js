//  Copyright (c) 2022 Boston Dynamics, Inc.  All rights reserved.
//
//  Downloading, reproducing, distributing or otherwise using the SDK Software
//  is subject to the terms and conditions of the Boston Dynamics Software
// Development Kit License (20191101-BDSDK-SL).

// """
// Mission Replay Script.  Command-line utility to replay stored missions, including Autowalk missions.
// """
'use strict';
// Import os
const fs = require('fs');
const process = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');
const path = require('path');
const argparse = require('argparse');

var wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb');

// Import bosdyn.util
const graph_nav_pb = require('../../bosdyn/api/graph_nav/graph_nav_pb');
const map_pb = require('../../bosdyn/api/graph_nav/map_pb');
const nav_pb = require('../../bosdyn/api/graph_nav/nav_pb');
const mission_pb = require('../../bosdyn/api/mission/mission_pb');
const nodes_pb = require('../../bosdyn/api/mission/nodes_pb');
// Const { PowerServiceProto } = require('../../bosdyn/api/mission/power_pb');
const { RobotStateClient } = require('../../bosdyn/api/robot_state_pb');
const { GraphNavClient } = require('../../bosdyn-client/graph_nav');
const lease = require('../../bosdyn-client/lease');
const { PowerClient, power_on, safe_power_off } = require('../../bosdyn-client/power');
const { RobotCommandBuilder, RobotCommandClient, blocking_stand } = require('../../bosdyn-client/robot_command');
const util = require('../../bosdyn-client/util');
const geometry = require('../../bosdyn-core/geometry');
const { MissionClient } = require('../../bosdyn-mission/client');
const client = require('../../index');

async function main(argv) {
  // """Replay stored mission"""

  var body_lease = null;

  // Configure logging
  util.setup_logging();

  // Parse command-line arguments
  const parser = argparse.ArgumentParser();

  util.add_base_arguments(parser);

  parser.add_argument('--timeout', {
    type: 'float',
    default: 3.0,
    dest: 'timeout',
    help: 'Mission client timeout (s).',
  });
  parser.add_argument('--noloc', {
    action: 'store_true',
    default: false,
    dest: 'noloc',
    help: 'Skip initial localization',
  });
  parser.add_argument('--disable_alternate_route_finding', {
    action: 'store_true',
    default: false,
    dest: 'disable_alternate_route_finding',
    help: 'Disable creating alternate-route-finding graph structure',
  });
  parser.add_argument('--disable_directed_exploration', {
    action: 'store_true',
    default: false,
    dest: 'disable_directed_exploration',
    help: 'Disable directed exploration for skipped blocked branches',
  });
  parser.add_argument('--strict_mode', {
    action: 'store_true',
    default: false,
    dest: 'strict_mode',
    help: 'Set strict path following mode',
  });

  const group = parser.add_mutually_exclusive_group();
  group.add_argument('--time', { type: 'float', default: 0.0, dest: 'duration', help: 'Time to repeat mission (sec)' });
  group.add_argument('--static', {
    action: 'store_true',
    default: false,
    dest: 'static_mode',
    help: 'Stand, but do not run robot',
  });

  // Subparser for mission type
  const subparsers = parser.add_subparsers({ dest: 'mission_type', help: 'Mission type' });
  subparsers.required = true;

  // Subparser for simple mission
  const simple_parser = subparsers.add_parser('simple', { help: 'Simple mission (non-Autowalk)' });
  simple_parser.add_argument('simple_mission_file', { help: 'Mission file for non-Autowalk mission.' });

  // Subparser for Autowalk mission
  const autowalk_parser = subparsers.add_parser('autowalk', { help: 'Autowalk mission using graph_nav' });
  autowalk_parser.add_argument('map_directory', {
    help: 'Directory containing graph_nav map and default Autowalk mission file.',
  });
  autowalk_parser.add_argument('--autowalk_mission', {
    dest: 'autowalk_mission_file',
    help: 'Optional alternate Autowalk mission file.',
  });

  const args = parser.parse_args(argv);

  var path_following_mode = map_pb.Edge.Annotations.PATH_MODE_UNKNOWN;

  // In strict mode, disable alternate waypoints and directed exploration
  if (args.strict_mode) {
    args.disable_alternate_route_finding = true;
    args.disable_directed_exploration = true;
    path_following_mode = map_pb.Edge.Annotations.PATH_MODE_STRICT;
    console.log('[ STRICT MODE ENABLED: Alternate waypoints and directed exploration disabled ]');
  }
  var do_map_load, fail_on_question, do_localization, mission_file, map_directory;
  if (args.mission_type === 'simple') {
    do_map_load = false;
    fail_on_question = false;
    do_localization = false;
    mission_file = args.simple_mission_file;
    map_directory = null;
    console.log(`[ REPLAYING SIMPLE MISSION ${mission_file} : HOSTNAME ${args.hostname} ]`);
  } else {
    do_map_load = true;
    fail_on_question = true;
  }
  if (args.noloc) {
    do_localization = false;
  } else {
    do_localization = true;
    map_directory = args.map_directory;
  }
  if (args.autowalk_mission_file) {
    mission_file = args.autowalk_mission_file;
  } else {
    // Missions recorded on tablet prior to 3.2 are saved as "autogenerated".
    mission_file = `${map_directory}/missions/autogenerated`;
    // Missions recorded on tablet after 3.2 are saved as "autogenerated.node".
    // If autogenerated.node exists prefer it.
  }
  if (fs.existsSync(`${mission_file}.node`)) {
    mission_file = `${mission_file}.node`;

    console.log(
      `REPLAYING AUTOWALK MISSION ${mission_file} : MAP DIRECTORY ${map_directory} : HOSTNAME ${args.hostname}  ]`,
    );
  }
  // Initialize robot object
  var robot;
  robot = await init_robot(args.hostname);
  // If (robot.is_estopped() === true) {
  //   robot.logger.warn(
  //     'Robot is estopped. Please use an external E-Stop client, such as the estop SDK example, to configure E-Stop.',
  //   );
  //   process.exit(0);
  // }
  const is_estopped = await robot.is_estopped();

  console.assert(
    !is_estopped,
    'Robot is estopped. Please use an external E-Stop client, such as the estop SDK example, to configure E-Stop.',
  );
  // Check if mission_file exists.
  if (!fs.existsSync(mission_file)) {
    // eslint-disable-next-line max-len
    // If this is a non custom autowalk mission, there were checks for both "autogenerated" and "autogenerated.node" files.
    if (args.mission_type === 'autowalk' && !args.autowalk_mission_file) {
      robot.logger.warn(`[Unable to find mission file: ${mission_file} or ${mission_file}.node}]`);
    } else {
      robot.logger.warn(`[Unable to find mission file: ${mission_file}]`);
      process.exit(0);
    }
  }
  // Acquire robot lease
  robot.logger.info('Acquiring lease...');
  const lease_client = await robot.ensure_client(lease.LeaseClient.default_service_name);
  // Let lease_keepalive = new lease.LeaseKeepAlive(lease_client, null, 'body', 2, null, '', null, true, true, true);
  //  const leases = await lease_client.acquire();
  let lease_keepalive = new lease.LeaseKeepAlive(lease_client, { must_acquire: true, return_at_exit: true });

  try {
    // Initialize power client
    robot.logger.info('Starting power client...');
    const power_client = await robot.ensure_client(PowerClient.default_service_name);

    // Initialize other clients
    const { robot_state_client, command_client, mission_client, graph_nav_client } = await init_clients(
      robot,
      mission_file,
      map_directory,
      do_map_load,
      args.disable_alternate_route_finding,
    );
    // Turn on power
    await power_on(power_client);

    // Stand up and wait for the perception system to stabilize
    robot.logger.info('Commanding robot to stand...');
    await blocking_stand(command_client, 20);
    await countdown(5);
    robot.logger.info('Robot standing.');

    // Localize robot
    let localization_error = false;
    if (do_localization) {
      // eslint-disable-next-line no-unused-vars
      var graph = graph_nav_client.download_graph();
      robot.logger.info('Localizing robot...');
      // eslint-disable-next-line no-unused-vars
      var robot_state = robot_state_client.get_robot_state();
      var localization = nav_pb.Localization();

      // Attempt to localize using any visible fiducial
      var initial_guess_localization, ko_tform_body, max_distance, max_yaw, fiducial_init;
      graph_nav_client.set_localization(
        (initial_guess_localization = localization),
        (ko_tform_body = null),
        (max_distance = null),
        (max_yaw = null),
        (fiducial_init = graph_nav_pb.SetLocalizationRequest.FIDUCIAL_INIT_NEAREST),
      );
    }

    // Run mission
    if (!args.static_mode && !localization_error) {
      if (args.duration === 0.0) {
        await run_mission(
          robot,
          mission_client,
          lease_client,
          fail_on_question,
          args.timeout,
          args.disable_directed_exploration,
          path_following_mode,
        );
      } else {
        await repeat_mission(
          robot,
          mission_client,
          lease_client,
          args.duration,
          fail_on_question,
          args.timeout,
          args.disable_directed_exploration,
          path_following_mode,
        );
      }
    }
  } finally {
    //  Lease_client.return_lease(leases);
  }

  async function init_robot(hostname) {
    // """Initialize robot object"""

    // Initialize SDK
    const sdk = client.sdk.create_standard_sdk('MissionReplay', [MissionClient]);

    // Create robot object
    robot = sdk.create_robot(hostname);

    // Authenticate with robot
    await util.authenticate(robot);

    // Establish time sync with the robot
    await (await robot.time_sync).wait_for_sync();
    return robot;
  }

  async function init_clients(robot, mission_file, map_directory, do_map_load, disable_alternate_route_finding) {
    // """Initialize clients"""
    var mission_client, graph_nav_client, command_client, robot_state_client;
    graph_nav_client = null;
    if (do_map_load === true) {
      if (!fs.existsSync(map_directory)) {
        robot.logger.warn(`[Unable to find map directory: ${map_directory}]`);
        process.exit(0);
      }
      // Create graph-nav client
      robot.logger.info('Creating graph-nav client...');
      graph_nav_client = await robot.ensure_client(GraphNavClient.default_service_name);

      // Clear map state and localization
      robot.logger.info('Clearing graph-nav state...');
      await graph_nav_client.clear_graph();

      // Upload map to robot
      upload_graph_and_snapshots(robot, graph_nav_client, map_directory, disable_alternate_route_finding);
    }
    // Create mission client
    robot.logger.info('Creating mission client...');
    mission_client = robot.ensure_client(MissionClient.default_service_name);

    // Upload mission to robot
    upload_mission(robot, mission_client, mission_file);

    // Create command client
    robot.logger.info('Creating command client...');
    command_client = robot.ensure_client(RobotCommandClient.default_service_name);

    // Create robot state client
    robot.logger.info('Creating robot state client...');
    robot_state_client = robot.ensure_client(RobotStateClient.default_service_name);

    return robot_state_client, command_client, mission_client, graph_nav_client;
  }
  async function countdown(length) {
    for (let i = length; i >= 0; i--) {
      console.log(i);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  async function upload_graph_and_snapshots(robot, client, path, disable_alternate_route_finding) {
    // Load the graph from disk.
    const graph_filename = `${path}/graph`;
    robot.logger.info(`Loading graph from ${graph_filename}`);

    const data = await fs.readFile(graph_filename);
    const current_graph = new map_pb.Graph();
    current_graph.ParseFromString(data);
    robot.logger.info(
      `Loaded graph has ${current_graph.waypoints.length} waypoints and ${current_graph.edges.length} edges`,
    );

    if (disable_alternate_route_finding) {
      for (const edge of current_graph.edges) {
        edge.annotations.disable_alternate_route_finding = true;
      }
    }

    // Load the waypoint snapshots from disk.
    const current_waypoint_snapshots = {};
    for (const waypoint of current_graph.waypoints) {
      if (waypoint.snapshot_id.length === 0) {
        continue;
      }
      const snapshot_filename = `${path}/waypoint_snapshots/${waypoint.snapshot_id}`;
      robot.logger.info(`Loading waypoint snapshot from ${snapshot_filename}`);

      const snapshot_data = await fs.readFile(snapshot_filename);
      const waypoint_snapshot = new map_pb.WaypointSnapshot();
      waypoint_snapshot.ParseFromString(snapshot_data);
      current_waypoint_snapshots[waypoint_snapshot.id] = waypoint_snapshot;
    }

    // Load the edge snapshots from disk.
    const current_edge_snapshots = {};
    for (const edge of current_graph.edges) {
      if (edge.snapshot_id.length === 0) {
        continue;
      }
      const snapshot_filename = `${path}/edge_snapshots/${edge.snapshot_id}`;
      robot.logger.info(`Loading edge snapshot from ${snapshot_filename}`);

      const snapshot_data = await fs.readFile(snapshot_filename);
      const edge_snapshot = new map_pb.EdgeSnapshot();
      edge_snapshot.ParseFromString(snapshot_data);
      current_edge_snapshots[edge_snapshot.id] = edge_snapshot;
    }

    // Upload the graph to the robot.
    robot.logger.info('Uploading the graph and snapshots to the robot...');
    const true_if_empty = current_graph.anchoring.anchors.length === 0;
    const response = await client.upload_graph(current_graph, true_if_empty);
    robot.logger.info('Uploaded graph.');

    // Upload the snapshots to the robot.
    for (const snapshot_id of response.unknown_waypoint_snapshot_ids) {
      const waypoint_snapshot = current_waypoint_snapshots[snapshot_id];
      await client.upload_waypoint_snapshot({ waypoint_snapshot });
      robot.logger.info(`Uploaded ${waypoint_snapshot.id}`);
    }

    for (const snapshot_id of response.unknown_edge_snapshot_ids) {
      const edge_snapshot = current_edge_snapshots[snapshot_id];
      await client.upload_edge_snapshot({ edge_snapshot });
      robot.logger.info(`Uploaded ${edge_snapshot.id}`);
    }
  }

  async function upload_mission(robot, client, filename) {
    // Load the mission from disk
    robot.logger.info(`Loading mission from ${filename}`);

    const data = await fs.readFile(filename);
    const mission_proto = new nodes_pb.Node();
    mission_proto.ParseFromString(data);

    // Upload the mission to the robot
    robot.logger.info('Uploading the mission to the robot...');
    await client.load_mission(mission_proto);
    robot.logger.info('Uploaded mission to robot.');
  }
  async function run_mission(
    robot,
    mission_client,
    lease_client,
    fail_on_question,
    mission_timeout,
    disable_directed_exploration,
    path_following_mode,
  ) {
    // Run mission once
    robot.logger.info('Running mission');

    let mission_state = await mission_client.get_state();

    while (
      mission_state.status === mission_pb.State.STATUS_NONE ||
      mission_state.status === mission_pb.State.STATUS_RUNNING
    ) {
      // We optionally fail if any questions are triggered. This often indicates a problem in
      // Autowalk missions.
      if (mission_state.questions && fail_on_question) {
        robot.logger.info(`Mission failed by triggering operator question: ${mission_state.questions}`);
        return false;
      }

      body_lease = await lease_client.lease_wallet.advance();
      let local_pause_time = new Date().getTime() + mission_timeout;

      let play_settings = new mission_pb.PlaySettings(disable_directed_exploration, path_following_mode);
      await mission_client.play_mission(local_pause_time, [body_lease], play_settings);
      await new Promise(resolve => setTimeout(resolve, 1000));
      mission_state = await mission_client.get_state();
    }
    robot.logger.info(`Mission status = ${mission_state.status}`);

    return (
      mission_state.status === mission_pb.State.STATUS_SUCCESS ||
      mission_state.status === mission_pb.State.STATUS_PAUSED
    );
  }

  async function restart_mission(robot, mission_client, lease_client, mission_timeout) {
    // Restart current mission
    robot.logger.info('Restarting mission');

    body_lease = await lease_client.lease_wallet.advance();
    let local_pause_time = new Date().getTime() + mission_timeout;

    let status = await mission_client.restart_mission(local_pause_time, [body_lease]);
    await new Promise(resolve => setTimeout(resolve, 1000));

    return status === mission_pb.State.STATUS_SUCCESS;
  }
  async function repeat_mission(
    robot,
    mission_client,
    lease_client,
    total_time,
    fail_on_question,
    timeout,
    disable_directed_exploration,
    path_following_mode,
  ) {
    // Repeat mission for period of time
    robot.logger.info(`Repeating mission for ${total_time} seconds.`);

    // Run first mission
    let start_time = new Date().getTime();
    let mission_success = await run_mission(
      robot,
      mission_client,
      lease_client,
      fail_on_question,
      timeout,
      disable_directed_exploration,
      path_following_mode,
    );
    let elapsed_time = new Date().getTime() - start_time;
    robot.logger.info(`Elapsed time = ${elapsed_time} (out of ${total_time})`);

    if (!mission_success) {
      robot.logger.info('Mission failed.');
      return false;
    }

    // Repeat mission until total time has expired
    while (elapsed_time < total_time) {
      await restart_mission(robot, mission_client, lease_client, (mission_timeout = 3));
      mission_success = await run_mission(
        robot,
        mission_client,
        lease_client,
        fail_on_question,
        timeout,
        disable_directed_exploration,
        path_following_mode,
      );

      elapsed_time = new Date().getTime() - start_time;
      robot.logger.info(`Elapsed time = ${elapsed_time} (out of ${total_time})`);

      if (!mission_success) {
        robot.logger.info('Mission failed.');
        break;
      }
    }
    return mission_success;
  }
}
if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch(e => {
      throw e;
    });
} else {
  module.exports = main;
}

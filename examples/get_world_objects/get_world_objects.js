'use strict';

const process = require('node:process');

const argparse = require('argparse');

const util = require('../../bosdyn-client/util');
const { WorldObjectClient } = require('../../bosdyn-client/world_object');
const world_object_pb = require('../../bosdyn/api/world_object_pb');
const client = require('../../index');

async function main(args = null) {
  const parser = argparse.ArgumentParser();
  util.add_common_arguments(parser);

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const sdk = client.sdk.create_standard_sdk('WorldObjectClient');
  const robot = sdk.create_robot(options.hostname);
  await robot.authenticate(options.username, options.password);
  await (await robot.time_sync).wait_for_sync();

  const world_object_client = await robot.ensure_client(WorldObjectClient.default_service_name);

  const world_objects = (await world_object_client.list_world_objects()).getWorldObjectsList();
  console.log(`World objects: x${world_objects.length}`);

  // List all world objects in the scene.
  console.group();
  for (const world_obj of world_objects) {
    console.log(`ID: ${world_obj.getId()}`);
    const full_snapshot = world_obj.getTransformsSnapshot();
    for (const [edge] of full_snapshot.getChildToParentEdgeMapMap().entries()) {
      console.log(
        `Child frame name: ${edge}.`,
        `Parent frame name: ${full_snapshot.getChildToParentEdgeMapMap().get(edge).getParentFrameName()}`,
      );
    }
  }
  console.groupEnd();

  // Get all fiducial objects (an object of a specific type).
  const request_fiducials = [world_object_pb.WorldObjectType.WORLD_OBJECT_APRILTAG];
  const fiducial_objects = (await world_object_client.list_world_objects(request_fiducials)).getWorldObjectsList();
  console.log(
    `Fiducial objects: \n${JSON.stringify(
      fiducial_objects.map(e => e.toObject()),
      null,
      1,
    )}`,
  );

  // Get all objects detected after this time
  let start_time = Date.now();
  let most_recent_objects = (await world_object_client.list_world_objects(null, start_time)).getWorldObjectsList();
  console.log(
    `Recent objects after ${new Date(start_time).toLocaleString()} are: \n${JSON.stringify(
      most_recent_objects.map(e => e.toObject()),
      null,
      1,
    )}`,
  );

  // Get all objects detected after this time in the future (so should get no objects).
  start_time = Date.now() + 1_000_000;
  most_recent_objects = (await world_object_client.list_world_objects(null, start_time)).getWorldObjectsList();
  console.log(
    `Recent objects after ${new Date(start_time).toLocaleString()} are: \n${JSON.stringify(
      most_recent_objects.map(e => e.toObject()),
      null,
      1,
    )}`,
  );
  const clock_skew = world_object_client._timesync_endpoint.clock_skew;
  console.log(`Clock skew seconds: ${clock_skew.getSeconds()} nanos: ${clock_skew.getNanos()}`);

  return true;
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

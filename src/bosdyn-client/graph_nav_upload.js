/**
 * @file Upload a graph and all of its snapshots from the standard file layout to a robot, like
 * bosdyn.client.graph_nav_upload of the Python SDK 5.2.0. Command line: node graph_nav_upload.js ROBOT DIRECTORY
 */

'use strict';

const fs = require('node:fs');
const path = require('node:path');
const process = require('node:process');

const { LoggerUtil } = require('./logger_util');

const graphNavPb = require('../bosdyn/api/graph_nav/graph_nav_pb');
const mapPb = require('../bosdyn/api/graph_nav/map_pb');

/**
 * @typedef {import('./graph_nav').GraphNavClient} GraphNavClient
 */

const _LOGGER = LoggerUtil.getLogger('graph_nav_upload');

// Upload in groups of 16MB.
const MAX_BYTES = 16 * 1024 * 1024;

/**
 * Helper function to upload a graph and all snapshots to a robot. Only supports robots running 5.1.0 or later.
 *
 * This function does not provide much customization. If you need more complicated control of timeouts, async calls,
 * or anything else, please copy the details out and modify them for your use case.
 * @param {GraphNavClient} client GraphNavClient to use for the upload.
 * @param {string} graphDirectory Path to the directory containing the graph and snapshots. Follows the standard file
 * structure and naming conventions.
 * @param {?string} [graphFile=null] Optional path to the graph file. If the path is not absolute, it will be
 * interpreted as relative to the graphDirectory.
 * @returns {Promise<void>}
 */
async function uploadFromDisk(client, graphDirectory, graphFile = null) {
  if (graphFile === null || graphFile === undefined) {
    graphFile = 'graph';
  }
  if (!path.isAbsolute(graphFile)) {
    graphFile = path.join(graphDirectory, graphFile);
  }
  const graph = mapPb.Graph.deserializeBinary(fs.readFileSync(graphFile));
  _LOGGER.info(
    `Uploading graph with ${graph.getWaypointsList().length} waypoints and ${graph.getEdgesList().length} edges`,
  );
  const uploadResponse = await client.uploadGraph(null, graph, false, true);

  async function uploadBatches(name, SnapshotType, snapshotDir, ids, uploadFn) {
    let snapshots = [];
    let numBytes = 0;
    for (const snapshotId of ids) {
      const snapshot = SnapshotType.deserializeBinary(fs.readFileSync(path.join(snapshotDir, snapshotId)));
      // ByteSize() in Python.
      const thisBytes = snapshot.serializeBinary().length;
      if (snapshots.length > 0 && thisBytes + numBytes > MAX_BYTES) {
        _LOGGER.info(`Uploading ${snapshots.length} ${name} snapshots`);
        await uploadFn(snapshots);
        snapshots = [];
        numBytes = 0;
      }
      snapshots.push(snapshot);
      numBytes += thisBytes;
    }
    if (snapshots.length > 0) {
      _LOGGER.info(`Uploading ${snapshots.length} ${name} snapshots`);
      await uploadFn(snapshots);
    }
  }

  // Upload waypoint snapshots.
  await uploadBatches(
    'waypoint',
    mapPb.WaypointSnapshot,
    path.join(graphDirectory, 'waypoint_snapshots'),
    uploadResponse.getUnknownWaypointSnapshotIdsList(),
    snapshots =>
      client.uploadSnapshots(new graphNavPb.UploadSnapshotsRequest.Snapshots().setWaypointSnapshotsList(snapshots)),
  );

  // Upload edge snapshots.
  await uploadBatches(
    'edge',
    mapPb.EdgeSnapshot,
    path.join(graphDirectory, 'edge_snapshots'),
    uploadResponse.getUnknownEdgeSnapshotIdsList(),
    snapshots =>
      client.uploadSnapshots(new graphNavPb.UploadSnapshotsRequest.Snapshots().setEdgeSnapshotsList(snapshots)),
  );
}

/**
 * Command-line interface: upload a graph and all snapshots to a robot.
 * @param {?string[]} [args=null] The arguments (those of the process if null).
 * @returns {Promise<number>} The exit code.
 */
async function main(args = null) {
  const { ArgumentParser } = require('argparse');
  const { GraphNavClient } = require('./graph_nav');
  const { createStandardSdk } = require('./sdk');
  const { addBaseArguments, authenticate } = require('./util');

  const parser = new ArgumentParser({
    description: 'Upload a graph and all snapshots to a robot.  Only supports robots running 5.1.0 or later.',
  });
  addBaseArguments(parser);
  parser.add_argument('graph_directory', {
    help:
      'Path to the directory containing the graph and snapshots.  Follows the standard file structure and naming ' +
      'conventions.',
  });
  parser.add_argument('--graph_file', {
    default: null,
    help:
      'Optional path to the graph file.  If the path is not absolute, it will be interpreted as relative to the ' +
      'graph_directory.',
  });
  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const sdk = createStandardSdk('UploadGraph');
  const robot = sdk.createRobot(options.hostname);
  await authenticate(robot);
  const client = await robot.ensureClient(GraphNavClient.defaultServiceName);

  await uploadFromDisk(client, options.graph_directory, options.graph_file);
  return 0;
}

module.exports = {
  uploadFromDisk,
  main,
};

if (require.main === module) {
  main().then(
    code => {
      process.exitCode = code;
    },
    error => {
      console.error(error);
      process.exitCode = 1;
    },
  );
}

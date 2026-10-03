/**
 * @file Download a graph and all of its snapshots from a robot into the standard file layout, like
 * bosdyn.client.graph_nav_download of the Python SDK 5.2.0. Command line: node graph_nav_download.js ROBOT DIRECTORY
 */

'use strict';

const fs = require('node:fs');
const path = require('node:path');
const process = require('node:process');

const { LoggerUtil } = require('./logger_util');

/**
 * @typedef {import('./graph_nav').GraphNavClient} GraphNavClient
 */

const _LOGGER = LoggerUtil.getLogger('graph_nav_download');

/**
 * Helper function to download a graph and all snapshots from a robot into the standard file layout: the files
 * `graph`, `waypoint_snapshots/<snapshot id>` and `edge_snapshots/<snapshot id>`.
 *
 * This function does not provide much customization. If you need more complicated control of timeouts, async calls,
 * or anything else, please copy the details out and modify them for your use case.
 * @param {GraphNavClient} client GraphNavClient to use for the download.
 * @param {string} downloadDirectory Path to the directory in which to save the downloaded graph and snapshots.
 * @param {boolean} [skipExistingSnapshots=true] If true, will not redownload any files that already exist in the
 * snapshot directories.
 * @returns {Promise<void>}
 */
async function downloadToDisk(client, downloadDirectory, skipExistingSnapshots = true) {
  // Make sure the directories create successfully before doing anything else.
  fs.mkdirSync(downloadDirectory, { recursive: true });
  const wpSnapshotDir = path.join(downloadDirectory, 'waypoint_snapshots');
  fs.mkdirSync(wpSnapshotDir, { recursive: true });
  const edgeSnapshotDir = path.join(downloadDirectory, 'edge_snapshots');
  fs.mkdirSync(edgeSnapshotDir, { recursive: true });

  const graph = await client.downloadGraph();
  fs.writeFileSync(path.join(downloadDirectory, 'graph'), graph.serializeBinary());

  _LOGGER.info(`Downloading snapshots for ${graph.getWaypointsList().length} waypoints`);
  for (const waypoint of graph.getWaypointsList()) {
    if (waypoint.getSnapshotId().length === 0) continue;
    const file = path.join(wpSnapshotDir, waypoint.getSnapshotId());
    if (skipExistingSnapshots && fs.existsSync(file)) continue;
    const waypointSnapshot = await client.downloadWaypointSnapshot(waypoint.getSnapshotId());
    fs.writeFileSync(file, waypointSnapshot.serializeBinary());
  }

  _LOGGER.info(`Downloading snapshots for ${graph.getEdgesList().length} edges`);
  for (const edge of graph.getEdgesList()) {
    if (edge.getSnapshotId().length === 0) continue;
    const file = path.join(edgeSnapshotDir, edge.getSnapshotId());
    if (skipExistingSnapshots && fs.existsSync(file)) continue;
    const edgeSnapshot = await client.downloadEdgeSnapshot(edge.getSnapshotId());
    fs.writeFileSync(file, edgeSnapshot.serializeBinary());
  }
}

/**
 * Command-line interface: download a graph and all snapshots from a robot.
 * @param {?string[]} [args=null] The arguments (those of the process if null).
 * @returns {Promise<number>} The exit code.
 */
async function main(args = null) {
  const { ArgumentParser } = require('argparse');
  const { GraphNavClient } = require('./graph_nav');
  const { createStandardSdk } = require('./sdk');
  const { addBaseArguments, authenticate } = require('./util');

  const parser = new ArgumentParser({ description: 'Download a graph and all snapshots from a robot.' });
  addBaseArguments(parser);
  parser.add_argument('graph_directory', {
    help:
      'Path to the directory in which to save the downloaded graph and snapshots.  Follows the standard file ' +
      'structure and naming conventions.',
  });
  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  // Python names this client UploadGraph too.
  const sdk = createStandardSdk('DownloadGraph');
  const robot = sdk.createRobot(options.hostname);
  await authenticate(robot);
  const client = await robot.ensureClient(GraphNavClient.defaultServiceName);

  await downloadToDisk(client, options.graph_directory);
  return 0;
}

module.exports = {
  downloadToDisk,
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

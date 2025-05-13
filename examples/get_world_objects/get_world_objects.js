#!/usr/bin/env node
'use strict';

const process = require('node:process');

const { ArgumentParser } = require('argparse');

const world_object_pb = require('../../src/bosdyn/api/world_object_pb');
const util = require('../../src/bosdyn-client/util');
const { WorldObjectClient } = require('../../src/bosdyn-client/world_object');
const { createStandardSdk } = require('../../src/index');

async function main(args = null) {
  const parser = new ArgumentParser();
  util.addCommonArguments(parser);

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const sdk = createStandardSdk('WorldObjectClient');
  const robot = sdk.createRobot(options.hostname);
  await robot.authenticate(options.username, options.password);
  await (await robot.timeSync).waitForSync();

  /** @type {WorldObjectClient} */
  const worldObjectClient = await robot.ensureClient(WorldObjectClient.defaultServiceName);

  const worldObjects = (await worldObjectClient.listWorldObjects()).getWorldObjectsList();
  console.log(`World objects: x${worldObjects.length}`);

  // List all world objects in the scene.
  console.group();
  for (const world_obj of worldObjects) {
    console.log(`ID: ${world_obj.getId()}`);
    const fullSnapshot = world_obj.getTransformsSnapshot();
    for (const [edge] of fullSnapshot.getChildToParentEdgeMapMap().entries()) {
      console.log(
        `Child frame name: ${edge}.`,
        `Parent frame name: ${fullSnapshot.getChildToParentEdgeMapMap().get(edge).getParentFrameName()}`,
      );
    }
  }
  console.groupEnd();

  // Get all fiducial objects (an object of a specific type).
  const requestFiducials = [world_object_pb.WorldObjectType.WORLD_OBJECT_APRILTAG];
  const fiducialObjects = (await worldObjectClient.listWorldObjects(requestFiducials)).getWorldObjectsList();
  console.log(
    `Fiducial objects: \n${JSON.stringify(
      fiducialObjects.map(e => e.toObject()),
      null,
      1,
    )}`,
  );

  // Get all objects detected after this time
  let startTime = Date.now();
  let mostRecentObjects = (await worldObjectClient.listWorldObjects(null, startTime)).getWorldObjectsList();
  console.log(
    `Recent objects after ${new Date(startTime).toLocaleString()} are: \n${JSON.stringify(
      mostRecentObjects.map(e => e.toObject()),
      null,
      1,
    )}`,
  );

  // Get all objects detected after this time in the future (so should get no objects).
  startTime = Date.now() + 1_000_000;
  mostRecentObjects = (await worldObjectClient.listWorldObjects(null, startTime)).getWorldObjectsList();
  console.log(
    `Recent objects after ${new Date(startTime).toLocaleString()} are: \n${JSON.stringify(
      mostRecentObjects.map(e => e.toObject()),
      null,
      1,
    )}`,
  );
  const { clockSkew } = worldObjectClient._timesyncEndpoint;
  console.log(`Clock skew seconds: ${clockSkew.getSeconds()} nanos: ${clockSkew.getNanos()}`);

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

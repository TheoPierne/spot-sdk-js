#!/usr/bin/env node
'use strict';

const process = require('node:process');

const { ArgumentParser } = require('argparse');

const dataBufferPb = require('../../src/bosdyn/api/data_buffer_pb');
const parameterPb = require('../../src/bosdyn/api/parameter_pb');
const { DataBufferClient } = require('../../src/bosdyn-client/data_buffer');
const util = require('../../src/bosdyn-client/util');
const { createStandardSdk } = require('../../src/index');

async function addBlob(robot, options) {
  /** @type {DataBufferClient} */
  const dbuffClient = await robot.ensureClient(DataBufferClient.defaultServiceName);
  await (await robot.timeSync).waitForSync();
  const robotTimestamp = await (await robot.timeSync).robotTimestampFromLocalSecs(Date.now());

  // Create a text message proto, just to have something to store.
  const msg = new dataBufferPb.TextMessage()
    .setMessage('test message')
    .setTimestamp(robotTimestamp)
    .setSource('test-source')
    .setLevel(dataBufferPb.TextMessage.Level.LEVEL_INFO)
    .setTag('test');

  const typename = 'bosdyn.api.TextMessage';
  await dbuffClient.addBlob(msg.serializeBinary(), typename, typename, robotTimestamp, options.write_sync);
  console.log('Added message blob.');
}

async function addProtobuf(robot, options) {
  /** @type {DataBufferClient} */
  const dbuffClient = await robot.ensureClient(DataBufferClient.defaultServiceName);
  await (await robot.timeSync).waitForSync();
  const robotTimestamp = await (await robot.timeSync).robotTimestampFromLocalSecs(Date.now());

  // Create a text message proto, just to have something to store.
  const msg = new dataBufferPb.TextMessage()
    .setMessage('test protobuf')
    .setTimestamp(robotTimestamp)
    .setSource(robot.client_name)
    .setLevel(dataBufferPb.TextMessage.Level.LEVEL_INFO)
    .setTag('test');

  await dbuffClient.addProtobuf(msg, undefined, robotTimestamp, options.write_sync);
  console.log('Added protobuf message.');
}

async function addEvent(robot) {
  await (await robot.timeSync).waitForSync();
  await robot.logEvent(
    'examples:example_event',
    dataBufferPb.Event.Level.LEVEL_LOW,
    'This is an example event from demonstrating the API',
    Date.now(),
    undefined,
    undefined,
    [
      new parameterPb.Parameter().setLabel('test:length').setUnits('m').setFloatValue(3.141),
      new parameterPb.Parameter().setLabel('test:boolean').setBoolValue(true),
    ],
  );
  console.log('Added event.');
}

async function main(args = null) {
  const parser = new ArgumentParser();
  util.addCommonArguments(parser);
  const subparsers = parser.add_subparsers({ help: 'commands', dest: 'command' });
  const operatorParser = subparsers.add_parser('operator', { help: 'add operator comment' });
  operatorParser.add_argument('message', { help: 'operator comment message' });

  const blobParser = subparsers.add_parser('blob', { help: 'write a blob to the log' });
  blobParser.add_argument('--write-sync', { action: 'store_true', help: 'ensure data is on disk before returning' });

  const protobufParser = subparsers.add_parser('protobuf', { help: 'serialize a protobuf to the log' });
  protobufParser.add_argument('--write-sync', {
    action: 'store_true',
    help: 'ensure data is on disk before returning',
  });

  subparsers.add_parser('event', { help: 'add an event to the log' });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const sdk = createStandardSdk('DataBufferClientExample');
  const robot = sdk.createRobot(options.hostname);
  await robot.authenticate(options.username, options.password);
  await (await robot.timeSync).waitForSync();

  if (options.command === 'operator') {
    // If timestamp is not given, robot uses current time on message receipt.
    await robot.operatorComment(options.message);
    console.log('Added operator comment');
  } else if (options.command === 'event') {
    await addEvent(robot);
  } else if (options.command === 'blob') {
    await addBlob(robot, options);
  } else if (options.command === 'protobuf') {
    await addProtobuf(robot, options);
  } else {
    parser.print_help();
    return false;
  }
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

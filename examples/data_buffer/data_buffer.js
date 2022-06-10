'use strict';

const argparse = require('argparse');

const util = require('../../bosdyn-client/util');
const client = require('../../index');

const { DataBufferClient } = require('../../bosdyn-client/data_buffer');

const parameter_pb = require('../../bosdyn/api/parameter_pb');
const data_buffer_pb = require('../../bosdyn/api/data_buffer_pb');

async function add_blob(robot, options){
  const client = await robot.ensure_client(DataBufferClient.default_service_name);
  await (await robot.time_sync).wait_for_sync();
  const robot_timestamp = await (await robot.time_sync).robot_timestamp_from_local_secs(Date.now());

  // Create a text message proto, just to have something to store.
  const msg = new data_buffer_pb.TextMessage()
  .setMessage('test message')
  .setTimestamp(robot_timestamp)
  .setSource('test-source')
  .setLevel(data_buffer_pb.TextMessage.Level.LEVEL_INFO)
  .setTag('test');

  const typename = 'bosdyn.api.TextMessage';
  await client.add_blob(msg.serializeBinary(), typename, typename, robot_timestamp, options.write_sync);
  console.log("Added message blob.");
}

async function add_protobuf(robot, options){
  const client = await robot.ensure_client(DataBufferClient.default_service_name);
  await (await robot.time_sync).wait_for_sync();
  const robot_timestamp = await (await robot.time_sync).robot_timestamp_from_local_secs(Date.now());

  // Create a text message proto, just to have something to store.
  const msg = new data_buffer_pb.TextMessage()
  .setMessage('test protobuf')
  .setTimestamp(robot_timestamp)
  .setSource(robot.client_name)
  .setLevel(data_buffer_pb.TextMessage.Level.LEVEL_INFO)
  .setTag('test');

  await client.add_protobuf(msg, undefined, robot_timestamp, options.write_sync);
  console.log("Added protobuf message.");
}

async function add_event(robot){
  await (await robot.time_sync).wait_for_sync();
  await robot.log_event('examples:example_event', data_buffer_pb.Event.Level.LEVEL_LOW, 'This is an example event from demonstrating the API',
    Date.now(), undefined, undefined, [
    new parameter_pb.Parameter().setLabel('test:length').setUnits('m').setFloatValue(3.141),
    new parameter_pb.Parameter().setLabel('test:boolean').setBoolValue(true)
    ]);
  console.log("Added event.");
}


async function main(args = null){
  const parser = argparse.ArgumentParser();
  util.add_common_arguments(parser);
  const subparsers = parser.add_subparsers({help: 'commands', dest: 'command'});
  const operator_parser = subparsers.add_parser('operator', {help: 'add operator comment'});
  operator_parser.add_argument('message', {help: 'operator comment message'});

  const blob_parser = subparsers.add_parser('blob', {help: 'write a blob to the log'});
  blob_parser.add_argument('--write-sync', {action:'store_true', help:'ensure data is on disk before returning'});

  const protobuf_parser = subparsers.add_parser('protobuf', {help: 'serialize a protobuf to the log'});
  protobuf_parser.add_argument('--write-sync', {action: 'store_true', help: 'ensure data is on disk before returning'});

  subparsers.add_parser('event', {help: 'add an event to the log'});

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const sdk = client.sdk.create_standard_sdk('DataBufferClientExample');
  const robot = sdk.create_robot(options.hostname);
  await robot.authenticate(options.username, options.password);
  await (await robot.time_sync).wait_for_sync();

  if (options.command === 'operator') { 
    // If timestamp is not given, robot uses current time on message receipt.
    await robot.operator_comment(options.message);
    console.log("Added operator comment");
  } else if (options.command === 'event') {
    await add_event(robot);
  } else if (options.command === 'blob') {
    await add_blob(robot, options);
  } else if (options.command === 'protobuf') {
    await add_protobuf(robot, options);
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
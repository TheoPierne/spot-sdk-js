'use strict';

const fs = require('fs');
const argparse = require('argparse');
const nodes_pb = require('../../../bosdyn/api/mission/nodes_pb.js');
const remote_mission_service = require('../bosdyn/api/mission/remote_service_grpc_pb');
const util_pb = require('../bosdyn/api/mission/util_pb');

if (require.main === module) {
  const parser = new argparse.ArgumentParser();
  parser.addArgument('output_file', { help: 'File to save the mission to.' });
  parser.addArgument('--add-resources', {
    help: 'Resource the remote mission needs, like "body". Can be comma separated for multiple resources.',
  });
  parser.addArgument('--user-string', {
    help: 'Specify the user-string input to Tick. Set to the node name in Autowalk missions.',
  });
  const options = parser.parseArgs();

  // Build our mission!
  const missionCall = new nodes_pb.RemoteGrpc();
  missionCall.serviceName = remote_mission_service.SERVICE_NAME_IN_DIRECTORY;
  if (options.addResources) {
    missionCall.leaseResources = options.addResources.split(',');
  }
  missionCall.host = 'localhost';

  if (options.userString) {
    const name = 'user-string';
    const value = new util_pb.Value();
    value.constant = new util_pb.ConstantValue();
    value.constant.stringValue = options.userString;
    missionCall.inputs.add(new util_pb.KeyValue({ key: name, value: value }));
  }

  const mission = new nodes_pb.Node();
  mission.impl.pack(missionCall);

  fs.writeFileSync(options.outputFile, mission.serializeToString());
}

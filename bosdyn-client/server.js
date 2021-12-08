const robot_id_pb = require('../bosdyn/api/robot_id_pb');
const robot_id_service_grpc_pb = require('../bosdyn/api/robot_id_service_grpc_pb');

const auth_pb = require('../bosdyn/api/auth_pb');
const auth_service_grpc_pb = require('../bosdyn/api/auth_service_grpc_pb');

const directory_pb = require('../bosdyn/api/directory_pb');
const directory_service_pb_grpc = require('../bosdyn/api/directory_service_grpc_pb');

const header_pb = require('../bosdyn/api/header_pb');
const {populate_response_header} = require('./util');
const {now_timestamp} = require('../bosdyn-core/util');

const grpc = require('@grpc/grpc-js');

function getRobotId(call, callback) {
  console.log(`Nouvelle requete [ID] !`);
  let reply = new robot_id_pb.RobotIdResponse();
  populate_response_header(reply, call.request);

  const versionSoftwareRelease = new robot_id_pb.SoftwareVersion()
  .setMajorVersion(1)
  .setMinorVersion(0)
  .setPatchLevel(0);

  const softwareRelease = new robot_id_pb.RobotSoftwareRelease()
  .setName('TEST_RELEASE')
  .setType('TEST_TYPE')
  .setChangeset('TEST CHANGE SET')
  .setChangesetDate(now_timestamp())
  .setInstallDate(now_timestamp())
  .setApiVersion('v1.0.0')
  .setVersion(versionSoftwareRelease);

  const robotId = new robot_id_pb.RobotId()
  .setSerialNumber('1203')
  .setNickname('TEST_SERVER')
  .setSpecies('SERVER')
  .setVersion('1.0.0')
  .setSoftwareRelease(softwareRelease);

  reply.setRobotId(robotId);
  callback(null, reply);
}

function getAuthToken(call, callback){
  console.log(`Nouvelle requete [TOKEN] !`);
  let reply = new auth_pb.GetAuthTokenResponse();
  populate_response_header(reply, call.request);

  reply.setStatus(1).setToken('TEST_TOKEN');

  callback(null, reply);
}

function listServiceEntries(call, callback){
  console.log(`Nouvelle requete [DIRECTORY] !`);
  let reply = new directory_pb.ListServiceEntriesResponse();
  populate_response_header(reply, call.request);

  const serviceAuth = new directory_pb.ServiceEntry()
  .setName('auth')
  .setType('bosdyn.api.AuthService')
  .setAuthority('auth.spot.robot');

  const serviceDirectory = new directory_pb.ServiceEntry()
  .setName('directory')
  .setType('bosdyn.api.DirectoryService')
  .setAuthority('api.spot.robot')
  .setUserTokenRequired(true);

  reply.setServiceEntriesList([serviceAuth, serviceDirectory]);

  callback(null, reply);
}

function getServiceEntry(call, callback){
  console.log(`Nouvelle requete [DIRECTORY] !`);
  let reply = new directory_pb.GetServiceEntryResponse();
  populate_response_header(reply, call.request);

  const serviceDirectory = new directory_pb.ServiceEntry()
  .setName('directory')
  .setType('bosdyn.api.DirectoryService')
  .setAuthority('api.spot.robot')
  .setUserTokenRequired(true);

  reply.setStatus(1).setServiceEntry(serviceDirectory);

  callback(null, reply);
}

function main() {
  var server = new grpc.Server();
  server.addService(robot_id_service_grpc_pb.RobotIdServiceService, {getRobotId: getRobotId});
  server.addService(auth_service_grpc_pb.AuthServiceService, {getAuthToken: getAuthToken});
  server.addService(directory_service_pb_grpc.DirectoryServiceService, {listServiceEntries: listServiceEntries, getServiceEntry: getServiceEntry})
  server.bindAsync('0.0.0.0:443', grpc.ServerCredentials.createInsecure(), () => {
    console.log('Server started !')
    server.start();
  });
}

main();

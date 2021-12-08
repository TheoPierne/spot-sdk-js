const robot_id_pb = require('../bosdyn/api/robot_id_pb.js');
const robot_id_service_grpc_pb = require('../bosdyn/api/robot_id_service_grpc_pb.js');

const grpc = require('@grpc/grpc-js');

/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
  console.log(call.request)
  var reply = new robot_id_pb.RobotIdResponse();
  //reply.setMessage('Hello ' + call.request.getName());
  callback(null, reply);
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  var server = new grpc.Server();
  server.addService(robot_id_service_grpc_pb.RobotIdServiceService, {getRobotId: sayHello});
  server.bindAsync('localhost:443', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
}

main();
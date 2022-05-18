'use strict';

const grpc = require('@grpc/grpc-js');

const robot_id_pb = require('../bosdyn/api/robot_id_pb.js');
const robot_id_service_grpc_pb = require('../bosdyn/api/robot_id_service_grpc_pb.js');

// Let channel = new grpc.Channel('localhost:50000', grpc.credentials.createInsecure());

let client = new robot_id_service_grpc_pb.RobotIdServiceClient('localhost:50000', grpc.credentials.createInsecure());
let request = new robot_id_pb.RobotIdRequest();

client.getRobotId(request, (err, res) => {
  console.log(err, res);
});

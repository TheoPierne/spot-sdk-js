const grpc = require('@grpc/grpc-js');

const robot_id_pb = require('../bosdyn/api/robot_id_pb.js');
const robot_id_service_grpc_pb = require('../bosdyn/api/robot_id_service_grpc_pb.js');

var channel = new grpc.Channel('localhost:50000', grpc.credentials.createInsecure());

var client = new robot_id_service_grpc_pb.RobotIdServiceClient('localhost:50000', grpc.credentials.createInsecure());
var request = new robot_id_pb.RobotIdRequest();

client.getRobotId(request, (err, res) => {
	console.log(err, res);
})
'use strict';

const grpc = require('@grpc/grpc-js');

const header_pb = require('../bosdyn/api/header_pb');

/**
 * Starts a service listening on a port and points client to it.
 * The service should have already been instantiated. It will be
 * attached to a server listening on an ephemeral port and started.
 * The client will have a networking channel which points to that service.
 * @param {*} client The BaseClient derived client to use in a test.
 * @param {*} service The function to add a service to a server. This is
 * specified in the gRPC generated python, with a name like
 * add_FooServiceServicer_to_server. Unfortunately, there's not an easy
 * way to get to that method from the Service class.
 * @returns {grpc.Server}
 */
function setup_client_and_service(client, service) {
  const server = new grpc.Server();
  server.addService(service.service, service.func);
  server.bindAsync('0.0.0.0:54520', grpc.ServerCredentials.createInsecure(), err => {
    if (err) {
      console.error(err);
      return;
    }

    server.start();
  });

  const channel = new grpc.Channel('0.0.0.0:54520', grpc.credentials.createInsecure());
  client.channel = channel;
  return server;
}

/**
 * Sets the common header on the response.
 * @param {*} response The response object to fill the header with.
 * @param {*} request The request to be echoed in the response common header.
 * @param {?number} error_code The code to use, OK by default.
 * @param {?string} error_message Any error message to include, empty by default.
 */
function add_common_header(response, request, error_code = header_pb.CommonError.Code.CODE_OK, error_message = null) {
  const header = new header_pb.ResponseHeader();
  header.setRequestHeader(request.getHeader());
  header.setError(new header_pb.CommonError().setCode(error_code));
  if (error_message) {
    header.getError().setMessage(error_message);
  }
  response.setHeader(header);
}

module.exports = {
  setup_client_and_service,
  add_common_header,
};

'use strict';

const grpc = require('@grpc/grpc-js');

const headerPb = require('../src/bosdyn/api/header_pb');

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
function setupClientAndService(client, service) {
  const server = new grpc.Server();
  server.addService(service.servicer, service.service);
  server.bindAsync('127.0.0.1:54520', grpc.ServerCredentials.createInsecure(), err => {
    if (err) {
      console.error(err);
    }
  });

  const channel = new grpc.Channel('127.0.0.1:54520', grpc.credentials.createInsecure(), {});
  client.channel = channel;
  return server;
}

/**
 * Sets the common header on the response.
 * @param {*} response The response object to fill the header with.
 * @param {*} request The request to be echoed in the response common header.
 * @param {?number} errorCode The code to use, OK by default.
 * @param {?string} errorMessage Any error message to include, empty by default.
 */
function addCommonHeader(response, request, errorCode = headerPb.CommonError.Code.CODE_OK, errorMessage = null) {
  const header = new headerPb.ResponseHeader();
  header.setRequestHeader(request.getHeader());
  header.setError(new headerPb.CommonError().setCode(errorCode));
  if (errorMessage) {
    header.getError().setMessage(errorMessage);
  }
  response.setHeader(header);
}

module.exports = {
  setupClientAndService,
  addCommonHeader,
};

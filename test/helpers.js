'use strict';

const { after } = require('node:test');

const grpc = require('@grpc/grpc-js');

const headerPb = require('../src/bosdyn/api/header_pb');

const _servers = new Set();
const _channels = new Set();

// Shut down what the tests of the file started, even when a test failed before shutting down its server: a server
// left running kept the process alive.
after(() => {
  _servers.forEach(server => server.forceShutdown());
  _channels.forEach(channel => channel.close());
});

/**
 * Starts a service listening on a port and points client to it.
 * The service should have already been instantiated. It will be
 * attached to a server listening on an ephemeral port and started.
 * The client will have a networking channel which points to that service.
 * @param {*} client The BaseClient derived client to use in a test.
 * @param {{servicer: grpc.ServiceDefinition, service: Object}} service The service definition and its
 * implementation.
 * @returns {Promise<grpc.Server>}
 */
async function setupClientAndService(client, service) {
  const server = new grpc.Server();
  server.addService(service.servicer, service.service);
  // An ephemeral port: a fixed one made the test files collide, and the tests reach the server of a previous test.
  const port = await new Promise((resolve, reject) => {
    server.bindAsync('127.0.0.1:0', grpc.ServerCredentials.createInsecure(), (err, boundPort) =>
      err ? reject(err) : resolve(boundPort),
    );
  });
  _servers.add(server);

  const channel = new grpc.Channel(`127.0.0.1:${port}`, grpc.credentials.createInsecure(), {});
  _channels.add(channel);
  client.channel = channel;
  return server;
}

/**
 * Sets the common header on the response.
 * @param {*} response The response object to fill the header with.
 * @param {*} request The request to be echoed in the response common header.
 * @param {?number} errorCode The code to use, OK by default.
 * @param {?string} errorMessage Any error message to include, empty by default.
 * @returns {*} The response, to chain it.
 */
function addCommonHeader(response, request, errorCode = headerPb.CommonError.Code.CODE_OK, errorMessage = null) {
  const header = new headerPb.ResponseHeader();
  header.setRequestHeader(request.getHeader());
  header.setError(new headerPb.CommonError().setCode(errorCode));
  if (errorMessage) {
    header.getError().setMessage(errorMessage);
  }
  response.setHeader(header);
  return response;
}

module.exports = {
  setupClientAndService,
  addCommonHeader,
};

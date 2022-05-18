'use strict';

const { readdirSync } = require('node:fs');
const process = require('node:process');

const grpc = require('@grpc/grpc-js');

const server = new grpc.Server();

readdirSync('./server_services')
  .filter(file => file.endsWith('.js'))
  .forEach(e => {
    const file = require(`./server_services/${e}`);
    server.addService(file.service, file.func);
  });

server.bindAsync('0.0.0.0:443', grpc.ServerCredentials.createInsecure(), () => {
  console.log(`[SERVER] Server started with ${server.handlers.size} services !`);
  server.start();
});

process.stdin.resume();
process.on('exit', exitHandler.bind(null, { cleanup: true }));
process.on('SIGINT', exitHandler.bind(null, { exit: true }));

function exitHandler(options) {
  if (options.cleanup) {
    server.forceShutdown();
    console.log('[SERVER] Server stopped !');
  }

  if (options.exit) {
    process.exit(0);
  }
}

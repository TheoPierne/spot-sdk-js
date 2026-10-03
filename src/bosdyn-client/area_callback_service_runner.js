/**
 * @file Runs an area callback service: a gRPC server for the servicer, registered in the directory of the robot and
 * kept registered, like bosdyn.client.area_callback_service_runner in Python.
 */

'use strict';

const { DirectoryRegistrationClient, DirectoryRegistrationKeepAlive } = require('./directory_registration');
const { GrpcServiceRunner } = require('./server_util');

const { AreaCallbackServiceService } = require('../bosdyn/api/graph_nav/area_callback_service_grpc_pb');

/**
 * @typedef {import('./area_callback_service_servicer').AreaCallbackServiceServicer} AreaCallbackServiceServicer
 * @typedef {import('./robot').Robot} Robot
 */

/**
 * Helper function to start AreaCallback service and register it with directory keep alive.
 * @param {Robot} robot Robot object to use for directory registration.
 * @param {AreaCallbackServiceServicer} service The AreaCallbackService implementation.
 * @param {number} port Port the AreaCallback service should connect to (0 for an ephemeral port).
 * @param {string} hostIp The IP address of the computer hosting this endpoint.
 * @returns {Promise<[GrpcServiceRunner, DirectoryRegistrationKeepAlive]>} Once the service is started and its
 * registration kept alive.
 */
async function runService(robot, service, port, hostIp) {
  const serviceRunner = new GrpcServiceRunner(service, AreaCallbackServiceService, port, 1);
  try {
    // The bound port (grpc-js binds asynchronously).
    await serviceRunner.waitForStart();

    const dirRegClient = await robot.ensureClient(DirectoryRegistrationClient.defaultServiceName);
    const keepAlive = new DirectoryRegistrationKeepAlive(dirRegClient);
    const serviceName = service.areaCallbackServiceConfig.serviceName;
    await keepAlive.start(serviceName, service.constructor.SERVICE_TYPE, serviceName, hostIp, serviceRunner.port);

    return [serviceRunner, keepAlive];
  } catch (err) {
    // Unlike Python, the server is not left running when the registration fails.
    await serviceRunner.stop();
    throw err;
  }
}

module.exports = {
  runService,
};

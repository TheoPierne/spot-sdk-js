export type AreaCallbackServiceServicer = import("./area_callback_service_servicer").AreaCallbackServiceServicer;
export type Robot = import("./robot").Robot;
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
export function runService(robot: Robot, service: AreaCallbackServiceServicer, port: number, hostIp: string): Promise<[GrpcServiceRunner, DirectoryRegistrationKeepAlive]>;
import { GrpcServiceRunner } from "./server_util";
import { DirectoryRegistrationKeepAlive } from "./directory_registration";

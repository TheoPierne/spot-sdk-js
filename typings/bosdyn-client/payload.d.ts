export type RpcError = import("./exceptions").RpcError;
/**
 * A client handling payload configs.
 * @extends {BaseClient<PayloadServiceClient>}
 */
export class PayloadClient extends BaseClient<PayloadServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * List all payloads registered on the robot.
     * @param {Object} [args] Extra arguments to pass to grpc call invocation.
     * @returns {Promise<payloadPb.Payload[]>} A list of the proto message definitions of all registered payloads
     * @throws {RpcError} Problem communicating with the robot.
     */
    listPayloads(args?: Object): Promise<payloadPb.Payload[]>;
}
import { PayloadServiceClient } from "../../src/bosdyn/api/payload_service_grpc_pb";
import { BaseClient } from "./common";
import payloadPb = require("../../src/bosdyn/api/payload_pb");

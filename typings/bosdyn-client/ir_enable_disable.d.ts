/**
 * Client to enable and/or disable the robot's IR light emitters in the body and hand sensors.
 * @extends {BaseClient<irEnableDisableServiceGrpcPb.IREnableDisableServiceClient>}
 */
export class IREnableDisableServiceClient extends BaseClient<irEnableDisableServiceGrpcPb.IREnableDisableServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Enable and/or disable the robot's IR light emitters.
     * @param {boolean} enable Whether or not to enable the emitters.
     * @param {Object} [args] Args to be send with the gRPC request
     * @returns {Promise<irEnableDisablePb.IREnableDisableResponse>}
     */
    setIrEnabled(enable: boolean, args?: Object): Promise<irEnableDisablePb.IREnableDisableResponse>;
}
import irEnableDisableServiceGrpcPb = require("../../src/bosdyn/api/ir_enable_disable_service_grpc_pb");
import { BaseClient } from "./common";
import irEnableDisablePb = require("../../src/bosdyn/api/ir_enable_disable_pb");

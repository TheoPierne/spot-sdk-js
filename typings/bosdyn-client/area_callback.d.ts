/**
 * @extends {BaseClient<AreaCallbackServiceClient>}
 */
export class AreaCallbackClient extends BaseClient<AreaCallbackServiceClient> {
    static serviceType: string;
    static defaultServiceName: null;
    constructor();
    areaCallbackInformation(request: null | undefined, args: any): Promise<any>;
    beginCallback(request: any, args: any): Promise<any>;
    beginControl(request: any, args: any): Promise<any>;
    /**
     * @deprecated Misspelled: use beginControl().
     */
    beginControll(request: any, args: any): Promise<any>;
    updateCallback(request: any, args: any): Promise<any>;
    endCallback(request: any, args: any): Promise<any>;
}
/** General class of errors for AreaCallback service. */
export class AreaCallbackResponseError extends ResponseError {
}
/** Provided command id does not match the current command id. */
export class InvalidCommandIdError extends AreaCallbackResponseError {
}
/** The provided configuration does not provide the necessary data. */
export class InvalidConfigError extends AreaCallbackResponseError {
}
/** The provided end time has already expired. */
export class ExpiredEndTimeError extends AreaCallbackResponseError {
}
/** A required lease resource was not provided. */
export class MissingLeaseResourcesError extends AreaCallbackResponseError {
}
/** The callback failed to shut down properly. */
export class ShutdownCallbackFailedError extends AreaCallbackResponseError {
}
import { AreaCallbackServiceClient } from "../../src/bosdyn/api/graph_nav/area_callback_service_grpc_pb";
import { BaseClient } from "./common";
import { ResponseError } from "./exceptions";

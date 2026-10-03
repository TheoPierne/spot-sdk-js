export type RpcError = import("./exceptions").RpcError;
export type Robot = import("./robot").Robot;
export type TimeSyncEndpoint = import("./time_sync").TimeSyncEndpoint;
export type Timestamp = import("google-protobuf/google/protobuf/timestamp_pb").Timestamp;
export type Metadata = import("../../src/bosdyn/api/data_acquisition_pb").Metadata;
/**
 * A client for triggering data acquisition and logging.
 * @extends {BaseClient<DataAcquisitionServiceClient>}
 */
export class DataAcquisitionClient extends BaseClient<DataAcquisitionServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    /**
     * Create an instance of AuthClient's class.
     * @param {?string} name BaseClient name.
     */
    constructor(name?: string | null);
    /** @type {TimeSyncEndpoint} */
    _timesyncEndpoint: TimeSyncEndpoint;
    /**
     * Update instance from another object.
     * @param {Robot} other The object where to copy from.
     * @returns {Promise<void>}
     */
    updateFrom(other: Robot): Promise<void>;
    /**
     * Make an AcquireDataRequest message, with the data timestamp in robot time when time sync is available.
     * @param {dataAcquisitionPb.AcquisitionRequestList} acquisitionRequests The different image sources and
     * data sources to capture from and save to the data buffer with the same timestamp.
     * @param {string} actionName The unique action name that all data will be saved with.
     * @param {string} groupName The unique group name that all data will be saved with.
     * @param {?Timestamp} dataTimestamp The unique timestamp that all data will be
     * saved with.
     * @param {?(Metadata|object)} metadata The JSON structured metadata to be associated with
     * the data returned by the DataAcquisitionService when logged in the data buffer service.
     * @param {?number} minTimeout The minimum time to wait, in seconds.
     * @returns {dataAcquisitionPb.AcquireDataRequest}
     * @throws {ValueError} Metadata is not in the right format.
     */
    makeAcquireDataRequest(acquisitionRequests: dataAcquisitionPb.AcquisitionRequestList, actionName: string, groupName: string, dataTimestamp?: Timestamp | null, metadata?: (Metadata | object) | null, minTimeout?: number | null): dataAcquisitionPb.AcquireDataRequest;
    /**
     * Trigger a data acquisition to save data and metadata to the data buffer.
     * @param {Object} acquisitionRequests The different image sources and
     * data sources to capture from and save to the data buffer with the same timestamp.
     * @param {string} actionName The unique action name that all data will be saved with.
     * @param {string} groupName The unique group name that all data will be saved with.
     * @param {?Timestamp} dataTimestamp The unique timestamp that all data will be
     * saved with.
     * @param {?(Metadata|object)} metadata The JSON structured metadata to be associated with
     * the data returned by the DataAcquisitionService when logged in the data buffer
     * service.
     * @param {?number} minTimeout The minimum time to wait, in seconds like Python (unlike the timeout of args, in
     * milliseconds).
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<number>} If the RPC is successful, then it will return
     * the acquire data request id, which can be used to check the status of the acquisition and get feedback.
     * @throws {RpcError} Problem communicating with the robot.
     */
    acquireData(acquisitionRequests: Object, actionName: string, groupName: string, dataTimestamp?: Timestamp | null, metadata?: (Metadata | object) | null, minTimeout?: number | null, args?: Object): Promise<number>;
    /**
     * Alternate version of acquireData() that takes an AcquireDataRequest directly.
     * @param {dataAcquisitionPb.AcquireDataRequest} request The request to send
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataAcquisitionPb.AcquireDataResponse>}
     */
    acquireDataFromRequest(request: dataAcquisitionPb.AcquireDataRequest, args?: Object): Promise<dataAcquisitionPb.AcquireDataResponse>;
    /**
     * Check the status of a data acquisition based on the request id.
     * @param {number} requestId The request id associated with an AcquireData request.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataAcquisitionPb.GetStatusResponse>} If the RPC is successful, then it will return
     * the full status response, which includes the status as well as other information about any possible errors.
     * @throws {RpcError} Problem communicating with the robot.
     * @throws {RequestIdDoesNotExistError} The request id provided is incorrect.
     */
    getStatus(requestId: number, args?: Object): Promise<dataAcquisitionPb.GetStatusResponse>;
    /**
     * Get information from a DAQ service to list it's capabilities - which data, metadata,
     * or processing the DAQ service will perform.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataAcquisitionPb.AcquisitionCapabilityList>} The GetServiceInfoResponse message,
     * which contains all the different capabilities.
     * @throws {RpcError} Problem communicating with the robot.
     */
    getServiceInfo(args?: Object): Promise<dataAcquisitionPb.AcquisitionCapabilityList>;
    /**
     * Cancel a data acquisition based on the request id.
     * @param {number} requestId The request id associated with an AcquireData request.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataAcquisitionPb.CancelAcquisitionResponse>} If the RPC is successful, then it will return the
     * full status response, which includes the status as well as other information about any possible errors.
     * @throws {RpcError} Problem communicating with the robot.
     * @throws {CancellationFailedError} The data acquisitions associated with the request id were unable to be cancelled.
     * @throws {RequestIdDoesNotExistError} The request id provided is incorrect.
     */
    cancelAcquisition(requestId: number, args?: Object): Promise<dataAcquisitionPb.CancelAcquisitionResponse>;
    /**
     * Call the GetLiveData RPC of the plugin service.
     * @param {dataAcquisitionPb.LiveDataRequest} request The data_acquisition_pb.LiveDataRequest to be send
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataAcquisitionPb.LiveDataResponse>}
     */
    getLiveData(request: dataAcquisitionPb.LiveDataRequest, args?: Object): Promise<dataAcquisitionPb.LiveDataResponse>;
}
/**
 * @typedef {import('./exceptions').RpcError} RpcError
 * @typedef {import('./robot').Robot} Robot
 * @typedef {import('./time_sync').TimeSyncEndpoint} TimeSyncEndpoint
 * @typedef {import('google-protobuf/google/protobuf/timestamp_pb').Timestamp} Timestamp
 * @typedef {import('../../src/bosdyn/api/data_acquisition_pb').Metadata} Metadata
 */
/** Error in Data Acquisition RPC */
export class DataAcquisitionResponseError extends ResponseError {
}
/** The provided request id does not exist or is invalid. */
export class RequestIdDoesNotExistError extends DataAcquisitionResponseError {
}
/** The provided request contains unknown capture requests. */
export class UnknownCaptureTypeError extends DataAcquisitionResponseError {
}
/** The data acquisition request was unable to be cancelled. */
export class CancellationFailedError extends DataAcquisitionResponseError {
}
/**
 * The Metadata proto of metadata given as a proto or as an object.
 * @param {?(dataAcquisitionPb.Metadata|Object)} metadata The JSON structured metadata.
 * @returns {?dataAcquisitionPb.Metadata} null if there is no metadata.
 * @throws {ValueError} Metadata is not in the right format.
 */
export function metadataToProto(metadata: (dataAcquisitionPb.Metadata | Object) | null): dataAcquisitionPb.Metadata | null;
export const acquireDataError: (...args: any[]) => any;
export const _getLiveDataError: (...args: any[]) => any;
import { DataAcquisitionServiceClient } from "../../src/bosdyn/api/data_acquisition_service_grpc_pb";
import { BaseClient } from "./common";
import dataAcquisitionPb = require("../../src/bosdyn/api/data_acquisition_pb");
import { ResponseError } from "./exceptions";

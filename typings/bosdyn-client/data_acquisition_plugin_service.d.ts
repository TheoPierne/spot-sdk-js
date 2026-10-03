export type Logger = import("./logger_util").Logger;
/**
 * How long should completed requests be queryable, in seconds (it was 30000).
 * @type {number}
 */
export const kDefaultRequestExpiration: number;
/**
 * The request has been cancelled and should no longer be handled.
 */
export class RequestCancelledError extends Error {
    constructor(message?: string);
}
/**
 * Helper to simplify creating a DataError to send to RequestState.addErrors.
 * @param {dataAcquisitionPb.DataIdentifier} dataId The proto for the data identifier which has an error.
 * @param {string} errorMsg The error message to associate with the data id.
 * @param {?import('google-protobuf').Message} [errorData=null] Additional data to be packed with the error.
 * @returns {dataAcquisitionPb.DataError}
 */
export function makeError(dataId: dataAcquisitionPb.DataIdentifier, errorMsg: string, errorData?: import("google-protobuf").Message | null): dataAcquisitionPb.DataError;
/**
 * Interface for a data collection to update its state as it proceeds.
 *
 * Each AcquirePluginData RPC made to the plugin service creates an instance of RequestState to manage the incoming
 * acquisition request's overall state, including if it has been cancelled, any errors that occur, and the current
 * status of the request.
 */
export class RequestState {
    /**
     * Statuses for the GetStatus RPC which indicate the data acquisition and saving is still in progress and has not
     * completed or failed.
     * @type {number[]}
     */
    static kNonError: number[];
    /**
     * Boolean indicating if a CancelAcquisition RPC has been received for this acquisition request.
     * @type {boolean}
     */
    _cancelled: boolean;
    /**
     * The current status of the request, including any data errors.
     * @type {dataAcquisitionPb.GetStatusResponse}
     */
    _statusProto: dataAcquisitionPb.GetStatusResponse;
    /**
     * The time which the acquisition request completes; used by the RequestManager for cleanup.
     * @type {?number}
     */
    _completionTime: number | null;
    /**
     * Update the status of the request.
     * @param {dataAcquisitionPb.GetStatusResponse.Status} status An updated status enum to be set in the stored
     * GetStatusResponse.
     * @returns {void}
     * @throws {RequestCancelledError}
     */
    setStatus(status: dataAcquisitionPb.GetStatusResponse.Status): void;
    /**
     * Mark that everything is complete.
     * @param {?Logger} [logger=null] Logs the status if there was an error.
     * @returns {boolean} False if there was an error.
     * @throws {RequestCancelledError}
     */
    setCompleteIfNoError(logger?: Logger | null): boolean;
    /**
     * Record that some data was saved successfully.
     * @param {dataAcquisitionPb.DataIdentifier[]} dataIds Data IDs that have been successfully saved.
     * @returns {void}
     * @throws {RequestCancelledError}
     */
    addSaved(dataIds: dataAcquisitionPb.DataIdentifier[]): void;
    /**
     * Report that some errors have occurred during the data capture. Use the makeError function to simplify creating
     * data errors.
     * @param {dataAcquisitionPb.DataError[]} dataErrors Data errors to include as errors in the status.
     * @returns {void}
     * @throws {RequestCancelledError}
     */
    addErrors(dataErrors: dataAcquisitionPb.DataError[]): void;
    /**
     * Return true if any data errors have been added to this status.
     * @returns {boolean} True if any data errors have been added to this status.
     * @throws {RequestCancelledError}
     */
    hasDataErrors(): boolean;
    /**
     * Throws RequestCancelledError if the request has already been cancelled.
     * @returns {void}
     * @throws {RequestCancelledError} The request has already been cancelled.
     */
    cancelCheck(): void;
    /**
     * Query if the request is already cancelled.
     * @returns {boolean} If the request is already cancelled.
     */
    isCancelled(): boolean;
}
/**
 * This class simplifies the management of data acquisition stores for a single request. The request state is updated
 * according to store progress.
 */
export class DataAcquisitionStoreHelper {
    /**
     * @param {DataAcquisitionStoreClient} storeClient A data acquisition store client.
     * @param {RequestState} state State of the request, to be modified with errors or completion.
     * @param {number} [cancelInterval=1000] How often to check for cancellation of the request while waiting for the
     * stores to complete, in milliseconds.
     */
    constructor(storeClient: DataAcquisitionStoreClient, state: RequestState, cancelInterval?: number);
    storeClient: DataAcquisitionStoreClient;
    state: RequestState;
    cancelInterval: number;
    /**
     * The data identifiers, and the results of their stores: null, or the error of the store.
     * @type {Array<[dataAcquisitionPb.DataIdentifier, Promise<?Error>]>}
     */
    dataIdPromisePairs: Array<[dataAcquisitionPb.DataIdentifier, Promise<Error | null>]>;
    _add(dataId: any, store: any): void;
    /**
     * Store metadata with the data acquisition store service.
     * @param {dataAcquisitionPb.AssociatedMetadata} metadata Metadata message to store.
     * @param {dataAcquisitionPb.DataIdentifier} dataId Data identifier to use for storing this data.
     * @returns {void}
     */
    storeMetadata(metadata: dataAcquisitionPb.AssociatedMetadata, dataId: dataAcquisitionPb.DataIdentifier): void;
    /**
     * Store an image with the data acquisition store service.
     * @param {import('../../src/bosdyn/api/image_pb').ImageCapture} imageCapture Image to store.
     * @param {dataAcquisitionPb.DataIdentifier} dataId Data identifier to use for storing this data.
     * @returns {void}
     */
    storeImage(imageCapture: import("../../src/bosdyn/api/image_pb").ImageCapture, dataId: dataAcquisitionPb.DataIdentifier): void;
    /**
     * Store a data message with the data acquisition store service.
     * @param {Uint8Array} message Data to store.
     * @param {dataAcquisitionPb.DataIdentifier} dataId Data identifier to use for storing this data.
     * @param {?string} [fileExtension=null] File extension to use for writing the data to a file.
     * @returns {void}
     */
    storeData(message: Uint8Array, dataId: dataAcquisitionPb.DataIdentifier, fileExtension?: string | null): void;
    /**
     * Store a data message by streaming with the data acquisition store service.
     * @param {Uint8Array} message Data to store.
     * @param {dataAcquisitionPb.DataIdentifier} dataId Data identifier to use for storing this data.
     * @param {?string} [fileExtension=null] File extension to use for writing the data to a file.
     * @param {Object} [args] Extra arguments for controlling RPC details (e.g. timeout), like Python 5.2.0.
     * @returns {void}
     */
    storeDataAsChunks(message: Uint8Array, dataId: dataAcquisitionPb.DataIdentifier, fileExtension?: string | null, args?: Object): void;
    /**
     * Store a file with the data acquisition store service.
     * @param {string} filePath Path to the file to store.
     * @param {dataAcquisitionPb.DataIdentifier} dataId Data identifier to use for storing this file.
     * @param {?string} [fileExtension=null] File extension to use for writing the data to the file.
     * @param {Object} [args] Extra arguments for controlling RPC details (e.g. timeout), like Python 5.2.0.
     * @returns {void}
     */
    storeFile(filePath: string, dataId: dataAcquisitionPb.DataIdentifier, fileExtension?: string | null, args?: Object): void;
    /**
     * Throws RequestCancelledError if the request has already been cancelled.
     * @returns {void}
     * @throws {RequestCancelledError} The request has already been cancelled.
     */
    cancelCheck(): void;
    /**
     * Wait for all stores to complete, then update the state with the store successes and failures.
     * @returns {Promise<boolean>} False if there are data errors.
     * @throws {RequestCancelledError} The data acquisition request was cancelled.
     */
    waitForStoresComplete(): Promise<boolean>;
}
/**
 * Implementation of a data acquisition plugin. It relies on the provided dataCollectFn to implement the heart of the
 * data collection and storage. Add it to a grpc-js server with
 * server.addService(DataAcquisitionPluginServiceService, service).
 *
 * Its initialization is asynchronous: the RPCs wait for it, and `await service.ready` waits for it and reports its
 * errors.
 */
export class DataAcquisitionPluginService {
    static serviceType: string;
    /**
     * @param {import('./robot').Robot} robot Authenticated robot object.
     * @param {dataAcquisitionPb.DataAcquisitionCapability[]} capabilities What this plugin can do.
     * @param {function(dataAcquisitionPb.AcquirePluginDataRequest, DataAcquisitionStoreHelper): (void|Promise<void>)}
     * dataCollectFn Function that performs the data collection and storage.
     * @param {?function(dataAcquisitionPb.AcquirePluginDataRequest, dataAcquisitionPb.AcquirePluginDataResponse):
     * (boolean|Promise<boolean>)} [acquireResponseFn=null] Optional function that can validate a request and provide a
     * timeout deadline. If it returns false, the response is returned immediately without calling the data collection
     * function or saving any data.
     * @param {*} [executor=null] Unused: Python's thread pool. The data collections run concurrently.
     * @param {?Logger} [logger=null] Logger used by the service.
     * @param {?function(dataAcquisitionPb.LiveDataRequest): (dataAcquisitionPb.LiveDataResponse|
     * Promise<dataAcquisitionPb.LiveDataResponse>)} [liveResponseFn=null] Optional function that sends signals data to
     * the robot for purposes of displaying it on the tablet and Orbit during teleoperation.
     */
    constructor(robot: import("./robot").Robot, capabilities: dataAcquisitionPb.DataAcquisitionCapability[], dataCollectFn: (arg0: dataAcquisitionPb.AcquirePluginDataRequest, arg1: DataAcquisitionStoreHelper) => (void | Promise<void>), acquireResponseFn?: ((arg0: dataAcquisitionPb.AcquirePluginDataRequest, arg1: dataAcquisitionPb.AcquirePluginDataResponse) => (boolean | Promise<boolean>)) | null, executor?: any, logger?: Logger | null, liveResponseFn?: ((arg0: dataAcquisitionPb.LiveDataRequest) => (dataAcquisitionPb.LiveDataResponse | Promise<dataAcquisitionPb.LiveDataResponse>)) | null);
    logger: import("./logger_util").Logger;
    capabilities: dataAcquisitionPb.DataAcquisitionCapability[];
    /**
     * The validators of the custom parameters, by capture name.
     * @type {Map<string, function(serviceCustomizationPb.DictParam): ?serviceCustomizationPb.CustomParamError>}
     */
    valueValidators: Map<string, (arg0: serviceCustomizationPb.DictParam) => serviceCustomizationPb.CustomParamError | null>;
    dataCollectFn: (arg0: dataAcquisitionPb.AcquirePluginDataRequest, arg1: DataAcquisitionStoreHelper) => (void | Promise<void>);
    acquireResponseFn: ((arg0: dataAcquisitionPb.AcquirePluginDataRequest, arg1: dataAcquisitionPb.AcquirePluginDataResponse) => (boolean | Promise<boolean>)) | null;
    liveResponseFn: ((arg0: dataAcquisitionPb.LiveDataRequest) => (dataAcquisitionPb.LiveDataResponse | Promise<dataAcquisitionPb.LiveDataResponse>)) | null;
    requestManager: RequestManager;
    executor: any;
    robot: import("./robot").Robot;
    storeClient: any;
    dataBufferClient: any;
    /**
     * Resolves once the service is initialized.
     * @type {Promise<void>}
     */
    ready: Promise<void>;
    _init(): Promise<void>;
    /**
     * Validate that any parameters set in the request are valid according the spec.
     * @param {dataAcquisitionPb.AcquirePluginDataRequest} request
     * @param {dataAcquisitionPb.AcquirePluginDataResponse} response Gets the status, if invalid.
     * @returns {boolean}
     */
    validateParams(request: dataAcquisitionPb.AcquirePluginDataRequest, response: dataAcquisitionPb.AcquirePluginDataResponse): boolean;
    /**
     * Runs the data collection and storage in sequence, and updates the state of the request.
     * @param {number} requestId The request_id for the acquisition request.
     * @param {dataAcquisitionPb.AcquirePluginDataRequest} request The data acquisition request.
     * @param {RequestState} state The associated internal request state for the data.
     * @returns {Promise<void>}
     * @private
     */
    private _dataCollectionWrapper;
    /**
     * AcquirePluginData RPC: trigger a data acquisition and store results in the data acquisition store service.
     * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the AcquirePluginDataRequest.
     * @param {Function} callback Receives the AcquirePluginDataResponse, with a request_id to use with GetStatus.
     * @returns {Promise<void>}
     */
    acquirePluginData(call: any, callback: Function): Promise<void>;
    /**
     * Starts the data collection, and fills the AcquirePluginDataResponse.
     * @param {dataAcquisitionPb.AcquirePluginDataRequest} request The data acquisition request.
     * @param {dataAcquisitionPb.AcquirePluginDataResponse} response The data acquisition response, mutated.
     * @returns {Promise<dataAcquisitionPb.AcquirePluginDataResponse>}
     * @private
     */
    private _startPluginAcquire;
    /**
     * GetStatus RPC: query the status of a data acquisition by ID.
     * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the GetStatusRequest.
     * @param {Function} callback Receives the GetStatusResponse.
     * @returns {Promise<void>}
     */
    getStatus(call: any, callback: Function): Promise<void>;
    /**
     * GetServiceInfo RPC: the list of data acquisition capabilities.
     * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the GetServiceInfoRequest.
     * @param {Function} callback Receives the GetServiceInfoResponse.
     * @returns {Promise<void>}
     */
    getServiceInfo(call: any, callback: Function): Promise<void>;
    /**
     * CancelAcquisition RPC: cancel a data acquisition by ID.
     * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the CancelAcquisitionRequest.
     * @param {Function} callback Receives the CancelAcquisitionResponse.
     * @returns {Promise<void>}
     */
    cancelAcquisition(call: any, callback: Function): Promise<void>;
    /**
     * GetLiveData RPC: the live data available from this plugin.
     * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the LiveDataRequest.
     * @param {Function} callback Receives the LiveDataResponse, result of liveResponseFn.
     * @returns {Promise<void>}
     */
    getLiveData(call: any, callback: Function): Promise<void>;
    /**
     * Run an RPC handler. Like an exception in a Python servicer, an error ends the RPC with the UNKNOWN status.
     * @private
     */
    private _handle;
}
/**
 * Manage request lifecycles and status.
 *
 * The RequestManager manages some internals of the RequestState class, so it accesses its protected variables.
 */
export class RequestManager {
    /** @type {Map<number, RequestState>} */
    _requests: Map<number, RequestState>;
    _counter: number;
    /**
     * Create a new request to manage.
     * @returns {[number, RequestState]} The request id and its state.
     */
    addRequest(): [number, RequestState];
    /**
     * Get the RequestState object for managing a request.
     * @param {number} requestId The request_id for the acquisition request being inspected.
     * @returns {?RequestState} null if there is no such request.
     */
    getRequestState(requestId: number): RequestState | null;
    /**
     * Get a copy of the current status for the specified request.
     * @param {number} requestId The request_id for the acquisition request being inspected.
     * @returns {?dataAcquisitionPb.GetStatusResponse} null if there is no such request.
     */
    getStatusProto(requestId: number): dataAcquisitionPb.GetStatusResponse | null;
    /**
     * Mark a request as cancelled, and no longer able to be updated.
     * @param {number} requestId The request_id for the acquisition request being cancelled.
     * @returns {boolean} False if there is no such request.
     */
    markRequestCancelled(requestId: number): boolean;
    /**
     * Mark a request as finished, and able to be removed later.
     * @param {number} requestId The request_id for the acquisition request being completed.
     * @returns {void}
     */
    markRequestFinished(requestId: number): void;
    /**
     * Remove all requests that were completed farther in the past than olderThanTime.
     * @param {?number} [olderThanTime=null] Time (in seconds) that requests will be removed after. Defaults to
     * removing anything completed more than kDefaultRequestExpiration seconds ago.
     * @returns {void}
     */
    cleanupRequests(olderThanTime?: number | null): void;
}
import dataAcquisitionPb = require("../../src/bosdyn/api/data_acquisition_pb");
import { DataAcquisitionStoreClient } from "./data_acquisition_store";
import serviceCustomizationPb = require("../../src/bosdyn/api/service_customization_pb");

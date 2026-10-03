export type AssociatedMetadata = import("../../src/bosdyn/api/data_acquisition_pb").AssociatedMetadata;
export type DataIdentifier = import("../../src/bosdyn/api/data_acquisition_pb").DataIdentifier;
export type ImageCapture = import("../../src/bosdyn/api/image_pb").ImageCapture;
export type Robot = import("./robot").Robot;
/**
 * @typedef {import('./robot').Robot} Robot
 */
/**
 * A client for triggering data acquisition store methods.
 * @extends {BaseClient<DataAcquisitionStoreServiceClient>}
 */
export class DataAcquisitionStoreClient extends BaseClient<DataAcquisitionStoreServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    _timesyncEndpoint: import("./time_sync").TimeSyncEndpoint | null;
    /**
     * Update instance from another object.
     * @param {Robot} other The object where to copy from.
     * @returns {Promise<void>}
     */
    updateFrom(other: Robot): Promise<void>;
    /**
     * List capture actions that satisfy the query parameters.
     * @param {dataAcquisitionStore.DataQueryParams} query Query parameters.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<Array|Object>} CaptureActionIds for the actions matching the query parameters.
     */
    listCaptureActions(query: dataAcquisitionStore.DataQueryParams, args?: Object): Promise<any[] | Object>;
    /**
     * List images that satisfy the query parameters.
     * @param {dataAcquisitionStore.DataQueryParams} query Query parameters.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<Array|Object>} DataIdentifiers for the images matching the query parameters.
     */
    listStoredImages(query: dataAcquisitionStore.DataQueryParams, args?: Object): Promise<any[] | Object>;
    /**
     * List metadata that satisfy the query parameters.
     * @param {dataAcquisitionStore.DataQueryParams} query Query parameters.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<Array|Object>} DataIdentifiers for the images matching the query parameters.
     */
    listStoredMetadata(query: dataAcquisitionStore.DataQueryParams, args?: Object): Promise<any[] | Object>;
    /**
     * List AlertData that satisfy the query parameters.
     * @param {dataAcquisitionStore.DataQueryParams} query Query parameters.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<Array|Object>} DataIdentifiers for the AlertData matching the query parameters.
     */
    listStoredAlertdata(query: dataAcquisitionStore.DataQueryParams, args?: Object): Promise<any[] | Object>;
    /**
     * List data that satisfy the query parameters.
     * @param {dataAcquisitionStore.DataQueryParams} query Query parameters.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<Array|Object>} DataIdentifiers for the images matching the query parameters.
     */
    listStoredData(query: dataAcquisitionStore.DataQueryParams, args?: Object): Promise<any[] | Object>;
    /**
     * Store image.
     * @param {ImageCapture} image Image to store.
     * @param {DataIdentifier} dataId Data identifier to use for storing the image.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataAcquisitionStore.StoreImageResponse>} StoreImageResponse response.
     */
    storeImage(image: ImageCapture, dataId: DataIdentifier, args?: Object): Promise<dataAcquisitionStore.StoreImageResponse>;
    /**
     * Store metadata.
     * @param {AssociatedMetadata} associatedMetadata Metadata to store. If metadata is
     * not associated with a particular piece of data, the dataId field in this object
     * needs to specify only the action_id part.
     * @param {DataIdentifier} dataId Data identifier to use for storing this
     * associated metadata.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataAcquisitionStore.StoreMetadataResponse>} StoreMetadataResponse response.
     */
    storeMetadata(associatedMetadata: AssociatedMetadata, dataId: DataIdentifier, args?: Object): Promise<dataAcquisitionStore.StoreMetadataResponse>;
    /**
     * Store AlertData
     * @param {AssociatedMetadata} associatedAlertData AlertData to store. If AlertData is
     * not associated with a particular piece of data, the dataId field in this object
     * needs to specify only the action_id part.
     * @param {DataIdentifier} dataId Data identifier to use for storing this
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataAcquisitionStore.StoreAlertDataResponse>}
     */
    storeAlertdata(associatedAlertData: AssociatedMetadata, dataId: DataIdentifier, args?: Object): Promise<dataAcquisitionStore.StoreAlertDataResponse>;
    /**
     * Store data.
     * @param {Uint8Array|string} data Arbitrary data to store.
     * @param {DataIdentifier} dataId Data identifier to use for storing this data.
     * @param {?string} [fileExtension=null] File extension to use for writing the data to a file.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataAcquisitionStore.StoreDataResponse>} StoreDataResponse response.
     */
    storeData(data: Uint8Array | string, dataId: DataIdentifier, fileExtension?: string | null, args?: Object): Promise<dataAcquisitionStore.StoreDataResponse>;
    /**
     * Store data using streaming, supports storing of large data that is too large for a single storeData rpc.
     * Note: using this rpc means that the data must be loaded into memory.
     * @param {Uint8Array|string} data Arbitrary data to store.
     * @param {DataIdentifier} dataId Data identifier to use for storing this data.
     * @param {?string} [fileExtension=null] File extension to use for writing the data to a file.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataAcquisitionStore.StoreStreamResponse[]>}
     */
    storeDataAsChunks(data: Uint8Array | string, dataId: DataIdentifier, fileExtension?: string | null, args?: Object): Promise<dataAcquisitionStore.StoreStreamResponse[]>;
    /**
     * Store file using file path, supports storing of large files that are too large for a single storeData rpc.
     * @param {string} filePath File path to arbitrary data to store.
     * @param {DataIdentifier} dataId Data identifier to use for storing this data.
     * @param {?string} [fileExtension=null] File extension to use for writing the data to a file.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataAcquisitionStore.StoreStreamResponse[]>}
     */
    storeFile(filePath: string, dataId: DataIdentifier, fileExtension?: string | null, args?: Object): Promise<dataAcquisitionStore.StoreStreamResponse[]>;
    /**
     * Query stored captures from the robot.
     * @param {dataAcquisitionStore.QueryParameters} query Query parameters.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataAcquisitionStore.QueryStoredCapturesResponse>}
     */
    queryStoredCaptures(query?: dataAcquisitionStore.QueryParameters, args?: Object): Promise<dataAcquisitionStore.QueryStoredCapturesResponse>;
    /**
     * Query max capture id from the robot.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<number>}
     */
    queryMaxCaptureId(args?: Object): Promise<number>;
}
import { DataAcquisitionStoreServiceClient } from "../../src/bosdyn/api/data_acquisition_store_service_grpc_pb";
import { BaseClient } from "./common";
import dataAcquisitionStore = require("../../src/bosdyn/api/data_acquisition_store_pb");

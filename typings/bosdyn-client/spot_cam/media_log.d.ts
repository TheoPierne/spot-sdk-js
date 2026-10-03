export type Camera = import("../../../src/bosdyn/api/spot_cam/camera_pb").Camera;
/**
 * A client calling Spot CAM MediaLog service.
 * @extends {BaseClient<MediaLogServiceClient>}
 */
export class MediaLogClient extends BaseClient<MediaLogServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Removes the Logpoint from the Spot CAM system.
     * @param {loggingPb.Logpoint} logpoint Logpoint.name must be filled out.
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<void>}
     */
    delete(logpoint: loggingPb.Logpoint, args?: Object): Promise<void>;
    /**
     * Start periodic logging of health data to the database, queryable via Health service.
     * @param {Object} options All the option to start periodic logging of health data.
     * @param {boolean} [options.temp] Enable logging of temperature data.
     * @param {boolean} [options.humidity] Enable logging of humidity data.
     * @param {boolean} [options.bit] Enable logging of BIT events coming from the Health service.
     * @param {boolean} [options.shock] Enable logging of Shock data.
     * @param {boolean} [options.systemStats] Enable logging of cpu, gpu, memory, and network utilization.
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<void>}
     */
    enableDebug({ temp, humidity, bit, shock, systemStats }?: {
        temp?: boolean | undefined;
        humidity?: boolean | undefined;
        bit?: boolean | undefined;
        shock?: boolean | undefined;
        systemStats?: boolean | undefined;
    }, args?: Object): Promise<void>;
    /**
     * Gets the state of the specified logpoint.
     * @param {loggingPb.Logpoint} logpoint Logpoint.name must be filled out.
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<loggingPb.Logpoint>}
     */
    getStatus(logpoint: loggingPb.Logpoint, args?: Object): Promise<loggingPb.Logpoint>;
    /**
     * List cameras on Spot CAM
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<Camera[]>}
     */
    listCameras(args?: Object): Promise<Camera[]>;
    /**
     * List Logpoints on Spot CAM
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<loggingPb.Logpoint[]>}
     */
    listLogpoints(args?: Object): Promise<loggingPb.Logpoint[]>;
    /**
     * Retrieves the image associated with the Logpoint.
     * @param {loggingPb.Logpoint} logpoint Logpoint.name must be filled out.
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<{ logpoint: loggingPb.Logpoint, data: Buffer }>} The logpoint, and the bytes of its data.
     */
    retrieve(logpoint: loggingPb.Logpoint, args?: Object): Promise<{
        logpoint: loggingPb.Logpoint;
        data: Buffer;
    }>;
    /**
     * Retrieves the image associated with the Logpoint.
     * @param {loggingPb.Logpoint} logpoint Logpoint.name must be filled out.
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<{ logpoint: loggingPb.Logpoint, data: Buffer }>} The logpoint, and the bytes of its data.
     */
    retrieveRawData(logpoint: loggingPb.Logpoint, args?: Object): Promise<{
        logpoint: loggingPb.Logpoint;
        data: Buffer;
    }>;
    /**
     * Set password for Spot CAM filesystem.
     * @param {string} passphrase The passphrase.
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<void>}
     */
    setPassphrase(passphrase: string, args?: Object): Promise<void>;
    /**
     * Store media on the Spot CAM.
     * @param {Camera} camera Protobuf describing the camera to store media on.
     * @param {loggingPb.Logpoint.RecordType} recordType Indicating the type of recording.
     * @param {string} tag Optional string to associate with the stored media.
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<loggingPb.Logpoint>}
     */
    store(camera: Camera, recordType: loggingPb.Logpoint.RecordType, tag?: string, args?: Object): Promise<loggingPb.Logpoint>;
    /**
     * Update the 'tag' field of an existing Logpoint.
     * @param {loggingPb.Logpoint} logpoint 'tag' and 'name' in Logpoint must be filled out.
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<void>}
     */
    tag(logpoint: loggingPb.Logpoint, args?: Object): Promise<void>;
    _deleteFromResponse(): void;
    _enableDebugFromResponse(): void;
    _getStatusFromResponse(response: any): any;
    _listCamerasFromResponse(response: any): any;
    _listLogpointsFromResponse(responses: any): any[];
    _retrieveFromResponse(responses: any): {
        logpoint: any;
        data: Buffer<ArrayBuffer>;
    };
    _setPassphraseFromResponse(): void;
    _storeFromResponse(response: any): any;
    _tagFromResponse(): void;
}
import { MediaLogServiceClient } from "../../../src/bosdyn/api/spot_cam/service_grpc_pb";
import { BaseClient } from "../common";
import loggingPb = require("../../../src/bosdyn/api/spot_cam/logging_pb");
import { Buffer } from "buffer";

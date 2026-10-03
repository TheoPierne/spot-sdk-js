export type Logger = import("./logger_util").Logger;
/**
 * Timeout of the ClearServiceFault RPCs, in milliseconds (Python's CLEAR_FAULT_RPC_TIMEOUT_SECS = 0.1).
 * @type {number}
 */
export const CLEAR_FAULT_RPC_TIMEOUT_MSECS: number;
/**
 * Convert an RGB image to grayscale using Pillow's formula.
 * @param {Uint8Array} imageDataRgb The RGB image data, with the R, G, B channels of each pixel in that order.
 * @returns {Uint8Array} The grayscale image data, one byte per pixel.
 */
export function convertRgbToGrayscale(imageDataRgb: Uint8Array): Uint8Array;
/**
 * A lock for asynchronous code, like the threading.Lock of Python: run(fn) calls fn once the previous calls are done.
 */
export class CaptureLock extends Lock {
}
/**
 * Abstract class interface for capturing and decoding images from a camera.
 *
 * This interface is used by the VisualImageSource to ensure that each image source has the expected capture and
 * decoding methods with the right specification.
 * @abstract
 */
export class CameraInterface {
    /**
     * Provided as a convenience for blockingCapture(), which several requests may call at the same time, like the
     * capture_lock of Python (it was missing): `return this.captureLock.run(async () => { ... })`.
     * @type {CaptureLock}
     */
    captureLock: CaptureLock;
    /**
     * Communicates with the camera payload to collect the image data. Several requests may call it at the same time.
     * @param {Object} [options]
     * @param {?serviceCustomizationPb.DictParam} [options.customParams] Custom parameters defined by the image source
     * affecting the resulting capture.
     * @returns {Array|Promise<Array>} The image data (in any format), and the capture timestamp in seconds (float) in
     * the service computer's clock.
     * @abstract
     */
    blockingCapture({ customParams }?: {
        customParams?: serviceCustomizationPb.DictParam | null | undefined;
    }): any[] | Promise<any[]>;
    /**
     * Decode the image data into an Image proto based on the requested format and quality.
     * @param {*} imageData The image data output from a capture.
     * @param {imagePb.Image} imageProto The proto message to populate with decoded image data.
     * @param {imagePb.ImageRequest} imageReq The image request associated with the imageData.
     * @returns {void|Promise<void>} Mutates the imageProto message with the decoded data. This function should set the
     * image data, pixel format, image format, and potentially the transform snapshot fields within the imageProto
     * protobuf message.
     * @abstract
     */
    imageDecode(imageData: any, imageProto: imagePb.Image, imageReq: imagePb.ImageRequest): void | Promise<void>;
}
/**
 * Helper class to represent a single image source.
 *
 * It can capture images and decode image data for an image service, and can be configured to:
 * - throw faults for capture or decode failures;
 * - request images continuously in the background, to allow image services to respond more rapidly to GetImage
 *   requests.
 */
export class VisualImageSource {
    /**
     * Create an instance of the ImageSource for a given source name.
     * @param {string} sourceName The name for the camera source.
     * @param {?number} [rows=null] The number of rows of pixels in the image.
     * @param {?number} [cols=null] The number of cols of pixels in the image.
     * @param {imagePb.Image.PixelFormat[]} [pixelFormats=[]] The pixel formats supported.
     * @param {imagePb.ImageSource.ImageType} [imageType] The type of image (e.g. visual, depth).
     * @param {imagePb.Image.Format[]} [imageFormats] The image formats supported (jpeg, raw).
     * @param {?serviceCustomizationPb.DictParam.Spec} [paramSpec=null] A set of custom parameters passed into this
     * image source.
     * @returns {imagePb.ImageSource}
     */
    static makeImageSource(sourceName: string, rows?: number | null, cols?: number | null, pixelFormats?: imagePb.Image.PixelFormat[], imageType?: imagePb.ImageSource.ImageType, imageFormats?: imagePb.Image.Format[], paramSpec?: serviceCustomizationPb.DictParam.Spec | null): imagePb.ImageSource;
    /**
     * Creates an instance of the CaptureParameters protobuf message.
     * @param {?(number|function(): number)} [gain=null] The sensor's gain in dB.
     * @param {?(number|function(): number)} [exposure=null] The exposure time for an image in seconds.
     * @param {?serviceCustomizationPb.DictParam} [requestCustomParams=null] Custom Params associated with the image
     * request.
     * @returns {imagePb.CaptureParameters}
     */
    static makeCaptureParameters(gain?: (number | (() => number)) | null, exposure?: (number | (() => number)) | null, requestCustomParams?: serviceCustomizationPb.DictParam | null): imagePb.CaptureParameters;
    /**
     * @param {string} imageName The name of the image source.
     * @param {CameraInterface} cameraInterface A camera class which inherits from and implements the abstract methods
     * of the CameraInterface class.
     * @param {?number} [rows=null] The number of rows of pixels in the image.
     * @param {?number} [cols=null] The number of cols of pixels in the image.
     * @param {?(number|function(): number)} [gain=null] The sensor's gain in dB. This can be a fixed value or a function
     * which returns the gain.
     * @param {?(number|function(): number)} [exposure=null] The exposure time for an image in seconds. This can be a
     * fixed value or a function which returns the exposure time.
     * @param {imagePb.Image.PixelFormat[]} [pixelFormats=[]] Supported pixel formats.
     * @param {?Logger} [logger=null] Logger for debug and warning messages.
     * @param {?serviceCustomizationPb.DictParam.Spec} [paramSpec=null] A set of custom parameters passed into this
     * image source.
     */
    constructor(imageName: string, cameraInterface: CameraInterface, rows?: number | null, cols?: number | null, gain?: (number | (() => number)) | null, exposure?: (number | (() => number)) | null, pixelFormats?: imagePb.Image.PixelFormat[], logger?: Logger | null, paramSpec?: serviceCustomizationPb.DictParam.Spec | null);
    imageSourceName: string;
    supportedPixelFormats: imagePb.Image.PixelFormat[];
    imageSourceProto: imagePb.ImageSource;
    getImageCaptureParams: (requestCustomParams?: null) => imagePb.CaptureParameters;
    paramSpec: serviceCustomizationPb.DictParam.Spec | null;
    valueValidator: (arg0: serviceCustomizationPb.DictParam) => serviceCustomizationPb.CustomParamError | null;
    cameraInterface: CameraInterface;
    /**
     * Captures an image with the camera interface, and checks for errors.
     * @type {function(?serviceCustomizationPb.DictParam): Promise<Array>}
     */
    captureFunction: (arg0: serviceCustomizationPb.DictParam | null) => Promise<any[]>;
    captureThread: ImageCaptureThread | null;
    faultClient: FaultClient | null;
    cameraCaptureFault: serviceFaultPb.ServiceFault;
    decodeDataFault: serviceFaultPb.ServiceFault;
    activeFaultIdNames: Set<any>;
    logger: import("./logger_util").Logger;
    lastErrorMessage: string | null;
    /**
     * Override the existing logger for the VisualImageSource class.
     * @param {?Logger} logger
     * @returns {void}
     */
    setLogger(logger: Logger | null): void;
    /**
     * Start a background loop to continuously capture images.
     * @param {?serviceCustomizationPb.DictParam} [customParams=null] Custom parameters of the background captures.
     * @returns {void}
     */
    createCaptureThread(customParams?: serviceCustomizationPb.DictParam | null): void;
    /**
     * Initialize a fault client and faults for the image source (linked to the image service). All faults associated
     * with the image service name provided will be cleared.
     * @param {?FaultClient} faultClient The fault client to communicate with the robot.
     * @param {string} imageService The image service name to associate faults with.
     * @returns {Promise<void>}
     */
    initializeFaults(faultClient: FaultClient | null, imageService: string): Promise<void>;
    /**
     * Trigger a service fault for a failure to the fault service.
     * @param {string} errorMessage The error message to provide in the fault.
     * @param {serviceFaultPb.ServiceFault} fault The complete service fault to be issued.
     * @returns {Promise<void>}
     */
    triggerFault(errorMessage: string, fault: serviceFaultPb.ServiceFault): Promise<void>;
    /**
     * Attempts to clear a fault from the fault service.
     * @param {serviceFaultPb.ServiceFault} fault The fault (which contains an ID) to be cleared.
     * @returns {Promise<void>}
     */
    clearFault(fault: serviceFaultPb.ServiceFault): Promise<void>;
    /**
     * Logs the error message.
     * @param {?string} [errorMessage=null] The new error message.
     * @param {boolean} [showLastError=false] Log the last error message, at the error level.
     * @returns {void}
     */
    _maybeLogError(errorMessage?: string | null, showLastError?: boolean): void;
    /**
     * Calls the capture function and checks for any error, which is logged and triggers a camera capture fault.
     * @param {function(Object): (Array|Promise<Array>)} captureFunc The function capturing the image data and timestamp.
     * @param {?serviceCustomizationPb.DictParam} [customParams=null] Custom parameters passed to the capture.
     * @returns {Promise<Array>} The image data and timestamp, or [null, null] if the capture failed.
     */
    _doCaptureWithErrorChecking(captureFunc: (arg0: Object) => (any[] | Promise<any[]>), customParams?: serviceCustomizationPb.DictParam | null): Promise<any[]>;
    /**
     * Retrieve the latest captured image and timestamp.
     * @param {?serviceCustomizationPb.DictParam} [customParams=null] Custom parameters affecting the capture.
     * @returns {Promise<Array>} The latest captured image and the time (in seconds) associated with that image capture.
     * Triggers a camera capture fault and returns [null, null] if the image cannot be retrieved.
     */
    getImageAndTimestamp(customParams?: serviceCustomizationPb.DictParam | null): Promise<any[]>;
    /**
     * Decode the image data into an Image proto based on the requested format and quality.
     * @param {*} imageData The image data returned by the camera interface's blockingCapture function.
     * @param {imagePb.Image} imageProto The image proto to be mutated with the decoded data.
     * @param {imagePb.ImageRequest} imageReq The image request associated with the imageData.
     * @returns {Promise<imagePb.ImageResponse.Status>} Whether the decoding succeeded. A decode data fault is triggered
     * if the image or pixels cannot be decoded to the desired format.
     */
    imageDecodeWithErrorChecking(imageData: any, imageProto: imagePb.Image, imageReq: imagePb.ImageRequest): Promise<imagePb.ImageResponse.Status>;
    /**
     * Stop the background captures, if any.
     * @returns {Promise<void>} Resolves once the capture in progress, if any, has ended.
     */
    stopCapturing(): Promise<void>;
}
/**
 * Output of ImageCaptureThread.getLatestCapturedImage().
 */
export class ThreadCaptureOutput {
    /**
     * @param {boolean} isValid Whether the latest capture uses the custom parameters of the latest request, and is
     * therefore returned.
     * @param {*} image If the latest capture is valid, the image data in any format.
     * @param {?number} timestamp The timestamp that the latest valid capture was taken.
     */
    constructor(isValid: boolean, image: any, timestamp: number | null);
    isValid: boolean;
    image: any;
    timestamp: number | null;
}
/**
 * Continuously query and store the last successfully captured image and its associated timestamp for a single
 * camera device, in the background.
 */
export class ImageCaptureThread {
    /**
     * @param {string} imageSourceName The image source name.
     * @param {function(?serviceCustomizationPb.DictParam): (Array|Promise<Array>)} captureFunc The function capturing
     * the image data and timestamp.
     * @param {number} [capturePeriodMsecs=50] Amount of time (in milliseconds) between captures (it was 50 s).
     * @param {?serviceCustomizationPb.DictParam} [customParams=null] Custom parameters passed to captureFunc.
     */
    constructor(imageSourceName: string, captureFunc: (arg0: serviceCustomizationPb.DictParam | null) => (any[] | Promise<any[]>), capturePeriodMsecs?: number, customParams?: serviceCustomizationPb.DictParam | null);
    imageSourceName: string;
    _stopCapturingEvent: Event;
    lastCapturedImage: any;
    lastCapturedTime: any;
    hasUpdatedCapture: boolean;
    capturePeriodMsecs: number;
    customParams: serviceCustomizationPb.DictParam | null;
    initCaptureFunction: (arg0: serviceCustomizationPb.DictParam | null) => (any[] | Promise<any[]>);
    captureFunction: () => any;
    /**
     * The capture loop, while it runs.
     * @type {?Promise<void>}
     * @private
     */
    private _loop;
    /**
     * Start the background captures.
     * @returns {void}
     */
    startCapturing(): void;
    /**
     * Use new custom parameters for the next captures.
     * @param {?serviceCustomizationPb.DictParam} [customParams=null]
     * @returns {void}
     */
    maybeUpdateThread(customParams?: serviceCustomizationPb.DictParam | null): void;
    /**
     * Update the last image capture and timestamp.
     * @returns {void}
     */
    setLastCapturedImage(imageFrame: any, captureTime: any): void;
    /**
     * The last image and timestamp if the image uses these custom parameters. Otherwise, the next captures use them, and
     * the output is not valid.
     * @param {?serviceCustomizationPb.DictParam} [customParams=null]
     * @returns {ThreadCaptureOutput}
     */
    getLatestCapturedImage(customParams?: serviceCustomizationPb.DictParam | null): ThreadCaptureOutput;
    _makeCaptureFunc(captureFunc: any, customParams?: null): () => any;
    /**
     * Main loop of the captures, which requests and saves images.
     * @returns {Promise<void>}
     * @private
     */
    private _doImageCapture;
    /**
     * Stop the background captures.
     * @returns {Promise<void>} Resolves once the capture in progress, if any, has ended.
     */
    stopCapturing(): Promise<void>;
}
/**
 * gRPC service to provide access to multiple different image sources: add it to a grpc-js server with
 * server.addService(ImageServiceService, servicer).
 *
 * The service can list the available image (device) sources and query each source for image data. Its
 * initialization is asynchronous: the RPCs wait for it, and `await servicer.ready` (or
 * CameraBaseImageServicer.create())
 * waits for it and reports its errors.
 */
export class CameraBaseImageServicer {
    /**
     * Create a servicer and wait for its initialization.
     * @param {...*} args The arguments of the constructor.
     * @returns {Promise<CameraBaseImageServicer>}
     */
    static create(...args: any[]): Promise<CameraBaseImageServicer>;
    /**
     * @param {import('./robot').Robot} bosdynSdkRobot The robot instance for the service to connect to.
     * @param {string} serviceName The name of the image service.
     * @param {VisualImageSource[]} imageSources The list of image sources.
     * @param {?Logger} [logger=null] Logger for debug and warning messages.
     * @param {boolean} [useBackgroundCaptureThread=true] If true, the images are captured continuously in the
     * background, so the image service can respond rapidly to the GetImage request. If false, the image service captures
     * during the GetImage request.
     * @param {?serviceCustomizationPb.DictParam} [backgroundCaptureParams=null] Custom image source parameters used for
     * all of the background captures.
     * @param {boolean} [logImages=false] If true, include image request/response messages in robot logs.
     */
    constructor(bosdynSdkRobot: import("./robot").Robot, serviceName: string, imageSources: VisualImageSource[], logger?: Logger | null, useBackgroundCaptureThread?: boolean, backgroundCaptureParams?: serviceCustomizationPb.DictParam | null, logImages?: boolean);
    logger: import("./logger_util").Logger;
    bosdynSdkRobot: import("./robot").Robot;
    serviceName: string;
    faultClient: any;
    dataBufferClient: any;
    /**
     * The image sources by name.
     * @type {Map<string, VisualImageSource>}
     */
    imageSourcesMapped: Map<string, VisualImageSource>;
    /**
     * The time sync of the robot, to report the image timestamps in the robot's time.
     * @type {?import('./time_sync').TimeSyncThread}
     * @private
     */
    private _timeSync;
    /**
     * Resolves once the servicer is initialized.
     * @type {Promise<void>}
     */
    ready: Promise<void>;
    _init(imageSources: any, useBackgroundCaptureThread: any, backgroundCaptureParams: any, logImages: any): Promise<void>;
    /**
     * ListImageSources RPC: the list of ImageSources for this given service.
     * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the ListImageSourcesRequest.
     * @param {Function} callback Receives the ListImageSourcesResponse.
     * @returns {Promise<void>}
     */
    listImageSources(call: any, callback: Function): Promise<void>;
    /**
     * GetImage RPC: the latest image capture from all the image sources specified in the request.
     * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the GetImageRequest.
     * @param {Function} callback Receives the GetImageResponse.
     * @returns {Promise<void>}
     */
    getImage(call: any, callback: Function): Promise<void>;
    /**
     * Run an RPC handler. Like an exception in a Python servicer, an error ends the RPC with the UNKNOWN status.
     * @private
     */
    private _handle;
    _setFormatAndDecode(imageData: any, imgProto: any, imgReq: any): Promise<imagePb.ImageResponse.Status>;
    /**
     * @param {imagePb.GetImageRequest} request
     * @returns {Promise<imagePb.GetImageResponse>}
     * @private
     */
    private _getImage;
    /**
     * Stop the background captures of the image sources (Python's __del__).
     * @returns {Promise<void>}
     */
    stop(): Promise<void>;
    /**
     * Same as stop().
     * @returns {Promise<void>}
     */
    delete(): Promise<void>;
}
import { Lock } from "../bosdyn-core/lock";
import serviceCustomizationPb = require("../../src/bosdyn/api/service_customization_pb");
import imagePb = require("../../src/bosdyn/api/image_pb");
import { FaultClient } from "./fault";
import serviceFaultPb = require("../../src/bosdyn/api/service_fault_pb");
import { Event } from "../bosdyn-core/event";

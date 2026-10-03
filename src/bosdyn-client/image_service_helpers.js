/**
 * @file Helpers for implementing an image service: image sources, capture of the images in the background, and a
 * servicer for many image sources.
 */

'use strict';

const { Buffer } = require('node:buffer');

const { DataBufferClient } = require('./data_buffer');
const { RpcError } = require('./exceptions');
const { FaultClient, ServiceFaultDoesNotExistError, ServiceFaultAlreadyExistsError } = require('./fault');
const { LoggerUtil } = require('./logger_util');
const { ResponseContext, populateResponseHeader } = require('./server_util');
const { createValueValidator } = require('./service_customization_helpers');

const headerPb = require('../bosdyn/api/header_pb');
const imagePb = require('../bosdyn/api/image_pb');
const serviceCustomizationPb = require('../bosdyn/api/service_customization_pb');
const serviceFaultPb = require('../bosdyn/api/service_fault_pb');
const { Event } = require('../bosdyn-core/event');
const { Lock } = require('../bosdyn-core/lock');
const { secondsToDuration, nowSec } = require('../bosdyn-core/util');

/**
 * @typedef {import('./logger_util').Logger} Logger
 */

const _LOGGER = LoggerUtil.getLogger('image_service_helpers');

/**
 * Timeout of the ClearServiceFault RPCs, in milliseconds (Python's CLEAR_FAULT_RPC_TIMEOUT_SECS = 0.1).
 * @type {number}
 */
const CLEAR_FAULT_RPC_TIMEOUT_MSECS = 100;

/**
 * Convert an RGB image to grayscale using Pillow's formula.
 * @param {Uint8Array} imageDataRgb The RGB image data, with the R, G, B channels of each pixel in that order.
 * @returns {Uint8Array} The grayscale image data, one byte per pixel.
 */
function convertRgbToGrayscale(imageDataRgb) {
  // gray = 0.299 * red + 0.587 * green + 0.114 * blue, with integer math: the constants are multiplied by 2^16, and
  // the addition rounds in the correct direction before the shift.
  const gray = new Uint8Array(Math.floor(imageDataRgb.length / 3));
  for (let i = 0; i < gray.length; i++) {
    const [r, g, b] = [imageDataRgb[3 * i], imageDataRgb[3 * i + 1], imageDataRgb[3 * i + 2]];
    gray[i] = (r * 19595 + g * 38470 + b * 7471 + 0x8000) >>> 16;
  }
  return gray;
}

function _enumName(enumObject, value) {
  return Object.keys(enumObject).find(name => enumObject[name] === value) ?? String(value);
}

/**
 * Whether two custom parameters are the same (Python compares the messages by value).
 * @param {?serviceCustomizationPb.DictParam} a
 * @param {?serviceCustomizationPb.DictParam} b
 * @returns {boolean}
 */
function _sameParams(a, b) {
  if (a === b) return true;
  if (!a || !b) return !a && !b;
  return Buffer.from(a.serializeBinary()).equals(Buffer.from(b.serializeBinary()));
}

/**
 * A lock for asynchronous code, like the threading.Lock of Python: run(fn) calls fn once the previous calls are done.
 */
class CaptureLock extends Lock {}

/**
 * Abstract class interface for capturing and decoding images from a camera.
 *
 * This interface is used by the VisualImageSource to ensure that each image source has the expected capture and
 * decoding methods with the right specification.
 * @abstract
 */
class CameraInterface {
  constructor() {
    /**
     * Provided as a convenience for blockingCapture(), which several requests may call at the same time, like the
     * capture_lock of Python (it was missing): `return this.captureLock.run(async () => { ... })`.
     * @type {CaptureLock}
     */
    this.captureLock = new CaptureLock();
  }

  /**
   * Communicates with the camera payload to collect the image data. Several requests may call it at the same time.
   * @param {Object} [options]
   * @param {?serviceCustomizationPb.DictParam} [options.customParams] Custom parameters defined by the image source
   * affecting the resulting capture.
   * @returns {Array|Promise<Array>} The image data (in any format), and the capture timestamp in seconds (float) in
   * the service computer's clock.
   * @abstract
   */
  // eslint-disable-next-line no-unused-vars
  blockingCapture({ customParams = null } = {}) {
    throw new Error(`${this.constructor.name} does not implement blockingCapture().`);
  }

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
  // eslint-disable-next-line no-unused-vars
  imageDecode(imageData, imageProto, imageReq) {
    throw new Error(`${this.constructor.name} does not implement imageDecode().`);
  }
}

/**
 * Helper class to represent a single image source.
 *
 * It can capture images and decode image data for an image service, and can be configured to:
 * - throw faults for capture or decode failures;
 * - request images continuously in the background, to allow image services to respond more rapidly to GetImage
 *   requests.
 */
class VisualImageSource {
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
  constructor(
    imageName,
    cameraInterface,
    rows = null,
    cols = null,
    gain = null,
    exposure = null,
    pixelFormats = [],
    logger = null,
    paramSpec = null,
  ) {
    this.imageSourceName = imageName;
    this.supportedPixelFormats = pixelFormats;
    this.imageSourceProto = VisualImageSource.makeImageSource(
      imageName,
      rows,
      cols,
      this.supportedPixelFormats,
      undefined,
      undefined,
      paramSpec,
    );
    this.getImageCaptureParams = (requestCustomParams = null) =>
      VisualImageSource.makeCaptureParameters(gain, exposure, requestCustomParams);

    this.paramSpec = paramSpec;
    // Fail fast if the spec being used is invalid (validate against an empty parameter set without spec), and
    // otherwise get a function to easily validate values.
    this.valueValidator = createValueValidator(paramSpec ?? new serviceCustomizationPb.DictParam.Spec());

    if (!(cameraInterface instanceof CameraInterface)) {
      throw new TypeError('cameraInterface must be a subclass of CameraInterface.');
    }
    this.cameraInterface = cameraInterface;

    /**
     * Captures an image with the camera interface, and checks for errors.
     * @type {function(?serviceCustomizationPb.DictParam): Promise<Array>}
     */
    this.captureFunction = (customParams = null) =>
      this._doCaptureWithErrorChecking(options => this.cameraInterface.blockingCapture(options), customParams);

    // Optional background loop to continuously capture image data. This will help an image service to respond
    // quickly to a GetImage request, since it can use the last captured image.
    this.captureThread = null;

    // Fault client to report errors. Requires the image service name to properly create the fault id.
    this.faultClient = null;

    // Fault to throw if a failure occurs when calling the blockingCapture function.
    this.cameraCaptureFault = new serviceFaultPb.ServiceFault()
      .setFaultId(new serviceFaultPb.ServiceFaultId().setFaultName(`Image Capture Failure for ${this.imageSourceName}`))
      .setSeverity(serviceFaultPb.ServiceFault.Severity.SEVERITY_WARN);
    // Fault to throw if a failure occurs when calling the imageDecode function.
    this.decodeDataFault = new serviceFaultPb.ServiceFault()
      .setFaultId(new serviceFaultPb.ServiceFaultId().setFaultName(`Decoding Image ${this.imageSourceName} Failure`))
      .setSeverity(serviceFaultPb.ServiceFault.Severity.SEVERITY_WARN);

    // This is the set of active fault id names that can potentially get cleared.
    this.activeFaultIdNames = new Set();

    // Logger for warning messages and the last error message (used only when the background loop is capturing, such
    // that error messages from the last capture can be shown still).
    this.logger = logger || _LOGGER;
    this.lastErrorMessage = null;
  }

  /**
   * Override the existing logger for the VisualImageSource class.
   * @param {?Logger} logger
   * @returns {void}
   */
  setLogger(logger) {
    if (logger) this.logger = logger;
  }

  /**
   * Start a background loop to continuously capture images.
   * @param {?serviceCustomizationPb.DictParam} [customParams=null] Custom parameters of the background captures.
   * @returns {void}
   */
  createCaptureThread(customParams = null) {
    this.captureThread = new ImageCaptureThread(this.imageSourceName, this.captureFunction, undefined, customParams);
    this.captureThread.startCapturing();
  }

  /**
   * Initialize a fault client and faults for the image source (linked to the image service). All faults associated
   * with the image service name provided will be cleared.
   * @param {?FaultClient} faultClient The fault client to communicate with the robot.
   * @param {string} imageService The image service name to associate faults with.
   * @returns {Promise<void>}
   */
  async initializeFaults(faultClient, imageService) {
    this.faultClient = faultClient;

    // Update the fault ids to include the correct image service name.
    this.cameraCaptureFault.getFaultId().setServiceName(imageService);
    this.decodeDataFault.getFaultId().setServiceName(imageService);

    // Attempt to clear any previous faults for the image service.
    if (this.faultClient !== null) {
      try {
        await this.faultClient.clearServiceFault(
          new serviceFaultPb.ServiceFaultId().setServiceName(imageService),
          true,
        );
      } catch (e) {
        if (e instanceof ServiceFaultDoesNotExistError) {
          this.activeFaultIdNames.clear();
        } else if (e instanceof RpcError) {
          this.logger.error(`RPC error in initialize_faults: ${e}.`);
        } else {
          throw e;
        }
      }
    }
  }

  /**
   * Trigger a service fault for a failure to the fault service.
   * @param {string} errorMessage The error message to provide in the fault.
   * @param {serviceFaultPb.ServiceFault} fault The complete service fault to be issued.
   * @returns {Promise<void>}
   */
  async triggerFault(errorMessage, fault) {
    if (this.faultClient && fault) {
      fault.setErrorMessage(errorMessage);
      try {
        await this.faultClient.triggerServiceFault(fault);
        this.activeFaultIdNames.add(fault.getFaultId().getFaultName());
      } catch (e) {
        if (e instanceof ServiceFaultAlreadyExistsError) {
          // Pass.
        } else if (e instanceof RpcError) {
          this.logger.error(`RPC error in trigger_fault: ${e}.`);
        } else {
          throw e;
        }
      }
    }
  }

  /**
   * Attempts to clear a fault from the fault service.
   * @param {serviceFaultPb.ServiceFault} fault The fault (which contains an ID) to be cleared.
   * @returns {Promise<void>}
   */
  async clearFault(fault) {
    if (this.faultClient && fault) {
      try {
        if (this.activeFaultIdNames.has(fault.getFaultId().getFaultName())) {
          await this.faultClient.clearServiceFault(fault.getFaultId(), false, false, {
            timeout: CLEAR_FAULT_RPC_TIMEOUT_MSECS,
          });
          this.activeFaultIdNames.delete(fault.getFaultId().getFaultName());
        }
      } catch (e) {
        if (e instanceof ServiceFaultDoesNotExistError) {
          this.logger.warn('No service fault found to clear.');
        } else if (e instanceof RpcError) {
          this.logger.error(`RPC error in clear_fault: ${e}.`);
        } else {
          throw e;
        }
      }
    }
  }

  /**
   * Logs the error message.
   * @param {?string} [errorMessage=null] The new error message.
   * @param {boolean} [showLastError=false] Log the last error message, at the error level.
   * @returns {void}
   */
  _maybeLogError(errorMessage = null, showLastError = false) {
    if (errorMessage !== null) {
      this.lastErrorMessage = errorMessage;
    }
    if (showLastError) {
      // Force the printout of the last error message with a level high enough to not be filtered out.
      this.logger.error(this.lastErrorMessage);
    } else {
      this.logger.warn(errorMessage);
    }
  }

  /**
   * Calls the capture function and checks for any error, which is logged and triggers a camera capture fault.
   * @param {function(Object): (Array|Promise<Array>)} captureFunc The function capturing the image data and timestamp.
   * @param {?serviceCustomizationPb.DictParam} [customParams=null] Custom parameters passed to the capture.
   * @returns {Promise<Array>} The image data and timestamp, or [null, null] if the capture failed.
   */
  async _doCaptureWithErrorChecking(captureFunc, customParams = null) {
    try {
      const [img, timestamp] = await captureFunc({ customParams });
      // Clear out any old error messages if the capture succeeds.
      this.lastErrorMessage = null;
      // Clear any previous camera capture faults after a successful image capture for this image source.
      await this.clearFault(this.cameraCaptureFault);
      return [img, timestamp];
    } catch (err) {
      const errorMessage = `Failed to capture an image from ${this.imageSourceName}: ${err?.name ?? typeof err} ${
        err?.message ?? err
      }`;
      this._maybeLogError(errorMessage);
      await this.triggerFault(errorMessage, this.cameraCaptureFault);
      return [null, null];
    }
  }

  /**
   * Retrieve the latest captured image and timestamp.
   * @param {?serviceCustomizationPb.DictParam} [customParams=null] Custom parameters affecting the capture.
   * @returns {Promise<Array>} The latest captured image and the time (in seconds) associated with that image capture.
   * Triggers a camera capture fault and returns [null, null] if the image cannot be retrieved.
   */
  async getImageAndTimestamp(customParams = null) {
    if (this.captureThread !== null) {
      const { isValid, image, timestamp } = this.captureThread.getLatestCapturedImage(customParams);
      if (isValid) {
        if (image === null || timestamp === null) {
          // Force the printout of the last error message since the capture failed.
          this._maybeLogError(null, true);
        }
        return [image, timestamp];
      }
    }
    // Capture now: no background capture, or none with these parameters yet.
    return this.captureFunction(customParams);
  }

  /**
   * Decode the image data into an Image proto based on the requested format and quality.
   * @param {*} imageData The image data returned by the camera interface's blockingCapture function.
   * @param {imagePb.Image} imageProto The image proto to be mutated with the decoded data.
   * @param {imagePb.ImageRequest} imageReq The image request associated with the imageData.
   * @returns {Promise<imagePb.ImageResponse.Status>} Whether the decoding succeeded. A decode data fault is triggered
   * if the image or pixels cannot be decoded to the desired format.
   */
  async imageDecodeWithErrorChecking(imageData, imageProto, imageReq) {
    let decodeFormat = null;
    if (imageReq) {
      decodeFormat = imageReq.getImageFormat();
      const pixelFormat = imageReq.getPixelFormat();
      if (pixelFormat && !this.supportedPixelFormats.includes(pixelFormat)) {
        return imagePb.ImageResponse.Status.STATUS_UNSUPPORTED_PIXEL_FORMAT_REQUESTED;
      }
    }
    try {
      await this.cameraInterface.imageDecode(imageData, imageProto, imageReq);
      // Clear any previous decode data faults after a successful decoding by this image source.
      await this.clearFault(this.decodeDataFault);
      return imagePb.ImageResponse.Status.STATUS_OK;
    } catch (err) {
      const decodeFormatStr = decodeFormat === null ? 'unknown format' : _enumName(imagePb.Image.Format, decodeFormat);
      const errorMessage = `Failed to decode image ${this.imageSourceName} to format ${decodeFormatStr}: ${
        err?.name ?? typeof err
      } ${err?.message ?? err}`;
      this._maybeLogError(errorMessage);
      await this.triggerFault(errorMessage, this.decodeDataFault);
      return imagePb.ImageResponse.Status.STATUS_UNSUPPORTED_IMAGE_FORMAT_REQUESTED;
    }
  }

  /**
   * Stop the background captures, if any.
   * @returns {Promise<void>} Resolves once the capture in progress, if any, has ended.
   */
  stopCapturing() {
    return this.captureThread?.stopCapturing() ?? Promise.resolve();
  }

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
  static makeImageSource(
    sourceName,
    rows = null,
    cols = null,
    pixelFormats = [],
    imageType = imagePb.ImageSource.ImageType.IMAGE_TYPE_VISUAL,
    imageFormats = [imagePb.Image.Format.FORMAT_JPEG],
    paramSpec = null,
  ) {
    const source = new imagePb.ImageSource().setName(sourceName);

    if (rows !== null && cols !== null) {
      source.setRows(rows);
      source.setCols(cols);
    }

    source.setImageType(imageType);
    source.setImageFormatsList(imageFormats);
    source.setPixelFormatsList(pixelFormats);

    if (paramSpec) {
      source.setCustomParams(paramSpec);
    }

    return source;
  }

  /**
   * Creates an instance of the CaptureParameters protobuf message.
   * @param {?(number|function(): number)} [gain=null] The sensor's gain in dB.
   * @param {?(number|function(): number)} [exposure=null] The exposure time for an image in seconds.
   * @param {?serviceCustomizationPb.DictParam} [requestCustomParams=null] Custom Params associated with the image
   * request.
   * @returns {imagePb.CaptureParameters}
   */
  static makeCaptureParameters(gain = null, exposure = null, requestCustomParams = null) {
    const params = new imagePb.CaptureParameters();
    if (gain) {
      params.setGain(typeof gain === 'function' ? gain() : gain);
    }
    if (exposure) {
      if (typeof exposure === 'function') {
        params.setExposureDuration(secondsToDuration(exposure()));
      } else if (exposure === Infinity) {
        params.setExposureDuration(secondsToDuration(Number.MAX_SAFE_INTEGER));
      } else {
        params.setExposureDuration(secondsToDuration(exposure));
      }
    }
    if (requestCustomParams) {
      params.setCustomParams(requestCustomParams);
    }
    return params;
  }
}

/**
 * Output of ImageCaptureThread.getLatestCapturedImage().
 */
class ThreadCaptureOutput {
  /**
   * @param {boolean} isValid Whether the latest capture uses the custom parameters of the latest request, and is
   * therefore returned.
   * @param {*} image If the latest capture is valid, the image data in any format.
   * @param {?number} timestamp The timestamp that the latest valid capture was taken.
   */
  constructor(isValid, image, timestamp) {
    this.isValid = isValid;
    this.image = image;
    this.timestamp = timestamp;
  }
}

/**
 * Continuously query and store the last successfully captured image and its associated timestamp for a single
 * camera device, in the background.
 */
class ImageCaptureThread {
  /**
   * @param {string} imageSourceName The image source name.
   * @param {function(?serviceCustomizationPb.DictParam): (Array|Promise<Array>)} captureFunc The function capturing
   * the image data and timestamp.
   * @param {number} [capturePeriodMsecs=50] Amount of time (in milliseconds) between captures (it was 50 s).
   * @param {?serviceCustomizationPb.DictParam} [customParams=null] Custom parameters passed to captureFunc.
   */
  constructor(imageSourceName, captureFunc, capturePeriodMsecs = 50, customParams = null) {
    // Name of the image source that is being requested from.
    this.imageSourceName = imageSourceName;

    // Set to stop the captures.
    this._stopCapturingEvent = new Event();

    // Track the last image and timestamp for this image source.
    this.lastCapturedImage = null;
    this.lastCapturedTime = null;

    // Has a capture with the latest parameters completed (not necessarily successfully).
    this.hasUpdatedCapture = false;

    // The wait time between captures.
    this.capturePeriodMsecs = capturePeriodMsecs;

    // Custom parameters the captures currently use.
    this.customParams = customParams;

    // Original user-passed captureFunc.
    this.initCaptureFunction = captureFunc;

    // Function that completes the capture, with the custom parameters (Python starts without them).
    this.captureFunction = this._makeCaptureFunc(captureFunc, customParams);

    /**
     * The capture loop, while it runs.
     * @type {?Promise<void>}
     * @private
     */
    this._loop = null;
  }

  /**
   * Start the background captures.
   * @returns {void}
   */
  startCapturing() {
    _LOGGER.info(`Starting the thread for ${this.imageSourceName}`);
    this._stopCapturingEvent.clear();
    this._loop = this._doImageCapture().catch(e =>
      _LOGGER.error(`Image captures of ${this.imageSourceName} stopped by an error: ${e?.stack ?? e}`),
    );
  }

  /**
   * Use new custom parameters for the next captures.
   * @param {?serviceCustomizationPb.DictParam} [customParams=null]
   * @returns {void}
   */
  maybeUpdateThread(customParams = null) {
    if (!_sameParams(customParams, this.customParams)) {
      this.captureFunction = this._makeCaptureFunc(this.initCaptureFunction, customParams);
      this.customParams = customParams;
      this.hasUpdatedCapture = false;
    }
  }

  /**
   * Update the last image capture and timestamp.
   * @returns {void}
   */
  setLastCapturedImage(imageFrame, captureTime) {
    this.lastCapturedImage = imageFrame;
    this.lastCapturedTime = captureTime;
    this.hasUpdatedCapture = true;
  }

  /**
   * The last image and timestamp if the image uses these custom parameters. Otherwise, the next captures use them, and
   * the output is not valid.
   * @param {?serviceCustomizationPb.DictParam} [customParams=null]
   * @returns {ThreadCaptureOutput}
   */
  getLatestCapturedImage(customParams = null) {
    if (_sameParams(customParams, this.customParams) && this.hasUpdatedCapture) {
      return new ThreadCaptureOutput(true, this.lastCapturedImage, this.lastCapturedTime);
    }
    this.maybeUpdateThread(customParams);
    return new ThreadCaptureOutput(false, null, null);
  }

  _makeCaptureFunc(captureFunc, customParams = null) {
    return () => captureFunc(customParams);
  }

  /**
   * Main loop of the captures, which requests and saves images.
   * @returns {Promise<void>}
   * @private
   */
  async _doImageCapture() {
    while (!this._stopCapturingEvent.isSet()) {
      // Get the image by calling the capture function.
      const startTime = nowSec();
      const captureFunction = this.captureFunction;
      const [capture, captureTime] = await captureFunction();
      // Unless the parameters changed during the capture: this image does not use the new ones.
      if (captureFunction === this.captureFunction) {
        this.setLastCapturedImage(capture, captureTime);
      }

      // Wait for the total capture period (where the wait time is adjusted based on how long the capture took). Like
      // Python's daemon thread, the wait does not keep the process alive.
      const waitTimeMs = this.capturePeriodMsecs - (nowSec() - startTime) * 1_000;
      if (await this._stopCapturingEvent.wait(waitTimeMs, { ref: false })) {
        break;
      }
    }
  }

  /**
   * Stop the background captures.
   * @returns {Promise<void>} Resolves once the capture in progress, if any, has ended.
   */
  stopCapturing() {
    this._stopCapturingEvent.set();
    return this._loop ?? Promise.resolve();
  }
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
class CameraBaseImageServicer {
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
  constructor(
    bosdynSdkRobot,
    serviceName,
    imageSources,
    logger = null,
    useBackgroundCaptureThread = true,
    backgroundCaptureParams = null,
    logImages = false,
  ) {
    this.logger = logger || _LOGGER;
    this.bosdynSdkRobot = bosdynSdkRobot;

    // Service name this servicer is associated with in the robot directory.
    this.serviceName = serviceName;

    this.faultClient = null;
    this.dataBufferClient = null;

    /**
     * The image sources by name.
     * @type {Map<string, VisualImageSource>}
     */
    this.imageSourcesMapped = new Map();

    /**
     * The time sync of the robot, to report the image timestamps in the robot's time.
     * @type {?import('./time_sync').TimeSyncThread}
     * @private
     */
    this._timeSync = null;

    /**
     * Resolves once the servicer is initialized.
     * @type {Promise<void>}
     */
    this.ready = this._init(imageSources, useBackgroundCaptureThread, backgroundCaptureParams, logImages);
    // Its errors are reported by the RPCs and to the callers awaiting it: not an unhandled rejection.
    this.ready.catch(() => {});
  }

  /**
   * Create a servicer and wait for its initialization.
   * @param {...*} args The arguments of the constructor.
   * @returns {Promise<CameraBaseImageServicer>}
   */
  static async create(...args) {
    const servicer = new this(...args);
    await servicer.ready;
    return servicer;
  }

  async _init(imageSources, useBackgroundCaptureThread, backgroundCaptureParams, logImages) {
    // Fault client to report service faults.
    this.faultClient = await this.bosdynSdkRobot.ensureClient(FaultClient.defaultServiceName);

    if (logImages) {
      // Data buffer client for logging messages.
      this.dataBufferClient = await this.bosdynSdkRobot.ensureClient(DataBufferClient.defaultServiceName);
    }

    this._timeSync = await this.bosdynSdkRobot.timeSync;
    await this._timeSync.waitForSync();

    for (const source of imageSources) {
      // Set the logger for each visual image source to be the logger of the camera service class.
      source.setLogger(this.logger);
      // Set up the fault client so service faults can be created.

      await source.initializeFaults(this.faultClient, this.serviceName);
      // Potentially start the background captures.
      if (useBackgroundCaptureThread) source.createCaptureThread(backgroundCaptureParams);
      this.imageSourcesMapped.set(source.imageSourceName, source);
    }
  }

  /**
   * ListImageSources RPC: the list of ImageSources for this given service.
   * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the ListImageSourcesRequest.
   * @param {Function} callback Receives the ListImageSourcesResponse.
   * @returns {Promise<void>}
   */
  listImageSources(call, callback) {
    return this._handle(call, callback, request => {
      const response = new imagePb.ListImageSourcesResponse();
      for (const source of this.imageSourcesMapped.values()) {
        response.addImageSources(source.imageSourceProto.clone());
      }
      populateResponseHeader(response, request);
      return response;
    });
  }

  /**
   * GetImage RPC: the latest image capture from all the image sources specified in the request.
   * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the GetImageRequest.
   * @param {Function} callback Receives the GetImageResponse.
   * @returns {Promise<void>}
   */
  getImage(call, callback) {
    return this._handle(call, callback, request => this._getImage(request));
  }

  /**
   * Run an RPC handler. Like an exception in a Python servicer, an error ends the RPC with the UNKNOWN status.
   * @private
   */
  async _handle(call, callback, handler) {
    let response;
    try {
      await this.ready;
      response = await handler(call.request);
    } catch (e) {
      this.logger.error(`${this.serviceName}: failed to handle ${call.getPath?.() ?? 'the RPC'}: ${e?.stack ?? e}`);
      callback(e);
      return;
    }
    callback(null, response);
  }

  _setFormatAndDecode(imageData, imgProto, imgReq) {
    return this.imageSourcesMapped
      .get(imgReq.getImageSourceName())
      .imageDecodeWithErrorChecking(imageData, imgProto, imgReq);
  }

  /**
   * @param {imagePb.GetImageRequest} request
   * @returns {Promise<imagePb.GetImageResponse>}
   * @private
   */
  async _getImage(request) {
    const response = new imagePb.GetImageResponse();
    const fillResponse = async () => {
      let errorMessage = null;

      for (const imgReq of request.getImageRequestsList()) {
        const imgResp = response.addImageResponses();
        const srcName = imgReq.getImageSourceName();
        const source = this.imageSourcesMapped.get(srcName);
        if (!source) {
          // The requested camera source is not one of this service, so it cannot be completed and will have a
          // failure status in the response message.
          imgResp.setStatus(imagePb.ImageResponse.Status.STATUS_UNKNOWN_CAMERA);
          this.logger.warn(`Camera source '${srcName}' is unknown.`);
          continue;
        }

        if (imgReq.getResizeRatio() < 0 || imgReq.getResizeRatio() > 1) {
          imgResp.setStatus(imagePb.ImageResponse.Status.STATUS_UNSUPPORTED_RESIZE_RATIO_REQUESTED);
          this.logger.warn(`Resize ratio ${imgReq.getResizeRatio()} is unsupported.`);
          continue;
        }

        const customParams = imgReq.hasCustomParams() ? imgReq.getCustomParams() : null;
        if (customParams) {
          const valueValidationError = source.valueValidator(customParams);
          if (valueValidationError) {
            imgResp.setStatus(imagePb.ImageResponse.Status.STATUS_CUSTOM_PARAMS_ERROR);
            imgResp.setCustomParamError(valueValidationError);
            continue;
          }
        }

        // Set the image source information and the image capture parameters in the response.
        imgResp.setSource(source.imageSourceProto.clone());
        imgResp.setShot(new imagePb.ImageCapture().setCaptureParams(source.getImageCaptureParams(customParams)));

        const [capturedImage, imgTimeSeconds] = await source.getImageAndTimestamp(customParams);
        if (capturedImage === null || capturedImage === undefined || imgTimeSeconds === null) {
          imgResp.setStatus(imagePb.ImageResponse.Status.STATUS_IMAGE_DATA_ERROR);
          errorMessage = `Failed to capture an image from ${srcName} on the server.`;
          this.logger.warn(errorMessage);
          continue;
        }

        // Convert the image capture time from the local clock time into the robot's time. Then set it as the
        // acquisition timestamp for the image data.
        imgResp.getShot().setAcquisitionTime(await this._timeSync.robotTimestampFromLocalSecs(imgTimeSeconds));

        // Set the image data.
        const image = new imagePb.Image()
          .setRows(imgResp.getSource().getRows())
          .setCols(imgResp.getSource().getCols())
          .setFormat(imgReq.getImageFormat());
        imgResp.getShot().setImage(image);
        const decodeStatus = await this._setFormatAndDecode(capturedImage, image, imgReq);
        if (decodeStatus !== imagePb.ImageResponse.Status.STATUS_OK) {
          imgResp.setStatus(decodeStatus);
        }

        // Set that we successfully got the image.
        if (imgResp.getStatus() === imagePb.ImageResponse.Status.STATUS_UNKNOWN) {
          imgResp.setStatus(imagePb.ImageResponse.Status.STATUS_OK);
        }
      }

      // No header error codes, so set the response header as CODE_OK. Python sets the capture error message in the
      // header, then replaces the header: it is kept here.
      populateResponseHeader(response, request, headerPb.CommonError.Code.CODE_OK, errorMessage);
    };

    if (this.dataBufferClient !== null) {
      await new ResponseContext(response, request, this.dataBufferClient).run(fillResponse);
    } else {
      await fillResponse();
    }
    return response;
  }

  /**
   * Stop the background captures of the image sources (Python's __del__).
   * @returns {Promise<void>}
   */
  async stop() {
    await Promise.all(Array.from(this.imageSourcesMapped.values(), source => source.stopCapturing()));
  }

  /**
   * Same as stop().
   * @returns {Promise<void>}
   */
  delete() {
    return this.stop();
  }
}

module.exports = {
  CLEAR_FAULT_RPC_TIMEOUT_MSECS,
  convertRgbToGrayscale,
  CaptureLock,
  CameraInterface,
  VisualImageSource,
  ThreadCaptureOutput,
  ImageCaptureThread,
  CameraBaseImageServicer,
};

'use strict';

const assert = require('node:assert');
const { setTimeout: sleep } = require('node:timers/promise');

const { DataBufferClient } = require('./data_buffer');
const { FaultClient, ServiceFaultDoesNotExistError, ServiceFaultAlreadyExistsError } = require('./fault');
const { createValueValidator } = require('./service_customization_helpers');
const { populateResponseHeader } = require('./util');

const headerPb = require('../bosdyn/api/header_pb');
const imagePb = require('../bosdyn/api/image_pb');
const imageServiceGrpcPb = require('../bosdyn/api/image_service_grpc_pb');
const serviceCustomizationPb = require('../bosdyn/api/service_customization_pb');
const serviceFaultPb = require('../bosdyn/api/service_fault_pb');
const { secondsToDuration } = require('../bosdyn-core/util');

const CLEAR_FAULT_RPC_TIMEOUT_MSECS = 100;

/**
 * Obtient les noms des paramètres d'une fonction.
 * @param {Function} func La fonction dont on souhaite obtenir les noms des paramètres.
 * @returns {string[]}
 */
function getParameterNames(func) {
  const functionString = func.toString();
  const matches = functionString.match(/function\s+\w*\s*\((.*?)\)/);

  if (matches && matches.length > 1) {
    return matches[1]
      .split(',')
      .map(param => param.trim())
      .filter(param => param !== '');
  }

  return [];
}

class CameraInterface {
  /**
   * Communicates with the camera payload to collect the image data. Ensure this is threadsafe as multiple
   * threads/requests may try to call blocking_capture at the same time.
   * @returns {Object|Array} A tuple with image data (in any format), and the capture timestamp in seconds (float)
   * in the service computer's clock.
   * @abstract
   */
  blockingCapture() {
    // Abstract
  }

  /**
   * Decode the image data into an Image proto based on the requested format and quality.
   * @param  {*} imageData The image data output from a capture.
   * @param  {imagePb.Image} imageProto The proto message to populate with decoded image data.
   * @param  {imagePb.ImageRequest} imageFormat The image request associated with the image_data.
   * @returns {void} Mutates the image_proto message with the decoded data. This function should set the image data,
   * pixel format, image format, and potentially the transform snapshot fields within the imageProto
   * protobuf message.
   * @abstract
   */
  imageDecode(imageData, imageProto, imageFormat) { // eslint-disable-line
    // Abstract
  }
}

class VisualImageSource {
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
    this.imageSourceproto = VisualImageSource.makeImageSource(
      imageName,
      rows,
      cols,
      this.supportedPixelFormats,
      paramSpec,
    );
    this.getImageCaptureParams = (requestCustomParams = null) =>
      VisualImageSource.makeCaptureParameters(gain, exposure, requestCustomParams);

    this.paramSpec = paramSpec;

    if (paramSpec) {
      this.valueValidator = createValueValidator(paramSpec);
    } else {
      this.valueValidator = createValueValidator(new serviceCustomizationPb.DictParam.Spec());
    }

    assert.ok(cameraInterface instanceof CameraInterface);
    this.cameraInterface = cameraInterface;
    this.captureFunction = () => this._doCaptureWithErrorChecking(this.cameraInterface.blockingCapture);

    this.captureThread = null;
    this.faultClient = null;

    const cameraCaptureFaultId = new serviceFaultPb.ServiceFaultId().setFaultName(
      `Image Capture Failure for ${this.imageSourceName}`,
    );
    this.cameraCaptureFault = new serviceFaultPb.ServiceFault()
      .setFaultId(cameraCaptureFaultId)
      .setSeverity(serviceFaultPb.ServiceFault.Severity.SEVERITY_WARN);
    const decodeDataFaultId = new serviceFaultPb.ServiceFaultId().setFaultName(
      `Decoding Image ${this.imageSourceName} Failure`,
    );
    this.decodeDataFault = new serviceFaultPb.ServiceFault()
      .setFaultId(decodeDataFaultId)
      .setSeverity(serviceFaultPb.ServiceFault.Severity.SEVERITY_WARN);

    this.activeFaultIdNames = new Set();

    this.logger = logger || console;
    this.lastErrorMessage = null;
  }

  setLogger(logger) {
    if (logger) this.logger = logger;
  }

  createCaptureThread() {
    this.captureThread = new ImageCaptureThread(this.imageSourceName, this.captureFunction);
    this.captureThread.startCapturing();
  }

  async initializeFaults(faultClient, imageService) {
    this.faultClient = faultClient;
    this.cameraCaptureFault.getFaultId().setServiceName(imageService);
    this.decodeDataFault.getFaultId().setServiceName(imageService);

    if (this.faultClient !== null) {
      try {
        await this.faultClient.clearServiceFault(
          new serviceFaultPb.ServiceFaultId().setServiceName(imageService),
          true,
        );
      } catch (e) {
        if (e instanceof ServiceFaultDoesNotExistError) {
          this.activeFaultIdNames.clear();
        } else {
          this.logger.error('RPC error in initialize_faults: ', e);
        }
      }
    }
  }

  async triggerFault(errorMessage, fault) {
    if (this.faultClient && fault) {
      fault.setErrorMessage(errorMessage);
      try {
        await this.faultClient.triggerServiceFault(fault);
        this.activeFaultIdNames.add(fault.getFaultId().getFaultName());
      } catch (e) {
        if (!(e instanceof ServiceFaultAlreadyExistsError)) {
          this.logger.error('RPC error in trigger_fault: ', e);
        }
      }
    }
  }

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
        } else {
          this.logger.error('RPC error in clear_fault: ', e);
        }
      }
    }
  }

  _maybeLogError(errorMessage = null, showLastError = false) {
    if (errorMessage !== null) {
      this.lastErrorMessage = errorMessage;
    }
    if (showLastError) {
      this.logger.error(this.lastErrorMessage);
    } else {
      this.logger.warn(errorMessage);
    }
  }

  async _doCaptureWithErrorChecking(captureFunc, customParams = null, captureFuncArgs) {
    try {
      let img, timestamp;
      if (customParams || captureFuncArgs) {
        try {
          [img, timestamp] = captureFunc(customParams, captureFuncArgs);
        } catch (e) {
          [img, timestamp] = captureFunc();
        }
      } else {
        [img, timestamp] = captureFunc();
      }
      this.lastErrorMessage = null;
      await this.clearFault(this.cameraCaptureFault);
      return [img, timestamp];
    } catch (e) {
      const errorMessage = `Failed to capture an image from ${this.imageSourceName}: ${e}`;
      this._maybeLogError(errorMessage);
      await this.triggerFault(errorMessage, this.cameraCaptureFault);
      return [null, null];
    }
  }

  getImageAndTimestamp(customParams = null, captureFuncArgs) {
    if (this.captureThread) {
      const { isValid, image, timestamp } = this.captureThread.getLatestCapturedImage(customParams, captureFuncArgs);
      if (isValid) {
        if (image === null || timestamp === null) {
          this._maybe_log_error(null, true);
        }
        return [image, timestamp];
      } else {
        return this.captureFunction(customParams, captureFuncArgs);
      }
    } else {
      return this.captureFunction(customParams, captureFuncArgs);
    }
  }

  async imageDecodeWithErrorChecking(imageData, imageProto, imageReq) {
    let decodeFormat = null;
    let qualityPercent = null;
    let pixelFormat = null;

    if (imageReq) {
      decodeFormat = imageReq.getImageFormat();
      qualityPercent = imageReq.getQualityPercent();
      pixelFormat = imageReq.getPixelFormat();
      if (pixelFormat && this.supportedPixelFormats.includes(pixelFormat)) {
        return imagePb.ImageResponse.Status.STATUS_UNSUPPORTED_PIXEL_FORMAT_REQUESTED;
      }
    }

    try {
      try {
        this.cameraInterface.imageDecode(imageData, imageProto, imageReq);
      } catch (e) {
        this.cameraInterface.imageDecode(imageData, imageProto, decodeFormat, qualityPercent);
      }
      await this.clearFault(this.decodeDataFault);
      return imagePb.ImageResponse.Status.STATUS_OK;
    } catch (e) {
      let decodeFormatStr = null;
      if (decodeFormat === null) {
        decodeFormatStr = 'unknown format';
      } else {
        decodeFormatStr = Object.keys(imagePb.Image.Format)[decodeFormat];
      }
      const errorMessage = `Failed to decode image ${this.imageSourceName} to format ${decodeFormatStr}: ${e}`;
      this._maybeLogError(errorMessage);
      await this.triggerFault(errorMessage, this.decode_data_fault);
      return imagePb.ImageResponse.Status.STATUS_UNSUPPORTED_IMAGE_FORMAT_REQUESTED;
    }
  }

  stopCapturing() {
    if (this.captureThread !== null) this.captureThread.stopCapturing();
  }

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

  static makeCaptureParameters(gain = null, exposure = null, requestCustomParams = null) {
    const params = new imagePb.CaptureParameters();
    if (gain) {
      if (typeof gain === 'function') {
        params.setGain(gain());
      } else {
        params.setGain(gain);
      }
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

class ThreadCaptureOutput {
  constructor(isValid, image, timestamp) {
    this.isValid = isValid;
    this.image = image;
    this.timestamp = timestamp;
  }
}

class ImageCaptureThread {
  constructor(imageSourceName, captureFunc, capturePeriodMsecs = 50, customParams = null, captureFuncArgs) {
    this.imageSourceName = imageSourceName;
    this.lastCapturedImage = null;
    this.lastCapturedTime = null;
    this.hasUpdatedCapture = false;
    this.capturePeriodMsecs = capturePeriodMsecs;
    this.customParams = customParams;
    this.captureFuncKwargs = captureFuncArgs;
    this.initCaptureFunction = captureFunc;
    this.loopStop = false;
    this.capture_function = this._makeCaptureFunc(captureFunc, null, captureFuncArgs);
  }

  startCapturing() {
    console.log(`[IMAGE SERVICE HELPER] Starting the thread for ${this.imageSourceName}`);
    this._doImageCapture();
  }

  maybeUpdateThread(customParams = null, captureFuncArgs) {
    if (customParams !== this.customParams || captureFuncArgs !== this.capture_func_args) {
      this.captureFunction = this._makeCaptureFunc(this.initCaptureFunction, customParams, captureFuncArgs);
      this.customParams = customParams;
      this.captureFuncArgs = captureFuncArgs;
      this.hasUpdatedCapture = false;
    }
  }

  setLastCapturedImage(imageFrame, captureTime) {
    this.lastCapturedImage = imageFrame;
    this.lastCapturedTime = captureTime;
    this.hasUpdatedCapture = true;
  }

  getLatestCapturedImage(customParams = null, captureFuncArgs) {
    if (customParams === this.customParams && captureFuncArgs === this.captureFuncArgs && this.hasUpdatedCapture) {
      return new ThreadCaptureOutput(true, this.lastCapturedImage, this.lastCapturedTime);
    } else {
      this.maybeUpdateThread(customParams, captureFuncArgs);
      return new ThreadCaptureOutput(false, null, null);
    }
  }

  _makeCaptureFunc(captureFunc, customParams = null, captureFuncArgs) {
    let outputCaptureFunction;
    if (getParameterNames(captureFunc).includes('custom_params')) {
      outputCaptureFunction = () => captureFunc(customParams, captureFuncArgs);
    } else {
      outputCaptureFunction = captureFunc;
    }
    return outputCaptureFunction;
  }

  async _doImageCapture() {
    /* eslint-disable no-await-in-loop */
    while (!this.loopStop) {
      const startTime = Date.now();
      const [capture, captureTime] = this.capture_function();
      this.setLastCapturedImage(capture, captureTime);
      const waitTime = this.capturePeriodMsecs - (Date.now() - startTime);
      if (await sleep(waitTime)) break;
    }
    /* eslint-enable no-await-in-loop */
  }

  stopCapturing() {
    this.loopStop = true;
  }
}

class CameraBaseImageServicer extends imageServiceGrpcPb.ImageServiceClient {
  constructor(
    bosdynSdkRobot,
    serviceName,
    imageSources,
    logger = null,
    useBackgroundCaptureThread = true,
    backgroundCaptureParams = null,
    logImages = false,
  ) {
    super();

    this.logger = logger === null ? console : logger;
    this.bosdynSdkRobot = bosdynSdkRobot;
    this.serviceName = serviceName;
    /** @type {Object<string, VisualImageSource>} */
    this.imageSourcesMapped = {};
    this.#init(imageSources, useBackgroundCaptureThread, backgroundCaptureParams, logImages);
  }

  async #init(imageSources, useBackgroundCaptureThread, backgroundCaptureParams, logImages) {
    this.faultClient = await this.bosdynSdkRobot.ensureClient(FaultClient.defaultServiceName);
    await (await this.bosdynSdkRobot.timeSync).waitForSync();

    for (const source of imageSources) {
      source.setLogger(this.logger);
      // eslint-disable-next-line no-await-in-loop
      await source.initializeFaults(this.faultClient, this.serviceName);
      if (useBackgroundCaptureThread) source.createCaptureThread(backgroundCaptureParams);
      this.imageSourcesMapped[source.getImageSourceName()] = source;
    }
    
    if (logImages) {
      this.dataBufferClient = await this.bosdynSdkRobot.ensureClient(DataBufferClient.defaultServiceName);
    } else {
      this.dataBufferClient = null;
    }
  }

  ListImageSources({ request }, callback) {
    const response = new imagePb.ListImageSourcesResponse();
    for (const source of Object.values(this.imageSourcesMapped)) {
      response.addImageSources(source.getImageSourcesList());
    }
    populateResponseHeader(response, request);
    return callback(null, response);
  }

  _setFormatAndDecode(imageData, imgProto, imgReq) {
    return this.imageSourcesMapped[imgReq.getImageSourceName()].imageDecodeWithErrorChecking(
      imageData,
      imgProto,
      imgReq,
    );
  }

  async GetImage({ request }, callback) {
    const response = new imagePb.GetImageResponse();
    for (const imgReq of request.getImageRequestsList()) {
      const imgResp = response.addImageResponses();
      const srcName = imgReq.getImageSourceName();
      const sourcesMap = this.imageSourcesMapped[srcName];
      if (!sourcesMap) {
        imgResp.setStatus(imagePb.ImageResponse.Status.STATUS_UNKNOWN_CAMERA);
        this.logger.warn(`[IMAGE SERVICE HELPER] Camera source '${srcName}' is unknown.`);
        continue;
      }

      if (imgReq.getResizeRatio() < 0 || imgReq.getResizeRatio() > 1) {
        imgResp.setStatus(imagePb.ImageResponse.Status.STATUS_UNSUPPORTED_RESIZE_RATIO_REQUESTED);
        this.logger.warn(`Resize ratio ${imgReq.getResizeRatio()} is unsupported.`);
        continue;
      }

      if (imgReq.hasCustomParams()) {
        const valueValidationError = sourcesMap.valueValidator(imgReq.getCustomParams());
        if (valueValidationError) {
          imgResp.setStatus(imagePb.ImageResponse.Status.STATUS_CUSTOM_PARAMS_ERROR);
          imgResp.setCustomParamError(valueValidationError);
          continue;
        }
      }

      imgResp.setSource(sourcesMap.imageSourceProto);

      imgResp.setShot(
        new imagePb.ImageCapture().setCaptureParams(sourcesMap.getImageCaptureParams(imgReq.getCustomParams())),
      );

      let capturedImage, imgTimeSeconds;
      if (imgReq.hasCustomParams()) {
        [capturedImage, imgTimeSeconds] = sourcesMap.getImageAndTimestamp(imgReq.getCustomParams());
      } else {
        [capturedImage, imgTimeSeconds] = sourcesMap.getImageAndTimestamp();
      }

      if (capturedImage === null || imgTimeSeconds === null) {
        imgResp.setStatus(imagePb.ImageResponse.Status.STATUS_IMAGE_DATA_ERROR);
        const errorMessage = `Failed to capture an image from ${srcName} on the server.`;
        response.setHeader(new headerPb.ResponseHeader().setError(new headerPb.CommonError().setMessage(errorMessage)));
        this.logger.warn(errorMessage);
        continue;
      }

      imgResp.getShot().setAcquisitionTime(this.bosdynSdkRobot.timeSync.robotTimestampFromLocalSecs(imgTimeSeconds));

      imgResp.getShot().setImage(new imagePb.Image());
      imgResp.getShot().getImage().setRows(imgResp.getSource().getRows());
      imgResp.getShot().getImage().setCols(imgResp.getSource().getCols());

      imgResp.getShot().getImage().setFormat(imgReq.getImageFormat());
      // eslint-disable-next-line no-await-in-loop
      const decodeStatus = await this._setFormatAndDecode(capturedImage, imgResp.getShot().getImage(), imgReq);
      if (decodeStatus !== imagePb.ImageResponse.Status.STATUS_OK) {
        imgResp.setStatus(decodeStatus);
      }

      if (imgResp.getStatus() === imagePb.ImageResponse.Status.STATUS_UNKNOWN) {
        imgResp.setStatus(imagePb.ImageResponse.Status.STATUS_OK);
      }
    }

    populateResponseHeader(response, request);
    return callback(null, response);
  }

  delete() {
    for (const source of Object.values(this.imageSourcesMapped)) {
      source.stopCapturing();
    }
  }
}

module.exports = {
  CLEAR_FAULT_RPC_TIMEOUT_MSECS,
  CameraInterface,
  VisualImageSource,
  ImageCaptureThread,
  CameraBaseImageServicer,
};

'use strict';

const { setTimeout: sleep } = require('node:timers/promise');
const { cloneDeep } = require('lodash');

const { FaultClient, ServiceFaultDoesNotExistError, ServiceFaultAlreadyExistsError } = require('./fault');
const { populate_response_header } = require('./util');

const { seconds_to_duration, sec_to_nsec } = require('../bosdyn-core/util');
const header_pb = require('../bosdyn/api/header_pb');
const image_pb = require('../bosdyn/api/image_pb');
const image_service_grpc_pb = require('../bosdyn/api/image_service_grpc_pb');
const service_fault_pb = require('../bosdyn/api/service_fault_pb');

const CLEAR_FAULT_RPC_TIMEOUT_MSECS = 100;

class CameraInterface {
  /**
   * Communicates with the camera payload to collect the image data.
   * @returns {Object|Array} A tuple with image data (in any format), and the capture timestamp in seconds (float)
   * in the service computer's clock.
   * @abstract
   */
  blocking_capture() {
    // Abstract
  }

  /**
   * Decode the image data into an Image proto based on the requested format and quality.
   * @param  {*} image_data The image data output from a capture.
   * @param  {image_pb.Image} image_proto The proto message to populate with decoded image data.
   * @param  {image_pb.ImageRequest} image_format The image request associated with the image_data.
   * @returns {void} Mutates the image_proto message with the decoded data. This function should set the image data,
   * pixel format, image format, and potentially the transform snapshot fields within the image_proto
   * protobuf message.
   * @abstract
   */
  image_decode(image_data, image_proto, image_format) { // eslint-disable-line
    // Abstract
  }
}

class VisualImageSource {
  constructor(image_name, camera_interface, rows = null, cols = null, gain = null, exposure = null, logger = null) {
    this.image_source_name = image_name;
    this.image_source_proto = VisualImageSource.make_image_source(image_name, rows, cols);
    this.get_image_capture_params = () => VisualImageSource.make_capture_parameters(gain, exposure);

    console.assert(camera_interface instanceof CameraInterface);
    this.camera_interface = camera_interface;
    this.capture_function = () => this._do_capture_with_error_checking(this.camera_interface.blocking_capture);

    this.capture_thread = null;
    this.fault_client = null;

    const camera_capture_fault_id = new service_fault_pb.ServiceFaultId().setFaultName(
      `Image Capture Failure for ${this.image_source_name}`,
    );
    this.camera_capture_fault = new service_fault_pb.ServiceFault()
      .setFaultId(camera_capture_fault_id)
      .setSeverity(service_fault_pb.ServiceFault.Severity.SEVERITY_WARN);
    const decode_data_fault_id = new service_fault_pb.ServiceFaultId().setFaultName(
      `Decoding Image ${this.image_source_name} Failure`,
    );
    this.decode_data_fault = new service_fault_pb.ServiceFault()
      .setFaultId(decode_data_fault_id)
      .setSeverity(service_fault_pb.ServiceFault.Severity.SEVERITY_WARN);

    this.active_fault_id_names = new Set();

    this.logger = logger || console;
    this.last_error_message = null;
  }

  set_logger(logger) {
    if (logger) this.logger = logger;
  }

  create_capture_thread() {
    this.capture_thread = new ImageCaptureThread(this.image_source_name, this.capture_function);
    this.capture_thread.start_capturing();
  }

  async initialize_faults(fault_client, image_service) {
    this.fault_client = fault_client;
    this.camera_capture_fault.getFaultId().setServiceName(image_service);
    this.decode_data_fault.getFaultId().setServiceName(image_service);

    if (this.fault_client !== null) {
      try {
        await this.fault_client.clear_service_fault(
          new service_fault_pb.ServiceFaultId().setServiceName(image_service),
          true,
        );
      } catch (e) {
        if (e instanceof ServiceFaultDoesNotExistError) {
          this.active_fault_id_names.clear();
        } else {
          this.logger.error('RPC error in initialize_faults: ', e);
        }
      }
    }
  }

  async trigger_fault(error_message, fault) {
    if (this.fault_client && fault) {
      fault.setErrorMessage(error_message);
      this.fault_client.trigger_service_fault_async(fault);
      try {
        await this.fault_client.trigger_service_fault(fault);
        this.active_fault_id_names.add(fault.getFaultId().getFaultName());
      } catch (e) {
        if (!(e instanceof ServiceFaultAlreadyExistsError)) {
          this.logger.error('RPC error in trigger_fault: ', e);
        }
      }
    }
  }

  async clear_fault(fault) {
    if (this.fault_client && fault) {
      try {
        if (this.active_fault_id_names.has(fault.getFaultId().getFaultName())) {
          await this.fault_client.clear_service_fault(fault.getFaultId(), false, false, {
            timeout: CLEAR_FAULT_RPC_TIMEOUT_MSECS,
          });
          this.active_fault_id_names.delete(fault.getFaultId().getFaultName());
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

  _maybe_log_error(error_message = null, show_last_error = false) {
    if (error_message !== null) {
      this.last_error_message = error_message;
    }
    if (show_last_error) {
      this.logger.error(this.last_error_message);
    } else {
      this.logger.warn(error_message);
    }
  }

  _do_capture_with_error_checking(capture_func) {
    try {
      const [img, timestamp] = capture_func();
      this.last_error_message = null;
      this.clear_fault(this.camera_capture_fault);
      return [img, timestamp];
    } catch (e) {
      const error_message = `Failed to capture an image from ${this.image_source_name}: ${e}`;
      this._maybe_log_error(error_message);
      this.trigger_fault(error_message, this.camera_capture_fault);
      return [null, null];
    }
  }

  get_image_and_timestamp() {
    if (this.capture_thread !== null) {
      const [image, timestamp] = this.capture_thread.get_latest_captured_image();
      if (image === null || timestamp === null) {
        this._maybe_log_error(null, true);
      }
      return [image, timestamp];
    } else {
      return this.capture_function();
    }
  }

  image_decode_with_error_checking(image_data, image_proto, decode_format, quality_percent) {
    try {
      if (decode_format === image_pb.Image.Format.FORMAT_UNKNOWN) decode_format = null;
      this.camera_interface.image_decode(image_data, image_proto, decode_format, quality_percent);
      this.clear_fault(this.decode_data_fault);
      return true;
    } catch (e) {
      let decode_format_str = null;
      if (decode_format === null) {
        decode_format_str = 'unknown format';
      } else {
        decode_format_str = image_pb.Image.Format[decode_format];
      }
      const error_message = `Failed to decode image ${this.image_source_name} to format ${decode_format_str}: ${e}`;
      this._maybe_log_error(error_message);
      this.trigger_fault(error_message, this.decode_data_fault);
      return false;
    }
  }

  stop_capturing(timeout_secs = 10_000) {
    if (this.capture_thread !== null) this.capture_thread.stop_capturing(timeout_secs);
  }

  static make_image_source(
    source_name,
    rows = null,
    cols = null,
    image_type = image_pb.ImageSource.ImageType.IMAGE_TYPE_VISUAL,
  ) {
    const source = new image_pb.ImageSource().setName(source_name);

    if (rows !== null && cols !== null) {
      source.setRows(rows);
      source.setCols(cols);
    }

    source.setImageType(image_type);
    return source;
  }

  static make_capture_parameters(gain = null, exposure = null) {
    const params = new image_pb.CaptureParameters();
    if (gain) {
      if (typeof gain === 'function') {
        params.setGain(gain());
      } else {
        params.setGain(gain);
      }
    }
    if (exposure) {
      if (typeof exposure === 'function') {
        params.setExposureDuration(cloneDeep(seconds_to_duration(exposure())));
      } else {
        params.setExposureDuration(cloneDeep(seconds_to_duration(exposure)));
      }
    }
    return params;
  }
}

class ImageCaptureThread {
  constructor(image_source_name, capture_func, capture_period_msecs = 50) {
    this.image_source_name = image_source_name;
    this.last_captured_image = null;
    this.last_captured_time = null;
    this.capture_period_msecs = capture_period_msecs;
    this.capture_function = capture_func;
    this.loopStop = false;
  }

  start_capturing() {
    console.log(`[IMAGE SERVICE HELPER] Starting the thread for ${this.image_source_name}`);
    this._do_image_capture();
  }

  set_last_captured_image(image_frame, capture_time) {
    this.last_captured_image = image_frame;
    this.last_captured_time = capture_time;
  }

  get_latest_captured_image() {
    return [this.last_captured_image, this.last_captured_time];
  }

  async _do_image_capture() {
    /* eslint-disable no-await-in-loop */
    while (!this.loopStop) {
      const start_time = Date.now();
      const [capture, capture_time] = this.capture_function();
      this.set_last_captured_image(capture, capture_time);
      const wait_time = this.capture_period_msecs - (Date.now() - start_time);
      if (await sleep(wait_time)) break;
    }
    /* eslint-enable no-await-in-loop */
  }

  stop_capturing() {
    this.loopStop = true;
  }
}

class CameraBaseImageServicer extends image_service_grpc_pb.ImageServiceService {
  constructor(bosdyn_sdk_robot, service_name, image_sources, logger = null, use_background_capture_thread = true) {
    super();

    this.logger = logger === null ? console : logger;
    this.bosdyn_sdk_robot = bosdyn_sdk_robot;
    this.service_name = service_name;
    this.#init();
    this.image_sources_mapped = {};
    for (const source of image_sources) {
      source.set_logger(this.logger);
      source.initialize_faults(this.fault_client, this.service_name);
      if (use_background_capture_thread) source.create_capture_thread();
      this.image_sources_mapped[source.getImageSourceName()] = source;
    }
  }

  async #init() {
    this.fault_client = await this.bosdyn_sdk_robot.ensure_client(FaultClient.default_service_name);
    await (await this.bosdyn_sdk_robot.time_sync).wait_for_sync();
  }

  ListImageSources(request) {
    const response = new image_pb.ListImageSourcesResponse();
    for (const source of Object.values(this.image_sources_mapped)) {
      response.addImageSources(cloneDeep(source.getImageSourcesList()));
    }
    populate_response_header(response, request);
    return response;
  }

  _set_format_and_decode(image_data, img_proto, img_format, quality_percent, image_source_name) {
    return this.image_sources_mapped[image_source_name].image_decode_with_error_checking(
      image_data,
      img_proto,
      img_format,
      quality_percent,
    );
  }

  GetImage(request) {
    const response = new image_pb.GetImageResponse();
    for (const img_req of request.getImageRequestsList()) {
      const img_resp = response.setSource(this.image_sources_mapped[src_name].image_source_proto);
      const src_name = img_req.getImageSourceName();
      if (!this.image_sources_mapped[src_name]) {
        img_resp.setStatus(image_pb.ImageResponse.Status.STATUS_UNKNOWN_CAMERA);
        this.logger.warn(`[IMAGE SERVICE HELPER] Camera source '${src_name}' is unknown.`);
        continue;
      }

      img_resp.setShot(new image_pb.ImageCapture());

      img_resp.getShot().setCaptureParams(cloneDeep(this.image_sources_mapped[src_name].get_image_capture_params()));

      const [captured_image, img_time_seconds] = this.image_sources_mapped[src_name].get_image_and_timestamp();
      if (captured_image === null || img_time_seconds === null) {
        img_resp.setStatus(image_pb.ImageResponse.Status.STATUS_IMAGE_DATA_ERROR);
        const error_message = `[IMAGE SERVICE HELPER] Failed to capture an image from ${src_name} on the server.`;
        response.setHeader(
          new header_pb.ResponseHeader().setError(new header_pb.CommonError().setMessage(error_message)),
        );
        this.logger.warn(error_message);
        continue;
      }

      img_resp
        .getShot()
        .setAcquisitionTime(
          cloneDeep(this.bosdyn_sdk_robot.time_sync.robot_timestamp_from_local_secs(sec_to_nsec(img_time_seconds))),
        );

      img_resp.getShot().setImage(new image_pb.Image());
      img_resp.getShot().getImage().setRows(img_resp.getSource().getRows());
      img_resp.getShot().getImage().setCols(img_resp.getSource().getCols());

      img_resp.getShot().getImage().setFormat(img_req.getImageFormat());
      const success = this._set_format_and_decode(
        captured_image,
        img_resp.getShot().getImage(),
        img_req.getImageFormat(),
        img_req.getQualityPercent(),
        src_name,
      );
      if (!success) img_resp.setStatus(image_pb.ImageResponse.Status.STATUS_UNSUPPORTED_IMAGE_FORMAT_REQUESTED);

      if (img_resp.getStatus() === image_pb.ImageResponse.Status.STATUS_UNKNOWN) {
        img_resp.setStatus(image_pb.ImageResponse.Status.STATUS_OK);
      }
    }

    populate_response_header(response, request);
    return response;
  }
}

module.exports = {
  CLEAR_FAULT_RPC_TIMEOUT_MSECS,
  CameraInterface,
  VisualImageSource,
  ImageCaptureThread,
  CameraBaseImageServicer,
};

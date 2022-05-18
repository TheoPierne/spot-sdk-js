'use strict';

const process = require('node:process');

const logging_pb = require('../../bosdyn/api/spot_cam/logging_pb');
const service_grpc_pb = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const { BaseClient, handle_common_header_errors } = require('../common');

class MediaLogClient extends BaseClient {
  static default_service_name = 'spot-cam-media-log';
  static service_type = 'bosdyn.api.spot_cam.MediaLogService';

  constructor() {
    super(service_grpc_pb.MediaLogServiceClient);
  }

  delete(logpoint, args) {
    const request = new logging_pb.DeleteRequest().setPoint(logpoint);
    return this.call(this._stub.delete, request, this._delete_from_response, this._media_log_error_from_response, args);
  }

  delete_async(logpoint, args) {
    const request = new logging_pb.DeleteRequest().setPoint(logpoint);
    return this.call_async(
      this._stub.delete,
      request,
      this._delete_from_response,
      this._media_log_error_from_response,
      args,
    );
  }

  enable_debug(temp = false, humidity = false, bit = false, shock = true, system_stats = false, args) {
    const request = new logging_pb.DebugRequest()
      .setEnableTemperature(temp)
      .setEnableHumidity(humidity)
      .setEnableBit(bit)
      .setEnableShock(shock)
      .setEnableSystemStat(system_stats);

    return this.call(
      this._stub.enableDebug,
      request,
      this._enable_debug_from_response,
      this._media_log_error_from_response,
      args,
    );
  }

  enable_debug_async(temp = false, humidity = false, bit = false, shock = true, system_stats = false, args) {
    const request = new logging_pb.DebugRequest()
      .setEnableTemperature(temp)
      .setEnableHumidity(humidity)
      .setEnableBit(bit)
      .setEnableShock(shock)
      .setEnableSystemStat(system_stats);

    return this.call_async(
      this._stub.enableDebug,
      request,
      this._enable_debug_from_response,
      this._media_log_error_from_response,
      args,
    );
  }

  get_status(logpoint, args) {
    const request = new logging_pb.GetStatusRequest().setPoint(logpoint);
    return this.call(
      this._stub.getStatus,
      request,
      this._get_status_from_response,
      this._media_log_error_from_response,
      args,
    );
  }

  get_status_async(logpoint, args) {
    const request = new logging_pb.GetStatusRequest().setPoint(logpoint);
    return this.call_async(
      this._stub.getStatus,
      request,
      this._get_status_from_response,
      this._media_log_error_from_response,
      args,
    );
  }

  list_cameras(args) {
    const request = new logging_pb.ListCamerasRequest();
    return this.call(
      this._stub.listCameras,
      request,
      this._list_cameras_from_response,
      this._media_log_error_from_response,
      args,
    );
  }

  list_cameras_async(args) {
    const request = new logging_pb.ListCamerasRequest();
    return this.call_async(
      this._stub.listCameras,
      request,
      this._list_cameras_from_response,
      this._media_log_error_from_response,
      args,
    );
  }

  list_logpoints(args) {
    const request = new logging_pb.ListLogpointsRequest();
    return this.call(
      this._stub.listLogpoints,
      request,
      this._list_logpoints_from_response,
      this._media_log_error_from_response,
      args,
    );
  }

  retrieve(logpoint, args) {
    const request = new logging_pb.RetrieveRequest().setPoint(logpoint);
    return this.call(
      this._stub.retrieve,
      request,
      this._retrieve_from_response,
      this._media_log_error_from_response,
      args,
    );
  }

  retrieve_raw_data(logpoint, args) {
    const request = new logging_pb.RetrieveRawDataRequest().setPoint(logpoint);
    return this.call(
      this._stub.retrieveRawData,
      request,
      this._retrieve_from_response,
      this._media_log_error_from_response,
      args,
    );
  }

  set_passphrase(passphrase, args) {
    process.emitWarning(
      'Spot CAM encryption has been removed as a result of the switch to NTFS.',
      '[DeprecationWarning]',
    );
    const request = new logging_pb.SetPassphraseRequest().setPassPhrase(passphrase);
    return this.call(
      this._stub.setPassphrase,
      request,
      this._set_passphrase_from_response,
      this._media_log_error_from_response,
      args,
    );
  }

  set_passphrase_async(passphrase, args) {
    process.emitWarning(
      'Spot CAM encryption has been removed as a result of the switch to NTFS.',
      '[DeprecationWarning]',
    );
    const request = new logging_pb.SetPassphraseRequest().setPassPhrase(passphrase);
    return this.call_async(
      this._stub.setPassphrase,
      request,
      this._set_passphrase_from_response,
      this._media_log_error_from_response,
      args,
    );
  }

  store(camera, record_type, tag = null, args) {
    // eslint-disable-next-line
    const request = new logging_pb.StoreRequest().setCamera(camera).setType(record_type).setTag(tag);
    return this.call(this._stub.store, request, this._store_from_response, this._media_log_error_from_response, args);
  }

  store_async(camera, record_type, tag = null, args) {
    // eslint-disable-next-line
    const request = new logging_pb.StoreRequest().setCamera(camera).setType(record_type).setTag(tag);
    return this.call_async(
      this._stub.store,
      request,
      this._store_from_response,
      this._media_log_error_from_response,
      args,
    );
  }

  tag(logpoint, args) {
    const request = new logging_pb.TagRequest().setPoint(logpoint);
    return this.call(this._stub.tag, request, this._tag_from_response, this._media_log_error_from_response, args);
  }

  tag_async(logpoint, args) {
    const request = new logging_pb.TagRequest().setPoint(logpoint);
    return this.call_async(this._stub.tag, request, this._tag_from_response, this._media_log_error_from_response, args);
  }

  /* eslint-disable no-unused-vars */
  _delete_from_response(response) {
    // Pass
  }

  _enable_debug_from_response(response) {
    // Pass
  }

  _get_status_from_response(response) {
    return response.getPoint();
  }

  _list_cameras_from_response(response) {
    return response.getCamerasList();
  }

  _list_logpoints_from_response(responses) {
    const logpoints = [];

    for (const response of responses) {
      logpoints.concat(response.getLogpointsList());
    }

    return logpoints;
  }

  _retrieve_from_response(responses) {
    let total = 0;

    const local_chunks = [];
    let logpoint = null;
    for (const response of responses) {
      if (logpoint === null) logpoint = response.getLogPoint();
      const chunk = response.getData();
      total += chunk.getData().length;
      console.debug(`Retrieved ${chunk.getData().length} bytes (${total}/{chunk.getTotalSize()})`);
      local_chunks.push(chunk);
    }
    return [logpoint, local_chunks.map(e => e.getData())];
  }

  _set_passphrase_from_response(response) {
    // Pass
  }

  _store_from_response(response) {
    return response.getPoint();
  }

  _tag_from_response(response) {
    // Pass
  }

  _media_log_error_from_response(response) {
    return handle_common_header_errors(response) || null;
  }
  /* eslint-enable no-unused-vars */
}

module.exports = {
  MediaLogClient,
};

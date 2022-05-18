'use strict';

const util = require('util');

const { BaseClient, common_header_errors } = require('./common');
const time_sync = require('./time_sync');

const log_annotation_protos = require('../bosdyn/api/log_annotation_pb');
const log_annotation_service = require('../bosdyn/api/log_annotation_service_grpc_pb');

class InvalidArgument extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'InvalidArgument';
  }
}

/**
 * A client for adding annotations to robot logs. (deprecated)
 * @extends {BaseClient}
 * @deprecated The log-annotation client and service have been replaced by data_buffer.
 */
class LogAnnotationClient extends BaseClient {
  static default_service_name = 'log-annotation';
  static service_type = 'bosdyn.api.LogAnnotationService';

  constructor() {
    super(log_annotation_service.LogAnnotationServiceClient);
    this.log_tick_schemas = {};
    this._timesync_endpoint = null;
  }

  update_from(other) {
    super.update_from(other);
    try {
      this._timesync_endpoint = other.time_sync.endpoint;
    } catch (e) {
      // Pass
    }
  }

  add_text_messages(text_messages, args) {
    return this._do_add_text_messages(this.call, text_messages, args);
  }

  _do_add_text_messages(func, text_messages, args) {
    const request = new log_annotation_protos.AddLogAnnotationRequest();
    for (const in_text_msg of text_messages) {
      request.getAnnotations().addTextMessages(in_text_msg);
    }

    return func(this._stub.addLogAnnotation, request, null, common_header_errors, args);
  }

  add_operator_comment(msg, robot_timestamp = null, args) {
    return this._do_add_operator_comment(this.call, msg, robot_timestamp, args);
  }

  _do_add_operator_comment(func, msg, robot_timestamp = null, args) {
    const request = new log_annotation_protos.AddLogAnnotationRequest();
    robot_timestamp = robot_timestamp || this._now_in_robot_basis('Operator Comment');
    const operatorMessage = new log_annotation_protos.LogAnnotationOperatorMessage()
      .setMessage(msg)
      .setTimestamp(robot_timestamp);
    request.getAnnotations().addOperatorMessages(operatorMessage);
    return func(this._stub.addLogAnnotation, request, null, common_header_errors, args);
  }

  add_log_blob(data, type_id, channel = null, robot_timestamp = null, args) {
    return this._do_add_log_blob(this.call, data, type_id, channel, robot_timestamp, args);
  }

  _do_add_log_blob(func, data, type_id, channel, robot_timestamp, args) {
    const request = new log_annotation_protos.AddLogAnnotationRequest();
    if (!channel) channel = type_id;
    robot_timestamp = robot_timestamp || this._now_in_robot_basis(type_id);
    const blobData = new log_annotation_protos.LogAnnotationLogBlob()
      .setTimestamp(robot_timestamp)
      .setChannel(channel)
      .setTypeId(type_id)
      .setData(data);
    request.getAnnotations().addBlobData(blobData);

    return func(this._stub.addLogAnnotation, request, null, common_header_errors, args);
  }

  add_log_protobuf(proto, robot_timestamp = null) {
    return this._do_add_log_protobuf(this.add_log_blob, proto, robot_timestamp);
  }

  _do_add_log_protobuf(func, proto, robot_timestamp) {
    const binary_data = proto.serializeBinary();
    robot_timestamp = robot_timestamp || this._now_in_robot_basis(null, proto);
    return func(binary_data, proto.displayName, proto.DESCRIPTOR.full_name, robot_timestamp);
  }

  _now_in_robot_basis(msg_type = null, proto = null) {
    if (this._timesync_endpoint) {
      let converter;
      try {
        converter = this._timesync_endpoint.get_robot_time_converter();
      } catch (e) {
        if (e instanceof time_sync.NotEstablishedError) {
          this.logger.log(
            `Could not timestamp message of type ${
              msg_type !== null ? msg_type : proto !== null ? proto.DESCRIPTOR.full_name : 'Unknown'
            }`,
          );
        }
      }
      if (converter) {
        return converter.robot_timestamp_from_local_secs(Date.now());
      } else {
        return null;
      }
    }
    return null;
  }
}

const LogAnnotationClientDeprecated = util.deprecate(
  LogAnnotationClient,
  'The log-annotation client and service have been replaced by data_buffer.',
);

module.exports = {
  InvalidArgument,
  LogAnnotationClient: LogAnnotationClientDeprecated,
};

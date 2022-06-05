'use strict';

const { GrpcRequests, GrpcResponses } = require('./bosdyn');
const { PROTOBUF_CONTENT_TYPE } = require('./common');

const { timestamp_to_nsec } = require('../util');

class GrpcServiceWriter {
  constructor(data_writer, service_name){
    this._data_writer = data_writer;
    this._service_name = service_name;
    this._request_types = {};
    this._response_types = {};
  }

  log_request(protobuf){
    const series_index = this._get_series_index(protobuf, true);
    this._data_writer.write_data(
      series_index,
      timestamp_to_nsec(protobuf.getHeader().getRequestTimestamp()),
      protobuf.serializeBinary());
  }

  log_response(protobuf){
    const series_index = this._get_series_index(protobuf, false);
    this._data_writer.write_data(series_index,
      timestamp_to_nsec(protobuf.getHeader().getResponseTimestamp()),
      protobuf.serializeBinary());
  }

  _get_series_index(protobuf, is_request){
    const message_name = protobuf.DESCRIPTOR.full_name;
    let name_to_index, series_type;
    if (is_request){
      name_to_index = this._request_types;
      series_type = GrpcRequests;
    } else {
      name_to_index = this._response_types;
      series_type = GrpcResponses;
    }

    if(message_name in name_to_index) return name_to_index[message_name];

    const series_spec = {
      [series_type.SERVICE_NAME]: this._service_name,
      [series_type.MESSAGE_TYPE]: message_name
    };

    const series_index = this._data_writer.add_message_series(series_type.SERIES_TYPE, series_spec, PROTOBUF_CONTENT_TYPE, message_name);
    name_to_index[message_name] = series_index;
    return series_index;
  }
}

module.exports = {
  GrpcServiceWriter,
};

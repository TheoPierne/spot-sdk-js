'use strict';

const loader = require('@grpc/proto-loader');

const { GrpcRequests, GrpcResponses } = require('./bosdyn');
const { LOGGER } = require('./common');
const { GrpcServiceReader } = require('./grpc_service_reader');

function getFunctionName(glob, func) {
  return Object.entries(Object.getOwnPropertyDescriptors(glob))
    .filter(([, { value }]) => value === func)
    .map(([key]) => key)[0];
}

const PROTO = 'C:\\Users\\theop\\Desktop\\spot-sdk\\spot-sdk-py\\spot-sdk-3.1.2\\protos\\';

let c = loader.loadSync(`${PROTO}auth.proto`, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [PROTO],
});

class GrpcReader {
  constructor(data_reader, protobuf_classes, base) {
    this._data_reader = data_reader;
    this._service_name_to_reader = {};
    this._series_index_to_reader = {};
    const proto_name_to_class = Object.fromEntries(
      protobuf_classes.map(proto_class => [getFunctionName(base, proto_class), proto_class]),
    );
    this._proto_name_to_reader = {};
    for (const [series_index, series_identifier] of data_reader.file_index.getSeriesIdentifiersList()) {
      console.log(series_index);
      if (![GrpcRequests.SERIES_TYPE, GrpcResponses.SERIES_TYPE].include(series_identifier.getSeriesType())) {
        console.log(series_identifier.getSeriesType(), GrpcRequests.SERIES_TYPE, GrpcResponses.SERIES_TYPE);
        continue;
      }

      const service_name = series_identifier.getSpecMap().get(GrpcRequests.SERVICE_NAME);
      const message_type = series_identifier.getSpecMap().get(GrpcRequests.MESSAGE_TYPE);
      let proto_class, service_reader;

      try {
        proto_class = proto_name_to_class[message_type];
      } catch (e) {
        LOGGER.exception(`Don't have a protobuf class for ${message_type}`);
        continue;
      }

      try {
        service_reader = this._service_name_to_reader[service_name];
      } catch (e) {
        service_reader = new GrpcServiceReader(this, service_name);
        this._service_name_to_reader[service_name] = service_reader;
      }
      console.log('D');
      const series_descriptor = this._data_reader.series_descriptor(series_index);
      const reader = service_reader.add_proto_reader(
        series_index,
        proto_class,
        series_identifier.getSeriesType(),
        series_descriptor,
        base,
      );
      if (!(message_type in this._proto_name_to_reader)) {
        this._proto_name_to_reader[message_type] = reader;
      }
      this._series_index_to_reader[series_index] = reader;
    }
    console.log(Object.keys(this._proto_name_to_reader));
  }

  get data_reader() {
    return this._data_reader;
  }

  get_proto_reader(proto_name) {
    return this._proto_name_to_reader[proto_name];
  }

  get_message(series_index, index_in_series) {
    const reader = this._series_index_to_reader[series_index];
    return reader.get_message(index_in_series);
  }
}

module.exports = {
  GrpcReader,
};

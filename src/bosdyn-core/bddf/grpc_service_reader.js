'use strict';

const { GrpcProtoReader } = require('./grpc_proto_reader');

function getFunctionName(glob, func) {
  return Object.entries(Object.getOwnPropertyDescriptors(glob))
    .filter(([, { value }]) => value === func)
    .map(([key]) => key)[0];
}

class GrpcServiceReader {
  constructor(grpc_reader, service_name) {
    this._grpc_reader = grpc_reader;
    this._service_name = service_name;
    this._type_name_to_reader = {};
  }

  get data_reader() {
    return this._grpc_reader.data_reader;
  }

  get_proto_reader(type_name) {
    return this._type_name_to_reader[type_name];
  }

  add_proto_reader(series_index, proto_type, series_type, series_descriptor, proto_base) {
    const reader = new GrpcProtoReader(this, series_index, series_type, proto_type, series_descriptor);
    this._type_name_to_reader[getFunctionName(proto_base, proto_type)] = reader;
    return reader;
  }
}

module.exports = {
  GrpcServiceReader,
};

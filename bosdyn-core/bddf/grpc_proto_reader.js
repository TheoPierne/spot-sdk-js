'use strict';

class GrpcProtoReader {
  constructor(service_reader, series_index, series_type, proto_type, series_descriptor) {
    this._service_reader = service_reader;
    this._series_index = series_index;
    this._series_type = series_type;
    this._proto_type = proto_type;
    this._series_descriptor = series_descriptor;
    this._num_messages = null;
  }

  get num_messages() {
    if (this._num_messages === null) {
      this._num_messages = this._service_reader.data_reader.num_data_blocks(this._series_index);
    }
    return this._num_messages;
  }

  get_message(index_in_series) {
    const [_desc, timestamp_nsec, data] = this._service_reader.data_reader.read(this._series_index, index_in_series);
    const protobuf = new this._proto_type(data);
    return [timestamp_nsec, protobuf];
  }
}

module.exports = {
  GrpcProtoReader,
};

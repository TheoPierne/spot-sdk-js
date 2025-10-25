'use strict';

const { MessageReader } = require('./message_reader');

class ProtobufReader extends MessageReader {
  constructor(data_reader) {
    super(data_reader, true);
  }

  get_message(series_index, protobuf_type, index_in_series) {
    const [desc, timestamp_nsec, data] = this.get_blob(series_index, index_in_series);
    const protobuf = new protobuf_type(data);
    return [desc, timestamp_nsec, protobuf];
  }
}

module.exports = {
  ProtobufReader,
};

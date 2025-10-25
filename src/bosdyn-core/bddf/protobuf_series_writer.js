'use strict';

const { MessageChannel } = require('./bosdyn');
const { PROTOBUF_CONTENT_TYPE } = require('./common');

class ProtobufSeriesWriter {
  constructor(
    data_writer,
    protobuf_type,
    channel_name = null,
    is_metadata = false,
    annotations = null,
    additional_index_names = null,
  ) {
    this._data_writer = data_writer;
    this._protobuf_type = protobuf_type;
    this._type_name = protobuf_type.DESCRIPTOR.full_name;
    this._channel_name = channel_name || this._type_name;
    this._series_spec = { 'bosdyn:channel': this._channel_name };
    this._series_index = this._data_writer.add_message_series(
      this.series_type,
      this.series_spec,
      PROTOBUF_CONTENT_TYPE,
      this._type_name,
      is_metadata,
      annotations,
      additional_index_names,
    );
  }

  write(timestamp_nsec, protobuf, additional_indexs = null) {
    this._data_writer.write_data(this._series_index, timestamp_nsec, protobuf.serializeBinary(), additional_indexs);
  }

  get series_type() {
    return MessageChannel.SERIES_TYPE;
  }

  get series_spec() {
    return this._series_spec;
  }
}

module.exports = {
  ProtobufSeriesWriter,
};

'use strict';

class ProtobufChannelReader {
  constructor(protobuf_reader, protobuf_type, channel_name = null) {
    this._protobuf_reader = protobuf_reader;
    this._protobuf_type = protobuf_type;
    this._channel_name = channel_name || protobuf_type.DESCRIPTOR.full_name;
    this._series_index = this._protobuf_reader.series_index(this._channel_name, protobuf_type.DESCRIPTOR.full_name);
    this._descriptor = null;
    this._num_messages = null;
  }

  get series_descriptor() {
    if (this._descriptor === null) {
      this._descriptor = this._protobuf_reader.series_index_to_descriptor(this._series_index);
    }
    return this._descriptor;
  }

  get num_messages() {
    if (this._num_messages === null) {
      this._num_messages = this._protobuf_reader.data_reader.num_data_blocks(this._series_index);
    }
    return this._num_messages;
  }

  get_message(index_in_series) {
    const [, timestamp, msg] = this._protobuf_reader.get_message(
      this._series_index,
      this._protobuf_type,
      index_in_series,
    );
    return [timestamp, msg];
  }

  iterate() {
    return new Iterator(this);
  }
}

class Iterator {
  constructor(channel_reader) {
    this._channel_reader = channel_reader;
    this._index = 0;
  }

  *[Symbol.iterator]() {
    if (this._index >= this._channel_reader.num_messages) {
      return;
    }
    const msg = this._channel_reader.get_message(this._index);
    this._index += 1;
    yield msg;
  }
}

module.exports = {
  ProtobufChannelReader,
};

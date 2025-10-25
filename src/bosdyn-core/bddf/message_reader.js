'use strict';

const { PROTOBUF_CONTENT_TYPE } = require('./common');

class MessageReader {
  constructor(data_reader, require_protobuf = false) {
    this._data_reader = data_reader;
    this._channel_name_to_series_descriptor = {};
    this._channel_name_to_series_index = {};
    for (const [series_index, series_identifier] of data_reader.file_index.getSeriesIdentifiersList()) {
      let channel_name;

      if (series_identifier.getSpecMap().has('bosdyn:channel')) {
        channel_name = series_identifier.getSpecMap().get('bosdyn:channel');
      } else {
        continue;
      }

      const series_descriptor = this._data_reader.series_descriptor(series_index);
      if (!series_descriptor.hasMessageType()) continue;

      const message_type = series_descriptor.getMessageType();
      if (require_protobuf && message_type.getContentType() !== PROTOBUF_CONTENT_TYPE) continue;
      this._channel_name_to_series_descriptor[channel_name] = series_descriptor;
      this._channel_name_to_series_index[channel_name] = series_descriptor.getSeriesIndex();
    }
  }

  get data_reader() {
    return this._data_reader;
  }

  get channel_name_to_series_descriptor() {
    return this._channel_name_to_series_descriptor;
  }

  series_index(channel_name, message_type = null) {
    if (message_type === null) return this._channel_name_to_series_index[channel_name];

    for (const [series_index, series_identifier] of this._data_reader.file_index.getSeriesIdentifiersList()) {
      let series_channel;

      if (series_identifier.getSpecMap().has('bosdyn:channel')) {
        series_channel = series_identifier.getSpecMap().get('bosdyn:channel');
      } else {
        continue;
      }

      if (series_channel !== channel_name) continue;

      const series_descriptor = this._data_reader.series_descriptor(series_index);
      if (!series_descriptor.hasMessageType()) continue;

      if (message_type === series_descriptor.getMessageType().getTypeName()) return series_index;
    }

    throw new TypeError(`No series with channel_name=${channel_name} and message_type=${message_type}`);
  }

  series_index_to_descriptor(series_index) {
    return this._data_reader.file_index.series_descriptor(series_index);
  }

  get_blob(series_index, index_in_series) {
    return this._data_reader.read(series_index, index_in_series);
  }
}

module.exports = {
  MessageReader,
};

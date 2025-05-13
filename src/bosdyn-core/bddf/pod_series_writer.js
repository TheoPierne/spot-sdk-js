'use strict';

const { Buffer } = require('node:buffer');

const struct = require('python-struct');

const { MessageChannel } = require('./bosdyn');
const { DataFormatError, POD_TYPE_TO_NUM_BYTES, POD_TYPE_TO_STRUCT } = require('./common');

class PodSeriesWriter {
  constructor(
    data_writer,
    series_type,
    series_spec,
    pod_type,
    dimensions = null,
    annotations = null,
    data_block_size = 2048,
  ) {
    this._data_writer = data_writer;
    this._series_type = series_type;
    this._series_spec = series_spec;
    this._pod_type = pod_type;
    this._dimensions = dimensions || [];
    this._series_index = this._data_writer.add_pod_series(
      this.series_type,
      this.series_spec,
      this._pod_type,
      this._dimensions,
      annotations,
    );
    this._data_block_size = data_block_size;
    this._num_values_per_sample = 1;
    for (const dim of this._dimensions) {
      this._num_values_per_sample *= dim;
    }
    this._bytes_per_sample = POD_TYPE_TO_NUM_BYTES[pod_type] * this._num_values_per_sample;
    this._block = Buffer.from('');
    this._timestamp_nsec = null;
    this._format_str = `<${this._num_values_per_sample}${POD_TYPE_TO_STRUCT[pod_type]}`;
    this._data_writer.run_on_close(this.finish_block.bind(this));
  }

  write(timestamp_nsec, sample) {
    const serialized_sample = struct.pack(this._format_str, sample);
    if (serialized_sample.length !== this._bytes_per_sample) {
      throw new DataFormatError(
        `${this._series_spec} expect ${this._bytes_per_sample} elements but got ${serialized_sample.length})`,
      );
    }
    if (this._bytes_per_sample >= this._data_block_size) {
      this._data_writer.write_data(this._series_index, timestamp_nsec, serialized_sample);
      return;
    }

    if (!this._block) {
      this._timestamp_nsec = timestamp_nsec;
      this._block = serialized_sample;
    } else {
      this._block += serialized_sample;
    }

    if (this._block.length + this._bytes_per_sample > this._data_block_size) {
      this._data_writer.write_data(this._series_index, this._timestamp_nsec, this._block);
      this._block = Buffer.from('');
    }
  }

  finish_block() {
    if (!this._block) return;
    this._data_writer.write_data(this._series_index, this._timestamp_nsec, this._block);
    this._block = Buffer.from('');
  }

  get series_type() {
    return MessageChannel.SERIES_TYPE;
  }

  get series_spec() {
    return this._series_spec;
  }
}

module.exports = {
  PodSeriesWriter,
};

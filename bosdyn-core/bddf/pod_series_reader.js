'use strict';

const { range } = require('lodash');
const struct = require('python-struct');

const { ParseError, POD_TYPE_TO_NUM_BYTES, POD_TYPE_TO_STRUCT } = require('./common');

const bddf_pb = require('../../bosdyn/api/bddf_pb');

class PodSeriesReader {
  constructor(data_reader, series_spec) {
    this._data_reader = data_reader;
    this._series_index = this._data_reader.series_spec_to_index(series_spec);
    this._series_descriptor = this._data_reader.series_descriptor(this._series_index);
    if (!this._series_descriptor.hasPodType()) {
      const dataType = bddf_pb.SeriesDescriptor.DatatypeCase[this._series_descriptor.getDatatypeCase()];
      throw new ParseError(`Expected DataType 'pod_type' but got ${dataType}.`);
    }

    this._pod_type = this._series_descriptor.getPodType();
    this._num_values_per_sample = 1;
    for (const dim of this._pod_type.getDimensionList()) {
      this._num_values_per_sample *= dim;
    }
    const pod_type = this._pod_type.getPodType();
    this._bytes_per_sample = POD_TYPE_TO_NUM_BYTES[pod_type] * this._num_values_per_sample;
    this._num_data_blocks = null;
  }

  get pod_type() {
    return this._pod_type;
  }

  get series_descriptor() {
    return this._series_descriptor;
  }

  get num_data_blocks() {
    if (this._num_data_blocks === null) {
      this._num_data_blocks = this._data_reader.num_data_blocks(this._series_index);
    }
    return this._num_data_blocks;
  }

  read_samples(index_in_series) {
    const [, timestamp_nsec, data] = this._data_reader.read(this._series_index, index_in_series);
    const num_samples = Math.floor(data.length / this._bytes_per_sample);
    const expected_size = num_samples * this._bytes_per_sample;
    if (data.length !== expected_size) {
      const id = this._series_descriptor.getSeriesIdentifier();
      throw new ParseError(`${id} idx=${index_in_series} expect ${expected_size} elements but got ${data.length}`);
    }

    const num_values = num_samples * this._num_values_per_sample;
    const format_str = `<${num_values}${POD_TYPE_TO_STRUCT[this._pod_type.getPodType()]}`;
    const pod_data = struct.unpack(format_str, data);

    function _split(vals, dims) {
      if (!dims.length) return vals;
      const els_per_sample = dims.map(x => [x]);
      console.assert(els_per_sample);
      const next_dims = dims.slice(1);
      // Return [_split(vals[i:i + els_per_sample], next_dims) for i in range(0, len(vals), els_per_sample)];
      return range(0, vals.length, els_per_sample.length).map(x =>
        _split(vals.slice(x, x + els_per_sample.length), next_dims),
      );
    }

    const split_data = _split(pod_data, this._pod_type.getDimensionList());

    return [timestamp_nsec, split_data];
  }
}

module.exports = {
  PodSeriesReader,
};

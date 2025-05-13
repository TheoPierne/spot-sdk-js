'use strict';

const { BlockWriter } = require('./block_writer');
const { FileIndexer } = require('./file_indexer');

const bddf_pb = require('../../bosdyn/api/bddf_pb');

class DataWriter {
  constructor(outfile, annotations = null) {
    this._writer = new BlockWriter(outfile);
    this._indexer = new FileIndexer();
    this._annotations = annotations;
    this._writer.write_header(annotations);
    this._on_close = [];
  }

  get file_index() {
    return this._indexer.file_index;
  }

  add_message_series(
    series_type,
    series_spec,
    content_type,
    type_name,
    is_metadata = false,
    annotations = null,
    additional_index_names = null,
  ) {
    const message_type = new bddf_pb.MessageTypeDescriptor()
      .setContentType(content_type)
      .setTypeName(type_name)
      .setIsMetadata(is_metadata);
    return this.add_series(series_type, series_spec, message_type, undefined, annotations, additional_index_names);
  }

  add_pod_series(series_type, series_spec, type_enum, dimension = null, annotations = null) {
    const pod_type = new bddf_pb.PodTypeDescriptor().setPodType(type_enum).setDimension(dimension);
    return this.add_series(series_type, series_spec, undefined, pod_type, annotations);
  }

  add_series(
    series_type,
    series_spec,
    message_type = null,
    pod_type = null,
    annotations = null,
    additional_index_names = null,
  ) {
    return this._indexer.add_series(
      series_type,
      series_spec,
      message_type,
      pod_type,
      annotations,
      additional_index_names,
      this._writer,
    );
  }

  write_data(series_index, timestamp_nsec, data, additional_indexes = null) {
    this._indexer.index_data_block(series_index, timestamp_nsec, this._writer.tell(), data.length, additional_indexes);
    const data_descriptor = this._indexer.make_data_descriptor(series_index, timestamp_nsec, additional_indexes);
    this._writer.write_data_block(data_descriptor, data);
  }

  run_on_close(thunk) {
    this._on_close.push(thunk);
  }

  _close() {
    if (this._writer.closed) return;
    for (const thunk of this._on_close) {
      thunk();
    }
    this._indexer.write_index(this._writer);
    this._writer.close();
  }
}

module.exports = {
  DataWriter,
};

'use strict';

const crypto = require('node:crypto');

const { BaseDataReader } = require('./base_data_reader');
const { ParseError } = require('./common');
const { FileIndexer } = require('./file_indexer');

class StreamDataReader extends BaseDataReader {
  constructor(outfile) {
    super(outfile);
    this._hasher = crypto.createHash('sha1');
    this._indexer = new FileIndexer();
    this._series_index_to_block_index = {};
  }

  _read(nbytes) {
    const block = super._read(nbytes);
    this._hasher.update(block);
    return block;
  }

  get read_checksum() {
    return this._read_checksum;
  }

  get stream_file_index() {
    return this._indexer.file_index;
  }

  _computed_checksum() {
    return this._hasher.digest();
  }

  series_descriptor(series_index) {
    return this._indexer.series_descriptor(series_index);
  }

  read_data_block() {
    // eslint-disable-next-line
    while (true){
      const [is_data, desc, data] = this.read_next_block();
      if (!is_data) continue;
      return [desc, this.series_descriptor(desc.getSeriesIndex()), data];
    }
  }

  read_next_block() {
    const file_offset = this._file.tell();
    let is_data, desc, data;
    try {
      [is_data, desc, data] = this._read_block();
    } catch (e) {
      this._eof = true;
      throw e;
    }
    if (is_data) {
      this._indexer.index_data_block(
        desc.getSeriesIndex(),
        desc.getTimestamp().toDate().getTime(),
        data.length,
        file_offset,
        desc.getAdditionalIndexesList(),
      );
    } else if (desc.hasFileIndex()) {
      this._file_index = desc.getFileIndex();
    } else if (desc.hasSeriesDescriptor()) {
      const series_descriptor = desc.getSeriesDescriptor();
      this._indexer.add_series_descriptor(series_descriptor, file_offset);
    } else if (desc.hasSeriesBlockIndex()) {
      const series_block_index = desc.getSeriesBlockIndex();
      this._series_index_to_block_index[series_block_index.getSeriesIndex()] = series_block_index;
    } else {
      throw new ParseError(`Unknown DescriptorType ${desc.getDescriptortypeCase()}`);
    }
    return [is_data, desc, data];
  }

  get series_block_indexes() {
    return this._indexer.series_block_indexes;
  }

  series_block_index(series_index) {
    return this._indexer.series_block_indexes[series_index];
  }

  get eof() {
    return this._eof;
  }
}

module.exports = {
  StreamDataReader,
};

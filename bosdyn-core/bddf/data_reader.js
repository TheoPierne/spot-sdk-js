'use strict';

const struct = require('python-struct');

const { BaseDataReader } = require('./base_data_reader');
const { END_MAGIC, INDEX_OFFSET_OFFSET, MAGIC, ParseError } = require('./common');

class DataReader extends BaseDataReader {
  constructor(infile = null, filename = null) {
    super(infile, filename);
    this._series_index_to_descriptor = {};
    this._series_index_to_block_index = {};
    this._read_index();
  }

  series_descriptor(series_index) {
    if (series_index in this._series_index_to_descriptor) return this._series_index_to_descriptor[series_index];

    const series_block_index = this.series_block_index(series_index);
    const desc = this._read_desc_block_at('series_descriptor', series_block_index.descriptor_file_offset);
    this._series_index_to_descriptor[series_index] = desc;
    return desc;
  }

  num_data_blocks(series_index) {
    return this.series_block_index(series_index).block_entries.length;
  }

  total_bytes(series_index) {
    return this.series_block_index(series_index).total_bytes;
  }

  read(series_index, index_in_series) {
    const series_block_index = this.series_block_index(series_index);
    const msg_idx = series_block_index.block_entries[index_in_series];
    const [desc, data] = this._read_data_block_at(msg_idx.file_offset);
    return [desc, msg_idx.getTimestamp().ToNanoseconds(), data];
  }

  series_block_index(series_index) {
    if (series_index in this._series_index_to_block_index) return this._series_index_to_block_index[series_index];

    const offset = this.file_index.series_block_index_offsets[series_index];
    const block_index = this._read_desc_block_at('series_block_index', offset);
    this._series_index_to_block_index[series_index] = block_index;
    return block_index;
  }

  _read_index() {
    this._file.seek(-END_MAGIC.length, os.SEEK_END);
    const end_magic = this._read(END_MAGIC.length);
    if (end_magic !== END_MAGIC) {
      throw new ParseError('Bad magic bytes at the end of the file.');
    }
    this._file.seek(-INDEX_OFFSET_OFFSET, os.SEEK_END);
    this._index_offset = this._checksum = struct.unpack('<QQ', this._read(16));
    if (this._index_offset < MAGIC.length) {
      throw new ParseError(`Invalid offset to index: ${this._index_offset})`);
    }
    this._file_index = this._read_desc_block_at('file_index', this._index_offset);
    // This._spec_index = [{key: value for key, value in desc.spec.items()} for desc in this._file_index.series_identifiers];
    this._spec_index = this._file_index.series_identifiers.map(desc =>
      Object.entries(desc.spec).map((key, val) => {
        val;
      }),
    );
  }

  _seek_to(location) {
    if (location < MAGIC.length) {
      throw new ParseError(`Invalid offset for block: ${location})`);
    }
    this._file.seek(location);
  }

  _read_data_block_at(location) {
    this._seek_to(location);
    return this._read_data_block();
  }

  _read_desc_block_at(descriptor_type_name, location) {
    this._seek_to(location);
    return this._read_desc_block(descriptor_type_name);
  }
}

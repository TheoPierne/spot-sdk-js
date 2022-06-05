'use strict';

const { createReadStream } = require('node:fs');
const readline = require('node:readline');

const { camelCase } = require('lodash');
const struct = require('python-struct');

const {
  BLOCK_HEADER_SIZE_MASK,
  BLOCK_HEADER_TYPE_MASK,
  ChecksumError,
  DATA_BLOCK_TYPE,
  DESCRIPTOR_BLOCK_TYPE,
  DataFormatError,
  END_BLOCK_TYPE,
  MAGIC,
  LOGGER,
  ParseError,
  SHA1_DIGEST_NBYTES,
} = require('./common');

const { ValueError } = require('../../bosdyn-client/exceptions');

const bddf_pb = require('../../bosdyn/api/bddf_pb');

class BaseDataReader {
  constructor(infile = null, filename = null) {
    this._file = infile;
    this._filename = filename;
    if (!this._file) {
      if (!this._filename) {
        throw new ValueError('One of infile or filename must be specified');
      }
    }
    this._file = createReadStream(this._filename);
    this._file_descriptor = null;
    this._spec_index = null;
    this._index_offset = null;
    this._checksum = null;
    this._read_checksum = null;
    this._eof = false;
    this._file_index = null;
    this._read_header();
  }

  get filename() {
    return this._filename;
  }

  get file_descriptor() {
    return this._file_descriptor;
  }

  get version() {
    return this._file_descriptor.getVersion();
  }

  get annotations() {
    return this._file_descriptor.getAnnotationsMap();
  }

  get file_index() {
    return this._file_index;
  }

  get checksum() {
    return this._checksum;
  }

  get read_checksum() {
    return this._read_checksum;
  }

  _computed_checksum() {
    return null;
  }

  series_spec_to_index(series_spec) {
    return this._spec_index.index(series_spec);
  }

  _close() {
    if (!this._file) return;
    this._file.end();
    this._file = null;
  }

  _read(nbytes) {
    console.assert(nbytes);
    const block = this._file.read(nbytes);
    if (!block) throw new TypeError('Unexpected end of bddf file');
    return block;
  }

  _read_header() {
    const magic = this._read(MAGIC.length);
    if (magic !== MAGIC) throw new ParseError('Bad magic bytes at the start of the file.');
    this._file_descriptor = this._read_desc_block('file_descriptor');
    if (
      this._file_descriptor.getVersion().getMajorVersion() !== 1 ||
      this._file_descriptor.getVersion().getMinorVersion() !== 0 ||
      this._file_descriptor.getVersion().getPatchLevel() !== 0
    ) {
      const version = this._file_descriptor.getVersion();
      // eslint-disable-next-line
    throw new DataFormatError(`Unsupported file version: ${version.getMajorVersion()}.${version.getMinorVersion()}.${version.getPatchLevel()}`);
    }
    const checksum_type = this._file_descriptor.getChecksumType();
    if (checksum_type === bddf_pb.FileFormatDescriptor.CheckSumType.CHECKSUM_TYPE_UNKNOWN) {
      throw new DataFormatError('Unset checksum type in file descriptor');
    }
    if (checksum_type === bddf_pb.FileFormatDescriptor.CheckSumType.CHECKSUM_TYPE_NONE) {
      LOGGER.debug('No checksum in bddf stream');
    } else if (checksum_type !== bddf_pb.FileFormatDescriptor.CheckSumType.CHECKSUM_TYPE_SHA1) {
      throw new DataFormatError(`Unknown checksum type ${checksum_type}`);
    }
    if (this._file_descriptor.getChecksumNumBytes() !== SHA1_DIGEST_NBYTES) {
      throw new DataFormatError(
        `Unexpected checksum num_bytes (${this._file_descriptor.getChecksumNumBytes()} != ${SHA1_DIGEST_NBYTES}).`,
      );
    }
  }

  _read_proto(proto_type, nbytes) {
    const block = this._read(nbytes);
    const descriptor = new proto_type(block);
    return descriptor;
  }

  _read_data_block() {
    const [is_data, desc, data] = this._read_block();
    console.assert(is_data);
    return [desc, data];
  }

  _read_desc_block(descriptor_type_name = '') {
    const [is_data, desc, _data] = this._read_block();
    console.assert(!is_data);
    console.assert(!_data);
    if (
      desc.getDescriptortypeCase() !== bddf_pb.DescriptorBlock.DescriptortypeCase[descriptor_type_name.toUpperCase()]
    ) {
      throw new ParseError(
        `Expected DescriptorType ${descriptor_type_name.toUpperCase()} but got ${
          bddf_pb.DescriptorBlock.DescriptortypeCase[desc.getDescriptortypeCase()]
        }.`,
      );
    }
    return desc[camelCase(`get_${descriptor_type_name}`)]();
  }

  _read_block() {
    const [block_header] = struct.unpack('<Q', this._read(8));
    const block_size = block_header.low & BLOCK_HEADER_SIZE_MASK;
    const block_type = (block_header.low & BLOCK_HEADER_TYPE_MASK) >> 56;
    if (block_type === END_BLOCK_TYPE) {
      this._index_offset = struct.unpack('<Q', this._read(8))[0];
      this._read_checksum = this._computed_checksum();
      this._checksum = this._read(this._file_descriptor.getChecksumNumBytes());
      this._eof = true;
      if (
        this._file_descriptor.getChecksumType() === bddf_pb.FileFormatDescriptor.CheckSumType.CHECKSUM_TYPE_SHA1 &&
        this._read_checksum !== null &&
        this._checksum !== this._read_checksum
      ) {
        throw new ChecksumError(
          `File checksum 0x${this._checksum
            .map(x => Number(x).toString(16))
            .join('')} does not match computed value 0x${this._read_checksum
            .map(x => Number(x).toString(16))
            .join('')}`,
        );
      }
      throw new TypeError('Normal end of bddf file');
    }
    const is_data_block = block_type === DATA_BLOCK_TYPE;
    if (!is_data_block) {
      if (block_type !== DESCRIPTOR_BLOCK_TYPE) {
        throw new ParseError(`Expected block_type ${DESCRIPTOR_BLOCK_TYPE} but got ${block_type}.`);
      }
      return [is_data_block, this._read_proto(bddf_pb.DescriptorBlock, block_size), null];
    }

    const [desc_size] = struct.unpack('<I', this._read(4));
    if (desc_size > block_size) {
      throw new ParseError(`Data block descriptor size ${desc_size} > block size ${block_size}.`);
    }
    const data_desc = this._read_proto(bddf_pb.DataDescriptor, desc_size);
    const data_size = block_size - desc_size;
    const data = this._read(data_size);
    return [is_data_block, data_desc, data];
  }
}

module.exports = {
  BaseDataReader,
};

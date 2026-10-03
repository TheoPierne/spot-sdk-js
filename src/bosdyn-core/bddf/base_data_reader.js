/**
 * @file BaseDataReader is a shared parent class for DataReader and StreamedDataReader.
 */

'use strict';

const assert = require('node:assert');
const { Buffer } = require('node:buffer');
const { open } = require('node:fs/promises');

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
  EOFError,
  MAGIC,
  LOGGER,
  ParseError,
  SHA1_DIGEST_NBYTES,
} = require('./common');

const {
  DataDescriptor,
  DescriptorBlock,
  FileFormatDescriptor,
  FileFormatVersion,
  FileIndex,
  SeriesBlockIndex,
  SeriesDescriptor,
} = require('../../bosdyn/api/bddf_pb');
const { ValueError } = require('../../bosdyn-client/exceptions');

/**
 * Shared parent class for DataReader and StreamedDataReader.
 */
class BaseDataReader {
  /**
   * @param {import('node:fs/promises').FileHandle|null} [fileHandle]
   * @param {string|null} [filename] path of input file, if applicable.
   */
  constructor(fileHandle = null, filename = null) {
    /** @type {import('node:fs/promises').FileHandle|null} */
    this._fh = fileHandle;
    /** @type {string|null} */
    this._filename = filename;
    /** @type {number} */
    this._pos = 0;

    /**
     * @type {FileFormatDescriptor|null}
     */
    this._fileDescriptor = null;
    this._specIndex = null;
    this._indexOffset = null;
    /** @type {Buffer|null} */
    this._checksum = null;
    /** @type {Buffer|null} */
    this._readChecksum = null;
    /** @type {boolean} */
    this._eof = false;
    /**
     * @type {FileIndex|null}
     */
    this._fileIndex = null;
  }

  /**
   * @template {new (...args: any[]) => any} T
   * @this {T}
   * @param {{ infile?: import('node:fs/promises').FileHandle|null, filename?: string|null }} options
   * @returns {Promise<InstanceType<T>>}
   */
  static async create({ infile = null, filename = null }) {
    let opened = false;
    if (!infile) {
      if (!filename) throw new ValueError('One of infile or filename must be specified');
      infile = await open(filename, 'r');
      opened = true;
    }

    /** @type {InstanceType<T>} */
    const reader = new this(infile, filename);
    // The file opened by the reader is closed if it cannot be read (it leaked: DEP0137).
    reader._ownsFile = opened;
    try {
      await reader._readHeader();
    } catch (error) {
      if (opened) await reader.close();
      throw error;
    }
    return reader;
  }

  /**
   * Return input file name, if specified, or null if not.
   * @type {string|null}
   */
  get filename() {
    return this._filename;
  }

  /**
   * Return the file descriptor from the start of the file/stream.
   * @type {FileFormatDescriptor|null}
   */
  get fileDescriptor() {
    return this._fileDescriptor;
  }

  /**
   * Return file version as a bosdyn.api.FileFormatVersion proto.
   * @type {FileFormatVersion}
   */
  get version() {
    return this._fileDescriptor.getVersion();
  }

  /**
   * Return Map{key -> value} for file annotations.
   * @type {Map<string, string>}
   */
  get annotations() {
    return this._fileDescriptor.getAnnotationsMap();
  }

  /**
   * Get the FileIndex proto used which describes how to access data in the file.
   * @type {FileIndex|null}
   */
  get fileIndex() {
    return this._fileIndex;
  }

  /**
   * 160-bit checksum read from the end of the file, or null if not yet read.
   * @type {Buffer|null}
   */
  get checksum() {
    return this._checksum;
  }

  /**
   * Override to compute checksum on reading, in stream-readers.
   * @type {Buffer|null}
   */
  get readChecksum() {
    return this._readChecksum;
  }

  /**
   * Override to compute checksum on reading, in stream-readers.
   * @returns {?Buffer}
   * @abstract
   */
  _computedChecksum() {
    return null;
  }

  /**
   * Given a series spec (object {key: value}), return the series index for that series.
   * @param {Object} seriesSpec
   * @returns {number}
   * @throws {ValueError} Throw ValueError if no such series exists.
   */
  seriesSpecToIndex(seriesSpec) {
    // The same keys and values, like the dict of Python (only the specs with a single key were found).
    const keys = Object.keys(seriesSpec);
    const index = this._specIndex.findIndex(
      spec =>
        Object.keys(spec).length === keys.length &&
        keys.every(key => Object.hasOwn(spec, key) && spec[key] === seriesSpec[key]),
    );

    if (index === -1) {
      throw new ValueError('seriesSpec not found in spec index');
    }

    return index;
  }

  /**
   * Close data reader file handler
   * @returns {Promise<void>}
   */
  async close() {
    if (!this._fh) return;
    await this._fh.close();
    this._fh = null;
  }

  /** Closes the reader at the end of `await using`, like the `with DataReader(...)` of Python. */
  async [Symbol.asyncDispose]() {
    await this.close();
  }

  /**
   * Read nbytes from file handler
   * @param {number} nbytes Number of bytes to read
   * @returns {Promise<Buffer>}
   * @throws {EOFError} The number of bytes read is not the number of bytes requested (it was a TypeError).
   * @throws {assert.AssertionError}
   */
  async _read(nbytes) {
    assert(nbytes);
    const buf = Buffer.allocUnsafe(nbytes);
    const { bytesRead } = await this._fh.read(buf, 0, nbytes, this._pos);
    if (bytesRead !== nbytes) throw new EOFError('Unexpected end of bddf file');
    this._pos += bytesRead;
    return buf;
  }

  /**
   * Read header of the file
   * @returns {Promise<void>}
   */
  async _readHeader() {
    const magic = await this._read(MAGIC.length);
    if (Buffer.compare(magic, MAGIC) !== 0) throw new ParseError('Bad magic bytes at the start of the file.');
    this._fileDescriptor = await this._readDescBlock('file_descriptor');
    if (
      this._fileDescriptor.getVersion().getMajorVersion() !== 1 ||
      this._fileDescriptor.getVersion().getMinorVersion() !== 0 ||
      this._fileDescriptor.getVersion().getPatchLevel() !== 0
    ) {
      const version = this._fileDescriptor.getVersion();
      // eslint-disable-next-line
    throw new DataFormatError(`Unsupported file version: ${version.getMajorVersion()}.${version.getMinorVersion()}.${version.getPatchLevel()}`);
    }
    const checksumType = this._fileDescriptor.getChecksumType();
    if (checksumType === FileFormatDescriptor.CheckSumType.CHECKSUM_TYPE_UNKNOWN) {
      throw new DataFormatError('Unset checksum type in file descriptor');
    }
    if (checksumType === FileFormatDescriptor.CheckSumType.CHECKSUM_TYPE_NONE) {
      LOGGER.debug('No checksum in bddf stream');
    } else if (checksumType !== FileFormatDescriptor.CheckSumType.CHECKSUM_TYPE_SHA1) {
      throw new DataFormatError(`Unknown checksum type ${checksumType}`);
    }
    if (this._fileDescriptor.getChecksumNumBytes() !== SHA1_DIGEST_NBYTES) {
      throw new DataFormatError(
        `Unexpected checksum num_bytes (${this._fileDescriptor.getChecksumNumBytes()} != ${SHA1_DIGEST_NBYTES}).`,
      );
    }
  }

  /**
   * Read a proto in the file
   * @template {typeof import('google-protobuf').Message} T
   * @param {T} protoType The proto to instantiate
   * @param {number} nbytes Number of bytes to read
   * @returns {Promise<InstanceType<T>>}
   */
  async _readProto(protoType, nbytes) {
    const block = await this._read(nbytes);
    return protoType.deserializeBinary(block);
  }

  /**
   * Read a data block
   * @returns {Promise<[DataDescriptor, Buffer]>}
   * @throws {assert.AssertionError}
   */
  async _readDataBlock() {
    const [isData, desc, data] = await this._readBlock();
    assert(isData);
    return [desc, data];
  }

  /**
   * Read a descriptor block
   * @param {string} descriptorTypeName
   * @returns {Promise<FileFormatDescriptor|SeriesDescriptor|SeriesBlockIndex|FileIndex>}
   */
  async _readDescBlock(descriptorTypeName = '') {
    const [isData, desc, data] = await this._readBlock();
    assert(!isData);
    assert(!data);
    if (desc.getDescriptortypeCase() !== DescriptorBlock.DescriptortypeCase[descriptorTypeName.toUpperCase()]) {
      throw new ParseError(
        `Expected DescriptorType ${descriptorTypeName.toUpperCase()} but got ${
          DescriptorBlock.DescriptortypeCase[desc.getDescriptortypeCase()]
        }.`,
      );
    }
    return desc[camelCase(`get_${descriptorTypeName}`)]();
  }

  /**
   * Read a block
   * @returns {Promise<[boolean, DataDescriptor|DescriptorBlock, Buffer]>}
   */
  async _readBlock() {
    const [blockHeader] = struct.unpack('<Q', await this._read(8));

    const blockSize = blockHeader.and(BLOCK_HEADER_SIZE_MASK);
    const blockType = blockHeader.and(BLOCK_HEADER_TYPE_MASK).shiftRight(56).toNumber();

    if (blockType === END_BLOCK_TYPE) {
      this._indexOffset = struct.unpack('<Q', await this._read(8))[0];
      this._readChecksum = this._computedChecksum();
      this._checksum = await this._read(this._fileDescriptor.getChecksumNumBytes());
      this._eof = true;
      if (
        this._fileDescriptor.getChecksumType() === FileFormatDescriptor.CheckSumType.CHECKSUM_TYPE_SHA1 &&
        this._readChecksum !== null &&
        // The bytes are compared (!== compared the Buffer objects: a ChecksumError for every file).
        !this._checksum.equals(this._readChecksum)
      ) {
        const [expected, computed] = [this._checksum, this._readChecksum].map(sum => sum.toString('hex').toUpperCase());
        throw new ChecksumError(`File checksum 0x${expected} does not match computed value 0x${computed}`);
      }
      // Like the EOFError of Python.
      throw new EOFError('Normal end of bddf file');
    }

    const isDataBlock = blockType === DATA_BLOCK_TYPE;

    if (!isDataBlock) {
      if (blockType !== DESCRIPTOR_BLOCK_TYPE) {
        throw new ParseError(`Expected block_type ${DESCRIPTOR_BLOCK_TYPE} but got ${blockType}.`);
      }
      return [isDataBlock, await this._readProto(DescriptorBlock, blockSize.toNumber()), null];
    }

    const [descSize] = struct.unpack('<I', await this._read(4));

    if (descSize > blockSize) {
      throw new ParseError(`Data block descriptor size ${descSize} > block size ${blockSize}.`);
    }

    const dataDesc = await this._readProto(DataDescriptor, descSize);
    const dataSize = blockSize - descSize;
    const data = await this._read(dataSize);
    return [isDataBlock, dataDesc, data];
  }
}

module.exports = {
  BaseDataReader,
};

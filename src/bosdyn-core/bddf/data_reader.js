/**
 * @file Class for reading data from a file-like object which is seekable.
 */

'use strict';

const struct = require('python-struct');

const { BaseDataReader } = require('./base_data_reader');
const { END_MAGIC, INDEX_OFFSET_OFFSET, MAGIC, ParseError } = require('./common');

const { timestampToNsecBigInt } = require('../util');

/**
 * @typedef {import('../../bosdyn/api/bddf_pb').DataDescriptor} DataDescriptor
 */

/**
 * @typedef {import('../../bosdyn/api/bddf_pb').SeriesBlockIndex} SeriesBlockIndex
 */

/**
 * @typedef {import('../../bosdyn/api/bddf_pb').SeriesDescriptor} SeriesDescriptor
 */

/**
 * Class for reading data from a file-like object which is seekable.
 * @extends {BaseDataReader}
 */
class DataReader extends BaseDataReader {
  constructor(infile = null, filename = null) {
    super(infile, filename);
    /** @type {Record<number, SeriesDescriptor>} */
    this._seriesIndexToDescriptor = {};
    /** @type {Record<number, SeriesBlockIndex>} */
    this._seriesIndexToBlockIndex = {};
    /**
     * The end of the last read: the reads at a position wait for each other (concurrent reads moved the position of
     * each other).
     * @type {Promise<void>}
     */
    this._lock = Promise.resolve();
  }

  /**
   * Create a DataReader and load the file index.
   *
   * @template {new (...args: any[]) => any} T
   * @this {T}
   * @param {{ infile?: import('node:fs/promises').FileHandle|null, filename?: string|null }} [params]
   * @returns {Promise<InstanceType<T>>}
   */
  static async create({ infile = null, filename = null }) {
    /** @type {InstanceType<T>} */
    const reader = await super.create.call(this, { infile, filename });
    try {
      await reader._readIndex();
    } catch (error) {
      if (reader._ownsFile) await reader.close();
      throw error;
    }
    return reader;
  }

  /**
   * Return SeriesDescriptor for given series index, loading it if necessary.
   * @param {number} seriesIndex
   * @returns {Promise<SeriesDescriptor>}
   */
  async seriesDescriptor(seriesIndex) {
    if (seriesIndex in this._seriesIndexToDescriptor) return this._seriesIndexToDescriptor[seriesIndex];

    const seriesBlockIndex = await this.seriesBlockIndex(seriesIndex);
    /** @type {SeriesDescriptor} */
    const desc = await this._readDescBlockAt('series_descriptor', seriesBlockIndex.getDescriptorFileOffset());
    this._seriesIndexToDescriptor[seriesIndex] = desc;
    return desc;
  }

  /**
   * Returns the number of data blocks for a given series in the file.
   *
   * @param {number} seriesIndex
   * @returns {Promise<number>}
   */
  async numDataBlocks(seriesIndex) {
    return (await this.seriesBlockIndex(seriesIndex)).getBlockEntriesList().length;
  }

  /**
   * Returns the total number of bytes for data in a given series in the file.
   *
   * @param {number} seriesIndex
   * @returns {Promise<number>}
   */
  async totalBytes(seriesIndex) {
    return (await this.seriesBlockIndex(seriesIndex)).getTotalBytes();
  }

  /**
   * Retrieves a message and related information from the file.
   * @param {number} seriesIndex Selecting from which series to read the message.
   * @param {number} indexInSeries The index number of the message within the channel.
   * @returns {Promise<[DataDescriptor, bigint, Buffer]>} The nanoseconds since the epoch are exact, like the integers
   * of Python (a number was rounded to 256 ns).
   */
  async read(seriesIndex, indexInSeries) {
    const seriesBlockIndex = await this.seriesBlockIndex(seriesIndex);
    const msgIdx = seriesBlockIndex.getBlockEntriesList()[indexInSeries];
    const [desc, data] = await this._readDataBlockAt(msgIdx.getFileOffset());
    return [desc, timestampToNsecBigInt(msgIdx.getTimestamp()), data];
  }

  /**
   * Returns the SeriesBlockIndexes for the given series_index, loading it as needed.
   * @param {number} seriesIndex
   * @returns {Promise<SeriesBlockIndex>}
   */
  async seriesBlockIndex(seriesIndex) {
    if (seriesIndex in this._seriesIndexToBlockIndex) return this._seriesIndexToBlockIndex[seriesIndex];

    const offset = this.fileIndex.getSeriesBlockIndexOffsetsList()[seriesIndex];
    /** @type {SeriesBlockIndex} */
    const blockIndex = await this._readDescBlockAt('series_block_index', offset);
    this._seriesIndexToBlockIndex[seriesIndex] = blockIndex;
    return blockIndex;
  }

  /**
   * Read data at index
   * @returns {Promise<void>}
   * @private
   */
  async _readIndex() {
    const { size } = await this._fh.stat();
    const endMagicPos = size - END_MAGIC.length;

    this._seekTo(endMagicPos);

    const endMagic = await this._read(END_MAGIC.length);

    if (!endMagic.equals(END_MAGIC)) {
      throw new ParseError('Bad magic bytes at the end of the file.');
    }

    const indexMetaPos = size - INDEX_OFFSET_OFFSET;
    this._seekTo(indexMetaPos);

    const [indexOffset, checksumU64] = struct.unpack('<QQ', await this._read(16));

    this._indexOffset = indexOffset.toNumber();
    this._checksum = checksumU64;

    if (this._indexOffset < MAGIC.length) {
      throw new ParseError(`Invalid offset to index: ${this._indexOffset})`);
    }

    this._fileIndex = await this._readDescBlockAt('file_index', this._indexOffset);

    // An object for each spec, like the dict of Python.
    this._specIndex = this._fileIndex
      .getSeriesIdentifiersList()
      .map(desc => Object.fromEntries(desc.getSpecMap().getEntryList()));
  }

  /**
   * Move pos cursor
   * @param {number} location
   * @returns {void}
   * @private
   */
  _seekTo(location) {
    if (location < MAGIC.length) {
      throw new ParseError(`Invalid offset for block: ${location})`);
    }
    this._pos = location;
  }

  /**
   * Read data block at position
   * @param {number} location
   * @returns {Promise<[DataDescriptor, Buffer]>}
   * @private
   */
  _readDataBlockAt(location) {
    return this._locked(() => {
      this._seekTo(location);
      return this._readDataBlock();
    });
  }

  /**
   * Read descriptor block at position
   * @param {string} descriptorTypeName
   * @param {number} location
   * @private
   */
  _readDescBlockAt(descriptorTypeName, location) {
    return this._locked(() => {
      this._seekTo(location);
      return this._readDescBlock(descriptorTypeName);
    });
  }

  /**
   * Run an operation after the previous one (they share the position in the file).
   * @template T
   * @param {function(): Promise<T>} operation
   * @returns {Promise<T>}
   * @private
   */
  _locked(operation) {
    const result = this._lock.then(operation);
    this._lock = result.then(
      () => undefined,
      () => undefined,
    );
    return result;
  }
}

module.exports = {
  DataReader,
};

/**
 * @file Data reader which reads the file format from a stream, without seeking.
 */

'use strict';

const { Buffer } = require('node:buffer');
const crypto = require('node:crypto');

const { BaseDataReader } = require('./base_data_reader');
const { EOFError, ParseError } = require('./common');
const { FileIndexer } = require('./file_indexer');
const { timestampToNsecBigInt } = require('../util');

/**
 * The bytes of a stream (a Readable, or any async iterable of chunks), read in order.
 */
class _StreamSource {
  constructor(stream) {
    this._iterator = stream[Symbol.asyncIterator]();
    this._buffer = Buffer.alloc(0);
    this._ended = false;
  }

  /**
   * @param {number} nbytes
   * @returns {Promise<Buffer>} Less bytes at the end of the stream.
   */
  async read(nbytes) {
    const chunks = [this._buffer];
    let length = this._buffer.length;
    while (length < nbytes && !this._ended) {
      const { value, done } = await this._iterator.next();
      if (done) {
        this._ended = true;
      } else {
        const chunk = Buffer.from(value);
        chunks.push(chunk);
        length += chunk.length;
      }
    }
    const all = Buffer.concat(chunks, length);
    this._buffer = all.subarray(Math.min(nbytes, length));
    return all.subarray(0, Math.min(nbytes, length));
  }

  async close() {
    // Destroys a Readable.
    await this._iterator.return?.();
  }
}

/**
 * Data reader which reads the file format from a stream, without seeking: a FileHandle, a Readable (e.g. the body of
 * an HTTP response) or an async iterable of chunks (the reads were at positions of a FileHandle only).
 * @extends {BaseDataReader}
 */
class StreamDataReader extends BaseDataReader {
  constructor(outfile) {
    // A FileHandle is read at its positions.
    const isFileHandle = typeof outfile?.fd === 'number' && typeof outfile?.read === 'function';
    super(outfile);
    this._source = !isFileHandle && outfile?.[Symbol.asyncIterator] ? new _StreamSource(outfile) : null;
    this._hasher = crypto.createHash('sha1');
    this._indexer = new FileIndexer();
    this._seriesIndexToBlockIndex = {};
  }

  async _read(nbytes) {
    let block;
    if (this._source) {
      block = await this._source.read(nbytes);
      if (block.length !== nbytes) throw new EOFError('Unexpected end of bddf file');
      this._pos += nbytes;
    } else {
      block = await super._read(nbytes);
    }
    this._hasher.update(block);
    return block;
  }

  async close() {
    if (this._source) {
      await this._source.close();
      this._source = null;
      this._fh = null;
      return;
    }
    await super.close();
  }

  /**
   * 64-bit checksum read from the end of the file, or null if not yet read.
   */
  get readChecksum() {
    return this._readChecksum;
  }

  /**
   * Return the file index as parsed from the stream.
   */
  get streamFileIndex() {
    return this._indexer.fileIndex;
  }

  _computedChecksum() {
    // A copy: digest() finalizes the hash, and the checksum read after it updates the hash
    // (ERR_CRYPTO_HASH_FINALIZED at the end of every valid file).
    return this._hasher.copy().digest();
  }

  /**
   * Return SeriesDescriptor for given series index.
   *
   * Returns KeyError if no such series exists.
   */
  seriesDescriptor(seriesIndex) {
    return this._indexer.seriesDescriptor(seriesIndex);
  }

  /**
   * Read and return next data block.
   */
  async readDataBlock() {
    while (true) {
      const [isData, desc, data] = await this.readNextBlock();
      if (!isData) continue;
      return [desc, this.seriesDescriptor(desc.getSeriesIndex()), data];
    }
  }

  /**
   * Read and return next block.
   */
  async readNextBlock() {
    const fileOffset = this._pos;
    let isData, desc, data;
    try {
      [isData, desc, data] = await this._readBlock();
    } catch (e) {
      this._eof = true;
      throw e;
    }
    if (isData) {
      // The offset, then the size (Python passes them swapped: the size as the offset of the block).
      this._indexer.indexDataBlock(
        desc.getSeriesIndex(),
        timestampToNsecBigInt(desc.getTimestamp()),
        fileOffset,
        data.length,
        desc.getAdditionalIndexesList(),
      );
    } else if (desc.hasFileIndex()) {
      this._fileIndex = desc.getFileIndex();
    } else if (desc.hasSeriesDescriptor()) {
      const seriesDescriptor = desc.getSeriesDescriptor();
      this._indexer.addSeriesDescriptor(seriesDescriptor, fileOffset);
    } else if (desc.hasSeriesBlockIndex()) {
      const seriesBlockIndex = desc.getSeriesBlockIndex();
      this._seriesIndexToBlockIndex[seriesBlockIndex.getSeriesIndex()] = seriesBlockIndex;
    } else {
      throw new ParseError(`Unknown DescriptorType ${desc.getDescriptortypeCase()}`);
    }
    return [isData, desc, data];
  }

  /**
   * Returns the current list of SeriesBlockIndexes: seriesIndex -> SeriesBlockIndex.
   */
  get seriesBlockIndexes() {
    return this._indexer.seriesBlockIndexes;
  }

  /**
   * Returns the SeriesBlockIndexes for the given seriesIndex.
   * @param {number} seriesIndex
   */
  seriesBlockIndex(seriesIndex) {
    return this._indexer.seriesBlockIndexes[seriesIndex];
  }

  /**
   * Returns true if all blocks in the file have been read.
   */
  get eof() {
    return this._eof;
  }
}

module.exports = {
  StreamDataReader,
};

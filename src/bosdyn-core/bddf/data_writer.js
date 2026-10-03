/**
 * @file DataWriter is a class for writing data to a file.
 */

'use strict';

const { Buffer } = require('node:buffer');

const { BlockWriter } = require('./block_writer');
const { FileIndexer } = require('./file_indexer');

const { MessageTypeDescriptor, PodTypeDescriptor } = require('../../bosdyn/api/bddf_pb');

/**
 * @typedef {import('../../bosdyn/api/bddf_pb').FileIndex} FileIndex
 */

/**
 * @typedef {import('../../bosdyn/api/bddf_pb').PodTypeEnum} PodTypeEnum
 * @typedef {import('./common').DataFormatError} DataFormatError
 */

/**
 * Class for writing data to a file.
 */
class DataWriter {
  constructor(outfile, annotations = null) {
    /**
     * @type {BlockWriter}
     */
    this._writer = new BlockWriter(outfile);

    /**
     * @type {FileIndexer}
     */
    this._indexer = new FileIndexer();

    /**
     * @type {?Object}
     */
    this._annotations = annotations;

    /**
     * @type {Function[]}
     */
    this._onClose = [];

    this._writer.writeHeader(annotations);
  }

  /**
   * Get the FileIndex proto used which describes how to access data in the file.
   * @type {FileIndex}
   */
  get fileIndex() {
    return this._indexer.fileIndex;
  }

  /**
   * Add a new series for storing message data. Message data is variable-sized binary data.
   * @param {string} seriesType
   * @param {Object} seriesSpec
   * @param {string} contentType
   * @param {string} typeName
   * @param {boolean} [isMetadata]
   * @param {?Object} [annotations]
   * @param {?string[]} additionalIndexNames
   * @returns {number}
   */
  addMessageSeries(
    seriesType,
    seriesSpec,
    contentType,
    typeName,
    isMetadata = false,
    annotations = null,
    additionalIndexNames = null,
  ) {
    const messageType = new MessageTypeDescriptor()
      .setContentType(contentType)
      .setTypeName(typeName)
      .setIsMetadata(isMetadata);
    return this.addSeries(seriesType, seriesSpec, messageType, null, annotations, additionalIndexNames);
  }

  /**
   * Add a new series for storing data POD data.
   * @param {string} seriesType
   * @param {Object} seriesSpec
   * @param {PodTypeEnum} typeEnum
   * @param {?number[]} dimension
   * @param {?Object} annotations
   * @returns {number}
   */
  addPodSeries(seriesType, seriesSpec, typeEnum, dimension = null, annotations = null) {
    // No dimension by default ([null] failed at the serialization).
    const dimensionArray = dimension === null || dimension === undefined ? [] : [].concat(dimension);
    const podType = new PodTypeDescriptor().setPodType(typeEnum).setDimensionList(dimensionArray);
    return this.addSeries(seriesType, seriesSpec, null, podType, annotations);
  }

  /**
   * Register a new series for messages.
   * @param {string} seriesType
   * @param {Object} seriesSpec
   * @param {?MessageTypeDescriptor} messageType
   * @param {?PodTypeDescriptor} podType
   * @param {?Object} annotations
   * @param {?string[]} additionalIndexNames
   * @returns {number}
   */
  addSeries(
    seriesType,
    seriesSpec,
    messageType = null,
    podType = null,
    annotations = null,
    additionalIndexNames = null,
  ) {
    return this._indexer.addSeries(
      seriesType,
      seriesSpec,
      messageType,
      podType,
      annotations,
      additionalIndexNames,
      this._writer,
    );
  }

  /**
   * Store binary data into the file, under a previously-defined channel.
   * @param {number} seriesIndex
   * @param {bigint|number|string} timestampNsec Nanoseconds since the epoch: exact as a BigInt, rounded to 256 ns as a
   * number.
   * @param {Buffer} data
   * @param {?Array<bigint|number|string>} additionalIndexes The values of the additional indexes of the series
   * (int64, often timestamps in nanoseconds): exact as BigInts or strings, rounded as numbers above 2^53.
   * @returns {void}
   * @throws {DataFormatError} The additional indexes are not valid for this series.
   */
  writeData(seriesIndex, timestampNsec, data, additionalIndexes = null) {
    // The UTF-8 bytes of a string: its length in UTF-16 units was indexed, and the file corrupted.
    const bytes = typeof data === 'string' ? Buffer.from(data, 'utf8') : data;
    // The descriptor checks the timestamp and the additional indexes before the block is indexed: in Python, an
    // invalid value was indexed first, and the index of the file was wrong (and a BigInt made close() throw).
    const dataDescriptor = this._indexer.makeDataDescriptor(seriesIndex, timestampNsec, additionalIndexes);
    this._indexer.indexDataBlock(
      seriesIndex,
      timestampNsec,
      this._writer.bytesWritten(),
      bytes.length,
      dataDescriptor.getAdditionalIndexesList(),
    );
    this._writer.writeDataBlock(dataDescriptor, bytes);
  }

  /**
   * Register a function to be called when file is closed, before index is written.
   * @param {Function} thunk
   * @returns {void}
   */
  runOnClose(thunk) {
    this._onClose.push(thunk);
  }

  /**
   * Wait until the file has written its buffered data: see BlockWriter.drain().
   * @returns {Promise<void>}
   */
  drain() {
    return this._writer.drain();
  }

  /**
   * Close data writer: the index is written once (two concurrent close() wrote it twice, after the end).
   * @returns {Promise<void>}
   */
  close() {
    this._closing ??= this._close();
    return this._closing;
  }

  /** Closes the writer at the end of `await using`, like the `with DataWriter(...)` of Python. */
  async [Symbol.asyncDispose]() {
    await this.close();
  }

  async _close() {
    if (this._writer.closed) return;
    for (const thunk of this._onClose) {
      thunk();
    }
    this._indexer.writeIndex(this._writer);
    await this._writer.close();
  }
}

module.exports = {
  DataWriter,
};

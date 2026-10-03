/**
 * @file A FileIndexer is an object which keeps an index of series and blocks within series
 */

'use strict';

const assert = require('node:assert');
const { Buffer } = require('node:buffer');
const crypto = require('node:crypto');

const { AddSeriesError, DataFormatError, SeriesNotUniqueError } = require('./common');

const {
  DataDescriptor,
  DescriptorBlock,
  FileIndex,
  SeriesBlockIndex,
  SeriesDescriptor,
  SeriesIdentifier,
} = require('../../bosdyn/api/bddf_pb');
const { nsecToTimestamp, toInt64String } = require('../util');

/**
 * @param {crypto.Hash} hasher
 * @returns {bigint}
 * @private
 */
function _hasherToUint64(hasher) {
  return hasher.digest().readBigUInt64BE(0);
}

/** Compares strings by code point, like sorted() in Python. */
function _compareCodePoints(a, b) {
  const [codesA, codesB] = [a, b].map(text => Array.from(text, char => char.codePointAt(0)));
  for (let i = 0; i < Math.min(codesA.length, codesB.length); i++) {
    if (codesA[i] !== codesB[i]) return codesA[i] - codesB[i];
  }
  return codesA.length - codesB.length;
}

/**
 * The spec of a SeriesIdentifier as an object.
 * @param {SeriesIdentifier} seriesIdentifier
 * @returns {Object<string, string>}
 */
function _specOf(seriesIdentifier) {
  return Object.fromEntries(seriesIdentifier.getSpecMap().getEntryList());
}

/**
 * @typedef {import('./block_writer').BlockWriter} BlockWriter
 */

/**
 * @typedef {import('../../bosdyn/api/bddf_pb').MessageTypeDescriptor} MessageTypeDescriptor
 */

/**
 * @typedef {import('../../bosdyn/api/bddf_pb').PodTypeDescriptor} PodTypeDescriptor
 */

/**
 * An object which keeps an index of series and blocks within series.
 * It can write a block index at the end of a data file.
 */
class FileIndexer {
  constructor() {
    /**
     * @type {DescriptorBlock}
     */
    this._descriptorIndex = new DescriptorBlock().setFileIndex(new FileIndex());

    /**
     * @type {SeriesDescriptor[]}
     */
    this._seriesDescriptors = [];

    /**
     * @type {SeriesBlockIndex[]}
     */
    this._seriesBlockIndexes = [];
  }

  /**
   * Get the FileIndex proto used which describes how to access data in the file.
   * @type {FileIndex}
   */
  get fileIndex() {
    return this._descriptorIndex.getFileIndex();
  }

  /**
   * Get the Descriptor proto containing the FileIndex.
   * @type {DescriptorBlock}
   */
  get descriptorIndex() {
    return this._descriptorIndex;
  }

  /**
   * Returns the current array of SeriesBlockIndexes: seriesIndex -> SeriesBlockIndex.
   * @type {SeriesBlockIndex[]}
   */
  get seriesBlockIndexes() {
    return this._seriesBlockIndexes;
  }

  /**
   * Return SeriesDescriptor for given series index
   * @param {number} seriesIndex
   * @returns {SeriesDescriptor}
   */
  seriesDescriptor(seriesIndex) {
    return this._seriesDescriptors[seriesIndex];
  }

  /**
   * Given a SeriesIdentifier, return a 64-bit hash.
   * @param {SeriesIdentifier} seriesIdentifier
   * @returns {string}
   * @static
   */
  static seriesIdentifierToHash(seriesIdentifier) {
    const hasher = crypto.createHash('sha1');
    hasher.update(Buffer.from(seriesIdentifier.getSeriesType(), 'utf-8'));
    const spec = _specOf(seriesIdentifier);
    for (const key of Object.keys(spec).sort(_compareCodePoints)) {
      hasher.update(Buffer.from(key, 'utf-8'));
      hasher.update(Buffer.from(spec[key], 'utf-8'));
    }
    // An uint64 string ([jstype = JS_STRING] for identifier_hash and series_identifier_hashes, see build.js).
    return _hasherToUint64(hasher).toString();
  }

  /**
   * Add the given series_descriptor to the index, with the given file offset.
   * @param {SeriesDescriptor} seriesDescriptor SeriesDescriptor to add to the index
   * @param {number} seriesBlockFileOffset Location in file where SeriesDescriptor will be written,
   * or was read from.
   */
  addSeriesDescriptor(seriesDescriptor, seriesBlockFileOffset) {
    assert(seriesDescriptor.getSeriesIndex() === this._seriesDescriptors.length);
    this.fileIndex.addSeriesIdentifiers(seriesDescriptor.getSeriesIdentifier());
    this.fileIndex.addSeriesIdentifierHashes(seriesDescriptor.getIdentifierHash());
    this._seriesDescriptors.push(seriesDescriptor);
    const seriesBlockIndex = new SeriesBlockIndex()
      .setSeriesIndex(seriesDescriptor.getSeriesIndex())
      .setDescriptorFileOffset(seriesBlockFileOffset);
    this._seriesBlockIndexes.push(seriesBlockIndex);
  }

  /**
   * Register a new series for messages for a DataWriter.
   * @param {string} seriesType
   * @param {Object} seriesSpec
   * @param {MessageTypeDescriptor} messageType
   * @param {PodTypeDescriptor} podType
   * @param {Object} annotations
   * @param {string[]} additionalIndexNames
   * @param {BlockWriter} writer
   * @returns {number}
   */
  addSeries(seriesType, seriesSpec, messageType, podType, annotations, additionalIndexNames, writer) {
    const seriesIndex = this._seriesDescriptors.length;

    const seriesIdentifier = new SeriesIdentifier().setSeriesType(seriesType);

    for (const key of Object.keys(seriesSpec)) {
      seriesIdentifier.getSpecMap().set(key, seriesSpec[key]);
    }

    const series = new SeriesDescriptor()
      .setSeriesIndex(seriesIndex)
      .setSeriesIdentifier(seriesIdentifier)
      .setIdentifierHash(FileIndexer.seriesIdentifierToHash(seriesIdentifier));

    // The same keys and values, like the specs of Python (two jspb.Map were compared by reference).
    const spec = _specOf(seriesIdentifier);
    for (const prevSeriesIdentifier of this.fileIndex.getSeriesIdentifiersList()) {
      const prevSpec = _specOf(prevSeriesIdentifier);
      const keys = Object.keys(spec);
      if (keys.length === Object.keys(prevSpec).length && keys.every(key => prevSpec[key] === spec[key])) {
        throw new SeriesNotUniqueError(`Spec ${JSON.stringify(spec)} is not unique within the data file`);
      }
    }

    if (messageType) {
      if (podType) {
        throw new AddSeriesError(`Specified both messageType (${messageType}) and podType (${podType})`);
      }
      series.setMessageType(messageType);
    } else {
      if (!podType) {
        throw new AddSeriesError('Specified neither messageType nor podType');
      }
      series.setPodType(podType);
    }
    if (annotations) {
      for (const key of Object.keys(annotations)) {
        series.getAnnotationsMap().set(key, annotations[key]);
      }
    }
    if (additionalIndexNames) {
      for (const name of additionalIndexNames) {
        series.addAdditionalIndexNames(name);
      }
    }

    const descriptor = new DescriptorBlock().setSeriesDescriptor(series);
    const seriesBlockFileOffset = writer.bytesWritten();
    writer.writeDescriptorBlock(descriptor);
    this.addSeriesDescriptor(series, seriesBlockFileOffset);
    return seriesIndex;
  }

  /**
   * Add an entry to the data block index of the series identified by seriesIndex.
   * @param {number} seriesIndex
   * @param {bigint|number|string} timestampNsec Exact as a BigInt.
   * @param {number} fileOffset
   * @param {number} nbytes
   * @param {?string[]} additionalIndexes The decimal strings of the int64 values (see makeDataDescriptor()).
   * @returns {void}
   */
  indexDataBlock(seriesIndex, timestampNsec, fileOffset, nbytes, additionalIndexes) {
    const seriesBlockIndex = this._seriesBlockIndexes[seriesIndex];
    const blockEntry = seriesBlockIndex.addBlockEntries(new SeriesBlockIndex.BlockEntry().setFileOffset(fileOffset));
    blockEntry.setTimestamp(nsecToTimestamp(timestampNsec));
    seriesBlockIndex.setTotalBytes(seriesBlockIndex.getTotalBytes() + nbytes);
    if (additionalIndexes) {
      for (const idxVal of additionalIndexes) {
        blockEntry.addAdditionalIndexes(idxVal);
      }
    }
  }

  /**
   * Return DataDescriptor for writing a data block.
   * @param {number} seriesIndex
   * @param {bigint|number|string} timestampNsec Exact as a BigInt.
   * @param {?Array<bigint|number|string>} additionalIndexes The int64 values of the additional indexes of the series,
   * exact as BigInts or strings (the descriptor holds their decimal strings, like the other 64 bits fields).
   * @returns {DataDescriptor}
   * @throws {DataFormatError} The number or a value of the additional indexes is not valid for the series.
   */
  makeDataDescriptor(seriesIndex, timestampNsec, additionalIndexes) {
    const seriesDescriptor = this._seriesDescriptors[seriesIndex];
    const dataDescriptor = new DataDescriptor().setSeriesIndex(seriesIndex);
    dataDescriptor.setTimestamp(nsecToTimestamp(timestampNsec));
    additionalIndexes = additionalIndexes || [];
    if (additionalIndexes.length !== seriesDescriptor.getAdditionalIndexNamesList().length) {
      const needed = seriesDescriptor.getAdditionalIndexNamesList().length;
      const provided = additionalIndexes.length;
      throw new DataFormatError(
        `Series ${seriesDescriptor.getSeriesIndex()} needs ${needed} additional indexes, but ${provided} provided.`,
      );
    }
    for (const idxVal of additionalIndexes) {
      let value;
      try {
        value = toInt64String(idxVal, true);
      } catch (err) {
        throw new DataFormatError(`Additional index ${idxVal} is not an int64 (${err.message})`);
      }
      dataDescriptor.addAdditionalIndexes(value);
    }
    return dataDescriptor;
  }

  /**
   * Write all the indexes of the data file, and the file end.
   * @param {BlockWriter} blockWriter
   */
  writeIndex(blockWriter) {
    for (const blockIndex of this.seriesBlockIndexes) {
      this.fileIndex.addSeriesBlockIndexOffsets(blockWriter.bytesWritten());
      const block = new DescriptorBlock().setSeriesBlockIndex(blockIndex);
      blockWriter.writeDescriptorBlock(block);
    }
    const indexOffset = blockWriter.bytesWritten();
    blockWriter.writeDescriptorBlock(this.descriptorIndex);
    blockWriter.writeFileEnd(indexOffset);
  }
}

module.exports = {
  FileIndexer,
};

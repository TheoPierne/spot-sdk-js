/**
 * @file Assists with writing POD data values into a series, within a DataWriter.
 */

'use strict';

const { Buffer } = require('node:buffer');

const { MessageChannel } = require('./bosdyn');
const { DataFormatError, POD_TYPE_TO_NUM_BYTES, packPodValues } = require('./common');

/**
 * A class to assist with writing POD data values into a series, within a DataWriter.
 */
class PodSeriesWriter {
  constructor(
    dataWriter,
    seriesType,
    seriesSpec,
    podType,
    dimensions = null,
    annotations = null,
    dataBlockSize = 2048,
  ) {
    /**
     * @type {import('./data_writer').DataWriter}
     */
    this._dataWriter = dataWriter;
    this._seriesType = seriesType;
    this._seriesSpec = seriesSpec;
    this._podType = podType;
    this._dimensions = dimensions || [];
    this._seriesIndex = this._dataWriter.addPodSeries(
      this.seriesType,
      this.seriesSpec,
      this._podType,
      this._dimensions,
      annotations,
    );
    this._dataBlockSize = dataBlockSize;
    this._numValuesPerSample = 1;
    for (const dim of this._dimensions) {
      this._numValuesPerSample *= dim;
    }
    this._bytesPerSample = POD_TYPE_TO_NUM_BYTES[podType] * this._numValuesPerSample;
    this._block = null;
    this._timestampNsec = null;
    this._dataWriter.runOnClose(this.finishBlock.bind(this));
  }

  /**
   * Add sample to data block, and write block if block is full.
   * @param {bigint|number|string} timestampNsec nsec since unix epoch to timestamp the data
   * @param {number|bigint|Array|ArrayBufferView} sample The values of the sample (nested arrays for several
   * dimensions), a single value for a series without dimension.
   * @throws {DataFormatError} The sample does not have the values of the series.
   */
  write(timestampNsec, sample) {
    const values = Array.isArray(sample)
      ? sample.flat(Infinity)
      : ArrayBuffer.isView(sample)
        ? Array.from(sample)
        : [sample];
    // The number of values (python-struct padded the missing ones with NaN: the size was always right).
    if (values.length !== this._numValuesPerSample) {
      throw new DataFormatError(
        `${JSON.stringify(this._seriesSpec)} expect ${this._numValuesPerSample} elements but got ${values.length}`,
      );
    }
    const serializedSample = packPodValues(this._podType, values);
    if (this._bytesPerSample >= this._dataBlockSize) {
      this._dataWriter.writeData(this._seriesIndex, timestampNsec, serializedSample);
      return;
    }

    if (this._block === null) {
      this._timestampNsec = timestampNsec;
      this._block = serializedSample;
    } else {
      this._block = Buffer.concat([this._block, serializedSample]);
    }

    if (this._block.length + this._bytesPerSample > this._dataBlockSize) {
      this._dataWriter.writeData(this._seriesIndex, this._timestampNsec, this._block);
      this._block = null;
    }
  }

  /**
   * If there are samples which haven't been written to the file, write them now.
   */
  finishBlock() {
    if (!this._block) return;
    this._dataWriter.writeData(this._seriesIndex, this._timestampNsec, this._block);
    this._block = null;
  }

  /**
   * Return the seriesType (string) with which the series was registered.
   */
  get seriesType() {
    return MessageChannel.SERIES_TYPE;
  }

  /**
   * Return the seriesSpec ({key -> value}) with which the series was registered.
   */
  get seriesSpec() {
    return this._seriesSpec;
  }
}

module.exports = {
  PodSeriesWriter,
};

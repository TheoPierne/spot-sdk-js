/**
 * @file A class for reading a series of POD data from a DataFile.
 */

'use strict';

const { ParseError, POD_TYPE_TO_NUM_BYTES, unpackPodValues } = require('./common');

const bddf_pb = require('../../bosdyn/api/bddf_pb');

/**
 * The values of the samples split by the dimensions, like _split() in Python: a sample of dimension [2, 3] is
 * [[a, b, c], [d, e, f]].
 * @param {Array<number|bigint>} vals
 * @param {number[]} dims
 * @returns {Array}
 */
function _split(vals, dims) {
  if (!dims.length) return vals;
  // The product of the dimensions (Python calls itertools.product(): a TypeError for every dimension).
  const elsPerSample = dims.reduce((product, dim) => product * dim, 1);
  if (!elsPerSample) throw new ParseError(`Invalid dimensions ${dims}`);
  const nextDims = dims.slice(1);
  const samples = [];
  for (let i = 0; i < vals.length; i += elsPerSample) {
    samples.push(_split(vals.slice(i, i + elsPerSample), nextDims));
  }
  return samples;
}

/**
 * A class for reading a series of POD data from a DataFile.
 *
 * Methods throw ParseError if there is a problem with the format of the file.
 */
class PodSeriesReader {
  /**
   * @param {import('./data_reader').DataReader} dataReader
   */
  constructor(dataReader) {
    /** @type {import('./data_reader').DataReader} */
    this._dataReader = dataReader;
    this._numDataBlocks = null;
  }

  /**
   * @template {new (...args: any[]) => any} T
   * @this {T}
   * @param {import('./data_reader').DataReader} dataReader
   * @param {Object<string, string>} seriesSpec
   * @returns {Promise<InstanceType<T>>}
   */
  static async create(dataReader, seriesSpec) {
    /** @type {InstanceType<T>} */
    const podSeriesReader = new this(dataReader);

    podSeriesReader._seriesIndex = podSeriesReader._dataReader.seriesSpecToIndex(seriesSpec);
    podSeriesReader._seriesDescriptor = await podSeriesReader._dataReader.seriesDescriptor(
      podSeriesReader._seriesIndex,
    );
    if (!podSeriesReader._seriesDescriptor.hasPodType()) {
      const dataType = Object.keys(bddf_pb.SeriesDescriptor.DatatypeCase).find(
        name => bddf_pb.SeriesDescriptor.DatatypeCase[name] === podSeriesReader._seriesDescriptor.getDatatypeCase(),
      );
      throw new ParseError(`Expected DataType 'pod_type' but got ${dataType}.`);
    }

    podSeriesReader._podType = podSeriesReader._seriesDescriptor.getPodType();
    podSeriesReader._numValuesPerSample = 1;
    for (const dim of podSeriesReader._podType.getDimensionList()) {
      podSeriesReader._numValuesPerSample *= dim;
    }
    const podType = podSeriesReader._podType.getPodType();
    podSeriesReader._bytesPerSample = POD_TYPE_TO_NUM_BYTES[podType] * podSeriesReader._numValuesPerSample;

    return podSeriesReader;
  }

  /**
   * Return the PodTypeDescriptor for the series.
   */
  get podType() {
    return this._podType;
  }

  /**
   * Return the SeriesDescriptor for the series.
   */
  get seriesDescriptor() {
    return this._seriesDescriptor;
  }

  /**
   * Number of data blocks in this series.
   */
  get numDataBlocks() {
    if (this._numDataBlocks === null) {
      this._numDataBlocks = this._dataReader.numDataBlocks(this._seriesIndex);
    }
    return this._numDataBlocks;
  }

  /**
   * Return the POD data values from the data block of the given index.
   * @param {number} indexInSeries
   * @returns {Promise<[bigint, Array]>} The nanoseconds since the epoch, and the values of the samples (BigInt for the
   * 64 bits integers).
   */
  async readSamples(indexInSeries) {
    const [, timestampNsec, data] = await this._dataReader.read(this._seriesIndex, indexInSeries);
    const numSamples = Math.floor(data.length / this._bytesPerSample);
    const expectedSize = numSamples * this._bytesPerSample;
    if (data.length !== expectedSize) {
      const id = JSON.stringify(this._seriesDescriptor.getSeriesIdentifier().toObject());
      throw new ParseError(`${id} idx=${indexInSeries} expect ${expectedSize} elements but got ${data.length}`);
    }

    const podData = unpackPodValues(this._podType.getPodType(), data);
    return [timestampNsec, _split(podData, this._podType.getDimensionList())];
  }
}

module.exports = {
  PodSeriesReader,
};

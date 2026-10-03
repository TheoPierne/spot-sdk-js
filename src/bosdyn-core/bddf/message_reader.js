/**
 * @file A class for reading message data from a DataFile.
 */

'use strict';

const { PROTOBUF_CONTENT_TYPE } = require('./common');

/**
 * A class for reading message data from a DataFile.
 *
 * Methods throw ParseError if there is a problem with the format of the file.
 */
class MessageReader {
  constructor(dataReader) {
    /**
     * @type {import('./data_reader').DataReader}
     */
    this._dataReader = dataReader;
    this._channelNameToSeriesDescriptor = {};
    this._channelNameToSeriesIndex = {};
  }

  /**
   * @template {new (...args: any[]) => any} T
   * @this {T}
   * @param {import('./data_reader').DataReader} dataReader
   * @param {boolean} [requireProtobuf]
   * @returns {Promise<InstanceType<T>>}
   */
  static async create(dataReader, requireProtobuf = false) {
    /** @type {InstanceType<T>} */
    const messageReader = new this(dataReader);

    for (const [seriesIndex, seriesIdentifier] of dataReader.fileIndex.getSeriesIdentifiersList().entries()) {
      let channelName;

      if (seriesIdentifier.getSpecMap().has('bosdyn:channel')) {
        channelName = seriesIdentifier.getSpecMap().get('bosdyn:channel');
      } else {
        continue;
      }

      const seriesDescriptor = await messageReader._dataReader.seriesDescriptor(seriesIndex);
      if (!seriesDescriptor.hasMessageType()) continue;

      const messageType = seriesDescriptor.getMessageType();
      if (requireProtobuf && messageType.getContentType() !== PROTOBUF_CONTENT_TYPE) continue;
      messageReader._channelNameToSeriesDescriptor[channelName] = seriesDescriptor;
      messageReader._channelNameToSeriesIndex[channelName] = seriesDescriptor.getSeriesIndex();
    }

    return messageReader;
  }

  /**
   * Return underlying DataReader this object is using.
   */
  get dataReader() {
    return this._dataReader;
  }

  /**
   * Return a mapping of {channel name -> series descriptor} for message series.
   */
  get channelNameToSeriesDescriptor() {
    return this._channelNameToSeriesDescriptor;
  }

  /**
   * Return series index (int) to access SeriesDescriptors and messages.
   */
  async seriesIndex(channelName, messageType = null) {
    if (messageType === null) return this._channelNameToSeriesIndex[channelName];

    for (const [seriesIndex, seriesIdentifier] of this._dataReader.fileIndex.getSeriesIdentifiersList().entries()) {
      let seriesChannel;

      if (seriesIdentifier.getSpecMap().has('bosdyn:channel')) {
        seriesChannel = seriesIdentifier.getSpecMap().get('bosdyn:channel');
      } else {
        continue;
      }

      if (seriesChannel !== channelName) continue;

      const seriesDescriptor = await this._dataReader.seriesDescriptor(seriesIndex);
      if (!seriesDescriptor.hasMessageType()) continue;

      if (messageType === seriesDescriptor.getMessageType().getTypeName()) return seriesIndex;
    }

    throw new TypeError(`No series with channelName=${channelName} and messageType=${messageType}`);
  }

  /**
   * Given a series index, return the associated SeriesDescriptor. Python reads file_index.series_descriptor, which does
   * not exist (an AttributeError): the SeriesDescriptor of the DataReader, as documented (the SeriesIdentifier was
   * returned).
   * @param {number} seriesIndex index from the seriesIndex() call
   * @returns {Promise<import('../../bosdyn/api/bddf_pb').SeriesDescriptor>}
   */
  seriesIndexToDescriptor(seriesIndex) {
    return this._dataReader.seriesDescriptor(seriesIndex);
  }

  /**
   * Return binary data from message stored in the file.
   */
  getBlob(seriesIndex, indexInSeries) {
    return this._dataReader.read(seriesIndex, indexInSeries);
  }
}

module.exports = {
  MessageReader,
};

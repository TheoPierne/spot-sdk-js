/**
 * @file Reads a particular series of GRPC request or response messages from a bddf file.
 */

'use strict';

/**
 * @typedef {import('google-protobuf').Message} Message
 */

/**
 * @typedef {import('./grpc_service_reader').GrpcServiceReader} GrpcServiceReader
 */

/**
 * @typedef {import('../../bosdyn/api/bddf_pb').SeriesDescriptor} SeriesDescriptor
 */

/**
 * Reads a particular series of GRPC request or response messages from a bddf file.
 */
class GrpcProtoReader {
  /**
   * @param {GrpcServiceReader} serviceReader
   * @param {number} seriesIndex
   * @param {string} seriesType
   * @param {Message} protoType
   * @param {SeriesDescriptor} seriesDescriptor
   */
  constructor(serviceReader, seriesIndex, seriesType, protoType, seriesDescriptor) {
    /**
     * @type {GrpcServiceReader}
     */
    this._serviceReader = serviceReader;

    /**
     * @type {number}
     */
    this._seriesIndex = seriesIndex;

    /**
     * @type {string}
     */
    this._seriesType = seriesType;

    /**
     * @type {Message}
     */
    this._protoType = protoType;

    /**
     * @type {SeriesDescriptor}
     */
    this._seriesDescriptor = seriesDescriptor;

    /**
     * @type {Promise<number>}
     */
    this._numMessages = null;
  }

  /**
   * Number of messages in of the given type.
   * @type {Promise<number>}
   */
  get numMessages() {
    if (this._numMessages === null) {
      this._numMessages = this._serviceReader.dataReader.numDataBlocks(this._seriesIndex);
    }
    return this._numMessages;
  }

  /**
   * Get a message from the series by its index number in the series.
   * @param {number} indexInSeries
   * @returns {Promise<[number, Message]>}
   */
  async getMessage(indexInSeries) {
    const [, timestampNsec, data] = await this._serviceReader.dataReader.read(this._seriesIndex, indexInSeries);
    const protobuf = this._protoType.deserializeBinary(data);
    return [timestampNsec, protobuf];
  }
}

module.exports = {
  GrpcProtoReader,
};

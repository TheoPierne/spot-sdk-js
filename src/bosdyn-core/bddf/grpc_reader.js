/**
 * @file A class for reading GRPC data from a DataFile.
 */

'use strict';

const { GrpcRequests, GrpcResponses } = require('./bosdyn');
const { LOGGER } = require('./common');
const { GrpcServiceReader } = require('./grpc_service_reader');

const { protoTypeName } = require('../../bosdyn-client/util');

/**
 * A class for reading GRPC data from a DataFile.
 *
 * Methods throw ParseError if there is a problem with the format of the file.
 */
class GrpcReader {
  constructor(dataReader) {
    this._dataReader = dataReader;
    this._serviceNameToReader = {};
    this._seriesIndexToReader = {};
    this._protoNameToReader = {};
  }

  /**
   * @template {new (...args: any[]) => any} T
   * @this {T}
   * @param {import('./data_reader').DataReader} dataReader
   * @param {any[]} protobufClasses
   * @returns {Promise<InstanceType<T>>}
   */
  static async create(dataReader, protobufClasses) {
    /** @type {InstanceType<T>} */
    const grpcReader = new this(dataReader);

    const protoNameToClass = Object.fromEntries(
      protobufClasses.map(protoClass => [protoTypeName(protoClass), protoClass]),
    );

    for (const [seriesIndex, seriesIdentifier] of dataReader.fileIndex.getSeriesIdentifiersList().entries()) {
      if (![GrpcRequests.SERIES_TYPE, GrpcResponses.SERIES_TYPE].includes(seriesIdentifier.getSeriesType())) {
        continue;
      }

      const serviceName = seriesIdentifier.getSpecMap().get(GrpcRequests.SERVICE_NAME);
      const messageType = seriesIdentifier.getSpecMap().get(GrpcRequests.MESSAGE_TYPE);
      let serviceReader;

      // A missing class is skipped, like Python (a lookup does not throw: its reader failed later).
      const protoClass = protoNameToClass[messageType];
      if (protoClass === undefined) {
        LOGGER.error(`Don't have a protobuf class for ${messageType}`);
        continue;
      }

      if (serviceName in grpcReader._serviceNameToReader) {
        serviceReader = grpcReader._serviceNameToReader[serviceName];
      } else {
        serviceReader = new GrpcServiceReader(grpcReader, serviceName);
        grpcReader._serviceNameToReader[serviceName] = serviceReader;
      }

      const seriesDescriptor = await grpcReader._dataReader.seriesDescriptor(seriesIndex);
      const reader = serviceReader.addProtoReader(
        seriesIndex,
        protoClass,
        seriesIdentifier.getSeriesType(),
        seriesDescriptor,
      );
      if (!(messageType in grpcReader._protoNameToReader)) {
        grpcReader._protoNameToReader[messageType] = reader;
      }
      grpcReader._seriesIndexToReader[seriesIndex] = reader;
    }

    return grpcReader;
  }

  /**
   * Return underlying DataReader this object is using.
   */
  get dataReader() {
    return this._dataReader;
  }

  /**
   * Return the GrpcProtoReader for protobuf messages with the specified type name.
   * @param {string} protoName
   * @returns {import('./grpc_proto_reader').GrpcProtoReader}
   */
  getProtoReader(protoName) {
    return this._protoNameToReader[protoName];
  }

  /**
   * Return a deserialized protobuf from bytes stored in the file.
   */
  getMessage(seriesIndex, indexInSeries) {
    const reader = this._seriesIndexToReader[seriesIndex];
    return reader.getMessage(indexInSeries);
  }
}

module.exports = {
  GrpcReader,
};

/**
 * @file GrpcSeriesWriter is a class for registering a series which stores GRPC request/response pairs.
 */

'use strict';

const { GrpcRequests, GrpcResponses } = require('./bosdyn');
const { PROTOBUF_CONTENT_TYPE } = require('./common');

const { protoTypeName } = require('../../bosdyn-client/util');

const { timestampToNsecBigInt } = require('../util');

/**
 * A class for logging GRPC request and response messages.
 */
class GrpcServiceWriter {
  constructor(dataWriter, serviceName) {
    /** @type {import('./data_writer').DataWriter} */
    this._dataWriter = dataWriter;
    this._serviceName = serviceName;
    this._requestTypes = {};
    this._responseTypes = {};
  }

  /**
   * Store request protobuf in the file.
   */
  logRequest(protobuf) {
    const seriesIndex = this._getSeriesIndex(protobuf, true);
    this._dataWriter.writeData(
      seriesIndex,
      // Exact, like timestamp_to_nsec() in Python.
      timestampToNsecBigInt(protobuf.getHeader().getRequestTimestamp()),
      protobuf.serializeBinary(),
    );
  }

  /**
   * Store response protobuf in the file.
   */
  logResponse(protobuf) {
    const seriesIndex = this._getSeriesIndex(protobuf, false);
    this._dataWriter.writeData(
      seriesIndex,
      timestampToNsecBigInt(protobuf.getHeader().getResponseTimestamp()),
      protobuf.serializeBinary(),
    );
  }

  _getSeriesIndex(protobuf, isRequest) {
    // A cached index of the types (it was rebuilt for each message: about 24 ms).
    const messageName = protoTypeName(protobuf);
    let nameToIndex, seriesType;
    if (isRequest) {
      nameToIndex = this._requestTypes;
      seriesType = GrpcRequests;
    } else {
      nameToIndex = this._responseTypes;
      seriesType = GrpcResponses;
    }

    if (messageName in nameToIndex) return nameToIndex[messageName];

    const seriesSpec = {
      [seriesType.SERVICE_NAME]: this._serviceName,
      [seriesType.MESSAGE_TYPE]: messageName,
    };

    const seriesIndex = this._dataWriter.addMessageSeries(
      seriesType.SERIES_TYPE,
      seriesSpec,
      PROTOBUF_CONTENT_TYPE,
      messageName,
    );
    nameToIndex[messageName] = seriesIndex;

    return seriesIndex;
  }
}

module.exports = {
  GrpcServiceWriter,
};

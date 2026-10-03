/**
 * @file A container for the GrpcProtoReaders associated with a given service in a bddf file.
 */

'use strict';

const { GrpcProtoReader } = require('./grpc_proto_reader');

const { protoTypeName } = require('../../bosdyn-client/util');

/**
 * A container for the GrpcProtoReaders associated with a given service in a bddf file.
 */
class GrpcServiceReader {
  constructor(grpcReader, serviceName) {
    this._grpcReader = grpcReader;
    this._serviceName = serviceName;
    this._typeNameToReader = {};
  }

  /**
   * Accessor for the DataReader used by this object.
   */
  get dataReader() {
    return this._grpcReader.dataReader;
  }

  /**
   * Returns a GrpcProtoReader for messages with the specified protobuf type name.
   */
  getProtoReader(typeName) {
    return this._typeNameToReader[typeName];
  }

  /**
   * Create and return a GrpcProtoReader for the given series in the bddf file.
   */
  addProtoReader(seriesIndex, protoType, seriesType, seriesDescriptor) {
    const reader = new GrpcProtoReader(this, seriesIndex, seriesType, protoType, seriesDescriptor);
    // The name of the class (getProtoTypeName() takes a message: all the readers were under 'null').
    this._typeNameToReader[protoTypeName(protoType)] = reader;
    return reader;
  }
}

module.exports = {
  GrpcServiceReader,
};

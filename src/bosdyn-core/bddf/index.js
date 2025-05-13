'use strict';

const {
  AddSeriesError,
  ChecksumError,
  DataError,
  DataFormatError,
  LOGGER,
  PROTOBUF_CONTENT_TYPE,
  ParseError,
  SeriesNotUniqueError,
} = require('./common');

// Class for reading data from a file-like object which is seekable.
const { DataReader } = require('./data_reader');

// Class for writing data to a file.
const { DataWriter } = require('./data_writer');

// Class for registering a series which stores GRPC request/response pairs.
const { GrpcReader } = require('./grpc_reader');

// Class for registering a series which stores GRPC request/response pairs.
const { GrpcServiceWriter } = require('./grpc_service_writer');

// Class for reading message data from a DataFile.
const { MessageReader } = require('./message_reader');

// Class for reading a series of POD data from a DataFile.
const { PodSeriesReader } = require('./pod_series_reader');

// Class which assists with writing POD data values into a series, within a DataWriter.
const { PodSeriesWriter } = require('./pod_series_writer');

// Class which assists with writing POD data values into a series, within a DataWriter.

// Class for reading a single channel of Protobuf data from a DataFile.
const { ProtobufChannelReader } = require('./protobuf_channel_reader');

// Class for reading Protobuf data from a DataFile.
const { ProtobufReader } = require('./protobuf_reader');
const { ProtobufSeriesWriter } = require('./protobuf_series_writer');

// A data reader which reads the file format from a stream, without seeking.
const { StreamDataReader } = require('./stream_data_reader');

module.exports = {
  AddSeriesError,
  ChecksumError,
  DataError,
  DataFormatError,
  LOGGER,
  PROTOBUF_CONTENT_TYPE,
  ParseError,
  SeriesNotUniqueError,
  DataReader,
  DataWriter,
  GrpcReader,
  GrpcServiceWriter,
  MessageReader,
  PodSeriesReader,
  PodSeriesWriter,
  ProtobufSeriesWriter,
  ProtobufChannelReader,
  ProtobufReader,
  StreamDataReader,
};

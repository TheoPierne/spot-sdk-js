'use strict';

const { Buffer } = require('node:buffer');

const { LoggerUtil } = require('../../bosdyn-client/loggerUtil');

const bddf_pb = require('../../bosdyn/api/bddf_pb');

const MAGIC = Buffer.from('BDDF');

const END_MAGIC = Buffer.from('FDDB');

/* eslint-disable no-loss-of-precision */

const BLOCK_HEADER_SIZE_MASK = 0x00ffffffffffffff;
const BLOCK_HEADER_TYPE_MASK = 0xff00000000000000;

const DATA_BLOCK_TYPE = 0x00;
const DESCRIPTOR_BLOCK_TYPE = 0x01;
const END_BLOCK_TYPE = 0x02;

// Message series named by a 'channel_name'

const PROTOBUF_CONTENT_TYPE = 'application/protobuf';

const SHA1_DIGEST_NBYTES = 20;
const INDEX_OFFSET_OFFSET = MAGIC.length + SHA1_DIGEST_NBYTES + 8;

const LOGGER = LoggerUtil.getLogger('bddf');

const POD_TYPE_TO_STRUCT = {
  [bddf_pb.PodTypeEnum.TYPE_INT8]: 'b',
  [bddf_pb.PodTypeEnum.TYPE_INT16]: 'h',
  [bddf_pb.PodTypeEnum.TYPE_INT32]: 'i',
  [bddf_pb.PodTypeEnum.TYPE_INT64]: 'q',
  [bddf_pb.PodTypeEnum.TYPE_UINT8]: 'B',
  [bddf_pb.PodTypeEnum.TYPE_UINT16]: 'H',
  [bddf_pb.PodTypeEnum.TYPE_UINT32]: 'I',
  [bddf_pb.PodTypeEnum.TYPE_UINT64]: 'Q',
  [bddf_pb.PodTypeEnum.TYPE_FLOAT32]: 'f',
  [bddf_pb.PodTypeEnum.TYPE_FLOAT64]: 'd',
};

const POD_TYPE_TO_NUM_BYTES = {
  [bddf_pb.PodTypeEnum.TYPE_INT8]: 1,
  [bddf_pb.PodTypeEnum.TYPE_INT16]: 2,
  [bddf_pb.PodTypeEnum.TYPE_INT32]: 4,
  [bddf_pb.PodTypeEnum.TYPE_INT64]: 8,
  [bddf_pb.PodTypeEnum.TYPE_UINT8]: 1,
  [bddf_pb.PodTypeEnum.TYPE_UINT16]: 2,
  [bddf_pb.PodTypeEnum.TYPE_UINT32]: 4,
  [bddf_pb.PodTypeEnum.TYPE_UINT64]: 8,
  [bddf_pb.PodTypeEnum.TYPE_FLOAT32]: 4,
  [bddf_pb.PodTypeEnum.TYPE_FLOAT64]: 8,
};

class DataError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'DataError';
  }
}

class AddSeriesError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'AddSeriesError';
  }
}

class SeriesNotUniqueError extends AddSeriesError {
  constructor(msg) {
    super(msg);
    this.name = 'SeriesNotUniqueError';
  }
}

class ChecksumError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'ChecksumError';
  }
}

class DataFormatError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'DataFormatError';
  }
}

class ParseError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'ParseError';
  }
}

class SeriesIdentifier {
  static SERIES_TYPE = '';
  static KEYS = [];
}

module.exports = {
  MAGIC,
  END_MAGIC,
  BLOCK_HEADER_SIZE_MASK,
  BLOCK_HEADER_TYPE_MASK,
  DATA_BLOCK_TYPE,
  DESCRIPTOR_BLOCK_TYPE,
  END_BLOCK_TYPE,
  PROTOBUF_CONTENT_TYPE,
  SHA1_DIGEST_NBYTES,
  INDEX_OFFSET_OFFSET,
  LOGGER,
  POD_TYPE_TO_STRUCT,
  POD_TYPE_TO_NUM_BYTES,
  DataError,
  AddSeriesError,
  SeriesNotUniqueError,
  ChecksumError,
  DataFormatError,
  ParseError,
  SeriesIdentifier,
};

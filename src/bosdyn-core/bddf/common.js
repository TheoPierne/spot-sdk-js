/**
 * @file Basic constants and structures for parsing/writing bddf.
 */

'use strict';

const { Buffer } = require('node:buffer');

const Long = require('long');

const bddf_pb = require('../../bosdyn/api/bddf_pb');
const { LoggerUtil } = require('../../bosdyn-client/logger_util');

/**
 * These are the first 4 bytes at the start of the file.
 * @type {Buffer}
 */
const MAGIC = Buffer.from('BDDF');

/**
 * These are the last 4 bytes at the end of the file.
 * The little-endian 8 byte offset of the FileIndex Descriptor Block is written
 * immediately before this (-12 byte offset from the end of the file).
 * @type {Buffer}
 */
const END_MAGIC = Buffer.from('FDDB');

/**
 * @type {Long}
 */
const BLOCK_HEADER_SIZE_MASK = Long.fromBigInt(0x00ffffffffffffffn, true);
/**
 * @type {Long}
 */
const BLOCK_HEADER_TYPE_MASK = Long.fromBigInt(0xff00000000000000n, true);

/**
 * First 4 bits of the block-header for a data block
 * @type {number}
 */
const DATA_BLOCK_TYPE = 0x00;
/**
 * First 4 bits of the block-header for a descriptor block
 * @type {number}
 */
const DESCRIPTOR_BLOCK_TYPE = 0x01;
/**
 * First 4 bits of the block-header for end-of-file material
 * @type {number}
 */
const END_BLOCK_TYPE = 0x02;

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

/** Exception raised for errors in the input: the parent of ChecksumError, DataFormatError and ParseError. */
class DataError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

/**
 * Errors related to registering a series in a DataWriter.
 */
class AddSeriesError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

/** The seriesSpec is not unique within the file. */
class SeriesNotUniqueError extends AddSeriesError {}

/** The file checksum does not match the computed value. */
class ChecksumError extends DataError {}

/** Data to be stored has the wrong format. */
class DataFormatError extends DataError {}

/** Data file has incorrect format. */
class ParseError extends DataError {}

/** The end of the file (normal, or unexpected), like EOFError in Python (it was a TypeError). */
class EOFError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

// The accessors of DataView for the POD types: the 64 bits integers are BigInt, exact like the integers of Python
// (python-struct gave Long objects, and padded the missing values with NaN).
const POD_TYPE_TO_DATA_VIEW = {
  [bddf_pb.PodTypeEnum.TYPE_INT8]: 'Int8',
  [bddf_pb.PodTypeEnum.TYPE_INT16]: 'Int16',
  [bddf_pb.PodTypeEnum.TYPE_INT32]: 'Int32',
  [bddf_pb.PodTypeEnum.TYPE_INT64]: 'BigInt64',
  [bddf_pb.PodTypeEnum.TYPE_UINT8]: 'Uint8',
  [bddf_pb.PodTypeEnum.TYPE_UINT16]: 'Uint16',
  [bddf_pb.PodTypeEnum.TYPE_UINT32]: 'Uint32',
  [bddf_pb.PodTypeEnum.TYPE_UINT64]: 'BigUint64',
  [bddf_pb.PodTypeEnum.TYPE_FLOAT32]: 'Float32',
  [bddf_pb.PodTypeEnum.TYPE_FLOAT64]: 'Float64',
};

/**
 * The little-endian bytes of POD values, like struct.pack() in Python.
 * @param {bddf_pb.PodTypeEnum} podType
 * @param {Array<number|bigint>} values
 * @returns {Buffer}
 * @throws {RangeError} A value is not an integer of the type (the struct.error of Python).
 */
function packPodValues(podType, values) {
  const kind = POD_TYPE_TO_DATA_VIEW[podType];
  const size = POD_TYPE_TO_NUM_BYTES[podType];
  if (kind === undefined) throw new DataFormatError(`Unknown POD type ${podType}`);
  const buffer = Buffer.alloc(values.length * size);
  const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  values.forEach((value, i) => {
    if (kind.startsWith('Float')) {
      view[`set${kind}`](i * size, Number(value), true);
      return;
    }
    const bits = BigInt(8 * size);
    const integer = BigInt(value);
    const [min, max] =
      kind.startsWith('Uint') || kind.startsWith('BigUint')
        ? [0n, 2n ** bits - 1n]
        : [-(2n ** (bits - 1n)), 2n ** (bits - 1n) - 1n];
    if (integer < min || integer > max) throw new RangeError(`${value} is out of range for ${kind}`);
    view[`set${kind}`](i * size, kind.startsWith('Big') ? integer : Number(integer), true);
  });
  return buffer;
}

/**
 * The POD values of little-endian bytes, like struct.unpack() in Python.
 * @param {bddf_pb.PodTypeEnum} podType
 * @param {Uint8Array} data
 * @returns {Array<number|bigint>}
 */
function unpackPodValues(podType, data) {
  const kind = POD_TYPE_TO_DATA_VIEW[podType];
  const size = POD_TYPE_TO_NUM_BYTES[podType];
  if (kind === undefined) throw new DataFormatError(`Unknown POD type ${podType}`);
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  return Array.from({ length: Math.floor(data.length / size) }, (_, i) => view[`get${kind}`](i * size, true));
}

/**
 * Base class for series identifier names.
 */
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
  EOFError,
  ParseError,
  SeriesIdentifier,
  packPodValues,
  unpackPodValues,
};

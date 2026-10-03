/**
 * @file Splits serialized messages into DataChunk messages for the streaming RPCs, and assembles them back.
 */

'use strict';

const { Buffer } = require('node:buffer');

const jspb = require('google-protobuf');

const dataChunkPb = require('../bosdyn/api/data_chunk_pb');

/**
 * Split a byte string into appropriately-sized chunks.
 * @param {Buffer|Array|string} serialized Data to split into chunks
 * @param {number} dataChunkByteSize The chunk size in bytes
 * @yields {Buffer|Array|String}
 */
function* splitSerialized(serialized, dataChunkByteSize) {
  let index = 0;
  const totalSize = serialized.length;

  while (index < totalSize) {
    yield serialized.slice(index, index + dataChunkByteSize);
    index += dataChunkByteSize;
  }
}

/**
 * Yield DataChunks for the given bytes.
 * @param {Buffer|Array|string} serialized Data to split into chunks
 * @param {number} dataChunkByteSize The chunk size in bytes
 * @yields {dataChunkPb.DataChunk}
 */
function* chunkSerialized(serialized, dataChunkByteSize) {
  // jspb reads a string given to a bytes field as base64: chunk the bytes instead.
  if (typeof serialized === 'string') serialized = Buffer.from(serialized);
  const totalBytesSize = serialized.length;
  for (const data of splitSerialized(serialized, dataChunkByteSize)) {
    yield new dataChunkPb.DataChunk().setTotalSize(totalBytesSize).setData(data);
  }
}

/**
 * Take a message, and split it into data chunks
 * @param {*} message A GRPC message
 * @param {number} dataChunkByteSize Max size of each streamed message
 * @returns {Generator<dataChunkPb.DataChunk>}
 */
function chunkMessage(message, dataChunkByteSize) {
  return chunkSerialized(message.serializeBinary(), dataChunkByteSize);
}

/**
 * Parse out a message from chunks.
 * @template M
 * @param {Iterable} iterableChunks DataChunks, or messages with a DataChunk `chunk` field.
 * @param {M} outMsg The message class to create, or a message instance to fill
 * (like Python's parse_from_chunks).
 * @returns {M}
 */
function parseFromChunks(iterableChunks, outMsg) {
  const serialized = serializedFromChunks(iterableChunks);
  if (typeof outMsg === 'function') return outMsg.deserializeBinary(serialized);
  return outMsg.constructor.deserializeBinaryFromReader(outMsg, new jspb.BinaryReader(serialized));
}

/**
 * Bytes of a DataChunk, or of the `chunk` field of a wrapper message.
 * @param {*} message A DataChunk or a message defining a DataChunk chunk field.
 * @returns {Uint8Array}
 */
function _chunkBytes(message) {
  const chunk = typeof message.getChunk === 'function' ? message.getChunk() : message;
  return chunk?.getData_asU8() ?? new Uint8Array(0);
}

/**
 * Assemble from messages that define a DataChunk chunk field.
 * @param {Iterable} iterableMessages A GRPC message
 * @returns {Buffer}
 */
function serializedFromMessages(iterableMessages) {
  return Buffer.concat(Array.from(iterableMessages, _chunkBytes));
}

/**
 * Assemble from data chunks directly without wrapper messages.
 * @param {Iterable} iterableChunks A GRPC message
 * @returns {Buffer}
 */
function serializedFromChunks(iterableChunks) {
  return Buffer.concat(Array.from(iterableChunks, _chunkBytes));
}

/**
 * Concatenate bytes together, like serialized_from_strings() in Python.
 * @param {Iterable<Uint8Array|string>} iterableStrings The bytes, e.g. the data of DataChunks: any iterable, like
 * Python (it had to be an array). A string is the base64 of bytes, like the bytes fields of jspb (it was read as
 * UTF-8).
 * @returns {Buffer}
 */
function serializedFromStrings(iterableStrings) {
  const toBytes = data => (typeof data === 'string' ? Buffer.from(data, 'base64') : data);
  return Buffer.concat(Array.from(iterableStrings, toBytes));
}

module.exports = {
  splitSerialized,
  chunkSerialized,
  chunkMessage,
  parseFromChunks,
  serializedFromChunks,
  serializedFromMessages,
  serializedFromStrings,
};

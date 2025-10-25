'use strict';

const { Buffer } = require('node:buffer');
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
 * @param {Iterable} iterableChunks A GRPC message
 * @param {M} outMsg A GRPC message
 * @returns {M}
 */
function parseFromChunks(iterableChunks, outMsg) {
  return outMsg.deserializeBinary(serializedFromChunks(iterableChunks));
}

/**
 * Assemble from messages that define a DataChunk chunk field.
 * @param {Iterable} iterableMessages A GRPC message
 * @returns {Buffer}
 */
function serializedFromMessages(iterableMessages) {
  return serializedFromStrings(iterableMessages.map(e => e.getChunk().getData()));
}

/**
 * Assemble from data chunks directly without wrapper messages.
 * @param {Iterable} iterableChunks A GRPC message
 * @returns {Buffer}
 */
function serializedFromChunks(iterableChunks) {
  return serializedFromStrings(iterableChunks.map(e => e.getData()));
}

/**
 * Concatenate bytes together.
 * @param {Iterable} iterableStrings A GRPC message
 * @returns {Buffer}
 */
function serializedFromStrings(iterableStrings) {
  return Buffer.concat(iterableStrings.map(str => Buffer.from(str)));
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

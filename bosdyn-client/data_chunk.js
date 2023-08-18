'use strict';

const { Buffer } = require('node:buffer');
const data_chunk_pb = require('../bosdyn/api/data_chunk_pb');

/**
 * Split a byte string into appropriately-sized chunks.
 * @param {Buffer|Array|string} serialized Data to split into chunks
 * @param {number} data_chunk_byte_size The chunk size in bytes
 * @yields {Buffer|Array|String}
 */
function* split_serialized(serialized, data_chunk_byte_size) {
  let index = 0;
  const total_size = serialized.length;

  while (index < total_size) {
    yield serialized.slice(index, index + data_chunk_byte_size);
    index += data_chunk_byte_size;
  }
}

/**
 * Yield DataChunks for the given bytes.
 * @param {Buffer|Array|string} serialized Data to split into chunks
 * @param {number} data_chunk_byte_size The chunk size in bytes
 * @yields {data_chunk_pb.DataChunk}
 */
function* chunk_serialized(serialized, data_chunk_byte_size) {
  const total_bytes_size = serialized.length;
  for (const data of split_serialized(serialized, data_chunk_byte_size)) {
    yield new data_chunk_pb.DataChunk().setTotalSize(total_bytes_size).setData(data);
  }
}

/**
 * Take a message, and split it into data chunks
 * @param {*} message A GRPC message
 * @param {number} data_chunk_byte_size Max size of each streamed message
 * @returns {Generator<data_chunk_pb.DataChunk>}
 */
function chunk_message(message, data_chunk_byte_size) {
  return chunk_serialized(message.serializeBinary(), data_chunk_byte_size);
}

/**
 * Parse out a message from chunks.
 * @param {Iterable} iterable_chunks A GRPC message
 * @param {*} out_msg A GRPC message
 * @returns {*}
 */
function parse_from_chunks(iterable_chunks, out_msg) {
  return out_msg.deserializeBinary(serialized_from_chunks(iterable_chunks));
}

/**
 * Assemble from messages that define a DataChunk chunk field.
 * @param {Iterable} iterable_messages A GRPC message
 * @returns {Buffer}
 */
function serialized_from_messages(iterable_messages) {
  return serialized_from_strings(iterable_messages.map(e => e.getChunk().getData()));
}

/**
 * Assemble from data chunks directly without wrapper messages.
 * @param {Iterable} iterable_chunks A GRPC message
 * @returns {Buffer}
 */
function serialized_from_chunks(iterable_chunks) {
  return serialized_from_strings(iterable_chunks.map(e => e.getData()));
}

/**
 * Concatenate bytes together.
 * @param {Iterable} iterable_strings A GRPC message
 * @returns {Buffer}
 */
function serialized_from_strings(iterable_strings) {
  return Buffer.concat(iterable_strings.map(str => Buffer.from(str)));
}

module.exports = {
  split_serialized,
  chunk_serialized,
  chunk_message,
  parse_from_chunks,
  serialized_from_chunks,
  serialized_from_messages,
  serialized_from_strings,
};

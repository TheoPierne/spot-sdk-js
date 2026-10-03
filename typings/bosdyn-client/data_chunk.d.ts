/**
 * Split a byte string into appropriately-sized chunks.
 * @param {Buffer|Array|string} serialized Data to split into chunks
 * @param {number} dataChunkByteSize The chunk size in bytes
 * @yields {Buffer|Array|String}
 */
export function splitSerialized(serialized: Buffer | any[] | string, dataChunkByteSize: number): Generator<string | any[] | Buffer<ArrayBuffer>, void, unknown>;
/**
 * Yield DataChunks for the given bytes.
 * @param {Buffer|Array|string} serialized Data to split into chunks
 * @param {number} dataChunkByteSize The chunk size in bytes
 * @yields {dataChunkPb.DataChunk}
 */
export function chunkSerialized(serialized: Buffer | any[] | string, dataChunkByteSize: number): Generator<dataChunkPb.DataChunk, void, unknown>;
/**
 * Take a message, and split it into data chunks
 * @param {*} message A GRPC message
 * @param {number} dataChunkByteSize Max size of each streamed message
 * @returns {Generator<dataChunkPb.DataChunk>}
 */
export function chunkMessage(message: any, dataChunkByteSize: number): Generator<dataChunkPb.DataChunk>;
/**
 * Parse out a message from chunks.
 * @template M
 * @param {Iterable} iterableChunks DataChunks, or messages with a DataChunk `chunk` field.
 * @param {M} outMsg The message class to create, or a message instance to fill
 * (like Python's parse_from_chunks).
 * @returns {M}
 */
export function parseFromChunks<M>(iterableChunks: Iterable<any>, outMsg: M): M;
/**
 * Assemble from data chunks directly without wrapper messages.
 * @param {Iterable} iterableChunks A GRPC message
 * @returns {Buffer}
 */
export function serializedFromChunks(iterableChunks: Iterable<any>): Buffer;
/**
 * Assemble from messages that define a DataChunk chunk field.
 * @param {Iterable} iterableMessages A GRPC message
 * @returns {Buffer}
 */
export function serializedFromMessages(iterableMessages: Iterable<any>): Buffer;
/**
 * Concatenate bytes together, like serialized_from_strings() in Python.
 * @param {Iterable<Uint8Array|string>} iterableStrings The bytes, e.g. the data of DataChunks: any iterable, like
 * Python (it had to be an array). A string is the base64 of bytes, like the bytes fields of jspb (it was read as
 * UTF-8).
 * @returns {Buffer}
 */
export function serializedFromStrings(iterableStrings: Iterable<Uint8Array | string>): Buffer;
import { Buffer } from "buffer";
import dataChunkPb = require("../../src/bosdyn/api/data_chunk_pb");

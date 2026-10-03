/**
 * These are the first 4 bytes at the start of the file.
 * @type {Buffer}
 */
export const MAGIC: Buffer;
/**
 * These are the last 4 bytes at the end of the file.
 * The little-endian 8 byte offset of the FileIndex Descriptor Block is written
 * immediately before this (-12 byte offset from the end of the file).
 * @type {Buffer}
 */
export const END_MAGIC: Buffer;
/**
 * @type {Long}
 */
export const BLOCK_HEADER_SIZE_MASK: Long;
/**
 * @type {Long}
 */
export const BLOCK_HEADER_TYPE_MASK: Long;
/**
 * First 4 bits of the block-header for a data block
 * @type {number}
 */
export const DATA_BLOCK_TYPE: number;
/**
 * First 4 bits of the block-header for a descriptor block
 * @type {number}
 */
export const DESCRIPTOR_BLOCK_TYPE: number;
/**
 * First 4 bits of the block-header for end-of-file material
 * @type {number}
 */
export const END_BLOCK_TYPE: number;
export const PROTOBUF_CONTENT_TYPE: "application/protobuf";
export const SHA1_DIGEST_NBYTES: 20;
export const INDEX_OFFSET_OFFSET: number;
export const LOGGER: import("winston").Logger;
export const POD_TYPE_TO_STRUCT: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
};
export const POD_TYPE_TO_NUM_BYTES: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
    10: number;
};
/** Exception raised for errors in the input: the parent of ChecksumError, DataFormatError and ParseError. */
export class DataError extends Error {
    constructor(message: any);
}
/**
 * Errors related to registering a series in a DataWriter.
 */
export class AddSeriesError extends Error {
    constructor(message: any);
}
/** The seriesSpec is not unique within the file. */
export class SeriesNotUniqueError extends AddSeriesError {
}
/** The file checksum does not match the computed value. */
export class ChecksumError extends DataError {
}
/** Data to be stored has the wrong format. */
export class DataFormatError extends DataError {
}
/** The end of the file (normal, or unexpected), like EOFError in Python (it was a TypeError). */
export class EOFError extends Error {
    constructor(message: any);
}
/** Data file has incorrect format. */
export class ParseError extends DataError {
}
/**
 * Base class for series identifier names.
 */
export class SeriesIdentifier {
    static SERIES_TYPE: string;
    static KEYS: any[];
}
/**
 * The little-endian bytes of POD values, like struct.pack() in Python.
 * @param {bddf_pb.PodTypeEnum} podType
 * @param {Array<number|bigint>} values
 * @returns {Buffer}
 * @throws {RangeError} A value is not an integer of the type (the struct.error of Python).
 */
export function packPodValues(podType: bddf_pb.PodTypeEnum, values: Array<number | bigint>): Buffer;
/**
 * The POD values of little-endian bytes, like struct.unpack() in Python.
 * @param {bddf_pb.PodTypeEnum} podType
 * @param {Uint8Array} data
 * @returns {Array<number|bigint>}
 */
export function unpackPodValues(podType: bddf_pb.PodTypeEnum, data: Uint8Array): Array<number | bigint>;
import { Buffer } from "buffer";
import Long = require("../../../node_modules/long/umd/types");
import bddf_pb = require("../../../src/bosdyn/api/bddf_pb");

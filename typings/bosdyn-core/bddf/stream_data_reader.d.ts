/**
 * Data reader which reads the file format from a stream, without seeking: a FileHandle, a Readable (e.g. the body of
 * an HTTP response) or an async iterable of chunks (the reads were at positions of a FileHandle only).
 * @extends {BaseDataReader}
 */
export class StreamDataReader extends BaseDataReader {
    constructor(outfile: any);
    _source: _StreamSource | null;
    _hasher: crypto.Hash;
    _indexer: FileIndexer;
    _seriesIndexToBlockIndex: {};
    _read(nbytes: any): Promise<Buffer<ArrayBufferLike>>;
    /**
     * Return the file index as parsed from the stream.
     */
    get streamFileIndex(): import("../../../src/bosdyn/api/bddf_pb").FileIndex;
    _computedChecksum(): NonSharedBuffer;
    /**
     * Return SeriesDescriptor for given series index.
     *
     * Returns KeyError if no such series exists.
     */
    seriesDescriptor(seriesIndex: any): import("../../../src/bosdyn/api/bddf_pb").SeriesDescriptor;
    /**
     * Read and return next data block.
     */
    readDataBlock(): Promise<(boolean | Buffer<ArrayBufferLike> | import("../../../src/bosdyn/api/bddf_pb").DataDescriptor | import("../../../src/bosdyn/api/bddf_pb").SeriesDescriptor | import("../../../src/bosdyn/api/bddf_pb").DescriptorBlock)[]>;
    /**
     * Read and return next block.
     */
    readNextBlock(): Promise<(boolean | Buffer<ArrayBufferLike> | import("../../../src/bosdyn/api/bddf_pb").DataDescriptor | import("../../../src/bosdyn/api/bddf_pb").DescriptorBlock)[]>;
    /**
     * Returns the current list of SeriesBlockIndexes: seriesIndex -> SeriesBlockIndex.
     */
    get seriesBlockIndexes(): import("../../../src/bosdyn/api/bddf_pb").SeriesBlockIndex[];
    /**
     * Returns the SeriesBlockIndexes for the given seriesIndex.
     * @param {number} seriesIndex
     */
    seriesBlockIndex(seriesIndex: number): import("../../../src/bosdyn/api/bddf_pb").SeriesBlockIndex;
    /**
     * Returns true if all blocks in the file have been read.
     */
    get eof(): boolean;
}
import { BaseDataReader } from "./base_data_reader";
/**
 * The bytes of a stream (a Readable, or any async iterable of chunks), read in order.
 */
declare class _StreamSource {
    constructor(stream: any);
    _iterator: any;
    _buffer: Buffer<ArrayBuffer>;
    _ended: boolean;
    /**
     * @param {number} nbytes
     * @returns {Promise<Buffer>} Less bytes at the end of the stream.
     */
    read(nbytes: number): Promise<Buffer>;
    close(): Promise<void>;
}
import crypto = require("node:crypto");
import { FileIndexer } from "./file_indexer";
import { Buffer } from "buffer";
export {};

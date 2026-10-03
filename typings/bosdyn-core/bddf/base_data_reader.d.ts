/**
 * Shared parent class for DataReader and StreamedDataReader.
 */
export class BaseDataReader {
    /**
     * @template {new (...args: any[]) => any} T
     * @this {T}
     * @param {{ infile?: import('node:fs/promises').FileHandle|null, filename?: string|null }} options
     * @returns {Promise<InstanceType<T>>}
     */
    static create<T extends new (...args: any[]) => any>(this: T, { infile, filename }: {
        infile?: import("node:fs/promises").FileHandle | null;
        filename?: string | null;
    }): Promise<InstanceType<T>>;
    /**
     * @param {import('node:fs/promises').FileHandle|null} [fileHandle]
     * @param {string|null} [filename] path of input file, if applicable.
     */
    constructor(fileHandle?: import("node:fs/promises").FileHandle | null, filename?: string | null);
    /** @type {import('node:fs/promises').FileHandle|null} */
    _fh: import("node:fs/promises").FileHandle | null;
    /** @type {string|null} */
    _filename: string | null;
    /** @type {number} */
    _pos: number;
    /**
     * @type {FileFormatDescriptor|null}
     */
    _fileDescriptor: FileFormatDescriptor | null;
    _specIndex: any;
    _indexOffset: any;
    /** @type {Buffer|null} */
    _checksum: Buffer | null;
    /** @type {Buffer|null} */
    _readChecksum: Buffer | null;
    /** @type {boolean} */
    _eof: boolean;
    /**
     * @type {FileIndex|null}
     */
    _fileIndex: FileIndex | null;
    /**
     * Return input file name, if specified, or null if not.
     * @type {string|null}
     */
    get filename(): string | null;
    /**
     * Return the file descriptor from the start of the file/stream.
     * @type {FileFormatDescriptor|null}
     */
    get fileDescriptor(): FileFormatDescriptor | null;
    /**
     * Return file version as a bosdyn.api.FileFormatVersion proto.
     * @type {FileFormatVersion}
     */
    get version(): FileFormatVersion;
    /**
     * Return Map{key -> value} for file annotations.
     * @type {Map<string, string>}
     */
    get annotations(): Map<string, string>;
    /**
     * Get the FileIndex proto used which describes how to access data in the file.
     * @type {FileIndex|null}
     */
    get fileIndex(): FileIndex | null;
    /**
     * 160-bit checksum read from the end of the file, or null if not yet read.
     * @type {Buffer|null}
     */
    get checksum(): Buffer | null;
    /**
     * Override to compute checksum on reading, in stream-readers.
     * @type {Buffer|null}
     */
    get readChecksum(): Buffer | null;
    /**
     * Override to compute checksum on reading, in stream-readers.
     * @returns {?Buffer}
     * @abstract
     */
    _computedChecksum(): Buffer | null;
    /**
     * Given a series spec (object {key: value}), return the series index for that series.
     * @param {Object} seriesSpec
     * @returns {number}
     * @throws {ValueError} Throw ValueError if no such series exists.
     */
    seriesSpecToIndex(seriesSpec: Object): number;
    /**
     * Close data reader file handler
     * @returns {Promise<void>}
     */
    close(): Promise<void>;
    /**
     * Read nbytes from file handler
     * @param {number} nbytes Number of bytes to read
     * @returns {Promise<Buffer>}
     * @throws {EOFError} The number of bytes read is not the number of bytes requested (it was a TypeError).
     * @throws {assert.AssertionError}
     */
    _read(nbytes: number): Promise<Buffer>;
    /**
     * Read header of the file
     * @returns {Promise<void>}
     */
    _readHeader(): Promise<void>;
    /**
     * Read a proto in the file
     * @template {typeof import('google-protobuf').Message} T
     * @param {T} protoType The proto to instantiate
     * @param {number} nbytes Number of bytes to read
     * @returns {Promise<InstanceType<T>>}
     */
    _readProto<T extends typeof import("google-protobuf").Message>(protoType: T, nbytes: number): Promise<InstanceType<T>>;
    /**
     * Read a data block
     * @returns {Promise<[DataDescriptor, Buffer]>}
     * @throws {assert.AssertionError}
     */
    _readDataBlock(): Promise<[DataDescriptor, Buffer]>;
    /**
     * Read a descriptor block
     * @param {string} descriptorTypeName
     * @returns {Promise<FileFormatDescriptor|SeriesDescriptor|SeriesBlockIndex|FileIndex>}
     */
    _readDescBlock(descriptorTypeName?: string): Promise<FileFormatDescriptor | SeriesDescriptor | SeriesBlockIndex | FileIndex>;
    /**
     * Read a block
     * @returns {Promise<[boolean, DataDescriptor|DescriptorBlock, Buffer]>}
     */
    _readBlock(): Promise<[boolean, DataDescriptor | DescriptorBlock, Buffer]>;
    /** Closes the reader at the end of `await using`, like the `with DataReader(...)` of Python. */
    [Symbol.asyncDispose](): Promise<void>;
}
import { FileFormatDescriptor } from "../../../src/bosdyn/api/bddf_pb";
import { Buffer } from "buffer";
import { FileIndex } from "../../../src/bosdyn/api/bddf_pb";
import { FileFormatVersion } from "../../../src/bosdyn/api/bddf_pb";
import { DataDescriptor } from "../../../src/bosdyn/api/bddf_pb";
import { SeriesDescriptor } from "../../../src/bosdyn/api/bddf_pb";
import { SeriesBlockIndex } from "../../../src/bosdyn/api/bddf_pb";
import { DescriptorBlock } from "../../../src/bosdyn/api/bddf_pb";

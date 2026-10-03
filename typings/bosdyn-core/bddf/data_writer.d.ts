export type FileIndex = import("../../../src/bosdyn/api/bddf_pb").FileIndex;
export type PodTypeEnum = import("../../../src/bosdyn/api/bddf_pb").PodTypeEnum;
export type DataFormatError = import("./common").DataFormatError;
/**
 * @typedef {import('../../../src/bosdyn/api/bddf_pb').FileIndex} FileIndex
 */
/**
 * @typedef {import('../../../src/bosdyn/api/bddf_pb').PodTypeEnum} PodTypeEnum
 * @typedef {import('./common').DataFormatError} DataFormatError
 */
/**
 * Class for writing data to a file.
 */
export class DataWriter {
    constructor(outfile: any, annotations?: null);
    /**
     * @type {BlockWriter}
     */
    _writer: BlockWriter;
    /**
     * @type {FileIndexer}
     */
    _indexer: FileIndexer;
    /**
     * @type {?Object}
     */
    _annotations: Object | null;
    /**
     * @type {Function[]}
     */
    _onClose: Function[];
    /**
     * Get the FileIndex proto used which describes how to access data in the file.
     * @type {FileIndex}
     */
    get fileIndex(): FileIndex;
    /**
     * Add a new series for storing message data. Message data is variable-sized binary data.
     * @param {string} seriesType
     * @param {Object} seriesSpec
     * @param {string} contentType
     * @param {string} typeName
     * @param {boolean} [isMetadata]
     * @param {?Object} [annotations]
     * @param {?string[]} additionalIndexNames
     * @returns {number}
     */
    addMessageSeries(seriesType: string, seriesSpec: Object, contentType: string, typeName: string, isMetadata?: boolean, annotations?: Object | null, additionalIndexNames?: string[] | null): number;
    /**
     * Add a new series for storing data POD data.
     * @param {string} seriesType
     * @param {Object} seriesSpec
     * @param {PodTypeEnum} typeEnum
     * @param {?number[]} dimension
     * @param {?Object} annotations
     * @returns {number}
     */
    addPodSeries(seriesType: string, seriesSpec: Object, typeEnum: PodTypeEnum, dimension?: number[] | null, annotations?: Object | null): number;
    /**
     * Register a new series for messages.
     * @param {string} seriesType
     * @param {Object} seriesSpec
     * @param {?MessageTypeDescriptor} messageType
     * @param {?PodTypeDescriptor} podType
     * @param {?Object} annotations
     * @param {?string[]} additionalIndexNames
     * @returns {number}
     */
    addSeries(seriesType: string, seriesSpec: Object, messageType?: MessageTypeDescriptor | null, podType?: PodTypeDescriptor | null, annotations?: Object | null, additionalIndexNames?: string[] | null): number;
    /**
     * Store binary data into the file, under a previously-defined channel.
     * @param {number} seriesIndex
     * @param {bigint|number|string} timestampNsec Nanoseconds since the epoch: exact as a BigInt, rounded to 256 ns as a
     * number.
     * @param {Buffer} data
     * @param {?Array<bigint|number|string>} additionalIndexes The values of the additional indexes of the series
     * (int64, often timestamps in nanoseconds): exact as BigInts or strings, rounded as numbers above 2^53.
     * @returns {void}
     * @throws {DataFormatError} The additional indexes are not valid for this series.
     */
    writeData(seriesIndex: number, timestampNsec: bigint | number | string, data: Buffer, additionalIndexes?: Array<bigint | number | string> | null): void;
    /**
     * Register a function to be called when file is closed, before index is written.
     * @param {Function} thunk
     * @returns {void}
     */
    runOnClose(thunk: Function): void;
    /**
     * Wait until the file has written its buffered data: see BlockWriter.drain().
     * @returns {Promise<void>}
     */
    drain(): Promise<void>;
    /**
     * Close data writer: the index is written once (two concurrent close() wrote it twice, after the end).
     * @returns {Promise<void>}
     */
    close(): Promise<void>;
    _close(): Promise<void>;
    /** Closes the writer at the end of `await using`, like the `with DataWriter(...)` of Python. */
    [Symbol.asyncDispose](): Promise<void>;
}
import { BlockWriter } from "./block_writer";
import { FileIndexer } from "./file_indexer";
import { MessageTypeDescriptor } from "../../../src/bosdyn/api/bddf_pb";
import { PodTypeDescriptor } from "../../../src/bosdyn/api/bddf_pb";
import { Buffer } from "buffer";

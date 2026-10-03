export type DataDescriptor = import("../../../src/bosdyn/api/bddf_pb").DataDescriptor;
export type SeriesBlockIndex = import("../../../src/bosdyn/api/bddf_pb").SeriesBlockIndex;
export type SeriesDescriptor = import("../../../src/bosdyn/api/bddf_pb").SeriesDescriptor;
/**
 * @typedef {import('../../../src/bosdyn/api/bddf_pb').DataDescriptor} DataDescriptor
 */
/**
 * @typedef {import('../../../src/bosdyn/api/bddf_pb').SeriesBlockIndex} SeriesBlockIndex
 */
/**
 * @typedef {import('../../../src/bosdyn/api/bddf_pb').SeriesDescriptor} SeriesDescriptor
 */
/**
 * Class for reading data from a file-like object which is seekable.
 * @extends {BaseDataReader}
 */
export class DataReader extends BaseDataReader {
    /**
     * Create a DataReader and load the file index.
     *
     * @template {new (...args: any[]) => any} T
     * @this {T}
     * @param {{ infile?: import('node:fs/promises').FileHandle|null, filename?: string|null }} [params]
     * @returns {Promise<InstanceType<T>>}
     */
    static create<T extends new (...args: any[]) => any>(this: T, { infile, filename }?: {
        infile?: import("node:fs/promises").FileHandle | null;
        filename?: string | null;
    }): Promise<InstanceType<T>>;
    constructor(infile?: null, filename?: null);
    /** @type {Record<number, SeriesDescriptor>} */
    _seriesIndexToDescriptor: Record<number, SeriesDescriptor>;
    /** @type {Record<number, SeriesBlockIndex>} */
    _seriesIndexToBlockIndex: Record<number, SeriesBlockIndex>;
    /**
     * The end of the last read: the reads at a position wait for each other (concurrent reads moved the position of
     * each other).
     * @type {Promise<void>}
     */
    _lock: Promise<void>;
    /**
     * Return SeriesDescriptor for given series index, loading it if necessary.
     * @param {number} seriesIndex
     * @returns {Promise<SeriesDescriptor>}
     */
    seriesDescriptor(seriesIndex: number): Promise<SeriesDescriptor>;
    /**
     * Returns the number of data blocks for a given series in the file.
     *
     * @param {number} seriesIndex
     * @returns {Promise<number>}
     */
    numDataBlocks(seriesIndex: number): Promise<number>;
    /**
     * Returns the total number of bytes for data in a given series in the file.
     *
     * @param {number} seriesIndex
     * @returns {Promise<number>}
     */
    totalBytes(seriesIndex: number): Promise<number>;
    /**
     * Retrieves a message and related information from the file.
     * @param {number} seriesIndex Selecting from which series to read the message.
     * @param {number} indexInSeries The index number of the message within the channel.
     * @returns {Promise<[DataDescriptor, bigint, Buffer]>} The nanoseconds since the epoch are exact, like the integers
     * of Python (a number was rounded to 256 ns).
     */
    read(seriesIndex: number, indexInSeries: number): Promise<[DataDescriptor, bigint, Buffer]>;
    /**
     * Returns the SeriesBlockIndexes for the given series_index, loading it as needed.
     * @param {number} seriesIndex
     * @returns {Promise<SeriesBlockIndex>}
     */
    seriesBlockIndex(seriesIndex: number): Promise<SeriesBlockIndex>;
    /**
     * Read data at index
     * @returns {Promise<void>}
     * @private
     */
    private _readIndex;
    /**
     * Move pos cursor
     * @param {number} location
     * @returns {void}
     * @private
     */
    private _seekTo;
    /**
     * Read data block at position
     * @param {number} location
     * @returns {Promise<[DataDescriptor, Buffer]>}
     * @private
     */
    private _readDataBlockAt;
    /**
     * Read descriptor block at position
     * @param {string} descriptorTypeName
     * @param {number} location
     * @private
     */
    private _readDescBlockAt;
    /**
     * Run an operation after the previous one (they share the position in the file).
     * @template T
     * @param {function(): Promise<T>} operation
     * @returns {Promise<T>}
     * @private
     */
    private _locked;
}
import { BaseDataReader } from "./base_data_reader";

export type BlockWriter = import("./block_writer").BlockWriter;
export type MessageTypeDescriptor = import("../../../src/bosdyn/api/bddf_pb").MessageTypeDescriptor;
export type PodTypeDescriptor = import("../../../src/bosdyn/api/bddf_pb").PodTypeDescriptor;
/**
 * @typedef {import('./block_writer').BlockWriter} BlockWriter
 */
/**
 * @typedef {import('../../../src/bosdyn/api/bddf_pb').MessageTypeDescriptor} MessageTypeDescriptor
 */
/**
 * @typedef {import('../../../src/bosdyn/api/bddf_pb').PodTypeDescriptor} PodTypeDescriptor
 */
/**
 * An object which keeps an index of series and blocks within series.
 * It can write a block index at the end of a data file.
 */
export class FileIndexer {
    /**
     * Given a SeriesIdentifier, return a 64-bit hash.
     * @param {SeriesIdentifier} seriesIdentifier
     * @returns {string}
     * @static
     */
    static seriesIdentifierToHash(seriesIdentifier: SeriesIdentifier): string;
    /**
     * @type {DescriptorBlock}
     */
    _descriptorIndex: DescriptorBlock;
    /**
     * @type {SeriesDescriptor[]}
     */
    _seriesDescriptors: SeriesDescriptor[];
    /**
     * @type {SeriesBlockIndex[]}
     */
    _seriesBlockIndexes: SeriesBlockIndex[];
    /**
     * Get the FileIndex proto used which describes how to access data in the file.
     * @type {FileIndex}
     */
    get fileIndex(): FileIndex;
    /**
     * Get the Descriptor proto containing the FileIndex.
     * @type {DescriptorBlock}
     */
    get descriptorIndex(): DescriptorBlock;
    /**
     * Returns the current array of SeriesBlockIndexes: seriesIndex -> SeriesBlockIndex.
     * @type {SeriesBlockIndex[]}
     */
    get seriesBlockIndexes(): SeriesBlockIndex[];
    /**
     * Return SeriesDescriptor for given series index
     * @param {number} seriesIndex
     * @returns {SeriesDescriptor}
     */
    seriesDescriptor(seriesIndex: number): SeriesDescriptor;
    /**
     * Add the given series_descriptor to the index, with the given file offset.
     * @param {SeriesDescriptor} seriesDescriptor SeriesDescriptor to add to the index
     * @param {number} seriesBlockFileOffset Location in file where SeriesDescriptor will be written,
     * or was read from.
     */
    addSeriesDescriptor(seriesDescriptor: SeriesDescriptor, seriesBlockFileOffset: number): void;
    /**
     * Register a new series for messages for a DataWriter.
     * @param {string} seriesType
     * @param {Object} seriesSpec
     * @param {MessageTypeDescriptor} messageType
     * @param {PodTypeDescriptor} podType
     * @param {Object} annotations
     * @param {string[]} additionalIndexNames
     * @param {BlockWriter} writer
     * @returns {number}
     */
    addSeries(seriesType: string, seriesSpec: Object, messageType: MessageTypeDescriptor, podType: PodTypeDescriptor, annotations: Object, additionalIndexNames: string[], writer: BlockWriter): number;
    /**
     * Add an entry to the data block index of the series identified by seriesIndex.
     * @param {number} seriesIndex
     * @param {bigint|number|string} timestampNsec Exact as a BigInt.
     * @param {number} fileOffset
     * @param {number} nbytes
     * @param {?string[]} additionalIndexes The decimal strings of the int64 values (see makeDataDescriptor()).
     * @returns {void}
     */
    indexDataBlock(seriesIndex: number, timestampNsec: bigint | number | string, fileOffset: number, nbytes: number, additionalIndexes: string[] | null): void;
    /**
     * Return DataDescriptor for writing a data block.
     * @param {number} seriesIndex
     * @param {bigint|number|string} timestampNsec Exact as a BigInt.
     * @param {?Array<bigint|number|string>} additionalIndexes The int64 values of the additional indexes of the series,
     * exact as BigInts or strings (the descriptor holds their decimal strings, like the other 64 bits fields).
     * @returns {DataDescriptor}
     * @throws {DataFormatError} The number or a value of the additional indexes is not valid for the series.
     */
    makeDataDescriptor(seriesIndex: number, timestampNsec: bigint | number | string, additionalIndexes: Array<bigint | number | string> | null): DataDescriptor;
    /**
     * Write all the indexes of the data file, and the file end.
     * @param {BlockWriter} blockWriter
     */
    writeIndex(blockWriter: BlockWriter): void;
}
import { DescriptorBlock } from "../../../src/bosdyn/api/bddf_pb";
import { SeriesDescriptor } from "../../../src/bosdyn/api/bddf_pb";
import { SeriesBlockIndex } from "../../../src/bosdyn/api/bddf_pb";
import { FileIndex } from "../../../src/bosdyn/api/bddf_pb";
import { DataDescriptor } from "../../../src/bosdyn/api/bddf_pb";
import { SeriesIdentifier } from "../../../src/bosdyn/api/bddf_pb";

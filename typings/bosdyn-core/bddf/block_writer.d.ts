export type WriteStream = import("node:fs").WriteStream;
/**
 * @typedef {import('node:fs').WriteStream} WriteStream
 */
/**
 * Writes data structures in the data file.
 */
export class BlockWriter {
    /**
     * @param {WriteStream} outfile
     */
    constructor(outfile: WriteStream);
    /**
     * @type {WriteStream}
     * @private
     */
    private _outfile;
    /**
     * @type {crypto.Hash}
     * @private
     */
    private _hasher;
    /**
     * Number of bytes written
     * @type {number}
     * @private
     */
    private _bytesWritten;
    /**
     * The first error of the stream (ENOSPC, EACCES...): thrown by the next write or by close(). Without a listener,
     * it crashed the process.
     * @type {?Error}
     * @private
     */
    private _error;
    /**
     * Number of bytes written
     * @returns {number}
     */
    bytesWritten(): number;
    /**
     * Write a DescriptorBlock to the file.
     * @param {bddf_pb.DescriptorBlock} block
     * @returns {void}
     */
    writeDescriptorBlock(block: bddf_pb.DescriptorBlock): void;
    /**
     * Write a block of data to the file.
     * @param {bddf_pb.DataDescriptor} block
     * @param {Buffer} data
     * @returns {void}
     */
    writeDataBlock(block: bddf_pb.DataDescriptor, data: Buffer): void;
    /**
     * Write data to the file
     * @param {Buffer} data
     * @returns {void}
     * @private
     */
    private _write;
    /**
     * Wait until the stream has written its buffered data (the backpressure): the writes do not wait, like the file
     * writes of Python, and a stream buffers all of them in memory.
     * @returns {Promise<void>}
     * @throws {Error} The error of the stream.
     */
    drain(): Promise<void>;
    /**
     * Close the write stream
     * @returns {Promise<void>}
     * @throws {Error} The error of the stream.
     */
    close(): Promise<void>;
    /**
     * Check if the write stream is closed
     * @type {boolean}
     */
    get closed(): boolean;
    /**
     * Write the header of the data file, including annotations.
     * @param {Object} annotations An object of annotation ex: { spot: 'aaa' }
     * @returns {void}
     */
    writeHeader(annotations: Object): void;
    /**
     * Write the end of the data file.
     * @param {number} indexOffset
     */
    writeFileEnd(indexOffset: number): void;
    /**
     * Write block header
     * @param {number} blockType The number of the block type in [DATA_BLOCK_TYPE, DESCRIPTOR_BLOCK_TYPE, END_BLOCK_TYPE]
     * @param {number} blockLen The block length
     * @private
     */
    private _writeBlockHeader;
}
import bddf_pb = require("../../../src/bosdyn/api/bddf_pb");
import { Buffer } from "buffer";

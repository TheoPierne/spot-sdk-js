/**
 * @file BlockWriter writes basic data structures in the bddf file.
 */

'use strict';

const { Buffer } = require('node:buffer');
const crypto = require('node:crypto');
const { once } = require('node:events');
const { finished } = require('node:stream/promises');

const Long = require('long');
const struct = require('python-struct');

const {
  BLOCK_HEADER_SIZE_MASK,
  DataFormatError,
  DATA_BLOCK_TYPE,
  END_BLOCK_TYPE,
  END_MAGIC,
  DESCRIPTOR_BLOCK_TYPE,
  MAGIC,
  SHA1_DIGEST_NBYTES,
} = require('./common');

const bddf_pb = require('../../bosdyn/api/bddf_pb');

/**
 * @typedef {import('node:fs').WriteStream} WriteStream
 */

/**
 * Writes data structures in the data file.
 */
class BlockWriter {
  /**
   * @param {WriteStream} outfile
   */
  constructor(outfile) {
    /**
     * @type {WriteStream}
     * @private
     */
    this._outfile = outfile;

    /**
     * @type {crypto.Hash}
     * @private
     */
    this._hasher = crypto.createHash('sha1');

    /**
     * Number of bytes written
     * @type {number}
     * @private
     */
    this._bytesWritten = 0;

    /**
     * The first error of the stream (ENOSPC, EACCES...): thrown by the next write or by close(). Without a listener,
     * it crashed the process.
     * @type {?Error}
     * @private
     */
    this._error = null;
    outfile.on?.('error', error => {
      this._error ??= error;
    });
  }

  /**
   * Number of bytes written
   * @returns {number}
   */
  bytesWritten() {
    return this._bytesWritten;
  }

  /**
   * Write a DescriptorBlock to the file.
   * @param {bddf_pb.DescriptorBlock} block
   * @returns {void}
   */
  writeDescriptorBlock(block) {
    const serialized = block.serializeBinary();
    this._writeBlockHeader(DESCRIPTOR_BLOCK_TYPE, serialized.length);
    this._write(serialized);
  }

  /**
   * Write a block of data to the file.
   * @param {bddf_pb.DataDescriptor} block
   * @param {Buffer} data
   * @returns {void}
   */
  writeDataBlock(block, data) {
    // The UTF-8 bytes of a string: the block size was its length in UTF-16 units.
    data = typeof data === 'string' ? Buffer.from(data, 'utf8') : data;
    const serializedDesc = block.serializeBinary();
    this._writeBlockHeader(DATA_BLOCK_TYPE, data.length + serializedDesc.length);
    this._write(struct.pack('<I', serializedDesc.length));
    this._write(serializedDesc);
    this._write(data);
  }

  /**
   * Write data to the file
   * @param {Buffer} data
   * @returns {void}
   * @private
   */
  _write(data) {
    if (this._error) throw this._error;
    this._hasher.update(data);
    this._outfile.write(data);
    this._bytesWritten += data.length;
  }

  /**
   * Wait until the stream has written its buffered data (the backpressure): the writes do not wait, like the file
   * writes of Python, and a stream buffers all of them in memory.
   * @returns {Promise<void>}
   * @throws {Error} The error of the stream.
   */
  async drain() {
    if (this._error) throw this._error;
    if (this._outfile?.writableNeedDrain) await once(this._outfile, 'drain');
  }

  /**
   * Close the write stream
   * @returns {Promise<void>}
   * @throws {Error} The error of the stream.
   */
  async close() {
    if (this.closed) return;
    const outfile = this._outfile;
    this._outfile = null;
    if (!this._error) outfile.end();
    await finished(outfile);
    if (this._error) throw this._error;
  }

  /**
   * Check if the write stream is closed
   * @type {boolean}
   */
  get closed() {
    return this._outfile === null;
  }

  /**
   * Write the header of the data file, including annotations.
   * @param {Object} annotations An object of annotation ex: { spot: 'aaa' }
   * @returns {void}
   */
  writeHeader(annotations) {
    this._write(MAGIC);
    const headerBlock = new bddf_pb.DescriptorBlock();

    const version = new bddf_pb.FileFormatVersion().setMajorVersion(1).setMinorVersion(0).setPatchLevel(0);
    const fileDescriptor = new bddf_pb.FileFormatDescriptor().setVersion(version);

    if (annotations) {
      for (const a of Object.keys(annotations)) {
        fileDescriptor.getAnnotationsMap().set(a, annotations[a]);
      }
    }

    fileDescriptor.setChecksumType(bddf_pb.FileFormatDescriptor.CheckSumType.CHECKSUM_TYPE_SHA1);
    fileDescriptor.setChecksumNumBytes(SHA1_DIGEST_NBYTES);
    headerBlock.setFileDescriptor(fileDescriptor);
    this.writeDescriptorBlock(headerBlock);
  }

  /**
   * Write the end of the data file.
   * @param {number} indexOffset
   */
  writeFileEnd(indexOffset) {
    this._writeBlockHeader(END_BLOCK_TYPE, 24);
    this._write(struct.pack('<Q', Long.fromValue(indexOffset, true).toString()));
    this._outfile.write(this._hasher.digest());
    this._outfile.write(END_MAGIC);
  }

  /**
   * Write block header
   * @param {number} blockType The number of the block type in [DATA_BLOCK_TYPE, DESCRIPTOR_BLOCK_TYPE, END_BLOCK_TYPE]
   * @param {number} blockLen The block length
   * @private
   */
  _writeBlockHeader(blockType, blockLen) {
    const len = Long.fromNumber(blockLen, true);
    if (len.greaterThan(BLOCK_HEADER_SIZE_MASK)) {
      throw new DataFormatError(`block size (${blockLen}) is too big (> ${BLOCK_HEADER_SIZE_MASK})`);
    }

    const header = Long.fromNumber(blockType, true).shiftLeft(56).or(len);

    this._write(struct.pack('<Q', header.toString()));
  }
}

module.exports = {
  BlockWriter,
};

'use strict';

const crypto = require('node:crypto');

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

class BlockWriter {
  constructor(outfile) {
    this._outfile = outfile;
    this._hasher = crypto.createHash('sha1');
  }

  tell() {
    return this._outfile.tell();
  }

  write_descriptor_block(block) {
    const serialized = block.serializeBinary();
    this._write_block_header(DESCRIPTOR_BLOCK_TYPE, serialized.length);
    this._write(serialized);
  }

  write_data_block(desc_block, data) {
    const serialized_desc = desc_block.serializeBinary();
    this._write_block_header(DATA_BLOCK_TYPE, data.length + serialized_desc.length);
    this._write(struct.pack('<I', serialized_desc.length));
    this._write(serialized_desc);
    this._write(data);
  }

  _write(data) {
    this._hasher.update(data);
    this._outfile.write(data);
  }

  close() {
    if (this.closed) return;
    this._outfile.close();
    this._outfile = null;
  }

  get closed() {
    return this._outfile === null;
  }

  write_header(annotations) {
    this._write(MAGIC);
    const header_block = new bddf_pb.DescriptorBlock();
    // eslint-disable-next-line
    const version = new bddf_pb.FileFormatVersion().setMajorVersion(1).setMinorVersion(0).setPatchLevel(0);
    const file_descriptor = new bddf_pb.FileFormatDescriptor().setVersion(version);
    if (annotations) {
      for (const a of Object.keys(annotations)) {
        file_descriptor.getAnnotationsMap().set(a, annotations[a]);
      }
    }
    file_descriptor.setChecksumType(bddf_pb.FileFormatDescriptor.CheckSumType.CHECKSUM_TYPE_SHA1);
    file_descriptor.setChecksumNumBytes(SHA1_DIGEST_NBYTES);
    header_block.setFileDescriptor(file_descriptor);
    this.write_descriptor_block(header_block);
  }

  write_file_end(index_offset) {
    this._write_block_header(END_BLOCK_TYPE, 24);
    this._write(struct.pack('<Q', index_offset));
    this._outfile.write(this._hasher.digest());
    this._outfile.write(END_MAGIC);
  }

  _write_block_header(block_type, block_len) {
    if (block_len > BLOCK_HEADER_SIZE_MASK) {
      throw new DataFormatError(`block size (${block_len}) is too big (> ${BLOCK_HEADER_SIZE_MASK})`);
    }
    const block_descriptor = (block_type << 56) | block_len;
    this._write(struct.pack('<Q', block_descriptor));
  }
}

module.exports = {
  BlockWriter,
};

'use strict';

const { Buffer } = require('node:buffer');
const crypto = require('node:crypto');

const time = require('google-protobuf/google/protobuf/timestamp_pb');
const struct = require('python-struct');

const { AddSeriesError, DataFormatError, SeriesNotUniqueError } = require('./common');

const bddf_pb = require('../../bosdyn/api/bddf_pb');

function _hasher_to_uint64(hasher) {
  return struct.unpack('>Q', hasher.digest().slice(0, 8))[0];
}

class FileIndexer {
  constructor() {
    this._descriptor_index = new bddf_pb.DescriptorBlock();
    this._series_descriptors = [];
    this._series_block_indexes = [];
  }

  get file_index() {
    return this._descriptor_index.getFileIndex();
  }

  get descriptor_index() {
    return this._descriptor_index;
  }

  get series_block_indexes() {
    return this._series_block_indexes;
  }

  series_descriptor(series_index) {
    return this._series_descriptors[series_index];
  }

  static series_identifier_to_hash(series_identifier) {
    const hasher = crypto.createHash('sha1');
    hasher.update(Buffer.from(series_identifier.getSeriesType(), 'utf-8').toString());
    for (const key of series_identifier.getSpecMap().keys()) {
      hasher.update(Buffer.from(key, 'utf-8').toString());
      hasher.update(Buffer.from(series_identifier.getSpecMap().get(key), 'utf-8').toString());
    }
    return _hasher_to_uint64(hasher);
  }

  add_series_descriptor(series_descriptor, series_block_file_offset) {
    console.assert(series_descriptor.getSeriesIndex() === this._series_descriptors.length);
    this.file_index.addSeriesIdentifiers(series_descriptor.getSeriesIdentifier());
    this.file_index.addSeriesIdentifierHashes(series_descriptor.getIdentifierHash());
    this._series_descriptors.push(series_descriptor);
    const seriesBlockIndex = new bddf_pb.SeriesBlockIndex()
      .setSeriesIndex(series_descriptor.getSeriesIndex())
      .setDescriptorFileOffset(series_block_file_offset);
    this._series_block_indexes.push(seriesBlockIndex);
  }

  add_series(series_type, series_spec, message_type, pod_type, annotations, additional_index_names, writer) {
    const series_index = this._series_descriptors.length;

    const series_identifier = new bddf_pb.SeriesIdentifier().setSeriesType(series_type);

    for (const key of Object.keys(series_spec)) {
      series_identifier.getSpecMap().set(key, series_spec[key]);
    }

    const series = new bddf_pb.SeriesDescriptor()
      .setSeriesIndex(series_index)
      .setSeriesIdentifier(series_identifier)
      .setIdentifierHash(this.series_identifier_to_hash(series_identifier));

    for (const prev_series_identifier of this.file_index.getSeriesIdentifiersList()) {
      if (prev_series_identifier.getSpecMap().getLength() === series_identifier.getSpecMap().getLength()) {
        throw new SeriesNotUniqueError(`Spec ${series_identifier.getSpecMap()} is not unique within the data file`);
      }
    }

    if (message_type) {
      if (pod_type) {
        throw new AddSeriesError(`Specified both message_type (${message_type}) and pod_type (${pod_type})`);
      }
      series.setMessageType(message_type);
    } else {
      if (!pod_type) {
        throw new AddSeriesError('Specified neither message_type nor pod_type');
      }
      series.setPodType(pod_type);
    }
    if (annotations) {
      for (const key of Object.keys(annotations)) {
        series.getAnnotationsMap().set(key, annotations[key]);
      }
    }
    if (additional_index_names) {
      for (const name of additional_index_names) {
        series.addAdditionalIndexNames(name);
      }
    }

    const descriptor = new bddf_pb.DescriptorBlock().setSeriesDescriptor(series);
    const series_block_file_offset = writer.tell();
    writer.write_descriptor_block(descriptor);
    this.add_series_descriptor(series, series_block_file_offset);
    return series_index;
  }

  index_data_block(series_index, timestamp_nsec, file_offset, nbytes, additional_indexes) {
    const series_block_index = this._series_block_indexes[series_index];
    const block_entry = series_block_index.addBlockEntries(
      new bddf_pb.SeriesBlockIndex.BlockEntry().setFileOffset(file_offset),
    );
    block_entry.setTimestamp(new time.Timestamp().fromDate(timestamp_nsec));
    series_block_index.setTotalBytes(series_block_index.getTotalBytes() + nbytes);
    if (additional_indexes) {
      for (const idx_val of additional_indexes) {
        block_entry.addAdditionalIndexes(idx_val);
      }
    }
  }

  make_data_descriptor(series_index, timestamp_nsec, additional_indexes) {
    const series_descriptor = this._series_descriptors[series_index];
    const data_descriptor = new bddf_pb.DataDescriptor().setSeriesIndex(series_index);
    data_descriptor.setTimestamp(new time.Timestamp().fromDate(timestamp_nsec));
    additional_indexes = additional_indexes || [];
    if (additional_indexes.length !== series_descriptor.getAdditionalIndexNamesList().length) {
      throw new DataFormatError(
        `Series ${series_descriptor} needs ${
          series_descriptor.getAdditionalIndexNamesList().length
        } additional indexes, but ${additional_indexes} provided.`,
      );
    }
    if (additional_indexes) {
      for (const idx_val of additional_indexes) {
        data_descriptor.addAdditionalIndexes(idx_val);
      }
    }
    return data_descriptor;
  }

  write_index(block_writer) {
    for (const block_index in this.series_block_indexes) {
      this.file_index.addSeriesBlockIndexOffsets(block_writer.tell());
      const block = new bddf_pb.DescriptorBlock();
      block.setSeriesBlockIndex(block_index);
      block_writer.write_descriptor_block(block);
    }
    const index_offset = block_writer.tell();
    block_writer.write_descriptor_block(this.descriptor_index);
    block_writer.write_file_end(index_offset);
  }
}

module.exports = {
  FileIndexer,
};

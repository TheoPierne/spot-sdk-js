'use strict';

const { Buffer } = require('node:buffer');
const crypto = require('node:crypto');

const time = require('google-protobuf/google/protobuf/timestamp_pb');
const struct = require('python-struct');

const { AddSeriesError, DataFormatError, SeriesNotUniqueError } = require('./common');

const bddf_pb = require('../../bosdyn/api/bddf_pb');

function _hasherToUint64(hasher) {
  return struct.unpack('>Q', hasher.digest().slice(0, 8))[0];
}

class FileIndexer {
  constructor() {
    this._descriptorIndex = new bddf_pb.DescriptorBlock();
    this._seriesDescriptors = [];
    this._seriesBlockIndexes = [];
  }

  get fileIndex() {
    return this._descriptorIndex.getFileIndex();
  }

  get descriptorIndex() {
    return this._descriptorIndex;
  }

  get seriesBlockIndexes() {
    return this._seriesBlockIndexes;
  }

  seriesDescriptor(seriesIndex) {
    return this._seriesDescriptors[seriesIndex];
  }

  static seriesIdentifierToHash(seriesIdentifier) {
    const hasher = crypto.createHash('sha1');
    hasher.update(Buffer.from(seriesIdentifier.getSeriesType(), 'utf-8').toString());
    for (const key of seriesIdentifier.getSpecMap().keys()) {
      hasher.update(Buffer.from(key, 'utf-8').toString());
      hasher.update(Buffer.from(seriesIdentifier.getSpecMap().get(key), 'utf-8').toString());
    }
    return _hasherToUint64(hasher);
  }

  addSeriesDescriptor(seriesDescriptor, seriesBlockFileOffset) {
    console.assert(seriesDescriptor.getSeriesIndex() === this._seriesDescriptors.length);
    this.fileIndex.addSeriesIdentifiers(seriesDescriptor.getSeriesIdentifier());
    this.fileIndex.addSeriesIdentifierHashes(seriesDescriptor.getIdentifierHash());
    this._seriesDescriptors.push(seriesDescriptor);
    const seriesBlockIndex = new bddf_pb.SeriesBlockIndex()
      .setSeriesIndex(seriesDescriptor.getSeriesIndex())
      .setDescriptorFileOffset(seriesBlockFileOffset);
    this._seriesBlockIndexes.push(seriesBlockIndex);
  }

  addSeries(seriesType, seriesSpec, messageType, podType, annotations, additionalIndexNames, writer) {
    const seriesIndex = this._seriesDescriptors.length;

    const seriesIdentifier = new bddf_pb.SeriesIdentifier().setSeriesType(seriesType);

    for (const key of Object.keys(seriesSpec)) {
      seriesIdentifier.getSpecMap().set(key, seriesSpec[key]);
    }

    const series = new bddf_pb.SeriesDescriptor()
      .setSeriesIndex(seriesIndex)
      .setSeriesIdentifier(seriesIdentifier)
      .setIdentifierHash(this.series_identifier_to_hash(seriesIdentifier));

    for (const prevSeriesIdentifier of this.fileIndex.getSeriesIdentifiersList()) {
      if (prevSeriesIdentifier.getSpecMap().getLength() === seriesIdentifier.getSpecMap().getLength()) {
        throw new SeriesNotUniqueError(`Spec ${seriesIdentifier.getSpecMap()} is not unique within the data file`);
      }
    }

    if (messageType) {
      if (podType) {
        throw new AddSeriesError(`Specified both messageType (${messageType}) and podType (${podType})`);
      }
      series.setMessageType(messageType);
    } else {
      if (!podType) {
        throw new AddSeriesError('Specified neither messageType nor podType');
      }
      series.setPodType(podType);
    }
    if (annotations) {
      for (const key of Object.keys(annotations)) {
        series.getAnnotationsMap().set(key, annotations[key]);
      }
    }
    if (additionalIndexNames) {
      for (const name of additionalIndexNames) {
        series.addAdditionalIndexNames(name);
      }
    }

    const descriptor = new bddf_pb.DescriptorBlock().setSeriesDescriptor(series);
    const seriesBlockFileOffset = writer.tell();
    writer.writeDescriptorBlock(descriptor);
    this.addSeriesDescriptor(series, seriesBlockFileOffset);
    return seriesIndex;
  }

  index_data_block(series_index, timestamp_nsec, file_offset, nbytes, additional_indexes) {
    const series_block_index = this._seriesBlockIndexes[series_index];
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
    const series_descriptor = this._seriesDescriptors[series_index];
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
    for (const block_index in this.seriesBlockIndexes) {
      this.fileIndex.addSeriesBlockIndexOffsets(block_writer.tell());
      const block = new bddf_pb.DescriptorBlock();
      block.setSeriesBlockIndex(block_index);
      block_writer.write_descriptor_block(block);
    }
    const index_offset = block_writer.tell();
    block_writer.write_descriptor_block(this.descriptorIndex);
    block_writer.write_file_end(index_offset);
  }
}

module.exports = {
  FileIndexer,
};

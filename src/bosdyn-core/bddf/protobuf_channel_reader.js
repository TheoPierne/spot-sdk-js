/**
 * @file A class for reading a single channel of Protobuf data from a DataFile.
 */

'use strict';

const { protoTypeName } = require('../../bosdyn-client/util');

/**
 * A class for reading a single channel of Protobuf data from a DataFile.
 */
class ProtobufChannelReader {
  constructor(protobufReader, protobufType, channelName = null) {
    /** @type {import('./protobuf_reader').ProtobufReader} */
    this._protobufReader = protobufReader;
    this._protobufType = protobufType;
    this._channelName = channelName;
    this._descriptor = null;
    this._numNessages = null;
  }

  /**
   * @template {new (...args: any[]) => any} T
   * @this {T}
   * @param {import('./protobuf_reader').ProtobufReader} protobufReader
   * @param {Function} protobufType The class of the messages.
   * @param {?string} [channelName] The full name of the type by default.
   * @returns {Promise<InstanceType<T>>}
   */
  static async create(protobufReader, protobufType, channelName = null) {
    /** @type {InstanceType<T>} */
    const channelReader = new this(protobufReader, protobufType, channelName);
    // The full name of any type (only the ones of bosdyn.api were found, from the global proto of google-protobuf).
    const typeName = protoTypeName(protobufType);
    if (typeName === null) throw new TypeError(`Not a protobuf message class: ${protobufType?.name}`);

    channelReader._channelName = channelName || typeName;
    channelReader._seriesIndex = await channelReader._protobufReader.seriesIndex(channelReader._channelName, typeName);

    return channelReader;
  }

  /**
   * The SeriesDescriptor of the channel.
   * @type {Promise<import('../../bosdyn/api/bddf_pb').SeriesDescriptor>}
   */
  get seriesDescriptor() {
    if (this._descriptor === null) {
      this._descriptor = this._protobufReader.seriesIndexToDescriptor(this._seriesIndex);
    }
    return this._descriptor;
  }

  /**
   * Number of messages in this series.
   */
  get numMessages() {
    if (this._numNessages === null) {
      this._numNessages = this._protobufReader.dataReader.numDataBlocks(this._seriesIndex);
    }
    return this._numNessages;
  }

  /**
   * Get the specified message in the series, as a deserialized protobuf.
   */
  async getMessage(indexInSeries) {
    const [, timestamp, msg] = await this._protobufReader.getMessage(
      this._seriesIndex,
      this._protobufType,
      indexInSeries,
    );
    return [timestamp, msg];
  }

  iterate() {
    return new Iterator(this);
  }

  /** The [timestamp, message] of the channel: for await (const [timestamp, message] of channelReader). */
  [Symbol.asyncIterator]() {
    return this.iterate()[Symbol.asyncIterator]();
  }
}

class Iterator {
  constructor(channelReader) {
    /** @type {ProtobufChannelReader} */
    this._channelReader = channelReader;
    this._index = 0;
  }

  // All the messages (the first one only was given).
  async *[Symbol.asyncIterator]() {
    const numMessages = await this._channelReader.numMessages;
    while (this._index < numMessages) {
      const msg = await this._channelReader.getMessage(this._index);
      this._index += 1;
      yield msg;
    }
  }
}

module.exports = {
  ProtobufChannelReader,
};

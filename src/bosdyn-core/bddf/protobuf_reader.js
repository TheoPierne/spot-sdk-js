/**
 * @file A class for reading Protobuf data from a DataFile.
 */

'use strict';

const { MessageReader } = require('./message_reader');

/**
 * A class for reading Protobuf data from a DataFile.
 *
 * Methods throw ParseError if there is a problem with the format of the file.
 */
class ProtobufReader extends MessageReader {
  /**
   * Create a reader of the protobuf series of a DataReader, like ProtobufReader(data_reader) in Python.
   * @template {new (...args: any[]) => any} T
   * @this {T}
   * @param {import('./data_reader').DataReader} dataReader
   * @returns {Promise<InstanceType<T>>}
   */
  static create(dataReader) {
    // Only the series of protobuf messages (the requireProtobuf of the constructor was lost: a text/plain series was
    // deserialized as protobuf).
    return super.create(dataReader, true);
  }

  /**
   * Return a deserialized protobuf from bytes stored in the file.
   */
  async getMessage(seriesIndex, protobufType, indexInSeries) {
    const [desc, timestampNsec, data] = await this.getBlob(seriesIndex, indexInSeries);
    const protobuf = protobufType.deserializeBinary(data);
    return [desc, timestampNsec, protobuf];
  }
}

module.exports = {
  ProtobufReader,
};

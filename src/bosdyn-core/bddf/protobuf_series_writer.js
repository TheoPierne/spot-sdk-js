/**
 * @file Class for registering a series which stores protobuf messages in a message series.
 */

'use strict';

const { MessageChannel } = require('./bosdyn');
const { PROTOBUF_CONTENT_TYPE } = require('./common');

const { protoTypeName } = require('../../bosdyn-client/util');

/**
 * A class for registering a series which stores protobuf messages in a message series.
 *
 * The series is named by a 'channel_name' which defaults to the full type name of the protobuf type.
 */
class ProtobufSeriesWriter {
  constructor(
    dataWriter,
    protobufType,
    channelName = null,
    isMetadata = false,
    annotations = null,
    additionalIndexNames = null,
  ) {
    /**
     * @type {import('./data_writer').DataWriter}
     */
    this._dataWriter = dataWriter;
    this._protobufType = protobufType;

    // The full name of any type (the index of bosdyn.api gave null for the others, e.g. google.protobuf.Timestamp).
    this._typeName = protoTypeName(protobufType);
    if (this._typeName === null) throw new TypeError(`Not a protobuf message class: ${protobufType?.name}`);
    this._channelName = channelName || this._typeName;
    this._seriesSpec = { 'bosdyn:channel': this._channelName };
    this._seriesIndex = this._dataWriter.addMessageSeries(
      this.seriesType,
      this.seriesSpec,
      PROTOBUF_CONTENT_TYPE,
      this._typeName,
      isMetadata,
      annotations,
      additionalIndexNames,
    );
  }

  /**
   * Store protobuf in the file.
   * @param {bigint|number|string} timestampNsec Nanoseconds since the Unix epoch: exact as a BigInt.
   * @param {import('google-protobuf').Message} protobuf A protobuf message, not serialized.
   * @param {?Array<bigint|number|string>} [additionalIndexes=null] The values of the additional indexes of the
   * series (int64, e.g. other timestamps in nanoseconds): exact as BigInts or strings.
   * @throws {import('./common').DataFormatError} The additional indexes are not valid for this series.
   */
  write(timestampNsec, protobuf, additionalIndexes = null) {
    this._dataWriter.writeData(this._seriesIndex, timestampNsec, protobuf.serializeBinary(), additionalIndexes);
  }

  /**
   * Return the series type string.
   */
  get seriesType() {
    return MessageChannel.SERIES_TYPE;
  }

  /**
   * Return the seriesSpec for the series.
   */
  get seriesSpec() {
    return this._seriesSpec;
  }
}

module.exports = {
  ProtobufSeriesWriter,
};

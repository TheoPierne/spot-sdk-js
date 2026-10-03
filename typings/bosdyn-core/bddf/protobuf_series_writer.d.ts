/**
 * A class for registering a series which stores protobuf messages in a message series.
 *
 * The series is named by a 'channel_name' which defaults to the full type name of the protobuf type.
 */
export class ProtobufSeriesWriter {
    constructor(dataWriter: any, protobufType: any, channelName?: null, isMetadata?: boolean, annotations?: null, additionalIndexNames?: null);
    /**
     * @type {import('./data_writer').DataWriter}
     */
    _dataWriter: import("./data_writer").DataWriter;
    _protobufType: any;
    _typeName: string;
    _channelName: string;
    _seriesSpec: {
        'bosdyn:channel': string;
    };
    _seriesIndex: number;
    /**
     * Store protobuf in the file.
     * @param {bigint|number|string} timestampNsec Nanoseconds since the Unix epoch: exact as a BigInt.
     * @param {import('google-protobuf').Message} protobuf A protobuf message, not serialized.
     * @param {?Array<bigint|number|string>} [additionalIndexes=null] The values of the additional indexes of the
     * series (int64, e.g. other timestamps in nanoseconds): exact as BigInts or strings.
     * @throws {import('./common').DataFormatError} The additional indexes are not valid for this series.
     */
    write(timestampNsec: bigint | number | string, protobuf: import("google-protobuf").Message, additionalIndexes?: Array<bigint | number | string> | null): void;
    /**
     * Return the series type string.
     */
    get seriesType(): string;
    /**
     * Return the seriesSpec for the series.
     */
    get seriesSpec(): {
        'bosdyn:channel': string;
    };
}

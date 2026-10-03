/**
 * A class for reading a single channel of Protobuf data from a DataFile.
 */
export class ProtobufChannelReader {
    /**
     * @template {new (...args: any[]) => any} T
     * @this {T}
     * @param {import('./protobuf_reader').ProtobufReader} protobufReader
     * @param {Function} protobufType The class of the messages.
     * @param {?string} [channelName] The full name of the type by default.
     * @returns {Promise<InstanceType<T>>}
     */
    static create<T extends new (...args: any[]) => any>(this: T, protobufReader: import("./protobuf_reader").ProtobufReader, protobufType: Function, channelName?: string | null): Promise<InstanceType<T>>;
    constructor(protobufReader: any, protobufType: any, channelName?: null);
    /** @type {import('./protobuf_reader').ProtobufReader} */
    _protobufReader: import("./protobuf_reader").ProtobufReader;
    _protobufType: any;
    _channelName: any;
    _descriptor: Promise<import("../../../src/bosdyn/api/bddf_pb").SeriesDescriptor> | null;
    _numNessages: Promise<number> | null;
    /**
     * The SeriesDescriptor of the channel.
     * @type {Promise<import('../../../src/bosdyn/api/bddf_pb').SeriesDescriptor>}
     */
    get seriesDescriptor(): Promise<import("../../../src/bosdyn/api/bddf_pb").SeriesDescriptor>;
    /**
     * Number of messages in this series.
     */
    get numMessages(): Promise<number>;
    /**
     * Get the specified message in the series, as a deserialized protobuf.
     */
    getMessage(indexInSeries: any): Promise<any[]>;
    iterate(): Iterator;
    /** The [timestamp, message] of the channel: for await (const [timestamp, message] of channelReader). */
    [Symbol.asyncIterator](): AsyncGenerator<any[], void, unknown>;
}
declare class Iterator {
    constructor(channelReader: any);
    /** @type {ProtobufChannelReader} */
    _channelReader: ProtobufChannelReader;
    _index: number;
    [Symbol.asyncIterator](): AsyncGenerator<any[], void, unknown>;
}
export {};

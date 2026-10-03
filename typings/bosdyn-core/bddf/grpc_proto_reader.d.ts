export type Message = import("google-protobuf").Message;
export type GrpcServiceReader = import("./grpc_service_reader").GrpcServiceReader;
export type SeriesDescriptor = import("../../../src/bosdyn/api/bddf_pb").SeriesDescriptor;
/**
 * @typedef {import('google-protobuf').Message} Message
 */
/**
 * @typedef {import('./grpc_service_reader').GrpcServiceReader} GrpcServiceReader
 */
/**
 * @typedef {import('../../../src/bosdyn/api/bddf_pb').SeriesDescriptor} SeriesDescriptor
 */
/**
 * Reads a particular series of GRPC request or response messages from a bddf file.
 */
export class GrpcProtoReader {
    /**
     * @param {GrpcServiceReader} serviceReader
     * @param {number} seriesIndex
     * @param {string} seriesType
     * @param {Message} protoType
     * @param {SeriesDescriptor} seriesDescriptor
     */
    constructor(serviceReader: GrpcServiceReader, seriesIndex: number, seriesType: string, protoType: Message, seriesDescriptor: SeriesDescriptor);
    /**
     * @type {GrpcServiceReader}
     */
    _serviceReader: GrpcServiceReader;
    /**
     * @type {number}
     */
    _seriesIndex: number;
    /**
     * @type {string}
     */
    _seriesType: string;
    /**
     * @type {Message}
     */
    _protoType: Message;
    /**
     * @type {SeriesDescriptor}
     */
    _seriesDescriptor: SeriesDescriptor;
    /**
     * @type {Promise<number>}
     */
    _numMessages: Promise<number>;
    /**
     * Number of messages in of the given type.
     * @type {Promise<number>}
     */
    get numMessages(): Promise<number>;
    /**
     * Get a message from the series by its index number in the series.
     * @param {number} indexInSeries
     * @returns {Promise<[number, Message]>}
     */
    getMessage(indexInSeries: number): Promise<[number, Message]>;
}

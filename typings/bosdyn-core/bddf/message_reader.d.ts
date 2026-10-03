/**
 * A class for reading message data from a DataFile.
 *
 * Methods throw ParseError if there is a problem with the format of the file.
 */
export class MessageReader {
    /**
     * @template {new (...args: any[]) => any} T
     * @this {T}
     * @param {import('./data_reader').DataReader} dataReader
     * @param {boolean} [requireProtobuf]
     * @returns {Promise<InstanceType<T>>}
     */
    static create<T extends new (...args: any[]) => any>(this: T, dataReader: import("./data_reader").DataReader, requireProtobuf?: boolean): Promise<InstanceType<T>>;
    constructor(dataReader: any);
    /**
     * @type {import('./data_reader').DataReader}
     */
    _dataReader: import("./data_reader").DataReader;
    _channelNameToSeriesDescriptor: {};
    _channelNameToSeriesIndex: {};
    /**
     * Return underlying DataReader this object is using.
     */
    get dataReader(): import("./data_reader").DataReader;
    /**
     * Return a mapping of {channel name -> series descriptor} for message series.
     */
    get channelNameToSeriesDescriptor(): {};
    /**
     * Return series index (int) to access SeriesDescriptors and messages.
     */
    seriesIndex(channelName: any, messageType?: null): Promise<any>;
    /**
     * Given a series index, return the associated SeriesDescriptor. Python reads file_index.series_descriptor, which does
     * not exist (an AttributeError): the SeriesDescriptor of the DataReader, as documented (the SeriesIdentifier was
     * returned).
     * @param {number} seriesIndex index from the seriesIndex() call
     * @returns {Promise<import('../../../src/bosdyn/api/bddf_pb').SeriesDescriptor>}
     */
    seriesIndexToDescriptor(seriesIndex: number): Promise<import("../../../src/bosdyn/api/bddf_pb").SeriesDescriptor>;
    /**
     * Return binary data from message stored in the file.
     */
    getBlob(seriesIndex: any, indexInSeries: any): Promise<[import("../../../src/bosdyn/api/bddf_pb").DataDescriptor, bigint, Buffer<ArrayBufferLike>]>;
}

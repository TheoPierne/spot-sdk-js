/**
 * A class for reading GRPC data from a DataFile.
 *
 * Methods throw ParseError if there is a problem with the format of the file.
 */
export class GrpcReader {
    /**
     * @template {new (...args: any[]) => any} T
     * @this {T}
     * @param {import('./data_reader').DataReader} dataReader
     * @param {any[]} protobufClasses
     * @returns {Promise<InstanceType<T>>}
     */
    static create<T extends new (...args: any[]) => any>(this: T, dataReader: import("./data_reader").DataReader, protobufClasses: any[]): Promise<InstanceType<T>>;
    constructor(dataReader: any);
    _dataReader: any;
    _serviceNameToReader: {};
    _seriesIndexToReader: {};
    _protoNameToReader: {};
    /**
     * Return underlying DataReader this object is using.
     */
    get dataReader(): any;
    /**
     * Return the GrpcProtoReader for protobuf messages with the specified type name.
     * @param {string} protoName
     * @returns {import('./grpc_proto_reader').GrpcProtoReader}
     */
    getProtoReader(protoName: string): import("./grpc_proto_reader").GrpcProtoReader;
    /**
     * Return a deserialized protobuf from bytes stored in the file.
     */
    getMessage(seriesIndex: any, indexInSeries: any): any;
}

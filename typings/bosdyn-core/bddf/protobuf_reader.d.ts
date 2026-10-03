/**
 * A class for reading Protobuf data from a DataFile.
 *
 * Methods throw ParseError if there is a problem with the format of the file.
 */
export class ProtobufReader extends MessageReader {
    /**
     * Create a reader of the protobuf series of a DataReader, like ProtobufReader(data_reader) in Python.
     * @template {new (...args: any[]) => any} T
     * @this {T}
     * @param {import('./data_reader').DataReader} dataReader
     * @returns {Promise<InstanceType<T>>}
     */
    static create<T extends new (...args: any[]) => any>(this: T, dataReader: import("./data_reader").DataReader): Promise<InstanceType<T>>;
    /**
     * Return a deserialized protobuf from bytes stored in the file.
     */
    getMessage(seriesIndex: any, protobufType: any, indexInSeries: any): Promise<any[]>;
}
import { MessageReader } from "./message_reader";

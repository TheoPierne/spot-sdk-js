/**
 * A container for the GrpcProtoReaders associated with a given service in a bddf file.
 */
export class GrpcServiceReader {
    constructor(grpcReader: any, serviceName: any);
    _grpcReader: any;
    _serviceName: any;
    _typeNameToReader: {};
    /**
     * Accessor for the DataReader used by this object.
     */
    get dataReader(): any;
    /**
     * Returns a GrpcProtoReader for messages with the specified protobuf type name.
     */
    getProtoReader(typeName: any): any;
    /**
     * Create and return a GrpcProtoReader for the given series in the bddf file.
     */
    addProtoReader(seriesIndex: any, protoType: any, seriesType: any, seriesDescriptor: any): GrpcProtoReader;
}
import { GrpcProtoReader } from "./grpc_proto_reader";

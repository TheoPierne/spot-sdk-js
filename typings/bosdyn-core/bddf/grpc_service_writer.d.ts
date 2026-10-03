/**
 * A class for logging GRPC request and response messages.
 */
export class GrpcServiceWriter {
    constructor(dataWriter: any, serviceName: any);
    /** @type {import('./data_writer').DataWriter} */
    _dataWriter: import("./data_writer").DataWriter;
    _serviceName: any;
    _requestTypes: {};
    _responseTypes: {};
    /**
     * Store request protobuf in the file.
     */
    logRequest(protobuf: any): void;
    /**
     * Store response protobuf in the file.
     */
    logResponse(protobuf: any): void;
    _getSeriesIndex(protobuf: any, isRequest: any): any;
}

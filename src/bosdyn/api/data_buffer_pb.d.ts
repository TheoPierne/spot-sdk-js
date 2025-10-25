// package: bosdyn.api
// file: bosdyn/api/data_buffer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../bosdyn/api/header_pb";
import * as bosdyn_api_parameter_pb from "../../bosdyn/api/parameter_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class RecordTextMessagesRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RecordTextMessagesRequest;
    clearTextMessagesList(): void;
    getTextMessagesList(): Array<TextMessage>;
    setTextMessagesList(value: Array<TextMessage>): RecordTextMessagesRequest;
    addTextMessages(value?: TextMessage, index?: number): TextMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordTextMessagesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RecordTextMessagesRequest): RecordTextMessagesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordTextMessagesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordTextMessagesRequest;
    static deserializeBinaryFromReader(message: RecordTextMessagesRequest, reader: jspb.BinaryReader): RecordTextMessagesRequest;
}

export namespace RecordTextMessagesRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        textMessagesList: Array<TextMessage.AsObject>,
    }
}

export class RecordOperatorCommentsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RecordOperatorCommentsRequest;
    clearOperatorCommentsList(): void;
    getOperatorCommentsList(): Array<OperatorComment>;
    setOperatorCommentsList(value: Array<OperatorComment>): RecordOperatorCommentsRequest;
    addOperatorComments(value?: OperatorComment, index?: number): OperatorComment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordOperatorCommentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RecordOperatorCommentsRequest): RecordOperatorCommentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordOperatorCommentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordOperatorCommentsRequest;
    static deserializeBinaryFromReader(message: RecordOperatorCommentsRequest, reader: jspb.BinaryReader): RecordOperatorCommentsRequest;
}

export namespace RecordOperatorCommentsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        operatorCommentsList: Array<OperatorComment.AsObject>,
    }
}

export class RecordDataBlobsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RecordDataBlobsRequest;
    clearBlobDataList(): void;
    getBlobDataList(): Array<DataBlob>;
    setBlobDataList(value: Array<DataBlob>): RecordDataBlobsRequest;
    addBlobData(value?: DataBlob, index?: number): DataBlob;
    getSync(): boolean;
    setSync(value: boolean): RecordDataBlobsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordDataBlobsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RecordDataBlobsRequest): RecordDataBlobsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordDataBlobsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordDataBlobsRequest;
    static deserializeBinaryFromReader(message: RecordDataBlobsRequest, reader: jspb.BinaryReader): RecordDataBlobsRequest;
}

export namespace RecordDataBlobsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        blobDataList: Array<DataBlob.AsObject>,
        sync: boolean,
    }
}

export class RecordSignalTicksRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RecordSignalTicksRequest;
    clearTickDataList(): void;
    getTickDataList(): Array<SignalTick>;
    setTickDataList(value: Array<SignalTick>): RecordSignalTicksRequest;
    addTickData(value?: SignalTick, index?: number): SignalTick;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordSignalTicksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RecordSignalTicksRequest): RecordSignalTicksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordSignalTicksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordSignalTicksRequest;
    static deserializeBinaryFromReader(message: RecordSignalTicksRequest, reader: jspb.BinaryReader): RecordSignalTicksRequest;
}

export namespace RecordSignalTicksRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        tickDataList: Array<SignalTick.AsObject>,
    }
}

export class RecordEventsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RecordEventsRequest;
    clearEventsList(): void;
    getEventsList(): Array<Event>;
    setEventsList(value: Array<Event>): RecordEventsRequest;
    addEvents(value?: Event, index?: number): Event;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RecordEventsRequest): RecordEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordEventsRequest;
    static deserializeBinaryFromReader(message: RecordEventsRequest, reader: jspb.BinaryReader): RecordEventsRequest;
}

export namespace RecordEventsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        eventsList: Array<Event.AsObject>,
    }
}

export class TextMessage extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): TextMessage;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): TextMessage;
    getSource(): string;
    setSource(value: string): TextMessage;
    getLevel(): TextMessage.Level;
    setLevel(value: TextMessage.Level): TextMessage;
    getTag(): string;
    setTag(value: string): TextMessage;
    getFilename(): string;
    setFilename(value: string): TextMessage;
    getLineNumber(): number;
    setLineNumber(value: number): TextMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextMessage.AsObject;
    static toObject(includeInstance: boolean, msg: TextMessage): TextMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextMessage;
    static deserializeBinaryFromReader(message: TextMessage, reader: jspb.BinaryReader): TextMessage;
}

export namespace TextMessage {
    export type AsObject = {
        message: string,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        source: string,
        level: TextMessage.Level,
        tag: string,
        filename: string,
        lineNumber: number,
    }

    export enum Level {
    LEVEL_UNKNOWN = 0,
    LEVEL_DEBUG = 1,
    LEVEL_INFO = 2,
    LEVEL_WARN = 3,
    LEVEL_ERROR = 4,
    }

}

export class OperatorComment extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): OperatorComment;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): OperatorComment;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperatorComment.AsObject;
    static toObject(includeInstance: boolean, msg: OperatorComment): OperatorComment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperatorComment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperatorComment;
    static deserializeBinaryFromReader(message: OperatorComment, reader: jspb.BinaryReader): OperatorComment;
}

export namespace OperatorComment {
    export type AsObject = {
        message: string,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class DataBlob extends jspb.Message { 

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): DataBlob;
    getChannel(): string;
    setChannel(value: string): DataBlob;
    getTypeId(): string;
    setTypeId(value: string): DataBlob;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): DataBlob;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataBlob.AsObject;
    static toObject(includeInstance: boolean, msg: DataBlob): DataBlob.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataBlob, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataBlob;
    static deserializeBinaryFromReader(message: DataBlob, reader: jspb.BinaryReader): DataBlob;
}

export namespace DataBlob {
    export type AsObject = {
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        channel: string,
        typeId: string,
        data: Uint8Array | string,
    }
}

export class SignalSchema extends jspb.Message { 
    clearVarsList(): void;
    getVarsList(): Array<SignalSchema.Variable>;
    setVarsList(value: Array<SignalSchema.Variable>): SignalSchema;
    addVars(value?: SignalSchema.Variable, index?: number): SignalSchema.Variable;
    getSchemaName(): string;
    setSchemaName(value: string): SignalSchema;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignalSchema.AsObject;
    static toObject(includeInstance: boolean, msg: SignalSchema): SignalSchema.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignalSchema, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignalSchema;
    static deserializeBinaryFromReader(message: SignalSchema, reader: jspb.BinaryReader): SignalSchema;
}

export namespace SignalSchema {
    export type AsObject = {
        varsList: Array<SignalSchema.Variable.AsObject>,
        schemaName: string,
    }


    export class Variable extends jspb.Message { 
        getName(): string;
        setName(value: string): Variable;
        getType(): SignalSchema.Variable.Type;
        setType(value: SignalSchema.Variable.Type): Variable;
        getIsTime(): boolean;
        setIsTime(value: boolean): Variable;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Variable.AsObject;
        static toObject(includeInstance: boolean, msg: Variable): Variable.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Variable, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Variable;
        static deserializeBinaryFromReader(message: Variable, reader: jspb.BinaryReader): Variable;
    }

    export namespace Variable {
        export type AsObject = {
            name: string,
            type: SignalSchema.Variable.Type,
            isTime: boolean,
        }

        export enum Type {
    TYPE_UNKNOWN = 0,
    TYPE_INT8 = 1,
    TYPE_INT16 = 2,
    TYPE_INT32 = 3,
    TYPE_INT64 = 4,
    TYPE_UINT8 = 5,
    TYPE_UINT16 = 6,
    TYPE_UINT32 = 7,
    TYPE_UINT64 = 8,
    TYPE_FLOAT32 = 9,
    TYPE_FLOAT64 = 10,
        }

    }

}

export class SignalSchemaId extends jspb.Message { 
    getSchemaId(): number;
    setSchemaId(value: number): SignalSchemaId;

    hasSchema(): boolean;
    clearSchema(): void;
    getSchema(): SignalSchema | undefined;
    setSchema(value?: SignalSchema): SignalSchemaId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignalSchemaId.AsObject;
    static toObject(includeInstance: boolean, msg: SignalSchemaId): SignalSchemaId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignalSchemaId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignalSchemaId;
    static deserializeBinaryFromReader(message: SignalSchemaId, reader: jspb.BinaryReader): SignalSchemaId;
}

export namespace SignalSchemaId {
    export type AsObject = {
        schemaId: number,
        schema?: SignalSchema.AsObject,
    }
}

export class SignalTick extends jspb.Message { 
    getSequenceId(): number;
    setSequenceId(value: number): SignalTick;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): SignalTick;
    getSource(): string;
    setSource(value: string): SignalTick;
    getSchemaId(): number;
    setSchemaId(value: number): SignalTick;
    getEncoding(): SignalTick.Encoding;
    setEncoding(value: SignalTick.Encoding): SignalTick;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): SignalTick;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignalTick.AsObject;
    static toObject(includeInstance: boolean, msg: SignalTick): SignalTick.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignalTick, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignalTick;
    static deserializeBinaryFromReader(message: SignalTick, reader: jspb.BinaryReader): SignalTick;
}

export namespace SignalTick {
    export type AsObject = {
        sequenceId: number,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        source: string,
        schemaId: number,
        encoding: SignalTick.Encoding,
        data: Uint8Array | string,
    }

    export enum Encoding {
    ENCODING_UNKNOWN = 0,
    ENCODING_RAW = 1,
    }

}

export class Event extends jspb.Message { 
    getType(): string;
    setType(value: string): Event;
    getDescription(): string;
    setDescription(value: string): Event;
    getSource(): string;
    setSource(value: string): Event;
    getId(): string;
    setId(value: string): Event;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): Event;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): Event;
    getLevel(): Event.Level;
    setLevel(value: Event.Level): Event;
    clearParametersList(): void;
    getParametersList(): Array<bosdyn_api_parameter_pb.Parameter>;
    setParametersList(value: Array<bosdyn_api_parameter_pb.Parameter>): Event;
    addParameters(value?: bosdyn_api_parameter_pb.Parameter, index?: number): bosdyn_api_parameter_pb.Parameter;
    getLogPreserveHint(): Event.LogPreserveHint;
    setLogPreserveHint(value: Event.LogPreserveHint): Event;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Event.AsObject;
    static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Event;
    static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
    export type AsObject = {
        type: string,
        description: string,
        source: string,
        id: string,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        level: Event.Level,
        parametersList: Array<bosdyn_api_parameter_pb.Parameter.AsObject>,
        logPreserveHint: Event.LogPreserveHint,
    }

    export enum Level {
    LEVEL_UNSET = 0,
    LEVEL_LOW = 1,
    LEVEL_MEDIUM = 2,
    LEVEL_HIGH = 3,
    LEVEL_MISSION_CRITICAL = 4,
    LEVEL_SYSTEM_CRITICAL = 5,
    }

    export enum LogPreserveHint {
    LOG_PRESERVE_HINT_UNSET = 0,
    LOG_PRESERVE_HINT_NORMAL = 1,
    LOG_PRESERVE_HINT_PRESERVE = 2,
    }

}

export class RecordTextMessagesResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RecordTextMessagesResponse;
    clearErrorsList(): void;
    getErrorsList(): Array<RecordTextMessagesResponse.Error>;
    setErrorsList(value: Array<RecordTextMessagesResponse.Error>): RecordTextMessagesResponse;
    addErrors(value?: RecordTextMessagesResponse.Error, index?: number): RecordTextMessagesResponse.Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordTextMessagesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RecordTextMessagesResponse): RecordTextMessagesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordTextMessagesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordTextMessagesResponse;
    static deserializeBinaryFromReader(message: RecordTextMessagesResponse, reader: jspb.BinaryReader): RecordTextMessagesResponse;
}

export namespace RecordTextMessagesResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        errorsList: Array<RecordTextMessagesResponse.Error.AsObject>,
    }


    export class Error extends jspb.Message { 
        getType(): RecordTextMessagesResponse.Error.Type;
        setType(value: RecordTextMessagesResponse.Error.Type): Error;
        getMessage(): string;
        setMessage(value: string): Error;
        getIndex(): number;
        setIndex(value: number): Error;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Error.AsObject;
        static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Error;
        static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
    }

    export namespace Error {
        export type AsObject = {
            type: RecordTextMessagesResponse.Error.Type,
            message: string,
            index: number,
        }

        export enum Type {
    NONE = 0,
    CLIENT_ERROR = 1,
    SERVER_ERROR = 2,
        }

    }

}

export class RecordOperatorCommentsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RecordOperatorCommentsResponse;
    clearErrorsList(): void;
    getErrorsList(): Array<RecordOperatorCommentsResponse.Error>;
    setErrorsList(value: Array<RecordOperatorCommentsResponse.Error>): RecordOperatorCommentsResponse;
    addErrors(value?: RecordOperatorCommentsResponse.Error, index?: number): RecordOperatorCommentsResponse.Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordOperatorCommentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RecordOperatorCommentsResponse): RecordOperatorCommentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordOperatorCommentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordOperatorCommentsResponse;
    static deserializeBinaryFromReader(message: RecordOperatorCommentsResponse, reader: jspb.BinaryReader): RecordOperatorCommentsResponse;
}

export namespace RecordOperatorCommentsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        errorsList: Array<RecordOperatorCommentsResponse.Error.AsObject>,
    }


    export class Error extends jspb.Message { 
        getType(): RecordOperatorCommentsResponse.Error.Type;
        setType(value: RecordOperatorCommentsResponse.Error.Type): Error;
        getMessage(): string;
        setMessage(value: string): Error;
        getIndex(): number;
        setIndex(value: number): Error;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Error.AsObject;
        static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Error;
        static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
    }

    export namespace Error {
        export type AsObject = {
            type: RecordOperatorCommentsResponse.Error.Type,
            message: string,
            index: number,
        }

        export enum Type {
    NONE = 0,
    CLIENT_ERROR = 1,
    SERVER_ERROR = 2,
        }

    }

}

export class RecordDataBlobsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RecordDataBlobsResponse;
    clearErrorsList(): void;
    getErrorsList(): Array<RecordDataBlobsResponse.Error>;
    setErrorsList(value: Array<RecordDataBlobsResponse.Error>): RecordDataBlobsResponse;
    addErrors(value?: RecordDataBlobsResponse.Error, index?: number): RecordDataBlobsResponse.Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordDataBlobsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RecordDataBlobsResponse): RecordDataBlobsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordDataBlobsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordDataBlobsResponse;
    static deserializeBinaryFromReader(message: RecordDataBlobsResponse, reader: jspb.BinaryReader): RecordDataBlobsResponse;
}

export namespace RecordDataBlobsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        errorsList: Array<RecordDataBlobsResponse.Error.AsObject>,
    }


    export class Error extends jspb.Message { 
        getType(): RecordDataBlobsResponse.Error.Type;
        setType(value: RecordDataBlobsResponse.Error.Type): Error;
        getMessage(): string;
        setMessage(value: string): Error;
        getIndex(): number;
        setIndex(value: number): Error;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Error.AsObject;
        static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Error;
        static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
    }

    export namespace Error {
        export type AsObject = {
            type: RecordDataBlobsResponse.Error.Type,
            message: string,
            index: number,
        }

        export enum Type {
    NONE = 0,
    CLIENT_ERROR = 1,
    SERVER_ERROR = 2,
        }

    }

}

export class RecordSignalTicksResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RecordSignalTicksResponse;
    clearErrorsList(): void;
    getErrorsList(): Array<RecordSignalTicksResponse.Error>;
    setErrorsList(value: Array<RecordSignalTicksResponse.Error>): RecordSignalTicksResponse;
    addErrors(value?: RecordSignalTicksResponse.Error, index?: number): RecordSignalTicksResponse.Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordSignalTicksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RecordSignalTicksResponse): RecordSignalTicksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordSignalTicksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordSignalTicksResponse;
    static deserializeBinaryFromReader(message: RecordSignalTicksResponse, reader: jspb.BinaryReader): RecordSignalTicksResponse;
}

export namespace RecordSignalTicksResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        errorsList: Array<RecordSignalTicksResponse.Error.AsObject>,
    }


    export class Error extends jspb.Message { 
        getType(): RecordSignalTicksResponse.Error.Type;
        setType(value: RecordSignalTicksResponse.Error.Type): Error;
        getMessage(): string;
        setMessage(value: string): Error;
        getIndex(): number;
        setIndex(value: number): Error;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Error.AsObject;
        static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Error;
        static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
    }

    export namespace Error {
        export type AsObject = {
            type: RecordSignalTicksResponse.Error.Type,
            message: string,
            index: number,
        }

        export enum Type {
    NONE = 0,
    CLIENT_ERROR = 1,
    SERVER_ERROR = 2,
    INVALID_SCHEMA_ID = 3,
        }

    }

}

export class RecordEventsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RecordEventsResponse;
    clearErrorsList(): void;
    getErrorsList(): Array<RecordEventsResponse.Error>;
    setErrorsList(value: Array<RecordEventsResponse.Error>): RecordEventsResponse;
    addErrors(value?: RecordEventsResponse.Error, index?: number): RecordEventsResponse.Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecordEventsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RecordEventsResponse): RecordEventsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecordEventsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecordEventsResponse;
    static deserializeBinaryFromReader(message: RecordEventsResponse, reader: jspb.BinaryReader): RecordEventsResponse;
}

export namespace RecordEventsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        errorsList: Array<RecordEventsResponse.Error.AsObject>,
    }


    export class Error extends jspb.Message { 
        getType(): RecordEventsResponse.Error.Type;
        setType(value: RecordEventsResponse.Error.Type): Error;
        getMessage(): string;
        setMessage(value: string): Error;
        getIndex(): number;
        setIndex(value: number): Error;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Error.AsObject;
        static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Error;
        static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
    }

    export namespace Error {
        export type AsObject = {
            type: RecordEventsResponse.Error.Type,
            message: string,
            index: number,
        }

        export enum Type {
    NONE = 0,
    CLIENT_ERROR = 1,
    SERVER_ERROR = 2,
        }

    }

}

export class RegisterSignalSchemaRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): RegisterSignalSchemaRequest;

    hasSchema(): boolean;
    clearSchema(): void;
    getSchema(): SignalSchema | undefined;
    setSchema(value?: SignalSchema): RegisterSignalSchemaRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterSignalSchemaRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterSignalSchemaRequest): RegisterSignalSchemaRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterSignalSchemaRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterSignalSchemaRequest;
    static deserializeBinaryFromReader(message: RegisterSignalSchemaRequest, reader: jspb.BinaryReader): RegisterSignalSchemaRequest;
}

export namespace RegisterSignalSchemaRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        schema?: SignalSchema.AsObject,
    }
}

export class RegisterSignalSchemaResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): RegisterSignalSchemaResponse;
    getSchemaId(): number;
    setSchemaId(value: number): RegisterSignalSchemaResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterSignalSchemaResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterSignalSchemaResponse): RegisterSignalSchemaResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterSignalSchemaResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterSignalSchemaResponse;
    static deserializeBinaryFromReader(message: RegisterSignalSchemaResponse, reader: jspb.BinaryReader): RegisterSignalSchemaResponse;
}

export namespace RegisterSignalSchemaResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        schemaId: number,
    }
}

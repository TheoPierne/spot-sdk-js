// package: bosdyn.api
// file: bosdyn/api/payload_estimation.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_payload_pb from "../../bosdyn/api/payload_pb";

export class PayloadEstimationCommand extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayloadEstimationCommand.AsObject;
    static toObject(includeInstance: boolean, msg: PayloadEstimationCommand): PayloadEstimationCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayloadEstimationCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayloadEstimationCommand;
    static deserializeBinaryFromReader(message: PayloadEstimationCommand, reader: jspb.BinaryReader): PayloadEstimationCommand;
}

export namespace PayloadEstimationCommand {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
        }
    }

    export class Feedback extends jspb.Message { 
        getStatus(): PayloadEstimationCommand.Feedback.Status;
        setStatus(value: PayloadEstimationCommand.Feedback.Status): Feedback;
        getProgress(): number;
        setProgress(value: number): Feedback;
        getError(): PayloadEstimationCommand.Feedback.Error;
        setError(value: PayloadEstimationCommand.Feedback.Error): Feedback;

        hasEstimatedPayload(): boolean;
        clearEstimatedPayload(): void;
        getEstimatedPayload(): bosdyn_api_payload_pb.Payload | undefined;
        setEstimatedPayload(value?: bosdyn_api_payload_pb.Payload): Feedback;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Feedback.AsObject;
        static toObject(includeInstance: boolean, msg: Feedback): Feedback.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Feedback, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Feedback;
        static deserializeBinaryFromReader(message: Feedback, reader: jspb.BinaryReader): Feedback;
    }

    export namespace Feedback {
        export type AsObject = {
            status: PayloadEstimationCommand.Feedback.Status,
            progress: number,
            error: PayloadEstimationCommand.Feedback.Error,
            estimatedPayload?: bosdyn_api_payload_pb.Payload.AsObject,
        }

        export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_COMPLETED = 1,
    STATUS_SMALL_MASS = 2,
    STATUS_IN_PROGRESS = 3,
    STATUS_ERROR = 4,
        }

        export enum Error {
    ERROR_UNKNOWN = 0,
    ERROR_NONE = 1,
    ERROR_FAILED_STAND = 2,
    ERROR_NO_RESULTS = 3,
        }

    }

}

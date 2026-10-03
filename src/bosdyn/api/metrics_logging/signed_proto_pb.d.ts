// package: bosdyn.api.metrics_logging
// file: bosdyn/api/metrics_logging/signed_proto.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SignedProto extends jspb.Message { 
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): SignedProto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignedProto.AsObject;
    static toObject(includeInstance: boolean, msg: SignedProto): SignedProto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignedProto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignedProto;
    static deserializeBinaryFromReader(message: SignedProto, reader: jspb.BinaryReader): SignedProto;
}

export namespace SignedProto {
    export type AsObject = {
        data: Uint8Array | string,
    }
}

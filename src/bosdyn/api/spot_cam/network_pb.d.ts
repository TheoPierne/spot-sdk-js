// package: bosdyn.api.spot_cam
// file: bosdyn/api/spot_cam/network.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as bosdyn_api_header_pb from "../../../bosdyn/api/header_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class NetworkTuple extends jspb.Message { 

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setAddress(value?: google_protobuf_wrappers_pb.UInt32Value): NetworkTuple;

    hasNetmask(): boolean;
    clearNetmask(): void;
    getNetmask(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setNetmask(value?: google_protobuf_wrappers_pb.UInt32Value): NetworkTuple;

    hasGateway(): boolean;
    clearGateway(): void;
    getGateway(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setGateway(value?: google_protobuf_wrappers_pb.UInt32Value): NetworkTuple;

    hasMtu(): boolean;
    clearMtu(): void;
    getMtu(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMtu(value?: google_protobuf_wrappers_pb.UInt32Value): NetworkTuple;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkTuple.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkTuple): NetworkTuple.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkTuple, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkTuple;
    static deserializeBinaryFromReader(message: NetworkTuple, reader: jspb.BinaryReader): NetworkTuple;
}

export namespace NetworkTuple {
    export type AsObject = {
        address?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        netmask?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        gateway?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        mtu?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    }
}

export class GetNetworkSettingsRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetNetworkSettingsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNetworkSettingsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetNetworkSettingsRequest): GetNetworkSettingsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNetworkSettingsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNetworkSettingsRequest;
    static deserializeBinaryFromReader(message: GetNetworkSettingsRequest, reader: jspb.BinaryReader): GetNetworkSettingsRequest;
}

export namespace GetNetworkSettingsRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetNetworkSettingsResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetNetworkSettingsResponse;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): NetworkTuple | undefined;
    setSettings(value?: NetworkTuple): GetNetworkSettingsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetNetworkSettingsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetNetworkSettingsResponse): GetNetworkSettingsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetNetworkSettingsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetNetworkSettingsResponse;
    static deserializeBinaryFromReader(message: GetNetworkSettingsResponse, reader: jspb.BinaryReader): GetNetworkSettingsResponse;
}

export namespace GetNetworkSettingsResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        settings?: NetworkTuple.AsObject,
    }
}

export class GetSSLCertRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetSSLCertRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSSLCertRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSSLCertRequest): GetSSLCertRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSSLCertRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSSLCertRequest;
    static deserializeBinaryFromReader(message: GetSSLCertRequest, reader: jspb.BinaryReader): GetSSLCertRequest;
}

export namespace GetSSLCertRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetSSLCertResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetSSLCertResponse;
    getCertificate(): string;
    setCertificate(value: string): GetSSLCertResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSSLCertResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSSLCertResponse): GetSSLCertResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSSLCertResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSSLCertResponse;
    static deserializeBinaryFromReader(message: GetSSLCertResponse, reader: jspb.BinaryReader): GetSSLCertResponse;
}

export namespace GetSSLCertResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        certificate: string,
    }
}

export class ICEServer extends jspb.Message { 
    getType(): ICEServer.servertype;
    setType(value: ICEServer.servertype): ICEServer;
    getAddress(): string;
    setAddress(value: string): ICEServer;
    getPort(): number;
    setPort(value: number): ICEServer;
    getTransport(): ICEServer.icetransport;
    setTransport(value: ICEServer.icetransport): ICEServer;

    hasAuth(): boolean;
    clearAuth(): void;
    getAuth(): ICEServer.auth_params | undefined;
    setAuth(value?: ICEServer.auth_params): ICEServer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ICEServer.AsObject;
    static toObject(includeInstance: boolean, msg: ICEServer): ICEServer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ICEServer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ICEServer;
    static deserializeBinaryFromReader(message: ICEServer, reader: jspb.BinaryReader): ICEServer;
}

export namespace ICEServer {
    export type AsObject = {
        type: ICEServer.servertype,
        address: string,
        port: number,
        transport: ICEServer.icetransport,
        auth?: ICEServer.auth_params.AsObject,
    }


    export class auth_params extends jspb.Message { 

        hasUsername(): boolean;
        clearUsername(): void;
        getUsername(): google_protobuf_wrappers_pb.StringValue | undefined;
        setUsername(value?: google_protobuf_wrappers_pb.StringValue): auth_params;

        hasOauth(): boolean;
        clearOauth(): void;
        getOauth(): ICEServer.auth_params.oauth_pair | undefined;
        setOauth(value?: ICEServer.auth_params.oauth_pair): auth_params;

        hasPassword(): boolean;
        clearPassword(): void;
        getPassword(): google_protobuf_wrappers_pb.StringValue | undefined;
        setPassword(value?: google_protobuf_wrappers_pb.StringValue): auth_params;

        getCredentialCase(): auth_params.CredentialCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): auth_params.AsObject;
        static toObject(includeInstance: boolean, msg: auth_params): auth_params.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: auth_params, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): auth_params;
        static deserializeBinaryFromReader(message: auth_params, reader: jspb.BinaryReader): auth_params;
    }

    export namespace auth_params {
        export type AsObject = {
            username?: google_protobuf_wrappers_pb.StringValue.AsObject,
            oauth?: ICEServer.auth_params.oauth_pair.AsObject,
            password?: google_protobuf_wrappers_pb.StringValue.AsObject,
        }


        export class oauth_pair extends jspb.Message { 
            getMackey(): string;
            setMackey(value: string): oauth_pair;
            getAccesstoken(): string;
            setAccesstoken(value: string): oauth_pair;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): oauth_pair.AsObject;
            static toObject(includeInstance: boolean, msg: oauth_pair): oauth_pair.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: oauth_pair, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): oauth_pair;
            static deserializeBinaryFromReader(message: oauth_pair, reader: jspb.BinaryReader): oauth_pair;
        }

        export namespace oauth_pair {
            export type AsObject = {
                mackey: string,
                accesstoken: string,
            }
        }


        export enum CredentialCase {
            CREDENTIAL_NOT_SET = 0,
            OAUTH = 2,
            PASSWORD = 3,
        }

    }


    export enum servertype {
    UNKNOWN = 0,
    STUN = 1,
    TURN = 2,
    }

    export enum icetransport {
    TRANSPORT_UNKNOWN = 0,
    TRANSPORT_UDP = 1,
    TRANSPORT_TCP = 2,
    }

}

export class GetICEConfigurationRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): GetICEConfigurationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetICEConfigurationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetICEConfigurationRequest): GetICEConfigurationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetICEConfigurationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetICEConfigurationRequest;
    static deserializeBinaryFromReader(message: GetICEConfigurationRequest, reader: jspb.BinaryReader): GetICEConfigurationRequest;
}

export namespace GetICEConfigurationRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
    }
}

export class GetICEConfigurationResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): GetICEConfigurationResponse;
    clearServersList(): void;
    getServersList(): Array<ICEServer>;
    setServersList(value: Array<ICEServer>): GetICEConfigurationResponse;
    addServers(value?: ICEServer, index?: number): ICEServer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetICEConfigurationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetICEConfigurationResponse): GetICEConfigurationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetICEConfigurationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetICEConfigurationResponse;
    static deserializeBinaryFromReader(message: GetICEConfigurationResponse, reader: jspb.BinaryReader): GetICEConfigurationResponse;
}

export namespace GetICEConfigurationResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
        serversList: Array<ICEServer.AsObject>,
    }
}

export class SetICEConfigurationRequest extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.RequestHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.RequestHeader): SetICEConfigurationRequest;
    clearServersList(): void;
    getServersList(): Array<ICEServer>;
    setServersList(value: Array<ICEServer>): SetICEConfigurationRequest;
    addServers(value?: ICEServer, index?: number): ICEServer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetICEConfigurationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetICEConfigurationRequest): SetICEConfigurationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetICEConfigurationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetICEConfigurationRequest;
    static deserializeBinaryFromReader(message: SetICEConfigurationRequest, reader: jspb.BinaryReader): SetICEConfigurationRequest;
}

export namespace SetICEConfigurationRequest {
    export type AsObject = {
        header?: bosdyn_api_header_pb.RequestHeader.AsObject,
        serversList: Array<ICEServer.AsObject>,
    }
}

export class SetICEConfigurationResponse extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): bosdyn_api_header_pb.ResponseHeader | undefined;
    setHeader(value?: bosdyn_api_header_pb.ResponseHeader): SetICEConfigurationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetICEConfigurationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetICEConfigurationResponse): SetICEConfigurationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetICEConfigurationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetICEConfigurationResponse;
    static deserializeBinaryFromReader(message: SetICEConfigurationResponse, reader: jspb.BinaryReader): SetICEConfigurationResponse;
}

export namespace SetICEConfigurationResponse {
    export type AsObject = {
        header?: bosdyn_api_header_pb.ResponseHeader.AsObject,
    }
}

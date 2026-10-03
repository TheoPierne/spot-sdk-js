/**
 * Data series for named channels containing a list of messages.
 */
export class MessageChannel extends SeriesIdentifier {
    static CHANNEL: string;
    static KEYS: string[];
}
/**
 * Data series for named channels containing a list of messages.
 */
export class TypedMessageChannel extends SeriesIdentifier {
    static CHANNEL: string;
    static MESSAGE_TYPE: string;
    static KEYS: string[];
}
/**
 * Data series for request protobuf messages to a grpc service.
 */
export class GrpcRequests extends SeriesIdentifier {
    static SERVICE_NAME: string;
    static MESSAGE_TYPE: string;
    static KEYS: string[];
}
/**
 * Data series for response protobuf messages to a grpc service.
 */
export class GrpcResponses extends SeriesIdentifier {
    static SERVICE_NAME: string;
    static MESSAGE_TYPE: string;
    static KEYS: string[];
}
import { SeriesIdentifier } from "./common";

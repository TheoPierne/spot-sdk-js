export type Robot = import("./robot").Robot;
export type TimeSyncEndpoint = import("./time_sync").TimeSyncEndpoint;
/**
 * A client for adding to robot data buffer.
 * @extends {BaseClient<DataBufferServiceClient>}
 */
export class DataBufferClient extends BaseClient<DataBufferServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    logTickSchemas: {};
    _timesyncEndpoint: import("./time_sync").TimeSyncEndpoint | null;
    /**
     * @param {Robot} other
     */
    updateFrom(other: Robot): Promise<void>;
    /**
     * Log text messages to the robot.
     * @param {dataBufferProtos.TextMessage[]} textMessages Sequence of TextMessage protos.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataBufferProtos.RecordTextMessagesResponse>}
     */
    addTextMessages(textMessages: dataBufferProtos.TextMessage[], args?: Object): Promise<dataBufferProtos.RecordTextMessagesResponse>;
    /**
     * Add an operator comment to the robot log.
     * @param {string} msg Text of user comment to log.
     * @param {?Timestamp} robotTimestamp Time of messages, in robot time.
     * If not set, timestamp will be when the robot receives the message.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataBufferProtos.RecordOperatorCommentsResponse>}
     */
    addOperatorComment(msg: string, robotTimestamp?: Timestamp | null, args?: Object): Promise<dataBufferProtos.RecordOperatorCommentsResponse>;
    /**
     * Log blob messages to the data buffer.
     * @param {Uint8Array} data Binary data of one blob.
     * @param {string} typeId Type of binary data of blob. For example, this could be the full
     * name of a protobuf message type.
     * @param {?string} channel The name by which messages are typically queried: often the same as typeId,
     * or of the form '{prefix}/{typeId}'.
     * @param {?Timestamp} robotTimestamp Time of messages, in robot time.
     * @param {boolean} writeSync When set to true, the data blob is committed to the log synchronously.
     * The RPC does not return until the data is written.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataBufferProtos.RecordDataBlobsResponse>}
     */
    addBlob(data: Uint8Array, typeId: string, channel?: string | null, robotTimestamp?: Timestamp | null, writeSync?: boolean, args?: Object): Promise<dataBufferProtos.RecordDataBlobsResponse>;
    /**
     * @typedef {import('google-protobuf').Message} ProtobufMessage
     */
    /**
     * Log protobuf messages to the data buffer.
     * @param {ProtobufMessage} proto Serializable protobuf to log.
     * @param {string} channel Name of channel for data. If not set defaults to proto type name.
     * @param {?Timestamp} robotTimestamp Time of proto, in robot time.
     * @param {boolean} writeSync When set to true, the data blob is committed to the log synchronously.
     * The RPC does not return until the data is written.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataBufferProtos.RecordDataBlobsResponse>}
     */
    addProtobuf(proto: import("google-protobuf").Message, channel?: string, robotTimestamp?: Timestamp | null, writeSync?: boolean, args?: Object): Promise<dataBufferProtos.RecordDataBlobsResponse>;
    /**
     * Log event messages to the robot.
     * @param {dataBufferProtos.Event[]} events Sequence of Event protos.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataBufferProtos.RecordEventsResponse>}
     */
    addEvents(events: dataBufferProtos.Event[], args?: Object): Promise<dataBufferProtos.RecordEventsResponse>;
    /**
     * Log signal schema to the robot.
     * @param {dataBufferProtos.SignalSchema.Variable[]} variables Array of SignalSchema variables defining
     * what is in tick.
     * @param {string} schemaName Name of schema (defined previously by client).
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<string>} The id of the schema (an uint64: a string, exact beyond 2^53).
     */
    registerSignalSchema(variables: dataBufferProtos.SignalSchema.Variable[], schemaName: string, args?: Object): Promise<string>;
    /**
     * Log signal data to the robot data buffer.
     * Schema should be sent before any ticks.
     * @param {Uint8Array|string} data Single hunk of binary data.
     * @param {string|bigint|number} schemaId ID name of schema (obtained from a previous schema registration)
     * @param {dataBufferProtos.SignalTick.Encoding} encoding Encoding of the data
     * @param {number} sequenceId Index of which sequence tick this is
     * @param {string} source String name representing client
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<dataBufferProtos.RecordSignalTicksResponse>}
     */
    addSignalTick(data: Uint8Array | string, schemaId: string | bigint | number, encoding?: dataBufferProtos.SignalTick.Encoding, sequenceId?: number, source?: string, args?: Object): Promise<dataBufferProtos.RecordSignalTicksResponse>;
    /**
     * Return schema id from response, after saving the schema in an object indexed by id.
     * @param {dataBufferProtos.SignalSchema} schema The schema to save
     * @param {dataBufferProtos.RegisterSignalSchemaResponse} response The response
     * @returns {string}
     * @private
     */
    private _saveSchemaId;
    /**
     * Get current time in robot clock basis if possible, null otherwise.
     * @param {string} msgType *
     * @param {ProtobufMessage} proto *
     * @returns {Timestamp}
     */
    nowInRobotBasis(msgType?: string, proto?: import("google-protobuf").Message): Timestamp;
}
/**
 * @typedef {import('./time_sync').TimeSyncEndpoint} TimeSyncEndpoint
 */
/** A given argument could not be used. */
export class InvalidArgument extends BosdynError {
}
/**
 * A winston transport that will publish the logs as text messages to the data-buffer service (Python's
 * LoggingHandler, a logging.Handler): add it to a logger, e.g. `robot.logger.add(handler)`. The messages are queued,
 * and a background loop sends them in batches.
 *
 * Unlike Python, log() is the emit() of Python (emit() is the one of the streams), the filename and line_number of the
 * messages are not set (winston does not know where a message is logged), and close() is async.
 */
export class LoggingHandler {
    /**
     * Convert a winston level to a TextMessage proto level (Python's record_level_to_proto_level()).
     * @param {string} recordLevel A level, e.g. 'warn'.
     * @param {Object<string, number>} [levels=LoggerUtil.levels] The levels of the logger: the lower, the more severe.
     * @returns {dataBufferProtos.TextMessage.Level}
     */
    static recordLevelToProtoLevel(recordLevel: string, levels?: {
        [x: string]: number;
    }): dataBufferProtos.TextMessage.Level;
    /**
     * @param {string} service Name of the service. See LogAnnotationTextMessage.
     * @param {DataBufferClient} dataBufferClient API client that will send log messages.
     * @param {Object} [options] The options below, and the ones of the winston transports (e.g. format).
     * @param {?string} [options.level=null] Level of the transport; null for the level of the logger, like the NOTSET
     * of Python.
     * @param {?TimeSyncEndpoint} [options.timeSyncEndpoint=null] A TimeSyncEndpoint, already synchronized to the remote
     * clock.
     * @param {?number} [options.rpcTimeout=1] Timeout on RPCs made by dataBufferClient, in seconds.
     * @param {number} [options.msgNumLimit=10] If number of messages reaches this number, send data with
     * dataBufferClient.
     * @param {number} [options.msgAgeLimit=1] If messages have been sitting locally for this many seconds, send data
     * with dataBufferClient.
     * @param {boolean} [options.skipRpcs=false] Do not log any messages for RPC sending.
     * @throws {InvalidArgument} The TimeSyncEndpoint is not valid.
     */
    constructor(service: string, dataBufferClient: DataBufferClient, { level, timeSyncEndpoint, rpcTimeout, msgNumLimit, msgAgeLimit, skipRpcs, ...transportOptions }?: {
        level?: string | null | undefined;
        timeSyncEndpoint?: import("./time_sync").TimeSyncEndpoint | null | undefined;
        rpcTimeout?: number | null | undefined;
        msgNumLimit?: number | undefined;
        msgAgeLimit?: number | undefined;
        skipRpcs?: boolean | undefined;
    });
    /**
     * The filters of the infos (the Filterer of Python): functions, or objects with a filter(info) method.
     * @type {Array<function(Object): boolean|{filter: function(Object): boolean}>}
     */
    filters: Array<(arg0: Object) => boolean | {
        filter: (arg0: Object) => boolean;
    }>;
    msgAgeLimit: number;
    msgNumLimit: number;
    rpcTimeout: number | null;
    service: string;
    timeSyncEndpoint: import("./time_sync").TimeSyncEndpoint | null;
    _dumpMsgCount: number;
    _numFailedSends: number;
    _numFailedSendsSequential: number;
    _limitFailedSendsSequential: number;
    _flushEvent: Event;
    _flushEventWaitTime: number;
    _lastEmitTime: number;
    _dataBufferClient: DataBufferClient;
    _msgQueue: any[];
    _shutdownEvent: Event;
    _closing: Promise<void>;
    _threadAlive: boolean;
    _sendThread: Promise<void>;
    /**
     * Queue a message: called by winston for the infos of the level of the transport (Python's emit()).
     * @param {Object} info A winston info.
     * @param {function(): void} callback
     */
    log(info: Object, callback: () => void): void;
    /**
     * @param {Object} info A winston info.
     * @returns {boolean} Whether the info passes all the filters (Python's Filterer.filter()).
     */
    filter(info: Object): boolean;
    /**
     * @param {function(Object): boolean|{filter: function(Object): boolean}} filter A filter of the infos.
     */
    addFilter(filter: (arg0: Object) => boolean | {
        filter: (arg0: Object) => boolean;
    }): void;
    /**
     * @param {function(Object): boolean|{filter: function(Object): boolean}} filter A filter of the infos.
     */
    removeFilter(filter: (arg0: Object) => boolean | {
        filter: (arg0: Object) => boolean;
    }): void;
    /** Send the queued messages without waiting for the limits. */
    flush(): void;
    /**
     * Stop the send loop, and make one last attempt to send the queued messages (the ones which cannot be sent are
     * dumped to stderr). Winston calls it when the transport is removed from its logger.
     * @returns {Promise<void>} It never rejects: Python raises the errors which are not errors of the SDK.
     */
    close(): Promise<void>;
    /** @private */
    private _close;
    /** @returns {boolean} True if the send loop is running (Python's send thread). */
    isThreadAlive(): boolean;
    /**
     * Restart the send loop.
     * @param {DataBufferClient} dataBufferClient API client that will send log messages.
     * @throws {assert.AssertionError} The send loop is still running.
     */
    restart(dataBufferClient: DataBufferClient): void;
    /**
     * Pop all of the message queue, using fallbackLog to try and capture them.
     * @private
     */
    private _dumpMsgQueue;
    /**
     * Handle log messages that were failed to be sent by printing to the console (stderr).
     * @param {string|dataBufferProtos.TextMessage} msg
     */
    fallbackLog(msg: string | dataBufferProtos.TextMessage): void;
    /**
     * @returns {Object} The options of the RPCs (rpcTimeout is in seconds, the timeout of the calls in milliseconds).
     * @private
     */
    private _rpcArgs;
    /**
     * Run the send loop: it stops when the transport is closed, or after too many failed sends in a row.
     * @returns {Promise<void>} It never rejects.
     * @private
     */
    private _startSendThread;
    /** @private */
    private _runSendThread;
    /**
     * Send a batch of messages, with a second attempt after an error of the SDK.
     * @param {dataBufferProtos.TextMessage[]} toSend
     * @returns {Promise<{sent: boolean, sendErrors: number}>}
     * @private
     */
    private _sendMessages;
    /**
     * Convert a winston info to a TextMessage proto (Python's record_to_msg()).
     * @param {Object} info A winston info.
     * @returns {dataBufferProtos.TextMessage}
     */
    recordToMsg(info: Object): dataBufferProtos.TextMessage;
    /**
     * The text of a message (the format() of Python): the output of the format of the transport if it has one, else the
     * message and the stack of its error, like the default formatter of Python. Without the colors of the console (the
     * loggers of LoggerUtil color the objects in the messages).
     * @param {Object} info A winston info.
     * @returns {string}
     * @private
     */
    private _formatMessage;
    /**
     * To ensure all messages have been sent to the best of our ability (`await using`), like the context manager of
     * Python.
     * @returns {Promise<void>}
     */
    [Symbol.asyncDispose](): Promise<void>;
}
/**
 * Identify the logs of the RPCs (their requests and responses) to be able to strip them out (Python checks the module
 * and the function of the records: common.call and common.call_async).
 * @param {Object} info A winston info.
 * @returns {boolean}
 */
export function isNotRpc(info: Object): boolean;
/**
 * Filter out the RecordTextMessages calls that the handler sends so that we do not go into an infinite loop (Python
 * checks the name of the logger of the records, which ends with .DataBufferService.RecordTextMessages).
 * @param {Object} info A winston info.
 * @returns {boolean}
 */
export function isNotTextLog(info: Object): boolean;
/**
 * @typedef {import('./robot').Robot} Robot
 */
/**
 * Add an Event to the Data Buffer.
 * @param {Robot} robot A Robot object.
 * @param {string} eventType The type of event.
 * @param {dataBufferProtos.Event.Level} level The relative importance of the event.
 * @param {string} description A human-readable description of the event.
 * @param {number|Date} startTimestampSecs Start of the event, in local time.
 * @param {number|Date} endTimestampSecs End of the event.  start_timestamp_secs is used if None.
 * @param {string} idStr Unique id for event.  A uuid is generated if None.
 * @param {parameterPb.Parameter[]} parameters Parameters to attach to the event.
 * @param {dataBufferProtos.Event.LogPreserveHint} logPreserveHint Whether event should try to preserve log data.
 * @returns {Promise<dataBufferProtos.RecordEventsResponse>}
 */
export function logEvent(robot: Robot, eventType: string, level: dataBufferProtos.Event.Level, description: string, startTimestampSecs: number | Date, endTimestampSecs?: number | Date, idStr?: string, parameters?: parameterPb.Parameter[], logPreserveHint?: dataBufferProtos.Event.LogPreserveHint): Promise<dataBufferProtos.RecordEventsResponse>;
/**
 * Create a parameter proto from a label and the parameter value, like make_parameter() in Python.
 * @param {string} label
 * @param {boolean|number|bigint|Timestamp|Duration|string} value An integer number or a BigInt is an int_value (a
 * JS number cannot be a float of Python like 2.0: it is the integer 2), another number a float_value.
 * @param {string} [units='']
 * @param {string} [notes='']
 * @returns {?parameterPb.Parameter} null for another type of value.
 * @throws {RangeError} A BigInt beyond 2^53: the int_value of jspb is a number (a BigInt was not a value).
 */
export function makeParameter(label: string, value: boolean | number | bigint | Timestamp | Duration | string, units?: string, notes?: string): parameterPb.Parameter | null;
import { DataBufferServiceClient } from "../../src/bosdyn/api/data_buffer_service_grpc_pb";
import { BaseClient } from "./common";
import dataBufferProtos = require("../../src/bosdyn/api/data_buffer_pb");
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { BosdynError } from "./exceptions";
import { Event } from "../bosdyn-core/event";
import parameterPb = require("../../src/bosdyn/api/parameter_pb");
import { Duration } from "google-protobuf/google/protobuf/duration_pb";

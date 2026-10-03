/**
 * @file Client for the data-buffer service.
 *
 * This allows client code to log the following to the robot's data buffer: text-messages, operator comments, blobs,
 * signal ticks, and protobuf messages.
 */

'use strict';

const assert = require('node:assert');
const process = require('node:process');
const { inspect, stripVTControlCharacters } = require('node:util');

const { Duration } = require('google-protobuf/google/protobuf/duration_pb');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');
const { v1: uuid1 } = require('uuid');
const { Transport } = require('winston');

const { BaseClient, RPC_METHOD, commonHeaderErrors } = require('./common');
const { BosdynError, ResponseError, RpcError } = require('./exceptions');
const { LoggerUtil } = require('./logger_util');
const { NotEstablishedError } = require('./time_sync');
const { protoTypeName } = require('./util');

const dataBufferProtos = require('../bosdyn/api/data_buffer_pb');
const { DataBufferServiceClient } = require('../bosdyn/api/data_buffer_service_grpc_pb');
const parameterPb = require('../bosdyn/api/parameter_pb');
const { Event } = require('../bosdyn-core/event');
const { messageToString } = require('../bosdyn-core/text_format');
const { nowSec, nowTimestamp, toUint64String } = require('../bosdyn-core/util');

/**
 * @typedef {import('./time_sync').TimeSyncEndpoint} TimeSyncEndpoint
 */

// An error of the SDK, like Python (Error of bosdyn.client.exceptions).
/** A given argument could not be used. */
class InvalidArgument extends BosdynError {}

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
async function logEvent(
  robot,
  eventType,
  level,
  description,
  startTimestampSecs,
  endTimestampSecs = null,
  idStr = null,
  parameters = null,
  logPreserveHint = dataBufferProtos.Event.LogPreserveHint.LOG_PRESERVE_HINT_NORMAL,
) {
  /** @type {DataBufferClient} */
  const dataBufferClient = await robot.ensureClient(DataBufferClient.defaultServiceName);

  if (!idStr) idStr = uuid1();

  const timeSync = await robot.timeSync;

  // A Date counts in milliseconds: it was read as seconds.
  const toSecs = time => (time instanceof Date ? time.getTime() / 1000 : time);
  await timeSync.waitForSync();
  const robotStartTimestamp = await timeSync.robotTimestampFromLocalSecs(toSecs(startTimestampSecs));
  let robotEndTimestamp;
  if (endTimestampSecs) {
    robotEndTimestamp = await timeSync.robotTimestampFromLocalSecs(toSecs(endTimestampSecs));
  } else {
    robotEndTimestamp = robotStartTimestamp;
  }

  if (typeof logPreserveHint === 'boolean') {
    if (logPreserveHint) {
      logPreserveHint = dataBufferProtos.Event.LogPreserveHint.LOG_PRESERVE_HINT_PRESERVE;
    } else {
      logPreserveHint = dataBufferProtos.Event.LogPreserveHint.LOG_PRESERVE_HINT_NORMAL;
    }
  }

  const event = new dataBufferProtos.Event()
    .setType(eventType)
    .setDescription(description)
    .setSource(robot.clientName)
    .setId(idStr)
    .setStartTime(robotStartTimestamp)
    .setEndTime(robotEndTimestamp)
    .setLevel(level)
    .setLogPreserveHint(logPreserveHint);

  if (parameters) {
    for (const parameter of parameters) {
      event.addParameters(parameter);
    }
  }

  return dataBufferClient.addEvents([event]);
}

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
function makeParameter(label, value, units = '', notes = '') {
  const parameter = new parameterPb.Parameter().setLabel(label).setUnits(units).setNotes(notes);
  if (typeof value === 'boolean') {
    parameter.setBoolValue(value);
  } else if (typeof value === 'bigint') {
    if (value < BigInt(Number.MIN_SAFE_INTEGER) || value > BigInt(Number.MAX_SAFE_INTEGER)) {
      throw new RangeError(`The int_value ${value} is beyond 2^53: it cannot be exact`);
    }
    parameter.setIntValue(Number(value));
  } else if (Number.isInteger(value)) {
    parameter.setIntValue(value);
  } else if (typeof value === 'number' && !Number.isInteger(value)) {
    parameter.setFloatValue(value);
  } else if (value instanceof Timestamp) {
    parameter.setTimestamp(value);
  } else if (value instanceof Duration) {
    parameter.setDuration(value);
  } else if (typeof value === 'string') {
    parameter.setStringValue(value);
  } else {
    return null;
  }

  return parameter;
}

function partial(func, args, keywords) {
  function newfunc(fargs, fkeywords) {
    const newkeywords = { keywords, fkeywords };
    return func(args, fargs, newkeywords);
  }
  return newfunc;
}

/**
 * A client for adding to robot data buffer.
 * @extends {BaseClient<DataBufferServiceClient>}
 */
class DataBufferClient extends BaseClient {
  static defaultServiceName = 'data-buffer';
  static serviceType = 'bosdyn.api.DataBufferService';

  constructor() {
    super(DataBufferServiceClient);
    this.logTickSchemas = {};
    this._timesyncEndpoint = null;
  }

  /**
   * @param {Robot} other
   */
  async updateFrom(other) {
    super.updateFrom(other);
    try {
      this._timesyncEndpoint = (await other.timeSync).endpoint;
    } catch (e) {
      // Pass
    }
  }

  /**
   * Log text messages to the robot.
   * @param {dataBufferProtos.TextMessage[]} textMessages Sequence of TextMessage protos.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataBufferProtos.RecordTextMessagesResponse>}
   */
  addTextMessages(textMessages, args) {
    const request = new dataBufferProtos.RecordTextMessagesRequest();
    for (const inTextMsg of textMessages) {
      request.addTextMessages(inTextMsg);
    }
    return this.call(this._stub.recordTextMessages, request, null, commonHeaderErrors, false, args);
  }

  /**
   * Add an operator comment to the robot log.
   * @param {string} msg Text of user comment to log.
   * @param {?Timestamp} robotTimestamp Time of messages, in robot time.
   * If not set, timestamp will be when the robot receives the message.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataBufferProtos.RecordOperatorCommentsResponse>}
   */
  addOperatorComment(msg, robotTimestamp = null, args) {
    const request = new dataBufferProtos.RecordOperatorCommentsRequest();
    robotTimestamp = robotTimestamp || this.nowInRobotBasis('Operator Comment');
    const operatorComment = new dataBufferProtos.OperatorComment().setMessage(msg).setTimestamp(robotTimestamp);
    request.addOperatorComments(operatorComment);

    return this.call(this._stub.recordOperatorComments, request, null, commonHeaderErrors, false, args);
  }

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
  addBlob(data, typeId, channel = null, robotTimestamp = null, writeSync = false, args) {
    if (!channel) channel = typeId;
    const request = new dataBufferProtos.RecordDataBlobsRequest().setSync(writeSync);
    robotTimestamp = robotTimestamp || this.nowInRobotBasis(typeId);
    const dataBlob = new dataBufferProtos.DataBlob()
      .setTimestamp(robotTimestamp)
      .setChannel(channel)
      .setTypeId(typeId)
      .setData(data);
    request.addBlobData(dataBlob);

    return this.call(this._stub.recordDataBlobs, request, null, commonHeaderErrors, false, args);
  }

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
  addProtobuf(proto, channel = null, robotTimestamp = null, writeSync = false, args) {
    const binaryData = proto.serializeBinary();
    robotTimestamp = robotTimestamp || this.nowInRobotBasis(null, proto);
    // The full name of the message type, e.g. 'bosdyn.api.GetImageResponse' (jspb has no displayName).
    const typeId = protoTypeName(proto);
    channel = channel || typeId;

    return this.addBlob(binaryData, typeId, channel, robotTimestamp, writeSync, args);
  }

  /**
   * Log event messages to the robot.
   * @param {dataBufferProtos.Event[]} events Sequence of Event protos.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dataBufferProtos.RecordEventsResponse>}
   */
  addEvents(events, args) {
    const request = new dataBufferProtos.RecordEventsRequest();

    for (const event of events) {
      request.addEvents(event);
    }

    return this.call(this._stub.recordEvents, request, null, commonHeaderErrors, false, args);
  }

  /**
   * Log signal schema to the robot.
   * @param {dataBufferProtos.SignalSchema.Variable[]} variables Array of SignalSchema variables defining
   * what is in tick.
   * @param {string} schemaName Name of schema (defined previously by client).
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<string>} The id of the schema (an uint64: a string, exact beyond 2^53).
   */
  registerSignalSchema(variables, schemaName, args) {
    const tickSchema = new dataBufferProtos.SignalSchema().setVarsList(variables).setSchemaName(schemaName);
    const request = new dataBufferProtos.RegisterSignalSchemaRequest().setSchema(tickSchema);
    const valueFromResponse = partial(this._saveSchemaId.bind(this), tickSchema);
    return this.call(this._stub.registerSignalSchema, request, valueFromResponse, commonHeaderErrors, false, args);
  }

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
  addSignalTick(
    data,
    schemaId,
    encoding = dataBufferProtos.SignalTick.Encoding.ENCODING_RAW,
    sequenceId = 0,
    source = 'client',
    args,
  ) {
    if (!(schemaId in this.logTickSchemas)) throw new RangeError(`The log tick schema id "${schemaId}" is unknown`);

    const request = new dataBufferProtos.RecordSignalTicksRequest();
    const tickData = new dataBufferProtos.SignalTick()
      .setSequenceId(sequenceId)
      .setSource(source)
      // An uint64 string ([jstype = JS_STRING]): jspb writes 0 for a number.
      .setSchemaId(toUint64String(schemaId))
      .setEncoding(encoding)
      .setData(data);
    request.addTickData(tickData);
    return this.call(this._stub.recordSignalTicks, request, null, commonHeaderErrors, false, args);
  }

  /**
   * Return schema id from response, after saving the schema in an object indexed by id.
   * @param {dataBufferProtos.SignalSchema} schema The schema to save
   * @param {dataBufferProtos.RegisterSignalSchemaResponse} response The response
   * @returns {string}
   * @private
   */
  _saveSchemaId(schema, response) {
    const schemaId = response.getSchemaId();
    this.logTickSchemas[schemaId] = schema;
    return schemaId;
  }

  /**
   * Get current time in robot clock basis if possible, null otherwise.
   * @param {string} msgType *
   * @param {ProtobufMessage} proto *
   * @returns {Timestamp}
   */
  nowInRobotBasis(msgType = null, proto = null) {
    if (this._timesyncEndpoint) {
      try {
        const converter = this._timesyncEndpoint.getRobotTimeConverter();
        return converter.robotTimestampFromLocalSecs(nowSec());
      } catch (err) {
        if (err instanceof NotEstablishedError) {
          this.logger.debug(
            `[DATA BUFFER] Could not timestamp message of type ${
              msgType !== null ? msgType : proto !== null ? protoTypeName(proto) : 'Unknown'
            }`,
          );
        }
      }
    }
    return null;
  }
}

// The keys of the level and of the formatted message in the infos of winston (the ones of triple-beam).
const LEVEL = Symbol.for('level');
const MESSAGE = Symbol.for('message');

// Like the daemon thread of Python, the waits of the send loop do not keep the process alive.
const _DAEMON = { ref: false };

// Number of attempts to send a batch of messages, after errors of the SDK.
const _SEND_ERROR_LIMIT = 2;

/**
 * A winston transport that will publish the logs as text messages to the data-buffer service (Python's
 * LoggingHandler, a logging.Handler): add it to a logger, e.g. `robot.logger.add(handler)`. The messages are queued,
 * and a background loop sends them in batches.
 *
 * Unlike Python, log() is the emit() of Python (emit() is the one of the streams), the filename and line_number of the
 * messages are not set (winston does not know where a message is logged), and close() is async.
 */
class LoggingHandler extends Transport {
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
  constructor(
    service,
    dataBufferClient,
    {
      level = null,
      timeSyncEndpoint = null,
      rpcTimeout = 1,
      msgNumLimit = 10,
      msgAgeLimit = 1,
      skipRpcs = false,
      ...transportOptions
    } = {},
  ) {
    super(level === null ? transportOptions : { ...transportOptions, level });
    /**
     * The filters of the infos (the Filterer of Python): functions, or objects with a filter(info) method.
     * @type {Array<function(Object): boolean|{filter: function(Object): boolean}>}
     */
    this.filters = [];
    this.addFilter(isNotTextLog);
    if (skipRpcs) this.addFilter(isNotRpc);
    this.msgAgeLimit = msgAgeLimit;
    this.msgNumLimit = msgNumLimit;
    this.rpcTimeout = rpcTimeout;
    this.service = service;
    this.timeSyncEndpoint = timeSyncEndpoint ?? null;
    if (this.timeSyncEndpoint && !this.timeSyncEndpoint.hasEstablishedTimeSync) {
      throw new InvalidArgument('time_sync_endpoint must have already established timesync!');
    }
    // If we have this many unsent messages in the queue after a failure to send, "dump" the messages to stderr.
    this._dumpMsgCount = 20;
    // Internal tracking of errors.
    this._numFailedSends = 0;
    this._numFailedSendsSequential = 0;
    // If we have this many failed sends in a row, stop the send loop.
    this._limitFailedSendsSequential = 5;
    // Event to trigger immediate flush of messages to the log client.
    this._flushEvent = new Event();
    // How long to wait for flush events, in seconds. Dictates non-flush update rate.
    this._flushEventWaitTime = 0.1;
    // Last time "log" was called.
    this._lastEmitTime = 0;
    this._dataBufferClient = dataBufferClient;
    this._msgQueue = [];
    // Set to stop the message send loop.
    this._shutdownEvent = new Event();
    // The last close().
    this._closing = Promise.resolve();
    this._threadAlive = false;
    this._sendThread = this._startSendThread();
  }

  /**
   * To ensure all messages have been sent to the best of our ability (`await using`), like the context manager of
   * Python.
   * @returns {Promise<void>}
   */
  [Symbol.asyncDispose]() {
    return this.close();
  }

  /**
   * Queue a message: called by winston for the infos of the level of the transport (Python's emit()).
   * @param {Object} info A winston info.
   * @param {function(): void} callback
   */
  log(info, callback) {
    try {
      if (this.filter(info)) {
        this._msgQueue.push(this.recordToMsg(info));
        this._lastEmitTime = nowSec();
      }
    } catch (err) {
      // Like handleError() of the handlers of Python: the error is printed, and the logging goes on.
      this.fallbackLog(`--- Logging error ---\n${err?.stack ?? err}`);
    }
    callback();
  }

  /**
   * @param {Object} info A winston info.
   * @returns {boolean} Whether the info passes all the filters (Python's Filterer.filter()).
   */
  filter(info) {
    return this.filters.every(filter => (typeof filter === 'function' ? filter(info) : filter.filter(info)));
  }

  /**
   * @param {function(Object): boolean|{filter: function(Object): boolean}} filter A filter of the infos.
   */
  addFilter(filter) {
    if (!this.filters.includes(filter)) this.filters.push(filter);
  }

  /**
   * @param {function(Object): boolean|{filter: function(Object): boolean}} filter A filter of the infos.
   */
  removeFilter(filter) {
    const index = this.filters.indexOf(filter);
    if (index !== -1) this.filters.splice(index, 1);
  }

  /** Send the queued messages without waiting for the limits. */
  flush() {
    this._flushEvent.set();
  }

  /**
   * Stop the send loop, and make one last attempt to send the queued messages (the ones which cannot be sent are
   * dumped to stderr). Winston calls it when the transport is removed from its logger.
   * @returns {Promise<void>} It never rejects: Python raises the errors which are not errors of the SDK.
   */
  close() {
    // One after the other: a close() during another one (e.g. by winston) does not send the same messages.
    this._closing = this._closing
      .then(() => this._close())
      .catch(err => {
        process.stderr.write(`Error in close() of ${this.constructor.name}:\n${err?.stack ?? err}\n`);
      });
    return this._closing;
  }

  /** @private */
  async _close() {
    this._shutdownEvent.set();
    await this._sendThread;

    // One last attempt to send any messages.
    if (this._msgQueue.length) {
      const toSend = this._msgQueue.slice();
      try {
        await this._dataBufferClient.addTextMessages(toSend, this._rpcArgs());
        // Unlike Python, the sent messages are removed: a second close() (e.g. by winston) does not send them again.
        this._msgQueue.splice(0, toSend.length);
      } catch (err) {
        // Catch all client library errors.
        if (!(err instanceof BosdynError)) this.fallbackLog(`Unexpected exception!\n${err?.stack ?? err}`);
        this._numFailedSends += 1;
        this._dumpMsgQueue();
      }
    }
  }

  /** @returns {boolean} True if the send loop is running (Python's send thread). */
  isThreadAlive() {
    return this._threadAlive;
  }

  /**
   * Restart the send loop.
   * @param {DataBufferClient} dataBufferClient API client that will send log messages.
   * @throws {assert.AssertionError} The send loop is still running.
   */
  restart(dataBufferClient) {
    assert.ok(!this.isThreadAlive(), 'The send loop is still running.');
    this._numFailedSendsSequential = 0;
    this._dataBufferClient = dataBufferClient;
    this._sendThread = this._startSendThread();
  }

  /**
   * Pop all of the message queue, using fallbackLog to try and capture them.
   * @private
   */
  _dumpMsgQueue() {
    this.fallbackLog(`Dumping ${this._msgQueue.length} messages!`);
    for (const msg of this._msgQueue) this.fallbackLog(msg);
    this._msgQueue.length = 0;
  }

  /**
   * Handle log messages that were failed to be sent by printing to the console (stderr).
   * @param {string|dataBufferProtos.TextMessage} msg
   */
  fallbackLog(msg) {
    process.stderr.write(`${typeof msg === 'string' ? msg : messageToString(msg)}\n`);
  }

  /**
   * @returns {Object} The options of the RPCs (rpcTimeout is in seconds, the timeout of the calls in milliseconds).
   * @private
   */
  _rpcArgs() {
    return { timeout: this.rpcTimeout === null ? null : this.rpcTimeout * 1000 };
  }

  /**
   * Run the send loop: it stops when the transport is closed, or after too many failed sends in a row.
   * @returns {Promise<void>} It never rejects.
   * @private
   */
  _startSendThread() {
    this._threadAlive = true;
    return this._runSendThread()
      .catch(err => {
        // Like an error in the thread of Python: printed, and the loop stops.
        process.stderr.write(`Error in the send loop of ${this.constructor.name}:\n${err?.stack ?? err}\n`);
      })
      .finally(() => {
        this._threadAlive = false;
      });
  }

  /** @private */
  async _runSendThread() {
    while (this._numFailedSendsSequential < this._limitFailedSendsSequential && !this._shutdownEvent.isSet()) {
      const waitMs = this._flushEventWaitTime * 1000;
      // Unlike Python, close() does not wait for the end of the wait.

      await Promise.race([this._flushEvent.wait(waitMs, _DAEMON), this._shutdownEvent.wait(waitMs, _DAEMON)]);
      const flush = this._flushEvent.isSet();
      const msgAge = nowSec() - this._lastEmitTime;
      const numMsgs = this._msgQueue.length;
      const toSend = this._msgQueue.slice(0, numMsgs);
      const sendNow = numMsgs >= 1 && (flush || msgAge >= this.msgAgeLimit || numMsgs >= this.msgNumLimit);
      if (!sendNow) continue;

      this._flushEvent.clear();

      const { sent, sendErrors } = await this._sendMessages(toSend);

      // Default to possibly dumping messages.
      let maybeDump = true;
      if (sent) {
        // We successfully sent logs to the log service! Delete relevant local cache.
        this._msgQueue.splice(0, numMsgs);
        maybeDump = false;
        this._numFailedSendsSequential = 0;
      } else if (sendErrors >= _SEND_ERROR_LIMIT) {
        this._numFailedSends += 1;
        this._numFailedSendsSequential += 1;
      } else if (this._shutdownEvent.isSet()) {
        // Don't dump if we're shutting down; we'll clear the messages in close().
        maybeDump = false;
      } else {
        // We can hit this state if 1) we break out of the send loop without sending, 2) there is a logic bug in the
        // handling code.
        this.fallbackLog(`Unexpected condition in ${this.constructor.name}._runSendThread!`);
      }

      // If we decided we may need to dump the message queue...
      if (maybeDump && this._msgQueue.length >= this._dumpMsgCount) this._dumpMsgQueue();
    }
  }

  /**
   * Send a batch of messages, with a second attempt after an error of the SDK.
   * @param {dataBufferProtos.TextMessage[]} toSend
   * @returns {Promise<{sent: boolean, sendErrors: number}>}
   * @private
   */
  async _sendMessages(toSend) {
    let sendErrors = 0;
    while (sendErrors < _SEND_ERROR_LIMIT && !this._shutdownEvent.isSet()) {
      try {
        await this._dataBufferClient.addTextMessages(toSend, this._rpcArgs());
        return { sent: true, sendErrors };
      } catch (err) {
        if (!(err instanceof ResponseError || err instanceof RpcError)) {
          // Catch all other errors and log them.
          this.fallbackLog(`Unexpected exception!\n${err?.stack ?? err}`);
          break;
        }
        this.fallbackLog(`Error:\n${err.stack}`);
        sendErrors += 1;
      }
    }
    return { sent: false, sendErrors };
  }

  /**
   * Convert a winston info to a TextMessage proto (Python's record_to_msg()).
   * @param {Object} info A winston info.
   * @returns {dataBufferProtos.TextMessage}
   */
  recordToMsg(info) {
    const level = LoggingHandler.recordLevelToProtoLevel(info[LEVEL], this.levels);
    const msg = new dataBufferProtos.TextMessage()
      .setSource(this.service)
      .setLevel(level)
      .setMessage(this._formatMessage(info));
    if (this.timeSyncEndpoint !== null) {
      try {
        msg.setTimestamp(this.timeSyncEndpoint.robotTimestampFromLocalSecs(nowSec()));
      } catch (err) {
        if (!(err instanceof NotEstablishedError)) throw err;
        // If timestamp is not set in the proto, data-buffer will timestamp it on receipt.
        msg.setMessage(`(No time sync!): ${msg.getMessage()}`);
      }
    } else {
      msg.setTimestamp(nowTimestamp());
    }
    return msg;
  }

  /**
   * The text of a message (the format() of Python): the output of the format of the transport if it has one, else the
   * message and the stack of its error, like the default formatter of Python. Without the colors of the console (the
   * loggers of LoggerUtil color the objects in the messages).
   * @param {Object} info A winston info.
   * @returns {string}
   * @private
   */
  _formatMessage(info) {
    if (this.format) return stripVTControlCharacters(String(info[MESSAGE]));
    const message = typeof info.message === 'string' ? info.message : inspect(info.message);
    return stripVTControlCharacters(info.stack ? `${message}\n${info.stack}` : message);
  }

  /**
   * Convert a winston level to a TextMessage proto level (Python's record_level_to_proto_level()).
   * @param {string} recordLevel A level, e.g. 'warn'.
   * @param {Object<string, number>} [levels=LoggerUtil.levels] The levels of the logger: the lower, the more severe.
   * @returns {dataBufferProtos.TextMessage.Level}
   */
  static recordLevelToProtoLevel(recordLevel, levels = LoggerUtil.levels) {
    const { Level } = dataBufferProtos.TextMessage;
    const severity = levels[recordLevel] ?? Infinity;
    if (severity <= levels.error) return Level.LEVEL_ERROR;
    if (severity <= (levels.warn ?? levels.warning)) return Level.LEVEL_WARN;
    if (severity <= levels.info) return Level.LEVEL_INFO;
    return Level.LEVEL_DEBUG;
  }
}

/**
 * Filter out the RecordTextMessages calls that the handler sends so that we do not go into an infinite loop (Python
 * checks the name of the logger of the records, which ends with .DataBufferService.RecordTextMessages).
 * @param {Object} info A winston info.
 * @returns {boolean}
 */
function isNotTextLog(info) {
  return !String(info[RPC_METHOD] ?? '').endsWith('.DataBufferService/RecordTextMessages');
}

/**
 * Identify the logs of the RPCs (their requests and responses) to be able to strip them out (Python checks the module
 * and the function of the records: common.call and common.call_async).
 * @param {Object} info A winston info.
 * @returns {boolean}
 */
function isNotRpc(info) {
  return info[RPC_METHOD] === undefined;
}

module.exports = {
  DataBufferClient,
  InvalidArgument,
  LoggingHandler,
  isNotRpc,
  isNotTextLog,
  logEvent,
  makeParameter,
};

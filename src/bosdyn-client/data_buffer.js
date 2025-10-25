'use strict';

const { Duration } = require('google-protobuf/google/protobuf/duration_pb');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');
const { v1: uuid1 } = require('uuid');

const { BaseClient, commonHeaderErrors } = require('./common');
const { NotEstablishedError } = require('./time_sync');

const dataBufferProtos = require('../bosdyn/api/data_buffer_pb');
const { DataBufferServiceClient } = require('../bosdyn/api/data_buffer_service_grpc_pb');
const parameterPb = require('../bosdyn/api/parameter_pb');

class InvalidArgument extends Error {}

/**
 * Add an Event to the Data Buffer.
 * @param {Robot} robot A Robot object.
 * @param {string} eventType The type of event.
 * @param {Event.Level} level The relative importance of the event.
 * @param {string} description A human-readable description of the event.
 * @param {number|Date} startTimestampSecs Start of the event, in local time.
 * @param {number|Date} endTimestampSecs End of the event.  start_timestamp_secs is used if None.
 * @param {string} idStr Unique id for event.  A uuid is generated if None.
 * @param {parameterPb.Parameter[]} parameters Parameters to attach to the event.
 * @param {LogPreserveHint} logPreserveHint Whether event should try to preserve log data.
 * @returns {Promise<void>}
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
  const dataBufferClient = await robot.ensureClient(DataBufferClient.defaultServiceName);

  if (!idStr) idStr = uuid1();

  await (await robot.timeSync).waitForSync();
  const robotStartTimestamp = await (await robot.timeSync).robotTimestampFromLocalSecs(startTimestampSecs);
  let robotEndTimestamp;
  if (endTimestampSecs) {
    robotEndTimestamp = await (await robot.timeSync).robotTimestampFromLocalSecs(endTimestampSecs);
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
    .setSource(robot.client_name)
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

function makeParameter(label, value, units = '', notes = '') {
  const parameter = new parameterPb.Parameter().setLabel(label).setUnits(units).setNotes(notes);
  if (typeof value === 'boolean') {
    parameter.setBoolValue(value);
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
    let newkeywords = { keywords, fkeywords };
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
    const typeId = proto.displayName;
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
   * @returns {Promise<number>}
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
   * @param {number} schemaId ID name of schema (obtained from a previous schema registration)
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
      .setSchemaId(schemaId)
      .setEncoding(encoding)
      .setData(data);
    request.addTickData(tickData);
    return this.call(this._stub.recordSignalTicks, request, null, commonHeaderErrors, false, args);
  }

  /**
   * Return schema id from response, after saving the schema in an object indexed by id.
   * @param {dataBufferProtos.SignalSchema} schema The schema to save
   * @param {dataBufferProtos.RegisterSignalSchemaResponse} response The response
   * @returns {number}
   * @private
   */
  _saveSchemaId(schema, response) {
    this.logTickSchemas[response.getSchemaId()] = schema;
    return response.getSchemaId();
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
        return converter.robotTimestampFromLocalSecs(Date.now() / 1000);
      } catch (err) {
        if (err instanceof NotEstablishedError) {
          this.logger.debug(
            `[DATA BUFFER] Could not timestamp message of type ${
              msgType !== null ? msgType : proto !== null ? proto?.displayName : 'Unknown'
            }`,
          );
        }
      }
    }
    return null;
  }
}

module.exports = {
  DataBufferClient,
  InvalidArgument,
  logEvent,
  makeParameter,
};

'use strict';

const { v1: uuid1 } = require('uuid');

const { BaseClient, common_header_errors } = require('./common');
const data_buffer_protos = require('../bosdyn/api/data_buffer_pb');
const data_buffer_service = require('../bosdyn/api/data_buffer_service_grpc_pb');

class InvalidArgument extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'InvalidArgument';
  }
}

async function log_event(
  robot,
  event_type,
  level,
  description,
  start_timestamp_secs,
  end_timestamp_secs = null,
  id_str = null,
  parameters = null,
  log_preserve_hint = data_buffer_protos.Event.LogPreserveHint.LOG_PRESERVE_HINT_NORMAL,
) {
  const data_buffer_client = await robot.ensure_client(DataBufferClient.default_service_name);

  if (!id_str) id_str = uuid1();

  await (await robot.time_sync).wait_for_sync();
  const robot_start_timestamp = await (await robot.time_sync).robot_timestamp_from_local_secs(start_timestamp_secs);
  let robot_end_timestamp;
  if (end_timestamp_secs) {
    robot_end_timestamp = await (await robot.time_sync).robot_timestamp_from_local_secs(end_timestamp_secs);
  } else {
    robot_end_timestamp = robot_start_timestamp;
  }

  if (typeof log_preserve_hint === 'boolean') {
    if (log_preserve_hint) {
      log_preserve_hint = data_buffer_protos.Event.LogPreserveHint.LOG_PRESERVE_HINT_PRESERVE;
    } else {
      log_preserve_hint = data_buffer_protos.Event.LogPreserveHint.LOG_PRESERVE_HINT_NORMAL;
    }
  }

  const event = new data_buffer_protos.Event()
    .setType(event_type)
    .setDescription(description)
    .setSource(robot.client_name)
    .setId(id_str)
    .setStartTime(robot_start_timestamp)
    .setEndTime(robot_end_timestamp)
    .setLevel(level)
    .setLogPreserveHint(log_preserve_hint);

  if (parameters) {
    for (const parameter of parameters) {
      event.addParameters(parameter);
    }
  }

  return data_buffer_client.add_events([event]);
}

function partial(func, args, keywords) {
  function newfunc(fargs, fkeywords) {
    let newkeywords = { keywords, fkeywords };
    return func(args, fargs, newkeywords);
  }
  return newfunc;
}

class DataBufferClient extends BaseClient {
  static default_service_name = 'data-buffer';
  static service_type = 'bosdyn.api.DataBufferService';

  constructor() {
    super(data_buffer_service.DataBufferServiceClient);
    this.log_tick_schemas = {};
    this._timesync_endpoint = null;
  }

  async update_from(other) {
    super.update_from(other);
    try {
      this._timesync_endpoint = (await other.time_sync).endpoint;
    } catch (e) {
      // Pass
    }
  }

  add_text_messages(text_messages, args) {
    const request = new data_buffer_protos.RecordTextMessagesRequest();
    for (const in_text_msg of text_messages) {
      request.addTextMessages(in_text_msg);
    }
    return this.call(this._stub.recordTextMessages, request, null, common_header_errors, args);
  }

  add_operator_comment(msg, robot_timestamp = null, args) {
    const request = new data_buffer_protos.RecordOperatorCommentsRequest();
    robot_timestamp = robot_timestamp || this._now_in_robot_basis('Operator Comment');
    const operatorComment = new data_buffer_protos.OperatorComment().setMessage(msg).setTimestamp(robot_timestamp);
    request.addOperatorComments(operatorComment);

    return this.call(this._stub.recordOperatorComments, request, null, common_header_errors, args);
  }

  add_blob(data, type_id, channel = null, robot_timestamp = null, write_sync = false, args) {
    if (!channel) channel = type_id;
    const request = new data_buffer_protos.RecordDataBlobsRequest();
    robot_timestamp = robot_timestamp || this._now_in_robot_basis(type_id);
    const dataBlob = new data_buffer_protos.DataBlob()
      .setTimestamp(robot_timestamp)
      .setChannel(channel)
      .setTypeId(type_id)
      .setData(data);
    request.addBlobData(dataBlob);
    request.setSync(write_sync);

    return this.call(this._stub.recordDataBlobs, request, null, common_header_errors, args);
  }

  add_protobuf(proto, channel = null, robot_timestamp = null, write_sync = false) {
    const binary_data = proto.serializeBinary();
    robot_timestamp = robot_timestamp || this._now_in_robot_basis(null, proto);
    const type_id = proto.displayName;
    channel = channel || type_id;

    return this.add_blob(binary_data, type_id, channel, robot_timestamp, write_sync);
  }

  add_events(events, args) {
    const request = new data_buffer_protos.RecordEventsRequest();

    for (const event of events) {
      request.addEvents(event);
    }

    return this.call(this._stub.recordEvents, request, null, common_header_errors, args);
  }

  register_signal_schema(variables, schema_name, args) {
    const tick_schema = new data_buffer_protos.SignalSchema().setVarsList(variables).setSchemaName(schema_name);
    const request = new data_buffer_protos.RegisterSignalSchemaRequest().setSchema(tick_schema);
    const value_from_response = partial(this._save_schema_id, tick_schema);
    return this.call(this._stub.registerSignalSchema, request, value_from_response, common_header_errors, args);
  }

  add_signal_tick(
    data,
    schema_id,
    encoding = data_buffer_protos.SignalTick.Encoding.ENCODING_RAW,
    sequence_id = 0,
    source = 'client',
    args,
  ) {
    if (!(schema_id in this.log_tick_schemas)) throw new RangeError(`The log tick schema id "${schema_id}" is unknown`);

    const request = new data_buffer_protos.RecordSignalTicksRequest();
    const tickData = new data_buffer_protos.SignalTick()
      .setSequenceId(sequence_id)
      .setSource(source)
      .setSchemaId(schema_id)
      .setEncoding(encoding)
      .setData(data);
    request.addTickData(tickData);
    return this.call(this._stub.recordSignalTicks, request, null, common_header_errors, args);
  }

  _save_schema_id(schema, response) {
    this.log_tick_schemas[response.getSchemaId()] = schema;
    return response.getSchemaId();
  }

  _now_in_robot_basis(msg_type = null, proto = null) {
    if (this._timesync_endpoint) {
      let isCatch = false;
      let converter;
      try {
        converter = this._timesync_endpoint.get_robot_time_converter();
      } catch (e) {
        isCatch = true;
        this.logger.debug(
          `[DATA BUFFER] Could not timestamp message of type ${
            msg_type !== null ? msg_type : proto !== null ? proto?.displayName : 'Unknown'
          }`,
        );
      }

      console.log(converter);

      if (!isCatch) {
        return converter.robot_timestamp_from_local_secs(Date.now() / 1000);
      }
    }
    return null;
  }
}

module.exports = {
  DataBufferClient,
  InvalidArgument,
  log_event,
};

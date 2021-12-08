const {BaseClient, common_header_errors} = require('./common');
const data_buffer_protos = require('../bosdyn/api/data_buffer_pb');
const data_buffer_service = require('../bosdyn/api/data_buffer_service_grpc_pb');

class InvalidArgument extends Error {
	constructor(msg){
		super(msg);
		this.name = 'InvalidArgument';
	}
};

function partial(func, args, keywords){
	function newfunc(fargs, fkeywords){
		var newkeywords = {keywords, fkeywords};
		return func(args, fargs, newkeywords);
	}
	return newfunc;
}

class DataBufferClient extends BaseClient {

	static default_service_name = 'data-buffer';
	static service_type = 'bosdyn.api.DataBufferService';

	constructor(){
		super(data_buffer_service.DataBufferServiceClient);
		this.log_tick_schemas = {};
		this._timesync_endpoint = null;
	}

	update_from(other){
		super.update_from(other);
		try{
			this._timesync_endpoint = other.time_sync.endpoint;
		}catch(e){

		}
	}

	async add_text_messages(text_messages, args){
		return await this._do_add_text_messages(this.call, text_messages, args);
	}

	async add_text_messages_async(text_messages, args){
		return await this._do_add_text_messages(this.call_async, text_messages, args);
	}

	async _do_add_text_messages(func, text_messages, args){
		const request = new data_buffer_protos.RecordTextMessagesRequest();
		for(const in_text_msg of text_messages){
			request.addTextMessages(in_text_msg);
		}

		return await func(this._stub.recordTextMessages, request, null, common_header_errors, args);
	}

	async add_operator_comment(msg, robot_timestamp = null, args){
		return await this._do_add_operator_comment(this.call, msg, robot_timestamp, args);
	}

	async add_operator_comment_async(msg, robot_timestamp = null, args){
		return await this._do_add_operator_comment(this.call_async, msg, robot_timestamp, args);
	}

	async _do_add_operator_comment(func, msg, robot_timestamp = null, args){
		const request = new data_buffer_protos.RecordOperatorCommentsRequest();
		robot_timestamp = robot_timestamp || this._now_in_robot_basis("Operator Comment");
		const operatorComment = new data_buffer_protos.OperatorComment()
		.setMessage(msg)
		.setTimestamp(robot_timestamp);
		request.addOperatorComments(operatorComment);
		return await func(this._stub.recordOperatorComments, request, null, common_header_errors, args);
	}

	async add_blob(data, type_id, channel = null, robot_timestamp = null, write_sync = false, args){
		return await this._do_add_blob(this.call, data, type_id, channel, robot_timestamp, write_sync, args);
	}

	async add_blob_async(data, type_id, channel = null, robot_timestamp = null, write_sync = false, args){
		return await this._do_add_blob(this.call_async, data, type_id, channel, robot_timestamp, write_sync, args);
	}

	async _do_add_blob(func, data, type_id, channel, robot_timestamp, write_sync, args){
		if(!channel) channel = type_id;
		const request = new data_buffer_protos.RecordDataBlobsRequest();
		robot_timestamp = robot_timestamp || this._now_in_robot_basis(type_id);
		const dataBlob = new data_buffer_protos.DataBlob()
		.setTimestamp(robot_timestamp)
		.setChannel(channel)
		.setTypeId(type_id)
		.setData(data);
		request.addBlobData(dataBlob);
		request.setSync(write_sync);
		return await func(this._stub.recordDataBlobs, request, null, common_header_errors, args);
	}

	async add_protobuf(proto, channel = null, robot_timestamp = null, write_sync = false){
		return await this._do_add_protobuf(this.add_blob, proto, channel, robot_timestamp, write_sync);
	}

	async add_protobuf_async(proto, channel = null, robot_timestamp = null, write_sync = false){
		return await this._do_add_protobuf(this.add_blob_async, proto, channel, robot_timestamp, write_sync);
	}

	async _do_add_protobuf(func, proto, channel, robot_timestamp, write_sync){
		const binary_data = proto.serializeBinary();
		robot_timestamp = robot_timestamp || this._now_in_robot_basis(null, proto);
		const type_id = proto.displayName;
		channel = channel || type_id;
		return await func(binary_data, type_id, channel, robot_timestamp, write_sync);
	}

	async add_events(events, args){
		return await this._do_add_events(this.call, events, args);
	}

	async add_events_async(events, args){
		return await this._do_add_events(this.call_async, events, args);
	}

	async _do_add_events(func, events, args){
		const request = new data_buffer_protos.RecordEventsRequest();

		for(const event of events){
			request.addEvents(event);
		}

		return await func(this._stub.recordEvents, request, null, common_header_errors, args);
	}

	async register_signal_schema(variables, schema_name, args){
		return await this._do_register_signal_schema(this.call, variables, schema_name, args);
	}

	async register_signal_schema_async(variables, schema_name, args){
		return await this._do_register_signal_schema(this.call_async, variables, schema_name, args);
	}

	async _do_register_signal_schema(func, variables, schema_name, args){
		const tick_schema = new data_buffer_protos.SignalSchema()
		.setVarsList(variables)
		.setSchemaName(schema_name);
		const request = new data_buffer_protos.RegisterSignalSchemaRequest()
		.setSchema(tick_schema);
		const value_from_response = partial(this._save_schema_id, tick_schema)
		return await func(this._stub.registerSignalSchema, request, value_from_response, common_header_errors, args);
	}

	async add_signal_tick(data, schema_id, encoding = data_buffer_protos.SignalTick.Encoding.ENCODING_RAW, sequence_id=0, source="client", args){
        return await this._do_add_signal_tick(this.call, data, schema_id, encoding, sequence_id, source, args);
	}

	async add_signal_tick_async(data, schema_id, encoding = data_buffer_protos.SignalTick.Encoding.ENCODING_RAW, sequence_id=0, source="client", args){
        return await this._do_add_signal_tick(this.call_async, data, schema_id, encoding, sequence_id, source, args);
	}

	async _do_add_signal_tick(func, data, schema_id, encoding, sequence_id, source, args){
        if(!(schema_id in this.log_tick_schemas)) throw new RangeError(`The log tick schema id "${schema_id}" is unknown`);

        const request = new data_buffer_protos.RecordSignalTicksRequest();
        const tickData = new data_buffer_protos.SignalTick()
        .setSequenceId(sequence_id)
        .setSource(source)
        .setSchemaId(schema_id)
        .setEncoding(encoding)
        .setData(data);
        request.addTickData(tickData);
        return await func(this._stub.recordSignalTicks, request, null, common_header_errors, args);
    }

    _save_schema_id(schema, response){
        this.log_tick_schemas[response.getSchemaId()] = schema;
        return response.getSchemaId();
    }

    _now_in_robot_basis(msg_type = null, proto = null){
        if(this._timesync_endpoint){
        	let isCatch = false;
        	let converter;
            try{
                converter = this._timesync_endpoint.get_robot_time_converter();
            }catch(e){
            	isCatch = true;
                this.logger.debug(`[DATA BUFFER] Could not timestamp message of type ${msg_type != null ? msg_type : proto != null ? proto?.displayName : 'Unknown'}`);
            }

            if(!isCatch){
                return converter.robot_timestamp_from_local_secs(Date.now());
            }
        }
        return null;
    }

};

module.exports = {
	DataBufferClient
};
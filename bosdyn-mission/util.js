'use strict';


const mission_pb = require('../bosdyn/api/mission/mission_pb');
const nodes_pb = require('../bosdyn/api/mission/nodes_pb');
const util_pb = require('../bosdyn/api/mission/util_pb');
const docking_pb = require('../bosdyn/api/docking/docking_pb');
const graph_nav_pb = require('../bosdyn/api/graph_nav/graph_nav_pb');
const {ValueError} = require('../bosdyn-client/exceptions');
const constants = require('./constants');

const jspb = require('google-protobuf');
const any_pb = require('google-protobuf/google/protobuf/any_pb');


const process = require('node:process');


const DUMMY_MESSAGE = new nodes_pb.Node().setName('dummy-message-for-parameterization');

class InvalidConversion extends Error {
	constructor(msg, original_value, destination_typename){
		super(msg);
		this.original_value = original_value;
		this.destination_typename = destination_typename;
		this.name = 'InvalidConversion';
	}

	toString(){
		return `Could not convert "${this.original_value}" to type "${this.destination_typename}"`;
	}
};

const _python_identifier_regex = /[A-Za-z_]\w*$/;

function tree_to_string(root, start_level = 0, include_status = false){
	let string = '';
	if(start_level == 0) string += '\n';
	const prefix = '|' + '-'.repeat(start_level);
	string += `${prefix} ${root.toString()} ${root ? ' ' : ''} (${root.constructor.name})`;
	if(include_status) string += `\n ${prefix} Status code: [${root.last_result}]`;
	for(const child of root.children){
		string += `\n ${tree_to_string(child, start_level + 1, include_status)}`;
	}
	return string;
}

function proto_from_object(obj){

	const node = new nodes_pb.Node();

	const {name_or_dict, inner_proto, children} = obj.toObject();

	if(Object.prototype.toString.call(name_or_dict) === '[object Object]'){
		node.setName(name_or_dict.getName() || '');
		node.setReferenceId(name_or_dict.getReferenceId() || '');
		node.setNodeReference(name_or_dict.getNodeReference() || '');

		if('getUserData' in name_or_dict){
			node.setUserData(name_or_dict.getUserData());
		}

		for(const param of name_or_dict.getParametersList()){
			const parameter = new util_pb.VariableDeclaration()
			.setName(param.getName())
			.setType(param.getType());
			node.addParameters(parameter);
		}

		for(const paramValue of name_or_dict.getParameterValuesList()){
			const parameterValue = new util_pb.KeyValue().setKey(paramValue.getKey());
			if(typeof paramValue.getValue() === 'string' && paramValue.getValue()[0] == '$'){
				parameterValue.setValue(new util_pb.Value().setParameter(new util_pb.VariableDeclaration().setName(paramValue.getValue().slice(1))));
			}else{
				parameterValue.setValue(new util_pb.Value().setConstant(python_var_to_value(paramValue.getValue())));
			}
		}

	}else{
		node.setName(name_or_dict);
	}

}

function python_var_to_value(val){
	const value = new util_pb.ConstantValue();

	if(typeof val === 'boolean'){
		value.setBoolValue(val);
	}else if(Number.isInteger(val)){
		value.setIntValue(val);		
	}else if(!Number.isInteger(val)){
		value.setFloatValue(val);
	}else if(typeof val === 'string'){
		value.setStringValue(val);
	}else if(val instanceof jspb.Message){
		const any = new any_pb.Any().pack(val.serializeBinary(), '');
		value.setMsgValue(any);
	}else{
		throw new Error(`Invalid type "${typeof val}"`);
	}

	return value;
}

function python_type_to_pb_type(val){
	if(typeof val === 'boolean'){
		return util_pb.VariableDeclaration.Type.TYPE_BOOL;
	}else if(Number.isInteger(val)){
		return util_pb.VariableDeclaration.Type.TYPE_INT;
	}else if(!Number.isInteger(val)){
		return util_pb.VariableDeclaration.Type.TYPE_FLOAT;
	}else if(typeof val === 'string'){
		return util_pb.VariableDeclaration.Type.TYPE_STRING;
	}else if(val instanceof jspb.Message){
		return util_pb.VariableDeclaration.Type.TYPE_MESSAGE;
	}

	throw new InvalidConversion(val, 'bosdyn.api.mission.VariableDeclaration.Type')
}

function is_string_identifier(string){
	if(string.hasOwnProperty('isidentifier')) return string.isidentifier();
	return _python_identifier_regex.test(string);
}

function field_desc_to_pb_type(field_desc){
	process.emitWarning('Fonction en cours de dev', {
		code: 'NOT_WORKING_CORRECTLY',
		detail: 'Cette fonction ne marche peut être pas comme prévu !'
	});

	if(field_desc.type in [field_desc.TYPE_UINT32, field_desc.TYPE_UINT64, field_desc.TYPE_FIXED32,
		field_desc.TYPE_FIXED64, field_desc.TYPE_INT32, field_desc.TYPE_INT64,
		field_desc.TYPE_SFIXED64, field_desc.TYPE_SINT32, field_desc.TYPE_SINT64,
		field_desc.TYPE_SFIXED32]){
		return util_pb.VariableDeclaration.Type.TYPE_INT;
}else if(field_desc.type in [field_desc.TYPE_DOUBLE, field_desc.TYPE_FLOAT]){
	return util_pb.VariableDeclaration.Type.TYPE_FLOAT;
}else if(field_desc.type == field_desc.TYPE_BOOL){
	return util_pb.VariableDeclaration.Type.TYPE_BOOL;
}else if(field_desc.type == field_desc.TYPE_STRING){
	return util_pb.VariableDeclaration.Type.TYPE_STRING;
}else if(field_desc.type == field_desc.TYPE_MESSAGE){
	return util_pb.VariableDeclaration.Type.TYPE_MESSAGE;
}

throw new InvalidConversion(field_desc.type, 'bosdyn.api.mission.VariableDeclaration.Type');
}

function safe_pb_type_to_string(pb_type){
	try{
		return Object.keys(util_pb.VariableDeclaration.Type)[pb_type];
	}catch(e){
		return '<unknown>';
	}
}

function one_line_str(msg){
	return JSON.stringify(msg.toObject());
}

function node_spec_to_short_string(node_spec, maxlen = 15){
	let string = node_spec.getName() ? node_spec.getName() : one_line_str(node_spec);

	if(string.length > maxlen) return `${string.substring(0, maxlen - 3)}...`;
	return string;
}

class ResultFromProto {
	static results_from_proto = {
		[util_pb.Result.RESULT_FAILURE]: constants.Result.FAILURE,
		[util_pb.Result.RESULT_RUNNING]: constants.Result.RUNNING,
		[util_pb.Result.RESULT_SUCCESS]: constants.Result.SUCCESS,
		[util_pb.Result.RESULT_ERROR]: constants.Result.ERROR,
	}

	static proto_from_results = Object.fromEntries(Object.entries(ResultFromProto.results_from_proto).map(([k, v]) => [v, k]));
};

function proto_enum_to_result_constant(proto_msg){
	try{
		return ResultFromProto.results_from_proto[proto_msg];
	}catch(e){
		throw new InvalidConversion(proto_msg, 'constants.Result');
	}
}

function result_constant_to_proto_enum(result){
	if(!(result instanceof constants.Result)) throw new InvalidConversion(result, 'bosdyn.api.mission.Result');

	try{
		return ResultFromProto.proto_from_results[result];
	}catch(e){
		throw new InvalidConversion(result, 'bosdyn.api.mission.Result');
	}
}

function most_restrictive_travel_params(travel_params, vel_limit = null, disable_directed_exploration = false, disable_alternate_route_finding = false){

	travel_params = (travel_params == null || travel_params == undefined) ? new graph_nav_pb.TravelParams() : travel_params.clone();

	function ge(a, b){
		return a >= b;
	}

	function le(a, b){
		return a <= b;
	}

	function take_limiting(mine, other, compare){
		if(other == 0) return mine;
		if(mine == 0) return other;
		if(compare(mine, other)) return other;

		return mine;
	}

	function take_velocity_limit(returned, other){
		for(const [min_max, comp] of [['getMaxVel', ge], ['getMinVel', le]]){
			if(!other.hasOwnProperty(min_max)) continue;

			const lim_returned = returned[min_max]();
			const lim_other = other[min_max]();
			lim_returned.getLinear().setX(take_limiting(lim_returned.getLinear().getX(), lim_other.getLinear().getX(), comp));
			lim_returned.getLinear().setY(take_limiting(lim_returned.getLinear().getY(), lim_other.getLinear().getY(), comp));
			lim_returned.setAngular(take_limiting(lim_returned.angular, lim_other.angular, comp));
		}
	}

	if(vel_limit != null) take_velocity_limit(travel_params.getVelocityLimit(), vel_limit);

	travel_params.setDisableDirectedExploration(travel_params.getDisableDirectedExploration() || disable_directed_exploration);
	travel_params.setDisableAlternateRouteFinding(travel_params.getDisableAlternateRouteFinding() || disable_alternate_route_finding);

	return travel_params;
}

function get_value_from_constant_value_message(const_proto){
	const field = const_proto.getValueCase();
	if(field == 0) throw new ValueError('Did not have a value set!');
	let ret;
	switch(field){
		case 1:
		ret = const_proto.getFloatValue();
		break;
		case 2:
		ret = const_proto.getStringValue();
		break;
		case 3:
		ret = const_proto.getIntValue();
		break;
		case 4:
		ret = const_proto.getBoolValue();
		break;
		case 5:
		ret = const_proto.getMsgValue();
		break;
	}
	return ret;
}

function get_value_from_value_message(node, blackboard, value_msg){
	if(value_msg.hasConstant()){
		const constant = value_msg.getConstant();
		return get_value_from_constant_value_message(constant);
	}else if(value_msg.hasRuntimeVar()){
		return blackboard.read(node, value_msg.getRuntimeVar().getName());
	}else{
		throw new ValueError("Value must be a runtime variable or constant.");
	}
}

function safe_pb_enum_to_string(value, pb_enum_obj){
	try{
		return Object.keys(pb_enum_obj)[value];
	}catch(e){

	}
	return `<unknown> (value: ${value})`;
}

module.exports = {
	DUMMY_MESSAGE,
	InvalidConversion,
	tree_to_string,
	python_var_to_value,
	python_type_to_pb_type,
	is_string_identifier,
	field_desc_to_pb_type,
	safe_pb_type_to_string,
	one_line_str,
	node_spec_to_short_string,
	ResultFromProto,
	proto_enum_to_result_constant,
	result_constant_to_proto_enum,
	most_restrictive_travel_params,
	get_value_from_constant_value_message,
	get_value_from_value_message,
	safe_pb_enum_to_string
};
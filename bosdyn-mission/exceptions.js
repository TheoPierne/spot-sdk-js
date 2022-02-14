'use strict';

const util = require('./util');

class CompileError extends Error {
	constructor(msg = '', node_proto = null){
		super(msg);
		this.node_proto = node_proto;
		this.name = 'CompileError';
	}

	node_name(){
		if(this.node_proto == null) return null;

		try{
			return this.node_proto.getName();
		}catch(e){
			return null;
		}
	}

	node_impl(){
		console.log('Pensez à modif cette méthode si besoin [exceptions.js:24] (bosdyn-mission)');
		if(this.node_proto == null) return null;

		try{
			return this.node_proto.getImpl();
		}catch(e){
			return null;
		}
	}

	get_node_details(){
		let details = '';
		const node_impl = this.node_impl();

		if(node_impl) details = ` (${node_impl}`;

		const node_name = this.node_name();
		if(node_name != null){
			if(!details) details = ' (???';
			details += ` with name "${node_name}")`
		}
		return details;
	}

	toString(){
		const msg = super.toString();
		return msg + this.get_node_details();
	}
};

class UnknownType extends CompileError {
	constructor(msg, node_proto){
		super(msg, node_proto);
		this.name = 'UnknownType';
	}

	toString(){
		return `Do not know how to build ${this.node_impl()}`;
	}
};

class ValidationError extends Error {
	constructor(msg, tree, errors){
		super(msg);
		this.tree = tree;
		this.errors = errors;
		this.name = 'ValidationError';
	}

	toString(){
		return `Encountered ${this.errors.length} validation errors: \n\t${this.errors.map(x => x.toString()).join('\n\t')}`;
	}
};

class MissingParameterError extends CompileError {
	constructor(msg, target_name, target_pb_type, stored_pb_type){
		super(msg);
		this.target_name = target_name;
		this.target_pb_type = target_pb_type;
		this.stored_pb_type = stored_pb_type;
		this.name = 'MissingParameterError';
	}

	toString(){
		if(this.target_pb_type != this.stored_pb_type){
            return `Mismatched type for "${this.target_name}". 
            Stored as ${util.safe_pb_type_to_string(this.stored_pb_type)}, wanted ${util.safe_pb_type_to_string(this.target_pb_type)}`;
		}
        return `No parameter "${this.target_name}"`;
	}
};

class InaccessibleParameterError extends MissingParameterError {
	constructor(msg, target_name, target_pb_type, stored_pb_type){
		super(msg, target_name, target_pb_type, stored_pb_type);
		this.name = 'InaccessibleParameterError';
	}
};

class  MessageOverrideError extends CompileError {
	constructor(msg, overriding_message, field_name, field_type){
		super(msg);
		this.overriding_message = overriding_message;
        this.field_name = field_name;
        this.field_type = field_type;
		this.name = 'MessageOverrideError';
	}

	toString(){
		return `Override of type ${this.overriding_message.TypeName()} cannot be written to field "${this.field_name}" of type ${this.field_type}`;
	}
};

class  NodeUnreferenceableError extends Error {
	constructor(msg){
		super(msg);
		this.name = 'NodeUnreferenceableError';
	}
};
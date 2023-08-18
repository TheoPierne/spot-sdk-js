'use strict';

const { BaseClient, error_factory } = require('./common');
const { chunk_message } = require('./data_chunk');
const { ResponseError } = require('./exceptions');
const { add_lease_wallet_processors } = require('./lease');

const autowalk_pb = require('../bosdyn/api/autowalk/autowalk_pb');
const autowalk_service_grpc_pb = require('../bosdyn/api/autowalk/autowalk_service_grpc_pb');

class AutowalkResponseError extends ResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'AutowalkResponseError';
  }
}

class CompilationError extends AutowalkResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'CompilationError';
  }
}

class ValidationError extends AutowalkResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'ValidationError';
  }
}

class AutowalkClient extends BaseClient {
  static default_service_name = 'autowalk-service';
  static service_type = 'bosdyn.api.autowalk.AutowalkService';

  constructor(name = null) {
    super(autowalk_service_grpc_pb.AutowalkServiceClient, name);
  }

  update_from(other) {
    super.update_from(other);
    if (this.lease_wallet) {
      add_lease_wallet_processors(this, this.lease_wallet);
    }
  }

  compile_autowalk(walk, data_chunk_type_byte = 1000 * 1000, args) {
    const req = AutowalkClient._compile_autowalk_request(walk);
    this._apply_request_processors(req, false);
    return this.call(
      this._stub.compileAutowalk,
      [...chunk_message(req, data_chunk_type_byte)],
      null,
      _compile_autowalk_error_from_response,
      false,
      args,
    );
  }

  load_autowalk(walk, leases = [], data_chunk_byte_size = 1000 * 1000, args) {
    const req = this._load_autowalk_request(walk, leases);
    this._apply_request_processors(req, false);
    return this.call(
      this._stub.loadAutowalk,
      [...chunk_message(req, data_chunk_byte_size)],
      null,
      _load_autowalk_error_from_response,
      false,
      args,
    );
  }

  static _compile_autowalk_request(walk) {
    return new autowalk_pb.CompileAutowalkRequest().setWalk(walk);
  }

  static _load_autowalk_request(walk, leases) {
    const req = new autowalk_pb.LoadAutowalkRequest().setWalk(walk);
    for (const lease of leases) {
      req.addLeases(lease.lease_proto);
    }
    return req;
  }
}

const _COMPILE_AUTOWALK_STATUS_TO_ERROR = {
  [autowalk_pb.CompileAutowalkResponse.Status.STATUS_OK]: [null, null],
  [autowalk_pb.CompileAutowalkResponse.Status.STATUS_COMPILE_ERROR]: [
    CompilationError,
    'Provided Walk could not be compiled because the Walk was malformed.',
  ],
};

const _LOAD_AUTOWALK_STATUS_TO_ERROR = {
  [autowalk_pb.LoadAutowalkResponse.Status.STATUS_OK]: [null, null],
  [autowalk_pb.LoadAutowalkResponse.Status.STATUS_COMPILE_ERROR]: [
    CompilationError,
    'Provided Walk could not be compiled because the Walk was malformed.',
  ],
  [autowalk_pb.LoadAutowalkResponse.Status.STATUS_VALIDATE_ERROR]: [
    ValidationError,
    'Provided Walk could not be validated because some part of the Walk was unable to initialize.',
  ],
};

function _compile_autowalk_error_from_response(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(autowalk_pb.CompileAutowalkResponse.Status),
    _COMPILE_AUTOWALK_STATUS_TO_ERROR,
  );
}

function _load_autowalk_error_from_response(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(autowalk_pb.LoadAutowalkResponse.Status),
    _LOAD_AUTOWALK_STATUS_TO_ERROR,
  );
}

module.exports = {
  AutowalkClient,
  AutowalkResponseError,
  CompilationError,
  ValidationError,
};

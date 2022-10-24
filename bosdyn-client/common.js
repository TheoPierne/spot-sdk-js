'use strict';

const { cloneDeep } = require('lodash');

const { translate_exception } = require('./channel');
const { InternalServerError, InvalidRequestError, LeaseUseError, UnsetStatusError } = require('./exceptions');
const { LoggerUtil } = require('./loggerUtil');

const data_chunk_pb = require('../bosdyn/api/data_chunk_pb');
const header_pb = require('../bosdyn/api/header_pb');
const lease_pb = require('../bosdyn/api/lease_pb');

// In seconds
const DEFAULT_RPC_TIMEOUT = 30 * 1000;

function popObject(obj, key, defaultVal) {
  let ret = obj[key];
  if (ret === undefined || (key === 'timeout' && ret === null)) {
    ret = defaultVal;
  } else {
    delete obj[key];
  }
  return ret;
}

function common_header_errors(response) {
  if (response?.getHeader()?.getError()?.getCode() === header_pb.CommonError.Code.CODE_UNSPECIFIED) {
    return new UnsetStatusError(response);
  }
  if (response?.getHeader()?.getError()?.getCode() === header_pb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR) {
    return new InternalServerError(response);
  }
  if (response?.getHeader()?.getError()?.getCode() === header_pb.CommonError.Code.CODE_INVALID_REQUEST) {
    return new InvalidRequestError(response);
  }
  return null;
}

function streaming_common_header_errors(response_iterator) {
  for (const response of response_iterator) {
    let error = common_header_errors(response);
    if (error !== null) return error;
  }
  return null;
}

function common_lease_errors(response) {
  let lease_use_results = [];
  if (response.hasLeaseUseResult()) {
    lease_use_results = [response.getLeaseUseResult()];
  } else if (Object.hasOwn(response, 'lease_use_results')) {
    lease_use_results = response.lease_use_results;
  } else {
    return new InternalServerError(response, 'No LeaseUseResult field found!');
  }

  for (const result of lease_use_results) {
    if (result.getStatus() !== lease_pb.ReturnLeaseResponse.Status.STATUS_OK) {
      return new LeaseUseError(response);
    }
  }

  return null;
}

function streaming_common_lease_errors(response_iterator) {
  for (const response in response_iterator) {
    const error = common_lease_errors(response);
    if (error !== null) {
      return error;
    }
  }

  return null;
}

function error_pair(error_message) {
  return [error_message, error_message.errorString];
}

function error_factory(response, status, status_to_string, status_to_error) {
  if (!(status in status_to_error)) return null;

  let [error_type, message] = status_to_error[status];

  if (error_type === null) return null;

  if (message === null) {
    let status_str = '';
    try {
      status_str = status_to_string[status];
    } catch (e) {
      if (e instanceof Error) {
        message = `Code: ${status} (Protobuf definition mismatch?)`;
      } else {
        message = `Code: ${status} (${status_str})`;
      }
    }
  }

  if (Array.isArray(response)) {
    for (const resp of response) {
      const err = new error_type(resp, message);
      if (err !== null) return err;
    }
    return null;
  } else {
    return new error_type(response, message);
  }
}

function handle_unset_status_error(unset, field = 'status', statustype = null, args, func) {
  if (Array.isArray(args)) {
    for (const resp of args) {
      const _statustype = statustype ? statustype : resp;
      if (resp[field] === _statustype[unset]) {
        return Error(resp);
      }
    }
  } else {
    const _statustype = statustype ? statustype : args[0];
    if (args[0][field] === _statustype[unset]) {
      return Error(args[0]);
    }
  }
  return func(args);
}

function handle_common_header_errors(args, func) {
  if (Array.isArray(args)) {
    return streaming_common_header_errors(args) || func(args);
  } else {
    return common_header_errors(args) || func(args);
  }
}

function handle_lease_use_result_errors(args, func) {
  if (Array.isArray(args)) {
    return streaming_common_lease_errors(args) || func(args);
  } else {
    return common_lease_errors(args) || func(args);
  }
}

function print_response(args, func) {
  function print_message(response) {
    console.log(response);
  }

  function print_streaming_message(response_iterator) {
    for (const response in response_iterator) {
      print_message(response);
    }
  }

  if (Array.isArray(args)) {
    print_streaming_message(args);
  } else {
    print_message(args);
  }
  return func(args);
}

function process_args(func) {
  function processor(rpc_method, request, value_from_response = null, error_from_response = null, args = {}) {
    if (Object.hasOwn(args, 'disable_value_handler')) {
      value_from_response = null;
    }
    delete args.disable_value_handler;

    if (Object.hasOwn(args, 'disable_error_handler')) {
      error_from_response = null;
    }
    delete args.disable_error_handler;

    return func(rpc_method, request, value_from_response, error_from_response, args);
  }

  return processor;
}

class BaseClient {
  static _SPLIT_SERVICE = '.';
  static _SPLIT_METHOD = '/';

  constructor(stub_creation_func, name = null) {
    this._service_type_short = this.constructor.service_type.split(BaseClient._SPLIT_SERVICE).slice(-1);

    this._channel = null;
    this._logger = null;
    this._name = name;
    this._stub = null;
    this._stub_creation_func = stub_creation_func;

    this.logger = console;
    this.request_processors = [];
    this.response_processors = [];
    this.lease_wallet = null;
    this.client_name = null;
  }

  static request_trim_for_log(req) {
    return `\n${JSON.stringify(req.toObject()).substring(0, 9000)}\n`;
  }

  static response_trim_for_log(resp) {
    return `\n${JSON.stringify(resp.toObject()).substring(0, 9000)}\n`;
  }

  get channel() {
    if (this._channel === null) throw new Error('Client channel is unset!');
    return this._channel;
  }

  set channel(channel) {
    this._channel = channel;
    this._stub = new this._stub_creation_func(
      channel.target.path,
      channel.credentials,
      channel.options,
    );
  }

  update_from(other) {
    this.request_processors = this.request_processors.concat(other.request_processors);
    this.response_processors = this.response_processors.concat(other.response_processors);
    this.logger = other.logger;
    // This.logger = other.logger.getChild(this._name || this._service_type_short);
    this.lease_wallet = other.lease_wallet;
    this.client_name = other.client_name;
  }

  update_request_iterator(request_iterator, logger, rpc_method, is_blocking) {
    const a = [];
    for (let request of request_iterator) {
      request = this._apply_request_processors(cloneDeep(request));
      if (is_blocking) {
        logger.debug(`[COMMON] blocking request: ${rpc_method._method} ${BaseClient.request_trim_for_log(request)}`);
      } else {
        logger.debug(`[COMMON] async request: ${rpc_method._method} ${BaseClient.request_trim_for_log(request)}`);
      }
      a.push(request);
    }
    console.log(a);
    return a;
  }

  update_response_iterator(response_handler, logger, rpc_method, is_blocking) {
    return new Promise(resolve => {
      const a = [];
      response_handler.on('data', e => {
        const response = this._apply_response_processors(cloneDeep(e));
        if (is_blocking) {
          logger.debug(
            `[COMMON] blocking response: ${rpc_method._method} ${BaseClient.request_trim_for_log(response)}`,
          );
        } else {
          logger.debug(`[COMMON] async response: ${rpc_method._method} ${BaseClient.request_trim_for_log(response)}`);
        }
        a.push(response);
      });

      response_handler.on('end', e => {
        console.log(e);
        return resolve(a);
      });

      response_handler.on('error', e => {
        throw translate_exception(e);
      });
    });
  }

  #make(rpc_method, request, { req = false, res = false } = {}, args) {
    const timeout = popObject(args, 'timeout', DEFAULT_RPC_TIMEOUT);
    rpc_method = rpc_method.bind(this._stub);
    return new Promise((resolve, reject) => {
      if (!req && !res) {
        // If the request and the response are not a streams.
        rpc_method(request, { deadline: Date.now() + timeout }, (err, response) => {
          if (err) return reject(err);
          return resolve(response);
        });
      } else if (!req && res) {
        // If the request is not a stream but the response is one.
        return resolve(rpc_method(request, { deadline: Date.now() + timeout }));
      } else if (req && !res) {
        // If the request is a stream but the response is not one.
        const call = rpc_method({ deadline: Date.now() + timeout }, (err, response) => {
          if (err) return reject(err);
          return resolve(response);
        });
        if (Array.isArray(request)) {
          for (const requestToMake of request) {
            call.write(requestToMake);
          }
        } else {
          call.write(request);
        }
        call.end();
      } else if (req && res) {
        // If the request and the response are a streams.
        const call = rpc_method({ deadline: Date.now() + timeout });
        if (Array.isArray(request)) {
          for (const requestToMake of request) {
            call.write(requestToMake);
          }
        } else {
          call.write(request);
        }
        call.end();
        return resolve(call);
      }
    });
  }

  async call(rpc_method, request, value_from_response = null, error_from_response = null, args = {}) {
    const logger = this._get_logger(rpc_method);
    const path = rpc_method.path;

    if (rpc_method.requestStream) {
      request = this.update_request_iterator(request, logger, rpc_method, true);
    } else {
      request = this._apply_request_processors(cloneDeep(request));
      logger.debug(`[COMMON] blocking request: ${path} ${BaseClient.request_trim_for_log(request)}`);
    }

    let response;

    try {
      response = await this.#make(
        rpc_method,
        request,
        { req: rpc_method.requestStream, res: rpc_method.responseStream },
        args,
      );
    } catch (err) {
      console.log('Pensez à retirer le log du catch');
      console.log(err);
      throw translate_exception(err);
    }

    if (rpc_method.responseStream) {
      const res = this.update_response_iterator(response, logger, rpc_method, true);
      return this.handle_response_streaming([...res], error_from_response, value_from_response);
    } else {
      const res = this._apply_response_processors(response);
      logger.debug(`[COMMON] response: ${path} ${BaseClient.response_trim_for_log(res)}`);
      return this.handle_response(res, error_from_response, value_from_response);
    }
  }

  handle_response(response, error_from_response, value_from_response) {
    const exc = error_from_response !== null ? error_from_response(response) : null;
    if (exc !== null) {
      throw exc;
    }
    if (value_from_response === null) {
      return response;
    }
    return value_from_response(response);
  }

  handle_response_streaming(response, error_from_response, value_from_response) {
    const exc = error_from_response !== null ? error_from_response(response.map()) : null;
    if (exc !== null) {
      throw exc;
    }
    if (value_from_response === null) {
      return response;
    }
    return value_from_response(response.map());
  }

  _apply_request_processors(request) {
    if (request === null) return null;
    for (const proc of this.request_processors) {
      proc.mutate(request);
    }
    return request;
  }

  _apply_response_processors(response) {
    if (response === null) return null;
    for (const proc of this.response_processors) {
      proc.mutate(response);
    }
    return response;
  }

  _get_logger(rpc_method) {
    const method_name = rpc_method._method || null;
    if (method_name) {
      const method_name_short = method_name.split(BaseClient._SPLIT_METHOD).slice(-1);
      // This returns the same instance if it's been created before.
      return LoggerUtil.getChild(this.logger, method_name_short);
    }
    return this.logger;
  }

  static *chunk_message(message, data_chunk_byte_size) {
    const serialized = message.serializeBinary();
    const total_bytes_size = serialized.length;
    const num_chunks = Math.ceil(total_bytes_size / data_chunk_byte_size);
    for (const i of [...Array(num_chunks).keys()]) {
      const start_index = i * data_chunk_byte_size;
      const end_index = Math.min(total_bytes_size, (i + 1) * data_chunk_byte_size);
      const chunk = new data_chunk_pb.DataChunk()
        .setTotalSize(total_bytes_size)
        .setData(serialized.slice(start_index, end_index));
      yield chunk;
    }
  }
}

function get_self_ip() {
  const { address } = require('ip');
  return address();
}

module.exports = {
  BaseClient,
  common_header_errors,
  streaming_common_header_errors,
  common_lease_errors,
  streaming_common_lease_errors,
  error_pair,
  error_factory,
  handle_unset_status_error,
  handle_common_header_errors,
  handle_lease_use_result_errors,
  print_response,
  process_args,
  get_self_ip,
};

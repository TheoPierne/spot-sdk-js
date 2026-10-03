/**
 * @file Contains elements common to all service clients.
 */

'use strict';

const dgram = require('node:dgram');
const { once } = require('node:events');

const { Metadata } = require('@grpc/grpc-js');
const { camelCase } = require('lodash');

const { translateException } = require('./channel');
const { parseFromChunks } = require('./data_chunk');
const {
  CustomParamError,
  InternalDeserializationError,
  InternalServerError,
  InvalidRequestError,
  LeaseUseError,
  UnsetStatusError,
  ResponseError,
  LicenseError,
} = require('./exceptions');
const { LoggerUtil } = require('./logger_util');

const headerPb = require('../bosdyn/api/header_pb');
const leasePb = require('../bosdyn/api/lease_pb');
const licensePb = require('../bosdyn/api/license_pb');

// In milliseconds
const DEFAULT_RPC_TIMEOUT = 30_000;

// Message fields (as named by toObject()) whose value must never be written to the logs.
const _SENSITIVE_FIELDS = new Set(['password', 'token', 'secret', 'payloadSecret', 'userToken', 'appToken']);

function safeStringify(value) {
  return JSON.stringify(value, (key, item) => {
    if (item && _SENSITIVE_FIELDS.has(key)) return '<redacted>';
    return typeof item === 'bigint' ? item.toString(10) : item;
  });
}

/**
 * The key of the path of the gRPC method in the infos of the logs of the RPCs, e.g.
 * '/bosdyn.api.DataBufferService/RecordTextMessages': the filters of the LoggingHandler of data_buffer recognize
 * them (Python checks the name of the logger, or the module and the function of the records).
 */
const RPC_METHOD = Symbol.for('bosdyn.rpcMethod');

/**
 * Log a protobuf message at debug level. The message is only serialized when debug logging is
 * enabled: like Python's lazy `logger.debug('%s', msg)`, and unlike an eager template literal.
 * @param {import('winston').Logger} logger Logger to use.
 * @param {string} prefix Text before the method name, e.g. 'blocking request'.
 * @param {import('@grpc/grpc-js').MethodDefinition} rpcMethod The gRPC method.
 * @param {?JspbMessage} message The message to log.
 */
function logMessage(logger, prefix, rpcMethod, message) {
  if (typeof logger.isDebugEnabled === 'function' && !logger.isDebugEnabled()) return;
  const text = `${prefix}: ${rpcMethod.path} ${safeStringify(message?.toObject?.())}`;
  // The info of a winston logger carries the method, another logger (e.g. a console) gets the text.
  logger.debug(typeof logger.isDebugEnabled === 'function' ? { message: text, [RPC_METHOD]: rpcMethod.path } : text);
}

function popObject(obj, key, defaultVal) {
  let ret = obj[key];
  if (ret === undefined) {
    ret = defaultVal;
  } else {
    delete obj[key];
  }
  return ret;
}

/**
 * The deadline of an RPC, like the timeout of Python.
 * @param {?number} [timeout] In milliseconds: 30 s if undefined, no deadline if null (None in Python) or Infinity.
 * @returns {number}
 */
function _deadline(timeout) {
  if (timeout === undefined) return Date.now() + DEFAULT_RPC_TIMEOUT;
  if (timeout === null || timeout === Infinity) return Infinity;
  return Date.now() + timeout;
}

/**
 * The metadata of an RPC, like the metadata and wait_for_ready arguments of Python.
 * @param {?(Metadata|Iterable<[string, string|Buffer]>|Object<string, string|Buffer>)} metadata A Metadata, the
 * (key, value) pairs of Python, or an object of the values by key.
 * @param {boolean} [waitForReady] Wait for the channel to be ready instead of failing at once.
 * @returns {?Metadata} null without metadata nor waitForReady: the stub is called without metadata, like before.
 */
function _callMetadata(metadata, waitForReady) {
  if ((metadata === undefined || metadata === null) && waitForReady === undefined) return null;
  let result;
  if (metadata instanceof Metadata) {
    result = metadata.clone();
  } else {
    result = new Metadata();
    const entries = metadata === undefined || metadata === null ? [] : metadata;
    for (const [key, value] of Symbol.iterator in Object(entries) ? entries : Object.entries(entries)) {
      result.add(key, value);
    }
  }
  if (waitForReady !== undefined) result.setOptions({ waitForReady: Boolean(waitForReady) });
  return result;
}

/**
 * @typedef {import('google-protobuf').Message} JspbMessage
 */

/**
 * @typedef {import('./robot').Robot} Robot
 */

/**
 * @typedef {import('./lease').LeaseWallet} LeaseWallet
 */

/**
 * Return an exception based on common response header. None if no error.
 * @param {JspbMessage} response The response from spot
 * @returns {ResponseError|InvalidRequestError|InternalServerError|UnsetStatusError|null}
 */
function commonHeaderErrors(response) {
  // Messages without a header field (e.g. third-party protos) cannot carry a common error.
  if (typeof response?.getHeader !== 'function') {
    return null;
  }

  // Like Python, an unset header or error reads as the default code, CODE_UNSPECIFIED.
  const errorCode = response.getHeader()?.getError()?.getCode() ?? headerPb.CommonError.Code.CODE_UNSPECIFIED;

  if (errorCode === headerPb.CommonError.Code.CODE_OK) {
    return null;
  }
  if (errorCode === headerPb.CommonError.Code.CODE_UNSPECIFIED) {
    return new UnsetStatusError(response);
  }
  if (errorCode === headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR) {
    return new InternalServerError(response);
  }
  if (errorCode === headerPb.CommonError.Code.CODE_INVALID_REQUEST) {
    return new InvalidRequestError(response);
  }
  return new ResponseError(response);
}

/**
 * Return an error based on common response header for a streaming response iterator. null if no error.
 */
function streamingCommonHeaderErrors(responseIterator) {
  for (const response of responseIterator) {
    const error = commonHeaderErrors(response);
    if (error !== null) return error;
  }
  return null;
}

/**
 * Return an error based on lease use result. null if no error.
 */
function commonLeaseErrors(response) {
  let leaseUseResults = [];
  if (response.hasLeaseUseResult) {
    if (response.hasLeaseUseResult()) {
      leaseUseResults = [response.getLeaseUseResult()];
    }
  } else if (response.getLeaseUseResultsList && response.getLeaseUseResultsList()) {
    leaseUseResults = response.getLeaseUseResultsList();
  } else {
    return new InternalServerError(response, 'No LeaseUseResult field found!');
  }

  for (const result of leaseUseResults) {
    if (result.getStatus() !== leasePb.LeaseUseResult.Status.STATUS_OK) {
      return new LeaseUseError(response, result);
    }
  }

  return null;
}

/**
 * Return an error based on lease use result for a streaming response iterator. null if no error.
 */
function streamingCommonLeaseErrors(responseIterator) {
  for (const response of responseIterator) {
    const error = commonLeaseErrors(response);
    if (error !== null) {
      return error;
    }
  }

  return null;
}

/**
 * Return an error based on having a custom parameter status and message. null if no error.
 */
function customParamsError(
  response,
  statusValue = null,
  statusFieldName = 'status',
  errorFieldName = 'custom_param_error',
  totalResponse = null,
) {
  if (statusValue === null) {
    statusValue = response.constructor.Status.STATUS_CUSTOM_PARAMS_ERROR;
  }

  if (response[camelCase(`get_${statusFieldName}`)]() === statusValue) {
    return new CustomParamError(totalResponse || response, response[camelCase(`get_${errorFieldName}`)]());
  }
  return null;
}

/**
 * Return an error based on the status field of the given response.
 * Since most callers of this function are "response to error" callbacks, any exceptions
 * raised by this function are a considered a serious problem. Strongly consider using
 * collections.defaultdict for the status_to_error mapping, and/or wrapping calls to this
 * function in try/except blocks.
 * @param {JspbMessage|JspbMessage[]} response Protobuf message to examine or an iterator of protobuf responses.
 * @param {number} status Status from the protobuf message.
 * @param {*} statusToString Function that converts numeric status value to string. May raise
 * ValueError, in which case just the numeric code is included in a default
 * error message.
 * @param {Map} statusToError mapping of status -> [error_constructor, error_message]
 * error_constructor must take arguments "response" and "error_message".
 * (and ideally will subclass from ResponseError.)
 * @returns {?ResponseError} The error, or null.
 */
function errorFactory(response, status, statusToString, statusToError) {
  // A status missing from a plain Map (e.g. added by a newer robot software) is still an error.
  let [errorType, message] = statusToError.get(status) ?? [ResponseError, null];

  if (errorType === null) return null;

  if (message === null) {
    const name = statusName(statusToString, status);
    message = name === undefined ? `Code: ${status} (Protobuf definition mismatch?)` : `Code: ${status} (${name})`;
  }

  if (Array.isArray(response)) {
    for (const resp of response) {
      const err = new errorType(resp, message);
      if (err !== null) return err;
    }
    return null;
  } else {
    return new errorType(response, message);
  }
}

/**
 * Name of a status value.
 * @param {Function|string[]|Object<string, number>} statusToString A function (like Python's
 * `Status.Name`), an array of names indexed by value, or the enum object itself.
 * @param {number} status The status value.
 * @returns {string|undefined}
 */
function statusName(statusToString, status) {
  try {
    if (typeof statusToString === 'function') return statusToString(status);
    if (Array.isArray(statusToString)) return statusToString[status];
    if (statusToString && typeof statusToString === 'object') {
      return Object.keys(statusToString).find(key => statusToString[key] === status);
    }
  } catch (e) {
    // Fall through: unknown name.
  }
  return undefined;
}

/**
 * The value of the unset status in a status type, like getattr(statustype, unset) in Python: an enum, or a message
 * class whose nested enums have it (Python message classes have their enum values as attributes). Only the Status
 * enum of the response was read: e.g. the STATE_UNKNOWN of SpotCheckFeedbackResponse.State was never detected.
 * @param {?(Object|Function)} statustype
 * @param {string} unset The name of the unset value, e.g. 'STATUS_UNKNOWN'.
 * @returns {number|undefined}
 */
function _unsetStatusValue(statustype, unset) {
  if (!statustype) return undefined;
  if (typeof statustype[unset] === 'number') return statustype[unset];
  for (const value of Object.values(statustype)) {
    if (value !== null && typeof value === 'object' && typeof value[unset] === 'number') return value[unset];
  }
  return undefined;
}

/**
 * Decorate "error from response" functions to handle unset status field errors.
 */
function handleUnsetStatusError(unset, field = 'status', statusobj = null) {
  // eslint-disable-next-line func-names
  return function (func) {
    // eslint-disable-next-line func-names
    return function (...args) {
      if (Array.isArray(args[0])) {
        for (const resp of args[0]) {
          const unsetValue = _unsetStatusValue(statusobj || resp.constructor, unset);
          if (unsetValue !== undefined && resp[camelCase(`get_${field}`)]() === unsetValue) {
            return new UnsetStatusError(resp);
          }
        }
      } else {
        const unsetValue = _unsetStatusValue(statusobj || args[0].constructor, unset);
        if (unsetValue !== undefined && args[0][camelCase(`get_${field}`)]() === unsetValue) {
          return new UnsetStatusError(args[0]);
        }
      }
      return func(...args);
    };
  };
}

/**
 * Decorate "error from response" functions to handle typical header errors.
 */
function handleCommonHeaderErrors(func) {
  // eslint-disable-next-line func-names
  return function (...args) {
    if (Array.isArray(args[0])) {
      return streamingCommonHeaderErrors(...args) || func(...args);
    } else {
      return commonHeaderErrors(...args) || func(...args);
    }
  };
}

/**
 * Decorate "error from response" functions to handle typical lease errors.
 */
function handleLeaseUseResultErrors(func) {
  // eslint-disable-next-line func-names
  return function (...args) {
    if (Array.isArray(args[0])) {
      return streamingCommonLeaseErrors(...args) || func(...args);
    } else {
      return commonLeaseErrors(...args) || func(...args);
    }
  };
}

/**
 * Decorate "error from response" functions to handle custom param errors.
 */
function handleCustomParamsErrors(funcOrOptions, maybeOptions = {}) {
  let func = null;
  let options = {};

  // Si le premier argument est une fonction, cela signifie qu'il n'y a pas d'options fournies
  if (typeof funcOrOptions === 'function') {
    func = funcOrOptions;
    options = maybeOptions;
  } else {
    // Si le premier argument n'est pas une fonction, alors ce sont des options
    options = funcOrOptions;
  }

  const { statusValue = null, statusFieldName = 'status', errorFieldName = 'custom_param_error' } = options;

  const decorator =
    fn =>
    (...args) =>
      customParamsError(args[0], statusValue, statusFieldName, errorFieldName) || fn(...args);

  // Si la fonction est appelée avec un seul argument et que c'est une fonction,
  // nous considérons qu'il s'agit du cas sans options supplémentaires.
  if (func) {
    return decorator(func);
  }

  // Sinon, nous retournons le décorateur prêt à être appliqué à une fonction
  return decorator;
}

/**
 * Return an error based on license status.
 *
 * null if no error.
 */
function commonLicenseErrors(response, allowUnset = false) {
  const licenseStatus = response.getLicenseStatus();

  if (allowUnset && licenseStatus === licensePb.LicenseInfo.Status.STATUS_UNKNOWN) {
    return null;
  } else if (licenseStatus !== licensePb.LicenseInfo.Status.STATUS_VALID) {
    return new LicenseError(response);
  }

  return null;
}

/**
 * Decorate "error from response" functions to handle typical license errors.
 */
function handleLicenseErrors(func) {
  // eslint-disable-next-line func-names
  return function (...args) {
    return commonLicenseErrors(...args) || func(...args);
  };
}

/**
 * Decorate "error from response" functions to handle typical license errors. Does not throw an error for
 * STATUS_UNKNOWN. Use for responses that may only sometimes fill out the license status.
 */
function handleLicenseErrorsIfPresent(func) {
  // eslint-disable-next-line func-names
  return function (...args) {
    return commonLicenseErrors(...args, true) || func(...args);
  };
}

/**
 * @typedef {new (
 * address: string,
 * credentials: import('@grpc/grpc-js').ChannelCredentials,
 * options?: import('@grpc/grpc-js').ClientOptions
 * ) => import('@grpc/grpc-js').Client} stubCreationFunc
 */

/**
 * @typedef {import('@grpc/grpc-js').Channel} GrpcChannel
 */

/**
 * @typedef {import('winston').Logger} WinstonLogger
 */

/**
 * Helper base class for all clients to Boston Dynamics services.
 * @template {import('@grpc/grpc-js').Client} Stub
 */
class BaseClient {
  /**
   * Delimiter used to split the service type.
   * @type {string}
   * @private
   */
  static _SPLIT_SERVICE = '.';

  /**
   * Delimiter used to split the method type.
   * @type {string}
   * @private
   */
  static _SPLIT_METHOD = '/';

  /**
   * @param {stubCreationFunc} stubCreationFunc A constructor function for a class that
   * extends `grpc.Client`, used to create the gRPC stub for this client.
   * @param {string} [name=null] Optional name for this client.
   */
  constructor(stubCreationFunc, name = null) {
    /**
     * The short form of the service type derived from the service type of the client class.
     * @type {string}
     * @private
     */
    this._serviceTypeShort = (this.constructor.serviceType || 'BaseClient').split(BaseClient._SPLIT_SERVICE).at(-1);

    /**
     * The gRPC channel used for communication with the service.
     * @type {?GrpcChannel}
     * @private
     */
    this._channel = null;

    /**
     * Optional name of the client.
     * @type {?string}
     * @private
     */
    this._name = name;

    /**
     * The gRPC stub used to communicate with the Boston Dynamics service.
     * This stub is created using the `stubCreationFunc` provided in the constructor.
     * @type {?Stub}
     * @private
     */
    this._stub = null;

    /**
     * The constructor function used to create the gRPC stub.
     * This function is expected to be a class that extends `grpc.Client`.
     * @type {stubCreationFunc}
     * @private
     */
    this._stubCreationFunc = stubCreationFunc;

    /**
     * The logger used for logging messages. Defaults to `console`.
     * @type {WinstonLogger}
     */
    this.logger = LoggerUtil.getLogger(this._name || `bosdyn.${this._serviceTypeShort}`);

    /**
     * List of processors that modify requests before sending them.
     * @type {Function[]}
     */
    this.requestProcessors = [];

    /**
     * List of processors that modify responses after receiving them.
     * @type {Function[]}
     */
    this.responseProcessors = [];

    /**
     * A wallet containing lease information for the client.
     * @type {?LeaseWallet}
     */
    this.leaseWallet = null;

    /**
     * The name of the client.
     * @type {?string}
     */
    this.clientName = null;

    this.executor = null;

    /**
     * Returns a new channel for the client after an InternalDeserializationError (set by Robot.ensureClient(), like
     * Python 5.2.0), or null.
     * @type {?function(): Promise<GrpcChannel>}
     * @private
     */
    this._channelResetFn = null;
  }

  get channel() {
    if (this._channel === null) throw new Error('Client channel is unset!');
    return this._channel;
  }

  /**
   * @param {GrpcChannel} channel The channel to add to the stub creation function
   */
  set channel(channel) {
    this._channel = channel;
    // With channelOverride, grpc-js ignores the address and the credentials: the stub uses the channel as is.
    this._stub = new this._stubCreationFunc(channel.getTarget?.() ?? '', null, { channelOverride: channel });
  }

  /**
   * Adopt key objects like processors, logger, and wallet from other.
   * @param {Robot} other Update object form another service.
   */
  updateFrom(other) {
    // Same order as Python: the processors of other (e.g. AddRequestHeader) run first.
    this.requestProcessors = other.requestProcessors.concat(this.requestProcessors);
    this.responseProcessors = other.responseProcessors.concat(this.responseProcessors);
    this.logger = LoggerUtil.getChild(other.logger, this._name || this._serviceTypeShort);
    this.leaseWallet = other.leaseWallet;
    this.clientName = other.clientName;
    this.executor = other.executor;
  }

  async *updateRequestIterator(requestIterator, logger, rpcMethod, isBlocking, copyRequest = true) {
    for await (let request of requestIterator) {
      request = this._applyRequestProcessors(request, copyRequest);
      logMessage(logger, isBlocking ? 'blocking request' : 'async request', rpcMethod, request);
      yield request;
    }
  }

  updateResponseIterator(responseIterator, logger, rpcMethod, isBlocking) {
    const responses = [];
    for (const response of responseIterator) {
      const res = this._applyResponseProcessors(response.clone());
      logMessage(logger, isBlocking ? 'blocking response' : 'async response', rpcMethod, response);
      responses.push(res);
    }
    return responses;
  }

  /**
   * @param {import('@grpc/grpc-js').MethodDefinition} rpcMethod
   * @param {import('google-protobuf').Message|import('google-protobuf').Message[]} request
   * @param {{ req: boolean, res: boolean }} param2
   * @param {Object} [args] The call options: `timeout` (milliseconds, see _deadline()), `metadata` and `waitForReady`
   * (see _callMetadata()), the other ones are options of grpc-js (e.g. `credentials`), like the keyword arguments
   * that Python passes to gRPC (they were dropped).
   * @returns {Promise<*>}
   */
  async #make(rpcMethod, request, { req = false, res = false } = {}, args) {
    const { timeout, metadata, waitForReady, ...callOptions } = args;
    const boundRpcMethod = rpcMethod.bind(this._stub);
    const meta = _callMetadata(metadata, waitForReady);
    // The stubs of grpc-js take the metadata before the options, and do without.
    const callArgs = [...(meta === null ? [] : [meta]), { ...callOptions, deadline: _deadline(timeout) }];

    if (!req && !res) {
      return new Promise((resolve, reject) => {
        boundRpcMethod(request, ...callArgs, (err, response) => {
          if (err) return reject(err);
          return resolve(response);
        });
      });
    }

    if (!req && res) {
      return new Promise((resolve, reject) => {
        const queue = [];
        const stream = boundRpcMethod(request, ...callArgs);
        stream.on('error', reject);
        stream.on('data', data => queue.push(data));
        stream.on('end', () => resolve(queue));
      });
    }

    if (req && !res) {
      return new Promise((resolve, reject) => {
        const call = boundRpcMethod(...callArgs, (err, response) => {
          if (err) return reject(err);
          return resolve(response);
        });

        (async () => {
          try {
            for await (const requestToMake of request) {
              if (!call.write(requestToMake)) await once(call, 'drain');
            }
            call.end();
          } catch (error) {
            call.destroy?.(error);
            reject(error);
          }
        })();
      });
    }

    if (req && res) {
      return new Promise((resolve, reject) => {
        const queue = [];
        const call = boundRpcMethod(...callArgs);
        call.on('data', data => queue.push(data));
        call.on('error', reject);
        call.on('end', () => resolve(queue));

        (async () => {
          try {
            for await (const requestToMake of request) {
              if (!call.write(requestToMake)) await once(call, 'drain');
            }
            call.end();
          } catch (error) {
            call.destroy?.(error);
            reject(error);
          }
        })();
      });
    }

    throw new Error('Unsupported RPC streaming configuration');
  }

  /**
   * Returns result of calling rpcMethod(request, args) after running processors.
   * @param {import('@grpc/grpc-js').MethodDefinition} rpcMethod The gRPC stub method.
   * @param {import('google-protobuf').Message|import('google-protobuf').Message[]} request The request message, or an
   * (async) iterable of messages for client streaming.
   * @param {?Function} [valueFromResponse=null] Converts the response to the returned value.
   * @param {?Function} [errorFromResponse=null] Returns the error to throw for a response, or null.
   * @param {boolean} [copyRequest=true] Apply the request processors to a copy of the request.
   * @param {Object} [args={}] Call options, not modified: `timeout` in milliseconds (30 s if not given, no deadline if
   * null like None in Python), `metadata` and `waitForReady`, and the other options of grpc-js (e.g. `credentials`).
   * `assembleType` is the message class to assemble from a stream of DataChunks, like Python's
   * `assemble_type`: the handlers then receive that single message.
   * @returns {Promise<*>}
   */
  async call(rpcMethod, request, valueFromResponse = null, errorFromResponse = null, copyRequest = true, args = {}) {
    // Work on a copy: popping the options must not change the object of the caller (reused in loops).
    args = { ...args };
    const assembleType = popObject(args, 'assembleType', null);
    const logger = this._getLogger(rpcMethod);

    if (rpcMethod.requestStream) {
      request = this.updateRequestIterator(request, logger, rpcMethod, true, copyRequest);
    } else {
      request = this._applyRequestProcessors(request, copyRequest);
      logMessage(logger, 'blocking request', rpcMethod, request);
    }

    let response;

    try {
      response = await this.#make(
        rpcMethod,
        request,
        { req: rpcMethod.requestStream, res: rpcMethod.responseStream },
        args,
      );
    } catch (err) {
      // Like Python, only transport errors (gRPC errors have a numeric status code) are translated: a bug
      // (e.g. a TypeError in a request processor) must not look like a problem reaching the robot.
      if (typeof err?.code !== 'number') throw err;
      const translated = translateException(err);
      // Like Python 5.2.0, a channel whose responses cannot be parsed is replaced: retrying the RPC should work.
      if (translated instanceof InternalDeserializationError && this._channelResetFn !== null) {
        this.channel = await this._channelResetFn();
      }
      throw translated;
    }

    if (rpcMethod.responseStream) {
      if (assembleType !== null) {
        // Assemble the data chunks into a message before passing it to non-streaming handlers.
        const msg = this._applyResponseProcessors(parseFromChunks(response, assembleType));
        logMessage(logger, 'response', rpcMethod, msg);
        return this.handleResponse(msg, errorFromResponse, valueFromResponse);
      }
      const res = this.updateResponseIterator(response, logger, rpcMethod, true);
      return this.handleResponseStreaming(res, errorFromResponse, valueFromResponse);
    } else {
      const res = this._applyResponseProcessors(response);
      logMessage(logger, 'response', rpcMethod, res);
      return this.handleResponse(res, errorFromResponse, valueFromResponse);
    }
  }

  handleResponse(response, errorFromResponse, valueFromResponse) {
    const exc = errorFromResponse !== null ? errorFromResponse(response) : null;
    // `!=` so that an error function returning undefined means "no error" instead of `throw undefined`.
    if (exc != null) {
      throw exc;
    }
    if (valueFromResponse === null) {
      return response;
    }
    return valueFromResponse(response);
  }

  handleResponseStreaming(response, errorFromResponse, valueFromResponse) {
    const exc = errorFromResponse !== null ? errorFromResponse(response) : null;
    if (exc != null) {
      throw exc;
    }
    if (valueFromResponse === null) {
      return response;
    }
    return valueFromResponse(response);
  }

  /**
   * Apply request processors
   * @param {JspbMessage} request The grpc request to mutate
   * @param {boolean} copyRequest Make a clone of the request
   * @returns {JspbMessage}
   * @private
   */
  _applyRequestProcessors(request, copyRequest = true) {
    if (!request) return null;
    if (copyRequest) {
      request = request.clone();
    }
    for (const proc of this.requestProcessors) {
      proc.mutate(request);
    }
    return request;
  }

  /**
   * Apply response processors
   * @param {JspbMessage} response The grpc response to mutate
   * @returns {JspbMessage}
   * @private
   */
  _applyResponseProcessors(response) {
    if (response === null) return null;
    for (const proc of this.responseProcessors) {
      proc.mutate(response);
    }
    return response;
  }

  _getLogger(rpcMethod) {
    const methodName = rpcMethod.path || null;
    if (methodName) {
      const [methodNameShort] = methodName.split(BaseClient._SPLIT_METHOD).slice(-1);
      // This returns the same instance if it's been created before.
      return LoggerUtil.getChild(this.logger, methodNameShort);
    }
    return this.logger;
  }
}

/**
 * Get the IP address of the ethernet or WiFi interface used to talk to the robot.
 */
function getSelfIp(robotHostname) {
  return new Promise(resolve => {
    const socket = dgram.createSocket('udp4');
    const fallback = () => {
      socket.close();
      resolve('127.0.0.1');
    };

    // connect() reports its failures (e.g. unknown host) asynchronously, to its callback or through 'error'.
    socket.once('error', fallback);
    try {
      socket.connect(1, robotHostname, err => {
        if (err) return fallback();
        const { address } = socket.address();
        socket.close();
        return resolve(address);
      });
    } catch (error) {
      fallback();
    }
  });
}

module.exports = {
  DEFAULT_RPC_TIMEOUT,
  RPC_METHOD,
  BaseClient,
  commonHeaderErrors,
  streamingCommonHeaderErrors,
  commonLeaseErrors,
  streamingCommonLeaseErrors,
  customParamsError,
  errorFactory,
  commonLicenseErrors,
  handleUnsetStatusError,
  handleCommonHeaderErrors,
  handleLeaseUseResultErrors,
  handleCustomParamsErrors,
  handleLicenseErrors,
  handleLicenseErrorsIfPresent,
  getSelfIp,
};

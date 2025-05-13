'use strict';

const dgram = require('node:dgram');

const { camelCase } = require('lodash');

const { translateException } = require('./channel');
// const { chunkMessage, parseFromChunks } = require('./data_chunk');
const {
  CustomParamError,
  InternalServerError,
  InvalidRequestError,
  LeaseUseError,
  UnsetStatusError,
  ResponseError,
  LicenseError,
} = require('./exceptions');
const { LoggerUtil } = require('./loggerUtil');

const headerPb = require('../bosdyn/api/header_pb');
const leasePb = require('../bosdyn/api/lease_pb');
const licensePb = require('../bosdyn/api/license_pb');

// In seconds
const DEFAULT_RPC_TIMEOUT = 30_000;

// Polyfill used to stringify BigInt when using JSON.stringify on grpc message that have BigInt value
BigInt.prototype.toJSON = function toJSON() {
  return this.toString(10);
};

function popObject(obj, key, defaultVal) {
  let ret = obj[key];
  if (ret === undefined || (key === 'timeout' && ret === null)) {
    ret = defaultVal;
  } else {
    delete obj[key];
  }
  return ret;
}

/**
 * @typedef {import('google-protobuf').Message} JspbMessage
 */

/**
 * Return an exception based on common response header. None if no error.
 * @param {JspbMessage} response The response from spot
 * @returns {ResponseError|InvalidRequestError|InternalServerError|UnsetStatusError|null}
 */
function commonHeaderErrors(response) {
  if (!response.getHeader()) {
    return null;
  }

  const errorCode = response.getHeader().getError().getCode();

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

function streamingCommonHeaderErrors(responseIterator) {
  for (const response of responseIterator) {
    let error = commonHeaderErrors(response);
    if (error !== null) return error;
  }
  return null;
}

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
    if (result.getStatus() !== leasePb.ReturnLeaseResponse.Status.STATUS_OK) {
      return new LeaseUseError(response, result);
    }
  }

  return null;
}

function streamingCommonLeaseErrors(responseIterator) {
  for (const response in responseIterator) {
    const error = commonLeaseErrors(response);
    if (error !== null) {
      return error;
    }
  }

  return null;
}

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
 * @returns {null|class}
 */
function errorFactory(response, status, statusToString, statusToError) {
  let [errorType, message] = statusToError.get(status);

  if (errorType === null) return null;

  if (message === null) {
    try {
      message = `Code: ${status} (${statusToString[status]})`;
    } catch (e) {
      message = `Code: ${status} (Protobuf definition mismatch?)`;
    }
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

function handleUnsetStatusError(unset, field = 'status', statusobj = null) {
  // eslint-disable-next-line func-names, space-before-function-paren
  return function (func) {
    // eslint-disable-next-line func-names, space-before-function-paren
    return function (...args) {
      if (Array.isArray(args[0])) {
        for (const resp of args[0]) {
          const _statustype = statusobj || resp.constructor.Status;
          if (resp[camelCase(`get_${field}`)]() === _statustype[unset]) {
            return new UnsetStatusError(resp);
          }
        }
      } else {
        const _statustype = statusobj || args[0].constructor.Status;
        if (_statustype && args[0][camelCase(`get_${field}`)]() === _statustype[unset]) {
          return new UnsetStatusError(args[0]);
        }
      }
      return func(...args);
    };
  };
}

function handleCommonHeaderErrors(func) {
  // eslint-disable-next-line func-names, space-before-function-paren
  return function (...args) {
    if (Array.isArray(args[0])) {
      return streamingCommonHeaderErrors(...args) || func(...args);
    } else {
      return commonHeaderErrors(...args) || func(...args);
    }
  };
}

function handleLeaseUseResultErrors(func) {
  // eslint-disable-next-line func-names, space-before-function-paren
  return function (...args) {
    if (Array.isArray(args[0])) {
      return streamingCommonLeaseErrors(...args) || func(...args);
    } else {
      return commonLeaseErrors(...args) || func(...args);
    }
  };
}

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
      customParamsError(args, statusValue, statusFieldName, errorFieldName) || fn(...args);

  // Si la fonction est appelée avec un seul argument et que c'est une fonction,
  // nous considérons qu'il s'agit du cas sans options supplémentaires.
  if (func) {
    return decorator(func);
  }

  // Sinon, nous retournons le décorateur prêt à être appliqué à une fonction
  return decorator;
}

function commonLicenseErrors(response, allowUnset = false) {
  const licenseStatus = response.getLicenseStatus();

  if (allowUnset && licenseStatus === licensePb.LicenseInfo.Status.STATUS_UNKNOWN) {
    return null;
  } else if (licenseStatus !== licensePb.LicenseInfo.Status.STATUS_VALID) {
    return new LicenseError(response);
  }

  return null;
}

function handleLicenseErrors(func) {
  // eslint-disable-next-line func-names, space-before-function-paren
  return function (...args) {
    return commonLicenseErrors(...args) || func(...args);
  };
}

function handleLicenseErrorsIfPresent(func) {
  // eslint-disable-next-line func-names, space-before-function-paren
  return function (...args) {
    return commonLicenseErrors(...args, true) || func(...args);
  };
}

/**
 * @typedef {new (
 * address: string,
 * credentials: import('@grpc/grpc-js').ChannelCredentials,
 * options?: import('@grpc/grpc-js').ClientOptions
 * ) => Stub} stubCreationFunc
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
    this._serviceTypeShort = (this.constructor.serviceType || 'BaseClient').split(BaseClient._SPLIT_SERVICE).slice(-1);

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
    const { target, credentials, options } = channel.internalChannel;
    this._stub = new this._stubCreationFunc(target.path, credentials, { ...options, channelOverride: channel });
  }

  /**
   * Adopt key objects like processors, logger, and wallet from other.
   * @param {BaseClient} other Update object form another service.
   */
  updateFrom(other) {
    this.requestProcessors = this.requestProcessors.concat(other.requestProcessors);
    this.responseProcessors = this.responseProcessors.concat(other.responseProcessors);
    this.logger = LoggerUtil.getChild(other.logger, this._name || this._serviceTypeShort);
    this.leaseWallet = other.leaseWallet;
    this.clientName = other.clientName;
    this.executor = other.executor;
  }

  updateRequestIterator(requestIterator, logger, rpcMethod, isBlocking) {
    const a = [];
    for (let request of requestIterator) {
      request = this._applyRequestProcessors(request.clone());
      if (isBlocking) {
        logger.debug(`blocking request: ${rpcMethod.path} ${JSON.stringify(request?.toObject())}`);
      } else {
        logger.debug(`async request: ${rpcMethod.path} ${JSON.stringify(request?.toObject())}`);
      }
      a.push(request);
    }
    return a;
  }

  updateResponseIterator(responseIterator, logger, rpcMethod, isBlocking) {
    try {
      const a = [];
      for (const response of responseIterator) {
        const res = this._applyResponseProcessors(response.clone());
        if (isBlocking) {
          logger.debug(`blocking response: ${rpcMethod.path} ${JSON.stringify(response?.toObject())}`);
        } else {
          logger.debug(`async response: ${rpcMethod.path} ${JSON.stringify(response?.toObject())}`);
        }
        a.push(res);
      }
      return a;
    } catch (err) {
      throw translateException(err);
    }
  }

  #make(rpcMethod, request, { req = false, res = false } = {}, args) {
    const timeout = popObject(args, 'timeout', DEFAULT_RPC_TIMEOUT);
    rpcMethod = rpcMethod.bind(this._stub);

    return new Promise((resolve, reject) => {
      const deadline = Date.now() + timeout;

      if (!req && !res) {
        // If the request and the response are not a streams.
        return rpcMethod(request, { deadline }, (err, response) => {
          if (err) return reject(err);
          return resolve(response);
        });
      } else if (!req && res) {
        // If the request is not a stream but the response is one.
        const queue = [];
        const stream = rpcMethod(request, { deadline });
        stream.on('error', err => reject(err));
        stream.on('data', data => queue.push(data));
        stream.on('end', () => resolve(queue));
        return stream;
      } else if (req && !res) {
        // If the request is a stream but the response is not one.
        const call = rpcMethod({ deadline }, (err, response) => {
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
        return call;
      } else if (req && res) {
        // If the request and the response are a streams.
        const queue = [];
        const call = rpcMethod({ deadline });
        if (Array.isArray(request)) {
          for (const requestToMake of request) {
            call.write(requestToMake);
          }
        } else {
          call.write(request);
        }
        call.on('data', data => queue.push(data));
        call.on('error', err => reject(err));
        call.on('end', () => resolve(queue));
        return call;
      }

      return reject(new Error('Bad request'));
    });
  }

  async call(rpcMethod, request, valueFromResponse = null, errorFromResponse = null, args = {}) {
    const logger = this._getLogger(rpcMethod);
    const path = rpcMethod.path;

    if (rpcMethod.requestStream) {
      request = this.updateRequestIterator(request, logger, rpcMethod, true);
    } else {
      request = this._applyRequestProcessors(request.clone());
      logger.debug(`blocking request: ${path} ${JSON.stringify(request?.toObject())}`);
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
      // console.log('Pensez à retirer le log du catch');
      // console.log(err);
      throw translateException(err);
    }

    if (rpcMethod.responseStream) {
      const res = this.updateResponseIterator(response, logger, rpcMethod, true);
      return this.handleResponseStreaming(res, errorFromResponse, valueFromResponse);
      // if (assembleType !== null) {
      //   let msg = new assembleType();

      //   try {
      //     parseFromChunks(response, msg);
      //   } catch (e) {
      //     throw translateException(e);
      //   }

      //   msg = this._applyResponseProcessors(msg);
      //   logger.debug('response: %s\n%s', rpcMethod._method, msg);
      //   return this.handleResponse(msg, errorFromResponse, valueFromResponse);
      // } else {
      //   const res = this.updateResponseIterator(response, logger, rpcMethod, true);
      //   return this.handleResponseStreaming(res, errorFromResponse, valueFromResponse);
      // }
    } else {
      const res = this._applyResponseProcessors(response);
      logger.debug(`response: ${path} ${JSON.stringify(res?.toObject())}`);
      return this.handleResponse(res, errorFromResponse, valueFromResponse);
    }
  }

  handleResponse(response, errorFromResponse, valueFromResponse) {
    const exc = errorFromResponse !== null ? errorFromResponse(response) : null;
    if (exc !== null) {
      throw exc;
    }
    if (valueFromResponse === null) {
      return response;
    }
    return valueFromResponse(response);
  }

  handleResponseStreaming(response, errorFromResponse, valueFromResponse) {
    const exc = errorFromResponse !== null ? errorFromResponse(response) : null;
    if (exc !== null) {
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

function getSelfIp(robotHostname) {
  return new Promise(resolve => {
    const socket = dgram.createSocket('udp4');

    try {
      socket.connect(1, robotHostname, () => {
        const { address } = socket.address();
        socket.close();
        resolve(address);
      });
    } catch (error) {
      socket.close();
      resolve('127.0.0.1');
    }
  });
}

module.exports = {
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

/**
 * @file Helper functions and classes for creating and running a gRPC service.
 */

'use strict';

const process = require('node:process');

const grpc = require('@grpc/grpc-js');
const { Any } = require('google-protobuf/google/protobuf/any_pb');

const { generateChannelOptions } = require('./channel');
const { LoggerUtil } = require('./logger_util');
const { protoTypeName } = require('./util');

const { StoreImageRequest, StoreDataRequest } = require('../bosdyn/api/data_acquisition_store_pb');
const { RecordSignalTicksRequest, RecordDataBlobsRequest } = require('../bosdyn/api/data_buffer_pb');
const headerPb = require('../bosdyn/api/header_pb');
const { GetImageResponse } = require('../bosdyn/api/image_pb');
const { GetLocalGridsResponse } = require('../bosdyn/api/local_grid_pb');
const { nowTimestamp } = require('../bosdyn-core/util');

const _LOGGER = LoggerUtil.getLogger('server_util');

/**
 * @typedef {import('./data_buffer').DataBufferClient} DataBufferClient
 * @typedef {import('google-protobuf').Message} Message
 */

/**
 * Helper to log gRPC request and response message to the data buffer for a service.
 *
 * Python's `with ResponseContext(response, request, rpc_logger):` around the handling of an RPC, as run():
 *
 *   await new ResponseContext(response, request, rpcLogger).run(async () => {
 *     // Fill the response.
 *   });
 *
 * It logs the request and response to the data buffer, and mutates the headers to add additional information
 * before logging.
 */
class ResponseContext {
  /**
   * @param {Message} response Any gRPC response message with a bosdyn.api.ResponseHeader proto.
   * @param {Message} request Any gRPC request message with a bosdyn.api.RequestHeader proto.
   * @param {?DataBufferClient} [rpcLogger=null] Optional data buffer client to log the messages; if not provided,
   * only the headers will be mutated and nothing will be logged.
   * @param {?string} [channelPrefix=null] The prefix you want this req / resp pair logged under.
   * @param {?function(Error): void} [excCallback=null] Called with the error thrown in the context, if any.
   */
  constructor(response, request, rpcLogger = null, channelPrefix = null, excCallback = null) {
    this.response = response;
    this.request = request;
    this.rpcLogger = rpcLogger;
    this.channelPrefix = channelPrefix;
    this.excCallback = excCallback;
    _header(response).setRequestHeader(request.getHeader()?.clone());
  }

  /**
   * Adds a start timestamp to the response header and logs the request RPC (Python's __enter__).
   * @returns {Message} The response.
   */
  enter() {
    _header(this.response).setRequestReceivedTimestamp(nowTimestamp());
    this._log(this.request);
    return this.response;
  }

  /**
   * Updates the header code if unset and logs the response RPC (Python's __exit__).
   * @param {?Error} [error=null] The error thrown in the context, if any.
   * @returns {void}
   */
  exit(error = null) {
    const header = _header(this.response);
    const commonError = header.getError() ?? new headerPb.CommonError();
    header.setError(commonError);
    if (commonError.getCode() === headerPb.CommonError.Code.CODE_UNSPECIFIED) {
      commonError.setCode(headerPb.CommonError.Code.CODE_OK);
    }
    if (error !== null && error !== undefined) {
      // An uncaught exception was raised by the service. Automatically set the header to be an internal error.
      commonError.setCode(headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR);
      commonError.setMessage(`[${error?.name ?? typeof error}] ${error?.message ?? error}`);
      this.excCallback?.(error);
    }
    this._log(this.response);
    if (!header.hasResponseTimestamp()) {
      header.setResponseTimestamp(nowTimestamp());
    }
  }

  /**
   * Run fn in the context, like the body of Python's with statement: the error thrown by fn, if any, is thrown again
   * once the context is exited.
   * @template T
   * @param {function(Message): (T|Promise<T>)} fn Fills the response.
   * @returns {Promise<T>}
   */
  async run(fn) {
    this.enter();
    let result;
    try {
      result = await fn(this.response);
    } catch (e) {
      this.exit(e);
      throw e;
    }
    this.exit();
    return result;
  }

  _log(message) {
    if (!this.rpcLogger) return;
    const channel = this.channelPrefix === null ? null : `${this.channelPrefix}/${protoTypeName(message)}`;
    // Like Python's add_protobuf_async: logging does not delay nor fail the RPC.
    Promise.resolve()
      .then(() => this.rpcLogger.addProtobuf(message, channel))
      .catch(e => _LOGGER.warn(`Failed to log ${protoTypeName(message)} to the data buffer: ${e?.message ?? e}`));
  }
}

/**
 * The header of a response, created if not set.
 * @param {Message} response
 * @returns {headerPb.ResponseHeader}
 */
function _header(response) {
  if (!response.hasHeader()) response.setHeader(new headerPb.ResponseHeader());
  return response.getHeader();
}

/**
 * A runner to start a gRPC server and allow easy cleanup, like GrpcServiceRunner of Python (it was missing).
 *
 * The server starts at construction, like Python, but grpc-js binds its port asynchronously: await waitForStart()
 * for the port. Python's `with GrpcServiceRunner(...)` is `await using` (Symbol.asyncDispose stops the server).
 */
class GrpcServiceRunner {
  /**
   * @param {Object} serviceServicer Servicer that defines server behavior: the implementation of the service.
   * @param {grpc.ServiceDefinition|function(Object, grpc.Server): void} addServicerToServerFn The definition of the
   * service to add (e.g. ImageServiceService), or a function that attaches the servicer to the gRPC server, like the
   * add_ImageServiceServicer_to_server() generated for Python.
   * @param {number} [port=0] The port number the service can be accessed through on the host system. Defaults to 0,
   * which will assign an ephemeral port.
   * @param {number} [maxWorkers=4] Not used: Node.js runs the handlers on its event loop (a thread pool in Python).
   * @param {?number} [maxSendMessageLength=null] Max message length (bytes) allowed for messages sent.
   * @param {?number} [maxReceiveMessageLength=null] Max message length (bytes) allowed for messages received.
   * @param {number} [timeoutSecs=3] Number of seconds to wait for a clean server shutdown (not used: the shutdown of
   * grpc-js is immediate).
   * @param {boolean} [forceSigintCapture=true] Stop runUntilInterrupt() on SIGTERM and SIGQUIT (e.g. docker stop) too,
   * not only on SIGINT.
   * @param {?Object} [logger=null] Logger to log with.
   * @param {string} [host='[::]'] The address to listen on, all the interfaces by default like Python (not in Python).
   */
  constructor(
    serviceServicer,
    addServicerToServerFn,
    port = 0,
    maxWorkers = 4,
    maxSendMessageLength = null,
    maxReceiveMessageLength = null,
    timeoutSecs = 3,
    forceSigintCapture = true,
    logger = null,
    host = '[::]',
  ) {
    this.logger = logger || _LOGGER;
    this.maxWorkers = maxWorkers;
    this.timeoutSecs = timeoutSecs;
    this.forceSigintCapture = forceSigintCapture;

    // Use the name of the service_servicer class for print messages.
    this.serverTypeName = serviceServicer?.constructor?.name || 'Object';

    this.server = new grpc.Server(generateChannelOptions(maxSendMessageLength, maxReceiveMessageLength));
    if (typeof addServicerToServerFn === 'function') {
      addServicerToServerFn(serviceServicer, this.server);
    } else {
      this.server.addService(addServicerToServerFn, serviceServicer);
    }
    /** @type {?number} The bound port, once started. */
    this.port = null;
    this._started = new Promise((resolve, reject) => {
      this.server.bindAsync(`${host}:${port}`, grpc.ServerCredentials.createInsecure(), (err, boundPort) => {
        if (err) return reject(err);
        // grpc-js serves once bound (its start() is deprecated).
        this.port = boundPort;
        this.logger.info(`Started the ${this.serverTypeName} server.`);
        return resolve(boundPort);
      });
    });
    // A failure is reported by waitForStart(), runUntilInterrupt() and stop().
    this._started.catch(() => undefined);
  }

  /**
   * @returns {Promise<number>} The port of the server, once it is started.
   */
  waitForStart() {
    return this._started;
  }

  async [Symbol.asyncDispose]() {
    await this.stop();
  }

  /**
   * Shuts the gRPC server down: the RPCs in progress are cancelled, like stop(None) in Python.
   * @returns {Promise<void>}
   */
  async stop() {
    this.logger.info(`Shutting down the ${this.serverTypeName} server.`);
    await this._started.catch(() => undefined);
    this.server.forceShutdown();
  }

  /**
   * Wait until a SIGINT, SIGTERM, or SIGQUIT is received (only SIGINT without forceSigintCapture) and then shut
   * down cleanly. SIGQUIT does not exist on Windows.
   * @returns {Promise<void>}
   */
  async runUntilInterrupt() {
    await this._started;
    const signals = this.forceSigintCapture
      ? ['SIGINT', 'SIGTERM', ...(process.platform === 'win32' ? [] : ['SIGQUIT'])]
      : ['SIGINT'];
    let onSignal;
    // The listening server keeps the process alive meanwhile.
    await new Promise(resolve => {
      onSignal = resolve;
      for (const signal of signals) process.on(signal, onSignal);
    });
    for (const signal of signals) process.off(signal, onSignal);
    await this.stop();
  }
}

/**
 * Sets the ResponseHeader header in the response.
 * @param {Message} response The GRPC response message to be populated.
 * @param {Message} request The header from the request is added to the response.
 * @param {headerPb.CommonError.Code} [errorCode] The status for the RPC response.
 * @param {string} [errorMsg] An optional error message describing a bad header status failure.
 * @returns {void} Mutates the response message's header to be fully populated.
 */
function populateResponseHeader(response, request, errorCode = headerPb.CommonError.Code.CODE_OK, errorMsg = null) {
  const header = new headerPb.ResponseHeader();
  header.setRequestReceivedTimestamp(nowTimestamp());
  header.setRequestHeader(request.getHeader()?.clone());
  const error = new headerPb.CommonError().setCode(errorCode);
  if (errorMsg) error.setMessage(errorMsg);
  header.setError(error);
  const copiedRequest = request.clone();
  stripLargeBytesFields(copiedRequest);
  // Any.pack() returns nothing: pack into the Any, then set it.
  const packedRequest = new Any();
  packedRequest.pack(copiedRequest.serializeBinary(), protoTypeName(copiedRequest));
  header.setRequest(packedRequest);
  response.setHeader(header);
}

/**
 * Removes any large bytes fields from a protobuf message depending on the proto type.
 * @param {Message} protoMessage The message, modified.
 * @returns {void}
 */
function stripLargeBytesFields(protoMessage) {
  getBytesFieldAllowlist().get(protoMessage.constructor)?.(protoMessage);
}

/**
 * Creates set of protos which will have bytes fields removed.
 * @returns {Map<Function, function(Message): void>} By message type: a Map, since the keys of an object would be
 * the (identical) source code of the constructors.
 */
function getBytesFieldAllowlist() {
  return new Map([
    [GetImageResponse, stripGetImageResponse],
    [GetLocalGridsResponse, stripLocalGridResponses],
    [StoreDataRequest, stripStoreDataRequest],
    [StoreImageRequest, stripStoreImageRequest],
    [RecordSignalTicksRequest, stripRecordSignalTick],
    [RecordDataBlobsRequest, stripRecordDataBlob],
  ]);
}

/** Removes bytes from the ImageResponse proto (its image data only, like Python). */
function stripImageResponse(protoMessage) {
  protoMessage.getShot()?.getImage()?.setData('');
}

/** Removes bytes from the GetImageResponse proto. */
function stripGetImageResponse(protoMessage) {
  for (const imgResp of protoMessage.getImageResponsesList()) {
    stripImageResponse(imgResp);
  }
}

/** Removes bytes from the GetLocalGridsResponse proto. */
function stripLocalGridResponses(protoMessage) {
  for (const gridResp of protoMessage.getLocalGridResponsesList()) {
    gridResp.getLocalGrid()?.setData('');
  }
}

/** Removes bytes from the StoreImageRequest proto. */
function stripStoreImageRequest(protoMessage) {
  protoMessage.getImage()?.getImage()?.setData('');
}

/** Removes bytes from the StoreDataRequest proto. */
function stripStoreDataRequest(protoMessage) {
  protoMessage.setData('');
}

/** Removes bytes from the RecordSignalTicksRequest proto. */
function stripRecordSignalTick(protoMessage) {
  for (const tickData of protoMessage.getTickDataList()) {
    tickData.setData('');
  }
}

/** Removes bytes from the RecordDataBlobsRequest proto. */
function stripRecordDataBlob(protoMessage) {
  for (const blob of protoMessage.getBlobDataList()) {
    blob.setData('');
  }
}

module.exports = {
  GrpcServiceRunner,
  ResponseContext,
  populateResponseHeader,
  stripLargeBytesFields,
  getBytesFieldAllowlist,
  // The functions of the allowlist, public in Python (they were not exported).
  stripImageResponse,
  stripGetImageResponse,
  stripLocalGridResponses,
  stripStoreImageRequest,
  stripStoreDataRequest,
  stripRecordSignalTick,
  stripRecordDataBlob,
};

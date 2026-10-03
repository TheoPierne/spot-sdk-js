/**
 * @file Common message processors.
 */

'use strict';

const { LoggerUtil } = require('./logger_util');

const { RequestHeader } = require('../bosdyn/api/header_pb');
const { nowSec, nowTimestamp } = require('../bosdyn-core/util');

/**
 * Sets header fields common to all bosdyn.api requests.
 */
class AddRequestHeader {
  /**
   * @param {Function} clientNameFunc Function to get client's name.
   */
  constructor(clientNameFunc) {
    this.getClientName = clientNameFunc;
  }

  /**
   * Mutate request such that its header contains a client name and a timestamp.
   * Headers are not required for third party proto requests/responses.
   *
   * Like Python 5.2.0, the other fields of the header (e.g. disable_rpc_logging) are kept: the header was replaced.
   * @param {*} request Request to apply the header.
   * @returns {void}
   */
  mutate(request) {
    if (typeof request?.getHeader !== 'function') return;
    let header = request.getHeader();
    if (!header) {
      header = new RequestHeader();
      request.setHeader(header);
    }
    header.setClientName(this.getClientName()).setRequestTimestamp(nowTimestamp());
  }
}

/**
 * Processor that logs every protobuf message to the robot's data buffer.
 */
class DataBufferLoggingProcessor {
  // Failures are logged at most once per this period (seconds): every RPC would log one otherwise.
  static LOG_THROTTLE_SECONDS = 10;

  constructor(dataBufferClient) {
    /**
     * @type {import('./data_buffer').DataBufferClient}
     */
    this.dataBufferClient = dataBufferClient;
    this.logger = LoggerUtil.getLogger('DataBufferLoggingProcessor');
    this._lastErrorLogTime = null;
  }

  /**
   * Logs the protobuf message to the data buffer, without waiting for it, like add_protobuf_async() in Python
   * (whose errors are ignored): a failure is logged. It was an unhandled rejection, which ends the Node.js process
   * (lease and E-Stop keep-alives included), and a synchronous error failed the RPC being logged.
   * @param {*} proto The protobuf request or response to log.
   */
  mutate(proto) {
    try {
      Promise.resolve(this.dataBufferClient.addProtobuf(proto)).catch(err => this._logError(err));
    } catch (err) {
      this._logError(err);
    }
  }

  /**
   * @param {Error} err
   * @private
   */
  _logError(err) {
    const now = nowSec();
    const throttle = DataBufferLoggingProcessor.LOG_THROTTLE_SECONDS;
    if (this._lastErrorLogTime === null || now - this._lastErrorLogTime >= throttle) {
      this._lastErrorLogTime = now;
      this.logger.warn(`Failed to log a message to the data buffer: ${err?.message ?? err}`);
    }
  }
}

/**
 * Attach a DataBufferLoggingProcessor to log all RPC requests and responses for the given client.
 * @param {import('./common').BaseClient} client
 * @param {import('./data_buffer').DataBufferClient} dataBufferClient
 */
function logAllRpcs(client, dataBufferClient) {
  const processor = new DataBufferLoggingProcessor(dataBufferClient);
  client.requestProcessors.push(processor);
  client.responseProcessors.push(processor);
}

module.exports = {
  AddRequestHeader,
  DataBufferLoggingProcessor,
  logAllRpcs,
};

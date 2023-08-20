'use strict';

const header_pb = require('../bosdyn/api/header_pb');
const { now_timestamp } = require('../bosdyn-core/util');

//  Ich habe noch nicht die Konvertierung von __enter__ und __exit__ in JavaScript !

/**
* Helper to log gRPC request and response message to the data buffer for a service.

* It should be called using a "with" statement each time an RPC is received such that
* the request and response proto messages can be passed in. It will automatically log
* the request and response to the data buffer, and mutates the headers to add additional
* information before logging.
* @param {protobuf} response Any gRPC response message with a bosdyn.api.ResponseHeader proto.
* @param {protobuf} request Any gRPC request message with a bosdyn.api.RequestHeader proto.
* @param {DataBufferClient} [rpc_logger=null] Optional data buffer client to log the messages; if not
  provided, only the headers will be mutated and nothing will be logged.
* @returns {void}
*/
// function ResponseContext(response, request, rpc_logger = null) {
//   console.warn('Kann nicht funktionieren! [server_util.js:7]');
//   response.setHeader(new header_pb.ResponseHeader());
//   try {
//     response.getHeader().setRequestReceivedTimestamp(now_timestamp());
//     if (rpc_logger) rpc_logger.add_protobuf_async(request);
//     return response;
//   } catch (e) {
//     if (response.getHeader().getError().getCode() === response.header.error.CODE_UNSPECIFIED) {
//       response.getHeader().getError().setCode(response.header.error.CODE_OK);
//     }
//     if (exc_type !== null) {
//       response.getHeader().getError().setCode(response.header.error.CODE_INTERNAL_SERVER_ERROR);
//       response
//         .getHeader()
//         .getError()
//         .setMessage(`[${typeof e}] ${e}`);
//     }
//     if (rpc_logger) rpc_logger.add_protobuf_async(response);
//   }
// }

class ResponseContext {
  constructor(response, request, rpc_logger = null, channel_prefix = null, exc_callback = null) {
    this.response = response;
    this.response.setHeader(new header_pb.ResponseHeader());
    this.request = request;
    this.rpc_logger = rpc_logger;
    this.channel_prefix = channel_prefix;
    this.exc_callback = exc_callback;
  }

  async enter() {
    this.response.getHeader().setRequestReceivedTimestamp(now_timestamp());
    if (this.rpc_logger) {
      let channel;
      if (!this.channel_prefix) {
        channel = null;
      } else {
        channel = this.channel_prefix + '/' + this.request.DESCRIPTOR.full_name;
      }
      await this.rpc_logger.add_protobuf_async(this.request, channel);
    }
    return this.response;
  }

  async exit(exc_type, exc_val, exc_tb) {
    if (this.response.getHeader().getError() === this.response.getHeader().setError(0)) {
      this.response.getHeader().setError(1);
    }
    if (exc_type) {
      this.response.header.error.code = this.response.header.error.CODE_INTERNAL_SERVER_ERROR;
      this.response.header.error.message = `[${exc_type.name}] ${exc_val}`;
      if (this.exc_callback) {
        this.exc_callback(exc_type, exc_val, exc_tb);
      }
    }
    if (this.rpc_logger) {
      let channel;
      if (!this.channel_prefix) {
        channel = null;
      } else {
        channel = this.channel_prefix + '/' + this.response.DESCRIPTOR.full_name;
      }
      await this.rpc_logger.add_protobuf_async(this.response, channel);
    }
  }
}

module.exports = {
  ResponseContext,
};

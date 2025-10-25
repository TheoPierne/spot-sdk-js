'use strict';

const headerPb = require('../bosdyn/api/header_pb');
const { nowTimestamp } = require('../bosdyn-core/util');
const { StoreImageRequest, StoreDataRequest } = require('../bosdyn/api/data_acquisition_store_pb');
const { GetImageResponse } = require('../bosdyn/api/image_pb');
const { GetLocalGridsResponse } = require('../bosdyn/api/local_grid_pb');
const { RecordSignalTicksRequest, RecordDataBlobsRequest } = require('../bosdyn/api/data_buffer_pb');
const { Any } = require('google-protobuf/google/protobuf/any_pb');

/**
 * @typedef {import('./data_buffer').DataBufferClient} DataBufferClient
 */

/**
* Helper to log gRPC request and response message to the data buffer for a service.

* It should be called using a "with" statement each time an RPC is received such that
* the request and response proto messages can be passed in. It will automatically log
* the request and response to the data buffer, and mutates the headers to add additional
* information before logging.
* @param {protobuf} response Any gRPC response message with a bosdyn.api.ResponseHeader proto.
* @param {protobuf} request Any gRPC request message with a bosdyn.api.RequestHeader proto.
* @param {DataBufferClient} [rpcLogger=null] Optional data buffer client to log the messages; if not
  provided, only the headers will be mutated and nothing will be logged.
* @returns {void}
*/
function ResponseContext(response, request, rpcLogger = null) {
  console.warn('Ne marche peut etre pas ! [server_util.js:7]');

  response.getHeader().setRequestHeader(request.getHeader());

  try {
    response.getHeader().setRequestReceivedTimestamp(nowTimestamp());
    if (rpcLogger) rpcLogger.addProtobuf(request);
    return response;
  } catch (e) {
    if (response.getHeader().getError().getCode() === headerPb.CommonError.Code.CODE_UNSPECIFIED) {
      response.getHeader().getError().setCode(headerPb.CommonError.Code.CODE_OK);
    }
    if (exc_type !== null) {
      response.getHeader().getError().setCode(headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR);
      response
        .getHeader()
        .getError()
        .setMessage(`[${typeof e}] ${e}`);
    }
    if (rpcLogger) rpcLogger.addProtobuf(response);
  }
}

/**
 * @typedef {import('google-protobuf').Message} Message
 */

/**
 * Sets the ResponseHeader header in the response.
 * @param {Message} response The GRPC response message to be populated.
 * @param {Message} request The header from the request is added to the response.
 * @param {headerPb.CommonError.Code} [errorCode] The status for the RPC response.
 * @param {string} [errorMsg] An optional error message describing a bad header status failure.
 */
function populateResponseHeader(response, request, errorCode = headerPb.CommonError.Code.CODE_OK, errorMsg = null) {
  const header = new headerPb.ResponseHeader();
  header.setRequestHeader(request.getHeader());
  header.setRequestReceivedTimestamp(nowTimestamp());
  const error = new headerPb.CommonError();
  error.setCode(errorCode);
  if (errorMsg) error.setMessage(errorMsg);
  header.setError(error);
  const copiedRequest = request.clone();
  stripLargeBytesFields(copiedRequest); 
  header.setRequest(new Any().pack(copiedRequest.serializeBinary()));
  response.setHeader(header);
}

function stripLargeBytesFields(protoMessage) {
  const messageType = protoMessage.constructor;
  const whitelistMap = getBytesFieldWhitelist();
  if (messageType in whitelistMap) whitelistMap[messageType](protoMessage);
}

function getBytesFieldWhitelist() {
  return {
    [GetImageResponse]: stripGetImageResponse,
    [GetLocalGridsResponse]: stripLocalGridResponses,
    [StoreDataRequest]: stripStoreDataRequest,
    [StoreImageRequest]: stripStoreImageRequest,
    [RecordSignalTicksRequest]: stripRecordSignalTick,
    [RecordDataBlobsRequest]: stripRecordDataBlob,
  };
}

function stripImageResponse(protoMessage) {
  protoMessage.clearShot();
}

function stripGetImageResponse(protoMessage) {
  for (const imgResp in protoMessage.getImageResponses()) {
    stripImageResponse(imgResp);
  }
}

function stripLocalGridResponses(protoMessage) {
  for (const gridResp of protoMessage.getLocalGridResponsesList()) {
    gridResp.getLocalGrid().setData('');
  }
}

function stripStoreImageRequest(protoMessage) {
  protoMessage.getImage().getImage().setData('');
}

function stripStoreDataRequest(protoMessage) {
  protoMessage.setData([]);
}

function stripRecordSignalTick(protoMessage) {
  for (const tickData in protoMessage.getTickData()) {
    tickData.clearTickDataList();
  }
}

function stripRecordDataBlob(protoMessage) {
  for (const blob in protoMessage.getBlobData()) {
    blob.RecordDataBlobsRequest();
  }
}

module.exports = {
  ResponseContext,
  populateResponseHeader,
  stripLargeBytesFields,
};

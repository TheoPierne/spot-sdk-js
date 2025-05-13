'use strict';

const headerPb = require('../bosdyn/api/header_pb');
const { nowTimestamp } = require('../bosdyn-core/util');

// Je n'ai pas la conversion du __enter__ et __exit__ en JavaScript pour l'instant !

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
function ResponseContext(response, request, rpc_logger = null) {
  console.warn('Ne marche peut etre pas ! [server_util.js:7]');

  response.header.request_header = request.header;

  try {
    response.getHeader().setRequestReceivedTimestamp(nowTimestamp());
    if (rpc_logger) rpc_logger.add_protobuf_async(request);
    return response;
  } catch (e) {
    if (response.getHeader().getError().getCode() === response.header.error.CODE_UNSPECIFIED) {
      response.getHeader().getError().setCode(response.header.error.CODE_OK);
    }
    if (exc_type !== null) {
      response.getHeader().getError().setCode(response.header.error.CODE_INTERNAL_SERVER_ERROR);
      response
        .getHeader()
        .getError()
        .setMessage(`[${typeof e}] ${e}`);
    }
    if (rpc_logger) rpc_logger.add_protobuf_async(response);
  }
}

function populateResponseHeader(response, request, errorCode = headerPb.CommonError.Code.CODE_OK, errorMsg = null) {
  const header = new headerPb.ResponseHeader();
  header.setRequestHeader(request.getHeader());
  header.setRequestReceivedTimestamp(nowTimestamp());
  const error = new headerPb.CommonError();
  error.setCode(errorCode);
  if (errorMsg !== null || errorMsg) error.setMessage(errorMsg);
  header.setError(error);
  const copiedRequest = request.clone();
  stripLargeBytesFields(copiedRequest);
  // Header.getRequest().Pack(copied_request) Je ne sais pas si cela est utile (.Pack())
  response.setHeader(header);
}

function stripLargeBytesFields(protoMessage) {
  const messageType = protoMessage;
  const whitelistMap = getBytesFieldWhitelist();
  if (messageType in whitelistMap) whitelistMap[messageType](protoMessage);
}

function getBytesFieldWhitelist() {
  return {
    GetImageResponse: stripGetImageResponse,
    GetLocalGridsResponse: stripLocalGridResponses,
    StoreDataRequest: stripStoreDataRequest,
    StoreImageRequest: stripStoreImageRequest,
    RecordSignalTicksRequest: stripRecordSignalTick,
    RecordDataBlobsRequest: stripRecordDataBlob,
    AddLogAnnotationRequest: stripLogAnnotation,
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
  for (const gridResp in protoMessage.getLocalGridResponses()) {
    gridResp.clearLocalGridResponsesList();
  }
}

function stripStoreImageRequest(protoMessage) {
  protoMessage.clearImage();
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

function stripLogAnnotation(protoMessage) {
  for (const blob in protoMessage.getAnnotations().getBlobData()) {
    blob.clearAnnotations();
  }
}

module.exports = {
  ResponseContext,
  populateResponseHeader,
};

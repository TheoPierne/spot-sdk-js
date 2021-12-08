const {now_timestamp} = require('../bosdyn-core/util');

//Je n'ai pas la conversion du __enter__ et __exit__ en JavaScript pour l'instant !

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
function ResponseContext(response, request, rpc_logger = null){

    console.warn('Ne marche peut etre pas ! [server_util.js:7]');

    response.header.request_header = request.header;

    try{
        response.getHeader().setRequestReceivedTimestamp(now_timestamp());
        if(rpc_logger) rpc_logger.add_protobuf_async(request);
        return response;
    }catch(e){
        if(response.getHeader().getError().getCode() == response.header.error.CODE_UNSPECIFIED){
            response.getHeader().getError().setCode(response.header.error.CODE_OK);
        }
        if(exc_type != null){
            response.getHeader().getError().setCode(response.header.error.CODE_INTERNAL_SERVER_ERROR);
            response.getHeader().getError().setMessage(`[${typeof e}] ${e}`);
        }
        if(rpc_logger) rpc_logger.add_protobuf_async(response)
    }

}

module.exports = {
	ResponseContext
}
// source: bosdyn/api/header.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.bosdyn.api.CommonError', null, global);
goog.exportSymbol('proto.bosdyn.api.CommonError.Code', null, global);
goog.exportSymbol('proto.bosdyn.api.RequestHeader', null, global);
goog.exportSymbol('proto.bosdyn.api.ResponseHeader', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.RequestHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.RequestHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.RequestHeader.displayName = 'proto.bosdyn.api.RequestHeader';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.CommonError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.CommonError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.CommonError.displayName = 'proto.bosdyn.api.CommonError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.ResponseHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ResponseHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ResponseHeader.displayName = 'proto.bosdyn.api.ResponseHeader';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.RequestHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.RequestHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.RequestHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RequestHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestTimestamp: (f = msg.getRequestTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    clientName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    disableRpcLogging: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.RequestHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.RequestHeader;
  return proto.bosdyn.api.RequestHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.RequestHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.RequestHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRequestTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableRpcLogging(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.RequestHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.RequestHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.RequestHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RequestHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getClientName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisableRpcLogging();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp request_timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.RequestHeader.prototype.getRequestTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.RequestHeader} returns this
*/
proto.bosdyn.api.RequestHeader.prototype.setRequestTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RequestHeader} returns this
 */
proto.bosdyn.api.RequestHeader.prototype.clearRequestTimestamp = function() {
  return this.setRequestTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RequestHeader.prototype.hasRequestTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string client_name = 2;
 * @return {string}
 */
proto.bosdyn.api.RequestHeader.prototype.getClientName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.RequestHeader} returns this
 */
proto.bosdyn.api.RequestHeader.prototype.setClientName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool disable_rpc_logging = 3;
 * @return {boolean}
 */
proto.bosdyn.api.RequestHeader.prototype.getDisableRpcLogging = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.RequestHeader} returns this
 */
proto.bosdyn.api.RequestHeader.prototype.setDisableRpcLogging = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.CommonError.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.CommonError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.CommonError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.CommonError.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.CommonError}
 */
proto.bosdyn.api.CommonError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.CommonError;
  return proto.bosdyn.api.CommonError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.CommonError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.CommonError}
 */
proto.bosdyn.api.CommonError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.CommonError.Code} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.CommonError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.CommonError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.CommonError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.CommonError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.CommonError.Code = {
  CODE_UNSPECIFIED: 0,
  CODE_OK: 1,
  CODE_INTERNAL_SERVER_ERROR: 2,
  CODE_INVALID_REQUEST: 3
};

/**
 * optional Code code = 1;
 * @return {!proto.bosdyn.api.CommonError.Code}
 */
proto.bosdyn.api.CommonError.prototype.getCode = function() {
  return /** @type {!proto.bosdyn.api.CommonError.Code} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.CommonError.Code} value
 * @return {!proto.bosdyn.api.CommonError} returns this
 */
proto.bosdyn.api.CommonError.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.bosdyn.api.CommonError.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.CommonError} returns this
 */
proto.bosdyn.api.CommonError.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Any data = 3;
 * @return {?proto.google.protobuf.Any}
 */
proto.bosdyn.api.CommonError.prototype.getData = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 3));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.bosdyn.api.CommonError} returns this
*/
proto.bosdyn.api.CommonError.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.CommonError} returns this
 */
proto.bosdyn.api.CommonError.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.CommonError.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.ResponseHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ResponseHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ResponseHeader} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ResponseHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestHeader: (f = msg.getRequestHeader()) && proto.bosdyn.api.RequestHeader.toObject(includeInstance, f),
    requestReceivedTimestamp: (f = msg.getRequestReceivedTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    responseTimestamp: (f = msg.getResponseTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    error: (f = msg.getError()) && proto.bosdyn.api.CommonError.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.ResponseHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ResponseHeader;
  return proto.bosdyn.api.ResponseHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ResponseHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.ResponseHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.RequestHeader;
      reader.readMessage(value,proto.bosdyn.api.RequestHeader.deserializeBinaryFromReader);
      msg.setRequestHeader(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRequestReceivedTimestamp(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setResponseTimestamp(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.CommonError;
      reader.readMessage(value,proto.bosdyn.api.CommonError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 5:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.ResponseHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ResponseHeader.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ResponseHeader} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ResponseHeader.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getRequestReceivedTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getResponseTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.CommonError.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional RequestHeader request_header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.ResponseHeader.prototype.getRequestHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.ResponseHeader} returns this
*/
proto.bosdyn.api.ResponseHeader.prototype.setRequestHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ResponseHeader} returns this
 */
proto.bosdyn.api.ResponseHeader.prototype.clearRequestHeader = function() {
  return this.setRequestHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ResponseHeader.prototype.hasRequestHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp request_received_timestamp = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.ResponseHeader.prototype.getRequestReceivedTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.ResponseHeader} returns this
*/
proto.bosdyn.api.ResponseHeader.prototype.setRequestReceivedTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ResponseHeader} returns this
 */
proto.bosdyn.api.ResponseHeader.prototype.clearRequestReceivedTimestamp = function() {
  return this.setRequestReceivedTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ResponseHeader.prototype.hasRequestReceivedTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp response_timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.ResponseHeader.prototype.getResponseTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.ResponseHeader} returns this
*/
proto.bosdyn.api.ResponseHeader.prototype.setResponseTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ResponseHeader} returns this
 */
proto.bosdyn.api.ResponseHeader.prototype.clearResponseTimestamp = function() {
  return this.setResponseTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ResponseHeader.prototype.hasResponseTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CommonError error = 4;
 * @return {?proto.bosdyn.api.CommonError}
 */
proto.bosdyn.api.ResponseHeader.prototype.getError = function() {
  return /** @type{?proto.bosdyn.api.CommonError} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.CommonError, 4));
};


/**
 * @param {?proto.bosdyn.api.CommonError|undefined} value
 * @return {!proto.bosdyn.api.ResponseHeader} returns this
*/
proto.bosdyn.api.ResponseHeader.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ResponseHeader} returns this
 */
proto.bosdyn.api.ResponseHeader.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ResponseHeader.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Any request = 5;
 * @return {?proto.google.protobuf.Any}
 */
proto.bosdyn.api.ResponseHeader.prototype.getRequest = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 5));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.bosdyn.api.ResponseHeader} returns this
*/
proto.bosdyn.api.ResponseHeader.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ResponseHeader} returns this
 */
proto.bosdyn.api.ResponseHeader.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ResponseHeader.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.bosdyn.api);

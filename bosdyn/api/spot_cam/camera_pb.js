// source: bosdyn/api/spot_cam/camera.proto
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

var bosdyn_api_geometry_pb = require('../../../bosdyn/api/geometry_pb.js');
goog.object.extend(proto, bosdyn_api_geometry_pb);
goog.exportSymbol('proto.bosdyn.api.spot_cam.Camera', null, global);
goog.exportSymbol('proto.bosdyn.api.spot_cam.Camera.IntrinsicsCase', null, global);
goog.exportSymbol('proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics', null, global);
goog.exportSymbol('proto.bosdyn.api.spot_cam.Camera.SphericalLimits', null, global);
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
proto.bosdyn.api.spot_cam.Camera = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.spot_cam.Camera.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.spot_cam.Camera, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot_cam.Camera.displayName = 'proto.bosdyn.api.spot_cam.Camera';
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
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.displayName = 'proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics';
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
proto.bosdyn.api.spot_cam.Camera.SphericalLimits = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot_cam.Camera.SphericalLimits, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot_cam.Camera.SphericalLimits.displayName = 'proto.bosdyn.api.spot_cam.Camera.SphericalLimits';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.spot_cam.Camera.oneofGroups_ = [[5,6]];

/**
 * @enum {number}
 */
proto.bosdyn.api.spot_cam.Camera.IntrinsicsCase = {
  INTRINSICS_NOT_SET: 0,
  PINHOLE: 5,
  SPHERICAL: 6
};

/**
 * @return {proto.bosdyn.api.spot_cam.Camera.IntrinsicsCase}
 */
proto.bosdyn.api.spot_cam.Camera.prototype.getIntrinsicsCase = function() {
  return /** @type {proto.bosdyn.api.spot_cam.Camera.IntrinsicsCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.spot_cam.Camera.oneofGroups_[0]));
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
proto.bosdyn.api.spot_cam.Camera.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot_cam.Camera.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot_cam.Camera} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot_cam.Camera.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resolution: (f = msg.getResolution()) && bosdyn_api_geometry_pb.Vec2.toObject(includeInstance, f),
    baseFrameName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    baseTfromSensor: (f = msg.getBaseTfromSensor()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    baseTformSensor: (f = msg.getBaseTformSensor()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    pinhole: (f = msg.getPinhole()) && proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.toObject(includeInstance, f),
    spherical: (f = msg.getSpherical()) && proto.bosdyn.api.spot_cam.Camera.SphericalLimits.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot_cam.Camera}
 */
proto.bosdyn.api.spot_cam.Camera.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot_cam.Camera;
  return proto.bosdyn.api.spot_cam.Camera.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot_cam.Camera} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot_cam.Camera}
 */
proto.bosdyn.api.spot_cam.Camera.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.Vec2;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2.deserializeBinaryFromReader);
      msg.setResolution(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseFrameName(value);
      break;
    case 4:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setBaseTfromSensor(value);
      break;
    case 7:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setBaseTformSensor(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics;
      reader.readMessage(value,proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.deserializeBinaryFromReader);
      msg.setPinhole(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.spot_cam.Camera.SphericalLimits;
      reader.readMessage(value,proto.bosdyn.api.spot_cam.Camera.SphericalLimits.deserializeBinaryFromReader);
      msg.setSpherical(value);
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
proto.bosdyn.api.spot_cam.Camera.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot_cam.Camera.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot_cam.Camera} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot_cam.Camera.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResolution();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.Vec2.serializeBinaryToWriter
    );
  }
  f = message.getBaseFrameName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBaseTfromSensor();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
  f = message.getBaseTformSensor();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
  f = message.getPinhole();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.serializeBinaryToWriter
    );
  }
  f = message.getSpherical();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bosdyn.api.spot_cam.Camera.SphericalLimits.serializeBinaryToWriter
    );
  }
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
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.toObject = function(includeInstance, msg) {
  var f, obj = {
    focalLength: (f = msg.getFocalLength()) && bosdyn_api_geometry_pb.Vec2.toObject(includeInstance, f),
    centerPoint: (f = msg.getCenterPoint()) && bosdyn_api_geometry_pb.Vec2.toObject(includeInstance, f),
    k1: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    k2: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    k3: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    k4: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
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
 * @return {!proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics}
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics;
  return proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics}
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.Vec2;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2.deserializeBinaryFromReader);
      msg.setFocalLength(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.Vec2;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2.deserializeBinaryFromReader);
      msg.setCenterPoint(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setK1(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setK2(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setK3(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setK4(value);
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
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFocalLength();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.Vec2.serializeBinaryToWriter
    );
  }
  f = message.getCenterPoint();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.Vec2.serializeBinaryToWriter
    );
  }
  f = message.getK1();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getK2();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getK3();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getK4();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
};


/**
 * optional bosdyn.api.Vec2 focal_length = 1;
 * @return {?proto.bosdyn.api.Vec2}
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.getFocalLength = function() {
  return /** @type{?proto.bosdyn.api.Vec2} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2, 1));
};


/**
 * @param {?proto.bosdyn.api.Vec2|undefined} value
 * @return {!proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics} returns this
*/
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.setFocalLength = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics} returns this
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.clearFocalLength = function() {
  return this.setFocalLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.hasFocalLength = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.Vec2 center_point = 2;
 * @return {?proto.bosdyn.api.Vec2}
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.getCenterPoint = function() {
  return /** @type{?proto.bosdyn.api.Vec2} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2, 2));
};


/**
 * @param {?proto.bosdyn.api.Vec2|undefined} value
 * @return {!proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics} returns this
*/
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.setCenterPoint = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics} returns this
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.clearCenterPoint = function() {
  return this.setCenterPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.hasCenterPoint = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float k1 = 3;
 * @return {number}
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.getK1 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics} returns this
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.setK1 = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float k2 = 4;
 * @return {number}
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.getK2 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics} returns this
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.setK2 = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float k3 = 5;
 * @return {number}
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.getK3 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics} returns this
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.setK3 = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float k4 = 6;
 * @return {number}
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.getK4 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics} returns this
 */
proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics.prototype.setK4 = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
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
proto.bosdyn.api.spot_cam.Camera.SphericalLimits.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot_cam.Camera.SphericalLimits.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot_cam.Camera.SphericalLimits} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot_cam.Camera.SphericalLimits.toObject = function(includeInstance, msg) {
  var f, obj = {
    minAngle: (f = msg.getMinAngle()) && bosdyn_api_geometry_pb.Vec2.toObject(includeInstance, f),
    maxAngle: (f = msg.getMaxAngle()) && bosdyn_api_geometry_pb.Vec2.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot_cam.Camera.SphericalLimits}
 */
proto.bosdyn.api.spot_cam.Camera.SphericalLimits.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot_cam.Camera.SphericalLimits;
  return proto.bosdyn.api.spot_cam.Camera.SphericalLimits.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot_cam.Camera.SphericalLimits} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot_cam.Camera.SphericalLimits}
 */
proto.bosdyn.api.spot_cam.Camera.SphericalLimits.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.Vec2;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2.deserializeBinaryFromReader);
      msg.setMinAngle(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.Vec2;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2.deserializeBinaryFromReader);
      msg.setMaxAngle(value);
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
proto.bosdyn.api.spot_cam.Camera.SphericalLimits.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot_cam.Camera.SphericalLimits.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot_cam.Camera.SphericalLimits} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot_cam.Camera.SphericalLimits.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinAngle();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.Vec2.serializeBinaryToWriter
    );
  }
  f = message.getMaxAngle();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.Vec2.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.Vec2 min_angle = 1;
 * @return {?proto.bosdyn.api.Vec2}
 */
proto.bosdyn.api.spot_cam.Camera.SphericalLimits.prototype.getMinAngle = function() {
  return /** @type{?proto.bosdyn.api.Vec2} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2, 1));
};


/**
 * @param {?proto.bosdyn.api.Vec2|undefined} value
 * @return {!proto.bosdyn.api.spot_cam.Camera.SphericalLimits} returns this
*/
proto.bosdyn.api.spot_cam.Camera.SphericalLimits.prototype.setMinAngle = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot_cam.Camera.SphericalLimits} returns this
 */
proto.bosdyn.api.spot_cam.Camera.SphericalLimits.prototype.clearMinAngle = function() {
  return this.setMinAngle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot_cam.Camera.SphericalLimits.prototype.hasMinAngle = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.Vec2 max_angle = 2;
 * @return {?proto.bosdyn.api.Vec2}
 */
proto.bosdyn.api.spot_cam.Camera.SphericalLimits.prototype.getMaxAngle = function() {
  return /** @type{?proto.bosdyn.api.Vec2} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2, 2));
};


/**
 * @param {?proto.bosdyn.api.Vec2|undefined} value
 * @return {!proto.bosdyn.api.spot_cam.Camera.SphericalLimits} returns this
*/
proto.bosdyn.api.spot_cam.Camera.SphericalLimits.prototype.setMaxAngle = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot_cam.Camera.SphericalLimits} returns this
 */
proto.bosdyn.api.spot_cam.Camera.SphericalLimits.prototype.clearMaxAngle = function() {
  return this.setMaxAngle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot_cam.Camera.SphericalLimits.prototype.hasMaxAngle = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.bosdyn.api.spot_cam.Camera.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot_cam.Camera} returns this
 */
proto.bosdyn.api.spot_cam.Camera.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bosdyn.api.Vec2 resolution = 2;
 * @return {?proto.bosdyn.api.Vec2}
 */
proto.bosdyn.api.spot_cam.Camera.prototype.getResolution = function() {
  return /** @type{?proto.bosdyn.api.Vec2} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2, 2));
};


/**
 * @param {?proto.bosdyn.api.Vec2|undefined} value
 * @return {!proto.bosdyn.api.spot_cam.Camera} returns this
*/
proto.bosdyn.api.spot_cam.Camera.prototype.setResolution = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot_cam.Camera} returns this
 */
proto.bosdyn.api.spot_cam.Camera.prototype.clearResolution = function() {
  return this.setResolution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot_cam.Camera.prototype.hasResolution = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string base_frame_name = 3;
 * @return {string}
 */
proto.bosdyn.api.spot_cam.Camera.prototype.getBaseFrameName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot_cam.Camera} returns this
 */
proto.bosdyn.api.spot_cam.Camera.prototype.setBaseFrameName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bosdyn.api.SE3Pose base_tfrom_sensor = 4;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.spot_cam.Camera.prototype.getBaseTfromSensor = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 4));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.spot_cam.Camera} returns this
*/
proto.bosdyn.api.spot_cam.Camera.prototype.setBaseTfromSensor = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot_cam.Camera} returns this
 */
proto.bosdyn.api.spot_cam.Camera.prototype.clearBaseTfromSensor = function() {
  return this.setBaseTfromSensor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot_cam.Camera.prototype.hasBaseTfromSensor = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bosdyn.api.SE3Pose base_tform_sensor = 7;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.spot_cam.Camera.prototype.getBaseTformSensor = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 7));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.spot_cam.Camera} returns this
*/
proto.bosdyn.api.spot_cam.Camera.prototype.setBaseTformSensor = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot_cam.Camera} returns this
 */
proto.bosdyn.api.spot_cam.Camera.prototype.clearBaseTformSensor = function() {
  return this.setBaseTformSensor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot_cam.Camera.prototype.hasBaseTformSensor = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional PinholeIntrinsics pinhole = 5;
 * @return {?proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics}
 */
proto.bosdyn.api.spot_cam.Camera.prototype.getPinhole = function() {
  return /** @type{?proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics, 5));
};


/**
 * @param {?proto.bosdyn.api.spot_cam.Camera.PinholeIntrinsics|undefined} value
 * @return {!proto.bosdyn.api.spot_cam.Camera} returns this
*/
proto.bosdyn.api.spot_cam.Camera.prototype.setPinhole = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.bosdyn.api.spot_cam.Camera.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot_cam.Camera} returns this
 */
proto.bosdyn.api.spot_cam.Camera.prototype.clearPinhole = function() {
  return this.setPinhole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot_cam.Camera.prototype.hasPinhole = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SphericalLimits spherical = 6;
 * @return {?proto.bosdyn.api.spot_cam.Camera.SphericalLimits}
 */
proto.bosdyn.api.spot_cam.Camera.prototype.getSpherical = function() {
  return /** @type{?proto.bosdyn.api.spot_cam.Camera.SphericalLimits} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot_cam.Camera.SphericalLimits, 6));
};


/**
 * @param {?proto.bosdyn.api.spot_cam.Camera.SphericalLimits|undefined} value
 * @return {!proto.bosdyn.api.spot_cam.Camera} returns this
*/
proto.bosdyn.api.spot_cam.Camera.prototype.setSpherical = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.bosdyn.api.spot_cam.Camera.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot_cam.Camera} returns this
 */
proto.bosdyn.api.spot_cam.Camera.prototype.clearSpherical = function() {
  return this.setSpherical(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot_cam.Camera.prototype.hasSpherical = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.bosdyn.api.spot_cam);
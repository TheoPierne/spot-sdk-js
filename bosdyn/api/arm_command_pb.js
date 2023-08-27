// source: bosdyn/api/arm_command.proto
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
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var bosdyn_api_basic_command_pb = require('../../bosdyn/api/basic_command_pb.js');
goog.object.extend(proto, bosdyn_api_basic_command_pb);
var bosdyn_api_geometry_pb = require('../../bosdyn/api/geometry_pb.js');
goog.object.extend(proto, bosdyn_api_geometry_pb);
var bosdyn_api_trajectory_pb = require('../../bosdyn/api/trajectory_pb.js');
goog.object.extend(proto, bosdyn_api_trajectory_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
goog.exportSymbol('proto.bosdyn.api.ArmCartesianCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmCartesianCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmCartesianCommand.Feedback.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmCartesianCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmCartesianCommand.Request.JointConfigurationCase', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmCommand.Feedback.FeedbackCase', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmCommand.Request.CommandCase', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmImpedanceCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmImpedanceCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmImpedanceCommand.Feedback.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmImpedanceCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmJointMoveCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmJointMoveCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmJointMoveCommand.Feedback.PlannerStatus', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmJointMoveCommand.Feedback.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmJointMoveCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmJointPosition', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmJointTrajectory', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmJointTrajectoryPoint', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmJointVelocity', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmParams', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmStopCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmStopCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmStopCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmVelocityCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmVelocityCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmVelocityCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmVelocityCommand.Request.CommandCase', null, global);
goog.exportSymbol('proto.bosdyn.api.GazeCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.GazeCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.GazeCommand.Feedback.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.GazeCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.NamedArmPositionsCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.NamedArmPositionsCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.NamedArmPositionsCommand.Feedback.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.NamedArmPositionsCommand.Positions', null, global);
goog.exportSymbol('proto.bosdyn.api.NamedArmPositionsCommand.Request', null, global);
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
proto.bosdyn.api.ArmCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmCommand.displayName = 'proto.bosdyn.api.ArmCommand';
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
proto.bosdyn.api.ArmCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.ArmCommand.Request.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.ArmCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmCommand.Request.displayName = 'proto.bosdyn.api.ArmCommand.Request';
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
proto.bosdyn.api.ArmCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.ArmCommand.Feedback.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.ArmCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmCommand.Feedback.displayName = 'proto.bosdyn.api.ArmCommand.Feedback';
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
proto.bosdyn.api.ArmParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmParams.displayName = 'proto.bosdyn.api.ArmParams';
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
proto.bosdyn.api.ArmVelocityCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmVelocityCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmVelocityCommand.displayName = 'proto.bosdyn.api.ArmVelocityCommand';
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
proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.displayName = 'proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity';
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
proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.displayName = 'proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity';
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
proto.bosdyn.api.ArmVelocityCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.ArmVelocityCommand.Request.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.ArmVelocityCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmVelocityCommand.Request.displayName = 'proto.bosdyn.api.ArmVelocityCommand.Request';
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
proto.bosdyn.api.ArmVelocityCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmVelocityCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmVelocityCommand.Feedback.displayName = 'proto.bosdyn.api.ArmVelocityCommand.Feedback';
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
proto.bosdyn.api.NamedArmPositionsCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.NamedArmPositionsCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.NamedArmPositionsCommand.displayName = 'proto.bosdyn.api.NamedArmPositionsCommand';
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
proto.bosdyn.api.NamedArmPositionsCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.NamedArmPositionsCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.NamedArmPositionsCommand.Request.displayName = 'proto.bosdyn.api.NamedArmPositionsCommand.Request';
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
proto.bosdyn.api.NamedArmPositionsCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.NamedArmPositionsCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.NamedArmPositionsCommand.Feedback.displayName = 'proto.bosdyn.api.NamedArmPositionsCommand.Feedback';
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
proto.bosdyn.api.ArmCartesianCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmCartesianCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmCartesianCommand.displayName = 'proto.bosdyn.api.ArmCartesianCommand';
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
proto.bosdyn.api.ArmCartesianCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.ArmCartesianCommand.Request.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.ArmCartesianCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmCartesianCommand.Request.displayName = 'proto.bosdyn.api.ArmCartesianCommand.Request';
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
proto.bosdyn.api.ArmCartesianCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmCartesianCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmCartesianCommand.Feedback.displayName = 'proto.bosdyn.api.ArmCartesianCommand.Feedback';
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
proto.bosdyn.api.ArmJointMoveCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmJointMoveCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmJointMoveCommand.displayName = 'proto.bosdyn.api.ArmJointMoveCommand';
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
proto.bosdyn.api.ArmJointMoveCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmJointMoveCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmJointMoveCommand.Request.displayName = 'proto.bosdyn.api.ArmJointMoveCommand.Request';
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
proto.bosdyn.api.ArmJointMoveCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.ArmJointMoveCommand.Feedback.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.ArmJointMoveCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmJointMoveCommand.Feedback.displayName = 'proto.bosdyn.api.ArmJointMoveCommand.Feedback';
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
proto.bosdyn.api.ArmJointPosition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmJointPosition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmJointPosition.displayName = 'proto.bosdyn.api.ArmJointPosition';
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
proto.bosdyn.api.ArmJointVelocity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmJointVelocity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmJointVelocity.displayName = 'proto.bosdyn.api.ArmJointVelocity';
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
proto.bosdyn.api.ArmJointTrajectoryPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmJointTrajectoryPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmJointTrajectoryPoint.displayName = 'proto.bosdyn.api.ArmJointTrajectoryPoint';
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
proto.bosdyn.api.ArmJointTrajectory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.ArmJointTrajectory.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.ArmJointTrajectory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmJointTrajectory.displayName = 'proto.bosdyn.api.ArmJointTrajectory';
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
proto.bosdyn.api.GazeCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.GazeCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.GazeCommand.displayName = 'proto.bosdyn.api.GazeCommand';
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
proto.bosdyn.api.GazeCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.GazeCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.GazeCommand.Request.displayName = 'proto.bosdyn.api.GazeCommand.Request';
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
proto.bosdyn.api.GazeCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.GazeCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.GazeCommand.Feedback.displayName = 'proto.bosdyn.api.GazeCommand.Feedback';
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
proto.bosdyn.api.ArmStopCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmStopCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmStopCommand.displayName = 'proto.bosdyn.api.ArmStopCommand';
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
proto.bosdyn.api.ArmStopCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmStopCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmStopCommand.Request.displayName = 'proto.bosdyn.api.ArmStopCommand.Request';
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
proto.bosdyn.api.ArmStopCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmStopCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmStopCommand.Feedback.displayName = 'proto.bosdyn.api.ArmStopCommand.Feedback';
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
proto.bosdyn.api.ArmImpedanceCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmImpedanceCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmImpedanceCommand.displayName = 'proto.bosdyn.api.ArmImpedanceCommand';
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
proto.bosdyn.api.ArmImpedanceCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmImpedanceCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmImpedanceCommand.Request.displayName = 'proto.bosdyn.api.ArmImpedanceCommand.Request';
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
proto.bosdyn.api.ArmImpedanceCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmImpedanceCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmImpedanceCommand.Feedback.displayName = 'proto.bosdyn.api.ArmImpedanceCommand.Feedback';
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
proto.bosdyn.api.ArmCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmCommand.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.bosdyn.api.ArmCommand}
 */
proto.bosdyn.api.ArmCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmCommand;
  return proto.bosdyn.api.ArmCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmCommand}
 */
proto.bosdyn.api.ArmCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.bosdyn.api.ArmCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.ArmCommand.Request.oneofGroups_ = [[3,4,5,6,8,9,10,12]];

/**
 * @enum {number}
 */
proto.bosdyn.api.ArmCommand.Request.CommandCase = {
  COMMAND_NOT_SET: 0,
  ARM_CARTESIAN_COMMAND: 3,
  ARM_JOINT_MOVE_COMMAND: 4,
  NAMED_ARM_POSITION_COMMAND: 5,
  ARM_VELOCITY_COMMAND: 6,
  ARM_GAZE_COMMAND: 8,
  ARM_STOP_COMMAND: 9,
  ARM_DRAG_COMMAND: 10,
  ARM_IMPEDANCE_COMMAND: 12
};

/**
 * @return {proto.bosdyn.api.ArmCommand.Request.CommandCase}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.getCommandCase = function() {
  return /** @type {proto.bosdyn.api.ArmCommand.Request.CommandCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.ArmCommand.Request.oneofGroups_[0]));
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
proto.bosdyn.api.ArmCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmCommand.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    armCartesianCommand: (f = msg.getArmCartesianCommand()) && proto.bosdyn.api.ArmCartesianCommand.Request.toObject(includeInstance, f),
    armJointMoveCommand: (f = msg.getArmJointMoveCommand()) && proto.bosdyn.api.ArmJointMoveCommand.Request.toObject(includeInstance, f),
    namedArmPositionCommand: (f = msg.getNamedArmPositionCommand()) && proto.bosdyn.api.NamedArmPositionsCommand.Request.toObject(includeInstance, f),
    armVelocityCommand: (f = msg.getArmVelocityCommand()) && proto.bosdyn.api.ArmVelocityCommand.Request.toObject(includeInstance, f),
    armGazeCommand: (f = msg.getArmGazeCommand()) && proto.bosdyn.api.GazeCommand.Request.toObject(includeInstance, f),
    armStopCommand: (f = msg.getArmStopCommand()) && proto.bosdyn.api.ArmStopCommand.Request.toObject(includeInstance, f),
    armDragCommand: (f = msg.getArmDragCommand()) && bosdyn_api_basic_command_pb.ArmDragCommand.Request.toObject(includeInstance, f),
    armImpedanceCommand: (f = msg.getArmImpedanceCommand()) && proto.bosdyn.api.ArmImpedanceCommand.Request.toObject(includeInstance, f),
    params: (f = msg.getParams()) && proto.bosdyn.api.ArmParams.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.ArmCommand.Request}
 */
proto.bosdyn.api.ArmCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmCommand.Request;
  return proto.bosdyn.api.ArmCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmCommand.Request}
 */
proto.bosdyn.api.ArmCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.bosdyn.api.ArmCartesianCommand.Request;
      reader.readMessage(value,proto.bosdyn.api.ArmCartesianCommand.Request.deserializeBinaryFromReader);
      msg.setArmCartesianCommand(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.ArmJointMoveCommand.Request;
      reader.readMessage(value,proto.bosdyn.api.ArmJointMoveCommand.Request.deserializeBinaryFromReader);
      msg.setArmJointMoveCommand(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.NamedArmPositionsCommand.Request;
      reader.readMessage(value,proto.bosdyn.api.NamedArmPositionsCommand.Request.deserializeBinaryFromReader);
      msg.setNamedArmPositionCommand(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.ArmVelocityCommand.Request;
      reader.readMessage(value,proto.bosdyn.api.ArmVelocityCommand.Request.deserializeBinaryFromReader);
      msg.setArmVelocityCommand(value);
      break;
    case 8:
      var value = new proto.bosdyn.api.GazeCommand.Request;
      reader.readMessage(value,proto.bosdyn.api.GazeCommand.Request.deserializeBinaryFromReader);
      msg.setArmGazeCommand(value);
      break;
    case 9:
      var value = new proto.bosdyn.api.ArmStopCommand.Request;
      reader.readMessage(value,proto.bosdyn.api.ArmStopCommand.Request.deserializeBinaryFromReader);
      msg.setArmStopCommand(value);
      break;
    case 10:
      var value = new bosdyn_api_basic_command_pb.ArmDragCommand.Request;
      reader.readMessage(value,bosdyn_api_basic_command_pb.ArmDragCommand.Request.deserializeBinaryFromReader);
      msg.setArmDragCommand(value);
      break;
    case 12:
      var value = new proto.bosdyn.api.ArmImpedanceCommand.Request;
      reader.readMessage(value,proto.bosdyn.api.ArmImpedanceCommand.Request.deserializeBinaryFromReader);
      msg.setArmImpedanceCommand(value);
      break;
    case 11:
      var value = new proto.bosdyn.api.ArmParams;
      reader.readMessage(value,proto.bosdyn.api.ArmParams.deserializeBinaryFromReader);
      msg.setParams(value);
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
proto.bosdyn.api.ArmCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmCommand.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArmCartesianCommand();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.ArmCartesianCommand.Request.serializeBinaryToWriter
    );
  }
  f = message.getArmJointMoveCommand();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.ArmJointMoveCommand.Request.serializeBinaryToWriter
    );
  }
  f = message.getNamedArmPositionCommand();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.NamedArmPositionsCommand.Request.serializeBinaryToWriter
    );
  }
  f = message.getArmVelocityCommand();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bosdyn.api.ArmVelocityCommand.Request.serializeBinaryToWriter
    );
  }
  f = message.getArmGazeCommand();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bosdyn.api.GazeCommand.Request.serializeBinaryToWriter
    );
  }
  f = message.getArmStopCommand();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bosdyn.api.ArmStopCommand.Request.serializeBinaryToWriter
    );
  }
  f = message.getArmDragCommand();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      bosdyn_api_basic_command_pb.ArmDragCommand.Request.serializeBinaryToWriter
    );
  }
  f = message.getArmImpedanceCommand();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.bosdyn.api.ArmImpedanceCommand.Request.serializeBinaryToWriter
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.bosdyn.api.ArmParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional ArmCartesianCommand.Request arm_cartesian_command = 3;
 * @return {?proto.bosdyn.api.ArmCartesianCommand.Request}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.getArmCartesianCommand = function() {
  return /** @type{?proto.bosdyn.api.ArmCartesianCommand.Request} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ArmCartesianCommand.Request, 3));
};


/**
 * @param {?proto.bosdyn.api.ArmCartesianCommand.Request|undefined} value
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
*/
proto.bosdyn.api.ArmCommand.Request.prototype.setArmCartesianCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bosdyn.api.ArmCommand.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
 */
proto.bosdyn.api.ArmCommand.Request.prototype.clearArmCartesianCommand = function() {
  return this.setArmCartesianCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.hasArmCartesianCommand = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ArmJointMoveCommand.Request arm_joint_move_command = 4;
 * @return {?proto.bosdyn.api.ArmJointMoveCommand.Request}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.getArmJointMoveCommand = function() {
  return /** @type{?proto.bosdyn.api.ArmJointMoveCommand.Request} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ArmJointMoveCommand.Request, 4));
};


/**
 * @param {?proto.bosdyn.api.ArmJointMoveCommand.Request|undefined} value
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
*/
proto.bosdyn.api.ArmCommand.Request.prototype.setArmJointMoveCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bosdyn.api.ArmCommand.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
 */
proto.bosdyn.api.ArmCommand.Request.prototype.clearArmJointMoveCommand = function() {
  return this.setArmJointMoveCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.hasArmJointMoveCommand = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional NamedArmPositionsCommand.Request named_arm_position_command = 5;
 * @return {?proto.bosdyn.api.NamedArmPositionsCommand.Request}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.getNamedArmPositionCommand = function() {
  return /** @type{?proto.bosdyn.api.NamedArmPositionsCommand.Request} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.NamedArmPositionsCommand.Request, 5));
};


/**
 * @param {?proto.bosdyn.api.NamedArmPositionsCommand.Request|undefined} value
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
*/
proto.bosdyn.api.ArmCommand.Request.prototype.setNamedArmPositionCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.bosdyn.api.ArmCommand.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
 */
proto.bosdyn.api.ArmCommand.Request.prototype.clearNamedArmPositionCommand = function() {
  return this.setNamedArmPositionCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.hasNamedArmPositionCommand = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ArmVelocityCommand.Request arm_velocity_command = 6;
 * @return {?proto.bosdyn.api.ArmVelocityCommand.Request}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.getArmVelocityCommand = function() {
  return /** @type{?proto.bosdyn.api.ArmVelocityCommand.Request} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ArmVelocityCommand.Request, 6));
};


/**
 * @param {?proto.bosdyn.api.ArmVelocityCommand.Request|undefined} value
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
*/
proto.bosdyn.api.ArmCommand.Request.prototype.setArmVelocityCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.bosdyn.api.ArmCommand.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
 */
proto.bosdyn.api.ArmCommand.Request.prototype.clearArmVelocityCommand = function() {
  return this.setArmVelocityCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.hasArmVelocityCommand = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional GazeCommand.Request arm_gaze_command = 8;
 * @return {?proto.bosdyn.api.GazeCommand.Request}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.getArmGazeCommand = function() {
  return /** @type{?proto.bosdyn.api.GazeCommand.Request} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.GazeCommand.Request, 8));
};


/**
 * @param {?proto.bosdyn.api.GazeCommand.Request|undefined} value
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
*/
proto.bosdyn.api.ArmCommand.Request.prototype.setArmGazeCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.bosdyn.api.ArmCommand.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
 */
proto.bosdyn.api.ArmCommand.Request.prototype.clearArmGazeCommand = function() {
  return this.setArmGazeCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.hasArmGazeCommand = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ArmStopCommand.Request arm_stop_command = 9;
 * @return {?proto.bosdyn.api.ArmStopCommand.Request}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.getArmStopCommand = function() {
  return /** @type{?proto.bosdyn.api.ArmStopCommand.Request} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ArmStopCommand.Request, 9));
};


/**
 * @param {?proto.bosdyn.api.ArmStopCommand.Request|undefined} value
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
*/
proto.bosdyn.api.ArmCommand.Request.prototype.setArmStopCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.bosdyn.api.ArmCommand.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
 */
proto.bosdyn.api.ArmCommand.Request.prototype.clearArmStopCommand = function() {
  return this.setArmStopCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.hasArmStopCommand = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ArmDragCommand.Request arm_drag_command = 10;
 * @return {?proto.bosdyn.api.ArmDragCommand.Request}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.getArmDragCommand = function() {
  return /** @type{?proto.bosdyn.api.ArmDragCommand.Request} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_basic_command_pb.ArmDragCommand.Request, 10));
};


/**
 * @param {?proto.bosdyn.api.ArmDragCommand.Request|undefined} value
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
*/
proto.bosdyn.api.ArmCommand.Request.prototype.setArmDragCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.bosdyn.api.ArmCommand.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
 */
proto.bosdyn.api.ArmCommand.Request.prototype.clearArmDragCommand = function() {
  return this.setArmDragCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.hasArmDragCommand = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ArmImpedanceCommand.Request arm_impedance_command = 12;
 * @return {?proto.bosdyn.api.ArmImpedanceCommand.Request}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.getArmImpedanceCommand = function() {
  return /** @type{?proto.bosdyn.api.ArmImpedanceCommand.Request} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ArmImpedanceCommand.Request, 12));
};


/**
 * @param {?proto.bosdyn.api.ArmImpedanceCommand.Request|undefined} value
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
*/
proto.bosdyn.api.ArmCommand.Request.prototype.setArmImpedanceCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.bosdyn.api.ArmCommand.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
 */
proto.bosdyn.api.ArmCommand.Request.prototype.clearArmImpedanceCommand = function() {
  return this.setArmImpedanceCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.hasArmImpedanceCommand = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ArmParams params = 11;
 * @return {?proto.bosdyn.api.ArmParams}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.getParams = function() {
  return /** @type{?proto.bosdyn.api.ArmParams} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ArmParams, 11));
};


/**
 * @param {?proto.bosdyn.api.ArmParams|undefined} value
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
*/
proto.bosdyn.api.ArmCommand.Request.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCommand.Request} returns this
 */
proto.bosdyn.api.ArmCommand.Request.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCommand.Request.prototype.hasParams = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.ArmCommand.Feedback.oneofGroups_ = [[3,4,5,6,8,9,10,12]];

/**
 * @enum {number}
 */
proto.bosdyn.api.ArmCommand.Feedback.FeedbackCase = {
  FEEDBACK_NOT_SET: 0,
  ARM_CARTESIAN_FEEDBACK: 3,
  ARM_JOINT_MOVE_FEEDBACK: 4,
  NAMED_ARM_POSITION_FEEDBACK: 5,
  ARM_VELOCITY_FEEDBACK: 6,
  ARM_GAZE_FEEDBACK: 8,
  ARM_STOP_FEEDBACK: 9,
  ARM_DRAG_FEEDBACK: 10,
  ARM_IMPEDANCE_FEEDBACK: 12
};

/**
 * @return {proto.bosdyn.api.ArmCommand.Feedback.FeedbackCase}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.getFeedbackCase = function() {
  return /** @type {proto.bosdyn.api.ArmCommand.Feedback.FeedbackCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.ArmCommand.Feedback.oneofGroups_[0]));
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
proto.bosdyn.api.ArmCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmCommand.Feedback.toObject = function(includeInstance, msg) {
  var f, obj = {
    armCartesianFeedback: (f = msg.getArmCartesianFeedback()) && proto.bosdyn.api.ArmCartesianCommand.Feedback.toObject(includeInstance, f),
    armJointMoveFeedback: (f = msg.getArmJointMoveFeedback()) && proto.bosdyn.api.ArmJointMoveCommand.Feedback.toObject(includeInstance, f),
    namedArmPositionFeedback: (f = msg.getNamedArmPositionFeedback()) && proto.bosdyn.api.NamedArmPositionsCommand.Feedback.toObject(includeInstance, f),
    armVelocityFeedback: (f = msg.getArmVelocityFeedback()) && proto.bosdyn.api.ArmVelocityCommand.Feedback.toObject(includeInstance, f),
    armGazeFeedback: (f = msg.getArmGazeFeedback()) && proto.bosdyn.api.GazeCommand.Feedback.toObject(includeInstance, f),
    armStopFeedback: (f = msg.getArmStopFeedback()) && proto.bosdyn.api.ArmStopCommand.Feedback.toObject(includeInstance, f),
    armDragFeedback: (f = msg.getArmDragFeedback()) && bosdyn_api_basic_command_pb.ArmDragCommand.Feedback.toObject(includeInstance, f),
    armImpedanceFeedback: (f = msg.getArmImpedanceFeedback()) && proto.bosdyn.api.ArmImpedanceCommand.Feedback.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 100, 0)
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
 * @return {!proto.bosdyn.api.ArmCommand.Feedback}
 */
proto.bosdyn.api.ArmCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmCommand.Feedback;
  return proto.bosdyn.api.ArmCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmCommand.Feedback}
 */
proto.bosdyn.api.ArmCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.bosdyn.api.ArmCartesianCommand.Feedback;
      reader.readMessage(value,proto.bosdyn.api.ArmCartesianCommand.Feedback.deserializeBinaryFromReader);
      msg.setArmCartesianFeedback(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.ArmJointMoveCommand.Feedback;
      reader.readMessage(value,proto.bosdyn.api.ArmJointMoveCommand.Feedback.deserializeBinaryFromReader);
      msg.setArmJointMoveFeedback(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.NamedArmPositionsCommand.Feedback;
      reader.readMessage(value,proto.bosdyn.api.NamedArmPositionsCommand.Feedback.deserializeBinaryFromReader);
      msg.setNamedArmPositionFeedback(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.ArmVelocityCommand.Feedback;
      reader.readMessage(value,proto.bosdyn.api.ArmVelocityCommand.Feedback.deserializeBinaryFromReader);
      msg.setArmVelocityFeedback(value);
      break;
    case 8:
      var value = new proto.bosdyn.api.GazeCommand.Feedback;
      reader.readMessage(value,proto.bosdyn.api.GazeCommand.Feedback.deserializeBinaryFromReader);
      msg.setArmGazeFeedback(value);
      break;
    case 9:
      var value = new proto.bosdyn.api.ArmStopCommand.Feedback;
      reader.readMessage(value,proto.bosdyn.api.ArmStopCommand.Feedback.deserializeBinaryFromReader);
      msg.setArmStopFeedback(value);
      break;
    case 10:
      var value = new bosdyn_api_basic_command_pb.ArmDragCommand.Feedback;
      reader.readMessage(value,bosdyn_api_basic_command_pb.ArmDragCommand.Feedback.deserializeBinaryFromReader);
      msg.setArmDragFeedback(value);
      break;
    case 12:
      var value = new proto.bosdyn.api.ArmImpedanceCommand.Feedback;
      reader.readMessage(value,proto.bosdyn.api.ArmImpedanceCommand.Feedback.deserializeBinaryFromReader);
      msg.setArmImpedanceFeedback(value);
      break;
    case 100:
      var value = /** @type {!proto.bosdyn.api.RobotCommandFeedbackStatus.Status} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.bosdyn.api.ArmCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArmCartesianFeedback();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.ArmCartesianCommand.Feedback.serializeBinaryToWriter
    );
  }
  f = message.getArmJointMoveFeedback();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.ArmJointMoveCommand.Feedback.serializeBinaryToWriter
    );
  }
  f = message.getNamedArmPositionFeedback();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.NamedArmPositionsCommand.Feedback.serializeBinaryToWriter
    );
  }
  f = message.getArmVelocityFeedback();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bosdyn.api.ArmVelocityCommand.Feedback.serializeBinaryToWriter
    );
  }
  f = message.getArmGazeFeedback();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bosdyn.api.GazeCommand.Feedback.serializeBinaryToWriter
    );
  }
  f = message.getArmStopFeedback();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bosdyn.api.ArmStopCommand.Feedback.serializeBinaryToWriter
    );
  }
  f = message.getArmDragFeedback();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      bosdyn_api_basic_command_pb.ArmDragCommand.Feedback.serializeBinaryToWriter
    );
  }
  f = message.getArmImpedanceFeedback();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.bosdyn.api.ArmImpedanceCommand.Feedback.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      100,
      f
    );
  }
};


/**
 * optional ArmCartesianCommand.Feedback arm_cartesian_feedback = 3;
 * @return {?proto.bosdyn.api.ArmCartesianCommand.Feedback}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.getArmCartesianFeedback = function() {
  return /** @type{?proto.bosdyn.api.ArmCartesianCommand.Feedback} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ArmCartesianCommand.Feedback, 3));
};


/**
 * @param {?proto.bosdyn.api.ArmCartesianCommand.Feedback|undefined} value
 * @return {!proto.bosdyn.api.ArmCommand.Feedback} returns this
*/
proto.bosdyn.api.ArmCommand.Feedback.prototype.setArmCartesianFeedback = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bosdyn.api.ArmCommand.Feedback.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.clearArmCartesianFeedback = function() {
  return this.setArmCartesianFeedback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.hasArmCartesianFeedback = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ArmJointMoveCommand.Feedback arm_joint_move_feedback = 4;
 * @return {?proto.bosdyn.api.ArmJointMoveCommand.Feedback}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.getArmJointMoveFeedback = function() {
  return /** @type{?proto.bosdyn.api.ArmJointMoveCommand.Feedback} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ArmJointMoveCommand.Feedback, 4));
};


/**
 * @param {?proto.bosdyn.api.ArmJointMoveCommand.Feedback|undefined} value
 * @return {!proto.bosdyn.api.ArmCommand.Feedback} returns this
*/
proto.bosdyn.api.ArmCommand.Feedback.prototype.setArmJointMoveFeedback = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bosdyn.api.ArmCommand.Feedback.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.clearArmJointMoveFeedback = function() {
  return this.setArmJointMoveFeedback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.hasArmJointMoveFeedback = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional NamedArmPositionsCommand.Feedback named_arm_position_feedback = 5;
 * @return {?proto.bosdyn.api.NamedArmPositionsCommand.Feedback}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.getNamedArmPositionFeedback = function() {
  return /** @type{?proto.bosdyn.api.NamedArmPositionsCommand.Feedback} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.NamedArmPositionsCommand.Feedback, 5));
};


/**
 * @param {?proto.bosdyn.api.NamedArmPositionsCommand.Feedback|undefined} value
 * @return {!proto.bosdyn.api.ArmCommand.Feedback} returns this
*/
proto.bosdyn.api.ArmCommand.Feedback.prototype.setNamedArmPositionFeedback = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.bosdyn.api.ArmCommand.Feedback.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.clearNamedArmPositionFeedback = function() {
  return this.setNamedArmPositionFeedback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.hasNamedArmPositionFeedback = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ArmVelocityCommand.Feedback arm_velocity_feedback = 6;
 * @return {?proto.bosdyn.api.ArmVelocityCommand.Feedback}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.getArmVelocityFeedback = function() {
  return /** @type{?proto.bosdyn.api.ArmVelocityCommand.Feedback} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ArmVelocityCommand.Feedback, 6));
};


/**
 * @param {?proto.bosdyn.api.ArmVelocityCommand.Feedback|undefined} value
 * @return {!proto.bosdyn.api.ArmCommand.Feedback} returns this
*/
proto.bosdyn.api.ArmCommand.Feedback.prototype.setArmVelocityFeedback = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.bosdyn.api.ArmCommand.Feedback.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.clearArmVelocityFeedback = function() {
  return this.setArmVelocityFeedback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.hasArmVelocityFeedback = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional GazeCommand.Feedback arm_gaze_feedback = 8;
 * @return {?proto.bosdyn.api.GazeCommand.Feedback}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.getArmGazeFeedback = function() {
  return /** @type{?proto.bosdyn.api.GazeCommand.Feedback} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.GazeCommand.Feedback, 8));
};


/**
 * @param {?proto.bosdyn.api.GazeCommand.Feedback|undefined} value
 * @return {!proto.bosdyn.api.ArmCommand.Feedback} returns this
*/
proto.bosdyn.api.ArmCommand.Feedback.prototype.setArmGazeFeedback = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.bosdyn.api.ArmCommand.Feedback.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.clearArmGazeFeedback = function() {
  return this.setArmGazeFeedback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.hasArmGazeFeedback = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ArmStopCommand.Feedback arm_stop_feedback = 9;
 * @return {?proto.bosdyn.api.ArmStopCommand.Feedback}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.getArmStopFeedback = function() {
  return /** @type{?proto.bosdyn.api.ArmStopCommand.Feedback} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ArmStopCommand.Feedback, 9));
};


/**
 * @param {?proto.bosdyn.api.ArmStopCommand.Feedback|undefined} value
 * @return {!proto.bosdyn.api.ArmCommand.Feedback} returns this
*/
proto.bosdyn.api.ArmCommand.Feedback.prototype.setArmStopFeedback = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.bosdyn.api.ArmCommand.Feedback.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.clearArmStopFeedback = function() {
  return this.setArmStopFeedback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.hasArmStopFeedback = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ArmDragCommand.Feedback arm_drag_feedback = 10;
 * @return {?proto.bosdyn.api.ArmDragCommand.Feedback}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.getArmDragFeedback = function() {
  return /** @type{?proto.bosdyn.api.ArmDragCommand.Feedback} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_basic_command_pb.ArmDragCommand.Feedback, 10));
};


/**
 * @param {?proto.bosdyn.api.ArmDragCommand.Feedback|undefined} value
 * @return {!proto.bosdyn.api.ArmCommand.Feedback} returns this
*/
proto.bosdyn.api.ArmCommand.Feedback.prototype.setArmDragFeedback = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.bosdyn.api.ArmCommand.Feedback.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.clearArmDragFeedback = function() {
  return this.setArmDragFeedback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.hasArmDragFeedback = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ArmImpedanceCommand.Feedback arm_impedance_feedback = 12;
 * @return {?proto.bosdyn.api.ArmImpedanceCommand.Feedback}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.getArmImpedanceFeedback = function() {
  return /** @type{?proto.bosdyn.api.ArmImpedanceCommand.Feedback} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ArmImpedanceCommand.Feedback, 12));
};


/**
 * @param {?proto.bosdyn.api.ArmImpedanceCommand.Feedback|undefined} value
 * @return {!proto.bosdyn.api.ArmCommand.Feedback} returns this
*/
proto.bosdyn.api.ArmCommand.Feedback.prototype.setArmImpedanceFeedback = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.bosdyn.api.ArmCommand.Feedback.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.clearArmImpedanceFeedback = function() {
  return this.setArmImpedanceFeedback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.hasArmImpedanceFeedback = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional RobotCommandFeedbackStatus.Status status = 100;
 * @return {!proto.bosdyn.api.RobotCommandFeedbackStatus.Status}
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.RobotCommandFeedbackStatus.Status} */ (jspb.Message.getFieldWithDefault(this, 100, 0));
};


/**
 * @param {!proto.bosdyn.api.RobotCommandFeedbackStatus.Status} value
 * @return {!proto.bosdyn.api.ArmCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmCommand.Feedback.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 100, value);
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
proto.bosdyn.api.ArmParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    disableBodyForceLimiter: (f = msg.getDisableBodyForceLimiter()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.ArmParams}
 */
proto.bosdyn.api.ArmParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmParams;
  return proto.bosdyn.api.ArmParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmParams}
 */
proto.bosdyn.api.ArmParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setDisableBodyForceLimiter(value);
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
proto.bosdyn.api.ArmParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisableBodyForceLimiter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.BoolValue disable_body_force_limiter = 1;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.ArmParams.prototype.getDisableBodyForceLimiter = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 1));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.ArmParams} returns this
*/
proto.bosdyn.api.ArmParams.prototype.setDisableBodyForceLimiter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmParams} returns this
 */
proto.bosdyn.api.ArmParams.prototype.clearDisableBodyForceLimiter = function() {
  return this.setDisableBodyForceLimiter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmParams.prototype.hasDisableBodyForceLimiter = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.bosdyn.api.ArmVelocityCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmVelocityCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmVelocityCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmVelocityCommand.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.bosdyn.api.ArmVelocityCommand}
 */
proto.bosdyn.api.ArmVelocityCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmVelocityCommand;
  return proto.bosdyn.api.ArmVelocityCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmVelocityCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmVelocityCommand}
 */
proto.bosdyn.api.ArmVelocityCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.bosdyn.api.ArmVelocityCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmVelocityCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmVelocityCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmVelocityCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.toObject = function(includeInstance, msg) {
  var f, obj = {
    linearVelocity: (f = msg.getLinearVelocity()) && bosdyn_api_geometry_pb.CylindricalCoordinate.toObject(includeInstance, f),
    maxLinearVelocity: (f = msg.getMaxLinearVelocity()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity}
 */
proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity;
  return proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity}
 */
proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.CylindricalCoordinate;
      reader.readMessage(value,bosdyn_api_geometry_pb.CylindricalCoordinate.deserializeBinaryFromReader);
      msg.setLinearVelocity(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMaxLinearVelocity(value);
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
proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinearVelocity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.CylindricalCoordinate.serializeBinaryToWriter
    );
  }
  f = message.getMaxLinearVelocity();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional CylindricalCoordinate linear_velocity = 1;
 * @return {?proto.bosdyn.api.CylindricalCoordinate}
 */
proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.prototype.getLinearVelocity = function() {
  return /** @type{?proto.bosdyn.api.CylindricalCoordinate} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.CylindricalCoordinate, 1));
};


/**
 * @param {?proto.bosdyn.api.CylindricalCoordinate|undefined} value
 * @return {!proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity} returns this
*/
proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.prototype.setLinearVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity} returns this
 */
proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.prototype.clearLinearVelocity = function() {
  return this.setLinearVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.prototype.hasLinearVelocity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue max_linear_velocity = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.prototype.getMaxLinearVelocity = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity} returns this
*/
proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.prototype.setMaxLinearVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity} returns this
 */
proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.prototype.clearMaxLinearVelocity = function() {
  return this.setMaxLinearVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.prototype.hasMaxLinearVelocity = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.toObject = function(includeInstance, msg) {
  var f, obj = {
    frameName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    velocityInFrameName: (f = msg.getVelocityInFrameName()) && bosdyn_api_geometry_pb.Vec3.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity}
 */
proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity;
  return proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity}
 */
proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameName(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.Vec3;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3.deserializeBinaryFromReader);
      msg.setVelocityInFrameName(value);
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
proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrameName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVelocityInFrameName();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.Vec3.serializeBinaryToWriter
    );
  }
};


/**
 * optional string frame_name = 1;
 * @return {string}
 */
proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.prototype.getFrameName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity} returns this
 */
proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.prototype.setFrameName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Vec3 velocity_in_frame_name = 2;
 * @return {?proto.bosdyn.api.Vec3}
 */
proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.prototype.getVelocityInFrameName = function() {
  return /** @type{?proto.bosdyn.api.Vec3} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3, 2));
};


/**
 * @param {?proto.bosdyn.api.Vec3|undefined} value
 * @return {!proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity} returns this
*/
proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.prototype.setVelocityInFrameName = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity} returns this
 */
proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.prototype.clearVelocityInFrameName = function() {
  return this.setVelocityInFrameName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.prototype.hasVelocityInFrameName = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.ArmVelocityCommand.Request.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.bosdyn.api.ArmVelocityCommand.Request.CommandCase = {
  COMMAND_NOT_SET: 0,
  CYLINDRICAL_VELOCITY: 1,
  CARTESIAN_VELOCITY: 2
};

/**
 * @return {proto.bosdyn.api.ArmVelocityCommand.Request.CommandCase}
 */
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.getCommandCase = function() {
  return /** @type {proto.bosdyn.api.ArmVelocityCommand.Request.CommandCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.ArmVelocityCommand.Request.oneofGroups_[0]));
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
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmVelocityCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmVelocityCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmVelocityCommand.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    cylindricalVelocity: (f = msg.getCylindricalVelocity()) && proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.toObject(includeInstance, f),
    cartesianVelocity: (f = msg.getCartesianVelocity()) && proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.toObject(includeInstance, f),
    angularVelocityOfHandRtOdomInHand: (f = msg.getAngularVelocityOfHandRtOdomInHand()) && bosdyn_api_geometry_pb.Vec3.toObject(includeInstance, f),
    maximumAcceleration: (f = msg.getMaximumAcceleration()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.ArmVelocityCommand.Request}
 */
proto.bosdyn.api.ArmVelocityCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmVelocityCommand.Request;
  return proto.bosdyn.api.ArmVelocityCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmVelocityCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmVelocityCommand.Request}
 */
proto.bosdyn.api.ArmVelocityCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity;
      reader.readMessage(value,proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.deserializeBinaryFromReader);
      msg.setCylindricalVelocity(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity;
      reader.readMessage(value,proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.deserializeBinaryFromReader);
      msg.setCartesianVelocity(value);
      break;
    case 6:
      var value = new bosdyn_api_geometry_pb.Vec3;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3.deserializeBinaryFromReader);
      msg.setAngularVelocityOfHandRtOdomInHand(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMaximumAcceleration(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
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
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmVelocityCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmVelocityCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmVelocityCommand.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCylindricalVelocity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity.serializeBinaryToWriter
    );
  }
  f = message.getCartesianVelocity();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity.serializeBinaryToWriter
    );
  }
  f = message.getAngularVelocityOfHandRtOdomInHand();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      bosdyn_api_geometry_pb.Vec3.serializeBinaryToWriter
    );
  }
  f = message.getMaximumAcceleration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional CylindricalVelocity cylindrical_velocity = 1;
 * @return {?proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity}
 */
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.getCylindricalVelocity = function() {
  return /** @type{?proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity, 1));
};


/**
 * @param {?proto.bosdyn.api.ArmVelocityCommand.CylindricalVelocity|undefined} value
 * @return {!proto.bosdyn.api.ArmVelocityCommand.Request} returns this
*/
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.setCylindricalVelocity = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bosdyn.api.ArmVelocityCommand.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmVelocityCommand.Request} returns this
 */
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.clearCylindricalVelocity = function() {
  return this.setCylindricalVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.hasCylindricalVelocity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CartesianVelocity cartesian_velocity = 2;
 * @return {?proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity}
 */
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.getCartesianVelocity = function() {
  return /** @type{?proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity, 2));
};


/**
 * @param {?proto.bosdyn.api.ArmVelocityCommand.CartesianVelocity|undefined} value
 * @return {!proto.bosdyn.api.ArmVelocityCommand.Request} returns this
*/
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.setCartesianVelocity = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bosdyn.api.ArmVelocityCommand.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmVelocityCommand.Request} returns this
 */
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.clearCartesianVelocity = function() {
  return this.setCartesianVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.hasCartesianVelocity = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Vec3 angular_velocity_of_hand_rt_odom_in_hand = 6;
 * @return {?proto.bosdyn.api.Vec3}
 */
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.getAngularVelocityOfHandRtOdomInHand = function() {
  return /** @type{?proto.bosdyn.api.Vec3} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3, 6));
};


/**
 * @param {?proto.bosdyn.api.Vec3|undefined} value
 * @return {!proto.bosdyn.api.ArmVelocityCommand.Request} returns this
*/
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.setAngularVelocityOfHandRtOdomInHand = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmVelocityCommand.Request} returns this
 */
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.clearAngularVelocityOfHandRtOdomInHand = function() {
  return this.setAngularVelocityOfHandRtOdomInHand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.hasAngularVelocityOfHandRtOdomInHand = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.DoubleValue maximum_acceleration = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.getMaximumAcceleration = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmVelocityCommand.Request} returns this
*/
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.setMaximumAcceleration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmVelocityCommand.Request} returns this
 */
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.clearMaximumAcceleration = function() {
  return this.setMaximumAcceleration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.hasMaximumAcceleration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.ArmVelocityCommand.Request} returns this
*/
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmVelocityCommand.Request} returns this
 */
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmVelocityCommand.Request.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.bosdyn.api.ArmVelocityCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmVelocityCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmVelocityCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmVelocityCommand.Feedback.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.bosdyn.api.ArmVelocityCommand.Feedback}
 */
proto.bosdyn.api.ArmVelocityCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmVelocityCommand.Feedback;
  return proto.bosdyn.api.ArmVelocityCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmVelocityCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmVelocityCommand.Feedback}
 */
proto.bosdyn.api.ArmVelocityCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.bosdyn.api.ArmVelocityCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmVelocityCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmVelocityCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmVelocityCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.bosdyn.api.NamedArmPositionsCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.NamedArmPositionsCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.NamedArmPositionsCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.NamedArmPositionsCommand.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.bosdyn.api.NamedArmPositionsCommand}
 */
proto.bosdyn.api.NamedArmPositionsCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.NamedArmPositionsCommand;
  return proto.bosdyn.api.NamedArmPositionsCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.NamedArmPositionsCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.NamedArmPositionsCommand}
 */
proto.bosdyn.api.NamedArmPositionsCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.bosdyn.api.NamedArmPositionsCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.NamedArmPositionsCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.NamedArmPositionsCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.NamedArmPositionsCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.bosdyn.api.NamedArmPositionsCommand.Positions = {
  POSITIONS_UNKNOWN: 0,
  POSITIONS_CARRY: 1,
  POSITIONS_READY: 2,
  POSITIONS_STOW: 3
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
proto.bosdyn.api.NamedArmPositionsCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.NamedArmPositionsCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.NamedArmPositionsCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.NamedArmPositionsCommand.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.bosdyn.api.NamedArmPositionsCommand.Request}
 */
proto.bosdyn.api.NamedArmPositionsCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.NamedArmPositionsCommand.Request;
  return proto.bosdyn.api.NamedArmPositionsCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.NamedArmPositionsCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.NamedArmPositionsCommand.Request}
 */
proto.bosdyn.api.NamedArmPositionsCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.NamedArmPositionsCommand.Positions} */ (reader.readEnum());
      msg.setPosition(value);
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
proto.bosdyn.api.NamedArmPositionsCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.NamedArmPositionsCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.NamedArmPositionsCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.NamedArmPositionsCommand.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional Positions position = 1;
 * @return {!proto.bosdyn.api.NamedArmPositionsCommand.Positions}
 */
proto.bosdyn.api.NamedArmPositionsCommand.Request.prototype.getPosition = function() {
  return /** @type {!proto.bosdyn.api.NamedArmPositionsCommand.Positions} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.NamedArmPositionsCommand.Positions} value
 * @return {!proto.bosdyn.api.NamedArmPositionsCommand.Request} returns this
 */
proto.bosdyn.api.NamedArmPositionsCommand.Request.prototype.setPosition = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.bosdyn.api.NamedArmPositionsCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.NamedArmPositionsCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.NamedArmPositionsCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.NamedArmPositionsCommand.Feedback.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.bosdyn.api.NamedArmPositionsCommand.Feedback}
 */
proto.bosdyn.api.NamedArmPositionsCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.NamedArmPositionsCommand.Feedback;
  return proto.bosdyn.api.NamedArmPositionsCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.NamedArmPositionsCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.NamedArmPositionsCommand.Feedback}
 */
proto.bosdyn.api.NamedArmPositionsCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.NamedArmPositionsCommand.Feedback.Status} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.bosdyn.api.NamedArmPositionsCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.NamedArmPositionsCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.NamedArmPositionsCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.NamedArmPositionsCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.NamedArmPositionsCommand.Feedback.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_COMPLETE: 1,
  STATUS_IN_PROGRESS: 2,
  STATUS_STALLED_HOLDING_ITEM: 3
};

/**
 * optional Status status = 1;
 * @return {!proto.bosdyn.api.NamedArmPositionsCommand.Feedback.Status}
 */
proto.bosdyn.api.NamedArmPositionsCommand.Feedback.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.NamedArmPositionsCommand.Feedback.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.NamedArmPositionsCommand.Feedback.Status} value
 * @return {!proto.bosdyn.api.NamedArmPositionsCommand.Feedback} returns this
 */
proto.bosdyn.api.NamedArmPositionsCommand.Feedback.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.bosdyn.api.ArmCartesianCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmCartesianCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmCartesianCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmCartesianCommand.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.bosdyn.api.ArmCartesianCommand}
 */
proto.bosdyn.api.ArmCartesianCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmCartesianCommand;
  return proto.bosdyn.api.ArmCartesianCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmCartesianCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmCartesianCommand}
 */
proto.bosdyn.api.ArmCartesianCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.bosdyn.api.ArmCartesianCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmCartesianCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmCartesianCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmCartesianCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.ArmCartesianCommand.Request.oneofGroups_ = [[17,18]];

/**
 * @enum {number}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.JointConfigurationCase = {
  JOINT_CONFIGURATION_NOT_SET: 0,
  FORCE_REMAIN_NEAR_CURRENT_JOINT_CONFIGURATION: 17,
  PREFERRED_JOINT_CONFIGURATION: 18
};

/**
 * @return {proto.bosdyn.api.ArmCartesianCommand.Request.JointConfigurationCase}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getJointConfigurationCase = function() {
  return /** @type {proto.bosdyn.api.ArmCartesianCommand.Request.JointConfigurationCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.ArmCartesianCommand.Request.oneofGroups_[0]));
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
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmCartesianCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmCartesianCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmCartesianCommand.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    rootFrameName: jspb.Message.getFieldWithDefault(msg, 19, ""),
    wristTformTool: (f = msg.getWristTformTool()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    rootTformTask: (f = msg.getRootTformTask()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    poseTrajectoryInTask: (f = msg.getPoseTrajectoryInTask()) && bosdyn_api_trajectory_pb.SE3Trajectory.toObject(includeInstance, f),
    maximumAcceleration: (f = msg.getMaximumAcceleration()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    maxLinearVelocity: (f = msg.getMaxLinearVelocity()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    maxAngularVelocity: (f = msg.getMaxAngularVelocity()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    maxPosTrackingError: (f = msg.getMaxPosTrackingError()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    maxRotTrackingError: (f = msg.getMaxRotTrackingError()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    forceRemainNearCurrentJointConfiguration: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    preferredJointConfiguration: (f = msg.getPreferredJointConfiguration()) && proto.bosdyn.api.ArmJointPosition.toObject(includeInstance, f),
    xAxis: jspb.Message.getFieldWithDefault(msg, 8, 0),
    yAxis: jspb.Message.getFieldWithDefault(msg, 9, 0),
    zAxis: jspb.Message.getFieldWithDefault(msg, 10, 0),
    rxAxis: jspb.Message.getFieldWithDefault(msg, 11, 0),
    ryAxis: jspb.Message.getFieldWithDefault(msg, 12, 0),
    rzAxis: jspb.Message.getFieldWithDefault(msg, 13, 0),
    wrenchTrajectoryInTask: (f = msg.getWrenchTrajectoryInTask()) && bosdyn_api_trajectory_pb.WrenchTrajectory.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmCartesianCommand.Request;
  return proto.bosdyn.api.ArmCartesianCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmCartesianCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setRootFrameName(value);
      break;
    case 6:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setWristTformTool(value);
      break;
    case 20:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setRootTformTask(value);
      break;
    case 2:
      var value = new bosdyn_api_trajectory_pb.SE3Trajectory;
      reader.readMessage(value,bosdyn_api_trajectory_pb.SE3Trajectory.deserializeBinaryFromReader);
      msg.setPoseTrajectoryInTask(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMaximumAcceleration(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMaxLinearVelocity(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMaxAngularVelocity(value);
      break;
    case 15:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMaxPosTrackingError(value);
      break;
    case 16:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMaxRotTrackingError(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForceRemainNearCurrentJointConfiguration(value);
      break;
    case 18:
      var value = new proto.bosdyn.api.ArmJointPosition;
      reader.readMessage(value,proto.bosdyn.api.ArmJointPosition.deserializeBinaryFromReader);
      msg.setPreferredJointConfiguration(value);
      break;
    case 8:
      var value = /** @type {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} */ (reader.readEnum());
      msg.setXAxis(value);
      break;
    case 9:
      var value = /** @type {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} */ (reader.readEnum());
      msg.setYAxis(value);
      break;
    case 10:
      var value = /** @type {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} */ (reader.readEnum());
      msg.setZAxis(value);
      break;
    case 11:
      var value = /** @type {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} */ (reader.readEnum());
      msg.setRxAxis(value);
      break;
    case 12:
      var value = /** @type {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} */ (reader.readEnum());
      msg.setRyAxis(value);
      break;
    case 13:
      var value = /** @type {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} */ (reader.readEnum());
      msg.setRzAxis(value);
      break;
    case 14:
      var value = new bosdyn_api_trajectory_pb.WrenchTrajectory;
      reader.readMessage(value,bosdyn_api_trajectory_pb.WrenchTrajectory.deserializeBinaryFromReader);
      msg.setWrenchTrajectoryInTask(value);
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
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmCartesianCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmCartesianCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmCartesianCommand.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRootFrameName();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getWristTformTool();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
  f = message.getRootTformTask();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
  f = message.getPoseTrajectoryInTask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_trajectory_pb.SE3Trajectory.serializeBinaryToWriter
    );
  }
  f = message.getMaximumAcceleration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getMaxLinearVelocity();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getMaxAngularVelocity();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getMaxPosTrackingError();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getMaxRotTrackingError();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getPreferredJointConfiguration();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.bosdyn.api.ArmJointPosition.serializeBinaryToWriter
    );
  }
  f = message.getXAxis();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getYAxis();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getZAxis();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getRxAxis();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getRyAxis();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getRzAxis();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getWrenchTrajectoryInTask();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      bosdyn_api_trajectory_pb.WrenchTrajectory.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode = {
  AXIS_MODE_POSITION: 0,
  AXIS_MODE_FORCE: 1
};

/**
 * optional string root_frame_name = 19;
 * @return {string}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getRootFrameName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setRootFrameName = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional SE3Pose wrist_tform_tool = 6;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getWristTformTool = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 6));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
*/
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setWristTformTool = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.clearWristTformTool = function() {
  return this.setWristTformTool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.hasWristTformTool = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SE3Pose root_tform_task = 20;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getRootTformTask = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 20));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
*/
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setRootTformTask = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.clearRootTformTask = function() {
  return this.setRootTformTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.hasRootTformTask = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional SE3Trajectory pose_trajectory_in_task = 2;
 * @return {?proto.bosdyn.api.SE3Trajectory}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getPoseTrajectoryInTask = function() {
  return /** @type{?proto.bosdyn.api.SE3Trajectory} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_trajectory_pb.SE3Trajectory, 2));
};


/**
 * @param {?proto.bosdyn.api.SE3Trajectory|undefined} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
*/
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setPoseTrajectoryInTask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.clearPoseTrajectoryInTask = function() {
  return this.setPoseTrajectoryInTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.hasPoseTrajectoryInTask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue maximum_acceleration = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getMaximumAcceleration = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
*/
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setMaximumAcceleration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.clearMaximumAcceleration = function() {
  return this.setMaximumAcceleration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.hasMaximumAcceleration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue max_linear_velocity = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getMaxLinearVelocity = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
*/
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setMaxLinearVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.clearMaxLinearVelocity = function() {
  return this.setMaxLinearVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.hasMaxLinearVelocity = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue max_angular_velocity = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getMaxAngularVelocity = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
*/
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setMaxAngularVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.clearMaxAngularVelocity = function() {
  return this.setMaxAngularVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.hasMaxAngularVelocity = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue max_pos_tracking_error = 15;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getMaxPosTrackingError = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 15));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
*/
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setMaxPosTrackingError = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.clearMaxPosTrackingError = function() {
  return this.setMaxPosTrackingError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.hasMaxPosTrackingError = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.DoubleValue max_rot_tracking_error = 16;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getMaxRotTrackingError = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 16));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
*/
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setMaxRotTrackingError = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.clearMaxRotTrackingError = function() {
  return this.setMaxRotTrackingError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.hasMaxRotTrackingError = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional bool force_remain_near_current_joint_configuration = 17;
 * @return {boolean}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getForceRemainNearCurrentJointConfiguration = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setForceRemainNearCurrentJointConfiguration = function(value) {
  return jspb.Message.setOneofField(this, 17, proto.bosdyn.api.ArmCartesianCommand.Request.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.clearForceRemainNearCurrentJointConfiguration = function() {
  return jspb.Message.setOneofField(this, 17, proto.bosdyn.api.ArmCartesianCommand.Request.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.hasForceRemainNearCurrentJointConfiguration = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ArmJointPosition preferred_joint_configuration = 18;
 * @return {?proto.bosdyn.api.ArmJointPosition}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getPreferredJointConfiguration = function() {
  return /** @type{?proto.bosdyn.api.ArmJointPosition} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ArmJointPosition, 18));
};


/**
 * @param {?proto.bosdyn.api.ArmJointPosition|undefined} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
*/
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setPreferredJointConfiguration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.bosdyn.api.ArmCartesianCommand.Request.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.clearPreferredJointConfiguration = function() {
  return this.setPreferredJointConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.hasPreferredJointConfiguration = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional AxisMode x_axis = 8;
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getXAxis = function() {
  return /** @type {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setXAxis = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional AxisMode y_axis = 9;
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getYAxis = function() {
  return /** @type {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setYAxis = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional AxisMode z_axis = 10;
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getZAxis = function() {
  return /** @type {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setZAxis = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional AxisMode rx_axis = 11;
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getRxAxis = function() {
  return /** @type {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setRxAxis = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional AxisMode ry_axis = 12;
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getRyAxis = function() {
  return /** @type {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setRyAxis = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional AxisMode rz_axis = 13;
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getRzAxis = function() {
  return /** @type {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.bosdyn.api.ArmCartesianCommand.Request.AxisMode} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setRzAxis = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional WrenchTrajectory wrench_trajectory_in_task = 14;
 * @return {?proto.bosdyn.api.WrenchTrajectory}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.getWrenchTrajectoryInTask = function() {
  return /** @type{?proto.bosdyn.api.WrenchTrajectory} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_trajectory_pb.WrenchTrajectory, 14));
};


/**
 * @param {?proto.bosdyn.api.WrenchTrajectory|undefined} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
*/
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.setWrenchTrajectoryInTask = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Request} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.clearWrenchTrajectoryInTask = function() {
  return this.setWrenchTrajectoryInTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmCartesianCommand.Request.prototype.hasWrenchTrajectoryInTask = function() {
  return jspb.Message.getField(this, 14) != null;
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
proto.bosdyn.api.ArmCartesianCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmCartesianCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmCartesianCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmCartesianCommand.Feedback.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    measuredPosTrackingError: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    measuredRotTrackingError: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    measuredPosDistanceToGoal: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    measuredRotDistanceToGoal: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
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
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Feedback}
 */
proto.bosdyn.api.ArmCartesianCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmCartesianCommand.Feedback;
  return proto.bosdyn.api.ArmCartesianCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmCartesianCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Feedback}
 */
proto.bosdyn.api.ArmCartesianCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.ArmCartesianCommand.Feedback.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMeasuredPosTrackingError(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMeasuredRotTrackingError(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMeasuredPosDistanceToGoal(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMeasuredRotDistanceToGoal(value);
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
proto.bosdyn.api.ArmCartesianCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmCartesianCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmCartesianCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmCartesianCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMeasuredPosTrackingError();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getMeasuredRotTrackingError();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getMeasuredPosDistanceToGoal();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getMeasuredRotDistanceToGoal();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.ArmCartesianCommand.Feedback.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_TRAJECTORY_COMPLETE: 1,
  STATUS_IN_PROGRESS: 2,
  STATUS_TRAJECTORY_CANCELLED: 3,
  STATUS_TRAJECTORY_STALLED: 4
};

/**
 * optional Status status = 1;
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Feedback.Status}
 */
proto.bosdyn.api.ArmCartesianCommand.Feedback.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.ArmCartesianCommand.Feedback.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.ArmCartesianCommand.Feedback.Status} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Feedback.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double measured_pos_tracking_error = 2;
 * @return {number}
 */
proto.bosdyn.api.ArmCartesianCommand.Feedback.prototype.getMeasuredPosTrackingError = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Feedback.prototype.setMeasuredPosTrackingError = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double measured_rot_tracking_error = 3;
 * @return {number}
 */
proto.bosdyn.api.ArmCartesianCommand.Feedback.prototype.getMeasuredRotTrackingError = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Feedback.prototype.setMeasuredRotTrackingError = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double measured_pos_distance_to_goal = 4;
 * @return {number}
 */
proto.bosdyn.api.ArmCartesianCommand.Feedback.prototype.getMeasuredPosDistanceToGoal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Feedback.prototype.setMeasuredPosDistanceToGoal = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double measured_rot_distance_to_goal = 5;
 * @return {number}
 */
proto.bosdyn.api.ArmCartesianCommand.Feedback.prototype.getMeasuredRotDistanceToGoal = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.ArmCartesianCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmCartesianCommand.Feedback.prototype.setMeasuredRotDistanceToGoal = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
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
proto.bosdyn.api.ArmJointMoveCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmJointMoveCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmJointMoveCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmJointMoveCommand.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.bosdyn.api.ArmJointMoveCommand}
 */
proto.bosdyn.api.ArmJointMoveCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmJointMoveCommand;
  return proto.bosdyn.api.ArmJointMoveCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmJointMoveCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmJointMoveCommand}
 */
proto.bosdyn.api.ArmJointMoveCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.bosdyn.api.ArmJointMoveCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmJointMoveCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmJointMoveCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmJointMoveCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.bosdyn.api.ArmJointMoveCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmJointMoveCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmJointMoveCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmJointMoveCommand.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    trajectory: (f = msg.getTrajectory()) && proto.bosdyn.api.ArmJointTrajectory.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.ArmJointMoveCommand.Request}
 */
proto.bosdyn.api.ArmJointMoveCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmJointMoveCommand.Request;
  return proto.bosdyn.api.ArmJointMoveCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmJointMoveCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmJointMoveCommand.Request}
 */
proto.bosdyn.api.ArmJointMoveCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.ArmJointTrajectory;
      reader.readMessage(value,proto.bosdyn.api.ArmJointTrajectory.deserializeBinaryFromReader);
      msg.setTrajectory(value);
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
proto.bosdyn.api.ArmJointMoveCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmJointMoveCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmJointMoveCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmJointMoveCommand.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrajectory();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.ArmJointTrajectory.serializeBinaryToWriter
    );
  }
};


/**
 * optional ArmJointTrajectory trajectory = 1;
 * @return {?proto.bosdyn.api.ArmJointTrajectory}
 */
proto.bosdyn.api.ArmJointMoveCommand.Request.prototype.getTrajectory = function() {
  return /** @type{?proto.bosdyn.api.ArmJointTrajectory} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ArmJointTrajectory, 1));
};


/**
 * @param {?proto.bosdyn.api.ArmJointTrajectory|undefined} value
 * @return {!proto.bosdyn.api.ArmJointMoveCommand.Request} returns this
*/
proto.bosdyn.api.ArmJointMoveCommand.Request.prototype.setTrajectory = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointMoveCommand.Request} returns this
 */
proto.bosdyn.api.ArmJointMoveCommand.Request.prototype.clearTrajectory = function() {
  return this.setTrajectory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointMoveCommand.Request.prototype.hasTrajectory = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.ArmJointMoveCommand.Feedback.repeatedFields_ = [3];



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
proto.bosdyn.api.ArmJointMoveCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmJointMoveCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmJointMoveCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmJointMoveCommand.Feedback.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    plannerStatus: jspb.Message.getFieldWithDefault(msg, 2, 0),
    plannedPointsList: jspb.Message.toObjectList(msg.getPlannedPointsList(),
    proto.bosdyn.api.ArmJointTrajectoryPoint.toObject, includeInstance),
    timeToGoal: (f = msg.getTimeToGoal()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.ArmJointMoveCommand.Feedback}
 */
proto.bosdyn.api.ArmJointMoveCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmJointMoveCommand.Feedback;
  return proto.bosdyn.api.ArmJointMoveCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmJointMoveCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmJointMoveCommand.Feedback}
 */
proto.bosdyn.api.ArmJointMoveCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.ArmJointMoveCommand.Feedback.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {!proto.bosdyn.api.ArmJointMoveCommand.Feedback.PlannerStatus} */ (reader.readEnum());
      msg.setPlannerStatus(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.ArmJointTrajectoryPoint;
      reader.readMessage(value,proto.bosdyn.api.ArmJointTrajectoryPoint.deserializeBinaryFromReader);
      msg.addPlannedPoints(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeToGoal(value);
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
proto.bosdyn.api.ArmJointMoveCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmJointMoveCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmJointMoveCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmJointMoveCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPlannerStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPlannedPointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bosdyn.api.ArmJointTrajectoryPoint.serializeBinaryToWriter
    );
  }
  f = message.getTimeToGoal();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.ArmJointMoveCommand.Feedback.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_COMPLETE: 1,
  STATUS_IN_PROGRESS: 2,
  STATUS_STALLED: 3
};

/**
 * @enum {number}
 */
proto.bosdyn.api.ArmJointMoveCommand.Feedback.PlannerStatus = {
  PLANNER_STATUS_UNKNOWN: 0,
  PLANNER_STATUS_SUCCESS: 1,
  PLANNER_STATUS_MODIFIED: 2,
  PLANNER_STATUS_FAILED: 3
};

/**
 * optional Status status = 1;
 * @return {!proto.bosdyn.api.ArmJointMoveCommand.Feedback.Status}
 */
proto.bosdyn.api.ArmJointMoveCommand.Feedback.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.ArmJointMoveCommand.Feedback.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.ArmJointMoveCommand.Feedback.Status} value
 * @return {!proto.bosdyn.api.ArmJointMoveCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmJointMoveCommand.Feedback.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional PlannerStatus planner_status = 2;
 * @return {!proto.bosdyn.api.ArmJointMoveCommand.Feedback.PlannerStatus}
 */
proto.bosdyn.api.ArmJointMoveCommand.Feedback.prototype.getPlannerStatus = function() {
  return /** @type {!proto.bosdyn.api.ArmJointMoveCommand.Feedback.PlannerStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.ArmJointMoveCommand.Feedback.PlannerStatus} value
 * @return {!proto.bosdyn.api.ArmJointMoveCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmJointMoveCommand.Feedback.prototype.setPlannerStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated ArmJointTrajectoryPoint planned_points = 3;
 * @return {!Array<!proto.bosdyn.api.ArmJointTrajectoryPoint>}
 */
proto.bosdyn.api.ArmJointMoveCommand.Feedback.prototype.getPlannedPointsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.ArmJointTrajectoryPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.ArmJointTrajectoryPoint, 3));
};


/**
 * @param {!Array<!proto.bosdyn.api.ArmJointTrajectoryPoint>} value
 * @return {!proto.bosdyn.api.ArmJointMoveCommand.Feedback} returns this
*/
proto.bosdyn.api.ArmJointMoveCommand.Feedback.prototype.setPlannedPointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bosdyn.api.ArmJointTrajectoryPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.ArmJointTrajectoryPoint}
 */
proto.bosdyn.api.ArmJointMoveCommand.Feedback.prototype.addPlannedPoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bosdyn.api.ArmJointTrajectoryPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.ArmJointMoveCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmJointMoveCommand.Feedback.prototype.clearPlannedPointsList = function() {
  return this.setPlannedPointsList([]);
};


/**
 * optional google.protobuf.Duration time_to_goal = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.ArmJointMoveCommand.Feedback.prototype.getTimeToGoal = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.ArmJointMoveCommand.Feedback} returns this
*/
proto.bosdyn.api.ArmJointMoveCommand.Feedback.prototype.setTimeToGoal = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointMoveCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmJointMoveCommand.Feedback.prototype.clearTimeToGoal = function() {
  return this.setTimeToGoal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointMoveCommand.Feedback.prototype.hasTimeToGoal = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.bosdyn.api.ArmJointPosition.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmJointPosition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmJointPosition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmJointPosition.toObject = function(includeInstance, msg) {
  var f, obj = {
    sh0: (f = msg.getSh0()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    sh1: (f = msg.getSh1()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    el0: (f = msg.getEl0()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    el1: (f = msg.getEl1()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    wr0: (f = msg.getWr0()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    wr1: (f = msg.getWr1()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.ArmJointPosition}
 */
proto.bosdyn.api.ArmJointPosition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmJointPosition;
  return proto.bosdyn.api.ArmJointPosition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmJointPosition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmJointPosition}
 */
proto.bosdyn.api.ArmJointPosition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSh0(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSh1(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setEl0(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setEl1(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setWr0(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setWr1(value);
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
proto.bosdyn.api.ArmJointPosition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmJointPosition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmJointPosition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmJointPosition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSh0();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getSh1();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getEl0();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getEl1();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getWr0();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getWr1();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue sh0 = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmJointPosition.prototype.getSh0 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmJointPosition} returns this
*/
proto.bosdyn.api.ArmJointPosition.prototype.setSh0 = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointPosition} returns this
 */
proto.bosdyn.api.ArmJointPosition.prototype.clearSh0 = function() {
  return this.setSh0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointPosition.prototype.hasSh0 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue sh1 = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmJointPosition.prototype.getSh1 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmJointPosition} returns this
*/
proto.bosdyn.api.ArmJointPosition.prototype.setSh1 = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointPosition} returns this
 */
proto.bosdyn.api.ArmJointPosition.prototype.clearSh1 = function() {
  return this.setSh1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointPosition.prototype.hasSh1 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue el0 = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmJointPosition.prototype.getEl0 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmJointPosition} returns this
*/
proto.bosdyn.api.ArmJointPosition.prototype.setEl0 = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointPosition} returns this
 */
proto.bosdyn.api.ArmJointPosition.prototype.clearEl0 = function() {
  return this.setEl0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointPosition.prototype.hasEl0 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue el1 = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmJointPosition.prototype.getEl1 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmJointPosition} returns this
*/
proto.bosdyn.api.ArmJointPosition.prototype.setEl1 = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointPosition} returns this
 */
proto.bosdyn.api.ArmJointPosition.prototype.clearEl1 = function() {
  return this.setEl1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointPosition.prototype.hasEl1 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue wr0 = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmJointPosition.prototype.getWr0 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmJointPosition} returns this
*/
proto.bosdyn.api.ArmJointPosition.prototype.setWr0 = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointPosition} returns this
 */
proto.bosdyn.api.ArmJointPosition.prototype.clearWr0 = function() {
  return this.setWr0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointPosition.prototype.hasWr0 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue wr1 = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmJointPosition.prototype.getWr1 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmJointPosition} returns this
*/
proto.bosdyn.api.ArmJointPosition.prototype.setWr1 = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointPosition} returns this
 */
proto.bosdyn.api.ArmJointPosition.prototype.clearWr1 = function() {
  return this.setWr1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointPosition.prototype.hasWr1 = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.bosdyn.api.ArmJointVelocity.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmJointVelocity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmJointVelocity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmJointVelocity.toObject = function(includeInstance, msg) {
  var f, obj = {
    sh0: (f = msg.getSh0()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    sh1: (f = msg.getSh1()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    el0: (f = msg.getEl0()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    el1: (f = msg.getEl1()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    wr0: (f = msg.getWr0()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    wr1: (f = msg.getWr1()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.ArmJointVelocity}
 */
proto.bosdyn.api.ArmJointVelocity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmJointVelocity;
  return proto.bosdyn.api.ArmJointVelocity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmJointVelocity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmJointVelocity}
 */
proto.bosdyn.api.ArmJointVelocity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSh0(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSh1(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setEl0(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setEl1(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setWr0(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setWr1(value);
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
proto.bosdyn.api.ArmJointVelocity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmJointVelocity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmJointVelocity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmJointVelocity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSh0();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getSh1();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getEl0();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getEl1();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getWr0();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getWr1();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue sh0 = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmJointVelocity.prototype.getSh0 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmJointVelocity} returns this
*/
proto.bosdyn.api.ArmJointVelocity.prototype.setSh0 = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointVelocity} returns this
 */
proto.bosdyn.api.ArmJointVelocity.prototype.clearSh0 = function() {
  return this.setSh0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointVelocity.prototype.hasSh0 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue sh1 = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmJointVelocity.prototype.getSh1 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmJointVelocity} returns this
*/
proto.bosdyn.api.ArmJointVelocity.prototype.setSh1 = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointVelocity} returns this
 */
proto.bosdyn.api.ArmJointVelocity.prototype.clearSh1 = function() {
  return this.setSh1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointVelocity.prototype.hasSh1 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue el0 = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmJointVelocity.prototype.getEl0 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmJointVelocity} returns this
*/
proto.bosdyn.api.ArmJointVelocity.prototype.setEl0 = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointVelocity} returns this
 */
proto.bosdyn.api.ArmJointVelocity.prototype.clearEl0 = function() {
  return this.setEl0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointVelocity.prototype.hasEl0 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue el1 = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmJointVelocity.prototype.getEl1 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmJointVelocity} returns this
*/
proto.bosdyn.api.ArmJointVelocity.prototype.setEl1 = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointVelocity} returns this
 */
proto.bosdyn.api.ArmJointVelocity.prototype.clearEl1 = function() {
  return this.setEl1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointVelocity.prototype.hasEl1 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue wr0 = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmJointVelocity.prototype.getWr0 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmJointVelocity} returns this
*/
proto.bosdyn.api.ArmJointVelocity.prototype.setWr0 = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointVelocity} returns this
 */
proto.bosdyn.api.ArmJointVelocity.prototype.clearWr0 = function() {
  return this.setWr0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointVelocity.prototype.hasWr0 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue wr1 = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmJointVelocity.prototype.getWr1 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmJointVelocity} returns this
*/
proto.bosdyn.api.ArmJointVelocity.prototype.setWr1 = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointVelocity} returns this
 */
proto.bosdyn.api.ArmJointVelocity.prototype.clearWr1 = function() {
  return this.setWr1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointVelocity.prototype.hasWr1 = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.bosdyn.api.ArmJointTrajectoryPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmJointTrajectoryPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmJointTrajectoryPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmJointTrajectoryPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.bosdyn.api.ArmJointPosition.toObject(includeInstance, f),
    velocity: (f = msg.getVelocity()) && proto.bosdyn.api.ArmJointVelocity.toObject(includeInstance, f),
    timeSinceReference: (f = msg.getTimeSinceReference()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.ArmJointTrajectoryPoint}
 */
proto.bosdyn.api.ArmJointTrajectoryPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmJointTrajectoryPoint;
  return proto.bosdyn.api.ArmJointTrajectoryPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmJointTrajectoryPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmJointTrajectoryPoint}
 */
proto.bosdyn.api.ArmJointTrajectoryPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.ArmJointPosition;
      reader.readMessage(value,proto.bosdyn.api.ArmJointPosition.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.ArmJointVelocity;
      reader.readMessage(value,proto.bosdyn.api.ArmJointVelocity.deserializeBinaryFromReader);
      msg.setVelocity(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeSinceReference(value);
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
proto.bosdyn.api.ArmJointTrajectoryPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmJointTrajectoryPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmJointTrajectoryPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmJointTrajectoryPoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.ArmJointPosition.serializeBinaryToWriter
    );
  }
  f = message.getVelocity();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.ArmJointVelocity.serializeBinaryToWriter
    );
  }
  f = message.getTimeSinceReference();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional ArmJointPosition position = 1;
 * @return {?proto.bosdyn.api.ArmJointPosition}
 */
proto.bosdyn.api.ArmJointTrajectoryPoint.prototype.getPosition = function() {
  return /** @type{?proto.bosdyn.api.ArmJointPosition} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ArmJointPosition, 1));
};


/**
 * @param {?proto.bosdyn.api.ArmJointPosition|undefined} value
 * @return {!proto.bosdyn.api.ArmJointTrajectoryPoint} returns this
*/
proto.bosdyn.api.ArmJointTrajectoryPoint.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointTrajectoryPoint} returns this
 */
proto.bosdyn.api.ArmJointTrajectoryPoint.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointTrajectoryPoint.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ArmJointVelocity velocity = 2;
 * @return {?proto.bosdyn.api.ArmJointVelocity}
 */
proto.bosdyn.api.ArmJointTrajectoryPoint.prototype.getVelocity = function() {
  return /** @type{?proto.bosdyn.api.ArmJointVelocity} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ArmJointVelocity, 2));
};


/**
 * @param {?proto.bosdyn.api.ArmJointVelocity|undefined} value
 * @return {!proto.bosdyn.api.ArmJointTrajectoryPoint} returns this
*/
proto.bosdyn.api.ArmJointTrajectoryPoint.prototype.setVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointTrajectoryPoint} returns this
 */
proto.bosdyn.api.ArmJointTrajectoryPoint.prototype.clearVelocity = function() {
  return this.setVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointTrajectoryPoint.prototype.hasVelocity = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration time_since_reference = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.ArmJointTrajectoryPoint.prototype.getTimeSinceReference = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.ArmJointTrajectoryPoint} returns this
*/
proto.bosdyn.api.ArmJointTrajectoryPoint.prototype.setTimeSinceReference = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointTrajectoryPoint} returns this
 */
proto.bosdyn.api.ArmJointTrajectoryPoint.prototype.clearTimeSinceReference = function() {
  return this.setTimeSinceReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointTrajectoryPoint.prototype.hasTimeSinceReference = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.ArmJointTrajectory.repeatedFields_ = [1];



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
proto.bosdyn.api.ArmJointTrajectory.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmJointTrajectory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmJointTrajectory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmJointTrajectory.toObject = function(includeInstance, msg) {
  var f, obj = {
    pointsList: jspb.Message.toObjectList(msg.getPointsList(),
    proto.bosdyn.api.ArmJointTrajectoryPoint.toObject, includeInstance),
    referenceTime: (f = msg.getReferenceTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    maximumVelocity: (f = msg.getMaximumVelocity()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    maximumAcceleration: (f = msg.getMaximumAcceleration()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.ArmJointTrajectory}
 */
proto.bosdyn.api.ArmJointTrajectory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmJointTrajectory;
  return proto.bosdyn.api.ArmJointTrajectory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmJointTrajectory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmJointTrajectory}
 */
proto.bosdyn.api.ArmJointTrajectory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.ArmJointTrajectoryPoint;
      reader.readMessage(value,proto.bosdyn.api.ArmJointTrajectoryPoint.deserializeBinaryFromReader);
      msg.addPoints(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReferenceTime(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMaximumVelocity(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMaximumAcceleration(value);
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
proto.bosdyn.api.ArmJointTrajectory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmJointTrajectory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmJointTrajectory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmJointTrajectory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bosdyn.api.ArmJointTrajectoryPoint.serializeBinaryToWriter
    );
  }
  f = message.getReferenceTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMaximumVelocity();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getMaximumAcceleration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ArmJointTrajectoryPoint points = 1;
 * @return {!Array<!proto.bosdyn.api.ArmJointTrajectoryPoint>}
 */
proto.bosdyn.api.ArmJointTrajectory.prototype.getPointsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.ArmJointTrajectoryPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.ArmJointTrajectoryPoint, 1));
};


/**
 * @param {!Array<!proto.bosdyn.api.ArmJointTrajectoryPoint>} value
 * @return {!proto.bosdyn.api.ArmJointTrajectory} returns this
*/
proto.bosdyn.api.ArmJointTrajectory.prototype.setPointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bosdyn.api.ArmJointTrajectoryPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.ArmJointTrajectoryPoint}
 */
proto.bosdyn.api.ArmJointTrajectory.prototype.addPoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bosdyn.api.ArmJointTrajectoryPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.ArmJointTrajectory} returns this
 */
proto.bosdyn.api.ArmJointTrajectory.prototype.clearPointsList = function() {
  return this.setPointsList([]);
};


/**
 * optional google.protobuf.Timestamp reference_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.ArmJointTrajectory.prototype.getReferenceTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.ArmJointTrajectory} returns this
*/
proto.bosdyn.api.ArmJointTrajectory.prototype.setReferenceTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointTrajectory} returns this
 */
proto.bosdyn.api.ArmJointTrajectory.prototype.clearReferenceTime = function() {
  return this.setReferenceTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointTrajectory.prototype.hasReferenceTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue maximum_velocity = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmJointTrajectory.prototype.getMaximumVelocity = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmJointTrajectory} returns this
*/
proto.bosdyn.api.ArmJointTrajectory.prototype.setMaximumVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointTrajectory} returns this
 */
proto.bosdyn.api.ArmJointTrajectory.prototype.clearMaximumVelocity = function() {
  return this.setMaximumVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointTrajectory.prototype.hasMaximumVelocity = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue maximum_acceleration = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmJointTrajectory.prototype.getMaximumAcceleration = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmJointTrajectory} returns this
*/
proto.bosdyn.api.ArmJointTrajectory.prototype.setMaximumAcceleration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmJointTrajectory} returns this
 */
proto.bosdyn.api.ArmJointTrajectory.prototype.clearMaximumAcceleration = function() {
  return this.setMaximumAcceleration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmJointTrajectory.prototype.hasMaximumAcceleration = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.bosdyn.api.GazeCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.GazeCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.GazeCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.GazeCommand.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.bosdyn.api.GazeCommand}
 */
proto.bosdyn.api.GazeCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.GazeCommand;
  return proto.bosdyn.api.GazeCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.GazeCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.GazeCommand}
 */
proto.bosdyn.api.GazeCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.bosdyn.api.GazeCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.GazeCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.GazeCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.GazeCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.bosdyn.api.GazeCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.GazeCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.GazeCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.GazeCommand.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetTrajectoryInFrame1: (f = msg.getTargetTrajectoryInFrame1()) && bosdyn_api_trajectory_pb.Vec3Trajectory.toObject(includeInstance, f),
    frame1Name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    toolTrajectoryInFrame2: (f = msg.getToolTrajectoryInFrame2()) && bosdyn_api_trajectory_pb.SE3Trajectory.toObject(includeInstance, f),
    frame2Name: jspb.Message.getFieldWithDefault(msg, 11, ""),
    wristTformTool: (f = msg.getWristTformTool()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    targetTrajectoryInitialVelocity: (f = msg.getTargetTrajectoryInitialVelocity()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    maximumAcceleration: (f = msg.getMaximumAcceleration()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    maxLinearVelocity: (f = msg.getMaxLinearVelocity()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    maxAngularVelocity: (f = msg.getMaxAngularVelocity()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.GazeCommand.Request}
 */
proto.bosdyn.api.GazeCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.GazeCommand.Request;
  return proto.bosdyn.api.GazeCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.GazeCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.GazeCommand.Request}
 */
proto.bosdyn.api.GazeCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_trajectory_pb.Vec3Trajectory;
      reader.readMessage(value,bosdyn_api_trajectory_pb.Vec3Trajectory.deserializeBinaryFromReader);
      msg.setTargetTrajectoryInFrame1(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrame1Name(value);
      break;
    case 10:
      var value = new bosdyn_api_trajectory_pb.SE3Trajectory;
      reader.readMessage(value,bosdyn_api_trajectory_pb.SE3Trajectory.deserializeBinaryFromReader);
      msg.setToolTrajectoryInFrame2(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrame2Name(value);
      break;
    case 9:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setWristTformTool(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setTargetTrajectoryInitialVelocity(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMaximumAcceleration(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMaxLinearVelocity(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMaxAngularVelocity(value);
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
proto.bosdyn.api.GazeCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.GazeCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.GazeCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.GazeCommand.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetTrajectoryInFrame1();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_trajectory_pb.Vec3Trajectory.serializeBinaryToWriter
    );
  }
  f = message.getFrame1Name();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToolTrajectoryInFrame2();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      bosdyn_api_trajectory_pb.SE3Trajectory.serializeBinaryToWriter
    );
  }
  f = message.getFrame2Name();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getWristTformTool();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
  f = message.getTargetTrajectoryInitialVelocity();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getMaximumAcceleration();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getMaxLinearVelocity();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getMaxAngularVelocity();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional Vec3Trajectory target_trajectory_in_frame1 = 1;
 * @return {?proto.bosdyn.api.Vec3Trajectory}
 */
proto.bosdyn.api.GazeCommand.Request.prototype.getTargetTrajectoryInFrame1 = function() {
  return /** @type{?proto.bosdyn.api.Vec3Trajectory} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_trajectory_pb.Vec3Trajectory, 1));
};


/**
 * @param {?proto.bosdyn.api.Vec3Trajectory|undefined} value
 * @return {!proto.bosdyn.api.GazeCommand.Request} returns this
*/
proto.bosdyn.api.GazeCommand.Request.prototype.setTargetTrajectoryInFrame1 = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.GazeCommand.Request} returns this
 */
proto.bosdyn.api.GazeCommand.Request.prototype.clearTargetTrajectoryInFrame1 = function() {
  return this.setTargetTrajectoryInFrame1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.GazeCommand.Request.prototype.hasTargetTrajectoryInFrame1 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string frame1_name = 2;
 * @return {string}
 */
proto.bosdyn.api.GazeCommand.Request.prototype.getFrame1Name = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.GazeCommand.Request} returns this
 */
proto.bosdyn.api.GazeCommand.Request.prototype.setFrame1Name = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SE3Trajectory tool_trajectory_in_frame2 = 10;
 * @return {?proto.bosdyn.api.SE3Trajectory}
 */
proto.bosdyn.api.GazeCommand.Request.prototype.getToolTrajectoryInFrame2 = function() {
  return /** @type{?proto.bosdyn.api.SE3Trajectory} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_trajectory_pb.SE3Trajectory, 10));
};


/**
 * @param {?proto.bosdyn.api.SE3Trajectory|undefined} value
 * @return {!proto.bosdyn.api.GazeCommand.Request} returns this
*/
proto.bosdyn.api.GazeCommand.Request.prototype.setToolTrajectoryInFrame2 = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.GazeCommand.Request} returns this
 */
proto.bosdyn.api.GazeCommand.Request.prototype.clearToolTrajectoryInFrame2 = function() {
  return this.setToolTrajectoryInFrame2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.GazeCommand.Request.prototype.hasToolTrajectoryInFrame2 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string frame2_name = 11;
 * @return {string}
 */
proto.bosdyn.api.GazeCommand.Request.prototype.getFrame2Name = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.GazeCommand.Request} returns this
 */
proto.bosdyn.api.GazeCommand.Request.prototype.setFrame2Name = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional SE3Pose wrist_tform_tool = 9;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.GazeCommand.Request.prototype.getWristTformTool = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 9));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.GazeCommand.Request} returns this
*/
proto.bosdyn.api.GazeCommand.Request.prototype.setWristTformTool = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.GazeCommand.Request} returns this
 */
proto.bosdyn.api.GazeCommand.Request.prototype.clearWristTformTool = function() {
  return this.setWristTformTool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.GazeCommand.Request.prototype.hasWristTformTool = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.DoubleValue target_trajectory_initial_velocity = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.GazeCommand.Request.prototype.getTargetTrajectoryInitialVelocity = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.GazeCommand.Request} returns this
*/
proto.bosdyn.api.GazeCommand.Request.prototype.setTargetTrajectoryInitialVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.GazeCommand.Request} returns this
 */
proto.bosdyn.api.GazeCommand.Request.prototype.clearTargetTrajectoryInitialVelocity = function() {
  return this.setTargetTrajectoryInitialVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.GazeCommand.Request.prototype.hasTargetTrajectoryInitialVelocity = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue maximum_acceleration = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.GazeCommand.Request.prototype.getMaximumAcceleration = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.GazeCommand.Request} returns this
*/
proto.bosdyn.api.GazeCommand.Request.prototype.setMaximumAcceleration = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.GazeCommand.Request} returns this
 */
proto.bosdyn.api.GazeCommand.Request.prototype.clearMaximumAcceleration = function() {
  return this.setMaximumAcceleration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.GazeCommand.Request.prototype.hasMaximumAcceleration = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.DoubleValue max_linear_velocity = 7;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.GazeCommand.Request.prototype.getMaxLinearVelocity = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 7));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.GazeCommand.Request} returns this
*/
proto.bosdyn.api.GazeCommand.Request.prototype.setMaxLinearVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.GazeCommand.Request} returns this
 */
proto.bosdyn.api.GazeCommand.Request.prototype.clearMaxLinearVelocity = function() {
  return this.setMaxLinearVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.GazeCommand.Request.prototype.hasMaxLinearVelocity = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.DoubleValue max_angular_velocity = 8;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.GazeCommand.Request.prototype.getMaxAngularVelocity = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 8));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.GazeCommand.Request} returns this
*/
proto.bosdyn.api.GazeCommand.Request.prototype.setMaxAngularVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.GazeCommand.Request} returns this
 */
proto.bosdyn.api.GazeCommand.Request.prototype.clearMaxAngularVelocity = function() {
  return this.setMaxAngularVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.GazeCommand.Request.prototype.hasMaxAngularVelocity = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.bosdyn.api.GazeCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.GazeCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.GazeCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.GazeCommand.Feedback.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    gazingAtTarget: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    gazeToTargetRotationMeasured: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    handPositionAtGoal: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    handDistanceToGoalMeasured: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    handRollAtGoal: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    handRollToTargetRollMeasured: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
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
 * @return {!proto.bosdyn.api.GazeCommand.Feedback}
 */
proto.bosdyn.api.GazeCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.GazeCommand.Feedback;
  return proto.bosdyn.api.GazeCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.GazeCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.GazeCommand.Feedback}
 */
proto.bosdyn.api.GazeCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.GazeCommand.Feedback.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGazingAtTarget(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setGazeToTargetRotationMeasured(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHandPositionAtGoal(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHandDistanceToGoalMeasured(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHandRollAtGoal(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHandRollToTargetRollMeasured(value);
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
proto.bosdyn.api.GazeCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.GazeCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.GazeCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.GazeCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getGazingAtTarget();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getGazeToTargetRotationMeasured();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getHandPositionAtGoal();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getHandDistanceToGoalMeasured();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getHandRollAtGoal();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getHandRollToTargetRollMeasured();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.GazeCommand.Feedback.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_TRAJECTORY_COMPLETE: 1,
  STATUS_IN_PROGRESS: 2,
  STATUS_TOOL_TRAJECTORY_STALLED: 3
};

/**
 * optional Status status = 1;
 * @return {!proto.bosdyn.api.GazeCommand.Feedback.Status}
 */
proto.bosdyn.api.GazeCommand.Feedback.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.GazeCommand.Feedback.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.GazeCommand.Feedback.Status} value
 * @return {!proto.bosdyn.api.GazeCommand.Feedback} returns this
 */
proto.bosdyn.api.GazeCommand.Feedback.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool gazing_at_target = 2;
 * @return {boolean}
 */
proto.bosdyn.api.GazeCommand.Feedback.prototype.getGazingAtTarget = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.GazeCommand.Feedback} returns this
 */
proto.bosdyn.api.GazeCommand.Feedback.prototype.setGazingAtTarget = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional float gaze_to_target_rotation_measured = 5;
 * @return {number}
 */
proto.bosdyn.api.GazeCommand.Feedback.prototype.getGazeToTargetRotationMeasured = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.GazeCommand.Feedback} returns this
 */
proto.bosdyn.api.GazeCommand.Feedback.prototype.setGazeToTargetRotationMeasured = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional bool hand_position_at_goal = 3;
 * @return {boolean}
 */
proto.bosdyn.api.GazeCommand.Feedback.prototype.getHandPositionAtGoal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.GazeCommand.Feedback} returns this
 */
proto.bosdyn.api.GazeCommand.Feedback.prototype.setHandPositionAtGoal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional float hand_distance_to_goal_measured = 6;
 * @return {number}
 */
proto.bosdyn.api.GazeCommand.Feedback.prototype.getHandDistanceToGoalMeasured = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.GazeCommand.Feedback} returns this
 */
proto.bosdyn.api.GazeCommand.Feedback.prototype.setHandDistanceToGoalMeasured = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional bool hand_roll_at_goal = 4;
 * @return {boolean}
 */
proto.bosdyn.api.GazeCommand.Feedback.prototype.getHandRollAtGoal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.GazeCommand.Feedback} returns this
 */
proto.bosdyn.api.GazeCommand.Feedback.prototype.setHandRollAtGoal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional float hand_roll_to_target_roll_measured = 7;
 * @return {number}
 */
proto.bosdyn.api.GazeCommand.Feedback.prototype.getHandRollToTargetRollMeasured = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.GazeCommand.Feedback} returns this
 */
proto.bosdyn.api.GazeCommand.Feedback.prototype.setHandRollToTargetRollMeasured = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
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
proto.bosdyn.api.ArmStopCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmStopCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmStopCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmStopCommand.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.bosdyn.api.ArmStopCommand}
 */
proto.bosdyn.api.ArmStopCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmStopCommand;
  return proto.bosdyn.api.ArmStopCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmStopCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmStopCommand}
 */
proto.bosdyn.api.ArmStopCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.bosdyn.api.ArmStopCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmStopCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmStopCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmStopCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.bosdyn.api.ArmStopCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmStopCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmStopCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmStopCommand.Request.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.bosdyn.api.ArmStopCommand.Request}
 */
proto.bosdyn.api.ArmStopCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmStopCommand.Request;
  return proto.bosdyn.api.ArmStopCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmStopCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmStopCommand.Request}
 */
proto.bosdyn.api.ArmStopCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.bosdyn.api.ArmStopCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmStopCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmStopCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmStopCommand.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.bosdyn.api.ArmStopCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmStopCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmStopCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmStopCommand.Feedback.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.bosdyn.api.ArmStopCommand.Feedback}
 */
proto.bosdyn.api.ArmStopCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmStopCommand.Feedback;
  return proto.bosdyn.api.ArmStopCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmStopCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmStopCommand.Feedback}
 */
proto.bosdyn.api.ArmStopCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.bosdyn.api.ArmStopCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmStopCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmStopCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmStopCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.bosdyn.api.ArmImpedanceCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmImpedanceCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmImpedanceCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmImpedanceCommand.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.bosdyn.api.ArmImpedanceCommand}
 */
proto.bosdyn.api.ArmImpedanceCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmImpedanceCommand;
  return proto.bosdyn.api.ArmImpedanceCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmImpedanceCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmImpedanceCommand}
 */
proto.bosdyn.api.ArmImpedanceCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.bosdyn.api.ArmImpedanceCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmImpedanceCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmImpedanceCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmImpedanceCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmImpedanceCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmImpedanceCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    rootFrameName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    rootTformTask: (f = msg.getRootTformTask()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    wristTformTool: (f = msg.getWristTformTool()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    taskTformDesiredTool: (f = msg.getTaskTformDesiredTool()) && bosdyn_api_trajectory_pb.SE3Trajectory.toObject(includeInstance, f),
    feedForwardWrenchAtToolInDesiredTool: (f = msg.getFeedForwardWrenchAtToolInDesiredTool()) && bosdyn_api_geometry_pb.Wrench.toObject(includeInstance, f),
    diagonalStiffnessMatrix: (f = msg.getDiagonalStiffnessMatrix()) && bosdyn_api_geometry_pb.Vector.toObject(includeInstance, f),
    diagonalDampingMatrix: (f = msg.getDiagonalDampingMatrix()) && bosdyn_api_geometry_pb.Vector.toObject(includeInstance, f),
    maxForceMag: (f = msg.getMaxForceMag()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    maxTorqueMag: (f = msg.getMaxTorqueMag()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmImpedanceCommand.Request;
  return proto.bosdyn.api.ArmImpedanceCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmImpedanceCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRootFrameName(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setRootTformTask(value);
      break;
    case 3:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setWristTformTool(value);
      break;
    case 4:
      var value = new bosdyn_api_trajectory_pb.SE3Trajectory;
      reader.readMessage(value,bosdyn_api_trajectory_pb.SE3Trajectory.deserializeBinaryFromReader);
      msg.setTaskTformDesiredTool(value);
      break;
    case 5:
      var value = new bosdyn_api_geometry_pb.Wrench;
      reader.readMessage(value,bosdyn_api_geometry_pb.Wrench.deserializeBinaryFromReader);
      msg.setFeedForwardWrenchAtToolInDesiredTool(value);
      break;
    case 6:
      var value = new bosdyn_api_geometry_pb.Vector;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vector.deserializeBinaryFromReader);
      msg.setDiagonalStiffnessMatrix(value);
      break;
    case 7:
      var value = new bosdyn_api_geometry_pb.Vector;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vector.deserializeBinaryFromReader);
      msg.setDiagonalDampingMatrix(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMaxForceMag(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMaxTorqueMag(value);
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
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmImpedanceCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmImpedanceCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRootFrameName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRootTformTask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
  f = message.getWristTformTool();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
  f = message.getTaskTformDesiredTool();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_trajectory_pb.SE3Trajectory.serializeBinaryToWriter
    );
  }
  f = message.getFeedForwardWrenchAtToolInDesiredTool();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_geometry_pb.Wrench.serializeBinaryToWriter
    );
  }
  f = message.getDiagonalStiffnessMatrix();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      bosdyn_api_geometry_pb.Vector.serializeBinaryToWriter
    );
  }
  f = message.getDiagonalDampingMatrix();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      bosdyn_api_geometry_pb.Vector.serializeBinaryToWriter
    );
  }
  f = message.getMaxForceMag();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getMaxTorqueMag();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string root_frame_name = 1;
 * @return {string}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.getRootFrameName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request} returns this
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.setRootFrameName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SE3Pose root_tform_task = 2;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.getRootTformTask = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 2));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request} returns this
*/
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.setRootTformTask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request} returns this
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.clearRootTformTask = function() {
  return this.setRootTformTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.hasRootTformTask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SE3Pose wrist_tform_tool = 3;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.getWristTformTool = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 3));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request} returns this
*/
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.setWristTformTool = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request} returns this
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.clearWristTformTool = function() {
  return this.setWristTformTool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.hasWristTformTool = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SE3Trajectory task_tform_desired_tool = 4;
 * @return {?proto.bosdyn.api.SE3Trajectory}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.getTaskTformDesiredTool = function() {
  return /** @type{?proto.bosdyn.api.SE3Trajectory} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_trajectory_pb.SE3Trajectory, 4));
};


/**
 * @param {?proto.bosdyn.api.SE3Trajectory|undefined} value
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request} returns this
*/
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.setTaskTformDesiredTool = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request} returns this
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.clearTaskTformDesiredTool = function() {
  return this.setTaskTformDesiredTool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.hasTaskTformDesiredTool = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Wrench feed_forward_wrench_at_tool_in_desired_tool = 5;
 * @return {?proto.bosdyn.api.Wrench}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.getFeedForwardWrenchAtToolInDesiredTool = function() {
  return /** @type{?proto.bosdyn.api.Wrench} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Wrench, 5));
};


/**
 * @param {?proto.bosdyn.api.Wrench|undefined} value
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request} returns this
*/
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.setFeedForwardWrenchAtToolInDesiredTool = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request} returns this
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.clearFeedForwardWrenchAtToolInDesiredTool = function() {
  return this.setFeedForwardWrenchAtToolInDesiredTool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.hasFeedForwardWrenchAtToolInDesiredTool = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Vector diagonal_stiffness_matrix = 6;
 * @return {?proto.bosdyn.api.Vector}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.getDiagonalStiffnessMatrix = function() {
  return /** @type{?proto.bosdyn.api.Vector} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vector, 6));
};


/**
 * @param {?proto.bosdyn.api.Vector|undefined} value
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request} returns this
*/
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.setDiagonalStiffnessMatrix = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request} returns this
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.clearDiagonalStiffnessMatrix = function() {
  return this.setDiagonalStiffnessMatrix(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.hasDiagonalStiffnessMatrix = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Vector diagonal_damping_matrix = 7;
 * @return {?proto.bosdyn.api.Vector}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.getDiagonalDampingMatrix = function() {
  return /** @type{?proto.bosdyn.api.Vector} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vector, 7));
};


/**
 * @param {?proto.bosdyn.api.Vector|undefined} value
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request} returns this
*/
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.setDiagonalDampingMatrix = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request} returns this
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.clearDiagonalDampingMatrix = function() {
  return this.setDiagonalDampingMatrix(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.hasDiagonalDampingMatrix = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.DoubleValue max_force_mag = 8;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.getMaxForceMag = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 8));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request} returns this
*/
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.setMaxForceMag = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request} returns this
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.clearMaxForceMag = function() {
  return this.setMaxForceMag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.hasMaxForceMag = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.DoubleValue max_torque_mag = 9;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.getMaxTorqueMag = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 9));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request} returns this
*/
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.setMaxTorqueMag = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Request} returns this
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.clearMaxTorqueMag = function() {
  return this.setMaxTorqueMag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmImpedanceCommand.Request.prototype.hasMaxTorqueMag = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmImpedanceCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmImpedanceCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    transformsSnapshot: (f = msg.getTransformsSnapshot()) && bosdyn_api_geometry_pb.FrameTreeSnapshot.toObject(includeInstance, f),
    commandedWrenchFromStiffnessAtToolInDesiredTool: (f = msg.getCommandedWrenchFromStiffnessAtToolInDesiredTool()) && bosdyn_api_geometry_pb.Wrench.toObject(includeInstance, f),
    commandedWrenchFromDampingAtToolInDesiredTool: (f = msg.getCommandedWrenchFromDampingAtToolInDesiredTool()) && bosdyn_api_geometry_pb.Wrench.toObject(includeInstance, f),
    commandedWrenchFromFeedForwardAtToolInDesiredTool: (f = msg.getCommandedWrenchFromFeedForwardAtToolInDesiredTool()) && bosdyn_api_geometry_pb.Wrench.toObject(includeInstance, f),
    totalCommandedWrenchAtToolInDesiredTool: (f = msg.getTotalCommandedWrenchAtToolInDesiredTool()) && bosdyn_api_geometry_pb.Wrench.toObject(includeInstance, f),
    totalMeasuredWrenchAtToolInDesiredTool: (f = msg.getTotalMeasuredWrenchAtToolInDesiredTool()) && bosdyn_api_geometry_pb.Wrench.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Feedback}
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmImpedanceCommand.Feedback;
  return proto.bosdyn.api.ArmImpedanceCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmImpedanceCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Feedback}
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.ArmImpedanceCommand.Feedback.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.FrameTreeSnapshot;
      reader.readMessage(value,bosdyn_api_geometry_pb.FrameTreeSnapshot.deserializeBinaryFromReader);
      msg.setTransformsSnapshot(value);
      break;
    case 3:
      var value = new bosdyn_api_geometry_pb.Wrench;
      reader.readMessage(value,bosdyn_api_geometry_pb.Wrench.deserializeBinaryFromReader);
      msg.setCommandedWrenchFromStiffnessAtToolInDesiredTool(value);
      break;
    case 4:
      var value = new bosdyn_api_geometry_pb.Wrench;
      reader.readMessage(value,bosdyn_api_geometry_pb.Wrench.deserializeBinaryFromReader);
      msg.setCommandedWrenchFromDampingAtToolInDesiredTool(value);
      break;
    case 5:
      var value = new bosdyn_api_geometry_pb.Wrench;
      reader.readMessage(value,bosdyn_api_geometry_pb.Wrench.deserializeBinaryFromReader);
      msg.setCommandedWrenchFromFeedForwardAtToolInDesiredTool(value);
      break;
    case 6:
      var value = new bosdyn_api_geometry_pb.Wrench;
      reader.readMessage(value,bosdyn_api_geometry_pb.Wrench.deserializeBinaryFromReader);
      msg.setTotalCommandedWrenchAtToolInDesiredTool(value);
      break;
    case 7:
      var value = new bosdyn_api_geometry_pb.Wrench;
      reader.readMessage(value,bosdyn_api_geometry_pb.Wrench.deserializeBinaryFromReader);
      msg.setTotalMeasuredWrenchAtToolInDesiredTool(value);
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
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmImpedanceCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmImpedanceCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTransformsSnapshot();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.FrameTreeSnapshot.serializeBinaryToWriter
    );
  }
  f = message.getCommandedWrenchFromStiffnessAtToolInDesiredTool();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_geometry_pb.Wrench.serializeBinaryToWriter
    );
  }
  f = message.getCommandedWrenchFromDampingAtToolInDesiredTool();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_geometry_pb.Wrench.serializeBinaryToWriter
    );
  }
  f = message.getCommandedWrenchFromFeedForwardAtToolInDesiredTool();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_geometry_pb.Wrench.serializeBinaryToWriter
    );
  }
  f = message.getTotalCommandedWrenchAtToolInDesiredTool();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      bosdyn_api_geometry_pb.Wrench.serializeBinaryToWriter
    );
  }
  f = message.getTotalMeasuredWrenchAtToolInDesiredTool();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      bosdyn_api_geometry_pb.Wrench.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_TRAJECTORY_COMPLETE: 1,
  STATUS_IN_PROGRESS: 2,
  STATUS_TRAJECTORY_STALLED: 3
};

/**
 * optional Status status = 1;
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Feedback.Status}
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.ArmImpedanceCommand.Feedback.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.ArmImpedanceCommand.Feedback.Status} value
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional FrameTreeSnapshot transforms_snapshot = 2;
 * @return {?proto.bosdyn.api.FrameTreeSnapshot}
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.getTransformsSnapshot = function() {
  return /** @type{?proto.bosdyn.api.FrameTreeSnapshot} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.FrameTreeSnapshot, 2));
};


/**
 * @param {?proto.bosdyn.api.FrameTreeSnapshot|undefined} value
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Feedback} returns this
*/
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.setTransformsSnapshot = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.clearTransformsSnapshot = function() {
  return this.setTransformsSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.hasTransformsSnapshot = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Wrench commanded_wrench_from_stiffness_at_tool_in_desired_tool = 3;
 * @return {?proto.bosdyn.api.Wrench}
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.getCommandedWrenchFromStiffnessAtToolInDesiredTool = function() {
  return /** @type{?proto.bosdyn.api.Wrench} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Wrench, 3));
};


/**
 * @param {?proto.bosdyn.api.Wrench|undefined} value
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Feedback} returns this
*/
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.setCommandedWrenchFromStiffnessAtToolInDesiredTool = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.clearCommandedWrenchFromStiffnessAtToolInDesiredTool = function() {
  return this.setCommandedWrenchFromStiffnessAtToolInDesiredTool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.hasCommandedWrenchFromStiffnessAtToolInDesiredTool = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Wrench commanded_wrench_from_damping_at_tool_in_desired_tool = 4;
 * @return {?proto.bosdyn.api.Wrench}
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.getCommandedWrenchFromDampingAtToolInDesiredTool = function() {
  return /** @type{?proto.bosdyn.api.Wrench} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Wrench, 4));
};


/**
 * @param {?proto.bosdyn.api.Wrench|undefined} value
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Feedback} returns this
*/
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.setCommandedWrenchFromDampingAtToolInDesiredTool = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.clearCommandedWrenchFromDampingAtToolInDesiredTool = function() {
  return this.setCommandedWrenchFromDampingAtToolInDesiredTool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.hasCommandedWrenchFromDampingAtToolInDesiredTool = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Wrench commanded_wrench_from_feed_forward_at_tool_in_desired_tool = 5;
 * @return {?proto.bosdyn.api.Wrench}
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.getCommandedWrenchFromFeedForwardAtToolInDesiredTool = function() {
  return /** @type{?proto.bosdyn.api.Wrench} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Wrench, 5));
};


/**
 * @param {?proto.bosdyn.api.Wrench|undefined} value
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Feedback} returns this
*/
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.setCommandedWrenchFromFeedForwardAtToolInDesiredTool = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.clearCommandedWrenchFromFeedForwardAtToolInDesiredTool = function() {
  return this.setCommandedWrenchFromFeedForwardAtToolInDesiredTool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.hasCommandedWrenchFromFeedForwardAtToolInDesiredTool = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Wrench total_commanded_wrench_at_tool_in_desired_tool = 6;
 * @return {?proto.bosdyn.api.Wrench}
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.getTotalCommandedWrenchAtToolInDesiredTool = function() {
  return /** @type{?proto.bosdyn.api.Wrench} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Wrench, 6));
};


/**
 * @param {?proto.bosdyn.api.Wrench|undefined} value
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Feedback} returns this
*/
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.setTotalCommandedWrenchAtToolInDesiredTool = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.clearTotalCommandedWrenchAtToolInDesiredTool = function() {
  return this.setTotalCommandedWrenchAtToolInDesiredTool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.hasTotalCommandedWrenchAtToolInDesiredTool = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Wrench total_measured_wrench_at_tool_in_desired_tool = 7;
 * @return {?proto.bosdyn.api.Wrench}
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.getTotalMeasuredWrenchAtToolInDesiredTool = function() {
  return /** @type{?proto.bosdyn.api.Wrench} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Wrench, 7));
};


/**
 * @param {?proto.bosdyn.api.Wrench|undefined} value
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Feedback} returns this
*/
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.setTotalMeasuredWrenchAtToolInDesiredTool = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ArmImpedanceCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.clearTotalMeasuredWrenchAtToolInDesiredTool = function() {
  return this.setTotalMeasuredWrenchAtToolInDesiredTool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ArmImpedanceCommand.Feedback.prototype.hasTotalMeasuredWrenchAtToolInDesiredTool = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.bosdyn.api);

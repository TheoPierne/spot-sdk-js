// source: bosdyn/api/basic_command.proto
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

var bosdyn_api_geometry_pb = require('../../bosdyn/api/geometry_pb.js');
goog.object.extend(proto, bosdyn_api_geometry_pb);
var bosdyn_api_trajectory_pb = require('../../bosdyn/api/trajectory_pb.js');
goog.object.extend(proto, bosdyn_api_trajectory_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.bosdyn.api.ArmDragCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmDragCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmDragCommand.Feedback.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.ArmDragCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.BatteryChangePoseCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.BatteryChangePoseCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.BatteryChangePoseCommand.Feedback.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.BatteryChangePoseCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.BatteryChangePoseCommand.Request.DirectionHint', null, global);
goog.exportSymbol('proto.bosdyn.api.ConstrainedManipulationCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.ConstrainedManipulationCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.ConstrainedManipulationCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.ConstrainedManipulationCommand.Request.TaskSpeedCase', null, global);
goog.exportSymbol('proto.bosdyn.api.ConstrainedManipulationCommand.Request.TaskType', null, global);
goog.exportSymbol('proto.bosdyn.api.FollowArmCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.FollowArmCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.FollowArmCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.FreezeCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.FreezeCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.FreezeCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.RobotCommandFeedbackStatus', null, global);
goog.exportSymbol('proto.bosdyn.api.RobotCommandFeedbackStatus.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.SE2TrajectoryCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.SE2TrajectoryCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.SE2TrajectoryCommand.Feedback.BodyMovementStatus', null, global);
goog.exportSymbol('proto.bosdyn.api.SE2TrajectoryCommand.Feedback.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.SE2TrajectoryCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.SE2VelocityCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.SE2VelocityCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.SE2VelocityCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.SafePowerOffCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.SafePowerOffCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.SafePowerOffCommand.Feedback.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.SafePowerOffCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.SafePowerOffCommand.Request.UnsafeAction', null, global);
goog.exportSymbol('proto.bosdyn.api.SelfRightCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.SelfRightCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.SelfRightCommand.Feedback.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.SelfRightCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.SitCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.SitCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.SitCommand.Feedback.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.SitCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.Stance', null, global);
goog.exportSymbol('proto.bosdyn.api.StanceCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.StanceCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.StanceCommand.Feedback.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.StanceCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.StandCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.StandCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.StandCommand.Feedback.StandingState', null, global);
goog.exportSymbol('proto.bosdyn.api.StandCommand.Feedback.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.StandCommand.Request', null, global);
goog.exportSymbol('proto.bosdyn.api.StopCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.StopCommand.Feedback', null, global);
goog.exportSymbol('proto.bosdyn.api.StopCommand.Request', null, global);
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
proto.bosdyn.api.RobotCommandFeedbackStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.RobotCommandFeedbackStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.RobotCommandFeedbackStatus.displayName = 'proto.bosdyn.api.RobotCommandFeedbackStatus';
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
proto.bosdyn.api.BatteryChangePoseCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.BatteryChangePoseCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.BatteryChangePoseCommand.displayName = 'proto.bosdyn.api.BatteryChangePoseCommand';
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
proto.bosdyn.api.BatteryChangePoseCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.BatteryChangePoseCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.BatteryChangePoseCommand.Request.displayName = 'proto.bosdyn.api.BatteryChangePoseCommand.Request';
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
proto.bosdyn.api.BatteryChangePoseCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.BatteryChangePoseCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.BatteryChangePoseCommand.Feedback.displayName = 'proto.bosdyn.api.BatteryChangePoseCommand.Feedback';
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
proto.bosdyn.api.SelfRightCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.SelfRightCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SelfRightCommand.displayName = 'proto.bosdyn.api.SelfRightCommand';
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
proto.bosdyn.api.SelfRightCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.SelfRightCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SelfRightCommand.Request.displayName = 'proto.bosdyn.api.SelfRightCommand.Request';
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
proto.bosdyn.api.SelfRightCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.SelfRightCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SelfRightCommand.Feedback.displayName = 'proto.bosdyn.api.SelfRightCommand.Feedback';
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
proto.bosdyn.api.StopCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.StopCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.StopCommand.displayName = 'proto.bosdyn.api.StopCommand';
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
proto.bosdyn.api.StopCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.StopCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.StopCommand.Request.displayName = 'proto.bosdyn.api.StopCommand.Request';
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
proto.bosdyn.api.StopCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.StopCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.StopCommand.Feedback.displayName = 'proto.bosdyn.api.StopCommand.Feedback';
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
proto.bosdyn.api.FreezeCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.FreezeCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.FreezeCommand.displayName = 'proto.bosdyn.api.FreezeCommand';
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
proto.bosdyn.api.FreezeCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.FreezeCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.FreezeCommand.Request.displayName = 'proto.bosdyn.api.FreezeCommand.Request';
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
proto.bosdyn.api.FreezeCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.FreezeCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.FreezeCommand.Feedback.displayName = 'proto.bosdyn.api.FreezeCommand.Feedback';
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
proto.bosdyn.api.SafePowerOffCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.SafePowerOffCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SafePowerOffCommand.displayName = 'proto.bosdyn.api.SafePowerOffCommand';
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
proto.bosdyn.api.SafePowerOffCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.SafePowerOffCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SafePowerOffCommand.Request.displayName = 'proto.bosdyn.api.SafePowerOffCommand.Request';
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
proto.bosdyn.api.SafePowerOffCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.SafePowerOffCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SafePowerOffCommand.Feedback.displayName = 'proto.bosdyn.api.SafePowerOffCommand.Feedback';
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
proto.bosdyn.api.SE2TrajectoryCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.SE2TrajectoryCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SE2TrajectoryCommand.displayName = 'proto.bosdyn.api.SE2TrajectoryCommand';
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
proto.bosdyn.api.SE2TrajectoryCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.SE2TrajectoryCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SE2TrajectoryCommand.Request.displayName = 'proto.bosdyn.api.SE2TrajectoryCommand.Request';
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
proto.bosdyn.api.SE2TrajectoryCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.SE2TrajectoryCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SE2TrajectoryCommand.Feedback.displayName = 'proto.bosdyn.api.SE2TrajectoryCommand.Feedback';
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
proto.bosdyn.api.SE2VelocityCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.SE2VelocityCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SE2VelocityCommand.displayName = 'proto.bosdyn.api.SE2VelocityCommand';
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
proto.bosdyn.api.SE2VelocityCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.SE2VelocityCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SE2VelocityCommand.Request.displayName = 'proto.bosdyn.api.SE2VelocityCommand.Request';
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
proto.bosdyn.api.SE2VelocityCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.SE2VelocityCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SE2VelocityCommand.Feedback.displayName = 'proto.bosdyn.api.SE2VelocityCommand.Feedback';
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
proto.bosdyn.api.SitCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.SitCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SitCommand.displayName = 'proto.bosdyn.api.SitCommand';
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
proto.bosdyn.api.SitCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.SitCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SitCommand.Request.displayName = 'proto.bosdyn.api.SitCommand.Request';
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
proto.bosdyn.api.SitCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.SitCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SitCommand.Feedback.displayName = 'proto.bosdyn.api.SitCommand.Feedback';
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
proto.bosdyn.api.StandCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.StandCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.StandCommand.displayName = 'proto.bosdyn.api.StandCommand';
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
proto.bosdyn.api.StandCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.StandCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.StandCommand.Request.displayName = 'proto.bosdyn.api.StandCommand.Request';
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
proto.bosdyn.api.StandCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.StandCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.StandCommand.Feedback.displayName = 'proto.bosdyn.api.StandCommand.Feedback';
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
proto.bosdyn.api.StanceCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.StanceCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.StanceCommand.displayName = 'proto.bosdyn.api.StanceCommand';
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
proto.bosdyn.api.StanceCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.StanceCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.StanceCommand.Request.displayName = 'proto.bosdyn.api.StanceCommand.Request';
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
proto.bosdyn.api.StanceCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.StanceCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.StanceCommand.Feedback.displayName = 'proto.bosdyn.api.StanceCommand.Feedback';
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
proto.bosdyn.api.Stance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.Stance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.Stance.displayName = 'proto.bosdyn.api.Stance';
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
proto.bosdyn.api.FollowArmCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.FollowArmCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.FollowArmCommand.displayName = 'proto.bosdyn.api.FollowArmCommand';
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
proto.bosdyn.api.FollowArmCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.FollowArmCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.FollowArmCommand.Request.displayName = 'proto.bosdyn.api.FollowArmCommand.Request';
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
proto.bosdyn.api.FollowArmCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.FollowArmCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.FollowArmCommand.Feedback.displayName = 'proto.bosdyn.api.FollowArmCommand.Feedback';
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
proto.bosdyn.api.ArmDragCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmDragCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmDragCommand.displayName = 'proto.bosdyn.api.ArmDragCommand';
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
proto.bosdyn.api.ArmDragCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmDragCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmDragCommand.Request.displayName = 'proto.bosdyn.api.ArmDragCommand.Request';
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
proto.bosdyn.api.ArmDragCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ArmDragCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ArmDragCommand.Feedback.displayName = 'proto.bosdyn.api.ArmDragCommand.Feedback';
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
proto.bosdyn.api.ConstrainedManipulationCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ConstrainedManipulationCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ConstrainedManipulationCommand.displayName = 'proto.bosdyn.api.ConstrainedManipulationCommand';
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
proto.bosdyn.api.ConstrainedManipulationCommand.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.ConstrainedManipulationCommand.Request.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.ConstrainedManipulationCommand.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ConstrainedManipulationCommand.Request.displayName = 'proto.bosdyn.api.ConstrainedManipulationCommand.Request';
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
proto.bosdyn.api.ConstrainedManipulationCommand.Feedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ConstrainedManipulationCommand.Feedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.displayName = 'proto.bosdyn.api.ConstrainedManipulationCommand.Feedback';
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
proto.bosdyn.api.RobotCommandFeedbackStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.RobotCommandFeedbackStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.RobotCommandFeedbackStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotCommandFeedbackStatus.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.RobotCommandFeedbackStatus}
 */
proto.bosdyn.api.RobotCommandFeedbackStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.RobotCommandFeedbackStatus;
  return proto.bosdyn.api.RobotCommandFeedbackStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.RobotCommandFeedbackStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.RobotCommandFeedbackStatus}
 */
proto.bosdyn.api.RobotCommandFeedbackStatus.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.RobotCommandFeedbackStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.RobotCommandFeedbackStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.RobotCommandFeedbackStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotCommandFeedbackStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.bosdyn.api.RobotCommandFeedbackStatus.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_PROCESSING: 1,
  STATUS_COMMAND_OVERRIDDEN: 2,
  STATUS_COMMAND_TIMED_OUT: 3,
  STATUS_ROBOT_FROZEN: 4,
  STATUS_INCOMPATIBLE_HARDWARE: 5
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
proto.bosdyn.api.BatteryChangePoseCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.BatteryChangePoseCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.BatteryChangePoseCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.BatteryChangePoseCommand.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.BatteryChangePoseCommand}
 */
proto.bosdyn.api.BatteryChangePoseCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.BatteryChangePoseCommand;
  return proto.bosdyn.api.BatteryChangePoseCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.BatteryChangePoseCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.BatteryChangePoseCommand}
 */
proto.bosdyn.api.BatteryChangePoseCommand.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.BatteryChangePoseCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.BatteryChangePoseCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.BatteryChangePoseCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.BatteryChangePoseCommand.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.BatteryChangePoseCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.BatteryChangePoseCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.BatteryChangePoseCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.BatteryChangePoseCommand.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    directionHint: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.bosdyn.api.BatteryChangePoseCommand.Request}
 */
proto.bosdyn.api.BatteryChangePoseCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.BatteryChangePoseCommand.Request;
  return proto.bosdyn.api.BatteryChangePoseCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.BatteryChangePoseCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.BatteryChangePoseCommand.Request}
 */
proto.bosdyn.api.BatteryChangePoseCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.BatteryChangePoseCommand.Request.DirectionHint} */ (reader.readEnum());
      msg.setDirectionHint(value);
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
proto.bosdyn.api.BatteryChangePoseCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.BatteryChangePoseCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.BatteryChangePoseCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.BatteryChangePoseCommand.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirectionHint();
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
proto.bosdyn.api.BatteryChangePoseCommand.Request.DirectionHint = {
  HINT_UNKNOWN: 0,
  HINT_RIGHT: 1,
  HINT_LEFT: 2
};

/**
 * optional DirectionHint direction_hint = 1;
 * @return {!proto.bosdyn.api.BatteryChangePoseCommand.Request.DirectionHint}
 */
proto.bosdyn.api.BatteryChangePoseCommand.Request.prototype.getDirectionHint = function() {
  return /** @type {!proto.bosdyn.api.BatteryChangePoseCommand.Request.DirectionHint} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.BatteryChangePoseCommand.Request.DirectionHint} value
 * @return {!proto.bosdyn.api.BatteryChangePoseCommand.Request} returns this
 */
proto.bosdyn.api.BatteryChangePoseCommand.Request.prototype.setDirectionHint = function(value) {
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
proto.bosdyn.api.BatteryChangePoseCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.BatteryChangePoseCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.BatteryChangePoseCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.BatteryChangePoseCommand.Feedback.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.BatteryChangePoseCommand.Feedback}
 */
proto.bosdyn.api.BatteryChangePoseCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.BatteryChangePoseCommand.Feedback;
  return proto.bosdyn.api.BatteryChangePoseCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.BatteryChangePoseCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.BatteryChangePoseCommand.Feedback}
 */
proto.bosdyn.api.BatteryChangePoseCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.BatteryChangePoseCommand.Feedback.Status} */ (reader.readEnum());
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
proto.bosdyn.api.BatteryChangePoseCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.BatteryChangePoseCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.BatteryChangePoseCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.BatteryChangePoseCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.BatteryChangePoseCommand.Feedback.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_COMPLETED: 1,
  STATUS_IN_PROGRESS: 2,
  STATUS_FAILED: 3
};

/**
 * optional Status status = 1;
 * @return {!proto.bosdyn.api.BatteryChangePoseCommand.Feedback.Status}
 */
proto.bosdyn.api.BatteryChangePoseCommand.Feedback.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.BatteryChangePoseCommand.Feedback.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.BatteryChangePoseCommand.Feedback.Status} value
 * @return {!proto.bosdyn.api.BatteryChangePoseCommand.Feedback} returns this
 */
proto.bosdyn.api.BatteryChangePoseCommand.Feedback.prototype.setStatus = function(value) {
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
proto.bosdyn.api.SelfRightCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SelfRightCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SelfRightCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SelfRightCommand.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.SelfRightCommand}
 */
proto.bosdyn.api.SelfRightCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SelfRightCommand;
  return proto.bosdyn.api.SelfRightCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SelfRightCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SelfRightCommand}
 */
proto.bosdyn.api.SelfRightCommand.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.SelfRightCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SelfRightCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SelfRightCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SelfRightCommand.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.SelfRightCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SelfRightCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SelfRightCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SelfRightCommand.Request.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.SelfRightCommand.Request}
 */
proto.bosdyn.api.SelfRightCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SelfRightCommand.Request;
  return proto.bosdyn.api.SelfRightCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SelfRightCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SelfRightCommand.Request}
 */
proto.bosdyn.api.SelfRightCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.SelfRightCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SelfRightCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SelfRightCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SelfRightCommand.Request.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.SelfRightCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SelfRightCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SelfRightCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SelfRightCommand.Feedback.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.SelfRightCommand.Feedback}
 */
proto.bosdyn.api.SelfRightCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SelfRightCommand.Feedback;
  return proto.bosdyn.api.SelfRightCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SelfRightCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SelfRightCommand.Feedback}
 */
proto.bosdyn.api.SelfRightCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.SelfRightCommand.Feedback.Status} */ (reader.readEnum());
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
proto.bosdyn.api.SelfRightCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SelfRightCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SelfRightCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SelfRightCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.SelfRightCommand.Feedback.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_COMPLETED: 1,
  STATUS_IN_PROGRESS: 2
};

/**
 * optional Status status = 1;
 * @return {!proto.bosdyn.api.SelfRightCommand.Feedback.Status}
 */
proto.bosdyn.api.SelfRightCommand.Feedback.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.SelfRightCommand.Feedback.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.SelfRightCommand.Feedback.Status} value
 * @return {!proto.bosdyn.api.SelfRightCommand.Feedback} returns this
 */
proto.bosdyn.api.SelfRightCommand.Feedback.prototype.setStatus = function(value) {
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
proto.bosdyn.api.StopCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.StopCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.StopCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StopCommand.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.StopCommand}
 */
proto.bosdyn.api.StopCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.StopCommand;
  return proto.bosdyn.api.StopCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.StopCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.StopCommand}
 */
proto.bosdyn.api.StopCommand.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.StopCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.StopCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.StopCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StopCommand.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.StopCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.StopCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.StopCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StopCommand.Request.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.StopCommand.Request}
 */
proto.bosdyn.api.StopCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.StopCommand.Request;
  return proto.bosdyn.api.StopCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.StopCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.StopCommand.Request}
 */
proto.bosdyn.api.StopCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.StopCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.StopCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.StopCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StopCommand.Request.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.StopCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.StopCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.StopCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StopCommand.Feedback.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.StopCommand.Feedback}
 */
proto.bosdyn.api.StopCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.StopCommand.Feedback;
  return proto.bosdyn.api.StopCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.StopCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.StopCommand.Feedback}
 */
proto.bosdyn.api.StopCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.StopCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.StopCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.StopCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StopCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.FreezeCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.FreezeCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.FreezeCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.FreezeCommand.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.FreezeCommand}
 */
proto.bosdyn.api.FreezeCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.FreezeCommand;
  return proto.bosdyn.api.FreezeCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.FreezeCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.FreezeCommand}
 */
proto.bosdyn.api.FreezeCommand.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.FreezeCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.FreezeCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.FreezeCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.FreezeCommand.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.FreezeCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.FreezeCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.FreezeCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.FreezeCommand.Request.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.FreezeCommand.Request}
 */
proto.bosdyn.api.FreezeCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.FreezeCommand.Request;
  return proto.bosdyn.api.FreezeCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.FreezeCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.FreezeCommand.Request}
 */
proto.bosdyn.api.FreezeCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.FreezeCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.FreezeCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.FreezeCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.FreezeCommand.Request.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.FreezeCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.FreezeCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.FreezeCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.FreezeCommand.Feedback.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.FreezeCommand.Feedback}
 */
proto.bosdyn.api.FreezeCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.FreezeCommand.Feedback;
  return proto.bosdyn.api.FreezeCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.FreezeCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.FreezeCommand.Feedback}
 */
proto.bosdyn.api.FreezeCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.FreezeCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.FreezeCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.FreezeCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.FreezeCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.SafePowerOffCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SafePowerOffCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SafePowerOffCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SafePowerOffCommand.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.SafePowerOffCommand}
 */
proto.bosdyn.api.SafePowerOffCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SafePowerOffCommand;
  return proto.bosdyn.api.SafePowerOffCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SafePowerOffCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SafePowerOffCommand}
 */
proto.bosdyn.api.SafePowerOffCommand.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.SafePowerOffCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SafePowerOffCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SafePowerOffCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SafePowerOffCommand.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.SafePowerOffCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SafePowerOffCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SafePowerOffCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SafePowerOffCommand.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    unsafeAction: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.bosdyn.api.SafePowerOffCommand.Request}
 */
proto.bosdyn.api.SafePowerOffCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SafePowerOffCommand.Request;
  return proto.bosdyn.api.SafePowerOffCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SafePowerOffCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SafePowerOffCommand.Request}
 */
proto.bosdyn.api.SafePowerOffCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.SafePowerOffCommand.Request.UnsafeAction} */ (reader.readEnum());
      msg.setUnsafeAction(value);
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
proto.bosdyn.api.SafePowerOffCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SafePowerOffCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SafePowerOffCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SafePowerOffCommand.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnsafeAction();
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
proto.bosdyn.api.SafePowerOffCommand.Request.UnsafeAction = {
  UNSAFE_UNKNOWN: 0,
  UNSAFE_MOVE_TO_SAFE_POSITION: 1,
  UNSAFE_FORCE_COMMAND: 2
};

/**
 * optional UnsafeAction unsafe_action = 1;
 * @return {!proto.bosdyn.api.SafePowerOffCommand.Request.UnsafeAction}
 */
proto.bosdyn.api.SafePowerOffCommand.Request.prototype.getUnsafeAction = function() {
  return /** @type {!proto.bosdyn.api.SafePowerOffCommand.Request.UnsafeAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.SafePowerOffCommand.Request.UnsafeAction} value
 * @return {!proto.bosdyn.api.SafePowerOffCommand.Request} returns this
 */
proto.bosdyn.api.SafePowerOffCommand.Request.prototype.setUnsafeAction = function(value) {
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
proto.bosdyn.api.SafePowerOffCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SafePowerOffCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SafePowerOffCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SafePowerOffCommand.Feedback.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.SafePowerOffCommand.Feedback}
 */
proto.bosdyn.api.SafePowerOffCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SafePowerOffCommand.Feedback;
  return proto.bosdyn.api.SafePowerOffCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SafePowerOffCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SafePowerOffCommand.Feedback}
 */
proto.bosdyn.api.SafePowerOffCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.SafePowerOffCommand.Feedback.Status} */ (reader.readEnum());
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
proto.bosdyn.api.SafePowerOffCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SafePowerOffCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SafePowerOffCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SafePowerOffCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.SafePowerOffCommand.Feedback.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_POWERED_OFF: 1,
  STATUS_IN_PROGRESS: 2
};

/**
 * optional Status status = 1;
 * @return {!proto.bosdyn.api.SafePowerOffCommand.Feedback.Status}
 */
proto.bosdyn.api.SafePowerOffCommand.Feedback.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.SafePowerOffCommand.Feedback.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.SafePowerOffCommand.Feedback.Status} value
 * @return {!proto.bosdyn.api.SafePowerOffCommand.Feedback} returns this
 */
proto.bosdyn.api.SafePowerOffCommand.Feedback.prototype.setStatus = function(value) {
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
proto.bosdyn.api.SE2TrajectoryCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SE2TrajectoryCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SE2TrajectoryCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SE2TrajectoryCommand.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.SE2TrajectoryCommand}
 */
proto.bosdyn.api.SE2TrajectoryCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SE2TrajectoryCommand;
  return proto.bosdyn.api.SE2TrajectoryCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SE2TrajectoryCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SE2TrajectoryCommand}
 */
proto.bosdyn.api.SE2TrajectoryCommand.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.SE2TrajectoryCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SE2TrajectoryCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SE2TrajectoryCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SE2TrajectoryCommand.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.SE2TrajectoryCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SE2TrajectoryCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SE2TrajectoryCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SE2TrajectoryCommand.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    se2FrameName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    trajectory: (f = msg.getTrajectory()) && bosdyn_api_trajectory_pb.SE2Trajectory.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.SE2TrajectoryCommand.Request}
 */
proto.bosdyn.api.SE2TrajectoryCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SE2TrajectoryCommand.Request;
  return proto.bosdyn.api.SE2TrajectoryCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SE2TrajectoryCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SE2TrajectoryCommand.Request}
 */
proto.bosdyn.api.SE2TrajectoryCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSe2FrameName(value);
      break;
    case 2:
      var value = new bosdyn_api_trajectory_pb.SE2Trajectory;
      reader.readMessage(value,bosdyn_api_trajectory_pb.SE2Trajectory.deserializeBinaryFromReader);
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
proto.bosdyn.api.SE2TrajectoryCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SE2TrajectoryCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SE2TrajectoryCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SE2TrajectoryCommand.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSe2FrameName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTrajectory();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_trajectory_pb.SE2Trajectory.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp end_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.SE2TrajectoryCommand.Request.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.SE2TrajectoryCommand.Request} returns this
*/
proto.bosdyn.api.SE2TrajectoryCommand.Request.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.SE2TrajectoryCommand.Request} returns this
 */
proto.bosdyn.api.SE2TrajectoryCommand.Request.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.SE2TrajectoryCommand.Request.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string se2_frame_name = 3;
 * @return {string}
 */
proto.bosdyn.api.SE2TrajectoryCommand.Request.prototype.getSe2FrameName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.SE2TrajectoryCommand.Request} returns this
 */
proto.bosdyn.api.SE2TrajectoryCommand.Request.prototype.setSe2FrameName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional SE2Trajectory trajectory = 2;
 * @return {?proto.bosdyn.api.SE2Trajectory}
 */
proto.bosdyn.api.SE2TrajectoryCommand.Request.prototype.getTrajectory = function() {
  return /** @type{?proto.bosdyn.api.SE2Trajectory} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_trajectory_pb.SE2Trajectory, 2));
};


/**
 * @param {?proto.bosdyn.api.SE2Trajectory|undefined} value
 * @return {!proto.bosdyn.api.SE2TrajectoryCommand.Request} returns this
*/
proto.bosdyn.api.SE2TrajectoryCommand.Request.prototype.setTrajectory = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.SE2TrajectoryCommand.Request} returns this
 */
proto.bosdyn.api.SE2TrajectoryCommand.Request.prototype.clearTrajectory = function() {
  return this.setTrajectory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.SE2TrajectoryCommand.Request.prototype.hasTrajectory = function() {
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
proto.bosdyn.api.SE2TrajectoryCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SE2TrajectoryCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SE2TrajectoryCommand.Feedback.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    bodyMovementStatus: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback}
 */
proto.bosdyn.api.SE2TrajectoryCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SE2TrajectoryCommand.Feedback;
  return proto.bosdyn.api.SE2TrajectoryCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback}
 */
proto.bosdyn.api.SE2TrajectoryCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback.BodyMovementStatus} */ (reader.readEnum());
      msg.setBodyMovementStatus(value);
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
proto.bosdyn.api.SE2TrajectoryCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SE2TrajectoryCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SE2TrajectoryCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBodyMovementStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.SE2TrajectoryCommand.Feedback.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_AT_GOAL: 1,
  STATUS_NEAR_GOAL: 3,
  STATUS_GOING_TO_GOAL: 2
};

/**
 * @enum {number}
 */
proto.bosdyn.api.SE2TrajectoryCommand.Feedback.BodyMovementStatus = {
  BODY_STATUS_UNKNOWN: 0,
  BODY_STATUS_MOVING: 1,
  BODY_STATUS_SETTLED: 2
};

/**
 * optional Status status = 1;
 * @return {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback.Status}
 */
proto.bosdyn.api.SE2TrajectoryCommand.Feedback.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback.Status} value
 * @return {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback} returns this
 */
proto.bosdyn.api.SE2TrajectoryCommand.Feedback.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional BodyMovementStatus body_movement_status = 2;
 * @return {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback.BodyMovementStatus}
 */
proto.bosdyn.api.SE2TrajectoryCommand.Feedback.prototype.getBodyMovementStatus = function() {
  return /** @type {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback.BodyMovementStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback.BodyMovementStatus} value
 * @return {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback} returns this
 */
proto.bosdyn.api.SE2TrajectoryCommand.Feedback.prototype.setBodyMovementStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.bosdyn.api.SE2VelocityCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SE2VelocityCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SE2VelocityCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SE2VelocityCommand.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.SE2VelocityCommand}
 */
proto.bosdyn.api.SE2VelocityCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SE2VelocityCommand;
  return proto.bosdyn.api.SE2VelocityCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SE2VelocityCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SE2VelocityCommand}
 */
proto.bosdyn.api.SE2VelocityCommand.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.SE2VelocityCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SE2VelocityCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SE2VelocityCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SE2VelocityCommand.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.SE2VelocityCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SE2VelocityCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SE2VelocityCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SE2VelocityCommand.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    se2FrameName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    velocity: (f = msg.getVelocity()) && bosdyn_api_geometry_pb.SE2Velocity.toObject(includeInstance, f),
    slewRateLimit: (f = msg.getSlewRateLimit()) && bosdyn_api_geometry_pb.SE2Velocity.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.SE2VelocityCommand.Request}
 */
proto.bosdyn.api.SE2VelocityCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SE2VelocityCommand.Request;
  return proto.bosdyn.api.SE2VelocityCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SE2VelocityCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SE2VelocityCommand.Request}
 */
proto.bosdyn.api.SE2VelocityCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSe2FrameName(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.SE2Velocity;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE2Velocity.deserializeBinaryFromReader);
      msg.setVelocity(value);
      break;
    case 4:
      var value = new bosdyn_api_geometry_pb.SE2Velocity;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE2Velocity.deserializeBinaryFromReader);
      msg.setSlewRateLimit(value);
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
proto.bosdyn.api.SE2VelocityCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SE2VelocityCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SE2VelocityCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SE2VelocityCommand.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSe2FrameName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getVelocity();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.SE2Velocity.serializeBinaryToWriter
    );
  }
  f = message.getSlewRateLimit();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_geometry_pb.SE2Velocity.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp end_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.SE2VelocityCommand.Request.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.SE2VelocityCommand.Request} returns this
*/
proto.bosdyn.api.SE2VelocityCommand.Request.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.SE2VelocityCommand.Request} returns this
 */
proto.bosdyn.api.SE2VelocityCommand.Request.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.SE2VelocityCommand.Request.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string se2_frame_name = 5;
 * @return {string}
 */
proto.bosdyn.api.SE2VelocityCommand.Request.prototype.getSe2FrameName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.SE2VelocityCommand.Request} returns this
 */
proto.bosdyn.api.SE2VelocityCommand.Request.prototype.setSe2FrameName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional SE2Velocity velocity = 2;
 * @return {?proto.bosdyn.api.SE2Velocity}
 */
proto.bosdyn.api.SE2VelocityCommand.Request.prototype.getVelocity = function() {
  return /** @type{?proto.bosdyn.api.SE2Velocity} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE2Velocity, 2));
};


/**
 * @param {?proto.bosdyn.api.SE2Velocity|undefined} value
 * @return {!proto.bosdyn.api.SE2VelocityCommand.Request} returns this
*/
proto.bosdyn.api.SE2VelocityCommand.Request.prototype.setVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.SE2VelocityCommand.Request} returns this
 */
proto.bosdyn.api.SE2VelocityCommand.Request.prototype.clearVelocity = function() {
  return this.setVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.SE2VelocityCommand.Request.prototype.hasVelocity = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SE2Velocity slew_rate_limit = 4;
 * @return {?proto.bosdyn.api.SE2Velocity}
 */
proto.bosdyn.api.SE2VelocityCommand.Request.prototype.getSlewRateLimit = function() {
  return /** @type{?proto.bosdyn.api.SE2Velocity} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE2Velocity, 4));
};


/**
 * @param {?proto.bosdyn.api.SE2Velocity|undefined} value
 * @return {!proto.bosdyn.api.SE2VelocityCommand.Request} returns this
*/
proto.bosdyn.api.SE2VelocityCommand.Request.prototype.setSlewRateLimit = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.SE2VelocityCommand.Request} returns this
 */
proto.bosdyn.api.SE2VelocityCommand.Request.prototype.clearSlewRateLimit = function() {
  return this.setSlewRateLimit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.SE2VelocityCommand.Request.prototype.hasSlewRateLimit = function() {
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
proto.bosdyn.api.SE2VelocityCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SE2VelocityCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SE2VelocityCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SE2VelocityCommand.Feedback.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.SE2VelocityCommand.Feedback}
 */
proto.bosdyn.api.SE2VelocityCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SE2VelocityCommand.Feedback;
  return proto.bosdyn.api.SE2VelocityCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SE2VelocityCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SE2VelocityCommand.Feedback}
 */
proto.bosdyn.api.SE2VelocityCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.SE2VelocityCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SE2VelocityCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SE2VelocityCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SE2VelocityCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.SitCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SitCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SitCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SitCommand.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.SitCommand}
 */
proto.bosdyn.api.SitCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SitCommand;
  return proto.bosdyn.api.SitCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SitCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SitCommand}
 */
proto.bosdyn.api.SitCommand.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.SitCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SitCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SitCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SitCommand.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.SitCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SitCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SitCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SitCommand.Request.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.SitCommand.Request}
 */
proto.bosdyn.api.SitCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SitCommand.Request;
  return proto.bosdyn.api.SitCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SitCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SitCommand.Request}
 */
proto.bosdyn.api.SitCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.SitCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SitCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SitCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SitCommand.Request.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.SitCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SitCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SitCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SitCommand.Feedback.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.bosdyn.api.SitCommand.Feedback}
 */
proto.bosdyn.api.SitCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SitCommand.Feedback;
  return proto.bosdyn.api.SitCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SitCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SitCommand.Feedback}
 */
proto.bosdyn.api.SitCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!proto.bosdyn.api.SitCommand.Feedback.Status} */ (reader.readEnum());
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
proto.bosdyn.api.SitCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SitCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SitCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SitCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.SitCommand.Feedback.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_IS_SITTING: 1,
  STATUS_IN_PROGRESS: 2
};

/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.SitCommand.Feedback.Status}
 */
proto.bosdyn.api.SitCommand.Feedback.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.SitCommand.Feedback.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.SitCommand.Feedback.Status} value
 * @return {!proto.bosdyn.api.SitCommand.Feedback} returns this
 */
proto.bosdyn.api.SitCommand.Feedback.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.bosdyn.api.StandCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.StandCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.StandCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StandCommand.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.StandCommand}
 */
proto.bosdyn.api.StandCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.StandCommand;
  return proto.bosdyn.api.StandCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.StandCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.StandCommand}
 */
proto.bosdyn.api.StandCommand.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.StandCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.StandCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.StandCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StandCommand.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.StandCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.StandCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.StandCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StandCommand.Request.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.StandCommand.Request}
 */
proto.bosdyn.api.StandCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.StandCommand.Request;
  return proto.bosdyn.api.StandCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.StandCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.StandCommand.Request}
 */
proto.bosdyn.api.StandCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.StandCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.StandCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.StandCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StandCommand.Request.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.StandCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.StandCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.StandCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StandCommand.Feedback.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    standingState: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.bosdyn.api.StandCommand.Feedback}
 */
proto.bosdyn.api.StandCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.StandCommand.Feedback;
  return proto.bosdyn.api.StandCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.StandCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.StandCommand.Feedback}
 */
proto.bosdyn.api.StandCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.StandCommand.Feedback.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {!proto.bosdyn.api.StandCommand.Feedback.StandingState} */ (reader.readEnum());
      msg.setStandingState(value);
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
proto.bosdyn.api.StandCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.StandCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.StandCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StandCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStandingState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.StandCommand.Feedback.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_IS_STANDING: 1,
  STATUS_IN_PROGRESS: 2
};

/**
 * @enum {number}
 */
proto.bosdyn.api.StandCommand.Feedback.StandingState = {
  STANDING_UNKNOWN: 0,
  STANDING_CONTROLLED: 1,
  STANDING_FROZEN: 2
};

/**
 * optional Status status = 1;
 * @return {!proto.bosdyn.api.StandCommand.Feedback.Status}
 */
proto.bosdyn.api.StandCommand.Feedback.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.StandCommand.Feedback.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.StandCommand.Feedback.Status} value
 * @return {!proto.bosdyn.api.StandCommand.Feedback} returns this
 */
proto.bosdyn.api.StandCommand.Feedback.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional StandingState standing_state = 2;
 * @return {!proto.bosdyn.api.StandCommand.Feedback.StandingState}
 */
proto.bosdyn.api.StandCommand.Feedback.prototype.getStandingState = function() {
  return /** @type {!proto.bosdyn.api.StandCommand.Feedback.StandingState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.StandCommand.Feedback.StandingState} value
 * @return {!proto.bosdyn.api.StandCommand.Feedback} returns this
 */
proto.bosdyn.api.StandCommand.Feedback.prototype.setStandingState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.bosdyn.api.StanceCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.StanceCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.StanceCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StanceCommand.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.StanceCommand}
 */
proto.bosdyn.api.StanceCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.StanceCommand;
  return proto.bosdyn.api.StanceCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.StanceCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.StanceCommand}
 */
proto.bosdyn.api.StanceCommand.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.StanceCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.StanceCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.StanceCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StanceCommand.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.StanceCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.StanceCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.StanceCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StanceCommand.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    stance: (f = msg.getStance()) && proto.bosdyn.api.Stance.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.StanceCommand.Request}
 */
proto.bosdyn.api.StanceCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.StanceCommand.Request;
  return proto.bosdyn.api.StanceCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.StanceCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.StanceCommand.Request}
 */
proto.bosdyn.api.StanceCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.Stance;
      reader.readMessage(value,proto.bosdyn.api.Stance.deserializeBinaryFromReader);
      msg.setStance(value);
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
proto.bosdyn.api.StanceCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.StanceCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.StanceCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StanceCommand.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.Stance.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp end_time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.StanceCommand.Request.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.StanceCommand.Request} returns this
*/
proto.bosdyn.api.StanceCommand.Request.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.StanceCommand.Request} returns this
 */
proto.bosdyn.api.StanceCommand.Request.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.StanceCommand.Request.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Stance stance = 2;
 * @return {?proto.bosdyn.api.Stance}
 */
proto.bosdyn.api.StanceCommand.Request.prototype.getStance = function() {
  return /** @type{?proto.bosdyn.api.Stance} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Stance, 2));
};


/**
 * @param {?proto.bosdyn.api.Stance|undefined} value
 * @return {!proto.bosdyn.api.StanceCommand.Request} returns this
*/
proto.bosdyn.api.StanceCommand.Request.prototype.setStance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.StanceCommand.Request} returns this
 */
proto.bosdyn.api.StanceCommand.Request.prototype.clearStance = function() {
  return this.setStance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.StanceCommand.Request.prototype.hasStance = function() {
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
proto.bosdyn.api.StanceCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.StanceCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.StanceCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StanceCommand.Feedback.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.StanceCommand.Feedback}
 */
proto.bosdyn.api.StanceCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.StanceCommand.Feedback;
  return proto.bosdyn.api.StanceCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.StanceCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.StanceCommand.Feedback}
 */
proto.bosdyn.api.StanceCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.StanceCommand.Feedback.Status} */ (reader.readEnum());
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
proto.bosdyn.api.StanceCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.StanceCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.StanceCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StanceCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.StanceCommand.Feedback.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_STANCED: 1,
  STATUS_GOING_TO_STANCE: 2,
  STATUS_TOO_FAR_AWAY: 3
};

/**
 * optional Status status = 1;
 * @return {!proto.bosdyn.api.StanceCommand.Feedback.Status}
 */
proto.bosdyn.api.StanceCommand.Feedback.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.StanceCommand.Feedback.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.StanceCommand.Feedback.Status} value
 * @return {!proto.bosdyn.api.StanceCommand.Feedback} returns this
 */
proto.bosdyn.api.StanceCommand.Feedback.prototype.setStatus = function(value) {
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
proto.bosdyn.api.Stance.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.Stance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.Stance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.Stance.toObject = function(includeInstance, msg) {
  var f, obj = {
    se2FrameName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    footPositionsMap: (f = msg.getFootPositionsMap()) ? f.toObject(includeInstance, proto.bosdyn.api.Vec2.toObject) : [],
    accuracy: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.bosdyn.api.Stance}
 */
proto.bosdyn.api.Stance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.Stance;
  return proto.bosdyn.api.Stance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.Stance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.Stance}
 */
proto.bosdyn.api.Stance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSe2FrameName(value);
      break;
    case 2:
      var value = msg.getFootPositionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bosdyn.api.Vec2.deserializeBinaryFromReader, "", new proto.bosdyn.api.Vec2());
         });
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAccuracy(value);
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
proto.bosdyn.api.Stance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.Stance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.Stance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.Stance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSe2FrameName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFootPositionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bosdyn.api.Vec2.serializeBinaryToWriter);
  }
  f = message.getAccuracy();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional string se2_frame_name = 3;
 * @return {string}
 */
proto.bosdyn.api.Stance.prototype.getSe2FrameName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.Stance} returns this
 */
proto.bosdyn.api.Stance.prototype.setSe2FrameName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, Vec2> foot_positions = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bosdyn.api.Vec2>}
 */
proto.bosdyn.api.Stance.prototype.getFootPositionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bosdyn.api.Vec2>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.bosdyn.api.Vec2));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bosdyn.api.Stance} returns this
 */
proto.bosdyn.api.Stance.prototype.clearFootPositionsMap = function() {
  this.getFootPositionsMap().clear();
  return this;};


/**
 * optional float accuracy = 4;
 * @return {number}
 */
proto.bosdyn.api.Stance.prototype.getAccuracy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.Stance} returns this
 */
proto.bosdyn.api.Stance.prototype.setAccuracy = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
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
proto.bosdyn.api.FollowArmCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.FollowArmCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.FollowArmCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.FollowArmCommand.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.FollowArmCommand}
 */
proto.bosdyn.api.FollowArmCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.FollowArmCommand;
  return proto.bosdyn.api.FollowArmCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.FollowArmCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.FollowArmCommand}
 */
proto.bosdyn.api.FollowArmCommand.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.FollowArmCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.FollowArmCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.FollowArmCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.FollowArmCommand.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.FollowArmCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.FollowArmCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.FollowArmCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.FollowArmCommand.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    bodyOffsetFromHand: (f = msg.getBodyOffsetFromHand()) && bosdyn_api_geometry_pb.Vec3.toObject(includeInstance, f),
    disableWalking: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.bosdyn.api.FollowArmCommand.Request}
 */
proto.bosdyn.api.FollowArmCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.FollowArmCommand.Request;
  return proto.bosdyn.api.FollowArmCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.FollowArmCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.FollowArmCommand.Request}
 */
proto.bosdyn.api.FollowArmCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.Vec3;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3.deserializeBinaryFromReader);
      msg.setBodyOffsetFromHand(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableWalking(value);
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
proto.bosdyn.api.FollowArmCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.FollowArmCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.FollowArmCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.FollowArmCommand.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBodyOffsetFromHand();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.Vec3.serializeBinaryToWriter
    );
  }
  f = message.getDisableWalking();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Vec3 body_offset_from_hand = 1;
 * @return {?proto.bosdyn.api.Vec3}
 */
proto.bosdyn.api.FollowArmCommand.Request.prototype.getBodyOffsetFromHand = function() {
  return /** @type{?proto.bosdyn.api.Vec3} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3, 1));
};


/**
 * @param {?proto.bosdyn.api.Vec3|undefined} value
 * @return {!proto.bosdyn.api.FollowArmCommand.Request} returns this
*/
proto.bosdyn.api.FollowArmCommand.Request.prototype.setBodyOffsetFromHand = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.FollowArmCommand.Request} returns this
 */
proto.bosdyn.api.FollowArmCommand.Request.prototype.clearBodyOffsetFromHand = function() {
  return this.setBodyOffsetFromHand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.FollowArmCommand.Request.prototype.hasBodyOffsetFromHand = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool disable_walking = 2;
 * @return {boolean}
 */
proto.bosdyn.api.FollowArmCommand.Request.prototype.getDisableWalking = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.FollowArmCommand.Request} returns this
 */
proto.bosdyn.api.FollowArmCommand.Request.prototype.setDisableWalking = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.bosdyn.api.FollowArmCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.FollowArmCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.FollowArmCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.FollowArmCommand.Feedback.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.FollowArmCommand.Feedback}
 */
proto.bosdyn.api.FollowArmCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.FollowArmCommand.Feedback;
  return proto.bosdyn.api.FollowArmCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.FollowArmCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.FollowArmCommand.Feedback}
 */
proto.bosdyn.api.FollowArmCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.FollowArmCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.FollowArmCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.FollowArmCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.FollowArmCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.ArmDragCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmDragCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmDragCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmDragCommand.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.ArmDragCommand}
 */
proto.bosdyn.api.ArmDragCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmDragCommand;
  return proto.bosdyn.api.ArmDragCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmDragCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmDragCommand}
 */
proto.bosdyn.api.ArmDragCommand.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.ArmDragCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmDragCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmDragCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmDragCommand.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.ArmDragCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmDragCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmDragCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmDragCommand.Request.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.ArmDragCommand.Request}
 */
proto.bosdyn.api.ArmDragCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmDragCommand.Request;
  return proto.bosdyn.api.ArmDragCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmDragCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmDragCommand.Request}
 */
proto.bosdyn.api.ArmDragCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.ArmDragCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmDragCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmDragCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmDragCommand.Request.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.ArmDragCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ArmDragCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ArmDragCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmDragCommand.Feedback.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.ArmDragCommand.Feedback}
 */
proto.bosdyn.api.ArmDragCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ArmDragCommand.Feedback;
  return proto.bosdyn.api.ArmDragCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ArmDragCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ArmDragCommand.Feedback}
 */
proto.bosdyn.api.ArmDragCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.ArmDragCommand.Feedback.Status} */ (reader.readEnum());
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
proto.bosdyn.api.ArmDragCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ArmDragCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ArmDragCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ArmDragCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.ArmDragCommand.Feedback.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_DRAGGING: 1,
  STATUS_GRASP_FAILED: 2,
  STATUS_OTHER_FAILURE: 3
};

/**
 * optional Status status = 1;
 * @return {!proto.bosdyn.api.ArmDragCommand.Feedback.Status}
 */
proto.bosdyn.api.ArmDragCommand.Feedback.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.ArmDragCommand.Feedback.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.ArmDragCommand.Feedback.Status} value
 * @return {!proto.bosdyn.api.ArmDragCommand.Feedback} returns this
 */
proto.bosdyn.api.ArmDragCommand.Feedback.prototype.setStatus = function(value) {
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
proto.bosdyn.api.ConstrainedManipulationCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ConstrainedManipulationCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ConstrainedManipulationCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ConstrainedManipulationCommand.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ConstrainedManipulationCommand;
  return proto.bosdyn.api.ConstrainedManipulationCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ConstrainedManipulationCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.ConstrainedManipulationCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ConstrainedManipulationCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ConstrainedManipulationCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ConstrainedManipulationCommand.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.ConstrainedManipulationCommand.Request.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.TaskSpeedCase = {
  TASK_SPEED_NOT_SET: 0,
  TANGENTIAL_SPEED: 3,
  ROTATIONAL_SPEED: 4
};

/**
 * @return {proto.bosdyn.api.ConstrainedManipulationCommand.Request.TaskSpeedCase}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.getTaskSpeedCase = function() {
  return /** @type {proto.bosdyn.api.ConstrainedManipulationCommand.Request.TaskSpeedCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.ConstrainedManipulationCommand.Request.oneofGroups_[0]));
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
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ConstrainedManipulationCommand.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    frameName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    initWrenchDirectionInFrameName: (f = msg.getInitWrenchDirectionInFrameName()) && bosdyn_api_geometry_pb.Wrench.toObject(includeInstance, f),
    tangentialSpeed: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    rotationalSpeed: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    forceLimit: (f = msg.getForceLimit()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    torqueLimit: (f = msg.getTorqueLimit()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    taskType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    enableRobotLocomotion: (f = msg.getEnableRobotLocomotion()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ConstrainedManipulationCommand.Request;
  return proto.bosdyn.api.ConstrainedManipulationCommand.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new bosdyn_api_geometry_pb.Wrench;
      reader.readMessage(value,bosdyn_api_geometry_pb.Wrench.deserializeBinaryFromReader);
      msg.setInitWrenchDirectionInFrameName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTangentialSpeed(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRotationalSpeed(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setForceLimit(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setTorqueLimit(value);
      break;
    case 7:
      var value = /** @type {!proto.bosdyn.api.ConstrainedManipulationCommand.Request.TaskType} */ (reader.readEnum());
      msg.setTaskType(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setEnableRobotLocomotion(value);
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
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ConstrainedManipulationCommand.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrameName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInitWrenchDirectionInFrameName();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.Wrench.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getForceLimit();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getTorqueLimit();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getTaskType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEnableRobotLocomotion();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.TaskType = {
  TASK_TYPE_UNKNOWN: 0,
  TASK_TYPE_SE3_CIRCLE_FORCE_TORQUE: 1,
  TASK_TYPE_R3_CIRCLE_EXTRADOF_FORCE: 2,
  TASK_TYPE_SE3_ROTATIONAL_TORQUE: 3,
  TASK_TYPE_R3_CIRCLE_FORCE: 4,
  TASK_TYPE_R3_LINEAR_FORCE: 5,
  TASK_TYPE_HOLD_POSE: 6
};

/**
 * optional string frame_name = 1;
 * @return {string}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.getFrameName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} returns this
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.setFrameName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Wrench init_wrench_direction_in_frame_name = 2;
 * @return {?proto.bosdyn.api.Wrench}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.getInitWrenchDirectionInFrameName = function() {
  return /** @type{?proto.bosdyn.api.Wrench} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Wrench, 2));
};


/**
 * @param {?proto.bosdyn.api.Wrench|undefined} value
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} returns this
*/
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.setInitWrenchDirectionInFrameName = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} returns this
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.clearInitWrenchDirectionInFrameName = function() {
  return this.setInitWrenchDirectionInFrameName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.hasInitWrenchDirectionInFrameName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double tangential_speed = 3;
 * @return {number}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.getTangentialSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} returns this
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.setTangentialSpeed = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.bosdyn.api.ConstrainedManipulationCommand.Request.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} returns this
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.clearTangentialSpeed = function() {
  return jspb.Message.setOneofField(this, 3, proto.bosdyn.api.ConstrainedManipulationCommand.Request.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.hasTangentialSpeed = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double rotational_speed = 4;
 * @return {number}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.getRotationalSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} returns this
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.setRotationalSpeed = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.bosdyn.api.ConstrainedManipulationCommand.Request.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} returns this
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.clearRotationalSpeed = function() {
  return jspb.Message.setOneofField(this, 4, proto.bosdyn.api.ConstrainedManipulationCommand.Request.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.hasRotationalSpeed = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue force_limit = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.getForceLimit = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} returns this
*/
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.setForceLimit = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} returns this
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.clearForceLimit = function() {
  return this.setForceLimit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.hasForceLimit = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue torque_limit = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.getTorqueLimit = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} returns this
*/
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.setTorqueLimit = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} returns this
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.clearTorqueLimit = function() {
  return this.setTorqueLimit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.hasTorqueLimit = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional TaskType task_type = 7;
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request.TaskType}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.getTaskType = function() {
  return /** @type {!proto.bosdyn.api.ConstrainedManipulationCommand.Request.TaskType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.bosdyn.api.ConstrainedManipulationCommand.Request.TaskType} value
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} returns this
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.setTaskType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp end_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} returns this
*/
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} returns this
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.BoolValue enable_robot_locomotion = 9;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.getEnableRobotLocomotion = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 9));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} returns this
*/
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.setEnableRobotLocomotion = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Request} returns this
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.clearEnableRobotLocomotion = function() {
  return this.setEnableRobotLocomotion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Request.prototype.hasEnableRobotLocomotion = function() {
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
proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ConstrainedManipulationCommand.Feedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    desiredWrenchOdomFrame: (f = msg.getDesiredWrenchOdomFrame()) && bosdyn_api_geometry_pb.Wrench.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Feedback}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ConstrainedManipulationCommand.Feedback;
  return proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ConstrainedManipulationCommand.Feedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Feedback}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.Wrench;
      reader.readMessage(value,bosdyn_api_geometry_pb.Wrench.deserializeBinaryFromReader);
      msg.setDesiredWrenchOdomFrame(value);
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
proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ConstrainedManipulationCommand.Feedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDesiredWrenchOdomFrame();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.Wrench.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_RUNNING: 1,
  STATUS_ARM_IS_STUCK: 2,
  STATUS_GRASP_IS_LOST: 3
};

/**
 * optional Status status = 1;
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.Status}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.Status} value
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Feedback} returns this
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Wrench desired_wrench_odom_frame = 2;
 * @return {?proto.bosdyn.api.Wrench}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.prototype.getDesiredWrenchOdomFrame = function() {
  return /** @type{?proto.bosdyn.api.Wrench} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Wrench, 2));
};


/**
 * @param {?proto.bosdyn.api.Wrench|undefined} value
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Feedback} returns this
*/
proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.prototype.setDesiredWrenchOdomFrame = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ConstrainedManipulationCommand.Feedback} returns this
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.prototype.clearDesiredWrenchOdomFrame = function() {
  return this.setDesiredWrenchOdomFrame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ConstrainedManipulationCommand.Feedback.prototype.hasDesiredWrenchOdomFrame = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.bosdyn.api);

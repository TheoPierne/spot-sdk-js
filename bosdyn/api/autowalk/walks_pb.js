// source: bosdyn/api/autowalk/walks.proto
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

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var bosdyn_api_mission_nodes_pb = require('../../../bosdyn/api/mission/nodes_pb.js');
goog.object.extend(proto, bosdyn_api_mission_nodes_pb);
var bosdyn_api_mission_util_pb = require('../../../bosdyn/api/mission/util_pb.js');
goog.object.extend(proto, bosdyn_api_mission_util_pb);
var bosdyn_api_data_acquisition_pb = require('../../../bosdyn/api/data_acquisition_pb.js');
goog.object.extend(proto, bosdyn_api_data_acquisition_pb);
var bosdyn_api_graph_nav_graph_nav_pb = require('../../../bosdyn/api/graph_nav/graph_nav_pb.js');
goog.object.extend(proto, bosdyn_api_graph_nav_graph_nav_pb);
var bosdyn_api_graph_nav_nav_pb = require('../../../bosdyn/api/graph_nav/nav_pb.js');
goog.object.extend(proto, bosdyn_api_graph_nav_nav_pb);
var bosdyn_api_gripper_command_pb = require('../../../bosdyn/api/gripper_command_pb.js');
goog.object.extend(proto, bosdyn_api_gripper_command_pb);
var bosdyn_api_geometry_pb = require('../../../bosdyn/api/geometry_pb.js');
goog.object.extend(proto, bosdyn_api_geometry_pb);
var bosdyn_api_image_pb = require('../../../bosdyn/api/image_pb.js');
goog.object.extend(proto, bosdyn_api_image_pb);
var bosdyn_api_service_customization_pb = require('../../../bosdyn/api/service_customization_pb.js');
goog.object.extend(proto, bosdyn_api_service_customization_pb);
var bosdyn_api_trajectory_pb = require('../../../bosdyn/api/trajectory_pb.js');
goog.object.extend(proto, bosdyn_api_trajectory_pb);
var bosdyn_api_spot_cam_ptz_pb = require('../../../bosdyn/api/spot_cam/ptz_pb.js');
goog.object.extend(proto, bosdyn_api_spot_cam_ptz_pb);
var bosdyn_api_spot_robot_command_pb = require('../../../bosdyn/api/spot/robot_command_pb.js');
goog.object.extend(proto, bosdyn_api_spot_robot_command_pb);
var bosdyn_api_arm_command_pb = require('../../../bosdyn/api/arm_command_pb.js');
goog.object.extend(proto, bosdyn_api_arm_command_pb);
var bosdyn_api_basic_command_pb = require('../../../bosdyn/api/basic_command_pb.js');
goog.object.extend(proto, bosdyn_api_basic_command_pb);
var bosdyn_api_gripper_camera_param_pb = require('../../../bosdyn/api/gripper_camera_param_pb.js');
goog.object.extend(proto, bosdyn_api_gripper_camera_param_pb);
goog.exportSymbol('proto.bosdyn.api.autowalk.Action', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.Action.ActionCase', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.Action.DataAcquisition', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.Action.RemoteGrpc', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.Action.Sleep', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.ActionWrapper', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.ReferenceCase', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.BatteryMonitor', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.Dock', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.Element', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.FailureBehavior', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.FailureBehavior.DefaultBehaviorCase', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.GlobalParameters', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.PlaybackMode', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.PlaybackMode.Continuous', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.PlaybackMode.ModeCase', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.PlaybackMode.Once', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.PlaybackMode.Periodic', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.Target', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.Target.NavigateRoute', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.Target.NavigateTo', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.Target.Relocalize', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.Target.TargetCase', null, global);
goog.exportSymbol('proto.bosdyn.api.autowalk.Walk', null, global);
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
proto.bosdyn.api.autowalk.Walk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.autowalk.Walk.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.autowalk.Walk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.Walk.displayName = 'proto.bosdyn.api.autowalk.Walk';
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
proto.bosdyn.api.autowalk.GlobalParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.autowalk.GlobalParameters.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.autowalk.GlobalParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.GlobalParameters.displayName = 'proto.bosdyn.api.autowalk.GlobalParameters';
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
proto.bosdyn.api.autowalk.Dock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.Dock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.Dock.displayName = 'proto.bosdyn.api.autowalk.Dock';
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
proto.bosdyn.api.autowalk.PlaybackMode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.autowalk.PlaybackMode.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.autowalk.PlaybackMode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.PlaybackMode.displayName = 'proto.bosdyn.api.autowalk.PlaybackMode';
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
proto.bosdyn.api.autowalk.PlaybackMode.Once = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.PlaybackMode.Once, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.PlaybackMode.Once.displayName = 'proto.bosdyn.api.autowalk.PlaybackMode.Once';
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
proto.bosdyn.api.autowalk.PlaybackMode.Periodic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.PlaybackMode.Periodic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.PlaybackMode.Periodic.displayName = 'proto.bosdyn.api.autowalk.PlaybackMode.Periodic';
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
proto.bosdyn.api.autowalk.PlaybackMode.Continuous = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.PlaybackMode.Continuous, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.PlaybackMode.Continuous.displayName = 'proto.bosdyn.api.autowalk.PlaybackMode.Continuous';
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
proto.bosdyn.api.autowalk.Element = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.Element, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.Element.displayName = 'proto.bosdyn.api.autowalk.Element';
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
proto.bosdyn.api.autowalk.Target = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.autowalk.Target.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.autowalk.Target, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.Target.displayName = 'proto.bosdyn.api.autowalk.Target';
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
proto.bosdyn.api.autowalk.Target.Relocalize = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.Target.Relocalize, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.Target.Relocalize.displayName = 'proto.bosdyn.api.autowalk.Target.Relocalize';
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
proto.bosdyn.api.autowalk.Target.NavigateTo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.Target.NavigateTo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.Target.NavigateTo.displayName = 'proto.bosdyn.api.autowalk.Target.NavigateTo';
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
proto.bosdyn.api.autowalk.Target.NavigateRoute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.Target.NavigateRoute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.Target.NavigateRoute.displayName = 'proto.bosdyn.api.autowalk.Target.NavigateRoute';
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
proto.bosdyn.api.autowalk.Action = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.autowalk.Action.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.autowalk.Action, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.Action.displayName = 'proto.bosdyn.api.autowalk.Action';
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
proto.bosdyn.api.autowalk.Action.Sleep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.Action.Sleep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.Action.Sleep.displayName = 'proto.bosdyn.api.autowalk.Action.Sleep';
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
proto.bosdyn.api.autowalk.Action.DataAcquisition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.autowalk.Action.DataAcquisition.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.autowalk.Action.DataAcquisition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.Action.DataAcquisition.displayName = 'proto.bosdyn.api.autowalk.Action.DataAcquisition';
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
proto.bosdyn.api.autowalk.Action.RemoteGrpc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.autowalk.Action.RemoteGrpc.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.autowalk.Action.RemoteGrpc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.Action.RemoteGrpc.displayName = 'proto.bosdyn.api.autowalk.Action.RemoteGrpc';
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
proto.bosdyn.api.autowalk.ActionWrapper = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.ActionWrapper, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.ActionWrapper.displayName = 'proto.bosdyn.api.autowalk.ActionWrapper';
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
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit.displayName = 'proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit';
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
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose.displayName = 'proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose';
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
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed.displayName = 'proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed';
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
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz.displayName = 'proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz';
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
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.displayName = 'proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment';
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
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.displayName = 'proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment';
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
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.displayName = 'proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing';
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
proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams.displayName = 'proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams';
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
proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand.displayName = 'proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand';
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
proto.bosdyn.api.autowalk.FailureBehavior = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.autowalk.FailureBehavior.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.autowalk.FailureBehavior, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.FailureBehavior.displayName = 'proto.bosdyn.api.autowalk.FailureBehavior';
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
proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff.displayName = 'proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff';
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
proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble.displayName = 'proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble';
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
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater.displayName = 'proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater';
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
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate.displayName = 'proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate';
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
proto.bosdyn.api.autowalk.BatteryMonitor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.autowalk.BatteryMonitor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.autowalk.BatteryMonitor.displayName = 'proto.bosdyn.api.autowalk.BatteryMonitor';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.autowalk.Walk.repeatedFields_ = [5,6];



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
proto.bosdyn.api.autowalk.Walk.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.Walk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.Walk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Walk.toObject = function(includeInstance, msg) {
  var f, obj = {
    globalParameters: (f = msg.getGlobalParameters()) && proto.bosdyn.api.autowalk.GlobalParameters.toObject(includeInstance, f),
    playbackMode: (f = msg.getPlaybackMode()) && proto.bosdyn.api.autowalk.PlaybackMode.toObject(includeInstance, f),
    mapName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    missionName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.bosdyn.api.autowalk.Element.toObject, includeInstance),
    docksList: jspb.Message.toObjectList(msg.getDocksList(),
    proto.bosdyn.api.autowalk.Dock.toObject, includeInstance),
    id: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.bosdyn.api.autowalk.Walk}
 */
proto.bosdyn.api.autowalk.Walk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.Walk;
  return proto.bosdyn.api.autowalk.Walk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.Walk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.Walk}
 */
proto.bosdyn.api.autowalk.Walk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.autowalk.GlobalParameters;
      reader.readMessage(value,proto.bosdyn.api.autowalk.GlobalParameters.deserializeBinaryFromReader);
      msg.setGlobalParameters(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.autowalk.PlaybackMode;
      reader.readMessage(value,proto.bosdyn.api.autowalk.PlaybackMode.deserializeBinaryFromReader);
      msg.setPlaybackMode(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMapName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMissionName(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.autowalk.Element;
      reader.readMessage(value,proto.bosdyn.api.autowalk.Element.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.autowalk.Dock;
      reader.readMessage(value,proto.bosdyn.api.autowalk.Dock.deserializeBinaryFromReader);
      msg.addDocks(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.bosdyn.api.autowalk.Walk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.Walk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.Walk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Walk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGlobalParameters();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.autowalk.GlobalParameters.serializeBinaryToWriter
    );
  }
  f = message.getPlaybackMode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.autowalk.PlaybackMode.serializeBinaryToWriter
    );
  }
  f = message.getMapName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMissionName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.bosdyn.api.autowalk.Element.serializeBinaryToWriter
    );
  }
  f = message.getDocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.bosdyn.api.autowalk.Dock.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional GlobalParameters global_parameters = 1;
 * @return {?proto.bosdyn.api.autowalk.GlobalParameters}
 */
proto.bosdyn.api.autowalk.Walk.prototype.getGlobalParameters = function() {
  return /** @type{?proto.bosdyn.api.autowalk.GlobalParameters} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.GlobalParameters, 1));
};


/**
 * @param {?proto.bosdyn.api.autowalk.GlobalParameters|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Walk} returns this
*/
proto.bosdyn.api.autowalk.Walk.prototype.setGlobalParameters = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Walk} returns this
 */
proto.bosdyn.api.autowalk.Walk.prototype.clearGlobalParameters = function() {
  return this.setGlobalParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Walk.prototype.hasGlobalParameters = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PlaybackMode playback_mode = 2;
 * @return {?proto.bosdyn.api.autowalk.PlaybackMode}
 */
proto.bosdyn.api.autowalk.Walk.prototype.getPlaybackMode = function() {
  return /** @type{?proto.bosdyn.api.autowalk.PlaybackMode} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.PlaybackMode, 2));
};


/**
 * @param {?proto.bosdyn.api.autowalk.PlaybackMode|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Walk} returns this
*/
proto.bosdyn.api.autowalk.Walk.prototype.setPlaybackMode = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Walk} returns this
 */
proto.bosdyn.api.autowalk.Walk.prototype.clearPlaybackMode = function() {
  return this.setPlaybackMode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Walk.prototype.hasPlaybackMode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string map_name = 7;
 * @return {string}
 */
proto.bosdyn.api.autowalk.Walk.prototype.getMapName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.autowalk.Walk} returns this
 */
proto.bosdyn.api.autowalk.Walk.prototype.setMapName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string mission_name = 4;
 * @return {string}
 */
proto.bosdyn.api.autowalk.Walk.prototype.getMissionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.autowalk.Walk} returns this
 */
proto.bosdyn.api.autowalk.Walk.prototype.setMissionName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Element elements = 5;
 * @return {!Array<!proto.bosdyn.api.autowalk.Element>}
 */
proto.bosdyn.api.autowalk.Walk.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.autowalk.Element>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.autowalk.Element, 5));
};


/**
 * @param {!Array<!proto.bosdyn.api.autowalk.Element>} value
 * @return {!proto.bosdyn.api.autowalk.Walk} returns this
*/
proto.bosdyn.api.autowalk.Walk.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.bosdyn.api.autowalk.Element=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.autowalk.Element}
 */
proto.bosdyn.api.autowalk.Walk.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.bosdyn.api.autowalk.Element, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.autowalk.Walk} returns this
 */
proto.bosdyn.api.autowalk.Walk.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


/**
 * repeated Dock docks = 6;
 * @return {!Array<!proto.bosdyn.api.autowalk.Dock>}
 */
proto.bosdyn.api.autowalk.Walk.prototype.getDocksList = function() {
  return /** @type{!Array<!proto.bosdyn.api.autowalk.Dock>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.autowalk.Dock, 6));
};


/**
 * @param {!Array<!proto.bosdyn.api.autowalk.Dock>} value
 * @return {!proto.bosdyn.api.autowalk.Walk} returns this
*/
proto.bosdyn.api.autowalk.Walk.prototype.setDocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.bosdyn.api.autowalk.Dock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.autowalk.Dock}
 */
proto.bosdyn.api.autowalk.Walk.prototype.addDocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.bosdyn.api.autowalk.Dock, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.autowalk.Walk} returns this
 */
proto.bosdyn.api.autowalk.Walk.prototype.clearDocksList = function() {
  return this.setDocksList([]);
};


/**
 * optional string id = 8;
 * @return {string}
 */
proto.bosdyn.api.autowalk.Walk.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.autowalk.Walk} returns this
 */
proto.bosdyn.api.autowalk.Walk.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.autowalk.GlobalParameters.repeatedFields_ = [4];



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
proto.bosdyn.api.autowalk.GlobalParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.GlobalParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.GlobalParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.GlobalParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    shouldAutofocusPtz: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    selfRightAttempts: jspb.Message.getFieldWithDefault(msg, 3, 0),
    postMissionCallbacksList: jspb.Message.toObjectList(msg.getPostMissionCallbacksList(),
    proto.bosdyn.api.autowalk.Action.RemoteGrpc.toObject, includeInstance),
    skipActions: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.bosdyn.api.autowalk.GlobalParameters}
 */
proto.bosdyn.api.autowalk.GlobalParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.GlobalParameters;
  return proto.bosdyn.api.autowalk.GlobalParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.GlobalParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.GlobalParameters}
 */
proto.bosdyn.api.autowalk.GlobalParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShouldAutofocusPtz(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSelfRightAttempts(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.autowalk.Action.RemoteGrpc;
      reader.readMessage(value,proto.bosdyn.api.autowalk.Action.RemoteGrpc.deserializeBinaryFromReader);
      msg.addPostMissionCallbacks(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipActions(value);
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
proto.bosdyn.api.autowalk.GlobalParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.GlobalParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.GlobalParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.GlobalParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShouldAutofocusPtz();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSelfRightAttempts();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPostMissionCallbacksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.bosdyn.api.autowalk.Action.RemoteGrpc.serializeBinaryToWriter
    );
  }
  f = message.getSkipActions();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string group_name = 1;
 * @return {string}
 */
proto.bosdyn.api.autowalk.GlobalParameters.prototype.getGroupName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.autowalk.GlobalParameters} returns this
 */
proto.bosdyn.api.autowalk.GlobalParameters.prototype.setGroupName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool should_autofocus_ptz = 2;
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.GlobalParameters.prototype.getShouldAutofocusPtz = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.autowalk.GlobalParameters} returns this
 */
proto.bosdyn.api.autowalk.GlobalParameters.prototype.setShouldAutofocusPtz = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 self_right_attempts = 3;
 * @return {number}
 */
proto.bosdyn.api.autowalk.GlobalParameters.prototype.getSelfRightAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.autowalk.GlobalParameters} returns this
 */
proto.bosdyn.api.autowalk.GlobalParameters.prototype.setSelfRightAttempts = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated Action.RemoteGrpc post_mission_callbacks = 4;
 * @return {!Array<!proto.bosdyn.api.autowalk.Action.RemoteGrpc>}
 */
proto.bosdyn.api.autowalk.GlobalParameters.prototype.getPostMissionCallbacksList = function() {
  return /** @type{!Array<!proto.bosdyn.api.autowalk.Action.RemoteGrpc>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.autowalk.Action.RemoteGrpc, 4));
};


/**
 * @param {!Array<!proto.bosdyn.api.autowalk.Action.RemoteGrpc>} value
 * @return {!proto.bosdyn.api.autowalk.GlobalParameters} returns this
*/
proto.bosdyn.api.autowalk.GlobalParameters.prototype.setPostMissionCallbacksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bosdyn.api.autowalk.Action.RemoteGrpc=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.autowalk.Action.RemoteGrpc}
 */
proto.bosdyn.api.autowalk.GlobalParameters.prototype.addPostMissionCallbacks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bosdyn.api.autowalk.Action.RemoteGrpc, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.autowalk.GlobalParameters} returns this
 */
proto.bosdyn.api.autowalk.GlobalParameters.prototype.clearPostMissionCallbacksList = function() {
  return this.setPostMissionCallbacksList([]);
};


/**
 * optional bool skip_actions = 5;
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.GlobalParameters.prototype.getSkipActions = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.autowalk.GlobalParameters} returns this
 */
proto.bosdyn.api.autowalk.GlobalParameters.prototype.setSkipActions = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.bosdyn.api.autowalk.Dock.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.Dock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.Dock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Dock.toObject = function(includeInstance, msg) {
  var f, obj = {
    dockId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dockedWaypointId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    targetPrepPose: (f = msg.getTargetPrepPose()) && proto.bosdyn.api.autowalk.Target.toObject(includeInstance, f),
    promptDuration: (f = msg.getPromptDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.autowalk.Dock}
 */
proto.bosdyn.api.autowalk.Dock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.Dock;
  return proto.bosdyn.api.autowalk.Dock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.Dock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.Dock}
 */
proto.bosdyn.api.autowalk.Dock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDockId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDockedWaypointId(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.autowalk.Target;
      reader.readMessage(value,proto.bosdyn.api.autowalk.Target.deserializeBinaryFromReader);
      msg.setTargetPrepPose(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setPromptDuration(value);
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
proto.bosdyn.api.autowalk.Dock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.Dock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.Dock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Dock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDockId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDockedWaypointId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTargetPrepPose();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.autowalk.Target.serializeBinaryToWriter
    );
  }
  f = message.getPromptDuration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 dock_id = 1;
 * @return {number}
 */
proto.bosdyn.api.autowalk.Dock.prototype.getDockId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.autowalk.Dock} returns this
 */
proto.bosdyn.api.autowalk.Dock.prototype.setDockId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string docked_waypoint_id = 2;
 * @return {string}
 */
proto.bosdyn.api.autowalk.Dock.prototype.getDockedWaypointId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.autowalk.Dock} returns this
 */
proto.bosdyn.api.autowalk.Dock.prototype.setDockedWaypointId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Target target_prep_pose = 3;
 * @return {?proto.bosdyn.api.autowalk.Target}
 */
proto.bosdyn.api.autowalk.Dock.prototype.getTargetPrepPose = function() {
  return /** @type{?proto.bosdyn.api.autowalk.Target} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.Target, 3));
};


/**
 * @param {?proto.bosdyn.api.autowalk.Target|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Dock} returns this
*/
proto.bosdyn.api.autowalk.Dock.prototype.setTargetPrepPose = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Dock} returns this
 */
proto.bosdyn.api.autowalk.Dock.prototype.clearTargetPrepPose = function() {
  return this.setTargetPrepPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Dock.prototype.hasTargetPrepPose = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration prompt_duration = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.autowalk.Dock.prototype.getPromptDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Dock} returns this
*/
proto.bosdyn.api.autowalk.Dock.prototype.setPromptDuration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Dock} returns this
 */
proto.bosdyn.api.autowalk.Dock.prototype.clearPromptDuration = function() {
  return this.setPromptDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Dock.prototype.hasPromptDuration = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.autowalk.PlaybackMode.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.bosdyn.api.autowalk.PlaybackMode.ModeCase = {
  MODE_NOT_SET: 0,
  ONCE: 2,
  PERIODIC: 3,
  CONTINUOUS: 4
};

/**
 * @return {proto.bosdyn.api.autowalk.PlaybackMode.ModeCase}
 */
proto.bosdyn.api.autowalk.PlaybackMode.prototype.getModeCase = function() {
  return /** @type {proto.bosdyn.api.autowalk.PlaybackMode.ModeCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.autowalk.PlaybackMode.oneofGroups_[0]));
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
proto.bosdyn.api.autowalk.PlaybackMode.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.PlaybackMode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.PlaybackMode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.PlaybackMode.toObject = function(includeInstance, msg) {
  var f, obj = {
    once: (f = msg.getOnce()) && proto.bosdyn.api.autowalk.PlaybackMode.Once.toObject(includeInstance, f),
    periodic: (f = msg.getPeriodic()) && proto.bosdyn.api.autowalk.PlaybackMode.Periodic.toObject(includeInstance, f),
    continuous: (f = msg.getContinuous()) && proto.bosdyn.api.autowalk.PlaybackMode.Continuous.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode}
 */
proto.bosdyn.api.autowalk.PlaybackMode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.PlaybackMode;
  return proto.bosdyn.api.autowalk.PlaybackMode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.PlaybackMode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode}
 */
proto.bosdyn.api.autowalk.PlaybackMode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.bosdyn.api.autowalk.PlaybackMode.Once;
      reader.readMessage(value,proto.bosdyn.api.autowalk.PlaybackMode.Once.deserializeBinaryFromReader);
      msg.setOnce(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.autowalk.PlaybackMode.Periodic;
      reader.readMessage(value,proto.bosdyn.api.autowalk.PlaybackMode.Periodic.deserializeBinaryFromReader);
      msg.setPeriodic(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.autowalk.PlaybackMode.Continuous;
      reader.readMessage(value,proto.bosdyn.api.autowalk.PlaybackMode.Continuous.deserializeBinaryFromReader);
      msg.setContinuous(value);
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
proto.bosdyn.api.autowalk.PlaybackMode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.PlaybackMode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.PlaybackMode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.PlaybackMode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOnce();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.autowalk.PlaybackMode.Once.serializeBinaryToWriter
    );
  }
  f = message.getPeriodic();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.autowalk.PlaybackMode.Periodic.serializeBinaryToWriter
    );
  }
  f = message.getContinuous();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.autowalk.PlaybackMode.Continuous.serializeBinaryToWriter
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
proto.bosdyn.api.autowalk.PlaybackMode.Once.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.PlaybackMode.Once.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.PlaybackMode.Once} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.PlaybackMode.Once.toObject = function(includeInstance, msg) {
  var f, obj = {
    skipDockingAfterCompletion: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode.Once}
 */
proto.bosdyn.api.autowalk.PlaybackMode.Once.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.PlaybackMode.Once;
  return proto.bosdyn.api.autowalk.PlaybackMode.Once.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.PlaybackMode.Once} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode.Once}
 */
proto.bosdyn.api.autowalk.PlaybackMode.Once.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipDockingAfterCompletion(value);
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
proto.bosdyn.api.autowalk.PlaybackMode.Once.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.PlaybackMode.Once.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.PlaybackMode.Once} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.PlaybackMode.Once.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkipDockingAfterCompletion();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool skip_docking_after_completion = 1;
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.PlaybackMode.Once.prototype.getSkipDockingAfterCompletion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode.Once} returns this
 */
proto.bosdyn.api.autowalk.PlaybackMode.Once.prototype.setSkipDockingAfterCompletion = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
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
proto.bosdyn.api.autowalk.PlaybackMode.Periodic.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.PlaybackMode.Periodic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.PlaybackMode.Periodic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.PlaybackMode.Periodic.toObject = function(includeInstance, msg) {
  var f, obj = {
    interval: (f = msg.getInterval()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    repetitions: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode.Periodic}
 */
proto.bosdyn.api.autowalk.PlaybackMode.Periodic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.PlaybackMode.Periodic;
  return proto.bosdyn.api.autowalk.PlaybackMode.Periodic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.PlaybackMode.Periodic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode.Periodic}
 */
proto.bosdyn.api.autowalk.PlaybackMode.Periodic.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setInterval(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRepetitions(value);
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
proto.bosdyn.api.autowalk.PlaybackMode.Periodic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.PlaybackMode.Periodic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.PlaybackMode.Periodic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.PlaybackMode.Periodic.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInterval();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getRepetitions();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration interval = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.autowalk.PlaybackMode.Periodic.prototype.getInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode.Periodic} returns this
*/
proto.bosdyn.api.autowalk.PlaybackMode.Periodic.prototype.setInterval = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode.Periodic} returns this
 */
proto.bosdyn.api.autowalk.PlaybackMode.Periodic.prototype.clearInterval = function() {
  return this.setInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.PlaybackMode.Periodic.prototype.hasInterval = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 repetitions = 2;
 * @return {number}
 */
proto.bosdyn.api.autowalk.PlaybackMode.Periodic.prototype.getRepetitions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode.Periodic} returns this
 */
proto.bosdyn.api.autowalk.PlaybackMode.Periodic.prototype.setRepetitions = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
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
proto.bosdyn.api.autowalk.PlaybackMode.Continuous.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.PlaybackMode.Continuous.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.PlaybackMode.Continuous} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.PlaybackMode.Continuous.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode.Continuous}
 */
proto.bosdyn.api.autowalk.PlaybackMode.Continuous.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.PlaybackMode.Continuous;
  return proto.bosdyn.api.autowalk.PlaybackMode.Continuous.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.PlaybackMode.Continuous} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode.Continuous}
 */
proto.bosdyn.api.autowalk.PlaybackMode.Continuous.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.autowalk.PlaybackMode.Continuous.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.PlaybackMode.Continuous.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.PlaybackMode.Continuous} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.PlaybackMode.Continuous.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional Once once = 2;
 * @return {?proto.bosdyn.api.autowalk.PlaybackMode.Once}
 */
proto.bosdyn.api.autowalk.PlaybackMode.prototype.getOnce = function() {
  return /** @type{?proto.bosdyn.api.autowalk.PlaybackMode.Once} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.PlaybackMode.Once, 2));
};


/**
 * @param {?proto.bosdyn.api.autowalk.PlaybackMode.Once|undefined} value
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode} returns this
*/
proto.bosdyn.api.autowalk.PlaybackMode.prototype.setOnce = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bosdyn.api.autowalk.PlaybackMode.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode} returns this
 */
proto.bosdyn.api.autowalk.PlaybackMode.prototype.clearOnce = function() {
  return this.setOnce(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.PlaybackMode.prototype.hasOnce = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Periodic periodic = 3;
 * @return {?proto.bosdyn.api.autowalk.PlaybackMode.Periodic}
 */
proto.bosdyn.api.autowalk.PlaybackMode.prototype.getPeriodic = function() {
  return /** @type{?proto.bosdyn.api.autowalk.PlaybackMode.Periodic} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.PlaybackMode.Periodic, 3));
};


/**
 * @param {?proto.bosdyn.api.autowalk.PlaybackMode.Periodic|undefined} value
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode} returns this
*/
proto.bosdyn.api.autowalk.PlaybackMode.prototype.setPeriodic = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bosdyn.api.autowalk.PlaybackMode.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode} returns this
 */
proto.bosdyn.api.autowalk.PlaybackMode.prototype.clearPeriodic = function() {
  return this.setPeriodic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.PlaybackMode.prototype.hasPeriodic = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Continuous continuous = 4;
 * @return {?proto.bosdyn.api.autowalk.PlaybackMode.Continuous}
 */
proto.bosdyn.api.autowalk.PlaybackMode.prototype.getContinuous = function() {
  return /** @type{?proto.bosdyn.api.autowalk.PlaybackMode.Continuous} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.PlaybackMode.Continuous, 4));
};


/**
 * @param {?proto.bosdyn.api.autowalk.PlaybackMode.Continuous|undefined} value
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode} returns this
*/
proto.bosdyn.api.autowalk.PlaybackMode.prototype.setContinuous = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bosdyn.api.autowalk.PlaybackMode.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.PlaybackMode} returns this
 */
proto.bosdyn.api.autowalk.PlaybackMode.prototype.clearContinuous = function() {
  return this.setContinuous(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.PlaybackMode.prototype.hasContinuous = function() {
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
proto.bosdyn.api.autowalk.Element.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.Element.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.Element} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Element.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    target: (f = msg.getTarget()) && proto.bosdyn.api.autowalk.Target.toObject(includeInstance, f),
    targetFailureBehavior: (f = msg.getTargetFailureBehavior()) && proto.bosdyn.api.autowalk.FailureBehavior.toObject(includeInstance, f),
    action: (f = msg.getAction()) && proto.bosdyn.api.autowalk.Action.toObject(includeInstance, f),
    actionWrapper: (f = msg.getActionWrapper()) && proto.bosdyn.api.autowalk.ActionWrapper.toObject(includeInstance, f),
    actionFailureBehavior: (f = msg.getActionFailureBehavior()) && proto.bosdyn.api.autowalk.FailureBehavior.toObject(includeInstance, f),
    isSkipped: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    batteryMonitor: (f = msg.getBatteryMonitor()) && proto.bosdyn.api.autowalk.BatteryMonitor.toObject(includeInstance, f),
    actionDuration: (f = msg.getActionDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    id: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.bosdyn.api.autowalk.Element}
 */
proto.bosdyn.api.autowalk.Element.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.Element;
  return proto.bosdyn.api.autowalk.Element.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.Element} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.Element}
 */
proto.bosdyn.api.autowalk.Element.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bosdyn.api.autowalk.Target;
      reader.readMessage(value,proto.bosdyn.api.autowalk.Target.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.autowalk.FailureBehavior;
      reader.readMessage(value,proto.bosdyn.api.autowalk.FailureBehavior.deserializeBinaryFromReader);
      msg.setTargetFailureBehavior(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.autowalk.Action;
      reader.readMessage(value,proto.bosdyn.api.autowalk.Action.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.autowalk.ActionWrapper;
      reader.readMessage(value,proto.bosdyn.api.autowalk.ActionWrapper.deserializeBinaryFromReader);
      msg.setActionWrapper(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.autowalk.FailureBehavior;
      reader.readMessage(value,proto.bosdyn.api.autowalk.FailureBehavior.deserializeBinaryFromReader);
      msg.setActionFailureBehavior(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSkipped(value);
      break;
    case 8:
      var value = new proto.bosdyn.api.autowalk.BatteryMonitor;
      reader.readMessage(value,proto.bosdyn.api.autowalk.BatteryMonitor.deserializeBinaryFromReader);
      msg.setBatteryMonitor(value);
      break;
    case 9:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setActionDuration(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.bosdyn.api.autowalk.Element.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.Element.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.Element} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Element.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.autowalk.Target.serializeBinaryToWriter
    );
  }
  f = message.getTargetFailureBehavior();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.autowalk.FailureBehavior.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.autowalk.Action.serializeBinaryToWriter
    );
  }
  f = message.getActionWrapper();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.autowalk.ActionWrapper.serializeBinaryToWriter
    );
  }
  f = message.getActionFailureBehavior();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bosdyn.api.autowalk.FailureBehavior.serializeBinaryToWriter
    );
  }
  f = message.getIsSkipped();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getBatteryMonitor();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bosdyn.api.autowalk.BatteryMonitor.serializeBinaryToWriter
    );
  }
  f = message.getActionDuration();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.bosdyn.api.autowalk.Element.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.autowalk.Element} returns this
 */
proto.bosdyn.api.autowalk.Element.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Target target = 2;
 * @return {?proto.bosdyn.api.autowalk.Target}
 */
proto.bosdyn.api.autowalk.Element.prototype.getTarget = function() {
  return /** @type{?proto.bosdyn.api.autowalk.Target} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.Target, 2));
};


/**
 * @param {?proto.bosdyn.api.autowalk.Target|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Element} returns this
*/
proto.bosdyn.api.autowalk.Element.prototype.setTarget = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Element} returns this
 */
proto.bosdyn.api.autowalk.Element.prototype.clearTarget = function() {
  return this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Element.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FailureBehavior target_failure_behavior = 3;
 * @return {?proto.bosdyn.api.autowalk.FailureBehavior}
 */
proto.bosdyn.api.autowalk.Element.prototype.getTargetFailureBehavior = function() {
  return /** @type{?proto.bosdyn.api.autowalk.FailureBehavior} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.FailureBehavior, 3));
};


/**
 * @param {?proto.bosdyn.api.autowalk.FailureBehavior|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Element} returns this
*/
proto.bosdyn.api.autowalk.Element.prototype.setTargetFailureBehavior = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Element} returns this
 */
proto.bosdyn.api.autowalk.Element.prototype.clearTargetFailureBehavior = function() {
  return this.setTargetFailureBehavior(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Element.prototype.hasTargetFailureBehavior = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Action action = 4;
 * @return {?proto.bosdyn.api.autowalk.Action}
 */
proto.bosdyn.api.autowalk.Element.prototype.getAction = function() {
  return /** @type{?proto.bosdyn.api.autowalk.Action} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.Action, 4));
};


/**
 * @param {?proto.bosdyn.api.autowalk.Action|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Element} returns this
*/
proto.bosdyn.api.autowalk.Element.prototype.setAction = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Element} returns this
 */
proto.bosdyn.api.autowalk.Element.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Element.prototype.hasAction = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ActionWrapper action_wrapper = 5;
 * @return {?proto.bosdyn.api.autowalk.ActionWrapper}
 */
proto.bosdyn.api.autowalk.Element.prototype.getActionWrapper = function() {
  return /** @type{?proto.bosdyn.api.autowalk.ActionWrapper} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.ActionWrapper, 5));
};


/**
 * @param {?proto.bosdyn.api.autowalk.ActionWrapper|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Element} returns this
*/
proto.bosdyn.api.autowalk.Element.prototype.setActionWrapper = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Element} returns this
 */
proto.bosdyn.api.autowalk.Element.prototype.clearActionWrapper = function() {
  return this.setActionWrapper(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Element.prototype.hasActionWrapper = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional FailureBehavior action_failure_behavior = 6;
 * @return {?proto.bosdyn.api.autowalk.FailureBehavior}
 */
proto.bosdyn.api.autowalk.Element.prototype.getActionFailureBehavior = function() {
  return /** @type{?proto.bosdyn.api.autowalk.FailureBehavior} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.FailureBehavior, 6));
};


/**
 * @param {?proto.bosdyn.api.autowalk.FailureBehavior|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Element} returns this
*/
proto.bosdyn.api.autowalk.Element.prototype.setActionFailureBehavior = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Element} returns this
 */
proto.bosdyn.api.autowalk.Element.prototype.clearActionFailureBehavior = function() {
  return this.setActionFailureBehavior(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Element.prototype.hasActionFailureBehavior = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_skipped = 7;
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Element.prototype.getIsSkipped = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.autowalk.Element} returns this
 */
proto.bosdyn.api.autowalk.Element.prototype.setIsSkipped = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional BatteryMonitor battery_monitor = 8;
 * @return {?proto.bosdyn.api.autowalk.BatteryMonitor}
 */
proto.bosdyn.api.autowalk.Element.prototype.getBatteryMonitor = function() {
  return /** @type{?proto.bosdyn.api.autowalk.BatteryMonitor} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.BatteryMonitor, 8));
};


/**
 * @param {?proto.bosdyn.api.autowalk.BatteryMonitor|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Element} returns this
*/
proto.bosdyn.api.autowalk.Element.prototype.setBatteryMonitor = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Element} returns this
 */
proto.bosdyn.api.autowalk.Element.prototype.clearBatteryMonitor = function() {
  return this.setBatteryMonitor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Element.prototype.hasBatteryMonitor = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Duration action_duration = 9;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.autowalk.Element.prototype.getActionDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 9));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Element} returns this
*/
proto.bosdyn.api.autowalk.Element.prototype.setActionDuration = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Element} returns this
 */
proto.bosdyn.api.autowalk.Element.prototype.clearActionDuration = function() {
  return this.setActionDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Element.prototype.hasActionDuration = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string id = 10;
 * @return {string}
 */
proto.bosdyn.api.autowalk.Element.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.autowalk.Element} returns this
 */
proto.bosdyn.api.autowalk.Element.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.autowalk.Target.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.bosdyn.api.autowalk.Target.TargetCase = {
  TARGET_NOT_SET: 0,
  NAVIGATE_TO: 1,
  NAVIGATE_ROUTE: 2
};

/**
 * @return {proto.bosdyn.api.autowalk.Target.TargetCase}
 */
proto.bosdyn.api.autowalk.Target.prototype.getTargetCase = function() {
  return /** @type {proto.bosdyn.api.autowalk.Target.TargetCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.autowalk.Target.oneofGroups_[0]));
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
proto.bosdyn.api.autowalk.Target.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.Target.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.Target} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Target.toObject = function(includeInstance, msg) {
  var f, obj = {
    navigateTo: (f = msg.getNavigateTo()) && proto.bosdyn.api.autowalk.Target.NavigateTo.toObject(includeInstance, f),
    navigateRoute: (f = msg.getNavigateRoute()) && proto.bosdyn.api.autowalk.Target.NavigateRoute.toObject(includeInstance, f),
    relocalize: (f = msg.getRelocalize()) && proto.bosdyn.api.autowalk.Target.Relocalize.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.autowalk.Target}
 */
proto.bosdyn.api.autowalk.Target.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.Target;
  return proto.bosdyn.api.autowalk.Target.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.Target} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.Target}
 */
proto.bosdyn.api.autowalk.Target.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.autowalk.Target.NavigateTo;
      reader.readMessage(value,proto.bosdyn.api.autowalk.Target.NavigateTo.deserializeBinaryFromReader);
      msg.setNavigateTo(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.autowalk.Target.NavigateRoute;
      reader.readMessage(value,proto.bosdyn.api.autowalk.Target.NavigateRoute.deserializeBinaryFromReader);
      msg.setNavigateRoute(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.autowalk.Target.Relocalize;
      reader.readMessage(value,proto.bosdyn.api.autowalk.Target.Relocalize.deserializeBinaryFromReader);
      msg.setRelocalize(value);
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
proto.bosdyn.api.autowalk.Target.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.Target.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.Target} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Target.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNavigateTo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.autowalk.Target.NavigateTo.serializeBinaryToWriter
    );
  }
  f = message.getNavigateRoute();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.autowalk.Target.NavigateRoute.serializeBinaryToWriter
    );
  }
  f = message.getRelocalize();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.autowalk.Target.Relocalize.serializeBinaryToWriter
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
proto.bosdyn.api.autowalk.Target.Relocalize.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.Target.Relocalize.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.Target.Relocalize} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Target.Relocalize.toObject = function(includeInstance, msg) {
  var f, obj = {
    setLocalizationRequest: (f = msg.getSetLocalizationRequest()) && bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.autowalk.Target.Relocalize}
 */
proto.bosdyn.api.autowalk.Target.Relocalize.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.Target.Relocalize;
  return proto.bosdyn.api.autowalk.Target.Relocalize.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.Target.Relocalize} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.Target.Relocalize}
 */
proto.bosdyn.api.autowalk.Target.Relocalize.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest;
      reader.readMessage(value,bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest.deserializeBinaryFromReader);
      msg.setSetLocalizationRequest(value);
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
proto.bosdyn.api.autowalk.Target.Relocalize.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.Target.Relocalize.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.Target.Relocalize} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Target.Relocalize.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSetLocalizationRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.graph_nav.SetLocalizationRequest set_localization_request = 1;
 * @return {?proto.bosdyn.api.graph_nav.SetLocalizationRequest}
 */
proto.bosdyn.api.autowalk.Target.Relocalize.prototype.getSetLocalizationRequest = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.SetLocalizationRequest} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest, 1));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.SetLocalizationRequest|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Target.Relocalize} returns this
*/
proto.bosdyn.api.autowalk.Target.Relocalize.prototype.setSetLocalizationRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Target.Relocalize} returns this
 */
proto.bosdyn.api.autowalk.Target.Relocalize.prototype.clearSetLocalizationRequest = function() {
  return this.setSetLocalizationRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Target.Relocalize.prototype.hasSetLocalizationRequest = function() {
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
proto.bosdyn.api.autowalk.Target.NavigateTo.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.Target.NavigateTo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.Target.NavigateTo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Target.NavigateTo.toObject = function(includeInstance, msg) {
  var f, obj = {
    destinationWaypointId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    travelParams: (f = msg.getTravelParams()) && bosdyn_api_graph_nav_graph_nav_pb.TravelParams.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.autowalk.Target.NavigateTo}
 */
proto.bosdyn.api.autowalk.Target.NavigateTo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.Target.NavigateTo;
  return proto.bosdyn.api.autowalk.Target.NavigateTo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.Target.NavigateTo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.Target.NavigateTo}
 */
proto.bosdyn.api.autowalk.Target.NavigateTo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationWaypointId(value);
      break;
    case 3:
      var value = new bosdyn_api_graph_nav_graph_nav_pb.TravelParams;
      reader.readMessage(value,bosdyn_api_graph_nav_graph_nav_pb.TravelParams.deserializeBinaryFromReader);
      msg.setTravelParams(value);
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
proto.bosdyn.api.autowalk.Target.NavigateTo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.Target.NavigateTo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.Target.NavigateTo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Target.NavigateTo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestinationWaypointId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTravelParams();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_graph_nav_graph_nav_pb.TravelParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional string destination_waypoint_id = 1;
 * @return {string}
 */
proto.bosdyn.api.autowalk.Target.NavigateTo.prototype.getDestinationWaypointId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.autowalk.Target.NavigateTo} returns this
 */
proto.bosdyn.api.autowalk.Target.NavigateTo.prototype.setDestinationWaypointId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bosdyn.api.graph_nav.TravelParams travel_params = 3;
 * @return {?proto.bosdyn.api.graph_nav.TravelParams}
 */
proto.bosdyn.api.autowalk.Target.NavigateTo.prototype.getTravelParams = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.TravelParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_graph_nav_pb.TravelParams, 3));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.TravelParams|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Target.NavigateTo} returns this
*/
proto.bosdyn.api.autowalk.Target.NavigateTo.prototype.setTravelParams = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Target.NavigateTo} returns this
 */
proto.bosdyn.api.autowalk.Target.NavigateTo.prototype.clearTravelParams = function() {
  return this.setTravelParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Target.NavigateTo.prototype.hasTravelParams = function() {
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
proto.bosdyn.api.autowalk.Target.NavigateRoute.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.Target.NavigateRoute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.Target.NavigateRoute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Target.NavigateRoute.toObject = function(includeInstance, msg) {
  var f, obj = {
    route: (f = msg.getRoute()) && bosdyn_api_graph_nav_nav_pb.Route.toObject(includeInstance, f),
    travelParams: (f = msg.getTravelParams()) && bosdyn_api_graph_nav_graph_nav_pb.TravelParams.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.autowalk.Target.NavigateRoute}
 */
proto.bosdyn.api.autowalk.Target.NavigateRoute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.Target.NavigateRoute;
  return proto.bosdyn.api.autowalk.Target.NavigateRoute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.Target.NavigateRoute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.Target.NavigateRoute}
 */
proto.bosdyn.api.autowalk.Target.NavigateRoute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_graph_nav_nav_pb.Route;
      reader.readMessage(value,bosdyn_api_graph_nav_nav_pb.Route.deserializeBinaryFromReader);
      msg.setRoute(value);
      break;
    case 2:
      var value = new bosdyn_api_graph_nav_graph_nav_pb.TravelParams;
      reader.readMessage(value,bosdyn_api_graph_nav_graph_nav_pb.TravelParams.deserializeBinaryFromReader);
      msg.setTravelParams(value);
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
proto.bosdyn.api.autowalk.Target.NavigateRoute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.Target.NavigateRoute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.Target.NavigateRoute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Target.NavigateRoute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoute();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_graph_nav_nav_pb.Route.serializeBinaryToWriter
    );
  }
  f = message.getTravelParams();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_graph_nav_graph_nav_pb.TravelParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.graph_nav.Route route = 1;
 * @return {?proto.bosdyn.api.graph_nav.Route}
 */
proto.bosdyn.api.autowalk.Target.NavigateRoute.prototype.getRoute = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Route} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_nav_pb.Route, 1));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Route|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Target.NavigateRoute} returns this
*/
proto.bosdyn.api.autowalk.Target.NavigateRoute.prototype.setRoute = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Target.NavigateRoute} returns this
 */
proto.bosdyn.api.autowalk.Target.NavigateRoute.prototype.clearRoute = function() {
  return this.setRoute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Target.NavigateRoute.prototype.hasRoute = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.graph_nav.TravelParams travel_params = 2;
 * @return {?proto.bosdyn.api.graph_nav.TravelParams}
 */
proto.bosdyn.api.autowalk.Target.NavigateRoute.prototype.getTravelParams = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.TravelParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_graph_nav_pb.TravelParams, 2));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.TravelParams|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Target.NavigateRoute} returns this
*/
proto.bosdyn.api.autowalk.Target.NavigateRoute.prototype.setTravelParams = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Target.NavigateRoute} returns this
 */
proto.bosdyn.api.autowalk.Target.NavigateRoute.prototype.clearTravelParams = function() {
  return this.setTravelParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Target.NavigateRoute.prototype.hasTravelParams = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional NavigateTo navigate_to = 1;
 * @return {?proto.bosdyn.api.autowalk.Target.NavigateTo}
 */
proto.bosdyn.api.autowalk.Target.prototype.getNavigateTo = function() {
  return /** @type{?proto.bosdyn.api.autowalk.Target.NavigateTo} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.Target.NavigateTo, 1));
};


/**
 * @param {?proto.bosdyn.api.autowalk.Target.NavigateTo|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Target} returns this
*/
proto.bosdyn.api.autowalk.Target.prototype.setNavigateTo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bosdyn.api.autowalk.Target.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Target} returns this
 */
proto.bosdyn.api.autowalk.Target.prototype.clearNavigateTo = function() {
  return this.setNavigateTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Target.prototype.hasNavigateTo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NavigateRoute navigate_route = 2;
 * @return {?proto.bosdyn.api.autowalk.Target.NavigateRoute}
 */
proto.bosdyn.api.autowalk.Target.prototype.getNavigateRoute = function() {
  return /** @type{?proto.bosdyn.api.autowalk.Target.NavigateRoute} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.Target.NavigateRoute, 2));
};


/**
 * @param {?proto.bosdyn.api.autowalk.Target.NavigateRoute|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Target} returns this
*/
proto.bosdyn.api.autowalk.Target.prototype.setNavigateRoute = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bosdyn.api.autowalk.Target.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Target} returns this
 */
proto.bosdyn.api.autowalk.Target.prototype.clearNavigateRoute = function() {
  return this.setNavigateRoute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Target.prototype.hasNavigateRoute = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Relocalize relocalize = 3;
 * @return {?proto.bosdyn.api.autowalk.Target.Relocalize}
 */
proto.bosdyn.api.autowalk.Target.prototype.getRelocalize = function() {
  return /** @type{?proto.bosdyn.api.autowalk.Target.Relocalize} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.Target.Relocalize, 3));
};


/**
 * @param {?proto.bosdyn.api.autowalk.Target.Relocalize|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Target} returns this
*/
proto.bosdyn.api.autowalk.Target.prototype.setRelocalize = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Target} returns this
 */
proto.bosdyn.api.autowalk.Target.prototype.clearRelocalize = function() {
  return this.setRelocalize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Target.prototype.hasRelocalize = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.autowalk.Action.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.bosdyn.api.autowalk.Action.ActionCase = {
  ACTION_NOT_SET: 0,
  SLEEP: 1,
  DATA_ACQUISITION: 2,
  REMOTE_GRPC: 3,
  NODE: 4
};

/**
 * @return {proto.bosdyn.api.autowalk.Action.ActionCase}
 */
proto.bosdyn.api.autowalk.Action.prototype.getActionCase = function() {
  return /** @type {proto.bosdyn.api.autowalk.Action.ActionCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.autowalk.Action.oneofGroups_[0]));
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
proto.bosdyn.api.autowalk.Action.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.Action.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.Action} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Action.toObject = function(includeInstance, msg) {
  var f, obj = {
    sleep: (f = msg.getSleep()) && proto.bosdyn.api.autowalk.Action.Sleep.toObject(includeInstance, f),
    dataAcquisition: (f = msg.getDataAcquisition()) && proto.bosdyn.api.autowalk.Action.DataAcquisition.toObject(includeInstance, f),
    remoteGrpc: (f = msg.getRemoteGrpc()) && proto.bosdyn.api.autowalk.Action.RemoteGrpc.toObject(includeInstance, f),
    node: (f = msg.getNode()) && bosdyn_api_mission_nodes_pb.Node.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.autowalk.Action}
 */
proto.bosdyn.api.autowalk.Action.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.Action;
  return proto.bosdyn.api.autowalk.Action.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.Action} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.Action}
 */
proto.bosdyn.api.autowalk.Action.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.autowalk.Action.Sleep;
      reader.readMessage(value,proto.bosdyn.api.autowalk.Action.Sleep.deserializeBinaryFromReader);
      msg.setSleep(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.autowalk.Action.DataAcquisition;
      reader.readMessage(value,proto.bosdyn.api.autowalk.Action.DataAcquisition.deserializeBinaryFromReader);
      msg.setDataAcquisition(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.autowalk.Action.RemoteGrpc;
      reader.readMessage(value,proto.bosdyn.api.autowalk.Action.RemoteGrpc.deserializeBinaryFromReader);
      msg.setRemoteGrpc(value);
      break;
    case 4:
      var value = new bosdyn_api_mission_nodes_pb.Node;
      reader.readMessage(value,bosdyn_api_mission_nodes_pb.Node.deserializeBinaryFromReader);
      msg.setNode(value);
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
proto.bosdyn.api.autowalk.Action.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.Action.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.Action} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Action.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSleep();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.autowalk.Action.Sleep.serializeBinaryToWriter
    );
  }
  f = message.getDataAcquisition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.autowalk.Action.DataAcquisition.serializeBinaryToWriter
    );
  }
  f = message.getRemoteGrpc();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.autowalk.Action.RemoteGrpc.serializeBinaryToWriter
    );
  }
  f = message.getNode();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_mission_nodes_pb.Node.serializeBinaryToWriter
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
proto.bosdyn.api.autowalk.Action.Sleep.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.Action.Sleep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.Action.Sleep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Action.Sleep.toObject = function(includeInstance, msg) {
  var f, obj = {
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.autowalk.Action.Sleep}
 */
proto.bosdyn.api.autowalk.Action.Sleep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.Action.Sleep;
  return proto.bosdyn.api.autowalk.Action.Sleep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.Action.Sleep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.Action.Sleep}
 */
proto.bosdyn.api.autowalk.Action.Sleep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
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
proto.bosdyn.api.autowalk.Action.Sleep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.Action.Sleep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.Action.Sleep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Action.Sleep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration duration = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.autowalk.Action.Sleep.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Action.Sleep} returns this
*/
proto.bosdyn.api.autowalk.Action.Sleep.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Action.Sleep} returns this
 */
proto.bosdyn.api.autowalk.Action.Sleep.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Action.Sleep.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.autowalk.Action.DataAcquisition.repeatedFields_ = [4];



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
proto.bosdyn.api.autowalk.Action.DataAcquisition.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.Action.DataAcquisition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.Action.DataAcquisition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Action.DataAcquisition.toObject = function(includeInstance, msg) {
  var f, obj = {
    acquireDataRequest: (f = msg.getAcquireDataRequest()) && bosdyn_api_data_acquisition_pb.AcquireDataRequest.toObject(includeInstance, f),
    completionBehavior: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lastKnownCapabilities: (f = msg.getLastKnownCapabilities()) && bosdyn_api_data_acquisition_pb.AcquisitionCapabilityList.toObject(includeInstance, f),
    recordTimeImagesList: jspb.Message.toObjectList(msg.getRecordTimeImagesList(),
    bosdyn_api_image_pb.ImageCaptureAndSource.toObject, includeInstance)
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
 * @return {!proto.bosdyn.api.autowalk.Action.DataAcquisition}
 */
proto.bosdyn.api.autowalk.Action.DataAcquisition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.Action.DataAcquisition;
  return proto.bosdyn.api.autowalk.Action.DataAcquisition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.Action.DataAcquisition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.Action.DataAcquisition}
 */
proto.bosdyn.api.autowalk.Action.DataAcquisition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_data_acquisition_pb.AcquireDataRequest;
      reader.readMessage(value,bosdyn_api_data_acquisition_pb.AcquireDataRequest.deserializeBinaryFromReader);
      msg.setAcquireDataRequest(value);
      break;
    case 2:
      var value = /** @type {!proto.bosdyn.api.mission.DataAcquisition.CompletionBehavior} */ (reader.readEnum());
      msg.setCompletionBehavior(value);
      break;
    case 3:
      var value = new bosdyn_api_data_acquisition_pb.AcquisitionCapabilityList;
      reader.readMessage(value,bosdyn_api_data_acquisition_pb.AcquisitionCapabilityList.deserializeBinaryFromReader);
      msg.setLastKnownCapabilities(value);
      break;
    case 4:
      var value = new bosdyn_api_image_pb.ImageCaptureAndSource;
      reader.readMessage(value,bosdyn_api_image_pb.ImageCaptureAndSource.deserializeBinaryFromReader);
      msg.addRecordTimeImages(value);
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
proto.bosdyn.api.autowalk.Action.DataAcquisition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.Action.DataAcquisition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.Action.DataAcquisition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Action.DataAcquisition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAcquireDataRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_data_acquisition_pb.AcquireDataRequest.serializeBinaryToWriter
    );
  }
  f = message.getCompletionBehavior();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getLastKnownCapabilities();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_data_acquisition_pb.AcquisitionCapabilityList.serializeBinaryToWriter
    );
  }
  f = message.getRecordTimeImagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      bosdyn_api_image_pb.ImageCaptureAndSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.AcquireDataRequest acquire_data_request = 1;
 * @return {?proto.bosdyn.api.AcquireDataRequest}
 */
proto.bosdyn.api.autowalk.Action.DataAcquisition.prototype.getAcquireDataRequest = function() {
  return /** @type{?proto.bosdyn.api.AcquireDataRequest} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_acquisition_pb.AcquireDataRequest, 1));
};


/**
 * @param {?proto.bosdyn.api.AcquireDataRequest|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Action.DataAcquisition} returns this
*/
proto.bosdyn.api.autowalk.Action.DataAcquisition.prototype.setAcquireDataRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Action.DataAcquisition} returns this
 */
proto.bosdyn.api.autowalk.Action.DataAcquisition.prototype.clearAcquireDataRequest = function() {
  return this.setAcquireDataRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Action.DataAcquisition.prototype.hasAcquireDataRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.mission.DataAcquisition.CompletionBehavior completion_behavior = 2;
 * @return {!proto.bosdyn.api.mission.DataAcquisition.CompletionBehavior}
 */
proto.bosdyn.api.autowalk.Action.DataAcquisition.prototype.getCompletionBehavior = function() {
  return /** @type {!proto.bosdyn.api.mission.DataAcquisition.CompletionBehavior} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.mission.DataAcquisition.CompletionBehavior} value
 * @return {!proto.bosdyn.api.autowalk.Action.DataAcquisition} returns this
 */
proto.bosdyn.api.autowalk.Action.DataAcquisition.prototype.setCompletionBehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bosdyn.api.AcquisitionCapabilityList last_known_capabilities = 3;
 * @return {?proto.bosdyn.api.AcquisitionCapabilityList}
 */
proto.bosdyn.api.autowalk.Action.DataAcquisition.prototype.getLastKnownCapabilities = function() {
  return /** @type{?proto.bosdyn.api.AcquisitionCapabilityList} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_acquisition_pb.AcquisitionCapabilityList, 3));
};


/**
 * @param {?proto.bosdyn.api.AcquisitionCapabilityList|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Action.DataAcquisition} returns this
*/
proto.bosdyn.api.autowalk.Action.DataAcquisition.prototype.setLastKnownCapabilities = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Action.DataAcquisition} returns this
 */
proto.bosdyn.api.autowalk.Action.DataAcquisition.prototype.clearLastKnownCapabilities = function() {
  return this.setLastKnownCapabilities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Action.DataAcquisition.prototype.hasLastKnownCapabilities = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated bosdyn.api.ImageCaptureAndSource record_time_images = 4;
 * @return {!Array<!proto.bosdyn.api.ImageCaptureAndSource>}
 */
proto.bosdyn.api.autowalk.Action.DataAcquisition.prototype.getRecordTimeImagesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.ImageCaptureAndSource>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_image_pb.ImageCaptureAndSource, 4));
};


/**
 * @param {!Array<!proto.bosdyn.api.ImageCaptureAndSource>} value
 * @return {!proto.bosdyn.api.autowalk.Action.DataAcquisition} returns this
*/
proto.bosdyn.api.autowalk.Action.DataAcquisition.prototype.setRecordTimeImagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bosdyn.api.ImageCaptureAndSource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.ImageCaptureAndSource}
 */
proto.bosdyn.api.autowalk.Action.DataAcquisition.prototype.addRecordTimeImages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bosdyn.api.ImageCaptureAndSource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.autowalk.Action.DataAcquisition} returns this
 */
proto.bosdyn.api.autowalk.Action.DataAcquisition.prototype.clearRecordTimeImagesList = function() {
  return this.setRecordTimeImagesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.repeatedFields_ = [3,4,6];



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
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.Action.RemoteGrpc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.Action.RemoteGrpc} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    rpcTimeout: (f = msg.getRpcTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    leaseResourcesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    inputsList: jspb.Message.toObjectList(msg.getInputsList(),
    bosdyn_api_mission_util_pb.KeyValue.toObject, includeInstance),
    parameters: (f = msg.getParameters()) && bosdyn_api_service_customization_pb.CustomParamCollection.toObject(includeInstance, f),
    recordTimeImagesList: jspb.Message.toObjectList(msg.getRecordTimeImagesList(),
    bosdyn_api_image_pb.ImageCaptureAndSource.toObject, includeInstance)
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
 * @return {!proto.bosdyn.api.autowalk.Action.RemoteGrpc}
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.Action.RemoteGrpc;
  return proto.bosdyn.api.autowalk.Action.RemoteGrpc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.Action.RemoteGrpc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.Action.RemoteGrpc}
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceName(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setRpcTimeout(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addLeaseResources(value);
      break;
    case 4:
      var value = new bosdyn_api_mission_util_pb.KeyValue;
      reader.readMessage(value,bosdyn_api_mission_util_pb.KeyValue.deserializeBinaryFromReader);
      msg.addInputs(value);
      break;
    case 5:
      var value = new bosdyn_api_service_customization_pb.CustomParamCollection;
      reader.readMessage(value,bosdyn_api_service_customization_pb.CustomParamCollection.deserializeBinaryFromReader);
      msg.setParameters(value);
      break;
    case 6:
      var value = new bosdyn_api_image_pb.ImageCaptureAndSource;
      reader.readMessage(value,bosdyn_api_image_pb.ImageCaptureAndSource.deserializeBinaryFromReader);
      msg.addRecordTimeImages(value);
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
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.Action.RemoteGrpc.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.Action.RemoteGrpc} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRpcTimeout();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getLeaseResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      bosdyn_api_mission_util_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getParameters();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_service_customization_pb.CustomParamCollection.serializeBinaryToWriter
    );
  }
  f = message.getRecordTimeImagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      bosdyn_api_image_pb.ImageCaptureAndSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.autowalk.Action.RemoteGrpc} returns this
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Duration rpc_timeout = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.getRpcTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Action.RemoteGrpc} returns this
*/
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.setRpcTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Action.RemoteGrpc} returns this
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.clearRpcTimeout = function() {
  return this.setRpcTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.hasRpcTimeout = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string lease_resources = 3;
 * @return {!Array<string>}
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.getLeaseResourcesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.autowalk.Action.RemoteGrpc} returns this
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.setLeaseResourcesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.autowalk.Action.RemoteGrpc} returns this
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.addLeaseResources = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.autowalk.Action.RemoteGrpc} returns this
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.clearLeaseResourcesList = function() {
  return this.setLeaseResourcesList([]);
};


/**
 * repeated bosdyn.api.mission.KeyValue inputs = 4;
 * @return {!Array<!proto.bosdyn.api.mission.KeyValue>}
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.getInputsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.mission.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_mission_util_pb.KeyValue, 4));
};


/**
 * @param {!Array<!proto.bosdyn.api.mission.KeyValue>} value
 * @return {!proto.bosdyn.api.autowalk.Action.RemoteGrpc} returns this
*/
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.setInputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bosdyn.api.mission.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.mission.KeyValue}
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.addInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bosdyn.api.mission.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.autowalk.Action.RemoteGrpc} returns this
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.clearInputsList = function() {
  return this.setInputsList([]);
};


/**
 * optional bosdyn.api.CustomParamCollection parameters = 5;
 * @return {?proto.bosdyn.api.CustomParamCollection}
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.getParameters = function() {
  return /** @type{?proto.bosdyn.api.CustomParamCollection} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_service_customization_pb.CustomParamCollection, 5));
};


/**
 * @param {?proto.bosdyn.api.CustomParamCollection|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Action.RemoteGrpc} returns this
*/
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.setParameters = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Action.RemoteGrpc} returns this
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.clearParameters = function() {
  return this.setParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.hasParameters = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated bosdyn.api.ImageCaptureAndSource record_time_images = 6;
 * @return {!Array<!proto.bosdyn.api.ImageCaptureAndSource>}
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.getRecordTimeImagesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.ImageCaptureAndSource>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_image_pb.ImageCaptureAndSource, 6));
};


/**
 * @param {!Array<!proto.bosdyn.api.ImageCaptureAndSource>} value
 * @return {!proto.bosdyn.api.autowalk.Action.RemoteGrpc} returns this
*/
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.setRecordTimeImagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.bosdyn.api.ImageCaptureAndSource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.ImageCaptureAndSource}
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.addRecordTimeImages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.bosdyn.api.ImageCaptureAndSource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.autowalk.Action.RemoteGrpc} returns this
 */
proto.bosdyn.api.autowalk.Action.RemoteGrpc.prototype.clearRecordTimeImagesList = function() {
  return this.setRecordTimeImagesList([]);
};


/**
 * optional Sleep sleep = 1;
 * @return {?proto.bosdyn.api.autowalk.Action.Sleep}
 */
proto.bosdyn.api.autowalk.Action.prototype.getSleep = function() {
  return /** @type{?proto.bosdyn.api.autowalk.Action.Sleep} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.Action.Sleep, 1));
};


/**
 * @param {?proto.bosdyn.api.autowalk.Action.Sleep|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Action} returns this
*/
proto.bosdyn.api.autowalk.Action.prototype.setSleep = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bosdyn.api.autowalk.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Action} returns this
 */
proto.bosdyn.api.autowalk.Action.prototype.clearSleep = function() {
  return this.setSleep(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Action.prototype.hasSleep = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DataAcquisition data_acquisition = 2;
 * @return {?proto.bosdyn.api.autowalk.Action.DataAcquisition}
 */
proto.bosdyn.api.autowalk.Action.prototype.getDataAcquisition = function() {
  return /** @type{?proto.bosdyn.api.autowalk.Action.DataAcquisition} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.Action.DataAcquisition, 2));
};


/**
 * @param {?proto.bosdyn.api.autowalk.Action.DataAcquisition|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Action} returns this
*/
proto.bosdyn.api.autowalk.Action.prototype.setDataAcquisition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bosdyn.api.autowalk.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Action} returns this
 */
proto.bosdyn.api.autowalk.Action.prototype.clearDataAcquisition = function() {
  return this.setDataAcquisition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Action.prototype.hasDataAcquisition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RemoteGrpc remote_grpc = 3;
 * @return {?proto.bosdyn.api.autowalk.Action.RemoteGrpc}
 */
proto.bosdyn.api.autowalk.Action.prototype.getRemoteGrpc = function() {
  return /** @type{?proto.bosdyn.api.autowalk.Action.RemoteGrpc} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.Action.RemoteGrpc, 3));
};


/**
 * @param {?proto.bosdyn.api.autowalk.Action.RemoteGrpc|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Action} returns this
*/
proto.bosdyn.api.autowalk.Action.prototype.setRemoteGrpc = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bosdyn.api.autowalk.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Action} returns this
 */
proto.bosdyn.api.autowalk.Action.prototype.clearRemoteGrpc = function() {
  return this.setRemoteGrpc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Action.prototype.hasRemoteGrpc = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bosdyn.api.mission.Node node = 4;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.autowalk.Action.prototype.getNode = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_mission_nodes_pb.Node, 4));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.autowalk.Action} returns this
*/
proto.bosdyn.api.autowalk.Action.prototype.setNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bosdyn.api.autowalk.Action.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.Action} returns this
 */
proto.bosdyn.api.autowalk.Action.prototype.clearNode = function() {
  return this.setNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.Action.prototype.hasNode = function() {
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
proto.bosdyn.api.autowalk.ActionWrapper.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.ActionWrapper.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.toObject = function(includeInstance, msg) {
  var f, obj = {
    robotBodySit: (f = msg.getRobotBodySit()) && proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit.toObject(includeInstance, f),
    robotBodyPose: (f = msg.getRobotBodyPose()) && proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose.toObject(includeInstance, f),
    spotCamLed: (f = msg.getSpotCamLed()) && proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed.toObject(includeInstance, f),
    spotCamPtz: (f = msg.getSpotCamPtz()) && proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz.toObject(includeInstance, f),
    armSensorPointing: (f = msg.getArmSensorPointing()) && proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.toObject(includeInstance, f),
    spotCamAlignment: (f = msg.getSpotCamAlignment()) && proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.toObject(includeInstance, f),
    gripperCameraParams: (f = msg.getGripperCameraParams()) && proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams.toObject(includeInstance, f),
    gripperCommand: (f = msg.getGripperCommand()) && proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper}
 */
proto.bosdyn.api.autowalk.ActionWrapper.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.ActionWrapper;
  return proto.bosdyn.api.autowalk.ActionWrapper.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper}
 */
proto.bosdyn.api.autowalk.ActionWrapper.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit;
      reader.readMessage(value,proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit.deserializeBinaryFromReader);
      msg.setRobotBodySit(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose;
      reader.readMessage(value,proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose.deserializeBinaryFromReader);
      msg.setRobotBodyPose(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed;
      reader.readMessage(value,proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed.deserializeBinaryFromReader);
      msg.setSpotCamLed(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz;
      reader.readMessage(value,proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz.deserializeBinaryFromReader);
      msg.setSpotCamPtz(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing;
      reader.readMessage(value,proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.deserializeBinaryFromReader);
      msg.setArmSensorPointing(value);
      break;
    case 9:
      var value = new proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment;
      reader.readMessage(value,proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.deserializeBinaryFromReader);
      msg.setSpotCamAlignment(value);
      break;
    case 7:
      var value = new proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams;
      reader.readMessage(value,proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams.deserializeBinaryFromReader);
      msg.setGripperCameraParams(value);
      break;
    case 8:
      var value = new proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand;
      reader.readMessage(value,proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand.deserializeBinaryFromReader);
      msg.setGripperCommand(value);
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
proto.bosdyn.api.autowalk.ActionWrapper.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.ActionWrapper.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotBodySit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit.serializeBinaryToWriter
    );
  }
  f = message.getRobotBodyPose();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose.serializeBinaryToWriter
    );
  }
  f = message.getSpotCamLed();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed.serializeBinaryToWriter
    );
  }
  f = message.getSpotCamPtz();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz.serializeBinaryToWriter
    );
  }
  f = message.getArmSensorPointing();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.serializeBinaryToWriter
    );
  }
  f = message.getSpotCamAlignment();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.serializeBinaryToWriter
    );
  }
  f = message.getGripperCameraParams();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams.serializeBinaryToWriter
    );
  }
  f = message.getGripperCommand();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand.serializeBinaryToWriter
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
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit}
 */
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit;
  return proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit}
 */
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetTformBody: (f = msg.getTargetTformBody()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose}
 */
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose;
  return proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose}
 */
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setTargetTformBody(value);
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
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetTformBody();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.SE3Pose target_tform_body = 1;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose.prototype.getTargetTformBody = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 1));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose.prototype.setTargetTformBody = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose.prototype.clearTargetTformBody = function() {
  return this.setTargetTformBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose.prototype.hasTargetTformBody = function() {
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
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed.toObject = function(includeInstance, msg) {
  var f, obj = {
    brightnessesMap: (f = msg.getBrightnessesMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed;
  return proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getBrightnessesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readFloat, null, 0, 0.0);
         });
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
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBrightnessesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeFloat);
  }
};


/**
 * map<int32, float> brightnesses = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed.prototype.getBrightnessesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed.prototype.clearBrightnessesMap = function() {
  this.getBrightnessesMap().clear();
  return this;};





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
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz.toObject = function(includeInstance, msg) {
  var f, obj = {
    ptzPosition: (f = msg.getPtzPosition()) && bosdyn_api_spot_cam_ptz_pb.PtzPosition.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz;
  return proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_spot_cam_ptz_pb.PtzPosition;
      reader.readMessage(value,bosdyn_api_spot_cam_ptz_pb.PtzPosition.deserializeBinaryFromReader);
      msg.setPtzPosition(value);
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
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPtzPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_spot_cam_ptz_pb.PtzPosition.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.spot_cam.PtzPosition ptz_position = 1;
 * @return {?proto.bosdyn.api.spot_cam.PtzPosition}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz.prototype.getPtzPosition = function() {
  return /** @type{?proto.bosdyn.api.spot_cam.PtzPosition} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_cam_ptz_pb.PtzPosition, 1));
};


/**
 * @param {?proto.bosdyn.api.spot_cam.PtzPosition|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz.prototype.setPtzPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz.prototype.clearPtzPosition = function() {
  return this.setPtzPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz.prototype.hasPtzPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.repeatedFields_ = [2,5];



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
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.toObject = function(includeInstance, msg) {
  var f, obj = {
    alignmentsList: jspb.Message.toObjectList(msg.getAlignmentsList(),
    proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.toObject, includeInstance),
    targetTformSensor: (f = msg.getTargetTformSensor()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    finalZoom: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    targetSensorIdsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment;
  return proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment;
      reader.readMessage(value,proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.deserializeBinaryFromReader);
      msg.addAlignments(value);
      break;
    case 3:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setTargetTformSensor(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFinalZoom(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addTargetSensorIds(value);
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
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlignmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.serializeBinaryToWriter
    );
  }
  f = message.getTargetTformSensor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
  f = message.getFinalZoom();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getTargetSensorIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.oneofGroups_ = [[3]];

/**
 * @enum {number}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.ReferenceCase = {
  REFERENCE_NOT_SET: 0,
  SCENE_OBJECT_ID: 3
};

/**
 * @return {proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.ReferenceCase}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.prototype.getReferenceCase = function() {
  return /** @type {proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.ReferenceCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.oneofGroups_[0]));
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
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.toObject = function(includeInstance, msg) {
  var f, obj = {
    zoom: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    sensorId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sceneObjectId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isSkipped: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment;
  return proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setZoom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSensorId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSceneObjectId(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSkipped(value);
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
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZoom();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getSensorId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsSkipped();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional float zoom = 1;
 * @return {number}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.prototype.getZoom = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.prototype.setZoom = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string sensor_id = 2;
 * @return {string}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.prototype.getSensorId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.prototype.setSensorId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string scene_object_id = 3;
 * @return {string}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.prototype.getSceneObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.prototype.setSceneObjectId = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.prototype.clearSceneObjectId = function() {
  return jspb.Message.setOneofField(this, 3, proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.prototype.hasSceneObjectId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_skipped = 4;
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.prototype.getIsSkipped = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment.prototype.setIsSkipped = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated Alignment alignments = 2;
 * @return {!Array<!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment>}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.prototype.getAlignmentsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment>} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.prototype.setAlignmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.prototype.addAlignments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.Alignment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.prototype.clearAlignmentsList = function() {
  return this.setAlignmentsList([]);
};


/**
 * optional bosdyn.api.SE3Pose target_tform_sensor = 3;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.prototype.getTargetTformSensor = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 3));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.prototype.setTargetTformSensor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.prototype.clearTargetTformSensor = function() {
  return this.setTargetTformSensor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.prototype.hasTargetTformSensor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float final_zoom = 4;
 * @return {number}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.prototype.getFinalZoom = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.prototype.setFinalZoom = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * repeated string target_sensor_ids = 5;
 * @return {!Array<string>}
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.prototype.getTargetSensorIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.prototype.setTargetSensorIdsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.prototype.addTargetSensorIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment.prototype.clearTargetSensorIdsList = function() {
  return this.setTargetSensorIdsList([]);
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
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.toObject = function(includeInstance, msg) {
  var f, obj = {
    jointTrajectory: (f = msg.getJointTrajectory()) && bosdyn_api_arm_command_pb.ArmJointTrajectory.toObject(includeInstance, f),
    wristTformTool: (f = msg.getWristTformTool()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    poseTrajectoryRtTarget: (f = msg.getPoseTrajectoryRtTarget()) && bosdyn_api_trajectory_pb.SE3Trajectory.toObject(includeInstance, f),
    targetTformMeasuredOffset: (f = msg.getTargetTformMeasuredOffset()) && bosdyn_api_geometry_pb.SE2Pose.toObject(includeInstance, f),
    bodyAssistParams: (f = msg.getBodyAssistParams()) && bosdyn_api_spot_robot_command_pb.BodyControlParams.BodyAssistForManipulation.toObject(includeInstance, f),
    forceStowOverride: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing}
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing;
  return proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing}
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new bosdyn_api_arm_command_pb.ArmJointTrajectory;
      reader.readMessage(value,bosdyn_api_arm_command_pb.ArmJointTrajectory.deserializeBinaryFromReader);
      msg.setJointTrajectory(value);
      break;
    case 3:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setWristTformTool(value);
      break;
    case 4:
      var value = new bosdyn_api_trajectory_pb.SE3Trajectory;
      reader.readMessage(value,bosdyn_api_trajectory_pb.SE3Trajectory.deserializeBinaryFromReader);
      msg.setPoseTrajectoryRtTarget(value);
      break;
    case 7:
      var value = new bosdyn_api_geometry_pb.SE2Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE2Pose.deserializeBinaryFromReader);
      msg.setTargetTformMeasuredOffset(value);
      break;
    case 5:
      var value = new bosdyn_api_spot_robot_command_pb.BodyControlParams.BodyAssistForManipulation;
      reader.readMessage(value,bosdyn_api_spot_robot_command_pb.BodyControlParams.BodyAssistForManipulation.deserializeBinaryFromReader);
      msg.setBodyAssistParams(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForceStowOverride(value);
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
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJointTrajectory();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_arm_command_pb.ArmJointTrajectory.serializeBinaryToWriter
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
  f = message.getPoseTrajectoryRtTarget();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_trajectory_pb.SE3Trajectory.serializeBinaryToWriter
    );
  }
  f = message.getTargetTformMeasuredOffset();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      bosdyn_api_geometry_pb.SE2Pose.serializeBinaryToWriter
    );
  }
  f = message.getBodyAssistParams();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_spot_robot_command_pb.BodyControlParams.BodyAssistForManipulation.serializeBinaryToWriter
    );
  }
  f = message.getForceStowOverride();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional bosdyn.api.ArmJointTrajectory joint_trajectory = 2;
 * @return {?proto.bosdyn.api.ArmJointTrajectory}
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.getJointTrajectory = function() {
  return /** @type{?proto.bosdyn.api.ArmJointTrajectory} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_arm_command_pb.ArmJointTrajectory, 2));
};


/**
 * @param {?proto.bosdyn.api.ArmJointTrajectory|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.setJointTrajectory = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.clearJointTrajectory = function() {
  return this.setJointTrajectory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.hasJointTrajectory = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bosdyn.api.SE3Pose wrist_tform_tool = 3;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.getWristTformTool = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 3));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.setWristTformTool = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.clearWristTformTool = function() {
  return this.setWristTformTool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.hasWristTformTool = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bosdyn.api.SE3Trajectory pose_trajectory_rt_target = 4;
 * @return {?proto.bosdyn.api.SE3Trajectory}
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.getPoseTrajectoryRtTarget = function() {
  return /** @type{?proto.bosdyn.api.SE3Trajectory} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_trajectory_pb.SE3Trajectory, 4));
};


/**
 * @param {?proto.bosdyn.api.SE3Trajectory|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.setPoseTrajectoryRtTarget = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.clearPoseTrajectoryRtTarget = function() {
  return this.setPoseTrajectoryRtTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.hasPoseTrajectoryRtTarget = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bosdyn.api.SE2Pose target_tform_measured_offset = 7;
 * @return {?proto.bosdyn.api.SE2Pose}
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.getTargetTformMeasuredOffset = function() {
  return /** @type{?proto.bosdyn.api.SE2Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE2Pose, 7));
};


/**
 * @param {?proto.bosdyn.api.SE2Pose|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.setTargetTformMeasuredOffset = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.clearTargetTformMeasuredOffset = function() {
  return this.setTargetTformMeasuredOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.hasTargetTformMeasuredOffset = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bosdyn.api.spot.BodyControlParams.BodyAssistForManipulation body_assist_params = 5;
 * @return {?proto.bosdyn.api.spot.BodyControlParams.BodyAssistForManipulation}
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.getBodyAssistParams = function() {
  return /** @type{?proto.bosdyn.api.spot.BodyControlParams.BodyAssistForManipulation} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_robot_command_pb.BodyControlParams.BodyAssistForManipulation, 5));
};


/**
 * @param {?proto.bosdyn.api.spot.BodyControlParams.BodyAssistForManipulation|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.setBodyAssistParams = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.clearBodyAssistParams = function() {
  return this.setBodyAssistParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.hasBodyAssistParams = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool force_stow_override = 6;
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.getForceStowOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing.prototype.setForceStowOverride = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && bosdyn_api_gripper_camera_param_pb.GripperCameraParams.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams}
 */
proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams;
  return proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams}
 */
proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_gripper_camera_param_pb.GripperCameraParams;
      reader.readMessage(value,bosdyn_api_gripper_camera_param_pb.GripperCameraParams.deserializeBinaryFromReader);
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
proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_gripper_camera_param_pb.GripperCameraParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.GripperCameraParams params = 1;
 * @return {?proto.bosdyn.api.GripperCameraParams}
 */
proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams.prototype.getParams = function() {
  return /** @type{?proto.bosdyn.api.GripperCameraParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_gripper_camera_param_pb.GripperCameraParams, 1));
};


/**
 * @param {?proto.bosdyn.api.GripperCameraParams|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams.prototype.hasParams = function() {
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
proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && bosdyn_api_gripper_command_pb.GripperCommand.Request.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand}
 */
proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand;
  return proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand}
 */
proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_gripper_command_pb.GripperCommand.Request;
      reader.readMessage(value,bosdyn_api_gripper_command_pb.GripperCommand.Request.deserializeBinaryFromReader);
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
proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_gripper_command_pb.GripperCommand.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.GripperCommand.Request request = 1;
 * @return {?proto.bosdyn.api.GripperCommand.Request}
 */
proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand.prototype.getRequest = function() {
  return /** @type{?proto.bosdyn.api.GripperCommand.Request} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_gripper_command_pb.GripperCommand.Request, 1));
};


/**
 * @param {?proto.bosdyn.api.GripperCommand.Request|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RobotBodySit robot_body_sit = 1;
 * @return {?proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit}
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.getRobotBodySit = function() {
  return /** @type{?proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit, 1));
};


/**
 * @param {?proto.bosdyn.api.autowalk.ActionWrapper.RobotBodySit|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.prototype.setRobotBodySit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.clearRobotBodySit = function() {
  return this.setRobotBodySit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.hasRobotBodySit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RobotBodyPose robot_body_pose = 2;
 * @return {?proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose}
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.getRobotBodyPose = function() {
  return /** @type{?proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose, 2));
};


/**
 * @param {?proto.bosdyn.api.autowalk.ActionWrapper.RobotBodyPose|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.prototype.setRobotBodyPose = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.clearRobotBodyPose = function() {
  return this.setRobotBodyPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.hasRobotBodyPose = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SpotCamLed spot_cam_led = 4;
 * @return {?proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed}
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.getSpotCamLed = function() {
  return /** @type{?proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed, 4));
};


/**
 * @param {?proto.bosdyn.api.autowalk.ActionWrapper.SpotCamLed|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.prototype.setSpotCamLed = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.clearSpotCamLed = function() {
  return this.setSpotCamLed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.hasSpotCamLed = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SpotCamPtz spot_cam_ptz = 5;
 * @return {?proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz}
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.getSpotCamPtz = function() {
  return /** @type{?proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz, 5));
};


/**
 * @param {?proto.bosdyn.api.autowalk.ActionWrapper.SpotCamPtz|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.prototype.setSpotCamPtz = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.clearSpotCamPtz = function() {
  return this.setSpotCamPtz(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.hasSpotCamPtz = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ArmSensorPointing arm_sensor_pointing = 6;
 * @return {?proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing}
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.getArmSensorPointing = function() {
  return /** @type{?proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing, 6));
};


/**
 * @param {?proto.bosdyn.api.autowalk.ActionWrapper.ArmSensorPointing|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.prototype.setArmSensorPointing = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.clearArmSensorPointing = function() {
  return this.setArmSensorPointing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.hasArmSensorPointing = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SpotCamAlignment spot_cam_alignment = 9;
 * @return {?proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment}
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.getSpotCamAlignment = function() {
  return /** @type{?proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment, 9));
};


/**
 * @param {?proto.bosdyn.api.autowalk.ActionWrapper.SpotCamAlignment|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.prototype.setSpotCamAlignment = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.clearSpotCamAlignment = function() {
  return this.setSpotCamAlignment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.hasSpotCamAlignment = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional GripperCameraParams gripper_camera_params = 7;
 * @return {?proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams}
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.getGripperCameraParams = function() {
  return /** @type{?proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams, 7));
};


/**
 * @param {?proto.bosdyn.api.autowalk.ActionWrapper.GripperCameraParams|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.prototype.setGripperCameraParams = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.clearGripperCameraParams = function() {
  return this.setGripperCameraParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.hasGripperCameraParams = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional GripperCommand gripper_command = 8;
 * @return {?proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand}
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.getGripperCommand = function() {
  return /** @type{?proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand, 8));
};


/**
 * @param {?proto.bosdyn.api.autowalk.ActionWrapper.GripperCommand|undefined} value
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper} returns this
*/
proto.bosdyn.api.autowalk.ActionWrapper.prototype.setGripperCommand = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.ActionWrapper} returns this
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.clearGripperCommand = function() {
  return this.setGripperCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.ActionWrapper.prototype.hasGripperCommand = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.autowalk.FailureBehavior.oneofGroups_ = [[3,4,5,6]];

/**
 * @enum {number}
 */
proto.bosdyn.api.autowalk.FailureBehavior.DefaultBehaviorCase = {
  DEFAULT_BEHAVIOR_NOT_SET: 0,
  SAFE_POWER_OFF: 3,
  PROCEED_IF_ABLE: 4,
  RETURN_TO_START_AND_TRY_AGAIN_LATER: 5,
  RETURN_TO_START_AND_TERMINATE: 6
};

/**
 * @return {proto.bosdyn.api.autowalk.FailureBehavior.DefaultBehaviorCase}
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.getDefaultBehaviorCase = function() {
  return /** @type {proto.bosdyn.api.autowalk.FailureBehavior.DefaultBehaviorCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.autowalk.FailureBehavior.oneofGroups_[0]));
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
proto.bosdyn.api.autowalk.FailureBehavior.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.FailureBehavior.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.FailureBehavior} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.FailureBehavior.toObject = function(includeInstance, msg) {
  var f, obj = {
    retryCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    promptDuration: (f = msg.getPromptDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    safePowerOff: (f = msg.getSafePowerOff()) && proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff.toObject(includeInstance, f),
    proceedIfAble: (f = msg.getProceedIfAble()) && proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble.toObject(includeInstance, f),
    returnToStartAndTryAgainLater: (f = msg.getReturnToStartAndTryAgainLater()) && proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater.toObject(includeInstance, f),
    returnToStartAndTerminate: (f = msg.getReturnToStartAndTerminate()) && proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior}
 */
proto.bosdyn.api.autowalk.FailureBehavior.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.FailureBehavior;
  return proto.bosdyn.api.autowalk.FailureBehavior.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.FailureBehavior} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior}
 */
proto.bosdyn.api.autowalk.FailureBehavior.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRetryCount(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setPromptDuration(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff;
      reader.readMessage(value,proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff.deserializeBinaryFromReader);
      msg.setSafePowerOff(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble;
      reader.readMessage(value,proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble.deserializeBinaryFromReader);
      msg.setProceedIfAble(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater;
      reader.readMessage(value,proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater.deserializeBinaryFromReader);
      msg.setReturnToStartAndTryAgainLater(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate;
      reader.readMessage(value,proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate.deserializeBinaryFromReader);
      msg.setReturnToStartAndTerminate(value);
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
proto.bosdyn.api.autowalk.FailureBehavior.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.FailureBehavior.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.FailureBehavior} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.FailureBehavior.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRetryCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPromptDuration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getSafePowerOff();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff.serializeBinaryToWriter
    );
  }
  f = message.getProceedIfAble();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble.serializeBinaryToWriter
    );
  }
  f = message.getReturnToStartAndTryAgainLater();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater.serializeBinaryToWriter
    );
  }
  f = message.getReturnToStartAndTerminate();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate.serializeBinaryToWriter
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
proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && bosdyn_api_basic_command_pb.SafePowerOffCommand.Request.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff}
 */
proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff;
  return proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff}
 */
proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_basic_command_pb.SafePowerOffCommand.Request;
      reader.readMessage(value,bosdyn_api_basic_command_pb.SafePowerOffCommand.Request.deserializeBinaryFromReader);
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
proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_basic_command_pb.SafePowerOffCommand.Request.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.SafePowerOffCommand.Request request = 1;
 * @return {?proto.bosdyn.api.SafePowerOffCommand.Request}
 */
proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff.prototype.getRequest = function() {
  return /** @type{?proto.bosdyn.api.SafePowerOffCommand.Request} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_basic_command_pb.SafePowerOffCommand.Request, 1));
};


/**
 * @param {?proto.bosdyn.api.SafePowerOffCommand.Request|undefined} value
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff} returns this
*/
proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff} returns this
 */
proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff.prototype.hasRequest = function() {
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
proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble}
 */
proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble;
  return proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble}
 */
proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater.toObject = function(includeInstance, msg) {
  var f, obj = {
    tryAgainDelay: (f = msg.getTryAgainDelay()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater}
 */
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater;
  return proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater}
 */
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTryAgainDelay(value);
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
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTryAgainDelay();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration try_again_delay = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater.prototype.getTryAgainDelay = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater} returns this
*/
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater.prototype.setTryAgainDelay = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater} returns this
 */
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater.prototype.clearTryAgainDelay = function() {
  return this.setTryAgainDelay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater.prototype.hasTryAgainDelay = function() {
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
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate}
 */
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate;
  return proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate}
 */
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional int32 retry_count = 1;
 * @return {number}
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.getRetryCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior} returns this
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.setRetryCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Duration prompt_duration = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.getPromptDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior} returns this
*/
proto.bosdyn.api.autowalk.FailureBehavior.prototype.setPromptDuration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior} returns this
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.clearPromptDuration = function() {
  return this.setPromptDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.hasPromptDuration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SafePowerOff safe_power_off = 3;
 * @return {?proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff}
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.getSafePowerOff = function() {
  return /** @type{?proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff, 3));
};


/**
 * @param {?proto.bosdyn.api.autowalk.FailureBehavior.SafePowerOff|undefined} value
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior} returns this
*/
proto.bosdyn.api.autowalk.FailureBehavior.prototype.setSafePowerOff = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bosdyn.api.autowalk.FailureBehavior.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior} returns this
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.clearSafePowerOff = function() {
  return this.setSafePowerOff(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.hasSafePowerOff = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ProceedIfAble proceed_if_able = 4;
 * @return {?proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble}
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.getProceedIfAble = function() {
  return /** @type{?proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble, 4));
};


/**
 * @param {?proto.bosdyn.api.autowalk.FailureBehavior.ProceedIfAble|undefined} value
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior} returns this
*/
proto.bosdyn.api.autowalk.FailureBehavior.prototype.setProceedIfAble = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bosdyn.api.autowalk.FailureBehavior.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior} returns this
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.clearProceedIfAble = function() {
  return this.setProceedIfAble(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.hasProceedIfAble = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ReturnToStartAndTryAgainLater return_to_start_and_try_again_later = 5;
 * @return {?proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater}
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.getReturnToStartAndTryAgainLater = function() {
  return /** @type{?proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater, 5));
};


/**
 * @param {?proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTryAgainLater|undefined} value
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior} returns this
*/
proto.bosdyn.api.autowalk.FailureBehavior.prototype.setReturnToStartAndTryAgainLater = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.bosdyn.api.autowalk.FailureBehavior.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior} returns this
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.clearReturnToStartAndTryAgainLater = function() {
  return this.setReturnToStartAndTryAgainLater(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.hasReturnToStartAndTryAgainLater = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ReturnToStartAndTerminate return_to_start_and_terminate = 6;
 * @return {?proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate}
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.getReturnToStartAndTerminate = function() {
  return /** @type{?proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate, 6));
};


/**
 * @param {?proto.bosdyn.api.autowalk.FailureBehavior.ReturnToStartAndTerminate|undefined} value
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior} returns this
*/
proto.bosdyn.api.autowalk.FailureBehavior.prototype.setReturnToStartAndTerminate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.bosdyn.api.autowalk.FailureBehavior.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.autowalk.FailureBehavior} returns this
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.clearReturnToStartAndTerminate = function() {
  return this.setReturnToStartAndTerminate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.autowalk.FailureBehavior.prototype.hasReturnToStartAndTerminate = function() {
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
proto.bosdyn.api.autowalk.BatteryMonitor.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.autowalk.BatteryMonitor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.autowalk.BatteryMonitor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.BatteryMonitor.toObject = function(includeInstance, msg) {
  var f, obj = {
    batteryStartThreshold: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    batteryStopThreshold: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.bosdyn.api.autowalk.BatteryMonitor}
 */
proto.bosdyn.api.autowalk.BatteryMonitor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.autowalk.BatteryMonitor;
  return proto.bosdyn.api.autowalk.BatteryMonitor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.autowalk.BatteryMonitor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.autowalk.BatteryMonitor}
 */
proto.bosdyn.api.autowalk.BatteryMonitor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBatteryStartThreshold(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBatteryStopThreshold(value);
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
proto.bosdyn.api.autowalk.BatteryMonitor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.autowalk.BatteryMonitor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.autowalk.BatteryMonitor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.autowalk.BatteryMonitor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatteryStartThreshold();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getBatteryStopThreshold();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float battery_start_threshold = 2;
 * @return {number}
 */
proto.bosdyn.api.autowalk.BatteryMonitor.prototype.getBatteryStartThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.autowalk.BatteryMonitor} returns this
 */
proto.bosdyn.api.autowalk.BatteryMonitor.prototype.setBatteryStartThreshold = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float battery_stop_threshold = 3;
 * @return {number}
 */
proto.bosdyn.api.autowalk.BatteryMonitor.prototype.getBatteryStopThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.autowalk.BatteryMonitor} returns this
 */
proto.bosdyn.api.autowalk.BatteryMonitor.prototype.setBatteryStopThreshold = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


goog.object.extend(exports, proto.bosdyn.api.autowalk);

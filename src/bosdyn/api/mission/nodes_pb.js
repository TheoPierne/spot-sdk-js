// source: bosdyn/api/mission/nodes.proto
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

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var bosdyn_api_alerts_pb = require('../../../bosdyn/api/alerts_pb.js');
goog.object.extend(proto, bosdyn_api_alerts_pb);
var bosdyn_api_docking_docking_pb = require('../../../bosdyn/api/docking/docking_pb.js');
goog.object.extend(proto, bosdyn_api_docking_docking_pb);
var bosdyn_api_geometry_pb = require('../../../bosdyn/api/geometry_pb.js');
goog.object.extend(proto, bosdyn_api_geometry_pb);
var bosdyn_api_gripper_camera_param_pb = require('../../../bosdyn/api/gripper_camera_param_pb.js');
goog.object.extend(proto, bosdyn_api_gripper_camera_param_pb);
var bosdyn_api_image_pb = require('../../../bosdyn/api/image_pb.js');
goog.object.extend(proto, bosdyn_api_image_pb);
var bosdyn_api_spot_choreography_sequence_pb = require('../../../bosdyn/api/spot/choreography_sequence_pb.js');
goog.object.extend(proto, bosdyn_api_spot_choreography_sequence_pb);
var bosdyn_api_spot_cam_camera_pb = require('../../../bosdyn/api/spot_cam/camera_pb.js');
goog.object.extend(proto, bosdyn_api_spot_cam_camera_pb);
var bosdyn_api_spot_cam_logging_pb = require('../../../bosdyn/api/spot_cam/logging_pb.js');
goog.object.extend(proto, bosdyn_api_spot_cam_logging_pb);
var bosdyn_api_spot_cam_ptz_pb = require('../../../bosdyn/api/spot_cam/ptz_pb.js');
goog.object.extend(proto, bosdyn_api_spot_cam_ptz_pb);
var bosdyn_api_robot_command_pb = require('../../../bosdyn/api/robot_command_pb.js');
goog.object.extend(proto, bosdyn_api_robot_command_pb);
var bosdyn_api_power_pb = require('../../../bosdyn/api/power_pb.js');
goog.object.extend(proto, bosdyn_api_power_pb);
var bosdyn_api_data_acquisition_pb = require('../../../bosdyn/api/data_acquisition_pb.js');
goog.object.extend(proto, bosdyn_api_data_acquisition_pb);
var bosdyn_api_data_acquisition_store_pb = require('../../../bosdyn/api/data_acquisition_store_pb.js');
goog.object.extend(proto, bosdyn_api_data_acquisition_store_pb);
var bosdyn_api_data_buffer_pb = require('../../../bosdyn/api/data_buffer_pb.js');
goog.object.extend(proto, bosdyn_api_data_buffer_pb);
var bosdyn_api_graph_nav_graph_nav_pb = require('../../../bosdyn/api/graph_nav/graph_nav_pb.js');
goog.object.extend(proto, bosdyn_api_graph_nav_graph_nav_pb);
var bosdyn_api_graph_nav_nav_pb = require('../../../bosdyn/api/graph_nav/nav_pb.js');
goog.object.extend(proto, bosdyn_api_graph_nav_nav_pb);
var bosdyn_api_manipulation_api_pb = require('../../../bosdyn/api/manipulation_api_pb.js');
goog.object.extend(proto, bosdyn_api_manipulation_api_pb);
var bosdyn_api_mission_util_pb = require('../../../bosdyn/api/mission/util_pb.js');
goog.object.extend(proto, bosdyn_api_mission_util_pb);
var bosdyn_api_service_customization_pb = require('../../../bosdyn/api/service_customization_pb.js');
goog.object.extend(proto, bosdyn_api_service_customization_pb);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynDockState', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynGraphNavLocalize', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynGraphNavState', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynGripperCameraParamsState', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynNavigateRoute', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynNavigateTo', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynNavigateToAnchor', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynPowerRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynQueryStoredCaptures', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynRecordEvent', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynRobotCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynRobotState', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.ClearBehaviorFaults', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Condition', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Condition.Compare', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Condition.HandleStaleness', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Condition.Operand', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Condition.Operand.TypeCase', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.ConstantResult', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.CreateMissionText', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.DataAcquisition', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.DataAcquisition.CompletionBehavior', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.DataAcquisitionOnInterruption', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.DateToBlackboard', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.DefineBlackboard', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Dock', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Dock.IdCase', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.ExecuteChoreography', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.ForDuration', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.ForDuration.DurationTypeCase', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.FormatBlackboard', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.MissionUploadChoreography', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Node', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Node.TypeCase', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.ParallelAnd', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Prompt', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Prompt.AnswerSpecCase', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Prompt.Option', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Prompt.OptionsList', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Prompt.SeveritySpecCase', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.RemoteGrpc', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Repeat', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.RestartWhenPaused', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.RetainLease', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Retry', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Selector', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Sequence', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SetBlackboard', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SetGraspOverride', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SetGripperCameraParams', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SetGripperCameraParams.ParamsCase', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SimpleParallel', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Sleep', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Sleep.DurationCase', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SpotCamFocusState', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SpotCamLed', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SpotCamNamedPosition', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SpotCamPtz', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SpotCamResetAutofocus', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SpotCamStoreMedia', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.StoreMetadata', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.StoreMetadata.DataCase', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Switch', null, global);
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
proto.bosdyn.api.mission.Node = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.mission.Node.repeatedFields_, proto.bosdyn.api.mission.Node.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.mission.Node, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.Node.displayName = 'proto.bosdyn.api.mission.Node';
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
proto.bosdyn.api.mission.Sequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.mission.Sequence.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.mission.Sequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.Sequence.displayName = 'proto.bosdyn.api.mission.Sequence';
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
proto.bosdyn.api.mission.Selector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.mission.Selector.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.mission.Selector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.Selector.displayName = 'proto.bosdyn.api.mission.Selector';
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
proto.bosdyn.api.mission.Switch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.Switch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.Switch.displayName = 'proto.bosdyn.api.mission.Switch';
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
proto.bosdyn.api.mission.Repeat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.Repeat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.Repeat.displayName = 'proto.bosdyn.api.mission.Repeat';
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
proto.bosdyn.api.mission.Retry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.Retry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.Retry.displayName = 'proto.bosdyn.api.mission.Retry';
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
proto.bosdyn.api.mission.ForDuration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.mission.ForDuration.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.mission.ForDuration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.ForDuration.displayName = 'proto.bosdyn.api.mission.ForDuration';
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
proto.bosdyn.api.mission.SimpleParallel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.SimpleParallel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.SimpleParallel.displayName = 'proto.bosdyn.api.mission.SimpleParallel';
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
proto.bosdyn.api.mission.ParallelAnd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.mission.ParallelAnd.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.mission.ParallelAnd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.ParallelAnd.displayName = 'proto.bosdyn.api.mission.ParallelAnd';
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
proto.bosdyn.api.mission.Condition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.Condition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.Condition.displayName = 'proto.bosdyn.api.mission.Condition';
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
proto.bosdyn.api.mission.Condition.Operand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.mission.Condition.Operand.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.mission.Condition.Operand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.Condition.Operand.displayName = 'proto.bosdyn.api.mission.Condition.Operand';
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
proto.bosdyn.api.mission.BosdynRobotState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.BosdynRobotState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.BosdynRobotState.displayName = 'proto.bosdyn.api.mission.BosdynRobotState';
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
proto.bosdyn.api.mission.BosdynDockState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.BosdynDockState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.BosdynDockState.displayName = 'proto.bosdyn.api.mission.BosdynDockState';
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
proto.bosdyn.api.mission.BosdynRobotCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.BosdynRobotCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.BosdynRobotCommand.displayName = 'proto.bosdyn.api.mission.BosdynRobotCommand';
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
proto.bosdyn.api.mission.BosdynPowerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.BosdynPowerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.BosdynPowerRequest.displayName = 'proto.bosdyn.api.mission.BosdynPowerRequest';
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
proto.bosdyn.api.mission.BosdynNavigateTo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.BosdynNavigateTo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.BosdynNavigateTo.displayName = 'proto.bosdyn.api.mission.BosdynNavigateTo';
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
proto.bosdyn.api.mission.BosdynNavigateToAnchor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.BosdynNavigateToAnchor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.BosdynNavigateToAnchor.displayName = 'proto.bosdyn.api.mission.BosdynNavigateToAnchor';
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
proto.bosdyn.api.mission.BosdynNavigateRoute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.BosdynNavigateRoute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.BosdynNavigateRoute.displayName = 'proto.bosdyn.api.mission.BosdynNavigateRoute';
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
proto.bosdyn.api.mission.BosdynGraphNavState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.BosdynGraphNavState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.BosdynGraphNavState.displayName = 'proto.bosdyn.api.mission.BosdynGraphNavState';
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
proto.bosdyn.api.mission.BosdynGraphNavLocalize = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.BosdynGraphNavLocalize, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.BosdynGraphNavLocalize.displayName = 'proto.bosdyn.api.mission.BosdynGraphNavLocalize';
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
proto.bosdyn.api.mission.BosdynRecordEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.BosdynRecordEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.BosdynRecordEvent.displayName = 'proto.bosdyn.api.mission.BosdynRecordEvent';
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
proto.bosdyn.api.mission.RemoteGrpc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.mission.RemoteGrpc.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.mission.RemoteGrpc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.RemoteGrpc.displayName = 'proto.bosdyn.api.mission.RemoteGrpc';
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
proto.bosdyn.api.mission.Sleep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.mission.Sleep.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.mission.Sleep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.Sleep.displayName = 'proto.bosdyn.api.mission.Sleep';
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
proto.bosdyn.api.mission.ExecuteChoreography = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.ExecuteChoreography, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.ExecuteChoreography.displayName = 'proto.bosdyn.api.mission.ExecuteChoreography';
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
proto.bosdyn.api.mission.MissionUploadChoreography = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.mission.MissionUploadChoreography.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.mission.MissionUploadChoreography, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.MissionUploadChoreography.displayName = 'proto.bosdyn.api.mission.MissionUploadChoreography';
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
proto.bosdyn.api.mission.Prompt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.mission.Prompt.repeatedFields_, proto.bosdyn.api.mission.Prompt.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.mission.Prompt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.Prompt.displayName = 'proto.bosdyn.api.mission.Prompt';
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
proto.bosdyn.api.mission.Prompt.Option = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.Prompt.Option, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.Prompt.Option.displayName = 'proto.bosdyn.api.mission.Prompt.Option';
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
proto.bosdyn.api.mission.Prompt.OptionsList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.mission.Prompt.OptionsList.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.mission.Prompt.OptionsList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.Prompt.OptionsList.displayName = 'proto.bosdyn.api.mission.Prompt.OptionsList';
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
proto.bosdyn.api.mission.BosdynGripperCameraParamsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.BosdynGripperCameraParamsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.BosdynGripperCameraParamsState.displayName = 'proto.bosdyn.api.mission.BosdynGripperCameraParamsState';
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
proto.bosdyn.api.mission.SetGripperCameraParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.mission.SetGripperCameraParams.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.mission.SetGripperCameraParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.SetGripperCameraParams.displayName = 'proto.bosdyn.api.mission.SetGripperCameraParams';
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
proto.bosdyn.api.mission.SetGraspOverride = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.SetGraspOverride, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.SetGraspOverride.displayName = 'proto.bosdyn.api.mission.SetGraspOverride';
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
proto.bosdyn.api.mission.SpotCamPtz = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.SpotCamPtz, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.SpotCamPtz.displayName = 'proto.bosdyn.api.mission.SpotCamPtz';
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
proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.displayName = 'proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters';
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
proto.bosdyn.api.mission.SpotCamNamedPosition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.SpotCamNamedPosition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.SpotCamNamedPosition.displayName = 'proto.bosdyn.api.mission.SpotCamNamedPosition';
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
proto.bosdyn.api.mission.SpotCamStoreMedia = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.SpotCamStoreMedia, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.SpotCamStoreMedia.displayName = 'proto.bosdyn.api.mission.SpotCamStoreMedia';
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
proto.bosdyn.api.mission.SpotCamLed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.SpotCamLed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.SpotCamLed.displayName = 'proto.bosdyn.api.mission.SpotCamLed';
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
proto.bosdyn.api.mission.SpotCamFocusState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.SpotCamFocusState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.SpotCamFocusState.displayName = 'proto.bosdyn.api.mission.SpotCamFocusState';
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
proto.bosdyn.api.mission.SpotCamResetAutofocus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.SpotCamResetAutofocus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.SpotCamResetAutofocus.displayName = 'proto.bosdyn.api.mission.SpotCamResetAutofocus';
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
proto.bosdyn.api.mission.Dock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.mission.Dock.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.mission.Dock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.Dock.displayName = 'proto.bosdyn.api.mission.Dock';
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
proto.bosdyn.api.mission.StoreMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.mission.StoreMetadata.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.mission.StoreMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.StoreMetadata.displayName = 'proto.bosdyn.api.mission.StoreMetadata';
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
proto.bosdyn.api.mission.DataAcquisition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.DataAcquisition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.DataAcquisition.displayName = 'proto.bosdyn.api.mission.DataAcquisition';
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
proto.bosdyn.api.mission.RetainLease = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.RetainLease, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.RetainLease.displayName = 'proto.bosdyn.api.mission.RetainLease';
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
proto.bosdyn.api.mission.DefineBlackboard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.mission.DefineBlackboard.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.mission.DefineBlackboard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.DefineBlackboard.displayName = 'proto.bosdyn.api.mission.DefineBlackboard';
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
proto.bosdyn.api.mission.SetBlackboard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.mission.SetBlackboard.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.mission.SetBlackboard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.SetBlackboard.displayName = 'proto.bosdyn.api.mission.SetBlackboard';
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
proto.bosdyn.api.mission.FormatBlackboard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.FormatBlackboard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.FormatBlackboard.displayName = 'proto.bosdyn.api.mission.FormatBlackboard';
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
proto.bosdyn.api.mission.DateToBlackboard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.DateToBlackboard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.DateToBlackboard.displayName = 'proto.bosdyn.api.mission.DateToBlackboard';
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
proto.bosdyn.api.mission.BosdynQueryStoredCaptures = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.mission.BosdynQueryStoredCaptures.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.mission.BosdynQueryStoredCaptures, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.BosdynQueryStoredCaptures.displayName = 'proto.bosdyn.api.mission.BosdynQueryStoredCaptures';
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
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat.displayName = 'proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat';
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
proto.bosdyn.api.mission.ConstantResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.ConstantResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.ConstantResult.displayName = 'proto.bosdyn.api.mission.ConstantResult';
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
proto.bosdyn.api.mission.RestartWhenPaused = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.RestartWhenPaused, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.RestartWhenPaused.displayName = 'proto.bosdyn.api.mission.RestartWhenPaused';
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
proto.bosdyn.api.mission.DataAcquisitionOnInterruption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.mission.DataAcquisitionOnInterruption.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.mission.DataAcquisitionOnInterruption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.DataAcquisitionOnInterruption.displayName = 'proto.bosdyn.api.mission.DataAcquisitionOnInterruption';
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
proto.bosdyn.api.mission.ClearBehaviorFaults = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.ClearBehaviorFaults, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.ClearBehaviorFaults.displayName = 'proto.bosdyn.api.mission.ClearBehaviorFaults';
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
proto.bosdyn.api.mission.CreateMissionText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.mission.CreateMissionText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.mission.CreateMissionText.displayName = 'proto.bosdyn.api.mission.CreateMissionText';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.mission.Node.repeatedFields_ = [6,7,8];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.mission.Node.oneofGroups_ = [[4,5,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,58,38,63,39,40,41,42,43,49,50,51,52,54,55,56,57,59,60]];

/**
 * @enum {number}
 */
proto.bosdyn.api.mission.Node.TypeCase = {
  TYPE_NOT_SET: 0,
  IMPL: 4,
  NODE_REFERENCE: 5,
  CONDITION: 9,
  SEQUENCE: 10,
  SELECTOR: 11,
  REPEAT: 12,
  RETAIN_LEASE: 13,
  RETRY: 14,
  FOR_DURATION: 15,
  BOSDYN_DOCK_STATE: 16,
  BOSDYN_POWER_REQUEST: 17,
  BOSDYN_ROBOT_STATE: 18,
  BOSDYN_ROBOT_COMMAND: 19,
  REMOTE_GRPC: 20,
  SLEEP: 21,
  PROMPT: 22,
  SET_BLACKBOARD: 23,
  DATE_TO_BLACKBOARD: 24,
  DEFINE_BLACKBOARD: 25,
  FORMAT_BLACKBOARD: 26,
  CONSTANT_RESULT: 27,
  BOSDYN_NAVIGATE_ROUTE: 29,
  BOSDYN_NAVIGATE_TO: 30,
  BOSDYN_GRAPH_NAV_STATE: 31,
  BOSDYN_GRAPH_NAV_LOCALIZE: 32,
  BOSDYN_RECORD_EVENT: 33,
  SIMPLE_PARALLEL: 34,
  SPOT_CAM_PTZ: 35,
  SPOT_CAM_STORE_MEDIA: 36,
  SPOT_CAM_LED: 37,
  SPOT_CAM_FOCUS_STATE: 58,
  SPOT_CAM_RESET_AUTOFOCUS: 38,
  SPOT_CAM_NAMED_POSITION: 63,
  STORE_METADATA: 39,
  SWITCH: 40,
  DATA_ACQUISITION: 41,
  DATA_ACQUISITION_ON_INTERRUPTION: 42,
  DOCK: 43,
  RESTART_WHEN_PAUSED: 49,
  CLEAR_BEHAVIOR_FAULTS: 50,
  BOSDYN_GRIPPER_CAMERA_PARAMS_STATE: 51,
  SET_GRIPPER_CAMERA_PARAMS: 52,
  PARALLEL_AND: 54,
  SET_GRASP_OVERRIDE: 55,
  EXECUTE_CHOREOGRAPHY: 56,
  MISSION_UPLOAD_CHOREOGRAPHY: 57,
  CREATE_MISSION_TEXT: 59,
  BOSDYN_QUERY_STORED_CAPTURES: 60
};

/**
 * @return {proto.bosdyn.api.mission.Node.TypeCase}
 */
proto.bosdyn.api.mission.Node.prototype.getTypeCase = function() {
  return /** @type {proto.bosdyn.api.mission.Node.TypeCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.mission.Node.oneofGroups_[0]));
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
proto.bosdyn.api.mission.Node.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.Node.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.Node} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Node.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userData: (f = msg.getUserData()) && bosdyn_api_mission_util_pb.UserData.toObject(includeInstance, f),
    referenceId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    impl: (f = msg.getImpl()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    nodeReference: jspb.Message.getFieldWithDefault(msg, 5, ""),
    condition: (f = msg.getCondition()) && proto.bosdyn.api.mission.Condition.toObject(includeInstance, f),
    sequence: (f = msg.getSequence()) && proto.bosdyn.api.mission.Sequence.toObject(includeInstance, f),
    selector: (f = msg.getSelector()) && proto.bosdyn.api.mission.Selector.toObject(includeInstance, f),
    repeat: (f = msg.getRepeat()) && proto.bosdyn.api.mission.Repeat.toObject(includeInstance, f),
    retainLease: (f = msg.getRetainLease()) && proto.bosdyn.api.mission.RetainLease.toObject(includeInstance, f),
    retry: (f = msg.getRetry()) && proto.bosdyn.api.mission.Retry.toObject(includeInstance, f),
    forDuration: (f = msg.getForDuration()) && proto.bosdyn.api.mission.ForDuration.toObject(includeInstance, f),
    bosdynDockState: (f = msg.getBosdynDockState()) && proto.bosdyn.api.mission.BosdynDockState.toObject(includeInstance, f),
    bosdynPowerRequest: (f = msg.getBosdynPowerRequest()) && proto.bosdyn.api.mission.BosdynPowerRequest.toObject(includeInstance, f),
    bosdynRobotState: (f = msg.getBosdynRobotState()) && proto.bosdyn.api.mission.BosdynRobotState.toObject(includeInstance, f),
    bosdynRobotCommand: (f = msg.getBosdynRobotCommand()) && proto.bosdyn.api.mission.BosdynRobotCommand.toObject(includeInstance, f),
    remoteGrpc: (f = msg.getRemoteGrpc()) && proto.bosdyn.api.mission.RemoteGrpc.toObject(includeInstance, f),
    sleep: (f = msg.getSleep()) && proto.bosdyn.api.mission.Sleep.toObject(includeInstance, f),
    prompt: (f = msg.getPrompt()) && proto.bosdyn.api.mission.Prompt.toObject(includeInstance, f),
    setBlackboard: (f = msg.getSetBlackboard()) && proto.bosdyn.api.mission.SetBlackboard.toObject(includeInstance, f),
    dateToBlackboard: (f = msg.getDateToBlackboard()) && proto.bosdyn.api.mission.DateToBlackboard.toObject(includeInstance, f),
    defineBlackboard: (f = msg.getDefineBlackboard()) && proto.bosdyn.api.mission.DefineBlackboard.toObject(includeInstance, f),
    formatBlackboard: (f = msg.getFormatBlackboard()) && proto.bosdyn.api.mission.FormatBlackboard.toObject(includeInstance, f),
    constantResult: (f = msg.getConstantResult()) && proto.bosdyn.api.mission.ConstantResult.toObject(includeInstance, f),
    bosdynNavigateRoute: (f = msg.getBosdynNavigateRoute()) && proto.bosdyn.api.mission.BosdynNavigateRoute.toObject(includeInstance, f),
    bosdynNavigateTo: (f = msg.getBosdynNavigateTo()) && proto.bosdyn.api.mission.BosdynNavigateTo.toObject(includeInstance, f),
    bosdynGraphNavState: (f = msg.getBosdynGraphNavState()) && proto.bosdyn.api.mission.BosdynGraphNavState.toObject(includeInstance, f),
    bosdynGraphNavLocalize: (f = msg.getBosdynGraphNavLocalize()) && proto.bosdyn.api.mission.BosdynGraphNavLocalize.toObject(includeInstance, f),
    bosdynRecordEvent: (f = msg.getBosdynRecordEvent()) && proto.bosdyn.api.mission.BosdynRecordEvent.toObject(includeInstance, f),
    simpleParallel: (f = msg.getSimpleParallel()) && proto.bosdyn.api.mission.SimpleParallel.toObject(includeInstance, f),
    spotCamPtz: (f = msg.getSpotCamPtz()) && proto.bosdyn.api.mission.SpotCamPtz.toObject(includeInstance, f),
    spotCamStoreMedia: (f = msg.getSpotCamStoreMedia()) && proto.bosdyn.api.mission.SpotCamStoreMedia.toObject(includeInstance, f),
    spotCamLed: (f = msg.getSpotCamLed()) && proto.bosdyn.api.mission.SpotCamLed.toObject(includeInstance, f),
    spotCamFocusState: (f = msg.getSpotCamFocusState()) && proto.bosdyn.api.mission.SpotCamFocusState.toObject(includeInstance, f),
    spotCamResetAutofocus: (f = msg.getSpotCamResetAutofocus()) && proto.bosdyn.api.mission.SpotCamResetAutofocus.toObject(includeInstance, f),
    spotCamNamedPosition: (f = msg.getSpotCamNamedPosition()) && proto.bosdyn.api.mission.SpotCamNamedPosition.toObject(includeInstance, f),
    storeMetadata: (f = msg.getStoreMetadata()) && proto.bosdyn.api.mission.StoreMetadata.toObject(includeInstance, f),
    pb_switch: (f = msg.getSwitch()) && proto.bosdyn.api.mission.Switch.toObject(includeInstance, f),
    dataAcquisition: (f = msg.getDataAcquisition()) && proto.bosdyn.api.mission.DataAcquisition.toObject(includeInstance, f),
    dataAcquisitionOnInterruption: (f = msg.getDataAcquisitionOnInterruption()) && proto.bosdyn.api.mission.DataAcquisitionOnInterruption.toObject(includeInstance, f),
    dock: (f = msg.getDock()) && proto.bosdyn.api.mission.Dock.toObject(includeInstance, f),
    restartWhenPaused: (f = msg.getRestartWhenPaused()) && proto.bosdyn.api.mission.RestartWhenPaused.toObject(includeInstance, f),
    clearBehaviorFaults: (f = msg.getClearBehaviorFaults()) && proto.bosdyn.api.mission.ClearBehaviorFaults.toObject(includeInstance, f),
    bosdynGripperCameraParamsState: (f = msg.getBosdynGripperCameraParamsState()) && proto.bosdyn.api.mission.BosdynGripperCameraParamsState.toObject(includeInstance, f),
    setGripperCameraParams: (f = msg.getSetGripperCameraParams()) && proto.bosdyn.api.mission.SetGripperCameraParams.toObject(includeInstance, f),
    parallelAnd: (f = msg.getParallelAnd()) && proto.bosdyn.api.mission.ParallelAnd.toObject(includeInstance, f),
    setGraspOverride: (f = msg.getSetGraspOverride()) && proto.bosdyn.api.mission.SetGraspOverride.toObject(includeInstance, f),
    executeChoreography: (f = msg.getExecuteChoreography()) && proto.bosdyn.api.mission.ExecuteChoreography.toObject(includeInstance, f),
    missionUploadChoreography: (f = msg.getMissionUploadChoreography()) && proto.bosdyn.api.mission.MissionUploadChoreography.toObject(includeInstance, f),
    createMissionText: (f = msg.getCreateMissionText()) && proto.bosdyn.api.mission.CreateMissionText.toObject(includeInstance, f),
    bosdynQueryStoredCaptures: (f = msg.getBosdynQueryStoredCaptures()) && proto.bosdyn.api.mission.BosdynQueryStoredCaptures.toObject(includeInstance, f),
    parameterValuesList: jspb.Message.toObjectList(msg.getParameterValuesList(),
    bosdyn_api_mission_util_pb.KeyValue.toObject, includeInstance),
    overridesList: jspb.Message.toObjectList(msg.getOverridesList(),
    bosdyn_api_mission_util_pb.KeyValue.toObject, includeInstance),
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    bosdyn_api_mission_util_pb.VariableDeclaration.toObject, includeInstance)
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
 * @return {!proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.Node.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.Node;
  return proto.bosdyn.api.mission.Node.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.Node} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.Node.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new bosdyn_api_mission_util_pb.UserData;
      reader.readMessage(value,bosdyn_api_mission_util_pb.UserData.deserializeBinaryFromReader);
      msg.setUserData(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceId(value);
      break;
    case 4:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setImpl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeReference(value);
      break;
    case 9:
      var value = new proto.bosdyn.api.mission.Condition;
      reader.readMessage(value,proto.bosdyn.api.mission.Condition.deserializeBinaryFromReader);
      msg.setCondition(value);
      break;
    case 10:
      var value = new proto.bosdyn.api.mission.Sequence;
      reader.readMessage(value,proto.bosdyn.api.mission.Sequence.deserializeBinaryFromReader);
      msg.setSequence(value);
      break;
    case 11:
      var value = new proto.bosdyn.api.mission.Selector;
      reader.readMessage(value,proto.bosdyn.api.mission.Selector.deserializeBinaryFromReader);
      msg.setSelector(value);
      break;
    case 12:
      var value = new proto.bosdyn.api.mission.Repeat;
      reader.readMessage(value,proto.bosdyn.api.mission.Repeat.deserializeBinaryFromReader);
      msg.setRepeat(value);
      break;
    case 13:
      var value = new proto.bosdyn.api.mission.RetainLease;
      reader.readMessage(value,proto.bosdyn.api.mission.RetainLease.deserializeBinaryFromReader);
      msg.setRetainLease(value);
      break;
    case 14:
      var value = new proto.bosdyn.api.mission.Retry;
      reader.readMessage(value,proto.bosdyn.api.mission.Retry.deserializeBinaryFromReader);
      msg.setRetry(value);
      break;
    case 15:
      var value = new proto.bosdyn.api.mission.ForDuration;
      reader.readMessage(value,proto.bosdyn.api.mission.ForDuration.deserializeBinaryFromReader);
      msg.setForDuration(value);
      break;
    case 16:
      var value = new proto.bosdyn.api.mission.BosdynDockState;
      reader.readMessage(value,proto.bosdyn.api.mission.BosdynDockState.deserializeBinaryFromReader);
      msg.setBosdynDockState(value);
      break;
    case 17:
      var value = new proto.bosdyn.api.mission.BosdynPowerRequest;
      reader.readMessage(value,proto.bosdyn.api.mission.BosdynPowerRequest.deserializeBinaryFromReader);
      msg.setBosdynPowerRequest(value);
      break;
    case 18:
      var value = new proto.bosdyn.api.mission.BosdynRobotState;
      reader.readMessage(value,proto.bosdyn.api.mission.BosdynRobotState.deserializeBinaryFromReader);
      msg.setBosdynRobotState(value);
      break;
    case 19:
      var value = new proto.bosdyn.api.mission.BosdynRobotCommand;
      reader.readMessage(value,proto.bosdyn.api.mission.BosdynRobotCommand.deserializeBinaryFromReader);
      msg.setBosdynRobotCommand(value);
      break;
    case 20:
      var value = new proto.bosdyn.api.mission.RemoteGrpc;
      reader.readMessage(value,proto.bosdyn.api.mission.RemoteGrpc.deserializeBinaryFromReader);
      msg.setRemoteGrpc(value);
      break;
    case 21:
      var value = new proto.bosdyn.api.mission.Sleep;
      reader.readMessage(value,proto.bosdyn.api.mission.Sleep.deserializeBinaryFromReader);
      msg.setSleep(value);
      break;
    case 22:
      var value = new proto.bosdyn.api.mission.Prompt;
      reader.readMessage(value,proto.bosdyn.api.mission.Prompt.deserializeBinaryFromReader);
      msg.setPrompt(value);
      break;
    case 23:
      var value = new proto.bosdyn.api.mission.SetBlackboard;
      reader.readMessage(value,proto.bosdyn.api.mission.SetBlackboard.deserializeBinaryFromReader);
      msg.setSetBlackboard(value);
      break;
    case 24:
      var value = new proto.bosdyn.api.mission.DateToBlackboard;
      reader.readMessage(value,proto.bosdyn.api.mission.DateToBlackboard.deserializeBinaryFromReader);
      msg.setDateToBlackboard(value);
      break;
    case 25:
      var value = new proto.bosdyn.api.mission.DefineBlackboard;
      reader.readMessage(value,proto.bosdyn.api.mission.DefineBlackboard.deserializeBinaryFromReader);
      msg.setDefineBlackboard(value);
      break;
    case 26:
      var value = new proto.bosdyn.api.mission.FormatBlackboard;
      reader.readMessage(value,proto.bosdyn.api.mission.FormatBlackboard.deserializeBinaryFromReader);
      msg.setFormatBlackboard(value);
      break;
    case 27:
      var value = new proto.bosdyn.api.mission.ConstantResult;
      reader.readMessage(value,proto.bosdyn.api.mission.ConstantResult.deserializeBinaryFromReader);
      msg.setConstantResult(value);
      break;
    case 29:
      var value = new proto.bosdyn.api.mission.BosdynNavigateRoute;
      reader.readMessage(value,proto.bosdyn.api.mission.BosdynNavigateRoute.deserializeBinaryFromReader);
      msg.setBosdynNavigateRoute(value);
      break;
    case 30:
      var value = new proto.bosdyn.api.mission.BosdynNavigateTo;
      reader.readMessage(value,proto.bosdyn.api.mission.BosdynNavigateTo.deserializeBinaryFromReader);
      msg.setBosdynNavigateTo(value);
      break;
    case 31:
      var value = new proto.bosdyn.api.mission.BosdynGraphNavState;
      reader.readMessage(value,proto.bosdyn.api.mission.BosdynGraphNavState.deserializeBinaryFromReader);
      msg.setBosdynGraphNavState(value);
      break;
    case 32:
      var value = new proto.bosdyn.api.mission.BosdynGraphNavLocalize;
      reader.readMessage(value,proto.bosdyn.api.mission.BosdynGraphNavLocalize.deserializeBinaryFromReader);
      msg.setBosdynGraphNavLocalize(value);
      break;
    case 33:
      var value = new proto.bosdyn.api.mission.BosdynRecordEvent;
      reader.readMessage(value,proto.bosdyn.api.mission.BosdynRecordEvent.deserializeBinaryFromReader);
      msg.setBosdynRecordEvent(value);
      break;
    case 34:
      var value = new proto.bosdyn.api.mission.SimpleParallel;
      reader.readMessage(value,proto.bosdyn.api.mission.SimpleParallel.deserializeBinaryFromReader);
      msg.setSimpleParallel(value);
      break;
    case 35:
      var value = new proto.bosdyn.api.mission.SpotCamPtz;
      reader.readMessage(value,proto.bosdyn.api.mission.SpotCamPtz.deserializeBinaryFromReader);
      msg.setSpotCamPtz(value);
      break;
    case 36:
      var value = new proto.bosdyn.api.mission.SpotCamStoreMedia;
      reader.readMessage(value,proto.bosdyn.api.mission.SpotCamStoreMedia.deserializeBinaryFromReader);
      msg.setSpotCamStoreMedia(value);
      break;
    case 37:
      var value = new proto.bosdyn.api.mission.SpotCamLed;
      reader.readMessage(value,proto.bosdyn.api.mission.SpotCamLed.deserializeBinaryFromReader);
      msg.setSpotCamLed(value);
      break;
    case 58:
      var value = new proto.bosdyn.api.mission.SpotCamFocusState;
      reader.readMessage(value,proto.bosdyn.api.mission.SpotCamFocusState.deserializeBinaryFromReader);
      msg.setSpotCamFocusState(value);
      break;
    case 38:
      var value = new proto.bosdyn.api.mission.SpotCamResetAutofocus;
      reader.readMessage(value,proto.bosdyn.api.mission.SpotCamResetAutofocus.deserializeBinaryFromReader);
      msg.setSpotCamResetAutofocus(value);
      break;
    case 63:
      var value = new proto.bosdyn.api.mission.SpotCamNamedPosition;
      reader.readMessage(value,proto.bosdyn.api.mission.SpotCamNamedPosition.deserializeBinaryFromReader);
      msg.setSpotCamNamedPosition(value);
      break;
    case 39:
      var value = new proto.bosdyn.api.mission.StoreMetadata;
      reader.readMessage(value,proto.bosdyn.api.mission.StoreMetadata.deserializeBinaryFromReader);
      msg.setStoreMetadata(value);
      break;
    case 40:
      var value = new proto.bosdyn.api.mission.Switch;
      reader.readMessage(value,proto.bosdyn.api.mission.Switch.deserializeBinaryFromReader);
      msg.setSwitch(value);
      break;
    case 41:
      var value = new proto.bosdyn.api.mission.DataAcquisition;
      reader.readMessage(value,proto.bosdyn.api.mission.DataAcquisition.deserializeBinaryFromReader);
      msg.setDataAcquisition(value);
      break;
    case 42:
      var value = new proto.bosdyn.api.mission.DataAcquisitionOnInterruption;
      reader.readMessage(value,proto.bosdyn.api.mission.DataAcquisitionOnInterruption.deserializeBinaryFromReader);
      msg.setDataAcquisitionOnInterruption(value);
      break;
    case 43:
      var value = new proto.bosdyn.api.mission.Dock;
      reader.readMessage(value,proto.bosdyn.api.mission.Dock.deserializeBinaryFromReader);
      msg.setDock(value);
      break;
    case 49:
      var value = new proto.bosdyn.api.mission.RestartWhenPaused;
      reader.readMessage(value,proto.bosdyn.api.mission.RestartWhenPaused.deserializeBinaryFromReader);
      msg.setRestartWhenPaused(value);
      break;
    case 50:
      var value = new proto.bosdyn.api.mission.ClearBehaviorFaults;
      reader.readMessage(value,proto.bosdyn.api.mission.ClearBehaviorFaults.deserializeBinaryFromReader);
      msg.setClearBehaviorFaults(value);
      break;
    case 51:
      var value = new proto.bosdyn.api.mission.BosdynGripperCameraParamsState;
      reader.readMessage(value,proto.bosdyn.api.mission.BosdynGripperCameraParamsState.deserializeBinaryFromReader);
      msg.setBosdynGripperCameraParamsState(value);
      break;
    case 52:
      var value = new proto.bosdyn.api.mission.SetGripperCameraParams;
      reader.readMessage(value,proto.bosdyn.api.mission.SetGripperCameraParams.deserializeBinaryFromReader);
      msg.setSetGripperCameraParams(value);
      break;
    case 54:
      var value = new proto.bosdyn.api.mission.ParallelAnd;
      reader.readMessage(value,proto.bosdyn.api.mission.ParallelAnd.deserializeBinaryFromReader);
      msg.setParallelAnd(value);
      break;
    case 55:
      var value = new proto.bosdyn.api.mission.SetGraspOverride;
      reader.readMessage(value,proto.bosdyn.api.mission.SetGraspOverride.deserializeBinaryFromReader);
      msg.setSetGraspOverride(value);
      break;
    case 56:
      var value = new proto.bosdyn.api.mission.ExecuteChoreography;
      reader.readMessage(value,proto.bosdyn.api.mission.ExecuteChoreography.deserializeBinaryFromReader);
      msg.setExecuteChoreography(value);
      break;
    case 57:
      var value = new proto.bosdyn.api.mission.MissionUploadChoreography;
      reader.readMessage(value,proto.bosdyn.api.mission.MissionUploadChoreography.deserializeBinaryFromReader);
      msg.setMissionUploadChoreography(value);
      break;
    case 59:
      var value = new proto.bosdyn.api.mission.CreateMissionText;
      reader.readMessage(value,proto.bosdyn.api.mission.CreateMissionText.deserializeBinaryFromReader);
      msg.setCreateMissionText(value);
      break;
    case 60:
      var value = new proto.bosdyn.api.mission.BosdynQueryStoredCaptures;
      reader.readMessage(value,proto.bosdyn.api.mission.BosdynQueryStoredCaptures.deserializeBinaryFromReader);
      msg.setBosdynQueryStoredCaptures(value);
      break;
    case 6:
      var value = new bosdyn_api_mission_util_pb.KeyValue;
      reader.readMessage(value,bosdyn_api_mission_util_pb.KeyValue.deserializeBinaryFromReader);
      msg.addParameterValues(value);
      break;
    case 7:
      var value = new bosdyn_api_mission_util_pb.KeyValue;
      reader.readMessage(value,bosdyn_api_mission_util_pb.KeyValue.deserializeBinaryFromReader);
      msg.addOverrides(value);
      break;
    case 8:
      var value = new bosdyn_api_mission_util_pb.VariableDeclaration;
      reader.readMessage(value,bosdyn_api_mission_util_pb.VariableDeclaration.deserializeBinaryFromReader);
      msg.addParameters(value);
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
proto.bosdyn.api.mission.Node.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.Node.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.Node} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Node.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_mission_util_pb.UserData.serializeBinaryToWriter
    );
  }
  f = message.getReferenceId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getImpl();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCondition();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bosdyn.api.mission.Condition.serializeBinaryToWriter
    );
  }
  f = message.getSequence();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.bosdyn.api.mission.Sequence.serializeBinaryToWriter
    );
  }
  f = message.getSelector();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.bosdyn.api.mission.Selector.serializeBinaryToWriter
    );
  }
  f = message.getRepeat();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.bosdyn.api.mission.Repeat.serializeBinaryToWriter
    );
  }
  f = message.getRetainLease();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.bosdyn.api.mission.RetainLease.serializeBinaryToWriter
    );
  }
  f = message.getRetry();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.bosdyn.api.mission.Retry.serializeBinaryToWriter
    );
  }
  f = message.getForDuration();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.bosdyn.api.mission.ForDuration.serializeBinaryToWriter
    );
  }
  f = message.getBosdynDockState();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.bosdyn.api.mission.BosdynDockState.serializeBinaryToWriter
    );
  }
  f = message.getBosdynPowerRequest();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.bosdyn.api.mission.BosdynPowerRequest.serializeBinaryToWriter
    );
  }
  f = message.getBosdynRobotState();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.bosdyn.api.mission.BosdynRobotState.serializeBinaryToWriter
    );
  }
  f = message.getBosdynRobotCommand();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.bosdyn.api.mission.BosdynRobotCommand.serializeBinaryToWriter
    );
  }
  f = message.getRemoteGrpc();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.bosdyn.api.mission.RemoteGrpc.serializeBinaryToWriter
    );
  }
  f = message.getSleep();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.bosdyn.api.mission.Sleep.serializeBinaryToWriter
    );
  }
  f = message.getPrompt();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.bosdyn.api.mission.Prompt.serializeBinaryToWriter
    );
  }
  f = message.getSetBlackboard();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.bosdyn.api.mission.SetBlackboard.serializeBinaryToWriter
    );
  }
  f = message.getDateToBlackboard();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.bosdyn.api.mission.DateToBlackboard.serializeBinaryToWriter
    );
  }
  f = message.getDefineBlackboard();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.bosdyn.api.mission.DefineBlackboard.serializeBinaryToWriter
    );
  }
  f = message.getFormatBlackboard();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.bosdyn.api.mission.FormatBlackboard.serializeBinaryToWriter
    );
  }
  f = message.getConstantResult();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.bosdyn.api.mission.ConstantResult.serializeBinaryToWriter
    );
  }
  f = message.getBosdynNavigateRoute();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.bosdyn.api.mission.BosdynNavigateRoute.serializeBinaryToWriter
    );
  }
  f = message.getBosdynNavigateTo();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.bosdyn.api.mission.BosdynNavigateTo.serializeBinaryToWriter
    );
  }
  f = message.getBosdynGraphNavState();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.bosdyn.api.mission.BosdynGraphNavState.serializeBinaryToWriter
    );
  }
  f = message.getBosdynGraphNavLocalize();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.bosdyn.api.mission.BosdynGraphNavLocalize.serializeBinaryToWriter
    );
  }
  f = message.getBosdynRecordEvent();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.bosdyn.api.mission.BosdynRecordEvent.serializeBinaryToWriter
    );
  }
  f = message.getSimpleParallel();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.bosdyn.api.mission.SimpleParallel.serializeBinaryToWriter
    );
  }
  f = message.getSpotCamPtz();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto.bosdyn.api.mission.SpotCamPtz.serializeBinaryToWriter
    );
  }
  f = message.getSpotCamStoreMedia();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.bosdyn.api.mission.SpotCamStoreMedia.serializeBinaryToWriter
    );
  }
  f = message.getSpotCamLed();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.bosdyn.api.mission.SpotCamLed.serializeBinaryToWriter
    );
  }
  f = message.getSpotCamFocusState();
  if (f != null) {
    writer.writeMessage(
      58,
      f,
      proto.bosdyn.api.mission.SpotCamFocusState.serializeBinaryToWriter
    );
  }
  f = message.getSpotCamResetAutofocus();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto.bosdyn.api.mission.SpotCamResetAutofocus.serializeBinaryToWriter
    );
  }
  f = message.getSpotCamNamedPosition();
  if (f != null) {
    writer.writeMessage(
      63,
      f,
      proto.bosdyn.api.mission.SpotCamNamedPosition.serializeBinaryToWriter
    );
  }
  f = message.getStoreMetadata();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      proto.bosdyn.api.mission.StoreMetadata.serializeBinaryToWriter
    );
  }
  f = message.getSwitch();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      proto.bosdyn.api.mission.Switch.serializeBinaryToWriter
    );
  }
  f = message.getDataAcquisition();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto.bosdyn.api.mission.DataAcquisition.serializeBinaryToWriter
    );
  }
  f = message.getDataAcquisitionOnInterruption();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      proto.bosdyn.api.mission.DataAcquisitionOnInterruption.serializeBinaryToWriter
    );
  }
  f = message.getDock();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      proto.bosdyn.api.mission.Dock.serializeBinaryToWriter
    );
  }
  f = message.getRestartWhenPaused();
  if (f != null) {
    writer.writeMessage(
      49,
      f,
      proto.bosdyn.api.mission.RestartWhenPaused.serializeBinaryToWriter
    );
  }
  f = message.getClearBehaviorFaults();
  if (f != null) {
    writer.writeMessage(
      50,
      f,
      proto.bosdyn.api.mission.ClearBehaviorFaults.serializeBinaryToWriter
    );
  }
  f = message.getBosdynGripperCameraParamsState();
  if (f != null) {
    writer.writeMessage(
      51,
      f,
      proto.bosdyn.api.mission.BosdynGripperCameraParamsState.serializeBinaryToWriter
    );
  }
  f = message.getSetGripperCameraParams();
  if (f != null) {
    writer.writeMessage(
      52,
      f,
      proto.bosdyn.api.mission.SetGripperCameraParams.serializeBinaryToWriter
    );
  }
  f = message.getParallelAnd();
  if (f != null) {
    writer.writeMessage(
      54,
      f,
      proto.bosdyn.api.mission.ParallelAnd.serializeBinaryToWriter
    );
  }
  f = message.getSetGraspOverride();
  if (f != null) {
    writer.writeMessage(
      55,
      f,
      proto.bosdyn.api.mission.SetGraspOverride.serializeBinaryToWriter
    );
  }
  f = message.getExecuteChoreography();
  if (f != null) {
    writer.writeMessage(
      56,
      f,
      proto.bosdyn.api.mission.ExecuteChoreography.serializeBinaryToWriter
    );
  }
  f = message.getMissionUploadChoreography();
  if (f != null) {
    writer.writeMessage(
      57,
      f,
      proto.bosdyn.api.mission.MissionUploadChoreography.serializeBinaryToWriter
    );
  }
  f = message.getCreateMissionText();
  if (f != null) {
    writer.writeMessage(
      59,
      f,
      proto.bosdyn.api.mission.CreateMissionText.serializeBinaryToWriter
    );
  }
  f = message.getBosdynQueryStoredCaptures();
  if (f != null) {
    writer.writeMessage(
      60,
      f,
      proto.bosdyn.api.mission.BosdynQueryStoredCaptures.serializeBinaryToWriter
    );
  }
  f = message.getParameterValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      bosdyn_api_mission_util_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getOverridesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      bosdyn_api_mission_util_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      bosdyn_api_mission_util_pb.VariableDeclaration.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.Node.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional UserData user_data = 2;
 * @return {?proto.bosdyn.api.mission.UserData}
 */
proto.bosdyn.api.mission.Node.prototype.getUserData = function() {
  return /** @type{?proto.bosdyn.api.mission.UserData} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_mission_util_pb.UserData, 2));
};


/**
 * @param {?proto.bosdyn.api.mission.UserData|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setUserData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearUserData = function() {
  return this.setUserData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasUserData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string reference_id = 3;
 * @return {string}
 */
proto.bosdyn.api.mission.Node.prototype.getReferenceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.setReferenceId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Any impl = 4;
 * @return {?proto.google.protobuf.Any}
 */
proto.bosdyn.api.mission.Node.prototype.getImpl = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 4));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setImpl = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearImpl = function() {
  return this.setImpl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasImpl = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string node_reference = 5;
 * @return {string}
 */
proto.bosdyn.api.mission.Node.prototype.getNodeReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.setNodeReference = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearNodeReference = function() {
  return jspb.Message.setOneofField(this, 5, proto.bosdyn.api.mission.Node.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasNodeReference = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Condition condition = 9;
 * @return {?proto.bosdyn.api.mission.Condition}
 */
proto.bosdyn.api.mission.Node.prototype.getCondition = function() {
  return /** @type{?proto.bosdyn.api.mission.Condition} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Condition, 9));
};


/**
 * @param {?proto.bosdyn.api.mission.Condition|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setCondition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearCondition = function() {
  return this.setCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasCondition = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Sequence sequence = 10;
 * @return {?proto.bosdyn.api.mission.Sequence}
 */
proto.bosdyn.api.mission.Node.prototype.getSequence = function() {
  return /** @type{?proto.bosdyn.api.mission.Sequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Sequence, 10));
};


/**
 * @param {?proto.bosdyn.api.mission.Sequence|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setSequence = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearSequence = function() {
  return this.setSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasSequence = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Selector selector = 11;
 * @return {?proto.bosdyn.api.mission.Selector}
 */
proto.bosdyn.api.mission.Node.prototype.getSelector = function() {
  return /** @type{?proto.bosdyn.api.mission.Selector} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Selector, 11));
};


/**
 * @param {?proto.bosdyn.api.mission.Selector|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setSelector = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearSelector = function() {
  return this.setSelector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasSelector = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Repeat repeat = 12;
 * @return {?proto.bosdyn.api.mission.Repeat}
 */
proto.bosdyn.api.mission.Node.prototype.getRepeat = function() {
  return /** @type{?proto.bosdyn.api.mission.Repeat} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Repeat, 12));
};


/**
 * @param {?proto.bosdyn.api.mission.Repeat|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setRepeat = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearRepeat = function() {
  return this.setRepeat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasRepeat = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional RetainLease retain_lease = 13;
 * @return {?proto.bosdyn.api.mission.RetainLease}
 */
proto.bosdyn.api.mission.Node.prototype.getRetainLease = function() {
  return /** @type{?proto.bosdyn.api.mission.RetainLease} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.RetainLease, 13));
};


/**
 * @param {?proto.bosdyn.api.mission.RetainLease|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setRetainLease = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearRetainLease = function() {
  return this.setRetainLease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasRetainLease = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Retry retry = 14;
 * @return {?proto.bosdyn.api.mission.Retry}
 */
proto.bosdyn.api.mission.Node.prototype.getRetry = function() {
  return /** @type{?proto.bosdyn.api.mission.Retry} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Retry, 14));
};


/**
 * @param {?proto.bosdyn.api.mission.Retry|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setRetry = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearRetry = function() {
  return this.setRetry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasRetry = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ForDuration for_duration = 15;
 * @return {?proto.bosdyn.api.mission.ForDuration}
 */
proto.bosdyn.api.mission.Node.prototype.getForDuration = function() {
  return /** @type{?proto.bosdyn.api.mission.ForDuration} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.ForDuration, 15));
};


/**
 * @param {?proto.bosdyn.api.mission.ForDuration|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setForDuration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearForDuration = function() {
  return this.setForDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasForDuration = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional BosdynDockState bosdyn_dock_state = 16;
 * @return {?proto.bosdyn.api.mission.BosdynDockState}
 */
proto.bosdyn.api.mission.Node.prototype.getBosdynDockState = function() {
  return /** @type{?proto.bosdyn.api.mission.BosdynDockState} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.BosdynDockState, 16));
};


/**
 * @param {?proto.bosdyn.api.mission.BosdynDockState|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setBosdynDockState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearBosdynDockState = function() {
  return this.setBosdynDockState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasBosdynDockState = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional BosdynPowerRequest bosdyn_power_request = 17;
 * @return {?proto.bosdyn.api.mission.BosdynPowerRequest}
 */
proto.bosdyn.api.mission.Node.prototype.getBosdynPowerRequest = function() {
  return /** @type{?proto.bosdyn.api.mission.BosdynPowerRequest} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.BosdynPowerRequest, 17));
};


/**
 * @param {?proto.bosdyn.api.mission.BosdynPowerRequest|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setBosdynPowerRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearBosdynPowerRequest = function() {
  return this.setBosdynPowerRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasBosdynPowerRequest = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional BosdynRobotState bosdyn_robot_state = 18;
 * @return {?proto.bosdyn.api.mission.BosdynRobotState}
 */
proto.bosdyn.api.mission.Node.prototype.getBosdynRobotState = function() {
  return /** @type{?proto.bosdyn.api.mission.BosdynRobotState} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.BosdynRobotState, 18));
};


/**
 * @param {?proto.bosdyn.api.mission.BosdynRobotState|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setBosdynRobotState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearBosdynRobotState = function() {
  return this.setBosdynRobotState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasBosdynRobotState = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional BosdynRobotCommand bosdyn_robot_command = 19;
 * @return {?proto.bosdyn.api.mission.BosdynRobotCommand}
 */
proto.bosdyn.api.mission.Node.prototype.getBosdynRobotCommand = function() {
  return /** @type{?proto.bosdyn.api.mission.BosdynRobotCommand} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.BosdynRobotCommand, 19));
};


/**
 * @param {?proto.bosdyn.api.mission.BosdynRobotCommand|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setBosdynRobotCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearBosdynRobotCommand = function() {
  return this.setBosdynRobotCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasBosdynRobotCommand = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional RemoteGrpc remote_grpc = 20;
 * @return {?proto.bosdyn.api.mission.RemoteGrpc}
 */
proto.bosdyn.api.mission.Node.prototype.getRemoteGrpc = function() {
  return /** @type{?proto.bosdyn.api.mission.RemoteGrpc} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.RemoteGrpc, 20));
};


/**
 * @param {?proto.bosdyn.api.mission.RemoteGrpc|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setRemoteGrpc = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearRemoteGrpc = function() {
  return this.setRemoteGrpc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasRemoteGrpc = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional Sleep sleep = 21;
 * @return {?proto.bosdyn.api.mission.Sleep}
 */
proto.bosdyn.api.mission.Node.prototype.getSleep = function() {
  return /** @type{?proto.bosdyn.api.mission.Sleep} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Sleep, 21));
};


/**
 * @param {?proto.bosdyn.api.mission.Sleep|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setSleep = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearSleep = function() {
  return this.setSleep(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasSleep = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional Prompt prompt = 22;
 * @return {?proto.bosdyn.api.mission.Prompt}
 */
proto.bosdyn.api.mission.Node.prototype.getPrompt = function() {
  return /** @type{?proto.bosdyn.api.mission.Prompt} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Prompt, 22));
};


/**
 * @param {?proto.bosdyn.api.mission.Prompt|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setPrompt = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearPrompt = function() {
  return this.setPrompt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasPrompt = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional SetBlackboard set_blackboard = 23;
 * @return {?proto.bosdyn.api.mission.SetBlackboard}
 */
proto.bosdyn.api.mission.Node.prototype.getSetBlackboard = function() {
  return /** @type{?proto.bosdyn.api.mission.SetBlackboard} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.SetBlackboard, 23));
};


/**
 * @param {?proto.bosdyn.api.mission.SetBlackboard|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setSetBlackboard = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearSetBlackboard = function() {
  return this.setSetBlackboard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasSetBlackboard = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional DateToBlackboard date_to_blackboard = 24;
 * @return {?proto.bosdyn.api.mission.DateToBlackboard}
 */
proto.bosdyn.api.mission.Node.prototype.getDateToBlackboard = function() {
  return /** @type{?proto.bosdyn.api.mission.DateToBlackboard} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.DateToBlackboard, 24));
};


/**
 * @param {?proto.bosdyn.api.mission.DateToBlackboard|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setDateToBlackboard = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearDateToBlackboard = function() {
  return this.setDateToBlackboard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasDateToBlackboard = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional DefineBlackboard define_blackboard = 25;
 * @return {?proto.bosdyn.api.mission.DefineBlackboard}
 */
proto.bosdyn.api.mission.Node.prototype.getDefineBlackboard = function() {
  return /** @type{?proto.bosdyn.api.mission.DefineBlackboard} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.DefineBlackboard, 25));
};


/**
 * @param {?proto.bosdyn.api.mission.DefineBlackboard|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setDefineBlackboard = function(value) {
  return jspb.Message.setOneofWrapperField(this, 25, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearDefineBlackboard = function() {
  return this.setDefineBlackboard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasDefineBlackboard = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional FormatBlackboard format_blackboard = 26;
 * @return {?proto.bosdyn.api.mission.FormatBlackboard}
 */
proto.bosdyn.api.mission.Node.prototype.getFormatBlackboard = function() {
  return /** @type{?proto.bosdyn.api.mission.FormatBlackboard} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.FormatBlackboard, 26));
};


/**
 * @param {?proto.bosdyn.api.mission.FormatBlackboard|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setFormatBlackboard = function(value) {
  return jspb.Message.setOneofWrapperField(this, 26, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearFormatBlackboard = function() {
  return this.setFormatBlackboard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasFormatBlackboard = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional ConstantResult constant_result = 27;
 * @return {?proto.bosdyn.api.mission.ConstantResult}
 */
proto.bosdyn.api.mission.Node.prototype.getConstantResult = function() {
  return /** @type{?proto.bosdyn.api.mission.ConstantResult} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.ConstantResult, 27));
};


/**
 * @param {?proto.bosdyn.api.mission.ConstantResult|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setConstantResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 27, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearConstantResult = function() {
  return this.setConstantResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasConstantResult = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional BosdynNavigateRoute bosdyn_navigate_route = 29;
 * @return {?proto.bosdyn.api.mission.BosdynNavigateRoute}
 */
proto.bosdyn.api.mission.Node.prototype.getBosdynNavigateRoute = function() {
  return /** @type{?proto.bosdyn.api.mission.BosdynNavigateRoute} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.BosdynNavigateRoute, 29));
};


/**
 * @param {?proto.bosdyn.api.mission.BosdynNavigateRoute|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setBosdynNavigateRoute = function(value) {
  return jspb.Message.setOneofWrapperField(this, 29, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearBosdynNavigateRoute = function() {
  return this.setBosdynNavigateRoute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasBosdynNavigateRoute = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional BosdynNavigateTo bosdyn_navigate_to = 30;
 * @return {?proto.bosdyn.api.mission.BosdynNavigateTo}
 */
proto.bosdyn.api.mission.Node.prototype.getBosdynNavigateTo = function() {
  return /** @type{?proto.bosdyn.api.mission.BosdynNavigateTo} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.BosdynNavigateTo, 30));
};


/**
 * @param {?proto.bosdyn.api.mission.BosdynNavigateTo|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setBosdynNavigateTo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearBosdynNavigateTo = function() {
  return this.setBosdynNavigateTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasBosdynNavigateTo = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional BosdynGraphNavState bosdyn_graph_nav_state = 31;
 * @return {?proto.bosdyn.api.mission.BosdynGraphNavState}
 */
proto.bosdyn.api.mission.Node.prototype.getBosdynGraphNavState = function() {
  return /** @type{?proto.bosdyn.api.mission.BosdynGraphNavState} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.BosdynGraphNavState, 31));
};


/**
 * @param {?proto.bosdyn.api.mission.BosdynGraphNavState|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setBosdynGraphNavState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearBosdynGraphNavState = function() {
  return this.setBosdynGraphNavState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasBosdynGraphNavState = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional BosdynGraphNavLocalize bosdyn_graph_nav_localize = 32;
 * @return {?proto.bosdyn.api.mission.BosdynGraphNavLocalize}
 */
proto.bosdyn.api.mission.Node.prototype.getBosdynGraphNavLocalize = function() {
  return /** @type{?proto.bosdyn.api.mission.BosdynGraphNavLocalize} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.BosdynGraphNavLocalize, 32));
};


/**
 * @param {?proto.bosdyn.api.mission.BosdynGraphNavLocalize|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setBosdynGraphNavLocalize = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearBosdynGraphNavLocalize = function() {
  return this.setBosdynGraphNavLocalize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasBosdynGraphNavLocalize = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional BosdynRecordEvent bosdyn_record_event = 33;
 * @return {?proto.bosdyn.api.mission.BosdynRecordEvent}
 */
proto.bosdyn.api.mission.Node.prototype.getBosdynRecordEvent = function() {
  return /** @type{?proto.bosdyn.api.mission.BosdynRecordEvent} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.BosdynRecordEvent, 33));
};


/**
 * @param {?proto.bosdyn.api.mission.BosdynRecordEvent|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setBosdynRecordEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 33, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearBosdynRecordEvent = function() {
  return this.setBosdynRecordEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasBosdynRecordEvent = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional SimpleParallel simple_parallel = 34;
 * @return {?proto.bosdyn.api.mission.SimpleParallel}
 */
proto.bosdyn.api.mission.Node.prototype.getSimpleParallel = function() {
  return /** @type{?proto.bosdyn.api.mission.SimpleParallel} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.SimpleParallel, 34));
};


/**
 * @param {?proto.bosdyn.api.mission.SimpleParallel|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setSimpleParallel = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearSimpleParallel = function() {
  return this.setSimpleParallel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasSimpleParallel = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional SpotCamPtz spot_cam_ptz = 35;
 * @return {?proto.bosdyn.api.mission.SpotCamPtz}
 */
proto.bosdyn.api.mission.Node.prototype.getSpotCamPtz = function() {
  return /** @type{?proto.bosdyn.api.mission.SpotCamPtz} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.SpotCamPtz, 35));
};


/**
 * @param {?proto.bosdyn.api.mission.SpotCamPtz|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setSpotCamPtz = function(value) {
  return jspb.Message.setOneofWrapperField(this, 35, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearSpotCamPtz = function() {
  return this.setSpotCamPtz(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasSpotCamPtz = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional SpotCamStoreMedia spot_cam_store_media = 36;
 * @return {?proto.bosdyn.api.mission.SpotCamStoreMedia}
 */
proto.bosdyn.api.mission.Node.prototype.getSpotCamStoreMedia = function() {
  return /** @type{?proto.bosdyn.api.mission.SpotCamStoreMedia} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.SpotCamStoreMedia, 36));
};


/**
 * @param {?proto.bosdyn.api.mission.SpotCamStoreMedia|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setSpotCamStoreMedia = function(value) {
  return jspb.Message.setOneofWrapperField(this, 36, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearSpotCamStoreMedia = function() {
  return this.setSpotCamStoreMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasSpotCamStoreMedia = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional SpotCamLed spot_cam_led = 37;
 * @return {?proto.bosdyn.api.mission.SpotCamLed}
 */
proto.bosdyn.api.mission.Node.prototype.getSpotCamLed = function() {
  return /** @type{?proto.bosdyn.api.mission.SpotCamLed} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.SpotCamLed, 37));
};


/**
 * @param {?proto.bosdyn.api.mission.SpotCamLed|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setSpotCamLed = function(value) {
  return jspb.Message.setOneofWrapperField(this, 37, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearSpotCamLed = function() {
  return this.setSpotCamLed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasSpotCamLed = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional SpotCamFocusState spot_cam_focus_state = 58;
 * @return {?proto.bosdyn.api.mission.SpotCamFocusState}
 */
proto.bosdyn.api.mission.Node.prototype.getSpotCamFocusState = function() {
  return /** @type{?proto.bosdyn.api.mission.SpotCamFocusState} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.SpotCamFocusState, 58));
};


/**
 * @param {?proto.bosdyn.api.mission.SpotCamFocusState|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setSpotCamFocusState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 58, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearSpotCamFocusState = function() {
  return this.setSpotCamFocusState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasSpotCamFocusState = function() {
  return jspb.Message.getField(this, 58) != null;
};


/**
 * optional SpotCamResetAutofocus spot_cam_reset_autofocus = 38;
 * @return {?proto.bosdyn.api.mission.SpotCamResetAutofocus}
 */
proto.bosdyn.api.mission.Node.prototype.getSpotCamResetAutofocus = function() {
  return /** @type{?proto.bosdyn.api.mission.SpotCamResetAutofocus} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.SpotCamResetAutofocus, 38));
};


/**
 * @param {?proto.bosdyn.api.mission.SpotCamResetAutofocus|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setSpotCamResetAutofocus = function(value) {
  return jspb.Message.setOneofWrapperField(this, 38, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearSpotCamResetAutofocus = function() {
  return this.setSpotCamResetAutofocus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasSpotCamResetAutofocus = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional SpotCamNamedPosition spot_cam_named_position = 63;
 * @return {?proto.bosdyn.api.mission.SpotCamNamedPosition}
 */
proto.bosdyn.api.mission.Node.prototype.getSpotCamNamedPosition = function() {
  return /** @type{?proto.bosdyn.api.mission.SpotCamNamedPosition} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.SpotCamNamedPosition, 63));
};


/**
 * @param {?proto.bosdyn.api.mission.SpotCamNamedPosition|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setSpotCamNamedPosition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 63, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearSpotCamNamedPosition = function() {
  return this.setSpotCamNamedPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasSpotCamNamedPosition = function() {
  return jspb.Message.getField(this, 63) != null;
};


/**
 * optional StoreMetadata store_metadata = 39;
 * @return {?proto.bosdyn.api.mission.StoreMetadata}
 */
proto.bosdyn.api.mission.Node.prototype.getStoreMetadata = function() {
  return /** @type{?proto.bosdyn.api.mission.StoreMetadata} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.StoreMetadata, 39));
};


/**
 * @param {?proto.bosdyn.api.mission.StoreMetadata|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setStoreMetadata = function(value) {
  return jspb.Message.setOneofWrapperField(this, 39, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearStoreMetadata = function() {
  return this.setStoreMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasStoreMetadata = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional Switch switch = 40;
 * @return {?proto.bosdyn.api.mission.Switch}
 */
proto.bosdyn.api.mission.Node.prototype.getSwitch = function() {
  return /** @type{?proto.bosdyn.api.mission.Switch} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Switch, 40));
};


/**
 * @param {?proto.bosdyn.api.mission.Switch|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setSwitch = function(value) {
  return jspb.Message.setOneofWrapperField(this, 40, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearSwitch = function() {
  return this.setSwitch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasSwitch = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional DataAcquisition data_acquisition = 41;
 * @return {?proto.bosdyn.api.mission.DataAcquisition}
 */
proto.bosdyn.api.mission.Node.prototype.getDataAcquisition = function() {
  return /** @type{?proto.bosdyn.api.mission.DataAcquisition} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.DataAcquisition, 41));
};


/**
 * @param {?proto.bosdyn.api.mission.DataAcquisition|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setDataAcquisition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 41, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearDataAcquisition = function() {
  return this.setDataAcquisition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasDataAcquisition = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional DataAcquisitionOnInterruption data_acquisition_on_interruption = 42;
 * @return {?proto.bosdyn.api.mission.DataAcquisitionOnInterruption}
 */
proto.bosdyn.api.mission.Node.prototype.getDataAcquisitionOnInterruption = function() {
  return /** @type{?proto.bosdyn.api.mission.DataAcquisitionOnInterruption} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.DataAcquisitionOnInterruption, 42));
};


/**
 * @param {?proto.bosdyn.api.mission.DataAcquisitionOnInterruption|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setDataAcquisitionOnInterruption = function(value) {
  return jspb.Message.setOneofWrapperField(this, 42, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearDataAcquisitionOnInterruption = function() {
  return this.setDataAcquisitionOnInterruption(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasDataAcquisitionOnInterruption = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional Dock dock = 43;
 * @return {?proto.bosdyn.api.mission.Dock}
 */
proto.bosdyn.api.mission.Node.prototype.getDock = function() {
  return /** @type{?proto.bosdyn.api.mission.Dock} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Dock, 43));
};


/**
 * @param {?proto.bosdyn.api.mission.Dock|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setDock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 43, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearDock = function() {
  return this.setDock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasDock = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional RestartWhenPaused restart_when_paused = 49;
 * @return {?proto.bosdyn.api.mission.RestartWhenPaused}
 */
proto.bosdyn.api.mission.Node.prototype.getRestartWhenPaused = function() {
  return /** @type{?proto.bosdyn.api.mission.RestartWhenPaused} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.RestartWhenPaused, 49));
};


/**
 * @param {?proto.bosdyn.api.mission.RestartWhenPaused|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setRestartWhenPaused = function(value) {
  return jspb.Message.setOneofWrapperField(this, 49, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearRestartWhenPaused = function() {
  return this.setRestartWhenPaused(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasRestartWhenPaused = function() {
  return jspb.Message.getField(this, 49) != null;
};


/**
 * optional ClearBehaviorFaults clear_behavior_faults = 50;
 * @return {?proto.bosdyn.api.mission.ClearBehaviorFaults}
 */
proto.bosdyn.api.mission.Node.prototype.getClearBehaviorFaults = function() {
  return /** @type{?proto.bosdyn.api.mission.ClearBehaviorFaults} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.ClearBehaviorFaults, 50));
};


/**
 * @param {?proto.bosdyn.api.mission.ClearBehaviorFaults|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setClearBehaviorFaults = function(value) {
  return jspb.Message.setOneofWrapperField(this, 50, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearClearBehaviorFaults = function() {
  return this.setClearBehaviorFaults(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasClearBehaviorFaults = function() {
  return jspb.Message.getField(this, 50) != null;
};


/**
 * optional BosdynGripperCameraParamsState bosdyn_gripper_camera_params_state = 51;
 * @return {?proto.bosdyn.api.mission.BosdynGripperCameraParamsState}
 */
proto.bosdyn.api.mission.Node.prototype.getBosdynGripperCameraParamsState = function() {
  return /** @type{?proto.bosdyn.api.mission.BosdynGripperCameraParamsState} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.BosdynGripperCameraParamsState, 51));
};


/**
 * @param {?proto.bosdyn.api.mission.BosdynGripperCameraParamsState|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setBosdynGripperCameraParamsState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 51, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearBosdynGripperCameraParamsState = function() {
  return this.setBosdynGripperCameraParamsState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasBosdynGripperCameraParamsState = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * optional SetGripperCameraParams set_gripper_camera_params = 52;
 * @return {?proto.bosdyn.api.mission.SetGripperCameraParams}
 */
proto.bosdyn.api.mission.Node.prototype.getSetGripperCameraParams = function() {
  return /** @type{?proto.bosdyn.api.mission.SetGripperCameraParams} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.SetGripperCameraParams, 52));
};


/**
 * @param {?proto.bosdyn.api.mission.SetGripperCameraParams|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setSetGripperCameraParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 52, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearSetGripperCameraParams = function() {
  return this.setSetGripperCameraParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasSetGripperCameraParams = function() {
  return jspb.Message.getField(this, 52) != null;
};


/**
 * optional ParallelAnd parallel_and = 54;
 * @return {?proto.bosdyn.api.mission.ParallelAnd}
 */
proto.bosdyn.api.mission.Node.prototype.getParallelAnd = function() {
  return /** @type{?proto.bosdyn.api.mission.ParallelAnd} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.ParallelAnd, 54));
};


/**
 * @param {?proto.bosdyn.api.mission.ParallelAnd|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setParallelAnd = function(value) {
  return jspb.Message.setOneofWrapperField(this, 54, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearParallelAnd = function() {
  return this.setParallelAnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasParallelAnd = function() {
  return jspb.Message.getField(this, 54) != null;
};


/**
 * optional SetGraspOverride set_grasp_override = 55;
 * @return {?proto.bosdyn.api.mission.SetGraspOverride}
 */
proto.bosdyn.api.mission.Node.prototype.getSetGraspOverride = function() {
  return /** @type{?proto.bosdyn.api.mission.SetGraspOverride} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.SetGraspOverride, 55));
};


/**
 * @param {?proto.bosdyn.api.mission.SetGraspOverride|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setSetGraspOverride = function(value) {
  return jspb.Message.setOneofWrapperField(this, 55, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearSetGraspOverride = function() {
  return this.setSetGraspOverride(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasSetGraspOverride = function() {
  return jspb.Message.getField(this, 55) != null;
};


/**
 * optional ExecuteChoreography execute_choreography = 56;
 * @return {?proto.bosdyn.api.mission.ExecuteChoreography}
 */
proto.bosdyn.api.mission.Node.prototype.getExecuteChoreography = function() {
  return /** @type{?proto.bosdyn.api.mission.ExecuteChoreography} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.ExecuteChoreography, 56));
};


/**
 * @param {?proto.bosdyn.api.mission.ExecuteChoreography|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setExecuteChoreography = function(value) {
  return jspb.Message.setOneofWrapperField(this, 56, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearExecuteChoreography = function() {
  return this.setExecuteChoreography(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasExecuteChoreography = function() {
  return jspb.Message.getField(this, 56) != null;
};


/**
 * optional MissionUploadChoreography mission_upload_choreography = 57;
 * @return {?proto.bosdyn.api.mission.MissionUploadChoreography}
 */
proto.bosdyn.api.mission.Node.prototype.getMissionUploadChoreography = function() {
  return /** @type{?proto.bosdyn.api.mission.MissionUploadChoreography} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.MissionUploadChoreography, 57));
};


/**
 * @param {?proto.bosdyn.api.mission.MissionUploadChoreography|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setMissionUploadChoreography = function(value) {
  return jspb.Message.setOneofWrapperField(this, 57, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearMissionUploadChoreography = function() {
  return this.setMissionUploadChoreography(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasMissionUploadChoreography = function() {
  return jspb.Message.getField(this, 57) != null;
};


/**
 * optional CreateMissionText create_mission_text = 59;
 * @return {?proto.bosdyn.api.mission.CreateMissionText}
 */
proto.bosdyn.api.mission.Node.prototype.getCreateMissionText = function() {
  return /** @type{?proto.bosdyn.api.mission.CreateMissionText} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.CreateMissionText, 59));
};


/**
 * @param {?proto.bosdyn.api.mission.CreateMissionText|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setCreateMissionText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 59, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearCreateMissionText = function() {
  return this.setCreateMissionText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasCreateMissionText = function() {
  return jspb.Message.getField(this, 59) != null;
};


/**
 * optional BosdynQueryStoredCaptures bosdyn_query_stored_captures = 60;
 * @return {?proto.bosdyn.api.mission.BosdynQueryStoredCaptures}
 */
proto.bosdyn.api.mission.Node.prototype.getBosdynQueryStoredCaptures = function() {
  return /** @type{?proto.bosdyn.api.mission.BosdynQueryStoredCaptures} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.BosdynQueryStoredCaptures, 60));
};


/**
 * @param {?proto.bosdyn.api.mission.BosdynQueryStoredCaptures|undefined} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setBosdynQueryStoredCaptures = function(value) {
  return jspb.Message.setOneofWrapperField(this, 60, proto.bosdyn.api.mission.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearBosdynQueryStoredCaptures = function() {
  return this.setBosdynQueryStoredCaptures(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Node.prototype.hasBosdynQueryStoredCaptures = function() {
  return jspb.Message.getField(this, 60) != null;
};


/**
 * repeated KeyValue parameter_values = 6;
 * @return {!Array<!proto.bosdyn.api.mission.KeyValue>}
 */
proto.bosdyn.api.mission.Node.prototype.getParameterValuesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.mission.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_mission_util_pb.KeyValue, 6));
};


/**
 * @param {!Array<!proto.bosdyn.api.mission.KeyValue>} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setParameterValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.bosdyn.api.mission.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.mission.KeyValue}
 */
proto.bosdyn.api.mission.Node.prototype.addParameterValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.bosdyn.api.mission.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearParameterValuesList = function() {
  return this.setParameterValuesList([]);
};


/**
 * repeated KeyValue overrides = 7;
 * @return {!Array<!proto.bosdyn.api.mission.KeyValue>}
 */
proto.bosdyn.api.mission.Node.prototype.getOverridesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.mission.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_mission_util_pb.KeyValue, 7));
};


/**
 * @param {!Array<!proto.bosdyn.api.mission.KeyValue>} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setOverridesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.bosdyn.api.mission.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.mission.KeyValue}
 */
proto.bosdyn.api.mission.Node.prototype.addOverrides = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.bosdyn.api.mission.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearOverridesList = function() {
  return this.setOverridesList([]);
};


/**
 * repeated VariableDeclaration parameters = 8;
 * @return {!Array<!proto.bosdyn.api.mission.VariableDeclaration>}
 */
proto.bosdyn.api.mission.Node.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.bosdyn.api.mission.VariableDeclaration>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_mission_util_pb.VariableDeclaration, 8));
};


/**
 * @param {!Array<!proto.bosdyn.api.mission.VariableDeclaration>} value
 * @return {!proto.bosdyn.api.mission.Node} returns this
*/
proto.bosdyn.api.mission.Node.prototype.setParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.bosdyn.api.mission.VariableDeclaration=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.mission.VariableDeclaration}
 */
proto.bosdyn.api.mission.Node.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.bosdyn.api.mission.VariableDeclaration, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.mission.Node} returns this
 */
proto.bosdyn.api.mission.Node.prototype.clearParametersList = function() {
  return this.setParametersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.mission.Sequence.repeatedFields_ = [2];



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
proto.bosdyn.api.mission.Sequence.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.Sequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.Sequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Sequence.toObject = function(includeInstance, msg) {
  var f, obj = {
    alwaysRestart: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    childrenList: jspb.Message.toObjectList(msg.getChildrenList(),
    proto.bosdyn.api.mission.Node.toObject, includeInstance)
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
 * @return {!proto.bosdyn.api.mission.Sequence}
 */
proto.bosdyn.api.mission.Sequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.Sequence;
  return proto.bosdyn.api.mission.Sequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.Sequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.Sequence}
 */
proto.bosdyn.api.mission.Sequence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlwaysRestart(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.addChildren(value);
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
proto.bosdyn.api.mission.Sequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.Sequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.Sequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Sequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlwaysRestart();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool always_restart = 1;
 * @return {boolean}
 */
proto.bosdyn.api.mission.Sequence.prototype.getAlwaysRestart = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.mission.Sequence} returns this
 */
proto.bosdyn.api.mission.Sequence.prototype.setAlwaysRestart = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated Node children = 2;
 * @return {!Array<!proto.bosdyn.api.mission.Node>}
 */
proto.bosdyn.api.mission.Sequence.prototype.getChildrenList = function() {
  return /** @type{!Array<!proto.bosdyn.api.mission.Node>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.mission.Node, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.mission.Node>} value
 * @return {!proto.bosdyn.api.mission.Sequence} returns this
*/
proto.bosdyn.api.mission.Sequence.prototype.setChildrenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.mission.Node=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.Sequence.prototype.addChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.mission.Node, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.mission.Sequence} returns this
 */
proto.bosdyn.api.mission.Sequence.prototype.clearChildrenList = function() {
  return this.setChildrenList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.mission.Selector.repeatedFields_ = [2];



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
proto.bosdyn.api.mission.Selector.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.Selector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.Selector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Selector.toObject = function(includeInstance, msg) {
  var f, obj = {
    alwaysRestart: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    childrenList: jspb.Message.toObjectList(msg.getChildrenList(),
    proto.bosdyn.api.mission.Node.toObject, includeInstance)
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
 * @return {!proto.bosdyn.api.mission.Selector}
 */
proto.bosdyn.api.mission.Selector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.Selector;
  return proto.bosdyn.api.mission.Selector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.Selector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.Selector}
 */
proto.bosdyn.api.mission.Selector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlwaysRestart(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.addChildren(value);
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
proto.bosdyn.api.mission.Selector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.Selector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.Selector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Selector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlwaysRestart();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool always_restart = 1;
 * @return {boolean}
 */
proto.bosdyn.api.mission.Selector.prototype.getAlwaysRestart = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.mission.Selector} returns this
 */
proto.bosdyn.api.mission.Selector.prototype.setAlwaysRestart = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated Node children = 2;
 * @return {!Array<!proto.bosdyn.api.mission.Node>}
 */
proto.bosdyn.api.mission.Selector.prototype.getChildrenList = function() {
  return /** @type{!Array<!proto.bosdyn.api.mission.Node>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.mission.Node, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.mission.Node>} value
 * @return {!proto.bosdyn.api.mission.Selector} returns this
*/
proto.bosdyn.api.mission.Selector.prototype.setChildrenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.mission.Node=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.Selector.prototype.addChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.mission.Node, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.mission.Selector} returns this
 */
proto.bosdyn.api.mission.Selector.prototype.clearChildrenList = function() {
  return this.setChildrenList([]);
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
proto.bosdyn.api.mission.Switch.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.Switch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.Switch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Switch.toObject = function(includeInstance, msg) {
  var f, obj = {
    pivotValue: (f = msg.getPivotValue()) && bosdyn_api_mission_util_pb.Value.toObject(includeInstance, f),
    alwaysRestart: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    intChildrenMap: (f = msg.getIntChildrenMap()) ? f.toObject(includeInstance, proto.bosdyn.api.mission.Node.toObject) : [],
    defaultChild: (f = msg.getDefaultChild()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.mission.Switch}
 */
proto.bosdyn.api.mission.Switch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.Switch;
  return proto.bosdyn.api.mission.Switch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.Switch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.Switch}
 */
proto.bosdyn.api.mission.Switch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_mission_util_pb.Value;
      reader.readMessage(value,bosdyn_api_mission_util_pb.Value.deserializeBinaryFromReader);
      msg.setPivotValue(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlwaysRestart(value);
      break;
    case 3:
      var value = msg.getIntChildrenMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.bosdyn.api.mission.Node.deserializeBinaryFromReader, 0, new proto.bosdyn.api.mission.Node());
         });
      break;
    case 4:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setDefaultChild(value);
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
proto.bosdyn.api.mission.Switch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.Switch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.Switch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Switch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPivotValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_mission_util_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getAlwaysRestart();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIntChildrenMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.bosdyn.api.mission.Node.serializeBinaryToWriter);
  }
  f = message.getDefaultChild();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
};


/**
 * optional Value pivot_value = 1;
 * @return {?proto.bosdyn.api.mission.Value}
 */
proto.bosdyn.api.mission.Switch.prototype.getPivotValue = function() {
  return /** @type{?proto.bosdyn.api.mission.Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_mission_util_pb.Value, 1));
};


/**
 * @param {?proto.bosdyn.api.mission.Value|undefined} value
 * @return {!proto.bosdyn.api.mission.Switch} returns this
*/
proto.bosdyn.api.mission.Switch.prototype.setPivotValue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Switch} returns this
 */
proto.bosdyn.api.mission.Switch.prototype.clearPivotValue = function() {
  return this.setPivotValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Switch.prototype.hasPivotValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool always_restart = 2;
 * @return {boolean}
 */
proto.bosdyn.api.mission.Switch.prototype.getAlwaysRestart = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.mission.Switch} returns this
 */
proto.bosdyn.api.mission.Switch.prototype.setAlwaysRestart = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * map<int32, Node> int_children = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.bosdyn.api.mission.Node>}
 */
proto.bosdyn.api.mission.Switch.prototype.getIntChildrenMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.bosdyn.api.mission.Node>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.bosdyn.api.mission.Node));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bosdyn.api.mission.Switch} returns this
 */
proto.bosdyn.api.mission.Switch.prototype.clearIntChildrenMap = function() {
  this.getIntChildrenMap().clear();
  return this;};


/**
 * optional Node default_child = 4;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.Switch.prototype.getDefaultChild = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Node, 4));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.mission.Switch} returns this
*/
proto.bosdyn.api.mission.Switch.prototype.setDefaultChild = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Switch} returns this
 */
proto.bosdyn.api.mission.Switch.prototype.clearDefaultChild = function() {
  return this.setDefaultChild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Switch.prototype.hasDefaultChild = function() {
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
proto.bosdyn.api.mission.Repeat.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.Repeat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.Repeat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Repeat.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxStarts: jspb.Message.getFieldWithDefault(msg, 1, 0),
    child: (f = msg.getChild()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f),
    startCounterStateName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    respectChildFailure: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.bosdyn.api.mission.Repeat}
 */
proto.bosdyn.api.mission.Repeat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.Repeat;
  return proto.bosdyn.api.mission.Repeat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.Repeat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.Repeat}
 */
proto.bosdyn.api.mission.Repeat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxStarts(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setChild(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartCounterStateName(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRespectChildFailure(value);
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
proto.bosdyn.api.mission.Repeat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.Repeat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.Repeat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Repeat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxStarts();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getChild();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
  f = message.getStartCounterStateName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRespectChildFailure();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional int32 max_starts = 1;
 * @return {number}
 */
proto.bosdyn.api.mission.Repeat.prototype.getMaxStarts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.mission.Repeat} returns this
 */
proto.bosdyn.api.mission.Repeat.prototype.setMaxStarts = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Node child = 4;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.Repeat.prototype.getChild = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Node, 4));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.mission.Repeat} returns this
*/
proto.bosdyn.api.mission.Repeat.prototype.setChild = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Repeat} returns this
 */
proto.bosdyn.api.mission.Repeat.prototype.clearChild = function() {
  return this.setChild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Repeat.prototype.hasChild = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string start_counter_state_name = 5;
 * @return {string}
 */
proto.bosdyn.api.mission.Repeat.prototype.getStartCounterStateName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Repeat} returns this
 */
proto.bosdyn.api.mission.Repeat.prototype.setStartCounterStateName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool respect_child_failure = 6;
 * @return {boolean}
 */
proto.bosdyn.api.mission.Repeat.prototype.getRespectChildFailure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.mission.Repeat} returns this
 */
proto.bosdyn.api.mission.Repeat.prototype.setRespectChildFailure = function(value) {
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
proto.bosdyn.api.mission.Retry.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.Retry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.Retry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Retry.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxAttempts: jspb.Message.getFieldWithDefault(msg, 1, 0),
    child: (f = msg.getChild()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f),
    attemptCounterStateName: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.bosdyn.api.mission.Retry}
 */
proto.bosdyn.api.mission.Retry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.Retry;
  return proto.bosdyn.api.mission.Retry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.Retry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.Retry}
 */
proto.bosdyn.api.mission.Retry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxAttempts(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setChild(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttemptCounterStateName(value);
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
proto.bosdyn.api.mission.Retry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.Retry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.Retry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Retry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxAttempts();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getChild();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
  f = message.getAttemptCounterStateName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int32 max_attempts = 1;
 * @return {number}
 */
proto.bosdyn.api.mission.Retry.prototype.getMaxAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.mission.Retry} returns this
 */
proto.bosdyn.api.mission.Retry.prototype.setMaxAttempts = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Node child = 2;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.Retry.prototype.getChild = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Node, 2));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.mission.Retry} returns this
*/
proto.bosdyn.api.mission.Retry.prototype.setChild = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Retry} returns this
 */
proto.bosdyn.api.mission.Retry.prototype.clearChild = function() {
  return this.setChild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Retry.prototype.hasChild = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string attempt_counter_state_name = 5;
 * @return {string}
 */
proto.bosdyn.api.mission.Retry.prototype.getAttemptCounterStateName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Retry} returns this
 */
proto.bosdyn.api.mission.Retry.prototype.setAttemptCounterStateName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.mission.ForDuration.oneofGroups_ = [[1,5]];

/**
 * @enum {number}
 */
proto.bosdyn.api.mission.ForDuration.DurationTypeCase = {
  DURATION_TYPE_NOT_SET: 0,
  DURATION: 1,
  DURATION_NAME_IN_BLACKBOARD: 5
};

/**
 * @return {proto.bosdyn.api.mission.ForDuration.DurationTypeCase}
 */
proto.bosdyn.api.mission.ForDuration.prototype.getDurationTypeCase = function() {
  return /** @type {proto.bosdyn.api.mission.ForDuration.DurationTypeCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.mission.ForDuration.oneofGroups_[0]));
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
proto.bosdyn.api.mission.ForDuration.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.ForDuration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.ForDuration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.ForDuration.toObject = function(includeInstance, msg) {
  var f, obj = {
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    durationNameInBlackboard: jspb.Message.getFieldWithDefault(msg, 5, ""),
    child: (f = msg.getChild()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f),
    timeRemainingName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timeoutChild: (f = msg.getTimeoutChild()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.mission.ForDuration}
 */
proto.bosdyn.api.mission.ForDuration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.ForDuration;
  return proto.bosdyn.api.mission.ForDuration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.ForDuration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.ForDuration}
 */
proto.bosdyn.api.mission.ForDuration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDurationNameInBlackboard(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setChild(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeRemainingName(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setTimeoutChild(value);
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
proto.bosdyn.api.mission.ForDuration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.ForDuration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.ForDuration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.ForDuration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getChild();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
  f = message.getTimeRemainingName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTimeoutChild();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration duration = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.mission.ForDuration.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.mission.ForDuration} returns this
*/
proto.bosdyn.api.mission.ForDuration.prototype.setDuration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bosdyn.api.mission.ForDuration.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.ForDuration} returns this
 */
proto.bosdyn.api.mission.ForDuration.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.ForDuration.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string duration_name_in_blackboard = 5;
 * @return {string}
 */
proto.bosdyn.api.mission.ForDuration.prototype.getDurationNameInBlackboard = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.ForDuration} returns this
 */
proto.bosdyn.api.mission.ForDuration.prototype.setDurationNameInBlackboard = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.bosdyn.api.mission.ForDuration.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bosdyn.api.mission.ForDuration} returns this
 */
proto.bosdyn.api.mission.ForDuration.prototype.clearDurationNameInBlackboard = function() {
  return jspb.Message.setOneofField(this, 5, proto.bosdyn.api.mission.ForDuration.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.ForDuration.prototype.hasDurationNameInBlackboard = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Node child = 2;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.ForDuration.prototype.getChild = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Node, 2));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.mission.ForDuration} returns this
*/
proto.bosdyn.api.mission.ForDuration.prototype.setChild = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.ForDuration} returns this
 */
proto.bosdyn.api.mission.ForDuration.prototype.clearChild = function() {
  return this.setChild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.ForDuration.prototype.hasChild = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string time_remaining_name = 3;
 * @return {string}
 */
proto.bosdyn.api.mission.ForDuration.prototype.getTimeRemainingName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.ForDuration} returns this
 */
proto.bosdyn.api.mission.ForDuration.prototype.setTimeRemainingName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Node timeout_child = 4;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.ForDuration.prototype.getTimeoutChild = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Node, 4));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.mission.ForDuration} returns this
*/
proto.bosdyn.api.mission.ForDuration.prototype.setTimeoutChild = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.ForDuration} returns this
 */
proto.bosdyn.api.mission.ForDuration.prototype.clearTimeoutChild = function() {
  return this.setTimeoutChild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.ForDuration.prototype.hasTimeoutChild = function() {
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
proto.bosdyn.api.mission.SimpleParallel.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.SimpleParallel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.SimpleParallel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SimpleParallel.toObject = function(includeInstance, msg) {
  var f, obj = {
    primary: (f = msg.getPrimary()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f),
    secondary: (f = msg.getSecondary()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f),
    runSecondaryNodeOnce: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.bosdyn.api.mission.SimpleParallel}
 */
proto.bosdyn.api.mission.SimpleParallel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.SimpleParallel;
  return proto.bosdyn.api.mission.SimpleParallel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.SimpleParallel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.SimpleParallel}
 */
proto.bosdyn.api.mission.SimpleParallel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setPrimary(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setSecondary(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRunSecondaryNodeOnce(value);
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
proto.bosdyn.api.mission.SimpleParallel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.SimpleParallel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.SimpleParallel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SimpleParallel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrimary();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
  f = message.getSecondary();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
  f = message.getRunSecondaryNodeOnce();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional Node primary = 1;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.SimpleParallel.prototype.getPrimary = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Node, 1));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.mission.SimpleParallel} returns this
*/
proto.bosdyn.api.mission.SimpleParallel.prototype.setPrimary = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.SimpleParallel} returns this
 */
proto.bosdyn.api.mission.SimpleParallel.prototype.clearPrimary = function() {
  return this.setPrimary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.SimpleParallel.prototype.hasPrimary = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Node secondary = 2;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.SimpleParallel.prototype.getSecondary = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Node, 2));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.mission.SimpleParallel} returns this
*/
proto.bosdyn.api.mission.SimpleParallel.prototype.setSecondary = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.SimpleParallel} returns this
 */
proto.bosdyn.api.mission.SimpleParallel.prototype.clearSecondary = function() {
  return this.setSecondary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.SimpleParallel.prototype.hasSecondary = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool run_secondary_node_once = 3;
 * @return {boolean}
 */
proto.bosdyn.api.mission.SimpleParallel.prototype.getRunSecondaryNodeOnce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.mission.SimpleParallel} returns this
 */
proto.bosdyn.api.mission.SimpleParallel.prototype.setRunSecondaryNodeOnce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.mission.ParallelAnd.repeatedFields_ = [1];



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
proto.bosdyn.api.mission.ParallelAnd.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.ParallelAnd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.ParallelAnd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.ParallelAnd.toObject = function(includeInstance, msg) {
  var f, obj = {
    childrenList: jspb.Message.toObjectList(msg.getChildrenList(),
    proto.bosdyn.api.mission.Node.toObject, includeInstance),
    finishEveryNode: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.bosdyn.api.mission.ParallelAnd}
 */
proto.bosdyn.api.mission.ParallelAnd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.ParallelAnd;
  return proto.bosdyn.api.mission.ParallelAnd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.ParallelAnd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.ParallelAnd}
 */
proto.bosdyn.api.mission.ParallelAnd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.addChildren(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFinishEveryNode(value);
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
proto.bosdyn.api.mission.ParallelAnd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.ParallelAnd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.ParallelAnd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.ParallelAnd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
  f = message.getFinishEveryNode();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated Node children = 1;
 * @return {!Array<!proto.bosdyn.api.mission.Node>}
 */
proto.bosdyn.api.mission.ParallelAnd.prototype.getChildrenList = function() {
  return /** @type{!Array<!proto.bosdyn.api.mission.Node>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.mission.Node, 1));
};


/**
 * @param {!Array<!proto.bosdyn.api.mission.Node>} value
 * @return {!proto.bosdyn.api.mission.ParallelAnd} returns this
*/
proto.bosdyn.api.mission.ParallelAnd.prototype.setChildrenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bosdyn.api.mission.Node=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.ParallelAnd.prototype.addChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bosdyn.api.mission.Node, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.mission.ParallelAnd} returns this
 */
proto.bosdyn.api.mission.ParallelAnd.prototype.clearChildrenList = function() {
  return this.setChildrenList([]);
};


/**
 * optional bool finish_every_node = 2;
 * @return {boolean}
 */
proto.bosdyn.api.mission.ParallelAnd.prototype.getFinishEveryNode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.mission.ParallelAnd} returns this
 */
proto.bosdyn.api.mission.ParallelAnd.prototype.setFinishEveryNode = function(value) {
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
proto.bosdyn.api.mission.Condition.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.Condition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.Condition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Condition.toObject = function(includeInstance, msg) {
  var f, obj = {
    lhs: (f = msg.getLhs()) && proto.bosdyn.api.mission.Condition.Operand.toObject(includeInstance, f),
    rhs: (f = msg.getRhs()) && proto.bosdyn.api.mission.Condition.Operand.toObject(includeInstance, f),
    operation: jspb.Message.getFieldWithDefault(msg, 5, 0),
    handleStaleness: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.bosdyn.api.mission.Condition}
 */
proto.bosdyn.api.mission.Condition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.Condition;
  return proto.bosdyn.api.mission.Condition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.Condition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.Condition}
 */
proto.bosdyn.api.mission.Condition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.mission.Condition.Operand;
      reader.readMessage(value,proto.bosdyn.api.mission.Condition.Operand.deserializeBinaryFromReader);
      msg.setLhs(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.mission.Condition.Operand;
      reader.readMessage(value,proto.bosdyn.api.mission.Condition.Operand.deserializeBinaryFromReader);
      msg.setRhs(value);
      break;
    case 5:
      var value = /** @type {!proto.bosdyn.api.mission.Condition.Compare} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    case 6:
      var value = /** @type {!proto.bosdyn.api.mission.Condition.HandleStaleness} */ (reader.readEnum());
      msg.setHandleStaleness(value);
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
proto.bosdyn.api.mission.Condition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.Condition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.Condition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Condition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLhs();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.mission.Condition.Operand.serializeBinaryToWriter
    );
  }
  f = message.getRhs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.mission.Condition.Operand.serializeBinaryToWriter
    );
  }
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getHandleStaleness();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.mission.Condition.Compare = {
  COMPARE_UNKNOWN: 0,
  COMPARE_EQ: 1,
  COMPARE_NE: 2,
  COMPARE_LT: 3,
  COMPARE_GT: 4,
  COMPARE_LE: 5,
  COMPARE_GE: 6
};

/**
 * @enum {number}
 */
proto.bosdyn.api.mission.Condition.HandleStaleness = {
  HANDLE_STALE_UNKNOWN: 0,
  HANDLE_STALE_READ_ANYWAY: 1,
  HANDLE_STALE_RUN_UNTIL_FRESH: 2,
  HANDLE_STALE_FAIL: 3
};


/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.mission.Condition.Operand.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.bosdyn.api.mission.Condition.Operand.TypeCase = {
  TYPE_NOT_SET: 0,
  VAR: 1,
  CONST: 2
};

/**
 * @return {proto.bosdyn.api.mission.Condition.Operand.TypeCase}
 */
proto.bosdyn.api.mission.Condition.Operand.prototype.getTypeCase = function() {
  return /** @type {proto.bosdyn.api.mission.Condition.Operand.TypeCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.mission.Condition.Operand.oneofGroups_[0]));
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
proto.bosdyn.api.mission.Condition.Operand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.Condition.Operand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.Condition.Operand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Condition.Operand.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_var: (f = msg.getVar()) && bosdyn_api_mission_util_pb.VariableDeclaration.toObject(includeInstance, f),
    pb_const: (f = msg.getConst()) && bosdyn_api_mission_util_pb.ConstantValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.mission.Condition.Operand}
 */
proto.bosdyn.api.mission.Condition.Operand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.Condition.Operand;
  return proto.bosdyn.api.mission.Condition.Operand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.Condition.Operand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.Condition.Operand}
 */
proto.bosdyn.api.mission.Condition.Operand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_mission_util_pb.VariableDeclaration;
      reader.readMessage(value,bosdyn_api_mission_util_pb.VariableDeclaration.deserializeBinaryFromReader);
      msg.setVar(value);
      break;
    case 2:
      var value = new bosdyn_api_mission_util_pb.ConstantValue;
      reader.readMessage(value,bosdyn_api_mission_util_pb.ConstantValue.deserializeBinaryFromReader);
      msg.setConst(value);
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
proto.bosdyn.api.mission.Condition.Operand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.Condition.Operand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.Condition.Operand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Condition.Operand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVar();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_mission_util_pb.VariableDeclaration.serializeBinaryToWriter
    );
  }
  f = message.getConst();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_mission_util_pb.ConstantValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional VariableDeclaration var = 1;
 * @return {?proto.bosdyn.api.mission.VariableDeclaration}
 */
proto.bosdyn.api.mission.Condition.Operand.prototype.getVar = function() {
  return /** @type{?proto.bosdyn.api.mission.VariableDeclaration} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_mission_util_pb.VariableDeclaration, 1));
};


/**
 * @param {?proto.bosdyn.api.mission.VariableDeclaration|undefined} value
 * @return {!proto.bosdyn.api.mission.Condition.Operand} returns this
*/
proto.bosdyn.api.mission.Condition.Operand.prototype.setVar = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bosdyn.api.mission.Condition.Operand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Condition.Operand} returns this
 */
proto.bosdyn.api.mission.Condition.Operand.prototype.clearVar = function() {
  return this.setVar(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Condition.Operand.prototype.hasVar = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ConstantValue const = 2;
 * @return {?proto.bosdyn.api.mission.ConstantValue}
 */
proto.bosdyn.api.mission.Condition.Operand.prototype.getConst = function() {
  return /** @type{?proto.bosdyn.api.mission.ConstantValue} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_mission_util_pb.ConstantValue, 2));
};


/**
 * @param {?proto.bosdyn.api.mission.ConstantValue|undefined} value
 * @return {!proto.bosdyn.api.mission.Condition.Operand} returns this
*/
proto.bosdyn.api.mission.Condition.Operand.prototype.setConst = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bosdyn.api.mission.Condition.Operand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Condition.Operand} returns this
 */
proto.bosdyn.api.mission.Condition.Operand.prototype.clearConst = function() {
  return this.setConst(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Condition.Operand.prototype.hasConst = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Operand lhs = 1;
 * @return {?proto.bosdyn.api.mission.Condition.Operand}
 */
proto.bosdyn.api.mission.Condition.prototype.getLhs = function() {
  return /** @type{?proto.bosdyn.api.mission.Condition.Operand} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Condition.Operand, 1));
};


/**
 * @param {?proto.bosdyn.api.mission.Condition.Operand|undefined} value
 * @return {!proto.bosdyn.api.mission.Condition} returns this
*/
proto.bosdyn.api.mission.Condition.prototype.setLhs = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Condition} returns this
 */
proto.bosdyn.api.mission.Condition.prototype.clearLhs = function() {
  return this.setLhs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Condition.prototype.hasLhs = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Operand rhs = 2;
 * @return {?proto.bosdyn.api.mission.Condition.Operand}
 */
proto.bosdyn.api.mission.Condition.prototype.getRhs = function() {
  return /** @type{?proto.bosdyn.api.mission.Condition.Operand} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Condition.Operand, 2));
};


/**
 * @param {?proto.bosdyn.api.mission.Condition.Operand|undefined} value
 * @return {!proto.bosdyn.api.mission.Condition} returns this
*/
proto.bosdyn.api.mission.Condition.prototype.setRhs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Condition} returns this
 */
proto.bosdyn.api.mission.Condition.prototype.clearRhs = function() {
  return this.setRhs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Condition.prototype.hasRhs = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Compare operation = 5;
 * @return {!proto.bosdyn.api.mission.Condition.Compare}
 */
proto.bosdyn.api.mission.Condition.prototype.getOperation = function() {
  return /** @type {!proto.bosdyn.api.mission.Condition.Compare} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bosdyn.api.mission.Condition.Compare} value
 * @return {!proto.bosdyn.api.mission.Condition} returns this
 */
proto.bosdyn.api.mission.Condition.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional HandleStaleness handle_staleness = 6;
 * @return {!proto.bosdyn.api.mission.Condition.HandleStaleness}
 */
proto.bosdyn.api.mission.Condition.prototype.getHandleStaleness = function() {
  return /** @type {!proto.bosdyn.api.mission.Condition.HandleStaleness} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.bosdyn.api.mission.Condition.HandleStaleness} value
 * @return {!proto.bosdyn.api.mission.Condition} returns this
 */
proto.bosdyn.api.mission.Condition.prototype.setHandleStaleness = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
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
proto.bosdyn.api.mission.BosdynRobotState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.BosdynRobotState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.BosdynRobotState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynRobotState.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    child: (f = msg.getChild()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f),
    stateName: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.bosdyn.api.mission.BosdynRobotState}
 */
proto.bosdyn.api.mission.BosdynRobotState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.BosdynRobotState;
  return proto.bosdyn.api.mission.BosdynRobotState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.BosdynRobotState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.BosdynRobotState}
 */
proto.bosdyn.api.mission.BosdynRobotState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setChild(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStateName(value);
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
proto.bosdyn.api.mission.BosdynRobotState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.BosdynRobotState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.BosdynRobotState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynRobotState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChild();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
  f = message.getStateName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynRobotState.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynRobotState} returns this
 */
proto.bosdyn.api.mission.BosdynRobotState.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynRobotState.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynRobotState} returns this
 */
proto.bosdyn.api.mission.BosdynRobotState.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Node child = 3;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.BosdynRobotState.prototype.getChild = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Node, 3));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.mission.BosdynRobotState} returns this
*/
proto.bosdyn.api.mission.BosdynRobotState.prototype.setChild = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.BosdynRobotState} returns this
 */
proto.bosdyn.api.mission.BosdynRobotState.prototype.clearChild = function() {
  return this.setChild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynRobotState.prototype.hasChild = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string state_name = 4;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynRobotState.prototype.getStateName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynRobotState} returns this
 */
proto.bosdyn.api.mission.BosdynRobotState.prototype.setStateName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.bosdyn.api.mission.BosdynDockState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.BosdynDockState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.BosdynDockState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynDockState.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    child: (f = msg.getChild()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f),
    stateName: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.bosdyn.api.mission.BosdynDockState}
 */
proto.bosdyn.api.mission.BosdynDockState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.BosdynDockState;
  return proto.bosdyn.api.mission.BosdynDockState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.BosdynDockState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.BosdynDockState}
 */
proto.bosdyn.api.mission.BosdynDockState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setChild(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStateName(value);
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
proto.bosdyn.api.mission.BosdynDockState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.BosdynDockState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.BosdynDockState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynDockState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChild();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
  f = message.getStateName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynDockState.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynDockState} returns this
 */
proto.bosdyn.api.mission.BosdynDockState.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynDockState.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynDockState} returns this
 */
proto.bosdyn.api.mission.BosdynDockState.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Node child = 3;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.BosdynDockState.prototype.getChild = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Node, 3));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.mission.BosdynDockState} returns this
*/
proto.bosdyn.api.mission.BosdynDockState.prototype.setChild = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.BosdynDockState} returns this
 */
proto.bosdyn.api.mission.BosdynDockState.prototype.clearChild = function() {
  return this.setChild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynDockState.prototype.hasChild = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string state_name = 4;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynDockState.prototype.getStateName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynDockState} returns this
 */
proto.bosdyn.api.mission.BosdynDockState.prototype.setStateName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.bosdyn.api.mission.BosdynRobotCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.BosdynRobotCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.BosdynRobotCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynRobotCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    command: (f = msg.getCommand()) && bosdyn_api_robot_command_pb.RobotCommand.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.mission.BosdynRobotCommand}
 */
proto.bosdyn.api.mission.BosdynRobotCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.BosdynRobotCommand;
  return proto.bosdyn.api.mission.BosdynRobotCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.BosdynRobotCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.BosdynRobotCommand}
 */
proto.bosdyn.api.mission.BosdynRobotCommand.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = new bosdyn_api_robot_command_pb.RobotCommand;
      reader.readMessage(value,bosdyn_api_robot_command_pb.RobotCommand.deserializeBinaryFromReader);
      msg.setCommand(value);
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
proto.bosdyn.api.mission.BosdynRobotCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.BosdynRobotCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.BosdynRobotCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynRobotCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCommand();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_robot_command_pb.RobotCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynRobotCommand.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynRobotCommand} returns this
 */
proto.bosdyn.api.mission.BosdynRobotCommand.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynRobotCommand.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynRobotCommand} returns this
 */
proto.bosdyn.api.mission.BosdynRobotCommand.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bosdyn.api.RobotCommand command = 3;
 * @return {?proto.bosdyn.api.RobotCommand}
 */
proto.bosdyn.api.mission.BosdynRobotCommand.prototype.getCommand = function() {
  return /** @type{?proto.bosdyn.api.RobotCommand} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_robot_command_pb.RobotCommand, 3));
};


/**
 * @param {?proto.bosdyn.api.RobotCommand|undefined} value
 * @return {!proto.bosdyn.api.mission.BosdynRobotCommand} returns this
*/
proto.bosdyn.api.mission.BosdynRobotCommand.prototype.setCommand = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.BosdynRobotCommand} returns this
 */
proto.bosdyn.api.mission.BosdynRobotCommand.prototype.clearCommand = function() {
  return this.setCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynRobotCommand.prototype.hasCommand = function() {
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
proto.bosdyn.api.mission.BosdynPowerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.BosdynPowerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.BosdynPowerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynPowerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    request: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.bosdyn.api.mission.BosdynPowerRequest}
 */
proto.bosdyn.api.mission.BosdynPowerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.BosdynPowerRequest;
  return proto.bosdyn.api.mission.BosdynPowerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.BosdynPowerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.BosdynPowerRequest}
 */
proto.bosdyn.api.mission.BosdynPowerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 4:
      var value = /** @type {!proto.bosdyn.api.PowerCommandRequest.Request} */ (reader.readEnum());
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
proto.bosdyn.api.mission.BosdynPowerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.BosdynPowerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.BosdynPowerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynPowerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequest();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynPowerRequest.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynPowerRequest} returns this
 */
proto.bosdyn.api.mission.BosdynPowerRequest.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynPowerRequest.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynPowerRequest} returns this
 */
proto.bosdyn.api.mission.BosdynPowerRequest.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bosdyn.api.PowerCommandRequest.Request request = 4;
 * @return {!proto.bosdyn.api.PowerCommandRequest.Request}
 */
proto.bosdyn.api.mission.BosdynPowerRequest.prototype.getRequest = function() {
  return /** @type {!proto.bosdyn.api.PowerCommandRequest.Request} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bosdyn.api.PowerCommandRequest.Request} value
 * @return {!proto.bosdyn.api.mission.BosdynPowerRequest} returns this
 */
proto.bosdyn.api.mission.BosdynPowerRequest.prototype.setRequest = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
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
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.BosdynNavigateTo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.BosdynNavigateTo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynNavigateTo.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    destinationWaypointId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    routeGenParams: (f = msg.getRouteGenParams()) && bosdyn_api_graph_nav_graph_nav_pb.RouteGenParams.toObject(includeInstance, f),
    travelParams: (f = msg.getTravelParams()) && bosdyn_api_graph_nav_graph_nav_pb.TravelParams.toObject(includeInstance, f),
    navigationFeedbackResponseBlackboardKey: jspb.Message.getFieldWithDefault(msg, 6, ""),
    navigateToResponseBlackboardKey: jspb.Message.getFieldWithDefault(msg, 7, ""),
    navigateToRequestBlackboardKey: jspb.Message.getFieldWithDefault(msg, 9, ""),
    routeBlockedBehavior: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.bosdyn.api.mission.BosdynNavigateTo}
 */
proto.bosdyn.api.mission.BosdynNavigateTo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.BosdynNavigateTo;
  return proto.bosdyn.api.mission.BosdynNavigateTo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.BosdynNavigateTo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.BosdynNavigateTo}
 */
proto.bosdyn.api.mission.BosdynNavigateTo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationWaypointId(value);
      break;
    case 4:
      var value = new bosdyn_api_graph_nav_graph_nav_pb.RouteGenParams;
      reader.readMessage(value,bosdyn_api_graph_nav_graph_nav_pb.RouteGenParams.deserializeBinaryFromReader);
      msg.setRouteGenParams(value);
      break;
    case 5:
      var value = new bosdyn_api_graph_nav_graph_nav_pb.TravelParams;
      reader.readMessage(value,bosdyn_api_graph_nav_graph_nav_pb.TravelParams.deserializeBinaryFromReader);
      msg.setTravelParams(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNavigationFeedbackResponseBlackboardKey(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNavigateToResponseBlackboardKey(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setNavigateToRequestBlackboardKey(value);
      break;
    case 8:
      var value = /** @type {!proto.bosdyn.api.graph_nav.RouteFollowingParams.RouteBlockedBehavior} */ (reader.readEnum());
      msg.setRouteBlockedBehavior(value);
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
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.BosdynNavigateTo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.BosdynNavigateTo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynNavigateTo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDestinationWaypointId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRouteGenParams();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_graph_nav_graph_nav_pb.RouteGenParams.serializeBinaryToWriter
    );
  }
  f = message.getTravelParams();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_graph_nav_graph_nav_pb.TravelParams.serializeBinaryToWriter
    );
  }
  f = message.getNavigationFeedbackResponseBlackboardKey();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getNavigateToResponseBlackboardKey();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getNavigateToRequestBlackboardKey();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRouteBlockedBehavior();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateTo} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateTo} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string destination_waypoint_id = 3;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.getDestinationWaypointId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateTo} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.setDestinationWaypointId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bosdyn.api.graph_nav.RouteGenParams route_gen_params = 4;
 * @return {?proto.bosdyn.api.graph_nav.RouteGenParams}
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.getRouteGenParams = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.RouteGenParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_graph_nav_pb.RouteGenParams, 4));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.RouteGenParams|undefined} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateTo} returns this
*/
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.setRouteGenParams = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.BosdynNavigateTo} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.clearRouteGenParams = function() {
  return this.setRouteGenParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.hasRouteGenParams = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bosdyn.api.graph_nav.TravelParams travel_params = 5;
 * @return {?proto.bosdyn.api.graph_nav.TravelParams}
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.getTravelParams = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.TravelParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_graph_nav_pb.TravelParams, 5));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.TravelParams|undefined} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateTo} returns this
*/
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.setTravelParams = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.BosdynNavigateTo} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.clearTravelParams = function() {
  return this.setTravelParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.hasTravelParams = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string navigation_feedback_response_blackboard_key = 6;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.getNavigationFeedbackResponseBlackboardKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateTo} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.setNavigationFeedbackResponseBlackboardKey = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string navigate_to_response_blackboard_key = 7;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.getNavigateToResponseBlackboardKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateTo} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.setNavigateToResponseBlackboardKey = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string navigate_to_request_blackboard_key = 9;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.getNavigateToRequestBlackboardKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateTo} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.setNavigateToRequestBlackboardKey = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bosdyn.api.graph_nav.RouteFollowingParams.RouteBlockedBehavior route_blocked_behavior = 8;
 * @return {!proto.bosdyn.api.graph_nav.RouteFollowingParams.RouteBlockedBehavior}
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.getRouteBlockedBehavior = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.RouteFollowingParams.RouteBlockedBehavior} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.RouteFollowingParams.RouteBlockedBehavior} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateTo} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateTo.prototype.setRouteBlockedBehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
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
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.BosdynNavigateToAnchor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.BosdynNavigateToAnchor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    seedTformGoal: (f = msg.getSeedTformGoal()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    routeGenParams: (f = msg.getRouteGenParams()) && bosdyn_api_graph_nav_graph_nav_pb.RouteGenParams.toObject(includeInstance, f),
    travelParams: (f = msg.getTravelParams()) && bosdyn_api_graph_nav_graph_nav_pb.TravelParams.toObject(includeInstance, f),
    navigationFeedbackResponseBlackboardKey: jspb.Message.getFieldWithDefault(msg, 6, ""),
    navigateToAnchorResponseBlackboardKey: jspb.Message.getFieldWithDefault(msg, 7, ""),
    navigateToAnchorRequestBlackboardKey: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.bosdyn.api.mission.BosdynNavigateToAnchor}
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.BosdynNavigateToAnchor;
  return proto.bosdyn.api.mission.BosdynNavigateToAnchor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.BosdynNavigateToAnchor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.BosdynNavigateToAnchor}
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setSeedTformGoal(value);
      break;
    case 4:
      var value = new bosdyn_api_graph_nav_graph_nav_pb.RouteGenParams;
      reader.readMessage(value,bosdyn_api_graph_nav_graph_nav_pb.RouteGenParams.deserializeBinaryFromReader);
      msg.setRouteGenParams(value);
      break;
    case 5:
      var value = new bosdyn_api_graph_nav_graph_nav_pb.TravelParams;
      reader.readMessage(value,bosdyn_api_graph_nav_graph_nav_pb.TravelParams.deserializeBinaryFromReader);
      msg.setTravelParams(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNavigationFeedbackResponseBlackboardKey(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNavigateToAnchorResponseBlackboardKey(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setNavigateToAnchorRequestBlackboardKey(value);
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
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.BosdynNavigateToAnchor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.BosdynNavigateToAnchor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSeedTformGoal();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
  f = message.getRouteGenParams();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_graph_nav_graph_nav_pb.RouteGenParams.serializeBinaryToWriter
    );
  }
  f = message.getTravelParams();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_graph_nav_graph_nav_pb.TravelParams.serializeBinaryToWriter
    );
  }
  f = message.getNavigationFeedbackResponseBlackboardKey();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getNavigateToAnchorResponseBlackboardKey();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getNavigateToAnchorRequestBlackboardKey();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateToAnchor} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateToAnchor} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bosdyn.api.SE3Pose seed_tform_goal = 3;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.getSeedTformGoal = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 3));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateToAnchor} returns this
*/
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.setSeedTformGoal = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.BosdynNavigateToAnchor} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.clearSeedTformGoal = function() {
  return this.setSeedTformGoal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.hasSeedTformGoal = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bosdyn.api.graph_nav.RouteGenParams route_gen_params = 4;
 * @return {?proto.bosdyn.api.graph_nav.RouteGenParams}
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.getRouteGenParams = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.RouteGenParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_graph_nav_pb.RouteGenParams, 4));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.RouteGenParams|undefined} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateToAnchor} returns this
*/
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.setRouteGenParams = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.BosdynNavigateToAnchor} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.clearRouteGenParams = function() {
  return this.setRouteGenParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.hasRouteGenParams = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bosdyn.api.graph_nav.TravelParams travel_params = 5;
 * @return {?proto.bosdyn.api.graph_nav.TravelParams}
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.getTravelParams = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.TravelParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_graph_nav_pb.TravelParams, 5));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.TravelParams|undefined} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateToAnchor} returns this
*/
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.setTravelParams = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.BosdynNavigateToAnchor} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.clearTravelParams = function() {
  return this.setTravelParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.hasTravelParams = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string navigation_feedback_response_blackboard_key = 6;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.getNavigationFeedbackResponseBlackboardKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateToAnchor} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.setNavigationFeedbackResponseBlackboardKey = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string navigate_to_anchor_response_blackboard_key = 7;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.getNavigateToAnchorResponseBlackboardKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateToAnchor} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.setNavigateToAnchorResponseBlackboardKey = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string navigate_to_anchor_request_blackboard_key = 8;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.getNavigateToAnchorRequestBlackboardKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateToAnchor} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateToAnchor.prototype.setNavigateToAnchorRequestBlackboardKey = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
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
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.BosdynNavigateRoute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.BosdynNavigateRoute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    route: (f = msg.getRoute()) && bosdyn_api_graph_nav_nav_pb.Route.toObject(includeInstance, f),
    routeFollowParams: (f = msg.getRouteFollowParams()) && bosdyn_api_graph_nav_graph_nav_pb.RouteFollowingParams.toObject(includeInstance, f),
    travelParams: (f = msg.getTravelParams()) && bosdyn_api_graph_nav_graph_nav_pb.TravelParams.toObject(includeInstance, f),
    navigationFeedbackResponseBlackboardKey: jspb.Message.getFieldWithDefault(msg, 6, ""),
    navigateRouteResponseBlackboardKey: jspb.Message.getFieldWithDefault(msg, 7, ""),
    navigateRouteRequestBlackboardKey: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.bosdyn.api.mission.BosdynNavigateRoute}
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.BosdynNavigateRoute;
  return proto.bosdyn.api.mission.BosdynNavigateRoute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.BosdynNavigateRoute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.BosdynNavigateRoute}
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = new bosdyn_api_graph_nav_nav_pb.Route;
      reader.readMessage(value,bosdyn_api_graph_nav_nav_pb.Route.deserializeBinaryFromReader);
      msg.setRoute(value);
      break;
    case 4:
      var value = new bosdyn_api_graph_nav_graph_nav_pb.RouteFollowingParams;
      reader.readMessage(value,bosdyn_api_graph_nav_graph_nav_pb.RouteFollowingParams.deserializeBinaryFromReader);
      msg.setRouteFollowParams(value);
      break;
    case 5:
      var value = new bosdyn_api_graph_nav_graph_nav_pb.TravelParams;
      reader.readMessage(value,bosdyn_api_graph_nav_graph_nav_pb.TravelParams.deserializeBinaryFromReader);
      msg.setTravelParams(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNavigationFeedbackResponseBlackboardKey(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNavigateRouteResponseBlackboardKey(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setNavigateRouteRequestBlackboardKey(value);
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
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.BosdynNavigateRoute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.BosdynNavigateRoute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoute();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_graph_nav_nav_pb.Route.serializeBinaryToWriter
    );
  }
  f = message.getRouteFollowParams();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_graph_nav_graph_nav_pb.RouteFollowingParams.serializeBinaryToWriter
    );
  }
  f = message.getTravelParams();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_graph_nav_graph_nav_pb.TravelParams.serializeBinaryToWriter
    );
  }
  f = message.getNavigationFeedbackResponseBlackboardKey();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getNavigateRouteResponseBlackboardKey();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getNavigateRouteRequestBlackboardKey();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateRoute} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateRoute} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bosdyn.api.graph_nav.Route route = 3;
 * @return {?proto.bosdyn.api.graph_nav.Route}
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.getRoute = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Route} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_nav_pb.Route, 3));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Route|undefined} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateRoute} returns this
*/
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.setRoute = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.BosdynNavigateRoute} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.clearRoute = function() {
  return this.setRoute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.hasRoute = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bosdyn.api.graph_nav.RouteFollowingParams route_follow_params = 4;
 * @return {?proto.bosdyn.api.graph_nav.RouteFollowingParams}
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.getRouteFollowParams = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.RouteFollowingParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_graph_nav_pb.RouteFollowingParams, 4));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.RouteFollowingParams|undefined} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateRoute} returns this
*/
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.setRouteFollowParams = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.BosdynNavigateRoute} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.clearRouteFollowParams = function() {
  return this.setRouteFollowParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.hasRouteFollowParams = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bosdyn.api.graph_nav.TravelParams travel_params = 5;
 * @return {?proto.bosdyn.api.graph_nav.TravelParams}
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.getTravelParams = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.TravelParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_graph_nav_pb.TravelParams, 5));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.TravelParams|undefined} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateRoute} returns this
*/
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.setTravelParams = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.BosdynNavigateRoute} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.clearTravelParams = function() {
  return this.setTravelParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.hasTravelParams = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string navigation_feedback_response_blackboard_key = 6;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.getNavigationFeedbackResponseBlackboardKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateRoute} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.setNavigationFeedbackResponseBlackboardKey = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string navigate_route_response_blackboard_key = 7;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.getNavigateRouteResponseBlackboardKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateRoute} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.setNavigateRouteResponseBlackboardKey = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string navigate_route_request_blackboard_key = 8;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.getNavigateRouteRequestBlackboardKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynNavigateRoute} returns this
 */
proto.bosdyn.api.mission.BosdynNavigateRoute.prototype.setNavigateRouteRequestBlackboardKey = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
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
proto.bosdyn.api.mission.BosdynGraphNavState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.BosdynGraphNavState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.BosdynGraphNavState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynGraphNavState.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    child: (f = msg.getChild()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f),
    stateName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    waypointId: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.bosdyn.api.mission.BosdynGraphNavState}
 */
proto.bosdyn.api.mission.BosdynGraphNavState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.BosdynGraphNavState;
  return proto.bosdyn.api.mission.BosdynGraphNavState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.BosdynGraphNavState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.BosdynGraphNavState}
 */
proto.bosdyn.api.mission.BosdynGraphNavState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setChild(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStateName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWaypointId(value);
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
proto.bosdyn.api.mission.BosdynGraphNavState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.BosdynGraphNavState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.BosdynGraphNavState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynGraphNavState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChild();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
  f = message.getStateName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWaypointId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynGraphNavState.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynGraphNavState} returns this
 */
proto.bosdyn.api.mission.BosdynGraphNavState.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynGraphNavState.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynGraphNavState} returns this
 */
proto.bosdyn.api.mission.BosdynGraphNavState.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Node child = 3;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.BosdynGraphNavState.prototype.getChild = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Node, 3));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.mission.BosdynGraphNavState} returns this
*/
proto.bosdyn.api.mission.BosdynGraphNavState.prototype.setChild = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.BosdynGraphNavState} returns this
 */
proto.bosdyn.api.mission.BosdynGraphNavState.prototype.clearChild = function() {
  return this.setChild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynGraphNavState.prototype.hasChild = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string state_name = 4;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynGraphNavState.prototype.getStateName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynGraphNavState} returns this
 */
proto.bosdyn.api.mission.BosdynGraphNavState.prototype.setStateName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string waypoint_id = 5;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynGraphNavState.prototype.getWaypointId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynGraphNavState} returns this
 */
proto.bosdyn.api.mission.BosdynGraphNavState.prototype.setWaypointId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.bosdyn.api.mission.BosdynGraphNavLocalize.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.BosdynGraphNavLocalize.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.BosdynGraphNavLocalize} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynGraphNavLocalize.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    localizationRequest: (f = msg.getLocalizationRequest()) && bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest.toObject(includeInstance, f),
    allowBadQuality: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    responseBbKey: jspb.Message.getFieldWithDefault(msg, 5, ""),
    localizationRequestBbKey: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.bosdyn.api.mission.BosdynGraphNavLocalize}
 */
proto.bosdyn.api.mission.BosdynGraphNavLocalize.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.BosdynGraphNavLocalize;
  return proto.bosdyn.api.mission.BosdynGraphNavLocalize.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.BosdynGraphNavLocalize} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.BosdynGraphNavLocalize}
 */
proto.bosdyn.api.mission.BosdynGraphNavLocalize.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = new bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest;
      reader.readMessage(value,bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest.deserializeBinaryFromReader);
      msg.setLocalizationRequest(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowBadQuality(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponseBbKey(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalizationRequestBbKey(value);
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
proto.bosdyn.api.mission.BosdynGraphNavLocalize.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.BosdynGraphNavLocalize.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.BosdynGraphNavLocalize} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynGraphNavLocalize.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocalizationRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest.serializeBinaryToWriter
    );
  }
  f = message.getAllowBadQuality();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getResponseBbKey();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLocalizationRequestBbKey();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynGraphNavLocalize.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynGraphNavLocalize} returns this
 */
proto.bosdyn.api.mission.BosdynGraphNavLocalize.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynGraphNavLocalize.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynGraphNavLocalize} returns this
 */
proto.bosdyn.api.mission.BosdynGraphNavLocalize.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bosdyn.api.graph_nav.SetLocalizationRequest localization_request = 3;
 * @return {?proto.bosdyn.api.graph_nav.SetLocalizationRequest}
 */
proto.bosdyn.api.mission.BosdynGraphNavLocalize.prototype.getLocalizationRequest = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.SetLocalizationRequest} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest, 3));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.SetLocalizationRequest|undefined} value
 * @return {!proto.bosdyn.api.mission.BosdynGraphNavLocalize} returns this
*/
proto.bosdyn.api.mission.BosdynGraphNavLocalize.prototype.setLocalizationRequest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.BosdynGraphNavLocalize} returns this
 */
proto.bosdyn.api.mission.BosdynGraphNavLocalize.prototype.clearLocalizationRequest = function() {
  return this.setLocalizationRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynGraphNavLocalize.prototype.hasLocalizationRequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool allow_bad_quality = 4;
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynGraphNavLocalize.prototype.getAllowBadQuality = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.mission.BosdynGraphNavLocalize} returns this
 */
proto.bosdyn.api.mission.BosdynGraphNavLocalize.prototype.setAllowBadQuality = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string response_bb_key = 5;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynGraphNavLocalize.prototype.getResponseBbKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynGraphNavLocalize} returns this
 */
proto.bosdyn.api.mission.BosdynGraphNavLocalize.prototype.setResponseBbKey = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string localization_request_bb_key = 6;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynGraphNavLocalize.prototype.getLocalizationRequestBbKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynGraphNavLocalize} returns this
 */
proto.bosdyn.api.mission.BosdynGraphNavLocalize.prototype.setLocalizationRequestBbKey = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.bosdyn.api.mission.BosdynRecordEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.BosdynRecordEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.BosdynRecordEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynRecordEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    event: (f = msg.getEvent()) && bosdyn_api_data_buffer_pb.Event.toObject(includeInstance, f),
    succeedEarly: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    additionalParametersMap: (f = msg.getAdditionalParametersMap()) ? f.toObject(includeInstance, proto.bosdyn.api.mission.Value.toObject) : []
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
 * @return {!proto.bosdyn.api.mission.BosdynRecordEvent}
 */
proto.bosdyn.api.mission.BosdynRecordEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.BosdynRecordEvent;
  return proto.bosdyn.api.mission.BosdynRecordEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.BosdynRecordEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.BosdynRecordEvent}
 */
proto.bosdyn.api.mission.BosdynRecordEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = new bosdyn_api_data_buffer_pb.Event;
      reader.readMessage(value,bosdyn_api_data_buffer_pb.Event.deserializeBinaryFromReader);
      msg.setEvent(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSucceedEarly(value);
      break;
    case 5:
      var value = msg.getAdditionalParametersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bosdyn.api.mission.Value.deserializeBinaryFromReader, "", new proto.bosdyn.api.mission.Value());
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
proto.bosdyn.api.mission.BosdynRecordEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.BosdynRecordEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.BosdynRecordEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynRecordEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEvent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_data_buffer_pb.Event.serializeBinaryToWriter
    );
  }
  f = message.getSucceedEarly();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAdditionalParametersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bosdyn.api.mission.Value.serializeBinaryToWriter);
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynRecordEvent.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynRecordEvent} returns this
 */
proto.bosdyn.api.mission.BosdynRecordEvent.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynRecordEvent.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynRecordEvent} returns this
 */
proto.bosdyn.api.mission.BosdynRecordEvent.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bosdyn.api.Event event = 3;
 * @return {?proto.bosdyn.api.Event}
 */
proto.bosdyn.api.mission.BosdynRecordEvent.prototype.getEvent = function() {
  return /** @type{?proto.bosdyn.api.Event} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_buffer_pb.Event, 3));
};


/**
 * @param {?proto.bosdyn.api.Event|undefined} value
 * @return {!proto.bosdyn.api.mission.BosdynRecordEvent} returns this
*/
proto.bosdyn.api.mission.BosdynRecordEvent.prototype.setEvent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.BosdynRecordEvent} returns this
 */
proto.bosdyn.api.mission.BosdynRecordEvent.prototype.clearEvent = function() {
  return this.setEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynRecordEvent.prototype.hasEvent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool succeed_early = 4;
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynRecordEvent.prototype.getSucceedEarly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.mission.BosdynRecordEvent} returns this
 */
proto.bosdyn.api.mission.BosdynRecordEvent.prototype.setSucceedEarly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * map<string, Value> additional_parameters = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bosdyn.api.mission.Value>}
 */
proto.bosdyn.api.mission.BosdynRecordEvent.prototype.getAdditionalParametersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bosdyn.api.mission.Value>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      proto.bosdyn.api.mission.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bosdyn.api.mission.BosdynRecordEvent} returns this
 */
proto.bosdyn.api.mission.BosdynRecordEvent.prototype.clearAdditionalParametersMap = function() {
  this.getAdditionalParametersMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.mission.RemoteGrpc.repeatedFields_ = [5,6];



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
proto.bosdyn.api.mission.RemoteGrpc.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.RemoteGrpc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.RemoteGrpc} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.RemoteGrpc.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    serviceName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timeout: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    leaseResourcesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    inputsList: jspb.Message.toObjectList(msg.getInputsList(),
    bosdyn_api_mission_util_pb.KeyValue.toObject, includeInstance),
    groupNameFormat: jspb.Message.getFieldWithDefault(msg, 8, ""),
    params: (f = msg.getParams()) && bosdyn_api_service_customization_pb.DictParam.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.mission.RemoteGrpc}
 */
proto.bosdyn.api.mission.RemoteGrpc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.RemoteGrpc;
  return proto.bosdyn.api.mission.RemoteGrpc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.RemoteGrpc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.RemoteGrpc}
 */
proto.bosdyn.api.mission.RemoteGrpc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTimeout(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addLeaseResources(value);
      break;
    case 6:
      var value = new bosdyn_api_mission_util_pb.KeyValue;
      reader.readMessage(value,bosdyn_api_mission_util_pb.KeyValue.deserializeBinaryFromReader);
      msg.addInputs(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupNameFormat(value);
      break;
    case 9:
      var value = new bosdyn_api_service_customization_pb.DictParam;
      reader.readMessage(value,bosdyn_api_service_customization_pb.DictParam.deserializeBinaryFromReader);
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
proto.bosdyn.api.mission.RemoteGrpc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.RemoteGrpc.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.RemoteGrpc} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.RemoteGrpc.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTimeout();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getLeaseResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      bosdyn_api_mission_util_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getGroupNameFormat();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      bosdyn_api_service_customization_pb.DictParam.serializeBinaryToWriter
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.RemoteGrpc} returns this
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string service_name = 3;
 * @return {string}
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.RemoteGrpc} returns this
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional float timeout = 4;
 * @return {number}
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.getTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.mission.RemoteGrpc} returns this
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.setTimeout = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * repeated string lease_resources = 5;
 * @return {!Array<string>}
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.getLeaseResourcesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.mission.RemoteGrpc} returns this
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.setLeaseResourcesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.mission.RemoteGrpc} returns this
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.addLeaseResources = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.mission.RemoteGrpc} returns this
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.clearLeaseResourcesList = function() {
  return this.setLeaseResourcesList([]);
};


/**
 * repeated KeyValue inputs = 6;
 * @return {!Array<!proto.bosdyn.api.mission.KeyValue>}
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.getInputsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.mission.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_mission_util_pb.KeyValue, 6));
};


/**
 * @param {!Array<!proto.bosdyn.api.mission.KeyValue>} value
 * @return {!proto.bosdyn.api.mission.RemoteGrpc} returns this
*/
proto.bosdyn.api.mission.RemoteGrpc.prototype.setInputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.bosdyn.api.mission.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.mission.KeyValue}
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.addInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.bosdyn.api.mission.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.mission.RemoteGrpc} returns this
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.clearInputsList = function() {
  return this.setInputsList([]);
};


/**
 * optional string group_name_format = 8;
 * @return {string}
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.getGroupNameFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.RemoteGrpc} returns this
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.setGroupNameFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bosdyn.api.DictParam params = 9;
 * @return {?proto.bosdyn.api.DictParam}
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.getParams = function() {
  return /** @type{?proto.bosdyn.api.DictParam} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_service_customization_pb.DictParam, 9));
};


/**
 * @param {?proto.bosdyn.api.DictParam|undefined} value
 * @return {!proto.bosdyn.api.mission.RemoteGrpc} returns this
*/
proto.bosdyn.api.mission.RemoteGrpc.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.RemoteGrpc} returns this
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.RemoteGrpc.prototype.hasParams = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.mission.Sleep.oneofGroups_ = [[1,5]];

/**
 * @enum {number}
 */
proto.bosdyn.api.mission.Sleep.DurationCase = {
  DURATION_NOT_SET: 0,
  SECONDS: 1,
  DURATION_NAME_IN_BLACKBOARD: 5
};

/**
 * @return {proto.bosdyn.api.mission.Sleep.DurationCase}
 */
proto.bosdyn.api.mission.Sleep.prototype.getDurationCase = function() {
  return /** @type {proto.bosdyn.api.mission.Sleep.DurationCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.mission.Sleep.oneofGroups_[0]));
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
proto.bosdyn.api.mission.Sleep.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.Sleep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.Sleep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Sleep.toObject = function(includeInstance, msg) {
  var f, obj = {
    seconds: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    durationNameInBlackboard: jspb.Message.getFieldWithDefault(msg, 5, ""),
    restartAfterStop: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.bosdyn.api.mission.Sleep}
 */
proto.bosdyn.api.mission.Sleep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.Sleep;
  return proto.bosdyn.api.mission.Sleep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.Sleep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.Sleep}
 */
proto.bosdyn.api.mission.Sleep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSeconds(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDurationNameInBlackboard(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRestartAfterStop(value);
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
proto.bosdyn.api.mission.Sleep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.Sleep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.Sleep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Sleep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRestartAfterStop();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional float seconds = 1;
 * @return {number}
 */
proto.bosdyn.api.mission.Sleep.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.mission.Sleep} returns this
 */
proto.bosdyn.api.mission.Sleep.prototype.setSeconds = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.bosdyn.api.mission.Sleep.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bosdyn.api.mission.Sleep} returns this
 */
proto.bosdyn.api.mission.Sleep.prototype.clearSeconds = function() {
  return jspb.Message.setOneofField(this, 1, proto.bosdyn.api.mission.Sleep.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Sleep.prototype.hasSeconds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string duration_name_in_blackboard = 5;
 * @return {string}
 */
proto.bosdyn.api.mission.Sleep.prototype.getDurationNameInBlackboard = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Sleep} returns this
 */
proto.bosdyn.api.mission.Sleep.prototype.setDurationNameInBlackboard = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.bosdyn.api.mission.Sleep.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bosdyn.api.mission.Sleep} returns this
 */
proto.bosdyn.api.mission.Sleep.prototype.clearDurationNameInBlackboard = function() {
  return jspb.Message.setOneofField(this, 5, proto.bosdyn.api.mission.Sleep.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Sleep.prototype.hasDurationNameInBlackboard = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool restart_after_stop = 2;
 * @return {boolean}
 */
proto.bosdyn.api.mission.Sleep.prototype.getRestartAfterStop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.mission.Sleep} returns this
 */
proto.bosdyn.api.mission.Sleep.prototype.setRestartAfterStop = function(value) {
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
proto.bosdyn.api.mission.ExecuteChoreography.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.ExecuteChoreography.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.ExecuteChoreography} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.ExecuteChoreography.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sequenceName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.bosdyn.api.mission.ExecuteChoreography}
 */
proto.bosdyn.api.mission.ExecuteChoreography.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.ExecuteChoreography;
  return proto.bosdyn.api.mission.ExecuteChoreography.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.ExecuteChoreography} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.ExecuteChoreography}
 */
proto.bosdyn.api.mission.ExecuteChoreography.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSequenceName(value);
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
proto.bosdyn.api.mission.ExecuteChoreography.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.ExecuteChoreography.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.ExecuteChoreography} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.ExecuteChoreography.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSequenceName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.ExecuteChoreography.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.ExecuteChoreography} returns this
 */
proto.bosdyn.api.mission.ExecuteChoreography.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.ExecuteChoreography.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.ExecuteChoreography} returns this
 */
proto.bosdyn.api.mission.ExecuteChoreography.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sequence_name = 3;
 * @return {string}
 */
proto.bosdyn.api.mission.ExecuteChoreography.prototype.getSequenceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.ExecuteChoreography} returns this
 */
proto.bosdyn.api.mission.ExecuteChoreography.prototype.setSequenceName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.mission.MissionUploadChoreography.repeatedFields_ = [3,4];



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
proto.bosdyn.api.mission.MissionUploadChoreography.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.MissionUploadChoreography.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.MissionUploadChoreography} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.MissionUploadChoreography.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    choreographySequencesList: jspb.Message.toObjectList(msg.getChoreographySequencesList(),
    bosdyn_api_spot_choreography_sequence_pb.ChoreographySequence.toObject, includeInstance),
    animatedMovesList: jspb.Message.toObjectList(msg.getAnimatedMovesList(),
    bosdyn_api_spot_choreography_sequence_pb.Animation.toObject, includeInstance)
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
 * @return {!proto.bosdyn.api.mission.MissionUploadChoreography}
 */
proto.bosdyn.api.mission.MissionUploadChoreography.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.MissionUploadChoreography;
  return proto.bosdyn.api.mission.MissionUploadChoreography.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.MissionUploadChoreography} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.MissionUploadChoreography}
 */
proto.bosdyn.api.mission.MissionUploadChoreography.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = new bosdyn_api_spot_choreography_sequence_pb.ChoreographySequence;
      reader.readMessage(value,bosdyn_api_spot_choreography_sequence_pb.ChoreographySequence.deserializeBinaryFromReader);
      msg.addChoreographySequences(value);
      break;
    case 4:
      var value = new bosdyn_api_spot_choreography_sequence_pb.Animation;
      reader.readMessage(value,bosdyn_api_spot_choreography_sequence_pb.Animation.deserializeBinaryFromReader);
      msg.addAnimatedMoves(value);
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
proto.bosdyn.api.mission.MissionUploadChoreography.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.MissionUploadChoreography.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.MissionUploadChoreography} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.MissionUploadChoreography.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChoreographySequencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      bosdyn_api_spot_choreography_sequence_pb.ChoreographySequence.serializeBinaryToWriter
    );
  }
  f = message.getAnimatedMovesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      bosdyn_api_spot_choreography_sequence_pb.Animation.serializeBinaryToWriter
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.MissionUploadChoreography.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.MissionUploadChoreography} returns this
 */
proto.bosdyn.api.mission.MissionUploadChoreography.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.MissionUploadChoreography.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.MissionUploadChoreography} returns this
 */
proto.bosdyn.api.mission.MissionUploadChoreography.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated bosdyn.api.spot.ChoreographySequence choreography_sequences = 3;
 * @return {!Array<!proto.bosdyn.api.spot.ChoreographySequence>}
 */
proto.bosdyn.api.mission.MissionUploadChoreography.prototype.getChoreographySequencesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.spot.ChoreographySequence>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_spot_choreography_sequence_pb.ChoreographySequence, 3));
};


/**
 * @param {!Array<!proto.bosdyn.api.spot.ChoreographySequence>} value
 * @return {!proto.bosdyn.api.mission.MissionUploadChoreography} returns this
*/
proto.bosdyn.api.mission.MissionUploadChoreography.prototype.setChoreographySequencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bosdyn.api.spot.ChoreographySequence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.ChoreographySequence}
 */
proto.bosdyn.api.mission.MissionUploadChoreography.prototype.addChoreographySequences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bosdyn.api.spot.ChoreographySequence, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.mission.MissionUploadChoreography} returns this
 */
proto.bosdyn.api.mission.MissionUploadChoreography.prototype.clearChoreographySequencesList = function() {
  return this.setChoreographySequencesList([]);
};


/**
 * repeated bosdyn.api.spot.Animation animated_moves = 4;
 * @return {!Array<!proto.bosdyn.api.spot.Animation>}
 */
proto.bosdyn.api.mission.MissionUploadChoreography.prototype.getAnimatedMovesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.spot.Animation>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_spot_choreography_sequence_pb.Animation, 4));
};


/**
 * @param {!Array<!proto.bosdyn.api.spot.Animation>} value
 * @return {!proto.bosdyn.api.mission.MissionUploadChoreography} returns this
*/
proto.bosdyn.api.mission.MissionUploadChoreography.prototype.setAnimatedMovesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bosdyn.api.spot.Animation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.Animation}
 */
proto.bosdyn.api.mission.MissionUploadChoreography.prototype.addAnimatedMoves = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bosdyn.api.spot.Animation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.mission.MissionUploadChoreography} returns this
 */
proto.bosdyn.api.mission.MissionUploadChoreography.prototype.clearAnimatedMovesList = function() {
  return this.setAnimatedMovesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.mission.Prompt.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.mission.Prompt.oneofGroups_ = [[9,11,10],[7,12]];

/**
 * @enum {number}
 */
proto.bosdyn.api.mission.Prompt.AnswerSpecCase = {
  ANSWER_SPEC_NOT_SET: 0,
  OPTIONS_LIST: 9,
  OPTIONS_LIST_IN_BLACKBOARD: 11,
  CUSTOM_PARAMS: 10
};

/**
 * @return {proto.bosdyn.api.mission.Prompt.AnswerSpecCase}
 */
proto.bosdyn.api.mission.Prompt.prototype.getAnswerSpecCase = function() {
  return /** @type {proto.bosdyn.api.mission.Prompt.AnswerSpecCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.mission.Prompt.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.bosdyn.api.mission.Prompt.SeveritySpecCase = {
  SEVERITY_SPEC_NOT_SET: 0,
  SEVERITY: 7,
  SEVERITY_IN_BLACKBOARD: 12
};

/**
 * @return {proto.bosdyn.api.mission.Prompt.SeveritySpecCase}
 */
proto.bosdyn.api.mission.Prompt.prototype.getSeveritySpecCase = function() {
  return /** @type {proto.bosdyn.api.mission.Prompt.SeveritySpecCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.mission.Prompt.oneofGroups_[1]));
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
proto.bosdyn.api.mission.Prompt.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.Prompt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.Prompt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Prompt.toObject = function(includeInstance, msg) {
  var f, obj = {
    alwaysReprompt: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    text: jspb.Message.getFieldWithDefault(msg, 2, ""),
    source: jspb.Message.getFieldWithDefault(msg, 3, ""),
    optionsList: jspb.Message.toObjectList(msg.getOptionsList(),
    proto.bosdyn.api.mission.Prompt.Option.toObject, includeInstance),
    optionsList: (f = msg.getOptionsList()) && proto.bosdyn.api.mission.Prompt.OptionsList.toObject(includeInstance, f),
    optionsListInBlackboard: jspb.Message.getFieldWithDefault(msg, 11, ""),
    customParams: (f = msg.getCustomParams()) && bosdyn_api_service_customization_pb.DictParam.Spec.toObject(includeInstance, f),
    child: (f = msg.getChild()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f),
    forAutonomousProcessing: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    severity: jspb.Message.getFieldWithDefault(msg, 7, 0),
    severityInBlackboard: jspb.Message.getFieldWithDefault(msg, 12, ""),
    questionNameInBlackboard: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.bosdyn.api.mission.Prompt}
 */
proto.bosdyn.api.mission.Prompt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.Prompt;
  return proto.bosdyn.api.mission.Prompt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.Prompt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.Prompt}
 */
proto.bosdyn.api.mission.Prompt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlwaysReprompt(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.mission.Prompt.Option;
      reader.readMessage(value,proto.bosdyn.api.mission.Prompt.Option.deserializeBinaryFromReader);
      msg.addOptions(value);
      break;
    case 9:
      var value = new proto.bosdyn.api.mission.Prompt.OptionsList;
      reader.readMessage(value,proto.bosdyn.api.mission.Prompt.OptionsList.deserializeBinaryFromReader);
      msg.setOptionsList(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setOptionsListInBlackboard(value);
      break;
    case 10:
      var value = new bosdyn_api_service_customization_pb.DictParam.Spec;
      reader.readMessage(value,bosdyn_api_service_customization_pb.DictParam.Spec.deserializeBinaryFromReader);
      msg.setCustomParams(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setChild(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForAutonomousProcessing(value);
      break;
    case 7:
      var value = /** @type {!proto.bosdyn.api.AlertData.SeverityLevel} */ (reader.readEnum());
      msg.setSeverity(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setSeverityInBlackboard(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestionNameInBlackboard(value);
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
proto.bosdyn.api.mission.Prompt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.Prompt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.Prompt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Prompt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlwaysReprompt();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.bosdyn.api.mission.Prompt.Option.serializeBinaryToWriter
    );
  }
  f = message.getOptionsList();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bosdyn.api.mission.Prompt.OptionsList.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCustomParams();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      bosdyn_api_service_customization_pb.DictParam.Spec.serializeBinaryToWriter
    );
  }
  f = message.getChild();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
  f = message.getForAutonomousProcessing();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {!proto.bosdyn.api.AlertData.SeverityLevel} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getQuestionNameInBlackboard();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
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
proto.bosdyn.api.mission.Prompt.Option.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.Prompt.Option.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.Prompt.Option} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Prompt.Option.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    answerCode: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.bosdyn.api.mission.Prompt.Option}
 */
proto.bosdyn.api.mission.Prompt.Option.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.Prompt.Option;
  return proto.bosdyn.api.mission.Prompt.Option.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.Prompt.Option} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.Prompt.Option}
 */
proto.bosdyn.api.mission.Prompt.Option.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAnswerCode(value);
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
proto.bosdyn.api.mission.Prompt.Option.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.Prompt.Option.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.Prompt.Option} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Prompt.Option.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAnswerCode();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.Prompt.Option.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Prompt.Option} returns this
 */
proto.bosdyn.api.mission.Prompt.Option.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 answer_code = 2;
 * @return {number}
 */
proto.bosdyn.api.mission.Prompt.Option.prototype.getAnswerCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.mission.Prompt.Option} returns this
 */
proto.bosdyn.api.mission.Prompt.Option.prototype.setAnswerCode = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.mission.Prompt.OptionsList.repeatedFields_ = [1];



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
proto.bosdyn.api.mission.Prompt.OptionsList.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.Prompt.OptionsList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.Prompt.OptionsList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Prompt.OptionsList.toObject = function(includeInstance, msg) {
  var f, obj = {
    optionsList: jspb.Message.toObjectList(msg.getOptionsList(),
    proto.bosdyn.api.mission.Prompt.Option.toObject, includeInstance)
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
 * @return {!proto.bosdyn.api.mission.Prompt.OptionsList}
 */
proto.bosdyn.api.mission.Prompt.OptionsList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.Prompt.OptionsList;
  return proto.bosdyn.api.mission.Prompt.OptionsList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.Prompt.OptionsList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.Prompt.OptionsList}
 */
proto.bosdyn.api.mission.Prompt.OptionsList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.mission.Prompt.Option;
      reader.readMessage(value,proto.bosdyn.api.mission.Prompt.Option.deserializeBinaryFromReader);
      msg.addOptions(value);
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
proto.bosdyn.api.mission.Prompt.OptionsList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.Prompt.OptionsList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.Prompt.OptionsList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Prompt.OptionsList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bosdyn.api.mission.Prompt.Option.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Option options = 1;
 * @return {!Array<!proto.bosdyn.api.mission.Prompt.Option>}
 */
proto.bosdyn.api.mission.Prompt.OptionsList.prototype.getOptionsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.mission.Prompt.Option>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.mission.Prompt.Option, 1));
};


/**
 * @param {!Array<!proto.bosdyn.api.mission.Prompt.Option>} value
 * @return {!proto.bosdyn.api.mission.Prompt.OptionsList} returns this
*/
proto.bosdyn.api.mission.Prompt.OptionsList.prototype.setOptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bosdyn.api.mission.Prompt.Option=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.mission.Prompt.Option}
 */
proto.bosdyn.api.mission.Prompt.OptionsList.prototype.addOptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bosdyn.api.mission.Prompt.Option, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.mission.Prompt.OptionsList} returns this
 */
proto.bosdyn.api.mission.Prompt.OptionsList.prototype.clearOptionsList = function() {
  return this.setOptionsList([]);
};


/**
 * optional bool always_reprompt = 1;
 * @return {boolean}
 */
proto.bosdyn.api.mission.Prompt.prototype.getAlwaysReprompt = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
 */
proto.bosdyn.api.mission.Prompt.prototype.setAlwaysReprompt = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.Prompt.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
 */
proto.bosdyn.api.mission.Prompt.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string source = 3;
 * @return {string}
 */
proto.bosdyn.api.mission.Prompt.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
 */
proto.bosdyn.api.mission.Prompt.prototype.setSource = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Option options = 4;
 * @return {!Array<!proto.bosdyn.api.mission.Prompt.Option>}
 */
proto.bosdyn.api.mission.Prompt.prototype.getOptionsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.mission.Prompt.Option>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.mission.Prompt.Option, 4));
};


/**
 * @param {!Array<!proto.bosdyn.api.mission.Prompt.Option>} value
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
*/
proto.bosdyn.api.mission.Prompt.prototype.setOptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bosdyn.api.mission.Prompt.Option=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.mission.Prompt.Option}
 */
proto.bosdyn.api.mission.Prompt.prototype.addOptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bosdyn.api.mission.Prompt.Option, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
 */
proto.bosdyn.api.mission.Prompt.prototype.clearOptionsList = function() {
  return this.setOptionsList([]);
};


/**
 * optional OptionsList options_list = 9;
 * @return {?proto.bosdyn.api.mission.Prompt.OptionsList}
 */
proto.bosdyn.api.mission.Prompt.prototype.getOptionsList = function() {
  return /** @type{?proto.bosdyn.api.mission.Prompt.OptionsList} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Prompt.OptionsList, 9));
};


/**
 * @param {?proto.bosdyn.api.mission.Prompt.OptionsList|undefined} value
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
*/
proto.bosdyn.api.mission.Prompt.prototype.setOptionsList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.bosdyn.api.mission.Prompt.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
 */
proto.bosdyn.api.mission.Prompt.prototype.clearOptionsList = function() {
  return this.setOptionsList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Prompt.prototype.hasOptionsList = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string options_list_in_blackboard = 11;
 * @return {string}
 */
proto.bosdyn.api.mission.Prompt.prototype.getOptionsListInBlackboard = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
 */
proto.bosdyn.api.mission.Prompt.prototype.setOptionsListInBlackboard = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.bosdyn.api.mission.Prompt.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
 */
proto.bosdyn.api.mission.Prompt.prototype.clearOptionsListInBlackboard = function() {
  return jspb.Message.setOneofField(this, 11, proto.bosdyn.api.mission.Prompt.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Prompt.prototype.hasOptionsListInBlackboard = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bosdyn.api.DictParam.Spec custom_params = 10;
 * @return {?proto.bosdyn.api.DictParam.Spec}
 */
proto.bosdyn.api.mission.Prompt.prototype.getCustomParams = function() {
  return /** @type{?proto.bosdyn.api.DictParam.Spec} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_service_customization_pb.DictParam.Spec, 10));
};


/**
 * @param {?proto.bosdyn.api.DictParam.Spec|undefined} value
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
*/
proto.bosdyn.api.mission.Prompt.prototype.setCustomParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.bosdyn.api.mission.Prompt.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
 */
proto.bosdyn.api.mission.Prompt.prototype.clearCustomParams = function() {
  return this.setCustomParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Prompt.prototype.hasCustomParams = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Node child = 5;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.Prompt.prototype.getChild = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Node, 5));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
*/
proto.bosdyn.api.mission.Prompt.prototype.setChild = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
 */
proto.bosdyn.api.mission.Prompt.prototype.clearChild = function() {
  return this.setChild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Prompt.prototype.hasChild = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool for_autonomous_processing = 6;
 * @return {boolean}
 */
proto.bosdyn.api.mission.Prompt.prototype.getForAutonomousProcessing = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
 */
proto.bosdyn.api.mission.Prompt.prototype.setForAutonomousProcessing = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bosdyn.api.AlertData.SeverityLevel severity = 7;
 * @return {!proto.bosdyn.api.AlertData.SeverityLevel}
 */
proto.bosdyn.api.mission.Prompt.prototype.getSeverity = function() {
  return /** @type {!proto.bosdyn.api.AlertData.SeverityLevel} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.bosdyn.api.AlertData.SeverityLevel} value
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
 */
proto.bosdyn.api.mission.Prompt.prototype.setSeverity = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.bosdyn.api.mission.Prompt.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
 */
proto.bosdyn.api.mission.Prompt.prototype.clearSeverity = function() {
  return jspb.Message.setOneofField(this, 7, proto.bosdyn.api.mission.Prompt.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Prompt.prototype.hasSeverity = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string severity_in_blackboard = 12;
 * @return {string}
 */
proto.bosdyn.api.mission.Prompt.prototype.getSeverityInBlackboard = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
 */
proto.bosdyn.api.mission.Prompt.prototype.setSeverityInBlackboard = function(value) {
  return jspb.Message.setOneofField(this, 12, proto.bosdyn.api.mission.Prompt.oneofGroups_[1], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
 */
proto.bosdyn.api.mission.Prompt.prototype.clearSeverityInBlackboard = function() {
  return jspb.Message.setOneofField(this, 12, proto.bosdyn.api.mission.Prompt.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Prompt.prototype.hasSeverityInBlackboard = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string question_name_in_blackboard = 8;
 * @return {string}
 */
proto.bosdyn.api.mission.Prompt.prototype.getQuestionNameInBlackboard = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Prompt} returns this
 */
proto.bosdyn.api.mission.Prompt.prototype.setQuestionNameInBlackboard = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
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
proto.bosdyn.api.mission.BosdynGripperCameraParamsState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.BosdynGripperCameraParamsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.BosdynGripperCameraParamsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynGripperCameraParamsState.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    child: (f = msg.getChild()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f),
    stateName: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.bosdyn.api.mission.BosdynGripperCameraParamsState}
 */
proto.bosdyn.api.mission.BosdynGripperCameraParamsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.BosdynGripperCameraParamsState;
  return proto.bosdyn.api.mission.BosdynGripperCameraParamsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.BosdynGripperCameraParamsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.BosdynGripperCameraParamsState}
 */
proto.bosdyn.api.mission.BosdynGripperCameraParamsState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setChild(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStateName(value);
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
proto.bosdyn.api.mission.BosdynGripperCameraParamsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.BosdynGripperCameraParamsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.BosdynGripperCameraParamsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynGripperCameraParamsState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChild();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
  f = message.getStateName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynGripperCameraParamsState.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynGripperCameraParamsState} returns this
 */
proto.bosdyn.api.mission.BosdynGripperCameraParamsState.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynGripperCameraParamsState.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynGripperCameraParamsState} returns this
 */
proto.bosdyn.api.mission.BosdynGripperCameraParamsState.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Node child = 3;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.BosdynGripperCameraParamsState.prototype.getChild = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Node, 3));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.mission.BosdynGripperCameraParamsState} returns this
*/
proto.bosdyn.api.mission.BosdynGripperCameraParamsState.prototype.setChild = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.BosdynGripperCameraParamsState} returns this
 */
proto.bosdyn.api.mission.BosdynGripperCameraParamsState.prototype.clearChild = function() {
  return this.setChild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynGripperCameraParamsState.prototype.hasChild = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string state_name = 4;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynGripperCameraParamsState.prototype.getStateName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynGripperCameraParamsState} returns this
 */
proto.bosdyn.api.mission.BosdynGripperCameraParamsState.prototype.setStateName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.mission.SetGripperCameraParams.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.bosdyn.api.mission.SetGripperCameraParams.ParamsCase = {
  PARAMS_NOT_SET: 0,
  PARAMS_IN_BLACKBOARD_KEY: 3,
  NEW_PARAMS: 4
};

/**
 * @return {proto.bosdyn.api.mission.SetGripperCameraParams.ParamsCase}
 */
proto.bosdyn.api.mission.SetGripperCameraParams.prototype.getParamsCase = function() {
  return /** @type {proto.bosdyn.api.mission.SetGripperCameraParams.ParamsCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.mission.SetGripperCameraParams.oneofGroups_[0]));
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
proto.bosdyn.api.mission.SetGripperCameraParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.SetGripperCameraParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.SetGripperCameraParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SetGripperCameraParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    paramsInBlackboardKey: jspb.Message.getFieldWithDefault(msg, 3, ""),
    newParams: (f = msg.getNewParams()) && bosdyn_api_gripper_camera_param_pb.GripperCameraParams.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.mission.SetGripperCameraParams}
 */
proto.bosdyn.api.mission.SetGripperCameraParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.SetGripperCameraParams;
  return proto.bosdyn.api.mission.SetGripperCameraParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.SetGripperCameraParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.SetGripperCameraParams}
 */
proto.bosdyn.api.mission.SetGripperCameraParams.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParamsInBlackboardKey(value);
      break;
    case 4:
      var value = new bosdyn_api_gripper_camera_param_pb.GripperCameraParams;
      reader.readMessage(value,bosdyn_api_gripper_camera_param_pb.GripperCameraParams.deserializeBinaryFromReader);
      msg.setNewParams(value);
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
proto.bosdyn.api.mission.SetGripperCameraParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.SetGripperCameraParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.SetGripperCameraParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SetGripperCameraParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
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
  f = message.getNewParams();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_gripper_camera_param_pb.GripperCameraParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.SetGripperCameraParams.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SetGripperCameraParams} returns this
 */
proto.bosdyn.api.mission.SetGripperCameraParams.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.SetGripperCameraParams.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SetGripperCameraParams} returns this
 */
proto.bosdyn.api.mission.SetGripperCameraParams.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string params_in_blackboard_key = 3;
 * @return {string}
 */
proto.bosdyn.api.mission.SetGripperCameraParams.prototype.getParamsInBlackboardKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SetGripperCameraParams} returns this
 */
proto.bosdyn.api.mission.SetGripperCameraParams.prototype.setParamsInBlackboardKey = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.bosdyn.api.mission.SetGripperCameraParams.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bosdyn.api.mission.SetGripperCameraParams} returns this
 */
proto.bosdyn.api.mission.SetGripperCameraParams.prototype.clearParamsInBlackboardKey = function() {
  return jspb.Message.setOneofField(this, 3, proto.bosdyn.api.mission.SetGripperCameraParams.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.SetGripperCameraParams.prototype.hasParamsInBlackboardKey = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bosdyn.api.GripperCameraParams new_params = 4;
 * @return {?proto.bosdyn.api.GripperCameraParams}
 */
proto.bosdyn.api.mission.SetGripperCameraParams.prototype.getNewParams = function() {
  return /** @type{?proto.bosdyn.api.GripperCameraParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_gripper_camera_param_pb.GripperCameraParams, 4));
};


/**
 * @param {?proto.bosdyn.api.GripperCameraParams|undefined} value
 * @return {!proto.bosdyn.api.mission.SetGripperCameraParams} returns this
*/
proto.bosdyn.api.mission.SetGripperCameraParams.prototype.setNewParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bosdyn.api.mission.SetGripperCameraParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.SetGripperCameraParams} returns this
 */
proto.bosdyn.api.mission.SetGripperCameraParams.prototype.clearNewParams = function() {
  return this.setNewParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.SetGripperCameraParams.prototype.hasNewParams = function() {
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
proto.bosdyn.api.mission.SetGraspOverride.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.SetGraspOverride.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.SetGraspOverride} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SetGraspOverride.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    graspOverrideRequest: (f = msg.getGraspOverrideRequest()) && bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.mission.SetGraspOverride}
 */
proto.bosdyn.api.mission.SetGraspOverride.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.SetGraspOverride;
  return proto.bosdyn.api.mission.SetGraspOverride.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.SetGraspOverride} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.SetGraspOverride}
 */
proto.bosdyn.api.mission.SetGraspOverride.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = new bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest;
      reader.readMessage(value,bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest.deserializeBinaryFromReader);
      msg.setGraspOverrideRequest(value);
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
proto.bosdyn.api.mission.SetGraspOverride.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.SetGraspOverride.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.SetGraspOverride} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SetGraspOverride.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGraspOverrideRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.SetGraspOverride.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SetGraspOverride} returns this
 */
proto.bosdyn.api.mission.SetGraspOverride.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.SetGraspOverride.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SetGraspOverride} returns this
 */
proto.bosdyn.api.mission.SetGraspOverride.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bosdyn.api.ApiGraspOverrideRequest grasp_override_request = 3;
 * @return {?proto.bosdyn.api.ApiGraspOverrideRequest}
 */
proto.bosdyn.api.mission.SetGraspOverride.prototype.getGraspOverrideRequest = function() {
  return /** @type{?proto.bosdyn.api.ApiGraspOverrideRequest} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_manipulation_api_pb.ApiGraspOverrideRequest, 3));
};


/**
 * @param {?proto.bosdyn.api.ApiGraspOverrideRequest|undefined} value
 * @return {!proto.bosdyn.api.mission.SetGraspOverride} returns this
*/
proto.bosdyn.api.mission.SetGraspOverride.prototype.setGraspOverrideRequest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.SetGraspOverride} returns this
 */
proto.bosdyn.api.mission.SetGraspOverride.prototype.clearGraspOverrideRequest = function() {
  return this.setGraspOverrideRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.SetGraspOverride.prototype.hasGraspOverrideRequest = function() {
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
proto.bosdyn.api.mission.SpotCamPtz.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.SpotCamPtz.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.SpotCamPtz} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SpotCamPtz.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ptzPosition: (f = msg.getPtzPosition()) && bosdyn_api_spot_cam_ptz_pb.PtzPosition.toObject(includeInstance, f),
    adjustParameters: (f = msg.getAdjustParameters()) && proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.mission.SpotCamPtz}
 */
proto.bosdyn.api.mission.SpotCamPtz.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.SpotCamPtz;
  return proto.bosdyn.api.mission.SpotCamPtz.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.SpotCamPtz} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.SpotCamPtz}
 */
proto.bosdyn.api.mission.SpotCamPtz.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = new bosdyn_api_spot_cam_ptz_pb.PtzPosition;
      reader.readMessage(value,bosdyn_api_spot_cam_ptz_pb.PtzPosition.deserializeBinaryFromReader);
      msg.setPtzPosition(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters;
      reader.readMessage(value,proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.deserializeBinaryFromReader);
      msg.setAdjustParameters(value);
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
proto.bosdyn.api.mission.SpotCamPtz.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.SpotCamPtz.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.SpotCamPtz} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SpotCamPtz.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPtzPosition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_spot_cam_ptz_pb.PtzPosition.serializeBinaryToWriter
    );
  }
  f = message.getAdjustParameters();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.serializeBinaryToWriter
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
proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    localizationVarname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    waypointId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    waypointTformBody: (f = msg.getWaypointTformBody()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters}
 */
proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters;
  return proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters}
 */
proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalizationVarname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWaypointId(value);
      break;
    case 6:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setWaypointTformBody(value);
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
proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocalizationVarname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWaypointId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getWaypointTformBody();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
};


/**
 * optional string localization_varname = 4;
 * @return {string}
 */
proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.prototype.getLocalizationVarname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters} returns this
 */
proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.prototype.setLocalizationVarname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string waypoint_id = 5;
 * @return {string}
 */
proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.prototype.getWaypointId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters} returns this
 */
proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.prototype.setWaypointId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bosdyn.api.SE3Pose waypoint_tform_body = 6;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.prototype.getWaypointTformBody = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 6));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters} returns this
*/
proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.prototype.setWaypointTformBody = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters} returns this
 */
proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.prototype.clearWaypointTformBody = function() {
  return this.setWaypointTformBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters.prototype.hasWaypointTformBody = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.SpotCamPtz.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SpotCamPtz} returns this
 */
proto.bosdyn.api.mission.SpotCamPtz.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.SpotCamPtz.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SpotCamPtz} returns this
 */
proto.bosdyn.api.mission.SpotCamPtz.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bosdyn.api.spot_cam.PtzPosition ptz_position = 3;
 * @return {?proto.bosdyn.api.spot_cam.PtzPosition}
 */
proto.bosdyn.api.mission.SpotCamPtz.prototype.getPtzPosition = function() {
  return /** @type{?proto.bosdyn.api.spot_cam.PtzPosition} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_cam_ptz_pb.PtzPosition, 3));
};


/**
 * @param {?proto.bosdyn.api.spot_cam.PtzPosition|undefined} value
 * @return {!proto.bosdyn.api.mission.SpotCamPtz} returns this
*/
proto.bosdyn.api.mission.SpotCamPtz.prototype.setPtzPosition = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.SpotCamPtz} returns this
 */
proto.bosdyn.api.mission.SpotCamPtz.prototype.clearPtzPosition = function() {
  return this.setPtzPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.SpotCamPtz.prototype.hasPtzPosition = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AdjustParameters adjust_parameters = 4;
 * @return {?proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters}
 */
proto.bosdyn.api.mission.SpotCamPtz.prototype.getAdjustParameters = function() {
  return /** @type{?proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters, 4));
};


/**
 * @param {?proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters|undefined} value
 * @return {!proto.bosdyn.api.mission.SpotCamPtz} returns this
*/
proto.bosdyn.api.mission.SpotCamPtz.prototype.setAdjustParameters = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.SpotCamPtz} returns this
 */
proto.bosdyn.api.mission.SpotCamPtz.prototype.clearAdjustParameters = function() {
  return this.setAdjustParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.SpotCamPtz.prototype.hasAdjustParameters = function() {
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
proto.bosdyn.api.mission.SpotCamNamedPosition.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.SpotCamNamedPosition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.SpotCamNamedPosition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SpotCamNamedPosition.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ptzName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    namedPosition: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.bosdyn.api.mission.SpotCamNamedPosition}
 */
proto.bosdyn.api.mission.SpotCamNamedPosition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.SpotCamNamedPosition;
  return proto.bosdyn.api.mission.SpotCamNamedPosition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.SpotCamNamedPosition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.SpotCamNamedPosition}
 */
proto.bosdyn.api.mission.SpotCamNamedPosition.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPtzName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNamedPosition(value);
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
proto.bosdyn.api.mission.SpotCamNamedPosition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.SpotCamNamedPosition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.SpotCamNamedPosition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SpotCamNamedPosition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPtzName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNamedPosition();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.SpotCamNamedPosition.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SpotCamNamedPosition} returns this
 */
proto.bosdyn.api.mission.SpotCamNamedPosition.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.SpotCamNamedPosition.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SpotCamNamedPosition} returns this
 */
proto.bosdyn.api.mission.SpotCamNamedPosition.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ptz_name = 3;
 * @return {string}
 */
proto.bosdyn.api.mission.SpotCamNamedPosition.prototype.getPtzName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SpotCamNamedPosition} returns this
 */
proto.bosdyn.api.mission.SpotCamNamedPosition.prototype.setPtzName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string named_position = 4;
 * @return {string}
 */
proto.bosdyn.api.mission.SpotCamNamedPosition.prototype.getNamedPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SpotCamNamedPosition} returns this
 */
proto.bosdyn.api.mission.SpotCamNamedPosition.prototype.setNamedPosition = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.bosdyn.api.mission.SpotCamStoreMedia.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.SpotCamStoreMedia.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.SpotCamStoreMedia} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SpotCamStoreMedia.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    camera: (f = msg.getCamera()) && bosdyn_api_spot_cam_camera_pb.Camera.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    tag: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.bosdyn.api.mission.SpotCamStoreMedia}
 */
proto.bosdyn.api.mission.SpotCamStoreMedia.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.SpotCamStoreMedia;
  return proto.bosdyn.api.mission.SpotCamStoreMedia.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.SpotCamStoreMedia} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.SpotCamStoreMedia}
 */
proto.bosdyn.api.mission.SpotCamStoreMedia.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = new bosdyn_api_spot_cam_camera_pb.Camera;
      reader.readMessage(value,bosdyn_api_spot_cam_camera_pb.Camera.deserializeBinaryFromReader);
      msg.setCamera(value);
      break;
    case 4:
      var value = /** @type {!proto.bosdyn.api.spot_cam.Logpoint.RecordType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
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
proto.bosdyn.api.mission.SpotCamStoreMedia.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.SpotCamStoreMedia.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.SpotCamStoreMedia} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SpotCamStoreMedia.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCamera();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_spot_cam_camera_pb.Camera.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.SpotCamStoreMedia.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SpotCamStoreMedia} returns this
 */
proto.bosdyn.api.mission.SpotCamStoreMedia.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.SpotCamStoreMedia.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SpotCamStoreMedia} returns this
 */
proto.bosdyn.api.mission.SpotCamStoreMedia.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bosdyn.api.spot_cam.Camera camera = 3;
 * @return {?proto.bosdyn.api.spot_cam.Camera}
 */
proto.bosdyn.api.mission.SpotCamStoreMedia.prototype.getCamera = function() {
  return /** @type{?proto.bosdyn.api.spot_cam.Camera} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_cam_camera_pb.Camera, 3));
};


/**
 * @param {?proto.bosdyn.api.spot_cam.Camera|undefined} value
 * @return {!proto.bosdyn.api.mission.SpotCamStoreMedia} returns this
*/
proto.bosdyn.api.mission.SpotCamStoreMedia.prototype.setCamera = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.SpotCamStoreMedia} returns this
 */
proto.bosdyn.api.mission.SpotCamStoreMedia.prototype.clearCamera = function() {
  return this.setCamera(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.SpotCamStoreMedia.prototype.hasCamera = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bosdyn.api.spot_cam.Logpoint.RecordType type = 4;
 * @return {!proto.bosdyn.api.spot_cam.Logpoint.RecordType}
 */
proto.bosdyn.api.mission.SpotCamStoreMedia.prototype.getType = function() {
  return /** @type {!proto.bosdyn.api.spot_cam.Logpoint.RecordType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bosdyn.api.spot_cam.Logpoint.RecordType} value
 * @return {!proto.bosdyn.api.mission.SpotCamStoreMedia} returns this
 */
proto.bosdyn.api.mission.SpotCamStoreMedia.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string tag = 5;
 * @return {string}
 */
proto.bosdyn.api.mission.SpotCamStoreMedia.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SpotCamStoreMedia} returns this
 */
proto.bosdyn.api.mission.SpotCamStoreMedia.prototype.setTag = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.bosdyn.api.mission.SpotCamLed.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.SpotCamLed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.SpotCamLed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SpotCamLed.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.bosdyn.api.mission.SpotCamLed}
 */
proto.bosdyn.api.mission.SpotCamLed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.SpotCamLed;
  return proto.bosdyn.api.mission.SpotCamLed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.SpotCamLed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.SpotCamLed}
 */
proto.bosdyn.api.mission.SpotCamLed.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
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
proto.bosdyn.api.mission.SpotCamLed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.SpotCamLed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.SpotCamLed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SpotCamLed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBrightnessesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeFloat);
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.SpotCamLed.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SpotCamLed} returns this
 */
proto.bosdyn.api.mission.SpotCamLed.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.SpotCamLed.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SpotCamLed} returns this
 */
proto.bosdyn.api.mission.SpotCamLed.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<int32, float> brightnesses = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.bosdyn.api.mission.SpotCamLed.prototype.getBrightnessesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bosdyn.api.mission.SpotCamLed} returns this
 */
proto.bosdyn.api.mission.SpotCamLed.prototype.clearBrightnessesMap = function() {
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
proto.bosdyn.api.mission.SpotCamFocusState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.SpotCamFocusState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.SpotCamFocusState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SpotCamFocusState.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    focusState: (f = msg.getFocusState()) && bosdyn_api_spot_cam_ptz_pb.PtzFocusState.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.mission.SpotCamFocusState}
 */
proto.bosdyn.api.mission.SpotCamFocusState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.SpotCamFocusState;
  return proto.bosdyn.api.mission.SpotCamFocusState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.SpotCamFocusState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.SpotCamFocusState}
 */
proto.bosdyn.api.mission.SpotCamFocusState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = new bosdyn_api_spot_cam_ptz_pb.PtzFocusState;
      reader.readMessage(value,bosdyn_api_spot_cam_ptz_pb.PtzFocusState.deserializeBinaryFromReader);
      msg.setFocusState(value);
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
proto.bosdyn.api.mission.SpotCamFocusState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.SpotCamFocusState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.SpotCamFocusState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SpotCamFocusState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFocusState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_spot_cam_ptz_pb.PtzFocusState.serializeBinaryToWriter
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.SpotCamFocusState.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SpotCamFocusState} returns this
 */
proto.bosdyn.api.mission.SpotCamFocusState.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.SpotCamFocusState.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SpotCamFocusState} returns this
 */
proto.bosdyn.api.mission.SpotCamFocusState.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bosdyn.api.spot_cam.PtzFocusState focus_state = 3;
 * @return {?proto.bosdyn.api.spot_cam.PtzFocusState}
 */
proto.bosdyn.api.mission.SpotCamFocusState.prototype.getFocusState = function() {
  return /** @type{?proto.bosdyn.api.spot_cam.PtzFocusState} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_cam_ptz_pb.PtzFocusState, 3));
};


/**
 * @param {?proto.bosdyn.api.spot_cam.PtzFocusState|undefined} value
 * @return {!proto.bosdyn.api.mission.SpotCamFocusState} returns this
*/
proto.bosdyn.api.mission.SpotCamFocusState.prototype.setFocusState = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.SpotCamFocusState} returns this
 */
proto.bosdyn.api.mission.SpotCamFocusState.prototype.clearFocusState = function() {
  return this.setFocusState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.SpotCamFocusState.prototype.hasFocusState = function() {
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
proto.bosdyn.api.mission.SpotCamResetAutofocus.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.SpotCamResetAutofocus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.SpotCamResetAutofocus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SpotCamResetAutofocus.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.bosdyn.api.mission.SpotCamResetAutofocus}
 */
proto.bosdyn.api.mission.SpotCamResetAutofocus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.SpotCamResetAutofocus;
  return proto.bosdyn.api.mission.SpotCamResetAutofocus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.SpotCamResetAutofocus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.SpotCamResetAutofocus}
 */
proto.bosdyn.api.mission.SpotCamResetAutofocus.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
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
proto.bosdyn.api.mission.SpotCamResetAutofocus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.SpotCamResetAutofocus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.SpotCamResetAutofocus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SpotCamResetAutofocus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.SpotCamResetAutofocus.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SpotCamResetAutofocus} returns this
 */
proto.bosdyn.api.mission.SpotCamResetAutofocus.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.SpotCamResetAutofocus.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.SpotCamResetAutofocus} returns this
 */
proto.bosdyn.api.mission.SpotCamResetAutofocus.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.mission.Dock.oneofGroups_ = [[3,11]];

/**
 * @enum {number}
 */
proto.bosdyn.api.mission.Dock.IdCase = {
  ID_NOT_SET: 0,
  DOCKING_STATION_ID: 3,
  DOCKING_STATION_ID_BLACKBOARD_KEY: 11
};

/**
 * @return {proto.bosdyn.api.mission.Dock.IdCase}
 */
proto.bosdyn.api.mission.Dock.prototype.getIdCase = function() {
  return /** @type {proto.bosdyn.api.mission.Dock.IdCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.mission.Dock.oneofGroups_[0]));
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
proto.bosdyn.api.mission.Dock.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.Dock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.Dock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Dock.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dockingStationId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dockingStationIdBlackboardKey: jspb.Message.getFieldWithDefault(msg, 11, ""),
    child: (f = msg.getChild()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f),
    commandStatusName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    feedbackStatusName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    prepPoseBehavior: jspb.Message.getFieldWithDefault(msg, 7, 0),
    dockingCommandFeedbackResponseBlackboardKey: jspb.Message.getFieldWithDefault(msg, 8, ""),
    dockingCommandResponseBlackboardKey: jspb.Message.getFieldWithDefault(msg, 9, ""),
    requireFiducial: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
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
 * @return {!proto.bosdyn.api.mission.Dock}
 */
proto.bosdyn.api.mission.Dock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.Dock;
  return proto.bosdyn.api.mission.Dock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.Dock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.Dock}
 */
proto.bosdyn.api.mission.Dock.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDockingStationId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDockingStationIdBlackboardKey(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setChild(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommandStatusName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeedbackStatusName(value);
      break;
    case 7:
      var value = /** @type {!proto.bosdyn.api.docking.PrepPoseBehavior} */ (reader.readEnum());
      msg.setPrepPoseBehavior(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDockingCommandFeedbackResponseBlackboardKey(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDockingCommandResponseBlackboardKey(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequireFiducial(value);
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
proto.bosdyn.api.mission.Dock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.Dock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.Dock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.Dock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getChild();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
  f = message.getCommandStatusName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFeedbackStatusName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPrepPoseBehavior();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getDockingCommandFeedbackResponseBlackboardKey();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDockingCommandResponseBlackboardKey();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRequireFiducial();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.Dock.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Dock} returns this
 */
proto.bosdyn.api.mission.Dock.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.Dock.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Dock} returns this
 */
proto.bosdyn.api.mission.Dock.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 docking_station_id = 3;
 * @return {number}
 */
proto.bosdyn.api.mission.Dock.prototype.getDockingStationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.mission.Dock} returns this
 */
proto.bosdyn.api.mission.Dock.prototype.setDockingStationId = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.bosdyn.api.mission.Dock.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bosdyn.api.mission.Dock} returns this
 */
proto.bosdyn.api.mission.Dock.prototype.clearDockingStationId = function() {
  return jspb.Message.setOneofField(this, 3, proto.bosdyn.api.mission.Dock.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Dock.prototype.hasDockingStationId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string docking_station_id_blackboard_key = 11;
 * @return {string}
 */
proto.bosdyn.api.mission.Dock.prototype.getDockingStationIdBlackboardKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Dock} returns this
 */
proto.bosdyn.api.mission.Dock.prototype.setDockingStationIdBlackboardKey = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.bosdyn.api.mission.Dock.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bosdyn.api.mission.Dock} returns this
 */
proto.bosdyn.api.mission.Dock.prototype.clearDockingStationIdBlackboardKey = function() {
  return jspb.Message.setOneofField(this, 11, proto.bosdyn.api.mission.Dock.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Dock.prototype.hasDockingStationIdBlackboardKey = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Node child = 4;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.Dock.prototype.getChild = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Node, 4));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.mission.Dock} returns this
*/
proto.bosdyn.api.mission.Dock.prototype.setChild = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.Dock} returns this
 */
proto.bosdyn.api.mission.Dock.prototype.clearChild = function() {
  return this.setChild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.Dock.prototype.hasChild = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string command_status_name = 5;
 * @return {string}
 */
proto.bosdyn.api.mission.Dock.prototype.getCommandStatusName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Dock} returns this
 */
proto.bosdyn.api.mission.Dock.prototype.setCommandStatusName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string feedback_status_name = 6;
 * @return {string}
 */
proto.bosdyn.api.mission.Dock.prototype.getFeedbackStatusName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Dock} returns this
 */
proto.bosdyn.api.mission.Dock.prototype.setFeedbackStatusName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bosdyn.api.docking.PrepPoseBehavior prep_pose_behavior = 7;
 * @return {!proto.bosdyn.api.docking.PrepPoseBehavior}
 */
proto.bosdyn.api.mission.Dock.prototype.getPrepPoseBehavior = function() {
  return /** @type {!proto.bosdyn.api.docking.PrepPoseBehavior} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.bosdyn.api.docking.PrepPoseBehavior} value
 * @return {!proto.bosdyn.api.mission.Dock} returns this
 */
proto.bosdyn.api.mission.Dock.prototype.setPrepPoseBehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string docking_command_feedback_response_blackboard_key = 8;
 * @return {string}
 */
proto.bosdyn.api.mission.Dock.prototype.getDockingCommandFeedbackResponseBlackboardKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Dock} returns this
 */
proto.bosdyn.api.mission.Dock.prototype.setDockingCommandFeedbackResponseBlackboardKey = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string docking_command_response_blackboard_key = 9;
 * @return {string}
 */
proto.bosdyn.api.mission.Dock.prototype.getDockingCommandResponseBlackboardKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.Dock} returns this
 */
proto.bosdyn.api.mission.Dock.prototype.setDockingCommandResponseBlackboardKey = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool require_fiducial = 10;
 * @return {boolean}
 */
proto.bosdyn.api.mission.Dock.prototype.getRequireFiducial = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.mission.Dock} returns this
 */
proto.bosdyn.api.mission.Dock.prototype.setRequireFiducial = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.mission.StoreMetadata.oneofGroups_ = [[5,7]];

/**
 * @enum {number}
 */
proto.bosdyn.api.mission.StoreMetadata.DataCase = {
  DATA_NOT_SET: 0,
  METADATA_NAME: 5,
  METADATA_JSON: 7
};

/**
 * @return {proto.bosdyn.api.mission.StoreMetadata.DataCase}
 */
proto.bosdyn.api.mission.StoreMetadata.prototype.getDataCase = function() {
  return /** @type {proto.bosdyn.api.mission.StoreMetadata.DataCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.mission.StoreMetadata.oneofGroups_[0]));
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
proto.bosdyn.api.mission.StoreMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.StoreMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.StoreMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.StoreMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    acquireDataRequestName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadataName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    metadataJson: (f = msg.getMetadataJson()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    metadataChannel: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.bosdyn.api.mission.StoreMetadata}
 */
proto.bosdyn.api.mission.StoreMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.StoreMetadata;
  return proto.bosdyn.api.mission.StoreMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.StoreMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.StoreMetadata}
 */
proto.bosdyn.api.mission.StoreMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAcquireDataRequestName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetadataName(value);
      break;
    case 7:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadataJson(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetadataChannel(value);
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
proto.bosdyn.api.mission.StoreMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.StoreMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.StoreMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.StoreMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAcquireDataRequestName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMetadataJson();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getMetadataChannel();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.StoreMetadata.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.StoreMetadata} returns this
 */
proto.bosdyn.api.mission.StoreMetadata.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.StoreMetadata.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.StoreMetadata} returns this
 */
proto.bosdyn.api.mission.StoreMetadata.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string acquire_data_request_name = 3;
 * @return {string}
 */
proto.bosdyn.api.mission.StoreMetadata.prototype.getAcquireDataRequestName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.StoreMetadata} returns this
 */
proto.bosdyn.api.mission.StoreMetadata.prototype.setAcquireDataRequestName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string metadata_name = 5;
 * @return {string}
 */
proto.bosdyn.api.mission.StoreMetadata.prototype.getMetadataName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.StoreMetadata} returns this
 */
proto.bosdyn.api.mission.StoreMetadata.prototype.setMetadataName = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.bosdyn.api.mission.StoreMetadata.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bosdyn.api.mission.StoreMetadata} returns this
 */
proto.bosdyn.api.mission.StoreMetadata.prototype.clearMetadataName = function() {
  return jspb.Message.setOneofField(this, 5, proto.bosdyn.api.mission.StoreMetadata.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.StoreMetadata.prototype.hasMetadataName = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Struct metadata_json = 7;
 * @return {?proto.google.protobuf.Struct}
 */
proto.bosdyn.api.mission.StoreMetadata.prototype.getMetadataJson = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 7));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.bosdyn.api.mission.StoreMetadata} returns this
*/
proto.bosdyn.api.mission.StoreMetadata.prototype.setMetadataJson = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.bosdyn.api.mission.StoreMetadata.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.StoreMetadata} returns this
 */
proto.bosdyn.api.mission.StoreMetadata.prototype.clearMetadataJson = function() {
  return this.setMetadataJson(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.StoreMetadata.prototype.hasMetadataJson = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string metadata_channel = 6;
 * @return {string}
 */
proto.bosdyn.api.mission.StoreMetadata.prototype.getMetadataChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.StoreMetadata} returns this
 */
proto.bosdyn.api.mission.StoreMetadata.prototype.setMetadataChannel = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.bosdyn.api.mission.DataAcquisition.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.DataAcquisition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.DataAcquisition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.DataAcquisition.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    request: (f = msg.getRequest()) && bosdyn_api_data_acquisition_pb.AcquireDataRequest.toObject(includeInstance, f),
    completionBehavior: jspb.Message.getFieldWithDefault(msg, 4, 0),
    groupNameFormat: jspb.Message.getFieldWithDefault(msg, 5, ""),
    requestNameInBlackboard: jspb.Message.getFieldWithDefault(msg, 6, ""),
    metadataNameInBlackboard: jspb.Message.getFieldWithDefault(msg, 9, ""),
    actionNameFormat: jspb.Message.getFieldWithDefault(msg, 7, ""),
    disableCancelOnPauseOrStop: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    formatMetadata: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
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
 * @return {!proto.bosdyn.api.mission.DataAcquisition}
 */
proto.bosdyn.api.mission.DataAcquisition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.DataAcquisition;
  return proto.bosdyn.api.mission.DataAcquisition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.DataAcquisition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.DataAcquisition}
 */
proto.bosdyn.api.mission.DataAcquisition.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = new bosdyn_api_data_acquisition_pb.AcquireDataRequest;
      reader.readMessage(value,bosdyn_api_data_acquisition_pb.AcquireDataRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 4:
      var value = /** @type {!proto.bosdyn.api.mission.DataAcquisition.CompletionBehavior} */ (reader.readEnum());
      msg.setCompletionBehavior(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupNameFormat(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestNameInBlackboard(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetadataNameInBlackboard(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionNameFormat(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableCancelOnPauseOrStop(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFormatMetadata(value);
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
proto.bosdyn.api.mission.DataAcquisition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.DataAcquisition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.DataAcquisition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.DataAcquisition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_data_acquisition_pb.AcquireDataRequest.serializeBinaryToWriter
    );
  }
  f = message.getCompletionBehavior();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getGroupNameFormat();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRequestNameInBlackboard();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMetadataNameInBlackboard();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getActionNameFormat();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDisableCancelOnPauseOrStop();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getFormatMetadata();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.mission.DataAcquisition.CompletionBehavior = {
  COMPLETE_UNKNOWN: 0,
  COMPLETE_AFTER_SAVED: 1,
  COMPLETE_AFTER_ACQUIRED: 2
};

/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.DataAcquisition} returns this
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.DataAcquisition} returns this
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bosdyn.api.AcquireDataRequest request = 3;
 * @return {?proto.bosdyn.api.AcquireDataRequest}
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.getRequest = function() {
  return /** @type{?proto.bosdyn.api.AcquireDataRequest} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_acquisition_pb.AcquireDataRequest, 3));
};


/**
 * @param {?proto.bosdyn.api.AcquireDataRequest|undefined} value
 * @return {!proto.bosdyn.api.mission.DataAcquisition} returns this
*/
proto.bosdyn.api.mission.DataAcquisition.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.DataAcquisition} returns this
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CompletionBehavior completion_behavior = 4;
 * @return {!proto.bosdyn.api.mission.DataAcquisition.CompletionBehavior}
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.getCompletionBehavior = function() {
  return /** @type {!proto.bosdyn.api.mission.DataAcquisition.CompletionBehavior} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bosdyn.api.mission.DataAcquisition.CompletionBehavior} value
 * @return {!proto.bosdyn.api.mission.DataAcquisition} returns this
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.setCompletionBehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string group_name_format = 5;
 * @return {string}
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.getGroupNameFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.DataAcquisition} returns this
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.setGroupNameFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string request_name_in_blackboard = 6;
 * @return {string}
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.getRequestNameInBlackboard = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.DataAcquisition} returns this
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.setRequestNameInBlackboard = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string metadata_name_in_blackboard = 9;
 * @return {string}
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.getMetadataNameInBlackboard = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.DataAcquisition} returns this
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.setMetadataNameInBlackboard = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string action_name_format = 7;
 * @return {string}
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.getActionNameFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.DataAcquisition} returns this
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.setActionNameFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool disable_cancel_on_pause_or_stop = 8;
 * @return {boolean}
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.getDisableCancelOnPauseOrStop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.mission.DataAcquisition} returns this
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.setDisableCancelOnPauseOrStop = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool format_metadata = 10;
 * @return {boolean}
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.getFormatMetadata = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.mission.DataAcquisition} returns this
 */
proto.bosdyn.api.mission.DataAcquisition.prototype.setFormatMetadata = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
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
proto.bosdyn.api.mission.RetainLease.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.RetainLease.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.RetainLease} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.RetainLease.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.bosdyn.api.mission.RetainLease}
 */
proto.bosdyn.api.mission.RetainLease.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.RetainLease;
  return proto.bosdyn.api.mission.RetainLease.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.RetainLease} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.RetainLease}
 */
proto.bosdyn.api.mission.RetainLease.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
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
proto.bosdyn.api.mission.RetainLease.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.RetainLease.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.RetainLease} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.RetainLease.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.RetainLease.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.RetainLease} returns this
 */
proto.bosdyn.api.mission.RetainLease.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.RetainLease.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.RetainLease} returns this
 */
proto.bosdyn.api.mission.RetainLease.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.mission.DefineBlackboard.repeatedFields_ = [1];



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
proto.bosdyn.api.mission.DefineBlackboard.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.DefineBlackboard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.DefineBlackboard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.DefineBlackboard.toObject = function(includeInstance, msg) {
  var f, obj = {
    blackboardVariablesList: jspb.Message.toObjectList(msg.getBlackboardVariablesList(),
    bosdyn_api_mission_util_pb.KeyValue.toObject, includeInstance),
    child: (f = msg.getChild()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.mission.DefineBlackboard}
 */
proto.bosdyn.api.mission.DefineBlackboard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.DefineBlackboard;
  return proto.bosdyn.api.mission.DefineBlackboard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.DefineBlackboard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.DefineBlackboard}
 */
proto.bosdyn.api.mission.DefineBlackboard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_mission_util_pb.KeyValue;
      reader.readMessage(value,bosdyn_api_mission_util_pb.KeyValue.deserializeBinaryFromReader);
      msg.addBlackboardVariables(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setChild(value);
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
proto.bosdyn.api.mission.DefineBlackboard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.DefineBlackboard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.DefineBlackboard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.DefineBlackboard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlackboardVariablesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      bosdyn_api_mission_util_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getChild();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
};


/**
 * repeated KeyValue blackboard_variables = 1;
 * @return {!Array<!proto.bosdyn.api.mission.KeyValue>}
 */
proto.bosdyn.api.mission.DefineBlackboard.prototype.getBlackboardVariablesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.mission.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_mission_util_pb.KeyValue, 1));
};


/**
 * @param {!Array<!proto.bosdyn.api.mission.KeyValue>} value
 * @return {!proto.bosdyn.api.mission.DefineBlackboard} returns this
*/
proto.bosdyn.api.mission.DefineBlackboard.prototype.setBlackboardVariablesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bosdyn.api.mission.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.mission.KeyValue}
 */
proto.bosdyn.api.mission.DefineBlackboard.prototype.addBlackboardVariables = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bosdyn.api.mission.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.mission.DefineBlackboard} returns this
 */
proto.bosdyn.api.mission.DefineBlackboard.prototype.clearBlackboardVariablesList = function() {
  return this.setBlackboardVariablesList([]);
};


/**
 * optional Node child = 2;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.DefineBlackboard.prototype.getChild = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Node, 2));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.mission.DefineBlackboard} returns this
*/
proto.bosdyn.api.mission.DefineBlackboard.prototype.setChild = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.DefineBlackboard} returns this
 */
proto.bosdyn.api.mission.DefineBlackboard.prototype.clearChild = function() {
  return this.setChild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.DefineBlackboard.prototype.hasChild = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.mission.SetBlackboard.repeatedFields_ = [1];



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
proto.bosdyn.api.mission.SetBlackboard.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.SetBlackboard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.SetBlackboard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SetBlackboard.toObject = function(includeInstance, msg) {
  var f, obj = {
    blackboardVariablesList: jspb.Message.toObjectList(msg.getBlackboardVariablesList(),
    bosdyn_api_mission_util_pb.KeyValue.toObject, includeInstance)
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
 * @return {!proto.bosdyn.api.mission.SetBlackboard}
 */
proto.bosdyn.api.mission.SetBlackboard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.SetBlackboard;
  return proto.bosdyn.api.mission.SetBlackboard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.SetBlackboard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.SetBlackboard}
 */
proto.bosdyn.api.mission.SetBlackboard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_mission_util_pb.KeyValue;
      reader.readMessage(value,bosdyn_api_mission_util_pb.KeyValue.deserializeBinaryFromReader);
      msg.addBlackboardVariables(value);
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
proto.bosdyn.api.mission.SetBlackboard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.SetBlackboard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.SetBlackboard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.SetBlackboard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlackboardVariablesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      bosdyn_api_mission_util_pb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * repeated KeyValue blackboard_variables = 1;
 * @return {!Array<!proto.bosdyn.api.mission.KeyValue>}
 */
proto.bosdyn.api.mission.SetBlackboard.prototype.getBlackboardVariablesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.mission.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_mission_util_pb.KeyValue, 1));
};


/**
 * @param {!Array<!proto.bosdyn.api.mission.KeyValue>} value
 * @return {!proto.bosdyn.api.mission.SetBlackboard} returns this
*/
proto.bosdyn.api.mission.SetBlackboard.prototype.setBlackboardVariablesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bosdyn.api.mission.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.mission.KeyValue}
 */
proto.bosdyn.api.mission.SetBlackboard.prototype.addBlackboardVariables = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bosdyn.api.mission.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.mission.SetBlackboard} returns this
 */
proto.bosdyn.api.mission.SetBlackboard.prototype.clearBlackboardVariablesList = function() {
  return this.setBlackboardVariablesList([]);
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
proto.bosdyn.api.mission.FormatBlackboard.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.FormatBlackboard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.FormatBlackboard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.FormatBlackboard.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    format: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.bosdyn.api.mission.FormatBlackboard}
 */
proto.bosdyn.api.mission.FormatBlackboard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.FormatBlackboard;
  return proto.bosdyn.api.mission.FormatBlackboard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.FormatBlackboard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.FormatBlackboard}
 */
proto.bosdyn.api.mission.FormatBlackboard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormat(value);
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
proto.bosdyn.api.mission.FormatBlackboard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.FormatBlackboard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.FormatBlackboard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.FormatBlackboard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFormat();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.FormatBlackboard.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.FormatBlackboard} returns this
 */
proto.bosdyn.api.mission.FormatBlackboard.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string format = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.FormatBlackboard.prototype.getFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.FormatBlackboard} returns this
 */
proto.bosdyn.api.mission.FormatBlackboard.prototype.setFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.bosdyn.api.mission.DateToBlackboard.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.DateToBlackboard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.DateToBlackboard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.DateToBlackboard.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.bosdyn.api.mission.DateToBlackboard}
 */
proto.bosdyn.api.mission.DateToBlackboard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.DateToBlackboard;
  return proto.bosdyn.api.mission.DateToBlackboard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.DateToBlackboard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.DateToBlackboard}
 */
proto.bosdyn.api.mission.DateToBlackboard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
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
proto.bosdyn.api.mission.DateToBlackboard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.DateToBlackboard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.DateToBlackboard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.DateToBlackboard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.DateToBlackboard.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.DateToBlackboard} returns this
 */
proto.bosdyn.api.mission.DateToBlackboard.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.repeatedFields_ = [5];



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
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.BosdynQueryStoredCaptures.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    key: jspb.Message.getFieldWithDefault(msg, 3, ""),
    queryParams: (f = msg.getQueryParams()) && bosdyn_api_data_acquisition_store_pb.QueryParameters.toObject(includeInstance, f),
    captureActionIdsFormatList: jspb.Message.toObjectList(msg.getCaptureActionIdsFormatList(),
    proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat.toObject, includeInstance)
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
 * @return {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures}
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.BosdynQueryStoredCaptures;
  return proto.bosdyn.api.mission.BosdynQueryStoredCaptures.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures}
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 4:
      var value = new bosdyn_api_data_acquisition_store_pb.QueryParameters;
      reader.readMessage(value,bosdyn_api_data_acquisition_store_pb.QueryParameters.deserializeBinaryFromReader);
      msg.setQueryParams(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat;
      reader.readMessage(value,proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat.deserializeBinaryFromReader);
      msg.addCaptureActionIdsFormat(value);
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
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.BosdynQueryStoredCaptures.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQueryParams();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_data_acquisition_store_pb.QueryParameters.serializeBinaryToWriter
    );
  }
  f = message.getCaptureActionIdsFormatList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat.serializeBinaryToWriter
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
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionNameFormat: jspb.Message.getFieldWithDefault(msg, 1, ""),
    groupNameFormat: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat}
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat;
  return proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat}
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionNameFormat(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupNameFormat(value);
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
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionNameFormat();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGroupNameFormat();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string action_name_format = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat.prototype.getActionNameFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat} returns this
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat.prototype.setActionNameFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string group_name_format = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat.prototype.getGroupNameFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat} returns this
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat.prototype.setGroupNameFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures} returns this
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures} returns this
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string key = 3;
 * @return {string}
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures} returns this
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bosdyn.api.QueryParameters query_params = 4;
 * @return {?proto.bosdyn.api.QueryParameters}
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.prototype.getQueryParams = function() {
  return /** @type{?proto.bosdyn.api.QueryParameters} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_acquisition_store_pb.QueryParameters, 4));
};


/**
 * @param {?proto.bosdyn.api.QueryParameters|undefined} value
 * @return {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures} returns this
*/
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.prototype.setQueryParams = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures} returns this
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.prototype.clearQueryParams = function() {
  return this.setQueryParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.prototype.hasQueryParams = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated CaptureActionIdFormat capture_action_ids_format = 5;
 * @return {!Array<!proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat>}
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.prototype.getCaptureActionIdsFormatList = function() {
  return /** @type{!Array<!proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat, 5));
};


/**
 * @param {!Array<!proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat>} value
 * @return {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures} returns this
*/
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.prototype.setCaptureActionIdsFormatList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat}
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.prototype.addCaptureActionIdsFormat = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.bosdyn.api.mission.BosdynQueryStoredCaptures.CaptureActionIdFormat, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.mission.BosdynQueryStoredCaptures} returns this
 */
proto.bosdyn.api.mission.BosdynQueryStoredCaptures.prototype.clearCaptureActionIdsFormatList = function() {
  return this.setCaptureActionIdsFormatList([]);
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
proto.bosdyn.api.mission.ConstantResult.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.ConstantResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.ConstantResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.ConstantResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.bosdyn.api.mission.ConstantResult}
 */
proto.bosdyn.api.mission.ConstantResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.ConstantResult;
  return proto.bosdyn.api.mission.ConstantResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.ConstantResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.ConstantResult}
 */
proto.bosdyn.api.mission.ConstantResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.mission.Result} */ (reader.readEnum());
      msg.setResult(value);
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
proto.bosdyn.api.mission.ConstantResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.ConstantResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.ConstantResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.ConstantResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional Result result = 1;
 * @return {!proto.bosdyn.api.mission.Result}
 */
proto.bosdyn.api.mission.ConstantResult.prototype.getResult = function() {
  return /** @type {!proto.bosdyn.api.mission.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.mission.Result} value
 * @return {!proto.bosdyn.api.mission.ConstantResult} returns this
 */
proto.bosdyn.api.mission.ConstantResult.prototype.setResult = function(value) {
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
proto.bosdyn.api.mission.RestartWhenPaused.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.RestartWhenPaused.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.RestartWhenPaused} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.RestartWhenPaused.toObject = function(includeInstance, msg) {
  var f, obj = {
    child: (f = msg.getChild()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.mission.RestartWhenPaused}
 */
proto.bosdyn.api.mission.RestartWhenPaused.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.RestartWhenPaused;
  return proto.bosdyn.api.mission.RestartWhenPaused.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.RestartWhenPaused} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.RestartWhenPaused}
 */
proto.bosdyn.api.mission.RestartWhenPaused.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setChild(value);
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
proto.bosdyn.api.mission.RestartWhenPaused.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.RestartWhenPaused.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.RestartWhenPaused} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.RestartWhenPaused.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChild();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
};


/**
 * optional Node child = 1;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.RestartWhenPaused.prototype.getChild = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Node, 1));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.mission.RestartWhenPaused} returns this
*/
proto.bosdyn.api.mission.RestartWhenPaused.prototype.setChild = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.RestartWhenPaused} returns this
 */
proto.bosdyn.api.mission.RestartWhenPaused.prototype.clearChild = function() {
  return this.setChild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.RestartWhenPaused.prototype.hasChild = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.repeatedFields_ = [13];



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
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.DataAcquisitionOnInterruption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.toObject = function(includeInstance, msg) {
  var f, obj = {
    child: (f = msg.getChild()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f),
    requestWhenInterrupted: (f = msg.getRequestWhenInterrupted()) && proto.bosdyn.api.mission.DataAcquisition.toObject(includeInstance, f),
    pauseMissionMetadata: (f = msg.getPauseMissionMetadata()) && bosdyn_api_data_acquisition_pb.Metadata.toObject(includeInstance, f),
    restartMissionMetadata: (f = msg.getRestartMissionMetadata()) && bosdyn_api_data_acquisition_pb.Metadata.toObject(includeInstance, f),
    loadMissionMetadata: (f = msg.getLoadMissionMetadata()) && bosdyn_api_data_acquisition_pb.Metadata.toObject(includeInstance, f),
    stopMissionMetadata: (f = msg.getStopMissionMetadata()) && bosdyn_api_data_acquisition_pb.Metadata.toObject(includeInstance, f),
    leaseUseErrorMetadata: (f = msg.getLeaseUseErrorMetadata()) && bosdyn_api_data_acquisition_pb.Metadata.toObject(includeInstance, f),
    playMissionTimeoutMetadata: (f = msg.getPlayMissionTimeoutMetadata()) && bosdyn_api_data_acquisition_pb.Metadata.toObject(includeInstance, f),
    childNodeErrorMetadata: (f = msg.getChildNodeErrorMetadata()) && bosdyn_api_data_acquisition_pb.Metadata.toObject(includeInstance, f),
    childNodeExceptionMetadata: (f = msg.getChildNodeExceptionMetadata()) && bosdyn_api_data_acquisition_pb.Metadata.toObject(includeInstance, f),
    defaultMetadata: (f = msg.getDefaultMetadata()) && bosdyn_api_data_acquisition_pb.Metadata.toObject(includeInstance, f),
    keysForLeaseUseErrorMessageList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f
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
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.DataAcquisitionOnInterruption;
  return proto.bosdyn.api.mission.DataAcquisitionOnInterruption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setChild(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.mission.DataAcquisition;
      reader.readMessage(value,proto.bosdyn.api.mission.DataAcquisition.deserializeBinaryFromReader);
      msg.setRequestWhenInterrupted(value);
      break;
    case 4:
      var value = new bosdyn_api_data_acquisition_pb.Metadata;
      reader.readMessage(value,bosdyn_api_data_acquisition_pb.Metadata.deserializeBinaryFromReader);
      msg.setPauseMissionMetadata(value);
      break;
    case 5:
      var value = new bosdyn_api_data_acquisition_pb.Metadata;
      reader.readMessage(value,bosdyn_api_data_acquisition_pb.Metadata.deserializeBinaryFromReader);
      msg.setRestartMissionMetadata(value);
      break;
    case 6:
      var value = new bosdyn_api_data_acquisition_pb.Metadata;
      reader.readMessage(value,bosdyn_api_data_acquisition_pb.Metadata.deserializeBinaryFromReader);
      msg.setLoadMissionMetadata(value);
      break;
    case 7:
      var value = new bosdyn_api_data_acquisition_pb.Metadata;
      reader.readMessage(value,bosdyn_api_data_acquisition_pb.Metadata.deserializeBinaryFromReader);
      msg.setStopMissionMetadata(value);
      break;
    case 8:
      var value = new bosdyn_api_data_acquisition_pb.Metadata;
      reader.readMessage(value,bosdyn_api_data_acquisition_pb.Metadata.deserializeBinaryFromReader);
      msg.setLeaseUseErrorMetadata(value);
      break;
    case 9:
      var value = new bosdyn_api_data_acquisition_pb.Metadata;
      reader.readMessage(value,bosdyn_api_data_acquisition_pb.Metadata.deserializeBinaryFromReader);
      msg.setPlayMissionTimeoutMetadata(value);
      break;
    case 10:
      var value = new bosdyn_api_data_acquisition_pb.Metadata;
      reader.readMessage(value,bosdyn_api_data_acquisition_pb.Metadata.deserializeBinaryFromReader);
      msg.setChildNodeErrorMetadata(value);
      break;
    case 11:
      var value = new bosdyn_api_data_acquisition_pb.Metadata;
      reader.readMessage(value,bosdyn_api_data_acquisition_pb.Metadata.deserializeBinaryFromReader);
      msg.setChildNodeExceptionMetadata(value);
      break;
    case 12:
      var value = new bosdyn_api_data_acquisition_pb.Metadata;
      reader.readMessage(value,bosdyn_api_data_acquisition_pb.Metadata.deserializeBinaryFromReader);
      msg.setDefaultMetadata(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.addKeysForLeaseUseErrorMessage(value);
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
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.DataAcquisitionOnInterruption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChild();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
  f = message.getRequestWhenInterrupted();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.mission.DataAcquisition.serializeBinaryToWriter
    );
  }
  f = message.getPauseMissionMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_data_acquisition_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getRestartMissionMetadata();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_data_acquisition_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getLoadMissionMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      bosdyn_api_data_acquisition_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getStopMissionMetadata();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      bosdyn_api_data_acquisition_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getLeaseUseErrorMetadata();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      bosdyn_api_data_acquisition_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getPlayMissionTimeoutMetadata();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      bosdyn_api_data_acquisition_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getChildNodeErrorMetadata();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      bosdyn_api_data_acquisition_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getChildNodeExceptionMetadata();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      bosdyn_api_data_acquisition_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getDefaultMetadata();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      bosdyn_api_data_acquisition_pb.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getKeysForLeaseUseErrorMessageList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      13,
      f
    );
  }
};


/**
 * optional Node child = 1;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.getChild = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Node, 1));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
*/
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.setChild = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.clearChild = function() {
  return this.setChild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.hasChild = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DataAcquisition request_when_interrupted = 2;
 * @return {?proto.bosdyn.api.mission.DataAcquisition}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.getRequestWhenInterrupted = function() {
  return /** @type{?proto.bosdyn.api.mission.DataAcquisition} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.DataAcquisition, 2));
};


/**
 * @param {?proto.bosdyn.api.mission.DataAcquisition|undefined} value
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
*/
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.setRequestWhenInterrupted = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.clearRequestWhenInterrupted = function() {
  return this.setRequestWhenInterrupted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.hasRequestWhenInterrupted = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bosdyn.api.Metadata pause_mission_metadata = 4;
 * @return {?proto.bosdyn.api.Metadata}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.getPauseMissionMetadata = function() {
  return /** @type{?proto.bosdyn.api.Metadata} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_acquisition_pb.Metadata, 4));
};


/**
 * @param {?proto.bosdyn.api.Metadata|undefined} value
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
*/
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.setPauseMissionMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.clearPauseMissionMetadata = function() {
  return this.setPauseMissionMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.hasPauseMissionMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bosdyn.api.Metadata restart_mission_metadata = 5;
 * @return {?proto.bosdyn.api.Metadata}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.getRestartMissionMetadata = function() {
  return /** @type{?proto.bosdyn.api.Metadata} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_acquisition_pb.Metadata, 5));
};


/**
 * @param {?proto.bosdyn.api.Metadata|undefined} value
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
*/
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.setRestartMissionMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.clearRestartMissionMetadata = function() {
  return this.setRestartMissionMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.hasRestartMissionMetadata = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bosdyn.api.Metadata load_mission_metadata = 6;
 * @return {?proto.bosdyn.api.Metadata}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.getLoadMissionMetadata = function() {
  return /** @type{?proto.bosdyn.api.Metadata} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_acquisition_pb.Metadata, 6));
};


/**
 * @param {?proto.bosdyn.api.Metadata|undefined} value
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
*/
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.setLoadMissionMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.clearLoadMissionMetadata = function() {
  return this.setLoadMissionMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.hasLoadMissionMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bosdyn.api.Metadata stop_mission_metadata = 7;
 * @return {?proto.bosdyn.api.Metadata}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.getStopMissionMetadata = function() {
  return /** @type{?proto.bosdyn.api.Metadata} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_acquisition_pb.Metadata, 7));
};


/**
 * @param {?proto.bosdyn.api.Metadata|undefined} value
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
*/
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.setStopMissionMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.clearStopMissionMetadata = function() {
  return this.setStopMissionMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.hasStopMissionMetadata = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bosdyn.api.Metadata lease_use_error_metadata = 8;
 * @return {?proto.bosdyn.api.Metadata}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.getLeaseUseErrorMetadata = function() {
  return /** @type{?proto.bosdyn.api.Metadata} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_acquisition_pb.Metadata, 8));
};


/**
 * @param {?proto.bosdyn.api.Metadata|undefined} value
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
*/
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.setLeaseUseErrorMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.clearLeaseUseErrorMetadata = function() {
  return this.setLeaseUseErrorMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.hasLeaseUseErrorMetadata = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bosdyn.api.Metadata play_mission_timeout_metadata = 9;
 * @return {?proto.bosdyn.api.Metadata}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.getPlayMissionTimeoutMetadata = function() {
  return /** @type{?proto.bosdyn.api.Metadata} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_acquisition_pb.Metadata, 9));
};


/**
 * @param {?proto.bosdyn.api.Metadata|undefined} value
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
*/
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.setPlayMissionTimeoutMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.clearPlayMissionTimeoutMetadata = function() {
  return this.setPlayMissionTimeoutMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.hasPlayMissionTimeoutMetadata = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bosdyn.api.Metadata child_node_error_metadata = 10;
 * @return {?proto.bosdyn.api.Metadata}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.getChildNodeErrorMetadata = function() {
  return /** @type{?proto.bosdyn.api.Metadata} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_acquisition_pb.Metadata, 10));
};


/**
 * @param {?proto.bosdyn.api.Metadata|undefined} value
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
*/
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.setChildNodeErrorMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.clearChildNodeErrorMetadata = function() {
  return this.setChildNodeErrorMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.hasChildNodeErrorMetadata = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bosdyn.api.Metadata child_node_exception_metadata = 11;
 * @return {?proto.bosdyn.api.Metadata}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.getChildNodeExceptionMetadata = function() {
  return /** @type{?proto.bosdyn.api.Metadata} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_acquisition_pb.Metadata, 11));
};


/**
 * @param {?proto.bosdyn.api.Metadata|undefined} value
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
*/
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.setChildNodeExceptionMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.clearChildNodeExceptionMetadata = function() {
  return this.setChildNodeExceptionMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.hasChildNodeExceptionMetadata = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bosdyn.api.Metadata default_metadata = 12;
 * @return {?proto.bosdyn.api.Metadata}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.getDefaultMetadata = function() {
  return /** @type{?proto.bosdyn.api.Metadata} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_acquisition_pb.Metadata, 12));
};


/**
 * @param {?proto.bosdyn.api.Metadata|undefined} value
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
*/
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.setDefaultMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.clearDefaultMetadata = function() {
  return this.setDefaultMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.hasDefaultMetadata = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * repeated string keys_for_lease_use_error_message = 13;
 * @return {!Array<string>}
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.getKeysForLeaseUseErrorMessageList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.setKeysForLeaseUseErrorMessageList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.addKeysForLeaseUseErrorMessage = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.mission.DataAcquisitionOnInterruption} returns this
 */
proto.bosdyn.api.mission.DataAcquisitionOnInterruption.prototype.clearKeysForLeaseUseErrorMessageList = function() {
  return this.setKeysForLeaseUseErrorMessageList([]);
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
proto.bosdyn.api.mission.ClearBehaviorFaults.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.ClearBehaviorFaults.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.ClearBehaviorFaults} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.ClearBehaviorFaults.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    host: jspb.Message.getFieldWithDefault(msg, 2, ""),
    robotStateBlackboardName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clearedCauseFallBlackboardName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clearedCauseHardwareBlackboardName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    clearedCauseLeaseTimeoutBlackboardName: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.bosdyn.api.mission.ClearBehaviorFaults}
 */
proto.bosdyn.api.mission.ClearBehaviorFaults.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.ClearBehaviorFaults;
  return proto.bosdyn.api.mission.ClearBehaviorFaults.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.ClearBehaviorFaults} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.ClearBehaviorFaults}
 */
proto.bosdyn.api.mission.ClearBehaviorFaults.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotStateBlackboardName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClearedCauseFallBlackboardName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClearedCauseHardwareBlackboardName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClearedCauseLeaseTimeoutBlackboardName(value);
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
proto.bosdyn.api.mission.ClearBehaviorFaults.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.ClearBehaviorFaults.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.ClearBehaviorFaults} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.ClearBehaviorFaults.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRobotStateBlackboardName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClearedCauseFallBlackboardName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClearedCauseHardwareBlackboardName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getClearedCauseLeaseTimeoutBlackboardName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.ClearBehaviorFaults.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.ClearBehaviorFaults} returns this
 */
proto.bosdyn.api.mission.ClearBehaviorFaults.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string host = 2;
 * @return {string}
 */
proto.bosdyn.api.mission.ClearBehaviorFaults.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.ClearBehaviorFaults} returns this
 */
proto.bosdyn.api.mission.ClearBehaviorFaults.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string robot_state_blackboard_name = 3;
 * @return {string}
 */
proto.bosdyn.api.mission.ClearBehaviorFaults.prototype.getRobotStateBlackboardName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.ClearBehaviorFaults} returns this
 */
proto.bosdyn.api.mission.ClearBehaviorFaults.prototype.setRobotStateBlackboardName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string cleared_cause_fall_blackboard_name = 4;
 * @return {string}
 */
proto.bosdyn.api.mission.ClearBehaviorFaults.prototype.getClearedCauseFallBlackboardName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.ClearBehaviorFaults} returns this
 */
proto.bosdyn.api.mission.ClearBehaviorFaults.prototype.setClearedCauseFallBlackboardName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string cleared_cause_hardware_blackboard_name = 5;
 * @return {string}
 */
proto.bosdyn.api.mission.ClearBehaviorFaults.prototype.getClearedCauseHardwareBlackboardName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.ClearBehaviorFaults} returns this
 */
proto.bosdyn.api.mission.ClearBehaviorFaults.prototype.setClearedCauseHardwareBlackboardName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string cleared_cause_lease_timeout_blackboard_name = 6;
 * @return {string}
 */
proto.bosdyn.api.mission.ClearBehaviorFaults.prototype.getClearedCauseLeaseTimeoutBlackboardName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.ClearBehaviorFaults} returns this
 */
proto.bosdyn.api.mission.ClearBehaviorFaults.prototype.setClearedCauseLeaseTimeoutBlackboardName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.bosdyn.api.mission.CreateMissionText.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.mission.CreateMissionText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.mission.CreateMissionText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.CreateMissionText.toObject = function(includeInstance, msg) {
  var f, obj = {
    missionText: jspb.Message.getFieldWithDefault(msg, 1, ""),
    severity: jspb.Message.getFieldWithDefault(msg, 2, 0),
    child: (f = msg.getChild()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.mission.CreateMissionText}
 */
proto.bosdyn.api.mission.CreateMissionText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.mission.CreateMissionText;
  return proto.bosdyn.api.mission.CreateMissionText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.mission.CreateMissionText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.mission.CreateMissionText}
 */
proto.bosdyn.api.mission.CreateMissionText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMissionText(value);
      break;
    case 2:
      var value = /** @type {!proto.bosdyn.api.AlertData.SeverityLevel} */ (reader.readEnum());
      msg.setSeverity(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setChild(value);
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
proto.bosdyn.api.mission.CreateMissionText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.mission.CreateMissionText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.mission.CreateMissionText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.mission.CreateMissionText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMissionText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSeverity();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getChild();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.mission.Node.serializeBinaryToWriter
    );
  }
};


/**
 * optional string mission_text = 1;
 * @return {string}
 */
proto.bosdyn.api.mission.CreateMissionText.prototype.getMissionText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.mission.CreateMissionText} returns this
 */
proto.bosdyn.api.mission.CreateMissionText.prototype.setMissionText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bosdyn.api.AlertData.SeverityLevel severity = 2;
 * @return {!proto.bosdyn.api.AlertData.SeverityLevel}
 */
proto.bosdyn.api.mission.CreateMissionText.prototype.getSeverity = function() {
  return /** @type {!proto.bosdyn.api.AlertData.SeverityLevel} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.AlertData.SeverityLevel} value
 * @return {!proto.bosdyn.api.mission.CreateMissionText} returns this
 */
proto.bosdyn.api.mission.CreateMissionText.prototype.setSeverity = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Node child = 3;
 * @return {?proto.bosdyn.api.mission.Node}
 */
proto.bosdyn.api.mission.CreateMissionText.prototype.getChild = function() {
  return /** @type{?proto.bosdyn.api.mission.Node} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.mission.Node, 3));
};


/**
 * @param {?proto.bosdyn.api.mission.Node|undefined} value
 * @return {!proto.bosdyn.api.mission.CreateMissionText} returns this
*/
proto.bosdyn.api.mission.CreateMissionText.prototype.setChild = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.mission.CreateMissionText} returns this
 */
proto.bosdyn.api.mission.CreateMissionText.prototype.clearChild = function() {
  return this.setChild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.mission.CreateMissionText.prototype.hasChild = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.bosdyn.api.mission);

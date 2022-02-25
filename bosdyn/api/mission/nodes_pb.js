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
var global = Function('return this')();

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var bosdyn_api_docking_docking_pb = require('../../../bosdyn/api/docking/docking_pb.js');
goog.object.extend(proto, bosdyn_api_docking_docking_pb);
var bosdyn_api_geometry_pb = require('../../../bosdyn/api/geometry_pb.js');
goog.object.extend(proto, bosdyn_api_geometry_pb);
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
var bosdyn_api_data_buffer_pb = require('../../../bosdyn/api/data_buffer_pb.js');
goog.object.extend(proto, bosdyn_api_data_buffer_pb);
var bosdyn_api_graph_nav_graph_nav_pb = require('../../../bosdyn/api/graph_nav/graph_nav_pb.js');
goog.object.extend(proto, bosdyn_api_graph_nav_graph_nav_pb);
var bosdyn_api_graph_nav_nav_pb = require('../../../bosdyn/api/graph_nav/nav_pb.js');
goog.object.extend(proto, bosdyn_api_graph_nav_nav_pb);
var bosdyn_api_mission_util_pb = require('../../../bosdyn/api/mission/util_pb.js');
goog.object.extend(proto, bosdyn_api_mission_util_pb);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynDockState', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynGraphNavLocalize', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynGraphNavState', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynNavigateRoute', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynNavigateTo', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.BosdynPowerRequest', null, global);
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
goog.exportSymbol('proto.bosdyn.api.mission.DataAcquisition', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.DataAcquisition.CompletionBehavior', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.DateToBlackboard', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.DefineBlackboard', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Dock', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.ForDuration', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.FormatBlackboard', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Node', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Node.TypeCase', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Prompt', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Prompt.Option', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.RemoteGrpc', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Repeat', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.RestartWhenPaused', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.RetainLease', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Retry', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Selector', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Sequence', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SetBlackboard', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SimpleParallel', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.Sleep', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SpotCamLed', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SpotCamPtz', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SpotCamPtz.AdjustParameters', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SpotCamResetAutofocus', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.SpotCamStoreMedia', null, global);
goog.exportSymbol('proto.bosdyn.api.mission.StoreMetadata', null, global);
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
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
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
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
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
proto.bosdyn.api.mission.Prompt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.mission.Prompt.repeatedFields_, null);
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
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
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
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
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
proto.bosdyn.api.mission.Node.oneofGroups_ = [[4,5]];

/**
 * @enum {number}
 */
proto.bosdyn.api.mission.Node.TypeCase = {
  TYPE_NOT_SET: 0,
  IMPL: 4,
  NODE_REFERENCE: 5
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
    startCounterStateName: jspb.Message.getFieldWithDefault(msg, 5, "")
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
  return jspb.Message.setWrapperField(this, 1, value);
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
    secondary: (f = msg.getSecondary()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f)
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
    navigateToResponseBlackboardKey: jspb.Message.getFieldWithDefault(msg, 7, "")
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
    navigateRouteResponseBlackboardKey: jspb.Message.getFieldWithDefault(msg, 7, "")
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
    localizationRequest: (f = msg.getLocalizationRequest()) && bosdyn_api_graph_nav_graph_nav_pb.SetLocalizationRequest.toObject(includeInstance, f)
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
    event: (f = msg.getEvent()) && bosdyn_api_data_buffer_pb.Event.toObject(includeInstance, f)
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
  f = message.getSeconds();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
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
  return jspb.Message.setProto3FloatField(this, 1, value);
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



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.mission.Prompt.repeatedFields_ = [4];



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
    child: (f = msg.getChild()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f),
    forAutonomousProcessing: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
    case 5:
      var value = new proto.bosdyn.api.mission.Node;
      reader.readMessage(value,proto.bosdyn.api.mission.Node.deserializeBinaryFromReader);
      msg.setChild(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForAutonomousProcessing(value);
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
    child: (f = msg.getChild()) && proto.bosdyn.api.mission.Node.toObject(includeInstance, f),
    commandStatusName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    feedbackStatusName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    prepPoseBehavior: jspb.Message.getFieldWithDefault(msg, 7, 0),
    dockingCommandFeedbackResponseBlackboardKey: jspb.Message.getFieldWithDefault(msg, 8, ""),
    dockingCommandResponseBlackboardKey: jspb.Message.getFieldWithDefault(msg, 9, "")
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
  f = message.getDockingStationId();
  if (f !== 0) {
    writer.writeUint32(
      3,
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
  return jspb.Message.setProto3IntField(this, 3, value);
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
  f = message.getMetadataName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
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
  return jspb.Message.setProto3StringField(this, 5, value);
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
    requestNameInBlackboard: jspb.Message.getFieldWithDefault(msg, 6, "")
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
    robotStateBlackboardName: jspb.Message.getFieldWithDefault(msg, 3, "")
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


goog.object.extend(exports, proto.bosdyn.api.mission);

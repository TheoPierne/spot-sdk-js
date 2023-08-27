// source: bosdyn/api/robot_state.proto
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

var bosdyn_api_geometry_pb = require('../../bosdyn/api/geometry_pb.js');
goog.object.extend(proto, bosdyn_api_geometry_pb);
var bosdyn_api_header_pb = require('../../bosdyn/api/header_pb.js');
goog.object.extend(proto, bosdyn_api_header_pb);
var bosdyn_api_parameter_pb = require('../../bosdyn/api/parameter_pb.js');
goog.object.extend(proto, bosdyn_api_parameter_pb);
var bosdyn_api_service_fault_pb = require('../../bosdyn/api/service_fault_pb.js');
goog.object.extend(proto, bosdyn_api_service_fault_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.bosdyn.api.BatteryState', null, global);
goog.exportSymbol('proto.bosdyn.api.BatteryState.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.BehaviorFault', null, global);
goog.exportSymbol('proto.bosdyn.api.BehaviorFault.Cause', null, global);
goog.exportSymbol('proto.bosdyn.api.BehaviorFault.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.BehaviorFaultState', null, global);
goog.exportSymbol('proto.bosdyn.api.CommsState', null, global);
goog.exportSymbol('proto.bosdyn.api.CommsState.StateCase', null, global);
goog.exportSymbol('proto.bosdyn.api.EStopState', null, global);
goog.exportSymbol('proto.bosdyn.api.EStopState.State', null, global);
goog.exportSymbol('proto.bosdyn.api.EStopState.Type', null, global);
goog.exportSymbol('proto.bosdyn.api.FootState', null, global);
goog.exportSymbol('proto.bosdyn.api.FootState.Contact', null, global);
goog.exportSymbol('proto.bosdyn.api.FootState.TerrainState', null, global);
goog.exportSymbol('proto.bosdyn.api.HardwareConfiguration', null, global);
goog.exportSymbol('proto.bosdyn.api.JointState', null, global);
goog.exportSymbol('proto.bosdyn.api.KinematicState', null, global);
goog.exportSymbol('proto.bosdyn.api.ManipulatorState', null, global);
goog.exportSymbol('proto.bosdyn.api.ManipulatorState.CarryState', null, global);
goog.exportSymbol('proto.bosdyn.api.ManipulatorState.StowState', null, global);
goog.exportSymbol('proto.bosdyn.api.PowerState', null, global);
goog.exportSymbol('proto.bosdyn.api.PowerState.MotorPowerState', null, global);
goog.exportSymbol('proto.bosdyn.api.PowerState.PayloadPortsPowerState', null, global);
goog.exportSymbol('proto.bosdyn.api.PowerState.RobotPowerState', null, global);
goog.exportSymbol('proto.bosdyn.api.PowerState.ShorePowerState', null, global);
goog.exportSymbol('proto.bosdyn.api.PowerState.WifiRadioPowerState', null, global);
goog.exportSymbol('proto.bosdyn.api.RobotHardwareConfigurationRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.RobotHardwareConfigurationResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.RobotImpairedState', null, global);
goog.exportSymbol('proto.bosdyn.api.RobotImpairedState.ImpairedStatus', null, global);
goog.exportSymbol('proto.bosdyn.api.RobotLinkModelRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.RobotLinkModelResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.RobotMetrics', null, global);
goog.exportSymbol('proto.bosdyn.api.RobotMetricsRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.RobotMetricsResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.RobotState', null, global);
goog.exportSymbol('proto.bosdyn.api.RobotStateRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.RobotStateResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.ServiceFaultState', null, global);
goog.exportSymbol('proto.bosdyn.api.Skeleton', null, global);
goog.exportSymbol('proto.bosdyn.api.Skeleton.Link', null, global);
goog.exportSymbol('proto.bosdyn.api.Skeleton.Link.ObjModel', null, global);
goog.exportSymbol('proto.bosdyn.api.SystemFault', null, global);
goog.exportSymbol('proto.bosdyn.api.SystemFault.Severity', null, global);
goog.exportSymbol('proto.bosdyn.api.SystemFaultState', null, global);
goog.exportSymbol('proto.bosdyn.api.TerrainState', null, global);
goog.exportSymbol('proto.bosdyn.api.WiFiState', null, global);
goog.exportSymbol('proto.bosdyn.api.WiFiState.Mode', null, global);
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
proto.bosdyn.api.Skeleton = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.Skeleton.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.Skeleton, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.Skeleton.displayName = 'proto.bosdyn.api.Skeleton';
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
proto.bosdyn.api.Skeleton.Link = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.Skeleton.Link, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.Skeleton.Link.displayName = 'proto.bosdyn.api.Skeleton.Link';
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
proto.bosdyn.api.Skeleton.Link.ObjModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.Skeleton.Link.ObjModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.Skeleton.Link.ObjModel.displayName = 'proto.bosdyn.api.Skeleton.Link.ObjModel';
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
proto.bosdyn.api.HardwareConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.HardwareConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.HardwareConfiguration.displayName = 'proto.bosdyn.api.HardwareConfiguration';
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
proto.bosdyn.api.RobotState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.RobotState.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.RobotState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.RobotState.displayName = 'proto.bosdyn.api.RobotState';
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
proto.bosdyn.api.PowerState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.PowerState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.PowerState.displayName = 'proto.bosdyn.api.PowerState';
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
proto.bosdyn.api.SystemFaultState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.SystemFaultState.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.SystemFaultState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SystemFaultState.displayName = 'proto.bosdyn.api.SystemFaultState';
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
proto.bosdyn.api.SystemFault = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.SystemFault.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.SystemFault, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SystemFault.displayName = 'proto.bosdyn.api.SystemFault';
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
proto.bosdyn.api.EStopState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.EStopState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.EStopState.displayName = 'proto.bosdyn.api.EStopState';
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
proto.bosdyn.api.BatteryState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.BatteryState.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.BatteryState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.BatteryState.displayName = 'proto.bosdyn.api.BatteryState';
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
proto.bosdyn.api.KinematicState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.KinematicState.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.KinematicState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.KinematicState.displayName = 'proto.bosdyn.api.KinematicState';
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
proto.bosdyn.api.JointState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.JointState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.JointState.displayName = 'proto.bosdyn.api.JointState';
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
proto.bosdyn.api.BehaviorFaultState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.BehaviorFaultState.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.BehaviorFaultState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.BehaviorFaultState.displayName = 'proto.bosdyn.api.BehaviorFaultState';
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
proto.bosdyn.api.BehaviorFault = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.BehaviorFault, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.BehaviorFault.displayName = 'proto.bosdyn.api.BehaviorFault';
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
proto.bosdyn.api.RobotMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.RobotMetrics.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.RobotMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.RobotMetrics.displayName = 'proto.bosdyn.api.RobotMetrics';
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
proto.bosdyn.api.CommsState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.CommsState.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.CommsState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.CommsState.displayName = 'proto.bosdyn.api.CommsState';
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
proto.bosdyn.api.WiFiState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.WiFiState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.WiFiState.displayName = 'proto.bosdyn.api.WiFiState';
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
proto.bosdyn.api.FootState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.FootState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.FootState.displayName = 'proto.bosdyn.api.FootState';
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
proto.bosdyn.api.FootState.TerrainState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.FootState.TerrainState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.FootState.TerrainState.displayName = 'proto.bosdyn.api.FootState.TerrainState';
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
proto.bosdyn.api.ManipulatorState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ManipulatorState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ManipulatorState.displayName = 'proto.bosdyn.api.ManipulatorState';
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
proto.bosdyn.api.ServiceFaultState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.ServiceFaultState.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.ServiceFaultState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ServiceFaultState.displayName = 'proto.bosdyn.api.ServiceFaultState';
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
proto.bosdyn.api.TerrainState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.TerrainState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.TerrainState.displayName = 'proto.bosdyn.api.TerrainState';
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
proto.bosdyn.api.RobotStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.RobotStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.RobotStateRequest.displayName = 'proto.bosdyn.api.RobotStateRequest';
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
proto.bosdyn.api.RobotStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.RobotStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.RobotStateResponse.displayName = 'proto.bosdyn.api.RobotStateResponse';
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
proto.bosdyn.api.RobotMetricsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.RobotMetricsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.RobotMetricsRequest.displayName = 'proto.bosdyn.api.RobotMetricsRequest';
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
proto.bosdyn.api.RobotMetricsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.RobotMetricsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.RobotMetricsResponse.displayName = 'proto.bosdyn.api.RobotMetricsResponse';
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
proto.bosdyn.api.RobotHardwareConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.RobotHardwareConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.RobotHardwareConfigurationRequest.displayName = 'proto.bosdyn.api.RobotHardwareConfigurationRequest';
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
proto.bosdyn.api.RobotHardwareConfigurationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.RobotHardwareConfigurationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.RobotHardwareConfigurationResponse.displayName = 'proto.bosdyn.api.RobotHardwareConfigurationResponse';
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
proto.bosdyn.api.RobotLinkModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.RobotLinkModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.RobotLinkModelRequest.displayName = 'proto.bosdyn.api.RobotLinkModelRequest';
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
proto.bosdyn.api.RobotLinkModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.RobotLinkModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.RobotLinkModelResponse.displayName = 'proto.bosdyn.api.RobotLinkModelResponse';
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
proto.bosdyn.api.RobotImpairedState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.RobotImpairedState.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.RobotImpairedState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.RobotImpairedState.displayName = 'proto.bosdyn.api.RobotImpairedState';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.Skeleton.repeatedFields_ = [2];



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
proto.bosdyn.api.Skeleton.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.Skeleton.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.Skeleton} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.Skeleton.toObject = function(includeInstance, msg) {
  var f, obj = {
    linksList: jspb.Message.toObjectList(msg.getLinksList(),
    proto.bosdyn.api.Skeleton.Link.toObject, includeInstance),
    urdf: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.bosdyn.api.Skeleton}
 */
proto.bosdyn.api.Skeleton.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.Skeleton;
  return proto.bosdyn.api.Skeleton.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.Skeleton} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.Skeleton}
 */
proto.bosdyn.api.Skeleton.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.bosdyn.api.Skeleton.Link;
      reader.readMessage(value,proto.bosdyn.api.Skeleton.Link.deserializeBinaryFromReader);
      msg.addLinks(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrdf(value);
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
proto.bosdyn.api.Skeleton.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.Skeleton.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.Skeleton} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.Skeleton.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bosdyn.api.Skeleton.Link.serializeBinaryToWriter
    );
  }
  f = message.getUrdf();
  if (f.length > 0) {
    writer.writeString(
      3,
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
proto.bosdyn.api.Skeleton.Link.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.Skeleton.Link.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.Skeleton.Link} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.Skeleton.Link.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    objModel: (f = msg.getObjModel()) && proto.bosdyn.api.Skeleton.Link.ObjModel.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.Skeleton.Link}
 */
proto.bosdyn.api.Skeleton.Link.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.Skeleton.Link;
  return proto.bosdyn.api.Skeleton.Link.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.Skeleton.Link} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.Skeleton.Link}
 */
proto.bosdyn.api.Skeleton.Link.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bosdyn.api.Skeleton.Link.ObjModel;
      reader.readMessage(value,proto.bosdyn.api.Skeleton.Link.ObjModel.deserializeBinaryFromReader);
      msg.setObjModel(value);
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
proto.bosdyn.api.Skeleton.Link.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.Skeleton.Link.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.Skeleton.Link} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.Skeleton.Link.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getObjModel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.Skeleton.Link.ObjModel.serializeBinaryToWriter
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
proto.bosdyn.api.Skeleton.Link.ObjModel.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.Skeleton.Link.ObjModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.Skeleton.Link.ObjModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.Skeleton.Link.ObjModel.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fileContents: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.bosdyn.api.Skeleton.Link.ObjModel}
 */
proto.bosdyn.api.Skeleton.Link.ObjModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.Skeleton.Link.ObjModel;
  return proto.bosdyn.api.Skeleton.Link.ObjModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.Skeleton.Link.ObjModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.Skeleton.Link.ObjModel}
 */
proto.bosdyn.api.Skeleton.Link.ObjModel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileContents(value);
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
proto.bosdyn.api.Skeleton.Link.ObjModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.Skeleton.Link.ObjModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.Skeleton.Link.ObjModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.Skeleton.Link.ObjModel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFileContents();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string file_name = 1;
 * @return {string}
 */
proto.bosdyn.api.Skeleton.Link.ObjModel.prototype.getFileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.Skeleton.Link.ObjModel} returns this
 */
proto.bosdyn.api.Skeleton.Link.ObjModel.prototype.setFileName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string file_contents = 2;
 * @return {string}
 */
proto.bosdyn.api.Skeleton.Link.ObjModel.prototype.getFileContents = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.Skeleton.Link.ObjModel} returns this
 */
proto.bosdyn.api.Skeleton.Link.ObjModel.prototype.setFileContents = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.bosdyn.api.Skeleton.Link.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.Skeleton.Link} returns this
 */
proto.bosdyn.api.Skeleton.Link.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ObjModel obj_model = 2;
 * @return {?proto.bosdyn.api.Skeleton.Link.ObjModel}
 */
proto.bosdyn.api.Skeleton.Link.prototype.getObjModel = function() {
  return /** @type{?proto.bosdyn.api.Skeleton.Link.ObjModel} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Skeleton.Link.ObjModel, 2));
};


/**
 * @param {?proto.bosdyn.api.Skeleton.Link.ObjModel|undefined} value
 * @return {!proto.bosdyn.api.Skeleton.Link} returns this
*/
proto.bosdyn.api.Skeleton.Link.prototype.setObjModel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.Skeleton.Link} returns this
 */
proto.bosdyn.api.Skeleton.Link.prototype.clearObjModel = function() {
  return this.setObjModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.Skeleton.Link.prototype.hasObjModel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Link links = 2;
 * @return {!Array<!proto.bosdyn.api.Skeleton.Link>}
 */
proto.bosdyn.api.Skeleton.prototype.getLinksList = function() {
  return /** @type{!Array<!proto.bosdyn.api.Skeleton.Link>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.Skeleton.Link, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.Skeleton.Link>} value
 * @return {!proto.bosdyn.api.Skeleton} returns this
*/
proto.bosdyn.api.Skeleton.prototype.setLinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.Skeleton.Link=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.Skeleton.Link}
 */
proto.bosdyn.api.Skeleton.prototype.addLinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.Skeleton.Link, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.Skeleton} returns this
 */
proto.bosdyn.api.Skeleton.prototype.clearLinksList = function() {
  return this.setLinksList([]);
};


/**
 * optional string urdf = 3;
 * @return {string}
 */
proto.bosdyn.api.Skeleton.prototype.getUrdf = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.Skeleton} returns this
 */
proto.bosdyn.api.Skeleton.prototype.setUrdf = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.bosdyn.api.HardwareConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.HardwareConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.HardwareConfiguration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.HardwareConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
    skeleton: (f = msg.getSkeleton()) && proto.bosdyn.api.Skeleton.toObject(includeInstance, f),
    canPowerCommandRequestOffRobot: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    canPowerCommandRequestCycleRobot: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    canPowerCommandRequestPayloadPorts: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    canPowerCommandRequestWifiRadio: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    hasAudioVisualSystem: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.bosdyn.api.HardwareConfiguration}
 */
proto.bosdyn.api.HardwareConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.HardwareConfiguration;
  return proto.bosdyn.api.HardwareConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.HardwareConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.HardwareConfiguration}
 */
proto.bosdyn.api.HardwareConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.Skeleton;
      reader.readMessage(value,proto.bosdyn.api.Skeleton.deserializeBinaryFromReader);
      msg.setSkeleton(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanPowerCommandRequestOffRobot(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanPowerCommandRequestCycleRobot(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanPowerCommandRequestPayloadPorts(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanPowerCommandRequestWifiRadio(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasAudioVisualSystem(value);
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
proto.bosdyn.api.HardwareConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.HardwareConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.HardwareConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.HardwareConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkeleton();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.Skeleton.serializeBinaryToWriter
    );
  }
  f = message.getCanPowerCommandRequestOffRobot();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getCanPowerCommandRequestCycleRobot();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getCanPowerCommandRequestPayloadPorts();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getCanPowerCommandRequestWifiRadio();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getHasAudioVisualSystem();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional Skeleton skeleton = 1;
 * @return {?proto.bosdyn.api.Skeleton}
 */
proto.bosdyn.api.HardwareConfiguration.prototype.getSkeleton = function() {
  return /** @type{?proto.bosdyn.api.Skeleton} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Skeleton, 1));
};


/**
 * @param {?proto.bosdyn.api.Skeleton|undefined} value
 * @return {!proto.bosdyn.api.HardwareConfiguration} returns this
*/
proto.bosdyn.api.HardwareConfiguration.prototype.setSkeleton = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.HardwareConfiguration} returns this
 */
proto.bosdyn.api.HardwareConfiguration.prototype.clearSkeleton = function() {
  return this.setSkeleton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.HardwareConfiguration.prototype.hasSkeleton = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool can_power_command_request_off_robot = 2;
 * @return {boolean}
 */
proto.bosdyn.api.HardwareConfiguration.prototype.getCanPowerCommandRequestOffRobot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.HardwareConfiguration} returns this
 */
proto.bosdyn.api.HardwareConfiguration.prototype.setCanPowerCommandRequestOffRobot = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool can_power_command_request_cycle_robot = 3;
 * @return {boolean}
 */
proto.bosdyn.api.HardwareConfiguration.prototype.getCanPowerCommandRequestCycleRobot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.HardwareConfiguration} returns this
 */
proto.bosdyn.api.HardwareConfiguration.prototype.setCanPowerCommandRequestCycleRobot = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool can_power_command_request_payload_ports = 4;
 * @return {boolean}
 */
proto.bosdyn.api.HardwareConfiguration.prototype.getCanPowerCommandRequestPayloadPorts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.HardwareConfiguration} returns this
 */
proto.bosdyn.api.HardwareConfiguration.prototype.setCanPowerCommandRequestPayloadPorts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool can_power_command_request_wifi_radio = 5;
 * @return {boolean}
 */
proto.bosdyn.api.HardwareConfiguration.prototype.getCanPowerCommandRequestWifiRadio = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.HardwareConfiguration} returns this
 */
proto.bosdyn.api.HardwareConfiguration.prototype.setCanPowerCommandRequestWifiRadio = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool has_audio_visual_system = 7;
 * @return {boolean}
 */
proto.bosdyn.api.HardwareConfiguration.prototype.getHasAudioVisualSystem = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.HardwareConfiguration} returns this
 */
proto.bosdyn.api.HardwareConfiguration.prototype.setHasAudioVisualSystem = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.RobotState.repeatedFields_ = [2,3,5,8];



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
proto.bosdyn.api.RobotState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.RobotState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.RobotState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotState.toObject = function(includeInstance, msg) {
  var f, obj = {
    powerState: (f = msg.getPowerState()) && proto.bosdyn.api.PowerState.toObject(includeInstance, f),
    batteryStatesList: jspb.Message.toObjectList(msg.getBatteryStatesList(),
    proto.bosdyn.api.BatteryState.toObject, includeInstance),
    commsStatesList: jspb.Message.toObjectList(msg.getCommsStatesList(),
    proto.bosdyn.api.CommsState.toObject, includeInstance),
    systemFaultState: (f = msg.getSystemFaultState()) && proto.bosdyn.api.SystemFaultState.toObject(includeInstance, f),
    estopStatesList: jspb.Message.toObjectList(msg.getEstopStatesList(),
    proto.bosdyn.api.EStopState.toObject, includeInstance),
    kinematicState: (f = msg.getKinematicState()) && proto.bosdyn.api.KinematicState.toObject(includeInstance, f),
    behaviorFaultState: (f = msg.getBehaviorFaultState()) && proto.bosdyn.api.BehaviorFaultState.toObject(includeInstance, f),
    footStateList: jspb.Message.toObjectList(msg.getFootStateList(),
    proto.bosdyn.api.FootState.toObject, includeInstance),
    manipulatorState: (f = msg.getManipulatorState()) && proto.bosdyn.api.ManipulatorState.toObject(includeInstance, f),
    serviceFaultState: (f = msg.getServiceFaultState()) && proto.bosdyn.api.ServiceFaultState.toObject(includeInstance, f),
    terrainState: (f = msg.getTerrainState()) && proto.bosdyn.api.TerrainState.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.RobotState}
 */
proto.bosdyn.api.RobotState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.RobotState;
  return proto.bosdyn.api.RobotState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.RobotState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.RobotState}
 */
proto.bosdyn.api.RobotState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.PowerState;
      reader.readMessage(value,proto.bosdyn.api.PowerState.deserializeBinaryFromReader);
      msg.setPowerState(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.BatteryState;
      reader.readMessage(value,proto.bosdyn.api.BatteryState.deserializeBinaryFromReader);
      msg.addBatteryStates(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.CommsState;
      reader.readMessage(value,proto.bosdyn.api.CommsState.deserializeBinaryFromReader);
      msg.addCommsStates(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.SystemFaultState;
      reader.readMessage(value,proto.bosdyn.api.SystemFaultState.deserializeBinaryFromReader);
      msg.setSystemFaultState(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.EStopState;
      reader.readMessage(value,proto.bosdyn.api.EStopState.deserializeBinaryFromReader);
      msg.addEstopStates(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.KinematicState;
      reader.readMessage(value,proto.bosdyn.api.KinematicState.deserializeBinaryFromReader);
      msg.setKinematicState(value);
      break;
    case 7:
      var value = new proto.bosdyn.api.BehaviorFaultState;
      reader.readMessage(value,proto.bosdyn.api.BehaviorFaultState.deserializeBinaryFromReader);
      msg.setBehaviorFaultState(value);
      break;
    case 8:
      var value = new proto.bosdyn.api.FootState;
      reader.readMessage(value,proto.bosdyn.api.FootState.deserializeBinaryFromReader);
      msg.addFootState(value);
      break;
    case 11:
      var value = new proto.bosdyn.api.ManipulatorState;
      reader.readMessage(value,proto.bosdyn.api.ManipulatorState.deserializeBinaryFromReader);
      msg.setManipulatorState(value);
      break;
    case 10:
      var value = new proto.bosdyn.api.ServiceFaultState;
      reader.readMessage(value,proto.bosdyn.api.ServiceFaultState.deserializeBinaryFromReader);
      msg.setServiceFaultState(value);
      break;
    case 12:
      var value = new proto.bosdyn.api.TerrainState;
      reader.readMessage(value,proto.bosdyn.api.TerrainState.deserializeBinaryFromReader);
      msg.setTerrainState(value);
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
proto.bosdyn.api.RobotState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.RobotState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.RobotState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPowerState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.PowerState.serializeBinaryToWriter
    );
  }
  f = message.getBatteryStatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bosdyn.api.BatteryState.serializeBinaryToWriter
    );
  }
  f = message.getCommsStatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bosdyn.api.CommsState.serializeBinaryToWriter
    );
  }
  f = message.getSystemFaultState();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.SystemFaultState.serializeBinaryToWriter
    );
  }
  f = message.getEstopStatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.bosdyn.api.EStopState.serializeBinaryToWriter
    );
  }
  f = message.getKinematicState();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bosdyn.api.KinematicState.serializeBinaryToWriter
    );
  }
  f = message.getBehaviorFaultState();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bosdyn.api.BehaviorFaultState.serializeBinaryToWriter
    );
  }
  f = message.getFootStateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.bosdyn.api.FootState.serializeBinaryToWriter
    );
  }
  f = message.getManipulatorState();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.bosdyn.api.ManipulatorState.serializeBinaryToWriter
    );
  }
  f = message.getServiceFaultState();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.bosdyn.api.ServiceFaultState.serializeBinaryToWriter
    );
  }
  f = message.getTerrainState();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.bosdyn.api.TerrainState.serializeBinaryToWriter
    );
  }
};


/**
 * optional PowerState power_state = 1;
 * @return {?proto.bosdyn.api.PowerState}
 */
proto.bosdyn.api.RobotState.prototype.getPowerState = function() {
  return /** @type{?proto.bosdyn.api.PowerState} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.PowerState, 1));
};


/**
 * @param {?proto.bosdyn.api.PowerState|undefined} value
 * @return {!proto.bosdyn.api.RobotState} returns this
*/
proto.bosdyn.api.RobotState.prototype.setPowerState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotState} returns this
 */
proto.bosdyn.api.RobotState.prototype.clearPowerState = function() {
  return this.setPowerState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotState.prototype.hasPowerState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated BatteryState battery_states = 2;
 * @return {!Array<!proto.bosdyn.api.BatteryState>}
 */
proto.bosdyn.api.RobotState.prototype.getBatteryStatesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.BatteryState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.BatteryState, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.BatteryState>} value
 * @return {!proto.bosdyn.api.RobotState} returns this
*/
proto.bosdyn.api.RobotState.prototype.setBatteryStatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.BatteryState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.BatteryState}
 */
proto.bosdyn.api.RobotState.prototype.addBatteryStates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.BatteryState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.RobotState} returns this
 */
proto.bosdyn.api.RobotState.prototype.clearBatteryStatesList = function() {
  return this.setBatteryStatesList([]);
};


/**
 * repeated CommsState comms_states = 3;
 * @return {!Array<!proto.bosdyn.api.CommsState>}
 */
proto.bosdyn.api.RobotState.prototype.getCommsStatesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.CommsState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.CommsState, 3));
};


/**
 * @param {!Array<!proto.bosdyn.api.CommsState>} value
 * @return {!proto.bosdyn.api.RobotState} returns this
*/
proto.bosdyn.api.RobotState.prototype.setCommsStatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bosdyn.api.CommsState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.CommsState}
 */
proto.bosdyn.api.RobotState.prototype.addCommsStates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bosdyn.api.CommsState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.RobotState} returns this
 */
proto.bosdyn.api.RobotState.prototype.clearCommsStatesList = function() {
  return this.setCommsStatesList([]);
};


/**
 * optional SystemFaultState system_fault_state = 4;
 * @return {?proto.bosdyn.api.SystemFaultState}
 */
proto.bosdyn.api.RobotState.prototype.getSystemFaultState = function() {
  return /** @type{?proto.bosdyn.api.SystemFaultState} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.SystemFaultState, 4));
};


/**
 * @param {?proto.bosdyn.api.SystemFaultState|undefined} value
 * @return {!proto.bosdyn.api.RobotState} returns this
*/
proto.bosdyn.api.RobotState.prototype.setSystemFaultState = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotState} returns this
 */
proto.bosdyn.api.RobotState.prototype.clearSystemFaultState = function() {
  return this.setSystemFaultState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotState.prototype.hasSystemFaultState = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated EStopState estop_states = 5;
 * @return {!Array<!proto.bosdyn.api.EStopState>}
 */
proto.bosdyn.api.RobotState.prototype.getEstopStatesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.EStopState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.EStopState, 5));
};


/**
 * @param {!Array<!proto.bosdyn.api.EStopState>} value
 * @return {!proto.bosdyn.api.RobotState} returns this
*/
proto.bosdyn.api.RobotState.prototype.setEstopStatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.bosdyn.api.EStopState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.EStopState}
 */
proto.bosdyn.api.RobotState.prototype.addEstopStates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.bosdyn.api.EStopState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.RobotState} returns this
 */
proto.bosdyn.api.RobotState.prototype.clearEstopStatesList = function() {
  return this.setEstopStatesList([]);
};


/**
 * optional KinematicState kinematic_state = 6;
 * @return {?proto.bosdyn.api.KinematicState}
 */
proto.bosdyn.api.RobotState.prototype.getKinematicState = function() {
  return /** @type{?proto.bosdyn.api.KinematicState} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.KinematicState, 6));
};


/**
 * @param {?proto.bosdyn.api.KinematicState|undefined} value
 * @return {!proto.bosdyn.api.RobotState} returns this
*/
proto.bosdyn.api.RobotState.prototype.setKinematicState = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotState} returns this
 */
proto.bosdyn.api.RobotState.prototype.clearKinematicState = function() {
  return this.setKinematicState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotState.prototype.hasKinematicState = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional BehaviorFaultState behavior_fault_state = 7;
 * @return {?proto.bosdyn.api.BehaviorFaultState}
 */
proto.bosdyn.api.RobotState.prototype.getBehaviorFaultState = function() {
  return /** @type{?proto.bosdyn.api.BehaviorFaultState} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.BehaviorFaultState, 7));
};


/**
 * @param {?proto.bosdyn.api.BehaviorFaultState|undefined} value
 * @return {!proto.bosdyn.api.RobotState} returns this
*/
proto.bosdyn.api.RobotState.prototype.setBehaviorFaultState = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotState} returns this
 */
proto.bosdyn.api.RobotState.prototype.clearBehaviorFaultState = function() {
  return this.setBehaviorFaultState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotState.prototype.hasBehaviorFaultState = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated FootState foot_state = 8;
 * @return {!Array<!proto.bosdyn.api.FootState>}
 */
proto.bosdyn.api.RobotState.prototype.getFootStateList = function() {
  return /** @type{!Array<!proto.bosdyn.api.FootState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.FootState, 8));
};


/**
 * @param {!Array<!proto.bosdyn.api.FootState>} value
 * @return {!proto.bosdyn.api.RobotState} returns this
*/
proto.bosdyn.api.RobotState.prototype.setFootStateList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.bosdyn.api.FootState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.FootState}
 */
proto.bosdyn.api.RobotState.prototype.addFootState = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.bosdyn.api.FootState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.RobotState} returns this
 */
proto.bosdyn.api.RobotState.prototype.clearFootStateList = function() {
  return this.setFootStateList([]);
};


/**
 * optional ManipulatorState manipulator_state = 11;
 * @return {?proto.bosdyn.api.ManipulatorState}
 */
proto.bosdyn.api.RobotState.prototype.getManipulatorState = function() {
  return /** @type{?proto.bosdyn.api.ManipulatorState} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ManipulatorState, 11));
};


/**
 * @param {?proto.bosdyn.api.ManipulatorState|undefined} value
 * @return {!proto.bosdyn.api.RobotState} returns this
*/
proto.bosdyn.api.RobotState.prototype.setManipulatorState = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotState} returns this
 */
proto.bosdyn.api.RobotState.prototype.clearManipulatorState = function() {
  return this.setManipulatorState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotState.prototype.hasManipulatorState = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ServiceFaultState service_fault_state = 10;
 * @return {?proto.bosdyn.api.ServiceFaultState}
 */
proto.bosdyn.api.RobotState.prototype.getServiceFaultState = function() {
  return /** @type{?proto.bosdyn.api.ServiceFaultState} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.ServiceFaultState, 10));
};


/**
 * @param {?proto.bosdyn.api.ServiceFaultState|undefined} value
 * @return {!proto.bosdyn.api.RobotState} returns this
*/
proto.bosdyn.api.RobotState.prototype.setServiceFaultState = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotState} returns this
 */
proto.bosdyn.api.RobotState.prototype.clearServiceFaultState = function() {
  return this.setServiceFaultState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotState.prototype.hasServiceFaultState = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional TerrainState terrain_state = 12;
 * @return {?proto.bosdyn.api.TerrainState}
 */
proto.bosdyn.api.RobotState.prototype.getTerrainState = function() {
  return /** @type{?proto.bosdyn.api.TerrainState} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.TerrainState, 12));
};


/**
 * @param {?proto.bosdyn.api.TerrainState|undefined} value
 * @return {!proto.bosdyn.api.RobotState} returns this
*/
proto.bosdyn.api.RobotState.prototype.setTerrainState = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotState} returns this
 */
proto.bosdyn.api.RobotState.prototype.clearTerrainState = function() {
  return this.setTerrainState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotState.prototype.hasTerrainState = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.bosdyn.api.PowerState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.PowerState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.PowerState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.PowerState.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    motorPowerState: jspb.Message.getFieldWithDefault(msg, 2, 0),
    shorePowerState: jspb.Message.getFieldWithDefault(msg, 3, 0),
    robotPowerState: jspb.Message.getFieldWithDefault(msg, 6, 0),
    payloadPortsPowerState: jspb.Message.getFieldWithDefault(msg, 7, 0),
    wifiRadioPowerState: jspb.Message.getFieldWithDefault(msg, 9, 0),
    locomotionChargePercentage: (f = msg.getLocomotionChargePercentage()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    locomotionEstimatedRuntime: (f = msg.getLocomotionEstimatedRuntime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.PowerState}
 */
proto.bosdyn.api.PowerState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.PowerState;
  return proto.bosdyn.api.PowerState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.PowerState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.PowerState}
 */
proto.bosdyn.api.PowerState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {!proto.bosdyn.api.PowerState.MotorPowerState} */ (reader.readEnum());
      msg.setMotorPowerState(value);
      break;
    case 3:
      var value = /** @type {!proto.bosdyn.api.PowerState.ShorePowerState} */ (reader.readEnum());
      msg.setShorePowerState(value);
      break;
    case 6:
      var value = /** @type {!proto.bosdyn.api.PowerState.RobotPowerState} */ (reader.readEnum());
      msg.setRobotPowerState(value);
      break;
    case 7:
      var value = /** @type {!proto.bosdyn.api.PowerState.PayloadPortsPowerState} */ (reader.readEnum());
      msg.setPayloadPortsPowerState(value);
      break;
    case 9:
      var value = /** @type {!proto.bosdyn.api.PowerState.WifiRadioPowerState} */ (reader.readEnum());
      msg.setWifiRadioPowerState(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setLocomotionChargePercentage(value);
      break;
    case 5:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setLocomotionEstimatedRuntime(value);
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
proto.bosdyn.api.PowerState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.PowerState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.PowerState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.PowerState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMotorPowerState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getShorePowerState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getRobotPowerState();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getPayloadPortsPowerState();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getWifiRadioPowerState();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getLocomotionChargePercentage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getLocomotionEstimatedRuntime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.PowerState.MotorPowerState = {
  STATE_UNKNOWN: 0,
  MOTOR_POWER_STATE_UNKNOWN: 0,
  STATE_OFF: 1,
  MOTOR_POWER_STATE_OFF: 1,
  STATE_ON: 2,
  MOTOR_POWER_STATE_ON: 2,
  STATE_POWERING_ON: 3,
  MOTOR_POWER_STATE_POWERING_ON: 3,
  STATE_POWERING_OFF: 4,
  MOTOR_POWER_STATE_POWERING_OFF: 4,
  STATE_ERROR: 5,
  MOTOR_POWER_STATE_ERROR: 5
};

/**
 * @enum {number}
 */
proto.bosdyn.api.PowerState.ShorePowerState = {
  STATE_UNKNOWN_SHORE_POWER: 0,
  SHORE_POWER_STATE_UNKNOWN: 0,
  STATE_ON_SHORE_POWER: 1,
  SHORE_POWER_STATE_ON: 1,
  STATE_OFF_SHORE_POWER: 2,
  SHORE_POWER_STATE_OFF: 2
};

/**
 * @enum {number}
 */
proto.bosdyn.api.PowerState.RobotPowerState = {
  ROBOT_POWER_STATE_UNKNOWN: 0,
  ROBOT_POWER_STATE_ON: 1,
  ROBOT_POWER_STATE_OFF: 2
};

/**
 * @enum {number}
 */
proto.bosdyn.api.PowerState.PayloadPortsPowerState = {
  PAYLOAD_PORTS_POWER_STATE_UNKNOWN: 0,
  PAYLOAD_PORTS_POWER_STATE_ON: 1,
  PAYLOAD_PORTS_POWER_STATE_OFF: 2
};

/**
 * @enum {number}
 */
proto.bosdyn.api.PowerState.WifiRadioPowerState = {
  WIFI_RADIO_POWER_STATE_UNKNOWN: 0,
  WIFI_RADIO_POWER_STATE_ON: 1,
  WIFI_RADIO_POWER_STATE_OFF: 2
};

/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.PowerState.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.PowerState} returns this
*/
proto.bosdyn.api.PowerState.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.PowerState} returns this
 */
proto.bosdyn.api.PowerState.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.PowerState.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MotorPowerState motor_power_state = 2;
 * @return {!proto.bosdyn.api.PowerState.MotorPowerState}
 */
proto.bosdyn.api.PowerState.prototype.getMotorPowerState = function() {
  return /** @type {!proto.bosdyn.api.PowerState.MotorPowerState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.PowerState.MotorPowerState} value
 * @return {!proto.bosdyn.api.PowerState} returns this
 */
proto.bosdyn.api.PowerState.prototype.setMotorPowerState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional ShorePowerState shore_power_state = 3;
 * @return {!proto.bosdyn.api.PowerState.ShorePowerState}
 */
proto.bosdyn.api.PowerState.prototype.getShorePowerState = function() {
  return /** @type {!proto.bosdyn.api.PowerState.ShorePowerState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bosdyn.api.PowerState.ShorePowerState} value
 * @return {!proto.bosdyn.api.PowerState} returns this
 */
proto.bosdyn.api.PowerState.prototype.setShorePowerState = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional RobotPowerState robot_power_state = 6;
 * @return {!proto.bosdyn.api.PowerState.RobotPowerState}
 */
proto.bosdyn.api.PowerState.prototype.getRobotPowerState = function() {
  return /** @type {!proto.bosdyn.api.PowerState.RobotPowerState} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.bosdyn.api.PowerState.RobotPowerState} value
 * @return {!proto.bosdyn.api.PowerState} returns this
 */
proto.bosdyn.api.PowerState.prototype.setRobotPowerState = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional PayloadPortsPowerState payload_ports_power_state = 7;
 * @return {!proto.bosdyn.api.PowerState.PayloadPortsPowerState}
 */
proto.bosdyn.api.PowerState.prototype.getPayloadPortsPowerState = function() {
  return /** @type {!proto.bosdyn.api.PowerState.PayloadPortsPowerState} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.bosdyn.api.PowerState.PayloadPortsPowerState} value
 * @return {!proto.bosdyn.api.PowerState} returns this
 */
proto.bosdyn.api.PowerState.prototype.setPayloadPortsPowerState = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional WifiRadioPowerState wifi_radio_power_state = 9;
 * @return {!proto.bosdyn.api.PowerState.WifiRadioPowerState}
 */
proto.bosdyn.api.PowerState.prototype.getWifiRadioPowerState = function() {
  return /** @type {!proto.bosdyn.api.PowerState.WifiRadioPowerState} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.bosdyn.api.PowerState.WifiRadioPowerState} value
 * @return {!proto.bosdyn.api.PowerState} returns this
 */
proto.bosdyn.api.PowerState.prototype.setWifiRadioPowerState = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional google.protobuf.DoubleValue locomotion_charge_percentage = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.PowerState.prototype.getLocomotionChargePercentage = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.PowerState} returns this
*/
proto.bosdyn.api.PowerState.prototype.setLocomotionChargePercentage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.PowerState} returns this
 */
proto.bosdyn.api.PowerState.prototype.clearLocomotionChargePercentage = function() {
  return this.setLocomotionChargePercentage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.PowerState.prototype.hasLocomotionChargePercentage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration locomotion_estimated_runtime = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.PowerState.prototype.getLocomotionEstimatedRuntime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.PowerState} returns this
*/
proto.bosdyn.api.PowerState.prototype.setLocomotionEstimatedRuntime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.PowerState} returns this
 */
proto.bosdyn.api.PowerState.prototype.clearLocomotionEstimatedRuntime = function() {
  return this.setLocomotionEstimatedRuntime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.PowerState.prototype.hasLocomotionEstimatedRuntime = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.SystemFaultState.repeatedFields_ = [1,2];



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
proto.bosdyn.api.SystemFaultState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SystemFaultState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SystemFaultState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SystemFaultState.toObject = function(includeInstance, msg) {
  var f, obj = {
    faultsList: jspb.Message.toObjectList(msg.getFaultsList(),
    proto.bosdyn.api.SystemFault.toObject, includeInstance),
    historicalFaultsList: jspb.Message.toObjectList(msg.getHistoricalFaultsList(),
    proto.bosdyn.api.SystemFault.toObject, includeInstance),
    aggregatedMap: (f = msg.getAggregatedMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.bosdyn.api.SystemFaultState}
 */
proto.bosdyn.api.SystemFaultState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SystemFaultState;
  return proto.bosdyn.api.SystemFaultState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SystemFaultState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SystemFaultState}
 */
proto.bosdyn.api.SystemFaultState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.SystemFault;
      reader.readMessage(value,proto.bosdyn.api.SystemFault.deserializeBinaryFromReader);
      msg.addFaults(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.SystemFault;
      reader.readMessage(value,proto.bosdyn.api.SystemFault.deserializeBinaryFromReader);
      msg.addHistoricalFaults(value);
      break;
    case 3:
      var value = msg.getAggregatedMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readEnum, null, "", 0);
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
proto.bosdyn.api.SystemFaultState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SystemFaultState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SystemFaultState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SystemFaultState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFaultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bosdyn.api.SystemFault.serializeBinaryToWriter
    );
  }
  f = message.getHistoricalFaultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bosdyn.api.SystemFault.serializeBinaryToWriter
    );
  }
  f = message.getAggregatedMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeEnum);
  }
};


/**
 * repeated SystemFault faults = 1;
 * @return {!Array<!proto.bosdyn.api.SystemFault>}
 */
proto.bosdyn.api.SystemFaultState.prototype.getFaultsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.SystemFault>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.SystemFault, 1));
};


/**
 * @param {!Array<!proto.bosdyn.api.SystemFault>} value
 * @return {!proto.bosdyn.api.SystemFaultState} returns this
*/
proto.bosdyn.api.SystemFaultState.prototype.setFaultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bosdyn.api.SystemFault=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.SystemFault}
 */
proto.bosdyn.api.SystemFaultState.prototype.addFaults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bosdyn.api.SystemFault, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.SystemFaultState} returns this
 */
proto.bosdyn.api.SystemFaultState.prototype.clearFaultsList = function() {
  return this.setFaultsList([]);
};


/**
 * repeated SystemFault historical_faults = 2;
 * @return {!Array<!proto.bosdyn.api.SystemFault>}
 */
proto.bosdyn.api.SystemFaultState.prototype.getHistoricalFaultsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.SystemFault>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.SystemFault, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.SystemFault>} value
 * @return {!proto.bosdyn.api.SystemFaultState} returns this
*/
proto.bosdyn.api.SystemFaultState.prototype.setHistoricalFaultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.SystemFault=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.SystemFault}
 */
proto.bosdyn.api.SystemFaultState.prototype.addHistoricalFaults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.SystemFault, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.SystemFaultState} returns this
 */
proto.bosdyn.api.SystemFaultState.prototype.clearHistoricalFaultsList = function() {
  return this.setHistoricalFaultsList([]);
};


/**
 * map<string, SystemFault.Severity> aggregated = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bosdyn.api.SystemFault.Severity>}
 */
proto.bosdyn.api.SystemFaultState.prototype.getAggregatedMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bosdyn.api.SystemFault.Severity>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bosdyn.api.SystemFaultState} returns this
 */
proto.bosdyn.api.SystemFaultState.prototype.clearAggregatedMap = function() {
  this.getAggregatedMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.SystemFault.repeatedFields_ = [6];



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
proto.bosdyn.api.SystemFault.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SystemFault.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SystemFault} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SystemFault.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    onsetTimestamp: (f = msg.getOnsetTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    code: jspb.Message.getFieldWithDefault(msg, 4, 0),
    uid: jspb.Message.getFieldWithDefault(msg, 8, 0),
    errorMessage: jspb.Message.getFieldWithDefault(msg, 5, ""),
    attributesList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    severity: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.bosdyn.api.SystemFault}
 */
proto.bosdyn.api.SystemFault.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SystemFault;
  return proto.bosdyn.api.SystemFault.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SystemFault} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SystemFault}
 */
proto.bosdyn.api.SystemFault.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setOnsetTimestamp(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addAttributes(value);
      break;
    case 7:
      var value = /** @type {!proto.bosdyn.api.SystemFault.Severity} */ (reader.readEnum());
      msg.setSeverity(value);
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
proto.bosdyn.api.SystemFault.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SystemFault.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SystemFault} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SystemFault.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOnsetTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getSeverity();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.SystemFault.Severity = {
  SEVERITY_UNKNOWN: 0,
  SEVERITY_INFO: 1,
  SEVERITY_WARN: 2,
  SEVERITY_CRITICAL: 3
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.bosdyn.api.SystemFault.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.SystemFault} returns this
 */
proto.bosdyn.api.SystemFault.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp onset_timestamp = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.SystemFault.prototype.getOnsetTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.SystemFault} returns this
*/
proto.bosdyn.api.SystemFault.prototype.setOnsetTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.SystemFault} returns this
 */
proto.bosdyn.api.SystemFault.prototype.clearOnsetTimestamp = function() {
  return this.setOnsetTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.SystemFault.prototype.hasOnsetTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration duration = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.SystemFault.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.SystemFault} returns this
*/
proto.bosdyn.api.SystemFault.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.SystemFault} returns this
 */
proto.bosdyn.api.SystemFault.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.SystemFault.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 code = 4;
 * @return {number}
 */
proto.bosdyn.api.SystemFault.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.SystemFault} returns this
 */
proto.bosdyn.api.SystemFault.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 uid = 8;
 * @return {number}
 */
proto.bosdyn.api.SystemFault.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.SystemFault} returns this
 */
proto.bosdyn.api.SystemFault.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string error_message = 5;
 * @return {string}
 */
proto.bosdyn.api.SystemFault.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.SystemFault} returns this
 */
proto.bosdyn.api.SystemFault.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string attributes = 6;
 * @return {!Array<string>}
 */
proto.bosdyn.api.SystemFault.prototype.getAttributesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.SystemFault} returns this
 */
proto.bosdyn.api.SystemFault.prototype.setAttributesList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.SystemFault} returns this
 */
proto.bosdyn.api.SystemFault.prototype.addAttributes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.SystemFault} returns this
 */
proto.bosdyn.api.SystemFault.prototype.clearAttributesList = function() {
  return this.setAttributesList([]);
};


/**
 * optional Severity severity = 7;
 * @return {!proto.bosdyn.api.SystemFault.Severity}
 */
proto.bosdyn.api.SystemFault.prototype.getSeverity = function() {
  return /** @type {!proto.bosdyn.api.SystemFault.Severity} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.bosdyn.api.SystemFault.Severity} value
 * @return {!proto.bosdyn.api.SystemFault} returns this
 */
proto.bosdyn.api.SystemFault.prototype.setSeverity = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
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
proto.bosdyn.api.EStopState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.EStopState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.EStopState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.EStopState.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    state: jspb.Message.getFieldWithDefault(msg, 4, 0),
    stateDescription: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.bosdyn.api.EStopState}
 */
proto.bosdyn.api.EStopState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.EStopState;
  return proto.bosdyn.api.EStopState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.EStopState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.EStopState}
 */
proto.bosdyn.api.EStopState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.bosdyn.api.EStopState.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {!proto.bosdyn.api.EStopState.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStateDescription(value);
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
proto.bosdyn.api.EStopState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.EStopState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.EStopState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.EStopState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getStateDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.EStopState.Type = {
  TYPE_UNKNOWN: 0,
  TYPE_HARDWARE: 1,
  TYPE_SOFTWARE: 2
};

/**
 * @enum {number}
 */
proto.bosdyn.api.EStopState.State = {
  STATE_UNKNOWN: 0,
  STATE_ESTOPPED: 1,
  STATE_NOT_ESTOPPED: 2
};

/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.EStopState.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.EStopState} returns this
*/
proto.bosdyn.api.EStopState.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.EStopState} returns this
 */
proto.bosdyn.api.EStopState.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.EStopState.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.bosdyn.api.EStopState.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.EStopState} returns this
 */
proto.bosdyn.api.EStopState.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Type type = 3;
 * @return {!proto.bosdyn.api.EStopState.Type}
 */
proto.bosdyn.api.EStopState.prototype.getType = function() {
  return /** @type {!proto.bosdyn.api.EStopState.Type} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bosdyn.api.EStopState.Type} value
 * @return {!proto.bosdyn.api.EStopState} returns this
 */
proto.bosdyn.api.EStopState.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional State state = 4;
 * @return {!proto.bosdyn.api.EStopState.State}
 */
proto.bosdyn.api.EStopState.prototype.getState = function() {
  return /** @type {!proto.bosdyn.api.EStopState.State} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bosdyn.api.EStopState.State} value
 * @return {!proto.bosdyn.api.EStopState} returns this
 */
proto.bosdyn.api.EStopState.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string state_description = 5;
 * @return {string}
 */
proto.bosdyn.api.EStopState.prototype.getStateDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.EStopState} returns this
 */
proto.bosdyn.api.EStopState.prototype.setStateDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.BatteryState.repeatedFields_ = [7];



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
proto.bosdyn.api.BatteryState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.BatteryState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.BatteryState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.BatteryState.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    identifier: jspb.Message.getFieldWithDefault(msg, 2, ""),
    chargePercentage: (f = msg.getChargePercentage()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    estimatedRuntime: (f = msg.getEstimatedRuntime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    current: (f = msg.getCurrent()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    voltage: (f = msg.getVoltage()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    temperaturesList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 7)) == null ? undefined : f,
    status: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.bosdyn.api.BatteryState}
 */
proto.bosdyn.api.BatteryState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.BatteryState;
  return proto.bosdyn.api.BatteryState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.BatteryState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.BatteryState}
 */
proto.bosdyn.api.BatteryState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentifier(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setChargePercentage(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setEstimatedRuntime(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setCurrent(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setVoltage(value);
      break;
    case 7:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedDouble() : [reader.readDouble()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTemperatures(values[i]);
      }
      break;
    case 8:
      var value = /** @type {!proto.bosdyn.api.BatteryState.Status} */ (reader.readEnum());
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
proto.bosdyn.api.BatteryState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.BatteryState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.BatteryState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.BatteryState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIdentifier();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChargePercentage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getEstimatedRuntime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCurrent();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getVoltage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getTemperaturesList();
  if (f.length > 0) {
    writer.writePackedDouble(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.BatteryState.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_MISSING: 1,
  STATUS_CHARGING: 2,
  STATUS_DISCHARGING: 3,
  STATUS_BOOTING: 4
};

/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.BatteryState.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.BatteryState} returns this
*/
proto.bosdyn.api.BatteryState.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.BatteryState} returns this
 */
proto.bosdyn.api.BatteryState.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.BatteryState.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string identifier = 2;
 * @return {string}
 */
proto.bosdyn.api.BatteryState.prototype.getIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.BatteryState} returns this
 */
proto.bosdyn.api.BatteryState.prototype.setIdentifier = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.DoubleValue charge_percentage = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.BatteryState.prototype.getChargePercentage = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.BatteryState} returns this
*/
proto.bosdyn.api.BatteryState.prototype.setChargePercentage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.BatteryState} returns this
 */
proto.bosdyn.api.BatteryState.prototype.clearChargePercentage = function() {
  return this.setChargePercentage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.BatteryState.prototype.hasChargePercentage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration estimated_runtime = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.BatteryState.prototype.getEstimatedRuntime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.BatteryState} returns this
*/
proto.bosdyn.api.BatteryState.prototype.setEstimatedRuntime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.BatteryState} returns this
 */
proto.bosdyn.api.BatteryState.prototype.clearEstimatedRuntime = function() {
  return this.setEstimatedRuntime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.BatteryState.prototype.hasEstimatedRuntime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue current = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.BatteryState.prototype.getCurrent = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.BatteryState} returns this
*/
proto.bosdyn.api.BatteryState.prototype.setCurrent = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.BatteryState} returns this
 */
proto.bosdyn.api.BatteryState.prototype.clearCurrent = function() {
  return this.setCurrent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.BatteryState.prototype.hasCurrent = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue voltage = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.BatteryState.prototype.getVoltage = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.BatteryState} returns this
*/
proto.bosdyn.api.BatteryState.prototype.setVoltage = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.BatteryState} returns this
 */
proto.bosdyn.api.BatteryState.prototype.clearVoltage = function() {
  return this.setVoltage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.BatteryState.prototype.hasVoltage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated double temperatures = 7;
 * @return {!Array<number>}
 */
proto.bosdyn.api.BatteryState.prototype.getTemperaturesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 7));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.bosdyn.api.BatteryState} returns this
 */
proto.bosdyn.api.BatteryState.prototype.setTemperaturesList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.BatteryState} returns this
 */
proto.bosdyn.api.BatteryState.prototype.addTemperatures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.BatteryState} returns this
 */
proto.bosdyn.api.BatteryState.prototype.clearTemperaturesList = function() {
  return this.setTemperaturesList([]);
};


/**
 * optional Status status = 8;
 * @return {!proto.bosdyn.api.BatteryState.Status}
 */
proto.bosdyn.api.BatteryState.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.BatteryState.Status} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.bosdyn.api.BatteryState.Status} value
 * @return {!proto.bosdyn.api.BatteryState} returns this
 */
proto.bosdyn.api.BatteryState.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.KinematicState.repeatedFields_ = [2];



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
proto.bosdyn.api.KinematicState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.KinematicState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.KinematicState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.KinematicState.toObject = function(includeInstance, msg) {
  var f, obj = {
    jointStatesList: jspb.Message.toObjectList(msg.getJointStatesList(),
    proto.bosdyn.api.JointState.toObject, includeInstance),
    acquisitionTimestamp: (f = msg.getAcquisitionTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    transformsSnapshot: (f = msg.getTransformsSnapshot()) && bosdyn_api_geometry_pb.FrameTreeSnapshot.toObject(includeInstance, f),
    velocityOfBodyInVision: (f = msg.getVelocityOfBodyInVision()) && bosdyn_api_geometry_pb.SE3Velocity.toObject(includeInstance, f),
    velocityOfBodyInOdom: (f = msg.getVelocityOfBodyInOdom()) && bosdyn_api_geometry_pb.SE3Velocity.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.KinematicState}
 */
proto.bosdyn.api.KinematicState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.KinematicState;
  return proto.bosdyn.api.KinematicState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.KinematicState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.KinematicState}
 */
proto.bosdyn.api.KinematicState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.bosdyn.api.JointState;
      reader.readMessage(value,proto.bosdyn.api.JointState.deserializeBinaryFromReader);
      msg.addJointStates(value);
      break;
    case 30:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setAcquisitionTimestamp(value);
      break;
    case 31:
      var value = new bosdyn_api_geometry_pb.FrameTreeSnapshot;
      reader.readMessage(value,bosdyn_api_geometry_pb.FrameTreeSnapshot.deserializeBinaryFromReader);
      msg.setTransformsSnapshot(value);
      break;
    case 8:
      var value = new bosdyn_api_geometry_pb.SE3Velocity;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Velocity.deserializeBinaryFromReader);
      msg.setVelocityOfBodyInVision(value);
      break;
    case 12:
      var value = new bosdyn_api_geometry_pb.SE3Velocity;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Velocity.deserializeBinaryFromReader);
      msg.setVelocityOfBodyInOdom(value);
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
proto.bosdyn.api.KinematicState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.KinematicState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.KinematicState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.KinematicState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJointStatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bosdyn.api.JointState.serializeBinaryToWriter
    );
  }
  f = message.getAcquisitionTimestamp();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTransformsSnapshot();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      bosdyn_api_geometry_pb.FrameTreeSnapshot.serializeBinaryToWriter
    );
  }
  f = message.getVelocityOfBodyInVision();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      bosdyn_api_geometry_pb.SE3Velocity.serializeBinaryToWriter
    );
  }
  f = message.getVelocityOfBodyInOdom();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      bosdyn_api_geometry_pb.SE3Velocity.serializeBinaryToWriter
    );
  }
};


/**
 * repeated JointState joint_states = 2;
 * @return {!Array<!proto.bosdyn.api.JointState>}
 */
proto.bosdyn.api.KinematicState.prototype.getJointStatesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.JointState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.JointState, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.JointState>} value
 * @return {!proto.bosdyn.api.KinematicState} returns this
*/
proto.bosdyn.api.KinematicState.prototype.setJointStatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.JointState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.JointState}
 */
proto.bosdyn.api.KinematicState.prototype.addJointStates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.JointState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.KinematicState} returns this
 */
proto.bosdyn.api.KinematicState.prototype.clearJointStatesList = function() {
  return this.setJointStatesList([]);
};


/**
 * optional google.protobuf.Timestamp acquisition_timestamp = 30;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.KinematicState.prototype.getAcquisitionTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 30));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.KinematicState} returns this
*/
proto.bosdyn.api.KinematicState.prototype.setAcquisitionTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.KinematicState} returns this
 */
proto.bosdyn.api.KinematicState.prototype.clearAcquisitionTimestamp = function() {
  return this.setAcquisitionTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.KinematicState.prototype.hasAcquisitionTimestamp = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional FrameTreeSnapshot transforms_snapshot = 31;
 * @return {?proto.bosdyn.api.FrameTreeSnapshot}
 */
proto.bosdyn.api.KinematicState.prototype.getTransformsSnapshot = function() {
  return /** @type{?proto.bosdyn.api.FrameTreeSnapshot} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.FrameTreeSnapshot, 31));
};


/**
 * @param {?proto.bosdyn.api.FrameTreeSnapshot|undefined} value
 * @return {!proto.bosdyn.api.KinematicState} returns this
*/
proto.bosdyn.api.KinematicState.prototype.setTransformsSnapshot = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.KinematicState} returns this
 */
proto.bosdyn.api.KinematicState.prototype.clearTransformsSnapshot = function() {
  return this.setTransformsSnapshot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.KinematicState.prototype.hasTransformsSnapshot = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional SE3Velocity velocity_of_body_in_vision = 8;
 * @return {?proto.bosdyn.api.SE3Velocity}
 */
proto.bosdyn.api.KinematicState.prototype.getVelocityOfBodyInVision = function() {
  return /** @type{?proto.bosdyn.api.SE3Velocity} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Velocity, 8));
};


/**
 * @param {?proto.bosdyn.api.SE3Velocity|undefined} value
 * @return {!proto.bosdyn.api.KinematicState} returns this
*/
proto.bosdyn.api.KinematicState.prototype.setVelocityOfBodyInVision = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.KinematicState} returns this
 */
proto.bosdyn.api.KinematicState.prototype.clearVelocityOfBodyInVision = function() {
  return this.setVelocityOfBodyInVision(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.KinematicState.prototype.hasVelocityOfBodyInVision = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional SE3Velocity velocity_of_body_in_odom = 12;
 * @return {?proto.bosdyn.api.SE3Velocity}
 */
proto.bosdyn.api.KinematicState.prototype.getVelocityOfBodyInOdom = function() {
  return /** @type{?proto.bosdyn.api.SE3Velocity} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Velocity, 12));
};


/**
 * @param {?proto.bosdyn.api.SE3Velocity|undefined} value
 * @return {!proto.bosdyn.api.KinematicState} returns this
*/
proto.bosdyn.api.KinematicState.prototype.setVelocityOfBodyInOdom = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.KinematicState} returns this
 */
proto.bosdyn.api.KinematicState.prototype.clearVelocityOfBodyInOdom = function() {
  return this.setVelocityOfBodyInOdom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.KinematicState.prototype.hasVelocityOfBodyInOdom = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.bosdyn.api.JointState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.JointState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.JointState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.JointState.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    position: (f = msg.getPosition()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    velocity: (f = msg.getVelocity()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    acceleration: (f = msg.getAcceleration()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    load: (f = msg.getLoad()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.JointState}
 */
proto.bosdyn.api.JointState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.JointState;
  return proto.bosdyn.api.JointState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.JointState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.JointState}
 */
proto.bosdyn.api.JointState.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setVelocity(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setAcceleration(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setLoad(value);
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
proto.bosdyn.api.JointState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.JointState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.JointState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.JointState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getVelocity();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getAcceleration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getLoad();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.bosdyn.api.JointState.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.JointState} returns this
 */
proto.bosdyn.api.JointState.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.DoubleValue position = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.JointState.prototype.getPosition = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.JointState} returns this
*/
proto.bosdyn.api.JointState.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.JointState} returns this
 */
proto.bosdyn.api.JointState.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.JointState.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue velocity = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.JointState.prototype.getVelocity = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.JointState} returns this
*/
proto.bosdyn.api.JointState.prototype.setVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.JointState} returns this
 */
proto.bosdyn.api.JointState.prototype.clearVelocity = function() {
  return this.setVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.JointState.prototype.hasVelocity = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue acceleration = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.JointState.prototype.getAcceleration = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.JointState} returns this
*/
proto.bosdyn.api.JointState.prototype.setAcceleration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.JointState} returns this
 */
proto.bosdyn.api.JointState.prototype.clearAcceleration = function() {
  return this.setAcceleration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.JointState.prototype.hasAcceleration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue load = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.JointState.prototype.getLoad = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.JointState} returns this
*/
proto.bosdyn.api.JointState.prototype.setLoad = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.JointState} returns this
 */
proto.bosdyn.api.JointState.prototype.clearLoad = function() {
  return this.setLoad(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.JointState.prototype.hasLoad = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.BehaviorFaultState.repeatedFields_ = [1];



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
proto.bosdyn.api.BehaviorFaultState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.BehaviorFaultState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.BehaviorFaultState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.BehaviorFaultState.toObject = function(includeInstance, msg) {
  var f, obj = {
    faultsList: jspb.Message.toObjectList(msg.getFaultsList(),
    proto.bosdyn.api.BehaviorFault.toObject, includeInstance)
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
 * @return {!proto.bosdyn.api.BehaviorFaultState}
 */
proto.bosdyn.api.BehaviorFaultState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.BehaviorFaultState;
  return proto.bosdyn.api.BehaviorFaultState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.BehaviorFaultState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.BehaviorFaultState}
 */
proto.bosdyn.api.BehaviorFaultState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.BehaviorFault;
      reader.readMessage(value,proto.bosdyn.api.BehaviorFault.deserializeBinaryFromReader);
      msg.addFaults(value);
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
proto.bosdyn.api.BehaviorFaultState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.BehaviorFaultState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.BehaviorFaultState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.BehaviorFaultState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFaultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bosdyn.api.BehaviorFault.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BehaviorFault faults = 1;
 * @return {!Array<!proto.bosdyn.api.BehaviorFault>}
 */
proto.bosdyn.api.BehaviorFaultState.prototype.getFaultsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.BehaviorFault>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.BehaviorFault, 1));
};


/**
 * @param {!Array<!proto.bosdyn.api.BehaviorFault>} value
 * @return {!proto.bosdyn.api.BehaviorFaultState} returns this
*/
proto.bosdyn.api.BehaviorFaultState.prototype.setFaultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bosdyn.api.BehaviorFault=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.BehaviorFault}
 */
proto.bosdyn.api.BehaviorFaultState.prototype.addFaults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bosdyn.api.BehaviorFault, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.BehaviorFaultState} returns this
 */
proto.bosdyn.api.BehaviorFaultState.prototype.clearFaultsList = function() {
  return this.setFaultsList([]);
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
proto.bosdyn.api.BehaviorFault.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.BehaviorFault.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.BehaviorFault} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.BehaviorFault.toObject = function(includeInstance, msg) {
  var f, obj = {
    behaviorFaultId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    onsetTimestamp: (f = msg.getOnsetTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    cause: jspb.Message.getFieldWithDefault(msg, 3, 0),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.bosdyn.api.BehaviorFault}
 */
proto.bosdyn.api.BehaviorFault.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.BehaviorFault;
  return proto.bosdyn.api.BehaviorFault.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.BehaviorFault} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.BehaviorFault}
 */
proto.bosdyn.api.BehaviorFault.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBehaviorFaultId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setOnsetTimestamp(value);
      break;
    case 3:
      var value = /** @type {!proto.bosdyn.api.BehaviorFault.Cause} */ (reader.readEnum());
      msg.setCause(value);
      break;
    case 4:
      var value = /** @type {!proto.bosdyn.api.BehaviorFault.Status} */ (reader.readEnum());
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
proto.bosdyn.api.BehaviorFault.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.BehaviorFault.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.BehaviorFault} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.BehaviorFault.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBehaviorFaultId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOnsetTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCause();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.BehaviorFault.Cause = {
  CAUSE_UNKNOWN: 0,
  CAUSE_FALL: 1,
  CAUSE_HARDWARE: 2,
  CAUSE_LEASE_TIMEOUT: 3
};

/**
 * @enum {number}
 */
proto.bosdyn.api.BehaviorFault.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_CLEARABLE: 1,
  STATUS_UNCLEARABLE: 2
};

/**
 * optional uint32 behavior_fault_id = 1;
 * @return {number}
 */
proto.bosdyn.api.BehaviorFault.prototype.getBehaviorFaultId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.BehaviorFault} returns this
 */
proto.bosdyn.api.BehaviorFault.prototype.setBehaviorFaultId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp onset_timestamp = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.BehaviorFault.prototype.getOnsetTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.BehaviorFault} returns this
*/
proto.bosdyn.api.BehaviorFault.prototype.setOnsetTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.BehaviorFault} returns this
 */
proto.bosdyn.api.BehaviorFault.prototype.clearOnsetTimestamp = function() {
  return this.setOnsetTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.BehaviorFault.prototype.hasOnsetTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Cause cause = 3;
 * @return {!proto.bosdyn.api.BehaviorFault.Cause}
 */
proto.bosdyn.api.BehaviorFault.prototype.getCause = function() {
  return /** @type {!proto.bosdyn.api.BehaviorFault.Cause} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bosdyn.api.BehaviorFault.Cause} value
 * @return {!proto.bosdyn.api.BehaviorFault} returns this
 */
proto.bosdyn.api.BehaviorFault.prototype.setCause = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Status status = 4;
 * @return {!proto.bosdyn.api.BehaviorFault.Status}
 */
proto.bosdyn.api.BehaviorFault.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.BehaviorFault.Status} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bosdyn.api.BehaviorFault.Status} value
 * @return {!proto.bosdyn.api.BehaviorFault} returns this
 */
proto.bosdyn.api.BehaviorFault.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.RobotMetrics.repeatedFields_ = [2];



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
proto.bosdyn.api.RobotMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.RobotMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.RobotMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    metricsList: jspb.Message.toObjectList(msg.getMetricsList(),
    bosdyn_api_parameter_pb.Parameter.toObject, includeInstance)
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
 * @return {!proto.bosdyn.api.RobotMetrics}
 */
proto.bosdyn.api.RobotMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.RobotMetrics;
  return proto.bosdyn.api.RobotMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.RobotMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.RobotMetrics}
 */
proto.bosdyn.api.RobotMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = new bosdyn_api_parameter_pb.Parameter;
      reader.readMessage(value,bosdyn_api_parameter_pb.Parameter.deserializeBinaryFromReader);
      msg.addMetrics(value);
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
proto.bosdyn.api.RobotMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.RobotMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.RobotMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      bosdyn_api_parameter_pb.Parameter.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.RobotMetrics.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.RobotMetrics} returns this
*/
proto.bosdyn.api.RobotMetrics.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotMetrics} returns this
 */
proto.bosdyn.api.RobotMetrics.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotMetrics.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Parameter metrics = 2;
 * @return {!Array<!proto.bosdyn.api.Parameter>}
 */
proto.bosdyn.api.RobotMetrics.prototype.getMetricsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.Parameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_parameter_pb.Parameter, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.Parameter>} value
 * @return {!proto.bosdyn.api.RobotMetrics} returns this
*/
proto.bosdyn.api.RobotMetrics.prototype.setMetricsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.Parameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.Parameter}
 */
proto.bosdyn.api.RobotMetrics.prototype.addMetrics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.Parameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.RobotMetrics} returns this
 */
proto.bosdyn.api.RobotMetrics.prototype.clearMetricsList = function() {
  return this.setMetricsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.CommsState.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.bosdyn.api.CommsState.StateCase = {
  STATE_NOT_SET: 0,
  WIFI_STATE: 2
};

/**
 * @return {proto.bosdyn.api.CommsState.StateCase}
 */
proto.bosdyn.api.CommsState.prototype.getStateCase = function() {
  return /** @type {proto.bosdyn.api.CommsState.StateCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.CommsState.oneofGroups_[0]));
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
proto.bosdyn.api.CommsState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.CommsState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.CommsState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.CommsState.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    wifiState: (f = msg.getWifiState()) && proto.bosdyn.api.WiFiState.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.CommsState}
 */
proto.bosdyn.api.CommsState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.CommsState;
  return proto.bosdyn.api.CommsState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.CommsState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.CommsState}
 */
proto.bosdyn.api.CommsState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.WiFiState;
      reader.readMessage(value,proto.bosdyn.api.WiFiState.deserializeBinaryFromReader);
      msg.setWifiState(value);
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
proto.bosdyn.api.CommsState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.CommsState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.CommsState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.CommsState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getWifiState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.WiFiState.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.CommsState.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.CommsState} returns this
*/
proto.bosdyn.api.CommsState.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.CommsState} returns this
 */
proto.bosdyn.api.CommsState.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.CommsState.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional WiFiState wifi_state = 2;
 * @return {?proto.bosdyn.api.WiFiState}
 */
proto.bosdyn.api.CommsState.prototype.getWifiState = function() {
  return /** @type{?proto.bosdyn.api.WiFiState} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.WiFiState, 2));
};


/**
 * @param {?proto.bosdyn.api.WiFiState|undefined} value
 * @return {!proto.bosdyn.api.CommsState} returns this
*/
proto.bosdyn.api.CommsState.prototype.setWifiState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bosdyn.api.CommsState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.CommsState} returns this
 */
proto.bosdyn.api.CommsState.prototype.clearWifiState = function() {
  return this.setWifiState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.CommsState.prototype.hasWifiState = function() {
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
proto.bosdyn.api.WiFiState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.WiFiState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.WiFiState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.WiFiState.toObject = function(includeInstance, msg) {
  var f, obj = {
    currentMode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    essid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.bosdyn.api.WiFiState}
 */
proto.bosdyn.api.WiFiState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.WiFiState;
  return proto.bosdyn.api.WiFiState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.WiFiState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.WiFiState}
 */
proto.bosdyn.api.WiFiState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.WiFiState.Mode} */ (reader.readEnum());
      msg.setCurrentMode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEssid(value);
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
proto.bosdyn.api.WiFiState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.WiFiState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.WiFiState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.WiFiState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrentMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEssid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.WiFiState.Mode = {
  MODE_UNKNOWN: 0,
  MODE_ACCESS_POINT: 1,
  MODE_CLIENT: 2
};

/**
 * optional Mode current_mode = 1;
 * @return {!proto.bosdyn.api.WiFiState.Mode}
 */
proto.bosdyn.api.WiFiState.prototype.getCurrentMode = function() {
  return /** @type {!proto.bosdyn.api.WiFiState.Mode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.WiFiState.Mode} value
 * @return {!proto.bosdyn.api.WiFiState} returns this
 */
proto.bosdyn.api.WiFiState.prototype.setCurrentMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string essid = 2;
 * @return {string}
 */
proto.bosdyn.api.WiFiState.prototype.getEssid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.WiFiState} returns this
 */
proto.bosdyn.api.WiFiState.prototype.setEssid = function(value) {
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
proto.bosdyn.api.FootState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.FootState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.FootState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.FootState.toObject = function(includeInstance, msg) {
  var f, obj = {
    footPositionRtBody: (f = msg.getFootPositionRtBody()) && bosdyn_api_geometry_pb.Vec3.toObject(includeInstance, f),
    contact: jspb.Message.getFieldWithDefault(msg, 2, 0),
    terrain: (f = msg.getTerrain()) && proto.bosdyn.api.FootState.TerrainState.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.FootState}
 */
proto.bosdyn.api.FootState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.FootState;
  return proto.bosdyn.api.FootState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.FootState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.FootState}
 */
proto.bosdyn.api.FootState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.Vec3;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3.deserializeBinaryFromReader);
      msg.setFootPositionRtBody(value);
      break;
    case 2:
      var value = /** @type {!proto.bosdyn.api.FootState.Contact} */ (reader.readEnum());
      msg.setContact(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.FootState.TerrainState;
      reader.readMessage(value,proto.bosdyn.api.FootState.TerrainState.deserializeBinaryFromReader);
      msg.setTerrain(value);
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
proto.bosdyn.api.FootState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.FootState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.FootState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.FootState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFootPositionRtBody();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.Vec3.serializeBinaryToWriter
    );
  }
  f = message.getContact();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTerrain();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.FootState.TerrainState.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.FootState.Contact = {
  CONTACT_UNKNOWN: 0,
  CONTACT_MADE: 1,
  CONTACT_LOST: 2
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
proto.bosdyn.api.FootState.TerrainState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.FootState.TerrainState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.FootState.TerrainState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.FootState.TerrainState.toObject = function(includeInstance, msg) {
  var f, obj = {
    groundMuEst: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    frameName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    footSlipDistanceRtFrame: (f = msg.getFootSlipDistanceRtFrame()) && bosdyn_api_geometry_pb.Vec3.toObject(includeInstance, f),
    footSlipVelocityRtFrame: (f = msg.getFootSlipVelocityRtFrame()) && bosdyn_api_geometry_pb.Vec3.toObject(includeInstance, f),
    groundContactNormalRtFrame: (f = msg.getGroundContactNormalRtFrame()) && bosdyn_api_geometry_pb.Vec3.toObject(includeInstance, f),
    visualSurfaceGroundPenetrationMean: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    visualSurfaceGroundPenetrationStd: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
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
 * @return {!proto.bosdyn.api.FootState.TerrainState}
 */
proto.bosdyn.api.FootState.TerrainState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.FootState.TerrainState;
  return proto.bosdyn.api.FootState.TerrainState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.FootState.TerrainState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.FootState.TerrainState}
 */
proto.bosdyn.api.FootState.TerrainState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setGroundMuEst(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameName(value);
      break;
    case 3:
      var value = new bosdyn_api_geometry_pb.Vec3;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3.deserializeBinaryFromReader);
      msg.setFootSlipDistanceRtFrame(value);
      break;
    case 4:
      var value = new bosdyn_api_geometry_pb.Vec3;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3.deserializeBinaryFromReader);
      msg.setFootSlipVelocityRtFrame(value);
      break;
    case 5:
      var value = new bosdyn_api_geometry_pb.Vec3;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3.deserializeBinaryFromReader);
      msg.setGroundContactNormalRtFrame(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVisualSurfaceGroundPenetrationMean(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVisualSurfaceGroundPenetrationStd(value);
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
proto.bosdyn.api.FootState.TerrainState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.FootState.TerrainState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.FootState.TerrainState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.FootState.TerrainState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroundMuEst();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getFrameName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFootSlipDistanceRtFrame();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_geometry_pb.Vec3.serializeBinaryToWriter
    );
  }
  f = message.getFootSlipVelocityRtFrame();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_geometry_pb.Vec3.serializeBinaryToWriter
    );
  }
  f = message.getGroundContactNormalRtFrame();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_geometry_pb.Vec3.serializeBinaryToWriter
    );
  }
  f = message.getVisualSurfaceGroundPenetrationMean();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getVisualSurfaceGroundPenetrationStd();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
};


/**
 * optional double ground_mu_est = 1;
 * @return {number}
 */
proto.bosdyn.api.FootState.TerrainState.prototype.getGroundMuEst = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.FootState.TerrainState} returns this
 */
proto.bosdyn.api.FootState.TerrainState.prototype.setGroundMuEst = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string frame_name = 2;
 * @return {string}
 */
proto.bosdyn.api.FootState.TerrainState.prototype.getFrameName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.FootState.TerrainState} returns this
 */
proto.bosdyn.api.FootState.TerrainState.prototype.setFrameName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Vec3 foot_slip_distance_rt_frame = 3;
 * @return {?proto.bosdyn.api.Vec3}
 */
proto.bosdyn.api.FootState.TerrainState.prototype.getFootSlipDistanceRtFrame = function() {
  return /** @type{?proto.bosdyn.api.Vec3} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3, 3));
};


/**
 * @param {?proto.bosdyn.api.Vec3|undefined} value
 * @return {!proto.bosdyn.api.FootState.TerrainState} returns this
*/
proto.bosdyn.api.FootState.TerrainState.prototype.setFootSlipDistanceRtFrame = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.FootState.TerrainState} returns this
 */
proto.bosdyn.api.FootState.TerrainState.prototype.clearFootSlipDistanceRtFrame = function() {
  return this.setFootSlipDistanceRtFrame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.FootState.TerrainState.prototype.hasFootSlipDistanceRtFrame = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Vec3 foot_slip_velocity_rt_frame = 4;
 * @return {?proto.bosdyn.api.Vec3}
 */
proto.bosdyn.api.FootState.TerrainState.prototype.getFootSlipVelocityRtFrame = function() {
  return /** @type{?proto.bosdyn.api.Vec3} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3, 4));
};


/**
 * @param {?proto.bosdyn.api.Vec3|undefined} value
 * @return {!proto.bosdyn.api.FootState.TerrainState} returns this
*/
proto.bosdyn.api.FootState.TerrainState.prototype.setFootSlipVelocityRtFrame = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.FootState.TerrainState} returns this
 */
proto.bosdyn.api.FootState.TerrainState.prototype.clearFootSlipVelocityRtFrame = function() {
  return this.setFootSlipVelocityRtFrame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.FootState.TerrainState.prototype.hasFootSlipVelocityRtFrame = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Vec3 ground_contact_normal_rt_frame = 5;
 * @return {?proto.bosdyn.api.Vec3}
 */
proto.bosdyn.api.FootState.TerrainState.prototype.getGroundContactNormalRtFrame = function() {
  return /** @type{?proto.bosdyn.api.Vec3} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3, 5));
};


/**
 * @param {?proto.bosdyn.api.Vec3|undefined} value
 * @return {!proto.bosdyn.api.FootState.TerrainState} returns this
*/
proto.bosdyn.api.FootState.TerrainState.prototype.setGroundContactNormalRtFrame = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.FootState.TerrainState} returns this
 */
proto.bosdyn.api.FootState.TerrainState.prototype.clearGroundContactNormalRtFrame = function() {
  return this.setGroundContactNormalRtFrame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.FootState.TerrainState.prototype.hasGroundContactNormalRtFrame = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double visual_surface_ground_penetration_mean = 6;
 * @return {number}
 */
proto.bosdyn.api.FootState.TerrainState.prototype.getVisualSurfaceGroundPenetrationMean = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.FootState.TerrainState} returns this
 */
proto.bosdyn.api.FootState.TerrainState.prototype.setVisualSurfaceGroundPenetrationMean = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double visual_surface_ground_penetration_std = 7;
 * @return {number}
 */
proto.bosdyn.api.FootState.TerrainState.prototype.getVisualSurfaceGroundPenetrationStd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.FootState.TerrainState} returns this
 */
proto.bosdyn.api.FootState.TerrainState.prototype.setVisualSurfaceGroundPenetrationStd = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional Vec3 foot_position_rt_body = 1;
 * @return {?proto.bosdyn.api.Vec3}
 */
proto.bosdyn.api.FootState.prototype.getFootPositionRtBody = function() {
  return /** @type{?proto.bosdyn.api.Vec3} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3, 1));
};


/**
 * @param {?proto.bosdyn.api.Vec3|undefined} value
 * @return {!proto.bosdyn.api.FootState} returns this
*/
proto.bosdyn.api.FootState.prototype.setFootPositionRtBody = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.FootState} returns this
 */
proto.bosdyn.api.FootState.prototype.clearFootPositionRtBody = function() {
  return this.setFootPositionRtBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.FootState.prototype.hasFootPositionRtBody = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Contact contact = 2;
 * @return {!proto.bosdyn.api.FootState.Contact}
 */
proto.bosdyn.api.FootState.prototype.getContact = function() {
  return /** @type {!proto.bosdyn.api.FootState.Contact} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.FootState.Contact} value
 * @return {!proto.bosdyn.api.FootState} returns this
 */
proto.bosdyn.api.FootState.prototype.setContact = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional TerrainState terrain = 3;
 * @return {?proto.bosdyn.api.FootState.TerrainState}
 */
proto.bosdyn.api.FootState.prototype.getTerrain = function() {
  return /** @type{?proto.bosdyn.api.FootState.TerrainState} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.FootState.TerrainState, 3));
};


/**
 * @param {?proto.bosdyn.api.FootState.TerrainState|undefined} value
 * @return {!proto.bosdyn.api.FootState} returns this
*/
proto.bosdyn.api.FootState.prototype.setTerrain = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.FootState} returns this
 */
proto.bosdyn.api.FootState.prototype.clearTerrain = function() {
  return this.setTerrain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.FootState.prototype.hasTerrain = function() {
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
proto.bosdyn.api.ManipulatorState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ManipulatorState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ManipulatorState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ManipulatorState.toObject = function(includeInstance, msg) {
  var f, obj = {
    gripperOpenPercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    isGripperHoldingItem: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    estimatedEndEffectorForceInHand: (f = msg.getEstimatedEndEffectorForceInHand()) && bosdyn_api_geometry_pb.Vec3.toObject(includeInstance, f),
    stowState: jspb.Message.getFieldWithDefault(msg, 9, 0),
    velocityOfHandInVision: (f = msg.getVelocityOfHandInVision()) && bosdyn_api_geometry_pb.SE3Velocity.toObject(includeInstance, f),
    velocityOfHandInOdom: (f = msg.getVelocityOfHandInOdom()) && bosdyn_api_geometry_pb.SE3Velocity.toObject(includeInstance, f),
    carryState: jspb.Message.getFieldWithDefault(msg, 16, 0)
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
 * @return {!proto.bosdyn.api.ManipulatorState}
 */
proto.bosdyn.api.ManipulatorState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ManipulatorState;
  return proto.bosdyn.api.ManipulatorState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ManipulatorState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ManipulatorState}
 */
proto.bosdyn.api.ManipulatorState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setGripperOpenPercentage(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsGripperHoldingItem(value);
      break;
    case 13:
      var value = new bosdyn_api_geometry_pb.Vec3;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3.deserializeBinaryFromReader);
      msg.setEstimatedEndEffectorForceInHand(value);
      break;
    case 9:
      var value = /** @type {!proto.bosdyn.api.ManipulatorState.StowState} */ (reader.readEnum());
      msg.setStowState(value);
      break;
    case 14:
      var value = new bosdyn_api_geometry_pb.SE3Velocity;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Velocity.deserializeBinaryFromReader);
      msg.setVelocityOfHandInVision(value);
      break;
    case 15:
      var value = new bosdyn_api_geometry_pb.SE3Velocity;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Velocity.deserializeBinaryFromReader);
      msg.setVelocityOfHandInOdom(value);
      break;
    case 16:
      var value = /** @type {!proto.bosdyn.api.ManipulatorState.CarryState} */ (reader.readEnum());
      msg.setCarryState(value);
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
proto.bosdyn.api.ManipulatorState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ManipulatorState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ManipulatorState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ManipulatorState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGripperOpenPercentage();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getIsGripperHoldingItem();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getEstimatedEndEffectorForceInHand();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      bosdyn_api_geometry_pb.Vec3.serializeBinaryToWriter
    );
  }
  f = message.getStowState();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getVelocityOfHandInVision();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      bosdyn_api_geometry_pb.SE3Velocity.serializeBinaryToWriter
    );
  }
  f = message.getVelocityOfHandInOdom();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      bosdyn_api_geometry_pb.SE3Velocity.serializeBinaryToWriter
    );
  }
  f = message.getCarryState();
  if (f !== 0.0) {
    writer.writeEnum(
      16,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.ManipulatorState.StowState = {
  STOWSTATE_UNKNOWN: 0,
  STOWSTATE_STOWED: 1,
  STOWSTATE_DEPLOYED: 2
};

/**
 * @enum {number}
 */
proto.bosdyn.api.ManipulatorState.CarryState = {
  CARRY_STATE_UNKNOWN: 0,
  CARRY_STATE_NOT_CARRIABLE: 1,
  CARRY_STATE_CARRIABLE: 2,
  CARRY_STATE_CARRIABLE_AND_STOWABLE: 3
};

/**
 * optional double gripper_open_percentage = 12;
 * @return {number}
 */
proto.bosdyn.api.ManipulatorState.prototype.getGripperOpenPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.ManipulatorState} returns this
 */
proto.bosdyn.api.ManipulatorState.prototype.setGripperOpenPercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional bool is_gripper_holding_item = 6;
 * @return {boolean}
 */
proto.bosdyn.api.ManipulatorState.prototype.getIsGripperHoldingItem = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.ManipulatorState} returns this
 */
proto.bosdyn.api.ManipulatorState.prototype.setIsGripperHoldingItem = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional Vec3 estimated_end_effector_force_in_hand = 13;
 * @return {?proto.bosdyn.api.Vec3}
 */
proto.bosdyn.api.ManipulatorState.prototype.getEstimatedEndEffectorForceInHand = function() {
  return /** @type{?proto.bosdyn.api.Vec3} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3, 13));
};


/**
 * @param {?proto.bosdyn.api.Vec3|undefined} value
 * @return {!proto.bosdyn.api.ManipulatorState} returns this
*/
proto.bosdyn.api.ManipulatorState.prototype.setEstimatedEndEffectorForceInHand = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ManipulatorState} returns this
 */
proto.bosdyn.api.ManipulatorState.prototype.clearEstimatedEndEffectorForceInHand = function() {
  return this.setEstimatedEndEffectorForceInHand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ManipulatorState.prototype.hasEstimatedEndEffectorForceInHand = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional StowState stow_state = 9;
 * @return {!proto.bosdyn.api.ManipulatorState.StowState}
 */
proto.bosdyn.api.ManipulatorState.prototype.getStowState = function() {
  return /** @type {!proto.bosdyn.api.ManipulatorState.StowState} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.bosdyn.api.ManipulatorState.StowState} value
 * @return {!proto.bosdyn.api.ManipulatorState} returns this
 */
proto.bosdyn.api.ManipulatorState.prototype.setStowState = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional SE3Velocity velocity_of_hand_in_vision = 14;
 * @return {?proto.bosdyn.api.SE3Velocity}
 */
proto.bosdyn.api.ManipulatorState.prototype.getVelocityOfHandInVision = function() {
  return /** @type{?proto.bosdyn.api.SE3Velocity} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Velocity, 14));
};


/**
 * @param {?proto.bosdyn.api.SE3Velocity|undefined} value
 * @return {!proto.bosdyn.api.ManipulatorState} returns this
*/
proto.bosdyn.api.ManipulatorState.prototype.setVelocityOfHandInVision = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ManipulatorState} returns this
 */
proto.bosdyn.api.ManipulatorState.prototype.clearVelocityOfHandInVision = function() {
  return this.setVelocityOfHandInVision(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ManipulatorState.prototype.hasVelocityOfHandInVision = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional SE3Velocity velocity_of_hand_in_odom = 15;
 * @return {?proto.bosdyn.api.SE3Velocity}
 */
proto.bosdyn.api.ManipulatorState.prototype.getVelocityOfHandInOdom = function() {
  return /** @type{?proto.bosdyn.api.SE3Velocity} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Velocity, 15));
};


/**
 * @param {?proto.bosdyn.api.SE3Velocity|undefined} value
 * @return {!proto.bosdyn.api.ManipulatorState} returns this
*/
proto.bosdyn.api.ManipulatorState.prototype.setVelocityOfHandInOdom = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ManipulatorState} returns this
 */
proto.bosdyn.api.ManipulatorState.prototype.clearVelocityOfHandInOdom = function() {
  return this.setVelocityOfHandInOdom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ManipulatorState.prototype.hasVelocityOfHandInOdom = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional CarryState carry_state = 16;
 * @return {!proto.bosdyn.api.ManipulatorState.CarryState}
 */
proto.bosdyn.api.ManipulatorState.prototype.getCarryState = function() {
  return /** @type {!proto.bosdyn.api.ManipulatorState.CarryState} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {!proto.bosdyn.api.ManipulatorState.CarryState} value
 * @return {!proto.bosdyn.api.ManipulatorState} returns this
 */
proto.bosdyn.api.ManipulatorState.prototype.setCarryState = function(value) {
  return jspb.Message.setProto3EnumField(this, 16, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.ServiceFaultState.repeatedFields_ = [1,2];



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
proto.bosdyn.api.ServiceFaultState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ServiceFaultState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ServiceFaultState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ServiceFaultState.toObject = function(includeInstance, msg) {
  var f, obj = {
    faultsList: jspb.Message.toObjectList(msg.getFaultsList(),
    bosdyn_api_service_fault_pb.ServiceFault.toObject, includeInstance),
    historicalFaultsList: jspb.Message.toObjectList(msg.getHistoricalFaultsList(),
    bosdyn_api_service_fault_pb.ServiceFault.toObject, includeInstance),
    aggregatedMap: (f = msg.getAggregatedMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.bosdyn.api.ServiceFaultState}
 */
proto.bosdyn.api.ServiceFaultState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ServiceFaultState;
  return proto.bosdyn.api.ServiceFaultState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ServiceFaultState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ServiceFaultState}
 */
proto.bosdyn.api.ServiceFaultState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_service_fault_pb.ServiceFault;
      reader.readMessage(value,bosdyn_api_service_fault_pb.ServiceFault.deserializeBinaryFromReader);
      msg.addFaults(value);
      break;
    case 2:
      var value = new bosdyn_api_service_fault_pb.ServiceFault;
      reader.readMessage(value,bosdyn_api_service_fault_pb.ServiceFault.deserializeBinaryFromReader);
      msg.addHistoricalFaults(value);
      break;
    case 3:
      var value = msg.getAggregatedMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readEnum, null, "", 0);
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
proto.bosdyn.api.ServiceFaultState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ServiceFaultState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ServiceFaultState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ServiceFaultState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFaultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      bosdyn_api_service_fault_pb.ServiceFault.serializeBinaryToWriter
    );
  }
  f = message.getHistoricalFaultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      bosdyn_api_service_fault_pb.ServiceFault.serializeBinaryToWriter
    );
  }
  f = message.getAggregatedMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeEnum);
  }
};


/**
 * repeated ServiceFault faults = 1;
 * @return {!Array<!proto.bosdyn.api.ServiceFault>}
 */
proto.bosdyn.api.ServiceFaultState.prototype.getFaultsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.ServiceFault>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_service_fault_pb.ServiceFault, 1));
};


/**
 * @param {!Array<!proto.bosdyn.api.ServiceFault>} value
 * @return {!proto.bosdyn.api.ServiceFaultState} returns this
*/
proto.bosdyn.api.ServiceFaultState.prototype.setFaultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bosdyn.api.ServiceFault=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.ServiceFault}
 */
proto.bosdyn.api.ServiceFaultState.prototype.addFaults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bosdyn.api.ServiceFault, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.ServiceFaultState} returns this
 */
proto.bosdyn.api.ServiceFaultState.prototype.clearFaultsList = function() {
  return this.setFaultsList([]);
};


/**
 * repeated ServiceFault historical_faults = 2;
 * @return {!Array<!proto.bosdyn.api.ServiceFault>}
 */
proto.bosdyn.api.ServiceFaultState.prototype.getHistoricalFaultsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.ServiceFault>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_service_fault_pb.ServiceFault, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.ServiceFault>} value
 * @return {!proto.bosdyn.api.ServiceFaultState} returns this
*/
proto.bosdyn.api.ServiceFaultState.prototype.setHistoricalFaultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.ServiceFault=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.ServiceFault}
 */
proto.bosdyn.api.ServiceFaultState.prototype.addHistoricalFaults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.ServiceFault, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.ServiceFaultState} returns this
 */
proto.bosdyn.api.ServiceFaultState.prototype.clearHistoricalFaultsList = function() {
  return this.setHistoricalFaultsList([]);
};


/**
 * map<string, ServiceFault.Severity> aggregated = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bosdyn.api.ServiceFault.Severity>}
 */
proto.bosdyn.api.ServiceFaultState.prototype.getAggregatedMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bosdyn.api.ServiceFault.Severity>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bosdyn.api.ServiceFaultState} returns this
 */
proto.bosdyn.api.ServiceFaultState.prototype.clearAggregatedMap = function() {
  this.getAggregatedMap().clear();
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
proto.bosdyn.api.TerrainState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.TerrainState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.TerrainState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.TerrainState.toObject = function(includeInstance, msg) {
  var f, obj = {
    isUnsafeToSit: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.bosdyn.api.TerrainState}
 */
proto.bosdyn.api.TerrainState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.TerrainState;
  return proto.bosdyn.api.TerrainState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.TerrainState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.TerrainState}
 */
proto.bosdyn.api.TerrainState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsUnsafeToSit(value);
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
proto.bosdyn.api.TerrainState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.TerrainState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.TerrainState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.TerrainState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsUnsafeToSit();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_unsafe_to_sit = 1;
 * @return {boolean}
 */
proto.bosdyn.api.TerrainState.prototype.getIsUnsafeToSit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.TerrainState} returns this
 */
proto.bosdyn.api.TerrainState.prototype.setIsUnsafeToSit = function(value) {
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
proto.bosdyn.api.RobotStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.RobotStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.RobotStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.RobotStateRequest}
 */
proto.bosdyn.api.RobotStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.RobotStateRequest;
  return proto.bosdyn.api.RobotStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.RobotStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.RobotStateRequest}
 */
proto.bosdyn.api.RobotStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_header_pb.RequestHeader;
      reader.readMessage(value,bosdyn_api_header_pb.RequestHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
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
proto.bosdyn.api.RobotStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.RobotStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.RobotStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
};


/**
 * optional RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.RobotStateRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.RobotStateRequest} returns this
*/
proto.bosdyn.api.RobotStateRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotStateRequest} returns this
 */
proto.bosdyn.api.RobotStateRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotStateRequest.prototype.hasHeader = function() {
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
proto.bosdyn.api.RobotStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.RobotStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.RobotStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    robotState: (f = msg.getRobotState()) && proto.bosdyn.api.RobotState.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.RobotStateResponse}
 */
proto.bosdyn.api.RobotStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.RobotStateResponse;
  return proto.bosdyn.api.RobotStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.RobotStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.RobotStateResponse}
 */
proto.bosdyn.api.RobotStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_header_pb.ResponseHeader;
      reader.readMessage(value,bosdyn_api_header_pb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.RobotState;
      reader.readMessage(value,proto.bosdyn.api.RobotState.deserializeBinaryFromReader);
      msg.setRobotState(value);
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
proto.bosdyn.api.RobotStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.RobotStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.RobotStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getRobotState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.RobotState.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.RobotStateResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.RobotStateResponse} returns this
*/
proto.bosdyn.api.RobotStateResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotStateResponse} returns this
 */
proto.bosdyn.api.RobotStateResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotStateResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RobotState robot_state = 2;
 * @return {?proto.bosdyn.api.RobotState}
 */
proto.bosdyn.api.RobotStateResponse.prototype.getRobotState = function() {
  return /** @type{?proto.bosdyn.api.RobotState} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.RobotState, 2));
};


/**
 * @param {?proto.bosdyn.api.RobotState|undefined} value
 * @return {!proto.bosdyn.api.RobotStateResponse} returns this
*/
proto.bosdyn.api.RobotStateResponse.prototype.setRobotState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotStateResponse} returns this
 */
proto.bosdyn.api.RobotStateResponse.prototype.clearRobotState = function() {
  return this.setRobotState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotStateResponse.prototype.hasRobotState = function() {
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
proto.bosdyn.api.RobotMetricsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.RobotMetricsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.RobotMetricsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotMetricsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.RobotMetricsRequest}
 */
proto.bosdyn.api.RobotMetricsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.RobotMetricsRequest;
  return proto.bosdyn.api.RobotMetricsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.RobotMetricsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.RobotMetricsRequest}
 */
proto.bosdyn.api.RobotMetricsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_header_pb.RequestHeader;
      reader.readMessage(value,bosdyn_api_header_pb.RequestHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
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
proto.bosdyn.api.RobotMetricsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.RobotMetricsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.RobotMetricsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotMetricsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
};


/**
 * optional RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.RobotMetricsRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.RobotMetricsRequest} returns this
*/
proto.bosdyn.api.RobotMetricsRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotMetricsRequest} returns this
 */
proto.bosdyn.api.RobotMetricsRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotMetricsRequest.prototype.hasHeader = function() {
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
proto.bosdyn.api.RobotMetricsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.RobotMetricsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.RobotMetricsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotMetricsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    robotMetrics: (f = msg.getRobotMetrics()) && proto.bosdyn.api.RobotMetrics.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.RobotMetricsResponse}
 */
proto.bosdyn.api.RobotMetricsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.RobotMetricsResponse;
  return proto.bosdyn.api.RobotMetricsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.RobotMetricsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.RobotMetricsResponse}
 */
proto.bosdyn.api.RobotMetricsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_header_pb.ResponseHeader;
      reader.readMessage(value,bosdyn_api_header_pb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.RobotMetrics;
      reader.readMessage(value,proto.bosdyn.api.RobotMetrics.deserializeBinaryFromReader);
      msg.setRobotMetrics(value);
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
proto.bosdyn.api.RobotMetricsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.RobotMetricsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.RobotMetricsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotMetricsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getRobotMetrics();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.RobotMetrics.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.RobotMetricsResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.RobotMetricsResponse} returns this
*/
proto.bosdyn.api.RobotMetricsResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotMetricsResponse} returns this
 */
proto.bosdyn.api.RobotMetricsResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotMetricsResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RobotMetrics robot_metrics = 2;
 * @return {?proto.bosdyn.api.RobotMetrics}
 */
proto.bosdyn.api.RobotMetricsResponse.prototype.getRobotMetrics = function() {
  return /** @type{?proto.bosdyn.api.RobotMetrics} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.RobotMetrics, 2));
};


/**
 * @param {?proto.bosdyn.api.RobotMetrics|undefined} value
 * @return {!proto.bosdyn.api.RobotMetricsResponse} returns this
*/
proto.bosdyn.api.RobotMetricsResponse.prototype.setRobotMetrics = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotMetricsResponse} returns this
 */
proto.bosdyn.api.RobotMetricsResponse.prototype.clearRobotMetrics = function() {
  return this.setRobotMetrics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotMetricsResponse.prototype.hasRobotMetrics = function() {
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
proto.bosdyn.api.RobotHardwareConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.RobotHardwareConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.RobotHardwareConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotHardwareConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.RobotHardwareConfigurationRequest}
 */
proto.bosdyn.api.RobotHardwareConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.RobotHardwareConfigurationRequest;
  return proto.bosdyn.api.RobotHardwareConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.RobotHardwareConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.RobotHardwareConfigurationRequest}
 */
proto.bosdyn.api.RobotHardwareConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_header_pb.RequestHeader;
      reader.readMessage(value,bosdyn_api_header_pb.RequestHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
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
proto.bosdyn.api.RobotHardwareConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.RobotHardwareConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.RobotHardwareConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotHardwareConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
};


/**
 * optional RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.RobotHardwareConfigurationRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.RobotHardwareConfigurationRequest} returns this
*/
proto.bosdyn.api.RobotHardwareConfigurationRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotHardwareConfigurationRequest} returns this
 */
proto.bosdyn.api.RobotHardwareConfigurationRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotHardwareConfigurationRequest.prototype.hasHeader = function() {
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
proto.bosdyn.api.RobotHardwareConfigurationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.RobotHardwareConfigurationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.RobotHardwareConfigurationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotHardwareConfigurationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    hardwareConfiguration: (f = msg.getHardwareConfiguration()) && proto.bosdyn.api.HardwareConfiguration.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.RobotHardwareConfigurationResponse}
 */
proto.bosdyn.api.RobotHardwareConfigurationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.RobotHardwareConfigurationResponse;
  return proto.bosdyn.api.RobotHardwareConfigurationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.RobotHardwareConfigurationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.RobotHardwareConfigurationResponse}
 */
proto.bosdyn.api.RobotHardwareConfigurationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_header_pb.ResponseHeader;
      reader.readMessage(value,bosdyn_api_header_pb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.HardwareConfiguration;
      reader.readMessage(value,proto.bosdyn.api.HardwareConfiguration.deserializeBinaryFromReader);
      msg.setHardwareConfiguration(value);
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
proto.bosdyn.api.RobotHardwareConfigurationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.RobotHardwareConfigurationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.RobotHardwareConfigurationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotHardwareConfigurationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getHardwareConfiguration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.HardwareConfiguration.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.RobotHardwareConfigurationResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.RobotHardwareConfigurationResponse} returns this
*/
proto.bosdyn.api.RobotHardwareConfigurationResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotHardwareConfigurationResponse} returns this
 */
proto.bosdyn.api.RobotHardwareConfigurationResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotHardwareConfigurationResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HardwareConfiguration hardware_configuration = 2;
 * @return {?proto.bosdyn.api.HardwareConfiguration}
 */
proto.bosdyn.api.RobotHardwareConfigurationResponse.prototype.getHardwareConfiguration = function() {
  return /** @type{?proto.bosdyn.api.HardwareConfiguration} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.HardwareConfiguration, 2));
};


/**
 * @param {?proto.bosdyn.api.HardwareConfiguration|undefined} value
 * @return {!proto.bosdyn.api.RobotHardwareConfigurationResponse} returns this
*/
proto.bosdyn.api.RobotHardwareConfigurationResponse.prototype.setHardwareConfiguration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotHardwareConfigurationResponse} returns this
 */
proto.bosdyn.api.RobotHardwareConfigurationResponse.prototype.clearHardwareConfiguration = function() {
  return this.setHardwareConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotHardwareConfigurationResponse.prototype.hasHardwareConfiguration = function() {
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
proto.bosdyn.api.RobotLinkModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.RobotLinkModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.RobotLinkModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotLinkModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    linkName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.bosdyn.api.RobotLinkModelRequest}
 */
proto.bosdyn.api.RobotLinkModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.RobotLinkModelRequest;
  return proto.bosdyn.api.RobotLinkModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.RobotLinkModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.RobotLinkModelRequest}
 */
proto.bosdyn.api.RobotLinkModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_header_pb.RequestHeader;
      reader.readMessage(value,bosdyn_api_header_pb.RequestHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLinkName(value);
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
proto.bosdyn.api.RobotLinkModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.RobotLinkModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.RobotLinkModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotLinkModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getLinkName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.RobotLinkModelRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.RobotLinkModelRequest} returns this
*/
proto.bosdyn.api.RobotLinkModelRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotLinkModelRequest} returns this
 */
proto.bosdyn.api.RobotLinkModelRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotLinkModelRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string link_name = 2;
 * @return {string}
 */
proto.bosdyn.api.RobotLinkModelRequest.prototype.getLinkName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.RobotLinkModelRequest} returns this
 */
proto.bosdyn.api.RobotLinkModelRequest.prototype.setLinkName = function(value) {
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
proto.bosdyn.api.RobotLinkModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.RobotLinkModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.RobotLinkModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotLinkModelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    linkModel: (f = msg.getLinkModel()) && proto.bosdyn.api.Skeleton.Link.ObjModel.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.RobotLinkModelResponse}
 */
proto.bosdyn.api.RobotLinkModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.RobotLinkModelResponse;
  return proto.bosdyn.api.RobotLinkModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.RobotLinkModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.RobotLinkModelResponse}
 */
proto.bosdyn.api.RobotLinkModelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_header_pb.ResponseHeader;
      reader.readMessage(value,bosdyn_api_header_pb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.Skeleton.Link.ObjModel;
      reader.readMessage(value,proto.bosdyn.api.Skeleton.Link.ObjModel.deserializeBinaryFromReader);
      msg.setLinkModel(value);
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
proto.bosdyn.api.RobotLinkModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.RobotLinkModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.RobotLinkModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotLinkModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getLinkModel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.Skeleton.Link.ObjModel.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.RobotLinkModelResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.RobotLinkModelResponse} returns this
*/
proto.bosdyn.api.RobotLinkModelResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotLinkModelResponse} returns this
 */
proto.bosdyn.api.RobotLinkModelResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotLinkModelResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Skeleton.Link.ObjModel link_model = 2;
 * @return {?proto.bosdyn.api.Skeleton.Link.ObjModel}
 */
proto.bosdyn.api.RobotLinkModelResponse.prototype.getLinkModel = function() {
  return /** @type{?proto.bosdyn.api.Skeleton.Link.ObjModel} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Skeleton.Link.ObjModel, 2));
};


/**
 * @param {?proto.bosdyn.api.Skeleton.Link.ObjModel|undefined} value
 * @return {!proto.bosdyn.api.RobotLinkModelResponse} returns this
*/
proto.bosdyn.api.RobotLinkModelResponse.prototype.setLinkModel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RobotLinkModelResponse} returns this
 */
proto.bosdyn.api.RobotLinkModelResponse.prototype.clearLinkModel = function() {
  return this.setLinkModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RobotLinkModelResponse.prototype.hasLinkModel = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.RobotImpairedState.repeatedFields_ = [2,3,4];



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
proto.bosdyn.api.RobotImpairedState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.RobotImpairedState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.RobotImpairedState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotImpairedState.toObject = function(includeInstance, msg) {
  var f, obj = {
    impairedStatus: jspb.Message.getFieldWithDefault(msg, 1, 0),
    systemFaultsList: jspb.Message.toObjectList(msg.getSystemFaultsList(),
    proto.bosdyn.api.SystemFault.toObject, includeInstance),
    serviceFaultsList: jspb.Message.toObjectList(msg.getServiceFaultsList(),
    bosdyn_api_service_fault_pb.ServiceFault.toObject, includeInstance),
    behaviorFaultsList: jspb.Message.toObjectList(msg.getBehaviorFaultsList(),
    proto.bosdyn.api.BehaviorFault.toObject, includeInstance)
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
 * @return {!proto.bosdyn.api.RobotImpairedState}
 */
proto.bosdyn.api.RobotImpairedState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.RobotImpairedState;
  return proto.bosdyn.api.RobotImpairedState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.RobotImpairedState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.RobotImpairedState}
 */
proto.bosdyn.api.RobotImpairedState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.RobotImpairedState.ImpairedStatus} */ (reader.readEnum());
      msg.setImpairedStatus(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.SystemFault;
      reader.readMessage(value,proto.bosdyn.api.SystemFault.deserializeBinaryFromReader);
      msg.addSystemFaults(value);
      break;
    case 3:
      var value = new bosdyn_api_service_fault_pb.ServiceFault;
      reader.readMessage(value,bosdyn_api_service_fault_pb.ServiceFault.deserializeBinaryFromReader);
      msg.addServiceFaults(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.BehaviorFault;
      reader.readMessage(value,proto.bosdyn.api.BehaviorFault.deserializeBinaryFromReader);
      msg.addBehaviorFaults(value);
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
proto.bosdyn.api.RobotImpairedState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.RobotImpairedState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.RobotImpairedState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RobotImpairedState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImpairedStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSystemFaultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bosdyn.api.SystemFault.serializeBinaryToWriter
    );
  }
  f = message.getServiceFaultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      bosdyn_api_service_fault_pb.ServiceFault.serializeBinaryToWriter
    );
  }
  f = message.getBehaviorFaultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.bosdyn.api.BehaviorFault.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.RobotImpairedState.ImpairedStatus = {
  IMPAIRED_STATUS_UNKNOWN: 0,
  IMPAIRED_STATUS_OK: 1,
  IMPAIRED_STATUS_NO_ROBOT_DATA: 2,
  IMPAIRED_STATUS_SYSTEM_FAULT: 3,
  IMPAIRED_STATUS_NO_MOTOR_POWER: 4,
  IMPAIRED_STATUS_REMOTE_CLOUDS_NOT_WORKING: 5,
  IMPAIRED_STATUS_SERVICE_FAULT: 6,
  IMPAIRED_STATUS_BEHAVIOR_FAULT: 7,
  IMPAIRED_STATUS_ENTITY_DETECTOR_NOT_WORKING: 8
};

/**
 * optional ImpairedStatus impaired_status = 1;
 * @return {!proto.bosdyn.api.RobotImpairedState.ImpairedStatus}
 */
proto.bosdyn.api.RobotImpairedState.prototype.getImpairedStatus = function() {
  return /** @type {!proto.bosdyn.api.RobotImpairedState.ImpairedStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.RobotImpairedState.ImpairedStatus} value
 * @return {!proto.bosdyn.api.RobotImpairedState} returns this
 */
proto.bosdyn.api.RobotImpairedState.prototype.setImpairedStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated SystemFault system_faults = 2;
 * @return {!Array<!proto.bosdyn.api.SystemFault>}
 */
proto.bosdyn.api.RobotImpairedState.prototype.getSystemFaultsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.SystemFault>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.SystemFault, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.SystemFault>} value
 * @return {!proto.bosdyn.api.RobotImpairedState} returns this
*/
proto.bosdyn.api.RobotImpairedState.prototype.setSystemFaultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.SystemFault=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.SystemFault}
 */
proto.bosdyn.api.RobotImpairedState.prototype.addSystemFaults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.SystemFault, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.RobotImpairedState} returns this
 */
proto.bosdyn.api.RobotImpairedState.prototype.clearSystemFaultsList = function() {
  return this.setSystemFaultsList([]);
};


/**
 * repeated ServiceFault service_faults = 3;
 * @return {!Array<!proto.bosdyn.api.ServiceFault>}
 */
proto.bosdyn.api.RobotImpairedState.prototype.getServiceFaultsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.ServiceFault>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_service_fault_pb.ServiceFault, 3));
};


/**
 * @param {!Array<!proto.bosdyn.api.ServiceFault>} value
 * @return {!proto.bosdyn.api.RobotImpairedState} returns this
*/
proto.bosdyn.api.RobotImpairedState.prototype.setServiceFaultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bosdyn.api.ServiceFault=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.ServiceFault}
 */
proto.bosdyn.api.RobotImpairedState.prototype.addServiceFaults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bosdyn.api.ServiceFault, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.RobotImpairedState} returns this
 */
proto.bosdyn.api.RobotImpairedState.prototype.clearServiceFaultsList = function() {
  return this.setServiceFaultsList([]);
};


/**
 * repeated BehaviorFault behavior_faults = 4;
 * @return {!Array<!proto.bosdyn.api.BehaviorFault>}
 */
proto.bosdyn.api.RobotImpairedState.prototype.getBehaviorFaultsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.BehaviorFault>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.BehaviorFault, 4));
};


/**
 * @param {!Array<!proto.bosdyn.api.BehaviorFault>} value
 * @return {!proto.bosdyn.api.RobotImpairedState} returns this
*/
proto.bosdyn.api.RobotImpairedState.prototype.setBehaviorFaultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bosdyn.api.BehaviorFault=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.BehaviorFault}
 */
proto.bosdyn.api.RobotImpairedState.prototype.addBehaviorFaults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bosdyn.api.BehaviorFault, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.RobotImpairedState} returns this
 */
proto.bosdyn.api.RobotImpairedState.prototype.clearBehaviorFaultsList = function() {
  return this.setBehaviorFaultsList([]);
};


goog.object.extend(exports, proto.bosdyn.api);

// source: bosdyn/api/spot/choreography_params.proto
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

var bosdyn_api_geometry_pb = require('../../../bosdyn/api/geometry_pb.js');
goog.object.extend(proto, bosdyn_api_geometry_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.bosdyn.api.spot.AnimateParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.AnimatedCycleParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ArmMoveFrame', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ArmMoveParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.BodyHoldParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.BourreeParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ButtCircleParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.BuzzerNoteParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.BuzzerNoteParams.Note', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ChickenHeadParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ClapParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.Color', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.CrawlParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.CustomGaitCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.CustomGaitCommandLimits', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.CustomGaitParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.Easing', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.EulerRateZYXValue', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.EulerZYX', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.EulerZYXValue', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.FadeColorParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.FidgetStandParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.FidgetStandParams.FidgetPreset', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.Figure8Params', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.FrameSnapshotParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.FrontUpParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.GotoParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.GripperParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.HopParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.IndependentColorParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.JumpParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.JumpParams.Lead', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.KneelCircleParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.KneelLegMove2Params', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.KneelLegMoveParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.LedLight', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.Leg', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.LegJointParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.Pace2StepParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.Pivot', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.RandomRotateParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.RippleColorParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.RippleColorParams.LightSide', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.RippleColorParams.Pattern', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.RotateBodyParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.RunningManParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.SetAllColorParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.SetAudioVisualColorParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.SetColorParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.SideParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.SideParams.Side', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.StanceShape', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.StepParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.SwayParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.SwayParams.SwayStyle', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.SwingParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.SwingPhases', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.TurnParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.TwerkParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.WorkspaceArmMoveParams', null, global);
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
proto.bosdyn.api.spot.EulerZYX = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.EulerZYX, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.EulerZYX.displayName = 'proto.bosdyn.api.spot.EulerZYX';
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
proto.bosdyn.api.spot.EulerZYXValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.EulerZYXValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.EulerZYXValue.displayName = 'proto.bosdyn.api.spot.EulerZYXValue';
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
proto.bosdyn.api.spot.EulerRateZYXValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.EulerRateZYXValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.EulerRateZYXValue.displayName = 'proto.bosdyn.api.spot.EulerRateZYXValue';
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
proto.bosdyn.api.spot.BodyHoldParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.BodyHoldParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.BodyHoldParams.displayName = 'proto.bosdyn.api.spot.BodyHoldParams';
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
proto.bosdyn.api.spot.SwayParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.SwayParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.SwayParams.displayName = 'proto.bosdyn.api.spot.SwayParams';
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
proto.bosdyn.api.spot.ArmMoveParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.ArmMoveParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ArmMoveParams.displayName = 'proto.bosdyn.api.spot.ArmMoveParams';
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
proto.bosdyn.api.spot.WorkspaceArmMoveParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.WorkspaceArmMoveParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.WorkspaceArmMoveParams.displayName = 'proto.bosdyn.api.spot.WorkspaceArmMoveParams';
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
proto.bosdyn.api.spot.Figure8Params = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.Figure8Params, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.Figure8Params.displayName = 'proto.bosdyn.api.spot.Figure8Params';
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
proto.bosdyn.api.spot.GripperParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.GripperParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.GripperParams.displayName = 'proto.bosdyn.api.spot.GripperParams';
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
proto.bosdyn.api.spot.KneelLegMoveParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.KneelLegMoveParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.KneelLegMoveParams.displayName = 'proto.bosdyn.api.spot.KneelLegMoveParams';
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
proto.bosdyn.api.spot.KneelLegMove2Params = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.KneelLegMove2Params, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.KneelLegMove2Params.displayName = 'proto.bosdyn.api.spot.KneelLegMove2Params';
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
proto.bosdyn.api.spot.RunningManParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.RunningManParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.RunningManParams.displayName = 'proto.bosdyn.api.spot.RunningManParams';
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
proto.bosdyn.api.spot.HopParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.HopParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.HopParams.displayName = 'proto.bosdyn.api.spot.HopParams';
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
proto.bosdyn.api.spot.RandomRotateParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.RandomRotateParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.RandomRotateParams.displayName = 'proto.bosdyn.api.spot.RandomRotateParams';
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
proto.bosdyn.api.spot.CrawlParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.CrawlParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.CrawlParams.displayName = 'proto.bosdyn.api.spot.CrawlParams';
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
proto.bosdyn.api.spot.GotoParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.GotoParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.GotoParams.displayName = 'proto.bosdyn.api.spot.GotoParams';
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
proto.bosdyn.api.spot.BourreeParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.BourreeParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.BourreeParams.displayName = 'proto.bosdyn.api.spot.BourreeParams';
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
proto.bosdyn.api.spot.SideParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.SideParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.SideParams.displayName = 'proto.bosdyn.api.spot.SideParams';
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
proto.bosdyn.api.spot.JumpParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.JumpParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.JumpParams.displayName = 'proto.bosdyn.api.spot.JumpParams';
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
proto.bosdyn.api.spot.StepParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.StepParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.StepParams.displayName = 'proto.bosdyn.api.spot.StepParams';
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
proto.bosdyn.api.spot.RotateBodyParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.RotateBodyParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.RotateBodyParams.displayName = 'proto.bosdyn.api.spot.RotateBodyParams';
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
proto.bosdyn.api.spot.ButtCircleParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.ButtCircleParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ButtCircleParams.displayName = 'proto.bosdyn.api.spot.ButtCircleParams';
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
proto.bosdyn.api.spot.TwerkParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.TwerkParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.TwerkParams.displayName = 'proto.bosdyn.api.spot.TwerkParams';
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
proto.bosdyn.api.spot.TurnParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.TurnParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.TurnParams.displayName = 'proto.bosdyn.api.spot.TurnParams';
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
proto.bosdyn.api.spot.Pace2StepParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.Pace2StepParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.Pace2StepParams.displayName = 'proto.bosdyn.api.spot.Pace2StepParams';
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
proto.bosdyn.api.spot.ChickenHeadParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.ChickenHeadParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ChickenHeadParams.displayName = 'proto.bosdyn.api.spot.ChickenHeadParams';
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
proto.bosdyn.api.spot.ClapParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.ClapParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ClapParams.displayName = 'proto.bosdyn.api.spot.ClapParams';
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
proto.bosdyn.api.spot.KneelCircleParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.KneelCircleParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.KneelCircleParams.displayName = 'proto.bosdyn.api.spot.KneelCircleParams';
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
proto.bosdyn.api.spot.FrontUpParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.FrontUpParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.FrontUpParams.displayName = 'proto.bosdyn.api.spot.FrontUpParams';
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
proto.bosdyn.api.spot.FidgetStandParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.FidgetStandParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.FidgetStandParams.displayName = 'proto.bosdyn.api.spot.FidgetStandParams';
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
proto.bosdyn.api.spot.FrameSnapshotParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.FrameSnapshotParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.FrameSnapshotParams.displayName = 'proto.bosdyn.api.spot.FrameSnapshotParams';
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
proto.bosdyn.api.spot.SetColorParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.SetColorParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.SetColorParams.displayName = 'proto.bosdyn.api.spot.SetColorParams';
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
proto.bosdyn.api.spot.FadeColorParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.FadeColorParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.FadeColorParams.displayName = 'proto.bosdyn.api.spot.FadeColorParams';
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
proto.bosdyn.api.spot.IndependentColorParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.IndependentColorParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.IndependentColorParams.displayName = 'proto.bosdyn.api.spot.IndependentColorParams';
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
proto.bosdyn.api.spot.Color = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.Color, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.Color.displayName = 'proto.bosdyn.api.spot.Color';
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
proto.bosdyn.api.spot.RippleColorParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.RippleColorParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.RippleColorParams.displayName = 'proto.bosdyn.api.spot.RippleColorParams';
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
proto.bosdyn.api.spot.SetAudioVisualColorParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.SetAudioVisualColorParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.SetAudioVisualColorParams.displayName = 'proto.bosdyn.api.spot.SetAudioVisualColorParams';
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
proto.bosdyn.api.spot.SetAllColorParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.SetAllColorParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.SetAllColorParams.displayName = 'proto.bosdyn.api.spot.SetAllColorParams';
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
proto.bosdyn.api.spot.BuzzerNoteParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.BuzzerNoteParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.BuzzerNoteParams.displayName = 'proto.bosdyn.api.spot.BuzzerNoteParams';
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
proto.bosdyn.api.spot.LegJointParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.LegJointParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.LegJointParams.displayName = 'proto.bosdyn.api.spot.LegJointParams';
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
proto.bosdyn.api.spot.StanceShape = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.StanceShape, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.StanceShape.displayName = 'proto.bosdyn.api.spot.StanceShape';
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
proto.bosdyn.api.spot.SwingPhases = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.SwingPhases, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.SwingPhases.displayName = 'proto.bosdyn.api.spot.SwingPhases';
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
proto.bosdyn.api.spot.SwingParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.SwingParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.SwingParams.displayName = 'proto.bosdyn.api.spot.SwingParams';
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
proto.bosdyn.api.spot.AnimatedCycleParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.AnimatedCycleParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.AnimatedCycleParams.displayName = 'proto.bosdyn.api.spot.AnimatedCycleParams';
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
proto.bosdyn.api.spot.CustomGaitParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.CustomGaitParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.CustomGaitParams.displayName = 'proto.bosdyn.api.spot.CustomGaitParams';
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
proto.bosdyn.api.spot.CustomGaitCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.CustomGaitCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.CustomGaitCommand.displayName = 'proto.bosdyn.api.spot.CustomGaitCommand';
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
proto.bosdyn.api.spot.CustomGaitCommandLimits = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.CustomGaitCommandLimits, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.CustomGaitCommandLimits.displayName = 'proto.bosdyn.api.spot.CustomGaitCommandLimits';
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
proto.bosdyn.api.spot.AnimateParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.AnimateParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.AnimateParams.displayName = 'proto.bosdyn.api.spot.AnimateParams';
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
proto.bosdyn.api.spot.EulerZYX.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.EulerZYX.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.EulerZYX} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.EulerZYX.toObject = function(includeInstance, msg) {
  var f, obj = {
    roll: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    pitch: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    yaw: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.bosdyn.api.spot.EulerZYX}
 */
proto.bosdyn.api.spot.EulerZYX.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.EulerZYX;
  return proto.bosdyn.api.spot.EulerZYX.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.EulerZYX} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.EulerZYX}
 */
proto.bosdyn.api.spot.EulerZYX.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRoll(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPitch(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setYaw(value);
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
proto.bosdyn.api.spot.EulerZYX.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.EulerZYX.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.EulerZYX} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.EulerZYX.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoll();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getPitch();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getYaw();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional double roll = 1;
 * @return {number}
 */
proto.bosdyn.api.spot.EulerZYX.prototype.getRoll = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.EulerZYX} returns this
 */
proto.bosdyn.api.spot.EulerZYX.prototype.setRoll = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double pitch = 2;
 * @return {number}
 */
proto.bosdyn.api.spot.EulerZYX.prototype.getPitch = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.EulerZYX} returns this
 */
proto.bosdyn.api.spot.EulerZYX.prototype.setPitch = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double yaw = 3;
 * @return {number}
 */
proto.bosdyn.api.spot.EulerZYX.prototype.getYaw = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.EulerZYX} returns this
 */
proto.bosdyn.api.spot.EulerZYX.prototype.setYaw = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
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
proto.bosdyn.api.spot.EulerZYXValue.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.EulerZYXValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.EulerZYXValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.EulerZYXValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    roll: (f = msg.getRoll()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    pitch: (f = msg.getPitch()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    yaw: (f = msg.getYaw()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.EulerZYXValue}
 */
proto.bosdyn.api.spot.EulerZYXValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.EulerZYXValue;
  return proto.bosdyn.api.spot.EulerZYXValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.EulerZYXValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.EulerZYXValue}
 */
proto.bosdyn.api.spot.EulerZYXValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setRoll(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setPitch(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setYaw(value);
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
proto.bosdyn.api.spot.EulerZYXValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.EulerZYXValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.EulerZYXValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.EulerZYXValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoll();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getPitch();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getYaw();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue roll = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.EulerZYXValue.prototype.getRoll = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.EulerZYXValue} returns this
*/
proto.bosdyn.api.spot.EulerZYXValue.prototype.setRoll = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.EulerZYXValue} returns this
 */
proto.bosdyn.api.spot.EulerZYXValue.prototype.clearRoll = function() {
  return this.setRoll(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.EulerZYXValue.prototype.hasRoll = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue pitch = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.EulerZYXValue.prototype.getPitch = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.EulerZYXValue} returns this
*/
proto.bosdyn.api.spot.EulerZYXValue.prototype.setPitch = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.EulerZYXValue} returns this
 */
proto.bosdyn.api.spot.EulerZYXValue.prototype.clearPitch = function() {
  return this.setPitch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.EulerZYXValue.prototype.hasPitch = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue yaw = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.EulerZYXValue.prototype.getYaw = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.EulerZYXValue} returns this
*/
proto.bosdyn.api.spot.EulerZYXValue.prototype.setYaw = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.EulerZYXValue} returns this
 */
proto.bosdyn.api.spot.EulerZYXValue.prototype.clearYaw = function() {
  return this.setYaw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.EulerZYXValue.prototype.hasYaw = function() {
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
proto.bosdyn.api.spot.EulerRateZYXValue.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.EulerRateZYXValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.EulerRateZYXValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.EulerRateZYXValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    roll: (f = msg.getRoll()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    pitch: (f = msg.getPitch()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    yaw: (f = msg.getYaw()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.EulerRateZYXValue}
 */
proto.bosdyn.api.spot.EulerRateZYXValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.EulerRateZYXValue;
  return proto.bosdyn.api.spot.EulerRateZYXValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.EulerRateZYXValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.EulerRateZYXValue}
 */
proto.bosdyn.api.spot.EulerRateZYXValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setRoll(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setPitch(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setYaw(value);
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
proto.bosdyn.api.spot.EulerRateZYXValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.EulerRateZYXValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.EulerRateZYXValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.EulerRateZYXValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoll();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getPitch();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getYaw();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue roll = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.EulerRateZYXValue.prototype.getRoll = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.EulerRateZYXValue} returns this
*/
proto.bosdyn.api.spot.EulerRateZYXValue.prototype.setRoll = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.EulerRateZYXValue} returns this
 */
proto.bosdyn.api.spot.EulerRateZYXValue.prototype.clearRoll = function() {
  return this.setRoll(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.EulerRateZYXValue.prototype.hasRoll = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue pitch = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.EulerRateZYXValue.prototype.getPitch = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.EulerRateZYXValue} returns this
*/
proto.bosdyn.api.spot.EulerRateZYXValue.prototype.setPitch = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.EulerRateZYXValue} returns this
 */
proto.bosdyn.api.spot.EulerRateZYXValue.prototype.clearPitch = function() {
  return this.setPitch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.EulerRateZYXValue.prototype.hasPitch = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue yaw = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.EulerRateZYXValue.prototype.getYaw = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.EulerRateZYXValue} returns this
*/
proto.bosdyn.api.spot.EulerRateZYXValue.prototype.setYaw = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.EulerRateZYXValue} returns this
 */
proto.bosdyn.api.spot.EulerRateZYXValue.prototype.clearYaw = function() {
  return this.setYaw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.EulerRateZYXValue.prototype.hasYaw = function() {
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
proto.bosdyn.api.spot.BodyHoldParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.BodyHoldParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.BodyHoldParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.BodyHoldParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    rotation: (f = msg.getRotation()) && proto.bosdyn.api.spot.EulerZYXValue.toObject(includeInstance, f),
    translation: (f = msg.getTranslation()) && bosdyn_api_geometry_pb.Vec3Value.toObject(includeInstance, f),
    entrySlices: (f = msg.getEntrySlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    exitSlices: (f = msg.getExitSlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.BodyHoldParams}
 */
proto.bosdyn.api.spot.BodyHoldParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.BodyHoldParams;
  return proto.bosdyn.api.spot.BodyHoldParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.BodyHoldParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.BodyHoldParams}
 */
proto.bosdyn.api.spot.BodyHoldParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.EulerZYXValue;
      reader.readMessage(value,proto.bosdyn.api.spot.EulerZYXValue.deserializeBinaryFromReader);
      msg.setRotation(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.Vec3Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3Value.deserializeBinaryFromReader);
      msg.setTranslation(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setEntrySlices(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setExitSlices(value);
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
proto.bosdyn.api.spot.BodyHoldParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.BodyHoldParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.BodyHoldParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.BodyHoldParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRotation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.EulerZYXValue.serializeBinaryToWriter
    );
  }
  f = message.getTranslation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.Vec3Value.serializeBinaryToWriter
    );
  }
  f = message.getEntrySlices();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getExitSlices();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional EulerZYXValue rotation = 1;
 * @return {?proto.bosdyn.api.spot.EulerZYXValue}
 */
proto.bosdyn.api.spot.BodyHoldParams.prototype.getRotation = function() {
  return /** @type{?proto.bosdyn.api.spot.EulerZYXValue} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.EulerZYXValue, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.EulerZYXValue|undefined} value
 * @return {!proto.bosdyn.api.spot.BodyHoldParams} returns this
*/
proto.bosdyn.api.spot.BodyHoldParams.prototype.setRotation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.BodyHoldParams} returns this
 */
proto.bosdyn.api.spot.BodyHoldParams.prototype.clearRotation = function() {
  return this.setRotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.BodyHoldParams.prototype.hasRotation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.Vec3Value translation = 2;
 * @return {?proto.bosdyn.api.Vec3Value}
 */
proto.bosdyn.api.spot.BodyHoldParams.prototype.getTranslation = function() {
  return /** @type{?proto.bosdyn.api.Vec3Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3Value, 2));
};


/**
 * @param {?proto.bosdyn.api.Vec3Value|undefined} value
 * @return {!proto.bosdyn.api.spot.BodyHoldParams} returns this
*/
proto.bosdyn.api.spot.BodyHoldParams.prototype.setTranslation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.BodyHoldParams} returns this
 */
proto.bosdyn.api.spot.BodyHoldParams.prototype.clearTranslation = function() {
  return this.setTranslation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.BodyHoldParams.prototype.hasTranslation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue entry_slices = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.BodyHoldParams.prototype.getEntrySlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.BodyHoldParams} returns this
*/
proto.bosdyn.api.spot.BodyHoldParams.prototype.setEntrySlices = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.BodyHoldParams} returns this
 */
proto.bosdyn.api.spot.BodyHoldParams.prototype.clearEntrySlices = function() {
  return this.setEntrySlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.BodyHoldParams.prototype.hasEntrySlices = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue exit_slices = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.BodyHoldParams.prototype.getExitSlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.BodyHoldParams} returns this
*/
proto.bosdyn.api.spot.BodyHoldParams.prototype.setExitSlices = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.BodyHoldParams} returns this
 */
proto.bosdyn.api.spot.BodyHoldParams.prototype.clearExitSlices = function() {
  return this.setExitSlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.BodyHoldParams.prototype.hasExitSlices = function() {
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
proto.bosdyn.api.spot.SwayParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.SwayParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.SwayParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SwayParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    vertical: (f = msg.getVertical()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    horizontal: (f = msg.getHorizontal()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    roll: (f = msg.getRoll()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    pivot: jspb.Message.getFieldWithDefault(msg, 4, 0),
    style: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pronounced: (f = msg.getPronounced()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    holdZeroAxes: (f = msg.getHoldZeroAxes()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.SwayParams}
 */
proto.bosdyn.api.spot.SwayParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.SwayParams;
  return proto.bosdyn.api.spot.SwayParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.SwayParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.SwayParams}
 */
proto.bosdyn.api.spot.SwayParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setVertical(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setHorizontal(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setRoll(value);
      break;
    case 4:
      var value = /** @type {!proto.bosdyn.api.spot.Pivot} */ (reader.readEnum());
      msg.setPivot(value);
      break;
    case 5:
      var value = /** @type {!proto.bosdyn.api.spot.SwayParams.SwayStyle} */ (reader.readEnum());
      msg.setStyle(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setPronounced(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setHoldZeroAxes(value);
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
proto.bosdyn.api.spot.SwayParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.SwayParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.SwayParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SwayParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVertical();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getHorizontal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getRoll();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getPivot();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getStyle();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getPronounced();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getHoldZeroAxes();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.SwayParams.SwayStyle = {
  SWAY_STYLE_UNKNOWN: 0,
  SWAY_STYLE_STANDARD: 1,
  SWAY_STYLE_FAST_OUT: 2,
  SWAY_STYLE_FAST_RETURN: 3,
  SWAY_STYLE_SQUARE: 4,
  SWAY_STYLE_SPIKE: 5,
  SWAY_STYLE_PLATEAU: 6
};

/**
 * optional google.protobuf.DoubleValue vertical = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SwayParams.prototype.getVertical = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SwayParams} returns this
*/
proto.bosdyn.api.spot.SwayParams.prototype.setVertical = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SwayParams} returns this
 */
proto.bosdyn.api.spot.SwayParams.prototype.clearVertical = function() {
  return this.setVertical(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SwayParams.prototype.hasVertical = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue horizontal = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SwayParams.prototype.getHorizontal = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SwayParams} returns this
*/
proto.bosdyn.api.spot.SwayParams.prototype.setHorizontal = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SwayParams} returns this
 */
proto.bosdyn.api.spot.SwayParams.prototype.clearHorizontal = function() {
  return this.setHorizontal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SwayParams.prototype.hasHorizontal = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue roll = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SwayParams.prototype.getRoll = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SwayParams} returns this
*/
proto.bosdyn.api.spot.SwayParams.prototype.setRoll = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SwayParams} returns this
 */
proto.bosdyn.api.spot.SwayParams.prototype.clearRoll = function() {
  return this.setRoll(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SwayParams.prototype.hasRoll = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Pivot pivot = 4;
 * @return {!proto.bosdyn.api.spot.Pivot}
 */
proto.bosdyn.api.spot.SwayParams.prototype.getPivot = function() {
  return /** @type {!proto.bosdyn.api.spot.Pivot} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.Pivot} value
 * @return {!proto.bosdyn.api.spot.SwayParams} returns this
 */
proto.bosdyn.api.spot.SwayParams.prototype.setPivot = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional SwayStyle style = 5;
 * @return {!proto.bosdyn.api.spot.SwayParams.SwayStyle}
 */
proto.bosdyn.api.spot.SwayParams.prototype.getStyle = function() {
  return /** @type {!proto.bosdyn.api.spot.SwayParams.SwayStyle} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.SwayParams.SwayStyle} value
 * @return {!proto.bosdyn.api.spot.SwayParams} returns this
 */
proto.bosdyn.api.spot.SwayParams.prototype.setStyle = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional google.protobuf.DoubleValue pronounced = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SwayParams.prototype.getPronounced = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SwayParams} returns this
*/
proto.bosdyn.api.spot.SwayParams.prototype.setPronounced = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SwayParams} returns this
 */
proto.bosdyn.api.spot.SwayParams.prototype.clearPronounced = function() {
  return this.setPronounced(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SwayParams.prototype.hasPronounced = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.BoolValue hold_zero_axes = 7;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.SwayParams.prototype.getHoldZeroAxes = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 7));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SwayParams} returns this
*/
proto.bosdyn.api.spot.SwayParams.prototype.setHoldZeroAxes = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SwayParams} returns this
 */
proto.bosdyn.api.spot.SwayParams.prototype.clearHoldZeroAxes = function() {
  return this.setHoldZeroAxes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SwayParams.prototype.hasHoldZeroAxes = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.bosdyn.api.spot.ArmMoveParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ArmMoveParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ArmMoveParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ArmMoveParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    shoulder0: (f = msg.getShoulder0()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    shoulder1: (f = msg.getShoulder1()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    elbow0: (f = msg.getElbow0()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    elbow1: (f = msg.getElbow1()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    wrist0: (f = msg.getWrist0()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    wrist1: (f = msg.getWrist1()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    easing: jspb.Message.getFieldWithDefault(msg, 7, 0),
    gripper: (f = msg.getGripper()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.ArmMoveParams}
 */
proto.bosdyn.api.spot.ArmMoveParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ArmMoveParams;
  return proto.bosdyn.api.spot.ArmMoveParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ArmMoveParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ArmMoveParams}
 */
proto.bosdyn.api.spot.ArmMoveParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setShoulder0(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setShoulder1(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setElbow0(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setElbow1(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setWrist0(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setWrist1(value);
      break;
    case 7:
      var value = /** @type {!proto.bosdyn.api.spot.Easing} */ (reader.readEnum());
      msg.setEasing(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setGripper(value);
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
proto.bosdyn.api.spot.ArmMoveParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ArmMoveParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ArmMoveParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ArmMoveParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShoulder0();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getShoulder1();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getElbow0();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getElbow1();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getWrist0();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getWrist1();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getEasing();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getGripper();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue shoulder_0 = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.getShoulder0 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ArmMoveParams} returns this
*/
proto.bosdyn.api.spot.ArmMoveParams.prototype.setShoulder0 = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ArmMoveParams} returns this
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.clearShoulder0 = function() {
  return this.setShoulder0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.hasShoulder0 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue shoulder_1 = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.getShoulder1 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ArmMoveParams} returns this
*/
proto.bosdyn.api.spot.ArmMoveParams.prototype.setShoulder1 = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ArmMoveParams} returns this
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.clearShoulder1 = function() {
  return this.setShoulder1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.hasShoulder1 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue elbow_0 = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.getElbow0 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ArmMoveParams} returns this
*/
proto.bosdyn.api.spot.ArmMoveParams.prototype.setElbow0 = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ArmMoveParams} returns this
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.clearElbow0 = function() {
  return this.setElbow0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.hasElbow0 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue elbow_1 = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.getElbow1 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ArmMoveParams} returns this
*/
proto.bosdyn.api.spot.ArmMoveParams.prototype.setElbow1 = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ArmMoveParams} returns this
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.clearElbow1 = function() {
  return this.setElbow1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.hasElbow1 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue wrist_0 = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.getWrist0 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ArmMoveParams} returns this
*/
proto.bosdyn.api.spot.ArmMoveParams.prototype.setWrist0 = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ArmMoveParams} returns this
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.clearWrist0 = function() {
  return this.setWrist0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.hasWrist0 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue wrist_1 = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.getWrist1 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ArmMoveParams} returns this
*/
proto.bosdyn.api.spot.ArmMoveParams.prototype.setWrist1 = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ArmMoveParams} returns this
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.clearWrist1 = function() {
  return this.setWrist1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.hasWrist1 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Easing easing = 7;
 * @return {!proto.bosdyn.api.spot.Easing}
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.getEasing = function() {
  return /** @type {!proto.bosdyn.api.spot.Easing} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.Easing} value
 * @return {!proto.bosdyn.api.spot.ArmMoveParams} returns this
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.setEasing = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.DoubleValue gripper = 8;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.getGripper = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 8));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ArmMoveParams} returns this
*/
proto.bosdyn.api.spot.ArmMoveParams.prototype.setGripper = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ArmMoveParams} returns this
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.clearGripper = function() {
  return this.setGripper(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ArmMoveParams.prototype.hasGripper = function() {
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
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.WorkspaceArmMoveParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.WorkspaceArmMoveParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    rotation: (f = msg.getRotation()) && proto.bosdyn.api.spot.EulerZYXValue.toObject(includeInstance, f),
    translation: (f = msg.getTranslation()) && bosdyn_api_geometry_pb.Vec3Value.toObject(includeInstance, f),
    absolute: (f = msg.getAbsolute()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    frame: jspb.Message.getFieldWithDefault(msg, 4, 0),
    easing: jspb.Message.getFieldWithDefault(msg, 5, 0),
    danceFrameId: (f = msg.getDanceFrameId()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.WorkspaceArmMoveParams}
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.WorkspaceArmMoveParams;
  return proto.bosdyn.api.spot.WorkspaceArmMoveParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.WorkspaceArmMoveParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.WorkspaceArmMoveParams}
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.EulerZYXValue;
      reader.readMessage(value,proto.bosdyn.api.spot.EulerZYXValue.deserializeBinaryFromReader);
      msg.setRotation(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.Vec3Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3Value.deserializeBinaryFromReader);
      msg.setTranslation(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setAbsolute(value);
      break;
    case 4:
      var value = /** @type {!proto.bosdyn.api.spot.ArmMoveFrame} */ (reader.readEnum());
      msg.setFrame(value);
      break;
    case 5:
      var value = /** @type {!proto.bosdyn.api.spot.Easing} */ (reader.readEnum());
      msg.setEasing(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setDanceFrameId(value);
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
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.WorkspaceArmMoveParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.WorkspaceArmMoveParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRotation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.EulerZYXValue.serializeBinaryToWriter
    );
  }
  f = message.getTranslation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.Vec3Value.serializeBinaryToWriter
    );
  }
  f = message.getAbsolute();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getFrame();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getEasing();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getDanceFrameId();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional EulerZYXValue rotation = 1;
 * @return {?proto.bosdyn.api.spot.EulerZYXValue}
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.getRotation = function() {
  return /** @type{?proto.bosdyn.api.spot.EulerZYXValue} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.EulerZYXValue, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.EulerZYXValue|undefined} value
 * @return {!proto.bosdyn.api.spot.WorkspaceArmMoveParams} returns this
*/
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.setRotation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.WorkspaceArmMoveParams} returns this
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.clearRotation = function() {
  return this.setRotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.hasRotation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.Vec3Value translation = 2;
 * @return {?proto.bosdyn.api.Vec3Value}
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.getTranslation = function() {
  return /** @type{?proto.bosdyn.api.Vec3Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3Value, 2));
};


/**
 * @param {?proto.bosdyn.api.Vec3Value|undefined} value
 * @return {!proto.bosdyn.api.spot.WorkspaceArmMoveParams} returns this
*/
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.setTranslation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.WorkspaceArmMoveParams} returns this
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.clearTranslation = function() {
  return this.setTranslation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.hasTranslation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.BoolValue absolute = 3;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.getAbsolute = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 3));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.WorkspaceArmMoveParams} returns this
*/
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.setAbsolute = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.WorkspaceArmMoveParams} returns this
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.clearAbsolute = function() {
  return this.setAbsolute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.hasAbsolute = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ArmMoveFrame frame = 4;
 * @return {!proto.bosdyn.api.spot.ArmMoveFrame}
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.getFrame = function() {
  return /** @type {!proto.bosdyn.api.spot.ArmMoveFrame} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.ArmMoveFrame} value
 * @return {!proto.bosdyn.api.spot.WorkspaceArmMoveParams} returns this
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.setFrame = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional Easing easing = 5;
 * @return {!proto.bosdyn.api.spot.Easing}
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.getEasing = function() {
  return /** @type {!proto.bosdyn.api.spot.Easing} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.Easing} value
 * @return {!proto.bosdyn.api.spot.WorkspaceArmMoveParams} returns this
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.setEasing = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional google.protobuf.Int32Value dance_frame_id = 6;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.getDanceFrameId = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 6));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.bosdyn.api.spot.WorkspaceArmMoveParams} returns this
*/
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.setDanceFrameId = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.WorkspaceArmMoveParams} returns this
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.clearDanceFrameId = function() {
  return this.setDanceFrameId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.WorkspaceArmMoveParams.prototype.hasDanceFrameId = function() {
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
proto.bosdyn.api.spot.Figure8Params.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.Figure8Params.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.Figure8Params} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.Figure8Params.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: (f = msg.getHeight()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    width: (f = msg.getWidth()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    beatsPerCycle: (f = msg.getBeatsPerCycle()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.Figure8Params}
 */
proto.bosdyn.api.spot.Figure8Params.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.Figure8Params;
  return proto.bosdyn.api.spot.Figure8Params.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.Figure8Params} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.Figure8Params}
 */
proto.bosdyn.api.spot.Figure8Params.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setHeight(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setWidth(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setBeatsPerCycle(value);
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
proto.bosdyn.api.spot.Figure8Params.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.Figure8Params.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.Figure8Params} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.Figure8Params.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getWidth();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getBeatsPerCycle();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue height = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.Figure8Params.prototype.getHeight = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.Figure8Params} returns this
*/
proto.bosdyn.api.spot.Figure8Params.prototype.setHeight = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Figure8Params} returns this
 */
proto.bosdyn.api.spot.Figure8Params.prototype.clearHeight = function() {
  return this.setHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Figure8Params.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue width = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.Figure8Params.prototype.getWidth = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.Figure8Params} returns this
*/
proto.bosdyn.api.spot.Figure8Params.prototype.setWidth = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Figure8Params} returns this
 */
proto.bosdyn.api.spot.Figure8Params.prototype.clearWidth = function() {
  return this.setWidth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Figure8Params.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue beats_per_cycle = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.Figure8Params.prototype.getBeatsPerCycle = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.Figure8Params} returns this
*/
proto.bosdyn.api.spot.Figure8Params.prototype.setBeatsPerCycle = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Figure8Params} returns this
 */
proto.bosdyn.api.spot.Figure8Params.prototype.clearBeatsPerCycle = function() {
  return this.setBeatsPerCycle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Figure8Params.prototype.hasBeatsPerCycle = function() {
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
proto.bosdyn.api.spot.GripperParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.GripperParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.GripperParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.GripperParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    angle: (f = msg.getAngle()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    speed: (f = msg.getSpeed()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.GripperParams}
 */
proto.bosdyn.api.spot.GripperParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.GripperParams;
  return proto.bosdyn.api.spot.GripperParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.GripperParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.GripperParams}
 */
proto.bosdyn.api.spot.GripperParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setAngle(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSpeed(value);
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
proto.bosdyn.api.spot.GripperParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.GripperParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.GripperParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.GripperParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAngle();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getSpeed();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue angle = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.GripperParams.prototype.getAngle = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.GripperParams} returns this
*/
proto.bosdyn.api.spot.GripperParams.prototype.setAngle = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.GripperParams} returns this
 */
proto.bosdyn.api.spot.GripperParams.prototype.clearAngle = function() {
  return this.setAngle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.GripperParams.prototype.hasAngle = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue speed = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.GripperParams.prototype.getSpeed = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.GripperParams} returns this
*/
proto.bosdyn.api.spot.GripperParams.prototype.setSpeed = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.GripperParams} returns this
 */
proto.bosdyn.api.spot.GripperParams.prototype.clearSpeed = function() {
  return this.setSpeed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.GripperParams.prototype.hasSpeed = function() {
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
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.KneelLegMoveParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.KneelLegMoveParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.KneelLegMoveParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    hipX: (f = msg.getHipX()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    hipY: (f = msg.getHipY()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    knee: (f = msg.getKnee()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    mirror: (f = msg.getMirror()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    easing: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.bosdyn.api.spot.KneelLegMoveParams}
 */
proto.bosdyn.api.spot.KneelLegMoveParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.KneelLegMoveParams;
  return proto.bosdyn.api.spot.KneelLegMoveParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.KneelLegMoveParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.KneelLegMoveParams}
 */
proto.bosdyn.api.spot.KneelLegMoveParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setHipX(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setHipY(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setKnee(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setMirror(value);
      break;
    case 5:
      var value = /** @type {!proto.bosdyn.api.spot.Easing} */ (reader.readEnum());
      msg.setEasing(value);
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
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.KneelLegMoveParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.KneelLegMoveParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.KneelLegMoveParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHipX();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getHipY();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getKnee();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getMirror();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getEasing();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional google.protobuf.DoubleValue hip_x = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.getHipX = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.KneelLegMoveParams} returns this
*/
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.setHipX = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.KneelLegMoveParams} returns this
 */
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.clearHipX = function() {
  return this.setHipX(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.hasHipX = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue hip_y = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.getHipY = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.KneelLegMoveParams} returns this
*/
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.setHipY = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.KneelLegMoveParams} returns this
 */
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.clearHipY = function() {
  return this.setHipY(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.hasHipY = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue knee = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.getKnee = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.KneelLegMoveParams} returns this
*/
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.setKnee = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.KneelLegMoveParams} returns this
 */
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.clearKnee = function() {
  return this.setKnee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.hasKnee = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.BoolValue mirror = 4;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.getMirror = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 4));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.KneelLegMoveParams} returns this
*/
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.setMirror = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.KneelLegMoveParams} returns this
 */
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.clearMirror = function() {
  return this.setMirror(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.hasMirror = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Easing easing = 5;
 * @return {!proto.bosdyn.api.spot.Easing}
 */
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.getEasing = function() {
  return /** @type {!proto.bosdyn.api.spot.Easing} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.Easing} value
 * @return {!proto.bosdyn.api.spot.KneelLegMoveParams} returns this
 */
proto.bosdyn.api.spot.KneelLegMoveParams.prototype.setEasing = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
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
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.KneelLegMove2Params.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.KneelLegMove2Params} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.KneelLegMove2Params.toObject = function(includeInstance, msg) {
  var f, obj = {
    leftHipX: (f = msg.getLeftHipX()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    leftHipY: (f = msg.getLeftHipY()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    leftKnee: (f = msg.getLeftKnee()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    rightHipX: (f = msg.getRightHipX()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    rightHipY: (f = msg.getRightHipY()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    rightKnee: (f = msg.getRightKnee()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    easing: jspb.Message.getFieldWithDefault(msg, 7, 0),
    linkToNext: (f = msg.getLinkToNext()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.KneelLegMove2Params}
 */
proto.bosdyn.api.spot.KneelLegMove2Params.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.KneelLegMove2Params;
  return proto.bosdyn.api.spot.KneelLegMove2Params.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.KneelLegMove2Params} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.KneelLegMove2Params}
 */
proto.bosdyn.api.spot.KneelLegMove2Params.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setLeftHipX(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setLeftHipY(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setLeftKnee(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setRightHipX(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setRightHipY(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setRightKnee(value);
      break;
    case 7:
      var value = /** @type {!proto.bosdyn.api.spot.Easing} */ (reader.readEnum());
      msg.setEasing(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setLinkToNext(value);
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
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.KneelLegMove2Params.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.KneelLegMove2Params} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.KneelLegMove2Params.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeftHipX();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getLeftHipY();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getLeftKnee();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getRightHipX();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getRightHipY();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getRightKnee();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getEasing();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getLinkToNext();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue left_hip_x = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.getLeftHipX = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.KneelLegMove2Params} returns this
*/
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.setLeftHipX = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.KneelLegMove2Params} returns this
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.clearLeftHipX = function() {
  return this.setLeftHipX(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.hasLeftHipX = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue left_hip_y = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.getLeftHipY = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.KneelLegMove2Params} returns this
*/
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.setLeftHipY = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.KneelLegMove2Params} returns this
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.clearLeftHipY = function() {
  return this.setLeftHipY(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.hasLeftHipY = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue left_knee = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.getLeftKnee = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.KneelLegMove2Params} returns this
*/
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.setLeftKnee = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.KneelLegMove2Params} returns this
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.clearLeftKnee = function() {
  return this.setLeftKnee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.hasLeftKnee = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue right_hip_x = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.getRightHipX = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.KneelLegMove2Params} returns this
*/
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.setRightHipX = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.KneelLegMove2Params} returns this
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.clearRightHipX = function() {
  return this.setRightHipX(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.hasRightHipX = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue right_hip_y = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.getRightHipY = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.KneelLegMove2Params} returns this
*/
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.setRightHipY = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.KneelLegMove2Params} returns this
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.clearRightHipY = function() {
  return this.setRightHipY(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.hasRightHipY = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue right_knee = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.getRightKnee = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.KneelLegMove2Params} returns this
*/
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.setRightKnee = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.KneelLegMove2Params} returns this
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.clearRightKnee = function() {
  return this.setRightKnee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.hasRightKnee = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Easing easing = 7;
 * @return {!proto.bosdyn.api.spot.Easing}
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.getEasing = function() {
  return /** @type {!proto.bosdyn.api.spot.Easing} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.Easing} value
 * @return {!proto.bosdyn.api.spot.KneelLegMove2Params} returns this
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.setEasing = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.BoolValue link_to_next = 8;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.getLinkToNext = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 8));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.KneelLegMove2Params} returns this
*/
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.setLinkToNext = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.KneelLegMove2Params} returns this
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.clearLinkToNext = function() {
  return this.setLinkToNext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.KneelLegMove2Params.prototype.hasLinkToNext = function() {
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
proto.bosdyn.api.spot.RunningManParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.RunningManParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.RunningManParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.RunningManParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    velocity: (f = msg.getVelocity()) && bosdyn_api_geometry_pb.Vec2Value.toObject(includeInstance, f),
    swingHeight: (f = msg.getSwingHeight()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    spread: (f = msg.getSpread()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    reverse: (f = msg.getReverse()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    preMoveCycles: (f = msg.getPreMoveCycles()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    speedMultiplier: (f = msg.getSpeedMultiplier()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    dutyCycle: (f = msg.getDutyCycle()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    comHeight: (f = msg.getComHeight()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.RunningManParams}
 */
proto.bosdyn.api.spot.RunningManParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.RunningManParams;
  return proto.bosdyn.api.spot.RunningManParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.RunningManParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.RunningManParams}
 */
proto.bosdyn.api.spot.RunningManParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.Vec2Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2Value.deserializeBinaryFromReader);
      msg.setVelocity(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSwingHeight(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSpread(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setReverse(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setPreMoveCycles(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSpeedMultiplier(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setDutyCycle(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setComHeight(value);
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
proto.bosdyn.api.spot.RunningManParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.RunningManParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.RunningManParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.RunningManParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVelocity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.Vec2Value.serializeBinaryToWriter
    );
  }
  f = message.getSwingHeight();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getSpread();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getReverse();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getPreMoveCycles();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getSpeedMultiplier();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getDutyCycle();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getComHeight();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.Vec2Value velocity = 1;
 * @return {?proto.bosdyn.api.Vec2Value}
 */
proto.bosdyn.api.spot.RunningManParams.prototype.getVelocity = function() {
  return /** @type{?proto.bosdyn.api.Vec2Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2Value, 1));
};


/**
 * @param {?proto.bosdyn.api.Vec2Value|undefined} value
 * @return {!proto.bosdyn.api.spot.RunningManParams} returns this
*/
proto.bosdyn.api.spot.RunningManParams.prototype.setVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RunningManParams} returns this
 */
proto.bosdyn.api.spot.RunningManParams.prototype.clearVelocity = function() {
  return this.setVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RunningManParams.prototype.hasVelocity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue swing_height = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.RunningManParams.prototype.getSwingHeight = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.RunningManParams} returns this
*/
proto.bosdyn.api.spot.RunningManParams.prototype.setSwingHeight = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RunningManParams} returns this
 */
proto.bosdyn.api.spot.RunningManParams.prototype.clearSwingHeight = function() {
  return this.setSwingHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RunningManParams.prototype.hasSwingHeight = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue spread = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.RunningManParams.prototype.getSpread = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.RunningManParams} returns this
*/
proto.bosdyn.api.spot.RunningManParams.prototype.setSpread = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RunningManParams} returns this
 */
proto.bosdyn.api.spot.RunningManParams.prototype.clearSpread = function() {
  return this.setSpread(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RunningManParams.prototype.hasSpread = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.BoolValue reverse = 4;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.RunningManParams.prototype.getReverse = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 4));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.RunningManParams} returns this
*/
proto.bosdyn.api.spot.RunningManParams.prototype.setReverse = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RunningManParams} returns this
 */
proto.bosdyn.api.spot.RunningManParams.prototype.clearReverse = function() {
  return this.setReverse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RunningManParams.prototype.hasReverse = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Int32Value pre_move_cycles = 5;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.bosdyn.api.spot.RunningManParams.prototype.getPreMoveCycles = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 5));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.bosdyn.api.spot.RunningManParams} returns this
*/
proto.bosdyn.api.spot.RunningManParams.prototype.setPreMoveCycles = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RunningManParams} returns this
 */
proto.bosdyn.api.spot.RunningManParams.prototype.clearPreMoveCycles = function() {
  return this.setPreMoveCycles(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RunningManParams.prototype.hasPreMoveCycles = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue speed_multiplier = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.RunningManParams.prototype.getSpeedMultiplier = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.RunningManParams} returns this
*/
proto.bosdyn.api.spot.RunningManParams.prototype.setSpeedMultiplier = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RunningManParams} returns this
 */
proto.bosdyn.api.spot.RunningManParams.prototype.clearSpeedMultiplier = function() {
  return this.setSpeedMultiplier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RunningManParams.prototype.hasSpeedMultiplier = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.DoubleValue duty_cycle = 7;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.RunningManParams.prototype.getDutyCycle = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 7));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.RunningManParams} returns this
*/
proto.bosdyn.api.spot.RunningManParams.prototype.setDutyCycle = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RunningManParams} returns this
 */
proto.bosdyn.api.spot.RunningManParams.prototype.clearDutyCycle = function() {
  return this.setDutyCycle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RunningManParams.prototype.hasDutyCycle = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.DoubleValue com_height = 8;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.RunningManParams.prototype.getComHeight = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 8));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.RunningManParams} returns this
*/
proto.bosdyn.api.spot.RunningManParams.prototype.setComHeight = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RunningManParams} returns this
 */
proto.bosdyn.api.spot.RunningManParams.prototype.clearComHeight = function() {
  return this.setComHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RunningManParams.prototype.hasComHeight = function() {
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
proto.bosdyn.api.spot.HopParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.HopParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.HopParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.HopParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    velocity: (f = msg.getVelocity()) && bosdyn_api_geometry_pb.Vec2Value.toObject(includeInstance, f),
    yawRate: (f = msg.getYawRate()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    standTime: (f = msg.getStandTime()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.HopParams}
 */
proto.bosdyn.api.spot.HopParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.HopParams;
  return proto.bosdyn.api.spot.HopParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.HopParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.HopParams}
 */
proto.bosdyn.api.spot.HopParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.Vec2Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2Value.deserializeBinaryFromReader);
      msg.setVelocity(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setYawRate(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setStandTime(value);
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
proto.bosdyn.api.spot.HopParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.HopParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.HopParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.HopParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVelocity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.Vec2Value.serializeBinaryToWriter
    );
  }
  f = message.getYawRate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getStandTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.Vec2Value velocity = 1;
 * @return {?proto.bosdyn.api.Vec2Value}
 */
proto.bosdyn.api.spot.HopParams.prototype.getVelocity = function() {
  return /** @type{?proto.bosdyn.api.Vec2Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2Value, 1));
};


/**
 * @param {?proto.bosdyn.api.Vec2Value|undefined} value
 * @return {!proto.bosdyn.api.spot.HopParams} returns this
*/
proto.bosdyn.api.spot.HopParams.prototype.setVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.HopParams} returns this
 */
proto.bosdyn.api.spot.HopParams.prototype.clearVelocity = function() {
  return this.setVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.HopParams.prototype.hasVelocity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue yaw_rate = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.HopParams.prototype.getYawRate = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.HopParams} returns this
*/
proto.bosdyn.api.spot.HopParams.prototype.setYawRate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.HopParams} returns this
 */
proto.bosdyn.api.spot.HopParams.prototype.clearYawRate = function() {
  return this.setYawRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.HopParams.prototype.hasYawRate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue stand_time = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.HopParams.prototype.getStandTime = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.HopParams} returns this
*/
proto.bosdyn.api.spot.HopParams.prototype.setStandTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.HopParams} returns this
 */
proto.bosdyn.api.spot.HopParams.prototype.clearStandTime = function() {
  return this.setStandTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.HopParams.prototype.hasStandTime = function() {
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
proto.bosdyn.api.spot.RandomRotateParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.RandomRotateParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.RandomRotateParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.RandomRotateParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    amplitude: (f = msg.getAmplitude()) && proto.bosdyn.api.spot.EulerZYXValue.toObject(includeInstance, f),
    speed: (f = msg.getSpeed()) && proto.bosdyn.api.spot.EulerRateZYXValue.toObject(includeInstance, f),
    speedVariation: (f = msg.getSpeedVariation()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    numSpeedTiers: (f = msg.getNumSpeedTiers()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    tierVariation: (f = msg.getTierVariation()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.RandomRotateParams}
 */
proto.bosdyn.api.spot.RandomRotateParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.RandomRotateParams;
  return proto.bosdyn.api.spot.RandomRotateParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.RandomRotateParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.RandomRotateParams}
 */
proto.bosdyn.api.spot.RandomRotateParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.EulerZYXValue;
      reader.readMessage(value,proto.bosdyn.api.spot.EulerZYXValue.deserializeBinaryFromReader);
      msg.setAmplitude(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.spot.EulerRateZYXValue;
      reader.readMessage(value,proto.bosdyn.api.spot.EulerRateZYXValue.deserializeBinaryFromReader);
      msg.setSpeed(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSpeedVariation(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setNumSpeedTiers(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setTierVariation(value);
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
proto.bosdyn.api.spot.RandomRotateParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.RandomRotateParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.RandomRotateParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.RandomRotateParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmplitude();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.EulerZYXValue.serializeBinaryToWriter
    );
  }
  f = message.getSpeed();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.spot.EulerRateZYXValue.serializeBinaryToWriter
    );
  }
  f = message.getSpeedVariation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getNumSpeedTiers();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getTierVariation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional EulerZYXValue amplitude = 1;
 * @return {?proto.bosdyn.api.spot.EulerZYXValue}
 */
proto.bosdyn.api.spot.RandomRotateParams.prototype.getAmplitude = function() {
  return /** @type{?proto.bosdyn.api.spot.EulerZYXValue} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.EulerZYXValue, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.EulerZYXValue|undefined} value
 * @return {!proto.bosdyn.api.spot.RandomRotateParams} returns this
*/
proto.bosdyn.api.spot.RandomRotateParams.prototype.setAmplitude = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RandomRotateParams} returns this
 */
proto.bosdyn.api.spot.RandomRotateParams.prototype.clearAmplitude = function() {
  return this.setAmplitude(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RandomRotateParams.prototype.hasAmplitude = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EulerRateZYXValue speed = 2;
 * @return {?proto.bosdyn.api.spot.EulerRateZYXValue}
 */
proto.bosdyn.api.spot.RandomRotateParams.prototype.getSpeed = function() {
  return /** @type{?proto.bosdyn.api.spot.EulerRateZYXValue} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.EulerRateZYXValue, 2));
};


/**
 * @param {?proto.bosdyn.api.spot.EulerRateZYXValue|undefined} value
 * @return {!proto.bosdyn.api.spot.RandomRotateParams} returns this
*/
proto.bosdyn.api.spot.RandomRotateParams.prototype.setSpeed = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RandomRotateParams} returns this
 */
proto.bosdyn.api.spot.RandomRotateParams.prototype.clearSpeed = function() {
  return this.setSpeed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RandomRotateParams.prototype.hasSpeed = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue speed_variation = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.RandomRotateParams.prototype.getSpeedVariation = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.RandomRotateParams} returns this
*/
proto.bosdyn.api.spot.RandomRotateParams.prototype.setSpeedVariation = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RandomRotateParams} returns this
 */
proto.bosdyn.api.spot.RandomRotateParams.prototype.clearSpeedVariation = function() {
  return this.setSpeedVariation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RandomRotateParams.prototype.hasSpeedVariation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Int32Value num_speed_tiers = 4;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.bosdyn.api.spot.RandomRotateParams.prototype.getNumSpeedTiers = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 4));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.bosdyn.api.spot.RandomRotateParams} returns this
*/
proto.bosdyn.api.spot.RandomRotateParams.prototype.setNumSpeedTiers = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RandomRotateParams} returns this
 */
proto.bosdyn.api.spot.RandomRotateParams.prototype.clearNumSpeedTiers = function() {
  return this.setNumSpeedTiers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RandomRotateParams.prototype.hasNumSpeedTiers = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue tier_variation = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.RandomRotateParams.prototype.getTierVariation = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.RandomRotateParams} returns this
*/
proto.bosdyn.api.spot.RandomRotateParams.prototype.setTierVariation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RandomRotateParams} returns this
 */
proto.bosdyn.api.spot.RandomRotateParams.prototype.clearTierVariation = function() {
  return this.setTierVariation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RandomRotateParams.prototype.hasTierVariation = function() {
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
proto.bosdyn.api.spot.CrawlParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.CrawlParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.CrawlParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.CrawlParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    swingSlices: (f = msg.getSwingSlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    velocity: (f = msg.getVelocity()) && bosdyn_api_geometry_pb.Vec2Value.toObject(includeInstance, f),
    stanceWidth: (f = msg.getStanceWidth()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    stanceLength: (f = msg.getStanceLength()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.CrawlParams}
 */
proto.bosdyn.api.spot.CrawlParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.CrawlParams;
  return proto.bosdyn.api.spot.CrawlParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.CrawlParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.CrawlParams}
 */
proto.bosdyn.api.spot.CrawlParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSwingSlices(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.Vec2Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2Value.deserializeBinaryFromReader);
      msg.setVelocity(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setStanceWidth(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setStanceLength(value);
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
proto.bosdyn.api.spot.CrawlParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.CrawlParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.CrawlParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.CrawlParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwingSlices();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getVelocity();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.Vec2Value.serializeBinaryToWriter
    );
  }
  f = message.getStanceWidth();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getStanceLength();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue swing_slices = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.CrawlParams.prototype.getSwingSlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CrawlParams} returns this
*/
proto.bosdyn.api.spot.CrawlParams.prototype.setSwingSlices = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CrawlParams} returns this
 */
proto.bosdyn.api.spot.CrawlParams.prototype.clearSwingSlices = function() {
  return this.setSwingSlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CrawlParams.prototype.hasSwingSlices = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.Vec2Value velocity = 2;
 * @return {?proto.bosdyn.api.Vec2Value}
 */
proto.bosdyn.api.spot.CrawlParams.prototype.getVelocity = function() {
  return /** @type{?proto.bosdyn.api.Vec2Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2Value, 2));
};


/**
 * @param {?proto.bosdyn.api.Vec2Value|undefined} value
 * @return {!proto.bosdyn.api.spot.CrawlParams} returns this
*/
proto.bosdyn.api.spot.CrawlParams.prototype.setVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CrawlParams} returns this
 */
proto.bosdyn.api.spot.CrawlParams.prototype.clearVelocity = function() {
  return this.setVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CrawlParams.prototype.hasVelocity = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue stance_width = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.CrawlParams.prototype.getStanceWidth = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CrawlParams} returns this
*/
proto.bosdyn.api.spot.CrawlParams.prototype.setStanceWidth = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CrawlParams} returns this
 */
proto.bosdyn.api.spot.CrawlParams.prototype.clearStanceWidth = function() {
  return this.setStanceWidth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CrawlParams.prototype.hasStanceWidth = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue stance_length = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.CrawlParams.prototype.getStanceLength = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CrawlParams} returns this
*/
proto.bosdyn.api.spot.CrawlParams.prototype.setStanceLength = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CrawlParams} returns this
 */
proto.bosdyn.api.spot.CrawlParams.prototype.clearStanceLength = function() {
  return this.setStanceLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CrawlParams.prototype.hasStanceLength = function() {
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
proto.bosdyn.api.spot.GotoParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.GotoParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.GotoParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.GotoParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    relative: (f = msg.getRelative()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    absolutePosition: (f = msg.getAbsolutePosition()) && bosdyn_api_geometry_pb.Vec2Value.toObject(includeInstance, f),
    absoluteYaw: (f = msg.getAbsoluteYaw()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    relativePosition: (f = msg.getRelativePosition()) && bosdyn_api_geometry_pb.Vec2Value.toObject(includeInstance, f),
    relativeYaw: (f = msg.getRelativeYaw()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    stepPositionStiffness: (f = msg.getStepPositionStiffness()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    dutyCycle: (f = msg.getDutyCycle()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    linkToNext: (f = msg.getLinkToNext()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.GotoParams}
 */
proto.bosdyn.api.spot.GotoParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.GotoParams;
  return proto.bosdyn.api.spot.GotoParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.GotoParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.GotoParams}
 */
proto.bosdyn.api.spot.GotoParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 6:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setRelative(value);
      break;
    case 1:
      var value = new bosdyn_api_geometry_pb.Vec2Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2Value.deserializeBinaryFromReader);
      msg.setAbsolutePosition(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setAbsoluteYaw(value);
      break;
    case 7:
      var value = new bosdyn_api_geometry_pb.Vec2Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2Value.deserializeBinaryFromReader);
      msg.setRelativePosition(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setRelativeYaw(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setStepPositionStiffness(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setDutyCycle(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setLinkToNext(value);
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
proto.bosdyn.api.spot.GotoParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.GotoParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.GotoParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.GotoParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelative();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getAbsolutePosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.Vec2Value.serializeBinaryToWriter
    );
  }
  f = message.getAbsoluteYaw();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getRelativePosition();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      bosdyn_api_geometry_pb.Vec2Value.serializeBinaryToWriter
    );
  }
  f = message.getRelativeYaw();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getStepPositionStiffness();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getDutyCycle();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getLinkToNext();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.BoolValue relative = 6;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.GotoParams.prototype.getRelative = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 6));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.GotoParams} returns this
*/
proto.bosdyn.api.spot.GotoParams.prototype.setRelative = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.GotoParams} returns this
 */
proto.bosdyn.api.spot.GotoParams.prototype.clearRelative = function() {
  return this.setRelative(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.GotoParams.prototype.hasRelative = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bosdyn.api.Vec2Value absolute_position = 1;
 * @return {?proto.bosdyn.api.Vec2Value}
 */
proto.bosdyn.api.spot.GotoParams.prototype.getAbsolutePosition = function() {
  return /** @type{?proto.bosdyn.api.Vec2Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2Value, 1));
};


/**
 * @param {?proto.bosdyn.api.Vec2Value|undefined} value
 * @return {!proto.bosdyn.api.spot.GotoParams} returns this
*/
proto.bosdyn.api.spot.GotoParams.prototype.setAbsolutePosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.GotoParams} returns this
 */
proto.bosdyn.api.spot.GotoParams.prototype.clearAbsolutePosition = function() {
  return this.setAbsolutePosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.GotoParams.prototype.hasAbsolutePosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue absolute_yaw = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.GotoParams.prototype.getAbsoluteYaw = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.GotoParams} returns this
*/
proto.bosdyn.api.spot.GotoParams.prototype.setAbsoluteYaw = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.GotoParams} returns this
 */
proto.bosdyn.api.spot.GotoParams.prototype.clearAbsoluteYaw = function() {
  return this.setAbsoluteYaw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.GotoParams.prototype.hasAbsoluteYaw = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bosdyn.api.Vec2Value relative_position = 7;
 * @return {?proto.bosdyn.api.Vec2Value}
 */
proto.bosdyn.api.spot.GotoParams.prototype.getRelativePosition = function() {
  return /** @type{?proto.bosdyn.api.Vec2Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2Value, 7));
};


/**
 * @param {?proto.bosdyn.api.Vec2Value|undefined} value
 * @return {!proto.bosdyn.api.spot.GotoParams} returns this
*/
proto.bosdyn.api.spot.GotoParams.prototype.setRelativePosition = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.GotoParams} returns this
 */
proto.bosdyn.api.spot.GotoParams.prototype.clearRelativePosition = function() {
  return this.setRelativePosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.GotoParams.prototype.hasRelativePosition = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.DoubleValue relative_yaw = 8;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.GotoParams.prototype.getRelativeYaw = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 8));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.GotoParams} returns this
*/
proto.bosdyn.api.spot.GotoParams.prototype.setRelativeYaw = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.GotoParams} returns this
 */
proto.bosdyn.api.spot.GotoParams.prototype.clearRelativeYaw = function() {
  return this.setRelativeYaw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.GotoParams.prototype.hasRelativeYaw = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.DoubleValue step_position_stiffness = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.GotoParams.prototype.getStepPositionStiffness = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.GotoParams} returns this
*/
proto.bosdyn.api.spot.GotoParams.prototype.setStepPositionStiffness = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.GotoParams} returns this
 */
proto.bosdyn.api.spot.GotoParams.prototype.clearStepPositionStiffness = function() {
  return this.setStepPositionStiffness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.GotoParams.prototype.hasStepPositionStiffness = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue duty_cycle = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.GotoParams.prototype.getDutyCycle = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.GotoParams} returns this
*/
proto.bosdyn.api.spot.GotoParams.prototype.setDutyCycle = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.GotoParams} returns this
 */
proto.bosdyn.api.spot.GotoParams.prototype.clearDutyCycle = function() {
  return this.setDutyCycle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.GotoParams.prototype.hasDutyCycle = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.BoolValue link_to_next = 5;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.GotoParams.prototype.getLinkToNext = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 5));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.GotoParams} returns this
*/
proto.bosdyn.api.spot.GotoParams.prototype.setLinkToNext = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.GotoParams} returns this
 */
proto.bosdyn.api.spot.GotoParams.prototype.clearLinkToNext = function() {
  return this.setLinkToNext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.GotoParams.prototype.hasLinkToNext = function() {
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
proto.bosdyn.api.spot.BourreeParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.BourreeParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.BourreeParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.BourreeParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    velocity: (f = msg.getVelocity()) && bosdyn_api_geometry_pb.Vec2Value.toObject(includeInstance, f),
    yawRate: (f = msg.getYawRate()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    stanceLength: (f = msg.getStanceLength()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.BourreeParams}
 */
proto.bosdyn.api.spot.BourreeParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.BourreeParams;
  return proto.bosdyn.api.spot.BourreeParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.BourreeParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.BourreeParams}
 */
proto.bosdyn.api.spot.BourreeParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.Vec2Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2Value.deserializeBinaryFromReader);
      msg.setVelocity(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setYawRate(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setStanceLength(value);
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
proto.bosdyn.api.spot.BourreeParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.BourreeParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.BourreeParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.BourreeParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVelocity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.Vec2Value.serializeBinaryToWriter
    );
  }
  f = message.getYawRate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getStanceLength();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.Vec2Value velocity = 1;
 * @return {?proto.bosdyn.api.Vec2Value}
 */
proto.bosdyn.api.spot.BourreeParams.prototype.getVelocity = function() {
  return /** @type{?proto.bosdyn.api.Vec2Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2Value, 1));
};


/**
 * @param {?proto.bosdyn.api.Vec2Value|undefined} value
 * @return {!proto.bosdyn.api.spot.BourreeParams} returns this
*/
proto.bosdyn.api.spot.BourreeParams.prototype.setVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.BourreeParams} returns this
 */
proto.bosdyn.api.spot.BourreeParams.prototype.clearVelocity = function() {
  return this.setVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.BourreeParams.prototype.hasVelocity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue yaw_rate = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.BourreeParams.prototype.getYawRate = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.BourreeParams} returns this
*/
proto.bosdyn.api.spot.BourreeParams.prototype.setYawRate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.BourreeParams} returns this
 */
proto.bosdyn.api.spot.BourreeParams.prototype.clearYawRate = function() {
  return this.setYawRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.BourreeParams.prototype.hasYawRate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue stance_length = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.BourreeParams.prototype.getStanceLength = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.BourreeParams} returns this
*/
proto.bosdyn.api.spot.BourreeParams.prototype.setStanceLength = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.BourreeParams} returns this
 */
proto.bosdyn.api.spot.BourreeParams.prototype.clearStanceLength = function() {
  return this.setStanceLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.BourreeParams.prototype.hasStanceLength = function() {
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
proto.bosdyn.api.spot.SideParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.SideParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.SideParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SideParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    side: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.bosdyn.api.spot.SideParams}
 */
proto.bosdyn.api.spot.SideParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.SideParams;
  return proto.bosdyn.api.spot.SideParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.SideParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.SideParams}
 */
proto.bosdyn.api.spot.SideParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.spot.SideParams.Side} */ (reader.readEnum());
      msg.setSide(value);
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
proto.bosdyn.api.spot.SideParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.SideParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.SideParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SideParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSide();
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
proto.bosdyn.api.spot.SideParams.Side = {
  SIDE_UNKNOWN: 0,
  SIDE_LEFT: 1,
  SIDE_RIGHT: 2
};

/**
 * optional Side side = 1;
 * @return {!proto.bosdyn.api.spot.SideParams.Side}
 */
proto.bosdyn.api.spot.SideParams.prototype.getSide = function() {
  return /** @type {!proto.bosdyn.api.spot.SideParams.Side} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.SideParams.Side} value
 * @return {!proto.bosdyn.api.spot.SideParams} returns this
 */
proto.bosdyn.api.spot.SideParams.prototype.setSide = function(value) {
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
proto.bosdyn.api.spot.JumpParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.JumpParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.JumpParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.JumpParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    yaw: (f = msg.getYaw()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    flightSlices: (f = msg.getFlightSlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    stanceWidth: (f = msg.getStanceWidth()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    stanceLength: (f = msg.getStanceLength()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    translation: (f = msg.getTranslation()) && bosdyn_api_geometry_pb.Vec2Value.toObject(includeInstance, f),
    splitFraction: (f = msg.getSplitFraction()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    leadLegPair: jspb.Message.getFieldWithDefault(msg, 8, 0),
    yawIsAbsolute: (f = msg.getYawIsAbsolute()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    translationIsAbsolute: (f = msg.getTranslationIsAbsolute()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    absoluteYaw: (f = msg.getAbsoluteYaw()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    absoluteTranslation: (f = msg.getAbsoluteTranslation()) && bosdyn_api_geometry_pb.Vec2Value.toObject(includeInstance, f),
    swingHeight: (f = msg.getSwingHeight()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    absolute: (f = msg.getAbsolute()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.JumpParams}
 */
proto.bosdyn.api.spot.JumpParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.JumpParams;
  return proto.bosdyn.api.spot.JumpParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.JumpParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.JumpParams}
 */
proto.bosdyn.api.spot.JumpParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setYaw(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFlightSlices(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setStanceWidth(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setStanceLength(value);
      break;
    case 6:
      var value = new bosdyn_api_geometry_pb.Vec2Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2Value.deserializeBinaryFromReader);
      msg.setTranslation(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSplitFraction(value);
      break;
    case 8:
      var value = /** @type {!proto.bosdyn.api.spot.JumpParams.Lead} */ (reader.readEnum());
      msg.setLeadLegPair(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setYawIsAbsolute(value);
      break;
    case 12:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setTranslationIsAbsolute(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setAbsoluteYaw(value);
      break;
    case 10:
      var value = new bosdyn_api_geometry_pb.Vec2Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2Value.deserializeBinaryFromReader);
      msg.setAbsoluteTranslation(value);
      break;
    case 13:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSwingHeight(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setAbsolute(value);
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
proto.bosdyn.api.spot.JumpParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.JumpParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.JumpParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.JumpParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getYaw();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getFlightSlices();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getStanceWidth();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getStanceLength();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getTranslation();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      bosdyn_api_geometry_pb.Vec2Value.serializeBinaryToWriter
    );
  }
  f = message.getSplitFraction();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getLeadLegPair();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getYawIsAbsolute();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getTranslationIsAbsolute();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getAbsoluteYaw();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getAbsoluteTranslation();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      bosdyn_api_geometry_pb.Vec2Value.serializeBinaryToWriter
    );
  }
  f = message.getSwingHeight();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getAbsolute();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.JumpParams.Lead = {
  LEAD_UNKNOWN: 0,
  LEAD_AUTO: 1,
  LEAD_FRONT: 2,
  LEAD_HIND: 3,
  LEAD_LEFT: 4,
  LEAD_RIGHT: 5
};

/**
 * optional google.protobuf.DoubleValue yaw = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.JumpParams.prototype.getYaw = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
*/
proto.bosdyn.api.spot.JumpParams.prototype.setYaw = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
 */
proto.bosdyn.api.spot.JumpParams.prototype.clearYaw = function() {
  return this.setYaw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.JumpParams.prototype.hasYaw = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue flight_slices = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.JumpParams.prototype.getFlightSlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
*/
proto.bosdyn.api.spot.JumpParams.prototype.setFlightSlices = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
 */
proto.bosdyn.api.spot.JumpParams.prototype.clearFlightSlices = function() {
  return this.setFlightSlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.JumpParams.prototype.hasFlightSlices = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue stance_width = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.JumpParams.prototype.getStanceWidth = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
*/
proto.bosdyn.api.spot.JumpParams.prototype.setStanceWidth = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
 */
proto.bosdyn.api.spot.JumpParams.prototype.clearStanceWidth = function() {
  return this.setStanceWidth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.JumpParams.prototype.hasStanceWidth = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue stance_length = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.JumpParams.prototype.getStanceLength = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
*/
proto.bosdyn.api.spot.JumpParams.prototype.setStanceLength = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
 */
proto.bosdyn.api.spot.JumpParams.prototype.clearStanceLength = function() {
  return this.setStanceLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.JumpParams.prototype.hasStanceLength = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bosdyn.api.Vec2Value translation = 6;
 * @return {?proto.bosdyn.api.Vec2Value}
 */
proto.bosdyn.api.spot.JumpParams.prototype.getTranslation = function() {
  return /** @type{?proto.bosdyn.api.Vec2Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2Value, 6));
};


/**
 * @param {?proto.bosdyn.api.Vec2Value|undefined} value
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
*/
proto.bosdyn.api.spot.JumpParams.prototype.setTranslation = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
 */
proto.bosdyn.api.spot.JumpParams.prototype.clearTranslation = function() {
  return this.setTranslation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.JumpParams.prototype.hasTranslation = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.DoubleValue split_fraction = 7;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.JumpParams.prototype.getSplitFraction = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 7));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
*/
proto.bosdyn.api.spot.JumpParams.prototype.setSplitFraction = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
 */
proto.bosdyn.api.spot.JumpParams.prototype.clearSplitFraction = function() {
  return this.setSplitFraction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.JumpParams.prototype.hasSplitFraction = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Lead lead_leg_pair = 8;
 * @return {!proto.bosdyn.api.spot.JumpParams.Lead}
 */
proto.bosdyn.api.spot.JumpParams.prototype.getLeadLegPair = function() {
  return /** @type {!proto.bosdyn.api.spot.JumpParams.Lead} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.JumpParams.Lead} value
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
 */
proto.bosdyn.api.spot.JumpParams.prototype.setLeadLegPair = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional google.protobuf.BoolValue yaw_is_absolute = 11;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.JumpParams.prototype.getYawIsAbsolute = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 11));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
*/
proto.bosdyn.api.spot.JumpParams.prototype.setYawIsAbsolute = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
 */
proto.bosdyn.api.spot.JumpParams.prototype.clearYawIsAbsolute = function() {
  return this.setYawIsAbsolute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.JumpParams.prototype.hasYawIsAbsolute = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.BoolValue translation_is_absolute = 12;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.JumpParams.prototype.getTranslationIsAbsolute = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 12));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
*/
proto.bosdyn.api.spot.JumpParams.prototype.setTranslationIsAbsolute = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
 */
proto.bosdyn.api.spot.JumpParams.prototype.clearTranslationIsAbsolute = function() {
  return this.setTranslationIsAbsolute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.JumpParams.prototype.hasTranslationIsAbsolute = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.DoubleValue absolute_yaw = 9;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.JumpParams.prototype.getAbsoluteYaw = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 9));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
*/
proto.bosdyn.api.spot.JumpParams.prototype.setAbsoluteYaw = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
 */
proto.bosdyn.api.spot.JumpParams.prototype.clearAbsoluteYaw = function() {
  return this.setAbsoluteYaw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.JumpParams.prototype.hasAbsoluteYaw = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bosdyn.api.Vec2Value absolute_translation = 10;
 * @return {?proto.bosdyn.api.Vec2Value}
 */
proto.bosdyn.api.spot.JumpParams.prototype.getAbsoluteTranslation = function() {
  return /** @type{?proto.bosdyn.api.Vec2Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2Value, 10));
};


/**
 * @param {?proto.bosdyn.api.Vec2Value|undefined} value
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
*/
proto.bosdyn.api.spot.JumpParams.prototype.setAbsoluteTranslation = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
 */
proto.bosdyn.api.spot.JumpParams.prototype.clearAbsoluteTranslation = function() {
  return this.setAbsoluteTranslation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.JumpParams.prototype.hasAbsoluteTranslation = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.DoubleValue swing_height = 13;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.JumpParams.prototype.getSwingHeight = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 13));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
*/
proto.bosdyn.api.spot.JumpParams.prototype.setSwingHeight = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
 */
proto.bosdyn.api.spot.JumpParams.prototype.clearSwingHeight = function() {
  return this.setSwingHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.JumpParams.prototype.hasSwingHeight = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.BoolValue absolute = 5;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.JumpParams.prototype.getAbsolute = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 5));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
*/
proto.bosdyn.api.spot.JumpParams.prototype.setAbsolute = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.JumpParams} returns this
 */
proto.bosdyn.api.spot.JumpParams.prototype.clearAbsolute = function() {
  return this.setAbsolute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.JumpParams.prototype.hasAbsolute = function() {
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
proto.bosdyn.api.spot.StepParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.StepParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.StepParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.StepParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    foot: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: (f = msg.getOffset()) && bosdyn_api_geometry_pb.Vec2Value.toObject(includeInstance, f),
    secondFoot: jspb.Message.getFieldWithDefault(msg, 3, 0),
    swingWaypoint: (f = msg.getSwingWaypoint()) && bosdyn_api_geometry_pb.Vec3Value.toObject(includeInstance, f),
    swingHeight: (f = msg.getSwingHeight()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    liftoffVelocity: (f = msg.getLiftoffVelocity()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    touchdownVelocity: (f = msg.getTouchdownVelocity()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    mirrorX: (f = msg.getMirrorX()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    mirrorY: (f = msg.getMirrorY()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    mirror: (f = msg.getMirror()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    waypointDwell: (f = msg.getWaypointDwell()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    touch: (f = msg.getTouch()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    touchOffset: (f = msg.getTouchOffset()) && bosdyn_api_geometry_pb.Vec2Value.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.StepParams}
 */
proto.bosdyn.api.spot.StepParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.StepParams;
  return proto.bosdyn.api.spot.StepParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.StepParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.StepParams}
 */
proto.bosdyn.api.spot.StepParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.spot.Leg} */ (reader.readEnum());
      msg.setFoot(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.Vec2Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2Value.deserializeBinaryFromReader);
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {!proto.bosdyn.api.spot.Leg} */ (reader.readEnum());
      msg.setSecondFoot(value);
      break;
    case 5:
      var value = new bosdyn_api_geometry_pb.Vec3Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3Value.deserializeBinaryFromReader);
      msg.setSwingWaypoint(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSwingHeight(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setLiftoffVelocity(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setTouchdownVelocity(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setMirrorX(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setMirrorY(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setMirror(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setWaypointDwell(value);
      break;
    case 12:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setTouch(value);
      break;
    case 13:
      var value = new bosdyn_api_geometry_pb.Vec2Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2Value.deserializeBinaryFromReader);
      msg.setTouchOffset(value);
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
proto.bosdyn.api.spot.StepParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.StepParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.StepParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.StepParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFoot();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.Vec2Value.serializeBinaryToWriter
    );
  }
  f = message.getSecondFoot();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSwingWaypoint();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_geometry_pb.Vec3Value.serializeBinaryToWriter
    );
  }
  f = message.getSwingHeight();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getLiftoffVelocity();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getTouchdownVelocity();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getMirrorX();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getMirrorY();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getMirror();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getWaypointDwell();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getTouch();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getTouchOffset();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      bosdyn_api_geometry_pb.Vec2Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional Leg foot = 1;
 * @return {!proto.bosdyn.api.spot.Leg}
 */
proto.bosdyn.api.spot.StepParams.prototype.getFoot = function() {
  return /** @type {!proto.bosdyn.api.spot.Leg} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.Leg} value
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
 */
proto.bosdyn.api.spot.StepParams.prototype.setFoot = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bosdyn.api.Vec2Value offset = 2;
 * @return {?proto.bosdyn.api.Vec2Value}
 */
proto.bosdyn.api.spot.StepParams.prototype.getOffset = function() {
  return /** @type{?proto.bosdyn.api.Vec2Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2Value, 2));
};


/**
 * @param {?proto.bosdyn.api.Vec2Value|undefined} value
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
*/
proto.bosdyn.api.spot.StepParams.prototype.setOffset = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
 */
proto.bosdyn.api.spot.StepParams.prototype.clearOffset = function() {
  return this.setOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StepParams.prototype.hasOffset = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Leg second_foot = 3;
 * @return {!proto.bosdyn.api.spot.Leg}
 */
proto.bosdyn.api.spot.StepParams.prototype.getSecondFoot = function() {
  return /** @type {!proto.bosdyn.api.spot.Leg} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.Leg} value
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
 */
proto.bosdyn.api.spot.StepParams.prototype.setSecondFoot = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bosdyn.api.Vec3Value swing_waypoint = 5;
 * @return {?proto.bosdyn.api.Vec3Value}
 */
proto.bosdyn.api.spot.StepParams.prototype.getSwingWaypoint = function() {
  return /** @type{?proto.bosdyn.api.Vec3Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3Value, 5));
};


/**
 * @param {?proto.bosdyn.api.Vec3Value|undefined} value
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
*/
proto.bosdyn.api.spot.StepParams.prototype.setSwingWaypoint = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
 */
proto.bosdyn.api.spot.StepParams.prototype.clearSwingWaypoint = function() {
  return this.setSwingWaypoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StepParams.prototype.hasSwingWaypoint = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue swing_height = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.StepParams.prototype.getSwingHeight = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
*/
proto.bosdyn.api.spot.StepParams.prototype.setSwingHeight = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
 */
proto.bosdyn.api.spot.StepParams.prototype.clearSwingHeight = function() {
  return this.setSwingHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StepParams.prototype.hasSwingHeight = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.DoubleValue liftoff_velocity = 7;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.StepParams.prototype.getLiftoffVelocity = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 7));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
*/
proto.bosdyn.api.spot.StepParams.prototype.setLiftoffVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
 */
proto.bosdyn.api.spot.StepParams.prototype.clearLiftoffVelocity = function() {
  return this.setLiftoffVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StepParams.prototype.hasLiftoffVelocity = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.DoubleValue touchdown_velocity = 8;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.StepParams.prototype.getTouchdownVelocity = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 8));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
*/
proto.bosdyn.api.spot.StepParams.prototype.setTouchdownVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
 */
proto.bosdyn.api.spot.StepParams.prototype.clearTouchdownVelocity = function() {
  return this.setTouchdownVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StepParams.prototype.hasTouchdownVelocity = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.BoolValue mirror_x = 9;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.StepParams.prototype.getMirrorX = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 9));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
*/
proto.bosdyn.api.spot.StepParams.prototype.setMirrorX = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
 */
proto.bosdyn.api.spot.StepParams.prototype.clearMirrorX = function() {
  return this.setMirrorX(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StepParams.prototype.hasMirrorX = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.BoolValue mirror_y = 10;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.StepParams.prototype.getMirrorY = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 10));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
*/
proto.bosdyn.api.spot.StepParams.prototype.setMirrorY = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
 */
proto.bosdyn.api.spot.StepParams.prototype.clearMirrorY = function() {
  return this.setMirrorY(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StepParams.prototype.hasMirrorY = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.BoolValue mirror = 4;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.StepParams.prototype.getMirror = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 4));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
*/
proto.bosdyn.api.spot.StepParams.prototype.setMirror = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
 */
proto.bosdyn.api.spot.StepParams.prototype.clearMirror = function() {
  return this.setMirror(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StepParams.prototype.hasMirror = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue waypoint_dwell = 11;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.StepParams.prototype.getWaypointDwell = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 11));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
*/
proto.bosdyn.api.spot.StepParams.prototype.setWaypointDwell = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
 */
proto.bosdyn.api.spot.StepParams.prototype.clearWaypointDwell = function() {
  return this.setWaypointDwell(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StepParams.prototype.hasWaypointDwell = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.BoolValue touch = 12;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.StepParams.prototype.getTouch = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 12));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
*/
proto.bosdyn.api.spot.StepParams.prototype.setTouch = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
 */
proto.bosdyn.api.spot.StepParams.prototype.clearTouch = function() {
  return this.setTouch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StepParams.prototype.hasTouch = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bosdyn.api.Vec2Value touch_offset = 13;
 * @return {?proto.bosdyn.api.Vec2Value}
 */
proto.bosdyn.api.spot.StepParams.prototype.getTouchOffset = function() {
  return /** @type{?proto.bosdyn.api.Vec2Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2Value, 13));
};


/**
 * @param {?proto.bosdyn.api.Vec2Value|undefined} value
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
*/
proto.bosdyn.api.spot.StepParams.prototype.setTouchOffset = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StepParams} returns this
 */
proto.bosdyn.api.spot.StepParams.prototype.clearTouchOffset = function() {
  return this.setTouchOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StepParams.prototype.hasTouchOffset = function() {
  return jspb.Message.getField(this, 13) != null;
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
proto.bosdyn.api.spot.RotateBodyParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.RotateBodyParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.RotateBodyParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.RotateBodyParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    rotation: (f = msg.getRotation()) && proto.bosdyn.api.spot.EulerZYXValue.toObject(includeInstance, f),
    returnToStartPose: (f = msg.getReturnToStartPose()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.RotateBodyParams}
 */
proto.bosdyn.api.spot.RotateBodyParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.RotateBodyParams;
  return proto.bosdyn.api.spot.RotateBodyParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.RotateBodyParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.RotateBodyParams}
 */
proto.bosdyn.api.spot.RotateBodyParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.EulerZYXValue;
      reader.readMessage(value,proto.bosdyn.api.spot.EulerZYXValue.deserializeBinaryFromReader);
      msg.setRotation(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setReturnToStartPose(value);
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
proto.bosdyn.api.spot.RotateBodyParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.RotateBodyParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.RotateBodyParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.RotateBodyParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRotation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.EulerZYXValue.serializeBinaryToWriter
    );
  }
  f = message.getReturnToStartPose();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional EulerZYXValue rotation = 1;
 * @return {?proto.bosdyn.api.spot.EulerZYXValue}
 */
proto.bosdyn.api.spot.RotateBodyParams.prototype.getRotation = function() {
  return /** @type{?proto.bosdyn.api.spot.EulerZYXValue} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.EulerZYXValue, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.EulerZYXValue|undefined} value
 * @return {!proto.bosdyn.api.spot.RotateBodyParams} returns this
*/
proto.bosdyn.api.spot.RotateBodyParams.prototype.setRotation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RotateBodyParams} returns this
 */
proto.bosdyn.api.spot.RotateBodyParams.prototype.clearRotation = function() {
  return this.setRotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RotateBodyParams.prototype.hasRotation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.BoolValue return_to_start_pose = 2;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.RotateBodyParams.prototype.getReturnToStartPose = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 2));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.RotateBodyParams} returns this
*/
proto.bosdyn.api.spot.RotateBodyParams.prototype.setReturnToStartPose = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RotateBodyParams} returns this
 */
proto.bosdyn.api.spot.RotateBodyParams.prototype.clearReturnToStartPose = function() {
  return this.setReturnToStartPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RotateBodyParams.prototype.hasReturnToStartPose = function() {
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
proto.bosdyn.api.spot.ButtCircleParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ButtCircleParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ButtCircleParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ButtCircleParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    radius: (f = msg.getRadius()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    beatsPerCircle: (f = msg.getBeatsPerCircle()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    numberOfCircles: (f = msg.getNumberOfCircles()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    pivot: jspb.Message.getFieldWithDefault(msg, 4, 0),
    clockwise: (f = msg.getClockwise()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    startingAngle: (f = msg.getStartingAngle()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.ButtCircleParams}
 */
proto.bosdyn.api.spot.ButtCircleParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ButtCircleParams;
  return proto.bosdyn.api.spot.ButtCircleParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ButtCircleParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ButtCircleParams}
 */
proto.bosdyn.api.spot.ButtCircleParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setRadius(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setBeatsPerCircle(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setNumberOfCircles(value);
      break;
    case 4:
      var value = /** @type {!proto.bosdyn.api.spot.Pivot} */ (reader.readEnum());
      msg.setPivot(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setClockwise(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setStartingAngle(value);
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
proto.bosdyn.api.spot.ButtCircleParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ButtCircleParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ButtCircleParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ButtCircleParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRadius();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getBeatsPerCircle();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getNumberOfCircles();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getPivot();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getClockwise();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getStartingAngle();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue radius = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ButtCircleParams.prototype.getRadius = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ButtCircleParams} returns this
*/
proto.bosdyn.api.spot.ButtCircleParams.prototype.setRadius = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ButtCircleParams} returns this
 */
proto.bosdyn.api.spot.ButtCircleParams.prototype.clearRadius = function() {
  return this.setRadius(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ButtCircleParams.prototype.hasRadius = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue beats_per_circle = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ButtCircleParams.prototype.getBeatsPerCircle = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ButtCircleParams} returns this
*/
proto.bosdyn.api.spot.ButtCircleParams.prototype.setBeatsPerCircle = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ButtCircleParams} returns this
 */
proto.bosdyn.api.spot.ButtCircleParams.prototype.clearBeatsPerCircle = function() {
  return this.setBeatsPerCircle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ButtCircleParams.prototype.hasBeatsPerCircle = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue number_of_circles = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ButtCircleParams.prototype.getNumberOfCircles = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ButtCircleParams} returns this
*/
proto.bosdyn.api.spot.ButtCircleParams.prototype.setNumberOfCircles = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ButtCircleParams} returns this
 */
proto.bosdyn.api.spot.ButtCircleParams.prototype.clearNumberOfCircles = function() {
  return this.setNumberOfCircles(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ButtCircleParams.prototype.hasNumberOfCircles = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Pivot pivot = 4;
 * @return {!proto.bosdyn.api.spot.Pivot}
 */
proto.bosdyn.api.spot.ButtCircleParams.prototype.getPivot = function() {
  return /** @type {!proto.bosdyn.api.spot.Pivot} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.Pivot} value
 * @return {!proto.bosdyn.api.spot.ButtCircleParams} returns this
 */
proto.bosdyn.api.spot.ButtCircleParams.prototype.setPivot = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.protobuf.BoolValue clockwise = 5;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.ButtCircleParams.prototype.getClockwise = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 5));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ButtCircleParams} returns this
*/
proto.bosdyn.api.spot.ButtCircleParams.prototype.setClockwise = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ButtCircleParams} returns this
 */
proto.bosdyn.api.spot.ButtCircleParams.prototype.clearClockwise = function() {
  return this.setClockwise(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ButtCircleParams.prototype.hasClockwise = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue starting_angle = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ButtCircleParams.prototype.getStartingAngle = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ButtCircleParams} returns this
*/
proto.bosdyn.api.spot.ButtCircleParams.prototype.setStartingAngle = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ButtCircleParams} returns this
 */
proto.bosdyn.api.spot.ButtCircleParams.prototype.clearStartingAngle = function() {
  return this.setStartingAngle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ButtCircleParams.prototype.hasStartingAngle = function() {
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
proto.bosdyn.api.spot.TwerkParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.TwerkParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.TwerkParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.TwerkParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: (f = msg.getHeight()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.TwerkParams}
 */
proto.bosdyn.api.spot.TwerkParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.TwerkParams;
  return proto.bosdyn.api.spot.TwerkParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.TwerkParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.TwerkParams}
 */
proto.bosdyn.api.spot.TwerkParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setHeight(value);
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
proto.bosdyn.api.spot.TwerkParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.TwerkParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.TwerkParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.TwerkParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue height = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.TwerkParams.prototype.getHeight = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.TwerkParams} returns this
*/
proto.bosdyn.api.spot.TwerkParams.prototype.setHeight = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.TwerkParams} returns this
 */
proto.bosdyn.api.spot.TwerkParams.prototype.clearHeight = function() {
  return this.setHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.TwerkParams.prototype.hasHeight = function() {
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
proto.bosdyn.api.spot.TurnParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.TurnParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.TurnParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.TurnParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    yaw: (f = msg.getYaw()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    absoluteYaw: (f = msg.getAbsoluteYaw()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    yawIsAbsolute: (f = msg.getYawIsAbsolute()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    swingHeight: (f = msg.getSwingHeight()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    swingVelocity: (f = msg.getSwingVelocity()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    motion: (f = msg.getMotion()) && bosdyn_api_geometry_pb.Vec2Value.toObject(includeInstance, f),
    absoluteMotion: (f = msg.getAbsoluteMotion()) && bosdyn_api_geometry_pb.Vec2Value.toObject(includeInstance, f),
    motionIsAbsolute: (f = msg.getMotionIsAbsolute()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    absolute: (f = msg.getAbsolute()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.TurnParams}
 */
proto.bosdyn.api.spot.TurnParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.TurnParams;
  return proto.bosdyn.api.spot.TurnParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.TurnParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.TurnParams}
 */
proto.bosdyn.api.spot.TurnParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setYaw(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setAbsoluteYaw(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setYawIsAbsolute(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSwingHeight(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSwingVelocity(value);
      break;
    case 7:
      var value = new bosdyn_api_geometry_pb.Vec2Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2Value.deserializeBinaryFromReader);
      msg.setMotion(value);
      break;
    case 8:
      var value = new bosdyn_api_geometry_pb.Vec2Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2Value.deserializeBinaryFromReader);
      msg.setAbsoluteMotion(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setMotionIsAbsolute(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setAbsolute(value);
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
proto.bosdyn.api.spot.TurnParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.TurnParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.TurnParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.TurnParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getYaw();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getAbsoluteYaw();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getYawIsAbsolute();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getSwingHeight();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getSwingVelocity();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getMotion();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      bosdyn_api_geometry_pb.Vec2Value.serializeBinaryToWriter
    );
  }
  f = message.getAbsoluteMotion();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      bosdyn_api_geometry_pb.Vec2Value.serializeBinaryToWriter
    );
  }
  f = message.getMotionIsAbsolute();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getAbsolute();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue yaw = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.TurnParams.prototype.getYaw = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
*/
proto.bosdyn.api.spot.TurnParams.prototype.setYaw = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
 */
proto.bosdyn.api.spot.TurnParams.prototype.clearYaw = function() {
  return this.setYaw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.TurnParams.prototype.hasYaw = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue absolute_yaw = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.TurnParams.prototype.getAbsoluteYaw = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
*/
proto.bosdyn.api.spot.TurnParams.prototype.setAbsoluteYaw = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
 */
proto.bosdyn.api.spot.TurnParams.prototype.clearAbsoluteYaw = function() {
  return this.setAbsoluteYaw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.TurnParams.prototype.hasAbsoluteYaw = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.BoolValue yaw_is_absolute = 6;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.TurnParams.prototype.getYawIsAbsolute = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 6));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
*/
proto.bosdyn.api.spot.TurnParams.prototype.setYawIsAbsolute = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
 */
proto.bosdyn.api.spot.TurnParams.prototype.clearYawIsAbsolute = function() {
  return this.setYawIsAbsolute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.TurnParams.prototype.hasYawIsAbsolute = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.DoubleValue swing_height = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.TurnParams.prototype.getSwingHeight = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
*/
proto.bosdyn.api.spot.TurnParams.prototype.setSwingHeight = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
 */
proto.bosdyn.api.spot.TurnParams.prototype.clearSwingHeight = function() {
  return this.setSwingHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.TurnParams.prototype.hasSwingHeight = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue swing_velocity = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.TurnParams.prototype.getSwingVelocity = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
*/
proto.bosdyn.api.spot.TurnParams.prototype.setSwingVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
 */
proto.bosdyn.api.spot.TurnParams.prototype.clearSwingVelocity = function() {
  return this.setSwingVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.TurnParams.prototype.hasSwingVelocity = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bosdyn.api.Vec2Value motion = 7;
 * @return {?proto.bosdyn.api.Vec2Value}
 */
proto.bosdyn.api.spot.TurnParams.prototype.getMotion = function() {
  return /** @type{?proto.bosdyn.api.Vec2Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2Value, 7));
};


/**
 * @param {?proto.bosdyn.api.Vec2Value|undefined} value
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
*/
proto.bosdyn.api.spot.TurnParams.prototype.setMotion = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
 */
proto.bosdyn.api.spot.TurnParams.prototype.clearMotion = function() {
  return this.setMotion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.TurnParams.prototype.hasMotion = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bosdyn.api.Vec2Value absolute_motion = 8;
 * @return {?proto.bosdyn.api.Vec2Value}
 */
proto.bosdyn.api.spot.TurnParams.prototype.getAbsoluteMotion = function() {
  return /** @type{?proto.bosdyn.api.Vec2Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2Value, 8));
};


/**
 * @param {?proto.bosdyn.api.Vec2Value|undefined} value
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
*/
proto.bosdyn.api.spot.TurnParams.prototype.setAbsoluteMotion = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
 */
proto.bosdyn.api.spot.TurnParams.prototype.clearAbsoluteMotion = function() {
  return this.setAbsoluteMotion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.TurnParams.prototype.hasAbsoluteMotion = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.BoolValue motion_is_absolute = 9;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.TurnParams.prototype.getMotionIsAbsolute = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 9));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
*/
proto.bosdyn.api.spot.TurnParams.prototype.setMotionIsAbsolute = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
 */
proto.bosdyn.api.spot.TurnParams.prototype.clearMotionIsAbsolute = function() {
  return this.setMotionIsAbsolute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.TurnParams.prototype.hasMotionIsAbsolute = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.BoolValue absolute = 2;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.TurnParams.prototype.getAbsolute = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 2));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
*/
proto.bosdyn.api.spot.TurnParams.prototype.setAbsolute = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.TurnParams} returns this
 */
proto.bosdyn.api.spot.TurnParams.prototype.clearAbsolute = function() {
  return this.setAbsolute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.TurnParams.prototype.hasAbsolute = function() {
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
proto.bosdyn.api.spot.Pace2StepParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.Pace2StepParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.Pace2StepParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.Pace2StepParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    motion: (f = msg.getMotion()) && bosdyn_api_geometry_pb.Vec2Value.toObject(includeInstance, f),
    absoluteMotion: (f = msg.getAbsoluteMotion()) && bosdyn_api_geometry_pb.Vec2Value.toObject(includeInstance, f),
    motionIsAbsolute: (f = msg.getMotionIsAbsolute()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    swingHeight: (f = msg.getSwingHeight()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    swingVelocity: (f = msg.getSwingVelocity()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    yaw: (f = msg.getYaw()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    absoluteYaw: (f = msg.getAbsoluteYaw()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    yawIsAbsolute: (f = msg.getYawIsAbsolute()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    absolute: (f = msg.getAbsolute()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.Pace2StepParams}
 */
proto.bosdyn.api.spot.Pace2StepParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.Pace2StepParams;
  return proto.bosdyn.api.spot.Pace2StepParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.Pace2StepParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.Pace2StepParams}
 */
proto.bosdyn.api.spot.Pace2StepParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.Vec2Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2Value.deserializeBinaryFromReader);
      msg.setMotion(value);
      break;
    case 6:
      var value = new bosdyn_api_geometry_pb.Vec2Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2Value.deserializeBinaryFromReader);
      msg.setAbsoluteMotion(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setMotionIsAbsolute(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSwingHeight(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSwingVelocity(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setYaw(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setAbsoluteYaw(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setYawIsAbsolute(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setAbsolute(value);
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
proto.bosdyn.api.spot.Pace2StepParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.Pace2StepParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.Pace2StepParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.Pace2StepParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMotion();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.Vec2Value.serializeBinaryToWriter
    );
  }
  f = message.getAbsoluteMotion();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      bosdyn_api_geometry_pb.Vec2Value.serializeBinaryToWriter
    );
  }
  f = message.getMotionIsAbsolute();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getSwingHeight();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getSwingVelocity();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getYaw();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getAbsoluteYaw();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getYawIsAbsolute();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getAbsolute();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.Vec2Value motion = 1;
 * @return {?proto.bosdyn.api.Vec2Value}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.getMotion = function() {
  return /** @type{?proto.bosdyn.api.Vec2Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2Value, 1));
};


/**
 * @param {?proto.bosdyn.api.Vec2Value|undefined} value
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
*/
proto.bosdyn.api.spot.Pace2StepParams.prototype.setMotion = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.clearMotion = function() {
  return this.setMotion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.hasMotion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.Vec2Value absolute_motion = 6;
 * @return {?proto.bosdyn.api.Vec2Value}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.getAbsoluteMotion = function() {
  return /** @type{?proto.bosdyn.api.Vec2Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2Value, 6));
};


/**
 * @param {?proto.bosdyn.api.Vec2Value|undefined} value
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
*/
proto.bosdyn.api.spot.Pace2StepParams.prototype.setAbsoluteMotion = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.clearAbsoluteMotion = function() {
  return this.setAbsoluteMotion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.hasAbsoluteMotion = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.BoolValue motion_is_absolute = 7;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.getMotionIsAbsolute = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 7));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
*/
proto.bosdyn.api.spot.Pace2StepParams.prototype.setMotionIsAbsolute = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.clearMotionIsAbsolute = function() {
  return this.setMotionIsAbsolute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.hasMotionIsAbsolute = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.DoubleValue swing_height = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.getSwingHeight = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
*/
proto.bosdyn.api.spot.Pace2StepParams.prototype.setSwingHeight = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.clearSwingHeight = function() {
  return this.setSwingHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.hasSwingHeight = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue swing_velocity = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.getSwingVelocity = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
*/
proto.bosdyn.api.spot.Pace2StepParams.prototype.setSwingVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.clearSwingVelocity = function() {
  return this.setSwingVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.hasSwingVelocity = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue yaw = 8;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.getYaw = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 8));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
*/
proto.bosdyn.api.spot.Pace2StepParams.prototype.setYaw = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.clearYaw = function() {
  return this.setYaw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.hasYaw = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.DoubleValue absolute_yaw = 9;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.getAbsoluteYaw = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 9));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
*/
proto.bosdyn.api.spot.Pace2StepParams.prototype.setAbsoluteYaw = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.clearAbsoluteYaw = function() {
  return this.setAbsoluteYaw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.hasAbsoluteYaw = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.BoolValue yaw_is_absolute = 10;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.getYawIsAbsolute = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 10));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
*/
proto.bosdyn.api.spot.Pace2StepParams.prototype.setYawIsAbsolute = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.clearYawIsAbsolute = function() {
  return this.setYawIsAbsolute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.hasYawIsAbsolute = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.BoolValue absolute = 5;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.getAbsolute = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 5));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
*/
proto.bosdyn.api.spot.Pace2StepParams.prototype.setAbsolute = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Pace2StepParams} returns this
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.clearAbsolute = function() {
  return this.setAbsolute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Pace2StepParams.prototype.hasAbsolute = function() {
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
proto.bosdyn.api.spot.ChickenHeadParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ChickenHeadParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ChickenHeadParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChickenHeadParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    bobMagnitude: (f = msg.getBobMagnitude()) && bosdyn_api_geometry_pb.Vec3Value.toObject(includeInstance, f),
    beatsPerCycle: (f = msg.getBeatsPerCycle()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    follow: (f = msg.getFollow()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.ChickenHeadParams}
 */
proto.bosdyn.api.spot.ChickenHeadParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ChickenHeadParams;
  return proto.bosdyn.api.spot.ChickenHeadParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ChickenHeadParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ChickenHeadParams}
 */
proto.bosdyn.api.spot.ChickenHeadParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.Vec3Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3Value.deserializeBinaryFromReader);
      msg.setBobMagnitude(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setBeatsPerCycle(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setFollow(value);
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
proto.bosdyn.api.spot.ChickenHeadParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ChickenHeadParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ChickenHeadParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChickenHeadParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBobMagnitude();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.Vec3Value.serializeBinaryToWriter
    );
  }
  f = message.getBeatsPerCycle();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getFollow();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.Vec3Value bob_magnitude = 1;
 * @return {?proto.bosdyn.api.Vec3Value}
 */
proto.bosdyn.api.spot.ChickenHeadParams.prototype.getBobMagnitude = function() {
  return /** @type{?proto.bosdyn.api.Vec3Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3Value, 1));
};


/**
 * @param {?proto.bosdyn.api.Vec3Value|undefined} value
 * @return {!proto.bosdyn.api.spot.ChickenHeadParams} returns this
*/
proto.bosdyn.api.spot.ChickenHeadParams.prototype.setBobMagnitude = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChickenHeadParams} returns this
 */
proto.bosdyn.api.spot.ChickenHeadParams.prototype.clearBobMagnitude = function() {
  return this.setBobMagnitude(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChickenHeadParams.prototype.hasBobMagnitude = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Int32Value beats_per_cycle = 2;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.bosdyn.api.spot.ChickenHeadParams.prototype.getBeatsPerCycle = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.bosdyn.api.spot.ChickenHeadParams} returns this
*/
proto.bosdyn.api.spot.ChickenHeadParams.prototype.setBeatsPerCycle = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChickenHeadParams} returns this
 */
proto.bosdyn.api.spot.ChickenHeadParams.prototype.clearBeatsPerCycle = function() {
  return this.setBeatsPerCycle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChickenHeadParams.prototype.hasBeatsPerCycle = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.BoolValue follow = 3;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.ChickenHeadParams.prototype.getFollow = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 3));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ChickenHeadParams} returns this
*/
proto.bosdyn.api.spot.ChickenHeadParams.prototype.setFollow = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChickenHeadParams} returns this
 */
proto.bosdyn.api.spot.ChickenHeadParams.prototype.clearFollow = function() {
  return this.setFollow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChickenHeadParams.prototype.hasFollow = function() {
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
proto.bosdyn.api.spot.ClapParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ClapParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ClapParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ClapParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: (f = msg.getDirection()) && bosdyn_api_geometry_pb.Vec3Value.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && bosdyn_api_geometry_pb.Vec3Value.toObject(includeInstance, f),
    speed: (f = msg.getSpeed()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    clapDistance: (f = msg.getClapDistance()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.ClapParams}
 */
proto.bosdyn.api.spot.ClapParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ClapParams;
  return proto.bosdyn.api.spot.ClapParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ClapParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ClapParams}
 */
proto.bosdyn.api.spot.ClapParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.Vec3Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3Value.deserializeBinaryFromReader);
      msg.setDirection(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.Vec3Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3Value.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSpeed(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setClapDistance(value);
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
proto.bosdyn.api.spot.ClapParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ClapParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ClapParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ClapParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.Vec3Value.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.Vec3Value.serializeBinaryToWriter
    );
  }
  f = message.getSpeed();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getClapDistance();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.Vec3Value direction = 1;
 * @return {?proto.bosdyn.api.Vec3Value}
 */
proto.bosdyn.api.spot.ClapParams.prototype.getDirection = function() {
  return /** @type{?proto.bosdyn.api.Vec3Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3Value, 1));
};


/**
 * @param {?proto.bosdyn.api.Vec3Value|undefined} value
 * @return {!proto.bosdyn.api.spot.ClapParams} returns this
*/
proto.bosdyn.api.spot.ClapParams.prototype.setDirection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ClapParams} returns this
 */
proto.bosdyn.api.spot.ClapParams.prototype.clearDirection = function() {
  return this.setDirection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ClapParams.prototype.hasDirection = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.Vec3Value location = 2;
 * @return {?proto.bosdyn.api.Vec3Value}
 */
proto.bosdyn.api.spot.ClapParams.prototype.getLocation = function() {
  return /** @type{?proto.bosdyn.api.Vec3Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3Value, 2));
};


/**
 * @param {?proto.bosdyn.api.Vec3Value|undefined} value
 * @return {!proto.bosdyn.api.spot.ClapParams} returns this
*/
proto.bosdyn.api.spot.ClapParams.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ClapParams} returns this
 */
proto.bosdyn.api.spot.ClapParams.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ClapParams.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue speed = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ClapParams.prototype.getSpeed = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ClapParams} returns this
*/
proto.bosdyn.api.spot.ClapParams.prototype.setSpeed = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ClapParams} returns this
 */
proto.bosdyn.api.spot.ClapParams.prototype.clearSpeed = function() {
  return this.setSpeed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ClapParams.prototype.hasSpeed = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue clap_distance = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ClapParams.prototype.getClapDistance = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ClapParams} returns this
*/
proto.bosdyn.api.spot.ClapParams.prototype.setClapDistance = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ClapParams} returns this
 */
proto.bosdyn.api.spot.ClapParams.prototype.clearClapDistance = function() {
  return this.setClapDistance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ClapParams.prototype.hasClapDistance = function() {
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
proto.bosdyn.api.spot.KneelCircleParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.KneelCircleParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.KneelCircleParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.KneelCircleParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && bosdyn_api_geometry_pb.Vec3Value.toObject(includeInstance, f),
    beatsPerCircle: (f = msg.getBeatsPerCircle()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    numberOfCircles: (f = msg.getNumberOfCircles()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    offset: (f = msg.getOffset()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    radius: (f = msg.getRadius()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    reverse: (f = msg.getReverse()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.KneelCircleParams}
 */
proto.bosdyn.api.spot.KneelCircleParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.KneelCircleParams;
  return proto.bosdyn.api.spot.KneelCircleParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.KneelCircleParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.KneelCircleParams}
 */
proto.bosdyn.api.spot.KneelCircleParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.Vec3Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3Value.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setBeatsPerCircle(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setNumberOfCircles(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setOffset(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setRadius(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setReverse(value);
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
proto.bosdyn.api.spot.KneelCircleParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.KneelCircleParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.KneelCircleParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.KneelCircleParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.Vec3Value.serializeBinaryToWriter
    );
  }
  f = message.getBeatsPerCircle();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getNumberOfCircles();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getOffset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getRadius();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getReverse();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.Vec3Value location = 1;
 * @return {?proto.bosdyn.api.Vec3Value}
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.getLocation = function() {
  return /** @type{?proto.bosdyn.api.Vec3Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3Value, 1));
};


/**
 * @param {?proto.bosdyn.api.Vec3Value|undefined} value
 * @return {!proto.bosdyn.api.spot.KneelCircleParams} returns this
*/
proto.bosdyn.api.spot.KneelCircleParams.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.KneelCircleParams} returns this
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Int32Value beats_per_circle = 2;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.getBeatsPerCircle = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.bosdyn.api.spot.KneelCircleParams} returns this
*/
proto.bosdyn.api.spot.KneelCircleParams.prototype.setBeatsPerCircle = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.KneelCircleParams} returns this
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.clearBeatsPerCircle = function() {
  return this.setBeatsPerCircle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.hasBeatsPerCircle = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue number_of_circles = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.getNumberOfCircles = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.KneelCircleParams} returns this
*/
proto.bosdyn.api.spot.KneelCircleParams.prototype.setNumberOfCircles = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.KneelCircleParams} returns this
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.clearNumberOfCircles = function() {
  return this.setNumberOfCircles(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.hasNumberOfCircles = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue offset = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.getOffset = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.KneelCircleParams} returns this
*/
proto.bosdyn.api.spot.KneelCircleParams.prototype.setOffset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.KneelCircleParams} returns this
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.clearOffset = function() {
  return this.setOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.hasOffset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue radius = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.getRadius = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.KneelCircleParams} returns this
*/
proto.bosdyn.api.spot.KneelCircleParams.prototype.setRadius = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.KneelCircleParams} returns this
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.clearRadius = function() {
  return this.setRadius(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.hasRadius = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.BoolValue reverse = 6;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.getReverse = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 6));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.KneelCircleParams} returns this
*/
proto.bosdyn.api.spot.KneelCircleParams.prototype.setReverse = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.KneelCircleParams} returns this
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.clearReverse = function() {
  return this.setReverse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.KneelCircleParams.prototype.hasReverse = function() {
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
proto.bosdyn.api.spot.FrontUpParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.FrontUpParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.FrontUpParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.FrontUpParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    mirror: (f = msg.getMirror()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.FrontUpParams}
 */
proto.bosdyn.api.spot.FrontUpParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.FrontUpParams;
  return proto.bosdyn.api.spot.FrontUpParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.FrontUpParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.FrontUpParams}
 */
proto.bosdyn.api.spot.FrontUpParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setMirror(value);
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
proto.bosdyn.api.spot.FrontUpParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.FrontUpParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.FrontUpParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.FrontUpParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMirror();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.BoolValue mirror = 1;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.FrontUpParams.prototype.getMirror = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 1));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.FrontUpParams} returns this
*/
proto.bosdyn.api.spot.FrontUpParams.prototype.setMirror = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FrontUpParams} returns this
 */
proto.bosdyn.api.spot.FrontUpParams.prototype.clearMirror = function() {
  return this.setMirror(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FrontUpParams.prototype.hasMirror = function() {
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
proto.bosdyn.api.spot.FidgetStandParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.FidgetStandParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.FidgetStandParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.FidgetStandParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    preset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    minGazePitch: (f = msg.getMinGazePitch()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    maxGazePitch: (f = msg.getMaxGazePitch()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    gazeMeanPeriod: (f = msg.getGazeMeanPeriod()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    gazeCenterCfp: (f = msg.getGazeCenterCfp()) && bosdyn_api_geometry_pb.Vec3Value.toObject(includeInstance, f),
    shiftMeanPeriod: (f = msg.getShiftMeanPeriod()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    shiftMaxTransitionTime: (f = msg.getShiftMaxTransitionTime()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    breathMinZ: (f = msg.getBreathMinZ()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    breathMaxZ: (f = msg.getBreathMaxZ()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    breathMaxPeriod: (f = msg.getBreathMaxPeriod()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    legGestureMeanPeriod: (f = msg.getLegGestureMeanPeriod()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    gazeSlewRate: (f = msg.getGazeSlewRate()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    gazePositionGenerationGain: (f = msg.getGazePositionGenerationGain()) && bosdyn_api_geometry_pb.Vec3Value.toObject(includeInstance, f),
    gazeRollGenerationGain: (f = msg.getGazeRollGenerationGain()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.FidgetStandParams}
 */
proto.bosdyn.api.spot.FidgetStandParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.FidgetStandParams;
  return proto.bosdyn.api.spot.FidgetStandParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.FidgetStandParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.FidgetStandParams}
 */
proto.bosdyn.api.spot.FidgetStandParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.spot.FidgetStandParams.FidgetPreset} */ (reader.readEnum());
      msg.setPreset(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMinGazePitch(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMaxGazePitch(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setGazeMeanPeriod(value);
      break;
    case 5:
      var value = new bosdyn_api_geometry_pb.Vec3Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3Value.deserializeBinaryFromReader);
      msg.setGazeCenterCfp(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setShiftMeanPeriod(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setShiftMaxTransitionTime(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setBreathMinZ(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setBreathMaxZ(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setBreathMaxPeriod(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setLegGestureMeanPeriod(value);
      break;
    case 12:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setGazeSlewRate(value);
      break;
    case 13:
      var value = new bosdyn_api_geometry_pb.Vec3Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3Value.deserializeBinaryFromReader);
      msg.setGazePositionGenerationGain(value);
      break;
    case 14:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setGazeRollGenerationGain(value);
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
proto.bosdyn.api.spot.FidgetStandParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.FidgetStandParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.FidgetStandParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.FidgetStandParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPreset();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMinGazePitch();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getMaxGazePitch();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getGazeMeanPeriod();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getGazeCenterCfp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_geometry_pb.Vec3Value.serializeBinaryToWriter
    );
  }
  f = message.getShiftMeanPeriod();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getShiftMaxTransitionTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getBreathMinZ();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getBreathMaxZ();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getBreathMaxPeriod();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getLegGestureMeanPeriod();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getGazeSlewRate();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getGazePositionGenerationGain();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      bosdyn_api_geometry_pb.Vec3Value.serializeBinaryToWriter
    );
  }
  f = message.getGazeRollGenerationGain();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.FidgetStandParams.FidgetPreset = {
  PRESET_UNKNOWN: 0,
  PRESET_CUSTOM: 1,
  PRESET_INTEREST: 2,
  PRESET_PLAYFUL: 3,
  PRESET_FEAR: 4,
  PRESET_NERVOUS: 5,
  PRESET_EXHAUSTED: 6
};

/**
 * optional FidgetPreset preset = 1;
 * @return {!proto.bosdyn.api.spot.FidgetStandParams.FidgetPreset}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.getPreset = function() {
  return /** @type {!proto.bosdyn.api.spot.FidgetStandParams.FidgetPreset} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.FidgetStandParams.FidgetPreset} value
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.setPreset = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.DoubleValue min_gaze_pitch = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.getMinGazePitch = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
*/
proto.bosdyn.api.spot.FidgetStandParams.prototype.setMinGazePitch = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.clearMinGazePitch = function() {
  return this.setMinGazePitch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.hasMinGazePitch = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue max_gaze_pitch = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.getMaxGazePitch = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
*/
proto.bosdyn.api.spot.FidgetStandParams.prototype.setMaxGazePitch = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.clearMaxGazePitch = function() {
  return this.setMaxGazePitch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.hasMaxGazePitch = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue gaze_mean_period = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.getGazeMeanPeriod = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
*/
proto.bosdyn.api.spot.FidgetStandParams.prototype.setGazeMeanPeriod = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.clearGazeMeanPeriod = function() {
  return this.setGazeMeanPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.hasGazeMeanPeriod = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bosdyn.api.Vec3Value gaze_center_cfp = 5;
 * @return {?proto.bosdyn.api.Vec3Value}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.getGazeCenterCfp = function() {
  return /** @type{?proto.bosdyn.api.Vec3Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3Value, 5));
};


/**
 * @param {?proto.bosdyn.api.Vec3Value|undefined} value
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
*/
proto.bosdyn.api.spot.FidgetStandParams.prototype.setGazeCenterCfp = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.clearGazeCenterCfp = function() {
  return this.setGazeCenterCfp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.hasGazeCenterCfp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue shift_mean_period = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.getShiftMeanPeriod = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
*/
proto.bosdyn.api.spot.FidgetStandParams.prototype.setShiftMeanPeriod = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.clearShiftMeanPeriod = function() {
  return this.setShiftMeanPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.hasShiftMeanPeriod = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.DoubleValue shift_max_transition_time = 7;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.getShiftMaxTransitionTime = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 7));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
*/
proto.bosdyn.api.spot.FidgetStandParams.prototype.setShiftMaxTransitionTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.clearShiftMaxTransitionTime = function() {
  return this.setShiftMaxTransitionTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.hasShiftMaxTransitionTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.DoubleValue breath_min_z = 8;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.getBreathMinZ = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 8));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
*/
proto.bosdyn.api.spot.FidgetStandParams.prototype.setBreathMinZ = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.clearBreathMinZ = function() {
  return this.setBreathMinZ(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.hasBreathMinZ = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.DoubleValue breath_max_z = 9;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.getBreathMaxZ = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 9));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
*/
proto.bosdyn.api.spot.FidgetStandParams.prototype.setBreathMaxZ = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.clearBreathMaxZ = function() {
  return this.setBreathMaxZ(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.hasBreathMaxZ = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.DoubleValue breath_max_period = 10;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.getBreathMaxPeriod = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 10));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
*/
proto.bosdyn.api.spot.FidgetStandParams.prototype.setBreathMaxPeriod = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.clearBreathMaxPeriod = function() {
  return this.setBreathMaxPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.hasBreathMaxPeriod = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.DoubleValue leg_gesture_mean_period = 11;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.getLegGestureMeanPeriod = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 11));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
*/
proto.bosdyn.api.spot.FidgetStandParams.prototype.setLegGestureMeanPeriod = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.clearLegGestureMeanPeriod = function() {
  return this.setLegGestureMeanPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.hasLegGestureMeanPeriod = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.DoubleValue gaze_slew_rate = 12;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.getGazeSlewRate = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 12));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
*/
proto.bosdyn.api.spot.FidgetStandParams.prototype.setGazeSlewRate = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.clearGazeSlewRate = function() {
  return this.setGazeSlewRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.hasGazeSlewRate = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bosdyn.api.Vec3Value gaze_position_generation_gain = 13;
 * @return {?proto.bosdyn.api.Vec3Value}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.getGazePositionGenerationGain = function() {
  return /** @type{?proto.bosdyn.api.Vec3Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3Value, 13));
};


/**
 * @param {?proto.bosdyn.api.Vec3Value|undefined} value
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
*/
proto.bosdyn.api.spot.FidgetStandParams.prototype.setGazePositionGenerationGain = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.clearGazePositionGenerationGain = function() {
  return this.setGazePositionGenerationGain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.hasGazePositionGenerationGain = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.DoubleValue gaze_roll_generation_gain = 14;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.getGazeRollGenerationGain = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 14));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
*/
proto.bosdyn.api.spot.FidgetStandParams.prototype.setGazeRollGenerationGain = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FidgetStandParams} returns this
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.clearGazeRollGenerationGain = function() {
  return this.setGazeRollGenerationGain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FidgetStandParams.prototype.hasGazeRollGenerationGain = function() {
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
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.FrameSnapshotParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.FrameSnapshotParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.FrameSnapshotParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    frameId: (f = msg.getFrameId()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    fiducialNumber: (f = msg.getFiducialNumber()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    includeFrontLeftLeg: jspb.Message.getFieldWithDefault(msg, 3, 0),
    includeFrontRightLeg: jspb.Message.getFieldWithDefault(msg, 4, 0),
    includeHindLeftLeg: jspb.Message.getFieldWithDefault(msg, 5, 0),
    includeHindRightLeg: jspb.Message.getFieldWithDefault(msg, 6, 0),
    compensated: (f = msg.getCompensated()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.FrameSnapshotParams}
 */
proto.bosdyn.api.spot.FrameSnapshotParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.FrameSnapshotParams;
  return proto.bosdyn.api.spot.FrameSnapshotParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.FrameSnapshotParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.FrameSnapshotParams}
 */
proto.bosdyn.api.spot.FrameSnapshotParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setFrameId(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setFiducialNumber(value);
      break;
    case 3:
      var value = /** @type {!proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion} */ (reader.readEnum());
      msg.setIncludeFrontLeftLeg(value);
      break;
    case 4:
      var value = /** @type {!proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion} */ (reader.readEnum());
      msg.setIncludeFrontRightLeg(value);
      break;
    case 5:
      var value = /** @type {!proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion} */ (reader.readEnum());
      msg.setIncludeHindLeftLeg(value);
      break;
    case 6:
      var value = /** @type {!proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion} */ (reader.readEnum());
      msg.setIncludeHindRightLeg(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setCompensated(value);
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
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.FrameSnapshotParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.FrameSnapshotParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.FrameSnapshotParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrameId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getFiducialNumber();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getIncludeFrontLeftLeg();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getIncludeFrontRightLeg();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getIncludeHindLeftLeg();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getIncludeHindRightLeg();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getCompensated();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion = {
  INCLUSION_UNKNOWN: 0,
  INCLUSION_IF_STANCE: 1,
  INCLUSION_INCLUDED: 2,
  INCLUSION_EXCLUDED: 3
};

/**
 * optional google.protobuf.Int32Value frame_id = 1;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.getFrameId = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 1));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.bosdyn.api.spot.FrameSnapshotParams} returns this
*/
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.setFrameId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FrameSnapshotParams} returns this
 */
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.clearFrameId = function() {
  return this.setFrameId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.hasFrameId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Int32Value fiducial_number = 2;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.getFiducialNumber = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 2));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.bosdyn.api.spot.FrameSnapshotParams} returns this
*/
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.setFiducialNumber = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FrameSnapshotParams} returns this
 */
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.clearFiducialNumber = function() {
  return this.setFiducialNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.hasFiducialNumber = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Inclusion include_front_left_leg = 3;
 * @return {!proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion}
 */
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.getIncludeFrontLeftLeg = function() {
  return /** @type {!proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion} value
 * @return {!proto.bosdyn.api.spot.FrameSnapshotParams} returns this
 */
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.setIncludeFrontLeftLeg = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Inclusion include_front_right_leg = 4;
 * @return {!proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion}
 */
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.getIncludeFrontRightLeg = function() {
  return /** @type {!proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion} value
 * @return {!proto.bosdyn.api.spot.FrameSnapshotParams} returns this
 */
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.setIncludeFrontRightLeg = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional Inclusion include_hind_left_leg = 5;
 * @return {!proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion}
 */
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.getIncludeHindLeftLeg = function() {
  return /** @type {!proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion} value
 * @return {!proto.bosdyn.api.spot.FrameSnapshotParams} returns this
 */
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.setIncludeHindLeftLeg = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional Inclusion include_hind_right_leg = 6;
 * @return {!proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion}
 */
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.getIncludeHindRightLeg = function() {
  return /** @type {!proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.FrameSnapshotParams.Inclusion} value
 * @return {!proto.bosdyn.api.spot.FrameSnapshotParams} returns this
 */
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.setIncludeHindRightLeg = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional google.protobuf.BoolValue compensated = 7;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.getCompensated = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 7));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.FrameSnapshotParams} returns this
*/
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.setCompensated = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FrameSnapshotParams} returns this
 */
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.clearCompensated = function() {
  return this.setCompensated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FrameSnapshotParams.prototype.hasCompensated = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.bosdyn.api.spot.SetColorParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.SetColorParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.SetColorParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SetColorParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    leftColor: (f = msg.getLeftColor()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    rightSameAsLeft: (f = msg.getRightSameAsLeft()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    rightColor: (f = msg.getRightColor()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    fadeInSlices: (f = msg.getFadeInSlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    fadeOutSlices: (f = msg.getFadeOutSlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.SetColorParams}
 */
proto.bosdyn.api.spot.SetColorParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.SetColorParams;
  return proto.bosdyn.api.spot.SetColorParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.SetColorParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.SetColorParams}
 */
proto.bosdyn.api.spot.SetColorParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setLeftColor(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setRightSameAsLeft(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setRightColor(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFadeInSlices(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFadeOutSlices(value);
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
proto.bosdyn.api.spot.SetColorParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.SetColorParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.SetColorParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SetColorParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeftColor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getRightSameAsLeft();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getRightColor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getFadeInSlices();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getFadeOutSlices();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional Color left_color = 1;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.SetColorParams.prototype.getLeftColor = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.SetColorParams} returns this
*/
proto.bosdyn.api.spot.SetColorParams.prototype.setLeftColor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetColorParams} returns this
 */
proto.bosdyn.api.spot.SetColorParams.prototype.clearLeftColor = function() {
  return this.setLeftColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetColorParams.prototype.hasLeftColor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.BoolValue right_same_as_left = 2;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.SetColorParams.prototype.getRightSameAsLeft = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 2));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SetColorParams} returns this
*/
proto.bosdyn.api.spot.SetColorParams.prototype.setRightSameAsLeft = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetColorParams} returns this
 */
proto.bosdyn.api.spot.SetColorParams.prototype.clearRightSameAsLeft = function() {
  return this.setRightSameAsLeft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetColorParams.prototype.hasRightSameAsLeft = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Color right_color = 3;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.SetColorParams.prototype.getRightColor = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 3));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.SetColorParams} returns this
*/
proto.bosdyn.api.spot.SetColorParams.prototype.setRightColor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetColorParams} returns this
 */
proto.bosdyn.api.spot.SetColorParams.prototype.clearRightColor = function() {
  return this.setRightColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetColorParams.prototype.hasRightColor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue fade_in_slices = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SetColorParams.prototype.getFadeInSlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SetColorParams} returns this
*/
proto.bosdyn.api.spot.SetColorParams.prototype.setFadeInSlices = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetColorParams} returns this
 */
proto.bosdyn.api.spot.SetColorParams.prototype.clearFadeInSlices = function() {
  return this.setFadeInSlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetColorParams.prototype.hasFadeInSlices = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue fade_out_slices = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SetColorParams.prototype.getFadeOutSlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SetColorParams} returns this
*/
proto.bosdyn.api.spot.SetColorParams.prototype.setFadeOutSlices = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetColorParams} returns this
 */
proto.bosdyn.api.spot.SetColorParams.prototype.clearFadeOutSlices = function() {
  return this.setFadeOutSlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetColorParams.prototype.hasFadeOutSlices = function() {
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
proto.bosdyn.api.spot.FadeColorParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.FadeColorParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.FadeColorParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.FadeColorParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    topColor: (f = msg.getTopColor()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    bottomColor: (f = msg.getBottomColor()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    fadeInSlices: (f = msg.getFadeInSlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    fadeOutSlices: (f = msg.getFadeOutSlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.FadeColorParams}
 */
proto.bosdyn.api.spot.FadeColorParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.FadeColorParams;
  return proto.bosdyn.api.spot.FadeColorParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.FadeColorParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.FadeColorParams}
 */
proto.bosdyn.api.spot.FadeColorParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setTopColor(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setBottomColor(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFadeInSlices(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFadeOutSlices(value);
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
proto.bosdyn.api.spot.FadeColorParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.FadeColorParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.FadeColorParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.FadeColorParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopColor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getBottomColor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getFadeInSlices();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getFadeOutSlices();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional Color top_color = 1;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.FadeColorParams.prototype.getTopColor = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.FadeColorParams} returns this
*/
proto.bosdyn.api.spot.FadeColorParams.prototype.setTopColor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FadeColorParams} returns this
 */
proto.bosdyn.api.spot.FadeColorParams.prototype.clearTopColor = function() {
  return this.setTopColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FadeColorParams.prototype.hasTopColor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Color bottom_color = 2;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.FadeColorParams.prototype.getBottomColor = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 2));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.FadeColorParams} returns this
*/
proto.bosdyn.api.spot.FadeColorParams.prototype.setBottomColor = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FadeColorParams} returns this
 */
proto.bosdyn.api.spot.FadeColorParams.prototype.clearBottomColor = function() {
  return this.setBottomColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FadeColorParams.prototype.hasBottomColor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue fade_in_slices = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.FadeColorParams.prototype.getFadeInSlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.FadeColorParams} returns this
*/
proto.bosdyn.api.spot.FadeColorParams.prototype.setFadeInSlices = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FadeColorParams} returns this
 */
proto.bosdyn.api.spot.FadeColorParams.prototype.clearFadeInSlices = function() {
  return this.setFadeInSlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FadeColorParams.prototype.hasFadeInSlices = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue fade_out_slices = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.FadeColorParams.prototype.getFadeOutSlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.FadeColorParams} returns this
*/
proto.bosdyn.api.spot.FadeColorParams.prototype.setFadeOutSlices = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.FadeColorParams} returns this
 */
proto.bosdyn.api.spot.FadeColorParams.prototype.clearFadeOutSlices = function() {
  return this.setFadeOutSlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.FadeColorParams.prototype.hasFadeOutSlices = function() {
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
proto.bosdyn.api.spot.IndependentColorParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.IndependentColorParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.IndependentColorParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.IndependentColorParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    topLeft: (f = msg.getTopLeft()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    upperMidLeft: (f = msg.getUpperMidLeft()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    lowerMidLeft: (f = msg.getLowerMidLeft()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    bottomLeft: (f = msg.getBottomLeft()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    topRight: (f = msg.getTopRight()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    upperMidRight: (f = msg.getUpperMidRight()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    lowerMidRight: (f = msg.getLowerMidRight()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    bottomRight: (f = msg.getBottomRight()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    fadeInSlices: (f = msg.getFadeInSlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    fadeOutSlices: (f = msg.getFadeOutSlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.IndependentColorParams}
 */
proto.bosdyn.api.spot.IndependentColorParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.IndependentColorParams;
  return proto.bosdyn.api.spot.IndependentColorParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.IndependentColorParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.IndependentColorParams}
 */
proto.bosdyn.api.spot.IndependentColorParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setTopLeft(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setUpperMidLeft(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setLowerMidLeft(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setBottomLeft(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setTopRight(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setUpperMidRight(value);
      break;
    case 7:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setLowerMidRight(value);
      break;
    case 8:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setBottomRight(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFadeInSlices(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFadeOutSlices(value);
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
proto.bosdyn.api.spot.IndependentColorParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.IndependentColorParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.IndependentColorParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.IndependentColorParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopLeft();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getUpperMidLeft();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getLowerMidLeft();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getBottomLeft();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getTopRight();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getUpperMidRight();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getLowerMidRight();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getBottomRight();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getFadeInSlices();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getFadeOutSlices();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional Color top_left = 1;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.getTopLeft = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
*/
proto.bosdyn.api.spot.IndependentColorParams.prototype.setTopLeft = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.clearTopLeft = function() {
  return this.setTopLeft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.hasTopLeft = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Color upper_mid_left = 2;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.getUpperMidLeft = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 2));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
*/
proto.bosdyn.api.spot.IndependentColorParams.prototype.setUpperMidLeft = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.clearUpperMidLeft = function() {
  return this.setUpperMidLeft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.hasUpperMidLeft = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Color lower_mid_left = 3;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.getLowerMidLeft = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 3));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
*/
proto.bosdyn.api.spot.IndependentColorParams.prototype.setLowerMidLeft = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.clearLowerMidLeft = function() {
  return this.setLowerMidLeft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.hasLowerMidLeft = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Color bottom_left = 4;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.getBottomLeft = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 4));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
*/
proto.bosdyn.api.spot.IndependentColorParams.prototype.setBottomLeft = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.clearBottomLeft = function() {
  return this.setBottomLeft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.hasBottomLeft = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Color top_right = 5;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.getTopRight = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 5));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
*/
proto.bosdyn.api.spot.IndependentColorParams.prototype.setTopRight = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.clearTopRight = function() {
  return this.setTopRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.hasTopRight = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Color upper_mid_right = 6;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.getUpperMidRight = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 6));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
*/
proto.bosdyn.api.spot.IndependentColorParams.prototype.setUpperMidRight = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.clearUpperMidRight = function() {
  return this.setUpperMidRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.hasUpperMidRight = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Color lower_mid_right = 7;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.getLowerMidRight = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 7));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
*/
proto.bosdyn.api.spot.IndependentColorParams.prototype.setLowerMidRight = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.clearLowerMidRight = function() {
  return this.setLowerMidRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.hasLowerMidRight = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Color bottom_right = 8;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.getBottomRight = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 8));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
*/
proto.bosdyn.api.spot.IndependentColorParams.prototype.setBottomRight = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.clearBottomRight = function() {
  return this.setBottomRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.hasBottomRight = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.DoubleValue fade_in_slices = 9;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.getFadeInSlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 9));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
*/
proto.bosdyn.api.spot.IndependentColorParams.prototype.setFadeInSlices = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.clearFadeInSlices = function() {
  return this.setFadeInSlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.hasFadeInSlices = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.DoubleValue fade_out_slices = 10;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.getFadeOutSlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 10));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
*/
proto.bosdyn.api.spot.IndependentColorParams.prototype.setFadeOutSlices = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.IndependentColorParams} returns this
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.clearFadeOutSlices = function() {
  return this.setFadeOutSlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.IndependentColorParams.prototype.hasFadeOutSlices = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.bosdyn.api.spot.Color.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.Color.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.Color} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.Color.toObject = function(includeInstance, msg) {
  var f, obj = {
    red: (f = msg.getRed()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    green: (f = msg.getGreen()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    blue: (f = msg.getBlue()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.Color.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.Color;
  return proto.bosdyn.api.spot.Color.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.Color} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.Color.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setRed(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setGreen(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setBlue(value);
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
proto.bosdyn.api.spot.Color.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.Color.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.Color} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.Color.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRed();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getGreen();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getBlue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue red = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.Color.prototype.getRed = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.Color} returns this
*/
proto.bosdyn.api.spot.Color.prototype.setRed = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Color} returns this
 */
proto.bosdyn.api.spot.Color.prototype.clearRed = function() {
  return this.setRed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Color.prototype.hasRed = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue green = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.Color.prototype.getGreen = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.Color} returns this
*/
proto.bosdyn.api.spot.Color.prototype.setGreen = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Color} returns this
 */
proto.bosdyn.api.spot.Color.prototype.clearGreen = function() {
  return this.setGreen(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Color.prototype.hasGreen = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue blue = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.Color.prototype.getBlue = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.Color} returns this
*/
proto.bosdyn.api.spot.Color.prototype.setBlue = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Color} returns this
 */
proto.bosdyn.api.spot.Color.prototype.clearBlue = function() {
  return this.setBlue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Color.prototype.hasBlue = function() {
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
proto.bosdyn.api.spot.RippleColorParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.RippleColorParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.RippleColorParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.RippleColorParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    main: (f = msg.getMain()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    secondary: (f = msg.getSecondary()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    pattern: jspb.Message.getFieldWithDefault(msg, 3, 0),
    lightSide: jspb.Message.getFieldWithDefault(msg, 4, 0),
    incrementSlices: (f = msg.getIncrementSlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.RippleColorParams}
 */
proto.bosdyn.api.spot.RippleColorParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.RippleColorParams;
  return proto.bosdyn.api.spot.RippleColorParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.RippleColorParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.RippleColorParams}
 */
proto.bosdyn.api.spot.RippleColorParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setMain(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setSecondary(value);
      break;
    case 3:
      var value = /** @type {!proto.bosdyn.api.spot.RippleColorParams.Pattern} */ (reader.readEnum());
      msg.setPattern(value);
      break;
    case 4:
      var value = /** @type {!proto.bosdyn.api.spot.RippleColorParams.LightSide} */ (reader.readEnum());
      msg.setLightSide(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setIncrementSlices(value);
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
proto.bosdyn.api.spot.RippleColorParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.RippleColorParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.RippleColorParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.RippleColorParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMain();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getSecondary();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getPattern();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getLightSide();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getIncrementSlices();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.RippleColorParams.Pattern = {
  PATTERN_UNKNOWN: 0,
  PATTERN_FLASHING: 1,
  PATTERN_SNAKE: 2,
  PATTERN_ALTERNATE_COLORS: 3,
  PATTERN_FINE_GRAINED_ALTERNATE_COLORS: 4
};

/**
 * @enum {number}
 */
proto.bosdyn.api.spot.RippleColorParams.LightSide = {
  LIGHT_SIDE_UNKNOWN: 0,
  LIGHT_SIDE_LEFT: 1,
  LIGHT_SIDE_RIGHT: 2,
  LIGHT_SIDE_BOTH_IN_SEQUENCE: 3,
  LIGHT_SIDE_BOTH_MATCHING: 4
};

/**
 * optional Color main = 1;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.RippleColorParams.prototype.getMain = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.RippleColorParams} returns this
*/
proto.bosdyn.api.spot.RippleColorParams.prototype.setMain = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RippleColorParams} returns this
 */
proto.bosdyn.api.spot.RippleColorParams.prototype.clearMain = function() {
  return this.setMain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RippleColorParams.prototype.hasMain = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Color secondary = 2;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.RippleColorParams.prototype.getSecondary = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 2));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.RippleColorParams} returns this
*/
proto.bosdyn.api.spot.RippleColorParams.prototype.setSecondary = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RippleColorParams} returns this
 */
proto.bosdyn.api.spot.RippleColorParams.prototype.clearSecondary = function() {
  return this.setSecondary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RippleColorParams.prototype.hasSecondary = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Pattern pattern = 3;
 * @return {!proto.bosdyn.api.spot.RippleColorParams.Pattern}
 */
proto.bosdyn.api.spot.RippleColorParams.prototype.getPattern = function() {
  return /** @type {!proto.bosdyn.api.spot.RippleColorParams.Pattern} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.RippleColorParams.Pattern} value
 * @return {!proto.bosdyn.api.spot.RippleColorParams} returns this
 */
proto.bosdyn.api.spot.RippleColorParams.prototype.setPattern = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional LightSide light_side = 4;
 * @return {!proto.bosdyn.api.spot.RippleColorParams.LightSide}
 */
proto.bosdyn.api.spot.RippleColorParams.prototype.getLightSide = function() {
  return /** @type {!proto.bosdyn.api.spot.RippleColorParams.LightSide} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.RippleColorParams.LightSide} value
 * @return {!proto.bosdyn.api.spot.RippleColorParams} returns this
 */
proto.bosdyn.api.spot.RippleColorParams.prototype.setLightSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.protobuf.DoubleValue increment_slices = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.RippleColorParams.prototype.getIncrementSlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.RippleColorParams} returns this
*/
proto.bosdyn.api.spot.RippleColorParams.prototype.setIncrementSlices = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.RippleColorParams} returns this
 */
proto.bosdyn.api.spot.RippleColorParams.prototype.clearIncrementSlices = function() {
  return this.setIncrementSlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.RippleColorParams.prototype.hasIncrementSlices = function() {
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
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.SetAudioVisualColorParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.SetAudioVisualColorParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    frontCenterColor: (f = msg.getFrontCenterColor()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    allSameAsCenter: (f = msg.getAllSameAsCenter()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    frontLeftColor: (f = msg.getFrontLeftColor()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    frontRightColor: (f = msg.getFrontRightColor()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    backLeftColor: (f = msg.getBackLeftColor()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    backRightColor: (f = msg.getBackRightColor()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    fadeInSlices: (f = msg.getFadeInSlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    fadeOutSlices: (f = msg.getFadeOutSlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.SetAudioVisualColorParams;
  return proto.bosdyn.api.spot.SetAudioVisualColorParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.SetAudioVisualColorParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setFrontCenterColor(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setAllSameAsCenter(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setFrontLeftColor(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setFrontRightColor(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setBackLeftColor(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setBackRightColor(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFadeInSlices(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFadeOutSlices(value);
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
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.SetAudioVisualColorParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.SetAudioVisualColorParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrontCenterColor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getAllSameAsCenter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getFrontLeftColor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getFrontRightColor();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getBackLeftColor();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getBackRightColor();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getFadeInSlices();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getFadeOutSlices();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional Color front_center_color = 1;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.getFrontCenterColor = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams} returns this
*/
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.setFrontCenterColor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams} returns this
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.clearFrontCenterColor = function() {
  return this.setFrontCenterColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.hasFrontCenterColor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.BoolValue all_same_as_center = 2;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.getAllSameAsCenter = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 2));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams} returns this
*/
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.setAllSameAsCenter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams} returns this
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.clearAllSameAsCenter = function() {
  return this.setAllSameAsCenter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.hasAllSameAsCenter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Color front_left_color = 3;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.getFrontLeftColor = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 3));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams} returns this
*/
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.setFrontLeftColor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams} returns this
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.clearFrontLeftColor = function() {
  return this.setFrontLeftColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.hasFrontLeftColor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Color front_right_color = 4;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.getFrontRightColor = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 4));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams} returns this
*/
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.setFrontRightColor = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams} returns this
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.clearFrontRightColor = function() {
  return this.setFrontRightColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.hasFrontRightColor = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Color back_left_color = 5;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.getBackLeftColor = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 5));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams} returns this
*/
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.setBackLeftColor = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams} returns this
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.clearBackLeftColor = function() {
  return this.setBackLeftColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.hasBackLeftColor = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Color back_right_color = 6;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.getBackRightColor = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 6));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams} returns this
*/
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.setBackRightColor = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams} returns this
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.clearBackRightColor = function() {
  return this.setBackRightColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.hasBackRightColor = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.DoubleValue fade_in_slices = 7;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.getFadeInSlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 7));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams} returns this
*/
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.setFadeInSlices = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams} returns this
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.clearFadeInSlices = function() {
  return this.setFadeInSlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.hasFadeInSlices = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.DoubleValue fade_out_slices = 8;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.getFadeOutSlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 8));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams} returns this
*/
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.setFadeOutSlices = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAudioVisualColorParams} returns this
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.clearFadeOutSlices = function() {
  return this.setFadeOutSlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAudioVisualColorParams.prototype.hasFadeOutSlices = function() {
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
proto.bosdyn.api.spot.SetAllColorParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.SetAllColorParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.SetAllColorParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SetAllColorParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    frontCenterColor: (f = msg.getFrontCenterColor()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    allSameAsCenter: (f = msg.getAllSameAsCenter()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    statusLeftColor: (f = msg.getStatusLeftColor()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    statusRightColor: (f = msg.getStatusRightColor()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    frontLeftColor: (f = msg.getFrontLeftColor()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    frontRightColor: (f = msg.getFrontRightColor()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    backLeftColor: (f = msg.getBackLeftColor()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    backRightColor: (f = msg.getBackRightColor()) && proto.bosdyn.api.spot.Color.toObject(includeInstance, f),
    fadeInSlices: (f = msg.getFadeInSlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    fadeOutSlices: (f = msg.getFadeOutSlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.SetAllColorParams}
 */
proto.bosdyn.api.spot.SetAllColorParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.SetAllColorParams;
  return proto.bosdyn.api.spot.SetAllColorParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.SetAllColorParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.SetAllColorParams}
 */
proto.bosdyn.api.spot.SetAllColorParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setFrontCenterColor(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setAllSameAsCenter(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setStatusLeftColor(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setStatusRightColor(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setFrontLeftColor(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setFrontRightColor(value);
      break;
    case 7:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setBackLeftColor(value);
      break;
    case 8:
      var value = new proto.bosdyn.api.spot.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.Color.deserializeBinaryFromReader);
      msg.setBackRightColor(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFadeInSlices(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFadeOutSlices(value);
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
proto.bosdyn.api.spot.SetAllColorParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.SetAllColorParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.SetAllColorParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SetAllColorParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrontCenterColor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getAllSameAsCenter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getStatusLeftColor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getStatusRightColor();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getFrontLeftColor();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getFrontRightColor();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getBackLeftColor();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getBackRightColor();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bosdyn.api.spot.Color.serializeBinaryToWriter
    );
  }
  f = message.getFadeInSlices();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getFadeOutSlices();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional Color front_center_color = 1;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.getFrontCenterColor = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
*/
proto.bosdyn.api.spot.SetAllColorParams.prototype.setFrontCenterColor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.clearFrontCenterColor = function() {
  return this.setFrontCenterColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.hasFrontCenterColor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.BoolValue all_same_as_center = 2;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.getAllSameAsCenter = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 2));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
*/
proto.bosdyn.api.spot.SetAllColorParams.prototype.setAllSameAsCenter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.clearAllSameAsCenter = function() {
  return this.setAllSameAsCenter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.hasAllSameAsCenter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Color status_left_color = 3;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.getStatusLeftColor = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 3));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
*/
proto.bosdyn.api.spot.SetAllColorParams.prototype.setStatusLeftColor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.clearStatusLeftColor = function() {
  return this.setStatusLeftColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.hasStatusLeftColor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Color status_right_color = 4;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.getStatusRightColor = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 4));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
*/
proto.bosdyn.api.spot.SetAllColorParams.prototype.setStatusRightColor = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.clearStatusRightColor = function() {
  return this.setStatusRightColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.hasStatusRightColor = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Color front_left_color = 5;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.getFrontLeftColor = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 5));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
*/
proto.bosdyn.api.spot.SetAllColorParams.prototype.setFrontLeftColor = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.clearFrontLeftColor = function() {
  return this.setFrontLeftColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.hasFrontLeftColor = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Color front_right_color = 6;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.getFrontRightColor = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 6));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
*/
proto.bosdyn.api.spot.SetAllColorParams.prototype.setFrontRightColor = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.clearFrontRightColor = function() {
  return this.setFrontRightColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.hasFrontRightColor = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Color back_left_color = 7;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.getBackLeftColor = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 7));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
*/
proto.bosdyn.api.spot.SetAllColorParams.prototype.setBackLeftColor = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.clearBackLeftColor = function() {
  return this.setBackLeftColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.hasBackLeftColor = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Color back_right_color = 8;
 * @return {?proto.bosdyn.api.spot.Color}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.getBackRightColor = function() {
  return /** @type{?proto.bosdyn.api.spot.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Color, 8));
};


/**
 * @param {?proto.bosdyn.api.spot.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
*/
proto.bosdyn.api.spot.SetAllColorParams.prototype.setBackRightColor = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.clearBackRightColor = function() {
  return this.setBackRightColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.hasBackRightColor = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.DoubleValue fade_in_slices = 9;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.getFadeInSlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 9));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
*/
proto.bosdyn.api.spot.SetAllColorParams.prototype.setFadeInSlices = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.clearFadeInSlices = function() {
  return this.setFadeInSlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.hasFadeInSlices = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.DoubleValue fade_out_slices = 10;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.getFadeOutSlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 10));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
*/
proto.bosdyn.api.spot.SetAllColorParams.prototype.setFadeOutSlices = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SetAllColorParams} returns this
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.clearFadeOutSlices = function() {
  return this.setFadeOutSlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SetAllColorParams.prototype.hasFadeOutSlices = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.bosdyn.api.spot.BuzzerNoteParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.BuzzerNoteParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.BuzzerNoteParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.BuzzerNoteParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    note: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sharp: (f = msg.getSharp()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    flat: (f = msg.getFlat()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    octave: (f = msg.getOctave()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.BuzzerNoteParams}
 */
proto.bosdyn.api.spot.BuzzerNoteParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.BuzzerNoteParams;
  return proto.bosdyn.api.spot.BuzzerNoteParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.BuzzerNoteParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.BuzzerNoteParams}
 */
proto.bosdyn.api.spot.BuzzerNoteParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.spot.BuzzerNoteParams.Note} */ (reader.readEnum());
      msg.setNote(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setSharp(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setFlat(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setOctave(value);
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
proto.bosdyn.api.spot.BuzzerNoteParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.BuzzerNoteParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.BuzzerNoteParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.BuzzerNoteParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNote();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSharp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getFlat();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getOctave();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.BuzzerNoteParams.Note = {
  NOTE_UNKNOWN: 0,
  NOTE_C: 1,
  NOTE_D: 2,
  NOTE_E: 3,
  NOTE_F: 4,
  NOTE_G: 5,
  NOTE_A: 6,
  NOTE_B: 7,
  NOTE_PEAK_SPL: 8,
  NOTE_REST: 9
};

/**
 * optional Note note = 1;
 * @return {!proto.bosdyn.api.spot.BuzzerNoteParams.Note}
 */
proto.bosdyn.api.spot.BuzzerNoteParams.prototype.getNote = function() {
  return /** @type {!proto.bosdyn.api.spot.BuzzerNoteParams.Note} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.BuzzerNoteParams.Note} value
 * @return {!proto.bosdyn.api.spot.BuzzerNoteParams} returns this
 */
proto.bosdyn.api.spot.BuzzerNoteParams.prototype.setNote = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.BoolValue sharp = 2;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.BuzzerNoteParams.prototype.getSharp = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 2));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.BuzzerNoteParams} returns this
*/
proto.bosdyn.api.spot.BuzzerNoteParams.prototype.setSharp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.BuzzerNoteParams} returns this
 */
proto.bosdyn.api.spot.BuzzerNoteParams.prototype.clearSharp = function() {
  return this.setSharp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.BuzzerNoteParams.prototype.hasSharp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.BoolValue flat = 3;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.BuzzerNoteParams.prototype.getFlat = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 3));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.BuzzerNoteParams} returns this
*/
proto.bosdyn.api.spot.BuzzerNoteParams.prototype.setFlat = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.BuzzerNoteParams} returns this
 */
proto.bosdyn.api.spot.BuzzerNoteParams.prototype.clearFlat = function() {
  return this.setFlat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.BuzzerNoteParams.prototype.hasFlat = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Int32Value octave = 4;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.bosdyn.api.spot.BuzzerNoteParams.prototype.getOctave = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 4));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.bosdyn.api.spot.BuzzerNoteParams} returns this
*/
proto.bosdyn.api.spot.BuzzerNoteParams.prototype.setOctave = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.BuzzerNoteParams} returns this
 */
proto.bosdyn.api.spot.BuzzerNoteParams.prototype.clearOctave = function() {
  return this.setOctave(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.BuzzerNoteParams.prototype.hasOctave = function() {
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
proto.bosdyn.api.spot.LegJointParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.LegJointParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.LegJointParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LegJointParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    flHx: (f = msg.getFlHx()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    flHy: (f = msg.getFlHy()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    flKn: (f = msg.getFlKn()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    frHx: (f = msg.getFrHx()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    frHy: (f = msg.getFrHy()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    frKn: (f = msg.getFrKn()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    hlHx: (f = msg.getHlHx()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    hlHy: (f = msg.getHlHy()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    hlKn: (f = msg.getHlKn()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    hrHx: (f = msg.getHrHx()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    hrHy: (f = msg.getHrHy()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    hrKn: (f = msg.getHrKn()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.LegJointParams}
 */
proto.bosdyn.api.spot.LegJointParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.LegJointParams;
  return proto.bosdyn.api.spot.LegJointParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.LegJointParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.LegJointParams}
 */
proto.bosdyn.api.spot.LegJointParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFlHx(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFlHy(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFlKn(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFrHx(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFrHy(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFrKn(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setHlHx(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setHlHy(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setHlKn(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setHrHx(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setHrHy(value);
      break;
    case 12:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setHrKn(value);
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
proto.bosdyn.api.spot.LegJointParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.LegJointParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.LegJointParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LegJointParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlHx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getFlHy();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getFlKn();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getFrHx();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getFrHy();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getFrKn();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getHlHx();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getHlHy();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getHlKn();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getHrHx();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getHrHy();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getHrKn();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue fl_hx = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.getFlHx = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
*/
proto.bosdyn.api.spot.LegJointParams.prototype.setFlHx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
 */
proto.bosdyn.api.spot.LegJointParams.prototype.clearFlHx = function() {
  return this.setFlHx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.hasFlHx = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue fl_hy = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.getFlHy = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
*/
proto.bosdyn.api.spot.LegJointParams.prototype.setFlHy = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
 */
proto.bosdyn.api.spot.LegJointParams.prototype.clearFlHy = function() {
  return this.setFlHy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.hasFlHy = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue fl_kn = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.getFlKn = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
*/
proto.bosdyn.api.spot.LegJointParams.prototype.setFlKn = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
 */
proto.bosdyn.api.spot.LegJointParams.prototype.clearFlKn = function() {
  return this.setFlKn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.hasFlKn = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue fr_hx = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.getFrHx = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
*/
proto.bosdyn.api.spot.LegJointParams.prototype.setFrHx = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
 */
proto.bosdyn.api.spot.LegJointParams.prototype.clearFrHx = function() {
  return this.setFrHx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.hasFrHx = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue fr_hy = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.getFrHy = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
*/
proto.bosdyn.api.spot.LegJointParams.prototype.setFrHy = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
 */
proto.bosdyn.api.spot.LegJointParams.prototype.clearFrHy = function() {
  return this.setFrHy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.hasFrHy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue fr_kn = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.getFrKn = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
*/
proto.bosdyn.api.spot.LegJointParams.prototype.setFrKn = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
 */
proto.bosdyn.api.spot.LegJointParams.prototype.clearFrKn = function() {
  return this.setFrKn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.hasFrKn = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.DoubleValue hl_hx = 7;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.getHlHx = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 7));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
*/
proto.bosdyn.api.spot.LegJointParams.prototype.setHlHx = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
 */
proto.bosdyn.api.spot.LegJointParams.prototype.clearHlHx = function() {
  return this.setHlHx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.hasHlHx = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.DoubleValue hl_hy = 8;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.getHlHy = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 8));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
*/
proto.bosdyn.api.spot.LegJointParams.prototype.setHlHy = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
 */
proto.bosdyn.api.spot.LegJointParams.prototype.clearHlHy = function() {
  return this.setHlHy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.hasHlHy = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.DoubleValue hl_kn = 9;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.getHlKn = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 9));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
*/
proto.bosdyn.api.spot.LegJointParams.prototype.setHlKn = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
 */
proto.bosdyn.api.spot.LegJointParams.prototype.clearHlKn = function() {
  return this.setHlKn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.hasHlKn = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.DoubleValue hr_hx = 10;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.getHrHx = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 10));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
*/
proto.bosdyn.api.spot.LegJointParams.prototype.setHrHx = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
 */
proto.bosdyn.api.spot.LegJointParams.prototype.clearHrHx = function() {
  return this.setHrHx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.hasHrHx = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.DoubleValue hr_hy = 11;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.getHrHy = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 11));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
*/
proto.bosdyn.api.spot.LegJointParams.prototype.setHrHy = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
 */
proto.bosdyn.api.spot.LegJointParams.prototype.clearHrHy = function() {
  return this.setHrHy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.hasHrHy = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.DoubleValue hr_kn = 12;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.getHrKn = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 12));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
*/
proto.bosdyn.api.spot.LegJointParams.prototype.setHrKn = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegJointParams} returns this
 */
proto.bosdyn.api.spot.LegJointParams.prototype.clearHrKn = function() {
  return this.setHrKn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegJointParams.prototype.hasHrKn = function() {
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
proto.bosdyn.api.spot.StanceShape.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.StanceShape.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.StanceShape} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.StanceShape.toObject = function(includeInstance, msg) {
  var f, obj = {
    length: (f = msg.getLength()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    width: (f = msg.getWidth()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    frontWiderThanHind: (f = msg.getFrontWiderThanHind()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    leftLongerThanRight: (f = msg.getLeftLongerThanRight()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    leftForwardOfRight: (f = msg.getLeftForwardOfRight()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.StanceShape}
 */
proto.bosdyn.api.spot.StanceShape.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.StanceShape;
  return proto.bosdyn.api.spot.StanceShape.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.StanceShape} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.StanceShape}
 */
proto.bosdyn.api.spot.StanceShape.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setLength(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setWidth(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFrontWiderThanHind(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setLeftLongerThanRight(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setLeftForwardOfRight(value);
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
proto.bosdyn.api.spot.StanceShape.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.StanceShape.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.StanceShape} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.StanceShape.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLength();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getWidth();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getFrontWiderThanHind();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getLeftLongerThanRight();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getLeftForwardOfRight();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue length = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.StanceShape.prototype.getLength = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.StanceShape} returns this
*/
proto.bosdyn.api.spot.StanceShape.prototype.setLength = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StanceShape} returns this
 */
proto.bosdyn.api.spot.StanceShape.prototype.clearLength = function() {
  return this.setLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StanceShape.prototype.hasLength = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue width = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.StanceShape.prototype.getWidth = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.StanceShape} returns this
*/
proto.bosdyn.api.spot.StanceShape.prototype.setWidth = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StanceShape} returns this
 */
proto.bosdyn.api.spot.StanceShape.prototype.clearWidth = function() {
  return this.setWidth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StanceShape.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue front_wider_than_hind = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.StanceShape.prototype.getFrontWiderThanHind = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.StanceShape} returns this
*/
proto.bosdyn.api.spot.StanceShape.prototype.setFrontWiderThanHind = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StanceShape} returns this
 */
proto.bosdyn.api.spot.StanceShape.prototype.clearFrontWiderThanHind = function() {
  return this.setFrontWiderThanHind(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StanceShape.prototype.hasFrontWiderThanHind = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue left_longer_than_right = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.StanceShape.prototype.getLeftLongerThanRight = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.StanceShape} returns this
*/
proto.bosdyn.api.spot.StanceShape.prototype.setLeftLongerThanRight = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StanceShape} returns this
 */
proto.bosdyn.api.spot.StanceShape.prototype.clearLeftLongerThanRight = function() {
  return this.setLeftLongerThanRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StanceShape.prototype.hasLeftLongerThanRight = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue left_forward_of_right = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.StanceShape.prototype.getLeftForwardOfRight = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.StanceShape} returns this
*/
proto.bosdyn.api.spot.StanceShape.prototype.setLeftForwardOfRight = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StanceShape} returns this
 */
proto.bosdyn.api.spot.StanceShape.prototype.clearLeftForwardOfRight = function() {
  return this.setLeftForwardOfRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StanceShape.prototype.hasLeftForwardOfRight = function() {
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
proto.bosdyn.api.spot.SwingPhases.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.SwingPhases.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.SwingPhases} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SwingPhases.toObject = function(includeInstance, msg) {
  var f, obj = {
    liftoffPhase: (f = msg.getLiftoffPhase()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    touchdownPhase: (f = msg.getTouchdownPhase()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.SwingPhases}
 */
proto.bosdyn.api.spot.SwingPhases.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.SwingPhases;
  return proto.bosdyn.api.spot.SwingPhases.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.SwingPhases} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.SwingPhases}
 */
proto.bosdyn.api.spot.SwingPhases.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setLiftoffPhase(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setTouchdownPhase(value);
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
proto.bosdyn.api.spot.SwingPhases.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.SwingPhases.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.SwingPhases} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SwingPhases.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLiftoffPhase();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getTouchdownPhase();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue liftoff_phase = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SwingPhases.prototype.getLiftoffPhase = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SwingPhases} returns this
*/
proto.bosdyn.api.spot.SwingPhases.prototype.setLiftoffPhase = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SwingPhases} returns this
 */
proto.bosdyn.api.spot.SwingPhases.prototype.clearLiftoffPhase = function() {
  return this.setLiftoffPhase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SwingPhases.prototype.hasLiftoffPhase = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue touchdown_phase = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SwingPhases.prototype.getTouchdownPhase = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SwingPhases} returns this
*/
proto.bosdyn.api.spot.SwingPhases.prototype.setTouchdownPhase = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SwingPhases} returns this
 */
proto.bosdyn.api.spot.SwingPhases.prototype.clearTouchdownPhase = function() {
  return this.setTouchdownPhase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SwingPhases.prototype.hasTouchdownPhase = function() {
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
proto.bosdyn.api.spot.SwingParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.SwingParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.SwingParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SwingParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: (f = msg.getHeight()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    liftoffSpeed: (f = msg.getLiftoffSpeed()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    verticalSpeed: (f = msg.getVerticalSpeed()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    verticalAcceleration: (f = msg.getVerticalAcceleration()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    overlayOutside: (f = msg.getOverlayOutside()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    overlayForward: (f = msg.getOverlayForward()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    lowSpeedFraction: (f = msg.getLowSpeedFraction()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.SwingParams}
 */
proto.bosdyn.api.spot.SwingParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.SwingParams;
  return proto.bosdyn.api.spot.SwingParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.SwingParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.SwingParams}
 */
proto.bosdyn.api.spot.SwingParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setHeight(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setLiftoffSpeed(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setVerticalSpeed(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setVerticalAcceleration(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setOverlayOutside(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setOverlayForward(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setLowSpeedFraction(value);
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
proto.bosdyn.api.spot.SwingParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.SwingParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.SwingParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SwingParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getLiftoffSpeed();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getVerticalSpeed();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getVerticalAcceleration();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getOverlayOutside();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getOverlayForward();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getLowSpeedFraction();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue height = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SwingParams.prototype.getHeight = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SwingParams} returns this
*/
proto.bosdyn.api.spot.SwingParams.prototype.setHeight = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SwingParams} returns this
 */
proto.bosdyn.api.spot.SwingParams.prototype.clearHeight = function() {
  return this.setHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SwingParams.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue liftoff_speed = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SwingParams.prototype.getLiftoffSpeed = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SwingParams} returns this
*/
proto.bosdyn.api.spot.SwingParams.prototype.setLiftoffSpeed = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SwingParams} returns this
 */
proto.bosdyn.api.spot.SwingParams.prototype.clearLiftoffSpeed = function() {
  return this.setLiftoffSpeed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SwingParams.prototype.hasLiftoffSpeed = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue vertical_speed = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SwingParams.prototype.getVerticalSpeed = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SwingParams} returns this
*/
proto.bosdyn.api.spot.SwingParams.prototype.setVerticalSpeed = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SwingParams} returns this
 */
proto.bosdyn.api.spot.SwingParams.prototype.clearVerticalSpeed = function() {
  return this.setVerticalSpeed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SwingParams.prototype.hasVerticalSpeed = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue vertical_acceleration = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SwingParams.prototype.getVerticalAcceleration = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SwingParams} returns this
*/
proto.bosdyn.api.spot.SwingParams.prototype.setVerticalAcceleration = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SwingParams} returns this
 */
proto.bosdyn.api.spot.SwingParams.prototype.clearVerticalAcceleration = function() {
  return this.setVerticalAcceleration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SwingParams.prototype.hasVerticalAcceleration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue overlay_outside = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SwingParams.prototype.getOverlayOutside = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SwingParams} returns this
*/
proto.bosdyn.api.spot.SwingParams.prototype.setOverlayOutside = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SwingParams} returns this
 */
proto.bosdyn.api.spot.SwingParams.prototype.clearOverlayOutside = function() {
  return this.setOverlayOutside(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SwingParams.prototype.hasOverlayOutside = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue overlay_forward = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SwingParams.prototype.getOverlayForward = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SwingParams} returns this
*/
proto.bosdyn.api.spot.SwingParams.prototype.setOverlayForward = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SwingParams} returns this
 */
proto.bosdyn.api.spot.SwingParams.prototype.clearOverlayForward = function() {
  return this.setOverlayForward(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SwingParams.prototype.hasOverlayForward = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.DoubleValue low_speed_fraction = 7;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.SwingParams.prototype.getLowSpeedFraction = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 7));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.SwingParams} returns this
*/
proto.bosdyn.api.spot.SwingParams.prototype.setLowSpeedFraction = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SwingParams} returns this
 */
proto.bosdyn.api.spot.SwingParams.prototype.clearLowSpeedFraction = function() {
  return this.setLowSpeedFraction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SwingParams.prototype.hasLowSpeedFraction = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.AnimatedCycleParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.AnimatedCycleParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimatedCycleParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    animationName: (f = msg.getAnimationName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    enableAnimationDuration: (f = msg.getEnableAnimationDuration()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    enableLegTiming: (f = msg.getEnableLegTiming()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    enableStanceShape: (f = msg.getEnableStanceShape()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    enableBodyOffset: (f = msg.getEnableBodyOffset()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    enableBodyMotion: (f = msg.getEnableBodyMotion()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    bodyXMultiplier: (f = msg.getBodyXMultiplier()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    bodyYMultiplier: (f = msg.getBodyYMultiplier()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    bodyZMultiplier: (f = msg.getBodyZMultiplier()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    bodyRollMultiplier: (f = msg.getBodyRollMultiplier()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    bodyPitchMultiplier: (f = msg.getBodyPitchMultiplier()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    bodyYawMultiplier: (f = msg.getBodyYawMultiplier()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    enableSwingsXy: (f = msg.getEnableSwingsXy()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.AnimatedCycleParams;
  return proto.bosdyn.api.spot.AnimatedCycleParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.AnimatedCycleParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAnimationName(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setEnableAnimationDuration(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setEnableLegTiming(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setEnableStanceShape(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setEnableBodyOffset(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setEnableBodyMotion(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setBodyXMultiplier(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setBodyYMultiplier(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setBodyZMultiplier(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setBodyRollMultiplier(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setBodyPitchMultiplier(value);
      break;
    case 12:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setBodyYawMultiplier(value);
      break;
    case 13:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setEnableSwingsXy(value);
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
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.AnimatedCycleParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.AnimatedCycleParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimatedCycleParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnimationName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getEnableAnimationDuration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getEnableLegTiming();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getEnableStanceShape();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getEnableBodyOffset();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getEnableBodyMotion();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getBodyXMultiplier();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getBodyYMultiplier();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getBodyZMultiplier();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getBodyRollMultiplier();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getBodyPitchMultiplier();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getBodyYawMultiplier();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getEnableSwingsXy();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue animation_name = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.getAnimationName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
*/
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.setAnimationName = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.clearAnimationName = function() {
  return this.setAnimationName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.hasAnimationName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.BoolValue enable_animation_duration = 2;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.getEnableAnimationDuration = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 2));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
*/
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.setEnableAnimationDuration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.clearEnableAnimationDuration = function() {
  return this.setEnableAnimationDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.hasEnableAnimationDuration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.BoolValue enable_leg_timing = 3;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.getEnableLegTiming = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 3));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
*/
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.setEnableLegTiming = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.clearEnableLegTiming = function() {
  return this.setEnableLegTiming(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.hasEnableLegTiming = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.BoolValue enable_stance_shape = 4;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.getEnableStanceShape = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 4));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
*/
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.setEnableStanceShape = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.clearEnableStanceShape = function() {
  return this.setEnableStanceShape(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.hasEnableStanceShape = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.BoolValue enable_body_offset = 5;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.getEnableBodyOffset = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 5));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
*/
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.setEnableBodyOffset = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.clearEnableBodyOffset = function() {
  return this.setEnableBodyOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.hasEnableBodyOffset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.BoolValue enable_body_motion = 6;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.getEnableBodyMotion = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 6));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
*/
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.setEnableBodyMotion = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.clearEnableBodyMotion = function() {
  return this.setEnableBodyMotion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.hasEnableBodyMotion = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.DoubleValue body_x_multiplier = 7;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.getBodyXMultiplier = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 7));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
*/
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.setBodyXMultiplier = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.clearBodyXMultiplier = function() {
  return this.setBodyXMultiplier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.hasBodyXMultiplier = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.DoubleValue body_y_multiplier = 8;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.getBodyYMultiplier = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 8));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
*/
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.setBodyYMultiplier = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.clearBodyYMultiplier = function() {
  return this.setBodyYMultiplier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.hasBodyYMultiplier = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.DoubleValue body_z_multiplier = 9;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.getBodyZMultiplier = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 9));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
*/
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.setBodyZMultiplier = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.clearBodyZMultiplier = function() {
  return this.setBodyZMultiplier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.hasBodyZMultiplier = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.DoubleValue body_roll_multiplier = 10;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.getBodyRollMultiplier = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 10));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
*/
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.setBodyRollMultiplier = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.clearBodyRollMultiplier = function() {
  return this.setBodyRollMultiplier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.hasBodyRollMultiplier = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.DoubleValue body_pitch_multiplier = 11;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.getBodyPitchMultiplier = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 11));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
*/
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.setBodyPitchMultiplier = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.clearBodyPitchMultiplier = function() {
  return this.setBodyPitchMultiplier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.hasBodyPitchMultiplier = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.DoubleValue body_yaw_multiplier = 12;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.getBodyYawMultiplier = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 12));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
*/
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.setBodyYawMultiplier = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.clearBodyYawMultiplier = function() {
  return this.setBodyYawMultiplier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.hasBodyYawMultiplier = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.BoolValue enable_swings_xy = 13;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.getEnableSwingsXy = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 13));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
*/
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.setEnableSwingsXy = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimatedCycleParams} returns this
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.clearEnableSwingsXy = function() {
  return this.setEnableSwingsXy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimatedCycleParams.prototype.hasEnableSwingsXy = function() {
  return jspb.Message.getField(this, 13) != null;
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
proto.bosdyn.api.spot.CustomGaitParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.CustomGaitParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.CustomGaitParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.CustomGaitParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxVelocity: (f = msg.getMaxVelocity()) && bosdyn_api_geometry_pb.Vec2Value.toObject(includeInstance, f),
    maxYawRate: (f = msg.getMaxYawRate()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    accelerationScaling: (f = msg.getAccelerationScaling()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    cycleDuration: (f = msg.getCycleDuration()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    flSwing: (f = msg.getFlSwing()) && proto.bosdyn.api.spot.SwingPhases.toObject(includeInstance, f),
    twoFlSwings: (f = msg.getTwoFlSwings()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    secondFlSwing: (f = msg.getSecondFlSwing()) && proto.bosdyn.api.spot.SwingPhases.toObject(includeInstance, f),
    frSwing: (f = msg.getFrSwing()) && proto.bosdyn.api.spot.SwingPhases.toObject(includeInstance, f),
    twoFrSwings: (f = msg.getTwoFrSwings()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    secondFrSwing: (f = msg.getSecondFrSwing()) && proto.bosdyn.api.spot.SwingPhases.toObject(includeInstance, f),
    hlSwing: (f = msg.getHlSwing()) && proto.bosdyn.api.spot.SwingPhases.toObject(includeInstance, f),
    twoHlSwings: (f = msg.getTwoHlSwings()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    secondHlSwing: (f = msg.getSecondHlSwing()) && proto.bosdyn.api.spot.SwingPhases.toObject(includeInstance, f),
    hrSwing: (f = msg.getHrSwing()) && proto.bosdyn.api.spot.SwingPhases.toObject(includeInstance, f),
    twoHrSwings: (f = msg.getTwoHrSwings()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    secondHrSwing: (f = msg.getSecondHrSwing()) && proto.bosdyn.api.spot.SwingPhases.toObject(includeInstance, f),
    showStanceShape: (f = msg.getShowStanceShape()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    stanceShape: (f = msg.getStanceShape()) && proto.bosdyn.api.spot.StanceShape.toObject(includeInstance, f),
    comHeight: (f = msg.getComHeight()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    bodyTranslationOffset: (f = msg.getBodyTranslationOffset()) && bosdyn_api_geometry_pb.Vec3Value.toObject(includeInstance, f),
    bodyRotationOffset: (f = msg.getBodyRotationOffset()) && proto.bosdyn.api.spot.EulerZYXValue.toObject(includeInstance, f),
    lowSpeedBodyFraction: (f = msg.getLowSpeedBodyFraction()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    generalSwingParams: (f = msg.getGeneralSwingParams()) && proto.bosdyn.api.spot.SwingParams.toObject(includeInstance, f),
    useFlSwingParams: (f = msg.getUseFlSwingParams()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    flSwingParams: (f = msg.getFlSwingParams()) && proto.bosdyn.api.spot.SwingParams.toObject(includeInstance, f),
    useFrSwingParams: (f = msg.getUseFrSwingParams()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    frSwingParams: (f = msg.getFrSwingParams()) && proto.bosdyn.api.spot.SwingParams.toObject(includeInstance, f),
    useHlSwingParams: (f = msg.getUseHlSwingParams()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    hlSwingParams: (f = msg.getHlSwingParams()) && proto.bosdyn.api.spot.SwingParams.toObject(includeInstance, f),
    useHrSwingParams: (f = msg.getUseHrSwingParams()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    hrSwingParams: (f = msg.getHrSwingParams()) && proto.bosdyn.api.spot.SwingParams.toObject(includeInstance, f),
    standInPlace: (f = msg.getStandInPlace()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    standardFinalStance: (f = msg.getStandardFinalStance()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    showStabilityParams: (f = msg.getShowStabilityParams()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    mu: (f = msg.getMu()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    timingStiffness: (f = msg.getTimingStiffness()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    stepPositionStiffness: (f = msg.getStepPositionStiffness()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    enablePerceptionObstacleAvoidance: (f = msg.getEnablePerceptionObstacleAvoidance()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    obstacleAvoidancePadding: (f = msg.getObstacleAvoidancePadding()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    enablePerceptionTerrainHeight: (f = msg.getEnablePerceptionTerrainHeight()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    enablePerceptionStepPlacement: (f = msg.getEnablePerceptionStepPlacement()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    maximumStumbleDistance: (f = msg.getMaximumStumbleDistance()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    tripSensitivity: (f = msg.getTripSensitivity()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    showAnimatedCycleParams: (f = msg.getShowAnimatedCycleParams()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    animatedCycleParams: (f = msg.getAnimatedCycleParams()) && proto.bosdyn.api.spot.AnimatedCycleParams.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.CustomGaitParams}
 */
proto.bosdyn.api.spot.CustomGaitParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.CustomGaitParams;
  return proto.bosdyn.api.spot.CustomGaitParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.CustomGaitParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams}
 */
proto.bosdyn.api.spot.CustomGaitParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new bosdyn_api_geometry_pb.Vec2Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec2Value.deserializeBinaryFromReader);
      msg.setMaxVelocity(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMaxYawRate(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setAccelerationScaling(value);
      break;
    case 51:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setCycleDuration(value);
      break;
    case 52:
      var value = new proto.bosdyn.api.spot.SwingPhases;
      reader.readMessage(value,proto.bosdyn.api.spot.SwingPhases.deserializeBinaryFromReader);
      msg.setFlSwing(value);
      break;
    case 53:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setTwoFlSwings(value);
      break;
    case 54:
      var value = new proto.bosdyn.api.spot.SwingPhases;
      reader.readMessage(value,proto.bosdyn.api.spot.SwingPhases.deserializeBinaryFromReader);
      msg.setSecondFlSwing(value);
      break;
    case 55:
      var value = new proto.bosdyn.api.spot.SwingPhases;
      reader.readMessage(value,proto.bosdyn.api.spot.SwingPhases.deserializeBinaryFromReader);
      msg.setFrSwing(value);
      break;
    case 56:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setTwoFrSwings(value);
      break;
    case 57:
      var value = new proto.bosdyn.api.spot.SwingPhases;
      reader.readMessage(value,proto.bosdyn.api.spot.SwingPhases.deserializeBinaryFromReader);
      msg.setSecondFrSwing(value);
      break;
    case 58:
      var value = new proto.bosdyn.api.spot.SwingPhases;
      reader.readMessage(value,proto.bosdyn.api.spot.SwingPhases.deserializeBinaryFromReader);
      msg.setHlSwing(value);
      break;
    case 59:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setTwoHlSwings(value);
      break;
    case 60:
      var value = new proto.bosdyn.api.spot.SwingPhases;
      reader.readMessage(value,proto.bosdyn.api.spot.SwingPhases.deserializeBinaryFromReader);
      msg.setSecondHlSwing(value);
      break;
    case 61:
      var value = new proto.bosdyn.api.spot.SwingPhases;
      reader.readMessage(value,proto.bosdyn.api.spot.SwingPhases.deserializeBinaryFromReader);
      msg.setHrSwing(value);
      break;
    case 62:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setTwoHrSwings(value);
      break;
    case 63:
      var value = new proto.bosdyn.api.spot.SwingPhases;
      reader.readMessage(value,proto.bosdyn.api.spot.SwingPhases.deserializeBinaryFromReader);
      msg.setSecondHrSwing(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setShowStanceShape(value);
      break;
    case 11:
      var value = new proto.bosdyn.api.spot.StanceShape;
      reader.readMessage(value,proto.bosdyn.api.spot.StanceShape.deserializeBinaryFromReader);
      msg.setStanceShape(value);
      break;
    case 20:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setComHeight(value);
      break;
    case 21:
      var value = new bosdyn_api_geometry_pb.Vec3Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3Value.deserializeBinaryFromReader);
      msg.setBodyTranslationOffset(value);
      break;
    case 22:
      var value = new proto.bosdyn.api.spot.EulerZYXValue;
      reader.readMessage(value,proto.bosdyn.api.spot.EulerZYXValue.deserializeBinaryFromReader);
      msg.setBodyRotationOffset(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setLowSpeedBodyFraction(value);
      break;
    case 80:
      var value = new proto.bosdyn.api.spot.SwingParams;
      reader.readMessage(value,proto.bosdyn.api.spot.SwingParams.deserializeBinaryFromReader);
      msg.setGeneralSwingParams(value);
      break;
    case 81:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setUseFlSwingParams(value);
      break;
    case 82:
      var value = new proto.bosdyn.api.spot.SwingParams;
      reader.readMessage(value,proto.bosdyn.api.spot.SwingParams.deserializeBinaryFromReader);
      msg.setFlSwingParams(value);
      break;
    case 83:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setUseFrSwingParams(value);
      break;
    case 84:
      var value = new proto.bosdyn.api.spot.SwingParams;
      reader.readMessage(value,proto.bosdyn.api.spot.SwingParams.deserializeBinaryFromReader);
      msg.setFrSwingParams(value);
      break;
    case 85:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setUseHlSwingParams(value);
      break;
    case 86:
      var value = new proto.bosdyn.api.spot.SwingParams;
      reader.readMessage(value,proto.bosdyn.api.spot.SwingParams.deserializeBinaryFromReader);
      msg.setHlSwingParams(value);
      break;
    case 87:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setUseHrSwingParams(value);
      break;
    case 88:
      var value = new proto.bosdyn.api.spot.SwingParams;
      reader.readMessage(value,proto.bosdyn.api.spot.SwingParams.deserializeBinaryFromReader);
      msg.setHrSwingParams(value);
      break;
    case 90:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setStandInPlace(value);
      break;
    case 91:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setStandardFinalStance(value);
      break;
    case 100:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setShowStabilityParams(value);
      break;
    case 101:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMu(value);
      break;
    case 102:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setTimingStiffness(value);
      break;
    case 103:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setStepPositionStiffness(value);
      break;
    case 130:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setEnablePerceptionObstacleAvoidance(value);
      break;
    case 131:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setObstacleAvoidancePadding(value);
      break;
    case 132:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setEnablePerceptionTerrainHeight(value);
      break;
    case 133:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setEnablePerceptionStepPlacement(value);
      break;
    case 140:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setMaximumStumbleDistance(value);
      break;
    case 141:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setTripSensitivity(value);
      break;
    case 160:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setShowAnimatedCycleParams(value);
      break;
    case 161:
      var value = new proto.bosdyn.api.spot.AnimatedCycleParams;
      reader.readMessage(value,proto.bosdyn.api.spot.AnimatedCycleParams.deserializeBinaryFromReader);
      msg.setAnimatedCycleParams(value);
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
proto.bosdyn.api.spot.CustomGaitParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.CustomGaitParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.CustomGaitParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.CustomGaitParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxVelocity();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_geometry_pb.Vec2Value.serializeBinaryToWriter
    );
  }
  f = message.getMaxYawRate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getAccelerationScaling();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getCycleDuration();
  if (f != null) {
    writer.writeMessage(
      51,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getFlSwing();
  if (f != null) {
    writer.writeMessage(
      52,
      f,
      proto.bosdyn.api.spot.SwingPhases.serializeBinaryToWriter
    );
  }
  f = message.getTwoFlSwings();
  if (f != null) {
    writer.writeMessage(
      53,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getSecondFlSwing();
  if (f != null) {
    writer.writeMessage(
      54,
      f,
      proto.bosdyn.api.spot.SwingPhases.serializeBinaryToWriter
    );
  }
  f = message.getFrSwing();
  if (f != null) {
    writer.writeMessage(
      55,
      f,
      proto.bosdyn.api.spot.SwingPhases.serializeBinaryToWriter
    );
  }
  f = message.getTwoFrSwings();
  if (f != null) {
    writer.writeMessage(
      56,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getSecondFrSwing();
  if (f != null) {
    writer.writeMessage(
      57,
      f,
      proto.bosdyn.api.spot.SwingPhases.serializeBinaryToWriter
    );
  }
  f = message.getHlSwing();
  if (f != null) {
    writer.writeMessage(
      58,
      f,
      proto.bosdyn.api.spot.SwingPhases.serializeBinaryToWriter
    );
  }
  f = message.getTwoHlSwings();
  if (f != null) {
    writer.writeMessage(
      59,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getSecondHlSwing();
  if (f != null) {
    writer.writeMessage(
      60,
      f,
      proto.bosdyn.api.spot.SwingPhases.serializeBinaryToWriter
    );
  }
  f = message.getHrSwing();
  if (f != null) {
    writer.writeMessage(
      61,
      f,
      proto.bosdyn.api.spot.SwingPhases.serializeBinaryToWriter
    );
  }
  f = message.getTwoHrSwings();
  if (f != null) {
    writer.writeMessage(
      62,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getSecondHrSwing();
  if (f != null) {
    writer.writeMessage(
      63,
      f,
      proto.bosdyn.api.spot.SwingPhases.serializeBinaryToWriter
    );
  }
  f = message.getShowStanceShape();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getStanceShape();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.bosdyn.api.spot.StanceShape.serializeBinaryToWriter
    );
  }
  f = message.getComHeight();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getBodyTranslationOffset();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      bosdyn_api_geometry_pb.Vec3Value.serializeBinaryToWriter
    );
  }
  f = message.getBodyRotationOffset();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.bosdyn.api.spot.EulerZYXValue.serializeBinaryToWriter
    );
  }
  f = message.getLowSpeedBodyFraction();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getGeneralSwingParams();
  if (f != null) {
    writer.writeMessage(
      80,
      f,
      proto.bosdyn.api.spot.SwingParams.serializeBinaryToWriter
    );
  }
  f = message.getUseFlSwingParams();
  if (f != null) {
    writer.writeMessage(
      81,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getFlSwingParams();
  if (f != null) {
    writer.writeMessage(
      82,
      f,
      proto.bosdyn.api.spot.SwingParams.serializeBinaryToWriter
    );
  }
  f = message.getUseFrSwingParams();
  if (f != null) {
    writer.writeMessage(
      83,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getFrSwingParams();
  if (f != null) {
    writer.writeMessage(
      84,
      f,
      proto.bosdyn.api.spot.SwingParams.serializeBinaryToWriter
    );
  }
  f = message.getUseHlSwingParams();
  if (f != null) {
    writer.writeMessage(
      85,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getHlSwingParams();
  if (f != null) {
    writer.writeMessage(
      86,
      f,
      proto.bosdyn.api.spot.SwingParams.serializeBinaryToWriter
    );
  }
  f = message.getUseHrSwingParams();
  if (f != null) {
    writer.writeMessage(
      87,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getHrSwingParams();
  if (f != null) {
    writer.writeMessage(
      88,
      f,
      proto.bosdyn.api.spot.SwingParams.serializeBinaryToWriter
    );
  }
  f = message.getStandInPlace();
  if (f != null) {
    writer.writeMessage(
      90,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getStandardFinalStance();
  if (f != null) {
    writer.writeMessage(
      91,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getShowStabilityParams();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getMu();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getTimingStiffness();
  if (f != null) {
    writer.writeMessage(
      102,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getStepPositionStiffness();
  if (f != null) {
    writer.writeMessage(
      103,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getEnablePerceptionObstacleAvoidance();
  if (f != null) {
    writer.writeMessage(
      130,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getObstacleAvoidancePadding();
  if (f != null) {
    writer.writeMessage(
      131,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getEnablePerceptionTerrainHeight();
  if (f != null) {
    writer.writeMessage(
      132,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getEnablePerceptionStepPlacement();
  if (f != null) {
    writer.writeMessage(
      133,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getMaximumStumbleDistance();
  if (f != null) {
    writer.writeMessage(
      140,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getTripSensitivity();
  if (f != null) {
    writer.writeMessage(
      141,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getShowAnimatedCycleParams();
  if (f != null) {
    writer.writeMessage(
      160,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getAnimatedCycleParams();
  if (f != null) {
    writer.writeMessage(
      161,
      f,
      proto.bosdyn.api.spot.AnimatedCycleParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.Vec2Value max_velocity = 3;
 * @return {?proto.bosdyn.api.Vec2Value}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getMaxVelocity = function() {
  return /** @type{?proto.bosdyn.api.Vec2Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec2Value, 3));
};


/**
 * @param {?proto.bosdyn.api.Vec2Value|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setMaxVelocity = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearMaxVelocity = function() {
  return this.setMaxVelocity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasMaxVelocity = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue max_yaw_rate = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getMaxYawRate = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setMaxYawRate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearMaxYawRate = function() {
  return this.setMaxYawRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasMaxYawRate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue acceleration_scaling = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getAccelerationScaling = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setAccelerationScaling = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearAccelerationScaling = function() {
  return this.setAccelerationScaling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasAccelerationScaling = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue cycle_duration = 51;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getCycleDuration = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 51));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setCycleDuration = function(value) {
  return jspb.Message.setWrapperField(this, 51, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearCycleDuration = function() {
  return this.setCycleDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasCycleDuration = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * optional SwingPhases fl_swing = 52;
 * @return {?proto.bosdyn.api.spot.SwingPhases}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getFlSwing = function() {
  return /** @type{?proto.bosdyn.api.spot.SwingPhases} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.SwingPhases, 52));
};


/**
 * @param {?proto.bosdyn.api.spot.SwingPhases|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setFlSwing = function(value) {
  return jspb.Message.setWrapperField(this, 52, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearFlSwing = function() {
  return this.setFlSwing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasFlSwing = function() {
  return jspb.Message.getField(this, 52) != null;
};


/**
 * optional google.protobuf.BoolValue two_fl_swings = 53;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getTwoFlSwings = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 53));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setTwoFlSwings = function(value) {
  return jspb.Message.setWrapperField(this, 53, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearTwoFlSwings = function() {
  return this.setTwoFlSwings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasTwoFlSwings = function() {
  return jspb.Message.getField(this, 53) != null;
};


/**
 * optional SwingPhases second_fl_swing = 54;
 * @return {?proto.bosdyn.api.spot.SwingPhases}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getSecondFlSwing = function() {
  return /** @type{?proto.bosdyn.api.spot.SwingPhases} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.SwingPhases, 54));
};


/**
 * @param {?proto.bosdyn.api.spot.SwingPhases|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setSecondFlSwing = function(value) {
  return jspb.Message.setWrapperField(this, 54, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearSecondFlSwing = function() {
  return this.setSecondFlSwing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasSecondFlSwing = function() {
  return jspb.Message.getField(this, 54) != null;
};


/**
 * optional SwingPhases fr_swing = 55;
 * @return {?proto.bosdyn.api.spot.SwingPhases}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getFrSwing = function() {
  return /** @type{?proto.bosdyn.api.spot.SwingPhases} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.SwingPhases, 55));
};


/**
 * @param {?proto.bosdyn.api.spot.SwingPhases|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setFrSwing = function(value) {
  return jspb.Message.setWrapperField(this, 55, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearFrSwing = function() {
  return this.setFrSwing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasFrSwing = function() {
  return jspb.Message.getField(this, 55) != null;
};


/**
 * optional google.protobuf.BoolValue two_fr_swings = 56;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getTwoFrSwings = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 56));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setTwoFrSwings = function(value) {
  return jspb.Message.setWrapperField(this, 56, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearTwoFrSwings = function() {
  return this.setTwoFrSwings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasTwoFrSwings = function() {
  return jspb.Message.getField(this, 56) != null;
};


/**
 * optional SwingPhases second_fr_swing = 57;
 * @return {?proto.bosdyn.api.spot.SwingPhases}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getSecondFrSwing = function() {
  return /** @type{?proto.bosdyn.api.spot.SwingPhases} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.SwingPhases, 57));
};


/**
 * @param {?proto.bosdyn.api.spot.SwingPhases|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setSecondFrSwing = function(value) {
  return jspb.Message.setWrapperField(this, 57, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearSecondFrSwing = function() {
  return this.setSecondFrSwing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasSecondFrSwing = function() {
  return jspb.Message.getField(this, 57) != null;
};


/**
 * optional SwingPhases hl_swing = 58;
 * @return {?proto.bosdyn.api.spot.SwingPhases}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getHlSwing = function() {
  return /** @type{?proto.bosdyn.api.spot.SwingPhases} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.SwingPhases, 58));
};


/**
 * @param {?proto.bosdyn.api.spot.SwingPhases|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setHlSwing = function(value) {
  return jspb.Message.setWrapperField(this, 58, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearHlSwing = function() {
  return this.setHlSwing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasHlSwing = function() {
  return jspb.Message.getField(this, 58) != null;
};


/**
 * optional google.protobuf.BoolValue two_hl_swings = 59;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getTwoHlSwings = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 59));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setTwoHlSwings = function(value) {
  return jspb.Message.setWrapperField(this, 59, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearTwoHlSwings = function() {
  return this.setTwoHlSwings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasTwoHlSwings = function() {
  return jspb.Message.getField(this, 59) != null;
};


/**
 * optional SwingPhases second_hl_swing = 60;
 * @return {?proto.bosdyn.api.spot.SwingPhases}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getSecondHlSwing = function() {
  return /** @type{?proto.bosdyn.api.spot.SwingPhases} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.SwingPhases, 60));
};


/**
 * @param {?proto.bosdyn.api.spot.SwingPhases|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setSecondHlSwing = function(value) {
  return jspb.Message.setWrapperField(this, 60, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearSecondHlSwing = function() {
  return this.setSecondHlSwing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasSecondHlSwing = function() {
  return jspb.Message.getField(this, 60) != null;
};


/**
 * optional SwingPhases hr_swing = 61;
 * @return {?proto.bosdyn.api.spot.SwingPhases}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getHrSwing = function() {
  return /** @type{?proto.bosdyn.api.spot.SwingPhases} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.SwingPhases, 61));
};


/**
 * @param {?proto.bosdyn.api.spot.SwingPhases|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setHrSwing = function(value) {
  return jspb.Message.setWrapperField(this, 61, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearHrSwing = function() {
  return this.setHrSwing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasHrSwing = function() {
  return jspb.Message.getField(this, 61) != null;
};


/**
 * optional google.protobuf.BoolValue two_hr_swings = 62;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getTwoHrSwings = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 62));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setTwoHrSwings = function(value) {
  return jspb.Message.setWrapperField(this, 62, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearTwoHrSwings = function() {
  return this.setTwoHrSwings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasTwoHrSwings = function() {
  return jspb.Message.getField(this, 62) != null;
};


/**
 * optional SwingPhases second_hr_swing = 63;
 * @return {?proto.bosdyn.api.spot.SwingPhases}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getSecondHrSwing = function() {
  return /** @type{?proto.bosdyn.api.spot.SwingPhases} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.SwingPhases, 63));
};


/**
 * @param {?proto.bosdyn.api.spot.SwingPhases|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setSecondHrSwing = function(value) {
  return jspb.Message.setWrapperField(this, 63, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearSecondHrSwing = function() {
  return this.setSecondHrSwing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasSecondHrSwing = function() {
  return jspb.Message.getField(this, 63) != null;
};


/**
 * optional google.protobuf.BoolValue show_stance_shape = 10;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getShowStanceShape = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 10));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setShowStanceShape = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearShowStanceShape = function() {
  return this.setShowStanceShape(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasShowStanceShape = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional StanceShape stance_shape = 11;
 * @return {?proto.bosdyn.api.spot.StanceShape}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getStanceShape = function() {
  return /** @type{?proto.bosdyn.api.spot.StanceShape} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.StanceShape, 11));
};


/**
 * @param {?proto.bosdyn.api.spot.StanceShape|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setStanceShape = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearStanceShape = function() {
  return this.setStanceShape(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasStanceShape = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.DoubleValue com_height = 20;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getComHeight = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 20));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setComHeight = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearComHeight = function() {
  return this.setComHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasComHeight = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional bosdyn.api.Vec3Value body_translation_offset = 21;
 * @return {?proto.bosdyn.api.Vec3Value}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getBodyTranslationOffset = function() {
  return /** @type{?proto.bosdyn.api.Vec3Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3Value, 21));
};


/**
 * @param {?proto.bosdyn.api.Vec3Value|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setBodyTranslationOffset = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearBodyTranslationOffset = function() {
  return this.setBodyTranslationOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasBodyTranslationOffset = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional EulerZYXValue body_rotation_offset = 22;
 * @return {?proto.bosdyn.api.spot.EulerZYXValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getBodyRotationOffset = function() {
  return /** @type{?proto.bosdyn.api.spot.EulerZYXValue} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.EulerZYXValue, 22));
};


/**
 * @param {?proto.bosdyn.api.spot.EulerZYXValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setBodyRotationOffset = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearBodyRotationOffset = function() {
  return this.setBodyRotationOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasBodyRotationOffset = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional google.protobuf.DoubleValue low_speed_body_fraction = 8;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getLowSpeedBodyFraction = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 8));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setLowSpeedBodyFraction = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearLowSpeedBodyFraction = function() {
  return this.setLowSpeedBodyFraction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasLowSpeedBodyFraction = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional SwingParams general_swing_params = 80;
 * @return {?proto.bosdyn.api.spot.SwingParams}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getGeneralSwingParams = function() {
  return /** @type{?proto.bosdyn.api.spot.SwingParams} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.SwingParams, 80));
};


/**
 * @param {?proto.bosdyn.api.spot.SwingParams|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setGeneralSwingParams = function(value) {
  return jspb.Message.setWrapperField(this, 80, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearGeneralSwingParams = function() {
  return this.setGeneralSwingParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasGeneralSwingParams = function() {
  return jspb.Message.getField(this, 80) != null;
};


/**
 * optional google.protobuf.BoolValue use_fl_swing_params = 81;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getUseFlSwingParams = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 81));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setUseFlSwingParams = function(value) {
  return jspb.Message.setWrapperField(this, 81, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearUseFlSwingParams = function() {
  return this.setUseFlSwingParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasUseFlSwingParams = function() {
  return jspb.Message.getField(this, 81) != null;
};


/**
 * optional SwingParams fl_swing_params = 82;
 * @return {?proto.bosdyn.api.spot.SwingParams}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getFlSwingParams = function() {
  return /** @type{?proto.bosdyn.api.spot.SwingParams} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.SwingParams, 82));
};


/**
 * @param {?proto.bosdyn.api.spot.SwingParams|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setFlSwingParams = function(value) {
  return jspb.Message.setWrapperField(this, 82, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearFlSwingParams = function() {
  return this.setFlSwingParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasFlSwingParams = function() {
  return jspb.Message.getField(this, 82) != null;
};


/**
 * optional google.protobuf.BoolValue use_fr_swing_params = 83;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getUseFrSwingParams = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 83));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setUseFrSwingParams = function(value) {
  return jspb.Message.setWrapperField(this, 83, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearUseFrSwingParams = function() {
  return this.setUseFrSwingParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasUseFrSwingParams = function() {
  return jspb.Message.getField(this, 83) != null;
};


/**
 * optional SwingParams fr_swing_params = 84;
 * @return {?proto.bosdyn.api.spot.SwingParams}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getFrSwingParams = function() {
  return /** @type{?proto.bosdyn.api.spot.SwingParams} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.SwingParams, 84));
};


/**
 * @param {?proto.bosdyn.api.spot.SwingParams|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setFrSwingParams = function(value) {
  return jspb.Message.setWrapperField(this, 84, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearFrSwingParams = function() {
  return this.setFrSwingParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasFrSwingParams = function() {
  return jspb.Message.getField(this, 84) != null;
};


/**
 * optional google.protobuf.BoolValue use_hl_swing_params = 85;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getUseHlSwingParams = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 85));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setUseHlSwingParams = function(value) {
  return jspb.Message.setWrapperField(this, 85, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearUseHlSwingParams = function() {
  return this.setUseHlSwingParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasUseHlSwingParams = function() {
  return jspb.Message.getField(this, 85) != null;
};


/**
 * optional SwingParams hl_swing_params = 86;
 * @return {?proto.bosdyn.api.spot.SwingParams}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getHlSwingParams = function() {
  return /** @type{?proto.bosdyn.api.spot.SwingParams} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.SwingParams, 86));
};


/**
 * @param {?proto.bosdyn.api.spot.SwingParams|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setHlSwingParams = function(value) {
  return jspb.Message.setWrapperField(this, 86, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearHlSwingParams = function() {
  return this.setHlSwingParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasHlSwingParams = function() {
  return jspb.Message.getField(this, 86) != null;
};


/**
 * optional google.protobuf.BoolValue use_hr_swing_params = 87;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getUseHrSwingParams = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 87));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setUseHrSwingParams = function(value) {
  return jspb.Message.setWrapperField(this, 87, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearUseHrSwingParams = function() {
  return this.setUseHrSwingParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasUseHrSwingParams = function() {
  return jspb.Message.getField(this, 87) != null;
};


/**
 * optional SwingParams hr_swing_params = 88;
 * @return {?proto.bosdyn.api.spot.SwingParams}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getHrSwingParams = function() {
  return /** @type{?proto.bosdyn.api.spot.SwingParams} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.SwingParams, 88));
};


/**
 * @param {?proto.bosdyn.api.spot.SwingParams|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setHrSwingParams = function(value) {
  return jspb.Message.setWrapperField(this, 88, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearHrSwingParams = function() {
  return this.setHrSwingParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasHrSwingParams = function() {
  return jspb.Message.getField(this, 88) != null;
};


/**
 * optional google.protobuf.BoolValue stand_in_place = 90;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getStandInPlace = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 90));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setStandInPlace = function(value) {
  return jspb.Message.setWrapperField(this, 90, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearStandInPlace = function() {
  return this.setStandInPlace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasStandInPlace = function() {
  return jspb.Message.getField(this, 90) != null;
};


/**
 * optional google.protobuf.BoolValue standard_final_stance = 91;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getStandardFinalStance = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 91));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setStandardFinalStance = function(value) {
  return jspb.Message.setWrapperField(this, 91, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearStandardFinalStance = function() {
  return this.setStandardFinalStance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasStandardFinalStance = function() {
  return jspb.Message.getField(this, 91) != null;
};


/**
 * optional google.protobuf.BoolValue show_stability_params = 100;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getShowStabilityParams = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 100));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setShowStabilityParams = function(value) {
  return jspb.Message.setWrapperField(this, 100, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearShowStabilityParams = function() {
  return this.setShowStabilityParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasShowStabilityParams = function() {
  return jspb.Message.getField(this, 100) != null;
};


/**
 * optional google.protobuf.DoubleValue mu = 101;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getMu = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 101));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setMu = function(value) {
  return jspb.Message.setWrapperField(this, 101, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearMu = function() {
  return this.setMu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasMu = function() {
  return jspb.Message.getField(this, 101) != null;
};


/**
 * optional google.protobuf.DoubleValue timing_stiffness = 102;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getTimingStiffness = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 102));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setTimingStiffness = function(value) {
  return jspb.Message.setWrapperField(this, 102, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearTimingStiffness = function() {
  return this.setTimingStiffness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasTimingStiffness = function() {
  return jspb.Message.getField(this, 102) != null;
};


/**
 * optional google.protobuf.DoubleValue step_position_stiffness = 103;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getStepPositionStiffness = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 103));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setStepPositionStiffness = function(value) {
  return jspb.Message.setWrapperField(this, 103, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearStepPositionStiffness = function() {
  return this.setStepPositionStiffness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasStepPositionStiffness = function() {
  return jspb.Message.getField(this, 103) != null;
};


/**
 * optional google.protobuf.BoolValue enable_perception_obstacle_avoidance = 130;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getEnablePerceptionObstacleAvoidance = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 130));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setEnablePerceptionObstacleAvoidance = function(value) {
  return jspb.Message.setWrapperField(this, 130, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearEnablePerceptionObstacleAvoidance = function() {
  return this.setEnablePerceptionObstacleAvoidance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasEnablePerceptionObstacleAvoidance = function() {
  return jspb.Message.getField(this, 130) != null;
};


/**
 * optional google.protobuf.DoubleValue obstacle_avoidance_padding = 131;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getObstacleAvoidancePadding = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 131));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setObstacleAvoidancePadding = function(value) {
  return jspb.Message.setWrapperField(this, 131, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearObstacleAvoidancePadding = function() {
  return this.setObstacleAvoidancePadding(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasObstacleAvoidancePadding = function() {
  return jspb.Message.getField(this, 131) != null;
};


/**
 * optional google.protobuf.BoolValue enable_perception_terrain_height = 132;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getEnablePerceptionTerrainHeight = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 132));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setEnablePerceptionTerrainHeight = function(value) {
  return jspb.Message.setWrapperField(this, 132, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearEnablePerceptionTerrainHeight = function() {
  return this.setEnablePerceptionTerrainHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasEnablePerceptionTerrainHeight = function() {
  return jspb.Message.getField(this, 132) != null;
};


/**
 * optional google.protobuf.BoolValue enable_perception_step_placement = 133;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getEnablePerceptionStepPlacement = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 133));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setEnablePerceptionStepPlacement = function(value) {
  return jspb.Message.setWrapperField(this, 133, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearEnablePerceptionStepPlacement = function() {
  return this.setEnablePerceptionStepPlacement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasEnablePerceptionStepPlacement = function() {
  return jspb.Message.getField(this, 133) != null;
};


/**
 * optional google.protobuf.DoubleValue maximum_stumble_distance = 140;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getMaximumStumbleDistance = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 140));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setMaximumStumbleDistance = function(value) {
  return jspb.Message.setWrapperField(this, 140, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearMaximumStumbleDistance = function() {
  return this.setMaximumStumbleDistance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasMaximumStumbleDistance = function() {
  return jspb.Message.getField(this, 140) != null;
};


/**
 * optional google.protobuf.DoubleValue trip_sensitivity = 141;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getTripSensitivity = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 141));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setTripSensitivity = function(value) {
  return jspb.Message.setWrapperField(this, 141, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearTripSensitivity = function() {
  return this.setTripSensitivity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasTripSensitivity = function() {
  return jspb.Message.getField(this, 141) != null;
};


/**
 * optional google.protobuf.BoolValue show_animated_cycle_params = 160;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getShowAnimatedCycleParams = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 160));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setShowAnimatedCycleParams = function(value) {
  return jspb.Message.setWrapperField(this, 160, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearShowAnimatedCycleParams = function() {
  return this.setShowAnimatedCycleParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasShowAnimatedCycleParams = function() {
  return jspb.Message.getField(this, 160) != null;
};


/**
 * optional AnimatedCycleParams animated_cycle_params = 161;
 * @return {?proto.bosdyn.api.spot.AnimatedCycleParams}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.getAnimatedCycleParams = function() {
  return /** @type{?proto.bosdyn.api.spot.AnimatedCycleParams} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.AnimatedCycleParams, 161));
};


/**
 * @param {?proto.bosdyn.api.spot.AnimatedCycleParams|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
*/
proto.bosdyn.api.spot.CustomGaitParams.prototype.setAnimatedCycleParams = function(value) {
  return jspb.Message.setWrapperField(this, 161, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitParams} returns this
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.clearAnimatedCycleParams = function() {
  return this.setAnimatedCycleParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitParams.prototype.hasAnimatedCycleParams = function() {
  return jspb.Message.getField(this, 161) != null;
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
proto.bosdyn.api.spot.CustomGaitCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.CustomGaitCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.CustomGaitCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.CustomGaitCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    driveVelocityBody: (f = msg.getDriveVelocityBody()) && bosdyn_api_geometry_pb.SE2Velocity.toObject(includeInstance, f),
    finished: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    bodyTranslationOffset: (f = msg.getBodyTranslationOffset()) && bosdyn_api_geometry_pb.Vec3.toObject(includeInstance, f),
    bodyOrientationOffset: (f = msg.getBodyOrientationOffset()) && proto.bosdyn.api.spot.EulerZYX.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.CustomGaitCommand}
 */
proto.bosdyn.api.spot.CustomGaitCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.CustomGaitCommand;
  return proto.bosdyn.api.spot.CustomGaitCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.CustomGaitCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.CustomGaitCommand}
 */
proto.bosdyn.api.spot.CustomGaitCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.SE2Velocity;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE2Velocity.deserializeBinaryFromReader);
      msg.setDriveVelocityBody(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFinished(value);
      break;
    case 3:
      var value = new bosdyn_api_geometry_pb.Vec3;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3.deserializeBinaryFromReader);
      msg.setBodyTranslationOffset(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.spot.EulerZYX;
      reader.readMessage(value,proto.bosdyn.api.spot.EulerZYX.deserializeBinaryFromReader);
      msg.setBodyOrientationOffset(value);
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
proto.bosdyn.api.spot.CustomGaitCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.CustomGaitCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.CustomGaitCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.CustomGaitCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDriveVelocityBody();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.SE2Velocity.serializeBinaryToWriter
    );
  }
  f = message.getFinished();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getBodyTranslationOffset();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_geometry_pb.Vec3.serializeBinaryToWriter
    );
  }
  f = message.getBodyOrientationOffset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.spot.EulerZYX.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.SE2Velocity drive_velocity_body = 1;
 * @return {?proto.bosdyn.api.SE2Velocity}
 */
proto.bosdyn.api.spot.CustomGaitCommand.prototype.getDriveVelocityBody = function() {
  return /** @type{?proto.bosdyn.api.SE2Velocity} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE2Velocity, 1));
};


/**
 * @param {?proto.bosdyn.api.SE2Velocity|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitCommand} returns this
*/
proto.bosdyn.api.spot.CustomGaitCommand.prototype.setDriveVelocityBody = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitCommand} returns this
 */
proto.bosdyn.api.spot.CustomGaitCommand.prototype.clearDriveVelocityBody = function() {
  return this.setDriveVelocityBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitCommand.prototype.hasDriveVelocityBody = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool finished = 2;
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitCommand.prototype.getFinished = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.CustomGaitCommand} returns this
 */
proto.bosdyn.api.spot.CustomGaitCommand.prototype.setFinished = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bosdyn.api.Vec3 body_translation_offset = 3;
 * @return {?proto.bosdyn.api.Vec3}
 */
proto.bosdyn.api.spot.CustomGaitCommand.prototype.getBodyTranslationOffset = function() {
  return /** @type{?proto.bosdyn.api.Vec3} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3, 3));
};


/**
 * @param {?proto.bosdyn.api.Vec3|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitCommand} returns this
*/
proto.bosdyn.api.spot.CustomGaitCommand.prototype.setBodyTranslationOffset = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitCommand} returns this
 */
proto.bosdyn.api.spot.CustomGaitCommand.prototype.clearBodyTranslationOffset = function() {
  return this.setBodyTranslationOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitCommand.prototype.hasBodyTranslationOffset = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional EulerZYX body_orientation_offset = 4;
 * @return {?proto.bosdyn.api.spot.EulerZYX}
 */
proto.bosdyn.api.spot.CustomGaitCommand.prototype.getBodyOrientationOffset = function() {
  return /** @type{?proto.bosdyn.api.spot.EulerZYX} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.EulerZYX, 4));
};


/**
 * @param {?proto.bosdyn.api.spot.EulerZYX|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitCommand} returns this
*/
proto.bosdyn.api.spot.CustomGaitCommand.prototype.setBodyOrientationOffset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitCommand} returns this
 */
proto.bosdyn.api.spot.CustomGaitCommand.prototype.clearBodyOrientationOffset = function() {
  return this.setBodyOrientationOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitCommand.prototype.hasBodyOrientationOffset = function() {
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
proto.bosdyn.api.spot.CustomGaitCommandLimits.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.CustomGaitCommandLimits.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.CustomGaitCommandLimits} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.CustomGaitCommandLimits.toObject = function(includeInstance, msg) {
  var f, obj = {
    maximumDriveVelocityBody: (f = msg.getMaximumDriveVelocityBody()) && bosdyn_api_geometry_pb.SE2Velocity.toObject(includeInstance, f),
    maximumBodyTranslationOffset: (f = msg.getMaximumBodyTranslationOffset()) && bosdyn_api_geometry_pb.Vec3.toObject(includeInstance, f),
    maximumBodyOrientationOffset: (f = msg.getMaximumBodyOrientationOffset()) && proto.bosdyn.api.spot.EulerZYX.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.CustomGaitCommandLimits}
 */
proto.bosdyn.api.spot.CustomGaitCommandLimits.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.CustomGaitCommandLimits;
  return proto.bosdyn.api.spot.CustomGaitCommandLimits.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.CustomGaitCommandLimits} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.CustomGaitCommandLimits}
 */
proto.bosdyn.api.spot.CustomGaitCommandLimits.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.SE2Velocity;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE2Velocity.deserializeBinaryFromReader);
      msg.setMaximumDriveVelocityBody(value);
      break;
    case 3:
      var value = new bosdyn_api_geometry_pb.Vec3;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3.deserializeBinaryFromReader);
      msg.setMaximumBodyTranslationOffset(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.spot.EulerZYX;
      reader.readMessage(value,proto.bosdyn.api.spot.EulerZYX.deserializeBinaryFromReader);
      msg.setMaximumBodyOrientationOffset(value);
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
proto.bosdyn.api.spot.CustomGaitCommandLimits.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.CustomGaitCommandLimits.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.CustomGaitCommandLimits} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.CustomGaitCommandLimits.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaximumDriveVelocityBody();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.SE2Velocity.serializeBinaryToWriter
    );
  }
  f = message.getMaximumBodyTranslationOffset();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_geometry_pb.Vec3.serializeBinaryToWriter
    );
  }
  f = message.getMaximumBodyOrientationOffset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.spot.EulerZYX.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.SE2Velocity maximum_drive_velocity_body = 1;
 * @return {?proto.bosdyn.api.SE2Velocity}
 */
proto.bosdyn.api.spot.CustomGaitCommandLimits.prototype.getMaximumDriveVelocityBody = function() {
  return /** @type{?proto.bosdyn.api.SE2Velocity} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE2Velocity, 1));
};


/**
 * @param {?proto.bosdyn.api.SE2Velocity|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitCommandLimits} returns this
*/
proto.bosdyn.api.spot.CustomGaitCommandLimits.prototype.setMaximumDriveVelocityBody = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitCommandLimits} returns this
 */
proto.bosdyn.api.spot.CustomGaitCommandLimits.prototype.clearMaximumDriveVelocityBody = function() {
  return this.setMaximumDriveVelocityBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitCommandLimits.prototype.hasMaximumDriveVelocityBody = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.Vec3 maximum_body_translation_offset = 3;
 * @return {?proto.bosdyn.api.Vec3}
 */
proto.bosdyn.api.spot.CustomGaitCommandLimits.prototype.getMaximumBodyTranslationOffset = function() {
  return /** @type{?proto.bosdyn.api.Vec3} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3, 3));
};


/**
 * @param {?proto.bosdyn.api.Vec3|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitCommandLimits} returns this
*/
proto.bosdyn.api.spot.CustomGaitCommandLimits.prototype.setMaximumBodyTranslationOffset = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitCommandLimits} returns this
 */
proto.bosdyn.api.spot.CustomGaitCommandLimits.prototype.clearMaximumBodyTranslationOffset = function() {
  return this.setMaximumBodyTranslationOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitCommandLimits.prototype.hasMaximumBodyTranslationOffset = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional EulerZYX maximum_body_orientation_offset = 4;
 * @return {?proto.bosdyn.api.spot.EulerZYX}
 */
proto.bosdyn.api.spot.CustomGaitCommandLimits.prototype.getMaximumBodyOrientationOffset = function() {
  return /** @type{?proto.bosdyn.api.spot.EulerZYX} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.EulerZYX, 4));
};


/**
 * @param {?proto.bosdyn.api.spot.EulerZYX|undefined} value
 * @return {!proto.bosdyn.api.spot.CustomGaitCommandLimits} returns this
*/
proto.bosdyn.api.spot.CustomGaitCommandLimits.prototype.setMaximumBodyOrientationOffset = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.CustomGaitCommandLimits} returns this
 */
proto.bosdyn.api.spot.CustomGaitCommandLimits.prototype.clearMaximumBodyOrientationOffset = function() {
  return this.setMaximumBodyOrientationOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.CustomGaitCommandLimits.prototype.hasMaximumBodyOrientationOffset = function() {
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
proto.bosdyn.api.spot.AnimateParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.AnimateParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.AnimateParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimateParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    animationName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bodyEntrySlices: (f = msg.getBodyEntrySlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    bodyExitSlices: (f = msg.getBodyExitSlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    translationMultiplier: (f = msg.getTranslationMultiplier()) && bosdyn_api_geometry_pb.Vec3Value.toObject(includeInstance, f),
    rotationMultiplier: (f = msg.getRotationMultiplier()) && proto.bosdyn.api.spot.EulerZYXValue.toObject(includeInstance, f),
    armEntrySlices: (f = msg.getArmEntrySlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    shoulder0Offset: (f = msg.getShoulder0Offset()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    shoulder1Offset: (f = msg.getShoulder1Offset()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    elbow0Offset: (f = msg.getElbow0Offset()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    elbow1Offset: (f = msg.getElbow1Offset()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    wrist0Offset: (f = msg.getWrist0Offset()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    wrist1Offset: (f = msg.getWrist1Offset()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    gripperOffset: (f = msg.getGripperOffset()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    speed: (f = msg.getSpeed()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    offsetSlices: (f = msg.getOffsetSlices()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    gripperMultiplier: (f = msg.getGripperMultiplier()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    gripperStrengthFraction: (f = msg.getGripperStrengthFraction()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    armDanceFrameId: (f = msg.getArmDanceFrameId()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    bodyTrackingStiffness: (f = msg.getBodyTrackingStiffness()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.bosdyn.api.spot.AnimateParams}
 */
proto.bosdyn.api.spot.AnimateParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.AnimateParams;
  return proto.bosdyn.api.spot.AnimateParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.AnimateParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.AnimateParams}
 */
proto.bosdyn.api.spot.AnimateParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnimationName(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setBodyEntrySlices(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setBodyExitSlices(value);
      break;
    case 4:
      var value = new bosdyn_api_geometry_pb.Vec3Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3Value.deserializeBinaryFromReader);
      msg.setTranslationMultiplier(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.spot.EulerZYXValue;
      reader.readMessage(value,proto.bosdyn.api.spot.EulerZYXValue.deserializeBinaryFromReader);
      msg.setRotationMultiplier(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setArmEntrySlices(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setShoulder0Offset(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setShoulder1Offset(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setElbow0Offset(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setElbow1Offset(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setWrist0Offset(value);
      break;
    case 12:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setWrist1Offset(value);
      break;
    case 13:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setGripperOffset(value);
      break;
    case 14:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setSpeed(value);
      break;
    case 15:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setOffsetSlices(value);
      break;
    case 16:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setGripperMultiplier(value);
      break;
    case 17:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setGripperStrengthFraction(value);
      break;
    case 18:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setArmDanceFrameId(value);
      break;
    case 19:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setBodyTrackingStiffness(value);
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
proto.bosdyn.api.spot.AnimateParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.AnimateParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.AnimateParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimateParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnimationName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBodyEntrySlices();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getBodyExitSlices();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getTranslationMultiplier();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_geometry_pb.Vec3Value.serializeBinaryToWriter
    );
  }
  f = message.getRotationMultiplier();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.spot.EulerZYXValue.serializeBinaryToWriter
    );
  }
  f = message.getArmEntrySlices();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getShoulder0Offset();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getShoulder1Offset();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getElbow0Offset();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getElbow1Offset();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getWrist0Offset();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getWrist1Offset();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getGripperOffset();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getSpeed();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getOffsetSlices();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getGripperMultiplier();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getGripperStrengthFraction();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getArmDanceFrameId();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getBodyTrackingStiffness();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string animation_name = 1;
 * @return {string}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getAnimationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.setAnimationName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.DoubleValue body_entry_slices = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getBodyEntrySlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setBodyEntrySlices = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearBodyEntrySlices = function() {
  return this.setBodyEntrySlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasBodyEntrySlices = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue body_exit_slices = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getBodyExitSlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setBodyExitSlices = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearBodyExitSlices = function() {
  return this.setBodyExitSlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasBodyExitSlices = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bosdyn.api.Vec3Value translation_multiplier = 4;
 * @return {?proto.bosdyn.api.Vec3Value}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getTranslationMultiplier = function() {
  return /** @type{?proto.bosdyn.api.Vec3Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3Value, 4));
};


/**
 * @param {?proto.bosdyn.api.Vec3Value|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setTranslationMultiplier = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearTranslationMultiplier = function() {
  return this.setTranslationMultiplier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasTranslationMultiplier = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional EulerZYXValue rotation_multiplier = 5;
 * @return {?proto.bosdyn.api.spot.EulerZYXValue}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getRotationMultiplier = function() {
  return /** @type{?proto.bosdyn.api.spot.EulerZYXValue} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.EulerZYXValue, 5));
};


/**
 * @param {?proto.bosdyn.api.spot.EulerZYXValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setRotationMultiplier = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearRotationMultiplier = function() {
  return this.setRotationMultiplier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasRotationMultiplier = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue arm_entry_slices = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getArmEntrySlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setArmEntrySlices = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearArmEntrySlices = function() {
  return this.setArmEntrySlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasArmEntrySlices = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.DoubleValue shoulder_0_offset = 7;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getShoulder0Offset = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 7));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setShoulder0Offset = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearShoulder0Offset = function() {
  return this.setShoulder0Offset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasShoulder0Offset = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.DoubleValue shoulder_1_offset = 8;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getShoulder1Offset = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 8));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setShoulder1Offset = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearShoulder1Offset = function() {
  return this.setShoulder1Offset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasShoulder1Offset = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.DoubleValue elbow_0_offset = 9;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getElbow0Offset = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 9));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setElbow0Offset = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearElbow0Offset = function() {
  return this.setElbow0Offset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasElbow0Offset = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.DoubleValue elbow_1_offset = 10;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getElbow1Offset = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 10));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setElbow1Offset = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearElbow1Offset = function() {
  return this.setElbow1Offset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasElbow1Offset = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.DoubleValue wrist_0_offset = 11;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getWrist0Offset = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 11));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setWrist0Offset = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearWrist0Offset = function() {
  return this.setWrist0Offset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasWrist0Offset = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.DoubleValue wrist_1_offset = 12;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getWrist1Offset = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 12));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setWrist1Offset = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearWrist1Offset = function() {
  return this.setWrist1Offset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasWrist1Offset = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.DoubleValue gripper_offset = 13;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getGripperOffset = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 13));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setGripperOffset = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearGripperOffset = function() {
  return this.setGripperOffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasGripperOffset = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.DoubleValue speed = 14;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getSpeed = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 14));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setSpeed = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearSpeed = function() {
  return this.setSpeed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasSpeed = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.DoubleValue offset_slices = 15;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getOffsetSlices = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 15));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setOffsetSlices = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearOffsetSlices = function() {
  return this.setOffsetSlices(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasOffsetSlices = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.DoubleValue gripper_multiplier = 16;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getGripperMultiplier = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 16));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setGripperMultiplier = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearGripperMultiplier = function() {
  return this.setGripperMultiplier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasGripperMultiplier = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.DoubleValue gripper_strength_fraction = 17;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getGripperStrengthFraction = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 17));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setGripperStrengthFraction = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearGripperStrengthFraction = function() {
  return this.setGripperStrengthFraction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasGripperStrengthFraction = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Int32Value arm_dance_frame_id = 18;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getArmDanceFrameId = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 18));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setArmDanceFrameId = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearArmDanceFrameId = function() {
  return this.setArmDanceFrameId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasArmDanceFrameId = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional google.protobuf.DoubleValue body_tracking_stiffness = 19;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.getBodyTrackingStiffness = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 19));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
*/
proto.bosdyn.api.spot.AnimateParams.prototype.setBodyTrackingStiffness = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateParams} returns this
 */
proto.bosdyn.api.spot.AnimateParams.prototype.clearBodyTrackingStiffness = function() {
  return this.setBodyTrackingStiffness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateParams.prototype.hasBodyTrackingStiffness = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.Pivot = {
  PIVOT_UNKNOWN: 0,
  PIVOT_FRONT: 1,
  PIVOT_HIND: 2,
  PIVOT_CENTER: 3
};

/**
 * @enum {number}
 */
proto.bosdyn.api.spot.Easing = {
  EASING_UNKNOWN: 0,
  EASING_LINEAR: 1,
  EASING_QUADRATIC_INPUT: 2,
  EASING_QUADRATIC_OUTPUT: 3,
  EASING_QUADRATIC_IN_OUT: 4,
  EASING_CUBIC_INPUT: 5,
  EASING_CUBIC_OUTPUT: 6,
  EASING_CUBIC_IN_OUT: 7,
  EASING_EXPONENTIAL_INPUT: 8,
  EASING_EXPONENTIAL_OUTPUT: 9,
  EASING_EXPONENTIAL_IN_OUT: 10
};

/**
 * @enum {number}
 */
proto.bosdyn.api.spot.ArmMoveFrame = {
  ARM_MOVE_FRAME_UNKNOWN: 0,
  ARM_MOVE_FRAME_CENTER_OF_FOOTPRINT: 1,
  ARM_MOVE_FRAME_HAND: 2,
  ARM_MOVE_FRAME_BODY: 3,
  ARM_MOVE_FRAME_SHOULDER: 4,
  ARM_MOVE_FRAME_SHADOW: 5,
  ARM_MOVE_FRAME_DANCE: 6
};

/**
 * @enum {number}
 */
proto.bosdyn.api.spot.Leg = {
  LEG_UNKNOWN: 0,
  LEG_FRONT_LEFT: 1,
  LEG_FRONT_RIGHT: 2,
  LEG_HIND_LEFT: 3,
  LEG_HIND_RIGHT: 4,
  LEG_NO_LEG: -1
};

/**
 * @enum {number}
 */
proto.bosdyn.api.spot.LedLight = {
  LED_LIGHT_UNKNOWN: 0,
  LED_LIGHT_LEFT1: 1,
  LED_LIGHT_LEFT2: 2,
  LED_LIGHT_LEFT3: 3,
  LED_LIGHT_LEFT4: 4,
  LED_LIGHT_RIGHT1: 5,
  LED_LIGHT_RIGHT2: 6,
  LED_LIGHT_RIGHT3: 7,
  LED_LIGHT_RIGHT4: 8
};

goog.object.extend(exports, proto.bosdyn.api.spot);

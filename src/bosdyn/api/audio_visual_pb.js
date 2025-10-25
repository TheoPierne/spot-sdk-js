// source: bosdyn/api/audio_visual.proto
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

var bosdyn_api_header_pb = require('../../bosdyn/api/header_pb.js');
goog.object.extend(proto, bosdyn_api_header_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var bosdyn_api_spot_choreography_params_pb = require('../../bosdyn/api/spot/choreography_params_pb.js');
goog.object.extend(proto, bosdyn_api_spot_choreography_params_pb);
goog.exportSymbol('proto.bosdyn.api.AddOrModifyBehaviorRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.AddOrModifyBehaviorResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.AddOrModifyBehaviorResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.AudioSequenceGroup', null, global);
goog.exportSymbol('proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence', null, global);
goog.exportSymbol('proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration', null, global);
goog.exportSymbol('proto.bosdyn.api.AudioVisualBehavior', null, global);
goog.exportSymbol('proto.bosdyn.api.AudioVisualSystemParams', null, global);
goog.exportSymbol('proto.bosdyn.api.Color', null, global);
goog.exportSymbol('proto.bosdyn.api.Color.ColorTypeCase', null, global);
goog.exportSymbol('proto.bosdyn.api.Color.Preset', null, global);
goog.exportSymbol('proto.bosdyn.api.Color.RGB', null, global);
goog.exportSymbol('proto.bosdyn.api.DeleteBehaviorsRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.DeleteBehaviorsResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.DeleteBehaviorsResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.GetSystemParamsRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.GetSystemParamsResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.InterpolationMode', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.LedSequence', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.LedSequence.SequenceTypeCase', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.SpotCamSequence', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.SequenceTypeCase', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence', null, global);
goog.exportSymbol('proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame', null, global);
goog.exportSymbol('proto.bosdyn.api.ListBehaviorsRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.ListBehaviorsResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.LiveAudioVisualBehavior', null, global);
goog.exportSymbol('proto.bosdyn.api.PresetColorAssociation', null, global);
goog.exportSymbol('proto.bosdyn.api.PresetColorAssociation.AssociationCase', null, global);
goog.exportSymbol('proto.bosdyn.api.PresetColorAssociation.PredefinedColor', null, global);
goog.exportSymbol('proto.bosdyn.api.RunBehaviorRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.RunBehaviorResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.RunBehaviorResponse.RunResult', null, global);
goog.exportSymbol('proto.bosdyn.api.RunBehaviorResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.SetSystemParamsRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.SetSystemParamsResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.StopBehaviorRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.StopBehaviorResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.StopBehaviorResponse.Status', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.Color = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.Color.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.Color, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.Color.displayName = 'proto.bosdyn.api.Color';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.Color.RGB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.Color.RGB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.Color.RGB.displayName = 'proto.bosdyn.api.Color.RGB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.LedSequenceGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.LedSequenceGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.LedSequenceGroup.displayName = 'proto.bosdyn.api.LedSequenceGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.LedSequenceGroup.LedSequence.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.LedSequenceGroup.LedSequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.LedSequenceGroup.LedSequence.displayName = 'proto.bosdyn.api.LedSequenceGroup.LedSequence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.displayName = 'proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.displayName = 'proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.displayName = 'proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.displayName = 'proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.displayName = 'proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence.displayName = 'proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.LedSequenceGroup.SpotCamSequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.displayName = 'proto.bosdyn.api.LedSequenceGroup.SpotCamSequence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.displayName = 'proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame.displayName = 'proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.displayName = 'proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.displayName = 'proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence.displayName = 'proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.displayName = 'proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.displayName = 'proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.AudioSequenceGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.AudioSequenceGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.AudioSequenceGroup.displayName = 'proto.bosdyn.api.AudioSequenceGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.displayName = 'proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.displayName = 'proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.AudioVisualBehavior = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.AudioVisualBehavior, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.AudioVisualBehavior.displayName = 'proto.bosdyn.api.AudioVisualBehavior';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.LiveAudioVisualBehavior = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.LiveAudioVisualBehavior, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.LiveAudioVisualBehavior.displayName = 'proto.bosdyn.api.LiveAudioVisualBehavior';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.RunBehaviorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.RunBehaviorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.RunBehaviorRequest.displayName = 'proto.bosdyn.api.RunBehaviorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.RunBehaviorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.RunBehaviorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.RunBehaviorResponse.displayName = 'proto.bosdyn.api.RunBehaviorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.StopBehaviorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.StopBehaviorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.StopBehaviorRequest.displayName = 'proto.bosdyn.api.StopBehaviorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.StopBehaviorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.StopBehaviorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.StopBehaviorResponse.displayName = 'proto.bosdyn.api.StopBehaviorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.AddOrModifyBehaviorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.AddOrModifyBehaviorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.AddOrModifyBehaviorRequest.displayName = 'proto.bosdyn.api.AddOrModifyBehaviorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.AddOrModifyBehaviorResponse.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.AddOrModifyBehaviorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.AddOrModifyBehaviorResponse.displayName = 'proto.bosdyn.api.AddOrModifyBehaviorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.DeleteBehaviorsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.DeleteBehaviorsRequest.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.DeleteBehaviorsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.DeleteBehaviorsRequest.displayName = 'proto.bosdyn.api.DeleteBehaviorsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.DeleteBehaviorsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.DeleteBehaviorsResponse.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.DeleteBehaviorsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.DeleteBehaviorsResponse.displayName = 'proto.bosdyn.api.DeleteBehaviorsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.ListBehaviorsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.ListBehaviorsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ListBehaviorsRequest.displayName = 'proto.bosdyn.api.ListBehaviorsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.ListBehaviorsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.ListBehaviorsResponse.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.ListBehaviorsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.ListBehaviorsResponse.displayName = 'proto.bosdyn.api.ListBehaviorsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.PresetColorAssociation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.PresetColorAssociation.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.PresetColorAssociation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.PresetColorAssociation.displayName = 'proto.bosdyn.api.PresetColorAssociation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.AudioVisualSystemParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.AudioVisualSystemParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.AudioVisualSystemParams.displayName = 'proto.bosdyn.api.AudioVisualSystemParams';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.GetSystemParamsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.GetSystemParamsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.GetSystemParamsRequest.displayName = 'proto.bosdyn.api.GetSystemParamsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.GetSystemParamsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.GetSystemParamsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.GetSystemParamsResponse.displayName = 'proto.bosdyn.api.GetSystemParamsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.SetSystemParamsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.SetSystemParamsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SetSystemParamsRequest.displayName = 'proto.bosdyn.api.SetSystemParamsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.SetSystemParamsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.SetSystemParamsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.SetSystemParamsResponse.displayName = 'proto.bosdyn.api.SetSystemParamsResponse';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.Color.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.bosdyn.api.Color.ColorTypeCase = {
  COLOR_TYPE_NOT_SET: 0,
  PRESET: 1,
  RGB: 2
};

/**
 * @return {proto.bosdyn.api.Color.ColorTypeCase}
 */
proto.bosdyn.api.Color.prototype.getColorTypeCase = function() {
  return /** @type {proto.bosdyn.api.Color.ColorTypeCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.Color.oneofGroups_[0]));
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
proto.bosdyn.api.Color.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.Color.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.Color} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.Color.toObject = function(includeInstance, msg) {
  var f, obj = {
    preset: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rgb: (f = msg.getRgb()) && proto.bosdyn.api.Color.RGB.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.Color}
 */
proto.bosdyn.api.Color.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.Color;
  return proto.bosdyn.api.Color.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.Color} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.Color}
 */
proto.bosdyn.api.Color.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.Color.Preset} */ (reader.readEnum());
      msg.setPreset(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.Color.RGB;
      reader.readMessage(value,proto.bosdyn.api.Color.RGB.deserializeBinaryFromReader);
      msg.setRgb(value);
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
proto.bosdyn.api.Color.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.Color.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.Color} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.Color.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.bosdyn.api.Color.Preset} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getRgb();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.Color.RGB.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.Color.Preset = {
  PRESET_UNKNOWN: 0,
  PRESET_NORMAL: 1,
  PRESET_WARNING: 2,
  PRESET_DANGER: 3
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
proto.bosdyn.api.Color.RGB.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.Color.RGB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.Color.RGB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.Color.RGB.toObject = function(includeInstance, msg) {
  var f, obj = {
    r: jspb.Message.getFieldWithDefault(msg, 1, 0),
    g: jspb.Message.getFieldWithDefault(msg, 2, 0),
    b: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.Color.RGB}
 */
proto.bosdyn.api.Color.RGB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.Color.RGB;
  return proto.bosdyn.api.Color.RGB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.Color.RGB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.Color.RGB}
 */
proto.bosdyn.api.Color.RGB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setR(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setG(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setB(value);
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
proto.bosdyn.api.Color.RGB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.Color.RGB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.Color.RGB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.Color.RGB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getR();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getG();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getB();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 r = 1;
 * @return {number}
 */
proto.bosdyn.api.Color.RGB.prototype.getR = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.Color.RGB} returns this
 */
proto.bosdyn.api.Color.RGB.prototype.setR = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 g = 2;
 * @return {number}
 */
proto.bosdyn.api.Color.RGB.prototype.getG = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.Color.RGB} returns this
 */
proto.bosdyn.api.Color.RGB.prototype.setG = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 b = 3;
 * @return {number}
 */
proto.bosdyn.api.Color.RGB.prototype.getB = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.Color.RGB} returns this
 */
proto.bosdyn.api.Color.RGB.prototype.setB = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Preset preset = 1;
 * @return {!proto.bosdyn.api.Color.Preset}
 */
proto.bosdyn.api.Color.prototype.getPreset = function() {
  return /** @type {!proto.bosdyn.api.Color.Preset} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.Color.Preset} value
 * @return {!proto.bosdyn.api.Color} returns this
 */
proto.bosdyn.api.Color.prototype.setPreset = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.bosdyn.api.Color.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bosdyn.api.Color} returns this
 */
proto.bosdyn.api.Color.prototype.clearPreset = function() {
  return jspb.Message.setOneofField(this, 1, proto.bosdyn.api.Color.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.Color.prototype.hasPreset = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RGB rgb = 2;
 * @return {?proto.bosdyn.api.Color.RGB}
 */
proto.bosdyn.api.Color.prototype.getRgb = function() {
  return /** @type{?proto.bosdyn.api.Color.RGB} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Color.RGB, 2));
};


/**
 * @param {?proto.bosdyn.api.Color.RGB|undefined} value
 * @return {!proto.bosdyn.api.Color} returns this
*/
proto.bosdyn.api.Color.prototype.setRgb = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bosdyn.api.Color.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.Color} returns this
 */
proto.bosdyn.api.Color.prototype.clearRgb = function() {
  return this.setRgb(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.Color.prototype.hasRgb = function() {
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
proto.bosdyn.api.LedSequenceGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.LedSequenceGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.LedSequenceGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    frontCenter: (f = msg.getFrontCenter()) && proto.bosdyn.api.LedSequenceGroup.LedSequence.toObject(includeInstance, f),
    frontLeft: (f = msg.getFrontLeft()) && proto.bosdyn.api.LedSequenceGroup.LedSequence.toObject(includeInstance, f),
    frontRight: (f = msg.getFrontRight()) && proto.bosdyn.api.LedSequenceGroup.LedSequence.toObject(includeInstance, f),
    hindLeft: (f = msg.getHindLeft()) && proto.bosdyn.api.LedSequenceGroup.LedSequence.toObject(includeInstance, f),
    hindRight: (f = msg.getHindRight()) && proto.bosdyn.api.LedSequenceGroup.LedSequence.toObject(includeInstance, f),
    spotCam: (f = msg.getSpotCam()) && proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.toObject(includeInstance, f),
    statusLights: (f = msg.getStatusLights()) && proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.LedSequenceGroup}
 */
proto.bosdyn.api.LedSequenceGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.LedSequenceGroup;
  return proto.bosdyn.api.LedSequenceGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.LedSequenceGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.LedSequenceGroup}
 */
proto.bosdyn.api.LedSequenceGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.LedSequenceGroup.LedSequence;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.LedSequence.deserializeBinaryFromReader);
      msg.setFrontCenter(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.LedSequenceGroup.LedSequence;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.LedSequence.deserializeBinaryFromReader);
      msg.setFrontLeft(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.LedSequenceGroup.LedSequence;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.LedSequence.deserializeBinaryFromReader);
      msg.setFrontRight(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.LedSequenceGroup.LedSequence;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.LedSequence.deserializeBinaryFromReader);
      msg.setHindLeft(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.LedSequenceGroup.LedSequence;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.LedSequence.deserializeBinaryFromReader);
      msg.setHindRight(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.LedSequenceGroup.SpotCamSequence;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.deserializeBinaryFromReader);
      msg.setSpotCam(value);
      break;
    case 7:
      var value = new proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.deserializeBinaryFromReader);
      msg.setStatusLights(value);
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
proto.bosdyn.api.LedSequenceGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.LedSequenceGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.LedSequenceGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrontCenter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.LedSequenceGroup.LedSequence.serializeBinaryToWriter
    );
  }
  f = message.getFrontLeft();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.LedSequenceGroup.LedSequence.serializeBinaryToWriter
    );
  }
  f = message.getFrontRight();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.LedSequenceGroup.LedSequence.serializeBinaryToWriter
    );
  }
  f = message.getHindLeft();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.LedSequenceGroup.LedSequence.serializeBinaryToWriter
    );
  }
  f = message.getHindRight();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.LedSequenceGroup.LedSequence.serializeBinaryToWriter
    );
  }
  f = message.getSpotCam();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.serializeBinaryToWriter
    );
  }
  f = message.getStatusLights();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.LedSequenceGroup.InterpolationMode = {
  INTERPOLATION_UNKNOWN: 0,
  INTERPOLATION_NONE: 1,
  INTERPOLATION_LINEAR: 2
};


/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SequenceTypeCase = {
  SEQUENCE_TYPE_NOT_SET: 0,
  ANIMATION_SEQUENCE: 1,
  BLINK_SEQUENCE: 2,
  PULSE_SEQUENCE: 3,
  SYNCED_BLINK_SEQUENCE: 4,
  SOLID_COLOR_SEQUENCE: 5
};

/**
 * @return {proto.bosdyn.api.LedSequenceGroup.LedSequence.SequenceTypeCase}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.getSequenceTypeCase = function() {
  return /** @type {proto.bosdyn.api.LedSequenceGroup.LedSequence.SequenceTypeCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.LedSequenceGroup.LedSequence.oneofGroups_[0]));
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
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.LedSequenceGroup.LedSequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.toObject = function(includeInstance, msg) {
  var f, obj = {
    animationSequence: (f = msg.getAnimationSequence()) && proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.toObject(includeInstance, f),
    blinkSequence: (f = msg.getBlinkSequence()) && proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.toObject(includeInstance, f),
    pulseSequence: (f = msg.getPulseSequence()) && proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.toObject(includeInstance, f),
    syncedBlinkSequence: (f = msg.getSyncedBlinkSequence()) && proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.toObject(includeInstance, f),
    solidColorSequence: (f = msg.getSolidColorSequence()) && proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.LedSequenceGroup.LedSequence;
  return proto.bosdyn.api.LedSequenceGroup.LedSequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.deserializeBinaryFromReader);
      msg.setAnimationSequence(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.deserializeBinaryFromReader);
      msg.setBlinkSequence(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.deserializeBinaryFromReader);
      msg.setPulseSequence(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.deserializeBinaryFromReader);
      msg.setSyncedBlinkSequence(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence.deserializeBinaryFromReader);
      msg.setSolidColorSequence(value);
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
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.LedSequenceGroup.LedSequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnimationSequence();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.serializeBinaryToWriter
    );
  }
  f = message.getBlinkSequence();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.serializeBinaryToWriter
    );
  }
  f = message.getPulseSequence();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.serializeBinaryToWriter
    );
  }
  f = message.getSyncedBlinkSequence();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.serializeBinaryToWriter
    );
  }
  f = message.getSolidColorSequence();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.toObject = function(includeInstance, msg) {
  var f, obj = {
    framesList: jspb.Message.toObjectList(msg.getFramesList(),
    proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence;
  return proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.deserializeBinaryFromReader);
      msg.addFrames(value);
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
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFramesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.serializeBinaryToWriter
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
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.toObject = function(includeInstance, msg) {
  var f, obj = {
    color: (f = msg.getColor()) && proto.bosdyn.api.Color.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    interpolation: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame;
  return proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new proto.bosdyn.api.Color;
      reader.readMessage(value,proto.bosdyn.api.Color.deserializeBinaryFromReader);
      msg.setColor(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 3:
      var value = /** @type {!proto.bosdyn.api.LedSequenceGroup.InterpolationMode} */ (reader.readEnum());
      msg.setInterpolation(value);
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
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColor();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.Color.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getInterpolation();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional Color color = 4;
 * @return {?proto.bosdyn.api.Color}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.prototype.getColor = function() {
  return /** @type{?proto.bosdyn.api.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Color, 4));
};


/**
 * @param {?proto.bosdyn.api.Color|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame} returns this
*/
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.prototype.setColor = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame} returns this
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.prototype.hasColor = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration duration = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame} returns this
*/
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame} returns this
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional InterpolationMode interpolation = 3;
 * @return {!proto.bosdyn.api.LedSequenceGroup.InterpolationMode}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.prototype.getInterpolation = function() {
  return /** @type {!proto.bosdyn.api.LedSequenceGroup.InterpolationMode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bosdyn.api.LedSequenceGroup.InterpolationMode} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame} returns this
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame.prototype.setInterpolation = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated Frame frames = 1;
 * @return {!Array<!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame>}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.prototype.getFramesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame, 1));
};


/**
 * @param {!Array<!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame>} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.prototype.setFramesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.prototype.addFrames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.Frame, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence.prototype.clearFramesList = function() {
  return this.setFramesList([]);
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
proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.toObject = function(includeInstance, msg) {
  var f, obj = {
    color: (f = msg.getColor()) && proto.bosdyn.api.Color.toObject(includeInstance, f),
    period: (f = msg.getPeriod()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    dutyCycle: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence;
  return proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new proto.bosdyn.api.Color;
      reader.readMessage(value,proto.bosdyn.api.Color.deserializeBinaryFromReader);
      msg.setColor(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setPeriod(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDutyCycle(value);
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
proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColor();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.Color.serializeBinaryToWriter
    );
  }
  f = message.getPeriod();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getDutyCycle();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional Color color = 4;
 * @return {?proto.bosdyn.api.Color}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.prototype.getColor = function() {
  return /** @type{?proto.bosdyn.api.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Color, 4));
};


/**
 * @param {?proto.bosdyn.api.Color|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.prototype.setColor = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.prototype.hasColor = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration period = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.prototype.getPeriod = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.prototype.setPeriod = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.prototype.clearPeriod = function() {
  return this.setPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.prototype.hasPeriod = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float duty_cycle = 3;
 * @return {number}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.prototype.getDutyCycle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence.prototype.setDutyCycle = function(value) {
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
proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.toObject = function(includeInstance, msg) {
  var f, obj = {
    color: (f = msg.getColor()) && proto.bosdyn.api.Color.toObject(includeInstance, f),
    period: (f = msg.getPeriod()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence;
  return proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.bosdyn.api.Color;
      reader.readMessage(value,proto.bosdyn.api.Color.deserializeBinaryFromReader);
      msg.setColor(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setPeriod(value);
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
proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.Color.serializeBinaryToWriter
    );
  }
  f = message.getPeriod();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional Color color = 3;
 * @return {?proto.bosdyn.api.Color}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.prototype.getColor = function() {
  return /** @type{?proto.bosdyn.api.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Color, 3));
};


/**
 * @param {?proto.bosdyn.api.Color|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.prototype.setColor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.prototype.hasColor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration period = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.prototype.getPeriod = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.prototype.setPeriod = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.prototype.clearPeriod = function() {
  return this.setPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence.prototype.hasPeriod = function() {
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
proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.toObject = function(includeInstance, msg) {
  var f, obj = {
    color: (f = msg.getColor()) && proto.bosdyn.api.Color.toObject(includeInstance, f),
    period: (f = msg.getPeriod()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence;
  return proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.bosdyn.api.Color;
      reader.readMessage(value,proto.bosdyn.api.Color.deserializeBinaryFromReader);
      msg.setColor(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setPeriod(value);
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
proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.Color.serializeBinaryToWriter
    );
  }
  f = message.getPeriod();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional Color color = 3;
 * @return {?proto.bosdyn.api.Color}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.prototype.getColor = function() {
  return /** @type{?proto.bosdyn.api.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Color, 3));
};


/**
 * @param {?proto.bosdyn.api.Color|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.prototype.setColor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.prototype.hasColor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration period = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.prototype.getPeriod = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.prototype.setPeriod = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.prototype.clearPeriod = function() {
  return this.setPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence.prototype.hasPeriod = function() {
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
proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence.toObject = function(includeInstance, msg) {
  var f, obj = {
    color: (f = msg.getColor()) && proto.bosdyn.api.Color.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence;
  return proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.bosdyn.api.Color;
      reader.readMessage(value,proto.bosdyn.api.Color.deserializeBinaryFromReader);
      msg.setColor(value);
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
proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.Color.serializeBinaryToWriter
    );
  }
};


/**
 * optional Color color = 2;
 * @return {?proto.bosdyn.api.Color}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence.prototype.getColor = function() {
  return /** @type{?proto.bosdyn.api.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Color, 2));
};


/**
 * @param {?proto.bosdyn.api.Color|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence.prototype.setColor = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence.prototype.hasColor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AnimationSequence animation_sequence = 1;
 * @return {?proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.getAnimationSequence = function() {
  return /** @type{?proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence, 1));
};


/**
 * @param {?proto.bosdyn.api.LedSequenceGroup.LedSequence.AnimationSequence|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.setAnimationSequence = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bosdyn.api.LedSequenceGroup.LedSequence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.clearAnimationSequence = function() {
  return this.setAnimationSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.hasAnimationSequence = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BlinkSequence blink_sequence = 2;
 * @return {?proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.getBlinkSequence = function() {
  return /** @type{?proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence, 2));
};


/**
 * @param {?proto.bosdyn.api.LedSequenceGroup.LedSequence.BlinkSequence|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.setBlinkSequence = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bosdyn.api.LedSequenceGroup.LedSequence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.clearBlinkSequence = function() {
  return this.setBlinkSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.hasBlinkSequence = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PulseSequence pulse_sequence = 3;
 * @return {?proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.getPulseSequence = function() {
  return /** @type{?proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence, 3));
};


/**
 * @param {?proto.bosdyn.api.LedSequenceGroup.LedSequence.PulseSequence|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.setPulseSequence = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bosdyn.api.LedSequenceGroup.LedSequence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.clearPulseSequence = function() {
  return this.setPulseSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.hasPulseSequence = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SyncedBlinkSequence synced_blink_sequence = 4;
 * @return {?proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.getSyncedBlinkSequence = function() {
  return /** @type{?proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence, 4));
};


/**
 * @param {?proto.bosdyn.api.LedSequenceGroup.LedSequence.SyncedBlinkSequence|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.setSyncedBlinkSequence = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bosdyn.api.LedSequenceGroup.LedSequence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.clearSyncedBlinkSequence = function() {
  return this.setSyncedBlinkSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.hasSyncedBlinkSequence = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SolidColorSequence solid_color_sequence = 5;
 * @return {?proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.getSolidColorSequence = function() {
  return /** @type{?proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence, 5));
};


/**
 * @param {?proto.bosdyn.api.LedSequenceGroup.LedSequence.SolidColorSequence|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.setSolidColorSequence = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.bosdyn.api.LedSequenceGroup.LedSequence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.LedSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.clearSolidColorSequence = function() {
  return this.setSolidColorSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.LedSequence.prototype.hasSolidColorSequence = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.SequenceTypeCase = {
  SEQUENCE_TYPE_NOT_SET: 0,
  ANIMATION_SEQUENCE: 1,
  BLINK_SEQUENCE: 2,
  BREATHE_SEQUENCE: 3,
  FIXED_BRIGHTNESS_SEQUENCE: 4
};

/**
 * @return {proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.SequenceTypeCase}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.getSequenceTypeCase = function() {
  return /** @type {proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.SequenceTypeCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.oneofGroups_[0]));
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
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.toObject = function(includeInstance, msg) {
  var f, obj = {
    animationSequence: (f = msg.getAnimationSequence()) && proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.toObject(includeInstance, f),
    blinkSequence: (f = msg.getBlinkSequence()) && proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.toObject(includeInstance, f),
    breatheSequence: (f = msg.getBreatheSequence()) && proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.toObject(includeInstance, f),
    fixedBrightnessSequence: (f = msg.getFixedBrightnessSequence()) && proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.LedSequenceGroup.SpotCamSequence;
  return proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.deserializeBinaryFromReader);
      msg.setAnimationSequence(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.deserializeBinaryFromReader);
      msg.setBlinkSequence(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.deserializeBinaryFromReader);
      msg.setBreatheSequence(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence.deserializeBinaryFromReader);
      msg.setFixedBrightnessSequence(value);
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
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnimationSequence();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.serializeBinaryToWriter
    );
  }
  f = message.getBlinkSequence();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.serializeBinaryToWriter
    );
  }
  f = message.getBreatheSequence();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.serializeBinaryToWriter
    );
  }
  f = message.getFixedBrightnessSequence();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.toObject = function(includeInstance, msg) {
  var f, obj = {
    framesList: jspb.Message.toObjectList(msg.getFramesList(),
    proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence;
  return proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame.deserializeBinaryFromReader);
      msg.addFrames(value);
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
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFramesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame.serializeBinaryToWriter
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
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame;
  return proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame.prototype.getBrightnessesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame} returns this
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame.prototype.clearBrightnessesMap = function() {
  this.getBrightnessesMap().clear();
  return this;};


/**
 * repeated Frame frames = 1;
 * @return {!Array<!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame>}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.prototype.getFramesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame, 1));
};


/**
 * @param {!Array<!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame>} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.prototype.setFramesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.prototype.addFrames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.Frame, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence.prototype.clearFramesList = function() {
  return this.setFramesList([]);
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
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.toObject = function(includeInstance, msg) {
  var f, obj = {
    brightness: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    period: (f = msg.getPeriod()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    dutyCycle: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence;
  return proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBrightness(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setPeriod(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDutyCycle(value);
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
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBrightness();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getPeriod();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getDutyCycle();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float brightness = 1;
 * @return {number}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.prototype.getBrightness = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.prototype.setBrightness = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional google.protobuf.Duration period = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.prototype.getPeriod = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.prototype.setPeriod = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.prototype.clearPeriod = function() {
  return this.setPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.prototype.hasPeriod = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float duty_cycle = 3;
 * @return {number}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.prototype.getDutyCycle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence.prototype.setDutyCycle = function(value) {
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
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.toObject = function(includeInstance, msg) {
  var f, obj = {
    brightness: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    period: (f = msg.getPeriod()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence;
  return proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBrightness(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setPeriod(value);
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
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBrightness();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getPeriod();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional float brightness = 1;
 * @return {number}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.prototype.getBrightness = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.prototype.setBrightness = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional google.protobuf.Duration period = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.prototype.getPeriod = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.prototype.setPeriod = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.prototype.clearPeriod = function() {
  return this.setPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence.prototype.hasPeriod = function() {
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
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence;
  return proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence.prototype.getBrightnessesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence.prototype.clearBrightnessesMap = function() {
  this.getBrightnessesMap().clear();
  return this;};


/**
 * optional AnimationSequence animation_sequence = 1;
 * @return {?proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.getAnimationSequence = function() {
  return /** @type{?proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence, 1));
};


/**
 * @param {?proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.AnimationSequence|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.setAnimationSequence = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.clearAnimationSequence = function() {
  return this.setAnimationSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.hasAnimationSequence = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BlinkSequence blink_sequence = 2;
 * @return {?proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.getBlinkSequence = function() {
  return /** @type{?proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence, 2));
};


/**
 * @param {?proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BlinkSequence|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.setBlinkSequence = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.clearBlinkSequence = function() {
  return this.setBlinkSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.hasBlinkSequence = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BreatheSequence breathe_sequence = 3;
 * @return {?proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.getBreatheSequence = function() {
  return /** @type{?proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence, 3));
};


/**
 * @param {?proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.BreatheSequence|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.setBreatheSequence = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.clearBreatheSequence = function() {
  return this.setBreatheSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.hasBreatheSequence = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional FixedBrightnessSequence fixed_brightness_sequence = 4;
 * @return {?proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.getFixedBrightnessSequence = function() {
  return /** @type{?proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence, 4));
};


/**
 * @param {?proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.FixedBrightnessSequence|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.setFixedBrightnessSequence = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.SpotCamSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.clearFixedBrightnessSequence = function() {
  return this.setFixedBrightnessSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.SpotCamSequence.prototype.hasFixedBrightnessSequence = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.toObject = function(includeInstance, msg) {
  var f, obj = {
    framesList: jspb.Message.toObjectList(msg.getFramesList(),
    proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.toObject, includeInstance),
    interpolation: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence;
  return proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.deserializeBinaryFromReader);
      msg.addFrames(value);
      break;
    case 2:
      var value = /** @type {!proto.bosdyn.api.LedSequenceGroup.InterpolationMode} */ (reader.readEnum());
      msg.setInterpolation(value);
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
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFramesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.serializeBinaryToWriter
    );
  }
  f = message.getInterpolation();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
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
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.toObject = function(includeInstance, msg) {
  var f, obj = {
    topLeft: (f = msg.getTopLeft()) && proto.bosdyn.api.Color.toObject(includeInstance, f),
    upperMidLeft: (f = msg.getUpperMidLeft()) && proto.bosdyn.api.Color.toObject(includeInstance, f),
    lowerMidLeft: (f = msg.getLowerMidLeft()) && proto.bosdyn.api.Color.toObject(includeInstance, f),
    bottomLeft: (f = msg.getBottomLeft()) && proto.bosdyn.api.Color.toObject(includeInstance, f),
    topRight: (f = msg.getTopRight()) && proto.bosdyn.api.Color.toObject(includeInstance, f),
    upperMidRight: (f = msg.getUpperMidRight()) && proto.bosdyn.api.Color.toObject(includeInstance, f),
    lowerMidRight: (f = msg.getLowerMidRight()) && proto.bosdyn.api.Color.toObject(includeInstance, f),
    bottomRight: (f = msg.getBottomRight()) && proto.bosdyn.api.Color.toObject(includeInstance, f),
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
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame;
  return proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.Color;
      reader.readMessage(value,proto.bosdyn.api.Color.deserializeBinaryFromReader);
      msg.setTopLeft(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.Color;
      reader.readMessage(value,proto.bosdyn.api.Color.deserializeBinaryFromReader);
      msg.setUpperMidLeft(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.Color;
      reader.readMessage(value,proto.bosdyn.api.Color.deserializeBinaryFromReader);
      msg.setLowerMidLeft(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.Color;
      reader.readMessage(value,proto.bosdyn.api.Color.deserializeBinaryFromReader);
      msg.setBottomLeft(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.Color;
      reader.readMessage(value,proto.bosdyn.api.Color.deserializeBinaryFromReader);
      msg.setTopRight(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.Color;
      reader.readMessage(value,proto.bosdyn.api.Color.deserializeBinaryFromReader);
      msg.setUpperMidRight(value);
      break;
    case 7:
      var value = new proto.bosdyn.api.Color;
      reader.readMessage(value,proto.bosdyn.api.Color.deserializeBinaryFromReader);
      msg.setLowerMidRight(value);
      break;
    case 8:
      var value = new proto.bosdyn.api.Color;
      reader.readMessage(value,proto.bosdyn.api.Color.deserializeBinaryFromReader);
      msg.setBottomRight(value);
      break;
    case 9:
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
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopLeft();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.Color.serializeBinaryToWriter
    );
  }
  f = message.getUpperMidLeft();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.Color.serializeBinaryToWriter
    );
  }
  f = message.getLowerMidLeft();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.Color.serializeBinaryToWriter
    );
  }
  f = message.getBottomLeft();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.Color.serializeBinaryToWriter
    );
  }
  f = message.getTopRight();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.Color.serializeBinaryToWriter
    );
  }
  f = message.getUpperMidRight();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bosdyn.api.Color.serializeBinaryToWriter
    );
  }
  f = message.getLowerMidRight();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bosdyn.api.Color.serializeBinaryToWriter
    );
  }
  f = message.getBottomRight();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bosdyn.api.Color.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional Color top_left = 1;
 * @return {?proto.bosdyn.api.Color}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.getTopLeft = function() {
  return /** @type{?proto.bosdyn.api.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Color, 1));
};


/**
 * @param {?proto.bosdyn.api.Color|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
*/
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.setTopLeft = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.clearTopLeft = function() {
  return this.setTopLeft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.hasTopLeft = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Color upper_mid_left = 2;
 * @return {?proto.bosdyn.api.Color}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.getUpperMidLeft = function() {
  return /** @type{?proto.bosdyn.api.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Color, 2));
};


/**
 * @param {?proto.bosdyn.api.Color|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
*/
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.setUpperMidLeft = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.clearUpperMidLeft = function() {
  return this.setUpperMidLeft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.hasUpperMidLeft = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Color lower_mid_left = 3;
 * @return {?proto.bosdyn.api.Color}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.getLowerMidLeft = function() {
  return /** @type{?proto.bosdyn.api.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Color, 3));
};


/**
 * @param {?proto.bosdyn.api.Color|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
*/
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.setLowerMidLeft = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.clearLowerMidLeft = function() {
  return this.setLowerMidLeft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.hasLowerMidLeft = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Color bottom_left = 4;
 * @return {?proto.bosdyn.api.Color}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.getBottomLeft = function() {
  return /** @type{?proto.bosdyn.api.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Color, 4));
};


/**
 * @param {?proto.bosdyn.api.Color|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
*/
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.setBottomLeft = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.clearBottomLeft = function() {
  return this.setBottomLeft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.hasBottomLeft = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Color top_right = 5;
 * @return {?proto.bosdyn.api.Color}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.getTopRight = function() {
  return /** @type{?proto.bosdyn.api.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Color, 5));
};


/**
 * @param {?proto.bosdyn.api.Color|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
*/
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.setTopRight = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.clearTopRight = function() {
  return this.setTopRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.hasTopRight = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Color upper_mid_right = 6;
 * @return {?proto.bosdyn.api.Color}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.getUpperMidRight = function() {
  return /** @type{?proto.bosdyn.api.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Color, 6));
};


/**
 * @param {?proto.bosdyn.api.Color|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
*/
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.setUpperMidRight = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.clearUpperMidRight = function() {
  return this.setUpperMidRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.hasUpperMidRight = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Color lower_mid_right = 7;
 * @return {?proto.bosdyn.api.Color}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.getLowerMidRight = function() {
  return /** @type{?proto.bosdyn.api.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Color, 7));
};


/**
 * @param {?proto.bosdyn.api.Color|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
*/
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.setLowerMidRight = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.clearLowerMidRight = function() {
  return this.setLowerMidRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.hasLowerMidRight = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Color bottom_right = 8;
 * @return {?proto.bosdyn.api.Color}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.getBottomRight = function() {
  return /** @type{?proto.bosdyn.api.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Color, 8));
};


/**
 * @param {?proto.bosdyn.api.Color|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
*/
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.setBottomRight = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.clearBottomRight = function() {
  return this.setBottomRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.hasBottomRight = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Duration duration = 9;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 9));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
*/
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame} returns this
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated Frame frames = 1;
 * @return {!Array<!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame>}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.prototype.getFramesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame, 1));
};


/**
 * @param {!Array<!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame>} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence} returns this
*/
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.prototype.setFramesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.prototype.addFrames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.Frame, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.prototype.clearFramesList = function() {
  return this.setFramesList([]);
};


/**
 * optional InterpolationMode interpolation = 2;
 * @return {!proto.bosdyn.api.LedSequenceGroup.InterpolationMode}
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.prototype.getInterpolation = function() {
  return /** @type {!proto.bosdyn.api.LedSequenceGroup.InterpolationMode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.LedSequenceGroup.InterpolationMode} value
 * @return {!proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence} returns this
 */
proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence.prototype.setInterpolation = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional LedSequence front_center = 1;
 * @return {?proto.bosdyn.api.LedSequenceGroup.LedSequence}
 */
proto.bosdyn.api.LedSequenceGroup.prototype.getFrontCenter = function() {
  return /** @type{?proto.bosdyn.api.LedSequenceGroup.LedSequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LedSequenceGroup.LedSequence, 1));
};


/**
 * @param {?proto.bosdyn.api.LedSequenceGroup.LedSequence|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup} returns this
*/
proto.bosdyn.api.LedSequenceGroup.prototype.setFrontCenter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup} returns this
 */
proto.bosdyn.api.LedSequenceGroup.prototype.clearFrontCenter = function() {
  return this.setFrontCenter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.prototype.hasFrontCenter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LedSequence front_left = 2;
 * @return {?proto.bosdyn.api.LedSequenceGroup.LedSequence}
 */
proto.bosdyn.api.LedSequenceGroup.prototype.getFrontLeft = function() {
  return /** @type{?proto.bosdyn.api.LedSequenceGroup.LedSequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LedSequenceGroup.LedSequence, 2));
};


/**
 * @param {?proto.bosdyn.api.LedSequenceGroup.LedSequence|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup} returns this
*/
proto.bosdyn.api.LedSequenceGroup.prototype.setFrontLeft = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup} returns this
 */
proto.bosdyn.api.LedSequenceGroup.prototype.clearFrontLeft = function() {
  return this.setFrontLeft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.prototype.hasFrontLeft = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LedSequence front_right = 3;
 * @return {?proto.bosdyn.api.LedSequenceGroup.LedSequence}
 */
proto.bosdyn.api.LedSequenceGroup.prototype.getFrontRight = function() {
  return /** @type{?proto.bosdyn.api.LedSequenceGroup.LedSequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LedSequenceGroup.LedSequence, 3));
};


/**
 * @param {?proto.bosdyn.api.LedSequenceGroup.LedSequence|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup} returns this
*/
proto.bosdyn.api.LedSequenceGroup.prototype.setFrontRight = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup} returns this
 */
proto.bosdyn.api.LedSequenceGroup.prototype.clearFrontRight = function() {
  return this.setFrontRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.prototype.hasFrontRight = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional LedSequence hind_left = 4;
 * @return {?proto.bosdyn.api.LedSequenceGroup.LedSequence}
 */
proto.bosdyn.api.LedSequenceGroup.prototype.getHindLeft = function() {
  return /** @type{?proto.bosdyn.api.LedSequenceGroup.LedSequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LedSequenceGroup.LedSequence, 4));
};


/**
 * @param {?proto.bosdyn.api.LedSequenceGroup.LedSequence|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup} returns this
*/
proto.bosdyn.api.LedSequenceGroup.prototype.setHindLeft = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup} returns this
 */
proto.bosdyn.api.LedSequenceGroup.prototype.clearHindLeft = function() {
  return this.setHindLeft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.prototype.hasHindLeft = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LedSequence hind_right = 5;
 * @return {?proto.bosdyn.api.LedSequenceGroup.LedSequence}
 */
proto.bosdyn.api.LedSequenceGroup.prototype.getHindRight = function() {
  return /** @type{?proto.bosdyn.api.LedSequenceGroup.LedSequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LedSequenceGroup.LedSequence, 5));
};


/**
 * @param {?proto.bosdyn.api.LedSequenceGroup.LedSequence|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup} returns this
*/
proto.bosdyn.api.LedSequenceGroup.prototype.setHindRight = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup} returns this
 */
proto.bosdyn.api.LedSequenceGroup.prototype.clearHindRight = function() {
  return this.setHindRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.prototype.hasHindRight = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SpotCamSequence spot_cam = 6;
 * @return {?proto.bosdyn.api.LedSequenceGroup.SpotCamSequence}
 */
proto.bosdyn.api.LedSequenceGroup.prototype.getSpotCam = function() {
  return /** @type{?proto.bosdyn.api.LedSequenceGroup.SpotCamSequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LedSequenceGroup.SpotCamSequence, 6));
};


/**
 * @param {?proto.bosdyn.api.LedSequenceGroup.SpotCamSequence|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup} returns this
*/
proto.bosdyn.api.LedSequenceGroup.prototype.setSpotCam = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup} returns this
 */
proto.bosdyn.api.LedSequenceGroup.prototype.clearSpotCam = function() {
  return this.setSpotCam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.prototype.hasSpotCam = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional StatusLightsSequence status_lights = 7;
 * @return {?proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence}
 */
proto.bosdyn.api.LedSequenceGroup.prototype.getStatusLights = function() {
  return /** @type{?proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence, 7));
};


/**
 * @param {?proto.bosdyn.api.LedSequenceGroup.StatusLightsSequence|undefined} value
 * @return {!proto.bosdyn.api.LedSequenceGroup} returns this
*/
proto.bosdyn.api.LedSequenceGroup.prototype.setStatusLights = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LedSequenceGroup} returns this
 */
proto.bosdyn.api.LedSequenceGroup.prototype.clearStatusLights = function() {
  return this.setStatusLights(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LedSequenceGroup.prototype.hasStatusLights = function() {
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
proto.bosdyn.api.AudioSequenceGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.AudioSequenceGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.AudioSequenceGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.AudioSequenceGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    buzzer: (f = msg.getBuzzer()) && proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.AudioSequenceGroup}
 */
proto.bosdyn.api.AudioSequenceGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.AudioSequenceGroup;
  return proto.bosdyn.api.AudioSequenceGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.AudioSequenceGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.AudioSequenceGroup}
 */
proto.bosdyn.api.AudioSequenceGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence;
      reader.readMessage(value,proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.deserializeBinaryFromReader);
      msg.setBuzzer(value);
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
proto.bosdyn.api.AudioSequenceGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.AudioSequenceGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.AudioSequenceGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.AudioSequenceGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuzzer();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.toObject = function(includeInstance, msg) {
  var f, obj = {
    notesList: jspb.Message.toObjectList(msg.getNotesList(),
    proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence}
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence;
  return proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence}
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration;
      reader.readMessage(value,proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.deserializeBinaryFromReader);
      msg.addNotes(value);
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
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.serializeBinaryToWriter
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
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.toObject = function(includeInstance, msg) {
  var f, obj = {
    note: (f = msg.getNote()) && bosdyn_api_spot_choreography_params_pb.BuzzerNoteParams.toObject(includeInstance, f),
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
 * @return {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration}
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration;
  return proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration}
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_spot_choreography_params_pb.BuzzerNoteParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.BuzzerNoteParams.deserializeBinaryFromReader);
      msg.setNote(value);
      break;
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
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNote();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_spot_choreography_params_pb.BuzzerNoteParams.serializeBinaryToWriter
    );
  }
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
 * optional spot.BuzzerNoteParams note = 1;
 * @return {?proto.bosdyn.api.spot.BuzzerNoteParams}
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.prototype.getNote = function() {
  return /** @type{?proto.bosdyn.api.spot.BuzzerNoteParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.BuzzerNoteParams, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.BuzzerNoteParams|undefined} value
 * @return {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration} returns this
*/
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.prototype.setNote = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration} returns this
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.prototype.clearNote = function() {
  return this.setNote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.prototype.hasNote = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration duration = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration} returns this
*/
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration} returns this
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated NoteWithDuration notes = 1;
 * @return {!Array<!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration>}
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.prototype.getNotesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration, 1));
};


/**
 * @param {!Array<!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration>} value
 * @return {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence} returns this
*/
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.prototype.setNotesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration}
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.prototype.addNotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.NoteWithDuration, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence} returns this
 */
proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence.prototype.clearNotesList = function() {
  return this.setNotesList([]);
};


/**
 * optional BuzzerSequence buzzer = 1;
 * @return {?proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence}
 */
proto.bosdyn.api.AudioSequenceGroup.prototype.getBuzzer = function() {
  return /** @type{?proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence, 1));
};


/**
 * @param {?proto.bosdyn.api.AudioSequenceGroup.BuzzerSequence|undefined} value
 * @return {!proto.bosdyn.api.AudioSequenceGroup} returns this
*/
proto.bosdyn.api.AudioSequenceGroup.prototype.setBuzzer = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.AudioSequenceGroup} returns this
 */
proto.bosdyn.api.AudioSequenceGroup.prototype.clearBuzzer = function() {
  return this.setBuzzer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.AudioSequenceGroup.prototype.hasBuzzer = function() {
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
proto.bosdyn.api.AudioVisualBehavior.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.AudioVisualBehavior.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.AudioVisualBehavior} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.AudioVisualBehavior.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    priority: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ledSequenceGroup: (f = msg.getLedSequenceGroup()) && proto.bosdyn.api.LedSequenceGroup.toObject(includeInstance, f),
    audioSequenceGroup: (f = msg.getAudioSequenceGroup()) && proto.bosdyn.api.AudioSequenceGroup.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.AudioVisualBehavior}
 */
proto.bosdyn.api.AudioVisualBehavior.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.AudioVisualBehavior;
  return proto.bosdyn.api.AudioVisualBehavior.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.AudioVisualBehavior} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.AudioVisualBehavior}
 */
proto.bosdyn.api.AudioVisualBehavior.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.LedSequenceGroup;
      reader.readMessage(value,proto.bosdyn.api.LedSequenceGroup.deserializeBinaryFromReader);
      msg.setLedSequenceGroup(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.AudioSequenceGroup;
      reader.readMessage(value,proto.bosdyn.api.AudioSequenceGroup.deserializeBinaryFromReader);
      msg.setAudioSequenceGroup(value);
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
proto.bosdyn.api.AudioVisualBehavior.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.AudioVisualBehavior.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.AudioVisualBehavior} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.AudioVisualBehavior.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getLedSequenceGroup();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.LedSequenceGroup.serializeBinaryToWriter
    );
  }
  f = message.getAudioSequenceGroup();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.AudioSequenceGroup.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.bosdyn.api.AudioVisualBehavior.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.AudioVisualBehavior} returns this
 */
proto.bosdyn.api.AudioVisualBehavior.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int32 priority = 2;
 * @return {number}
 */
proto.bosdyn.api.AudioVisualBehavior.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.AudioVisualBehavior} returns this
 */
proto.bosdyn.api.AudioVisualBehavior.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional LedSequenceGroup led_sequence_group = 3;
 * @return {?proto.bosdyn.api.LedSequenceGroup}
 */
proto.bosdyn.api.AudioVisualBehavior.prototype.getLedSequenceGroup = function() {
  return /** @type{?proto.bosdyn.api.LedSequenceGroup} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LedSequenceGroup, 3));
};


/**
 * @param {?proto.bosdyn.api.LedSequenceGroup|undefined} value
 * @return {!proto.bosdyn.api.AudioVisualBehavior} returns this
*/
proto.bosdyn.api.AudioVisualBehavior.prototype.setLedSequenceGroup = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.AudioVisualBehavior} returns this
 */
proto.bosdyn.api.AudioVisualBehavior.prototype.clearLedSequenceGroup = function() {
  return this.setLedSequenceGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.AudioVisualBehavior.prototype.hasLedSequenceGroup = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AudioSequenceGroup audio_sequence_group = 4;
 * @return {?proto.bosdyn.api.AudioSequenceGroup}
 */
proto.bosdyn.api.AudioVisualBehavior.prototype.getAudioSequenceGroup = function() {
  return /** @type{?proto.bosdyn.api.AudioSequenceGroup} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.AudioSequenceGroup, 4));
};


/**
 * @param {?proto.bosdyn.api.AudioSequenceGroup|undefined} value
 * @return {!proto.bosdyn.api.AudioVisualBehavior} returns this
*/
proto.bosdyn.api.AudioVisualBehavior.prototype.setAudioSequenceGroup = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.AudioVisualBehavior} returns this
 */
proto.bosdyn.api.AudioVisualBehavior.prototype.clearAudioSequenceGroup = function() {
  return this.setAudioSequenceGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.AudioVisualBehavior.prototype.hasAudioSequenceGroup = function() {
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
proto.bosdyn.api.LiveAudioVisualBehavior.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.LiveAudioVisualBehavior.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.LiveAudioVisualBehavior} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LiveAudioVisualBehavior.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    permanent: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    behavior: (f = msg.getBehavior()) && proto.bosdyn.api.AudioVisualBehavior.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.LiveAudioVisualBehavior}
 */
proto.bosdyn.api.LiveAudioVisualBehavior.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.LiveAudioVisualBehavior;
  return proto.bosdyn.api.LiveAudioVisualBehavior.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.LiveAudioVisualBehavior} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.LiveAudioVisualBehavior}
 */
proto.bosdyn.api.LiveAudioVisualBehavior.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPermanent(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.AudioVisualBehavior;
      reader.readMessage(value,proto.bosdyn.api.AudioVisualBehavior.deserializeBinaryFromReader);
      msg.setBehavior(value);
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
proto.bosdyn.api.LiveAudioVisualBehavior.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.LiveAudioVisualBehavior.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.LiveAudioVisualBehavior} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.LiveAudioVisualBehavior.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPermanent();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getBehavior();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.AudioVisualBehavior.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.bosdyn.api.LiveAudioVisualBehavior.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.LiveAudioVisualBehavior} returns this
 */
proto.bosdyn.api.LiveAudioVisualBehavior.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool permanent = 2;
 * @return {boolean}
 */
proto.bosdyn.api.LiveAudioVisualBehavior.prototype.getPermanent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.LiveAudioVisualBehavior} returns this
 */
proto.bosdyn.api.LiveAudioVisualBehavior.prototype.setPermanent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional AudioVisualBehavior behavior = 3;
 * @return {?proto.bosdyn.api.AudioVisualBehavior}
 */
proto.bosdyn.api.LiveAudioVisualBehavior.prototype.getBehavior = function() {
  return /** @type{?proto.bosdyn.api.AudioVisualBehavior} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.AudioVisualBehavior, 3));
};


/**
 * @param {?proto.bosdyn.api.AudioVisualBehavior|undefined} value
 * @return {!proto.bosdyn.api.LiveAudioVisualBehavior} returns this
*/
proto.bosdyn.api.LiveAudioVisualBehavior.prototype.setBehavior = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.LiveAudioVisualBehavior} returns this
 */
proto.bosdyn.api.LiveAudioVisualBehavior.prototype.clearBehavior = function() {
  return this.setBehavior(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.LiveAudioVisualBehavior.prototype.hasBehavior = function() {
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
proto.bosdyn.api.RunBehaviorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.RunBehaviorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.RunBehaviorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RunBehaviorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    restart: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.RunBehaviorRequest}
 */
proto.bosdyn.api.RunBehaviorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.RunBehaviorRequest;
  return proto.bosdyn.api.RunBehaviorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.RunBehaviorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.RunBehaviorRequest}
 */
proto.bosdyn.api.RunBehaviorRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRestart(value);
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
proto.bosdyn.api.RunBehaviorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.RunBehaviorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.RunBehaviorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RunBehaviorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRestart();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.RunBehaviorRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.RunBehaviorRequest} returns this
*/
proto.bosdyn.api.RunBehaviorRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RunBehaviorRequest} returns this
 */
proto.bosdyn.api.RunBehaviorRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RunBehaviorRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.bosdyn.api.RunBehaviorRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.RunBehaviorRequest} returns this
 */
proto.bosdyn.api.RunBehaviorRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp end_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.RunBehaviorRequest.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.RunBehaviorRequest} returns this
*/
proto.bosdyn.api.RunBehaviorRequest.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RunBehaviorRequest} returns this
 */
proto.bosdyn.api.RunBehaviorRequest.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RunBehaviorRequest.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool restart = 4;
 * @return {boolean}
 */
proto.bosdyn.api.RunBehaviorRequest.prototype.getRestart = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.RunBehaviorRequest} returns this
 */
proto.bosdyn.api.RunBehaviorRequest.prototype.setRestart = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.bosdyn.api.RunBehaviorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.RunBehaviorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.RunBehaviorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RunBehaviorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    runResult: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.RunBehaviorResponse}
 */
proto.bosdyn.api.RunBehaviorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.RunBehaviorResponse;
  return proto.bosdyn.api.RunBehaviorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.RunBehaviorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.RunBehaviorResponse}
 */
proto.bosdyn.api.RunBehaviorResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.RunBehaviorResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {!proto.bosdyn.api.RunBehaviorResponse.RunResult} */ (reader.readEnum());
      msg.setRunResult(value);
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
proto.bosdyn.api.RunBehaviorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.RunBehaviorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.RunBehaviorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.RunBehaviorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getRunResult();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.RunBehaviorResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_SUCCESS: 1,
  STATUS_DOES_NOT_EXIST: 2,
  STATUS_EXPIRED: 3
};

/**
 * @enum {number}
 */
proto.bosdyn.api.RunBehaviorResponse.RunResult = {
  RESULT_UNKNOWN: 0,
  RESULT_BEHAVIOR_RUN: 1,
  RESULT_SYSTEM_DISABLED: 2,
  RESULT_BEHAVIOR_DISABLED: 3,
  RESULT_LOW_PRIORITY: 4,
  RESULT_ALREADY_RUNNING: 5
};

/**
 * optional ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.RunBehaviorResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.RunBehaviorResponse} returns this
*/
proto.bosdyn.api.RunBehaviorResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.RunBehaviorResponse} returns this
 */
proto.bosdyn.api.RunBehaviorResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.RunBehaviorResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.RunBehaviorResponse.Status}
 */
proto.bosdyn.api.RunBehaviorResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.RunBehaviorResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.RunBehaviorResponse.Status} value
 * @return {!proto.bosdyn.api.RunBehaviorResponse} returns this
 */
proto.bosdyn.api.RunBehaviorResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional RunResult run_result = 3;
 * @return {!proto.bosdyn.api.RunBehaviorResponse.RunResult}
 */
proto.bosdyn.api.RunBehaviorResponse.prototype.getRunResult = function() {
  return /** @type {!proto.bosdyn.api.RunBehaviorResponse.RunResult} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bosdyn.api.RunBehaviorResponse.RunResult} value
 * @return {!proto.bosdyn.api.RunBehaviorResponse} returns this
 */
proto.bosdyn.api.RunBehaviorResponse.prototype.setRunResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
proto.bosdyn.api.StopBehaviorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.StopBehaviorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.StopBehaviorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StopBehaviorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    behaviorName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.StopBehaviorRequest}
 */
proto.bosdyn.api.StopBehaviorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.StopBehaviorRequest;
  return proto.bosdyn.api.StopBehaviorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.StopBehaviorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.StopBehaviorRequest}
 */
proto.bosdyn.api.StopBehaviorRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setBehaviorName(value);
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
proto.bosdyn.api.StopBehaviorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.StopBehaviorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.StopBehaviorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StopBehaviorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getBehaviorName();
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
proto.bosdyn.api.StopBehaviorRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.StopBehaviorRequest} returns this
*/
proto.bosdyn.api.StopBehaviorRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.StopBehaviorRequest} returns this
 */
proto.bosdyn.api.StopBehaviorRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.StopBehaviorRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string behavior_name = 2;
 * @return {string}
 */
proto.bosdyn.api.StopBehaviorRequest.prototype.getBehaviorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.StopBehaviorRequest} returns this
 */
proto.bosdyn.api.StopBehaviorRequest.prototype.setBehaviorName = function(value) {
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
proto.bosdyn.api.StopBehaviorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.StopBehaviorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.StopBehaviorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StopBehaviorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
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
 * @return {!proto.bosdyn.api.StopBehaviorResponse}
 */
proto.bosdyn.api.StopBehaviorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.StopBehaviorResponse;
  return proto.bosdyn.api.StopBehaviorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.StopBehaviorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.StopBehaviorResponse}
 */
proto.bosdyn.api.StopBehaviorResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.StopBehaviorResponse.Status} */ (reader.readEnum());
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
proto.bosdyn.api.StopBehaviorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.StopBehaviorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.StopBehaviorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.StopBehaviorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
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
proto.bosdyn.api.StopBehaviorResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_SUCCESS: 1,
  STATUS_INVALID_CLIENT: 2
};

/**
 * optional ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.StopBehaviorResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.StopBehaviorResponse} returns this
*/
proto.bosdyn.api.StopBehaviorResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.StopBehaviorResponse} returns this
 */
proto.bosdyn.api.StopBehaviorResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.StopBehaviorResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.StopBehaviorResponse.Status}
 */
proto.bosdyn.api.StopBehaviorResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.StopBehaviorResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.StopBehaviorResponse.Status} value
 * @return {!proto.bosdyn.api.StopBehaviorResponse} returns this
 */
proto.bosdyn.api.StopBehaviorResponse.prototype.setStatus = function(value) {
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
proto.bosdyn.api.AddOrModifyBehaviorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.AddOrModifyBehaviorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.AddOrModifyBehaviorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.AddOrModifyBehaviorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    behavior: (f = msg.getBehavior()) && proto.bosdyn.api.AudioVisualBehavior.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorRequest}
 */
proto.bosdyn.api.AddOrModifyBehaviorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.AddOrModifyBehaviorRequest;
  return proto.bosdyn.api.AddOrModifyBehaviorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.AddOrModifyBehaviorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorRequest}
 */
proto.bosdyn.api.AddOrModifyBehaviorRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.AudioVisualBehavior;
      reader.readMessage(value,proto.bosdyn.api.AudioVisualBehavior.deserializeBinaryFromReader);
      msg.setBehavior(value);
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
proto.bosdyn.api.AddOrModifyBehaviorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.AddOrModifyBehaviorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.AddOrModifyBehaviorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.AddOrModifyBehaviorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBehavior();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.AudioVisualBehavior.serializeBinaryToWriter
    );
  }
};


/**
 * optional RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.AddOrModifyBehaviorRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorRequest} returns this
*/
proto.bosdyn.api.AddOrModifyBehaviorRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorRequest} returns this
 */
proto.bosdyn.api.AddOrModifyBehaviorRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.AddOrModifyBehaviorRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.bosdyn.api.AddOrModifyBehaviorRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorRequest} returns this
 */
proto.bosdyn.api.AddOrModifyBehaviorRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AudioVisualBehavior behavior = 3;
 * @return {?proto.bosdyn.api.AudioVisualBehavior}
 */
proto.bosdyn.api.AddOrModifyBehaviorRequest.prototype.getBehavior = function() {
  return /** @type{?proto.bosdyn.api.AudioVisualBehavior} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.AudioVisualBehavior, 3));
};


/**
 * @param {?proto.bosdyn.api.AudioVisualBehavior|undefined} value
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorRequest} returns this
*/
proto.bosdyn.api.AddOrModifyBehaviorRequest.prototype.setBehavior = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorRequest} returns this
 */
proto.bosdyn.api.AddOrModifyBehaviorRequest.prototype.clearBehavior = function() {
  return this.setBehavior(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.AddOrModifyBehaviorRequest.prototype.hasBehavior = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.AddOrModifyBehaviorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.AddOrModifyBehaviorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    deprecatedInvalidFieldsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    errorMessage: jspb.Message.getFieldWithDefault(msg, 5, ""),
    liveBehavior: (f = msg.getLiveBehavior()) && proto.bosdyn.api.LiveAudioVisualBehavior.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorResponse}
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.AddOrModifyBehaviorResponse;
  return proto.bosdyn.api.AddOrModifyBehaviorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.AddOrModifyBehaviorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorResponse}
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.AddOrModifyBehaviorResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addDeprecatedInvalidFields(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.LiveAudioVisualBehavior;
      reader.readMessage(value,proto.bosdyn.api.LiveAudioVisualBehavior.deserializeBinaryFromReader);
      msg.setLiveBehavior(value);
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
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.AddOrModifyBehaviorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.AddOrModifyBehaviorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDeprecatedInvalidFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
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
  f = message.getLiveBehavior();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.LiveAudioVisualBehavior.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_SUCCESS: 1,
  STATUS_MODIFY_PERMANENT: 2,
  STATUS_INVALID: 3
};

/**
 * optional ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorResponse} returns this
*/
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorResponse} returns this
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorResponse.Status}
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.AddOrModifyBehaviorResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.AddOrModifyBehaviorResponse.Status} value
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorResponse} returns this
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated string deprecated_invalid_fields = 3;
 * @return {!Array<string>}
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.getDeprecatedInvalidFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorResponse} returns this
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.setDeprecatedInvalidFieldsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorResponse} returns this
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.addDeprecatedInvalidFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorResponse} returns this
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.clearDeprecatedInvalidFieldsList = function() {
  return this.setDeprecatedInvalidFieldsList([]);
};


/**
 * optional string error_message = 5;
 * @return {string}
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorResponse} returns this
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional LiveAudioVisualBehavior live_behavior = 4;
 * @return {?proto.bosdyn.api.LiveAudioVisualBehavior}
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.getLiveBehavior = function() {
  return /** @type{?proto.bosdyn.api.LiveAudioVisualBehavior} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.LiveAudioVisualBehavior, 4));
};


/**
 * @param {?proto.bosdyn.api.LiveAudioVisualBehavior|undefined} value
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorResponse} returns this
*/
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.setLiveBehavior = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.AddOrModifyBehaviorResponse} returns this
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.clearLiveBehavior = function() {
  return this.setLiveBehavior(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.AddOrModifyBehaviorResponse.prototype.hasLiveBehavior = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.DeleteBehaviorsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.DeleteBehaviorsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.DeleteBehaviorsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.DeleteBehaviorsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.DeleteBehaviorsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    behaviorNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.DeleteBehaviorsRequest}
 */
proto.bosdyn.api.DeleteBehaviorsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.DeleteBehaviorsRequest;
  return proto.bosdyn.api.DeleteBehaviorsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.DeleteBehaviorsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.DeleteBehaviorsRequest}
 */
proto.bosdyn.api.DeleteBehaviorsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addBehaviorNames(value);
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
proto.bosdyn.api.DeleteBehaviorsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.DeleteBehaviorsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.DeleteBehaviorsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.DeleteBehaviorsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getBehaviorNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.DeleteBehaviorsRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.DeleteBehaviorsRequest} returns this
*/
proto.bosdyn.api.DeleteBehaviorsRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.DeleteBehaviorsRequest} returns this
 */
proto.bosdyn.api.DeleteBehaviorsRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.DeleteBehaviorsRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string behavior_names = 2;
 * @return {!Array<string>}
 */
proto.bosdyn.api.DeleteBehaviorsRequest.prototype.getBehaviorNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.DeleteBehaviorsRequest} returns this
 */
proto.bosdyn.api.DeleteBehaviorsRequest.prototype.setBehaviorNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.DeleteBehaviorsRequest} returns this
 */
proto.bosdyn.api.DeleteBehaviorsRequest.prototype.addBehaviorNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.DeleteBehaviorsRequest} returns this
 */
proto.bosdyn.api.DeleteBehaviorsRequest.prototype.clearBehaviorNamesList = function() {
  return this.setBehaviorNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.DeleteBehaviorsResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.DeleteBehaviorsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.DeleteBehaviorsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.DeleteBehaviorsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.DeleteBehaviorsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    deletedBehaviorsList: jspb.Message.toObjectList(msg.getDeletedBehaviorsList(),
    proto.bosdyn.api.LiveAudioVisualBehavior.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.DeleteBehaviorsResponse}
 */
proto.bosdyn.api.DeleteBehaviorsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.DeleteBehaviorsResponse;
  return proto.bosdyn.api.DeleteBehaviorsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.DeleteBehaviorsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.DeleteBehaviorsResponse}
 */
proto.bosdyn.api.DeleteBehaviorsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.DeleteBehaviorsResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.LiveAudioVisualBehavior;
      reader.readMessage(value,proto.bosdyn.api.LiveAudioVisualBehavior.deserializeBinaryFromReader);
      msg.addDeletedBehaviors(value);
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
proto.bosdyn.api.DeleteBehaviorsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.DeleteBehaviorsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.DeleteBehaviorsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.DeleteBehaviorsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDeletedBehaviorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bosdyn.api.LiveAudioVisualBehavior.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.DeleteBehaviorsResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_SUCCESS: 1,
  STATUS_DOES_NOT_EXIST: 2,
  STATUS_DELETE_PERMANENT: 3
};

/**
 * optional ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.DeleteBehaviorsResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.DeleteBehaviorsResponse} returns this
*/
proto.bosdyn.api.DeleteBehaviorsResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.DeleteBehaviorsResponse} returns this
 */
proto.bosdyn.api.DeleteBehaviorsResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.DeleteBehaviorsResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.DeleteBehaviorsResponse.Status}
 */
proto.bosdyn.api.DeleteBehaviorsResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.DeleteBehaviorsResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.DeleteBehaviorsResponse.Status} value
 * @return {!proto.bosdyn.api.DeleteBehaviorsResponse} returns this
 */
proto.bosdyn.api.DeleteBehaviorsResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated LiveAudioVisualBehavior deleted_behaviors = 3;
 * @return {!Array<!proto.bosdyn.api.LiveAudioVisualBehavior>}
 */
proto.bosdyn.api.DeleteBehaviorsResponse.prototype.getDeletedBehaviorsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.LiveAudioVisualBehavior>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.LiveAudioVisualBehavior, 3));
};


/**
 * @param {!Array<!proto.bosdyn.api.LiveAudioVisualBehavior>} value
 * @return {!proto.bosdyn.api.DeleteBehaviorsResponse} returns this
*/
proto.bosdyn.api.DeleteBehaviorsResponse.prototype.setDeletedBehaviorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bosdyn.api.LiveAudioVisualBehavior=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.LiveAudioVisualBehavior}
 */
proto.bosdyn.api.DeleteBehaviorsResponse.prototype.addDeletedBehaviors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bosdyn.api.LiveAudioVisualBehavior, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.DeleteBehaviorsResponse} returns this
 */
proto.bosdyn.api.DeleteBehaviorsResponse.prototype.clearDeletedBehaviorsList = function() {
  return this.setDeletedBehaviorsList([]);
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
proto.bosdyn.api.ListBehaviorsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ListBehaviorsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ListBehaviorsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ListBehaviorsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.ListBehaviorsRequest}
 */
proto.bosdyn.api.ListBehaviorsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ListBehaviorsRequest;
  return proto.bosdyn.api.ListBehaviorsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ListBehaviorsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ListBehaviorsRequest}
 */
proto.bosdyn.api.ListBehaviorsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.ListBehaviorsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ListBehaviorsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ListBehaviorsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ListBehaviorsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.ListBehaviorsRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.ListBehaviorsRequest} returns this
*/
proto.bosdyn.api.ListBehaviorsRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ListBehaviorsRequest} returns this
 */
proto.bosdyn.api.ListBehaviorsRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ListBehaviorsRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.ListBehaviorsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.ListBehaviorsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.ListBehaviorsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.ListBehaviorsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ListBehaviorsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    behaviorsList: jspb.Message.toObjectList(msg.getBehaviorsList(),
    proto.bosdyn.api.LiveAudioVisualBehavior.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.ListBehaviorsResponse}
 */
proto.bosdyn.api.ListBehaviorsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.ListBehaviorsResponse;
  return proto.bosdyn.api.ListBehaviorsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.ListBehaviorsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.ListBehaviorsResponse}
 */
proto.bosdyn.api.ListBehaviorsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bosdyn.api.LiveAudioVisualBehavior;
      reader.readMessage(value,proto.bosdyn.api.LiveAudioVisualBehavior.deserializeBinaryFromReader);
      msg.addBehaviors(value);
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
proto.bosdyn.api.ListBehaviorsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.ListBehaviorsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.ListBehaviorsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.ListBehaviorsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getBehaviorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bosdyn.api.LiveAudioVisualBehavior.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.ListBehaviorsResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.ListBehaviorsResponse} returns this
*/
proto.bosdyn.api.ListBehaviorsResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.ListBehaviorsResponse} returns this
 */
proto.bosdyn.api.ListBehaviorsResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.ListBehaviorsResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated LiveAudioVisualBehavior behaviors = 2;
 * @return {!Array<!proto.bosdyn.api.LiveAudioVisualBehavior>}
 */
proto.bosdyn.api.ListBehaviorsResponse.prototype.getBehaviorsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.LiveAudioVisualBehavior>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.LiveAudioVisualBehavior, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.LiveAudioVisualBehavior>} value
 * @return {!proto.bosdyn.api.ListBehaviorsResponse} returns this
*/
proto.bosdyn.api.ListBehaviorsResponse.prototype.setBehaviorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.LiveAudioVisualBehavior=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.LiveAudioVisualBehavior}
 */
proto.bosdyn.api.ListBehaviorsResponse.prototype.addBehaviors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.LiveAudioVisualBehavior, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.ListBehaviorsResponse} returns this
 */
proto.bosdyn.api.ListBehaviorsResponse.prototype.clearBehaviorsList = function() {
  return this.setBehaviorsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.PresetColorAssociation.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.bosdyn.api.PresetColorAssociation.AssociationCase = {
  ASSOCIATION_NOT_SET: 0,
  COLOR_NAME: 1,
  CUSTOM_VALUE: 2
};

/**
 * @return {proto.bosdyn.api.PresetColorAssociation.AssociationCase}
 */
proto.bosdyn.api.PresetColorAssociation.prototype.getAssociationCase = function() {
  return /** @type {proto.bosdyn.api.PresetColorAssociation.AssociationCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.PresetColorAssociation.oneofGroups_[0]));
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
proto.bosdyn.api.PresetColorAssociation.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.PresetColorAssociation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.PresetColorAssociation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.PresetColorAssociation.toObject = function(includeInstance, msg) {
  var f, obj = {
    colorName: jspb.Message.getFieldWithDefault(msg, 1, 0),
    customValue: (f = msg.getCustomValue()) && proto.bosdyn.api.Color.RGB.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.PresetColorAssociation}
 */
proto.bosdyn.api.PresetColorAssociation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.PresetColorAssociation;
  return proto.bosdyn.api.PresetColorAssociation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.PresetColorAssociation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.PresetColorAssociation}
 */
proto.bosdyn.api.PresetColorAssociation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.PresetColorAssociation.PredefinedColor} */ (reader.readEnum());
      msg.setColorName(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.Color.RGB;
      reader.readMessage(value,proto.bosdyn.api.Color.RGB.deserializeBinaryFromReader);
      msg.setCustomValue(value);
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
proto.bosdyn.api.PresetColorAssociation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.PresetColorAssociation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.PresetColorAssociation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.PresetColorAssociation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.bosdyn.api.PresetColorAssociation.PredefinedColor} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCustomValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.Color.RGB.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.PresetColorAssociation.PredefinedColor = {
  PREDEFINED_UNKNOWN: 0,
  PREDEFINED_GREEN: 1,
  PREDEFINED_AMBER: 2,
  PREDEFINED_RED: 3,
  PREDEFINED_BLUE: 4,
  PREDEFINED_PINK: 5,
  PREDEFINED_PURPLE: 6,
  PREDEFINED_WHITE: 7
};

/**
 * optional PredefinedColor color_name = 1;
 * @return {!proto.bosdyn.api.PresetColorAssociation.PredefinedColor}
 */
proto.bosdyn.api.PresetColorAssociation.prototype.getColorName = function() {
  return /** @type {!proto.bosdyn.api.PresetColorAssociation.PredefinedColor} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.PresetColorAssociation.PredefinedColor} value
 * @return {!proto.bosdyn.api.PresetColorAssociation} returns this
 */
proto.bosdyn.api.PresetColorAssociation.prototype.setColorName = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.bosdyn.api.PresetColorAssociation.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.bosdyn.api.PresetColorAssociation} returns this
 */
proto.bosdyn.api.PresetColorAssociation.prototype.clearColorName = function() {
  return jspb.Message.setOneofField(this, 1, proto.bosdyn.api.PresetColorAssociation.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.PresetColorAssociation.prototype.hasColorName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Color.RGB custom_value = 2;
 * @return {?proto.bosdyn.api.Color.RGB}
 */
proto.bosdyn.api.PresetColorAssociation.prototype.getCustomValue = function() {
  return /** @type{?proto.bosdyn.api.Color.RGB} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.Color.RGB, 2));
};


/**
 * @param {?proto.bosdyn.api.Color.RGB|undefined} value
 * @return {!proto.bosdyn.api.PresetColorAssociation} returns this
*/
proto.bosdyn.api.PresetColorAssociation.prototype.setCustomValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bosdyn.api.PresetColorAssociation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.PresetColorAssociation} returns this
 */
proto.bosdyn.api.PresetColorAssociation.prototype.clearCustomValue = function() {
  return this.setCustomValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.PresetColorAssociation.prototype.hasCustomValue = function() {
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
proto.bosdyn.api.AudioVisualSystemParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.AudioVisualSystemParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.AudioVisualSystemParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.AudioVisualSystemParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    maxBrightness: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    buzzerMaxVolume: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    normalColorAssociation: (f = msg.getNormalColorAssociation()) && proto.bosdyn.api.PresetColorAssociation.toObject(includeInstance, f),
    warningColorAssociation: (f = msg.getWarningColorAssociation()) && proto.bosdyn.api.PresetColorAssociation.toObject(includeInstance, f),
    dangerColorAssociation: (f = msg.getDangerColorAssociation()) && proto.bosdyn.api.PresetColorAssociation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.AudioVisualSystemParams}
 */
proto.bosdyn.api.AudioVisualSystemParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.AudioVisualSystemParams;
  return proto.bosdyn.api.AudioVisualSystemParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.AudioVisualSystemParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.AudioVisualSystemParams}
 */
proto.bosdyn.api.AudioVisualSystemParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMaxBrightness(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBuzzerMaxVolume(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.PresetColorAssociation;
      reader.readMessage(value,proto.bosdyn.api.PresetColorAssociation.deserializeBinaryFromReader);
      msg.setNormalColorAssociation(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.PresetColorAssociation;
      reader.readMessage(value,proto.bosdyn.api.PresetColorAssociation.deserializeBinaryFromReader);
      msg.setWarningColorAssociation(value);
      break;
    case 7:
      var value = new proto.bosdyn.api.PresetColorAssociation;
      reader.readMessage(value,proto.bosdyn.api.PresetColorAssociation.deserializeBinaryFromReader);
      msg.setDangerColorAssociation(value);
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
proto.bosdyn.api.AudioVisualSystemParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.AudioVisualSystemParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.AudioVisualSystemParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.AudioVisualSystemParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMaxBrightness();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getBuzzerMaxVolume();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getNormalColorAssociation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.PresetColorAssociation.serializeBinaryToWriter
    );
  }
  f = message.getWarningColorAssociation();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bosdyn.api.PresetColorAssociation.serializeBinaryToWriter
    );
  }
  f = message.getDangerColorAssociation();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bosdyn.api.PresetColorAssociation.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.bosdyn.api.AudioVisualSystemParams.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.AudioVisualSystemParams} returns this
 */
proto.bosdyn.api.AudioVisualSystemParams.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional float max_brightness = 2;
 * @return {number}
 */
proto.bosdyn.api.AudioVisualSystemParams.prototype.getMaxBrightness = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.AudioVisualSystemParams} returns this
 */
proto.bosdyn.api.AudioVisualSystemParams.prototype.setMaxBrightness = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float buzzer_max_volume = 3;
 * @return {number}
 */
proto.bosdyn.api.AudioVisualSystemParams.prototype.getBuzzerMaxVolume = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.AudioVisualSystemParams} returns this
 */
proto.bosdyn.api.AudioVisualSystemParams.prototype.setBuzzerMaxVolume = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional PresetColorAssociation normal_color_association = 5;
 * @return {?proto.bosdyn.api.PresetColorAssociation}
 */
proto.bosdyn.api.AudioVisualSystemParams.prototype.getNormalColorAssociation = function() {
  return /** @type{?proto.bosdyn.api.PresetColorAssociation} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.PresetColorAssociation, 5));
};


/**
 * @param {?proto.bosdyn.api.PresetColorAssociation|undefined} value
 * @return {!proto.bosdyn.api.AudioVisualSystemParams} returns this
*/
proto.bosdyn.api.AudioVisualSystemParams.prototype.setNormalColorAssociation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.AudioVisualSystemParams} returns this
 */
proto.bosdyn.api.AudioVisualSystemParams.prototype.clearNormalColorAssociation = function() {
  return this.setNormalColorAssociation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.AudioVisualSystemParams.prototype.hasNormalColorAssociation = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional PresetColorAssociation warning_color_association = 6;
 * @return {?proto.bosdyn.api.PresetColorAssociation}
 */
proto.bosdyn.api.AudioVisualSystemParams.prototype.getWarningColorAssociation = function() {
  return /** @type{?proto.bosdyn.api.PresetColorAssociation} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.PresetColorAssociation, 6));
};


/**
 * @param {?proto.bosdyn.api.PresetColorAssociation|undefined} value
 * @return {!proto.bosdyn.api.AudioVisualSystemParams} returns this
*/
proto.bosdyn.api.AudioVisualSystemParams.prototype.setWarningColorAssociation = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.AudioVisualSystemParams} returns this
 */
proto.bosdyn.api.AudioVisualSystemParams.prototype.clearWarningColorAssociation = function() {
  return this.setWarningColorAssociation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.AudioVisualSystemParams.prototype.hasWarningColorAssociation = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional PresetColorAssociation danger_color_association = 7;
 * @return {?proto.bosdyn.api.PresetColorAssociation}
 */
proto.bosdyn.api.AudioVisualSystemParams.prototype.getDangerColorAssociation = function() {
  return /** @type{?proto.bosdyn.api.PresetColorAssociation} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.PresetColorAssociation, 7));
};


/**
 * @param {?proto.bosdyn.api.PresetColorAssociation|undefined} value
 * @return {!proto.bosdyn.api.AudioVisualSystemParams} returns this
*/
proto.bosdyn.api.AudioVisualSystemParams.prototype.setDangerColorAssociation = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.AudioVisualSystemParams} returns this
 */
proto.bosdyn.api.AudioVisualSystemParams.prototype.clearDangerColorAssociation = function() {
  return this.setDangerColorAssociation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.AudioVisualSystemParams.prototype.hasDangerColorAssociation = function() {
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
proto.bosdyn.api.GetSystemParamsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.GetSystemParamsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.GetSystemParamsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.GetSystemParamsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.GetSystemParamsRequest}
 */
proto.bosdyn.api.GetSystemParamsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.GetSystemParamsRequest;
  return proto.bosdyn.api.GetSystemParamsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.GetSystemParamsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.GetSystemParamsRequest}
 */
proto.bosdyn.api.GetSystemParamsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.GetSystemParamsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.GetSystemParamsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.GetSystemParamsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.GetSystemParamsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.GetSystemParamsRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.GetSystemParamsRequest} returns this
*/
proto.bosdyn.api.GetSystemParamsRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.GetSystemParamsRequest} returns this
 */
proto.bosdyn.api.GetSystemParamsRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.GetSystemParamsRequest.prototype.hasHeader = function() {
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
proto.bosdyn.api.GetSystemParamsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.GetSystemParamsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.GetSystemParamsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.GetSystemParamsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    params: (f = msg.getParams()) && proto.bosdyn.api.AudioVisualSystemParams.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.GetSystemParamsResponse}
 */
proto.bosdyn.api.GetSystemParamsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.GetSystemParamsResponse;
  return proto.bosdyn.api.GetSystemParamsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.GetSystemParamsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.GetSystemParamsResponse}
 */
proto.bosdyn.api.GetSystemParamsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bosdyn.api.AudioVisualSystemParams;
      reader.readMessage(value,proto.bosdyn.api.AudioVisualSystemParams.deserializeBinaryFromReader);
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
proto.bosdyn.api.GetSystemParamsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.GetSystemParamsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.GetSystemParamsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.GetSystemParamsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.AudioVisualSystemParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.GetSystemParamsResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.GetSystemParamsResponse} returns this
*/
proto.bosdyn.api.GetSystemParamsResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.GetSystemParamsResponse} returns this
 */
proto.bosdyn.api.GetSystemParamsResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.GetSystemParamsResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AudioVisualSystemParams params = 2;
 * @return {?proto.bosdyn.api.AudioVisualSystemParams}
 */
proto.bosdyn.api.GetSystemParamsResponse.prototype.getParams = function() {
  return /** @type{?proto.bosdyn.api.AudioVisualSystemParams} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.AudioVisualSystemParams, 2));
};


/**
 * @param {?proto.bosdyn.api.AudioVisualSystemParams|undefined} value
 * @return {!proto.bosdyn.api.GetSystemParamsResponse} returns this
*/
proto.bosdyn.api.GetSystemParamsResponse.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.GetSystemParamsResponse} returns this
 */
proto.bosdyn.api.GetSystemParamsResponse.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.GetSystemParamsResponse.prototype.hasParams = function() {
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
proto.bosdyn.api.SetSystemParamsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SetSystemParamsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SetSystemParamsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SetSystemParamsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    enabled: (f = msg.getEnabled()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    maxBrightness: (f = msg.getMaxBrightness()) && google_protobuf_wrappers_pb.FloatValue.toObject(includeInstance, f),
    buzzerMaxVolume: (f = msg.getBuzzerMaxVolume()) && google_protobuf_wrappers_pb.FloatValue.toObject(includeInstance, f),
    normalColorAssociation: (f = msg.getNormalColorAssociation()) && proto.bosdyn.api.PresetColorAssociation.toObject(includeInstance, f),
    warningColorAssociation: (f = msg.getWarningColorAssociation()) && proto.bosdyn.api.PresetColorAssociation.toObject(includeInstance, f),
    dangerColorAssociation: (f = msg.getDangerColorAssociation()) && proto.bosdyn.api.PresetColorAssociation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.SetSystemParamsRequest}
 */
proto.bosdyn.api.SetSystemParamsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SetSystemParamsRequest;
  return proto.bosdyn.api.SetSystemParamsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SetSystemParamsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SetSystemParamsRequest}
 */
proto.bosdyn.api.SetSystemParamsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setEnabled(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.FloatValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.FloatValue.deserializeBinaryFromReader);
      msg.setMaxBrightness(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.FloatValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.FloatValue.deserializeBinaryFromReader);
      msg.setBuzzerMaxVolume(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.PresetColorAssociation;
      reader.readMessage(value,proto.bosdyn.api.PresetColorAssociation.deserializeBinaryFromReader);
      msg.setNormalColorAssociation(value);
      break;
    case 7:
      var value = new proto.bosdyn.api.PresetColorAssociation;
      reader.readMessage(value,proto.bosdyn.api.PresetColorAssociation.deserializeBinaryFromReader);
      msg.setWarningColorAssociation(value);
      break;
    case 8:
      var value = new proto.bosdyn.api.PresetColorAssociation;
      reader.readMessage(value,proto.bosdyn.api.PresetColorAssociation.deserializeBinaryFromReader);
      msg.setDangerColorAssociation(value);
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
proto.bosdyn.api.SetSystemParamsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SetSystemParamsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SetSystemParamsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SetSystemParamsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getEnabled();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getMaxBrightness();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.FloatValue.serializeBinaryToWriter
    );
  }
  f = message.getBuzzerMaxVolume();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.FloatValue.serializeBinaryToWriter
    );
  }
  f = message.getNormalColorAssociation();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bosdyn.api.PresetColorAssociation.serializeBinaryToWriter
    );
  }
  f = message.getWarningColorAssociation();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bosdyn.api.PresetColorAssociation.serializeBinaryToWriter
    );
  }
  f = message.getDangerColorAssociation();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bosdyn.api.PresetColorAssociation.serializeBinaryToWriter
    );
  }
};


/**
 * optional RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.SetSystemParamsRequest} returns this
*/
proto.bosdyn.api.SetSystemParamsRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.SetSystemParamsRequest} returns this
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.BoolValue enabled = 2;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.getEnabled = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 2));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.SetSystemParamsRequest} returns this
*/
proto.bosdyn.api.SetSystemParamsRequest.prototype.setEnabled = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.SetSystemParamsRequest} returns this
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.clearEnabled = function() {
  return this.setEnabled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FloatValue max_brightness = 3;
 * @return {?proto.google.protobuf.FloatValue}
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.getMaxBrightness = function() {
  return /** @type{?proto.google.protobuf.FloatValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.FloatValue, 3));
};


/**
 * @param {?proto.google.protobuf.FloatValue|undefined} value
 * @return {!proto.bosdyn.api.SetSystemParamsRequest} returns this
*/
proto.bosdyn.api.SetSystemParamsRequest.prototype.setMaxBrightness = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.SetSystemParamsRequest} returns this
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.clearMaxBrightness = function() {
  return this.setMaxBrightness(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.hasMaxBrightness = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FloatValue buzzer_max_volume = 4;
 * @return {?proto.google.protobuf.FloatValue}
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.getBuzzerMaxVolume = function() {
  return /** @type{?proto.google.protobuf.FloatValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.FloatValue, 4));
};


/**
 * @param {?proto.google.protobuf.FloatValue|undefined} value
 * @return {!proto.bosdyn.api.SetSystemParamsRequest} returns this
*/
proto.bosdyn.api.SetSystemParamsRequest.prototype.setBuzzerMaxVolume = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.SetSystemParamsRequest} returns this
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.clearBuzzerMaxVolume = function() {
  return this.setBuzzerMaxVolume(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.hasBuzzerMaxVolume = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional PresetColorAssociation normal_color_association = 6;
 * @return {?proto.bosdyn.api.PresetColorAssociation}
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.getNormalColorAssociation = function() {
  return /** @type{?proto.bosdyn.api.PresetColorAssociation} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.PresetColorAssociation, 6));
};


/**
 * @param {?proto.bosdyn.api.PresetColorAssociation|undefined} value
 * @return {!proto.bosdyn.api.SetSystemParamsRequest} returns this
*/
proto.bosdyn.api.SetSystemParamsRequest.prototype.setNormalColorAssociation = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.SetSystemParamsRequest} returns this
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.clearNormalColorAssociation = function() {
  return this.setNormalColorAssociation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.hasNormalColorAssociation = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional PresetColorAssociation warning_color_association = 7;
 * @return {?proto.bosdyn.api.PresetColorAssociation}
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.getWarningColorAssociation = function() {
  return /** @type{?proto.bosdyn.api.PresetColorAssociation} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.PresetColorAssociation, 7));
};


/**
 * @param {?proto.bosdyn.api.PresetColorAssociation|undefined} value
 * @return {!proto.bosdyn.api.SetSystemParamsRequest} returns this
*/
proto.bosdyn.api.SetSystemParamsRequest.prototype.setWarningColorAssociation = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.SetSystemParamsRequest} returns this
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.clearWarningColorAssociation = function() {
  return this.setWarningColorAssociation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.hasWarningColorAssociation = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional PresetColorAssociation danger_color_association = 8;
 * @return {?proto.bosdyn.api.PresetColorAssociation}
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.getDangerColorAssociation = function() {
  return /** @type{?proto.bosdyn.api.PresetColorAssociation} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.PresetColorAssociation, 8));
};


/**
 * @param {?proto.bosdyn.api.PresetColorAssociation|undefined} value
 * @return {!proto.bosdyn.api.SetSystemParamsRequest} returns this
*/
proto.bosdyn.api.SetSystemParamsRequest.prototype.setDangerColorAssociation = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.SetSystemParamsRequest} returns this
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.clearDangerColorAssociation = function() {
  return this.setDangerColorAssociation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.SetSystemParamsRequest.prototype.hasDangerColorAssociation = function() {
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
proto.bosdyn.api.SetSystemParamsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.SetSystemParamsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.SetSystemParamsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SetSystemParamsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.SetSystemParamsResponse}
 */
proto.bosdyn.api.SetSystemParamsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.SetSystemParamsResponse;
  return proto.bosdyn.api.SetSystemParamsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.SetSystemParamsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.SetSystemParamsResponse}
 */
proto.bosdyn.api.SetSystemParamsResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.SetSystemParamsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.SetSystemParamsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.SetSystemParamsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.SetSystemParamsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
};


/**
 * optional ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.SetSystemParamsResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.SetSystemParamsResponse} returns this
*/
proto.bosdyn.api.SetSystemParamsResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.SetSystemParamsResponse} returns this
 */
proto.bosdyn.api.SetSystemParamsResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.SetSystemParamsResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.bosdyn.api);

// source: bosdyn/api/spot/choreography_sequence.proto
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
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var bosdyn_api_geometry_pb = require('../../../bosdyn/api/geometry_pb.js');
goog.object.extend(proto, bosdyn_api_geometry_pb);
var bosdyn_api_header_pb = require('../../../bosdyn/api/header_pb.js');
goog.object.extend(proto, bosdyn_api_header_pb);
var bosdyn_api_lease_pb = require('../../../bosdyn/api/lease_pb.js');
goog.object.extend(proto, bosdyn_api_lease_pb);
var bosdyn_api_spot_choreography_params_pb = require('../../../bosdyn/api/spot/choreography_params_pb.js');
goog.object.extend(proto, bosdyn_api_spot_choreography_params_pb);
var bosdyn_api_data_chunk_pb = require('../../../bosdyn/api/data_chunk_pb.js');
goog.object.extend(proto, bosdyn_api_data_chunk_pb);
goog.exportSymbol('proto.bosdyn.api.spot.ActiveMove', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ActiveMove.CommandLimitsCase', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.AnimateArm', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.AnimateArm.ArmCase', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.AnimateArm.HandPose', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.AnimateArm.HandPose.OrientationCase', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.AnimateBody', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.AnimateBody.OrientationCase', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.AnimateBody.PositionCase', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.AnimateGripper', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.AnimateLegs', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.AnimateSingleLeg', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.AnimateSingleLeg.LegCase', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.Animation', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.Animation.ArmPlayback', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.AnimationKeyframe', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ArmJointAngles', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ChoreographerDisplayInfo', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ChoreographerDisplayInfo.Category', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ChoreographerSave', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ChoreographyCommandRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ChoreographyCommandResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ChoreographyCommandResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ChoreographyInfo', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ChoreographySequence', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ChoreographyStateLog', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ChoreographyStatusRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ChoreographyStatusResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ChoreographyStatusResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ClearAllSequenceFilesRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ClearAllSequenceFilesResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.DeleteSequenceRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.DeleteSequenceResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.DeleteSequenceResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.DownloadRobotStateLogRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.DownloadRobotStateLogRequest.LogType', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.DownloadRobotStateLogResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.DownloadRobotStateLogResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ExecuteChoreographyRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ExecuteChoreographyResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ExecuteChoreographyResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.GetAnimationRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.GetAnimationResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.GetAnimationResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.GetChoreographySequenceRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.GetChoreographySequenceResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.GetChoreographySequenceResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.LegJointAngles', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.LegSize', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.LegSizeConfigurationRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.LegSizeConfigurationResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.LegSizeConfigurationResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.LegSizeConfigurationStateRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.LegSizeConfigurationStateResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ListAllMovesRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ListAllMovesResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ListAllSequencesRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ListAllSequencesResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.LoggedFootContacts', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.LoggedJoints', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.LoggedStateKeyFrame', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ModifyChoreographyInfoRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ModifyChoreographyInfoResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.MoveCommand', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.MoveCommand.CommandCase', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.MoveInfo', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.MoveInfo.TransitionState', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.MoveParams', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.MoveParams.ParamsCase', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.SaveSequenceRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.SaveSequenceResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.SaveSequenceResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.SequenceInfo', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.SequenceInfo.SavedState', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.StartRecordingStateRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.StartRecordingStateResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.StartRecordingStateResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.StopRecordingStateRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.StopRecordingStateResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.UploadAnimatedMoveRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.UploadAnimatedMoveResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.UploadAnimatedMoveResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.UploadChoreographyRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.UploadChoreographyResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ListAllMovesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.ListAllMovesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ListAllMovesRequest.displayName = 'proto.bosdyn.api.spot.ListAllMovesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ListAllMovesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.ListAllMovesResponse.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.ListAllMovesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ListAllMovesResponse.displayName = 'proto.bosdyn.api.spot.ListAllMovesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ListAllSequencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.ListAllSequencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ListAllSequencesRequest.displayName = 'proto.bosdyn.api.spot.ListAllSequencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ListAllSequencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.ListAllSequencesResponse.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.ListAllSequencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ListAllSequencesResponse.displayName = 'proto.bosdyn.api.spot.ListAllSequencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.SequenceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.SequenceInfo.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.SequenceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.SequenceInfo.displayName = 'proto.bosdyn.api.spot.SequenceInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.GetChoreographySequenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.GetChoreographySequenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.GetChoreographySequenceRequest.displayName = 'proto.bosdyn.api.spot.GetChoreographySequenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.GetChoreographySequenceResponse.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.GetChoreographySequenceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.GetChoreographySequenceResponse.displayName = 'proto.bosdyn.api.spot.GetChoreographySequenceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.GetAnimationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.GetAnimationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.GetAnimationRequest.displayName = 'proto.bosdyn.api.spot.GetAnimationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.GetAnimationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.GetAnimationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.GetAnimationResponse.displayName = 'proto.bosdyn.api.spot.GetAnimationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.DeleteSequenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.DeleteSequenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.DeleteSequenceRequest.displayName = 'proto.bosdyn.api.spot.DeleteSequenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.DeleteSequenceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.DeleteSequenceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.DeleteSequenceResponse.displayName = 'proto.bosdyn.api.spot.DeleteSequenceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.SaveSequenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.SaveSequenceRequest.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.SaveSequenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.SaveSequenceRequest.displayName = 'proto.bosdyn.api.spot.SaveSequenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.SaveSequenceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.SaveSequenceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.SaveSequenceResponse.displayName = 'proto.bosdyn.api.spot.SaveSequenceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.ModifyChoreographyInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.displayName = 'proto.bosdyn.api.spot.ModifyChoreographyInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.ModifyChoreographyInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.displayName = 'proto.bosdyn.api.spot.ModifyChoreographyInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.ClearAllSequenceFilesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ClearAllSequenceFilesRequest.displayName = 'proto.bosdyn.api.spot.ClearAllSequenceFilesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.ClearAllSequenceFilesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.displayName = 'proto.bosdyn.api.spot.ClearAllSequenceFilesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.UploadChoreographyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.UploadChoreographyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.UploadChoreographyRequest.displayName = 'proto.bosdyn.api.spot.UploadChoreographyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.UploadChoreographyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.UploadChoreographyResponse.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.UploadChoreographyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.UploadChoreographyResponse.displayName = 'proto.bosdyn.api.spot.UploadChoreographyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.UploadAnimatedMoveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.UploadAnimatedMoveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.UploadAnimatedMoveRequest.displayName = 'proto.bosdyn.api.spot.UploadAnimatedMoveRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.UploadAnimatedMoveResponse.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.UploadAnimatedMoveResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.UploadAnimatedMoveResponse.displayName = 'proto.bosdyn.api.spot.UploadAnimatedMoveResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.ExecuteChoreographyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ExecuteChoreographyRequest.displayName = 'proto.bosdyn.api.spot.ExecuteChoreographyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ExecuteChoreographyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.ExecuteChoreographyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ExecuteChoreographyResponse.displayName = 'proto.bosdyn.api.spot.ExecuteChoreographyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.StartRecordingStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.StartRecordingStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.StartRecordingStateRequest.displayName = 'proto.bosdyn.api.spot.StartRecordingStateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.StartRecordingStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.StartRecordingStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.StartRecordingStateResponse.displayName = 'proto.bosdyn.api.spot.StartRecordingStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.StopRecordingStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.StopRecordingStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.StopRecordingStateRequest.displayName = 'proto.bosdyn.api.spot.StopRecordingStateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.StopRecordingStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.StopRecordingStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.StopRecordingStateResponse.displayName = 'proto.bosdyn.api.spot.StopRecordingStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.DownloadRobotStateLogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.DownloadRobotStateLogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.DownloadRobotStateLogRequest.displayName = 'proto.bosdyn.api.spot.DownloadRobotStateLogRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.LoggedJoints = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.LoggedJoints, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.LoggedJoints.displayName = 'proto.bosdyn.api.spot.LoggedJoints';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.LoggedFootContacts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.LoggedFootContacts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.LoggedFootContacts.displayName = 'proto.bosdyn.api.spot.LoggedFootContacts';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.LoggedStateKeyFrame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.LoggedStateKeyFrame.displayName = 'proto.bosdyn.api.spot.LoggedStateKeyFrame';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ChoreographyStateLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.ChoreographyStateLog.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.ChoreographyStateLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ChoreographyStateLog.displayName = 'proto.bosdyn.api.spot.ChoreographyStateLog';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.DownloadRobotStateLogResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.DownloadRobotStateLogResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.DownloadRobotStateLogResponse.displayName = 'proto.bosdyn.api.spot.DownloadRobotStateLogResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.MoveParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, proto.bosdyn.api.spot.MoveParams.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.spot.MoveParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.MoveParams.displayName = 'proto.bosdyn.api.spot.MoveParams';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.MoveCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.spot.MoveCommand.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.spot.MoveCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.MoveCommand.displayName = 'proto.bosdyn.api.spot.MoveCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.ChoreographyCommandRequest.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.ChoreographyCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ChoreographyCommandRequest.displayName = 'proto.bosdyn.api.spot.ChoreographyCommandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.ChoreographyCommandResponse.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.ChoreographyCommandResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ChoreographyCommandResponse.displayName = 'proto.bosdyn.api.spot.ChoreographyCommandResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.MoveInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.MoveInfo.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.MoveInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.MoveInfo.displayName = 'proto.bosdyn.api.spot.MoveInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.ChoreographerDisplayInfo.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.ChoreographerDisplayInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ChoreographerDisplayInfo.displayName = 'proto.bosdyn.api.spot.ChoreographerDisplayInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.displayName = 'proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ChoreographySequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.ChoreographySequence.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.ChoreographySequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ChoreographySequence.displayName = 'proto.bosdyn.api.spot.ChoreographySequence';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ChoreographyInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.ChoreographyInfo.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.ChoreographyInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ChoreographyInfo.displayName = 'proto.bosdyn.api.spot.ChoreographyInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ChoreographerSave = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.ChoreographerSave, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ChoreographerSave.displayName = 'proto.bosdyn.api.spot.ChoreographerSave';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.Animation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.Animation.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.Animation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.Animation.displayName = 'proto.bosdyn.api.spot.Animation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.AnimationKeyframe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.AnimationKeyframe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.AnimationKeyframe.displayName = 'proto.bosdyn.api.spot.AnimationKeyframe';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.AnimateGripper = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.AnimateGripper, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.AnimateGripper.displayName = 'proto.bosdyn.api.spot.AnimateGripper';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.AnimateArm = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.spot.AnimateArm.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.spot.AnimateArm, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.AnimateArm.displayName = 'proto.bosdyn.api.spot.AnimateArm';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.AnimateArm.HandPose = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.spot.AnimateArm.HandPose.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.spot.AnimateArm.HandPose, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.AnimateArm.HandPose.displayName = 'proto.bosdyn.api.spot.AnimateArm.HandPose';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ArmJointAngles = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.ArmJointAngles, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ArmJointAngles.displayName = 'proto.bosdyn.api.spot.ArmJointAngles';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.AnimateBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.spot.AnimateBody.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.spot.AnimateBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.AnimateBody.displayName = 'proto.bosdyn.api.spot.AnimateBody';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.AnimateLegs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.AnimateLegs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.AnimateLegs.displayName = 'proto.bosdyn.api.spot.AnimateLegs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.AnimateSingleLeg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.spot.AnimateSingleLeg.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.spot.AnimateSingleLeg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.AnimateSingleLeg.displayName = 'proto.bosdyn.api.spot.AnimateSingleLeg';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.LegJointAngles = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.LegJointAngles, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.LegJointAngles.displayName = 'proto.bosdyn.api.spot.LegJointAngles';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ActiveMove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.spot.ActiveMove.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.spot.ActiveMove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ActiveMove.displayName = 'proto.bosdyn.api.spot.ActiveMove';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ChoreographyStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.ChoreographyStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ChoreographyStatusRequest.displayName = 'proto.bosdyn.api.spot.ChoreographyStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.ChoreographyStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.ChoreographyStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ChoreographyStatusResponse.displayName = 'proto.bosdyn.api.spot.ChoreographyStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.displayName = 'proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.displayName = 'proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.LegSize = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.LegSize, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.LegSize.displayName = 'proto.bosdyn.api.spot.LegSize';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.LegSizeConfigurationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.LegSizeConfigurationRequest.displayName = 'proto.bosdyn.api.spot.LegSizeConfigurationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.LegSizeConfigurationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.LegSizeConfigurationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.LegSizeConfigurationResponse.displayName = 'proto.bosdyn.api.spot.LegSizeConfigurationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.LegSizeConfigurationStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.LegSizeConfigurationStateRequest.displayName = 'proto.bosdyn.api.spot.LegSizeConfigurationStateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.spot.LegSizeConfigurationStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.displayName = 'proto.bosdyn.api.spot.LegSizeConfigurationStateResponse';
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
proto.bosdyn.api.spot.ListAllMovesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ListAllMovesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ListAllMovesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ListAllMovesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.spot.ListAllMovesRequest}
 */
proto.bosdyn.api.spot.ListAllMovesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ListAllMovesRequest;
  return proto.bosdyn.api.spot.ListAllMovesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ListAllMovesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ListAllMovesRequest}
 */
proto.bosdyn.api.spot.ListAllMovesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.spot.ListAllMovesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ListAllMovesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ListAllMovesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ListAllMovesRequest.serializeBinaryToWriter = function(message, writer) {
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
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.ListAllMovesRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.ListAllMovesRequest} returns this
*/
proto.bosdyn.api.spot.ListAllMovesRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ListAllMovesRequest} returns this
 */
proto.bosdyn.api.spot.ListAllMovesRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ListAllMovesRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.ListAllMovesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.ListAllMovesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ListAllMovesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ListAllMovesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ListAllMovesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    movesList: jspb.Message.toObjectList(msg.getMovesList(),
    proto.bosdyn.api.spot.MoveInfo.toObject, includeInstance),
    moveParamConfig: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ListAllMovesResponse}
 */
proto.bosdyn.api.spot.ListAllMovesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ListAllMovesResponse;
  return proto.bosdyn.api.spot.ListAllMovesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ListAllMovesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ListAllMovesResponse}
 */
proto.bosdyn.api.spot.ListAllMovesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bosdyn.api.spot.MoveInfo;
      reader.readMessage(value,proto.bosdyn.api.spot.MoveInfo.deserializeBinaryFromReader);
      msg.addMoves(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMoveParamConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.ListAllMovesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ListAllMovesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ListAllMovesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ListAllMovesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getMovesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bosdyn.api.spot.MoveInfo.serializeBinaryToWriter
    );
  }
  f = message.getMoveParamConfig();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.ListAllMovesResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.ListAllMovesResponse} returns this
*/
proto.bosdyn.api.spot.ListAllMovesResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ListAllMovesResponse} returns this
 */
proto.bosdyn.api.spot.ListAllMovesResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ListAllMovesResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated MoveInfo moves = 2;
 * @return {!Array<!proto.bosdyn.api.spot.MoveInfo>}
 */
proto.bosdyn.api.spot.ListAllMovesResponse.prototype.getMovesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.spot.MoveInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.spot.MoveInfo, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.spot.MoveInfo>} value
 * @return {!proto.bosdyn.api.spot.ListAllMovesResponse} returns this
*/
proto.bosdyn.api.spot.ListAllMovesResponse.prototype.setMovesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.spot.MoveInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.MoveInfo}
 */
proto.bosdyn.api.spot.ListAllMovesResponse.prototype.addMoves = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.spot.MoveInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.ListAllMovesResponse} returns this
 */
proto.bosdyn.api.spot.ListAllMovesResponse.prototype.clearMovesList = function() {
  return this.setMovesList([]);
};


/**
 * optional string move_param_config = 3;
 * @return {string}
 */
proto.bosdyn.api.spot.ListAllMovesResponse.prototype.getMoveParamConfig = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.ListAllMovesResponse} returns this
 */
proto.bosdyn.api.spot.ListAllMovesResponse.prototype.setMoveParamConfig = function(value) {
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
proto.bosdyn.api.spot.ListAllSequencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ListAllSequencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ListAllSequencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ListAllSequencesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.spot.ListAllSequencesRequest}
 */
proto.bosdyn.api.spot.ListAllSequencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ListAllSequencesRequest;
  return proto.bosdyn.api.spot.ListAllSequencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ListAllSequencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ListAllSequencesRequest}
 */
proto.bosdyn.api.spot.ListAllSequencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.spot.ListAllSequencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ListAllSequencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ListAllSequencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ListAllSequencesRequest.serializeBinaryToWriter = function(message, writer) {
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
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.ListAllSequencesRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.ListAllSequencesRequest} returns this
*/
proto.bosdyn.api.spot.ListAllSequencesRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ListAllSequencesRequest} returns this
 */
proto.bosdyn.api.spot.ListAllSequencesRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ListAllSequencesRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.ListAllSequencesResponse.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.ListAllSequencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ListAllSequencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ListAllSequencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ListAllSequencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    knownSequencesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    sequenceInfoList: jspb.Message.toObjectList(msg.getSequenceInfoList(),
    proto.bosdyn.api.spot.SequenceInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ListAllSequencesResponse}
 */
proto.bosdyn.api.spot.ListAllSequencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ListAllSequencesResponse;
  return proto.bosdyn.api.spot.ListAllSequencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ListAllSequencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ListAllSequencesResponse}
 */
proto.bosdyn.api.spot.ListAllSequencesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.addKnownSequences(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.spot.SequenceInfo;
      reader.readMessage(value,proto.bosdyn.api.spot.SequenceInfo.deserializeBinaryFromReader);
      msg.addSequenceInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.ListAllSequencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ListAllSequencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ListAllSequencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ListAllSequencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getKnownSequencesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getSequenceInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bosdyn.api.spot.SequenceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.ListAllSequencesResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.ListAllSequencesResponse} returns this
*/
proto.bosdyn.api.spot.ListAllSequencesResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ListAllSequencesResponse} returns this
 */
proto.bosdyn.api.spot.ListAllSequencesResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ListAllSequencesResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string known_sequences = 2;
 * @return {!Array<string>}
 */
proto.bosdyn.api.spot.ListAllSequencesResponse.prototype.getKnownSequencesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.spot.ListAllSequencesResponse} returns this
 */
proto.bosdyn.api.spot.ListAllSequencesResponse.prototype.setKnownSequencesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.ListAllSequencesResponse} returns this
 */
proto.bosdyn.api.spot.ListAllSequencesResponse.prototype.addKnownSequences = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.ListAllSequencesResponse} returns this
 */
proto.bosdyn.api.spot.ListAllSequencesResponse.prototype.clearKnownSequencesList = function() {
  return this.setKnownSequencesList([]);
};


/**
 * repeated SequenceInfo sequence_info = 3;
 * @return {!Array<!proto.bosdyn.api.spot.SequenceInfo>}
 */
proto.bosdyn.api.spot.ListAllSequencesResponse.prototype.getSequenceInfoList = function() {
  return /** @type{!Array<!proto.bosdyn.api.spot.SequenceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.spot.SequenceInfo, 3));
};


/**
 * @param {!Array<!proto.bosdyn.api.spot.SequenceInfo>} value
 * @return {!proto.bosdyn.api.spot.ListAllSequencesResponse} returns this
*/
proto.bosdyn.api.spot.ListAllSequencesResponse.prototype.setSequenceInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bosdyn.api.spot.SequenceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.SequenceInfo}
 */
proto.bosdyn.api.spot.ListAllSequencesResponse.prototype.addSequenceInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bosdyn.api.spot.SequenceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.ListAllSequencesResponse} returns this
 */
proto.bosdyn.api.spot.ListAllSequencesResponse.prototype.clearSequenceInfoList = function() {
  return this.setSequenceInfoList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.SequenceInfo.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.SequenceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.SequenceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.SequenceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SequenceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    labelsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    savedState: jspb.Message.getFieldWithDefault(msg, 3, 0),
    exitState: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.SequenceInfo}
 */
proto.bosdyn.api.spot.SequenceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.SequenceInfo;
  return proto.bosdyn.api.spot.SequenceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.SequenceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.SequenceInfo}
 */
proto.bosdyn.api.spot.SequenceInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.addLabels(value);
      break;
    case 3:
      var value = /** @type {!proto.bosdyn.api.spot.SequenceInfo.SavedState} */ (reader.readEnum());
      msg.setSavedState(value);
      break;
    case 4:
      var value = /** @type {!proto.bosdyn.api.spot.MoveInfo.TransitionState} */ (reader.readEnum());
      msg.setExitState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.SequenceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.SequenceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.SequenceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SequenceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getSavedState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getExitState();
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
proto.bosdyn.api.spot.SequenceInfo.SavedState = {
  SAVED_STATE_UNKNOWN: 0,
  SAVED_STATE_TEMPORARY: 1,
  SAVED_STATE_RETAINED: 2,
  SAVED_STATE_PERMANENT: 3
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.bosdyn.api.spot.SequenceInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.SequenceInfo} returns this
 */
proto.bosdyn.api.spot.SequenceInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string labels = 2;
 * @return {!Array<string>}
 */
proto.bosdyn.api.spot.SequenceInfo.prototype.getLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.spot.SequenceInfo} returns this
 */
proto.bosdyn.api.spot.SequenceInfo.prototype.setLabelsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.SequenceInfo} returns this
 */
proto.bosdyn.api.spot.SequenceInfo.prototype.addLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.SequenceInfo} returns this
 */
proto.bosdyn.api.spot.SequenceInfo.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * optional SavedState saved_state = 3;
 * @return {!proto.bosdyn.api.spot.SequenceInfo.SavedState}
 */
proto.bosdyn.api.spot.SequenceInfo.prototype.getSavedState = function() {
  return /** @type {!proto.bosdyn.api.spot.SequenceInfo.SavedState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.SequenceInfo.SavedState} value
 * @return {!proto.bosdyn.api.spot.SequenceInfo} returns this
 */
proto.bosdyn.api.spot.SequenceInfo.prototype.setSavedState = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional MoveInfo.TransitionState exit_state = 4;
 * @return {!proto.bosdyn.api.spot.MoveInfo.TransitionState}
 */
proto.bosdyn.api.spot.SequenceInfo.prototype.getExitState = function() {
  return /** @type {!proto.bosdyn.api.spot.MoveInfo.TransitionState} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.MoveInfo.TransitionState} value
 * @return {!proto.bosdyn.api.spot.SequenceInfo} returns this
 */
proto.bosdyn.api.spot.SequenceInfo.prototype.setExitState = function(value) {
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
proto.bosdyn.api.spot.GetChoreographySequenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.GetChoreographySequenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.GetChoreographySequenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.GetChoreographySequenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    sequenceName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    returnAnimationNamesOnly: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceRequest}
 */
proto.bosdyn.api.spot.GetChoreographySequenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.GetChoreographySequenceRequest;
  return proto.bosdyn.api.spot.GetChoreographySequenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.GetChoreographySequenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceRequest}
 */
proto.bosdyn.api.spot.GetChoreographySequenceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSequenceName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReturnAnimationNamesOnly(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.GetChoreographySequenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.GetChoreographySequenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.GetChoreographySequenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.GetChoreographySequenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getSequenceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReturnAnimationNamesOnly();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.GetChoreographySequenceRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceRequest} returns this
*/
proto.bosdyn.api.spot.GetChoreographySequenceRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceRequest} returns this
 */
proto.bosdyn.api.spot.GetChoreographySequenceRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.GetChoreographySequenceRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string sequence_name = 2;
 * @return {string}
 */
proto.bosdyn.api.spot.GetChoreographySequenceRequest.prototype.getSequenceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceRequest} returns this
 */
proto.bosdyn.api.spot.GetChoreographySequenceRequest.prototype.setSequenceName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool return_animation_names_only = 3;
 * @return {boolean}
 */
proto.bosdyn.api.spot.GetChoreographySequenceRequest.prototype.getReturnAnimationNamesOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceRequest} returns this
 */
proto.bosdyn.api.spot.GetChoreographySequenceRequest.prototype.setReturnAnimationNamesOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.GetChoreographySequenceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.GetChoreographySequenceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    choreographySequence: (f = msg.getChoreographySequence()) && proto.bosdyn.api.spot.ChoreographySequence.toObject(includeInstance, f),
    animatedMovesList: jspb.Message.toObjectList(msg.getAnimatedMovesList(),
    proto.bosdyn.api.spot.Animation.toObject, includeInstance),
    animationNamesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceResponse}
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.GetChoreographySequenceResponse;
  return proto.bosdyn.api.spot.GetChoreographySequenceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.GetChoreographySequenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceResponse}
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.spot.GetChoreographySequenceResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.spot.ChoreographySequence;
      reader.readMessage(value,proto.bosdyn.api.spot.ChoreographySequence.deserializeBinaryFromReader);
      msg.setChoreographySequence(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.spot.Animation;
      reader.readMessage(value,proto.bosdyn.api.spot.Animation.deserializeBinaryFromReader);
      msg.addAnimatedMoves(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addAnimationNames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.GetChoreographySequenceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.GetChoreographySequenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getChoreographySequence();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.spot.ChoreographySequence.serializeBinaryToWriter
    );
  }
  f = message.getAnimatedMovesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.bosdyn.api.spot.Animation.serializeBinaryToWriter
    );
  }
  f = message.getAnimationNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_UNKNOWN_SEQUENCE: 2
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceResponse} returns this
*/
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceResponse} returns this
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceResponse.Status}
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.spot.GetChoreographySequenceResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.GetChoreographySequenceResponse.Status} value
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceResponse} returns this
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional ChoreographySequence choreography_sequence = 3;
 * @return {?proto.bosdyn.api.spot.ChoreographySequence}
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.getChoreographySequence = function() {
  return /** @type{?proto.bosdyn.api.spot.ChoreographySequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.ChoreographySequence, 3));
};


/**
 * @param {?proto.bosdyn.api.spot.ChoreographySequence|undefined} value
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceResponse} returns this
*/
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.setChoreographySequence = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceResponse} returns this
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.clearChoreographySequence = function() {
  return this.setChoreographySequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.hasChoreographySequence = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Animation animated_moves = 4;
 * @return {!Array<!proto.bosdyn.api.spot.Animation>}
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.getAnimatedMovesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.spot.Animation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.spot.Animation, 4));
};


/**
 * @param {!Array<!proto.bosdyn.api.spot.Animation>} value
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceResponse} returns this
*/
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.setAnimatedMovesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bosdyn.api.spot.Animation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.Animation}
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.addAnimatedMoves = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bosdyn.api.spot.Animation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceResponse} returns this
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.clearAnimatedMovesList = function() {
  return this.setAnimatedMovesList([]);
};


/**
 * repeated string animation_names = 5;
 * @return {!Array<string>}
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.getAnimationNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceResponse} returns this
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.setAnimationNamesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceResponse} returns this
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.addAnimationNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.GetChoreographySequenceResponse} returns this
 */
proto.bosdyn.api.spot.GetChoreographySequenceResponse.prototype.clearAnimationNamesList = function() {
  return this.setAnimationNamesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.GetAnimationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.GetAnimationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.GetAnimationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.GetAnimationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.GetAnimationRequest}
 */
proto.bosdyn.api.spot.GetAnimationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.GetAnimationRequest;
  return proto.bosdyn.api.spot.GetAnimationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.GetAnimationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.GetAnimationRequest}
 */
proto.bosdyn.api.spot.GetAnimationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.GetAnimationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.GetAnimationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.GetAnimationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.GetAnimationRequest.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.GetAnimationRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.GetAnimationRequest} returns this
*/
proto.bosdyn.api.spot.GetAnimationRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.GetAnimationRequest} returns this
 */
proto.bosdyn.api.spot.GetAnimationRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.GetAnimationRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.bosdyn.api.spot.GetAnimationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.GetAnimationRequest} returns this
 */
proto.bosdyn.api.spot.GetAnimationRequest.prototype.setName = function(value) {
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
proto.bosdyn.api.spot.GetAnimationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.GetAnimationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.GetAnimationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.GetAnimationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    animatedMove: (f = msg.getAnimatedMove()) && proto.bosdyn.api.spot.Animation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.GetAnimationResponse}
 */
proto.bosdyn.api.spot.GetAnimationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.GetAnimationResponse;
  return proto.bosdyn.api.spot.GetAnimationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.GetAnimationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.GetAnimationResponse}
 */
proto.bosdyn.api.spot.GetAnimationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.spot.GetAnimationResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.spot.Animation;
      reader.readMessage(value,proto.bosdyn.api.spot.Animation.deserializeBinaryFromReader);
      msg.setAnimatedMove(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.GetAnimationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.GetAnimationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.GetAnimationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.GetAnimationResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getAnimatedMove();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.spot.Animation.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.GetAnimationResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_UNKNOWN_ANIMATION: 2
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.GetAnimationResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.GetAnimationResponse} returns this
*/
proto.bosdyn.api.spot.GetAnimationResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.GetAnimationResponse} returns this
 */
proto.bosdyn.api.spot.GetAnimationResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.GetAnimationResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.spot.GetAnimationResponse.Status}
 */
proto.bosdyn.api.spot.GetAnimationResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.spot.GetAnimationResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.GetAnimationResponse.Status} value
 * @return {!proto.bosdyn.api.spot.GetAnimationResponse} returns this
 */
proto.bosdyn.api.spot.GetAnimationResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Animation animated_move = 3;
 * @return {?proto.bosdyn.api.spot.Animation}
 */
proto.bosdyn.api.spot.GetAnimationResponse.prototype.getAnimatedMove = function() {
  return /** @type{?proto.bosdyn.api.spot.Animation} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Animation, 3));
};


/**
 * @param {?proto.bosdyn.api.spot.Animation|undefined} value
 * @return {!proto.bosdyn.api.spot.GetAnimationResponse} returns this
*/
proto.bosdyn.api.spot.GetAnimationResponse.prototype.setAnimatedMove = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.GetAnimationResponse} returns this
 */
proto.bosdyn.api.spot.GetAnimationResponse.prototype.clearAnimatedMove = function() {
  return this.setAnimatedMove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.GetAnimationResponse.prototype.hasAnimatedMove = function() {
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
proto.bosdyn.api.spot.DeleteSequenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.DeleteSequenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.DeleteSequenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.DeleteSequenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    sequenceName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.DeleteSequenceRequest}
 */
proto.bosdyn.api.spot.DeleteSequenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.DeleteSequenceRequest;
  return proto.bosdyn.api.spot.DeleteSequenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.DeleteSequenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.DeleteSequenceRequest}
 */
proto.bosdyn.api.spot.DeleteSequenceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.spot.DeleteSequenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.DeleteSequenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.DeleteSequenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.DeleteSequenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getSequenceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.DeleteSequenceRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.DeleteSequenceRequest} returns this
*/
proto.bosdyn.api.spot.DeleteSequenceRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.DeleteSequenceRequest} returns this
 */
proto.bosdyn.api.spot.DeleteSequenceRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.DeleteSequenceRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string sequence_name = 2;
 * @return {string}
 */
proto.bosdyn.api.spot.DeleteSequenceRequest.prototype.getSequenceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.DeleteSequenceRequest} returns this
 */
proto.bosdyn.api.spot.DeleteSequenceRequest.prototype.setSequenceName = function(value) {
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
proto.bosdyn.api.spot.DeleteSequenceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.DeleteSequenceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.DeleteSequenceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.DeleteSequenceResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.spot.DeleteSequenceResponse}
 */
proto.bosdyn.api.spot.DeleteSequenceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.DeleteSequenceResponse;
  return proto.bosdyn.api.spot.DeleteSequenceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.DeleteSequenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.DeleteSequenceResponse}
 */
proto.bosdyn.api.spot.DeleteSequenceResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.spot.DeleteSequenceResponse.Status} */ (reader.readEnum());
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
proto.bosdyn.api.spot.DeleteSequenceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.DeleteSequenceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.DeleteSequenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.DeleteSequenceResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.spot.DeleteSequenceResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_UNKNOWN_SEQUENCE: 2,
  STATUS_ALREADY_TEMPORARY: 3,
  STATUS_PERMANENT_SEQUENCE: 4
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.DeleteSequenceResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.DeleteSequenceResponse} returns this
*/
proto.bosdyn.api.spot.DeleteSequenceResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.DeleteSequenceResponse} returns this
 */
proto.bosdyn.api.spot.DeleteSequenceResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.DeleteSequenceResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.spot.DeleteSequenceResponse.Status}
 */
proto.bosdyn.api.spot.DeleteSequenceResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.spot.DeleteSequenceResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.DeleteSequenceResponse.Status} value
 * @return {!proto.bosdyn.api.spot.DeleteSequenceResponse} returns this
 */
proto.bosdyn.api.spot.DeleteSequenceResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.SaveSequenceRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.SaveSequenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.SaveSequenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.SaveSequenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SaveSequenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    sequenceName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    addLabelsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.SaveSequenceRequest}
 */
proto.bosdyn.api.spot.SaveSequenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.SaveSequenceRequest;
  return proto.bosdyn.api.spot.SaveSequenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.SaveSequenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.SaveSequenceRequest}
 */
proto.bosdyn.api.spot.SaveSequenceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSequenceName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddLabels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.SaveSequenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.SaveSequenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.SaveSequenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SaveSequenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getSequenceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.SaveSequenceRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.SaveSequenceRequest} returns this
*/
proto.bosdyn.api.spot.SaveSequenceRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SaveSequenceRequest} returns this
 */
proto.bosdyn.api.spot.SaveSequenceRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SaveSequenceRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string sequence_name = 2;
 * @return {string}
 */
proto.bosdyn.api.spot.SaveSequenceRequest.prototype.getSequenceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.SaveSequenceRequest} returns this
 */
proto.bosdyn.api.spot.SaveSequenceRequest.prototype.setSequenceName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string add_labels = 3;
 * @return {!Array<string>}
 */
proto.bosdyn.api.spot.SaveSequenceRequest.prototype.getAddLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.spot.SaveSequenceRequest} returns this
 */
proto.bosdyn.api.spot.SaveSequenceRequest.prototype.setAddLabelsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.SaveSequenceRequest} returns this
 */
proto.bosdyn.api.spot.SaveSequenceRequest.prototype.addAddLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.SaveSequenceRequest} returns this
 */
proto.bosdyn.api.spot.SaveSequenceRequest.prototype.clearAddLabelsList = function() {
  return this.setAddLabelsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.SaveSequenceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.SaveSequenceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.SaveSequenceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SaveSequenceResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.spot.SaveSequenceResponse}
 */
proto.bosdyn.api.spot.SaveSequenceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.SaveSequenceResponse;
  return proto.bosdyn.api.spot.SaveSequenceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.SaveSequenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.SaveSequenceResponse}
 */
proto.bosdyn.api.spot.SaveSequenceResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.spot.SaveSequenceResponse.Status} */ (reader.readEnum());
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
proto.bosdyn.api.spot.SaveSequenceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.SaveSequenceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.SaveSequenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.SaveSequenceResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.spot.SaveSequenceResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_UNKNOWN_SEQUENCE: 2,
  STATUS_PERMANENT_SEQUENCE: 3,
  STATUS_FAILED_TO_SAVE: 4
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.SaveSequenceResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.SaveSequenceResponse} returns this
*/
proto.bosdyn.api.spot.SaveSequenceResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.SaveSequenceResponse} returns this
 */
proto.bosdyn.api.spot.SaveSequenceResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.SaveSequenceResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.spot.SaveSequenceResponse.Status}
 */
proto.bosdyn.api.spot.SaveSequenceResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.spot.SaveSequenceResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.SaveSequenceResponse.Status} value
 * @return {!proto.bosdyn.api.spot.SaveSequenceResponse} returns this
 */
proto.bosdyn.api.spot.SaveSequenceResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ModifyChoreographyInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    sequenceName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    addLabelsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    removeLabelsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ModifyChoreographyInfoRequest}
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ModifyChoreographyInfoRequest;
  return proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ModifyChoreographyInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ModifyChoreographyInfoRequest}
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSequenceName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddLabels(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addRemoveLabels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ModifyChoreographyInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getSequenceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getRemoveLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.ModifyChoreographyInfoRequest} returns this
*/
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ModifyChoreographyInfoRequest} returns this
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string sequence_name = 2;
 * @return {string}
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.prototype.getSequenceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.ModifyChoreographyInfoRequest} returns this
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.prototype.setSequenceName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string add_labels = 3;
 * @return {!Array<string>}
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.prototype.getAddLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.spot.ModifyChoreographyInfoRequest} returns this
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.prototype.setAddLabelsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.ModifyChoreographyInfoRequest} returns this
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.prototype.addAddLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.ModifyChoreographyInfoRequest} returns this
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.prototype.clearAddLabelsList = function() {
  return this.setAddLabelsList([]);
};


/**
 * repeated string remove_labels = 4;
 * @return {!Array<string>}
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.prototype.getRemoveLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.spot.ModifyChoreographyInfoRequest} returns this
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.prototype.setRemoveLabelsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.ModifyChoreographyInfoRequest} returns this
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.prototype.addRemoveLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.ModifyChoreographyInfoRequest} returns this
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoRequest.prototype.clearRemoveLabelsList = function() {
  return this.setRemoveLabelsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ModifyChoreographyInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.spot.ModifyChoreographyInfoResponse}
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ModifyChoreographyInfoResponse;
  return proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ModifyChoreographyInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ModifyChoreographyInfoResponse}
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.Status} */ (reader.readEnum());
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
proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ModifyChoreographyInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_UNKNOWN_SEQUENCE: 2,
  STATUS_PERMANENT_SEQUENCE: 3,
  STATUS_FAILED_TO_UPDATE: 4
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.ModifyChoreographyInfoResponse} returns this
*/
proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ModifyChoreographyInfoResponse} returns this
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.Status}
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.Status} value
 * @return {!proto.bosdyn.api.spot.ModifyChoreographyInfoResponse} returns this
 */
proto.bosdyn.api.spot.ModifyChoreographyInfoResponse.prototype.setStatus = function(value) {
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
proto.bosdyn.api.spot.ClearAllSequenceFilesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ClearAllSequenceFilesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ClearAllSequenceFilesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.spot.ClearAllSequenceFilesRequest}
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ClearAllSequenceFilesRequest;
  return proto.bosdyn.api.spot.ClearAllSequenceFilesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ClearAllSequenceFilesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ClearAllSequenceFilesRequest}
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.spot.ClearAllSequenceFilesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ClearAllSequenceFilesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ClearAllSequenceFilesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesRequest.serializeBinaryToWriter = function(message, writer) {
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
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.ClearAllSequenceFilesRequest} returns this
*/
proto.bosdyn.api.spot.ClearAllSequenceFilesRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ClearAllSequenceFilesRequest} returns this
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesRequest.prototype.hasHeader = function() {
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
proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ClearAllSequenceFilesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.spot.ClearAllSequenceFilesResponse}
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ClearAllSequenceFilesResponse;
  return proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ClearAllSequenceFilesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ClearAllSequenceFilesResponse}
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.Status} */ (reader.readEnum());
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
proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ClearAllSequenceFilesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_FAILED_TO_DELETE: 2
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.ClearAllSequenceFilesResponse} returns this
*/
proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ClearAllSequenceFilesResponse} returns this
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.Status}
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.Status} value
 * @return {!proto.bosdyn.api.spot.ClearAllSequenceFilesResponse} returns this
 */
proto.bosdyn.api.spot.ClearAllSequenceFilesResponse.prototype.setStatus = function(value) {
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
proto.bosdyn.api.spot.UploadChoreographyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.UploadChoreographyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.UploadChoreographyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.UploadChoreographyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    choreographySequence: (f = msg.getChoreographySequence()) && proto.bosdyn.api.spot.ChoreographySequence.toObject(includeInstance, f),
    nonStrictParsing: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.UploadChoreographyRequest}
 */
proto.bosdyn.api.spot.UploadChoreographyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.UploadChoreographyRequest;
  return proto.bosdyn.api.spot.UploadChoreographyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.UploadChoreographyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.UploadChoreographyRequest}
 */
proto.bosdyn.api.spot.UploadChoreographyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bosdyn.api.spot.ChoreographySequence;
      reader.readMessage(value,proto.bosdyn.api.spot.ChoreographySequence.deserializeBinaryFromReader);
      msg.setChoreographySequence(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNonStrictParsing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.UploadChoreographyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.UploadChoreographyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.UploadChoreographyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.UploadChoreographyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getChoreographySequence();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.spot.ChoreographySequence.serializeBinaryToWriter
    );
  }
  f = message.getNonStrictParsing();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.UploadChoreographyRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.UploadChoreographyRequest} returns this
*/
proto.bosdyn.api.spot.UploadChoreographyRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.UploadChoreographyRequest} returns this
 */
proto.bosdyn.api.spot.UploadChoreographyRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.UploadChoreographyRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ChoreographySequence choreography_sequence = 2;
 * @return {?proto.bosdyn.api.spot.ChoreographySequence}
 */
proto.bosdyn.api.spot.UploadChoreographyRequest.prototype.getChoreographySequence = function() {
  return /** @type{?proto.bosdyn.api.spot.ChoreographySequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.ChoreographySequence, 2));
};


/**
 * @param {?proto.bosdyn.api.spot.ChoreographySequence|undefined} value
 * @return {!proto.bosdyn.api.spot.UploadChoreographyRequest} returns this
*/
proto.bosdyn.api.spot.UploadChoreographyRequest.prototype.setChoreographySequence = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.UploadChoreographyRequest} returns this
 */
proto.bosdyn.api.spot.UploadChoreographyRequest.prototype.clearChoreographySequence = function() {
  return this.setChoreographySequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.UploadChoreographyRequest.prototype.hasChoreographySequence = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool non_strict_parsing = 3;
 * @return {boolean}
 */
proto.bosdyn.api.spot.UploadChoreographyRequest.prototype.getNonStrictParsing = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.UploadChoreographyRequest} returns this
 */
proto.bosdyn.api.spot.UploadChoreographyRequest.prototype.setNonStrictParsing = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.UploadChoreographyResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.UploadChoreographyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.UploadChoreographyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.UploadChoreographyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.UploadChoreographyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    warningsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.UploadChoreographyResponse}
 */
proto.bosdyn.api.spot.UploadChoreographyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.UploadChoreographyResponse;
  return proto.bosdyn.api.spot.UploadChoreographyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.UploadChoreographyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.UploadChoreographyResponse}
 */
proto.bosdyn.api.spot.UploadChoreographyResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addWarnings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.UploadChoreographyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.UploadChoreographyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.UploadChoreographyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.UploadChoreographyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getWarningsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.UploadChoreographyResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.UploadChoreographyResponse} returns this
*/
proto.bosdyn.api.spot.UploadChoreographyResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.UploadChoreographyResponse} returns this
 */
proto.bosdyn.api.spot.UploadChoreographyResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.UploadChoreographyResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string warnings = 3;
 * @return {!Array<string>}
 */
proto.bosdyn.api.spot.UploadChoreographyResponse.prototype.getWarningsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.spot.UploadChoreographyResponse} returns this
 */
proto.bosdyn.api.spot.UploadChoreographyResponse.prototype.setWarningsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.UploadChoreographyResponse} returns this
 */
proto.bosdyn.api.spot.UploadChoreographyResponse.prototype.addWarnings = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.UploadChoreographyResponse} returns this
 */
proto.bosdyn.api.spot.UploadChoreographyResponse.prototype.clearWarningsList = function() {
  return this.setWarningsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.UploadAnimatedMoveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.UploadAnimatedMoveRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    animatedMoveGeneratedId: (f = msg.getAnimatedMoveGeneratedId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    animatedMove: (f = msg.getAnimatedMove()) && proto.bosdyn.api.spot.Animation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.UploadAnimatedMoveRequest}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.UploadAnimatedMoveRequest;
  return proto.bosdyn.api.spot.UploadAnimatedMoveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.UploadAnimatedMoveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.UploadAnimatedMoveRequest}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAnimatedMoveGeneratedId(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.spot.Animation;
      reader.readMessage(value,proto.bosdyn.api.spot.Animation.deserializeBinaryFromReader);
      msg.setAnimatedMove(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.UploadAnimatedMoveRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.UploadAnimatedMoveRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getAnimatedMoveGeneratedId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getAnimatedMove();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.spot.Animation.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.UploadAnimatedMoveRequest} returns this
*/
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.UploadAnimatedMoveRequest} returns this
 */
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.StringValue animated_move_generated_id = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.prototype.getAnimatedMoveGeneratedId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.bosdyn.api.spot.UploadAnimatedMoveRequest} returns this
*/
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.prototype.setAnimatedMoveGeneratedId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.UploadAnimatedMoveRequest} returns this
 */
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.prototype.clearAnimatedMoveGeneratedId = function() {
  return this.setAnimatedMoveGeneratedId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.prototype.hasAnimatedMoveGeneratedId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Animation animated_move = 2;
 * @return {?proto.bosdyn.api.spot.Animation}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.prototype.getAnimatedMove = function() {
  return /** @type{?proto.bosdyn.api.spot.Animation} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.Animation, 2));
};


/**
 * @param {?proto.bosdyn.api.spot.Animation|undefined} value
 * @return {!proto.bosdyn.api.spot.UploadAnimatedMoveRequest} returns this
*/
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.prototype.setAnimatedMove = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.UploadAnimatedMoveRequest} returns this
 */
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.prototype.clearAnimatedMove = function() {
  return this.setAnimatedMove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveRequest.prototype.hasAnimatedMove = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.UploadAnimatedMoveResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.UploadAnimatedMoveResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    warningsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.UploadAnimatedMoveResponse}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.UploadAnimatedMoveResponse;
  return proto.bosdyn.api.spot.UploadAnimatedMoveResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.UploadAnimatedMoveResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.UploadAnimatedMoveResponse}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.spot.UploadAnimatedMoveResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addWarnings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.UploadAnimatedMoveResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.UploadAnimatedMoveResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getWarningsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_ANIMATION_VALIDATION_FAILED: 2,
  STATUS_PING_RESPONSE: 3
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.UploadAnimatedMoveResponse} returns this
*/
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.UploadAnimatedMoveResponse} returns this
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.spot.UploadAnimatedMoveResponse.Status}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.spot.UploadAnimatedMoveResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.UploadAnimatedMoveResponse.Status} value
 * @return {!proto.bosdyn.api.spot.UploadAnimatedMoveResponse} returns this
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated string warnings = 3;
 * @return {!Array<string>}
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.prototype.getWarningsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.spot.UploadAnimatedMoveResponse} returns this
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.prototype.setWarningsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.UploadAnimatedMoveResponse} returns this
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.prototype.addWarnings = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.UploadAnimatedMoveResponse} returns this
 */
proto.bosdyn.api.spot.UploadAnimatedMoveResponse.prototype.clearWarningsList = function() {
  return this.setWarningsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ExecuteChoreographyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ExecuteChoreographyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    choreographySequenceName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    choreographyStartingSlice: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    lease: (f = msg.getLease()) && bosdyn_api_lease_pb.Lease.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyRequest}
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ExecuteChoreographyRequest;
  return proto.bosdyn.api.spot.ExecuteChoreographyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ExecuteChoreographyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyRequest}
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setChoreographySequenceName(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChoreographyStartingSlice(value);
      break;
    case 6:
      var value = new bosdyn_api_lease_pb.Lease;
      reader.readMessage(value,bosdyn_api_lease_pb.Lease.deserializeBinaryFromReader);
      msg.setLease(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ExecuteChoreographyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ExecuteChoreographyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getChoreographySequenceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getChoreographyStartingSlice();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getLease();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      bosdyn_api_lease_pb.Lease.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyRequest} returns this
*/
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyRequest} returns this
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string choreography_sequence_name = 2;
 * @return {string}
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.getChoreographySequenceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyRequest} returns this
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.setChoreographySequenceName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyRequest} returns this
*/
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyRequest} returns this
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double choreography_starting_slice = 4;
 * @return {number}
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.getChoreographyStartingSlice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyRequest} returns this
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.setChoreographyStartingSlice = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional bosdyn.api.Lease lease = 6;
 * @return {?proto.bosdyn.api.Lease}
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.getLease = function() {
  return /** @type{?proto.bosdyn.api.Lease} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_lease_pb.Lease, 6));
};


/**
 * @param {?proto.bosdyn.api.Lease|undefined} value
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyRequest} returns this
*/
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.setLease = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyRequest} returns this
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.clearLease = function() {
  return this.setLease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ExecuteChoreographyRequest.prototype.hasLease = function() {
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
proto.bosdyn.api.spot.ExecuteChoreographyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ExecuteChoreographyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ExecuteChoreographyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ExecuteChoreographyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    leaseUseResult: (f = msg.getLeaseUseResult()) && bosdyn_api_lease_pb.LeaseUseResult.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    executionId: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyResponse}
 */
proto.bosdyn.api.spot.ExecuteChoreographyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ExecuteChoreographyResponse;
  return proto.bosdyn.api.spot.ExecuteChoreographyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ExecuteChoreographyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyResponse}
 */
proto.bosdyn.api.spot.ExecuteChoreographyResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new bosdyn_api_lease_pb.LeaseUseResult;
      reader.readMessage(value,bosdyn_api_lease_pb.LeaseUseResult.deserializeBinaryFromReader);
      msg.setLeaseUseResult(value);
      break;
    case 3:
      var value = /** @type {!proto.bosdyn.api.spot.ExecuteChoreographyResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExecutionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.ExecuteChoreographyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ExecuteChoreographyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ExecuteChoreographyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ExecuteChoreographyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getLeaseUseResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_lease_pb.LeaseUseResult.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getExecutionId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.ExecuteChoreographyResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_INVALID_UPLOADED_CHOREOGRAPHY: 2,
  STATUS_ROBOT_COMMAND_ISSUES: 3,
  STATUS_LEASE_ERROR: 4,
  STATUS_UNKNOWN_SEQUENCE: 5
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.ExecuteChoreographyResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyResponse} returns this
*/
proto.bosdyn.api.spot.ExecuteChoreographyResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyResponse} returns this
 */
proto.bosdyn.api.spot.ExecuteChoreographyResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ExecuteChoreographyResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.LeaseUseResult lease_use_result = 2;
 * @return {?proto.bosdyn.api.LeaseUseResult}
 */
proto.bosdyn.api.spot.ExecuteChoreographyResponse.prototype.getLeaseUseResult = function() {
  return /** @type{?proto.bosdyn.api.LeaseUseResult} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_lease_pb.LeaseUseResult, 2));
};


/**
 * @param {?proto.bosdyn.api.LeaseUseResult|undefined} value
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyResponse} returns this
*/
proto.bosdyn.api.spot.ExecuteChoreographyResponse.prototype.setLeaseUseResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyResponse} returns this
 */
proto.bosdyn.api.spot.ExecuteChoreographyResponse.prototype.clearLeaseUseResult = function() {
  return this.setLeaseUseResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ExecuteChoreographyResponse.prototype.hasLeaseUseResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Status status = 3;
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyResponse.Status}
 */
proto.bosdyn.api.spot.ExecuteChoreographyResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.spot.ExecuteChoreographyResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.ExecuteChoreographyResponse.Status} value
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyResponse} returns this
 */
proto.bosdyn.api.spot.ExecuteChoreographyResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int32 execution_id = 4;
 * @return {number}
 */
proto.bosdyn.api.spot.ExecuteChoreographyResponse.prototype.getExecutionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.ExecuteChoreographyResponse} returns this
 */
proto.bosdyn.api.spot.ExecuteChoreographyResponse.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.StartRecordingStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.StartRecordingStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.StartRecordingStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.StartRecordingStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    continueRecordingDuration: (f = msg.getContinueRecordingDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    recordingSessionId: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.StartRecordingStateRequest}
 */
proto.bosdyn.api.spot.StartRecordingStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.StartRecordingStateRequest;
  return proto.bosdyn.api.spot.StartRecordingStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.StartRecordingStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.StartRecordingStateRequest}
 */
proto.bosdyn.api.spot.StartRecordingStateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setContinueRecordingDuration(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRecordingSessionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.StartRecordingStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.StartRecordingStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.StartRecordingStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.StartRecordingStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getContinueRecordingDuration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getRecordingSessionId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.StartRecordingStateRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.StartRecordingStateRequest} returns this
*/
proto.bosdyn.api.spot.StartRecordingStateRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StartRecordingStateRequest} returns this
 */
proto.bosdyn.api.spot.StartRecordingStateRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StartRecordingStateRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration continue_recording_duration = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.spot.StartRecordingStateRequest.prototype.getContinueRecordingDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.spot.StartRecordingStateRequest} returns this
*/
proto.bosdyn.api.spot.StartRecordingStateRequest.prototype.setContinueRecordingDuration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StartRecordingStateRequest} returns this
 */
proto.bosdyn.api.spot.StartRecordingStateRequest.prototype.clearContinueRecordingDuration = function() {
  return this.setContinueRecordingDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StartRecordingStateRequest.prototype.hasContinueRecordingDuration = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 recording_session_id = 3;
 * @return {number}
 */
proto.bosdyn.api.spot.StartRecordingStateRequest.prototype.getRecordingSessionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.StartRecordingStateRequest} returns this
 */
proto.bosdyn.api.spot.StartRecordingStateRequest.prototype.setRecordingSessionId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.StartRecordingStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.StartRecordingStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.StartRecordingStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.StartRecordingStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    recordingSessionId: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.StartRecordingStateResponse}
 */
proto.bosdyn.api.spot.StartRecordingStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.StartRecordingStateResponse;
  return proto.bosdyn.api.spot.StartRecordingStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.StartRecordingStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.StartRecordingStateResponse}
 */
proto.bosdyn.api.spot.StartRecordingStateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.spot.StartRecordingStateResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRecordingSessionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.StartRecordingStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.StartRecordingStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.StartRecordingStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.StartRecordingStateResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getRecordingSessionId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.StartRecordingStateResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_UNKNOWN_RECORDING_SESSION_ID: 2,
  STATUS_RECORDING_BUFFER_FULL: 3
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.StartRecordingStateResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.StartRecordingStateResponse} returns this
*/
proto.bosdyn.api.spot.StartRecordingStateResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StartRecordingStateResponse} returns this
 */
proto.bosdyn.api.spot.StartRecordingStateResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StartRecordingStateResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.spot.StartRecordingStateResponse.Status}
 */
proto.bosdyn.api.spot.StartRecordingStateResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.spot.StartRecordingStateResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.StartRecordingStateResponse.Status} value
 * @return {!proto.bosdyn.api.spot.StartRecordingStateResponse} returns this
 */
proto.bosdyn.api.spot.StartRecordingStateResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint64 recording_session_id = 3;
 * @return {number}
 */
proto.bosdyn.api.spot.StartRecordingStateResponse.prototype.getRecordingSessionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.StartRecordingStateResponse} returns this
 */
proto.bosdyn.api.spot.StartRecordingStateResponse.prototype.setRecordingSessionId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.StopRecordingStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.StopRecordingStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.StopRecordingStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.StopRecordingStateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.spot.StopRecordingStateRequest}
 */
proto.bosdyn.api.spot.StopRecordingStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.StopRecordingStateRequest;
  return proto.bosdyn.api.spot.StopRecordingStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.StopRecordingStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.StopRecordingStateRequest}
 */
proto.bosdyn.api.spot.StopRecordingStateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.spot.StopRecordingStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.StopRecordingStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.StopRecordingStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.StopRecordingStateRequest.serializeBinaryToWriter = function(message, writer) {
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
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.StopRecordingStateRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.StopRecordingStateRequest} returns this
*/
proto.bosdyn.api.spot.StopRecordingStateRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StopRecordingStateRequest} returns this
 */
proto.bosdyn.api.spot.StopRecordingStateRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StopRecordingStateRequest.prototype.hasHeader = function() {
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
proto.bosdyn.api.spot.StopRecordingStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.StopRecordingStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.StopRecordingStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.StopRecordingStateResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.spot.StopRecordingStateResponse}
 */
proto.bosdyn.api.spot.StopRecordingStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.StopRecordingStateResponse;
  return proto.bosdyn.api.spot.StopRecordingStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.StopRecordingStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.StopRecordingStateResponse}
 */
proto.bosdyn.api.spot.StopRecordingStateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.spot.StopRecordingStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.StopRecordingStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.StopRecordingStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.StopRecordingStateResponse.serializeBinaryToWriter = function(message, writer) {
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
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.StopRecordingStateResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.StopRecordingStateResponse} returns this
*/
proto.bosdyn.api.spot.StopRecordingStateResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.StopRecordingStateResponse} returns this
 */
proto.bosdyn.api.spot.StopRecordingStateResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.StopRecordingStateResponse.prototype.hasHeader = function() {
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
proto.bosdyn.api.spot.DownloadRobotStateLogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.DownloadRobotStateLogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.DownloadRobotStateLogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.DownloadRobotStateLogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    logType: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.DownloadRobotStateLogRequest}
 */
proto.bosdyn.api.spot.DownloadRobotStateLogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.DownloadRobotStateLogRequest;
  return proto.bosdyn.api.spot.DownloadRobotStateLogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.DownloadRobotStateLogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.DownloadRobotStateLogRequest}
 */
proto.bosdyn.api.spot.DownloadRobotStateLogRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.spot.DownloadRobotStateLogRequest.LogType} */ (reader.readEnum());
      msg.setLogType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.DownloadRobotStateLogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.DownloadRobotStateLogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.DownloadRobotStateLogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.DownloadRobotStateLogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getLogType();
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
proto.bosdyn.api.spot.DownloadRobotStateLogRequest.LogType = {
  LOG_TYPE_UNKNOWN: 0,
  LOG_TYPE_MANUAL: 1,
  LOG_TYPE_LAST_CHOREOGRAPHY: 2
};

/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.DownloadRobotStateLogRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.DownloadRobotStateLogRequest} returns this
*/
proto.bosdyn.api.spot.DownloadRobotStateLogRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.DownloadRobotStateLogRequest} returns this
 */
proto.bosdyn.api.spot.DownloadRobotStateLogRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.DownloadRobotStateLogRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LogType log_type = 2;
 * @return {!proto.bosdyn.api.spot.DownloadRobotStateLogRequest.LogType}
 */
proto.bosdyn.api.spot.DownloadRobotStateLogRequest.prototype.getLogType = function() {
  return /** @type {!proto.bosdyn.api.spot.DownloadRobotStateLogRequest.LogType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.DownloadRobotStateLogRequest.LogType} value
 * @return {!proto.bosdyn.api.spot.DownloadRobotStateLogRequest} returns this
 */
proto.bosdyn.api.spot.DownloadRobotStateLogRequest.prototype.setLogType = function(value) {
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
proto.bosdyn.api.spot.LoggedJoints.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.LoggedJoints.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.LoggedJoints} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LoggedJoints.toObject = function(includeInstance, msg) {
  var f, obj = {
    fl: (f = msg.getFl()) && proto.bosdyn.api.spot.LegJointAngles.toObject(includeInstance, f),
    fr: (f = msg.getFr()) && proto.bosdyn.api.spot.LegJointAngles.toObject(includeInstance, f),
    hl: (f = msg.getHl()) && proto.bosdyn.api.spot.LegJointAngles.toObject(includeInstance, f),
    hr: (f = msg.getHr()) && proto.bosdyn.api.spot.LegJointAngles.toObject(includeInstance, f),
    arm: (f = msg.getArm()) && proto.bosdyn.api.spot.ArmJointAngles.toObject(includeInstance, f),
    gripperAngle: (f = msg.getGripperAngle()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.LoggedJoints}
 */
proto.bosdyn.api.spot.LoggedJoints.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.LoggedJoints;
  return proto.bosdyn.api.spot.LoggedJoints.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.LoggedJoints} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.LoggedJoints}
 */
proto.bosdyn.api.spot.LoggedJoints.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.LegJointAngles;
      reader.readMessage(value,proto.bosdyn.api.spot.LegJointAngles.deserializeBinaryFromReader);
      msg.setFl(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.spot.LegJointAngles;
      reader.readMessage(value,proto.bosdyn.api.spot.LegJointAngles.deserializeBinaryFromReader);
      msg.setFr(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.spot.LegJointAngles;
      reader.readMessage(value,proto.bosdyn.api.spot.LegJointAngles.deserializeBinaryFromReader);
      msg.setHl(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.spot.LegJointAngles;
      reader.readMessage(value,proto.bosdyn.api.spot.LegJointAngles.deserializeBinaryFromReader);
      msg.setHr(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.spot.ArmJointAngles;
      reader.readMessage(value,proto.bosdyn.api.spot.ArmJointAngles.deserializeBinaryFromReader);
      msg.setArm(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setGripperAngle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.LoggedJoints.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.LoggedJoints} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LoggedJoints.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFl();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.LegJointAngles.serializeBinaryToWriter
    );
  }
  f = message.getFr();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.spot.LegJointAngles.serializeBinaryToWriter
    );
  }
  f = message.getHl();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.spot.LegJointAngles.serializeBinaryToWriter
    );
  }
  f = message.getHr();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.spot.LegJointAngles.serializeBinaryToWriter
    );
  }
  f = message.getArm();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.spot.ArmJointAngles.serializeBinaryToWriter
    );
  }
  f = message.getGripperAngle();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional LegJointAngles fl = 1;
 * @return {?proto.bosdyn.api.spot.LegJointAngles}
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.getFl = function() {
  return /** @type{?proto.bosdyn.api.spot.LegJointAngles} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.LegJointAngles, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.LegJointAngles|undefined} value
 * @return {!proto.bosdyn.api.spot.LoggedJoints} returns this
*/
proto.bosdyn.api.spot.LoggedJoints.prototype.setFl = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LoggedJoints} returns this
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.clearFl = function() {
  return this.setFl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.hasFl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LegJointAngles fr = 2;
 * @return {?proto.bosdyn.api.spot.LegJointAngles}
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.getFr = function() {
  return /** @type{?proto.bosdyn.api.spot.LegJointAngles} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.LegJointAngles, 2));
};


/**
 * @param {?proto.bosdyn.api.spot.LegJointAngles|undefined} value
 * @return {!proto.bosdyn.api.spot.LoggedJoints} returns this
*/
proto.bosdyn.api.spot.LoggedJoints.prototype.setFr = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LoggedJoints} returns this
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.clearFr = function() {
  return this.setFr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.hasFr = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LegJointAngles hl = 3;
 * @return {?proto.bosdyn.api.spot.LegJointAngles}
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.getHl = function() {
  return /** @type{?proto.bosdyn.api.spot.LegJointAngles} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.LegJointAngles, 3));
};


/**
 * @param {?proto.bosdyn.api.spot.LegJointAngles|undefined} value
 * @return {!proto.bosdyn.api.spot.LoggedJoints} returns this
*/
proto.bosdyn.api.spot.LoggedJoints.prototype.setHl = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LoggedJoints} returns this
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.clearHl = function() {
  return this.setHl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.hasHl = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional LegJointAngles hr = 4;
 * @return {?proto.bosdyn.api.spot.LegJointAngles}
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.getHr = function() {
  return /** @type{?proto.bosdyn.api.spot.LegJointAngles} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.LegJointAngles, 4));
};


/**
 * @param {?proto.bosdyn.api.spot.LegJointAngles|undefined} value
 * @return {!proto.bosdyn.api.spot.LoggedJoints} returns this
*/
proto.bosdyn.api.spot.LoggedJoints.prototype.setHr = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LoggedJoints} returns this
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.clearHr = function() {
  return this.setHr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.hasHr = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ArmJointAngles arm = 5;
 * @return {?proto.bosdyn.api.spot.ArmJointAngles}
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.getArm = function() {
  return /** @type{?proto.bosdyn.api.spot.ArmJointAngles} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.ArmJointAngles, 5));
};


/**
 * @param {?proto.bosdyn.api.spot.ArmJointAngles|undefined} value
 * @return {!proto.bosdyn.api.spot.LoggedJoints} returns this
*/
proto.bosdyn.api.spot.LoggedJoints.prototype.setArm = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LoggedJoints} returns this
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.clearArm = function() {
  return this.setArm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.hasArm = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue gripper_angle = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.getGripperAngle = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.LoggedJoints} returns this
*/
proto.bosdyn.api.spot.LoggedJoints.prototype.setGripperAngle = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LoggedJoints} returns this
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.clearGripperAngle = function() {
  return this.setGripperAngle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LoggedJoints.prototype.hasGripperAngle = function() {
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
proto.bosdyn.api.spot.LoggedFootContacts.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.LoggedFootContacts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.LoggedFootContacts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LoggedFootContacts.toObject = function(includeInstance, msg) {
  var f, obj = {
    frContact: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    flContact: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    hrContact: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    hlContact: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.LoggedFootContacts}
 */
proto.bosdyn.api.spot.LoggedFootContacts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.LoggedFootContacts;
  return proto.bosdyn.api.spot.LoggedFootContacts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.LoggedFootContacts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.LoggedFootContacts}
 */
proto.bosdyn.api.spot.LoggedFootContacts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFrContact(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFlContact(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHrContact(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHlContact(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.LoggedFootContacts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.LoggedFootContacts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.LoggedFootContacts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LoggedFootContacts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrContact();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getFlContact();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getHrContact();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getHlContact();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bool fr_contact = 1;
 * @return {boolean}
 */
proto.bosdyn.api.spot.LoggedFootContacts.prototype.getFrContact = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.LoggedFootContacts} returns this
 */
proto.bosdyn.api.spot.LoggedFootContacts.prototype.setFrContact = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool fl_contact = 2;
 * @return {boolean}
 */
proto.bosdyn.api.spot.LoggedFootContacts.prototype.getFlContact = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.LoggedFootContacts} returns this
 */
proto.bosdyn.api.spot.LoggedFootContacts.prototype.setFlContact = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool hr_contact = 3;
 * @return {boolean}
 */
proto.bosdyn.api.spot.LoggedFootContacts.prototype.getHrContact = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.LoggedFootContacts} returns this
 */
proto.bosdyn.api.spot.LoggedFootContacts.prototype.setHrContact = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool hl_contact = 4;
 * @return {boolean}
 */
proto.bosdyn.api.spot.LoggedFootContacts.prototype.getHlContact = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.LoggedFootContacts} returns this
 */
proto.bosdyn.api.spot.LoggedFootContacts.prototype.setHlContact = function(value) {
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
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.LoggedStateKeyFrame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.LoggedStateKeyFrame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame.toObject = function(includeInstance, msg) {
  var f, obj = {
    jointAngles: (f = msg.getJointAngles()) && proto.bosdyn.api.spot.LoggedJoints.toObject(includeInstance, f),
    footContactState: (f = msg.getFootContactState()) && proto.bosdyn.api.spot.LoggedFootContacts.toObject(includeInstance, f),
    animationTformBody: (f = msg.getAnimationTformBody()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.LoggedStateKeyFrame}
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.LoggedStateKeyFrame;
  return proto.bosdyn.api.spot.LoggedStateKeyFrame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.LoggedStateKeyFrame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.LoggedStateKeyFrame}
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.LoggedJoints;
      reader.readMessage(value,proto.bosdyn.api.spot.LoggedJoints.deserializeBinaryFromReader);
      msg.setJointAngles(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.spot.LoggedFootContacts;
      reader.readMessage(value,proto.bosdyn.api.spot.LoggedFootContacts.deserializeBinaryFromReader);
      msg.setFootContactState(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setAnimationTformBody(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.LoggedStateKeyFrame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.LoggedStateKeyFrame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJointAngles();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.LoggedJoints.serializeBinaryToWriter
    );
  }
  f = message.getFootContactState();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.spot.LoggedFootContacts.serializeBinaryToWriter
    );
  }
  f = message.getAnimationTformBody();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional LoggedJoints joint_angles = 1;
 * @return {?proto.bosdyn.api.spot.LoggedJoints}
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.getJointAngles = function() {
  return /** @type{?proto.bosdyn.api.spot.LoggedJoints} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.LoggedJoints, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.LoggedJoints|undefined} value
 * @return {!proto.bosdyn.api.spot.LoggedStateKeyFrame} returns this
*/
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.setJointAngles = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LoggedStateKeyFrame} returns this
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.clearJointAngles = function() {
  return this.setJointAngles(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.hasJointAngles = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LoggedFootContacts foot_contact_state = 4;
 * @return {?proto.bosdyn.api.spot.LoggedFootContacts}
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.getFootContactState = function() {
  return /** @type{?proto.bosdyn.api.spot.LoggedFootContacts} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.LoggedFootContacts, 4));
};


/**
 * @param {?proto.bosdyn.api.spot.LoggedFootContacts|undefined} value
 * @return {!proto.bosdyn.api.spot.LoggedStateKeyFrame} returns this
*/
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.setFootContactState = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LoggedStateKeyFrame} returns this
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.clearFootContactState = function() {
  return this.setFootContactState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.hasFootContactState = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bosdyn.api.SE3Pose animation_tform_body = 2;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.getAnimationTformBody = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 2));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.spot.LoggedStateKeyFrame} returns this
*/
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.setAnimationTformBody = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LoggedStateKeyFrame} returns this
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.clearAnimationTformBody = function() {
  return this.setAnimationTformBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.hasAnimationTformBody = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.spot.LoggedStateKeyFrame} returns this
*/
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LoggedStateKeyFrame} returns this
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LoggedStateKeyFrame.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.ChoreographyStateLog.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.ChoreographyStateLog.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ChoreographyStateLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ChoreographyStateLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographyStateLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    keyFramesList: jspb.Message.toObjectList(msg.getKeyFramesList(),
    proto.bosdyn.api.spot.LoggedStateKeyFrame.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ChoreographyStateLog}
 */
proto.bosdyn.api.spot.ChoreographyStateLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ChoreographyStateLog;
  return proto.bosdyn.api.spot.ChoreographyStateLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ChoreographyStateLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ChoreographyStateLog}
 */
proto.bosdyn.api.spot.ChoreographyStateLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.LoggedStateKeyFrame;
      reader.readMessage(value,proto.bosdyn.api.spot.LoggedStateKeyFrame.deserializeBinaryFromReader);
      msg.addKeyFrames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.ChoreographyStateLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ChoreographyStateLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ChoreographyStateLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographyStateLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKeyFramesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bosdyn.api.spot.LoggedStateKeyFrame.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LoggedStateKeyFrame key_frames = 1;
 * @return {!Array<!proto.bosdyn.api.spot.LoggedStateKeyFrame>}
 */
proto.bosdyn.api.spot.ChoreographyStateLog.prototype.getKeyFramesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.spot.LoggedStateKeyFrame>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.spot.LoggedStateKeyFrame, 1));
};


/**
 * @param {!Array<!proto.bosdyn.api.spot.LoggedStateKeyFrame>} value
 * @return {!proto.bosdyn.api.spot.ChoreographyStateLog} returns this
*/
proto.bosdyn.api.spot.ChoreographyStateLog.prototype.setKeyFramesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bosdyn.api.spot.LoggedStateKeyFrame=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.LoggedStateKeyFrame}
 */
proto.bosdyn.api.spot.ChoreographyStateLog.prototype.addKeyFrames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bosdyn.api.spot.LoggedStateKeyFrame, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.ChoreographyStateLog} returns this
 */
proto.bosdyn.api.spot.ChoreographyStateLog.prototype.clearKeyFramesList = function() {
  return this.setKeyFramesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.DownloadRobotStateLogResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.DownloadRobotStateLogResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.DownloadRobotStateLogResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.DownloadRobotStateLogResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    chunk: (f = msg.getChunk()) && bosdyn_api_data_chunk_pb.DataChunk.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.DownloadRobotStateLogResponse}
 */
proto.bosdyn.api.spot.DownloadRobotStateLogResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.DownloadRobotStateLogResponse;
  return proto.bosdyn.api.spot.DownloadRobotStateLogResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.DownloadRobotStateLogResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.DownloadRobotStateLogResponse}
 */
proto.bosdyn.api.spot.DownloadRobotStateLogResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.spot.DownloadRobotStateLogResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new bosdyn_api_data_chunk_pb.DataChunk;
      reader.readMessage(value,bosdyn_api_data_chunk_pb.DataChunk.deserializeBinaryFromReader);
      msg.setChunk(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.DownloadRobotStateLogResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.DownloadRobotStateLogResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.DownloadRobotStateLogResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.DownloadRobotStateLogResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getChunk();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_data_chunk_pb.DataChunk.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.DownloadRobotStateLogResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_NO_RECORDED_INFORMATION: 2,
  STATUS_INCOMPLETE_DATA: 3
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.DownloadRobotStateLogResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.DownloadRobotStateLogResponse} returns this
*/
proto.bosdyn.api.spot.DownloadRobotStateLogResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.DownloadRobotStateLogResponse} returns this
 */
proto.bosdyn.api.spot.DownloadRobotStateLogResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.DownloadRobotStateLogResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.spot.DownloadRobotStateLogResponse.Status}
 */
proto.bosdyn.api.spot.DownloadRobotStateLogResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.spot.DownloadRobotStateLogResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.DownloadRobotStateLogResponse.Status} value
 * @return {!proto.bosdyn.api.spot.DownloadRobotStateLogResponse} returns this
 */
proto.bosdyn.api.spot.DownloadRobotStateLogResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bosdyn.api.DataChunk chunk = 3;
 * @return {?proto.bosdyn.api.DataChunk}
 */
proto.bosdyn.api.spot.DownloadRobotStateLogResponse.prototype.getChunk = function() {
  return /** @type{?proto.bosdyn.api.DataChunk} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_chunk_pb.DataChunk, 3));
};


/**
 * @param {?proto.bosdyn.api.DataChunk|undefined} value
 * @return {!proto.bosdyn.api.spot.DownloadRobotStateLogResponse} returns this
*/
proto.bosdyn.api.spot.DownloadRobotStateLogResponse.prototype.setChunk = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.DownloadRobotStateLogResponse} returns this
 */
proto.bosdyn.api.spot.DownloadRobotStateLogResponse.prototype.clearChunk = function() {
  return this.setChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.DownloadRobotStateLogResponse.prototype.hasChunk = function() {
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
proto.bosdyn.api.spot.MoveParams.oneofGroups_ = [[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,100,1000]];

/**
 * @enum {number}
 */
proto.bosdyn.api.spot.MoveParams.ParamsCase = {
  PARAMS_NOT_SET: 0,
  JUMP_PARAMS: 11,
  ROTATE_BODY_PARAMS: 12,
  STEP_PARAMS: 13,
  BUTT_CIRCLE_PARAMS: 14,
  TURN_PARAMS: 15,
  PACE_2STEP_PARAMS: 16,
  TWERK_PARAMS: 17,
  CHICKEN_HEAD_PARAMS: 18,
  CLAP_PARAMS: 19,
  FRONT_UP_PARAMS: 20,
  SWAY_PARAMS: 21,
  BODY_HOLD_PARAMS: 22,
  ARM_MOVE_PARAMS: 23,
  KNEEL_LEG_MOVE_PARAMS: 24,
  RUNNING_MAN_PARAMS: 25,
  KNEEL_CIRCLE_PARAMS: 26,
  GRIPPER_PARAMS: 27,
  HOP_PARAMS: 28,
  RANDOM_ROTATE_PARAMS: 29,
  CRAWL_PARAMS: 30,
  SIDE_PARAMS: 31,
  BOURREE_PARAMS: 32,
  WORKSPACE_ARM_MOVE_PARAMS: 33,
  FIGURE8_PARAMS: 34,
  KNEEL_LEG_MOVE2_PARAMS: 35,
  FIDGET_STAND_PARAMS: 36,
  GOTO_PARAMS: 37,
  FRAME_SNAPSHOT_PARAMS: 38,
  SET_COLOR_PARAMS: 39,
  RIPPLE_COLOR_PARAMS: 40,
  FADE_COLOR_PARAMS: 41,
  INDEPENDENT_COLOR_PARAMS: 42,
  CUSTOM_GAIT_PARAMS: 43,
  SET_AUDIO_VISUAL_COLOR_PARAMS: 44,
  SET_ALL_COLOR_PARAMS: 45,
  BUZZER_NOTE_PARAMS: 46,
  LEG_JOINT_PARAMS: 100,
  ANIMATE_PARAMS: 1000
};

/**
 * @return {proto.bosdyn.api.spot.MoveParams.ParamsCase}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getParamsCase = function() {
  return /** @type {proto.bosdyn.api.spot.MoveParams.ParamsCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.MoveParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.MoveParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.MoveParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.MoveParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startSlice: jspb.Message.getFieldWithDefault(msg, 2, 0),
    requestedSlices: jspb.Message.getFieldWithDefault(msg, 3, 0),
    id: jspb.Message.getFieldWithDefault(msg, 4, 0),
    jumpParams: (f = msg.getJumpParams()) && bosdyn_api_spot_choreography_params_pb.JumpParams.toObject(includeInstance, f),
    rotateBodyParams: (f = msg.getRotateBodyParams()) && bosdyn_api_spot_choreography_params_pb.RotateBodyParams.toObject(includeInstance, f),
    stepParams: (f = msg.getStepParams()) && bosdyn_api_spot_choreography_params_pb.StepParams.toObject(includeInstance, f),
    buttCircleParams: (f = msg.getButtCircleParams()) && bosdyn_api_spot_choreography_params_pb.ButtCircleParams.toObject(includeInstance, f),
    turnParams: (f = msg.getTurnParams()) && bosdyn_api_spot_choreography_params_pb.TurnParams.toObject(includeInstance, f),
    pace2stepParams: (f = msg.getPace2stepParams()) && bosdyn_api_spot_choreography_params_pb.Pace2StepParams.toObject(includeInstance, f),
    twerkParams: (f = msg.getTwerkParams()) && bosdyn_api_spot_choreography_params_pb.TwerkParams.toObject(includeInstance, f),
    chickenHeadParams: (f = msg.getChickenHeadParams()) && bosdyn_api_spot_choreography_params_pb.ChickenHeadParams.toObject(includeInstance, f),
    clapParams: (f = msg.getClapParams()) && bosdyn_api_spot_choreography_params_pb.ClapParams.toObject(includeInstance, f),
    frontUpParams: (f = msg.getFrontUpParams()) && bosdyn_api_spot_choreography_params_pb.FrontUpParams.toObject(includeInstance, f),
    swayParams: (f = msg.getSwayParams()) && bosdyn_api_spot_choreography_params_pb.SwayParams.toObject(includeInstance, f),
    bodyHoldParams: (f = msg.getBodyHoldParams()) && bosdyn_api_spot_choreography_params_pb.BodyHoldParams.toObject(includeInstance, f),
    armMoveParams: (f = msg.getArmMoveParams()) && bosdyn_api_spot_choreography_params_pb.ArmMoveParams.toObject(includeInstance, f),
    kneelLegMoveParams: (f = msg.getKneelLegMoveParams()) && bosdyn_api_spot_choreography_params_pb.KneelLegMoveParams.toObject(includeInstance, f),
    runningManParams: (f = msg.getRunningManParams()) && bosdyn_api_spot_choreography_params_pb.RunningManParams.toObject(includeInstance, f),
    kneelCircleParams: (f = msg.getKneelCircleParams()) && bosdyn_api_spot_choreography_params_pb.KneelCircleParams.toObject(includeInstance, f),
    gripperParams: (f = msg.getGripperParams()) && bosdyn_api_spot_choreography_params_pb.GripperParams.toObject(includeInstance, f),
    hopParams: (f = msg.getHopParams()) && bosdyn_api_spot_choreography_params_pb.HopParams.toObject(includeInstance, f),
    randomRotateParams: (f = msg.getRandomRotateParams()) && bosdyn_api_spot_choreography_params_pb.RandomRotateParams.toObject(includeInstance, f),
    crawlParams: (f = msg.getCrawlParams()) && bosdyn_api_spot_choreography_params_pb.CrawlParams.toObject(includeInstance, f),
    sideParams: (f = msg.getSideParams()) && bosdyn_api_spot_choreography_params_pb.SideParams.toObject(includeInstance, f),
    bourreeParams: (f = msg.getBourreeParams()) && bosdyn_api_spot_choreography_params_pb.BourreeParams.toObject(includeInstance, f),
    workspaceArmMoveParams: (f = msg.getWorkspaceArmMoveParams()) && bosdyn_api_spot_choreography_params_pb.WorkspaceArmMoveParams.toObject(includeInstance, f),
    figure8Params: (f = msg.getFigure8Params()) && bosdyn_api_spot_choreography_params_pb.Figure8Params.toObject(includeInstance, f),
    kneelLegMove2Params: (f = msg.getKneelLegMove2Params()) && bosdyn_api_spot_choreography_params_pb.KneelLegMove2Params.toObject(includeInstance, f),
    fidgetStandParams: (f = msg.getFidgetStandParams()) && bosdyn_api_spot_choreography_params_pb.FidgetStandParams.toObject(includeInstance, f),
    gotoParams: (f = msg.getGotoParams()) && bosdyn_api_spot_choreography_params_pb.GotoParams.toObject(includeInstance, f),
    frameSnapshotParams: (f = msg.getFrameSnapshotParams()) && bosdyn_api_spot_choreography_params_pb.FrameSnapshotParams.toObject(includeInstance, f),
    setColorParams: (f = msg.getSetColorParams()) && bosdyn_api_spot_choreography_params_pb.SetColorParams.toObject(includeInstance, f),
    rippleColorParams: (f = msg.getRippleColorParams()) && bosdyn_api_spot_choreography_params_pb.RippleColorParams.toObject(includeInstance, f),
    fadeColorParams: (f = msg.getFadeColorParams()) && bosdyn_api_spot_choreography_params_pb.FadeColorParams.toObject(includeInstance, f),
    independentColorParams: (f = msg.getIndependentColorParams()) && bosdyn_api_spot_choreography_params_pb.IndependentColorParams.toObject(includeInstance, f),
    customGaitParams: (f = msg.getCustomGaitParams()) && bosdyn_api_spot_choreography_params_pb.CustomGaitParams.toObject(includeInstance, f),
    setAudioVisualColorParams: (f = msg.getSetAudioVisualColorParams()) && bosdyn_api_spot_choreography_params_pb.SetAudioVisualColorParams.toObject(includeInstance, f),
    setAllColorParams: (f = msg.getSetAllColorParams()) && bosdyn_api_spot_choreography_params_pb.SetAllColorParams.toObject(includeInstance, f),
    buzzerNoteParams: (f = msg.getBuzzerNoteParams()) && bosdyn_api_spot_choreography_params_pb.BuzzerNoteParams.toObject(includeInstance, f),
    legJointParams: (f = msg.getLegJointParams()) && bosdyn_api_spot_choreography_params_pb.LegJointParams.toObject(includeInstance, f),
    animateParams: (f = msg.getAnimateParams()) && bosdyn_api_spot_choreography_params_pb.AnimateParams.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.MoveParams}
 */
proto.bosdyn.api.spot.MoveParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.MoveParams;
  return proto.bosdyn.api.spot.MoveParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.MoveParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.MoveParams}
 */
proto.bosdyn.api.spot.MoveParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStartSlice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequestedSlices(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 11:
      var value = new bosdyn_api_spot_choreography_params_pb.JumpParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.JumpParams.deserializeBinaryFromReader);
      msg.setJumpParams(value);
      break;
    case 12:
      var value = new bosdyn_api_spot_choreography_params_pb.RotateBodyParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.RotateBodyParams.deserializeBinaryFromReader);
      msg.setRotateBodyParams(value);
      break;
    case 13:
      var value = new bosdyn_api_spot_choreography_params_pb.StepParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.StepParams.deserializeBinaryFromReader);
      msg.setStepParams(value);
      break;
    case 14:
      var value = new bosdyn_api_spot_choreography_params_pb.ButtCircleParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.ButtCircleParams.deserializeBinaryFromReader);
      msg.setButtCircleParams(value);
      break;
    case 15:
      var value = new bosdyn_api_spot_choreography_params_pb.TurnParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.TurnParams.deserializeBinaryFromReader);
      msg.setTurnParams(value);
      break;
    case 16:
      var value = new bosdyn_api_spot_choreography_params_pb.Pace2StepParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.Pace2StepParams.deserializeBinaryFromReader);
      msg.setPace2stepParams(value);
      break;
    case 17:
      var value = new bosdyn_api_spot_choreography_params_pb.TwerkParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.TwerkParams.deserializeBinaryFromReader);
      msg.setTwerkParams(value);
      break;
    case 18:
      var value = new bosdyn_api_spot_choreography_params_pb.ChickenHeadParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.ChickenHeadParams.deserializeBinaryFromReader);
      msg.setChickenHeadParams(value);
      break;
    case 19:
      var value = new bosdyn_api_spot_choreography_params_pb.ClapParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.ClapParams.deserializeBinaryFromReader);
      msg.setClapParams(value);
      break;
    case 20:
      var value = new bosdyn_api_spot_choreography_params_pb.FrontUpParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.FrontUpParams.deserializeBinaryFromReader);
      msg.setFrontUpParams(value);
      break;
    case 21:
      var value = new bosdyn_api_spot_choreography_params_pb.SwayParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.SwayParams.deserializeBinaryFromReader);
      msg.setSwayParams(value);
      break;
    case 22:
      var value = new bosdyn_api_spot_choreography_params_pb.BodyHoldParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.BodyHoldParams.deserializeBinaryFromReader);
      msg.setBodyHoldParams(value);
      break;
    case 23:
      var value = new bosdyn_api_spot_choreography_params_pb.ArmMoveParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.ArmMoveParams.deserializeBinaryFromReader);
      msg.setArmMoveParams(value);
      break;
    case 24:
      var value = new bosdyn_api_spot_choreography_params_pb.KneelLegMoveParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.KneelLegMoveParams.deserializeBinaryFromReader);
      msg.setKneelLegMoveParams(value);
      break;
    case 25:
      var value = new bosdyn_api_spot_choreography_params_pb.RunningManParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.RunningManParams.deserializeBinaryFromReader);
      msg.setRunningManParams(value);
      break;
    case 26:
      var value = new bosdyn_api_spot_choreography_params_pb.KneelCircleParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.KneelCircleParams.deserializeBinaryFromReader);
      msg.setKneelCircleParams(value);
      break;
    case 27:
      var value = new bosdyn_api_spot_choreography_params_pb.GripperParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.GripperParams.deserializeBinaryFromReader);
      msg.setGripperParams(value);
      break;
    case 28:
      var value = new bosdyn_api_spot_choreography_params_pb.HopParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.HopParams.deserializeBinaryFromReader);
      msg.setHopParams(value);
      break;
    case 29:
      var value = new bosdyn_api_spot_choreography_params_pb.RandomRotateParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.RandomRotateParams.deserializeBinaryFromReader);
      msg.setRandomRotateParams(value);
      break;
    case 30:
      var value = new bosdyn_api_spot_choreography_params_pb.CrawlParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.CrawlParams.deserializeBinaryFromReader);
      msg.setCrawlParams(value);
      break;
    case 31:
      var value = new bosdyn_api_spot_choreography_params_pb.SideParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.SideParams.deserializeBinaryFromReader);
      msg.setSideParams(value);
      break;
    case 32:
      var value = new bosdyn_api_spot_choreography_params_pb.BourreeParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.BourreeParams.deserializeBinaryFromReader);
      msg.setBourreeParams(value);
      break;
    case 33:
      var value = new bosdyn_api_spot_choreography_params_pb.WorkspaceArmMoveParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.WorkspaceArmMoveParams.deserializeBinaryFromReader);
      msg.setWorkspaceArmMoveParams(value);
      break;
    case 34:
      var value = new bosdyn_api_spot_choreography_params_pb.Figure8Params;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.Figure8Params.deserializeBinaryFromReader);
      msg.setFigure8Params(value);
      break;
    case 35:
      var value = new bosdyn_api_spot_choreography_params_pb.KneelLegMove2Params;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.KneelLegMove2Params.deserializeBinaryFromReader);
      msg.setKneelLegMove2Params(value);
      break;
    case 36:
      var value = new bosdyn_api_spot_choreography_params_pb.FidgetStandParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.FidgetStandParams.deserializeBinaryFromReader);
      msg.setFidgetStandParams(value);
      break;
    case 37:
      var value = new bosdyn_api_spot_choreography_params_pb.GotoParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.GotoParams.deserializeBinaryFromReader);
      msg.setGotoParams(value);
      break;
    case 38:
      var value = new bosdyn_api_spot_choreography_params_pb.FrameSnapshotParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.FrameSnapshotParams.deserializeBinaryFromReader);
      msg.setFrameSnapshotParams(value);
      break;
    case 39:
      var value = new bosdyn_api_spot_choreography_params_pb.SetColorParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.SetColorParams.deserializeBinaryFromReader);
      msg.setSetColorParams(value);
      break;
    case 40:
      var value = new bosdyn_api_spot_choreography_params_pb.RippleColorParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.RippleColorParams.deserializeBinaryFromReader);
      msg.setRippleColorParams(value);
      break;
    case 41:
      var value = new bosdyn_api_spot_choreography_params_pb.FadeColorParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.FadeColorParams.deserializeBinaryFromReader);
      msg.setFadeColorParams(value);
      break;
    case 42:
      var value = new bosdyn_api_spot_choreography_params_pb.IndependentColorParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.IndependentColorParams.deserializeBinaryFromReader);
      msg.setIndependentColorParams(value);
      break;
    case 43:
      var value = new bosdyn_api_spot_choreography_params_pb.CustomGaitParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.CustomGaitParams.deserializeBinaryFromReader);
      msg.setCustomGaitParams(value);
      break;
    case 44:
      var value = new bosdyn_api_spot_choreography_params_pb.SetAudioVisualColorParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.SetAudioVisualColorParams.deserializeBinaryFromReader);
      msg.setSetAudioVisualColorParams(value);
      break;
    case 45:
      var value = new bosdyn_api_spot_choreography_params_pb.SetAllColorParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.SetAllColorParams.deserializeBinaryFromReader);
      msg.setSetAllColorParams(value);
      break;
    case 46:
      var value = new bosdyn_api_spot_choreography_params_pb.BuzzerNoteParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.BuzzerNoteParams.deserializeBinaryFromReader);
      msg.setBuzzerNoteParams(value);
      break;
    case 100:
      var value = new bosdyn_api_spot_choreography_params_pb.LegJointParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.LegJointParams.deserializeBinaryFromReader);
      msg.setLegJointParams(value);
      break;
    case 1000:
      var value = new bosdyn_api_spot_choreography_params_pb.AnimateParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.AnimateParams.deserializeBinaryFromReader);
      msg.setAnimateParams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.MoveParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.MoveParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.MoveParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.MoveParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartSlice();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getRequestedSlices();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getJumpParams();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      bosdyn_api_spot_choreography_params_pb.JumpParams.serializeBinaryToWriter
    );
  }
  f = message.getRotateBodyParams();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      bosdyn_api_spot_choreography_params_pb.RotateBodyParams.serializeBinaryToWriter
    );
  }
  f = message.getStepParams();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      bosdyn_api_spot_choreography_params_pb.StepParams.serializeBinaryToWriter
    );
  }
  f = message.getButtCircleParams();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      bosdyn_api_spot_choreography_params_pb.ButtCircleParams.serializeBinaryToWriter
    );
  }
  f = message.getTurnParams();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      bosdyn_api_spot_choreography_params_pb.TurnParams.serializeBinaryToWriter
    );
  }
  f = message.getPace2stepParams();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      bosdyn_api_spot_choreography_params_pb.Pace2StepParams.serializeBinaryToWriter
    );
  }
  f = message.getTwerkParams();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      bosdyn_api_spot_choreography_params_pb.TwerkParams.serializeBinaryToWriter
    );
  }
  f = message.getChickenHeadParams();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      bosdyn_api_spot_choreography_params_pb.ChickenHeadParams.serializeBinaryToWriter
    );
  }
  f = message.getClapParams();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      bosdyn_api_spot_choreography_params_pb.ClapParams.serializeBinaryToWriter
    );
  }
  f = message.getFrontUpParams();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      bosdyn_api_spot_choreography_params_pb.FrontUpParams.serializeBinaryToWriter
    );
  }
  f = message.getSwayParams();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      bosdyn_api_spot_choreography_params_pb.SwayParams.serializeBinaryToWriter
    );
  }
  f = message.getBodyHoldParams();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      bosdyn_api_spot_choreography_params_pb.BodyHoldParams.serializeBinaryToWriter
    );
  }
  f = message.getArmMoveParams();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      bosdyn_api_spot_choreography_params_pb.ArmMoveParams.serializeBinaryToWriter
    );
  }
  f = message.getKneelLegMoveParams();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      bosdyn_api_spot_choreography_params_pb.KneelLegMoveParams.serializeBinaryToWriter
    );
  }
  f = message.getRunningManParams();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      bosdyn_api_spot_choreography_params_pb.RunningManParams.serializeBinaryToWriter
    );
  }
  f = message.getKneelCircleParams();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      bosdyn_api_spot_choreography_params_pb.KneelCircleParams.serializeBinaryToWriter
    );
  }
  f = message.getGripperParams();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      bosdyn_api_spot_choreography_params_pb.GripperParams.serializeBinaryToWriter
    );
  }
  f = message.getHopParams();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      bosdyn_api_spot_choreography_params_pb.HopParams.serializeBinaryToWriter
    );
  }
  f = message.getRandomRotateParams();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      bosdyn_api_spot_choreography_params_pb.RandomRotateParams.serializeBinaryToWriter
    );
  }
  f = message.getCrawlParams();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      bosdyn_api_spot_choreography_params_pb.CrawlParams.serializeBinaryToWriter
    );
  }
  f = message.getSideParams();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      bosdyn_api_spot_choreography_params_pb.SideParams.serializeBinaryToWriter
    );
  }
  f = message.getBourreeParams();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      bosdyn_api_spot_choreography_params_pb.BourreeParams.serializeBinaryToWriter
    );
  }
  f = message.getWorkspaceArmMoveParams();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      bosdyn_api_spot_choreography_params_pb.WorkspaceArmMoveParams.serializeBinaryToWriter
    );
  }
  f = message.getFigure8Params();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      bosdyn_api_spot_choreography_params_pb.Figure8Params.serializeBinaryToWriter
    );
  }
  f = message.getKneelLegMove2Params();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      bosdyn_api_spot_choreography_params_pb.KneelLegMove2Params.serializeBinaryToWriter
    );
  }
  f = message.getFidgetStandParams();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      bosdyn_api_spot_choreography_params_pb.FidgetStandParams.serializeBinaryToWriter
    );
  }
  f = message.getGotoParams();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      bosdyn_api_spot_choreography_params_pb.GotoParams.serializeBinaryToWriter
    );
  }
  f = message.getFrameSnapshotParams();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      bosdyn_api_spot_choreography_params_pb.FrameSnapshotParams.serializeBinaryToWriter
    );
  }
  f = message.getSetColorParams();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      bosdyn_api_spot_choreography_params_pb.SetColorParams.serializeBinaryToWriter
    );
  }
  f = message.getRippleColorParams();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      bosdyn_api_spot_choreography_params_pb.RippleColorParams.serializeBinaryToWriter
    );
  }
  f = message.getFadeColorParams();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      bosdyn_api_spot_choreography_params_pb.FadeColorParams.serializeBinaryToWriter
    );
  }
  f = message.getIndependentColorParams();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      bosdyn_api_spot_choreography_params_pb.IndependentColorParams.serializeBinaryToWriter
    );
  }
  f = message.getCustomGaitParams();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      bosdyn_api_spot_choreography_params_pb.CustomGaitParams.serializeBinaryToWriter
    );
  }
  f = message.getSetAudioVisualColorParams();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      bosdyn_api_spot_choreography_params_pb.SetAudioVisualColorParams.serializeBinaryToWriter
    );
  }
  f = message.getSetAllColorParams();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      bosdyn_api_spot_choreography_params_pb.SetAllColorParams.serializeBinaryToWriter
    );
  }
  f = message.getBuzzerNoteParams();
  if (f != null) {
    writer.writeMessage(
      46,
      f,
      bosdyn_api_spot_choreography_params_pb.BuzzerNoteParams.serializeBinaryToWriter
    );
  }
  f = message.getLegJointParams();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      bosdyn_api_spot_choreography_params_pb.LegJointParams.serializeBinaryToWriter
    );
  }
  f = message.getAnimateParams();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      bosdyn_api_spot_choreography_params_pb.AnimateParams.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 start_slice = 2;
 * @return {number}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getStartSlice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.setStartSlice = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 requested_slices = 3;
 * @return {number}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getRequestedSlices = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.setRequestedSlices = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 id = 4;
 * @return {number}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional JumpParams jump_params = 11;
 * @return {?proto.bosdyn.api.spot.JumpParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getJumpParams = function() {
  return /** @type{?proto.bosdyn.api.spot.JumpParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.JumpParams, 11));
};


/**
 * @param {?proto.bosdyn.api.spot.JumpParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setJumpParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearJumpParams = function() {
  return this.setJumpParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasJumpParams = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional RotateBodyParams rotate_body_params = 12;
 * @return {?proto.bosdyn.api.spot.RotateBodyParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getRotateBodyParams = function() {
  return /** @type{?proto.bosdyn.api.spot.RotateBodyParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.RotateBodyParams, 12));
};


/**
 * @param {?proto.bosdyn.api.spot.RotateBodyParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setRotateBodyParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearRotateBodyParams = function() {
  return this.setRotateBodyParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasRotateBodyParams = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional StepParams step_params = 13;
 * @return {?proto.bosdyn.api.spot.StepParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getStepParams = function() {
  return /** @type{?proto.bosdyn.api.spot.StepParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.StepParams, 13));
};


/**
 * @param {?proto.bosdyn.api.spot.StepParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setStepParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearStepParams = function() {
  return this.setStepParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasStepParams = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ButtCircleParams butt_circle_params = 14;
 * @return {?proto.bosdyn.api.spot.ButtCircleParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getButtCircleParams = function() {
  return /** @type{?proto.bosdyn.api.spot.ButtCircleParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.ButtCircleParams, 14));
};


/**
 * @param {?proto.bosdyn.api.spot.ButtCircleParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setButtCircleParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearButtCircleParams = function() {
  return this.setButtCircleParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasButtCircleParams = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional TurnParams turn_params = 15;
 * @return {?proto.bosdyn.api.spot.TurnParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getTurnParams = function() {
  return /** @type{?proto.bosdyn.api.spot.TurnParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.TurnParams, 15));
};


/**
 * @param {?proto.bosdyn.api.spot.TurnParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setTurnParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearTurnParams = function() {
  return this.setTurnParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasTurnParams = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional Pace2StepParams pace_2step_params = 16;
 * @return {?proto.bosdyn.api.spot.Pace2StepParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getPace2stepParams = function() {
  return /** @type{?proto.bosdyn.api.spot.Pace2StepParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.Pace2StepParams, 16));
};


/**
 * @param {?proto.bosdyn.api.spot.Pace2StepParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setPace2stepParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearPace2stepParams = function() {
  return this.setPace2stepParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasPace2stepParams = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional TwerkParams twerk_params = 17;
 * @return {?proto.bosdyn.api.spot.TwerkParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getTwerkParams = function() {
  return /** @type{?proto.bosdyn.api.spot.TwerkParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.TwerkParams, 17));
};


/**
 * @param {?proto.bosdyn.api.spot.TwerkParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setTwerkParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearTwerkParams = function() {
  return this.setTwerkParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasTwerkParams = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ChickenHeadParams chicken_head_params = 18;
 * @return {?proto.bosdyn.api.spot.ChickenHeadParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getChickenHeadParams = function() {
  return /** @type{?proto.bosdyn.api.spot.ChickenHeadParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.ChickenHeadParams, 18));
};


/**
 * @param {?proto.bosdyn.api.spot.ChickenHeadParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setChickenHeadParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearChickenHeadParams = function() {
  return this.setChickenHeadParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasChickenHeadParams = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ClapParams clap_params = 19;
 * @return {?proto.bosdyn.api.spot.ClapParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getClapParams = function() {
  return /** @type{?proto.bosdyn.api.spot.ClapParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.ClapParams, 19));
};


/**
 * @param {?proto.bosdyn.api.spot.ClapParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setClapParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearClapParams = function() {
  return this.setClapParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasClapParams = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional FrontUpParams front_up_params = 20;
 * @return {?proto.bosdyn.api.spot.FrontUpParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getFrontUpParams = function() {
  return /** @type{?proto.bosdyn.api.spot.FrontUpParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.FrontUpParams, 20));
};


/**
 * @param {?proto.bosdyn.api.spot.FrontUpParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setFrontUpParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearFrontUpParams = function() {
  return this.setFrontUpParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasFrontUpParams = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional SwayParams sway_params = 21;
 * @return {?proto.bosdyn.api.spot.SwayParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getSwayParams = function() {
  return /** @type{?proto.bosdyn.api.spot.SwayParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.SwayParams, 21));
};


/**
 * @param {?proto.bosdyn.api.spot.SwayParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setSwayParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearSwayParams = function() {
  return this.setSwayParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasSwayParams = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional BodyHoldParams body_hold_params = 22;
 * @return {?proto.bosdyn.api.spot.BodyHoldParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getBodyHoldParams = function() {
  return /** @type{?proto.bosdyn.api.spot.BodyHoldParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.BodyHoldParams, 22));
};


/**
 * @param {?proto.bosdyn.api.spot.BodyHoldParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setBodyHoldParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearBodyHoldParams = function() {
  return this.setBodyHoldParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasBodyHoldParams = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional ArmMoveParams arm_move_params = 23;
 * @return {?proto.bosdyn.api.spot.ArmMoveParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getArmMoveParams = function() {
  return /** @type{?proto.bosdyn.api.spot.ArmMoveParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.ArmMoveParams, 23));
};


/**
 * @param {?proto.bosdyn.api.spot.ArmMoveParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setArmMoveParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearArmMoveParams = function() {
  return this.setArmMoveParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasArmMoveParams = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional KneelLegMoveParams kneel_leg_move_params = 24;
 * @return {?proto.bosdyn.api.spot.KneelLegMoveParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getKneelLegMoveParams = function() {
  return /** @type{?proto.bosdyn.api.spot.KneelLegMoveParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.KneelLegMoveParams, 24));
};


/**
 * @param {?proto.bosdyn.api.spot.KneelLegMoveParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setKneelLegMoveParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearKneelLegMoveParams = function() {
  return this.setKneelLegMoveParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasKneelLegMoveParams = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional RunningManParams running_man_params = 25;
 * @return {?proto.bosdyn.api.spot.RunningManParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getRunningManParams = function() {
  return /** @type{?proto.bosdyn.api.spot.RunningManParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.RunningManParams, 25));
};


/**
 * @param {?proto.bosdyn.api.spot.RunningManParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setRunningManParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 25, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearRunningManParams = function() {
  return this.setRunningManParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasRunningManParams = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional KneelCircleParams kneel_circle_params = 26;
 * @return {?proto.bosdyn.api.spot.KneelCircleParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getKneelCircleParams = function() {
  return /** @type{?proto.bosdyn.api.spot.KneelCircleParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.KneelCircleParams, 26));
};


/**
 * @param {?proto.bosdyn.api.spot.KneelCircleParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setKneelCircleParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 26, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearKneelCircleParams = function() {
  return this.setKneelCircleParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasKneelCircleParams = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional GripperParams gripper_params = 27;
 * @return {?proto.bosdyn.api.spot.GripperParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getGripperParams = function() {
  return /** @type{?proto.bosdyn.api.spot.GripperParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.GripperParams, 27));
};


/**
 * @param {?proto.bosdyn.api.spot.GripperParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setGripperParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 27, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearGripperParams = function() {
  return this.setGripperParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasGripperParams = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional HopParams hop_params = 28;
 * @return {?proto.bosdyn.api.spot.HopParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getHopParams = function() {
  return /** @type{?proto.bosdyn.api.spot.HopParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.HopParams, 28));
};


/**
 * @param {?proto.bosdyn.api.spot.HopParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setHopParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 28, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearHopParams = function() {
  return this.setHopParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasHopParams = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional RandomRotateParams random_rotate_params = 29;
 * @return {?proto.bosdyn.api.spot.RandomRotateParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getRandomRotateParams = function() {
  return /** @type{?proto.bosdyn.api.spot.RandomRotateParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.RandomRotateParams, 29));
};


/**
 * @param {?proto.bosdyn.api.spot.RandomRotateParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setRandomRotateParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 29, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearRandomRotateParams = function() {
  return this.setRandomRotateParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasRandomRotateParams = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional CrawlParams crawl_params = 30;
 * @return {?proto.bosdyn.api.spot.CrawlParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getCrawlParams = function() {
  return /** @type{?proto.bosdyn.api.spot.CrawlParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.CrawlParams, 30));
};


/**
 * @param {?proto.bosdyn.api.spot.CrawlParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setCrawlParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearCrawlParams = function() {
  return this.setCrawlParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasCrawlParams = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional SideParams side_params = 31;
 * @return {?proto.bosdyn.api.spot.SideParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getSideParams = function() {
  return /** @type{?proto.bosdyn.api.spot.SideParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.SideParams, 31));
};


/**
 * @param {?proto.bosdyn.api.spot.SideParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setSideParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearSideParams = function() {
  return this.setSideParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasSideParams = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional BourreeParams bourree_params = 32;
 * @return {?proto.bosdyn.api.spot.BourreeParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getBourreeParams = function() {
  return /** @type{?proto.bosdyn.api.spot.BourreeParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.BourreeParams, 32));
};


/**
 * @param {?proto.bosdyn.api.spot.BourreeParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setBourreeParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearBourreeParams = function() {
  return this.setBourreeParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasBourreeParams = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional WorkspaceArmMoveParams workspace_arm_move_params = 33;
 * @return {?proto.bosdyn.api.spot.WorkspaceArmMoveParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getWorkspaceArmMoveParams = function() {
  return /** @type{?proto.bosdyn.api.spot.WorkspaceArmMoveParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.WorkspaceArmMoveParams, 33));
};


/**
 * @param {?proto.bosdyn.api.spot.WorkspaceArmMoveParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setWorkspaceArmMoveParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 33, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearWorkspaceArmMoveParams = function() {
  return this.setWorkspaceArmMoveParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasWorkspaceArmMoveParams = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional Figure8Params figure8_params = 34;
 * @return {?proto.bosdyn.api.spot.Figure8Params}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getFigure8Params = function() {
  return /** @type{?proto.bosdyn.api.spot.Figure8Params} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.Figure8Params, 34));
};


/**
 * @param {?proto.bosdyn.api.spot.Figure8Params|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setFigure8Params = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearFigure8Params = function() {
  return this.setFigure8Params(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasFigure8Params = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional KneelLegMove2Params kneel_leg_move2_params = 35;
 * @return {?proto.bosdyn.api.spot.KneelLegMove2Params}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getKneelLegMove2Params = function() {
  return /** @type{?proto.bosdyn.api.spot.KneelLegMove2Params} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.KneelLegMove2Params, 35));
};


/**
 * @param {?proto.bosdyn.api.spot.KneelLegMove2Params|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setKneelLegMove2Params = function(value) {
  return jspb.Message.setOneofWrapperField(this, 35, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearKneelLegMove2Params = function() {
  return this.setKneelLegMove2Params(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasKneelLegMove2Params = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional FidgetStandParams fidget_stand_params = 36;
 * @return {?proto.bosdyn.api.spot.FidgetStandParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getFidgetStandParams = function() {
  return /** @type{?proto.bosdyn.api.spot.FidgetStandParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.FidgetStandParams, 36));
};


/**
 * @param {?proto.bosdyn.api.spot.FidgetStandParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setFidgetStandParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 36, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearFidgetStandParams = function() {
  return this.setFidgetStandParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasFidgetStandParams = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional GotoParams goto_params = 37;
 * @return {?proto.bosdyn.api.spot.GotoParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getGotoParams = function() {
  return /** @type{?proto.bosdyn.api.spot.GotoParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.GotoParams, 37));
};


/**
 * @param {?proto.bosdyn.api.spot.GotoParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setGotoParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 37, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearGotoParams = function() {
  return this.setGotoParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasGotoParams = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional FrameSnapshotParams frame_snapshot_params = 38;
 * @return {?proto.bosdyn.api.spot.FrameSnapshotParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getFrameSnapshotParams = function() {
  return /** @type{?proto.bosdyn.api.spot.FrameSnapshotParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.FrameSnapshotParams, 38));
};


/**
 * @param {?proto.bosdyn.api.spot.FrameSnapshotParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setFrameSnapshotParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 38, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearFrameSnapshotParams = function() {
  return this.setFrameSnapshotParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasFrameSnapshotParams = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional SetColorParams set_color_params = 39;
 * @return {?proto.bosdyn.api.spot.SetColorParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getSetColorParams = function() {
  return /** @type{?proto.bosdyn.api.spot.SetColorParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.SetColorParams, 39));
};


/**
 * @param {?proto.bosdyn.api.spot.SetColorParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setSetColorParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 39, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearSetColorParams = function() {
  return this.setSetColorParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasSetColorParams = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional RippleColorParams ripple_color_params = 40;
 * @return {?proto.bosdyn.api.spot.RippleColorParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getRippleColorParams = function() {
  return /** @type{?proto.bosdyn.api.spot.RippleColorParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.RippleColorParams, 40));
};


/**
 * @param {?proto.bosdyn.api.spot.RippleColorParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setRippleColorParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 40, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearRippleColorParams = function() {
  return this.setRippleColorParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasRippleColorParams = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional FadeColorParams fade_color_params = 41;
 * @return {?proto.bosdyn.api.spot.FadeColorParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getFadeColorParams = function() {
  return /** @type{?proto.bosdyn.api.spot.FadeColorParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.FadeColorParams, 41));
};


/**
 * @param {?proto.bosdyn.api.spot.FadeColorParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setFadeColorParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 41, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearFadeColorParams = function() {
  return this.setFadeColorParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasFadeColorParams = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional IndependentColorParams independent_color_params = 42;
 * @return {?proto.bosdyn.api.spot.IndependentColorParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getIndependentColorParams = function() {
  return /** @type{?proto.bosdyn.api.spot.IndependentColorParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.IndependentColorParams, 42));
};


/**
 * @param {?proto.bosdyn.api.spot.IndependentColorParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setIndependentColorParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 42, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearIndependentColorParams = function() {
  return this.setIndependentColorParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasIndependentColorParams = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional CustomGaitParams custom_gait_params = 43;
 * @return {?proto.bosdyn.api.spot.CustomGaitParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getCustomGaitParams = function() {
  return /** @type{?proto.bosdyn.api.spot.CustomGaitParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.CustomGaitParams, 43));
};


/**
 * @param {?proto.bosdyn.api.spot.CustomGaitParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setCustomGaitParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 43, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearCustomGaitParams = function() {
  return this.setCustomGaitParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasCustomGaitParams = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional SetAudioVisualColorParams set_audio_visual_color_params = 44;
 * @return {?proto.bosdyn.api.spot.SetAudioVisualColorParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getSetAudioVisualColorParams = function() {
  return /** @type{?proto.bosdyn.api.spot.SetAudioVisualColorParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.SetAudioVisualColorParams, 44));
};


/**
 * @param {?proto.bosdyn.api.spot.SetAudioVisualColorParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setSetAudioVisualColorParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 44, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearSetAudioVisualColorParams = function() {
  return this.setSetAudioVisualColorParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasSetAudioVisualColorParams = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional SetAllColorParams set_all_color_params = 45;
 * @return {?proto.bosdyn.api.spot.SetAllColorParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getSetAllColorParams = function() {
  return /** @type{?proto.bosdyn.api.spot.SetAllColorParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.SetAllColorParams, 45));
};


/**
 * @param {?proto.bosdyn.api.spot.SetAllColorParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setSetAllColorParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 45, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearSetAllColorParams = function() {
  return this.setSetAllColorParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasSetAllColorParams = function() {
  return jspb.Message.getField(this, 45) != null;
};


/**
 * optional BuzzerNoteParams buzzer_note_params = 46;
 * @return {?proto.bosdyn.api.spot.BuzzerNoteParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getBuzzerNoteParams = function() {
  return /** @type{?proto.bosdyn.api.spot.BuzzerNoteParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.BuzzerNoteParams, 46));
};


/**
 * @param {?proto.bosdyn.api.spot.BuzzerNoteParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setBuzzerNoteParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 46, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearBuzzerNoteParams = function() {
  return this.setBuzzerNoteParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasBuzzerNoteParams = function() {
  return jspb.Message.getField(this, 46) != null;
};


/**
 * optional LegJointParams leg_joint_params = 100;
 * @return {?proto.bosdyn.api.spot.LegJointParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getLegJointParams = function() {
  return /** @type{?proto.bosdyn.api.spot.LegJointParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.LegJointParams, 100));
};


/**
 * @param {?proto.bosdyn.api.spot.LegJointParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setLegJointParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearLegJointParams = function() {
  return this.setLegJointParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasLegJointParams = function() {
  return jspb.Message.getField(this, 100) != null;
};


/**
 * optional AnimateParams animate_params = 1000;
 * @return {?proto.bosdyn.api.spot.AnimateParams}
 */
proto.bosdyn.api.spot.MoveParams.prototype.getAnimateParams = function() {
  return /** @type{?proto.bosdyn.api.spot.AnimateParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.AnimateParams, 1000));
};


/**
 * @param {?proto.bosdyn.api.spot.AnimateParams|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
*/
proto.bosdyn.api.spot.MoveParams.prototype.setAnimateParams = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1000, proto.bosdyn.api.spot.MoveParams.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveParams} returns this
 */
proto.bosdyn.api.spot.MoveParams.prototype.clearAnimateParams = function() {
  return this.setAnimateParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveParams.prototype.hasAnimateParams = function() {
  return jspb.Message.getField(this, 1000) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.spot.MoveCommand.oneofGroups_ = [[3]];

/**
 * @enum {number}
 */
proto.bosdyn.api.spot.MoveCommand.CommandCase = {
  COMMAND_NOT_SET: 0,
  CUSTOM_GAIT_COMMAND: 3
};

/**
 * @return {proto.bosdyn.api.spot.MoveCommand.CommandCase}
 */
proto.bosdyn.api.spot.MoveCommand.prototype.getCommandCase = function() {
  return /** @type {proto.bosdyn.api.spot.MoveCommand.CommandCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.spot.MoveCommand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.MoveCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.MoveCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.MoveCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.MoveCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    moveType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    moveId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    customGaitCommand: (f = msg.getCustomGaitCommand()) && bosdyn_api_spot_choreography_params_pb.CustomGaitCommand.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.MoveCommand}
 */
proto.bosdyn.api.spot.MoveCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.MoveCommand;
  return proto.bosdyn.api.spot.MoveCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.MoveCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.MoveCommand}
 */
proto.bosdyn.api.spot.MoveCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMoveType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMoveId(value);
      break;
    case 3:
      var value = new bosdyn_api_spot_choreography_params_pb.CustomGaitCommand;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.CustomGaitCommand.deserializeBinaryFromReader);
      msg.setCustomGaitCommand(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.MoveCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.MoveCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.MoveCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.MoveCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMoveType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMoveId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCustomGaitCommand();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_spot_choreography_params_pb.CustomGaitCommand.serializeBinaryToWriter
    );
  }
};


/**
 * optional string move_type = 1;
 * @return {string}
 */
proto.bosdyn.api.spot.MoveCommand.prototype.getMoveType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.MoveCommand} returns this
 */
proto.bosdyn.api.spot.MoveCommand.prototype.setMoveType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 move_id = 2;
 * @return {number}
 */
proto.bosdyn.api.spot.MoveCommand.prototype.getMoveId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.MoveCommand} returns this
 */
proto.bosdyn.api.spot.MoveCommand.prototype.setMoveId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional CustomGaitCommand custom_gait_command = 3;
 * @return {?proto.bosdyn.api.spot.CustomGaitCommand}
 */
proto.bosdyn.api.spot.MoveCommand.prototype.getCustomGaitCommand = function() {
  return /** @type{?proto.bosdyn.api.spot.CustomGaitCommand} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.CustomGaitCommand, 3));
};


/**
 * @param {?proto.bosdyn.api.spot.CustomGaitCommand|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveCommand} returns this
*/
proto.bosdyn.api.spot.MoveCommand.prototype.setCustomGaitCommand = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bosdyn.api.spot.MoveCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveCommand} returns this
 */
proto.bosdyn.api.spot.MoveCommand.prototype.clearCustomGaitCommand = function() {
  return this.setCustomGaitCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveCommand.prototype.hasCustomGaitCommand = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ChoreographyCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ChoreographyCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    commandsList: jspb.Message.toObjectList(msg.getCommandsList(),
    proto.bosdyn.api.spot.MoveCommand.toObject, includeInstance),
    lease: (f = msg.getLease()) && bosdyn_api_lease_pb.Lease.toObject(includeInstance, f),
    commandEndTime: (f = msg.getCommandEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandRequest}
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ChoreographyCommandRequest;
  return proto.bosdyn.api.spot.ChoreographyCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ChoreographyCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandRequest}
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bosdyn.api.spot.MoveCommand;
      reader.readMessage(value,proto.bosdyn.api.spot.MoveCommand.deserializeBinaryFromReader);
      msg.addCommands(value);
      break;
    case 3:
      var value = new bosdyn_api_lease_pb.Lease;
      reader.readMessage(value,bosdyn_api_lease_pb.Lease.deserializeBinaryFromReader);
      msg.setLease(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCommandEndTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ChoreographyCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ChoreographyCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getCommandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bosdyn.api.spot.MoveCommand.serializeBinaryToWriter
    );
  }
  f = message.getLease();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_lease_pb.Lease.serializeBinaryToWriter
    );
  }
  f = message.getCommandEndTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandRequest} returns this
*/
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandRequest} returns this
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated MoveCommand commands = 2;
 * @return {!Array<!proto.bosdyn.api.spot.MoveCommand>}
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.getCommandsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.spot.MoveCommand>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.spot.MoveCommand, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.spot.MoveCommand>} value
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandRequest} returns this
*/
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.setCommandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.spot.MoveCommand=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.MoveCommand}
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.addCommands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.spot.MoveCommand, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandRequest} returns this
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.clearCommandsList = function() {
  return this.setCommandsList([]);
};


/**
 * optional bosdyn.api.Lease lease = 3;
 * @return {?proto.bosdyn.api.Lease}
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.getLease = function() {
  return /** @type{?proto.bosdyn.api.Lease} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_lease_pb.Lease, 3));
};


/**
 * @param {?proto.bosdyn.api.Lease|undefined} value
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandRequest} returns this
*/
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.setLease = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandRequest} returns this
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.clearLease = function() {
  return this.setLease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.hasLease = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp command_end_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.getCommandEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandRequest} returns this
*/
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.setCommandEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandRequest} returns this
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.clearCommandEndTime = function() {
  return this.setCommandEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChoreographyCommandRequest.prototype.hasCommandEndTime = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ChoreographyCommandResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ChoreographyCommandResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    leaseUseResult: (f = msg.getLeaseUseResult()) && bosdyn_api_lease_pb.LeaseUseResult.toObject(includeInstance, f),
    statusList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandResponse}
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ChoreographyCommandResponse;
  return proto.bosdyn.api.spot.ChoreographyCommandResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ChoreographyCommandResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandResponse}
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new bosdyn_api_lease_pb.LeaseUseResult;
      reader.readMessage(value,bosdyn_api_lease_pb.LeaseUseResult.deserializeBinaryFromReader);
      msg.setLeaseUseResult(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.bosdyn.api.spot.ChoreographyCommandResponse.Status>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStatus(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ChoreographyCommandResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ChoreographyCommandResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getLeaseUseResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_lease_pb.LeaseUseResult.serializeBinaryToWriter
    );
  }
  f = message.getStatusList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_ACCEPTED_WITH_MODIFICATION: 2,
  STATUS_LEASE_ERROR: 3,
  STATUS_NO_MATCHING_MOVE: 4,
  STATUS_INVALID_COMMAND: 5,
  STATUS_ALREADY_EXPIRED: 6
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandResponse} returns this
*/
proto.bosdyn.api.spot.ChoreographyCommandResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.LeaseUseResult lease_use_result = 2;
 * @return {?proto.bosdyn.api.LeaseUseResult}
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.prototype.getLeaseUseResult = function() {
  return /** @type{?proto.bosdyn.api.LeaseUseResult} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_lease_pb.LeaseUseResult, 2));
};


/**
 * @param {?proto.bosdyn.api.LeaseUseResult|undefined} value
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandResponse} returns this
*/
proto.bosdyn.api.spot.ChoreographyCommandResponse.prototype.setLeaseUseResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.prototype.clearLeaseUseResult = function() {
  return this.setLeaseUseResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.prototype.hasLeaseUseResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Status status = 3;
 * @return {!Array<!proto.bosdyn.api.spot.ChoreographyCommandResponse.Status>}
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.prototype.getStatusList = function() {
  return /** @type {!Array<!proto.bosdyn.api.spot.ChoreographyCommandResponse.Status>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.bosdyn.api.spot.ChoreographyCommandResponse.Status>} value
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.prototype.setStatusList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.bosdyn.api.spot.ChoreographyCommandResponse.Status} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.prototype.addStatus = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.ChoreographyCommandResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyCommandResponse.prototype.clearStatusList = function() {
  return this.setStatusList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.MoveInfo.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.MoveInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.MoveInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.MoveInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    moveLengthSlices: jspb.Message.getFieldWithDefault(msg, 2, 0),
    moveLengthTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    isExtendable: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    minMoveLengthSlices: jspb.Message.getFieldWithDefault(msg, 13, 0),
    maxMoveLengthSlices: jspb.Message.getFieldWithDefault(msg, 14, 0),
    minTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    maxTime: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    entranceStatesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    exitState: jspb.Message.getFieldWithDefault(msg, 5, 0),
    controlsArm: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    controlsLegs: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    controlsBody: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    controlsGripper: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    controlsLights: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    controlsAnnotations: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    controlsAudioVisualLights: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    controlsAudioVisualBuzzer: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    isLooping: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    display: (f = msg.getDisplay()) && proto.bosdyn.api.spot.ChoreographerDisplayInfo.toObject(includeInstance, f),
    animatedMoveGeneratedId: (f = msg.getAnimatedMoveGeneratedId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.MoveInfo}
 */
proto.bosdyn.api.spot.MoveInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.MoveInfo;
  return proto.bosdyn.api.spot.MoveInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.MoveInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.MoveInfo}
 */
proto.bosdyn.api.spot.MoveInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMoveLengthSlices(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMoveLengthTime(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsExtendable(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinMoveLengthSlices(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxMoveLengthSlices(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinTime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxTime(value);
      break;
    case 4:
      var values = /** @type {!Array<!proto.bosdyn.api.spot.MoveInfo.TransitionState>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addEntranceStates(values[i]);
      }
      break;
    case 5:
      var value = /** @type {!proto.bosdyn.api.spot.MoveInfo.TransitionState} */ (reader.readEnum());
      msg.setExitState(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setControlsArm(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setControlsLegs(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setControlsBody(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setControlsGripper(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setControlsLights(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setControlsAnnotations(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setControlsAudioVisualLights(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setControlsAudioVisualBuzzer(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLooping(value);
      break;
    case 11:
      var value = new proto.bosdyn.api.spot.ChoreographerDisplayInfo;
      reader.readMessage(value,proto.bosdyn.api.spot.ChoreographerDisplayInfo.deserializeBinaryFromReader);
      msg.setDisplay(value);
      break;
    case 16:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAnimatedMoveGeneratedId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.MoveInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.MoveInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.MoveInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMoveLengthSlices();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMoveLengthTime();
  if (f !== 0.0) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = message.getIsExtendable();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getMinMoveLengthSlices();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getMaxMoveLengthSlices();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getMinTime();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getMaxTime();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getEntranceStatesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      4,
      f
    );
  }
  f = message.getExitState();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getControlsArm();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getControlsLegs();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getControlsBody();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getControlsGripper();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getControlsLights();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getControlsAnnotations();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getControlsAudioVisualLights();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getControlsAudioVisualBuzzer();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getIsLooping();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getDisplay();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.bosdyn.api.spot.ChoreographerDisplayInfo.serializeBinaryToWriter
    );
  }
  f = message.getAnimatedMoveGeneratedId();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.MoveInfo.TransitionState = {
  TRANSITION_STATE_UNKNOWN: 0,
  TRANSITION_STATE_STAND: 1,
  TRANSITION_STATE_KNEEL: 2,
  TRANSITION_STATE_SIT: 3,
  TRANSITION_STATE_SPRAWL: 4
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 move_length_slices = 2;
 * @return {number}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getMoveLengthSlices = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setMoveLengthSlices = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double move_length_time = 15;
 * @return {number}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getMoveLengthTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setMoveLengthTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional bool is_extendable = 3;
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getIsExtendable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setIsExtendable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int32 min_move_length_slices = 13;
 * @return {number}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getMinMoveLengthSlices = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setMinMoveLengthSlices = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 max_move_length_slices = 14;
 * @return {number}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getMaxMoveLengthSlices = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setMaxMoveLengthSlices = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional double min_time = 6;
 * @return {number}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getMinTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setMinTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double max_time = 7;
 * @return {number}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getMaxTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setMaxTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * repeated TransitionState entrance_states = 4;
 * @return {!Array<!proto.bosdyn.api.spot.MoveInfo.TransitionState>}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getEntranceStatesList = function() {
  return /** @type {!Array<!proto.bosdyn.api.spot.MoveInfo.TransitionState>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<!proto.bosdyn.api.spot.MoveInfo.TransitionState>} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setEntranceStatesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.bosdyn.api.spot.MoveInfo.TransitionState} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.addEntranceStates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.clearEntranceStatesList = function() {
  return this.setEntranceStatesList([]);
};


/**
 * optional TransitionState exit_state = 5;
 * @return {!proto.bosdyn.api.spot.MoveInfo.TransitionState}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getExitState = function() {
  return /** @type {!proto.bosdyn.api.spot.MoveInfo.TransitionState} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.MoveInfo.TransitionState} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setExitState = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional bool controls_arm = 8;
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getControlsArm = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setControlsArm = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool controls_legs = 9;
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getControlsLegs = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setControlsLegs = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool controls_body = 10;
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getControlsBody = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setControlsBody = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool controls_gripper = 12;
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getControlsGripper = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setControlsGripper = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool controls_lights = 17;
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getControlsLights = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setControlsLights = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional bool controls_annotations = 18;
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getControlsAnnotations = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setControlsAnnotations = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional bool controls_audio_visual_lights = 20;
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getControlsAudioVisualLights = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setControlsAudioVisualLights = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional bool controls_audio_visual_buzzer = 21;
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getControlsAudioVisualBuzzer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setControlsAudioVisualBuzzer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional bool is_looping = 19;
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getIsLooping = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.setIsLooping = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * optional ChoreographerDisplayInfo display = 11;
 * @return {?proto.bosdyn.api.spot.ChoreographerDisplayInfo}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getDisplay = function() {
  return /** @type{?proto.bosdyn.api.spot.ChoreographerDisplayInfo} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.ChoreographerDisplayInfo, 11));
};


/**
 * @param {?proto.bosdyn.api.spot.ChoreographerDisplayInfo|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
*/
proto.bosdyn.api.spot.MoveInfo.prototype.setDisplay = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.clearDisplay = function() {
  return this.setDisplay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.hasDisplay = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.StringValue animated_move_generated_id = 16;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.getAnimatedMoveGeneratedId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 16));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
*/
proto.bosdyn.api.spot.MoveInfo.prototype.setAnimatedMoveGeneratedId = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.MoveInfo} returns this
 */
proto.bosdyn.api.spot.MoveInfo.prototype.clearAnimatedMoveGeneratedId = function() {
  return this.setAnimatedMoveGeneratedId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.MoveInfo.prototype.hasAnimatedMoveGeneratedId = function() {
  return jspb.Message.getField(this, 16) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.repeatedFields_ = [13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ChoreographerDisplayInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ChoreographerDisplayInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    color: (f = msg.getColor()) && proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.toObject(includeInstance, f),
    markersList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 14, ""),
    image: jspb.Message.getFieldWithDefault(msg, 15, ""),
    category: jspb.Message.getFieldWithDefault(msg, 16, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ChoreographerDisplayInfo}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ChoreographerDisplayInfo;
  return proto.bosdyn.api.spot.ChoreographerDisplayInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ChoreographerDisplayInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ChoreographerDisplayInfo}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color;
      reader.readMessage(value,proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.deserializeBinaryFromReader);
      msg.setColor(value);
      break;
    case 13:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addMarkers(values[i]);
      }
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 16:
      var value = /** @type {!proto.bosdyn.api.spot.ChoreographerDisplayInfo.Category} */ (reader.readEnum());
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ChoreographerDisplayInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ChoreographerDisplayInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.serializeBinaryToWriter
    );
  }
  f = message.getMarkersList();
  if (f.length > 0) {
    writer.writePackedInt32(
      13,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getCategory();
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
proto.bosdyn.api.spot.ChoreographerDisplayInfo.Category = {
  CATEGORY_UNKNOWN: 0,
  CATEGORY_BODY: 1,
  CATEGORY_STEP: 2,
  CATEGORY_DYNAMIC: 3,
  CATEGORY_TRANSITION: 4,
  CATEGORY_KNEEL: 5,
  CATEGORY_ARM: 6,
  CATEGORY_ANIMATION: 7,
  CATEGORY_MPC: 8,
  CATEGORY_LIGHTS: 9,
  CATEGORY_ANNOTATIONS: 10,
  CATEGORY_AUDIO_VISUAL_LIGHTS: 11,
  CATEGORY_AUDIO_VISUAL_BUZZER: 12
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.toObject = function(includeInstance, msg) {
  var f, obj = {
    r: jspb.Message.getFieldWithDefault(msg, 1, 0),
    g: jspb.Message.getFieldWithDefault(msg, 2, 0),
    b: jspb.Message.getFieldWithDefault(msg, 3, 0),
    a: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color;
  return proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setA(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getA();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional int32 r = 1;
 * @return {number}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.prototype.getR = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color} returns this
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.prototype.setR = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 g = 2;
 * @return {number}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.prototype.getG = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color} returns this
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.prototype.setG = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 b = 3;
 * @return {number}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.prototype.getB = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color} returns this
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.prototype.setB = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional double a = 4;
 * @return {number}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.prototype.getA = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color} returns this
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color.prototype.setA = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional Color color = 1;
 * @return {?proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.prototype.getColor = function() {
  return /** @type{?proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.ChoreographerDisplayInfo.Color|undefined} value
 * @return {!proto.bosdyn.api.spot.ChoreographerDisplayInfo} returns this
*/
proto.bosdyn.api.spot.ChoreographerDisplayInfo.prototype.setColor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChoreographerDisplayInfo} returns this
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.prototype.hasColor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated int32 markers = 13;
 * @return {!Array<number>}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.prototype.getMarkersList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.bosdyn.api.spot.ChoreographerDisplayInfo} returns this
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.prototype.setMarkersList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.ChoreographerDisplayInfo} returns this
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.prototype.addMarkers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.ChoreographerDisplayInfo} returns this
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.prototype.clearMarkersList = function() {
  return this.setMarkersList([]);
};


/**
 * optional string description = 14;
 * @return {string}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.ChoreographerDisplayInfo} returns this
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string image = 15;
 * @return {string}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.ChoreographerDisplayInfo} returns this
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional Category category = 16;
 * @return {!proto.bosdyn.api.spot.ChoreographerDisplayInfo.Category}
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.prototype.getCategory = function() {
  return /** @type {!proto.bosdyn.api.spot.ChoreographerDisplayInfo.Category} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.ChoreographerDisplayInfo.Category} value
 * @return {!proto.bosdyn.api.spot.ChoreographerDisplayInfo} returns this
 */
proto.bosdyn.api.spot.ChoreographerDisplayInfo.prototype.setCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 16, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.ChoreographySequence.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.ChoreographySequence.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ChoreographySequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ChoreographySequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographySequence.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    slicesPerMinute: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    movesList: jspb.Message.toObjectList(msg.getMovesList(),
    proto.bosdyn.api.spot.MoveParams.toObject, includeInstance),
    choreographyInfo: (f = msg.getChoreographyInfo()) && proto.bosdyn.api.spot.ChoreographyInfo.toObject(includeInstance, f),
    entranceState: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ChoreographySequence}
 */
proto.bosdyn.api.spot.ChoreographySequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ChoreographySequence;
  return proto.bosdyn.api.spot.ChoreographySequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ChoreographySequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ChoreographySequence}
 */
proto.bosdyn.api.spot.ChoreographySequence.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSlicesPerMinute(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.spot.MoveParams;
      reader.readMessage(value,proto.bosdyn.api.spot.MoveParams.deserializeBinaryFromReader);
      msg.addMoves(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.spot.ChoreographyInfo;
      reader.readMessage(value,proto.bosdyn.api.spot.ChoreographyInfo.deserializeBinaryFromReader);
      msg.setChoreographyInfo(value);
      break;
    case 5:
      var value = /** @type {!proto.bosdyn.api.spot.MoveInfo.TransitionState} */ (reader.readEnum());
      msg.setEntranceState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.ChoreographySequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ChoreographySequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ChoreographySequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographySequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSlicesPerMinute();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getMovesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.bosdyn.api.spot.MoveParams.serializeBinaryToWriter
    );
  }
  f = message.getChoreographyInfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.spot.ChoreographyInfo.serializeBinaryToWriter
    );
  }
  f = message.getEntranceState();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.bosdyn.api.spot.ChoreographySequence.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.ChoreographySequence} returns this
 */
proto.bosdyn.api.spot.ChoreographySequence.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double slices_per_minute = 2;
 * @return {number}
 */
proto.bosdyn.api.spot.ChoreographySequence.prototype.getSlicesPerMinute = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.ChoreographySequence} returns this
 */
proto.bosdyn.api.spot.ChoreographySequence.prototype.setSlicesPerMinute = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * repeated MoveParams moves = 3;
 * @return {!Array<!proto.bosdyn.api.spot.MoveParams>}
 */
proto.bosdyn.api.spot.ChoreographySequence.prototype.getMovesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.spot.MoveParams>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.spot.MoveParams, 3));
};


/**
 * @param {!Array<!proto.bosdyn.api.spot.MoveParams>} value
 * @return {!proto.bosdyn.api.spot.ChoreographySequence} returns this
*/
proto.bosdyn.api.spot.ChoreographySequence.prototype.setMovesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.bosdyn.api.spot.MoveParams=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.MoveParams}
 */
proto.bosdyn.api.spot.ChoreographySequence.prototype.addMoves = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.bosdyn.api.spot.MoveParams, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.ChoreographySequence} returns this
 */
proto.bosdyn.api.spot.ChoreographySequence.prototype.clearMovesList = function() {
  return this.setMovesList([]);
};


/**
 * optional ChoreographyInfo choreography_info = 4;
 * @return {?proto.bosdyn.api.spot.ChoreographyInfo}
 */
proto.bosdyn.api.spot.ChoreographySequence.prototype.getChoreographyInfo = function() {
  return /** @type{?proto.bosdyn.api.spot.ChoreographyInfo} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.ChoreographyInfo, 4));
};


/**
 * @param {?proto.bosdyn.api.spot.ChoreographyInfo|undefined} value
 * @return {!proto.bosdyn.api.spot.ChoreographySequence} returns this
*/
proto.bosdyn.api.spot.ChoreographySequence.prototype.setChoreographyInfo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChoreographySequence} returns this
 */
proto.bosdyn.api.spot.ChoreographySequence.prototype.clearChoreographyInfo = function() {
  return this.setChoreographyInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChoreographySequence.prototype.hasChoreographyInfo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MoveInfo.TransitionState entrance_state = 5;
 * @return {!proto.bosdyn.api.spot.MoveInfo.TransitionState}
 */
proto.bosdyn.api.spot.ChoreographySequence.prototype.getEntranceState = function() {
  return /** @type {!proto.bosdyn.api.spot.MoveInfo.TransitionState} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.MoveInfo.TransitionState} value
 * @return {!proto.bosdyn.api.spot.ChoreographySequence} returns this
 */
proto.bosdyn.api.spot.ChoreographySequence.prototype.setEntranceState = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.ChoreographyInfo.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.ChoreographyInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ChoreographyInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ChoreographyInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographyInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    labelsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ChoreographyInfo}
 */
proto.bosdyn.api.spot.ChoreographyInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ChoreographyInfo;
  return proto.bosdyn.api.spot.ChoreographyInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ChoreographyInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ChoreographyInfo}
 */
proto.bosdyn.api.spot.ChoreographyInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addLabels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.ChoreographyInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ChoreographyInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ChoreographyInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographyInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * repeated string labels = 4;
 * @return {!Array<string>}
 */
proto.bosdyn.api.spot.ChoreographyInfo.prototype.getLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.spot.ChoreographyInfo} returns this
 */
proto.bosdyn.api.spot.ChoreographyInfo.prototype.setLabelsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.ChoreographyInfo} returns this
 */
proto.bosdyn.api.spot.ChoreographyInfo.prototype.addLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.ChoreographyInfo} returns this
 */
proto.bosdyn.api.spot.ChoreographyInfo.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.ChoreographerSave.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ChoreographerSave.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ChoreographerSave} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographerSave.toObject = function(includeInstance, msg) {
  var f, obj = {
    choreographySequence: (f = msg.getChoreographySequence()) && proto.bosdyn.api.spot.ChoreographySequence.toObject(includeInstance, f),
    musicFile: jspb.Message.getFieldWithDefault(msg, 2, ""),
    musicStartSlice: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    choreographyStartSlice: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ChoreographerSave}
 */
proto.bosdyn.api.spot.ChoreographerSave.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ChoreographerSave;
  return proto.bosdyn.api.spot.ChoreographerSave.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ChoreographerSave} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ChoreographerSave}
 */
proto.bosdyn.api.spot.ChoreographerSave.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.ChoreographySequence;
      reader.readMessage(value,proto.bosdyn.api.spot.ChoreographySequence.deserializeBinaryFromReader);
      msg.setChoreographySequence(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMusicFile(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMusicStartSlice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChoreographyStartSlice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.ChoreographerSave.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ChoreographerSave.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ChoreographerSave} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographerSave.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChoreographySequence();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.ChoreographySequence.serializeBinaryToWriter
    );
  }
  f = message.getMusicFile();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMusicStartSlice();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getChoreographyStartSlice();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional ChoreographySequence choreography_sequence = 1;
 * @return {?proto.bosdyn.api.spot.ChoreographySequence}
 */
proto.bosdyn.api.spot.ChoreographerSave.prototype.getChoreographySequence = function() {
  return /** @type{?proto.bosdyn.api.spot.ChoreographySequence} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.ChoreographySequence, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.ChoreographySequence|undefined} value
 * @return {!proto.bosdyn.api.spot.ChoreographerSave} returns this
*/
proto.bosdyn.api.spot.ChoreographerSave.prototype.setChoreographySequence = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChoreographerSave} returns this
 */
proto.bosdyn.api.spot.ChoreographerSave.prototype.clearChoreographySequence = function() {
  return this.setChoreographySequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChoreographerSave.prototype.hasChoreographySequence = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string music_file = 2;
 * @return {string}
 */
proto.bosdyn.api.spot.ChoreographerSave.prototype.getMusicFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.ChoreographerSave} returns this
 */
proto.bosdyn.api.spot.ChoreographerSave.prototype.setMusicFile = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double music_start_slice = 3;
 * @return {number}
 */
proto.bosdyn.api.spot.ChoreographerSave.prototype.getMusicStartSlice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.ChoreographerSave} returns this
 */
proto.bosdyn.api.spot.ChoreographerSave.prototype.setMusicStartSlice = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double choreography_start_slice = 4;
 * @return {number}
 */
proto.bosdyn.api.spot.ChoreographerSave.prototype.getChoreographyStartSlice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.ChoreographerSave} returns this
 */
proto.bosdyn.api.spot.ChoreographerSave.prototype.setChoreographyStartSlice = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.Animation.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.Animation.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.Animation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.Animation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.Animation.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    animationKeyframesList: jspb.Message.toObjectList(msg.getAnimationKeyframesList(),
    proto.bosdyn.api.spot.AnimationKeyframe.toObject, includeInstance),
    controlsArm: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    controlsLegs: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    controlsBody: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    controlsGripper: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    trackSwingTrajectories: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    assumeZeroRollAndPitch: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    armPlayback: jspb.Message.getFieldWithDefault(msg, 17, 0),
    bpm: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    retimeToIntegerSlices: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    minimumParameters: (f = msg.getMinimumParameters()) && bosdyn_api_spot_choreography_params_pb.AnimateParams.toObject(includeInstance, f),
    defaultParameters: (f = msg.getDefaultParameters()) && bosdyn_api_spot_choreography_params_pb.AnimateParams.toObject(includeInstance, f),
    maximumParameters: (f = msg.getMaximumParameters()) && bosdyn_api_spot_choreography_params_pb.AnimateParams.toObject(includeInstance, f),
    truncatable: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    extendable: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    neutralStart: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    preciseSteps: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    preciseTiming: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    timingAdjustability: jspb.Message.getFloatingPointFieldWithDefault(msg, 23, 0.0),
    armRequired: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    armProhibited: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    noLooping: jspb.Message.getBooleanFieldWithDefault(msg, 21, false),
    startsSitting: jspb.Message.getBooleanFieldWithDefault(msg, 24, false),
    customGaitCycle: jspb.Message.getBooleanFieldWithDefault(msg, 27, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.Animation}
 */
proto.bosdyn.api.spot.Animation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.Animation;
  return proto.bosdyn.api.spot.Animation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.Animation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.Animation}
 */
proto.bosdyn.api.spot.Animation.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bosdyn.api.spot.AnimationKeyframe;
      reader.readMessage(value,proto.bosdyn.api.spot.AnimationKeyframe.deserializeBinaryFromReader);
      msg.addAnimationKeyframes(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setControlsArm(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setControlsLegs(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setControlsBody(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setControlsGripper(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrackSwingTrajectories(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAssumeZeroRollAndPitch(value);
      break;
    case 17:
      var value = /** @type {!proto.bosdyn.api.spot.Animation.ArmPlayback} */ (reader.readEnum());
      msg.setArmPlayback(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBpm(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRetimeToIntegerSlices(value);
      break;
    case 9:
      var value = new bosdyn_api_spot_choreography_params_pb.AnimateParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.AnimateParams.deserializeBinaryFromReader);
      msg.setMinimumParameters(value);
      break;
    case 10:
      var value = new bosdyn_api_spot_choreography_params_pb.AnimateParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.AnimateParams.deserializeBinaryFromReader);
      msg.setDefaultParameters(value);
      break;
    case 11:
      var value = new bosdyn_api_spot_choreography_params_pb.AnimateParams;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.AnimateParams.deserializeBinaryFromReader);
      msg.setMaximumParameters(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTruncatable(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExtendable(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNeutralStart(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreciseSteps(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreciseTiming(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimingAdjustability(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setArmRequired(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setArmProhibited(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoLooping(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStartsSitting(value);
      break;
    case 27:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCustomGaitCycle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.Animation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.Animation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.Animation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.Animation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAnimationKeyframesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bosdyn.api.spot.AnimationKeyframe.serializeBinaryToWriter
    );
  }
  f = message.getControlsArm();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getControlsLegs();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getControlsBody();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getControlsGripper();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getTrackSwingTrajectories();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getAssumeZeroRollAndPitch();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getArmPlayback();
  if (f !== 0.0) {
    writer.writeEnum(
      17,
      f
    );
  }
  f = message.getBpm();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getRetimeToIntegerSlices();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getMinimumParameters();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      bosdyn_api_spot_choreography_params_pb.AnimateParams.serializeBinaryToWriter
    );
  }
  f = message.getDefaultParameters();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      bosdyn_api_spot_choreography_params_pb.AnimateParams.serializeBinaryToWriter
    );
  }
  f = message.getMaximumParameters();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      bosdyn_api_spot_choreography_params_pb.AnimateParams.serializeBinaryToWriter
    );
  }
  f = message.getTruncatable();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getExtendable();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getNeutralStart();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getPreciseSteps();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getPreciseTiming();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getTimingAdjustability();
  if (f !== 0.0) {
    writer.writeDouble(
      23,
      f
    );
  }
  f = message.getArmRequired();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getArmProhibited();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getNoLooping();
  if (f) {
    writer.writeBool(
      21,
      f
    );
  }
  f = message.getStartsSitting();
  if (f) {
    writer.writeBool(
      24,
      f
    );
  }
  f = message.getCustomGaitCycle();
  if (f) {
    writer.writeBool(
      27,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.Animation.ArmPlayback = {
  ARM_PLAYBACK_DEFAULT: 0,
  ARM_PLAYBACK_JOINTSPACE: 1,
  ARM_PLAYBACK_WORKSPACE: 2,
  ARM_PLAYBACK_WORKSPACE_DANCE_FRAME: 3
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.bosdyn.api.spot.Animation.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated AnimationKeyframe animation_keyframes = 2;
 * @return {!Array<!proto.bosdyn.api.spot.AnimationKeyframe>}
 */
proto.bosdyn.api.spot.Animation.prototype.getAnimationKeyframesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.spot.AnimationKeyframe>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.spot.AnimationKeyframe, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.spot.AnimationKeyframe>} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
*/
proto.bosdyn.api.spot.Animation.prototype.setAnimationKeyframesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.spot.AnimationKeyframe=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.AnimationKeyframe}
 */
proto.bosdyn.api.spot.Animation.prototype.addAnimationKeyframes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.spot.AnimationKeyframe, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.clearAnimationKeyframesList = function() {
  return this.setAnimationKeyframesList([]);
};


/**
 * optional bool controls_arm = 3;
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.getControlsArm = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setControlsArm = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool controls_legs = 4;
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.getControlsLegs = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setControlsLegs = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool controls_body = 5;
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.getControlsBody = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setControlsBody = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool controls_gripper = 6;
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.getControlsGripper = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setControlsGripper = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool track_swing_trajectories = 16;
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.getTrackSwingTrajectories = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setTrackSwingTrajectories = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional bool assume_zero_roll_and_pitch = 19;
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.getAssumeZeroRollAndPitch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setAssumeZeroRollAndPitch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * optional ArmPlayback arm_playback = 17;
 * @return {!proto.bosdyn.api.spot.Animation.ArmPlayback}
 */
proto.bosdyn.api.spot.Animation.prototype.getArmPlayback = function() {
  return /** @type {!proto.bosdyn.api.spot.Animation.ArmPlayback} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.Animation.ArmPlayback} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setArmPlayback = function(value) {
  return jspb.Message.setProto3EnumField(this, 17, value);
};


/**
 * optional double bpm = 7;
 * @return {number}
 */
proto.bosdyn.api.spot.Animation.prototype.getBpm = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setBpm = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional bool retime_to_integer_slices = 8;
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.getRetimeToIntegerSlices = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setRetimeToIntegerSlices = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional AnimateParams minimum_parameters = 9;
 * @return {?proto.bosdyn.api.spot.AnimateParams}
 */
proto.bosdyn.api.spot.Animation.prototype.getMinimumParameters = function() {
  return /** @type{?proto.bosdyn.api.spot.AnimateParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.AnimateParams, 9));
};


/**
 * @param {?proto.bosdyn.api.spot.AnimateParams|undefined} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
*/
proto.bosdyn.api.spot.Animation.prototype.setMinimumParameters = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.clearMinimumParameters = function() {
  return this.setMinimumParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.hasMinimumParameters = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional AnimateParams default_parameters = 10;
 * @return {?proto.bosdyn.api.spot.AnimateParams}
 */
proto.bosdyn.api.spot.Animation.prototype.getDefaultParameters = function() {
  return /** @type{?proto.bosdyn.api.spot.AnimateParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.AnimateParams, 10));
};


/**
 * @param {?proto.bosdyn.api.spot.AnimateParams|undefined} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
*/
proto.bosdyn.api.spot.Animation.prototype.setDefaultParameters = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.clearDefaultParameters = function() {
  return this.setDefaultParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.hasDefaultParameters = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional AnimateParams maximum_parameters = 11;
 * @return {?proto.bosdyn.api.spot.AnimateParams}
 */
proto.bosdyn.api.spot.Animation.prototype.getMaximumParameters = function() {
  return /** @type{?proto.bosdyn.api.spot.AnimateParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.AnimateParams, 11));
};


/**
 * @param {?proto.bosdyn.api.spot.AnimateParams|undefined} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
*/
proto.bosdyn.api.spot.Animation.prototype.setMaximumParameters = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.clearMaximumParameters = function() {
  return this.setMaximumParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.hasMaximumParameters = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool truncatable = 12;
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.getTruncatable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setTruncatable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool extendable = 13;
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.getExtendable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setExtendable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional bool neutral_start = 14;
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.getNeutralStart = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setNeutralStart = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool precise_steps = 15;
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.getPreciseSteps = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setPreciseSteps = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional bool precise_timing = 18;
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.getPreciseTiming = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setPreciseTiming = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional double timing_adjustability = 23;
 * @return {number}
 */
proto.bosdyn.api.spot.Animation.prototype.getTimingAdjustability = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 23, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setTimingAdjustability = function(value) {
  return jspb.Message.setProto3FloatField(this, 23, value);
};


/**
 * optional bool arm_required = 20;
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.getArmRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setArmRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional bool arm_prohibited = 22;
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.getArmProhibited = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setArmProhibited = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional bool no_looping = 21;
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.getNoLooping = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setNoLooping = function(value) {
  return jspb.Message.setProto3BooleanField(this, 21, value);
};


/**
 * optional bool starts_sitting = 24;
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.getStartsSitting = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 24, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setStartsSitting = function(value) {
  return jspb.Message.setProto3BooleanField(this, 24, value);
};


/**
 * optional bool custom_gait_cycle = 27;
 * @return {boolean}
 */
proto.bosdyn.api.spot.Animation.prototype.getCustomGaitCycle = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 27, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.spot.Animation} returns this
 */
proto.bosdyn.api.spot.Animation.prototype.setCustomGaitCycle = function(value) {
  return jspb.Message.setProto3BooleanField(this, 27, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.AnimationKeyframe.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.AnimationKeyframe.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.AnimationKeyframe} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimationKeyframe.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    gripper: (f = msg.getGripper()) && proto.bosdyn.api.spot.AnimateGripper.toObject(includeInstance, f),
    arm: (f = msg.getArm()) && proto.bosdyn.api.spot.AnimateArm.toObject(includeInstance, f),
    body: (f = msg.getBody()) && proto.bosdyn.api.spot.AnimateBody.toObject(includeInstance, f),
    legs: (f = msg.getLegs()) && proto.bosdyn.api.spot.AnimateLegs.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.AnimationKeyframe}
 */
proto.bosdyn.api.spot.AnimationKeyframe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.AnimationKeyframe;
  return proto.bosdyn.api.spot.AnimationKeyframe.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.AnimationKeyframe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.AnimationKeyframe}
 */
proto.bosdyn.api.spot.AnimationKeyframe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTime(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.spot.AnimateGripper;
      reader.readMessage(value,proto.bosdyn.api.spot.AnimateGripper.deserializeBinaryFromReader);
      msg.setGripper(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.spot.AnimateArm;
      reader.readMessage(value,proto.bosdyn.api.spot.AnimateArm.deserializeBinaryFromReader);
      msg.setArm(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.spot.AnimateBody;
      reader.readMessage(value,proto.bosdyn.api.spot.AnimateBody.deserializeBinaryFromReader);
      msg.setBody(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.spot.AnimateLegs;
      reader.readMessage(value,proto.bosdyn.api.spot.AnimateLegs.deserializeBinaryFromReader);
      msg.setLegs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.AnimationKeyframe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.AnimationKeyframe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.AnimationKeyframe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimationKeyframe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getGripper();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.spot.AnimateGripper.serializeBinaryToWriter
    );
  }
  f = message.getArm();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.spot.AnimateArm.serializeBinaryToWriter
    );
  }
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.spot.AnimateBody.serializeBinaryToWriter
    );
  }
  f = message.getLegs();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.spot.AnimateLegs.serializeBinaryToWriter
    );
  }
};


/**
 * optional double time = 1;
 * @return {number}
 */
proto.bosdyn.api.spot.AnimationKeyframe.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.AnimationKeyframe} returns this
 */
proto.bosdyn.api.spot.AnimationKeyframe.prototype.setTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional AnimateGripper gripper = 2;
 * @return {?proto.bosdyn.api.spot.AnimateGripper}
 */
proto.bosdyn.api.spot.AnimationKeyframe.prototype.getGripper = function() {
  return /** @type{?proto.bosdyn.api.spot.AnimateGripper} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.AnimateGripper, 2));
};


/**
 * @param {?proto.bosdyn.api.spot.AnimateGripper|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimationKeyframe} returns this
*/
proto.bosdyn.api.spot.AnimationKeyframe.prototype.setGripper = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimationKeyframe} returns this
 */
proto.bosdyn.api.spot.AnimationKeyframe.prototype.clearGripper = function() {
  return this.setGripper(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimationKeyframe.prototype.hasGripper = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AnimateArm arm = 3;
 * @return {?proto.bosdyn.api.spot.AnimateArm}
 */
proto.bosdyn.api.spot.AnimationKeyframe.prototype.getArm = function() {
  return /** @type{?proto.bosdyn.api.spot.AnimateArm} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.AnimateArm, 3));
};


/**
 * @param {?proto.bosdyn.api.spot.AnimateArm|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimationKeyframe} returns this
*/
proto.bosdyn.api.spot.AnimationKeyframe.prototype.setArm = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimationKeyframe} returns this
 */
proto.bosdyn.api.spot.AnimationKeyframe.prototype.clearArm = function() {
  return this.setArm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimationKeyframe.prototype.hasArm = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AnimateBody body = 4;
 * @return {?proto.bosdyn.api.spot.AnimateBody}
 */
proto.bosdyn.api.spot.AnimationKeyframe.prototype.getBody = function() {
  return /** @type{?proto.bosdyn.api.spot.AnimateBody} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.AnimateBody, 4));
};


/**
 * @param {?proto.bosdyn.api.spot.AnimateBody|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimationKeyframe} returns this
*/
proto.bosdyn.api.spot.AnimationKeyframe.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimationKeyframe} returns this
 */
proto.bosdyn.api.spot.AnimationKeyframe.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimationKeyframe.prototype.hasBody = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AnimateLegs legs = 5;
 * @return {?proto.bosdyn.api.spot.AnimateLegs}
 */
proto.bosdyn.api.spot.AnimationKeyframe.prototype.getLegs = function() {
  return /** @type{?proto.bosdyn.api.spot.AnimateLegs} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.AnimateLegs, 5));
};


/**
 * @param {?proto.bosdyn.api.spot.AnimateLegs|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimationKeyframe} returns this
*/
proto.bosdyn.api.spot.AnimationKeyframe.prototype.setLegs = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimationKeyframe} returns this
 */
proto.bosdyn.api.spot.AnimationKeyframe.prototype.clearLegs = function() {
  return this.setLegs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimationKeyframe.prototype.hasLegs = function() {
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
proto.bosdyn.api.spot.AnimateGripper.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.AnimateGripper.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.AnimateGripper} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimateGripper.toObject = function(includeInstance, msg) {
  var f, obj = {
    gripperAngle: (f = msg.getGripperAngle()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.AnimateGripper}
 */
proto.bosdyn.api.spot.AnimateGripper.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.AnimateGripper;
  return proto.bosdyn.api.spot.AnimateGripper.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.AnimateGripper} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.AnimateGripper}
 */
proto.bosdyn.api.spot.AnimateGripper.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setGripperAngle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.AnimateGripper.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.AnimateGripper.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.AnimateGripper} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimateGripper.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGripperAngle();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.DoubleValue gripper_angle = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.AnimateGripper.prototype.getGripperAngle = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateGripper} returns this
*/
proto.bosdyn.api.spot.AnimateGripper.prototype.setGripperAngle = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateGripper} returns this
 */
proto.bosdyn.api.spot.AnimateGripper.prototype.clearGripperAngle = function() {
  return this.setGripperAngle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateGripper.prototype.hasGripperAngle = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.spot.AnimateArm.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.bosdyn.api.spot.AnimateArm.ArmCase = {
  ARM_NOT_SET: 0,
  JOINT_ANGLES: 1,
  HAND_POSE: 2
};

/**
 * @return {proto.bosdyn.api.spot.AnimateArm.ArmCase}
 */
proto.bosdyn.api.spot.AnimateArm.prototype.getArmCase = function() {
  return /** @type {proto.bosdyn.api.spot.AnimateArm.ArmCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.spot.AnimateArm.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.AnimateArm.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.AnimateArm.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.AnimateArm} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimateArm.toObject = function(includeInstance, msg) {
  var f, obj = {
    jointAngles: (f = msg.getJointAngles()) && proto.bosdyn.api.spot.ArmJointAngles.toObject(includeInstance, f),
    handPose: (f = msg.getHandPose()) && proto.bosdyn.api.spot.AnimateArm.HandPose.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.AnimateArm}
 */
proto.bosdyn.api.spot.AnimateArm.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.AnimateArm;
  return proto.bosdyn.api.spot.AnimateArm.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.AnimateArm} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.AnimateArm}
 */
proto.bosdyn.api.spot.AnimateArm.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.ArmJointAngles;
      reader.readMessage(value,proto.bosdyn.api.spot.ArmJointAngles.deserializeBinaryFromReader);
      msg.setJointAngles(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.spot.AnimateArm.HandPose;
      reader.readMessage(value,proto.bosdyn.api.spot.AnimateArm.HandPose.deserializeBinaryFromReader);
      msg.setHandPose(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.AnimateArm.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.AnimateArm.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.AnimateArm} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimateArm.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJointAngles();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.ArmJointAngles.serializeBinaryToWriter
    );
  }
  f = message.getHandPose();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.spot.AnimateArm.HandPose.serializeBinaryToWriter
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
proto.bosdyn.api.spot.AnimateArm.HandPose.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.bosdyn.api.spot.AnimateArm.HandPose.OrientationCase = {
  ORIENTATION_NOT_SET: 0,
  EULER_ANGLES: 3,
  QUATERNION: 4
};

/**
 * @return {proto.bosdyn.api.spot.AnimateArm.HandPose.OrientationCase}
 */
proto.bosdyn.api.spot.AnimateArm.HandPose.prototype.getOrientationCase = function() {
  return /** @type {proto.bosdyn.api.spot.AnimateArm.HandPose.OrientationCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.spot.AnimateArm.HandPose.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.AnimateArm.HandPose.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.AnimateArm.HandPose.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.AnimateArm.HandPose} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimateArm.HandPose.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && bosdyn_api_geometry_pb.Vec3Value.toObject(includeInstance, f),
    eulerAngles: (f = msg.getEulerAngles()) && bosdyn_api_spot_choreography_params_pb.EulerZYXValue.toObject(includeInstance, f),
    quaternion: (f = msg.getQuaternion()) && bosdyn_api_geometry_pb.Quaternion.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.AnimateArm.HandPose}
 */
proto.bosdyn.api.spot.AnimateArm.HandPose.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.AnimateArm.HandPose;
  return proto.bosdyn.api.spot.AnimateArm.HandPose.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.AnimateArm.HandPose} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.AnimateArm.HandPose}
 */
proto.bosdyn.api.spot.AnimateArm.HandPose.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.Vec3Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3Value.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 3:
      var value = new bosdyn_api_spot_choreography_params_pb.EulerZYXValue;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.EulerZYXValue.deserializeBinaryFromReader);
      msg.setEulerAngles(value);
      break;
    case 4:
      var value = new bosdyn_api_geometry_pb.Quaternion;
      reader.readMessage(value,bosdyn_api_geometry_pb.Quaternion.deserializeBinaryFromReader);
      msg.setQuaternion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.AnimateArm.HandPose.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.AnimateArm.HandPose.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.AnimateArm.HandPose} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimateArm.HandPose.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.Vec3Value.serializeBinaryToWriter
    );
  }
  f = message.getEulerAngles();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_spot_choreography_params_pb.EulerZYXValue.serializeBinaryToWriter
    );
  }
  f = message.getQuaternion();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_geometry_pb.Quaternion.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.Vec3Value position = 1;
 * @return {?proto.bosdyn.api.Vec3Value}
 */
proto.bosdyn.api.spot.AnimateArm.HandPose.prototype.getPosition = function() {
  return /** @type{?proto.bosdyn.api.Vec3Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3Value, 1));
};


/**
 * @param {?proto.bosdyn.api.Vec3Value|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateArm.HandPose} returns this
*/
proto.bosdyn.api.spot.AnimateArm.HandPose.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateArm.HandPose} returns this
 */
proto.bosdyn.api.spot.AnimateArm.HandPose.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateArm.HandPose.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EulerZYXValue euler_angles = 3;
 * @return {?proto.bosdyn.api.spot.EulerZYXValue}
 */
proto.bosdyn.api.spot.AnimateArm.HandPose.prototype.getEulerAngles = function() {
  return /** @type{?proto.bosdyn.api.spot.EulerZYXValue} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.EulerZYXValue, 3));
};


/**
 * @param {?proto.bosdyn.api.spot.EulerZYXValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateArm.HandPose} returns this
*/
proto.bosdyn.api.spot.AnimateArm.HandPose.prototype.setEulerAngles = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bosdyn.api.spot.AnimateArm.HandPose.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateArm.HandPose} returns this
 */
proto.bosdyn.api.spot.AnimateArm.HandPose.prototype.clearEulerAngles = function() {
  return this.setEulerAngles(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateArm.HandPose.prototype.hasEulerAngles = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bosdyn.api.Quaternion quaternion = 4;
 * @return {?proto.bosdyn.api.Quaternion}
 */
proto.bosdyn.api.spot.AnimateArm.HandPose.prototype.getQuaternion = function() {
  return /** @type{?proto.bosdyn.api.Quaternion} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Quaternion, 4));
};


/**
 * @param {?proto.bosdyn.api.Quaternion|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateArm.HandPose} returns this
*/
proto.bosdyn.api.spot.AnimateArm.HandPose.prototype.setQuaternion = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bosdyn.api.spot.AnimateArm.HandPose.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateArm.HandPose} returns this
 */
proto.bosdyn.api.spot.AnimateArm.HandPose.prototype.clearQuaternion = function() {
  return this.setQuaternion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateArm.HandPose.prototype.hasQuaternion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ArmJointAngles joint_angles = 1;
 * @return {?proto.bosdyn.api.spot.ArmJointAngles}
 */
proto.bosdyn.api.spot.AnimateArm.prototype.getJointAngles = function() {
  return /** @type{?proto.bosdyn.api.spot.ArmJointAngles} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.ArmJointAngles, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.ArmJointAngles|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateArm} returns this
*/
proto.bosdyn.api.spot.AnimateArm.prototype.setJointAngles = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bosdyn.api.spot.AnimateArm.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateArm} returns this
 */
proto.bosdyn.api.spot.AnimateArm.prototype.clearJointAngles = function() {
  return this.setJointAngles(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateArm.prototype.hasJointAngles = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HandPose hand_pose = 2;
 * @return {?proto.bosdyn.api.spot.AnimateArm.HandPose}
 */
proto.bosdyn.api.spot.AnimateArm.prototype.getHandPose = function() {
  return /** @type{?proto.bosdyn.api.spot.AnimateArm.HandPose} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.AnimateArm.HandPose, 2));
};


/**
 * @param {?proto.bosdyn.api.spot.AnimateArm.HandPose|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateArm} returns this
*/
proto.bosdyn.api.spot.AnimateArm.prototype.setHandPose = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bosdyn.api.spot.AnimateArm.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateArm} returns this
 */
proto.bosdyn.api.spot.AnimateArm.prototype.clearHandPose = function() {
  return this.setHandPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateArm.prototype.hasHandPose = function() {
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
proto.bosdyn.api.spot.ArmJointAngles.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ArmJointAngles.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ArmJointAngles} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ArmJointAngles.toObject = function(includeInstance, msg) {
  var f, obj = {
    shoulder0: (f = msg.getShoulder0()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    shoulder1: (f = msg.getShoulder1()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    elbow0: (f = msg.getElbow0()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    elbow1: (f = msg.getElbow1()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    wrist0: (f = msg.getWrist0()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    wrist1: (f = msg.getWrist1()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ArmJointAngles}
 */
proto.bosdyn.api.spot.ArmJointAngles.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ArmJointAngles;
  return proto.bosdyn.api.spot.ArmJointAngles.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ArmJointAngles} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ArmJointAngles}
 */
proto.bosdyn.api.spot.ArmJointAngles.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ArmJointAngles.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ArmJointAngles} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ArmJointAngles.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional google.protobuf.DoubleValue shoulder_0 = 1;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.getShoulder0 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ArmJointAngles} returns this
*/
proto.bosdyn.api.spot.ArmJointAngles.prototype.setShoulder0 = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ArmJointAngles} returns this
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.clearShoulder0 = function() {
  return this.setShoulder0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.hasShoulder0 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue shoulder_1 = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.getShoulder1 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ArmJointAngles} returns this
*/
proto.bosdyn.api.spot.ArmJointAngles.prototype.setShoulder1 = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ArmJointAngles} returns this
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.clearShoulder1 = function() {
  return this.setShoulder1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.hasShoulder1 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.DoubleValue elbow_0 = 3;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.getElbow0 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 3));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ArmJointAngles} returns this
*/
proto.bosdyn.api.spot.ArmJointAngles.prototype.setElbow0 = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ArmJointAngles} returns this
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.clearElbow0 = function() {
  return this.setElbow0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.hasElbow0 = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue elbow_1 = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.getElbow1 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ArmJointAngles} returns this
*/
proto.bosdyn.api.spot.ArmJointAngles.prototype.setElbow1 = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ArmJointAngles} returns this
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.clearElbow1 = function() {
  return this.setElbow1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.hasElbow1 = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.DoubleValue wrist_0 = 5;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.getWrist0 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 5));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ArmJointAngles} returns this
*/
proto.bosdyn.api.spot.ArmJointAngles.prototype.setWrist0 = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ArmJointAngles} returns this
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.clearWrist0 = function() {
  return this.setWrist0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.hasWrist0 = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue wrist_1 = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.getWrist1 = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.spot.ArmJointAngles} returns this
*/
proto.bosdyn.api.spot.ArmJointAngles.prototype.setWrist1 = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ArmJointAngles} returns this
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.clearWrist1 = function() {
  return this.setWrist1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ArmJointAngles.prototype.hasWrist1 = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.spot.AnimateBody.oneofGroups_ = [[1,2],[3,4]];

/**
 * @enum {number}
 */
proto.bosdyn.api.spot.AnimateBody.PositionCase = {
  POSITION_NOT_SET: 0,
  BODY_POS: 1,
  COM_POS: 2
};

/**
 * @return {proto.bosdyn.api.spot.AnimateBody.PositionCase}
 */
proto.bosdyn.api.spot.AnimateBody.prototype.getPositionCase = function() {
  return /** @type {proto.bosdyn.api.spot.AnimateBody.PositionCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.spot.AnimateBody.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.bosdyn.api.spot.AnimateBody.OrientationCase = {
  ORIENTATION_NOT_SET: 0,
  EULER_ANGLES: 3,
  QUATERNION: 4
};

/**
 * @return {proto.bosdyn.api.spot.AnimateBody.OrientationCase}
 */
proto.bosdyn.api.spot.AnimateBody.prototype.getOrientationCase = function() {
  return /** @type {proto.bosdyn.api.spot.AnimateBody.OrientationCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.spot.AnimateBody.oneofGroups_[1]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.AnimateBody.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.AnimateBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.AnimateBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimateBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    bodyPos: (f = msg.getBodyPos()) && bosdyn_api_geometry_pb.Vec3Value.toObject(includeInstance, f),
    comPos: (f = msg.getComPos()) && bosdyn_api_geometry_pb.Vec3Value.toObject(includeInstance, f),
    eulerAngles: (f = msg.getEulerAngles()) && bosdyn_api_spot_choreography_params_pb.EulerZYXValue.toObject(includeInstance, f),
    quaternion: (f = msg.getQuaternion()) && bosdyn_api_geometry_pb.Quaternion.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.AnimateBody}
 */
proto.bosdyn.api.spot.AnimateBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.AnimateBody;
  return proto.bosdyn.api.spot.AnimateBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.AnimateBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.AnimateBody}
 */
proto.bosdyn.api.spot.AnimateBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.Vec3Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3Value.deserializeBinaryFromReader);
      msg.setBodyPos(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.Vec3Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3Value.deserializeBinaryFromReader);
      msg.setComPos(value);
      break;
    case 3:
      var value = new bosdyn_api_spot_choreography_params_pb.EulerZYXValue;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.EulerZYXValue.deserializeBinaryFromReader);
      msg.setEulerAngles(value);
      break;
    case 4:
      var value = new bosdyn_api_geometry_pb.Quaternion;
      reader.readMessage(value,bosdyn_api_geometry_pb.Quaternion.deserializeBinaryFromReader);
      msg.setQuaternion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.AnimateBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.AnimateBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.AnimateBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimateBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBodyPos();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.Vec3Value.serializeBinaryToWriter
    );
  }
  f = message.getComPos();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.Vec3Value.serializeBinaryToWriter
    );
  }
  f = message.getEulerAngles();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_spot_choreography_params_pb.EulerZYXValue.serializeBinaryToWriter
    );
  }
  f = message.getQuaternion();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_geometry_pb.Quaternion.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.Vec3Value body_pos = 1;
 * @return {?proto.bosdyn.api.Vec3Value}
 */
proto.bosdyn.api.spot.AnimateBody.prototype.getBodyPos = function() {
  return /** @type{?proto.bosdyn.api.Vec3Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3Value, 1));
};


/**
 * @param {?proto.bosdyn.api.Vec3Value|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateBody} returns this
*/
proto.bosdyn.api.spot.AnimateBody.prototype.setBodyPos = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bosdyn.api.spot.AnimateBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateBody} returns this
 */
proto.bosdyn.api.spot.AnimateBody.prototype.clearBodyPos = function() {
  return this.setBodyPos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateBody.prototype.hasBodyPos = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.Vec3Value com_pos = 2;
 * @return {?proto.bosdyn.api.Vec3Value}
 */
proto.bosdyn.api.spot.AnimateBody.prototype.getComPos = function() {
  return /** @type{?proto.bosdyn.api.Vec3Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3Value, 2));
};


/**
 * @param {?proto.bosdyn.api.Vec3Value|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateBody} returns this
*/
proto.bosdyn.api.spot.AnimateBody.prototype.setComPos = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bosdyn.api.spot.AnimateBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateBody} returns this
 */
proto.bosdyn.api.spot.AnimateBody.prototype.clearComPos = function() {
  return this.setComPos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateBody.prototype.hasComPos = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EulerZYXValue euler_angles = 3;
 * @return {?proto.bosdyn.api.spot.EulerZYXValue}
 */
proto.bosdyn.api.spot.AnimateBody.prototype.getEulerAngles = function() {
  return /** @type{?proto.bosdyn.api.spot.EulerZYXValue} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.EulerZYXValue, 3));
};


/**
 * @param {?proto.bosdyn.api.spot.EulerZYXValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateBody} returns this
*/
proto.bosdyn.api.spot.AnimateBody.prototype.setEulerAngles = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bosdyn.api.spot.AnimateBody.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateBody} returns this
 */
proto.bosdyn.api.spot.AnimateBody.prototype.clearEulerAngles = function() {
  return this.setEulerAngles(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateBody.prototype.hasEulerAngles = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bosdyn.api.Quaternion quaternion = 4;
 * @return {?proto.bosdyn.api.Quaternion}
 */
proto.bosdyn.api.spot.AnimateBody.prototype.getQuaternion = function() {
  return /** @type{?proto.bosdyn.api.Quaternion} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Quaternion, 4));
};


/**
 * @param {?proto.bosdyn.api.Quaternion|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateBody} returns this
*/
proto.bosdyn.api.spot.AnimateBody.prototype.setQuaternion = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bosdyn.api.spot.AnimateBody.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateBody} returns this
 */
proto.bosdyn.api.spot.AnimateBody.prototype.clearQuaternion = function() {
  return this.setQuaternion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateBody.prototype.hasQuaternion = function() {
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
proto.bosdyn.api.spot.AnimateLegs.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.AnimateLegs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.AnimateLegs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimateLegs.toObject = function(includeInstance, msg) {
  var f, obj = {
    fl: (f = msg.getFl()) && proto.bosdyn.api.spot.AnimateSingleLeg.toObject(includeInstance, f),
    fr: (f = msg.getFr()) && proto.bosdyn.api.spot.AnimateSingleLeg.toObject(includeInstance, f),
    hl: (f = msg.getHl()) && proto.bosdyn.api.spot.AnimateSingleLeg.toObject(includeInstance, f),
    hr: (f = msg.getHr()) && proto.bosdyn.api.spot.AnimateSingleLeg.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.AnimateLegs}
 */
proto.bosdyn.api.spot.AnimateLegs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.AnimateLegs;
  return proto.bosdyn.api.spot.AnimateLegs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.AnimateLegs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.AnimateLegs}
 */
proto.bosdyn.api.spot.AnimateLegs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.AnimateSingleLeg;
      reader.readMessage(value,proto.bosdyn.api.spot.AnimateSingleLeg.deserializeBinaryFromReader);
      msg.setFl(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.spot.AnimateSingleLeg;
      reader.readMessage(value,proto.bosdyn.api.spot.AnimateSingleLeg.deserializeBinaryFromReader);
      msg.setFr(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.spot.AnimateSingleLeg;
      reader.readMessage(value,proto.bosdyn.api.spot.AnimateSingleLeg.deserializeBinaryFromReader);
      msg.setHl(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.spot.AnimateSingleLeg;
      reader.readMessage(value,proto.bosdyn.api.spot.AnimateSingleLeg.deserializeBinaryFromReader);
      msg.setHr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.AnimateLegs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.AnimateLegs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.AnimateLegs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimateLegs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFl();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.AnimateSingleLeg.serializeBinaryToWriter
    );
  }
  f = message.getFr();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.spot.AnimateSingleLeg.serializeBinaryToWriter
    );
  }
  f = message.getHl();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.spot.AnimateSingleLeg.serializeBinaryToWriter
    );
  }
  f = message.getHr();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.spot.AnimateSingleLeg.serializeBinaryToWriter
    );
  }
};


/**
 * optional AnimateSingleLeg fl = 1;
 * @return {?proto.bosdyn.api.spot.AnimateSingleLeg}
 */
proto.bosdyn.api.spot.AnimateLegs.prototype.getFl = function() {
  return /** @type{?proto.bosdyn.api.spot.AnimateSingleLeg} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.AnimateSingleLeg, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.AnimateSingleLeg|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateLegs} returns this
*/
proto.bosdyn.api.spot.AnimateLegs.prototype.setFl = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateLegs} returns this
 */
proto.bosdyn.api.spot.AnimateLegs.prototype.clearFl = function() {
  return this.setFl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateLegs.prototype.hasFl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AnimateSingleLeg fr = 2;
 * @return {?proto.bosdyn.api.spot.AnimateSingleLeg}
 */
proto.bosdyn.api.spot.AnimateLegs.prototype.getFr = function() {
  return /** @type{?proto.bosdyn.api.spot.AnimateSingleLeg} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.AnimateSingleLeg, 2));
};


/**
 * @param {?proto.bosdyn.api.spot.AnimateSingleLeg|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateLegs} returns this
*/
proto.bosdyn.api.spot.AnimateLegs.prototype.setFr = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateLegs} returns this
 */
proto.bosdyn.api.spot.AnimateLegs.prototype.clearFr = function() {
  return this.setFr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateLegs.prototype.hasFr = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AnimateSingleLeg hl = 3;
 * @return {?proto.bosdyn.api.spot.AnimateSingleLeg}
 */
proto.bosdyn.api.spot.AnimateLegs.prototype.getHl = function() {
  return /** @type{?proto.bosdyn.api.spot.AnimateSingleLeg} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.AnimateSingleLeg, 3));
};


/**
 * @param {?proto.bosdyn.api.spot.AnimateSingleLeg|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateLegs} returns this
*/
proto.bosdyn.api.spot.AnimateLegs.prototype.setHl = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateLegs} returns this
 */
proto.bosdyn.api.spot.AnimateLegs.prototype.clearHl = function() {
  return this.setHl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateLegs.prototype.hasHl = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AnimateSingleLeg hr = 4;
 * @return {?proto.bosdyn.api.spot.AnimateSingleLeg}
 */
proto.bosdyn.api.spot.AnimateLegs.prototype.getHr = function() {
  return /** @type{?proto.bosdyn.api.spot.AnimateSingleLeg} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.AnimateSingleLeg, 4));
};


/**
 * @param {?proto.bosdyn.api.spot.AnimateSingleLeg|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateLegs} returns this
*/
proto.bosdyn.api.spot.AnimateLegs.prototype.setHr = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateLegs} returns this
 */
proto.bosdyn.api.spot.AnimateLegs.prototype.clearHr = function() {
  return this.setHr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateLegs.prototype.hasHr = function() {
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
proto.bosdyn.api.spot.AnimateSingleLeg.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.bosdyn.api.spot.AnimateSingleLeg.LegCase = {
  LEG_NOT_SET: 0,
  JOINT_ANGLES: 1,
  FOOT_POS: 2
};

/**
 * @return {proto.bosdyn.api.spot.AnimateSingleLeg.LegCase}
 */
proto.bosdyn.api.spot.AnimateSingleLeg.prototype.getLegCase = function() {
  return /** @type {proto.bosdyn.api.spot.AnimateSingleLeg.LegCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.spot.AnimateSingleLeg.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.AnimateSingleLeg.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.AnimateSingleLeg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.AnimateSingleLeg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimateSingleLeg.toObject = function(includeInstance, msg) {
  var f, obj = {
    jointAngles: (f = msg.getJointAngles()) && proto.bosdyn.api.spot.LegJointAngles.toObject(includeInstance, f),
    footPos: (f = msg.getFootPos()) && bosdyn_api_geometry_pb.Vec3Value.toObject(includeInstance, f),
    stance: (f = msg.getStance()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.AnimateSingleLeg}
 */
proto.bosdyn.api.spot.AnimateSingleLeg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.AnimateSingleLeg;
  return proto.bosdyn.api.spot.AnimateSingleLeg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.AnimateSingleLeg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.AnimateSingleLeg}
 */
proto.bosdyn.api.spot.AnimateSingleLeg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.LegJointAngles;
      reader.readMessage(value,proto.bosdyn.api.spot.LegJointAngles.deserializeBinaryFromReader);
      msg.setJointAngles(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.Vec3Value;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3Value.deserializeBinaryFromReader);
      msg.setFootPos(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
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
proto.bosdyn.api.spot.AnimateSingleLeg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.AnimateSingleLeg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.AnimateSingleLeg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.AnimateSingleLeg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJointAngles();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.LegJointAngles.serializeBinaryToWriter
    );
  }
  f = message.getFootPos();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.Vec3Value.serializeBinaryToWriter
    );
  }
  f = message.getStance();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional LegJointAngles joint_angles = 1;
 * @return {?proto.bosdyn.api.spot.LegJointAngles}
 */
proto.bosdyn.api.spot.AnimateSingleLeg.prototype.getJointAngles = function() {
  return /** @type{?proto.bosdyn.api.spot.LegJointAngles} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.LegJointAngles, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.LegJointAngles|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateSingleLeg} returns this
*/
proto.bosdyn.api.spot.AnimateSingleLeg.prototype.setJointAngles = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.bosdyn.api.spot.AnimateSingleLeg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateSingleLeg} returns this
 */
proto.bosdyn.api.spot.AnimateSingleLeg.prototype.clearJointAngles = function() {
  return this.setJointAngles(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateSingleLeg.prototype.hasJointAngles = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.Vec3Value foot_pos = 2;
 * @return {?proto.bosdyn.api.Vec3Value}
 */
proto.bosdyn.api.spot.AnimateSingleLeg.prototype.getFootPos = function() {
  return /** @type{?proto.bosdyn.api.Vec3Value} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3Value, 2));
};


/**
 * @param {?proto.bosdyn.api.Vec3Value|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateSingleLeg} returns this
*/
proto.bosdyn.api.spot.AnimateSingleLeg.prototype.setFootPos = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bosdyn.api.spot.AnimateSingleLeg.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateSingleLeg} returns this
 */
proto.bosdyn.api.spot.AnimateSingleLeg.prototype.clearFootPos = function() {
  return this.setFootPos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateSingleLeg.prototype.hasFootPos = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.BoolValue stance = 3;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.spot.AnimateSingleLeg.prototype.getStance = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 3));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.spot.AnimateSingleLeg} returns this
*/
proto.bosdyn.api.spot.AnimateSingleLeg.prototype.setStance = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.AnimateSingleLeg} returns this
 */
proto.bosdyn.api.spot.AnimateSingleLeg.prototype.clearStance = function() {
  return this.setStance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.AnimateSingleLeg.prototype.hasStance = function() {
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
proto.bosdyn.api.spot.LegJointAngles.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.LegJointAngles.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.LegJointAngles} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LegJointAngles.toObject = function(includeInstance, msg) {
  var f, obj = {
    hipX: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    hipY: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    knee: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.LegJointAngles}
 */
proto.bosdyn.api.spot.LegJointAngles.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.LegJointAngles;
  return proto.bosdyn.api.spot.LegJointAngles.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.LegJointAngles} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.LegJointAngles}
 */
proto.bosdyn.api.spot.LegJointAngles.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHipX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHipY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setKnee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.LegJointAngles.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.LegJointAngles.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.LegJointAngles} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LegJointAngles.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHipX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getHipY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getKnee();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional double hip_x = 1;
 * @return {number}
 */
proto.bosdyn.api.spot.LegJointAngles.prototype.getHipX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.LegJointAngles} returns this
 */
proto.bosdyn.api.spot.LegJointAngles.prototype.setHipX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double hip_y = 2;
 * @return {number}
 */
proto.bosdyn.api.spot.LegJointAngles.prototype.getHipY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.LegJointAngles} returns this
 */
proto.bosdyn.api.spot.LegJointAngles.prototype.setHipY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double knee = 3;
 * @return {number}
 */
proto.bosdyn.api.spot.LegJointAngles.prototype.getKnee = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.LegJointAngles} returns this
 */
proto.bosdyn.api.spot.LegJointAngles.prototype.setKnee = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bosdyn.api.spot.ActiveMove.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.bosdyn.api.spot.ActiveMove.CommandLimitsCase = {
  COMMAND_LIMITS_NOT_SET: 0,
  CUSTOM_GAIT_COMMAND_LIMITS: 2
};

/**
 * @return {proto.bosdyn.api.spot.ActiveMove.CommandLimitsCase}
 */
proto.bosdyn.api.spot.ActiveMove.prototype.getCommandLimitsCase = function() {
  return /** @type {proto.bosdyn.api.spot.ActiveMove.CommandLimitsCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.spot.ActiveMove.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.ActiveMove.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ActiveMove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ActiveMove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ActiveMove.toObject = function(includeInstance, msg) {
  var f, obj = {
    move: (f = msg.getMove()) && proto.bosdyn.api.spot.MoveParams.toObject(includeInstance, f),
    customGaitCommandLimits: (f = msg.getCustomGaitCommandLimits()) && bosdyn_api_spot_choreography_params_pb.CustomGaitCommandLimits.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ActiveMove}
 */
proto.bosdyn.api.spot.ActiveMove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ActiveMove;
  return proto.bosdyn.api.spot.ActiveMove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ActiveMove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ActiveMove}
 */
proto.bosdyn.api.spot.ActiveMove.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.spot.MoveParams;
      reader.readMessage(value,proto.bosdyn.api.spot.MoveParams.deserializeBinaryFromReader);
      msg.setMove(value);
      break;
    case 2:
      var value = new bosdyn_api_spot_choreography_params_pb.CustomGaitCommandLimits;
      reader.readMessage(value,bosdyn_api_spot_choreography_params_pb.CustomGaitCommandLimits.deserializeBinaryFromReader);
      msg.setCustomGaitCommandLimits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.ActiveMove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ActiveMove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ActiveMove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ActiveMove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMove();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.spot.MoveParams.serializeBinaryToWriter
    );
  }
  f = message.getCustomGaitCommandLimits();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_spot_choreography_params_pb.CustomGaitCommandLimits.serializeBinaryToWriter
    );
  }
};


/**
 * optional MoveParams move = 1;
 * @return {?proto.bosdyn.api.spot.MoveParams}
 */
proto.bosdyn.api.spot.ActiveMove.prototype.getMove = function() {
  return /** @type{?proto.bosdyn.api.spot.MoveParams} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.MoveParams, 1));
};


/**
 * @param {?proto.bosdyn.api.spot.MoveParams|undefined} value
 * @return {!proto.bosdyn.api.spot.ActiveMove} returns this
*/
proto.bosdyn.api.spot.ActiveMove.prototype.setMove = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ActiveMove} returns this
 */
proto.bosdyn.api.spot.ActiveMove.prototype.clearMove = function() {
  return this.setMove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ActiveMove.prototype.hasMove = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CustomGaitCommandLimits custom_gait_command_limits = 2;
 * @return {?proto.bosdyn.api.spot.CustomGaitCommandLimits}
 */
proto.bosdyn.api.spot.ActiveMove.prototype.getCustomGaitCommandLimits = function() {
  return /** @type{?proto.bosdyn.api.spot.CustomGaitCommandLimits} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_choreography_params_pb.CustomGaitCommandLimits, 2));
};


/**
 * @param {?proto.bosdyn.api.spot.CustomGaitCommandLimits|undefined} value
 * @return {!proto.bosdyn.api.spot.ActiveMove} returns this
*/
proto.bosdyn.api.spot.ActiveMove.prototype.setCustomGaitCommandLimits = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bosdyn.api.spot.ActiveMove.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ActiveMove} returns this
 */
proto.bosdyn.api.spot.ActiveMove.prototype.clearCustomGaitCommandLimits = function() {
  return this.setCustomGaitCommandLimits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ActiveMove.prototype.hasCustomGaitCommandLimits = function() {
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
proto.bosdyn.api.spot.ChoreographyStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ChoreographyStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ChoreographyStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographyStatusRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusRequest}
 */
proto.bosdyn.api.spot.ChoreographyStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ChoreographyStatusRequest;
  return proto.bosdyn.api.spot.ChoreographyStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ChoreographyStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusRequest}
 */
proto.bosdyn.api.spot.ChoreographyStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.spot.ChoreographyStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ChoreographyStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ChoreographyStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographyStatusRequest.serializeBinaryToWriter = function(message, writer) {
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
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.ChoreographyStatusRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusRequest} returns this
*/
proto.bosdyn.api.spot.ChoreographyStatusRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusRequest} returns this
 */
proto.bosdyn.api.spot.ChoreographyStatusRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChoreographyStatusRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ChoreographyStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ChoreographyStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    executionId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    currentSlice: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    activeMovesList: jspb.Message.toObjectList(msg.getActiveMovesList(),
    proto.bosdyn.api.spot.ActiveMove.toObject, includeInstance),
    sequenceSlices: jspb.Message.getFieldWithDefault(msg, 6, 0),
    sequenceSlicesPerMinute: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    validityTime: (f = msg.getValidityTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    sequenceName: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusResponse}
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ChoreographyStatusResponse;
  return proto.bosdyn.api.spot.ChoreographyStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ChoreographyStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusResponse}
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.spot.ChoreographyStatusResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExecutionId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCurrentSlice(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.spot.ActiveMove;
      reader.readMessage(value,proto.bosdyn.api.spot.ActiveMove.deserializeBinaryFromReader);
      msg.addActiveMoves(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequenceSlices(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSequenceSlicesPerMinute(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setValidityTime(value);
      break;
    case 9:
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
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ChoreographyStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ChoreographyStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getExecutionId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCurrentSlice();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getActiveMovesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.bosdyn.api.spot.ActiveMove.serializeBinaryToWriter
    );
  }
  f = message.getSequenceSlices();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getSequenceSlicesPerMinute();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getValidityTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSequenceName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_DANCING: 1,
  STATUS_COMPLETED_SEQUENCE: 2,
  STATUS_PREPPING: 3,
  STATUS_WAITING_FOR_START_TIME: 4,
  STATUS_VALIDATING: 5,
  STATUS_INTERRUPTED: 6,
  STATUS_FALLEN: 7,
  STATUS_POWERED_OFF: 8,
  STATUS_OTHER: 9
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusResponse} returns this
*/
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusResponse.Status}
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.spot.ChoreographyStatusResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.ChoreographyStatusResponse.Status} value
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 execution_id = 3;
 * @return {number}
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.getExecutionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional double current_slice = 4;
 * @return {number}
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.getCurrentSlice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.setCurrentSlice = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * repeated ActiveMove active_moves = 5;
 * @return {!Array<!proto.bosdyn.api.spot.ActiveMove>}
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.getActiveMovesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.spot.ActiveMove>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.spot.ActiveMove, 5));
};


/**
 * @param {!Array<!proto.bosdyn.api.spot.ActiveMove>} value
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusResponse} returns this
*/
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.setActiveMovesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.bosdyn.api.spot.ActiveMove=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.ActiveMove}
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.addActiveMoves = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.bosdyn.api.spot.ActiveMove, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.clearActiveMovesList = function() {
  return this.setActiveMovesList([]);
};


/**
 * optional int32 sequence_slices = 6;
 * @return {number}
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.getSequenceSlices = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.setSequenceSlices = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional double sequence_slices_per_minute = 7;
 * @return {number}
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.getSequenceSlicesPerMinute = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.setSequenceSlicesPerMinute = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp validity_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.getValidityTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusResponse} returns this
*/
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.setValidityTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.clearValidityTime = function() {
  return this.setValidityTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.hasValidityTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string sequence_name = 9;
 * @return {string}
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.getSequenceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.spot.ChoreographyStatusResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyStatusResponse.prototype.setSequenceName = function(value) {
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
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    overrideStartTime: (f = msg.getOverrideStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    acceptableTimeDifference: (f = msg.getAcceptableTimeDifference()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    validityTime: (f = msg.getValidityTime()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest;
  return proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setOverrideStartTime(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setAcceptableTimeDifference(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setValidityTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getOverrideStartTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAcceptableTimeDifference();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getValidityTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest} returns this
*/
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest} returns this
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp override_start_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.getOverrideStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest} returns this
*/
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.setOverrideStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest} returns this
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.clearOverrideStartTime = function() {
  return this.setOverrideStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.hasOverrideStartTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration acceptable_time_difference = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.getAcceptableTimeDifference = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest} returns this
*/
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.setAcceptableTimeDifference = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest} returns this
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.clearAcceptableTimeDifference = function() {
  return this.setAcceptableTimeDifference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.hasAcceptableTimeDifference = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration validity_time = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.getValidityTime = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest} returns this
*/
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.setValidityTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest} returns this
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.clearValidityTime = function() {
  return this.setValidityTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustRequest.prototype.hasValidityTime = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    warningsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse;
  return proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addWarnings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getWarningsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_BEFORE_CURRENT_TIME: 2,
  STATUS_EXCEEDS_VALIDITY_TIME: 3,
  STATUS_OVERRIDE_TIME_UNSET: 4
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse} returns this
*/
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.Status}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.Status} value
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated string warnings = 3;
 * @return {!Array<string>}
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.prototype.getWarningsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.prototype.setWarningsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.prototype.addWarnings = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse} returns this
 */
proto.bosdyn.api.spot.ChoreographyTimeAdjustResponse.prototype.clearWarningsList = function() {
  return this.setWarningsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.spot.LegSize.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.LegSize.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.LegSize} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LegSize.toObject = function(includeInstance, msg) {
  var f, obj = {
    distanceInward: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    distanceOutward: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    distanceForward: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    distanceBackward: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.LegSize}
 */
proto.bosdyn.api.spot.LegSize.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.LegSize;
  return proto.bosdyn.api.spot.LegSize.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.LegSize} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.LegSize}
 */
proto.bosdyn.api.spot.LegSize.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDistanceInward(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDistanceOutward(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDistanceForward(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDistanceBackward(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.LegSize.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.LegSize.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.LegSize} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LegSize.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDistanceInward();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getDistanceOutward();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getDistanceForward();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getDistanceBackward();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional float distance_inward = 1;
 * @return {number}
 */
proto.bosdyn.api.spot.LegSize.prototype.getDistanceInward = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.LegSize} returns this
 */
proto.bosdyn.api.spot.LegSize.prototype.setDistanceInward = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float distance_outward = 2;
 * @return {number}
 */
proto.bosdyn.api.spot.LegSize.prototype.getDistanceOutward = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.LegSize} returns this
 */
proto.bosdyn.api.spot.LegSize.prototype.setDistanceOutward = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float distance_forward = 3;
 * @return {number}
 */
proto.bosdyn.api.spot.LegSize.prototype.getDistanceForward = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.LegSize} returns this
 */
proto.bosdyn.api.spot.LegSize.prototype.setDistanceForward = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float distance_backward = 4;
 * @return {number}
 */
proto.bosdyn.api.spot.LegSize.prototype.getDistanceBackward = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.spot.LegSize} returns this
 */
proto.bosdyn.api.spot.LegSize.prototype.setDistanceBackward = function(value) {
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
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.LegSizeConfigurationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.LegSizeConfigurationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    frontLeftSize: (f = msg.getFrontLeftSize()) && proto.bosdyn.api.spot.LegSize.toObject(includeInstance, f),
    frontRightSize: (f = msg.getFrontRightSize()) && proto.bosdyn.api.spot.LegSize.toObject(includeInstance, f),
    hindLeftSize: (f = msg.getHindLeftSize()) && proto.bosdyn.api.spot.LegSize.toObject(includeInstance, f),
    hindRightSize: (f = msg.getHindRightSize()) && proto.bosdyn.api.spot.LegSize.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationRequest}
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.LegSizeConfigurationRequest;
  return proto.bosdyn.api.spot.LegSizeConfigurationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.LegSizeConfigurationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationRequest}
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bosdyn.api.spot.LegSize;
      reader.readMessage(value,proto.bosdyn.api.spot.LegSize.deserializeBinaryFromReader);
      msg.setFrontLeftSize(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.spot.LegSize;
      reader.readMessage(value,proto.bosdyn.api.spot.LegSize.deserializeBinaryFromReader);
      msg.setFrontRightSize(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.spot.LegSize;
      reader.readMessage(value,proto.bosdyn.api.spot.LegSize.deserializeBinaryFromReader);
      msg.setHindLeftSize(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.spot.LegSize;
      reader.readMessage(value,proto.bosdyn.api.spot.LegSize.deserializeBinaryFromReader);
      msg.setHindRightSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.LegSizeConfigurationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.LegSizeConfigurationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getFrontLeftSize();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.spot.LegSize.serializeBinaryToWriter
    );
  }
  f = message.getFrontRightSize();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.spot.LegSize.serializeBinaryToWriter
    );
  }
  f = message.getHindLeftSize();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.spot.LegSize.serializeBinaryToWriter
    );
  }
  f = message.getHindRightSize();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.spot.LegSize.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationRequest} returns this
*/
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationRequest} returns this
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LegSize front_left_size = 2;
 * @return {?proto.bosdyn.api.spot.LegSize}
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.getFrontLeftSize = function() {
  return /** @type{?proto.bosdyn.api.spot.LegSize} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.LegSize, 2));
};


/**
 * @param {?proto.bosdyn.api.spot.LegSize|undefined} value
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationRequest} returns this
*/
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.setFrontLeftSize = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationRequest} returns this
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.clearFrontLeftSize = function() {
  return this.setFrontLeftSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.hasFrontLeftSize = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LegSize front_right_size = 3;
 * @return {?proto.bosdyn.api.spot.LegSize}
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.getFrontRightSize = function() {
  return /** @type{?proto.bosdyn.api.spot.LegSize} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.LegSize, 3));
};


/**
 * @param {?proto.bosdyn.api.spot.LegSize|undefined} value
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationRequest} returns this
*/
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.setFrontRightSize = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationRequest} returns this
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.clearFrontRightSize = function() {
  return this.setFrontRightSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.hasFrontRightSize = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional LegSize hind_left_size = 4;
 * @return {?proto.bosdyn.api.spot.LegSize}
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.getHindLeftSize = function() {
  return /** @type{?proto.bosdyn.api.spot.LegSize} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.LegSize, 4));
};


/**
 * @param {?proto.bosdyn.api.spot.LegSize|undefined} value
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationRequest} returns this
*/
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.setHindLeftSize = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationRequest} returns this
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.clearHindLeftSize = function() {
  return this.setHindLeftSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.hasHindLeftSize = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LegSize hind_right_size = 5;
 * @return {?proto.bosdyn.api.spot.LegSize}
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.getHindRightSize = function() {
  return /** @type{?proto.bosdyn.api.spot.LegSize} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.LegSize, 5));
};


/**
 * @param {?proto.bosdyn.api.spot.LegSize|undefined} value
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationRequest} returns this
*/
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.setHindRightSize = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationRequest} returns this
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.clearHindRightSize = function() {
  return this.setHindRightSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegSizeConfigurationRequest.prototype.hasHindRightSize = function() {
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
proto.bosdyn.api.spot.LegSizeConfigurationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.LegSizeConfigurationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.LegSizeConfigurationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LegSizeConfigurationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationResponse}
 */
proto.bosdyn.api.spot.LegSizeConfigurationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.LegSizeConfigurationResponse;
  return proto.bosdyn.api.spot.LegSizeConfigurationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.LegSizeConfigurationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationResponse}
 */
proto.bosdyn.api.spot.LegSizeConfigurationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.spot.LegSizeConfigurationResponse.Status} */ (reader.readEnum());
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
proto.bosdyn.api.spot.LegSizeConfigurationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.LegSizeConfigurationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.LegSizeConfigurationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LegSizeConfigurationResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.spot.LegSizeConfigurationResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_EXCEEDS_LIMITS: 2
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.LegSizeConfigurationResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationResponse} returns this
*/
proto.bosdyn.api.spot.LegSizeConfigurationResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationResponse} returns this
 */
proto.bosdyn.api.spot.LegSizeConfigurationResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegSizeConfigurationResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationResponse.Status}
 */
proto.bosdyn.api.spot.LegSizeConfigurationResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.spot.LegSizeConfigurationResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.spot.LegSizeConfigurationResponse.Status} value
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationResponse} returns this
 */
proto.bosdyn.api.spot.LegSizeConfigurationResponse.prototype.setStatus = function(value) {
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
proto.bosdyn.api.spot.LegSizeConfigurationStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.LegSizeConfigurationStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.LegSizeConfigurationStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationStateRequest}
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.LegSizeConfigurationStateRequest;
  return proto.bosdyn.api.spot.LegSizeConfigurationStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.LegSizeConfigurationStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationStateRequest}
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.spot.LegSizeConfigurationStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.LegSizeConfigurationStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.LegSizeConfigurationStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateRequest.serializeBinaryToWriter = function(message, writer) {
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
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationStateRequest} returns this
*/
proto.bosdyn.api.spot.LegSizeConfigurationStateRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationStateRequest} returns this
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateRequest.prototype.hasHeader = function() {
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
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.spot.LegSizeConfigurationStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    frontLeftSize: (f = msg.getFrontLeftSize()) && proto.bosdyn.api.spot.LegSize.toObject(includeInstance, f),
    frontRightSize: (f = msg.getFrontRightSize()) && proto.bosdyn.api.spot.LegSize.toObject(includeInstance, f),
    hindLeftSize: (f = msg.getHindLeftSize()) && proto.bosdyn.api.spot.LegSize.toObject(includeInstance, f),
    hindRightSize: (f = msg.getHindRightSize()) && proto.bosdyn.api.spot.LegSize.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationStateResponse}
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.spot.LegSizeConfigurationStateResponse;
  return proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.spot.LegSizeConfigurationStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationStateResponse}
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.bosdyn.api.spot.LegSize;
      reader.readMessage(value,proto.bosdyn.api.spot.LegSize.deserializeBinaryFromReader);
      msg.setFrontLeftSize(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.spot.LegSize;
      reader.readMessage(value,proto.bosdyn.api.spot.LegSize.deserializeBinaryFromReader);
      msg.setFrontRightSize(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.spot.LegSize;
      reader.readMessage(value,proto.bosdyn.api.spot.LegSize.deserializeBinaryFromReader);
      msg.setHindLeftSize(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.spot.LegSize;
      reader.readMessage(value,proto.bosdyn.api.spot.LegSize.deserializeBinaryFromReader);
      msg.setHindRightSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.spot.LegSizeConfigurationStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getFrontLeftSize();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.spot.LegSize.serializeBinaryToWriter
    );
  }
  f = message.getFrontRightSize();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.spot.LegSize.serializeBinaryToWriter
    );
  }
  f = message.getHindLeftSize();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.spot.LegSize.serializeBinaryToWriter
    );
  }
  f = message.getHindRightSize();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.spot.LegSize.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationStateResponse} returns this
*/
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationStateResponse} returns this
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LegSize front_left_size = 2;
 * @return {?proto.bosdyn.api.spot.LegSize}
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.getFrontLeftSize = function() {
  return /** @type{?proto.bosdyn.api.spot.LegSize} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.LegSize, 2));
};


/**
 * @param {?proto.bosdyn.api.spot.LegSize|undefined} value
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationStateResponse} returns this
*/
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.setFrontLeftSize = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationStateResponse} returns this
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.clearFrontLeftSize = function() {
  return this.setFrontLeftSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.hasFrontLeftSize = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LegSize front_right_size = 3;
 * @return {?proto.bosdyn.api.spot.LegSize}
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.getFrontRightSize = function() {
  return /** @type{?proto.bosdyn.api.spot.LegSize} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.LegSize, 3));
};


/**
 * @param {?proto.bosdyn.api.spot.LegSize|undefined} value
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationStateResponse} returns this
*/
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.setFrontRightSize = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationStateResponse} returns this
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.clearFrontRightSize = function() {
  return this.setFrontRightSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.hasFrontRightSize = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional LegSize hind_left_size = 4;
 * @return {?proto.bosdyn.api.spot.LegSize}
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.getHindLeftSize = function() {
  return /** @type{?proto.bosdyn.api.spot.LegSize} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.LegSize, 4));
};


/**
 * @param {?proto.bosdyn.api.spot.LegSize|undefined} value
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationStateResponse} returns this
*/
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.setHindLeftSize = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationStateResponse} returns this
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.clearHindLeftSize = function() {
  return this.setHindLeftSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.hasHindLeftSize = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LegSize hind_right_size = 5;
 * @return {?proto.bosdyn.api.spot.LegSize}
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.getHindRightSize = function() {
  return /** @type{?proto.bosdyn.api.spot.LegSize} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.spot.LegSize, 5));
};


/**
 * @param {?proto.bosdyn.api.spot.LegSize|undefined} value
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationStateResponse} returns this
*/
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.setHindRightSize = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.spot.LegSizeConfigurationStateResponse} returns this
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.clearHindRightSize = function() {
  return this.setHindRightSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.spot.LegSizeConfigurationStateResponse.prototype.hasHindRightSize = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.bosdyn.api.spot);

// source: bosdyn/api/graph_nav/graph_nav.proto
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

var bosdyn_api_basic_command_pb = require('../../../bosdyn/api/basic_command_pb.js');
goog.object.extend(proto, bosdyn_api_basic_command_pb);
var bosdyn_api_data_chunk_pb = require('../../../bosdyn/api/data_chunk_pb.js');
goog.object.extend(proto, bosdyn_api_data_chunk_pb);
var bosdyn_api_geometry_pb = require('../../../bosdyn/api/geometry_pb.js');
goog.object.extend(proto, bosdyn_api_geometry_pb);
var bosdyn_api_graph_nav_nav_pb = require('../../../bosdyn/api/graph_nav/nav_pb.js');
goog.object.extend(proto, bosdyn_api_graph_nav_nav_pb);
var bosdyn_api_graph_nav_map_pb = require('../../../bosdyn/api/graph_nav/map_pb.js');
goog.object.extend(proto, bosdyn_api_graph_nav_map_pb);
var bosdyn_api_header_pb = require('../../../bosdyn/api/header_pb.js');
goog.object.extend(proto, bosdyn_api_header_pb);
var bosdyn_api_lease_pb = require('../../../bosdyn/api/lease_pb.js');
goog.object.extend(proto, bosdyn_api_lease_pb);
var bosdyn_api_license_pb = require('../../../bosdyn/api/license_pb.js');
goog.object.extend(proto, bosdyn_api_license_pb);
var bosdyn_api_robot_state_pb = require('../../../bosdyn/api/robot_state_pb.js');
goog.object.extend(proto, bosdyn_api_robot_state_pb);
var bosdyn_api_world_object_pb = require('../../../bosdyn/api/world_object_pb.js');
goog.object.extend(proto, bosdyn_api_world_object_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.bosdyn.api.graph_nav.ClearGraphRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.ClearGraphResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.ClearGraphResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.DownloadGraphRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.DownloadGraphResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.GetLocalizationStateRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.GetLocalizationStateResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.LostDetectorState', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.NavigateRouteRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.NavigateRouteResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.NavigateRouteResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.NavigateToAnchorRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.NavigateToAnchorResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.NavigateToRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.NavigateToResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.NavigateToResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.NavigationFeedbackRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.NavigationFeedbackResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.RemotePointCloudStatus', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.RouteFollowingParams', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.RouteFollowingParams.ResumeBehavior', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.RouteFollowingParams.RouteBlockedBehavior', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.RouteFollowingParams.StartRouteBehavior', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.RouteGenParams', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.SensorCompatibilityStatus', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.SetLocalizationRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.SetLocalizationRequest.FiducialInit', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.SetLocalizationResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.SetLocalizationResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.TravelParams', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.TravelParams.FeatureQualityTolerance', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.UploadGraphRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.UploadGraphResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.UploadGraphResponse.Status', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.Status', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.SetLocalizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.SetLocalizationRequest.displayName = 'proto.bosdyn.api.graph_nav.SetLocalizationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.SensorCompatibilityStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.SensorCompatibilityStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.displayName = 'proto.bosdyn.api.graph_nav.SensorCompatibilityStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.SetLocalizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.SetLocalizationResponse.displayName = 'proto.bosdyn.api.graph_nav.SetLocalizationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity.displayName = 'proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.RouteGenParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.RouteGenParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.RouteGenParams.displayName = 'proto.bosdyn.api.graph_nav.RouteGenParams';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.TravelParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.TravelParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.TravelParams.displayName = 'proto.bosdyn.api.graph_nav.TravelParams';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.NavigateToRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.graph_nav.NavigateToRequest.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.NavigateToRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.NavigateToRequest.displayName = 'proto.bosdyn.api.graph_nav.NavigateToRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.NavigateToResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.graph_nav.NavigateToResponse.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.NavigateToResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.NavigateToResponse.displayName = 'proto.bosdyn.api.graph_nav.NavigateToResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.RouteFollowingParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.RouteFollowingParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.RouteFollowingParams.displayName = 'proto.bosdyn.api.graph_nav.RouteFollowingParams';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.graph_nav.NavigateRouteRequest.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.NavigateRouteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.NavigateRouteRequest.displayName = 'proto.bosdyn.api.graph_nav.NavigateRouteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.graph_nav.NavigateRouteResponse.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.NavigateRouteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.NavigateRouteResponse.displayName = 'proto.bosdyn.api.graph_nav.NavigateRouteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.NavigateToAnchorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.displayName = 'proto.bosdyn.api.graph_nav.NavigateToAnchorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.NavigateToAnchorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.displayName = 'proto.bosdyn.api.graph_nav.NavigateToAnchorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.NavigationFeedbackRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.NavigationFeedbackRequest.displayName = 'proto.bosdyn.api.graph_nav.NavigationFeedbackRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.NavigationFeedbackResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.displayName = 'proto.bosdyn.api.graph_nav.NavigationFeedbackResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.GetLocalizationStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.displayName = 'proto.bosdyn.api.graph_nav.GetLocalizationStateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.RemotePointCloudStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.RemotePointCloudStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.RemotePointCloudStatus.displayName = 'proto.bosdyn.api.graph_nav.RemotePointCloudStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.LostDetectorState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.LostDetectorState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.LostDetectorState.displayName = 'proto.bosdyn.api.graph_nav.LostDetectorState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.GetLocalizationStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.displayName = 'proto.bosdyn.api.graph_nav.GetLocalizationStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.ClearGraphRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.ClearGraphRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.ClearGraphRequest.displayName = 'proto.bosdyn.api.graph_nav.ClearGraphRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.ClearGraphResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.ClearGraphResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.ClearGraphResponse.displayName = 'proto.bosdyn.api.graph_nav.ClearGraphResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.UploadGraphRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.UploadGraphRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.UploadGraphRequest.displayName = 'proto.bosdyn.api.graph_nav.UploadGraphRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.graph_nav.UploadGraphResponse.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.UploadGraphResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.UploadGraphResponse.displayName = 'proto.bosdyn.api.graph_nav.UploadGraphResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.DownloadGraphRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.DownloadGraphRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.DownloadGraphRequest.displayName = 'proto.bosdyn.api.graph_nav.DownloadGraphRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.DownloadGraphResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.DownloadGraphResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.DownloadGraphResponse.displayName = 'proto.bosdyn.api.graph_nav.DownloadGraphResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.displayName = 'proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.displayName = 'proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.displayName = 'proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.displayName = 'proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.displayName = 'proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.displayName = 'proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest.displayName = 'proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.displayName = 'proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse';
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
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.SetLocalizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.SetLocalizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    initialGuess: (f = msg.getInitialGuess()) && bosdyn_api_graph_nav_nav_pb.Localization.toObject(includeInstance, f),
    koTformBody: (f = msg.getKoTformBody()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    maxDistance: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    maxYaw: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    fiducialInit: jspb.Message.getFieldWithDefault(msg, 7, 0),
    useFiducialId: jspb.Message.getFieldWithDefault(msg, 8, 0),
    refineFiducialResultWithIcp: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    doAmbiguityCheck: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    restrictFiducialDetectionsToTargetWaypoint: jspb.Message.getBooleanFieldWithDefault(msg, 11, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationRequest}
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.SetLocalizationRequest;
  return proto.bosdyn.api.graph_nav.SetLocalizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.SetLocalizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationRequest}
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new bosdyn_api_graph_nav_nav_pb.Localization;
      reader.readMessage(value,bosdyn_api_graph_nav_nav_pb.Localization.deserializeBinaryFromReader);
      msg.setInitialGuess(value);
      break;
    case 4:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setKoTformBody(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxDistance(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxYaw(value);
      break;
    case 7:
      var value = /** @type {!proto.bosdyn.api.graph_nav.SetLocalizationRequest.FiducialInit} */ (reader.readEnum());
      msg.setFiducialInit(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUseFiducialId(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRefineFiducialResultWithIcp(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDoAmbiguityCheck(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRestrictFiducialDetectionsToTargetWaypoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.SetLocalizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.SetLocalizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getInitialGuess();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_graph_nav_nav_pb.Localization.serializeBinaryToWriter
    );
  }
  f = message.getKoTformBody();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
  f = message.getMaxDistance();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getMaxYaw();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getFiducialInit();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getUseFiducialId();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getRefineFiducialResultWithIcp();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getDoAmbiguityCheck();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getRestrictFiducialDetectionsToTargetWaypoint();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.FiducialInit = {
  FIDUCIAL_INIT_UNKNOWN: 0,
  FIDUCIAL_INIT_NO_FIDUCIAL: 1,
  FIDUCIAL_INIT_NEAREST: 2,
  FIDUCIAL_INIT_NEAREST_AT_TARGET: 3,
  FIDUCIAL_INIT_SPECIFIC: 4
};

/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationRequest} returns this
*/
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationRequest} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Localization initial_guess = 3;
 * @return {?proto.bosdyn.api.graph_nav.Localization}
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.getInitialGuess = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Localization} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_nav_pb.Localization, 3));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Localization|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationRequest} returns this
*/
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.setInitialGuess = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationRequest} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.clearInitialGuess = function() {
  return this.setInitialGuess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.hasInitialGuess = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bosdyn.api.SE3Pose ko_tform_body = 4;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.getKoTformBody = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 4));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationRequest} returns this
*/
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.setKoTformBody = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationRequest} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.clearKoTformBody = function() {
  return this.setKoTformBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.hasKoTformBody = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double max_distance = 5;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.getMaxDistance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationRequest} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.setMaxDistance = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double max_yaw = 6;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.getMaxYaw = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationRequest} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.setMaxYaw = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional FiducialInit fiducial_init = 7;
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationRequest.FiducialInit}
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.getFiducialInit = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.SetLocalizationRequest.FiducialInit} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.SetLocalizationRequest.FiducialInit} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationRequest} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.setFiducialInit = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional int32 use_fiducial_id = 8;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.getUseFiducialId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationRequest} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.setUseFiducialId = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bool refine_fiducial_result_with_icp = 9;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.getRefineFiducialResultWithIcp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationRequest} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.setRefineFiducialResultWithIcp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool do_ambiguity_check = 10;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.getDoAmbiguityCheck = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationRequest} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.setDoAmbiguityCheck = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool restrict_fiducial_detections_to_target_waypoint = 11;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.getRestrictFiducialDetectionsToTargetWaypoint = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationRequest} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationRequest.prototype.setRestrictFiducialDetectionsToTargetWaypoint = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.SensorCompatibilityStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapHasLidarData: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    robotConfiguredForLidar: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.SensorCompatibilityStatus}
 */
proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.SensorCompatibilityStatus;
  return proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.SensorCompatibilityStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.SensorCompatibilityStatus}
 */
proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMapHasLidarData(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRobotConfiguredForLidar(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.SensorCompatibilityStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapHasLidarData();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getRobotConfiguredForLidar();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool map_has_lidar_data = 1;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.prototype.getMapHasLidarData = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.SensorCompatibilityStatus} returns this
 */
proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.prototype.setMapHasLidarData = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool robot_configured_for_lidar = 2;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.prototype.getRobotConfiguredForLidar = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.SensorCompatibilityStatus} returns this
 */
proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.prototype.setRobotConfiguredForLidar = function(value) {
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
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.SetLocalizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.SetLocalizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    leaseUseResult: (f = msg.getLeaseUseResult()) && bosdyn_api_lease_pb.LeaseUseResult.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    errorReport: jspb.Message.getFieldWithDefault(msg, 4, ""),
    localization: (f = msg.getLocalization()) && bosdyn_api_graph_nav_nav_pb.Localization.toObject(includeInstance, f),
    suspectedAmbiguity: (f = msg.getSuspectedAmbiguity()) && proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity.toObject(includeInstance, f),
    impairedState: (f = msg.getImpairedState()) && bosdyn_api_robot_state_pb.RobotImpairedState.toObject(includeInstance, f),
    sensorStatus: (f = msg.getSensorStatus()) && proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.SetLocalizationResponse;
  return proto.bosdyn.api.graph_nav.SetLocalizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.SetLocalizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.graph_nav.SetLocalizationResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorReport(value);
      break;
    case 5:
      var value = new bosdyn_api_graph_nav_nav_pb.Localization;
      reader.readMessage(value,bosdyn_api_graph_nav_nav_pb.Localization.deserializeBinaryFromReader);
      msg.setLocalization(value);
      break;
    case 7:
      var value = new proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity.deserializeBinaryFromReader);
      msg.setSuspectedAmbiguity(value);
      break;
    case 8:
      var value = new bosdyn_api_robot_state_pb.RobotImpairedState;
      reader.readMessage(value,bosdyn_api_robot_state_pb.RobotImpairedState.deserializeBinaryFromReader);
      msg.setImpairedState(value);
      break;
    case 9:
      var value = new proto.bosdyn.api.graph_nav.SensorCompatibilityStatus;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.deserializeBinaryFromReader);
      msg.setSensorStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.SetLocalizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.SetLocalizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getErrorReport();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLocalization();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_graph_nav_nav_pb.Localization.serializeBinaryToWriter
    );
  }
  f = message.getSuspectedAmbiguity();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity.serializeBinaryToWriter
    );
  }
  f = message.getImpairedState();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      bosdyn_api_robot_state_pb.RobotImpairedState.serializeBinaryToWriter
    );
  }
  f = message.getSensorStatus();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_ROBOT_IMPAIRED: 2,
  STATUS_UNKNOWN_WAYPOINT: 3,
  STATUS_ABORTED: 4,
  STATUS_FAILED: 5,
  STATUS_FIDUCIAL_TOO_FAR_AWAY: 6,
  STATUS_FIDUCIAL_TOO_OLD: 7,
  STATUS_NO_MATCHING_FIDUCIAL: 8,
  STATUS_FIDUCIAL_POSE_UNCERTAIN: 9,
  STATUS_INCOMPATIBLE_SENSORS: 10
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity.toObject = function(includeInstance, msg) {
  var f, obj = {
    alternateRobotTformWaypoint: (f = msg.getAlternateRobotTformWaypoint()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity;
  return proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setAlternateRobotTformWaypoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlternateRobotTformWaypoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.SE3Pose alternate_robot_tform_waypoint = 1;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity.prototype.getAlternateRobotTformWaypoint = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 1));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity} returns this
*/
proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity.prototype.setAlternateRobotTformWaypoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity.prototype.clearAlternateRobotTformWaypoint = function() {
  return this.setAlternateRobotTformWaypoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity.prototype.hasAlternateRobotTformWaypoint = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse} returns this
*/
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.LeaseUseResult lease_use_result = 2;
 * @return {?proto.bosdyn.api.LeaseUseResult}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.getLeaseUseResult = function() {
  return /** @type{?proto.bosdyn.api.LeaseUseResult} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_lease_pb.LeaseUseResult, 2));
};


/**
 * @param {?proto.bosdyn.api.LeaseUseResult|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse} returns this
*/
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.setLeaseUseResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.clearLeaseUseResult = function() {
  return this.setLeaseUseResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.hasLeaseUseResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Status status = 3;
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse.Status}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.SetLocalizationResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.SetLocalizationResponse.Status} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string error_report = 4;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.getErrorReport = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.setErrorReport = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Localization localization = 5;
 * @return {?proto.bosdyn.api.graph_nav.Localization}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.getLocalization = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Localization} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_nav_pb.Localization, 5));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Localization|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse} returns this
*/
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.setLocalization = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.clearLocalization = function() {
  return this.setLocalization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.hasLocalization = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SuspectedAmbiguity suspected_ambiguity = 7;
 * @return {?proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.getSuspectedAmbiguity = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity, 7));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.SetLocalizationResponse.SuspectedAmbiguity|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse} returns this
*/
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.setSuspectedAmbiguity = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.clearSuspectedAmbiguity = function() {
  return this.setSuspectedAmbiguity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.hasSuspectedAmbiguity = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bosdyn.api.RobotImpairedState impaired_state = 8;
 * @return {?proto.bosdyn.api.RobotImpairedState}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.getImpairedState = function() {
  return /** @type{?proto.bosdyn.api.RobotImpairedState} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_robot_state_pb.RobotImpairedState, 8));
};


/**
 * @param {?proto.bosdyn.api.RobotImpairedState|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse} returns this
*/
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.setImpairedState = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.clearImpairedState = function() {
  return this.setImpairedState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.hasImpairedState = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional SensorCompatibilityStatus sensor_status = 9;
 * @return {?proto.bosdyn.api.graph_nav.SensorCompatibilityStatus}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.getSensorStatus = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.SensorCompatibilityStatus} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.SensorCompatibilityStatus, 9));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.SensorCompatibilityStatus|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse} returns this
*/
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.setSensorStatus = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.SetLocalizationResponse} returns this
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.clearSensorStatus = function() {
  return this.setSensorStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.SetLocalizationResponse.prototype.hasSensorStatus = function() {
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
proto.bosdyn.api.graph_nav.RouteGenParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.RouteGenParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.RouteGenParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.RouteGenParams.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.graph_nav.RouteGenParams}
 */
proto.bosdyn.api.graph_nav.RouteGenParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.RouteGenParams;
  return proto.bosdyn.api.graph_nav.RouteGenParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.RouteGenParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.RouteGenParams}
 */
proto.bosdyn.api.graph_nav.RouteGenParams.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.graph_nav.RouteGenParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.RouteGenParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.RouteGenParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.RouteGenParams.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.graph_nav.TravelParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.TravelParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.TravelParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.TravelParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxDistance: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    maxYaw: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    velocityLimit: (f = msg.getVelocityLimit()) && bosdyn_api_geometry_pb.SE2VelocityLimit.toObject(includeInstance, f),
    ignoreFinalYaw: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    featureQualityTolerance: jspb.Message.getFieldWithDefault(msg, 5, 0),
    disableDirectedExploration: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    disableAlternateRouteFinding: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.TravelParams}
 */
proto.bosdyn.api.graph_nav.TravelParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.TravelParams;
  return proto.bosdyn.api.graph_nav.TravelParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.TravelParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.TravelParams}
 */
proto.bosdyn.api.graph_nav.TravelParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxDistance(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxYaw(value);
      break;
    case 3:
      var value = new bosdyn_api_geometry_pb.SE2VelocityLimit;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE2VelocityLimit.deserializeBinaryFromReader);
      msg.setVelocityLimit(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreFinalYaw(value);
      break;
    case 5:
      var value = /** @type {!proto.bosdyn.api.graph_nav.TravelParams.FeatureQualityTolerance} */ (reader.readEnum());
      msg.setFeatureQualityTolerance(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableDirectedExploration(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableAlternateRouteFinding(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.TravelParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.TravelParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.TravelParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.TravelParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxDistance();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getMaxYaw();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getVelocityLimit();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_geometry_pb.SE2VelocityLimit.serializeBinaryToWriter
    );
  }
  f = message.getIgnoreFinalYaw();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getFeatureQualityTolerance();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getDisableDirectedExploration();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getDisableAlternateRouteFinding();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.TravelParams.FeatureQualityTolerance = {
  TOLERANCE_UNKNOWN: 0,
  TOLERANCE_DEFAULT: 1,
  TOLERANCE_IGNORE_POOR_FEATURE_QUALITY: 2
};

/**
 * optional double max_distance = 1;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.TravelParams.prototype.getMaxDistance = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.TravelParams} returns this
 */
proto.bosdyn.api.graph_nav.TravelParams.prototype.setMaxDistance = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double max_yaw = 2;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.TravelParams.prototype.getMaxYaw = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.TravelParams} returns this
 */
proto.bosdyn.api.graph_nav.TravelParams.prototype.setMaxYaw = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional bosdyn.api.SE2VelocityLimit velocity_limit = 3;
 * @return {?proto.bosdyn.api.SE2VelocityLimit}
 */
proto.bosdyn.api.graph_nav.TravelParams.prototype.getVelocityLimit = function() {
  return /** @type{?proto.bosdyn.api.SE2VelocityLimit} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE2VelocityLimit, 3));
};


/**
 * @param {?proto.bosdyn.api.SE2VelocityLimit|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.TravelParams} returns this
*/
proto.bosdyn.api.graph_nav.TravelParams.prototype.setVelocityLimit = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.TravelParams} returns this
 */
proto.bosdyn.api.graph_nav.TravelParams.prototype.clearVelocityLimit = function() {
  return this.setVelocityLimit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.TravelParams.prototype.hasVelocityLimit = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool ignore_final_yaw = 4;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.TravelParams.prototype.getIgnoreFinalYaw = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.TravelParams} returns this
 */
proto.bosdyn.api.graph_nav.TravelParams.prototype.setIgnoreFinalYaw = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional FeatureQualityTolerance feature_quality_tolerance = 5;
 * @return {!proto.bosdyn.api.graph_nav.TravelParams.FeatureQualityTolerance}
 */
proto.bosdyn.api.graph_nav.TravelParams.prototype.getFeatureQualityTolerance = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.TravelParams.FeatureQualityTolerance} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.TravelParams.FeatureQualityTolerance} value
 * @return {!proto.bosdyn.api.graph_nav.TravelParams} returns this
 */
proto.bosdyn.api.graph_nav.TravelParams.prototype.setFeatureQualityTolerance = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional bool disable_directed_exploration = 6;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.TravelParams.prototype.getDisableDirectedExploration = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.TravelParams} returns this
 */
proto.bosdyn.api.graph_nav.TravelParams.prototype.setDisableDirectedExploration = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool disable_alternate_route_finding = 8;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.TravelParams.prototype.getDisableAlternateRouteFinding = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.TravelParams} returns this
 */
proto.bosdyn.api.graph_nav.TravelParams.prototype.setDisableAlternateRouteFinding = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.NavigateToRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.NavigateToRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    leasesList: jspb.Message.toObjectList(msg.getLeasesList(),
    bosdyn_api_lease_pb.Lease.toObject, includeInstance),
    destinationWaypointId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    routeParams: (f = msg.getRouteParams()) && proto.bosdyn.api.graph_nav.RouteGenParams.toObject(includeInstance, f),
    travelParams: (f = msg.getTravelParams()) && proto.bosdyn.api.graph_nav.TravelParams.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    clockIdentifier: jspb.Message.getFieldWithDefault(msg, 7, ""),
    destinationWaypointTformBodyGoal: (f = msg.getDestinationWaypointTformBodyGoal()) && bosdyn_api_geometry_pb.SE2Pose.toObject(includeInstance, f),
    commandId: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToRequest}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.NavigateToRequest;
  return proto.bosdyn.api.graph_nav.NavigateToRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.NavigateToRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToRequest}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new bosdyn_api_lease_pb.Lease;
      reader.readMessage(value,bosdyn_api_lease_pb.Lease.deserializeBinaryFromReader);
      msg.addLeases(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationWaypointId(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.graph_nav.RouteGenParams;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.RouteGenParams.deserializeBinaryFromReader);
      msg.setRouteParams(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.graph_nav.TravelParams;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.TravelParams.deserializeBinaryFromReader);
      msg.setTravelParams(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setClockIdentifier(value);
      break;
    case 8:
      var value = new bosdyn_api_geometry_pb.SE2Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE2Pose.deserializeBinaryFromReader);
      msg.setDestinationWaypointTformBodyGoal(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCommandId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.NavigateToRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.NavigateToRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getLeasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      bosdyn_api_lease_pb.Lease.serializeBinaryToWriter
    );
  }
  f = message.getDestinationWaypointId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRouteParams();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.graph_nav.RouteGenParams.serializeBinaryToWriter
    );
  }
  f = message.getTravelParams();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.graph_nav.TravelParams.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getClockIdentifier();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDestinationWaypointTformBodyGoal();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      bosdyn_api_geometry_pb.SE2Pose.serializeBinaryToWriter
    );
  }
  f = message.getCommandId();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated bosdyn.api.Lease leases = 2;
 * @return {!Array<!proto.bosdyn.api.Lease>}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.getLeasesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.Lease>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_lease_pb.Lease, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.Lease>} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.setLeasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.Lease=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.Lease}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.addLeases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.Lease, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.clearLeasesList = function() {
  return this.setLeasesList([]);
};


/**
 * optional string destination_waypoint_id = 3;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.getDestinationWaypointId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.setDestinationWaypointId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional RouteGenParams route_params = 4;
 * @return {?proto.bosdyn.api.graph_nav.RouteGenParams}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.getRouteParams = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.RouteGenParams} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.RouteGenParams, 4));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.RouteGenParams|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.setRouteParams = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.clearRouteParams = function() {
  return this.setRouteParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.hasRouteParams = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TravelParams travel_params = 5;
 * @return {?proto.bosdyn.api.graph_nav.TravelParams}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.getTravelParams = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.TravelParams} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.TravelParams, 5));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.TravelParams|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.setTravelParams = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.clearTravelParams = function() {
  return this.setTravelParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.hasTravelParams = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string clock_identifier = 7;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.getClockIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.setClockIdentifier = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bosdyn.api.SE2Pose destination_waypoint_tform_body_goal = 8;
 * @return {?proto.bosdyn.api.SE2Pose}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.getDestinationWaypointTformBodyGoal = function() {
  return /** @type{?proto.bosdyn.api.SE2Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE2Pose, 8));
};


/**
 * @param {?proto.bosdyn.api.SE2Pose|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.setDestinationWaypointTformBodyGoal = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.clearDestinationWaypointTformBodyGoal = function() {
  return this.setDestinationWaypointTformBodyGoal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.hasDestinationWaypointTformBodyGoal = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 command_id = 9;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.getCommandId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToRequest.prototype.setCommandId = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.repeatedFields_ = [2,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.NavigateToResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.NavigateToResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    leaseUseResultsList: jspb.Message.toObjectList(msg.getLeaseUseResultsList(),
    bosdyn_api_lease_pb.LeaseUseResult.toObject, includeInstance),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    impairedState: (f = msg.getImpairedState()) && bosdyn_api_robot_state_pb.RobotImpairedState.toObject(includeInstance, f),
    commandId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    errorWaypointIdsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToResponse}
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.NavigateToResponse;
  return proto.bosdyn.api.graph_nav.NavigateToResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.NavigateToResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToResponse}
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addLeaseUseResults(value);
      break;
    case 3:
      var value = /** @type {!proto.bosdyn.api.graph_nav.NavigateToResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = new bosdyn_api_robot_state_pb.RobotImpairedState;
      reader.readMessage(value,bosdyn_api_robot_state_pb.RobotImpairedState.deserializeBinaryFromReader);
      msg.setImpairedState(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCommandId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addErrorWaypointIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.NavigateToResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.NavigateToResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getLeaseUseResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
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
  f = message.getImpairedState();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      bosdyn_api_robot_state_pb.RobotImpairedState.serializeBinaryToWriter
    );
  }
  f = message.getCommandId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getErrorWaypointIdsList();
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
proto.bosdyn.api.graph_nav.NavigateToResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_NO_TIMESYNC: 2,
  STATUS_EXPIRED: 3,
  STATUS_TOO_DISTANT: 4,
  STATUS_ROBOT_IMPAIRED: 5,
  STATUS_RECORDING: 6,
  STATUS_UNKNOWN_WAYPOINT: 7,
  STATUS_NO_PATH: 8,
  STATUS_FEATURE_DESERT: 10,
  STATUS_LOST: 11,
  STATUS_NOT_LOCALIZED_TO_MAP: 13,
  STATUS_COULD_NOT_UPDATE_ROUTE: 12,
  STATUS_STUCK: 14,
  STATUS_UNRECOGNIZED_COMMAND: 15
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToResponse} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated bosdyn.api.LeaseUseResult lease_use_results = 2;
 * @return {!Array<!proto.bosdyn.api.LeaseUseResult>}
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.getLeaseUseResultsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.LeaseUseResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_lease_pb.LeaseUseResult, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.LeaseUseResult>} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToResponse} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.setLeaseUseResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.LeaseUseResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.LeaseUseResult}
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.addLeaseUseResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.LeaseUseResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.clearLeaseUseResultsList = function() {
  return this.setLeaseUseResultsList([]);
};


/**
 * optional Status status = 3;
 * @return {!proto.bosdyn.api.graph_nav.NavigateToResponse.Status}
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.NavigateToResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.NavigateToResponse.Status} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bosdyn.api.RobotImpairedState impaired_state = 6;
 * @return {?proto.bosdyn.api.RobotImpairedState}
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.getImpairedState = function() {
  return /** @type{?proto.bosdyn.api.RobotImpairedState} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_robot_state_pb.RobotImpairedState, 6));
};


/**
 * @param {?proto.bosdyn.api.RobotImpairedState|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToResponse} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.setImpairedState = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.clearImpairedState = function() {
  return this.setImpairedState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.hasImpairedState = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 command_id = 4;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.getCommandId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.setCommandId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated string error_waypoint_ids = 5;
 * @return {!Array<string>}
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.getErrorWaypointIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.setErrorWaypointIdsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.graph_nav.NavigateToResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.addErrorWaypointIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToResponse.prototype.clearErrorWaypointIdsList = function() {
  return this.setErrorWaypointIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.RouteFollowingParams.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.RouteFollowingParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.RouteFollowingParams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.RouteFollowingParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    newCmdBehavior: jspb.Message.getFieldWithDefault(msg, 1, 0),
    existingCmdBehavior: jspb.Message.getFieldWithDefault(msg, 2, 0),
    routeBlockedBehavior: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.RouteFollowingParams}
 */
proto.bosdyn.api.graph_nav.RouteFollowingParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.RouteFollowingParams;
  return proto.bosdyn.api.graph_nav.RouteFollowingParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.RouteFollowingParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.RouteFollowingParams}
 */
proto.bosdyn.api.graph_nav.RouteFollowingParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.graph_nav.RouteFollowingParams.StartRouteBehavior} */ (reader.readEnum());
      msg.setNewCmdBehavior(value);
      break;
    case 2:
      var value = /** @type {!proto.bosdyn.api.graph_nav.RouteFollowingParams.ResumeBehavior} */ (reader.readEnum());
      msg.setExistingCmdBehavior(value);
      break;
    case 3:
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
proto.bosdyn.api.graph_nav.RouteFollowingParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.RouteFollowingParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.RouteFollowingParams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.RouteFollowingParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewCmdBehavior();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getExistingCmdBehavior();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getRouteBlockedBehavior();
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
proto.bosdyn.api.graph_nav.RouteFollowingParams.StartRouteBehavior = {
  START_UNKNOWN: 0,
  START_GOTO_START: 1,
  START_GOTO_ROUTE: 2,
  START_FAIL_WHEN_NOT_ON_ROUTE: 3
};

/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.RouteFollowingParams.ResumeBehavior = {
  RESUME_UNKNOWN: 0,
  RESUME_RETURN_TO_UNFINISHED_ROUTE: 1,
  RESUME_FAIL_WHEN_NOT_ON_ROUTE: 2
};

/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.RouteFollowingParams.RouteBlockedBehavior = {
  ROUTE_BLOCKED_UNKNOWN: 0,
  ROUTE_BLOCKED_REROUTE: 1,
  ROUTE_BLOCKED_FAIL: 2
};

/**
 * optional StartRouteBehavior new_cmd_behavior = 1;
 * @return {!proto.bosdyn.api.graph_nav.RouteFollowingParams.StartRouteBehavior}
 */
proto.bosdyn.api.graph_nav.RouteFollowingParams.prototype.getNewCmdBehavior = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.RouteFollowingParams.StartRouteBehavior} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.RouteFollowingParams.StartRouteBehavior} value
 * @return {!proto.bosdyn.api.graph_nav.RouteFollowingParams} returns this
 */
proto.bosdyn.api.graph_nav.RouteFollowingParams.prototype.setNewCmdBehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional ResumeBehavior existing_cmd_behavior = 2;
 * @return {!proto.bosdyn.api.graph_nav.RouteFollowingParams.ResumeBehavior}
 */
proto.bosdyn.api.graph_nav.RouteFollowingParams.prototype.getExistingCmdBehavior = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.RouteFollowingParams.ResumeBehavior} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.RouteFollowingParams.ResumeBehavior} value
 * @return {!proto.bosdyn.api.graph_nav.RouteFollowingParams} returns this
 */
proto.bosdyn.api.graph_nav.RouteFollowingParams.prototype.setExistingCmdBehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional RouteBlockedBehavior route_blocked_behavior = 3;
 * @return {!proto.bosdyn.api.graph_nav.RouteFollowingParams.RouteBlockedBehavior}
 */
proto.bosdyn.api.graph_nav.RouteFollowingParams.prototype.getRouteBlockedBehavior = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.RouteFollowingParams.RouteBlockedBehavior} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.RouteFollowingParams.RouteBlockedBehavior} value
 * @return {!proto.bosdyn.api.graph_nav.RouteFollowingParams} returns this
 */
proto.bosdyn.api.graph_nav.RouteFollowingParams.prototype.setRouteBlockedBehavior = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.NavigateRouteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    leasesList: jspb.Message.toObjectList(msg.getLeasesList(),
    bosdyn_api_lease_pb.Lease.toObject, includeInstance),
    route: (f = msg.getRoute()) && bosdyn_api_graph_nav_nav_pb.Route.toObject(includeInstance, f),
    routeFollowParams: (f = msg.getRouteFollowParams()) && proto.bosdyn.api.graph_nav.RouteFollowingParams.toObject(includeInstance, f),
    travelParams: (f = msg.getTravelParams()) && proto.bosdyn.api.graph_nav.TravelParams.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    clockIdentifier: jspb.Message.getFieldWithDefault(msg, 6, ""),
    destinationWaypointTformBodyGoal: (f = msg.getDestinationWaypointTformBodyGoal()) && bosdyn_api_geometry_pb.SE2Pose.toObject(includeInstance, f),
    commandId: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.NavigateRouteRequest;
  return proto.bosdyn.api.graph_nav.NavigateRouteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new bosdyn_api_lease_pb.Lease;
      reader.readMessage(value,bosdyn_api_lease_pb.Lease.deserializeBinaryFromReader);
      msg.addLeases(value);
      break;
    case 3:
      var value = new bosdyn_api_graph_nav_nav_pb.Route;
      reader.readMessage(value,bosdyn_api_graph_nav_nav_pb.Route.deserializeBinaryFromReader);
      msg.setRoute(value);
      break;
    case 9:
      var value = new proto.bosdyn.api.graph_nav.RouteFollowingParams;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.RouteFollowingParams.deserializeBinaryFromReader);
      msg.setRouteFollowParams(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.graph_nav.TravelParams;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.TravelParams.deserializeBinaryFromReader);
      msg.setTravelParams(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClockIdentifier(value);
      break;
    case 7:
      var value = new bosdyn_api_geometry_pb.SE2Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE2Pose.deserializeBinaryFromReader);
      msg.setDestinationWaypointTformBodyGoal(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCommandId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.NavigateRouteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getLeasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      bosdyn_api_lease_pb.Lease.serializeBinaryToWriter
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
      9,
      f,
      proto.bosdyn.api.graph_nav.RouteFollowingParams.serializeBinaryToWriter
    );
  }
  f = message.getTravelParams();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.graph_nav.TravelParams.serializeBinaryToWriter
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
  f = message.getClockIdentifier();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDestinationWaypointTformBodyGoal();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      bosdyn_api_geometry_pb.SE2Pose.serializeBinaryToWriter
    );
  }
  f = message.getCommandId();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated bosdyn.api.Lease leases = 2;
 * @return {!Array<!proto.bosdyn.api.Lease>}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.getLeasesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.Lease>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_lease_pb.Lease, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.Lease>} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.setLeasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.Lease=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.Lease}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.addLeases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.Lease, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.clearLeasesList = function() {
  return this.setLeasesList([]);
};


/**
 * optional Route route = 3;
 * @return {?proto.bosdyn.api.graph_nav.Route}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.getRoute = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Route} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_nav_pb.Route, 3));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Route|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.setRoute = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.clearRoute = function() {
  return this.setRoute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.hasRoute = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RouteFollowingParams route_follow_params = 9;
 * @return {?proto.bosdyn.api.graph_nav.RouteFollowingParams}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.getRouteFollowParams = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.RouteFollowingParams} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.RouteFollowingParams, 9));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.RouteFollowingParams|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.setRouteFollowParams = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.clearRouteFollowParams = function() {
  return this.setRouteFollowParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.hasRouteFollowParams = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional TravelParams travel_params = 4;
 * @return {?proto.bosdyn.api.graph_nav.TravelParams}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.getTravelParams = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.TravelParams} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.TravelParams, 4));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.TravelParams|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.setTravelParams = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.clearTravelParams = function() {
  return this.setTravelParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.hasTravelParams = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string clock_identifier = 6;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.getClockIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.setClockIdentifier = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bosdyn.api.SE2Pose destination_waypoint_tform_body_goal = 7;
 * @return {?proto.bosdyn.api.SE2Pose}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.getDestinationWaypointTformBodyGoal = function() {
  return /** @type{?proto.bosdyn.api.SE2Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE2Pose, 7));
};


/**
 * @param {?proto.bosdyn.api.SE2Pose|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.setDestinationWaypointTformBodyGoal = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.clearDestinationWaypointTformBodyGoal = function() {
  return this.setDestinationWaypointTformBodyGoal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.hasDestinationWaypointTformBodyGoal = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 command_id = 8;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.getCommandId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteRequest.prototype.setCommandId = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.repeatedFields_ = [2,5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.NavigateRouteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.NavigateRouteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    leaseUseResultsList: jspb.Message.toObjectList(msg.getLeaseUseResultsList(),
    bosdyn_api_lease_pb.LeaseUseResult.toObject, includeInstance),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    impairedState: (f = msg.getImpairedState()) && bosdyn_api_robot_state_pb.RobotImpairedState.toObject(includeInstance, f),
    commandId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    errorWaypointIdsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    errorEdgeIdsList: jspb.Message.toObjectList(msg.getErrorEdgeIdsList(),
    bosdyn_api_graph_nav_map_pb.Edge.Id.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteResponse}
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.NavigateRouteResponse;
  return proto.bosdyn.api.graph_nav.NavigateRouteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.NavigateRouteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteResponse}
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addLeaseUseResults(value);
      break;
    case 3:
      var value = /** @type {!proto.bosdyn.api.graph_nav.NavigateRouteResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 7:
      var value = new bosdyn_api_robot_state_pb.RobotImpairedState;
      reader.readMessage(value,bosdyn_api_robot_state_pb.RobotImpairedState.deserializeBinaryFromReader);
      msg.setImpairedState(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCommandId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addErrorWaypointIds(value);
      break;
    case 6:
      var value = new bosdyn_api_graph_nav_map_pb.Edge.Id;
      reader.readMessage(value,bosdyn_api_graph_nav_map_pb.Edge.Id.deserializeBinaryFromReader);
      msg.addErrorEdgeIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.NavigateRouteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.NavigateRouteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getLeaseUseResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
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
  f = message.getImpairedState();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      bosdyn_api_robot_state_pb.RobotImpairedState.serializeBinaryToWriter
    );
  }
  f = message.getCommandId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getErrorWaypointIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getErrorEdgeIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      bosdyn_api_graph_nav_map_pb.Edge.Id.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_NO_TIMESYNC: 2,
  STATUS_EXPIRED: 3,
  STATUS_TOO_DISTANT: 4,
  STATUS_ROBOT_IMPAIRED: 5,
  STATUS_RECORDING: 6,
  STATUS_UNKNOWN_ROUTE_ELEMENTS: 8,
  STATUS_INVALID_EDGE: 9,
  STATUS_NO_PATH: 20,
  STATUS_CONSTRAINT_FAULT: 11,
  STATUS_FEATURE_DESERT: 13,
  STATUS_LOST: 14,
  STATUS_NOT_LOCALIZED_TO_ROUTE: 16,
  STATUS_NOT_LOCALIZED_TO_MAP: 19,
  STATUS_COULD_NOT_UPDATE_ROUTE: 15,
  STATUS_STUCK: 17,
  STATUS_UNRECOGNIZED_COMMAND: 18
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteResponse} returns this
*/
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated bosdyn.api.LeaseUseResult lease_use_results = 2;
 * @return {!Array<!proto.bosdyn.api.LeaseUseResult>}
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.getLeaseUseResultsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.LeaseUseResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_lease_pb.LeaseUseResult, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.LeaseUseResult>} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteResponse} returns this
*/
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.setLeaseUseResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.LeaseUseResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.LeaseUseResult}
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.addLeaseUseResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.LeaseUseResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.clearLeaseUseResultsList = function() {
  return this.setLeaseUseResultsList([]);
};


/**
 * optional Status status = 3;
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteResponse.Status}
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.NavigateRouteResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.NavigateRouteResponse.Status} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bosdyn.api.RobotImpairedState impaired_state = 7;
 * @return {?proto.bosdyn.api.RobotImpairedState}
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.getImpairedState = function() {
  return /** @type{?proto.bosdyn.api.RobotImpairedState} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_robot_state_pb.RobotImpairedState, 7));
};


/**
 * @param {?proto.bosdyn.api.RobotImpairedState|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteResponse} returns this
*/
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.setImpairedState = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.clearImpairedState = function() {
  return this.setImpairedState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.hasImpairedState = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 command_id = 4;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.getCommandId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.setCommandId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated string error_waypoint_ids = 5;
 * @return {!Array<string>}
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.getErrorWaypointIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.setErrorWaypointIdsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.addErrorWaypointIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.clearErrorWaypointIdsList = function() {
  return this.setErrorWaypointIdsList([]);
};


/**
 * repeated Edge.Id error_edge_ids = 6;
 * @return {!Array<!proto.bosdyn.api.graph_nav.Edge.Id>}
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.getErrorEdgeIdsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.graph_nav.Edge.Id>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_graph_nav_map_pb.Edge.Id, 6));
};


/**
 * @param {!Array<!proto.bosdyn.api.graph_nav.Edge.Id>} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteResponse} returns this
*/
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.setErrorEdgeIdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.bosdyn.api.graph_nav.Edge.Id=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.graph_nav.Edge.Id}
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.addErrorEdgeIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.bosdyn.api.graph_nav.Edge.Id, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.NavigateRouteResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateRouteResponse.prototype.clearErrorEdgeIdsList = function() {
  return this.setErrorEdgeIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    leasesList: jspb.Message.toObjectList(msg.getLeasesList(),
    bosdyn_api_lease_pb.Lease.toObject, includeInstance),
    seedTformGoal: (f = msg.getSeedTformGoal()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    goalWaypointRtSeedEwrtSeedTolerance: (f = msg.getGoalWaypointRtSeedEwrtSeedTolerance()) && bosdyn_api_geometry_pb.Vec3.toObject(includeInstance, f),
    routeParams: (f = msg.getRouteParams()) && proto.bosdyn.api.graph_nav.RouteGenParams.toObject(includeInstance, f),
    travelParams: (f = msg.getTravelParams()) && proto.bosdyn.api.graph_nav.TravelParams.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    clockIdentifier: jspb.Message.getFieldWithDefault(msg, 9, ""),
    commandId: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.NavigateToAnchorRequest;
  return proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new bosdyn_api_lease_pb.Lease;
      reader.readMessage(value,bosdyn_api_lease_pb.Lease.deserializeBinaryFromReader);
      msg.addLeases(value);
      break;
    case 3:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setSeedTformGoal(value);
      break;
    case 4:
      var value = new bosdyn_api_geometry_pb.Vec3;
      reader.readMessage(value,bosdyn_api_geometry_pb.Vec3.deserializeBinaryFromReader);
      msg.setGoalWaypointRtSeedEwrtSeedTolerance(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.graph_nav.RouteGenParams;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.RouteGenParams.deserializeBinaryFromReader);
      msg.setRouteParams(value);
      break;
    case 7:
      var value = new proto.bosdyn.api.graph_nav.TravelParams;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.TravelParams.deserializeBinaryFromReader);
      msg.setTravelParams(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setClockIdentifier(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCommandId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getLeasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      bosdyn_api_lease_pb.Lease.serializeBinaryToWriter
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
  f = message.getGoalWaypointRtSeedEwrtSeedTolerance();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_geometry_pb.Vec3.serializeBinaryToWriter
    );
  }
  f = message.getRouteParams();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bosdyn.api.graph_nav.RouteGenParams.serializeBinaryToWriter
    );
  }
  f = message.getTravelParams();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bosdyn.api.graph_nav.TravelParams.serializeBinaryToWriter
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
  f = message.getClockIdentifier();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCommandId();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated bosdyn.api.Lease leases = 2;
 * @return {!Array<!proto.bosdyn.api.Lease>}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.getLeasesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.Lease>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_lease_pb.Lease, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.Lease>} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.setLeasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.Lease=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.Lease}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.addLeases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.Lease, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.clearLeasesList = function() {
  return this.setLeasesList([]);
};


/**
 * optional bosdyn.api.SE3Pose seed_tform_goal = 3;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.getSeedTformGoal = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 3));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.setSeedTformGoal = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.clearSeedTformGoal = function() {
  return this.setSeedTformGoal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.hasSeedTformGoal = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bosdyn.api.Vec3 goal_waypoint_rt_seed_ewrt_seed_tolerance = 4;
 * @return {?proto.bosdyn.api.Vec3}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.getGoalWaypointRtSeedEwrtSeedTolerance = function() {
  return /** @type{?proto.bosdyn.api.Vec3} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.Vec3, 4));
};


/**
 * @param {?proto.bosdyn.api.Vec3|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.setGoalWaypointRtSeedEwrtSeedTolerance = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.clearGoalWaypointRtSeedEwrtSeedTolerance = function() {
  return this.setGoalWaypointRtSeedEwrtSeedTolerance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.hasGoalWaypointRtSeedEwrtSeedTolerance = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional RouteGenParams route_params = 6;
 * @return {?proto.bosdyn.api.graph_nav.RouteGenParams}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.getRouteParams = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.RouteGenParams} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.RouteGenParams, 6));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.RouteGenParams|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.setRouteParams = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.clearRouteParams = function() {
  return this.setRouteParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.hasRouteParams = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional TravelParams travel_params = 7;
 * @return {?proto.bosdyn.api.graph_nav.TravelParams}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.getTravelParams = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.TravelParams} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.TravelParams, 7));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.TravelParams|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.setTravelParams = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.clearTravelParams = function() {
  return this.setTravelParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.hasTravelParams = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string clock_identifier = 9;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.getClockIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.setClockIdentifier = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional uint32 command_id = 10;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.getCommandId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorRequest.prototype.setCommandId = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.repeatedFields_ = [2,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    leaseUseResultsList: jspb.Message.toObjectList(msg.getLeaseUseResultsList(),
    bosdyn_api_lease_pb.LeaseUseResult.toObject, includeInstance),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    impairedState: (f = msg.getImpairedState()) && bosdyn_api_robot_state_pb.RobotImpairedState.toObject(includeInstance, f),
    commandId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    errorWaypointIdsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.NavigateToAnchorResponse;
  return proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addLeaseUseResults(value);
      break;
    case 3:
      var value = /** @type {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = new bosdyn_api_robot_state_pb.RobotImpairedState;
      reader.readMessage(value,bosdyn_api_robot_state_pb.RobotImpairedState.deserializeBinaryFromReader);
      msg.setImpairedState(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCommandId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addErrorWaypointIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getLeaseUseResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
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
  f = message.getImpairedState();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      bosdyn_api_robot_state_pb.RobotImpairedState.serializeBinaryToWriter
    );
  }
  f = message.getCommandId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getErrorWaypointIdsList();
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
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_NO_TIMESYNC: 2,
  STATUS_EXPIRED: 3,
  STATUS_TOO_DISTANT: 4,
  STATUS_ROBOT_IMPAIRED: 5,
  STATUS_RECORDING: 6,
  STATUS_NO_ANCHORING: 7,
  STATUS_NO_PATH: 8,
  STATUS_FEATURE_DESERT: 10,
  STATUS_LOST: 11,
  STATUS_NOT_LOCALIZED_TO_MAP: 13,
  STATUS_COULD_NOT_UPDATE_ROUTE: 12,
  STATUS_STUCK: 14,
  STATUS_UNRECOGNIZED_COMMAND: 15,
  STATUS_INVALID_POSE: 16
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated bosdyn.api.LeaseUseResult lease_use_results = 2;
 * @return {!Array<!proto.bosdyn.api.LeaseUseResult>}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.getLeaseUseResultsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.LeaseUseResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_lease_pb.LeaseUseResult, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.LeaseUseResult>} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.setLeaseUseResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.LeaseUseResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.LeaseUseResult}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.addLeaseUseResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.LeaseUseResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.clearLeaseUseResultsList = function() {
  return this.setLeaseUseResultsList([]);
};


/**
 * optional Status status = 3;
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.Status}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.Status} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bosdyn.api.RobotImpairedState impaired_state = 6;
 * @return {?proto.bosdyn.api.RobotImpairedState}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.getImpairedState = function() {
  return /** @type{?proto.bosdyn.api.RobotImpairedState} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_robot_state_pb.RobotImpairedState, 6));
};


/**
 * @param {?proto.bosdyn.api.RobotImpairedState|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse} returns this
*/
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.setImpairedState = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.clearImpairedState = function() {
  return this.setImpairedState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.hasImpairedState = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 command_id = 4;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.getCommandId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.setCommandId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated string error_waypoint_ids = 5;
 * @return {!Array<string>}
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.getErrorWaypointIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.setErrorWaypointIdsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.addErrorWaypointIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.NavigateToAnchorResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigateToAnchorResponse.prototype.clearErrorWaypointIdsList = function() {
  return this.setErrorWaypointIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.NavigationFeedbackRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.NavigationFeedbackRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    commandId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackRequest}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.NavigationFeedbackRequest;
  return proto.bosdyn.api.graph_nav.NavigationFeedbackRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.NavigationFeedbackRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackRequest}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCommandId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.NavigationFeedbackRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.NavigationFeedbackRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getCommandId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackRequest} returns this
*/
proto.bosdyn.api.graph_nav.NavigationFeedbackRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 command_id = 2;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackRequest.prototype.getCommandId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackRequest} returns this
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackRequest.prototype.setCommandId = function(value) {
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
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    impairedState: (f = msg.getImpairedState()) && bosdyn_api_robot_state_pb.RobotImpairedState.toObject(includeInstance, f),
    remainingRoute: (f = msg.getRemainingRoute()) && bosdyn_api_graph_nav_nav_pb.Route.toObject(includeInstance, f),
    commandId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    lastKoTformGoal: (f = msg.getLastKoTformGoal()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    bodyMovementStatus: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.NavigationFeedbackResponse;
  return proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = new bosdyn_api_robot_state_pb.RobotImpairedState;
      reader.readMessage(value,bosdyn_api_robot_state_pb.RobotImpairedState.deserializeBinaryFromReader);
      msg.setImpairedState(value);
      break;
    case 3:
      var value = new bosdyn_api_graph_nav_nav_pb.Route;
      reader.readMessage(value,bosdyn_api_graph_nav_nav_pb.Route.deserializeBinaryFromReader);
      msg.setRemainingRoute(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCommandId(value);
      break;
    case 5:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setLastKoTformGoal(value);
      break;
    case 7:
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
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getImpairedState();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      bosdyn_api_robot_state_pb.RobotImpairedState.serializeBinaryToWriter
    );
  }
  f = message.getRemainingRoute();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_graph_nav_nav_pb.Route.serializeBinaryToWriter
    );
  }
  f = message.getCommandId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getLastKoTformGoal();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
  f = message.getBodyMovementStatus();
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
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_FOLLOWING_ROUTE: 1,
  STATUS_REACHED_GOAL: 2,
  STATUS_NO_ROUTE: 3,
  STATUS_NO_LOCALIZATION: 4,
  STATUS_LOST: 5,
  STATUS_STUCK: 6,
  STATUS_COMMAND_TIMED_OUT: 7,
  STATUS_ROBOT_IMPAIRED: 8,
  STATUS_CONSTRAINT_FAULT: 11,
  STATUS_COMMAND_OVERRIDDEN: 12,
  STATUS_NOT_LOCALIZED_TO_ROUTE: 13,
  STATUS_LEASE_ERROR: 14
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse} returns this
*/
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.Status}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.Status} value
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bosdyn.api.RobotImpairedState impaired_state = 6;
 * @return {?proto.bosdyn.api.RobotImpairedState}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.getImpairedState = function() {
  return /** @type{?proto.bosdyn.api.RobotImpairedState} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_robot_state_pb.RobotImpairedState, 6));
};


/**
 * @param {?proto.bosdyn.api.RobotImpairedState|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse} returns this
*/
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.setImpairedState = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.clearImpairedState = function() {
  return this.setImpairedState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.hasImpairedState = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Route remaining_route = 3;
 * @return {?proto.bosdyn.api.graph_nav.Route}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.getRemainingRoute = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Route} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_nav_pb.Route, 3));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Route|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse} returns this
*/
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.setRemainingRoute = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.clearRemainingRoute = function() {
  return this.setRemainingRoute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.hasRemainingRoute = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 command_id = 4;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.getCommandId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.setCommandId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bosdyn.api.SE3Pose last_ko_tform_goal = 5;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.getLastKoTformGoal = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 5));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse} returns this
*/
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.setLastKoTformGoal = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.clearLastKoTformGoal = function() {
  return this.setLastKoTformGoal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.hasLastKoTformGoal = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bosdyn.api.SE2TrajectoryCommand.Feedback.BodyMovementStatus body_movement_status = 7;
 * @return {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback.BodyMovementStatus}
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.getBodyMovementStatus = function() {
  return /** @type {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback.BodyMovementStatus} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.bosdyn.api.SE2TrajectoryCommand.Feedback.BodyMovementStatus} value
 * @return {!proto.bosdyn.api.graph_nav.NavigationFeedbackResponse} returns this
 */
proto.bosdyn.api.graph_nav.NavigationFeedbackResponse.prototype.setBodyMovementStatus = function(value) {
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
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.GetLocalizationStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    waypointId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    requestLivePointCloud: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    requestLiveImages: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    requestLiveTerrainMaps: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    requestLiveWorldObjects: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    requestLiveRobotState: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    compressLivePointCloud: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateRequest}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.GetLocalizationStateRequest;
  return proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.GetLocalizationStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateRequest}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setWaypointId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequestLivePointCloud(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequestLiveImages(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequestLiveTerrainMaps(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequestLiveWorldObjects(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequestLiveRobotState(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCompressLivePointCloud(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.GetLocalizationStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getWaypointId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRequestLivePointCloud();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getRequestLiveImages();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRequestLiveTerrainMaps();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getRequestLiveWorldObjects();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getRequestLiveRobotState();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getCompressLivePointCloud();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateRequest} returns this
*/
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateRequest} returns this
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string waypoint_id = 8;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.getWaypointId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateRequest} returns this
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.setWaypointId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool request_live_point_cloud = 2;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.getRequestLivePointCloud = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateRequest} returns this
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.setRequestLivePointCloud = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool request_live_images = 3;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.getRequestLiveImages = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateRequest} returns this
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.setRequestLiveImages = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool request_live_terrain_maps = 4;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.getRequestLiveTerrainMaps = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateRequest} returns this
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.setRequestLiveTerrainMaps = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool request_live_world_objects = 5;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.getRequestLiveWorldObjects = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateRequest} returns this
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.setRequestLiveWorldObjects = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool request_live_robot_state = 6;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.getRequestLiveRobotState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateRequest} returns this
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.setRequestLiveRobotState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool compress_live_point_cloud = 7;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.getCompressLivePointCloud = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateRequest} returns this
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateRequest.prototype.setCompressLivePointCloud = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.RemotePointCloudStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.RemotePointCloudStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.RemotePointCloudStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.RemotePointCloudStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    existsInDirectory: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    hasData: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.RemotePointCloudStatus}
 */
proto.bosdyn.api.graph_nav.RemotePointCloudStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.RemotePointCloudStatus;
  return proto.bosdyn.api.graph_nav.RemotePointCloudStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.RemotePointCloudStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.RemotePointCloudStatus}
 */
proto.bosdyn.api.graph_nav.RemotePointCloudStatus.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExistsInDirectory(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.RemotePointCloudStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.RemotePointCloudStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.RemotePointCloudStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.RemotePointCloudStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExistsInDirectory();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getHasData();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.RemotePointCloudStatus.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.RemotePointCloudStatus} returns this
 */
proto.bosdyn.api.graph_nav.RemotePointCloudStatus.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool exists_in_directory = 2;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.RemotePointCloudStatus.prototype.getExistsInDirectory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.RemotePointCloudStatus} returns this
 */
proto.bosdyn.api.graph_nav.RemotePointCloudStatus.prototype.setExistsInDirectory = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool has_data = 3;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.RemotePointCloudStatus.prototype.getHasData = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.RemotePointCloudStatus} returns this
 */
proto.bosdyn.api.graph_nav.RemotePointCloudStatus.prototype.setHasData = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.LostDetectorState.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.LostDetectorState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.LostDetectorState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.LostDetectorState.toObject = function(includeInstance, msg) {
  var f, obj = {
    isLost: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.LostDetectorState}
 */
proto.bosdyn.api.graph_nav.LostDetectorState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.LostDetectorState;
  return proto.bosdyn.api.graph_nav.LostDetectorState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.LostDetectorState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.LostDetectorState}
 */
proto.bosdyn.api.graph_nav.LostDetectorState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLost(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.LostDetectorState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.LostDetectorState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.LostDetectorState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.LostDetectorState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsLost();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_lost = 1;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.LostDetectorState.prototype.getIsLost = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.LostDetectorState} returns this
 */
proto.bosdyn.api.graph_nav.LostDetectorState.prototype.setIsLost = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.GetLocalizationStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    localization: (f = msg.getLocalization()) && bosdyn_api_graph_nav_nav_pb.Localization.toObject(includeInstance, f),
    robotKinematics: (f = msg.getRobotKinematics()) && bosdyn_api_robot_state_pb.KinematicState.toObject(includeInstance, f),
    remoteCloudStatusList: jspb.Message.toObjectList(msg.getRemoteCloudStatusList(),
    proto.bosdyn.api.graph_nav.RemotePointCloudStatus.toObject, includeInstance),
    liveData: (f = msg.getLiveData()) && bosdyn_api_graph_nav_map_pb.WaypointSnapshot.toObject(includeInstance, f),
    lostDetectorState: (f = msg.getLostDetectorState()) && proto.bosdyn.api.graph_nav.LostDetectorState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateResponse}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.GetLocalizationStateResponse;
  return proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.GetLocalizationStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateResponse}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new bosdyn_api_graph_nav_nav_pb.Localization;
      reader.readMessage(value,bosdyn_api_graph_nav_nav_pb.Localization.deserializeBinaryFromReader);
      msg.setLocalization(value);
      break;
    case 4:
      var value = new bosdyn_api_robot_state_pb.KinematicState;
      reader.readMessage(value,bosdyn_api_robot_state_pb.KinematicState.deserializeBinaryFromReader);
      msg.setRobotKinematics(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.graph_nav.RemotePointCloudStatus;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.RemotePointCloudStatus.deserializeBinaryFromReader);
      msg.addRemoteCloudStatus(value);
      break;
    case 6:
      var value = new bosdyn_api_graph_nav_map_pb.WaypointSnapshot;
      reader.readMessage(value,bosdyn_api_graph_nav_map_pb.WaypointSnapshot.deserializeBinaryFromReader);
      msg.setLiveData(value);
      break;
    case 7:
      var value = new proto.bosdyn.api.graph_nav.LostDetectorState;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.LostDetectorState.deserializeBinaryFromReader);
      msg.setLostDetectorState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.GetLocalizationStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getLocalization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_graph_nav_nav_pb.Localization.serializeBinaryToWriter
    );
  }
  f = message.getRobotKinematics();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_robot_state_pb.KinematicState.serializeBinaryToWriter
    );
  }
  f = message.getRemoteCloudStatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.bosdyn.api.graph_nav.RemotePointCloudStatus.serializeBinaryToWriter
    );
  }
  f = message.getLiveData();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      bosdyn_api_graph_nav_map_pb.WaypointSnapshot.serializeBinaryToWriter
    );
  }
  f = message.getLostDetectorState();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bosdyn.api.graph_nav.LostDetectorState.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateResponse} returns this
*/
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateResponse} returns this
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Localization localization = 2;
 * @return {?proto.bosdyn.api.graph_nav.Localization}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.getLocalization = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Localization} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_nav_pb.Localization, 2));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Localization|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateResponse} returns this
*/
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.setLocalization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateResponse} returns this
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.clearLocalization = function() {
  return this.setLocalization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.hasLocalization = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bosdyn.api.KinematicState robot_kinematics = 4;
 * @return {?proto.bosdyn.api.KinematicState}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.getRobotKinematics = function() {
  return /** @type{?proto.bosdyn.api.KinematicState} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_robot_state_pb.KinematicState, 4));
};


/**
 * @param {?proto.bosdyn.api.KinematicState|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateResponse} returns this
*/
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.setRobotKinematics = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateResponse} returns this
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.clearRobotKinematics = function() {
  return this.setRobotKinematics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.hasRobotKinematics = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated RemotePointCloudStatus remote_cloud_status = 5;
 * @return {!Array<!proto.bosdyn.api.graph_nav.RemotePointCloudStatus>}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.getRemoteCloudStatusList = function() {
  return /** @type{!Array<!proto.bosdyn.api.graph_nav.RemotePointCloudStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.graph_nav.RemotePointCloudStatus, 5));
};


/**
 * @param {!Array<!proto.bosdyn.api.graph_nav.RemotePointCloudStatus>} value
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateResponse} returns this
*/
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.setRemoteCloudStatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.bosdyn.api.graph_nav.RemotePointCloudStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.graph_nav.RemotePointCloudStatus}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.addRemoteCloudStatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.bosdyn.api.graph_nav.RemotePointCloudStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateResponse} returns this
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.clearRemoteCloudStatusList = function() {
  return this.setRemoteCloudStatusList([]);
};


/**
 * optional WaypointSnapshot live_data = 6;
 * @return {?proto.bosdyn.api.graph_nav.WaypointSnapshot}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.getLiveData = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.WaypointSnapshot} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_map_pb.WaypointSnapshot, 6));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.WaypointSnapshot|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateResponse} returns this
*/
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.setLiveData = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateResponse} returns this
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.clearLiveData = function() {
  return this.setLiveData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.hasLiveData = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional LostDetectorState lost_detector_state = 7;
 * @return {?proto.bosdyn.api.graph_nav.LostDetectorState}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.getLostDetectorState = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.LostDetectorState} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.LostDetectorState, 7));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.LostDetectorState|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateResponse} returns this
*/
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.setLostDetectorState = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.GetLocalizationStateResponse} returns this
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.clearLostDetectorState = function() {
  return this.setLostDetectorState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.GetLocalizationStateResponse.prototype.hasLostDetectorState = function() {
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
proto.bosdyn.api.graph_nav.ClearGraphRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.ClearGraphRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.ClearGraphRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.ClearGraphRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
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
 * @return {!proto.bosdyn.api.graph_nav.ClearGraphRequest}
 */
proto.bosdyn.api.graph_nav.ClearGraphRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.ClearGraphRequest;
  return proto.bosdyn.api.graph_nav.ClearGraphRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.ClearGraphRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.ClearGraphRequest}
 */
proto.bosdyn.api.graph_nav.ClearGraphRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.graph_nav.ClearGraphRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.ClearGraphRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.ClearGraphRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.ClearGraphRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getLease();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_lease_pb.Lease.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.graph_nav.ClearGraphRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.ClearGraphRequest} returns this
*/
proto.bosdyn.api.graph_nav.ClearGraphRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.ClearGraphRequest} returns this
 */
proto.bosdyn.api.graph_nav.ClearGraphRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.ClearGraphRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.Lease lease = 2;
 * @return {?proto.bosdyn.api.Lease}
 */
proto.bosdyn.api.graph_nav.ClearGraphRequest.prototype.getLease = function() {
  return /** @type{?proto.bosdyn.api.Lease} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_lease_pb.Lease, 2));
};


/**
 * @param {?proto.bosdyn.api.Lease|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.ClearGraphRequest} returns this
*/
proto.bosdyn.api.graph_nav.ClearGraphRequest.prototype.setLease = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.ClearGraphRequest} returns this
 */
proto.bosdyn.api.graph_nav.ClearGraphRequest.prototype.clearLease = function() {
  return this.setLease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.ClearGraphRequest.prototype.hasLease = function() {
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
proto.bosdyn.api.graph_nav.ClearGraphResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.ClearGraphResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.ClearGraphResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.ClearGraphResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    leaseUseResult: (f = msg.getLeaseUseResult()) && bosdyn_api_lease_pb.LeaseUseResult.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.ClearGraphResponse}
 */
proto.bosdyn.api.graph_nav.ClearGraphResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.ClearGraphResponse;
  return proto.bosdyn.api.graph_nav.ClearGraphResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.ClearGraphResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.ClearGraphResponse}
 */
proto.bosdyn.api.graph_nav.ClearGraphResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.graph_nav.ClearGraphResponse.Status} */ (reader.readEnum());
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
proto.bosdyn.api.graph_nav.ClearGraphResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.ClearGraphResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.ClearGraphResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.ClearGraphResponse.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.ClearGraphResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_RECORDING: 2
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.graph_nav.ClearGraphResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.ClearGraphResponse} returns this
*/
proto.bosdyn.api.graph_nav.ClearGraphResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.ClearGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.ClearGraphResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.ClearGraphResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.LeaseUseResult lease_use_result = 2;
 * @return {?proto.bosdyn.api.LeaseUseResult}
 */
proto.bosdyn.api.graph_nav.ClearGraphResponse.prototype.getLeaseUseResult = function() {
  return /** @type{?proto.bosdyn.api.LeaseUseResult} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_lease_pb.LeaseUseResult, 2));
};


/**
 * @param {?proto.bosdyn.api.LeaseUseResult|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.ClearGraphResponse} returns this
*/
proto.bosdyn.api.graph_nav.ClearGraphResponse.prototype.setLeaseUseResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.ClearGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.ClearGraphResponse.prototype.clearLeaseUseResult = function() {
  return this.setLeaseUseResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.ClearGraphResponse.prototype.hasLeaseUseResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Status status = 3;
 * @return {!proto.bosdyn.api.graph_nav.ClearGraphResponse.Status}
 */
proto.bosdyn.api.graph_nav.ClearGraphResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.ClearGraphResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.ClearGraphResponse.Status} value
 * @return {!proto.bosdyn.api.graph_nav.ClearGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.ClearGraphResponse.prototype.setStatus = function(value) {
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
proto.bosdyn.api.graph_nav.UploadGraphRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.UploadGraphRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.UploadGraphRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.UploadGraphRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    graph: (f = msg.getGraph()) && bosdyn_api_graph_nav_map_pb.Graph.toObject(includeInstance, f),
    lease: (f = msg.getLease()) && bosdyn_api_lease_pb.Lease.toObject(includeInstance, f),
    generateNewAnchoring: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphRequest}
 */
proto.bosdyn.api.graph_nav.UploadGraphRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.UploadGraphRequest;
  return proto.bosdyn.api.graph_nav.UploadGraphRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.UploadGraphRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphRequest}
 */
proto.bosdyn.api.graph_nav.UploadGraphRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new bosdyn_api_graph_nav_map_pb.Graph;
      reader.readMessage(value,bosdyn_api_graph_nav_map_pb.Graph.deserializeBinaryFromReader);
      msg.setGraph(value);
      break;
    case 3:
      var value = new bosdyn_api_lease_pb.Lease;
      reader.readMessage(value,bosdyn_api_lease_pb.Lease.deserializeBinaryFromReader);
      msg.setLease(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGenerateNewAnchoring(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.UploadGraphRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.UploadGraphRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.UploadGraphRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.UploadGraphRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getGraph();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_graph_nav_map_pb.Graph.serializeBinaryToWriter
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
  f = message.getGenerateNewAnchoring();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.graph_nav.UploadGraphRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphRequest} returns this
*/
proto.bosdyn.api.graph_nav.UploadGraphRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphRequest} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadGraphRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Graph graph = 2;
 * @return {?proto.bosdyn.api.graph_nav.Graph}
 */
proto.bosdyn.api.graph_nav.UploadGraphRequest.prototype.getGraph = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Graph} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_map_pb.Graph, 2));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Graph|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphRequest} returns this
*/
proto.bosdyn.api.graph_nav.UploadGraphRequest.prototype.setGraph = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphRequest} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphRequest.prototype.clearGraph = function() {
  return this.setGraph(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadGraphRequest.prototype.hasGraph = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bosdyn.api.Lease lease = 3;
 * @return {?proto.bosdyn.api.Lease}
 */
proto.bosdyn.api.graph_nav.UploadGraphRequest.prototype.getLease = function() {
  return /** @type{?proto.bosdyn.api.Lease} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_lease_pb.Lease, 3));
};


/**
 * @param {?proto.bosdyn.api.Lease|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphRequest} returns this
*/
proto.bosdyn.api.graph_nav.UploadGraphRequest.prototype.setLease = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphRequest} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphRequest.prototype.clearLease = function() {
  return this.setLease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadGraphRequest.prototype.hasLease = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool generate_new_anchoring = 4;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadGraphRequest.prototype.getGenerateNewAnchoring = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphRequest} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphRequest.prototype.setGenerateNewAnchoring = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.repeatedFields_ = [3,4,5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.UploadGraphResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.UploadGraphResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 8, 0),
    leaseUseResult: (f = msg.getLeaseUseResult()) && bosdyn_api_lease_pb.LeaseUseResult.toObject(includeInstance, f),
    loadedWaypointSnapshotIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    unknownWaypointSnapshotIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    loadedEdgeSnapshotIdsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    unknownEdgeSnapshotIdsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    licenseStatus: jspb.Message.getFieldWithDefault(msg, 7, 0),
    sensorStatus: (f = msg.getSensorStatus()) && proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse}
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.UploadGraphResponse;
  return proto.bosdyn.api.graph_nav.UploadGraphResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.UploadGraphResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse}
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 8:
      var value = /** @type {!proto.bosdyn.api.graph_nav.UploadGraphResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new bosdyn_api_lease_pb.LeaseUseResult;
      reader.readMessage(value,bosdyn_api_lease_pb.LeaseUseResult.deserializeBinaryFromReader);
      msg.setLeaseUseResult(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addLoadedWaypointSnapshotIds(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addUnknownWaypointSnapshotIds(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addLoadedEdgeSnapshotIds(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addUnknownEdgeSnapshotIds(value);
      break;
    case 7:
      var value = /** @type {!proto.bosdyn.api.LicenseInfo.Status} */ (reader.readEnum());
      msg.setLicenseStatus(value);
      break;
    case 9:
      var value = new proto.bosdyn.api.graph_nav.SensorCompatibilityStatus;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.deserializeBinaryFromReader);
      msg.setSensorStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.UploadGraphResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.UploadGraphResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.serializeBinaryToWriter = function(message, writer) {
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
      8,
      f
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
  f = message.getLoadedWaypointSnapshotIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getUnknownWaypointSnapshotIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getLoadedEdgeSnapshotIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getUnknownEdgeSnapshotIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getLicenseStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getSensorStatus();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_MAP_TOO_LARGE_LICENSE: 3,
  STATUS_INVALID_GRAPH: 4,
  STATUS_INCOMPATIBLE_SENSORS: 5
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
*/
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 8;
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse.Status}
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.UploadGraphResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.UploadGraphResponse.Status} value
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional bosdyn.api.LeaseUseResult lease_use_result = 2;
 * @return {?proto.bosdyn.api.LeaseUseResult}
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.getLeaseUseResult = function() {
  return /** @type{?proto.bosdyn.api.LeaseUseResult} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_lease_pb.LeaseUseResult, 2));
};


/**
 * @param {?proto.bosdyn.api.LeaseUseResult|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
*/
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.setLeaseUseResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.clearLeaseUseResult = function() {
  return this.setLeaseUseResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.hasLeaseUseResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string loaded_waypoint_snapshot_ids = 3;
 * @return {!Array<string>}
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.getLoadedWaypointSnapshotIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.setLoadedWaypointSnapshotIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.addLoadedWaypointSnapshotIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.clearLoadedWaypointSnapshotIdsList = function() {
  return this.setLoadedWaypointSnapshotIdsList([]);
};


/**
 * repeated string unknown_waypoint_snapshot_ids = 4;
 * @return {!Array<string>}
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.getUnknownWaypointSnapshotIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.setUnknownWaypointSnapshotIdsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.addUnknownWaypointSnapshotIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.clearUnknownWaypointSnapshotIdsList = function() {
  return this.setUnknownWaypointSnapshotIdsList([]);
};


/**
 * repeated string loaded_edge_snapshot_ids = 5;
 * @return {!Array<string>}
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.getLoadedEdgeSnapshotIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.setLoadedEdgeSnapshotIdsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.addLoadedEdgeSnapshotIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.clearLoadedEdgeSnapshotIdsList = function() {
  return this.setLoadedEdgeSnapshotIdsList([]);
};


/**
 * repeated string unknown_edge_snapshot_ids = 6;
 * @return {!Array<string>}
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.getUnknownEdgeSnapshotIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.setUnknownEdgeSnapshotIdsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.addUnknownEdgeSnapshotIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.clearUnknownEdgeSnapshotIdsList = function() {
  return this.setUnknownEdgeSnapshotIdsList([]);
};


/**
 * optional bosdyn.api.LicenseInfo.Status license_status = 7;
 * @return {!proto.bosdyn.api.LicenseInfo.Status}
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.getLicenseStatus = function() {
  return /** @type {!proto.bosdyn.api.LicenseInfo.Status} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.bosdyn.api.LicenseInfo.Status} value
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.setLicenseStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional SensorCompatibilityStatus sensor_status = 9;
 * @return {?proto.bosdyn.api.graph_nav.SensorCompatibilityStatus}
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.getSensorStatus = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.SensorCompatibilityStatus} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.SensorCompatibilityStatus, 9));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.SensorCompatibilityStatus|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
*/
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.setSensorStatus = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.UploadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.clearSensorStatus = function() {
  return this.setSensorStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadGraphResponse.prototype.hasSensorStatus = function() {
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
proto.bosdyn.api.graph_nav.DownloadGraphRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.DownloadGraphRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.DownloadGraphRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.DownloadGraphRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.graph_nav.DownloadGraphRequest}
 */
proto.bosdyn.api.graph_nav.DownloadGraphRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.DownloadGraphRequest;
  return proto.bosdyn.api.graph_nav.DownloadGraphRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.DownloadGraphRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.DownloadGraphRequest}
 */
proto.bosdyn.api.graph_nav.DownloadGraphRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.graph_nav.DownloadGraphRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.DownloadGraphRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.DownloadGraphRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.DownloadGraphRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.graph_nav.DownloadGraphRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadGraphRequest} returns this
*/
proto.bosdyn.api.graph_nav.DownloadGraphRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.DownloadGraphRequest} returns this
 */
proto.bosdyn.api.graph_nav.DownloadGraphRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.DownloadGraphRequest.prototype.hasHeader = function() {
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
proto.bosdyn.api.graph_nav.DownloadGraphResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.DownloadGraphResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.DownloadGraphResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.DownloadGraphResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    graph: (f = msg.getGraph()) && bosdyn_api_graph_nav_map_pb.Graph.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.DownloadGraphResponse}
 */
proto.bosdyn.api.graph_nav.DownloadGraphResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.DownloadGraphResponse;
  return proto.bosdyn.api.graph_nav.DownloadGraphResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.DownloadGraphResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.DownloadGraphResponse}
 */
proto.bosdyn.api.graph_nav.DownloadGraphResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new bosdyn_api_graph_nav_map_pb.Graph;
      reader.readMessage(value,bosdyn_api_graph_nav_map_pb.Graph.deserializeBinaryFromReader);
      msg.setGraph(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.DownloadGraphResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.DownloadGraphResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.DownloadGraphResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.DownloadGraphResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = message.getGraph();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_graph_nav_map_pb.Graph.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.graph_nav.DownloadGraphResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadGraphResponse} returns this
*/
proto.bosdyn.api.graph_nav.DownloadGraphResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.DownloadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.DownloadGraphResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.DownloadGraphResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Graph graph = 2;
 * @return {?proto.bosdyn.api.graph_nav.Graph}
 */
proto.bosdyn.api.graph_nav.DownloadGraphResponse.prototype.getGraph = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Graph} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_map_pb.Graph, 2));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Graph|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadGraphResponse} returns this
*/
proto.bosdyn.api.graph_nav.DownloadGraphResponse.prototype.setGraph = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.DownloadGraphResponse} returns this
 */
proto.bosdyn.api.graph_nav.DownloadGraphResponse.prototype.clearGraph = function() {
  return this.setGraph(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.DownloadGraphResponse.prototype.hasGraph = function() {
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
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    chunk: (f = msg.getChunk()) && bosdyn_api_data_chunk_pb.DataChunk.toObject(includeInstance, f),
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
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest;
  return proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new bosdyn_api_data_chunk_pb.DataChunk;
      reader.readMessage(value,bosdyn_api_data_chunk_pb.DataChunk.deserializeBinaryFromReader);
      msg.setChunk(value);
      break;
    case 4:
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
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
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
  f = message.getLease();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_lease_pb.Lease.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest} returns this
*/
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest} returns this
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.DataChunk chunk = 3;
 * @return {?proto.bosdyn.api.DataChunk}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.prototype.getChunk = function() {
  return /** @type{?proto.bosdyn.api.DataChunk} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_chunk_pb.DataChunk, 3));
};


/**
 * @param {?proto.bosdyn.api.DataChunk|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest} returns this
*/
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.prototype.setChunk = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest} returns this
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.prototype.clearChunk = function() {
  return this.setChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.prototype.hasChunk = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bosdyn.api.Lease lease = 4;
 * @return {?proto.bosdyn.api.Lease}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.prototype.getLease = function() {
  return /** @type{?proto.bosdyn.api.Lease} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_lease_pb.Lease, 4));
};


/**
 * @param {?proto.bosdyn.api.Lease|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest} returns this
*/
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.prototype.setLease = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest} returns this
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.prototype.clearLease = function() {
  return this.setLease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotRequest.prototype.hasLease = function() {
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
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    leaseUseResult: (f = msg.getLeaseUseResult()) && bosdyn_api_lease_pb.LeaseUseResult.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    sensorStatus: (f = msg.getSensorStatus()) && proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse;
  return proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.graph_nav.SensorCompatibilityStatus;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.deserializeBinaryFromReader);
      msg.setSensorStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSensorStatus();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.graph_nav.SensorCompatibilityStatus.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_INCOMPATIBLE_SENSORS: 2
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse} returns this
*/
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.LeaseUseResult lease_use_result = 2;
 * @return {?proto.bosdyn.api.LeaseUseResult}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.prototype.getLeaseUseResult = function() {
  return /** @type{?proto.bosdyn.api.LeaseUseResult} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_lease_pb.LeaseUseResult, 2));
};


/**
 * @param {?proto.bosdyn.api.LeaseUseResult|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse} returns this
*/
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.prototype.setLeaseUseResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.prototype.clearLeaseUseResult = function() {
  return this.setLeaseUseResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.prototype.hasLeaseUseResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Status status = 3;
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.Status}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.Status} value
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional SensorCompatibilityStatus sensor_status = 4;
 * @return {?proto.bosdyn.api.graph_nav.SensorCompatibilityStatus}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.prototype.getSensorStatus = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.SensorCompatibilityStatus} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.SensorCompatibilityStatus, 4));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.SensorCompatibilityStatus|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse} returns this
*/
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.prototype.setSensorStatus = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.prototype.clearSensorStatus = function() {
  return this.setSensorStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadWaypointSnapshotResponse.prototype.hasSensorStatus = function() {
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
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    chunk: (f = msg.getChunk()) && bosdyn_api_data_chunk_pb.DataChunk.toObject(includeInstance, f),
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
 * @return {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest}
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest;
  return proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest}
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = new bosdyn_api_data_chunk_pb.DataChunk;
      reader.readMessage(value,bosdyn_api_data_chunk_pb.DataChunk.deserializeBinaryFromReader);
      msg.setChunk(value);
      break;
    case 5:
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
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getChunk();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_data_chunk_pb.DataChunk.serializeBinaryToWriter
    );
  }
  f = message.getLease();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_lease_pb.Lease.serializeBinaryToWriter
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest} returns this
*/
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest} returns this
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.DataChunk chunk = 4;
 * @return {?proto.bosdyn.api.DataChunk}
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.prototype.getChunk = function() {
  return /** @type{?proto.bosdyn.api.DataChunk} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_chunk_pb.DataChunk, 4));
};


/**
 * @param {?proto.bosdyn.api.DataChunk|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest} returns this
*/
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.prototype.setChunk = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest} returns this
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.prototype.clearChunk = function() {
  return this.setChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.prototype.hasChunk = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bosdyn.api.Lease lease = 5;
 * @return {?proto.bosdyn.api.Lease}
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.prototype.getLease = function() {
  return /** @type{?proto.bosdyn.api.Lease} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_lease_pb.Lease, 5));
};


/**
 * @param {?proto.bosdyn.api.Lease|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest} returns this
*/
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.prototype.setLease = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest} returns this
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.prototype.clearLease = function() {
  return this.setLease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotRequest.prototype.hasLease = function() {
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
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    leaseUseResult: (f = msg.getLeaseUseResult()) && bosdyn_api_lease_pb.LeaseUseResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse}
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse;
  return proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse}
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse} returns this
*/
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bosdyn.api.LeaseUseResult lease_use_result = 2;
 * @return {?proto.bosdyn.api.LeaseUseResult}
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.prototype.getLeaseUseResult = function() {
  return /** @type{?proto.bosdyn.api.LeaseUseResult} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_lease_pb.LeaseUseResult, 2));
};


/**
 * @param {?proto.bosdyn.api.LeaseUseResult|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse} returns this
*/
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.prototype.setLeaseUseResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse} returns this
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.prototype.clearLeaseUseResult = function() {
  return this.setLeaseUseResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.UploadEdgeSnapshotResponse.prototype.hasLeaseUseResult = function() {
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
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    waypointSnapshotId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    downloadImages: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    compressPointCloud: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    doNotDownloadPointCloud: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest;
  return proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setWaypointSnapshotId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDownloadImages(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCompressPointCloud(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDoNotDownloadPointCloud(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getWaypointSnapshotId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDownloadImages();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getCompressPointCloud();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getDoNotDownloadPointCloud();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional bosdyn.api.RequestHeader header = 1;
 * @return {?proto.bosdyn.api.RequestHeader}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest} returns this
*/
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest} returns this
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string waypoint_snapshot_id = 2;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.prototype.getWaypointSnapshotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest} returns this
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.prototype.setWaypointSnapshotId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool download_images = 3;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.prototype.getDownloadImages = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest} returns this
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.prototype.setDownloadImages = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool compress_point_cloud = 4;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.prototype.getCompressPointCloud = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest} returns this
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.prototype.setCompressPointCloud = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool do_not_download_point_cloud = 5;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.prototype.getDoNotDownloadPointCloud = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest} returns this
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotRequest.prototype.setDoNotDownloadPointCloud = function(value) {
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
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    waypointSnapshotId: jspb.Message.getFieldWithDefault(msg, 4, ""),
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
 * @return {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse;
  return proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWaypointSnapshotId(value);
      break;
    case 5:
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
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getWaypointSnapshotId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getChunk();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_data_chunk_pb.DataChunk.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_SNAPSHOT_DOES_NOT_EXIST: 2
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse} returns this
*/
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse} returns this
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.Status}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.Status} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse} returns this
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string waypoint_snapshot_id = 4;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.prototype.getWaypointSnapshotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse} returns this
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.prototype.setWaypointSnapshotId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bosdyn.api.DataChunk chunk = 5;
 * @return {?proto.bosdyn.api.DataChunk}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.prototype.getChunk = function() {
  return /** @type{?proto.bosdyn.api.DataChunk} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_chunk_pb.DataChunk, 5));
};


/**
 * @param {?proto.bosdyn.api.DataChunk|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse} returns this
*/
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.prototype.setChunk = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse} returns this
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.prototype.clearChunk = function() {
  return this.setChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.DownloadWaypointSnapshotResponse.prototype.hasChunk = function() {
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
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.RequestHeader.toObject(includeInstance, f),
    edgeSnapshotId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest}
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest;
  return proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest}
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setEdgeSnapshotId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_header_pb.RequestHeader.serializeBinaryToWriter
    );
  }
  f = message.getEdgeSnapshotId();
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
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.RequestHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.RequestHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.RequestHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest} returns this
*/
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest} returns this
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string edge_snapshot_id = 2;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest.prototype.getEdgeSnapshotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest} returns this
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotRequest.prototype.setEdgeSnapshotId = function(value) {
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
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && bosdyn_api_header_pb.ResponseHeader.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    edgeSnapshotId: jspb.Message.getFieldWithDefault(msg, 4, ""),
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
 * @return {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse}
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse;
  return proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse}
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEdgeSnapshotId(value);
      break;
    case 5:
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
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getEdgeSnapshotId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getChunk();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_data_chunk_pb.DataChunk.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.Status = {
  STATUS_UNKNOWN: 0,
  STATUS_OK: 1,
  STATUS_SNAPSHOT_DOES_NOT_EXIST: 2
};

/**
 * optional bosdyn.api.ResponseHeader header = 1;
 * @return {?proto.bosdyn.api.ResponseHeader}
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.prototype.getHeader = function() {
  return /** @type{?proto.bosdyn.api.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_header_pb.ResponseHeader, 1));
};


/**
 * @param {?proto.bosdyn.api.ResponseHeader|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse} returns this
*/
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse} returns this
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Status status = 2;
 * @return {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.Status}
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.prototype.getStatus = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.Status} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse} returns this
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string edge_snapshot_id = 4;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.prototype.getEdgeSnapshotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse} returns this
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.prototype.setEdgeSnapshotId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bosdyn.api.DataChunk chunk = 5;
 * @return {?proto.bosdyn.api.DataChunk}
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.prototype.getChunk = function() {
  return /** @type{?proto.bosdyn.api.DataChunk} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_data_chunk_pb.DataChunk, 5));
};


/**
 * @param {?proto.bosdyn.api.DataChunk|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse} returns this
*/
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.prototype.setChunk = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse} returns this
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.prototype.clearChunk = function() {
  return this.setChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.DownloadEdgeSnapshotResponse.prototype.hasChunk = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.bosdyn.api.graph_nav);

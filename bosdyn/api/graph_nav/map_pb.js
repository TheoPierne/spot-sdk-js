// source: bosdyn/api/graph_nav/map.proto
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
var bosdyn_api_graph_nav_area_callback_data_pb = require('../../../bosdyn/api/graph_nav/area_callback_data_pb.js');
goog.object.extend(proto, bosdyn_api_graph_nav_area_callback_data_pb);
var bosdyn_api_image_pb = require('../../../bosdyn/api/image_pb.js');
goog.object.extend(proto, bosdyn_api_image_pb);
var bosdyn_api_local_grid_pb = require('../../../bosdyn/api/local_grid_pb.js');
goog.object.extend(proto, bosdyn_api_local_grid_pb);
var bosdyn_api_payload_pb = require('../../../bosdyn/api/payload_pb.js');
goog.object.extend(proto, bosdyn_api_payload_pb);
var bosdyn_api_point_cloud_pb = require('../../../bosdyn/api/point_cloud_pb.js');
goog.object.extend(proto, bosdyn_api_point_cloud_pb);
var bosdyn_api_robot_id_pb = require('../../../bosdyn/api/robot_id_pb.js');
goog.object.extend(proto, bosdyn_api_robot_id_pb);
var bosdyn_api_robot_state_pb = require('../../../bosdyn/api/robot_state_pb.js');
goog.object.extend(proto, bosdyn_api_robot_state_pb);
var bosdyn_api_spot_robot_command_pb = require('../../../bosdyn/api/spot/robot_command_pb.js');
goog.object.extend(proto, bosdyn_api_spot_robot_command_pb);
var bosdyn_api_stairs_pb = require('../../../bosdyn/api/stairs_pb.js');
goog.object.extend(proto, bosdyn_api_stairs_pb);
var bosdyn_api_world_object_pb = require('../../../bosdyn/api/world_object_pb.js');
goog.object.extend(proto, bosdyn_api_world_object_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Anchor', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.AnchoredWorldObject', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Anchoring', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.AnnotationState', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.AreaCallbackRegion', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.ClientMetadata', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Edge', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Edge.Annotations', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Edge.Annotations.DirectionConstraint', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Edge.Annotations.GroundClutterAvoidanceMode', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Edge.Annotations.PathFollowingMode', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Edge.Annotations.StairData', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Edge.EdgeSource', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Edge.Id', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.EdgeSnapshot', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Graph', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.MapStats', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.MapStats.Stat', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Waypoint', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Waypoint.Annotations', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.RegionCase', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.Waypoint.WaypointSource', null, global);
goog.exportSymbol('proto.bosdyn.api.graph_nav.WaypointSnapshot', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.Waypoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.Waypoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.Waypoint.displayName = 'proto.bosdyn.api.graph_nav.Waypoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.Waypoint.Annotations, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.Waypoint.Annotations.displayName = 'proto.bosdyn.api.graph_nav.Waypoint.Annotations';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.oneofGroups_);
};
goog.inherits(proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.displayName = 'proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default.displayName = 'proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty.displayName = 'proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D.displayName = 'proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.displayName = 'proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.ClientMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.ClientMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.ClientMetadata.displayName = 'proto.bosdyn.api.graph_nav.ClientMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.graph_nav.WaypointSnapshot.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.WaypointSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.WaypointSnapshot.displayName = 'proto.bosdyn.api.graph_nav.WaypointSnapshot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.Edge = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.Edge, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.Edge.displayName = 'proto.bosdyn.api.graph_nav.Edge';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.Edge.Id = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.Edge.Id, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.Edge.Id.displayName = 'proto.bosdyn.api.graph_nav.Edge.Id';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.Edge.Annotations = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.Edge.Annotations, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.Edge.Annotations.displayName = 'proto.bosdyn.api.graph_nav.Edge.Annotations';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.StairData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.Edge.Annotations.StairData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.displayName = 'proto.bosdyn.api.graph_nav.Edge.Annotations.StairData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.graph_nav.EdgeSnapshot.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.EdgeSnapshot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.EdgeSnapshot.displayName = 'proto.bosdyn.api.graph_nav.EdgeSnapshot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.displayName = 'proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.Anchor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.Anchor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.Anchor.displayName = 'proto.bosdyn.api.graph_nav.Anchor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.AnchoredWorldObject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.AnchoredWorldObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.AnchoredWorldObject.displayName = 'proto.bosdyn.api.graph_nav.AnchoredWorldObject';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.Anchoring = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.graph_nav.Anchoring.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.Anchoring, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.Anchoring.displayName = 'proto.bosdyn.api.graph_nav.Anchoring';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.AreaCallbackRegion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.AreaCallbackRegion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.AreaCallbackRegion.displayName = 'proto.bosdyn.api.graph_nav.AreaCallbackRegion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.Graph = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bosdyn.api.graph_nav.Graph.repeatedFields_, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.Graph, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.Graph.displayName = 'proto.bosdyn.api.graph_nav.Graph';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.MapStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.MapStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.MapStats.displayName = 'proto.bosdyn.api.graph_nav.MapStats';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.bosdyn.api.graph_nav.MapStats.Stat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bosdyn.api.graph_nav.MapStats.Stat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.bosdyn.api.graph_nav.MapStats.Stat.displayName = 'proto.bosdyn.api.graph_nav.MapStats.Stat';
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
proto.bosdyn.api.graph_nav.Waypoint.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.Waypoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.Waypoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Waypoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    snapshotId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    waypointTformKo: (f = msg.getWaypointTformKo()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    annotations: (f = msg.getAnnotations()) && proto.bosdyn.api.graph_nav.Waypoint.Annotations.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint}
 */
proto.bosdyn.api.graph_nav.Waypoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.Waypoint;
  return proto.bosdyn.api.graph_nav.Waypoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.Waypoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint}
 */
proto.bosdyn.api.graph_nav.Waypoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshotId(value);
      break;
    case 3:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setWaypointTformKo(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.graph_nav.Waypoint.Annotations;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.Waypoint.Annotations.deserializeBinaryFromReader);
      msg.setAnnotations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.Waypoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.Waypoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.Waypoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Waypoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSnapshotId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWaypointTformKo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
  f = message.getAnnotations();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.graph_nav.Waypoint.Annotations.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.Waypoint.WaypointSource = {
  WAYPOINT_SOURCE_UNKNOWN: 0,
  WAYPOINT_SOURCE_ROBOT_PATH: 1,
  WAYPOINT_SOURCE_USER_REQUEST: 2,
  WAYPOINT_SOURCE_ALTERNATE_ROUTE_FINDING: 3
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.Waypoint.Annotations.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    creationTime: (f = msg.getCreationTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    icpVariance: (f = msg.getIcpVariance()) && bosdyn_api_geometry_pb.SE3Covariance.toObject(includeInstance, f),
    scanMatchRegion: (f = msg.getScanMatchRegion()) && proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.toObject(includeInstance, f),
    waypointSource: jspb.Message.getFieldWithDefault(msg, 5, 0),
    clientMetadata: (f = msg.getClientMetadata()) && proto.bosdyn.api.graph_nav.ClientMetadata.toObject(includeInstance, f),
    loopClosureSettings: (f = msg.getLoopClosureSettings()) && proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.Waypoint.Annotations;
  return proto.bosdyn.api.graph_nav.Waypoint.Annotations.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.deserializeBinaryFromReader = function(msg, reader) {
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
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreationTime(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.SE3Covariance;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Covariance.deserializeBinaryFromReader);
      msg.setIcpVariance(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.deserializeBinaryFromReader);
      msg.setScanMatchRegion(value);
      break;
    case 5:
      var value = /** @type {!proto.bosdyn.api.graph_nav.Waypoint.WaypointSource} */ (reader.readEnum());
      msg.setWaypointSource(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.graph_nav.ClientMetadata;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.ClientMetadata.deserializeBinaryFromReader);
      msg.setClientMetadata(value);
      break;
    case 7:
      var value = new proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.deserializeBinaryFromReader);
      msg.setLoopClosureSettings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.Waypoint.Annotations.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreationTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getIcpVariance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.SE3Covariance.serializeBinaryToWriter
    );
  }
  f = message.getScanMatchRegion();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.serializeBinaryToWriter
    );
  }
  f = message.getWaypointSource();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getClientMetadata();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bosdyn.api.graph_nav.ClientMetadata.serializeBinaryToWriter
    );
  }
  f = message.getLoopClosureSettings();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.serializeBinaryToWriter
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
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.RegionCase = {
  REGION_NOT_SET: 0,
  DEFAULT_REGION: 2,
  EMPTY: 3,
  CIRCLE: 4
};

/**
 * @return {proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.RegionCase}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.prototype.getRegionCase = function() {
  return /** @type {proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.RegionCase} */(jspb.Message.computeOneofCase(this, proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    defaultRegion: (f = msg.getDefaultRegion()) && proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default.toObject(includeInstance, f),
    empty: (f = msg.getEmpty()) && proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty.toObject(includeInstance, f),
    circle: (f = msg.getCircle()) && proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion;
  return proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.graph_nav.AnnotationState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default.deserializeBinaryFromReader);
      msg.setDefaultRegion(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty.deserializeBinaryFromReader);
      msg.setEmpty(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D.deserializeBinaryFromReader);
      msg.setCircle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDefaultRegion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default.serializeBinaryToWriter
    );
  }
  f = message.getEmpty();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty.serializeBinaryToWriter
    );
  }
  f = message.getCircle();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D.serializeBinaryToWriter
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
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default;
  return proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty.toObject = function(includeInstance, msg) {
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
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty;
  return proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty.deserializeBinaryFromReader = function(msg, reader) {
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
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty.serializeBinaryToWriter = function(message, writer) {
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
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D.toObject = function(includeInstance, msg) {
  var f, obj = {
    dist2d: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D;
  return proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDist2d(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDist2d();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double dist_2d = 1;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D.prototype.getDist2d = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D.prototype.setDist2d = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional AnnotationState state = 1;
 * @return {!proto.bosdyn.api.graph_nav.AnnotationState}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.prototype.getState = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.AnnotationState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.AnnotationState} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Default default_region = 2;
 * @return {?proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.prototype.getDefaultRegion = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default, 2));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Default|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion} returns this
*/
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.prototype.setDefaultRegion = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.prototype.clearDefaultRegion = function() {
  return this.setDefaultRegion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.prototype.hasDefaultRegion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Empty empty = 3;
 * @return {?proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.prototype.getEmpty = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty, 3));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Empty|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion} returns this
*/
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.prototype.setEmpty = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.prototype.clearEmpty = function() {
  return this.setEmpty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.prototype.hasEmpty = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Circle2D circle = 4;
 * @return {?proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.prototype.getCircle = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D, 4));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.Circle2D|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion} returns this
*/
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.prototype.setCircle = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.prototype.clearCircle = function() {
  return this.setCircle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion.prototype.hasCircle = function() {
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
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    disableLoopClosure: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    disableCollisionCheck: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    maxEdgeLength: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    maxOdometryPathLength: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings;
  return proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableLoopClosure(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableCollisionCheck(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxEdgeLength(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxOdometryPathLength(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisableLoopClosure();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDisableCollisionCheck();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getMaxEdgeLength();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getMaxOdometryPathLength();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional bool disable_loop_closure = 1;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.prototype.getDisableLoopClosure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.prototype.setDisableLoopClosure = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool disable_collision_check = 2;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.prototype.getDisableCollisionCheck = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.prototype.setDisableCollisionCheck = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional double max_edge_length = 3;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.prototype.getMaxEdgeLength = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.prototype.setMaxEdgeLength = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double max_odometry_path_length = 4;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.prototype.getMaxOdometryPathLength = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings.prototype.setMaxOdometryPathLength = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp creation_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.getCreationTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations} returns this
*/
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.setCreationTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.clearCreationTime = function() {
  return this.setCreationTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.hasCreationTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bosdyn.api.SE3Covariance icp_variance = 2;
 * @return {?proto.bosdyn.api.SE3Covariance}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.getIcpVariance = function() {
  return /** @type{?proto.bosdyn.api.SE3Covariance} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Covariance, 2));
};


/**
 * @param {?proto.bosdyn.api.SE3Covariance|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations} returns this
*/
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.setIcpVariance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.clearIcpVariance = function() {
  return this.setIcpVariance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.hasIcpVariance = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LocalizeRegion scan_match_region = 3;
 * @return {?proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.getScanMatchRegion = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion, 3));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Waypoint.Annotations.LocalizeRegion|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations} returns this
*/
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.setScanMatchRegion = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.clearScanMatchRegion = function() {
  return this.setScanMatchRegion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.hasScanMatchRegion = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional WaypointSource waypoint_source = 5;
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.WaypointSource}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.getWaypointSource = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.Waypoint.WaypointSource} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.Waypoint.WaypointSource} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.setWaypointSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional ClientMetadata client_metadata = 6;
 * @return {?proto.bosdyn.api.graph_nav.ClientMetadata}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.getClientMetadata = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.ClientMetadata} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.ClientMetadata, 6));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.ClientMetadata|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations} returns this
*/
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.setClientMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.clearClientMetadata = function() {
  return this.setClientMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.hasClientMetadata = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional LoopClosureSettings loop_closure_settings = 7;
 * @return {?proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.getLoopClosureSettings = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings, 7));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Waypoint.Annotations.LoopClosureSettings|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations} returns this
*/
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.setLoopClosureSettings = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.clearLoopClosureSettings = function() {
  return this.setLoopClosureSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Waypoint.Annotations.prototype.hasLoopClosureSettings = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.Waypoint.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string snapshot_id = 2;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.Waypoint.prototype.getSnapshotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.prototype.setSnapshotId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bosdyn.api.SE3Pose waypoint_tform_ko = 3;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.graph_nav.Waypoint.prototype.getWaypointTformKo = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 3));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint} returns this
*/
proto.bosdyn.api.graph_nav.Waypoint.prototype.setWaypointTformKo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.prototype.clearWaypointTformKo = function() {
  return this.setWaypointTformKo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Waypoint.prototype.hasWaypointTformKo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Annotations annotations = 4;
 * @return {?proto.bosdyn.api.graph_nav.Waypoint.Annotations}
 */
proto.bosdyn.api.graph_nav.Waypoint.prototype.getAnnotations = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Waypoint.Annotations} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.Waypoint.Annotations, 4));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Waypoint.Annotations|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Waypoint} returns this
*/
proto.bosdyn.api.graph_nav.Waypoint.prototype.setAnnotations = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Waypoint} returns this
 */
proto.bosdyn.api.graph_nav.Waypoint.prototype.clearAnnotations = function() {
  return this.setAnnotations(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Waypoint.prototype.hasAnnotations = function() {
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
proto.bosdyn.api.graph_nav.ClientMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.ClientMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.ClientMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.ClientMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientUsername: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientSoftwareVersion: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientType: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.ClientMetadata}
 */
proto.bosdyn.api.graph_nav.ClientMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.ClientMetadata;
  return proto.bosdyn.api.graph_nav.ClientMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.ClientMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.ClientMetadata}
 */
proto.bosdyn.api.graph_nav.ClientMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientSoftwareVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.ClientMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.ClientMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.ClientMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.ClientMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientSoftwareVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string session_name = 1;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.ClientMetadata.prototype.getSessionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.ClientMetadata} returns this
 */
proto.bosdyn.api.graph_nav.ClientMetadata.prototype.setSessionName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string client_username = 2;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.ClientMetadata.prototype.getClientUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.ClientMetadata} returns this
 */
proto.bosdyn.api.graph_nav.ClientMetadata.prototype.setClientUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string client_software_version = 3;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.ClientMetadata.prototype.getClientSoftwareVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.ClientMetadata} returns this
 */
proto.bosdyn.api.graph_nav.ClientMetadata.prototype.setClientSoftwareVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string client_id = 4;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.ClientMetadata.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.ClientMetadata} returns this
 */
proto.bosdyn.api.graph_nav.ClientMetadata.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string client_type = 5;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.ClientMetadata.prototype.getClientType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.ClientMetadata} returns this
 */
proto.bosdyn.api.graph_nav.ClientMetadata.prototype.setClientType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.repeatedFields_ = [2,4,6,12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.WaypointSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.WaypointSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    imagesList: jspb.Message.toObjectList(msg.getImagesList(),
    bosdyn_api_image_pb.ImageResponse.toObject, includeInstance),
    pointCloud: (f = msg.getPointCloud()) && bosdyn_api_point_cloud_pb.PointCloud.toObject(includeInstance, f),
    objectsList: jspb.Message.toObjectList(msg.getObjectsList(),
    bosdyn_api_world_object_pb.WorldObject.toObject, includeInstance),
    robotState: (f = msg.getRobotState()) && bosdyn_api_robot_state_pb.RobotState.toObject(includeInstance, f),
    robotLocalGridsList: jspb.Message.toObjectList(msg.getRobotLocalGridsList(),
    bosdyn_api_local_grid_pb.LocalGrid.toObject, includeInstance),
    isPointCloudProcessed: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    versionId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    hasRemotePointCloudSensor: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    bodyTformRemotePointCloudSensor: (f = msg.getBodyTformRemotePointCloudSensor()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    payloadsList: jspb.Message.toObjectList(msg.getPayloadsList(),
    bosdyn_api_payload_pb.Payload.toObject, includeInstance),
    robotId: (f = msg.getRobotId()) && bosdyn_api_robot_id_pb.RobotId.toObject(includeInstance, f),
    recordingStartedOn: (f = msg.getRecordingStartedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.WaypointSnapshot;
  return proto.bosdyn.api.graph_nav.WaypointSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.WaypointSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new bosdyn_api_image_pb.ImageResponse;
      reader.readMessage(value,bosdyn_api_image_pb.ImageResponse.deserializeBinaryFromReader);
      msg.addImages(value);
      break;
    case 3:
      var value = new bosdyn_api_point_cloud_pb.PointCloud;
      reader.readMessage(value,bosdyn_api_point_cloud_pb.PointCloud.deserializeBinaryFromReader);
      msg.setPointCloud(value);
      break;
    case 4:
      var value = new bosdyn_api_world_object_pb.WorldObject;
      reader.readMessage(value,bosdyn_api_world_object_pb.WorldObject.deserializeBinaryFromReader);
      msg.addObjects(value);
      break;
    case 5:
      var value = new bosdyn_api_robot_state_pb.RobotState;
      reader.readMessage(value,bosdyn_api_robot_state_pb.RobotState.deserializeBinaryFromReader);
      msg.setRobotState(value);
      break;
    case 6:
      var value = new bosdyn_api_local_grid_pb.LocalGrid;
      reader.readMessage(value,bosdyn_api_local_grid_pb.LocalGrid.deserializeBinaryFromReader);
      msg.addRobotLocalGrids(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPointCloudProcessed(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersionId(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasRemotePointCloudSensor(value);
      break;
    case 11:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setBodyTformRemotePointCloudSensor(value);
      break;
    case 12:
      var value = new bosdyn_api_payload_pb.Payload;
      reader.readMessage(value,bosdyn_api_payload_pb.Payload.deserializeBinaryFromReader);
      msg.addPayloads(value);
      break;
    case 14:
      var value = new bosdyn_api_robot_id_pb.RobotId;
      reader.readMessage(value,bosdyn_api_robot_id_pb.RobotId.deserializeBinaryFromReader);
      msg.setRobotId(value);
      break;
    case 15:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRecordingStartedOn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.WaypointSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.WaypointSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getImagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      bosdyn_api_image_pb.ImageResponse.serializeBinaryToWriter
    );
  }
  f = message.getPointCloud();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_point_cloud_pb.PointCloud.serializeBinaryToWriter
    );
  }
  f = message.getObjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      bosdyn_api_world_object_pb.WorldObject.serializeBinaryToWriter
    );
  }
  f = message.getRobotState();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_robot_state_pb.RobotState.serializeBinaryToWriter
    );
  }
  f = message.getRobotLocalGridsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      bosdyn_api_local_grid_pb.LocalGrid.serializeBinaryToWriter
    );
  }
  f = message.getIsPointCloudProcessed();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getVersionId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getHasRemotePointCloudSensor();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getBodyTformRemotePointCloudSensor();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
  f = message.getPayloadsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      bosdyn_api_payload_pb.Payload.serializeBinaryToWriter
    );
  }
  f = message.getRobotId();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      bosdyn_api_robot_id_pb.RobotId.serializeBinaryToWriter
    );
  }
  f = message.getRecordingStartedOn();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated bosdyn.api.ImageResponse images = 2;
 * @return {!Array<!proto.bosdyn.api.ImageResponse>}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.getImagesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.ImageResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_image_pb.ImageResponse, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.ImageResponse>} value
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
*/
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.setImagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.ImageResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.ImageResponse}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.addImages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.ImageResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.clearImagesList = function() {
  return this.setImagesList([]);
};


/**
 * optional bosdyn.api.PointCloud point_cloud = 3;
 * @return {?proto.bosdyn.api.PointCloud}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.getPointCloud = function() {
  return /** @type{?proto.bosdyn.api.PointCloud} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_point_cloud_pb.PointCloud, 3));
};


/**
 * @param {?proto.bosdyn.api.PointCloud|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
*/
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.setPointCloud = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.clearPointCloud = function() {
  return this.setPointCloud(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.hasPointCloud = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated bosdyn.api.WorldObject objects = 4;
 * @return {!Array<!proto.bosdyn.api.WorldObject>}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.getObjectsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.WorldObject>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_world_object_pb.WorldObject, 4));
};


/**
 * @param {!Array<!proto.bosdyn.api.WorldObject>} value
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
*/
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.setObjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.bosdyn.api.WorldObject=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.WorldObject}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.addObjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.bosdyn.api.WorldObject, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.clearObjectsList = function() {
  return this.setObjectsList([]);
};


/**
 * optional bosdyn.api.RobotState robot_state = 5;
 * @return {?proto.bosdyn.api.RobotState}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.getRobotState = function() {
  return /** @type{?proto.bosdyn.api.RobotState} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_robot_state_pb.RobotState, 5));
};


/**
 * @param {?proto.bosdyn.api.RobotState|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
*/
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.setRobotState = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.clearRobotState = function() {
  return this.setRobotState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.hasRobotState = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated bosdyn.api.LocalGrid robot_local_grids = 6;
 * @return {!Array<!proto.bosdyn.api.LocalGrid>}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.getRobotLocalGridsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.LocalGrid>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_local_grid_pb.LocalGrid, 6));
};


/**
 * @param {!Array<!proto.bosdyn.api.LocalGrid>} value
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
*/
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.setRobotLocalGridsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.bosdyn.api.LocalGrid=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.LocalGrid}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.addRobotLocalGrids = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.bosdyn.api.LocalGrid, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.clearRobotLocalGridsList = function() {
  return this.setRobotLocalGridsList([]);
};


/**
 * optional bool is_point_cloud_processed = 8;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.getIsPointCloudProcessed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.setIsPointCloudProcessed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional string version_id = 9;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.getVersionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.setVersionId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool has_remote_point_cloud_sensor = 10;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.getHasRemotePointCloudSensor = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.setHasRemotePointCloudSensor = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bosdyn.api.SE3Pose body_tform_remote_point_cloud_sensor = 11;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.getBodyTformRemotePointCloudSensor = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 11));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
*/
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.setBodyTformRemotePointCloudSensor = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.clearBodyTformRemotePointCloudSensor = function() {
  return this.setBodyTformRemotePointCloudSensor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.hasBodyTformRemotePointCloudSensor = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated bosdyn.api.Payload payloads = 12;
 * @return {!Array<!proto.bosdyn.api.Payload>}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.getPayloadsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.Payload>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_payload_pb.Payload, 12));
};


/**
 * @param {!Array<!proto.bosdyn.api.Payload>} value
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
*/
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.setPayloadsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.bosdyn.api.Payload=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.Payload}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.addPayloads = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.bosdyn.api.Payload, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.clearPayloadsList = function() {
  return this.setPayloadsList([]);
};


/**
 * optional bosdyn.api.RobotId robot_id = 14;
 * @return {?proto.bosdyn.api.RobotId}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.getRobotId = function() {
  return /** @type{?proto.bosdyn.api.RobotId} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_robot_id_pb.RobotId, 14));
};


/**
 * @param {?proto.bosdyn.api.RobotId|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
*/
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.setRobotId = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.clearRobotId = function() {
  return this.setRobotId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.hasRobotId = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.Timestamp recording_started_on = 15;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.getRecordingStartedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 15));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
*/
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.setRecordingStartedOn = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.WaypointSnapshot} returns this
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.clearRecordingStartedOn = function() {
  return this.setRecordingStartedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.WaypointSnapshot.prototype.hasRecordingStartedOn = function() {
  return jspb.Message.getField(this, 15) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.Edge.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.Edge.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.Edge} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Edge.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.bosdyn.api.graph_nav.Edge.Id.toObject(includeInstance, f),
    snapshotId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fromTformTo: (f = msg.getFromTformTo()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    annotations: (f = msg.getAnnotations()) && proto.bosdyn.api.graph_nav.Edge.Annotations.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.Edge}
 */
proto.bosdyn.api.graph_nav.Edge.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.Edge;
  return proto.bosdyn.api.graph_nav.Edge.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.Edge} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.Edge}
 */
proto.bosdyn.api.graph_nav.Edge.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.graph_nav.Edge.Id;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.Edge.Id.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnapshotId(value);
      break;
    case 3:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setFromTformTo(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.graph_nav.Edge.Annotations;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.Edge.Annotations.deserializeBinaryFromReader);
      msg.setAnnotations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.Edge.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.Edge.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.Edge} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Edge.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.graph_nav.Edge.Id.serializeBinaryToWriter
    );
  }
  f = message.getSnapshotId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFromTformTo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
  f = message.getAnnotations();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.graph_nav.Edge.Annotations.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.Edge.EdgeSource = {
  EDGE_SOURCE_UNKNOWN: 0,
  EDGE_SOURCE_ODOMETRY: 1,
  EDGE_SOURCE_SMALL_LOOP_CLOSURE: 2,
  EDGE_SOURCE_FIDUCIAL_LOOP_CLOSURE: 3,
  EDGE_SOURCE_ALTERNATE_ROUTE_FINDING: 4,
  EDGE_SOURCE_USER_REQUEST: 5,
  EDGE_SOURCE_LOCALIZATION: 6
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.Edge.Id.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.Edge.Id.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.Edge.Id} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Edge.Id.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromWaypoint: jspb.Message.getFieldWithDefault(msg, 1, ""),
    toWaypoint: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Id}
 */
proto.bosdyn.api.graph_nav.Edge.Id.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.Edge.Id;
  return proto.bosdyn.api.graph_nav.Edge.Id.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.Edge.Id} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Id}
 */
proto.bosdyn.api.graph_nav.Edge.Id.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromWaypoint(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToWaypoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.Edge.Id.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.Edge.Id.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.Edge.Id} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Edge.Id.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromWaypoint();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToWaypoint();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string from_waypoint = 1;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.Edge.Id.prototype.getFromWaypoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Id} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Id.prototype.setFromWaypoint = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string to_waypoint = 2;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.Edge.Id.prototype.getToWaypoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Id} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Id.prototype.setToWaypoint = function(value) {
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
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.Edge.Annotations.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.Edge.Annotations} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.toObject = function(includeInstance, msg) {
  var f, obj = {
    velLimit: (f = msg.getVelLimit()) && bosdyn_api_geometry_pb.SE2VelocityLimit.toObject(includeInstance, f),
    stairs: (f = msg.getStairs()) && proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.toObject(includeInstance, f),
    directionConstraint: jspb.Message.getFieldWithDefault(msg, 4, 0),
    requireAlignment: (f = msg.getRequireAlignment()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    flatGround: (f = msg.getFlatGround()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    groundMuHint: (f = msg.getGroundMuHint()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    gratedFloor: (f = msg.getGratedFloor()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    overrideMobilityParams: (f = msg.getOverrideMobilityParams()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    mobilityParams: (f = msg.getMobilityParams()) && bosdyn_api_spot_robot_command_pb.MobilityParams.toObject(includeInstance, f),
    cost: (f = msg.getCost()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    edgeSource: jspb.Message.getFieldWithDefault(msg, 12, 0),
    disableAlternateRouteFinding: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    pathFollowingMode: jspb.Message.getFieldWithDefault(msg, 14, 0),
    disableDirectedExploration: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    areaCallbacksMap: (f = msg.getAreaCallbacksMap()) ? f.toObject(includeInstance, proto.bosdyn.api.graph_nav.AreaCallbackRegion.toObject) : [],
    groundClutterMode: jspb.Message.getFieldWithDefault(msg, 17, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.Edge.Annotations;
  return proto.bosdyn.api.graph_nav.Edge.Annotations.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.Edge.Annotations} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bosdyn_api_geometry_pb.SE2VelocityLimit;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE2VelocityLimit.deserializeBinaryFromReader);
      msg.setVelLimit(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.graph_nav.Edge.Annotations.StairData;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.deserializeBinaryFromReader);
      msg.setStairs(value);
      break;
    case 4:
      var value = /** @type {!proto.bosdyn.api.graph_nav.Edge.Annotations.DirectionConstraint} */ (reader.readEnum());
      msg.setDirectionConstraint(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setRequireAlignment(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setFlatGround(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setGroundMuHint(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setGratedFloor(value);
      break;
    case 9:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setOverrideMobilityParams(value);
      break;
    case 10:
      var value = new bosdyn_api_spot_robot_command_pb.MobilityParams;
      reader.readMessage(value,bosdyn_api_spot_robot_command_pb.MobilityParams.deserializeBinaryFromReader);
      msg.setMobilityParams(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setCost(value);
      break;
    case 12:
      var value = /** @type {!proto.bosdyn.api.graph_nav.Edge.EdgeSource} */ (reader.readEnum());
      msg.setEdgeSource(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableAlternateRouteFinding(value);
      break;
    case 14:
      var value = /** @type {!proto.bosdyn.api.graph_nav.Edge.Annotations.PathFollowingMode} */ (reader.readEnum());
      msg.setPathFollowingMode(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableDirectedExploration(value);
      break;
    case 16:
      var value = msg.getAreaCallbacksMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bosdyn.api.graph_nav.AreaCallbackRegion.deserializeBinaryFromReader, "", new proto.bosdyn.api.graph_nav.AreaCallbackRegion());
         });
      break;
    case 17:
      var value = /** @type {!proto.bosdyn.api.graph_nav.Edge.Annotations.GroundClutterAvoidanceMode} */ (reader.readEnum());
      msg.setGroundClutterMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.Edge.Annotations.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.Edge.Annotations} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVelLimit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bosdyn_api_geometry_pb.SE2VelocityLimit.serializeBinaryToWriter
    );
  }
  f = message.getStairs();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.serializeBinaryToWriter
    );
  }
  f = message.getDirectionConstraint();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getRequireAlignment();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getFlatGround();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getGroundMuHint();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getGratedFloor();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getOverrideMobilityParams();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getMobilityParams();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      bosdyn_api_spot_robot_command_pb.MobilityParams.serializeBinaryToWriter
    );
  }
  f = message.getCost();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getEdgeSource();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getDisableAlternateRouteFinding();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getPathFollowingMode();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getDisableDirectedExploration();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getAreaCallbacksMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(16, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bosdyn.api.graph_nav.AreaCallbackRegion.serializeBinaryToWriter);
  }
  f = message.getGroundClutterMode();
  if (f !== 0.0) {
    writer.writeEnum(
      17,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.DirectionConstraint = {
  DIRECTION_CONSTRAINT_UNKNOWN: 0,
  DIRECTION_CONSTRAINT_NO_TURN: 1,
  DIRECTION_CONSTRAINT_FORWARD: 2,
  DIRECTION_CONSTRAINT_REVERSE: 3,
  DIRECTION_CONSTRAINT_NONE: 4
};

/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.PathFollowingMode = {
  PATH_MODE_UNKNOWN: 0,
  PATH_MODE_DEFAULT: 1,
  PATH_MODE_STRICT: 2
};

/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.GroundClutterAvoidanceMode = {
  GROUND_CLUTTER_UNKNOWN: 0,
  GROUND_CLUTTER_OFF: 1,
  GROUND_CLUTTER_FROM_FOOTFALLS: 2
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.Edge.Annotations.StairData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    straightStaircase: (f = msg.getStraightStaircase()) && bosdyn_api_stairs_pb.StraightStaircase.toObject(includeInstance, f),
    staircaseWithLandings: (f = msg.getStaircaseWithLandings()) && bosdyn_api_stairs_pb.StaircaseWithLandings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations.StairData}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.Edge.Annotations.StairData;
  return proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.Edge.Annotations.StairData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations.StairData}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bosdyn.api.graph_nav.AnnotationState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = new bosdyn_api_stairs_pb.StraightStaircase;
      reader.readMessage(value,bosdyn_api_stairs_pb.StraightStaircase.deserializeBinaryFromReader);
      msg.setStraightStaircase(value);
      break;
    case 3:
      var value = new bosdyn_api_stairs_pb.StaircaseWithLandings;
      reader.readMessage(value,bosdyn_api_stairs_pb.StaircaseWithLandings.deserializeBinaryFromReader);
      msg.setStaircaseWithLandings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.Edge.Annotations.StairData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStraightStaircase();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_stairs_pb.StraightStaircase.serializeBinaryToWriter
    );
  }
  f = message.getStaircaseWithLandings();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_stairs_pb.StaircaseWithLandings.serializeBinaryToWriter
    );
  }
};


/**
 * optional AnnotationState state = 1;
 * @return {!proto.bosdyn.api.graph_nav.AnnotationState}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.prototype.getState = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.AnnotationState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.AnnotationState} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations.StairData} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bosdyn.api.StraightStaircase straight_staircase = 2;
 * @return {?proto.bosdyn.api.StraightStaircase}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.prototype.getStraightStaircase = function() {
  return /** @type{?proto.bosdyn.api.StraightStaircase} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_stairs_pb.StraightStaircase, 2));
};


/**
 * @param {?proto.bosdyn.api.StraightStaircase|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations.StairData} returns this
*/
proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.prototype.setStraightStaircase = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations.StairData} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.prototype.clearStraightStaircase = function() {
  return this.setStraightStaircase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.prototype.hasStraightStaircase = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bosdyn.api.StaircaseWithLandings staircase_with_landings = 3;
 * @return {?proto.bosdyn.api.StaircaseWithLandings}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.prototype.getStaircaseWithLandings = function() {
  return /** @type{?proto.bosdyn.api.StaircaseWithLandings} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_stairs_pb.StaircaseWithLandings, 3));
};


/**
 * @param {?proto.bosdyn.api.StaircaseWithLandings|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations.StairData} returns this
*/
proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.prototype.setStaircaseWithLandings = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations.StairData} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.prototype.clearStaircaseWithLandings = function() {
  return this.setStaircaseWithLandings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.StairData.prototype.hasStaircaseWithLandings = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bosdyn.api.SE2VelocityLimit vel_limit = 1;
 * @return {?proto.bosdyn.api.SE2VelocityLimit}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.getVelLimit = function() {
  return /** @type{?proto.bosdyn.api.SE2VelocityLimit} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE2VelocityLimit, 1));
};


/**
 * @param {?proto.bosdyn.api.SE2VelocityLimit|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
*/
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.setVelLimit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.clearVelLimit = function() {
  return this.setVelLimit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.hasVelLimit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StairData stairs = 2;
 * @return {?proto.bosdyn.api.graph_nav.Edge.Annotations.StairData}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.getStairs = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Edge.Annotations.StairData} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.Edge.Annotations.StairData, 2));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Edge.Annotations.StairData|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
*/
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.setStairs = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.clearStairs = function() {
  return this.setStairs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.hasStairs = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DirectionConstraint direction_constraint = 4;
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations.DirectionConstraint}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.getDirectionConstraint = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.Edge.Annotations.DirectionConstraint} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.Edge.Annotations.DirectionConstraint} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.setDirectionConstraint = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.protobuf.BoolValue require_alignment = 5;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.getRequireAlignment = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 5));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
*/
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.setRequireAlignment = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.clearRequireAlignment = function() {
  return this.setRequireAlignment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.hasRequireAlignment = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.BoolValue flat_ground = 6;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.getFlatGround = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 6));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
*/
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.setFlatGround = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.clearFlatGround = function() {
  return this.setFlatGround(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.hasFlatGround = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.DoubleValue ground_mu_hint = 7;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.getGroundMuHint = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 7));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
*/
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.setGroundMuHint = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.clearGroundMuHint = function() {
  return this.setGroundMuHint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.hasGroundMuHint = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.BoolValue grated_floor = 8;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.getGratedFloor = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 8));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
*/
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.setGratedFloor = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.clearGratedFloor = function() {
  return this.setGratedFloor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.hasGratedFloor = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.FieldMask override_mobility_params = 9;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.getOverrideMobilityParams = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 9));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
*/
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.setOverrideMobilityParams = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.clearOverrideMobilityParams = function() {
  return this.setOverrideMobilityParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.hasOverrideMobilityParams = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bosdyn.api.spot.MobilityParams mobility_params = 10;
 * @return {?proto.bosdyn.api.spot.MobilityParams}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.getMobilityParams = function() {
  return /** @type{?proto.bosdyn.api.spot.MobilityParams} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_spot_robot_command_pb.MobilityParams, 10));
};


/**
 * @param {?proto.bosdyn.api.spot.MobilityParams|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
*/
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.setMobilityParams = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.clearMobilityParams = function() {
  return this.setMobilityParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.hasMobilityParams = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.DoubleValue cost = 11;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.getCost = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 11));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
*/
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.setCost = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.clearCost = function() {
  return this.setCost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.hasCost = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional EdgeSource edge_source = 12;
 * @return {!proto.bosdyn.api.graph_nav.Edge.EdgeSource}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.getEdgeSource = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.Edge.EdgeSource} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.Edge.EdgeSource} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.setEdgeSource = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional bool disable_alternate_route_finding = 13;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.getDisableAlternateRouteFinding = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.setDisableAlternateRouteFinding = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional PathFollowingMode path_following_mode = 14;
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations.PathFollowingMode}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.getPathFollowingMode = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.Edge.Annotations.PathFollowingMode} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.Edge.Annotations.PathFollowingMode} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.setPathFollowingMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * optional bool disable_directed_exploration = 15;
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.getDisableDirectedExploration = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.setDisableDirectedExploration = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * map<string, AreaCallbackRegion> area_callbacks = 16;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bosdyn.api.graph_nav.AreaCallbackRegion>}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.getAreaCallbacksMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bosdyn.api.graph_nav.AreaCallbackRegion>} */ (
      jspb.Message.getMapField(this, 16, opt_noLazyCreate,
      proto.bosdyn.api.graph_nav.AreaCallbackRegion));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.clearAreaCallbacksMap = function() {
  this.getAreaCallbacksMap().clear();
  return this;};


/**
 * optional GroundClutterAvoidanceMode ground_clutter_mode = 17;
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations.GroundClutterAvoidanceMode}
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.getGroundClutterMode = function() {
  return /** @type {!proto.bosdyn.api.graph_nav.Edge.Annotations.GroundClutterAvoidanceMode} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {!proto.bosdyn.api.graph_nav.Edge.Annotations.GroundClutterAvoidanceMode} value
 * @return {!proto.bosdyn.api.graph_nav.Edge.Annotations} returns this
 */
proto.bosdyn.api.graph_nav.Edge.Annotations.prototype.setGroundClutterMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 17, value);
};


/**
 * optional Id id = 1;
 * @return {?proto.bosdyn.api.graph_nav.Edge.Id}
 */
proto.bosdyn.api.graph_nav.Edge.prototype.getId = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Edge.Id} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.Edge.Id, 1));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Edge.Id|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Edge} returns this
*/
proto.bosdyn.api.graph_nav.Edge.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Edge} returns this
 */
proto.bosdyn.api.graph_nav.Edge.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Edge.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string snapshot_id = 2;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.Edge.prototype.getSnapshotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.Edge} returns this
 */
proto.bosdyn.api.graph_nav.Edge.prototype.setSnapshotId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bosdyn.api.SE3Pose from_tform_to = 3;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.graph_nav.Edge.prototype.getFromTformTo = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 3));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Edge} returns this
*/
proto.bosdyn.api.graph_nav.Edge.prototype.setFromTformTo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Edge} returns this
 */
proto.bosdyn.api.graph_nav.Edge.prototype.clearFromTformTo = function() {
  return this.setFromTformTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Edge.prototype.hasFromTformTo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Annotations annotations = 4;
 * @return {?proto.bosdyn.api.graph_nav.Edge.Annotations}
 */
proto.bosdyn.api.graph_nav.Edge.prototype.getAnnotations = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Edge.Annotations} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.Edge.Annotations, 4));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Edge.Annotations|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Edge} returns this
*/
proto.bosdyn.api.graph_nav.Edge.prototype.setAnnotations = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Edge} returns this
 */
proto.bosdyn.api.graph_nav.Edge.prototype.clearAnnotations = function() {
  return this.setAnnotations(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Edge.prototype.hasAnnotations = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.EdgeSnapshot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.EdgeSnapshot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stancesList: jspb.Message.toObjectList(msg.getStancesList(),
    proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.toObject, includeInstance),
    areaCallbacksMap: (f = msg.getAreaCallbacksMap()) ? f.toObject(includeInstance, proto.bosdyn.api.graph_nav.AreaCallbackData.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.EdgeSnapshot;
  return proto.bosdyn.api.graph_nav.EdgeSnapshot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.EdgeSnapshot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.deserializeBinaryFromReader);
      msg.addStances(value);
      break;
    case 16:
      var value = msg.getAreaCallbacksMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.bosdyn.api.graph_nav.AreaCallbackData.deserializeBinaryFromReader, "", new proto.bosdyn.api.graph_nav.AreaCallbackData());
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
proto.bosdyn.api.graph_nav.EdgeSnapshot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.EdgeSnapshot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.EdgeSnapshot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.serializeBinaryToWriter
    );
  }
  f = message.getAreaCallbacksMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(16, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.bosdyn.api.graph_nav.AreaCallbackData.serializeBinaryToWriter);
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    footStatesList: jspb.Message.toObjectList(msg.getFootStatesList(),
    bosdyn_api_robot_state_pb.FootState.toObject, includeInstance),
    koTformBody: (f = msg.getKoTformBody()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    visionTformBody: (f = msg.getVisionTformBody()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f),
    planarGround: (f = msg.getPlanarGround()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance;
  return proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new bosdyn_api_robot_state_pb.FootState;
      reader.readMessage(value,bosdyn_api_robot_state_pb.FootState.deserializeBinaryFromReader);
      msg.addFootStates(value);
      break;
    case 3:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setKoTformBody(value);
      break;
    case 5:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setVisionTformBody(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setPlanarGround(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFootStatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      bosdyn_api_robot_state_pb.FootState.serializeBinaryToWriter
    );
  }
  f = message.getKoTformBody();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
  f = message.getVisionTformBody();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
  f = message.getPlanarGround();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance} returns this
*/
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance} returns this
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated bosdyn.api.FootState foot_states = 2;
 * @return {!Array<!proto.bosdyn.api.FootState>}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.getFootStatesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.FootState>} */ (
    jspb.Message.getRepeatedWrapperField(this, bosdyn_api_robot_state_pb.FootState, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.FootState>} value
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance} returns this
*/
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.setFootStatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.FootState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.FootState}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.addFootStates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.FootState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance} returns this
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.clearFootStatesList = function() {
  return this.setFootStatesList([]);
};


/**
 * optional bosdyn.api.SE3Pose ko_tform_body = 3;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.getKoTformBody = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 3));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance} returns this
*/
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.setKoTformBody = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance} returns this
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.clearKoTformBody = function() {
  return this.setKoTformBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.hasKoTformBody = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bosdyn.api.SE3Pose vision_tform_body = 5;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.getVisionTformBody = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 5));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance} returns this
*/
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.setVisionTformBody = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance} returns this
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.clearVisionTformBody = function() {
  return this.setVisionTformBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.hasVisionTformBody = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.BoolValue planar_ground = 4;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.getPlanarGround = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 4));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance} returns this
*/
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.setPlanarGround = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance} returns this
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.clearPlanarGround = function() {
  return this.setPlanarGround(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance.prototype.hasPlanarGround = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot} returns this
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Stance stances = 2;
 * @return {!Array<!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance>}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.prototype.getStancesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance>} value
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot} returns this
*/
proto.bosdyn.api.graph_nav.EdgeSnapshot.prototype.setStancesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.prototype.addStances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.graph_nav.EdgeSnapshot.Stance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot} returns this
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.prototype.clearStancesList = function() {
  return this.setStancesList([]);
};


/**
 * map<string, AreaCallbackData> area_callbacks = 16;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.bosdyn.api.graph_nav.AreaCallbackData>}
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.prototype.getAreaCallbacksMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.bosdyn.api.graph_nav.AreaCallbackData>} */ (
      jspb.Message.getMapField(this, 16, opt_noLazyCreate,
      proto.bosdyn.api.graph_nav.AreaCallbackData));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.bosdyn.api.graph_nav.EdgeSnapshot} returns this
 */
proto.bosdyn.api.graph_nav.EdgeSnapshot.prototype.clearAreaCallbacksMap = function() {
  this.getAreaCallbacksMap().clear();
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
proto.bosdyn.api.graph_nav.Anchor.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.Anchor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.Anchor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Anchor.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    seedTformWaypoint: (f = msg.getSeedTformWaypoint()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.Anchor}
 */
proto.bosdyn.api.graph_nav.Anchor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.Anchor;
  return proto.bosdyn.api.graph_nav.Anchor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.Anchor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.Anchor}
 */
proto.bosdyn.api.graph_nav.Anchor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setSeedTformWaypoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.Anchor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.Anchor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.Anchor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Anchor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSeedTformWaypoint();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.Anchor.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.Anchor} returns this
 */
proto.bosdyn.api.graph_nav.Anchor.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bosdyn.api.SE3Pose seed_tform_waypoint = 2;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.graph_nav.Anchor.prototype.getSeedTformWaypoint = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 2));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Anchor} returns this
*/
proto.bosdyn.api.graph_nav.Anchor.prototype.setSeedTformWaypoint = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Anchor} returns this
 */
proto.bosdyn.api.graph_nav.Anchor.prototype.clearSeedTformWaypoint = function() {
  return this.setSeedTformWaypoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Anchor.prototype.hasSeedTformWaypoint = function() {
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
proto.bosdyn.api.graph_nav.AnchoredWorldObject.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.AnchoredWorldObject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.AnchoredWorldObject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.AnchoredWorldObject.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    seedTformObject: (f = msg.getSeedTformObject()) && bosdyn_api_geometry_pb.SE3Pose.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.AnchoredWorldObject}
 */
proto.bosdyn.api.graph_nav.AnchoredWorldObject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.AnchoredWorldObject;
  return proto.bosdyn.api.graph_nav.AnchoredWorldObject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.AnchoredWorldObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.AnchoredWorldObject}
 */
proto.bosdyn.api.graph_nav.AnchoredWorldObject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new bosdyn_api_geometry_pb.SE3Pose;
      reader.readMessage(value,bosdyn_api_geometry_pb.SE3Pose.deserializeBinaryFromReader);
      msg.setSeedTformObject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.AnchoredWorldObject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.AnchoredWorldObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.AnchoredWorldObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.AnchoredWorldObject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSeedTformObject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      bosdyn_api_geometry_pb.SE3Pose.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.AnchoredWorldObject.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.AnchoredWorldObject} returns this
 */
proto.bosdyn.api.graph_nav.AnchoredWorldObject.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bosdyn.api.SE3Pose seed_tform_object = 2;
 * @return {?proto.bosdyn.api.SE3Pose}
 */
proto.bosdyn.api.graph_nav.AnchoredWorldObject.prototype.getSeedTformObject = function() {
  return /** @type{?proto.bosdyn.api.SE3Pose} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_geometry_pb.SE3Pose, 2));
};


/**
 * @param {?proto.bosdyn.api.SE3Pose|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.AnchoredWorldObject} returns this
*/
proto.bosdyn.api.graph_nav.AnchoredWorldObject.prototype.setSeedTformObject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.AnchoredWorldObject} returns this
 */
proto.bosdyn.api.graph_nav.AnchoredWorldObject.prototype.clearSeedTformObject = function() {
  return this.setSeedTformObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.AnchoredWorldObject.prototype.hasSeedTformObject = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.graph_nav.Anchoring.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.Anchoring.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.Anchoring.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.Anchoring} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Anchoring.toObject = function(includeInstance, msg) {
  var f, obj = {
    anchorsList: jspb.Message.toObjectList(msg.getAnchorsList(),
    proto.bosdyn.api.graph_nav.Anchor.toObject, includeInstance),
    objectsList: jspb.Message.toObjectList(msg.getObjectsList(),
    proto.bosdyn.api.graph_nav.AnchoredWorldObject.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.Anchoring}
 */
proto.bosdyn.api.graph_nav.Anchoring.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.Anchoring;
  return proto.bosdyn.api.graph_nav.Anchoring.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.Anchoring} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.Anchoring}
 */
proto.bosdyn.api.graph_nav.Anchoring.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.graph_nav.Anchor;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.Anchor.deserializeBinaryFromReader);
      msg.addAnchors(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.graph_nav.AnchoredWorldObject;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.AnchoredWorldObject.deserializeBinaryFromReader);
      msg.addObjects(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.Anchoring.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.Anchoring.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.Anchoring} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Anchoring.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnchorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bosdyn.api.graph_nav.Anchor.serializeBinaryToWriter
    );
  }
  f = message.getObjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bosdyn.api.graph_nav.AnchoredWorldObject.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Anchor anchors = 1;
 * @return {!Array<!proto.bosdyn.api.graph_nav.Anchor>}
 */
proto.bosdyn.api.graph_nav.Anchoring.prototype.getAnchorsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.graph_nav.Anchor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.graph_nav.Anchor, 1));
};


/**
 * @param {!Array<!proto.bosdyn.api.graph_nav.Anchor>} value
 * @return {!proto.bosdyn.api.graph_nav.Anchoring} returns this
*/
proto.bosdyn.api.graph_nav.Anchoring.prototype.setAnchorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bosdyn.api.graph_nav.Anchor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.graph_nav.Anchor}
 */
proto.bosdyn.api.graph_nav.Anchoring.prototype.addAnchors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bosdyn.api.graph_nav.Anchor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.Anchoring} returns this
 */
proto.bosdyn.api.graph_nav.Anchoring.prototype.clearAnchorsList = function() {
  return this.setAnchorsList([]);
};


/**
 * repeated AnchoredWorldObject objects = 2;
 * @return {!Array<!proto.bosdyn.api.graph_nav.AnchoredWorldObject>}
 */
proto.bosdyn.api.graph_nav.Anchoring.prototype.getObjectsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.graph_nav.AnchoredWorldObject>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.graph_nav.AnchoredWorldObject, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.graph_nav.AnchoredWorldObject>} value
 * @return {!proto.bosdyn.api.graph_nav.Anchoring} returns this
*/
proto.bosdyn.api.graph_nav.Anchoring.prototype.setObjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.graph_nav.AnchoredWorldObject=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.graph_nav.AnchoredWorldObject}
 */
proto.bosdyn.api.graph_nav.Anchoring.prototype.addObjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.graph_nav.AnchoredWorldObject, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.Anchoring} returns this
 */
proto.bosdyn.api.graph_nav.Anchoring.prototype.clearObjectsList = function() {
  return this.setObjectsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.AreaCallbackRegion.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.AreaCallbackRegion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.AreaCallbackRegion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.AreaCallbackRegion.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    recordedData: (f = msg.getRecordedData()) && bosdyn_api_graph_nav_area_callback_data_pb.AreaCallbackData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.AreaCallbackRegion}
 */
proto.bosdyn.api.graph_nav.AreaCallbackRegion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.AreaCallbackRegion;
  return proto.bosdyn.api.graph_nav.AreaCallbackRegion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.AreaCallbackRegion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.AreaCallbackRegion}
 */
proto.bosdyn.api.graph_nav.AreaCallbackRegion.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new bosdyn_api_graph_nav_area_callback_data_pb.AreaCallbackData;
      reader.readMessage(value,bosdyn_api_graph_nav_area_callback_data_pb.AreaCallbackData.deserializeBinaryFromReader);
      msg.setRecordedData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.AreaCallbackRegion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.AreaCallbackRegion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.AreaCallbackRegion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.AreaCallbackRegion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRecordedData();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      bosdyn_api_graph_nav_area_callback_data_pb.AreaCallbackData.serializeBinaryToWriter
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.AreaCallbackRegion.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.AreaCallbackRegion} returns this
 */
proto.bosdyn.api.graph_nav.AreaCallbackRegion.prototype.setServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.bosdyn.api.graph_nav.AreaCallbackRegion.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.bosdyn.api.graph_nav.AreaCallbackRegion} returns this
 */
proto.bosdyn.api.graph_nav.AreaCallbackRegion.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional AreaCallbackData recorded_data = 4;
 * @return {?proto.bosdyn.api.graph_nav.AreaCallbackData}
 */
proto.bosdyn.api.graph_nav.AreaCallbackRegion.prototype.getRecordedData = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.AreaCallbackData} */ (
    jspb.Message.getWrapperField(this, bosdyn_api_graph_nav_area_callback_data_pb.AreaCallbackData, 4));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.AreaCallbackData|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.AreaCallbackRegion} returns this
*/
proto.bosdyn.api.graph_nav.AreaCallbackRegion.prototype.setRecordedData = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.AreaCallbackRegion} returns this
 */
proto.bosdyn.api.graph_nav.AreaCallbackRegion.prototype.clearRecordedData = function() {
  return this.setRecordedData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.AreaCallbackRegion.prototype.hasRecordedData = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bosdyn.api.graph_nav.Graph.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.bosdyn.api.graph_nav.Graph.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.Graph.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.Graph} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Graph.toObject = function(includeInstance, msg) {
  var f, obj = {
    waypointsList: jspb.Message.toObjectList(msg.getWaypointsList(),
    proto.bosdyn.api.graph_nav.Waypoint.toObject, includeInstance),
    edgesList: jspb.Message.toObjectList(msg.getEdgesList(),
    proto.bosdyn.api.graph_nav.Edge.toObject, includeInstance),
    anchoring: (f = msg.getAnchoring()) && proto.bosdyn.api.graph_nav.Anchoring.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.Graph}
 */
proto.bosdyn.api.graph_nav.Graph.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.Graph;
  return proto.bosdyn.api.graph_nav.Graph.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.Graph} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.Graph}
 */
proto.bosdyn.api.graph_nav.Graph.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.graph_nav.Waypoint;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.Waypoint.deserializeBinaryFromReader);
      msg.addWaypoints(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.graph_nav.Edge;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.Edge.deserializeBinaryFromReader);
      msg.addEdges(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.graph_nav.Anchoring;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.Anchoring.deserializeBinaryFromReader);
      msg.setAnchoring(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.Graph.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.Graph.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.Graph} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.Graph.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWaypointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.bosdyn.api.graph_nav.Waypoint.serializeBinaryToWriter
    );
  }
  f = message.getEdgesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bosdyn.api.graph_nav.Edge.serializeBinaryToWriter
    );
  }
  f = message.getAnchoring();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.graph_nav.Anchoring.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Waypoint waypoints = 1;
 * @return {!Array<!proto.bosdyn.api.graph_nav.Waypoint>}
 */
proto.bosdyn.api.graph_nav.Graph.prototype.getWaypointsList = function() {
  return /** @type{!Array<!proto.bosdyn.api.graph_nav.Waypoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.graph_nav.Waypoint, 1));
};


/**
 * @param {!Array<!proto.bosdyn.api.graph_nav.Waypoint>} value
 * @return {!proto.bosdyn.api.graph_nav.Graph} returns this
*/
proto.bosdyn.api.graph_nav.Graph.prototype.setWaypointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bosdyn.api.graph_nav.Waypoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.graph_nav.Waypoint}
 */
proto.bosdyn.api.graph_nav.Graph.prototype.addWaypoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bosdyn.api.graph_nav.Waypoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.Graph} returns this
 */
proto.bosdyn.api.graph_nav.Graph.prototype.clearWaypointsList = function() {
  return this.setWaypointsList([]);
};


/**
 * repeated Edge edges = 2;
 * @return {!Array<!proto.bosdyn.api.graph_nav.Edge>}
 */
proto.bosdyn.api.graph_nav.Graph.prototype.getEdgesList = function() {
  return /** @type{!Array<!proto.bosdyn.api.graph_nav.Edge>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bosdyn.api.graph_nav.Edge, 2));
};


/**
 * @param {!Array<!proto.bosdyn.api.graph_nav.Edge>} value
 * @return {!proto.bosdyn.api.graph_nav.Graph} returns this
*/
proto.bosdyn.api.graph_nav.Graph.prototype.setEdgesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bosdyn.api.graph_nav.Edge=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bosdyn.api.graph_nav.Edge}
 */
proto.bosdyn.api.graph_nav.Graph.prototype.addEdges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bosdyn.api.graph_nav.Edge, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.bosdyn.api.graph_nav.Graph} returns this
 */
proto.bosdyn.api.graph_nav.Graph.prototype.clearEdgesList = function() {
  return this.setEdgesList([]);
};


/**
 * optional Anchoring anchoring = 3;
 * @return {?proto.bosdyn.api.graph_nav.Anchoring}
 */
proto.bosdyn.api.graph_nav.Graph.prototype.getAnchoring = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.Anchoring} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.Anchoring, 3));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.Anchoring|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.Graph} returns this
*/
proto.bosdyn.api.graph_nav.Graph.prototype.setAnchoring = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.Graph} returns this
 */
proto.bosdyn.api.graph_nav.Graph.prototype.clearAnchoring = function() {
  return this.setAnchoring(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.Graph.prototype.hasAnchoring = function() {
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
proto.bosdyn.api.graph_nav.MapStats.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.MapStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.MapStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.MapStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    waypoints: (f = msg.getWaypoints()) && proto.bosdyn.api.graph_nav.MapStats.Stat.toObject(includeInstance, f),
    waypointSnapshots: (f = msg.getWaypointSnapshots()) && proto.bosdyn.api.graph_nav.MapStats.Stat.toObject(includeInstance, f),
    alternateWaypoints: (f = msg.getAlternateWaypoints()) && proto.bosdyn.api.graph_nav.MapStats.Stat.toObject(includeInstance, f),
    edges: (f = msg.getEdges()) && proto.bosdyn.api.graph_nav.MapStats.Stat.toObject(includeInstance, f),
    edgeSnapshots: (f = msg.getEdgeSnapshots()) && proto.bosdyn.api.graph_nav.MapStats.Stat.toObject(includeInstance, f),
    alternateEdges: (f = msg.getAlternateEdges()) && proto.bosdyn.api.graph_nav.MapStats.Stat.toObject(includeInstance, f),
    waypointAnchors: (f = msg.getWaypointAnchors()) && proto.bosdyn.api.graph_nav.MapStats.Stat.toObject(includeInstance, f),
    objectAnchors: (f = msg.getObjectAnchors()) && proto.bosdyn.api.graph_nav.MapStats.Stat.toObject(includeInstance, f),
    totalPathLength: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.MapStats}
 */
proto.bosdyn.api.graph_nav.MapStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.MapStats;
  return proto.bosdyn.api.graph_nav.MapStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.MapStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.MapStats}
 */
proto.bosdyn.api.graph_nav.MapStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.bosdyn.api.graph_nav.MapStats.Stat;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.MapStats.Stat.deserializeBinaryFromReader);
      msg.setWaypoints(value);
      break;
    case 2:
      var value = new proto.bosdyn.api.graph_nav.MapStats.Stat;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.MapStats.Stat.deserializeBinaryFromReader);
      msg.setWaypointSnapshots(value);
      break;
    case 3:
      var value = new proto.bosdyn.api.graph_nav.MapStats.Stat;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.MapStats.Stat.deserializeBinaryFromReader);
      msg.setAlternateWaypoints(value);
      break;
    case 4:
      var value = new proto.bosdyn.api.graph_nav.MapStats.Stat;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.MapStats.Stat.deserializeBinaryFromReader);
      msg.setEdges(value);
      break;
    case 5:
      var value = new proto.bosdyn.api.graph_nav.MapStats.Stat;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.MapStats.Stat.deserializeBinaryFromReader);
      msg.setEdgeSnapshots(value);
      break;
    case 6:
      var value = new proto.bosdyn.api.graph_nav.MapStats.Stat;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.MapStats.Stat.deserializeBinaryFromReader);
      msg.setAlternateEdges(value);
      break;
    case 7:
      var value = new proto.bosdyn.api.graph_nav.MapStats.Stat;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.MapStats.Stat.deserializeBinaryFromReader);
      msg.setWaypointAnchors(value);
      break;
    case 8:
      var value = new proto.bosdyn.api.graph_nav.MapStats.Stat;
      reader.readMessage(value,proto.bosdyn.api.graph_nav.MapStats.Stat.deserializeBinaryFromReader);
      msg.setObjectAnchors(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalPathLength(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.MapStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.MapStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.MapStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWaypoints();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.bosdyn.api.graph_nav.MapStats.Stat.serializeBinaryToWriter
    );
  }
  f = message.getWaypointSnapshots();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.bosdyn.api.graph_nav.MapStats.Stat.serializeBinaryToWriter
    );
  }
  f = message.getAlternateWaypoints();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.bosdyn.api.graph_nav.MapStats.Stat.serializeBinaryToWriter
    );
  }
  f = message.getEdges();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.bosdyn.api.graph_nav.MapStats.Stat.serializeBinaryToWriter
    );
  }
  f = message.getEdgeSnapshots();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.bosdyn.api.graph_nav.MapStats.Stat.serializeBinaryToWriter
    );
  }
  f = message.getAlternateEdges();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.bosdyn.api.graph_nav.MapStats.Stat.serializeBinaryToWriter
    );
  }
  f = message.getWaypointAnchors();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.bosdyn.api.graph_nav.MapStats.Stat.serializeBinaryToWriter
    );
  }
  f = message.getObjectAnchors();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.bosdyn.api.graph_nav.MapStats.Stat.serializeBinaryToWriter
    );
  }
  f = message.getTotalPathLength();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
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
proto.bosdyn.api.graph_nav.MapStats.Stat.prototype.toObject = function(opt_includeInstance) {
  return proto.bosdyn.api.graph_nav.MapStats.Stat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bosdyn.api.graph_nav.MapStats.Stat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.MapStats.Stat.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0),
    numBytes: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.bosdyn.api.graph_nav.MapStats.Stat}
 */
proto.bosdyn.api.graph_nav.MapStats.Stat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bosdyn.api.graph_nav.MapStats.Stat;
  return proto.bosdyn.api.graph_nav.MapStats.Stat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bosdyn.api.graph_nav.MapStats.Stat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bosdyn.api.graph_nav.MapStats.Stat}
 */
proto.bosdyn.api.graph_nav.MapStats.Stat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bosdyn.api.graph_nav.MapStats.Stat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bosdyn.api.graph_nav.MapStats.Stat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bosdyn.api.graph_nav.MapStats.Stat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bosdyn.api.graph_nav.MapStats.Stat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getNumBytes();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int32 count = 1;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.MapStats.Stat.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.MapStats.Stat} returns this
 */
proto.bosdyn.api.graph_nav.MapStats.Stat.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 num_bytes = 2;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.MapStats.Stat.prototype.getNumBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.MapStats.Stat} returns this
 */
proto.bosdyn.api.graph_nav.MapStats.Stat.prototype.setNumBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Stat waypoints = 1;
 * @return {?proto.bosdyn.api.graph_nav.MapStats.Stat}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.getWaypoints = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.MapStats.Stat} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.MapStats.Stat, 1));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.MapStats.Stat|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.MapStats} returns this
*/
proto.bosdyn.api.graph_nav.MapStats.prototype.setWaypoints = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.MapStats} returns this
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.clearWaypoints = function() {
  return this.setWaypoints(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.hasWaypoints = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Stat waypoint_snapshots = 2;
 * @return {?proto.bosdyn.api.graph_nav.MapStats.Stat}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.getWaypointSnapshots = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.MapStats.Stat} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.MapStats.Stat, 2));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.MapStats.Stat|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.MapStats} returns this
*/
proto.bosdyn.api.graph_nav.MapStats.prototype.setWaypointSnapshots = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.MapStats} returns this
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.clearWaypointSnapshots = function() {
  return this.setWaypointSnapshots(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.hasWaypointSnapshots = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Stat alternate_waypoints = 3;
 * @return {?proto.bosdyn.api.graph_nav.MapStats.Stat}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.getAlternateWaypoints = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.MapStats.Stat} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.MapStats.Stat, 3));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.MapStats.Stat|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.MapStats} returns this
*/
proto.bosdyn.api.graph_nav.MapStats.prototype.setAlternateWaypoints = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.MapStats} returns this
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.clearAlternateWaypoints = function() {
  return this.setAlternateWaypoints(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.hasAlternateWaypoints = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Stat edges = 4;
 * @return {?proto.bosdyn.api.graph_nav.MapStats.Stat}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.getEdges = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.MapStats.Stat} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.MapStats.Stat, 4));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.MapStats.Stat|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.MapStats} returns this
*/
proto.bosdyn.api.graph_nav.MapStats.prototype.setEdges = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.MapStats} returns this
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.clearEdges = function() {
  return this.setEdges(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.hasEdges = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Stat edge_snapshots = 5;
 * @return {?proto.bosdyn.api.graph_nav.MapStats.Stat}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.getEdgeSnapshots = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.MapStats.Stat} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.MapStats.Stat, 5));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.MapStats.Stat|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.MapStats} returns this
*/
proto.bosdyn.api.graph_nav.MapStats.prototype.setEdgeSnapshots = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.MapStats} returns this
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.clearEdgeSnapshots = function() {
  return this.setEdgeSnapshots(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.hasEdgeSnapshots = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Stat alternate_edges = 6;
 * @return {?proto.bosdyn.api.graph_nav.MapStats.Stat}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.getAlternateEdges = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.MapStats.Stat} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.MapStats.Stat, 6));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.MapStats.Stat|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.MapStats} returns this
*/
proto.bosdyn.api.graph_nav.MapStats.prototype.setAlternateEdges = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.MapStats} returns this
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.clearAlternateEdges = function() {
  return this.setAlternateEdges(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.hasAlternateEdges = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Stat waypoint_anchors = 7;
 * @return {?proto.bosdyn.api.graph_nav.MapStats.Stat}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.getWaypointAnchors = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.MapStats.Stat} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.MapStats.Stat, 7));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.MapStats.Stat|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.MapStats} returns this
*/
proto.bosdyn.api.graph_nav.MapStats.prototype.setWaypointAnchors = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.MapStats} returns this
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.clearWaypointAnchors = function() {
  return this.setWaypointAnchors(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.hasWaypointAnchors = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Stat object_anchors = 8;
 * @return {?proto.bosdyn.api.graph_nav.MapStats.Stat}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.getObjectAnchors = function() {
  return /** @type{?proto.bosdyn.api.graph_nav.MapStats.Stat} */ (
    jspb.Message.getWrapperField(this, proto.bosdyn.api.graph_nav.MapStats.Stat, 8));
};


/**
 * @param {?proto.bosdyn.api.graph_nav.MapStats.Stat|undefined} value
 * @return {!proto.bosdyn.api.graph_nav.MapStats} returns this
*/
proto.bosdyn.api.graph_nav.MapStats.prototype.setObjectAnchors = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.bosdyn.api.graph_nav.MapStats} returns this
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.clearObjectAnchors = function() {
  return this.setObjectAnchors(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.hasObjectAnchors = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double total_path_length = 9;
 * @return {number}
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.getTotalPathLength = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.bosdyn.api.graph_nav.MapStats} returns this
 */
proto.bosdyn.api.graph_nav.MapStats.prototype.setTotalPathLength = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * @enum {number}
 */
proto.bosdyn.api.graph_nav.AnnotationState = {
  ANNOTATION_STATE_UNKNOWN: 0,
  ANNOTATION_STATE_SET: 1,
  ANNOTATION_STATE_NONE: 2
};

goog.object.extend(exports, proto.bosdyn.api.graph_nav);

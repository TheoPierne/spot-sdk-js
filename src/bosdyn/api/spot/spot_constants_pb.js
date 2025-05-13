// source: bosdyn/api/spot/spot_constants.proto
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

goog.exportSymbol('proto.bosdyn.api.spot.JointIndex', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.LegDofOrder', null, global);
goog.exportSymbol('proto.bosdyn.api.spot.LegIndex', null, global);
/**
 * @enum {number}
 */
proto.bosdyn.api.spot.JointIndex = {
  JOINT_INDEX_FL_HX: 0,
  JOINT_INDEX_FL_HY: 1,
  JOINT_INDEX_FL_KN: 2,
  JOINT_INDEX_FR_HX: 3,
  JOINT_INDEX_FR_HY: 4,
  JOINT_INDEX_FR_KN: 5,
  JOINT_INDEX_HL_HX: 6,
  JOINT_INDEX_HL_HY: 7,
  JOINT_INDEX_HL_KN: 8,
  JOINT_INDEX_HR_HX: 9,
  JOINT_INDEX_HR_HY: 10,
  JOINT_INDEX_HR_KN: 11,
  JOINT_INDEX_A0_SH0: 12,
  JOINT_INDEX_A0_SH1: 13,
  JOINT_INDEX_A0_EL0: 14,
  JOINT_INDEX_A0_EL1: 15,
  JOINT_INDEX_A0_WR0: 16,
  JOINT_INDEX_A0_WR1: 17,
  JOINT_INDEX_A0_F1X: 18
};

/**
 * @enum {number}
 */
proto.bosdyn.api.spot.LegIndex = {
  LEG_INDEX_FL: 0,
  LEG_INDEX_FR: 1,
  LEG_INDEX_HL: 2,
  LEG_INDEX_HR: 3
};

/**
 * @enum {number}
 */
proto.bosdyn.api.spot.LegDofOrder = {
  HX: 0,
  HY: 1,
  KN: 2
};

goog.object.extend(exports, proto.bosdyn.api.spot);

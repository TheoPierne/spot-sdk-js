// source: bosdyn/api/fiducial_purpose.proto
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

goog.exportSymbol('proto.bosdyn.api.FiducialPurpose', null, global);
/**
 * @enum {number}
 */
proto.bosdyn.api.FiducialPurpose = {
  UNKNOWN: 0,
  LOCALIZATION: 1,
  DOCK: 2,
  INTERRUPT: 3,
  LOG_TRIGGERING: 4
};

goog.object.extend(exports, proto.bosdyn.api);

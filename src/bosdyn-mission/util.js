/**
 * @file Helpers for missions: conversions between protobuf values and JavaScript values, the Result constants, and
 * string representations of the nodes.
 */

'use strict';

const process = require('node:process');
const jspb = require('google-protobuf');
const { Any } = require('google-protobuf/google/protobuf/any_pb');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');
const { Result } = require('./constants');
const alertsPb = require('../bosdyn/api/alerts_pb');
const geometryPb = require('../bosdyn/api/geometry_pb');
const graphNavPb = require('../bosdyn/api/graph_nav/graph_nav_pb');
const mapPb = require('../bosdyn/api/graph_nav/map_pb');
const nodesPb = require('../bosdyn/api/mission/nodes_pb');
const utilPb = require('../bosdyn/api/mission/util_pb');
const { ValueError } = require('../bosdyn-client/exceptions');
const { protoTypeName } = require('../bosdyn-client/util');
const textFormat = require('../bosdyn-core/text_format');

const DUMMY_MESSAGE = new nodesPb.Node().setName('dummy-message-for-parameterization');

/**
 * Could not convert the provided value to the destination type.
 */
class InvalidConversion extends Error {
  constructor(originalValue, destinationTypename) {
    super();
    this.originalValue = originalValue;
    this.destinationTypename = destinationTypename;
    this.name = 'InvalidConversion';
  }

  toString() {
    return `Could not convert "${this.originalValue}" to type "${this.destinationTypename}"`;
  }
}

// Like Python's str.isidentifier(): a letter or an underscore, then letters, digits or underscores.
const _js_identifier_regex = /^[\p{L}\p{Nl}_][\p{L}\p{Nl}\p{Mn}\p{Mc}\p{Nd}\p{Pc}]*$/u;

/**
 * Name of a value of a proto enum, or undefined.
 * @param {Object<string, number>} enumObject
 * @param {number} value
 * @returns {string|undefined}
 */
function _enumName(enumObject, value) {
  return Object.keys(enumObject).find(key => enumObject[key] === value);
}

/**
 * An Any message packing the message (Any.pack() returns nothing: pack into a new Any).
 * @param {jspb.Message} message
 * @returns {Any}
 */
function _packAny(message) {
  const any = new Any();
  any.pack(message.serializeBinary(), protoTypeName(message));
  return any;
}

/**
 * Use type name to reconstruct field name of bosdyn.api.mission.Node.type.
 * Example: SimpleParallel becomes simple_parallel.
 * @param {string} typeName Name of the type, e.g. 'bosdyn.api.mission.SimpleParallel' or 'SimpleParallel'.
 * @returns {string}
 * @throws {ValueError} The field is not in the type oneof of Node.
 */
function typeToFieldName(typeName) {
  const nodeType = String(typeName).split('.').pop();
  const fieldName = nodeType[0].toLowerCase() + nodeType.slice(1).replace(/[A-Z]/g, char => `_${char.toLowerCase()}`);
  if (!(fieldName.toUpperCase() in nodesPb.Node.TypeCase)) {
    throw new ValueError(`${fieldName} is not a field name in bosdyn.api.mission.Node.type`);
  }
  return fieldName;
}

/**
 * Get a string representation of a Node, interpreted as a tree.
 * @param {nodesPb.Node} root
 * @param {number} startLevel
 * @param {boolean} includeStatus
 * @returns {string}
 */
function treeToString(root, startLevel = 0, includeStatus = false) {
  // The text of Python: no space after the prefix, one before the class if the node has a text (there were
  // spaces everywhere, and a space was added for any node).
  let string = '';
  if (startLevel === 0) string += '\n';
  const prefix = `|${'-'.repeat(startLevel)}`;
  const text = String(root);
  string += `${prefix}${text}${text ? ' ' : ''}(${root.constructor.name})`;
  if (includeStatus) string += `\n${prefix}Status code: [${root.last_result ?? root.lastResult ?? 'None'}]`;
  for (const child of root.children) {
    string += `\n${treeToString(child, startLevel + 1, includeStatus)}`;
  }
  return string;
}

/**
 * Return a bosdyn.api.mission Node from an object. EXPERIMENTAL.
 * Would make a Sequence named 'do-A-then-B' that always restarted, executing some Command
 * named 'A' followed by the Command named 'B'. NOTE: The "List of children tuples" will only
 * work if the parent node has 'child' or 'children' attributes. See tests/testUtil.js for a
 * longer example.
 * @example
 * {
 *  nameOrObject: 'do-A-then-B',
 *  innerProto: bosdyn.api.mission.nodesPb.Sequence(),
 *  children: [
 *    { nameOrObject: 'A', innerProto: foo.bar.Command(...), children: [] },
 *    { nameOrObject: 'B', innerProto: foo.bar.Command(...), children: [] },
 *  ]
 * }
 * @param {Object} options (Name of node, Instantiated implementation of node protobuf, List of children tuples)
 * @param {string|Object} options.nameOrObject Name of node
 * @param {nodesPb.Sequence} options.innerProto Instantiated implementation of node protobuf
 * @param {any[]} options.children Array of children array
 * @param {boolean} packNodes If should pack nodes in Any
 * @returns {nodesPb.Node}
 */
function protoFromObject(options, packNodes = true) {
  if (options instanceof nodesPb.Node) {
    return options;
  }

  const node = new nodesPb.Node();
  const { nameOrObject, innerProto, children } = options;

  if (Object.prototype.toString.call(nameOrObject) === '[object Object]') {
    node.setName(nameOrObject.name || '');
    node.setReferenceId(nameOrObject.referenceId || '');
    node.setNodeReference(nameOrObject.nodeReference || '');

    if ('userData' in nameOrObject) {
      node.setUserData(nameOrObject.userData);
    }

    for (const [name, pbType] of Object.entries(nameOrObject.parameters || {})) {
      const parameter = new utilPb.VariableDeclaration().setName(name).setType(pbType);
      node.addParameters(parameter);
    }

    for (const [key, value] of Object.entries(nameOrObject.parameterValues || {})) {
      const parameterValue = new utilPb.KeyValue().setKey(key);
      if (typeof value === 'string' && value[0] === '$') {
        parameterValue.setValue(
          new utilPb.Value().setParameter(new utilPb.VariableDeclaration().setName(value.slice(1))),
        );
      } else {
        parameterValue.setValue(new utilPb.Value().setConstant(jsVarToValue(value)));
      }
      node.addParameterValues(parameterValue);
    }

    for (const [key, value] of Object.entries(nameOrObject.overrides || {})) {
      const override = new utilPb.KeyValue().setKey(key);
      override.setValue(new utilPb.Value().setParameter(new utilPb.VariableDeclaration().setName(value)));
      node.addOverrides(override);
    }
  } else {
    node.setName(nameOrObject);
  }

  if (node.getNodeReference()) {
    return node;
  }

  const numChildren = children.length;
  // The name of the message type (the jspb classes are anonymous functions: constructor.name is '').
  const innerType = protoTypeName(innerProto).split('.').pop();

  // Do some sanity checking on the children (getChildrenList() only exists for the nodes with children).
  if (typeof innerProto.getChildrenList === 'function') {
    if (numChildren === 0) throw new Error(`Proto "${node.getName()}" of type "${innerType}" has no children!`);

    for (const childObj of children) {
      const childNode = protoFromObject(childObj);
      innerProto.addChildren(childNode);
    }
  } else if ('getChild' in innerProto) {
    if (innerProto instanceof nodesPb.ForDuration && numChildren === 2) {
      innerProto.setChild(protoFromObject(children[0]));
      innerProto.setTimeoutChild(protoFromObject(children[1]));
    } else if (numChildren === 1) {
      innerProto.setChild(protoFromObject(children[0]));
    } else {
      throw new Error(`Proto "${node.getName()}" of type "${innerType}" has ${numChildren} children!`);
    }
  } else if (innerProto instanceof nodesPb.SimpleParallel) {
    if (numChildren !== 2) {
      throw new Error(
        `Proto "${node.getName()}" of type "${innerType}" was given ${numChildren} children but should have 2!`,
      );
    }
    innerProto.setPrimary(protoFromObject(children[0]));
    innerProto.setSecondary(protoFromObject(children[1]));
  } else if (numChildren !== 0) {
    throw new Error(
      `Proto "${node.getName()}" of type "${innerType}" was given ${numChildren} children,
      but I do not know how to add them!`,
    );
  }

  if (packNodes) {
    // With the type of the node: it was always a Sequence, and Any.pack() returns nothing.
    node.setImpl(_packAny(innerProto));
  } else {
    typeToFieldName(innerType);
    node[`set${innerType}`](innerProto);
  }

  return node;
}

/**
 * Returns a ConstantValue with the appropriate oneof set.
 * @param {any} val Value to convert to a ConstantValue proto
 * @returns {utilPb.ConstantValue}
 */
function jsVarToValue(val) {
  const value = new utilPb.ConstantValue();

  // A number is an int_value when it is an integer: 2.0 is 2 in JavaScript.
  if (typeof val === 'boolean') {
    value.setBoolValue(val);
  } else if (Number.isInteger(val)) {
    value.setIntValue(val);
  } else if (typeof val === 'number') {
    value.setFloatValue(val);
  } else if (typeof val === 'string') {
    value.setStringValue(val);
  } else if (val instanceof Timestamp) {
    // Like Python 5.2.0 (a message packed in an Any before).
    value.setTimestampValue(val.clone());
  } else if (val instanceof utilPb.ConstantValue) {
    return val.clone();
  } else if (val instanceof jspb.Message) {
    value.setMsgValue(_packAny(val));
  } else if (val instanceof Map || (val !== null && typeof val === 'object' && !(Symbol.iterator in val))) {
    const dictValue = new utilPb.ConstantValue.DictValue();
    const entries = val instanceof Map ? val.entries() : Object.entries(val);
    for (const [key, item] of entries) dictValue.getValuesMap().set(key, jsVarToValue(item));
    value.setDictValue(dictValue);
  } else if (val !== null && typeof val === 'object') {
    value.setListValue(new utilPb.ConstantValue.ListValue().setValuesList(Array.from(val, jsVarToValue)));
  } else {
    throw new Error(`Invalid type "${val === null ? 'null' : typeof val}"`);
  }

  return value;
}

/**
 * Returns the protobuf-schema variable type that corresponds to the given variable.
 * @param {any} val Value to convert to a ConstantValue proto
 * @returns {utilPb.VariableDeclaration.Type}
 */
function jsTypeToPbType(val) {
  const { Type } = utilPb.VariableDeclaration;
  if (typeof val === 'boolean') {
    return Type.TYPE_BOOL;
  } else if (Number.isInteger(val)) {
    return Type.TYPE_INT;
  } else if (typeof val === 'number') {
    return Type.TYPE_FLOAT;
  } else if (typeof val === 'string') {
    return Type.TYPE_STRING;
  } else if (val instanceof Timestamp) {
    // Like Python 5.2.0 (TYPE_MESSAGE before).
    return Type.TYPE_TIMESTAMP;
  } else if (val instanceof utilPb.ConstantValue.ListValue) {
    // Special case for List and Dict value to allow using this function with the value of a ConstantValue.
    return Type.TYPE_LIST;
  } else if (val instanceof utilPb.ConstantValue.DictValue) {
    return Type.TYPE_DICT;
  } else if (val instanceof jspb.Message) {
    return Type.TYPE_MESSAGE;
  } else if (val instanceof Map || (val !== null && typeof val === 'object' && !(Symbol.iterator in val))) {
    return Type.TYPE_DICT;
  } else if (val !== null && typeof val === 'object') {
    return Type.TYPE_LIST;
  }

  throw new InvalidConversion(val, 'bosdyn.api.mission.VariableDeclaration.Type');
}

/**
 * The type of a variable, and the sub type of its items for a list or a dict.
 * @param {any} val A value.
 * @returns {[number, ?utilPb.VariableDeclaration.SubType]}
 */
function jsTypeToVariableDeclInfo(val) {
  const varType = jsTypeToPbType(val);
  let subType = null;
  let first;
  if (varType === utilPb.VariableDeclaration.Type.TYPE_LIST) {
    first = Array.from(val).slice(0, 1);
  } else if (varType === utilPb.VariableDeclaration.Type.TYPE_DICT) {
    first = (val instanceof Map ? Array.from(val.values()) : Object.values(val)).slice(0, 1);
  }
  if (first?.length) {
    const [subVarType, subRecurse] = jsTypeToVariableDeclInfo(first[0]);
    subType = new utilPb.VariableDeclaration.SubType().setType(subVarType).setSubType(subRecurse ?? undefined);
  }
  return [varType, subType];
}

/**
 * A VariableDeclaration of the type of the variable.
 * @param {any} val A value.
 * @param {?string} [name=null] Name of the variable.
 * @returns {utilPb.VariableDeclaration}
 */
function jsVarToVariableDecl(val, name = null) {
  const [varType, subType] = jsTypeToVariableDeclInfo(val);
  const declaration = new utilPb.VariableDeclaration().setType(varType);
  if (subType) declaration.setSubType(subType);
  if (name !== null) declaration.setName(name);
  return declaration;
}

function isStringIdentifier(string) {
  return _js_identifier_regex.test(string);
}

/**
 * Returns the protobuf-schema variable type that corresponds to the given descriptor.
 */
function fieldDescToPbType(field_desc) {
  process.emitWarning('Function under development', {
    code: 'NOT_WORKING_CORRECTLY',
    detail: 'This function may not work as expected!',
  });

  if (
    [
      field_desc.TYPE_UINT32,
      field_desc.TYPE_UINT64,
      field_desc.TYPE_FIXED32,
      field_desc.TYPE_FIXED64,
      field_desc.TYPE_INT32,
      field_desc.TYPE_INT64,
      field_desc.TYPE_SFIXED64,
      field_desc.TYPE_SINT32,
      field_desc.TYPE_SINT64,
      field_desc.TYPE_SFIXED32,
    ].includes(field_desc.type)
  ) {
    return utilPb.VariableDeclaration.Type.TYPE_INT;
  } else if ([field_desc.TYPE_DOUBLE, field_desc.TYPE_FLOAT].includes(field_desc.type)) {
    return utilPb.VariableDeclaration.Type.TYPE_FLOAT;
  } else if (field_desc.type === field_desc.TYPE_BOOL) {
    return utilPb.VariableDeclaration.Type.TYPE_BOOL;
  } else if (field_desc.type === field_desc.TYPE_STRING) {
    return utilPb.VariableDeclaration.Type.TYPE_STRING;
  } else if (field_desc.type === field_desc.TYPE_MESSAGE) {
    return utilPb.VariableDeclaration.Type.TYPE_MESSAGE;
  }

  throw new InvalidConversion(field_desc.type, 'bosdyn.api.mission.VariableDeclaration.Type');
}

/**
 * Return the stringified VariableDeclaration.Type, or "<unknown>" if the type is invalid.
 */
function safePbTypeToString(pbType) {
  return _enumName(utilPb.VariableDeclaration.Type, pbType) ?? '<unknown>';
}

function oneLineStr(msg) {
  return textFormat.messageToString(msg, { asOneLine: true });
}

function nodeSpecToShortString(node_spec, maxlen = 15) {
  const string = node_spec.getName() ? node_spec.getName() : oneLineStr(node_spec);

  if (string.length > maxlen) return `${string.substring(0, maxlen - 3)}...`;
  return string;
}

class ResultFromProto {
  static resultsFromProto = {
    [utilPb.Result.RESULT_FAILURE]: Result.FAILURE,
    [utilPb.Result.RESULT_RUNNING]: Result.RUNNING,
    [utilPb.Result.RESULT_SUCCESS]: Result.SUCCESS,
    [utilPb.Result.RESULT_ERROR]: Result.ERROR,
  };

  // The keys of an object are strings: the proto values are numbers again.
  static protoFromResults = Object.fromEntries(
    Object.entries(ResultFromProto.resultsFromProto).map(([k, v]) => [v, Number(k)]),
  );
}

/**
 * Returns a Result enum from a utilPb.Result, or throws InvalidConversion error.
 */
function protoEnumToResultConstant(proto_msg) {
  if (!Object.hasOwn(ResultFromProto.resultsFromProto, proto_msg)) {
    throw new InvalidConversion(proto_msg, 'constants.Result');
  }
  return ResultFromProto.resultsFromProto[proto_msg];
}

/**
 * Returns a protobuf version of the Result enum, RESULT_UNKNOWN on error.
 */
function resultConstantToProtoEnum(result) {
  // Result is an object: instanceof threw a TypeError.
  if (!Object.values(Result).includes(result) || !Object.hasOwn(ResultFromProto.protoFromResults, result)) {
    throw new InvalidConversion(result, 'bosdyn.api.mission.Result');
  }
  return ResultFromProto.protoFromResults[result];
}

function mostRestrictiveTravelParams(
  travel_params,
  vel_limit = null,
  disable_directed_exploration = false,
  disable_alternate_route_finding = false,
  path_following_mode = null,
  ground_clutter_mode = null,
) {
  travel_params =
    travel_params === null || travel_params === undefined ? new graphNavPb.TravelParams() : travel_params.clone();

  function ge(a, b) {
    return a >= b;
  }

  function le(a, b) {
    return a <= b;
  }

  function take_limiting(mine, other, compare) {
    if (other === 0) return mine;
    if (mine === 0) return other;
    if (compare(mine, other)) return other;

    return mine;
  }

  function take_velocity_limit(returned, other) {
    // Look at max_vel using >=, then min_vel using <=.
    for (const [min_max, comp] of [
      ['MaxVel', ge],
      ['MinVel', le],
    ]) {
      // If the other doesn't even have this field, skip to the next one (Object.hasOwn() was always false).
      if (!other[`has${min_max}`]()) continue;

      // Like the fields of Python, the unset messages are created.
      if (!returned[`has${min_max}`]()) returned[`set${min_max}`](new geometryPb.SE2Velocity());
      const lim_returned = returned[`get${min_max}`]();
      const lim_other = other[`get${min_max}`]();
      if (!lim_returned.hasLinear()) lim_returned.setLinear(new geometryPb.Vec2());
      const linear_other = lim_other.getLinear() ?? new geometryPb.Vec2();
      lim_returned.getLinear().setX(take_limiting(lim_returned.getLinear().getX(), linear_other.getX(), comp));
      lim_returned.getLinear().setY(take_limiting(lim_returned.getLinear().getY(), linear_other.getY(), comp));
      lim_returned.setAngular(take_limiting(lim_returned.getAngular(), lim_other.getAngular(), comp));
    }
  }

  if (vel_limit !== null) {
    if (!travel_params.hasVelocityLimit()) travel_params.setVelocityLimit(new geometryPb.SE2VelocityLimit());
    take_velocity_limit(travel_params.getVelocityLimit(), vel_limit);
  }

  travel_params.setDisableDirectedExploration(
    travel_params.getDisableDirectedExploration() || disable_directed_exploration,
  );
  travel_params.setDisableAlternateRouteFinding(
    travel_params.getDisableAlternateRouteFinding() || disable_alternate_route_finding,
  );

  if (path_following_mode === mapPb.Edge.Annotations.PathFollowingMode.PATH_MODE_STRICT) {
    travel_params.setPathFollowingMode(path_following_mode);
  }

  if (ground_clutter_mode === mapPb.Edge.Annotations.GroundClutterAvoidanceMode.GROUND_CLUTTER_FROM_FOOTFALLS) {
    travel_params.setGroundClutterMode(ground_clutter_mode);
  }

  return travel_params;
}

function getValueFromConstantValueMessage(const_proto) {
  const field = _enumName(utilPb.ConstantValue.ValueCase, const_proto.getValueCase());
  if (field === undefined || field === 'VALUE_NOT_SET') throw new ValueError('Did not have a value set!');
  // e.g. FLOAT_VALUE: getFloatValue() (the list and dict values were missing).
  const getter = `get${field.toLowerCase().replace(/(^|_)([a-z])/g, (match, sep, char) => char.toUpperCase())}`;
  return const_proto[getter]();
}

function getValueFromValueMessage(node, blackboard, value_msg) {
  if (value_msg.hasConstant()) {
    const constant = value_msg.getConstant();
    return getValueFromConstantValueMessage(constant);
  } else if (value_msg.hasRuntimeVar()) {
    return blackboard.read(node, value_msg.getRuntimeVar().getName());
  } else {
    throw new ValueError('Value must be a runtime variable or constant.');
  }
}

/**
 * Safe wrapper to convert a protobuf enum object to its string representation. Avoids throwing an error if the status
 * is unknown by the enum object.
 */
function safePbEnumToString(value, pbEnumObj) {
  return _enumName(pbEnumObj, value) ?? `<unknown> (value: ${value})`;
}

/**
 * Returns a Value message containing a ConstantValue with the appropriate oneof set.
 * @param {any} val A value
 * @returns {utilPb.Value}
 */
function createValue(val) {
  return new utilPb.Value().setConstant(jsVarToValue(val));
}

/**
 * Returns a DefineBlackboard protobuf message for the key-value pairs in `values`.
 * @param {Object<any, any>} values An object of values
 * @returns {nodesPb.DefineBlackboard}
 */
function defineBlackboard(values) {
  const nodeToReturn = new nodesPb.DefineBlackboard();
  for (const [key, value] of Object.entries(values)) {
    nodeToReturn.addBlackboardVariables(new utilPb.KeyValue().setKey(key).setValue(value));
  }
  return nodeToReturn;
}

/**
 * Returns a SetBlackboard protobuf message for the key-value pairs in `values`.
 * @param {Object<any, any>} values An object of values
 * @returns {nodesPb.SetBlackboard}
 */
function setBlackboard(values) {
  const nodeToReturn = new nodesPb.SetBlackboard();
  for (const [key, value] of Object.entries(values)) {
    nodeToReturn.addBlackboardVariables(new utilPb.KeyValue().setKey(key).setValue(value));
  }
  return nodeToReturn;
}

const _SEVERITY_TO_LOG_LEVEL = {
  [alertsPb.AlertData.SeverityLevel.SEVERITY_LEVEL_INFO]: 'info',
  [alertsPb.AlertData.SeverityLevel.SEVERITY_LEVEL_WARN]: 'warn',
  [alertsPb.AlertData.SeverityLevel.SEVERITY_LEVEL_ERROR]: 'error',
  // A critical mission prompt or text message does not indicate a critical robot failure,
  // and is usually expected depending on how a mission plays out. For this reason, we
  // reduce the severity from CRITICAL to ERROR for logs.
  [alertsPb.AlertData.SeverityLevel.SEVERITY_LEVEL_CRITICAL]: 'error',
};

/**
 * Converts alert data severity enum to a logger level for printing purposes.
 * @param {number} textLevel An AlertData.SeverityLevel.
 * @returns {string} The level of a winston logger: 'info', 'warn' or 'error'.
 */
function severityToLogLevel(textLevel) {
  return _SEVERITY_TO_LOG_LEVEL[textLevel] ?? 'info';
}

module.exports = {
  DUMMY_MESSAGE,
  InvalidConversion,
  treeToString,
  typeToFieldName,
  protoFromObject,
  jsVarToValue,
  jsTypeToPbType,
  jsTypeToVariableDeclInfo,
  jsVarToVariableDecl,
  severityToLogLevel,
  isStringIdentifier,
  fieldDescToPbType,
  safePbTypeToString,
  oneLineStr,
  nodeSpecToShortString,
  ResultFromProto,
  protoEnumToResultConstant,
  resultConstantToProtoEnum,
  mostRestrictiveTravelParams,
  getValueFromConstantValueMessage,
  getValueFromValueMessage,
  safePbEnumToString,
  createValue,
  defineBlackboard,
  setBlackboard,
};

'use strict';

const process = require('node:process');
const jspb = require('google-protobuf');
const { Any } = require('google-protobuf/google/protobuf/any_pb');
const { Result } = require('./constants');
const graphNavPb = require('../bosdyn/api/graph_nav/graph_nav_pb');
const mapPb = require('../bosdyn/api/graph_nav/map_pb');
const nodesPb = require('../bosdyn/api/mission/nodes_pb');
const utilPb = require('../bosdyn/api/mission/util_pb');
const { ValueError } = require('../bosdyn-client/exceptions');

const DUMMY_MESSAGE = new nodesPb.Node().setName('dummy-message-for-parameterization');

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

const _js_identifier_regex = /[A-Za-z_]\w*$/;

/**
 * Get a string representation of a Node, interpreted as a tree.
 * @param {nodesPb.Node} root 
 * @param {number} startLevel 
 * @param {boolean} includeStatus 
 * @returns {string}
 */
function treeToString(root, startLevel = 0, includeStatus = false) {
  let string = '';
  if (startLevel === 0) string += '\n';
  const prefix = `|${'-'.repeat(startLevel)}`;
  string += `${prefix} ${root.toString()} ${root ? ' ' : ''} (${root.constructor.name})`;
  if (includeStatus) string += `\n ${prefix} Status code: [${root.last_result}]`;
  for (const child of root.children) {
    string += `\n ${treeToString(child, startLevel + 1, includeStatus)}`;
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
  const innerType = innerProto.constructor.name;

  if (innerProto.getChildrenList().length) {
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
  } else if (numChildren !== 0) {
    throw new Error(
      `Proto "${node.getName()}" of type "${innerType}" was given ${numChildren} children,
      but I do not know how to add them!`,
    );
  }

  if (packNodes) {
    node.setImpl(new Any().pack(innerProto.serializeBinary(), 'bosdyn.api.mission.Sequence'));
  } else {
    node[`set${innerType}`]?.(innerProto);
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

  if (typeof val === 'boolean') {
    value.setBoolValue(val);
  } else if (Number.isInteger(val)) {
    value.setIntValue(val);
  } else if (!Number.isInteger(val) && !Number.isNaN(val)) {
    value.setFloatValue(val);
  } else if (typeof val === 'string') {
    value.setStringValue(val);
  } else if (val instanceof jspb.Message) {
    const any = new Any().pack(val.serializeBinary(), '');
    value.setMsgValue(any);
  } else {
    throw new Error(`Invalid type "${typeof val}"`);
  }

  return value;
}

/**
 * Returns the protobuf-schema variable type that corresponds to the given variable.
 * @param {any} val Value to convert to a ConstantValue proto
 * @returns {utilPb.VariableDeclaration.Type}
 */
function jsTypeToPbType(val) {
  if (typeof val === 'boolean') {
    return utilPb.VariableDeclaration.Type.TYPE_BOOL;
  } else if (Number.isInteger(val)) {
    return utilPb.VariableDeclaration.Type.TYPE_INT;
  } else if (!Number.isInteger(val) && !Number.isNaN(val)) {
    return utilPb.VariableDeclaration.Type.TYPE_FLOAT;
  } else if (typeof val === 'string') {
    return utilPb.VariableDeclaration.Type.TYPE_STRING;
  } else if (val instanceof jspb.Message) {
    return utilPb.VariableDeclaration.Type.TYPE_MESSAGE;
  }

  throw new InvalidConversion(val, 'bosdyn.api.mission.VariableDeclaration.Type');
}

function isStringIdentifier(string) {
  if (Object.hasOwn(string, 'isidentifier')) return string.isidentifier();
  return _js_identifier_regex.test(string);
}

function fieldDescToPbType(field_desc) {
  process.emitWarning('Function under development', {
    code: 'NOT_WORKING_CORRECTLY',
    detail: 'This function may not work as expected!',
  });

  if (
    field_desc.type in
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
    ]
  ) {
    return utilPb.VariableDeclaration.Type.TYPE_INT;
  } else if (field_desc.type in [field_desc.TYPE_DOUBLE, field_desc.TYPE_FLOAT]) {
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

function safePbTypeToString(pbType) {
  try {
    return Object.keys(utilPb.VariableDeclaration.Type)[pbType];
  } catch (e) {
    return '<unknown>';
  }
}

function oneLineStr(msg) {
  return JSON.stringify(msg.toObject());
}

function nodeSpecToShortString(node_spec, maxlen = 15) {
  let string = node_spec.getName() ? node_spec.getName() : oneLineStr(node_spec);

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

  static protoFromResults = Object.fromEntries(
    Object.entries(ResultFromProto.resultsFromProto).map(([k, v]) => [v, k]),
  );
}

function protoEnumToResultConstant(proto_msg) {
  try {
    return ResultFromProto.resultsFromProto[proto_msg];
  } catch (e) {
    throw new InvalidConversion(proto_msg, 'constants.Result');
  }
}

function resultConstantToProtoEnum(result) {
  if (!(result instanceof Result)) throw new InvalidConversion(result, 'bosdyn.api.mission.Result');

  try {
    return ResultFromProto.protoFromResults[result];
  } catch (e) {
    throw new InvalidConversion(result, 'bosdyn.api.mission.Result');
  }
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
    for (const [min_max, comp] of [
      ['getMaxVel', ge],
      ['getMinVel', le],
    ]) {
      if (!Object.hasOwn(other, min_max)) continue;

      const lim_returned = returned[min_max]();
      const lim_other = other[min_max]();
      lim_returned.getLinear().setX(take_limiting(lim_returned.getLinear().getX(), lim_other.getLinear().getX(), comp));
      lim_returned.getLinear().setY(take_limiting(lim_returned.getLinear().getY(), lim_other.getLinear().getY(), comp));
      lim_returned.setAngular(take_limiting(lim_returned.angular, lim_other.angular, comp));
    }
  }

  if (vel_limit !== null) take_velocity_limit(travel_params.getVelocityLimit(), vel_limit);

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
  const field = const_proto.getValueCase();
  if (field === 0) throw new ValueError('Did not have a value set!');
  let ret;
  switch (field) {
    case 1:
      ret = const_proto.getFloatValue();
      break;
    case 2:
      ret = const_proto.getStringValue();
      break;
    case 3:
      ret = const_proto.getIntValue();
      break;
    case 4:
      ret = const_proto.getBoolValue();
      break;
    case 5:
      ret = const_proto.getMsgValue();
      break;
  }
  return ret;
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

function safePbEnumToString(value, pbEnumObj) {
  try {
    return Object.keys(pbEnumObj)[value];
  } catch (e) {
    // Pass
  }
  return `<unknown> (value: ${value})`;
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

module.exports = {
  DUMMY_MESSAGE,
  InvalidConversion,
  treeToString,
  protoFromObject,
  jsVarToValue,
  jsTypeToPbType,
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

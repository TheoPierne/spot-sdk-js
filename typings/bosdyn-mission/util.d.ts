export const DUMMY_MESSAGE: nodesPb.Node;
/**
 * Could not convert the provided value to the destination type.
 */
export class InvalidConversion extends Error {
    constructor(originalValue: any, destinationTypename: any);
    originalValue: any;
    destinationTypename: any;
}
/**
 * Get a string representation of a Node, interpreted as a tree.
 * @param {nodesPb.Node} root
 * @param {number} startLevel
 * @param {boolean} includeStatus
 * @returns {string}
 */
export function treeToString(root: nodesPb.Node, startLevel?: number, includeStatus?: boolean): string;
/**
 * Use type name to reconstruct field name of bosdyn.api.mission.Node.type.
 * Example: SimpleParallel becomes simple_parallel.
 * @param {string} typeName Name of the type, e.g. 'bosdyn.api.mission.SimpleParallel' or 'SimpleParallel'.
 * @returns {string}
 * @throws {ValueError} The field is not in the type oneof of Node.
 */
export function typeToFieldName(typeName: string): string;
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
export function protoFromObject(options: {
    nameOrObject: string | Object;
    innerProto: nodesPb.Sequence;
    children: any[];
}, packNodes?: boolean): nodesPb.Node;
/**
 * Returns a ConstantValue with the appropriate oneof set.
 * @param {any} val Value to convert to a ConstantValue proto
 * @returns {utilPb.ConstantValue}
 */
export function jsVarToValue(val: any): utilPb.ConstantValue;
/**
 * Returns the protobuf-schema variable type that corresponds to the given variable.
 * @param {any} val Value to convert to a ConstantValue proto
 * @returns {utilPb.VariableDeclaration.Type}
 */
export function jsTypeToPbType(val: any): utilPb.VariableDeclaration.Type;
/**
 * The type of a variable, and the sub type of its items for a list or a dict.
 * @param {any} val A value.
 * @returns {[number, ?utilPb.VariableDeclaration.SubType]}
 */
export function jsTypeToVariableDeclInfo(val: any): [number, utilPb.VariableDeclaration.SubType | null];
/**
 * A VariableDeclaration of the type of the variable.
 * @param {any} val A value.
 * @param {?string} [name=null] Name of the variable.
 * @returns {utilPb.VariableDeclaration}
 */
export function jsVarToVariableDecl(val: any, name?: string | null): utilPb.VariableDeclaration;
/**
 * Converts alert data severity enum to a logger level for printing purposes.
 * @param {number} textLevel An AlertData.SeverityLevel.
 * @returns {string} The level of a winston logger: 'info', 'warn' or 'error'.
 */
export function severityToLogLevel(textLevel: number): string;
export function isStringIdentifier(string: any): boolean;
/**
 * Returns the protobuf-schema variable type that corresponds to the given descriptor.
 */
export function fieldDescToPbType(field_desc: any): utilPb.VariableDeclaration.Type.TYPE_FLOAT | utilPb.VariableDeclaration.Type.TYPE_STRING | utilPb.VariableDeclaration.Type.TYPE_INT | utilPb.VariableDeclaration.Type.TYPE_BOOL | utilPb.VariableDeclaration.Type.TYPE_MESSAGE;
/**
 * Return the stringified VariableDeclaration.Type, or "<unknown>" if the type is invalid.
 */
export function safePbTypeToString(pbType: any): string;
export function oneLineStr(msg: any): string;
export function nodeSpecToShortString(node_spec: any, maxlen?: number): any;
export class ResultFromProto {
    static resultsFromProto: {
        1: number;
        2: number;
        3: number;
        4: number;
    };
    static protoFromResults: {
        [k: string]: number;
    };
}
/**
 * Returns a Result enum from a utilPb.Result, or throws InvalidConversion error.
 */
export function protoEnumToResultConstant(proto_msg: any): any;
/**
 * Returns a protobuf version of the Result enum, RESULT_UNKNOWN on error.
 */
export function resultConstantToProtoEnum(result: any): number;
export function mostRestrictiveTravelParams(travel_params: any, vel_limit?: null, disable_directed_exploration?: boolean, disable_alternate_route_finding?: boolean, path_following_mode?: null, ground_clutter_mode?: null): any;
export function getValueFromConstantValueMessage(const_proto: any): any;
export function getValueFromValueMessage(node: any, blackboard: any, value_msg: any): any;
/**
 * Safe wrapper to convert a protobuf enum object to its string representation. Avoids throwing an error if the status
 * is unknown by the enum object.
 */
export function safePbEnumToString(value: any, pbEnumObj: any): string;
/**
 * Returns a Value message containing a ConstantValue with the appropriate oneof set.
 * @param {any} val A value
 * @returns {utilPb.Value}
 */
export function createValue(val: any): utilPb.Value;
/**
 * Returns a DefineBlackboard protobuf message for the key-value pairs in `values`.
 * @param {Object<any, any>} values An object of values
 * @returns {nodesPb.DefineBlackboard}
 */
export function defineBlackboard(values: any): nodesPb.DefineBlackboard;
/**
 * Returns a SetBlackboard protobuf message for the key-value pairs in `values`.
 * @param {Object<any, any>} values An object of values
 * @returns {nodesPb.SetBlackboard}
 */
export function setBlackboard(values: any): nodesPb.SetBlackboard;
import nodesPb = require("../../src/bosdyn/api/mission/nodes_pb");
import utilPb = require("../../src/bosdyn/api/mission/util_pb");

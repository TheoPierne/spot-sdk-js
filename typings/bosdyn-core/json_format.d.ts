/** Top-level module error for json_format. */
export class JsonFormatError extends Error {
    constructor(message: any);
}
/** Thrown if serialization to JSON fails. */
export class SerializeToJsonError extends JsonFormatError {
}
/**
 * Converts a protobuf message to a plain object, like MessageToDict() in Python: once encoded to JSON, it conforms
 * to the proto3 JSON specification.
 * @param {import('google-protobuf').Message} message The protocol buffers message instance to serialize.
 * @param {Object} [options]
 * @param {boolean} [options.alwaysPrintFieldsWithNoPresence=false] See messageToJson().
 * @param {boolean} [options.preservingProtoFieldName=false] See messageToJson().
 * @param {boolean} [options.useIntegersForEnums=false] See messageToJson().
 * @param {?number} [options.floatPrecision=null] See messageToJson().
 * @returns {Object} A plain object representation of the protocol buffer message.
 * @throws {SerializeToJsonError} A field cannot be converted.
 */
export function messageToDict(message: import("google-protobuf").Message, { alwaysPrintFieldsWithNoPresence, preservingProtoFieldName, useIntegersForEnums, floatPrecision, }?: {
    alwaysPrintFieldsWithNoPresence?: boolean | undefined;
    preservingProtoFieldName?: boolean | undefined;
    useIntegersForEnums?: boolean | undefined;
    floatPrecision?: number | null | undefined;
}): Object;
/**
 * Converts a protobuf message to JSON format, like MessageToJson() in Python.
 * @param {import('google-protobuf').Message} message The protocol buffers message instance to serialize.
 * @param {Object} [options]
 * @param {boolean} [options.preservingProtoFieldName=false] Use the original proto field names as defined in the
 * .proto file, instead of their lowerCamelCase names.
 * @param {?(number|string)} [options.indent=2] The JSON object is pretty-printed with this indent level. An indent
 * level of 0 or negative only inserts newlines. If null, no newlines are inserted.
 * @param {boolean} [options.sortKeys=false] Sort the output by field names.
 * @param {boolean} [options.useIntegersForEnums=false] Print integers instead of enum names.
 * @param {?number} [options.floatPrecision=null] The number of significant digits of the float fields.
 * @param {boolean} [options.ensureAscii=true] Escape the non-ASCII characters of the strings.
 * @param {boolean} [options.alwaysPrintFieldsWithNoPresence=false] Always serialize the fields without presence
 * (implicit presence scalars, repeated fields, and map fields).
 * @returns {string} The JSON formatted protocol buffer message.
 * @throws {SerializeToJsonError} A field cannot be converted.
 */
export function messageToJson(message: import("google-protobuf").Message, { preservingProtoFieldName, indent, sortKeys, useIntegersForEnums, floatPrecision, ensureAscii, alwaysPrintFieldsWithNoPresence, }?: {
    preservingProtoFieldName?: boolean | undefined;
    indent?: string | number | null | undefined;
    sortKeys?: boolean | undefined;
    useIntegersForEnums?: boolean | undefined;
    floatPrecision?: number | null | undefined;
    ensureAscii?: boolean | undefined;
    alwaysPrintFieldsWithNoPresence?: boolean | undefined;
}): string;

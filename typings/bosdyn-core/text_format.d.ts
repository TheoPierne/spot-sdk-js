/** Thrown in case of text parsing or tokenizing error. */
export class ParseError extends TextFormatError {
    /**
     * @param {?string} [message=null]
     * @param {?number} [line=null] The line of the error, from 1.
     * @param {?number} [column=null] The column of the error, from 1.
     */
    constructor(message?: string | null, line?: number | null, column?: number | null);
    _line: number | null;
    _column: number | null;
    getLine(): number | null;
    getColumn(): number | null;
}
/** Top-level module error for text_format. */
export class TextFormatError extends Error {
    constructor(message: any);
}
/**
 * Protocol buffer text representation tokenizer, like the Tokenizer of Python.
 */
export class Tokenizer {
    /**
     * @param {Iterable<string>} lines
     */
    constructor(lines: Iterable<string>);
    _line: number;
    _column: number;
    token: string;
    _lines: Iterator<string, any, any>;
    _currentLine: string;
    _previousLine: number;
    _previousColumn: number;
    _moreLines: boolean;
    lookingAt(token: any): boolean;
    /** @returns {boolean} Whether the end of the text was reached. */
    atEnd(): boolean;
    _popLine(): void;
    _skipWhitespace(): void;
    tryConsume(token: any): boolean;
    consume(token: any): void;
    /** Calls a consume function, false if it throws a ParseError. */
    _try(consume: any): boolean;
    /** Consumes a value parsed by a function which throws _ValueError. */
    _consumeParsed(parseToken: any): any;
    tryConsumeIdentifier(): boolean;
    consumeIdentifier(): string;
    tryConsumeIdentifierOrNumber(): boolean;
    consumeIdentifierOrNumber(): string;
    tryConsumeInteger(): boolean;
    /** @returns {bigint} */
    consumeInteger(): bigint;
    tryConsumeFloat(): boolean;
    /** @returns {number} */
    consumeFloat(): number;
    /** @returns {boolean} */
    consumeBool(): boolean;
    tryConsumeByteString(): boolean;
    /** @returns {string} */
    consumeString(): string;
    /**
     * Consumes a byte array value: adjacent string literals are concatenated.
     * @returns {Buffer}
     */
    consumeByteString(): Buffer;
    _consumeSingleByteString(): any;
    consumeEnum(field: any): any;
    /** Creates and *returns* a ParseError for the previously read token. */
    parseErrorPreviousToken(message: any): ParseError;
    /** Creates and *returns* a ParseError for the current token. */
    parseError(message: any): ParseError;
    /** Reads the next meaningful token. */
    nextToken(): void;
}
/**
 * Escapes a string or bytes for a text protocol buffer, like text_encoding.CEscape().
 * @param {string|Uint8Array} text
 * @param {boolean} asUtf8 For a string: whether the non-ASCII characters are kept (else their UTF-8 bytes are escaped).
 * @returns {string}
 */
export function cEscape(text: string | Uint8Array, asUtf8: boolean): string;
/**
 * Unescapes a text string with C-style escape sequences to UTF-8 bytes, like text_encoding.CUnescape(): the escapes
 * are decoded in the same passes, with the same errors.
 * @param {string} text
 * @returns {Buffer}
 */
export function cUnescape(text: string): Buffer;
/**
 * Parses a text representation of a protocol message into a message, like parse() but allows repeated values for a
 * non-repeated field, and uses the last one.
 * @template {import('google-protobuf').Message} T
 * @param {string|Uint8Array} text Message text representation.
 * @param {T} message A protocol buffer message to merge into.
 * @param {Object} [options] The options of parse().
 * @returns {T} The same message passed as argument.
 * @throws {ParseError} On text parsing problems.
 */
export function merge<T extends import("google-protobuf").Message>(text: string | Uint8Array, message: T, options?: Object): T;
/**
 * Merges the lines of a text representation of a protocol message into a message: see merge().
 * @template {import('google-protobuf').Message} T
 * @param {Iterable<string>} lines
 * @param {T} message
 * @param {Object} [options] The options of parse().
 * @returns {T}
 */
export function mergeLines<T extends import("google-protobuf").Message>(lines: Iterable<string>, message: T, options?: Object): T;
/**
 * Converts a protobuf message to text format.
 * @param {import('google-protobuf').Message} message The protocol buffers message.
 * @param {Object} [options]
 * @param {boolean} [options.asUtf8=true] Keep the non-ASCII characters of the strings unescaped.
 * @param {boolean} [options.asOneLine=false] Don't introduce newlines between fields.
 * @param {boolean} [options.useShortRepeatedPrimitives=false] Use short repeated format for primitives.
 * @param {boolean} [options.pointyBrackets=false] Use angle brackets instead of curly braces for nesting.
 * @param {boolean} [options.useIndexOrder=false] Print the fields in the order of the .proto file instead of the order
 * of their numbers.
 * @param {?function(number): string} [options.floatFormat=null] Formats the float fields (and the double fields if
 * doubleFormat is not set); otherwise, the shortest float that has same value in wire is printed.
 * @param {?function(number): string} [options.doubleFormat=null] Formats the double fields; otherwise, their repr()
 * of Python is printed.
 * @param {boolean} [options.useFieldNumber=false] Print field numbers instead of names.
 * @param {number} [options.indent=0] The initial indent level, in terms of spaces, for pretty print.
 * @param {?function(Object, number, boolean): ?string} [options.messageFormatter=null] Custom formatter for selected
 * sub-messages (usually based on message type): (message, indent, asOneLine) => text or null.
 * @param {boolean} [options.forceColon=false] Add a colon after the field name even if the field is a proto message.
 * @returns {string} The text formatted protocol buffer message.
 */
export function messageToString(message: import("google-protobuf").Message, { asUtf8, asOneLine, useShortRepeatedPrimitives, pointyBrackets, useIndexOrder, floatFormat, doubleFormat, useFieldNumber, indent, messageFormatter, forceColon, }?: {
    asUtf8?: boolean | undefined;
    asOneLine?: boolean | undefined;
    useShortRepeatedPrimitives?: boolean | undefined;
    pointyBrackets?: boolean | undefined;
    useIndexOrder?: boolean | undefined;
    floatFormat?: ((arg0: number) => string) | null | undefined;
    doubleFormat?: ((arg0: number) => string) | null | undefined;
    useFieldNumber?: boolean | undefined;
    indent?: number | undefined;
    messageFormatter?: ((arg0: Object, arg1: number, arg2: boolean) => string | null) | null | undefined;
    forceColon?: boolean | undefined;
}): string;
/**
 * Parses a text representation of a protocol message into a message.
 *
 * NOTE: for historical reasons this function does not clear the input message. If text contains a field already set
 * in message, the value is appended if the field is repeated. Otherwise, an error is thrown.
 * @template {import('google-protobuf').Message} T
 * @param {string|Uint8Array} text Message text representation.
 * @param {T} message A protocol buffer message to merge into.
 * @param {Object} [options]
 * @param {boolean} [options.allowUnknownExtension=false] Skip over missing extensions and keep parsing.
 * @param {boolean} [options.allowFieldNumber=false] Both field number and field name are allowed.
 * @param {boolean} [options.allowUnknownField=false] Skip over unknown field and keep parsing. Avoid to use this
 * option if possible: it may hide some errors (e.g. spelling error on field name).
 * @returns {T} The same message passed as argument.
 * @throws {ParseError} On text parsing problems.
 */
export function parse<T extends import("google-protobuf").Message>(text: string | Uint8Array, message: T, options?: {
    allowUnknownExtension?: boolean | undefined;
    allowFieldNumber?: boolean | undefined;
    allowUnknownField?: boolean | undefined;
}): T;
/**
 * Parses a boolean value.
 * @param {string} text
 * @returns {boolean}
 */
export function parseBool(text: string): boolean;
/**
 * Parses an enum value: its number or its name.
 * @param {import('./descriptor_pool').FieldDescriptor} field
 * @param {string} value
 * @returns {number}
 */
export function parseEnum(field: import("./descriptor_pool").FieldDescriptor, value: string): number;
/**
 * Parses a floating point number: also inf, infinity, nan and the '1.0f' format.
 * @param {string} text
 * @returns {number}
 */
export function parseFloat(text: string): number;
/**
 * Parses an integer.
 * @param {string} text The text to parse.
 * @param {boolean} [isSigned=false] True if a signed integer must be parsed.
 * @param {boolean} [isLong=false] True if a long integer must be parsed.
 * @returns {bigint}
 */
export function parseInteger(text: string, isSigned?: boolean, isLong?: boolean): bigint;
/**
 * Parses the lines of a text representation of a protocol message into a message: see parse().
 * @template {import('google-protobuf').Message} T
 * @param {Iterable<string>} lines
 * @param {T} message
 * @param {Object} [options] The options of parse().
 * @returns {T}
 */
export function parseLines<T extends import("google-protobuf").Message>(lines: Iterable<string>, message: T, options?: Object): T;
/**
 * A new message of a type (e.g. the one of a google.protobuf.Any), or null if the type is unknown.
 * @param {string} typeName The full name of the type.
 * @returns {?import('google-protobuf').Message}
 */
export function _buildMessageFromTypeName(typeName: string): import("google-protobuf").Message | null;
/**
 * The value of a field: a message, a scalar (Uint8Array for bytes), an array for a repeated field or the jspb.Map of
 * a map field.
 */
export function _getValue(message: any, field: any): any;
/**
 * The text of an integer field: its exact value.
 * @param {number|string} value A number, or a string for the [jstype = JS_STRING] fields.
 * @returns {string}
 */
export function _intToString(value: number | string): string;
/**
 * The fields which are set, with their value, in the order of their numbers, like ListFields() in Python.
 * @returns {Array<[import('./descriptor_pool').FieldDescriptor, *]>}
 */
export function _listFields(message: any): Array<[import("./descriptor_pool").FieldDescriptor, any]>;
/**
 * The repr() of a float in Python: the shortest digits that give the value back, in fixed notation from 1e-4 to
 * 1e16 (with at least one decimal).
 * @param {number} value
 * @returns {string}
 */
export function _pythonFloatRepr(value: number): string;
/**
 * A float rounded to significant digits like float('{0:.{1}g}'.format(value, precision)) in Python: the ties are
 * rounded to the even digit, where toPrecision() rounds them up.
 * @param {number} value
 * @param {number} precision
 * @returns {number}
 */
export function _roundToPrecision(value: number, precision: number): number;
/**
 * The shortest float with the same value on the wire (as a 32 bits float), like type_checkers.ToShortestFloat().
 * @param {number} original A 32 bits float.
 * @returns {number}
 */
export function _toShortestFloat(original: number): number;
/**
 * The name of the field of a oneof which is set, like WhichOneof() in Python.
 * @returns {?string}
 */
export function _whichOneof(message: any, oneof: any): string | null;
import { Buffer } from "buffer";

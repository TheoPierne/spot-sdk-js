/**
 * @file Converts protobuf messages to JSON and to plain objects, like google.protobuf.json_format in Python.
 */

'use strict';

/**
 * The JSON format of the messages of the SDK, like google.protobuf.json_format of Python (protobuf 5.29):
 * messageToJson() and messageToDict() convert a message according to the proto3 JSON specification. The fields are
 * found in the descriptors of descriptor_pool.js.
 *
 * Differences with Python: only the printing is ported (the SDK does not parse JSON), the entries of the maps are in
 * the order of their keys (the order of the hash table in Python) and the extensions are not supported (the protos
 * of the SDK have none).
 */

const { Buffer } = require('node:buffer');

const { FieldType, defaultPool } = require('./descriptor_pool');
const {
  _buildMessageFromTypeName,
  _getValue,
  _intToString,
  _listFields,
  _pythonFloatRepr,
  _roundToPrecision,
  _toShortestFloat,
  _whichOneof,
} = require('./text_format');

const _INT64_TYPES = new Set([
  FieldType.INT64,
  FieldType.UINT64,
  FieldType.SINT64,
  FieldType.FIXED64,
  FieldType.SFIXED64,
]);
const _INFINITY = 'Infinity';
const _NEG_INFINITY = '-Infinity';
const _NAN = 'NaN';

const _NANOS_PER_SECOND = 1_000_000_000;
const _DURATION_SECONDS_MAX = 315_576_000_000;
const _TIMESTAMP_SECONDS_MIN = -62_135_596_800;
const _TIMESTAMP_SECONDS_MAX = 253_402_300_799;

// The escapes of json.dumps() in Python.
const _ESCAPES = { '\\': '\\\\', '"': '\\"', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '\t': '\\t' };
// ensure_ascii escapes everything but the printable ASCII characters.
const _ESCAPE_ASCII = /[\\"]|[^ -~]/g;
// eslint-disable-next-line no-control-regex
const _ESCAPE = /[\x00-\x1f\\"]/g;

/** Top-level module error for json_format. */
class JsonFormatError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

/** Thrown if serialization to JSON fails. */
class SerializeToJsonError extends JsonFormatError {}

/** A value which cannot be converted (ValueError in Python). */
class _ValueError extends RangeError {}

/** A float of the JSON object, written like Python writes the floats (1.0, not 1). */
class _Float {
  constructor(value) {
    this.value = value;
  }
}

/**
 * @param {import('./descriptor_pool').Descriptor} descriptor
 * @returns {boolean}
 */
function _isWrapperMessage(descriptor) {
  return descriptor.file.name === 'google/protobuf/wrappers.proto';
}

/**
 * The digits of a positive number of nanoseconds after the decimal point: 3, 6 or 9 of them as required to represent
 * the exact value, none for a whole number of seconds.
 * @param {number} nanos
 * @returns {string}
 */
function _fraction(nanos) {
  if (nanos % 1e9 === 0) return '';
  if (nanos % 1e6 === 0) return `.${String(nanos / 1e6).padStart(3, '0')}`;
  if (nanos % 1e3 === 0) return `.${String(nanos / 1e3).padStart(6, '0')}`;
  return `.${String(nanos).padStart(9, '0')}`;
}

/**
 * Converts a Timestamp to RFC 3339 date string format, like Timestamp.ToJsonString() in Python.
 * @param {import('google-protobuf/google/protobuf/timestamp_pb').Timestamp} timestamp
 * @returns {string} e.g. '1972-01-01T10:00:20.021Z'
 */
function _timestampToJsonString(timestamp) {
  const seconds = Number(timestamp.getSeconds());
  const nanos = timestamp.getNanos();
  if (seconds < _TIMESTAMP_SECONDS_MIN || seconds > _TIMESTAMP_SECONDS_MAX) {
    throw new _ValueError(`Timestamp is not valid: Seconds ${seconds} must be in range [-62135596800, 253402300799].`);
  }
  if (nanos < 0 || nanos >= _NANOS_PER_SECOND) {
    throw new _ValueError(`Timestamp is not valid: Nanos ${nanos} must be in a range [0, 999999].`);
  }
  // The years 1 to 9999: 'YYYY-MM-DDTHH:MM:SS', like isoformat() of a datetime.
  return `${new Date(seconds * 1_000).toISOString().slice(0, 19)}${_fraction(nanos)}Z`;
}

/**
 * Converts a Duration to string format, like Duration.ToJsonString() in Python.
 * @param {import('google-protobuf/google/protobuf/duration_pb').Duration} duration
 * @returns {string} e.g. '1s', '1.010s', '1.000000100s', '-3.100s'
 */
function _durationToJsonString(duration) {
  const seconds = Number(duration.getSeconds());
  const nanos = duration.getNanos();
  if (seconds < -_DURATION_SECONDS_MAX || seconds > _DURATION_SECONDS_MAX) {
    throw new _ValueError(`Duration is not valid: Seconds ${seconds} must be in range [-315576000000, 315576000000].`);
  }
  if (nanos <= -_NANOS_PER_SECOND || nanos >= _NANOS_PER_SECOND) {
    throw new _ValueError(`Duration is not valid: Nanos ${nanos} must be in range [-999999999, 999999999].`);
  }
  if ((nanos < 0 && seconds > 0) || (nanos > 0 && seconds < 0)) {
    throw new _ValueError('Duration is not valid: Sign mismatch.');
  }
  const negative = seconds < 0 || nanos < 0;
  return `${negative ? '-' : ''}${Math.abs(seconds)}${_fraction(Math.abs(nanos))}s`;
}

/**
 * Converts a path name from snake_case to camelCase, like _SnakeCaseToCamelCase() of Python.
 * @param {string} pathName
 * @returns {string}
 */
function _snakeCaseToCamelCase(pathName) {
  let result = '';
  let afterUnderscore = false;
  for (const char of pathName) {
    if (/\p{Lu}/u.test(char)) {
      throw new _ValueError(
        `Fail to print FieldMask to Json string: Path name ${pathName} must not contain uppercase letters.`,
      );
    }
    if (afterUnderscore) {
      if (!/\p{Ll}/u.test(char)) {
        throw new _ValueError(
          'Fail to print FieldMask to Json string: The character after a "_" must be a lowercase letter in path ' +
            `name ${pathName}.`,
        );
      }
      result += char.toUpperCase();
      afterUnderscore = false;
    } else if (char === '_') {
      afterUnderscore = true;
    } else {
      result += char;
    }
  }
  if (afterUnderscore) {
    throw new _ValueError(`Fail to print FieldMask to Json string: Trailing "_" in path name ${pathName}.`);
  }
  return result;
}

/**
 * A new message of the type of a google.protobuf.Any, like _CreateMessageFromTypeUrl() of Python.
 * @param {string} typeUrl
 * @returns {import('google-protobuf').Message}
 */
function _createMessageFromTypeUrl(typeUrl) {
  const message = _buildMessageFromTypeName(typeUrl.split('/').pop());
  if (message === null) {
    throw new TypeError(`Can not find message descriptor by type_url: ${typeUrl}`);
  }
  return message;
}

/** JSON format printer for protocol message, like _Printer of Python. */
class _Printer {
  constructor({ preservingProtoFieldName, useIntegersForEnums, floatPrecision, alwaysPrintFieldsWithNoPresence }) {
    this.alwaysPrintFieldsWithNoPresence = alwaysPrintFieldsWithNoPresence;
    this.preservingProtoFieldName = preservingProtoFieldName;
    this.useIntegersForEnums = useIntegersForEnums;
    this.floatPrecision = floatPrecision || null;
  }

  /**
   * Converts a message to an object according to the proto3 JSON specification: a Map for a JSON object (in the
   * order of its keys), _Float for a float.
   */
  messageToJsonObject(message) {
    const descriptor = defaultPool().descriptorOf(message);
    if (_isWrapperMessage(descriptor)) return this._wrapperMessageToJsonObject(message, descriptor);
    const wellKnownType = this._wellKnownTypeToJsonObject(message, descriptor);
    if (wellKnownType !== undefined) return wellKnownType;
    return this._regularMessageToJsonObject(message, new Map(), descriptor);
  }

  /** The JSON value of a well known type, undefined for the other messages. */
  _wellKnownTypeToJsonObject(message, descriptor) {
    switch (descriptor.fullName) {
      case 'google.protobuf.Any':
        return this._anyMessageToJsonObject(message);
      case 'google.protobuf.Duration':
        return _durationToJsonString(message);
      case 'google.protobuf.FieldMask':
        return message.getPathsList().map(_snakeCaseToCamelCase).join(',');
      case 'google.protobuf.ListValue':
        return this._listValueMessageToJsonObject(message);
      case 'google.protobuf.Struct':
        return this._structMessageToJsonObject(message);
      case 'google.protobuf.Timestamp':
        return _timestampToJsonString(message);
      case 'google.protobuf.Value':
        return this._valueMessageToJsonObject(message);
      default:
        return undefined;
    }
  }

  _regularMessageToJsonObject(message, js, descriptor) {
    let currentField = null;
    try {
      for (const [field, value] of _listFields(message)) {
        currentField = field;
        const name = this.preservingProtoFieldName ? field.name : field.jsonName;
        if (field.isMap) {
          const valueField = field.messageType.fieldsByName.get('value');
          const jsMap = new Map();
          value.forEach((entryValue, key) => {
            jsMap.set(String(key), this._fieldToJsonObject(valueField, entryValue));
          });
          js.set(name, jsMap);
        } else if (field.isRepeated) {
          js.set(
            name,
            value.map(item => this._fieldToJsonObject(field, item)),
          );
        } else {
          js.set(name, this._fieldToJsonObject(field, value));
        }
      }

      // The fields without presence which were not serialized, with their default value.
      if (this.alwaysPrintFieldsWithNoPresence) {
        for (const field of descriptor.fields) {
          currentField = field;
          if (field.hasPresence) continue;
          const name = this.preservingProtoFieldName ? field.name : field.jsonName;
          if (js.has(name)) continue;
          if (field.isMap) js.set(name, new Map());
          else if (field.isRepeated) js.set(name, []);
          else js.set(name, this._fieldToJsonObject(field, _defaultValue(field)));
        }
      }
    } catch (e) {
      if (e instanceof _ValueError) {
        throw new SerializeToJsonError(`Failed to serialize ${currentField.name} field: ${e.message}.`);
      }
      throw e;
    }
    return js;
  }

  /** Converts a field value according to the proto3 JSON specification. */
  _fieldToJsonObject(field, value) {
    if (field.isMessage) return this.messageToJsonObject(value);
    switch (field.type) {
      case FieldType.ENUM: {
        if (this.useIntegersForEnums) return value;
        if (field.enumType.fullName === 'google.protobuf.NullValue') return null;
        const enumValue = field.enumType.valuesByNumber.get(value);
        if (enumValue !== undefined) return enumValue.name;
        if (field.enumType.isClosed) {
          throw new SerializeToJsonError('Enum field contains an integer value which can not mapped to an enum value.');
        }
        return value;
      }
      case FieldType.BYTES:
        // Use base64 Data encoding for bytes (jspb gives the ones of the maps as base64 strings).
        return typeof value === 'string' ? value : Buffer.from(value).toString('base64');
      case FieldType.STRING:
        return String(value);
      case FieldType.BOOL:
        return Boolean(value);
      case FieldType.FLOAT:
      case FieldType.DOUBLE: {
        // A float field holds a 32 bits float in Python.
        const number = field.type === FieldType.FLOAT ? Math.fround(value) : value;
        if (number === Infinity) return _INFINITY;
        if (number === -Infinity) return _NEG_INFINITY;
        if (Number.isNaN(number)) return _NAN;
        if (field.type === FieldType.FLOAT) {
          return new _Float(
            this.floatPrecision ? _roundToPrecision(number, this.floatPrecision) : _toShortestFloat(number),
          );
        }
        return new _Float(number);
      }
      default:
        return _INT64_TYPES.has(field.type) ? _intToString(value) : value;
    }
  }

  /** Converts an Any message according to the proto3 JSON specification. */
  _anyMessageToJsonObject(message) {
    if (_listFields(message).length === 0) return new Map();
    // Must print @type first.
    const js = new Map();
    const typeUrl = message.getTypeUrl();
    js.set('@type', typeUrl);
    const cls = _createMessageFromTypeUrl(typeUrl).constructor;
    const subMessage = cls.deserializeBinary(message.getValue_asU8());
    const descriptor = defaultPool().descriptorOf(subMessage);
    if (_isWrapperMessage(descriptor)) {
      js.set('value', this._wrapperMessageToJsonObject(subMessage, descriptor));
      return js;
    }
    const wellKnownType = this._wellKnownTypeToJsonObject(subMessage, descriptor);
    if (wellKnownType !== undefined) {
      js.set('value', wellKnownType);
      return js;
    }
    return this._regularMessageToJsonObject(subMessage, js, descriptor);
  }

  /** Converts a Value message according to the proto3 JSON specification. */
  _valueMessageToJsonObject(message) {
    const descriptor = defaultPool().descriptorOf(message);
    const which = _whichOneof(message, descriptor.oneofs[0]);
    // If the Value message is not set treat as null_value when serialize to JSON. The parse back result will be
    // different from original message.
    if (which === null || which === 'null_value') return null;
    if (which === 'list_value') return this._listValueMessageToJsonObject(message.getListValue());
    const field = descriptor.fieldsByName.get(which);
    const value = _getValue(message, field);
    if (which === 'number_value') {
      if (value === Infinity || value === -Infinity) {
        throw new _ValueError('Fail to serialize Infinity for Value.number_value, which would parse as string_value');
      }
      if (Number.isNaN(value)) {
        throw new _ValueError('Fail to serialize NaN for Value.number_value, which would parse as string_value');
      }
    }
    return this._fieldToJsonObject(field, value);
  }

  /** Converts a ListValue message according to the proto3 JSON specification. */
  _listValueMessageToJsonObject(message) {
    return message.getValuesList().map(value => this._valueMessageToJsonObject(value));
  }

  /** Converts a Struct message according to the proto3 JSON specification. */
  _structMessageToJsonObject(message) {
    const ret = new Map();
    message.getFieldsMap().forEach((value, key) => ret.set(key, this._valueMessageToJsonObject(value)));
    return ret;
  }

  _wrapperMessageToJsonObject(message, descriptor) {
    const field = descriptor.fieldsByName.get('value');
    return this._fieldToJsonObject(field, _getValue(message, field));
  }
}

/** The default value of a scalar field without presence. */
function _defaultValue(field) {
  switch (field.type) {
    case FieldType.STRING:
      return '';
    case FieldType.BYTES:
      return new Uint8Array(0);
    case FieldType.BOOL:
      return false;
    case FieldType.ENUM:
      return field.enumType.values[0]?.number ?? 0;
    default:
      return 0;
  }
}

/** A plain object for a JSON object of the printer (with the '__proto__' keys as own properties). */
function _toPlain(value) {
  if (value instanceof _Float) return value.value;
  if (Array.isArray(value)) return value.map(_toPlain);
  if (value instanceof Map) {
    const object = {};
    for (const [key, item] of value) {
      Object.defineProperty(object, key, {
        value: _toPlain(item),
        enumerable: true,
        writable: true,
        configurable: true,
      });
    }
    return object;
  }
  return value;
}

/** Compares two strings by code point, like sorted() in Python. */
function _compareCodePoints(a, b) {
  const [codesA, codesB] = [a, b].map(text => Array.from(text, char => char.codePointAt(0)));
  for (let i = 0; i < Math.min(codesA.length, codesB.length); i++) {
    if (codesA[i] !== codesB[i]) return codesA[i] - codesB[i];
  }
  return codesA.length - codesB.length;
}

/**
 * A JSON object of the printer as text, like json.dumps() in Python.
 * @param {*} value
 * @param {?string} indent The indent of a level, null for no newlines.
 * @param {boolean} sortKeys
 * @param {boolean} ensureAscii
 * @param {number} level
 * @returns {string}
 */
function _dumps(value, indent, sortKeys, ensureAscii, level = 0) {
  if (value === null || value === undefined) return 'null';
  if (value === true) return 'true';
  if (value === false) return 'false';
  if (value instanceof _Float) {
    if (Number.isNaN(value.value)) return 'NaN';
    if (!Number.isFinite(value.value)) return value.value > 0 ? 'Infinity' : '-Infinity';
    return _pythonFloatRepr(value.value);
  }
  if (typeof value === 'number') return _intToString(value);
  if (typeof value === 'string') {
    const pattern = ensureAscii ? _ESCAPE_ASCII : _ESCAPE;
    const escaped = value.replace(
      pattern,
      char => _ESCAPES[char] ?? `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`,
    );
    return `"${escaped}"`;
  }

  let items;
  let open;
  let close;
  if (Array.isArray(value)) {
    items = value.map(item => _dumps(item, indent, sortKeys, ensureAscii, level + 1));
    [open, close] = ['[', ']'];
  } else {
    let entries = [...value];
    if (sortKeys) entries = entries.sort((a, b) => _compareCodePoints(a[0], b[0]));
    items = entries.map(
      ([key, item]) =>
        `${_dumps(key, indent, sortKeys, ensureAscii)}: ${_dumps(item, indent, sortKeys, ensureAscii, level + 1)}`,
    );
    [open, close] = ['{', '}'];
  }
  if (items.length === 0) return `${open}${close}`;
  if (indent === null) return `${open}${items.join(', ')}${close}`;
  const newlineIndent = `\n${indent.repeat(level + 1)}`;
  return `${open}${newlineIndent}${items.join(`,${newlineIndent}`)}\n${indent.repeat(level)}${close}`;
}

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
function messageToJson(
  message,
  {
    preservingProtoFieldName = false,
    indent = 2,
    sortKeys = false,
    useIntegersForEnums = false,
    floatPrecision = null,
    ensureAscii = true,
    alwaysPrintFieldsWithNoPresence = false,
  } = {},
) {
  const printer = new _Printer({
    preservingProtoFieldName,
    useIntegersForEnums,
    floatPrecision,
    alwaysPrintFieldsWithNoPresence,
  });
  const js = printer.messageToJsonObject(message);
  const indentText = typeof indent === 'number' ? ' '.repeat(Math.max(indent, 0)) : indent;
  return _dumps(js, indentText, sortKeys, ensureAscii);
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
function messageToDict(
  message,
  {
    alwaysPrintFieldsWithNoPresence = false,
    preservingProtoFieldName = false,
    useIntegersForEnums = false,
    floatPrecision = null,
  } = {},
) {
  const printer = new _Printer({
    preservingProtoFieldName,
    useIntegersForEnums,
    floatPrecision,
    alwaysPrintFieldsWithNoPresence,
  });
  return _toPlain(printer.messageToJsonObject(message));
}

module.exports = {
  JsonFormatError,
  SerializeToJsonError,
  messageToDict,
  messageToJson,
};

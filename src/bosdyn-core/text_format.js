/**
 * @file The text format of the protobuf messages, like google.protobuf.text_format in Python: printing and parsing.
 */

'use strict';

/**
 * The protobuf text format for the messages of the SDK, like google.protobuf.text_format of Python (protobuf 5.29):
 * messageToString() prints a message, parse() and merge() read one. The fields are found in the descriptors of
 * descriptor_pool.js, so their names are the ones of the .proto files.
 *
 * Differences with Python: floatFormat and doubleFormat are functions instead of format specifications, the
 * extensions and the groups are not supported (the protos of the SDK have none), the unknown fields are not printed
 * (jspb drops them) and the \N{name} escapes are not supported.
 */

const { Buffer } = require('node:buffer');

const { FieldType, defaultPool } = require('./descriptor_pool');

const _ANY_FULL_TYPE_NAME = 'google.protobuf.Any';
const _FLOAT_INFINITY = /^-?inf(?:inity)?f?$/i;
const _FLOAT_NAN = /^nanf?$/i;
const _QUOTES = new Set(["'", '"']);

// The whitespace of Python (str.isspace()).
const _WHITESPACE_CHARS = '\\t-\\r\\x1c-\\x20\\x85\\xa0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000';
const _WHITESPACE_OR_COMMENT = new RegExp(`(?:[${_WHITESPACE_CHARS}]|#[^\\n]*)+`, 'y');
const _TOKEN = new RegExp(
  [
    // An identifier.
    '[a-zA-Z_][0-9a-zA-Z_+-]*',
    // A number.
    '(?:[0-9+-]|\\.[0-9])[0-9a-zA-Z_.+-]*',
    // A quoted string for each quote mark.
    ...[..._QUOTES].map(qt => `${qt}[^${qt}\\n\\\\]*(?:(?:\\\\[^\\n])+[^${qt}\\n\\\\]*)*(?:${qt}|\\\\?$)`),
  ].join('|'),
  'y',
);
const _IDENTIFIER = /^(?!\p{Nd})[\p{L}\p{N}_]/u;
const _IDENTIFIER_OR_NUMBER = /^[\p{L}\p{N}_]/u;

const _INT32 = [-(2n ** 31n), 2n ** 31n - 1n];
const _UINT32 = [0n, 2n ** 32n - 1n];
const _INT64 = [-(2n ** 63n), 2n ** 63n - 1n];
const _UINT64 = [0n, 2n ** 64n - 1n];

const _UTF8 = new TextDecoder('utf-8', { fatal: true });

/** Top-level module error for text_format. */
class TextFormatError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

/** Thrown in case of text parsing or tokenizing error. */
class ParseError extends TextFormatError {
  /**
   * @param {?string} [message=null]
   * @param {?number} [line=null] The line of the error, from 1.
   * @param {?number} [column=null] The column of the error, from 1.
   */
  constructor(message = null, line = null, column = null) {
    let text = message;
    if (message !== null && line !== null) {
      let loc = String(line);
      if (column !== null) loc += `:${column}`;
      text = `${loc} : ${message}`;
    }
    super(text ?? '');
    this._line = line;
    this._column = column;
  }

  getLine() {
    return this._line;
  }

  getColumn() {
    return this._column;
  }
}

/** A value that cannot be parsed (ValueError in Python), reported as a ParseError by the tokenizer. */
class _ValueError extends Error {}

/**
 * The entry of a map field: jspb has no class for them.
 */
class _MapEntry {
  /**
   * @param {import('./descriptor_pool').Descriptor} descriptor
   * @param {*} [key]
   * @param {*} [value]
   */
  constructor(descriptor, key = undefined, value = undefined) {
    this.descriptor = descriptor;
    this.key = key;
    this.value = value;
  }
}

/**
 * @param {import('google-protobuf').Message|_MapEntry} message
 * @returns {import('./descriptor_pool').Descriptor}
 */
function _descriptorOf(message) {
  return message instanceof _MapEntry ? message.descriptor : defaultPool().descriptorOf(message);
}

// ---------------------------------------------------------------------------------------------------------------
// Access to the fields of the jspb messages and of the map entries.
// ---------------------------------------------------------------------------------------------------------------

/**
 * The accessor of a field on a message, which must exist.
 * @param {import('google-protobuf').Message} message
 * @param {import('./descriptor_pool').FieldDescriptor} field
 * @param {string} kind get, getU8, set, add, has or clear.
 * @returns {Function}
 */
function _accessor(message, field, kind) {
  const name = field.accessors[kind];
  const method = message[name];
  if (typeof method !== 'function') {
    throw new TypeError(
      `${field.containingType.fullName} has no ${name}() for its field ${field.name}: ` +
        'the generated code does not match src/bosdyn/descriptor_set.pb (run npm run build)',
    );
  }
  return method;
}

/**
 * The value of a field: a message, a scalar (Uint8Array for bytes), an array for a repeated field or the jspb.Map of
 * a map field.
 */
function _getValue(message, field) {
  if (message instanceof _MapEntry) {
    return field.number === 1 ? message.key : message.value;
  }
  const kind = field.type === FieldType.BYTES && !field.isMap ? 'getU8' : 'get';
  return _accessor(message, field, kind).call(message);
}

/** Whether a field with presence is set. */
function _hasField(message, field) {
  if (message instanceof _MapEntry) {
    return _getValue(message, field) !== undefined;
  }
  return _accessor(message, field, 'has').call(message);
}

/** Whether a scalar is not the default value of its type (bool() in Python). */
function _isTruthy(field, value) {
  if (value === undefined || value === null) return false;
  if (field.isJsString) {
    try {
      return BigInt(value) !== 0n;
    } catch {
      return value !== '';
    }
  }
  if (typeof value === 'string' || value instanceof Uint8Array) return value.length > 0;
  return Boolean(value) || Number.isNaN(value);
}

function _setValue(message, field, value) {
  if (message instanceof _MapEntry) {
    if (field.number === 1) message.key = value;
    else message.value = value;
    return;
  }
  _accessor(message, field, 'set').call(message, value);
}

function _appendValue(message, field, value) {
  _accessor(message, field, 'add').call(message, value);
}

/** Appends a new message to a repeated field and returns it. */
function _addMessage(message, field) {
  return _accessor(message, field, 'add').call(message);
}

/** The message of a singular field, set in its parent if it was not (SetInParent() in Python). */
function _mutableMessage(message, field) {
  let subMessage = _getValue(message, field);
  if (subMessage === undefined || subMessage === null) {
    const cls = defaultPool().messageClass(field.messageType);
    subMessage = new cls();
    _setValue(message, field, subMessage);
  }
  return subMessage;
}

/**
 * The name of the field of a oneof which is set, like WhichOneof() in Python.
 * @returns {?string}
 */
function _whichOneof(message, oneof) {
  return oneof.fields.find(field => _hasField(message, field))?.name ?? null;
}

/** The default value of a scalar field, for the map entries. */
function _defaultScalar(field) {
  switch (field.type) {
    case FieldType.STRING:
      return '';
    case FieldType.BYTES:
      return new Uint8Array(0);
    case FieldType.BOOL:
      return false;
    default:
      return field.isJsString ? '0' : 0;
  }
}

/** Stores a parsed map entry in the map of its field. */
function _storeMapEntry(message, field, entry) {
  const map = _getValue(message, field);
  const [keyField, valueField] = [1, 2].map(number => entry.descriptor.fieldsByNumber.get(number));
  const key = entry.key ?? _defaultScalar(keyField);
  let value = entry.value;
  if (value === undefined) {
    value = valueField.isMessage
      ? new (defaultPool().messageClass(valueField.messageType))()
      : _defaultScalar(valueField);
  }
  map.set(key, value);
}

/**
 * The fields which are set, with their value, in the order of their numbers, like ListFields() in Python.
 * @returns {Array<[import('./descriptor_pool').FieldDescriptor, *]>}
 */
function _listFields(message) {
  const fields = [];
  for (const field of _descriptorOf(message).fieldsInNumberOrder) {
    if (field.isRepeated) {
      const value = _getValue(message, field);
      if (field.isMap ? value.getLength() > 0 : value.length > 0) fields.push([field, value]);
    } else if (field.hasPresence) {
      if (_hasField(message, field)) fields.push([field, _getValue(message, field)]);
    } else {
      const value = _getValue(message, field);
      if (_isTruthy(field, value)) fields.push([field, value]);
    }
  }
  return fields;
}

/**
 * A new message of a type (e.g. the one of a google.protobuf.Any), or null if the type is unknown.
 * @param {string} typeName The full name of the type.
 * @returns {?import('google-protobuf').Message}
 */
function _buildMessageFromTypeName(typeName) {
  const pool = defaultPool();
  const descriptor = pool.findMessageTypeByName(typeName);
  if (descriptor === null || descriptor.isMapEntry) return null;
  const cls = pool.messageClass(descriptor);
  return new cls();
}

// ---------------------------------------------------------------------------------------------------------------
// Values.
// ---------------------------------------------------------------------------------------------------------------

/**
 * The repr() of a float in Python: the shortest digits that give the value back, in fixed notation from 1e-4 to
 * 1e16 (with at least one decimal).
 * @param {number} value
 * @returns {string}
 */
function _pythonFloatRepr(value) {
  if (Number.isNaN(value)) return 'nan';
  if (value === Infinity) return 'inf';
  if (value === -Infinity) return '-inf';
  if (value === 0) return Object.is(value, -0) ? '-0.0' : '0.0';
  const [mantissa, exponentText] = value.toExponential().split('e');
  const exponent = Number(exponentText);
  const sign = mantissa.startsWith('-') ? '-' : '';
  const digits = mantissa.replace('-', '').replace('.', '');
  if (exponent < -4 || exponent >= 16) {
    const fraction = digits.length > 1 ? `.${digits.slice(1)}` : '';
    const exponentSign = exponent < 0 ? '-' : '+';
    return `${sign}${digits[0]}${fraction}e${exponentSign}${String(Math.abs(exponent)).padStart(2, '0')}`;
  }
  if (exponent < 0) return `${sign}0.${'0'.repeat(-exponent - 1)}${digits}`;
  const integer = digits.slice(0, exponent + 1).padEnd(exponent + 1, '0');
  return `${sign}${integer}.${digits.slice(exponent + 1) || '0'}`;
}

/**
 * The significant digits of the exact decimal value of a positive float.
 * @param {number} value
 * @returns {string}
 */
function _exactDigits(value) {
  const view = new DataView(new ArrayBuffer(8));
  view.setFloat64(0, value);
  const bits = view.getBigUint64(0);
  const biasedExponent = Number((bits >> 52n) & 0x7ffn);
  let mantissa = bits & ((1n << 52n) - 1n);
  let exponent = -1074;
  if (biasedExponent !== 0) {
    mantissa |= 1n << 52n;
    exponent = biasedExponent - 1075;
  }
  // mantissa * 2^exponent = mantissa * 5^-exponent / 10^-exponent.
  const digits = exponent >= 0 ? mantissa << BigInt(exponent) : mantissa * 5n ** BigInt(-exponent);
  return digits.toString().replace(/0+$/, '');
}

/**
 * A float rounded to significant digits like float('{0:.{1}g}'.format(value, precision)) in Python: the ties are
 * rounded to the even digit, where toPrecision() rounds them up.
 * @param {number} value
 * @param {number} precision
 * @returns {number}
 */
function _roundToPrecision(value, precision) {
  const rounded = value.toExponential(precision - 1);
  if (value === 0 || !Number.isFinite(value)) return Number(rounded);
  // A tie has a 5 after the digits (the exact digits are only computed then).
  const moreDigits = value.toExponential(precision);
  if (moreDigits[moreDigits.indexOf('e') - 1] !== '5') return Number(rounded);
  const digits = _exactDigits(Math.abs(value));
  if (digits.length === precision + 1 && digits.endsWith('5') && Number(digits[precision - 1]) % 2 === 0) {
    // Without a carry: the exponent of the rounded value is the one of the value.
    const exponent = rounded.slice(rounded.indexOf('e'));
    const fraction = precision > 1 ? `.${digits.slice(1, precision)}` : '';
    return Number(`${value < 0 ? '-' : ''}${digits[0]}${fraction}${exponent}`);
  }
  return Number(rounded);
}

/**
 * The shortest float with the same value on the wire (as a 32 bits float), like type_checkers.ToShortestFloat().
 * @param {number} original A 32 bits float.
 * @returns {number}
 */
function _toShortestFloat(original) {
  let precision = 6;
  let rounded = _roundToPrecision(original, precision);
  while (Math.fround(rounded) !== original) {
    precision += 1;
    rounded = _roundToPrecision(original, precision);
  }
  return rounded;
}

/**
 * The text of an integer field: its exact value.
 * @param {number|string} value A number, or a string for the [jstype = JS_STRING] fields.
 * @returns {string}
 */
function _intToString(value) {
  if (typeof value === 'number' && Number.isInteger(value)) return BigInt(value).toString();
  try {
    return BigInt(value).toString();
  } catch {
    return String(value);
  }
}

// Maps a code of ASCII to its escape, like text_encoding._str_escapes.
const _STR_ESCAPES = (() => {
  const escapes = new Map();
  for (let i = 0; i < 128; i++) {
    if (i < 32 || i === 127) escapes.set(i, `\\${i.toString(8).padStart(3, '0')}`);
  }
  escapes.set(0x09, '\\t');
  escapes.set(0x0a, '\\n');
  escapes.set(0x0d, '\\r');
  escapes.set(0x22, '\\"');
  escapes.set(0x27, "\\'");
  escapes.set(0x5c, '\\\\');
  return escapes;
})();

/**
 * Escapes a string or bytes for a text protocol buffer, like text_encoding.CEscape().
 * @param {string|Uint8Array} text
 * @param {boolean} asUtf8 For a string: whether the non-ASCII characters are kept (else their UTF-8 bytes are escaped).
 * @returns {string}
 */
function cEscape(text, asUtf8) {
  if (typeof text === 'string' && asUtf8) {
    let result = '';
    for (const char of text) {
      const code = char.codePointAt(0);
      result += code < 128 ? (_STR_ESCAPES.get(code) ?? char) : char;
    }
    return result;
  }
  const bytes = typeof text === 'string' ? Buffer.from(text, 'utf8') : text;
  let result = '';
  for (const byte of bytes) {
    result += byte >= 128 ? `\\${byte.toString(8)}` : (_STR_ESCAPES.get(byte) ?? String.fromCharCode(byte));
  }
  return result;
}

/**
 * The message of a UnicodeDecodeError of Python.
 * @param {string} codec
 * @param {ArrayLike<number>} bytes
 * @param {number} start The position of the first bad byte.
 * @param {number} end The position after the last bad byte.
 * @param {string} reason
 * @returns {string}
 */
function _decodeError(codec, bytes, start, end, reason) {
  if (end === start + 1) {
    const byte = bytes[start].toString(16).padStart(2, '0');
    return `'${codec}' codec can't decode byte 0x${byte} in position ${start}: ${reason}`;
  }
  return `'${codec}' codec can't decode bytes in position ${start}-${end - 1}: ${reason}`;
}

/**
 * The message of a UnicodeEncodeError of Python, for the run of bad characters from a position.
 * @param {string} codec
 * @param {number[]} codes The code points of the text.
 * @param {number} start The position of the first bad character.
 * @param {function(number): boolean} isBad
 * @param {string} reason
 * @returns {string}
 */
function _encodeError(codec, codes, start, isBad, reason) {
  let end = start + 1;
  while (end < codes.length && isBad(codes[end])) end++;
  if (end > start + 1) return `'${codec}' codec can't encode characters in position ${start}-${end - 1}: ${reason}`;
  const code = codes[start];
  const char =
    code <= 0xff
      ? `\\x${code.toString(16).padStart(2, '0')}`
      : code <= 0xffff
        ? `\\u${code.toString(16).padStart(4, '0')}`
        : `\\U${code.toString(16).padStart(8, '0')}`;
  return `'${codec}' codec can't encode character '${char}' in position ${start}: ${reason}`;
}

/** The value of a hexadecimal digit (a code), -1 if it is not one. */
function _hexDigit(code) {
  if (code >= 0x30 && code <= 0x39) return code - 0x30;
  if (code >= 0x61 && code <= 0x66) return code - 0x57;
  if (code >= 0x41 && code <= 0x46) return code - 0x37;
  return -1;
}

/**
 * Decodes the hexadecimal digits of an escape, from a position: the code point and the position after them.
 * @throws {_ValueError} A digit is missing, with the message of the codec.
 */
function _hexEscape(codec, bytes, start, i, count, reason) {
  let code = 0;
  for (let n = 0; n < count; n++, i++) {
    const digit = i < bytes.length ? _hexDigit(bytes[i]) : -1;
    if (digit < 0) throw new _ValueError(_decodeError(codec, bytes, start, i, reason));
    code = code * 16 + digit;
  }
  return [code, i];
}

/**
 * The code points of a text with its \u and \U escapes decoded, like str.encode('raw_unicode_escape')
 * .decode('raw_unicode_escape') in Python (an escaped surrogate stays a code point).
 * @param {string} text
 * @returns {number[]}
 */
function _decodeRawUnicodeEscapes(text) {
  // The characters beyond Latin-1 are escaped by the encoding.
  const encoded = [];
  for (const char of text) {
    const code = char.codePointAt(0);
    if (code < 0x100) encoded.push(code);
    else if (code < 0x10000) encoded.push(...Buffer.from(`\\u${code.toString(16).padStart(4, '0')}`));
    else encoded.push(...Buffer.from(`\\U${code.toString(16).padStart(8, '0')}`));
  }
  const codes = [];
  for (let i = 0; i < encoded.length;) {
    const start = i;
    const code = encoded[i++];
    if (code !== 0x5c || i >= encoded.length) {
      codes.push(code);
      continue;
    }
    const next = encoded[i++];
    const count = next === 0x75 ? 4 : next === 0x55 ? 8 : 0;
    if (count === 0) {
      codes.push(code, next);
      continue;
    }
    const reason = count === 4 ? 'truncated \\uXXXX escape' : 'truncated \\UXXXXXXXX escape';
    let escaped;
    [escaped, i] = _hexEscape('rawunicodeescape', encoded, start, i, count, reason);
    if (escaped > 0x10ffff) {
      throw new _ValueError(_decodeError('rawunicodeescape', encoded, start, i, '\\Uxxxxxxxx out of range'));
    }
    codes.push(escaped);
  }
  return codes;
}

/**
 * The C escapes of UTF-8 bytes decoded like bytes.decode('unicode_escape') in Python: the other bytes are Latin-1
 * characters.
 * @param {Uint8Array} bytes
 * @returns {number[]} The code points.
 */
function _decodeUnicodeEscapes(bytes) {
  const simple = { '\\': 0x5c, "'": 0x27, '"': 0x22, a: 7, b: 8, f: 12, n: 10, r: 13, t: 9, v: 11 };
  const codes = [];
  for (let i = 0; i < bytes.length;) {
    const start = i;
    const byte = bytes[i++];
    if (byte !== 0x5c) {
      codes.push(byte);
      continue;
    }
    if (i >= bytes.length) {
      throw new _ValueError(_decodeError('unicodeescape', bytes, start, bytes.length, '\\ at end of string'));
    }
    const char = String.fromCharCode(bytes[i++]);
    if (Object.hasOwn(simple, char)) {
      codes.push(simple[char]);
    } else if (char >= '0' && char <= '7') {
      let code = Number(char);
      for (let n = 0; n < 2 && i < bytes.length && bytes[i] >= 0x30 && bytes[i] <= 0x37; n++) {
        code = code * 8 + (bytes[i++] - 0x30);
      }
      codes.push(code);
    } else if (char === 'x' || char === 'u' || char === 'U') {
      const count = { x: 2, u: 4, U: 8 }[char];
      const reason = `truncated \\${char}${'X'.repeat(count)} escape`;
      let code;
      [code, i] = _hexEscape('unicodeescape', bytes, start, i, count, reason);
      if (code > 0x10ffff) {
        throw new _ValueError(_decodeError('unicodeescape', bytes, start, i, 'illegal Unicode character'));
      }
      codes.push(code);
    } else if (char === 'N') {
      const malformed = end => _decodeError('unicodeescape', bytes, start, end, 'malformed \\N character escape');
      if (bytes[i] !== 0x7b) throw new _ValueError(malformed(Math.min(i, bytes.length)));
      const close = bytes.indexOf(0x7d, i + 1);
      if (close < 0) throw new _ValueError(malformed(bytes.length));
      if (close === i + 1) throw new _ValueError(malformed(close));
      // The names of the Unicode database are not available.
      throw new _ValueError('\\N{name} escapes are not supported');
    } else if (char !== '\n') {
      // An invalid escape is kept, like in Python.
      codes.push(0x5c, bytes[i - 1]);
    }
  }
  return codes;
}

/**
 * The UTF-8 bytes of code points, like str.encode('utf-8') in Python.
 * @param {number[]} codes
 * @returns {Buffer}
 */
function _encodeUtf8(codes) {
  const isSurrogate = code => code >= 0xd800 && code <= 0xdfff;
  const surrogate = codes.findIndex(isSurrogate);
  if (surrogate >= 0) {
    throw new _ValueError(_encodeError('utf-8', codes, surrogate, isSurrogate, 'surrogates not allowed'));
  }
  let text = '';
  for (const code of codes) text += String.fromCodePoint(code);
  return Buffer.from(text, 'utf8');
}

/**
 * The text of UTF-8 bytes, like bytes.decode('utf-8') in Python.
 * @param {Uint8Array} bytes
 * @returns {string}
 * @throws {_ValueError} The bytes are not UTF-8, with the message of Python.
 */
function _decodeUtf8(bytes) {
  try {
    return _UTF8.decode(bytes);
  } catch {
    // The first error, like the decoder of Python.
  }
  const isContinuation = byte => byte >= 0x80 && byte <= 0xbf;
  for (let i = 0; i < bytes.length;) {
    const byte = bytes[i];
    const length = byte < 0x80 ? 1 : byte < 0xc2 ? 0 : byte < 0xe0 ? 2 : byte < 0xf0 ? 3 : byte < 0xf5 ? 4 : 0;
    if (length === 0) throw new _ValueError(_decodeError('utf-8', bytes, i, i + 1, 'invalid start byte'));
    // The range of the second byte of the sequences which are not overlong nor surrogates.
    const [low, high] = { 0xe0: [0xa0, 0xbf], 0xed: [0x80, 0x9f], 0xf0: [0x90, 0xbf], 0xf4: [0x80, 0x8f] }[byte] ?? [
      0x80, 0xbf,
    ];
    for (let n = 1; n < length; n++) {
      if (i + n >= bytes.length) {
        throw new _ValueError(_decodeError('utf-8', bytes, i, bytes.length, 'unexpected end of data'));
      }
      const next = bytes[i + n];
      if (n === 1 ? next < low || next > high : !isContinuation(next)) {
        throw new _ValueError(_decodeError('utf-8', bytes, i, i + n, 'invalid continuation byte'));
      }
    }
    i += length;
  }
  throw new _ValueError("'utf-8' codec can't decode the bytes");
}

/**
 * Unescapes a text string with C-style escape sequences to UTF-8 bytes, like text_encoding.CUnescape(): the escapes
 * are decoded in the same passes, with the same errors.
 * @param {string} text
 * @returns {Buffer}
 */
function cUnescape(text) {
  // Only replace the match if the number of leading back slashes is odd: '\xf' becomes '\x0f'.
  const result = text.replace(/(\\+)x([0-9a-fA-F])(?![0-9a-fA-F])/g, (match, slashes, digit) =>
    slashes.length % 2 ? `${slashes}x0${digit}` : match,
  );
  const codes = _decodeUnicodeEscapes(_encodeUtf8(_decodeRawUnicodeEscapes(result)));
  const isBad = code => code > 0xff;
  const position = codes.findIndex(isBad);
  if (position >= 0) {
    throw new _ValueError(_encodeError('latin-1', codes, position, isBad, 'ordinal not in range(256)'));
  }
  return Buffer.from(codes);
}

/** int(text, 0) in Python, as a BigInt, or null if the text is not an integer. */
function _pythonInt(text) {
  const match =
    /^([+-]?)(?:0[xX]((?:_?[0-9a-fA-F])+)|0[oO]((?:_?[0-7])+)|0[bB]((?:_?[01])+)|(0(?:_?0)*)|([1-9](?:_?\d)*))$/.exec(
      text,
    );
  if (!match) return null;
  const [, sign, hex, octal, binary, zero, decimal] = match;
  const prefix = hex !== undefined ? '0x' : octal !== undefined ? '0o' : binary !== undefined ? '0b' : '';
  const value = BigInt(prefix + (hex ?? octal ?? binary ?? zero ?? decimal).replace(/_/g, ''));
  return sign === '-' ? -value : value;
}

/** float(text) in Python, or null if the text is not a float. */
function _pythonFloat(text) {
  if (/^[+-]?(?:inf|infinity)$/i.test(text)) return text.startsWith('-') ? -Infinity : Infinity;
  if (/^[+-]?nan$/i.test(text)) return NaN;
  if (/^[+-]?(?:\d(?:_?\d)*(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?$/.test(text)) {
    return Number(text.replace(/_/g, ''));
  }
  return null;
}

/**
 * Parses an integer without checking size/signedness, like _ParseAbstractInteger() in Python.
 * @param {string} text
 * @returns {bigint}
 */
function _parseAbstractInteger(text) {
  // The C octal numbers: 0755.
  const octal = /^(-?)0(\d+)$/.exec(text);
  const value = _pythonInt(octal ? `${octal[1]}0o${octal[2]}` : text);
  if (value === null) throw new _ValueError(`Couldn't parse integer: ${text}`);
  return value;
}

/**
 * Parses an integer.
 * @param {string} text The text to parse.
 * @param {boolean} [isSigned=false] True if a signed integer must be parsed.
 * @param {boolean} [isLong=false] True if a long integer must be parsed.
 * @returns {bigint}
 */
function parseInteger(text, isSigned = false, isLong = false) {
  const result = _parseAbstractInteger(text);
  const [min, max] = isLong ? (isSigned ? _INT64 : _UINT64) : isSigned ? _INT32 : _UINT32;
  if (result < min || result > max) throw new _ValueError(`Value out of range: ${result}`);
  return result;
}

/**
 * Parses a floating point number: also inf, infinity, nan and the '1.0f' format.
 * @param {string} text
 * @returns {number}
 */
function parseFloat(text) {
  const value = _pythonFloat(text);
  if (value !== null) return value;
  if (_FLOAT_INFINITY.test(text)) return text[0] === '-' ? -Infinity : Infinity;
  if (_FLOAT_NAN.test(text)) return NaN;
  const withoutSuffix = _pythonFloat(text.replace(/f+$/, ''));
  if (withoutSuffix !== null) return withoutSuffix;
  throw new _ValueError(`Couldn't parse float: ${text}`);
}

/**
 * Parses a boolean value.
 * @param {string} text
 * @returns {boolean}
 */
function parseBool(text) {
  if (['true', 't', '1', 'True'].includes(text)) return true;
  if (['false', 'f', '0', 'False'].includes(text)) return false;
  throw new _ValueError('Expected "true" or "false".');
}

/**
 * Parses an enum value: its number or its name.
 * @param {import('./descriptor_pool').FieldDescriptor} field
 * @param {string} value
 * @returns {number}
 */
function parseEnum(field, value) {
  const enumType = field.enumType;
  const number = _pythonInt(value);
  if (number === null) {
    const enumValue = enumType.valuesByName.get(value);
    if (enumValue === undefined) {
      throw new _ValueError(`Enum type "${enumType.fullName}" has no value named ${value}.`);
    }
    return enumValue.number;
  }
  if (number < _INT32[0] || number > _INT32[1]) throw new _ValueError(`Value out of range: ${number}`);
  if (!enumType.isClosed) return Number(number);
  const enumValue = enumType.valuesByNumber.get(Number(number));
  if (enumValue === undefined) {
    throw new _ValueError(`Enum type "${enumType.fullName}" has no value with number ${number}.`);
  }
  return enumValue.number;
}

/** A Python-like repr() of a string, for the error messages. */
function _repr(text) {
  const quote = text.includes("'") && !text.includes('"') ? '"' : "'";
  return quote + text.replace(/\\/g, '\\\\').replace(new RegExp(quote, 'g'), `\\${quote}`) + quote;
}

// ---------------------------------------------------------------------------------------------------------------
// Printer.
// ---------------------------------------------------------------------------------------------------------------

/**
 * The map entries of a jspb.Map sorted by key, like sorted() in Python.
 * @returns {Array<[*, *]>}
 */
function _sortedMapEntries(map) {
  const entries = [];
  map.forEach((value, key) => entries.push([key, value]));
  const compare = (a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
      // By code point.
      const [codesA, codesB] = [a, b].map(text => Array.from(text, char => char.codePointAt(0)));
      for (let i = 0; i < Math.min(codesA.length, codesB.length); i++) {
        if (codesA[i] !== codesB[i]) return codesA[i] - codesB[i];
      }
      return codesA.length - codesB.length;
    }
    return Number(a) - Number(b);
  };
  return entries.sort((a, b) => compare(a[0], b[0]));
}

/** Text format printer for protocol message. */
class _Printer {
  constructor(options) {
    this.out = [];
    this.indent = options.indent;
    this.asUtf8 = options.asUtf8;
    this.asOneLine = options.asOneLine;
    this.useShortRepeatedPrimitives = options.useShortRepeatedPrimitives;
    this.pointyBrackets = options.pointyBrackets;
    this.useIndexOrder = options.useIndexOrder;
    this.floatFormat = options.floatFormat;
    this.doubleFormat = options.doubleFormat ?? options.floatFormat;
    this.useFieldNumber = options.useFieldNumber;
    this.messageFormatter = options.messageFormatter;
    this.forceColon = options.forceColon;
  }

  /** Prints a google.protobuf.Any as its message, if its type is known. */
  _tryPrintAsAnyMessage(message) {
    const typeUrl = message.getTypeUrl();
    if (!typeUrl.includes('/')) return false;
    const packedMessage = _buildMessageFromTypeName(typeUrl.split('/').pop());
    if (packedMessage === null) return false;
    let unpacked;
    try {
      unpacked = packedMessage.constructor.deserializeBinary(message.getValue_asU8());
    } catch {
      // jspb cannot read it (e.g. a field with another wire type): printed as an Any.
      return false;
    }
    this.out.push(`${' '.repeat(this.indent)}[${typeUrl}]${this.forceColon ? ':' : ''} `);
    this._printMessageFieldValue(unpacked);
    this.out.push(this.asOneLine ? ' ' : '\n');
    return true;
  }

  _tryCustomFormatMessage(message) {
    const formatted = this.messageFormatter(message, this.indent, this.asOneLine);
    if (formatted === null || formatted === undefined) return false;
    this.out.push(' '.repeat(this.indent), formatted, this.asOneLine ? ' ' : '\n');
    return true;
  }

  printMessage(message) {
    if (this.messageFormatter && this._tryCustomFormatMessage(message)) return;
    if (_descriptorOf(message).fullName === _ANY_FULL_TYPE_NAME && this._tryPrintAsAnyMessage(message)) return;
    const fields = _listFields(message);
    if (this.useIndexOrder) fields.sort((a, b) => a[0].index - b[0].index);
    for (const [field, value] of fields) {
      if (field.isMap) {
        for (const [key, entryValue] of _sortedMapEntries(value)) {
          this.printField(field, new _MapEntry(field.messageType, key, entryValue));
        }
      } else if (field.isRepeated) {
        if (
          this.useShortRepeatedPrimitives &&
          !field.isMessage &&
          field.type !== FieldType.STRING &&
          field.type !== FieldType.BYTES
        ) {
          this._printShortRepeatedPrimitivesValue(field, value);
        } else {
          for (const element of value) this.printField(field, element);
        }
      } else {
        this.printField(field, value);
      }
    }
  }

  _printFieldName(field) {
    this.out.push(' '.repeat(this.indent), this.useFieldNumber ? String(field.number) : field.name);
    // The colon is optional for a message, it is only printed if forceColon is set.
    if (this.forceColon || !field.isMessage) this.out.push(':');
  }

  printField(field, value) {
    this._printFieldName(field);
    this.out.push(' ');
    this.printFieldValue(field, value);
    this.out.push(this.asOneLine ? ' ' : '\n');
  }

  _printShortRepeatedPrimitivesValue(field, value) {
    this._printFieldName(field);
    this.out.push(' [');
    value.forEach((element, i) => {
      if (i > 0) this.out.push(', ');
      this.printFieldValue(field, element);
    });
    this.out.push(']', this.asOneLine ? ' ' : '\n');
  }

  _printMessageFieldValue(value) {
    const [openb, closeb] = this.pointyBrackets ? ['<', '>'] : ['{', '}'];
    if (this.asOneLine) {
      this.out.push(`${openb} `);
      this.printMessage(value);
      this.out.push(closeb);
    } else {
      this.out.push(`${openb}\n`);
      this.indent += 2;
      this.printMessage(value);
      this.indent -= 2;
      this.out.push(' '.repeat(this.indent) + closeb);
    }
  }

  printFieldValue(field, value) {
    switch (field.type) {
      case FieldType.MESSAGE:
      case FieldType.GROUP:
        this._printMessageFieldValue(value);
        break;
      case FieldType.ENUM:
        this.out.push(field.enumType.valuesByNumber.get(value)?.name ?? String(value));
        break;
      case FieldType.STRING:
        this.out.push('"', cEscape(value, this.asUtf8), '"');
        break;
      case FieldType.BYTES:
        // All the binary data of the bytes fields is escaped (a string is the base64 of jspb).
        this.out.push('"', cEscape(typeof value === 'string' ? Buffer.from(value, 'base64') : value, false), '"');
        break;
      case FieldType.BOOL:
        this.out.push(value ? 'true' : 'false');
        break;
      case FieldType.FLOAT: {
        const float = Math.fround(value);
        if (this.floatFormat) this.out.push(this.floatFormat(float));
        else this.out.push(Number.isNaN(float) ? 'nan' : _pythonFloatRepr(_toShortestFloat(float)));
        break;
      }
      case FieldType.DOUBLE:
        this.out.push(this.doubleFormat ? this.doubleFormat(value) : _pythonFloatRepr(value));
        break;
      default:
        this.out.push(_intToString(value));
    }
  }
}

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
function messageToString(
  message,
  {
    asUtf8 = true,
    asOneLine = false,
    useShortRepeatedPrimitives = false,
    pointyBrackets = false,
    useIndexOrder = false,
    floatFormat = null,
    doubleFormat = null,
    useFieldNumber = false,
    indent = 0,
    messageFormatter = null,
    forceColon = false,
  } = {},
) {
  const printer = new _Printer({
    asUtf8,
    asOneLine,
    useShortRepeatedPrimitives,
    pointyBrackets,
    useIndexOrder,
    floatFormat,
    doubleFormat,
    useFieldNumber,
    indent,
    messageFormatter,
    forceColon,
  });
  printer.printMessage(message);
  const result = printer.out.join('');
  return asOneLine ? result.trimEnd() : result;
}

// ---------------------------------------------------------------------------------------------------------------
// Tokenizer.
// ---------------------------------------------------------------------------------------------------------------

/**
 * Protocol buffer text representation tokenizer, like the Tokenizer of Python.
 */
class Tokenizer {
  /**
   * @param {Iterable<string>} lines
   */
  constructor(lines) {
    this._line = -1;
    this._column = 0;
    this.token = '';
    this._lines = lines[Symbol.iterator]();
    this._currentLine = '';
    this._previousLine = 0;
    this._previousColumn = 0;
    this._moreLines = true;
    this._skipWhitespace();
    this.nextToken();
  }

  lookingAt(token) {
    return this.token === token;
  }

  /** @returns {boolean} Whether the end of the text was reached. */
  atEnd() {
    return !this.token;
  }

  _popLine() {
    while (this._currentLine.length <= this._column) {
      const { value, done } = this._lines.next();
      if (done) {
        this._currentLine = '';
        this._moreLines = false;
        return;
      }
      this._currentLine = value;
      this._line += 1;
      this._column = 0;
    }
  }

  _skipWhitespace() {
    for (;;) {
      this._popLine();
      _WHITESPACE_OR_COMMENT.lastIndex = this._column;
      const match = _WHITESPACE_OR_COMMENT.exec(this._currentLine);
      if (!match) break;
      this._column += match[0].length;
    }
  }

  tryConsume(token) {
    if (this.token === token) {
      this.nextToken();
      return true;
    }
    return false;
  }

  consume(token) {
    if (!this.tryConsume(token)) throw this.parseError(`Expected "${token}".`);
  }

  /** Calls a consume function, false if it throws a ParseError. */
  _try(consume) {
    try {
      consume();
      return true;
    } catch (e) {
      if (e instanceof ParseError) return false;
      throw e;
    }
  }

  /** Consumes a value parsed by a function which throws _ValueError. */
  _consumeParsed(parseToken) {
    let result;
    try {
      result = parseToken(this.token);
    } catch (e) {
      if (e instanceof _ValueError) throw this.parseError(e.message);
      throw e;
    }
    this.nextToken();
    return result;
  }

  tryConsumeIdentifier() {
    return this._try(() => this.consumeIdentifier());
  }

  consumeIdentifier() {
    const result = this.token;
    if (!_IDENTIFIER.test(result)) throw this.parseError('Expected identifier.');
    this.nextToken();
    return result;
  }

  tryConsumeIdentifierOrNumber() {
    return this._try(() => this.consumeIdentifierOrNumber());
  }

  consumeIdentifierOrNumber() {
    const result = this.token;
    if (!_IDENTIFIER_OR_NUMBER.test(result)) throw this.parseError(`Expected identifier or number, got ${result}.`);
    this.nextToken();
    return result;
  }

  tryConsumeInteger() {
    return this._try(() => this.consumeInteger());
  }

  /** @returns {bigint} */
  consumeInteger() {
    return this._consumeParsed(_parseAbstractInteger);
  }

  tryConsumeFloat() {
    return this._try(() => this.consumeFloat());
  }

  /** @returns {number} */
  consumeFloat() {
    return this._consumeParsed(parseFloat);
  }

  /** @returns {boolean} */
  consumeBool() {
    return this._consumeParsed(parseBool);
  }

  tryConsumeByteString() {
    return this._try(() => this.consumeByteString());
  }

  /** @returns {string} */
  consumeString() {
    const theBytes = this.consumeByteString();
    try {
      return _decodeUtf8(theBytes);
    } catch (e) {
      if (e instanceof _ValueError) throw this.parseError(`Couldn't parse string: ${e.message}`);
      throw e;
    }
  }

  /**
   * Consumes a byte array value: adjacent string literals are concatenated.
   * @returns {Buffer}
   */
  consumeByteString() {
    const theList = [this._consumeSingleByteString()];
    while (this.token && _QUOTES.has(this.token[0])) theList.push(this._consumeSingleByteString());
    return Buffer.concat(theList);
  }

  _consumeSingleByteString() {
    const text = this.token;
    if (text.length < 1 || !_QUOTES.has(text[0])) throw this.parseError(`Expected string but found: ${_repr(text)}`);
    if (text.length < 2 || text[text.length - 1] !== text[0]) {
      throw this.parseError(`String missing ending quote: ${_repr(text)}`);
    }
    return this._consumeParsed(() => cUnescape(text.slice(1, -1)));
  }

  consumeEnum(field) {
    return this._consumeParsed(token => parseEnum(field, token));
  }

  /** Creates and *returns* a ParseError for the previously read token. */
  parseErrorPreviousToken(message) {
    return new ParseError(message, this._previousLine + 1, this._previousColumn + 1);
  }

  /** Creates and *returns* a ParseError for the current token. */
  parseError(message) {
    return new ParseError(`'${this._currentLine}': ${message}`, this._line + 1, this._column + 1);
  }

  /** Reads the next meaningful token. */
  nextToken() {
    this._previousLine = this._line;
    this._previousColumn = this._column;
    this._column += this.token.length;
    this._skipWhitespace();
    if (!this._moreLines) {
      this.token = '';
      return;
    }
    _TOKEN.lastIndex = this._column;
    const match = _TOKEN.exec(this._currentLine);
    this.token = match ? match[0] : String.fromCodePoint(this._currentLine.codePointAt(this._column));
  }
}

/**
 * Consumes an integer of a size for a field, as a number (a string for [jstype = JS_STRING]): beyond 2^53, the 64 bits
 * integers lose precision like in the binary format of jspb.
 */
function _consumeInteger(tokenizer, field, isSigned, isLong) {
  return tokenizer._consumeParsed(token => {
    const value = parseInteger(token, isSigned, isLong);
    if (field.isJsString) return value.toString();
    const number = Number(value);
    // Rounded to 2^63 or 2^64, jspb cannot serialize it.
    if (number >= (isSigned ? 2 ** 63 : 2 ** 64)) {
      throw new _ValueError(`Value out of range of the numbers of jspb: ${value} (use [jstype = JS_STRING])`);
    }
    return number;
  });
}

function _tryConsumeInteger(tokenizer, isSigned) {
  return tokenizer._try(() => tokenizer._consumeParsed(token => parseInteger(token, isSigned, true)));
}

// ---------------------------------------------------------------------------------------------------------------
// Parser.
// ---------------------------------------------------------------------------------------------------------------

/** Text format parser for protocol message. */
class _Parser {
  constructor({ allowUnknownExtension = false, allowFieldNumber = false, allowUnknownField = false } = {}) {
    this.allowUnknownExtension = allowUnknownExtension;
    this.allowFieldNumber = allowFieldNumber;
    this.allowUnknownField = allowUnknownField;
    this._allowMultipleScalars = false;
  }

  parseLines(lines, message) {
    this._allowMultipleScalars = false;
    this._parseOrMerge(lines, message);
    return message;
  }

  mergeLines(lines, message) {
    this._allowMultipleScalars = true;
    this._parseOrMerge(lines, message);
    return message;
  }

  _parseOrMerge(lines, message) {
    const tokenizer = new Tokenizer(lines);
    while (!tokenizer.atEnd()) this._mergeField(tokenizer, message);
  }

  /** Merges a single protocol message field into a message. */
  _mergeField(tokenizer, message) {
    const messageDescriptor = _descriptorOf(message);
    if (messageDescriptor.fullName === _ANY_FULL_TYPE_NAME && tokenizer.tryConsume('[')) {
      this._mergeExpandedAny(tokenizer, message);
      return;
    }

    let field = null;
    let name;
    if (tokenizer.tryConsume('[')) {
      const names = [tokenizer.consumeIdentifier()];
      while (tokenizer.tryConsume('.')) names.push(tokenizer.consumeIdentifier());
      name = names.join('.');
      if (!messageDescriptor.isExtendable) {
        throw tokenizer.parseErrorPreviousToken(
          `Message type "${messageDescriptor.fullName}" does not have extensions.`,
        );
      }
      // No extension is registered: the protos of the SDK define none.
      if (!this.allowUnknownExtension) {
        throw tokenizer.parseErrorPreviousToken(`Extension "${name}" not registered.`);
      }
      tokenizer.consume(']');
    } else {
      name = tokenizer.consumeIdentifierOrNumber();
      if (this.allowFieldNumber && /^\d+$/.test(name)) {
        let number;
        try {
          number = parseInteger(name, true, true);
        } catch (e) {
          if (e instanceof _ValueError) throw new ParseError(e.message);
          throw e;
        }
        field = messageDescriptor.fieldsByNumber.get(Number(number)) ?? null;
      } else {
        field = messageDescriptor.fieldsByName.get(name) ?? null;
      }
      if (field === null && !this.allowUnknownField) {
        throw tokenizer.parseErrorPreviousToken(
          `Message type "${messageDescriptor.fullName}" has no field named "${name}".`,
        );
      }
    }

    if (field !== null) {
      if (!this._allowMultipleScalars && field.containingOneof) {
        // Check if there's a different field set in this oneof.
        const whichOneof = _whichOneof(message, field.containingOneof);
        if (whichOneof !== null && whichOneof !== field.name) {
          throw tokenizer.parseErrorPreviousToken(
            `Field "${field.name}" is specified along with field "${whichOneof}", another member of oneof ` +
              `"${field.containingOneof.name}" for message type "${messageDescriptor.fullName}".`,
          );
        }
      }

      let merger;
      if (field.isMessage) {
        tokenizer.tryConsume(':');
        merger = () => this._mergeMessageField(tokenizer, message, field);
      } else {
        tokenizer.consume(':');
        merger = () => this._mergeScalarField(tokenizer, message, field);
      }

      if (field.isRepeated && tokenizer.tryConsume('[')) {
        this._mergeShortRepeated(tokenizer, merger);
      } else {
        merger();
      }
    } else {
      this._skipFieldContents(tokenizer);
    }

    // For historical reasons, fields may optionally be separated by commas or semicolons.
    if (!tokenizer.tryConsume(',')) tokenizer.tryConsume(';');
  }

  /** Merges the values of the short repeated format, e.g. "foo: [1, 2, 3]", after its '['. */
  _mergeShortRepeated(tokenizer, merger) {
    if (tokenizer.tryConsume(']')) return;
    for (;;) {
      merger();
      if (tokenizer.tryConsume(']')) return;
      tokenizer.consume(',');
    }
  }

  /** Merges the fields of the message of a google.protobuf.Any given with its type URL: [type.googleapis.com/x.Y]. */
  _mergeExpandedAny(tokenizer, message) {
    const [typeUrlPrefix, packedTypeName] = this._consumeAnyTypeUrl(tokenizer);
    tokenizer.consume(']');
    tokenizer.tryConsume(':');
    let expandedAnyEndToken;
    if (tokenizer.tryConsume('<')) {
      expandedAnyEndToken = '>';
    } else {
      tokenizer.consume('{');
      expandedAnyEndToken = '}';
    }
    const expandedAnySubMessage = _buildMessageFromTypeName(packedTypeName);
    if (expandedAnySubMessage === null) {
      throw new ParseError(`Type ${packedTypeName} not found in descriptor pool`);
    }
    while (!tokenizer.tryConsume(expandedAnyEndToken)) {
      if (tokenizer.atEnd()) throw tokenizer.parseErrorPreviousToken(`Expected "${expandedAnyEndToken}".`);
      this._mergeField(tokenizer, expandedAnySubMessage);
    }
    message.setTypeUrl(`${typeUrlPrefix}/${packedTypeName}`);
    message.setValue(expandedAnySubMessage.serializeBinary());
  }

  /** Consumes a google.protobuf.Any type URL and returns [its prefix, the type name]. */
  _consumeAnyTypeUrl(tokenizer) {
    // Consume "type.googleapis.com/".
    const prefix = [tokenizer.consumeIdentifier()];
    tokenizer.consume('.');
    prefix.push(tokenizer.consumeIdentifier());
    tokenizer.consume('.');
    prefix.push(tokenizer.consumeIdentifier());
    tokenizer.consume('/');
    // Consume the fully-qualified type name.
    const name = [tokenizer.consumeIdentifier()];
    while (tokenizer.tryConsume('.')) name.push(tokenizer.consumeIdentifier());
    return [prefix.join('.'), name.join('.')];
  }

  /** Merges a single message field into a message. */
  _mergeMessageField(tokenizer, message, field) {
    let endToken;
    if (tokenizer.tryConsume('<')) {
      endToken = '>';
    } else {
      tokenizer.consume('{');
      endToken = '}';
    }

    let subMessage;
    if (field.isMap) {
      subMessage = new _MapEntry(field.messageType);
    } else if (field.isRepeated) {
      subMessage = _addMessage(message, field);
    } else {
      // Also apply _allowMultipleScalars to message field.
      if (!this._allowMultipleScalars && _hasField(message, field)) {
        throw tokenizer.parseErrorPreviousToken(
          `Message type "${_descriptorOf(message).fullName}" should not have multiple "${field.name}" fields.`,
        );
      }
      subMessage = _mutableMessage(message, field);
    }

    while (!tokenizer.tryConsume(endToken)) {
      if (tokenizer.atEnd()) throw tokenizer.parseErrorPreviousToken(`Expected "${endToken}".`);
      this._mergeField(tokenizer, subMessage);
    }

    if (field.isMap) _storeMapEntry(message, field, subMessage);
  }

  /** Merges a single scalar field into a message. */
  _mergeScalarField(tokenizer, message, field) {
    let value;
    switch (field.type) {
      case FieldType.INT32:
      case FieldType.SINT32:
      case FieldType.SFIXED32:
        value = _consumeInteger(tokenizer, field, true, false);
        break;
      case FieldType.INT64:
      case FieldType.SINT64:
      case FieldType.SFIXED64:
        value = _consumeInteger(tokenizer, field, true, true);
        break;
      case FieldType.UINT32:
      case FieldType.FIXED32:
        value = _consumeInteger(tokenizer, field, false, false);
        break;
      case FieldType.UINT64:
      case FieldType.FIXED64:
        value = _consumeInteger(tokenizer, field, false, true);
        break;
      case FieldType.FLOAT:
        // Stored as a 32 bits float, like in Python.
        value = Math.fround(tokenizer.consumeFloat());
        break;
      case FieldType.DOUBLE:
        value = tokenizer.consumeFloat();
        break;
      case FieldType.BOOL:
        value = tokenizer.consumeBool();
        break;
      case FieldType.STRING:
        value = tokenizer.consumeString();
        break;
      case FieldType.BYTES:
        value = new Uint8Array(tokenizer.consumeByteString());
        break;
      case FieldType.ENUM:
        value = tokenizer.consumeEnum(field);
        break;
      default:
        throw new Error(`Unknown field type ${field.type}`);
    }

    if (field.isRepeated) {
      _appendValue(message, field, value);
      return;
    }
    let duplicateError = false;
    if (!this._allowMultipleScalars) {
      // For a field without presence, the best effort is a comparison with its default value.
      duplicateError = field.hasPresence ? _hasField(message, field) : _isTruthy(field, _getValue(message, field));
    }
    if (duplicateError) {
      throw tokenizer.parseErrorPreviousToken(
        `Message type "${_descriptorOf(message).fullName}" should not have multiple "${field.name}" fields.`,
      );
    }
    _setValue(message, field, value);
  }

  /** Skips over contents (value or message) of a field. */
  _skipFieldContents(tokenizer) {
    // If there is no ":" or there is a "{" or "<" after ":", this field has to be a message or the input is
    // ill-formed.
    if (tokenizer.tryConsume(':') && !tokenizer.lookingAt('{') && !tokenizer.lookingAt('<')) {
      if (tokenizer.lookingAt('[')) this._skipRepeatedFieldValue(tokenizer);
      else this._skipFieldValue(tokenizer);
    } else {
      this._skipFieldMessage(tokenizer);
    }
  }

  /** Skips over a complete field (name and value/message). */
  _skipField(tokenizer) {
    if (tokenizer.tryConsume('[')) {
      // Consume extension or google.protobuf.Any type URL.
      tokenizer.consumeIdentifier();
      let numIdentifiers = 1;
      while (tokenizer.tryConsume('.')) {
        tokenizer.consumeIdentifier();
        numIdentifiers += 1;
      }
      // This is possibly a type URL for an Any message.
      if (numIdentifiers === 3 && tokenizer.tryConsume('/')) {
        tokenizer.consumeIdentifier();
        while (tokenizer.tryConsume('.')) tokenizer.consumeIdentifier();
      }
      tokenizer.consume(']');
    } else {
      tokenizer.consumeIdentifierOrNumber();
    }
    this._skipFieldContents(tokenizer);
    if (!tokenizer.tryConsume(',')) tokenizer.tryConsume(';');
  }

  _skipFieldMessage(tokenizer) {
    let delimiter;
    if (tokenizer.tryConsume('<')) {
      delimiter = '>';
    } else {
      tokenizer.consume('{');
      delimiter = '}';
    }
    while (!tokenizer.lookingAt('>') && !tokenizer.lookingAt('}')) this._skipField(tokenizer);
    tokenizer.consume(delimiter);
  }

  _skipFieldValue(tokenizer) {
    if (
      !tokenizer.tryConsumeByteString() &&
      !tokenizer.tryConsumeIdentifier() &&
      !_tryConsumeInteger(tokenizer, true) &&
      !_tryConsumeInteger(tokenizer, false) &&
      !tokenizer.tryConsumeFloat()
    ) {
      throw new ParseError(`Invalid field value: ${tokenizer.token}`);
    }
  }

  _skipRepeatedFieldValue(tokenizer) {
    tokenizer.consume('[');
    if (!tokenizer.lookingAt(']')) {
      this._skipFieldValue(tokenizer);
      while (tokenizer.tryConsume(',')) this._skipFieldValue(tokenizer);
    }
    tokenizer.consume(']');
  }
}

/**
 * The lines of a text (UTF-8 bytes or a string).
 * @param {string|Uint8Array} text
 * @returns {string[]}
 */
function _splitLines(text) {
  if (typeof text === 'string') return text.split('\n');
  try {
    return _decodeUtf8(text).split('\n');
  } catch (e) {
    if (e instanceof _ValueError) throw new ParseError(e.message);
    throw e;
  }
}

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
function parse(text, message, options = {}) {
  return parseLines(_splitLines(text), message, options);
}

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
function merge(text, message, options = {}) {
  return mergeLines(_splitLines(text), message, options);
}

/**
 * Parses the lines of a text representation of a protocol message into a message: see parse().
 * @template {import('google-protobuf').Message} T
 * @param {Iterable<string>} lines
 * @param {T} message
 * @param {Object} [options] The options of parse().
 * @returns {T}
 */
function parseLines(lines, message, options = {}) {
  return new _Parser(options).parseLines(lines, message);
}

/**
 * Merges the lines of a text representation of a protocol message into a message: see merge().
 * @template {import('google-protobuf').Message} T
 * @param {Iterable<string>} lines
 * @param {T} message
 * @param {Object} [options] The options of parse().
 * @returns {T}
 */
function mergeLines(lines, message, options = {}) {
  return new _Parser(options).mergeLines(lines, message);
}

module.exports = {
  ParseError,
  TextFormatError,
  Tokenizer,
  cEscape,
  cUnescape,
  merge,
  mergeLines,
  messageToString,
  parse,
  parseBool,
  parseEnum,
  parseFloat,
  parseInteger,
  parseLines,
  // For json_format.js.
  _buildMessageFromTypeName,
  _getValue,
  _intToString,
  _listFields,
  _pythonFloatRepr,
  _roundToPrecision,
  _toShortestFloat,
  _whichOneof,
};

/**
 * @file Helpers for the custom parameters of services: builders of specs and values, validation of the values against
 * the specs, and conversions to plain objects.
 */

'use strict';

const jspb = require('google-protobuf');
const { BoolValue, DoubleValue, Int64Value } = require('google-protobuf/google/protobuf/wrappers_pb');

const { ValueError } = require('./exceptions');
const { protoTypeName } = require('./util');

const {
  BoolParam,
  CustomParam,
  CustomParamError,
  DictParam,
  DoubleParam,
  Int64Param,
  ListParam,
  OneOfParam,
  RegionOfInterestParam,
  StringParam,
  UserInterfaceInfo,
} = require('../bosdyn/api/service_customization_pb');

// The custom parameters, from Python's service_customization_helpers: the validation, the conversions to objects and
// arrays, the default values of the specs, the coercion of the values to the specs and the builders of the specs (only
// the validation was ported).

const { Status } = CustomParamError;
const { ValueCase } = CustomParam;
const { SpecCase } = CustomParam.Spec;

/**
 * The defined custom parameter Spec is invalid.
 */
class InvalidCustomParamSpecError extends ValueError {
  /**
   * @param {string[]} errorMessages Why the spec is invalid.
   */
  constructor(errorMessages) {
    super(errorMessages.join('\n'));
    this.errorMessages = errorMessages;
  }
}

/**
 * The defined custom parameter value does not match the associated Spec.
 */
class InvalidCustomParamValueError extends ValueError {
  /**
   * @param {CustomParamError} protoError Why the value is invalid.
   */
  constructor(protoError) {
    super(protoError.getErrorMessagesList().join('\n'));
    this.protoError = protoError;
  }
}

function _error(status, errorMessages) {
  return new CustomParamError().setStatus(status).setErrorMessagesList(errorMessages);
}

function _describe(value) {
  return typeof value?.toObject === 'function' ? JSON.stringify(value.toObject()) : String(value);
}

/** The repr() of a string in Python, e.g. 'fast'. */
function _pyRepr(text) {
  const quote = text.includes("'") && !text.includes('"') ? '"' : "'";
  const escaped = text
    .replaceAll('\\', '\\\\')
    .replaceAll('\n', '\\n')
    .replaceAll('\r', '\\r')
    .replaceAll('\t', '\\t')
    .replaceAll(quote, `\\${quote}`);
  return `${quote}${escaped}${quote}`;
}

/**
 * Strings as printed by Python in the messages: a list like ['fast', 'slow'] (they were JSON), or a set like {'a'}.
 * @param {string[]} strings
 * @param {boolean} [asSet=false]
 * @returns {string}
 */
function _pyStrings(strings, asSet = false) {
  const items = strings.map(_pyRepr).join(', ');
  if (asSet) return strings.length ? `{${items}}` : 'set()';
  return `[${items}]`;
}

/**
 * @param {*} param The value of a parameter.
 * @param {Function} protoType The message type the spec requires.
 * @returns {?CustomParamError} null if param is a protoType message.
 */
function checkTypesMatch(param, protoType) {
  if (!(param instanceof protoType)) {
    const type = param?.constructor ? (protoTypeName(param) ?? param.constructor.name) : typeof param;
    return _error(Status.STATUS_INVALID_VALUE, [
      `Param ${_describe(param)} has type ${type} but the spec requires ${protoTypeName(protoType)}.`,
    ]);
  }
  return null;
}

/**
 * Prefix the errors of a child parameter with its name, e.g. "speed param has error: ...".
 * @param {string} childName The key of a dict or one-of child, or "[index]" for a list element.
 * @param {string[]} childErrorMessages The errors of the child.
 * @returns {string[]}
 */
function _nestedErrorMessageHelper(childName, childErrorMessages) {
  const joiner = ' param has error: ';
  return childErrorMessages.map(childError => {
    // If already nested, add child_name with period delimiter, else make into a human-readable nested format.
    const message = childError.includes(joiner) ? `${childName}.${childError}` : `${childName}${joiner}${childError}`;
    // Remove period delimiter for list indices.
    return message.replaceAll('.[', '[');
  });
}

/**
 * The value set in a CustomParam, like Python's getattr(custom_param, custom_param.WhichOneof('value')).
 * @param {CustomParam} customParam The parameter.
 * @returns {*} The value message, undefined if none is set.
 */
function _customParamValue(customParam) {
  switch (customParam.getValueCase()) {
    case ValueCase.DICT_VALUE:
      return customParam.getDictValue();
    case ValueCase.LIST_VALUE:
      return customParam.getListValue();
    case ValueCase.INT_VALUE:
      return customParam.getIntValue();
    case ValueCase.DOUBLE_VALUE:
      return customParam.getDoubleValue();
    case ValueCase.STRING_VALUE:
      return customParam.getStringValue();
    case ValueCase.ROI_VALUE:
      return customParam.getRoiValue();
    case ValueCase.BOOL_VALUE:
      return customParam.getBoolValue();
    case ValueCase.ONE_OF_VALUE:
      return customParam.getOneOfValue();
    default:
      return undefined;
  }
}

/**
 * The name of the oneof field set in a spec or a value, e.g. 'int_spec' or 'int_value'.
 * @param {Object} cases SpecCase or ValueCase.
 * @param {number} caseValue The case.
 * @returns {string}
 */
function _caseName(cases, caseValue) {
  return (Object.keys(cases).find(name => cases[name] === caseValue) ?? 'NOT_SET').toLowerCase();
}

/**
 * The validator of the spec set in a CustomParam.Spec (Python's _CustomParamValidator.get_param_helper()).
 * @param {?CustomParam.Spec} customParamSpec The spec.
 * @returns {_ParamValidator}
 */
function _paramHelper(customParamSpec) {
  switch (customParamSpec?.getSpecCase()) {
    case SpecCase.DICT_SPEC:
      return new _DictParamValidator(customParamSpec.getDictSpec());
    case SpecCase.LIST_SPEC:
      return new _ListParamValidator(customParamSpec.getListSpec());
    case SpecCase.INT_SPEC:
      return new _Int64ParamValidator(customParamSpec.getIntSpec());
    case SpecCase.DOUBLE_SPEC:
      return new _DoubleParamValidator(customParamSpec.getDoubleSpec());
    case SpecCase.STRING_SPEC:
      return new _StringParamValidator(customParamSpec.getStringSpec());
    case SpecCase.ROI_SPEC:
      return new _RegionOfInterestParamValidator(customParamSpec.getRoiSpec());
    case SpecCase.BOOL_SPEC:
      return new _BoolParamValidator(customParamSpec.getBoolSpec());
    case SpecCase.ONE_OF_SPEC:
      return new _OneOfParamValidator(customParamSpec.getOneOfSpec());
    default:
      throw new InvalidCustomParamSpecError(['CustomParam.Spec has no spec set']);
  }
}

/**
 * Validates a Spec of a type of custom parameter, and the values against it. The subclasses define protoType, the
 * type of the values, and valueGetter, the getter of the values in a CustomParam (Python's custom_param_value_field).
 * @abstract
 */
class _ParamValidator {
  constructor(paramSpec) {
    this.paramSpec = paramSpec;
  }

  /**
   * @returns {void}
   * @throws {InvalidCustomParamSpecError} The spec is invalid.
   */
  validateSpec() {
    // Valid by default: the validators of the types with constraints check them.
  }

  /**
   * @param {*} paramValue A value to validate against the spec.
   * @returns {?CustomParamError} null for a valid value.
   */
  validateValue(paramValue) {
    return checkTypesMatch(paramValue, this.constructor.protoType);
  }
}

class _DictParamValidator extends _ParamValidator {
  static protoType = DictParam;
  static valueGetter = 'getDictValue';

  validateSpec() {
    const errorList = [];
    for (const [name, childSpec] of this.paramSpec.getSpecsMap().entries()) {
      try {
        _paramHelper(childSpec.getSpec()).validateSpec();
      } catch (e) {
        if (!(e instanceof InvalidCustomParamSpecError)) throw e;
        errorList.push(..._nestedErrorMessageHelper(name, e.errorMessages));
      }
    }
    if (errorList.length) throw new InvalidCustomParamSpecError(errorList);
  }

  validateValue(paramValue) {
    const err = super.validateValue(paramValue);
    if (err) return err;

    const specs = this.paramSpec.getSpecsMap();
    const unknownKeys = Array.from(paramValue.getValuesMap().keys()).filter(key => !specs.has(key));
    if (unknownKeys.length) {
      return _error(Status.STATUS_UNSUPPORTED_PARAMETER, [
        `DictParam value contains keys ${_pyStrings(unknownKeys, true)} not present in the spec.`,
      ]);
    }

    let status = Status.STATUS_OK;
    const errorMessages = [];
    for (const [name, customParam] of paramValue.getValuesMap().entries()) {
      const errorProto = _paramHelper(specs.get(name).getSpec()).validateValue(_customParamValue(customParam));
      if (errorProto) {
        status = errorProto.getStatus();
        errorMessages.push(..._nestedErrorMessageHelper(name, errorProto.getErrorMessagesList()));
      }
    }
    return status === Status.STATUS_OK ? null : _error(status, errorMessages);
  }
}

class _NumericalParamValidator extends _ParamValidator {
  validateSpec() {
    const spec = this.paramSpec;
    // Like Python, an unset default value reads as 0.
    const defaultValue = spec.getDefaultValue()?.getValue() ?? 0;
    const errorMessages = [];
    if (spec.hasMinValue() && spec.getMinValue().getValue() > defaultValue) {
      errorMessages.push('Default Spec Value below allowed minimum Value');
    }
    if (spec.hasMaxValue() && spec.getMaxValue().getValue() < defaultValue) {
      errorMessages.push('Default Spec Value above allowed maximum value');
    }
    if (spec.hasMinValue() && spec.hasMaxValue() && spec.getMinValue().getValue() > spec.getMaxValue().getValue()) {
      errorMessages.push('min_value greater than max_value');
    }
    if (errorMessages.length) throw new InvalidCustomParamSpecError(errorMessages);
  }

  validateValue(paramValue) {
    const err = super.validateValue(paramValue);
    if (err) return err;

    const spec = this.paramSpec;
    const numValue = paramValue.getValue();
    if (spec.hasMinValue() && numValue < spec.getMinValue().getValue()) {
      return _error(Status.STATUS_INVALID_VALUE, [
        `Value ${numValue} below min_bound ${spec.getMinValue().getValue()}`,
      ]);
    }
    if (spec.hasMaxValue() && numValue > spec.getMaxValue().getValue()) {
      return _error(Status.STATUS_INVALID_VALUE, [
        `Value ${numValue} above max_bound ${spec.getMaxValue().getValue()}`,
      ]);
    }
    return null;
  }
}

class _Int64ParamValidator extends _NumericalParamValidator {
  static protoType = Int64Param;
  static valueGetter = 'getIntValue';
}

class _DoubleParamValidator extends _NumericalParamValidator {
  static protoType = DoubleParam;
  static valueGetter = 'getDoubleValue';
}

class _StringParamValidator extends _ParamValidator {
  static protoType = StringParam;
  static valueGetter = 'getStringValue';

  validateSpec() {
    const spec = this.paramSpec;
    const options = spec.getOptionsList();
    if (spec.getDefaultValue() && !spec.getEditable() && options.length > 0) {
      if (!options.includes(spec.getDefaultValue())) {
        throw new InvalidCustomParamSpecError([
          `Default string ${spec.getDefaultValue()} not among options ${_pyStrings(options)}`,
        ]);
      }
    }
  }

  validateValue(paramValue) {
    const err = super.validateValue(paramValue);
    if (err) return err;

    const options = this.paramSpec.getOptionsList();
    if (!this.paramSpec.getEditable() && options.length > 0 && !options.includes(paramValue.getValue())) {
      return _error(Status.STATUS_INVALID_VALUE, [
        `Chosen string value ${paramValue.getValue()} not among options ${_pyStrings(options)}`,
      ]);
    }
    return null;
  }
}

class _BoolParamValidator extends _ParamValidator {
  static protoType = BoolParam;
  // Python 5.1.4 names it custom_param_field = "bool": its _CustomParamValidator raises an AttributeError for the
  // values of a bool spec.
  static valueGetter = 'getBoolValue';
}

class _RegionOfInterestParamValidator extends _ParamValidator {
  static protoType = RegionOfInterestParam;
  static valueGetter = 'getRoiValue';

  validateSpec() {
    const spec = this.paramSpec;
    if (!spec.getAllowsRectangle() && spec.getDefaultArea()?.hasRectangle()) {
      throw new InvalidCustomParamSpecError(['Default area is a rectangle despite not being allowed']);
    }
    if (!spec.getAllowsPolygon() && (spec.getDefaultArea()?.getPolygon()?.getVerticesList().length ?? 0) > 0) {
      throw new InvalidCustomParamSpecError(['Default area is a polygon despite not being allowed']);
    }
  }

  validateValue(paramValue) {
    const err = super.validateValue(paramValue);
    if (err) return err;

    if (!this.paramSpec.getAllowsRectangle() && paramValue.getArea()?.hasRectangle()) {
      return _error(Status.STATUS_INVALID_VALUE, ['Chosen area is a rectangle despite not being allowed']);
    }
    if (!this.paramSpec.getAllowsPolygon() && (paramValue.getArea()?.getPolygon()?.getVerticesList().length ?? 0) > 0) {
      return _error(Status.STATUS_INVALID_VALUE, ['Chosen area is a polygon despite not being allowed']);
    }
    if (paramValue.getImageCols() < 0) {
      return _error(Status.STATUS_INVALID_VALUE, ['Number of columns in image must be positive']);
    }
    if (paramValue.getImageRows() < 0) {
      return _error(Status.STATUS_INVALID_VALUE, ['Number of rows in image must be positive']);
    }
    return null;
  }
}

class _ListParamValidator extends _ParamValidator {
  static protoType = ListParam;
  static valueGetter = 'getListValue';

  validateSpec() {
    const spec = this.paramSpec;
    // First check element_spec.
    if (!spec.hasElementSpec()) {
      throw new InvalidCustomParamSpecError(['ListParam needs a defined element_spec']);
    }
    try {
      _paramHelper(spec.getElementSpec()).validateSpec();
    } catch (e) {
      if (!(e instanceof InvalidCustomParamSpecError)) throw e;
      throw new InvalidCustomParamSpecError(_nestedErrorMessageHelper('element_spec', e.errorMessages));
    }

    // If that's valid, then check list bounds.
    const min = spec.getMinNumberOfValues()?.getValue() ?? 0;
    const max = spec.getMaxNumberOfValues()?.getValue() ?? 0;
    const errorMessages = [];
    if (spec.hasMinNumberOfValues() && spec.hasMaxNumberOfValues() && min > max) {
      errorMessages.push(`Max ListParam.Spec size ${max} below minimum size of ${min}`);
    }
    if (max < 0 || min < 0) {
      errorMessages.push(`Invalid negative list size bound, with (min, max) bound of (${min}, ${max})`);
    }
    if (errorMessages.length) throw new InvalidCustomParamSpecError(errorMessages);
  }

  validateValue(paramValue) {
    const err = super.validateValue(paramValue);
    if (err) return err;

    const spec = this.paramSpec;
    const values = paramValue.getValuesList();
    if (spec.hasMinNumberOfValues() && values.length < spec.getMinNumberOfValues().getValue()) {
      return _error(Status.STATUS_INVALID_VALUE, [
        `ListParam has ${values.length} values, which is less than the required minimum ` +
          `${spec.getMinNumberOfValues().getValue()}`,
      ]);
    }
    if (spec.hasMaxNumberOfValues() && values.length > spec.getMaxNumberOfValues().getValue()) {
      return _error(Status.STATUS_INVALID_VALUE, [
        `ListParam has ${values.length} values, which is more than the allowed maximum ` +
          `${spec.getMaxNumberOfValues().getValue()}`,
      ]);
    }

    let status = Status.STATUS_OK;
    const errorMessages = [];
    const specType = _caseName(SpecCase, spec.getElementSpec().getSpecCase());
    values.forEach((customParam, index) => {
      const valueType = _caseName(ValueCase, customParam.getValueCase());
      // e.g. 'int_spec' and 'int_value', 'one_of_spec' and 'one_of_value'.
      if (specType.split('_')[0] !== valueType.split('_')[0]) {
        status = Status.STATUS_INVALID_TYPE;
        errorMessages.push(
          `Value is defined as ${valueType} at index ${index} while the List Param Spec expects ${specType}`,
        );
        return;
      }
      const errorProto = _paramHelper(spec.getElementSpec()).validateValue(_customParamValue(customParam));
      if (errorProto) {
        status = errorProto.getStatus();
        errorMessages.push(..._nestedErrorMessageHelper(`[${index}]`, errorProto.getErrorMessagesList()));
      }
    });
    return status === Status.STATUS_OK ? null : _error(status, errorMessages);
  }
}

class _OneOfParamValidator extends _ParamValidator {
  static protoType = OneOfParam;
  static valueGetter = 'getOneOfValue';

  validateSpec() {
    const spec = this.paramSpec;
    if (spec.getDefaultKey() && !spec.getSpecsMap().has(spec.getDefaultKey())) {
      throw new InvalidCustomParamSpecError([`OneOf parameter has nonexistent default key of ${spec.getDefaultKey()}`]);
    }
    const errorList = [];
    for (const [key, childSpec] of spec.getSpecsMap().entries()) {
      try {
        new _DictParamValidator(childSpec.getSpec() ?? new DictParam.Spec()).validateSpec();
      } catch (e) {
        if (!(e instanceof InvalidCustomParamSpecError)) throw e;
        errorList.push(..._nestedErrorMessageHelper(key, e.errorMessages));
      }
    }
    if (errorList.length) throw new InvalidCustomParamSpecError(errorList);
  }

  validateValue(paramValue) {
    const err = super.validateValue(paramValue);
    if (err) return err;

    const key = paramValue.getKey();
    const specs = this.paramSpec.getSpecsMap();
    if (!specs.has(key)) {
      return _error(Status.STATUS_INVALID_VALUE, [`OneOf parameter value has nonexistent key of ${key}`]);
    }

    // Only check active key since our spec doesn't guarantee valid values at unselected OneOf keys. Like the
    // Python map, a missing value reads as an empty DictParam.
    const chosenParamError = new _DictParamValidator(specs.get(key).getSpec() ?? new DictParam.Spec()).validateValue(
      paramValue.getValuesMap().get(key) ?? new DictParam(),
    );
    if (chosenParamError) {
      return _error(
        chosenParamError.getStatus(),
        _nestedErrorMessageHelper(key, chosenParamError.getErrorMessagesList()),
      );
    }
    return null;
  }
}

/**
 * Validates a CustomParam.Spec by the validator of the spec set in it, and the CustomParam values against it.
 */
class _CustomParamValidator extends _ParamValidator {
  static protoType = CustomParam;

  /**
   * @param {CustomParam.Spec} paramSpec
   * @throws {InvalidCustomParamSpecError} No spec is set in paramSpec (a KeyError in Python).
   */
  constructor(paramSpec) {
    super(paramSpec);
    this.subParamHelper = this.getParamHelper();
  }

  /**
   * @returns {_ParamValidator} The validator of the spec set in the CustomParam.Spec.
   * @throws {InvalidCustomParamSpecError} No spec is set.
   */
  getParamHelper() {
    return _paramHelper(this.paramSpec);
  }

  validateSpec() {
    this.subParamHelper.validateSpec();
  }

  /**
   * Like Python, the field of the type of the spec is validated: an empty one if another field is set.
   * @param {CustomParam} paramValue
   * @returns {?CustomParamError}
   */
  validateValue(paramValue) {
    const err = super.validateValue(paramValue);
    if (err) return err;

    const { protoType, valueGetter } = this.subParamHelper.constructor;
    return this.subParamHelper.validateValue(paramValue[valueGetter]() ?? new protoType());
  }
}

/**
 * Checks that a DictParam.Spec is valid.
 * @param {DictParam.Spec} dictSpec Spec to be validated.
 * @returns {void}
 * @throws {InvalidCustomParamSpecError} The spec is invalid, with the list of error messages.
 */
function validateDictSpec(dictSpec) {
  new _DictParamValidator(dictSpec).validateSpec();
}

/**
 * Checks that the DictParam.Spec is valid, and returns a function that validates the DictParam values against it.
 * @param {DictParam.Spec} dictSpec Spec to be validated, and to validate the values against.
 * @returns {function(DictParam): ?CustomParamError} Returns null for a valid value, and a CustomParamError with a
 * status besides STATUS_OK for an invalid one.
 * @throws {InvalidCustomParamSpecError} The spec is invalid, with the list of error messages.
 */
function createValueValidator(dictSpec) {
  const validator = new _DictParamValidator(dictSpec);
  // Raises an error if the Spec itself is invalid.
  validator.validateSpec();
  return value => validator.validateValue(value);
}

// ---------------------------------------------------------------------------------------------------------------
// Conversions to objects and arrays.
// ---------------------------------------------------------------------------------------------------------------

/**
 * The spec set in a CustomParam.Spec, like Python's getattr(spec, spec.WhichOneof('spec')).
 * @param {CustomParam.Spec} customParamSpec
 * @returns {*} undefined if none is set.
 */
function _specOf(customParamSpec) {
  return _SPEC_VALUES.get(customParamSpec.getSpecCase())?.spec(customParamSpec);
}

/** Sets an entry of an object (the dictionaries of Python), also for a key like '__proto__'. */
function _setEntry(object, key, value) {
  Object.defineProperty(object, key, { value, enumerable: true, writable: true, configurable: true });
}

/**
 * The value of a custom parameter, as converted by dict_params_to_dict() and list_params_to_list() in Python.
 * @param {CustomParam} customParam
 * @param {CustomParam.Spec} customParamSpec The spec of the value.
 * @param {string} members 'dict' or 'list', for the error message.
 * @returns {*}
 */
function _convertValue(customParam, customParamSpec, members) {
  const valueField = _caseName(ValueCase, customParam.getValueCase());
  const paramValue = _customParamValue(customParam);
  const paramSpec = _specOf(customParamSpec);
  switch (valueField) {
    case 'dict_value':
      return dictParamsToDict(paramValue, paramSpec, false);
    case 'list_value':
      return listParamsToList(paramValue, paramSpec, false);
    case 'one_of_value':
      return oneofParamToDict(paramValue, paramSpec, false);
    case 'roi_value':
      return paramValue;
    case 'int_value':
    case 'double_value':
    case 'string_value':
    case 'bool_value':
      return paramValue.getValue();
    default:
      throw new Error(`No handler for conversion of None from ${members} members.`);
  }
}

/**
 * The values of a DictParam as an object, like dict_params_to_dict() in Python: the values of the numbers, strings and
 * booleans, the RegionOfInterestParam messages, and objects and arrays for the dicts, one-ofs and lists.
 * @param {DictParam} dictParam
 * @param {DictParam.Spec} dictSpec The spec of the parameter.
 * @param {boolean} [validate=true] Validate the spec and the parameter first.
 * @returns {Object}
 * @throws {InvalidCustomParamSpecError} The spec is invalid.
 * @throws {InvalidCustomParamValueError} The parameter does not match the spec.
 */
function dictParamsToDict(dictParam, dictSpec, validate = true) {
  if (validate) {
    const validateRes = createValueValidator(dictSpec)(dictParam);
    if (validateRes) throw new InvalidCustomParamValueError(validateRes);
  }

  const values = {};
  for (const [key, customParam] of dictParam.getValuesMap().entries()) {
    const childSpec = dictSpec.getSpecsMap().get(key)?.getSpec() ?? new CustomParam.Spec();
    _setEntry(values, key, _convertValue(customParam, childSpec, 'dict'));
  }
  return values;
}

/**
 * The values of a ListParam as an array, like list_params_to_list() in Python (see dictParamsToDict()).
 * @param {ListParam} listParam
 * @param {ListParam.Spec} listSpec The spec of the parameter.
 * @param {boolean} [validate=true] Validate the spec and the parameter first.
 * @returns {Array}
 * @throws {InvalidCustomParamSpecError} The spec is invalid.
 * @throws {InvalidCustomParamValueError} The parameter does not match the spec.
 */
function listParamsToList(listParam, listSpec, validate = true) {
  if (validate) {
    const validator = new _ListParamValidator(listSpec);
    validator.validateSpec();
    const validateRes = validator.validateValue(listParam);
    if (validateRes) throw new InvalidCustomParamValueError(validateRes);
  }

  const elementSpec = listSpec.getElementSpec() ?? new CustomParam.Spec();
  return listParam.getValuesList().map(customParam => _convertValue(customParam, elementSpec, 'list'));
}

/**
 * The values of the chosen DictParam of a OneOfParam as an object, like oneof_param_to_dict() in Python.
 * @param {OneOfParam} oneofParam
 * @param {OneOfParam.Spec} oneofSpec The spec of the parameter.
 * @param {boolean} [validate=true] Validate the spec and the parameter first (the chosen DictParam is always
 * validated, like Python).
 * @returns {Object}
 * @throws {InvalidCustomParamSpecError} The spec is invalid.
 * @throws {InvalidCustomParamValueError} The parameter does not match the spec.
 */
function oneofParamToDict(oneofParam, oneofSpec, validate = true) {
  if (validate) {
    const validator = new _OneOfParamValidator(oneofSpec);
    validator.validateSpec();
    const validateRes = validator.validateValue(oneofParam);
    if (validateRes) throw new InvalidCustomParamValueError(validateRes);
  }

  // Like the maps of Python, a missing value reads as an empty DictParam (not inserted in the parameter here).
  const key = oneofParam.getKey();
  const dictParam = oneofParam.getValuesMap().get(key) ?? new DictParam();
  const dictSpec = oneofSpec.getSpecsMap().get(key)?.getSpec() ?? new DictParam.Spec();
  return dictParamsToDict(dictParam, dictSpec);
}

// ---------------------------------------------------------------------------------------------------------------
// Default values of the specs.
// ---------------------------------------------------------------------------------------------------------------

/**
 * A default CustomParam for a CustomParam.Spec, like custom_spec_to_default() in Python.
 * @param {CustomParam.Spec} spec
 * @returns {?CustomParam} null if the spec has no default (a region of interest without rectangle, a one-of without
 * default key).
 * @throws {InvalidCustomParamSpecError} No spec is set (a KeyError in Python).
 */
function customSpecToDefault(spec) {
  const entry = _specValues(spec);
  const paramValue = entry.toDefault(entry.spec(spec));
  if (paramValue === null) return null;
  const param = new CustomParam();
  entry.set(param, paramValue);
  return param;
}

/**
 * A default DictParam for a DictParam.Spec, like dict_spec_to_default() in Python.
 * @param {DictParam.Spec} spec
 * @returns {DictParam}
 */
function dictSpecToDefault(spec) {
  const param = new DictParam();
  for (const [key, value] of spec.getSpecsMap().entries()) {
    const defaultValueParam = customSpecToDefault(value.getSpec() ?? new CustomParam.Spec());
    if (defaultValueParam !== null) param.getValuesMap().set(key, defaultValueParam);
  }
  return param;
}

/**
 * A default ListParam for a ListParam.Spec, like list_spec_to_default() in Python: the minimum number of default
 * values.
 * @param {ListParam.Spec} spec
 * @returns {ListParam}
 */
function listSpecToDefault(spec) {
  const param = new ListParam();
  const defaultElementSpec = customSpecToDefault(spec.getElementSpec() ?? new CustomParam.Spec());
  if (defaultElementSpec !== null) {
    const count = spec.getMinNumberOfValues()?.getValue() ?? 0;
    for (let i = 0; i < count; i++) param.addValues(defaultElementSpec.clone());
  }
  return param;
}

/**
 * The default value of a numerical spec: the default value, else the minimum, else the maximum, else 0.
 * @param {Int64Param.Spec|DoubleParam.Spec} spec
 * @returns {number}
 */
function _numericalDefault(spec) {
  if (spec.hasDefaultValue()) return spec.getDefaultValue().getValue();
  if (spec.hasMinValue()) return spec.getMinValue().getValue();
  if (spec.hasMaxValue()) return spec.getMaxValue().getValue();
  return 0;
}

/**
 * A default Int64Param for an Int64Param.Spec, like int_spec_to_default() in Python.
 * @param {Int64Param.Spec} spec
 * @returns {Int64Param}
 */
function intSpecToDefault(spec) {
  return new Int64Param().setValue(_numericalDefault(spec));
}

/**
 * A default DoubleParam for a DoubleParam.Spec, like double_spec_to_default() in Python.
 * @param {DoubleParam.Spec} spec
 * @returns {DoubleParam}
 */
function doubleSpecToDefault(spec) {
  return new DoubleParam().setValue(_numericalDefault(spec));
}

/**
 * A default StringParam for a StringParam.Spec, like string_spec_to_default() in Python: the default value, else the
 * first option.
 * @param {StringParam.Spec} spec
 * @returns {StringParam}
 */
function stringSpecToDefault(spec) {
  const options = spec.getOptionsList();
  let value = '';
  if (spec.getDefaultValue() !== '') value = spec.getDefaultValue();
  else if (options.length > 0) value = options[0];
  return new StringParam().setValue(value);
}

/**
 * A default RegionOfInterestParam for a RegionOfInterestParam.Spec, like roi_spec_to_default() in Python.
 * @param {RegionOfInterestParam.Spec} spec
 * @returns {?RegionOfInterestParam} null if the spec does not allow rectangles.
 */
function roiSpecToDefault(spec) {
  if (!spec.getAllowsRectangle()) return null;
  const param = new RegionOfInterestParam();
  if (spec.hasDefaultArea()) param.setArea(spec.getDefaultArea().clone());
  if (spec.hasServiceAndSource()) param.setServiceAndSource(spec.getServiceAndSource().clone());
  return param;
}

/**
 * A default BoolParam for a BoolParam.Spec, like bool_spec_to_default() in Python.
 * @param {BoolParam.Spec} spec
 * @returns {BoolParam}
 */
function boolSpecToDefault(spec) {
  return new BoolParam().setValue(spec.getDefaultValue()?.getValue() ?? false);
}

/**
 * A default OneOfParam for a OneOfParam.Spec, like one_of_spec_to_default() in Python: the default key, and the
 * default of each DictParam.
 * @param {OneOfParam.Spec} spec
 * @returns {?OneOfParam} null if the default key is not a key of the spec.
 */
function oneOfSpecToDefault(spec) {
  const specs = spec.getSpecsMap();
  if (!specs.has(spec.getDefaultKey())) return null;
  const param = new OneOfParam().setKey(spec.getDefaultKey());
  for (const [key, value] of specs.entries()) {
    param.getValuesMap().set(key, dictSpecToDefault(value.getSpec() ?? new DictParam.Spec()));
  }
  return param;
}

// ---------------------------------------------------------------------------------------------------------------
// Coercion of the values to the specs.
// ---------------------------------------------------------------------------------------------------------------

/**
 * Coerce a DictParam to a spec, like dict_param_coerce_to() in Python: the missing values are defaults, the values
 * are coerced, the keys which are not in the spec are removed (not reported as a coercion, like Python).
 * @param {DictParam} param The parameter, modified in place.
 * @param {DictParam.Spec} spec
 * @returns {boolean} Whether the parameter was coerced.
 */
function dictParamCoerceTo(param, spec) {
  let didCoerce = false;
  const newMap = new Map();
  const values = param.getValuesMap();
  for (const [key, childSpec] of spec.getSpecsMap().entries()) {
    // Like the maps of Python, a missing value reads as an empty CustomParam: coerced to the default.
    const value = values.get(key) ?? new CustomParam();
    if (customParamCoerceTo(value, childSpec.getSpec() ?? new CustomParam.Spec())) didCoerce = true;
    newMap.set(key, value);
  }
  values.clear();
  for (const key of spec.getSpecsMap().keys()) values.set(key, newMap.get(key));
  return didCoerce;
}

/**
 * Coerce a ListParam to a spec, like list_param_coerce_to() in Python: default values up to the minimum number of
 * values, the values beyond the maximum removed, and the values coerced.
 * @param {ListParam} param The parameter, modified in place.
 * @param {ListParam.Spec} spec
 * @returns {boolean} Whether the parameter was coerced.
 */
function listParamCoerceTo(param, spec) {
  let didCoerce = false;
  const elementSpec = spec.getElementSpec() ?? new CustomParam.Spec();
  if (spec.hasMinNumberOfValues()) {
    const minimum = spec.getMinNumberOfValues().getValue();
    if (param.getValuesList().length < minimum) {
      const defaultElementParam = customSpecToDefault(elementSpec);
      if (defaultElementParam === null) throw new TypeError('The element spec has no default value to add');
      while (param.getValuesList().length < minimum) param.addValues(defaultElementParam.clone());
      didCoerce = true;
    }
  }
  if (spec.hasMaxNumberOfValues()) {
    const maximum = spec.getMaxNumberOfValues().getValue();
    if (param.getValuesList().length > maximum) {
      param.setValuesList(param.getValuesList().slice(0, Math.max(maximum, 0)));
      didCoerce = true;
    }
  }
  for (const value of param.getValuesList()) {
    if (customParamCoerceTo(value, elementSpec)) didCoerce = true;
  }
  return didCoerce;
}

/**
 * Coerce a numerical parameter: out of the bounds of the spec, it is the default value.
 * @param {Int64Param|DoubleParam} param The parameter, modified in place.
 * @param {Int64Param.Spec|DoubleParam.Spec} spec
 * @returns {boolean} Whether the parameter was coerced.
 */
function _numericalCoerceTo(param, spec) {
  const invalidMax = spec.hasMaxValue() && param.getValue() > spec.getMaxValue().getValue();
  const invalidMin = spec.hasMinValue() && param.getValue() < spec.getMinValue().getValue();
  if (invalidMax || invalidMin) {
    param.setValue(_numericalDefault(spec));
    return true;
  }
  return false;
}

/**
 * Coerce an Int64Param to a spec, like int_param_coerce_to() in Python: out of bounds, it is the default value.
 * @param {Int64Param} param The parameter, modified in place.
 * @param {Int64Param.Spec} spec
 * @returns {boolean} Whether the parameter was coerced.
 */
function intParamCoerceTo(param, spec) {
  return _numericalCoerceTo(param, spec);
}

/**
 * Coerce a DoubleParam to a spec, like double_param_coerce_to() in Python: out of bounds, it is the default value.
 * @param {DoubleParam} param The parameter, modified in place.
 * @param {DoubleParam.Spec} spec
 * @returns {boolean} Whether the parameter was coerced.
 */
function doubleParamCoerceTo(param, spec) {
  return _numericalCoerceTo(param, spec);
}

/**
 * Coerce a StringParam to a spec, like string_param_coerce_to() in Python: not among the options of a spec which is not
 * editable, it is the default value.
 * @param {StringParam} param The parameter, modified in place.
 * @param {StringParam.Spec} spec
 * @returns {boolean} Whether the parameter was coerced.
 */
function stringParamCoerceTo(param, spec) {
  const options = spec.getOptionsList();
  if (!spec.getEditable() && !options.includes(param.getValue()) && options.length > 0) {
    param.setValue(stringSpecToDefault(spec).getValue());
    return true;
  }
  return false;
}

/**
 * Coercion is tricky with ROI parameters due to the fact that there is no standard frame size: the parameter is not
 * modified, like roi_param_coerce_to() in Python.
 * @param {RegionOfInterestParam} param
 * @param {RegionOfInterestParam.Spec} spec
 * @returns {boolean} Like Python, true if the spec has no service_and_source or the parameter has the same one.
 */
function roiParamCoerceTo(param, spec) {
  if (!spec.hasServiceAndSource()) return true;
  const paramServiceAndSource = param.getServiceAndSource() ?? new RegionOfInterestParam.ServiceAndSource();
  return jspb.Message.equals(spec.getServiceAndSource(), paramServiceAndSource);
}

/**
 * Coerce a OneOfParam to a spec, like one_of_param_coerce_to() in Python: a key which is not in the spec is the first
 * key (sorted), and the DictParam of each key of the spec is coerced.
 * @param {OneOfParam} param The parameter, modified in place.
 * @param {OneOfParam.Spec} spec
 * @returns {boolean} Whether the parameter was coerced.
 * @throws {RangeError} The spec has no key (an IndexError in Python).
 */
function oneOfParamCoerceTo(param, spec) {
  let didCoerce = false;
  const specs = spec.getSpecsMap();
  if (!specs.has(param.getKey())) {
    const keys = Array.from(specs.keys()).sort();
    if (keys.length === 0) throw new RangeError('The OneOfParam.Spec has no key');
    param.setKey(keys[0]);
    didCoerce = true;
  }
  const newMap = new Map();
  const values = param.getValuesMap();
  for (const [key, childSpec] of specs.entries()) {
    // Like the maps of Python, a missing value is an empty DictParam.
    const valueParam = values.get(key) ?? new DictParam();
    if (dictParamCoerceTo(valueParam, childSpec.getSpec() ?? new DictParam.Spec())) didCoerce = true;
    newMap.set(key, valueParam);
  }
  values.clear();
  for (const key of specs.keys()) values.set(key, newMap.get(key));
  return didCoerce;
}

/**
 * For each spec of a CustomParam.Spec, its value in a CustomParam, and its default and coercion functions, like
 * _SPEC_VALUES in Python (the booleans have no coercion: there are no illegal values).
 * @type {Map<number, {spec: Function, has: Function, get: Function, set: Function, toDefault: Function,
 * coerceTo: ?Function}>}
 */
const _SPEC_VALUES = new Map([
  [
    SpecCase.DICT_SPEC,
    {
      spec: s => s.getDictSpec(),
      has: p => p.hasDictValue(),
      get: p => p.getDictValue(),
      set: (p, v) => p.setDictValue(v),
      toDefault: dictSpecToDefault,
      coerceTo: dictParamCoerceTo,
    },
  ],
  [
    SpecCase.LIST_SPEC,
    {
      spec: s => s.getListSpec(),
      has: p => p.hasListValue(),
      get: p => p.getListValue(),
      set: (p, v) => p.setListValue(v),
      toDefault: listSpecToDefault,
      coerceTo: listParamCoerceTo,
    },
  ],
  [
    SpecCase.INT_SPEC,
    {
      spec: s => s.getIntSpec(),
      has: p => p.hasIntValue(),
      get: p => p.getIntValue(),
      set: (p, v) => p.setIntValue(v),
      toDefault: intSpecToDefault,
      coerceTo: intParamCoerceTo,
    },
  ],
  [
    SpecCase.DOUBLE_SPEC,
    {
      spec: s => s.getDoubleSpec(),
      has: p => p.hasDoubleValue(),
      get: p => p.getDoubleValue(),
      set: (p, v) => p.setDoubleValue(v),
      toDefault: doubleSpecToDefault,
      coerceTo: doubleParamCoerceTo,
    },
  ],
  [
    SpecCase.STRING_SPEC,
    {
      spec: s => s.getStringSpec(),
      has: p => p.hasStringValue(),
      get: p => p.getStringValue(),
      set: (p, v) => p.setStringValue(v),
      toDefault: stringSpecToDefault,
      coerceTo: stringParamCoerceTo,
    },
  ],
  [
    SpecCase.ROI_SPEC,
    {
      spec: s => s.getRoiSpec(),
      has: p => p.hasRoiValue(),
      get: p => p.getRoiValue(),
      set: (p, v) => p.setRoiValue(v),
      toDefault: roiSpecToDefault,
      coerceTo: roiParamCoerceTo,
    },
  ],
  [
    SpecCase.BOOL_SPEC,
    {
      spec: s => s.getBoolSpec(),
      has: p => p.hasBoolValue(),
      get: p => p.getBoolValue(),
      set: (p, v) => p.setBoolValue(v),
      toDefault: boolSpecToDefault,
      coerceTo: null,
    },
  ],
  [
    SpecCase.ONE_OF_SPEC,
    {
      spec: s => s.getOneOfSpec(),
      has: p => p.hasOneOfValue(),
      get: p => p.getOneOfValue(),
      set: (p, v) => p.setOneOfValue(v),
      toDefault: oneOfSpecToDefault,
      coerceTo: oneOfParamCoerceTo,
    },
  ],
]);

/**
 * The entry of _SPEC_VALUES of the spec set in a CustomParam.Spec.
 * @param {CustomParam.Spec} spec
 * @returns {Object}
 * @throws {InvalidCustomParamSpecError} No spec is set (a KeyError in Python).
 */
function _specValues(spec) {
  const entry = _SPEC_VALUES.get(spec.getSpecCase());
  if (!entry) throw new InvalidCustomParamSpecError(['CustomParam.Spec has no spec set']);
  return entry;
}

/**
 * Coerce a CustomParam to a spec, like custom_param_coerce_to() in Python: a value of the type of the spec is coerced,
 * another value is replaced by the default of the spec.
 * @param {CustomParam} param The parameter, modified in place.
 * @param {CustomParam.Spec} spec
 * @returns {boolean} Whether the parameter was coerced.
 * @throws {TypeError} The value must be replaced by a default, but the spec has none (CopyFrom(None) in Python).
 */
function customParamCoerceTo(param, spec) {
  const entry = _specValues(spec);
  if (entry.has(param)) {
    return entry.coerceTo !== null && entry.coerceTo(entry.get(param), entry.spec(spec));
  }
  const defaultValue = entry.toDefault(entry.spec(spec));
  if (defaultValue === null) throw new TypeError('The spec has no default value for the parameter');
  // Setting a field of the oneof clears the others (Clear() in Python).
  entry.set(param, defaultValue);
  return true;
}

// ---------------------------------------------------------------------------------------------------------------
// Builders of the specs.
// ---------------------------------------------------------------------------------------------------------------

/**
 * A CustomParam.Spec wrapping a spec, like make_custom_param_spec() in Python.
 * @param {DictParam.Spec|ListParam.Spec|Int64Param.Spec|DoubleParam.Spec|StringParam.Spec|RegionOfInterestParam.Spec|
 * BoolParam.Spec|OneOfParam.Spec} spec The spec to wrap (copied).
 * @returns {CustomParam.Spec}
 * @throws {ValueError} Not a spec of service_customization_pb.
 */
function makeCustomParamSpec(spec) {
  const customSpec = new CustomParam.Spec();
  if (spec instanceof DictParam.Spec) return customSpec.setDictSpec(spec.clone());
  if (spec instanceof ListParam.Spec) return customSpec.setListSpec(spec.clone());
  if (spec instanceof Int64Param.Spec) return customSpec.setIntSpec(spec.clone());
  if (spec instanceof DoubleParam.Spec) return customSpec.setDoubleSpec(spec.clone());
  if (spec instanceof StringParam.Spec) return customSpec.setStringSpec(spec.clone());
  if (spec instanceof RegionOfInterestParam.Spec) return customSpec.setRoiSpec(spec.clone());
  if (spec instanceof BoolParam.Spec) return customSpec.setBoolSpec(spec.clone());
  if (spec instanceof OneOfParam.Spec) return customSpec.setOneOfSpec(spec.clone());
  throw new ValueError('Must provide a spec from service_customization_pb2 to this function.');
}

/**
 * The entries of specs by key: an object, a Map or the [key, value] pairs.
 * @param {Object<string, *>|Map<string, *>|Iterable<[string, *]>} specs
 * @returns {Array<[string, *]>}
 */
function _entries(specs) {
  if (specs === null || specs === undefined) return [];
  return Symbol.iterator in Object(specs) ? Array.from(specs) : Object.entries(specs);
}

/**
 * A DictParam.ChildSpec, like make_dict_child_spec() in Python.
 * @param {*} paramSpec The spec, wrapped in a CustomParam.Spec (see makeCustomParamSpec()).
 * @param {?UserInterfaceInfo} [uiInfo=null]
 * @returns {DictParam.ChildSpec}
 */
function makeDictChildSpec(paramSpec, uiInfo = null) {
  const childSpec = new DictParam.ChildSpec().setSpec(makeCustomParamSpec(paramSpec));
  if (uiInfo !== null) childSpec.setUiInfo(uiInfo.clone());
  return childSpec;
}

/**
 * A DictParam.Spec, like make_dict_param_spec() in Python.
 * @param {Object<string, DictParam.ChildSpec>|Map<string, DictParam.ChildSpec>} specs The specs contained by the
 * DictParam.
 * @param {boolean} isHiddenByDefault Whether the UI shows this spec as collapsed by default.
 * @returns {DictParam.Spec}
 */
function makeDictParamSpec(specs, isHiddenByDefault) {
  const spec = new DictParam.Spec().setIsHiddenByDefault(Boolean(isHiddenByDefault));
  for (const [key, childSpec] of _entries(specs)) spec.getSpecsMap().set(key, childSpec.clone());
  return spec;
}

/**
 * A OneOfParam.ChildSpec, like make_one_of_child_spec() in Python.
 * @param {DictParam.Spec} dictParamSpec
 * @param {?UserInterfaceInfo} [uiInfo=null]
 * @returns {OneOfParam.ChildSpec}
 */
function makeOneOfChildSpec(dictParamSpec, uiInfo = null) {
  const childSpec = new OneOfParam.ChildSpec().setSpec(dictParamSpec.clone());
  if (uiInfo !== null) childSpec.setUiInfo(uiInfo.clone());
  return childSpec;
}

/**
 * A OneOfParam.Spec, like make_one_of_param_spec() in Python.
 * @param {Object<string, OneOfParam.ChildSpec>|Map<string, OneOfParam.ChildSpec>} specs The specs contained by the
 * OneOfParam.
 * @param {?string} [defaultKey=null] The key to which the OneOfParam.Spec should default in the UI.
 * @returns {OneOfParam.Spec}
 */
function makeOneOfParamSpec(specs, defaultKey = null) {
  const spec = new OneOfParam.Spec();
  for (const [key, childSpec] of _entries(specs)) spec.getSpecsMap().set(key, childSpec.clone());
  if (defaultKey !== null) spec.setDefaultKey(defaultKey);
  return spec;
}

/**
 * A ListParam.Spec, like make_list_param_spec() in Python.
 * @param {CustomParam.Spec} elementSpec The spec of each element of the list.
 * @param {?number} [minNumberOfValues=null]
 * @param {?number} [maxNumberOfValues=null]
 * @returns {ListParam.Spec}
 */
function makeListParamSpec(elementSpec, minNumberOfValues = null, maxNumberOfValues = null) {
  const spec = new ListParam.Spec().setElementSpec(elementSpec.clone());
  if (minNumberOfValues !== null) spec.setMinNumberOfValues(new Int64Value().setValue(minNumberOfValues));
  if (maxNumberOfValues !== null) spec.setMaxNumberOfValues(new Int64Value().setValue(maxNumberOfValues));
  return spec;
}

/**
 * The spec of a numerical parameter, for makeInt64ParamSpec() and makeDoubleParamSpec().
 * @param {Int64Param.Spec|DoubleParam.Spec} spec
 * @param {Function} Wrapper Int64Value or DoubleValue.
 * @param {?number} defaultValue
 * @param {?Object} units A bosdyn.api.Units message.
 * @param {?number} minValue
 * @param {?number} maxValue
 * @returns {Int64Param.Spec|DoubleParam.Spec}
 */
function _numericalSpec(spec, Wrapper, defaultValue, units, minValue, maxValue) {
  if (units !== null) spec.setUnits(units.clone());
  if (defaultValue !== null) spec.setDefaultValue(new Wrapper().setValue(defaultValue));
  if (minValue !== null) spec.setMinValue(new Wrapper().setValue(minValue));
  if (maxValue !== null) spec.setMaxValue(new Wrapper().setValue(maxValue));
  return spec;
}

/**
 * An Int64Param.Spec, like make_int64_param_spec() in Python.
 * @param {?number} [defaultValue=null]
 * @param {?Object} [units=null] A bosdyn.api.Units message.
 * @param {?number} [minValue=null]
 * @param {?number} [maxValue=null]
 * @returns {Int64Param.Spec}
 */
function makeInt64ParamSpec(defaultValue = null, units = null, minValue = null, maxValue = null) {
  return _numericalSpec(new Int64Param.Spec(), Int64Value, defaultValue, units, minValue, maxValue);
}

/**
 * A DoubleParam.Spec, like make_double_param_spec() in Python.
 * @param {?number} [defaultValue=null]
 * @param {?Object} [units=null] A bosdyn.api.Units message.
 * @param {?number} [minValue=null]
 * @param {?number} [maxValue=null]
 * @returns {DoubleParam.Spec}
 */
function makeDoubleParamSpec(defaultValue = null, units = null, minValue = null, maxValue = null) {
  return _numericalSpec(new DoubleParam.Spec(), DoubleValue, defaultValue, units, minValue, maxValue);
}

/**
 * A StringParam.Spec, like make_string_param_spec() in Python.
 * @param {?string[]} [options=null] The predetermined options the StringParam may be.
 * @param {?boolean} [editable=null] Whether the value may be edited.
 * @param {?string} [defaultValue=null]
 * @returns {StringParam.Spec}
 */
function makeStringParamSpec(options = null, editable = null, defaultValue = null) {
  return new StringParam.Spec()
    .setOptionsList(options ?? [])
    .setEditable(Boolean(editable))
    .setDefaultValue(defaultValue ?? '');
}

/**
 * A BoolParam.Spec, like make_bool_param_spec() in Python.
 * @param {?boolean} [defaultValue=null]
 * @returns {BoolParam.Spec}
 */
function makeBoolParamSpec(defaultValue = null) {
  const spec = new BoolParam.Spec();
  if (defaultValue !== null) spec.setDefaultValue(new BoolValue().setValue(defaultValue));
  return spec;
}

/**
 * A RegionOfInterestParam.Spec, like make_region_of_interest_param_spec() in Python.
 * @param {?RegionOfInterestParam.ServiceAndSource} [serviceAndSource=null]
 * @param {?Object} [defaultArea=null] A bosdyn.api.AreaI message.
 * @param {boolean} [allowsRectangle=false]
 * @param {boolean} [allowsPolygon=false]
 * @returns {RegionOfInterestParam.Spec}
 */
function makeRegionOfInterestParamSpec(
  serviceAndSource = null,
  defaultArea = null,
  allowsRectangle = false,
  allowsPolygon = false,
) {
  const spec = new RegionOfInterestParam.Spec().setAllowsRectangle(allowsRectangle).setAllowsPolygon(allowsPolygon);
  if (defaultArea !== null) spec.setDefaultArea(defaultArea.clone());
  if (serviceAndSource !== null) spec.setServiceAndSource(serviceAndSource.clone());
  return spec;
}

/**
 * A UserInterfaceInfo, like make_user_interface_info() in Python.
 * @param {?string} [displayName=null] The human-readable name displayed by the UI.
 * @param {?string} [description=null]
 * @param {?number} [displayOrder=null] The order in which the fields should be displayed.
 * @returns {UserInterfaceInfo}
 */
function makeUserInterfaceInfo(displayName = null, description = null, displayOrder = null) {
  const uiInfo = new UserInterfaceInfo();
  if (displayName !== null) uiInfo.setDisplayName(displayName);
  if (description !== null) uiInfo.setDescription(description);
  if (displayOrder !== null) uiInfo.setDisplayOrder(displayOrder);
  return uiInfo;
}

/**
 * A RegionOfInterestParam.ServiceAndSource, like make_roi_service_and_source() in Python.
 * @param {string} service The ImageService providing the image.
 * @param {string} source The ImageSource providing the image.
 * @returns {RegionOfInterestParam.ServiceAndSource}
 */
function makeRoiServiceAndSource(service, source) {
  return new RegionOfInterestParam.ServiceAndSource().setService(service).setSource(source);
}

module.exports = {
  InvalidCustomParamSpecError,
  InvalidCustomParamValueError,
  checkTypesMatch,
  validateDictSpec,
  createValueValidator,
  dictParamsToDict,
  listParamsToList,
  oneofParamToDict,
  customSpecToDefault,
  dictSpecToDefault,
  listSpecToDefault,
  intSpecToDefault,
  doubleSpecToDefault,
  stringSpecToDefault,
  roiSpecToDefault,
  boolSpecToDefault,
  oneOfSpecToDefault,
  dictParamCoerceTo,
  listParamCoerceTo,
  intParamCoerceTo,
  doubleParamCoerceTo,
  stringParamCoerceTo,
  roiParamCoerceTo,
  oneOfParamCoerceTo,
  customParamCoerceTo,
  makeCustomParamSpec,
  makeDictChildSpec,
  makeDictParamSpec,
  makeOneOfChildSpec,
  makeOneOfParamSpec,
  makeListParamSpec,
  makeInt64ParamSpec,
  makeDoubleParamSpec,
  makeStringParamSpec,
  makeBoolParamSpec,
  makeRegionOfInterestParamSpec,
  makeUserInterfaceInfo,
  makeRoiServiceAndSource,
  // The validators, private in Python too (used by its tests).
  _BoolParamValidator,
  _CustomParamValidator,
  _DictParamValidator,
  _DoubleParamValidator,
  _Int64ParamValidator,
  _ListParamValidator,
  _OneOfParamValidator,
  _RegionOfInterestParamValidator,
  _StringParamValidator,
};

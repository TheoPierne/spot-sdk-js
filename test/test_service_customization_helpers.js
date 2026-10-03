'use strict';

// Tests of the custom parameters (src/bosdyn-client/service_customization_helpers.js). The texts, values, errors and
// results of service_customization_cases.json come from bosdyn.client.service_customization_helpers of Python 5.1.4.
// Then the tests of Python 5.1.4 (tests/test_service_customization_helpers.py), with its cases.

const assert = require('node:assert');
const { Buffer } = require('node:buffer');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const { BoolValue, DoubleValue, Int64Value } = require('google-protobuf/google/protobuf/wrappers_pb');

const { AreaI, PolygonI, RectangleI, Vec2I } = require('../src/bosdyn/api/image_geometry_pb');
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
} = require('../src/bosdyn/api/service_customization_pb');
const { Units } = require('../src/bosdyn/api/units_pb');
const h = require('../src/bosdyn-client/service_customization_helpers');
const { messageToString } = require('../src/bosdyn-core/text_format');

const CASES = JSON.parse(fs.readFileSync(path.join(__dirname, 'service_customization_cases.json'), 'utf8'));

function decode(cls, b64) {
  return cls.deserializeBinary(Buffer.from(b64, 'base64'));
}

function text(message) {
  return message === null ? null : messageToString(message);
}

/** The values of a conversion, like jsonable() in the Python script: the messages as their text on one line. */
function jsonable(value) {
  if (value && typeof value.serializeBinary === 'function') {
    return { message: messageToString(value, { asOneLine: true }) };
  }
  if (Array.isArray(value)) return value.map(jsonable);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, jsonable(item)]));
  }
  return value;
}

/** The spec of the Python script, with the builders of JS. */
function buildSpec() {
  const choiceA = h.makeDictParamSpec({ x: h.makeDictChildSpec(h.makeInt64ParamSpec(3)) }, false);
  return h.makeDictParamSpec(
    {
      speed: h.makeDictChildSpec(
        h.makeDoubleParamSpec(0.5, new Units().setName('m/s'), 0.0, 2.0),
        h.makeUserInterfaceInfo('Speed', 'The speed', 1),
      ),
      count: h.makeDictChildSpec(h.makeInt64ParamSpec(2, null, 1, 5)),
      mode: h.makeDictChildSpec(h.makeStringParamSpec(['fast', 'slow'], false, 'slow')),
      name: h.makeDictChildSpec(h.makeStringParamSpec()),
      enabled: h.makeDictChildSpec(h.makeBoolParamSpec(true)),
      roi: h.makeDictChildSpec(
        h.makeRegionOfInterestParamSpec(
          h.makeRoiServiceAndSource('img', 'src'),
          new AreaI().setRectangle(new RectangleI().setX(1).setY(2).setCols(3).setRows(4)),
          true,
        ),
      ),
      points: h.makeDictChildSpec(h.makeListParamSpec(h.makeCustomParamSpec(h.makeInt64ParamSpec(7)), 2, 3)),
      choice: h.makeDictChildSpec(
        h.makeOneOfParamSpec(
          {
            a: h.makeOneOfChildSpec(choiceA, h.makeUserInterfaceInfo(null, null, 2)),
            b: h.makeOneOfChildSpec(h.makeDictParamSpec({}, true)),
          },
          'a',
        ),
      ),
      nested: h.makeDictChildSpec(h.makeDictParamSpec({ flag: h.makeDictChildSpec(h.makeBoolParamSpec()) }, true)),
    },
    false,
  );
}

test('the builders of the specs give the specs of Python (they were missing)', () => {
  assert.strictEqual(text(buildSpec()), CASES.spec.text);
  assert.throws(() => h.makeCustomParamSpec(new Units()), /Must provide a spec from service_customization_pb2/);
});

test('the defaults of the specs are the ones of Python', () => {
  const spec = decode(DictParam.Spec, CASES.spec.b64);
  assert.strictEqual(text(h.dictSpecToDefault(spec)), CASES.default);
  const specOf = key => spec.getSpecsMap().get(key).getSpec();
  const choiceA = h.makeDictParamSpec({ x: h.makeDictChildSpec(h.makeInt64ParamSpec(3)) }, false);
  const defaults = {
    'roi without rectangle': h.roiSpecToDefault(h.makeRegionOfInterestParamSpec()),
    'one of without default key': h.oneOfSpecToDefault(
      h.makeOneOfParamSpec({ a: h.makeOneOfChildSpec(choiceA) }, 'zz'),
    ),
    'string from options': h.stringSpecToDefault(h.makeStringParamSpec(['x', 'y'])),
    'int from max': h.intSpecToDefault(h.makeInt64ParamSpec(null, null, null, -3)),
    'double none': h.doubleSpecToDefault(h.makeDoubleParamSpec()),
    'bool none': h.boolSpecToDefault(h.makeBoolParamSpec()),
  };
  assert.deepStrictEqual(
    Object.fromEntries(Object.entries(defaults).map(([name, message]) => [name, text(message)])),
    CASES.defaults,
  );
  assert.strictEqual(text(h.customSpecToDefault(specOf('count'))), 'int_value {\n  value: 2\n}\n');
});

test('the conversions to objects and arrays give the values of Python, and validate the parameters', () => {
  const spec = decode(DictParam.Spec, CASES.spec.b64);
  const param = decode(DictParam, CASES.converted.param);
  assert.deepStrictEqual(jsonable(h.dictParamsToDict(param, spec)), CASES.converted.dict);
  const specOf = key => spec.getSpecsMap().get(key).getSpec();
  const valueOf = key => param.getValuesMap().get(key);
  assert.deepStrictEqual(
    jsonable(h.listParamsToList(valueOf('points').getListValue(), specOf('points').getListSpec())),
    CASES.list,
  );
  assert.deepStrictEqual(
    jsonable(h.oneofParamToDict(valueOf('choice').getOneOfValue(), specOf('choice').getOneOfSpec())),
    CASES.oneof,
  );

  // The errors of the validators, with the lists of Python in their messages (they were JSON).
  const bad = decode(DictParam, CASES.invalid.param);
  assert.throws(
    () => h.dictParamsToDict(bad, spec),
    error => error instanceof h.InvalidCustomParamValueError && text(error.protoError) === CASES.invalid.error,
  );
  const invalidSpec = h.makeDictParamSpec(
    { count: h.makeDictChildSpec(h.makeInt64ParamSpec(null, null, 1, 5)) },
    false,
  );
  assert.throws(
    () => h.validateDictSpec(invalidSpec),
    error =>
      error instanceof h.InvalidCustomParamSpecError &&
      JSON.stringify(error.errorMessages) === JSON.stringify(CASES.invalid_spec),
  );
});

test('the coercions of the parameters to the specs give the parameters and the results of Python', () => {
  const spec = decode(DictParam.Spec, CASES.spec.b64);
  const specOf = key => spec.getSpecsMap().get(key).getSpec();
  const runs = {
    dict: [DictParam, h.dictParamCoerceTo, spec],
    'valid dict': [DictParam, h.dictParamCoerceTo, spec],
    'extra key only': [DictParam, h.dictParamCoerceTo, spec],
    'short list': [ListParam, h.listParamCoerceTo, specOf('points').getListSpec()],
    'roi same': [RegionOfInterestParam, h.roiParamCoerceTo, specOf('roi').getRoiSpec()],
    'roi other': [RegionOfInterestParam, h.roiParamCoerceTo, specOf('roi').getRoiSpec()],
    'empty custom param': [CustomParam, h.customParamCoerceTo, specOf('points')],
  };
  for (const entry of CASES.coerce) {
    const [cls, coerce, specMessage] = runs[entry.name];
    const param = decode(cls, entry.param);
    assert.strictEqual(coerce(param, specMessage), entry.did, `${entry.name}: result`);
    assert.strictEqual(text(param), entry.after, `${entry.name}: parameter`);
  }
  assert.strictEqual(CASES.coerce.length, 7);
});

// ---------------------------------------------------------------------------------------------------------------
// The tests of Python 5.1.4 (tests/test_service_customization_helpers.py), with its cases in its order: like its
// parametrized cases, the cases share the messages, and the coercions modify their parameters.
// ---------------------------------------------------------------------------------------------------------------

/** e.g. 'one_of' -> 'OneOf'. */
function pascal(snake) {
  return snake
    .split('_')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('');
}

/** Like == of the Python messages (jspb serializes the entries of the maps sorted by key). */
function messagesEqual(a, b) {
  return a.constructor === b.constructor && Buffer.from(a.serializeBinary()).equals(Buffer.from(b.serializeBinary()));
}

const int64Value = value => new Int64Value().setValue(value);
const doubleValue = value => new DoubleValue().setValue(value);
const intParam = value => new Int64Param().setValue(value);
const doubleParam = value => new DoubleParam().setValue(value);
const stringParam = value => new StringParam().setValue(value);

// Helpers to define specs

function numericalSpec(NumericalType, defaultValue = null, minValue = null, maxValue = null) {
  const Wrapper = NumericalType === Int64Param ? Int64Value : DoubleValue;
  const spec = new NumericalType.Spec();
  if (defaultValue !== null) spec.setDefaultValue(new Wrapper().setValue(defaultValue));
  if (minValue !== null) spec.setMinValue(new Wrapper().setValue(minValue));
  if (maxValue !== null) spec.setMaxValue(new Wrapper().setValue(maxValue));
  return spec;
}

function stringSpec(defaultValue = null, options = null, editable = false) {
  const spec = new StringParam.Spec();
  if (defaultValue !== null) spec.setDefaultValue(defaultValue);
  if (options !== null) spec.setOptionsList([...options]);
  return spec.setEditable(editable);
}

function boolSpec(boolValue = false) {
  return new BoolParam.Spec().setDefaultValue(new BoolValue().setValue(boolValue));
}

// Not currently testing the other arguments in a meaningful way, but they can be added
function roiSpec(allowsRectangle = true) {
  const spec = new RegionOfInterestParam.Spec().setServiceAndSource(
    new RegionOfInterestParam.ServiceAndSource().setService('fake_service').setSource('fake_source'),
  );
  // Python sets x to 5, and then to 10.
  spec.setDefaultArea(new AreaI().setRectangle(new RectangleI().setX(10).setCols(5).setRows(10)));
  return spec.setAllowsRectangle(allowsRectangle);
}

// (roi_spec_poly() and dict_spec() of Python are not used.)

/** Sets a copy of the spec in the field of its type, e.g. custom_spec.int_spec.CopyFrom(spec) in Python. */
function customSpec(typeString, originalSpec) {
  return new CustomParam.Spec()[`set${pascal(typeString)}Spec`](originalSpec.clone());
}

function listSpec(typeString, originalSpec, minNumberOfValues = null, maxNumberOfValues = null) {
  const spec = new ListParam.Spec().setElementSpec(customSpec(typeString, originalSpec));
  // Like Python, the falsy bounds are not set.
  if (minNumberOfValues) spec.setMinNumberOfValues(int64Value(minNumberOfValues));
  if (maxNumberOfValues) spec.setMaxNumberOfValues(int64Value(maxNumberOfValues));
  return spec;
}

// Test cases are built individually in an attempt to minimize number of test cases necessary for decent coverage
// Cases should be structured with passing cases first, and failing cases second for easier indexing of good vs. bad
// cases

// default, min_value, max_value, is_valid
const intSpecTestCases = [
  [3, 1, 9, true],
  [-4, null, null, true],
  [null, null, null, true],
  [-8, 0, 5, false],
  [1, 3, 9, false],
  [-2, -1, null, false],
];
const intSpecInputs = intSpecTestCases.map(inputs => [
  numericalSpec(Int64Param, ...inputs.slice(0, 3)),
  h._Int64ParamValidator,
  inputs.at(-1),
]);

// default, min_value, max_value, is_valid
const doubleSpecTestCases = [
  [0.01, -0.1, 0.9, true],
  [-0.99, null, 431.6, true],
  [null, null, null, true],
  [0.6, 3.5, 9, false],
  [-5, -1, null, false],
];
const doubleSpecInputs = doubleSpecTestCases.map(inputs => [
  numericalSpec(DoubleParam, ...inputs.slice(0, 3)),
  h._DoubleParamValidator,
  inputs.at(-1),
]);

// default, options, editable, is_valid
const stringSpecTestCases = [
  ['red', ['red', 'blue', 'green'], false, true],
  ['default', null, false, true],
  ['yellow', ['red', 'blue', 'green'], true, true],
  [null, null, false, true],
  ['car', ['red'], false, false],
];
const stringSpecInputs = stringSpecTestCases.map(inputs => [
  stringSpec(...inputs.slice(0, 3)),
  h._StringParamValidator,
  inputs.at(-1),
]);

// value, is_valid
const boolSpecInputs = [true, false].map(boolValue => [boolSpec(boolValue), h._BoolParamValidator, true]);

const roiSpecInputs = [true, false].map(allowsRectangle => [
  roiSpec(allowsRectangle),
  h._RegionOfInterestParamValidator,
  allowsRectangle,
]);

// type_string, element_spec, is_valid
const customSpecTestCases = [
  ['int', intSpecInputs[0][0], true],
  ['string', stringSpecInputs.at(-1)[0], false],
];
const customSpecInputs = customSpecTestCases.map(inputs => [
  customSpec(...inputs.slice(0, -1)),
  h._CustomParamValidator,
  inputs.at(-1),
]);

// type_string, element_spec, min_number_of_values, max_number_of_values, is_valid
const listSpecTestCases = [
  ['int', intSpecInputs[0][0], 1, 4, true],
  ['string', stringSpecInputs[0][0], null, null, true],
  ['bool', boolSpecInputs[0][0], 3, 2, false],
  ['int', intSpecInputs.at(-1)[0], 1, 4, false],
  ['roi', roiSpecInputs[0][0], -3, -1, false],
];
const listSpecInputs = listSpecTestCases.map(inputs => [
  listSpec(...inputs.slice(0, 4)),
  h._ListParamValidator,
  inputs.at(-1),
]);

/** A DictParam.ChildSpec of a copy of the spec, like specs[key].spec.<type>_spec.CopyFrom(spec) in Python. */
function childSpec(typeString, spec) {
  return new DictParam.ChildSpec().setSpec(customSpec(typeString, spec));
}

function smallDictSpec(int64Spec, stringOptionsSpec) {
  const spec = new DictParam.Spec();
  spec.getSpecsMap().set('int', childSpec('int', int64Spec));
  spec.getSpecsMap().set('string_options', childSpec('string', stringOptionsSpec));
  return spec;
}

const smallDictSpecGood = smallDictSpec(intSpecInputs[0][0], stringSpecInputs[0][0]);
const smallDictSpecBad = smallDictSpec(intSpecInputs.at(-1)[0], stringSpecInputs[0][0]);

function smallOneOfSpec(dictSpec1, dictSpec2, defaultKey = 'option 1') {
  const spec = new OneOfParam.Spec();
  spec.getSpecsMap().set('option 1', new OneOfParam.ChildSpec().setSpec(dictSpec1.clone()));
  spec.getSpecsMap().set('option 2', new OneOfParam.ChildSpec().setSpec(dictSpec2.clone()));
  if (defaultKey) spec.setDefaultKey(defaultKey);
  return spec;
}

const smallOneOfSpecGood = smallOneOfSpec(smallDictSpecGood, smallDictSpecGood);
const smallOneOfSpecBadDict = smallOneOfSpec(smallDictSpecGood, smallDictSpecBad);
const smallOneOfSpecBadKey = smallOneOfSpec(smallDictSpecGood, smallDictSpecGood, 'not_an_option');
const smallOneOfSpecNoKey = smallOneOfSpec(smallDictSpecGood, smallDictSpecGood, null);

// The keys of the nested dicts, which are the types of their values.
const NESTED_KEYS = ['int', 'double', 'string', 'bool', 'roi', 'list', 'one_of', 'dict'];

/** nested_dict_spec(int_spec, double_spec, string_spec, bool_spec, roi_spec, list_spec, one_of_spec, dict_spec). */
function nestedDictSpec(...specs) {
  const spec = new DictParam.Spec();
  NESTED_KEYS.forEach((key, index) => spec.getSpecsMap().set(key, childSpec(key, specs[index])));
  return spec;
}

const nestedDictSpecGood = nestedDictSpec(
  intSpecInputs[0][0],
  doubleSpecInputs[0][0],
  stringSpecInputs[0][0],
  boolSpecInputs[0][0],
  roiSpecInputs[0][0],
  listSpecInputs[0][0],
  smallOneOfSpecGood,
  smallDictSpecGood,
);

const nestedDictSpecBad = nestedDictSpecGood.clone();
// Arbitrary bad sub-spec
nestedDictSpecBad.getSpecsMap().get('roi').getSpec().setRoiSpec(roiSpecInputs.at(-1)[0].clone());

function nestedOneOfSpec(nestedSpec, otherDictSpec) {
  const spec = new OneOfParam.Spec();
  spec.getSpecsMap().set('nested', new OneOfParam.ChildSpec().setSpec(nestedSpec.clone()));
  spec.getSpecsMap().set('simple', new OneOfParam.ChildSpec().setSpec(otherDictSpec.clone()));
  // Python's nested_one_of_spec() does not use its default_key argument.
  return spec.setDefaultKey('nested');
}

const nestedOneOfSpecGood = nestedOneOfSpec(nestedDictSpecGood, smallDictSpecGood);
const nestedOneOfSpecBad = nestedOneOfSpec(nestedDictSpecBad, smallDictSpecGood);

const dictSpecInputs = [
  [smallDictSpecGood, h._DictParamValidator, true],
  [nestedDictSpecGood, h._DictParamValidator, true],
  [smallDictSpecBad, h._DictParamValidator, false],
  [nestedDictSpecBad, h._DictParamValidator, false],
];

const oneOfSpecInputs = [
  [smallOneOfSpecGood, h._OneOfParamValidator, true],
  [nestedOneOfSpecGood, h._OneOfParamValidator, true],
  [smallOneOfSpecNoKey, h._OneOfParamValidator, true],
  [smallOneOfSpecBadDict, h._OneOfParamValidator, false],
  [smallOneOfSpecBadKey, h._OneOfParamValidator, false],
  [nestedOneOfSpecBad, h._OneOfParamValidator, false],
];

const allInputSpecs = [
  ...intSpecInputs,
  ...doubleSpecInputs,
  ...stringSpecInputs,
  ...boolSpecInputs,
  ...roiSpecInputs,
  ...customSpecInputs,
  ...listSpecInputs,
  ...dictSpecInputs,
  ...oneOfSpecInputs,
];

test('test_custom_parameter_spec of Python: the specs are validated', () => {
  assert.strictEqual(allInputSpecs.length, 37);
  allInputSpecs.forEach(([spec, SpecHelper, isValid], index) => {
    const label = `[${index}] ${SpecHelper.name}`;
    if (isValid) {
      assert.strictEqual(new SpecHelper(spec).validateSpec(), undefined, label);
      if (SpecHelper === h._DictParamValidator) assert.strictEqual(h.validateDictSpec(spec), undefined, label);
    } else {
      assert.throws(() => new SpecHelper(spec).validateSpec(), h.InvalidCustomParamSpecError, label);
      if (SpecHelper === h._DictParamValidator) {
        assert.throws(() => h.validateDictSpec(spec), h.InvalidCustomParamSpecError, label);
      }
    }
  });
});

// Value helper functions

/** Sets a copy of the value in the field of its type, e.g. custom_value.int_value.CopyFrom(value) in Python. */
function customValue(typeString, originalValue) {
  return new CustomParam()[`set${pascal(typeString)}Value`](originalValue.clone());
}

const intValueInputs = [
  [intParam(5), intSpecInputs[0][0], h._Int64ParamValidator, true],
  [intParam(21341), intSpecInputs[2][0], h._Int64ParamValidator, true],
  [intParam(-1), intSpecInputs[0][0], h._Int64ParamValidator, false],
  [intParam(55), intSpecInputs[0][0], h._Int64ParamValidator, false],
];

const doubleValueInputs = [
  [doubleParam(0.3183), doubleSpecInputs[0][0], h._DoubleParamValidator, true],
  [doubleParam(-67.234), doubleSpecInputs[2][0], h._DoubleParamValidator, true],
  [doubleParam(-50), doubleSpecInputs[0][0], h._DoubleParamValidator, false],
  [doubleParam(234223.2), doubleSpecInputs[0][0], h._DoubleParamValidator, false],
];

const stringValueInputs = [
  [stringParam('blue'), stringSpecInputs[0][0], h._StringParamValidator, true],
  [stringParam('anything'), stringSpecInputs[1][0], h._StringParamValidator, true],
  [stringParam('anything'), stringSpecInputs[2][0], h._StringParamValidator, true],
  [stringParam('notanoption'), stringSpecInputs[0][0], h._StringParamValidator, false],
];

const boolValueInputs = [[new BoolParam().setValue(true), boolSpecInputs[0][0], h._BoolParamValidator, true]];

const goodRoiVal = new RegionOfInterestParam()
  .setArea(new AreaI().setRectangle(new RectangleI().setX(5).setY(10).setCols(10).setRows(25)))
  .setServiceAndSource(h.makeRoiServiceAndSource('fakeservice', 'fakesource'))
  .setImageCols(400)
  .setImageRows(400);
const badRoiVal = goodRoiVal.clone().setImageCols(-1);

const roiValueInputs = [
  [goodRoiVal, roiSpecInputs[0][0], h._RegionOfInterestParamValidator, true],
  [badRoiVal, roiSpecInputs[0][0], h._RegionOfInterestParamValidator, false],
  [goodRoiVal, roiSpecInputs[1][0], h._RegionOfInterestParamValidator, false],
];

const customValueInputs = [
  [customValue('roi', goodRoiVal), customSpec('roi', roiSpecInputs[0][0]), h._CustomParamValidator, true],
  [
    customValue('string', stringValueInputs.at(-1)[0]),
    customSpec('string', stringValueInputs.at(-1)[1]),
    h._CustomParamValidator,
    false,
  ],
];

const goodIntListValue = new ListParam();
goodIntListValue.addValues(customValue('int', intValueInputs[0][0]));
goodIntListValue.addValues(customValue('int', intParam(2)));

const zeroSizeListValue = new ListParam();

const badIntListValue = goodIntListValue.clone();
badIntListValue.addValues(customValue('int', intParam(-5)));

const badTypeListValue = new ListParam();
badTypeListValue.addValues(customValue('roi', roiValueInputs[0][0]));

const listValueInputs = [
  [goodIntListValue, listSpecInputs[0][0], h._ListParamValidator, true],
  [zeroSizeListValue, listSpecInputs[1][0], h._ListParamValidator, true],
  [zeroSizeListValue, listSpecInputs[0][0], h._ListParamValidator, false],
  [badIntListValue, listSpecInputs[0][0], h._ListParamValidator, false],
  [badTypeListValue, listSpecInputs[1][0], h._ListParamValidator, false],
];

// Uses keys from smallDictSpec above
function smallDictValue(int64value, stringvalue) {
  const dictValue = new DictParam();
  dictValue.getValuesMap().set('int', customValue('int', int64value));
  dictValue.getValuesMap().set('string_options', customValue('string', stringvalue));
  return dictValue;
}

const smallDictValueGood = smallDictValue(intValueInputs[0][0], stringValueInputs[0][0]);
const smallDictValueBad = smallDictValue(intValueInputs.at(-1)[0], stringValueInputs[0][0]);

// Uses keys from smallOneOfSpec above
function smallOneOfValue(dictValue1, dictValue2, key = 'option 1') {
  const oneOfValue = new OneOfParam();
  oneOfValue.getValuesMap().set('option 1', dictValue1.clone());
  oneOfValue.getValuesMap().set('option 2', dictValue2.clone());
  return oneOfValue.setKey(key);
}

const smallOneOfValueGood = smallOneOfValue(smallDictValueGood, smallDictValueGood);
const smallOneOfValueBadKey = smallOneOfValue(smallDictValueGood, smallDictValueGood, 'notakey');
const smallOneOfValueBadDict = smallOneOfValue(smallDictValueGood, smallDictValueBad, 'option 2');

// Uses keys from nestedDictSpec above: nested_dict_value(int_value, double_value, string_value, bool_value,
// roi_value, list_value, one_of_value, dict_value)
function nestedDictValue(...values) {
  const dictValue = new DictParam();
  NESTED_KEYS.forEach((key, index) => dictValue.getValuesMap().set(key, customValue(key, values[index])));
  return dictValue;
}

const nestedDictValueGood = nestedDictValue(
  intValueInputs[0][0],
  doubleValueInputs[0][0],
  stringValueInputs[0][0],
  boolValueInputs[0][0],
  roiValueInputs[0][0],
  listValueInputs[0][0],
  smallOneOfValueGood,
  smallDictValueGood,
);

const nestedDictValueBad = nestedDictValueGood.clone();
nestedDictValueBad.getValuesMap().get('list').setListValue(badIntListValue.clone());

// Uses keys from nestedOneOfSpec above
function nestedOneOfValue(nestedValue, otherDictValue, key = 'nested') {
  const oneOfValue = new OneOfParam();
  oneOfValue.getValuesMap().set('nested', nestedValue.clone());
  oneOfValue.getValuesMap().set('simple', otherDictValue.clone());
  return oneOfValue.setKey(key);
}

const nestedOneOfValueGood = nestedOneOfValue(nestedDictValueGood, smallDictValueGood, 'simple');
const nestedOneOfValueBad = nestedOneOfValue(nestedDictValueBad, smallDictValueGood);

const dictValueInputs = [
  [smallDictValueGood, smallDictSpecGood, h._DictParamValidator, true],
  [nestedDictValueGood, nestedDictSpecGood, h._DictParamValidator, true],
  [smallDictValueBad, smallDictSpecGood, h._DictParamValidator, false],
  [nestedDictValueBad, nestedDictSpecGood, h._DictParamValidator, false],
  [smallDictValueGood, nestedDictSpecGood, h._DictParamValidator, false],
];

const oneOfValueInputs = [
  [smallOneOfValueGood, smallOneOfSpecGood, h._OneOfParamValidator, true],
  [nestedOneOfValueGood, nestedOneOfSpecGood, h._OneOfParamValidator, true],
  [smallOneOfValueBadDict, smallOneOfSpecGood, h._OneOfParamValidator, false],
  [smallOneOfValueBadKey, smallOneOfSpecGood, h._OneOfParamValidator, false],
  [nestedOneOfValueBad, nestedOneOfSpecGood, h._OneOfParamValidator, false],
  [nestedOneOfValueGood, smallOneOfSpecGood, h._OneOfParamValidator, false],
];

const allInputValues = [
  ...intValueInputs,
  ...doubleValueInputs,
  ...stringValueInputs,
  ...boolValueInputs,
  ...roiValueInputs,
  ...customValueInputs,
  ...listValueInputs,
  ...dictValueInputs,
  ...oneOfValueInputs,
];

test('test_custom_parameter_values of Python: the values are validated against the specs', () => {
  assert.strictEqual(allInputValues.length, 34);
  allInputValues.forEach(([value, spec, SpecHelper, isValid], index) => {
    const label = `[${index}] ${SpecHelper.name}`;
    const errorProto = new SpecHelper(spec).validateValue(value);
    let dictValidatorResult = null;
    if (SpecHelper === h._DictParamValidator) {
      const dictValidator = h.createValueValidator(spec);
      dictValidatorResult = dictValidator(value);
    }
    if (isValid) {
      assert.strictEqual(errorProto, null, label);
    } else {
      assert.ok(errorProto instanceof CustomParamError, label);
      assert.notStrictEqual(errorProto.getStatus(), CustomParamError.Status.STATUS_OK, label);
      assert.ok(errorProto.getErrorMessagesList().length > 0, label);
    }
    if (SpecHelper === h._DictParamValidator) {
      const same =
        errorProto === null || dictValidatorResult === null
          ? errorProto === dictValidatorResult
          : messagesEqual(errorProto, dictValidatorResult);
      assert.ok(same, label);
    }
  });
});

// The cases: param, spec, spec_helper, expected, was_coerced
const intValueInputsForCoercion = [
  // no coercion pos value
  [intParam(5), intSpecInputs[0][0], h.intParamCoerceTo, intParam(5), false],
  // no coercion pos value, no max
  [intParam(21341), intSpecInputs[2][0], h.intParamCoerceTo, intParam(21341), false],
  // no coercion neg value, no min
  [intParam(-21341), intSpecInputs[1][0], h.intParamCoerceTo, intParam(-21341), false],
  // coercion neg value, param below min
  [intParam(-1), intSpecInputs[0][0], h.intParamCoerceTo, intParam(3), true],
  // coercion pos value, param above max
  [intParam(55), intSpecInputs[0][0], h.intParamCoerceTo, intParam(3), true],
  // setting param to spec max
  [intParam(9), intSpecInputs[0][0], h.intParamCoerceTo, intParam(9), false],
  // setting param to spec min
  [intParam(1), intSpecInputs[0][0], h.intParamCoerceTo, intParam(1), false],
  // Int64Param(value=None) in Python
  [new Int64Param(), intSpecInputs[2][0], h.intParamCoerceTo, new Int64Param(), false],
  // coercion: value is smaller than min
  [intParam(5), h.makeInt64ParamSpec(null, null, 6, 8), h.intParamCoerceTo, intParam(6), true],
  // coercion: value is larger than max
  [intParam(10), h.makeInt64ParamSpec(null, null, 6, 8), h.intParamCoerceTo, intParam(6), true],
];

const doubleValueInputsForCoercion = [
  // no coercion pos value
  [doubleParam(0.3183), doubleSpecInputs[0][0], h.doubleParamCoerceTo, doubleParam(0.3183), false],
  // no coercion pos value, no min
  [doubleParam(-67.234), doubleSpecInputs[1][0], h.doubleParamCoerceTo, doubleParam(-67.234), false],
  // no coercion pos value, no max
  [doubleParam(564267.234), doubleSpecInputs[2][0], h.doubleParamCoerceTo, doubleParam(564267.234), false],
  // coercion pos value, param below min
  [doubleParam(-50), doubleSpecInputs[0][0], h.doubleParamCoerceTo, doubleParam(0.01), true],
  // coercion pos value, param above max
  [doubleParam(234223.2), doubleSpecInputs[0][0], h.doubleParamCoerceTo, doubleParam(0.01), true],
  // no coercion, using zero
  [doubleParam(0.0), doubleSpecInputs[0][0], h.doubleParamCoerceTo, doubleParam(0.0), false],
  // DoubleParam(value=None) in Python
  [new DoubleParam(), doubleSpecInputs[2][0], h.doubleParamCoerceTo, new DoubleParam(), false],
  // coercion: value is smaller than min
  [doubleParam(5.5), h.makeDoubleParamSpec(null, null, 5.9, 8.7), h.doubleParamCoerceTo, doubleParam(5.9), true],
  // coercion: value is larger than max
  [doubleParam(10.9), h.makeDoubleParamSpec(null, null, 5.9, 8.7), h.doubleParamCoerceTo, doubleParam(5.9), true],
];

const stringValueInputsForCoercion = [
  // not editable, blue is an option
  [stringParam('blue'), stringSpecInputs[0][0], h.stringParamCoerceTo, stringParam('blue'), false],
  // not editable, param val is not an option
  [stringParam('notanoption'), stringSpecInputs[0][0], h.stringParamCoerceTo, stringParam('red'), true],
  // not editable but no options given
  [stringParam('anything'), stringSpecInputs[1][0], h.stringParamCoerceTo, stringParam('anything'), false],
  // editable, any val is valid
  [stringParam('anything'), stringSpecInputs[2][0], h.stringParamCoerceTo, stringParam('anything'), false],
  // StringParam(value=None) in Python
  [new StringParam(), stringSpecInputs[3][0], h.stringParamCoerceTo, new StringParam(), false],
];

function buildListForCoercionTests(listType, listValue, size) {
  const testList = new ListParam();
  for (let x = 0; x < size; x++) testList.addValues(customValue(listType, listValue));
  return testList;
}

const coercedIntList0 = buildListForCoercionTests('int', intParam(5), 1);
coercedIntList0.addValues(customValue('int', intParam(2)));
const coercedIntList1 = buildListForCoercionTests('int', intValueInputs[0][0], 1);
coercedIntList1.addValues(customValue('int', intParam(2)));
coercedIntList1.addValues(customValue('int', intParam(3)));
const coercedIntList2 = buildListForCoercionTests('int', intParam(3), 5);
const coercedIntList3 = buildListForCoercionTests('int', intParam(3), 4);
const coercedIntList4 = buildListForCoercionTests('int', intParam(3), 1);

const coercedIntList5 = buildListForCoercionTests('int', intParam(3), 1);

const coercedStringList1 = new ListParam();

// copy.deepcopy() in Python.
const goodIntListValueForCoercion = goodIntListValue.clone();
const badIntListValueForCoercion = badIntListValue.clone();
const zeroSizeListValueForCoercion = zeroSizeListValue.clone();

const listValueInputsForCoercion = [
  // int list no coercion , good list = [5, 2]
  [goodIntListValueForCoercion, listSpecInputs[0][0], h.listParamCoerceTo, coercedIntList0, false],
  // int list coercion , bad list [5, 2, -5],
  [badIntListValueForCoercion, listSpecInputs[0][0], h.listParamCoerceTo, coercedIntList1, true],
  // int list coercion, param len is greater than max num of values
  [coercedIntList2, listSpecInputs[0][0], h.listParamCoerceTo, coercedIntList3, true],
  // list of strings, no min, should be valid
  [zeroSizeListValueForCoercion, listSpecInputs[1][0], h.listParamCoerceTo, coercedStringList1, false],
  // list of ints, min size is 1, not valid setting param to contain spec default value
  [zeroSizeListValueForCoercion, listSpecInputs[0][0], h.listParamCoerceTo, coercedIntList4, true],
];

const smallDictValueGoodExpected = smallDictValue(intParam(5), stringParam('blue'));
const smallDictValueBadExpected = smallDictValue(intParam(3), stringParam('blue'));
const smallDictValueBadExpected1 = smallDictValue(intParam(3), stringParam('red'));

const smallOneOfValueGoodExpected = smallOneOfValue(smallDictValueGood, smallDictValueGood);
// (small_one_of_value_bad_expected of Python is not used.)

const smallOneOfValueBadExpected1 = smallOneOfValue(smallDictValueBadExpected1, smallDictValueBadExpected1);
const goodRoiValExpected = new RegionOfInterestParam()
  .setArea(new AreaI().setRectangle(new RectangleI().setX(5).setY(10).setCols(10).setRows(25)))
  .setServiceAndSource(h.makeRoiServiceAndSource('fakeservice', 'fakesource'))
  .setImageCols(400)
  .setImageRows(400);

const badRoiValExpected = new RegionOfInterestParam()
  .setArea(new AreaI().setRectangle(new RectangleI().setX(10).setCols(5).setRows(10)))
  .setServiceAndSource(h.makeRoiServiceAndSource('fake_service', 'fake_source'))
  .setImageCols(0)
  .setImageRows(0);

const nestedDictValueGoodExpected = nestedDictValue(
  intParam(5),
  doubleParam(0.3183),
  stringParam('blue'),
  new BoolParam().setValue(true),
  goodRoiValExpected,
  coercedIntList0,
  smallOneOfValueGoodExpected,
  smallDictValueGoodExpected,
);

const nestedDictValueBadExpected = nestedDictValueGoodExpected.clone();
nestedDictValueBadExpected.getValuesMap().get('list').setListValue(coercedIntList1.clone());

const nestedOneOfValueGoodExpected = nestedOneOfValue(
  nestedDictValueGoodExpected,
  smallDictValueGoodExpected,
  'simple',
);
const nestedOneOfValueBadExpected = nestedOneOfValue(nestedDictValueBadExpected, smallDictValueGoodExpected);

// (small_one_of_value_bad_key_expected of Python is not used.)
const smallOneOfValueBadDictExpected = smallOneOfValue(
  smallDictValueGoodExpected,
  smallDictValueBadExpected,
  'option 2',
);

const nestedDictValueGoodExpected1 = nestedDictValue(
  intParam(5),
  doubleParam(0.01),
  stringParam('red'),
  new BoolParam().setValue(true),
  badRoiValExpected,
  coercedIntList5,
  smallOneOfValueBadExpected1,
  smallDictValueBadExpected1,
);

const smallDictValueGoodForCoercion = smallDictValueGood.clone();
const nestedDictValueGoodForCoercion = nestedDictValueGood.clone();
const smallDictValueBadForCoercion = smallDictValueBad.clone();
const nestedDictValueBadForCoercion = nestedDictValueBad.clone();

const dictValueInputsForCoercion = [
  // no coercion
  [smallDictValueGoodForCoercion, smallDictSpecGood, h.dictParamCoerceTo, smallDictValueGoodExpected, false],
  // nested dict, no coercion
  [nestedDictValueGoodForCoercion, nestedDictSpecGood, h.dictParamCoerceTo, nestedDictValueGoodExpected, false],
  // coercion, invalid int, valid string
  [smallDictValueBadForCoercion, smallDictSpecGood, h.dictParamCoerceTo, smallDictValueBadExpected, true],
  // coercion, invalid int in list
  [nestedDictValueBadForCoercion, nestedDictSpecGood, h.dictParamCoerceTo, nestedDictValueBadExpected, true],
  // coercion, missing values in param
  [smallDictValueGoodForCoercion, nestedDictSpecGood, h.dictParamCoerceTo, nestedDictValueGoodExpected1, true],
];

const smallOneOfValueGoodForCoercion = smallOneOfValueGood.clone();
const nestedOneOfValueGoodForCoercion = nestedOneOfValueGood.clone();
const smallOneOfValueBadDictForCoercion = smallOneOfValueBadDict.clone();
const smallOneOfValueBadKeyForCoercion = smallOneOfValueBadKey.clone();
const nestedOneOfValueBadForCoercion = nestedOneOfValueBad.clone();

const oneOfValueInputsForCoercion = [
  // no coercion
  [smallOneOfValueGoodForCoercion, smallOneOfSpecGood, h.oneOfParamCoerceTo, smallOneOfValueGoodExpected, false],
  // no coercion
  [nestedOneOfValueGoodForCoercion, nestedOneOfSpecGood, h.oneOfParamCoerceTo, nestedOneOfValueGoodExpected, false],
  // coercion, bad option 2 with invalid int
  [smallOneOfValueBadDictForCoercion, smallOneOfSpecGood, h.oneOfParamCoerceTo, smallOneOfValueBadDictExpected, true],
  // coercion, invalid key
  [smallOneOfValueBadKeyForCoercion, smallOneOfSpecGood, h.oneOfParamCoerceTo, smallOneOfValueGoodExpected, true],
  // coercion, invalid nested list
  [nestedOneOfValueBadForCoercion, nestedOneOfSpecGood, h.oneOfParamCoerceTo, nestedOneOfValueBadExpected, true],
  // coercion, two invalid options, bad string and int values
  [nestedOneOfValueGoodForCoercion, smallOneOfSpecGood, h.oneOfParamCoerceTo, smallOneOfValueBadExpected1, true],
];

const inputsForCoercion = [
  ...intValueInputsForCoercion,
  ...doubleValueInputsForCoercion,
  ...stringValueInputsForCoercion,
  ...listValueInputsForCoercion,
  ...dictValueInputsForCoercion,
  ...oneOfValueInputsForCoercion,
];

test('test_parameter_coercion of Python: the parameters are coerced to the specs', () => {
  assert.strictEqual(inputsForCoercion.length, 40);
  inputsForCoercion.forEach(([param, spec, specHelper, expected, wasCoerced], index) => {
    const label = `[${index}] ${specHelper.name}`;
    assert.strictEqual(specHelper(param, spec), wasCoerced, label);
    assert.ok(messagesEqual(param, expected), `${label}:\n${text(param)}!=\n${text(expected)}`);
  });
});

/** The value set in a CustomParam, like getattr(custom_param, custom_param.WhichOneof('value')) in Python. */
function whichValue(customParam) {
  const { ValueCase } = CustomParam;
  const name = Object.keys(ValueCase).find(key => ValueCase[key] === customParam.getValueCase());
  return customParam[`get${pascal(name.toLowerCase())}`]();
}

/** The checks of a converted value against its parameter, of _check_dict() and _check_list() of Python. */
function checkValue(value, customParam) {
  const paramValue = whichValue(customParam);
  if (paramValue instanceof OneOfParam) {
    checkDict(value, paramValue.getValuesMap().get(paramValue.getKey()));
  } else if (value?.constructor === Object) {
    checkDict(value, paramValue);
  } else if (Array.isArray(value)) {
    checkList(value, paramValue);
  } else if (value instanceof RegionOfInterestParam) {
    assert.ok(messagesEqual(value, paramValue));
  } else {
    assert.strictEqual(value, paramValue.getValue());
  }
}

function checkDict(dictValues, dictParam) {
  for (const [key, value] of Object.entries(dictValues)) checkValue(value, dictParam.getValuesMap().get(key));
}

function checkList(listValues, listParam) {
  assert.strictEqual(listValues.length, listParam.getValuesList().length);
  listValues.forEach((value, index) => checkValue(value, listParam.getValuesList()[index]));
}

test('test_dict_params_to_dict of Python: the DictParams are converted to objects', () => {
  assert.strictEqual(dictValueInputs.length, 5);
  dictValueInputs.forEach(([value, spec, , isValid], index) => {
    if (isValid) {
      const dictValues = h.dictParamsToDict(value, spec);
      checkDict(dictValues, value);
    } else {
      assert.throws(
        () => {
          const dictValues = h.dictParamsToDict(value, spec);
          checkDict(dictValues, value);
        },
        Error,
        `[${index}]`,
      );
    }
  });
});

test('test_list_params_to_list of Python: the ListParams are converted to arrays', () => {
  assert.strictEqual(listValueInputs.length, 5);
  listValueInputs.forEach(([value, spec, , isValid], index) => {
    if (isValid) {
      const listValues = h.listParamsToList(value, spec);
      checkList(listValues, value);
    } else {
      assert.throws(() => h.listParamsToList(value, spec), Error, `[${index}]`);
    }
  });
});

test('test_oneof_param_to_dict of Python: the OneOfParams are converted to objects', () => {
  assert.strictEqual(oneOfValueInputs.length, 6);
  oneOfValueInputs.forEach(([value, spec, , isValid], index) => {
    if (isValid) {
      const dictValues = h.oneofParamToDict(value, spec);
      checkDict(dictValues, value.getValuesMap().get(value.getKey()));
    } else {
      assert.throws(() => h.oneofParamToDict(value, spec), Error, `[${index}]`);
    }
  });
});

// explicitly test spec creator helper functions: generated, expected, is_valid
const units = name => new Units().setName(name);

const int64ParamSpecs = [
  [
    h.makeInt64ParamSpec(3, units('feet'), 2, 6),
    new Int64Param.Spec()
      .setDefaultValue(int64Value(3))
      .setUnits(units('feet'))
      .setMinValue(int64Value(2))
      .setMaxValue(int64Value(6)),
    true,
  ],
  [
    h.makeInt64ParamSpec(-4, units('cm')),
    new Int64Param.Spec().setDefaultValue(int64Value(-4)).setUnits(units('cm')),
    true,
  ],
  [
    h.makeInt64ParamSpec(-4, units('cm')),
    new Int64Param.Spec().setDefaultValue(int64Value(-5)).setUnits(units('cm')),
    false,
  ],
];

const doubleParamSpecs = [
  [
    h.makeDoubleParamSpec(3.6, units('inches'), 2.2, 6.7),
    new DoubleParam.Spec()
      .setDefaultValue(doubleValue(3.6))
      .setUnits(units('inches'))
      .setMinValue(doubleValue(2.2))
      .setMaxValue(doubleValue(6.7)),
    true,
  ],
  [
    h.makeDoubleParamSpec(-4.5, units('mL')),
    new DoubleParam.Spec().setDefaultValue(doubleValue(-4.5)).setUnits(units('mL')),
    true,
  ],
  [
    h.makeDoubleParamSpec(-4.5, units('mL')),
    new DoubleParam.Spec().setDefaultValue(doubleValue(-5.5)).setUnits(units('mL')),
    false,
  ],
];

const stringParamSpecs = [
  [h.makeStringParamSpec(null, null, 'hello world'), new StringParam.Spec().setDefaultValue('hello world'), true],
  [h.makeStringParamSpec([], null, 'hello world'), new StringParam.Spec().setDefaultValue('hello world'), true],
  // options=None in Python
  [h.makeStringParamSpec(null, null, 'hello world'), new StringParam.Spec().setDefaultValue('hello world'), true],
  [
    h.makeStringParamSpec(['abc', 'def'], true, 'abc'),
    new StringParam.Spec().setOptionsList(['abc', 'def']).setEditable(true).setDefaultValue('abc'),
    true,
  ],
  [
    h.makeStringParamSpec(['abc', 'def'], true, 'abc'),
    new StringParam.Spec().setOptionsList(['abc', 'def']).setEditable(false).setDefaultValue('def'),
    false,
  ],
  [
    h.makeStringParamSpec(['abc', 'def'], false, 'abc'),
    new StringParam.Spec().setOptionsList(['abc', 'def']).setEditable(false).setDefaultValue('def'),
    false,
  ],
];

const boolParamSpecs = [
  [h.makeBoolParamSpec(true), new BoolParam.Spec().setDefaultValue(new BoolValue().setValue(true)), true],
  [h.makeBoolParamSpec(true), new BoolParam.Spec().setDefaultValue(new BoolValue().setValue(false)), false],
  [h.makeBoolParamSpec(null), new BoolParam.Spec(), true],
  [h.makeBoolParamSpec(), new BoolParam.Spec(), true],
];

const rectangle = (x, y, cols, rows) =>
  new AreaI().setRectangle(new RectangleI().setX(x).setY(y).setCols(cols).setRows(rows));
const triangle = () =>
  new AreaI().setPolygon(
    new PolygonI().setVerticesList([
      new Vec2I().setX(5).setY(5),
      new Vec2I().setX(10).setY(5),
      new Vec2I().setX(5).setY(10),
    ]),
  );
const fakeServiceAndSource = () =>
  new RegionOfInterestParam.ServiceAndSource().setService('fakeservice').setSource('fakesource');

const roiParamSpecs = [
  [
    h.makeRegionOfInterestParamSpec(
      h.makeRoiServiceAndSource('fakeservice', 'fakesource'),
      rectangle(5, 10, 10, 25),
      true,
    ),
    new RegionOfInterestParam.Spec()
      .setServiceAndSource(fakeServiceAndSource())
      .setDefaultArea(rectangle(5, 10, 10, 25))
      .setAllowsRectangle(true),
    true,
  ],
  [
    h.makeRegionOfInterestParamSpec(h.makeRoiServiceAndSource('fakeservice', 'fakesource')),
    new RegionOfInterestParam.Spec().setServiceAndSource(fakeServiceAndSource()),
    true,
  ],
  [
    h.makeRegionOfInterestParamSpec(
      h.makeRoiServiceAndSource('fakeservice', 'fakesource'),
      rectangle(5, 10, 15, 25),
      true,
    ),
    new RegionOfInterestParam.Spec()
      .setServiceAndSource(fakeServiceAndSource())
      .setDefaultArea(rectangle(5, 10, 10, 25))
      .setAllowsRectangle(true),
    false,
  ],
  [
    h.makeRegionOfInterestParamSpec(
      h.makeRoiServiceAndSource('fakeservice', 'fake_source'),
      rectangle(5, 10, 10, 25),
      true,
    ),
    new RegionOfInterestParam.Spec()
      .setServiceAndSource(fakeServiceAndSource())
      .setDefaultArea(rectangle(5, 10, 10, 25))
      .setAllowsRectangle(true),
    false,
  ],
  [
    h.makeRegionOfInterestParamSpec(
      h.makeRoiServiceAndSource('fakeservice', 'fakesource'),
      rectangle(5, 10, 10, 25),
      false,
    ),
    new RegionOfInterestParam.Spec()
      .setServiceAndSource(fakeServiceAndSource())
      .setDefaultArea(rectangle(5, 10, 10, 25))
      .setAllowsRectangle(true),
    false,
  ],
  [
    h.makeRegionOfInterestParamSpec(h.makeRoiServiceAndSource('fakeservice', 'fakesource'), triangle(), false, true),
    new RegionOfInterestParam.Spec()
      .setServiceAndSource(fakeServiceAndSource())
      .setDefaultArea(triangle())
      .setAllowsPolygon(true),
    true,
  ],
];

const intElementSpec = spec => new CustomParam.Spec().setIntSpec(spec);

const listParamSpecs = [
  [
    h.makeListParamSpec(h.makeCustomParamSpec(int64ParamSpecs[0][0]), 1, 2),
    new ListParam.Spec()
      .setElementSpec(intElementSpec(int64ParamSpecs[0][0]))
      .setMinNumberOfValues(int64Value(1))
      .setMaxNumberOfValues(int64Value(2)),
    true,
  ],
  [
    h.makeListParamSpec(h.makeCustomParamSpec(int64ParamSpecs[0][0]), null, 2),
    new ListParam.Spec().setElementSpec(intElementSpec(int64ParamSpecs[0][0])).setMaxNumberOfValues(int64Value(2)),
    true,
  ],
  [
    h.makeListParamSpec(h.makeCustomParamSpec(int64ParamSpecs[0][0]), 1),
    new ListParam.Spec().setElementSpec(intElementSpec(int64ParamSpecs[0][0])).setMinNumberOfValues(int64Value(1)),
    true,
  ],
  [
    h.makeListParamSpec(h.makeCustomParamSpec(int64ParamSpecs[0][0]), 1, 2),
    new ListParam.Spec()
      .setElementSpec(intElementSpec(int64ParamSpecs[0][0]))
      .setMinNumberOfValues(int64Value(1))
      .setMaxNumberOfValues(int64Value(3)),
    false,
  ],
  [
    h.makeListParamSpec(h.makeCustomParamSpec(int64ParamSpecs[0][0]), 1, 2),
    new ListParam.Spec()
      .setElementSpec(intElementSpec(int64ParamSpecs[0][0]))
      .setMinNumberOfValues(int64Value(0))
      .setMaxNumberOfValues(int64Value(2)),
    false,
  ],
  [
    h.makeListParamSpec(h.makeCustomParamSpec(int64ParamSpecs[0][0]), 1, 2),
    new ListParam.Spec()
      .setElementSpec(intElementSpec(int64ParamSpecs[1][0]))
      .setMinNumberOfValues(int64Value(0))
      .setMaxNumberOfValues(int64Value(2)),
    false,
  ],
];

/** DictParam.ChildSpec(spec=CustomParam.Spec(<type>_spec=spec), ui_info=UserInterfaceInfo(...)) in Python. */
function expectedChildSpec(typeString, spec, uiInfo) {
  return new DictParam.ChildSpec()
    .setSpec(new CustomParam.Spec()[`set${pascal(typeString)}Spec`](spec))
    .setUiInfo(uiInfo);
}

const dictChildSpecs = [
  [
    h.makeDictChildSpec(int64ParamSpecs[0][0], h.makeUserInterfaceInfo('Feet')),
    expectedChildSpec('int', int64ParamSpecs[0][0], new UserInterfaceInfo().setDisplayName('Feet')),
    true,
  ],
  [
    h.makeDictChildSpec(stringParamSpecs[0][0], h.makeUserInterfaceInfo('Max Length')),
    expectedChildSpec('string', stringParamSpecs[0][0], new UserInterfaceInfo().setDisplayName('Max Length')),
    true,
  ],
  [
    h.makeDictChildSpec(int64ParamSpecs[0][0], h.makeUserInterfaceInfo('Feet')),
    expectedChildSpec('int', int64ParamSpecs[0][0], new UserInterfaceInfo().setDisplayName('Inches')),
    false,
  ],
  [
    h.makeDictChildSpec(int64ParamSpecs[0][0], h.makeUserInterfaceInfo('Feet', 'Distance', 2)),
    expectedChildSpec(
      'int',
      int64ParamSpecs[0][0],
      new UserInterfaceInfo().setDisplayName('Feet').setDescription('Distance').setDisplayOrder(3),
    ),
    false,
  ],
  [
    h.makeDictChildSpec(int64ParamSpecs[0][0], h.makeUserInterfaceInfo('Feet', 'Distance', 2)),
    expectedChildSpec(
      'int',
      int64ParamSpecs[0][0],
      new UserInterfaceInfo().setDisplayName('Feet').setDescription('Space').setDisplayOrder(2),
    ),
    false,
  ],
  [
    h.makeDictChildSpec(int64ParamSpecs[0][0], h.makeUserInterfaceInfo('Feet', 'Distance', 2)),
    expectedChildSpec(
      'int',
      int64ParamSpecs[0][0],
      new UserInterfaceInfo().setDisplayName('Inches').setDescription('Distance').setDisplayOrder(2),
    ),
    false,
  ],
];

/** The Spec of the entries of specs, like DictParam.Spec(specs=specs, ...) or OneOfParam.Spec(specs=specs, ...). */
function specWithEntries(spec, specs) {
  for (const [key, child] of Object.entries(specs)) spec.getSpecsMap().set(key, child);
  return spec;
}

const dictParamSpecs = [
  [
    h.makeDictParamSpec({ int: dictChildSpecs[0][0], string: dictChildSpecs[1][0] }, false),
    specWithEntries(new DictParam.Spec().setIsHiddenByDefault(false), {
      int: dictChildSpecs[0][0],
      string: dictChildSpecs[1][0],
    }),
    true,
  ],
  [
    h.makeDictParamSpec({ int: dictChildSpecs[0][0], string: dictChildSpecs[1][0] }, false),
    specWithEntries(new DictParam.Spec().setIsHiddenByDefault(false), {
      int: dictChildSpecs[1][0],
      string: dictChildSpecs[1][0],
    }),
    false,
  ],
  [
    h.makeDictParamSpec({ int: dictChildSpecs[0][0], string: dictChildSpecs[1][0] }, false),
    specWithEntries(new DictParam.Spec().setIsHiddenByDefault(true), {
      int: dictChildSpecs[0][0],
      string: dictChildSpecs[1][0],
    }),
    false,
  ],
];

const oneOfChildSpecs = [
  [
    h.makeOneOfChildSpec(dictParamSpecs[0][0], h.makeUserInterfaceInfo('Length')),
    new OneOfParam.ChildSpec()
      .setSpec(dictParamSpecs[0][0])
      .setUiInfo(new UserInterfaceInfo().setDisplayName('Length')),
    true,
  ],
  [
    h.makeOneOfChildSpec(dictParamSpecs[0][0], h.makeUserInterfaceInfo('Length')),
    new OneOfParam.ChildSpec()
      .setSpec(dictParamSpecs[1][1])
      .setUiInfo(new UserInterfaceInfo().setDisplayName('Length')),
    false,
  ],
  [
    h.makeOneOfChildSpec(dictParamSpecs[0][0], h.makeUserInterfaceInfo('Length')),
    new OneOfParam.ChildSpec()
      .setSpec(dictParamSpecs[0][0])
      .setUiInfo(new UserInterfaceInfo().setDisplayName('Max Length')),
    false,
  ],
  [h.makeOneOfChildSpec(dictParamSpecs[0][0]), new OneOfParam.ChildSpec().setSpec(dictParamSpecs[0][0]), true],
];

const oneOfParamSpecs = [
  [
    h.makeOneOfParamSpec({ int: oneOfChildSpecs[0][0], string: oneOfChildSpecs[1][0] }, 'int'),
    specWithEntries(new OneOfParam.Spec().setDefaultKey('int'), {
      int: oneOfChildSpecs[0][0],
      string: oneOfChildSpecs[1][0],
    }),
    true,
  ],
  [
    h.makeOneOfParamSpec({ int: oneOfChildSpecs[0][0], string: oneOfChildSpecs[1][0] }, 'int'),
    specWithEntries(new OneOfParam.Spec().setDefaultKey('int'), {
      int: oneOfChildSpecs[0][0],
      string: oneOfChildSpecs[1][1],
    }),
    false,
  ],
  [
    h.makeOneOfParamSpec({ int: oneOfChildSpecs[0][0], string: oneOfChildSpecs[1][0] }, 'int'),
    specWithEntries(new OneOfParam.Spec().setDefaultKey('string'), {
      int: oneOfChildSpecs[0][0],
      string: oneOfChildSpecs[1][0],
    }),
    false,
  ],
];

const paramSpecHelpers = [
  ...int64ParamSpecs,
  ...doubleParamSpecs,
  ...stringParamSpecs,
  ...boolParamSpecs,
  ...roiParamSpecs,
  ...listParamSpecs,
  ...dictChildSpecs,
  ...dictParamSpecs,
  ...oneOfChildSpecs,
  ...oneOfParamSpecs,
];

test('test_param_spec_helpers of Python: the builders of the specs', () => {
  assert.strictEqual(paramSpecHelpers.length, 44);
  paramSpecHelpers.forEach(([generated, expected, isValid], index) => {
    assert.strictEqual(
      messagesEqual(generated, expected),
      isValid,
      `[${index}]:\n${text(generated)}vs\n${text(expected)}`,
    );
  });
});

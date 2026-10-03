# bosdyn-client/service_customization_helpers

Helpers for the custom parameters of services: builders of specs and values, validation of the values against
the specs, and conversions to plain objects.

```js
const { checkTypesMatch, validateDictSpec, createValueValidator, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`checkTypesMatch`](#checktypesmatch) | Function |  |
| [`validateDictSpec`](#validatedictspec) | Function | Checks that a DictParam.Spec is valid. |
| [`createValueValidator`](#createvaluevalidator) | Function | Checks that the DictParam.Spec is valid, and returns a function that validates the DictParam values against it. |
| [`dictParamsToDict`](#dictparamstodict) | Function | The values of a DictParam as an object, like dict_params_to_dict() in Python: the values of the numbers, strings and booleans, the RegionOfInterestParam messages, and objects and arrays for the dicts, one-ofs and lists. |
| [`listParamsToList`](#listparamstolist) | Function | The values of a ListParam as an array, like list_params_to_list() in Python (see dictParamsToDict()). |
| [`oneofParamToDict`](#oneofparamtodict) | Function | The values of the chosen DictParam of a OneOfParam as an object, like oneof_param_to_dict() in Python. |
| [`customSpecToDefault`](#customspectodefault) | Function | A default CustomParam for a CustomParam.Spec, like custom_spec_to_default() in Python. |
| [`dictSpecToDefault`](#dictspectodefault) | Function | A default DictParam for a DictParam.Spec, like dict_spec_to_default() in Python. |
| [`listSpecToDefault`](#listspectodefault) | Function | A default ListParam for a ListParam.Spec, like list_spec_to_default() in Python: the minimum number of default values. |
| [`intSpecToDefault`](#intspectodefault) | Function | A default Int64Param for an Int64Param.Spec, like int_spec_to_default() in Python. |
| [`doubleSpecToDefault`](#doublespectodefault) | Function | A default DoubleParam for a DoubleParam.Spec, like double_spec_to_default() in Python. |
| [`stringSpecToDefault`](#stringspectodefault) | Function | A default StringParam for a StringParam.Spec, like string_spec_to_default() in Python: the default value, else the first option. |
| [`roiSpecToDefault`](#roispectodefault) | Function | A default RegionOfInterestParam for a RegionOfInterestParam.Spec, like roi_spec_to_default() in Python. |
| [`boolSpecToDefault`](#boolspectodefault) | Function | A default BoolParam for a BoolParam.Spec, like bool_spec_to_default() in Python. |
| [`oneOfSpecToDefault`](#oneofspectodefault) | Function | A default OneOfParam for a OneOfParam.Spec, like one_of_spec_to_default() in Python: the default key, and the default of each DictParam. |
| [`dictParamCoerceTo`](#dictparamcoerceto) | Function | Coerce a DictParam to a spec, like dict_param_coerce_to() in Python: the missing values are defaults, the values are coerced, the keys which are not in the spec are removed (not reported as a coercion, like Python). |
| [`listParamCoerceTo`](#listparamcoerceto) | Function | Coerce a ListParam to a spec, like list_param_coerce_to() in Python: default values up to the minimum number of values, the values beyond the maximum removed, and the values coerced. |
| [`intParamCoerceTo`](#intparamcoerceto) | Function | Coerce an Int64Param to a spec, like int_param_coerce_to() in Python: out of bounds, it is the default value. |
| [`doubleParamCoerceTo`](#doubleparamcoerceto) | Function | Coerce a DoubleParam to a spec, like double_param_coerce_to() in Python: out of bounds, it is the default value. |
| [`stringParamCoerceTo`](#stringparamcoerceto) | Function | Coerce a StringParam to a spec, like string_param_coerce_to() in Python: not among the options of a spec which is not editable, it is the default value. |
| [`roiParamCoerceTo`](#roiparamcoerceto) | Function | Coercion is tricky with ROI parameters due to the fact that there is no standard frame size: the parameter is not modified, like roi_param_coerce_to() in Python. |
| [`oneOfParamCoerceTo`](#oneofparamcoerceto) | Function | Coerce a OneOfParam to a spec, like one_of_param_coerce_to() in Python: a key which is not in the spec is the first key (sorted), and the DictParam of each key of the spec is coerced. |
| [`customParamCoerceTo`](#customparamcoerceto) | Function | Coerce a CustomParam to a spec, like custom_param_coerce_to() in Python: a value of the type of the spec is coerced, another value is replaced by the default of the spec. |
| [`makeCustomParamSpec`](#makecustomparamspec) | Function | A CustomParam.Spec wrapping a spec, like make_custom_param_spec() in Python. |
| [`makeDictChildSpec`](#makedictchildspec) | Function | A DictParam.ChildSpec, like make_dict_child_spec() in Python. |
| [`makeDictParamSpec`](#makedictparamspec) | Function | A DictParam.Spec, like make_dict_param_spec() in Python. |
| [`makeOneOfChildSpec`](#makeoneofchildspec) | Function | A OneOfParam.ChildSpec, like make_one_of_child_spec() in Python. |
| [`makeOneOfParamSpec`](#makeoneofparamspec) | Function | A OneOfParam.Spec, like make_one_of_param_spec() in Python. |
| [`makeListParamSpec`](#makelistparamspec) | Function | A ListParam.Spec, like make_list_param_spec() in Python. |
| [`makeInt64ParamSpec`](#makeint64paramspec) | Function | An Int64Param.Spec, like make_int64_param_spec() in Python. |
| [`makeDoubleParamSpec`](#makedoubleparamspec) | Function | A DoubleParam.Spec, like make_double_param_spec() in Python. |
| [`makeStringParamSpec`](#makestringparamspec) | Function | A StringParam.Spec, like make_string_param_spec() in Python. |
| [`makeBoolParamSpec`](#makeboolparamspec) | Function | A BoolParam.Spec, like make_bool_param_spec() in Python. |
| [`makeRegionOfInterestParamSpec`](#makeregionofinterestparamspec) | Function | A RegionOfInterestParam.Spec, like make_region_of_interest_param_spec() in Python. |
| [`makeUserInterfaceInfo`](#makeuserinterfaceinfo) | Function | A UserInterfaceInfo, like make_user_interface_info() in Python. |
| [`makeRoiServiceAndSource`](#makeroiserviceandsource) | Function | A RegionOfInterestParam.ServiceAndSource, like make_roi_service_and_source() in Python. |
| [`InvalidCustomParamSpecError`](#invalidcustomparamspecerror) | Class | The defined custom parameter Spec is invalid. |
| [`InvalidCustomParamValueError`](#invalidcustomparamvalueerror) | Class | The defined custom parameter value does not match the associated Spec. |

## InvalidCustomParamSpecError

```ts
class InvalidCustomParamSpecError extends ValueError
```

The defined custom parameter Spec is invalid.

### new InvalidCustomParamSpecError

```ts
constructor(errorMessages: string[])
```

| Parameter | Type | Description |
|---|---|---|
| `errorMessages` | `string[]` | Why the spec is invalid. |

### Properties

| Property | Type | Description |
|---|---|---|
| `errorMessages` | `string[]` |  |

## InvalidCustomParamValueError

```ts
class InvalidCustomParamValueError extends ValueError
```

The defined custom parameter value does not match the associated Spec.

### new InvalidCustomParamValueError

```ts
constructor(protoError: CustomParamError)
```

| Parameter | Type | Description |
|---|---|---|
| `protoError` | `CustomParamError` | Why the value is invalid. |

### Properties

| Property | Type | Description |
|---|---|---|
| `protoError` | `CustomParamError` |  |

## checkTypesMatch

```ts
export function checkTypesMatch(param: any, protoType: Function): CustomParamError | null
```

| Parameter | Type | Description |
|---|---|---|
| `param` | `any` | The value of a parameter. |
| `protoType` | `Function` | The message type the spec requires. |

**Returns** `CustomParamError \| null`: null if param is a protoType message.

## validateDictSpec

```ts
export function validateDictSpec(dictSpec: DictParam.Spec): void
```

Checks that a DictParam.Spec is valid.

| Parameter | Type | Description |
|---|---|---|
| `dictSpec` | `DictParam.Spec` | Spec to be validated. |

**Returns** `void`

**Throws**

- `InvalidCustomParamSpecError` The spec is invalid, with the list of error messages.

## createValueValidator

```ts
export function createValueValidator(dictSpec: DictParam.Spec): (arg0: DictParam) => CustomParamError | null
```

Checks that the DictParam.Spec is valid, and returns a function that validates the DictParam values against it.

| Parameter | Type | Description |
|---|---|---|
| `dictSpec` | `DictParam.Spec` | Spec to be validated, and to validate the values against. |

**Returns** `(arg0: DictParam) => CustomParamError \| null`: Returns null for a valid value, and a CustomParamError with a status besides STATUS_OK for an invalid one.

**Throws**

- `InvalidCustomParamSpecError` The spec is invalid, with the list of error messages.

## dictParamsToDict

```ts
export function dictParamsToDict(dictParam: DictParam, dictSpec: DictParam.Spec, validate?: boolean): Object
```

The values of a DictParam as an object, like dict_params_to_dict() in Python: the values of the numbers, strings and
booleans, the RegionOfInterestParam messages, and objects and arrays for the dicts, one-ofs and lists.

| Parameter | Type | Description |
|---|---|---|
| `dictParam` | `DictParam` |  |
| `dictSpec` | `DictParam.Spec` | The spec of the parameter. |
| `validate` | `boolean` | Validate the spec and the parameter first. (*Optional*, default `true`) |

**Returns** `Object`

**Throws**

- `InvalidCustomParamSpecError` The spec is invalid.
- `InvalidCustomParamValueError` The parameter does not match the spec.

## listParamsToList

```ts
export function listParamsToList(listParam: ListParam, listSpec: ListParam.Spec, validate?: boolean): any[]
```

The values of a ListParam as an array, like list_params_to_list() in Python (see dictParamsToDict()).

| Parameter | Type | Description |
|---|---|---|
| `listParam` | `ListParam` |  |
| `listSpec` | `ListParam.Spec` | The spec of the parameter. |
| `validate` | `boolean` | Validate the spec and the parameter first. (*Optional*, default `true`) |

**Returns** `any[]`

**Throws**

- `InvalidCustomParamSpecError` The spec is invalid.
- `InvalidCustomParamValueError` The parameter does not match the spec.

## oneofParamToDict

```ts
export function oneofParamToDict(oneofParam: OneOfParam, oneofSpec: OneOfParam.Spec, validate?: boolean): Object
```

The values of the chosen DictParam of a OneOfParam as an object, like oneof_param_to_dict() in Python.

| Parameter | Type | Description |
|---|---|---|
| `oneofParam` | `OneOfParam` |  |
| `oneofSpec` | `OneOfParam.Spec` | The spec of the parameter. |
| `validate` | `boolean` | Validate the spec and the parameter first (the chosen DictParam is always validated, like Python). (*Optional*, default `true`) |

**Returns** `Object`

**Throws**

- `InvalidCustomParamSpecError` The spec is invalid.
- `InvalidCustomParamValueError` The parameter does not match the spec.

## customSpecToDefault

```ts
export function customSpecToDefault(spec: CustomParam.Spec): CustomParam | null
```

A default CustomParam for a CustomParam.Spec, like custom_spec_to_default() in Python.

| Parameter | Type | Description |
|---|---|---|
| `spec` | `CustomParam.Spec` |  |

**Returns** `CustomParam \| null`: null if the spec has no default (a region of interest without rectangle, a one-of without default key).

**Throws**

- `InvalidCustomParamSpecError` No spec is set (a KeyError in Python).

## dictSpecToDefault

```ts
export function dictSpecToDefault(spec: DictParam.Spec): DictParam
```

A default DictParam for a DictParam.Spec, like dict_spec_to_default() in Python.

| Parameter | Type | Description |
|---|---|---|
| `spec` | `DictParam.Spec` |  |

**Returns** `DictParam`

## listSpecToDefault

```ts
export function listSpecToDefault(spec: ListParam.Spec): ListParam
```

A default ListParam for a ListParam.Spec, like list_spec_to_default() in Python: the minimum number of default
values.

| Parameter | Type | Description |
|---|---|---|
| `spec` | `ListParam.Spec` |  |

**Returns** `ListParam`

## intSpecToDefault

```ts
export function intSpecToDefault(spec: Int64Param.Spec): Int64Param
```

A default Int64Param for an Int64Param.Spec, like int_spec_to_default() in Python.

| Parameter | Type | Description |
|---|---|---|
| `spec` | `Int64Param.Spec` |  |

**Returns** `Int64Param`

## doubleSpecToDefault

```ts
export function doubleSpecToDefault(spec: DoubleParam.Spec): DoubleParam
```

A default DoubleParam for a DoubleParam.Spec, like double_spec_to_default() in Python.

| Parameter | Type | Description |
|---|---|---|
| `spec` | `DoubleParam.Spec` |  |

**Returns** `DoubleParam`

## stringSpecToDefault

```ts
export function stringSpecToDefault(spec: StringParam.Spec): StringParam
```

A default StringParam for a StringParam.Spec, like string_spec_to_default() in Python: the default value, else the
first option.

| Parameter | Type | Description |
|---|---|---|
| `spec` | `StringParam.Spec` |  |

**Returns** `StringParam`

## roiSpecToDefault

```ts
export function roiSpecToDefault(spec: RegionOfInterestParam.Spec): RegionOfInterestParam | null
```

A default RegionOfInterestParam for a RegionOfInterestParam.Spec, like roi_spec_to_default() in Python.

| Parameter | Type | Description |
|---|---|---|
| `spec` | `RegionOfInterestParam.Spec` |  |

**Returns** `RegionOfInterestParam \| null`: null if the spec does not allow rectangles.

## boolSpecToDefault

```ts
export function boolSpecToDefault(spec: BoolParam.Spec): BoolParam
```

A default BoolParam for a BoolParam.Spec, like bool_spec_to_default() in Python.

| Parameter | Type | Description |
|---|---|---|
| `spec` | `BoolParam.Spec` |  |

**Returns** `BoolParam`

## oneOfSpecToDefault

```ts
export function oneOfSpecToDefault(spec: OneOfParam.Spec): OneOfParam | null
```

A default OneOfParam for a OneOfParam.Spec, like one_of_spec_to_default() in Python: the default key, and the
default of each DictParam.

| Parameter | Type | Description |
|---|---|---|
| `spec` | `OneOfParam.Spec` |  |

**Returns** `OneOfParam \| null`: null if the default key is not a key of the spec.

## dictParamCoerceTo

```ts
export function dictParamCoerceTo(param: DictParam, spec: DictParam.Spec): boolean
```

Coerce a DictParam to a spec, like dict_param_coerce_to() in Python: the missing values are defaults, the values
are coerced, the keys which are not in the spec are removed (not reported as a coercion, like Python).

| Parameter | Type | Description |
|---|---|---|
| `param` | `DictParam` | The parameter, modified in place. |
| `spec` | `DictParam.Spec` |  |

**Returns** `boolean`: Whether the parameter was coerced.

## listParamCoerceTo

```ts
export function listParamCoerceTo(param: ListParam, spec: ListParam.Spec): boolean
```

Coerce a ListParam to a spec, like list_param_coerce_to() in Python: default values up to the minimum number of
values, the values beyond the maximum removed, and the values coerced.

| Parameter | Type | Description |
|---|---|---|
| `param` | `ListParam` | The parameter, modified in place. |
| `spec` | `ListParam.Spec` |  |

**Returns** `boolean`: Whether the parameter was coerced.

## intParamCoerceTo

```ts
export function intParamCoerceTo(param: Int64Param, spec: Int64Param.Spec): boolean
```

Coerce an Int64Param to a spec, like int_param_coerce_to() in Python: out of bounds, it is the default value.

| Parameter | Type | Description |
|---|---|---|
| `param` | `Int64Param` | The parameter, modified in place. |
| `spec` | `Int64Param.Spec` |  |

**Returns** `boolean`: Whether the parameter was coerced.

## doubleParamCoerceTo

```ts
export function doubleParamCoerceTo(param: DoubleParam, spec: DoubleParam.Spec): boolean
```

Coerce a DoubleParam to a spec, like double_param_coerce_to() in Python: out of bounds, it is the default value.

| Parameter | Type | Description |
|---|---|---|
| `param` | `DoubleParam` | The parameter, modified in place. |
| `spec` | `DoubleParam.Spec` |  |

**Returns** `boolean`: Whether the parameter was coerced.

## stringParamCoerceTo

```ts
export function stringParamCoerceTo(param: StringParam, spec: StringParam.Spec): boolean
```

Coerce a StringParam to a spec, like string_param_coerce_to() in Python: not among the options of a spec which is not
editable, it is the default value.

| Parameter | Type | Description |
|---|---|---|
| `param` | `StringParam` | The parameter, modified in place. |
| `spec` | `StringParam.Spec` |  |

**Returns** `boolean`: Whether the parameter was coerced.

## roiParamCoerceTo

```ts
export function roiParamCoerceTo(param: RegionOfInterestParam, spec: RegionOfInterestParam.Spec): boolean
```

Coercion is tricky with ROI parameters due to the fact that there is no standard frame size: the parameter is not
modified, like roi_param_coerce_to() in Python.

| Parameter | Type | Description |
|---|---|---|
| `param` | `RegionOfInterestParam` |  |
| `spec` | `RegionOfInterestParam.Spec` |  |

**Returns** `boolean`: Like Python, true if the spec has no service_and_source or the parameter has the same one.

## oneOfParamCoerceTo

```ts
export function oneOfParamCoerceTo(param: OneOfParam, spec: OneOfParam.Spec): boolean
```

Coerce a OneOfParam to a spec, like one_of_param_coerce_to() in Python: a key which is not in the spec is the first
key (sorted), and the DictParam of each key of the spec is coerced.

| Parameter | Type | Description |
|---|---|---|
| `param` | `OneOfParam` | The parameter, modified in place. |
| `spec` | `OneOfParam.Spec` |  |

**Returns** `boolean`: Whether the parameter was coerced.

**Throws**

- `RangeError` The spec has no key (an IndexError in Python).

## customParamCoerceTo

```ts
export function customParamCoerceTo(param: CustomParam, spec: CustomParam.Spec): boolean
```

Coerce a CustomParam to a spec, like custom_param_coerce_to() in Python: a value of the type of the spec is coerced,
another value is replaced by the default of the spec.

| Parameter | Type | Description |
|---|---|---|
| `param` | `CustomParam` | The parameter, modified in place. |
| `spec` | `CustomParam.Spec` |  |

**Returns** `boolean`: Whether the parameter was coerced.

**Throws**

- `TypeError` The value must be replaced by a default, but the spec has none (CopyFrom(None) in Python).

## makeCustomParamSpec

```ts
export function makeCustomParamSpec(spec: DictParam.Spec | ListParam.Spec | Int64Param.Spec | DoubleParam.Spec | StringParam.Spec | RegionOfInterestParam.Spec | BoolParam.Spec | OneOfParam.Spec): CustomParam.Spec
```

A CustomParam.Spec wrapping a spec, like make_custom_param_spec() in Python.

| Parameter | Type | Description |
|---|---|---|
| `spec` | `DictParam.Spec \| ListParam.Spec \| Int64Param.Spec \| DoubleParam.Spec \| StringParam.Spec \| RegionOfInterestParam.Spec \| BoolParam.Spec \| OneOfParam.Spec` | The spec to wrap (copied). |

**Returns** `CustomParam.Spec`

**Throws**

- `ValueError` Not a spec of service_customization_pb.

## makeDictChildSpec

```ts
export function makeDictChildSpec(paramSpec: any, uiInfo?: UserInterfaceInfo | null): DictParam.ChildSpec
```

A DictParam.ChildSpec, like make_dict_child_spec() in Python.

| Parameter | Type | Description |
|---|---|---|
| `paramSpec` | `any` | The spec, wrapped in a CustomParam.Spec (see makeCustomParamSpec()). |
| `uiInfo` | `UserInterfaceInfo \| null` | (*Optional*, default `null`) |

**Returns** `DictParam.ChildSpec`

## makeDictParamSpec

```ts
export function makeDictParamSpec(specs: {
    [x: string]: DictParam.ChildSpec;
} | Map<string, DictParam.ChildSpec>, isHiddenByDefault: boolean): DictParam.Spec
```

A DictParam.Spec, like make_dict_param_spec() in Python.

| Parameter | Type | Description |
|---|---|---|
| `specs` | `{ [x: string]: DictParam.ChildSpec; } \| Map<string, DictParam.ChildSpec>` | The specs contained by the DictParam. |
| `isHiddenByDefault` | `boolean` | Whether the UI shows this spec as collapsed by default. |

**Returns** `DictParam.Spec`

## makeOneOfChildSpec

```ts
export function makeOneOfChildSpec(dictParamSpec: DictParam.Spec, uiInfo?: UserInterfaceInfo | null): OneOfParam.ChildSpec
```

A OneOfParam.ChildSpec, like make_one_of_child_spec() in Python.

| Parameter | Type | Description |
|---|---|---|
| `dictParamSpec` | `DictParam.Spec` |  |
| `uiInfo` | `UserInterfaceInfo \| null` | (*Optional*, default `null`) |

**Returns** `OneOfParam.ChildSpec`

## makeOneOfParamSpec

```ts
export function makeOneOfParamSpec(specs: {
    [x: string]: OneOfParam.ChildSpec;
} | Map<string, OneOfParam.ChildSpec>, defaultKey?: string | null): OneOfParam.Spec
```

A OneOfParam.Spec, like make_one_of_param_spec() in Python.

| Parameter | Type | Description |
|---|---|---|
| `specs` | `{ [x: string]: OneOfParam.ChildSpec; } \| Map<string, OneOfParam.ChildSpec>` | The specs contained by the OneOfParam. |
| `defaultKey` | `string \| null` | The key to which the OneOfParam.Spec should default in the UI. (*Optional*, default `null`) |

**Returns** `OneOfParam.Spec`

## makeListParamSpec

```ts
export function makeListParamSpec(elementSpec: CustomParam.Spec, minNumberOfValues?: number | null, maxNumberOfValues?: number | null): ListParam.Spec
```

A ListParam.Spec, like make_list_param_spec() in Python.

| Parameter | Type | Description |
|---|---|---|
| `elementSpec` | `CustomParam.Spec` | The spec of each element of the list. |
| `minNumberOfValues` | `number \| null` | (*Optional*, default `null`) |
| `maxNumberOfValues` | `number \| null` | (*Optional*, default `null`) |

**Returns** `ListParam.Spec`

## makeInt64ParamSpec

```ts
export function makeInt64ParamSpec(defaultValue?: number | null, units?: Object | null, minValue?: number | null, maxValue?: number | null): Int64Param.Spec
```

An Int64Param.Spec, like make_int64_param_spec() in Python.

| Parameter | Type | Description |
|---|---|---|
| `defaultValue` | `number \| null` | (*Optional*, default `null`) |
| `units` | `Object \| null` | A bosdyn.api.Units message. (*Optional*, default `null`) |
| `minValue` | `number \| null` | (*Optional*, default `null`) |
| `maxValue` | `number \| null` | (*Optional*, default `null`) |

**Returns** `Int64Param.Spec`

## makeDoubleParamSpec

```ts
export function makeDoubleParamSpec(defaultValue?: number | null, units?: Object | null, minValue?: number | null, maxValue?: number | null): DoubleParam.Spec
```

A DoubleParam.Spec, like make_double_param_spec() in Python.

| Parameter | Type | Description |
|---|---|---|
| `defaultValue` | `number \| null` | (*Optional*, default `null`) |
| `units` | `Object \| null` | A bosdyn.api.Units message. (*Optional*, default `null`) |
| `minValue` | `number \| null` | (*Optional*, default `null`) |
| `maxValue` | `number \| null` | (*Optional*, default `null`) |

**Returns** `DoubleParam.Spec`

## makeStringParamSpec

```ts
export function makeStringParamSpec(options?: string[] | null, editable?: boolean | null, defaultValue?: string | null): StringParam.Spec
```

A StringParam.Spec, like make_string_param_spec() in Python.

| Parameter | Type | Description |
|---|---|---|
| `options` | `string[] \| null` | The predetermined options the StringParam may be. (*Optional*, default `null`) |
| `editable` | `boolean \| null` | Whether the value may be edited. (*Optional*, default `null`) |
| `defaultValue` | `string \| null` | (*Optional*, default `null`) |

**Returns** `StringParam.Spec`

## makeBoolParamSpec

```ts
export function makeBoolParamSpec(defaultValue?: boolean | null): BoolParam.Spec
```

A BoolParam.Spec, like make_bool_param_spec() in Python.

| Parameter | Type | Description |
|---|---|---|
| `defaultValue` | `boolean \| null` | (*Optional*, default `null`) |

**Returns** `BoolParam.Spec`

## makeRegionOfInterestParamSpec

```ts
export function makeRegionOfInterestParamSpec(serviceAndSource?: RegionOfInterestParam.ServiceAndSource | null, defaultArea?: Object | null, allowsRectangle?: boolean, allowsPolygon?: boolean): RegionOfInterestParam.Spec
```

A RegionOfInterestParam.Spec, like make_region_of_interest_param_spec() in Python.

| Parameter | Type | Description |
|---|---|---|
| `serviceAndSource` | `RegionOfInterestParam.ServiceAndSource \| null` | (*Optional*, default `null`) |
| `defaultArea` | `Object \| null` | A bosdyn.api.AreaI message. (*Optional*, default `null`) |
| `allowsRectangle` | `boolean` | (*Optional*, default `false`) |
| `allowsPolygon` | `boolean` | (*Optional*, default `false`) |

**Returns** `RegionOfInterestParam.Spec`

## makeUserInterfaceInfo

```ts
export function makeUserInterfaceInfo(displayName?: string | null, description?: string | null, displayOrder?: number | null): UserInterfaceInfo
```

A UserInterfaceInfo, like make_user_interface_info() in Python.

| Parameter | Type | Description |
|---|---|---|
| `displayName` | `string \| null` | The human-readable name displayed by the UI. (*Optional*, default `null`) |
| `description` | `string \| null` | (*Optional*, default `null`) |
| `displayOrder` | `number \| null` | The order in which the fields should be displayed. (*Optional*, default `null`) |

**Returns** `UserInterfaceInfo`

## makeRoiServiceAndSource

```ts
export function makeRoiServiceAndSource(service: string, source: string): RegionOfInterestParam.ServiceAndSource
```

A RegionOfInterestParam.ServiceAndSource, like make_roi_service_and_source() in Python.

| Parameter | Type | Description |
|---|---|---|
| `service` | `string` | The ImageService providing the image. |
| `source` | `string` | The ImageSource providing the image. |

**Returns** `RegionOfInterestParam.ServiceAndSource`

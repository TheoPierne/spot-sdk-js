/**
 * The defined custom parameter Spec is invalid.
 */
export class InvalidCustomParamSpecError extends ValueError {
    /**
     * @param {string[]} errorMessages Why the spec is invalid.
     */
    constructor(errorMessages: string[]);
    errorMessages: string[];
}
/**
 * The defined custom parameter value does not match the associated Spec.
 */
export class InvalidCustomParamValueError extends ValueError {
    /**
     * @param {CustomParamError} protoError Why the value is invalid.
     */
    constructor(protoError: CustomParamError);
    protoError: CustomParamError;
}
/**
 * @param {*} param The value of a parameter.
 * @param {Function} protoType The message type the spec requires.
 * @returns {?CustomParamError} null if param is a protoType message.
 */
export function checkTypesMatch(param: any, protoType: Function): CustomParamError | null;
/**
 * Checks that a DictParam.Spec is valid.
 * @param {DictParam.Spec} dictSpec Spec to be validated.
 * @returns {void}
 * @throws {InvalidCustomParamSpecError} The spec is invalid, with the list of error messages.
 */
export function validateDictSpec(dictSpec: DictParam.Spec): void;
/**
 * Checks that the DictParam.Spec is valid, and returns a function that validates the DictParam values against it.
 * @param {DictParam.Spec} dictSpec Spec to be validated, and to validate the values against.
 * @returns {function(DictParam): ?CustomParamError} Returns null for a valid value, and a CustomParamError with a
 * status besides STATUS_OK for an invalid one.
 * @throws {InvalidCustomParamSpecError} The spec is invalid, with the list of error messages.
 */
export function createValueValidator(dictSpec: DictParam.Spec): (arg0: DictParam) => CustomParamError | null;
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
export function dictParamsToDict(dictParam: DictParam, dictSpec: DictParam.Spec, validate?: boolean): Object;
/**
 * The values of a ListParam as an array, like list_params_to_list() in Python (see dictParamsToDict()).
 * @param {ListParam} listParam
 * @param {ListParam.Spec} listSpec The spec of the parameter.
 * @param {boolean} [validate=true] Validate the spec and the parameter first.
 * @returns {Array}
 * @throws {InvalidCustomParamSpecError} The spec is invalid.
 * @throws {InvalidCustomParamValueError} The parameter does not match the spec.
 */
export function listParamsToList(listParam: ListParam, listSpec: ListParam.Spec, validate?: boolean): any[];
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
export function oneofParamToDict(oneofParam: OneOfParam, oneofSpec: OneOfParam.Spec, validate?: boolean): Object;
/**
 * A default CustomParam for a CustomParam.Spec, like custom_spec_to_default() in Python.
 * @param {CustomParam.Spec} spec
 * @returns {?CustomParam} null if the spec has no default (a region of interest without rectangle, a one-of without
 * default key).
 * @throws {InvalidCustomParamSpecError} No spec is set (a KeyError in Python).
 */
export function customSpecToDefault(spec: CustomParam.Spec): CustomParam | null;
/**
 * A default DictParam for a DictParam.Spec, like dict_spec_to_default() in Python.
 * @param {DictParam.Spec} spec
 * @returns {DictParam}
 */
export function dictSpecToDefault(spec: DictParam.Spec): DictParam;
/**
 * A default ListParam for a ListParam.Spec, like list_spec_to_default() in Python: the minimum number of default
 * values.
 * @param {ListParam.Spec} spec
 * @returns {ListParam}
 */
export function listSpecToDefault(spec: ListParam.Spec): ListParam;
/**
 * A default Int64Param for an Int64Param.Spec, like int_spec_to_default() in Python.
 * @param {Int64Param.Spec} spec
 * @returns {Int64Param}
 */
export function intSpecToDefault(spec: Int64Param.Spec): Int64Param;
/**
 * A default DoubleParam for a DoubleParam.Spec, like double_spec_to_default() in Python.
 * @param {DoubleParam.Spec} spec
 * @returns {DoubleParam}
 */
export function doubleSpecToDefault(spec: DoubleParam.Spec): DoubleParam;
/**
 * A default StringParam for a StringParam.Spec, like string_spec_to_default() in Python: the default value, else the
 * first option.
 * @param {StringParam.Spec} spec
 * @returns {StringParam}
 */
export function stringSpecToDefault(spec: StringParam.Spec): StringParam;
/**
 * A default RegionOfInterestParam for a RegionOfInterestParam.Spec, like roi_spec_to_default() in Python.
 * @param {RegionOfInterestParam.Spec} spec
 * @returns {?RegionOfInterestParam} null if the spec does not allow rectangles.
 */
export function roiSpecToDefault(spec: RegionOfInterestParam.Spec): RegionOfInterestParam | null;
/**
 * A default BoolParam for a BoolParam.Spec, like bool_spec_to_default() in Python.
 * @param {BoolParam.Spec} spec
 * @returns {BoolParam}
 */
export function boolSpecToDefault(spec: BoolParam.Spec): BoolParam;
/**
 * A default OneOfParam for a OneOfParam.Spec, like one_of_spec_to_default() in Python: the default key, and the
 * default of each DictParam.
 * @param {OneOfParam.Spec} spec
 * @returns {?OneOfParam} null if the default key is not a key of the spec.
 */
export function oneOfSpecToDefault(spec: OneOfParam.Spec): OneOfParam | null;
/**
 * Coerce a DictParam to a spec, like dict_param_coerce_to() in Python: the missing values are defaults, the values
 * are coerced, the keys which are not in the spec are removed (not reported as a coercion, like Python).
 * @param {DictParam} param The parameter, modified in place.
 * @param {DictParam.Spec} spec
 * @returns {boolean} Whether the parameter was coerced.
 */
export function dictParamCoerceTo(param: DictParam, spec: DictParam.Spec): boolean;
/**
 * Coerce a ListParam to a spec, like list_param_coerce_to() in Python: default values up to the minimum number of
 * values, the values beyond the maximum removed, and the values coerced.
 * @param {ListParam} param The parameter, modified in place.
 * @param {ListParam.Spec} spec
 * @returns {boolean} Whether the parameter was coerced.
 */
export function listParamCoerceTo(param: ListParam, spec: ListParam.Spec): boolean;
/**
 * Coerce an Int64Param to a spec, like int_param_coerce_to() in Python: out of bounds, it is the default value.
 * @param {Int64Param} param The parameter, modified in place.
 * @param {Int64Param.Spec} spec
 * @returns {boolean} Whether the parameter was coerced.
 */
export function intParamCoerceTo(param: Int64Param, spec: Int64Param.Spec): boolean;
/**
 * Coerce a DoubleParam to a spec, like double_param_coerce_to() in Python: out of bounds, it is the default value.
 * @param {DoubleParam} param The parameter, modified in place.
 * @param {DoubleParam.Spec} spec
 * @returns {boolean} Whether the parameter was coerced.
 */
export function doubleParamCoerceTo(param: DoubleParam, spec: DoubleParam.Spec): boolean;
/**
 * Coerce a StringParam to a spec, like string_param_coerce_to() in Python: not among the options of a spec which is not
 * editable, it is the default value.
 * @param {StringParam} param The parameter, modified in place.
 * @param {StringParam.Spec} spec
 * @returns {boolean} Whether the parameter was coerced.
 */
export function stringParamCoerceTo(param: StringParam, spec: StringParam.Spec): boolean;
/**
 * Coercion is tricky with ROI parameters due to the fact that there is no standard frame size: the parameter is not
 * modified, like roi_param_coerce_to() in Python.
 * @param {RegionOfInterestParam} param
 * @param {RegionOfInterestParam.Spec} spec
 * @returns {boolean} Like Python, true if the spec has no service_and_source or the parameter has the same one.
 */
export function roiParamCoerceTo(param: RegionOfInterestParam, spec: RegionOfInterestParam.Spec): boolean;
/**
 * Coerce a OneOfParam to a spec, like one_of_param_coerce_to() in Python: a key which is not in the spec is the first
 * key (sorted), and the DictParam of each key of the spec is coerced.
 * @param {OneOfParam} param The parameter, modified in place.
 * @param {OneOfParam.Spec} spec
 * @returns {boolean} Whether the parameter was coerced.
 * @throws {RangeError} The spec has no key (an IndexError in Python).
 */
export function oneOfParamCoerceTo(param: OneOfParam, spec: OneOfParam.Spec): boolean;
/**
 * Coerce a CustomParam to a spec, like custom_param_coerce_to() in Python: a value of the type of the spec is coerced,
 * another value is replaced by the default of the spec.
 * @param {CustomParam} param The parameter, modified in place.
 * @param {CustomParam.Spec} spec
 * @returns {boolean} Whether the parameter was coerced.
 * @throws {TypeError} The value must be replaced by a default, but the spec has none (CopyFrom(None) in Python).
 */
export function customParamCoerceTo(param: CustomParam, spec: CustomParam.Spec): boolean;
/**
 * A CustomParam.Spec wrapping a spec, like make_custom_param_spec() in Python.
 * @param {DictParam.Spec|ListParam.Spec|Int64Param.Spec|DoubleParam.Spec|StringParam.Spec|RegionOfInterestParam.Spec|
 * BoolParam.Spec|OneOfParam.Spec} spec The spec to wrap (copied).
 * @returns {CustomParam.Spec}
 * @throws {ValueError} Not a spec of service_customization_pb.
 */
export function makeCustomParamSpec(spec: DictParam.Spec | ListParam.Spec | Int64Param.Spec | DoubleParam.Spec | StringParam.Spec | RegionOfInterestParam.Spec | BoolParam.Spec | OneOfParam.Spec): CustomParam.Spec;
/**
 * A DictParam.ChildSpec, like make_dict_child_spec() in Python.
 * @param {*} paramSpec The spec, wrapped in a CustomParam.Spec (see makeCustomParamSpec()).
 * @param {?UserInterfaceInfo} [uiInfo=null]
 * @returns {DictParam.ChildSpec}
 */
export function makeDictChildSpec(paramSpec: any, uiInfo?: UserInterfaceInfo | null): DictParam.ChildSpec;
/**
 * A DictParam.Spec, like make_dict_param_spec() in Python.
 * @param {Object<string, DictParam.ChildSpec>|Map<string, DictParam.ChildSpec>} specs The specs contained by the
 * DictParam.
 * @param {boolean} isHiddenByDefault Whether the UI shows this spec as collapsed by default.
 * @returns {DictParam.Spec}
 */
export function makeDictParamSpec(specs: {
    [x: string]: DictParam.ChildSpec;
} | Map<string, DictParam.ChildSpec>, isHiddenByDefault: boolean): DictParam.Spec;
/**
 * A OneOfParam.ChildSpec, like make_one_of_child_spec() in Python.
 * @param {DictParam.Spec} dictParamSpec
 * @param {?UserInterfaceInfo} [uiInfo=null]
 * @returns {OneOfParam.ChildSpec}
 */
export function makeOneOfChildSpec(dictParamSpec: DictParam.Spec, uiInfo?: UserInterfaceInfo | null): OneOfParam.ChildSpec;
/**
 * A OneOfParam.Spec, like make_one_of_param_spec() in Python.
 * @param {Object<string, OneOfParam.ChildSpec>|Map<string, OneOfParam.ChildSpec>} specs The specs contained by the
 * OneOfParam.
 * @param {?string} [defaultKey=null] The key to which the OneOfParam.Spec should default in the UI.
 * @returns {OneOfParam.Spec}
 */
export function makeOneOfParamSpec(specs: {
    [x: string]: OneOfParam.ChildSpec;
} | Map<string, OneOfParam.ChildSpec>, defaultKey?: string | null): OneOfParam.Spec;
/**
 * A ListParam.Spec, like make_list_param_spec() in Python.
 * @param {CustomParam.Spec} elementSpec The spec of each element of the list.
 * @param {?number} [minNumberOfValues=null]
 * @param {?number} [maxNumberOfValues=null]
 * @returns {ListParam.Spec}
 */
export function makeListParamSpec(elementSpec: CustomParam.Spec, minNumberOfValues?: number | null, maxNumberOfValues?: number | null): ListParam.Spec;
/**
 * An Int64Param.Spec, like make_int64_param_spec() in Python.
 * @param {?number} [defaultValue=null]
 * @param {?Object} [units=null] A bosdyn.api.Units message.
 * @param {?number} [minValue=null]
 * @param {?number} [maxValue=null]
 * @returns {Int64Param.Spec}
 */
export function makeInt64ParamSpec(defaultValue?: number | null, units?: Object | null, minValue?: number | null, maxValue?: number | null): Int64Param.Spec;
/**
 * A DoubleParam.Spec, like make_double_param_spec() in Python.
 * @param {?number} [defaultValue=null]
 * @param {?Object} [units=null] A bosdyn.api.Units message.
 * @param {?number} [minValue=null]
 * @param {?number} [maxValue=null]
 * @returns {DoubleParam.Spec}
 */
export function makeDoubleParamSpec(defaultValue?: number | null, units?: Object | null, minValue?: number | null, maxValue?: number | null): DoubleParam.Spec;
/**
 * A StringParam.Spec, like make_string_param_spec() in Python.
 * @param {?string[]} [options=null] The predetermined options the StringParam may be.
 * @param {?boolean} [editable=null] Whether the value may be edited.
 * @param {?string} [defaultValue=null]
 * @returns {StringParam.Spec}
 */
export function makeStringParamSpec(options?: string[] | null, editable?: boolean | null, defaultValue?: string | null): StringParam.Spec;
/**
 * A BoolParam.Spec, like make_bool_param_spec() in Python.
 * @param {?boolean} [defaultValue=null]
 * @returns {BoolParam.Spec}
 */
export function makeBoolParamSpec(defaultValue?: boolean | null): BoolParam.Spec;
/**
 * A RegionOfInterestParam.Spec, like make_region_of_interest_param_spec() in Python.
 * @param {?RegionOfInterestParam.ServiceAndSource} [serviceAndSource=null]
 * @param {?Object} [defaultArea=null] A bosdyn.api.AreaI message.
 * @param {boolean} [allowsRectangle=false]
 * @param {boolean} [allowsPolygon=false]
 * @returns {RegionOfInterestParam.Spec}
 */
export function makeRegionOfInterestParamSpec(serviceAndSource?: RegionOfInterestParam.ServiceAndSource | null, defaultArea?: Object | null, allowsRectangle?: boolean, allowsPolygon?: boolean): RegionOfInterestParam.Spec;
/**
 * A UserInterfaceInfo, like make_user_interface_info() in Python.
 * @param {?string} [displayName=null] The human-readable name displayed by the UI.
 * @param {?string} [description=null]
 * @param {?number} [displayOrder=null] The order in which the fields should be displayed.
 * @returns {UserInterfaceInfo}
 */
export function makeUserInterfaceInfo(displayName?: string | null, description?: string | null, displayOrder?: number | null): UserInterfaceInfo;
/**
 * A RegionOfInterestParam.ServiceAndSource, like make_roi_service_and_source() in Python.
 * @param {string} service The ImageService providing the image.
 * @param {string} source The ImageSource providing the image.
 * @returns {RegionOfInterestParam.ServiceAndSource}
 */
export function makeRoiServiceAndSource(service: string, source: string): RegionOfInterestParam.ServiceAndSource;
export class _BoolParamValidator extends _ParamValidator {
    static protoType: typeof BoolParam;
    static valueGetter: string;
}
/**
 * Validates a CustomParam.Spec by the validator of the spec set in it, and the CustomParam values against it.
 */
export class _CustomParamValidator extends _ParamValidator {
    static protoType: typeof CustomParam;
    /**
     * @param {CustomParam.Spec} paramSpec
     * @throws {InvalidCustomParamSpecError} No spec is set in paramSpec (a KeyError in Python).
     */
    constructor(paramSpec: CustomParam.Spec);
    subParamHelper: _ParamValidator;
    /**
     * @returns {_ParamValidator} The validator of the spec set in the CustomParam.Spec.
     * @throws {InvalidCustomParamSpecError} No spec is set.
     */
    getParamHelper(): _ParamValidator;
    /**
     * Like Python, the field of the type of the spec is validated: an empty one if another field is set.
     * @param {CustomParam} paramValue
     * @returns {?CustomParamError}
     */
    validateValue(paramValue: CustomParam): CustomParamError | null;
}
export class _DictParamValidator extends _ParamValidator {
    static protoType: typeof DictParam;
    static valueGetter: string;
    validateValue(paramValue: any): CustomParamError | null;
}
export class _DoubleParamValidator extends _NumericalParamValidator {
    static protoType: typeof DoubleParam;
    static valueGetter: string;
}
export class _Int64ParamValidator extends _NumericalParamValidator {
    static protoType: typeof Int64Param;
    static valueGetter: string;
}
export class _ListParamValidator extends _ParamValidator {
    static protoType: typeof ListParam;
    static valueGetter: string;
    validateValue(paramValue: any): CustomParamError | null;
}
export class _OneOfParamValidator extends _ParamValidator {
    static protoType: typeof OneOfParam;
    static valueGetter: string;
    validateValue(paramValue: any): CustomParamError | null;
}
export class _RegionOfInterestParamValidator extends _ParamValidator {
    static protoType: typeof RegionOfInterestParam;
    static valueGetter: string;
    validateValue(paramValue: any): CustomParamError | null;
}
export class _StringParamValidator extends _ParamValidator {
    static protoType: typeof StringParam;
    static valueGetter: string;
    validateValue(paramValue: any): CustomParamError | null;
}
import { ValueError } from "./exceptions";
import { CustomParamError } from "../../src/bosdyn/api/service_customization_pb";
import { DictParam } from "../../src/bosdyn/api/service_customization_pb";
import { ListParam } from "../../src/bosdyn/api/service_customization_pb";
import { OneOfParam } from "../../src/bosdyn/api/service_customization_pb";
import { CustomParam } from "../../src/bosdyn/api/service_customization_pb";
import { Int64Param } from "../../src/bosdyn/api/service_customization_pb";
import { DoubleParam } from "../../src/bosdyn/api/service_customization_pb";
import { StringParam } from "../../src/bosdyn/api/service_customization_pb";
import { RegionOfInterestParam } from "../../src/bosdyn/api/service_customization_pb";
import { BoolParam } from "../../src/bosdyn/api/service_customization_pb";
import { UserInterfaceInfo } from "../../src/bosdyn/api/service_customization_pb";
/**
 * Validates a Spec of a type of custom parameter, and the values against it. The subclasses define protoType, the
 * type of the values, and valueGetter, the getter of the values in a CustomParam (Python's custom_param_value_field).
 * @abstract
 */
declare class _ParamValidator {
    constructor(paramSpec: any);
    paramSpec: any;
    /**
     * @returns {void}
     * @throws {InvalidCustomParamSpecError} The spec is invalid.
     */
    validateSpec(): void;
    /**
     * @param {*} paramValue A value to validate against the spec.
     * @returns {?CustomParamError} null for a valid value.
     */
    validateValue(paramValue: any): CustomParamError | null;
}
declare class _NumericalParamValidator extends _ParamValidator {
    validateValue(paramValue: any): CustomParamError | null;
}
export {};

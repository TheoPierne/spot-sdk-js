export const DESCRIPTOR_SET_PATH: string;
/** Descriptor of a message. */
export class Descriptor {
    constructor(pool: any, fullName: any, proto: any, file: any, containingType: any);
    fullName: any;
    name: any;
    file: any;
    containingType: any;
    isMapEntry: boolean;
    isExtendable: boolean;
    oneofs: any;
    fields: any;
    fieldsByName: Map<any, any>;
    fieldsByNumber: Map<any, any>;
    fieldsInNumberOrder: any[];
}
/** The descriptors of a FileDescriptorSet, indexed by full name. */
export class DescriptorPool {
    /**
     * @param {Uint8Array} serializedFileDescriptorSet
     */
    constructor(serializedFileDescriptorSet: Uint8Array);
    /** @type {Map<string, Descriptor>} */
    _messages: Map<string, Descriptor>;
    /** @type {Map<string, EnumDescriptor>} */
    _enums: Map<string, EnumDescriptor>;
    _classToDescriptor: WeakMap<WeakKey, any>;
    /** @returns {IterableIterator<Descriptor>} */
    messageTypes(): IterableIterator<Descriptor>;
    /**
     * @param {string} fullName e.g. 'bosdyn.api.SE3Pose'.
     * @returns {?Descriptor}
     */
    findMessageTypeByName(fullName: string): Descriptor | null;
    /**
     * @param {string} fullName
     * @returns {?EnumDescriptor}
     */
    findEnumTypeByName(fullName: string): EnumDescriptor | null;
    /**
     * The generated class of a message type, whose module is loaded if it was not.
     * @param {Descriptor} descriptor
     * @returns {Function}
     */
    messageClass(descriptor: Descriptor): Function;
    /**
     * The descriptor of a message of a generated class.
     * @param {import('google-protobuf').Message} message
     * @returns {Descriptor}
     * @throws {TypeError} The message is not of a class of the descriptor set.
     */
    descriptorOf(message: import("google-protobuf").Message): Descriptor;
}
/** Descriptor of an enum. */
export class EnumDescriptor {
    constructor(fullName: any, proto: any, file: any);
    fullName: any;
    name: any;
    file: any;
    values: any;
    valuesByName: Map<any, any>;
    valuesByNumber: Map<any, any>;
    isClosed: boolean;
}
/** Descriptor of a field of a message. */
export class FieldDescriptor {
    constructor(pool: any, proto: any, index: any, containingType: any);
    _pool: any;
    name: any;
    fullName: string;
    jsonName: any;
    number: any;
    index: any;
    type: any;
    isRepeated: boolean;
    typeName: any;
    containingType: any;
    containingOneof: any;
    isMessage: boolean;
    hasPresence: any;
    isJsString: boolean;
    _messageType: any;
    _enumType: any;
    _accessors: {
        get: string;
        getU8: string;
        set: string;
        add: string;
        has: string;
        clear: string;
    } | null;
    /** @returns {?Descriptor} The type of a message field. */
    get messageType(): Descriptor | null;
    /** @returns {?EnumDescriptor} The type of an enum field. */
    get enumType(): EnumDescriptor | null;
    /** @returns {boolean} Whether the field is a map. */
    get isMap(): boolean;
    /**
     * The names of the jspb accessors of the field: get (the getter, of the list or the map for a repeated field),
     * getU8 (the getter of the bytes as Uint8Array), set, add (for a repeated field), has and clear.
     * @returns {{get: string, getU8: string, set: string, add: string, has: string, clear: string}}
     */
    get accessors(): {
        get: string;
        getU8: string;
        set: string;
        add: string;
        has: string;
        clear: string;
    };
}
/** The types of FieldDescriptorProto.Type. */
export const FieldType: Readonly<{
    DOUBLE: 1;
    FLOAT: 2;
    INT64: 3;
    UINT64: 4;
    INT32: 5;
    FIXED64: 6;
    FIXED32: 7;
    BOOL: 8;
    STRING: 9;
    GROUP: 10;
    MESSAGE: 11;
    BYTES: 12;
    UINT32: 13;
    ENUM: 14;
    SFIXED32: 15;
    SFIXED64: 16;
    SINT32: 17;
    SINT64: 18;
}>;
/**
 * The pool of the descriptors of the SDK (loaded at the first call).
 * @returns {DescriptorPool}
 */
export function defaultPool(): DescriptorPool;
/**
 * Merge a message into another one of the same type, like MergeFrom() in Python: the singular fields set in the source
 * overwrite the ones of the target (the sub-messages are merged recursively, and a oneof member replaces the others),
 * the repeated fields are appended, and the map entries replace the ones with the same key. jspb has no merge (parsing
 * concatenated messages replaces the sub-messages). The source is not modified, and shares nothing with the target.
 * @param {import('google-protobuf').Message} target
 * @param {import('google-protobuf').Message} source
 * @param {DescriptorPool} [pool=defaultPool()]
 * @returns {import('google-protobuf').Message} The target.
 * @throws {TypeError} The messages are not of the same type.
 */
export function mergeFrom(target: import("google-protobuf").Message, source: import("google-protobuf").Message, pool?: DescriptorPool): import("google-protobuf").Message;

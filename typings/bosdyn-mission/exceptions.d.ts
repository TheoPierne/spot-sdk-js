export class CompileError extends Error {
    constructor(msg?: string, nodeProto?: null);
    nodeProto: any;
    nodeName(): any;
    nodeImpl(): any;
    getNodeDetails(): string;
}
export class UnknownType extends CompileError {
    constructor(msg: any, nodeProto: any);
}
export class ValidationError extends Error {
    constructor(msg: any, tree: any, errors: any);
    tree: any;
    errors: any;
}
export class MissingParameterError extends CompileError {
    constructor(msg: any, targetName: any, targetPbType: any, storedPbType: any);
    targetName: any;
    targetPbType: any;
    storedPbType: any;
}
export class InaccessibleParameterError extends MissingParameterError {
}
export class MessageOverrideError extends CompileError {
    constructor(msg: any, overridingMessage: any, fieldName: any, fieldType: any);
    overridingMessage: any;
    fieldName: any;
    fieldType: any;
}
export class NodeUnreferenceableError extends Error {
    constructor(msg: any);
}

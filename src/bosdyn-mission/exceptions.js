'use strict';

const { safePbTypeToString } = require('./util');

class CompileError extends Error {
  constructor(msg = '', nodeProto = null) {
    super(msg);
    this.nodeProto = nodeProto;
    this.name = 'CompileError';
  }

  nodeName() {
    if (this.nodeProto === null) return null;

    try {
      return this.nodeProto.getName();
    } catch (e) {
      return null;
    }
  }

  nodeImpl() {
    if (this.nodeProto === null) return null;

    try {
      return this.nodeProto.getImpl().getTypeName();
    } catch (e) {
      return null;
    }
  }

  getNodeDetails() {
    let details = '';
    const nodeImpl = this.nodeImpl();

    if (nodeImpl) details = ` (${nodeImpl}`;

    const nodeName = this.nodeName();
    if (nodeName !== null) {
      if (!details) details = ' (???';
      details += ` with name "${nodeName}")`;
    }
    return details;
  }

  toString() {
    const msg = super.toString();
    return msg + this.getNodeDetails();
  }
}

class UnknownType extends CompileError {
  constructor(msg, nodeProto) {
    super(msg, nodeProto);
    this.name = 'UnknownType';
  }

  toString() {
    return `Do not know how to build ${this.nodeImpl()}`;
  }
}

class ValidationError extends Error {
  constructor(msg, tree, errors) {
    super(msg);
    this.tree = tree;
    this.errors = errors;
    this.name = 'ValidationError';
  }

  toString() {
    return `Encountered ${this.errors.length} validation errors: \n\t${this.errors
      .map(x => x.toString())
      .join('\n\t')}`;
  }
}

class MissingParameterError extends CompileError {
  constructor(msg, targetName, targetPbType, storedPbType) {
    super(msg);
    this.targetName = targetName;
    this.targetPbType = targetPbType;
    this.storedPbType = storedPbType;
    this.name = 'MissingParameterError';
  }

  toString() {
    if (this.targetPbType !== this.storedPbType) {
      return `Mismatched type for "${this.targetName}". 
            Stored as ${safePbTypeToString(this.storedPbType)}, wanted ${safePbTypeToString(this.targetPbType)}`;
    }
    return `No parameter "${this.targetName}"`;
  }
}

class InaccessibleParameterError extends MissingParameterError {
  constructor(msg, targetName, targetPbType, storedPbType) {
    super(msg, targetName, targetPbType, storedPbType);
    this.name = 'InaccessibleParameterError';
  }
}

class MessageOverrideError extends CompileError {
  constructor(msg, overridingMessage, fieldName, fieldType) {
    super(msg);
    this.overridingMessage = overridingMessage;
    this.fieldName = fieldName;
    this.fieldType = fieldType;
    this.name = 'MessageOverrideError';
  }

  toString() {
    return `Override of type ${this.overridingMessage.getTypeName()} cannot be written to field "${
      this.fieldName
    }" of type ${this.fieldType}`;
  }
}

class NodeUnreferenceableError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'NodeUnreferenceableError';
  }
}

module.exports = {
  CompileError,
  UnknownType,
  ValidationError,
  MissingParameterError,
  InaccessibleParameterError,
  MessageOverrideError,
  NodeUnreferenceableError,
};

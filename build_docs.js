'use strict';

// Generates the API reference of the documentation (docs/api/) from the typings (typings/) and their JSDoc, and copies
// the changelog into docs/. Run it with npm run build:docs, which builds the typings first.

const fs = require('node:fs');
const path = require('node:path');

const ts = require('typescript');

const ROOT = __dirname;
const TYPINGS = path.join(ROOT, 'typings');
const SRC = path.join(ROOT, 'src');
const DOCS = path.join(ROOT, 'docs');
const API = path.join(DOCS, 'api');

// The groups of modules, in the order of the reference: [directory of the modules, title].
const GROUPS = [
  ['bosdyn-client', 'Client'],
  ['bosdyn-client/spot_cam', 'Spot CAM'],
  ['bosdyn-client/gps', 'GPS'],
  ['bosdyn-mission', 'Missions'],
  ['bosdyn-choreography-client', 'Choreography'],
  ['bosdyn-orbit', 'Orbit'],
  ['bosdyn-core', 'Core'],
  ['bosdyn-core/bddf', 'BDDF'],
];

// The line of docs/_sidebar.md after which the generator writes the modules of the reference (to the end of the file).
const SIDEBAR_API_ENTRY = '- [API reference](/api/)';

// The characters removed by the slugify() of docsify, which makes the ids of the headings.
const SLUG_PUNCTUATION = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;

const PRIMITIVES = new Set(['string', 'number', 'boolean']);

/**
 * The ids docsify gives to the headings of a page, in their order (the duplicates get a suffix).
 * @returns {function(string): string}
 */
function createSlugger() {
  const counts = new Map();
  return text => {
    const slug = text
      .trim()
      .replace(/[A-Z]+/g, letters => letters.toLowerCase())
      .replace(/<[^>]+>/g, '')
      .replace(SLUG_PUNCTUATION, '')
      .replace(/\s/g, '-')
      .replace(/-+/g, '-')
      .replace(/^(\d)/, '_$1');
    const count = counts.has(slug) ? counts.get(slug) + 1 : 0;
    counts.set(slug, count);
    return count ? `${slug}-${count}` : slug;
  };
}

/**
 * The text between the braces at the start of text (they may be nested), e.g. the type of a JSDoc tag.
 * @param {string} text
 * @returns {Array<?string>} The text between the braces, and the rest.
 */
function readBraced(text) {
  const trimmed = text.trimStart();
  if (!trimmed.startsWith('{')) return [null, text];
  let depth = 0;
  for (let i = 0; i < trimmed.length; i++) {
    if (trimmed[i] === '{') depth++;
    if (trimmed[i] === '}' && --depth === 0) return [trimmed.slice(1, i).trim(), trimmed.slice(i + 1)];
  }
  return [null, text];
}

/**
 * @typedef {Object} JsDocParam
 * @property {string} name
 * @property {?string} type
 * @property {boolean} optional
 * @property {?string} defaultValue
 * @property {string} description
 */

/**
 * @typedef {Object} JsDoc
 * @property {string} description
 * @property {JsDocParam[]} params
 * @property {JsDocParam[]} properties
 * @property {?{type: ?string, description: string}} returns
 * @property {Array<{type: ?string, description: string}>} throws
 * @property {?string} deprecated
 * @property {string[]} examples
 * @property {?string} type
 * @property {Set<string>} flags The other tags.
 */

/**
 * Parses a JSDoc comment: its description and the tags the reference shows.
 * @param {?string} raw The comment, with its delimiters.
 * @returns {JsDoc}
 */
function parseJsDoc(raw) {
  const doc = {
    description: '',
    params: [],
    properties: [],
    returns: null,
    throws: [],
    deprecated: null,
    examples: [],
    type: null,
    flags: new Set(),
  };
  if (!raw) return doc;
  const lines = raw
    .replace(/^\/\*\*/, '')
    .replace(/\*\/$/, '')
    .split('\n')
    .map(line => line.replace(/^\s*\*? ?/, '').trimEnd());
  const description = [];
  const tags = [];
  for (const line of lines) {
    const tag = /^@(\w+)\s?(.*)$/.exec(line);
    if (tag) tags.push({ name: tag[1], text: tag[2] });
    else if (tags.length) tags.at(-1).text += `\n${line}`;
    else description.push(line);
  }
  doc.description = description.join('\n').trim();
  for (const { name, text } of tags) {
    if (['param', 'arg', 'argument', 'property', 'prop'].includes(name)) {
      const [type, rest] = readBraced(text);
      const match = /^\s*(\[[^\]]*\]|\S+)\s*([\s\S]*)$/.exec(rest);
      if (!match) continue;
      let paramName = match[1];
      let defaultValue = null;
      const optional = paramName.startsWith('[');
      if (optional) [paramName, defaultValue = null] = paramName.slice(1, -1).split(/=(.*)/s);
      (name.startsWith('prop') ? doc.properties : doc.params).push({
        name: paramName,
        type,
        optional,
        defaultValue,
        description: match[2].replace(/^-\s*/, '').trim(),
      });
    } else if (name === 'returns' || name === 'return') {
      const [type, rest] = readBraced(text);
      doc.returns = { type, description: rest.trim() };
    } else if (name === 'throws' || name === 'exception') {
      const [type, rest] = readBraced(text);
      doc.throws.push({ type, description: rest.trim() });
    } else if (name === 'deprecated') {
      doc.deprecated = text.trim() || 'Deprecated.';
    } else if (name === 'example') {
      doc.examples.push(text.replace(/^\n/, ''));
    } else if (name === 'type') {
      doc.type = readBraced(text)[0];
    } else {
      doc.flags.add(name);
    }
  }
  return doc;
}

/**
 * @param {ts.Node} node
 * @param {ts.SourceFile} sourceFile
 * @returns {JsDoc} The JSDoc comment just before the node.
 */
function jsDocOf(node, sourceFile) {
  const ranges = ts.getLeadingCommentRanges(sourceFile.text, node.getFullStart()) ?? [];
  const comments = ranges
    .map(range => sourceFile.text.slice(range.pos, range.end))
    .filter(comment => comment.startsWith('/**'));
  return parseJsDoc(comments.at(-1) ?? null);
}

/**
 * The type texts of the typings refer to the protobuf modules with relative paths: they become paths of the package.
 * @param {string} text
 * @returns {string}
 */
function packagePaths(text) {
  return text.replace(/(["'])(?:\.\.\/)+src\//g, '$1spot-sdk-js/src/');
}

/**
 * Markdown text of a description: the inline links as code, and the < > of the text escaped (not in the code).
 * @param {?string} text
 * @param {boolean} [inline=false] On one line, for the tables.
 * @returns {string}
 */
function markdown(text, inline = false) {
  let result = (text ?? '')
    .replace(/\{@link(?:code|plain)?\s+([^\s}|]+)(?:[\s|]+([^}]*))?\}/g, (match, target, label) =>
      label ? label.trim() : `\`${target}\``,
    )
    .split(/(`[^`]*`)/)
    .map((part, i) => (i % 2 ? part : part.replace(/</g, '&lt;').replace(/>/g, '&gt;')))
    .join('');
  if (inline) result = result.replace(/\s*\n\s*/g, ' ').replace(/\|/g, '\\|');
  return result;
}

/**
 * @param {?string} text
 * @returns {string} A code span for a table cell.
 */
function codeCell(text) {
  return text
    ? `\`${packagePaths(text)
        .replace(/\s*\n\s*/g, ' ')
        .replace(/\|/g, '\\|')}\``
    : '';
}

/**
 * The declaration text of a node, without its trailing semicolon and with its continuation lines dedented.
 * @param {ts.Node} node
 * @param {ts.SourceFile} sourceFile
 * @param {number} indent The indentation of the continuation lines to remove.
 * @returns {string}
 */
function declarationText(node, sourceFile, indent) {
  const text = node
    .getText(sourceFile)
    .replace(/;$/, '')
    .split('\n')
    .map((line, i) => (i && line.startsWith(' '.repeat(indent)) ? line.slice(indent) : line))
    .join('\n');
  return packagePaths(text);
}

/**
 * @param {ts.Node} node
 * @param {ts.SyntaxKind} kind
 * @returns {boolean} Whether the node has the modifier.
 */
function hasModifier(node, kind) {
  return (ts.canHaveModifiers(node) ? (ts.getModifiers(node) ?? []) : []).some(modifier => modifier.kind === kind);
}

/**
 * @param {string} name
 * @param {JsDoc} doc
 * @returns {boolean} Whether a declaration is private (its name starts with _ or #, or its JSDoc says so).
 */
function isPrivate(name, doc) {
  return name.startsWith('_') || name.startsWith('#') || doc.flags.has('private') || doc.flags.has('internal');
}

/**
 * @param {*} value
 * @returns {string} The JavaScript text of a primitive value.
 */
function literal(value) {
  return typeof value === 'string' ? `'${value}'` : String(value);
}

/**
 * The exports of a module of the SDK at run time, for the values of its constants and static properties.
 * @param {string} moduleId
 * @returns {?Object}
 */
function runtimeExports(moduleId) {
  try {
    return require(path.join(SRC, moduleId));
  } catch {
    return null;
  }
}

/**
 * The value of a property that may be a getter which throws.
 * @param {*} object
 * @param {string} name
 * @returns {*}
 */
function readProperty(object, name) {
  try {
    return object?.[name];
  } catch {
    return undefined;
  }
}

function paramRow(name, type, optional, defaultValue, description) {
  const details = [optional ? '*Optional*' : '', defaultValue ? `default ${codeCell(defaultValue)}` : '']
    .filter(Boolean)
    .join(', ');
  const text = [markdown(description, true), details ? `(${details})` : ''].filter(Boolean).join(' ');
  return `| \`${name}\` | ${codeCell(type)} | ${text} |`;
}

/**
 * The rows of the table of the parameters of a function: the parameters of its declaration, with the descriptions
 * of its JSDoc, and the documented members of its options objects.
 * @param {ts.SignatureDeclarationBase} node
 * @param {ts.SourceFile} sourceFile
 * @param {JsDoc} doc
 * @returns {string[]}
 */
function parameterRows(node, sourceFile, doc) {
  const rows = [];
  const topLevel = doc.params.filter(param => !param.name.includes('.'));
  node.parameters.forEach((parameter, index) => {
    // A destructured parameter has no name in the declaration: it is documented at its position.
    const tag = ts.isIdentifier(parameter.name)
      ? topLevel.find(param => param.name === parameter.name.text)
      : topLevel[index];
    const name = ts.isIdentifier(parameter.name) ? parameter.name.text : (tag?.name ?? 'options');
    const optional = Boolean(parameter.questionToken || parameter.initializer || tag?.optional);
    const type = parameter.type ? parameter.type.getText(sourceFile) : (tag?.type ?? 'any');
    const shown = parameter.dotDotDotToken ? `...${name}` : name;
    rows.push(paramRow(shown, type, optional, tag?.defaultValue, tag?.description));
    for (const member of doc.params.filter(param => param.name.startsWith(`${name}.`))) {
      rows.push(paramRow(member.name, member.type, member.optional, member.defaultValue, member.description));
    }
  });
  return rows;
}

/**
 * The documentation of a function or of a method: signature, description, parameters, returned value, errors.
 * @param {ts.SignatureDeclarationBase} node
 * @param {ts.SourceFile} sourceFile
 * @param {JsDoc} doc
 * @param {number} indent
 * @returns {string[]}
 */
function renderCallable(node, sourceFile, doc, indent) {
  const lines = ['```ts', declarationText(node, sourceFile, indent), '```', ''];
  if (doc.deprecated) lines.push('> [!WARNING]', `> **Deprecated.** ${markdown(doc.deprecated, true)}`, '');
  if (doc.description) lines.push(markdown(doc.description), '');
  const rows = parameterRows(node, sourceFile, doc);
  if (rows.length) lines.push('| Parameter | Type | Description |', '|---|---|---|', ...rows, '');
  const returnType = node.type?.getText(sourceFile);
  if (!ts.isConstructorDeclaration(node) && (doc.returns || (returnType && returnType !== 'void'))) {
    const description = doc.returns?.description ? `: ${markdown(doc.returns.description, true)}` : '';
    lines.push(`**Returns** ${codeCell(returnType ?? doc.returns?.type ?? 'void')}${description}`, '');
  }
  if (doc.throws.length) {
    lines.push('**Throws**', '');
    for (const error of doc.throws) lines.push(`- ${codeCell(error.type)} ${markdown(error.description, true)}`);
    lines.push('');
  }
  for (const example of doc.examples) lines.push('```js', example.trim(), '```', '');
  return lines;
}

/**
 * The documentation of a class: signature, description, constructor, properties and methods.
 * @param {ts.ClassDeclaration} node
 * @param {ts.SourceFile} sourceFile
 * @param {function(string): string} slug
 * @param {?Function} runtimeClass The class at run time, for the values of its static properties.
 * @returns {{lines: string[], anchor: string}}
 */
function renderClass(node, sourceFile, slug, runtimeClass) {
  const name = node.name.text;
  const doc = classDoc(node, sourceFile);
  const heritage = (node.heritageClauses ?? []).map(clause => clause.getText(sourceFile)).join(' ');
  const lines = [`## ${name}`, '', '```ts', `class ${name}${heritage ? ` ${heritage}` : ''}`, '```', ''];
  const anchor = slug(name);
  if (doc.deprecated) lines.push('> [!WARNING]', `> **Deprecated.** ${markdown(doc.deprecated, true)}`, '');
  if (doc.description) lines.push(markdown(doc.description), '');

  const properties = [];
  const methods = [];
  let constructor = null;
  for (const member of node.members) {
    const memberDoc = jsDocOf(member, sourceFile);
    if (ts.isConstructorDeclaration(member)) {
      // Its description is the one of the class when the class has none.
      if (memberDoc.description === doc.description) memberDoc.description = '';
      if (member.parameters.length || memberDoc.description) constructor = { member, memberDoc };
      continue;
    }
    const memberName = member.name?.getText(sourceFile);
    if (!memberName || isPrivate(memberName, memberDoc)) continue;
    if (ts.isMethodDeclaration(member)) {
      methods.push({ member, memberDoc, memberName });
    } else if (ts.isPropertyDeclaration(member) || ts.isGetAccessorDeclaration(member)) {
      properties.push({ member, memberDoc, memberName });
    }
  }

  if (constructor) {
    lines.push(`### new ${name}`, '');
    slug(`new ${name}`);
    lines.push(...renderCallable(constructor.member, sourceFile, constructor.memberDoc, 4));
  }
  if (properties.length) {
    lines.push('### Properties', '', '| Property | Type | Description |', '|---|---|---|');
    slug('Properties');
    for (const { member, memberDoc, memberName } of properties) {
      const isStatic = hasModifier(member, ts.SyntaxKind.StaticKeyword);
      const hasSetter = node.members.some(
        other => ts.isSetAccessorDeclaration(other) && other.name.getText(sourceFile) === memberName,
      );
      const readOnly =
        hasModifier(member, ts.SyntaxKind.ReadonlyKeyword) || (ts.isGetAccessorDeclaration(member) && !hasSetter);
      const value = isStatic ? readProperty(runtimeClass, memberName) : undefined;
      const type = member.type?.getText(sourceFile) ?? memberDoc.type ?? memberDoc.returns?.type ?? 'any';
      const notes = [
        isStatic ? 'Static.' : '',
        readOnly ? 'Read-only.' : '',
        PRIMITIVES.has(typeof value) ? `Value: ${codeCell(literal(value))}.` : '',
      ];
      const description = [markdown(memberDoc.description || memberDoc.returns?.description, true), ...notes]
        .filter(Boolean)
        .join(' ');
      lines.push(`| \`${memberName}\` | ${codeCell(type)} | ${description} |`);
    }
    lines.push('');
  }
  for (const { member, memberDoc, memberName } of methods) {
    const title = hasModifier(member, ts.SyntaxKind.StaticKeyword) ? `${name}.${memberName}` : memberName;
    lines.push(`### ${title}`, '');
    slug(title);
    lines.push(...renderCallable(member, sourceFile, memberDoc, 4));
  }
  return { lines, anchor };
}

/**
 * The first sentence of a description, for the tables of contents.
 * @param {?string} text
 * @returns {string}
 */
function summary(text) {
  const paragraph = (text ?? '')
    .split(/\n\s*\n/)[0]
    .replace(/\s*\n\s*/g, ' ')
    .trim();
  const sentence = /^.+?[.!?](?=\s|$)/.exec(paragraph)?.[0] ?? paragraph;
  return markdown(sentence, true);
}

/**
 * The description of a module: the JSDoc comment with a file tag at the top of its source file, if any.
 * @param {string} moduleId e.g. 'bosdyn-client/robot'.
 * @returns {string}
 */
function moduleDescription(moduleId) {
  const file = path.join(SRC, `${moduleId}.js`);
  if (!fs.existsSync(file)) return '';
  const text = fs
    .readFileSync(file, 'utf8')
    .replace(/^#!.*\n/, '')
    .replace(/^\s*'use strict';\s*/, '');
  const block = /^\/\*\*([\s\S]*?)\*\//.exec(text);
  if (!block || !/@file(?:overview)?\b/.test(block[1])) return '';
  return parseJsDoc(`/**${block[1].replace(/@file(?:overview)?\b/, '')}*/`).description;
}

/**
 * The description of a class, or of its constructor when the class has none.
 * @param {ts.ClassDeclaration} node
 * @param {ts.SourceFile} sourceFile
 * @returns {JsDoc}
 */
function classDoc(node, sourceFile) {
  const doc = jsDocOf(node, sourceFile);
  const constructor = node.members.find(ts.isConstructorDeclaration);
  if (!doc.description && constructor) doc.description = jsDocOf(constructor, sourceFile).description;
  return doc;
}

/**
 * The declarations of a typings file, and its exported names.
 * @param {ts.SourceFile} sourceFile
 * @returns {{locals: Map<string, ts.Statement[]>, exported: Map<string, string>, imports: Map<string, Object>,
 *   protobufModules: Map<string, string>}}
 */
function collectModule(sourceFile) {
  const locals = new Map();
  const exported = new Map();
  const imports = new Map();
  const protobufModules = new Map();
  for (const statement of sourceFile.statements) {
    if (ts.isImportDeclaration(statement)) {
      const specifier = statement.moduleSpecifier.text;
      for (const element of statement.importClause?.namedBindings?.elements ?? []) {
        imports.set(element.name.text, { specifier, name: (element.propertyName ?? element.name).text });
      }
      continue;
    }
    if (ts.isImportEqualsDeclaration(statement)) {
      const reference = statement.moduleReference;
      if (ts.isExternalModuleReference(reference) && /\/src\/bosdyn\//.test(reference.expression.text)) {
        protobufModules.set(statement.name.text, packagePaths(`"${reference.expression.text}"`).slice(1, -1));
      }
      continue;
    }
    if (ts.isExportDeclaration(statement)) {
      if (!statement.moduleSpecifier && statement.exportClause && ts.isNamedExports(statement.exportClause)) {
        for (const element of statement.exportClause.elements) {
          exported.set(element.name.text, (element.propertyName ?? element.name).text);
        }
      }
      continue;
    }
    const names = ts.isVariableStatement(statement)
      ? statement.declarationList.declarations.map(declaration => declaration.name.getText(sourceFile))
      : [statement.name?.getText(sourceFile)].filter(Boolean);
    for (const name of names) {
      if (!locals.has(name)) locals.set(name, []);
      locals.get(name).push(statement);
      if (hasModifier(statement, ts.SyntaxKind.ExportKeyword)) exported.set(name, name);
    }
  }
  return { locals, exported, imports, protobufModules };
}

/**
 * @param {string} specifier A module specifier of a typings file.
 * @param {string} moduleId The module of the file.
 * @returns {?string} The module id it refers to, if it is a module of the SDK.
 */
function resolveModule(specifier, moduleId) {
  if (!specifier.startsWith('.')) return null;
  const target = path.posix.join(path.posix.dirname(moduleId), specifier).replace(/\.js$/, '');
  return fs.existsSync(path.join(TYPINGS, `${target}.d.ts`)) ? target : null;
}

/**
 * The text of the value or of the type of a constant, for the table of the constants of a module.
 * @param {string} name
 * @param {ts.Statement[]} declarations
 * @param {ts.SourceFile} sourceFile
 * @param {?Object} runtime The exports of the module at run time.
 * @returns {string}
 */
function constantText(name, declarations, sourceFile, runtime) {
  const value = readProperty(runtime, name);
  if (PRIMITIVES.has(typeof value)) return literal(value);
  const variable = declarations.find(ts.isVariableStatement);
  const type = variable?.declarationList.declarations
    .find(declaration => declaration.name.getText(sourceFile) === name)
    ?.type?.getText(sourceFile)
    .replace(/\s+/g, ' ');
  if (type && type.length <= 100 && !/^\{ \[x: string\]/.test(type)) return type;
  // An enumeration: an object of primitive values.
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const entries = Object.entries(value);
    if (entries.length && entries.length <= 30 && entries.every(([, v]) => PRIMITIVES.has(typeof v))) {
      return `{ ${entries.map(([key, v]) => `${key}: ${literal(v)}`).join(', ')} }`;
    }
  }
  return type ?? 'object';
}

/**
 * The lines that require the exports of a module: from the package root when it exports them, or from one of its
 * namespaces (e.g. spotCam), else from the module (the names several modules export with different values).
 * @param {string} moduleId
 * @param {string[]} names The values the module exports.
 * @param {?Object} runtime The exports of the module at run time.
 * @returns {string[]}
 */
function importLines(moduleId, names, runtime) {
  const root = runtimeExports('index') ?? {};
  const namespaces = Object.keys(root).filter(key => root[key] !== null && typeof root[key] === 'object');
  const moduleSource = `require('spot-sdk-js/src/${moduleId}')`;
  const groups = new Map([["require('spot-sdk-js')", []]]);
  for (const name of names) {
    const value = readProperty(runtime, name);
    let source = moduleSource;
    if (value !== undefined && root[name] === value) {
      source = "require('spot-sdk-js')";
    } else {
      const namespace = namespaces.find(key => value !== undefined && readProperty(root[key], name) === value);
      if (namespace) source = `require('spot-sdk-js').${namespace}`;
    }
    if (!groups.has(source)) groups.set(source, []);
    groups.get(source).push(name);
  }
  const lines = [];
  for (const [source, sourceNames] of groups) {
    if (!sourceNames.length) continue;
    // The names required from their module are all listed, unless the root exports none of the module.
    const all = source === moduleSource && sourceNames.length < names.length;
    if (all) {
      lines.push('// Several modules export these names with different values: they are required from the module.');
    }
    const shown =
      all || sourceNames.length <= 3 ? sourceNames.join(', ') : `${sourceNames.slice(0, 3).join(', ')}, ...`;
    lines.push(`const { ${shown} } = ${source};`);
  }
  return lines;
}

/**
 * The page of a module of the SDK.
 * @param {string} moduleId e.g. 'bosdyn-client/robot'.
 * @param {ts.SourceFile} sourceFile
 * @param {Map<string, Map<string, string>>} anchors The anchors of the exports of the modules already rendered.
 * @returns {{text: string, summary: string, exports: Map<string, string>}}
 */
function renderModule(moduleId, sourceFile, anchors) {
  const { locals, exported, imports, protobufModules } = collectModule(sourceFile);
  const runtime = runtimeExports(moduleId);
  const slug = createSlugger();
  const title = moduleId === 'index' ? 'spot-sdk-js' : moduleId;
  slug(title);

  const classes = [];
  const functions = [];
  const constants = [];
  const types = [];
  const aliases = [];
  const reexports = [];
  for (const [name, localName] of exported) {
    if (name.startsWith('_')) continue;
    const declarations = locals.get(localName);
    if (!declarations) {
      const imported = imports.get(localName);
      const target = imported && resolveModule(imported.specifier, moduleId);
      if (target) reexports.push({ name, target, targetName: imported.name });
      continue;
    }
    if (name !== localName) {
      aliases.push({ name, localName });
      continue;
    }
    const [declaration] = declarations;
    const doc = jsDocOf(declaration, sourceFile);
    if (ts.isClassDeclaration(declaration)) {
      classes.push(declaration);
    } else if (ts.isFunctionDeclaration(declaration)) {
      functions.push(declarations);
    } else if (declarations.some(other => ts.isModuleDeclaration(other) || ts.isVariableStatement(other))) {
      // A constant, or an enumeration (a type and a namespace, or a type and a constant, of the same name).
      constants.push({ name, text: constantText(name, declarations, sourceFile, runtime), doc });
    } else if (ts.isTypeAliasDeclaration(declaration) || ts.isInterfaceDeclaration(declaration)) {
      // The types imported for the JSDoc (typedefs of import() types) are not types of this module.
      if (!(ts.isTypeAliasDeclaration(declaration) && ts.isImportTypeNode(declaration.type))) {
        types.push({ name, declaration, doc });
      }
    }
  }

  const body = [];
  const rows = [];
  const exportAnchors = new Map();
  for (const declaration of classes) {
    const name = declaration.name.text;
    const { lines, anchor } = renderClass(declaration, sourceFile, slug, readProperty(runtime, name));
    body.push(...lines);
    exportAnchors.set(name, anchor);
    rows.push([name, 'Class', summary(classDoc(declaration, sourceFile).description)]);
  }
  for (const declarations of functions) {
    const name = declarations[0].name.text;
    body.push(`## ${name}`, '');
    exportAnchors.set(name, slug(name));
    rows.push([name, 'Function', summary(jsDocOf(declarations[0], sourceFile).description)]);
    for (const declaration of declarations) {
      body.push(...renderCallable(declaration, sourceFile, jsDocOf(declaration, sourceFile), 0));
    }
  }
  if (constants.length) {
    body.push('## Constants', '', '| Constant | Value or type | Description |', '|---|---|---|');
    const anchor = slug('Constants');
    for (const { name, text, doc } of constants) {
      body.push(`| \`${name}\` | ${codeCell(text)} | ${markdown(doc.description, true)} |`);
      exportAnchors.set(name, anchor);
      rows.push([name, 'Constant', summary(doc.description)]);
    }
    body.push('');
  }
  if (types.length) {
    body.push('## Types', '');
    slug('Types');
    for (const { name, declaration, doc } of types) {
      body.push(`### ${name}`, '');
      exportAnchors.set(name, slug(name));
      body.push('```ts', declarationText(declaration, sourceFile, 0), '```', '');
      if (doc.description) body.push(markdown(doc.description), '');
      if (doc.properties.length) {
        body.push('| Property | Type | Description |', '|---|---|---|');
        for (const { name: property, type, optional, defaultValue, description } of doc.properties) {
          body.push(paramRow(property, type, optional, defaultValue, description));
        }
        body.push('');
      }
      rows.push([name, 'Type', summary(doc.description)]);
    }
  }
  if (aliases.length) {
    body.push('## Aliases', '', '| Alias | Of |', '|---|---|');
    const anchor = slug('Aliases');
    for (const { name, localName } of aliases) {
      const target = exportAnchors.get(localName);
      body.push(`| \`${name}\` | ${target ? `[\`${localName}\`](#${target})` : `\`${localName}\``} |`);
      rows.push([name, 'Alias', `Alias of \`${localName}\`.`]);
      exportAnchors.set(name, anchor);
    }
    body.push('');
  }
  if (reexports.length) {
    body.push('## Exports of other modules', '', '| Export | Module |', '|---|---|');
    const anchor = slug('Exports of other modules');
    for (const { name, target, targetName } of reexports) {
      const targetAnchor = anchors.get(target)?.get(targetName);
      const link = `/api/${target}${targetAnchor ? `?id=${targetAnchor}` : ''}`;
      const shown = name === targetName ? `\`${name}\`` : `\`${name}\` (\`${targetName}\`)`;
      body.push(`| [${shown}](${link}) | [${target}](/api/${target}) |`);
      exportAnchors.set(name, anchor);
    }
    body.push('');
  }
  const bodyText = body.join('\n');
  const usedProtobufModules = [...protobufModules].filter(([name]) => new RegExp(`\\b${name}\\.`).test(bodyText));
  if (usedProtobufModules.length) {
    body.push('## Protobuf modules', '');
    slug('Protobuf modules');
    body.push('The types of this page named `<module>.<Message>` are the protobuf messages of these modules:', '');
    body.push('| Name | Module |', '|---|---|');
    for (const [name, specifier] of usedProtobufModules) body.push(`| \`${name}\` | \`${specifier}\` |`);
    body.push('');
  }

  const description = moduleDescription(moduleId);
  const head = [`# ${title}`, ''];
  if (description) head.push(markdown(description), '');
  // The values the module exports (not its types): its classes first, then its functions, constants and errors.
  const ranks = ['Class', 'Function', 'Constant', 'Alias', 'Type'];
  const rank = ([name, kind]) => {
    if (kind === 'Class' && readProperty(runtime, name)?.prototype instanceof Error) return ranks.length;
    return ranks.indexOf(kind);
  };
  const sortedRows = [...rows].sort((a, b) => rank(a) - rank(b));
  const values = sortedRows.filter(([, kind]) => kind !== 'Type');
  const names = [...values.map(([name]) => name), ...reexports.map(r => r.name)];
  if (names.length) head.push('```js', ...importLines(moduleId, names, runtime), '```', '');
  if (rows.length) {
    head.push('| Export | Kind | Description |', '|---|---|---|');
    for (const [name, kind, text] of sortedRows) {
      head.push(`| [\`${name}\`](#${exportAnchors.get(name)}) | ${kind} | ${text} |`);
    }
    head.push('');
  }
  let firstDescription = '';
  if (classes.length) firstDescription = classDoc(classes[0], sourceFile).description;
  else if (functions.length) firstDescription = jsDocOf(functions[0][0], sourceFile).description;
  return {
    text: `${[...head, ...body]
      .join('\n')
      .replace(/\n{3,}/g, '\n\n')
      .trimEnd()}\n`,
    summary: summary(description || firstDescription),
    exports: exportAnchors,
  };
}

/**
 * @param {string} dir
 * @param {string} [prefix='']
 * @returns {string[]} The module ids of the typings files of dir and of its subdirectories.
 */
function moduleIds(dir, prefix = '') {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap(entry => {
      const id = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.isDirectory()) return moduleIds(path.join(dir, entry.name), id);
      return entry.name.endsWith('.d.ts') ? [id.replace(/\.d\.ts$/, '')] : [];
    })
    .sort();
}

/**
 * Writes the entries of the reference at the end of docs/_sidebar.md, after its API reference entry.
 * @param {string[]} entries
 */
function writeSidebar(entries) {
  const file = path.join(DOCS, '_sidebar.md');
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  const index = lines.findIndex(line => line.trimEnd() === SIDEBAR_API_ENTRY);
  if (index === -1) throw new Error(`docs/_sidebar.md has no line ${SIDEBAR_API_ENTRY}`);
  fs.writeFileSync(file, `${[...lines.slice(0, index + 1), ...entries].join('\n')}\n`);
}

function main() {
  if (!fs.existsSync(TYPINGS)) throw new Error('No typings/: run npm run build:typings first.');
  const ids = moduleIds(TYPINGS);
  const program = ts.createProgram(
    ids.map(id => path.join(TYPINGS, `${id}.d.ts`)),
    { noResolve: true, noLib: true, types: [] },
  );
  fs.rmSync(API, { recursive: true, force: true });

  // The index files last: their re-exports link to the anchors of the other modules.
  const isIndex = id => path.posix.basename(id) === 'index';
  const anchors = new Map();
  const summaries = new Map();
  const ordered = [...ids.filter(moduleId => !isIndex(moduleId)), ...ids.filter(isIndex)];
  for (const id of ordered) {
    const page = renderModule(id, program.getSourceFile(path.join(TYPINGS, `${id}.d.ts`)), anchors);
    anchors.set(id, page.exports);
    summaries.set(id, page.summary);
    const file = path.join(API, `${id}.md`);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, page.text);
  }

  const overview = [
    // The groups of modules are not listed again in the sidebar, under the entry of this page.
    '# API reference <!-- {docsify-ignore-all} -->',
    '',
    'The [package root](/api/index) exports the classes, functions and constants of all the modules:',
    "`const { RobotStateClient, LeaseKeepAlive } = require('spot-sdk-js')`. The clients of the Spot CAM, of the GPS",
    'and of Orbit, and the modules of generic names, are in its namespaces `spotCam`, `gps`, `orbit`, `textFormat`,',
    "`jsonFormat`, `imageUtil` and `descriptorPool`, e.g. `require('spot-sdk-js').spotCam.PtzClient`. A few names are",
    'exported by several modules with different values, like the `NoTimeSyncError` of GraphNav and of the robot',
    "commands: they are required from their module, e.g. `require('spot-sdk-js/src/bosdyn-client/graph_nav')`, as the",
    'page of the module shows.',
    '',
    'The protobuf messages are the modules of `spot-sdk-js/src/bosdyn/api/`, generated from the protos of Boston',
    'Dynamics (see their [reference](https://dev.bostondynamics.com/protos/bosdyn/api/proto_reference)).',
    '',
    'This reference is generated from the JSDoc of the SDK by `npm run build:docs`: edit the JSDoc in `src/`, not',
    'these pages.',
    '',
  ];
  const sidebar = ['  - [spot-sdk-js](/api/index)'];
  for (const [dir, title] of GROUPS) {
    const modules = ids.filter(id => path.posix.dirname(id) === dir);
    if (!modules.length) continue;
    overview.push(`## ${title}`, '', '| Module | Description |', '|---|---|');
    sidebar.push(`  - ${title}`);
    for (const id of modules) {
      overview.push(`| [${path.posix.basename(id)}](/api/${id}) | ${summaries.get(id)} |`);
      sidebar.push(`    - [${path.posix.basename(id)}](/api/${id})`);
    }
    overview.push('');
  }
  fs.writeFileSync(path.join(API, 'README.md'), `${overview.join('\n').trimEnd()}\n`);
  writeSidebar(sidebar);

  fs.copyFileSync(path.join(ROOT, 'CHANGELOG.md'), path.join(DOCS, 'changelog.md'));
  console.log(`docs/api/: ${ids.length} modules.`);
}

main();

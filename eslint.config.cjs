'use strict';

// The configuration of ESLint (flat config). Prettier formats the code: eslint-plugin-prettier reports the
// differences with the format of .prettierrc.json, and eslint-config-prettier turns off the formatting rules of ESLint.
// The rules below check the rest: errors, Node.js (eslint-plugin-n), requires (eslint-plugin-import), and the JSDoc
// the typings are generated from (eslint-plugin-jsdoc).

const path = require('node:path');

const js = require('@eslint/js');
const { defineConfig, globalIgnores } = require('eslint/config');
const importPlugin = require('eslint-plugin-import');
const jsdoc = require('eslint-plugin-jsdoc');
const nodePlugin = require('eslint-plugin-n');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const globals = require('globals');

// The Node.js globals are imported, e.g. `const process = require('node:process');`.
const RESTRICTED_GLOBALS = [
  { name: 'Buffer', message: 'Import Buffer from `node:buffer` instead' },
  { name: 'process', message: 'Import process from `node:process` instead' },
  ...['setTimeout', 'setInterval', 'setImmediate', 'clearTimeout', 'clearInterval'].map(name => ({
    name,
    message: `Import ${name} from \`node:timers\` instead`,
  })),
];

module.exports = defineConfig([
  globalIgnores([
    'build/',
    'docs/',
    'files/',
    // Generated: the protobuf messages (build.js) and the typings (npm run build:typings).
    'src/bosdyn/',
    'typings/',
    'count.output.json',
  ]),

  js.configs.recommended,
  nodePlugin.configs['flat/recommended-script'],

  {
    plugins: { import: importPlugin, jsdoc },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: globals.node,
    },

    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },

    settings: {
      // The JSDoc types are TypeScript types: TypeScript generates the typings from them.
      jsdoc: { mode: 'typescript', tagNamePreference: { augments: 'extends' } },
    },

    rules: {
      // Possible errors.
      'array-callback-return': 'error',
      'no-constructor-return': 'error',
      'no-promise-executor-return': 'error',
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrors: 'none' }],

      // Best practices.
      'accessor-pairs': 'error',
      'consistent-return': 'error',
      'consistent-this': ['error', '$this'],
      'default-case-last': 'error',
      'dot-notation': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'func-name-matching': 'error',
      'func-names': 'error',
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'no-array-constructor': 'error',
      'no-empty-function': ['error', { allow: ['arrowFunctions'] }],
      'no-implied-eval': 'error',
      'no-inline-comments': 'error',
      'no-invalid-this': 'error',
      'no-label-var': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-object-constructor': 'error',
      'no-octal-escape': 'error',
      'no-restricted-globals': ['error', ...RESTRICTED_GLOBALS],
      'no-return-assign': 'error',
      'no-sequences': 'error',
      'no-shadow': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'error',
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-void': 'error',
      'object-shorthand': ['error', 'always', { avoidQuotes: true }],
      'operator-assignment': 'error',
      'prefer-const': ['error', { destructuring: 'all' }],
      'prefer-numeric-literals': 'error',
      'prefer-object-has-own': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      radix: 'error',
      strict: ['error', 'global'],
      yoda: 'error',

      // Complexity.
      'max-depth': ['error', 4],
      'max-nested-callbacks': ['error', 4],

      // Node.js (the callbacks rules of ESLint moved to eslint-plugin-n).
      'n/callback-return': 'error',
      'n/handle-callback-err': 'error',
      'n/no-new-require': 'error',
      'n/no-path-concat': 'error',
      'n/prefer-node-protocol': 'error',
      // The SDK is a library: it throws (its command lines set process.exitCode).
      'n/no-process-exit': 'error',

      // Requires (import/no-extraneous-dependencies knows the devDependencies, unlike n/no-extraneous-require).
      'import/no-extraneous-dependencies': ['error', { devDependencies: false }],
      'n/no-extraneous-require': 'off',
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': ['error', { commonjs: true }],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'index', 'sibling', 'parent'],
          alphabetize: { order: 'asc' },
        },
      ],

      // JSDoc: the syntax, names and tags TypeScript reads.
      'jsdoc/check-alignment': 'error',
      'jsdoc/check-param-names': ['error', { checkDestructured: false }],
      'jsdoc/check-property-names': 'error',
      'jsdoc/check-tag-names': 'error',
      'jsdoc/empty-tags': 'error',
      'jsdoc/implements-on-classes': 'error',
      'jsdoc/multiline-blocks': 'error',
      'jsdoc/no-multi-asterisks': 'error',
      // The types exist (and the imports used by the JSDoc only are used). The globals of TypeScript and Node.js:
      'jsdoc/no-undefined-types': [
        'error',
        {
          definedTypes: ['ArrayBufferView', 'ArrayLike', 'AsyncIterable', 'Generator', 'IterableIterator', 'NodeJS'],
        },
      ],
      'jsdoc/require-param-name': 'error',
      'jsdoc/require-property-name': 'error',
      'jsdoc/valid-types': 'error',
    },
  },

  {
    // The tools of the repository: they run on the Node.js versions of the CI, and test/ has a package.json.
    files: ['test/**/*.js', 'build.js', 'build_docs.js', 'build_typings.js', 'eslint.config.cjs'],
    settings: { node: { version: '>=22.3.0' } },
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        { devDependencies: true, packageDir: [__dirname, path.join(__dirname, 'test')] },
      ],
      'n/no-unpublished-import': 'off',
      'n/no-unpublished-require': 'off',
      // The fakes of the tests have methods which do nothing.
      'no-empty-function': ['error', { allow: ['arrowFunctions', 'asyncMethods', 'methods', 'setters'] }],
    },
  },

  {
    // Each example is a script with its package.json, and runs with the SDK of the repository (npm link, or
    // "file:../.."): it may exit the process, and have a shebang.
    files: ['examples/**/*.js'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'n/hashbang': 'off',
      'n/no-missing-require': 'off',
      'n/no-process-exit': 'off',
      'n/no-unpublished-require': 'off',
    },
  },

  prettierRecommended,

  {
    // After eslint-config-prettier, which turns them off: they do not conflict with the format of Prettier.
    rules: {
      curly: ['error', 'multi-line', 'consistent'],
      'max-len': [
        'error',
        {
          code: 120,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          // The JSDoc imports of types cannot be wrapped.
          ignorePattern: String.raw`^\s*\* @typedef \{import\(`,
        },
      ],
      'arrow-body-style': 'error',
      'prefer-arrow-callback': 'error',
    },
  },
]);

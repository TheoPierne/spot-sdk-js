/**
 * @file For clients to delegate saving of tokens: token storage separate from token management.
 */

'use strict';

const {
  readFileSync,
  unlinkSync,
  readdirSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  chmodSync,
  copyFileSync,
} = require('node:fs');
const { homedir, constants } = require('node:os');
const { basename, dirname, extname, join } = require('node:path');
const process = require('node:process');

const tmp = require('tmp');

const { BosdynError } = require('./exceptions');

/** General class of errors to handle non-response non-grpc errors. */
// An error of the SDK, like Python (Error of bosdyn.client.exceptions).
class TokenCacheError extends BosdynError {}
/** Failed to delete the token from storage. */
class ClearFailedError extends TokenCacheError {}
/** Failed to read the token from cache. */
class NotInCacheError extends TokenCacheError {}
/** Failed to write the token to storage. */
class WriteFailedError extends TokenCacheError {}

function atomicFileWrite(data, filename, permissions = 0o600) {
  const temp = tmp.fileSync({ mode: permissions });
  writeFileSync(temp.name, data);

  const originalUmask = process.umask(0);

  try {
    const directory = dirname(filename);
    if (!existsSync(directory)) {
      mkdirSync(directory, { mode: 0o700, recursive: true });
    }
  } catch (e) {
    console.error(e);
  }

  process.umask(originalUmask);

  try {
    copyFileSync(temp.name, filename);
  } catch (e) {
    if (e.errno !== constants.errno.EEXIST) {
      throw e;
    }
    unlinkSync(filename);
    copyFileSync(temp.name, filename);
  }

  temp.removeCallback();
  chmodSync(filename, permissions);
}

/**
 * No-op default cache that serves as an interface.
 */
/* eslint-disable */
class TokenCache {
  constructor() {
    // Pass
  }

  read(name) {
    throw new NotInCacheError();
  }

  clear(name) {
    // Pass
  }

  write(name, token) {
    // Pass
  }

  /**
   * Returns a set of valid keys that contains the name.
   */
  match(name) {
    return [];
  }
}
/* eslint-enable */

/**
 * Handles transfer from in memory tokens to arbitrary storage e.g. filesystem.
 */
class TokenCacheFilesystem {
  /**
   * @param {string} [cacheDirectory='~/.bosdyn/user_tokens'] The cache's path. A leading ~ is the home directory, like
   * os.path.expanduser() in Python (it was a directory named ~; the ~user form is not supported).
   */
  constructor(cacheDirectory = '~/.bosdyn/user_tokens') {
    const expanded = /^~(?=$|[\\/])/.test(cacheDirectory) ? homedir() + cacheDirectory.slice(1) : cacheDirectory;
    this.directory = join(expanded);
  }

  /**
   * @param {string} name The file's name.
   * @returns {string|Buffer} The content of the file.
   * @throws {NotInCacheError}
   */
  read(name) {
    const filename = this._nameToFilename(name);
    try {
      const data = readFileSync(filename, 'utf8');
      return data;
    } catch (err) {
      throw new NotInCacheError(err);
    }
  }

  /**
   * @param {string} name The file's name.
   * @returns {void}
   * @throws {ClearFailedError}
   */
  clear(name) {
    const filename = this._nameToFilename(name);
    try {
      unlinkSync(filename);
    } catch (err) {
      throw new ClearFailedError(err);
    }
  }

  /**
   * @param {string} name The file's name.
   * @param {string} token The token to write in the file.
   * @returns {void}
   * @throws {WriteFailedError}
   */
  write(name, token) {
    const filename = this._nameToFilename(name);
    try {
      atomicFileWrite(token, filename);
    } catch (err) {
      throw new WriteFailedError(err);
    }
  }

  /**
   * Returns a set of valid keys that contains the name.
   * @param {string} name The file's name to match.
   * @returns {Array<string>|Array}
   */
  match(name) {
    const matchingTokens = [];
    readdirSync(this.directory).forEach(e => {
      if (e === name || e.includes(name)) {
        matchingTokens.push(this._filenameToName(e));
      }
    });
    return matchingTokens;
  }

  /**
   * @param {string} name The file's name.
   * @returns {string}
   * @private
   */
  _nameToFilename(name) {
    return `${join(this.directory, name)}.jwt`;
  }

  /**
   * @param {string} filename The complete file's name.
   * @returns {string}
   * @private
   */
  _filenameToName(filename) {
    // Without the extension only, like os.path.splitext() in Python: '<serial>.<username>.jwt' was cut at the first
    // dot (the serial number).
    return basename(filename, extname(filename));
  }
}

module.exports = {
  TokenCache,
  TokenCacheFilesystem,
  TokenCacheError,
  ClearFailedError,
  NotInCacheError,
  WriteFailedError,
};

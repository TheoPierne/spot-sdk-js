'use strict';

const assert = require('node:assert');
const { Buffer } = require('node:buffer');
const process = require('node:process');
const test = require('node:test');

const { TokenCache, TokenCacheFilesystem, NotInCacheError, ClearFailedError } = require('../bosdyn-client/token_cache');

/**
 * Get a token cache file system instance
 * @returns {TokenCacheFilesystem}
 */
function _get_token_cache_filesystem() {
  if ('TEST_TMPDIR' in process.env) {
    return new TokenCacheFilesystem(process.env.TEST_TMPDIR);
  }
  return new TokenCacheFilesystem();
}

test('test_no_op_cache', () => {
  const tc = new TokenCache();
  assert.throws(() => tc.read('nonexistent'), NotInCacheError);

  assert.strictEqual(tc.match('').length, 0);
});

test('test_read_empty_cache', () => {
  const tc = _get_token_cache_filesystem();
  assert.throws(() => tc.read('nonexistent'), NotInCacheError);
});

test('test_read_one_entry_cache', () => {
  const tc = _get_token_cache_filesystem();
  tc.write('base_user1', Buffer.from('100'));

  assert.throws(() => tc.read('user_bad'), NotInCacheError);

  assert.equal(Buffer.from('100'), tc.read('base_user1'));
});

test('test_read_two_entries_cache', () => {
  const tc = _get_token_cache_filesystem();
  tc.write('base_user2', Buffer.from('200'));
  tc.write('base_user1', Buffer.from('100'));

  assert.throws(() => tc.read('user_bad'), NotInCacheError);

  assert.equal(Buffer.from('100'), tc.read('base_user1'));
});

test('test_matching', () => {
  const tc = _get_token_cache_filesystem();
  tc.write('base_user2', Buffer.from('200'));
  tc.write('base_user1', Buffer.from('100'));

  const matches = tc.match('base_user');
  assert.strictEqual(2, matches.filter(match => ['base_user1', 'base_user2'].includes(match)).length);
});

test('test_no_matches', () => {
  const tc = _get_token_cache_filesystem();
  tc.write('base_user2', Buffer.from('200'));
  tc.write('base_user1', Buffer.from('100'));

  const matches = tc.match('username');
  assert.strictEqual(0, matches.length);
});

test('test_clearing_existing_tokens', () => {
  const tc = _get_token_cache_filesystem();
  tc.write('base_user2', Buffer.from('200'));
  tc.write('base_user1', Buffer.from('100'));

  tc.clear('base_user1');
  tc.clear('base_user2');

  const matches = tc.match('base_user');
  assert.strictEqual(0, matches.length);
});

test('test_clearing_nonexisting_tokens', () => {
  const tc = _get_token_cache_filesystem();

  assert.throws(() => tc.clear('user_bad'), ClearFailedError);
});

/**
 * @file An event for the background tasks of the SDK, like threading.Event in Python.
 */

'use strict';

const { clearTimeout, setTimeout } = require('node:timers');

// Timers longer than this fire at once (Node sets their delay to 1 ms).
const _MAX_TIMEOUT_MS = 2 ** 31 - 1;

/**
 * Python's threading.Event, for the background tasks of the SDK.
 *
 * set() wakes up the pending wait() calls and makes the next ones return at once, until clear().
 * A wait() that times out leaves nothing behind: no listener, no timer.
 */
class Event {
  constructor() {
    /**
     * @type {boolean}
     * @private
     */
    this._flag = false;

    /**
     * Wake-up functions of the pending wait() calls.
     * @type {Set<function(boolean): void>}
     * @private
     */
    this._waiters = new Set();
  }

  /**
   * Set the flag and wake up every pending wait().
   * @returns {void}
   */
  set() {
    this._flag = true;
    const waiters = [...this._waiters];
    this._waiters.clear();
    for (const wake of waiters) wake(true);
  }

  /**
   * @returns {boolean} True if the flag is set.
   */
  isSet() {
    return this._flag;
  }

  /**
   * Reset the flag: the next wait() calls block until set() is called again.
   * @returns {void}
   */
  clear() {
    this._flag = false;
  }

  /**
   * Wait until the flag is set, or until the timeout.
   * @param {?number} [timeoutMs=null] Maximum time to wait, in milliseconds. null waits until set().
   * @param {Object} [options]
   * @param {boolean} [options.ref=true] False for a wait that does not keep the process alive, like the
   * wait of a Python daemon thread.
   * @returns {Promise<boolean>} True if the flag is set, false if the wait timed out (like Python).
   */
  wait(timeoutMs = null, { ref = true } = {}) {
    if (this._flag) return Promise.resolve(true);
    return new Promise(resolve => {
      let timer = null;
      const wake = value => {
        if (timer !== null) clearTimeout(timer);
        this._waiters.delete(wake);
        resolve(value);
      };
      this._waiters.add(wake);
      if (timeoutMs !== null && timeoutMs !== undefined && timeoutMs !== Infinity) {
        timer = setTimeout(() => wake(this._flag), Math.min(Math.max(0, timeoutMs), _MAX_TIMEOUT_MS) || 0);
        if (!ref) timer.unref();
      }
    });
  }
}

module.exports = {
  Event,
};

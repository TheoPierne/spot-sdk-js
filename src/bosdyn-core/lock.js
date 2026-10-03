/**
 * @file A lock for asynchronous code, like threading.Lock in Python.
 */

'use strict';

/**
 * Python's threading.Lock, for asynchronous code: run(fn) calls fn once the previous calls are done.
 */
class Lock {
  constructor() {
    this._tail = Promise.resolve();
  }

  /**
   * Runs a function holding the lock, like `with lock:` in Python.
   * @template T
   * @param {function(): (T|Promise<T>)} fn
   * @returns {Promise<T>}
   */
  run(fn) {
    const result = this._tail.then(() => fn());
    this._tail = result.catch(() => undefined);
    return result;
  }
}

module.exports = {
  Lock,
};

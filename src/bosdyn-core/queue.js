/**
 * @file A FIFO queue, like queue.Queue in Python without the blocking calls.
 */

'use strict';

/**
 * Raised when an element is pushed to a full queue, like queue.Full in Python.
 */
class QueueFullError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}

/**
 * A FIFO queue, like Python's queue.Queue without the blocking calls.
 */
class Queue extends Array {
  // The methods of Array (map, filter, slice...) return plain arrays, not queues.
  static get [Symbol.species]() {
    return Array;
  }

  /**
   * @param {{maxSize?: number}} [options] The maximum number of elements: 0 or less for no limit, like the maxsize
   * of Python (new Queue() threw, and a maxSize of 0 kept the queue always empty).
   */
  constructor({ maxSize = 0 } = {}) {
    super();
    this.maxSize = maxSize > 0 ? maxSize : Infinity;
  }

  /**
   * Add elements, like put_nowait() in Python.
   * @param {...*} values
   * @returns {number} The new length of the queue, like Array.prototype.push.
   * @throws {QueueFullError} The queue is full (the element was silently dropped).
   */
  push(...values) {
    for (const value of values) {
      if (this.length >= this.maxSize) {
        throw new QueueFullError(`The queue is full (${this.maxSize} elements)`);
      }
      super.push(value);
    }
    return this.length;
  }

  get() {
    return this.shift();
  }

  shift() {
    return super.shift();
  }

  full() {
    return this.length === this.maxSize;
  }

  empty() {
    return this.length === 0;
  }
}

module.exports = {
  Queue,
  QueueFullError,
};

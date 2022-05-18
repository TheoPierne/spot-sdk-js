'use strict';

class Queue extends Array {
  constructor({ maxSize = 2 ** 32 - 1 }) {
    super();
    this.maxSize = maxSize;
  }

  push(value) {
    if (this.length < this.maxSize) {
      super.push(value);
    }
    return this;
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
};

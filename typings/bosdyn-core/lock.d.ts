/**
 * Python's threading.Lock, for asynchronous code: run(fn) calls fn once the previous calls are done.
 */
export class Lock {
    _tail: Promise<void>;
    /**
     * Runs a function holding the lock, like `with lock:` in Python.
     * @template T
     * @param {function(): (T|Promise<T>)} fn
     * @returns {Promise<T>}
     */
    run<T>(fn: () => (T | Promise<T>)): Promise<T>;
}

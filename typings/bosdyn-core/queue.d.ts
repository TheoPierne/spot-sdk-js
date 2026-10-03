/**
 * A FIFO queue, like Python's queue.Queue without the blocking calls.
 */
export class Queue extends Array<any> {
    /**
     * @param {{maxSize?: number}} [options] The maximum number of elements: 0 or less for no limit, like the maxsize
     * of Python (new Queue() threw, and a maxSize of 0 kept the queue always empty).
     */
    constructor({ maxSize }?: {
        maxSize?: number;
    });
    maxSize: number;
    get(): any;
    full(): boolean;
    empty(): boolean;
}
/**
 * Raised when an element is pushed to a full queue, like queue.Full in Python.
 */
export class QueueFullError extends Error {
    constructor(msg: any);
}

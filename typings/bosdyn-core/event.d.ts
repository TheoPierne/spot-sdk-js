/**
 * Python's threading.Event, for the background tasks of the SDK.
 *
 * set() wakes up the pending wait() calls and makes the next ones return at once, until clear().
 * A wait() that times out leaves nothing behind: no listener, no timer.
 */
export class Event {
    /**
     * @type {boolean}
     * @private
     */
    private _flag;
    /**
     * Wake-up functions of the pending wait() calls.
     * @type {Set<function(boolean): void>}
     * @private
     */
    private _waiters;
    /**
     * Set the flag and wake up every pending wait().
     * @returns {void}
     */
    set(): void;
    /**
     * @returns {boolean} True if the flag is set.
     */
    isSet(): boolean;
    /**
     * Reset the flag: the next wait() calls block until set() is called again.
     * @returns {void}
     */
    clear(): void;
    /**
     * Wait until the flag is set, or until the timeout.
     * @param {?number} [timeoutMs=null] Maximum time to wait, in milliseconds. null waits until set().
     * @param {Object} [options]
     * @param {boolean} [options.ref=true] False for a wait that does not keep the process alive, like the
     * wait of a Python daemon thread.
     * @returns {Promise<boolean>} True if the flag is set, false if the wait timed out (like Python).
     */
    wait(timeoutMs?: number | null, { ref }?: {
        ref?: boolean | undefined;
    }): Promise<boolean>;
}

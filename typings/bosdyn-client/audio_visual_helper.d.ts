/**
 * Runs an AV behavior between start() and exit(), like the AudioVisualHelper context manager of Python (disposing of it
 * with await using also stops the behavior).
 */
export class AudioVisualHelper {
    constructor(robot: any, behaviorName: any, refreshRate: any, logger?: null);
    /**
     * @type {import('./robot').Robot}
     */
    robot: import("./robot").Robot;
    behaviorName: any;
    refreshRate: any;
    /**
     * @type {AudioVisualClient|null}
     */
    avClient: AudioVisualClient | null;
    _loopAbort: AbortController | null;
    _loopPromise: Promise<void> | null;
    _behaviorRunning: any;
    logger: Console;
    /**
     * Starts the background loop. Resolves once the **first** runBehavior returns, or rejects
     * on the **first** terminal error (like DoesNotExist or PersistentRpcError).
     * If the AV client can’t be created or hardware is missing, resolves `false`.
     * The loop may keep running even if this Promise rejects (mirrors Python’s behavior on some errors).
     * @returns {Promise<boolean>}
     */
    start(): Promise<boolean>;
    /**
     * Stop the loop; attempts to stop the behavior. Safe to call multiple times.
     */
    exit(): Promise<void>;
    isAlive(): boolean | null;
    _runBehaviorLoop(signal: any, settleOk: any, settleErr: any): Promise<void>;
    _sleep(ms: any, signal: any): Promise<undefined>;
    [Symbol.asyncDispose](): Promise<void>;
}
import { AudioVisualClient } from "./audio_visual";

export type Robot = import("./robot").Robot;
/**
 * Refreshes the user token in the robot object.
 * The refresh policy assumes the token is minted and then the manager is launched.
 */
export class TokenManager {
    /**
     * Create an instance of TokenManager's class.
     * @param {Robot} robot Robot object.
     * @param {Date|number|null} [timestamp=null] Initial token timestamp.
     * @param {number} [refreshInterval]
     * @param {number} [initialRetryInterval]
     */
    constructor(robot: Robot, timestamp?: Date | number | null, refreshInterval?: number, initialRetryInterval?: number);
    /**
     * @type {import('./robot').Robot}
     */
    robot: import("./robot").Robot;
    _lastTimestamp: number;
    _refreshInterval: number;
    _initialRetryInterval: number;
    _retryInterval: number;
    /** @type {NodeJS.Timeout|null} */
    _timer: NodeJS.Timeout | null;
    _isAlive: boolean;
    _isUpdating: boolean;
    isAlive(): boolean;
    stop(): void;
    /**
     * Refresh the user token as needed.
     */
    update(): void;
    /**
     * @param {number} waitTimeMs
     * @private
     */
    private _schedule;
    /**
     * @private
     */
    private _refresh;
}
export const USER_TOKEN_REFRESH_TIME_DELTA: number;
export const USER_TOKEN_RETRY_INTERVAL_START: 1000;

/** Manages a set of tasks which work by periodically calling an update() method. */
export class AsyncTasks {
    /**
     * @param {?AsyncGRPCTask[]} [tasks=null] List of tasks to manage.
     */
    constructor(tasks?: AsyncGRPCTask[] | null);
    _tasks: AsyncGRPCTask[];
    /**
     * Add a task to be managed by this object.
     * @param {AsyncGRPCTask} task
     */
    addTask(task: AsyncGRPCTask): void;
    /** Call this periodically to manage execution of tasks owned by this object. */
    update(): void;
}
/**
 * Task to be accomplished using asynchronous gRPC calls: when it is time to run the task, a query returns a promise,
 * which is monitored by update() for completion, and then an action is taken in response.
 * @abstract
 */
export class AsyncGRPCTask {
    _lastCall: number;
    _future: Promise<any> | null;
    _outcome: {
        result: any;
        error?: undefined;
    } | {
        error: any;
        result?: undefined;
    } | null;
    /**
     * Override to start the asynchronous query.
     * @abstract
     * @returns {Promise<*>} The result of the query.
     */
    _startQuery(): Promise<any>;
    /**
     * Called by update() when no query is running to determine whether to start a new query.
     * @abstract
     * @param {number} now Time now in seconds.
     * @returns {boolean} true when a new query should be started.
     */
    _shouldQuery(now: number): boolean;
    /**
     * Override to handle the result of the query when it is available.
     * @abstract
     * @param {*} result
     */
    _handleResult(result: any): void;
    /**
     * Override to handle an error of the SDK (RpcError or ResponseError) of the query or of the handling of its result.
     * @abstract
     * @param {Error} exception
     */
    _handleError(exception: Error): void;
    /**
     * Call this periodically to manage execution of task represented by this object. Another error than an error of the
     * SDK is thrown, like Python, by this update and the next ones.
     */
    update(): void;
}
/**
 * Periodic task to be accomplished using asynchronous gRPC calls.
 * @abstract
 */
export class AsyncPeriodicGRPCTask extends AsyncGRPCTask {
    /**
     * @param {number} periodSec Time to wait in seconds between queries.
     */
    constructor(periodSec: number);
    _periodSec: number;
}
/**
 * Query for robot data at some regular interval.
 * @abstract
 */
export class AsyncPeriodicQuery extends AsyncPeriodicGRPCTask {
    /**
     * @param {string} queryName Name of the query.
     * @param {Object} client SDK client for the query.
     * @param {?Object} logger Logger to use for logging errors.
     * @param {number} periodSec Time in seconds between running the query.
     */
    constructor(queryName: string, client: Object, logger: Object | null, periodSec: number);
    _queryName: string;
    _client: Object;
    _logger: Object;
    _proto: any;
    /** @returns {*} The latest response proto. */
    get proto(): any;
    _handleResult(result: any): void;
    _handleError(exception: any): void;
}

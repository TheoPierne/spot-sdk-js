/**
 * @file Utilities for managing periodic tasks consisting of asynchronous GRPC calls.
 */

'use strict';

/**
 * Utilities for managing periodic tasks consisting of asynchronous gRPC calls, like bosdyn.client.async_tasks of
 * Python (it was missing): update() is called periodically (e.g. by the loop of an application); a task starts a query
 * when it should, and handles its result in a later update(), once its promise is settled.
 *
 * The update() of Python 5.1.4 always raises an UnboundLocalError (`now_sec = now_sec()` in the method): the tasks
 * work here like in the previous versions of Python.
 */

const { ResponseError, RpcError } = require('./exceptions');
const { LoggerUtil } = require('./logger_util');
const { nowSec } = require('../bosdyn-core/util');

/** Manages a set of tasks which work by periodically calling an update() method. */
class AsyncTasks {
  /**
   * @param {?AsyncGRPCTask[]} [tasks=null] List of tasks to manage.
   */
  constructor(tasks = null) {
    this._tasks = tasks && tasks.length ? tasks : [];
  }

  /**
   * Add a task to be managed by this object.
   * @param {AsyncGRPCTask} task
   */
  addTask(task) {
    this._tasks.push(task);
  }

  /** Call this periodically to manage execution of tasks owned by this object. */
  update() {
    for (const task of this._tasks) task.update();
  }
}

/**
 * Task to be accomplished using asynchronous gRPC calls: when it is time to run the task, a query returns a promise,
 * which is monitored by update() for completion, and then an action is taken in response.
 * @abstract
 */
class AsyncGRPCTask {
  constructor() {
    this._lastCall = 0;
    this._future = null;
    // The result or the error of the promise, once it is settled.
    this._outcome = null;
  }

  /**
   * Override to start the asynchronous query.
   * @abstract
   * @returns {Promise<*>} The result of the query.
   */
  _startQuery() {
    throw new Error(`${this.constructor.name} does not implement _startQuery()`);
  }

  /**
   * Called by update() when no query is running to determine whether to start a new query.
   * @abstract
   * @param {number} now Time now in seconds.
   * @returns {boolean} true when a new query should be started.
   */
  // eslint-disable-next-line no-unused-vars
  _shouldQuery(now) {
    throw new Error(`${this.constructor.name} does not implement _shouldQuery()`);
  }

  /**
   * Override to handle the result of the query when it is available.
   * @abstract
   * @param {*} result
   */
  // eslint-disable-next-line no-unused-vars
  _handleResult(result) {
    throw new Error(`${this.constructor.name} does not implement _handleResult()`);
  }

  /**
   * Override to handle an error of the SDK (RpcError or ResponseError) of the query or of the handling of its result.
   * @abstract
   * @param {Error} exception
   */
  // eslint-disable-next-line no-unused-vars
  _handleError(exception) {
    throw new Error(`${this.constructor.name} does not implement _handleError()`);
  }

  /**
   * Call this periodically to manage execution of task represented by this object. Another error than an error of the
   * SDK is thrown, like Python, by this update and the next ones.
   */
  update() {
    const now = nowSec();
    if (this._future !== null) {
      if (this._outcome !== null) {
        try {
          if ('error' in this._outcome) throw this._outcome.error;
          this._handleResult(this._outcome.result);
        } catch (err) {
          if (!(err instanceof RpcError || err instanceof ResponseError)) throw err;
          this._handleError(err);
        }
        this._future = null;
        this._outcome = null;
      }
    } else if (this._shouldQuery(now)) {
      this._lastCall = now;
      this._outcome = null;
      const future = Promise.resolve(this._startQuery());
      this._future = future;
      future.then(
        result => {
          if (this._future === future) this._outcome = { result };
        },
        error => {
          if (this._future === future) this._outcome = { error };
        },
      );
    }
  }
}

/**
 * Periodic task to be accomplished using asynchronous gRPC calls.
 * @abstract
 */
class AsyncPeriodicGRPCTask extends AsyncGRPCTask {
  /**
   * @param {number} periodSec Time to wait in seconds between queries.
   */
  constructor(periodSec) {
    super();
    this._periodSec = periodSec;
  }

  /**
   * Check if it is time to query again.
   * @param {number} now Time now in seconds.
   * @returns {boolean}
   */
  _shouldQuery(now) {
    return now - this._lastCall > this._periodSec;
  }
}

/**
 * Query for robot data at some regular interval.
 * @abstract
 */
class AsyncPeriodicQuery extends AsyncPeriodicGRPCTask {
  /**
   * @param {string} queryName Name of the query.
   * @param {Object} client SDK client for the query.
   * @param {?Object} logger Logger to use for logging errors.
   * @param {number} periodSec Time in seconds between running the query.
   */
  constructor(queryName, client, logger, periodSec) {
    super(periodSec);
    this._queryName = queryName;
    this._client = client;
    this._logger = logger ?? LoggerUtil.getLogger('async_tasks');
    this._proto = null;
  }

  /** @returns {*} The latest response proto. */
  get proto() {
    return this._proto;
  }

  _handleResult(result) {
    this._proto = result;
  }

  _handleError(exception) {
    this._logger.error(`Failure getting ${this._queryName}: ${exception}`);
  }
}

module.exports = {
  AsyncTasks,
  AsyncGRPCTask,
  AsyncPeriodicGRPCTask,
  AsyncPeriodicQuery,
};

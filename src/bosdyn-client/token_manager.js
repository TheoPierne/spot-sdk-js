/**
 * @file For clients to automate token refresh.
 */

'use strict';

const { setTimeout, clearTimeout } = require('node:timers');

const { InvalidTokenError } = require('./auth');
const { ErrorCallbackResult } = require('./error_callback_result');
const { ResponseError, RpcError, TimedOutError } = require('./exceptions');
const { LoggerUtil } = require('./logger_util');
const { WriteFailedError } = require('./token_cache');

/**
 * @typedef {import('./robot').Robot} Robot
 */

const LOGGER = LoggerUtil.getLogger('TokenManager');

const USER_TOKEN_REFRESH_TIME_DELTA = 60 * 60 * 1000;
const USER_TOKEN_RETRY_INTERVAL_START = 1000;

/**
 * Refreshes the user token in the robot object.
 * The refresh policy assumes the token is minted and then the manager is launched.
 */
class TokenManager {
  /**
   * Create an instance of TokenManager's class.
   * @param {Robot} robot Robot object.
   * @param {Date|number|null} [timestamp=null] Initial token timestamp.
   * @param {number} [refreshInterval]
   * @param {number} [initialRetryInterval]
   */
  constructor(
    robot,
    timestamp = null,
    refreshInterval = USER_TOKEN_REFRESH_TIME_DELTA,
    initialRetryInterval = USER_TOKEN_RETRY_INTERVAL_START,
  ) {
    /**
     * @type {import('./robot').Robot}
     */
    this.robot = robot;
    this._lastTimestamp =
      timestamp instanceof Date ? timestamp.getTime() : timestamp === null ? Date.now() : Number(timestamp);

    this._refreshInterval = refreshInterval;
    this._initialRetryInterval = initialRetryInterval;
    this._retryInterval = initialRetryInterval;

    /** @type {NodeJS.Timeout|null} */
    this._timer = null;

    this._isAlive = true;
    this._isUpdating = false;

    this.update();
  }

  isAlive() {
    return this._isAlive;
  }

  stop() {
    this._isAlive = false;

    if (this._timer !== null) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  }

  /**
   * Refresh the user token as needed.
   */
  update() {
    if (!this._isAlive || this._isUpdating || this._timer !== null) {
      return;
    }

    const elapsed = Date.now() - this._lastTimestamp;

    this._schedule(Math.min(this._refreshInterval - elapsed, this._refreshInterval));
  }

  /**
   * @param {number} waitTimeMs
   * @private
   */
  _schedule(waitTimeMs) {
    if (!this._isAlive) {
      return;
    }

    this._timer = setTimeout(
      () => {
        this._timer = null;
        // A rejection here would be unhandled and would kill the process, keepalives included.
        this._refresh().catch(err => {
          LOGGER.error('Unexpected error in token refresh loop.', err);
          this._isAlive = false;
          this._isUpdating = false;
        });
      },
      Math.max(0, waitTimeMs),
    );

    // Le timer ne doit pas maintenir seul le processus Node.js actif.
    this._timer.unref?.();
  }

  /**
   * @private
   */
  async _refresh() {
    if (!this._isAlive || this._isUpdating) {
      return;
    }

    this._isUpdating = true;

    const startTime = Date.now();
    let action = ErrorCallbackResult.RESUME_NORMAL_OPERATION;

    try {
      await this.robot.authenticateWithToken(this.robot.userToken);
      this._lastTimestamp = Date.now();
    } catch (err) {
      if (err instanceof WriteFailedError) {
        LOGGER.error('Failed to save the token to the cache. Continuing without caching.', err);
      } else if (err instanceof InvalidTokenError || err instanceof ResponseError || err instanceof RpcError) {
        LOGGER.error('Error refreshing the token.', err);

        action = ErrorCallbackResult.RETRY_WITH_EXPONENTIAL_BACK_OFF;

        if (this.robot.tokenRefreshErrorCallback && !(err instanceof TimedOutError)) {
          try {
            action = await this.robot.tokenRefreshErrorCallback(err);
          } catch (callbackError) {
            LOGGER.error('Exception thrown in the provided token refresh error callback.', callbackError);
          }
        }

        if (action === ErrorCallbackResult.RESUME_NORMAL_OPERATION) {
          LOGGER.warn(`Refreshing token in ${this._refreshInterval / 1000} seconds.`);
        }
      } else {
        LOGGER.error('Unexpected error in token refresh loop.', err);

        this._isAlive = false;
        this._isUpdating = false;
        return;
      }
    }

    const elapsed = Date.now() - startTime;

    this._isUpdating = false;

    if (!this._isAlive) {
      return;
    }

    if (action === ErrorCallbackResult.ABORT) {
      LOGGER.warn('Application-supplied callback directed the token refresh loop to exit.');

      this._isAlive = false;
      return;
    }

    if (action === ErrorCallbackResult.RETRY_IMMEDIATELY) {
      LOGGER.warn('Retrying to refresh token immediately.');

      this._schedule(0);
      return;
    }

    if (action === ErrorCallbackResult.RESUME_NORMAL_OPERATION) {
      this._retryInterval = this._initialRetryInterval;
      this._schedule(this._refreshInterval - elapsed);
      return;
    }

    LOGGER.warn(`Retrying token refresh in ${this._retryInterval / 1000} seconds.`);

    const currentRetryInterval = this._retryInterval;

    this._retryInterval = Math.min(currentRetryInterval * 2, this._refreshInterval);

    this._schedule(currentRetryInterval - elapsed);
  }
}

module.exports = {
  TokenManager,
  USER_TOKEN_REFRESH_TIME_DELTA,
  USER_TOKEN_RETRY_INTERVAL_START,
};

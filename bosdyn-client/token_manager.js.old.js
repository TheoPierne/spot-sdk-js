'use strict';

const { setImmediate, clearImmediate } = require('node:timers');
const { setTimeout: sleep } = require('node:timers/promises');

const { InvalidTokenError } = require('./auth');
const { ResponseError, RpcError } = require('./exceptions');
const { WriteFailedError } = require('./token_cache');

/**
 * Refreshes the user token in the robot object.
 * The refresh policy assumes the token is minted and then the manager is launched.
 * @class TokenManager
 */
class TokenManager {
  /**
   * Create an instance of TokenManager's class.
   * @param {Object} robot Robot object.
   * @param {number} [timestamp=null] The date in timestamp to use.
   */
  constructor(robot, timestamp = null) {
    this.robot = robot;
    this._last_timestamp = timestamp || Date.now();

    this._loopStart = true;
    this._loop = setImmediate(this.update.bind(this)).unref();
  }

  is_alive() {
    return this._loopStart;
  }

  stop() {
    clearImmediate(this._loop);
    this._loopStart = false;
  }

  /**
   * Refresh the user token as needed.
   */
  async update() {
    const USER_TOKEN_REFRESH_TIME_DELTA = 3_600;
    const USER_TOKEN_RETRY_INTERVAL_START = 1_000;

    let retry_interval = USER_TOKEN_RETRY_INTERVAL_START;
    /* eslint-disable no-await-in-loop */
    while (this._loopStart) {
      let elapsed_time = Date.now() - this._last_timestamp;
      if (elapsed_time >= USER_TOKEN_REFRESH_TIME_DELTA) {
        try {
          await this.robot.authenticate_with_token(this.robot.user_token);
        } catch (e) {
          if (e instanceof WriteFailedError) {
            console.error('[TokenManager] Failed to save the token to the cache. Continuing without caching.');
          } else if (e instanceof InvalidTokenError || e instanceof ResponseError || e instanceof RpcError) {
            console.error(`[TokenManager] Error refreshing the token. Retry in ${retry_interval}`);
            await sleep(retry_interval);
            retry_interval = Math.min(2 * retry_interval, USER_TOKEN_REFRESH_TIME_DELTA);
            continue;
          }
        }

        retry_interval = USER_TOKEN_RETRY_INTERVAL_START;
        this._last_timestamp = Date.now();
        elapsed_time = USER_TOKEN_REFRESH_TIME_DELTA;
      }
      await sleep(elapsed_time);
    }
    /* eslint-enable no-await-in-loop */
    console.debug(`[TokenManager] Shutting down monitoring of token belonging to robot ${this.robot.address}`);
  }
}

module.exports = {
  TokenManager,
};

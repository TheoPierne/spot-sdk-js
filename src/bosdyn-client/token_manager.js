'use strict';

const { setTimeout, clearTimeout } = require('node:timers');
const { Duration, DateTime } = require('luxon');

const { InvalidTokenError } = require('./auth');
const { ResponseError, RpcError } = require('./exceptions');
const { LoggerUtil } = require('./loggerUtil');
const { WriteFailedError } = require('./token_cache');

const LOGGER = LoggerUtil.getLogger('TokenManager');

/**
 * Refreshes the user token in the robot object.
 * The refresh policy assumes the token is minted and then the manager is launched.
 */
class TokenManager {
  /**
   * Create an instance of TokenManager's class.
   * @param {Robot} robot Robot object.
   * @param {number} [timestamp=null] The date in timestamp to use.
   */
  constructor(robot, timestamp = null) {
    this.robot = robot;
    this._lastTimestamp = timestamp || DateTime.now();

    this._exitTimer = null;
    this._isAlive = true;

    this.update();
  }

  _exitCallback() {
    clearTimeout(this._exitTimer);
    this._exitTimer = null;
  }

  isAlive() {
    return this._isAlive;
  }

  stop() {
    this._exitCallback();
    this._isAlive = false;
  }

  /**
   * Refresh the user token as needed.
   */
  update() {
    const USER_TOKEN_REFRESH_TIME_DELTA = Duration.fromObject({ hours: 1 });
    const USER_TOKEN_RETRY_INTERVAL_START = Duration.fromObject({ seconds: 1 });

    let retryInterval = USER_TOKEN_RETRY_INTERVAL_START;

    const updateToken = async () => {
      const elapsedTime = DateTime.now().diff(this._lastTimestamp);

      if (elapsedTime >= USER_TOKEN_REFRESH_TIME_DELTA) {
        try {
          await this.robot.authenticateWithToken(this.robot.userToken);
        } catch (err) {
          if (err instanceof WriteFailedError) {
            LOGGER.error('Failed to save the token to the cache. Continuing without caching.');
          } else if (err instanceof InvalidTokenError || err instanceof ResponseError || err instanceof RpcError) {
            LOGGER.error(`Error refreshing the token. Retry in ${retryInterval.as('seconds')} seconds`);
            this._exitTimer = setTimeout(updateToken, retryInterval.as('milliseconds'));
            retryInterval = Duration.fromMillis(
              Math.min(2 * retryInterval.as('milliseconds'), USER_TOKEN_REFRESH_TIME_DELTA.as('milliseconds')),
            );
            return;
          } else {
            LOGGER.error(err);
            return;
          }
        }

        retryInterval = USER_TOKEN_RETRY_INTERVAL_START;

        this._lastTimestamp = DateTime.now();
        const remainingTime = USER_TOKEN_REFRESH_TIME_DELTA.minus(elapsedTime);
        this._exitTimer = setTimeout(updateToken, remainingTime.as('milliseconds'));
      } else {
        const remainingTime = USER_TOKEN_REFRESH_TIME_DELTA.minus(elapsedTime);
        this._exitTimer = setTimeout(updateToken, remainingTime.as('milliseconds'));
      }
    };

    updateToken();
  }
}

module.exports = {
  TokenManager,
};

'use strict';

const { AudioVisual, BehaviorExpiredError, DoesNotExistError, InvalidClientError } = require('./audio_visual');
const { PersistentRpcError, RpcError } = require('./exceptions');

class AudioVisualHelper {
  constructor(robot, behaviorName, refreshRate, logger = null) {
    this.robot = robot;
    this.behaviorName = behaviorName;
    this.refreshRate = refreshRate;

    this.avClient = null;

    this._loopAbort = null;
    this._loopPromise = null;
    this._behaviorRunning = null;

    this.logger = logger || console;
  }

  /**
   * Starts the background loop. Resolves once the **first** runBehavior returns, or rejects
   * on the **first** terminal error (like DoesNotExist or PersistentRpcError).
   * If the AV client can’t be created or hardware is missing, resolves `false`.
   * The loop may keep running even if this Promise rejects (mirrors Python’s behavior on some errors).
   * @returns {Promise<boolean>}
   */
  async start() {
    try {
      this.avClient = await this.robot.ensureClient(AudioVisual.defaultServiceName);
    } catch (e) {
      this.logger.warn('Could not initialize AV client, skipping AudioVisualHelper.');
      return false;
    }

    // Hardware check
    try {
      const hw = await this.robot.getCachedHardwareHardwareConfiguration();
      if (!hw.getHasAudioVisualSystem()) return false;
    } catch (_) {
      // If the hardware check fails, behave conservatively
      return false;
    }

    // Start loop and return a Promise that settles on the first outcome.
    this._loopAbort = new AbortController();
    const signal = this._loopAbort.signal;

    return new Promise((resolve, reject) => {
      let firstSettled = false;
      const settleOk = (val) => { if (!firstSettled) { firstSettled = true; resolve(val); } };
      const settleErr = (err) => { if (!firstSettled) { firstSettled = true; reject(err); } };

      this._loopPromise = this._runBehaviorLoop(signal, settleOk, settleErr)
        .catch((err) => {
          if (!firstSettled) settleErr(err);
          else this.logger.error(`AV loop crashed: ${err?.stack || err}`);
        });
    });
  }

  /**
   * Stop the loop; attempts to stop the behavior. Safe to call multiple times.
   */
  async exit() {
    if (!this._loopAbort) return;
    this._loopAbort.abort();
    try {
      await this._loopPromise;
    } catch {
      // loop errors already handled via the first-settle logic
    } finally {
      this._loopAbort = null;
      this._loopPromise = null;
    }
  }

  async [Symbol.asyncDispose]() {
    await this.exit();
  }

  isAlive() {
    return this._loopAbort && !this._loopAbort.signal.aborted
  }

  async _runBehaviorLoop(signal, settleOk, settleErr) {
    while (!signal.aborted) {
      // Wait for refresh period
      try {
        await this._sleep(this.refreshRateSec * 1000, signal);
      } catch {
        break; // aborted during wait
      }

      const endTimeSecs = Date.now() / 1000 + this.refreshRateSec + 0.10; // +100ms margin

      try {
        const result = await this.avClient.runBehavior(this.behaviorName, endTimeSecs);
        settleOk(this._resultOk(result));
      } catch (exc) {
        if (exc instanceof DoesNotExistError) {
          settleErr(exc);
          this.logger.error(`Audio Visual Behavior ${this.behaviorName} does not exist.`);
          return; // stop trying; behavior doesn't exist
        } else if (exc instanceof BehaviorExpiredError) {
          settleErr(exc); // matches Python: set_exception but keep looping
          this.logger.warn('Behavior was expired when received by client.');
          // continue loop
        } else if (exc instanceof PersistentRpcError) {
          settleErr(exc);
          this.logger.error('Failed to run behavior. Quitting AudioVisualHelper.');
          return; // persistent failure: stop
        } else if (exc instanceof RpcError) {
          this.logger.error('Failed to run behavior. Retrying.');
          // transient: continue
        } else if (exc instanceof Error) {
          settleErr(exc);
          this.logger.error('Unknown exception caught, quitting AudioVisualHelper.');
          return;
        } else {
          // Unknown error: log and keep trying
          this.logger.error(`Unexpected error while running behavior: ${exc?.message || exc}`);
        }
      }
    }

    // Attempt to stop the behavior when leaving the loop
    try {
      await this.avClient.stopBehavior(this.behaviorName);
    } catch (exc) {
      if (exc instanceof InvalidClientError) {
        this.logger.warn('Failed to stop behavior, it may have been run by a different client.');
      } else {
        this.logger.warn(`stopBehavior raised: ${exc?.message || exc}`);
      }
    }
  }

  _sleep(ms, signal) {
    return new Promise((resolve, reject) => {
      if (signal.aborted) return reject(new Error('aborted'));
      const t = setTimeout(resolve, ms);
      const onAbort = () => {
        clearTimeout(t);
        reject(new Error('aborted'));
      };
      signal.addEventListener('abort', onAbort, { once: true });
    });
  }
}

module.exports = {
  AudioVisualHelper,
};

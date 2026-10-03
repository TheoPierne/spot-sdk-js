/**
 * @file Flashes the LEDs of the Spot CAM, like the LightsHelper context manager of Python.
 */

'use strict';

const { LightingClient } = require('./lighting');

const { Event } = require('../../bosdyn-core/event');
const { BosdynError, TimedOutError } = require('../exceptions');
const { LoggerUtil } = require('../logger_util');

const _LOGGER = LoggerUtil.getLogger('lights_helper');

/**
 * Flashes Spot CAM LEDs between start() and stop(), like the Python context manager:
 *
 *   const lights = new LightsHelper(frequency, brightness);
 *   await lights.init(robot);
 *   lights.start();
 *   // Lights will flash here
 *   await lights.stop();
 *   // Lights are off here.
 */
class LightsHelper {
  /**
   * @param  {number} frequency The frequency
   * @param  {number} brightness The brightness
   */
  constructor(frequency, brightness) {
    this.freq = frequency;
    this.brightness = brightness;
    /**
     * The flashing loop, while it runs.
     * @type {?Promise<void>}
     */
    this.thread = null;
    this.stopEvent = new Event();
  }

  async init(robot) {
    /** @type {LightingClient} */
    this.lightingClient = await robot.ensureClient(LightingClient.defaultServiceName);
  }

  /**
   * Start flashing the lights (Python's __enter__).
   * @returns {void}
   */
  start() {
    this.stopEvent.clear();
    // Already flashing, or stop() was called but the loop has not ended yet: keep it running.
    if (this.thread) return;
    this.thread = this.setLightsWithFreqAndBrightness(this.lightingClient, this.freq, this.brightness)
      .catch(e => {
        // Like Python, an error that is not an SDK error ends the loop. Log it: it would otherwise be an
        // unhandled rejection, which ends the Node process.
        _LOGGER.error(`Stopped flashing the lights: ${e?.stack ?? e}`);
        this.stopEvent.set();
      })
      .finally(() => {
        this.thread = null;
        // start() was called while the loop was ending: run it again.
        if (!this.stopEvent.isSet()) this.start();
      });
  }

  /**
   * Stop flashing the lights (Python's __exit__).
   * @returns {Promise<void>} Resolves once the loop has ended and the lights are off, like Python's join().
   */
  stop() {
    this.stopEvent.set();
    return this.thread ?? Promise.resolve();
  }

  async [Symbol.asyncDispose]() {
    await this.stop();
  }

  /**
   * Given the threading event, lighting client, desired light frequency and brightness,
   * this helper will blink the Spot CAM lights until threading event is set to stop. This
   * function must be used within a thread to prevent it from running forever.
   * @param {LightingClient} lightingClient Lighting client
   * @param {number} frequency Desired frequency (Hz) for flashing the Spot CAM lights
   * @param {number} brightness Desired brightness [0, 1] for the Spot CAM lights
   */
  async setLightsWithFreqAndBrightness(lightingClient, frequency, brightness) {
    while (!this.stopEvent.isSet()) {
      try {
        await _setLightsToBlink(this.stopEvent, lightingClient, frequency, brightness);
      } catch (e) {
        if (e instanceof TimedOutError) {
          _LOGGER.error('Timed out trying to set lights. Retrying.');
        } else if (e instanceof BosdynError) {
          _LOGGER.error(`Failed to set lights. Retrying. ${e}`);
          // Wait up to 1 second so as to not hammer the service.

          await this.stopEvent.wait(1_000);
        } else {
          throw e;
        }
      }
    }
  }
}

/**
 * Helper to set LED brightnesses using default RPC settings
 * @param {LightingClient} lightingClient Lighting client
 * @param {number[]} brightness An array of brightnesses
 * @param {number} timeout An optional timeout
 */
async function _setLightsBrightness(lightingClient, brightness, timeout = 1_000) {
  await lightingClient.setLedBrightness(brightness, { timeout });
}

/**
 * Set minimum and maximum boundaries for brightness
 * @param {Event} stopEvent The stop event
 * @param {LightingClient} lightingClient Lighting client
 * @param {number} duration Time to wait in milliseconds before turning off light. Can be 0 to don't turn off light.
 * @param {number} brightness Brightness between 0.1 and 1
 */
async function _setLightsOn(stopEvent, lightingClient, duration = 1_000, brightness = 0.5) {
  if (brightness < 0.1) {
    brightness = 0.1;
  } else if (brightness > 1.0) {
    brightness = 1.0;
  }

  if (duration === 0) {
    const setting = Array(4).fill(brightness);
    await _setLightsBrightness(lightingClient, setting);
  } else {
    const setting = Array(4).fill(brightness);
    await _setLightsBrightness(lightingClient, setting);
    await stopEvent.wait(duration);
    await _setLightsOff(lightingClient);
  }
}

/**
 * Turn off light
 * @param {LightingClient} lightingClient Lighting client
 */
async function _setLightsOff(lightingClient) {
  const setting = Array(4).fill(0);
  await _setLightsBrightness(lightingClient, setting);
}

/**
 * Make lights blink
 * @param {Event} stopEvent The stop event
 * @param {LightingClient} lightingClient Lighting client
 * @param {number} freq Frequence to blink lights
 * @param {number} brightness Brightness between 0.1 and 1
 */
async function _setLightsToBlink(stopEvent, lightingClient, freq = 1, brightness = 0.5) {
  const period = (1 / freq) * 1_000;
  await _setLightsOn(stopEvent, lightingClient, period / 2, brightness);
  await _setLightsOff(lightingClient);
  await stopEvent.wait(period / 2);
}

module.exports = {
  LightsHelper,
};

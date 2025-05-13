'use strict';

const Event = require('node-threading-event');

const { LightingClient } = require('./lighting');

const { TimedOutError } = require('../exceptions');
const { LoggerUtil } = require('../loggerUtil');

const _LOGGER = LoggerUtil.getLogger('lights_helper');

/**
 * Context manager that flashes Spot CAM LEDs for the duration of the context.
 */
class LightsHelper {
  /**
   * @param  {number} frequency The frequency
   * @param  {number} brightness The brightness
   */
  constructor(frequency, brightness) {
    this.freq = frequency;
    this.brightness = brightness;
    this.thread = null;
    this.stopEvent = new Event();
  }

  async init(robot) {
    /** @type {LightingClient} */
    this.lightingClient = await robot.ensureClient(LightingClient.defaultServiceName);
  }

  start() {
    this.setLightsWithFreqAndBrightness(this.lightingClient, this.freq, this.brightness);
  }

  stop() {
    this.stopEvent.set();
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
        // eslint-disable-next-line no-await-in-loop
        await _setLightsToBlink(this.stopEvent, lightingClient, frequency, brightness);
      } catch (e) {
        if (e instanceof TimedOutError) {
          _LOGGER.error('Timed out trying to set lights. Retrying.');
        } else {
          _LOGGER.error('Failed to set lights. Retrying.');
          // eslint-disable-next-line no-await-in-loop
          await this.stopEvent.wait(1_000);
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

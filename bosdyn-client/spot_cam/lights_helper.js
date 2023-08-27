'use strict';

const { setImmediate, clearImmediate } = require('node:timers');

const Event = require('node-threading-event');

const { LightingClient } = require('./lighting');

const { TimedOutError } = require('../exceptions');
const { LoggerUtil } = require('../loggerUtil');

const _LOGGER = LoggerUtil.getLogger('lights_helper');

class LightsHelper {
  /**
   * Context manager that flashes Spot CAM LEDs for the duration of the context.
   * @param  {number} frequency The frequency
   * @param  {number} brightness The brightness
   */
  constructor(frequency, brightness) {
    this.freq = frequency;
    this.brightness = brightness;
    this.thread = null;
    this.stop_event = new Event();
  }

  async init(robot) {
    this.lighting_client = await robot.ensure_client(LightingClient.default_service_name);
  }

  start() {
    this.thread = setImmediate(
      this.set_lights_with_freq_and_brightness.bind(this, this.lighting_client, this.freq, this.brightness),
    );
  }

  stop() {
    this.stop_event.set();
    clearImmediate(this.thread);
  }

  async set_lights_with_freq_and_brightness(lighting_client, frequency, brightness) {
    while (!this.stop_event.isSet()) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await _set_lights_to_blink(this.stop_event, lighting_client, frequency, brightness);
      } catch (e) {
        if (e instanceof TimedOutError) {
          _LOGGER.error('Timed out trying to set lights. Retrying.');
        } else {
          _LOGGER.error('Failed to set lights. Retrying.');
          // eslint-disable-next-line no-await-in-loop
          await this.stop_event.wait(1_000);
        }
      }
    }
  }
}

async function _set_lights_brightness(lighting_client, brightness, timeout = 1_000) {
  await lighting_client.set_led_brightness(brightness, { timeout });
}

async function _set_lights_on(stop_event, lighting_client, duration = 1_000, brightness = 0.5) {
  if (brightness < 0.1) {
    brightness = 0.1;
  } else if (brightness > 1.0) {
    brightness = 1.0;
  }

  if (duration === 0) {
    const setting = Array(4).fill(brightness);
    await _set_lights_brightness(lighting_client, setting);
  } else {
    const setting = Array(4).fill(brightness);
    await _set_lights_brightness(lighting_client, setting);
    await stop_event.wait(duration);
    await _set_lights_off(lighting_client);
  }
}

async function _set_lights_off(lighting_client) {
  const setting = Array(4).fill(0);
  await _set_lights_brightness(lighting_client, setting);
}

async function _set_lights_to_blink(stop_event, lighting_client, freq = 1, brightness = 0.5) {
  const period = (1 / freq) * 1_000;
  await _set_lights_on(stop_event, lighting_client, period / 2, brightness);
  await _set_lights_off(lighting_client);
  await stop_event.wait(period / 2);
}

module.exports = {
  LightsHelper,
};

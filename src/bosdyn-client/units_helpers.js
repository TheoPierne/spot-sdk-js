'use strict';

const { TemperatureEnum, PressureEnum } = require('../bosdyn/api/units_pb');

const TEMPERATURES_NAMES = {
  [TemperatureEnum.TEMPERATURE_KELVIN]: 'K',
  [TemperatureEnum.TEMPERATURE_CELSIUS]: '°C',
  [TemperatureEnum.TEMPERATURE_FAHRENHEIT]: '°F',
};

const PRESSURE_NAMES = {
  [PressureEnum.PRESSURE_PSI]: 'psi',
  [PressureEnum.PRESSURE_KPA]: 'kPa',
  [PressureEnum.PRESSURE_BAR]: 'bar',
};

/**
 * Gets the units in string form to use for display. Ex: TEMPERATURE_KELVIN = "K"
 * @param {unitsPb.Units} units Populate units message.
 * @returns {string}
 */
function unitsToString(units) {
  if (units.hasTemp()) {
    return TEMPERATURES_NAMES[units.getTemp()] || '';
  }
  if (units.hasPress()) {
    return PRESSURE_NAMES[units.getPress()] || '';
  }
  if (units.hasName()) {
    return units.getName();
  }

  return '';
}

module.exports = {
  TEMPERATURES_NAMES,
  PRESSURE_NAMES,
  unitsToString,
};

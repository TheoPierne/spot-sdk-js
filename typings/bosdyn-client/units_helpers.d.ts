export type Units = import("../../src/bosdyn/api/units_pb").Units;
/**
 * @typedef {import('../../src/bosdyn/api/units_pb').Units} Units
 */
export const TEMPERATURES_NAMES: {
    1: string;
    2: string;
    3: string;
};
export const PRESSURE_NAMES: {
    1: string;
    2: string;
    3: string;
};
/**
 * Gets the units in string form to use for display. Ex: TEMPERATURE_KELVIN = "K"
 * @param {Units} units Populate units message.
 * @returns {string}
 */
export function unitsToString(units: Units): string;

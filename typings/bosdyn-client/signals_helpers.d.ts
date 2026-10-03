/**
 * Build a max AlertConditionSpec
 * @param {number} value Max threshold.
 * @param {AlertData.SeverityLevel} severity Severity of alert.
 * @returns {AlertConditionSpec}
 */
export function buildMaxAlertSpec(value: number, severity: AlertData.SeverityLevel): AlertConditionSpec;
/**
 * Builds a simple signal with a float value, string units, and optional max alerts.
 * @param {string} name Name of the signal.
 * @param {number} value Signal data value.
 * @param {string} units Simple units.
 * @param {number} maxWarnings Max warning threshold.
 * @param {number} maxCritical Max critical threshold.
 * @returns {Signal}
 */
export function buildSimpleSignal(name: string, value: number, units: string, maxWarnings: number, maxCritical: number): Signal;
/**
 * Takes an object of signals and copies them into a CapabilityLiveData message.
 * @param {Object<string, Signal>} signals An array of signal id to Signal.
 * @param {string} capabilityName The capability name.
 * @returns {LiveDataResponse.CapabilityLiveData}
 */
export function buildCapabilityLiveData(signals: {
    [x: string]: Signal;
}, capabilityName: string): LiveDataResponse.CapabilityLiveData;
/**
 * Takes a list of CapabilityLiveData and adds them to a LiveDataResponse.
 * @param {LiveDataResponse.CapabilityLiveData[]} liveDataCapabilities A list of CapabilityLiveData.
 * @returns {LiveDataResponse}
 */
export function buildLiveDataResponse(liveDataCapabilities: LiveDataResponse.CapabilityLiveData[]): LiveDataResponse;
/**
 * Checks type of SignalData and returns the value.
 * @param {SignalData} signalData Signal data.
 * @returns {any} The value, or null without data or value (a TypeError: getValueNotSet() does not exist).
 */
export function getData(signalData: SignalData): any;
import { AlertData } from "../../src/bosdyn/api/alerts_pb";
import { AlertConditionSpec } from "../../src/bosdyn/api/signals_pb";
import { Signal } from "../../src/bosdyn/api/signals_pb";
import { LiveDataResponse } from "../../src/bosdyn/api/data_acquisition_pb";
import { SignalData } from "../../src/bosdyn/api/signals_pb";

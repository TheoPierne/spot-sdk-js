'use strict';

const { camelCase } = require('lodash');

const { AlertData } = require('../bosdyn/api/alerts_pb');
const { LiveDataResponse } = require('../bosdyn/api/data_acquisition_pb');
const {
  AlertConditionSpec,
  Signal,
  SignalData,
  SignalSpec,
  SignalDisplayInfo,
  SensorOutputSpec,
} = require('../bosdyn/api/signals_pb');
const { Units } = require('../bosdyn/api/units_pb');

/**
 * Build a max AlertConditionSpec
 * @param {number} value Max threshold.
 * @param {AlertData.SeverityLevel} severity Severity of alert.
 * @returns {AlertConditionSpec}
 */
function buildMaxAlertSpec(value, severity) {
  const alert = new AlertConditionSpec();
  alert.setMax(value);
  alert.setAlertData(new AlertData().setSeverity(severity));
  return alert;
}

/**
 * Builds a simple signal with a float value, string units, and optional max alerts.
 * @param {string} name Name of the signal.
 * @param {number} value Signal data value.
 * @param {string} units Simple units.
 * @param {number} maxWarnings Max warning threshold.
 * @param {number} maxCritical Max critical threshold.
 * @returns {Signal}
 */
function buildSimpleSignal(name, value, units, maxWarnings, maxCritical) {
  const signal = new Signal();
  const signalSpec = new SignalSpec();
  signalSpec.setInfo(new SignalDisplayInfo().setName(name));
  signalSpec.setSensor(new SensorOutputSpec().setUnits(new Units().setName(units)));

  if (maxWarnings) {
    const alertSpec = buildMaxAlertSpec(maxWarnings, AlertData.SeverityLevel.SEVERITY_LEVEL_WARN);
    signalSpec.addAlerts(alertSpec);
  }
  if (maxCritical) {
    const alertSpec = buildMaxAlertSpec(maxCritical, AlertData.SeverityLevel.SEVERITY_LEVEL_CRITICAL);
    signalSpec.addAlerts(alertSpec);
  }

  signal.setSignalSpec(signalSpec);
  signal.setSignalData(new SignalData().setData(new SignalData.Data().setDouble(value)));

  return signal;
}

/**
 * Takes an object of signals and copies them into a CapabilityLiveData message.
 * @param {Object<string, Signal>} signals An array of signal id to Signal.
 * @param {string} capabilityName The capability name.
 * @returns {LiveDataResponse.CapabilityLiveData}
 */
function buildCapabilityLiveData(signals, capabilityName) {
  const capabilityLiveData = new LiveDataResponse.CapabilityLiveData();
  capabilityLiveData.setName(capabilityName);
  capabilityLiveData.setStatus(LiveDataResponse.CapabilityLiveData.Status.STATUS_OK);
  for (const [signalId, signal] of Object.entries(signals)) {
    capabilityLiveData.getSignalsMap().set(signalId, signal);
  }
  return capabilityLiveData;
}

/**
 * Takes a list of CapabilityLiveData and adds them to a LiveDataResponse.
 * @param {LiveDataResponse.CapabilityLiveData[]} liveDataCapabilities A list of CapabilityLiveData.
 * @returns {LiveDataResponse}
 */
function buildLiveDataResponse(liveDataCapabilities) {
  const response = new LiveDataResponse();
  response.setLiveDataList(liveDataCapabilities);
  return response;
}

/**
 * Checks type of SignalData and returns the value.
 * @param {SignalData} signalData Signal data.
 * @returns {any}
 */
function getData(signalData) {
  const data = signalData.getData();
  const valueType = data.getValueCase();
  const keyWhichOneOf = Object.keys(data.constructor.ValueCase).find(
    keyOf => data.constructor.ValueCase[keyOf] === valueType,
  );
  const getterFunction = camelCase(`get-${keyWhichOneOf}`);
  return data[getterFunction]();
}

module.exports = {
  buildMaxAlertSpec,
  buildSimpleSignal,
  buildCapabilityLiveData,
  buildLiveDataResponse,
  getData,
};

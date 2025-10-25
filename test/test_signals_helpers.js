'use strict';

const assert = require('node:assert');
const test = require('node:test');

const { AlertData } = require('../src/bosdyn/api/alerts_pb');
const { LiveDataResponse } = require('../src/bosdyn/api/data_acquisition_pb');
const {
  buildCapabilityLiveData,
  buildLiveDataResponse,
  buildSimpleSignal,
  getData,
} = require('../src/bosdyn-client/signals_helpers');

const testSignal1 = buildSimpleSignal('Test Signal Name 1', 10.0, '%');
const testSignal2 = buildSimpleSignal('Test Signal Name 2', 20.0, '%', 30.0, 40.0);
const testSignals = { test_signal_1: testSignal1, test_signal_2: testSignal2 };

test('test_building_live_data_response', () => {
  const testCapabilityLiveData = buildCapabilityLiveData(testSignals, 'test');
  const testResponse = buildLiveDataResponse([testCapabilityLiveData]);

  assert.strictEqual(testResponse.getLiveDataList().length, 1);
  assert.strictEqual(testResponse.getLiveDataList()[0].getName(), 'test');
  assert.strictEqual(
    testResponse.getLiveDataList()[0].getStatus(),
    LiveDataResponse.CapabilityLiveData.Status.STATUS_OK,
  );
  assert.strictEqual(testResponse.getLiveDataList()[0].getSignalsMap().getLength(), 2);
  assert.ok(!testResponse.getLiveDataList()[0].getSignalsMap().has('bad_key'));
  assert.ok(testResponse.getLiveDataList()[0].getSignalsMap().has('test_signal_1'));

  const responseSignal1 = testResponse.getLiveDataList()[0].getSignalsMap().get('test_signal_1');

  assert.strictEqual(responseSignal1, testSignal1);
  assert.strictEqual(responseSignal1.getSignalSpec().getInfo().getName(), 'Test Signal Name 1');
  assert.strictEqual(responseSignal1.getSignalSpec().getSensor().getUnits().getName(), '%');
  assert.strictEqual(responseSignal1.getSignalData().getData().getDouble(), 10);
  assert.strictEqual(getData(responseSignal1.getSignalData()), 10);
  assert.ok(testResponse.getLiveDataList()[0].getSignalsMap().has('test_signal_2'));

  const responseSignal2 = testResponse.getLiveDataList()[0].getSignalsMap().get('test_signal_2');

  assert.strictEqual(responseSignal2, testSignal2);
  assert.strictEqual(responseSignal2.getSignalSpec().getInfo().getName(), 'Test Signal Name 2');
  assert.strictEqual(responseSignal2.getSignalSpec().getSensor().getUnits().getName(), '%');
  assert.strictEqual(responseSignal2.getSignalData().getData().getDouble(), 20);
  assert.strictEqual(responseSignal2.getSignalSpec().getAlertsList().length, 2);

  const maxWarningSpec = responseSignal2.getSignalSpec().getAlertsList()[0];
  assert.strictEqual(maxWarningSpec.getMax(), 30);
  assert.strictEqual(maxWarningSpec.getAlertData().getSeverity(), AlertData.SeverityLevel.SEVERITY_LEVEL_WARN);

  const maxCriticalSpec = responseSignal2.getSignalSpec().getAlertsList()[1];
  assert.strictEqual(maxCriticalSpec.getMax(), 40);
  assert.strictEqual(maxCriticalSpec.getAlertData().getSeverity(), AlertData.SeverityLevel.SEVERITY_LEVEL_CRITICAL);
});

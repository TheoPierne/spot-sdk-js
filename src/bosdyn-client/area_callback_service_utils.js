/**
 * @file The configuration of an area callback service, and the service faults it triggers while the services it needs
 * are unavailable, like bosdyn.client.area_callback_service_utils in Python.
 */

'use strict';

const { setTimeout: sleep } = require('node:timers/promises');

const { NonexistentServiceError } = require('./directory');
const { BosdynError } = require('./exceptions');
const { ServiceFaultAlreadyExistsError, ServiceFaultDoesNotExistError } = require('./fault');
const { LoggerUtil } = require('./logger_util');
const { dictParamsToDict } = require('./service_customization_helpers');

const { AreaCallbackInformation } = require('../bosdyn/api/graph_nav/area_callback_pb');
const { DictParam } = require('../bosdyn/api/service_customization_pb');
const { ServiceFault, ServiceFaultId } = require('../bosdyn/api/service_fault_pb');

/**
 * @typedef {import('./directory').DirectoryClient} DirectoryClient
 * @typedef {import('./fault').FaultClient} FaultClient
 * @typedef {import('./robot_state').RobotStateClient} RobotStateClient
 * @typedef {import('./service_customization_helpers').InvalidCustomParamValueError} InvalidCustomParamValueError
 */

const _LOGGER = LoggerUtil.getLogger('area_callback_service_utils');

/** Config data required to run a area callback service. */
class AreaCallbackServiceConfig {
  /**
   * @param {string} serviceName The name of the service, for registering with directory.
   * @param {string[]} [requiredLeaseResources=[]] List of required lease resources.
   * @param {boolean} [logBeginCallbackData=false] Log the data field of the begin callback request.
   * @param {?AreaCallbackInformation} [areaCallbackInformation=null] Information describing the area callback.
   */
  constructor(serviceName, requiredLeaseResources = [], logBeginCallbackData = false, areaCallbackInformation = null) {
    this.serviceName = serviceName;
    this.requiredLeaseResources = requiredLeaseResources;

    this.logBeginCallbackData = logBeginCallbackData;
    this.areaCallbackInformation =
      areaCallbackInformation ??
      new AreaCallbackInformation().setRequiredLeaseResourcesList([...this.requiredLeaseResources]);
  }

  /**
   * Parse params and validate they agree with the spec stored in areaCallbackInformation.
   * @param {DictParam} params The parameters being validated.
   * @returns {Object} The values of the parameters.
   * @throws {InvalidCustomParamValueError} The parameters do not agree with the spec.
   */
  parseParams(params) {
    return dictParamsToDict(params, this.areaCallbackInformation.getCustomParams() ?? new DictParam.Spec());
  }
}

/**
 * @param {DirectoryClient} directoryClient
 * @param {string} serviceName
 * @returns {Promise<boolean>} Whether the service is registered: false when it is not, or when the directory cannot
 * tell (logged).
 */
async function _isRegistered(directoryClient, serviceName) {
  try {
    await directoryClient.getEntry(serviceName);
    return true;
  } catch (exc) {
    if (exc instanceof NonexistentServiceError) return false;
    if (!(exc instanceof BosdynError)) throw exc;
    _LOGGER.error(`Failed to check if ${serviceName} exists during fault handling: ${exc}`);
    return false;
  }
}

/**
 * Calls a FaultClient method, without the error which means the fault is already in the wanted state.
 * @param {function(): Promise<*>} call
 * @param {Function} expectedError The error class meaning that the fault is already in the wanted state.
 * @param {string} failure The beginning of the message logged for another error of the SDK.
 * @returns {Promise<boolean>} Whether the call succeeded.
 */
async function _faultCall(call, expectedError, failure) {
  try {
    await call();
    return true;
  } catch (exc) {
    if (exc instanceof expectedError) return false;
    if (!(exc instanceof BosdynError)) throw exc;
    _LOGGER.error(`${failure}: ${exc}`);
    return false;
  }
}

/**
 * Helper to raise service faults when other services are unavailable: every 0.5 second, the service is faulted when
 * one of the prerequisite services is not registered or is faulted, and its fault is cleared when they are all back.
 *
 * Python runs this endless loop in a daemon thread: here its waits do not keep the process alive, and a signal can
 * stop it (not in Python).
 * @param {FaultClient} faultClient
 * @param {RobotStateClient} robotStateClient
 * @param {DirectoryClient} directoryClient
 * @param {string} serviceName The service to fault, and the name of its fault.
 * @param {string[]} prereqServices The services it needs.
 * @param {Object} [options]
 * @param {?AbortSignal} [options.signal=null] Stops the loop.
 * @returns {Promise<void>} Resolves when the signal is aborted, rejects with an error which is not an error of the
 * SDK (the errors of the SDK are logged).
 */
async function handleServiceFaults(
  faultClient,
  robotStateClient,
  directoryClient,
  serviceName,
  prereqServices,
  { signal = null } = {},
) {
  const serviceFault = new ServiceFault()
    .setFaultId(new ServiceFaultId().setFaultName(serviceName).setServiceName(serviceName))
    .setSeverity(ServiceFault.Severity.SEVERITY_CRITICAL);
  // In milliseconds.
  const checkPeriod = 500;

  for (;;) {
    try {
      await sleep(checkPeriod, undefined, { signal: signal ?? undefined, ref: false });
    } catch (err) {
      if (err?.name === 'AbortError') return;
      throw err;
    }

    // Don't fault the service if it doesn't actually exist.

    if (!(await _isRegistered(directoryClient, serviceName))) continue;

    const unavailableServices = [];

    // Need robot state to check existing faults.
    let state;
    try {
      state = await robotStateClient.getRobotState();
    } catch (exc) {
      if (!(exc instanceof BosdynError)) throw exc;
      _LOGGER.error(`Failed to get robot state during fault handling: ${exc}`);
      continue;
    }
    const faults = state.getServiceFaultState()?.getFaultsList() ?? [];
    const isFaulted = name => faults.some(fault => fault.getFaultId()?.getServiceName() === name);

    for (const prereqService of prereqServices) {
      // Make sure the prereq service exists, and isn't faulted.

      if (!(await _isRegistered(directoryClient, prereqService)) || isFaulted(prereqService)) {
        unavailableServices.push(prereqService);
      }
    }
    const setFault = unavailableServices.length > 0;

    // Check if the service is already faulted.
    const faultExists = isFaulted(serviceName);

    if (setFault && !faultExists) {
      // Fault the service if there isn't an existing fault.
      serviceFault.setErrorMessage(`Faulted due to issues with ${unavailableServices.join(',')}`);

      const triggered = await _faultCall(
        () => faultClient.triggerServiceFault(serviceFault),
        ServiceFaultAlreadyExistsError,
        `Failed to set ${serviceName} fault`,
      );
      if (triggered) _LOGGER.info(`Triggered fault on ${serviceName}`);
    } else if (!setFault && faultExists) {
      // Otherwise, clear the fault if it exists.

      const cleared = await _faultCall(
        () => faultClient.clearServiceFault(serviceFault.getFaultId()),
        ServiceFaultDoesNotExistError,
        `Failed to clear ${serviceName} fault`,
      );
      if (cleared) _LOGGER.info(`Cleared fault on ${serviceName}`);
    }
  }
}

module.exports = {
  AreaCallbackServiceConfig,
  handleServiceFaults,
};

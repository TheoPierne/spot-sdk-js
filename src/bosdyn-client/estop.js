/**
 * @file For clients to the emergency stop (estop) service.
 */

'use strict';

const { pid } = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');

const { Duration } = require('google-protobuf/google/protobuf/duration_pb');

const {
  BaseClient,
  commonHeaderErrors,
  handleCommonHeaderErrors,
  handleUnsetStatusError,
  errorFactory,
} = require('./common');
const { ResponseError, RpcError, TimedOutError, ValueError } = require('./exceptions');
const { LoggerUtil } = require('./logger_util');
const { DefaultDict } = require('./util');

const estopPb = require('../bosdyn/api/estop_pb');
const { EstopServiceClient } = require('../bosdyn/api/estop_service_grpc_pb');
const { Queue } = require('../bosdyn-core/queue');
const { nowMsec, toUint64String } = require('../bosdyn-core/util');

const StopLevel = estopPb.EstopStopLevel;

/** General class of errors for Estop service. */
class EstopResponseError extends ResponseError {}
/** The endpoint specified in the request is not registered. */
class EndpointUnknownError extends EstopResponseError {}
/** The challenge and/or response was incorrect. */
class IncorrectChallengeResponseError extends EstopResponseError {}
/** Target endpoint did not match. */
class EndpointMismatchError extends EstopResponseError {}
/** Registered to the wrong configuration. */
class ConfigMismatchError extends EstopResponseError {}
/** New endpoint was invalid. */
class InvalidEndpointError extends EstopResponseError {}
/** Tried to replace a EstopConfig, but provided bad ID. */
class InvalidIdError extends EstopResponseError {}
/** The operation is not allowed while motors are on. */
class MotorsOnError extends EstopResponseError {}

/**
 * Client to the estop service.
 * @extends {BaseClient<EstopServiceClient>}
 */
class EstopClient extends BaseClient {
  static defaultServiceName = 'estop';
  static serviceType = 'bosdyn.api.EstopService';

  constructor(name = `EstopClient - PID: ${pid}`) {
    super(EstopServiceClient, name);
  }

  /**
   * Register the endpoint in the target configuration.
   * @param {string} targetConfigId The identification of the current configuration on the robot.
   * @param {EstopEndpoint} endpoint Estop endpoint.
   * @param {Object} [args] Passed to underlying RPC. Example: { timeout: 5000 } to cancel the RPC after 5 seconds.
   * @returns {Promise<estopPb.EstopEndpoint>}
   */
  register(targetConfigId, endpoint, args) {
    const req = EstopClient._buildRegisterRequest(targetConfigId, endpoint);
    return this.call(
      this._stub.registerEstopEndpoint,
      req,
      _newEndpointFromRegisterResponse,
      _registerEndpointErrorFromResponse,
      false,
      args,
    );
  }

  /**
   * Deregister the endpoint in the target configuration.
   * @param {string} targetConfigId The identification of the current configuration on the robot.
   * @param {EstopEndpoint} endpoint Estop endpoint.
   * @param {Object} [args] Passed to underlying RPC.
   * @returns {Promise<estopPb.DeregisterEstopEndpointResponse>}
   */
  deregister(targetConfigId, endpoint, args) {
    const req = EstopClient._buildDeregisterRequest(targetConfigId, endpoint);
    return this.call(this._stub.deregisterEstopEndpoint, req, null, _deregisterEndpointErrorFromResponse, false, args);
  }

  /**
   * Return the estop configuration of the robot.
   * @param {Object} [args] Passed to underlying RPC.
   * @returns {Promise<estopPb.EstopConfig>}
   */
  getConfig(args) {
    return this.call(
      this._stub.getEstopConfig,
      new estopPb.GetEstopConfigRequest(),
      _activeConfigFromConfigResponse,
      commonHeaderErrors,
      false,
      args,
    );
  }

  /**
   * Change the estop configuration of the robot.
   * @param {estopPb.EstopConfig} config New configuration to set.
   * @param {string} targetConfigId The identification of the current configuration on the robot.
   * @param {Object} [args] Passed to underlying RPC.
   * @returns {Promise<estopPb.EstopConfig>}
   */
  setConfig(config, targetConfigId, args) {
    const req = new estopPb.SetEstopConfigRequest().setConfig(config).setTargetConfigId(targetConfigId);
    return this.call(
      this._stub.setEstopConfig,
      req,
      _activeConfigFromConfigResponse,
      _setConfigErrorFromResponse,
      false,
      args,
    );
  }

  /**
   * Return the estop status of the robot.
   * @param {Object} [args] Passed to underlying RPC.
   * @returns {Promise<estopPb.EstopSystemStatus>}
   */
  getStatus(args) {
    return this.call(
      this._stub.getEstopSystemStatus,
      new estopPb.GetEstopSystemStatusRequest(),
      _estopSysStatusFromResponse,
      commonHeaderErrors,
      false,
      args,
    );
  }

  /**
   * Check in with the estop system.
   * @param {estopPb.EstopStopLevel} stopLevel Number representing desired stop level. See StopLevel enum.
   * @param {EstopEndpoint} endpoint The endpoint asserting the stop level.
   * @param {?(string|bigint|number)} challenge A previously received challenge from the server (an uint64: the
   * challenges are strings, exact beyond 2^53).
   * @param {?(string|bigint|number)} response A response to the 'challenge' argument.
   * @param {boolean} suppressIncorrect Set True to prevent an IncorrectChallengeResponseError from being
   * raised when STATUS_INVALID is returned. Useful for the first check-in, before a
   * challenge has been sent by the server.
   * @param {Object} [args] Passed to underlying RPC.
   * @returns {Promise<string>} The new challenge.
   */
  checkIn(stopLevel, endpoint, challenge, response, suppressIncorrect = false, args) {
    const req = EstopClient._buildCheckInRequest(stopLevel, endpoint, challenge, response);
    const errFromResp = EstopClient._chooseCheckInErrFunc(suppressIncorrect);
    return this.call(this._stub.estopCheckIn, req, _challengeFromCheckInResponse, errFromResp, false, args);
  }

  /**
   * Check in request generator
   * @param {estopPb.EstopStopLevel} stopLevel Number representing desired stop level. See StopLevel enum.
   * @param {EstopEndpoint} endpoint The endpoint asserting the stop level.
   * @param {?(string|bigint|number)} challenge A previously received challenge from the server.
   * @param {?(string|bigint|number)} response A response to the 'challenge' argument.
   * @returns {estopPb.EstopCheckInRequest}
   * @private
   * @static
   */
  static _buildCheckInRequest(stopLevel, endpoint, challenge, response) {
    if (endpoint instanceof EstopEndpoint) endpoint = endpoint.toProto();
    const req = new estopPb.EstopCheckInRequest().setEndpoint(endpoint).setStopLevel(stopLevel);
    // uint64 strings ([jstype = JS_STRING]): jspb writes 0 for a number, and a number is rounded beyond 2^53.
    if (challenge !== null && challenge !== undefined) req.setChallenge(toUint64String(challenge));
    if (response !== null && response !== undefined) req.setResponse(toUint64String(response));
    return req;
  }

  /**
   * Register request generator
   * @param {string} targetConfigId The identification of the current configuration on the robot.
   * @param {EstopEndpoint} endpoint Estop endpoint.
   * @returns {estopPb.RegisterEstopEndpointRequest}
   * @private
   * @static
   */
  static _buildRegisterRequest(targetConfigId, endpoint) {
    if (endpoint instanceof EstopEndpoint) endpoint = endpoint.toProto();
    const req = new estopPb.RegisterEstopEndpointRequest()
      .setTargetConfigId(targetConfigId)
      .setNewEndpoint(endpoint)
      .setTargetEndpoint(new estopPb.EstopEndpoint().setRole(endpoint.getRole()));
    return req;
  }

  /**
   * Deregister request generator
   * @param {string} targetConfigId The identification of the current configuration on the robot.
   * @param {EstopEndpoint} endpoint Estop endpoint.
   * @returns {estopPb.DeregisterEstopEndpointRequest}
   * @private
   * @static
   */
  static _buildDeregisterRequest(targetConfigId, endpoint) {
    if (endpoint instanceof EstopEndpoint) endpoint = endpoint.toProto();
    const req = new estopPb.DeregisterEstopEndpointRequest()
      .setTargetEndpoint(endpoint)
      .setTargetConfigId(targetConfigId);
    return req;
  }

  /**
   * Whether to choose between two error handlers function
   * @param {boolean} suppressIncorrect Set True to prevent an IncorrectChallengeResponseError from being
   * raised when STATUS_INVALID is returned. Useful for the first check-in, before a
   * challenge has been sent by the server.
   * @returns {Function}
   * @private
   * @static
   */
  static _chooseCheckInErrFunc(suppressIncorrect) {
    return suppressIncorrect ? _checkInErrorFromResponseNoIncorrect : _checkInErrorFromResponse;
  }
}

/**
 * Endpoint in the software estop system.
 */
class EstopEndpoint {
  /**
   * This is an estop role required in every configuration.
   * @type {string}
   * @static
   * @readonly
   */
  static REQUIRED_ROLE = 'PDB_rooted';

  /**
   * @param {EstopClient} client The client of the estop service.
   * @param {string} name Name of the endpoint.
   * @param {number} estopTimeout Timeout of the endpoint, in seconds like Python (not in milliseconds like the
   * timeouts of the RPCs): the robot is stopped when it gets no valid check-in during this time.
   * @param {string} [role=EstopEndpoint.REQUIRED_ROLE] Role of the endpoint.
   * @param {boolean} [firstCheckin=true] Whether the first check-in does not have a challenge to answer yet.
   * @param {?number} [estopCutPowerTimeout=null] Timeout of the cut power of the endpoint, in seconds.
   * @throws {ValueError} The timeout is not a positive number.
   */
  constructor(
    client,
    name,
    estopTimeout,
    role = EstopEndpoint.REQUIRED_ROLE,
    firstCheckin = true,
    estopCutPowerTimeout = null,
  ) {
    if (!(Number.isFinite(estopTimeout) && estopTimeout > 0)) {
      throw new ValueError(`[ESTOP] Invalid estopTimeout "${estopTimeout}" (a number of seconds > 0)`);
    }
    /** @type {EstopClient} */
    this.client = client;
    this.role = role;
    this.estopTimeout = estopTimeout;
    this.estopCutPowerTimeout = estopCutPowerTimeout;
    this._lastSetLevel = null;
    this._challenge = null;
    this._name = name;
    this._uniqueId = null;
    this._configId = null;
    this._firstCheckin = firstCheckin;

    this.logger = LoggerUtil.getLogger(this._name);
  }

  toString() {
    return this.estopCutPowerTimeout === null
      ? `${this._name} (timeout ${this.estopTimeout.toFixed(3)}s)`
      : `${this._name} (timeout ${this.estopTimeout.toFixed(3)}s,
      cut_power_timeout ${this.estopCutPowerTimeout.toFixed(3)}s)`;
  }

  firstCheckin() {
    return this._firstCheckin;
  }

  setFirstCheckin(val) {
    this._firstCheckin = val;
  }

  /**
   * Sets the challenge of the endpoint.
   */
  setChallenge(challenge) {
    this._challenge = challenge;
  }

  /**
   * The challenge of the endpoint.
   */
  getChallenge() {
    return this._challenge;
  }

  /**
   * Replaces the existing estop configuration with a single-endpoint configuration.
   */
  async forceSimpleSetup() {
    const newConfig = new estopPb.EstopConfig();
    newConfig.addEndpoints(this.toProto());

    let activeConfig = await this.client.getConfig();
    activeConfig = await this.client.setConfig(newConfig, activeConfig.getUniqueId());
    this._uniqueId = activeConfig.getEndpointsList()[0].getUniqueId();
    await this.register(activeConfig.getUniqueId());
  }

  /**
   * Issue a CUT stop level command to the robot, cutting motor power immediately.
   * @param {Object} [args] Passed to underlying RPC.
   */
  async stop(args) {
    this.logger.debug('[ESTOP] Stopping');
    await this.checkInAtLevel(StopLevel.ESTOP_LEVEL_CUT, args);
  }

  /**
   * Issue a SETTLE_THEN_CUT stop level. The robot will attempt to sit before cutting motor power.
   * @param {Object} [args] Passed to underlying RPC.
   */
  async settleThenCut(args) {
    this.logger.debug('[ESTOP] Stopping with SETTLE_THEN_CUT');
    await this.checkInAtLevel(StopLevel.ESTOP_LEVEL_SETTLE_THEN_CUT, args);
  }

  /**
   * Issue a NONE stop level command to the robot, allowing motor power.
   * @param {Object} [args] Passed to underlying RPC.
   */
  async allow(args) {
    this.logger.debug('[ESTOP] Releasing');
    await this.checkInAtLevel(StopLevel.ESTOP_LEVEL_NONE, args);
  }

  /**
   * Check in at a specified level.
   * Meant for internal use, but may be helpful for higher-level wrappers.
   * @param {number} level Number representing desired stop level. See StopLevel enum.
   * @param {Object} [args] Passed to underlying RPC.
   */
  async checkInAtLevel(level, args) {
    try {
      const challenge = await this.client.checkIn(
        level,
        this,
        this._challenge,
        this._response(),
        this._firstCheckin,
        args,
      );
      this._challenge = challenge;
      this._lastSetLevel = level;
    } catch (e) {
      if (e instanceof EstopResponseError) {
        this._challenge = _challengeFromCheckInResponse(e.response);
      }
      throw e;
    }
    // Like Python, only a successful check-in ends the first check-in: after a failure (e.g. network),
    // an incorrect challenge is still tolerated on the next one.
    this._firstCheckin = false;
  }

  /**
   * Deregister this endpoint from the configuration.
   * @param {Object} [args] Passed to underlying RPC.
   */
  async deregister(args) {
    this.logger.debug('[ESTOP] Deregistering');
    await this.client.deregister(this._configId, this, args);
  }

  /**
   * Register this endpoint to the given configuration.
   * @param {string} targetConfigId The identification of the current configuration on the robot.
   * @param {Object} [args] Passed to underlying RPC.
   */
  async register(targetConfigId, args) {
    this.logger.debug(`[ESTOP] Registering to ${targetConfigId}`);
    const newEndpoint = await this.client.register(targetConfigId, this, args);
    this._configId = targetConfigId;
    this.fromProto(newEndpoint);
    this.logger.debug('[ESTOP] Doing check-in to seed challenge...');
    await this.stop(args);
  }

  /**
   * Set member variables based on given estopPb.EstopEndpoint.
   * @param {estopPb.EstopEndpoint} proto The source proto
   */
  fromProto(proto) {
    if (this._name !== proto.getName()) {
      this.logger.info(`[ESTOP] Changing name to ${proto.getName()}`);
      this._name = proto.getName();
      this.logger = LoggerUtil.getLogger(this._name);
    }
    this.role = proto.getRole();
    // Unset durations read as 0, like Python.
    this.estopTimeout = (proto.getTimeout()?.getSeconds() ?? 0) + (proto.getTimeout()?.getNanos() ?? 0) * 1e-9;
    this._uniqueId = proto.getUniqueId();
    if (!proto.getCutPowerTimeout()) {
      this.estopCutPowerTimeout = null;
    } else {
      this.estopCutPowerTimeout =
        proto.getCutPowerTimeout().getSeconds() + proto.getCutPowerTimeout().getNanos() * 1e-9;
    }
  }

  /**
   * Return estopPb.EstopEndpoint based on current member variables.
   * @returns {estopPb.EstopEndpoint}
   */
  toProto() {
    const tSeconds = Math.trunc(this.estopTimeout);
    const tNanos = Math.floor((this.estopTimeout - tSeconds) * 1e9);
    const req = new estopPb.EstopEndpoint()
      .setRole(this.role)
      .setName(this._name)
      .setUniqueId(this._uniqueId)
      .setTimeout(new Duration().setSeconds(tSeconds).setNanos(tNanos));

    if (this.estopCutPowerTimeout !== null) {
      const cptSeconds = Math.trunc(this.estopCutPowerTimeout);
      const cptNanos = Math.floor((this.estopCutPowerTimeout - cptSeconds) * 1e9);

      req.setCutPowerTimeout(new Duration().setSeconds(cptSeconds).setNanos(cptNanos));
    }

    return req;
  }

  /**
   * Generate a response for this._challenge.
   * @returns {string|null}
   */
  _response() {
    const challenge = this.getChallenge();
    return challenge === null ? null : responseFromChallenge(challenge);
  }

  /**
   * The unique id of the endpoint. Should be used as read-only.
   */
  get uniqueId() {
    return this._uniqueId;
  }

  get lastSetLevel() {
    return this._lastSetLevel;
  }
}

/**
 * Description of an error for the logs, which never throws (unlike a toString() may).
 * @param {*} e The error.
 * @returns {string}
 */
function _errorMessage(e) {
  try {
    return e instanceof Error ? `${e.name}: ${e.message}` : String(e);
  } catch (err) {
    return 'unknown error';
  }
}

/**
 * Wraps an EstopEndpoint to do periodic check-ins, keeping software estop from timing out.
 * This is intended to be the common implementation of both periodic checking-in and one-time
 * check-ins. See the command line utility and the "Big Red Button" application for examples.
 * You should not access any of the "private" members, or the wrapped endpoint.
 */
class EstopKeepAlive {
  static KeepAliveStatus = {
    OK: 0,
    ERROR: 1,
    DISABLED: 2,
  };

  /**
   * @param {EstopEndpoint} endpoint The endpoint to check in with.
   * @param {?number} [rpcTimeoutSeconds=null] Timeout of the check-in RPCs, in seconds (the estop timeout of the
   * endpoint if null).
   * @param {?number} [rpcIntervalSeconds=null] Interval between the check-ins, in seconds (a third of the estop
   * timeout of the endpoint if null).
   * @param {?function(): boolean} [keepRunningCb=null] Called before each check-in: the check-ins stop when it returns
   * false.
   * @param {number} [maxStatusQueueSize=20] The maximum number of statuses kept in statusQueue.
   */
  constructor(
    endpoint,
    rpcTimeoutSeconds = null,
    rpcIntervalSeconds = null,
    keepRunningCb = null,
    maxStatusQueueSize = 20,
  ) {
    /** @type {EstopEndpoint} */
    this._endpoint = endpoint;
    this._endCheckInSignal = false;
    this._desiredStopLevel = StopLevel.ESTOP_LEVEL_NONE;
    this._rpcTimeout = rpcTimeoutSeconds || this._endpoint.estopTimeout;
    this._checkInPeriod = rpcIntervalSeconds || this._endpoint.estopTimeout / 3.0;

    if (this._rpcTimeout <= 0) {
      throw new ValueError(`[ESTOP] Invalid rpc_timeout_seconds "${this._rpcTimeout}"`);
    }
    if (this._checkInPeriod < 0) {
      throw new ValueError(`[ESTOP] Invalid rpc_interval_seconds "${this._checkInPeriod}"`);
    }

    this._keepRunning = keepRunningCb || (() => true);

    this.logger.debug(`[ESTOP] New ${this.constructor.name} for endpoint "${this._endpoint}"`);

    this.statusQueue = new Queue({ maxSize: maxStatusQueueSize });
    this._updateStatus(EstopKeepAlive.KeepAliveStatus.OK);

    /**
     * Tail of the queue of check-ins: like Python's lock, check-ins run one at a time so that each
     * one sends the challenge returned by the previous one. Two concurrent check-ins would send the
     * same challenge, and the robot would reject the second one (e.g. a stop()).
     * @type {Promise<void>}
     * @private
     */
    this._lock = Promise.resolve();

    /**
     * Aborted to stop the check-in loop, including the wait between two check-ins.
     * @type {AbortController}
     * @private
     */
    this._stopController = new AbortController();

    // The initial check-in gets a challenge from the estop system. allow(), stop()... queue behind it.
    this._initialCheckIn = this._checkIn().catch(e => {
      this.logger.warn(`[ESTOP] Estop initial check-in exception: ${_errorMessage(e)}`);
    });
    this._task = this._initialCheckIn
      .then(() => this._periodicCheckIn())
      .catch(e => this._error(`[ESTOP] Check-in loop failed: ${_errorMessage(e)}`, true));
  }

  [Symbol.dispose]() {
    this.shutdown();
  }

  async [Symbol.asyncDispose]() {
    await this.shutdown();
  }

  /**
   * Resolves once the initial check-in is done (successful or not). Python's constructor blocks on it:
   * await this before powering on the motors.
   * @returns {Promise<void>}
   */
  waitForInitialCheckIn() {
    return this._initialCheckIn;
  }

  /**
   * Stop the periodic check-ins. The returned promise resolves once the check-in loop has exited,
   * like Python's shutdown() which joins the thread.
   * @returns {Promise<void>}
   */
  shutdown() {
    this.logger.debug('[ESTOP] Shutting down');
    this._endPeriodicCheckIn();
    return this._task;
  }

  get logger() {
    return this._endpoint.logger;
  }

  async allow() {
    this._desiredStopLevel = StopLevel.ESTOP_LEVEL_NONE;
    await this._checkIn();
  }

  async settleThenCut() {
    this._desiredStopLevel = StopLevel.ESTOP_LEVEL_SETTLE_THEN_CUT;
    await this._checkIn(this._endpoint.estopTimeout);
  }

  async stop() {
    this._desiredStopLevel = StopLevel.ESTOP_LEVEL_CUT;
    await this._checkIn(this._endpoint.estopTimeout);
  }

  /**
   * Stop checking into the robot estop system.
   */
  _endPeriodicCheckIn() {
    this.logger.debug('[ESTOP] Stopping check-in');
    this._endCheckInSignal = true;
    this._stopController.abort();
  }

  /**
   * Handle an error message; optionally disable the application.
   * GUI applications should override this function, to make sure the error_msg gets to the GUI.
   * @param {string} msg The error message
   * @param {boolean} disable Stop the check in
   */
  _error(msg, disable = false) {
    this._updateStatus(EstopKeepAlive.KeepAliveStatus.ERROR, msg);
    this.logger.error(msg);
    if (disable) {
      this._endPeriodicCheckIn();
      this._updateStatus(EstopKeepAlive.KeepAliveStatus.DISABLED, msg);
    }
  }

  /**
   * Handle an ok message.
   * GUI applications should override this function, to make sure the error_msg gets to the GUI.
   */
  _ok() {
    this._updateStatus(EstopKeepAlive.KeepAliveStatus.OK);
    this.logger.debug('[ESTOP] Check-in successful');
  }

  /**
   * Update the estop_keep_alive status by populating the queue, clearing old entries if the queue is full.
   * Note: this method is not thread safe because if called by multiple different threads it could
   * create a race condition which will raise a FullQueue exception. The EstopKeepAlive only uses
   * this in a single background thread for the _periodicCheckIn method.
   * @param {number} status The update status
   * @param {string} msg The update message
   */
  _updateStatus(status, msg = '') {
    if (this.statusQueue.full()) {
      // Remove an element to clear out the status queue for the new element.
      this.statusQueue.shift();
    }
    this.statusQueue.push([status, msg]);
  }

  /**
   * Check in, optionally specifying a non-standard RPC timeout.
   * @param {number} rpcTimeoutSec A timeout in seconds.
   */
  _checkIn(rpcTimeoutSec = null) {
    const timeoutMs = (rpcTimeoutSec ?? this._rpcTimeout) * 1000;
    // The desired level is read when the check-in starts, inside the critical section: a stop() queued
    // behind a periodic check-in is sent as CUT, with a fresh challenge.
    const run = () => this._endpoint.checkInAtLevel(this._desiredStopLevel, { timeout: timeoutMs });
    const checkIn = this._lock.then(run, run);
    this._lock = checkIn.catch(() => {});
    return checkIn;
  }

  /**
   * Send estop API CheckIn messages to robot estop system in loop.
   */
  async _periodicCheckIn() {
    this.logger.info('[ESTOP] Starting estop check-in');
    const { signal } = this._stopController;

    while (!this._endCheckInSignal && this._keepRunning()) {
      const execStartMs = nowMsec();

      let isError = false;

      try {
        await this._checkIn();
      } catch (e) {
        isError = true;
        if (e instanceof TimedOutError) {
          this._error(`[ESTOP] RPC took longer than ${this._rpcTimeout} seconds`);
        } else if (e instanceof RpcError) {
          this._error(`[ESTOP] Transport exception during check-in: ${_errorMessage(e)} (resuming check-in)`);
        } else if (e instanceof EndpointUnknownError) {
          // Disable ourself to show we cannot estop any longer.
          this._error(_errorMessage(e), true);
        } else {
          this.logger.warn(`[ESTOP] Generic exception during check-in: ${_errorMessage(e)} (resuming check-in)`);
        }
      }

      if (!isError) this._ok();

      const execMs = nowMsec() - execStartMs;
      const waitTimeMs = Math.max(this._checkInPeriod * 1_000 - execMs, 0);
      try {
        // Interrupted by shutdown(): the loop ends promptly and does not keep the process alive.
        await sleep(waitTimeMs, undefined, { signal });
      } catch (e) {
        break;
      }
    }
    this.logger.info('[ESTOP] Estop check-in stopped');
  }

  /**
   * The last stop level set by a check-in of the endpoint (null before the first one), like Python.
   * @type {?number}
   */
  get lastSetLevel() {
    return this._endpoint.lastSetLevel;
  }

  /**
   * The endpoint of the keep-alive. Should be used as read-only.
   * @type {EstopEndpoint}
   */
  get endpoint() {
    return this._endpoint;
  }

  /**
   * The client of the endpoint. Should be used as read-only.
   * @type {EstopClient}
   */
  get client() {
    return this._endpoint.client;
  }
}

/**
 * Returns true if robot is estopped, false otherwise.
 * @param {EstopClient} estopClient The EstopClient
 * @param {Object} [args] Passed to underlying RPC.
 * @returns {Promise<boolean>}
 */
async function isEstopped(estopClient, args) {
  const response = await estopClient.getStatus(args);
  return response.getStopLevel() !== StopLevel.ESTOP_LEVEL_NONE;
}

function responseFromChallenge(challenge) {
  return BigInt.asUintN(64, ~BigInt(challenge)).toString(10);
}

const _CHECK_IN_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_CHECK_IN_STATUS_TO_ERROR.set(estopPb.EstopCheckInResponse.Status.STATUS_OK, [null, null]);
_CHECK_IN_STATUS_TO_ERROR.set(estopPb.EstopCheckInResponse.Status.STATUS_ENDPOINT_UNKNOWN, [
  EndpointUnknownError,
  'The endpoint specified in the request is not registered.',
]);
_CHECK_IN_STATUS_TO_ERROR.set(estopPb.EstopCheckInResponse.Status.STATUS_INCORRECT_CHALLENGE_RESPONSE, [
  IncorrectChallengeResponseError,
  'The challenge and/or response was incorrect.',
]);

const _SET_CONFIG_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_SET_CONFIG_STATUS_TO_ERROR.set(estopPb.SetEstopConfigResponse.Status.STATUS_SUCCESS, [null, null]);
_SET_CONFIG_STATUS_TO_ERROR.set(estopPb.SetEstopConfigResponse.Status.STATUS_INVALID_ID, [
  InvalidIdError,
  'Tried to replace a EstopConfig, but provided bad ID.',
]);
_SET_CONFIG_STATUS_TO_ERROR.set(estopPb.SetEstopConfigResponse.Status.STATUS_MOTORS_ON, [
  MotorsOnError,
  'The operation is not allowed while motors are on.',
]);

const _DEREGISTER_ENDPOINT_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_DEREGISTER_ENDPOINT_STATUS_TO_ERROR.set(estopPb.DeregisterEstopEndpointResponse.Status.STATUS_SUCCESS, [null, null]);
_DEREGISTER_ENDPOINT_STATUS_TO_ERROR.set(estopPb.DeregisterEstopEndpointResponse.Status.STATUS_ENDPOINT_MISMATCH, [
  EndpointMismatchError,
  'Target endpoint did not match.',
]);
_DEREGISTER_ENDPOINT_STATUS_TO_ERROR.set(estopPb.DeregisterEstopEndpointResponse.Status.STATUS_CONFIG_MISMATCH, [
  ConfigMismatchError,
  'Registered to the wrong configuration.',
]);
_DEREGISTER_ENDPOINT_STATUS_TO_ERROR.set(estopPb.DeregisterEstopEndpointResponse.Status.STATUS_MOTORS_ON, [
  MotorsOnError,
  'The operation is not allowed while motors are on.',
]);

const _REGISTER_ENDPOINT_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_REGISTER_ENDPOINT_STATUS_TO_ERROR.set(estopPb.RegisterEstopEndpointResponse.Status.STATUS_SUCCESS, [null, null]);
_REGISTER_ENDPOINT_STATUS_TO_ERROR.set(estopPb.RegisterEstopEndpointResponse.Status.STATUS_ENDPOINT_MISMATCH, [
  EndpointMismatchError,
  'Target endpoint did not match.',
]);
_REGISTER_ENDPOINT_STATUS_TO_ERROR.set(estopPb.RegisterEstopEndpointResponse.Status.STATUS_CONFIG_MISMATCH, [
  ConfigMismatchError,
  'Registered to the wrong configuration.',
]);
_REGISTER_ENDPOINT_STATUS_TO_ERROR.set(estopPb.RegisterEstopEndpointResponse.Status.STATUS_INVALID_ENDPOINT, [
  InvalidEndpointError,
  'New endpoint was invalid.',
]);

const _checkInErrorFromResponse = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(response, response.getStatus(), estopPb.EstopCheckInResponse.Status, _CHECK_IN_STATUS_TO_ERROR),
  ),
);

function _checkInErrorFromResponseNoIncorrect(resp) {
  if (resp.getStatus() === estopPb.EstopCheckInResponse.Status.STATUS_INCORRECT_CHALLENGE_RESPONSE) return null;
  return _checkInErrorFromResponse(resp);
}

const _setConfigErrorFromResponse = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(response, response.getStatus(), estopPb.SetEstopConfigResponse.Status, _SET_CONFIG_STATUS_TO_ERROR),
  ),
);

const _deregisterEndpointErrorFromResponse = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      estopPb.DeregisterEstopEndpointResponse.Status,
      _DEREGISTER_ENDPOINT_STATUS_TO_ERROR,
    ),
  ),
);

const _registerEndpointErrorFromResponse = handleCommonHeaderErrors(
  handleUnsetStatusError('STATUS_UNKNOWN')(response =>
    errorFactory(
      response,
      response.getStatus(),
      estopPb.RegisterEstopEndpointResponse.Status,
      _REGISTER_ENDPOINT_STATUS_TO_ERROR,
    ),
  ),
);

function _newEndpointFromRegisterResponse(response) {
  return response.getNewEndpoint();
}

function _activeConfigFromConfigResponse(response) {
  return response.getActiveConfig();
}

function _challengeFromCheckInResponse(response) {
  return response.getChallenge();
}

function _estopSysStatusFromResponse(response) {
  return response.getStatus();
}

module.exports = {
  StopLevel,
  EstopResponseError,
  EndpointUnknownError,
  IncorrectChallengeResponseError,
  EndpointMismatchError,
  ConfigMismatchError,
  InvalidEndpointError,
  InvalidIdError,
  MotorsOnError,
  EstopClient,
  EstopEndpoint,
  EstopKeepAlive,
  isEstopped,
  responseFromChallenge,
};

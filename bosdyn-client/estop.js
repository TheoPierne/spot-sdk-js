'use strict';

const process = require('node:process');
const { setImmediate, clearImmediate } = require('node:timers');
const { setTimeout: sleep } = require('node:timers/promises');
const Duration = require('google-protobuf/google/protobuf/duration_pb');

const { BaseClient, common_header_errors, error_factory } = require('./common');
const { ResponseError, RpcError, TimedOutError } = require('./exceptions');
const { LoggerUtil } = require('./loggerUtil');

const { Queue } = require('../bosdyn-core/queue');
const estop_pb = require('../bosdyn/api/estop_pb');
const estop_service_grpc_pb = require('../bosdyn/api/estop_service_grpc_pb');

const StopLevel = estop_pb.EstopStopLevel;

class ValueError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'ValueError';
  }
}

class EstopResponseError extends ResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'EstopResponseError';
  }
}

class EndpointUnknownError extends EstopResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'EndpointUnknownError';
  }
}

class IncorrectChallengeResponseError extends EstopResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'IncorrectChallengeResponseError';
  }
}

class EndpointMismatchError extends EstopResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'EndpointMismatchError';
  }
}

class ConfigMismatchError extends EstopResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'ConfigMismatchError';
  }
}

class InvalidEndpointError extends EstopResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'InvalidEndpointError';
  }
}

class InvalidIdError extends EstopResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'InvalidIdError';
  }
}

class MotorsOnError extends EstopResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'MotorsOnError';
  }
}

class EstopClient extends BaseClient {
  static default_service_name = 'estop';
  static service_type = 'bosdyn.api.EstopService';

  constructor(name = `EstopClient - PID: ${process.pid}`) {
    super(estop_service_grpc_pb.EstopServiceClient, name);
  }

  register(target_config_id, endpoint, args) {
    const req = EstopClient._build_register_request(target_config_id, endpoint);
    return this.call(
      this._stub.registerEstopEndpoint,
      req,
      _new_endpoint_from_register_response,
      _register_endpoint_error_from_response,
      args,
    );
  }

  deregister(target_config_id, endpoint, args) {
    const req = EstopClient._build_deregister_request(target_config_id, endpoint);
    return this.call(this._stub.deregisterEstopEndpoint, req, null, _deregister_endpoint_error_from_response, args);
  }

  get_config(args) {
    return this.call(
      this._stub.getEstopConfig,
      new estop_pb.GetEstopConfigRequest(),
      _active_config_from_config_response,
      common_header_errors,
      args,
    );
  }

  set_config(config, target_config_id, args) {
    const req = new estop_pb.SetEstopConfigRequest().setConfig(config).setTargetConfigId(target_config_id);
    return this.call(
      this._stub.setEstopConfig,
      req,
      _active_config_from_config_response,
      _set_config_error_from_response,
      args,
    );
  }

  get_status(args) {
    return this.call(
      this._stub.getEstopSystemStatus,
      new estop_pb.GetEstopSystemStatusRequest(),
      _estop_sys_status_from_response,
      common_header_errors,
      args,
    );
  }

  check_in(stop_level, endpoint, challenge, response, suppress_incorrect = false, args) {
    const req = EstopClient._build_check_in_request(stop_level, endpoint, challenge, response);
    const err_from_resp = EstopClient._choose_check_in_err_func(suppress_incorrect);
    return this.call(this._stub.estopCheckIn, req, _challenge_from_check_in_response, err_from_resp, args);
  }

  static _build_check_in_request(stop_level, endpoint, challenge, response) {
    if (endpoint instanceof EstopEndpoint) endpoint = endpoint.to_proto();
    const req = new estop_pb.EstopCheckInRequest()
      .setEndpoint(endpoint)
      .setChallenge(challenge)
      .setResponse(response)
      .setStopLevel(stop_level);
    return req;
  }

  static _build_register_request(target_config_id, endpoint) {
    if (endpoint instanceof EstopEndpoint) endpoint = endpoint.to_proto();
    const req = new estop_pb.RegisterEstopEndpointRequest()
      .setTargetConfigId(target_config_id)
      .setNewEndpoint(endpoint)
      .setTargetEndpoint(new estop_pb.EstopEndpoint().setRole(endpoint.role));
    return req;
  }

  static _build_deregister_request(target_config_id, endpoint) {
    if (endpoint instanceof EstopEndpoint) endpoint = endpoint.to_proto();
    const req = estop_pb
      .DeregisterEstopEndpointRequest()
      .setTargetEndpoint(endpoint)
      .setTargetConfigId(target_config_id);
    return req;
  }

  static _choose_check_in_err_func(suppress_incorrect) {
    return suppress_incorrect ? _check_in_error_from_response_no_incorrect : _check_in_error_from_response;
  }
}

class EstopEndpoint {
  REQUIRED_ROLE = 'PDB_rooted';

  constructor(
    client,
    name,
    estop_timeout,
    role = this.REQUIRED_ROLE,
    first_checkin = true,
    estop_cut_power_timeout = null,
  ) {
    this.client = client;
    this.role = role;
    this.estop_timeout = estop_timeout;
    this.estop_cut_power_timeout = estop_cut_power_timeout;
    this._challenge = null;
    this._name = name;
    this._unique_id = null;
    this._config_id = null;
    this._locked_first_checkin = first_checkin;

    this.logger = LoggerUtil.getLogger(this._name);
  }

  toString() {
    return this.estop_cut_power_timeout === null
      ? `${this._name} (timeout ${Math.floor(this.estop_timeout / 1000)}s)`
      : `${this._name} (timeout ${Math.floor(this.estop_timeout / 1000)}s, cut_power_timeout ${
          this.estop_cut_power_timeout
        }s)`;
  }

  _first_checkin() {
    return this._locked_first_checkin;
  }

  _set_first_checkin(val) {
    this._locked_first_checkin = val;
  }

  set_challenge(challenge) {
    this._challenge = challenge;
  }

  get_challenge() {
    return this._challenge;
  }

  async force_simple_setup() {
    const new_config = new estop_pb.EstopConfig();
    new_config.addEndpoints(this.to_proto());

    let active_config = await this.client.get_config();
    active_config = await this.client.set_config(new_config, active_config.getUniqueId());
    this._unique_id = active_config.getEndpointsList()[0].getUniqueId();
    await this.register(active_config.getUniqueId());
  }

  async stop(args) {
    this.logger.debug('[ESTOP] Stopping');
    await this.check_in_at_level(StopLevel.ESTOP_LEVEL_CUT, args);
  }

  async settle_then_cut(args) {
    this.logger.debug('[ESTOP] Stopping with SETTLE_THEN_CUT');
    await this.check_in_at_level(StopLevel.ESTOP_LEVEL_SETTLE_THEN_CUT, args);
  }

  async allow(args) {
    this.logger.debug('[ESTOP] Releasing');
    await this.check_in_at_level(StopLevel.ESTOP_LEVEL_NONE, args);
  }

  async check_in_at_level(level, args) {
    try {
      const challenge = await this.client.check_in(
        level,
        this,
        this.get_challenge(),
        this._response(),
        this._first_checkin(),
        args,
      );
      this.set_challenge(challenge);
    } catch (e) {
      this.set_challenge(_challenge_from_check_in_response(e.response));
      throw e;
    }
    this._set_first_checkin(false);
  }

  async deregister(args) {
    this.logger.debug('[ESTOP] Deregistering');
    await this.client.deregister(this._config_id, this);
  }

  async register(target_config_id, args) {
    this.logger.debug(`[ESTOP] Registering to ${target_config_id}`);
    const new_endpoint = await this.client.register(target_config_id, this);
    this._config_id = target_config_id;
    this.from_proto(new_endpoint);
    this.logger.debug('[ESTOP] Doing check-in to seed challenge...');
    await this.stop();
  }

  from_proto(proto) {
    if (this._name !== proto.getName()) {
      this.logger.info(`[ESTOP] Changing name to ${proto.getName()}`);
      this._name = proto.getName();
      this.logger = LoggerUtil.getLogger(this._name);
    }
    this.role = proto.getRole();
    this.estop_timeout = proto.getTimeout().getSeconds() + proto.getTimeout().getNanos() * 1e-9;
    this._unique_id = proto.getUniqueId();
    if (proto.getCutPowerTimeout() === null) {
      this.estop_cut_power_timeout = null;
    } else {
      this.estop_cut_power_timeout =
        proto.getCutPowerTimeout().getSeconds() + proto.getCutPowerTimeout().getNanos() * 1e-9;
    }
  }

  to_proto() {
    const t_seconds = Math.floor(this.estop_timeout);
    const t_nanos = Math.floor((this.estop_timeout - t_seconds) * 1e9);
    if (this.estop_cut_power_timeout === null) {
      const req = new estop_pb.EstopEndpoint()
        .setRole(this.role)
        .setName(this._name)
        .setUniqueId(this._unique_id)
        .setTimeout(new Duration.Duration([t_seconds, t_nanos]));
      return req;
    } else {
      const cpt_seconds = Math.floor(this.estop_cut_power_timeout);
      const cpt_nanos = Math.floor((this.estop_cut_power_timeout - cpt_seconds) * 1e9);
      const req = new estop_pb.EstopEndpoint()
        .setRole(this.role)
        .setName(this._name)
        .setUniqueId(this._unique_id)
        .setTimeout(new Duration.Duration([t_seconds, t_nanos]))
        .setCutPowerTimeout(new Duration.Duration([cpt_seconds, cpt_nanos]));
      return req;
    }
  }

  _response() {
    const challenge = this.get_challenge();
    return challenge === null ? null : response_from_challenge(challenge);
  }

  get unique_id() {
    return this._unique_id;
  }
}

class EstopKeepAlive {
  static KeepAliveStatus = {
    OK: 0,
    ERROR: 1,
    DISABLED: 2,
  };

  constructor(
    endpoint,
    rpc_timeout_seconds = null,
    rpc_interval_seconds = null,
    keep_running_cb = null,
    max_status_queue_size = 20,
  ) {
    this._endpoint = endpoint;
    this._end_check_in_signal = false;
    this._desired_stop_level = StopLevel.ESTOP_LEVEL_NONE;
    this._rpc_timeout = rpc_timeout_seconds || this._endpoint.estop_timeout;
    this._check_in_period = rpc_interval_seconds || this._endpoint.estop_timeout / 3.0;
    if (this._rpc_timeout <= 0) {
      throw new ValueError(`[ESTOP] Invalid rpc_timeout_seconds "${this._rpc_timeout}"`);
    }
    if (this._check_in_period < 0) {
      throw new ValueError(`[ESTOP] Invalid rpc_interval_seconds "${this._check_in_period}"`);
    }

    this._keep_running = keep_running_cb || (() => true);

    this.logger.debug(`[ESTOP] New ${this.constructor.name} for endpoint "${this._endpoint}"`);

    this.status_queue = new Queue({ maxSize: max_status_queue_size });
    this._update_status(EstopKeepAlive.KeepAliveStatus.OK);

    try {
      this._check_in();
    } catch (e) {
      this.logger.warn(`[ESTOP] Estop initial check-in exception:\n${e}\n`);
    }

    this._thread = setImmediate(this._periodic_check_in.bind(this)).unref();

    // Handle node.js shutdown
    process.stdin.resume();
    process.on('exit', this.shutdown.bind(this));
  }

  shutdown() {
    this.logger.debug('[ESTOP] Shutting down');
    this._end_periodic_check_in();
  }

  get logger() {
    return this._endpoint.logger;
  }

  allow() {
    this._desired_stop_level = StopLevel.ESTOP_LEVEL_NONE;
    this._check_in();
  }

  settle_then_cut() {
    this._desired_stop_level = StopLevel.ESTOP_LEVEL_SETTLE_THEN_CUT;
    this._check_in(this._endpoint.estop_timeout);
  }

  stop() {
    this._desired_stop_level = StopLevel.ESTOP_LEVEL_CUT;
    this._check_in(this._endpoint.estop_timeout);
  }

  _end_periodic_check_in() {
    this.logger.debug('[ESTOP] Stopping check-in');
    this._end_check_in_signal = true;
    clearImmediate(this._thread);
  }

  _error(msg, exception = null, disable = false) {
    this._update_status(EstopKeepAlive.KeepAliveStatus.ERROR, msg);
    this.logger.error(msg);
    if (disable) {
      this._end_periodic_check_in();
      this._update_status(EstopKeepAlive.KeepAliveStatus.DISABLED, msg);
    }
  }

  _ok() {
    this._update_status(EstopKeepAlive.KeepAliveStatus.OK);
    this.logger.debug('[ESTOP] Check-in successful');
  }

  _update_status(status, msg = '') {
    if (this.status_queue.full()) {
      // Remove an element to clear out the status queue for the new element.
      this.status_queue.shift();
    }
    this.status_queue.push([status, msg]);
  }

  async _check_in(rpc_timeout = null) {
    // Assuming that _rpc_timeout is in second so converted in millisecond
    rpc_timeout = rpc_timeout || this._rpc_timeout * 1000;
    await this._endpoint.check_in_at_level(this._desired_stop_level, { timeout: rpc_timeout });
  }

  async _periodic_check_in() {
    this.logger.info('[ESTOP] Starting estop check-in');
    /* eslint-disable no-await-in-loop, no-constant-condition */
    while (true) {
      const exec_start = Date.now();

      if (!this._keep_running()) break;

      let is_error = false;

      try {
        await this._check_in();
      } catch (e) {
        is_error = true;
        if (e instanceof TimedOutError) {
          this._error(`[ESTOP] RPC took longer than ${this._rpc_timeout} seconds`, e);
        } else if (e instanceof RpcError) {
          this._error(`[ESTOP] Transport exception during check-in: \n${e}\n (resuming check-in)`, e);
        } else if (e instanceof EndpointUnknownError) {
          this._error(e.toString(), e, true);
        } else {
          this.logger.warn(`[ESTOP] Generic exception during check-in: \n${e}\n (resuming check-in)`);
        }
      }

      if (!is_error) this._ok();

      if (this._end_check_in_signal) break;

      const exec_sec = Date.now() - exec_start;
      const waitTime = this._check_in_period - exec_sec;
      if (Math.sign(waitTime) === 1) {
        await sleep(waitTime);
      } else {
        break;
      }
    }
    this.logger.info('[ESTOP] Estop check-in stopped');
  }

  get endpoint() {
    return this._endpoint;
  }

  get client() {
    return this._endpoint.client;
  }
}

async function is_estopped(estop_client, args) {
  const response = await estop_client.get_status(args);
  return response.getStopLevel() !== StopLevel.ESTOP_LEVEL_NONE;
}

function response_from_challenge(challenge) {
  return BigInt.asUintN(64, BigInt(~challenge)).toString(10);
}

const _CHECK_IN_STATUS_TO_ERROR = {
  [estop_pb.EstopCheckInResponse.Status.STATUS_OK]: [null, null],
  [estop_pb.EstopCheckInResponse.StatusSTATUS_ENDPOINT_UNKNOWN]: [
    EndpointUnknownError,
    'The endpoint specified in the request is not registered.',
  ],
  [estop_pb.EstopCheckInResponse.Status.STATUS_INCORRECT_CHALLENGE_RESPONSE]: [
    IncorrectChallengeResponseError,
    'The challenge and/or response was incorrect.',
  ],
};

const _SET_CONFIG_STATUS_TO_ERROR = {
  [estop_pb.SetEstopConfigResponse.Status.STATUS_SUCCESS]: [null, null],
  [estop_pb.SetEstopConfigResponse.Status.STATUS_INVALID_ID]: [
    InvalidIdError,
    'Tried to replace a EstopConfig, but provided bad ID.',
  ],
  [estop_pb.SetEstopConfigResponse.Status.STATUS_MOTORS_ON]: [
    MotorsOnError,
    'The operation is not allowed while motors are on.',
  ],
};

const _DEREGISTER_ENDPOINT_STATUS_TO_ERROR = {
  [estop_pb.DeregisterEstopEndpointResponse.Status.STATUS_SUCCESS]: [null, null],
  [estop_pb.DeregisterEstopEndpointResponse.Status.STATUS_ENDPOINT_MISMATCH]: [
    EndpointMismatchError,
    'Target endpoint did not match.',
  ],
  [estop_pb.DeregisterEstopEndpointResponse.Status.STATUS_CONFIG_MISMATCH]: [
    ConfigMismatchError,
    'Registered to the wrong configuration.',
  ],
};

const _REGISTER_ENDPOINT_STATUS_TO_ERROR = {
  [estop_pb.RegisterEstopEndpointResponse.Status.STATUS_SUCCESS]: [null, null],
  [estop_pb.RegisterEstopEndpointResponse.Status.STATUS_ENDPOINT_MISMATCH]: [
    EndpointMismatchError,
    'Target endpoint did not match.',
  ],
  [estop_pb.RegisterEstopEndpointResponse.Status.STATUS_CONFIG_MISMATCH]: [
    ConfigMismatchError,
    'Registered to the wrong configuration.',
  ],
  [estop_pb.RegisterEstopEndpointResponse.Status.STATUS_INVALID_ENDPOINT]: [
    InvalidEndpointError,
    'New endpoint was invalid',
  ],
};

function _check_in_error_from_response(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(estop_pb.EstopCheckInResponse.Status),
    _CHECK_IN_STATUS_TO_ERROR,
  );
}

function _check_in_error_from_response_no_incorrect(resp) {
  if (resp.getStatus() === estop_pb.EstopCheckInResponse.Status.STATUS_INCORRECT_CHALLENGE_RESPONSE) return null;
  return _check_in_error_from_response(resp);
}

function _set_config_error_from_response(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(estop_pb.SetEstopConfigResponse.Status),
    _SET_CONFIG_STATUS_TO_ERROR,
  );
}

function _deregister_endpoint_error_from_response(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(estop_pb.DeregisterEstopEndpointResponse.Status),
    _DEREGISTER_ENDPOINT_STATUS_TO_ERROR,
  );
}

function _register_endpoint_error_from_response(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(estop_pb.RegisterEstopEndpointResponse.Status),
    _REGISTER_ENDPOINT_STATUS_TO_ERROR,
  );
}

function _new_endpoint_from_register_response(response) {
  return response.getNewEndpoint();
}

function _active_config_from_config_response(response) {
  return response.getActiveConfig();
}

function _challenge_from_check_in_response(response) {
  return response.getChallenge();
}

function _estop_sys_status_from_response(response) {
  return response.getStatus();
}

module.exports = {
  EstopResponseError,
  EndpointUnknownError,
  IncorrectChallengeResponseError,
  EndpointMismatchError,
  ConfigMismatchError,
  InvalidEndpointError,
  InvalidIdError,
  EstopClient,
  EstopEndpoint,
  EstopKeepAlive,
  is_estopped,
};

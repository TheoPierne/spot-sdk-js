'use strict';

const { setImmediate, clearImmediate } = require('node:timers');
const { setTimeout: sleep } = require('node:timers/promises');
const { BaseClient, error_factory } = require('./common');
const { ResponseError, TimedOutError, RetryableUnavailableError } = require('./exceptions');

const directory_pb = require('../bosdyn/api/directory_pb');
const directory_registration_pb = require('../bosdyn/api/directory_registration_pb');
const directory_registration_service_grpc_pb = require('../bosdyn/api/directory_registration_service_grpc_pb');

class DirectoryRegistrationResponseError extends ResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'DirectoryRegistrationResponseError';
  }
}

class ServiceAlreadyExistsError extends DirectoryRegistrationResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'ServiceAlreadyExistsError';
  }
}

class ServiceDoesNotExistError extends DirectoryRegistrationResponseError {
  constructor(msg) {
    super(msg);
    this.name = 'ServiceDoesNotExistError';
  }
}

class DirectoryRegistrationClient extends BaseClient {
  static default_service_name = 'directory-registration';
  static service_type = 'bosdyn.api.DirectoryRegistrationService';

  constructor() {
    super(directory_registration_service_grpc_pb.DirectoryRegistrationServiceClient);
  }

  register(
    name,
    service_type,
    authority,
    host_ip,
    port,
    user_token_required = true,
    application_token_required = false,
    liveness_timeout_secs = 0,
    args,
  ) {
    if (application_token_required) {
      // eslint-disable-next-line
      console.warn('[DIRECTORY REGISTRATION] The application_token_required parameter has been deprecated and will have no effect.');
    }

    const service_entry = new directory_pb.ServiceEntry()
      .setName(name)
      .setType(service_type)
      .setAuthority(authority)
      .setUserTokenRequired(user_token_required)
      .setLivenessTimeoutSecs(liveness_timeout_secs);

    const endpoint = new directory_pb.Endpoint().setHostIp(host_ip).setPort(port);

    const req = new directory_registration_pb.RegisterServiceRequest()
      .setEndpoint(endpoint)
      .setServiceEntry(service_entry);

    return this.call(this._stub.registerService, req, null, _directory_register_error, args);
  }

  update(
    name,
    service_type,
    authority,
    host_ip,
    port,
    user_token_required = true,
    application_token_required = false,
    liveness_timeout_secs = 0,
    args,
  ) {
    if (application_token_required) {
      // eslint-disable-next-line
      console.warn('[DIRECTORY REGISTRATION] The application_token_required parameter has been deprecated and will have no effect.');
    }

    const service_entry = new directory_pb.ServiceEntry()
      .setName(name)
      .setType(service_type)
      .setAuthority(authority)
      .setUserTokenRequired(user_token_required)
      .setLivenessTimeoutSecs(liveness_timeout_secs);

    const endpoint = new directory_pb.Endpoint().setHostIp(host_ip).setPort(port);

    const req = new directory_registration_pb.UpdateServiceRequest()
      .setEndpoint(endpoint)
      .setServiceEntry(service_entry);

    return this.call(this._stub.updateService, req, null, _directory_update_error, args);
  }

  unregister(name, args) {
    const req = new directory_registration_pb.UnregisterServiceRequest().setServiceName(name);
    return this.call(this._stub.unregisterService, req, null, _directory_unregister_error, args);
  }
}

const _REGISTER_STATUS_TO_ERROR = {
  STATUS_OK: [null, null],
  STATUS_ALREADY_EXISTS: [ServiceAlreadyExistsError, 'The service already exists on the robot.'],
};

const _UPDATE_STATUS_TO_ERROR = {
  STATUS_OK: [null, null],
  STATUS_NONEXISTENT_SERVICE: [ServiceDoesNotExistError, 'The specified service does not exist on the robot.'],
};

const _UNREGISTER_STATUS_TO_ERROR = {
  STATUS_OK: [null, null],
  STATUS_NONEXISTENT_SERVICE: [ServiceDoesNotExistError, 'The specified service does not exist on the robot.'],
};

function _directory_register_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(directory_registration_pb.RegisterServiceResponse.Status),
    _REGISTER_STATUS_TO_ERROR,
  );
}

function _directory_update_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(directory_registration_pb.UpdateServiceResponse.Status),
    _UPDATE_STATUS_TO_ERROR,
  );
}

function _directory_unregister_error(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(directory_registration_pb.UnregisterServiceResponse.Status),
    _UNREGISTER_STATUS_TO_ERROR,
  );
}

async function reset_service_registration(
  directory_registration_client,
  name,
  service_type,
  authority,
  host_ip,
  port,
  user_token_required = true,
  liveness_timeout_secs = 0,
) {
  try {
    await directory_registration_client.unregister(name);
  } catch (e) {
    // Pass
  }

  await directory_registration_client.register(
    name,
    service_type,
    authority,
    host_ip,
    port,
    user_token_required,
    false,
    liveness_timeout_secs,
  );
}

class DirectoryRegistrationKeepAlive {
  constructor(dir_reg_client, logger = null, rpc_timeout_seconds = null, rpc_interval_seconds = 30_000) {
    this.authority = null;
    this.directory_name = null;
    this.host = null;
    this.logger = logger || console;
    this.port = null;
    this.service_type = null;
    this.dir_reg_client = dir_reg_client;

    this._rpc_timeout = rpc_timeout_seconds;
    this._reregister_period = rpc_interval_seconds;

    this._loopStart = false;
    this._loop = null;
  }

  async start(
    directory_name,
    service_type,
    authority,
    host,
    port,
    liveness_timeout_secs = null,
    user_token_required = true,
    reset_service = true,
  ) {
    if (liveness_timeout_secs === null) {
      liveness_timeout_secs = this._reregister_period * 2.5;
    }
    if (reset_service) {
      await reset_service_registration(
        this.dir_reg_client,
        directory_name,
        service_type,
        authority,
        host,
        port,
        user_token_required,
        liveness_timeout_secs,
      );
    } else {
      try {
        await this.dir_reg_client.register(
          directory_name,
          service_type,
          authority,
          host,
          port,
          user_token_required,
          false,
          liveness_timeout_secs,
        );
      } catch (e) {
        await this.dir_reg_client.update(
          directory_name,
          service_type,
          authority,
          host,
          port,
          user_token_required,
          false,
          liveness_timeout_secs,
        );
      }
    }
    this.logger.info(`[DIRECTORY REGISTRATION] ${directory_name} service registered/updated.`);

    this.authority = authority;
    this.directory_name = directory_name;
    this.host = host;
    this.port = port;
    this.service_type = service_type;
    this.liveness_timeout_secs = liveness_timeout_secs;

    if (this._loopStart) {
      clearImmediate(this._loop);
    }
    this._loopStart = true;
    this._loop = setImmediate(this._periodic_reregister.bind(this)).unref();

    return this;
  }

  is_alive() {
    return this._loopStart;
  }

  shutdown() {
    clearImmediate(this._loop);
    this._loopStart = false;
  }

  async unregister() {
    this.logger.info(`[DIRECTORY REGISTRATION] Unregistering ${this.directory_name} from directory`);
    await this.dir_reg_client.unregister(this.directory_name);
  }

  _periodic_reregister() {
    this.logger.info(`[DIRECTORY REGISTRATION] Starting directory registration loop for ${this.directory_name}`);
    const $this = this;
    (async function loop() {
      if ($this._loopStart) {
        const exec_start = Date.now();
        try {
          await $this.dir_reg_client.register(
            $this.directory_name,
            $this.service_type,
            $this.authority,
            $this.host,
            $this.port,
            true,
            false,
            $this.liveness_timeout_secs,
            { timeout: $this._rpc_timeout },
          );
        } catch (e) {
          if (e instanceof ServiceAlreadyExistsError) {
            // Pass
          } else if (e instanceof RetryableUnavailableError) {
            // Pass
          } else if (e instanceof TimedOutError) {
            $this.logger.warn(`[DIRECTORY REGISTRATION] Timed out, timeout set to "${$this._rpc_timeout}"`);
          } else {
            $this.logger.log('[DIRECTORY REGISTRATION] Caught general exception');
          }
        }
        const exec_sec = Date.now() - exec_start;
        await sleep($this._reregister_period - exec_sec);
        loop();
      }
    }()); // eslint-disable-line
  }
}

module.exports = {
  DirectoryRegistrationResponseError,
  ServiceAlreadyExistsError,
  ServiceDoesNotExistError,
  DirectoryRegistrationClient,
  DirectoryRegistrationKeepAlive,
};

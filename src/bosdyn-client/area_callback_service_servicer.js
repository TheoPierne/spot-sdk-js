/**
 * @file The implementation of the area callback service: it answers the requests of GraphNav with a new region handler
 * for each area callback region, like bosdyn.client.area_callback_service_servicer in Python.
 */

'use strict';

const jspb = require('google-protobuf');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');

const { AreaCallbackRegionHandlerBase } = require('./area_callback_region_handler_base');
const { DataBufferClient } = require('./data_buffer');
const { Lease, LeaseNotOwnedByWallet, NoSuchLease } = require('./lease');
const { LeaseValidator, LeaseValidatorResponseProcessor } = require('./lease_validator');
const { LoggerUtil } = require('./logger_util');
const { ResponseContext } = require('./server_util');
const { createValueValidator } = require('./service_customization_helpers');

const {
  AreaCallbackInformationResponse,
  BeginCallbackResponse,
  BeginControlResponse,
  EndCallbackResponse,
  RouteChangeResponse,
  UpdateCallbackResponse,
} = require('../bosdyn/api/graph_nav/area_callback_pb');
const headerPb = require('../bosdyn/api/header_pb');
const leasePb = require('../bosdyn/api/lease_pb');
const { DictParam } = require('../bosdyn/api/service_customization_pb');
const { Event } = require('../bosdyn-core/event');
const { Lock } = require('../bosdyn-core/lock');
const { timestampToSec } = require('../bosdyn-core/util');

/**
 * @typedef {import('./area_callback_service_utils').AreaCallbackServiceConfig} AreaCallbackServiceConfig
 * @typedef {import('./robot').Robot} Robot
 * @typedef {import('../bosdyn/api/graph_nav/area_callback_pb').BeginCallbackRequest} BeginCallbackRequest
 */

const _LOGGER = LoggerUtil.getLogger('area_callback_service_servicer');

/**
 * The run() of a region handler, like the thread of Python: it starts at once, and is alive until run() returns.
 * @private
 */
class _RunThread {
  /**
   * @param {AreaCallbackRegionHandlerBase} handler
   * @param {Event} shutdownEvent Event that signals run() to shut down.
   */
  constructor(handler, shutdownEvent) {
    this._finished = new Event();
    /** @type {Promise<void>} Resolves once run() has returned. */
    this.done = Promise.resolve()
      .then(() => handler.internalRunWrapper(shutdownEvent))
      .catch(err => {
        // Like an exception in a thread of Python (IncorrectUsage): printed, and the thread ends.
        _LOGGER.error(`Exception in the run() of the area callback: ${err?.stack ?? err}`);
      })
      .finally(() => this._finished.set());
  }

  /** @returns {boolean} True until run() has returned. */
  isAlive() {
    return !this._finished.isSet();
  }

  /**
   * Wait until run() returns, like the join(timeout) of Python.
   * @param {?number} [timeout=null] Maximum time to wait in seconds, null for no limit.
   * @returns {Promise<void>}
   */
  async join(timeout = null) {
    await this._finished.wait(timeout === null ? null : timeout * 1000);
  }
}

/**
 * Implementation of area callback service: add it to a gRPC server with AreaCallbackServiceService (e.g. with
 * runService() of area_callback_service_runner).
 *
 * The RPCs wait for the clients of the robot (await ready): the constructor of Python creates them.
 */
class AreaCallbackServiceServicer {
  static SERVICE_TYPE = 'bosdyn.api.graph_nav.AreaCallbackService';

  /**
   * @param {Robot} robot The Robot object used to create service clients.
   * @param {AreaCallbackServiceConfig} config The AreaCallbackServiceConfig defining the data for the
   * AreaCallbackInformation response.
   * @param {function(new: AreaCallbackRegionHandlerBase, AreaCallbackServiceConfig, Robot)|
   * function(AreaCallbackServiceConfig, Robot): AreaCallbackRegionHandlerBase} areaCallbackBuilderFn Class or
   * function to create the AreaCallbackRegionHandlerBase subclass that implements the details of the callback.
   * Usually this will simply be the class itself.
   */
  constructor(robot, config, areaCallbackBuilderFn) {
    this.areaCallbackServiceConfig = config;
    this.areaCallbackBuilderFn = areaCallbackBuilderFn;
    /** @type {?AreaCallbackRegionHandlerBase} */
    this.areaCallbackRegionHandler = null;
    /** @type {?_RunThread} */
    this.areaCallbackActiveThread = null;
    /** @type {?Event} */
    this.areaCallbackActiveThreadEvent = null;
    this.robot = robot;
    this.paramValidator = createValueValidator(
      this.areaCallbackServiceConfig.areaCallbackInformation.getCustomParams() ?? new DictParam.Spec(),
    );

    this._lock = new Lock();
    this._nextCommandId = 1;
    this._activeCommandId = null;
    this._rpcLogger = null;
    this._leaseValidator = new LeaseValidator(this.robot);
    // In seconds.
    this._shutdownTimeout = 5;
    this.robot.responseProcessors.push(new LeaseValidatorResponseProcessor(this._leaseValidator));

    /**
     * Resolves once the clients of the robot are created.
     * @type {Promise<void>}
     */
    this.ready = this._init();
    // Its errors are reported by the RPCs and to the callers awaiting it: not an unhandled rejection.
    this.ready.catch(() => undefined);
  }

  async _init() {
    this._rpcLogger = await this.robot.ensureClient(DataBufferClient.defaultServiceName);
    await this._leaseValidator.initialize();
  }

  /**
   * Handles an RPC: the response of handler, or its error.
   * @param {import('@grpc/grpc-js').ServerUnaryCall} call
   * @param {Function} callback
   * @param {function(*): Promise<*>} handler Returns the response for the request.
   * @returns {Promise<void>}
   * @private
   */
  async _handle(call, callback, handler) {
    let response;
    try {
      await this.ready;
      response = await handler(call.request);
    } catch (e) {
      _LOGGER.error(`Failed to handle ${call.getPath?.() ?? 'the RPC'}: ${e?.stack ?? e}`);
      callback(e);
      return;
    }
    callback(null, response);
  }

  /**
   * Return the configured AreaCallbackInformation.
   * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the AreaCallbackInformationRequest.
   * @param {Function} callback Receives the AreaCallbackInformationResponse.
   */
  areaCallbackInformation(call, callback) {
    return this._handle(call, callback, async request => {
      const response = new AreaCallbackInformationResponse();
      await new ResponseContext(response, request, this._rpcLogger).run(() =>
        this._lock.run(() => {
          response.setInfo(this.areaCallbackServiceConfig.areaCallbackInformation.clone());
        }),
      );
      return response;
    });
  }

  /**
   * Begin the callback in a new region.
   * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the BeginCallbackRequest.
   * @param {Function} callback Receives the BeginCallbackResponse.
   */
  beginCallback(call, callback) {
    return this._handle(call, callback, async request => {
      _LOGGER.info('Received BeginCallback');
      // Python logs a copy of the request without logBeginCallbackData, but the copy has the same data.
      const response = new BeginCallbackResponse();
      await new ResponseContext(response, request, this._rpcLogger).run(() =>
        this._lock.run(async () => {
          const paramError = this.paramValidator(request.getCustomParams() ?? new DictParam());
          if (paramError) {
            response.setStatus(BeginCallbackResponse.Status.STATUS_CUSTOM_PARAMS_ERROR);
            response.setCustomParamError(paramError.clone());
            return;
          }
          if (await this._isExpired(request.getEndTime())) {
            response.setStatus(BeginCallbackResponse.Status.STATUS_EXPIRED_END_TIME);
            return;
          }
          await this._beginCallbackRegionHandler(request, response);
          if (response.getStatus() === BeginCallbackResponse.Status.STATUS_OK) {
            this._startActiveThread();
            _LOGGER.info(`Created thread for command id ${response.getCommandId()}`);
          }
        }),
      );
      return response;
    });
  }

  /**
   * @param {BeginCallbackRequest} request
   * @param {BeginCallbackResponse} response
   * @returns {Promise<void>}
   * @private
   */
  async _beginCallbackRegionHandler(request, response) {
    this.areaCallbackRegionHandler = this._buildRegionHandler();
    this.areaCallbackRegionHandler.internalSetEndTime(timestampToSec(request.getEndTime() ?? new Timestamp()));
    response.setStatus(await this.areaCallbackRegionHandler.begin(request));
    response.setCommandId(this._nextCommandId);
    this._activeCommandId = this._nextCommandId;
    this._nextCommandId += 1;
    this.areaCallbackRegionHandler.internalBeginComplete();
  }

  /**
   * The region handler of areaCallbackBuilderFn: a class (a Python class is a function), or a function.
   * @returns {AreaCallbackRegionHandlerBase}
   * @private
   */
  _buildRegionHandler() {
    const Builder = this.areaCallbackBuilderFn;
    const isClass =
      Builder === AreaCallbackRegionHandlerBase || Builder.prototype instanceof AreaCallbackRegionHandlerBase;
    return isClass
      ? new Builder(this.areaCallbackServiceConfig, this.robot)
      : Builder(this.areaCallbackServiceConfig, this.robot);
  }

  /**
   * Start run() of the region handler, like the thread of Python.
   * @private
   */
  _startActiveThread() {
    this.areaCallbackActiveThreadEvent = new Event();
    this.areaCallbackActiveThread = new _RunThread(this.areaCallbackRegionHandler, this.areaCallbackActiveThreadEvent);
  }

  /**
   * Receive robot control from GraphNav.
   * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the BeginControlRequest.
   * @param {Function} callback Receives the BeginControlResponse.
   */
  beginControl(call, callback) {
    return this._handle(call, callback, async request => {
      _LOGGER.info(`Received BeginControl for command id ${request.getCommandId()}`);
      const response = new BeginControlResponse();
      await new ResponseContext(response, request, this._rpcLogger).run(() =>
        this._lock.run(() => {
          if (!this.areaCallbackRegionHandler || !this._isActiveCommandId(request.getCommandId())) {
            response.setStatus(BeginControlResponse.Status.STATUS_INVALID_COMMAND_ID);
            return;
          }
          if (!this._testAndForwardLeases(request.getLeasesList(), response)) return;
          this.areaCallbackRegionHandler.internalGiveControl();
          response.setStatus(BeginControlResponse.Status.STATUS_OK);
        }),
      );
      return response;
    });
  }

  /**
   * Regular updates from GraphNav, with responses to update the policy.
   * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the UpdateCallbackRequest.
   * @param {Function} callback Receives the UpdateCallbackResponse.
   */
  updateCallback(call, callback) {
    return this._handle(call, callback, async request => {
      const response = new UpdateCallbackResponse();
      await new ResponseContext(response, request, this._rpcLogger).run(() =>
        this._lock.run(async () => {
          if (!this.areaCallbackRegionHandler || !this._isActiveCommandId(request.getCommandId())) {
            response.setStatus(UpdateCallbackResponse.Status.STATUS_INVALID_COMMAND_ID);
            return;
          }
          // Like the CopyFrom() of Python: the whole response is replaced, its header too (the context sets its code
          // and response timestamp afterwards).
          jspb.Message.copyInto(this.areaCallbackRegionHandler.updateResponse, response);
          if (request.hasEndTime()) {
            if (await this._isExpired(request.getEndTime())) {
              response.setStatus(UpdateCallbackResponse.Status.STATUS_EXPIRED_END_TIME);
              return;
            }
            this.areaCallbackRegionHandler.internalSetEndTime(timestampToSec(request.getEndTime()));
          }
          this.areaCallbackRegionHandler.internalSetStage(request.getStage());
          response.setStatus(UpdateCallbackResponse.Status.STATUS_OK);
          // Like Python, the LeaseValidator is not updated in case of LeaseUseError (a TODO of Python).
        }),
      );
      return response;
    });
  }

  /**
   * Terminate handling of this region.
   * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the EndCallbackRequest.
   * @param {Function} callback Receives the EndCallbackResponse.
   */
  endCallback(call, callback) {
    return this._handle(call, callback, async request => {
      _LOGGER.info(`Received EndCallback for command ${request.getCommandId()}`);
      const response = new EndCallbackResponse();
      await new ResponseContext(response, request, this._rpcLogger).run(async () => {
        if (!this.areaCallbackRegionHandler || !this._isActiveCommandId(request.getCommandId())) {
          response.setStatus(EndCallbackResponse.Status.STATUS_INVALID_COMMAND_ID);
          return;
        }
        if (!(await this.shutdown(this._shutdownTimeout))) {
          _LOGGER.error(`Failed to shut down thread for command id ${request.getCommandId()}`);
          response.setStatus(EndCallbackResponse.Status.STATUS_SHUTDOWN_CALLBACK_FAILED);
          return;
        }
        response.setStatus(EndCallbackResponse.Status.STATUS_OK);
        await this.areaCallbackRegionHandler.end();
        this._clearLeaseWallet();
        this.areaCallbackRegionHandler = null;
      });
      return response;
    });
  }

  /**
   * Called when we re-route within the callback. Most callbacks do not need to know about changes in the route, and
   * can ignore this.
   * @param {import('@grpc/grpc-js').ServerUnaryCall} call The call, with the RouteChangeRequest.
   * @param {Function} callback Receives the RouteChangeResponse.
   */
  routeChange(call, callback) {
    return this._handle(call, callback, async request => {
      _LOGGER.info(`Received RouteChange for command ${request.getCommandId()}`);
      const response = new RouteChangeResponse();
      await new ResponseContext(response, request, this._rpcLogger).run(async () => {
        if (!this.areaCallbackRegionHandler || !this._isActiveCommandId(request.getCommandId())) {
          response.setStatus(RouteChangeResponse.Status.STATUS_INVALID_COMMAND_ID);
          return;
        }
        try {
          const routeChangedResult = await this.areaCallbackRegionHandler.routeChanged(request);
          if (routeChangedResult.rerunIfStopped && !this.areaCallbackActiveThread.isAlive()) {
            this._startActiveThread();
            _LOGGER.info(`Re-created thread for command id ${this._activeCommandId}`);
          }
          response.setStatus(RouteChangeResponse.Status.STATUS_OK);
        } catch (exc) {
          _LOGGER.error(`Failed route_changed_call: ${exc?.stack ?? exc}`);
          const error = response.getHeader().getError() ?? new headerPb.CommonError();
          response.getHeader().setError(error);
          error.setCode(headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR);
          error.setMessage(String(exc?.message ?? exc));
        }
      });
      return response;
    });
  }

  /**
   * @param {?Timestamp} endTime
   * @returns {Promise<boolean>} Whether the end time is before the current robot time.
   * @private
   */
  async _isExpired(endTime) {
    const currentRobotTimeSecs = await this.robot.timeSec();
    const endTimeSecs = timestampToSec(endTime ?? new Timestamp());
    return endTimeSecs < currentRobotTimeSecs;
  }

  /** @private */
  _isActiveCommandId(commandId) {
    return commandId === this._activeCommandId;
  }

  /**
   * Check if all the required leases are supplied and valid, and add them to the lease wallet.
   * @param {leasePb.Lease[]} leases
   * @param {BeginControlResponse} response Gets the status and the lease use results.
   * @returns {boolean}
   * @private
   */
  _testAndForwardLeases(leases, response) {
    // Check if all leases are supplied.
    const leasesToAdd = [];

    const suppliedLeaseSet = new Set(leases.map(lease => lease.getResource()));
    const expectedLeaseSet = new Set(this.areaCallbackServiceConfig.requiredLeaseResources);
    const sameSets =
      suppliedLeaseSet.size === expectedLeaseSet.size &&
      [...suppliedLeaseSet].every(resource => expectedLeaseSet.has(resource));
    if (!sameSets) {
      response.setStatus(BeginControlResponse.Status.STATUS_MISSING_LEASE_RESOURCES);
      return false;
    }

    // Check if leases are valid.
    let leaseError = false;
    for (const leaseProto of leases) {
      const lease = new Lease(leaseProto);
      // We allow for different epochs to handle the case when the robot has rebooted. Because the lease is coming
      // directly from graph nav, we can be fairly sure the epoch is correct, and it is okay to overwrite our lease if
      // the epoch doesn't match.
      const leaseUseResult = this._leaseValidator.testAndSetActiveLease(lease, false, true);
      response.addLeaseUseResults(leaseUseResult.clone());
      if (leaseUseResult.getStatus() === leasePb.LeaseUseResult.Status.STATUS_OK) {
        leasesToAdd.push(lease);
      } else {
        response.setStatus(BeginControlResponse.Status.STATUS_LEASE_ERROR);
        leaseError = true;
      }
    }
    if (leaseError) return false;

    // Add leases to lease wallet after they've all passed validation.
    for (const lease of leasesToAdd) this.robot.leaseWallet.add(lease);

    return true;
  }

  /** @private */
  _clearLeaseWallet() {
    for (const resource of this.areaCallbackServiceConfig.requiredLeaseResources) {
      try {
        const lease = this.robot.leaseWallet.getLease(resource);
        this.robot.leaseWallet.remove(lease);
      } catch (err) {
        if (!(err instanceof LeaseNotOwnedByWallet || err instanceof NoSuchLease)) throw err;
      }
    }
  }

  /**
   * Call to force run thread to terminate.
   * @param {number} [timeout=5] Time allowed to run thread to shut down, in seconds.
   * @returns {Promise<boolean>} True if the thread correctly shut down within the allowed time.
   */
  async shutdown(timeout = 5) {
    if (!this.areaCallbackActiveThread) return true;
    this.areaCallbackActiveThreadEvent.set();
    await this.areaCallbackActiveThread.join(timeout);
    return !this.areaCallbackActiveThread.isAlive();
  }
}

module.exports = {
  AreaCallbackServiceServicer,
};

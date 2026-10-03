/**
 * @file The base class of the handlers of an area callback service: a handler runs the callback of one region, from
 * BeginCallback to EndCallback.
 */

'use strict';

const { LeaseUseError } = require('./exceptions');
const { LoggerUtil } = require('./logger_util');
const { UpdateCallbackRequest, UpdateCallbackResponse } = require('../bosdyn/api/graph_nav/area_callback_pb');
const { Event } = require('../bosdyn-core/event');

const _LOGGER = LoggerUtil.getLogger('area_callback_region_handler_base');

/**
 * The callback reports the that path/area it's trying to traverse is blocked and the robot should take another route or
 * action.
 */
class PathBlocked extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'PathBlocked';
  }
}

/**
 * Error thrown by calling a helper function incorrectly.
 *
 * Thrown when a call would block forever or has otherwise been used in an incorrect manner. This error is not intended
 * to be caught, but indicates a programming error.
 */
class IncorrectUsage extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'IncorrectUsage';
  }
}

/**
 * Error base class for errors thrown from the internals of the AreaCallbackRegionHandlerBase.
 *
 * This error is thrown when the shutdown event is set, or can be thrown by the user to signal an error. A wrapper
 * around the run implementation catches this error and reports back to a client an UpdateCallbackResponse error.
 */
class HandlerError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'HandlerError';
  }
}

/**
 * The callback has already been stopped, via an EndCallback call.
 */
class CallbackEnded extends HandlerError {
  constructor(msg) {
    super(msg);
    this.name = 'CallbackEnded';
  }
}

/**
 * The callback has already been stopped, via passing the end time. If caught, it should be rethrown to make sure the
 * response is set correctly.
 */
class CallbackTimedOutError extends HandlerError {
  constructor(msg) {
    super(msg);
    this.name = 'CallbackTimedOutError';
  }
}

/**
 * Options for how the helper class should respond to a route change.
 */
class RouteChangedResult {
  constructor() {
    // Specify that if the callback has stopped (returned or raised from run()) that run()
    // should be called again.
    this.rerunIfStopped = false;
  }
}

/**
 * Base class for implementing an AreaCallbackRegionHandler.
 *
 * An AreaCallbackRegionHandler is an object responsible for running a single instance of an AreaCallback. The
 * AreaCallbackServiceServicer constructs an AreaCallbackRegionHandler object each time GraphNav starts an Area Callback
 * region. The servicer runs its run() method as an asynchronous task and reads its updateResponse to send status back
 * to the client. After EndCallback, this object is discarded and a new AreaCallbackRegionHandlerBase is constructed to
 * handle the next region.
 */
class AreaCallbackRegionHandlerBase {
  constructor(config, robot) {
    /**
     * @type {UpdateCallbackResponse}
     */
    this._updateResponse = new UpdateCallbackResponse();
    this._updateResponse.setPolicy(
      new UpdateCallbackResponse.NavPolicy()
        .setAtStart(UpdateCallbackResponse.NavPolicy.Option.OPTION_STOP)
        .setAtEnd(UpdateCallbackResponse.NavPolicy.Option.OPTION_CONTINUE),
    );
    /**
     * @type {Event}
     */
    this._shutdownEvent = new Event();
    /**
     * @type {Event}
     */
    this._leaseEvent = new Event();
    /**
     * @type {number|null}
     */
    this._endTime = null;
    /**
     * @type {import('./robot').Robot}
     */
    this.robot = robot;
    this._config = config;
    /**
     * @type {number}
     * @private
     */
    this._stage = UpdateCallbackRequest.Stage.STAGE_TO_START;
    /**
     * @type {boolean}
     * @private
     */
    this._beginComplete = false;
  }

  /**
   * Validates that configuration passed to BeginCallback is valid.
   * @param {import('../bosdyn/api/graph_nav/area_callback_pb').BeginCallbackRequest} request The request of
   * BeginCallback, with the configuration of the region.
   * @returns {number|Promise<number>} The status of the BeginCallbackResponse (STATUS_OK to accept the region).
   */
  // eslint-disable-next-line no-unused-vars
  begin(request) {
    throw new RangeError('Derived class must implement this function.');
  }

  /**
   * Runs the callback, as an asynchronous task, after BeginCallback is called.
   * @returns {void|Promise<void>}
   */
  run() {
    throw new RangeError('Derived class must implement this function.');
  }

  /**
   * This function is called after run() has finished and the client calls EndCallback.
   * @returns {void|Promise<void>}
   */
  end() {
    throw new RangeError('Derived class must implement this function.');
  }

  /**
   * This function is called when Graph Nav re-routes inside the callback region.
   * In most cases, the callback does not need to do anything for this case and can leave the
   * default implementation.
   * @param {import('../bosdyn/api/graph_nav/area_callback_pb').RouteChangeRequest} request The request.
   * @returns {RouteChangedResult}
   */
  // eslint-disable-next-line no-unused-vars
  routeChanged(request) {
    return new RouteChangedResult();
  }

  /**
   * Get areaCallbackPb.AreaCallbackInformation.
   */
  get areaCallbackInformation() {
    return this._config.areaCallbackInformation;
  }

  /**
   * Get AreaCallbackServiceConfig
   */
  get config() {
    return this._config;
  }

  /**
   * The policy of the update response, created if the response is complete or failed (policy, error and
   * complete are a oneof), like Python when a policy field is assigned.
   * @returns {UpdateCallbackResponse.NavPolicy}
   * @private
   */
  _policy() {
    if (!this._updateResponse.hasPolicy()) this._updateResponse.setPolicy(new UpdateCallbackResponse.NavPolicy());
    return this._updateResponse.getPolicy();
  }

  /**
   * Tell graph nav that it should wait at the start of the region.
   */
  stopAtStart() {
    this._policy().setAtStart(UpdateCallbackResponse.NavPolicy.Option.OPTION_STOP);
    if (this.stage === UpdateCallbackRequest.Stage.STAGE_AT_START) {
      this._leaseEvent.clear();
    }
  }

  /**
   * Tell graph nav that it should continue on past the start of the region.
   */
  continuePastStart() {
    this._policy().setAtStart(UpdateCallbackResponse.NavPolicy.Option.OPTION_CONTINUE);
    if (this.stage === UpdateCallbackRequest.Stage.STAGE_AT_START) {
      this._leaseEvent.clear();
    }
  }

  /**
   * Tell graph nav that it transfer control at the start of the region.
   */
  controlAtStart() {
    this._policy().setAtStart(UpdateCallbackResponse.NavPolicy.Option.OPTION_CONTROL);
  }

  /**
   * Tell graph nav that it should wait at the end of the region.
   */
  stopAtEnd() {
    this._policy().setAtEnd(UpdateCallbackResponse.NavPolicy.Option.OPTION_STOP);
    if (this.stage === UpdateCallbackRequest.Stage.STAGE_AT_END) {
      this._leaseEvent.clear();
    }
  }

  /**
   * Tell graph nav that it should continue on past the ends of the region.
   */
  continuePastEnd() {
    this._policy().setAtEnd(UpdateCallbackResponse.NavPolicy.Option.OPTION_CONTINUE);
    if (this.stage === UpdateCallbackRequest.Stage.STAGE_AT_END) {
      this._leaseEvent.clear();
    }
  }

  /**
   * Tell graph nav that it should transfer control at the end of the region.
   */
  controlAtEnd() {
    this._policy().setAtEnd(UpdateCallbackResponse.NavPolicy.Option.OPTION_CONTROL);
  }

  setComplete() {
    this._updateResponse.setComplete(new UpdateCallbackResponse.Complete());
  }

  /**
   * Set the localization hint to the end of the callback region, indicating that graph nav
   * that navigation should continue from this point.
   * Robot control is required to set this. It should be called after walking to the end of
   * the region, but before ceding control.
   */
  setLocalizationAtEnd() {
    if (!this.hasControl()) {
      throw new IncorrectUsage('setLocalizationAtEnd should only be called with robot control.');
    }

    const loc = new UpdateCallbackResponse.UpdateLocalization().setChange(
      UpdateCallbackResponse.UpdateLocalization.LocalizationChange.LOCALIZATION_AT_END,
    );
    this._updateResponse.setLocalization(loc);
  }

  /**
   * Block waiting for the robot to pass the sublease to this callback.
   */
  async blockUntilControl() {
    if (!this._beginComplete) {
      throw new IncorrectUsage('blockUntilControl should only be called from within run()');
    }
    if (!this.willGetControl()) {
      throw new IncorrectUsage(
        `blockUntilControl should only be called if the callback will be given control. The current stage is ${
          this.stage
        } and the policy is ${JSON.stringify(this.updateResponse.getPolicy()?.toObject())}`,
      );
    }

    while (!(await this._leaseEvent.wait(100))) {
      await this.check();
    }
  }

  /**
   * Check in a non-blocking way if the callback has been given a sublease.
   * @returns {boolean}
   */
  hasControl() {
    return this._leaseEvent.isSet();
  }

  /**
   * Block until the robot arrives at the start of the area callback.
   * If the robot is already past the start, this will return immediately.
   * @returns {Promise<boolean>}
   */
  async blockUntilArrivedAtStart() {
    if (!this._beginComplete) {
      throw new IncorrectUsage('blockUntilArrivedAtStart should only be called from within run()');
    }
    while (this._stage < UpdateCallbackRequest.Stage.STAGE_AT_START) {
      await this.safeSleep(100);
    }
    return this._stage === UpdateCallbackRequest.Stage.STAGE_AT_START;
  }

  /**
   * Block until the robot arrives at the end of the area callback.
   */
  async blockUntilArrivedAtEnd() {
    if (!this._beginComplete) {
      throw new IncorrectUsage('blockUntilArrivedAtEnd should only be called from within run()');
    }
    while (this._stage < UpdateCallbackRequest.Stage.STAGE_AT_END) {
      await this.safeSleep(100);
    }
  }

  /**
   * Check the current stage of traversal in a non-blocking way.
   */
  get stage() {
    return this._stage;
  }

  /**
   * Run impl should use this sleep function to make sure thread does not hang.
   * @param {number} sleepTimeMsecs Time to sleep, in mseconds.
   */
  async safeSleep(sleepTimeMsecs) {
    if ((await this.robot.timeSec()) > this._endTime) {
      throw new CallbackTimedOutError();
    }
    if (await this._shutdownEvent.wait(sleepTimeMsecs)) {
      throw new CallbackEnded();
    }
    if ((await this.robot.timeSec()) > this._endTime) {
      throw new CallbackTimedOutError();
    }
  }

  /**
   * Check if callback shutdown has been requested via client call to EndCallback or passing
   * the end time.
   */
  async check() {
    if ((await this.robot.timeSec()) > this._endTime) {
      throw new CallbackTimedOutError();
    }
    if (this._shutdownEvent.isSet()) {
      throw new CallbackEnded();
    }
  }

  /**
   * Get current UpdateCallbackResponse.
   * @returns {UpdateCallbackResponse}
   */
  get updateResponse() {
    return this._updateResponse.clone();
  }

  /**
   * Determine if the current policy and stage mean that the callback will eventually be
   * given control without any further action on its part
   * @returns {boolean}
   */
  willGetControl() {
    // No policy (the response is complete or failed) reads as the default values, like Python.
    const policy = this.updateResponse.getPolicy() ?? new UpdateCallbackResponse.NavPolicy();
    const wantControlAtStart =
      policy.getAtStart() === UpdateCallbackResponse.NavPolicy.Option.OPTION_CONTROL &&
      this.stage <= UpdateCallbackRequest.Stage.STAGE_AT_START;
    const wantControlAtEnd =
      policy.getAtEnd() === UpdateCallbackResponse.NavPolicy.Option.OPTION_CONTROL &&
      (this.stage > UpdateCallbackRequest.Stage.STAGE_AT_START ||
        policy.getAtStart() === UpdateCallbackResponse.NavPolicy.Option.OPTION_CONTINUE);
    return wantControlAtStart || wantControlAtEnd;
  }

  /**
   * The handler finished BeginCallback and is ready to start run().
   * Blocking calls may now be used.
   */
  internalBeginComplete() {
    this._beginComplete = true;
  }

  /**
   * Update the stage via an incoming UpdateCallbackRequest.
   * @param {number} stage The new stage
   */
  internalSetStage(stage) {
    if (stage !== this._stage) {
      _LOGGER.info(
        `Stage changed from ${Object.keys(UpdateCallbackRequest.Stage)[this._stage]} to ${
          Object.keys(UpdateCallbackRequest.Stage)[stage]
        }`,
      );
    }
    this._stage = stage;
  }

  /**
   * Update the end time from an incoming request.
   * @param {number} endTime The new end time
   */
  internalSetEndTime(endTime) {
    this._endTime = endTime;
  }

  /**
   * Set Event indicating region handler has been given control. Lease is available in wallet.
   */
  internalGiveControl() {
    this._leaseEvent.set();
  }

  /**
   * Wrapper around the run function which catches exceptions and set update response.
   * @param {Event} shutdownEvent Event that signals the run thread to shutdown.
   * @returns {Promise<void>} Resolves once run() has ended.
   * @throws {IncorrectUsage} run() used the helper functions incorrectly.
   */
  async internalRunWrapper(shutdownEvent) {
    this._shutdownEvent = shutdownEvent;
    _LOGGER.info('Beginning callback');
    try {
      // run() is asynchronous (the blocking helpers return promises): its errors are only caught once awaited.
      await this.run();
      if (!this._updateResponse.hasError()) {
        this._updateResponse.setComplete(new UpdateCallbackResponse.Complete());
      }
    } catch (e) {
      if (e instanceof PathBlocked) {
        _LOGGER.warn('run() reported the path is blocked.');
        this._updateResponse.setError(
          new UpdateCallbackResponse.Error().setError(UpdateCallbackResponse.Error.ErrorType.ERROR_BLOCKED),
        );
      } else if (e instanceof LeaseUseError) {
        _LOGGER.warn('Something else has taken control, aborting.');
        const error = new UpdateCallbackResponse.Error().setError(UpdateCallbackResponse.Error.ErrorType.ERROR_LEASE);
        // Like Python's hasattr(): the response has either a lease_use_result or lease_use_results.
        if (typeof e.response?.getLeaseUseResult === 'function') {
          error.addLeaseUseResults(e.response.getLeaseUseResult()?.clone());
        } else if (typeof e.response?.getLeaseUseResultsList === 'function') {
          error.setLeaseUseResultsList(e.response.getLeaseUseResultsList().map(result => result.clone()));
        }
        this._updateResponse.setError(error);
      } else if (e instanceof CallbackTimedOutError) {
        _LOGGER.warn('The callback did not receive an UpdateCallback for too long, aborting.');
        this._updateResponse.setError(
          new UpdateCallbackResponse.Error().setError(UpdateCallbackResponse.Error.ErrorType.ERROR_TIMED_OUT),
        );
      } else if (e instanceof CallbackEnded) {
        // This was raised to cause run() to stop due to EndCallback. This is not an error.
        this.setComplete();
      } else if (e instanceof IncorrectUsage) {
        throw e;
      } else {
        // We want to keep running and just report an error regardless of what run() raises.
        _LOGGER.error(`Failed during run(): ${e?.stack ?? e}`);
        this._updateResponse.setError(
          new UpdateCallbackResponse.Error().setError(UpdateCallbackResponse.Error.ErrorType.ERROR_CALLBACK_FAILED),
        );
      }
    }
    _LOGGER.info('Callback ended');
  }
}

module.exports = {
  PathBlocked,
  IncorrectUsage,
  HandlerError,
  CallbackEnded,
  CallbackTimedOutError,
  RouteChangedResult,
  AreaCallbackRegionHandlerBase,
};

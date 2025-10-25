'use strict';

const PythonLikeEvent = require('node-threading-event');

const { LeaseUseError } = require('./exceptions');
const areaCallbackPb = require('../bosdyn/api/graph_nav/area_callback_pb');

class PathBlocked extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'PathBlocked';
  }
}

class IncorrectUsage extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'IncorrectUsage';
  }
}

class HandlerError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'HandlerError';
  }
}

class CallbackEnded extends HandlerError {
  constructor(msg) {
    super(msg);
    this.name = 'CallbackEnded';
  }
}

class CallbackTimedOutError extends HandlerError {
  constructor(msg) {
    super(msg);
    this.name = 'CallbackTimedOutError';
  }
}

class AreaCallbackRegionHandlerBase {
  constructor(config, robot) {
    this._updateResponse = new areaCallbackPb.UpdateCallbackResponse();
    this._updateResponse.setPolicy(
      new areaCallbackPb.UpdateCallbackResponse.NavPolicy()
        .setAtStart(areaCallbackPb.UpdateCallbackResponse.NavPolicy.Option.OPTION_STOP)
        .setAtEnd(areaCallbackPb.UpdateCallbackResponse.NavPolicy.Option.OPTION_CONTINUE),
    );
    this._shutdownEvent = new PythonLikeEvent();
    this._leaseEvent = new PythonLikeEvent();
    this._endTime = null;
    this.robot = robot;
    this._config = config;
    this._stage = areaCallbackPb.UpdateCallbackRequest.Stage.STAGE_TO_START;
    this._beginComplete = false;
  }

  begin() {
    throw new RangeError('Derived class must implement this function.');
  }

  run() {
    throw new RangeError('Derived class must implement this function.');
  }

  end() {
    throw new RangeError('Derived class must implement this function.');
  }

  get areaCallbackInformation() {
    return this._config.areaCallbackInformation;
  }

  get config() {
    return this._config;
  }

  /**
   * Tell graph nav that it should wait at the start of the region.
   */
  stopAtStart() {
    this._updateResponse.getPolicy().setAtStart(areaCallbackPb.UpdateCallbackResponse.NavPolicy.Option.OPTION_STOP);
    if (this.stage === areaCallbackPb.UpdateCallbackRequest.Stage.STAGE_AT_START) {
      this._leaseEvent.clear();
    }
  }

  /**
   * Tell graph nav that it should continue on past the start of the region.
   */
  continuePastStart() {
    this._updateResponse.getPolicy().setAtStart(areaCallbackPb.UpdateCallbackResponse.NavPolicy.Option.OPTION_CONTINUE);
    if (this.stage === areaCallbackPb.UpdateCallbackRequest.Stage.STAGE_AT_START) {
      this._leaseEvent.clear();
    }
  }

  /**
   * Tell graph nav that it transfer control at the start of the region.
   */
  controlAtStart() {
    this._updateResponse.getPolicy().setAtStart(areaCallbackPb.UpdateCallbackResponse.NavPolicy.Option.OPTION_CONTROL);
  }

  /**
   * Tell graph nav that it should wait at the end of the region.
   */
  stopAtEnd() {
    this._updateResponse.getPolicy().setAtEnd(areaCallbackPb.UpdateCallbackResponse.NavPolicy.Option.OPTION_STOP);
    if (this.stage === areaCallbackPb.UpdateCallbackRequest.Stage.STAGE_AT_END) {
      this._leaseEvent.clear();
    }
  }

  /**
   * Tell graph nav that it should continue on past the ends of the region.
   */
  continuePastEnd() {
    this._updateResponse.getPolicy().setAtEnd(areaCallbackPb.UpdateCallbackResponse.NavPolicy.Option.OPTION_CONTINUE);
    if (this.stage === areaCallbackPb.UpdateCallbackRequest.Stage.STAGE_AT_END) {
      this._leaseEvent.clear();
    }
  }

  /**
   * Tell graph nav that it should transfer control at the end of the region.
   */
  controlAtEnd() {
    this._updateResponse.getPolicy().setAtEnd(areaCallbackPb.UpdateCallbackResponse.NavPolicy.Option.OPTION_CONTROL);
  }

  setComplete() {
    this._updateResponse.setComplete(new areaCallbackPb.UpdateCallbackResponse.Complete());
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

    const loc = new areaCallbackPb.UpdateCallbackResponse.UpdateLocalization().setChange(
      areaCallbackPb.UpdateCallbackResponse.UpdateLocalization.LocalizationChange.LOCALIZATION_AT_END,
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
        } and the policy is ${this.update_response.getPolicy()}`,
      );
    }

    // eslint-disable-next-line no-await-in-loop
    while (!(await this._lease_event.wait(100))) {
      // eslint-disable-next-line no-await-in-loop
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
    while (this._stage < areaCallbackPb.UpdateCallbackRequest.Stage.STAGE_AT_START) {
      // eslint-disable-next-line no-await-in-loop
      await this.safeSleep(100);
    }
    return this._stage === areaCallbackPb.UpdateCallbackRequest.Stage.STAGE_AT_START;
  }

  /**
   * Block until the robot arrives at the end of the area callback.
   */
  async blockUntilArrivedAtEnd() {
    if (!this._begin_complete) {
      throw new IncorrectUsage('blockUntilArrivedAtEnd should only be called from within run()');
    }
    while (this._stage < areaCallbackPb.UpdateCallbackRequest.Stage.STAGE_AT_END) {
      // eslint-disable-next-line no-await-in-loop
      await this.safeSleep(100);
    }
  }

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
   * @returns {areaCallbackPb.UpdateCallbackResponse}
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
    const response = this.updateResponse;
    const wantControlAtStart =
      response.getPolicy().getAtStart() === areaCallbackPb.UpdateCallbackResponse.NavPolicy.Option.OPTION_CONTROL &&
      this.stage <= areaCallbackPb.UpdateCallbackRequest.Stage.STAGE_AT_START;
    const wantControlAtEnd =
      response.getPolicy().getAtEnd() === areaCallbackPb.UpdateCallbackResponse.NavPolicy.Option.OPTION_CONTROL &&
      (this.stage > areaCallbackPb.UpdateCallbackRequest.Stage.STAGE_AT_START ||
        response.getPolicy().getAtStart() === areaCallbackPb.UpdateCallbackResponse.NavPolicy.Option.OPTION_CONTINUE);
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
      console.log(
        `Stage changed from ${Object.keys(areaCallbackPb.UpdateCallbackRequest.Stage)[this._stage]} to ${
          Object.keys(areaCallbackPb.UpdateCallbackRequest.Stage)[stage]
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
   */
  internalRunWrapper(shutdownEvent) {
    this._shutdownEvent = shutdownEvent;
    console.info('Beginning callback');
    try {
      this.run();
      if (!this._updateResponse.hasError()) {
        this._updateResponse.setComplete(new areaCallbackPb.UpdateCallbackResponse.Complete());
      }
    } catch (e) {
      if (e instanceof PathBlocked) {
        console.log('run() reported the path is blocked');
        this._updateResponse.setError(
          new areaCallbackPb.UpdateCallbackResponse.Error().setError(
            areaCallbackPb.UpdateCallbackResponse.Error.ErrorType.ERROR_BLOCKED,
          ),
        );
      } else if (e instanceof LeaseUseError) {
        console.log('Something else has taken control, aborting.');
        const error = new areaCallbackPb.UpdateCallbackResponse.Error().setError(
          areaCallbackPb.UpdateCallbackResponse.Error.ErrorType.ERROR_LEASE,
        );
        if (e.response?.hasLeaseUseResult()) {
          error.addLeaseUseResults(e.response.getLeaseUseResult().clone());
        } else if (e.response?.getLeaseUseResultsList()) {
          error.setLeaseUseResultsList(e.response.getLeaseUseResultsList());
        }
        this._updateResponse.setError(error.clone());
      } else if (e instanceof CallbackTimedOutError) {
        console.warn('The callback did not receive an UpdateCallback for too long, aborting.');
        this._updateResponse.setError(
          new areaCallbackPb.UpdateCallbackResponse.Error().setError(
            areaCallbackPb.UpdateCallbackResponse.Error.ErrorType.ERROR_TIMED_OUT,
          ),
        );
      } else if (e instanceof CallbackEnded) {
        this.setComplete();
      } else {
        console.error(`Failed during run(): ${e}`);
        this._updateResponse.setError(
          new areaCallbackPb.UpdateCallbackResponse.Error().setError(
            areaCallbackPb.UpdateCallbackResponse.Error.ErrorType.ERROR_CALLBACK_FAILED,
          ),
        );
      }
    }
    console.info('Callback ended');
  }
}

module.exports = {
  AreaCallbackRegionHandlerBase,
};

'use strict';

const process = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');

const {
  BaseClient,
  errorFactory,
  commonHeaderErrors,
  handleCommonHeaderErrors,
  handleLeaseUseResultErrors,
  handleUnsetStatusError,
} = require('./common');
const { ResponseError } = require('./exceptions');
const { addLeaseWalletProcessors } = require('./lease');
const { CommandFailedError } = require('./robot_command');

const { DefaultDict } = require('./util');

const dockingPb = require('../bosdyn/api/docking/docking_pb');
const { DockingServiceClient } = require('../bosdyn/api/docking/docking_service_grpc_pb');
const { nowSec } = require('../bosdyn-core/util');

/**
 * A client for the docking service to help issue DockingCommand and get state.
 * Clients are expected to issue a single DockingCommand and then periodically
 * check the status of its execution.
 * This service requires ownership over the robot, in the form of a lease and timesync.
 * @extends {BaseClient<DockingServiceClient>}
 */
class DockingClient extends BaseClient {
  static defaultServiceName = 'docking';
  static serviceType = 'bosdyn.api.docking.DockingService';

  constructor() {
    super(DockingServiceClient);
  }

  /**
   * @param {Robot} other 
   */
  updateFrom(other) {
    super.updateFrom(other);
    if (this.leaseWallet) addLeaseWalletProcessors(this, this.leaseWallet);
  }

  /**
   * Issue a DockingCommandRequest to the robot.
   * @param {number} stationId The ID of the docking station to dock at.
   * @param {string} clockIdentifier Identifier provided by the time sync service.
   * @param {Timestamp} endTime Expiry time of the command in robot time.
   * @param {dockingPb.PrepPoseBehavior} [prepPoseBehavior=null] How and if to use the pre-dock pose.
   * @param {Lease} [lease=null] Leave empty to have the lease filled in by the LeaseWallet
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<number>}
   */
  dockingCommand(stationId, clockIdentifier, endTime, prepPoseBehavior = null, lease = null, args) {
    const req = this._dockingCommandRequest(lease, stationId, clockIdentifier, endTime, prepPoseBehavior);
    return this.call(
      this._stub.dockingCommand,
      req,
      this._dockingIdFromResponse,
      _dockingCommandErrorFromResponse,
      false,
      args,
    );
  }

  /**
   * Identical to dockingCommand(), except will return the full DockingCommandResponse.
   * @param {number} stationId The ID of the docking station to dock at.
   * @param {string} clockIdentifier Identifier provided by the time sync service.
   * @param {Timestamp} endTime Expiry time of the command in robot time.
   * @param {dockingPb.PrepPoseBehavior} [prepPoseBehavior=null] How and if to use the pre-dock pose.
   * @param {Lease} [lease=null] Leave empty to have the lease filled in by the LeaseWallet
   * @param {boolean} requireFiducial Whether to require fiducial.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dockingPb.DockingCommandResponse>}
   */
  dockingCommandFull(
    stationId,
    clockIdentifier,
    endTime,
    prepPoseBehavior = null,
    lease = null,
    requireFiducial = false,
    args,
  ) {
    const req = this._dockingCommandRequest(
      lease,
      stationId,
      clockIdentifier,
      endTime,
      prepPoseBehavior,
      requireFiducial,
    );
    return this.call(this._stub.dockingCommand, req, null, _dockingCommandErrorFromResponse, false, args);
  }

  /**
   * Check the status of a previously issued docking command.
   * @param {number} commandId The ID returned from a previous docking_command call.
   * @param {Timestamp} endTime Expiry time of the command in robot time.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dockingPb.DockingCommandFeedbackResponse>}
   */
  dockingCommandFeedbackFull(commandId, endTime = null, args) {
    const req = this._dockingCommandFeedbackRequest(commandId, endTime);
    return this.call(this._stub.dockingCommandFeedback, req, null, commonHeaderErrors, false, args);
  }

  /**
   * Get the docking config stored on the robot.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dockingPb.ConfigRange>}
   */
  getDockingConfig(args) {
    const req = new dockingPb.GetDockingConfigRequest();
    return this.call(
      this._stub.getDockingConfig,
      req,
      this._dockingConfigFromResponse,
      _dockingGetConfigErrorFromResponse,
      false,
      args,
    );
  }

  /**
   * Get docking state from the robot.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<dockingPb.DockState>}
   */
  getDockingState(args) {
    const req = new dockingPb.GetDockingStateRequest();
    return this.call(
      this._stub.getDockingState,
      req,
      this._dockingStateFromResponse,
      _dockingGetStateErrorFromResponse,
      false,
      args,
    );
  }

  _dockingCommandRequest(lease, stationId, clockIdentifier, endTime, prepPoseBehavior, requireFiducial = false) {
    return new dockingPb.DockingCommandRequest()
      .setLease(lease)
      .setDockingStationId(stationId)
      .setClockIdentifier(clockIdentifier)
      .setEndTime(endTime)
      .setPrepPoseBehavior(prepPoseBehavior)
      .setRequireFiducial(requireFiducial);
  }

  _dockingCommandFeedbackRequest(commandId, endTime = null) {
    const req = new dockingPb.DockingCommandFeedbackRequest().setDockingCommandId(commandId);
    if (endTime) {
      req.setUpdateDockingParams(new dockingPb.UpdateDockingParams().setEndTime(endTime));
    }
    return req;
  }

  _dockingIdFromResponse(response) {
    return response.getDockingCommandId();
  }

  _dockingStatusFromResponse(response) {
    return response.getStatus();
  }

  _dockingConfigFromResponse(response) {
    return response.getDockConfigs();
  }

  _dockingStateFromResponse(response) {
    return response.getDockState();
  }
}

const _DOCKING_COMMAND_STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);
_DOCKING_COMMAND_STATUS_TO_ERROR.set(dockingPb.DockingCommandResponse.Status.STATUS_OK, [null, null]);

const _dockingCommandErrorFromResponse = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(
    handleUnsetStatusError('STATUS_UNKNOWN')(response =>
      errorFactory(
        response,
        response.getStatus(),
        Object.keys(dockingPb.DockingCommandResponse.Status),
        _DOCKING_COMMAND_STATUS_TO_ERROR,
      ),
    ),
  ),
);

const _dockingFeedbackErrorFromResponse = handleCommonHeaderErrors(
  handleLeaseUseResultErrors(handleUnsetStatusError('STATUS_UNKNOWN')(() => null)),
);

const _dockingGetConfigErrorFromResponse = handleCommonHeaderErrors(() => null);

const _dockingGetStateErrorFromResponse = handleCommonHeaderErrors(() => null);

/**
 * Blocking helper that takes control of the robot and docks it.
 * @param  {Robot} robot The instance of the robot to control.
 * @param  {number} dockId The ID of the dock to dock at.
 * @param  {number} [numRetries=4] Optional, number of attempts.
 * @param  {number} [timeoutMsec=30_000] DD
 * @returns {Promise<number>} The number of retries required
 */
async function blockingDockRobot(robot, dockId, numRetries = 4, timeoutMsec = 30_000) {
  /** @type {DockingClient} */
  const dockingClient = await robot.ensureClient(DockingClient.defaultServiceName);

  let attemptNumber = 0;
  let dockingSuccess = false;

  /* eslint-disable no-await-in-loop */
  while (attemptNumber < numRetries && !dockingSuccess) {
    attemptNumber += 1;

    const converter = (await robot.timeSync).getRobotTimeConverter();
    const startTime = converter.robotSecondsFromLocalSeconds(nowSec());
    const cmdEndTime = startTime + timeoutMsec;
    const cmdTimeout = cmdEndTime + 10_000;

    const prepPose =
      attemptNumber % 2
        ? dockingPb.PrepPoseBehavior.PREP_POSE_USE_POSE
        : dockingPb.PrepPoseBehavior.PREP_POSE_SKIP_POSE;

    const timeSync = await robot.timeSync;

    const cmdId = await dockingClient.dockingCommand(
      dockId,
      await timeSync.endpoint.clockIdentifier,
      await timeSync.robotTimestampFromLocalSecs(cmdEndTime),
      prepPose,
    );

    const statusDocking = dockingPb.DockingCommandFeedbackResponse.Status;

    while (converter.robotSecondsFromLocalSeconds(nowSec()) < cmdTimeout) {
      const feedback = await dockingClient.dockingCommandFeedbackFull(cmdId);

      const err = commonHeaderErrors(feedback);
      if (err) throw err;

      const status = feedback.getStatus();
      if (status === statusDocking.STATUS_IN_PROGRESS) {
        await sleep(1_000);
      } else if (status === statusDocking.STATUS_DOCKED) {
        dockingSuccess = true;
        break;
      } else if ([statusDocking.STATUS_MISALIGNED, statusDocking.STATUS_ERROR_COMMAND_TIMED_OUT].includes(status)) {
        break;
      } else {
        throw new CommandFailedError(
          `Docking Failed, status: '${Object.keys(statusDocking).find(s => statusDocking[s] === status)}'`,
        );
      }
    }
  }

  if (dockingSuccess) return attemptNumber - 1;

  try {
    await blockingGoToPrepPose(robot, dockId);
  } catch (e) {
    // Pass
  }

  throw new CommandFailedError('Docking Failed, too many attempts');
}

/**
 * Blocking helper that takes control of the robot and takes it to the prep pose only.
 * @param  {Robot} robot The instance of the robot to control.
 * @param  {number} dockId The ID of the dock to use.
 * @param  {number} [timeout=20_000] Timeout in milliseconds
 * @returns {Promise<void>}
 */
async function blockingGoToPrepPose(robot, dockId, timeout = 20_000) {
  /** @type {DockingClient} */
  const dockingClient = await robot.ensureClient(DockingClient.defaultServiceName);

  const converter = (await robot.timeSync).getRobotTimeConverter();
  const startTime = converter.robotSecondsFromLocalSeconds(nowSec());
  const cmdEndTime = startTime + timeout;
  const cmdTimeout = cmdEndTime + 10_000;

  const timeSync = await robot.timeSync;

  const cmdId = await dockingClient.dockingCommand(
    dockId,
    await timeSync.endpoint.clockIdentifier,
    await timeSync.robotTimestampFromLocalSecs(cmdEndTime),
    dockingPb.PrepPoseBehavior.PREP_POSE_ONLY_POSE,
  );

  /* eslint-disable no-await-in-loop */
  while (converter.robotSecondsFromLocalSeconds(nowSec()) < cmdTimeout) {
    const feedback = await dockingClient.dockingCommandFeedbackFull(cmdId);

    const err = commonHeaderErrors(feedback);
    if (err) throw err;

    const status = feedback.getStatus();
    if (status === dockingPb.DockingCommandFeedbackResponse.Status.STATUS_IN_PROGRESS) {
      await sleep(1_000);
    } else if (status === dockingPb.DockingCommandFeedbackResponse.Status.STATUS_AT_PREP_POSE) {
      return;
    } else {
      const errorStatus = dockingPb.DockingCommandFeedbackResponse.Status;
      throw new CommandFailedError(
        `Failed to go to the prep pose, status: '${Object.keys(errorStatus).find(s => errorStatus[s] === status)}'`,
      );
    }
  }
  throw new CommandFailedError('Error going to the prep pose, timeout exceeded.');
}

/**
 * Blocking helper that undocks the robot from the currently docked dock.
 * @param  {Robot} robot The instance of the robot to control.
 * @param  {number} [timeout=20_000] Timeout in milliseconds
 * @returns {Promise<void>}
 */
async function blockingUndock(robot, timeout = 20_000) {
  /** @type {DockingClient} */
  const dockingClient = await robot.ensureClient(DockingClient.defaultServiceName);

  const converter = (await robot.timeSync).getRobotTimeConverter();
  const startTime = converter.robotSecondsFromLocalSeconds(nowSec());
  const cmdEndTime = startTime + timeout;
  const cmdTimeout = cmdEndTime + 10_000;

  const timeSync = await robot.timeSync;

  const cmdId = await dockingClient.dockingCommand(
    0,
    await timeSync.endpoint.clockIdentifier,
    await timeSync.robotTimestampFromLocalSecs(cmdEndTime),
    dockingPb.PrepPoseBehavior.PREP_POSE_UNDOCK,
  );

  /* eslint-disable no-await-in-loop */
  while (converter.robotSecondsFromLocalSeconds(nowSec()) < cmdTimeout) {
    const feedback = await dockingClient.dockingCommandFeedbackFull(cmdId);

    const err = commonHeaderErrors(feedback);
    if (err) throw err;

    const status = feedback.getStatus();
    if (status === dockingPb.DockingCommandFeedbackResponse.Status.STATUS_IN_PROGRESS) {
      await sleep(1_000);
    } else if (status === dockingPb.DockingCommandFeedbackResponse.Status.STATUS_AT_PREP_POSE) {
      return;
    } else {
      const errorStatus = dockingPb.DockingCommandFeedbackResponse.Status;
      throw new CommandFailedError(
        `Failed to undock the robot, status: '${Object.keys(errorStatus).find(s => errorStatus[s] === status)}'`,
      );
    }
  }

  throw new CommandFailedError('Error undocking the robot, timeout exceeded.');
}

/**
 * Blocking helper to get dock ID that robot is currently docked at, Null if not docked.
 * @param {Robot} robot The instance of the robot to get dock id.
 * @returns {Promise<number|null>}
 */
async function getDockId(robot) {
  /** @type {DockingClient} */
  const dockingClient = await robot.ensureClient(DockingClient.defaultServiceName);
  const dockState = await dockingClient.getDockingState();
  if (dockState.getStatus() === dockingPb.DockState.DockedStatus.DOCK_STATUS_DOCKED) {
    return dockState.getDockId();
  }
  return null;
}

module.exports = {
  DockingClient,
  blockingDockRobot,
  blockingGoToPrepPose,
  blockingUndock,
  getDockId,
};

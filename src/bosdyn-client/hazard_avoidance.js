/**
 * @file For clients to use the hazard_avoidance service
 */

'use strict';

const { BaseClient, customParamsError, errorFactory, handleCommonHeaderErrors } = require('./common');
const { ResponseError, InvalidRequestError, UnsetStatusError } = require('./exceptions');

const { NoTimeSyncError } = require('./robot_command');
const { updateTimestampFilter } = require('./time_sync');
const { DefaultDict } = require('./util');
const { AddHazardsRequest, AddHazardsResponse, AddHazardResult } = require('../bosdyn/api/hazard_avoidance_pb');
const { HazardAvoidanceServiceClient } = require('../bosdyn/api/hazard_avoidance_service_grpc_pb');

/** General class of errors for hazard avoidance service. */
class AddHazardsResponseError extends ResponseError {}

const _ADD_HAZARD_STATUS_TO_ERROR = DefaultDict(() => [AddHazardsResponseError, null]);
_ADD_HAZARD_STATUS_TO_ERROR.set(AddHazardResult.Status.STATUS_HAZARDS_UPDATED, [null, null]);
_ADD_HAZARD_STATUS_TO_ERROR.set(AddHazardResult.Status.STATUS_IGNORED, [null, null]);
_ADD_HAZARD_STATUS_TO_ERROR.set(AddHazardResult.Status.STATUS_INVALID_DATA, [
  InvalidRequestError,
  'The provided request arguments are ill-formed or invalid, independent of the system state.',
]);
_ADD_HAZARD_STATUS_TO_ERROR.set(AddHazardResult.Status.STATUS_UNKNOWN, [
  UnsetStatusError,
  "Response's status field (in either message or common header) was UNKNOWN value.",
]);

const _errorFromResponse = handleCommonHeaderErrors(response => {
  for (const addHazardResult of response.getAddHazardResultsList()) {
    let result = customParamsError(addHazardResult, null, 'status', 'custom_param_error', response);
    if (result) {
      return result;
    }

    result = errorFactory(response, addHazardResult.getStatus(), AddHazardResult.Status, _ADD_HAZARD_STATUS_TO_ERROR);

    if (result) {
      result.response = response;
      return result;
    }
  }

  return null;
});

/**
 * @param {AddHazardsResponse} response
 * @returns {AddHazardResult[]}
 */
function _getAddHazardsValue(response) {
  return response.getAddHazardResultsList();
}

/**
 * Client for Hazard avoidance service.
 * @extends {BaseClient<HazardAvoidanceServiceClient>}
 */
class HazardAvoidanceClient extends BaseClient {
  static defaultServiceName = 'hazard-avoidance-service';
  static serviceType = 'bosdyn.api.HazardAvoidanceService';

  constructor() {
    super(HazardAvoidanceServiceClient);
    this._timesyncEndpoint = null;
  }

  async updateFrom(other) {
    super.updateFrom(other);

    try {
      this._timesyncEndpoint = (await other.timeSync).endpoint;
    } catch (err) {
      // pass
    }
  }

  /**
   * Accessor for timesync-endpoint that is grabbed via 'updateFrom()'.
   */
  get timeSyncEndpoint() {
    if (!this._timesyncEndpoint) {
      // (response, message): the message was passed as the response.
      throw new NoTimeSyncError(null, 'No timesync endpoint set for the robot');
    }

    return this._timesyncEndpoint;
  }

  /**
   * Add hazards to the hazard map.
   * @param {AddHazardsRequest} addHazardsReq The request including the hazard observations to add.
   * @returns {Promise<AddHazardResult[]>}
   */
  addHazards(addHazardsReq, args = {}) {
    for (const hazardOrbs of addHazardsReq.getHazardsList()) {
      if (hazardOrbs.hasAcquisitionTime()) {
        const clientTimestamp = hazardOrbs.getAcquisitionTime();
        hazardOrbs.setAcquisitionTime(updateTimestampFilter(this, clientTimestamp, this.timeSyncEndpoint));
      }
    }

    return this.call(this._stub.addHazards, addHazardsReq, _getAddHazardsValue, _errorFromResponse, false, args);
  }
}

module.exports = {
  HazardAvoidanceClient,
  AddHazardsResponseError,
};

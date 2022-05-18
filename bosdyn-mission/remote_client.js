'use strict';

const { Result } = require('./constants');

const { BaseClient, error_factory } = require('../bosdyn-client/common');
const { ResponseError } = require('../bosdyn-client/exceptions');

const remote_pb = require('../bosdyn/api/mission/remote_pb');
const remote_service_grpc_pb = require('../bosdyn/api/mission/remote_service_grpc_pb');

class InvalidSessionId extends ResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'InvalidSessionId';
  }
}

class MissingInputs extends ResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'MissingInputs';
  }
}

class MissingLeases extends ResponseError {
  constructor(res, msg) {
    super(res, msg);
    this.name = 'MissingLeases';
  }
}

function tree_status_from_tick_status(tick_status) {
  if (tick_status === remote_pb.TickResponse.Status.STATUS_FAILURE) {
    return Result.FAILURE;
  } else if (tick_status === remote_pb.TickResponse.Status.STATUS_RUNNING) {
    return Result.RUNNING;
  } else if (tick_status === remote_pb.TickResponse.Status.STATUS_SUCCESS) {
    return Result.SUCCESS;
  }
  throw new Error(`No corresponding tree status for tick status "${tick_status}"`);
}

class RemoteClient extends BaseClient {
  static default_service_name = null;
  static service_type = 'bosdyn.api.mission.RemoteMissionService';

  constructor() {
    super(remote_service_grpc_pb.RemoteMissionServiceClient);
  }

  establish_session(leases, inputs, args) {
    const req = _build_establish_session_request(inputs, leases);
    return this.call(this._stub.establishSession, req, _session_id_from_response, _establish_error_from_response, args);
  }

  establish_session_async(leases, inputs, args) {
    const req = _build_establish_session_request(inputs, leases);
    return this.call_async(
      this._stub.establishSession,
      req,
      _session_id_from_response,
      _establish_error_from_response,
      args,
    );
  }

  tick(session_id, leases, inputs, args) {
    const req = _build_tick_request(inputs, leases, session_id);
    return this.call(this._stub.tick, req, null, _tick_error_from_response, args);
  }

  tick_async(session_id, leases, inputs, args) {
    const req = _build_tick_request(inputs, leases, session_id);
    return this.call_async(this._stub.tick, req, null, _tick_error_from_response, args);
  }

  stop(session_id, args) {
    const req = new remote_pb.StopRequest().setSessionId(session_id);
    return this.call(this._stub.stop, req, null, _stop_error_from_response, args);
  }

  stop_async(session_id, args) {
    const req = new remote_pb.StopRequest().setSessionId(session_id);
    return this.call_async(this._stub.stop, req, null, _stop_error_from_response, args);
  }

  teardown_session(session_id, args) {
    const req = new remote_pb.TeardownSessionRequest().setSessionId(session_id);
    return this.call(this._stub.teardownSession, req, null, _teardown_error_from_response, args);
  }

  teardown_session_async(session_id, args) {
    const req = new remote_pb.TeardownSessionRequest().setSessionId(session_id);
    return this.call_async(this._stub.teardownSession, req, null, _teardown_error_from_response, args);
  }
}

function _copy_leases(req, leases) {
  for (let proto of leases) {
    try {
      proto = proto.lease_proto;
    } catch (e) {
      // Pass
    }
    req.addLeases(proto);
  }
}

function _build_establish_session_request(inputs, leases) {
  const req = new remote_pb.EstablishSessionRequest().setInputsList(inputs);
  _copy_leases(req, leases);
  return req;
}

function _build_tick_request(inputs, leases, session_id) {
  const req = new remote_pb.TickRequest().setSessionId(session_id).setInputsList(inputs);
  _copy_leases(req, leases);
  return req;
}

function _session_id_from_response(response) {
  return response.getSessionId();
}

const _ESTABLISH_STATUS_TO_ERROR = {
  [remote_pb.EstablishSessionResponse.Status.STATUS_OK]: [null, null],
  [remote_pb.EstablishSessionResponse.Status.STATUS_MISSING_LEASES]: [
    MissingLeases,
    'Missing leases on required resources.',
  ],
  [remote_pb.EstablishSessionResponse.Status.STATUS_MISSING_INPUTS]: [MissingInputs, 'Missing required inputs.'],
};

const _TICK_STATUS_TO_ERROR = {
  [remote_pb.TickResponse.Status.STATUS_FAILURE]: [null, null],
  [remote_pb.TickResponse.Status.STATUS_RUNNING]: [null, null],
  [remote_pb.TickResponse.Status.STATUS_SUCCESS]: [null, null],
  [remote_pb.TickResponse.Status.STATUS_MISSING_LEASES]: [MissingLeases, 'Missing leases on required resources.'],
  [remote_pb.TickResponse.Status.STATUS_MISSING_INPUTS]: [MissingInputs, 'Missing required inputs.'],
  [remote_pb.TickResponse.Status.STATUS_INVALID_SESSION_ID]: [
    InvalidSessionId,
    'Provided session ID was not valid on the server.',
  ],
};

const _STOP_STATUS_TO_ERROR = {
  [remote_pb.StopResponse.Status.STATUS_OK]: [null, null],
  [remote_pb.StopResponse.Status.STATUS_INVALID_SESSION_ID]: [
    InvalidSessionId,
    'Provided session ID was not valid on the server.',
  ],
};

const _TEARDOWN_STATUS_TO_ERROR = {
  [remote_pb.TeardownSessionResponse.Status.STATUS_OK]: [null, null],
  [remote_pb.TeardownSessionResponse.Status.STATUS_INVALID_SESSION_ID]: [
    InvalidSessionId,
    'Provided session ID was not valid on the server.',
  ],
};

function _establish_error_from_response(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(remote_pb.TickResponse.Status),
    _ESTABLISH_STATUS_TO_ERROR,
  );
}

function _tick_error_from_response(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(remote_pb.TickResponse.Status),
    _TICK_STATUS_TO_ERROR,
  );
}

function _stop_error_from_response(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(remote_pb.StopResponse.Status),
    _STOP_STATUS_TO_ERROR,
  );
}

function _teardown_error_from_response(response) {
  return error_factory(
    response,
    response.getStatus(),
    Object.keys(remote_pb.TeardownSessionResponse.Status),
    _TEARDOWN_STATUS_TO_ERROR,
  );
}

module.exports = {
  RemoteClient,
  InvalidSessionId,
  MissingInputs,
  MissingLeases,
  tree_status_from_tick_status,
};

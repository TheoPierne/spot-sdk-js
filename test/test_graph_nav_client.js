'use strict';

const assert = require('node:assert');
const test = require('node:test');

const grpc = require('@grpc/grpc-js');
const { Duration } = require('google-protobuf/google/protobuf/duration_pb');

const helpers = require('./helpers');

const dataChunkPb = require('../src/bosdyn/api/data_chunk_pb');
const graphNavPb = require('../src/bosdyn/api/graph_nav/graph_nav_pb');
const {
  GraphNavServiceClient,
  GraphNavServiceService,
} = require('../src/bosdyn/api/graph_nav/graph_nav_service_grpc_pb');
const mapPb = require('../src/bosdyn/api/graph_nav/map_pb');
const navPb = require('../src/bosdyn/api/graph_nav/nav_pb');
const headerPb = require('../src/bosdyn/api/header_pb');
const leasePb = require('../src/bosdyn/api/lease_pb');
const licensePb = require('../src/bosdyn/api/license_pb');
const timeSyncPb = require('../src/bosdyn/api/time_sync_pb');

const {
  UnsetStatusError,
  InternalServerError,
  LeaseUseError,
  LicenseError,
} = require('../src/bosdyn-client/exceptions');
const {
  GraphNavClient,
  NoTimeSyncError,
  CommandExpiredError,
  TooDistantError,
  RobotImpairedError,
  IsRecordingError,
  UnknownWaypointError,
  NoPathError,
  FeatureDesertError,
  RobotLostError,
  RobotNotLocalizedToRouteError,
  RouteNotUpdatingError,
  UnknownRouteElementsError,
  InvalidEdgeError,
  ConstraintFaultError,
  MapTooLargeLicenseError,
  InvalidGraphError,
  RobotFaultedError,
  UnknownMapInformationError,
  RequestAbortedError,
  RequestFailedError,
} = require('../src/bosdyn-client/graph_nav');
const { TimeSyncEndpoint } = require('../src/bosdyn-client/time_sync');

class MockGraphNavService extends GraphNavServiceClient {
  constructor() {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this.commonHeaderCode = headerPb.CommonError.Code.CODE_OK;
    this.navFeedbackStatus = graphNavPb.NavigationFeedbackResponse.Status.STATUS_REACHED_GOAL;
    this.navToRes = new graphNavPb.NavigateToResponse().setStatus(graphNavPb.NavigateToResponse.Status.STATUS_OK);
    this.navRouteRes = new graphNavPb.NavigateRouteResponse().setStatus(
      graphNavPb.NavigateRouteResponse.Status.STATUS_OK,
    );
    this.uploadWaypointRes = new graphNavPb.UploadWaypointSnapshotResponse();
    this.updloadEdgeRes = new graphNavPb.UploadEdgeSnapshotResponse();
    this.setLocRes = new graphNavPb.SetLocalizationResponse().setStatus(
      graphNavPb.SetLocalizationResponse.Status.STATUS_OK,
    );
    this.uploadGraphRes = new graphNavPb.UploadGraphResponse().setStatus(
      graphNavPb.UploadGraphResponse.Status.STATUS_OK,
    );
    this.downloadWpSnapshotStatus = graphNavPb.DownloadWaypointSnapshotResponse.Status.STATUS_OK;
    this.downloadEdgeSnapshotStatus = graphNavPb.DownloadEdgeSnapshotResponse.Status.STATUS_OK;
    this.leaseUseResult = null;
  }

  setLocalization(call, callback) {
    const res = this.setLocRes.clone();
    res.setHeader(new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(this.commonHeaderCode)));
    if (this.leaseUseResult) {
      res.setLeaseUseResult(this.leaseUseResult);
    }
    callback(null, res);
  }

  navigateRoute(call, callback) {
    const res = this.navRouteRes.clone();
    res.setHeader(new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(this.commonHeaderCode)));
    if (this.leaseUseResult) {
      res.addLeaseUseResults(this.leaseUseResult);
    }
    callback(null, res);
  }

  navigateTo(call, callback) {
    const res = this.navToRes.clone();
    res.setHeader(new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(this.commonHeaderCode)));
    if (this.leaseUseResult) {
      res.addLeaseUseResults(this.leaseUseResult);
    }
    callback(null, res);
  }

  clearGraph(call, callback) {
    const res = new graphNavPb.ClearGraphResponse();
    res.setHeader(new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(this.commonHeaderCode)));
    if (this.leaseUseResult) {
      res.setLeaseUseResult(this.leaseUseResult);
    }
    callback(null, res);
  }

  uploadGraph(call, callback) {
    const res = this.uploadGraphRes.clone();
    res.setHeader(new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(this.commonHeaderCode)));
    if (this.leaseUseResult) {
      res.setLeaseUseResult(this.leaseUseResult);
    }
    callback(null, res);
  }

  uploadWaypointSnapshot(call, callback) {
    const res = new graphNavPb.UploadWaypointSnapshotResponse().setStatus(
      graphNavPb.UploadWaypointSnapshotResponse.Status.STATUS_OK,
    );
    res.setHeader(new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(this.commonHeaderCode)));
    if (this.leaseUseResult) {
      res.setLeaseUseResult(this.leaseUseResult);
    }
    callback(null, res);
  }

  uploadEdgeSnapshot(call, callback) {
    const res = new graphNavPb.UploadEdgeSnapshotResponse();
    res.setHeader(new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(this.commonHeaderCode)));
    if (this.leaseUseResult) {
      res.setLeaseUseResult(this.leaseUseResult);
    }
    callback(null, res);
  }

  navigationFeedback(call, callback) {
    const res = new graphNavPb.NavigationFeedbackResponse().setStatus(this.navFeedbackStatus);
    res.setHeader(new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(this.commonHeaderCode)));
    callback(null, res);
  }

  downloadWaypointSnapshot(call) {
    const waypoint = new mapPb.WaypointSnapshot().setId('randomid');
    const waypointSerialize = waypoint.serializeBinary();
    const res = new graphNavPb.DownloadWaypointSnapshotResponse()
      .setStatus(this.downloadWpSnapshotStatus)
      .setChunk(new dataChunkPb.DataChunk().setData(waypointSerialize).setTotalSize(waypointSerialize.length));
    res.setHeader(new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(this.commonHeaderCode)));
    call.write(res);
    call.end();
  }

  downloadEdgeSnapshot(call) {
    const edge = new mapPb.EdgeSnapshot().setId('randomid');
    const edgeSerialize = edge.serializeBinary();
    const res = new graphNavPb.DownloadEdgeSnapshotResponse()
      .setStatus(this.downloadEdgeSnapshotStatus)
      .setChunk(new dataChunkPb.DataChunk().setData(edgeSerialize).setTotalSize(edgeSerialize.length));
    res.setHeader(new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(this.commonHeaderCode)));
    call.write(res);
    call.end();
  }
}

function _setup() {
  const timeSync = new TimeSyncEndpoint(null);
  timeSync._previousResponse = new timeSyncPb.TimeSyncUpdateResponse();
  timeSync.response.setState(
    new timeSyncPb.TimeSyncState()
      .setStatus(timeSyncPb.TimeSyncState.Status.STATUS_OK)
      .setBestEstimate(new timeSyncPb.TimeSyncEstimate().setClockSkew(new Duration())),
  );

  const client = new GraphNavClient();
  client._timesyncEndpoint = timeSync;
  /** @todo remove this line and adapt test */
  client._useStreamingGraphUpload = false;
  const service = new MockGraphNavService();
  const server = helpers.setupClientAndService(client, {
    servicer: GraphNavServiceService,
    service: service,
  });
  return { client, service, server };
}

test('test_feedback_exceptions', async () => {
  const { client, service, server } = _setup();

  // Service starts with valid status codes.
  const res = await client.navigationFeedback();
  assert.ok(res.getStatus() === service.navFeedbackStatus);

  // Check every non-unknown status code -- they should all be OK.
  for (const value of Object.values(graphNavPb.NavigationFeedbackResponse.Status)) {
    if (value === 0) {
      continue;
    }

    service.navFeedbackStatus = value;
    // eslint-disable-next-line no-await-in-loop
    const resNav = await client.navigationFeedback();
    assert.ok(resNav.getStatus() === value);
  }

  // UNKNOWN should cause an exception.
  service.navFeedbackStatus = graphNavPb.NavigationFeedbackResponse.Status.STATUS_UNKNOWN;
  try {
    await client.navigationFeedback();
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof UnsetStatusError);
  }

  // Errors in the common header should cause an exception.
  service.commonHeaderCode = headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR;
  try {
    await client.navigationFeedback();
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof InternalServerError);
  } finally {
    server.forceShutdown();
  }
});

test('test_navigate_to_exceptions', async () => {
  const { client, service, server } = _setup();

  let cmdId = await client.navigateTo('somewhere-id', 2);
  assert.ok(typeof cmdId === 'number');

  service.leaseUseResult = new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OLDER);
  try {
    await client.navigateTo('somewhere-id', 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof LeaseUseError);
  }

  service.leaseUseResult = new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OK);
  cmdId = await client.navigateTo('somewhere-id', 2);
  assert.ok(typeof cmdId === 'number');

  service.navToRes.setStatus(graphNavPb.NavigateToResponse.Status.STATUS_NO_TIMESYNC);
  try {
    await client.navigateTo('somewhere-id', 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof NoTimeSyncError);
  }

  service.navToRes.setStatus(graphNavPb.NavigateToResponse.Status.STATUS_EXPIRED);
  try {
    await client.navigateTo('somewhere-id', 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof CommandExpiredError);
  }

  service.navToRes.setStatus(graphNavPb.NavigateToResponse.Status.STATUS_TOO_DISTANT);
  try {
    await client.navigateTo('somewhere-id', 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof TooDistantError);
  }

  service.navToRes.setStatus(graphNavPb.NavigateToResponse.Status.STATUS_ROBOT_IMPAIRED);
  try {
    await client.navigateTo('somewhere-id', 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof RobotImpairedError);
  }

  service.navToRes.setStatus(graphNavPb.NavigateToResponse.Status.STATUS_RECORDING);
  try {
    await client.navigateTo('somewhere-id', 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof IsRecordingError);
  }

  service.navToRes.setStatus(graphNavPb.NavigateToResponse.Status.STATUS_UNKNOWN_WAYPOINT);
  try {
    await client.navigateTo('somewhere-id', 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof UnknownWaypointError);
  }

  service.navToRes.setStatus(graphNavPb.NavigateToResponse.Status.STATUS_NO_PATH);
  try {
    await client.navigateTo('somewhere-id', 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof NoPathError);
  }

  service.navToRes.setStatus(graphNavPb.NavigateToResponse.Status.STATUS_FEATURE_DESERT);
  try {
    await client.navigateTo('somewhere-id', 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof FeatureDesertError);
  }

  service.navToRes.setStatus(graphNavPb.NavigateToResponse.Status.STATUS_LOST);
  try {
    await client.navigateTo('somewhere-id', 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof RobotLostError);
  }

  service.navToRes.setStatus(graphNavPb.NavigateToResponse.Status.STATUS_NOT_LOCALIZED_TO_MAP);
  try {
    await client.navigateTo('somewhere-id', 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof RobotNotLocalizedToRouteError);
  }

  service.navToRes.setStatus(graphNavPb.NavigateToResponse.Status.STATUS_COULD_NOT_UPDATE_ROUTE);
  try {
    await client.navigateTo('somewhere-id', 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof RouteNotUpdatingError);
  } finally {
    server.forceShutdown();
  }
});

test('test_navigate_route_exceptions', async () => {
  const { client, service, server } = _setup();

  let cmdId = await client.navigateRoute(new navPb.Route(), 2);
  assert.ok(cmdId === 0);

  service.leaseUseResult = new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OLDER);
  try {
    await client.navigateRoute(new navPb.Route(), 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof LeaseUseError);
  }

  service.leaseUseResult = new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OK);
  cmdId = await client.navigateRoute(new navPb.Route(), 2);
  assert.ok(typeof cmdId === 'number');

  service.navRouteRes.setStatus(graphNavPb.NavigateRouteResponse.Status.STATUS_NO_TIMESYNC);
  try {
    await client.navigateRoute(new navPb.Route(), 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof NoTimeSyncError);
  }

  service.navRouteRes.setStatus(graphNavPb.NavigateRouteResponse.Status.STATUS_EXPIRED);
  try {
    await client.navigateRoute(new navPb.Route(), 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof CommandExpiredError);
  }

  service.navRouteRes.setStatus(graphNavPb.NavigateRouteResponse.Status.STATUS_TOO_DISTANT);
  try {
    await client.navigateRoute(new navPb.Route(), 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof TooDistantError);
  }

  service.navRouteRes.setStatus(graphNavPb.NavigateRouteResponse.Status.STATUS_ROBOT_IMPAIRED);
  try {
    await client.navigateRoute(new navPb.Route(), 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof RobotImpairedError);
  }

  service.navRouteRes.setStatus(graphNavPb.NavigateRouteResponse.Status.STATUS_RECORDING);
  try {
    await client.navigateRoute(new navPb.Route(), 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof IsRecordingError);
  }

  service.navRouteRes.setStatus(graphNavPb.NavigateRouteResponse.Status.STATUS_UNKNOWN_ROUTE_ELEMENTS);
  try {
    await client.navigateRoute(new navPb.Route(), 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof UnknownRouteElementsError);
  }

  service.navRouteRes.setStatus(graphNavPb.NavigateRouteResponse.Status.STATUS_INVALID_EDGE);
  try {
    await client.navigateRoute(new navPb.Route(), 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof InvalidEdgeError);
  }

  service.navRouteRes.setStatus(graphNavPb.NavigateRouteResponse.Status.STATUS_CONSTRAINT_FAULT);
  try {
    await client.navigateRoute(new navPb.Route(), 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof ConstraintFaultError);
  }

  service.navRouteRes.setStatus(graphNavPb.NavigateRouteResponse.Status.STATUS_FEATURE_DESERT);
  try {
    await client.navigateRoute(new navPb.Route(), 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof FeatureDesertError);
  }

  service.navRouteRes.setStatus(graphNavPb.NavigateRouteResponse.Status.STATUS_LOST);
  try {
    await client.navigateRoute(new navPb.Route(), 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof RobotLostError);
  }

  service.navRouteRes.setStatus(graphNavPb.NavigateRouteResponse.Status.STATUS_NOT_LOCALIZED_TO_ROUTE);
  try {
    await client.navigateRoute(new navPb.Route(), 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof RobotNotLocalizedToRouteError);
  }

  service.navRouteRes.setStatus(graphNavPb.NavigateRouteResponse.Status.STATUS_COULD_NOT_UPDATE_ROUTE);
  try {
    await client.navigateRoute(new navPb.Route(), 2);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof RouteNotUpdatingError);
  } finally {
    server.forceShutdown();
  }
});

test('test_clear_graph', async () => {
  const { client, service, server } = _setup();

  await client.clearGraph();

  service.leaseUseResult = new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OLDER);
  try {
    await client.clearGraph();
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof LeaseUseError);
  } finally {
    server.forceShutdown();
  }
});

test('test_upload_graph_exceptions', async () => {
  const { client, service, server } = _setup();

  client._useStreamingGraphUpload = false;

  await client.uploadGraph(null, new mapPb.Graph());

  service.leaseUseResult = new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OLDER);
  try {
    await client.uploadGraph(null, new mapPb.Graph());
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof LeaseUseError);
  }

  service.leaseUseResult = new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OK);
  await client.uploadGraph(null, new mapPb.Graph());

  service.uploadGraphRes.setStatus(graphNavPb.UploadGraphResponse.Status.STATUS_MAP_TOO_LARGE_LICENSE);
  try {
    await client.uploadGraph(null, new mapPb.Graph());
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof MapTooLargeLicenseError);
  }

  service.uploadGraphRes.setStatus(graphNavPb.UploadGraphResponse.Status.STATUS_INVALID_GRAPH);
  try {
    await client.uploadGraph(null, new mapPb.Graph());
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof InvalidGraphError);
  }

  service.uploadGraphRes
    .setStatus(graphNavPb.UploadGraphResponse.Status.STATUS_UNKNOWN)
    .setLicenseStatus(licensePb.LicenseInfo.Status.STATUS_EXPIRED);
  try {
    await client.uploadGraph(null, new mapPb.Graph());
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof LicenseError);
  } finally {
    server.forceShutdown();
  }
});

test('test_upload_graph_exceptions_streaming', async () => {
  const { client, service, server } = _setup();

  await client.uploadGraph(null, new mapPb.Graph());

  service.leaseUseResult = new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OLDER);
  try {
    await client.uploadGraph(null, new mapPb.Graph());
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof LeaseUseError);
  }

  service.leaseUseResult = new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OK);
  await client.uploadGraph(null, new mapPb.Graph());

  service.uploadGraphRes.setStatus(graphNavPb.UploadGraphResponse.Status.STATUS_MAP_TOO_LARGE_LICENSE);
  try {
    await client.uploadGraph(null, new mapPb.Graph());
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof MapTooLargeLicenseError);
  }

  service.uploadGraphRes.setStatus(graphNavPb.UploadGraphResponse.Status.STATUS_INVALID_GRAPH);
  try {
    await client.uploadGraph(null, new mapPb.Graph());
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof InvalidGraphError);
  }

  service.uploadGraphRes
    .setStatus(graphNavPb.UploadGraphResponse.Status.STATUS_UNKNOWN)
    .setLicenseStatus(licensePb.LicenseInfo.Status.STATUS_EXPIRED);
  try {
    await client.uploadGraph(null, new mapPb.Graph());
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof LicenseError);
  } finally {
    server.forceShutdown();
  }
});

test('test_upload_waypoint_exceptions', async () => {
  const { client, service, server } = _setup();

  await client.uploadWaypointSnapshot(new mapPb.WaypointSnapshot());

  service.leaseUseResult = new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OLDER);
  try {
    await client.uploadWaypointSnapshot(new mapPb.WaypointSnapshot());
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof LeaseUseError);
  } finally {
    server.forceShutdown();
  }
});

test('test_upload_edge_exceptions', async () => {
  const { client, service, server } = _setup();

  await client.uploadEdgeSnapshot(new mapPb.EdgeSnapshot());

  service.leaseUseResult = new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OLDER);
  try {
    await client.uploadEdgeSnapshot(new mapPb.EdgeSnapshot());
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof LeaseUseError);
  } finally {
    server.forceShutdown();
  }
});

test('test_set_localization_exceptions', async () => {
  const { client, service, server } = _setup();

  await client.setLocalization(new navPb.Localization());

  service.leaseUseResult = new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OLDER);
  try {
    await client.setLocalization(new navPb.Localization());
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof LeaseUseError);
  }

  service.leaseUseResult = new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OK);
  await client.setLocalization(new navPb.Localization());

  service.setLocRes.setStatus(graphNavPb.SetLocalizationResponse.Status.STATUS_ROBOT_IMPAIRED);
  try {
    await client.setLocalization(new navPb.Localization());
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof RobotFaultedError);
  }

  service.setLocRes.setStatus(graphNavPb.SetLocalizationResponse.Status.STATUS_UNKNOWN_WAYPOINT);
  try {
    await client.setLocalization(new navPb.Localization());
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof UnknownMapInformationError);
  }

  service.setLocRes.setStatus(graphNavPb.SetLocalizationResponse.Status.STATUS_ABORTED);
  try {
    await client.setLocalization(new navPb.Localization());
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof RequestAbortedError);
  }

  service.setLocRes.setStatus(graphNavPb.SetLocalizationResponse.Status.STATUS_FAILED);
  try {
    await client.setLocalization(new navPb.Localization());
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof RequestFailedError);
  } finally {
    server.forceShutdown();
  }
});

test('test_download_waypoint_snapshot', async () => {
  const { client, service, server } = _setup();

  await client.downloadWaypointSnapshot('mywaypoint');

  service.commonHeaderCode = headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR;
  try {
    await client.downloadWaypointSnapshot('mywaypoint');
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof InternalServerError);
  }

  service.commonHeaderCode = headerPb.CommonError.Code.CODE_OK;
  service.downloadWpSnapshotStatus = graphNavPb.DownloadWaypointSnapshotResponse.Status.STATUS_SNAPSHOT_DOES_NOT_EXIST;
  try {
    await client.downloadWaypointSnapshot('mywaypoint');
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof UnknownMapInformationError);
  } finally {
    server.forceShutdown();
  }
});

test('test_download_edge_snapshot', async () => {
  const { client, service, server } = _setup();

  await client.downloadEdgeSnapshot('myedge');

  service.commonHeaderCode = headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR;
  try {
    await client.downloadEdgeSnapshot('myedge');
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof InternalServerError);
  }

  service.commonHeaderCode = headerPb.CommonError.Code.CODE_OK;
  service.downloadEdgeSnapshotStatus = graphNavPb.DownloadEdgeSnapshotResponse.Status.STATUS_SNAPSHOT_DOES_NOT_EXIST;
  try {
    await client.downloadEdgeSnapshot('myedge');
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof UnknownMapInformationError);
  } finally {
    server.forceShutdown();
  }
});

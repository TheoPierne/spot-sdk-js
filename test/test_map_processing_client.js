'use strict';

const assert = require('node:assert');
const test = require('node:test');

const grpc = require('@grpc/grpc-js');
const { Duration } = require('google-protobuf/google/protobuf/duration_pb');

const helpers = require('./helpers');

const mapPb = require('../src/bosdyn/api/graph_nav/map_pb');
const mapProcessingPb = require('../src/bosdyn/api/graph_nav/map_processing_pb');
const {
  MapProcessingServiceClient,
  MapProcessingServiceService,
} = require('../src/bosdyn/api/graph_nav/map_processing_service_grpc_pb');
const headerPb = require('../src/bosdyn/api/header_pb');
const timeSyncPb = require('../src/bosdyn/api/time_sync_pb');

const {
  MapProcessingServiceClient: MapProcessingClient,
  InvalidGraphError,
  MissingSnapshotsError,
  _ANCHORING_COMMON_ERRORS,
} = require('../src/bosdyn-client/map_processing');
const { TimeSyncEndpoint } = require('../src/bosdyn-client/time_sync');

class MockMapProcessingServicer extends MapProcessingServiceClient {
  constructor() {
    super('127.0.0.1:54520', grpc.credentials.createInsecure());
    this.commonHeaderCode = headerPb.CommonError.Code.CODE_OK;
    this.topologyProcessStatus = mapProcessingPb.ProcessTopologyResponse.Status.STATUS_OK;
    this.anchoringProcessStatus = mapProcessingPb.ProcessAnchoringResponse.Status.STATUS_OK;
    this.graph = new mapPb.Graph();
    this.graph.addEdges(new mapPb.Edge().setId(new mapPb.Edge.Id().setFromWaypoint('w1').setToWaypoint('w2')));
  }

  processTopology(call) {
    const res = new mapProcessingPb.ProcessTopologyResponse()
      .setHeader(new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(this.commonHeaderCode)))
      .setStatus(this.topologyProcessStatus)
      .setNewSubgraph(this.graph.clone());
    call.write(res);
    call.end();
  }

  processAnchoring(call) {
    const res = new mapProcessingPb.ProcessAnchoringResponse()
      .setHeader(new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(this.commonHeaderCode)))
      .setStatus(this.anchoringProcessStatus);
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

  const client = new MapProcessingClient();
  client._timesyncEndpoint = timeSync;
  /** @todo remove this line and adapt test */
  client._useStreamingGraphUpload = false;
  const service = new MockMapProcessingServicer();
  const server = helpers.setupClientAndService(client, {
    servicer: MapProcessingServiceService,
    service: service,
  });
  return { client, service, server };
}

test('test_process_topology_exceptions', async () => {
  const { client, service, server } = _setup();

  await client.processTopology(new mapProcessingPb.ProcessTopologyRequest.Params(), true);

  service.topologyProcessStatus = mapProcessingPb.ProcessTopologyResponse.Status.STATUS_INVALID_GRAPH;
  try {
    await client.processTopology(new mapProcessingPb.ProcessTopologyRequest.Params(), true);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof InvalidGraphError);
  }

  service.topologyProcessStatus = mapProcessingPb.ProcessTopologyResponse.Status.STATUS_MISSING_WAYPOINT_SNAPSHOTS;
  try {
    await client.processTopology(new mapProcessingPb.ProcessTopologyRequest.Params(), true);
    assert.fail();
  } catch (err) {
    assert.ok(err instanceof MissingSnapshotsError);
  } finally {
    server.forceShutdown();
  }
});

test('test_process_anchoring_exceptions', async () => {
  const { client, service, server } = _setup();

  await client.processAnchoring(new mapProcessingPb.ProcessAnchoringRequest.Params(), true, false);

  for (const [status, error] of Object.entries(_ANCHORING_COMMON_ERRORS)) {
    service.anchoringProcessStatus = status;
    try {
      // eslint-disable-next-line no-await-in-loop
      await client.processAnchoring(new mapProcessingPb.ProcessAnchoringRequest.Params(), true, false);
    } catch (err) {
      assert.ok(err instanceof error[0]);
    }
  }

  server.forceShutdown();
});

'use strict';

// Regression tests for bugs of the Python -> JavaScript translation (core and robot safety).
// Each test reproduces a bug that the other tests did not catch.

const assert = require('node:assert');
const { Buffer } = require('node:buffer');
const { spawnSync } = require('node:child_process');
const { createHash } = require('node:crypto');
const { EventEmitter } = require('node:events');
const fs = require('node:fs');
const http = require('node:http');
const https = require('node:https');
const { createRequire } = require('node:module');
const net = require('node:net');
const os = require('node:os');
const path = require('node:path');
const process = require('node:process');
const { PassThrough, Writable } = require('node:stream');
const test = require('node:test');
const { setImmediate } = require('node:timers');
const { setTimeout: sleep } = require('node:timers/promises');

const numjs = require('@d4c/numjs').default;
const grpc = require('@grpc/grpc-js');
const { Any } = require('google-protobuf/google/protobuf/any_pb');
const { Duration } = require('google-protobuf/google/protobuf/duration_pb');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');
const { DoubleValue, Int32Value, Int64Value, StringValue } = require('google-protobuf/google/protobuf/wrappers_pb');

const armCommandPb = require('../src/bosdyn/api/arm_command_pb');
const avPb = require('../src/bosdyn/api/audio_visual_pb');
const basicCommandPb = require('../src/bosdyn/api/basic_command_pb');
const bddfPb = require('../src/bosdyn/api/bddf_pb');
const dataAcquisitionPb = require('../src/bosdyn/api/data_acquisition_pb');
const pluginServiceGrpcPb = require('../src/bosdyn/api/data_acquisition_plugin_service_grpc_pb');
const dataAcquisitionServiceGrpcPb = require('../src/bosdyn/api/data_acquisition_service_grpc_pb');
const dataAcquisitionStorePb = require('../src/bosdyn/api/data_acquisition_store_pb');
const storeServiceGrpcPb = require('../src/bosdyn/api/data_acquisition_store_service_grpc_pb');
const dataBufferPb = require('../src/bosdyn/api/data_buffer_pb');
const dataBufferServiceGrpcPb = require('../src/bosdyn/api/data_buffer_service_grpc_pb');
const dataChunkPb = require('../src/bosdyn/api/data_chunk_pb');
const dockingPb = require('../src/bosdyn/api/docking/docking_pb');
const estopPb = require('../src/bosdyn/api/estop_pb');
const estopServiceGrpcPb = require('../src/bosdyn/api/estop_service_grpc_pb');
const fullBodyCommandPb = require('../src/bosdyn/api/full_body_command_pb');
const geometryPb = require('../src/bosdyn/api/geometry_pb');
const areaCallbackPb = require('../src/bosdyn/api/graph_nav/area_callback_pb');
const areaCallbackServiceGrpcPb = require('../src/bosdyn/api/graph_nav/area_callback_service_grpc_pb');
const graphNavPb = require('../src/bosdyn/api/graph_nav/graph_nav_pb');
const mapPb = require('../src/bosdyn/api/graph_nav/map_pb');
const mapProcessingPb = require('../src/bosdyn/api/graph_nav/map_processing_pb');
const navPb = require('../src/bosdyn/api/graph_nav/nav_pb');
const headerPb = require('../src/bosdyn/api/header_pb');
const imagePb = require('../src/bosdyn/api/image_pb');
const imageServiceGrpcPb = require('../src/bosdyn/api/image_service_grpc_pb');
const keepalivePb = require('../src/bosdyn/api/keepalive/keepalive_pb');
const leasePb = require('../src/bosdyn/api/lease_pb');
const localGridPb = require('../src/bosdyn/api/local_grid_pb');
const logStatusPb = require('../src/bosdyn/api/log_status/log_status_pb');
const missionPb = require('../src/bosdyn/api/mission/mission_pb');
const missionServiceGrpcPb = require('../src/bosdyn/api/mission/mission_service_grpc_pb');
const nodesPb = require('../src/bosdyn/api/mission/nodes_pb');
const remotePb = require('../src/bosdyn/api/mission/remote_pb');
const remoteServiceGrpcPb = require('../src/bosdyn/api/mission/remote_service_grpc_pb');
const missionUtilPb = require('../src/bosdyn/api/mission/util_pb');
const mobilityCommandPb = require('../src/bosdyn/api/mobility_command_pb');
const networkComputeBridgePb = require('../src/bosdyn/api/network_compute_bridge_pb');
const networkComputeBridgeServiceGrpcPb = require('../src/bosdyn/api/network_compute_bridge_service_grpc_pb');
const payloadPb = require('../src/bosdyn/api/payload_pb');
const payloadSoftwareUpdatePb = require('../src/bosdyn/api/payload_software_update_pb');
const payloadSoftwareUpdateServiceGrpcPb = require('../src/bosdyn/api/payload_software_update_service_grpc_pb');
const powerPb = require('../src/bosdyn/api/power_pb');
const robotCommandPb = require('../src/bosdyn/api/robot_command_pb');
const robotIdPb = require('../src/bosdyn/api/robot_id_pb');
const robotStatePb = require('../src/bosdyn/api/robot_state_pb');
const serviceCustomizationPb = require('../src/bosdyn/api/service_customization_pb');
const serviceFaultPb = require('../src/bosdyn/api/service_fault_pb');
const signalsPb = require('../src/bosdyn/api/signals_pb');
const softwarePackagePb = require('../src/bosdyn/api/software_package_pb');
const choreographySequencePb = require('../src/bosdyn/api/spot/choreography_sequence_pb');
const choreographyServiceGrpcPb = require('../src/bosdyn/api/spot/choreography_service_grpc_pb');
const spotCommandPb = require('../src/bosdyn/api/spot/robot_command_pb');
const spotCheckPb = require('../src/bosdyn/api/spot/spot_check_pb');
const spotCamAudioPb = require('../src/bosdyn/api/spot_cam/audio_pb');
const spotCamCompositorPb = require('../src/bosdyn/api/spot_cam/compositor_pb');
const spotCamHealthPb = require('../src/bosdyn/api/spot_cam/health_pb');
const spotCamPtzPb = require('../src/bosdyn/api/spot_cam/ptz_pb');
const spotCamServiceGrpcPb = require('../src/bosdyn/api/spot_cam/service_grpc_pb');
const spotCamStreamqualityPb = require('../src/bosdyn/api/spot_cam/streamquality_pb');
const synchronizedCommandPb = require('../src/bosdyn/api/synchronized_command_pb');
const timeSyncPb = require('../src/bosdyn/api/time_sync_pb');
const trajectoryPb = require('../src/bosdyn/api/trajectory_pb');
const worldObjectPb = require('../src/bosdyn/api/world_object_pb');

const {
  AnimationFileFormatError,
  convertAnimationFileToProto,
  writeAnimationToDest,
} = require('../src/bosdyn-choreography-client/animation_file_to_proto');
const {
  AnimationUploadHelper,
  ChoreographyClient,
  loadChoreographySequenceFromBinaryFile,
  loadChoreographySequenceFromTxtFile,
  saveChoreographySequenceToFile,
} = require('../src/bosdyn-choreography-client/choreography');
const { doorAction, safeSubstitute } = require('../src/bosdyn-client/access_controlled_door_util');
const areaCallbackClient = require('../src/bosdyn-client/area_callback');
const {
  AreaCallbackRegionHandlerBase,
  IncorrectUsage,
  PathBlocked,
} = require('../src/bosdyn-client/area_callback_region_handler_base');
const { AudioVisualClient, checkColor } = require('../src/bosdyn-client/audio_visual');
const { AudioVisualHelper } = require('../src/bosdyn-client/audio_visual_helper');
const { InvalidLoginError, InvalidTokenError } = require('../src/bosdyn-client/auth');
const { downloadData } = require('../src/bosdyn-client/bddf_download');
const { createSecureChannelCreds, translateException } = require('../src/bosdyn-client/channel');
const { commonHeaderErrors, errorFactory, handleUnsetStatusError } = require('../src/bosdyn-client/common');
const {
  DataAcquisitionClient,
  UnknownCaptureTypeError,
  _getLiveDataError,
} = require('../src/bosdyn-client/data_acquisition');
const {
  acquireAndProcessRequest,
  downloadDataREST,
  makeTimeQueryParamsFromGroupName,
} = require('../src/bosdyn-client/data_acquisition_helpers');
const { DataAcquisitionPluginClient } = require('../src/bosdyn-client/data_acquisition_plugin');
const { DataAcquisitionPluginService, makeError } = require('../src/bosdyn-client/data_acquisition_plugin_service');
const { DataAcquisitionStoreClient } = require('../src/bosdyn-client/data_acquisition_store');
const { DataBufferClient, logEvent } = require('../src/bosdyn-client/data_buffer');
const { parseFromChunks } = require('../src/bosdyn-client/data_chunk');
const {
  DirectoryRegistrationKeepAlive,
  DirectoryRegistrationResponseError,
  ServiceDoesNotExistError,
} = require('../src/bosdyn-client/directory_registration');
const { blockingDockRobot } = require('../src/bosdyn-client/docking');
const { DockingClient } = require('../src/bosdyn-client/docking');
const { ErrorCallbackResult } = require('../src/bosdyn-client/error_callback_result');
const estop = require('../src/bosdyn-client/estop');
const {
  BosdynError,
  CustomParamError,
  InternalServerError,
  LeaseUseError,
  ResponseError,
  UnsetStatusError,
  TimeSyncRequired,
  TimedOutError,
  RpcError,
  RetryableRpcError,
  TransientFailureError,
  ValueError,
} = require('../src/bosdyn-client/exceptions');
const exceptions = require('../src/bosdyn-client/exceptions');
const {
  FaultResponseError,
  ServiceFaultDoesNotExistError,
  _triggerServiceFaultError,
} = require('../src/bosdyn-client/fault');
const { getATformB } = require('../src/bosdyn-client/frame_helpers');
const { NMEAParser } = require('../src/bosdyn-client/gps/NMEAParser');
const { GpsListener, NMEAStreamReader, StreamTimeoutError } = require('../src/bosdyn-client/gps/gps_listener');
const { NtripClient, NtripClientParams } = require('../src/bosdyn-client/gps/ntrip_client');
const graphNav = require('../src/bosdyn-client/graph_nav');
const { GraphNavClient } = require('../src/bosdyn-client/graph_nav');
const { HazardAvoidanceClient } = require('../src/bosdyn-client/hazard_avoidance');
const {
  ImageClient,
  depthImageToPointcloud,
  pixelToCameraSpace,
  saveImagesAsFiles,
  writePgmOrPpm,
} = require('../src/bosdyn-client/image');
const {
  CameraBaseImageServicer,
  CameraInterface,
  VisualImageSource,
} = require('../src/bosdyn-client/image_service_helpers');
const { KeepaliveClient, Policy, PolicyKeepalive } = require('../src/bosdyn-client/keepalive');
const { Lease, LeaseWallet, LeaseKeepAlive, NoSuchLease } = require('../src/bosdyn-client/lease');
const { ResourceHierarchy } = require('../src/bosdyn-client/lease_resource_hierarchy');
const { LeaseValidator, LeaseValidatorResponseProcessor } = require('../src/bosdyn-client/lease_validator');
const { LocalGridClient } = require('../src/bosdyn-client/local_grid');
const { LogStatusClient } = require('../src/bosdyn-client/log_status');
const { LoggerUtil } = require('../src/bosdyn-client/logger_util');
const mapProcessing = require('../src/bosdyn-client/map_processing');
const {
  SE2Pose,
  SE2Velocity,
  SE3Pose,
  SE3Velocity,
  Quat,
  Vec2,
  Vec3,
  isWithinThreshold,
  poseToXyzYaw,
} = require('../src/bosdyn-client/math_helpers');
const networkComputeBridgeClient = require('../src/bosdyn-client/network_compute_bridge_client');
const { PayloadRegistrationClient } = require('../src/bosdyn-client/payload_registration');
const { PayloadRegistrationKeepAlive } = require('../src/bosdyn-client/payload_registration');
const { PayloadSoftwareUpdate, PayloadSoftwareUpdateClient } = require('../src/bosdyn-client/payload_software_update');
const power = require('../src/bosdyn-client/power');
const { DataBufferLoggingProcessor } = require('../src/bosdyn-client/processors');
const { RayCastClient } = require('../src/bosdyn-client/ray_cast');
const recording = require('../src/bosdyn-client/recording');
const { Robot, UnregisteredServiceNameError } = require('../src/bosdyn-client/robot');
const {
  RobotCommandBuilder,
  RobotCommandClient,
  RobotCommandStreamingClient,
  CommandFailedErrorWithFeedback,
  blockForTrajectoryCmd,
  blockUntilArmArrives,
  blockingStand,
  blockingSelfright,
} = require('../src/bosdyn-client/robot_command');
const { RobotStateClient } = require('../src/bosdyn-client/robot_state');
const { Sdk } = require('../src/bosdyn-client/sdk');
const { getData } = require('../src/bosdyn-client/signals_helpers');
const { AudioClient } = require('../src/bosdyn-client/spot_cam/audio');
const { CompositorClient } = require('../src/bosdyn-client/spot_cam/compositor');
const { HealthClient } = require('../src/bosdyn-client/spot_cam/health');
const { LightsHelper } = require('../src/bosdyn-client/spot_cam/lights_helper');
const { PowerClient: SpotCamPowerClient } = require('../src/bosdyn-client/spot_cam/power');
const { createFocusState, shiftPanAngle } = require('../src/bosdyn-client/spot_cam/ptz');
const { StreamQualityClient } = require('../src/bosdyn-client/spot_cam/streamquality');
const spotCheck = require('../src/bosdyn-client/spot_check');
const { TimeSyncEndpoint, TimeSyncThread, timespecToRobotTimespan } = require('../src/bosdyn-client/time_sync');
const { TokenCacheFilesystem } = require('../src/bosdyn-client/token_cache');
const { safeApiCall } = require('../src/bosdyn-client/url_validation_util');
const clientUtil = require('../src/bosdyn-client/util');
const { WorldObjectClient } = require('../src/bosdyn-client/world_object');
const {
  DataError,
  DataFormatError,
  DataReader,
  DataWriter,
  EOFError,
  GrpcReader,
  GrpcServiceWriter,
  ParseError: BddfParseError,
  PodSeriesReader,
  PodSeriesWriter,
  ProtobufChannelReader,
  ProtobufReader,
  ProtobufSeriesWriter,
  SeriesNotUniqueError,
  StreamDataReader,
} = require('../src/bosdyn-core/bddf');
const { FileIndexer } = require('../src/bosdyn-core/bddf/file_indexer');
const { defaultPool, mergeFrom } = require('../src/bosdyn-core/descriptor_pool');
const { Event } = require('../src/bosdyn-core/event');
const { EulerZXY } = require('../src/bosdyn-core/geometry');
const { Queue, QueueFullError } = require('../src/bosdyn-core/queue');
const textFormat = require('../src/bosdyn-core/text_format');
const {
  RobotTimeConverter,
  nowSec,
  secondsToDuration,
  secondsToTimestamp,
  setTimestampFromNsec,
} = require('../src/bosdyn-core/util');
const { MissionClient } = require('../src/bosdyn-mission/client');
const { Result } = require('../src/bosdyn-mission/constants');
const { RemoteClient } = require('../src/bosdyn-mission/remote_client');
const {
  InvalidConversion,
  getValueFromConstantValueMessage,
  isStringIdentifier,
  jsTypeToPbType,
  jsVarToValue,
  mostRestrictiveTravelParams,
  nodeSpecToShortString,
  oneLineStr,
  protoEnumToResultConstant,
  protoFromObject,
  resultConstantToProtoEnum,
} = require('../src/bosdyn-mission/util');
const { OrbitClient, createClient } = require('../src/bosdyn-orbit/client');
const { UnauthenticatedClientError, WebhookSignatureVerificationError } = require('../src/bosdyn-orbit/exceptions');
const orbitUtils = require('../src/bosdyn-orbit/utils');

const { EstopClient, EstopEndpoint, EstopKeepAlive, responseFromChallenge } = estop;
const { setupLogging, DefaultDict } = clientUtil;
const { validateWebhookPayload } = orbitUtils;

const MOBILITY_PARAMS_TYPE = 'bosdyn.api.spot.MobilityParams';

function okHeader() {
  return new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_OK));
}

/** A fake unary gRPC method, as found on a stub. */
function unaryMethod(methodPath, handler) {
  const method = (request, options, callback) => setImmediate(() => callback(null, handler(request, options)));
  return Object.assign(method, { path: methodPath, requestStream: false, responseStream: false });
}

/** A fake server streaming gRPC method, as found on a stub. */
function streamMethod(methodPath, responses) {
  const method = () => {
    const stream = new EventEmitter();
    setImmediate(() => {
      responses.forEach(response => stream.emit('data', response));
      stream.emit('end');
    });
    return stream;
  };
  return Object.assign(method, { path: methodPath, requestStream: false, responseStream: true });
}

// ---------------------------------------------------------------------------------------------------------------
// Core: errors, logging, calls, packaging.
// ---------------------------------------------------------------------------------------------------------------

test('commonHeaderErrors treats an unset header or error as CODE_UNSPECIFIED, like Python', () => {
  const response = new robotStatePb.RobotStateResponse();
  assert.ok(commonHeaderErrors(response) instanceof UnsetStatusError);
  response.setHeader(new headerPb.ResponseHeader());
  assert.ok(commonHeaderErrors(response) instanceof UnsetStatusError);
  response.setHeader(okHeader());
  assert.strictEqual(commonHeaderErrors(response), null);
});

test('ResponseError.toString() gives the proto type name instead of throwing', () => {
  const error = new ResponseError(new robotStatePb.RobotStateResponse(), 'boom');
  assert.strictEqual(String(error), 'bosdyn.api.RobotStateResponse (ResponseError): boom');
  assert.strictEqual(`${new ResponseError(null, 'no response')}`, 'Error (ResponseError): no response');
});

test('exception hierarchy matches Python', () => {
  assert.ok(new TransientFailureError(new Error('x'), 'transient') instanceof RetryableRpcError);
  assert.ok(!(new TimeSyncRequired() instanceof RpcError));
  assert.strictEqual(String(new TimeSyncRequired()), 'TimeSyncRequired');
});

test('errorFactory handles a status missing from a plain Map and enum objects as names', () => {
  const status = { STATUS_UNKNOWN: 0, STATUS_OK: 1, STATUS_NEW: 7 };
  const error = errorFactory(new robotStatePb.RobotStateResponse(), 7, status, new Map());
  assert.ok(error instanceof ResponseError);
  assert.strictEqual(error.message, 'Code: 7 (STATUS_NEW)');
});

test('an error function returning undefined does not throw undefined', () => {
  const client = new RobotStateClient();
  const response = new robotStatePb.RobotStateResponse();
  assert.strictEqual(
    client.handleResponse(response, () => undefined, null),
    response,
  );
});

test('call() does not modify the args of the caller and uses the lazy debug logging', async () => {
  const client = new RobotStateClient();
  let deadline = null;
  client._stub = {
    getRobotState: unaryMethod('/bosdyn.api.RobotStateService/GetRobotState', (request, options) => {
      deadline = options.deadline;
      return new robotStatePb.RobotStateResponse().setHeader(okHeader()).setRobotState(new robotStatePb.RobotState());
    }),
  };
  const args = { timeout: 1234 };
  await client.getRobotState(args);
  await client.getRobotState(args);
  assert.deepStrictEqual(args, { timeout: 1234 });
  assert.ok(deadline - Date.now() <= 1234);
});

test('GrpcServiceRunner serves a servicer until stopped or interrupted, like Python (it was missing)', async () => {
  const nodeProcess = require('node:process');
  const { setImmediate: nextLoop } = require('node:timers/promises');
  const { GrpcServiceRunner, stripGetImageResponse } = require('../src/bosdyn-client/server_util');
  const { RobotIdServiceService } = require('../src/bosdyn/api/robot_id_service_grpc_pb');
  const { RobotIdClient } = require('../src/bosdyn-client/robot_id');
  const helpers = require('./helpers');
  class RobotIdServicer {
    getRobotId(call, callback) {
      const response = new robotIdPb.RobotIdResponse().setRobotId(new robotIdPb.RobotId().setSerialNumber('S1'));
      callback(null, helpers.addCommonHeader(response, call.request));
    }
  }
  // On 127.0.0.1 (all the interfaces by default, like Python).
  const local = [0, 4, null, null, 3, true, null, '127.0.0.1'];
  const runner = new GrpcServiceRunner(new RobotIdServicer(), RobotIdServiceService, ...local);
  const port = await runner.waitForStart();
  assert.ok(port > 0 && runner.port === port);
  const client = new RobotIdClient();
  const channel = new grpc.Channel(`127.0.0.1:${port}`, grpc.credentials.createInsecure(), {});
  client.channel = channel;
  try {
    assert.strictEqual((await client.getId()).getSerialNumber(), 'S1');
    // SIGTERM (e.g. docker stop) ends runUntilInterrupt() and the server.
    const listeners = nodeProcess.listenerCount('SIGTERM');
    const running = runner.runUntilInterrupt();
    await nextLoop();
    nodeProcess.emit('SIGTERM');
    await running;
    assert.strictEqual(nodeProcess.listenerCount('SIGTERM'), listeners);
    await assert.rejects(client.getId({ timeout: 2_000 }));
  } finally {
    channel.close();
    await runner.stop();
  }

  // A function which attaches the servicer, like the add_..._to_server() of Python.
  const attached = [];
  const attach = (servicer, server) => {
    attached.push(servicer);
    server.addService(RobotIdServiceService, servicer);
  };
  const second = new GrpcServiceRunner(new RobotIdServicer(), attach, ...local);
  await second.waitForStart();
  await second.stop();
  assert.strictEqual(attached.length, 1);
  assert.strictEqual(typeof stripGetImageResponse, 'function');
});

test('the errors of the robot, token cache and data buffer are errors of the SDK (BosdynError), like Python', () => {
  const { BosdynError: SdkBaseError } = require('../src/bosdyn-client/exceptions');
  const errors = [
    new (require('../src/bosdyn-client/token_cache').NotInCacheError)('missing'),
    new (require('../src/bosdyn-client/robot').UnregisteredServiceNameError)('svc'),
    new (require('../src/bosdyn-client/data_buffer').InvalidArgument)('bad'),
    new (require('../src/bosdyn-client/data_service').InvalidArgument)('bad'),
  ];
  // They extended Error: `catch (e) { if (e instanceof BosdynError) ... }` missed them.
  for (const error of errors) assert.ok(error instanceof SdkBaseError, error.name);
  assert.deepStrictEqual(
    errors.map(error => error.name),
    ['NotInCacheError', 'UnregisteredServiceNameError', 'InvalidArgument', 'InvalidArgument'],
  );
});

test('compareVersions() compares the versions like the tuples of version_tuple() in Python', () => {
  const { compareVersions, versionTuple, toVersionArray } = require('../src/bosdyn-client/robot_id');
  // `>=` on arrays compares strings: [1, 10, 0] >= [1, 9, 0] is false.
  assert.deepStrictEqual(
    [
      [
        [1, 10, 0],
        [1, 9, 0],
      ],
      [
        [1, 2],
        [1, 2, 0],
      ],
      [
        [1, 2, 0],
        [1, 2, 0],
      ],
      [
        [2, 0, 0],
        [1, 99, 99],
      ],
    ].map(([a, b]) => compareVersions(a, b)),
    [1, -1, 0, 1],
  );
  assert.strictEqual(versionTuple, toVersionArray);
});

test('call() has no deadline for a null timeout and sends the metadata, like the keyword arguments of Python', async () => {
  const { RobotIdServiceService } = require('../src/bosdyn/api/robot_id_service_grpc_pb');
  const { RobotIdClient } = require('../src/bosdyn-client/robot_id');
  const helpers = require('./helpers');
  const received = [];
  const client = new RobotIdClient();
  const server = await helpers.setupClientAndService(client, {
    servicer: RobotIdServiceService,
    service: {
      getRobotId(call, callback) {
        received.push([call.getDeadline(), call.metadata.get('x-bosdyn-test')]);
        callback(null, helpers.addCommonHeader(new robotIdPb.RobotIdResponse(), call.request));
      },
    },
  });
  try {
    // A null timeout was 30 s (None in Python: no deadline), and the metadata was dropped.
    await client.getId({ timeout: null, metadata: [['x-bosdyn-test', 'pairs']] });
    await client.getId({ metadata: { 'x-bosdyn-test': 'object' } });
    const metadata = new grpc.Metadata();
    metadata.set('x-bosdyn-test', 'instance');
    await client.getId({ timeout: 5_000, metadata, waitForReady: true });
  } finally {
    // The after() of helpers.js is registered by the first test which requires it: closed here.
    client.channel.close();
    server.forceShutdown();
  }
  assert.strictEqual(received[0][0], Infinity);
  assert.deepStrictEqual(received[0][1], ['pairs']);
  const deadlines = received.slice(1).map(([deadline]) => Number(deadline) - Date.now());
  assert.ok(deadlines[0] > 25_000 && deadlines[0] <= 30_000, deadlines);
  assert.ok(deadlines[1] > 0 && deadlines[1] <= 5_000, deadlines);
  assert.deepStrictEqual(
    received.slice(1).map(([, value]) => value),
    [['object'], ['instance']],
  );
});

test('the loggers write to stderr, like the StreamHandler of Python', () => {
  const { execPath } = require('node:process');
  const loggerUtil = path.join(__dirname, '..', 'src', 'bosdyn-client', 'logger_util.js');
  const script = `require(${JSON.stringify(loggerUtil)}).LoggerUtil.getLogger('STDERR_TEST').warn('a warning');`;
  const run = spawnSync(execPath, ['-e', script], { encoding: 'utf8', timeout: 30_000 });
  // They were written to stdout, mixed with the output of the programs (e.g. the command line).
  assert.strictEqual(run.stdout, '');
  assert.match(run.stderr, /\[STDERR_TEST\]: a warning/);
});

test('setupLogging() can filter the repeated messages, and safePbEnumToString() names any value, like Python', () => {
  const { execPath } = require('node:process');
  const utilPath = path.join(__dirname, '..', 'src', 'bosdyn-client', 'util.js');
  const loggerUtil = path.join(__dirname, '..', 'src', 'bosdyn-client', 'logger_util.js');
  const script = [
    `require(${JSON.stringify(utilPath)}).setupLogging(false, true);`,
    `const logger = require(${JSON.stringify(loggerUtil)}).LoggerUtil.getLogger('DEDUP_TEST');`,
    "for (const [level, text] of [['warn', 'same'], ['warn', 'same'], ['warn', 'other'], ['error', 'e'], ['error', 'e']])",
    '  logger[level](text);',
  ].join('\n');
  const run = spawnSync(execPath, ['-e', script], { encoding: 'utf8', timeout: 30_000 });
  // The second argument was the levels to always print: the repeated warning was logged.
  const messages = run.stderr
    .split('\n')
    .filter(Boolean)
    .map(line => line.split(': ').at(-1).trim());
  assert.deepStrictEqual(messages, ['same', 'other', 'e', 'e'], run.stderr);

  const { safePbEnumToString } = require('../src/bosdyn-client/util');
  const { PowerCommandStatus } = require('../src/bosdyn/api/power_pb');
  assert.deepStrictEqual(
    [
      safePbEnumToString(PowerCommandStatus.STATUS_SUCCESS, PowerCommandStatus),
      safePbEnumToString(99, PowerCommandStatus),
    ],
    ['STATUS_SUCCESS', '<unknown> (value: 99)'],
  );
});

test('loggers default to info, and setupLogging() sets the level of every logger', () => {
  const client = new RobotStateClient();
  const child = LoggerUtil.getChild(client.logger, 'GetRobotState');
  assert.strictEqual(child, LoggerUtil.getChild(client.logger, 'GetRobotState'));
  assert.strictEqual(typeof client.logger.warn, 'function');
  try {
    setupLogging(true);
    assert.strictEqual(client.logger.level, 'debug');
    assert.strictEqual(child.level, 'debug');
    assert.strictEqual(new RobotCommandClient().logger.level, 'debug');
    setupLogging(false);
    assert.strictEqual(client.logger.level, 'info');
  } finally {
    LoggerUtil.setGlobalLevel('info');
  }
});

test('DefaultDict returns the default value for missing keys', () => {
  const dict = DefaultDict(() => ['default', null]);
  dict.set(1, [null, null]);
  assert.deepStrictEqual(dict.get(1), [null, null]);
  assert.deepStrictEqual(dict.get(2), ['default', null]);
});

test('the package exports its sub-paths', () => {
  // test/ has its own package.json: require the package by its name from a file of the package itself.
  const packageRequire = createRequire(require.resolve('../src/index.js'));
  assert.ok(packageRequire('spot-sdk-js/src/bosdyn-client/robot_command').RobotCommandClient);
  assert.ok(packageRequire('spot-sdk-js/src/bosdyn-client/lease.js').LeaseKeepAlive);
  assert.ok(packageRequire('spot-sdk-js/src/bosdyn/api/header_pb').RequestHeader);
});

test('robot channels get the max message lengths (grpc-js defaults to 4 MB)', () => {
  const robot = new Robot('test');
  const options = robot._channelOptions([['grpc.keepalive_time_ms', 1000]]);
  assert.strictEqual(options['grpc.keepalive_time_ms'], 1000);
  assert.strictEqual(options['grpc.max_receive_message_length'], robot.maxReceiveMessageLength);
  assert.strictEqual(options['grpc.max_send_message_length'], robot.maxSendMessageLength);
  assert.strictEqual(
    robot._channelOptions({ 'grpc.max_receive_message_length': 10 })['grpc.max_receive_message_length'],
    10,
  );
});

test('concurrent ensureClient() calls create a single client', async () => {
  const robot = new Robot('test');
  let created = 0;
  class ClientMock {
    constructor() {
      created += 1;
    }

    updateFrom() {}
  }
  robot.serviceTypeByName.mock = 'MockType';
  robot.serviceClientFactoriesByType.MockType = ClientMock;
  const clients = await Promise.all([1, 2, 3].map(() => robot.ensureClient('mock', {})));
  assert.strictEqual(created, 1);
  assert.ok(clients.every(client => client === clients[0]));
});

test('DefaultDict is a usable Map (size, entries, delete, forEach and the iteration threw)', () => {
  const table = DefaultDict(() => ['default']);
  table.set(1, 'a').set(2, 'b');
  assert.deepStrictEqual(table.get(3), ['default']);
  assert.strictEqual(table.has(3), false);
  assert.strictEqual(table.size, 2);
  assert.deepStrictEqual(
    [...table.entries()],
    [
      [1, 'a'],
      [2, 'b'],
    ],
  );
  assert.strictEqual(table.delete(1), true);
  const seen = [];
  table.forEach((value, key) => seen.push([key, value]));
  assert.deepStrictEqual([seen, [...table]], [[[2, 'b']], [[2, 'b']]]);
});

test('the token cache keys and the cached usernames keep the dots of the usernames, like Python', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'bosdyn-tokens-'));
  try {
    const cache = new TokenCacheFilesystem(directory);
    cache.write('SN1234.alice', 'token-a');
    cache.write('SN1234.bob.smith', 'token-b');
    // The keys of the files '<serial>.<username>.jwt' (they were cut at the first dot: the serial number).
    assert.deepStrictEqual(cache.match('SN1234').sort(), ['SN1234.alice', 'SN1234.bob.smith']);
    const usernames = Robot.prototype.getCachedUsernames.call({ tokenCache: cache, serialNumber: 'SN1234' });
    assert.deepStrictEqual(usernames, ['alice', 'bob.smith']);
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

test('the token cache expands a leading ~ to the home directory, like os.path.expanduser() in Python', () => {
  // '~/tokens' was a directory named '~' in the current directory.
  assert.strictEqual(new TokenCacheFilesystem('~/tokens').directory, path.join(os.homedir(), 'tokens'));
  assert.strictEqual(new TokenCacheFilesystem().directory, path.join(os.homedir(), '.bosdyn', 'user_tokens'));
  assert.strictEqual(new TokenCacheFilesystem('a/~/b').directory, path.join('a', '~', 'b'));
});

test('getHardwareConfigWithLinkInfo() accepts a configuration without skeleton, like Python', async () => {
  const client = new RobotStateClient();
  client.getRobotHardwareConfiguration = async () => new robotStatePb.HardwareConfiguration();
  client.getRobotLinkModel = async () => {
    throw new Error('no link to model');
  };
  assert.ok((await client.getHardwareConfigWithLinkInfo()) instanceof robotStatePb.HardwareConfiguration);
});

test('translateException() classifies the errors of grpc-js like the ones of C-core in Python', () => {
  const unavailable = details => translateException({ code: grpc.status.UNAVAILABLE, details });
  // A wrong host name is persistent (it was a retryable UnableToConnectToRobotError, retried forever).
  const dns = unavailable('Name resolution failed for target dns:nonexistent-host.invalid:443');
  assert.ok(dns instanceof exceptions.UnknownDnsNameError && dns instanceof exceptions.PersistentRpcError);
  assert.ok(
    unavailable(
      "No connection established. Last error: Error: Hostname/IP does not match certificate's altnames: Host: a. " +
        "is not in the cert's altnames: DNS:b",
    ) instanceof exceptions.NonexistentAuthorityError,
  );
  // A refused connection stays retryable.
  assert.ok(
    unavailable('No connection established. Last error: Error: connect ECONNREFUSED 127.0.0.1:443.') instanceof
      exceptions.UnableToConnectToRobotError,
  );
});

test('payload version credentials, plugin status methods, signal data without value, fault errors, like Python', async () => {
  // The credentials of the 2.4+ robots (only the deprecated fields were set).
  const payloads = new PayloadRegistrationClient();
  payloads._stub = new Proxy({}, { get: () => () => {} });
  const sent = [];
  payloads.call = async (rpcMethod, request) => sent.push(request);
  await payloads.updatePayloadVersion('guid-1', 'secret-1', new robotIdPb.SoftwareVersion().setMajorVersion(2));
  const credentials = sent[0].getPayloadCredentials();
  assert.deepStrictEqual([credentials.getGuid(), credentials.getSecret()], ['guid-1', 'secret-1']);

  // The methods shared with DataAcquisitionClient (missing).
  for (const name of ['getStatus', 'getServiceInfo', 'cancelAcquisition']) {
    assert.strictEqual(typeof DataAcquisitionPluginClient.prototype[name], 'function', name);
  }

  // A signal without data or value (TypeError).
  assert.strictEqual(getData(new signalsPb.SignalData()), null);
  assert.strictEqual(getData(new signalsPb.SignalData().setData(new signalsPb.SignalData.Data())), null);

  // An unknown status is a FaultResponseError (a ResponseError).
  const header = new headerPb.ResponseHeader().setError(
    new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_OK),
  );
  const error = _triggerServiceFaultError(
    new serviceFaultPb.TriggerServiceFaultResponse().setHeader(header).setStatus(9),
  );
  assert.ok(error instanceof FaultResponseError);
});

test('makeParameter() takes a BigInt, and the Spot CAM, NTRIP and BDDF modules have the names of Python', async () => {
  const { makeParameter } = require('../src/bosdyn-client/data_buffer');
  // A BigInt, the integer of JS like the int of Python, gave null.
  assert.strictEqual(makeParameter('count', 42n).getIntValue(), 42);
  assert.throws(() => makeParameter('big', 2n ** 60n), RangeError);

  const spotCam = require('../src/bosdyn-client/spot_cam');
  assert.strictEqual(spotCam.IMAGE_SERVICE_NAME, 'spot-cam-image');
  assert.strictEqual(spotCam.CLIENTS.length, 10);
  assert.strictEqual(typeof spotCam.ptz.createFocusState, 'function');
  const ntrip = require('../src/bosdyn-client/gps/ntrip_client');
  assert.deepStrictEqual(
    [ntrip.DEFAULT_NTRIP_PORT, ntrip.DEFAULT_NTRIP_TLS_PORT, ntrip.SOCKET_TIMEOUT],
    [2101, 2102, 10],
  );

  // The end of `await using` closes the BDDF writers and readers, like `with` in Python.
  const filename = path.join(os.tmpdir(), `bosdyn-dispose-${Date.now()}.bddf`);
  try {
    const outfile = await fs.promises.open(filename, 'w');
    const writer = new DataWriter(outfile.createWriteStream(), {});
    await writer[Symbol.asyncDispose]();
    const reader = await DataReader.create({ filename });
    await reader[Symbol.asyncDispose]();
    assert.strictEqual(reader._fh, null);
  } finally {
    fs.rmSync(filename, { force: true });
  }
});

test('the async tasks query periodically and handle their results and errors, like async_tasks of Python', async () => {
  const { AsyncTasks, AsyncPeriodicQuery } = require('../src/bosdyn-client/async_tasks');
  const coreUtil = require('../src/bosdyn-core/util');
  const { setImmediate: nextLoop } = require('node:timers/promises');
  let now = 100;
  const logs = [];
  const pending = [];
  class StateQuery extends AsyncPeriodicQuery {
    _startQuery() {
      return new Promise((resolve, reject) => {
        pending.push({ resolve, reject });
      });
    }
  }
  coreUtil.setClockSource(() => now);
  try {
    const query = new StateQuery('robot_state', null, { error: message => logs.push(message) }, 1.0);
    const tasks = new AsyncTasks([query]);
    tasks.update();
    tasks.update();
    // One query at a time, and its result handled by the next update.
    assert.strictEqual(pending.length, 1);
    pending[0].resolve('state-1');
    await nextLoop();
    tasks.update();
    assert.strictEqual(query.proto, 'state-1');
    tasks.update();
    assert.strictEqual(pending.length, 1);
    // The next query after the period; an error of the SDK is handled (logged).
    now = 102;
    tasks.update();
    pending[1].reject(new RpcError(null, 'unavailable'));
    await nextLoop();
    tasks.update();
    assert.deepStrictEqual(logs, ['Failure getting robot_state: RpcError: unavailable']);
    // Another error is thrown, like Python.
    now = 104;
    tasks.update();
    pending[2].reject(new TypeError('bug'));
    await nextLoop();
    assert.throws(() => tasks.update(), TypeError);
  } finally {
    coreUtil.setClockSource(coreUtil.systemTimeSec);
  }
});

test('the error classes of Python are exported (robot command, graph nav, spot check, choreography)', () => {
  const robotCommand = require('../src/bosdyn-client/robot_command');
  const graphNavModule = require('../src/bosdyn-client/graph_nav');
  const spotCheckModule = require('../src/bosdyn-client/spot_check');
  const choreography = require('../src/bosdyn-choreography-client/choreography');
  // Defined, even mapped to STATUS_DOCKED, but not exported.
  assert.ok(robotCommand.DockedError.prototype instanceof robotCommand.RobotCommandResponseError);
  // The deprecated name of Python is the parent of UnknownRouteElementsError.
  assert.ok(graphNavModule.UnknownRouteElementsError.prototype instanceof graphNavModule.UnkownRouteElementsError);
  for (const name of ['CameraSpotCheckTimedOutError', 'CameraSpotCheckFeedbackError']) {
    assert.strictEqual(typeof spotCheckModule[name], 'function', name);
  }
  for (const name of [
    'InvalidUploadedChoreographyError',
    'RobotCommandIssuesError',
    'LeaseError',
    'AnimationValidationFailedError',
    'NoRecordedInformation',
    'UnknownRecordingSessionId',
    'RecordingBufferFull',
    'IncompleteData',
  ]) {
    assert.ok(choreography[name]?.prototype instanceof ResponseError, name);
  }
});

test('treeToString() gives the text of Python, and the helpers and errors of Python are exported', async () => {
  const { setImmediate: nextLoop } = require('node:timers/promises');
  const { treeToString } = require('../src/bosdyn-mission/util');
  class N {
    constructor(name, children = [], lastResult = null) {
      Object.assign(this, { name, children, last_result: lastResult });
    }

    toString() {
      return this.name;
    }
  }
  const tree = new N('root', [new N('a', [new N('')]), new N('b', [], 2)], 1);
  // Expected values from Python (there were spaces everywhere: '| root  (N)').
  assert.strictEqual(treeToString(tree), '\n|root (N)\n|-a (N)\n|--(N)\n|-b (N)');
  assert.strictEqual(
    treeToString(tree, 0, true),
    '\n|root (N)\n|Status code: [1]\n|-a (N)\n|-Status code: [None]\n|--(N)\n|--Status code: [None]\n|-b (N)\n' +
      '|-Status code: [2]',
  );

  assert.strictEqual(typeof require('../src/bosdyn-client/data_acquisition_helpers').cleanFilename, 'function');
  const metricsLogging = require('../src/bosdyn-client/metrics_logging');
  assert.ok(new metricsLogging.MissingKeysError(null, 'x') instanceof ResponseError);
  assert.ok(new metricsLogging.UnableToOptOutError(null, 'x') instanceof ResponseError);

  // The capture_lock of Python: one blockingCapture() at a time.
  class Camera extends CameraInterface {
    constructor() {
      super();
      this.active = 0;
      this.maxActive = 0;
    }

    blockingCapture() {
      return this.captureLock.run(async () => {
        this.active++;
        this.maxActive = Math.max(this.maxActive, this.active);
        await nextLoop();
        this.active--;
        return ['data', 1];
      });
    }
  }
  const camera = new Camera();
  await Promise.all([camera.blockingCapture(), camera.blockingCapture(), camera.blockingCapture()]);
  assert.strictEqual(camera.maxActive, 1);
});

test('the NMEA parser ends a line at a lone \\r too, like splitlines() in Python', () => {
  const errors = [];
  const ignore = () => undefined;
  const logger = { error: message => errors.push(message), warn: ignore, info: ignore, debug: ignore };
  const parser = new NMEAParser(logger);
  const gga = '$GPGGA,123519.00,4807.038,N,01131.000,E,1,08,0.9,545.4,M,46.9,M,,*69';
  const zda = '$GPZDA,123519.00,26,09,2026,00,00*60';
  const converter = { robotTimestampFromLocalSecs: () => new Timestamp().setSeconds(1) };
  parser.parse(`${gga}\r${zda}\r\n$GPGGA,1`, converter, false);
  // The two sentences were parsed as one line (a parse error).
  assert.deepStrictEqual(errors, []);
  assert.strictEqual(parser.fullLines.length, 2);
  // The last line is incomplete without a '\n': kept for the next data.
  assert.strictEqual(parser.data, '$GPGGA,1');
});

test('serializedFromStrings() joins any iterable, and reads the strings as base64 like jspb', () => {
  const { serializedFromStrings } = require('../src/bosdyn-client/data_chunk');
  function* datas() {
    yield 'aGVs';
    yield new Uint8Array([108, 111]);
  }
  // A generator had no map(), and 'aGVs' was the bytes of its UTF-8 text.
  assert.strictEqual(serializedFromStrings(datas()).toString(), 'hello');
});

test('the Spot CAM system log and media retrieval log their chunks at debug level only, like Python', () => {
  const { MediaLogClient } = require('../src/bosdyn-client/spot_cam/media_log');
  const healthPb = require('../src/bosdyn/api/spot_cam/health_pb');
  const loggingPb = require('../src/bosdyn/api/spot_cam/logging_pb');
  const chunk = new dataChunkPb.DataChunk().setTotalSize(2).setData(new Uint8Array([1, 2]));
  const printed = [];
  const saved = { debug: console.debug, log: console.log };
  console.debug = (...args) => printed.push(args);
  console.log = (...args) => printed.push(args);
  try {
    const log = HealthClient.prototype._getSystemLogFromResponse([new healthPb.GetSystemLogResponse().setData(chunk)]);
    const media = MediaLogClient.prototype._retrieveFromResponse([new loggingPb.RetrieveResponse().setData(chunk)]);
    assert.deepStrictEqual(
      [[...log], [...media.data]],
      [
        [1, 2],
        [1, 2],
      ],
    );
  } finally {
    Object.assign(console, saved);
  }
  // console.debug() printed a line for each chunk, always.
  assert.deepStrictEqual(printed, []);
});

test('the formatting helpers of bosdyn-core give the strings of Python (expected values from Python)', () => {
  const coreUtil = require('../src/bosdyn-core/util');
  const { Parameter } = require('../src/bosdyn/api/parameter_pb');
  const duration = (seconds, nanos) => new Duration().setSeconds(seconds).setNanos(nanos);
  // 1.05 s was '1.50 sec', 1 s + 5 ns '1.5', 3909 s '1:5:9', 1234.5 m '1.2345 km'.
  assert.deepStrictEqual(
    [
      [1, 50_000_000],
      [0, 5_000],
      [-2, -7_000_000],
      [3, 0],
    ].map(([s, n]) => coreUtil.durationStr(duration(s, n))),
    ['1.050 sec', '5 usec', '-2.007 sec', '3.000 sec'],
  );
  assert.deepStrictEqual(
    [coreUtil.timestampStr(duration(1, 5)), coreUtil.timestampStr(duration(-1, -5))],
    ['1.000000005', '-1.000000005'],
  );
  assert.deepStrictEqual([0, 3909, 36001.9].map(coreUtil.secsToHms), ['0:00:00', '1:05:09', '10:00:01']);
  assert.deepStrictEqual([999.994, 1234.5].map(coreUtil.distanceStr), ['999.99 m', '1.23 km']);
  // format_metric() was missing.
  assert.deepStrictEqual(
    [
      new Parameter().setLabel('distance').setFloatValue(1234.5).setUnits('m'),
      new Parameter().setLabel('speed').setFloatValue(1.2345).setUnits('m/s'),
      new Parameter().setLabel('flag').setBoolValue(true),
      new Parameter().setLabel('uptime').setDuration(duration(3909, 0)),
    ].map(coreUtil.formatMetric),
    [
      'distance             1.23 km',
      'speed                1.23 m/s',
      'flag                 True ',
      'uptime               1:05:09',
    ],
  );
  // A Date, like the datetime of Python (a locale string).
  const date = coreUtil.timestampToDatetime(new Timestamp().setSeconds(1_700_000_000).setNanos(500_000_000));
  assert.ok(date instanceof Date);
  assert.strictEqual(date.getTime(), 1_700_000_000_500);
});

test('the clock source gives seconds like set_clock_source() of Python, and the time is finer than 1 ms', () => {
  const coreUtil = require('../src/bosdyn-core/util');
  try {
    coreUtil.setClockSource(() => 1234.5);
    // A clock of seconds, like time.time(), was read as milliseconds (1.2345 s).
    assert.deepStrictEqual([coreUtil.nowSec(), coreUtil.nowMsec(), coreUtil.nowNsec()], [1234.5, 1_234_500, 1.2345e12]);
  } finally {
    coreUtil.setClockSource(coreUtil.systemTimeSec);
  }
  // Date.now() only has milliseconds: the timestamps were multiples of 1 ms (time.time() has microseconds).
  const samples = Array.from({ length: 200 }, () => coreUtil.nowNsec());
  assert.ok(samples.some(nsec => nsec % 1e6 !== 0));
  assert.ok(Math.abs(coreUtil.nowMsec() - Date.now()) < 3);
});

test('the fixed decimals round the exact ties to even, like format() in Python (expected values from Python)', () => {
  const coreUtil = require('../src/bosdyn-core/util');
  const { Parameter } = require('../src/bosdyn/api/parameter_pb');
  // toFixed() rounds them away from zero: 0.125 was '0.13'.
  assert.deepStrictEqual(
    [0.125, 0.375, 0.625, -0.125, -0.001, 1e22].map(value => coreUtil.formatFixed(value, 2)),
    ['0.12', '0.38', '0.62', '-0.12', '-0.00', '10000000000000000000000.00'],
  );
  assert.deepStrictEqual(
    [0.5, 1.5, 2.5, -2.5].map(value => coreUtil.formatFixed(value, 0)),
    ['0', '2', '2', '-2'],
  );
  assert.deepStrictEqual(
    [NaN, Infinity, -Infinity].map(value => coreUtil.formatFixed(value, 2)),
    ['nan', 'inf', '-inf'],
  );
  assert.deepStrictEqual([0.125, 1000.625 * 1000, 2125].map(coreUtil.distanceStr), ['0.12 m', '1000.62 km', '2.12 km']);
  assert.strictEqual(
    coreUtil.formatMetric(new Parameter().setLabel('speed').setFloatValue(0.125).setUnits('m/s')),
    'speed                0.12 m/s',
  );
});

// ---------------------------------------------------------------------------------------------------------------
// Command line utilities: authentication and payload credentials.
// ---------------------------------------------------------------------------------------------------------------

test('authenticate() stops after a token, lets other errors through, and needs a tty or askpass, like Python', async () => {
  const calls = [];
  const robot = (tokenError = null) => ({
    userToken: 'token',
    async authenticateWithToken(token) {
      calls.push(`token ${token}`);
      if (tokenError) throw tokenError;
    },
    async authenticate(username, password) {
      calls.push(`login ${username} ${password}`);
    },
  });
  const env = { username: process.env.BOSDYN_CLIENT_USERNAME, password: process.env.BOSDYN_CLIENT_PASSWORD };
  delete process.env.BOSDYN_CLIENT_USERNAME;
  delete process.env.BOSDYN_CLIENT_PASSWORD;
  try {
    // A token success went on to the credentials, and every error of the token was ignored.
    await clientUtil.authenticate(robot());
    assert.deepStrictEqual(calls, ['token token']);
    await assert.rejects(clientUtil.authenticate(robot(new Error('network'))), /network/);
    // An invalid token: the credentials of askpass (which was not awaited).
    calls.length = 0;
    await clientUtil.authenticate(robot(new InvalidTokenError(null, 'expired')), async () => ['user', 'pw']);
    assert.deepStrictEqual(calls, ['token token', 'login user pw']);
    // Not a tty and no askpass (the test was inverted: it threw with an askpass).
    const noToken = { userToken: null, authenticate: async () => calls.push('login') };
    if (!process.stdin.isTTY) {
      await assert.rejects(clientUtil.authenticate(noToken), /Stdin is not a tty and no askpass specified/);
    }
  } finally {
    if (env.username !== undefined) process.env.BOSDYN_CLIENT_USERNAME = env.username;
    if (env.password !== undefined) process.env.BOSDYN_CLIENT_PASSWORD = env.password;
  }
});

test('cliLoginPrompt() and cliAuth() ask like Python, and do not install the process.exit() of prompt on SIGINT', async () => {
  const prompt = require('prompt');
  const original = { start: prompt.start, get: prompt.get, pause: prompt.pause };
  const asked = [];
  const starts = [];
  const answers = [];
  prompt.start = options => starts.push(options);
  prompt.get = async ([{ description }]) => {
    asked.push(description);
    return { question: answers.shift() ?? '' };
  };
  prompt.pause = () => {};
  try {
    // Only the password when both are known, the username confirmed when the password is unknown.
    answers.push('secret');
    assert.deepStrictEqual(await clientUtil.cliLoginPrompt('user', 'old'), ['user', 'secret']);
    answers.push('', 'pw');
    assert.deepStrictEqual(await clientUtil.cliLoginPrompt('user'), ['user', 'pw']);
    assert.deepStrictEqual(asked, ['[user] Password: ', 'Username for robot [user]: ', '[user] Password: ']);
    assert.ok(starts.every(options => options.noHandleSIGINT === true));

    // Asked again until the login succeeds (a failure threw).
    let attempts = 0;
    const robot = {
      async authenticate() {
        attempts += 1;
        if (attempts === 1) throw new InvalidLoginError(null, 'invalid login');
      },
    };
    answers.push('bad', 'good');
    await clientUtil.cliAuth(robot, 'user', null);
    assert.strictEqual(attempts, 2);
  } finally {
    Object.assign(prompt, original);
  }
});

test('the payload credentials arguments accept a credentials file, like Python (--guid and --secret were required)', () => {
  const { ArgumentParser } = require('argparse');
  const parser = new ArgumentParser();
  parser.error = message => {
    throw new Error(message);
  };
  clientUtil.addPayloadCredentialsArguments(parser);
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'bosdyn-credentials-'));
  try {
    const file = path.join(directory, 'credentials');
    fs.writeFileSync(file, 'guid-1\nsecret-1\n');
    // argparse stores the file as payload_credentials_file (payloadCredentialsFile was read).
    const options = parser.parse_args(['--payload-credentials-file', file]);
    assert.deepStrictEqual(clientUtil.getGuidAndSecret(options), { guid: 'guid-1', secret: 'secret-1' });
    assert.deepStrictEqual(clientUtil.getGuidAndSecret(parser.parse_args(['--guid', 'g', '--secret', 's'])), {
      guid: 'g',
      secret: 's',
    });
    assert.throws(() => parser.parse_args(['--guid', 'g', '--payload-credentials-file', file]), /not allowed/);
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

// ---------------------------------------------------------------------------------------------------------------
// Robot commands.
// ---------------------------------------------------------------------------------------------------------------

function commandClientWithSkew(skewSec) {
  const converter = new RobotTimeConverter(skewSec * 1e9);
  const endpoint = { clockIdentifier: 'clock', getRobotTimeConverter: () => converter };
  const client = new RobotCommandClient();
  Object.defineProperty(client, 'timesyncEndpoint', { get: () => endpoint });
  return {
    client,
    update(command, endTimeSecs = null) {
      const request = client._getRobotCommandRequest(null, command);
      client._updateCommandTimestamps(request.getCommand(), endTimeSecs, endpoint);
      return request.getCommand();
    },
  };
}

test('commands without mobility command can be sent (stop, safe power off, arm...)', () => {
  const { update } = commandClientWithSkew(0);
  for (const build of ['stopCommand', 'freezeCommand', 'selfrightCommand', 'safePowerOffCommand', 'armStowCommand']) {
    assert.doesNotThrow(() => update(RobotCommandBuilder[build]()), build);
  }
});

test('MobilityParams are packed in the command, with their type', () => {
  const command = RobotCommandBuilder.synchroStandCommand({ bodyHeight: 0.2 });
  const mobilityCommand = command.getSynchronizedCommand().getMobilityCommand();
  assert.ok(mobilityCommand.hasParams());
  assert.strictEqual(mobilityCommand.getParams().getTypeUrl(), `type.googleapis.com/${MOBILITY_PARAMS_TYPE}`);
  const params = mobilityCommand
    .getParams()
    .unpack(spotCommandPb.MobilityParams.deserializeBinary, MOBILITY_PARAMS_TYPE);
  const point = params.getBodyControl().getBaseOffsetRtFootprint().getPointsList()[0];
  assert.ok(Math.abs(point.getPose().getPosition().getZ() - 0.2) < 1e-9);
});

test('end_time is set in robot time', () => {
  const { update } = commandClientWithSkew(5);
  const endTimeSecs = Date.now() / 1000 + 1;
  const command = update(RobotCommandBuilder.synchroVelocityCommand(0.5, 0, 0), endTimeSecs);
  const request = command.getSynchronizedCommand().getMobilityCommand().getSe2VelocityRequest();
  assert.ok(request.hasEndTime());
  const endTime = request.getEndTime().getSeconds() + request.getEndTime().getNanos() / 1e9;
  assert.ok(Math.abs(endTime - (endTimeSecs + 5)) < 1e-3);
});

test('reference times are converted to robot time, without changing the command of the caller', () => {
  const { update } = commandClientWithSkew(5);
  const trajectory = new trajectoryPb.SE3Trajectory()
    .setPointsList([new trajectoryPb.SE3TrajectoryPoint()])
    .setReferenceTime(new Timestamp().setSeconds(100));
  const params = new spotCommandPb.MobilityParams().setBodyControl(
    new spotCommandPb.BodyControlParams().setBaseOffsetRtFootprint(trajectory),
  );
  const command = RobotCommandBuilder.synchroStandCommand({ params });
  const referenceTime = cmd =>
    cmd
      .getSynchronizedCommand()
      .getMobilityCommand()
      .getParams()
      .unpack(spotCommandPb.MobilityParams.deserializeBinary, MOBILITY_PARAMS_TYPE)
      .getBodyControl()
      .getBaseOffsetRtFootprint()
      .getReferenceTime()
      .getSeconds();
  assert.strictEqual(referenceTime(update(command)), 105);
  assert.strictEqual(referenceTime(command), 100);

  const arm = RobotCommandBuilder.armJointMoveHelper([[0, 0, 0, 0, 0, 0]], [1], null, new Timestamp().setSeconds(100));
  const sentArm = update(arm);
  assert.strictEqual(
    sentArm
      .getSynchronizedCommand()
      .getArmCommand()
      .getArmJointMoveCommand()
      .getTrajectory()
      .getReferenceTime()
      .getSeconds(),
    105,
  );
});

/** A RobotCommandClient-like mock: robotCommand() returns 1, robotCommandFeedback() follows `feedbacks`. */
function commandClientMock(feedbacks) {
  let calls = 0;
  return {
    get calls() {
      return calls;
    },
    async robotCommand() {
      return 1;
    },
    async robotCommandFeedback() {
      calls += 1;
      await sleep(2);
      const feedback = feedbacks(calls);
      if (feedback instanceof Error) throw feedback;
      return feedback;
    },
  };
}

function mobilityFeedback(mobilityStatus, standStatus) {
  return new robotCommandPb.RobotCommandFeedbackResponse().setFeedback(
    new robotCommandPb.RobotCommandFeedback().setSynchronizedFeedback(
      new synchronizedCommandPb.SynchronizedCommand.Feedback().setMobilityCommandFeedback(
        new mobilityCommandPb.MobilityCommand.Feedback()
          .setStatus(mobilityStatus)
          .setStandFeedback(new basicCommandPb.StandCommand.Feedback().setStatus(standStatus)),
      ),
    ),
  );
}

test('blockingStand excuses RPC timeouts only, and reports a failed stand with its feedback', async () => {
  const PROCESSING = basicCommandPb.RobotCommandFeedbackStatus.Status.STATUS_PROCESSING;
  const STANDING = basicCommandPb.StandCommand.Feedback.Status.STATUS_IS_STANDING;
  const TRANSITIONING = basicCommandPb.StandCommand.Feedback.Status.STATUS_IN_PROGRESS;

  const standing = commandClientMock(n =>
    n === 1
      ? new TimedOutError(new Error('deadline'), 'timeout')
      : mobilityFeedback(PROCESSING, n < 3 ? TRANSITIONING : STANDING),
  );
  await blockingStand(standing, 2_000);
  assert.strictEqual(standing.calls, 3);

  const leaseLost = commandClientMock(() => new ResponseError(null, 'lease lost'));
  await assert.rejects(blockingStand(leaseLost, 2_000), /lease lost/);

  const failed = commandClientMock(() =>
    mobilityFeedback(basicCommandPb.RobotCommandFeedbackStatus.Status.STATUS_COMMAND_OVERRIDDEN, 0),
  );
  await assert.rejects(blockingStand(failed, 2_000), error => {
    assert.ok(error instanceof CommandFailedErrorWithFeedback);
    assert.ok(error.message.includes('STATUS_COMMAND_OVERRIDDEN'));
    assert.ok(error.feedback);
    return true;
  });
});

test('blockingCommand() checks the full body, mobility, arm and gripper statuses, like Python', async () => {
  const { blockingCommand } = require('../src/bosdyn-client/robot_command');
  const { STATUS_PROCESSING, STATUS_COMMAND_OVERRIDDEN } = basicCommandPb.RobotCommandFeedbackStatus.Status;
  const STANDING = basicCommandPb.StandCommand.Feedback.Status.STATUS_IS_STANDING;
  const synchronized = ({ mobility = null, arm = null }) => {
    const feedback = new synchronizedCommandPb.SynchronizedCommand.Feedback();
    if (mobility !== null) feedback.setMobilityCommandFeedback(mobility);
    if (arm !== null) feedback.setArmCommandFeedback(new armCommandPb.ArmCommand.Feedback().setStatus(arm));
    return new robotCommandPb.RobotCommandFeedbackResponse().setFeedback(
      new robotCommandPb.RobotCommandFeedback().setSynchronizedFeedback(feedback),
    );
  };
  const standing = new mobilityCommandPb.MobilityCommand.Feedback()
    .setStatus(STATUS_PROCESSING)
    .setStandFeedback(new basicCommandPb.StandCommand.Feedback().setStatus(STANDING));

  // A failed arm command fails the stand (the arm feedback was ignored).
  const armFailed = commandClientMock(() => synchronized({ mobility: standing, arm: STATUS_COMMAND_OVERRIDDEN }));
  await assert.rejects(blockingStand(armFailed, 2_000), error => {
    assert.ok(error instanceof CommandFailedErrorWithFeedback);
    assert.strictEqual(error.message, 'Command (ID 1) no longer processing (STATUS_COMMAND_OVERRIDDEN)');
    return true;
  });
  // A synchronized feedback without mobility feedback is not a failure (it was STATUS_UNKNOWN).
  const noMobilityFirst = commandClientMock(n =>
    n === 1 ? synchronized({ arm: STATUS_PROCESSING }) : synchronized({ mobility: standing }),
  );
  await blockingStand(noMobilityFirst, 2_000);
  assert.strictEqual(noMobilityFirst.calls, 2);
  // Neither full body nor synchronized feedback.
  const empty = commandClientMock(() => new robotCommandPb.RobotCommandFeedbackResponse());
  await assert.rejects(blockingStand(empty, 2_000), /Command \(ID 1\) has neither full body nor synchronized feedback/);

  // The generic helper passes the end time of the command.
  const sent = [];
  const client = commandClientMock(() => synchronized({ mobility: standing }));
  client.robotCommand = (command, endTimeSecs) => {
    sent.push(endTimeSecs);
    return Promise.resolve(1);
  };
  await blockingCommand(client, new robotCommandPb.RobotCommand(), () => true, 1234.5, 2_000);
  assert.deepStrictEqual(sent, [1234.5]);
});

test('blockingSelfright returns once self-right is completed (the status enum is under .Status)', async () => {
  const client = commandClientMock(() =>
    new robotCommandPb.RobotCommandFeedbackResponse().setFeedback(
      new robotCommandPb.RobotCommandFeedback().setFullBodyFeedback(
        new fullBodyCommandPb.FullBodyCommand.Feedback()
          .setStatus(basicCommandPb.RobotCommandFeedbackStatus.Status.STATUS_PROCESSING)
          .setSelfrightFeedback(
            new basicCommandPb.SelfRightCommand.Feedback().setStatus(
              basicCommandPb.SelfRightCommand.Feedback.Status.STATUS_COMPLETED,
            ),
          ),
      ),
    ),
  );
  await blockingSelfright(client, 2_000);
  assert.strictEqual(client.calls, 1);
});

test('constrainedManipulationCommand() and jointCommand() build the commands of Python', () => {
  const Request = basicCommandPb.ConstrainedManipulationCommand.Request;
  const LINEAR_FORCE = Request.TaskType.TASK_TYPE_R3_LINEAR_FORCE;
  const POSITION = Request.ControlMode.CONTROL_MODE_POSITION;
  // The force and torque limits are DoubleValue messages (getForceLimit() was undefined: it always threw).
  const manipulation = RobotCommandBuilder.constrainedManipulationCommand(
    LINEAR_FORCE,
    new geometryPb.Wrench(),
    20,
    5,
    'body',
    0.5,
    null,
    0.2,
    null,
    POSITION,
  )
    .getFullBodyCommand()
    .getConstrainedManipulationRequest();
  assert.deepStrictEqual(
    [
      manipulation.getForceLimit().getValue(),
      manipulation.getTorqueLimit().getValue(),
      manipulation.getTaskSpeedCase(),
      manipulation.getTargetLinearPosition(),
      manipulation.getControlMode(),
      manipulation.getResetEstimator().getValue(),
    ],
    [20, 5, Request.TaskSpeedCase.TANGENTIAL_SPEED, 0.2, POSITION, true],
  );
  assert.throws(
    () =>
      RobotCommandBuilder.constrainedManipulationCommand(
        LINEAR_FORCE,
        null,
        20,
        5,
        'body',
        0.5,
        null,
        null,
        null,
        POSITION,
      ),
    /position control mode/,
  );
  // A full body command with a joint request (it was an empty command).
  assert.ok(RobotCommandBuilder.jointCommand().getFullBodyCommand().hasJointRequest());
});

test('synchroTrajectoryCommandInBodyFrame() converts the goal to the odom frame and keeps its options', () => {
  const snapshot = new geometryPb.FrameTreeSnapshot();
  const edges = snapshot.getChildToParentEdgeMapMap();
  edges.set('odom', new geometryPb.FrameTreeSnapshot.ParentEdge().setParentFrameName(''));
  const odomTformBody = new SE3Pose(1, 0, 0, Quat.fromYaw(Math.PI / 2)).toProto();
  edges.set(
    'body',
    new geometryPb.FrameTreeSnapshot.ParentEdge().setParentFrameName('odom').setParentTformChild(odomTformBody),
  );

  // It always threw: null options destructured, and a math_helpers pose in the trajectory.
  const mobility = RobotCommandBuilder.synchroTrajectoryCommandInBodyFrame(1, 0, 0, snapshot, null, 0.1)
    .getSynchronizedCommand()
    .getMobilityCommand();
  const request = mobility.getSe2TrajectoryRequest();
  const goal = request.getTrajectory().getPointsList()[0].getPose();
  assert.deepStrictEqual(
    [goal.getPosition().getX(), goal.getPosition().getY(), goal.getAngle()].map(v => +v.toFixed(9)),
    [1, 1, +(Math.PI / 2).toFixed(9)],
  );
  assert.strictEqual(request.getSe2FrameName(), 'odom');
  const params = mobility.getParams().unpack(spotCommandPb.MobilityParams.deserializeBinary, MOBILITY_PARAMS_TYPE);
  assert.strictEqual(
    params.getBodyControl().getBaseOffsetRtFootprint().getPointsList()[0].getPose().getPosition().getZ(),
    0.1,
  );
});

test('clawGripperCommandHelper() builds its trajectory, and the gripper commands take the options of Python', () => {
  // The helper always threw: its claw gripper command and trajectory were never created.
  const gripper = RobotCommandBuilder.clawGripperCommandHelper([0, -1], [1, 2], [0.1, 0.2], null, 1, 2, true, null, 3)
    .getSynchronizedCommand()
    .getGripperCommand()
    .getClawGripperCommand();
  assert.deepStrictEqual(
    gripper
      .getTrajectory()
      .getPointsList()
      .map(point => [point.getPoint(), point.getVelocity().getValue(), point.getTimeSinceReference().getSeconds()]),
    [
      [0, 0.1, 1],
      [-1, 0.2, 2],
    ],
  );
  assert.deepStrictEqual(
    [
      gripper.getMaximumOpenCloseAcceleration().getValue(),
      gripper.getMaximumOpenCloseVelocity().getValue(),
      gripper.getMaximumTorque().getValue(),
      gripper.getDisableForceOnContact(),
    ],
    [1, 2, 3, true],
  );
  assert.throws(() => RobotCommandBuilder.clawGripperCommandHelper([0], [1, 2]), /positions must match/);
  assert.throws(() => RobotCommandBuilder.clawGripperCommandHelper([0], [1], [0.1, 0.2]), /velocities must match/);

  const closed = RobotCommandBuilder.clawGripperCloseCommand(null, 1, 2, true, 3)
    .getSynchronizedCommand()
    .getGripperCommand()
    .getClawGripperCommand();
  assert.deepStrictEqual(
    [
      closed.getMaximumOpenCloseAcceleration().getValue(),
      closed.getMaximumTorque().getValue(),
      closed.getDisableForceOnContact(),
    ],
    [1, 3, true],
  );
  const opened = RobotCommandBuilder.clawGripperOpenCommand(null, 1).getSynchronizedCommand().getGripperCommand();
  assert.ok(opened.getClawGripperCommand().hasMaximumOpenCloseAcceleration());
  assert.ok(!opened.getClawGripperCommand().hasMaximumTorque());
});

test('arm commands: joint freeze, gaze tool trajectory and default pose duration of Python', () => {
  // The joint move was set as the arm command itself, with a point as its trajectory.
  const freeze = RobotCommandBuilder.armJointFreezeCommand().getSynchronizedCommand().getArmCommand();
  assert.ok(freeze instanceof armCommandPb.ArmCommand.Request);
  const trajectory = freeze.getArmJointMoveCommand().getTrajectory();
  assert.ok(trajectory instanceof armCommandPb.ArmJointTrajectory);
  assert.strictEqual(trajectory.getPointsList().length, 1);

  // The tool trajectory is an SE3Trajectory.
  const gaze = RobotCommandBuilder.armGazeCommand(1, 2, 3, 'odom', null, new SE3Pose(0, 0, 1, new Quat()), 'body')
    .getSynchronizedCommand()
    .getArmCommand()
    .getArmGazeCommand();
  assert.ok(gaze.getToolTrajectoryInFrame2() instanceof trajectoryPb.SE3Trajectory);
  assert.strictEqual(gaze.getToolTrajectoryInFrame2().getPointsList()[0].getPose().getPosition().getZ(), 1);
  assert.strictEqual(gaze.getFrame2Name(), 'body');

  // 5 s by default (it was 5000 s).
  const pose = RobotCommandBuilder.armPoseCommandFromPose(new geometryPb.SE3Pose(), 'odom');
  const point = pose
    .getSynchronizedCommand()
    .getArmCommand()
    .getArmCartesianCommand()
    .getPoseTrajectoryInTask()
    .getPointsList()[0];
  assert.strictEqual(point.getTimeSinceReference().getSeconds(), 5);
});

test('buildBodyExternalForces() enables the estimator, and buildSynchroCommand() copies the requests', () => {
  // The requests were shared with the commands passed: editing the combined command changed them.
  const stow = RobotCommandBuilder.armStowCommand();
  const combined = RobotCommandBuilder.buildSynchroCommand(RobotCommandBuilder.synchroStandCommand(), stow);
  const { Positions } = armCommandPb.NamedArmPositionsCommand;
  combined.getSynchronizedCommand().getArmCommand().getNamedArmPositionCommand().setPosition(Positions.POSITIONS_READY);
  assert.strictEqual(
    stow.getSynchronizedCommand().getArmCommand().getNamedArmPositionCommand().getPosition(),
    Positions.POSITIONS_STOW,
  );

  // EXTERNAL_FORCE_USE_ESTIMATE returned null.
  const USE_ESTIMATE = spotCommandPb.BodyExternalForceParams.ExternalForceIndicator.EXTERNAL_FORCE_USE_ESTIMATE;
  assert.strictEqual(
    RobotCommandBuilder.buildBodyExternalForces(USE_ESTIMATE).getExternalForceIndicator(),
    USE_ESTIMATE,
  );
});

test('robot command builders check their options object like the keyword arguments of Python', () => {
  // A positional duration, the MobilityParams as first argument, a snake_case option: they were silently ignored.
  assert.throws(() => RobotCommandBuilder.armPoseCommand(1, 2, 3, 1, 0, 0, 0, 'odom', 2), /options as an object/);
  assert.throws(
    () => RobotCommandBuilder.synchroStandCommand(RobotCommandBuilder.mobilityParams(0.1)),
    /not a bosdyn\.api\.spot\.MobilityParams/,
  );
  assert.throws(() => RobotCommandBuilder.synchroStandCommand({ body_height: 0.1 }), /unexpected option 'body_height'/);
  assert.throws(() => RobotCommandBuilder.synchroVelocityCommand(1, 0, 0, { frame_name: 'odom' }), /unexpected option/);
  assert.ok(RobotCommandBuilder.synchroSitCommand(null).getSynchronizedCommand().getMobilityCommand().hasSitRequest());
  const pose = RobotCommandBuilder.armPoseCommand(1, 2, 3, 1, 0, 0, 0, 'odom', { seconds: 2 });
  const point = pose
    .getSynchronizedCommand()
    .getArmCommand()
    .getArmCartesianCommand()
    .getPoseTrajectoryInTask()
    .getPointsList()[0];
  assert.strictEqual(point.getTimeSinceReference().getSeconds(), 2);
});

/**
 * A robot command client whose feedback responses are the ones given, in order, then the last one again.
 * @param {robotCommandPb.RobotCommandFeedbackResponse[]} responses
 * @returns {Object}
 */
function feedbackSequenceClient(responses) {
  const client = {
    calls: 0,
    async robotCommandFeedback() {
      const response = responses[Math.min(client.calls, responses.length - 1)];
      client.calls += 1;
      return response;
    },
  };
  return client;
}

function armFeedbackResponse(field, feedback) {
  return new robotCommandPb.RobotCommandFeedbackResponse().setFeedback(
    new robotCommandPb.RobotCommandFeedback().setSynchronizedFeedback(
      new synchronizedCommandPb.SynchronizedCommand.Feedback().setArmCommandFeedback(
        new armCommandPb.ArmCommand.Feedback()[`set${field}`](feedback),
      ),
    ),
  );
}

test('blockUntilArmArrives() ends on stalled joint moves and impedance commands, and waits for a feedback', async () => {
  const JointMove = armCommandPb.ArmJointMoveCommand.Feedback;
  const Impedance = armCommandPb.ArmImpedanceCommand.Feedback;
  // A stalled joint move waited until the timeout (forever without timeout).
  const stalled = feedbackSequenceClient([
    armFeedbackResponse('ArmJointMoveFeedback', new JointMove().setStatus(JointMove.Status.STATUS_STALLED)),
  ]);
  assert.strictEqual(await blockUntilArmArrives(stalled, 1, 2_000), false);
  assert.strictEqual(stalled.calls, 1);

  // No arm feedback yet (a TypeError), then an impedance command, which was not checked.
  const completed = feedbackSequenceClient([
    new robotCommandPb.RobotCommandFeedbackResponse(),
    armFeedbackResponse('ArmImpedanceFeedback', new Impedance().setStatus(Impedance.Status.STATUS_TRAJECTORY_COMPLETE)),
  ]);
  assert.strictEqual(await blockUntilArmArrives(completed, 1, 2_000), true);
  assert.strictEqual(completed.calls, 2);
  const impedanceStalled = feedbackSequenceClient([
    armFeedbackResponse('ArmImpedanceFeedback', new Impedance().setStatus(Impedance.Status.STATUS_TRAJECTORY_STALLED)),
  ]);
  assert.strictEqual(await blockUntilArmArrives(impedanceStalled, 1, 2_000), false);
  assert.strictEqual(impedanceStalled.calls, 1);
});

test('blockForTrajectoryCmd() takes seconds, logs the status names and waits for a mobility feedback', async () => {
  const Status = basicCommandPb.SE2TrajectoryCommand.Feedback.Status;
  const se2Response = status =>
    new robotCommandPb.RobotCommandFeedbackResponse().setFeedback(
      new robotCommandPb.RobotCommandFeedback().setSynchronizedFeedback(
        new synchronizedCommandPb.SynchronizedCommand.Feedback().setMobilityCommandFeedback(
          new mobilityCommandPb.MobilityCommand.Feedback().setSe2TrajectoryFeedback(
            new basicCommandPb.SE2TrajectoryCommand.Feedback().setStatus(status),
          ),
        ),
      ),
    );
  const logged = [];
  const logger = { info: message => logged.push(message) };

  // A timeout of 0.3 s and a feedback every 0.05 s: they were milliseconds (one feedback, then false).
  const moving = feedbackSequenceClient([
    new robotCommandPb.RobotCommandFeedbackResponse(),
    se2Response(Status.STATUS_IN_PROGRESS),
  ]);
  const start = Date.now();
  assert.strictEqual(await blockForTrajectoryCmd(moving, 1, undefined, null, 0.05, 0.3, logger), false);
  const elapsed = Date.now() - start;
  assert.ok(elapsed >= 250 && elapsed < 3_000, `${elapsed} ms`);
  assert.ok(moving.calls >= 3 && moving.calls <= 8, `${moving.calls} calls`);
  // The names of the statuses (Status[value] was undefined), from the defaults before the first mobility feedback.
  assert.deepStrictEqual(logged.slice(0, 2), [
    'blockForTrajectoryCmd: STATUS_UNKNOWN',
    'blockForTrajectoryCmd: STATUS_IN_PROGRESS',
  ]);
  assert.strictEqual(logged.at(-1), 'blockForTrajectoryCmd: timeout exceeded.');

  // STATUS_STOPPED by default (the deprecated STATUS_AT_GOAL), and end statuses in a Set.
  assert.strictEqual(
    await blockForTrajectoryCmd(feedbackSequenceClient([se2Response(Status.STATUS_STOPPED)]), 1),
    true,
  );
  const stopping = feedbackSequenceClient([se2Response(Status.STATUS_STOPPING)]);
  assert.strictEqual(await blockForTrajectoryCmd(stopping, 1, new Set([Status.STATUS_STOPPING])), true);
});

test('sendJointControlCommands() streams without deadline by default, like Python', () => {
  // The stream was cut after the 30 s of the default RPC timeout.
  const client = new RobotCommandStreamingClient();
  let options = null;
  client._stub = { jointControlStream() {} };
  client.call = (rpcMethod, request, valueFromResponse, errorFromResponse, copyRequest, args) => (options = args);
  client.sendJointControlCommands([]);
  assert.strictEqual(options.timeout, Infinity);
  client.sendJointControlCommands([], { timeout: 5_000 });
  assert.strictEqual(options.timeout, 5_000);
});

// ---------------------------------------------------------------------------------------------------------------
// Power.
// ---------------------------------------------------------------------------------------------------------------

/**
 * A power client whose command is in progress, and whose feedback RPC waits for its deadline like gRPC when the robot
 * does not answer (a TimedOutError after args.timeout).
 * @returns {Object}
 */
function silentPowerClient() {
  const client = {
    requests: [],
    feedbackTimeouts: [],
    powerCommand(request) {
      client.requests.push(request);
      return Promise.resolve(
        new powerPb.PowerCommandResponse()
          .setStatus(powerPb.PowerCommandStatus.STATUS_IN_PROGRESS)
          .setPowerCommandId(7),
      );
    },
    async powerCommandFeedback(powerCommandId, args) {
      client.feedbackTimeouts.push(args.timeout);
      await sleep(args.timeout);
      throw new TimedOutError(new Error('deadline'), 'timeout');
    },
  };
  return client;
}

test('powerOffRobot() reports a feedback still pending at its deadline as a timeout, not as a success', async () => {
  // The deadline of the command: Python raises CommandTimedOutError (future.result(timeout=time_until_timeout)).
  const client = silentPowerClient();
  await assert.rejects(power.powerOffRobot(client, 100), power.CommandTimedOutError);
  assert.strictEqual(client.requests[0], powerPb.PowerCommandRequest.Request.REQUEST_OFF_ROBOT);
  assert.ok(client.feedbackTimeouts[0] <= 100);
  await assert.rejects(power.powerCycleRobot(silentPowerClient(), 100), power.CommandTimedOutError);

  // The deadline of the RPC itself (the communications stop with the power off): the expected timeout of the power
  // off of the robot, an error of the other commands.
  const cycled = silentPowerClient();
  await power.powerCycleRobot(cycled, 1_000, 1.0, { timeout: 30 });
  assert.deepStrictEqual(cycled.feedbackTimeouts, [30]);
  await assert.rejects(power.powerOnMotors(silentPowerClient(), 1_000, 1.0, { timeout: 30 }), TimedOutError);
});

test('safePowerOffMotors() checks its frequency before commanding the robot, and separates the two deadlines', async () => {
  let commands = 0;
  const commandClient = { robotCommand: async () => (commands += 1) };
  const silentState = {
    async getRobotState(args) {
      await sleep(args.timeout);
      throw new TimedOutError(new Error('deadline'), 'timeout');
    },
  };
  // A frequency of 0 polled the robot without pause (Python divides by it).
  await assert.rejects(power.safePowerOffMotors(commandClient, silentState, 100, 0), RangeError);
  assert.strictEqual(commands, 0);

  // The deadline of the command, or the one of the RPC itself (Python raises its TimedOutError).
  await assert.rejects(power.safePowerOffMotors(commandClient, silentState, 50), power.CommandTimedOutError);
  await assert.rejects(power.safePowerOffMotors(commandClient, silentState, 1_000, 1.0, { timeout: 20 }), error => {
    assert.ok(error instanceof TimedOutError && !(error instanceof power.CommandTimedOutError));
    return true;
  });
});

test('power exports the soft reboot and all the errors of Python, which derive from the SDK error', async () => {
  const client = silentPowerClient();
  await assert.rejects(power.softRebootRobot(client, 50), power.CommandTimedOutError);
  assert.strictEqual(client.requests[0], powerPb.PowerCommandRequest.Request.REQUEST_SOFT_REBOOT_ROBOT);
  assert.strictEqual(typeof power.safeSoftRebootRobot, 'function');
  for (const name of [
    'OverriddenError',
    'KeepaliveMotorsOffError',
    'FanControlTemperatureError',
    'SafetyStopIncompatibleHardwareError',
    'SafetyStopFailedError',
    'SafetyStopUnknownStopTypeError',
  ]) {
    assert.ok(new power[name](null, 'x') instanceof power.PowerResponseError, name);
  }
  assert.ok(new power.CommandTimedOutError() instanceof BosdynError);
});

test('DataBufferLoggingProcessor logs its failures, which ended the process (unhandled rejection)', async () => {
  const unhandled = [];
  const onUnhandled = error => unhandled.push(error);
  process.on('unhandledRejection', onUnhandled);
  try {
    const warnings = [];
    const rejecting = new DataBufferLoggingProcessor({
      addProtobuf: async () => {
        throw new RpcError(new Error('network'), 'robot unreachable');
      },
    });
    rejecting.logger = { warn: message => warnings.push(message) };
    rejecting.mutate(new robotCommandPb.RobotCommandRequest());
    rejecting.mutate(new robotCommandPb.RobotCommandRequest());
    // A synchronous error (e.g. no time sync) failed the RPC being logged.
    const throwing = new DataBufferLoggingProcessor({
      addProtobuf() {
        throw new Error('no time sync');
      },
    });
    throwing.logger = { warn: message => warnings.push(message) };
    throwing.mutate(new robotCommandPb.RobotCommandRequest());
    await sleep(20);
    assert.deepStrictEqual(unhandled, []);
    // Throttled: one warning per processor.
    assert.deepStrictEqual(warnings, [
      'Failed to log a message to the data buffer: no time sync',
      'Failed to log a message to the data buffer: robot unreachable',
    ]);
  } finally {
    process.off('unhandledRejection', onUnhandled);
  }
});

// ---------------------------------------------------------------------------------------------------------------
// Spot check.
// ---------------------------------------------------------------------------------------------------------------

test('runSpotCheck() and runCameraCalibration() poll at their frequency in Hz, and log the calibration progress', async () => {
  const { State } = spotCheckPb.SpotCheckFeedbackResponse;
  const states = [State.STATE_LOADCELL_CAL, State.STATE_LOADCELL_CAL, State.STATE_FINISHED];
  const client = {
    feedbacks: 0,
    logged: [],
    logger: { info: message => client.logged.push(message) },
    spotCheckCommand: async () => new spotCheckPb.SpotCheckCommandResponse(),
    spotCheckFeedback: async () => new spotCheckPb.SpotCheckFeedbackResponse().setState(states[client.feedbacks++]),
    cameraCalibrationCommand: async () => new spotCheckPb.CameraCalibrationCommandResponse(),
    cameraCalibrationFeedback: async () => {
      const { Status } = spotCheckPb.CameraCalibrationFeedbackResponse;
      client.feedbacks += 1;
      return new spotCheckPb.CameraCalibrationFeedbackResponse()
        .setStatus(client.feedbacks < 2 ? Status.STATUS_PROCESSING : Status.STATUS_SUCCESS)
        .setProgress(0.5);
    },
  };
  const lease = { leaseProto: new leasePb.Lease() };
  // 20 Hz: a feedback every 50 ms (1 / frequency was used as milliseconds: every 0.05 ms).
  const start = Date.now();
  const result = await spotCheck.runSpotCheck(client, lease, { updateFrequency: 20 });
  const elapsed = Date.now() - start;
  assert.strictEqual(result.getState(), State.STATE_FINISHED);
  assert.ok(elapsed >= 130 && elapsed < 2_000, `${elapsed} ms`);

  client.feedbacks = 0;
  await spotCheck.runCameraCalibration(client, lease, { updateFrequency: 20, verbose: true });
  // STATUS_PROCESSING is under .Status (the progress was never logged).
  assert.ok(client.logged.includes('[SPOT CHECK] Camera calibration 50.00% complete!'), client.logged.join('; '));
});

test('handleUnsetStatusError() finds the unset value in the enums of a message class, like getattr() in Python', () => {
  // The spot check feedbacks passed their message class: STATE_UNKNOWN was undefined, and never detected.
  assert.ok(
    spotCheck._spotcheckFeedbackErrorFromResponse(new spotCheckPb.SpotCheckFeedbackResponse()) instanceof
      UnsetStatusError,
  );
  assert.ok(
    spotCheck._calibrationFeedbackErrorFromResponse(new spotCheckPb.CameraCalibrationFeedbackResponse()) instanceof
      UnsetStatusError,
  );
  const { State } = spotCheckPb.SpotCheckFeedbackResponse;
  const check = handleUnsetStatusError('STATE_UNKNOWN', 'state', spotCheckPb.SpotCheckFeedbackResponse)(() => null);
  assert.ok(check(new spotCheckPb.SpotCheckFeedbackResponse()) instanceof UnsetStatusError);
  assert.strictEqual(check(new spotCheckPb.SpotCheckFeedbackResponse().setState(State.STATE_LOADCELL_CAL)), null);
  // Without status type, the enums of the class of the response (only its Status enum was read).
  const byResponse = handleUnsetStatusError('STATE_UNKNOWN', 'state')(() => null);
  assert.ok(byResponse(new spotCheckPb.SpotCheckFeedbackResponse()) instanceof UnsetStatusError);
});

test('the errors of the clients name their status from the enum, not from the index of its keys', () => {
  // The clients passed Object.keys(Status) to errorFactory(), indexed by value: wrong names for the enums which are
  // not in the order of their values (77 calls).
  const { Status } = spotCheckPb.CameraCalibrationFeedbackResponse;
  const header = new headerPb.ResponseHeader().setError(
    new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_OK),
  );
  const error = spotCheck._calibrationFeedbackErrorFromResponse(
    new spotCheckPb.CameraCalibrationFeedbackResponse().setHeader(header).setStatus(Status.STATUS_CAMERA_FOCUS_ERROR),
  );
  assert.strictEqual(error.message, 'Code: 14 (STATUS_CAMERA_FOCUS_ERROR)');
});

// ---------------------------------------------------------------------------------------------------------------
// Time sync.
// ---------------------------------------------------------------------------------------------------------------

function timeSyncResponse(status, skewSec = 0) {
  const now = new Timestamp().setSeconds(Math.floor(Date.now() / 1000));
  const state = new timeSyncPb.TimeSyncState().setStatus(status);
  if (status === timeSyncPb.TimeSyncState.Status.STATUS_OK) {
    state.setBestEstimate(new timeSyncPb.TimeSyncEstimate().setClockSkew(new Duration().setSeconds(skewSec)));
  }
  return new timeSyncPb.TimeSyncUpdateResponse()
    .setHeader(okHeader().setRequestHeader(new headerPb.RequestHeader().setRequestTimestamp(now)))
    .setState(state)
    .setClockIdentifier('clock');
}

function timeSyncClientMock(responses) {
  let calls = 0;
  return {
    get calls() {
      return calls;
    },
    async getTimeSyncUpdate() {
      calls += 1;
      await sleep(2);
      const response = responses(calls);
      if (response instanceof Error) throw response;
      return response;
    },
  };
}

test('TimeSyncEndpoint.roundTripTime does not throw before time sync is established', async () => {
  const endpoint = new TimeSyncEndpoint(
    timeSyncClientMock(() => timeSyncResponse(timeSyncPb.TimeSyncState.Status.STATUS_MORE_SAMPLES_NEEDED)),
  );
  await endpoint.getNewEstimate();
  assert.strictEqual(endpoint.roundTripTime.getSeconds(), 0);
  assert.strictEqual(endpoint.hasEstablishedTimeSync, false);
});

test('TimeSyncThread: waitForSync reports the error of a dead thread at once', async () => {
  const S = timeSyncPb.TimeSyncState.Status;
  const thread = new TimeSyncThread(
    timeSyncClientMock(n =>
      n === 1 ? timeSyncResponse(S.STATUS_MORE_SAMPLES_NEEDED) : new RpcError(new Error('x'), 'down'),
    ),
  );
  thread.start();
  const start = Date.now();
  await assert.rejects(thread.waitForSync(5), error => error instanceof RpcError);
  assert.ok(Date.now() - start < 2_000);
});

test('TimeSyncThread: stop() then start() keeps it running, and many updates leak no listener', async () => {
  const warnings = [];
  const onWarning = warning => warnings.push(warning.name);
  process.on('warning', onWarning);
  const S = timeSyncPb.TimeSyncState.Status;
  const client = timeSyncClientMock(n => timeSyncResponse(n < 2 ? S.STATUS_MORE_SAMPLES_NEEDED : S.STATUS_OK, 3));
  const thread = new TimeSyncThread(client);
  try {
    thread.start();
    await thread.waitForSync(3);
    thread.timeSyncIntervalSec = 0.001;
    await sleep(250);
    thread.stop();
    thread.start();
    const calls = client.calls;
    await sleep(100);
    assert.ok(!thread.stopped);
    assert.ok(client.calls > calls);
    assert.deepStrictEqual(warnings, []);
  } finally {
    await thread.stop();
    process.off('warning', onWarning);
  }
  assert.ok(thread.stopped);
});

test('timespecToRobotTimespan gives relative times from now (was January 1970)', () => {
  const start = timespecToRobotTimespan('2d').getStart();
  const startSec = start.getSeconds() + start.getNanos() / 1e9;
  assert.ok(Math.abs(startSec - (Date.now() / 1000 - 2 * 86400)) < 5);
});

test('seconds/nanoseconds conversions keep valid protos', () => {
  const duration = secondsToDuration(1e-7);
  assert.deepStrictEqual([duration.getSeconds(), duration.getNanos()], [0, 100]);
  const stamp = new Timestamp();
  setTimestampFromNsec(stamp, -1.5e9);
  assert.deepStrictEqual([stamp.getSeconds(), stamp.getNanos()], [-2, 500_000_000]);
  setTimestampFromNsec(stamp, 1758650000123456768);
  assert.deepStrictEqual([stamp.getSeconds(), stamp.getNanos()], [1758650000, 123456768]);
});

// ---------------------------------------------------------------------------------------------------------------
// Frames.
// ---------------------------------------------------------------------------------------------------------------

test('getATformB composes the transforms in the right order when they rotate', () => {
  const snapshot = new geometryPb.FrameTreeSnapshot();
  const edges = snapshot.getChildToParentEdgeMapMap();
  const edge = (parent, pose = null) => {
    const parentEdge = new geometryPb.FrameTreeSnapshot.ParentEdge().setParentFrameName(parent);
    if (pose) parentEdge.setParentTformChild(pose.toProto());
    return parentEdge;
  };
  edges.set('root', edge(''));
  edges.set('a', edge('root', new SE3Pose(1, 0, 0, Quat.fromYaw(Math.PI / 2))));
  edges.set('b', edge('a', new SE3Pose(1, 0, 0, new Quat())));
  edges.set('c', edge('root'));

  const rootTformB = getATformB(snapshot, 'root', 'b');
  assert.deepStrictEqual(
    [rootTformB.x, rootTformB.y, rootTformB.z].map(v => +v.toFixed(9)),
    [1, 1, 0],
  );
  // An edge without transform is the identity.
  const cTformB = getATformB(snapshot, 'c', 'b');
  assert.deepStrictEqual(
    [cTformB.x, cTformB.y, cTformB.z].map(v => +v.toFixed(9)),
    [1, 1, 0],
  );
});

// ---------------------------------------------------------------------------------------------------------------
// Leases.
// ---------------------------------------------------------------------------------------------------------------

function leaseClientMock(wallet, { acquire = null } = {}) {
  return {
    leaseWallet: wallet,
    retained: [],
    acquire:
      acquire ??
      (async resource => {
        wallet.add(new Lease(new leasePb.Lease().setResource(resource).setEpoch('epoch').setSequenceList([1])));
      }),
    async retainLease(lease) {
      this.retained.push(lease.leaseProto.getResource());
    },
    async returnLease() {},
  };
}

test('LeaseKeepAlive keeps the "body" lease alive by default', async () => {
  const client = leaseClientMock(new LeaseWallet());
  const keepAlive = new LeaseKeepAlive(client, { rpcIntervalMs: 20 });
  await keepAlive.waitForInitialization();
  await sleep(50);
  await keepAlive.shutdown();
  assert.ok(client.retained.length >= 2);
  assert.ok(client.retained.every(resource => resource === 'body'));
});

test('LeaseKeepAlive with mustAcquire rejects when the lease cannot be acquired', async () => {
  const client = leaseClientMock(new LeaseWallet(), {
    acquire: async () => {
      throw new Error('lease taken');
    },
  });
  const keepAlive = new LeaseKeepAlive(client, { mustAcquire: true, rpcIntervalMs: 20 });
  await assert.rejects(keepAlive.waitForInitialization(), /lease taken/);
  await keepAlive.shutdown();
  assert.strictEqual(client.retained.length, 0);
});

test('LeaseKeepAlive stopped during its initialization does not check in afterwards', async () => {
  const wallet = new LeaseWallet();
  const client = leaseClientMock(wallet, {
    acquire: async resource => {
      await sleep(30);
      wallet.add(new Lease(new leasePb.Lease().setResource(resource).setEpoch('epoch').setSequenceList([1])));
    },
  });
  const keepAlive = new LeaseKeepAlive(client, { rpcIntervalMs: 10 });
  await keepAlive.shutdown();
  await sleep(80);
  assert.strictEqual(client.retained.length, 0);
  assert.ok(!keepAlive.isAlive());
});

test('LeaseKeepAlive shut down during its acquire returns the acquired lease (returnAtExit)', async () => {
  const wallet = new LeaseWallet();
  const client = leaseClientMock(wallet, {
    acquire: async resource => {
      await sleep(30);
      wallet.add(new Lease(new leasePb.Lease().setResource(resource).setEpoch('epoch').setSequenceList([1])));
    },
  });
  const returned = [];
  client.returnLease = async lease => returned.push(lease.leaseProto.getResource());
  // The lease was acquired after the shutdown, and kept without check-ins (the return had found no lease).
  const keepAlive = new LeaseKeepAlive(client, { returnAtExit: true, rpcIntervalMs: 10 });
  await keepAlive.shutdown();
  assert.deepStrictEqual(returned, ['body']);
  assert.strictEqual(client.retained.length, 0);
});

/**
 * A lease validator of a robot whose resource tree is body -> (mobility, full-arm -> (arm, gripper)).
 * @returns {LeaseValidator}
 */
function bodyLeaseValidator() {
  const tree = (resource, ...subResources) =>
    new leasePb.ResourceTree().setResource(resource).setSubResourcesList(subResources);
  const validator = new LeaseValidator(null);
  validator.hierarchy = new ResourceHierarchy(
    tree('body', tree('mobility'), tree('full-arm', tree('arm'), tree('gripper'))),
  );
  return validator;
}

const bodyLease = sequence => new leasePb.Lease().setResource('body').setEpoch('epoch').setSequenceList([sequence]);

test('LeaseValidatorResponseProcessor reads unset lease use results as the defaults of Python', () => {
  const validator = bodyLeaseValidator();
  const processor = new LeaseValidatorResponseProcessor(validator);
  // A response without lease use result, and a result without latest known lease (TypeErrors).
  processor.mutate(new robotCommandPb.RobotCommandResponse());
  processor.mutate(
    new robotCommandPb.RobotCommandResponse().setLeaseUseResult(
      new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OK),
    ),
  );
  assert.strictEqual(validator.getActiveLease('body'), null);
  processor.mutate(
    new robotCommandPb.RobotCommandResponse().setLeaseUseResult(
      new leasePb.LeaseUseResult().setStatus(leasePb.LeaseUseResult.Status.STATUS_OK).setLatestKnownLease(bodyLease(3)),
    ),
  );
  assert.deepStrictEqual(validator.getActiveLease('arm').leaseProto.getSequenceList(), [3]);
});

test('LeaseValidator results list all the leaves, and copy the leases of the validator like CopyFrom', () => {
  const validator = bodyLeaseValidator();
  validator.testAndSetActiveLease(bodyLease(2), false);
  const result = validator.testActiveLease(bodyLease(5), false);
  assert.strictEqual(result.getStatus(), leasePb.LeaseUseResult.Status.STATUS_OK);
  // Each leaf replaced the previous one: only the last one was listed.
  assert.deepStrictEqual(
    result
      .getLatestResourcesList()
      .map(lease => lease.getResource())
      .sort(),
    ['arm', 'gripper', 'mobility'],
  );
  // Editing the result changed the leases of the validator.
  result.getLatestKnownLease().setEpoch('changed');
  result.getPreviousLease().setSequenceList([9]);
  result.getLatestResourcesList()[0].setEpoch('changed');
  assert.strictEqual(validator.getActiveLease('body').leaseProto.getEpoch(), 'epoch');
  assert.ok(Object.values(validator.activeLeaseMap).every(lease => lease.leaseProto.getEpoch() === 'epoch'));

  // Names of the prototype of Object are not resources.
  assert.ok(!validator.hierarchy.hasResource('constructor'));
  assert.strictEqual(validator.getActiveLease('toString'), null);
  assert.throws(() => new LeaseWallet().getLease('constructor'), NoSuchLease);
});

test('LeaseKeepAlive refuses unknown options like the keyword arguments of Python', () => {
  // must_acquire and return_at_exit were silently ignored: the lease was neither acquired as required nor returned.
  const client = leaseClientMock(new LeaseWallet());
  assert.throws(() => new LeaseKeepAlive(client, { must_acquire: true }), /unexpected option 'must_acquire'/);
  assert.throws(() => new LeaseKeepAlive(client, 'body'), /options as an object/);
});

// ---------------------------------------------------------------------------------------------------------------
// E-Stop.
// ---------------------------------------------------------------------------------------------------------------

test('EstopKeepAlive serializes the check-ins: a stop() is not rejected for a reused challenge', async () => {
  let robotChallenge = 1000;
  let rejected = 0;
  let calls = 0;
  let lastLevel = null;
  const estopClient = {
    async checkIn(level, endpoint, challenge, response, suppressIncorrect) {
      calls += 1;
      await sleep(15);
      if (challenge !== null && !suppressIncorrect && response !== responseFromChallenge(robotChallenge)) {
        rejected += 1;
        throw new Error('STATUS_INCORRECT_CHALLENGE_RESPONSE');
      }
      robotChallenge += 1;
      lastLevel = level;
      return robotChallenge;
    },
  };
  const keepAlive = new EstopKeepAlive(new EstopEndpoint(estopClient, 'test', 9), null, 0.02);
  await keepAlive.waitForInitialCheckIn();
  await sleep(50);
  await keepAlive.stop();
  assert.strictEqual(lastLevel, estopPb.EstopStopLevel.ESTOP_LEVEL_CUT);
  await keepAlive.shutdown();
  const callsAtShutdown = calls;
  await sleep(60);
  assert.strictEqual(rejected, 0);
  assert.strictEqual(calls, callsAtShutdown);
});

test('EstopKeepAlive has the lastSetLevel of Python, and the endpoint timeout must be a number of seconds', async () => {
  const estopClient = new EstopClient();
  estopClient.checkIn = async () => '7';
  const keepAlive = new EstopKeepAlive(new EstopEndpoint(estopClient, 'test', 9), null, 0.02);
  await keepAlive.waitForInitialCheckIn();
  // The GUI displays it (it was undefined).
  assert.strictEqual(keepAlive.lastSetLevel, estop.StopLevel.ESTOP_LEVEL_NONE);
  await keepAlive.stop();
  assert.strictEqual(keepAlive.lastSetLevel, estop.StopLevel.ESTOP_LEVEL_CUT);
  await keepAlive.shutdown();

  assert.throws(() => new EstopEndpoint(estopClient, 'test', 0), /Invalid estopTimeout/);
  assert.throws(() => new EstopEndpoint(estopClient, 'test', undefined), /Invalid estopTimeout/);
  // The exports of Python.
  assert.strictEqual(estop.StopLevel, estopPb.EstopStopLevel);
  assert.ok(new estop.MotorsOnError(null, 'on') instanceof estop.EstopResponseError);
});

test('Queue is the queue.Queue of Python: no limit by default or for 0, and an error when full', () => {
  // new Queue() threw, a maxSize of 0 kept the queue empty, and a full queue dropped the elements silently.
  const queue = new Queue();
  // The new length, like Array.prototype.push (a Queue is an Array).
  assert.strictEqual(queue.push(1, 2), 2);
  assert.deepStrictEqual([queue.length, queue.get(), queue.empty()], [2, 1, false]);
  const unlimited = new Queue({ maxSize: 0 });
  for (let i = 0; i < 100; i++) unlimited.push(i);
  assert.strictEqual(unlimited.length, 100);
  const bounded = new Queue({ maxSize: 1 });
  bounded.push('a');
  assert.ok(bounded.full());
  assert.throws(() => bounded.push('b'), QueueFullError);
  assert.deepStrictEqual([...bounded], ['a']);
  // The methods of Array return arrays.
  assert.ok(!(bounded.map(x => x) instanceof Queue));
});

// ---------------------------------------------------------------------------------------------------------------
// Keepalive policies.
// ---------------------------------------------------------------------------------------------------------------

test('ModifyPolicyRequest takes a list of policy ids, and actions create their sub-messages', () => {
  const client = new KeepaliveClient();
  const policy = new Policy();
  policy.addControlledMotorsOffAction(3);
  policy.addRecordEventAction([new dataBufferPb.Event().setType('event')], 5);
  policy.addLeaseStaleAction(
    [new Lease(new leasePb.Lease().setResource('body').setEpoch('epoch').setSequenceList([1]))],
    6,
  );
  const withoutIds = client._modifyPolicyRequest(policy, null);
  withoutIds.serializeBinary();
  assert.deepStrictEqual(withoutIds.getPolicyIdsToRemoveList(), []);
  assert.strictEqual(withoutIds.getToAdd().getActionsList().length, 3);
  const withIds = client._modifyPolicyRequest(null, [5, 7]);
  withIds.serializeBinary();
  // uint64 strings ([jstype = JS_STRING]).
  assert.deepStrictEqual(withIds.getPolicyIdsToRemoveList(), ['5', '7']);
});

/**
 * A keepalive client whose check-ins fail with the errors of failures (null: a success), then succeed.
 * @param {Array<?Error>} failures
 * @returns {Object}
 */
function keepaliveClientMock(failures) {
  const client = {
    checkIns: [],
    modifyPolicy: async () =>
      new keepalivePb.ModifyPolicyResponse().setAddedPolicy(new keepalivePb.LivePolicy().setPolicyId('3')),
    async checkIn() {
      const error = failures[client.checkIns.length] ?? null;
      client.checkIns.push(Date.now());
      if (error) throw error;
    },
  };
  return client;
}

test('PolicyKeepalive stops on an error which is not retryable, like Python (it retried forever)', async () => {
  const policy = new Policy();
  policy.addControlledMotorsOffAction(3);
  const retryable = new RetryableRpcError(new Error('unavailable'), 'unavailable');
  const client = keepaliveClientMock([retryable, new ResponseError(null, 'invalid policy')]);
  const keepalive = await new PolicyKeepalive(client, policy, null, 0.02).start();
  await sleep(150);
  // The retryable error is logged, the other one ends the check-ins (the robot then applies the policy actions).
  assert.strictEqual(client.checkIns.length, 2);
  await keepalive.shutdown();
});

test('PolicyKeepalive gives the other errors to keepaliveErrorCallback, with the back-off and abort of Python', async () => {
  const policy = new Policy();
  policy.addControlledMotorsOffAction(3);
  const failure = () => new ResponseError(null, 'failure');
  // Exponential back-off from 0.02 s, up to the interval (0.2 s).
  const client = keepaliveClientMock([failure(), failure(), failure(), failure()]);
  const keepalive = new PolicyKeepalive(client, policy, null, 0.2, null, false, 0.02);
  const errors = [];
  keepalive.keepaliveErrorCallback = error => {
    errors.push(error.message);
    return ErrorCallbackResult.RETRY_WITH_EXPONENTIAL_BACK_OFF;
  };
  await keepalive.start();
  await sleep(450);
  await keepalive.shutdown();
  assert.deepStrictEqual(errors, ['failure', 'failure', 'failure', 'failure']);
  const waits = client.checkIns.slice(1, 5).map((time, i) => time - client.checkIns[i]);
  assert.ok(waits[0] >= 15 && waits[0] < 60, `${waits}`);
  assert.ok(waits[1] >= 35 && waits[2] >= 75 && waits[3] >= 150, `${waits}`);

  // ABORT ends the check-ins, and an exception of the callback is the default action (normal interval).
  const aborted = keepaliveClientMock([failure()]);
  const abortKeepalive = new PolicyKeepalive(aborted, policy, null, 0.02);
  abortKeepalive.keepaliveErrorCallback = () => ErrorCallbackResult.ABORT;
  await abortKeepalive.start();
  await sleep(100);
  assert.strictEqual(aborted.checkIns.length, 1);
  await abortKeepalive.shutdown();
  const throwing = keepaliveClientMock([failure()]);
  const throwingKeepalive = new PolicyKeepalive(throwing, policy, null, 0.02);
  throwingKeepalive.keepaliveErrorCallback = () => {
    throw new Error('callback bug');
  };
  await throwingKeepalive.start();
  await sleep(100);
  assert.ok(throwing.checkIns.length >= 3);
  await throwingKeepalive.shutdown();
});

// ---------------------------------------------------------------------------------------------------------------
// 64 bits integers: hashes and random ids generated as strings ([jstype = JS_STRING], JS_STRING_FIELDS of build.js).
// ---------------------------------------------------------------------------------------------------------------

const UINT64_MAX = '18446744073709551615';
const BIG_ID = '18446744073709551557';

test('build.js adds [jstype = JS_STRING] to the 64 bits fields of JS_STRING_FIELDS, like the descriptor set', () => {
  const { JS_STRING_FIELDS, addJsStringTypes } = require('../build.js');
  const source = [
    'message A {',
    '  // A comment { with braces }',
    '  message B {',
    '    uint64 x = 1; // x',
    '  }',
    '  oneof choice { fixed64 y = 2; }',
    '  repeated int64 z = 3 [deprecated = true];',
    '  uint64 w = 4 [jstype = JS_STRING];',
    '  uint64 other = 5;',
    '}',
  ].join('\n');
  const edited = addJsStringTypes(source, { 'A.B': ['x'], A: ['y', 'z', 'w'] }, 'test.proto');
  assert.deepStrictEqual(edited.split('\n').slice(3, 9), [
    '    uint64 x = 1 [jstype = JS_STRING]; // x',
    '  }',
    '  oneof choice { fixed64 y = 2 [jstype = JS_STRING]; }',
    '  repeated int64 z = 3 [jstype = JS_STRING, deprecated = true];',
    '  uint64 w = 4 [jstype = JS_STRING];',
    '  uint64 other = 5;',
  ]);
  // Idempotent, and a field which is not a 64 bits field of its message stops the build.
  assert.strictEqual(addJsStringTypes(edited, { 'A.B': ['x'], A: ['y', 'z', 'w'] }, 'test.proto'), edited);
  assert.throws(() => addJsStringTypes(source, { A: ['x'] }, 'test.proto'), /test\.proto: no 64 bits field A\.x/);

  // The generated code of the SDK was built with them (npm run build).
  const pool = defaultPool();
  for (const [fileName, fieldsByMessage] of Object.entries(JS_STRING_FIELDS)) {
    const packageName = fileName.split('/').slice(0, -1).join('.');
    for (const [message, fields] of Object.entries(fieldsByMessage)) {
      for (const field of fields) {
        const descriptor = pool.findMessageTypeByName(`${packageName}.${message}`).fieldsByName.get(field);
        assert.strictEqual(descriptor.isJsString, true, `${message}.${field}`);
      }
    }
  }
});

test('E-Stop challenges beyond 2^53 are exact (the response of a rounded challenge was rejected by the robot)', async () => {
  const requests = [];
  const server = await startGrpcServer(estopServiceGrpcPb.EstopServiceService, {
    estopCheckIn(call, callback) {
      requests.push(call.request);
      callback(
        null,
        new estopPb.EstopCheckInResponse()
          .setHeader(okHeader())
          .setStatus(estopPb.EstopCheckInResponse.Status.STATUS_OK)
          .setChallenge('18446744073709551614'),
      );
    },
  });
  try {
    const client = server.connect(new EstopClient());
    const endpoint = new EstopEndpoint(client, 'test', 9);
    const level = estopPb.EstopStopLevel.ESTOP_LEVEL_NONE;
    const challenge = await client.checkIn(level, endpoint, null, null, true);
    assert.strictEqual(challenge, '18446744073709551614');
    await client.checkIn(level, endpoint, challenge, responseFromChallenge(challenge));
    assert.deepStrictEqual([requests[1].getChallenge(), requests[1].getResponse()], ['18446744073709551614', '1']);
    // A number or a BigInt is sent as its value (jspb wrote 0 for a number in a string field).
    await client.checkIn(level, endpoint, 100, 2n ** 64n - 101n);
    assert.deepStrictEqual([requests[2].getChallenge(), requests[2].getResponse()], ['100', '18446744073709551515']);
    assert.throws(() => client.checkIn(level, endpoint, -1, 0), RangeError);
  } finally {
    await server.close();
  }
});

test('keepalive policy ids, signal schema ids and recording session ids beyond 2^53 are exact', async () => {
  // The requests keep all the bits once serialized.
  const keepaliveClient = new KeepaliveClient();
  const checkIn = keepalivePb.CheckInRequest.deserializeBinary(
    keepaliveClient._checkInRequest(BIG_ID).serializeBinary(),
  );
  assert.strictEqual(checkIn.getPolicyId(), BIG_ID);
  const modify = keepalivePb.ModifyPolicyRequest.deserializeBinary(
    keepaliveClient._modifyPolicyRequest(null, [UINT64_MAX, 2n ** 60n, 7]).serializeBinary(),
  );
  assert.deepStrictEqual(modify.getPolicyIdsToRemoveList(), [UINT64_MAX, '1152921504606846976', '7']);

  const startRecording = new ChoreographyClient().buildStartRecordingStateRequest(null, BIG_ID);
  assert.strictEqual(
    choreographySequencePb.StartRecordingStateRequest.deserializeBinary(
      startRecording.serializeBinary(),
    ).getRecordingSessionId(),
    BIG_ID,
  );

  // The schema id given by the robot is the one of the ticks.
  const ticks = [];
  const server = await startGrpcServer(dataBufferServiceGrpcPb.DataBufferServiceService, {
    registerSignalSchema(call, callback) {
      callback(null, new dataBufferPb.RegisterSignalSchemaResponse().setHeader(okHeader()).setSchemaId(BIG_ID));
    },
    recordSignalTicks(call, callback) {
      ticks.push(...call.request.getTickDataList());
      callback(null, new dataBufferPb.RecordSignalTicksResponse().setHeader(okHeader()));
    },
  });
  try {
    const client = server.connect(new DataBufferClient());
    const variable = new dataBufferPb.SignalSchema.Variable()
      .setName('value')
      .setType(dataBufferPb.SignalSchema.Variable.Type.TYPE_FLOAT64);
    const schemaId = await client.registerSignalSchema([variable], 'schema');
    assert.strictEqual(schemaId, BIG_ID);
    await client.addSignalTick(new Uint8Array(8), schemaId);
    assert.strictEqual(ticks[0].getSchemaId(), BIG_ID);
  } finally {
    await server.close();
  }
});

// ---------------------------------------------------------------------------------------------------------------
// Graph nav and docking.
// ---------------------------------------------------------------------------------------------------------------

test('large streamed snapshots are reassembled (was a RangeError above ~120 KB per chunk)', async () => {
  const payload = new mapPb.WaypointSnapshot().setId(`big-${'a'.repeat(3 * 1024 * 1024)}`).serializeBinary();
  const chunkSize = 1024 * 1024;
  const responses = [];
  for (let start = 0; start < payload.length; start += chunkSize) {
    responses.push(
      new graphNavPb.DownloadWaypointSnapshotResponse()
        .setHeader(okHeader())
        .setStatus(graphNavPb.DownloadWaypointSnapshotResponse.Status.STATUS_OK)
        .setChunk(
          new dataChunkPb.DataChunk().setTotalSize(payload.length).setData(payload.subarray(start, start + chunkSize)),
        ),
    );
  }
  const client = new GraphNavClient();
  client._stub = {
    downloadWaypointSnapshot: streamMethod('/bosdyn.api.graph_nav.GraphNavService/DownloadWaypointSnapshot', responses),
  };
  const snapshot = await client.downloadWaypointSnapshot('big');
  assert.strictEqual(snapshot.getId().length, 4 + 3 * 1024 * 1024);
});

test('edge snapshots are uploaded with UploadEdgeSnapshotRequest', () => {
  const serialized = new mapPb.EdgeSnapshot().setId(`edge-${'b'.repeat(2500)}`).serializeBinary();
  const requests = [...GraphNavClient._dataChunkIteratorUploadEdgeSnapshot(serialized, new leasePb.Lease(), 1000)];
  assert.strictEqual(requests.length, 3);
  assert.ok(requests.every(request => request instanceof graphNavPb.UploadEdgeSnapshotRequest));
});

test('setLocalization uses FIDUCIAL_INIT_NEAREST by default', () => {
  const request = GraphNavClient._buildSetLocalizationRequest(new navPb.Localization());
  assert.strictEqual(request.getFiducialInit(), graphNavPb.SetLocalizationRequest.FiducialInit.FIDUCIAL_INIT_NEAREST);
});

test('blockingDockRobot sends an end time in seconds (was timeout ms added to seconds)', async () => {
  let endTimeSecs = null;
  const dockingClient = {
    async dockingCommand(dockId, clockIdentifier, endTime) {
      endTimeSecs = endTime.getSeconds() + endTime.getNanos() / 1e9;
      return 1;
    },
    async dockingCommandFeedbackFull() {
      return new dockingPb.DockingCommandFeedbackResponse()
        .setHeader(okHeader())
        .setStatus(dockingPb.DockingCommandFeedbackResponse.Status.STATUS_DOCKED);
    },
  };
  const timeSync = {
    endpoint: { clockIdentifier: 'clock' },
    getRobotTimeConverter: async () => ({ robotSecondsFromLocalSeconds: seconds => seconds }),
  };
  const robot = {
    ensureClient: async () => dockingClient,
    get timeSync() {
      return Promise.resolve(timeSync);
    },
  };
  assert.strictEqual(await blockingDockRobot(robot, 520), 0);
  assert.ok(Math.abs(endTimeSecs - (Date.now() / 1000 + 30)) < 1);
});

test('mergeFrom() merges like MergeFrom() in Python (text formats of Python)', () => {
  // Map entries replaced by key, a oneof member replacing the other, repeated fields appended, a wrapper set to 0.
  const target = new basicCommandPb.Stance().setSe2FrameName('vision').setAccuracy(0.05);
  target
    .getFootPositionsMap()
    .set('fl', new geometryPb.Vec2().setX(1).setY(1))
    .set('fr', new geometryPb.Vec2().setX(1).setY(-1));
  const source = new basicCommandPb.Stance();
  source
    .getFootPositionsMap()
    .set('fr', new geometryPb.Vec2().setX(2))
    .set('hl', new geometryPb.Vec2().setX(-1).setY(1));
  assert.strictEqual(
    textFormat.messageToString(mergeFrom(target, source)),
    'foot_positions {\n  key: "fl"\n  value {\n    x: 1.0\n    y: 1.0\n  }\n}\nfoot_positions {\n  key: "fr"\n' +
      '  value {\n    x: 2.0\n  }\n}\nfoot_positions {\n  key: "hl"\n  value {\n    x: -1.0\n    y: 1.0\n  }\n}\n' +
      'se2_frame_name: "vision"\naccuracy: 0.05\n',
  );
  // The target shares nothing with the source.
  source.getFootPositionsMap().get('fr').setX(5);
  assert.strictEqual(target.getFootPositionsMap().get('fr').getX(), 2);

  const oneof = mergeFrom(
    new fullBodyCommandPb.FullBodyCommand.Request().setStopRequest(new basicCommandPb.StopCommand.Request()),
    new fullBodyCommandPb.FullBodyCommand.Request().setFreezeRequest(new basicCommandPb.FreezeCommand.Request()),
  );
  assert.strictEqual(textFormat.messageToString(oneof), 'freeze_request {\n}\n');
  const lease = mergeFrom(
    new leasePb.Lease().setResource('body').setEpoch('e').setSequenceList([1, 2]).setClientNamesList(['a']),
    new leasePb.Lease().setSequenceList([3]).setClientNamesList(['b', 'c']),
  );
  assert.strictEqual(
    textFormat.messageToString(lease),
    'resource: "body"\nepoch: "e"\nsequence: 1\nsequence: 2\nsequence: 3\nclient_names: "a"\nclient_names: "b"\n' +
      'client_names: "c"\n',
  );
  const wrapper = mergeFrom(
    new basicCommandPb.ConstrainedManipulationCommand.Request().setForceLimit(new DoubleValue().setValue(1.5)),
    new basicCommandPb.ConstrainedManipulationCommand.Request()
      .setForceLimit(new DoubleValue().setValue(0))
      .setTangentialSpeed(0),
  );
  assert.strictEqual(textFormat.messageToString(wrapper), 'tangential_speed: 0.0\nforce_limit {\n  value: 1.5\n}\n');
  const challenge = mergeFrom(
    new estopPb.EstopCheckInRequest().setChallenge('5').setStopLevel(2),
    new estopPb.EstopCheckInRequest().setChallenge(UINT64_MAX),
  );
  assert.strictEqual(
    textFormat.messageToString(challenge),
    `challenge: ${UINT64_MAX}\nstop_level: ESTOP_LEVEL_SETTLE_THEN_CUT\n`,
  );
  assert.throws(() => mergeFrom(new leasePb.Lease(), new geometryPb.Vec2()), TypeError);
});

test('WorldObjectClient draws boxes from a size array and a math pose, and accepts requests without mutation', async () => {
  const client = new WorldObjectClient();
  client._stub = { mutateWorldObjects() {}, listWorldObjects() {} };
  client._timesyncEndpoint = { clockIdentifier: 'clock', getRobotTimeConverter: () => new RobotTimeConverter(0) };
  const sent = [];
  client.call = async (rpcMethod, request) => {
    sent.push(request);
    return new worldObjectPb.MutateWorldObjectResponse();
  };
  // A request without mutation (TypeError).
  await client.mutateWorldObjects(new worldObjectPb.MutateWorldObjectRequest());

  // The size array and the math pose were set as protos: the request could not be serialized.
  await client.drawOrientedBoundingBox('box', 'box', 'vision', new SE3Pose(1, 2, 3, new Quat()), [0.5, 0.25, 1]);
  const object = worldObjectPb.MutateWorldObjectRequest.deserializeBinary(sent[1].serializeBinary())
    .getMutation()
    .getObject();
  const size = object.getDrawablePropertiesList()[0].getBox().getSize();
  assert.deepStrictEqual([size.getX(), size.getY(), size.getZ()], [0.5, 0.25, 1]);
  const edge = object.getTransformsSnapshot().getChildToParentEdgeMapMap().get('box');
  assert.deepStrictEqual([edge.getParentFrameName(), edge.getParentTformChild().getPosition().getZ()], ['vision', 3]);
});

test('recording builds valid edge environments (it always threw) and has the errors of Python', () => {
  const { GraphNavRecordingServiceClient } = recording;
  const velLimit = new geometryPb.SE2VelocityLimit().setMaxVel(
    new geometryPb.SE2Velocity().setLinear(new geometryPb.Vec2().setX(0.5)),
  );
  const env = mapPb.Edge.Annotations.deserializeBinary(
    GraphNavRecordingServiceClient.makeEdgeEnvironment(
      velLimit,
      mapPb.Edge.Annotations.DirectionConstraint.DIRECTION_CONSTRAINT_FORWARD,
      true,
      0.6,
      true,
    ).serializeBinary(),
  );
  const terrain = env.getMobilityParams().getTerrainParams();
  assert.deepStrictEqual(
    [
      env.getRequireAlignment().getValue(),
      env.getDirectionConstraint(),
      terrain.getGroundMuHint().getValue(),
      terrain.getGratedSurfacesMode(),
      env.getMobilityParams().getVelLimit().getMaxVel().getLinear().getX(),
      env.getStairs().getState(),
    ],
    [
      true,
      mapPb.Edge.Annotations.DirectionConstraint.DIRECTION_CONSTRAINT_FORWARD,
      0.6,
      spotCommandPb.TerrainParams.GratedSurfacesMode.GRATED_SURFACES_MODE_ON,
      0.5,
      mapPb.AnnotationState.ANNOTATION_STATE_NONE,
    ],
  );
  // Only the fields set are annotated (an empty FieldMask activates all the mobility params).
  assert.deepStrictEqual(env.getOverrideMobilityParams().getPathsList(), [
    'terrain_params.ground_mu_hint',
    'terrain_params.grated_surfaces_mode',
    'vel_limit',
  ]);
  const defaults = GraphNavRecordingServiceClient.makeEdgeEnvironment();
  assert.deepStrictEqual(defaults.getOverrideMobilityParams().getPathsList(), ['terrain_params.ground_mu_hint']);
  assert.strictEqual(defaults.getRequireAlignment().getValue(), false);

  // The fiducial ids of StartRecordingRequest.
  const request = new GraphNavRecordingServiceClient()._buildStartRecordingRequest(null, null, [3, 7]);
  assert.deepStrictEqual(request.getRequireFiducialsList(), [3, 7]);
  assert.ok(new recording.NotLocalizedToEndError(null, 'x') instanceof recording.RecordingServiceResponseError);
  for (const name of ['MissingFiducialsError', 'FiducialPoseError', 'MapTooLargeLicenseError', 'RobotImpairedError']) {
    assert.strictEqual(typeof recording[name], 'function', name);
  }
});

test('Quaternion.toEulerZxy() gives the angles of Python near the gimbal lock (expected values from Python)', () => {
  // The quaternion package gave another decomposition near a roll of +-pi/2 (e.g. a pitch of pi/2 instead of -pi).
  const cases = [
    [
      [0.1891502356799039, 0.1891502356799039, -0.6813385269763019, -0.6813385269763019],
      [-3.141592653589793, 1.5707963267948966, -3.141592653589793],
    ],
    [
      [0.05001875498139313, -0.05001875498139313, -0.7053354692273113, 0.7053354692273114],
      [3.099950074491205, -1.5707963267948966, 1.5707963267948966],
    ],
    [
      [0.8330807211658227, -0.5198837098447052, 0.18386620849221855, 0.0643396883022452],
      [0.5843158380096333, -0.9998693209374374, 0.761118865926941],
    ],
  ];
  for (const [[w, x, y, z], expected] of cases) {
    const euler = new geometryPb.Quaternion().setW(w).setX(x).setY(y).setZ(z).toEulerZxy();
    assertClose([euler.yaw, euler.roll, euler.pitch], expected, `${[w, x, y, z]}`);
  }
  // And the quaternion of the formulas of Python.
  const quaternion = new EulerZXY(2.5, -1.2, 0.7).toQuaternion();
  assertClose(
    [quaternion.getW(), quaternion.getX(), quaternion.getY(), quaternion.getZ()],
    [0.4282060600842811, -0.43581817528373085, -0.41411262880482397, 0.6746946115568245],
  );
});

/**
 * A GraphNav client whose RPCs return the given response, handled like BaseClient.call().
 * @param {?import('google-protobuf').Message} response
 * @param {Array} requests The requests sent.
 * @returns {graphNav.GraphNavClient}
 */
function graphNavClientMock(response, requests = []) {
  const client = new graphNav.GraphNavClient();
  client._stub = new Proxy({}, { get: () => () => {} });
  client.call = async (rpcMethod, request, valueFromResponse, errorFromResponse) => {
    requests.push(request);
    const error = errorFromResponse?.(response) ?? null;
    if (error) throw error;
    return valueFromResponse ? valueFromResponse(response) : response;
  };
  return client;
}

test('GraphNavClient: GPS and unrecognized command errors, async navigation, localization state options, graph', async () => {
  const header = () =>
    new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_OK));
  const endpoint = { clockIdentifier: 'clock', getRobotTimeConverter: () => new RobotTimeConverter(0) };
  const { NavigateToAnchorResponse, NavigateToResponse } = graphNavPb;

  // STATUS_INVALID_GPS_COMMAND was a generic ResponseError.
  const gps = graphNavClientMock(
    new NavigateToAnchorResponse()
      .setHeader(header())
      .setStatus(NavigateToAnchorResponse.Status.STATUS_INVALID_GPS_COMMAND)
      .setGpsStatus(NavigateToAnchorResponse.GPSStatus.GPS_STATUS_TOO_FAR_FROM_MAP),
  );
  gps._timesyncEndpoint = endpoint;
  await assert.rejects(gps.navigateToAnchor(new geometryPb.SE3Pose(), 5), error => {
    assert.ok(error instanceof graphNav.InvalidGPSError);
    assert.strictEqual(
      String(error),
      'Cannot issue the GPS command because it is invalid. (reason: The given coordinates were too far from any ' +
        'coordinates in the uploaded map.)',
    );
    return true;
  });
  // UnrecognizedCommandError, the name of Python (a subclass of the misspelled one).
  const unrecognized = graphNavClientMock(
    new NavigateToResponse().setHeader(header()).setStatus(NavigateToResponse.Status.STATUS_UNRECOGNIZED_COMMAND),
  );
  unrecognized._timesyncEndpoint = endpoint;
  await assert.rejects(unrecognized.navigateTo('waypoint', 5), graphNav.UnrecognizedCommandError);

  // Without time sync: a rejected promise (it threw synchronously).
  const noTimeSync = graphNavClientMock(null);
  let navigation;
  assert.doesNotThrow(() => {
    navigation = noTimeSync.navigateTo('waypoint', 5);
  });
  await assert.rejects(navigation, /No timesync endpoint/);

  // The waypoint id and the GPS state of the localization request (the waypoint id was never set).
  const requests = [];
  await graphNavClientMock(
    new graphNavPb.GetLocalizationStateResponse().setHeader(header()),
    requests,
  ).getLocalizationState(false, false, false, false, false, 'waypoint-1', true);
  assert.deepStrictEqual([requests[0].getWaypointId(), requests[0].getRequestGpsState()], ['waypoint-1', true]);

  // A robot without map: an empty graph (undefined).
  const graphless = graphNavClientMock(new graphNavPb.DownloadGraphResponse().setHeader(header()));
  graphless._useStreamingGraphUpload = false;
  assert.ok((await graphless.downloadGraph()) instanceof mapPb.Graph);
  assert.strictEqual(typeof graphless.uploadSnapshots, 'function');
});

test('docking, hazard avoidance, ray cast and local grid clients build and read their messages like Python', async () => {
  const header = () =>
    new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_OK));
  // An unset dock state is the default DockState (undefined).
  const docking = new DockingClient();
  docking._stub = new Proxy({}, { get: () => () => {} });
  docking.call = async (rpcMethod, request, valueFromResponse) =>
    valueFromResponse(new dockingPb.GetDockingStateResponse().setHeader(header()));
  assert.ok((await docking.getDockingState()) instanceof dockingPb.DockState);

  // The message of NoTimeSyncError (it was passed as the response).
  assert.throws(
    () => new HazardAvoidanceClient().timeSyncEndpoint,
    error => error.message === 'No timesync endpoint set for the robot' && error.response === null,
  );

  // No raycast type: all the sources (it was [null]).
  const raycast = new RayCastClient()._raycastRequest([0, 0, 0], [1, 0, 0], null, 0, 'body');
  assert.deepStrictEqual(raycast.getIntersectionTypesList(), []);

  // LocalGridRequest messages (LocalGrid).
  const requests = [];
  const localGrids = new LocalGridClient();
  localGrids._stub = new Proxy({}, { get: () => () => {} });
  localGrids.call = async (rpcMethod, request) => requests.push(request);
  await localGrids.getLocalGrids(['terrain']);
  assert.ok(requests[0].getLocalGridRequestsList()[0] instanceof localGridPb.LocalGridRequest);
});

/**
 * A map processing client whose streaming RPCs return the given responses, handled like BaseClient.call().
 * @param {Array<import('google-protobuf').Message>} responses
 * @returns {mapProcessing.MapProcessingServiceClient}
 */
function streamingMapProcessingClient(responses) {
  const client = new mapProcessing.MapProcessingServiceClient();
  client._stub = { processTopology() {}, processAnchoring() {} };
  client.call = async (rpcMethod, request, valueFromResponse, errorFromResponse) => {
    const error = errorFromResponse(responses);
    if (error) throw error;
    return valueFromResponse(responses);
  };
  return client;
}

test('map processing merges the streamed responses like MergeFrom, and knows the gravity alignment error', async () => {
  const header = () =>
    new headerPb.ResponseHeader().setError(new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_OK));
  const topology = (status, edgeId) =>
    new mapProcessingPb.ProcessTopologyResponse()
      .setHeader(header())
      .setStatus(status)
      .setNewSubgraph(
        new mapPb.Graph().setEdgesList([new mapPb.Edge().setId(new mapPb.Edge.Id().setFromWaypoint(edgeId))]),
      );
  const { Status } = mapProcessingPb.ProcessTopologyResponse;
  // Only the last response was kept: the new edges of the first ones were lost.
  const merged = await streamingMapProcessingClient([
    topology(Status.STATUS_OK, 'a'),
    topology(Status.STATUS_OK, 'b'),
  ]).processTopology(new mapProcessingPb.ProcessTopologyRequest.Params(), false);
  assert.deepStrictEqual(
    merged
      .getNewSubgraph()
      .getEdgesList()
      .map(edge => edge.getId().getFromWaypoint()),
    ['a', 'b'],
  );

  // STATUS_INVALID_GRAVITY_ALIGNMENT was not an error.
  const anchoring = new mapProcessingPb.ProcessAnchoringResponse()
    .setHeader(header())
    .setStatus(mapProcessingPb.ProcessAnchoringResponse.Status.STATUS_INVALID_GRAVITY_ALIGNMENT);
  await assert.rejects(
    streamingMapProcessingClient([anchoring]).processAnchoring(
      new mapProcessingPb.ProcessAnchoringRequest.Params(),
      false,
      false,
    ),
    error => error.constructor.name === 'InvalidGravityAlignmentError' && /disagrees with gravity/.test(error.message),
  );
});

// ---------------------------------------------------------------------------------------------------------------
// Background tasks: Event (replaces node-threading-event), payload keep-alive, lights, area callbacks.
// ---------------------------------------------------------------------------------------------------------------

async function waitFor(predicate, timeoutMs = 2_000) {
  const end = Date.now() + timeoutMs;
  while (!predicate()) {
    if (Date.now() > end) throw new Error('condition not reached in time');

    await sleep(5);
  }
}

const quietLogger = { debug() {}, info() {}, warn() {}, error() {} };

/** Runs fn with the given SDK loggers silenced. */
async function silenced(labels, fn) {
  const loggers = labels.map(label => LoggerUtil.getLogger(label));
  loggers.forEach(logger => {
    logger.silent = true;
  });
  try {
    return await fn();
  } finally {
    loggers.forEach(logger => {
      logger.silent = false;
    });
  }
}

test('Event: set() wakes every wait, and the waits that time out leave nothing behind (was a listener each)', async () => {
  const warnings = [];
  const onWarning = warning => warnings.push(warning.name);
  process.on('warning', onWarning);
  try {
    const event = new Event();
    const pending = Array.from({ length: 20 }, () => event.wait(60_000));
    const forever = [event.wait(), event.wait(Infinity), event.wait(2 ** 40)];
    await Promise.all(Array.from({ length: 1_000 }, () => event.wait(0)));
    assert.strictEqual(event._waiters.size, pending.length + forever.length);
    // Timers above 2^31 - 1 ms would fire at once.
    const winner = await Promise.race([...forever, sleep(30, 'pending')]);
    assert.strictEqual(winner, 'pending');
    event.set();
    assert.deepStrictEqual(await Promise.all([...pending, ...forever]), Array(23).fill(true));
    assert.strictEqual(event._waiters.size, 0);
    assert.strictEqual(await event.wait(60_000), true);
    event.clear();
    assert.strictEqual(event.isSet(), false);
    assert.strictEqual(await event.wait(1), false);
    assert.strictEqual(event._waiters.size, 0);
    assert.deepStrictEqual(warnings, []);
  } finally {
    process.off('warning', onWarning);
  }
});

test('an idle TimeSyncThread does not keep the process alive, like a Python daemon thread', () => {
  const script = `
    const { TimeSyncThread } = require(${JSON.stringify(require.resolve('../src/bosdyn-client/time_sync'))});
    const endpoint = {
      response: null,
      hasEstablishedTimeSync: false,
      async getNewEstimate() {
        endpoint.response = { getState: () => ({ getStatus: () => 1 }) };
      },
    };
    new TimeSyncThread(null, endpoint).start();
  `;
  const child = spawnSync(process.execPath, ['-e', script], { timeout: 10_000 });
  assert.strictEqual(child.error, undefined, 'the process did not exit on its own');
  assert.strictEqual(child.status, 0, String(child.stderr));
});

test('PayloadRegistrationKeepAlive re-registers after the interval (was at once), and shutdown() ends it', async () => {
  const calls = [];
  const client = {
    async registerPayload(payload, secret, args) {
      calls.push(args);
    },
  };
  const keepAlive = new PayloadRegistrationKeepAlive(client, new payloadPb.Payload(), 'secret', 60, quietLogger, 2_000);
  assert.strictEqual(keepAlive.isAlive(), false);
  assert.strictEqual(await keepAlive.start(), keepAlive);
  assert.ok(keepAlive.isAlive());
  await assert.rejects(keepAlive.start(), /only be started once/);
  await sleep(20);
  assert.strictEqual(calls.length, 1);
  await waitFor(() => calls.length >= 3);
  assert.deepStrictEqual(calls[0], { timeout: 2_000 });
  await keepAlive.shutdown();
  assert.strictEqual(keepAlive.isAlive(), false);
  const count = calls.length;
  await sleep(120);
  assert.strictEqual(calls.length, count);
});

test('PayloadRegistrationKeepAlive follows the re-registration error callback, like Python', async () => {
  const times = [];
  const client = {
    async registerPayload() {
      times.push(Date.now());
      if (times.length >= 2 && times.length <= 4) throw new Error('flaky');
      if (times.length === 6) throw new Error('fatal');
    },
  };
  const keepAlive = new PayloadRegistrationKeepAlive(
    client,
    new payloadPb.Payload(),
    'secret',
    150,
    quietLogger,
    null,
    5,
  );
  keepAlive.reregistrationErrorCallback = error =>
    error.message === 'fatal' ? ErrorCallbackResult.ABORT : ErrorCallbackResult.RETRY_WITH_EXPONENTIAL_BACK_OFF;
  await keepAlive.start();
  // start(), +150 ms (fails), +5 ms (fails), +10 ms (fails), +20 ms (ok), +150 ms (fatal: ABORT).
  await waitFor(() => times.length >= 5);
  assert.ok(times[4] - times[0] < 450, `the retries waited the full interval: ${times[4] - times[0]} ms`);
  await waitFor(() => !keepAlive.isAlive());
  await sleep(200);
  assert.strictEqual(times.length, 6);
});

test('LightsHelper.stop() waits for the loop and leaves the lights off; unexpected errors end the loop', async () => {
  const settings = [];
  const lights = new LightsHelper(20, 0.5);
  lights.lightingClient = {
    async setLedBrightness(brightness) {
      settings.push(brightness);
    },
  };
  lights.start();
  const loop = lights.thread;
  lights.start();
  assert.strictEqual(lights.thread, loop);
  await waitFor(() => settings.length >= 4);
  await lights.stop();
  assert.strictEqual(lights.thread, null);
  assert.deepStrictEqual(settings.at(-1), [0, 0, 0, 0]);
  const count = settings.length;
  await sleep(80);
  assert.strictEqual(settings.length, count);

  // init() was not called: a TypeError, not an SDK error. It ends the loop (it was retried forever).
  await silenced(['lights_helper'], async () => {
    const broken = new LightsHelper(20, 0.5);
    broken.start();
    await waitFor(() => broken.thread === null);
    assert.ok(broken.stopEvent.isSet());
  });
});

test('AreaCallbackRegionHandlerBase awaits run(), and its helpers work in every stage', async () => {
  const { Stage } = areaCallbackPb.UpdateCallbackRequest;
  const { ErrorType } = areaCallbackPb.UpdateCallbackResponse.Error;
  const { Option } = areaCallbackPb.UpdateCallbackResponse.NavPolicy;
  const robot = { timeSec: async () => 100 };
  // run(handler) is the run() of the handler.
  const newHandler = run => {
    const handler = new (class extends AreaCallbackRegionHandlerBase {})({}, robot);
    handler.run = () => run(handler);
    handler.internalSetEndTime(1_000);
    handler.internalBeginComplete();
    return handler;
  };

  await silenced(['area_callback_region_handler_base'], async () => {
    // blockUntilArrivedAtEnd() always threw IncorrectUsage (typo), and run() was not awaited.
    const blocked = newHandler(async handler => {
      await handler.blockUntilArrivedAtEnd();
      throw new PathBlocked('blocked');
    });
    const running = blocked.internalRunWrapper(new Event());
    await sleep(30);
    assert.ok(!blocked.updateResponse.hasComplete() && !blocked.updateResponse.hasError());
    blocked.internalSetStage(Stage.STAGE_AT_END);
    await running;
    assert.strictEqual(blocked.updateResponse.getError().getError(), ErrorType.ERROR_BLOCKED);
    // policy, error and complete are a oneof: no TypeError once the response has an error.
    assert.strictEqual(blocked.willGetControl(), false);
    blocked.controlAtEnd();
    assert.strictEqual(blocked.updateResponse.getPolicy().getAtEnd(), Option.OPTION_CONTROL);

    // EndCallback during a safeSleep(): the callback is complete.
    const shutdownEvent = new Event();
    const sleeping = newHandler(async handler => {
      await handler.safeSleep(60_000);
    });
    const done = sleeping.internalRunWrapper(shutdownEvent);
    shutdownEvent.set();
    await done;
    assert.ok(sleeping.updateResponse.hasComplete());

    // A LeaseUseError whose response has no lease_use_result (was a TypeError out of the wrapper).
    const leaseLost = newHandler(async () => {
      throw new LeaseUseError({ getLeaseUseResultsList: () => [new leasePb.LeaseUseResult().setStatus(2)] });
    });
    await leaseLost.internalRunWrapper(new Event());
    const error = leaseLost.updateResponse.getError();
    assert.strictEqual(error.getError(), ErrorType.ERROR_LEASE);
    assert.strictEqual(error.getLeaseUseResultsList()[0].getStatus(), 2);

    // Like Python, IncorrectUsage is raised to the caller.
    const misused = newHandler(async handler => {
      await handler.blockUntilControl();
    });
    await assert.rejects(misused.internalRunWrapper(new Event()), IncorrectUsage);
  });
});

// ---------------------------------------------------------------------------------------------------------------
// NTRIP client (GPS corrections).
// ---------------------------------------------------------------------------------------------------------------

/** A local NTRIP caster: handle(socket, connectionNumber) answers the request of each connection. */
async function startCaster(handle) {
  const caster = { connections: 0, open: 0, maxOpen: 0 };
  const sockets = new Set();
  const server = net.createServer(socket => {
    caster.connections += 1;
    caster.open += 1;
    caster.maxOpen = Math.max(caster.maxOpen, caster.open);
    sockets.add(socket);
    socket.on('close', () => {
      caster.open -= 1;
      sockets.delete(socket);
    });
    socket.on('error', () => {});
    const number = caster.connections;
    socket.once('data', () => handle(socket, number));
  });
  await new Promise(resolve => {
    server.listen(0, '127.0.0.1', resolve);
  });
  caster.port = server.address().port;
  caster.close = () => {
    sockets.forEach(socket => socket.destroy());
    return new Promise(resolve => {
      server.close(resolve);
    });
  };
  return caster;
}

function ntripClient(caster, device, reconnectSecs) {
  const params = new NtripClientParams('127.0.0.1', caster.port, 'user', 'password', 'MOUNT', false, reconnectSecs);
  return new NtripClient(device, params, quietLogger);
}

test('NtripClient keeps one listener per event on its socket (was two more per message)', async () => {
  const messages = Array.from({ length: 50 }, (_, i) => Buffer.from(`RTCM-${i};`));
  const caster = await startCaster(async socket => {
    socket.write('ICY 200 OK\r\n\r\n');
    for (const message of messages) {
      socket.write(message);

      await sleep(1);
    }
  });
  const warnings = [];
  const onWarning = warning => warnings.push(warning.name);
  process.on('warning', onWarning);
  const received = [];
  const client = ntripClient(caster, { write: data => received.push(data) }, 60);
  try {
    client.startStream();
    const expected = Buffer.concat(messages);
    await waitFor(() => Buffer.concat(received).length >= expected.length, 5_000);
    assert.deepStrictEqual(Buffer.concat(received), expected);
    for (const name of ['data', 'error', 'timeout']) {
      assert.ok(client.sock.listenerCount(name) <= 1, `${client.sock.listenerCount(name)} '${name}' listeners`);
    }
    assert.deepStrictEqual(warnings, []);
  } finally {
    process.off('warning', onWarning);
    await client.stopStream();
    await caster.close();
  }
});

test('NtripClient reconnects when the caster resets or closes the connection (it waited forever)', async () => {
  const caster = await startCaster(async (socket, number) => {
    socket.write('ICY 200 OK\r\n\r\n');
    await sleep(50);
    if (number === 1) socket.resetAndDestroy();
    else socket.end();
  });
  const client = ntripClient(caster, { write() {} }, 0.05);
  try {
    client.startStream();
    await waitFor(() => caster.connections >= 3, 5_000);
    assert.ok(client.isStreaming());
  } finally {
    await client.stopStream();
    await caster.close();
  }
});

test('NtripClient: stopStream() ends the reconnect delay at once, and GGA sentences or restarts open one connection', async () => {
  const caster = await startCaster(socket => socket.end('HTTP/1.1 401 Unauthorized\r\n\r\n'));
  const client = ntripClient(caster, { write() {} }, 60);
  const gga = '$GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,46.9,M,,*47';
  try {
    client.startStream();
    await waitFor(() => caster.connections === 1 && caster.open === 0);
    // The client waits 60 s to reconnect. Each GGA sentence restarted it, with a new connection.
    for (let i = 0; i < 5; i += 1) client.handleNmeaGga(gga);
    await sleep(100);
    assert.strictEqual(caster.connections, 1);
    // A restart ends the delay. Two restarts in a row still give a single connection (was one per restart).
    client.startStream();
    client.startStream();
    await waitFor(() => caster.connections >= 2);
    await sleep(100);
    assert.strictEqual(caster.connections, 2);
    assert.strictEqual(caster.maxOpen, 1);
    const start = Date.now();
    await client.stopStream();
    assert.ok(Date.now() - start < 1_000, `stopStream() took ${Date.now() - start} ms`);
    assert.strictEqual(client.isStreaming(), false);
  } finally {
    await client.stopStream();
    await caster.close();
  }
});

// ---------------------------------------------------------------------------------------------------------------
// GPS listener.
// ---------------------------------------------------------------------------------------------------------------

function nmeaSentence(body) {
  let checksum = 0;
  for (const c of body) checksum ^= c.charCodeAt(0);
  return `$${body}*${checksum.toString(16).toUpperCase().padStart(2, '0')}\r\n`;
}

/** The NMEA sentences of one epoch of a GPS receiver, at 12:35:<second> UTC. */
function nmeaEpoch(second, { zda = true } = {}) {
  const time = `1235${String(second).padStart(2, '0')}.00`;
  return (
    nmeaSentence(`GPGGA,${time},4807.038,N,01131.000,E,4,08,0.9,545.4,M,46.9,M,,`) +
    nmeaSentence(`GPGST,${time},0.5,0.4,0.3,45.0,0.02,0.03,0.05`) +
    (zda ? nmeaSentence(`GPZDA,${time},24,09,2026,00,00`) : '')
  );
}

test('NMEAParser reads the GGA, GST and ZDA fields of nmea-simple (it returned no data point)', () => {
  const parser = new NMEAParser(quietLogger);
  const data = nmeaEpoch(19) + nmeaEpoch(20);
  // Chunks cut in the middle of lines, and chunks of several lines.
  const points = [data.slice(0, 30), data.slice(30, 200), data.slice(200)].flatMap(chunk => parser.parse(chunk, null));
  // The second epoch is complete once the next one starts.
  assert.strictEqual(points.length, 1);
  const [point] = points;
  const llh = point.getLlh();
  assert.ok(Math.abs(llh.getLatitude() - (48 + 7.038 / 60)) < 1e-9);
  assert.ok(Math.abs(llh.getLongitude() - (11 + 31 / 60)) < 1e-9);
  assert.strictEqual(llh.getHeight(), 545.4);
  assert.strictEqual(point.getSatellitesList().length, 8);
  assert.strictEqual(point.getMode().getValue(), 4);
  assert.ok(Math.abs(point.getAccuracy().getHorizontal() - Math.sqrt((0.02 ** 2 + 0.03 ** 2) / 2)) < 1e-12);
  assert.strictEqual(point.getAccuracy().getVertical(), 0.05);
  // The ZDA time is UTC (it was shifted by the time zone of the computer).
  assert.strictEqual(point.getTimestampGps().getSeconds(), Date.UTC(2026, 8, 24, 12, 35, 19) / 1000);
  assert.ok(point.hasTimestampClient() && point.hasTimestampRobot());
  assert.strictEqual(parser.getLatestGga(), nmeaEpoch(19).split('\r\n')[0]);

  // The last complete line of each chunk was dropped: here, the ZDA sentence.
  const lineByLine = new NMEAParser(quietLogger);
  const byEpoch = [nmeaEpoch(19), nmeaEpoch(20)].flatMap(chunk => lineByLine.parse(chunk, null));
  assert.strictEqual(byEpoch[0].getTimestampGps().getSeconds(), Date.UTC(2026, 8, 24, 12, 35, 19) / 1000);

  // Without ZDA, the GPS time is the GGA time of today.
  const withoutZda = new NMEAParser(quietLogger).parse(nmeaEpoch(19, { zda: false }) + nmeaEpoch(20), null);
  assert.strictEqual(withoutZda[0].getTimestampGps().toDate().toISOString().slice(11, 19), '12:35:19');

  // Like pynmea2: without checksum, a sentence is only accepted if the checksum is not required.
  const unchecked = nmeaEpoch(19).replace(/\*[0-9A-F]{2}\r\n/g, '\r\n') + nmeaEpoch(20);
  assert.strictEqual(new NMEAParser(quietLogger).parse(unchecked, null, false).length, 1);
  assert.strictEqual(new NMEAParser(quietLogger).parse(unchecked, null).length, 0);
});

test('NMEAStreamReader reads lines of a Node.js stream, and reports decoding errors, timeouts and the end', async () => {
  const stream = new PassThrough();
  const reader = new NMEAStreamReader(quietLogger, stream, new SE3Pose(1, 2, 3, new Quat()));
  stream.write(Buffer.from([0x24, 0xff, 0xfe, 0x0a]));
  stream.write(`noise ${nmeaEpoch(19)}${nmeaEpoch(20).slice(0, 10)}`);
  // Not UTF-8, then the three sentences of the first epoch.
  assert.strictEqual(await reader.readData(null), null);
  const read = [await reader.readData(null), await reader.readData(null), await reader.readData(null)];
  assert.deepStrictEqual(
    read.map(points => points.length),
    [0, 0, 0],
  );
  stream.write(nmeaEpoch(20).slice(10));
  const [point] = await reader.readData(null);
  assert.strictEqual(point.getBodyTformGps().getPosition().getX(), 1);

  // The timeout of the stream, like a socket timeout in Python.
  stream.timeout = 30;
  await assert.rejects(
    (async () => {
      for (;;) await reader.readData(null);
    })(),
    StreamTimeoutError,
  );
  stream.end();
  await assert.rejects(reader.readData(null), /The GPS stream ended/);
  reader.close();
});

test('GpsListener sends the GPS data to the robot, one request at a time (it sent none)', async () => {
  const requests = [];
  let inFlight = 0;
  let maxInFlight = 0;
  let unavailable = 1;
  const robot = {
    async ensureClient(serviceName) {
      if (unavailable-- > 0) throw new UnregisteredServiceNameError(serviceName);
      return {
        async newGpsData(points, device) {
          inFlight += 1;
          maxInFlight = Math.max(maxInFlight, inFlight);
          requests.push({ points: points.length, device: device.getName() });
          await sleep(30);
          inFlight -= 1;
        },
      };
    },
  };
  const stream = new PassThrough();
  const listener = new GpsListener(robot, null, stream, 'gps', new SE3Pose(0, 0, 0, new Quat()), quietLogger);
  const savedDelay = GpsListener.SECS_PER_ATTEMPT;
  GpsListener.SECS_PER_ATTEMPT = 0.01;
  try {
    const running = listener.run();
    for (let second = 0; second < 10; second++) {
      stream.write(nmeaEpoch(second));

      await sleep(5);
    }
    await sleep(100);
    // Closes the last epoch, and sends the data received during the last request.
    stream.write(nmeaEpoch(10));
    await waitFor(() => requests.reduce((count, request) => count + request.points, 0) >= 10);
    listener.stop();
    assert.strictEqual(await running, true);
  } finally {
    GpsListener.SECS_PER_ATTEMPT = savedDelay;
  }
  assert.strictEqual(
    requests.reduce((count, request) => count + request.points, 0),
    10,
  );
  assert.strictEqual(maxInFlight, 1);
  assert.ok(Math.max(...requests.map(request => request.points)) > 1, 'the data received meanwhile was not grouped');
  assert.ok(requests.every(request => request.device === 'gps'));
});

test('GpsListener survives failed requests, feeds the NTRIP client, and stops on SIGINT', async () => {
  const unhandled = [];
  const onUnhandled = error => unhandled.push(error);
  process.on('unhandledRejection', onUnhandled);
  let requests = 0;
  const robot = {
    ensureClient: async () => ({
      async newGpsData() {
        requests += 1;
        throw new RpcError(new Error('network'), 'robot unreachable');
      },
    }),
  };
  const stream = new PassThrough();
  const listener = new GpsListener(robot, null, stream, 'gps', new SE3Pose(0, 0, 0, new Quat()), quietLogger);
  const ntrip = { streaming: false, ggas: [], stopped: false };
  listener.ntripClient = {
    isStreaming: () => ntrip.streaming,
    startStream: () => {
      ntrip.streaming = true;
    },
    handleNmeaGga: gga => ntrip.ggas.push(gga),
    stopStream: async () => {
      ntrip.stopped = true;
    },
  };
  const sigintListeners = process.listenerCount('SIGINT');
  try {
    const running = listener.run();
    for (let second = 0; second < 5; second++) {
      stream.write(nmeaEpoch(second));

      await sleep(5);
    }
    await waitFor(() => requests >= 2);
    process.emit('SIGINT');
    assert.strictEqual(await running, true);
  } finally {
    process.off('unhandledRejection', onUnhandled);
  }
  assert.deepStrictEqual(unhandled, []);
  assert.ok(ntrip.streaming && ntrip.stopped);
  assert.strictEqual(ntrip.ggas.at(-1), nmeaEpoch(3).split('\r\n')[0]);
  assert.strictEqual(process.listenerCount('SIGINT'), sigintListeners);
});

test('GpsListener.run() returns false when the stream times out or ends', async () => {
  const robot = { ensureClient: async () => ({ newGpsData: async () => {} }) };
  const pose = new SE3Pose(0, 0, 0, new Quat());
  const silent = new PassThrough();
  silent.timeout = 30;
  assert.strictEqual(await new GpsListener(robot, null, silent, 'gps', pose, quietLogger).run(), false);
  const ended = new PassThrough();
  ended.end(nmeaEpoch(0));
  assert.strictEqual(await new GpsListener(robot, null, ended, 'gps', pose, quietLogger).run(), false);
});

test('GpsListener.run() stops the NTRIP stream when it fails, and keeps the client for the next run()', async () => {
  // The NTRIP connection kept the process alive after the failure (the thread of Python is a daemon).
  const robot = { ensureClient: async () => ({ newGpsData: async () => {} }) };
  const ended = new PassThrough();
  ended.end(nmeaEpoch(0));
  const listener = new GpsListener(robot, null, ended, 'gps', new SE3Pose(0, 0, 0, new Quat()), quietLogger);
  const ntrip = { streaming: true, stops: 0 };
  listener.ntripClient = {
    isStreaming: () => ntrip.streaming,
    startStream: () => {
      ntrip.streaming = true;
    },
    handleNmeaGga() {},
    stopStream: async () => {
      ntrip.streaming = false;
      ntrip.stops += 1;
    },
  };
  assert.strictEqual(await listener.run(), false);
  assert.deepStrictEqual(ntrip, { streaming: false, stops: 1 });
  // Like Python, run() restarts the stream of the client.
  assert.notStrictEqual(listener.ntripClient, null);
});

// ---------------------------------------------------------------------------------------------------------------
// Math helpers (the expected values come from the Python math_helpers).
// ---------------------------------------------------------------------------------------------------------------

function assertClose(actual, expected, message = '') {
  assert.strictEqual(actual.length, expected.length, message);
  actual.forEach((value, i) =>
    assert.ok(Math.abs(value - expected[i]) < 1e-9, `${message} [${i}] ${value} != ${expected[i]}`),
  );
}

const quatValues = quat => [quat.w, quat.x, quat.y, quat.z];

function axisAngle(axis, angle) {
  const norm = Math.hypot(...axis);
  const s = Math.sin(angle / 2);
  return new Quat(Math.cos(angle / 2), (axis[0] / norm) * s, (axis[1] / norm) * s, (axis[2] / norm) * s);
}

test('Quat.fromMatrix and SE3Pose.fromMatrix handle rotations of 162° and more (TypeError), and give numbers', () => {
  const quat = axisAngle([1, -2, 0.5], (163 * Math.PI) / 180);
  // Python gives the opposite quaternion: the same rotation.
  assertClose(
    quatValues(Quat.fromMatrix(quat.toMatrix())),
    [-0.14780941112961055, -0.43164191022553206, 0.863283820451064, -0.21582095511276603],
  );
  assertClose(quatValues(Quat.fromMatrix(Quat.fromYaw(Math.PI).toMatrix())), quatValues(Quat.fromYaw(Math.PI)));

  const pose = SE3Pose.fromMatrix(new SE3Pose(1.5, -2, 0.25, Quat.fromYaw(3)).toMatrix());
  // x, y and z were arrays: [[1.5]].
  assert.deepStrictEqual([typeof pose.x, typeof pose.y, typeof pose.z], ['number', 'number', 'number']);
  assertClose([pose.x, pose.y, pose.z, pose.rot.toYaw()], [1.5, -2, 0.25, 3]);
  // Also from an array of rows.
  assertClose([SE3Pose.fromMatrix(pose.toMatrix().tolist()).x], [1.5]);
});

test('Quat.slerp and SE3Pose.interp interpolate (they always threw)', () => {
  const a = new Quat(0.9689124217106447, 0.24740395925452294, 0, 0);
  const b = new Quat(0.3153223623952687, 0, 0.9489846193555862, 0);
  assertClose(quatValues(Quat.slerp(a, b, 0.25)), [0.9274963750432331, 0.21062494108906232, 0.308848844053027, 0]);
  const middle = SE3Pose.interp(new SE3Pose(0, 1, 2, Quat.fromYaw(0.1)), new SE3Pose(4, -1, 0, Quat.fromYaw(1.2)), 0.5);
  assertClose([middle.x, middle.y, middle.z, middle.rot.toYaw()], [2, 0, 1, 0.65]);
  // Almost identical quaternions: the linear interpolation, normalized.
  assertClose([Quat.slerp(Quat.fromYaw(0.3), Quat.fromYaw(0.30001), 0.5).toYaw()], [0.300005]);
});

test('Quat.fromTwoVectors handles opposite vectors (u.cross(u + v) threw)', () => {
  assertClose(
    quatValues(Quat.fromTwoVectors(new Vec3(1, 0, 0), new Vec3(-1, 0.1, 0))),
    [0.04981370188015976, 0, 0, 0.998758526924799],
  );
  // Antipodal: any rotation of 180° around an orthogonal axis.
  assertClose(
    quatValues(Quat.fromTwoVectors(new Vec3(1, 2, 3), new Vec3(-1, -2, -3))),
    [0, 0, -0.8320502943378437, 0.554700196225229],
  );
  const quat = Quat.fromTwoVectors(new Vec3(2, -1, 0.5), new Vec3(-3, 1, 0.2));
  const rotated = new Vec3(...quat.transformPoint(2, -1, 0.5));
  const target = new Vec3(-3, 1, 0.2);
  assertClose([rotated.dot(target) / (rotated.length * target.length)], [1]);
});

test('math helpers: point clouds, protos and vectors (ReferenceError, TypeError, wrong values)', () => {
  const pose = new SE3Pose(1, 2, 3, axisAngle([0.2, 1, -0.5], 2));
  const points = [
    [0, 0, 0],
    [0.5, -2, 4],
  ];
  const cloud = SE3Pose.transformCloudFromMatrix(pose.toMatrix(), numjs.array(points)).tolist();
  points.forEach((point, i) => assertClose(cloud[i], pose.transformPoint(...point)));
  assertClose(pose.transformCloud(points).tolist()[1], pose.transformPoint(0.5, -2, 4));

  // A geometry Vec3 proto was read as (0, 0, 0).
  const vec = pose.transformVec3(new geometryPb.Vec3().setX(0.5).setY(-2).setZ(4));
  assertClose([vec.getX(), vec.getY(), vec.getZ()], pose.transformPoint(0.5, -2, 4));

  const near = new geometryPb.SE3Pose()
    .setPosition(new geometryPb.Vec3().setX(0.05))
    .setRotation(Quat.fromYaw(0.01).toProto());
  assert.strictEqual(isWithinThreshold(near, 0.1, 5), true);
  assert.strictEqual(isWithinThreshold(near, 0.01, 5), false);

  // Unset sub-messages read as 0, like Python.
  assert.deepStrictEqual(poseToXyzYaw(new geometryPb.SE3Pose()), [0, 0, 0, 0]);
  const flat = SE2Pose.fromProto(new geometryPb.SE2Pose().setAngle(1));
  assert.deepStrictEqual([flat.x, flat.y, flat.angle], [0, 0, 1]);
  assert.strictEqual(SE3Velocity.fromProto(new geometryPb.SE3Velocity()).angularVelocityZ, 0);

  // A 1-D array gave (1, 1, 1).
  const velocity = SE2Velocity.fromVector(numjs.array([1, 2, 3]));
  assert.deepStrictEqual([velocity.linearVelocityX, velocity.linearVelocityY, velocity.angularVelocity], [1, 2, 3]);
  const column = SE2Velocity.fromVector(numjs.array([1, 2, 3]).reshape(3, 1));
  assert.deepStrictEqual([column.linearVelocityX, column.angularVelocity], [1, 3]);
  assert.strictEqual(SE2Velocity.fromVector('1,2,3'), null);

  // A Quaternion proto can be multiplied, and another type is a TypeError (it was a ReferenceError).
  assertClose(quatValues(Quat.fromYaw(0.5).mult(Quat.fromYaw(0.25).toProto())), quatValues(Quat.fromYaw(0.75)));
  assert.throws(() => new Quat().mult(3), TypeError);
  assert.match(String(new SE3Pose(1, 2, 3, new Quat())), /X: 1\.000 Y: 2\.000 Z: 3\.000/);
});

test('math helpers: v[0] and iteration of vectors, toNumpy/fromNumpy, fromObj, str() of Python', () => {
  const vec = new Vec3(1, 2, 3);
  vec[1] = 5;
  assert.deepStrictEqual([vec[0], vec[1], vec[2], [...vec]], [1, 5, 3, [1, 5, 3]]);
  const vec2 = new Vec2(3, 4);
  assert.deepStrictEqual([vec2[0], vec2[1], [...vec2]], [3, 4, [3, 4]]);
  assert.deepStrictEqual(Vec3.fromNumpy(vec.toNumpy()), vec);
  assert.deepStrictEqual(Vec3.fromNumpy([7, 8, 9]), new Vec3(7, 8, 9));
  // The deprecated from_obj of Python.
  const pose = new SE3Pose(1.23456, 2, 3, Quat.fromYaw(0.5));
  assert.deepStrictEqual(SE3Pose.fromObj(pose.toProto()), SE3Pose.fromProto(pose.toProto()));
  assert.deepStrictEqual(Quat.fromObj(pose.rot.toProto()), pose.rot);
  // The texts of str() in Python (the numbers were printed with all their digits).
  assert.strictEqual(String(vec), 'X: 1.000 Y: 5.000 Z: 3.000');
  assert.strictEqual(
    String(pose),
    'position -- X: 1.235 Y: 2.000 Z: 3.000 rotation -- W: 0.9689 X: 0.0000 Y: 0.0000 Z: 0.2474',
  );
  assert.strictEqual(String(new SE2Pose(1, 2, Math.PI / 3)), 'position -- X: 1.000 Y: 2.000 Yaw: 60.0 deg');
  assert.strictEqual(
    String(new SE2Velocity(1, 2, 3)),
    'Linear velocity -- X: 1.000 Y: 2.000 Angular velocity -- 3.000 ',
  );
  assert.strictEqual(
    String(new SE3Velocity(1, 2, 3, 4, 5, 6)),
    'Linear velocity -- X: 1.000 Y: 2.000 Z: 3.000 Angular velocity -- X: 4.000 Y: 5.000 Z: 6.000',
  );
});

// ---------------------------------------------------------------------------------------------------------------
// Directory registration keep-alive.
// ---------------------------------------------------------------------------------------------------------------

/** A directory registration client that records its calls: [name of the call, its RPC options]. */
function directoryClientMock(onRegister = () => {}) {
  const calls = [];
  return {
    calls,
    async register(...args) {
      calls.push(['register', args[7]]);
      return onRegister(calls.length, args);
    },
    async update(...args) {
      calls.push(['update', args[7]]);
    },
    async unregister(name, args) {
      calls.push(['unregister', args]);
    },
  };
}

const SERVICE = ['my-service', 'bosdyn.api.MyService', 'my-service.spot.robot', '192.168.50.5', 50051];

test('DirectoryRegistrationKeepAlive re-registers after the interval (was at once), with a timeout in ms (was 2 ms)', async () => {
  const client = directoryClientMock();
  const keepAlive = new DirectoryRegistrationKeepAlive(client, {
    logger: quietLogger,
    rpcTimeoutSeconds: 2,
    rpcIntervalSeconds: 0.06,
  });
  assert.strictEqual(await keepAlive.start(...SERVICE), keepAlive);
  assert.ok(keepAlive.isAlive());
  // The registration of start(): unregister, then register.
  assert.deepStrictEqual(
    client.calls.map(([name]) => name),
    ['unregister', 'register'],
  );
  await sleep(20);
  assert.strictEqual(client.calls.length, 2);
  await waitFor(() => client.calls.length >= 4);
  assert.deepStrictEqual(client.calls[2], ['register', { timeout: 2_000 }]);

  await keepAlive.unregister();
  assert.strictEqual(keepAlive.isAlive(), false);
  assert.deepStrictEqual(client.calls.at(-1), ['unregister', { timeout: 2_000 }]);
  const count = client.calls.length;
  await sleep(150);
  assert.strictEqual(client.calls.length, count);
  // Like Python, it can not be restarted after a shutdown.
  await assert.rejects(keepAlive.start(...SERVICE), /only be started once/);
});

test('DirectoryRegistrationKeepAlive: only RPC errors go to the callback, and its ABORT ends the loop (isAlive() stayed true)', async () => {
  const client = directoryClientMock(count => {
    // Not an RPC error: logged, without the callback (like Python).
    if (count === 5) throw new DirectoryRegistrationResponseError(null, 'unknown status');
    if (count === 40) throw new RpcError(new Error('connection reset'));
  });
  const keepAlive = new DirectoryRegistrationKeepAlive(client, { logger: quietLogger, rpcIntervalSeconds: 0.001 });
  const errors = [];
  keepAlive.reregistrationErrorCallback = async error => {
    errors.push(error);
    return ErrorCallbackResult.ABORT;
  };
  await keepAlive.start(...SERVICE);
  await waitFor(() => !keepAlive.isAlive());
  assert.strictEqual(client.calls.length, 40);
  assert.strictEqual(errors.length, 1);
  assert.ok(errors[0] instanceof RpcError);
  // The waits leave nothing behind (each one added an abort listener to the signal of the loop).
  assert.strictEqual(keepAlive._endReregisterSignal._waiters.size, 0);
});

test('DirectoryRegistrationKeepAlive.start() only ignores a missing service when it resets it, like Python', async () => {
  const unavailable = directoryClientMock();
  unavailable.unregister = async () => {
    throw new RpcError(new Error('connection refused'));
  };
  const keepAlive = new DirectoryRegistrationKeepAlive(unavailable, { logger: quietLogger });
  // The error was ignored, and the service registered with its old entry still there.
  await assert.rejects(keepAlive.start(...SERVICE), RpcError);
  assert.deepStrictEqual(unavailable.calls, []);
  assert.strictEqual(keepAlive.isAlive(), false);

  const missing = directoryClientMock();
  missing.unregister = async () => {
    throw new ServiceDoesNotExistError(null, 'The specified service does not exist on the robot.');
  };
  const other = new DirectoryRegistrationKeepAlive(missing, { logger: quietLogger });
  await other.start(...SERVICE);
  assert.deepStrictEqual(missing.calls, [['register', undefined]]);
  await other.shutdown();
});

test('directory and payload keep-alives do not keep the process alive, like Python daemon threads', () => {
  for (const script of [
    `
    const { DirectoryRegistrationKeepAlive } = require(${JSON.stringify(require.resolve('../src/bosdyn-client/directory_registration'))});
    const client = { async register() {}, async unregister() {} };
    const logger = { debug() {}, info() {}, warn() {}, error() {} };
    new DirectoryRegistrationKeepAlive(client, { logger }).start('a', 'b', 'c', 'd', 1);
    `,
    `
    const { PayloadRegistrationKeepAlive } = require(${JSON.stringify(require.resolve('../src/bosdyn-client/payload_registration'))});
    const logger = { debug() {}, info() {}, warn() {}, error() {} };
    new PayloadRegistrationKeepAlive({ async registerPayload() {} }, null, 'secret', 30_000, logger).start();
    `,
  ]) {
    const child = spawnSync(process.execPath, ['-e', script], { timeout: 10_000 });
    assert.strictEqual(child.error, undefined, 'the process did not exit on its own');
    assert.strictEqual(child.status, 0, String(child.stderr));
  }
});

// ---------------------------------------------------------------------------------------------------------------
// Robot certificate and TLS.
// ---------------------------------------------------------------------------------------------------------------

test('requiring the SDK leaves process.env alone (it set NODE_ENV and loaded a .env file)', () => {
  const script = `
    delete process.env.NODE_ENV;
    require(${JSON.stringify(require.resolve('../src/index.js'))});
    console.log(JSON.stringify(process.env.NODE_ENV ?? null));
  `;
  const child = spawnSync(process.execPath, ['-e', script], { encoding: 'utf8', timeout: 30_000 });
  assert.strictEqual(child.status, 0, child.stderr);
  assert.strictEqual(child.stdout.trim().split('\n').at(-1), 'null');
});

test('the robot certificate is trusted whatever NODE_ENV, another one only when asked (BOSDYN_CA_CERT)', () => {
  const robotPem = fs.readFileSync(path.join(__dirname, '..', 'src', 'bosdyn-client', 'resources', 'robot.pem'));
  const testCa = path.join(os.tmpdir(), `bosdyn-test-ca-${process.pid}.crt`);
  fs.writeFileSync(testCa, '-----BEGIN CERTIFICATE-----\ntest\n-----END CERTIFICATE-----\n');
  const saved = { NODE_ENV: process.env.NODE_ENV, BOSDYN_CA_CERT: process.env.BOSDYN_CA_CERT };
  const restore = name => {
    if (saved[name] === undefined) delete process.env[name];
    else process.env[name] = saved[name];
  };
  try {
    // Development mode trusted a test CA instead of the robot certificate, and sent a test client certificate.
    process.env.NODE_ENV = 'development';
    delete process.env.BOSDYN_CA_CERT;
    const sdk = new Sdk();
    sdk.logger = quietLogger;
    sdk.loadRobotCert();
    assert.ok(sdk.cert.equals(robotPem));
    assert.ok(createSecureChannelCreds(sdk.cert, () => 'token'));

    process.env.BOSDYN_CA_CERT = testCa;
    sdk.loadRobotCert();
    assert.ok(sdk.cert.equals(fs.readFileSync(testCa)));
    // An explicit path comes first.
    sdk.loadRobotCert(path.join(__dirname, '..', 'src', 'bosdyn-client', 'resources', 'robot.pem'));
    assert.ok(sdk.cert.equals(robotPem));
  } finally {
    restore('NODE_ENV');
    restore('BOSDYN_CA_CERT');
    fs.rmSync(testCa, { force: true });
  }
});

// ---------------------------------------------------------------------------------------------------------------
// Log status, Spot CAM power, audio visual.
// ---------------------------------------------------------------------------------------------------------------

test('getLogStatus returns the response on STATUS_OK (a missing comma made it throw)', async () => {
  const client = new LogStatusClient();
  const response = new logStatusPb.GetLogStatusResponse()
    .setHeader(okHeader())
    .setStatus(logStatusPb.GetLogStatusResponse.Status.STATUS_OK);
  client._stub = { getLogStatus: unaryMethod('/bosdyn.api.log_status.LogStatusService/GetLogStatus', () => response) };
  assert.strictEqual(await client.getLogStatus('log-id'), response);
});

test('Spot CAM setPowerStatus(true) only turns the PTZ on (it turned aux1, aux2 and the mic off)', () => {
  const client = new SpotCamPowerClient();
  const status = client._buildSetPowerStatusRequest(true, null, false, undefined).getStatus();
  assert.strictEqual(status.getPtz().getValue(), true);
  assert.strictEqual(status.hasAux1(), false);
  assert.strictEqual(status.getAux2().getValue(), false);
  assert.strictEqual(status.hasExternalMic(), false);
  assert.strictEqual(client._buildCyclePowerRequest(null, true).getStatus().hasPtz(), false);
});

test('audio visual colors are clamped in place (checkColor looped until out of memory)', async () => {
  const { LedSequence } = avPb.LedSequenceGroup;
  const bright = () => new avPb.Color().setRgb(new avPb.Color.RGB().setR(255).setG(255).setB(255));
  const group = new avPb.LedSequenceGroup()
    .setFrontCenter(
      new LedSequence().setAnimationSequence(
        new LedSequence.AnimationSequence().setFramesList([
          new LedSequence.AnimationSequence.Frame().setColor(bright()),
          new LedSequence.AnimationSequence.Frame().setColor(bright()),
        ]),
      ),
    )
    .setFrontLeft(new LedSequence().setPulseSequence(new LedSequence.PulseSequence().setColor(bright())))
    .setFrontRight(
      new LedSequence().setSolidColorSequence(
        new LedSequence.SolidColorSequence().setColor(new avPb.Color().setPreset(avPb.Color.Preset.PRESET_DANGER)),
      ),
    );
  await silenced(['audio_visual'], () => checkColor(group));
  const frames = group.getFrontCenter().getAnimationSequence().getFramesList();
  assert.strictEqual(frames.length, 2);
  // 255 * 255 / norm(255, 255, 255), truncated: the channels are int32 (a float failed the serialization).
  assert.deepStrictEqual(frames[1].getColor().getRgb().toObject(), { r: 147, g: 147, b: 147 });
  assert.deepStrictEqual(group.getFrontLeft().getPulseSequence().getColor().getRgb().toObject(), {
    r: 147,
    g: 147,
    b: 147,
  });
  assert.strictEqual(
    group.getFrontRight().getSolidColorSequence().getColor().getPreset(),
    avPb.Color.Preset.PRESET_DANGER,
  );
  new avPb.AudioVisualBehavior().setLedSequenceGroup(group).serializeBinary();
});

test('setSystemParams sends false and 0, and AudioVisualHelper runs the behavior (it quit at once)', async () => {
  const client = new AudioVisualClient();
  let sent = null;
  client._stub = {
    setSystemParams: unaryMethod('/bosdyn.api.AudioVisualService/SetSystemParams', request => {
      sent = request;
      return new avPb.SetSystemParamsResponse().setHeader(okHeader());
    }),
  };
  await client.setSystemParams({
    enabled: false,
    maxBrightness: 0,
    normalColorAssociation: avPb.PresetColorAssociation.PredefinedColor.PREDEFINED_RED,
  });
  assert.strictEqual(sent.getEnabled().getValue(), false);
  assert.strictEqual(sent.getMaxBrightness().getValue(), 0);
  assert.strictEqual(
    sent.getNormalColorAssociation().getColorName(),
    avPb.PresetColorAssociation.PredefinedColor.PREDEFINED_RED,
  );

  const calls = [];
  const avClient = {
    async runBehavior(name) {
      calls.push(`run ${name}`);
      return new avPb.RunBehaviorResponse().setRunResult(avPb.RunBehaviorResponse.RunResult.RESULT_BEHAVIOR_RUN);
    },
    async stopBehavior(name) {
      calls.push(`stop ${name}`);
    },
  };
  const robot = {
    ensureClient: async () => avClient,
    getCachedHardwareHardwareConfiguration: async () => ({ getHasAudioVisualSystem: () => true }),
  };
  const helper = new AudioVisualHelper(robot, 'blink', 0.01, quietLogger);
  assert.strictEqual(await helper.start(), true);
  await waitFor(() => calls.length >= 3);
  await helper.exit();
  assert.strictEqual(calls.at(-1), 'stop blink');
});

// ---------------------------------------------------------------------------------------------------------------
// Image service and data acquisition plugin servers.
// ---------------------------------------------------------------------------------------------------------------

/** A grpc-js server with the service, on an ephemeral port. */
async function startGrpcServer(service, implementation) {
  const server = new grpc.Server();
  server.addService(service, implementation);
  const port = await new Promise((resolve, reject) => {
    server.bindAsync('127.0.0.1:0', grpc.ServerCredentials.createInsecure(), (err, boundPort) =>
      err ? reject(err) : resolve(boundPort),
    );
  });
  const channels = [];
  return {
    port,
    /** Points an SDK client to the server. */
    connect(client) {
      const channel = new grpc.Channel(`127.0.0.1:${port}`, grpc.credentials.createInsecure(), {});
      channels.push(channel);
      client.channel = channel;
      return client;
    },
    /** Calls an RPC with the generated stub, to get the response whatever its status. */
    call(StubClass, method, request) {
      const stub = new StubClass(`127.0.0.1:${port}`, grpc.credentials.createInsecure());
      return new Promise((resolve, reject) => {
        stub[method](request, (err, response) => {
          stub.close();
          if (err) reject(err);
          else resolve(response);
        });
      });
    },
    close() {
      channels.forEach(channel => channel.close());
      return new Promise(resolve => {
        server.tryShutdown(() => resolve());
      });
    },
  };
}

function intParamSpec(name, min, max, defaultValue) {
  const spec = new serviceCustomizationPb.DictParam.Spec();
  spec
    .getSpecsMap()
    .set(
      name,
      new serviceCustomizationPb.DictParam.ChildSpec().setSpec(
        new serviceCustomizationPb.CustomParam.Spec().setIntSpec(
          new serviceCustomizationPb.Int64Param.Spec()
            .setMinValue(new Int64Value().setValue(min))
            .setMaxValue(new Int64Value().setValue(max))
            .setDefaultValue(new Int64Value().setValue(defaultValue)),
        ),
      ),
    );
  return spec;
}

function intParams(name, value) {
  const params = new serviceCustomizationPb.DictParam();
  params
    .getValuesMap()
    .set(
      name,
      new serviceCustomizationPb.CustomParam().setIntValue(new serviceCustomizationPb.Int64Param().setValue(value)),
    );
  return params;
}

class FakeCamera extends CameraInterface {
  constructor() {
    super();
    this.captures = [];
    this.broken = false;
  }

  async blockingCapture({ customParams = null } = {}) {
    this.captures.push(customParams);
    if (this.broken) throw new Error('camera unplugged');
    return [Buffer.from('jpeg-bytes'), nowSec()];
  }

  imageDecode(imageData, imageProto) {
    imageProto.setData(new Uint8Array(imageData)).setFormat(imagePb.Image.Format.FORMAT_JPEG);
  }
}

test('CameraBaseImageServicer serves images over gRPC (the module did not even load)', async () => {
  const faults = [];
  const robot = {
    async ensureClient() {
      return {
        async clearServiceFault(faultId, clearAll) {
          faults.push(`clear ${faultId.getFaultName() || faultId.getServiceName()}`);
          if (clearAll) throw new ServiceFaultDoesNotExistError(null, 'No fault to clear.');
        },
        async triggerServiceFault(fault) {
          faults.push(`trigger ${fault.getFaultId().getFaultName()}`);
        },
      };
    },
    // Robot time is 100 s ahead.
    get timeSync() {
      return Promise.resolve({
        waitForSync: async () => {},
        robotTimestampFromLocalSecs: async seconds => secondsToTimestamp(seconds + 100),
      });
    },
  };
  const camera = new FakeCamera();
  const { PixelFormat, Format } = imagePb.Image;
  const source = new VisualImageSource(
    'cam',
    camera,
    480,
    640,
    1.5,
    0.01,
    [PixelFormat.PIXEL_FORMAT_RGB_U8],
    quietLogger,
    intParamSpec('exposure', 0, 10, 5),
  );
  // The background capture loop logs its start, like Python's print().
  const servicer = await silenced(['image_service_helpers'], () =>
    CameraBaseImageServicer.create(robot, 'camera-service', [source], quietLogger),
  );
  const server = await startGrpcServer(imageServiceGrpcPb.ImageServiceService, servicer);
  const { ImageServiceClient } = imageServiceGrpcPb;
  const getImage = imageRequests =>
    server
      .call(ImageServiceClient, 'getImage', new imagePb.GetImageRequest().setImageRequestsList(imageRequests))
      .then(response => response.getImageResponsesList());
  const request = (name, changes = r => r) =>
    changes(new imagePb.ImageRequest().setImageSourceName(name).setImageFormat(Format.FORMAT_JPEG));
  const { Status } = imagePb.ImageResponse;
  try {
    const client = server.connect(new ImageClient());
    const [imageSource] = await client.listImageSources();
    assert.deepStrictEqual(
      [imageSource.getName(), imageSource.getRows(), imageSource.getCols(), imageSource.getPixelFormatsList()],
      ['cam', 480, 640, [PixelFormat.PIXEL_FORMAT_RGB_U8]],
    );
    // The paramSpec was the image type (5th argument of makeImageSource).
    assert.strictEqual(imageSource.getImageType(), imagePb.ImageSource.ImageType.IMAGE_TYPE_VISUAL);
    assert.ok(imageSource.getCustomParams().getSpecsMap().has('exposure'));

    // Background captures every 50 ms (it was 50 s).
    await waitFor(() => camera.captures.length >= 3);
    const [image] = await client.getImage([request('cam')]);
    assert.strictEqual(image.getStatus(), Status.STATUS_OK);
    assert.strictEqual(Buffer.from(image.getShot().getImage().getData_asU8()).toString(), 'jpeg-bytes');
    assert.deepStrictEqual([image.getShot().getImage().getRows(), image.getShot().getImage().getCols()], [480, 640]);
    assert.strictEqual(image.getShot().getCaptureParams().getGain(), 1.5);
    assert.ok(Math.abs(image.getShot().getAcquisitionTime().getSeconds() - (nowSec() + 100)) < 5);

    const statuses = (
      await getImage([
        request('unknown'),
        request('cam', r => r.setResizeRatio(2)),
        request('cam', r => r.setCustomParams(intParams('exposure', 50))),
        request('cam', r => r.setPixelFormat(PixelFormat.PIXEL_FORMAT_GREYSCALE_U8)),
        // A supported pixel format was refused.
        request('cam', r => r.setPixelFormat(PixelFormat.PIXEL_FORMAT_RGB_U8)),
      ])
    ).map(response => response.getStatus());
    assert.deepStrictEqual(statuses, [
      Status.STATUS_UNKNOWN_CAMERA,
      Status.STATUS_UNSUPPORTED_RESIZE_RATIO_REQUESTED,
      Status.STATUS_CUSTOM_PARAMS_ERROR,
      Status.STATUS_UNSUPPORTED_PIXEL_FORMAT_REQUESTED,
      Status.STATUS_OK,
    ]);

    // Valid custom parameters: captured with them.
    const [withParams] = await getImage([request('cam', r => r.setCustomParams(intParams('exposure', 7)))]);
    assert.strictEqual(withParams.getStatus(), Status.STATUS_OK);
    assert.ok(camera.captures.some(params => params?.getValuesMap().get('exposure')?.getIntValue().getValue() === 7));

    // A failed capture: an image data error, and a service fault.
    camera.broken = true;
    const [failed] = await silenced(['image_service_helpers'], () =>
      getImage([request('cam', r => r.setCustomParams(intParams('exposure', 8)))]),
    );
    assert.strictEqual(failed.getStatus(), Status.STATUS_IMAGE_DATA_ERROR);
    assert.ok(faults.includes('trigger Image Capture Failure for cam'), faults.join(', '));
  } finally {
    await servicer.stop();
    await server.close();
  }
  const captures = camera.captures.length;
  await sleep(120);
  assert.strictEqual(camera.captures.length, captures);
});

test('storeFile streams the bytes of the file (it read the file, then used its content as a path)', async () => {
  const file = path.join(os.tmpdir(), `bosdyn-store-file-${process.pid}.bin`);
  // Not UTF-8: the chunks were strings, read as base64.
  const content = Buffer.from([0, 1, 2, 255, 254, 10, 13, 0x80, 0xc3]);
  fs.writeFileSync(file, content);
  const received = [];
  const server = await startGrpcServer(storeServiceGrpcPb.DataAcquisitionStoreServiceService, {
    storeDataStream(call, callback) {
      call.on('data', request => received.push(request));
      call.on('end', () => callback(null, new dataAcquisitionStorePb.StoreStreamResponse().setHeader(okHeader())));
    },
  });
  try {
    const client = server.connect(new DataAcquisitionStoreClient());
    await client.storeFile(file, new dataAcquisitionPb.DataIdentifier().setChannel('bin'), 'bin');
  } finally {
    await server.close();
    fs.rmSync(file, { force: true });
  }
  const data = Buffer.concat(received.map(request => Buffer.from(request.getChunk().getData_asU8())));
  assert.deepStrictEqual(data, content);
  assert.strictEqual(received[0].getChunk().getTotalSize(), content.length);
  assert.strictEqual(received[0].getFileExtension(), 'bin');
});

test('DataAcquisitionPluginService acquires and stores data over gRPC (the module did not even load)', async () => {
  const stored = [];
  const logged = [];
  const robot = {
    async ensureClient(serviceName) {
      if (serviceName === 'data-buffer') {
        return { addProtobuf: async message => logged.push(message.constructor.name || 'message') };
      }
      return {
        async storeData(data, dataId) {
          await sleep(10);
          if (dataId.getChannel() === 'broken') throw new Error('store full');
          stored.push([dataId.getChannel(), Buffer.from(data).toString()]);
        },
      };
    },
  };
  const capability = new dataAcquisitionPb.DataAcquisitionCapability()
    .setName('temperature')
    .setCustomParams(intParamSpec('rate', 1, 10, 1));
  const dataCollectFn = async (request, storeHelper) => {
    const dataId = new dataAcquisitionPb.DataIdentifier()
      .setActionId(request.getActionId())
      .setChannel(request.getMetadata()?.getData()?.getFieldsMap().get('channel')?.getStringValue() ?? 'temperature');
    if (dataId.getChannel() === 'slow') {
      for (;;) {
        storeHelper.cancelCheck();

        await sleep(5);
      }
    }
    if (dataId.getChannel() === 'crash') throw new Error('sensor exploded');
    storeHelper.storeData(Buffer.from('21.5'), dataId);
  };
  const service = new DataAcquisitionPluginService(robot, [capability], dataCollectFn, null, null, quietLogger);
  const server = await startGrpcServer(pluginServiceGrpcPb.DataAcquisitionPluginServiceService, service);
  const { DataAcquisitionPluginServiceClient } = pluginServiceGrpcPb;
  const client = server.connect(new DataAcquisitionPluginClient());
  const { Status } = dataAcquisitionPb.GetStatusResponse;
  const acquire = (channel, params = null) => {
    const capture = new dataAcquisitionPb.DataCapture().setName('temperature');
    if (params) capture.setCustomParams(params);
    return client.acquirePluginData(
      new dataAcquisitionPb.AcquisitionRequestList().setDataCapturesList([capture]),
      new dataAcquisitionPb.CaptureActionId().setActionName('action'),
      null,
      { channel },
    );
  };
  const status = requestId =>
    server.call(
      DataAcquisitionPluginServiceClient,
      'getStatus',
      new dataAcquisitionPb.GetStatusRequest().setRequestId(requestId),
    );
  const finalStatus = async requestId => {
    let response;
    for (let i = 0; i < 200; i++) {
      response = await status(requestId);
      if (
        ![Status.STATUS_ACQUIRING, Status.STATUS_SAVING, Status.STATUS_CANCEL_IN_PROGRESS].includes(
          response.getStatus(),
        )
      ) {
        return response;
      }

      await sleep(10);
    }
    return response;
  };
  try {
    const info = await server.call(
      DataAcquisitionPluginServiceClient,
      'getServiceInfo',
      new dataAcquisitionPb.GetServiceInfoRequest(),
    );
    assert.deepStrictEqual(
      info
        .getCapabilities()
        .getDataSourcesList()
        .map(source => source.getName()),
      ['temperature'],
    );

    const acquired = await acquire('temperature');
    assert.strictEqual(acquired.getStatus(), dataAcquisitionPb.AcquirePluginDataResponse.Status.STATUS_OK);
    const done = await finalStatus(acquired.getRequestId());
    assert.strictEqual(done.getStatus(), Status.STATUS_COMPLETE);
    assert.deepStrictEqual(
      done.getDataSavedList().map(dataId => dataId.getChannel()),
      ['temperature'],
    );
    assert.deepStrictEqual(stored, [['temperature', '21.5']]);

    // Invalid custom parameters and unknown request ids.
    await assert.rejects(acquire('temperature', intParams('rate', 50)));
    assert.strictEqual((await status(12345)).getStatus(), Status.STATUS_REQUEST_ID_DOES_NOT_EXIST);

    // A failed store, a failed collection, and a cancelled one.
    await silenced(['data_acquisition_plugin_service'], async () => {
      const brokenStore = await finalStatus((await acquire('broken')).getRequestId());
      assert.strictEqual(brokenStore.getStatus(), Status.STATUS_DATA_ERROR);
      assert.match(brokenStore.getDataErrorsList()[0].getErrorMessage(), /store full/);
      const crashed = await finalStatus((await acquire('crash')).getRequestId());
      assert.strictEqual(crashed.getStatus(), Status.STATUS_INTERNAL_ERROR);
      assert.match(crashed.getHeader().getError().getMessage(), /sensor exploded/);
    });
    const slow = await acquire('slow');
    const cancel = await server.call(
      DataAcquisitionPluginServiceClient,
      'cancelAcquisition',
      new dataAcquisitionPb.CancelAcquisitionRequest().setRequestId(slow.getRequestId()),
    );
    assert.strictEqual(cancel.getStatus(), dataAcquisitionPb.CancelAcquisitionResponse.Status.STATUS_OK);
    assert.strictEqual((await finalStatus(slow.getRequestId())).getStatus(), Status.STATUS_ACQUISITION_CANCELLED);
    // The requests and responses are logged to the data buffer.
    assert.ok(logged.length >= 4);
  } finally {
    await server.close();
  }
  const error = makeError(new dataAcquisitionPb.DataIdentifier(), 'bad', new headerPb.CommonError().setMessage('why'));
  assert.strictEqual(error.getErrorData().getTypeName(), 'bosdyn.api.CommonError');
});

// ---------------------------------------------------------------------------------------------------------------
// Images: depth point clouds, PGM/PPM and JPEG files, GetImage errors (expected values from the Python helpers).
// ---------------------------------------------------------------------------------------------------------------

/** An ImageResponse read from the wire format, like from the robot: its data is a view at an offset. */
function imageResponse(
  name,
  pixelFormat,
  rows,
  cols,
  data,
  { format = imagePb.Image.Format.FORMAT_RAW, depth, frame = 'camera' } = {},
) {
  const source = new imagePb.ImageSource().setName(name).setRows(rows).setCols(cols);
  if (depth) {
    source
      .setImageType(imagePb.ImageSource.ImageType.IMAGE_TYPE_DEPTH)
      .setDepthScale(depth.scale)
      .setPinhole(
        new imagePb.ImageSource.PinholeModel().setIntrinsics(
          new imagePb.ImageSource.PinholeModel.CameraIntrinsics()
            .setFocalLength(new geometryPb.Vec2().setX(depth.fx).setY(depth.fy))
            .setPrincipalPoint(new geometryPb.Vec2().setX(depth.cx).setY(depth.cy)),
        ),
      );
  }
  const image = new imagePb.Image()
    .setPixelFormat(pixelFormat)
    .setFormat(format)
    .setRows(rows)
    .setCols(cols)
    .setData(Uint8Array.from(data));
  const shot = new imagePb.ImageCapture().setFrameNameImageSensor(frame).setImage(image);
  const response = new imagePb.ImageResponse().setSource(source).setShot(shot);
  return imagePb.ImageResponse.deserializeBinary(response.serializeBinary());
}

/** Runs fn with console.log and console.error captured, and returns the lines. */
function capturedConsole(fn) {
  const { log, error } = console;
  const lines = [];
  console.log = (...args) => lines.push(args.join(' '));
  console.error = (...args) => lines.push(args.join(' '));
  try {
    fn();
  } finally {
    console.log = log;
    console.error = error;
  }
  return lines;
}

test('depthImageToPointcloud gives the point cloud of Python (it always threw), with the data at an odd offset', () => {
  const depth = { fx: 300.5, fy: 301.25, cx: 2.2, cy: 1.7, scale: 1000 };
  const values = [0, 2, 3, 1500, 65535, 4000, 3500, 3501, 1, 2, 250, 0, 999, 1000, 65534, 12, 13, 14, 15, 16];
  const data = Buffer.alloc(values.length * 2);
  values.forEach((value, i) => data.writeUInt16LE(value, 2 * i));
  const { PIXEL_FORMAT_DEPTH_U16 } = imagePb.Image.PixelFormat;
  // A Uint16Array can not start at an odd offset (RangeError).
  const response = ['depth', 'depth1']
    .map(frame => imageResponse('depth', PIXEL_FORMAT_DEPTH_U16, 4, 5, data, { depth, frame }))
    .find(candidate => candidate.getShot().getImage().getData_asU8().byteOffset % 2 === 1);
  assert.ok(response, 'no response with its data at an odd offset');

  // 14.5 rounds to 14 like numpy.rint (Math.round gives 15: one more point).
  assert.deepStrictEqual(depthImageToPointcloud(response, 0.0035, 0.0145).tolist(), [
    [-0.00008785357737104827, 0.00005178423236514523, 0.012],
    [-0.00005191347753743761, 0.00005609958506224066, 0.013],
    [-0.000009317803660565733, 0.0000604149377593361, 0.014],
  ]);
  assert.deepStrictEqual(depthImageToPointcloud(response, 0.0025, 3.5).shape, [13, 3]);
  assert.deepStrictEqual(depthImageToPointcloud(response).shape, [17, 3]);
  // No value between 20 and 200.
  assert.deepStrictEqual(depthImageToPointcloud(response, 0.02, 0.2).shape, [0, 3]);
  const visual = imageResponse('visual', PIXEL_FORMAT_DEPTH_U16, 4, 5, data);
  assert.throws(() => depthImageToPointcloud(visual), ValueError);

  // The deprecated ImageResponse argument of Python works, with a warning.
  const { emitWarning } = process;
  const warnings = [];
  process.emitWarning = (warning, type) => warnings.push(type);
  try {
    assertClose(pixelToCameraSpace(response, 302.7, 1.7, 2), [2, 0, 2]);
  } finally {
    process.emitWarning = emitWarning;
  }
  assert.deepStrictEqual(warnings, ['DeprecationWarning']);
  assert.throws(() => pixelToCameraSpace(visual.getSource(), 1, 1), ValueError);
});

test('writePgmOrPpm writes the files of Python (sharp could not read the raw data, 16-bit images were refused)', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'bosdyn-pgm-'));
  const { PixelFormat } = imagePb.Image;
  try {
    for (const [name, pixelFormat, rows, cols, data, expected] of [
      [
        'rgb',
        PixelFormat.PIXEL_FORMAT_RGB_U8,
        2,
        2,
        '956a26afbccdafe562f90a94',
        '503620322032203235350a956a26afbccdafe562f90a94',
      ],
      [
        'depth16',
        PixelFormat.PIXEL_FORMAT_DEPTH_U16,
        2,
        3,
        '5f5693c642276ad5ab2da739',
        '5035203320322036353533350a5f5693c642276ad5ab2da739',
      ],
      // Big-endian values, written in the byte order of the machine like numpy.
      [
        'grey16',
        PixelFormat.PIXEL_FORMAT_GREYSCALE_U16,
        2,
        3,
        '51450e37b2994cd7273448fa',
        '5035203320322036353533350a4551370e99b2d74c3427fa48',
      ],
    ]) {
      const lines = capturedConsole(() =>
        writePgmOrPpm(imageResponse(name, pixelFormat, rows, cols, Buffer.from(data, 'hex')), '', directory, true),
      );
      const file = path.join(
        directory,
        `image-${name}-${Object.keys(PixelFormat).find(key => PixelFormat[key] === pixelFormat)}.${name === 'rgb' ? 'ppm' : 'pgm'}`,
      );
      assert.strictEqual(fs.readFileSync(file).toString('hex'), expected, name);
      assert.match(lines.join('\n'), /Saved matrix/);
    }
    // A shape that does not fit the data is reported, like Python.
    const lines = capturedConsole(() =>
      writePgmOrPpm(imageResponse('bad', PixelFormat.PIXEL_FORMAT_GREYSCALE_U8, 2, 2, [1, 2, 3]), '', directory),
    );
    assert.match(lines.join('\n'), /Cannot convert raw image into expected shape/);
    assert.strictEqual(fs.existsSync(path.join(directory, 'image-bad.pgm')), false);
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

test('saveImagesAsFiles saves the list of ImageClient.getImage() (TypeError on the list, then on .source)', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'bosdyn-images-'));
  const { PixelFormat, Format } = imagePb.Image;
  try {
    const jpeg = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 0, 0x10, 0x80, 0xc3, 0xff, 0xd9]);
    const responses = [
      imageResponse('hand', PixelFormat.PIXEL_FORMAT_RGB_U8, 1, 1, jpeg, { format: Format.FORMAT_JPEG }),
      imageResponse('grey', PixelFormat.PIXEL_FORMAT_GREYSCALE_U8, 1, 2, [7, 8]),
      imageResponse('none', PixelFormat.PIXEL_FORMAT_GREYSCALE_U8, 1, 2, [7, 8], { format: Format.FORMAT_UNKNOWN }),
    ];
    const lines = capturedConsole(() => saveImagesAsFiles(responses, 'shot', directory));
    assert.deepStrictEqual(fs.readdirSync(directory).sort(), ['shot0', 'shot1']);
    assert.deepStrictEqual(fs.readFileSync(path.join(directory, 'shot0')), jpeg);
    assert.deepStrictEqual(
      fs.readFileSync(path.join(directory, 'shot1')),
      Buffer.from('P5 2 1 255\n\x07\x08', 'latin1'),
    );
    assert.match(lines.join('\n'), /Saved "hand"/);

    // A GetImageResponse is accepted too, and the file names come from the sources.
    capturedConsole(() =>
      saveImagesAsFiles(new imagePb.GetImageResponse().setImageResponsesList(responses.slice(0, 1)), '', directory),
    );
    assert.ok(fs.existsSync(path.join(directory, 'image-hand.jpg')));
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

test('ImageClient.getImage() raises the errors of the response header (handle_common_header_errors was missing)', async () => {
  const server = await startGrpcServer(imageServiceGrpcPb.ImageServiceService, {
    getImage(call, callback) {
      const header = new headerPb.ResponseHeader().setError(
        new headerPb.CommonError().setCode(headerPb.CommonError.Code.CODE_INTERNAL_SERVER_ERROR).setMessage('boom'),
      );
      callback(null, new imagePb.GetImageResponse().setHeader(header));
    },
  });
  try {
    const client = server.connect(new ImageClient());
    await assert.rejects(client.getImageFromSources(['frontleft_fisheye_image']), InternalServerError);
  } finally {
    await server.close();
  }
});

// ---------------------------------------------------------------------------------------------------------------
// Data acquisition: live data, robot time, stored captures, helpers, REST and BDDF downloads.
// ---------------------------------------------------------------------------------------------------------------

/**
 * Runs the async fn with the console and the progress dots captured, and returns the lines and its result.
 * The other writes to process.stdout go through: the test runner reports the results of the tests with them.
 */
async function capturedOutput(fn) {
  const saved = { ...console };
  const { write } = process.stdout;
  const lines = [];
  for (const method of ['log', 'error', 'info', 'debug', 'warn']) {
    console[method] = (...args) => lines.push(args.map(String).join(' '));
  }
  process.stdout.write = (chunk, ...rest) =>
    typeof chunk === 'string' && /^\.+$/.test(chunk)
      ? lines.push(chunk) > 0
      : write.call(process.stdout, chunk, ...rest);
  try {
    return { result: await fn(), lines };
  } finally {
    Object.assign(console, saved);
    process.stdout.write = write;
  }
}

/** An HTTPS server with a throwaway self-signed certificate (untrusted, like the one of a robot), or null. */
async function startHttpsServer(handler) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'bosdyn-https-'));
  try {
    const [key, cert] = [path.join(directory, 'key.pem'), path.join(directory, 'cert.pem')];
    const openssl = spawnSync(
      'openssl',
      ['req', '-x509', '-newkey', 'ec', '-pkeyopt', 'ec_paramgen_curve:prime256v1', '-nodes', '-days', '1'].concat([
        '-keyout',
        key,
        '-out',
        cert,
        '-subj',
        '/CN=robot.test',
      ]),
      { encoding: 'utf8', timeout: 30_000 },
    );
    if (openssl.error || openssl.status !== 0) return null;
    const server = https.createServer({ key: fs.readFileSync(key), cert: fs.readFileSync(cert) }, handler);
    await new Promise(resolve => {
      server.listen(0, '127.0.0.1', resolve);
    });
    return {
      hostname: `127.0.0.1:${server.address().port}`,
      close: () =>
        new Promise(resolve => {
          server.close(resolve);
        }),
    };
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
}

function timestamp(seconds, nanos = 0) {
  return new Timestamp().setSeconds(seconds).setNanos(nanos);
}

test('DataAcquisitionClient: getLiveData() works (TypeError), and acquireData() uses robot time (it used local time)', async () => {
  const { LiveDataResponse, AcquireDataResponse } = dataAcquisitionPb;
  const LiveStatus = LiveDataResponse.CapabilityLiveData.Status;
  const liveData = status =>
    new LiveDataResponse()
      .setHeader(okHeader())
      .setLiveDataList([new LiveDataResponse.CapabilityLiveData().setName('battery').setStatus(status)]);
  assert.strictEqual(_getLiveDataError(liveData(LiveStatus.STATUS_OK)), null);
  assert.ok(_getLiveDataError(liveData(LiveStatus.STATUS_UNKNOWN_CAPTURE_TYPE)) instanceof UnknownCaptureTypeError);
  assert.ok(_getLiveDataError(liveData(LiveStatus.STATUS_CUSTOM_PARAMS_ERROR)) instanceof CustomParamError);
  const internal = _getLiveDataError(liveData(LiveStatus.STATUS_INTERNAL_ERROR));
  assert.ok(internal instanceof InternalServerError);
  assert.ok(internal.response instanceof LiveDataResponse);

  let acquired = null;
  let liveStatus = LiveStatus.STATUS_OK;
  const server = await startGrpcServer(dataAcquisitionServiceGrpcPb.DataAcquisitionServiceService, {
    acquireData(call, callback) {
      acquired = call.request;
      callback(
        null,
        new AcquireDataResponse().setHeader(okHeader()).setStatus(AcquireDataResponse.Status.STATUS_OK).setRequestId(5),
      );
    },
    getLiveData(call, callback) {
      callback(null, liveData(liveStatus));
    },
  });
  try {
    const client = server.connect(new DataAcquisitionClient());
    client._timesyncEndpoint = { robotTimestampFromLocalSecs: () => timestamp(42, 7) };
    assert.strictEqual(await client.acquireData(new dataAcquisitionPb.AcquisitionRequestList(), 'action', 'group'), 5);
    const stamp = acquired.getActionId().getTimestamp();
    assert.deepStrictEqual([stamp.getSeconds(), stamp.getNanos()], [42, 7]);

    const request = new dataAcquisitionPb.LiveDataRequest();
    assert.strictEqual((await client.getLiveData(request)).getLiveDataList()[0].getName(), 'battery');
    liveStatus = LiveStatus.STATUS_UNKNOWN_CAPTURE_TYPE;
    await assert.rejects(client.getLiveData(request), UnknownCaptureTypeError);
  } finally {
    await server.close();
  }
});

test('queryStoredCaptures() assembles the streamed DataChunks (TypeError), and listStoredAlertdata() exists', async () => {
  const response = new dataAcquisitionStorePb.QueryStoredCapturesResponse()
    .setHeader(okHeader())
    .setMaxCaptureId(77)
    .setResultsList([
      new dataAcquisitionStorePb.QueryStoredCaptureResult()
        .setDataId(new dataAcquisitionPb.DataIdentifier().setChannel('blob'))
        .setData(new dataAcquisitionStorePb.StoredCapturedData().setData(Buffer.alloc(1000, 7))),
    ]);
  const serialized = response.serializeBinary();
  const server = await startGrpcServer(storeServiceGrpcPb.DataAcquisitionStoreServiceService, {
    queryStoredCaptures(call) {
      for (const [start, end] of [
        [0, 600],
        [600, serialized.length],
      ]) {
        call.write(
          new dataChunkPb.DataChunk().setTotalSize(serialized.length).setData(serialized.subarray(start, end)),
        );
      }
      call.end();
    },
    listStoredAlertData(call, callback) {
      callback(
        null,
        new dataAcquisitionStorePb.ListStoredAlertDataResponse()
          .setHeader(okHeader())
          .setDataIdsList([new dataAcquisitionPb.DataIdentifier().setChannel('alerts')]),
      );
    },
  });
  try {
    const client = server.connect(new DataAcquisitionStoreClient());
    const assembled = await client.queryStoredCaptures(new dataAcquisitionStorePb.QueryParameters());
    assert.ok(assembled instanceof dataAcquisitionStorePb.QueryStoredCapturesResponse);
    assert.strictEqual(assembled.getMaxCaptureId(), 77);
    const [result] = assembled.getResultsList();
    assert.strictEqual(result.getDataId().getChannel(), 'blob');
    assert.deepStrictEqual(Buffer.from(result.getData().getData_asU8()), Buffer.alloc(1000, 7));
    const alertIds = await client.listStoredAlertdata(new dataAcquisitionStorePb.DataQueryParams());
    assert.strictEqual(alertIds[0].getChannel(), 'alerts');
  } finally {
    await server.close();
  }
});

test('acquireAndProcessRequest() waits for the acquisition (acquire_data did not exist), and keeps the process alive', async () => {
  const script = `
    const { acquireAndProcessRequest } = require(${JSON.stringify(require.resolve('../src/bosdyn-client/data_acquisition_helpers'))});
    const pb = require(${JSON.stringify(require.resolve('../src/bosdyn/api/data_acquisition_pb'))});
    const { Status } = pb.GetStatusResponse;
    let calls = 0;
    const client = {
      async acquireData() { return 7; },
      async getStatus(id) {
        calls++;
        return new pb.GetStatusResponse().setStatus(calls < 3 ? Status.STATUS_ACQUIRING : Status.STATUS_COMPLETE);
      },
    };
    console.log = () => {};
    acquireAndProcessRequest(client, new pb.AcquisitionRequestList(), 'group', 'action')
      .then(result => process.stdout.write(\`result: \${result} after \${calls} statuses\`));
  `;
  // An unref'd timer between the statuses let the process exit before the end.
  const child = spawnSync(process.execPath, ['-e', script], { encoding: 'utf8', timeout: 10_000 });
  assert.strictEqual(child.stdout, 'result: true after 3 statuses', child.stderr);

  // Like Python, only the errors of the response are reported with false: the RPC errors reach the caller.
  const list = new dataAcquisitionPb.AcquisitionRequestList();
  const unreachable = {
    async acquireData() {
      throw new RpcError(new Error('connection refused'));
    },
  };
  await assert.rejects(acquireAndProcessRequest(unreachable, list, 'group', 'action'), RpcError);
  const refused = {
    async acquireData() {
      throw new ResponseError(null, 'unknown capture type');
    },
  };
  const { result, lines } = await capturedOutput(() => acquireAndProcessRequest(refused, list, 'group', 'action'));
  assert.strictEqual(result, false);
  assert.match(lines.join('\n'), /unknown capture type/);
});

test('makeTimeQueryParamsFromGroupName() queries the group (it sent a CaptureActionId), with ±3 s (±3000 s)', async () => {
  const capture = (seconds, nanos) => new dataAcquisitionPb.CaptureActionId().setTimestamp(timestamp(seconds, nanos));
  const queries = [];
  const store = captures => ({
    async listCaptureActions(query) {
      queries.push(query);
      return captures;
    },
  });
  const params = await capturedOutput(() =>
    makeTimeQueryParamsFromGroupName(
      'group',
      store([capture(0, 0), capture(1_700_000_000, 5e8), capture(1_700_000_100, 0)]),
    ),
  );
  assert.strictEqual(queries[0].getActionIds().getActionIdsList()[0].getGroupName(), 'group');
  const range = params.result.getTimeRange();
  assert.deepStrictEqual(
    [range.getFromTimestamp().getSeconds(), range.getFromTimestamp().getNanos(), range.getToTimestamp().getSeconds()],
    [1_699_999_997, 5e8, 1_700_000_103],
  );

  // A single capture: its timestamp was moved back, then forth (an empty range), and changed.
  const single = capture(1_700_000_000, 0);
  const one = (await capturedOutput(() => makeTimeQueryParamsFromGroupName('group', store([single])))).result;
  assert.deepStrictEqual(
    [one.getTimeRange().getFromTimestamp().getSeconds(), one.getTimeRange().getToTimestamp().getSeconds()],
    [1_699_999_997, 1_700_000_003],
  );
  assert.strictEqual(single.getTimestamp().getSeconds(), 1_700_000_000);
  // No timestamp: null (a ReferenceError).
  const none = await capturedOutput(() => makeTimeQueryParamsFromGroupName('group', store([capture(0, 0)])));
  assert.strictEqual(none.result, null);
});

test('downloadDataREST() and downloadData() download over HTTPS like Python (they never downloaded anything)', async t => {
  const requests = [];
  const server = await startHttpsServer((request, response) => {
    requests.push(request.url);
    if (request.headers.authorization !== 'Bearer token') {
      response.writeHead(401);
      response.end();
    } else if (request.url.includes('empty=1')) {
      response.writeHead(204);
      response.end();
    } else {
      response.writeHead(200, { 'Content-Disposition': 'attachment; filename="../capture:1.zip"' });
      response.end(Buffer.from([1, 2, 3, 250]));
    }
  });
  if (!server) {
    t.skip('openssl is needed to make a test certificate');
    return;
  }
  const folder = fs.mkdtempSync(path.join(os.tmpdir(), 'bosdyn-download-'));
  try {
    const query = new dataAcquisitionStorePb.DataQueryParams().setTimeRange(
      new dataAcquisitionStorePb.TimeRangeQuery()
        .setFromTimestamp(timestamp(1_700_000_000, 123_456_789))
        .setToTimestamp(timestamp(1_700_000_060, 5)),
    );
    const download = await capturedOutput(() =>
      downloadDataREST(query, server.hostname, 'token', path.join(folder, 'daq'), { channel: 'a b' }),
    );
    assert.strictEqual(download.result, true, download.lines.join('\n'));
    // The file stays in the folder, and the nanoseconds are exact (they were numbers above 2^53).
    assert.deepStrictEqual(
      fs.readFileSync(path.join(folder, 'daq', 'REST', 'capture1.zip')),
      Buffer.from([1, 2, 3, 250]),
    );
    assert.strictEqual(
      requests[0],
      '/v1/data-buffer/daq-data/?channel=a+b&from_nsec=1700000000123456789&to_nsec=1700000060000000005',
    );
    const refused = await capturedOutput(() => downloadDataREST(query, server.hostname, 'bad', folder));
    assert.strictEqual(refused.result, false);
    assert.match(refused.lines.join('\n'), /HTTP Error 401/);
    const empty = await capturedOutput(() => downloadDataREST(query, server.hostname, 'token', folder, { empty: 1 }));
    assert.strictEqual(empty.result, false);
    assert.match(empty.lines.join('\n'), /No content available/);

    // BDDF, in robot time: the token of the robot, and the parameters separated by & (from_sec=1to_sec=2).
    const robot = { userToken: 'token' };
    const outfile = path.join(folder, 'log.bddf');
    const written = await downloadData(
      robot,
      server.hostname,
      1_700_000_000e9,
      1_700_000_010e9,
      null,
      outfile,
      true,
      'c',
    );
    assert.strictEqual(written, outfile);
    assert.deepStrictEqual(fs.readFileSync(outfile), Buffer.from([1, 2, 3, 250]));
    assert.strictEqual(requests.at(-1), '/v1/data-buffer/bddf/?from_sec=1700000000&to_sec=1700000010&channel=c');
    await assert.rejects(
      downloadData({ userToken: 'bad' }, server.hostname, 1e18, 2e18, null, outfile, true),
      /HTTP Error 401/,
    );
  } finally {
    await server.close();
    fs.rmSync(folder, { recursive: true, force: true });
  }
});

test('logEvent() takes Dates in milliseconds (they were read as seconds)', async () => {
  const events = [];
  const robot = {
    clientName: 'test',
    async ensureClient() {
      return {
        async addEvents(list) {
          events.push(...list);
        },
      };
    },
    get timeSync() {
      return Promise.resolve({
        async waitForSync() {},
        async robotTimestampFromLocalSecs(secs) {
          return secondsToTimestamp(secs);
        },
      });
    },
  };
  const { LEVEL_LOW } = dataBufferPb.Event.Level;
  await logEvent(robot, 'type', LEVEL_LOW, 'description', new Date(1_700_000_000_500), new Date(1_700_000_010_000));
  const start = events[0].getStartTime();
  assert.deepStrictEqual(
    [start.getSeconds(), start.getNanos(), events[0].getEndTime().getSeconds()],
    [1_700_000_000, 5e8, 1_700_000_010],
  );
  await logEvent(robot, 'type', LEVEL_LOW, 'description', 1_700_000_000);
  assert.strictEqual(events[1].getStartTime().getSeconds(), 1_700_000_000);
});

// ---------------------------------------------------------------------------------------------------------------
// Missions.
// ---------------------------------------------------------------------------------------------------------------

/** A server streaming handler that sends the message as small DataChunks. */
function streamedAsChunks(message) {
  return call => {
    const serialized = message.serializeBinary();
    for (let start = 0; start < serialized.length; start += 5) {
      call.write(
        new dataChunkPb.DataChunk().setTotalSize(serialized.length).setData(serialized.subarray(start, start + 5)),
      );
    }
    call.end();
  };
}

test('MissionClient.getInfo() and getMission() assemble the chunks (TypeError), or fall back when UNIMPLEMENTED', async () => {
  const info = new missionPb.GetInfoResponse()
    .setHeader(okHeader())
    .setMissionInfo(new missionPb.MissionInfo().setId(42));
  const mission = new missionPb.GetMissionResponse().setHeader(okHeader()).setId(7);
  const chunked = await startGrpcServer(missionServiceGrpcPb.MissionServiceService, {
    getInfoAsChunks: streamedAsChunks(info),
    getMissionAsChunks: streamedAsChunks(mission),
  });
  // An older robot: the streamed RPCs are not implemented (the synchronous try/catch never fell back).
  const older = await startGrpcServer(missionServiceGrpcPb.MissionServiceService, {
    getInfo(call, callback) {
      callback(null, info);
    },
    getMission(call, callback) {
      callback(null, mission);
    },
  });
  try {
    for (const server of [chunked, older]) {
      const client = server.connect(new MissionClient());
      assert.strictEqual((await client.getInfo()).getId(), 42);
      assert.strictEqual((await client.getMission()).getId(), 7);
    }
  } finally {
    await chunked.close();
    await older.close();
  }
});

test('MissionClient: getState() bounds (a oneof cleared, 0 ignored), loadMissionAsChunks() processed, playMission() rejects', async () => {
  const requests = {};
  const server = await startGrpcServer(missionServiceGrpcPb.MissionServiceService, {
    getState(call, callback) {
      requests.state = call.request;
      callback(null, new missionPb.GetStateResponse().setHeader(okHeader()).setState(new missionPb.State()));
    },
    loadMissionAsChunks(call, callback) {
      const chunks = [];
      call.on('data', chunk => chunks.push(chunk));
      call.on('end', () => {
        requests.load = parseFromChunks(chunks, missionPb.LoadMissionRequest);
        callback(
          null,
          new missionPb.LoadMissionResponse()
            .setHeader(okHeader())
            .setStatus(missionPb.LoadMissionResponse.Status.STATUS_OK),
        );
      });
    },
  });
  try {
    const client = server.connect(new MissionClient());
    await client.getState(null, 5);
    assert.strictEqual(requests.state.getHistoryLowerTickBound(), 5);
    await client.getState(0, null, 3);
    assert.deepStrictEqual(
      [requests.state.getHistoryUpperTickBound().getValue(), requests.state.getHistoryPastTicks()],
      [0, 3],
    );
    await assert.rejects(client.getState(null, 0, 0), ValueError);

    // The request processors (header, leases) work on the request itself: the processed copy was thrown away.
    client.requestProcessors.push({
      mutate(request) {
        if (request instanceof missionPb.LoadMissionRequest) {
          request.setHeader(new headerPb.RequestHeader().setClientName('tester'));
        }
      },
    });
    const root = protoFromObject({ nameOrObject: 'nap', innerProto: new nodesPb.Sleep().setSeconds(1), children: [] });
    await client.loadMissionAsChunks(root, [], 8);
    assert.strictEqual(requests.load.getHeader().getClientName(), 'tester');
    assert.strictEqual(requests.load.getRoot().getName(), 'nap');

    // Without time sync: a rejection (it threw).
    const played = client.playMission(10);
    assert.ok(played instanceof Promise);
    await assert.rejects(played, TimeSyncRequired);
  } finally {
    await server.close();
  }
});

test('mission util: nodes packed with their type (always a Sequence), values of any type (strings were NaN floats)', () => {
  const nap = seconds => ({ nameOrObject: 'nap', innerProto: new nodesPb.Sleep().setSeconds(seconds), children: [] });
  const root = protoFromObject({ nameOrObject: 'seq', innerProto: new nodesPb.Sequence(), children: [nap(2)] });
  assert.strictEqual(root.getImpl().getTypeName(), 'bosdyn.api.mission.Sequence');
  const [child] = nodesPb.Sequence.deserializeBinary(root.getImpl().getValue_asU8()).getChildrenList();
  assert.strictEqual(child.getImpl().getTypeName(), 'bosdyn.api.mission.Sleep');
  assert.strictEqual(nodesPb.Sleep.deserializeBinary(child.getImpl().getValue_asU8()).getSeconds(), 2);
  // Not packed: in the field of its type.
  const both = { nameOrObject: 'both', innerProto: new nodesPb.SimpleParallel(), children: [nap(1), nap(2)] };
  assert.strictEqual(protoFromObject(both, false).getTypeCase(), nodesPb.Node.TypeCase.SIMPLE_PARALLEL);
  // Like Python, a sequence needs children.
  const empty = { nameOrObject: 'empty', innerProto: new nodesPb.Sequence(), children: [] };
  assert.throws(() => protoFromObject(empty), /has no children/);

  const { ValueCase } = missionUtilPb.ConstantValue;
  assert.strictEqual(jsVarToValue('text').getValueCase(), ValueCase.STRING_VALUE);
  assert.strictEqual(jsVarToValue(2.5).getValueCase(), ValueCase.FLOAT_VALUE);
  assert.strictEqual(jsVarToValue(new geometryPb.Vec2().setX(1)).getMsgValue().getTypeName(), 'bosdyn.api.Vec2');
  const list = getValueFromConstantValueMessage(jsVarToValue([1, 'a']));
  assert.deepStrictEqual(
    list.getValuesList().map(value => value.getValueCase()),
    [ValueCase.INT_VALUE, ValueCase.STRING_VALUE],
  );
  assert.strictEqual(jsVarToValue({ a: true }).getDictValue().getValuesMap().get('a').getBoolValue(), true);
  assert.throws(() => jsVarToValue(null), /Invalid type/);
  const { Type } = missionUtilPb.VariableDeclaration;
  assert.deepStrictEqual(
    [jsTypeToPbType('x'), jsTypeToPbType([]), jsTypeToPbType({})],
    [Type.TYPE_STRING, Type.TYPE_LIST, Type.TYPE_DICT],
  );

  // Result is an object: instanceof threw a TypeError.
  assert.strictEqual(resultConstantToProtoEnum(Result.SUCCESS), missionUtilPb.Result.RESULT_SUCCESS);
  assert.throws(() => resultConstantToProtoEnum(42), InvalidConversion);
  assert.throws(() => protoEnumToResultConstant(42), InvalidConversion);
  assert.strictEqual(isStringIdentifier('1abc'), false);

  // The velocity limit is applied (Object.hasOwn() on a method was always false).
  const velocity = (x, y, angular) =>
    new geometryPb.SE2Velocity().setLinear(new geometryPb.Vec2().setX(x).setY(y)).setAngular(angular);
  const travel = new graphNavPb.TravelParams().setVelocityLimit(
    new geometryPb.SE2VelocityLimit().setMaxVel(velocity(2, 2, 1)),
  );
  const limit = new geometryPb.SE2VelocityLimit().setMaxVel(velocity(0.5, 3, 0.3));
  const restricted = mostRestrictiveTravelParams(travel, limit).getVelocityLimit().getMaxVel();
  assert.deepStrictEqual(
    [restricted.getLinear().getX(), restricted.getLinear().getY(), restricted.getAngular()],
    [0.5, 2, 0.3],
  );
  assert.strictEqual(travel.getVelocityLimit().getMaxVel().getLinear().getX(), 2);
  assert.strictEqual(mostRestrictiveTravelParams(null, limit).getVelocityLimit().getMaxVel().getLinear().getX(), 0.5);
});

test('mission oneLineStr() is the one-line text format of Python (it was JSON), with the Any expanded', () => {
  const pack = (message, typeName) => {
    const any = new Any();
    any.pack(message.serializeBinary(), typeName);
    return any;
  };
  const node = new nodesPb.Node()
    .setName('root')
    .setUserData(new missionUtilPb.UserData().setId('x\ty'))
    .setImpl(pack(new nodesPb.Sequence().setAlwaysRestart(true), 'bosdyn.api.mission.Sequence'));
  // The texts of text_format.MessageToString(as_one_line=True) in Python.
  assert.strictEqual(
    oneLineStr(node),
    'name: "root" user_data { id: "x\\ty" } impl { [type.googleapis.com/bosdyn.api.mission.Sequence] { always_restart: true } }',
  );
  const napNode = new nodesPb.Node().setImpl(pack(new nodesPb.Sleep().setSeconds(2), 'bosdyn.api.mission.Sleep'));
  assert.strictEqual(oneLineStr(napNode), 'impl { [type.googleapis.com/bosdyn.api.mission.Sleep] { seconds: 2.0 } }');
  assert.strictEqual(nodeSpecToShortString(napNode), 'impl { [type...');
});

test('RemoteClient.tick() without leases (not iterable), and lease protos are sent (an empty lease was added)', async () => {
  let ticked = null;
  const server = await startGrpcServer(remoteServiceGrpcPb.RemoteMissionServiceService, {
    tick(call, callback) {
      ticked = call.request;
      callback(
        null,
        new remotePb.TickResponse().setHeader(okHeader()).setStatus(remotePb.TickResponse.Status.STATUS_RUNNING),
      );
    },
  });
  try {
    const client = server.connect(new RemoteClient());
    assert.strictEqual((await client.tick('session')).getStatus(), remotePb.TickResponse.Status.STATUS_RUNNING);
    const lease = new leasePb.Lease().setResource('body').setEpoch('epoch').setSequenceList([1]);
    await client.tick('session', [lease]);
    assert.strictEqual(ticked.getLeasesList()[0].getResource(), 'body');
    await client.tick('session', [new Lease(lease)]);
    assert.strictEqual(ticked.getLeasesList()[0].getEpoch(), 'epoch');
  } finally {
    await server.close();
  }
});

// ---------------------------------------------------------------------------------------------------------------
// Choreography: animation files (expected values from the Python conversion), client, upload helper.
// ---------------------------------------------------------------------------------------------------------------

const WAVE_CHA = `// A test animation with most options.
controls legs body arm gripper
bpm 120
extendable
neutral_start
timing_adjustability 0.5 # trailing comment
arm_playback workspace
display_rgb 10 20 30
description "Hello wave, with ""quotes"""

speed 0.5 1 2
translation_multiplier.x 0 1 2
arm_dance_frame_id 0 3 5
shoulder_0_offset -0.5 0 0.5
// a comment line in the parameters

time body_pos body_quat_wxyz leg_joints contact arm_joints gripper
0 0 0 0.45 1 0 0 0 0.1 0.8 -1.6 -0.1 0.8 -1.6 0.1 0.8 -1.6 -0.1 0.8 -1.6 1 1 1 1 0 -0.9 1.2 0 0.5 0 -0.5
0.5 0.01 -0.02 0.44 0.99 0.01 0 0.05 0.1 0.9 -1.7 -0.1 0.9 -1.7 0.1 0.7 -1.5 -0.1 0.7 -1.5 1 0 1 0 0.1 -1 1.3 0 0.4 0.1 0
1.25 0.00 0 0.45 1 0 0 0 0.1 0.8 -1.6 -0.1 0.8 -1.6 0.1 0.8 -1.6 -0.1 0.8 -1.6 0 1 0 1 0 -0.9 1.2 0 0.5 0 -1
`;

test('animation files convert like Python (require() gave {}, each character of the file was read as a line)', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'bosdyn-cha-'));
  try {
    const file = path.join(directory, 'wave_test.cha');
    fs.writeFileSync(file, WAVE_CHA);
    const animation = convertAnimationFileToProto(file);
    const keyframes = animation.proto.getAnimationKeyframesList();
    // All the keyframes (only the last one was kept), with the 0 values read as 1e-6 like Python.
    assert.deepStrictEqual(
      keyframes.map(keyframe => keyframe.getTime()),
      [1e-6, 0.5, 1.25],
    );
    const legs = keyframes[1].getLegs();
    assert.deepStrictEqual(legs.getFl().getJointAngles().toArray(), [0.1, 0.9, -1.7]);
    // One contact for each leg (the first one was set on the 4 legs, and 0 was true).
    assert.deepStrictEqual(
      ['Fl', 'Fr', 'Hl', 'Hr'].map(leg => legs[`get${leg}`]().getStance().getValue()),
      [true, false, true, false],
    );
    assert.deepStrictEqual(keyframes[1].getBody().getQuaternion().toArray(), [0.01, 1e-6, 0.05, 0.99]);
    assert.strictEqual(keyframes[1].getArm().getJointAngles().getElbow0().getValue(), 1.3);
    assert.strictEqual(keyframes[2].getGripper().getGripperAngle().getValue(), -1);

    // The parameters: min, default, max (split('') gave characters), in wrappers, nested ones and an integer.
    const [min, byDefault, max] = ['Minimum', 'Default', 'Maximum'].map(kind =>
      animation.proto[`get${kind}Parameters`](),
    );
    assert.deepStrictEqual(
      [min, byDefault, max].map(params => params.getSpeed().getValue()),
      [0.5, 1, 2],
    );
    assert.deepStrictEqual(
      [min.getTranslationMultiplier().getX().getValue(), byDefault.getTranslationMultiplier().getX().getValue()],
      [1e-6, 1],
    );
    assert.deepStrictEqual([min.getArmDanceFrameId().getValue(), byDefault.getArmDanceFrameId().getValue()], [0, 3]);

    // The snake_case options (neutral_start & co. were not keywords, bpm threw a TypeError).
    assert.deepStrictEqual(
      [animation.proto.getBpm(), animation.proto.getNeutralStart(), animation.proto.getTimingAdjustability()],
      [120, true, 0.5],
    );
    assert.strictEqual(
      animation.proto.getArmPlayback(),
      choreographySequencePb.Animation.ArmPlayback.ARM_PLAYBACK_WORKSPACE,
    );

    // createMoveInfoProto() threw (getIsExtendable), put the display fields on the move and seconds in the slices.
    const moveInfo = animation.createMoveInfoProto();
    assert.deepStrictEqual(
      [
        moveInfo.getMoveLengthSlices(),
        moveInfo.getIsExtendable(),
        moveInfo.getMinMoveLengthSlices(),
        moveInfo.getMaxMoveLengthSlices(),
      ],
      [10, true, 10, 0],
    );
    const display = moveInfo.getDisplay();
    assert.deepStrictEqual(display.getColor().toArray(), [10, 20, 30, 1]);
    assert.strictEqual(display.getDescription(), 'Hello wave, with quotes');
    assert.strictEqual(
      display.getCategory(),
      choreographySequencePb.ChoreographerDisplayInfo.Category.CATEGORY_ANIMATION,
    );

    // The keyframe times from the frequency.
    const frequencyFile = path.join(directory, 'frequency.cha');
    fs.writeFileSync(
      frequencyFile,
      'controls body\nfrequency 4\ntruncatable\nstarts_sitting\n\nno parameters\n\nbody_x body_z\n0.1 0.45\n0.2 0.44\n',
    );
    const sampled = convertAnimationFileToProto(frequencyFile);
    assert.deepStrictEqual(
      sampled.proto.getAnimationKeyframesList().map(keyframe => keyframe.getTime()),
      [0, 0.25],
    );
    const sampledInfo = sampled.createMoveInfoProto();
    assert.deepStrictEqual([sampledInfo.getMoveLengthTime(), sampledInfo.getMaxTime()], [0.25, 0.25]);
    assert.deepStrictEqual(sampledInfo.getEntranceStatesList(), [
      choreographySequencePb.MoveInfo.TransitionState.TRANSITION_STATE_SIT,
    ]);

    const unknown = path.join(directory, 'unknown.cha');
    fs.writeFileSync(unknown, 'controls body\nbpm 60\n\nno parameters\n\ntime body_wiggle\n0 1\n');
    assert.throws(() => convertAnimationFileToProto(unknown), AnimationFileFormatError);
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

test('ChoreographyClient rejects without time sync (it threw synchronously), and skips an omitted start time', async () => {
  const client = new ChoreographyClient();
  client._stub = new Proxy({}, { get: () => () => {} });
  const sent = [];
  client.call = async (rpcMethod, request) => sent.push(request);
  for (const call of [
    () => client.executeChoreography('dance', 5, 0),
    () => client.choreographyCommand([], 5),
    () => client.choreographyTimeAdjust(5),
  ]) {
    let promise;
    assert.doesNotThrow(() => {
      promise = call();
    });
    await assert.rejects(promise, /No timesync endpoint/);
  }
  // No start time: the robot starts at once (undefined was converted, and threw).
  await client.executeChoreography('dance', undefined, 0);
  assert.ok(!sent[0].hasStartTime());
});

test('ChoreographyClient uploads sequences (setNonStringParsing() did not exist), sizes legs (.lenght), reads binary files', async () => {
  const uploads = [];
  const server = await startGrpcServer(choreographyServiceGrpcPb.ChoreographyServiceService, {
    uploadChoreography(call, callback) {
      uploads.push(call.request);
      callback(null, new choreographySequencePb.UploadChoreographyResponse().setHeader(okHeader()));
    },
  });
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'bosdyn-sequence-'));
  try {
    const client = server.connect(new ChoreographyClient());
    const sequence = new choreographySequencePb.ChoreographySequence().setName('dance');
    await client.uploadChoreography(sequence);
    // true by default, like Python.
    assert.deepStrictEqual(
      [uploads[0].getNonStrictParsing(), uploads[0].getChoreographySequence().getName()],
      [true, 'dance'],
    );
    await client.uploadChoregraphy(sequence, false);
    assert.strictEqual(uploads[1].getNonStrictParsing(), false);

    const request = client.buildLegSizeConfigurationRequest([1, 2, 3, 4], null, [5, 6, 7, 8]);
    assert.strictEqual(request.getFrontLeftSize().getDistanceBackward(), 4);
    assert.strictEqual(request.getHindLeftSize().getDistanceInward(), 5);
    assert.strictEqual(request.hasFrontRightSize(), false);

    // The bytes of the file (it was read as UTF-8, then decoded as base64).
    saveChoreographySequenceToFile(directory, 'dance.csq', sequence.setSlicesPerMinute(500));
    const loaded = loadChoreographySequenceFromBinaryFile(path.join(directory, 'dance.csq'));
    assert.deepStrictEqual([loaded.getName(), loaded.getSlicesPerMinute()], ['dance', 500]);
  } finally {
    await server.close();
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

test('loadChoreographySequenceFromTxtFile() reads the text format like Python (it returned undefined), for the upload', async () => {
  const file = path.join(__dirname, '..', 'examples', 'upload_choreographed_sequence', 'default_dance.csq');
  const sequence = loadChoreographySequenceFromTxtFile(file);
  assert.deepStrictEqual(
    [sequence.getName(), sequence.getSlicesPerMinute(), sequence.getMovesList().length],
    ['Upload Choreography Example', 520, 17],
  );
  // The sha256 of text_format.MessageToString() of the sequence read by text_format.Merge() in Python.
  assert.strictEqual(
    createHash('sha256').update(textFormat.messageToString(sequence)).digest('hex'),
    'f61cef88ecd04433ff819015ed8262bbef0c639ce738549e1639d3a3fd3f5db3',
  );

  const uploads = [];
  const server = await startGrpcServer(choreographyServiceGrpcPb.ChoreographyServiceService, {
    uploadChoreography(call, callback) {
      uploads.push(call.request);
      callback(null, new choreographySequencePb.UploadChoreographyResponse().setHeader(okHeader()));
    },
  });
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'bosdyn-csq-'));
  try {
    // The Windows line endings, read like the text files of Python.
    const crlf = path.join(directory, 'crlf.csq');
    fs.writeFileSync(crlf, fs.readFileSync(file, 'utf8').replace(/\n/g, '\r\n'));
    assert.deepStrictEqual(loadChoreographySequenceFromTxtFile(crlf).serializeBinary(), sequence.serializeBinary());
    const bad = path.join(directory, 'bad.csq');
    fs.writeFileSync(bad, 'name: "x"\nmoves { type: "step" requested_slices: many }\n');
    assert.throws(() => loadChoreographySequenceFromTxtFile(bad), /^ParseError: 2:40 : .*Couldn't parse integer: many/);
    assert.throws(() => loadChoreographySequenceFromTxtFile(path.join(directory, 'missing.csq')), /File not found/);

    const client = server.connect(new ChoreographyClient());
    await client.uploadChoreography(sequence);
    assert.deepStrictEqual(uploads[0].getChoreographySequence().serializeBinary(), sequence.serializeBinary());
  } finally {
    await server.close();
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

test('writeAnimationToDest() writes the .cap in the text format of Python (it was the binary proto)', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'bosdyn-cap-'));
  try {
    const cha = path.join(directory, 'wave_test.cha');
    fs.writeFileSync(cha, WAVE_CHA);
    const animation = convertAnimationFileToProto(cha);
    const file = writeAnimationToDest(animation, directory);
    assert.strictEqual(file, path.join(directory, 'wave_test.cap'));
    const text = fs.readFileSync(file, 'utf8');
    // The sha256 of the file written by write_animation_to_dest() in Python (with '\n' line endings).
    assert.strictEqual(
      createHash('sha256').update(text).digest('hex'),
      '2a0e2bef3892d5cc4c5c3066543517cba62faf8f2f2c42a7e4594b56ec198dff',
    );
    const readBack = textFormat.parse(text, new choreographySequencePb.Animation());
    assert.deepStrictEqual(readBack.serializeBinary(), animation.proto.serializeBinary());
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

test('choreographyLogToAnimationFile() writes a .cha that reads back (body_quat_zyzw, an empty line, true/false)', async () => {
  const pb = choreographySequencePb;
  const keyframe = (seconds, fl) =>
    new pb.LoggedStateKeyFrame()
      .setJointAngles(
        new pb.LoggedJoints()
          .setFl(new pb.LegJointAngles().setHipX(fl).setHipY(0.2).setKnee(0.3))
          .setFr(new pb.LegJointAngles().setHipX(-fl).setHipY(0.5).setKnee(0.6))
          .setHl(new pb.LegJointAngles().setHipX(0.7).setHipY(0.8).setKnee(0.9))
          .setHr(new pb.LegJointAngles().setHipX(1).setHipY(1.1).setKnee(1.2))
          .setArm(new pb.ArmJointAngles().setShoulder0(new DoubleValue().setValue(0.3)))
          .setGripperAngle(new DoubleValue().setValue(-0.2)),
      )
      .setFootContactState(
        new pb.LoggedFootContacts().setFlContact(true).setFrContact(false).setHlContact(true).setHrContact(true),
      )
      .setAnimationTformBody(
        new geometryPb.SE3Pose()
          .setPosition(new geometryPb.Vec3().setZ(0.5))
          .setRotation(new geometryPb.Quaternion().setW(1)),
      )
      .setTimestamp(timestamp(seconds));
  const choreographyLog = new pb.ChoreographyStateLog().setKeyFramesList([keyframe(100, 0.1), keyframe(100.5, 0.15)]);
  const client = new ChoreographyClient();
  client.downloadRobotStateLog = async () => ({ choreographyLog });

  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'bosdyn-log-'));
  try {
    const { result } = await capturedOutput(() =>
      client.choreographyLogToAnimationFile('recorded', directory, true, 'truncatable', ['neutral_start']),
    );
    assert.strictEqual(result, 'recorded.cha');
    // Written before the promise resolves.
    const animation = convertAnimationFileToProto(path.join(directory, 'recorded.cha'));
    const keyframes = animation.proto.getAnimationKeyframesList();
    assert.deepStrictEqual(
      keyframes.map(frame => frame.getTime()),
      [1e-6, 0.5],
    );
    // The legs in the order of the column (Python writes fr, fl, hr, hl: left and right swapped).
    assert.deepStrictEqual(keyframes[1].getLegs().getFl().getJointAngles().toArray(), [0.15, 0.2, 0.3]);
    assert.deepStrictEqual(keyframes[1].getLegs().getFr().getJointAngles().toArray(), [-0.15, 0.5, 0.6]);
    assert.deepStrictEqual(
      ['Fl', 'Fr', 'Hl', 'Hr'].map(leg => keyframes[0].getLegs()[`get${leg}`]().getStance().getValue()),
      [true, false, true, true],
    );
    assert.strictEqual(keyframes[0].getArm().getJointAngles().getShoulder0().getValue(), 0.3);
    assert.strictEqual(keyframes[0].getGripper().getGripperAngle().getValue(), -0.2);
    // The options given as arguments or arrays (args was iterated as one array), and the description.
    assert.deepStrictEqual([animation.proto.getTruncatable(), animation.proto.getNeutralStart()], [true, true]);
    assert.strictEqual(animation.description, 'Animation created from log recording.');
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

test('AnimationUploadHelper initializes itself (it needed initialize()), with moves without generated id', async () => {
  const pb = choreographySequencePb;
  const same = new pb.Animation().setName('same');
  const uploads = [];
  const choreographyClient = {
    async listAllMoves() {
      return new pb.ListAllMovesResponse().setMovesList([
        new pb.MoveInfo().setName('animation::old'),
        new pb.MoveInfo()
          .setName('animation::same')
          .setAnimatedMoveGeneratedId(new StringValue().setValue(helper.generateAnimationId(same))),
      ]);
    },
    async uploadAnimatedMove(animation, generatedId) {
      uploads.push([animation.getName(), generatedId]);
      return new pb.UploadAnimatedMoveResponse().setStatus(pb.UploadAnimatedMoveResponse.Status.STATUS_OK);
    },
  };
  const helper = new AnimationUploadHelper({ ensureClient: async () => choreographyClient });
  // Already on the robot, with the same id.
  assert.strictEqual(await helper.uploadAnimatedMove(same), null);
  const wave = new pb.Animation().setName('wave');
  await helper.uploadAnimatedMove(wave);
  assert.deepStrictEqual(uploads, [['wave', helper.generateAnimationId(wave)]]);
  assert.strictEqual(helper.animationNameToGeneratedId.old, '');
});

// ---------------------------------------------------------------------------------------------------------------
// Spot CAM: sounds, compositor, health, PTZ, stream quality.
// ---------------------------------------------------------------------------------------------------------------

test('Spot CAM AudioClient.loadSound() sends the sound in chunks (1-byte chunks, and every chunk was the last one)', async () => {
  const received = [];
  const server = await startGrpcServer(spotCamServiceGrpcPb.AudioServiceService, {
    loadSound(call, callback) {
      call.on('data', request => received.push(request));
      call.on('end', () => callback(null, new spotCamAudioPb.LoadSoundResponse().setHeader(okHeader())));
    },
  });
  try {
    const client = server.connect(new AudioClient());
    const sound = Buffer.from(Array.from({ length: 350 }, (_, i) => i % 251));
    await client.loadSound(new spotCamAudioPb.Sound().setName('beep'), sound, 100);
    assert.deepStrictEqual(
      received.map(request => request.getData().getData_asU8().length),
      [100, 100, 100, 50],
    );
    assert.ok(
      received.every(request => request.getData().getTotalSize() === 350 && request.getSound().getName() === 'beep'),
    );
    assert.deepStrictEqual(Buffer.concat(received.map(request => request.getData().getData_asU8())), sound);
  } finally {
    await server.close();
  }
});

test('Spot CAM CompositorClient sets the IR colormap and meters (setAutoScale(bool) and setMeter() threw)', async () => {
  const requests = [];
  const respond = Response => (call, callback) => {
    requests.push(call.request);
    callback(null, new Response().setHeader(okHeader()));
  };
  const server = await startGrpcServer(spotCamServiceGrpcPb.CompositorServiceService, {
    setIrColormap: respond(spotCamCompositorPb.SetIrColormapResponse),
    setIrMeterOverlay: respond(spotCamCompositorPb.SetIrMeterOverlayResponse),
  });
  try {
    const client = server.connect(new CompositorClient());
    const { COLORMAP_JET } = spotCamCompositorPb.IrColorMap.ColorMap;
    await client.setIrColormap(COLORMAP_JET, 10, 40, true);
    await client.setIrColorMap(COLORMAP_JET, 10, 40, false);
    assert.deepStrictEqual(
      requests.map(request => request.getMap().getAutoScale().getValue()),
      [true, false],
    );
    const unit = new spotCamCompositorPb.IrMeterOverlay.TempUnit();
    await client.setIrMeterOverlay(0.5, 0.25, true, unit);
    assert.deepStrictEqual(requests[2].getOverlay().getMeterList()[0].toArray(), [0.5, 0.25]);
    await client.setMultiIrMeterOverlay(
      [
        [0.1, 0.2],
        [0.7, 0.7],
      ],
      true,
      unit,
    );
    assert.deepStrictEqual(
      requests[3]
        .getOverlay()
        .getMeterList()
        .map(meter => meter.toArray()),
      [
        [0.1, 0.2],
        [0.7, 0.7],
      ],
    );
  } finally {
    await server.close();
  }
});

test('Spot CAM: system log bytes (numbers joined by commas), autofocus (it threw), pan angles, stream exposures', () => {
  const chunk = text =>
    new spotCamHealthPb.GetSystemLogResponse().setData(
      new dataChunkPb.DataChunk().setTotalSize(11).setData(Buffer.from(text)),
    );
  const lines = [];
  const { debug } = console;
  console.debug = (...args) => lines.push(args.join(' '));
  try {
    assert.deepStrictEqual(
      new HealthClient()._getSystemLogFromResponse([chunk('Hello '), chunk('world')]),
      Buffer.from('Hello world'),
    );
  } finally {
    console.debug = debug;
  }

  const { PTZ_FOCUS_AUTO, PTZ_FOCUS_MANUAL } = spotCamPtzPb.PtzFocusState.PtzFocusMode;
  assert.strictEqual(createFocusState(PTZ_FOCUS_AUTO).getMode(), PTZ_FOCUS_AUTO);
  assert.strictEqual(createFocusState(PTZ_FOCUS_MANUAL, 2.5).getApproxDistance().getValue(), 2.5);
  assert.strictEqual(createFocusState(PTZ_FOCUS_MANUAL, 2.5, 800).getFocusPosition().getValue(), 800);
  assert.throws(() => createFocusState(PTZ_FOCUS_MANUAL), ValueError);
  assert.deepStrictEqual([shiftPanAngle(-30), shiftPanAngle(725), shiftPanAngle(90)], [330, 5, 90]);

  // The given exposure messages (they were put in a field of a new message).
  const client = new StreamQualityClient();
  const sync = new spotCamStreamqualityPb.StreamParams.SyncAutoExposure().setBrightnessTarget(
    new Int32Value().setValue(128),
  );
  const request = client._buildSetStreamParamsRequest(null, null, null, null, null, sync, null);
  assert.strictEqual(request.getParams().getSyncExposure().getBrightnessTarget().getValue(), 128);
  const manual = new spotCamStreamqualityPb.StreamParams.ManualExposure().setExposure(new Duration().setNanos(5e6));
  const manualRequest = client._buildSetStreamParamsRequest(null, null, null, null, null, null, manual);
  assert.strictEqual(manualRequest.getParams().getManualExposure().getExposure().getNanos(), 5e6);
});

// ---------------------------------------------------------------------------------------------------------------
// Orbit.
// ---------------------------------------------------------------------------------------------------------------

test('OrbitClient: new OrbitClient() (TDZ), POST bodies (dropped), cookies and CSRF header, 4xx responses', async t => {
  const seen = [];
  const server = await startHttpsServer((request, response) => {
    let body = '';
    request.on('data', chunk => {
      body += chunk;
    });
    request.on('end', () => {
      const { cookie, authorization } = request.headers;
      seen.push({ method: request.method, url: request.url, body, cookie, csrf: request.headers['x-csrf-token'] });
      if (request.url === '/') {
        // A value with '=' (split('=')[1] cut it).
        response.writeHead(200, { 'Set-Cookie': ['x-csrf-token=abc=def; Path=/', 'session=s1; HttpOnly'] });
        response.end('<html></html>');
      } else if (request.url === '/api/v0/api_token/authenticate') {
        response.writeHead(authorization === 'Bearer good' ? 200 : 401, { 'Content-Type': 'application/json' });
        response.end('{"ok":true}');
      } else {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ echo: body ? JSON.parse(body) : null }));
      }
    });
  });
  if (!server) {
    t.skip('openssl is needed to make a test certificate');
    return;
  }
  try {
    const client = new OrbitClient(server.hostname, false);
    await assert.rejects(
      client.getRobots(),
      error => error instanceof UnauthenticatedClientError && /not authenticated/.test(error.message),
    );

    // Returned like the responses of Python (axios threw on the 401).
    const refused = await capturedOutput(() => client.authenticateWithApiToken('bad'));
    assert.strictEqual(refused.result.status, 401);
    assert.match(refused.lines.join('\n'), /Login failed/);
    assert.strictEqual((await client.authenticateWithApiToken('good')).status, 200);

    // The json of the config is the body, like the json argument of Python.
    assert.deepStrictEqual((await client.postSiteElement({ json: { name: 'dock' } })).data, { echo: { name: 'dock' } });
    const post = seen.find(request => request.method === 'POST');
    assert.strictEqual(post.url, '/api/v0/site_elements');
    // The CSRF token in its header, and the cookies sent back like a requests.Session.
    assert.strictEqual(post.csrf, 'abc=def');
    assert.match(post.cookie, /x-csrf-token=abc=def/);
    assert.match(post.cookie, /session=s1/);

    // With a trailing slash, like Python.
    await client.getRobots();
    assert.strictEqual(seen.at(-1).url, '/api/v0/robots/');
    // Without config ('json' in undefined threw).
    const event = await client.postCalendarEvent('spot', 1000, 60000, 'walk', false, true, 'patrol');
    assert.strictEqual(event.data.echo.agent.nickname, 'spot');
  } finally {
    await server.close();
  }
});

test('OrbitClient: images with a status check, site walk archives, repeated parameters like requests', async t => {
  const urls = [];
  const server = await startHttpsServer((request, response) => {
    urls.push(request.url);
    if (request.url === '/') {
      response.writeHead(200, { 'Set-Cookie': ['x-csrf-token=abc; Path=/'] });
      response.end('');
    } else if (request.url === '/api/v0/api_token/authenticate') {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end('{}');
    } else if (request.url.startsWith('/api/v0/site_walks/archive/')) {
      response.writeHead(200, { 'Content-Type': 'application/zip' });
      response.end(Buffer.from([0x50, 0x4b, 0x03, 0x04, 0xff]));
    } else if (request.url === '/missing.jpg') {
      response.writeHead(404);
      response.end('<html>not found</html>');
    } else if (request.url === '/image.jpg') {
      response.writeHead(200, { 'Content-Type': 'image/jpeg' });
      response.end(Buffer.from([0xff, 0xd8, 0xff]));
    } else {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end('[]');
    }
  });
  if (!server) {
    t.skip('openssl is needed to make a test certificate');
    return;
  }
  const read = async stream => {
    const chunks = [];
    for await (const chunk of stream) chunks.push(chunk);
    return Buffer.concat(chunks);
  };
  try {
    const client = new OrbitClient(server.hostname, false);
    await client.authenticateWithApiToken('good');
    // Repeated parameters, like requests (uuids[]=a&uuids[]=b).
    await client.getResource('runs', { params: { uuids: ['a', 'b'] } });
    assert.strictEqual(urls.at(-1), '/api/v0/runs/?uuids=a&uuids=b');
    // An error page is not an image (raise_for_status() of Python), but getImageResponse() returns it.
    await assert.rejects(
      client.getImage(`https://${server.hostname}/missing.jpg`),
      error => error.response?.status === 404,
    );
    assert.deepStrictEqual(
      [...(await read(await client.getImage(`https://${server.hostname}/image.jpg`)))],
      [0xff, 0xd8, 0xff],
    );
    // The zip archive of a site walk (missing), as bytes.
    const archive = await client.getSiteWalkArchiveById('walk-1');
    assert.deepStrictEqual([...Buffer.from(archive.data)], [0x50, 0x4b, 0x03, 0x04, 0xff]);
    assert.strictEqual(urls.at(-1), '/api/v0/site_walks/archive/?uuids=walk-1');
    const missing = await client.getImageResponse(`https://${server.hostname}/missing.jpg`);
    assert.strictEqual(missing.status, 404);
    missing.data.resume();
  } finally {
    await server.close();
  }

  // The arguments of the Orbit examples.
  const { ArgumentParser } = require('argparse');
  const parser = new ArgumentParser();
  orbitUtils.addBaseArguments(parser);
  const options = parser.parse_args(['--hostname', 'orbit.test', '--cert', 'cert.pem', 'key.pem']);
  assert.deepStrictEqual(
    [options.hostname, options.verify, options.cert],
    ['orbit.test', true, ['cert.pem', 'key.pem']],
  );
});

test('validateWebhookPayload() accepts the signatures of Python and refuses the others (it was missing)', () => {
  // Signed in Python: json.dumps(payload, separators=(',', ':')), with the non-ASCII characters escaped.
  const payload = { b: 1, text: 'caf\u00e9 \u{1F600}', list: [1.5, true, null, 'x\n"y"'], z: { k: 'v' } };
  const header = 't=1700000000000,v1=647a1d3abf23277314739bf5ea878d3bd2f664511f9a9d9a91913f592d88e8e4';
  const secret = 'a1b2c3d4e5f60718';
  validateWebhookPayload(payload, header, secret, Infinity);
  assert.throws(
    () => validateWebhookPayload({ ...payload, b: 2 }, header, secret, Infinity),
    WebhookSignatureVerificationError,
  );
  assert.throws(() => validateWebhookPayload(payload, header, secret), /old/);
  assert.throws(() => validateWebhookPayload(payload, '', secret), WebhookSignatureVerificationError);
});

test('createClient(): --verify true or false in any case, like Python 5.2.0 (false was the path of a CA bundle)', async () => {
  const seen = [];
  const { _tlsOptions: tlsOptions } = OrbitClient;
  const { authenticateWithApiToken } = OrbitClient.prototype;
  OrbitClient._tlsOptions = (verify, cert) => {
    seen.push(verify);
    return tlsOptions.call(OrbitClient, verify, cert);
  };
  OrbitClient.prototype.authenticateWithApiToken = async () => {};
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'bosdyn-orbit-ca-'));
  try {
    for (const verify of ['false', ' FALSE ', 'False', 'true', 'TRUE', true, false, undefined]) {
      const { lines } = await capturedOutput(() => createClient({ hostname: 'orbit.test', verify }));
      assert.deepStrictEqual(lines, []);
    }
    assert.deepStrictEqual(seen, [false, false, false, true, true, true, false, true]);
    // Another string is the path of a CA bundle, with the message of Python.
    const bundle = path.join(directory, 'ca.pem');
    fs.writeFileSync(bundle, 'not checked before a connection');
    const { lines } = await capturedOutput(() => createClient({ hostname: 'orbit.test', verify: bundle }));
    assert.strictEqual(seen.at(-1), bundle);
    assert.match(lines.join('\n'), /is not either 'True' or 'False'\. Assuming verify is set to 'path\/to\/CA bundle'/);
  } finally {
    OrbitClient._tlsOptions = tlsOptions;
    OrbitClient.prototype.authenticateWithApiToken = authenticateWithApiToken;
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

// ---------------------------------------------------------------------------------------------------------------
// BDDF.
// ---------------------------------------------------------------------------------------------------------------

test('BDDF files with non-ASCII text read back to their normal end (sizes in UTF-16 units, checksum never matched)', async () => {
  const filename = path.join(os.tmpdir(), `bosdyn-regression-${process.pid}.bddf`);
  const texts = ['café ☕', 'naïve — ok'];
  try {
    const outfile = await fs.promises.open(filename, 'w');
    const writer = new DataWriter(outfile.createWriteStream(), { robot: 'spot' });
    const series = writer.addMessageSeries('bosdyn/test/text', { channel: 'notes' }, 'text/plain', 'text', false);
    texts.forEach((text, i) => writer.writeData(series, 1_000_000_000 + i, text));
    await writer.close();
    await outfile.close();

    // The stream reader: a hash updated after digest() (ERR_CRYPTO_HASH_FINALIZED), then Buffers compared with !==.
    const infile = await fs.promises.open(filename, 'r');
    const stream = await StreamDataReader.create({ infile });
    for (const text of texts) {
      const [, , data] = await stream.readDataBlock();
      assert.strictEqual(Buffer.from(data).toString('utf8'), text);
    }
    await assert.rejects(stream.readDataBlock(), /Normal end of bddf file/);
    assert.ok(stream.checksum.equals(stream.readChecksum));
    await stream.close();
    await infile.close();

    // The indexed reader finds the blocks at their offsets and with their sizes.
    const indexedFile = await fs.promises.open(filename, 'r');
    const indexed = await DataReader.create({ infile: indexedFile });
    const [, , first] = await indexed.read(0, 1);
    assert.strictEqual(Buffer.from(first).toString('utf8'), texts[1]);
    await indexed.close();
    await indexedFile.close();
  } finally {
    fs.rmSync(filename, { force: true });
  }
});

/** Writes a BDDF file with a DataWriter, and returns its path (removed by the caller). */
async function writeBddf(name, fill) {
  const filename = path.join(os.tmpdir(), `bosdyn-regression-${process.pid}-${name}.bddf`);
  const outfile = await fs.promises.open(filename, 'w');
  const writer = new DataWriter(outfile.createWriteStream(), { robot: 'spot' });
  try {
    await fill(writer);
    await writer.close();
  } finally {
    await outfile.close();
  }
  return filename;
}

const BDDF_TS = 1758650000123456789n;

test('BDDF hashes and nanoseconds are exact (FileIndex hashes matched no series in Python, TS and TS+1 were equal)', async () => {
  const filename = await writeBddf('exact', writer => {
    const series = writer.addMessageSeries(
      'bosdyn:grpc:requests',
      { 'bosdyn:message-type': 'bosdyn.api.Foo', 'bosdyn:grpc:service': 'svc' },
      'application/protobuf',
      'bosdyn.api.Foo',
    );
    writer.writeData(series, BDDF_TS, Buffer.from('a'));
    writer.writeData(series, BDDF_TS + 1n, Buffer.from('b'));
    // A number is still accepted (rounded to 256 ns).
    writer.writeData(series, 1758650000123456768, Buffer.from('c'));
  });
  try {
    const reader = await DataReader.create({ filename });
    // The hash of Python (series_identifier_to_hash), in the file index and in the series descriptor.
    const expectedHash = '13627025738760958878';
    assert.deepStrictEqual(reader.fileIndex.getSeriesIdentifierHashesList(), [expectedHash]);
    assert.strictEqual((await reader.seriesDescriptor(0)).getIdentifierHash(), expectedHash);
    assert.strictEqual(
      FileIndexer.seriesIdentifierToHash(reader.fileIndex.getSeriesIdentifiersList()[0]),
      expectedHash,
    );
    const timestamps = [];
    for (let i = 0; i < 3; i++) timestamps.push((await reader.read(0, i))[1]);
    assert.deepStrictEqual(timestamps, [BDDF_TS, BDDF_TS + 1n, 1758650000123456768n]);
    await reader.close();
  } finally {
    fs.rmSync(filename, { force: true });
  }
});

test('BDDF additional indexes are exact int64s (numbers above 2^53 were rounded, a BigInt made close() throw)', async () => {
  const MIN = -(2n ** 63n);
  const MAX = 2n ** 63n - 1n;
  const filename = await writeBddf('additional-indexes', writer => {
    const series = writer.addMessageSeries(
      'bosdyn:message-channel',
      { 'bosdyn:channel': 'chan' },
      'text/plain',
      'text',
      false,
      null,
      ['publish_time_nsec', 'pid'],
    );
    writer.writeData(series, BDDF_TS, Buffer.from('a'), [BDDF_TS + 5n, 1234]);
    writer.writeData(series, BDDF_TS + 1n, Buffer.from('b'), [String(MIN), MAX]);
    // Refused before the block is indexed: the index of the file stays valid, and close() works.
    assert.throws(() => writer.writeData(series, BDDF_TS + 2n, Buffer.from('c'), [1.5, 1]), DataFormatError);
    assert.throws(() => writer.writeData(series, BDDF_TS + 2n, Buffer.from('c'), [MAX + 1n, 1]), DataFormatError);
    assert.throws(() => writer.writeData(series, BDDF_TS + 2n, Buffer.from('c'), [1]), DataFormatError);
  });
  try {
    const expected = [
      [String(BDDF_TS + 5n), '1234'],
      [String(MIN), String(MAX)],
    ];
    const reader = await DataReader.create({ filename });
    assert.strictEqual(await reader.numDataBlocks(0), 2);
    const read = [];
    for (let i = 0; i < 2; i++) read.push((await reader.read(0, i))[0].getAdditionalIndexesList());
    assert.deepStrictEqual(read, expected);
    const entries = (await reader.seriesBlockIndex(0)).getBlockEntriesList();
    assert.deepStrictEqual(
      entries.map(entry => entry.getAdditionalIndexesList()),
      expected,
    );
    await reader.close();

    const stream = await StreamDataReader.create({ infile: fs.createReadStream(filename) });
    const streamed = [(await stream.readDataBlock())[0], (await stream.readDataBlock())[0]];
    assert.deepStrictEqual(
      streamed.map(descriptor => descriptor.getAdditionalIndexesList()),
      expected,
    );
    await stream.close();
  } finally {
    fs.rmSync(filename, { force: true });
  }
});

test('BDDF series: specs of several keys, unique specs, POD samples (dimensions, sizes, 64 bits), no dimension', async () => {
  const { TYPE_FLOAT64, TYPE_UINT64, TYPE_INT32 } = bddfPb.PodTypeEnum;
  const filename = await writeBddf('series', writer => {
    const spec = { 'bosdyn:grpc:service': 'svc', 'bosdyn:message-type': 'bosdyn.api.Foo' };
    writer.addMessageSeries('bosdyn:grpc:requests', spec, 'application/protobuf', 'bosdyn.api.Foo');
    // The same spec (two jspb.Map were compared by reference), even for another series type like Python.
    assert.throws(() => writer.addMessageSeries('other', { ...spec }, 'text/plain', 'txt'), SeriesNotUniqueError);

    const vectors = new PodSeriesWriter(writer, 'bosdyn:channel', { 'bosdyn:channel': 'vec3' }, TYPE_FLOAT64, [3]);
    vectors.write(BDDF_TS, [1, 2, 3]);
    vectors.write(BDDF_TS, new Float64Array([4, 5, 6]));
    // python-struct padded the missing values with NaN.
    assert.throws(() => vectors.write(BDDF_TS, [7]), DataFormatError);
    const matrices = new PodSeriesWriter(writer, 'bosdyn:channel', { 'bosdyn:channel': 'mat' }, TYPE_INT32, [2, 2]);
    matrices.write(BDDF_TS, [
      [1, 2],
      [3, 4],
    ]);
    assert.throws(() => matrices.write(BDDF_TS, [1, 2, 3, 2 ** 31]), RangeError);
    const big = new PodSeriesWriter(writer, 'bosdyn:channel', { 'bosdyn:channel': 'u64' }, TYPE_UINT64);
    big.write(BDDF_TS, 2n ** 64n - 1n);
    big.write(BDDF_TS, 5);
    // No dimension by default ([null] failed at the serialization).
    writer.addPodSeries('bosdyn:channel', { 'bosdyn:channel': 'none' }, TYPE_INT32);
  });
  try {
    const reader = await DataReader.create({ filename });
    assert.strictEqual(
      reader.seriesSpecToIndex({ 'bosdyn:message-type': 'bosdyn.api.Foo', 'bosdyn:grpc:service': 'svc' }),
      0,
    );
    assert.throws(() => reader.seriesSpecToIndex({ 'bosdyn:grpc:service': 'svc' }), /seriesSpec not found/);
    const read = async channel =>
      (await (await PodSeriesReader.create(reader, { 'bosdyn:channel': channel })).readSamples(0))[1];
    // A sample for each dimension (a [3] series was read as [[1], [2], [3]]).
    assert.deepStrictEqual(await read('vec3'), [
      [1, 2, 3],
      [4, 5, 6],
    ]);
    assert.deepStrictEqual(await read('mat'), [
      [
        [1, 2],
        [3, 4],
      ],
    ]);
    assert.deepStrictEqual(await read('u64'), [2n ** 64n - 1n, 5n]);
    assert.deepStrictEqual((await reader.seriesDescriptor(4)).getPodType().getDimensionList(), []);
    await reader.close();
  } finally {
    fs.rmSync(filename, { force: true });
  }
});

test('BDDF readers: concurrent reads, protobuf of any type (only protobuf series, all the messages), gRPC logs', async () => {
  const request = new robotIdPb.RobotIdRequest().setHeader(
    new headerPb.RequestHeader().setClientName('test').setRequestTimestamp(timestamp(100)),
  );
  const filename = await writeBddf('readers', writer => {
    const text = writer.addMessageSeries('bosdyn:channel', { 'bosdyn:channel': 'notes' }, 'text/plain', 'txt');
    for (let i = 0; i < 3; i++) writer.writeData(text, BDDF_TS + BigInt(i), Buffer.from(`note ${i}`));
    // A type out of bosdyn.api (its name was null).
    const times = new ProtobufSeriesWriter(writer, Timestamp);
    times.write(BDDF_TS, new Timestamp().setSeconds(1));
    times.write(BDDF_TS + 5n, new Timestamp().setSeconds(2));
    new GrpcServiceWriter(writer, 'robot-id').logRequest(request);
  });
  try {
    const reader = await DataReader.create({ filename });
    // The reads at positions wait for each other (they moved the position of each other).
    const blocks = await Promise.all([0, 1, 2, 1, 0].map(i => reader.read(0, i)));
    assert.deepStrictEqual(
      blocks.map(([, , data]) => Buffer.from(data).toString()),
      ['note 0', 'note 1', 'note 2', 'note 1', 'note 0'],
    );

    // Only the protobuf series of a channel (a text/plain series was deserialized as protobuf); the gRPC logs have
    // no channel, like in Python.
    const protobufs = await ProtobufReader.create(reader);
    assert.deepStrictEqual(Object.keys(protobufs.channelNameToSeriesDescriptor), ['google.protobuf.Timestamp']);
    const channel = await ProtobufChannelReader.create(protobufs, Timestamp);
    const messages = [];
    // All the messages (the iterator gave the first one only).
    for await (const [nsec, message] of channel) messages.push([nsec, message.getSeconds()]);
    assert.deepStrictEqual(messages, [
      [BDDF_TS, 1],
      [BDDF_TS + 5n, 2],
    ]);
    assert.strictEqual((await channel.seriesDescriptor).getMessageType().getTypeName(), 'google.protobuf.Timestamp');

    // The readers are found by type name (they were under 'null'), a missing class is skipped.
    const grpcReader = await GrpcReader.create(reader, [robotIdPb.RobotIdRequest]);
    const [nsec, logged] = await grpcReader.getProtoReader('bosdyn.api.RobotIdRequest').getMessage(0);
    assert.deepStrictEqual([nsec, logged.getHeader().getClientName()], [100_000_000_000n, 'test']);
    assert.strictEqual((await GrpcReader.create(reader, [])).getProtoReader('bosdyn.api.RobotIdRequest'), undefined);
    await reader.close();
  } finally {
    fs.rmSync(filename, { force: true });
  }
});

test('StreamDataReader reads a Readable, with the offsets of the blocks (the offset and the size were swapped)', async () => {
  const filename = await writeBddf('stream', writer => {
    const series = writer.addMessageSeries('bosdyn:channel', { 'bosdyn:channel': 'a' }, 'text/plain', 'txt');
    writer.writeData(series, BDDF_TS, Buffer.from('first block'));
    writer.writeData(series, BDDF_TS + 1n, Buffer.from('second'));
  });
  try {
    const indexed = await DataReader.create({ filename });
    const expected = (await indexed.seriesBlockIndex(0)).getBlockEntriesList().map(entry => entry.getFileOffset());
    await indexed.close();

    const stream = await StreamDataReader.create({ infile: fs.createReadStream(filename, { highWaterMark: 7 }) });
    const texts = [];
    await assert.rejects(async () => {
      for (;;) texts.push(Buffer.from((await stream.readDataBlock())[2]).toString());
    }, EOFError);
    assert.deepStrictEqual(texts, ['first block', 'second']);
    assert.deepStrictEqual(
      stream
        .seriesBlockIndex(0)
        .getBlockEntriesList()
        .map(entry => entry.getFileOffset()),
      expected,
    );
    assert.strictEqual(stream.seriesBlockIndex(0).getTotalBytes(), 17);
    assert.ok(stream.checksum.equals(stream.readChecksum));
    await stream.close();
  } finally {
    fs.rmSync(filename, { force: true });
  }
});

test('BDDF errors: a stream error is thrown (it crashed the process), EOFError and DataError, closed FileHandles', async () => {
  // A disk full: the error of the stream rejects close() instead of an uncaught exception.
  const failing = new Writable({
    write(chunk, encoding, callback) {
      callback(Object.assign(new Error('ENOSPC: no space left on device'), { code: 'ENOSPC' }));
    },
  });
  const writer = new DataWriter(failing, { robot: 'spot' });
  const series = writer.addMessageSeries('bosdyn:channel', { 'bosdyn:channel': 'a' }, 'text/plain', 'txt');
  await sleep(10);
  assert.throws(() => writer.writeData(series, BDDF_TS, Buffer.from('x')), /ENOSPC/);
  await assert.rejects(writer.close(), /ENOSPC/);

  // drain() waits for the buffered data of the stream (the writes do not wait).
  let pending = null;
  const slow = new Writable({
    highWaterMark: 16,
    write(chunk, encoding, callback) {
      pending = callback;
    },
  });
  const buffered = new DataWriter(slow, { robot: 'spot' });
  let drained = false;
  const drain = buffered.drain().then(() => {
    drained = true;
  });
  await sleep(10);
  assert.strictEqual(drained, false);
  // drained is set by the drain promise.
  // eslint-disable-next-line no-unmodified-loop-condition
  while (!drained) {
    // The next write can start in the callback: pending is taken before.
    const resume = pending;
    pending = null;
    resume?.();
    await sleep(1);
  }
  await drain;

  // The errors of Python: EOFError at the end, ParseError & co. are DataErrors.
  assert.ok(new BddfParseError('x') instanceof DataError && new DataFormatError('x') instanceof DataError);
  const filename = path.join(os.tmpdir(), `bosdyn-regression-${process.pid}-bad.bddf`);
  fs.writeFileSync(filename, 'BDDF');
  try {
    await assert.rejects(DataReader.create({ filename }), EOFError);
    fs.writeFileSync(filename, 'NOPE and more bytes');
    await assert.rejects(DataReader.create({ filename }), BddfParseError);
    // The FileHandles opened by the readers are closed (no DEP0137 warning, and the file can be removed).
  } finally {
    fs.rmSync(filename, { force: true });
  }
});

// ---------------------------------------------------------------------------------------------------------------
// Access controlled doors (url_validation_util was missing: safeApiCall was not defined).
// ---------------------------------------------------------------------------------------------------------------

test('doorAction() runs the calls of an action with the stored responses ($variable, headers, errors)', async () => {
  // Like string.Template.safe_substitute() in Python.
  // eslint-disable-next-line no-template-curly-in-string
  assert.strictEqual(safeSubstitute('$a-${b}-$$-$c-${d', { a: 1, b: 'x' }), '1-x-$-$c-${d');

  const requests = [];
  const server = http.createServer((request, response) => {
    let body = '';
    request.on('data', chunk => (body += chunk));
    request.on('end', () => {
      requests.push({ method: request.method, url: request.url, headers: request.headers, body });
      if (request.url === '/auth') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ data: { token: 'secret' } }));
      } else if (request.url === '/old/door-7/open') {
        // A redirection is followed, after the validation of its URL.
        response.writeHead(307, { Location: '/doors/door-7/open' });
        response.end();
      } else if (request.url === '/doors/door-7/open') {
        response.writeHead(request.headers.authorization === 'Bearer secret' ? 200 : 403);
        response.end();
      } else if (request.url === '/text') {
        response.writeHead(200);
        response.end('not json');
      } else {
        response.writeHead(403);
        response.end();
      }
    });
  });
  await new Promise(resolve => {
    server.listen(0, '127.0.0.1', resolve);
  });
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const apiCalls = [
      {
        action: 'open',
        method: 'POST',
        url: `${base}/auth`,
        request_data: { json: { key: 'value' } },
        responses: { auth_token: 'data.token' },
      },
      {
        action: 'open',
        method: 'POST',
        url: `${base}/old/$door_id/open`,
        // A variable of the actions of Python (string.Template).
        // eslint-disable-next-line no-template-curly-in-string
        request_data: { headers: { Authorization: 'Bearer ${auth_token}' } },
      },
      { action: 'close', method: 'POST', url: `${base}/doors/$door_id/close` },
    ];
    assert.deepStrictEqual(await doorAction(apiCalls, 'door-7', ['open']), {});
    assert.deepStrictEqual(
      requests.map(({ method, url }) => `${method} ${url}`),
      ['POST /auth', 'POST /old/door-7/open', 'POST /doors/door-7/open'],
    );
    assert.strictEqual(requests[0].body, '{"key":"value"}');
    assert.strictEqual(requests[2].headers.authorization, 'Bearer secret');

    // The error of the action.
    const error = await doorAction(apiCalls, 'door-7', ['close']);
    assert.deepStrictEqual(
      [error.action, error.apiError.statusCode, error.apiError.reason],
      ['close', 403, 'Forbidden'],
    );
    // A call without URL.
    assert.deepStrictEqual(await doorAction([{ action: 'open', method: 'GET' }], 'door-7', ['open']), {
      extraMessage: 'API call error: missing method or url',
    });
    // No response to store (an empty object, falsy in Python): the empty body is not parsed.
    const noStore = [{ action: 'open', method: 'POST', url: `${base}/auth`, responses: {} }];
    assert.deepStrictEqual(await doorAction(noStore, 'door-7', ['open']), {});
    // A body which is not JSON: the JSONDecodeError of Python, without response.
    const notJson = await doorAction(
      [{ action: 'open', method: 'GET', url: `${base}/text`, responses: { token: 'data.token' } }],
      'door-7',
      ['open'],
    );
    assert.deepStrictEqual(
      [notJson.action, notJson.apiError.statusCode, notJson.apiError.elapsed],
      ['open', null, null],
    );
    assert.match(notJson.apiError.reason, /JSON/);
  } finally {
    await new Promise(resolve => {
      server.close(resolve);
    });
  }
});

test('safeApiCall() sends the SNI host name (TLS and Host), checks the certificate, reports the errors of Python', async () => {
  // A self-signed certificate of robot.test (openssl), which is its own CA.
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'bosdyn-door-'));
  const [key, cert] = [path.join(directory, 'key.pem'), path.join(directory, 'cert.pem')];
  const subject = ['-subj', '/CN=robot.test', '-addext', 'subjectAltName=DNS:robot.test'];
  const openssl = spawnSync(
    'openssl',
    [
      'req',
      '-x509',
      '-newkey',
      'ec',
      '-pkeyopt',
      'ec_paramgen_curve:prime256v1',
      '-nodes',
      '-days',
      '1',
      '-keyout',
      key,
    ].concat(['-out', cert], subject),
    { encoding: 'utf8', timeout: 30_000 },
  );
  if (openssl.error || openssl.status !== 0) {
    fs.rmSync(directory, { recursive: true, force: true });
    return;
  }
  const seen = [];
  const https_ = https.createServer({ key: fs.readFileSync(key), cert: fs.readFileSync(cert) }, (request, response) => {
    seen.push([request.socket.servername, request.headers.host]);
    response.end('ok');
  });
  await new Promise(resolve => {
    https_.listen(0, '127.0.0.1', resolve);
  });
  const close = () =>
    new Promise(resolve => {
      https_.close(resolve);
    });
  const server = { port: https_.address().port, cert, close };
  try {
    const url = `https://127.0.0.1:${server.port}/status`;
    // The certificate of robot.test is checked with its CA (here, itself).
    const [response, status] = await safeApiCall('GET', url, 'robot.test', 5, true, null, { verify: server.cert });
    assert.deepStrictEqual([response.statusCode, response.text, status.startsWith('Validation of')], [200, 'ok', true]);
    assert.deepStrictEqual(seen[0], ['robot.test', 'robot.test']);
    // An unknown certificate, or another host name.
    const errors = await Promise.all([
      safeApiCall('GET', url, 'robot.test', 5),
      safeApiCall('GET', url, 'other.test', 5, true, null, { verify: server.cert }),
    ]);
    for (const [none, message] of errors) {
      assert.deepStrictEqual(
        [none, message],
        [null, 'SSL error occurred. Please upload server SSL certificate to robot.'],
      );
    }
    assert.deepStrictEqual(await safeApiCall('GET', 'nope', null, 5), [null, 'Invalid URL format: nope']);
  } finally {
    await server.close();
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

// ---------------------------------------------------------------------------------------------------------------
// Payload service clients over gRPC: network compute bridge, area callbacks, software update.
// ---------------------------------------------------------------------------------------------------------------

/** Asserts that the promise rejects with an instance of the error class, which must be exported. */
async function rejectsWith(promise, ErrorClass) {
  assert.strictEqual(typeof ErrorClass, 'function', 'the error class is not exported');
  await assert.rejects(promise, error => error instanceof ErrorClass || assert.fail(String(error)));
}

test('NetworkComputeBridgeClient returns the responses (each one threw a TypeError), and maps the errors', async () => {
  const Status = networkComputeBridgePb.NetworkComputeStatus;
  let status = null;
  const server = await startGrpcServer(networkComputeBridgeServiceGrpcPb.NetworkComputeBridgeService, {
    networkCompute(call, callback) {
      callback(null, new networkComputeBridgePb.NetworkComputeResponse().setHeader(okHeader()).setStatus(status));
    },
    listAvailableModels(call, callback) {
      callback(
        null,
        new networkComputeBridgePb.ListAvailableModelsResponse()
          .setHeader(okHeader())
          .setStatus(networkComputeBridgePb.ListAvailableModelsStatus.LIST_AVAILABLE_MODELS_STATUS_SUCCESS),
      );
    },
  });
  try {
    const client = server.connect(new networkComputeBridgeClient.NetworkComputeBridgeClient());
    const compute = () => client.networkComputeBridgeCommand(new networkComputeBridgePb.NetworkComputeRequest());
    status = Status.NETWORK_COMPUTE_STATUS_SUCCESS;
    assert.strictEqual((await compute()).getStatus(), status);
    status = Status.NETWORK_COMPUTE_STATUS_CUSTOM_PARAMS_ERROR;
    await rejectsWith(compute(), CustomParamError);
    status = Status.NETWORK_COMPUTE_STATUS_ROTATION_ERROR;
    await rejectsWith(compute(), networkComputeBridgeClient.NetworkComputeRotationError);
    status = Status.NETWORK_COMPUTE_STATUS_EXTERNAL_SERVICE_NOT_FOUND;
    await rejectsWith(compute(), networkComputeBridgeClient.ExternalServiceNotFoundError);
    await client.listAvailableModels('my-model-server');
  } finally {
    await server.close();
  }
});

test('AreaCallbackClient.beginControl() works (misspelled, it threw on STATUS_OK), and beginCallback() gives its errors', async () => {
  const statuses = {};
  const server = await startGrpcServer(areaCallbackServiceGrpcPb.AreaCallbackServiceService, {
    beginCallback(call, callback) {
      callback(null, new areaCallbackPb.BeginCallbackResponse().setHeader(okHeader()).setStatus(statuses.callback));
    },
    beginControl(call, callback) {
      callback(null, new areaCallbackPb.BeginControlResponse().setHeader(okHeader()).setStatus(statuses.control));
    },
  });
  try {
    const client = server.connect(new areaCallbackClient.AreaCallbackClient());
    const Control = areaCallbackPb.BeginControlResponse.Status;
    const Callback = areaCallbackPb.BeginCallbackResponse.Status;
    const beginControl = () => client.beginControl(new areaCallbackPb.BeginControlRequest());
    const beginCallback = () => client.beginCallback(new areaCallbackPb.BeginCallbackRequest());

    statuses.control = Control.STATUS_OK;
    assert.strictEqual((await beginControl()).getStatus(), Control.STATUS_OK);
    statuses.control = Control.STATUS_MISSING_LEASE_RESOURCES;
    await rejectsWith(beginControl(), areaCallbackClient.MissingLeaseResourcesError);
    statuses.control = Control.STATUS_INVALID_COMMAND_ID;
    await rejectsWith(beginControl(), areaCallbackClient.InvalidCommandIdError);

    // The begin control statuses were written in the begin callback table.
    statuses.callback = Callback.STATUS_OK;
    assert.strictEqual((await beginCallback()).getStatus(), Callback.STATUS_OK);
    statuses.callback = Callback.STATUS_INVALID_CONFIGURATION;
    await rejectsWith(beginCallback(), areaCallbackClient.InvalidConfigError);
    statuses.callback = Callback.STATUS_EXPIRED_END_TIME;
    await rejectsWith(beginCallback(), areaCallbackClient.ExpiredEndTimeError);
    statuses.callback = Callback.STATUS_CUSTOM_PARAMS_ERROR;
    await rejectsWith(beginCallback(), CustomParamError);
  } finally {
    await server.close();
  }
});

test('PayloadSoftwareUpdate sends its requests (it sent their sub-messages, and lost the build id)', async () => {
  const received = {};
  const respond = (name, Response) => (call, callback) => {
    received[name] = call.request;
    callback(null, new Response().setHeader(okHeader()));
  };
  const server = await startGrpcServer(payloadSoftwareUpdateServiceGrpcPb.PayloadSoftwareUpdateServiceService, {
    sendCurrentVersionInfo: respond('info', payloadSoftwareUpdatePb.SendCurrentVersionInfoResponse),
    getAvailableSoftwareUpdates: respond('query', payloadSoftwareUpdatePb.GetAvailableSoftwareUpdatesResponse),
    sendSoftwareUpdateStatus: respond('status', payloadSoftwareUpdatePb.SendSoftwareUpdateStatusResponse),
  });
  try {
    const client = server.connect(new PayloadSoftwareUpdate());
    // Seconds since the epoch, like the Python float.
    await client.sendCurrentSoftwareInfo('coreio', [3, 2, 1], 1_700_000_000.5, 'build-42');
    const info = received.info.getPackageVersion();
    const version = info.getVersion();
    assert.deepStrictEqual(
      [info.getPackageName(), version.getMajorVersion(), version.getMinorVersion(), version.getPatchLevel()],
      ['coreio', 3, 2, 1],
    );
    assert.deepStrictEqual(
      [info.getReleaseDate().getSeconds(), info.getReleaseDate().getNanos()],
      [1_700_000_000, 5e8],
    );
    assert.strictEqual(info.getBuildId(), 'build-42');

    const date = new Date(Date.UTC(2024, 0, 2));
    await client.sendCurrentSoftwareInfo('coreio', new robotIdPb.SoftwareVersion().setMajorVersion(4), date, 'b');
    assert.strictEqual(received.info.getPackageVersion().getReleaseDate().getSeconds(), date.getTime() / 1000);
    assert.strictEqual(received.info.getPackageVersion().getVersion().getMajorVersion(), 4);

    await client.getAvailableUpdates('coreio');
    assert.deepStrictEqual(received.query.getPackageNamesList(), ['coreio']);

    const { Status, ErrorCode } = softwarePackagePb.SoftwareUpdateStatus;
    await client.sendInstallationStatus('coreio', Status.STATUS_INSTALLING, ErrorCode.ERROR_NONE);
    const status = received.status.getUpdateStatus();
    assert.deepStrictEqual(
      [status.getPackageName(), status.getStatus(), status.getErrorCode()],
      ['coreio', Status.STATUS_INSTALLING, ErrorCode.ERROR_NONE],
    );
  } finally {
    await server.close();
  }
  // The name of the Python client.
  assert.strictEqual(PayloadSoftwareUpdateClient, PayloadSoftwareUpdate);
});

// ---------------------------------------------------------------------------------------------------------------
// Python SDK 5.2.0: its changes since 5.1.4.
// ---------------------------------------------------------------------------------------------------------------

test('5.2.0: AddRequestHeader completes the header of the request (it replaced it: disable_rpc_logging was lost)', () => {
  const { AddRequestHeader } = require('../src/bosdyn-client/processors');
  const processor = new AddRequestHeader(() => 'my-client');
  const request = new robotIdPb.RobotIdRequest().setHeader(new headerPb.RequestHeader().setDisableRpcLogging(true));
  processor.mutate(request);
  assert.strictEqual(request.getHeader().getDisableRpcLogging(), true);
  assert.strictEqual(request.getHeader().getClientName(), 'my-client');
  assert.ok(Math.abs(request.getHeader().getRequestTimestamp().getSeconds() - nowSec()) < 5);
  // A request without header gets one, a message without header field is left alone.
  const bare = new robotIdPb.RobotIdRequest();
  processor.mutate(bare);
  assert.strictEqual(bare.getHeader().getClientName(), 'my-client');
  const other = new Timestamp().setSeconds(5);
  processor.mutate(other);
  assert.deepStrictEqual(other.toObject(), { seconds: 5, nanos: 0 });
});

test('5.2.0: ConnectionResetError and InternalDeserializationError (grpc-js words included)', () => {
  const reset = translateException({ code: grpc.status.UNAVAILABLE, details: 'Connection reset by peer' });
  assert.ok(reset instanceof exceptions.ConnectionResetError);
  assert.ok(reset instanceof exceptions.RetryableUnavailableError);
  for (const details of ['Exception deserializing response!', 'Response message parsing error: Assertion failed']) {
    const error = translateException({ code: grpc.status.INTERNAL, details });
    assert.ok(error instanceof exceptions.InternalDeserializationError, details);
    assert.ok(error instanceof exceptions.RetryableUnavailableError);
    assert.match(error.message, /retrying the RPC should succeed/);
  }
});

test('5.2.0: a response that cannot be parsed gives the client a new channel', async () => {
  const { RobotIdServiceService } = require('../src/bosdyn/api/robot_id_service_grpc_pb');
  const { RobotIdClient } = require('../src/bosdyn-client/robot_id');
  // The responses of this server are not RobotIdResponse messages.
  const service = {
    getRobotId: { ...RobotIdServiceService.getRobotId, responseSerialize: () => Buffer.from([0x0a, 0x05, 0x01]) },
  };
  const server = await startGrpcServer(service, {
    getRobotId: (call, callback) => callback(null, new robotIdPb.RobotIdResponse()),
  });
  const channels = [];
  try {
    const client = server.connect(new RobotIdClient());
    client._channelResetFn = async () => {
      channels.push(new grpc.Channel(`127.0.0.1:${server.port}`, grpc.credentials.createInsecure(), {}));
      return channels.at(-1);
    };
    await assert.rejects(client.getId(), exceptions.InternalDeserializationError);
    assert.strictEqual(channels.length, 1);
    assert.strictEqual(client.channel, channels[0]);
    // A client without reset function (not made by a robot) keeps its channel.
    const alone = server.connect(new RobotIdClient());
    const { channel } = alone;
    await assert.rejects(alone.getId(), exceptions.InternalDeserializationError);
    assert.strictEqual(alone.channel, channel);
  } finally {
    channels.forEach(channel => channel.close());
    await server.close();
  }
});

test('5.2.0: the clients of a robot get a new channel of their service, the client is created again', async () => {
  const robot = new Robot('test');
  const logs = [];
  robot.logger = { info: message => logs.push(message), debug() {}, warn() {} };
  let created = 0;
  robot.ensureSecureChannel = authority => {
    robot.channelsByAuthority[authority] ??= { authority, id: ++created };
    return robot.channelsByAuthority[authority];
  };
  class ClientMock {
    updateFrom() {}
  }
  robot.serviceTypeByName.mock = 'MockType';
  robot.serviceClientFactoriesByType.MockType = ClientMock;
  robot.authoritiesByName.mock = 'mock.spot.robot';
  const client = await robot.ensureClient('mock');
  assert.strictEqual(client.channel.id, 1);
  const channel = await client._channelResetFn();
  assert.strictEqual(channel.id, 2);
  assert.strictEqual(robot.channelsByAuthority['mock.spot.robot'], channel);
  assert.deepStrictEqual(logs, ['Evicted secure channel for service mock (authority=mock.spot.robot)']);
  assert.notStrictEqual(await robot.ensureClient('mock'), client);
  // Like Python, the channels of the bootstrap services (not in authoritiesByName) are kept.
  const idChannel = await robot.ensureChannel('robot-id');
  assert.strictEqual(await robot._makeChannelResetFn('robot-id')(), idChannel);
});

test('5.2.0: an animation rejected while the robot dances is an AnimationRejectedDanceActiveError', async () => {
  const { AnimationRejectedDanceActiveError } = require('../src/bosdyn-choreography-client/choreography');
  const { Status } = choreographySequencePb.UploadAnimatedMoveResponse;
  const server = await startGrpcServer(choreographyServiceGrpcPb.ChoreographyServiceService, {
    uploadAnimatedMove: (call, callback) =>
      callback(
        null,
        new choreographySequencePb.UploadAnimatedMoveResponse()
          .setHeader(okHeader())
          .setStatus(Status.STATUS_REJECTED_DANCE_ACTIVE),
      ),
  });
  try {
    const client = server.connect(new ChoreographyClient());
    await assert.rejects(
      client.uploadAnimatedMove(new choreographySequencePb.Animation().setName('wave')),
      error => error instanceof AnimationRejectedDanceActiveError && /actively dancing/.test(error.message),
    );
  } finally {
    await server.close();
  }
});

test('5.2.0: setSystemParams() disables the automatic gain control and the noise reduction of the speaker', async () => {
  const client = new AudioVisualClient();
  const sent = [];
  client._stub = {
    setSystemParams: unaryMethod('/bosdyn.api.AudioVisualService/SetSystemParams', request => {
      sent.push(request);
      return new avPb.SetSystemParamsResponse().setHeader(okHeader());
    }),
  };
  await client.setSystemParams({ speakerDisableAgc: true, speakerDisableNr: false });
  await client.setSystemParams({ enabled: true });
  assert.deepStrictEqual(
    [sent[0].getSpeakerDisableAgc().getValue(), sent[0].getSpeakerDisableNr().getValue()],
    [true, false],
  );
  assert.deepStrictEqual([sent[1].hasSpeakerDisableAgc(), sent[1].hasSpeakerDisableNr()], [false, false]);
});

test('5.2.0: armJointMoveHelper() sets the tracking mode (TRACKING_MODE_DEFAULT by default)', () => {
  const { TrackingMode } = armCommandPb;
  const trackingMode = command =>
    command.getSynchronizedCommand().getArmCommand().getArmJointMoveCommand().getTrackingMode();
  const positions = [[0, 0, 0, 0, 0, 0]];
  assert.strictEqual(
    trackingMode(RobotCommandBuilder.armJointMoveHelper(positions, [1])),
    TrackingMode.TRACKING_MODE_DEFAULT,
  );
  const slow = RobotCommandBuilder.armJointMoveHelper(
    positions,
    [1],
    null,
    null,
    null,
    null,
    null,
    TrackingMode.TRACKING_MODE_SLOW_PRECISE,
  );
  assert.strictEqual(trackingMode(slow), TrackingMode.TRACKING_MODE_SLOW_PRECISE);
});

test('5.2.0: the Timestamp variables of the missions are TYPE_TIMESTAMP (messages packed in an Any before)', () => {
  const { ConstantValue, VariableDeclaration } = missionUtilPb;
  const stamp = new Timestamp().setSeconds(1700000000).setNanos(5);
  assert.strictEqual(jsTypeToPbType(stamp), VariableDeclaration.Type.TYPE_TIMESTAMP);
  const value = jsVarToValue(stamp);
  assert.strictEqual(value.getValueCase(), ConstantValue.ValueCase.TIMESTAMP_VALUE);
  // A copy, like CopyFrom().
  stamp.setSeconds(1);
  assert.deepStrictEqual(getValueFromConstantValueMessage(value).toObject(), { seconds: 1700000000, nanos: 5 });
  const list = jsVarToValue([stamp]).getListValue().getValuesList();
  assert.strictEqual(list[0].getValueCase(), ConstantValue.ValueCase.TIMESTAMP_VALUE);
});

test('5.2.0: downloadToDisk() and uploadFromDisk() keep a graph and its snapshots in the standard layout', async () => {
  const { downloadToDisk } = require('../src/bosdyn-client/graph_nav_download');
  const { uploadFromDisk } = require('../src/bosdyn-client/graph_nav_upload');
  const pointCloudPb = require('../src/bosdyn/api/point_cloud_pb');
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'bosdyn-graph-'));
  const map = path.join(directory, 'map');
  // Waypoint snapshots of 7 MB: two of them in a batch of 16 MB.
  const snapshot = id =>
    new mapPb.WaypointSnapshot()
      .setId(id)
      .setPointCloud(new pointCloudPb.PointCloud().setData(Buffer.alloc(7 * 1024 * 1024, 1)));
  const graph = new mapPb.Graph()
    .setWaypointsList(['w1', 'w2', 'w3', ''].map(id => new mapPb.Waypoint().setId(`waypoint ${id}`).setSnapshotId(id)))
    .setEdgesList([new mapPb.Edge().setSnapshotId('e1')]);
  const downloads = [];
  const source = {
    async downloadGraph() {
      downloads.push('graph');
      return graph;
    },
    async downloadWaypointSnapshot(id) {
      downloads.push(id);
      return snapshot(id);
    },
    async downloadEdgeSnapshot(id) {
      downloads.push(id);
      return new mapPb.EdgeSnapshot().setId(id);
    },
  };
  const uploads = [];
  const target = {
    async uploadGraph(lease, uploaded, generateNewAnchoring, replaceGraph) {
      uploads.push(['graph', uploaded.getWaypointsList().length, replaceGraph]);
      return new graphNavPb.UploadGraphResponse()
        .setUnknownWaypointSnapshotIdsList(['w1', 'w2', 'w3'])
        .setUnknownEdgeSnapshotIdsList(['e1']);
    },
    async uploadSnapshots(snapshots) {
      uploads.push([
        snapshots.getWaypointSnapshotsList().map(s => s.getId()),
        snapshots.getEdgeSnapshotsList().map(s => s.getId()),
      ]);
    },
  };
  try {
    await downloadToDisk(source, map);
    assert.deepStrictEqual(downloads, ['graph', 'w1', 'w2', 'w3', 'e1']);
    assert.deepStrictEqual(fs.readdirSync(path.join(map, 'waypoint_snapshots')).sort(), ['w1', 'w2', 'w3']);
    assert.deepStrictEqual(fs.readdirSync(path.join(map, 'edge_snapshots')), ['e1']);
    // The snapshots already there are not downloaded again, unless asked.
    await downloadToDisk(source, map);
    await downloadToDisk(source, map, false);
    assert.deepStrictEqual(downloads.slice(5), ['graph', 'graph', 'w1', 'w2', 'w3', 'e1']);

    await uploadFromDisk(target, map);
    assert.deepStrictEqual(uploads, [
      ['graph', 4, true],
      [['w1', 'w2'], []],
      [['w3'], []],
      [[], ['e1']],
    ]);
    // Another graph file, relative to the directory or absolute (the snapshots stay in the directory).
    fs.renameSync(path.join(map, 'graph'), path.join(map, 'other'));
    await uploadFromDisk(target, map, 'other');
    fs.renameSync(path.join(map, 'other'), path.join(directory, 'elsewhere'));
    await uploadFromDisk(target, map, path.join(directory, 'elsewhere'));
    assert.deepStrictEqual(uploads.filter(upload => upload[0] === 'graph').length, 3);
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

test('5.2.0: DataAcquisitionStoreHelper passes the RPC options of storeDataAsChunks() and storeFile()', async () => {
  const { DataAcquisitionStoreHelper } = require('../src/bosdyn-client/data_acquisition_plugin_service');
  const calls = [];
  const storeClient = {
    async storeDataAsChunks(data, dataId, fileExtension, args) {
      calls.push(['chunks', fileExtension, args]);
    },
    async storeFile(filePath, dataId, fileExtension, args) {
      calls.push(['file', fileExtension, args]);
    },
  };
  const helper = new DataAcquisitionStoreHelper(storeClient, {});
  const dataId = new dataAcquisitionPb.DataIdentifier();
  helper.storeDataAsChunks(Buffer.from('data'), dataId, '.bin', { timeout: 1234 });
  helper.storeFile('capture.bin', dataId, null, { timeout: 5678 });
  await Promise.all(helper.dataIdPromisePairs.map(([, result]) => result));
  assert.deepStrictEqual(calls, [
    ['chunks', '.bin', { timeout: 1234 }],
    ['file', null, { timeout: 5678 }],
  ]);
});

test('5.2.0: setProcessName() names the process, except on Windows like Python', () => {
  const { setProcessName } = require('../src/bosdyn-core/util');
  const { title } = process;
  try {
    setProcessName('bosdyn-test');
    assert.strictEqual(process.title, process.platform === 'win32' ? title : 'bosdyn-test');
  } finally {
    if (process.title !== title) process.title = title;
  }
});

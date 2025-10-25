'use strict';

const { __exportStar } = require('tslib');

const {
  AuthClient,
  AuthResponseError,
  InvalidLoginError,
  InvalidTokenError,
  TemporarilyLockedOutError,
} = require('./bosdyn-client/auth');
const { AutoReturnClient, AutoReturnResponseError, InvalidParameterError } = require('./bosdyn-client/auto_return');
const {
  AutowalkClient,
  AutowalkResponseError,
  CompilationError,
  ValidationError,
} = require('./bosdyn-client/autowalk');
const {
  BaseClient,
  commonHeaderErrors,
  streamingCommonHeaderErrors,
  commonLeaseErrors,
  streamingCommonLeaseErrors,
  customParamsError,
  errorFactory,
  handleCommonHeaderErrors,
  handleCustomParamsErrors,
  handleLeaseUseResultErrors,
  handleUnsetStatusError,
  getSelfIp,
} = require('./bosdyn-client/common');
const { DataAcquisitionPluginClient } = require('./bosdyn-client/data_acquisition_plugin');
const { DataAcquisitionStoreClient } = require('./bosdyn-client/data_acquisition_store');
const {
  RobotError,
  UnregisteredServiceError,
  UnregisteredServiceNameError,
  UnregisteredServiceTypeError,
  Robot,
} = require('./bosdyn-client/robot');
const {
  Sdk,
  SdkError,
  UnsetAppTokenError,
  UnableToLoadAppTokenError,
  createStandardSdk,
  generateClientName,
  BOSDYN_RESOURCE_ROOT,
} = require('./bosdyn-client/sdk');

const { polyfillDispose } = require('./bosdyn-client/util');
polyfillDispose();

// GRPC
exports.alertsPb = require('./bosdyn/api/alerts_pb');
exports.authPb = require('./bosdyn/api/auth_pb');

// Clients
exports.AuthClient = AuthClient;
exports.AutoReturnClient = AutoReturnClient;
exports.AutowalkClient = AutowalkClient;
exports.BaseClient = BaseClient;
exports.DataAcquisitionPluginClient = DataAcquisitionPluginClient;
exports.DataAcquisitionStoreClient = DataAcquisitionStoreClient;
exports.Sdk = Sdk;
exports.Robot = Robot;

// Functions
__exportStar(require('./bosdyn-client/data_acquisition_helpers'), exports);
exports.commonHeaderErrors = commonHeaderErrors;
exports.commonLeaseErrors = commonLeaseErrors;
exports.createStandardSdk = createStandardSdk;
exports.customParamsError = customParamsError;
exports.errorFactory = errorFactory;
exports.generateClientName = generateClientName;
exports.getSelfIp = getSelfIp;
exports.handleCommonHeaderErrors = handleCommonHeaderErrors;
exports.handleCustomParamsErrors = handleCustomParamsErrors;
exports.handleLeaseUseResultErrors = handleLeaseUseResultErrors;
exports.handleUnsetStatusError = handleUnsetStatusError;
exports.streamingCommonHeaderErrors = streamingCommonHeaderErrors;
exports.streamingCommonLeaseErrors = streamingCommonLeaseErrors;

// Constants
exports.BOSDYN_RESOURCE_ROOT = BOSDYN_RESOURCE_ROOT;

// Errors
exports.AuthResponseError = AuthResponseError;
exports.InvalidLoginError = InvalidLoginError;
exports.InvalidTokenError = InvalidTokenError;
exports.TemporarilyLockedOutError = TemporarilyLockedOutError;
exports.AutoReturnResponseError = AutoReturnResponseError;
exports.InvalidParameterError = InvalidParameterError;
exports.AutowalkResponseError = AutowalkResponseError;
exports.CompilationError = CompilationError;
exports.ValidationError = ValidationError;
exports.SdkError = SdkError;
exports.UnsetAppTokenError = UnsetAppTokenError;
exports.UnableToLoadAppTokenError = UnableToLoadAppTokenError;
exports.RobotError = RobotError;
exports.UnregisteredServiceError = UnregisteredServiceError;
exports.UnregisteredServiceNameError = UnregisteredServiceNameError;
exports.UnregisteredServiceTypeError = UnregisteredServiceTypeError;

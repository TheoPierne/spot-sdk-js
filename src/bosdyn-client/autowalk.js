'use strict';

const { BaseClient, errorFactory } = require('./common');
const { chunkMessage } = require('./data_chunk');
const { ResponseError } = require('./exceptions');
const { addLeaseWalletProcessors } = require('./lease');
const { DefaultDict } = require('./util');

const autowalkPb = require('../bosdyn/api/autowalk/autowalk_pb');
const { AutowalkServiceClient } = require('../bosdyn/api/autowalk/autowalk_service_grpc_pb');

class AutowalkResponseError extends ResponseError {}
class CompilationError extends AutowalkResponseError {}
class ValidationError extends AutowalkResponseError {}

/**
 * Client for the Autowalk service.
 * @extends {BaseClient<AutowalkServiceClient>}
 */
class AutowalkClient extends BaseClient {
  static defaultServiceName = 'autowalk-service';
  static serviceType = 'bosdyn.api.autowalk.AutowalkService';

  constructor() {
    super(AutowalkServiceClient);
  }

  /**
   * Update instance from another object.
   * @param {Object} other The object where to copy from.
   */
  updateFrom(other) {
    super.updateFrom(other);
    if (this.leaseWallet) {
      addLeaseWalletProcessors(this, this.leaseWallet);
    }
  }

  /**
   * Send the input walk file to the autowalk service for compilation.
   * @param {walksPb.Walk} walk A walks_pb.Walk input to be compiled by the autowalk service
   * @param {number} dataChunkTypeByte max size of each streamed message
   * @param {Object} args The arguments that can be send with the RPC request
   * @returns {Promise<autowalkPb.CompileAutowalkResponse>}
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {CompilationError} The walk failed to compile because it was malformed.
   * @throws {ValidationError} The walk failed to validate because some part of it was unable to initialize.
   */
  compileAutowalk(walk, dataChunkTypeByte = 1000 * 1000, args) {
    const req = AutowalkClient._compileAutowalkRequest(walk);
    this._applyRequestProcessors(req, false);
    return this.call(
      this._stub.compileAutowalk,
      [...chunkMessage(req, dataChunkTypeByte)],
      null,
      _compileAutowalkErrorFromResponse,
      args,
    );
  }

  /**
   * Send the input walk file to the autowalk service for compilation and
   * load resulting mission to the Mission Service on the robot.
   * @param {walksPb.Walk} walk A walks_pb.Walk input to be loaded onto the robot by the autowalk service
   * @param {Lease[]} leases Leases the autowalk service will need to use. Unlike other clients, these MUST
   * be specified.
   * @param {number} dataChunkByteSize max size of each streamed message
   * @param {Object} args The arguments that can be send with the RPC request
   * @returns {Promise<autowalkPb.LoadAutowalkResponse>}
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {CompilationError} The walk failed to compile because it was malformed.
   * @throws {ValidationError} The walk failed to validate because some part of it was unable to initialize.
   */
  loadAutowalk(walk, leases = [], dataChunkByteSize = 1000 * 1000, args) {
    const req = AutowalkClient._loadAutowalkRequest(walk, leases);
    this._applyRequestProcessors(req, false);
    return this.call(
      this._stub.loadAutowalk,
      [...chunkMessage(req, dataChunkByteSize)],
      null,
      _loadAutowalkErrorFromResponse,
      args,
    );
  }

  /**
   * Compile autowalk request generator
   * @param {autowalkPb.Walk} walk A walks_pb.Walk input to be loaded onto the robot by the autowalk service
   * @private
   * @returns {autowalkPb.CompileAutowalkRequest}
   */
  static _compileAutowalkRequest(walk) {
    return new autowalkPb.CompileAutowalkRequest().setWalk(walk);
  }

  /**
   * Load autowalk request generator
   * @param {autowalkPb.Walk} walk A walks_pb.Walk input to be loaded onto the robot by the autowalk service
   * @param {Lease[]} leases Leases the autowalk service will need to use. Unlike other clients, these MUST
   * be specified.
   * @returns {autowalkPb.LoadAutowalkRequest}
   */
  static _loadAutowalkRequest(walk, leases) {
    const req = new autowalkPb.LoadAutowalkRequest().setWalk(walk);
    for (const lease of leases) {
      req.addLeases(lease.leaseProto);
    }
    return req;
  }
}

const _COMPILE_AUTOWALK_STATUS_TO_ERROR = DefaultDict(() => [AutowalkResponseError, null]);
_COMPILE_AUTOWALK_STATUS_TO_ERROR.set(autowalkPb.CompileAutowalkResponse.Status.STATUS_OK, [null, null]);
_COMPILE_AUTOWALK_STATUS_TO_ERROR.set(autowalkPb.CompileAutowalkResponse.Status.STATUS_COMPILE_ERROR, [
  CompilationError,
  'Provided Walk could not be compiled because the Walk was malformed.',
]);

const _LOAD_AUTOWALK_STATUS_TO_ERROR = DefaultDict(() => [AutowalkResponseError, null]);
_LOAD_AUTOWALK_STATUS_TO_ERROR.set(autowalkPb.LoadAutowalkResponse.Status.STATUS_OK, [null, null]);
_LOAD_AUTOWALK_STATUS_TO_ERROR.set(autowalkPb.LoadAutowalkResponse.Status.STATUS_COMPILE_ERROR, [
  CompilationError,
  'Provided Walk could not be compiled because the Walk was malformed.',
]);
_LOAD_AUTOWALK_STATUS_TO_ERROR.set(autowalkPb.LoadAutowalkResponse.Status.STATUS_VALIDATE_ERROR, [
  ValidationError,
  'Provided Walk could not be validated because some part of the Walk was unable to initialize.',
]);

const _compileAutowalkErrorFromResponse = response =>
  errorFactory(
    response,
    response.getStatus(),
    Object.keys(autowalkPb.CompileAutowalkResponse.Status),
    _COMPILE_AUTOWALK_STATUS_TO_ERROR,
  );

const _loadAutowalkErrorFromResponse = response =>
  errorFactory(
    response,
    response.getStatus(),
    Object.keys(autowalkPb.LoadAutowalkResponse.Status),
    _LOAD_AUTOWALK_STATUS_TO_ERROR,
  );

module.exports = {
  AutowalkClient,
  AutowalkResponseError,
  CompilationError,
  ValidationError,
};

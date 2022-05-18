'use strict';

const compositor_pb = require('../../bosdyn/api/spot_cam/compositor_pb');
const service_grpc_pb = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const { BaseClient } = require('../common');

class CompositorClient extends BaseClient {
  static default_service_name = 'spot-cam-compositor';
  static service_type = 'bosdyn.api.spot_cam.CompositorService';

  constructor() {
    super(service_grpc_pb.CompositorServiceClient);
  }

  set_screen(name, args) {
    const request = new compositor_pb.SetScreenRequest().setName(name);
    return this.call(
      this._stub.setScreen,
      request,
      this._name_from_response,
      this._compositor_error_from_response,
      args,
    );
  }

  set_screen_async(name, args) {
    const request = new compositor_pb.SetScreenRequest({ name: name });
    return this.call_async(
      this._stub.setScreen,
      request,
      this._name_from_response,
      this._compositor_error_from_response,
      args,
    );
  }

  get_screen(args) {
    const request = new compositor_pb.GetScreenRequest();
    return this.call(
      this._stub.getScreen,
      request,
      this._name_from_response,
      this._compositor_error_from_response,
      args,
    );
  }

  get_screen_async(args) {
    const request = new compositor_pb.GetScreenRequest();
    return this.call_async(
      this._stub.getScreen,
      request,
      this._name_from_response,
      this._compositor_error_from_response,
      args,
    );
  }

  list_screens(args) {
    const request = new compositor_pb.ListScreensRequest();
    return this.call(
      this._stub.listScreens,
      request,
      this._screens_from_response,
      this._compositor_error_from_response,
      args,
    );
  }

  list_screens_async(args) {
    const request = new compositor_pb.ListScreensRequest();
    return this.call_async(
      this._stub.listScreens,
      request,
      this._screens_from_response,
      this._compositor_error_from_response,
      args,
    );
  }

  get_visible_cameras(args) {
    const request = new compositor_pb.GetVisibleCamerasRequest();
    return this.call(
      this._stub.getVisibleCameras,
      request,
      this._streams_from_response,
      this._compositor_error_from_response,
      args,
    );
  }

  get_visible_cameras_async(args) {
    const request = new compositor_pb.GetVisibleCamerasRequest();
    return this.call_async(
      this._stub.getVisibleCameras,
      request,
      this._streams_from_response,
      this._compositor_error_from_response,
      args,
    );
  }

  _name_from_response(response) {
    return response.getName();
  }

  _screens_from_response(response) {
    return response.getScreensList();
  }

  _streams_from_response(response) {
    return response.getStreamsList();
  }

  /* eslint-disable no-unused-vars */
  _compositor_error_from_response(response) {
    return null;
  }
  /* eslint-enable no-unused-vars */
}

module.exports = {
  CompositorClient,
};

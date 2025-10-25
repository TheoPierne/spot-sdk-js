'use strict';

const compositorPb = require('../../bosdyn/api/spot_cam/compositor_pb');
const { CompositorServiceClient } = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const { BaseClient, handleCommonHeaderErrors } = require('../common');

/**
 * A client calling Spot CAM Compositor services.
 * @extends {BaseClient<CompositorServiceClient>}
 */
class CompositorClient extends BaseClient {
  static defaultServiceName = 'spot-cam-compositor';
  static serviceType = 'bosdyn.api.spot_cam.CompositorService';

  constructor() {
    super(CompositorServiceClient);
  }

  /**
   * Change the current view that is being streamed over the network
   * @param {string} name The screen name
   * @param {Object} args Extra arguments for controlling RPC details
   * @returns {Promise<string>}
   */
  setScreen(name, args) {
    const request = new compositorPb.SetScreenRequest().setName(name);
    return this.call(this._stub.setScreen, request, this._nameFromResponse, _compositorErrorFromResponse, false, args);
  }

  /**
   * Get the currently selected screen
   * @param {Object} args Extra arguments for controlling RPC details
   * @returns {Promise<string>}
   */
  getScreen(args) {
    const request = new compositorPb.GetScreenRequest();
    return this.call(this._stub.getScreen, request, this._nameFromResponse, _compositorErrorFromResponse, false, args);
  }

  /**
   * List available screens
   * @param {Object} args Extra arguments for controlling RPC details
   * @returns {Promise<compositorPb.ScreenDescription[]>}
   */
  listScreens(args) {
    const request = new compositorPb.ListScreensRequest();
    return this.call(this._stub.listScreens, request, this._screensFromResponse, _compositorErrorFromResponse, false, args);
  }

  /**
   * List cameras on Spot CAM
   * @param {Object} args Extra arguments for controlling RPC details
   * @returns {Promise<compositorPb.GetVisibleCamerasResponse.Stream[]>}
   */
  getVisibleCameras(args) {
    const request = new compositorPb.GetVisibleCamerasRequest();
    return this.call(
      this._stub.getVisibleCameras,
      request,
      this._streamsFromResponse,
      _compositorErrorFromResponse,
      false,
      args,
    );
  }

  /**
   * Set IR colormap to use on Spot CAM
   * @param {compositorPb.IrColorMap.ColorMap} colormap IR display colormap
   * @param {number} minTemp minimum temperature on the temperature scale
   * @param {number} maxTemp maximum temperature on the temperature scale
   * @param {boolean} autoScale Auto-scale the color map. This is the most human-understandable
   * option. minTemp and maxTemp are ignored if this is set to true
   * @param {Object} args Extra arguments for controlling RPC details
   * @returns {Promise<compositorPb.SetIrColormapResponse>}
   */
  setIrColorMap(colormap, minTemp, maxTemp, autoScale, args) {
    const scale = new compositorPb.IrColorMap.ScalingPair().setMin(minTemp).setMax(maxTemp);
    const irColormap = new compositorPb.IrColorMap().setColormap(colormap).setScale(scale).setAutoScale(autoScale);
    const request = new compositorPb.SetIrColormapRequest().setMap(irColormap);
    return this.call(this._stub.setIrColormap, request, this._returnResponse, _compositorErrorFromResponse, false, args);
  }

  /**
   * Get currently selected IR colormap on Spot CAM
   * @param {Object} args Extra arguments for controlling RPC details
   * @returns {Promise<compositorPb.IrColorMap>}
   */
  getIrColormap(args) {
    const request = new compositorPb.GetIrColormapRequest();
    return this.call(this._stub.getIrColormap, request, this._colormapFromResponse, _compositorErrorFromResponse, false, args);
  }

  /**
   * Set IR reticle position to use on Spot CAM IR
   * @param {number} x horizontal coordinate of reticle
   * @param {number} y vertical coordinate of reticle
   * @param {boolean} enable Enable the reticle on the display
   * @param {TempUnit} unit Temperature unit to display
   * @param {Object} args Extra arguments for controlling RPC details
   * @returns {Promise<compositorPb.SetIrMeterOverlayResponse>}
   */
  setIrMeterOverlay(x, y, enable, unit, args) {
    const coords = new compositorPb.IrMeterOverlay.NormalizedCoordinates().setX(x).setY(y);
    const overlay = new compositorPb.IrMeterOverlay()
      .setEnable(enable)
      .setCoords(coords)
      .setMeter([coords])
      .setUnit(unit);
    const request = new compositorPb.SetIrMeterOverlayRequest().setOverlay(overlay);
    return this.call(this._stub.SetIrMeterOverlay, request, this._returnResponse, _compositorErrorFromResponse, false, args);
  }

  /**
   * Set multiple IR reticle positions to use on Spot CAM IR
   * @param {number[]} coords List of [x, y] reticle coordinates in range [0,1]
   * e.g. [[0.1, 0.2], [0.2, 0.4], [0.7, 0.7]]
   * @param {boolean} enable Enable the reticles on the display
   * @param {TempUnit} unit Temperature unit to display
   * @param {Object} args Extra arguments for controlling RPC details
   * @returns {Promise<compositorPb.SetIrMeterOverlayResponse>}
   */
  setMultiIrMeterOverlay(coords, enable, unit, args) {
    const coords_proto = coords.map(coord =>
      new compositorPb.IrMeterOverlay.NormalizedCoordinates().setX(coord.x).setY(coord.y),
    );
    const overlay = new compositorPb.IrMeterOverlay().setEnable(enable).setMeter(coords_proto).setUnit(unit);
    const request = new compositorPb.SetIrMeterOverlayRequest().setOverlay(overlay);
    return this.call(this._stub.SetIrMeterOverlay, request, this._returnResponse, _compositorErrorFromResponse, false, args);
  }

  /**
   * Get current IR reticle positions
   * @param {Object} args Extra arguments for controlling RPC details
   * @returns {Promise<compositorPb.GetIrMeterOverlayResponse>}
   */
  getIrMeterOverlay(args) {
    const request = new compositorPb.GetIrMeterOverlayRequest();
    return this.call(this._stub.GetIrMeterOverlay, request, this._returnResponse, _compositorErrorFromResponse, false, args);
  }

  _returnResponse(response) {
    return response;
  }

  _nameFromResponse(response) {
    return response.getName();
  }

  _screensFromResponse(response) {
    return response.getScreensList();
  }

  _streamsFromResponse(response) {
    return response.getStreamsList();
  }

  _colormapFromResponse(response) {
    return response.getMap();
  }
}

const _compositorErrorFromResponse = handleCommonHeaderErrors(() => null);

module.exports = {
  CompositorClient,
};

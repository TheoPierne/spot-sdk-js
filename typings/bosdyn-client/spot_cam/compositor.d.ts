/**
 * A client calling Spot CAM Compositor services.
 * @extends {BaseClient<CompositorServiceClient>}
 */
export class CompositorClient extends BaseClient<CompositorServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Change the current view that is being streamed over the network
     * @param {string} name The screen name
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<string>}
     */
    setScreen(name: string, args?: Object): Promise<string>;
    /**
     * Get the currently selected screen
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<string>}
     */
    getScreen(args?: Object): Promise<string>;
    /**
     * List available screens
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<compositorPb.ScreenDescription[]>}
     */
    listScreens(args?: Object): Promise<compositorPb.ScreenDescription[]>;
    /**
     * List cameras on Spot CAM
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<compositorPb.GetVisibleCamerasResponse.Stream[]>}
     */
    getVisibleCameras(args?: Object): Promise<compositorPb.GetVisibleCamerasResponse.Stream[]>;
    /**
     * Set IR colormap to use on Spot CAM
     * @param {compositorPb.IrColorMap.ColorMap} colormap IR display colormap
     * @param {number} minTemp minimum temperature on the temperature scale
     * @param {number} maxTemp maximum temperature on the temperature scale
     * @param {boolean} autoScale Auto-scale the color map. This is the most human-understandable
     * option. minTemp and maxTemp are ignored if this is set to true
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<compositorPb.SetIrColormapResponse>}
     */
    setIrColormap(colormap: compositorPb.IrColorMap.ColorMap, minTemp: number, maxTemp: number, autoScale: boolean, args?: Object): Promise<compositorPb.SetIrColormapResponse>;
    /**
     * Set IR colormap to use on Spot CAM
     * @deprecated Use setIrColormap() (like getIrColormap() and Python's set_ir_colormap()).
     */
    setIrColorMap(colormap: any, minTemp: any, maxTemp: any, autoScale: any, args: any): Promise<compositorPb.SetIrColormapResponse>;
    /**
     * Get currently selected IR colormap on Spot CAM
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<compositorPb.IrColorMap>}
     */
    getIrColormap(args?: Object): Promise<compositorPb.IrColorMap>;
    /**
     * Set IR reticle position to use on Spot CAM IR
     * @param {number} x horizontal coordinate of reticle
     * @param {number} y vertical coordinate of reticle
     * @param {boolean} enable Enable the reticle on the display
     * @param {compositorPb.IrMeterOverlay.TempUnit} unit Temperature unit to display
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<compositorPb.SetIrMeterOverlayResponse>}
     */
    setIrMeterOverlay(x: number, y: number, enable: boolean, unit: compositorPb.IrMeterOverlay.TempUnit, args?: Object): Promise<compositorPb.SetIrMeterOverlayResponse>;
    /**
     * Set multiple IR reticle positions to use on Spot CAM IR
     * @param {Array<[number, number]>} coords List of [x, y] reticle coordinates in range [0,1]
     * e.g. [[0.1, 0.2], [0.2, 0.4], [0.7, 0.7]]
     * @param {boolean} enable Enable the reticles on the display
     * @param {compositorPb.IrMeterOverlay.TempUnit} unit Temperature unit to display
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<compositorPb.SetIrMeterOverlayResponse>}
     */
    setMultiIrMeterOverlay(coords: Array<[number, number]>, enable: boolean, unit: compositorPb.IrMeterOverlay.TempUnit, args?: Object): Promise<compositorPb.SetIrMeterOverlayResponse>;
    /**
     * Get current IR reticle positions
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<compositorPb.GetIrMeterOverlayResponse>}
     */
    getIrMeterOverlay(args?: Object): Promise<compositorPb.GetIrMeterOverlayResponse>;
    _returnResponse(response: any): any;
    _nameFromResponse(response: any): any;
    _screensFromResponse(response: any): any;
    _streamsFromResponse(response: any): any;
    _colormapFromResponse(response: any): any;
}
import { CompositorServiceClient } from "../../../src/bosdyn/api/spot_cam/service_grpc_pb";
import { BaseClient } from "../common";
import compositorPb = require("../../../src/bosdyn/api/spot_cam/compositor_pb");

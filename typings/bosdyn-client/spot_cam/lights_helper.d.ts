/**
 * Flashes Spot CAM LEDs between start() and stop(), like the Python context manager:
 *
 *   const lights = new LightsHelper(frequency, brightness);
 *   await lights.init(robot);
 *   lights.start();
 *   // Lights will flash here
 *   await lights.stop();
 *   // Lights are off here.
 */
export class LightsHelper {
    /**
     * @param  {number} frequency The frequency
     * @param  {number} brightness The brightness
     */
    constructor(frequency: number, brightness: number);
    freq: number;
    brightness: number;
    /**
     * The flashing loop, while it runs.
     * @type {?Promise<void>}
     */
    thread: Promise<void> | null;
    stopEvent: Event;
    init(robot: any): Promise<void>;
    /** @type {LightingClient} */
    lightingClient: LightingClient | undefined;
    /**
     * Start flashing the lights (Python's __enter__).
     * @returns {void}
     */
    start(): void;
    /**
     * Stop flashing the lights (Python's __exit__).
     * @returns {Promise<void>} Resolves once the loop has ended and the lights are off, like Python's join().
     */
    stop(): Promise<void>;
    /**
     * Given the threading event, lighting client, desired light frequency and brightness,
     * this helper will blink the Spot CAM lights until threading event is set to stop. This
     * function must be used within a thread to prevent it from running forever.
     * @param {LightingClient} lightingClient Lighting client
     * @param {number} frequency Desired frequency (Hz) for flashing the Spot CAM lights
     * @param {number} brightness Desired brightness [0, 1] for the Spot CAM lights
     */
    setLightsWithFreqAndBrightness(lightingClient: LightingClient, frequency: number, brightness: number): Promise<void>;
    [Symbol.asyncDispose](): Promise<void>;
}
import { Event } from "../../bosdyn-core/event";
import { LightingClient } from "./lighting";

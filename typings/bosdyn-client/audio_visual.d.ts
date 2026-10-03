export type TimeSyncEndpoint = import("./time_sync").TimeSyncEndpoint;
export type ListBehaviorsResponse = import("../../src/bosdyn/api/audio_visual_pb").ListBehaviorsResponse;
export type DeleteBehaviorsResponse = import("../../src/bosdyn/api/audio_visual_pb").DeleteBehaviorsResponse;
/**
 * @typedef {import('../../src/bosdyn/api/audio_visual_pb').DeleteBehaviorsResponse} DeleteBehaviorsResponse
 */
/**
 * Client for calling the Audio Visual Service.
 * @extends {BaseClient<AudioVisualServiceClient>}
 */
export class AudioVisualClient extends BaseClient<AudioVisualServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * @type {import('./time_sync').TimeSyncEndpoint|null}
     */
    _timesyncEndpoint: import("./time_sync").TimeSyncEndpoint | null;
    /**
     * Update instance from another object.
     *
     * @param {import('./robot').Robot} other
     */
    updateFrom(other: import("./robot").Robot): Promise<void>;
    /**
     * Run a behavior on the robot.
     * @param {string} name The name of the behavior to run.
     * @param {number} endTimeSecs The time that this behavior should stop.
     * @param {boolean} restart If this behavior is already running, should we restart it from the beginning.
     * @param {TimeSyncEndpoint} timesyncEndpoint Timesync endpoint.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<RunBehaviorResponse>}
     */
    runBehavior(name: string, endTimeSecs: number, restart?: boolean, timesyncEndpoint?: TimeSyncEndpoint, args?: Object): Promise<RunBehaviorResponse>;
    /**
     * Stop a behavior that is currently running.
     * @param {string} name
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<StopBehaviorResponse>}
     */
    stopBehavior(name: string, args?: Object): Promise<StopBehaviorResponse>;
    /**
     * Add or modify an AudioVisualBehavior.
     * @param {string} name The name of the behavior to add.
     * @param {AudioVisualBehavior} behavior The AudioVisualBehavior proto to add.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<LiveAudioVisualBehavior>}
     */
    addOrModifyBehavior(name: string, behavior: AudioVisualBehavior, args?: Object): Promise<LiveAudioVisualBehavior>;
    /**
     * Delete an AudioVisualBehavior.
     * @param {string[]} behaviorNames A list of behavior names to delete.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<LiveAudioVisualBehavior[]>}
     */
    deleteBehaviors(behaviorNames: string[], args?: Object): Promise<LiveAudioVisualBehavior[]>;
    /**
     * List all currently added AudioVisualBehaviors.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<LiveAudioVisualBehavior[]>}
     */
    listBehaviors(args?: Object): Promise<LiveAudioVisualBehavior[]>;
    /**
     * Get the current system params.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<GetSystemParamsResponse>}
     */
    getSystemParams(args?: Object): Promise<GetSystemParamsResponse>;
    /**
     * Set the system params.
     * The parameters left null are not changed; like Python, false and 0 are values (they were ignored).
     * @param {Object} systemParams
     * @param {boolean} [systemParams.enabled] System is enabled or disabled (boolean).
     * @param {number} [systemParams.maxBrightness] New maxBrightness value [0, 1].
     * @param {number} [systemParams.buzzerMaxVolume] New buzzerMaxVolume value [0, 1].
     * @param {number} [systemParams.speakerMaxVolume] New speakerMaxVolume value [0, 1].
     * @param {PresetColorAssociation|PresetColorAssociation.PredefinedColor} [systemParams.normalColorAssociation] The
     * color to associate with the normal color preset.
     * @param {PresetColorAssociation|PresetColorAssociation.PredefinedColor} [systemParams.warningColorAssociation] The
     * color to associate with the warning color preset.
     * @param {PresetColorAssociation|PresetColorAssociation.PredefinedColor} [systemParams.dangerColorAssociation] The
     * color to associate with the danger color preset.
     * @param {boolean} [systemParams.speakerDisableAgc] Disable automatic gain control on speaker audio (boolean).
     * @param {boolean} [systemParams.speakerDisableNr] Disable noise reduction on speaker audio (boolean).
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<SetSystemParamsResponse>}
     */
    setSystemParams({ enabled, maxBrightness, buzzerMaxVolume, speakerMaxVolume, normalColorAssociation, warningColorAssociation, dangerColorAssociation, speakerDisableAgc, speakerDisableNr, }?: {
        enabled?: boolean | undefined;
        maxBrightness?: number | undefined;
        buzzerMaxVolume?: number | undefined;
        speakerMaxVolume?: number | undefined;
        normalColorAssociation?: PresetColorAssociation | PresetColorAssociation.PredefinedColor | undefined;
        warningColorAssociation?: PresetColorAssociation | PresetColorAssociation.PredefinedColor | undefined;
        dangerColorAssociation?: PresetColorAssociation | PresetColorAssociation.PredefinedColor | undefined;
        speakerDisableAgc?: boolean | undefined;
        speakerDisableNr?: boolean | undefined;
    }, args?: Object): Promise<SetSystemParamsResponse>;
    /**
     * @param {import('google-protobuf/google/protobuf/timestamp_pb').Timestamp} timestamp
     * @param {import('./time_sync').TimeSyncEndpoint} timesyncEndpoint
     * @returns {import('google-protobuf/google/protobuf/timestamp_pb').Timestamp}
     */
    _timestampToRobotTime(timestamp: import("google-protobuf/google/protobuf/timestamp_pb").Timestamp, timesyncEndpoint?: import("./time_sync").TimeSyncEndpoint): import("google-protobuf/google/protobuf/timestamp_pb").Timestamp;
}
/**
 * @typedef {import('./time_sync').TimeSyncEndpoint} TimeSyncEndpoint
 * @typedef {import('../../src/bosdyn/api/audio_visual_pb').ListBehaviorsResponse} ListBehaviorsResponse
 */
/** General class of errors for AudioVisual service. */
export class AudioVisualResponseError extends ResponseError {
}
/** Client has not done timesync with robot. */
export class NoTimeSyncError extends BosdynError {
}
/** The specified behavior does not exist. */
export class DoesNotExistError extends AudioVisualResponseError {
}
/** Permanent behaviors cannot be modified or deleted. */
export class PermanentBehaviorError extends AudioVisualResponseError {
}
/** The specified end_time has already expired. */
export class BehaviorExpiredError extends AudioVisualResponseError {
}
/** The request contained a behavior with invalid fields. */
export class InvalidBehaviorError extends AudioVisualResponseError {
}
/** The behavior cannot be stopped because a different client is running it. */
export class InvalidClientError extends AudioVisualResponseError {
}
/**
 * Clamp and normalize the colors of every LED.
 * @param {LedSequenceGroup} ledSequenceGroup The sequences, modified.
 * @returns {LedSequenceGroup}
 */
export function checkColor(ledSequenceGroup: LedSequenceGroup): LedSequenceGroup;
/**
 * Scale color so that their Euclidean norm does not exceed maxColorManitude.
 *
 * Note : maxColorManitude of 255 (roughly 50% of sqrt(3*255^2)=441.67) is a heuristic chosen to prevent damage to the
 * robot's LEDs.
 *
 * Exceeding this value may result in damage to the robot's LEDs that will NOT be covered under warranty.
 *
 * @param {Color} color
 * @param {number} maxColorManitude
 * @returns {Color}
 */
export function clampAndNormalizeColor(color: Color, maxColorManitude?: number): Color;
import { AudioVisualServiceClient } from "../../src/bosdyn/api/audio_visual_service_grpc_pb";
import { BaseClient } from "./common";
import { RunBehaviorResponse } from "../../src/bosdyn/api/audio_visual_pb";
import { StopBehaviorResponse } from "../../src/bosdyn/api/audio_visual_pb";
import { AudioVisualBehavior } from "../../src/bosdyn/api/audio_visual_pb";
import { LiveAudioVisualBehavior } from "../../src/bosdyn/api/audio_visual_pb";
import { GetSystemParamsResponse } from "../../src/bosdyn/api/audio_visual_pb";
import { PresetColorAssociation } from "../../src/bosdyn/api/audio_visual_pb";
import { SetSystemParamsResponse } from "../../src/bosdyn/api/audio_visual_pb";
import { ResponseError } from "./exceptions";
import { BosdynError } from "./exceptions";
import { LedSequenceGroup } from "../../src/bosdyn/api/audio_visual_pb";
import { Color } from "../../src/bosdyn/api/audio_visual_pb";

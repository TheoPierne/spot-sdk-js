/**
 * Helper class to track values read from the animation file that are important to choreographer and necessary when
 * uploading animated moves.
 */
export class Animation {
    /**
     * The name of the animated move.
     * @type {?string}
     */
    name: string | null;
    /**
     * [Optional] The BPM which the move will be performed at.
     * @type {?number}
     */
    bpm: number | null;
    /**
     * [Optional] The frequency at which the keyframes occur. If not provided in the CHA file, then
     * explicit timestamps must be provided for each keyframe.
     * @type {?number}
     */
    frequency: number | null;
    /**
     * Default description for the animated move.
     * @type {string}
     */
    description: string;
    /**
     * The protobuf message representing the animation.
     * @type {choreographySequencePb.Animation}
     */
    proto: choreographySequencePb.Animation;
    /**
     * The color of the animated move's block when loaded in Choreographer.
     * @type {number[]}
     */
    rgb: number[];
    /**
     * Each individual parameter line as read from a *.cha file.
     * @type {string[]}
     */
    parameterLines: string[];
    /**
     * Creates the MoveInfo protobuf message from the parsed animation file.
     * @returns {choreographySequencePb.MoveInfo} The MoveInfo protobuf message for the animation as generated
     * by the different animation fields in the Animation proto.
     */
    createMoveInfoProto(): choreographySequencePb.MoveInfo;
}
/**
 * Specific Error thrown when we identify an issue with an animation (.cha) file.
 */
export class AnimationFileFormatError extends Error {
    constructor(msg: any);
}
export const COMMENT_DELIMITERS: string[];
export namespace GROUPED_HEADERS {
    let body_pos: (number | ((vals: any, animationFrame: any) => any))[];
    let com_pos: (number | ((vals: any, animationFrame: any) => any))[];
    let body_euler_rpy: (number | ((vals: any, animationFrame: any) => any))[];
    let body_quat_xyzw: (number | ((vals: any, animationFrame: any) => any))[];
    let body_quat_wxyz: (number | ((vals: any, animationFrame: any) => any))[];
    let leg_joints: (number | ((vals: any, animationFrame: any) => any))[];
    let foot_pos: (number | ((vals: any, animationFrame: any) => any))[];
    let hand_pos: (number | ((vals: any, animationFrame: any) => any))[];
    let hand_euler_rpy: (number | ((vals: any, animationFrame: any) => any))[];
    let hand_quat_xyzw: (number | ((vals: any, animationFrame: any) => any))[];
    let hand_quat_wxyz: (number | ((vals: any, animationFrame: any) => any))[];
    let contact: (number | ((vals: any, animationFrame: any) => any))[];
    let arm_joints: (number | ((vals: any, animationFrame: any) => any))[];
    let fl_angles: (number | ((vals: any, animationFrame: any) => any))[];
    let fr_angles: (number | ((vals: any, animationFrame: any) => any))[];
    let hl_angles: (number | ((vals: any, animationFrame: any) => any))[];
    let hr_angles: (number | ((vals: any, animationFrame: any) => any))[];
    let fl_pos: (number | ((vals: any, animationFrame: any) => any))[];
    let fr_pos: (number | ((vals: any, animationFrame: any) => any))[];
    let hl_pos: (number | ((vals: any, animationFrame: any) => any))[];
    let hr_pos: (number | ((vals: any, animationFrame: any) => any))[];
}
export namespace OPTIONS_KEYWORDS_TO_FUNCTION {
    export { controlsOption as controls };
    export { bpmOption as bpm };
    export { extendableOption as extendable };
    export { truncatableOption as truncatable };
    export { neutralStartOption as neutral_start };
    export { preciseStepsOption as precise_steps };
    export { preciseTimingOption as precise_timing };
    export { timingAdjustabilityOption as timing_adjustability };
    export { noLoopingOption as no_looping };
    export { armRequiredOption as arm_required };
    export { armProhibitedOption as arm_prohibited };
    export { startsSittingOption as starts_sitting };
    export { trackSwingTrajectoriesOption as track_swing_trajectories };
    export { assumeZeroRollAndPitchOption as assume_zero_roll_and_pitch };
    export { armPlaybackOption as arm_playback };
    export { displayRgbOption as display_rgb };
    export { frequencyOption as frequency };
    export { retimeToIntegerSlicesOption as retime_to_integer_slices };
    export { descriptionOption as description };
    export { customGaitCycleOption as custom_gait_cycle };
}
export namespace SINGLE_HEADERS {
    export { bodyXHandler as body_x };
    export { bodyYHandler as body_y };
    export { bodyZHandler as body_z };
    export { comXHandler as com_x };
    export { comYHandler as com_y };
    export { comZHandler as com_z };
    export { bodyQuatWHandler as body_quat_w };
    export { bodyQuatXHandler as body_quat_x };
    export { bodyQuatYHandler as body_quat_y };
    export { bodyQuatZHandler as body_quat_z };
    export { bodyRollHandler as body_roll };
    export { bodyPitchHandler as body_pitch };
    export { bodyYawHandler as body_yaw };
    export { flHxHandler as fl_hx };
    export { flHyHandler as fl_hy };
    export { flKnHandler as fl_kn };
    export { frHxHandler as fr_hx };
    export { frHyHandler as fr_hy };
    export { frKnHandler as fr_kn };
    export { hlHxHandler as hl_hx };
    export { hlHyHandler as hl_hy };
    export { hlKnHandler as hl_kn };
    export { hrHxHandler as hr_hx };
    export { hrHyHandler as hr_hy };
    export { hrKnHandler as hr_kn };
    export { flXHandler as fl_x };
    export { flYHandler as fl_y };
    export { flZHandler as fl_z };
    export { frXHandler as fr_x };
    export { frYHandler as fr_y };
    export { frZHandler as fr_z };
    export { hrXHandler as hr_x };
    export { hrYHandler as hr_y };
    export { hrZHandler as hr_z };
    export { hlXHandler as hl_x };
    export { hlYHandler as hl_y };
    export { hlZHandler as hl_z };
    export { flContactHandler as fl_contact };
    export { frContactHandler as fr_contact };
    export { hlContactHandler as hl_contact };
    export { hrContactHandler as hr_contact };
    export { sh0Handler as shoulder0 };
    export { sh1Handler as shoulder1 };
    export { el0Handler as elbow0 };
    export { el1Handler as elbow1 };
    export { wr0Handler as wrist0 };
    export { wr1Handler as wrist1 };
    export { handXHandler as hand_x };
    export { handYHandler as hand_y };
    export { handZHandler as hand_z };
    export { handQuatWHandler as hand_quat_w };
    export { handQuatXHandler as hand_quat_x };
    export { handQuatYHandler as hand_quat_y };
    export { handQuatZHandler as hand_quat_z };
    export { handRollHandler as hand_roll };
    export { handPitchHandler as hand_pitch };
    export { handYawHandler as hand_yaw };
    export { gripperHandler as gripper };
    export { startTimeHandler as time };
}
/**
 * Parses a file into the animation proto that will be uploaded to the robot.
 * @param {string} animatedFile The filepath to the animation text file.
 * @param {string} [animateMoveParamsFile] [Required if needing default param values. Otherwise optional]
 * The filepath to a default set of move parameters or move parameters as a string.
 * @returns {Animation} The Animation class, which contains the animation proto to be uploaded to the robot, as well
 * as additional information to be used by Choreographer.
 * @throws {AnimationFileFormatError} The file is not a valid animation file.
 */
export function convertAnimationFileToProto(animatedFile: string, animateMoveParamsFile?: string): Animation;
/**
 * Helper function to set a field to a DoubleValue protobuf in a protobuf message.
 * @param {*} proto Any generic protobuf message.
 * @param {string} name The field name within the protobuf message. This name should
 * be both the field name and sub-field name separated by a period. For example,
 * for the Vec3 velocity field, the name would be 'velocity.x'.
 * @param {*} attributeValue A value with type matching the field type defined in the protobuf
 * message definition. This will be saved in the name field.
 * @throws {TypeError} There is no such DoubleValue field.
 */
export function handleNestedDoubleValueParams(proto: any, name: string, attributeValue: any): void;
export function main(): boolean;
/**
 * Create a mapping of the parameter name to the default parameter values.
 * @param {string} animateMoveParamsFile filepath to the default parameters file, or a string representing the
 * contents of the parameters file.
 * @param {boolean} filepathInput With filepathInput set to true, the animateMoveParamsFile argument
 * will be interpreted as a file path to the default parameters file. When set to false, the animateMoveParamsFile
 * argument will be read as the information in the default parameters file passed as a string.
 * @returns {Object<string, string>}
 */
export function readAndFindAnimationParams(animateMoveParamsFile: string, filepathInput?: boolean): {
    [x: string]: string;
};
/**
 * Parses the set of lines that are the parameters section of the file.
 * Reads the parameter lines into the min/max/default values in the Animation proto.
 * @param {Animation} animation The animation class structure containing the parameter lines.
 * @returns {Animation}
 * @throws {AnimationFileFormatError} A parameter is not a field of the parameters.
 */
export function readAnimationParams(animation: Animation): Animation;
/**
 * Helper function to set a field to a specific value in the protobuf message.
 * @param {*} proto Any generic protobuf message.
 * @param {string} attributeName The field name within the protobuf message.
 * @param {*} attributeValue A value with type matching the field type defined in the protobuf
 * message definition. This will be saved in the attributeName field.
 * @throws {TypeError} The field is not a wrapper field of the message.
 */
export function setProto(proto: any, attributeName: string, attributeValue: any): void;
/**
 * Write the new animation proto to a .cap file, in the protobuf text format.
 * @param {Animation} animation The animation class object generated by the
 * `cha` file conversion helpers to save the protobuf from.
 * @param {string} destination The full filepath to the location to save the animation protobuf message.
 * @returns {string} The path of the written file.
 */
export function writeAnimationToDest(animation: Animation, destination: string): string;
import choreographySequencePb = require("../../src/bosdyn/api/spot/choreography_sequence_pb");
import { controlsOption } from "./animation_file_conversion_helpers";
import { bpmOption } from "./animation_file_conversion_helpers";
import { extendableOption } from "./animation_file_conversion_helpers";
import { truncatableOption } from "./animation_file_conversion_helpers";
import { neutralStartOption } from "./animation_file_conversion_helpers";
import { preciseStepsOption } from "./animation_file_conversion_helpers";
import { preciseTimingOption } from "./animation_file_conversion_helpers";
import { timingAdjustabilityOption } from "./animation_file_conversion_helpers";
import { noLoopingOption } from "./animation_file_conversion_helpers";
import { armRequiredOption } from "./animation_file_conversion_helpers";
import { armProhibitedOption } from "./animation_file_conversion_helpers";
import { startsSittingOption } from "./animation_file_conversion_helpers";
import { trackSwingTrajectoriesOption } from "./animation_file_conversion_helpers";
import { assumeZeroRollAndPitchOption } from "./animation_file_conversion_helpers";
import { armPlaybackOption } from "./animation_file_conversion_helpers";
import { displayRgbOption } from "./animation_file_conversion_helpers";
import { frequencyOption } from "./animation_file_conversion_helpers";
import { retimeToIntegerSlicesOption } from "./animation_file_conversion_helpers";
import { descriptionOption } from "./animation_file_conversion_helpers";
import { customGaitCycleOption } from "./animation_file_conversion_helpers";
import { bodyXHandler } from "./animation_file_conversion_helpers";
import { bodyYHandler } from "./animation_file_conversion_helpers";
import { bodyZHandler } from "./animation_file_conversion_helpers";
import { comXHandler } from "./animation_file_conversion_helpers";
import { comYHandler } from "./animation_file_conversion_helpers";
import { comZHandler } from "./animation_file_conversion_helpers";
import { bodyQuatWHandler } from "./animation_file_conversion_helpers";
import { bodyQuatXHandler } from "./animation_file_conversion_helpers";
import { bodyQuatYHandler } from "./animation_file_conversion_helpers";
import { bodyQuatZHandler } from "./animation_file_conversion_helpers";
import { bodyRollHandler } from "./animation_file_conversion_helpers";
import { bodyPitchHandler } from "./animation_file_conversion_helpers";
import { bodyYawHandler } from "./animation_file_conversion_helpers";
import { flHxHandler } from "./animation_file_conversion_helpers";
import { flHyHandler } from "./animation_file_conversion_helpers";
import { flKnHandler } from "./animation_file_conversion_helpers";
import { frHxHandler } from "./animation_file_conversion_helpers";
import { frHyHandler } from "./animation_file_conversion_helpers";
import { frKnHandler } from "./animation_file_conversion_helpers";
import { hlHxHandler } from "./animation_file_conversion_helpers";
import { hlHyHandler } from "./animation_file_conversion_helpers";
import { hlKnHandler } from "./animation_file_conversion_helpers";
import { hrHxHandler } from "./animation_file_conversion_helpers";
import { hrHyHandler } from "./animation_file_conversion_helpers";
import { hrKnHandler } from "./animation_file_conversion_helpers";
import { flXHandler } from "./animation_file_conversion_helpers";
import { flYHandler } from "./animation_file_conversion_helpers";
import { flZHandler } from "./animation_file_conversion_helpers";
import { frXHandler } from "./animation_file_conversion_helpers";
import { frYHandler } from "./animation_file_conversion_helpers";
import { frZHandler } from "./animation_file_conversion_helpers";
import { hrXHandler } from "./animation_file_conversion_helpers";
import { hrYHandler } from "./animation_file_conversion_helpers";
import { hrZHandler } from "./animation_file_conversion_helpers";
import { hlXHandler } from "./animation_file_conversion_helpers";
import { hlYHandler } from "./animation_file_conversion_helpers";
import { hlZHandler } from "./animation_file_conversion_helpers";
import { flContactHandler } from "./animation_file_conversion_helpers";
import { frContactHandler } from "./animation_file_conversion_helpers";
import { hlContactHandler } from "./animation_file_conversion_helpers";
import { hrContactHandler } from "./animation_file_conversion_helpers";
import { sh0Handler } from "./animation_file_conversion_helpers";
import { sh1Handler } from "./animation_file_conversion_helpers";
import { el0Handler } from "./animation_file_conversion_helpers";
import { el1Handler } from "./animation_file_conversion_helpers";
import { wr0Handler } from "./animation_file_conversion_helpers";
import { wr1Handler } from "./animation_file_conversion_helpers";
import { handXHandler } from "./animation_file_conversion_helpers";
import { handYHandler } from "./animation_file_conversion_helpers";
import { handZHandler } from "./animation_file_conversion_helpers";
import { handQuatWHandler } from "./animation_file_conversion_helpers";
import { handQuatXHandler } from "./animation_file_conversion_helpers";
import { handQuatYHandler } from "./animation_file_conversion_helpers";
import { handQuatZHandler } from "./animation_file_conversion_helpers";
import { handRollHandler } from "./animation_file_conversion_helpers";
import { handPitchHandler } from "./animation_file_conversion_helpers";
import { handYawHandler } from "./animation_file_conversion_helpers";
import { gripperHandler } from "./animation_file_conversion_helpers";
import { startTimeHandler } from "./animation_file_conversion_helpers";

export class ValidateFrameTreeError extends Error {
    constructor(msg: any);
}
export class ValidateFrameTreeUnknownFrameError extends ValidateFrameTreeError {
}
export class ValidateFrameTreeCycleError extends ValidateFrameTreeError {
}
export class ValidateFrameTreeDisjointError extends ValidateFrameTreeError {
}
/**
 * Validates that a FrameTreeSnapshot is well-formed.
 *
 * A FrameTreeSnapshot is expected to be a single tree, but poorly written
 * services can misuse the syntax to construct other data structures. The
 * syntax prevents DAGs from forming, but the data structure could
 *
 * Valid FrameTrees must be a single rooted tree. However, the general format of
 * repeated edges may not actually be valid - there could be cycles, disjoint
 * trees, or missing edges in the actual data structure.
 *
 * @param {geometryPb.FrameTreeSnapshot} frameTreeSnapshot A snapshot of the data.
 * @returns {boolean} True if valid
 * @throws {ValidateFrameTreeError} ValidateFrameTreeError in a number of cases:
 * Empty tree, invalid frame names in the tree, missing transforms
 * relating the two nodes, cycles in the tree, the tree is actually a DAG, and disconnected trees.
 */
export function validateFrameTreeSnapshot(frameTreeSnapshot: geometryPb.FrameTreeSnapshot): boolean;
/**
 * Get the SE(3) pose representing the transform between frame_a and frame_b.
 *
 * Using frameTreeSnapshot, find the mathHelpers.SE3Pose to transform geometry from
 * frameA's representation to frameB's.
 * @param {geometryPb.FrameTreeSnapshot} frameTreeSnapshot object representing the childToParentEdgeMap
 * @param {string} frameA The first frame to check in.
 * @param {string} frameB The second frame to check in.
 * @param {boolean} [validate=true] If the FrameTreeSnapshot should be checked for a valid tree structure
 * @returns {mathHelpers.SE3Pose|null}
 */
export function getATformB(frameTreeSnapshot: geometryPb.FrameTreeSnapshot, frameA: string, frameB: string, validate?: boolean): mathHelpers.SE3Pose | null;
/**
 * Get the SE(2) pose representing the transform between frameA and frameB.
 *
 * Using frameTreeSnapshot, find the mathHelpers.SE2Pose to transform geometry from
 * frameA's representation to frameB's.
 * @param {Object} frameTreeSnapshot object representing the child_to_parent_edge_map
 * @param {string} frameA The first frame representation
 * @param {string} frameB The second frame representation
 * @param {boolean} [validate=true] If the FrameTreeSnapshot should be checked for a valid tree structure
 * @returns {mathHelpers.SE2Pose|null}
 */
export function getSe2ATformB(frameTreeSnapshot: Object, frameA: string, frameB: string, validate?: boolean): mathHelpers.SE2Pose | null;
/**
 * Convert the SE2 Velocity in frame b to a SE2 Velocity in frame c using
 * the frame tree snapshot.
 * @param {Object} frameTreeSnapshot object representing the child_to_parent_edge_map
 * @param {string} frameB The first frame representation
 * @param {string} frameC The second frame representation
 * @param {mathHelpers.SE2Velocity} velOfAInB SE2 Velocity in frameB
 * @param {boolean} [validate=true] If the FrameTreeSnapshot should be checked for a valid tree structure
 * @returns {mathHelpers.SE2Velocity|null}
 */
export function expressSe2VelocityInNewFrame(frameTreeSnapshot: Object, frameB: string, frameC: string, velOfAInB: mathHelpers.SE2Velocity, validate?: boolean): mathHelpers.SE2Velocity | null;
/**
 * Convert the SE(3) Velocity in frame b to an SE(3) Velocity in frame c using
 * the frame tree snapshot.
 * @param {Object} frameTreeSnapshot object representing the child_to_parent_edge_map
 * @param {string} frameB The first frame representation
 * @param {string} frameC The second frame representation
 * @param {mathHelpers.SE3Velocity} velOfAInB SE3 Velocity in frameB
 * @param {boolean} [validate=true] If the FrameTreeSnapshot should be checked for a valid tree structure
 * @returns {mathHelpers.SE3Velocity|null}
 */
export function expressSe3VelocityInNewFrame(frameTreeSnapshot: Object, frameB: string, frameC: string, velOfAInB: mathHelpers.SE3Velocity, validate?: boolean): mathHelpers.SE3Velocity | null;
/**
 * Get the transformation between "odom" frame and "body" frame from the FrameTreeSnapshot.
 * @param {geometryPb.FrameTreeSnapshot} frameTreeSnapshot object representing the child_to_parent_edge_map
 * @returns {?mathHelpers.SE3Pose}
 */
export function getOdomTformBody(frameTreeSnapshot: geometryPb.FrameTreeSnapshot): mathHelpers.SE3Pose | null;
/**
 * Get the transformation between "vision" frame and "body" frame from the FrameTreeSnapshot.
 * @param {geometryPb.FrameTreeSnapshot} frameTreeSnapshot object representing the child_to_parent_edge_map
 * @returns {?mathHelpers.SE3Pose}
 */
export function getVisionTformBody(frameTreeSnapshot: geometryPb.FrameTreeSnapshot): mathHelpers.SE3Pose | null;
export class GenerateTreeError extends Error {
    constructor(msg: any);
}
export class ChildFrameInTree extends GenerateTreeError {
}
/**
 * Appends a child/parent and the transform to the FrameTreeSnapshot.
 * @param {geometryPb.FrameTreeSnapshot} frameTreeSnapshot Object representing the child_to_parent_edge_map
 * @param {geometryPb.SE3Pose|mathHelpers.SE3Pose} parentTformChild The SE3Pose to add to the frameTreeSnapshot: a
 * proto like Python, or a math_helpers SE3Pose (it was set as the proto, which could not be serialized).
 * @param {string} parentFrameName The parent name.
 * @param {string} childFrameName The child name.
 * @returns {geometryPb.FrameTreeSnapshot}
 * @throws {ChildFrameInTree} The child frame is already in the tree.
 */
export function addEdgeToTree(frameTreeSnapshot: geometryPb.FrameTreeSnapshot, parentTformChild: geometryPb.SE3Pose | mathHelpers.SE3Pose, parentFrameName: string, childFrameName: string): geometryPb.FrameTreeSnapshot;
/**
 * Returns an array of all known child or parent frames in the FrameTreeSnapshot
 * @param {geometryPb.FrameTreeSnapshot} frameTreeSnapshot Object representing the child_to_parent_edge_map
 * @returns {string[]}
 */
export function getFrameNames(frameTreeSnapshot: geometryPb.FrameTreeSnapshot): string[];
/**
 * Checks if the string frame name is a known gravity aligned frame.
 * @param {string} frameName The frame name to check in.
 * @returns {boolean}
 */
export function isGravityAlignedFrameName(frameName: string): boolean;
export const VISION_FRAME_NAME: "vision";
export const BODY_FRAME_NAME: "body";
export const GRAV_ALIGNED_BODY_FRAME_NAME: "flat_body";
export const ODOM_FRAME_NAME: "odom";
export const SEED_FRAME_NAME: "seed";
export const GROUND_PLANE_FRAME_NAME: "gpe";
export const HAND_FRAME_NAME: "hand";
export const UNKNOWN_FRAME_NAME: "unknown";
export const RAYCAST_FRAME_NAME: "walkto_raycast_intersection";
export const TOOL_FRAME_NAME: "tool";
export const DESIRED_TOOL_FRAME_NAME: "desired_tool";
export const TASK_FRAME_NAME: "task";
export const DESIRED_TOOL_AT_END_FRAME_NAME: "desired_tool_at_end";
export const MEASURED_TOOL_AT_START_FRAME_NAME: "measured_tool_at_start";
export const GAZE_TARGET_FRAME_NAME: "gaze_target";
export const FRONT_LEFT_FOOT_FRAME_NAME: "fl_foot";
export const FRONT_RIGHT_FOOT_FRAME_NAME: "fr_foot";
export const HIND_LEFT_FOOT_FRAME_NAME: "hl_foot";
export const HIND_RIGHT_FOOT_FRAME_NAME: "hr_foot";
export const FOOT_FRAME_NAMES: string[];
export const WR1_FRAME_NAME: "arm0.link_wr1";
export const WAYPOINT_FRAME_NAME: "waypoint";
import geometryPb = require("../../src/bosdyn/api/geometry_pb");
import mathHelpers = require("./math_helpers");

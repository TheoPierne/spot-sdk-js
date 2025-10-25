'use strict';

const mathHelpers = require('./math_helpers');
const geometryPb = require('../bosdyn/api/geometry_pb');

const VISION_FRAME_NAME = 'vision';
const BODY_FRAME_NAME = 'body';
const GRAV_ALIGNED_BODY_FRAME_NAME = 'flat_body';
const ODOM_FRAME_NAME = 'odom';
const SEED_FRAME_NAME = 'seed';
const GROUND_PLANE_FRAME_NAME = 'gpe';
const HAND_FRAME_NAME = 'hand';
const UNKNOWN_FRAME_NAME = 'unknown';
const RAYCAST_FRAME_NAME = 'walkto_raycast_intersection';
const TOOL_FRAME_NAME = 'tool';
const DESIRED_TOOL_FRAME_NAME = 'desired_tool';
const TASK_FRAME_NAME = 'task';
const DESIRED_TOOL_AT_END_FRAME_NAME = 'desired_tool_at_end';
const MEASURED_TOOL_AT_START_FRAME_NAME = 'measured_tool_at_start';
const GAZE_TARGET_FRAME_NAME = 'gaze_target';
const FRONT_LEFT_FOOT_FRAME_NAME = 'fl_foot';
const FRONT_RIGHT_FOOT_FRAME_NAME = 'fr_foot';
const HIND_LEFT_FOOT_FRAME_NAME = 'hl_foot';
const HIND_RIGHT_FOOT_FRAME_NAME = 'hr_foot';
const FOOT_FRAME_NAMES = [
  FRONT_LEFT_FOOT_FRAME_NAME,
  FRONT_RIGHT_FOOT_FRAME_NAME,
  HIND_LEFT_FOOT_FRAME_NAME,
  HIND_RIGHT_FOOT_FRAME_NAME,
];
const WR1_FRAME_NAME = 'arm0.link_wr1';
const WAYPOINT_FRAME_NAME = 'waypoint';

class ValidateFrameTreeError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}

class ValidateFrameTreeUnknownFrameError extends ValidateFrameTreeError {}
class ValidateFrameTreeCycleError extends ValidateFrameTreeError {}
class ValidateFrameTreeDisjointError extends ValidateFrameTreeError {}

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
function validateFrameTreeSnapshot(frameTreeSnapshot) {
  if (!frameTreeSnapshot) throw new RangeError('No frameTreeSnapshot');

  function _walkUpTree(frameName) {
    let curFrameName = frameName;
    const visitedFrames = new Set();
    visitedFrames.add(curFrameName);
    /* eslint-disable no-constant-condition */
    while (true) {
      const edge = frameTreeSnapshot.getChildToParentEdgeMapMap().get(curFrameName);
      if (!edge) throw new ValidateFrameTreeUnknownFrameError();
      if (!edge.getParentFrameName()) break;
      if (visitedFrames.has(edge.getParentFrameName())) throw new ValidateFrameTreeCycleError();
      visitedFrames.add(edge.getParentFrameName());
      curFrameName = edge.getParentFrameName();
    }
    return curFrameName;
  }

  let root = null;

  if (!frameTreeSnapshot.getChildToParentEdgeMapMap().toArray().length) {
    throw new ValidateFrameTreeError('Empty edges in FrameTreeSnapshot');
  }

  for (const [frameName] of frameTreeSnapshot.getChildToParentEdgeMapMap().entries()) {
    if (!frameName) throw new ValidateFrameTreeError('Empty child frame name');
    const curRoot = _walkUpTree(frameName);
    if (!root) {
      root = curRoot;
    } else if (curRoot !== root) {
      throw new ValidateFrameTreeDisjointError();
    }
  }

  return true;
}

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
function getATformB(frameTreeSnapshot, frameA, frameB, validate = true) {
  if (validate) validateFrameTreeSnapshot(frameTreeSnapshot);

  if (!frameTreeSnapshot.getChildToParentEdgeMapMap().has(frameA)) return null;
  if (!frameTreeSnapshot.getChildToParentEdgeMapMap().has(frameB)) return null;

  function _listParentEdges(leafFrame) {
    let parentEdges = [];
    let curFrame = leafFrame;
    /* eslint-disable no-constant-condition */
    while (true) {
      const parentEdge = frameTreeSnapshot.getChildToParentEdgeMapMap().get(curFrame);
      if (!parentEdge.getParentFrameName()) break;
      parentEdges.push(parentEdge);
      curFrame = parentEdge.getParentFrameName();
    }
    return parentEdges;
  }

  const inverseEdges = _listParentEdges(frameA);
  const forwardEdges = _listParentEdges(frameB);

  function _accumulateTransforms(parentEdges) {
    let ret = mathHelpers.SE3Pose.fromIdentity();
    for (const parentEdge of parentEdges) {
      ret = ret.mult(mathHelpers.SE3Pose.fromProto(parentEdge.getParentTformChild()));
    }
    return ret;
  }

  const frameATformRootFrame = _accumulateTransforms(inverseEdges).inverse();
  const rootFrameTformFrameB = _accumulateTransforms(forwardEdges);
  return frameATformRootFrame.mult(rootFrameTformFrameB);
}

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
function getSe2ATformB(frameTreeSnapshot, frameA, frameB, validate = true) {
  if (!isGravityAlignedFrameName(frameA)) return null;
  const se3ATformB = getATformB(frameTreeSnapshot, frameA, frameB, validate);
  if (se3ATformB === null) return null;
  return se3ATformB.getClosestSe2Transform();
}

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
function expressSe2VelocityInNewFrame(frameTreeSnapshot, frameB, frameC, velOfAInB, validate = true) {
  const se3CTformB = getATformB(frameTreeSnapshot, frameC, frameB, validate);
  if (se3CTformB === null) return null;
  if (!isGravityAlignedFrameName(frameC)) return null;
  const se2CTformB = se3CTformB.getClosestSe2Transform();
  const cAdjointB = se2CTformB.toAdjointMatrix();
  return mathHelpers.transformSe2velocity(cAdjointB, velOfAInB);
}

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
function expressSe3VelocityInNewFrame(frameTreeSnapshot, frameB, frameC, velOfAInB, validate = true) {
  const se3CTformB = getATformB(frameTreeSnapshot, frameC, frameB, validate);
  if (se3CTformB === null) return null;
  const cAdjointB = se3CTformB.toAdjointMatrix();
  return mathHelpers.transformSe3velocity(cAdjointB, velOfAInB);
}

/**
 * Get the transformation between "odom" frame and "body" frame from the FrameTreeSnapshot.
 * @param {geometryPb.FrameTreeSnapshot} frameTreeSnapshot object representing the child_to_parent_edge_map
 * @returns {number}
 */
function getOdomTformBody(frameTreeSnapshot) {
  return getATformB(frameTreeSnapshot, ODOM_FRAME_NAME, BODY_FRAME_NAME);
}

/**
 * Get the transformation between "vision" frame and "body" frame from the FrameTreeSnapshot.
 * @param {geometryPb.FrameTreeSnapshot} frameTreeSnapshot object representing the child_to_parent_edge_map
 * @returns {mathHelpers.SE3Pose}
 */
function getVisionTformBody(frameTreeSnapshot) {
  return getATformB(frameTreeSnapshot, VISION_FRAME_NAME, BODY_FRAME_NAME);
}

class GenerateTreeError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}

class ChildFrameInTree extends GenerateTreeError {}

/**
 * Appends a child/parent and the transform to the FrameTreeSnapshot.
 * @param {geometryPb.FrameTreeSnapshot} frameTreeSnapshot Object representing the child_to_parent_edge_map
 * @param {mathHelpers.SE3Pose} parentTformChild The SE3Pose to add to the frameTreeSnapshot
 * @param {string} parentFrameName The parent name.
 * @param {string} childFrameName The child name.
 * @returns {geometryPb.FrameTreeSnapshot}
 */
function addEdgeToTree(frameTreeSnapshot, parentTformChild, parentFrameName, childFrameName) {
  if (frameTreeSnapshot.getChildToParentEdgeMapMap().has(childFrameName)) throw new ChildFrameInTree();
  frameTreeSnapshot
    .getChildToParentEdgeMapMap()
    .set(
      childFrameName,
      new geometryPb.FrameTreeSnapshot.ParentEdge()
        .setParentFrameName(parentFrameName)
        .setParentTformChild(parentTformChild),
    );
  return frameTreeSnapshot;
}

/**
 * Returns an array of all known child or parent frames in the FrameTreeSnapshot
 * @param {geometryPb.FrameTreeSnapshot} frameTreeSnapshot Object representing the child_to_parent_edge_map
 * @returns {string[]}
 */
function getFrameNames(frameTreeSnapshot) {
  const frameNames = new Set();
  const map = frameTreeSnapshot.getChildToParentEdgeMapMap();
  for (const [childFrame, parentEdge] of map.entries()) {
    if (childFrame) {
      frameNames.add(childFrame);
    }
    const parentFrame = parentEdge.getParentFrameName();
    if (parentFrame) {
      frameNames.add(parentFrame);
    }
  }
  return Array.from(frameNames);
}

/**
 * Checks if the string frame name is a known gravity aligned frame.
 * @param {string} frameName The frame name to check in.
 * @returns {boolean}
 */
function isGravityAlignedFrameName(frameName) {
  return frameName === VISION_FRAME_NAME || frameName === GRAV_ALIGNED_BODY_FRAME_NAME || frameName === ODOM_FRAME_NAME;
}

module.exports = {
  ValidateFrameTreeError,
  ValidateFrameTreeUnknownFrameError,
  ValidateFrameTreeCycleError,
  ValidateFrameTreeDisjointError,
  validateFrameTreeSnapshot,
  getATformB,
  getSe2ATformB,
  expressSe2VelocityInNewFrame,
  expressSe3VelocityInNewFrame,
  getOdomTformBody,
  getVisionTformBody,
  GenerateTreeError,
  ChildFrameInTree,
  addEdgeToTree,
  getFrameNames,
  isGravityAlignedFrameName,
  VISION_FRAME_NAME,
  BODY_FRAME_NAME,
  GRAV_ALIGNED_BODY_FRAME_NAME,
  ODOM_FRAME_NAME,
  SEED_FRAME_NAME,
  GROUND_PLANE_FRAME_NAME,
  HAND_FRAME_NAME,
  UNKNOWN_FRAME_NAME,
  RAYCAST_FRAME_NAME,
  TOOL_FRAME_NAME,
  DESIRED_TOOL_FRAME_NAME,
  TASK_FRAME_NAME,
  DESIRED_TOOL_AT_END_FRAME_NAME,
  MEASURED_TOOL_AT_START_FRAME_NAME,
  GAZE_TARGET_FRAME_NAME,
  FRONT_LEFT_FOOT_FRAME_NAME,
  FRONT_RIGHT_FOOT_FRAME_NAME,
  HIND_LEFT_FOOT_FRAME_NAME,
  HIND_RIGHT_FOOT_FRAME_NAME,
  FOOT_FRAME_NAMES,
  WR1_FRAME_NAME,
  WAYPOINT_FRAME_NAME,
};

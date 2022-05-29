'use strict';

const math_helpers = require('./math_helpers');
const geometry_pb = require('../bosdyn/api/geometry_pb');

const VISION_FRAME_NAME = 'vision';
const BODY_FRAME_NAME = 'body';
const GRAV_ALIGNED_BODY_FRAME_NAME = 'flat_body';
const ODOM_FRAME_NAME = 'odom';
const GROUND_PLANE_FRAME_NAME = 'gpe';
const HAND_FRAME_NAME = "hand";
const UNKNOWN_FRAME_NAME = 'unknown';
const RAYCAST_FRAME_NAME = 'walkto_raycast_intersection';

class ValidateFrameTreeError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'ValidateFrameTreeError';
  }
}

class ValidateFrameTreeUnknownFrameError extends ValidateFrameTreeError {
  constructor(msg) {
    super(msg);
    this.name = 'ValidateFrameTreeUnknownFrameError';
  }
}

class ValidateFrameTreeCycleError extends ValidateFrameTreeError {
  constructor(msg) {
    super(msg);
    this.name = 'ValidateFrameTreeCycleError';
  }
}

class ValidateFrameTreeDisjointError extends ValidateFrameTreeError {
  constructor(msg) {
    super(msg);
    this.name = 'ValidateFrameTreeDisjointError';
  }
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
 * @param {geometry_pb.FrameTreeSnapshot} frame_tree_snapshot A snapshot of the data.
 * @returns {boolean} True if valid
 * @throws {ValidateFrameTreeError} ValidateFrameTreeError in a number of cases:
 * Empty tree, invalid frame names in the tree, missing transforms
 * relating the two nodes, cycles in the tree, the tree is actually a DAG, and disconnected trees.
 */
function validate_frame_tree_snapshot(frame_tree_snapshot) {
  if (!frame_tree_snapshot) throw new RangeError('No frame_tree_snapshot');

  function _walk_up_tree(frame_name) {
    let cur_frame_name = frame_name;
    const visited_frames = new Set();
    visited_frames.add(cur_frame_name);
    /* eslint-disable no-constant-condition */
    while (true) {
      const edge = frame_tree_snapshot.getChildToParentEdgeMapMap().get(cur_frame_name);
      if (!edge) throw new ValidateFrameTreeUnknownFrameError();
      if (!edge.getParentFrameName()) break;
      if (visited_frames.has(edge.getParentFrameName())) throw new ValidateFrameTreeCycleError();
      visited_frames.add(edge.getParentFrameName());
      cur_frame_name = edge.getParentFrameName();
    }
    return cur_frame_name;
  }

  let root = null;

  if (!frame_tree_snapshot.getChildToParentEdgeMapMap().toArray().length) {
    throw new ValidateFrameTreeError('Empty edges in FrameTreeSnapshot');
  }

  for (const [frame_name] of frame_tree_snapshot.getChildToParentEdgeMapMap().entries()) {
    if (!frame_name) throw new ValidateFrameTreeError('Empty child frame name');
    const cur_root = _walk_up_tree(frame_name);
    if (!root) {
      root = cur_root;
    } else if (cur_root !== root) {
      throw new ValidateFrameTreeDisjointError();
    }
  }

  return true;
}

/**
 * Get the SE(3) pose representing the transform between frame_a and frame_b.
 *
 * Using frame_tree_snapshot, find the math_helpers.SE3Pose to transform geometry from
 * frame_a's representation to frame_b's.
 * @param {geometry_pb.FrameTreeSnapshot} frame_tree_snapshot object representing the child_to_parent_edge_map
 * @param {string} frame_a The first frame to check in.
 * @param {string} frame_b The second frame to check in.
 * @param {boolean} [validate=true] If the FrameTreeSnapshot should be checked for a valid tree structure
 * @returns {math_helpers.SE3Pose|null}
 */
function get_a_tform_b(frame_tree_snapshot, frame_a, frame_b, validate = true) {
  if (validate) validate_frame_tree_snapshot(frame_tree_snapshot);

  if (!frame_tree_snapshot.getChildToParentEdgeMapMap().has(frame_a)) return null;
  if (!frame_tree_snapshot.getChildToParentEdgeMapMap().has(frame_b)) return null;

  function _list_parent_edges(leaf_frame) {
    let parent_edges = [];
    let cur_frame = leaf_frame;
    /* eslint-disable no-constant-condition */
    while (true) {
      const parent_edge = frame_tree_snapshot.getChildToParentEdgeMapMap().get(cur_frame);
      if (!parent_edge.getParentFrameName()) break;
      parent_edges.push(parent_edge);
      cur_frame = parent_edge.getParentFrameName();
    }
    return parent_edges;
  }

  const inverse_edges = _list_parent_edges(frame_a);
  const forward_edges = _list_parent_edges(frame_b);

  function _accumulate_transforms(parent_edges) {
    let ret = math_helpers.SE3Pose.from_identity();
    for (const parent_edge of parent_edges) {
      ret = ret.mult(math_helpers.SE3Pose.from_obj(parent_edge.getParentTformChild()));
    }
    return ret;
  }

  const frame_a_tform_root_frame = _accumulate_transforms(inverse_edges).inverse();
  const root_frame_tform_frame_b = _accumulate_transforms(forward_edges);
  return frame_a_tform_root_frame.mult(root_frame_tform_frame_b);
}

/**
 * Get the SE(2) pose representing the transform between frame_a and frame_b.
 *
 * Using frame_tree_snapshot, find the math_helpers.SE2Pose to transform geometry from
 * frame_a's representation to frame_b's.
 * @param {Object} frame_tree_snapshot object representing the child_to_parent_edge_map
 * @param {string} frame_a The first frame representation
 * @param {string} frame_b The second frame representation
 * @param {boolean} [validate=true] If the FrameTreeSnapshot should be checked for a valid tree structure
 * @returns {math_helpers.SE2Pose|null}
 */
function get_se2_a_tform_b(frame_tree_snapshot, frame_a, frame_b, validate = true) {
  if (!is_gravity_aligned_frame_name(frame_a)) return null;
  const se3_a_tform_b = get_a_tform_b(frame_tree_snapshot, frame_a, frame_b, validate);
  if (se3_a_tform_b === null) return null;
  return se3_a_tform_b.get_closest_se2_transform();
}

/**
 * Convert the SE2 Velocity in frame b to a SE2 Velocity in frame c using
 * the frame tree snapshot.
 * @param {Object} frame_tree_snapshot object representing the child_to_parent_edge_map
 * @param {string} frame_b The first frame representation
 * @param {string} frame_c The second frame representation
 * @param {math_helpers.SE2Velocity} vel_of_a_in_b SE2 Velocity in frame_b
 * @param {boolean} [validate=true] If the FrameTreeSnapshot should be checked for a valid tree structure
 * @returns {math_helpers.SE2Velocity|null}
 */
function express_se2_velocity_in_new_frame(frame_tree_snapshot, frame_b, frame_c, vel_of_a_in_b, validate = true) {
  const se3_c_tform_b = get_a_tform_b(frame_tree_snapshot, frame_c, frame_b, validate);
  if (se3_c_tform_b === null) return null;
  if (!is_gravity_aligned_frame_name(frame_c)) return null;
  const se2_c_tform_b = se3_c_tform_b.get_closest_se2_transform();
  const c_adjoint_b = se2_c_tform_b.to_adjoint_matrix();
  const vel_of_a_in_c = math_helpers.transform_se2velocity(c_adjoint_b, vel_of_a_in_b);
  return vel_of_a_in_c;
}

/**
 * Convert the SE(3) Velocity in frame b to an SE(3) Velocity in frame c using
 * the frame tree snapshot.
 * @param {Object} frame_tree_snapshot object representing the child_to_parent_edge_map
 * @param {string} frame_b The first frame representation
 * @param {string} frame_c The second frame representation
 * @param {math_helpers.SE3Velocity} vel_of_a_in_b SE3 Velocity in frame_b
 * @param {boolean} [validate=true] If the FrameTreeSnapshot should be checked for a valid tree structure
 * @returns {math_helpers.SE3Velocity|null}
 */
function express_se3_velocity_in_new_frame(frame_tree_snapshot, frame_b, frame_c, vel_of_a_in_b, validate = true) {
  const se3_c_tform_b = get_a_tform_b(frame_tree_snapshot, frame_c, frame_b, validate);
  if (se3_c_tform_b === null) return null;
  const c_adjoint_b = se3_c_tform_b.to_adjoint_matrix();
  const vel_of_a_in_c = math_helpers.transform_se3velocity(c_adjoint_b, vel_of_a_in_b);
  return vel_of_a_in_c;
}

/**
 * Get the transformation between "odom" frame and "body" frame from the FrameTreeSnapshot.
 * @param {Object} frame_tree_snapshot object representing the child_to_parent_edge_map
 * @returns {number}
 */
function get_odom_tform_body(frame_tree_snapshot) {
  return get_a_tform_b(frame_tree_snapshot, ODOM_FRAME_NAME, BODY_FRAME_NAME);
}

/**
 * Get the transformation between "vision" frame and "body" frame from the FrameTreeSnapshot.
 * @param {Object} frame_tree_snapshot object representing the child_to_parent_edge_map
 * @returns {number}
 */
function get_vision_tform_body(frame_tree_snapshot) {
  return get_a_tform_b(frame_tree_snapshot, VISION_FRAME_NAME, BODY_FRAME_NAME);
}

class GenerateTreeError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'GenerateTreeError';
  }
}

class ChildFrameInTree extends GenerateTreeError {
  constructor(msg) {
    super(msg);
    this.name = 'ChildFrameInTree';
  }
}

/**
 * Appends a child/parent and the transform to the FrameTreeSnapshot.
 * @param {geometry_pb.FrameTreeSnapshot} frame_tree_snapshot Object representing the child_to_parent_edge_map
 * @param {math_helpers.SE3Pose} parent_tform_child The SE3Pose to add to the frame_tree_snapshot
 * @param {string} parent_frame_name The parent name.
 * @param {string} child_frame_name The child name.
 * @returns {geometry_pb.FrameTreeSnapshot}
 */
function add_edge_to_tree(frame_tree_snapshot, parent_tform_child, parent_frame_name, child_frame_name) {
  if (frame_tree_snapshot.getChildToParentEdgeMapMap().has(child_frame_name)) throw new ChildFrameInTree();
  frame_tree_snapshot
    .getChildToParentEdgeMapMap()
    .set(
      child_frame_name,
      new geometry_pb.FrameTreeSnapshot.ParentEdge()
        .setParentFrameName(parent_frame_name)
        .setParentTformChild(parent_tform_child),
    );
  return frame_tree_snapshot;
}

/**
 * Returns an array of all known child or parent frames in the FrameTreeSnapshot
 * @param {geometry_pb.FrameTreeSnapshot} frame_tree_snapshot Object representing the child_to_parent_edge_map
 * @returns {Array}
 */
function get_frame_names(frame_tree_snapshot) {
  const frame_names = [];
  for (const child_frame of frame_tree_snapshot.getChildToParentEdgeMapMap().entries()) {
    if (!frame_names.includes(child_frame)) frame_names.push(child_frame);
    const parent_frame = frame_tree_snapshot.getChildToParentEdgeMapMap().get(child_frame).getParentFrameName();
    if (!frame_names.includes(parent_frame)) frame_names.push(parent_frame);
  }
  return frame_names.map(x => x !== '');
}

/**
 * Checks if the string frame name is a known gravity aligned frame.
 * @param {string} frame_name The frame name to check in.
 * @returns {boolean}
 */
function is_gravity_aligned_frame_name(frame_name) {
  if (
    frame_name === VISION_FRAME_NAME ||
    frame_name === GRAV_ALIGNED_BODY_FRAME_NAME ||
    frame_name === ODOM_FRAME_NAME
  ) {
    return true;
  }
  return false;
}

module.exports = {
  ValidateFrameTreeError,
  ValidateFrameTreeUnknownFrameError,
  ValidateFrameTreeCycleError,
  ValidateFrameTreeDisjointError,
  validate_frame_tree_snapshot,
  get_a_tform_b,
  get_se2_a_tform_b,
  express_se2_velocity_in_new_frame,
  express_se3_velocity_in_new_frame,
  get_odom_tform_body,
  get_vision_tform_body,
  GenerateTreeError,
  ChildFrameInTree,
  add_edge_to_tree,
  get_frame_names,
  is_gravity_aligned_frame_name,
  VISION_FRAME_NAME,
  BODY_FRAME_NAME,
  GRAV_ALIGNED_BODY_FRAME_NAME,
  ODOM_FRAME_NAME,
  GROUND_PLANE_FRAME_NAME,
  HAND_FRAME_NAME,
  UNKNOWN_FRAME_NAME,
  RAYCAST_FRAME_NAME,
};

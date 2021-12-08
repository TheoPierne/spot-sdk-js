const math_helpers = require('./math_helpers');
const geometry_pb = require('../bosdyn/api/geometry_pb');

const VISION_FRAME_NAME = "vision";
const BODY_FRAME_NAME = "body";
const GRAV_ALIGNED_BODY_FRAME_NAME = "flat_body";
const ODOM_FRAME_NAME = "odom";
const GROUND_PLANE_FRAME_NAME = "gpe";
const UNKNOWN_FRAME_NAME = "unknown";
const RAYCAST_FRAME_NAME = "walkto_raycast_intersection";

class ValidateFrameTreeError extends Error {
	constructor(msg){
		super(msg);
		this.name = 'ValidateFrameTreeError';
	}
};

class ValidateFrameTreeUnknownFrameError extends ValidateFrameTreeError {
	constructor(msg){
		super(msg);
		this.name = 'ValidateFrameTreeUnknownFrameError';
	}
};

class ValidateFrameTreeCycleError extends ValidateFrameTreeError {
	constructor(msg){
		super(msg);
		this.name = 'ValidateFrameTreeCycleError';
	}
};

class ValidateFrameTreeDisjointError extends ValidateFrameTreeError {
	constructor(msg){
		super(msg);
		this.name = 'ValidateFrameTreeDisjointError';
	}
};

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
* @params {object} frame_tree_snapshot A snapshot of the data.
* @returns {boolean} True if valid
* @throws {ValidateFrameTreeError} ValidateFrameTreeError in a number of cases: Empty tree, invalid frame names in the tree, missing transforms
* relating the two nodes, cycles in the tree, the tree is actually a DAG, and disconnected trees. 
*/
function validate_frame_tree_snapshot(frame_tree_snapshot){
	if(frame_tree_snapshot) throw new RangeError('No frame_tree_snapshot');

	function _walk_up_tree(frame_name){
		let cur_frame_name = frame_name;
		let visited_frames = Set();
		visited_frames.add(cur_frame_name);
		while(true){
			let edge = frame_tree_snapshot.child_to_parent_edge_map.get(cur_frame_name);
			if(!edge) throw new ValidateFrameTreeUnknownFrameError();
			if(!edge.parent_frame_name) break;
			if(edge.parent_frame_name in visited_frames) throw new ValidateFrameTreeCycleError();
			visited_frames.add(edge.parent_frame_name);
			cur_frame_name = edge.parent_frame_name;
		}
		return cur_frame_name;
	}

	let root = null;

	if(!frame_tree_snapshot.child_to_parent_edge_map){
		throw new ValidateFrameTreeError("Empty edges in FrameTreeSnapshot");
	}

	for (const frame_name of frame_tree_snapshot.child_to_parent_edge_map){
		if(!frame_name) throw new ValidateFrameTreeError("Empty child frame name");
		let cur_root = _walk_up_tree(frame_name);
		if(!root){
			root = cur_root;
		}else{
			if(cur_root != root) throw new ValidateFrameTreeDisjointError();
		}
	}

	return true;
}

/**
* Get the SE(3) pose representing the transform between frame_a and frame_b.
*
* Using frame_tree_snapshot, find the math_helpers.SE3Pose to transform geometry from
* frame_a's representation to frame_b's.
* @param {object} frame_tree_snapshot object representing the child_to_parent_edge_map
* @param {string} frame_b
* @param {string} frame_c
* @param {boolean} [validate=true]
* @returns {SE3Pose|null}
*/
function get_a_tform_b(frame_tree_snapshot, frame_a, frame_b, validate = true){
	if(validate) validate_frame_tree_snapshot(frame_tree_snapshot);

	if(!frame_tree_snapshot.child_to_parent_edge_map.get(frame_a)) return null;
	if(!frame_tree_snapshot.child_to_parent_edge_map.get(frame_b)) return null;

	function _list_parent_edges(leaf_frame){
		var parent_edges = [];
		var cur_frame = leaf_frame;
		while(true){
			var sparent_edge = frame_tree_snapshot.child_to_parent_edge_map.get(cur_frame);
			if(!parent_edge.parent_frame_name) break;
			parent_edges.push(parent_edge);
			cur_frame = parent_edge.parent_frame_name;
		}
		return parent_edges;
	}

	var inverse_edges = _list_parent_edges(frame_a);
	var forward_edges = _list_parent_edges(frame_b);

	function _accumulate_transforms(parent_edges){
		var ret = math_helpers.SE3Pose.from_identity();
		for(var parent_edge in parent_edges){
			ret = math_helpers.SE3Pose.from_obj(parent_edge.parent_tform_child) * ret;
		}
		return ret
	}

	var frame_a_tform_root_frame = _accumulate_transforms(inverse_edges).reverse();
	var root_frame_tform_frame_b = _accumulate_transforms(forward_edges);
	return frame_a_tform_root_frame * root_frame_tform_frame_b;
}

/**
* Get the SE(2) pose representing the transform between frame_a and frame_b.
* 
* Using frame_tree_snapshot, find the math_helpers.SE2Pose to transform geometry from
* frame_a's representation to frame_b's.
* @param {object} frame_tree_snapshot object representing the child_to_parent_edge_map
* @param {string} frame_b
* @param {string} frame_c
* @param {boolean} [validate=true]
* @returns {SE2Pose|null}
*/
function get_se2_a_tform_b(frame_tree_snapshot, frame_a, frame_b, validate = true){
	if(!is_gravity_aligned_frame_name(frame_a)) return null;
	const se3_a_tform_b = get_a_tform_b(frame_tree_snapshot, frame_a, frame_b, validate);
	if(se3_a_tform_b == null) return null;
	return se3_a_tform_b.get_closest_se2_transform();
}

/**
* Convert the SE2 Velocity in frame b to a SE2 Velocity in frame c using
* the frame tree snapshot.
* @param {object} frame_tree_snapshot object representing the child_to_parent_edge_map
* @param {string} frame_b
* @param {string} frame_c
* @param {SE2Velocity} vel_of_a_in_b
* @param {boolean} [validate=true]
* @returns {SE2Velocity|null}
*/
function express_se2_velocity_in_new_frame(frame_tree_snapshot, frame_b, frame_c, vel_of_a_in_b, validate = true){
	const se3_c_tform_b = get_a_tform_b(frame_tree_snapshot, frame_c, frame_b, validate);
	if(se3_c_tform_b == null) return null;
	if(!is_gravity_aligned_frame_name(frame_c)) return null;
	const se2_c_tform_b = se3_c_tform_b.get_closest_se2_transform();
	const c_adjoint_b = se2_c_tform_b.to_adjoint_matrix();
	const vel_of_a_in_c = math_helpers.transform_se2velocity(c_adjoint_b, vel_of_a_in_b);
	return vel_of_a_in_c;
}

/**
* Convert the SE(3) Velocity in frame b to an SE(3) Velocity in frame c using
* the frame tree snapshot.
* @param {object} frame_tree_snapshot object representing the child_to_parent_edge_map
* @param {string} frame_b
* @param {string} frame_c
* @param {SE3Velocity} vel_of_a_in_b
* @param {boolean} [validate=true]
* @returns {SE3Velocity|null}
*/
function express_se3_velocity_in_new_frame(frame_tree_snapshot, frame_b, frame_c, vel_of_a_in_b, validate = true){
	const se3_c_tform_b = get_a_tform_b(frame_tree_snapshot, frame_c, frame_b, validate);
	if(se3_c_tform_b == null) return null;
	const c_adjoint_b = se3_c_tform_b.to_adjoint_matrix();
	const vel_of_a_in_c = math_helpers.transform_se3velocity(c_adjoint_b, vel_of_a_in_b);
	return vel_of_a_in_c;
}

/**
* Get the transformation between "odom" frame and "body" frame from the FrameTreeSnapshot.
* @param {object} frame_tree_snapshot object representing the child_to_parent_edge_map
* @returns {number}
*/
function get_odom_tform_body(frame_tree_snapshot){
	return get_a_tform_b(frame_tree_snapshot, ODOM_FRAME_NAME, BODY_FRAME_NAME);
}

/**
* Get the transformation between "vision" frame and "body" frame from the FrameTreeSnapshot.
* @param {object} frame_tree_snapshot object representing the child_to_parent_edge_map
* @returns {number}
*/
function get_vision_tform_body(frame_tree_snapshot){
	return get_a_tform_b(frame_tree_snapshot, VISION_FRAME_NAME, BODY_FRAME_NAME);
}

class GenerateTreeError extends Error {
	constructor(msg){
		super(msg);
		this.name = 'GenerateTreeError';
	}
};

class ChildFrameInTree extends GenerateTreeError {
	constructor(msg){
		super(msg);
		this.name = 'ChildFrameInTree';
	}
};

/**
* Appends a child/parent and the transform to the FrameTreeSnapshot.
* @param {object} frame_tree_snapshot object representing the child_to_parent_edge_map
* @param {SE3Pose} parent_tform_child
* @param {string} parent_frame_name
* @param {string} child_frame_name
* @returns {object}
*/
function add_edge_to_tree(frame_tree_snapshot, parent_tform_child, parent_frame_name, child_frame_name){
	if(child_frame_name in frame_tree_snapshot) throw new ChildFrameInTree();
	frame_tree_snapshot[child_frame_name] = geometry_pb.FrameTreeSnapshot.ParentEdge(parent_frame_name = parent_frame_name, parent_tform_child = parent_tform_child);
	return frame_tree_snapshot;
}

/**
* Returns an array of all known child or parent frames in the FrameTreeSnapshot
* @param {object} frame_tree_snapshot
* @returns {array}
*/ 
function get_frame_names(frame_tree_snapshot){
	const frame_names = [];
	for(child_frame in frame_tree_snapshot.child_to_parent_edge_map){
		if(!frame_names.includes(child_frame)) frame_names.push(child_frame);
		var parent_frame = frame_tree_snapshot.child_to_parent_edge_map.get(child_frame).parent_frame_name;
		if(!frame_names.includes(parent_frame)) frame_names.push(parent_frame);
	}
	return frame_names.map(x => x != "");
}

/**
* Checks if the string frame name is a known gravity aligned frame.
* @param {string} frame_name
* @returns {boolean}
*/ 
function is_gravity_aligned_frame_name(frame_name){
	if(frame_name == VISION_FRAME_NAME || frame_name == GRAV_ALIGNED_BODY_FRAME_NAME || frame_name == ODOM_FRAME_NAME) return true;
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
	UNKNOWN_FRAME_NAME 
}
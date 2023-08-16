'use strict';

const assert = require('node:assert');
const test = require('node:test');

const geometry_pb = require('../bosdyn/api/geometry_pb');

const {
  validate_frame_tree_snapshot,
  get_a_tform_b,
  get_se2_a_tform_b,
  express_se2_velocity_in_new_frame,
  express_se3_velocity_in_new_frame,
  ValidateFrameTreeError,
  ValidateFrameTreeCycleError,
  ValidateFrameTreeDisjointError,
  ValidateFrameTreeUnknownFrameError,
} = require('../bosdyn-client/frame_helpers');
const { SE3Pose, SE2Velocity, SE3Velocity, Quat } = require('../bosdyn-client/math_helpers');

function _create_snapshot(frame_tree_snapshot_array) {
  const frame_tree_snapshot = new geometry_pb.FrameTreeSnapshot();
  frame_tree_snapshot_array.forEach(fts => {
    const t = new geometry_pb.FrameTreeSnapshot.ParentEdge().setParentFrameName(fts.value.parent_frame_name);
    if (fts.value.parent_tform_child) {
      const parentTFormChild = new geometry_pb.SE3Pose();
      if (fts.value.parent_tform_child.position) {
        const { x, y, z } = fts.value.parent_tform_child.position;
        // eslint-disable-next-line newline-per-chained-call
        const pos = new geometry_pb.Vec3().setX(x).setY(y).setZ(z);
        parentTFormChild.setPosition(pos);
      }

      if (fts.value.parent_tform_child.rotation) {
        const { w, x: xR, y: yR, z: zR } = fts.value.parent_tform_child.rotation;
        // eslint-disable-next-line newline-per-chained-call
        const rot = new geometry_pb.Quaternion().setW(w).setX(xR).setY(yR).setZ(zR);
        parentTFormChild.setRotation(rot);
      }

      t.setParentTformChild(parentTFormChild);
    }
    frame_tree_snapshot.getChildToParentEdgeMapMap().set(fts.key, t);
  });
  return frame_tree_snapshot;
}

function _do_poses_match(x, y, z, pose_b) {
  // Hacky approach with string representation
  const pose_a = new SE3Pose(x, y, z, new Quat());
  return pose_a.toString() === pose_b.toString();
}

test('test_validate_snapshot_single_child', () => {
  // Tests that a single edge tree is valid.
  const snapshot_data = [
    {
      key: 'beta',
      value: {
        parent_frame_name: 'alpha',
      },
    },
    {
      key: 'alpha',
      value: {
        parent_frame_name: '',
      },
    },
  ];
  assert.ok(validate_frame_tree_snapshot(_create_snapshot(snapshot_data)));
});

test('test_validate_snapshot_two_children', () => {
  // Tests that a tree with two children off of the root is valid.
  const snapshot_data = [
    {
      key: 'beta',
      value: {
        parent_frame_name: 'alpha',
      },
    },
    {
      key: 'gamma',
      value: {
        parent_frame_name: 'alpha',
      },
    },
    {
      key: 'alpha',
      value: {
        parent_frame_name: '',
      },
    },
  ];
  assert.ok(validate_frame_tree_snapshot(_create_snapshot(snapshot_data)));
});

test('test_validate_snapshot_linear_chain', () => {
  // Tests that a tree with a linear chain is parsed correctly.
  const snapshot_data = [
    {
      key: 'beta',
      value: {
        parent_frame_name: 'alpha',
      },
    },
    {
      key: 'gamma',
      value: {
        parent_frame_name: 'beta',
      },
    },
    {
      key: 'alpha',
      value: {
        parent_frame_name: '',
      },
    },
  ];
  assert.ok(validate_frame_tree_snapshot(_create_snapshot(snapshot_data)));
});

test('test_validate_snapshot_empty_frame_tree', () => {
  // Tests that an empty frame tree does not validate.
  const snapshot_data = [];
  assert.throws(() => validate_frame_tree_snapshot(_create_snapshot(snapshot_data)), ValidateFrameTreeError);
});

test('test_validate_snapshot_empty_key_name', () => {
  // Tests that a frame tree with an empty child frame name does not validate.
  const snapshot_data = [
    {
      key: '',
      value: {
        parent_frame_name: 'alpha',
      },
    },
  ];
  assert.throws(() => validate_frame_tree_snapshot(_create_snapshot(snapshot_data)), ValidateFrameTreeError);
});

test('test_validate_snapshot_single_edge_cycle', () => {
  // Tests that a frame tree with a single edge that has a cycle does not validate.
  const snapshot_data = [
    {
      key: 'alpha',
      value: {
        parent_frame_name: 'alpha',
      },
    },
  ];
  assert.throws(() => validate_frame_tree_snapshot(_create_snapshot(snapshot_data)), ValidateFrameTreeCycleError);
});

test('test_validate_snapshot_multi_edge_cycle', () => {
  // Tests that a frame tree with a multi-edge cycle does not validate.
  const snapshot_data = [
    {
      key: 'beta',
      value: {
        parent_frame_name: 'alpha',
      },
    },
    {
      key: 'alpha',
      value: {
        parent_frame_name: 'beta',
      },
    },
  ];
  assert.throws(() => validate_frame_tree_snapshot(_create_snapshot(snapshot_data)), ValidateFrameTreeCycleError);
});

test('test_validate_snapshot_disjoint', () => {
  // Tests that a frame tree that is disconnected does not validate.
  const snapshot_data = [
    {
      key: 'beta',
      value: {
        parent_frame_name: 'alpha',
      },
    },
    {
      key: 'delta',
      value: {
        parent_frame_name: 'gamma',
      },
    },
    {
      key: 'alpha',
      value: {
        parent_frame_name: '',
      },
    },
    {
      key: 'gamma',
      value: {
        parent_frame_name: '',
      },
    },
  ];
  assert.throws(() => validate_frame_tree_snapshot(_create_snapshot(snapshot_data)), ValidateFrameTreeDisjointError);
});

test('test_validate_snapshot_unknown_parent', () => {
  // Tests that a frame tree with an unknown parent does not validate.
  const snapshot_data = [
    {
      key: 'beta',
      value: {
        parent_frame_name: 'foo',
      },
    },
  ];
  assert.throws(
    () => validate_frame_tree_snapshot(_create_snapshot(snapshot_data)),
    ValidateFrameTreeUnknownFrameError,
  );
});

test('test_frame_tree_math_single_edge', () => {
  const snapshot_data = [
    {
      key: 'beta',
      value: {
        parent_frame_name: 'alpha',
        parent_tform_child: {
          position: {
            x: 10,
            y: 0,
            z: 0,
          },
        },
      },
    },
    {
      key: 'alpha',
      value: {
        parent_frame_name: '',
      },
    },
  ];
  const frame_tree = _create_snapshot(snapshot_data);
  assert.ok(validate_frame_tree_snapshot(frame_tree));
  assert.ok(_do_poses_match(10, 0, 0, get_a_tform_b(frame_tree, 'alpha', 'beta')));
  assert.ok(_do_poses_match(-10, 0, 0, get_a_tform_b(frame_tree, 'beta', 'alpha')));
  assert.ok(_do_poses_match(0, 0, 0, get_a_tform_b(frame_tree, 'alpha', 'alpha')));
  assert.ok(_do_poses_match(0, 0, 0, get_a_tform_b(frame_tree, 'beta', 'beta')));
  assert.ok(!get_a_tform_b(frame_tree, 'omega', 'alpha'));
  assert.ok(!get_a_tform_b(frame_tree, 'alpha', 'omega'));
  assert.ok(!get_a_tform_b(frame_tree, 'omega', 'omega'));
  assert.ok(!get_a_tform_b(frame_tree, 'omega', 'psi'));
});

test('test_frame_tree_math_two_edges', () => {
  const snapshot_data = [
    {
      key: 'beta',
      value: {
        parent_frame_name: 'alpha',
        parent_tform_child: {
          position: {
            x: 10,
            y: 0,
            z: 0,
          },
        },
      },
    },
    {
      key: 'gamma',
      value: {
        parent_frame_name: 'alpha',
        parent_tform_child: {
          position: {
            x: 0,
            y: 0,
            z: 10,
          },
        },
      },
    },
    {
      key: 'alpha',
      value: {
        parent_frame_name: '',
      },
    },
  ];
  const frame_tree = _create_snapshot(snapshot_data);
  assert.ok(validate_frame_tree_snapshot(frame_tree));
  assert.ok(_do_poses_match(10, 0, 0, get_a_tform_b(frame_tree, 'alpha', 'beta')));
  assert.ok(_do_poses_match(0, 0, 10, get_a_tform_b(frame_tree, 'alpha', 'gamma')));
  assert.ok(_do_poses_match(-10, 0, 0, get_a_tform_b(frame_tree, 'beta', 'alpha')));
  assert.ok(_do_poses_match(-10, 0, 10, get_a_tform_b(frame_tree, 'beta', 'gamma')));
  assert.ok(_do_poses_match(0, 0, -10, get_a_tform_b(frame_tree, 'gamma', 'alpha')));
  assert.ok(_do_poses_match(10, 0, -10, get_a_tform_b(frame_tree, 'gamma', 'beta')));
});

test('test_frame_tree_math_chain', () => {
  const snapshot_data = [
    {
      key: 'beta',
      value: {
        parent_frame_name: 'alpha',
        parent_tform_child: {
          position: {
            x: 10,
            y: 0,
            z: 0,
          },
        },
      },
    },
    {
      key: 'gamma',
      value: {
        parent_frame_name: 'beta',
        parent_tform_child: {
          position: {
            x: 0,
            y: 0,
            z: 10,
          },
        },
      },
    },
    {
      key: 'alpha',
      value: {
        parent_frame_name: '',
      },
    },
  ];
  const frame_tree = _create_snapshot(snapshot_data);
  assert.ok(validate_frame_tree_snapshot(frame_tree));
  assert.ok(_do_poses_match(10, 0, 0, get_a_tform_b(frame_tree, 'alpha', 'beta')));
  assert.ok(_do_poses_match(10, 0, 10, get_a_tform_b(frame_tree, 'alpha', 'gamma')));
  assert.ok(_do_poses_match(-10, 0, 0, get_a_tform_b(frame_tree, 'beta', 'alpha')));
  assert.ok(_do_poses_match(0, 0, 10, get_a_tform_b(frame_tree, 'beta', 'gamma')));
  assert.ok(_do_poses_match(-10, 0, -10, get_a_tform_b(frame_tree, 'gamma', 'alpha')));
  assert.ok(_do_poses_match(0, 0, -10, get_a_tform_b(frame_tree, 'gamma', 'beta')));
});

test('test_frame_tree_math_big_tree', () => {
  const snapshot_data = [
    {
      key: 'beta',
      value: {
        parent_frame_name: 'alpha',
        parent_tform_child: {
          position: {
            x: 10,
            y: 0,
            z: 0,
          },
        },
      },
    },
    {
      key: 'gamma',
      value: {
        parent_frame_name: 'alpha',
        parent_tform_child: {
          position: {
            x: 0,
            y: 0,
            z: 10,
          },
        },
      },
    },
    {
      key: 'delta',
      value: {
        parent_frame_name: 'beta',
        parent_tform_child: {
          position: {
            x: 100,
            y: 0,
            z: 0,
          },
        },
      },
    },
    {
      key: 'epsilon',
      value: {
        parent_frame_name: 'beta',
        parent_tform_child: {
          position: {
            x: 1000,
            y: 0,
            z: 0,
          },
        },
      },
    },
    {
      key: 'zeta',
      value: {
        parent_frame_name: 'gamma',
        parent_tform_child: {
          position: {
            x: 0,
            y: 0,
            z: 100,
          },
        },
      },
    },
    {
      key: 'eta',
      value: {
        parent_frame_name: 'gamma',
        parent_tform_child: {
          position: {
            x: 0,
            y: 0,
            z: 1000,
          },
        },
      },
    },
    {
      key: 'alpha',
      value: {
        parent_frame_name: '',
      },
    },
  ];
  const frame_tree = _create_snapshot(snapshot_data);
  assert.ok(validate_frame_tree_snapshot(frame_tree));

  // Alpha as source frame
  assert.ok(_do_poses_match(0, 0, 0, get_a_tform_b(frame_tree, 'alpha', 'alpha')));
  assert.ok(_do_poses_match(10, 0, 0, get_a_tform_b(frame_tree, 'alpha', 'beta')));
  assert.ok(_do_poses_match(0, 0, 10, get_a_tform_b(frame_tree, 'alpha', 'gamma')));
  assert.ok(_do_poses_match(110, 0, 0, get_a_tform_b(frame_tree, 'alpha', 'delta')));
  assert.ok(_do_poses_match(1010, 0, 0, get_a_tform_b(frame_tree, 'alpha', 'epsilon')));
  assert.ok(_do_poses_match(0, 0, 110, get_a_tform_b(frame_tree, 'alpha', 'zeta')));
  assert.ok(_do_poses_match(0, 0, 1010, get_a_tform_b(frame_tree, 'alpha', 'eta')));

  // Beta as source frame
  assert.ok(_do_poses_match(-10, 0, 0, get_a_tform_b(frame_tree, 'beta', 'alpha')));
  assert.ok(_do_poses_match(0, 0, 0, get_a_tform_b(frame_tree, 'beta', 'beta')));
  assert.ok(_do_poses_match(-10, 0, 10, get_a_tform_b(frame_tree, 'beta', 'gamma')));
  assert.ok(_do_poses_match(100, 0, 0, get_a_tform_b(frame_tree, 'beta', 'delta')));
  assert.ok(_do_poses_match(1000, 0, 0, get_a_tform_b(frame_tree, 'beta', 'epsilon')));
  assert.ok(_do_poses_match(-10, 0, 110, get_a_tform_b(frame_tree, 'beta', 'zeta')));
  assert.ok(_do_poses_match(-10, 0, 1010, get_a_tform_b(frame_tree, 'beta', 'eta')));

  // Gamma as source frame
  assert.ok(_do_poses_match(0, 0, -10, get_a_tform_b(frame_tree, 'gamma', 'alpha')));
  assert.ok(_do_poses_match(10, 0, -10, get_a_tform_b(frame_tree, 'gamma', 'beta')));
  assert.ok(_do_poses_match(0, 0, 0, get_a_tform_b(frame_tree, 'gamma', 'gamma')));
  assert.ok(_do_poses_match(110, 0, -10, get_a_tform_b(frame_tree, 'gamma', 'delta')));
  assert.ok(_do_poses_match(1010, 0, -10, get_a_tform_b(frame_tree, 'gamma', 'epsilon')));
  assert.ok(_do_poses_match(0, 0, 100, get_a_tform_b(frame_tree, 'gamma', 'zeta')));
  assert.ok(_do_poses_match(0, 0, 1000, get_a_tform_b(frame_tree, 'gamma', 'eta')));

  // Delta as source frame
  assert.ok(_do_poses_match(-110, 0, 0, get_a_tform_b(frame_tree, 'delta', 'alpha')));
  assert.ok(_do_poses_match(-100, 0, 0, get_a_tform_b(frame_tree, 'delta', 'beta')));
  assert.ok(_do_poses_match(-110, 0, 10, get_a_tform_b(frame_tree, 'delta', 'gamma')));
  assert.ok(_do_poses_match(0, 0, 0, get_a_tform_b(frame_tree, 'delta', 'delta')));
  assert.ok(_do_poses_match(900, 0, 0, get_a_tform_b(frame_tree, 'delta', 'epsilon')));
  assert.ok(_do_poses_match(-110, 0, 110, get_a_tform_b(frame_tree, 'delta', 'zeta')));
  assert.ok(_do_poses_match(-110, 0, 1010, get_a_tform_b(frame_tree, 'delta', 'eta')));

  // Epsilon as source frame
  assert.ok(_do_poses_match(-1010, 0, 0, get_a_tform_b(frame_tree, 'epsilon', 'alpha')));
  assert.ok(_do_poses_match(-1000, 0, 0, get_a_tform_b(frame_tree, 'epsilon', 'beta')));
  assert.ok(_do_poses_match(-1010, 0, 10, get_a_tform_b(frame_tree, 'epsilon', 'gamma')));
  assert.ok(_do_poses_match(-900, 0, 0, get_a_tform_b(frame_tree, 'epsilon', 'delta')));
  assert.ok(_do_poses_match(0, 0, 0, get_a_tform_b(frame_tree, 'epsilon', 'epsilon')));
  assert.ok(_do_poses_match(-1010, 0, 110, get_a_tform_b(frame_tree, 'epsilon', 'zeta')));
  assert.ok(_do_poses_match(-1010, 0, 1010, get_a_tform_b(frame_tree, 'epsilon', 'eta')));

  // Zeta as source frame
  assert.ok(_do_poses_match(0, 0, -110, get_a_tform_b(frame_tree, 'zeta', 'alpha')));
  assert.ok(_do_poses_match(10, 0, -110, get_a_tform_b(frame_tree, 'zeta', 'beta')));
  assert.ok(_do_poses_match(0, 0, -100, get_a_tform_b(frame_tree, 'zeta', 'gamma')));
  assert.ok(_do_poses_match(110, 0, -110, get_a_tform_b(frame_tree, 'zeta', 'delta')));
  assert.ok(_do_poses_match(1010, 0, -110, get_a_tform_b(frame_tree, 'zeta', 'epsilon')));
  assert.ok(_do_poses_match(0, 0, 0, get_a_tform_b(frame_tree, 'zeta', 'zeta')));
  assert.ok(_do_poses_match(0, 0, 900, get_a_tform_b(frame_tree, 'zeta', 'eta')));

  // Eta as source frame
  assert.ok(_do_poses_match(0, 0, -1010, get_a_tform_b(frame_tree, 'eta', 'alpha')));
  assert.ok(_do_poses_match(10, 0, -1010, get_a_tform_b(frame_tree, 'eta', 'beta')));
  assert.ok(_do_poses_match(0, 0, -1000, get_a_tform_b(frame_tree, 'eta', 'gamma')));
  assert.ok(_do_poses_match(110, 0, -1010, get_a_tform_b(frame_tree, 'eta', 'delta')));
  assert.ok(_do_poses_match(1010, 0, -1010, get_a_tform_b(frame_tree, 'eta', 'epsilon')));
  assert.ok(_do_poses_match(0, 0, -900, get_a_tform_b(frame_tree, 'eta', 'zeta')));
  assert.ok(_do_poses_match(0, 0, 0, get_a_tform_b(frame_tree, 'eta', 'eta')));
});

test('test_get_a_tform_b_se2', () => {
  const snapshot_data = [
    {
      key: 'vision',
      value: {
        parent_frame_name: 'body',
        parent_tform_child: {
          position: {
            x: 1,
            y: 0,
            z: 10,
          },
          rotation: {
            w: 1,
            x: 0,
            y: 0,
            z: 0,
          },
        },
      },
    },
    {
      key: 'special',
      value: {
        parent_frame_name: 'body',
        parent_tform_child: {
          position: {
            x: 3,
            y: 0,
            z: 10,
          },
          rotation: {
            w: 1,
            x: 0,
            y: 0,
            z: 0,
          },
        },
      },
    },
    {
      key: 'fiducial_404',
      value: {
        parent_frame_name: 'vision',
        parent_tform_child: {
          position: {
            x: 4,
            y: 0,
            z: 0,
          },
          rotation: {
            w: 1,
            x: 0,
            y: 0,
            z: 0,
          },
        },
      },
    },
    {
      key: 'body',
      value: {
        parent_frame_name: '',
      },
    },
  ];
  const frame_tree = _create_snapshot(snapshot_data);
  assert.ok(validate_frame_tree_snapshot(frame_tree));

  // Check that a non gravity aligned frame gets rejected.
  const special_tform_body = get_se2_a_tform_b(frame_tree, 'special', 'body');
  assert.equal(special_tform_body, null);

  // Check that a non - existent(gravity aligned) frame is rejected
  const odom_tform_body = get_se2_a_tform_b(frame_tree, 'odom', 'body');
  assert.equal(odom_tform_body, null);

  // Check that a gravity aligned frame is used and properly computed.
  const vision_tform_fiducial_404 = get_se2_a_tform_b(frame_tree, 'vision', 'fiducial_404');
  assert.notEqual(vision_tform_fiducial_404, null);
  assert.ok(Math.abs(vision_tform_fiducial_404.position.getX() - 4) < 1e-6);
  assert.ok(Math.abs(vision_tform_fiducial_404.position.getY()) < 1e-6);
  assert.ok(Math.abs(vision_tform_fiducial_404.angle) < 1e-6);
});

test('test_express_velocity_new_frame', () => {
  const snapshot_data = [
    {
      key: 'vision',
      value: {
        parent_frame_name: 'body',
        parent_tform_child: {
          position: {
            x: 1,
            z: 10,
          },
          rotation: {
            w: 1,
          },
        },
      },
    },
    {
      key: 'odom',
      value: {
        parent_frame_name: 'vision',
        parent_tform_child: {
          position: {
            x: 2,
            z: 10,
          },
          rotation: {
            w: 1,
          },
        },
      },
    },
    {
      key: 'special',
      value: {
        parent_frame_name: 'body',
        parent_tform_child: {
          position: {
            x: 3,
            z: 10,
          },
          rotation: {
            w: 1,
          },
        },
      },
    },
    {
      key: 'fiducial_404',
      value: {
        parent_frame_name: 'vision',
        parent_tform_child: {
          position: {
            x: 4,
            z: 0,
          },
          rotation: {
            w: 1,
          },
        },
      },
    },
    {
      key: 'body',
      value: {
        parent_frame_name: '',
      },
    },
  ];
  const frame_tree = _create_snapshot(snapshot_data);
  assert.ok(validate_frame_tree_snapshot(frame_tree));

  // Transform SE(2) velocity
  const vel_of_body_in_vision = new SE2Velocity(1, 1, 2);
  const vel_of_body_in_odom = express_se2_velocity_in_new_frame(frame_tree, 'vision', 'odom', vel_of_body_in_vision);
  assert.notEqual(vel_of_body_in_odom, null);
  assert.ok(vel_of_body_in_vision instanceof SE2Velocity);
  assert.ok(Math.abs(vel_of_body_in_odom.angular - 2) < 1e-6);
  assert.ok(Math.abs(vel_of_body_in_odom.linear.getX() - 1) < 1e-6);
  assert.ok(Math.abs(vel_of_body_in_odom.linear.getY() - 5) < 1e-6);

  // Transform SE(3) velocity
  const vel_of_body_in_vision_se3 = new SE3Velocity(1, 2, 3, 1, 2, 3);
  const vel_of_body_in_odom_se3 = express_se3_velocity_in_new_frame(
    frame_tree,
    'vision',
    'odom',
    vel_of_body_in_vision_se3,
  );
  assert.notEqual(vel_of_body_in_odom_se3, null);
  assert.ok(vel_of_body_in_vision_se3 instanceof SE3Velocity);
  assert.ok(Math.abs(vel_of_body_in_odom_se3.angular.getX() - 1) < 1e-6);
  assert.ok(Math.abs(vel_of_body_in_odom_se3.angular.getY() - 2) < 1e-6);
  assert.ok(Math.abs(vel_of_body_in_odom_se3.angular.getZ() - 3) < 1e-6);
  assert.ok(Math.abs(vel_of_body_in_odom_se3.linear.getX() - 21) < 1e-6);
  assert.ok(Math.abs(vel_of_body_in_odom_se3.linear.getY() - -2) < 1e-6);
  assert.ok(Math.abs(vel_of_body_in_odom_se3.linear.getZ() - -1) < 1e-6);
});

test('test_express_velocity_types', () => {
  const snapshot_data = [
    {
      key: 'vision',
      value: {
        parent_frame_name: 'body',
        parent_tform_child: {
          position: {
            x: 1,
            z: 10,
          },
          rotation: {
            w: 1,
          },
        },
      },
    },
    {
      key: 'body',
      value: {
        parent_frame_name: '',
      },
    },
  ];
  const frame_tree = _create_snapshot(snapshot_data);
  assert.ok(validate_frame_tree_snapshot(frame_tree));
  const test_vel1 = new SE3Velocity(1.1, 2.2, 3.3, 4.4, 5.5, 6.6);
  assert.ok(!Number.isInteger(test_vel1.linear_velocity_x));
  assert.strictEqual(test_vel1.linear_velocity_x, 1.1);
  assert.strictEqual(test_vel1.linear.getX(), 1.1);
  const test_vel2 = new SE3Velocity(1.1, 2.2, 3.3, 4.4, 5.5, 6.6);
  const test_vel2_proto = test_vel2.to_proto();

  const body_vel = express_se3_velocity_in_new_frame(frame_tree, 'body', 'vision', test_vel2);
  assert.notEqual(body_vel, null);
  assert.ok(!Number.isInteger(body_vel.linear.getX()));
  assert.ok(!Number.isInteger(body_vel.linear_velocity_x));
  assert.strictEqual(body_vel.linear_velocity_x, 56.1);
  assert.strictEqual(body_vel.linear.getX(), 56.1);
  const new_body_vel = express_se3_velocity_in_new_frame(frame_tree, 'body', 'vision', test_vel2_proto);
  assert.notEqual(new_body_vel, null);
  assert.ok(!Number.isInteger(new_body_vel.linear.getX()));
  assert.ok(!Number.isInteger(new_body_vel.linear_velocity_x));
  assert.strictEqual(new_body_vel.linear_velocity_x, 56.1);
  assert.strictEqual(new_body_vel.linear.getX(), 56.1);

  const test_vel3 = new SE2Velocity(1.1, 2.2, 3.3);
  const test_vel3_proto = test_vel3.to_proto();
  const body_vel_vel3 = express_se2_velocity_in_new_frame(frame_tree, 'body', 'vision', test_vel3);
  assert.notEqual(body_vel_vel3, null);
  assert.ok(!Number.isInteger(body_vel_vel3.linear.getX()));
  assert.ok(!Number.isInteger(body_vel_vel3.linear_velocity_x));
  assert.strictEqual(body_vel_vel3.linear_velocity_x, 1.1);
  assert.strictEqual(body_vel_vel3.linear.getX(), 1.1);
  const body_vel_proto = express_se2_velocity_in_new_frame(frame_tree, 'body', 'vision', test_vel3_proto);
  assert.notEqual(body_vel_proto, null);
  assert.ok(!Number.isInteger(body_vel_proto.linear.getX()));
  assert.ok(!Number.isInteger(body_vel_proto.linear_velocity_x));
  assert.strictEqual(body_vel_proto.linear_velocity_x, 1.1);
  assert.strictEqual(body_vel_proto.linear.getX(), 1.1);
});

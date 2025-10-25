'use strict';

const assert = require('node:assert');
const test = require('node:test');

const geometryPb = require('../src/bosdyn/api/geometry_pb');

const {
  validateFrameTreeSnapshot,
  getATformB,
  getSe2ATformB,
  expressSe2VelocityInNewFrame,
  expressSe3VelocityInNewFrame,
  ValidateFrameTreeError,
  ValidateFrameTreeCycleError,
  ValidateFrameTreeDisjointError,
  ValidateFrameTreeUnknownFrameError,
} = require('../src/bosdyn-client/frame_helpers');
const { SE3Pose, SE2Velocity, SE3Velocity, Quat } = require('../src/bosdyn-client/math_helpers');

function _createSnapshot(frameTreeSnapshotArray) {
  const frameTreeSnapshot = new geometryPb.FrameTreeSnapshot();
  frameTreeSnapshotArray.forEach(fts => {
    const t = new geometryPb.FrameTreeSnapshot.ParentEdge().setParentFrameName(fts.value.parentFrameName);
    if (fts.value.parentTformChild) {
      const parentTFormChild = new geometryPb.SE3Pose();
      if (fts.value.parentTformChild.position) {
        const { x, y, z } = fts.value.parentTformChild.position;
        const pos = new geometryPb.Vec3().setX(x).setY(y).setZ(z);
        parentTFormChild.setPosition(pos);
      }

      if (fts.value.parentTformChild.rotation) {
        const { w, x: xR, y: yR, z: zR } = fts.value.parentTformChild.rotation;
        const rot = new geometryPb.Quaternion().setW(w).setX(xR).setY(yR).setZ(zR);
        parentTFormChild.setRotation(rot);
      }

      t.setParentTformChild(parentTFormChild);
    }
    frameTreeSnapshot.getChildToParentEdgeMapMap().set(fts.key, t);
  });
  return frameTreeSnapshot;
}

function _doPosesMatch(x, y, z, poseB) {
  // Hacky approach with string representation
  const poseA = new SE3Pose(x, y, z, new Quat());
  return poseA.toString() === poseB.toString();
}

test('test_validate_snapshot_single_child', () => {
  // Tests that a single edge tree is valid.
  const snapshotData = [
    {
      key: 'beta',
      value: {
        parentFrameName: 'alpha',
      },
    },
    {
      key: 'alpha',
      value: {
        parentFrameName: '',
      },
    },
  ];
  assert.ok(validateFrameTreeSnapshot(_createSnapshot(snapshotData)));
});

test('test_validate_snapshot_two_children', () => {
  // Tests that a tree with two children off of the root is valid.
  const snapshotData = [
    {
      key: 'beta',
      value: {
        parentFrameName: 'alpha',
      },
    },
    {
      key: 'gamma',
      value: {
        parentFrameName: 'alpha',
      },
    },
    {
      key: 'alpha',
      value: {
        parentFrameName: '',
      },
    },
  ];
  assert.ok(validateFrameTreeSnapshot(_createSnapshot(snapshotData)));
});

test('test_validate_snapshot_linear_chain', () => {
  // Tests that a tree with a linear chain is parsed correctly.
  const snapshotData = [
    {
      key: 'beta',
      value: {
        parentFrameName: 'alpha',
      },
    },
    {
      key: 'gamma',
      value: {
        parentFrameName: 'beta',
      },
    },
    {
      key: 'alpha',
      value: {
        parentFrameName: '',
      },
    },
  ];
  assert.ok(validateFrameTreeSnapshot(_createSnapshot(snapshotData)));
});

test('test_validate_snapshot_empty_frameTree', () => {
  // Tests that an empty frame tree does not validate.
  const snapshotData = [];
  assert.throws(() => validateFrameTreeSnapshot(_createSnapshot(snapshotData)), ValidateFrameTreeError);
});

test('test_validate_snapshot_empty_key_name', () => {
  // Tests that a frame tree with an empty child frame name does not validate.
  const snapshotData = [
    {
      key: '',
      value: {
        parentFrameName: 'alpha',
      },
    },
  ];
  assert.throws(() => validateFrameTreeSnapshot(_createSnapshot(snapshotData)), ValidateFrameTreeError);
});

test('test_validate_snapshot_single_edge_cycle', () => {
  // Tests that a frame tree with a single edge that has a cycle does not validate.
  const snapshotData = [
    {
      key: 'alpha',
      value: {
        parentFrameName: 'alpha',
      },
    },
  ];
  assert.throws(() => validateFrameTreeSnapshot(_createSnapshot(snapshotData)), ValidateFrameTreeCycleError);
});

test('test_validate_snapshot_multi_edge_cycle', () => {
  // Tests that a frame tree with a multi-edge cycle does not validate.
  const snapshotData = [
    {
      key: 'beta',
      value: {
        parentFrameName: 'alpha',
      },
    },
    {
      key: 'alpha',
      value: {
        parentFrameName: 'beta',
      },
    },
  ];
  assert.throws(() => validateFrameTreeSnapshot(_createSnapshot(snapshotData)), ValidateFrameTreeCycleError);
});

test('test_validate_snapshot_disjoint', () => {
  // Tests that a frame tree that is disconnected does not validate.
  const snapshotData = [
    {
      key: 'beta',
      value: {
        parentFrameName: 'alpha',
      },
    },
    {
      key: 'delta',
      value: {
        parentFrameName: 'gamma',
      },
    },
    {
      key: 'alpha',
      value: {
        parentFrameName: '',
      },
    },
    {
      key: 'gamma',
      value: {
        parentFrameName: '',
      },
    },
  ];
  assert.throws(() => validateFrameTreeSnapshot(_createSnapshot(snapshotData)), ValidateFrameTreeDisjointError);
});

test('test_validate_snapshot_unknown_parent', () => {
  // Tests that a frame tree with an unknown parent does not validate.
  const snapshotData = [
    {
      key: 'beta',
      value: {
        parentFrameName: 'foo',
      },
    },
  ];
  assert.throws(() => validateFrameTreeSnapshot(_createSnapshot(snapshotData)), ValidateFrameTreeUnknownFrameError);
});

test('test_frameTree_math_single_edge', () => {
  const snapshotData = [
    {
      key: 'beta',
      value: {
        parentFrameName: 'alpha',
        parentTformChild: {
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
        parentFrameName: '',
      },
    },
  ];
  const frameTree = _createSnapshot(snapshotData);
  assert.ok(validateFrameTreeSnapshot(frameTree));
  assert.ok(_doPosesMatch(10, 0, 0, getATformB(frameTree, 'alpha', 'beta')));
  assert.ok(_doPosesMatch(-10, 0, 0, getATformB(frameTree, 'beta', 'alpha')));
  assert.ok(_doPosesMatch(0, 0, 0, getATformB(frameTree, 'alpha', 'alpha')));
  assert.ok(_doPosesMatch(0, 0, 0, getATformB(frameTree, 'beta', 'beta')));
  assert.ok(!getATformB(frameTree, 'omega', 'alpha'));
  assert.ok(!getATformB(frameTree, 'alpha', 'omega'));
  assert.ok(!getATformB(frameTree, 'omega', 'omega'));
  assert.ok(!getATformB(frameTree, 'omega', 'psi'));
});

test('test_frameTree_math_two_edges', () => {
  const snapshotData = [
    {
      key: 'beta',
      value: {
        parentFrameName: 'alpha',
        parentTformChild: {
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
        parentFrameName: 'alpha',
        parentTformChild: {
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
        parentFrameName: '',
      },
    },
  ];
  const frameTree = _createSnapshot(snapshotData);
  assert.ok(validateFrameTreeSnapshot(frameTree));
  assert.ok(_doPosesMatch(10, 0, 0, getATformB(frameTree, 'alpha', 'beta')));
  assert.ok(_doPosesMatch(0, 0, 10, getATformB(frameTree, 'alpha', 'gamma')));
  assert.ok(_doPosesMatch(-10, 0, 0, getATformB(frameTree, 'beta', 'alpha')));
  assert.ok(_doPosesMatch(-10, 0, 10, getATformB(frameTree, 'beta', 'gamma')));
  assert.ok(_doPosesMatch(0, 0, -10, getATformB(frameTree, 'gamma', 'alpha')));
  assert.ok(_doPosesMatch(10, 0, -10, getATformB(frameTree, 'gamma', 'beta')));
});

test('test_frameTree_math_chain', () => {
  const snapshotData = [
    {
      key: 'beta',
      value: {
        parentFrameName: 'alpha',
        parentTformChild: {
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
        parentFrameName: 'beta',
        parentTformChild: {
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
        parentFrameName: '',
      },
    },
  ];
  const frameTree = _createSnapshot(snapshotData);
  assert.ok(validateFrameTreeSnapshot(frameTree));
  assert.ok(_doPosesMatch(10, 0, 0, getATformB(frameTree, 'alpha', 'beta')));
  assert.ok(_doPosesMatch(10, 0, 10, getATformB(frameTree, 'alpha', 'gamma')));
  assert.ok(_doPosesMatch(-10, 0, 0, getATformB(frameTree, 'beta', 'alpha')));
  assert.ok(_doPosesMatch(0, 0, 10, getATformB(frameTree, 'beta', 'gamma')));
  assert.ok(_doPosesMatch(-10, 0, -10, getATformB(frameTree, 'gamma', 'alpha')));
  assert.ok(_doPosesMatch(0, 0, -10, getATformB(frameTree, 'gamma', 'beta')));
});

test('test_frameTree_math_big_tree', () => {
  const snapshotData = [
    {
      key: 'beta',
      value: {
        parentFrameName: 'alpha',
        parentTformChild: {
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
        parentFrameName: 'alpha',
        parentTformChild: {
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
        parentFrameName: 'beta',
        parentTformChild: {
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
        parentFrameName: 'beta',
        parentTformChild: {
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
        parentFrameName: 'gamma',
        parentTformChild: {
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
        parentFrameName: 'gamma',
        parentTformChild: {
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
        parentFrameName: '',
      },
    },
  ];
  const frameTree = _createSnapshot(snapshotData);
  assert.ok(validateFrameTreeSnapshot(frameTree));

  // Alpha as source frame
  assert.ok(_doPosesMatch(0, 0, 0, getATformB(frameTree, 'alpha', 'alpha')));
  assert.ok(_doPosesMatch(10, 0, 0, getATformB(frameTree, 'alpha', 'beta')));
  assert.ok(_doPosesMatch(0, 0, 10, getATformB(frameTree, 'alpha', 'gamma')));
  assert.ok(_doPosesMatch(110, 0, 0, getATformB(frameTree, 'alpha', 'delta')));
  assert.ok(_doPosesMatch(1010, 0, 0, getATformB(frameTree, 'alpha', 'epsilon')));
  assert.ok(_doPosesMatch(0, 0, 110, getATformB(frameTree, 'alpha', 'zeta')));
  assert.ok(_doPosesMatch(0, 0, 1010, getATformB(frameTree, 'alpha', 'eta')));

  // Beta as source frame
  assert.ok(_doPosesMatch(-10, 0, 0, getATformB(frameTree, 'beta', 'alpha')));
  assert.ok(_doPosesMatch(0, 0, 0, getATformB(frameTree, 'beta', 'beta')));
  assert.ok(_doPosesMatch(-10, 0, 10, getATformB(frameTree, 'beta', 'gamma')));
  assert.ok(_doPosesMatch(100, 0, 0, getATformB(frameTree, 'beta', 'delta')));
  assert.ok(_doPosesMatch(1000, 0, 0, getATformB(frameTree, 'beta', 'epsilon')));
  assert.ok(_doPosesMatch(-10, 0, 110, getATformB(frameTree, 'beta', 'zeta')));
  assert.ok(_doPosesMatch(-10, 0, 1010, getATformB(frameTree, 'beta', 'eta')));

  // Gamma as source frame
  assert.ok(_doPosesMatch(0, 0, -10, getATformB(frameTree, 'gamma', 'alpha')));
  assert.ok(_doPosesMatch(10, 0, -10, getATformB(frameTree, 'gamma', 'beta')));
  assert.ok(_doPosesMatch(0, 0, 0, getATformB(frameTree, 'gamma', 'gamma')));
  assert.ok(_doPosesMatch(110, 0, -10, getATformB(frameTree, 'gamma', 'delta')));
  assert.ok(_doPosesMatch(1010, 0, -10, getATformB(frameTree, 'gamma', 'epsilon')));
  assert.ok(_doPosesMatch(0, 0, 100, getATformB(frameTree, 'gamma', 'zeta')));
  assert.ok(_doPosesMatch(0, 0, 1000, getATformB(frameTree, 'gamma', 'eta')));

  // Delta as source frame
  assert.ok(_doPosesMatch(-110, 0, 0, getATformB(frameTree, 'delta', 'alpha')));
  assert.ok(_doPosesMatch(-100, 0, 0, getATformB(frameTree, 'delta', 'beta')));
  assert.ok(_doPosesMatch(-110, 0, 10, getATformB(frameTree, 'delta', 'gamma')));
  assert.ok(_doPosesMatch(0, 0, 0, getATformB(frameTree, 'delta', 'delta')));
  assert.ok(_doPosesMatch(900, 0, 0, getATformB(frameTree, 'delta', 'epsilon')));
  assert.ok(_doPosesMatch(-110, 0, 110, getATformB(frameTree, 'delta', 'zeta')));
  assert.ok(_doPosesMatch(-110, 0, 1010, getATformB(frameTree, 'delta', 'eta')));

  // Epsilon as source frame
  assert.ok(_doPosesMatch(-1010, 0, 0, getATformB(frameTree, 'epsilon', 'alpha')));
  assert.ok(_doPosesMatch(-1000, 0, 0, getATformB(frameTree, 'epsilon', 'beta')));
  assert.ok(_doPosesMatch(-1010, 0, 10, getATformB(frameTree, 'epsilon', 'gamma')));
  assert.ok(_doPosesMatch(-900, 0, 0, getATformB(frameTree, 'epsilon', 'delta')));
  assert.ok(_doPosesMatch(0, 0, 0, getATformB(frameTree, 'epsilon', 'epsilon')));
  assert.ok(_doPosesMatch(-1010, 0, 110, getATformB(frameTree, 'epsilon', 'zeta')));
  assert.ok(_doPosesMatch(-1010, 0, 1010, getATformB(frameTree, 'epsilon', 'eta')));

  // Zeta as source frame
  assert.ok(_doPosesMatch(0, 0, -110, getATformB(frameTree, 'zeta', 'alpha')));
  assert.ok(_doPosesMatch(10, 0, -110, getATformB(frameTree, 'zeta', 'beta')));
  assert.ok(_doPosesMatch(0, 0, -100, getATformB(frameTree, 'zeta', 'gamma')));
  assert.ok(_doPosesMatch(110, 0, -110, getATformB(frameTree, 'zeta', 'delta')));
  assert.ok(_doPosesMatch(1010, 0, -110, getATformB(frameTree, 'zeta', 'epsilon')));
  assert.ok(_doPosesMatch(0, 0, 0, getATformB(frameTree, 'zeta', 'zeta')));
  assert.ok(_doPosesMatch(0, 0, 900, getATformB(frameTree, 'zeta', 'eta')));

  // Eta as source frame
  assert.ok(_doPosesMatch(0, 0, -1010, getATformB(frameTree, 'eta', 'alpha')));
  assert.ok(_doPosesMatch(10, 0, -1010, getATformB(frameTree, 'eta', 'beta')));
  assert.ok(_doPosesMatch(0, 0, -1000, getATformB(frameTree, 'eta', 'gamma')));
  assert.ok(_doPosesMatch(110, 0, -1010, getATformB(frameTree, 'eta', 'delta')));
  assert.ok(_doPosesMatch(1010, 0, -1010, getATformB(frameTree, 'eta', 'epsilon')));
  assert.ok(_doPosesMatch(0, 0, -900, getATformB(frameTree, 'eta', 'zeta')));
  assert.ok(_doPosesMatch(0, 0, 0, getATformB(frameTree, 'eta', 'eta')));
});

test('test_get_a_tform_b_se2', () => {
  const snapshotData = [
    {
      key: 'vision',
      value: {
        parentFrameName: 'body',
        parentTformChild: {
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
        parentFrameName: 'body',
        parentTformChild: {
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
        parentFrameName: 'vision',
        parentTformChild: {
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
        parentFrameName: '',
      },
    },
  ];
  const frameTree = _createSnapshot(snapshotData);
  assert.ok(validateFrameTreeSnapshot(frameTree));

  // Check that a non gravity aligned frame gets rejected.
  const specialTformBody = getSe2ATformB(frameTree, 'special', 'body');
  assert.equal(specialTformBody, null);

  // Check that a non - existent(gravity aligned) frame is rejected
  const odomTformBody = getSe2ATformB(frameTree, 'odom', 'body');
  assert.equal(odomTformBody, null);

  // Check that a gravity aligned frame is used and properly computed.
  const visionTformFiducial404 = getSe2ATformB(frameTree, 'vision', 'fiducial_404');
  assert.notEqual(visionTformFiducial404, null);
  assert.ok(Math.abs(visionTformFiducial404.position.getX() - 4) < 1e-6);
  assert.ok(Math.abs(visionTformFiducial404.position.getY()) < 1e-6);
  assert.ok(Math.abs(visionTformFiducial404.angle) < 1e-6);
});

test('test_express_velocity_new_frame', () => {
  const snapshotData = [
    {
      key: 'vision',
      value: {
        parentFrameName: 'body',
        parentTformChild: {
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
        parentFrameName: 'vision',
        parentTformChild: {
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
        parentFrameName: 'body',
        parentTformChild: {
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
        parentFrameName: 'vision',
        parentTformChild: {
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
        parentFrameName: '',
      },
    },
  ];
  const frameTree = _createSnapshot(snapshotData);
  assert.ok(validateFrameTreeSnapshot(frameTree));

  // Transform SE(2) velocity
  const velOfBodyInVision = new SE2Velocity(1, 1, 2);
  const velOfBodyInOdom = expressSe2VelocityInNewFrame(frameTree, 'vision', 'odom', velOfBodyInVision);
  assert.notEqual(velOfBodyInOdom, null);
  assert.ok(velOfBodyInVision instanceof SE2Velocity);
  assert.ok(Math.abs(velOfBodyInOdom.angular - 2) < 1e-6);
  assert.ok(Math.abs(velOfBodyInOdom.linear.getX() - 1) < 1e-6);
  assert.ok(Math.abs(velOfBodyInOdom.linear.getY() - 5) < 1e-6);

  // Transform SE(3) velocity
  const velOfBodyInVisionSe3 = new SE3Velocity(1, 2, 3, 1, 2, 3);
  const velOfBodyInOdomSe3 = expressSe3VelocityInNewFrame(frameTree, 'vision', 'odom', velOfBodyInVisionSe3);
  assert.notEqual(velOfBodyInOdomSe3, null);
  assert.ok(velOfBodyInVisionSe3 instanceof SE3Velocity);
  assert.ok(Math.abs(velOfBodyInOdomSe3.angular.getX() - 1) < 1e-6);
  assert.ok(Math.abs(velOfBodyInOdomSe3.angular.getY() - 2) < 1e-6);
  assert.ok(Math.abs(velOfBodyInOdomSe3.angular.getZ() - 3) < 1e-6);
  assert.ok(Math.abs(velOfBodyInOdomSe3.linear.getX() - 21) < 1e-6);
  assert.ok(Math.abs(velOfBodyInOdomSe3.linear.getY() - -2) < 1e-6);
  assert.ok(Math.abs(velOfBodyInOdomSe3.linear.getZ() - -1) < 1e-6);
});

test('test_express_velocity_types', () => {
  const snapshotData = [
    {
      key: 'vision',
      value: {
        parentFrameName: 'body',
        parentTformChild: {
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
        parentFrameName: '',
      },
    },
  ];
  const frameTree = _createSnapshot(snapshotData);
  assert.ok(validateFrameTreeSnapshot(frameTree));
  const testVel1 = new SE3Velocity(1.1, 2.2, 3.3, 4.4, 5.5, 6.6);
  assert.ok(!Number.isInteger(testVel1.linearVelocityX));
  assert.strictEqual(testVel1.linearVelocityX, 1.1);
  assert.strictEqual(testVel1.linear.getX(), 1.1);
  const testVel2 = new SE3Velocity(1.1, 2.2, 3.3, 4.4, 5.5, 6.6);
  const testVel2Proto = testVel2.toProto();

  const bodyVel = expressSe3VelocityInNewFrame(frameTree, 'body', 'vision', testVel2);
  assert.notEqual(bodyVel, null);
  assert.ok(!Number.isInteger(bodyVel.linear.getX()));
  assert.ok(!Number.isInteger(bodyVel.linearVelocityX));
  assert.strictEqual(bodyVel.linearVelocityX, 56.1);
  assert.strictEqual(bodyVel.linear.getX(), 56.1);
  const newBodyVel = expressSe3VelocityInNewFrame(frameTree, 'body', 'vision', testVel2Proto);
  assert.notEqual(newBodyVel, null);
  assert.ok(!Number.isInteger(newBodyVel.linear.getX()));
  assert.ok(!Number.isInteger(newBodyVel.linearVelocityX));
  assert.strictEqual(newBodyVel.linearVelocityX, 56.1);
  assert.strictEqual(newBodyVel.linear.getX(), 56.1);

  const testVel3 = new SE2Velocity(1.1, 2.2, 3.3);
  const testVel3Proto = testVel3.toProto();
  const bodyVelVel3 = expressSe2VelocityInNewFrame(frameTree, 'body', 'vision', testVel3);
  assert.notEqual(bodyVelVel3, null);
  assert.ok(!Number.isInteger(bodyVelVel3.linear.getX()));
  assert.ok(!Number.isInteger(bodyVelVel3.linearVelocityX));
  assert.strictEqual(bodyVelVel3.linearVelocityX, 1.1);
  assert.strictEqual(bodyVelVel3.linear.getX(), 1.1);
  const bodyVelProto = expressSe2VelocityInNewFrame(frameTree, 'body', 'vision', testVel3Proto);
  assert.notEqual(bodyVelProto, null);
  assert.ok(!Number.isInteger(bodyVelProto.linear.getX()));
  assert.ok(!Number.isInteger(bodyVelProto.linearVelocityX));
  assert.strictEqual(bodyVelProto.linearVelocityX, 1.1);
  assert.strictEqual(bodyVelProto.linear.getX(), 1.1);
});

'use strict';

const assert = require('node:assert');
const test = require('node:test');

const geometryPb = require('../src/bosdyn/api/geometry_pb');
const { EulerZXY } = require('../src/bosdyn-core/geometry');

function _isNear(x1, x2, thresh) {
  return Math.abs(x2 - x1) < thresh;
}

function _dot(q1, q2) {
  return q1.getW() * q2.getW() + q1.getX() * q2.getX() + q1.getY() * q2.getY() + q1.getZ() * q2.getZ();
}

const dataToTest = [
  [
    [0.0, 0.0, 0.0],
    [1.0, 0.0, 0.0, 0.0],
  ],
  [
    [Math.PI, 0.0, 0.0],
    [0.0, 0.0, 0.0, 1.0],
  ],
  [
    [0.0, Math.PI, 0.0],
    [0.0, 1.0, 0.0, 0.0],
  ],
  [
    [0.0, 0.0, Math.PI],
    [0.0, 0.0, 1.0, 0.0],
  ],
  [
    [-Math.PI, 0.0, 0.0],
    [0.0, 0.0, 0.0, -1.0],
  ],
  [
    [0.0, -Math.PI, 0.0],
    [0.0, -1.0, 0.0, 0.0],
  ],
  [
    [0.0, 0.0, -Math.PI],
    [0.0, 0.0, -1.0, 0.0],
  ],
  [
    [-0.25, -0.25, 0.25],
    [0.9748372, -0.1073143, 0.1381593, -0.1381593],
  ],
  [
    [0.0, 0.0, 1.0],
    [0.8775826, 0, 0.4794255, 0],
  ],
  [
    [1.3, 1.1, 1.2],
    [0.3815301, 0.052105, 0.6442849, 0.6607699],
  ],
];

test('test_ypr_to_quaternion_proto', () => {
  dataToTest.forEach(([yrp, wxyz]) => {
    const eulerZxy = new EulerZXY(yrp[0], yrp[1], yrp[2]);
    const quatInitial = new geometryPb.Quaternion().setW(wxyz[0]).setX(wxyz[1]).setY(wxyz[2]).setZ(wxyz[3]);
    const quat = eulerZxy.toQuaternion();
    assert.ok(_isNear(Math.abs(_dot(quat, quatInitial)), 1.0, 1e-6));

    // Do another circular conversion, make sure everything looks ok.
    const eulerZxyFinal = quat.toEulerZxy();
    const quatFinal = eulerZxyFinal.toQuaternion();
    assert.ok(_isNear(Math.abs(_dot(quatFinal, quatInitial)), 1.0, 1e-6));
  });
});

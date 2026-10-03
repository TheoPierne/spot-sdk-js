'use strict';

const assert = require('node:assert');
const test = require('node:test');

const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');
const { DoubleValue } = require('google-protobuf/google/protobuf/wrappers_pb');
const { camelCase } = require('lodash');

const armSurfaceContactPb = require('../src/bosdyn/api/arm_surface_contact_pb');
const armSurfaceContactServicePb = require('../src/bosdyn/api/arm_surface_contact_service_pb');
const gripperCommandPb = require('../src/bosdyn/api/gripper_command_pb');
const trajectoryPb = require('../src/bosdyn/api/trajectory_pb');
const { EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME } = require('../src/bosdyn-client/arm_surface_contact');
const { _editProto } = require('../src/bosdyn-client/robot_command');

test('test_edit_timestamps', () => {
  function _setNewTime(key, proto) {
    const has = camelCase(`has-${key}`);
    if (proto[has] && !proto[has]()) {
      return;
    }

    const set = camelCase(`set-${key}`);
    proto[set](new Timestamp().setSeconds(10));
  }

  const command = new armSurfaceContactServicePb.ArmSurfaceContactCommand().setRequest(
    new armSurfaceContactPb.ArmSurfaceContact.Request()
      .setPoseTrajectoryInTask(new trajectoryPb.SE3Trajectory().setReferenceTime(new Timestamp().setSeconds(25)))
      .setGripperCommand(
        new gripperCommandPb.ClawGripperCommand.Request().setTrajectory(
          new trajectoryPb.ScalarTrajectory().setReferenceTime(new Timestamp().setSeconds(25)),
        ),
      )
      .setMaximumAcceleration(new DoubleValue().setValue(5)),
  );
  _editProto(command, EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME, _setNewTime);
  const request = command.getRequest();
  assert.ok(request.getPoseTrajectoryInTask().getReferenceTime().getSeconds() === 10);
  assert.ok(request.getGripperCommand().getTrajectory().getReferenceTime().getSeconds() === 10);
  assert.ok(request.getMaximumAcceleration().getValue() === 5);
});

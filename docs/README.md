# spot-sdk-js

> The Node.js SDK of Spot, the robot of Boston Dynamics: an unofficial port of the official Python SDK.

spot-sdk-js lets a Node.js application drive Spot and read its data: authentication, time synchronization, leases
and E-Stop, power, robot commands (mobility, arm, gripper), robot state, cameras and point clouds, GraphNav maps and
navigation, missions, autowalk, docking, data logging and acquisition, and the services of payloads.

It follows the Python SDK module by module: the behavior and the protobuf definitions of the Spot SDK **5.2.0**. If
you know the Python SDK, you know this one: the classes have the same names, and the methods the same names in
camelCase (`get_robot_state()` is `getRobotState()`). The [differences](/guide/python-differences) come from
JavaScript: promises, options objects, milliseconds.

```js
const { createStandardSdk, RobotStateClient } = require('spot-sdk-js');

async function main() {
  const sdk = createStandardSdk('MyApp');
  const robot = sdk.createRobot('192.168.80.3');
  await robot.authenticate('user', 'password');

  const stateClient = await robot.ensureClient(RobotStateClient.defaultServiceName);
  const state = await stateClient.getRobotState();
  console.log(`Battery: ${state.getPowerState().getLocomotionChargePercentage().getValue()} %`);
  robot.shutdown();
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
```

## Where to start

- [Installation](/guide/installation): Node.js, the package and the certificate of the robot.
- [Getting started](/guide/getting-started): connect to a robot, power it on and make it stand, step by step.
- [Concepts](/guide/concepts): the `Sdk` and the `Robot`, the clients, the options of the RPCs, the protobuf messages,
  the errors, the logs and the units.
- The guides of each domain: [robot control](/guide/robot-control), [perception](/guide/perception),
  [navigation and missions](/guide/navigation), [data and logs](/guide/data),
  [payloads and services](/guide/payloads), and the [other services](/guide/other-services) (Spot CAM, GPS, Orbit,
  choreography).
- The [API reference](/api/): every module, class and function, generated from the JSDoc of the SDK.
- The [examples](/examples) of the repository, and the [changelog](/changelog).

## Features

- **Clients** for the services of the robot: authentication, directory, time sync, lease, E-Stop, power, robot
  state, robot commands, images, point clouds, local grids, world objects, GraphNav (navigation, recording, map
  processing), autowalk, missions, docking, data buffer, data acquisition, faults, payloads, licenses, Spot CAM, GPS,
  choreography, audio-visual, door, inverse kinematics, manipulation API and more.
- **Helpers**: `RobotCommandBuilder`, the blocking helpers (`blockingStand()`, `blockingDockRobot()`...), the
  keep-alives of the lease and of the E-Stop, the frame and math helpers (`SE3Pose`, `Quat`, `getATformB()`...), the
  data acquisition helpers.
- **Services for payloads**: gRPC servers with `GrpcServiceRunner`, directory and payload registration kept alive,
  image services, data acquisition plugins, area callbacks, custom parameters and service faults.
- **Data formats**: reading and writing BDDF files, the text and JSON formats of the protobuf messages.
- A **command line** with the commands of the Python one (`npx spot-sdk-js --help`).
- **TypeScript** typings for the package and each of its modules.

## Status

The SDK is not an official product of Boston Dynamics. It requires Node.js 24 or later. Its tests compare its
behavior with the Python SDK, and it can talk to a real robot or to a mock robot. Report the bugs and the
differences with the Python SDK on [GitHub](https://github.com/TheoPierne/spot-sdk-js/issues).

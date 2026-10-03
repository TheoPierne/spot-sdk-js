# Robot control

To move, the robot needs three things: a running **E-Stop**, the **lease** of its body held by your client, and its
motors **powered on**. Then the robot command service executes the commands you build with `RobotCommandBuilder`.

## E-Stop

The E-Stop (emergency stop) system cuts the power of the motors when an endpoint asks for it, or when an endpoint stops
checking in. The tablet has one; the [estop example](/examples#e-stop) is a software E-Stop for a computer. An
application can register its own endpoint:

```js
const { EstopClient, EstopEndpoint, EstopKeepAlive } = require('spot-sdk-js');

const estopClient = await robot.ensureClient(EstopClient.defaultServiceName);
// The motors are cut if the endpoint does not check in for 9 seconds.
const endpoint = new EstopEndpoint(estopClient, 'my-estop', 9.0);
// Replaces the configuration of the robot with this single endpoint.
await endpoint.forceSimpleSetup();

// Checks in periodically, in the background, from now on.
const estopKeepAlive = new EstopKeepAlive(endpoint);
try {
  // ... the robot can be powered on.
  await estopKeepAlive.settleThenCut(); // Sit down, then cut the power.
  // await estopKeepAlive.stop();       // Cut the power at once.
  // await estopKeepAlive.allow();      // Release the stop.
} finally {
  await estopKeepAlive.shutdown();
}
```

> [!IMPORTANT]
> An E-Stop runs best in its own process, or on its own computer: if your application hangs, the E-Stop must still
> be able to stop the robot.

`robot.isEstopped()` tells whether the robot is stopped, and `EstopClient.getStatus()` returns the state of the
endpoints.

## Lease

The lease gives the control of a resource of the robot (its body, its arm...) to one client at a time. The commands
carry the lease, which the robot checks.

```js
const { LeaseClient, LeaseKeepAlive } = require('spot-sdk-js');

const leaseClient = await robot.ensureClient(LeaseClient.defaultServiceName);
const leaseKeepAlive = new LeaseKeepAlive(leaseClient, { mustAcquire: true, returnAtExit: true });
await leaseKeepAlive.waitForInitialization();
try {
  // ... commands.
} finally {
  await leaseKeepAlive.shutdown();
}
```

- `mustAcquire` acquires the lease of the body; it fails with `ResourceAlreadyClaimedError` if another client (e.g.
  the tablet) holds it.
- To take the lease from another client, take it first, then keep it alive:

  ```js
  await leaseClient.take();
  const leaseKeepAlive = new LeaseKeepAlive(leaseClient, { returnAtExit: true });
  ```

- `returnAtExit` returns the lease when `shutdown()` is called.
- `onFailureCallback` is called when the lease can no longer be retained (e.g. another client took it).

The leases live in the lease wallet of the robot (`robot.leaseWallet`), where the clients find them. `LeaseClient`
also lists the leases (`listLeases()`), and acquires, takes, retains and returns them one by one.

## Power

```js
await robot.powerOn(20_000); // Waits up to 20 s until the motors are on.
await robot.isPoweredOn(); // true

await robot.powerOff(false, 20_000); // Sits down, then powers off the motors.
await robot.powerOff(true); // Cuts the power at once.
```

The functions of the `power` module control the rest of the robot with a `PowerClient`: `powerOffRobot()` (the whole
robot), `powerCycleRobot()`, `safePowerOffRobot()`, `powerOnPayloadPorts()`, `powerOffWifiRadio()`... Their timeouts
are in milliseconds.

## Robot commands

The `RobotCommandClient` sends the commands; `RobotCommandBuilder` builds them.

```js
const { RobotCommandBuilder, RobotCommandClient, blockingSit, blockingStand } = require('spot-sdk-js');

const commandClient = await robot.ensureClient(RobotCommandClient.defaultServiceName);

await blockingStand(commandClient, 10_000); // Stands, and waits until the robot stands.
const commandId = await commandClient.robotCommand(RobotCommandBuilder.synchroSitCommand());
const feedback = await commandClient.robotCommandFeedback(commandId);
await blockingSit(commandClient, 10_000);
```

`robotCommand()` returns the id of the command at once; `robotCommandFeedback(id)` returns its progress. The blocking
helpers send a command and wait for its end: `blockingStand()`, `blockingSit()`, `blockingSelfright()`, and
`blockingCommand()` for any command.

### Moving

A velocity command moves the robot in its body frame (m/s, rad/s) until its end time, given on the local clock in
seconds:

```js
const { nowSec } = require('spot-sdk-js');

// Walk forward at 0.5 m/s for 2 seconds.
const walk = RobotCommandBuilder.synchroVelocityCommand(0.5, 0, 0);
await commandClient.robotCommand(walk, nowSec() + 2.0);
```

A trajectory command walks to a pose in a frame of the robot:

```js
const { ODOM_FRAME_NAME, SE2Pose, blockForTrajectoryCmd, getSe2ATformB } = require('spot-sdk-js');

// 1 m forward of the current position of the body, in the odometry frame.
const snapshot = await robot.getFrameTreeSnapshot();
const odomTBody = getSe2ATformB(snapshot, ODOM_FRAME_NAME, 'body');
const goal = odomTBody.mult(new SE2Pose(1.0, 0, 0));
const command = RobotCommandBuilder.synchroSe2TrajectoryPointCommand(goal.x, goal.y, goal.angle, ODOM_FRAME_NAME);
const id = await commandClient.robotCommand(command, nowSec() + 10);
await blockForTrajectoryCmd(commandClient, id, undefined, null, 0.5, 10); // Seconds.
```

See [Perception](/guide/perception#frames-and-transforms) for the frames and the poses.

The options of the mobility commands (`bodyHeight`, `footprintRBody`, `locomotionHint`, `params`) set the posture and
the gait. `RobotCommandBuilder.mobilityParams()` builds the full parameters: stairs mode, speed limits, external
forces.

`RobotCommandBuilder.stopCommand()`, `selfrightCommand()`, `batteryChangePoseCommand()` and `safePowerOffCommand()`
complete the set.

### Arm and gripper

On a robot with an arm (`await robot.hasArm()`), the arm commands move it, and `buildSynchroCommand()` combines them
with a mobility command:

```js
const { blockUntilArmArrives } = require('spot-sdk-js');

const unstow = RobotCommandBuilder.armReadyCommand();
await blockUntilArmArrives(commandClient, await commandClient.robotCommand(unstow), 5_000); // Milliseconds.

// The hand 75 cm in front of the body, 25 cm up, in 2 seconds.
const pose = RobotCommandBuilder.armPoseCommand(0.75, 0, 0.25, 1, 0, 0, 0, 'flat_body', { seconds: 2 });
const open = RobotCommandBuilder.clawGripperOpenFractionCommand(0.5);
const command = RobotCommandBuilder.buildSynchroCommand(open, pose);
await blockUntilArmArrives(commandClient, await commandClient.robotCommand(command), 5_000);

await commandClient.robotCommand(RobotCommandBuilder.armStowCommand());
```

The other arm helpers: `armJointCommand()`, `armGazeCommand()`, `armWrenchCommand()`, `armCarryCommand()`,
`clawGripperCloseCommand()`, the arm surface contact client, and the manipulation API client for grasping.

## Docking

With a dock, the robot docks and undocks by itself:

```js
const { blockingDockRobot, blockingUndock, getDockId } = require('spot-sdk-js');

await blockingUndock(robot); // Timeout: 20 s.
// ...
const dockId = await getDockId(robot); // The dock the robot was on, if any.
await blockingDockRobot(robot, dockId ?? 520);
```

`blockingDockRobot()` retries up to 4 times, and the robot must see the fiducial of the dock. `DockingClient` gives
the state of the docking (`getDockingState()`) and the configuration of the docks (`getDockingConfig()`).

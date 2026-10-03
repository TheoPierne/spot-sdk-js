# bosdyn-client/robot_command

For clients to the robot command service.

```js
const { RobotCommandClient, RobotCommandBuilder, RobotCommandStreamingClient, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { NoTimeSyncError, TooDistantError, CommandTimedOutError, UnknownFrameError } = require('spot-sdk-js/src/bosdyn-client/robot_command');
```

| Export | Kind | Description |
|---|---|---|
| [`RobotCommandClient`](#robotcommandclient) | Class | Client for calling RobotCommand services. |
| [`RobotCommandBuilder`](#robotcommandbuilder) | Class | This class contains a set of static helper functions to build and issue robot commands. |
| [`RobotCommandStreamingClient`](#robotcommandstreamingclient) | Class | Client for calling RobotCommand services. |
| [`blockingCommand`](#blockingcommand) | Function | Helper function which uses the RobotCommandService to execute the given command, like blocking_command() in Python (it was missing: each helper had its own loop, which read an absent mobility feedback as a failure and ignored the arm and gripper feedbacks). |
| [`blockingStand`](#blockingstand) | Function | Helper function which uses the RobotCommandService to stand. |
| [`blockingSit`](#blockingsit) | Function | Helper function which uses the RobotCommandService to sit. |
| [`blockingSelfright`](#blockingselfright) | Function | Helper function which uses the RobotCommandService to self-right. |
| [`blockUntilArmArrives`](#blockuntilarmarrives) | Function | Helper that blocks until the arm achieves a finishing state for the specific arm command. |
| [`blockForTrajectoryCmd`](#blockfortrajectorycmd) | Function | Helper that blocks until a trajectory command reaches a desired goal state or a timeout is reached. |
| [`EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME`](#constants) | Constant |  |
| [`END_TIME_EDIT_TREE`](#constants) | Constant |  |
| [`RobotCommandResponseError`](#robotcommandresponseerror) | Class | General class of errors for RobotCommand service. |
| [`NoTimeSyncError`](#notimesyncerror) | Class | Client has not done timesync with robot. |
| [`ExpiredError`](#expirederror) | Class | The command was received after its max_duration had already passed. |
| [`TooDistantError`](#toodistanterror) | Class | The command end time was too far in the future. |
| [`NotPoweredOnError`](#notpoweredonerror) | Class | The robot must be powered on to accept a command. |
| [`BehaviorFaultError`](#behaviorfaulterror) | Class | The robot may not be commanded with uncleared behavior faults. |
| [`DockedError`](#dockederror) | Class | The command cannot be executed while the robot is docked. |
| [`NotClearedError`](#notclearederror) | Class | Behavior fault could not be cleared. |
| [`UnsupportedError`](#unsupportederror) | Class | The API supports this request, but the system does not support this request. |
| [`CommandFailedError`](#commandfailederror) | Class | Command indicated it failed in its feedback. |
| [`CommandFailedErrorWithFeedback`](#commandfailederrorwithfeedback) | Class | Command failed, and includes the feedback response (like Python's CommandFailedErrorWithFeedback). |
| [`CommandTimedOutError`](#commandtimedouterror) | Class | Timed out waiting for SUCCESS response from robot command. |
| [`UnknownFrameError`](#unknownframeerror) | Class | Robot does not know how to handle supplied frame. |

## RobotCommandResponseError

```ts
class RobotCommandResponseError extends ResponseError
```

General class of errors for RobotCommand service.

## NoTimeSyncError

```ts
class NoTimeSyncError extends RobotCommandResponseError
```

Client has not done timesync with robot.

## ExpiredError

```ts
class ExpiredError extends RobotCommandResponseError
```

The command was received after its max_duration had already passed.

## TooDistantError

```ts
class TooDistantError extends RobotCommandResponseError
```

The command end time was too far in the future.

## NotPoweredOnError

```ts
class NotPoweredOnError extends RobotCommandResponseError
```

The robot must be powered on to accept a command.

## BehaviorFaultError

```ts
class BehaviorFaultError extends RobotCommandResponseError
```

The robot may not be commanded with uncleared behavior faults.

## DockedError

```ts
class DockedError extends RobotCommandResponseError
```

The command cannot be executed while the robot is docked.

## NotClearedError

```ts
class NotClearedError extends RobotCommandResponseError
```

Behavior fault could not be cleared.

## UnsupportedError

```ts
class UnsupportedError extends RobotCommandResponseError
```

The API supports this request, but the system does not support this request.

## CommandFailedError

```ts
class CommandFailedError extends BosdynError
```

Command indicated it failed in its feedback.

## CommandFailedErrorWithFeedback

```ts
class CommandFailedErrorWithFeedback extends CommandFailedError
```

Command failed, and includes the feedback response (like Python's CommandFailedErrorWithFeedback).

### new CommandFailedErrorWithFeedback

```ts
constructor(message: string, feedback?: robotCommandPb.RobotCommandFeedbackResponse | null)
```

| Parameter | Type | Description |
|---|---|---|
| `message` | `string` | The error message. |
| `feedback` | `robotCommandPb.RobotCommandFeedbackResponse \| null` | The feedback response. (*Optional*, default `null`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `feedback` | `robotCommandPb.RobotCommandFeedbackResponse \| null` |  |

## CommandTimedOutError

```ts
class CommandTimedOutError extends BosdynError
```

Timed out waiting for SUCCESS response from robot command.

## UnknownFrameError

```ts
class UnknownFrameError extends RobotCommandResponseError
```

Robot does not know how to handle supplied frame.

## RobotCommandClient

```ts
class RobotCommandClient extends BaseClient<RobotCommandServiceClient>
```

Client for calling RobotCommand services.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'robot-command'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.RobotCommandService'`. |
| `timesyncEndpoint` | `TimeSyncEndpoint` | Accessor for timesync-endpoint that was grabbed via 'updateFrom()'. Read-only. |

### robotCommand

```ts
robotCommand(command: robotCommandPb.RobotCommand, endTimeSecs?: number, timesyncEndpoint?: TimeSyncEndpoint, lease?: Lease, args?: Object): Promise<number>
```

Issue a command to the robot asynchronously.

| Parameter | Type | Description |
|---|---|---|
| `command` | `robotCommandPb.RobotCommand` | Command to issue. |
| `endTimeSecs` | `number` | End time for the command in seconds. (*Optional*) |
| `timesyncEndpoint` | `TimeSyncEndpoint` | Timesync endpoint. (*Optional*) |
| `lease` | `Lease` | Lease object to use for the command. (*Optional*) |
| `args` | `Object` | Options to provide for gRPC request. (*Optional*) |

**Returns** `Promise<number>`: Return the id of the command's callback.

**Throws**

- `RpcError` Problem communicating with the robot.
- `InvalidRequestError` Invalid request received by the robot.
- `UnsupportedError` The API supports this request, but the system does not support this request.
- `NoTimeSyncError` Client has not done timesync with robot.
- `ExpiredError` The command was received after its max_duration had already passed.
- `TooDistantError` The command end time was too far in the future.
- `NotPoweredOnError` The robot must be powered on to accept a command.
- `BehaviorFaultError` The robot is faulted and the fault must be cleared first.
- `DockedError` The command cannot be executed while the robot is docked.
- `UnknownFrameError` Robot does not know how to handle supplied frame.

### robotCommandFeedback

```ts
robotCommandFeedback(robotCommandId?: number | null, args?: Object): Promise<robotCommandPb.RobotCommandFeedbackResponse>
```

Get feedback from a previously issued command.

| Parameter | Type | Description |
|---|---|---|
| `robotCommandId` | `number \| null` | ID of the robot command to get feedback on. (*Optional*, default `null`) |
| `args` | `Object` | Options to provide for gRPC request. (*Optional*) |

**Returns** `Promise<robotCommandPb.RobotCommandFeedbackResponse>`

**Throws**

- `RpcError` Problem communicating with the robot.

### clearBehaviorFault

```ts
clearBehaviorFault(behaviorFaultId: string, lease?: Lease, args?: Object): Promise<boolean>
```

Clear a behavior fault on the robot.

| Parameter | Type | Description |
|---|---|---|
| `behaviorFaultId` | `string` | ID of the behavior fault. |
| `lease` | `Lease` | Lease information to use in the message. (*Optional*) |
| `args` | `Object` | Options to provide for gRPC request. (*Optional*) |

**Returns** `Promise<boolean>`: Boolean whether response status is STATUS_CLEARED.

## RobotCommandBuilder

```ts
class RobotCommandBuilder
```

This class contains a set of static helper functions to build and issue robot commands.
This is not intended to cover every use case, but rather give developers a starting point for
issuing commands to the robot.The robot command proto uses several advanced protobuf techniques,
including the use of Any and OneOf.

A RobotCommand is composed of one or more commands. The set of valid commands is robot /
hardware specific. An armless spot only accepts one command at a time. Each command may or may
not take a generic param object. These params are also robot / hardware dependent.

### RobotCommandBuilder.stopCommand

```ts
static stopCommand(): robotCommandPb.RobotCommand
```

Command to stop with minimal motion. If the robot is walking, it will transition to
stand. If the robot is standing or sitting, it will do nothing.

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.freezeCommand

```ts
static freezeCommand(): robotCommandPb.RobotCommand
```

Command to freeze all joints at their current positions (no balancing control)

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.selfrightCommand

```ts
static selfrightCommand(): robotCommandPb.RobotCommand
```

Command to get the robot in a ready, sitting position. If the robot is on its back, it
will attempt to flip over.

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.batteryChangePoseCommand

```ts
static batteryChangePoseCommand(dirHint?: number): robotCommandPb.RobotCommand
```

Command that will have the robot sit down (if not already sitting) and roll onto its side
for easier battery access.

| Parameter | Type | Description |
|---|---|---|
| `dirHint` | `number` | Direction to roll over: 1-right/2-left (*Optional*) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.payloadEstimationCommand

```ts
static payloadEstimationCommand(): robotCommandPb.RobotCommand
```

Command to get the robot estimate payload mass.
Commands robot to stand and execute a routine to estimate the mass properties of an
unregistered payload attached to the robot.

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.safePowerOffCommand

```ts
static safePowerOffCommand(): robotCommandPb.RobotCommand
```

Command to get robot into a position where it is safe to power down, then power down. If
the robot has fallen, it will power down directly. If the robot is not in a safe position,
it will get to a safe position before powering down. The robot will not power down until it
is in a safe state.

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.constrainedManipulationCommand

```ts
static constrainedManipulationCommand(taskType: basicCommandPb.ConstrainedManipulationCommand.Request.TaskType, initWrenchDirectionInFrameName: geometryPb.Wrench, forceLimit: number, torqueLimit: number, frameName: string, tangentialSpeed?: number | null, rotationalSpeed?: number | null, targetLinearPosition?: number | null, targetAngle?: number | null, controlMode?: basicCommandPb.ConstrainedManipulationCommand.Request.ControlMode, resetEstimator?: (wrappersPb.BoolValue | boolean) | null): robotCommandPb.RobotCommand
```

Command constrained manipulation.

| Parameter | Type | Description |
|---|---|---|
| `taskType` | `basicCommandPb.ConstrainedManipulationCommand.Request.TaskType` | The task type |
| `initWrenchDirectionInFrameName` | `geometryPb.Wrench` |  |
| `forceLimit` | `number` |  |
| `torqueLimit` | `number` |  |
| `frameName` | `string` |  |
| `tangentialSpeed` | `number \| null` | (*Optional*, default `null`) |
| `rotationalSpeed` | `number \| null` | (*Optional*, default `null`) |
| `targetLinearPosition` | `number \| null` | (*Optional*, default `null`) |
| `targetAngle` | `number \| null` | (*Optional*, default `null`) |
| `controlMode` | `basicCommandPb.ConstrainedManipulationCommand.Request.ControlMode` | (*Optional*, default `CONTROL_MODE_VELOCITY`) |
| `resetEstimator` | `(wrappersPb.BoolValue \| boolean) \| null` | (*Optional*, default `BoolValue(true)`) |

**Returns** `robotCommandPb.RobotCommand`

**Throws**

- `Error` No speed, both targets, or no target in position control (like Python).

### RobotCommandBuilder.jointCommand

```ts
static jointCommand(): robotCommandPb.RobotCommand
```

Command to activate the joint control of the robot (the joint requests are then streamed with
RobotCommandStreamingClient.sendJointControlCommands()).

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.synchroSe2TrajectoryPointCommand

```ts
static synchroSe2TrajectoryPointCommand(goalX: number, goalY: number, goalHeading: number, frameName: string, options?: {
    /**
     * Spot specific parameters for mobility commands. If not
     * set, this will be constructed using other args.
     */
    params?: spotCommandPb.MobilityParams | null | undefined;
    /**
     * Height, meters, relative to a nominal stand height.
     */
    bodyHeight?: number | undefined;
    /**
     * Locomotion hint to use for the trajectory
     * command.
     */
    locomotionHint?: spotCommandPb.LocomotionHint | undefined;
    /**
     * Option to input a RobotCommand (not containing a
     * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added
     * to the returned RobotCommand.
     */
    buildOnCommand?: robotCommandPb.RobotCommand | null | undefined;
}): robotCommandPb.RobotCommand
```

Command robot to move to pose along a 2D plane. Pose can be specified in the world
(kinematic odometry) frame or the robot body frame. The arguments body_height and
locomotion_hint are ignored if params argument is passed.
A trajectory command requires an end time. End time is not set in this function, but rather
is set externally before call to RobotCommandService.

| Parameter | Type | Description |
|---|---|---|
| `goalX` | `number` | Position X coordinate. |
| `goalY` | `number` | Position Y coordinate. |
| `goalHeading` | `number` | Pose heading in radians. |
| `frameName` | `string` | Name of the frame to use. |
| `options` | `{ /** * Spot specific parameters for mobility commands. If not * set, this will be constructed using other args. */ params?: spotCommandPb.MobilityParams \| null \| undefined; /** * Height, meters, relative to a nominal stand height. */ bodyHeight?: number \| undefined; /** * Locomotion hint to use for the trajectory * command. */ locomotionHint?: spotCommandPb.LocomotionHint \| undefined; /** * Option to input a RobotCommand (not containing a * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added * to the returned RobotCommand. */ buildOnCommand?: robotCommandPb.RobotCommand \| null \| undefined; }` | The trajectory options (*Optional*) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.synchroSe2TrajectoryCommand

```ts
static synchroSe2TrajectoryCommand(goalSe2: any, frameName: any, options?: {
    /**
     * Spot specific parameters for mobility commands. If not
     * set, this will be constructed using other args.
     */
    params?: spotCommandPb.MobilityParams | null | undefined;
    /**
     * Height, meters, relative to a nominal stand height.
     */
    bodyHeight?: number | undefined;
    /**
     * Locomotion hint to use for the trajectory
     * command.
     */
    locomotionHint?: spotCommandPb.LocomotionHint | undefined;
    /**
     * Option to input a RobotCommand (not containing a
     * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added
     * to the returned RobotCommand.
     */
    buildOnCommand?: robotCommandPb.RobotCommand | null | undefined;
}): robotCommandPb.RobotCommand
```

Command robot to move to pose along a 2D plane. Pose can be specified in the world
(kinematic odometry or vision world) frames. The arguments body_height and
locomotion_hint are ignored if params argument is passed.
A trajectory command requires an end time. End time is not set in this function, but rather
is set externally before call to RobotCommandService.

| Parameter | Type | Description |
|---|---|---|
| `goalSe2` | `any` | SE2Pose goal. |
| `frameName` | `any` | Name of the frame to use. |
| `options` | `{ /** * Spot specific parameters for mobility commands. If not * set, this will be constructed using other args. */ params?: spotCommandPb.MobilityParams \| null \| undefined; /** * Height, meters, relative to a nominal stand height. */ bodyHeight?: number \| undefined; /** * Locomotion hint to use for the trajectory * command. */ locomotionHint?: spotCommandPb.LocomotionHint \| undefined; /** * Option to input a RobotCommand (not containing a * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added * to the returned RobotCommand. */ buildOnCommand?: robotCommandPb.RobotCommand \| null \| undefined; }` | The trajectory options (*Optional*) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.synchroTrajectoryCommandInBodyFrame

```ts
static synchroTrajectoryCommandInBodyFrame(goalXRtBody: any, goalYRtBody: any, goalHeadingRtBody: any, frameTreeSnapshot: any, params?: any, bodyHeight?: number, locomotionHint?: any, buildOnCommand?: robotCommandPb.RobotCommand | null): robotCommandPb.RobotCommand
```

Command robot to move to pose described relative to the robots body along a 2D plane. For example,
a command to move forward 2 meters at the same heading will have goalXRtBody=2.0, goalYRtBody=0.0,
goalHeadingRtBody=0.0.
The arguments bodyHeight and locomotionHint are ignored if params argument is passed. A trajectory
command requires an end time. End time is not set in this function, but rather is set externally before
call to RobotCommandService.

| Parameter | Type | Description |
|---|---|---|
| `goalXRtBody` | `any` | Position X coordinate described relative to the body frame. |
| `goalYRtBody` | `any` | Position Y coordinate described relative to the body frame. |
| `goalHeadingRtBody` | `any` | Pose heading in radians described relative to the body frame. |
| `frameTreeSnapshot` | `any` | Dictionary representing the child_to_parent_edge_map describing different transforms. This can be acquired using the robot state client directly, or using the robot object's helper function robot.getFrameTreeSnapshot(). |
| `params` | `any` | Spot specific parameters for mobility commands. If not set, this will be constructed using other args. (*Optional*, default `null`) |
| `bodyHeight` | `number` | Height, meters, relative to a nominal stand height. (*Optional*, default `0.0`) |
| `locomotionHint` | `any` | Locomotion hint to use for the trajectory command. (*Optional*, default `HINT_AUTO`) |
| `buildOnCommand` | `robotCommandPb.RobotCommand \| null` | Option to input a RobotCommand (not containing a fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added to the returned RobotCommand. (*Optional*, default `null`) |

**Returns** `robotCommandPb.RobotCommand`: The go-to point is converted to a non-moving world frame (odom frame).

### RobotCommandBuilder.synchroVelocityCommand

```ts
static synchroVelocityCommand(vX: any, vY: any, vRot: any, options?: {
    /**
     * Spot specific parameters for mobility commands. If not
     * set, this will be constructed using other args.
     */
    params?: spotCommandPb.MobilityParams | null | undefined;
    /**
     * Height, meters, relative to a nominal stand height.
     */
    bodyHeight?: number | undefined;
    /**
     * Locomotion hint to use for the trajectory
     * command.
     */
    locomotionHint?: spotCommandPb.LocomotionHint | undefined;
    /**
     * Option to input a RobotCommand (not containing a
     * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added
     * to the returned RobotCommand.
     */
    buildOnCommand?: robotCommandPb.RobotCommand | null | undefined;
    /**
     * Name of the frame of the velocity.
     */
    frameName?: string | undefined;
}): robotCommandPb.RobotCommand
```

Command robot to move along 2D plane. Velocity should be specified in the robot body
frame. Other frames are currently not supported. The arguments bodyHeight and
locomotionHint are ignored if params argument is passed.
A velocity command requires an end time. End time is not set in this function, but rather
is set externally before call to RobotCommandService.

| Parameter | Type | Description |
|---|---|---|
| `vX` | `any` | Velocity in X direction. |
| `vY` | `any` | Velocity in Y direction. |
| `vRot` | `any` | Velocity heading in radians. |
| `options` | `{ /** * Spot specific parameters for mobility commands. If not * set, this will be constructed using other args. */ params?: spotCommandPb.MobilityParams \| null \| undefined; /** * Height, meters, relative to a nominal stand height. */ bodyHeight?: number \| undefined; /** * Locomotion hint to use for the trajectory * command. */ locomotionHint?: spotCommandPb.LocomotionHint \| undefined; /** * Option to input a RobotCommand (not containing a * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added * to the returned RobotCommand. */ buildOnCommand?: robotCommandPb.RobotCommand \| null \| undefined; /** * Name of the frame of the velocity. */ frameName?: string \| undefined; }` | The trajectory options (*Optional*) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.synchroStandCommand

```ts
static synchroStandCommand(options?: {
    /**
     * Spot specific parameters for mobility commands. If not
     * set, this will be constructed using other args.
     */
    params?: spotCommandPb.MobilityParams | null | undefined;
    /**
     * Height, meters, relative to a nominal stand height.
     */
    bodyHeight?: number | undefined;
    /**
     * The orientation of the body in the footprint frame (no rotation by
     * default).
     */
    footprintRBody?: geometry.EulerZXY | undefined;
    /**
     * Option to input a RobotCommand (not containing a
     * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added
     * to the returned RobotCommand.
     */
    buildOnCommand?: robotCommandPb.RobotCommand | null | undefined;
}): robotCommandPb.RobotCommand
```

Command robot to stand. If the robot is sitting, it will stand up. If the robot is
moving, it will come to a stop. Params can specify a trajectory for the body to follow
while standing. In the simplest case, this can be a specific position+orientation which the
body will hold at. The arguments bodyHeight and footprintRBody are ignored if params
argument is passed.

| Parameter | Type | Description |
|---|---|---|
| `options` | `{ /** * Spot specific parameters for mobility commands. If not * set, this will be constructed using other args. */ params?: spotCommandPb.MobilityParams \| null \| undefined; /** * Height, meters, relative to a nominal stand height. */ bodyHeight?: number \| undefined; /** * The orientation of the body in the footprint frame (no rotation by * default). */ footprintRBody?: geometry.EulerZXY \| undefined; /** * Option to input a RobotCommand (not containing a * fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added * to the returned RobotCommand. */ buildOnCommand?: robotCommandPb.RobotCommand \| null \| undefined; }` | The options of the stand (*Optional*) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.synchroSitCommand

```ts
static synchroSitCommand(options?: {
    params?: any;
    buildOnCommand?: any;
}): robotCommandPb.RobotCommand
```

Command the robot to sit.

| Parameter | Type | Description |
|---|---|---|
| `options` | `{ params?: any; buildOnCommand?: any; }` | (*Optional*) |
| `options.params` | `*` | Spot specific parameters for mobility commands. (*Optional*) |
| `options.buildOnCommand` | `*` | Option to input a RobotCommand (not containing a fullBodyCommand). An armCommand and gripperCommand from this incoming RobotCommand will be added to the returned RobotCommand. (*Optional*) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.stanceCommand

```ts
static stanceCommand(se2FrameName: string, posFlRtFrame: any, posFrRtFrame: any, posHlRtFrame: any, posHrRtFrame: any, accuracy?: number, params?: any, bodyHeight?: any, footprintRBody?: any, buildOnCommand?: any): robotCommandPb.RobotCommand
```

Command robot to stance with the feet at specified positions.
This will cause the robot to reposition its feet. This is not intended to be a mobility
command and will reject commands where the foot position is out of reach without locomoting.
To stance at a far location, try using SE2TrajectoryCommand to safely put the robot at the
correct location first.
Params can specify a trajectory for the body to follow
while stancing. In the simplest case, this can be a specific position+orientation which the
body will hold at. The arguments bodyHeight and footprintRBody are ignored if params
argument is passed.

| Parameter | Type | Description |
|---|---|---|
| `se2FrameName` | `string` | The frame name which the desired foot_positions are described in. |
| `posFlRtFrame` | `any` | Position of front left foot in specified frame. |
| `posFrRtFrame` | `any` | Position of front right foot in specified frame. |
| `posHlRtFrame` | `any` | Position of rear left foot in specified frame. |
| `posHrRtFrame` | `any` | Position of rear right foot in specified frame. |
| `accuracy` | `number` | Required foot positional accuracy in meters (*Optional*) |
| `params` | `any` | Spot specific parameters for mobility commands. If not set, this will be constructed using other args. (*Optional*) |
| `bodyHeight` | `any` | Height, meters, to stand at relative to a nominal stand height. (*Optional*) |
| `footprintRBody` | `any` | The orientation of the body frame with respect to the footprint frame (gravity aligned framed with yaw computed from the stance feet) (*Optional*) |
| `buildOnCommand` | `any` | Option to input a RobotCommand (not containing a full_body_command). An arm_command and gripper_command from this incoming RobotCommand will be added to the returned RobotCommand. (*Optional*) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.followArmCommand

```ts
static followArmCommand(): robotCommandPb.RobotCommand
```

Command robot's body to follow the arm around.

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.armStowCommand

```ts
static armStowCommand(buildOnCommand?: null): robotCommandPb.RobotCommand
```

| Parameter | Type | Description |
|---|---|---|
| `buildOnCommand` | `null` | (*Optional*) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.armReadyCommand

```ts
static armReadyCommand(buildOnCommand?: null): robotCommandPb.RobotCommand
```

| Parameter | Type | Description |
|---|---|---|
| `buildOnCommand` | `null` | (*Optional*) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.armCarryCommand

```ts
static armCarryCommand(buildOnCommand?: null): robotCommandPb.RobotCommand
```

| Parameter | Type | Description |
|---|---|---|
| `buildOnCommand` | `null` | (*Optional*) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.armGazeCommand

```ts
static armGazeCommand(x: any, y: any, z: any, frameName: any, buildOnCommand?: null, frame2TformDesiredHand?: null, frame2Name?: null, maxLinearVel?: null, maxAngularVel?: null, maxAccel?: null): robotCommandPb.RobotCommand
```

Builds a Vec3Trajectory to tell the robot arm to gaze at a point in 3D space.

| Parameter | Type | Description |
|---|---|---|
| `x` | `any` |  |
| `y` | `any` |  |
| `z` | `any` |  |
| `frameName` | `any` |  |
| `buildOnCommand` | `null` | (*Optional*) |
| `frame2TformDesiredHand` | `null` | (*Optional*) |
| `frame2Name` | `null` | (*Optional*) |
| `maxLinearVel` | `null` | (*Optional*) |
| `maxAngularVel` | `null` | (*Optional*) |
| `maxAccel` | `null` | (*Optional*) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.armPoseCommandFromPose

```ts
static armPoseCommandFromPose(handPose: geometryPb.SE3Pose, frameName: string, seconds?: number, buildOnCommand?: robotCommandPb.RobotCommand | null): robotCommandPb.RobotCommand
```

Builds an SE3Trajectory Point to tell robot arm to move to a pose in space relative to the frame specified.
Wraps it in SynchronizedCommand.

| Parameter | Type | Description |
|---|---|---|
| `handPose` | `geometryPb.SE3Pose` | The desired pose of the hand. |
| `frameName` | `string` | Name of the frame relative to which handPose is expressed. |
| `seconds` | `number` | Requested duration of the arm move, in seconds (the default was 5000 s). (*Optional*, default `5`) |
| `buildOnCommand` | `robotCommandPb.RobotCommand \| null` | Optional RobotCommand (not containing a fullBodyCommand): its mobilityCommand and gripperCommand are added to the returned RobotCommand. (*Optional*, default `null`) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.armPoseCommand

```ts
static armPoseCommand(x: number, y: number, z: number, qw: number, qx: number, qy: number, qz: number, frameName: string, options?: {
    seconds?: number;
    buildOnCommand?: robotCommandPb.RobotCommand | null;
}): robotCommandPb.RobotCommand
```

Builds an SE3Trajectory Point to tell robot arm to move to a pose in space relative to the frame specified.
Wraps it in SynchronizedCommand.

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` |  |
| `y` | `number` |  |
| `z` | `number` |  |
| `qw` | `number` |  |
| `qx` | `number` |  |
| `qy` | `number` |  |
| `qz` | `number` |  |
| `frameName` | `string` | Name of the frame relative to which the pose is expressed. |
| `options` | `{ seconds?: number; buildOnCommand?: robotCommandPb.RobotCommand \| null; }` | The duration of the move in seconds (5 by default), and the command to build on (see armPoseCommandFromPose()). (*Optional*) |

**Returns** `robotCommandPb.RobotCommand`

**Throws**

- `TypeError` The options are not an object (a duration passed positionally was ignored).

### RobotCommandBuilder.armWrenchCommand

```ts
static armWrenchCommand(forceX: any, forceY: any, forceZ: any, torqueX: any, torqueY: any, torqueZ: any, frameName: any, seconds?: number, buildOnCommand?: null): robotCommandPb.RobotCommand
```

Builds a command to tell robot arm to exhibit a wrench. Wraps it in a SynchronizedCommand.

| Parameter | Type | Description |
|---|---|---|
| `forceX` | `any` |  |
| `forceY` | `any` |  |
| `forceZ` | `any` |  |
| `torqueX` | `any` |  |
| `torqueY` | `any` |  |
| `torqueZ` | `any` |  |
| `frameName` | `any` |  |
| `seconds` | `number` | (*Optional*) |
| `buildOnCommand` | `null` | (*Optional*) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.clawGripperOpenCommand

```ts
static clawGripperOpenCommand(buildOnCommand?: robotCommandPb.RobotCommand | null, maxAcc?: number | null, maxVel?: number | null): robotCommandPb.RobotCommand
```

Builds a command to open the gripper. Wraps it in SynchronizedCommand.

| Parameter | Type | Description |
|---|---|---|
| `buildOnCommand` | `robotCommandPb.RobotCommand \| null` | (*Optional*, default `null`) |
| `maxAcc` | `number \| null` | Maximum allowable gripper acceleration (a safe low default if unset). (*Optional*, default `null`) |
| `maxVel` | `number \| null` | Maximum allowable gripper velocity (a safe low default if unset). (*Optional*, default `null`) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.clawGripperCloseCommand

```ts
static clawGripperCloseCommand(buildOnCommand?: robotCommandPb.RobotCommand | null, maxAcc?: number | null, maxVel?: number | null, disableForceOnContact?: boolean, maxTorque?: number | null): robotCommandPb.RobotCommand
```

Builds a command to close the gripper. Wraps it in SynchronizedCommand.

| Parameter | Type | Description |
|---|---|---|
| `buildOnCommand` | `robotCommandPb.RobotCommand \| null` | (*Optional*, default `null`) |
| `maxAcc` | `number \| null` | Maximum allowable gripper acceleration (a safe low default if unset). (*Optional*, default `null`) |
| `maxVel` | `number \| null` | Maximum allowable gripper velocity (a safe low default if unset). (*Optional*, default `null`) |
| `disableForceOnContact` | `boolean` | Whether to switch the gripper to force control on contact. (*Optional*, default `false`) |
| `maxTorque` | `number \| null` | Maximum torque applied if contact detected closing the gripper (5.5 Nm if unset). (*Optional*, default `null`) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.clawGripperOpenFractionCommand

```ts
static clawGripperOpenFractionCommand(openFraction: number, buildOnCommand?: robotCommandPb.RobotCommand | null, maxAcc?: number | null, maxVel?: number | null, disableForceOnContact?: boolean, maxTorque?: number | null): robotCommandPb.RobotCommand
```

Builds a command to set the gripper using a fractional input. Wraps it in SynchronizedCommand.

| Parameter | Type | Description |
|---|---|---|
| `openFraction` | `number` | Percentage [0, 1] to open the gripper. 0 fully closed, 1 fully open. |
| `buildOnCommand` | `robotCommandPb.RobotCommand \| null` | (*Optional*, default `null`) |
| `maxAcc` | `number \| null` | Maximum allowable gripper acceleration (a safe low default if unset). (*Optional*, default `null`) |
| `maxVel` | `number \| null` | Maximum allowable gripper velocity (a safe low default if unset). (*Optional*, default `null`) |
| `disableForceOnContact` | `boolean` | Whether to switch the gripper to force control on contact. (*Optional*, default `false`) |
| `maxTorque` | `number \| null` | Maximum torque applied if contact detected closing the gripper (5.5 Nm if unset). (*Optional*, default `null`) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.clawGripperOpenAngleCommand

```ts
static clawGripperOpenAngleCommand(gripperQ: number, buildOnCommand?: robotCommandPb.RobotCommand | null, maxAcc?: number | null, maxVel?: number | null, disableForceOnContact?: boolean, maxTorque?: number | null): robotCommandPb.RobotCommand
```

Builds a command to set the gripper open angle. Wraps it in SynchronizedCommand.

| Parameter | Type | Description |
|---|---|---|
| `gripperQ` | `number` | [-1.5708, 0] where -1.5708 is fully open and 0 is fully closed. |
| `buildOnCommand` | `robotCommandPb.RobotCommand \| null` | (*Optional*, default `null`) |
| `maxAcc` | `number \| null` | Maximum allowable gripper acceleration (a safe low default if unset). (*Optional*, default `null`) |
| `maxVel` | `number \| null` | Maximum allowable gripper velocity (a safe low default if unset). (*Optional*, default `null`) |
| `disableForceOnContact` | `boolean` | Whether to switch the gripper to force control on contact. (*Optional*, default `false`) |
| `maxTorque` | `number \| null` | Maximum torque applied if contact detected closing the gripper (5.5 Nm if unset). (*Optional*, default `null`) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.createArmJointTrajectoryPoint

```ts
static createArmJointTrajectoryPoint(sh0: any, sh1: any, el0: any, el1: any, wr0: any, wr1: any, timeSinceReferenceSecs?: null): armCommandPb.ArmJointTrajectoryPoint
```

| Parameter | Type | Description |
|---|---|---|
| `sh0` | `any` |  |
| `sh1` | `any` |  |
| `el0` | `any` |  |
| `el1` | `any` |  |
| `wr0` | `any` |  |
| `wr1` | `any` |  |
| `timeSinceReferenceSecs` | `null` | (*Optional*) |

**Returns** `armCommandPb.ArmJointTrajectoryPoint`

### RobotCommandBuilder.armJointCommand

```ts
static armJointCommand(sh0: any, sh1: any, el0: any, el1: any, wr0: any, wr1: any, maxVel?: null, maxAccel?: null, buildOnCommand?: null): robotCommandPb.RobotCommand
```

| Parameter | Type | Description |
|---|---|---|
| `sh0` | `any` |  |
| `sh1` | `any` |  |
| `el0` | `any` |  |
| `el1` | `any` |  |
| `wr0` | `any` |  |
| `wr1` | `any` |  |
| `maxVel` | `null` | (*Optional*) |
| `maxAccel` | `null` | (*Optional*) |
| `buildOnCommand` | `null` | (*Optional*) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.armJointMoveHelper

```ts
static armJointMoveHelper(jointPositions: any, times: any, jointVelocities?: any, refTime?: any, maxAcc?: any, maxVel?: any, buildOnCommand?: any, trackingMode?: armCommandPb.TrackingMode): robotCommandPb.RobotCommand
```

Given a set of joint positions, times, and optional velocity, create a synchro command.

| Parameter | Type | Description |
|---|---|---|
| `jointPositions` | `any` | A list of length N with joint positions at each knot point in our trajectory. Each knot joint position is represented as a list of length 6, representing the 6 joint angles [sh0, sh1, el0, el1, wr0, wr1] |
| `times` | `any` | A list of length N with the corresponding time_since_reference for each of our knots |
| `jointVelocities` | `any` | Optional joint velocities at each knot. Same structure as joint_positions (*Optional*) |
| `refTime` | `any` | Optional robot reference time. If unset, we'll use the current synchronized robot time. Setting this is useful for getting a consistent trajectory over a long period of time when many ArmJointMoveRequest commands are chained together. (*Optional*) |
| `maxAcc` | `any` | Optional maximum allowable joint acceleration. Not setting this will lead to the robot using a relatively safe low default. If the user is sure their joint trajectory is safe and achievable, this can be set to a large value so it doesn't get in the way. (*Optional*) |
| `maxVel` | `any` | Optional maximum allowable joint velocity. Same thing about defaults as max_acc (*Optional*) |
| `buildOnCommand` | `any` | Option to input a RobotCommand (not containing a full_body_command). An arm_command and gripper_command from this incoming RobotCommand will be added to the returned RobotCommand. (*Optional*) |
| `trackingMode` | `armCommandPb.TrackingMode` | Optional mode for joint trajectory tracking, like Python 5.2.0 (TRACKING_MODE_SLOW_PRECISE for slow trajectories that require a very high precision). (*Optional*, default `TRACKING_MODE_DEFAULT`) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.armCartesianMoveHelper

```ts
static armCartesianMoveHelper(se3Poses: geometryPb.SE3Pose[], times: number[], rootFrameName: string, wristTformTool?: geometryPb.SE3Pose | null, rootTformTask?: geometryPb.SE3Pose | null, se3Velocities?: geometryPb.SE3Velocity[] | null, refTime?: Timestamp | null, maxAcc?: number | null, maxLinearVel?: number | null, maxAngularVel?: number | null, buildOnCommand?: robotCommandPb.RobotCommand | null): robotCommandPb.RobotCommand
```

Given a set of SE3Poses, times, and optional velocities, create a synchro command containing an
armCartesianCommand.

| Parameter | Type | Description |
|---|---|---|
| `se3Poses` | `geometryPb.SE3Pose[]` | A list of length N with SE3 transforms at each knot point in our trajectory. |
| `times` | `number[]` | A list of length N with the corresponding time_since_reference (seconds) for each of our knots. |
| `rootFrameName` | `string` | The name of the root frame. It must be a valid frame name in the frame_tree. |
| `wristTformTool` | `geometryPb.SE3Pose \| null` | The optional tool pose to use during the move. If unset, defaults to a pose slightly in front of the gripper's palm plate aligned with the wrist's orientation. (*Optional*, default `null`) |
| `rootTformTask` | `geometryPb.SE3Pose \| null` | The SE3 transform between the root and the task frame. If unset, it will treat the root frame as the task frame. (*Optional*, default `null`) |
| `se3Velocities` | `geometryPb.SE3Velocity[] \| null` | An optional list of length N with SE3 velocities at each knot point in our trajectory. (*Optional*, default `null`) |
| `refTime` | `Timestamp \| null` | Optional reference time for the trajectory. If unset, we'll use the current robot-synchronized time. (*Optional*, default `null`) |
| `maxAcc` | `number \| null` | Optional maximum allowable linear acceleration (m/s^2). (*Optional*, default `null`) |
| `maxLinearVel` | `number \| null` | Optional maximum allowable linear velocity (m/s). (*Optional*, default `null`) |
| `maxAngularVel` | `number \| null` | Optional maximum allowable angular velocity (rad/s). (*Optional*, default `null`) |
| `buildOnCommand` | `robotCommandPb.RobotCommand \| null` | Option to input a RobotCommand for synchronous commands. (*Optional*, default `null`) |

**Returns** `robotCommandPb.RobotCommand`

**Throws**

- `ValueError` An invalid trajectory (the asserts of Python).

### RobotCommandBuilder.clawGripperCommandHelper

```ts
static clawGripperCommandHelper(gripperPositions: any, times: any, gripperVelocities?: any, refTime?: any, maxAcc?: any, maxVel?: any, disableForceOnContact?: any, buildOnCommand?: any, maxTorque?: any): robotCommandPb.RobotCommand
```

Given a set of gripper positions, times, and optional velocities, create a synchro command.

| Parameter | Type | Description |
|---|---|---|
| `gripperPositions` | `any` | A list of length N with joint positions at each knot point in our trajectory. |
| `times` | `any` | A list of length N with the corresponding time_since_reference for each of our knots |
| `gripperVelocities` | `any` | Optional joint velocities at each knot. Same structure as gripper_positions. (*Optional*) |
| `refTime` | `any` | Optional robot reference time. If unset, we'll use the current synchronized robot time. Setting this is useful for getting a consistent trajectory over a long period of time when many ClawGripperCommandRequest commands are chained together. (*Optional*) |
| `maxAcc` | `any` | Optional maximum allowable gripper acceleration. Not setting this will lead to the robot using a relatively safe low default. If the user is sure their gripper trajectory is safe and achievable, this can be set to a large value so it doesn't get in the way. (*Optional*) |
| `maxVel` | `any` | Optional maximum allowable gripper velocity. Same thing about defaults as max_acc. (*Optional*) |
| `disableForceOnContact` | `any` | Whether to switch the gripper to force control on contact detection. (*Optional*) |
| `buildOnCommand` | `any` | Option to input a RobotCommand (not containing a full_body_command). An arm_command and mobility_command from this incoming RobotCommand will be added to the returned RobotCommand. (*Optional*) |
| `maxTorque` | `any` | Optional Maximum torque applied if contact detected closing the gripper. If unspecified, a default value of 5.5 (Nm) will be used. (*Optional*) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.armJointFreezeCommand

```ts
static armJointFreezeCommand(buildOnCommand?: robotCommandPb.RobotCommand): robotCommandPb.RobotCommand
```

Returns a RobotCommand with an ArmCommand that will freeze the arm's joints in place.

| Parameter | Type | Description |
|---|---|---|
| `buildOnCommand` | `robotCommandPb.RobotCommand` | Option to input a RobotCommand (not containing a fullBodyCommand). An armCommand and mobilityCommand from this incoming RobotCommand will be added to the returned RobotCommand. (*Optional*) |

**Returns** `robotCommandPb.RobotCommand`

### RobotCommandBuilder.mobilityParams

```ts
static mobilityParams(bodyHeight?: number, footprintRBody?: geometry.EulerZXY, locomotionHint?: spotCommandPb.LocomotionHint, stairHint?: boolean, externalForceParams?: null, stairsMode?: null): spotCommandPb.MobilityParams
```

*********************
Spot mobility params *
*********************

| Parameter | Type | Description |
|---|---|---|
| `bodyHeight` | `number` | (*Optional*) |
| `footprintRBody` | `geometry.EulerZXY` | (*Optional*) |
| `locomotionHint` | `spotCommandPb.LocomotionHint` | (*Optional*) |
| `stairHint` | `boolean` | (*Optional*) |
| `externalForceParams` | `null` | (*Optional*) |
| `stairsMode` | `null` | (*Optional*) |

**Returns** `spotCommandPb.MobilityParams`

### RobotCommandBuilder.bodyPose

```ts
static bodyPose(frameName: string, bodyPose: geometryPb.SE3Pose): spotCommandPb.BodyControlParams.BodyPose
```

Helper to create a BodyControlParams.BodyPose from a single desired bodyPose relative to frameName.

| Parameter | Type | Description |
|---|---|---|
| `frameName` | `string` | Name of the frame relative to which bodyPose is expressed. |
| `bodyPose` | `geometryPb.SE3Pose` | The desired pose of the body. |

**Returns** `spotCommandPb.BodyControlParams.BodyPose`: The desired body pose for a StandCommand.

### RobotCommandBuilder.buildBodyExternalForces

```ts
static buildBodyExternalForces(externalForceIndicator?: spotCommandPb.BodyExternalForceParams.ExternalForceIndicator, overrideExternalForceVec?: null): spotCommandPb.BodyExternalForceParams | null
```

Helper to create Mobility params.

This function allows the user to enable an external force estimator, or set a vector of forces (in the body frame)
which override the estimator with constant external forces.

| Parameter | Type | Description |
|---|---|---|
| `externalForceIndicator` | `spotCommandPb.BodyExternalForceParams.ExternalForceIndicator` | (*Optional*) |
| `overrideExternalForceVec` | `null` | (*Optional*) |

**Returns** `spotCommandPb.BodyExternalForceParams \| null`

### RobotCommandBuilder.buildSynchroCommand

```ts
static buildSynchroCommand(...args: any[]): robotCommandPb.RobotCommand
```

Combines multiple commands into one command. There's no intelligence here on duplicate commands.

| Parameter | Type | Description |
|---|---|---|
| `...args` | `any[]` |  |

**Returns** `robotCommandPb.RobotCommand`

## RobotCommandStreamingClient

```ts
class RobotCommandStreamingClient extends BaseClient<RobotCommandStreamingServiceClient>
```

Client for calling RobotCommand services.
This client is in BETA and may undergo changes in future releases.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'robot-command-streaming'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.RobotCommandStreamingService'`. |

### sendJointControlCommands

```ts
sendJointControlCommands(commandIterator: Iterable<robotCommandPb.JointControlStreamRequest> | AsyncIterable<robotCommandPb.JointControlStreamRequest>, args?: Object): Promise<robotCommandPb.JointControlStreamResponse>
```

Stream joint control commands to the robot.

| Parameter | Type | Description |
|---|---|---|
| `commandIterator` | `Iterable<robotCommandPb.JointControlStreamRequest> \| AsyncIterable<robotCommandPb.JointControlStreamRequest>` | The commands to stream. |
| `args` | `Object` | Options to provide for gRPC request. (*Optional*) |

**Returns** `Promise<robotCommandPb.JointControlStreamResponse>`

## blockingCommand

```ts
export function blockingCommand(commandClient: RobotCommandClient, command: robotCommandPb.RobotCommand, checkStatusFn: (arg0: robotCommandPb.RobotCommandFeedbackResponse) => boolean, endTimeSecs?: number | null, timeoutMsec?: number, updateFrequency?: number): Promise<void>
```

Helper function which uses the RobotCommandService to execute the given command, like blocking_command() in Python
(it was missing: each helper had its own loop, which read an absent mobility feedback as a failure and ignored the
arm and gripper feedbacks).

Blocks until checkStatusFn returns true, or throws if the command times out or fails. This helper checks the main
full_body/synchronized command status (RobotCommandFeedbackStatus), but the caller should check the status of the
specific commands (stand, stow, selfright, etc.) in the callback.

| Parameter | Type | Description |
|---|---|---|
| `commandClient` | `RobotCommandClient` | RobotCommand client. |
| `command` | `robotCommandPb.RobotCommand` | The robot command to issue to the robot. |
| `checkStatusFn` | `(arg0: robotCommandPb.RobotCommandFeedbackResponse) => boolean` | Returns true when the correct statuses are achieved for the specific requested command, and throws CommandFailedErrorWithFeedback if an error state occurs. |
| `endTimeSecs` | `number \| null` | The local end time of the command, in seconds (converted to robot time). (*Optional*, default `null`) |
| `timeoutMsec` | `number` | Timeout for the command, in milliseconds. (*Optional*, default `10_000`) |
| `updateFrequency` | `number` | Update frequency for the command in Hz. (*Optional*, default `1.0`) |

**Returns** `Promise<void>`

**Throws**

- `CommandFailedErrorWithFeedback` Command feedback from robot is not STATUS_PROCESSING.
- `CommandTimedOutError` Command took longer than provided timeout.

## blockingStand

```ts
export function blockingStand(commandClient: RobotCommandClient, timeoutMsec?: number, updateFrequency?: number, params?: spotCommandPb.MobilityParams): Promise<void>
```

Helper function which uses the RobotCommandService to stand.
Blocks until robot is standing, or raises an exception if the command times out or fails.

| Parameter | Type | Description |
|---|---|---|
| `commandClient` | `RobotCommandClient` | RobotCommand client. |
| `timeoutMsec` | `number` | Timeout for the command in milliseconds. (*Optional*, default `10_000`) |
| `updateFrequency` | `number` | Update frequency for the command in Hz. (*Optional*, default `1.0`) |
| `params` | `spotCommandPb.MobilityParams` | Spot specific parameters for mobility commands to optionally set say body_height (*Optional*, default `null`) |

**Returns** `Promise<void>`

**Throws**

- `CommandFailedErrorWithFeedback` Command feedback from robot is not STATUS_PROCESSING.
- `CommandTimedOutError` Command took longer than provided timeout.

## blockingSit

```ts
export function blockingSit(commandClient: RobotCommandClient, timeoutMsec?: number, updateFrequency?: number): Promise<void>
```

Helper function which uses the RobotCommandService to sit.
Blocks until robot is sitting, or raises an exception if the command times out or fails.

| Parameter | Type | Description |
|---|---|---|
| `commandClient` | `RobotCommandClient` | RobotCommand client. |
| `timeoutMsec` | `number` | Timeout for the command in milliseconds. (*Optional*, default `10_000`) |
| `updateFrequency` | `number` | Update frequency for the command in Hz. (*Optional*, default `1.0`) |

**Returns** `Promise<void>`

**Throws**

- `CommandFailedErrorWithFeedback` Command feedback from robot is not STATUS_PROCESSING.
- `CommandTimedOutError` Command took longer than provided timeout.

## blockingSelfright

```ts
export function blockingSelfright(commandClient: RobotCommandClient, timeoutMsec?: number, updateFrequency?: number): Promise<void>
```

Helper function which uses the RobotCommandService to self-right.
Blocks until self-right has completed, or raises an exception if the command times out or fails.

| Parameter | Type | Description |
|---|---|---|
| `commandClient` | `RobotCommandClient` | RobotCommand client. |
| `timeoutMsec` | `number` | Timeout for the command in milliseconds. (*Optional*, default `30_000`) |
| `updateFrequency` | `number` | Update frequency for the command in Hz. (*Optional*, default `1.0`) |

**Returns** `Promise<void>`

**Throws**

- `CommandFailedErrorWithFeedback` Command feedback from robot is not STATUS_PROCESSING.
- `CommandTimedOutError` Command took longer than provided timeout.

## blockUntilArmArrives

```ts
export function blockUntilArmArrives(commandClient: RobotCommandClient, cmdId: number, timeoutMsec?: number | null): Promise<boolean>
```

Helper that blocks until the arm achieves a finishing state for the specific arm command.
This helper will block and check the feedback for ArmCartesianCommand, GazeCommand,
ArmJointMoveCommand, NamedArmPositionsCommand, and ArmImpedanceCommand.

| Parameter | Type | Description |
|---|---|---|
| `commandClient` | `RobotCommandClient` | Robot command client, used to request feedback |
| `cmdId` | `number` | Command ID returned by the robot when the arm movement command was sent. |
| `timeoutMsec` | `number \| null` | Optional number of milliseconds after which we'll return no matter what the robot's state is. (*Optional*, default `null`) |

**Returns** `Promise<boolean>`: true if successfully got to the end of the trajectory, false if the arm stalled or the move was canceled (the arm failed to reach the goal), or at the timeout.

## blockForTrajectoryCmd

```ts
export function blockForTrajectoryCmd(commandClient: RobotCommandClient, cmdId: number, trajectoryEndStatuses?: Iterable<basicCommandPb.SE2TrajectoryCommand.Feedback.Status>, bodyMovementStatuses?: Iterable<basicCommandPb.SE2TrajectoryCommand.Feedback.BodyMovementStatus> | null, feedbackIntervalSecs?: number, timeoutSec?: number | null, logger?: any): Promise<boolean>
```

Helper that blocks until a trajectory command reaches a desired goal state or a timeout is reached.

| Parameter | Type | Description |
|---|---|---|
| `commandClient` | `RobotCommandClient` | the client used to request feedback |
| `cmdId` | `number` | command ID returned by the robot when the trajectory command was sent |
| `trajectoryEndStatuses` | `Iterable<basicCommandPb.SE2TrajectoryCommand.Feedback.Status>` | ] the feedback must have a status which is included in this set of statuses to be considered successfully complete. By default, this includes only the "STATUS_STOPPED" end condition (the deprecated STATUS_AT_GOAL). (*Optional*, default `[STATUS_STOPPED`) |
| `bodyMovementStatuses` | `Iterable<basicCommandPb.SE2TrajectoryCommand.Feedback.BodyMovementStatus> \| null` | the body movement status must be one of these statuses to be considered successfully complete. By default, this is null, which means any body movement status will be accepted. (*Optional*, default `null`) |
| `feedbackIntervalSecs` | `number` | The time (in seconds) to wait before each feedback request checking if the trajectory is complete. Defaults to checking at 10 Hz (requests every 0.1 seconds). (*Optional*, default `0.1`) |
| `timeoutSec` | `number \| null` | optional number of seconds after which we'll return no matter what the robot's state is. (*Optional*, default `null`) |
| `logger` | `any` | The logger print debug statements with. If null, no debug printouts will be sent. (*Optional*, default `null`) |

**Returns** `Promise<boolean>`: True if reaches STATUS_STOPPED, false otherwise.

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `EDIT_TREE_CONVERT_LOCAL_TIME_TO_ROBOT_TIME` | `object` |  |
| `END_TIME_EDIT_TREE` | `object` |  |

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `robotCommandPb` | `spot-sdk-js/src/bosdyn/api/robot_command_pb` |
| `basicCommandPb` | `spot-sdk-js/src/bosdyn/api/basic_command_pb` |
| `geometryPb` | `spot-sdk-js/src/bosdyn/api/geometry_pb` |
| `spotCommandPb` | `spot-sdk-js/src/bosdyn/api/spot/robot_command_pb` |
| `armCommandPb` | `spot-sdk-js/src/bosdyn/api/arm_command_pb` |

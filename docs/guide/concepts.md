# Concepts

## The Sdk and the Robot

An application creates one `Sdk`, then a `Robot` per robot it talks to:

```js
const { createStandardSdk } = require('spot-sdk-js');

const sdk = createStandardSdk('MyApp');
const robot = sdk.createRobot('192.168.80.3');
```

- The **`Sdk`** holds what is common to the robots: the name of the client, the certificate to trust, and the
  clients it can create (`createStandardSdk()` registers the clients of the standard services;
  `sdk.registerServiceClient()` adds others, like the Spot CAM ones).
- The **`Robot`** holds what is specific to one robot: its gRPC channels, its user token (refreshed in the
  background), its lease wallet, its time sync, and its clients. Its methods cover the usual needs:
  `authenticate()`, `timeSync`, `isEstopped()`, `powerOn()`, `powerOff()`, `isPoweredOn()`, `getFrameTreeSnapshot()`,
  `operatorComment()`, `listServices()`.

## Clients

Each service of the robot has a client class, created and cached by the robot:

```js
const { RobotStateClient } = require('spot-sdk-js');

const stateClient = await robot.ensureClient(RobotStateClient.defaultServiceName);
const state = await stateClient.getRobotState();
```

`defaultServiceName` is the name of the service in the directory of the robot (`'robot-state'` here), and
`ensureClient()` returns the same client on each call. The methods of the clients send an RPC and return a promise of
its result, most often a protobuf message. They throw an error when the RPC fails or when the response reports an
error (see [Errors](#errors)).

## Imports

The package root exports the classes, functions and constants of all the modules:

```js
const { createStandardSdk, LeaseClient, LeaseKeepAlive, RobotCommandBuilder, blockingStand } = require('spot-sdk-js');
```

A few groups are exported as namespaces, because their names are generic:

| Namespace | Content |
|---|---|
| `spotCam` | The clients of the Spot CAM (`spotCam.PtzClient`, `spotCam.registerAllServiceClients()`...). |
| `gps` | The GPS listener, the NTRIP client and the GPS clients. |
| `orbit` | The client of the web API of Orbit. |
| `textFormat`, `jsonFormat` | The text and JSON formats of the protobuf messages. |
| `imageUtil` | Display and save images. |
| `descriptorPool` | The descriptors of the protobuf messages. |

```js
const { spotCam, textFormat } = require('spot-sdk-js');
```

Some errors have the same name in several modules, with different meanings: the `NoTimeSyncError` of GraphNav is not
the one of the robot commands. These names are required from their module, as the [API reference](/api/) shows on the
page of each module:

```js
const { NoTimeSyncError } = require('spot-sdk-js/src/bosdyn-client/graph_nav');
```

Every module can be required by its path, `spot-sdk-js/src/<package>/<module>`, and the protobuf messages are in
`spot-sdk-js/src/bosdyn/api/`:

```js
const robotStatePb = require('spot-sdk-js/src/bosdyn/api/robot_state_pb');
```

## Asynchronous code

Everything that talks to the robot returns a promise: use `async` functions and `await`. The background tasks of the
SDK (time sync, token refresh, keep-alives) run on the event loop: a long synchronous computation delays them, and a
lease or an E-Stop that does not check in on time is lost. Keep the event loop free, or move heavy work to a
[worker thread](https://nodejs.org/api/worker_threads.html).

The helpers that run in the background have a `shutdown()` method that stops them: call it in a `finally` block.
They also support `await using`, where the runtime supports it (Node.js 24 or later):

```js
{
  await using keepAlive = new LeaseKeepAlive(leaseClient, { mustAcquire: true, returnAtExit: true });
  // ... the lease is returned at the end of the block.
}
```

## Options of the RPCs

The last parameter of the methods of the clients, `args`, holds the options of the RPC:

| Option | Meaning |
|---|---|
| `timeout` | The deadline of the RPC, in milliseconds: 30 s by default, no deadline if `null` or `Infinity`. |
| `metadata` | A grpc-js `Metadata` added to the call. |
| `waitForReady` | Wait until the channel is ready instead of failing at once. |

```js
const state = await stateClient.getRobotState({ timeout: 5_000 });
```

The other options of grpc-js calls are passed to the call.

## Protobuf messages

The requests and responses are the messages of the protos of Boston Dynamics, generated with
[google-protobuf](https://github.com/protocolbuffers/protobuf-javascript) (`src/bosdyn/api/`). Their fields have
getters and setters in camelCase:

```js
const geometryPb = require('spot-sdk-js/src/bosdyn/api/geometry_pb');

const position = new geometryPb.Vec3().setX(1).setY(0).setZ(0.5);
position.getX(); // 1

// Repeated fields end with List, maps with Map.
const names = state.getKinematicState().getTransformsSnapshot().getChildToParentEdgeMapMap().keys();
// A message field is undefined when it is not set: check it with hasXxx().
if (state.hasPowerState()) console.log(state.getPowerState().getMotorPowerState());
```

- The **enums** are numbers, defined on the message: `robotStatePb.PowerState.MotorPowerState.MOTOR_POWER_STATE_ON`.
- The **wrappers** (`DoubleValue`, `Int32Value`...) hold their value in `getValue()`.
- The **durations and timestamps** have helpers: `secondsToDuration()`, `durationToSeconds()`, `timestampToSec()`,
  `nowTimestamp()`...
- `message.toObject()` returns a plain object, `jsonFormat.messageToJson(message)` the JSON of the Python SDK, and
  `textFormat.messageToString(message)` its text format; `textFormat.parse(text, new Message())` reads it.
- **64-bit integers** are numbers, exact up to 2^53. The ones that can be larger are strings: the hashes and the
  additional indexes of BDDF files, the challenges of the E-Stop, the ids of the keepalive policies, of the signal
  schemas and of the recording sessions.

## Errors

The errors of the SDK derive from `BosdynError`:

- **`RpcError`**: the RPC failed, e.g. `UnableToConnectToRobotError`, `TimedOutError` (deadline exceeded),
  `UnauthenticatedError`, `ServiceUnavailableError`. `error.error` is the error of grpc-js.
- **`ResponseError`**: the RPC succeeded but the response reports an error, e.g. `LeaseUseError`, `InvalidRequestError`,
  and the errors of each service (`NotPoweredOnError`, `NoPathError`...). `error.response` is the response.
- The errors of the helpers, e.g. `CommandFailedError`, `CommandTimedOutError`, `NotEstablishedError`.

```js
const { NotPoweredOnError, ResponseError, RpcError } = require('spot-sdk-js');

try {
  await commandClient.robotCommand(command);
} catch (error) {
  if (error instanceof NotPoweredOnError) {
    // ...
  } else if (error instanceof RpcError) {
    console.error(`Could not reach the robot: ${error.message}`);
  } else {
    throw error;
  }
}
```

The options objects of the helpers are checked: an unknown option throws a `TypeError`.

## Logging

The SDK logs with [winston](https://github.com/winstonjs/winston), to the standard error stream, at the `info` level.
`setupLogging(verbose)` configures the loggers of the SDK like the Python helper: `setupLogging(true)` shows the
`debug` messages, including every RPC. `LoggerUtil.getLogger(name)` returns the logger of a part of your application:

```js
const { LoggerUtil, setupLogging } = require('spot-sdk-js');

setupLogging(process.argv.includes('--verbose'));
const logger = LoggerUtil.getLogger('my-app');
logger.info('Started');
```

The `LoggingHandler` transport also sends the logs to the data buffer of the robot (see [Data and logs](/guide/data)).

## Time and units

The distances are in meters, the angles in radians, and the times follow the name of the parameter:

| Parameter | Unit |
|---|---|
| `timeout` of the RPC options, and the parameters ending with `Msec` or `Ms` | milliseconds |
| The parameters ending with `Sec`, `Secs` or `Seconds` | seconds |

The helpers of the Python SDK that take seconds take milliseconds here when their parameter is named `timeoutMsec`:
`robot.powerOn(20_000)`, `blockingStand(client, 10_000)`.

The times given to the robot are on its clock. The time sync estimates the offset between the local clock and the
clock of the robot, and the clients use it: a command valid for 1 s takes an end time on the local clock, in seconds,
converted by the client:

```js
const { nowSec, RobotCommandBuilder } = require('spot-sdk-js');

const command = RobotCommandBuilder.synchroVelocityCommand(0.5, 0, 0);
await commandClient.robotCommand(command, nowSec() + 1.0);
```

`robot.timeSec()` returns the current time of the robot, and the `TimeSyncEndpoint` of the time sync
(`(await robot.timeSync).endpoint`) converts local times: `robotTimestampFromLocalSecs()`.

# bosdyn-client/command_line

Command-line utility code for interacting with robot services.

```js
const { Command, Subcommands, DirectoryCommands, ... } = require('spot-sdk-js/src/bosdyn-client/command_line');
```

| Export | Kind | Description |
|---|---|---|
| [`Command`](#command) | Class | Command-line command. |
| [`Subcommands`](#subcommands) | Class | Run subcommands. |
| [`DirectoryCommands`](#directorycommands) | Class | Commands related to the directory service. |
| [`DirectoryListCommand`](#directorylistcommand) | Class | List all services in the directory. |
| [`DirectoryGetCommand`](#directorygetcommand) | Class | Get entry for a given service in the directory. |
| [`DirectoryRegisterCommand`](#directoryregistercommand) | Class | Register entry for a service in the directory. |
| [`DirectoryUnregisterCommand`](#directoryunregistercommand) | Class | Unregister entry for a service in the directory. |
| [`PayloadCommands`](#payloadcommands) | Class | Commands related to the payload and payload registration services. |
| [`PayloadListCommand`](#payloadlistcommand) | Class | List all payloads registered with the robot. |
| [`PayloadRegisterCommand`](#payloadregistercommand) | Class | Register a payload with the robot. |
| [`FaultCommands`](#faultcommands) | Class | Commands related to the fault service and robot state service (for fault reading). |
| [`FaultShowCommand`](#faultshowcommand) | Class | Show all faults currently active in robot state. |
| [`FaultWatchCommand`](#faultwatchcommand) | Class | Watch all faults in robot state and print them out. |
| [`LogStatusCommands`](#logstatuscommands) | Class | Start, update and terminate experiment logs, start and terminate retro logs and check status of active logs for robot. |
| [`GetLogCommand`](#getlogcommand) | Class | Get log status by log id. |
| [`GetActiveLogStatusesCommand`](#getactivelogstatusescommand) | Class | Get active log bundles for robot. |
| [`ExperimentLogCommand`](#experimentlogcommand) | Class | Give experiment log commands to robot. |
| [`StartTimedExperimentLogCommand`](#starttimedexperimentlogcommand) | Class | Start a timed experiment log. |
| [`StartContinuousExperimentLogCommand`](#startcontinuousexperimentlogcommand) | Class | Start a continuous experiment log. |
| [`StartRetroLogCommand`](#startretrologcommand) | Class | Start a retro log. |
| [`StartConcurrentLogCommand`](#startconcurrentlogcommand) | Class | Start a concurrent experiment log, with event-derived data. |
| [`TerminateLogCommand`](#terminatelogcommand) | Class | Terminate log gathering process. |
| [`RobotIdCommand`](#robotidcommand) | Class | Show robot-id. |
| [`DataBufferCommands`](#databuffercommands) | Class | Commands related to the data-buffer service. |
| [`TextMsgCommand`](#textmsgcommand) | Class | Send a text-message to the data buffer to be logged. |
| [`OperatorCommentCommand`](#operatorcommentcommand) | Class | Send an operator comment to the robot to be logged. |
| [`DataServiceCommands`](#dataservicecommands) | Class | Commands for querying the data-service. |
| [`GetDataBufferEventsCommentsCommand`](#getdatabuffereventscommentscommand) | Class | Parent class for commands grabbing operator comment and events. |
| [`GetDataBufferCommentsCommand`](#getdatabuffercommentscommand) | Class | Get operator comments from the robot. |
| [`GetDataBufferEventsCommand`](#getdatabuffereventscommand) | Class | Get events from the robot. |
| [`GetDataBufferStatusCommand`](#getdatabufferstatuscommand) | Class | Get status of data-buffer on robot. |
| [`RobotStateCommands`](#robotstatecommands) | Class | Commands for querying robot state. |
| [`FullStateCommand`](#fullstatecommand) | Class | Show robot state. |
| [`HardwareConfigurationCommand`](#hardwareconfigurationcommand) | Class | Show robot hardware configuration. |
| [`RobotModel`](#robotmodel) | Class | Write robot URDF and mesh to local files. |
| [`MetricsCommand`](#metricscommand) | Class | Show metrics (runtime, etc...). |
| [`TimeSyncCommand`](#timesynccommand) | Class | Find clock difference between this and the robot clock. |
| [`LicenseCommand`](#licensecommand) | Class | Show installed license. |
| [`LeaseCommands`](#leasecommands) | Class | Commands related to the lease service. |
| [`LeaseListCommand`](#leaselistcommand) | Class | List all leases. |
| [`EstopCommands`](#estopcommands) | Class | Commands for interacting with robot estop service. |
| [`GetEstopConfigCommand`](#getestopconfigcommand) | Class | Get estop config of estop service. |
| [`GetEstopStatusCommand`](#getestopstatuscommand) | Class | Get estop status of estop service. |
| [`BecomeEstopCommand`](#becomeestopcommand) | Class | Grab and hold estop until Ctl-C. |
| [`OldBecomeEstopCommand`](#oldbecomeestopcommand) | Class | Old version of BecomeEstopCommand. |
| [`ImageCommands`](#imagecommands) | Class | Commands for querying images. |
| [`ListImageSourcesCommand`](#listimagesourcescommand) | Class | List image sources. |
| [`GetImageCommand`](#getimagecommand) | Class | Get an image from the robot and write it to an image file. |
| [`LocalGridCommands`](#localgridcommands) | Class | Commands for querying local grid maps. |
| [`ListLocalGridTypesCommand`](#listlocalgridtypescommand) | Class | List local grid sources. |
| [`GetLocalGridsCommand`](#getlocalgridscommand) | Class | Get local grids from the robot. |
| [`DataAcquisitionCommand`](#dataacquisitioncommand) | Class | Acquire data from the robot and add it in the data buffer with the metadata, or request status. |
| [`DataAcquisitionRequestCommand`](#dataacquisitionrequestcommand) | Class | Capture and save images or metadata specified in the command line arguments. |
| [`DataAcquisitionServiceCommand`](#dataacquisitionservicecommand) | Class | Get list of different data acquisition capabilities. |
| [`DataAcquisitionStatusCommand`](#dataacquisitionstatuscommand) | Class | Get status of an acquisition request based on the request id. |
| [`DataAcquisitionGetLiveDataCommand`](#dataacquisitiongetlivedatacommand) | Class | Call GetLiveData based on service name. |
| [`HostComputerIPCommand`](#hostcomputeripcommand) | Class | Determine a computer's IP address. |
| [`PowerCommand`](#powercommand) | Class | Send power commands to the robot. |
| [`KeepaliveCommand`](#keepalivecommand) | Class | Send keepalive commands to the robot. |
| [`KeepaliveGetStatusCommand`](#keepalivegetstatuscommand) | Class | Get status of keepalive service. |
| [`KeepaliveRemovePoliciesCommand`](#keepaliveremovepoliciescommand) | Class | Remove keepalive policies. |
| [`PowerRobotCommand`](#powerrobotcommand) | Class | Control the power of the entire robot. |
| [`PowerPayloadsCommand`](#powerpayloadscommand) | Class | Control the power of robot payloads. |
| [`PowerWifiRadioCommand`](#powerwifiradiocommand) | Class | Control the power of robot wifi radio. |
| [`PowerFanCommand`](#powerfancommand) | Class | Get power fan information. |
| [`leaseDetails`](#leasedetails) | Function | Returns list of &lt;resource_name&gt;:&lt;sequence&gt;, ...N. |
| [`main`](#main) | Function | Command-line interface for interacting with robot services. |
| [`COMMANDS`](#constants) | Constant | The commands of main(), in the order of their help. |

## Command

```ts
class Command
```

Command-line command.

### new Command

```ts
constructor(subparsers: Object, commandDict: {
    [x: string]: Command;
})
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `Object` | The subparsers of argparse to which the command is added. |
| `commandDict` | `{ [x: string]: Command; }` | Dictionary of command names which take parsed options. |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `null` | The name of the command the user should enter on the command line to select this command. Static. |
| `NEED_AUTHENTICATION` | `boolean` | Whether authentication is needed before the command is run. Most commands need authentication. Static. Value: `true`. |
| `HELP` | `undefined` | The help of the command (the docstring of its class in Python). Static. |

### run

```ts
run(robot: Robot, options: Object): Promise<any>
```

Invoke the command. The errors of the SDK are printed (to stderr) instead of thrown, like Python.

| Parameter | Type | Description |
|---|---|---|
| `robot` | `Robot` | Robot object on which to run the command. |
| `options` | `Object` | Parsed command-line arguments. |

**Returns** `Promise<any>`: The result of the command, null if an error of the SDK was printed.

## Subcommands

```ts
class Subcommands extends Command
```

Run subcommands.

### new Subcommands

```ts
constructor(subparsers: Object, commandDict: {
    [x: string]: Command;
}, subcommands: Array<typeof Command>)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `Object` | The subparsers of argparse to which the command is added. |
| `commandDict` | `{ [x: string]: Command; }` | Dictionary of command names which take parsed options. |
| `subcommands` | `Array<typeof Command>` | List of subcommands to run. |

## DirectoryCommands

```ts
class DirectoryCommands extends Subcommands
```

Commands related to the directory service.

### new DirectoryCommands

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'dir'`. |
| `HELP` | `string` | Static. Value: `'Commands related to the directory service.'`. |

## DirectoryListCommand

```ts
class DirectoryListCommand extends Command
```

List all services in the directory.

### new DirectoryListCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'list'`. |
| `HELP` | `string` | Static. Value: `'List all services in the directory.'`. |

## DirectoryGetCommand

```ts
class DirectoryGetCommand extends Command
```

Get entry for a given service in the directory.

### new DirectoryGetCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'get'`. |
| `HELP` | `string` | Static. Value: `'Get entry for a given service in the directory.'`. |

## DirectoryRegisterCommand

```ts
class DirectoryRegisterCommand extends Command
```

Register entry for a service in the directory.

### new DirectoryRegisterCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'register'`. |
| `HELP` | `string` | Static. Value: `'Register entry for a service in the directory.'`. |

## DirectoryUnregisterCommand

```ts
class DirectoryUnregisterCommand extends Command
```

Unregister entry for a service in the directory.

### new DirectoryUnregisterCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'unregister'`. |
| `HELP` | `string` | Static. Value: `'Unregister entry for a service in the directory.'`. |

## PayloadCommands

```ts
class PayloadCommands extends Subcommands
```

Commands related to the payload and payload registration services.

### new PayloadCommands

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'payload'`. |
| `HELP` | `string` | Static. Value: `'Commands related to the payload and payload registration services.'`. |

## PayloadListCommand

```ts
class PayloadListCommand extends Command
```

List all payloads registered with the robot.

### new PayloadListCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'list'`. |
| `HELP` | `string` | Static. Value: `'List all payloads registered with the robot.'`. |

## PayloadRegisterCommand

```ts
class PayloadRegisterCommand extends Command
```

Register a payload with the robot.

### new PayloadRegisterCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'register'`. |
| `HELP` | `string` | Static. Value: `'Register a payload with the robot.'`. |

## FaultCommands

```ts
class FaultCommands extends Subcommands
```

Commands related to the fault service and robot state service (for fault reading).

### new FaultCommands

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'fault'`. |
| `HELP` | `string` | Static. Value: `'Commands related to the fault service and robot state service (for fault reading).'`. |

## FaultShowCommand

```ts
class FaultShowCommand extends Command
```

Show all faults currently active in robot state.

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'show'`. |
| `HELP` | `string` | Static. Value: `'Show all faults currently active in robot state.'`. |

## FaultWatchCommand

```ts
class FaultWatchCommand extends Command
```

Watch all faults in robot state and print them out.

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'watch'`. |
| `HELP` | `string` | Static. Value: `'Watch all faults in robot state and print them out.'`. |

## LogStatusCommands

```ts
class LogStatusCommands extends Subcommands
```

Start, update and terminate experiment logs, start and terminate retro logs and check status of active logs for
robot.

### new LogStatusCommands

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'log-status'`. |
| `HELP` | `string` | Static. Value: `'Start, update and terminate experiment logs, start and terminate retro logs and check status of active logs for robot.'`. |

## GetLogCommand

```ts
class GetLogCommand extends Command
```

Get log status by log id.

### new GetLogCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'get'`. |
| `HELP` | `string` | Static. Value: `'Get log status but log id.'`. |

## GetActiveLogStatusesCommand

```ts
class GetActiveLogStatusesCommand extends Command
```

Get active log bundles for robot.

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'active'`. |
| `HELP` | `string` | Static. Value: `'Get active log bundles for robot.'`. |

## ExperimentLogCommand

```ts
class ExperimentLogCommand extends Subcommands
```

Give experiment log commands to robot.

### new ExperimentLogCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'experiment'`. |
| `HELP` | `string` | Static. Value: `'Give experiment log commands to robot.'`. |

## StartTimedExperimentLogCommand

```ts
class StartTimedExperimentLogCommand extends Command
```

Start a timed experiment log.

### new StartTimedExperimentLogCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'timed'`. |
| `HELP` | `string` | Static. Value: `'Start a timed experiment log.'`. |

## StartContinuousExperimentLogCommand

```ts
class StartContinuousExperimentLogCommand extends Command
```

Start a continuous experiment log.

### new StartContinuousExperimentLogCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'continuous'`. |
| `HELP` | `string` | Static. Value: `'Start a continuous experiment log.'`. |

### StartContinuousExperimentLogCommand.handleKeyboardInterruption

```ts
static handleKeyboardInterruption(client: LogStatusClient, logId: string): Promise<void>
```

Terminate the log after Ctrl-C. A second Ctrl-C does not wait for the termination.

| Parameter | Type | Description |
|---|---|---|
| `client` | `LogStatusClient` |  |
| `logId` | `string` |  |

**Returns** `Promise<void>`

## StartRetroLogCommand

```ts
class StartRetroLogCommand extends Command
```

Start a retro log.

### new StartRetroLogCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'retro'`. |
| `HELP` | `string` | Static. Value: `'Start a retro log.'`. |

## StartConcurrentLogCommand

```ts
class StartConcurrentLogCommand extends Command
```

Start a concurrent experiment log, with event-derived data.

### new StartConcurrentLogCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'concurrent'`. |
| `HELP` | `string` | Static. Value: `'Start a concurrent experiment log, with event-derived data.'`. |

## TerminateLogCommand

```ts
class TerminateLogCommand extends Command
```

Terminate log gathering process.

### new TerminateLogCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'terminate'`. |
| `HELP` | `string` | Static. Value: `'Terminate log gathering process.'`. |

## RobotIdCommand

```ts
class RobotIdCommand extends Command
```

Show robot-id.

### new RobotIdCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'id'`. |
| `HELP` | `string` | Static. Value: `'Show robot-id.'`. |

## DataBufferCommands

```ts
class DataBufferCommands extends Subcommands
```

Commands related to the data-buffer service.

### new DataBufferCommands

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'log'`. |
| `HELP` | `string` | Static. Value: `'Commands related to the data-buffer service.'`. |

## TextMsgCommand

```ts
class TextMsgCommand extends Command
```

Send a text-message to the data buffer to be logged.

### new TextMsgCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'textmsg'`. |
| `HELP` | `string` | Static. Value: `'Send a text-message to the data buffer to be logged.'`. |

## OperatorCommentCommand

```ts
class OperatorCommentCommand extends Command
```

Send an operator comment to the robot to be logged.

### new OperatorCommentCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'comment'`. |
| `HELP` | `string` | Static. Value: `'Send an operator comment to the robot to be logged.'`. |

## DataServiceCommands

```ts
class DataServiceCommands extends Subcommands
```

Commands for querying the data-service.

### new DataServiceCommands

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'data'`. |
| `HELP` | `string` | Static. Value: `'Commands for querying the data-service.'`. |

## GetDataBufferEventsCommentsCommand

```ts
class GetDataBufferEventsCommentsCommand extends Command
```

Parent class for commands grabbing operator comment and events.

### new GetDataBufferEventsCommentsCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### prettyPrint

```ts
prettyPrint(values: any[]): void
```

Print output of request in a human-friendly way.

| Parameter | Type | Description |
|---|---|---|
| `values` | `any[]` |  |

## GetDataBufferCommentsCommand

```ts
class GetDataBufferCommentsCommand extends GetDataBufferEventsCommentsCommand
```

Get operator comments from the robot.

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'comments'`. |
| `HELP` | `string` | Static. Value: `'Get operator comments from the robot.'`. |

### prettyPrint

```ts
prettyPrint(values: any): void
```

| Parameter | Type | Description |
|---|---|---|
| `values` | `any` |  |

## GetDataBufferEventsCommand

```ts
class GetDataBufferEventsCommand extends GetDataBufferEventsCommentsCommand
```

Get events from the robot.

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'events'`. |
| `HELP` | `string` | Static. Value: `'Get events from the robot.'`. |

### prettyPrint

```ts
prettyPrint(values: any): void
```

| Parameter | Type | Description |
|---|---|---|
| `values` | `any` |  |

## GetDataBufferStatusCommand

```ts
class GetDataBufferStatusCommand extends Command
```

Get status of data-buffer on robot.

### new GetDataBufferStatusCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'status'`. |
| `HELP` | `string` | Static. Value: `'Get status of data-buffer on robot.'`. |

## RobotStateCommands

```ts
class RobotStateCommands extends Subcommands
```

Commands for querying robot state.

### new RobotStateCommands

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'state'`. |
| `HELP` | `string` | Static. Value: `'Commands for querying robot state.'`. |

## FullStateCommand

```ts
class FullStateCommand extends Command
```

Show robot state.

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'full'`. |
| `HELP` | `string` | Static. Value: `'Show robot state.'`. |

## HardwareConfigurationCommand

```ts
class HardwareConfigurationCommand extends Command
```

Show robot hardware configuration.

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'hardware'`. |
| `HELP` | `string` | Static. Value: `'Show robot hardware configuration.'`. |

## RobotModel

```ts
class RobotModel extends Command
```

Write robot URDF and mesh to local files.

### new RobotModel

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'model'`. |
| `HELP` | `string` | Static. Value: `'Write robot URDF and mesh to local files.'`. |

## MetricsCommand

```ts
class MetricsCommand extends Command
```

Show metrics (runtime, etc...).

### new MetricsCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'metrics'`. |
| `HELP` | `string` | Static. Value: `'Show metrics (runtime, etc...).'`. |

## TimeSyncCommand

```ts
class TimeSyncCommand extends Command
```

Find clock difference between this and the robot clock.

### new TimeSyncCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'time-sync'`. |
| `HELP` | `string` | Static. Value: `'Find clock difference between this and the robot clock.'`. |

## LicenseCommand

```ts
class LicenseCommand extends Command
```

Show installed license.

### new LicenseCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'license'`. |
| `HELP` | `string` | Static. Value: `'Show installed license.'`. |

## LeaseCommands

```ts
class LeaseCommands extends Subcommands
```

Commands related to the lease service.

### new LeaseCommands

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'lease'`. |
| `HELP` | `string` | Static. Value: `'Commands related to the lease service.'`. |

## LeaseListCommand

```ts
class LeaseListCommand extends Command
```

List all leases.

### new LeaseListCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'list'`. |
| `HELP` | `string` | Static. Value: `'List all leases.'`. |

## EstopCommands

```ts
class EstopCommands extends Subcommands
```

Commands for interacting with robot estop service.

### new EstopCommands

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'estop'`. |
| `HELP` | `string` | Static. Value: `'Commands for interacting with robot estop service.'`. |

## GetEstopConfigCommand

```ts
class GetEstopConfigCommand extends Command
```

Get estop config of estop service.

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'config'`. |
| `HELP` | `string` | Static. Value: `'Get estop config of estop service.'`. |

## GetEstopStatusCommand

```ts
class GetEstopStatusCommand extends Command
```

Get estop status of estop service.

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'status'`. |
| `HELP` | `string` | Static. Value: `'Get estop status of estop service.'`. |

## BecomeEstopCommand

```ts
class BecomeEstopCommand extends Command
```

Grab and hold estop until Ctl-C.

### new BecomeEstopCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'become-estop'`. |
| `HELP` | `string` | Static. Value: `'Grab and hold estop until Ctl-C.'`. |

## OldBecomeEstopCommand

```ts
class OldBecomeEstopCommand extends BecomeEstopCommand
```

Old version of BecomeEstopCommand.

### run

```ts
run(robot: any, options: any): Promise<any>
```

| Parameter | Type | Description |
|---|---|---|
| `robot` | `any` |  |
| `options` | `any` |  |

**Returns** `Promise<any>`

## ImageCommands

```ts
class ImageCommands extends Subcommands
```

Commands for querying images.

### new ImageCommands

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'image'`. |
| `HELP` | `string` | Static. Value: `'Commands for querying images.'`. |

## ListImageSourcesCommand

```ts
class ListImageSourcesCommand extends Command
```

List image sources.

### new ListImageSourcesCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'list-sources'`. |
| `HELP` | `string` | Static. Value: `'List image sources.'`. |

## GetImageCommand

```ts
class GetImageCommand extends Command
```

Get an image from the robot and write it to an image file.

### new GetImageCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'get-image'`. |
| `HELP` | `string` | Static. Value: `'Get an image from the robot and write it to an image file.'`. |

## LocalGridCommands

```ts
class LocalGridCommands extends Subcommands
```

Commands for querying local grid maps.

### new LocalGridCommands

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'local_grid'`. |
| `HELP` | `string` | Static. Value: `'Commands for querying local grid maps.'`. |

## ListLocalGridTypesCommand

```ts
class ListLocalGridTypesCommand extends Command
```

List local grid sources.

### new ListLocalGridTypesCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'types'`. |
| `HELP` | `string` | Static. Value: `'List local grid sources.'`. |

## GetLocalGridsCommand

```ts
class GetLocalGridsCommand extends Command
```

Get local grids from the robot.

### new GetLocalGridsCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'get'`. |
| `HELP` | `string` | Static. Value: `'Get local grids from the robot.'`. |

## DataAcquisitionCommand

```ts
class DataAcquisitionCommand extends Subcommands
```

Acquire data from the robot and add it in the data buffer with the metadata, or request status.

### new DataAcquisitionCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'acquire'`. |
| `HELP` | `string` | Static. Value: `'Acquire data from the robot and add it in the data buffer with the metadata, or request status.'`. |

## DataAcquisitionRequestCommand

```ts
class DataAcquisitionRequestCommand extends Command
```

Capture and save images or metadata specified in the command line arguments.

### new DataAcquisitionRequestCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'request'`. |
| `HELP` | `string` | Static. Value: `'Capture and save images or metadata specified in the command line arguments.'`. |

## DataAcquisitionServiceCommand

```ts
class DataAcquisitionServiceCommand extends Command
```

Get list of different data acquisition capabilities.

### new DataAcquisitionServiceCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'info'`. |
| `HELP` | `string` | Static. Value: `'Get list of different data acquisition capabilities.'`. |

## DataAcquisitionStatusCommand

```ts
class DataAcquisitionStatusCommand extends Command
```

Get status of an acquisition request based on the request id.

### new DataAcquisitionStatusCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'status'`. |
| `HELP` | `string` | Static. Value: `'Get status of an acquisition request based on the request id.'`. |

## DataAcquisitionGetLiveDataCommand

```ts
class DataAcquisitionGetLiveDataCommand extends Command
```

Call GetLiveData based on service name.

### new DataAcquisitionGetLiveDataCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'live'`. |
| `HELP` | `string` | Static. Value: `'Call GetLiveData based on service name.'`. |

## HostComputerIPCommand

```ts
class HostComputerIPCommand extends Command
```

Determine a computer's IP address.

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'self-ip'`. |
| `HELP` | `string` | Static. Value: `'Determine a computer's IP address.'`. |

## PowerCommand

```ts
class PowerCommand extends Subcommands
```

Send power commands to the robot.

### new PowerCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'power'`. |
| `HELP` | `string` | Static. Value: `'Send power commands to the robot.'`. |

## KeepaliveCommand

```ts
class KeepaliveCommand extends Subcommands
```

Send keepalive commands to the robot.

### new KeepaliveCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'keepalive'`. |
| `HELP` | `string` | Static. Value: `'Send keepalive commands to the robot.'`. |

## KeepaliveGetStatusCommand

```ts
class KeepaliveGetStatusCommand extends Command
```

Get status of keepalive service.

### new KeepaliveGetStatusCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'status'`. |
| `HELP` | `string` | Static. Value: `'Get status of keepalive service.'`. |

## KeepaliveRemovePoliciesCommand

```ts
class KeepaliveRemovePoliciesCommand extends Command
```

Remove keepalive policies.

### new KeepaliveRemovePoliciesCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'remove'`. |
| `HELP` | `string` | Static. Value: `'Remove keepalive policies.'`. |

## PowerRobotCommand

```ts
class PowerRobotCommand extends Command
```

Control the power of the entire robot.

### new PowerRobotCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'robot'`. |
| `HELP` | `string` | Static. Value: `'Control the power of the entire robot.'`. |

## PowerPayloadsCommand

```ts
class PowerPayloadsCommand extends Command
```

Control the power of robot payloads.

### new PowerPayloadsCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'payload'`. |
| `HELP` | `string` | Static. Value: `'Control the power of robot payloads.'`. |

## PowerWifiRadioCommand

```ts
class PowerWifiRadioCommand extends Command
```

Control the power of robot wifi radio.

### new PowerWifiRadioCommand

```ts
constructor(subparsers: any, commandDict: any)
```

| Parameter | Type | Description |
|---|---|---|
| `subparsers` | `any` |  |
| `commandDict` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'wifi'`. |
| `HELP` | `string` | Static. Value: `'Control the power of robot wifi radio.'`. |

## PowerFanCommand

```ts
class PowerFanCommand extends Command
```

Get power fan information.

### Properties

| Property | Type | Description |
|---|---|---|
| `NAME` | `string` | Static. Value: `'fan'`. |
| `HELP` | `string` | Static. Value: `'Get power fan information.'`. |

## leaseDetails

```ts
export function leaseDetails(leases: import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease[]): string
```

Returns list of &lt;resource_name&gt;:&lt;sequence&gt;, ...N.

| Parameter | Type | Description |
|---|---|---|
| `leases` | `import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease[]` |  |

**Returns** `string`: List of &lt;resource_name&gt;:[&lt;sequence&gt;], ...N.

## main

```ts
export function main(args?: string[] | null): Promise<boolean>
```

Command-line interface for interacting with robot services.

| Parameter | Type | Description |
|---|---|---|
| `args` | `string[] \| null` | The arguments, process.argv.slice(2) if null. (*Optional*, default `null`) |

**Returns** `Promise<boolean>`: Whether the command succeeded.

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `COMMANDS` | `(typeof DirectoryCommands \| typeof RobotIdCommand)[]` | The commands of main(), in the order of their help. |

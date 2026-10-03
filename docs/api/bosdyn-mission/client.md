# bosdyn-mission/client

For clients to the mission service.

```js
const { MissionClient, MissionResponseError, InvalidQuestionId, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { CompilationError, ValidationError } = require('spot-sdk-js/src/bosdyn-mission/client');
```

| Export | Kind | Description |
|---|---|---|
| [`MissionClient`](#missionclient) | Class | Client for the Mission service. |
| [`MissionResponseError`](#missionresponseerror) | Class | General class of errors for mission service. |
| [`InvalidQuestionId`](#invalidquestionid) | Class | The indicated question is unknown. |
| [`InvalidAnswerCode`](#invalidanswercode) | Class | The indicated answer code is invalid for the specified question. |
| [`QuestionAlreadyAnswered`](#questionalreadyanswered) | Class | The indicated question was already answered. |
| [`CustomParamsError`](#customparamserror) | Class | The indicated answer does not match the spec for the indicated answer |
| [`IncompatibleAnswer`](#incompatibleanswer) | Class | The indicated answer is not in a format expected by the indicated question. |
| [`CompilationError`](#compilationerror) | Class | Mission could not be compiled. |
| [`ValidationError`](#validationerror) | Class | Mission could not be validated. |
| [`NoMissionError`](#nomissionerror) | Class | There is no mission to be played/restarted. |
| [`NoMissionPlayingError`](#nomissionplayingerror) | Class | There is no mission to be paused. |

## MissionClient

```ts
class MissionClient extends BaseClient<MissionServiceClient>
```

Client for the Mission service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'robot-mission'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.mission.MissionService'`. |
| `timesyncEndpoint` | `import("..").TimeSyncEndpoint` | Accessor for timesync endpoint that was grabbed via 'updateFrom()'. Read-only. |

### updateFrom

```ts
updateFrom(other: Robot): Promise<void>
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `Robot` |  |

**Returns** `Promise<void>`

### getState

```ts
getState(upperTickBound?: number | string, lowerTickBound?: number | string, pastTicks?: number | string, args?: Object): Promise<missionPb.State>
```

Obtain current mission state.

| Parameter | Type | Description |
|---|---|---|
| `upperTickBound` | `number \| string` | Upper bound on the node state to retrieve, inclusive. Leave unset for the latest data. (*Optional*) |
| `lowerTickBound` | `number \| string` | Tick counter for the lower bound of per-node state to retrieve. (*Optional*) |
| `pastTicks` | `number \| string` | Number of ticks to look into the past from the upper bound. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<missionPb.State>`

### answerQuestion

```ts
answerQuestion(questionId: number, code: number, customParams?: DictParam, args?: Object): Promise<missionPb.AnswerQuestionResponse>
```

Specify an answer to the question asked by the mission.

| Parameter | Type | Description |
|---|---|---|
| `questionId` | `number` | ID of the question to answer. |
| `code` | `number` | Answer code. |
| `customParams` | `DictParam` | Answer to a custom params prompt. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<missionPb.AnswerQuestionResponse>`

### loadMission

```ts
loadMission(root: Node, leases?: Lease[], args?: Object): Promise<missionPb.LoadMissionResponse>
```

Load a mission onto the robot.

| Parameter | Type | Description |
|---|---|---|
| `root` | `Node` | Root node in a mission. |
| `leases` | `Lease[]` | All leases necessary to initialize a mission. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<missionPb.LoadMissionResponse>`

### loadMissionAsChunks

```ts
loadMissionAsChunks(root: Node, leases?: Lease[], dataChunkByteSize?: number, args?: Object): Promise<missionPb.LoadMissionResponse>
```

Load a mission onto the robot.

| Parameter | Type | Description |
|---|---|---|
| `root` | `Node` | Root node in a mission. |
| `leases` | `Lease[]` | All leases necessary to initialize a mission. (*Optional*) |
| `dataChunkByteSize` | `number` | max size of each streamed message (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<missionPb.LoadMissionResponse>`

### loadMissionAsChunks2

```ts
loadMissionAsChunks2(root: Node, leases?: Lease[], dataChunkByteSize?: number, args?: Object): Promise<missionPb.LoadMissionResponse>
```

Load a mission onto the robot, the response being streamed as chunks too.

| Parameter | Type | Description |
|---|---|---|
| `root` | `Node` | Root node in a mission. |
| `leases` | `Lease[]` | All leases necessary to initialize a mission. (*Optional*) |
| `dataChunkByteSize` | `number` | max size of each streamed message (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<missionPb.LoadMissionResponse>`

### playMission

```ts
playMission(pauseTimeSecs: number, leases?: Lease[], settings?: missionPb.PlaySettings, args?: Object): Promise<missionPb.PlayMissionResponse>
```

Play the loaded mission.

| Parameter | Type | Description |
|---|---|---|
| `pauseTimeSecs` | `number` | Absolute time when the mission should pause execution. Subsequent RPCs will override this value, so you can use this to say "if you don't hear from me again, stop running the mission at this time." |
| `leases` | `Lease[]` | Leases the mission service will need to use. Unlike other clients, these MUST be specified. (*Optional*) |
| `settings` | `missionPb.PlaySettings` | Settings active until the next PlayMission or RestartMission request. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<missionPb.PlayMissionResponse>`

### restartMission

```ts
restartMission(pauseTimeSecs: number, leases?: Lease[], settings?: missionPb.PlaySettings, args?: Object): Promise<missionPb.RestartMissionResponse>
```

Restart the loaded mission.

| Parameter | Type | Description |
|---|---|---|
| `pauseTimeSecs` | `number` | Absolute time when the mission should pause execution. Subsequent RPCs to RestartMission will override this value, so you can use this to say "if you don't hear from me again, stop running the mission at this time." |
| `leases` | `Lease[]` | Leases the mission service will need to use. Unlike other clients, these MUST be specified. (*Optional*) |
| `settings` | `missionPb.PlaySettings` | Settings active until the next PlayMission or RestartMission request. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<missionPb.RestartMissionResponse>`

### pauseMission

```ts
pauseMission(args?: Object): Promise<missionPb.PauseMissionResponse>
```

Pause the running mission.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<missionPb.PauseMissionResponse>`

### stopMission

```ts
stopMission(args?: Object): Promise<missionPb.StopMissionResponse>
```

Stop the running mission.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<missionPb.StopMissionResponse>`

### getInfo

```ts
getInfo(args?: Object): Promise<missionPb.MissionInfo | null>
```

Get static information about the loaded mission.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<missionPb.MissionInfo \| null>`

### getMission

```ts
getMission(args?: Object): Promise<missionPb.GetMissionResponse>
```

Get the loaded mission.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<missionPb.GetMissionResponse>`

## MissionResponseError

```ts
class MissionResponseError extends ResponseError
```

General class of errors for mission service.

## InvalidQuestionId

```ts
class InvalidQuestionId extends MissionResponseError
```

The indicated question is unknown.

## InvalidAnswerCode

```ts
class InvalidAnswerCode extends MissionResponseError
```

The indicated answer code is invalid for the specified question.

## QuestionAlreadyAnswered

```ts
class QuestionAlreadyAnswered extends MissionResponseError
```

The indicated question was already answered.

## CustomParamsError

```ts
class CustomParamsError extends MissionResponseError
```

The indicated answer does not match the spec for the indicated answer

## IncompatibleAnswer

```ts
class IncompatibleAnswer extends MissionResponseError
```

The indicated answer is not in a format expected by the indicated question.

## CompilationError

```ts
class CompilationError extends MissionResponseError
```

Mission could not be compiled.

## ValidationError

```ts
class ValidationError extends MissionResponseError
```

Mission could not be validated.

### new ValidationError

```ts
constructor(res: any, msg: any)
```

| Parameter | Type | Description |
|---|---|---|
| `res` | `any` |  |
| `msg` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `failedNodes` | `any` |  |

## NoMissionError

```ts
class NoMissionError extends MissionResponseError
```

There is no mission to be played/restarted.

## NoMissionPlayingError

```ts
class NoMissionPlayingError extends MissionResponseError
```

There is no mission to be paused.

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `missionPb` | `spot-sdk-js/src/bosdyn/api/mission/mission_pb` |

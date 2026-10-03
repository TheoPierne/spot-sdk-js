# bosdyn-choreography-client/choreography

For clients to use the choreography service

```js
const { ChoreographyClient, AnimationUploadHelper, loadChoreographySequenceFromBinaryFile, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`ChoreographyClient`](#choreographyclient) | Class | Client for Choreography Service. |
| [`AnimationUploadHelper`](#animationuploadhelper) | Class | Helper class to reduce re-uploading animations to a robot multiple times. |
| [`loadChoreographySequenceFromBinaryFile`](#loadchoreographysequencefrombinaryfile) | Function | Read a choreography sequence file into a protobuf ChoreographySequence message. |
| [`loadChoreographySequenceFromTxtFile`](#loadchoreographysequencefromtxtfile) | Function | Read a choreography sequence txt file (the protobuf text format) into a protobuf ChoreographySequence message. |
| [`saveChoreographySequenceToFile`](#savechoreographysequencetofile) | Function | Saves a choreography sequence to a file. |
| [`InvalidUploadedChoreographyError`](#invaliduploadedchoreographyerror) | Class | The uploaded choreography is invalid and unable to be performed. |
| [`RobotCommandIssuesError`](#robotcommandissueserror) | Class | A problem occurred when issuing the robot command containing the dance. |
| [`LeaseError`](#leaseerror) | Class | Incorrect or invalid leases for the choreography service. |
| [`AnimationValidationFailedError`](#animationvalidationfailederror) | Class | The uploaded animation file is invalid and cannot be used in choreography sequences. |
| [`AnimationRejectedDanceActiveError`](#animationrejecteddanceactiveerror) | Class | The animation being uploaded was rejected because the robot was actively dancing. |
| [`NoRecordedInformation`](#norecordedinformation) | Class | The choreography service has no logged robot state data. |
| [`UnknownRecordingSessionId`](#unknownrecordingsessionid) | Class | The recording request contains an unknown recording session ID. |
| [`RecordingBufferFull`](#recordingbufferfull) | Class | The recording buffer is full and the current manual log will be truncated. |
| [`IncompleteData`](#incompletedata) | Class | The recording buffer filled up, the returned log will be truncated (not used, like in Python). |

## ChoreographyClient

```ts
class ChoreographyClient extends BaseClient<ChoreographyServiceClient>
```

Client for Choreography Service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'choreography'`. |
| `licenseName` | `string` | Static. Value: `'choreography'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.spot.ChoreographyService'`. |
| `timesyncEndpoint` | `TimeSyncEndpoint` | Timesync endpoint for the robot Read-only. |

### updateFrom

```ts
updateFrom(other: Robot): Promise<void>
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `Robot` |  |

**Returns** `Promise<void>`

### listAllMoves

```ts
listAllMoves(args?: Object): Promise<choreographySequencePb.ListAllMovesResponse>
```

Get a list of the different choreography sequence moves and associated parameters.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.ListAllMovesResponse>`

### listAllSequences

```ts
listAllSequences(args?: Object): Promise<choreographySequencePb.ListAllSequencesResponse>
```

Get a list of all sequences currently known about by the robot.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.ListAllSequencesResponse>`

### uploadChoreography

```ts
uploadChoreography(choreographySeq: choreographySequencePb.ChoreographySequence, nonStrictParsing?: boolean, args?: Object): Promise<choreographySequencePb.UploadChoreographyResponse>
```

Upload the choreography sequence to the robot.

| Parameter | Type | Description |
|---|---|---|
| `choreographySeq` | `choreographySequencePb.ChoreographySequence` | The dance sequence to be sent and stored on the robot. |
| `nonStrictParsing` | `boolean` | If true, the robot will fix any correctable errors within the choreography and allow users to run the dance. If false, if there are errors the robot will reject the choreography when attempting to run the dance. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.UploadChoreographyResponse>`

### uploadChoregraphy

```ts
uploadChoregraphy(choreographySeq: any, nonStrictParsing: boolean | undefined, args: any): Promise<choreographySequencePb.UploadChoreographyResponse>
```

> [!WARNING]
> **Deprecated.** Misspelled: use uploadChoreography().

| Parameter | Type | Description |
|---|---|---|
| `choreographySeq` | `any` |  |
| `nonStrictParsing` | `boolean \| undefined` |  |
| `args` | `any` |  |

**Returns** `Promise<choreographySequencePb.UploadChoreographyResponse>`

### uploadAnimatedMove

```ts
uploadAnimatedMove(animation: choreographySequencePb.Animation, generatedId?: string, args?: Object): Promise<choreographySequencePb.UploadAnimatedMoveResponse>
```

Upload the animation proto to the robot to be used as a move in choreography sequences.

| Parameter | Type | Description |
|---|---|---|
| `animation` | `choreographySequencePb.Animation` | The animated move protobuf message. This can be generated by converting a `cha` file using the animationFileToProto helpers. |
| `generatedId` | `string` | The ID hash generated for the animation based on the serialization of the protobuf message. This can be left empty, and the robot will re-parse and validate the message. This will be filled out automatically when using the AnimationUploadHelper. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.UploadAnimatedMoveResponse>`

### getChoreographyStatus

```ts
getChoreographyStatus(args?: Object): Promise<{
    status: choreographySequencePb.ChoreographyStatusResponse;
    clientTime: number;
}>
```

Get the dance related status information for a robot and the local time for which it was valid.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<{ status: choreographySequencePb.ChoreographyStatusResponse; clientTime: number; }>`

### choreographyLogToAnimationFile

```ts
choreographyLogToAnimationFile(name: string, fpath: string, hasArm: boolean, ...args: (string | string[])[]): Promise<string>
```

Turn the choreography log from the proto into an animation `cha` file type.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | Name that the `cha` file will be saved as. |
| `fpath` | `string` | Location where the new `cha` file will be saved. |
| `hasArm` | `boolean` | True if the robot has an arm, false if the robot doesn't have an arm. When False arm motion won't be added to the `cha` file. |
| `...args` | `(string \| string[])[]` | String(s), array of strings, or a mix of string(s) and list(s) that are the options to be included in the `cha` file. (ex. 'truncatable') |

**Returns** `Promise<string>`: The filename of the new animation `cha` file, once it is written.

### choreographyTimeAdjust

```ts
choreographyTimeAdjust(overrideClientStartTime: number, timeDifference?: number, validityTime?: number, args?: Object): Promise<choreographySequencePb.ChoreographyTimeAdjustResponse>
```

Provide a time to execute the choreography sequence instead the value passed in by
executeChoreography. Useful for when multiple robots are performing a synced
performance, and all robots should begin dancing at the same time.

| Parameter | Type | Description |
|---|---|---|
| `overrideClientStartTime` | `number` | The time (in seconds) that the dance should start. This time should be provided in the local clock's timeframe and the client will convert it to the required robot's clock timeframe. |
| `timeDifference` | `number` | The acceptable time difference in seconds between an ExecuteChoreographyRequest start time and the override time where the overrideClientStartTime will be used instead of the start time specified by the ExecuteChoreographyRequest. If not set will default to 20s. Maximum timeDifference is 2 minutes. (*Optional*) |
| `validityTime` | `number` | How far in the future, in seconds from the current time, can the overrideClientStartTime be. If not set will default to 60s. Maximum validity_time is 5 minutes. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.ChoreographyTimeAdjustResponse>`

### executeChoreography

```ts
executeChoreography(choreographyName: string, clientStartTime: number, choreographyStartingSlice: number, lease?: LeaseProto | null, args?: Object): Promise<choreographySequencePb.ExecuteChoreographyResponse>
```

Execute the current choreography sequence loaded on the robot by name.

| Parameter | Type | Description |
|---|---|---|
| `choreographyName` | `string` | The name of the uploaded choreography to run. The robot only stores a single choreography at a time, so this name should match the last uploaded choreography. |
| `clientStartTime` | `number` | The time (in seconds) that the dance should start. This time should be provided in the local clock's timeframe and the client will convert it to the required robot's clock timeframe. |
| `choreographyStartingSlice` | `number` | Which slice to start the dance at when the start time is reached. By default, it will start with the first slice. |
| `lease` | `LeaseProto \| null` | A specific lease to use for the request. If nothing is provided, the client will append the next lease sequence in this field by default. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.ExecuteChoreographyResponse>`

### choreographyCommand

```ts
choreographyCommand(commandList: choreographySequencePb.MoveCommand[], clientEndTime: number, lease?: LeaseProto | null, args?: Object): Promise<choreographySequencePb.ChoreographyCommandResponse>
```

Sends commands to interact with individual choreography moves.

| Parameter | Type | Description |
|---|---|---|
| `commandList` | `choreographySequencePb.MoveCommand[]` | The commands. Each command interacts with a single individual move. |
| `clientEndTime` | `number` | The time (in seconds) that the command stops being valid. This time should be provided in the local clock's timeframe and the client will convert it to the required robot's clock timeframe. |
| `lease` | `LeaseProto \| null` | A specific lease to use for the request. If nothing is provided, the client will append the next lease sequence in this field by default. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.ChoreographyCommandResponse>`

### legSizeConfiguration

```ts
legSizeConfiguration(frontLeftSize?: choreographySequencePb.LegSize | number[], frontRightSize?: choreographySequencePb.LegSize | number[], hindLeftSize?: choreographySequencePb.LegSize | number[], hindRightSize?: choreographySequencePb.LegSize | number[], args?: Object): Promise<choreographySequencePb.LegSizeConfigurationResponse>
```

Tell the robot its legs are a non-standard size to help avoid self-collision. Typically used for robots that are
wearing costumes.
Configuration will be permanently stored (persisting through reboot) until cleared by sending an empty request.

| Parameter | Type | Description |
|---|---|---|
| `frontLeftSize` | `choreographySequencePb.LegSize \| number[]` | New leg configuration dimensions for the front left leg. Either a LegSize message or a list of 4 floats. If null, all config values are set to zero. (*Optional*) |
| `frontRightSize` | `choreographySequencePb.LegSize \| number[]` | Same as frontLeftSize, but for the front right leg. (*Optional*) |
| `hindLeftSize` | `choreographySequencePb.LegSize \| number[]` | Same as frontLeftSize, but for the hind left leg. (*Optional*) |
| `hindRightSize` | `choreographySequencePb.LegSize \| number[]` | Same as frontLeftSize, but for the hind right leg. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.LegSizeConfigurationResponse>`

### legSizeConfigurationState

```ts
legSizeConfigurationState(args?: Object): Promise<choreographySequencePb.LegSizeConfigurationStateResponse>
```

Read the current leg size configuration from the robot. On a robot with the default leg size configuration the
values for each leg's LegSize will be:
distance_inward = 0.02 m
distance_outward = 0.02 m
distance_forward = 0.035 m
distance_backward = 0.035 m

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.LegSizeConfigurationStateResponse>`

### startRecordingState

```ts
startRecordingState(durationSecs: number, continueSessionId?: number, args?: Object): Promise<choreographySequencePb.StartRecordingStateResponse>
```

Start (or continue) a manually recorded robot state log.

| Parameter | Type | Description |
|---|---|---|
| `durationSecs` | `number` | The duration of the recording request in seconds. This will apply from when the StartRecording rpc is received. |
| `continueSessionId` | `number` | If provided, the RPC will continue the recording session associated with that ID. (*Optional*, default `0`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.StartRecordingStateResponse>`

### stopRecordingState

```ts
stopRecordingState(args?: Object): Promise<choreographySequencePb.StopRecordingStateResponse>
```

Stop recording a manual choreography log.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.StopRecordingStateResponse>`

### getChoreographySequence

```ts
getChoreographySequence(seqName: string, returnAnimationNamesOnly?: boolean, args?: Object): Promise<choreographySequencePb.GetChoreographySequenceResponse>
```

Get a sequence currently known by the robot, response includes the full
ChoreographySequence with the given name and any Animations used in the sequence.

| Parameter | Type | Description |
|---|---|---|
| `seqName` | `string` | the name of the sequence to return. |
| `returnAnimationNamesOnly` | `boolean` | If True, skip returning a list of the complete Animation protos required by the sequence and leave the 'animated_moves' field of the response empty. (The repeated string field, 'animationNames' for the list of the names of required animations will still be returned). (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.GetChoreographySequenceResponse>`

### getAnimation

```ts
getAnimation(name: string, args?: Object): Promise<choreographySequencePb.GetAnimationResponse>
```

Get an animation currently known by the robot, response includes the full
Animation proto with the given name.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | the name of the animation to return. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.GetAnimationResponse>`

### saveSequence

```ts
saveSequence(seqName: string, labels?: string[], args?: Object): Promise<choreographySequencePb.SaveSequenceResponse>
```

Save an uploaded sequence to the robot. Saved sequences are
automatically uploaded to the robot when it boots.

| Parameter | Type | Description |
|---|---|---|
| `seqName` | `string` | Name of the sequence to be added to the selection of retained sequences |
| `labels` | `string[]` | List of labels to add to the sequence when it is being saved (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.SaveSequenceResponse>`

### deleteSequence

```ts
deleteSequence(seqName: string, args?: Object): Promise<choreographySequencePb.DeleteSequenceResponse>
```

Delete a sequence from temporary robot memory and delete any copies of the sequence saved to disk.

| Parameter | Type | Description |
|---|---|---|
| `seqName` | `string` | Name of the sequence to delete. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.DeleteSequenceResponse>`

### modifyChoreographyInfo

```ts
modifyChoreographyInfo(seqName: string, addLabels?: string[], removeLabels?: string[], args?: Object): Promise<choreographySequencePb.ModifyChoreographyInfoResponse>
```

Modifies a sequence's ChoreographyInfo field to remove or add any labels attached to the sequence.

| Parameter | Type | Description |
|---|---|---|
| `seqName` | `string` | Name of the sequence to be modified |
| `addLabels` | `string[]` | Labels to be added to the sequence's metadata (*Optional*) |
| `removeLabels` | `string[]` | Labels to be removed from the sequence's metadata (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.ModifyChoreographyInfoResponse>`

### clearAllSequenceFiles

```ts
clearAllSequenceFiles(args?: Object): Promise<choreographySequencePb.ClearAllSequenceFilesResponse>
```

Completely clears all choreography files that are saved on the robot, including animation proto files.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.ClearAllSequenceFilesResponse>`

### downloadRobotStateLog

```ts
downloadRobotStateLog(logType: choreographySequencePb.DownloadRobotStateLogRequest.LogType, args?: Object): Promise<{
    initialStatus: choreographySequencePb.DownloadRobotStateLogResponse.Status;
    choreographyLog: choreographySequencePb.ChoreographyStateLog;
}>
```

Download the manual or automatically collected logs for choreography robot state.

| Parameter | Type | Description |
|---|---|---|
| `logType` | `choreographySequencePb.DownloadRobotStateLogRequest.LogType` | Type of log, either manual or the automatically generated log for the latest choreography. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<{ initialStatus: choreographySequencePb.DownloadRobotStateLogResponse.Status; choreographyLog: choreographySequencePb.ChoreographyStateLog; }>`

### buildChoreographyTimeAdjustRequest

```ts
buildChoreographyTimeAdjustRequest(overrideClientStartTime: any, timeDifference: any, validityTime: any): choreographySequencePb.ChoreographyTimeAdjustRequest
```

Generate the ChoreographyTimeAdjustRequest rpc with the timestamp converted into robot time.

| Parameter | Type | Description |
|---|---|---|
| `overrideClientStartTime` | `any` |  |
| `timeDifference` | `any` |  |
| `validityTime` | `any` |  |

**Returns** `choreographySequencePb.ChoreographyTimeAdjustRequest`

### buildExecuteChoreographyRequest

```ts
buildExecuteChoreographyRequest(choreographyName: any, clientStartTime: any, choreographyStartingSlice: any, lease?: null): choreographySequencePb.ExecuteChoreographyRequest
```

Generate the ExecuteChoreographyRequest rpc with the timestamp converted into robot time.

| Parameter | Type | Description |
|---|---|---|
| `choreographyName` | `any` |  |
| `clientStartTime` | `any` |  |
| `choreographyStartingSlice` | `any` |  |
| `lease` | `null` | (*Optional*) |

**Returns** `choreographySequencePb.ExecuteChoreographyRequest`

### buildChoreographyCommandRequest

```ts
buildChoreographyCommandRequest(commandList: any, clientEndTime: any, lease?: null): choreographySequencePb.ChoreographyCommandRequest
```

| Parameter | Type | Description |
|---|---|---|
| `commandList` | `any` |  |
| `clientEndTime` | `any` |  |
| `lease` | `null` | (*Optional*) |

**Returns** `choreographySequencePb.ChoreographyCommandRequest`

### buildStartRecordingStateRequest

```ts
buildStartRecordingStateRequest(durationSeconds?: null, continueSessionId?: number): choreographySequencePb.StartRecordingStateRequest
```

Generate a StartRecordingStateRequest proto.

| Parameter | Type | Description |
|---|---|---|
| `durationSeconds` | `null` | (*Optional*) |
| `continueSessionId` | `number` | (*Optional*) |

**Returns** `choreographySequencePb.StartRecordingStateRequest`

### buildSaveSequenceRequest

```ts
buildSaveSequenceRequest(sequenceName: any, labels?: any[]): choreographySequencePb.SaveSequenceRequest
```

| Parameter | Type | Description |
|---|---|---|
| `sequenceName` | `any` |  |
| `labels` | `any[]` | (*Optional*) |

**Returns** `choreographySequencePb.SaveSequenceRequest`

### buildModifyChoreographyInfoRequest

```ts
buildModifyChoreographyInfoRequest(sequenceName: any, addLabels?: any[], removeLabels?: any[]): choreographySequencePb.ModifyChoreographyInfoRequest
```

| Parameter | Type | Description |
|---|---|---|
| `sequenceName` | `any` |  |
| `addLabels` | `any[]` | (*Optional*) |
| `removeLabels` | `any[]` | (*Optional*) |

**Returns** `choreographySequencePb.ModifyChoreographyInfoRequest`

### buildLegSize

```ts
buildLegSize(distInward?: number, distOutward?: number, distForward?: number, distBackward?: number): choreographySequencePb.LegSize
```

Build and return a LegSize message from provided dimensions.

| Parameter | Type | Description |
|---|---|---|
| `distInward` | `number` | (*Optional*) |
| `distOutward` | `number` | (*Optional*) |
| `distForward` | `number` | (*Optional*) |
| `distBackward` | `number` | (*Optional*) |

**Returns** `choreographySequencePb.LegSize`

### buildLegSizeConfigurationRequest

```ts
buildLegSizeConfigurationRequest(frontLeftSize?: null, frontRightSide?: null, hindLeftSize?: null, hindRightSize?: null): choreographySequencePb.LegSizeConfigurationRequest
```

Build a LegSizeConfigurationRequest.

| Parameter | Type | Description |
|---|---|---|
| `frontLeftSize` | `null` | (*Optional*) |
| `frontRightSide` | `null` | (*Optional*) |
| `hindLeftSize` | `null` | (*Optional*) |
| `hindRightSize` | `null` | (*Optional*) |

**Returns** `choreographySequencePb.LegSizeConfigurationRequest`

## AnimationUploadHelper

```ts
class AnimationUploadHelper
```

Helper class to reduce re-uploading animations to a robot multiple times.
This class will generate a hash (unique ID built from the animation protobuf
message's contents) for each animation proto, and include this hash when initially
uploading animations. It will track the animations sent to the robot and the hashes, and
only sends RPCs to upload an animation when the incoming animation proto is different
from the one on robot.

It initializes the set of known animations on robot already by using the ListAllMoves
RPC and reading the existing animation names and hashes.

The hash function is generated using a library which guarantees consistency, even when
restarting the program. As well, the hash is built from the serialized protobuf, and
proto guarantees that within the language that the serialized message will be consistent.

### new AnimationUploadHelper

```ts
constructor(robot: Robot)
```

| Parameter | Type | Description |
|---|---|---|
| `robot` | `Robot` | The robot to upload animations to. |

### Properties

| Property | Type | Description |
|---|---|---|
| `ANIMATION_MOVE_PREFIX` | `string` | Static. Value: `'animation::'`. |
| `robot` | `Robot` | A robot instance to upload animations to. |
| `animationNameToGeneratedId` | `{ [x: string]: string; }` | An object that stored animation name to generated id |
| `choreographyClient` | `ChoreographyClient \| undefined` |  |

### initialize

```ts
initialize(): Promise<void>
```

Determine which animations are already uploaded on robot.

**Returns** `Promise<void>`

### uploadAnimatedMove

```ts
uploadAnimatedMove(animation: choreographySequencePb.Animation, args?: Object): Promise<choreographySequencePb.UploadAnimatedMoveResponse | null>
```

Uploads the animation to robot if the animation protobuf has changed.

This will only send an UploadAnimatedMove RPC if the incoming animation
has a new hash that differs from the current hash for this animation on robot, which
indicates that the animation protobuf has changed since the last one uploaded to robot.

| Parameter | Type | Description |
|---|---|---|
| `animation` | `choreographySequencePb.Animation` | Animation to maybe upload. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<choreographySequencePb.UploadAnimatedMoveResponse \| null>`

### generateAnimationId

```ts
generateAnimationId(animationProto: choreographySequencePb.Animation): string
```

Serialize an Animation protobuf message and create a hash from the binary string.

NOTE: Protobuf's serialization will not be consistent across protobuf versions or
even just different languages serializing the same protobuf message. This means that for a
single protobuf message, there could be multiple different serializations. This is ok for the
use-case of the AnimationUploadHelper since the ids are only used for a specific
"session" of Choreographer and the robot's boot session. These are not meant to be the same
for forever and ever due to the potential inconsistencies mentioned, and should not be used
with that expectation.

Further, if a single animation proto does not generate the same ID for one "session", then
it will just be re-uploaded and processed by the robot again.

| Parameter | Type | Description |
|---|---|---|
| `animationProto` | `choreographySequencePb.Animation` | Animation to generate a hash for. |

**Returns** `string`

## InvalidUploadedChoreographyError

```ts
class InvalidUploadedChoreographyError extends ResponseError
```

The uploaded choreography is invalid and unable to be performed.

## RobotCommandIssuesError

```ts
class RobotCommandIssuesError extends ResponseError
```

A problem occurred when issuing the robot command containing the dance.

## LeaseError

```ts
class LeaseError extends ResponseError
```

Incorrect or invalid leases for the choreography service. Check the lease use results.

## AnimationValidationFailedError

```ts
class AnimationValidationFailedError extends ResponseError
```

The uploaded animation file is invalid and cannot be used in choreography sequences.

## AnimationRejectedDanceActiveError

```ts
class AnimationRejectedDanceActiveError extends ResponseError
```

The animation being uploaded was rejected because the robot was actively dancing.

## NoRecordedInformation

```ts
class NoRecordedInformation extends ResponseError
```

The choreography service has no logged robot state data.

## UnknownRecordingSessionId

```ts
class UnknownRecordingSessionId extends ResponseError
```

The recording request contains an unknown recording session ID.

## RecordingBufferFull

```ts
class RecordingBufferFull extends ResponseError
```

The recording buffer is full and the current manual log will be truncated.

## IncompleteData

```ts
class IncompleteData extends ResponseError
```

The recording buffer filled up, the returned log will be truncated (not used, like in Python).

## loadChoreographySequenceFromBinaryFile

```ts
export function loadChoreographySequenceFromBinaryFile(filePath: string): choreographySequencePb.ChoreographySequence
```

Read a choreography sequence file into a protobuf ChoreographySequence message.

| Parameter | Type | Description |
|---|---|---|
| `filePath` | `string` | The file containing binary data |

**Returns** `choreographySequencePb.ChoreographySequence`

## loadChoreographySequenceFromTxtFile

```ts
export function loadChoreographySequenceFromTxtFile(filePath: string): choreographySequencePb.ChoreographySequence
```

Read a choreography sequence txt file (the protobuf text format) into a protobuf ChoreographySequence message.

| Parameter | Type | Description |
|---|---|---|
| `filePath` | `string` |  |

**Returns** `choreographySequencePb.ChoreographySequence`

**Throws**

- `Error` The file is not found.
- `textFormat.ParseError` The file is not the text of a ChoreographySequence.

## saveChoreographySequenceToFile

```ts
export function saveChoreographySequenceToFile(filePath: string, fileName: string, choreography: choreographySequencePb.ChoreographySequence): void
```

Saves a choreography sequence to a file.

| Parameter | Type | Description |
|---|---|---|
| `filePath` | `string` | The path to save the file |
| `fileName` | `string` | The file name |
| `choreography` | `choreographySequencePb.ChoreographySequence` | The choreography sequence to save |

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `choreographySequencePb` | `spot-sdk-js/src/bosdyn/api/spot/choreography_sequence_pb` |

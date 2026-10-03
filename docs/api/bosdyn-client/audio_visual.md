# bosdyn-client/audio_visual

Client for the audio visual service: the behaviors of the lights and of the sounds of the robot.

```js
const { AudioVisualClient, checkColor, clampAndNormalizeColor, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { NoTimeSyncError } = require('spot-sdk-js/src/bosdyn-client/audio_visual');
```

| Export | Kind | Description |
|---|---|---|
| [`AudioVisualClient`](#audiovisualclient) | Class | Client for calling the Audio Visual Service. |
| [`checkColor`](#checkcolor) | Function | Clamp and normalize the colors of every LED. |
| [`clampAndNormalizeColor`](#clampandnormalizecolor) | Function | Scale color so that their Euclidean norm does not exceed maxColorManitude. |
| [`AudioVisualResponseError`](#audiovisualresponseerror) | Class | General class of errors for AudioVisual service. |
| [`NoTimeSyncError`](#notimesyncerror) | Class | Client has not done timesync with robot. |
| [`DoesNotExistError`](#doesnotexisterror) | Class | The specified behavior does not exist. |
| [`PermanentBehaviorError`](#permanentbehaviorerror) | Class | Permanent behaviors cannot be modified or deleted. |
| [`BehaviorExpiredError`](#behaviorexpirederror) | Class | The specified end_time has already expired. |
| [`InvalidBehaviorError`](#invalidbehaviorerror) | Class | The request contained a behavior with invalid fields. |
| [`InvalidClientError`](#invalidclienterror) | Class | The behavior cannot be stopped because a different client is running it. |

## AudioVisualClient

```ts
class AudioVisualClient extends BaseClient<AudioVisualServiceClient>
```

Client for calling the Audio Visual Service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'audio-visual'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.AudioVisualService'`. |

### updateFrom

```ts
updateFrom(other: import("./robot").Robot): Promise<void>
```

Update instance from another object.

| Parameter | Type | Description |
|---|---|---|
| `other` | `import("./robot").Robot` |  |

**Returns** `Promise<void>`

### runBehavior

```ts
runBehavior(name: string, endTimeSecs: number, restart?: boolean, timesyncEndpoint?: TimeSyncEndpoint, args?: Object): Promise<RunBehaviorResponse>
```

Run a behavior on the robot.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The name of the behavior to run. |
| `endTimeSecs` | `number` | The time that this behavior should stop. |
| `restart` | `boolean` | If this behavior is already running, should we restart it from the beginning. (*Optional*) |
| `timesyncEndpoint` | `TimeSyncEndpoint` | Timesync endpoint. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<RunBehaviorResponse>`

### stopBehavior

```ts
stopBehavior(name: string, args?: Object): Promise<StopBehaviorResponse>
```

Stop a behavior that is currently running.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` |  |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<StopBehaviorResponse>`

### addOrModifyBehavior

```ts
addOrModifyBehavior(name: string, behavior: AudioVisualBehavior, args?: Object): Promise<LiveAudioVisualBehavior>
```

Add or modify an AudioVisualBehavior.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The name of the behavior to add. |
| `behavior` | `AudioVisualBehavior` | The AudioVisualBehavior proto to add. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<LiveAudioVisualBehavior>`

### deleteBehaviors

```ts
deleteBehaviors(behaviorNames: string[], args?: Object): Promise<LiveAudioVisualBehavior[]>
```

Delete an AudioVisualBehavior.

| Parameter | Type | Description |
|---|---|---|
| `behaviorNames` | `string[]` | A list of behavior names to delete. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<LiveAudioVisualBehavior[]>`

### listBehaviors

```ts
listBehaviors(args?: Object): Promise<LiveAudioVisualBehavior[]>
```

List all currently added AudioVisualBehaviors.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<LiveAudioVisualBehavior[]>`

### getSystemParams

```ts
getSystemParams(args?: Object): Promise<GetSystemParamsResponse>
```

Get the current system params.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<GetSystemParamsResponse>`

### setSystemParams

```ts
setSystemParams({ enabled, maxBrightness, buzzerMaxVolume, speakerMaxVolume, normalColorAssociation, warningColorAssociation, dangerColorAssociation, speakerDisableAgc, speakerDisableNr, }?: {
    enabled?: boolean | undefined;
    maxBrightness?: number | undefined;
    buzzerMaxVolume?: number | undefined;
    speakerMaxVolume?: number | undefined;
    normalColorAssociation?: PresetColorAssociation | PresetColorAssociation.PredefinedColor | undefined;
    warningColorAssociation?: PresetColorAssociation | PresetColorAssociation.PredefinedColor | undefined;
    dangerColorAssociation?: PresetColorAssociation | PresetColorAssociation.PredefinedColor | undefined;
    speakerDisableAgc?: boolean | undefined;
    speakerDisableNr?: boolean | undefined;
}, args?: Object): Promise<SetSystemParamsResponse>
```

Set the system params.
The parameters left null are not changed; like Python, false and 0 are values (they were ignored).

| Parameter | Type | Description |
|---|---|---|
| `systemParams` | `{ enabled?: boolean \| undefined; maxBrightness?: number \| undefined; buzzerMaxVolume?: number \| undefined; speakerMaxVolume?: number \| undefined; normalColorAssociation?: PresetColorAssociation \| PresetColorAssociation.PredefinedColor \| undefined; warningColorAssociation?: PresetColorAssociation \| PresetColorAssociation.PredefinedColor \| undefined; dangerColorAssociation?: PresetColorAssociation \| PresetColorAssociation.PredefinedColor \| undefined; speakerDisableAgc?: boolean \| undefined; speakerDisableNr?: boolean \| undefined; }` | (*Optional*) |
| `systemParams.enabled` | `boolean` | System is enabled or disabled (boolean). (*Optional*) |
| `systemParams.maxBrightness` | `number` | New maxBrightness value [0, 1]. (*Optional*) |
| `systemParams.buzzerMaxVolume` | `number` | New buzzerMaxVolume value [0, 1]. (*Optional*) |
| `systemParams.speakerMaxVolume` | `number` | New speakerMaxVolume value [0, 1]. (*Optional*) |
| `systemParams.normalColorAssociation` | `PresetColorAssociation\|PresetColorAssociation.PredefinedColor` | The color to associate with the normal color preset. (*Optional*) |
| `systemParams.warningColorAssociation` | `PresetColorAssociation\|PresetColorAssociation.PredefinedColor` | The color to associate with the warning color preset. (*Optional*) |
| `systemParams.dangerColorAssociation` | `PresetColorAssociation\|PresetColorAssociation.PredefinedColor` | The color to associate with the danger color preset. (*Optional*) |
| `systemParams.speakerDisableAgc` | `boolean` | Disable automatic gain control on speaker audio (boolean). (*Optional*) |
| `systemParams.speakerDisableNr` | `boolean` | Disable noise reduction on speaker audio (boolean). (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<SetSystemParamsResponse>`

## AudioVisualResponseError

```ts
class AudioVisualResponseError extends ResponseError
```

General class of errors for AudioVisual service.

## NoTimeSyncError

```ts
class NoTimeSyncError extends BosdynError
```

Client has not done timesync with robot.

## DoesNotExistError

```ts
class DoesNotExistError extends AudioVisualResponseError
```

The specified behavior does not exist.

## PermanentBehaviorError

```ts
class PermanentBehaviorError extends AudioVisualResponseError
```

Permanent behaviors cannot be modified or deleted.

## BehaviorExpiredError

```ts
class BehaviorExpiredError extends AudioVisualResponseError
```

The specified end_time has already expired.

## InvalidBehaviorError

```ts
class InvalidBehaviorError extends AudioVisualResponseError
```

The request contained a behavior with invalid fields.

## InvalidClientError

```ts
class InvalidClientError extends AudioVisualResponseError
```

The behavior cannot be stopped because a different client is running it.

## checkColor

```ts
export function checkColor(ledSequenceGroup: LedSequenceGroup): LedSequenceGroup
```

Clamp and normalize the colors of every LED.

| Parameter | Type | Description |
|---|---|---|
| `ledSequenceGroup` | `LedSequenceGroup` | The sequences, modified. |

**Returns** `LedSequenceGroup`

## clampAndNormalizeColor

```ts
export function clampAndNormalizeColor(color: Color, maxColorManitude?: number): Color
```

Scale color so that their Euclidean norm does not exceed maxColorManitude.

Note : maxColorManitude of 255 (roughly 50% of sqrt(3*255^2)=441.67) is a heuristic chosen to prevent damage to the
robot's LEDs.

Exceeding this value may result in damage to the robot's LEDs that will NOT be covered under warranty.

| Parameter | Type | Description |
|---|---|---|
| `color` | `Color` |  |
| `maxColorManitude` | `number` | (*Optional*) |

**Returns** `Color`

# bosdyn-client/spot_cam/audio

For clients to the Spot CAM Audio service.

```js
const { AudioClient } = require('spot-sdk-js').spotCam;
```

| Export | Kind | Description |
|---|---|---|
| [`AudioClient`](#audioclient) | Class | A client calling Spot CAM Audio service. |

## AudioClient

```ts
class AudioClient extends BaseClient<AudioServiceClient>
```

A client calling Spot CAM Audio service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'spot-cam-audio'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.spot_cam.AudioService'`. |

### listSounds

```ts
listSounds(args?: Object): Promise<audioPb.Sound[]>
```

Retrieve the list of available sounds

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<audioPb.Sound[]>`

### setVolume

```ts
setVolume(percentage: number, args?: Object): Promise<void>
```

Set the current volume as a percentage

| Parameter | Type | Description |
|---|---|---|
| `percentage` | `number` | The new volume as a percentage [0 - 100] |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<void>`

### getVolume

```ts
getVolume(args?: Object): Promise<number>
```

Retrieve the current volume as a percentage

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<number>`

### playSound

```ts
playSound(sound: audioPb.Sound, gain?: number, args?: Object): Promise<void>
```

Play already uploaded sound with optional volume gain multiplier

| Parameter | Type | Description |
|---|---|---|
| `sound` | `audioPb.Sound` | The sound identifier to play |
| `gain` | `number` | The gain to apply to the volume (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<void>`

### deleteSound

```ts
deleteSound(sound: audioPb.Sound, args?: Object): Promise<void>
```

Delete sound found in listSounds()

| Parameter | Type | Description |
|---|---|---|
| `sound` | `audioPb.Sound` | The sound to delete |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<void>`

### loadSound

```ts
loadSound(sound: audioPb.Sound, data: string | Buffer, maxChunkSize?: number, args?: Object): Promise<void>
```

Uploads the WAV data tagged with the specified Sound

| Parameter | Type | Description |
|---|---|---|
| `sound` | `audioPb.Sound` | The sound to load |
| `data` | `string \| Buffer` | The sound data to load |
| `maxChunkSize` | `number` | The maximum size of the chunk that can be send (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<void>`

### setAudioCaptureChannel

```ts
setAudioCaptureChannel(channel: audioPb.AudioCaptureChannel, args?: Object): Promise<audioPb.SetAudioCaptureChannelResponse>
```

Set the audio capture channel

| Parameter | Type | Description |
|---|---|---|
| `channel` | `audioPb.AudioCaptureChannel` | Microphone to use |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<audioPb.SetAudioCaptureChannelResponse>`

### getAudioCaptureChannel

```ts
getAudioCaptureChannel(args?: Object): Promise<audioPb.AudioCaptureChannel>
```

Retrieve the audio capture channel (microphone)

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<audioPb.AudioCaptureChannel>`

### setAudioCaptureGain

```ts
setAudioCaptureGain(channel: audioPb.AudioCaptureChannel, gain: number, args?: Object): Promise<audioPb.SetAudioCaptureGainResponse>
```

Set the audio capture gain

| Parameter | Type | Description |
|---|---|---|
| `channel` | `audioPb.AudioCaptureChannel` | Microphone to set gain for |
| `gain` | `number` | Microphone gain, 0.0 to 1.0 |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<audioPb.SetAudioCaptureGainResponse>`

### getAudioCaptureGain

```ts
getAudioCaptureGain(channel: audioPb.AudioCaptureChannel, args?: Object): Promise<number>
```

Retrieve the audio capture gain (microphone volume)

| Parameter | Type | Description |
|---|---|---|
| `channel` | `audioPb.AudioCaptureChannel` | Microphone to get gain for |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<number>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `audioPb` | `spot-sdk-js/src/bosdyn/api/spot_cam/audio_pb` |

# bosdyn-client/spot_cam/media_log

For clients to the Spot CAM MediaLog service.

```js
const { MediaLogClient } = require('spot-sdk-js').spotCam;
```

| Export | Kind | Description |
|---|---|---|
| [`MediaLogClient`](#medialogclient) | Class | A client calling Spot CAM MediaLog service. |

## MediaLogClient

```ts
class MediaLogClient extends BaseClient<MediaLogServiceClient>
```

A client calling Spot CAM MediaLog service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'spot-cam-media-log'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.spot_cam.MediaLogService'`. |

### delete

```ts
delete(logpoint: loggingPb.Logpoint, args?: Object): Promise<void>
```

Removes the Logpoint from the Spot CAM system.

| Parameter | Type | Description |
|---|---|---|
| `logpoint` | `loggingPb.Logpoint` | Logpoint.name must be filled out. |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<void>`

### enableDebug

```ts
enableDebug({ temp, humidity, bit, shock, systemStats }?: {
    temp?: boolean | undefined;
    humidity?: boolean | undefined;
    bit?: boolean | undefined;
    shock?: boolean | undefined;
    systemStats?: boolean | undefined;
}, args?: Object): Promise<void>
```

Start periodic logging of health data to the database, queryable via Health service.

| Parameter | Type | Description |
|---|---|---|
| `options` | `{ temp?: boolean \| undefined; humidity?: boolean \| undefined; bit?: boolean \| undefined; shock?: boolean \| undefined; systemStats?: boolean \| undefined; }` | All the option to start periodic logging of health data. (*Optional*) |
| `options.temp` | `boolean` | Enable logging of temperature data. (*Optional*) |
| `options.humidity` | `boolean` | Enable logging of humidity data. (*Optional*) |
| `options.bit` | `boolean` | Enable logging of BIT events coming from the Health service. (*Optional*) |
| `options.shock` | `boolean` | Enable logging of Shock data. (*Optional*) |
| `options.systemStats` | `boolean` | Enable logging of cpu, gpu, memory, and network utilization. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<void>`

### getStatus

```ts
getStatus(logpoint: loggingPb.Logpoint, args?: Object): Promise<loggingPb.Logpoint>
```

Gets the state of the specified logpoint.

| Parameter | Type | Description |
|---|---|---|
| `logpoint` | `loggingPb.Logpoint` | Logpoint.name must be filled out. |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<loggingPb.Logpoint>`

### listCameras

```ts
listCameras(args?: Object): Promise<Camera[]>
```

List cameras on Spot CAM

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<Camera[]>`

### listLogpoints

```ts
listLogpoints(args?: Object): Promise<loggingPb.Logpoint[]>
```

List Logpoints on Spot CAM

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<loggingPb.Logpoint[]>`

### retrieve

```ts
retrieve(logpoint: loggingPb.Logpoint, args?: Object): Promise<{
    logpoint: loggingPb.Logpoint;
    data: Buffer;
}>
```

Retrieves the image associated with the Logpoint.

| Parameter | Type | Description |
|---|---|---|
| `logpoint` | `loggingPb.Logpoint` | Logpoint.name must be filled out. |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<{ logpoint: loggingPb.Logpoint; data: Buffer; }>`: The logpoint, and the bytes of its data.

### retrieveRawData

```ts
retrieveRawData(logpoint: loggingPb.Logpoint, args?: Object): Promise<{
    logpoint: loggingPb.Logpoint;
    data: Buffer;
}>
```

Retrieves the image associated with the Logpoint.

| Parameter | Type | Description |
|---|---|---|
| `logpoint` | `loggingPb.Logpoint` | Logpoint.name must be filled out. |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<{ logpoint: loggingPb.Logpoint; data: Buffer; }>`: The logpoint, and the bytes of its data.

### setPassphrase

```ts
setPassphrase(passphrase: string, args?: Object): Promise<void>
```

Set password for Spot CAM filesystem.

| Parameter | Type | Description |
|---|---|---|
| `passphrase` | `string` | The passphrase. |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<void>`

### store

```ts
store(camera: Camera, recordType: loggingPb.Logpoint.RecordType, tag?: string, args?: Object): Promise<loggingPb.Logpoint>
```

Store media on the Spot CAM.

| Parameter | Type | Description |
|---|---|---|
| `camera` | `Camera` | Protobuf describing the camera to store media on. |
| `recordType` | `loggingPb.Logpoint.RecordType` | Indicating the type of recording. |
| `tag` | `string` | Optional string to associate with the stored media. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<loggingPb.Logpoint>`

### tag

```ts
tag(logpoint: loggingPb.Logpoint, args?: Object): Promise<void>
```

Update the 'tag' field of an existing Logpoint.

| Parameter | Type | Description |
|---|---|---|
| `logpoint` | `loggingPb.Logpoint` | 'tag' and 'name' in Logpoint must be filled out. |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<void>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `loggingPb` | `spot-sdk-js/src/bosdyn/api/spot_cam/logging_pb` |

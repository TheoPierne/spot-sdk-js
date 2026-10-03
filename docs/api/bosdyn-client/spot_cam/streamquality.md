# bosdyn-client/spot_cam/streamquality

For clients to the Spot CAM StreamQuality service.

```js
const { StreamQualityClient } = require('spot-sdk-js').spotCam;
```

| Export | Kind | Description |
|---|---|---|
| [`StreamQualityClient`](#streamqualityclient) | Class | A client calling Spot CAM StreamQuality service. |

## StreamQualityClient

```ts
class StreamQualityClient extends BaseClient<StreamQualityServiceClient>
```

A client calling Spot CAM StreamQuality service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'spot-cam-stream-quality'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.spot_cam.StreamQualityService'`. |

### setStreamParams

```ts
setStreamParams({ targetBitrate, refreshInterval, idrInterval, awbMode, autoExposure, syncAutoExposure, manualExposure, }?: {
    targetBitrate?: number | undefined;
    refreshInterval?: number | undefined;
    idrInterval?: number | undefined;
    awbMode?: streamqualityPb.StreamParams.AwbModeEnum | undefined;
    autoExposure?: streamqualityPb.StreamParams.AutoExposure | undefined;
    syncAutoExposure?: streamqualityPb.StreamParams.SyncAutoExposure | undefined;
    manualExposure?: streamqualityPb.StreamParams.ManualExposure | undefined;
}, args?: Object): Promise<streamqualityPb.StreamParams>
```

Change image compression and postprocessing.
At most one of autoExposure, syncAutoExposure, and manualExposure can be specified.
The others should be set to null if one is specified. Otherwise, they should all be null.

| Parameter | Type | Description |
|---|---|---|
| `options` | `{ targetBitrate?: number \| undefined; refreshInterval?: number \| undefined; idrInterval?: number \| undefined; awbMode?: streamqualityPb.StreamParams.AwbModeEnum \| undefined; autoExposure?: streamqualityPb.StreamParams.AutoExposure \| undefined; syncAutoExposure?: streamqualityPb.StreamParams.SyncAutoExposure \| undefined; manualExposure?: streamqualityPb.StreamParams.ManualExposure \| undefined; }` | The options to control compression and postprocessing (*Optional*) |
| `options.targetBitrate` | `number` | The compression level in target BPS (*Optional*) |
| `options.refreshInterval` | `number` | How often the entire feed should be refreshed (in frames) (*Optional*) |
| `options.idrInterval` | `number` | How often an IDR message should get sent (in frames) (*Optional*) |
| `options.awbMode` | `streamqualityPb.StreamParams.AwbModeEnum` | Options for automatic white balancing mode (*Optional*) |
| `options.autoExposure` | `streamqualityPb.StreamParams.AutoExposure` | Runs exposure independently on each of the ring cameras (*Optional*) |
| `options.syncAutoExposure` | `streamqualityPb.StreamParams.SyncAutoExposure` | Runs a single autoexposure algorithm that takes into account data from all ring cameras (*Optional*) |
| `options.manualExposure` | `streamqualityPb.StreamParams.ManualExposure` | Manual exposure sets an exposure for all ring cameras (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<streamqualityPb.StreamParams>`

### getStreamParams

```ts
getStreamParams(args?: Object): Promise<streamqualityPb.StreamParams>
```

Get image quality and processing settings.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<streamqualityPb.StreamParams>`

### enableCongestionControl

```ts
enableCongestionControl(enable?: boolean, args?: Object): Promise<streamqualityPb.EnableCongestionControlResponse>
```

Enable congestion control.

| Parameter | Type | Description |
|---|---|---|
| `enable` | `boolean` | Turn on/off congestion control (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<streamqualityPb.EnableCongestionControlResponse>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `streamqualityPb` | `spot-sdk-js/src/bosdyn/api/spot_cam/streamquality_pb` |

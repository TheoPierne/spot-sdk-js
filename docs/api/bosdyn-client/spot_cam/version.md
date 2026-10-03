# bosdyn-client/spot_cam/version

For clients to the Spot CAM Version service.

```js
const { VersionClient } = require('spot-sdk-js').spotCam;
```

| Export | Kind | Description |
|---|---|---|
| [`VersionClient`](#versionclient) | Class | A client calling Spot CAM Version service. |

## VersionClient

```ts
class VersionClient extends BaseClient<VersionServiceClient>
```

A client calling Spot CAM Version service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'spot-cam-version'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.spot_cam.VersionService'`. |

### getSoftwareVersion

```ts
getSoftwareVersion(args?: Object): Promise<SoftwareVersion>
```

Retrieves the Spot CAM's current software version.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<SoftwareVersion>`

### getSoftwareVersionFull

```ts
getSoftwareVersionFull(args?: Object): Promise<versionPb.GetSoftwareVersionResponse>
```

Retrieves the Spot CAM's full version information.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details (*Optional*) |

**Returns** `Promise<versionPb.GetSoftwareVersionResponse>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `versionPb` | `spot-sdk-js/src/bosdyn/api/spot_cam/version_pb` |

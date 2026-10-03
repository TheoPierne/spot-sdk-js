# bosdyn-client/payload_software_update

Payload software update service gRPC client.

This is used by Spot payloads to coordinate updates of their own software with Spot.

```js
const { PayloadSoftwareUpdate, PayloadSoftwareUpdateClient } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`PayloadSoftwareUpdate`](#payloadsoftwareupdate) | Class | A client for payloads to coordinate software updates with a robot. |
| [`PayloadSoftwareUpdateClient`](#aliases) | Alias | Alias of `PayloadSoftwareUpdate`. |

## PayloadSoftwareUpdate

```ts
class PayloadSoftwareUpdate extends BaseClient<PayloadSoftwareUpdateServiceClient>
```

A client for payloads to coordinate software updates with a robot.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'payload-software-update'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.PayloadSoftwareUpdateService'`. |

### PayloadSoftwareUpdate.makeInfoRequest

```ts
static makeInfoRequest(packageName: string, version: SoftwareVersion | number[], releaseDate: number | Date | Timestamp, buildId: string): SendCurrentVersionInfoRequest
```

Make a SendCurrentVersionInfoRequest message using the supplied information.

| Parameter | Type | Description |
|---|---|---|
| `packageName` | `string` | Name of the package, e.g., "coreio". |
| `version` | `SoftwareVersion \| number[]` | Current semantic version of the installed software: a SoftwareVersion, or [major, minor, patch]. |
| `releaseDate` | `number \| Date \| Timestamp` | Release date of the currently installed software: a number of seconds since the epoch (like the Python float), a Date or a Timestamp. |
| `buildId` | `string` | Unique identifier of the build. |

**Returns** `SendCurrentVersionInfoRequest`: Message communicating to Spot the version information of the currently installed payload software.

### sendCurrentSoftwareInfo

```ts
sendCurrentSoftwareInfo(packageName: string, version: SoftwareVersion | number[], releaseDate: number | Date | Timestamp, buildId: string, args?: Object): Promise<SendCurrentVersionInfoResponse>
```

Send version information about the currently installed payload software to Spot.

| Parameter | Type | Description |
|---|---|---|
| `packageName` | `string` | Name of the package, e.g., "coreio". |
| `version` | `SoftwareVersion \| number[]` | Current semantic version of the installed software. |
| `releaseDate` | `number \| Date \| Timestamp` | Release date of the currently installed software. |
| `buildId` | `string` | Unique identifier of the build. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<SendCurrentVersionInfoResponse>`

### getAvailableUpdates

```ts
getAvailableUpdates(packagesNames: string | string[], args?: Object): Promise<GetAvailableSoftwareUpdatesResponse>
```

Get a list of package information for the named package(s).

| Parameter | Type | Description |
|---|---|---|
| `packagesNames` | `string \| string[]` | The package name or array of package names to query. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<GetAvailableSoftwareUpdatesResponse>`

### sendInstallationStatus

```ts
sendInstallationStatus(packageName: string, status: any, errorCode: any, args?: Object): Promise<import("spot-sdk-js/src/bosdyn/api/payload_software_update_pb").SendSoftwareUpdateStatusResponse>
```

Send a status update of a payload software installation operation to Spot.

| Parameter | Type | Description |
|---|---|---|
| `packageName` | `string` | Name of the package being updated |
| `status` | `any` | Status code of installation operation |
| `errorCode` | `any` | Error code of the installation operation, or ERROR_NONE if no error has been encountered. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<import("spot-sdk-js/src/bosdyn/api/payload_software_update_pb").SendSoftwareUpdateStatusResponse>`

## Aliases

| Alias | Of |
|---|---|
| `PayloadSoftwareUpdateClient` | [`PayloadSoftwareUpdate`](#payloadsoftwareupdate) |

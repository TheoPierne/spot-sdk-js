# bosdyn-client/payload_software_update_initiation

Payload software update initiation gRPC client.

This client uses an insecure channel for signaling to a payload that it should send its version information or
initiate a software update.

```js
const { PayloadSoftwareUpdateInitiation, PayloadSoftwareUpdateInitiationClient } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`PayloadSoftwareUpdateInitiation`](#payloadsoftwareupdateinitiation) | Class | Payload software update initiation gRPC client. |
| [`PayloadSoftwareUpdateInitiationClient`](#aliases) | Alias | Alias of `PayloadSoftwareUpdateInitiation`. |

## PayloadSoftwareUpdateInitiation

```ts
class PayloadSoftwareUpdateInitiation extends BaseClient<PayloadSoftwareUpdateInitiationServiceClient>
```

Payload software update initiation gRPC client.
This client uses an insecure channel for signaling to a payload that it should
send its version information or initiate a software update.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'payload-software-update-initiation'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.PayloadSoftwareUpdateInitiationService'`. |

### triggerSendPayloadSoftwareInfo

```ts
triggerSendPayloadSoftwareInfo(args?: Object): Promise<TriggerSendPayloadSoftwareInfoResponse>
```

Tell a payload to send its current version information to Spot.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<TriggerSendPayloadSoftwareInfoResponse>`

### triggerInitiateUpdate

```ts
triggerInitiateUpdate(args?: Object): Promise<TriggerInitiateUpdateResponse>
```

Tell a payload to initiate its software update logic.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<TriggerInitiateUpdateResponse>`

## Aliases

| Alias | Of |
|---|---|
| `PayloadSoftwareUpdateInitiationClient` | [`PayloadSoftwareUpdateInitiation`](#payloadsoftwareupdateinitiation) |

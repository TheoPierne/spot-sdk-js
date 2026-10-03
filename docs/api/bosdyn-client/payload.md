# bosdyn-client/payload

Client for the payload service.

This allows client code to read from the robot payload registry.

```js
const { PayloadClient } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`PayloadClient`](#payloadclient) | Class | A client handling payload configs. |

## PayloadClient

```ts
class PayloadClient extends BaseClient<PayloadServiceClient>
```

A client handling payload configs.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'payload'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.PayloadService'`. |

### listPayloads

```ts
listPayloads(args?: Object): Promise<payloadPb.Payload[]>
```

List all payloads registered on the robot.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments to pass to grpc call invocation. (*Optional*) |

**Returns** `Promise<payloadPb.Payload[]>`: A list of the proto message definitions of all registered payloads

**Throws**

- `RpcError` Problem communicating with the robot.

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `payloadPb` | `spot-sdk-js/src/bosdyn/api/payload_pb` |

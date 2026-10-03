# bosdyn-client/local_grid

Client support for the LocalGridService.

```js
const { LocalGridClient } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`LocalGridClient`](#localgridclient) | Class | Client to access local grid local_grids from the robot. |

## LocalGridClient

```ts
class LocalGridClient extends BaseClient<LocalGridServiceClient>
```

Client to access local grid local_grids from the robot.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'local-grid-service'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.LocalGridService'`. |

### getLocalGridTypes

```ts
getLocalGridTypes(args?: Object): Promise<localGridPb.LocalGridType[]>
```

Get a list of the local_grid types available from the robot.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<localGridPb.LocalGridType[]>`: A list of the different types of local grids.

**Throws**

- `RpcError` Problem communicating with the robot.

### getLocalGrids

```ts
getLocalGrids(localGridTypeNames: string[], args?: Object): Promise<localGridPb.LocalGridResponse[]>
```

Get a selection of local_grids of specified types.

| Parameter | Type | Description |
|---|---|---|
| `localGridTypeNames` | `string[]` | List of strings specifying types local_grids to request. Available local_grid types may be requested using get_local_grid_types(). |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<localGridPb.LocalGridResponse[]>`: A list of LocalGridResponseProtos, each containing a local_grid or an error status code.

**Throws**

- `RpcError` Problem communicating with the robot.

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `localGridPb` | `spot-sdk-js/src/bosdyn/api/local_grid_pb.js` |

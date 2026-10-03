# bosdyn-client/data_service

Client for the data-service.

```js
const { DataServiceClient } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { InvalidArgument } = require('spot-sdk-js/src/bosdyn-client/data_service');
```

| Export | Kind | Description |
|---|---|---|
| [`DataServiceClient`](#dataserviceclient) | Class | Client for adding to robot data buffer. |
| [`InvalidArgument`](#invalidargument) | Class | A given argument could not be used. |

## DataServiceClient

```ts
class DataServiceClient extends BaseClient<DataServiceClientStub>
```

Client for adding to robot data buffer.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'data'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.DataService'`. |
| `logTickSchemas` | `{}` |  |

### updateFrom

```ts
updateFrom(other: Robot): Promise<void>
```

Update instance from another object.

| Parameter | Type | Description |
|---|---|---|
| `other` | `Robot` | The object where to copy from. |

**Returns** `Promise<void>`

### getDataIndex

```ts
getDataIndex(query: dataIndexProtos.DataQuery, args?: Object): Promise<dataIndexProtos.GetDataIndexResponse>
```

Query for data index

| Parameter | Type | Description |
|---|---|---|
| `query` | `dataIndexProtos.DataQuery` | The data to query. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataIndexProtos.GetDataIndexResponse>`

**Throws**

- `RpcError` Problem communicating with the robot.

### getDataPages

```ts
getDataPages(timeRange: TimeRange, args?: Object): Promise<dataIndexProtos.GetDataPagesResponse>
```

Internal get_data_index RPC stub call.

| Parameter | Type | Description |
|---|---|---|
| `timeRange` | `TimeRange` | The time range to send. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataIndexProtos.GetDataPagesResponse>`

**Throws**

- `RpcError` Problem communicating with the robot.

### deleteDataPages

```ts
deleteDataPages(timeRange: TimeRange | null, pageIds: Array<string>, args?: Object): Promise<dataIndexProtos.DeleteDataPagesResponse>
```

| Parameter | Type | Description |
|---|---|---|
| `timeRange` | `TimeRange \| null` | The time range to send. |
| `pageIds` | `Array<string>` | List of page's ids. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataIndexProtos.DeleteDataPagesResponse>`

### getEventsComments

```ts
getEventsComments(query: dataIndexProtos.EventsCommentsSpec | null, args?: Object): Promise<dataIndexProtos.GetEventsCommentsResponse>
```

Query for operator comments and events

| Parameter | Type | Description |
|---|---|---|
| `query` | `dataIndexProtos.EventsCommentsSpec \| null` | The events comments to send. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataIndexProtos.GetEventsCommentsResponse>`

**Throws**

- `RpcError` Problem communicating with the robot.

### getDataBufferStatus

```ts
getDataBufferStatus(getBlobSpecs?: boolean, args?: Object): Promise<dataIndexProtos.GetDataBufferStatusResponse>
```

Query for operator comments and events.

| Parameter | Type | Description |
|---|---|---|
| `getBlobSpecs` | `boolean` | whether to list message series. (*Optional*, default `false`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataIndexProtos.GetDataBufferStatusResponse>`

**Throws**

- `RpcError` Problem communicating with the robot.

## InvalidArgument

```ts
class InvalidArgument extends BosdynError
```

A given argument could not be used.

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `dataIndexProtos` | `spot-sdk-js/src/bosdyn/api/data_index_pb` |

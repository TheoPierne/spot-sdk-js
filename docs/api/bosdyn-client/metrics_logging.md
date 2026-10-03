# bosdyn-client/metrics_logging

Clients for the metrics logging service.

```js
const { MetricsLoggingClient, MissingKeysError, UnableToOptOutError } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`MetricsLoggingClient`](#metricsloggingclient) | Class | A client for the metrics logging service on the robot. |
| [`MissingKeysError`](#missingkeyserror) | Class | Metrics requested from the metrics service did not exist. |
| [`UnableToOptOutError`](#unabletooptouterror) | Class | Unable to opt-out of metrics logging due to invalid license permissions. |

## MetricsLoggingClient

```ts
class MetricsLoggingClient extends BaseClient<MetricsLoggingRobotServiceClient>
```

A client for the metrics logging service on the robot.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'metrics-logging'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.metrics_logging.MetricsLoggingRobotService'`. |

### getMetrics

```ts
getMetrics(keys?: string[] | null, includeEvents?: boolean, args?: Object): Promise<metricsLoggingRobotPb.GetMetricsResponse>
```

Get metrics from the robot.

| Parameter | Type | Description |
|---|---|---|
| `keys` | `string[] \| null` | A list of strings representing the keys for metrics that should be returned. (*Optional*) |
| `includeEvents` | `boolean` | Whether events should be included in the response. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<metricsLoggingRobotPb.GetMetricsResponse>`

### getStoreSequenceRange

```ts
getStoreSequenceRange(args?: Object): Promise<number[]>
```

Determine the range of sequence numbers currently being used by the metrics system's store.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<number[]>`

### getAbsoluteMetricSnapshot

```ts
getAbsoluteMetricSnapshot(sequenceNumbers: number[], args?: Object): Promise<SignedProto[]>
```

Get absolute metric snapshots for specific sequence numbers' entries.

| Parameter | Type | Description |
|---|---|---|
| `sequenceNumbers` | `number[]` | The list of sequence numbers whose entries should be returned as absolute metric snapshots. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<SignedProto[]>`

## MissingKeysError

```ts
class MissingKeysError extends ResponseError
```

Metrics requested from the metrics service did not exist.

## UnableToOptOutError

```ts
class UnableToOptOutError extends ResponseError
```

Unable to opt-out of metrics logging due to invalid license permissions.

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `metricsLoggingRobotPb` | `spot-sdk-js/src/bosdyn/api/metrics_logging/metrics_logging_robot_pb` |

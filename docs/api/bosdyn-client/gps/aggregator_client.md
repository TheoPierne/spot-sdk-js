# bosdyn-client/gps/aggregator_client

For clients to use the Gps Aggregator service.

```js
const { AggregatorClient } = require('spot-sdk-js').gps;
```

| Export | Kind | Description |
|---|---|---|
| [`AggregatorClient`](#aggregatorclient) | Class | Client for the Gps Aggregator service. |

## AggregatorClient

```ts
class AggregatorClient extends BaseClient<AggregatorServiceClient>
```

Client for the Gps Aggregator service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'gps-aggregator'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.gps.AggregatorService'`. |

### newGpsData

```ts
newGpsData(dataPoints: GpsDataPoint[], gpsDevice: GpsDevice, args?: Object): Promise<NewGpsDataResponse>
```

Tell the robot about new GPS data that was collected.

| Parameter | Type | Description |
|---|---|---|
| `dataPoints` | `GpsDataPoint[]` | All the data you want to send. |
| `gpsDevice` | `GpsDevice` | The identifier of this device. |
| `args` | `Object` | Options for GRPC request (*Optional*) |

**Returns** `Promise<NewGpsDataResponse>`

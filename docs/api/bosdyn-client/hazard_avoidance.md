# bosdyn-client/hazard_avoidance

For clients to use the hazard_avoidance service

```js
const { HazardAvoidanceClient, AddHazardsResponseError } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`HazardAvoidanceClient`](#hazardavoidanceclient) | Class | Client for Hazard avoidance service. |
| [`AddHazardsResponseError`](#addhazardsresponseerror) | Class | General class of errors for hazard avoidance service. |

## HazardAvoidanceClient

```ts
class HazardAvoidanceClient extends BaseClient<HazardAvoidanceServiceClient>
```

Client for Hazard avoidance service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'hazard-avoidance-service'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.HazardAvoidanceService'`. |
| `timeSyncEndpoint` | `any` | Accessor for timesync-endpoint that is grabbed via 'updateFrom()'. Read-only. |

### updateFrom

```ts
updateFrom(other: any): Promise<void>
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `any` |  |

**Returns** `Promise<void>`

### addHazards

```ts
addHazards(addHazardsReq: AddHazardsRequest, args?: {}): Promise<AddHazardResult[]>
```

Add hazards to the hazard map.

| Parameter | Type | Description |
|---|---|---|
| `addHazardsReq` | `AddHazardsRequest` | The request including the hazard observations to add. |
| `args` | `{}` | (*Optional*) |

**Returns** `Promise<AddHazardResult[]>`

## AddHazardsResponseError

```ts
class AddHazardsResponseError extends ResponseError
```

General class of errors for hazard avoidance service.

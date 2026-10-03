# bosdyn-client/lease_validator

Lease validator tracks lease usage in intermediate services.

```js
const { LeaseValidator, LeaseValidatorResponseProcessor } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`LeaseValidator`](#leasevalidator) | Class | Lease validator tracks lease usage in intermediate services. |
| [`LeaseValidatorResponseProcessor`](#leasevalidatorresponseprocessor) | Class | LeaseValidatorResponseProcessor updates the lease validator using the latest_known_lease from the response's LeaseUseResult. |

## LeaseValidator

```ts
class LeaseValidator
```

Lease validator tracks lease usage in intermediate services.
Track the most recent leases seen for each lease resource and test incoming leases against this
state.

### new LeaseValidator

```ts
constructor(robot: Robot)
```

Await initialize() before use: it reads the resource hierarchy of the robot (the constructor of Python does it).

| Parameter | Type | Description |
|---|---|---|
| `robot` | `Robot` | The robot object for which leases are associated to. |

### Properties

| Property | Type | Description |
|---|---|---|
| `activeLeaseMap` | `{ [x: string]: Lease; }` |  |
| `hierarchy` | `ResourceHierarchy \| null` |  |
| `robot` | `import("./robot").Robot` |  |

### initialize

```ts
initialize(): Promise<void>
```

**Returns** `Promise<void>`

### getActiveLease

```ts
getActiveLease(resource: string): Lease | null
```

Get the latest active lease.

| Parameter | Type | Description |
|---|---|---|
| `resource` | `string` | the resource for the specific lease to be returned. |

**Returns** `Lease \| null`

### testActiveLease

```ts
testActiveLease(incomingLease: Lease | leasePb.Lease, allowSuperLeases: boolean, allowDifferentEpoch?: boolean): leasePb.LeaseUseResult
```

Helper function to validate the lease and compare it to the active lease.

| Parameter | Type | Description |
|---|---|---|
| `incomingLease` | `Lease \| leasePb.Lease` | The incoming lease to test. |
| `allowSuperLeases` | `boolean` | Should the comparison function consider a super lease as ok. |
| `allowDifferentEpoch` | `boolean` | Should the comparison function consider a different epoch as ok. (*Optional*) |

**Returns** `leasePb.LeaseUseResult`

### testAndSetActiveLease

```ts
testAndSetActiveLease(incomingLease: Lease | leasePb.Lease, allowSuperLeases: boolean, allowDifferentEpoch?: boolean): leasePb.LeaseUseResult
```

Compare an incoming lease to the latest active lease, and if it is ok then set it as
the latest lease.

| Parameter | Type | Description |
|---|---|---|
| `incomingLease` | `Lease \| leasePb.Lease` | The incoming lease to test. |
| `allowSuperLeases` | `boolean` | Should the comparison function consider a super lease as ok. |
| `allowDifferentEpoch` | `boolean` | Should the comparison function consider a different epoch as ok. (*Optional*) |

**Returns** `leasePb.LeaseUseResult`

## LeaseValidatorResponseProcessor

```ts
class LeaseValidatorResponseProcessor
```

LeaseValidatorResponseProcessor updates the lease validator using the
latest_known_lease from the response's LeaseUseResult.

### new LeaseValidatorResponseProcessor

```ts
constructor(leaseValidator: LeaseValidator)
```

| Parameter | Type | Description |
|---|---|---|
| `leaseValidator` | `LeaseValidator` | validator for a specific robot to be updated. |

### Properties

| Property | Type | Description |
|---|---|---|
| `leaseValidator` | `LeaseValidator` |  |

### mutate

```ts
mutate(response: any): void
```

Update the lease validator if a response has a lease_use_result.

| Parameter | Type | Description |
|---|---|---|
| `response` | `any` | The request mutate |

**Returns** `void`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `leasePb` | `spot-sdk-js/src/bosdyn/api/lease_pb` |

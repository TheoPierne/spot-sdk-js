# bosdyn-client/lease

Clients and helpers for the lease service: LeaseClient, the LeaseWallet, LeaseKeepAlive and the lease errors.

```js
const { Lease, LeaseState, LeaseWallet, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`Lease`](#lease) | Class | Leases are used to coordinate access to shared resources on a Boston Dynamics robot. |
| [`LeaseState`](#leasestate) | Class | State of lease ownership in the wallet. |
| [`LeaseWallet`](#leasewallet) | Class | Storage for Leases. |
| [`LeaseClient`](#leaseclient) | Class | Client to the lease service. |
| [`LeaseWalletRequestProcessor`](#leasewalletrequestprocessor) | Class | LeaseWalletRequestProcessor adds a lease from a wallet to a request. |
| [`LeaseWalletResponseProcessor`](#leasewalletresponseprocessor) | Class | LeaseWalletResponseProcessor updates the wallet with a LeaseUseResult. |
| [`LeaseKeepAlive`](#leasekeepalive) | Class | LeaseKeepAlive issues lease liveness checks on a background interval. |
| [`addLeaseWalletProcessors`](#addleasewalletprocessors) | Function | Adds LeaseWallet related processors to a gRPC client. |
| [`testActiveLease`](#testactivelease) | Function | Check if an incoming lease is newer than the current lease. |
| [`DEFAULT_RESOURCES`](#constants) | Constant |  |
| [`LeaseResponseError`](#leaseresponseerror) | Class | General class of errors for LeaseResponseError service. |
| [`InvalidLeaseError`](#invalidleaseerror) | Class | The provided lease is invalid. |
| [`DisplacedLeaseError`](#displacedleaseerror) | Class | Lease is older than the current lease. |
| [`InvalidResourceError`](#invalidresourceerror) | Class | Resource is not known to the LeaseService. |
| [`NotAuthoritativeServiceError`](#notauthoritativeserviceerror) | Class | LeaseService is not authoritative so Acquire should not work. |
| [`ResourceAlreadyClaimedError`](#resourcealreadyclaimederror) | Class | Use TakeLease method to forcefully grab the already claimed lease. |
| [`RevokedLeaseError`](#revokedleaseerror) | Class | Lease is stale because the lease-holder did not check in regularly enough. |
| [`UnmanagedResourceError`](#unmanagedresourceerror) | Class | LeaseService does not manage this resource. |
| [`WrongEpochError`](#wrongepocherror) | Class | Lease is for the wrong epoch. |
| [`NotActiveLeaseError`](#notactiveleaseerror) | Class | Lease is not the active lease. |
| [`NoSuchLease`](#nosuchlease) | Class | The requested lease does not exist. |
| [`LeaseNotOwnedByWallet`](#leasenotownedbywallet) | Class | The lease is not owned by the wallet. |

## LeaseResponseError

```ts
class LeaseResponseError extends ResponseError
```

General class of errors for LeaseResponseError service.

## InvalidLeaseError

```ts
class InvalidLeaseError extends LeaseResponseError
```

The provided lease is invalid.

## DisplacedLeaseError

```ts
class DisplacedLeaseError extends LeaseResponseError
```

Lease is older than the current lease.

## InvalidResourceError

```ts
class InvalidResourceError extends LeaseResponseError
```

Resource is not known to the LeaseService.

## NotAuthoritativeServiceError

```ts
class NotAuthoritativeServiceError extends LeaseResponseError
```

LeaseService is not authoritative so Acquire should not work.

## ResourceAlreadyClaimedError

```ts
class ResourceAlreadyClaimedError extends LeaseResponseError
```

Use TakeLease method to forcefully grab the already claimed lease.

## RevokedLeaseError

```ts
class RevokedLeaseError extends LeaseResponseError
```

Lease is stale because the lease-holder did not check in regularly enough.

## UnmanagedResourceError

```ts
class UnmanagedResourceError extends LeaseResponseError
```

LeaseService does not manage this resource.

## WrongEpochError

```ts
class WrongEpochError extends LeaseResponseError
```

Lease is for the wrong epoch.

## NotActiveLeaseError

```ts
class NotActiveLeaseError extends LeaseResponseError
```

Lease is not the active lease.

## NoSuchLease

```ts
class NoSuchLease extends Error
```

The requested lease does not exist.

### new NoSuchLease

```ts
constructor(resource: any)
```

| Parameter | Type | Description |
|---|---|---|
| `resource` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `resource` | `any` |  |

## LeaseNotOwnedByWallet

```ts
class LeaseNotOwnedByWallet extends Error
```

The lease is not owned by the wallet.

### new LeaseNotOwnedByWallet

```ts
constructor(resource: any, leaseState: any)
```

| Parameter | Type | Description |
|---|---|---|
| `resource` | `any` |  |
| `leaseState` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `resource` | `any` |  |
| `leaseState` | `any` |  |

## Lease

```ts
class Lease
```

Leases are used to coordinate access to shared resources on a Boston Dynamics robot.
A service will grant access to the shared resource if the lease which accompanies a request is
"more recent" than any previously seen leases. Recency is determined using a sequence of
monotonically increasing numbers, similar to a Lamport logical clock.

### new Lease

```ts
constructor(leaseProto: any, ignoreIsValidCheck?: boolean)
```

| Parameter | Type | Description |
|---|---|---|
| `leaseProto` | `any` |  |
| `ignoreIsValidCheck` | `boolean` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `CompareResult` | `{ SAME: number; SUPER_LEASE: number; SUB_LEASE: number; OLDER: number; NEWER: number; DIFFERENT_RESOURCES: number; DIFFERENT_EPOCHS: number; }` | Enum for comparison results between two leases. Static. |
| `leaseProto` | `leasePb.Lease` |  |

### Lease.isValidProto

```ts
static isValidProto(leaseProto: leasePb.Lease): boolean
```

Checks whether this lease is valid.

| Parameter | Type | Description |
|---|---|---|
| `leaseProto` | `leasePb.Lease` | The lease proto to check validity |

**Returns** `boolean`

### Lease.compareResultToLeaseUseResultStatus

```ts
static compareResultToLeaseUseResultStatus(compareResult: number, allowSuperLeases: boolean): number
```

Determines the comparable LeaseUseResult.Status enum value based on the CompareResult enum.

| Parameter | Type | Description |
|---|---|---|
| `compareResult` | `number` | The result value to be compared. |
| `allowSuperLeases` | `boolean` | If true, a super lease will still be considered as "ok" newer when compared to the active lease. |

**Returns** `number`

**Throws**

- `Error` Throwed if there is an unknown compare result enum value.

### compare

```ts
compare(otherLease: Lease, ignoreResources?: boolean): number
```

Compare two different lease objects.

| Parameter | Type | Description |
|---|---|---|
| `otherLease` | `Lease` | The lease to compare this lease with. |
| `ignoreResources` | `boolean` | Bypass resources checking (*Optional*) |

**Returns** `number`

### createNewer

```ts
createNewer(): Lease
```

Creates a new Lease which is newer than this Lease.

**Returns** `Lease`

### createSublease

```ts
createSublease(clientName?: string): Lease
```

Creates a sublease of this lease.

| Parameter | Type | Description |
|---|---|---|
| `clientName` | `string` | Optional argument to pass a client name to be appended to the new lease's set of clients which have used it. (*Optional*) |

**Returns** `Lease`

### isValidLease

```ts
isValidLease(): boolean
```

Non static version of is_valid_proto

**Returns** `boolean`

## LeaseState

```ts
class LeaseState
```

State of lease ownership in the wallet.

### new LeaseState

```ts
constructor(leaseStatus: any, leaseOwner?: null, lease?: null, leaseCurrent?: null, clientName?: null)
```

| Parameter | Type | Description |
|---|---|---|
| `leaseStatus` | `any` |  |
| `leaseOwner` | `null` | (*Optional*) |
| `lease` | `null` | (*Optional*) |
| `leaseCurrent` | `null` | (*Optional*) |
| `clientName` | `null` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `Status` | `{ STATUS_UNOWNED: number; STATUS_REVOKED: number; STATUS_SELF_OWNER: number; STATUS_OTHER_OWNER: number; STATUS_NOT_MANAGED: number; }` | Static. |
| `leaseStatus` | `number` |  |
| `leaseOwner` | `leasePb.LeaseOwner` |  |
| `leaseOriginal` | `Lease` |  |
| `clientName` | `string` |  |
| `leaseCurrent` | `Lease` |  |

### createNewer

```ts
createNewer(): LeaseState
```

Create newer version of the Lease.

**Returns** `LeaseState`

### updateFromLeaseUseResult

```ts
updateFromLeaseUseResult(leaseUseResult: leasePb.LeaseUseResult): LeaseState
```

Update internal instance of LeaseState from given lease.

| Parameter | Type | Description |
|---|---|---|
| `leaseUseResult` | `leasePb.LeaseUseResult` | LeaseUseResult from the server. |

**Returns** `LeaseState`

## LeaseWallet

```ts
class LeaseWallet
```

Storage for Leases.

### Properties

| Property | Type | Description |
|---|---|---|
| `clientName` | `string \| null` |  |

### add

```ts
add(lease: Lease): void
```

Add lease in the wallet.

| Parameter | Type | Description |
|---|---|---|
| `lease` | `Lease` | Lease to add in the wallet. |

### remove

```ts
remove(lease: Lease): void
```

Remove lease from the wallet.

| Parameter | Type | Description |
|---|---|---|
| `lease` | `Lease` | Lease to remove from the wallet. |

### advance

```ts
advance(resource?: string): Lease
```

Advance the lease for a specific resource.

| Parameter | Type | Description |
|---|---|---|
| `resource` | `string` | The resource that the Lease is for. (*Optional*) |

**Returns** `Lease`

**Throws**

- `LeaseNotOwnedByWallet` The lease is not owned by the wallet.

### getLease

```ts
getLease(resource?: string): Lease
```

Get the lease for a specific resource.

| Parameter | Type | Description |
|---|---|---|
| `resource` | `string` | The resource that the Lease is for. (*Optional*) |

**Returns** `Lease`

**Throws**

- `LeaseNotOwnedByWallet` The lease is not owned by the wallet.

### getLeaseState

```ts
getLeaseState(resource?: string): LeaseState
```

Get the lease state for a specific resource.

| Parameter | Type | Description |
|---|---|---|
| `resource` | `string` | The resource that the Lease is for. (*Optional*) |

**Returns** `LeaseState`

**Throws**

- `NoSuchLease` The requested lease does not exist.

### onLeaseUseResult

```ts
onLeaseUseResult(leaseUseResult: leasePb.LeaseUseResult, resource?: string): void
```

Update the lease state based on result of using the lease.

| Parameter | Type | Description |
|---|---|---|
| `leaseUseResult` | `leasePb.LeaseUseResult` | LeaseUseResult from the server. |
| `resource` | `string` | Resource to update, e.g. 'body'. Default to None to use the resource specified by the lease_use_result. (*Optional*) |

### setClientName

```ts
setClientName(clientName: string): void
```

Set the client name that will be issuing the leases.

| Parameter | Type | Description |
|---|---|---|
| `clientName` | `string` | The client name. |

## LeaseClient

```ts
class LeaseClient extends BaseClient<LeaseServiceClient>
```

Client to the lease service.

### new LeaseClient

```ts
constructor(leaseWallet?: LeaseWallet | null)
```

| Parameter | Type | Description |
|---|---|---|
| `leaseWallet` | `LeaseWallet \| null` | An instance of LeaseWallet (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'lease'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.LeaseService'`. |

### acquire

```ts
acquire(resource?: string, args?: Object): Promise<Lease>
```

Acquire a lease for the given resource.

| Parameter | Type | Description |
|---|---|---|
| `resource` | `string` | Resource for the lease. (*Optional*) |
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<Lease>`

**Throws**

- `ResourceAlreadyClaimedError` Use TakeLease method to forcefully grab the already claimed lease.
- `InvalidResourceError` Resource is not known to the LeaseService.
- `NotAuthoritativeServiceError` LeaseService is not authoritative so Acquire should not work.

### take

```ts
take(resource?: string, args?: Object): Promise<Lease>
```

Take the lease for the given resource.

| Parameter | Type | Description |
|---|---|---|
| `resource` | `string` | Resource for the lease. (*Optional*) |
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<Lease>`

**Throws**

- `InvalidResourceError` Resource is not known to the LeaseService.
- `NotAuthoritativeServiceError` LeaseService is not authoritative so Acquire should not work.

### returnLease

```ts
returnLease(lease: Lease, args?: Object): Promise<leasePb.ReturnLeaseResponse>
```

Return an acquired lease.

| Parameter | Type | Description |
|---|---|---|
| `lease` | `Lease` | Lease to return. This should be a Lease class object, and not the proto. |
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<leasePb.ReturnLeaseResponse>`

**Throws**

- `InvalidResourceError` Resource is not known to the LeaseService.
- `NotActiveLeaseError` Lease is not the active lease.
- `NotAuthoritativeServiceError` LeaseService is not authoritative so Acquire should not work.

### retainLease

```ts
retainLease(lease: Lease, args?: Object): Promise<leasePb.RetainLeaseResponse>
```

Retain the lease.

| Parameter | Type | Description |
|---|---|---|
| `lease` | `Lease` | Lease to retain. |
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<leasePb.RetainLeaseResponse>`

**Throws**

- `InternalServerError` Service experienced an unexpected error state.
- `LeaseUseError` Request was rejected due to using an invalid lease.

### listLeases

```ts
listLeases(includeFullLeaseInfo?: boolean, args?: Object): Promise<leasePb.LeaseResource[]>
```

Get a list of the leases.

| Parameter | Type | Description |
|---|---|---|
| `includeFullLeaseInfo` | `boolean` | Whether the returned list of LeaseResources should include all of the available information about the last lease used. Defaults to False. (*Optional*) |
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<leasePb.LeaseResource[]>`

**Throws**

- `InternalServerError` Service experienced an unexpected error state.
- `LeaseUseError` Request was rejected due to using an invalid lease.

### listLeasesFull

```ts
listLeasesFull(includeFullLeaseInfo?: boolean, args?: Object): Promise<leasePb.ListLeasesResponse>
```

Get a list of the leases.

| Parameter | Type | Description |
|---|---|---|
| `includeFullLeaseInfo` | `boolean` | Whether the returned list of LeaseResources should include all of the available information about the last lease used. Defaults to False. (*Optional*) |
| `args` | `Object` | Passed to underlying RPC. (*Optional*) |

**Returns** `Promise<leasePb.ListLeasesResponse>`

## LeaseWalletRequestProcessor

```ts
class LeaseWalletRequestProcessor
```

LeaseWalletRequestProcessor adds a lease from a wallet to a request.

### new LeaseWalletRequestProcessor

```ts
constructor(leaseWallet: any, resourceList?: null)
```

| Parameter | Type | Description |
|---|---|---|
| `leaseWallet` | `any` |  |
| `resourceList` | `null` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `leaseWallet` | `LeaseWallet` | The LeaseWallet to read leases from. |
| `resourceList` | `string[]` | List of resources this processor should add to requests. |
| `logger` | `import("winston").Logger` |  |

### LeaseWalletRequestProcessor.getLeaseState

```ts
static getLeaseState(request: any): {
    multipleLeases: boolean | null;
    skipMutation: boolean;
}
```

Returns an array of ("are there multiple leases in request?", "are they set already?")

| Parameter | Type | Description |
|---|---|---|
| `request` | `any` | The lease request |

**Returns** `{ multipleLeases: boolean \| null; skipMutation: boolean; }`

### mutate

```ts
mutate(request: any, resourceList?: string[]): void
```

Add the leases for the necessary resources if no leases have been specified yet.

| Parameter | Type | Description |
|---|---|---|
| `request` | `any` | The lease request |
| `resourceList` | `string[]` | The resource list (*Optional*) |

## LeaseWalletResponseProcessor

```ts
class LeaseWalletResponseProcessor
```

LeaseWalletResponseProcessor updates the wallet with a LeaseUseResult.

### new LeaseWalletResponseProcessor

```ts
constructor(leaseWallet: any)
```

| Parameter | Type | Description |
|---|---|---|
| `leaseWallet` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `leaseWallet` | `LeaseWallet` | Lease wallet to use. |

### mutate

```ts
mutate(response: any): void
```

Update the wallet if a response has a lease_use_result.

| Parameter | Type | Description |
|---|---|---|
| `response` | `any` | The lease response |

## LeaseKeepAlive

```ts
class LeaseKeepAlive
```

LeaseKeepAlive issues lease liveness checks on a background interval.

### new LeaseKeepAlive

```ts
constructor(leaseClient: LeaseClient, options?: {
    leaseWallet?: LeaseWallet | undefined;
    resource?: string | undefined;
    rpcIntervalMs?: number | undefined;
    keepRunningCb?: Function | undefined;
    hostName?: string | undefined;
    onFailureCallback?: Function | undefined;
    warnings?: boolean | undefined;
    mustAcquire?: boolean | undefined;
    returnAtExit?: boolean | undefined;
})
```

| Parameter | Type | Description |
|---|---|---|
| `leaseClient` | `LeaseClient` | The LeaseClient object to issue requests on. |
| `options` | `{ leaseWallet?: LeaseWallet \| undefined; resource?: string \| undefined; rpcIntervalMs?: number \| undefined; keepRunningCb?: Function \| undefined; hostName?: string \| undefined; onFailureCallback?: Function \| undefined; warnings?: boolean \| undefined; mustAcquire?: boolean \| undefined; returnAtExit?: boolean \| undefined; }` | Optional parameters. (*Optional*) |
| `options.leaseWallet` | `LeaseWallet` | The LeaseWallet to retrieve current leases from. (*Optional*, default `null`) |
| `options.resource` | `string` | The resource to do liveness checks for. (*Optional*, default `'body'`) |
| `options.rpcIntervalMs` | `number` | Duration in milliseconds between liveness checks. (*Optional*, default `2000`) |
| `options.keepRunningCb` | `Function` | Callable object to determine if checks should proceed. (*Optional*, default `null`) |
| `options.hostName` | `string` | Host name for logging purposes. (*Optional*, default `''`) |
| `options.onFailureCallback` | `Function` | Callable function for handling failures. (*Optional*, default `null`) |
| `options.warnings` | `boolean` | Determine if errors should be printed. (*Optional*, default `true`) |
| `options.mustAcquire` | `boolean` | If true, exceptions when acquiring the lease are not caught. (*Optional*, default `false`) |
| `options.returnAtExit` | `boolean` | If true, return the lease when shutting down. (*Optional*, default `false`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `hostName` | `any` |  |
| `printWarnings` | `any` |  |
| `returnAtExit` | `any` |  |
| `leaseClient` | `LeaseClient` |  |
| `leaseWallet` | `LeaseWallet` |  |
| `resource` | `any` |  |
| `rpcIntervalMs` | `any` |  |
| `keepRunning` | `any` |  |
| `retainLeaseFailedCb` | `any` |  |
| `logger` | `import("winston").Logger` |  |
| `donePromise` | `Promise<any>` |  |
| `resolveDonePromise` | `(value: any) => void` |  |
| `intitializationPromise` | `Promise<void>` |  |

### initializeLease

```ts
initializeLease(mustAcquire: any): Promise<void>
```

| Parameter | Type | Description |
|---|---|---|
| `mustAcquire` | `any` |  |

**Returns** `Promise<void>`

### startPeriodicCheckIn

```ts
startPeriodicCheckIn(): void
```

Start the check-in loop, if it is not running already.

### stopPeriodicCheckIn

```ts
stopPeriodicCheckIn(): void
```

Stop the check-in loop. A check-in in progress finishes: await waitUntilDone() for it.

### checkIn

```ts
checkIn(): Promise<void>
```

Retain lease associated with the resource in this class.

**Returns** `Promise<void>`

### ok

```ts
ok(): void
```

### shutdown

```ts
shutdown(): Promise<void>
```

Stop the liveness checks, and return the lease if returnAtExit. Can be called multiple times.
Like Python, the check-in in progress ends before the lease is returned.

**Returns** `Promise<void>`

### isAlive

```ts
isAlive(): boolean
```

**Returns** `boolean`

### waitUntilDone

```ts
waitUntilDone(): Promise<void>
```

Waits until the check-in loop exits.

Most client code stops the loop with shutdown(), or with the keepRunningCb option of the constructor. However, this
can be useful in unit tests for ensuring exits.

**Returns** `Promise<void>`

### waitForInitialization

```ts
waitForInitialization(): Promise<void>
```

**Returns** `Promise<void>`

### [Symbol.asyncDispose]

```ts
[Symbol.asyncDispose](): Promise<void>
```

**Returns** `Promise<void>`

## addLeaseWalletProcessors

```ts
export function addLeaseWalletProcessors(client: BaseClient<any>, leaseWallet: LeaseWallet, resourceList?: string[] | null): void
```

Adds LeaseWallet related processors to a gRPC client.
For services which use leases for access control, this does two things:
Advance the lease from the LeaseWallet and attach to a request.
Handle the LeaseUseResult from a response and update LeaseWallet.

| Parameter | Type | Description |
|---|---|---|
| `client` | `BaseClient<any>` | BaseClient derived class for a single service. |
| `leaseWallet` | `LeaseWallet` | The LeaseWallet to track from, must be non-None. |
| `resourceList` | `string[] \| null` | List of resources these processors should add to requests. Default null to use a default resource. (*Optional*) |

## testActiveLease

```ts
export function testActiveLease(incomingLeaseProto: leasePb.Lease, activeLease: Lease, subleaseName?: string | null, allowSuperLeases?: boolean): [leasePb.LeaseUseResult, Lease]
```

Check if an incoming lease is newer than the current lease.

| Parameter | Type | Description |
|---|---|---|
| `incomingLeaseProto` | `leasePb.Lease` | The incoming lease proto. |
| `activeLease` | `Lease` | A lease object representing the most recent/newest known lease that the incoming lease should be compared against. |
| `subleaseName` | `string \| null` | If not NoneType, a sublease of the incoming lease will be created (with sublease_name as the client name) and used to compare to the active lease. (*Optional*) |
| `allowSuperLeases` | `boolean` | If true, a super lease will still be considered as "ok"/ newer when compared to the active lease. (*Optional*) |

**Returns** `[leasePb.LeaseUseResult, Lease]`

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `DEFAULT_RESOURCES` | `any[]` |  |

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `leasePb` | `spot-sdk-js/src/bosdyn/api/lease_pb` |

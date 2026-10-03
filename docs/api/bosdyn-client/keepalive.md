# bosdyn-client/keepalive

Client implementation of the Keepalive service.

```js
const { Policy, KeepaliveClient, PolicyKeepalive, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { InvalidLeaseError } = require('spot-sdk-js/src/bosdyn-client/keepalive');
```

| Export | Kind | Description |
|---|---|---|
| [`Policy`](#policy) | Class | Helper class for API Policy. |
| [`KeepaliveClient`](#keepaliveclient) | Class | A client for the Keepalive service. |
| [`PolicyKeepalive`](#policykeepalive) | Class | Specify a keepalive Policy that should be held to. |
| [`removeAllPolicies`](#removeallpolicies) | Function | Remove all policies on the robot. |
| [`KeepaliveResponseError`](#keepaliveresponseerror) | Class | Error in Keepalive RPC |
| [`InvalidLeaseError`](#invalidleaseerror) | Class | A policy's associated lease was not the same, super, or sub lease of the active lease. |
| [`InvalidPolicyError`](#invalidpolicyerror) | Class | The specified policy ID was not valid. |

## Policy

```ts
class Policy
```

Helper class for API Policy.

### new Policy

```ts
constructor(proto?: null)
```

| Parameter | Type | Description |
|---|---|---|
| `proto` | `null` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `policyProto` | `keepalivePb.Policy` |  |
| `name` | `string` | Get or set the name of the Policy |

### addAssociatedLease

```ts
addAssociatedLease(lease: any): void
```

| Parameter | Type | Description |
|---|---|---|
| `lease` | `any` |  |

### addControlledMotorsOffAction

```ts
addControlledMotorsOffAction(after: number): void
```

Add a 'controlled motors off' action that triggers after specified time (seconds).

| Parameter | Type | Description |
|---|---|---|
| `after` | `number` | The time (seconds) after which the action should be triggered. |

**Returns** `void`

### addImmediateRobotOffAction

```ts
addImmediateRobotOffAction(after: number): void
```

Add an 'immediate robot off' action that triggers after specified time (seconds).

| Parameter | Type | Description |
|---|---|---|
| `after` | `number` | The time (seconds) after which the action should be triggered. |

**Returns** `void`

### addRecordEventAction

```ts
addRecordEventAction(events: any[], after: number): void
```

Add a 'record event' action that triggers after specified time (seconds).

| Parameter | Type | Description |
|---|---|---|
| `events` | `any[]` | List of event names |
| `after` | `number` | Time (seconds) after which the action should be triggered. |

**Returns** `void`

### addAutoReturnAction

```ts
addAutoReturnAction(leases: any[], params: any, after: number): void
```

Add an 'auto return' action that triggers after specified time (seconds).

| Parameter | Type | Description |
|---|---|---|
| `leases` | `any[]` | List of leases |
| `params` | `any` | The parameters to set on the action |
| `after` | `number` | Time (seconds) after which the action should be triggered. |

**Returns** `void`

### addLeaseStaleAction

```ts
addLeaseStaleAction(leases: any[], after: number): void
```

Add a 'mark lease stale' action that triggers after specified time (seconds).

| Parameter | Type | Description |
|---|---|---|
| `leases` | `any[]` | List of leases |
| `after` | `number` | Time (in seconds) after which the action should be executed. |

### shortestActionDelay

```ts
shortestActionDelay(): number | null
```

Get the shortest delay on an action, or None if no actions are set.

**Returns** `number \| null`

```js
const pol = new Policy();
pol.addControlledMotorsOffAction(2.5);
pol.addImmediateRobotOffAction(1.2);
console.log(pol.shortestActionDelay() === 1.2);
```

## KeepaliveClient

```ts
class KeepaliveClient extends BaseClient<KeepaliveServiceClient>
```

A client for the Keepalive service.
This client is in BETA and may undergo changes in future releases.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'keepalive'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.keepalive.KeepaliveService'`. |

### modifyPolicy

```ts
modifyPolicy(toAdd?: Policy, policyIdsToRemove?: Array<string | bigint | number>, args?: Object): Promise<keepalivePb.ModifyPolicyResponse>
```

Add given policy and remove policies with given ids.

| Parameter | Type | Description |
|---|---|---|
| `toAdd` | `Policy` | List of policies to add (*Optional*) |
| `policyIdsToRemove` | `Array<string \| bigint \| number>` | List of policies id to remove (uint64: the ids are strings, exact beyond 2^53) (*Optional*) |
| `args` | `Object` | Extra arguments to pass to the service. (*Optional*) |

**Returns** `Promise<keepalivePb.ModifyPolicyResponse>`

### checkIn

```ts
checkIn(policyId: string | bigint | number, args?: Object): Promise<keepalivePb.CheckInResponse>
```

Check in for given policy_id, refreshing that policy's timer.

| Parameter | Type | Description |
|---|---|---|
| `policyId` | `string \| bigint \| number` | Policy id |
| `args` | `Object` | Extra arguments to pass to the service. (*Optional*) |

**Returns** `Promise<keepalivePb.CheckInResponse>`

### getStatus

```ts
getStatus(args?: Object): Promise<keepalivePb.GetStatusResponse>
```

Get status on all policies.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments to pass to the service. (*Optional*) |

**Returns** `Promise<keepalivePb.GetStatusResponse>`

## PolicyKeepalive

```ts
class PolicyKeepalive
```

Specify a keepalive Policy that should be held to.

### new PolicyKeepalive

```ts
constructor(client: KeepaliveClient, policy: Policy, rpcTimeoutSeconds?: number | null, rpcIntervalSeconds?: number | null, logger?: Object | null, removePolicyOnExit?: boolean, initialRetrySeconds?: number)
```

| Parameter | Type | Description |
|---|---|---|
| `client` | `KeepaliveClient` |  |
| `policy` | `Policy` |  |
| `rpcTimeoutSeconds` | `number \| null` | Timeout of the check-ins, in seconds. (*Optional*, default `null`) |
| `rpcIntervalSeconds` | `number \| null` | Interval of the check-ins, in seconds (a third of the shortest delay of the actions of the policy by default). (*Optional*, default `null`) |
| `logger` | `Object \| null` | (*Optional*, default `null`) |
| `removePolicyOnExit` | `boolean` | Whether shutdown() removes the policy. (*Optional*, default `false`) |
| `initialRetrySeconds` | `number` | First wait of the retries with exponential back-off, in seconds. (*Optional*, default `1.0`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `logger` | `Object` |  |
| `removePolicyOnExit` | `boolean` |  |
| `keepaliveErrorCallback` | `((arg0: Error) => (number \| Promise<number>)) \| null` | Optional callback called when a check-in fails with an error which is not a RetryableRpcError, like Python: it returns (or resolves to) an ErrorCallbackResult. Without callback, such an error stops the check-ins, and the robot then applies the actions of the policy (they were retried forever). |

### start

```ts
start(): Promise<this>
```

Starts the check-ins.

**Returns** `Promise<this>`

### shutdown

```ts
shutdown(): Promise<void>
```

Stop the check-ins, and remove the policy if removePolicyOnExit. Like Python's join, the check-in in
progress ends before the policy is removed.

**Returns** `Promise<void>`

### removePolicy

```ts
removePolicy(): Promise<void>
```

Remove this instance's policy, if it did manage to add one.

**Returns** `Promise<void>`

### [Symbol.asyncDispose]

```ts
[Symbol.asyncDispose](): Promise<void>
```

**Returns** `Promise<void>`

## KeepaliveResponseError

```ts
class KeepaliveResponseError extends ResponseError
```

Error in Keepalive RPC

## InvalidLeaseError

```ts
class InvalidLeaseError extends KeepaliveResponseError
```

A policy's associated lease was not the same, super, or sub lease of the active lease.

## InvalidPolicyError

```ts
class InvalidPolicyError extends KeepaliveResponseError
```

The specified policy ID was not valid.

## removeAllPolicies

```ts
export function removeAllPolicies(keepaliveClient: KeepaliveClient, attempts?: number): Promise<void>
```

Remove all policies on the robot.
Optionally do this over a few attempts, in case other things are also removing policies.

| Parameter | Type | Description |
|---|---|---|
| `keepaliveClient` | `KeepaliveClient` | The keepalive client |
| `attempts` | `number` | The number of attempts to remove (*Optional*) |

**Returns** `Promise<void>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `keepalivePb` | `spot-sdk-js/src/bosdyn/api/keepalive/keepalive_pb` |

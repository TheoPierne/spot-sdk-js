# bosdyn-client/log_status

Client for the log-status service.

This allows client code to start, extend or terminate experiment logs and start retro logs.

```js
const { LogStatusClient, LogStatusResponseError, ExperimentAlreadyRunningError, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { RequestIdDoesNotExistError } = require('spot-sdk-js/src/bosdyn-client/log_status');
```

| Export | Kind | Description |
|---|---|---|
| [`LogStatusClient`](#logstatusclient) | Class | A client for interacting with robot logs. |
| [`LogStatusResponseError`](#logstatusresponseerror) | Class | Error in Log Status RPC |
| [`ExperimentAlreadyRunningError`](#experimentalreadyrunningerror) | Class | The log status request could not be started, an experiment is already running. |
| [`RequestIdDoesNotExistError`](#requestiddoesnotexisterror) | Class | The provided request id does not exist or is invalid. |
| [`InactiveLogError`](#inactivelogerror) | Class | The log has already terminated and cannot be updated. |
| [`ConcurrencyLimitReachedError`](#concurrencylimitreachederror) | Class | The limit of concurrent retro logs has be reached, a new log cannot be started. |
| [`NoDataForEventError`](#nodataforeventerror) | Class | No data is available for the provided event, so a log cannot be started. |

## LogStatusClient

```ts
class LogStatusClient extends BaseClient<LogStatusServiceClient>
```

A client for interacting with robot logs.
This allows client code to start, extend or terminate experiment logs and start retro logs.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'log-status'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.log_status.LogStatusService'`. |

### getLogStatus

```ts
getLogStatus(id: string, args?: Object): Promise<GetLogStatusResponse>
```

Synchronously get status of a log.

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | Id of log to retrieve |
| `args` | `Object` | Extra arguments to pass to the service. (*Optional*) |

**Returns** `Promise<GetLogStatusResponse>`

### getActiveLogStatuses

```ts
getActiveLogStatuses(args?: Object): Promise<GetActiveLogStatusesResponse>
```

Synchronously retrieve status of active logs.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments to pass to the service. (*Optional*) |

**Returns** `Promise<GetActiveLogStatusesResponse>`

### startExperimentLog

```ts
startExperimentLog(seconds: number, pastTextlogDuration?: number, args?: Object): Promise<StartExperimentLogResponse>
```

Start an experiment log, to run for a specified duration.

| Parameter | Type | Description |
|---|---|---|
| `seconds` | `number` | Number of seconds to gather data for the experiment log |
| `pastTextlogDuration` | `number` | (*Optional*) |
| `args` | `Object` | Extra arguments to pass to the service. (*Optional*) |

**Returns** `Promise<StartExperimentLogResponse>`

### startRetroLog

```ts
startRetroLog(seconds: number, args?: Object): Promise<StartRetroLogResponse>
```

Start a retro log, to run for a specified duration.

| Parameter | Type | Description |
|---|---|---|
| `seconds` | `number` | Number of seconds to gather data for the retro log |
| `args` | `Object` | Extra arguments to pass to the service. (*Optional*) |

**Returns** `Promise<StartRetroLogResponse>`

### startConcurrentLog

```ts
startConcurrentLog(seconds: number, event?: Event, args?: Object): Promise<StartConcurrentLogResponse>
```

Start an experiment log that allows concurrency, to run based on a particular data_set, as derived from the recipe
corresponding to the provided event.
An event must be provided!

| Parameter | Type | Description |
|---|---|---|
| `seconds` | `number` |  |
| `event` | `Event` | (*Optional*) |
| `args` | `Object` | Extra arguments to pass to the service. (*Optional*) |

**Returns** `Promise<StartConcurrentLogResponse>`

### updateExperiment

```ts
updateExperiment(id: string, seconds: number, args?: Object): Promise<UpdateExperimentLogResponse>
```

Update an experiment log to run for a specified duration.

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | Id of log to retrieve |
| `seconds` | `number` | Number of seconds to gather data for the experiment log |
| `args` | `Object` | Extra arguments to pass to the service. (*Optional*) |

**Returns** `Promise<UpdateExperimentLogResponse>`

### terminateLog

```ts
terminateLog(id: string, args?: Object): Promise<any>
```

Terminate an experiment log.

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | Id of log to terminate |
| `args` | `Object` | Extra arguments to pass to the service. (*Optional*) |

**Returns** `Promise<any>`

## LogStatusResponseError

```ts
class LogStatusResponseError extends ResponseError
```

Error in Log Status RPC

## ExperimentAlreadyRunningError

```ts
class ExperimentAlreadyRunningError extends LogStatusResponseError
```

The log status request could not be started, an experiment is already running.

## RequestIdDoesNotExistError

```ts
class RequestIdDoesNotExistError extends LogStatusResponseError
```

The provided request id does not exist or is invalid.

## InactiveLogError

```ts
class InactiveLogError extends LogStatusResponseError
```

The log has already terminated and cannot be updated.

## ConcurrencyLimitReachedError

```ts
class ConcurrencyLimitReachedError extends LogStatusResponseError
```

The limit of concurrent retro logs has be reached, a new log cannot be started.

## NoDataForEventError

```ts
class NoDataForEventError extends LogStatusResponseError
```

No data is available for the provided event, so a log cannot be started.

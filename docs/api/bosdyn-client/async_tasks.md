# bosdyn-client/async_tasks

Utilities for managing periodic tasks consisting of asynchronous GRPC calls.

```js
const { AsyncTasks, AsyncGRPCTask, AsyncPeriodicGRPCTask, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`AsyncTasks`](#asynctasks) | Class | Manages a set of tasks which work by periodically calling an update() method. |
| [`AsyncGRPCTask`](#asyncgrpctask) | Class | Task to be accomplished using asynchronous gRPC calls: when it is time to run the task, a query returns a promise, which is monitored by update() for completion, and then an action is taken in response. |
| [`AsyncPeriodicGRPCTask`](#asyncperiodicgrpctask) | Class | Periodic task to be accomplished using asynchronous gRPC calls. |
| [`AsyncPeriodicQuery`](#asyncperiodicquery) | Class | Query for robot data at some regular interval. |

## AsyncTasks

```ts
class AsyncTasks
```

Manages a set of tasks which work by periodically calling an update() method.

### new AsyncTasks

```ts
constructor(tasks?: AsyncGRPCTask[] | null)
```

| Parameter | Type | Description |
|---|---|---|
| `tasks` | `AsyncGRPCTask[] \| null` | List of tasks to manage. (*Optional*, default `null`) |

### addTask

```ts
addTask(task: AsyncGRPCTask): void
```

Add a task to be managed by this object.

| Parameter | Type | Description |
|---|---|---|
| `task` | `AsyncGRPCTask` |  |

### update

```ts
update(): void
```

Call this periodically to manage execution of tasks owned by this object.

## AsyncGRPCTask

```ts
class AsyncGRPCTask
```

Task to be accomplished using asynchronous gRPC calls: when it is time to run the task, a query returns a promise,
which is monitored by update() for completion, and then an action is taken in response.

### update

```ts
update(): void
```

Call this periodically to manage execution of task represented by this object. Another error than an error of the
SDK is thrown, like Python, by this update and the next ones.

## AsyncPeriodicGRPCTask

```ts
class AsyncPeriodicGRPCTask extends AsyncGRPCTask
```

Periodic task to be accomplished using asynchronous gRPC calls.

### new AsyncPeriodicGRPCTask

```ts
constructor(periodSec: number)
```

| Parameter | Type | Description |
|---|---|---|
| `periodSec` | `number` | Time to wait in seconds between queries. |

## AsyncPeriodicQuery

```ts
class AsyncPeriodicQuery extends AsyncPeriodicGRPCTask
```

Query for robot data at some regular interval.

### new AsyncPeriodicQuery

```ts
constructor(queryName: string, client: Object, logger: Object | null, periodSec: number)
```

| Parameter | Type | Description |
|---|---|---|
| `queryName` | `string` | Name of the query. |
| `client` | `Object` | SDK client for the query. |
| `logger` | `Object \| null` | Logger to use for logging errors. |
| `periodSec` | `number` | Time in seconds between running the query. |

### Properties

| Property | Type | Description |
|---|---|---|
| `proto` | `any` | The latest response proto. Read-only. |

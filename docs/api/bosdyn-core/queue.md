# bosdyn-core/queue

A FIFO queue, like queue.Queue in Python without the blocking calls.

```js
const { Queue, QueueFullError } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`Queue`](#queue) | Class | A FIFO queue, like Python's queue.Queue without the blocking calls. |
| [`QueueFullError`](#queuefullerror) | Class | Raised when an element is pushed to a full queue, like queue.Full in Python. |

## Queue

```ts
class Queue extends Array<any>
```

A FIFO queue, like Python's queue.Queue without the blocking calls.

### new Queue

```ts
constructor({ maxSize }?: {
    maxSize?: number;
})
```

| Parameter | Type | Description |
|---|---|---|
| `options` | `{ maxSize?: number; }` | The maximum number of elements: 0 or less for no limit, like the maxsize of Python (new Queue() threw, and a maxSize of 0 kept the queue always empty). (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `maxSize` | `number` |  |

### get

```ts
get(): any
```

**Returns** `any`

### full

```ts
full(): boolean
```

**Returns** `boolean`

### empty

```ts
empty(): boolean
```

**Returns** `boolean`

## QueueFullError

```ts
class QueueFullError extends Error
```

Raised when an element is pushed to a full queue, like queue.Full in Python.

### new QueueFullError

```ts
constructor(msg: any)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |

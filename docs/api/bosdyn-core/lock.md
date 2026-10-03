# bosdyn-core/lock

A lock for asynchronous code, like threading.Lock in Python.

```js
const { Lock } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`Lock`](#lock) | Class | Python's threading.Lock, for asynchronous code: run(fn) calls fn once the previous calls are done. |

## Lock

```ts
class Lock
```

Python's threading.Lock, for asynchronous code: run(fn) calls fn once the previous calls are done.

### run

```ts
run<T>(fn: () => (T | Promise<T>)): Promise<T>
```

Runs a function holding the lock, like `with lock:` in Python.

| Parameter | Type | Description |
|---|---|---|
| `fn` | `() => (T \| Promise<T>)` |  |

**Returns** `Promise<T>`

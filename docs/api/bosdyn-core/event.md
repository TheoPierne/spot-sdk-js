# bosdyn-core/event

An event for the background tasks of the SDK, like threading.Event in Python.

```js
const { Event } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`Event`](#event) | Class | Python's threading.Event, for the background tasks of the SDK. |

## Event

```ts
class Event
```

Python's threading.Event, for the background tasks of the SDK.

set() wakes up the pending wait() calls and makes the next ones return at once, until clear().
A wait() that times out leaves nothing behind: no listener, no timer.

### set

```ts
set(): void
```

Set the flag and wake up every pending wait().

**Returns** `void`

### isSet

```ts
isSet(): boolean
```

**Returns** `boolean`: True if the flag is set.

### clear

```ts
clear(): void
```

Reset the flag: the next wait() calls block until set() is called again.

**Returns** `void`

### wait

```ts
wait(timeoutMs?: number | null, { ref }?: {
    ref?: boolean | undefined;
}): Promise<boolean>
```

Wait until the flag is set, or until the timeout.

| Parameter | Type | Description |
|---|---|---|
| `timeoutMs` | `number \| null` | Maximum time to wait, in milliseconds. null waits until set(). (*Optional*, default `null`) |
| `options` | `{ ref?: boolean \| undefined; }` | (*Optional*) |
| `options.ref` | `boolean` | False for a wait that does not keep the process alive, like the wait of a Python daemon thread. (*Optional*, default `true`) |

**Returns** `Promise<boolean>`: True if the flag is set, false if the wait timed out (like Python).

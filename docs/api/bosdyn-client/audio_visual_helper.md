# bosdyn-client/audio_visual_helper

Runs an audio visual behavior for a while, like the AudioVisualHelper context manager of Python.

```js
const { AudioVisualHelper } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`AudioVisualHelper`](#audiovisualhelper) | Class | Runs an AV behavior between start() and exit(), like the AudioVisualHelper context manager of Python (disposing of it with await using also stops the behavior). |

## AudioVisualHelper

```ts
class AudioVisualHelper
```

Runs an AV behavior between start() and exit(), like the AudioVisualHelper context manager of Python (disposing of it
with await using also stops the behavior).

### new AudioVisualHelper

```ts
constructor(robot: any, behaviorName: any, refreshRate: any, logger?: null)
```

| Parameter | Type | Description |
|---|---|---|
| `robot` | `any` |  |
| `behaviorName` | `any` |  |
| `refreshRate` | `any` |  |
| `logger` | `null` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `robot` | `import("./robot").Robot` |  |
| `behaviorName` | `any` |  |
| `refreshRate` | `any` |  |
| `avClient` | `AudioVisualClient \| null` |  |
| `logger` | `Console` |  |

### start

```ts
start(): Promise<boolean>
```

Starts the background loop. Resolves once the **first** runBehavior returns, or rejects
on the **first** terminal error (like DoesNotExist or PersistentRpcError).
If the AV client can’t be created or hardware is missing, resolves `false`.
The loop may keep running even if this Promise rejects (mirrors Python’s behavior on some errors).

**Returns** `Promise<boolean>`

### exit

```ts
exit(): Promise<void>
```

Stop the loop; attempts to stop the behavior. Safe to call multiple times.

**Returns** `Promise<void>`

### isAlive

```ts
isAlive(): boolean | null
```

**Returns** `boolean \| null`

### [Symbol.asyncDispose]

```ts
[Symbol.asyncDispose](): Promise<void>
```

**Returns** `Promise<void>`

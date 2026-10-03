# bosdyn-client/logger_util

The loggers of the SDK: winston loggers, which log to the standard error stream.

```js
const { LoggerUtil } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`LoggerUtil`](#loggerutil) | Class |  |
| [`Logger`](#logger) | Type | A logger: a winston logger (the ones of LoggerUtil), or an object with the same methods, like the console. |

## LoggerUtil

```ts
class LoggerUtil
```

### Properties

| Property | Type | Description |
|---|---|---|
| `levels` | `config.CliConfigSetLevels` | Static. |
| `defaultLevel` | `string` | Level of the loggers created without an explicit level. Python's default only shows warnings, this keeps the informational messages but never logs the RPC contents (debug) by default. Static. Value: `'info'`. |
| `filter` | `{ filter: (arg0: Object) => boolean; } \| null` | The filter of all the loggers, e.g. the DedupLoggingMessages of setupLogging() (the filters of the logger 'bosdyn' in Python): an object whose filter(info) returns whether a message is logged, or null. Static. |

### LoggerUtil.getChild

```ts
static getChild(label?: string, childLabel?: string): object
```

| Parameter | Type | Description |
|---|---|---|
| `label` | `string` | (*Optional*) |
| `childLabel` | `string` | (*Optional*) |

**Returns** `object`

### LoggerUtil.setLevel

```ts
static setLevel(label?: string, level?: string): void
```

| Parameter | Type | Description |
|---|---|---|
| `label` | `string` | (*Optional*) |
| `level` | `string` | (*Optional*) |

### LoggerUtil.setGlobalLevel

```ts
static setGlobalLevel(level: string): void
```

Set the level of all the existing loggers and of the ones created afterwards.
Child loggers follow the level of their parent.

| Parameter | Type | Description |
|---|---|---|
| `level` | `string` | A winston (npm) level: 'error', 'warn', 'info', 'debug'... |

### LoggerUtil.getLogger

```ts
static getLogger(label?: string, level?: null): import("winston").Logger
```

| Parameter | Type | Description |
|---|---|---|
| `label` | `string` | (*Optional*) |
| `level` | `null` | (*Optional*) |

**Returns** `import("winston").Logger`

## Types

### Logger

```ts
export type Logger = import("winston").Logger | typeof console
```

A logger: a winston logger (the ones of LoggerUtil), or an object with the same methods, like the console.

# bosdyn-client/token_manager

For clients to automate token refresh.

```js
const { TokenManager, USER_TOKEN_REFRESH_TIME_DELTA, USER_TOKEN_RETRY_INTERVAL_START } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`TokenManager`](#tokenmanager) | Class | Refreshes the user token in the robot object. |
| [`USER_TOKEN_REFRESH_TIME_DELTA`](#constants) | Constant |  |
| [`USER_TOKEN_RETRY_INTERVAL_START`](#constants) | Constant |  |

## TokenManager

```ts
class TokenManager
```

Refreshes the user token in the robot object.
The refresh policy assumes the token is minted and then the manager is launched.

### new TokenManager

```ts
constructor(robot: Robot, timestamp?: Date | number | null, refreshInterval?: number, initialRetryInterval?: number)
```

Create an instance of TokenManager's class.

| Parameter | Type | Description |
|---|---|---|
| `robot` | `Robot` | Robot object. |
| `timestamp` | `Date \| number \| null` | Initial token timestamp. (*Optional*, default `null`) |
| `refreshInterval` | `number` | (*Optional*) |
| `initialRetryInterval` | `number` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `robot` | `import("./robot").Robot` |  |

### isAlive

```ts
isAlive(): boolean
```

**Returns** `boolean`

### stop

```ts
stop(): void
```

### update

```ts
update(): void
```

Refresh the user token as needed.

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `USER_TOKEN_REFRESH_TIME_DELTA` | `3600000` |  |
| `USER_TOKEN_RETRY_INTERVAL_START` | `1000` |  |

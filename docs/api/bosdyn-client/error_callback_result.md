# bosdyn-client/error_callback_result

The results of the error callbacks of the keep-alive helpers: what to do after an error.

```js
const { ErrorCallbackResult } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`ErrorCallbackResult`](#constants) | Constant |  |

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `ErrorCallbackResult` | `{ DEFAULT_ACTION: 1, RETRY_IMMEDIATELY: 2, RETRY_WITH_EXPONENTIAL_BACK_OFF: 3, RESUME_NORMAL_OPERATION: 4, ABORT: 5 }` |  |

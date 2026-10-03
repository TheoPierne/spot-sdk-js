# bosdyn-orbit/exceptions

The errors of the Orbit client.

```js
const { OrbitError, UnauthenticatedClientError, WebhookSignatureVerificationError } = require('spot-sdk-js').orbit;
```

| Export | Kind | Description |
|---|---|---|
| [`OrbitError`](#orbiterror) | Class | Base exception. |
| [`UnauthenticatedClientError`](#unauthenticatedclienterror) | Class | The client is not authenticated properly. |
| [`WebhookSignatureVerificationError`](#webhooksignatureverificationerror) | Class | The webhook signature could not be verified. |

## OrbitError

```ts
class OrbitError extends Error
```

Base exception.

### new OrbitError

```ts
constructor(message: any)
```

| Parameter | Type | Description |
|---|---|---|
| `message` | `any` |  |

## UnauthenticatedClientError

```ts
class UnauthenticatedClientError extends OrbitError
```

The client is not authenticated properly.

### new UnauthenticatedClientError

```ts
constructor(message?: string)
```

| Parameter | Type | Description |
|---|---|---|
| `message` | `string` | (*Optional*) |

## WebhookSignatureVerificationError

```ts
class WebhookSignatureVerificationError extends OrbitError
```

The webhook signature could not be verified.

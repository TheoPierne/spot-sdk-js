# bosdyn-client/auth

For clients to acquire a user token from the authentication service.

```js
const { AuthClient, AuthResponseError, InvalidLoginError, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`AuthClient`](#authclient) | Class | Client to authenticate to the robot. |
| [`AuthResponseError`](#authresponseerror) | Class | General class of errors for AuthResponseError service. |
| [`InvalidLoginError`](#invalidloginerror) | Class | Provided username/password is invalid. |
| [`InvalidTokenError`](#invalidtokenerror) | Class | Provided user token is invalid or cannot be re-minted. |
| [`TemporarilyLockedOutError`](#temporarilylockedouterror) | Class | User is temporarily locked out of authentication. |

## AuthClient

```ts
class AuthClient extends BaseClient<AuthServiceClient>
```

Client to authenticate to the robot.

### new AuthClient

```ts
constructor(name?: string | null)
```

Create an instance of AuthClient's class.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string \| null` | Name of the BaseClient (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'auth'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.AuthService'`. |

### auth

```ts
auth(username: string, password: string, args?: Object): Promise<string>
```

Authenticate to the robot with a username/password combo.

| Parameter | Type | Description |
|---|---|---|
| `username` | `string` | Username on the robot. |
| `password` | `string` | Password for the username on the robot. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<string>`: User token from the server as a string.

**Throws**

- `InvalidLoginError` If username and/or password are not valid.

### authWithToken

```ts
authWithToken(token: string, args?: Object): Promise<string>
```

Authenticate to the robot using a previously created user token.

| Parameter | Type | Description |
|---|---|---|
| `token` | `string` | A user token previously issued by the robot. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<string>`: A new user token from the server. The new token will generally be valid further in the future than the passed in token. A client can use auth_with_token to regularly re-authenticate without needing to ask for username/password credentials.

**Throws**

- `InvalidTokenError` If the token was incorrectly formed, for the wrong robot, or expired.

## AuthResponseError

```ts
class AuthResponseError extends ResponseError
```

General class of errors for AuthResponseError service.

## InvalidLoginError

```ts
class InvalidLoginError extends AuthResponseError
```

Provided username/password is invalid.

## InvalidTokenError

```ts
class InvalidTokenError extends AuthResponseError
```

Provided user token is invalid or cannot be re-minted.

## TemporarilyLockedOutError

```ts
class TemporarilyLockedOutError extends AuthResponseError
```

User is temporarily locked out of authentication.

# bosdyn-client/token_cache

For clients to delegate saving of tokens: token storage separate from token management.

```js
const { TokenCache, TokenCacheFilesystem, TokenCacheError, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`TokenCache`](#tokencache) | Class | No-op default cache that serves as an interface. |
| [`TokenCacheFilesystem`](#tokencachefilesystem) | Class | Handles transfer from in memory tokens to arbitrary storage e.g. |
| [`TokenCacheError`](#tokencacheerror) | Class | General class of errors to handle non-response non-grpc errors. |
| [`ClearFailedError`](#clearfailederror) | Class | Failed to delete the token from storage. |
| [`NotInCacheError`](#notincacheerror) | Class | Failed to read the token from cache. |
| [`WriteFailedError`](#writefailederror) | Class | Failed to write the token to storage. |

## TokenCache

```ts
class TokenCache
```

No-op default cache that serves as an interface.

### read

```ts
read(name: any): void
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `any` |  |

### clear

```ts
clear(name: any): void
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `any` |  |

### write

```ts
write(name: any, token: any): void
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `any` |  |
| `token` | `any` |  |

### match

```ts
match(name: any): never[]
```

Returns a set of valid keys that contains the name.

| Parameter | Type | Description |
|---|---|---|
| `name` | `any` |  |

**Returns** `never[]`

## TokenCacheFilesystem

```ts
class TokenCacheFilesystem
```

Handles transfer from in memory tokens to arbitrary storage e.g. filesystem.

### new TokenCacheFilesystem

```ts
constructor(cacheDirectory?: string)
```

| Parameter | Type | Description |
|---|---|---|
| `cacheDirectory` | `string` | The cache's path. A leading ~ is the home directory, like os.path.expanduser() in Python (it was a directory named ~; the ~user form is not supported). (*Optional*, default `'~/.bosdyn/user_tokens'`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `directory` | `string` |  |

### read

```ts
read(name: string): string | Buffer
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The file's name. |

**Returns** `string \| Buffer`: The content of the file.

**Throws**

- `NotInCacheError` 

### clear

```ts
clear(name: string): void
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The file's name. |

**Returns** `void`

**Throws**

- `ClearFailedError` 

### write

```ts
write(name: string, token: string): void
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The file's name. |
| `token` | `string` | The token to write in the file. |

**Returns** `void`

**Throws**

- `WriteFailedError` 

### match

```ts
match(name: string): Array<string> | any[]
```

Returns a set of valid keys that contains the name.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The file's name to match. |

**Returns** `Array<string> \| any[]`

## TokenCacheError

```ts
class TokenCacheError extends BosdynError
```

General class of errors to handle non-response non-grpc errors.

## ClearFailedError

```ts
class ClearFailedError extends TokenCacheError
```

Failed to delete the token from storage.

## NotInCacheError

```ts
class NotInCacheError extends TokenCacheError
```

Failed to read the token from cache.

## WriteFailedError

```ts
class WriteFailedError extends TokenCacheError
```

Failed to write the token to storage.

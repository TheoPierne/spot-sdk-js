# bosdyn-client/url_validation_util

Validates the URLs of API calls (their host must be an IP address or resolve to one), and makes the calls while
checking their redirects.

```js
const { Response, safeApiCall, validateUrl, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`Response`](#response) | Class | The response of a request, like a requests.Response: statusCode, reason, headers, the body, elapsed (seconds). |
| [`safeApiCall`](#safeapicall) | Function | Make an API call to a URL, validating the URL and checking for redirects, like safe_api_call() in Python. |
| [`validateUrl`](#validateurl) | Function | Checks that the host of a URL is an IP address, or resolves to one, like validate_url() in Python. |
| [`MAX_REDIRECTS`](#constants) | Constant |  |
| [`InterfaceNameNotFound`](#interfacenamenotfound) | Class | Raised when a specified network interface is not present on the system. |
| [`RequestError`](#requesterror) | Class | The error of a request (a requests.exceptions.RequestException in Python), with the kind of the error. |

## InterfaceNameNotFound

```ts
class InterfaceNameNotFound extends Error
```

Raised when a specified network interface is not present on the system.

### new InterfaceNameNotFound

```ts
constructor(name: any)
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `any` |  |

## RequestError

```ts
class RequestError extends Error
```

The error of a request (a requests.exceptions.RequestException in Python), with the kind of the error.

### new RequestError

```ts
constructor(kind: string, message: string)
```

| Parameter | Type | Description |
|---|---|---|
| `kind` | `string` | The name of the exception of requests: SSLError, ConnectTimeout, ReadTimeout, InvalidSchema... |
| `message` | `string` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `kind` | `string` |  |

## Response

```ts
class Response
```

The response of a request, like a requests.Response: statusCode, reason, headers, the body, elapsed (seconds).

### new Response

```ts
constructor(statusCode: any, reason: any, headers: any, body: any, elapsed: any, url: any)
```

| Parameter | Type | Description |
|---|---|---|
| `statusCode` | `any` |  |
| `reason` | `any` |  |
| `headers` | `any` |  |
| `body` | `any` |  |
| `elapsed` | `any` |  |
| `url` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `statusCode` | `any` |  |
| `reason` | `any` |  |
| `headers` | `any` |  |
| `content` | `Buffer` |  |
| `elapsed` | `any` |  |
| `url` | `any` |  |
| `text` | `string` | Read-only. |

### json

```ts
json(): any
```

**Returns** `any`

## safeApiCall

```ts
export function safeApiCall(method: string, url: string, sniHostname: string | null, timeout: number, isRobot?: boolean, interfaceName?: string | null, requestData?: Object): Promise<[Response | null, string]>
```

Make an API call to a URL, validating the URL and checking for redirects, like safe_api_call() in Python.

Differences with Python: the interface is bound by its address (Python binds it with SO_BINDTODEVICE, on Linux), a
relative redirection is resolved from the URL, and isRobot does not fail (Python reads an unset attribute: an
AttributeError for every call).

| Parameter | Type | Description |
|---|---|---|
| `method` | `string` | method for HTTP request to use |
| `url` | `string` | URL to make the request to |
| `sniHostname` | `string \| null` | Hostname to assert for the request (TLS and Host header), if the host name of the server is not resolvable. |
| `timeout` | `number` | Timeout for the request, in seconds. |
| `isRobot` | `boolean` | The interface is only bound when not on the robot, like Python. (*Optional*, default `true`) |
| `interfaceName` | `string \| null` | Network interface to bind the HTTP calls to. (*Optional*, default `null`) |
| `requestData` | `Object` | The options of requests: headers, json, data, params, auth ([user, password]), verify (false, or the path of a CA bundle), cert (the path of a PEM with the certificate and its key, or [cert, key]). (*Optional*, default `{}`) |

**Returns** `Promise<[Response \| null, string]>`: The response (or null), and a status message.

## validateUrl

```ts
export function validateUrl(url: string): Promise<[boolean, {
    parsedUrl: URL;
    resolvedIp: string;
} | string]>
```

Checks that the host of a URL is an IP address, or resolves to one, like validate_url() in Python.

| Parameter | Type | Description |
|---|---|---|
| `url` | `string` | The URL to check. |

**Returns** `Promise<[boolean, { parsedUrl: URL; resolvedIp: string; } \| string]>`: Whether the URL is valid: then the parsed URL and the IP address, else the error.

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `MAX_REDIRECTS` | `3` |  |

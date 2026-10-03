# bosdyn-client/access_controlled_door_util

Helpers to open and close access controlled doors: the API calls of the access control system of a door,
described by a JSON configuration.

```js
const { fileToJson, doorAction, getValueByPath, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`fileToJson`](#filetojson) | Function | Helper to read and parse JSON files. |
| [`doorAction`](#dooraction) | Function | Executes a sequence of API calls required to perform an action (e.g., open or close) on a specified door, handling data substitutions and certificate verification as needed. |
| [`getValueByPath`](#getvaluebypath) | Function | The value at a dotted path of a JSON object, or undefined. |
| [`makeAccessControlSystemApiCall`](#makeaccesscontrolsystemapicall) | Function | Makes an HTTP request and optionally extracts specific fields from the JSON response. |
| [`safeSubstitute`](#safesubstitute) | Function | Replaces the $variable and ${variable} of a template, like string.Template(template).safe_substitute(vars) in Python: $$ is a $, and the unknown or invalid placeholders are kept (only ${variable} was replaced). |
| [`API_TIMEOUT_DEFAULT`](#constants) | Constant |  |

## fileToJson

```ts
export function fileToJson(filePath: string): object
```

Helper to read and parse JSON files.

| Parameter | Type | Description |
|---|---|---|
| `filePath` | `string` |  |

**Returns** `object`

## doorAction

```ts
export function doorAction(apiCalls: {
    method: string;
    url: string;
    action: string;
    sni_hostname: string;
    route: string;
    request_data: Object;
    responses: Object;
}[], doorId: string, action: string[], pathToCrt?: string | null, isRobot?: boolean): Promise<{
    action?: string;
    apiError?: any;
    extraMessage?: string;
}>
```

Executes a sequence of API calls required to perform an action (e.g., open or close) on a specified door,
handling data substitutions and certificate verification as needed.

| Parameter | Type | Description |
|---|---|---|
| `apiCalls` | `{ method: string; url: string; action: string; sni_hostname: string; route: string; request_data: Object; responses: Object; }[]` | Array of API call specifications, where each object contains information such as 'method', 'url', 'action', 'sni_hostname', 'route', 'request_data', and 'responses'. |
| `doorId` | `string` | Identifier of the door to perform the action on. |
| `action` | `string[]` | The action(s) to perform (e.g., "open", "close"). Only calls matching the specified action(s) will be executed. |
| `pathToCrt` | `string \| null` | Path to a certificate file for SSL verification. If null, no certificate is used. (*Optional*, default `null`) |
| `isRobot` | `boolean` | Indicates if the API calls are being made on behalf of a robot. Defaults to true. (*Optional*, default `true`) |

**Returns** `Promise<{ action?: string; apiError?: any; extraMessage?: string; }>`: The details of the error of the calls, empty if all the calls succeeded.

## getValueByPath

```ts
export function getValueByPath(obj: Object, path: string): any
```

The value at a dotted path of a JSON object, or undefined.

| Parameter | Type | Description |
|---|---|---|
| `obj` | `Object` |  |
| `path` | `string` | e.g. 'data.token'. |

**Returns** `any`

## makeAccessControlSystemApiCall

```ts
export function makeAccessControlSystemApiCall(method: string, url: string, requestData: Object, storeResponses?: Record<string, string> | null, sniHostname?: string | null, isRobot?: boolean, route?: string | null): Promise<[Record<string, any> | null, string | {
    statusCode: number | null;
    reason: string;
    elapsed: number | null;
} | null]>
```

Makes an HTTP request and optionally extracts specific fields from the JSON response.

| Parameter | Type | Description |
|---|---|---|
| `method` | `string` | HTTP method to use (e.g., 'GET', 'POST') |
| `url` | `string` | The endpoint URL for the API call |
| `requestData` | `Object` | Request configuration including headers, body, etc. (see safeApiCall()). |
| `storeResponses` | `Record<string, string> \| null` | Dictionary mapping response field names to JSON paths. For example: { token: "auth.token",  # Store response's auth.token as "token" session_id: "data.session"  # Store response's data.session as "session_id" } If undefined or null, no data will be extracted from the response. (*Optional*, default `null`) |
| `sniHostname` | `string \| null` | If specified, this parameter provides the hostname declared by and expected by the access control server during TLS negotiation. This should only be required if the server's hostname is not resolvable via DNS. (*Optional*, default `null`) |
| `isRobot` | `boolean` | Indicates if the API calls are being made on behalf of a robot. Defaults to true. (*Optional*, default `true`) |
| `route` | `string \| null` | Route type to use ("WIFI", "LTE"). If null, default interface (WIFI) will be used. (*Optional*, default `null`) |

**Returns** `Promise<[Record<string, any> \| null, string \| { statusCode: number \| null; reason: string; elapsed: number \| null; } \| null]>`: The stored fields (the ones found: Python stores false for the others), and the error: the status of the call if it failed, or the status of a response which is not 200.

```js
```js
const storeResponses = { auth_token: "data.token" };
const [data, error] = await makeAccessControlSystemApiCall(
  "POST", "https://api.door/auth", { json: { key: "value" } }, storeResponses);
if (data) {
 const token = data["auth_token"];
}
```
```

## safeSubstitute

```ts
export function safeSubstitute(template: string, vars: {
    [x: string]: any;
}): string
```

Replaces the $variable and ${variable} of a template, like string.Template(template).safe_substitute(vars) in
Python: $$ is a $, and the unknown or invalid placeholders are kept (only ${variable} was replaced).

| Parameter | Type | Description |
|---|---|---|
| `template` | `string` |  |
| `vars` | `{ [x: string]: any; }` |  |

**Returns** `string`

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `API_TIMEOUT_DEFAULT` | `30` |  |

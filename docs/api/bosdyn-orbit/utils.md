# bosdyn-orbit/utils

Utility functions for the Orbit client.

```js
const { addBaseArguments, dataCaptureUrlFromRunCaptureResources, dataCaptureUrlsFromRunEvents, ... } = require('spot-sdk-js').orbit;
```

| Export | Kind | Description |
|---|---|---|
| [`addBaseArguments`](#addbasearguments) | Function | Adds the most common arguments to the parser, like Python: the hostname, verify, and cert arguments. |
| [`dataCaptureUrlFromRunCaptureResources`](#datacaptureurlfromruncaptureresources) | Function | Given run capture resources and list of desired channel names, returns the list of data capture urls. |
| [`dataCaptureUrlsFromRunEvents`](#datacaptureurlsfromrunevents) | Function | Given run events and list of desired channel names, returns the list of data capture urls. |
| [`datetimeFromIsostring`](#datetimefromisostring) | Function | Returns the Date of the iso string representation of time, or null for a string without a timezone. |
| [`getActionNamesFromRunEvents`](#getactionnamesfromrunevents) | Function | Given run events, returns a list of action names. |
| [`getApiToken`](#getapitoken) | Function | Obtains an API token from an environment variable |
| [`getLatestCreatedAtForRunCaptures`](#getlatestcreatedatforruncaptures) | Function | Given an object of query params, returns the max created at time for run captures. |
| [`getLatestCreatedAtForRunEvents`](#getlatestcreatedatforrunevents) | Function | Given an object of query params, returns the max created at time for run events |
| [`getLatestEndTimeForRuns`](#getlatestendtimeforruns) | Function | Given an object of query params, returns the max end time for runs. |
| [`getLatestRunCaptureResources`](#getlatestruncaptureresources) | Function | Given an object of query params, returns the latest run capture resources. |
| [`getLatestRunInProgress`](#getlatestruninprogress) | Function | Given an object of query params, returns the latest run in progress. |
| [`getLatestRunResource`](#getlatestrunresource) | Function | Given an object of query params, returns the latest run resource. |
| [`printJsonResponse`](#printjsonresponse) | Function | A helper function to print the json response. |
| [`validateWebhookPayload`](#validatewebhookpayload) | Function | Verifies that the webhook payload came from the Orbit instance, like validate_webhook_payload in Python (it was missing: WebhookSignatureVerificationError was never thrown). |
| [`writeImage`](#writeimage) | Function | Given a raw image and a desired output file, writes the image to the file. |
| [`API_TOKEN_ENV_VAR`](#constants) | Constant |  |
| [`DEFAULT_MAX_MESSAGE_AGE_MS`](#constants) | Constant |  |

## addBaseArguments

```ts
export function addBaseArguments(parser: import("argparse").ArgumentParser): void
```

Adds the most common arguments to the parser, like Python: the hostname, verify, and cert arguments.

| Parameter | Type | Description |
|---|---|---|
| `parser` | `import("argparse").ArgumentParser` | the argument parser |

## dataCaptureUrlFromRunCaptureResources

```ts
export function dataCaptureUrlFromRunCaptureResources(client: OrbitClient, runCaptureResources: Object[], listOfChannelNames?: string[] | null): string[]
```

Given run capture resources and list of desired channel names, returns the list of data capture urls.

| Parameter | Type | Description |
|---|---|---|
| `client` | `OrbitClient` | the client for the web API |
| `runCaptureResources` | `Object[]` | resources obtained from a RESTful endpoint |
| `listOfChannelNames` | `string[] \| null` | the channel names of the desired data captures, null for all of them (*Optional*, default `null`) |

**Returns** `string[]`

## dataCaptureUrlsFromRunEvents

```ts
export function dataCaptureUrlsFromRunEvents(client: OrbitClient, runEvents: Object, listOfChannelNames?: string[] | null): string[]
```

Given run events and list of desired channel names, returns the list of data capture urls.

| Parameter | Type | Description |
|---|---|---|
| `client` | `OrbitClient` | the client for the web API |
| `runEvents` | `Object` | run events obtained from a RESTful endpoint |
| `listOfChannelNames` | `string[] \| null` | the channel names of the desired data captures, null for all of them (*Optional*, default `null`) |

**Returns** `string[]`

## datetimeFromIsostring

```ts
export function datetimeFromIsostring(datetimeIsostring: string): Date | null
```

Returns the Date of the iso string representation of time, or null for a string without a timezone.

| Parameter | Type | Description |
|---|---|---|
| `datetimeIsostring` | `string` | The iso string representation of time. |

**Returns** `Date \| null`

## getActionNamesFromRunEvents

```ts
export function getActionNamesFromRunEvents(runEvents: Object): string[]
```

Given run events, returns a list of action names.

| Parameter | Type | Description |
|---|---|---|
| `runEvents` | `Object` | run events obtained from a RESTful endpoint |

**Returns** `string[]`

## getApiToken

```ts
export function getApiToken(): Promise<string | null>
```

Obtains an API token from an environment variable

**Returns** `Promise<string \| null>`

## getLatestCreatedAtForRunCaptures

```ts
export function getLatestCreatedAtForRunCaptures(client: OrbitClient, params?: Object): Promise<Date>
```

Given an object of query params, returns the max created at time for run captures.

| Parameter | Type | Description |
|---|---|---|
| `client` | `OrbitClient` | the client for the web API |
| `params` | `Object` | the query params associated with the get request (*Optional*) |

**Returns** `Promise<Date>`

## getLatestCreatedAtForRunEvents

```ts
export function getLatestCreatedAtForRunEvents(client: OrbitClient, params?: Object): Promise<Date>
```

Given an object of query params, returns the max created at time for run events

| Parameter | Type | Description |
|---|---|---|
| `client` | `OrbitClient` | the client for the web API |
| `params` | `Object` | the query params associated with the get request (*Optional*) |

**Returns** `Promise<Date>`

## getLatestEndTimeForRuns

```ts
export function getLatestEndTimeForRuns(client: OrbitClient, params?: Object): Promise<Date>
```

Given an object of query params, returns the max end time for runs.

| Parameter | Type | Description |
|---|---|---|
| `client` | `OrbitClient` | the client for the web API |
| `params` | `Object` | the query params associated with the get request (*Optional*) |

**Returns** `Promise<Date>`

## getLatestRunCaptureResources

```ts
export function getLatestRunCaptureResources(client: OrbitClient, params?: Object): Promise<Object[]>
```

Given an object of query params, returns the latest run capture resources.

| Parameter | Type | Description |
|---|---|---|
| `client` | `OrbitClient` | the client for the web API |
| `params` | `Object` | the query params associated with the get request (*Optional*) |

**Returns** `Promise<Object[]>`

## getLatestRunInProgress

```ts
export function getLatestRunInProgress(client: OrbitClient, params?: Object): Promise<Object | null>
```

Given an object of query params, returns the latest run in progress.

| Parameter | Type | Description |
|---|---|---|
| `client` | `OrbitClient` | the client for the web API |
| `params` | `Object` | the query params associated with the get request (*Optional*) |

**Returns** `Promise<Object \| null>`

## getLatestRunResource

```ts
export function getLatestRunResource(client: OrbitClient, params?: Object): Promise<Object | null>
```

Given an object of query params, returns the latest run resource.

| Parameter | Type | Description |
|---|---|---|
| `client` | `OrbitClient` | the client for the web API |
| `params` | `Object` | the query params associated with the get request (*Optional*) |

**Returns** `Promise<Object \| null>`

## printJsonResponse

```ts
export function printJsonResponse(response: import("axios").AxiosResponse): boolean
```

A helper function to print the json response.

| Parameter | Type | Description |
|---|---|---|
| `response` | `import("axios").AxiosResponse` |  |

**Returns** `boolean`: Whether the response is ok and in JSON.

## validateWebhookPayload

```ts
export function validateWebhookPayload(payload: Object | string, signatureHeader: string, secret: string, maxAgeMs?: number): void
```

Verifies that the webhook payload came from the Orbit instance, like validate_webhook_payload in Python (it was
missing: WebhookSignatureVerificationError was never thrown).

| Parameter | Type | Description |
|---|---|---|
| `payload` | `Object \| string` | The JSON body of the webhook request: the parsed object, serialized like Python, or the raw body. |
| `signatureHeader` | `string` | The value of the signature header. |
| `secret` | `string` | The configured secret value for this webhook, in hexadecimal. |
| `maxAgeMs` | `number` | The maximum age of the message before it's considered invalid (default is 5 minutes). (*Optional*, default `DEFAULT_MAX_MESSAGE_AGE_MS`) |

**Throws**

- `WebhookSignatureVerificationError` The webhook signature is invalid.

## writeImage

```ts
export function writeImage(imgRaw: import("node:stream").Readable, imageFp: string): Promise<void>
```

Given a raw image and a desired output file, writes the image to the file.

| Parameter | Type | Description |
|---|---|---|
| `imgRaw` | `import("node:stream").Readable` | The raw image, e.g. from client.getImage(). |
| `imageFp` | `string` | The output filepath for the image. |

**Returns** `Promise<void>`

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `API_TOKEN_ENV_VAR` | `'BOSDYN_ORBIT_CLIENT_API_TOKEN'` |  |
| `DEFAULT_MAX_MESSAGE_AGE_MS` | `300000` |  |

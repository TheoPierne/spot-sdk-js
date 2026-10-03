# bosdyn-client/data_acquisition_plugin_service

Helpers for implementing a data acquisition plugin service.

The DataAcquisitionPluginService class is the recommended way to create a plugin service for data acquisition: add it
to a grpc-js server with server.addService(DataAcquisitionPluginServiceService, service). It calls a data collection
function, dataCollectFn(request, storeHelper), which collects the data of the plugin and stores it with the store
helper (DataAcquisitionStoreHelper). The service then waits for the stores to complete, and updates the status and
errors of the request.

If errors occur during the data collection and saving, use state.addErrors to report which intended DataIdentifiers
had problems: state.addErrors([makeError(dataId, 'Failure to collect data 1')]).

Long-running acquisitions should call state.cancelCheck() occasionally, to exit early and cleanly if the acquisition
has been cancelled by the user or a timeout: it throws a RequestCancelledError. The data collection function should
update the status to STATUS_SAVING when it transitions to storing the data.

```js
const { RequestState, DataAcquisitionStoreHelper, DataAcquisitionPluginService, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`RequestState`](#requeststate) | Class | Interface for a data collection to update its state as it proceeds. |
| [`DataAcquisitionStoreHelper`](#dataacquisitionstorehelper) | Class | This class simplifies the management of data acquisition stores for a single request. |
| [`DataAcquisitionPluginService`](#dataacquisitionpluginservice) | Class | Implementation of a data acquisition plugin. |
| [`RequestManager`](#requestmanager) | Class | Manage request lifecycles and status. |
| [`makeError`](#makeerror) | Function | Helper to simplify creating a DataError to send to RequestState.addErrors. |
| [`kDefaultRequestExpiration`](#constants) | Constant | How long should completed requests be queryable, in seconds (it was 30000). |
| [`RequestCancelledError`](#requestcancellederror) | Class | The request has been cancelled and should no longer be handled. |

## RequestCancelledError

```ts
class RequestCancelledError extends Error
```

The request has been cancelled and should no longer be handled.

### new RequestCancelledError

```ts
constructor(message?: string)
```

| Parameter | Type | Description |
|---|---|---|
| `message` | `string` | (*Optional*) |

## RequestState

```ts
class RequestState
```

Interface for a data collection to update its state as it proceeds.

Each AcquirePluginData RPC made to the plugin service creates an instance of RequestState to manage the incoming
acquisition request's overall state, including if it has been cancelled, any errors that occur, and the current
status of the request.

### Properties

| Property | Type | Description |
|---|---|---|
| `kNonError` | `number[]` | Statuses for the GetStatus RPC which indicate the data acquisition and saving is still in progress and has not completed or failed. Static. |

### setStatus

```ts
setStatus(status: dataAcquisitionPb.GetStatusResponse.Status): void
```

Update the status of the request.

| Parameter | Type | Description |
|---|---|---|
| `status` | `dataAcquisitionPb.GetStatusResponse.Status` | An updated status enum to be set in the stored GetStatusResponse. |

**Returns** `void`

**Throws**

- `RequestCancelledError` 

### setCompleteIfNoError

```ts
setCompleteIfNoError(logger?: Logger | null): boolean
```

Mark that everything is complete.

| Parameter | Type | Description |
|---|---|---|
| `logger` | `Logger \| null` | Logs the status if there was an error. (*Optional*, default `null`) |

**Returns** `boolean`: False if there was an error.

**Throws**

- `RequestCancelledError` 

### addSaved

```ts
addSaved(dataIds: dataAcquisitionPb.DataIdentifier[]): void
```

Record that some data was saved successfully.

| Parameter | Type | Description |
|---|---|---|
| `dataIds` | `dataAcquisitionPb.DataIdentifier[]` | Data IDs that have been successfully saved. |

**Returns** `void`

**Throws**

- `RequestCancelledError` 

### addErrors

```ts
addErrors(dataErrors: dataAcquisitionPb.DataError[]): void
```

Report that some errors have occurred during the data capture. Use the makeError function to simplify creating
data errors.

| Parameter | Type | Description |
|---|---|---|
| `dataErrors` | `dataAcquisitionPb.DataError[]` | Data errors to include as errors in the status. |

**Returns** `void`

**Throws**

- `RequestCancelledError` 

### hasDataErrors

```ts
hasDataErrors(): boolean
```

Return true if any data errors have been added to this status.

**Returns** `boolean`: True if any data errors have been added to this status.

**Throws**

- `RequestCancelledError` 

### cancelCheck

```ts
cancelCheck(): void
```

Throws RequestCancelledError if the request has already been cancelled.

**Returns** `void`

**Throws**

- `RequestCancelledError` The request has already been cancelled.

### isCancelled

```ts
isCancelled(): boolean
```

Query if the request is already cancelled.

**Returns** `boolean`: If the request is already cancelled.

## DataAcquisitionStoreHelper

```ts
class DataAcquisitionStoreHelper
```

This class simplifies the management of data acquisition stores for a single request. The request state is updated
according to store progress.

### new DataAcquisitionStoreHelper

```ts
constructor(storeClient: DataAcquisitionStoreClient, state: RequestState, cancelInterval?: number)
```

| Parameter | Type | Description |
|---|---|---|
| `storeClient` | `DataAcquisitionStoreClient` | A data acquisition store client. |
| `state` | `RequestState` | State of the request, to be modified with errors or completion. |
| `cancelInterval` | `number` | How often to check for cancellation of the request while waiting for the stores to complete, in milliseconds. (*Optional*, default `1000`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `storeClient` | `DataAcquisitionStoreClient` |  |
| `state` | `RequestState` |  |
| `cancelInterval` | `number` |  |
| `dataIdPromisePairs` | `Array<[dataAcquisitionPb.DataIdentifier, Promise<Error \| null>]>` | The data identifiers, and the results of their stores: null, or the error of the store. |

### storeMetadata

```ts
storeMetadata(metadata: dataAcquisitionPb.AssociatedMetadata, dataId: dataAcquisitionPb.DataIdentifier): void
```

Store metadata with the data acquisition store service.

| Parameter | Type | Description |
|---|---|---|
| `metadata` | `dataAcquisitionPb.AssociatedMetadata` | Metadata message to store. |
| `dataId` | `dataAcquisitionPb.DataIdentifier` | Data identifier to use for storing this data. |

**Returns** `void`

### storeImage

```ts
storeImage(imageCapture: import("spot-sdk-js/src/bosdyn/api/image_pb").ImageCapture, dataId: dataAcquisitionPb.DataIdentifier): void
```

Store an image with the data acquisition store service.

| Parameter | Type | Description |
|---|---|---|
| `imageCapture` | `import("spot-sdk-js/src/bosdyn/api/image_pb").ImageCapture` | Image to store. |
| `dataId` | `dataAcquisitionPb.DataIdentifier` | Data identifier to use for storing this data. |

**Returns** `void`

### storeData

```ts
storeData(message: Uint8Array, dataId: dataAcquisitionPb.DataIdentifier, fileExtension?: string | null): void
```

Store a data message with the data acquisition store service.

| Parameter | Type | Description |
|---|---|---|
| `message` | `Uint8Array` | Data to store. |
| `dataId` | `dataAcquisitionPb.DataIdentifier` | Data identifier to use for storing this data. |
| `fileExtension` | `string \| null` | File extension to use for writing the data to a file. (*Optional*, default `null`) |

**Returns** `void`

### storeDataAsChunks

```ts
storeDataAsChunks(message: Uint8Array, dataId: dataAcquisitionPb.DataIdentifier, fileExtension?: string | null, args?: Object): void
```

Store a data message by streaming with the data acquisition store service.

| Parameter | Type | Description |
|---|---|---|
| `message` | `Uint8Array` | Data to store. |
| `dataId` | `dataAcquisitionPb.DataIdentifier` | Data identifier to use for storing this data. |
| `fileExtension` | `string \| null` | File extension to use for writing the data to a file. (*Optional*, default `null`) |
| `args` | `Object` | Extra arguments for controlling RPC details (e.g. timeout), like Python 5.2.0. (*Optional*) |

**Returns** `void`

### storeFile

```ts
storeFile(filePath: string, dataId: dataAcquisitionPb.DataIdentifier, fileExtension?: string | null, args?: Object): void
```

Store a file with the data acquisition store service.

| Parameter | Type | Description |
|---|---|---|
| `filePath` | `string` | Path to the file to store. |
| `dataId` | `dataAcquisitionPb.DataIdentifier` | Data identifier to use for storing this file. |
| `fileExtension` | `string \| null` | File extension to use for writing the data to the file. (*Optional*, default `null`) |
| `args` | `Object` | Extra arguments for controlling RPC details (e.g. timeout), like Python 5.2.0. (*Optional*) |

**Returns** `void`

### cancelCheck

```ts
cancelCheck(): void
```

Throws RequestCancelledError if the request has already been cancelled.

**Returns** `void`

**Throws**

- `RequestCancelledError` The request has already been cancelled.

### waitForStoresComplete

```ts
waitForStoresComplete(): Promise<boolean>
```

Wait for all stores to complete, then update the state with the store successes and failures.

**Returns** `Promise<boolean>`: False if there are data errors.

**Throws**

- `RequestCancelledError` The data acquisition request was cancelled.

## DataAcquisitionPluginService

```ts
class DataAcquisitionPluginService
```

Implementation of a data acquisition plugin. It relies on the provided dataCollectFn to implement the heart of the
data collection and storage. Add it to a grpc-js server with
server.addService(DataAcquisitionPluginServiceService, service).

Its initialization is asynchronous: the RPCs wait for it, and `await service.ready` waits for it and reports its
errors.

### new DataAcquisitionPluginService

```ts
constructor(robot: import("./robot").Robot, capabilities: dataAcquisitionPb.DataAcquisitionCapability[], dataCollectFn: (arg0: dataAcquisitionPb.AcquirePluginDataRequest, arg1: DataAcquisitionStoreHelper) => (void | Promise<void>), acquireResponseFn?: ((arg0: dataAcquisitionPb.AcquirePluginDataRequest, arg1: dataAcquisitionPb.AcquirePluginDataResponse) => (boolean | Promise<boolean>)) | null, executor?: any, logger?: Logger | null, liveResponseFn?: ((arg0: dataAcquisitionPb.LiveDataRequest) => (dataAcquisitionPb.LiveDataResponse | Promise<dataAcquisitionPb.LiveDataResponse>)) | null)
```

| Parameter | Type | Description |
|---|---|---|
| `robot` | `import("./robot").Robot` | Authenticated robot object. |
| `capabilities` | `dataAcquisitionPb.DataAcquisitionCapability[]` | What this plugin can do. |
| `dataCollectFn` | `(arg0: dataAcquisitionPb.AcquirePluginDataRequest, arg1: DataAcquisitionStoreHelper) => (void \| Promise<void>)` | Function that performs the data collection and storage. |
| `acquireResponseFn` | `((arg0: dataAcquisitionPb.AcquirePluginDataRequest, arg1: dataAcquisitionPb.AcquirePluginDataResponse) => (boolean \| Promise<boolean>)) \| null` | Optional function that can validate a request and provide a timeout deadline. If it returns false, the response is returned immediately without calling the data collection function or saving any data. (*Optional*, default `null`) |
| `executor` | `any` | Unused: Python's thread pool. The data collections run concurrently. (*Optional*, default `null`) |
| `logger` | `Logger \| null` | Logger used by the service. (*Optional*, default `null`) |
| `liveResponseFn` | `((arg0: dataAcquisitionPb.LiveDataRequest) => (dataAcquisitionPb.LiveDataResponse \| Promise<dataAcquisitionPb.LiveDataResponse>)) \| null` | Optional function that sends signals data to the robot for purposes of displaying it on the tablet and Orbit during teleoperation. (*Optional*, default `null`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `serviceType` | `string` | Static. Value: `'bosdyn.api.DataAcquisitionPluginService'`. |
| `logger` | `import("./logger_util").Logger` |  |
| `capabilities` | `dataAcquisitionPb.DataAcquisitionCapability[]` |  |
| `valueValidators` | `Map<string, (arg0: serviceCustomizationPb.DictParam) => serviceCustomizationPb.CustomParamError \| null>` | The validators of the custom parameters, by capture name. |
| `dataCollectFn` | `(arg0: dataAcquisitionPb.AcquirePluginDataRequest, arg1: DataAcquisitionStoreHelper) => (void \| Promise<void>)` |  |
| `acquireResponseFn` | `((arg0: dataAcquisitionPb.AcquirePluginDataRequest, arg1: dataAcquisitionPb.AcquirePluginDataResponse) => (boolean \| Promise<boolean>)) \| null` |  |
| `liveResponseFn` | `((arg0: dataAcquisitionPb.LiveDataRequest) => (dataAcquisitionPb.LiveDataResponse \| Promise<dataAcquisitionPb.LiveDataResponse>)) \| null` |  |
| `requestManager` | `RequestManager` |  |
| `executor` | `any` |  |
| `robot` | `import("./robot").Robot` |  |
| `storeClient` | `any` |  |
| `dataBufferClient` | `any` |  |
| `ready` | `Promise<void>` | Resolves once the service is initialized. |

### validateParams

```ts
validateParams(request: dataAcquisitionPb.AcquirePluginDataRequest, response: dataAcquisitionPb.AcquirePluginDataResponse): boolean
```

Validate that any parameters set in the request are valid according the spec.

| Parameter | Type | Description |
|---|---|---|
| `request` | `dataAcquisitionPb.AcquirePluginDataRequest` |  |
| `response` | `dataAcquisitionPb.AcquirePluginDataResponse` | Gets the status, if invalid. |

**Returns** `boolean`

### acquirePluginData

```ts
acquirePluginData(call: any, callback: Function): Promise<void>
```

AcquirePluginData RPC: trigger a data acquisition and store results in the data acquisition store service.

| Parameter | Type | Description |
|---|---|---|
| `call` | `any` | The call, with the AcquirePluginDataRequest. |
| `callback` | `Function` | Receives the AcquirePluginDataResponse, with a request_id to use with GetStatus. |

**Returns** `Promise<void>`

### getStatus

```ts
getStatus(call: any, callback: Function): Promise<void>
```

GetStatus RPC: query the status of a data acquisition by ID.

| Parameter | Type | Description |
|---|---|---|
| `call` | `any` | The call, with the GetStatusRequest. |
| `callback` | `Function` | Receives the GetStatusResponse. |

**Returns** `Promise<void>`

### getServiceInfo

```ts
getServiceInfo(call: any, callback: Function): Promise<void>
```

GetServiceInfo RPC: the list of data acquisition capabilities.

| Parameter | Type | Description |
|---|---|---|
| `call` | `any` | The call, with the GetServiceInfoRequest. |
| `callback` | `Function` | Receives the GetServiceInfoResponse. |

**Returns** `Promise<void>`

### cancelAcquisition

```ts
cancelAcquisition(call: any, callback: Function): Promise<void>
```

CancelAcquisition RPC: cancel a data acquisition by ID.

| Parameter | Type | Description |
|---|---|---|
| `call` | `any` | The call, with the CancelAcquisitionRequest. |
| `callback` | `Function` | Receives the CancelAcquisitionResponse. |

**Returns** `Promise<void>`

### getLiveData

```ts
getLiveData(call: any, callback: Function): Promise<void>
```

GetLiveData RPC: the live data available from this plugin.

| Parameter | Type | Description |
|---|---|---|
| `call` | `any` | The call, with the LiveDataRequest. |
| `callback` | `Function` | Receives the LiveDataResponse, result of liveResponseFn. |

**Returns** `Promise<void>`

## RequestManager

```ts
class RequestManager
```

Manage request lifecycles and status.

The RequestManager manages some internals of the RequestState class, so it accesses its protected variables.

### addRequest

```ts
addRequest(): [number, RequestState]
```

Create a new request to manage.

**Returns** `[number, RequestState]`: The request id and its state.

### getRequestState

```ts
getRequestState(requestId: number): RequestState | null
```

Get the RequestState object for managing a request.

| Parameter | Type | Description |
|---|---|---|
| `requestId` | `number` | The request_id for the acquisition request being inspected. |

**Returns** `RequestState \| null`: null if there is no such request.

### getStatusProto

```ts
getStatusProto(requestId: number): dataAcquisitionPb.GetStatusResponse | null
```

Get a copy of the current status for the specified request.

| Parameter | Type | Description |
|---|---|---|
| `requestId` | `number` | The request_id for the acquisition request being inspected. |

**Returns** `dataAcquisitionPb.GetStatusResponse \| null`: null if there is no such request.

### markRequestCancelled

```ts
markRequestCancelled(requestId: number): boolean
```

Mark a request as cancelled, and no longer able to be updated.

| Parameter | Type | Description |
|---|---|---|
| `requestId` | `number` | The request_id for the acquisition request being cancelled. |

**Returns** `boolean`: False if there is no such request.

### markRequestFinished

```ts
markRequestFinished(requestId: number): void
```

Mark a request as finished, and able to be removed later.

| Parameter | Type | Description |
|---|---|---|
| `requestId` | `number` | The request_id for the acquisition request being completed. |

**Returns** `void`

### cleanupRequests

```ts
cleanupRequests(olderThanTime?: number | null): void
```

Remove all requests that were completed farther in the past than olderThanTime.

| Parameter | Type | Description |
|---|---|---|
| `olderThanTime` | `number \| null` | Time (in seconds) that requests will be removed after. Defaults to removing anything completed more than kDefaultRequestExpiration seconds ago. (*Optional*, default `null`) |

**Returns** `void`

## makeError

```ts
export function makeError(dataId: dataAcquisitionPb.DataIdentifier, errorMsg: string, errorData?: import("google-protobuf").Message | null): dataAcquisitionPb.DataError
```

Helper to simplify creating a DataError to send to RequestState.addErrors.

| Parameter | Type | Description |
|---|---|---|
| `dataId` | `dataAcquisitionPb.DataIdentifier` | The proto for the data identifier which has an error. |
| `errorMsg` | `string` | The error message to associate with the data id. |
| `errorData` | `import("google-protobuf").Message \| null` | Additional data to be packed with the error. (*Optional*, default `null`) |

**Returns** `dataAcquisitionPb.DataError`

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `kDefaultRequestExpiration` | `30` | How long should completed requests be queryable, in seconds (it was 30000). |

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `dataAcquisitionPb` | `spot-sdk-js/src/bosdyn/api/data_acquisition_pb` |
| `serviceCustomizationPb` | `spot-sdk-js/src/bosdyn/api/service_customization_pb` |

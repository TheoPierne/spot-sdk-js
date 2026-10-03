# bosdyn-client/data_acquisition

General client implementation for the main, on-robot data-acquisition service.

```js
const { DataAcquisitionClient, metadataToProto, acquireDataError, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { RequestIdDoesNotExistError } = require('spot-sdk-js/src/bosdyn-client/data_acquisition');
```

| Export | Kind | Description |
|---|---|---|
| [`DataAcquisitionClient`](#dataacquisitionclient) | Class | A client for triggering data acquisition and logging. |
| [`metadataToProto`](#metadatatoproto) | Function | The Metadata proto of metadata given as a proto or as an object. |
| [`acquireDataError`](#constants) | Constant |  |
| [`DataAcquisitionResponseError`](#dataacquisitionresponseerror) | Class | Error in Data Acquisition RPC |
| [`RequestIdDoesNotExistError`](#requestiddoesnotexisterror) | Class | The provided request id does not exist or is invalid. |
| [`UnknownCaptureTypeError`](#unknowncapturetypeerror) | Class | The provided request contains unknown capture requests. |
| [`CancellationFailedError`](#cancellationfailederror) | Class | The data acquisition request was unable to be cancelled. |

## DataAcquisitionClient

```ts
class DataAcquisitionClient extends BaseClient<DataAcquisitionServiceClient>
```

A client for triggering data acquisition and logging.

### new DataAcquisitionClient

```ts
constructor(name?: string | null)
```

Create an instance of AuthClient's class.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string \| null` | BaseClient name. (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'data-acquisition'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.DataAcquisitionService'`. |

### updateFrom

```ts
updateFrom(other: Robot): Promise<void>
```

Update instance from another object.

| Parameter | Type | Description |
|---|---|---|
| `other` | `Robot` | The object where to copy from. |

**Returns** `Promise<void>`

### makeAcquireDataRequest

```ts
makeAcquireDataRequest(acquisitionRequests: dataAcquisitionPb.AcquisitionRequestList, actionName: string, groupName: string, dataTimestamp?: Timestamp | null, metadata?: (Metadata | object) | null, minTimeout?: number | null): dataAcquisitionPb.AcquireDataRequest
```

Make an AcquireDataRequest message, with the data timestamp in robot time when time sync is available.

| Parameter | Type | Description |
|---|---|---|
| `acquisitionRequests` | `dataAcquisitionPb.AcquisitionRequestList` | The different image sources and data sources to capture from and save to the data buffer with the same timestamp. |
| `actionName` | `string` | The unique action name that all data will be saved with. |
| `groupName` | `string` | The unique group name that all data will be saved with. |
| `dataTimestamp` | `Timestamp \| null` | The unique timestamp that all data will be saved with. (*Optional*) |
| `metadata` | `(Metadata \| object) \| null` | The JSON structured metadata to be associated with the data returned by the DataAcquisitionService when logged in the data buffer service. (*Optional*) |
| `minTimeout` | `number \| null` | The minimum time to wait, in seconds. (*Optional*) |

**Returns** `dataAcquisitionPb.AcquireDataRequest`

**Throws**

- `ValueError` Metadata is not in the right format.

### acquireData

```ts
acquireData(acquisitionRequests: Object, actionName: string, groupName: string, dataTimestamp?: Timestamp | null, metadata?: (Metadata | object) | null, minTimeout?: number | null, args?: Object): Promise<number>
```

Trigger a data acquisition to save data and metadata to the data buffer.

| Parameter | Type | Description |
|---|---|---|
| `acquisitionRequests` | `Object` | The different image sources and data sources to capture from and save to the data buffer with the same timestamp. |
| `actionName` | `string` | The unique action name that all data will be saved with. |
| `groupName` | `string` | The unique group name that all data will be saved with. |
| `dataTimestamp` | `Timestamp \| null` | The unique timestamp that all data will be saved with. (*Optional*) |
| `metadata` | `(Metadata \| object) \| null` | The JSON structured metadata to be associated with the data returned by the DataAcquisitionService when logged in the data buffer service. (*Optional*) |
| `minTimeout` | `number \| null` | The minimum time to wait, in seconds like Python (unlike the timeout of args, in milliseconds). (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<number>`: If the RPC is successful, then it will return the acquire data request id, which can be used to check the status of the acquisition and get feedback.

**Throws**

- `RpcError` Problem communicating with the robot.

### acquireDataFromRequest

```ts
acquireDataFromRequest(request: dataAcquisitionPb.AcquireDataRequest, args?: Object): Promise<dataAcquisitionPb.AcquireDataResponse>
```

Alternate version of acquireData() that takes an AcquireDataRequest directly.

| Parameter | Type | Description |
|---|---|---|
| `request` | `dataAcquisitionPb.AcquireDataRequest` | The request to send |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataAcquisitionPb.AcquireDataResponse>`

### getStatus

```ts
getStatus(requestId: number, args?: Object): Promise<dataAcquisitionPb.GetStatusResponse>
```

Check the status of a data acquisition based on the request id.

| Parameter | Type | Description |
|---|---|---|
| `requestId` | `number` | The request id associated with an AcquireData request. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataAcquisitionPb.GetStatusResponse>`: If the RPC is successful, then it will return the full status response, which includes the status as well as other information about any possible errors.

**Throws**

- `RpcError` Problem communicating with the robot.
- `RequestIdDoesNotExistError` The request id provided is incorrect.

### getServiceInfo

```ts
getServiceInfo(args?: Object): Promise<dataAcquisitionPb.AcquisitionCapabilityList>
```

Get information from a DAQ service to list it's capabilities - which data, metadata,
or processing the DAQ service will perform.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataAcquisitionPb.AcquisitionCapabilityList>`: The GetServiceInfoResponse message, which contains all the different capabilities.

**Throws**

- `RpcError` Problem communicating with the robot.

### cancelAcquisition

```ts
cancelAcquisition(requestId: number, args?: Object): Promise<dataAcquisitionPb.CancelAcquisitionResponse>
```

Cancel a data acquisition based on the request id.

| Parameter | Type | Description |
|---|---|---|
| `requestId` | `number` | The request id associated with an AcquireData request. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataAcquisitionPb.CancelAcquisitionResponse>`: If the RPC is successful, then it will return the full status response, which includes the status as well as other information about any possible errors.

**Throws**

- `RpcError` Problem communicating with the robot.
- `CancellationFailedError` The data acquisitions associated with the request id were unable to be cancelled.
- `RequestIdDoesNotExistError` The request id provided is incorrect.

### getLiveData

```ts
getLiveData(request: dataAcquisitionPb.LiveDataRequest, args?: Object): Promise<dataAcquisitionPb.LiveDataResponse>
```

Call the GetLiveData RPC of the plugin service.

| Parameter | Type | Description |
|---|---|---|
| `request` | `dataAcquisitionPb.LiveDataRequest` | The data_acquisition_pb.LiveDataRequest to be send |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataAcquisitionPb.LiveDataResponse>`

## DataAcquisitionResponseError

```ts
class DataAcquisitionResponseError extends ResponseError
```

Error in Data Acquisition RPC

## RequestIdDoesNotExistError

```ts
class RequestIdDoesNotExistError extends DataAcquisitionResponseError
```

The provided request id does not exist or is invalid.

## UnknownCaptureTypeError

```ts
class UnknownCaptureTypeError extends DataAcquisitionResponseError
```

The provided request contains unknown capture requests.

## CancellationFailedError

```ts
class CancellationFailedError extends DataAcquisitionResponseError
```

The data acquisition request was unable to be cancelled.

## metadataToProto

```ts
export function metadataToProto(metadata: (dataAcquisitionPb.Metadata | Object) | null): dataAcquisitionPb.Metadata | null
```

The Metadata proto of metadata given as a proto or as an object.

| Parameter | Type | Description |
|---|---|---|
| `metadata` | `(dataAcquisitionPb.Metadata \| Object) \| null` | The JSON structured metadata. |

**Returns** `dataAcquisitionPb.Metadata \| null`: null if there is no metadata.

**Throws**

- `ValueError` Metadata is not in the right format.

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `acquireDataError` | `(...args: any[]) => any` |  |

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `dataAcquisitionPb` | `spot-sdk-js/src/bosdyn/api/data_acquisition_pb` |

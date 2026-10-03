# bosdyn-client/data_acquisition_store

Client implementation for data acquisition store service.

```js
const { DataAcquisitionStoreClient } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`DataAcquisitionStoreClient`](#dataacquisitionstoreclient) | Class | A client for triggering data acquisition store methods. |

## DataAcquisitionStoreClient

```ts
class DataAcquisitionStoreClient extends BaseClient<DataAcquisitionStoreServiceClient>
```

A client for triggering data acquisition store methods.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'data-acquisition-store'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.DataAcquisitionStoreService'`. |

### updateFrom

```ts
updateFrom(other: Robot): Promise<void>
```

Update instance from another object.

| Parameter | Type | Description |
|---|---|---|
| `other` | `Robot` | The object where to copy from. |

**Returns** `Promise<void>`

### listCaptureActions

```ts
listCaptureActions(query: dataAcquisitionStore.DataQueryParams, args?: Object): Promise<any[] | Object>
```

List capture actions that satisfy the query parameters.

| Parameter | Type | Description |
|---|---|---|
| `query` | `dataAcquisitionStore.DataQueryParams` | Query parameters. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<any[] \| Object>`: CaptureActionIds for the actions matching the query parameters.

### listStoredImages

```ts
listStoredImages(query: dataAcquisitionStore.DataQueryParams, args?: Object): Promise<any[] | Object>
```

List images that satisfy the query parameters.

| Parameter | Type | Description |
|---|---|---|
| `query` | `dataAcquisitionStore.DataQueryParams` | Query parameters. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<any[] \| Object>`: DataIdentifiers for the images matching the query parameters.

### listStoredMetadata

```ts
listStoredMetadata(query: dataAcquisitionStore.DataQueryParams, args?: Object): Promise<any[] | Object>
```

List metadata that satisfy the query parameters.

| Parameter | Type | Description |
|---|---|---|
| `query` | `dataAcquisitionStore.DataQueryParams` | Query parameters. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<any[] \| Object>`: DataIdentifiers for the images matching the query parameters.

### listStoredAlertdata

```ts
listStoredAlertdata(query: dataAcquisitionStore.DataQueryParams, args?: Object): Promise<any[] | Object>
```

List AlertData that satisfy the query parameters.

| Parameter | Type | Description |
|---|---|---|
| `query` | `dataAcquisitionStore.DataQueryParams` | Query parameters. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<any[] \| Object>`: DataIdentifiers for the AlertData matching the query parameters.

### listStoredData

```ts
listStoredData(query: dataAcquisitionStore.DataQueryParams, args?: Object): Promise<any[] | Object>
```

List data that satisfy the query parameters.

| Parameter | Type | Description |
|---|---|---|
| `query` | `dataAcquisitionStore.DataQueryParams` | Query parameters. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<any[] \| Object>`: DataIdentifiers for the images matching the query parameters.

### storeImage

```ts
storeImage(image: ImageCapture, dataId: DataIdentifier, args?: Object): Promise<dataAcquisitionStore.StoreImageResponse>
```

Store image.

| Parameter | Type | Description |
|---|---|---|
| `image` | `ImageCapture` | Image to store. |
| `dataId` | `DataIdentifier` | Data identifier to use for storing the image. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataAcquisitionStore.StoreImageResponse>`: StoreImageResponse response.

### storeMetadata

```ts
storeMetadata(associatedMetadata: AssociatedMetadata, dataId: DataIdentifier, args?: Object): Promise<dataAcquisitionStore.StoreMetadataResponse>
```

Store metadata.

| Parameter | Type | Description |
|---|---|---|
| `associatedMetadata` | `AssociatedMetadata` | Metadata to store. If metadata is not associated with a particular piece of data, the dataId field in this object needs to specify only the action_id part. |
| `dataId` | `DataIdentifier` | Data identifier to use for storing this associated metadata. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataAcquisitionStore.StoreMetadataResponse>`: StoreMetadataResponse response.

### storeAlertdata

```ts
storeAlertdata(associatedAlertData: AssociatedMetadata, dataId: DataIdentifier, args?: Object): Promise<dataAcquisitionStore.StoreAlertDataResponse>
```

Store AlertData

| Parameter | Type | Description |
|---|---|---|
| `associatedAlertData` | `AssociatedMetadata` | AlertData to store. If AlertData is not associated with a particular piece of data, the dataId field in this object needs to specify only the action_id part. |
| `dataId` | `DataIdentifier` | Data identifier to use for storing this |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataAcquisitionStore.StoreAlertDataResponse>`

### storeData

```ts
storeData(data: Uint8Array | string, dataId: DataIdentifier, fileExtension?: string | null, args?: Object): Promise<dataAcquisitionStore.StoreDataResponse>
```

Store data.

| Parameter | Type | Description |
|---|---|---|
| `data` | `Uint8Array \| string` | Arbitrary data to store. |
| `dataId` | `DataIdentifier` | Data identifier to use for storing this data. |
| `fileExtension` | `string \| null` | File extension to use for writing the data to a file. (*Optional*, default `null`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataAcquisitionStore.StoreDataResponse>`: StoreDataResponse response.

### storeDataAsChunks

```ts
storeDataAsChunks(data: Uint8Array | string, dataId: DataIdentifier, fileExtension?: string | null, args?: Object): Promise<dataAcquisitionStore.StoreStreamResponse[]>
```

Store data using streaming, supports storing of large data that is too large for a single storeData rpc.
Note: using this rpc means that the data must be loaded into memory.

| Parameter | Type | Description |
|---|---|---|
| `data` | `Uint8Array \| string` | Arbitrary data to store. |
| `dataId` | `DataIdentifier` | Data identifier to use for storing this data. |
| `fileExtension` | `string \| null` | File extension to use for writing the data to a file. (*Optional*, default `null`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataAcquisitionStore.StoreStreamResponse[]>`

### storeFile

```ts
storeFile(filePath: string, dataId: DataIdentifier, fileExtension?: string | null, args?: Object): Promise<dataAcquisitionStore.StoreStreamResponse[]>
```

Store file using file path, supports storing of large files that are too large for a single storeData rpc.

| Parameter | Type | Description |
|---|---|---|
| `filePath` | `string` | File path to arbitrary data to store. |
| `dataId` | `DataIdentifier` | Data identifier to use for storing this data. |
| `fileExtension` | `string \| null` | File extension to use for writing the data to a file. (*Optional*, default `null`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataAcquisitionStore.StoreStreamResponse[]>`

### queryStoredCaptures

```ts
queryStoredCaptures(query?: dataAcquisitionStore.QueryParameters, args?: Object): Promise<dataAcquisitionStore.QueryStoredCapturesResponse>
```

Query stored captures from the robot.

| Parameter | Type | Description |
|---|---|---|
| `query` | `dataAcquisitionStore.QueryParameters` | Query parameters. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataAcquisitionStore.QueryStoredCapturesResponse>`

### queryMaxCaptureId

```ts
queryMaxCaptureId(args?: Object): Promise<number>
```

Query max capture id from the robot.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<number>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `dataAcquisitionStore` | `spot-sdk-js/src/bosdyn/api/data_acquisition_store_pb` |

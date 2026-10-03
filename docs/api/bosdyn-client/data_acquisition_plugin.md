# bosdyn-client/data_acquisition_plugin

General client implementation for all data-acquisition plugin services.

```js
const { DataAcquisitionPluginClient } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`DataAcquisitionPluginClient`](#dataacquisitionpluginclient) | Class | A client for triggering data acquisition plugin and logging. |

## DataAcquisitionPluginClient

```ts
class DataAcquisitionPluginClient extends BaseClient<DataAcquisitionPluginServiceClient>
```

A client for triggering data acquisition plugin and logging. This client is not intended for
use directly by users or applications. All acquisition requests should go to the data
acquisition service first, which is responsible for forwarding the requests to the right data
acquisition plugin services through this client.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `null` | Static. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.DataAcquisitionPluginService'`. |

### acquirePluginData

```ts
acquirePluginData(acquisitionRequests: dataAcquisitionPb.AcquisitionRequestList, actionId: dataAcquisitionPb.CaptureActionId, dataIdentifiers?: Array<dataAcquisitionPb.DataIdentifier> | null, metadata?: dataAcquisitionPb.Metadata | null, args?: Object): Promise<dataAcquisitionPb.AcquirePluginDataResponse>
```

Trigger a data acquisition to save data and metadata to the data acquisition store service.

| Parameter | Type | Description |
|---|---|---|
| `acquisitionRequests` | `dataAcquisitionPb.AcquisitionRequestList` | The different image sources and data sources to capture from and save to the data acquisition store service with the same timestamp. |
| `actionId` | `dataAcquisitionPb.CaptureActionId` | The unique action that all data should be saved with. |
| `dataIdentifiers` | `Array<dataAcquisitionPb.DataIdentifier> \| null` | List of data identifiers to associate with metadata. (*Optional*) |
| `metadata` | `dataAcquisitionPb.Metadata \| null` | The JSON structured metadata to be associated with the data returned by the DataAcquisitionService when logged in the data acquisition store service. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<dataAcquisitionPb.AcquirePluginDataResponse>`: If the RPC is successful, then it will return the acquire data response which can be used to check the status of the acquisition and get feedback.

**Throws**

- `RpcError` Problem communicating with the robot.

### getLiveData

```ts
getLiveData(request: dataAcquisitionPb.LiveDataRequest): Promise<dataAcquisitionPb.LiveDataResponse>
```

Call the GetLiveData RPC of the plugin service.

| Parameter | Type | Description |
|---|---|---|
| `request` | `dataAcquisitionPb.LiveDataRequest` | The request to send |

**Returns** `Promise<dataAcquisitionPb.LiveDataResponse>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `dataAcquisitionPb` | `spot-sdk-js/src/bosdyn/api/data_acquisition_pb` |

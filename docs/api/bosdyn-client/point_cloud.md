# bosdyn-client/point_cloud

Client for the point cloud service.

This allows client code to read from a point cloud service.

```js
const { PointCloudClient, buildPcRequest, PointCloudResponseError, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { SourceDataError } = require('spot-sdk-js/src/bosdyn-client/point_cloud');
```

| Export | Kind | Description |
|---|---|---|
| [`PointCloudClient`](#pointcloudclient) | Class | Client to authenticate to the robot. |
| [`buildPcRequest`](#buildpcrequest) | Function | Helper function which builds an PointCloudRequest from an point cloud source name. |
| [`PointCloudResponseError`](#pointcloudresponseerror) | Class | General class of errors for PointCloud service. |
| [`UnknownPointCloudSourceError`](#unknownpointcloudsourceerror) | Class | System cannot find the requested point cloud source name. |
| [`SourceDataError`](#sourcedataerror) | Class | System cannot generate the PointCloudSource at this time. |
| [`PointCloudDataError`](#pointclouddataerror) | Class | System cannot generate point cloud data at this time. |
| [`PointCloudTypeError`](#pointcloudtypeerror) | Class | System cannot generate point cloud with the request cloud_type. |

## PointCloudClient

```ts
class PointCloudClient extends BaseClient<PointCloudServiceClient>
```

Client to authenticate to the robot.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'point-cloud'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.PointCloudService'`. |

### listPointCloudSources

```ts
listPointCloudSources(args?: Object): Promise<pointCloudProtos.PointCloudSource[]>
```

Obtain the list of PointCloudSources.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<pointCloudProtos.PointCloudSource[]>`: A list of the different point cloud sources as strings.

**Throws**

- `RpcError` Problem communicating with the robot.

### getPointCloudFromSources

```ts
getPointCloudFromSources(pointCloudSources: string[], args?: Object): Promise<pointCloudProtos.PointCloudResponse[]>
```

Obtain point clouds from sources using default parameters.

| Parameter | Type | Description |
|---|---|---|
| `pointCloudSources` | `string[]` | The source names to request point clouds from. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<pointCloudProtos.PointCloudResponse[]>`: A list of point cloud responses for each of the requested sources.

**Throws**

- `RpcError` Problem communicating with the robot.
- `UnknownPointCloudSourceError` Provided point cloud source was invalid or not found.
- `SourceDataError` Failed to fill out PointCloudSource. All other fields are not filled.
- `UnsetStatusError` An internal PointCloudService issue has happened.
- `PointCloudDataError` Problem with the point cloud data. Only PointCloudSource is filled.

### getPointCloud

```ts
getPointCloud(pointCloudRequests: Array<pointCloudProtos.PointCloudRequest>, args?: Object): Promise<pointCloudProtos.PointCloudResponse[]>
```

Get the most recent point cloud.

| Parameter | Type | Description |
|---|---|---|
| `pointCloudRequests` | `Array<pointCloudProtos.PointCloudRequest>` | A list of PointCloudRequest protobuf messages which specify which point clouds to collect |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<pointCloudProtos.PointCloudResponse[]>`: A list of point cloud responses for each of the requested sources.

**Throws**

- `RpcError` Problem communicating with the robot.
- `UnknownPointCloudSourceError` Provided point cloud source was invalid or not found.
- `SourceDataError` Failed to fill out PointCloudSource. All other fields are not filled.
- `UnsetStatusError` An internal PointCloudService issue has happened.
- `PointCloudDataError` Problem with the point cloud data. Only PointCloudSource is filled.

## PointCloudResponseError

```ts
class PointCloudResponseError extends ResponseError
```

General class of errors for PointCloud service.

## UnknownPointCloudSourceError

```ts
class UnknownPointCloudSourceError extends PointCloudResponseError
```

System cannot find the requested point cloud source name.

## SourceDataError

```ts
class SourceDataError extends PointCloudResponseError
```

System cannot generate the PointCloudSource at this time.

## PointCloudDataError

```ts
class PointCloudDataError extends PointCloudResponseError
```

System cannot generate point cloud data at this time.

## PointCloudTypeError

```ts
class PointCloudTypeError extends PointCloudResponseError
```

System cannot generate point cloud with the request cloud_type.

## buildPcRequest

```ts
export function buildPcRequest(pointCloudSourceName: string): pointCloudProtos.PointCloudRequest
```

Helper function which builds an PointCloudRequest from an point cloud source name.

| Parameter | Type | Description |
|---|---|---|
| `pointCloudSourceName` | `string` | The point cloud source to query. |

**Returns** `pointCloudProtos.PointCloudRequest`: The PointCloudRequest protobuf message for the given parameters.

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `pointCloudProtos` | `spot-sdk-js/src/bosdyn/api/point_cloud_pb` |

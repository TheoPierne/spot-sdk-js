# bosdyn-client/recording

For clients to use the graph nav recording service

```js
const { GraphNavRecordingServiceClient, WaypointRegion, RecordingServiceResponseError, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { UnknownWaypointError, MapTooLargeLicenseError, RobotImpairedError } = require('spot-sdk-js/src/bosdyn-client/recording');
```

| Export | Kind | Description |
|---|---|---|
| [`GraphNavRecordingServiceClient`](#graphnavrecordingserviceclient) | Class | Client for the GraphNav recording service. |
| [`WaypointRegion`](#constants) | Constant | Helper enum to describe the localization region type for a waypoint |
| [`RecordingServiceResponseError`](#recordingserviceresponseerror) | Class | General class of errors for the GraphNav Recording Service. |
| [`CouldNotCreateWaypointError`](#couldnotcreatewaypointerror) | Class | Service could not create a waypoint. |
| [`NotRecordingError`](#notrecordingerror) | Class | The recording service has not been started. |
| [`UnknownWaypointError`](#unknownwaypointerror) | Class | The edge requested has a waypoint id that is unknown. |
| [`EdgeExistsError`](#edgeexistserror) | Class | The edge requested with the given ID already exists in the map. |
| [`EdgeMissingTransformError`](#edgemissingtransformerror) | Class | The edge requested is missing the from_T_to transform in the edge. |
| [`NotLocalizedToEndError`](#notlocalizedtoenderror) | Class | Stop recording failed to localize to the last created waypoint. |
| [`FollowingRouteError`](#followingrouteerror) | Class | Cannot start recording while the robot is already following a route. |
| [`NotLocalizedToExistingMapError`](#notlocalizedtoexistingmaperror) | Class | The robot is not localized to the existing map and cannot start recording. |
| [`TooFarFromExistingMapError`](#toofarfromexistingmaperror) | Class | The robot is too far from the existing map and cannot start recording. |
| [`RemoteCloudFailureNotInDirectoryError`](#remotecloudfailurenotindirectoryerror) | Class | Failed to start recording because a remote point cloud (e.g. |
| [`RemoteCloudFailureNoDataError`](#remotecloudfailurenodataerror) | Class | Failed to start recording because a remote point cloud (e.g. |
| [`NotReadyYetError`](#notreadyyeterror) | Class | The service is processing the map at its current position. |
| [`MapTooLargeLicenseError`](#maptoolargelicenseerror) | Class | Map exceeds the size allowed by the license. |
| [`MissingFiducialsError`](#missingfiducialserror) | Class | One or more required fiducials were not detected. |
| [`FiducialPoseError`](#fiducialposeerror) | Class | The pose of one or more required fiducials could not be determined accurately. |
| [`RobotImpairedError`](#robotimpairederror) | Class | Failed to start recording because the robot is impaired. |

## GraphNavRecordingServiceClient

```ts
class GraphNavRecordingServiceClient extends BaseClient<GraphNavRecordingServiceClientPb>
```

Client for the GraphNav recording service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'recording-service'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.graph_nav.GraphNavRecordingService'`. |

### GraphNavRecordingServiceClient.makeRecordingEnvironment

```ts
static makeRecordingEnvironment(name?: string, waypointEnv?: mapPb.Waypoint.Annotations, edgeEnv?: mapPb.Edge.Annotations): recordingPb.RecordingEnvironment
```

Construct a complete recording environment from the waypoint and edge environments.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | A string name prefix which will prefix waypoint names (human-readable). (*Optional*) |
| `waypointEnv` | `mapPb.Waypoint.Annotations` | Waypoint.Annotations protobuf which includes information for the waypoint environment. (*Optional*) |
| `edgeEnv` | `mapPb.Edge.Annotations` | Edge.Annotations protobuf which includes information for the edge environment. (*Optional*) |

**Returns** `recordingPb.RecordingEnvironment`

### GraphNavRecordingServiceClient.makeWaypointEnvironment

```ts
static makeWaypointEnvironment(name: string, region?: WaypointRegion, dist2d?: number, clientMetadata?: mapPb.ClientMetadata): mapPb.Waypoint.Annotations
```

Create a waypoint environment.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | A string name for the waypoint (human-readable). |
| `region` | `WaypointRegion` | A WaypointRegion enum representing the region in which we are localizing in. This can be either a default region, an empty region (don't localize to this waypoint), or a circular region. (*Optional*) |
| `dist2d` | `number` | If the region is circular, then this is set as a distance (meters) representing the number of meters away we can be from the waypoint before scan matching. (*Optional*) |
| `clientMetadata` | `mapPb.ClientMetadata` | Info about the client which will be stored in the waypoints. (*Optional*) |

**Returns** `mapPb.Waypoint.Annotations`

### GraphNavRecordingServiceClient.makeClientMetadata

```ts
static makeClientMetadata(sessionName?: string, clientUsername?: string, clientSoftwareVersion?: string, clientId?: string, clientType?: string): mapPb.ClientMetadata
```

Creates client metadata for recording.

| Parameter | Type | Description |
|---|---|---|
| `sessionName` | `string` | User-provided name for this recording "session". For example, the user may start and stop recording at various times and assign a name to a region that is being recorded. Usually, this will just be the map name. (*Optional*) |
| `clientUsername` | `string` | If the application recording the map has a special user name, this is the name of that user. (*Optional*) |
| `clientSoftwareVersion` | `string` | Version string of any client software that generated this object. (*Optional*) |
| `clientId` | `string` | Identifier of any client software that generated this object (*Optional*) |
| `clientType` | `string` | Special tag for the client software which created this object. For example, "Tablet", "Scout", "NodeJS SDK", etc. (*Optional*) |

**Returns** `mapPb.ClientMetadata`

### GraphNavRecordingServiceClient.makeEdgeEnvironment

```ts
static makeEdgeEnvironment(velLimit?: SE2VelocityLimit | null, directionConstraint?: mapPb.Edge.Annotations.DirectionConstraint, requireAlignment?: boolean, groundMuHint?: number, gratedFloor?: boolean): mapPb.Edge.Annotations
```

Create an edge environment.

It always threw (setGratedFloor() does not exist, and a boolean was set as the BoolValue require_alignment), and
the make_edge_environment() of Python raises an AttributeError (CopyFrom() on booleans, and grated_floor is no
longer in map.proto): the environment follows the current map.proto. The ground friction, the grated floor and
the velocity limit are mobility params of the edge, and override_mobility_params lists them, so that the other
mobility params are not annotated (an empty FieldMask activates all of them).

| Parameter | Type | Description |
|---|---|---|
| `velLimit` | `SE2VelocityLimit \| null` | A SE2VelocityLimit to use while traversing the edge. Note this is not a target speed, just a max/min. (*Optional*, default `null`) |
| `directionConstraint` | `mapPb.Edge.Annotations.DirectionConstraint` | A direction constraints on the robot's orientation when traversing the edge. (*Optional*, default `DIRECTION_CONSTRAINT_NONE`) |
| `requireAlignment` | `boolean` | Boolean where if true, the robot must be aligned with the edge in yaw before traversing it. (*Optional*, default `false`) |
| `groundMuHint` | `number` | Terrain coefficient of friction user hint. Suggested values lie between [.4, .8]. 0 or less: not annotated. (*Optional*, default `0.8`) |
| `gratedFloor` | `boolean` | Boolean where if true, the edge crosses over grated metal (grated surfaces mode on); false leaves the mode of the robot. (*Optional*, default `false`) |

**Returns** `mapPb.Edge.Annotations`

### GraphNavRecordingServiceClient.makeEdge

```ts
static makeEdge(fromWaypointId: string, toWaypointId: string, fromTformTo: SE3Pose, edgeEnvironment?: mapPb.Edge | null): mapPb.Edge
```

Create an edge between two waypoint ids.

| Parameter | Type | Description |
|---|---|---|
| `fromWaypointId` | `string` | A waypoint string id for the from waypoint. |
| `toWaypointId` | `string` | A waypoint string id for the to waypoint. |
| `fromTformTo` | `SE3Pose` | An SE3Pose representing the transform of from_waypoint to to_waypoint. |
| `edgeEnvironment` | `mapPb.Edge \| null` | Any edge environment to be associated with the created edge. (*Optional*) |

**Returns** `mapPb.Edge`

### startRecording

```ts
startRecording(lease?: import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease, recordingEnvironment?: recordingPb.RecordingEnvironment, requireFiducials?: number[] | null, args?: Object): Promise<number>
```

Start the recording service to create/update a map.

| Parameter | Type | Description |
|---|---|---|
| `lease` | `import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease` | Leases to show ownership of necessary resources. Will use the client's leases by default. (*Optional*) |
| `recordingEnvironment` | `recordingPb.RecordingEnvironment` | RecordingEnvironment protobuf to be used for the initial waypoint created at start. (*Optional*) |
| `requireFiducials` | `number[] \| null` | The ids of the fiducials which must be seen to start the recording (the proto field is a list: the boolean of the Python documentation cannot be set). (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<number>`

### startRecordingFull

```ts
startRecordingFull(lease?: import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease, recordingEnvironment?: recordingPb.RecordingEnvironment, requireFiducials?: number[] | null, args?: Object): Promise<recordingPb.StartRecordingResponse>
```

Same as startRecording() but returns a full response

| Parameter | Type | Description |
|---|---|---|
| `lease` | `import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease` | Leases to show ownership of necessary resources. Will use the client's leases by default. (*Optional*) |
| `recordingEnvironment` | `recordingPb.RecordingEnvironment` | RecordingEnvironment protobuf to be used for the initial waypoint created at start. (*Optional*) |
| `requireFiducials` | `number[] \| null` | The ids of the fiducials which must be seen to start the recording. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<recordingPb.StartRecordingResponse>`

### stopRecording

```ts
stopRecording(lease?: import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease, args?: Object): Promise<number>
```

Stop the recording service.

| Parameter | Type | Description |
|---|---|---|
| `lease` | `import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease` | Leases to show ownership of necessary resources. Will use the client's leases by default. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<number>`

### getRecordStatus

```ts
getRecordStatus(args?: Object): Promise<recordingPb.GetRecordStatusResponse>
```

Get the status of the recording service.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<recordingPb.GetRecordStatusResponse>`

### setRecordingEnvironment

```ts
setRecordingEnvironment(lease?: import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease, recordingEnvironment?: recordingPb.RecordingEnvironment, args?: Object): Promise<recordingPb.SetRecordingEnvironmentResponse>
```

Set the persistent recording environment.

| Parameter | Type | Description |
|---|---|---|
| `lease` | `import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease` | Leases to show ownership of necessary resources. Will use the client's leases by default. (*Optional*) |
| `recordingEnvironment` | `recordingPb.RecordingEnvironment` | RecordingEnvironment protobuf to be set as the persistent environment. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<recordingPb.SetRecordingEnvironmentResponse>`

### createWaypoint

```ts
createWaypoint(lease?: import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease, waypointName?: string, recordingEnvironment?: recordingPb.RecordingEnvironment, args?: Object): Promise<recordingPb.CreateWaypointResponse>
```

Create a waypoint in the map at the current robot state.

| Parameter | Type | Description |
|---|---|---|
| `lease` | `import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease` | Leases to show ownership of necessary resources. Will use the client's leases by default. (*Optional*) |
| `waypointName` | `string` | Human readable string for the waypoint name. (*Optional*) |
| `recordingEnvironment` | `recordingPb.RecordingEnvironment` | RecordingEnvironment protobuf to be used for the waypoint (will overwrite and merge with any persistent env). (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<recordingPb.CreateWaypointResponse>`

### createEdge

```ts
createEdge(lease?: import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease, edge?: mapPb.Edge, args?: Object): Promise<recordingPb.CreateEdgeResponse>
```

Create an edge in the map between two existing waypoints.

| Parameter | Type | Description |
|---|---|---|
| `lease` | `import("spot-sdk-js/src/bosdyn/api/lease_pb").Lease` | Leases to show ownership of necessary resources. Will use the client's leases by default. (*Optional*) |
| `edge` | `mapPb.Edge` | An edge protobuf, which must include valid from/to waypoint id's and a fromTTo transform. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<recordingPb.CreateEdgeResponse>`

## RecordingServiceResponseError

```ts
class RecordingServiceResponseError extends ResponseError
```

General class of errors for the GraphNav Recording Service.

## CouldNotCreateWaypointError

```ts
class CouldNotCreateWaypointError extends RecordingServiceResponseError
```

Service could not create a waypoint.

## NotRecordingError

```ts
class NotRecordingError extends RecordingServiceResponseError
```

The recording service has not been started.

## UnknownWaypointError

```ts
class UnknownWaypointError extends RecordingServiceResponseError
```

The edge requested has a waypoint id that is unknown.

## EdgeExistsError

```ts
class EdgeExistsError extends RecordingServiceResponseError
```

The edge requested with the given ID already exists in the map.

## EdgeMissingTransformError

```ts
class EdgeMissingTransformError extends RecordingServiceResponseError
```

The edge requested is missing the from_T_to transform in the edge.

## NotLocalizedToEndError

```ts
class NotLocalizedToEndError extends RecordingServiceResponseError
```

Stop recording failed to localize to the last created waypoint.

## FollowingRouteError

```ts
class FollowingRouteError extends RecordingServiceResponseError
```

Cannot start recording while the robot is already following a route.

## NotLocalizedToExistingMapError

```ts
class NotLocalizedToExistingMapError extends RecordingServiceResponseError
```

The robot is not localized to the existing map and cannot start recording.

## TooFarFromExistingMapError

```ts
class TooFarFromExistingMapError extends RecordingServiceResponseError
```

The robot is too far from the existing map and cannot start recording.

## RemoteCloudFailureNotInDirectoryError

```ts
class RemoteCloudFailureNotInDirectoryError extends RecordingServiceResponseError
```

Failed to start recording because a remote point cloud (e.g. a LIDAR) is not registered to the service directory.

## RemoteCloudFailureNoDataError

```ts
class RemoteCloudFailureNoDataError extends RecordingServiceResponseError
```

Failed to start recording because a remote point cloud (e.g. a LIDAR) is not delivering data.

## NotReadyYetError

```ts
class NotReadyYetError extends RecordingServiceResponseError
```

The service is processing the map at its current position. Try again in 1-2 seconds.

## MapTooLargeLicenseError

```ts
class MapTooLargeLicenseError extends RecordingServiceResponseError
```

Map exceeds the size allowed by the license.

## MissingFiducialsError

```ts
class MissingFiducialsError extends RecordingServiceResponseError
```

One or more required fiducials were not detected.

## FiducialPoseError

```ts
class FiducialPoseError extends RecordingServiceResponseError
```

The pose of one or more required fiducials could not be determined accurately.

## RobotImpairedError

```ts
class RobotImpairedError extends RecordingServiceResponseError
```

Failed to start recording because the robot is impaired.

### new RobotImpairedError

```ts
constructor(response: any, errorMessage: any)
```

| Parameter | Type | Description |
|---|---|---|
| `response` | `any` |  |
| `errorMessage` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `impairedState` | `any` |  |

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `WaypointRegion` | `{ DEFAULT_REGION: 1, EMPTY_REGION: 2, CIRCLE_REGION: 3 }` | Helper enum to describe the localization region type for a waypoint |

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `recordingPb` | `spot-sdk-js/src/bosdyn/api/graph_nav/recording_pb` |
| `mapPb` | `spot-sdk-js/src/bosdyn/api/graph_nav/map_pb` |

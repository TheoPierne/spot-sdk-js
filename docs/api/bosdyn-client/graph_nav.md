# bosdyn-client/graph_nav

For clients to the graphnav service.

```js
const { GraphNavClient, GraphNavServiceResponseError, UploadWaypointSnapshotError, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { NoTimeSyncError, TooDistantError, RobotImpairedError, UnknownWaypointError, MapTooLargeLicenseError, InvalidGraphError } = require('spot-sdk-js/src/bosdyn-client/graph_nav');
```

| Export | Kind | Description |
|---|---|---|
| [`GraphNavClient`](#graphnavclient) | Class | Client to the GraphNav service. |
| [`GraphNavServiceResponseError`](#graphnavserviceresponseerror) | Class | General class of errors for the GraphNav Recording Service. |
| [`UploadWaypointSnapshotError`](#uploadwaypointsnapshoterror) | Class | Errors related to uploading a waypoint snapshot |
| [`UploadGraphError`](#uploadgrapherror) | Class | Errors related to uploading a graph. |
| [`IncompatibleSensorsError`](#incompatiblesensorserror) | Class | The map was recorded with using a sensor configuration which is incompatible with the robot (for example, LIDAR configuration). |
| [`AreaCallbackMapError`](#areacallbackmaperror) | Class | The map specified an area callback that is not registered or is faulted. |
| [`CannotModifyMapDuringRecordingError`](#cannotmodifymapduringrecordingerror) | Class | Cannot clear the map during recording. |
| [`NoAnchoringError`](#noanchoringerror) | Class | There is no anchoring. |
| [`InvalidPoseError`](#invalidposeerror) | Class | The requested pose is invalid, or known to be unachievable. |
| [`InvalidGPSError`](#invalidgpserror) | Class | Cannot issue the GPS command because it is invalid. |
| [`UnrecognizedCommandError`](#unrecognizedcommanderror) | Class | Happens when you try to continue a command that was either expired, or had an unrecognized id. |
| [`RequestAbortedError`](#requestabortederror) | Class | Request was aborted by the system. |
| [`RequestFailedError`](#requestfailederror) | Class | Request failed to complete by the system. |
| [`RobotFaultedError`](#robotfaultederror) | Class | Robot is experiencing a fault condition that prevents localization. |
| [`UnknownMapInformationError`](#unknownmapinformationerror) | Class | The given map information (waypoints,edges,routes) is unknown by the system. |
| [`TimeError`](#timeerror) | Class | Errors associated with timestamps and time sync. |
| [`CommandExpiredError`](#commandexpirederror) | Class | The command was received after its end time had already passed. |
| [`NoTimeSyncError`](#notimesyncerror) | Class | Client has not performed timesync with robot. |
| [`TooDistantError`](#toodistanterror) | Class | The command was too far in the future. |
| [`RobotStateError`](#robotstateerror) | Class | Errors associated with the current state of the robot. |
| [`IsRecordingError`](#isrecordingerror) | Class | Cannot navigate a route while recording a map. |
| [`RobotImpairedError`](#robotimpairederror) | Class | Robot has a critical perception or behavior fault and cannot navigate. |
| [`RouteError`](#routeerror) | Class | Errors associated with the specified route. |
| [`ConstraintFaultError`](#constraintfaulterror) | Class | Route parameters contained a constraint fault. |
| [`InvalidEdgeError`](#invalidedgeerror) | Class | One or more edges do not connect to expected waypoints. |
| [`UnkownRouteElementsError`](#unkownrouteelementserror) | Class | Deprecated name (misspelled) of Python, the parent class of UnknownRouteElementsError. |
| [`UnknownRouteElementsError`](#unknownrouteelementserror) | Class | One or more waypoints/edges are not in the map. |
| [`NoPathError`](#nopatherror) | Class | There is no path to the specified waypoint. |
| [`UnknownWaypointError`](#unknownwaypointerror) | Class | One or more waypoints are not in the map. |
| [`RouteNavigationError`](#routenavigationerror) | Class | Errors related to how the robot navigates the route. |
| [`FeatureDesertError`](#featuredeserterror) | Class | Route contained too many waypoints with low-quality features. |
| [`RouteNotUpdatingError`](#routenotupdatingerror) | Class | Graph nav was unable to update and follow the specified route. |
| [`RobotLostError`](#robotlosterror) | Class | Cannot issue a navigation request when the robot is already lost. |
| [`RobotNotLocalizedToRouteError`](#robotnotlocalizedtorouteerror) | Class | The current localization doesn't refer to any waypoint in the route (possibly uninitialized localization). |
| [`RobotStuckError`](#robotstuckerror) | Class | The robot is stuck or unable to find a way forward. |
| [`UnrecongizedCommandError`](#unrecongizedcommanderror) | Class | Happens when you try to continue a command that was either expired, or had an unrecognized id. |
| [`MapTooLargeLicenseError`](#maptoolargelicenseerror) | Class | The map is too large for the license on the robot. |
| [`InvalidGraphError`](#invalidgrapherror) | Class | The graph is invalid topologically, e.g. |

## GraphNavClient

```ts
class GraphNavClient extends BaseClient<GraphNavServiceClient>
```

Client to the GraphNav service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'graph-nav-service'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.graph_nav.GraphNavService'`. |

### GraphNavClient.generateTravelParams

```ts
static generateTravelParams(maxDistance: any, maxYaw: any, velocityLimit?: null): graphNavPb.TravelParams
```

Generate the API TravelParams for navigation requests.

| Parameter | Type | Description |
|---|---|---|
| `maxDistance` | `any` |  |
| `maxYaw` | `any` |  |
| `velocityLimit` | `null` | (*Optional*) |

**Returns** `graphNavPb.TravelParams`

### GraphNavClient.buildRoute

```ts
static buildRoute(waypointIdList: any, edgeIdList: any): navPb.Route
```

Generate the API Route for navigation requests.

| Parameter | Type | Description |
|---|---|---|
| `waypointIdList` | `any` |  |
| `edgeIdList` | `any` |  |

**Returns** `navPb.Route`

### updateFrom

```ts
updateFrom(other: Robot): Promise<void>
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `Robot` |  |

**Returns** `Promise<void>`

### setLocalizationFullResponse

```ts
setLocalizationFullResponse(initialGuessLocalization: navPb.Localization, koTformBody?: SE3Pose, maxDistance?: number, maxYaw?: number, fiducialInit?: graphNavPb.SetLocalizationRequest.FiducialInit, useFiducialId?: number, refineFiducialResultWithIcp?: boolean, doAmbiguityCheck?: boolean, refineWithVisualFeatures?: boolean, verifyVisualFeaturesQuality?: boolean, args?: Object): Promise<graphNavPb.SetLocalizationResponse>
```

Version of setLocalization which returns the full response, rather than only the Localization message.

| Parameter | Type | Description |
|---|---|---|
| `initialGuessLocalization` | `navPb.Localization` | Operator-supplied guess at localization. |
| `koTformBody` | `SE3Pose` | Robot SE3Pose protobuf when the initialGuess was made. (*Optional*) |
| `maxDistance` | `number` | Margin of distance (meters) away from the initial guess. (*Optional*) |
| `maxYaw` | `number` | Margin of angle (radians) away from the initial guess. (*Optional*) |
| `fiducialInit` | `graphNavPb.SetLocalizationRequest.FiducialInit` | Tells the initializer whether to use fiducials, and how to use them. (*Optional*) |
| `useFiducialId` | `number` | If using FIDUCIAL_INIT_SPECIFIC, this is the specific fiducial ID to use for initialization. (*Optional*) |
| `refineFiducialResultWithIcp` | `boolean` | Boolean determining if ICP will run after a fiducial is used for an initial guess. (*Optional*) |
| `doAmbiguityCheck` | `boolean` | Boolean where if true, consider how nearby localizations appear. (*Optional*) |
| `refineWithVisualFeatures` | `boolean` | Boolean determining if visual features should be used to refine the estimate. When set, this value overrides refine_fiducial_result_with_icp. (*Optional*) |
| `verifyVisualFeaturesQuality` | `boolean` | When refine_with_visual_features is set, determines if an error is asserted when the refinement is unsuccessful. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<graphNavPb.SetLocalizationResponse>`

### setLocalization

```ts
setLocalization(initialGuessLocalization: navPb.Localization, koTformBody?: SE3Pose, maxDistance?: number, maxYaw?: number, fiducialInit?: graphNavPb.SetLocalizationRequest.FiducialInit, useFiducialId?: number, refineFiducialResultWithIcp?: boolean, doAmbiguityCheck?: boolean, refineWithVisualFeatures?: boolean, verifyVisualFeaturesQuality?: boolean, args?: Object): Promise<navPb.Localization>
```

Trigger a manual localization. Typically done to provide the initial localization.

| Parameter | Type | Description |
|---|---|---|
| `initialGuessLocalization` | `navPb.Localization` | Operator-supplied guess at localization. |
| `koTformBody` | `SE3Pose` | Robot SE3Pose protobuf when the initialGuess was made. (*Optional*) |
| `maxDistance` | `number` | Margin of distance (meters) away from the initial guess. (*Optional*) |
| `maxYaw` | `number` | Margin of angle (radians) away from the initial guess. (*Optional*) |
| `fiducialInit` | `graphNavPb.SetLocalizationRequest.FiducialInit` | Tells the initializer whether to use fiducials, and how to use them. (*Optional*) |
| `useFiducialId` | `number` | If using FIDUCIAL_INIT_SPECIFIC, this is the specific fiducial ID to use for initialization. (*Optional*) |
| `refineFiducialResultWithIcp` | `boolean` | Boolean determining if ICP will run after a fiducial is used for an initial guess. (*Optional*) |
| `doAmbiguityCheck` | `boolean` | Boolean where if true, consider how nearby localizations appear. (*Optional*) |
| `refineWithVisualFeatures` | `boolean` | Boolean determining if visual features should be used to refine the estimate. When set, this value overrides refine_fiducial_result_with_icp. (*Optional*) |
| `verifyVisualFeaturesQuality` | `boolean` | When refine_with_visual_features is set, determines if an error is asserted when the refinement is unsuccessful. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<navPb.Localization>`

### getLocalizationState

```ts
getLocalizationState(requestLivePointCloud?: boolean, requestLiveImages?: boolean, requestLiveTerrainMaps?: boolean, requestLiveWorldObjects?: boolean, requestLiveRobotState?: boolean, waypointId?: string | null, requestGpsState?: boolean, args?: Object): Promise<graphNavPb.GetLocalizationStateResponse>
```

Obtain current localization state of the robot.

| Parameter | Type | Description |
|---|---|---|
| `requestLivePointCloud` | `boolean` | Request live point cloud (*Optional*, default `false`) |
| `requestLiveImages` | `boolean` | Request live images (*Optional*, default `false`) |
| `requestLiveTerrainMaps` | `boolean` | Request live terrain maps (*Optional*, default `false`) |
| `requestLiveWorldObjects` | `boolean` | Request live world objects (*Optional*, default `false`) |
| `requestLiveRobotState` | `boolean` | Request live robot state (*Optional*, default `false`) |
| `waypointId` | `string \| null` | The waypoint relative to which the localization is expressed (the waypoint of the localization if unset), like Python. (*Optional*, default `null`) |
| `requestGpsState` | `boolean` | Request the GPS state, like Python. (*Optional*, default `false`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<graphNavPb.GetLocalizationStateResponse>`

### navigateRoute

```ts
navigateRoute(route: navPb.Route, cmdDuration: number, routeFollowParams?: graphNavPb.RouteFollowingParams | null, travelParams?: graphNavPb.TravelParams | null, leases?: any, timesyncEndpoint?: TimeSyncEndpoint | null, commandId?: number | null, destinationWaypointTformBodyGoal?: SE2Pose | null, args?: Object): Promise<number>
```

Navigate the given route.

| Parameter | Type | Description |
|---|---|---|
| `route` | `navPb.Route` | Route protobuf of the route to follow. |
| `cmdDuration` | `number` | Number of seconds the command can run for. |
| `routeFollowParams` | `graphNavPb.RouteFollowingParams \| null` | What should the robot do if it is not at the expected point in the route, or the route is blocked. (*Optional*) |
| `travelParams` | `graphNavPb.TravelParams \| null` | API TravelParams for the route. (*Optional*) |
| `leases` | `any` | Leases to show ownership of necessary resources. Will use the client's leases by default. (*Optional*) |
| `timesyncEndpoint` | `TimeSyncEndpoint \| null` | Use this endpoint for timesync fields. Will use the client's endpoint by default. (*Optional*) |
| `commandId` | `number \| null` | If not null, this continues an existing navigateRoute command with the given ID. If null, a new commandId will be used. (*Optional*) |
| `destinationWaypointTformBodyGoal` | `SE2Pose \| null` | SE2Pose protobuf of an offset relative to the destination waypoint. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<number>`

### navigateRouteFull

```ts
navigateRouteFull(route: navPb.Route, cmdDuration: number, routeFollowParams?: graphNavPb.RouteFollowingParams | null, travelParams?: graphNavPb.TravelParams | null, leases?: any, timesyncEndpoint?: TimeSyncEndpoint | null, commandId?: number | null, destinationWaypointTformBodyGoal?: SE2Pose | null, args?: Object): Promise<graphNavPb.NavigateRouteResponse>
```

Identical to `GraphNavClient#navigateRoute`, except will return the full NavigateRouteResponse.

| Parameter | Type | Description |
|---|---|---|
| `route` | `navPb.Route` | Route protobuf of the route to follow. |
| `cmdDuration` | `number` | Number of seconds the command can run for. |
| `routeFollowParams` | `graphNavPb.RouteFollowingParams \| null` | What should the robot do if it is not at the expected point in the route, or the route is blocked. (*Optional*) |
| `travelParams` | `graphNavPb.TravelParams \| null` | API TravelParams for the route. (*Optional*) |
| `leases` | `any` | Leases to show ownership of necessary resources. Will use the client's leases by default. (*Optional*) |
| `timesyncEndpoint` | `TimeSyncEndpoint \| null` | Use this endpoint for timesync fields. Will use the client's endpoint by default. (*Optional*) |
| `commandId` | `number \| null` | If not null, this continues an existing navigateRoute command with the given ID. If null, a new commandId will be used. (*Optional*) |
| `destinationWaypointTformBodyGoal` | `SE2Pose \| null` | SE2Pose protobuf of an offset relative to the destination waypoint. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<graphNavPb.NavigateRouteResponse>`

### navigateTo

```ts
navigateTo(destinationWaypointId: string, cmdDuration: number, routeParams?: graphNavPb.RouteGenParams | null, travelParams?: graphNavPb.TravelParams | null, leases?: any, timesyncEndpoint?: TimeSyncEndpoint | null, commandId?: number | null, destinationWaypointTformBodyGoal?: SE2Pose | null, routeBlockedBehavior?: graphNavPb.RouteFollowingParams.RouteBlockedBehavior, args?: Object): Promise<number>
```

Navigate to a specific waypoint along a route chosen by the GraphNav service.

| Parameter | Type | Description |
|---|---|---|
| `destinationWaypointId` | `string` | Waypoint id string for where to go to. |
| `cmdDuration` | `number` | Number of seconds the command can run for. |
| `routeParams` | `graphNavPb.RouteGenParams \| null` | API RouteGenParams for the route. (*Optional*) |
| `travelParams` | `graphNavPb.TravelParams \| null` | API TravelParams for the route. (*Optional*) |
| `leases` | `any` | Leases to show ownership of necessary resources. Will use the client's leases by default. (*Optional*) |
| `timesyncEndpoint` | `TimeSyncEndpoint \| null` | Use this endpoint for timesync fields. Will use the client's endpoint by default. (*Optional*) |
| `commandId` | `number \| null` | If not null, this continues an existing `GraphNavClient#navigateTo` command with the given ID. If null, a new commandId will be used. (*Optional*) |
| `destinationWaypointTformBodyGoal` | `SE2Pose \| null` | SE2Pose protobuf of an offset relative to the destination waypoint. (*Optional*) |
| `routeBlockedBehavior` | `graphNavPb.RouteFollowingParams.RouteBlockedBehavior` | Defines robot behavior when route is block. If None robot will reroute. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<number>`

### navigateToFull

```ts
navigateToFull(destinationWaypointId: string, cmdDuration: number, routeParams?: graphNavPb.RouteGenParams | null, travelParams?: graphNavPb.TravelParams | null, leases?: any, timesyncEndpoint?: TimeSyncEndpoint | null, commandId?: number | null, destinationWaypointTformBodyGoal?: SE2Pose | null, routeBlockedBehavior?: graphNavPb.RouteFollowingParams.RouteBlockedBehavior, args?: Object): Promise<graphNavPb.NavigateToResponse>
```

Identical to `GraphNavClient#navigateTo`, except will return the full NavigateToResponse.

| Parameter | Type | Description |
|---|---|---|
| `destinationWaypointId` | `string` | Waypoint id string for where to go to. |
| `cmdDuration` | `number` | Number of seconds the command can run for. |
| `routeParams` | `graphNavPb.RouteGenParams \| null` | API RouteGenParams for the route. (*Optional*) |
| `travelParams` | `graphNavPb.TravelParams \| null` | API TravelParams for the route. (*Optional*) |
| `leases` | `any` | Leases to show ownership of necessary resources. Will use the client's leases by default. (*Optional*) |
| `timesyncEndpoint` | `TimeSyncEndpoint \| null` | Use this endpoint for timesync fields. Will use the client's endpoint by default. (*Optional*) |
| `commandId` | `number \| null` | If not null, this continues an existing `GraphNavClient#navigateToFull` command with the given ID. If null, a new commandId will be used. (*Optional*) |
| `destinationWaypointTformBodyGoal` | `SE2Pose \| null` | SE2Pose protobuf of an offset relative to the destination waypoint. (*Optional*) |
| `routeBlockedBehavior` | `graphNavPb.RouteFollowingParams.RouteBlockedBehavior` | Defines robot behavior when route is block. If None robot will reroute. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<graphNavPb.NavigateToResponse>`

### navigateToAnchor

```ts
navigateToAnchor(seedTformGoal: SE3Pose, cmdDuration: number, routeParams?: graphNavPb.RouteGenParams | null, travelParams?: graphNavPb.TravelParams | null, leases?: any, timesyncEndpoint?: TimeSyncEndpoint | null, goalWaypointRtSeedEwrtSeedTolerance?: any, commandId?: any, gpsNavigationParams?: any, args?: Object): Promise<number>
```

Navigate to a pose in seed frame along a route chosen by the GraphNav service.

| Parameter | Type | Description |
|---|---|---|
| `seedTformGoal` | `SE3Pose` | SE3Pose protobuf of the goal pose in seed frame. |
| `cmdDuration` | `number` | Number of seconds the command can run for. |
| `routeParams` | `graphNavPb.RouteGenParams \| null` | API RouteGenParams for the route. (*Optional*) |
| `travelParams` | `graphNavPb.TravelParams \| null` | API TravelParams for the route. (*Optional*) |
| `leases` | `any` | Leases to show ownership of necessary resources. Will use the client's leases by default. (*Optional*) |
| `timesyncEndpoint` | `TimeSyncEndpoint \| null` | Use this endpoint for timesync fields. Will use the client's endpoint by default. (*Optional*) |
| `goalWaypointRtSeedEwrtSeedTolerance` | `any` | Vec3 protobuf of the tolerances for goal waypoint selection. (*Optional*) |
| `commandId` | `any` | If not null, this continues an existing navigate_to command with the given ID. If null, a new command_id will be used. (*Optional*) |
| `gpsNavigationParams` | `any` | API GPSNavigationParams. If not null, this will be interpreted as a GPS-based navigation command. seed_tform_goal will be ignored and whatever goal is passed in using the GPS navigation params will be used. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<number>`

### navigationFeedback

```ts
navigationFeedback(commandId?: number, args?: Object): Promise<graphNavPb.NavigationFeedbackResponse>
```

Returns the feedback corresponding to the active route follow command.

| Parameter | Type | Description |
|---|---|---|
| `commandId` | `number` | If blank, will return current command status. If filled out, will attempt to return that command status (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<graphNavPb.NavigationFeedbackResponse>`

### clearGraph

```ts
clearGraph(lease?: leasePb.Lease, args?: Object): Promise<graphNavPb.ClearGraphResponse>
```

Clears the local graph structure. Also erases any snapshots currently in RAM.

| Parameter | Type | Description |
|---|---|---|
| `lease` | `leasePb.Lease` | Leases to show ownership of necessary resources. Will use the client's leases by default. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<graphNavPb.ClearGraphResponse>`

### uploadGraph

```ts
uploadGraph(lease?: leasePb.Lease | null, graph?: mapPb.Graph | null, generateNewAnchoring?: boolean | null, replaceGraph?: boolean | null, args?: Object): Promise<graphNavPb.UploadGraphResponse>
```

Uploads a graph to the server and appends to the existing graph.

| Parameter | Type | Description |
|---|---|---|
| `lease` | `leasePb.Lease \| null` | Leases to show ownership of necessary resources. Will use the client's leases by default. (*Optional*) |
| `graph` | `mapPb.Graph \| null` | Graph protobuf that represents the map with waypoints and edges. (*Optional*) |
| `generateNewAnchoring` | `boolean \| null` | Whether to generate an (overwrite the) anchoring on upload. (*Optional*) |
| `replaceGraph` | `boolean \| null` | If true, replaces the existing graph with the new one rather than adding to it. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<graphNavPb.UploadGraphResponse>`

### uploadWaypointSnapshot

```ts
uploadWaypointSnapshot(waypointSnapshot: mapPb.WaypointSnapshot, lease?: leasePb.Lease | null, args?: Object): Promise<graphNavPb.UploadWaypointSnapshotResponse>
```

Uploads large waypoint snapshot as a stream for a particular waypoint.

| Parameter | Type | Description |
|---|---|---|
| `waypointSnapshot` | `mapPb.WaypointSnapshot` | WaypointSnapshot protobuf that will be stream-uploaded to the robot. |
| `lease` | `leasePb.Lease \| null` | Leases to show ownership of necessary resources. Will use the client's leases by default. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<graphNavPb.UploadWaypointSnapshotResponse>`

### uploadEdgeSnapshot

```ts
uploadEdgeSnapshot(edgeSnapshot: mapPb.EdgeSnapshot, lease?: leasePb.Lease | null, args?: Object): Promise<graphNavPb.UploadWaypointSnapshotResponse>
```

Uploads large edge snapshot as a stream for a particular edge.

| Parameter | Type | Description |
|---|---|---|
| `edgeSnapshot` | `mapPb.EdgeSnapshot` | EdgeSnapshot protobuf that will be stream-uploaded to the robot. |
| `lease` | `leasePb.Lease \| null` | Leases to show ownership of necessary resources. Will use the client's leases by default. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<graphNavPb.UploadWaypointSnapshotResponse>`

### uploadSnapshots

```ts
uploadSnapshots(snapshots: graphNavPb.UploadSnapshotsRequest.Snapshots, lease?: leasePb.Lease | null, args?: Object): Promise<graphNavPb.UploadSnapshotsResponse>
```

Uploads multiple snapshots as a stream.
graph_nav only processes complete Snapshots so large protos are discouraged;
any network interruption would require the data to be resent. Clients are
encouraged to send data in batches on the order of a few MB to strike a
balance between eliminating per-RPC overhead and recovering from errors.

| Parameter | Type | Description |
|---|---|---|
| `snapshots` | `graphNavPb.UploadSnapshotsRequest.Snapshots` | UploadSnapshotsRequest.Snapshots protobuf that will be stream-uploaded to the robot. |
| `lease` | `leasePb.Lease \| null` | Leases to show ownership of necessary resources. Will use the client's leases by default. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<graphNavPb.UploadSnapshotsResponse>`

### uploadSnapshot

```ts
uploadSnapshot(snapshots: graphNavPb.UploadSnapshotsRequest.Snapshots, lease?: leasePb.Lease | null, args?: Object): Promise<graphNavPb.UploadSnapshotsResponse>
```

Alias of uploadSnapshots(), the name of Python.

| Parameter | Type | Description |
|---|---|---|
| `snapshots` | `graphNavPb.UploadSnapshotsRequest.Snapshots` |  |
| `lease` | `leasePb.Lease \| null` | (*Optional*, default `null`) |
| `args` | `Object` | (*Optional*) |

**Returns** `Promise<graphNavPb.UploadSnapshotsResponse>`

### downloadGraph

```ts
downloadGraph(args?: Object): Promise<mapPb.Graph>
```

Downloads the graph from the server.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<mapPb.Graph>`

### downloadWaypointSnapshot

```ts
downloadWaypointSnapshot(waypointSnapshotId: string, downloadImages?: boolean, doNotDownloadPointCloud?: boolean, args?: Object): Promise<mapPb.WaypointSnapshot>
```

Download a specific waypoint snapshot with streaming from the server.

| Parameter | Type | Description |
|---|---|---|
| `waypointSnapshotId` | `string` | WaypointSnapshot string ID for which snapshot to download from robot. |
| `downloadImages` | `boolean` | Boolean indicating whether to include images in the download. (*Optional*) |
| `doNotDownloadPointCloud` | `boolean` | Boolean indicating if point cloud data should not be downloaded. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<mapPb.WaypointSnapshot>`

### downloadEdgeSnapshot

```ts
downloadEdgeSnapshot(edgeSnapshotId: string, args?: Object): Promise<mapPb.EdgeSnapshot>
```

Downloads a specific edge snapshot with streaming from the server.

| Parameter | Type | Description |
|---|---|---|
| `edgeSnapshotId` | `string` | EdgeSnapshot string ID for which snapshot to download from robot. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<mapPb.EdgeSnapshot>`

### writeGraphAndSnapshots

```ts
writeGraphAndSnapshots(directory: string): Promise<void>
```

Download the graph and snapshots from robot to the specified directory.

| Parameter | Type | Description |
|---|---|---|
| `directory` | `string` | Directory to write the graph and snapshot |

**Returns** `Promise<void>`

## GraphNavServiceResponseError

```ts
class GraphNavServiceResponseError extends ResponseError
```

General class of errors for the GraphNav Recording Service.

## UploadWaypointSnapshotError

```ts
class UploadWaypointSnapshotError extends GraphNavServiceResponseError
```

Errors related to uploading a waypoint snapshot

## UploadGraphError

```ts
class UploadGraphError extends GraphNavServiceResponseError
```

Errors related to uploading a graph.

## IncompatibleSensorsError

```ts
class IncompatibleSensorsError extends GraphNavServiceResponseError
```

The map was recorded with using a sensor configuration which is incompatible with the robot (for example, LIDAR
configuration).

## AreaCallbackMapError

```ts
class AreaCallbackMapError extends GraphNavServiceResponseError
```

The map specified an area callback that is not registered or is faulted.

## CannotModifyMapDuringRecordingError

```ts
class CannotModifyMapDuringRecordingError extends RobotStateError
```

Cannot clear the map during recording. Call StopRecording first.

## NoAnchoringError

```ts
class NoAnchoringError extends RouteError
```

There is no anchoring.

## InvalidPoseError

```ts
class InvalidPoseError extends RouteError
```

The requested pose is invalid, or known to be unachievable.

## InvalidGPSError

```ts
class InvalidGPSError extends RouteNavigationError
```

Cannot issue the GPS command because it is invalid.

## UnrecognizedCommandError

```ts
class UnrecognizedCommandError extends UnrecongizedCommandError
```

Happens when you try to continue a command that was either expired, or had an unrecognized id.

## RequestAbortedError

```ts
class RequestAbortedError extends GraphNavServiceResponseError
```

Request was aborted by the system.

## RequestFailedError

```ts
class RequestFailedError extends GraphNavServiceResponseError
```

Request failed to complete by the system.

## RobotFaultedError

```ts
class RobotFaultedError extends GraphNavServiceResponseError
```

Robot is experiencing a fault condition that prevents localization.

## UnknownMapInformationError

```ts
class UnknownMapInformationError extends GraphNavServiceResponseError
```

The given map information (waypoints,edges,routes) is unknown by the system.

## TimeError

```ts
class TimeError extends GraphNavServiceResponseError
```

Errors associated with timestamps and time sync.

## CommandExpiredError

```ts
class CommandExpiredError extends TimeError
```

The command was received after its end time had already passed.

## NoTimeSyncError

```ts
class NoTimeSyncError extends TimeError
```

Client has not performed timesync with robot.

## TooDistantError

```ts
class TooDistantError extends TimeError
```

The command was too far in the future.

## RobotStateError

```ts
class RobotStateError extends GraphNavServiceResponseError
```

Errors associated with the current state of the robot.

## IsRecordingError

```ts
class IsRecordingError extends RobotStateError
```

Cannot navigate a route while recording a map.

## RobotImpairedError

```ts
class RobotImpairedError extends RobotStateError
```

Robot has a critical perception or behavior fault and cannot navigate.

## RouteError

```ts
class RouteError extends GraphNavServiceResponseError
```

Errors associated with the specified route.

## ConstraintFaultError

```ts
class ConstraintFaultError extends RouteError
```

Route parameters contained a constraint fault.

## InvalidEdgeError

```ts
class InvalidEdgeError extends RouteError
```

One or more edges do not connect to expected waypoints.

## UnkownRouteElementsError

```ts
class UnkownRouteElementsError extends RouteError
```

Deprecated name (misspelled) of Python, the parent class of UnknownRouteElementsError.

## UnknownRouteElementsError

```ts
class UnknownRouteElementsError extends UnkownRouteElementsError
```

One or more waypoints/edges are not in the map.

## NoPathError

```ts
class NoPathError extends RouteError
```

There is no path to the specified waypoint.

## UnknownWaypointError

```ts
class UnknownWaypointError extends RouteError
```

One or more waypoints are not in the map.

## RouteNavigationError

```ts
class RouteNavigationError extends GraphNavServiceResponseError
```

Errors related to how the robot navigates the route.

## FeatureDesertError

```ts
class FeatureDesertError extends RouteNavigationError
```

Route contained too many waypoints with low-quality features.

## RouteNotUpdatingError

```ts
class RouteNotUpdatingError extends RouteNavigationError
```

Graph nav was unable to update and follow the specified route.

## RobotLostError

```ts
class RobotLostError extends RouteNavigationError
```

Cannot issue a navigation request when the robot is already lost.

## RobotNotLocalizedToRouteError

```ts
class RobotNotLocalizedToRouteError extends RouteNavigationError
```

The current localization doesn't refer to any waypoint in the route (possibly uninitialized localization).

## RobotStuckError

```ts
class RobotStuckError extends RouteNavigationError
```

The robot is stuck or unable to find a way forward. Resend the command with a new ID, or send a different command to
try again.

## UnrecongizedCommandError

```ts
class UnrecongizedCommandError extends RouteNavigationError
```

Happens when you try to continue a command that was either expired, or had an unrecognized id.

## MapTooLargeLicenseError

```ts
class MapTooLargeLicenseError extends UploadGraphError
```

The map is too large for the license on the robot.

## InvalidGraphError

```ts
class InvalidGraphError extends UploadGraphError
```

The graph is invalid topologically, e.g. missing waypoints referenced by edges.

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `navPb` | `spot-sdk-js/src/bosdyn/api/graph_nav/nav_pb` |
| `graphNavPb` | `spot-sdk-js/src/bosdyn/api/graph_nav/graph_nav_pb` |
| `leasePb` | `spot-sdk-js/src/bosdyn/api/lease_pb` |
| `mapPb` | `spot-sdk-js/src/bosdyn/api/graph_nav/map_pb` |

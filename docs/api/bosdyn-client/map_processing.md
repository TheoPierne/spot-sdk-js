# bosdyn-client/map_processing

For clients of the graph_nav map processing service.

```js
const { MapProcessingServiceClient, MapProcessingServiceResponseError, MissingSnapshotsError, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { InvalidGraphError } = require('spot-sdk-js/src/bosdyn-client/map_processing');
```

| Export | Kind | Description |
|---|---|---|
| [`MapProcessingServiceClient`](#mapprocessingserviceclient) | Class | Client for the GraphNav map processing service. |
| [`MapProcessingServiceResponseError`](#mapprocessingserviceresponseerror) | Class | General class of errors for the GraphNav map processing service. |
| [`MissingSnapshotsError`](#missingsnapshotserror) | Class | The uploaded map has missing waypoint snapshots. |
| [`OptimizationFailureError`](#optimizationfailureerror) | Class | The anchoring optimization failed. |
| [`InvalidGraphError`](#invalidgrapherror) | Class | The graph is invalid topologically, for example containing missing waypoints referenced by edges. |
| [`InvalidParamsError`](#invalidparamserror) | Class | The parameters passed to the optimizer do not make sense (e.g. |
| [`MaxIterationsError`](#maxiterationserror) | Class | The optimizer reached the maximum number of iterations before converging. |
| [`MaxTimeError`](#maxtimeerror) | Class | The optimizer timed out before converging. |
| [`InvalidHintsError`](#invalidhintserror) | Class | One or more of the hints passed in to the optimizer are invalid (do not correspond to real waypoints or objects). |
| [`InvalidGravityAlignmentError`](#invalidgravityalignmenterror) | Class | One or more anchoring hints disagrees with gravity. |
| [`ConstraintViolationError`](#constraintviolationerror) | Class | One or more anchors were moved outside of the desired constraints. |
| [`MapModifiedError`](#mapmodifiederror) | Class | The map was modified on the server by another client during processing. |

## MapProcessingServiceClient

```ts
class MapProcessingServiceClient extends BaseClient<mapProcessing.MapProcessingServiceClient>
```

Client for the GraphNav map processing service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'map-processing-service'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.graph_nav.MapProcessingService'`. |

### processTopology

```ts
processTopology(params: mapProcessingPb.ProcessTopologyRequest.Params, modifyMapOnServer: boolean, args?: Object): Promise<mapProcessingPb.ProcessTopologyResponse>
```

Process the topology of the map on the server, closing loops and producing a consistent topology.

| Parameter | Type | Description |
|---|---|---|
| `params` | `mapProcessingPb.ProcessTopologyRequest.Params` | A ProcessTopologyRequest.Params object |
| `modifyMapOnServer` | `boolean` | if true, the map will be modified on the server. If false, the subgraph returned by this function should be uploaded back to the server if it is to be reused. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<mapProcessingPb.ProcessTopologyResponse>`

### processAnchoring

```ts
processAnchoring(params: mapProcessingPb.ProcessAnchoringRequest.Params, modifyAnchoringOnServer: boolean, streamIntermediateResults: boolean, initialHint?: mapProcessingPb.AnchoringHint | null, applyGpsResults?: boolean, args?: Object): Promise<mapProcessingPb.ProcessAnchoringResponse>
```

Process the anchoring of the map on the server, producing a metrically consistent anchoring.

| Parameter | Type | Description |
|---|---|---|
| `params` | `mapProcessingPb.ProcessAnchoringRequest.Params` | a ProcessAnchoringRequest.Params object |
| `modifyAnchoringOnServer` | `boolean` | if true, the map will be modified on the server. If false, the anchoring returned by this function should be uploaded back to the server if it is to be reused. |
| `streamIntermediateResults` | `boolean` | if true, anchorings from earlier optimizer iterations may be included in the response. If false, only the last iteration will be returned. |
| `initialHint` | `mapProcessingPb.AnchoringHint \| null` | Initial guess at some number of waypoints and world objects and their anchorings. This field is an AnchoringHint object (see map_processing.proto) (*Optional*, default `null`) |
| `applyGpsResults` | `boolean` | if true, the annotations of waypoints in the graph will be modified to include the pose of each waypoint in a GPS centered frame, if the map has GPS (see map_processing.proto) (*Optional*, default `false`) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<mapProcessingPb.ProcessAnchoringResponse>`

## MapProcessingServiceResponseError

```ts
class MapProcessingServiceResponseError extends ResponseError
```

General class of errors for the GraphNav map processing service.

## MissingSnapshotsError

```ts
class MissingSnapshotsError extends MapProcessingServiceResponseError
```

The uploaded map has missing waypoint snapshots.

## OptimizationFailureError

```ts
class OptimizationFailureError extends MapProcessingServiceResponseError
```

The anchoring optimization failed.

## InvalidGraphError

```ts
class InvalidGraphError extends MapProcessingServiceResponseError
```

The graph is invalid topologically, for example containing missing waypoints referenced by edges.

## InvalidParamsError

```ts
class InvalidParamsError extends MapProcessingServiceResponseError
```

The parameters passed to the optimizer do not make sense (e.g. negative weights).

## MaxIterationsError

```ts
class MaxIterationsError extends MapProcessingServiceResponseError
```

The optimizer reached the maximum number of iterations before converging.

## MaxTimeError

```ts
class MaxTimeError extends MapProcessingServiceResponseError
```

The optimizer timed out before converging.

## InvalidHintsError

```ts
class InvalidHintsError extends MapProcessingServiceResponseError
```

One or more of the hints passed in to the optimizer are invalid (do not correspond to real waypoints or objects).

## InvalidGravityAlignmentError

```ts
class InvalidGravityAlignmentError extends MapProcessingServiceResponseError
```

One or more anchoring hints disagrees with gravity. Ensure the orientation of any hints is correct.

## ConstraintViolationError

```ts
class ConstraintViolationError extends MapProcessingServiceResponseError
```

One or more anchors were moved outside of the desired constraints.

## MapModifiedError

```ts
class MapModifiedError extends MapProcessingServiceResponseError
```

The map was modified on the server by another client during processing. Please try again.

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `mapProcessing` | `spot-sdk-js/src/bosdyn/api/graph_nav/map_processing_service_grpc_pb` |
| `mapProcessingPb` | `spot-sdk-js/src/bosdyn/api/graph_nav/map_processing_pb` |

# bosdyn-client/ray_cast

Client implementation of the RayCast service.

```js
const { RayCastClient, RayCastResponseError, InvalidIntersectionTypeError } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { InvalidRequestError, UnknownFrameError } = require('spot-sdk-js/src/bosdyn-client/ray_cast');
```

| Export | Kind | Description |
|---|---|---|
| [`RayCastClient`](#raycastclient) | Class | A client that allows arbitrary rays to be queried against the robot. |
| [`RayCastResponseError`](#raycastresponseerror) | Class | General class of errors for ray cast service. |
| [`InvalidRequestError`](#invalidrequesterror) | Class | Request was invalid / malformed in some way. |
| [`InvalidIntersectionTypeError`](#invalidintersectiontypeerror) | Class | Requested source not valid for current robot configuration. |
| [`UnknownFrameError`](#unknownframeerror) | Class | The frame_name for a command was not a known frame. |

## RayCastClient

```ts
class RayCastClient extends BaseClient<RayCastServiceClient>
```

A client that allows arbitrary rays to be queried against the robot.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultAuthority` | `string` | Static. Value: `'ray-cast.spot.robot'`. |
| `defaultServiceName` | `string` | Static. Value: `'ray-cast'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.RayCastService'`. |

### raycast

```ts
raycast(rayOrigin: number[], rayDirection: number[], raycastTypes: any[], minDistance?: number | null, frameName?: string | null, args?: Object): Promise<rayCastPb.RaycastResponse>
```

Requests robot to intersect ray against the environment it built up.

| Parameter | Type | Description |
|---|---|---|
| `rayOrigin` | `number[]` | [x, y, z] position of the ray in the specified frame. |
| `rayDirection` | `number[]` | [x, y, z] vector denoting the direction of the ray in the specified frame. |
| `raycastTypes` | `any[]` | array of 0 or more raycast types. 0 will cast into all sources. |
| `minDistance` | `number \| null` | a positive real value denoting how far (meters) behind a ray an intersection can occur. (*Optional*) |
| `frameName` | `string \| null` | the frame the ray is in. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<rayCastPb.RaycastResponse>`

## RayCastResponseError

```ts
class RayCastResponseError extends ResponseError
```

General class of errors for ray cast service.

## InvalidRequestError

```ts
class InvalidRequestError extends RayCastResponseError
```

Request was invalid / malformed in some way.

## InvalidIntersectionTypeError

```ts
class InvalidIntersectionTypeError extends RayCastResponseError
```

Requested source not valid for current robot configuration.

## UnknownFrameError

```ts
class UnknownFrameError extends RayCastResponseError
```

The frame_name for a command was not a known frame.

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `rayCastPb` | `spot-sdk-js/src/bosdyn/api/ray_cast_pb` |

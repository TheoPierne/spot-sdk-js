# bosdyn-client/world_object

For clients to use the world object service

```js
const { WorldObjectClient, makeAddWorldObjectReq, makeDeleteWorldObjectReq, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`WorldObjectClient`](#worldobjectclient) | Class | Client for World Object service. |
| [`makeAddWorldObjectReq`](#makeaddworldobjectreq) | Function | Add a world object to the scene. |
| [`makeDeleteWorldObjectReq`](#makedeleteworldobjectreq) | Function | Delete a world object from the scene. |
| [`makeChangeWorldObjectReq`](#makechangeworldobjectreq) | Function | Change/update an existing world object in the scene. |
| [`sendAddMutationRequests`](#sendaddmutationrequests) | Function | Create and send an "add" mutation request for each world object in an array. |
| [`sendDeleteMutationRequests`](#senddeletemutationrequests) | Function | Create and send a "delete" mutation request for each world object successfully identified from a given list of object id's. |

## WorldObjectClient

```ts
class WorldObjectClient extends BaseClient<WorldObjectServiceClient>
```

Client for World Object service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'world-objects'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.WorldObjectService'`. |
| `timesyncEndpoint` | `any` | Accessor for timesync-endpoint that is grabbed via 'updateFrom()'. Read-only. |

### listWorldObjects

```ts
listWorldObjects(objectType?: Array<worldObjectPb.WorldObjectType> | null, timeStartPoint?: number | null, args?: Object): Promise<worldObjectPb.ListWorldObjectResponse>
```

Get a list of World Objects.

| Parameter | Type | Description |
|---|---|---|
| `objectType` | `Array<worldObjectPb.WorldObjectType> \| null` | Specific types to include in the response, all other types will be filtered out. (*Optional*) |
| `timeStartPoint` | `number \| null` | A client time in seconds since the epoch, like Python (e.g. nowSec(), not Date.now()), to filter objects in the response. All objects will have a timestamp after this time. (*Optional*) |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<worldObjectPb.ListWorldObjectResponse>`: The response message, which includes the filtered list of all world objects.

**Throws**

- `RpcError` Problem communicating with the robot.
- `NoTimeSyncError` Couldn't convert the timestamp into robot time.

### mutateWorldObjects

```ts
mutateWorldObjects(mutationReq: worldObjectPb.MutateWorldObjectRequest, args?: Object): Promise<worldObjectPb.MutateWorldObjectResponse>
```

Mutate (add, change, delete) world objects.

| Parameter | Type | Description |
|---|---|---|
| `mutationReq` | `worldObjectPb.MutateWorldObjectRequest` | The request including the object to be mutated and the type of mutation. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<worldObjectPb.MutateWorldObjectResponse>`: The response message, which includes the filtered list of all world objects.

**Throws**

- `RpcError` Problem communicating with the robot.
- `NoTimeSyncError` Couldn't convert the timestamp into robot time.

### drawSphere

```ts
drawSphere(name: string, xRtFrameName: number, yRtFrameName: number, zRtFrameName: number, frameName: string, radius?: number, rgba?: number[], listObjectsNow?: boolean): Promise<worldObjectPb.MutateWorldObjectResponse>
```

Create a drawable sphere world object that will be sent to the world object service
with a mutation request.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The human-readable name of the world object. |
| `xRtFrameName` | `number` | The coordinate position (x,y,z) of the drawable sphere. |
| `yRtFrameName` | `number` | The coordinate position (x,y,z) of the drawable sphere. |
| `zRtFrameName` | `number` | The coordinate position (x,y,z) of the drawable sphere. |
| `frameName` | `string` | The frame in which the sphere's position is described. |
| `radius` | `number` | The radius for the drawn sphere. (*Optional*) |
| `rgba` | `number[]` | The RGBA color, where RGB are int values in [0,255] and A is a float in [0,1]. (*Optional*) |
| `listObjectsNow` | `boolean` | Should the ListWorldObjects request be made after creating the sphere world object. (*Optional*) |

**Returns** `Promise<worldObjectPb.MutateWorldObjectResponse>`

### drawOrientedBoundingBox

```ts
drawOrientedBoundingBox(name: string, drawableBoxFrameName: string, frameName: string, frameNameTformDrawableBox: geometryPb.SE3Pose | SE3Pose, sizeEwrtBoxVec3: geometryPb.Vec3 | number[], rgba?: number[], wireframe?: boolean, listObjectsNow?: boolean): Promise<void>
```

Create a drawable 3D box world object that will be sent to the world object service
with a mutation request.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The human-readable name of the world object. |
| `drawableBoxFrameName` | `string` | The frame name for the drawable box frame. |
| `frameName` | `string` | The frame name which the drawable box is described relative to. |
| `frameNameTformDrawableBox` | `geometryPb.SE3Pose \| SE3Pose` | The SE3 pose of the drawable box relative to frame name. |
| `sizeEwrtBoxVec3` | `geometryPb.Vec3 \| number[]` | The size of the box (x,y,z) expressed with respect to the drawable box frame: a Vec3 like Python, or [x, y, z] (an array was set as the Vec3, which could not be serialized). |
| `rgba` | `number[]` | The RGBA color, where RGB are int values in [0,255] and A is a float in [0,1]. (*Optional*) |
| `wireframe` | `boolean` | Should this be drawn as a wireframe [wireframe=true] or a solid object [wireframe=false]. (*Optional*) |
| `listObjectsNow` | `boolean` | Should the ListWorldObjects request be made after creating the sphere world object. (*Optional*) |

**Returns** `Promise<void>`

## makeAddWorldObjectReq

```ts
export function makeAddWorldObjectReq(worldObj: worldObjectPb.WorldObject): worldObjectPb.MutateWorldObjectRequest
```

Add a world object to the scene.

| Parameter | Type | Description |
|---|---|---|
| `worldObj` | `worldObjectPb.WorldObject` | The world object to be added into the robot's perception scene. |

**Returns** `worldObjectPb.MutateWorldObjectRequest`: A MutateWorldObjectRequest where the action is to "add" the object to the scene.

## makeDeleteWorldObjectReq

```ts
export function makeDeleteWorldObjectReq(worldObj: worldObjectPb.WorldObject): worldObjectPb.MutateWorldObjectRequest
```

Delete a world object from the scene.

| Parameter | Type | Description |
|---|---|---|
| `worldObj` | `worldObjectPb.WorldObject` | The world object to be delete in the robot's perception scene. The object must be a client-added object and have the correct world object id returned by the service after adding the object. |

**Returns** `worldObjectPb.MutateWorldObjectRequest`: A MutateWorldObjectRequest where the action is to "delete" the object to the scene.

## makeChangeWorldObjectReq

```ts
export function makeChangeWorldObjectReq(worldObj: worldObjectPb.WorldObject): worldObjectPb.MutateWorldObjectRequest
```

Change/update an existing world object in the scene.

| Parameter | Type | Description |
|---|---|---|
| `worldObj` | `worldObjectPb.WorldObject` | The world object to be changed/updated in the robot's perception scene. The object must be a client-added object and have the correct world object id returned by the service after adding the object. |

**Returns** `worldObjectPb.MutateWorldObjectRequest`: A MutateWorldObjectRequest where the action is to "change" the object to the scene.

## sendAddMutationRequests

```ts
export function sendAddMutationRequests(worldObjectClient: WorldObjectClient, worldObjectArray: any[]): Promise<any[]>
```

Create and send an "add" mutation request for each world object in an array. Return a matching
array of the object id's that are assigned when the object is created, so that each object we add
can be identified and removed individually (if desired) later.

| Parameter | Type | Description |
|---|---|---|
| `worldObjectClient` | `WorldObjectClient` | Client for World Object service. |
| `worldObjectArray` | `any[]` | List of object id's. |

**Returns** `Promise<any[]>`

## sendDeleteMutationRequests

```ts
export function sendDeleteMutationRequests(worldObjectClient: WorldObjectClient, deleteObjectIdArray: any[]): Promise<void>
```

Create and send a "delete" mutation request for each world object successfully identified from a
given list of object id's.

| Parameter | Type | Description |
|---|---|---|
| `worldObjectClient` | `WorldObjectClient` | Client for World Object service. |
| `deleteObjectIdArray` | `any[]` | List of object id's to send delete requests for. |

**Returns** `Promise<void>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `worldObjectPb` | `spot-sdk-js/src/bosdyn/api/world_object_pb` |
| `geometryPb` | `spot-sdk-js/src/bosdyn/api/geometry_pb` |

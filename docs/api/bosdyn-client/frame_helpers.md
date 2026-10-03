# bosdyn-client/frame_helpers

Helpers for the frame trees of the robot state and of the images: the names of the frames, the transforms
between two frames, and the validation of a FrameTreeSnapshot.

```js
const { validateFrameTreeSnapshot, getATformB, getSe2ATformB, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`validateFrameTreeSnapshot`](#validateframetreesnapshot) | Function | Validates that a FrameTreeSnapshot is well-formed. |
| [`getATformB`](#getatformb) | Function | Get the SE(3) pose representing the transform between frame_a and frame_b. |
| [`getSe2ATformB`](#getse2atformb) | Function | Get the SE(2) pose representing the transform between frameA and frameB. |
| [`expressSe2VelocityInNewFrame`](#expressse2velocityinnewframe) | Function | Convert the SE2 Velocity in frame b to a SE2 Velocity in frame c using the frame tree snapshot. |
| [`expressSe3VelocityInNewFrame`](#expressse3velocityinnewframe) | Function | Convert the SE(3) Velocity in frame b to an SE(3) Velocity in frame c using the frame tree snapshot. |
| [`getOdomTformBody`](#getodomtformbody) | Function | Get the transformation between "odom" frame and "body" frame from the FrameTreeSnapshot. |
| [`getVisionTformBody`](#getvisiontformbody) | Function | Get the transformation between "vision" frame and "body" frame from the FrameTreeSnapshot. |
| [`addEdgeToTree`](#addedgetotree) | Function | Appends a child/parent and the transform to the FrameTreeSnapshot. |
| [`getFrameNames`](#getframenames) | Function | Returns an array of all known child or parent frames in the FrameTreeSnapshot |
| [`isGravityAlignedFrameName`](#isgravityalignedframename) | Function | Checks if the string frame name is a known gravity aligned frame. |
| [`VISION_FRAME_NAME`](#constants) | Constant |  |
| [`BODY_FRAME_NAME`](#constants) | Constant |  |
| [`GRAV_ALIGNED_BODY_FRAME_NAME`](#constants) | Constant |  |
| [`ODOM_FRAME_NAME`](#constants) | Constant |  |
| [`SEED_FRAME_NAME`](#constants) | Constant |  |
| [`GROUND_PLANE_FRAME_NAME`](#constants) | Constant |  |
| [`HAND_FRAME_NAME`](#constants) | Constant |  |
| [`UNKNOWN_FRAME_NAME`](#constants) | Constant |  |
| [`RAYCAST_FRAME_NAME`](#constants) | Constant |  |
| [`TOOL_FRAME_NAME`](#constants) | Constant |  |
| [`DESIRED_TOOL_FRAME_NAME`](#constants) | Constant |  |
| [`TASK_FRAME_NAME`](#constants) | Constant |  |
| [`DESIRED_TOOL_AT_END_FRAME_NAME`](#constants) | Constant |  |
| [`MEASURED_TOOL_AT_START_FRAME_NAME`](#constants) | Constant |  |
| [`GAZE_TARGET_FRAME_NAME`](#constants) | Constant |  |
| [`FRONT_LEFT_FOOT_FRAME_NAME`](#constants) | Constant |  |
| [`FRONT_RIGHT_FOOT_FRAME_NAME`](#constants) | Constant |  |
| [`HIND_LEFT_FOOT_FRAME_NAME`](#constants) | Constant |  |
| [`HIND_RIGHT_FOOT_FRAME_NAME`](#constants) | Constant |  |
| [`FOOT_FRAME_NAMES`](#constants) | Constant |  |
| [`WR1_FRAME_NAME`](#constants) | Constant |  |
| [`WAYPOINT_FRAME_NAME`](#constants) | Constant |  |
| [`ValidateFrameTreeError`](#validateframetreeerror) | Class |  |
| [`ValidateFrameTreeUnknownFrameError`](#validateframetreeunknownframeerror) | Class |  |
| [`ValidateFrameTreeCycleError`](#validateframetreecycleerror) | Class |  |
| [`ValidateFrameTreeDisjointError`](#validateframetreedisjointerror) | Class |  |
| [`GenerateTreeError`](#generatetreeerror) | Class |  |
| [`ChildFrameInTree`](#childframeintree) | Class |  |

## ValidateFrameTreeError

```ts
class ValidateFrameTreeError extends Error
```

### new ValidateFrameTreeError

```ts
constructor(msg: any)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |

## ValidateFrameTreeUnknownFrameError

```ts
class ValidateFrameTreeUnknownFrameError extends ValidateFrameTreeError
```

## ValidateFrameTreeCycleError

```ts
class ValidateFrameTreeCycleError extends ValidateFrameTreeError
```

## ValidateFrameTreeDisjointError

```ts
class ValidateFrameTreeDisjointError extends ValidateFrameTreeError
```

## GenerateTreeError

```ts
class GenerateTreeError extends Error
```

### new GenerateTreeError

```ts
constructor(msg: any)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |

## ChildFrameInTree

```ts
class ChildFrameInTree extends GenerateTreeError
```

## validateFrameTreeSnapshot

```ts
export function validateFrameTreeSnapshot(frameTreeSnapshot: geometryPb.FrameTreeSnapshot): boolean
```

Validates that a FrameTreeSnapshot is well-formed.

A FrameTreeSnapshot is expected to be a single tree, but poorly written
services can misuse the syntax to construct other data structures. The
syntax prevents DAGs from forming, but the data structure could

Valid FrameTrees must be a single rooted tree. However, the general format of
repeated edges may not actually be valid - there could be cycles, disjoint
trees, or missing edges in the actual data structure.

| Parameter | Type | Description |
|---|---|---|
| `frameTreeSnapshot` | `geometryPb.FrameTreeSnapshot` | A snapshot of the data. |

**Returns** `boolean`: True if valid

**Throws**

- `ValidateFrameTreeError` ValidateFrameTreeError in a number of cases: Empty tree, invalid frame names in the tree, missing transforms relating the two nodes, cycles in the tree, the tree is actually a DAG, and disconnected trees.

## getATformB

```ts
export function getATformB(frameTreeSnapshot: geometryPb.FrameTreeSnapshot, frameA: string, frameB: string, validate?: boolean): mathHelpers.SE3Pose | null
```

Get the SE(3) pose representing the transform between frame_a and frame_b.

Using frameTreeSnapshot, find the mathHelpers.SE3Pose to transform geometry from
frameA's representation to frameB's.

| Parameter | Type | Description |
|---|---|---|
| `frameTreeSnapshot` | `geometryPb.FrameTreeSnapshot` | object representing the childToParentEdgeMap |
| `frameA` | `string` | The first frame to check in. |
| `frameB` | `string` | The second frame to check in. |
| `validate` | `boolean` | If the FrameTreeSnapshot should be checked for a valid tree structure (*Optional*, default `true`) |

**Returns** `mathHelpers.SE3Pose \| null`

## getSe2ATformB

```ts
export function getSe2ATformB(frameTreeSnapshot: Object, frameA: string, frameB: string, validate?: boolean): mathHelpers.SE2Pose | null
```

Get the SE(2) pose representing the transform between frameA and frameB.

Using frameTreeSnapshot, find the mathHelpers.SE2Pose to transform geometry from
frameA's representation to frameB's.

| Parameter | Type | Description |
|---|---|---|
| `frameTreeSnapshot` | `Object` | object representing the child_to_parent_edge_map |
| `frameA` | `string` | The first frame representation |
| `frameB` | `string` | The second frame representation |
| `validate` | `boolean` | If the FrameTreeSnapshot should be checked for a valid tree structure (*Optional*, default `true`) |

**Returns** `mathHelpers.SE2Pose \| null`

## expressSe2VelocityInNewFrame

```ts
export function expressSe2VelocityInNewFrame(frameTreeSnapshot: Object, frameB: string, frameC: string, velOfAInB: mathHelpers.SE2Velocity, validate?: boolean): mathHelpers.SE2Velocity | null
```

Convert the SE2 Velocity in frame b to a SE2 Velocity in frame c using
the frame tree snapshot.

| Parameter | Type | Description |
|---|---|---|
| `frameTreeSnapshot` | `Object` | object representing the child_to_parent_edge_map |
| `frameB` | `string` | The first frame representation |
| `frameC` | `string` | The second frame representation |
| `velOfAInB` | `mathHelpers.SE2Velocity` | SE2 Velocity in frameB |
| `validate` | `boolean` | If the FrameTreeSnapshot should be checked for a valid tree structure (*Optional*, default `true`) |

**Returns** `mathHelpers.SE2Velocity \| null`

## expressSe3VelocityInNewFrame

```ts
export function expressSe3VelocityInNewFrame(frameTreeSnapshot: Object, frameB: string, frameC: string, velOfAInB: mathHelpers.SE3Velocity, validate?: boolean): mathHelpers.SE3Velocity | null
```

Convert the SE(3) Velocity in frame b to an SE(3) Velocity in frame c using
the frame tree snapshot.

| Parameter | Type | Description |
|---|---|---|
| `frameTreeSnapshot` | `Object` | object representing the child_to_parent_edge_map |
| `frameB` | `string` | The first frame representation |
| `frameC` | `string` | The second frame representation |
| `velOfAInB` | `mathHelpers.SE3Velocity` | SE3 Velocity in frameB |
| `validate` | `boolean` | If the FrameTreeSnapshot should be checked for a valid tree structure (*Optional*, default `true`) |

**Returns** `mathHelpers.SE3Velocity \| null`

## getOdomTformBody

```ts
export function getOdomTformBody(frameTreeSnapshot: geometryPb.FrameTreeSnapshot): mathHelpers.SE3Pose | null
```

Get the transformation between "odom" frame and "body" frame from the FrameTreeSnapshot.

| Parameter | Type | Description |
|---|---|---|
| `frameTreeSnapshot` | `geometryPb.FrameTreeSnapshot` | object representing the child_to_parent_edge_map |

**Returns** `mathHelpers.SE3Pose \| null`

## getVisionTformBody

```ts
export function getVisionTformBody(frameTreeSnapshot: geometryPb.FrameTreeSnapshot): mathHelpers.SE3Pose | null
```

Get the transformation between "vision" frame and "body" frame from the FrameTreeSnapshot.

| Parameter | Type | Description |
|---|---|---|
| `frameTreeSnapshot` | `geometryPb.FrameTreeSnapshot` | object representing the child_to_parent_edge_map |

**Returns** `mathHelpers.SE3Pose \| null`

## addEdgeToTree

```ts
export function addEdgeToTree(frameTreeSnapshot: geometryPb.FrameTreeSnapshot, parentTformChild: geometryPb.SE3Pose | mathHelpers.SE3Pose, parentFrameName: string, childFrameName: string): geometryPb.FrameTreeSnapshot
```

Appends a child/parent and the transform to the FrameTreeSnapshot.

| Parameter | Type | Description |
|---|---|---|
| `frameTreeSnapshot` | `geometryPb.FrameTreeSnapshot` | Object representing the child_to_parent_edge_map |
| `parentTformChild` | `geometryPb.SE3Pose \| mathHelpers.SE3Pose` | The SE3Pose to add to the frameTreeSnapshot: a proto like Python, or a math_helpers SE3Pose (it was set as the proto, which could not be serialized). |
| `parentFrameName` | `string` | The parent name. |
| `childFrameName` | `string` | The child name. |

**Returns** `geometryPb.FrameTreeSnapshot`

**Throws**

- `ChildFrameInTree` The child frame is already in the tree.

## getFrameNames

```ts
export function getFrameNames(frameTreeSnapshot: geometryPb.FrameTreeSnapshot): string[]
```

Returns an array of all known child or parent frames in the FrameTreeSnapshot

| Parameter | Type | Description |
|---|---|---|
| `frameTreeSnapshot` | `geometryPb.FrameTreeSnapshot` | Object representing the child_to_parent_edge_map |

**Returns** `string[]`

## isGravityAlignedFrameName

```ts
export function isGravityAlignedFrameName(frameName: string): boolean
```

Checks if the string frame name is a known gravity aligned frame.

| Parameter | Type | Description |
|---|---|---|
| `frameName` | `string` | The frame name to check in. |

**Returns** `boolean`

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `VISION_FRAME_NAME` | `'vision'` |  |
| `BODY_FRAME_NAME` | `'body'` |  |
| `GRAV_ALIGNED_BODY_FRAME_NAME` | `'flat_body'` |  |
| `ODOM_FRAME_NAME` | `'odom'` |  |
| `SEED_FRAME_NAME` | `'seed'` |  |
| `GROUND_PLANE_FRAME_NAME` | `'gpe'` |  |
| `HAND_FRAME_NAME` | `'hand'` |  |
| `UNKNOWN_FRAME_NAME` | `'unknown'` |  |
| `RAYCAST_FRAME_NAME` | `'walkto_raycast_intersection'` |  |
| `TOOL_FRAME_NAME` | `'tool'` |  |
| `DESIRED_TOOL_FRAME_NAME` | `'desired_tool'` |  |
| `TASK_FRAME_NAME` | `'task'` |  |
| `DESIRED_TOOL_AT_END_FRAME_NAME` | `'desired_tool_at_end'` |  |
| `MEASURED_TOOL_AT_START_FRAME_NAME` | `'measured_tool_at_start'` |  |
| `GAZE_TARGET_FRAME_NAME` | `'gaze_target'` |  |
| `FRONT_LEFT_FOOT_FRAME_NAME` | `'fl_foot'` |  |
| `FRONT_RIGHT_FOOT_FRAME_NAME` | `'fr_foot'` |  |
| `HIND_LEFT_FOOT_FRAME_NAME` | `'hl_foot'` |  |
| `HIND_RIGHT_FOOT_FRAME_NAME` | `'hr_foot'` |  |
| `FOOT_FRAME_NAMES` | `string[]` |  |
| `WR1_FRAME_NAME` | `'arm0.link_wr1'` |  |
| `WAYPOINT_FRAME_NAME` | `'waypoint'` |  |

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `geometryPb` | `spot-sdk-js/src/bosdyn/api/geometry_pb` |

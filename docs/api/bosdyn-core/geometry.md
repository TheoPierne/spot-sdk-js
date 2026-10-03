# bosdyn-core/geometry

Euler angles in the yaw, roll, pitch (ZXY) order, and their conversions from and to quaternions.

```js
const { EulerZXY } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`EulerZXY`](#eulerzxy) | Class | Orientation represented by Yaw('Z')-Roll('X')-Pitch('Y') order Euler angles. |

## EulerZXY

```ts
class EulerZXY
```

Orientation represented by Yaw('Z')-Roll('X')-Pitch('Y') order Euler angles. Each angle is expressed in radians.

### new EulerZXY

```ts
constructor(yaw?: number, roll?: number, pitch?: number)
```

| Parameter | Type | Description |
|---|---|---|
| `yaw` | `number` | (*Optional*) |
| `roll` | `number` | (*Optional*) |
| `pitch` | `number` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `yaw` | `number` |  |
| `roll` | `number` |  |
| `pitch` | `number` |  |

### toQuaternion

```ts
toQuaternion(): geometryPb.Quaternion
```

Transform an Euler ZXY to a quaternion, with the formulas of Python.

**Returns** `geometryPb.Quaternion`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `geometryPb` | `spot-sdk-js/src/bosdyn/api/geometry_pb` |

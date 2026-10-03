# bosdyn-client/math_helpers

Math helpers for the geometry of the robot: vectors, quaternions, SE(2) and SE(3) poses and velocities, and
their conversions from and to the protobuf messages.

```js
const { Vec2, Vec3, SE2Pose, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`Vec2`](#vec2) | Class | Class representing a two-dimensional vector. |
| [`Vec3`](#vec3) | Class | Class representing a three-dimensional vector. |
| [`SE2Pose`](#se2pose) | Class | Class representing an SE2Pose with position and angle. |
| [`SE2Velocity`](#se2velocity) | Class | Class representing an SE2Velocity with linear velocity and angular velocity. |
| [`SE3Velocity`](#se3velocity) | Class | Class representing an SE3Velocity with linear velocity and angular velocity. |
| [`SE3Pose`](#se3pose) | Class | Class representing an SE3Pose with position and rotation. |
| [`Quat`](#quat) | Class | Class representing a Quaternion. |
| [`poseToXyzYaw`](#posetoxyzyaw) | Function | Gets the x,y,z yaw of B in A from the SE3Pose protobuf message. |
| [`isWithinThreshold`](#iswithinthreshold) | Function | Determines whether the given SE3 pose is small enough in X, Y, and theta. |
| [`recenterAngle`](#recenterangle) | Function |  |
| [`angleDiff`](#anglediff) | Function |  |
| [`angleDiffDegrees`](#anglediffdegrees) | Function |  |
| [`radiansToDegrees`](#radianstodegrees) | Function |  |
| [`skewMatrix3d`](#skewmatrix3d) | Function | The 3x3 skew symmetric matrix of a vector (a geometry Vec3 proto or a math Vec3). |
| [`skewMatrix2d`](#skewmatrix2d) | Function | The 1x2 skew symmetric matrix of a vector (a geometry Vec2 proto or a math Vec2). |
| [`matrixFromProto`](#matrixfromproto) | Function | Converts a geometryPb.Matrix or geometryPb.Matrixf to a ndarray. |
| [`transformSe2velocity`](#transformse2velocity) | Function | Changes the frame that the SE(2) Velocity is expressed in. |
| [`transformSe3velocity`](#transformse3velocity) | Function | Changes the frame that the SE(3) Velocity is expressed in. |
| [`quatToEulerZYX`](#quattoeulerzyx) | Function | Convert a Quat object into Euler yaw, pitch, roll angles (radians). |
| [`recenterValueMod`](#recentervaluemod) | Function |  |
| [`recenterAngleMod`](#recenteranglemod) | Function |  |

## Vec2

```ts
class Vec2
```

Class representing a two-dimensional vector.

### new Vec2

```ts
constructor(x: any, y: any)
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `any` |  |
| `y` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `x` | `any` |  |
| `y` | `any` |  |
| `0` | `any` |  |
| `1` | `any` |  |
| `length` | `number` | Read-only. |

### Vec2.fromProto

```ts
static fromProto(proto: any): Vec2
```

Create a Vec2 from a geometryPb.Vec2 proto.

| Parameter | Type | Description |
|---|---|---|
| `proto` | `any` |  |

**Returns** `Vec2`

### toString

```ts
toString(): string
```

**Returns** `string`

### negative

```ts
negative(): Vec2
```

**Returns** `Vec2`

### multiply

```ts
multiply(other: any): Vec2
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `any` |  |

**Returns** `Vec2`

### divide

```ts
divide(other: any): Vec2
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `any` |  |

**Returns** `Vec2`

### add

```ts
add(other: any): Vec2
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `any` |  |

**Returns** `Vec2`

### substract

```ts
substract(other: any): Vec2
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `any` |  |

**Returns** `Vec2`

### toProto

```ts
toProto(): geometryPb.Vec2
```

Converts the Vec2 into an output of the protobuf geometryPb.Vec2.

**Returns** `geometryPb.Vec2`

### dot

```ts
dot(other: any): number
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `any` |  |

**Returns** `number`

### cross

```ts
cross(other: any): number
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `any` |  |

**Returns** `number`

### [Symbol.iterator]

```ts
[Symbol.iterator](): Generator<any, void, unknown>
```

**Returns** `Generator<any, void, unknown>`

## Vec3

```ts
class Vec3
```

Class representing a three-dimensional vector.

### new Vec3

```ts
constructor(x: any, y: any, z: any)
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `any` |  |
| `y` | `any` |  |
| `z` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `x` | `any` |  |
| `y` | `any` |  |
| `z` | `any` |  |
| `0` | `any` |  |
| `1` | `any` |  |
| `2` | `any` |  |
| `length` | `number` | Read-only. |

### Vec3.fromNumpy

```ts
static fromNumpy(arr: NdArray | number[]): Vec3
```

Create a Vec3 from a numjs array (of shape (3) or (3, 1)) or an array, like from_numpy() in Python.

| Parameter | Type | Description |
|---|---|---|
| `arr` | `NdArray \| number[]` |  |

**Returns** `Vec3`

### Vec3.fromProto

```ts
static fromProto(proto: any): Vec3
```

Create a Vec3 from a geometryPb.Vec3 proto.

| Parameter | Type | Description |
|---|---|---|
| `proto` | `any` |  |

**Returns** `Vec3`

### toString

```ts
toString(): string
```

**Returns** `string`

### toNumpy

```ts
toNumpy(): NdArray
```

Converts the Vec3 into a numjs array, like to_numpy() in Python.

**Returns** `NdArray`

### negative

```ts
negative(): Vec3
```

**Returns** `Vec3`

### multiply

```ts
multiply(other: any): Vec3
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `any` |  |

**Returns** `Vec3`

### divide

```ts
divide(other: any): Vec3
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `any` |  |

**Returns** `Vec3`

### add

```ts
add(other: any): Vec3
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `any` |  |

**Returns** `Vec3`

### substract

```ts
substract(other: any): Vec3
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `any` |  |

**Returns** `Vec3`

### toProto

```ts
toProto(): geometryPb.Vec3
```

Converts the Vec3 into an output of the protobuf geometryPb.Vec3.

**Returns** `geometryPb.Vec3`

### dot

```ts
dot(other: any): number
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `any` |  |

**Returns** `number`

### cross

```ts
cross(other: any): Vec3
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `any` |  |

**Returns** `Vec3`

### [Symbol.iterator]

```ts
[Symbol.iterator](): Generator<any, void, unknown>
```

**Returns** `Generator<any, void, unknown>`

## SE2Pose

```ts
class SE2Pose
```

Class representing an SE2Pose with position and angle.

### new SE2Pose

```ts
constructor(x: any, y: any, angle: any)
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `any` |  |
| `y` | `any` |  |
| `angle` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `x` | `any` |  |
| `y` | `any` |  |
| `angle` | `any` |  |
| `position` | `geometryPb.Vec2` | Property to allow attribute access of the protobuf message field 'position' similar to the geometryPb.SE2Pose for the SE2Pose. Read-only. |

### SE2Pose.flatten

```ts
static flatten(se3pose: any): SE2Pose
```

Flatten a given SE3Pose to an SE2Pose. This will lose height information if the se3pose provided is not gravity
aligned. The common gravity aligned frames are odom, vision, and flat_body.

| Parameter | Type | Description |
|---|---|---|
| `se3pose` | `any` |  |

**Returns** `SE2Pose`

### SE2Pose.fromMatrix

```ts
static fromMatrix(mat: any): SE2Pose
```

Extract SE2Pose from a 3x3 matrix

| Parameter | Type | Description |
|---|---|---|
| `mat` | `any` |  |

**Returns** `SE2Pose`

### SE2Pose.fromProto

```ts
static fromProto(tform: any): SE2Pose
```

Create a SE2Pose from a geometryPb.SE2Pose proto.

| Parameter | Type | Description |
|---|---|---|
| `tform` | `any` |  |

**Returns** `SE2Pose`

### SE2Pose.fromObj

```ts
static fromObj(tform: any): SE2Pose
```

> [!WARNING]
> **Deprecated.** Use fromProto instead (like Python since 3.1.0).

| Parameter | Type | Description |
|---|---|---|
| `tform` | `any` |  |

**Returns** `SE2Pose`

### toString

```ts
toString(): string
```

**Returns** `string`

### toObj

```ts
toObj(proto: any): void
```

Adds the SE2Pose properties into the geometryPb.SE2Pose 'proto'.

| Parameter | Type | Description |
|---|---|---|
| `proto` | `any` |  |

### toProto

```ts
toProto(): geometryPb.SE2Pose
```

Converts the SE2Pose into an output of the protobuf geometryPb.SE2Pose.

**Returns** `geometryPb.SE2Pose`

### inverse

```ts
inverse(): SE2Pose
```

Compute the inverse of the SE2Pose.

For example, if the SE(2) pose represented a_tform_b, then the inverse pose is b_tform_a.

**Returns** `SE2Pose`

### mult

```ts
mult(other: any): Vec2 | SE2Pose
```

Computes the multiplication between the current SE2Pose and the input se2pose.

For example, if this SE2Pose represents a_tform_b and the input se2pose represents b_tform_c, then the output will
represent the transform a_tform_c.

| Parameter | Type | Description |
|---|---|---|
| `other` | `any` |  |

**Returns** `Vec2 \| SE2Pose`

### toRotMatrix

```ts
toRotMatrix(): NdArray
```

Returns the rotation matrix generate from the angle of the current SE(2) Pose.

**Returns** `NdArray`

### toMatrix

```ts
toMatrix(): NdArray
```

Returns the 3x3 matrix to transform a 2D point (in generalized coordinates).

**Returns** `NdArray`

### toAdjointMatrix

```ts
toAdjointMatrix(): NdArray
```

This creates the adjoint matrix for the current SE2Pose.

The adjoint matrix can be used to change reference frames for a SE(2) velocity vector. For example, if you have
SE2Velocity velocity_in_frame_b, then the adjoint matrix for the SE2Pose (representing a_tform_b) can be used as
follows to transform the velocity: velocity_in_frame_a = a_tform_b.toAdjointMatrix() * velocity_in_frame_b

**Returns** `NdArray`

### getClosestSe3Transform

```ts
getClosestSe3Transform(heightZ?: number): SE3Pose
```

Compute the closest SE3Pose from the current SE2Pose.

| Parameter | Type | Description |
|---|---|---|
| `heightZ` | `number` | (*Optional*) |

**Returns** `SE3Pose`

## SE2Velocity

```ts
class SE2Velocity
```

Class representing an SE2Velocity with linear velocity and angular velocity.

### new SE2Velocity

```ts
constructor(x: any, y: any, angular: any)
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `any` |  |
| `y` | `any` |  |
| `angular` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `linearVelocityX` | `any` |  |
| `linearVelocityY` | `any` |  |
| `angularVelocity` | `any` |  |
| `linear` | `geometryPb.Vec2` | Property to allow attribute access of the protobuf message field 'linear' similar to the geometryPb.SE2Velocity for the SE2Velocity. Read-only. |
| `angular` | `any` | Property to allow attribute access of the protobuf message field 'angular' similar to the geometryPb.SE2Velocity for the SE2Velocity. Read-only. |

### SE2Velocity.fromVector

```ts
static fromVector(se2VelVector: any): SE2Velocity | null
```

Converts a 3x1 velocity vector (of either an NdArray or a list) into a SE2Velocity object.

| Parameter | Type | Description |
|---|---|---|
| `se2VelVector` | `any` |  |

**Returns** `SE2Velocity \| null`

### SE2Velocity.fromProto

```ts
static fromProto(vel: any): SE2Velocity
```

Create a SE2Velocity from a geometryPb.SE2Velocity proto.

| Parameter | Type | Description |
|---|---|---|
| `vel` | `any` |  |

**Returns** `SE2Velocity`

### SE2Velocity.fromObj

```ts
static fromObj(vel: any): SE2Velocity
```

> [!WARNING]
> **Deprecated.** Use fromProto instead (like Python since 3.1.0).

| Parameter | Type | Description |
|---|---|---|
| `vel` | `any` |  |

**Returns** `SE2Velocity`

### toString

```ts
toString(): string
```

**Returns** `string`

### toObj

```ts
toObj(proto: any): void
```

Adds the SE2Velocity properties into the geometryPb.SE2Velocity 'proto'.

| Parameter | Type | Description |
|---|---|---|
| `proto` | `any` |  |

### toProto

```ts
toProto(): geometryPb.SE2Velocity
```

Converts the SE2Velocity into an output of the protobuf geometryPb.SE2Velocity.

**Returns** `geometryPb.SE2Velocity`

### toVector

```ts
toVector(): NdArray
```

Creates a 3x1 velocity vector as an NdArray.

**Returns** `NdArray`

## SE3Velocity

```ts
class SE3Velocity
```

Class representing an SE3Velocity with linear velocity and angular velocity.

### new SE3Velocity

```ts
constructor(linX: any, linY: any, linZ: any, angX: any, angY: any, angZ: any)
```

| Parameter | Type | Description |
|---|---|---|
| `linX` | `any` |  |
| `linY` | `any` |  |
| `linZ` | `any` |  |
| `angX` | `any` |  |
| `angY` | `any` |  |
| `angZ` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `linearVelocityX` | `any` |  |
| `linearVelocityY` | `any` |  |
| `linearVelocityZ` | `any` |  |
| `angularVelocityX` | `any` |  |
| `angularVelocityY` | `any` |  |
| `angularVelocityZ` | `any` |  |
| `linear` | `geometryPb.Vec3` | Property to allow attribute access of the protobuf message field 'linear' similar to the geometryPb.SE3Velocity for the SE3Velocity. Read-only. |
| `angular` | `geometryPb.Vec3` | Property to allow attribute access of the protobuf message field 'angular' similar to the geometryPb.SE3Velocity for the SE3Velocity. Read-only. |

### SE3Velocity.fromProto

```ts
static fromProto(vel: any): SE3Velocity
```

Create a SE3Velocity from a geometryPb.SE3Velocity proto.

| Parameter | Type | Description |
|---|---|---|
| `vel` | `any` |  |

**Returns** `SE3Velocity`

### SE3Velocity.fromObj

```ts
static fromObj(vel: any): SE3Velocity
```

> [!WARNING]
> **Deprecated.** Use fromProto instead (like Python since 3.1.0).

| Parameter | Type | Description |
|---|---|---|
| `vel` | `any` |  |

**Returns** `SE3Velocity`

### SE3Velocity.fromVector

```ts
static fromVector(se3VelVector: any): SE3Velocity | null
```

Converts a 6x1 velocity vector (of either an NdArray or a list) into a SE3Velocity object.

| Parameter | Type | Description |
|---|---|---|
| `se3VelVector` | `any` |  |

**Returns** `SE3Velocity \| null`

### toString

```ts
toString(): string
```

**Returns** `string`

### toObj

```ts
toObj(proto: any): void
```

Adds the SE3Velocity properties into the geometryPb.SE3Velocity 'proto'.

| Parameter | Type | Description |
|---|---|---|
| `proto` | `any` |  |

### toProto

```ts
toProto(): geometryPb.SE3Velocity
```

Converts the SE3Velocity into an output of the protobuf geometryPb.SE3Velocity.

**Returns** `geometryPb.SE3Velocity`

### toVector

```ts
toVector(): NdArray
```

Creates a 6x1 velocity vector as an NdArray.

**Returns** `NdArray`

## SE3Pose

```ts
class SE3Pose
```

Class representing an SE3Pose with position and rotation.

### new SE3Pose

```ts
constructor(x: any, y: any, z: any, rot: any)
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `any` |  |
| `y` | `any` |  |
| `z` | `any` |  |
| `rot` | `any` |  |

### Properties

| Property | Type | Description |
|---|---|---|
| `x` | `number` |  |
| `y` | `number` |  |
| `z` | `number` |  |
| `rot` | `Quat` |  |
| `position` | `geometryPb.Vec3` | Property to allow attribute access of the protobuf message field 'position' similar to the geometryPb.SE3Pose for the SE3Pose. Read-only. |
| `rotation` | `Quat` | Property to allow attribute access of the protobuf message field 'rotation' similar to the geometryPb.SE3Pose for the SE3Pose. Read-only. |

### SE3Pose.fromProto

```ts
static fromProto(tform: any): SE3Pose
```

Create a SE3Pose from a geometryPb.SE3Pose proto.

| Parameter | Type | Description |
|---|---|---|
| `tform` | `any` |  |

**Returns** `SE3Pose`

### SE3Pose.fromObj

```ts
static fromObj(tform: any): SE3Pose
```

> [!WARNING]
> **Deprecated.** Use fromProto instead (like Python since 3.1.0).

| Parameter | Type | Description |
|---|---|---|
| `tform` | `any` |  |

**Returns** `SE3Pose`

### SE3Pose.fromSe2

```ts
static fromSe2(tform: any, z?: number): SE3Pose
```

| Parameter | Type | Description |
|---|---|---|
| `tform` | `any` |  |
| `z` | `number` | (*Optional*) |

**Returns** `SE3Pose`

### SE3Pose.transformCloudFromMatrix

```ts
static transformCloudFromMatrix(transform: NdArray | number[][], points: NdArray | number[][]): NdArray
```

Transform points with a 4x4 transform matrix, like Python's numpy.dot(points, rot.T) + trans.

| Parameter | Type | Description |
|---|---|---|
| `transform` | `NdArray \| number[][]` | The 4x4 matrix. |
| `points` | `NdArray \| number[][]` | The Nx3 points. |

**Returns** `NdArray`: The Nx3 transformed points.

### SE3Pose.fromMatrix

```ts
static fromMatrix(mat: NdArray | number[][]): SE3Pose
```

Extract an SE3Pose from a 4x4 matrix (a numjs matrix or an array of rows).

| Parameter | Type | Description |
|---|---|---|
| `mat` | `NdArray \| number[][]` |  |

**Returns** `SE3Pose`

### SE3Pose.fromIdentity

```ts
static fromIdentity(): SE3Pose
```

Create a SE3Pose representing the identity SE(3) pose.

**Returns** `SE3Pose`

### SE3Pose.interp

```ts
static interp(a: any, b: any, fraction: any): SE3Pose
```

Performs a blend of two SE3Poses. Out = a * (1 - fraction) + b * fraction

| Parameter | Type | Description |
|---|---|---|
| `a` | `any` |  |
| `b` | `any` |  |
| `fraction` | `any` |  |

**Returns** `SE3Pose`

### toString

```ts
toString(): string
```

**Returns** `string`

### toObj

```ts
toObj(proto: any): void
```

Adds the SE3Pose properties into the geometryPb.SE3Pose 'proto'.

| Parameter | Type | Description |
|---|---|---|
| `proto` | `any` |  |

### toProto

```ts
toProto(): geometryPb.SE3Pose
```

Converts the SE3Pose into an output of the protobuf geometryPb.SE3Pose.

**Returns** `geometryPb.SE3Pose`

### inverse

```ts
inverse(): SE3Pose
```

Compute the inverse of the SE3Pose.

For example, if the SE(3) pose represented a_tform_b, then the inverse pose is b_tform_a.

**Returns** `SE3Pose`

### transformPoint

```ts
transformPoint(x?: number, y?: number, z?: number): number[]
```

Compute the transformation (translation and rotation) of a (x,y,z) vector using the current SE(3) pose.

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | (*Optional*) |
| `y` | `number` | (*Optional*) |
| `z` | `number` | (*Optional*) |

**Returns** `number[]`

### transformVec3

```ts
transformVec3(vec3: Vec3 | geometryPb.Vec3): geometryPb.Vec3
```

Transform a vector: a math Vec3 or a geometry Vec3 proto (a proto was read as (0, 0, 0)).

| Parameter | Type | Description |
|---|---|---|
| `vec3` | `Vec3 \| geometryPb.Vec3` |  |

**Returns** `geometryPb.Vec3`

### transformCloud

```ts
transformCloud(points: any): NdArray
```

Compute the transformation (translation and rotation) of multiple vector/points using the current SE3Pose.

| Parameter | Type | Description |
|---|---|---|
| `points` | `any` |  |

**Returns** `NdArray`

### toMatrix

```ts
toMatrix(): NdArray
```

Returns the 4x4 matrix to transform a 3D point (in generalized coordinates).

**Returns** `NdArray`

### translationNorm

```ts
translationNorm(): number
```

Calculates the Euclidean norm (magnitude) of the translation component pose.

**Returns** `number`

### mult

```ts
mult(other: SE3Pose): SE3Pose
```

Computes the multiplication between the current math_helpers.SE3Pose and the input se3pose.

For example, if the 'this' SE3Pose represents a_tform_b and the input se3pose represents b_tform_c,
then the output will represent the transform a_tform_c.

| Parameter | Type | Description |
|---|---|---|
| `other` | `SE3Pose` |  |

**Returns** `SE3Pose`

### getTranslation

```ts
getTranslation(): NdArray
```

Returns a 3x1 NdArray representing the translation only of the current SE3Pose.

**Returns** `NdArray`

### toAdjointMatrix

```ts
toAdjointMatrix(): NdArray
```

This creates the adjoint matrix for the current SE3Pose.

The adjoint matrix can be used to change reference frames for a SE(3) velocity vector. For example, if you have
SE3Velocity velocity_in_frame_b, then the adjoint matrix for the SE3Pose (representing a_tform_b) can be used as
follows to transform the velocity: velocity_in_frame_a = a_tform_b.toAdjointMatrix() * velocity_in_frame_b

**Returns** `NdArray`

### getClosestSe2Transform

```ts
getClosestSe2Transform(): SE2Pose
```

Compute the closest SE2Pose from the current SE3Pose.

**Returns** `SE2Pose`

### [Symbol.iterator]

```ts
[Symbol.iterator](): {
    next: () => {
        value: number;
        done: boolean;
    } | {
        done: boolean;
        value?: undefined;
    };
}
```

**Returns** `{ next: () => { value: number; done: boolean; } \| { done: boolean; value?: undefined; }; }`

## Quat

```ts
class Quat
```

Class representing a Quaternion.

### new Quat

```ts
constructor(w?: number, x?: number, y?: number, z?: number)
```

| Parameter | Type | Description |
|---|---|---|
| `w` | `number` | (*Optional*) |
| `x` | `number` | (*Optional*) |
| `y` | `number` | (*Optional*) |
| `z` | `number` | (*Optional*) |

### Properties

| Property | Type | Description |
|---|---|---|
| `w` | `number` |  |
| `x` | `number` |  |
| `y` | `number` |  |
| `z` | `number` |  |

### Quat.fromMatrix

```ts
static fromMatrix(matrix: NdArray | number[][]): Quat
```

Creates a Quat from a 3x3 rotation matrix (a numjs matrix or an array of rows).

| Parameter | Type | Description |
|---|---|---|
| `matrix` | `NdArray \| number[][]` |  |

**Returns** `Quat`

### Quat.fromRoll

```ts
static fromRoll(angle: any): Quat
```

Computes a representative Quat from the Euler angle for roll.

| Parameter | Type | Description |
|---|---|---|
| `angle` | `any` |  |

**Returns** `Quat`

### Quat.fromPitch

```ts
static fromPitch(angle: any): Quat
```

Computes a representative Quat from the Euler angle for pitch.

| Parameter | Type | Description |
|---|---|---|
| `angle` | `any` |  |

**Returns** `Quat`

### Quat.fromYaw

```ts
static fromYaw(angle: any): Quat
```

Computes a representative Quat from the Euler angle for yaw.

| Parameter | Type | Description |
|---|---|---|
| `angle` | `any` |  |

**Returns** `Quat`

### Quat.fromProto

```ts
static fromProto(proto: any): Quat
```

Create a Quat from a geometryPb.Quaternion proto.

| Parameter | Type | Description |
|---|---|---|
| `proto` | `any` |  |

**Returns** `Quat`

### Quat.fromObj

```ts
static fromObj(proto: any): Quat
```

> [!WARNING]
> **Deprecated.** Use fromProto instead (like Python since 3.1.0).

| Parameter | Type | Description |
|---|---|---|
| `proto` | `any` |  |

**Returns** `Quat`

### Quat.slerp

```ts
static slerp(a: Quat, b: Quat, fraction: number): Quat
```

Spherical linear interpolation between two quaternions (it always threw).

| Parameter | Type | Description |
|---|---|---|
| `a` | `Quat` |  |
| `b` | `Quat` |  |
| `fraction` | `number` | The blending factor, in [0, 1]. |

**Returns** `Quat`

### Quat.fromTwoVectors

```ts
static fromTwoVectors(uIn: Vec3, vIn: Vec3): Quat
```

Returns a quaternion representing the rotation from u to v.

| Parameter | Type | Description |
|---|---|---|
| `uIn` | `Vec3` | An instance of Vec3 |
| `vIn` | `Vec3` | An instance of Vec3 |

**Returns** `Quat`

### toString

```ts
toString(): string
```

**Returns** `string`

### inspect

```ts
inspect(): string
```

**Returns** `string`

### inverse

```ts
inverse(): Quat
```

Computes the inverse of the current Quat.

**Returns** `Quat`

### transformPoint

```ts
transformPoint(x: any, y: any, z: any): number[]
```

Computes the transformation (rotation by the quaternion) of a single (x,y,z) point using the current Quat.

| Parameter | Type | Description |
|---|---|---|
| `x` | `any` |  |
| `y` | `any` |  |
| `z` | `any` |  |

**Returns** `number[]`

### transformVec3

```ts
transformVec3(vec3: Vec3 | geometryPb.Vec3): geometryPb.Vec3
```

Rotate a vector: a math Vec3 or a geometry Vec3 proto.

| Parameter | Type | Description |
|---|---|---|
| `vec3` | `Vec3 \| geometryPb.Vec3` |  |

**Returns** `geometryPb.Vec3`

### toMatrix

```ts
toMatrix(): NdArray
```

Creates the 3x3 rotation matrix from the current Quat

**Returns** `NdArray`

### toRoll

```ts
toRoll(): number
```

Computes the Euler angle roll from the current Quat

**Returns** `number`

### toPitch

```ts
toPitch(): number
```

Computes the Euler angle pitch from the current Quat

**Returns** `number`

### toYaw

```ts
toYaw(): any
```

Computes the Euler angle yaw from the current Quat

**Returns** `any`

### toAxisAngle

```ts
toAxisAngle(): (number | number[])[]
```

Computes the angle and the respective axis from the Quat

**Returns** `(number \| number[])[]`

### toObj

```ts
toObj(proto: any): void
```

Adds the Quat properties into the geometryPb.Quaternion 'proto'.

| Parameter | Type | Description |
|---|---|---|
| `proto` | `any` |  |

### toProto

```ts
toProto(): geometryPb.Quaternion
```

Converts the Quat into an output of the protobuf geometryPb.Quaternion.

**Returns** `geometryPb.Quaternion`

### mult

```ts
mult(otherQuat: any): Vec3 | Quat
```

Computes the multiplication of two Quats.

| Parameter | Type | Description |
|---|---|---|
| `otherQuat` | `any` |  |

**Returns** `Vec3 \| Quat`

### normalize

```ts
normalize(): Quat
```

Normalizes the quaternion.

**Returns** `Quat`

### closestYawOnlyQuaternion

```ts
closestYawOnlyQuaternion(): Vec3 | Quat
```

Computes a yaw-only Quat from the current roll/pitch/yaw Quat

**Returns** `Vec3 \| Quat`

### conj

```ts
conj(): Quat
```

**Returns** `Quat`

## poseToXyzYaw

```ts
export function poseToXyzYaw(ATformB: any): any[]
```

Gets the x,y,z yaw of B in A from the SE3Pose protobuf message.

| Parameter | Type | Description |
|---|---|---|
| `ATformB` | `any` |  |

**Returns** `any[]`

## isWithinThreshold

```ts
export function isWithinThreshold(pose3d: any, maxTranslationmeters: any, maxYawDegrees: any): boolean
```

Determines whether the given SE3 pose is small enough in X, Y, and theta.

| Parameter | Type | Description |
|---|---|---|
| `pose3d` | `any` |  |
| `maxTranslationmeters` | `any` |  |
| `maxYawDegrees` | `any` |  |

**Returns** `boolean`

## recenterAngle

```ts
export function recenterAngle(q: any, lowerLimit: any, upperLimit: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `q` | `any` |  |
| `lowerLimit` | `any` |  |
| `upperLimit` | `any` |  |

**Returns** `any`

## angleDiff

```ts
export function angleDiff(a1: any, a2: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `a1` | `any` |  |
| `a2` | `any` |  |

**Returns** `any`

## angleDiffDegrees

```ts
export function angleDiffDegrees(a1: any, a2: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `a1` | `any` |  |
| `a2` | `any` |  |

**Returns** `any`

## radiansToDegrees

```ts
export function radiansToDegrees(radians: any): number
```

| Parameter | Type | Description |
|---|---|---|
| `radians` | `any` |  |

**Returns** `number`

## skewMatrix3d

```ts
export function skewMatrix3d(vec3Proto: geometryPb.Vec3 | Vec3): NdArray
```

The 3x3 skew symmetric matrix of a vector (a geometry Vec3 proto or a math Vec3).

| Parameter | Type | Description |
|---|---|---|
| `vec3Proto` | `geometryPb.Vec3 \| Vec3` |  |

**Returns** `NdArray`

## skewMatrix2d

```ts
export function skewMatrix2d(vec2Proto: geometryPb.Vec2 | Vec2): NdArray
```

The 1x2 skew symmetric matrix of a vector (a geometry Vec2 proto or a math Vec2).

| Parameter | Type | Description |
|---|---|---|
| `vec2Proto` | `geometryPb.Vec2 \| Vec2` |  |

**Returns** `NdArray`

## matrixFromProto

```ts
export function matrixFromProto(proto: geometryPb.Matrix | geometryPb.Matrixf): typeof NdArray.new
```

Converts a geometryPb.Matrix or geometryPb.Matrixf to a ndarray.

| Parameter | Type | Description |
|---|---|---|
| `proto` | `geometryPb.Matrix \| geometryPb.Matrixf` |  |

**Returns** `typeof NdArray.new`

## transformSe2velocity

```ts
export function transformSe2velocity(aAdjointBMatrix: any, se2VelocityInB: any): SE2Velocity | null
```

Changes the frame that the SE(2) Velocity is expressed in. More specifically, it converts the SE(2) Velocity in frame
b to a SE(2) Velocity in frame c using the adjoint matrix a_adjoint_b.

| Parameter | Type | Description |
|---|---|---|
| `aAdjointBMatrix` | `any` |  |
| `se2VelocityInB` | `any` |  |

**Returns** `SE2Velocity \| null`

## transformSe3velocity

```ts
export function transformSe3velocity(aAdjointBMatrix: any, se3VelocityInB: any): SE3Velocity | null
```

Changes the frame that the SE(3) Velocity is expressed in. More specifically, it converts the SE(3) Velocity in frame
b to a SE(3) Velocity in frame c using the adjoint matrix a_adjoint_b.

| Parameter | Type | Description |
|---|---|---|
| `aAdjointBMatrix` | `any` |  |
| `se3VelocityInB` | `any` |  |

**Returns** `SE3Velocity \| null`

## quatToEulerZYX

```ts
export function quatToEulerZYX(q: any): number[]
```

Convert a Quat object into Euler yaw, pitch, roll angles (radians).

| Parameter | Type | Description |
|---|---|---|
| `q` | `any` |  |

**Returns** `number[]`

## recenterValueMod

```ts
export function recenterValueMod(value: any, center: any, amplitude: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `value` | `any` |  |
| `center` | `any` |  |
| `amplitude` | `any` |  |

**Returns** `any`

## recenterAngleMod

```ts
export function recenterAngleMod(theta: any, center: any): any
```

| Parameter | Type | Description |
|---|---|---|
| `theta` | `any` |  |
| `center` | `any` |  |

**Returns** `any`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `geometryPb` | `spot-sdk-js/src/bosdyn/api/geometry_pb` |

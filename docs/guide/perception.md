# Perception

## Robot state

`RobotStateClient` returns the state of the robot: power and battery, joints and kinematics, feet, E-Stops, faults.

```js
const { RobotStateClient } = require('spot-sdk-js');

const stateClient = await robot.ensureClient(RobotStateClient.defaultServiceName);
const state = await stateClient.getRobotState();

const battery = state.getPowerState().getLocomotionChargePercentage().getValue();
const joints = state.getKinematicState().getJointStatesList().map(joint => joint.getName());
const faults = state.getSystemFaultState().getFaultsList();
```

- `getRobotMetrics()` returns the counters of the robot (distance walked, time powered on...).
- `getRobotHardwareConfiguration()` and `getHardwareConfigWithLinkInfo()` return its links and their models.
- `hasArm(stateClient)` and `robot.hasArm()` tell whether the robot has an arm.
- `RobotStateStreamingClient.getRobotStateStream()` streams the state at a high rate: it returns a readable stream of
  responses, to read with `for await`.

The command line prints the state: `npx spot-sdk-js 192.168.80.3 state full`.

## Frames and transforms

The robot knows the transforms between its frames: `body`, `odom` (kinematic odometry), `vision` (visual odometry),
`flat_body` (the body aligned with gravity), `gpe` (the ground plane), `hand`, the feet, and the frames of its sensors.
A `FrameTreeSnapshot` holds these transforms at a time: the robot state, the images and the world objects carry one.

```js
const { BODY_FRAME_NAME, ODOM_FRAME_NAME, VISION_FRAME_NAME, getATformB } = require('spot-sdk-js');

const snapshot = state.getKinematicState().getTransformsSnapshot();
// The pose of the body in the odometry frame: odom_T_body.
const odomTBody = getATformB(snapshot, ODOM_FRAME_NAME, BODY_FRAME_NAME);
console.log(odomTBody.x, odomTBody.y, odomTBody.z, odomTBody.rot.toYaw());
```

`getATformB(snapshot, a, b)` returns the pose of frame `b` in frame `a`, `a_T_b`, as an `SE3Pose`, or `null` if the
frames are not connected. `getSe2ATformB()` returns its projection on the ground, an `SE2Pose`, and
`getVisionTformBody()` and `getOdomTformBody()` are shortcuts.

The math helpers work with these poses like the Python ones:

```js
const { Quat, SE3Pose } = require('spot-sdk-js');

// A pose: a position, and a rotation as a quaternion (w, x, y, z).
const bodyTGoal = new SE3Pose(1.0, 0, 0, Quat.fromYaw(Math.PI / 2));
const odomTGoal = odomTBody.mult(bodyTGoal); // odom_T_body * body_T_goal = odom_T_goal
const bodyTOdom = odomTBody.inverse();
const [x, y, z] = odomTBody.transformPoint(0.5, 0, 0); // A point of the body frame, in the odometry frame.

// To and from the protobuf messages.
const proto = odomTGoal.toProto(); // geometryPb.SE3Pose
const pose = SE3Pose.fromProto(proto);
```

`SE2Pose`, `SE2Velocity`, `SE3Velocity`, `Vec2`, `Vec3` and `Quat` complete them, with `EulerZXY` (yaw, roll, pitch)
for the orientations of the body.

## Images

The robot has five stereo cameras (`frontleft`, `frontright`, `left`, `right`, `back`), each one with a fisheye image
and a depth image, and the arm has a camera in its gripper.

```js
const { ImageClient, buildImageRequest, saveImagesAsFiles } = require('spot-sdk-js');
const imagePb = require('spot-sdk-js/src/bosdyn/api/image_pb');

const imageClient = await robot.ensureClient(ImageClient.defaultServiceName);
const sources = await imageClient.listImageSources();
console.log(sources.map(source => source.getName()));

// JPEG images of two cameras.
const responses = await imageClient.getImageFromSources(['frontleft_fisheye_image', 'frontright_fisheye_image']);

// Or with the options of each image: quality, format, pixel format, resize ratio.
const [depth] = await imageClient.getImage([
  buildImageRequest('frontleft_depth', 100, imagePb.Image.Format.FORMAT_RAW),
]);

// Writes the images in the current directory: JPEG, or PGM/PPM for the raw images.
saveImagesAsFiles(responses);
```

Each `ImageResponse` has the image (`getShot().getImage()`: its data, format, size), the transforms of the camera at the
time of the capture (`getShot().getTransformsSnapshot()`), and the intrinsics of the camera (`getSource()`).

- `depthImageToPointcloud(response)` turns a depth image into a point cloud.
- `pixelToCameraSpace()` projects a pixel into the frame of the camera.
- `imageUtil.save(data, 'image.png')` converts and writes an image, and `imageUtil.show(data)` opens it in the image
  viewer of the system.

The command line saves the images too: `npx spot-sdk-js 192.168.80.3 image get-image frontleft_fisheye_image`.

## World objects

The world objects are what the robot detects or knows around it: fiducials (AprilTags), docks, and objects added by
clients.

```js
const { WorldObjectClient } = require('spot-sdk-js');
const worldObjectPb = require('spot-sdk-js/src/bosdyn/api/world_object_pb');

const worldObjectClient = await robot.ensureClient(WorldObjectClient.defaultServiceName);
const response = await worldObjectClient.listWorldObjects([worldObjectPb.WorldObjectType.WORLD_OBJECT_APRILTAG]);
for (const object of response.getWorldObjectsList()) {
  console.log(object.getName(), object.getApriltagProperties().getTagId());
}
```

`makeAddWorldObjectReq()`, `makeChangeWorldObjectReq()` and `makeDeleteWorldObjectReq()` build the requests of
`mutateWorldObjects()`.

## Local grids, point clouds and ray casts

- `LocalGridClient.getLocalGrids(['terrain', 'obstacle_distance', 'no_step'])` returns the grids the robot computes
  around it; `getLocalGridTypes()` lists them.
- `PointCloudClient.getPointCloudFromSources(names)` returns the point clouds of the sources of point clouds (e.g. a
  lidar payload); `listPointCloudSources()` lists them.
- `RayCastClient.raycast(origin, direction, types)` intersects a ray with the ground, the terrain or the point clouds.

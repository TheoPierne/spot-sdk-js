# bosdyn-client/gripper_camera_param

Client for the gripper camera parameter service: the settings of the camera of the gripper.

```js
const { GripperCameraParamClient } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`GripperCameraParamClient`](#grippercameraparamclient) | Class | Client for the Gripper Camera Parameter service. |

## GripperCameraParamClient

```ts
class GripperCameraParamClient extends BaseClient<GripperCameraParamServiceClient>
```

Client for the Gripper Camera Parameter service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'gripper-camera-param'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.GripperCameraParamService'`. |

### setCameraParams

```ts
setCameraParams(gripperCameraParamRequest: GripperCameraParamRequest, args?: Object): Promise<GripperCameraParamResponse>
```

Issue a gripper camera parameter command to the robot.

| Parameter | Type | Description |
|---|---|---|
| `gripperCameraParamRequest` | `GripperCameraParamRequest` | The gripper camera param request |
| `args` | `Object` | The args to be send with the gRPC request (*Optional*) |

**Returns** `Promise<GripperCameraParamResponse>`

### getCameraParams

```ts
getCameraParams(gripperCameraGetParamRequest: GripperCameraGetParamRequest, args?: Object): Promise<GripperCameraGetParamResponse>
```

Issue a request to get the current gripper camera parameters from the robot.

| Parameter | Type | Description |
|---|---|---|
| `gripperCameraGetParamRequest` | `GripperCameraGetParamRequest` | The gripper camera get param request |
| `args` | `Object` | The args to be send with the gRPC request (*Optional*) |

**Returns** `Promise<GripperCameraGetParamResponse>`

### setCameraCalib

```ts
setCameraCalib(setGripperCameraCalibRequest: SetGripperCameraCalibrationRequest, args?: Object): Promise<SetGripperCameraCalibrationResponse>
```

Issue gripper camera calibration

| Parameter | Type | Description |
|---|---|---|
| `setGripperCameraCalibRequest` | `SetGripperCameraCalibrationRequest` | The command request to set gripper camera calibration |
| `args` | `Object` | The args to be send with the gRPC request (*Optional*) |

**Returns** `Promise<SetGripperCameraCalibrationResponse>`

### getCameraCalib

```ts
getCameraCalib(getGripperCameraCalibRequest: GetGripperCameraCalibrationRequest, args?: Object): Promise<GetGripperCameraCalibrationResponse>
```

Issue gripper camera get calibration

| Parameter | Type | Description |
|---|---|---|
| `getGripperCameraCalibRequest` | `GetGripperCameraCalibrationRequest` |  |
| `args` | `Object` | The args to be send with the gRPC request (*Optional*) |

**Returns** `Promise<GetGripperCameraCalibrationResponse>`

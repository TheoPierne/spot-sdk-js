# bosdyn-client/spot_check

Client for the SpotCheck service: the calibration checks of the robot and the calibration of its cameras.

```js
const { SpotCheckClient, runSpotCheck, runCameraCalibration, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`SpotCheckClient`](#spotcheckclient) | Class | A client for verifying robot health and running calibration routines. |
| [`runSpotCheck`](#runspotcheck) | Function | Run full spot check routine. |
| [`runCameraCalibration`](#runcameracalibration) | Function | Run full camera calibration routine for robot. |
| [`SpotCheckError`](#spotcheckerror) | Class | General class of errors for SpotCheck service. |
| [`SpotCheckResponseError`](#spotcheckresponseerror) | Class | General class of errors for spot check routines. |
| [`SpotCheckUnexpectedPowerChangeError`](#spotcheckunexpectedpowerchangeerror) | Class | Power error occurred while running spot check. |
| [`SpotCheckImuCheckError`](#spotcheckimucheckerror) | Class | IMU reports robot is not on flat ground. |
| [`SpotCheckNotSittingError`](#spotchecknotsittingerror) | Class | Robot not started in sitting configuration. |
| [`SpotCheckLoadcellTimeoutError`](#spotcheckloadcelltimeouterror) | Class | Internal time out during spot check loadcell cal. |
| [`SpotCheckPowerOnFailure`](#spotcheckpoweronfailure) | Class | Power on error occurred while running spot check. |
| [`SpotCheckEndstopTimeoutError`](#spotcheckendstoptimeouterror) | Class | Internal time out during spot check endstop cal. |
| [`SpotCheckStandFailureError`](#spotcheckstandfailureerror) | Class | Robot failed to stand during spotcheck. |
| [`SpotCheckCameraTimeoutError`](#spotcheckcameratimeouterror) | Class | Internal time out during spot check camera check. |
| [`SpotCheckGroundCheckError`](#spotcheckgroundcheckerror) | Class | Robot failed flat ground check. |
| [`SpotCheckTimedOutError`](#spotchecktimedouterror) | Class | Timed out waiting for SUCCESS response from spot check. |
| [`CameraSpotCheckTimedOutError`](#cameraspotchecktimedouterror) | Class | Timed out waiting for SUCCESS response from camera spot check (not used, like in Python). |
| [`CameraSpotCheckFeedbackError`](#cameraspotcheckfeedbackerror) | Class | General class of errors for camera spot check feedback (not used, like in Python). |
| [`CameraCalibrationResponseError`](#cameracalibrationresponseerror) | Class | General class of errors for camera calibration routines. |
| [`CameraCalibrationUserCanceledError`](#cameracalibrationusercancelederror) | Class | API client canceled calibration. |
| [`CameraCalibrationPowerError`](#cameracalibrationpowererror) | Class | The robot is not powered on. |
| [`CameraCalibrationTargetNotCenteredError`](#cameracalibrationtargetnotcenterederror) | Class | Invalid starting configuration of robot. |
| [`CameraCalibrationRobotCommandError`](#cameracalibrationrobotcommanderror) | Class | Robot command error occurred while running calibration. |
| [`CameraCalibrationCalibrationError`](#cameracalibrationcalibrationerror) | Class | Calibration algorithm failure occurred. |
| [`CameraCalibrationInternalError`](#cameracalibrationinternalerror) | Class | Internal error occurred. |
| [`CameraCalibrationTimedOutError`](#cameracalibrationtimedouterror) | Class | Timed out waiting for SUCCESS response from calibration. |

## SpotCheckError

```ts
class SpotCheckError extends ResponseError
```

General class of errors for SpotCheck service.

## SpotCheckResponseError

```ts
class SpotCheckResponseError extends SpotCheckError
```

General class of errors for spot check routines.

## SpotCheckUnexpectedPowerChangeError

```ts
class SpotCheckUnexpectedPowerChangeError extends SpotCheckResponseError
```

Power error occurred while running spot check.

## SpotCheckImuCheckError

```ts
class SpotCheckImuCheckError extends SpotCheckResponseError
```

IMU reports robot is not on flat ground.

## SpotCheckNotSittingError

```ts
class SpotCheckNotSittingError extends SpotCheckResponseError
```

Robot not started in sitting configuration.

## SpotCheckLoadcellTimeoutError

```ts
class SpotCheckLoadcellTimeoutError extends SpotCheckResponseError
```

Internal time out during spot check loadcell cal.

## SpotCheckPowerOnFailure

```ts
class SpotCheckPowerOnFailure extends SpotCheckResponseError
```

Power on error occurred while running spot check.

## SpotCheckEndstopTimeoutError

```ts
class SpotCheckEndstopTimeoutError extends SpotCheckResponseError
```

Internal time out during spot check endstop cal.

## SpotCheckStandFailureError

```ts
class SpotCheckStandFailureError extends SpotCheckResponseError
```

Robot failed to stand during spotcheck.

## SpotCheckCameraTimeoutError

```ts
class SpotCheckCameraTimeoutError extends SpotCheckResponseError
```

Internal time out during spot check camera check.

## SpotCheckGroundCheckError

```ts
class SpotCheckGroundCheckError extends SpotCheckResponseError
```

Robot failed flat ground check.

## SpotCheckTimedOutError

```ts
class SpotCheckTimedOutError extends Error
```

Timed out waiting for SUCCESS response from spot check.

### new SpotCheckTimedOutError

```ts
constructor(msg: any)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |

## CameraSpotCheckTimedOutError

```ts
class CameraSpotCheckTimedOutError extends Error
```

Timed out waiting for SUCCESS response from camera spot check (not used, like in Python).

### new CameraSpotCheckTimedOutError

```ts
constructor(msg: any)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |

## CameraSpotCheckFeedbackError

```ts
class CameraSpotCheckFeedbackError extends Error
```

General class of errors for camera spot check feedback (not used, like in Python).

### new CameraSpotCheckFeedbackError

```ts
constructor(msg: any)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |

## CameraCalibrationResponseError

```ts
class CameraCalibrationResponseError extends SpotCheckError
```

General class of errors for camera calibration routines.

## CameraCalibrationUserCanceledError

```ts
class CameraCalibrationUserCanceledError extends CameraCalibrationResponseError
```

API client canceled calibration.

## CameraCalibrationPowerError

```ts
class CameraCalibrationPowerError extends CameraCalibrationResponseError
```

The robot is not powered on.

## CameraCalibrationTargetNotCenteredError

```ts
class CameraCalibrationTargetNotCenteredError extends CameraCalibrationResponseError
```

Invalid starting configuration of robot.

## CameraCalibrationRobotCommandError

```ts
class CameraCalibrationRobotCommandError extends CameraCalibrationResponseError
```

Robot command error occurred while running calibration.

## CameraCalibrationCalibrationError

```ts
class CameraCalibrationCalibrationError extends CameraCalibrationResponseError
```

Calibration algorithm failure occurred.

## CameraCalibrationInternalError

```ts
class CameraCalibrationInternalError extends CameraCalibrationResponseError
```

Internal error occurred.

## CameraCalibrationTimedOutError

```ts
class CameraCalibrationTimedOutError extends Error
```

Timed out waiting for SUCCESS response from calibration.

### new CameraCalibrationTimedOutError

```ts
constructor(msg: any)
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |

## SpotCheckClient

```ts
class SpotCheckClient extends BaseClient<SpotCheckServiceClient>
```

A client for verifying robot health and running calibration routines.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'spot-check'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.spot.SpotCheckService'`. |

### spotCheckCommand

```ts
spotCheckCommand(request: spotCheckPb.SpotCheckCommandRequest, args?: Object): Promise<spotCheckPb.SpotCheckCommandResponse>
```

Issue a spot check command to the robot.

| Parameter | Type | Description |
|---|---|---|
| `request` | `spotCheckPb.SpotCheckCommandRequest` | The spot check command request |
| `args` | `Object` | Options to pass to the GRPC request (*Optional*) |

**Returns** `Promise<spotCheckPb.SpotCheckCommandResponse>`

### spotCheckFeedback

```ts
spotCheckFeedback(request: spotCheckPb.SpotCheckFeedbackRequest, args?: Object): Promise<spotCheckPb.SpotCheckFeedbackResponse>
```

Check the current status of spot check.

| Parameter | Type | Description |
|---|---|---|
| `request` | `spotCheckPb.SpotCheckFeedbackRequest` | The spot check feedback request |
| `args` | `Object` | Options to pass to the GRPC request (*Optional*) |

**Returns** `Promise<spotCheckPb.SpotCheckFeedbackResponse>`

### cameraCalibrationCommand

```ts
cameraCalibrationCommand(request: spotCheckPb.CameraCalibrationCommandRequest, args?: Object): Promise<spotCheckPb.CameraCalibrationCommandResponse>
```

Issue a camera calibration command to the robot.

| Parameter | Type | Description |
|---|---|---|
| `request` | `spotCheckPb.CameraCalibrationCommandRequest` | The camera calibration command request |
| `args` | `Object` | Options to pass to the GRPC request (*Optional*) |

**Returns** `Promise<spotCheckPb.CameraCalibrationCommandResponse>`

### cameraCalibrationFeedback

```ts
cameraCalibrationFeedback(request: spotCheckPb.CameraCalibrationFeedbackRequest, args?: Object): Promise<spotCheckPb.CameraCalibrationFeedbackResponse>
```

Check the current status of camera calibration.

| Parameter | Type | Description |
|---|---|---|
| `request` | `spotCheckPb.CameraCalibrationFeedbackRequest` | The camera calibration feedback request |
| `args` | `Object` | Options to pass to the GRPC request (*Optional*) |

**Returns** `Promise<spotCheckPb.CameraCalibrationFeedbackResponse>`

## runSpotCheck

```ts
export function runSpotCheck(spotCheckClient: SpotCheckClient, lease: Lease, { timeoutMSec, updateFrequency, verbose }?: {
    timeoutMSec?: number | undefined;
    updateFrequency?: number | undefined;
    verbose?: boolean | undefined;
}): Promise<spotCheckPb.SpotCheckFeedbackResponse>
```

Run full spot check routine. The robot should be sitting on flat ground when this routine is
started. This routine calibrates robot joints and checks camera health.

| Parameter | Type | Description |
|---|---|---|
| `spotCheckClient` | `SpotCheckClient` | client for calling calibration service. |
| `lease` | `Lease` | A active lease. Spot check can be overridden at any time with another command. |
| `options` | `{ timeoutMSec?: number \| undefined; updateFrequency?: number \| undefined; verbose?: boolean \| undefined; }` | A set of options. (*Optional*) |
| `options.timeoutMSec` | `number` | Max time this function will block for. (*Optional*) |
| `options.updateFrequency` | `number` | How often this function will query feedback. (*Optional*) |
| `options.verbose` | `boolean` | Periodically print status. (*Optional*) |

**Returns** `Promise<spotCheckPb.SpotCheckFeedbackResponse>`

## runCameraCalibration

```ts
export function runCameraCalibration(spotCheckclient: SpotCheckClient, lease: Lease, { timeoutMSec, updateFrequency, verbose }?: {
    timeoutMSec?: number | undefined;
    updateFrequency?: number | undefined;
    verbose?: boolean | undefined;
}): Promise<void>
```

Run full camera calibration routine for robot. This function blocks until calibration has
completed. This function should be called once the robot is powered on and standing in the
configuration described in user documentation.

| Parameter | Type | Description |
|---|---|---|
| `spotCheckclient` | `SpotCheckClient` | client for calling calibration service. |
| `lease` | `Lease` | A active lease, used by calibration routine to issue robot commands. Lease keep alive internally managed by service. Revoke lease to end routine at any time. |
| `options` | `{ timeoutMSec?: number \| undefined; updateFrequency?: number \| undefined; verbose?: boolean \| undefined; }` | A set of options. (*Optional*) |
| `options.timeoutMSec` | `number` | Max time this function will block for. (*Optional*) |
| `options.updateFrequency` | `number` | How often this function will query feedback. (*Optional*) |
| `options.verbose` | `boolean` | Periodically print status. (*Optional*) |

**Returns** `Promise<void>`

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `spotCheckPb` | `spot-sdk-js/src/bosdyn/api/spot/spot_check_pb` |

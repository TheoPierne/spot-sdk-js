# Other services

## Spot CAM

The Spot CAM is a payload with a panoramic camera, a PTZ camera (pan, tilt, zoom), lights, speakers and a recorder. Its
clients are in the `spotCam` namespace, and must be registered in the `Sdk`:

```js
const { createStandardSdk, spotCam } = require('spot-sdk-js');
const ptzPb = require('spot-sdk-js/src/bosdyn/api/spot_cam/ptz_pb');

const sdk = createStandardSdk('SpotCamClient');
spotCam.registerAllServiceClients(sdk);
const robot = sdk.createRobot('192.168.80.3');
await robot.authenticate('user', 'password');

const ptzClient = await robot.ensureClient(spotCam.PtzClient.defaultServiceName);
const ptz = new ptzPb.PtzDescription().setName('mech');
await ptzClient.setPtzPosition(ptz, 90, 0, 1); // Pan and tilt in degrees, zoom.
console.log((await ptzClient.getPtzPosition(ptz)).toObject());
```

| Client | Service |
|---|---|
| `spotCam.PtzClient` | The positions, velocities and focus of the PTZ camera. |
| `spotCam.CompositorClient` | The layout of the video stream (the screens), the IR color map. |
| `spotCam.MediaLogClient` | Store and retrieve the images and the videos recorded by the camera. |
| `spotCam.LightingClient` | The LEDs; `spotCam.LightsHelper` makes them flash. |
| `spotCam.AudioClient` | Play and manage the sounds, the volume. |
| `spotCam.StreamQualityClient` | The bitrate and the exposure of the stream. |
| `spotCam.PowerClient`, `HealthClient`, `NetworkClient`, `VersionClient` | Power, temperatures, network settings, versions. |

The images of the Spot CAM come from its image service: `robot.ensureClient(spotCam.IMAGE_SERVICE_NAME)` returns an
`ImageClient` for it. The modules are also there with their Python names: `spotCam.ptz`, `spotCam.media_log`...

## GPS

The `gps` namespace has the clients of the GPS services of the robot and a listener that reads a GPS device:

```js
const net = require('node:net');
const { SE3Pose, gps } = require('spot-sdk-js');

const timeSync = await robot.timeSync;
await timeSync.waitForSync();
const stream = net.connect(5018, '192.168.50.5'); // The NMEA stream of the GPS device.
const listener = new gps.GpsListener(
  robot,
  await timeSync.getRobotTimeConverter(),
  stream,
  'my-gps',
  SE3Pose.fromIdentity(), // The pose of the antenna in the body frame.
  robot.logger,
);
await listener.run(); // Reads the NMEA sentences and sends the positions to the aggregator of the robot.
```

`gps.NtripClient` downloads the corrections of an NTRIP caster and forwards them to the device (`NtripClientParams`
sets the caster, the port and the credentials), `gps.NMEAParser` parses the NMEA sentences, and
`gps.RegistrationClient` and `gps.AggregatorClient` are the clients of the GPS services.

## Orbit

[Orbit](https://bostondynamics.com/products/orbit/) (formerly Scout) manages a fleet of robots through a web API. Its
client is in the `orbit` namespace:

```js
const { orbit } = require('spot-sdk-js');

// Authenticates with the API token of the environment variable BOSDYN_ORBIT_CLIENT_API_TOKEN.
const client = await orbit.createClient({ hostname: 'orbit.example.com', verify: true });
const response = await client.getRobotInfo('my-robot');
console.log(response.status, response.data);
```

The methods return the HTTP responses of [axios](https://axios-http.com/) (`status`, `data`, `headers`): the requests
of the Python SDK return the responses of `requests`. `OrbitClient` covers the runs, the site walks, the anomalies,
the webhooks (`validateWebhookPayload()` checks their signatures), the backups and the system time; the helpers of
`orbit` extract the data captures and the events of the runs.

## Choreography

The choreography service makes the robot dance: it plays sequences of moves, made with the Choreographer application,
and animations.

```js
const { ChoreographyClient, loadChoreographySequenceFromTxtFile, nowSec } = require('spot-sdk-js');

const choreographyClient = await robot.ensureClient(ChoreographyClient.defaultServiceName);
const sequence = loadChoreographySequenceFromTxtFile('dance.csq');
await choreographyClient.uploadChoreography(sequence, false);

// With the lease, the robot powered on and standing: start in 2 seconds (local time), at the first slice.
await choreographyClient.executeChoreography(sequence.getName(), nowSec() + 2, 0);
```

`listAllMoves()` lists the moves the robot knows, `convertAnimationFileToProto()` reads the animations (`.cha` files)
that `uploadAnimatedMove()` uploads, and `startRecordingState()` records the state of the robot during a dance. The
[upload_choreographed_sequence](/examples#upload-choreographed-sequence) example uploads and runs a sequence.

## Lights and sounds

`AudioVisualClient` runs the behaviors of the lights and of the buzzer of the robot:

```js
const { AudioVisualClient, AudioVisualHelper, nowSec } = require('spot-sdk-js');

const avClient = await robot.ensureClient(AudioVisualClient.defaultServiceName);
console.log((await avClient.listBehaviors()).map(behavior => behavior.getName()));
await avClient.runBehavior('my-behavior', nowSec() + 5);

// Or, until exit(): the helper runs the behavior again before it ends.
const helper = new AudioVisualHelper(robot, 'my-behavior', 1.0);
await helper.start();
// ...
await helper.exit();
```

## And more

| Client or helper | Use |
|---|---|
| `DoorClient`, `access_controlled_door_util` | Open doors with the arm, or through the access control system of a building. |
| `NetworkComputeBridgeClient` | Run machine learning models on a server, on the images of the robot. |
| `InverseKinematicsClient` | Solve the reachability of arm and body poses. |
| `ManipulationApiClient` | Grasp objects, walk to objects. |
| `AutoReturnClient` | Return the robot along its path when it loses its connection. |
| `KeepaliveClient`, `PolicyKeepalive` | The keepalive policies: what the robot does when a client stops checking in. |
| `LogStatusClient` | Start the experiment logs and the retro logs. |
| `runSpotCheck()`, `runCameraCalibration()` | Check the calibration of the robot, calibrate its cameras. |
| `LicenseClient`, `RobotIdClient`, `DirectoryClient` | The license, the identity and the services of the robot. |
| `GripperCameraParamClient`, `IREnableDisableServiceClient` | The settings of the gripper camera, the IR emitters. |

Each module of the [API reference](/api/) lists its clients and helpers.

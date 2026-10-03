# Examples

The [examples](https://github.com/TheoPierne/spot-sdk-js/tree/main/examples) of the repository are the ports of the
examples of the Python SDK of the same names. They run from a clone of the repository, with the SDK of the repository:

```bash
git clone https://github.com/TheoPierne/spot-sdk-js.git
cd spot-sdk-js
npm install
export BOSDYN_CLIENT_USERNAME=user
export BOSDYN_CLIENT_PASSWORD=password
node examples/hello_spot/hello_spot.js 192.168.80.3
```

The examples with their own `package.json` (`estop`, `get_image`, `spot_light`) need an `npm install` in their
directory first. Each example prints its options with `--help`.

> [!WARNING]
> Most examples move the robot: keep a clear space around it, and an E-Stop at hand.

## Hello Spot

`hello_spot/hello_spot.js`: the tour of the SDK. It authenticates, syncs the clocks, takes the lease, powers on the
robot, makes it stand, twist and look down, takes a picture, and powers it off. The
[getting started](/guide/getting-started) page walks through a shorter version.

## E-Stop

`estop/estop_nogui.js` is a software E-Stop in the terminal, and `estop/estop_gui.js` a window with a big stop button.
They register an E-Stop endpoint and check in until they stop: run one of them before the examples that power on the
robot, when the tablet is not connected.

## Robot state and images

- `get_robot_state/get_robot_state.js`: prints the state, the hardware configuration or the metrics of the robot.
- `get_image/get_image.js`: lists the image sources, and saves images of the chosen sources (`--image-sources`), in a
  chosen pixel format, rotated upright (`--auto-rotate`).
- `get_image/image_viewer.js`: shows the live images of the chosen sources in windows (full screen for a single
  source), until Q or Esc.
- `get_world_objects/get_world_objects.js`: lists the world objects the robot sees (fiducials, docks...).
- `time_sync/time_sync_client.js`: syncs the clocks, and prints the offset between the clock of the computer and the
  clock of the robot.

## Moving the robot

- `stance/stance_in_place.js`: moves the feet of the robot without walking (`--x-offset`, `--y-offset`).
- `arm_simple/arm_simple.js`: unstows the arm, moves the hand, opens and closes the gripper, and stows the arm.
- `docking/dock_my_robot.js`: docks the robot on a dock (`--dock-id`), or undocks it (`--undock`).
- `auto_return/force_start_auto_return.js`: starts the auto return, which walks the robot back along its path.
- `user_nogo_regions/user_nogo_regions.js`: adds no-go regions, boxes the robot avoids, with the world objects.
- `spot_light/spot_light.js`: a state machine: the robot stands up when its cameras see a light, follows it with its
  body, and sits down when the light disappears (`--brightness_threshold`, 250 by default, sets how bright).

## Upload choreographed sequence

`upload_choreographed_sequence/upload_choreographed_sequence.js`: uploads a choreography (a sequence file of
Choreographer), and makes the robot dance it.

## Data and missions

- `data_buffer/data_buffer.js`: sends a text message to the data buffer of the robot.
- `data_service/get_comments.js`: reads the operator comments recorded by the robot.
- `data_service/get_events.js`: reads the events recorded by the robot, filtered by time, type, level and
  description.
- `data_service/get_index.js`: lists the data pages that hold blobs, text messages, events or operator comments.
- `data_service/get_pages.js` and `data_service/delete_pages.js`: list or delete the data pages of a time range
  (`--timespan`), or of given ids.
- `get_mission_state/get_mission_state.js`: prints the state of the mission the robot runs.
- `disable_ir_emission/disable_ir_emission.js`: turns the infrared emitters of the robot on or off (`--enable`,
  `--disable`).
- `orbit/anomalies/get_anomalies.js`: lists the anomalies detected by Orbit, and
  `orbit/anomalies/patch_anomalies.js` closes some of them, or opens or closes one.

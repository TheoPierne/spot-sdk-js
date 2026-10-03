# Navigation and missions

## GraphNav

GraphNav navigates the robot in a map: a graph of **waypoints** (places the robot recorded, with a snapshot of what it
saw) connected by **edges** (the paths between them). The maps are recorded with the tablet, with the recording
service, or with the [recording client](#recording-maps), and uploaded to the robot before navigating.

### Upload a map

A map saved by the Python or JavaScript examples is a directory with the graph, the waypoint snapshots and the edge
snapshots:

```js
const fs = require('node:fs');
const path = require('node:path');

const { GraphNavClient } = require('spot-sdk-js');
const mapPb = require('spot-sdk-js/src/bosdyn/api/graph_nav/map_pb');

const graphNavClient = await robot.ensureClient(GraphNavClient.defaultServiceName);
const read = (...parts) => fs.readFileSync(path.join(mapDirectory, ...parts));

const graph = mapPb.Graph.deserializeBinary(read('graph'));
await graphNavClient.uploadGraph(null, graph, true); // The lease of the wallet, and a new anchoring.
for (const waypoint of graph.getWaypointsList()) {
  const snapshot = mapPb.WaypointSnapshot.deserializeBinary(read('waypoint_snapshots', waypoint.getSnapshotId()));
  await graphNavClient.uploadWaypointSnapshot(snapshot);
}
for (const edge of graph.getEdgesList()) {
  if (!edge.getSnapshotId()) continue;
  const snapshot = mapPb.EdgeSnapshot.deserializeBinary(read('edge_snapshots', edge.getSnapshotId()));
  await graphNavClient.uploadEdgeSnapshot(snapshot);
}
```

`downloadGraph()`, `downloadWaypointSnapshot()` and `downloadEdgeSnapshot()` save a map from the robot, and
`clearGraph()` removes it.

`uploadFromDisk(graphNavClient, mapDirectory)` and `downloadToDisk(graphNavClient, mapDirectory)` (like Python 5.2.0)
do all of this for a directory in this layout. The upload replaces the map of the robot, then sends the snapshots the
robot does not have, by batches of 16 MB (robots 5.1.0 or later). They also run from the command line:
`node node_modules/spot-sdk-js/src/bosdyn-client/graph_nav_download.js ROBOT_IP map_directory`.

### Localize

Before navigating, the robot must know where it is in the map. With a fiducial in sight, it localizes on the nearest
one:

```js
const navPb = require('spot-sdk-js/src/bosdyn/api/graph_nav/nav_pb');

await graphNavClient.setLocalization(new navPb.Localization()); // FIDUCIAL_INIT_NEAREST by default.
const localization = await graphNavClient.getLocalizationState();
console.log(localization.getLocalization().getWaypointId());
```

The other parameters of `setLocalization()` give an initial guess (a waypoint and the pose of the robot relative to
it), a specific fiducial, or the refinement with the lidar or the visual features.

### Navigate

A navigation command lasts for the duration you give it, in seconds. Like the Python example, send it again every half
second with the same command id until the robot arrives: stopping your program stops the robot.

```js
const { setTimeout: sleep } = require('node:timers/promises');
const graphNavPb = require('spot-sdk-js/src/bosdyn/api/graph_nav/graph_nav_pb');

const { Status } = graphNavPb.NavigationFeedbackResponse;
let commandId = null;
for (;;) {
  commandId = await graphNavClient.navigateTo(waypointId, 1.0, null, null, null, null, commandId);
  await sleep(500);
  const status = (await graphNavClient.navigationFeedback(commandId)).getStatus();
  if (status === Status.STATUS_REACHED_GOAL) break;
  if (status !== Status.STATUS_FOLLOWING_ROUTE) throw new Error(`Navigation failed: ${status}`);
}
```

The robot must be powered on and standing, with the lease of the wallet. `navigateRoute()` follows a given route
(`buildRoute()` makes one from waypoints and edges), and `navigateToAnchor()` goes to a pose in the anchoring of the
map.

## Recording maps

`GraphNavRecordingServiceClient` records a map while the robot walks (driven by the tablet or by your commands):

```js
const { GraphNavRecordingServiceClient } = require('spot-sdk-js');

const recordingClient = await robot.ensureClient(GraphNavRecordingServiceClient.defaultServiceName);
await recordingClient.startRecording();
// ... walk; a waypoint is created every few meters, or on demand:
await recordingClient.createWaypoint(undefined, 'door');
await recordingClient.stopRecording();
const recorded = await graphNavClient.downloadGraph();
```

`GraphNavRecordingServiceClient.makeRecordingEnvironment()` sets the prefix of the names of the waypoints and their
annotations. `MapProcessingServiceClient` then improves the map: `processTopology()` closes the loops, and
`processAnchoring()` computes a consistent anchoring of the waypoints.

## Autowalk

An Autowalk is a recorded mission, made of a map and of actions at its waypoints (inspections, data captures...).
`AutowalkClient` compiles it into a mission and loads it on the robot; the mission client plays it:

```js
const fs = require('node:fs');

const { AutowalkClient } = require('spot-sdk-js');
const walksPb = require('spot-sdk-js/src/bosdyn/api/autowalk/walks_pb');

const walk = walksPb.Walk.deserializeBinary(fs.readFileSync('mission.walk'));
const autowalkClient = await robot.ensureClient(AutowalkClient.defaultServiceName);
await autowalkClient.loadAutowalk(walk, [robot.leaseWallet.getLease()]);
```

The map of the walk must be uploaded to GraphNav first.

## Missions

The mission service runs behavior trees (`bosdyn.api.mission.Node`): the missions of Autowalk, or the ones you build.

```js
const fs = require('node:fs');
const { setTimeout: sleep } = require('node:timers/promises');

const { MissionClient, nowSec } = require('spot-sdk-js');
const missionPb = require('spot-sdk-js/src/bosdyn/api/mission/mission_pb');
const nodesPb = require('spot-sdk-js/src/bosdyn/api/mission/nodes_pb');

const missionClient = await robot.ensureClient(MissionClient.defaultServiceName);
const leases = [robot.leaseWallet.getLease()];
await missionClient.loadMission(nodesPb.Node.deserializeBinary(fs.readFileSync('mission.node')), leases);

// Play the mission, and pause it if this program stops telling the robot to go on for 3 more seconds.
const { Status } = missionPb.State;
for (;;) {
  await missionClient.playMission(nowSec() + 3, leases);
  const state = await missionClient.getState();
  if (state.getStatus() !== Status.STATUS_RUNNING) {
    console.log(`Mission ended: ${state.getStatus()}`);
    break;
  }
  await sleep(1_000);
}
```

The mission may ask questions (`state.getQuestionsList()`), which `answerQuestion()` answers. `pauseMission()`,
`stopMission()` and `restartMission()` control it.

The helpers of `bosdyn-mission/util` build the nodes: `protoFromObject()`, `defineBlackboard()`, `setBlackboard()`,
`createValue()`, and `treeToString()` prints a tree. `RemoteClient` is the client of the remote mission services, the
services a mission calls.

# Data and logs

## Data buffer

The data buffer of the robot records what clients send it with its own logs: text messages, operator comments,
events, protobuf messages and binary blobs. The logs downloaded from the robot contain them.

```js
const { DataBufferClient } = require('spot-sdk-js');

const dataBufferClient = await robot.ensureClient(DataBufferClient.defaultServiceName);
await dataBufferClient.addOperatorComment('Start of the test run');
await dataBufferClient.addProtobuf(state, 'my-app/robot-state'); // Any protobuf message, on a channel.
await dataBufferClient.addBlob(Buffer.from('raw data'), 'my-app/raw', 'my-app/sensor');
```

- `robot.operatorComment(text)` and `robot.logEvent(...)` are shortcuts for comments and events.
- `addTextMessages()` records `TextMessage` messages, and `addEvents()` events with a start and an end.
- `registerSignalSchema()` and `addSignalTick()` record signals: a schema of variables, then values at each tick.

### Send the logs of your application

`LoggingHandler` is a [winston](https://github.com/winstonjs/winston) transport that sends the logs to the data buffer,
like the `logging.Handler` of the Python SDK: add it to a logger of your application.

```js
const { LoggerUtil, LoggingHandler } = require('spot-sdk-js');

const handler = new LoggingHandler('my-app', dataBufferClient, {
  timeSyncEndpoint: (await robot.timeSync).endpoint, // Timestamps on the clock of the robot.
});
const logger = LoggerUtil.getLogger('my-app');
logger.add(handler);

logger.info('Recorded in the logs of the robot');
// ...
logger.remove(handler); // Sends the last messages, and stops the handler.
```

It sends the messages in batches (`msgNumLimit` messages, or after `msgAgeLimit` seconds), retries, and stops after 5
failures in a row (`restart()` starts it again). It leaves out the logs of the RPCs that send the messages, and with
`skipRpcs: true` the logs of all the RPCs.

## Data acquisition

The data acquisition service captures data on demand (images, the robot state, the data of payloads), stores it on the
robot, and serves it to download. Autowalk uses it for its inspections.

```js
const { DataAcquisitionClient, acquireAndProcessRequest } = require('spot-sdk-js');
const dataAcquisitionPb = require('spot-sdk-js/src/bosdyn/api/data_acquisition_pb');

const acquisitionClient = await robot.ensureClient(DataAcquisitionClient.defaultServiceName);
// What the robot and its payloads can capture.
const capabilities = await acquisitionClient.getServiceInfo();

const requests = new dataAcquisitionPb.AcquisitionRequestList()
  .setImageCapturesList([
    new dataAcquisitionPb.ImageSourceCapture().setImageService('image').setImageSource('frontleft_fisheye_image'),
  ])
  .setDataCapturesList([new dataAcquisitionPb.DataCapture().setName('robot-state')]);

// Captures, and waits until the data is stored.
const success = await acquireAndProcessRequest(acquisitionClient, requests, 'my-group', 'my-action');
```

The stored data is downloaded from the REST API of the robot:

```js
const { downloadDataREST, makeTimeQueryParams, nowSec } = require('spot-sdk-js');

const query = await makeTimeQueryParams(nowSec() - 600, nowSec(), robot); // The last 10 minutes.
await downloadDataREST(query, robot.address, robot.userToken, './acquisitions');
```

`issueAcquireDataRequest()` starts an acquisition without waiting, `cancelAcquisitionRequest()` cancels it, and
`DataAcquisitionStoreClient` queries the stored data. To add your own data to the service, write a
[data acquisition plugin](/guide/payloads#data-acquisition-plugins).

## BDDF files

BDDF (Boston Dynamics Data Format) is the format of the logs of the robot: series of messages, indexed by time. The
readers and the writers are exported by the package, and close with `await using` or `close()`.

```js
const { DataReader, ProtobufChannelReader, ProtobufReader } = require('spot-sdk-js');
const robotStatePb = require('spot-sdk-js/src/bosdyn/api/robot_state_pb');

const reader = await DataReader.create({ filename: 'robot-state.bddf' });
try {
  const protobufReader = await ProtobufReader.create(reader);
  const channel = await ProtobufChannelReader.create(protobufReader, robotStatePb.RobotState);
  for await (const [timestampNsec, state] of channel) {
    // timestampNsec is a BigInt.
  }
} finally {
  await reader.close();
}
```

```js
const fs = require('node:fs');
const { DataWriter, ProtobufSeriesWriter, nowTimestamp, timestampToNsecBigInt } = require('spot-sdk-js');

const writer = new DataWriter(fs.createWriteStream('out.bddf'), { description: 'my data' });
const series = new ProtobufSeriesWriter(writer, robotStatePb.RobotState);
series.write(timestampToNsecBigInt(nowTimestamp()), state);
await writer.close();
```

A series can have additional indexes, other int64 values for each message, like the time of its publication:
`new ProtobufSeriesWriter(writer, type, null, false, null, ['publish_time_nsec'])`, then
`series.write(timestampNsec, message, [publishTimeNsec])`. Give them as BigInts or strings to keep them exact; the
`DataDescriptor` messages read from the file hold them as decimal strings.

`MessageReader`, `PodSeriesReader`, `GrpcReader` and `StreamDataReader` read the other kinds of series, and
`PodSeriesWriter` and `GrpcServiceWriter` write them.

The `bddf_download` module downloads BDDF data from the robot: `downloadData(robot, hostname, startNsec, endNsec)`.

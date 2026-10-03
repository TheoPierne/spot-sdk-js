# Payloads and services

A payload is a computer or a device mounted on the robot. With the SDK, it registers itself on the robot, authenticates
with its own credentials, and serves gRPC services that the robot and the other clients call through the directory
of the robot: images, data acquisition, area callbacks, network compute...

## Payload registration and authentication

A payload is identified by a GUID and a secret, which an administrator authorizes once in the admin console of the
robot. `readOrCreatePayloadCredentials()` keeps them in a file:

```js
const {
  PayloadRegistrationClient,
  PayloadRegistrationKeepAlive,
  readOrCreatePayloadCredentials,
} = require('spot-sdk-js');
const payloadPb = require('spot-sdk-js/src/bosdyn/api/payload_pb');

const { guid, secret } = readOrCreatePayloadCredentials('payload-credentials.txt');
const payload = new payloadPb.Payload().setGuid(guid).setName('My payload').setDescription('A camera');

const registrationClient = await robot.ensureClient(PayloadRegistrationClient.defaultServiceName);
// Registers the payload, and registers it again if the robot restarts.
const registration = await new PayloadRegistrationKeepAlive(registrationClient, payload, secret).start();

// Waits until the payload is authorized, then authenticates with its credentials.
await robot.authenticateFromPayloadCredentials(guid, secret);
```

`robot.registerPayloadAndAuthenticate(payload, secret)` registers and authenticates in one call. The command line
creates the credentials and registers a payload too (`npx spot-sdk-js <robot> payload --help`).

The argument helpers build the command lines of the payloads like the Python ones: `addPayloadCredentialsArguments()`,
`addServiceHostingArguments()`, `addServiceEndpointArguments()`, and `getGuidAndSecret()` to read them.

## Services

### Run a gRPC service

`GrpcServiceRunner` runs a servicer on a grpc-js server; `DirectoryRegistrationKeepAlive` registers the service in the
directory of the robot, and keeps it registered:

```js
const { DirectoryRegistrationClient, DirectoryRegistrationKeepAlive, GrpcServiceRunner } = require('spot-sdk-js');
const { ImageServiceService } = require('spot-sdk-js/src/bosdyn/api/image_service_grpc_pb');

const runner = new GrpcServiceRunner(servicer, ImageServiceService, 50051);
const port = await runner.waitForStart();

const directoryClient = await robot.ensureClient(DirectoryRegistrationClient.defaultServiceName);
const keepAlive = await new DirectoryRegistrationKeepAlive(directoryClient).start(
  'my-image-service', // The name of the service in the directory.
  'bosdyn.api.ImageService', // Its type.
  'my-image-service.spot.robot', // Its authority.
  '192.168.50.5', // The address of the payload, seen from the robot.
  port,
);

await runner.runUntilInterrupt(); // Until Ctrl-C.
await keepAlive.shutdown();
```

The servicer is an object with a method per RPC, like the handlers of grpc-js (`getImage(call, callback)`...).
`ResponseContext` fills the headers of the responses and logs the requests in the data buffer, and
`populateResponseHeader()` fills a header.

### Image services

`CameraBaseImageServicer` implements the image service for your cameras: write a `CameraInterface` for each one.

```js
const { CameraBaseImageServicer, CameraInterface, VisualImageSource } = require('spot-sdk-js');
const imagePb = require('spot-sdk-js/src/bosdyn/api/image_pb');

class MyCamera extends CameraInterface {
  // Captures an image: returns the image and the time of the capture, in seconds.
  async blockingCapture() {
    return [await readJpegFromMyCamera(), Date.now() / 1000];
  }

  // Fills the Image message with the data of the captured image, in the format of the request.
  imageDecode(imageData, imageProto) {
    imageProto.setFormat(imagePb.Image.Format.FORMAT_JPEG).setData(imageData);
  }
}

const source = new VisualImageSource('my-camera', new MyCamera(), 480, 640);
// create() waits until the servicer is ready (it ensures its clients).
const servicer = await CameraBaseImageServicer.create(robot, 'my-image-service', [source]);
```

The servicer captures the images in the background (`ImageCaptureThread`), converts them to the requested formats, and
answers the `GetImage` requests.

### Data acquisition plugins

A data acquisition plugin adds data to the data acquisition service: the robot calls it for each acquisition, and the
plugin stores its data.

```js
const { DataAcquisitionPluginService, GrpcServiceRunner, makeError } = require('spot-sdk-js');
const dataAcquisitionPb = require('spot-sdk-js/src/bosdyn/api/data_acquisition_pb');
const {
  DataAcquisitionPluginServiceService,
} = require('spot-sdk-js/src/bosdyn/api/data_acquisition_plugin_service_grpc_pb');

const capabilities = [
  new dataAcquisitionPb.DataAcquisitionCapability().setName('my-sensor').setDescription('My sensor'),
];

async function collect(request, storeHelper) {
  const data = await readMySensor();
  for (const capture of request.getAcquisitionRequests().getDataCapturesList()) {
    const dataId = new dataAcquisitionPb.DataIdentifier()
      .setActionId(request.getActionId())
      .setChannel(capture.getName());
    if (data) storeHelper.storeData(data, dataId);
    else storeHelper.state.addErrors([makeError(dataId, 'No data from the sensor')]);
  }
}

const servicer = new DataAcquisitionPluginService(robot, capabilities, collect);
const runner = new GrpcServiceRunner(servicer, DataAcquisitionPluginServiceService, 50052);
```

The service answers the status requests, waits for the stores, and reports the errors of the requests.
`storeHelper.cancelCheck()` throws a `RequestCancelledError` when the acquisition is cancelled: call it in the long
collections.

### Area callbacks

An area callback is a service that GraphNav calls when the robot enters a region of its map: to open a door, to wait for
a signal, to look both ways before crossing... Write a handler, and run it with `runService()`:

```js
const {
  AreaCallbackRegionHandlerBase,
  AreaCallbackServiceConfig,
  AreaCallbackServiceServicer,
  runService,
} = require('spot-sdk-js');
const areaCallbackPb = require('spot-sdk-js/src/bosdyn/api/graph_nav/area_callback_pb');

class WaitHandler extends AreaCallbackRegionHandlerBase {
  begin() {
    return areaCallbackPb.BeginCallbackResponse.Status.STATUS_OK;
  }

  async run() {
    this.stopAtStart(); // The robot waits at the start of the region...
    await this.safeSleep(5_000); // ...for 5 s (throws if the callback is ended)...
    this.continuePastStart(); // ...then crosses it.
    await this.blockUntilArrivedAtEnd();
  }

  end() {}
}

const config = new AreaCallbackServiceConfig('wait-callback');
const servicer = new AreaCallbackServiceServicer(robot, config, WaitHandler);
const [runner, keepAlive] = await runService(robot, servicer, 50053, '192.168.50.5');
```

The handler can take the control of the robot (`controlAtStart()`, `blockUntilControl()`) to command it itself.
`handleServiceFaults()` reports a service fault while the services the callback needs are missing.

## Custom parameters

The services of payloads (images, data acquisition, network compute, area callbacks) can take custom parameters,
described by a spec (`DictParam.Spec`) that the tablet shows as a form. The helpers of
`service_customization_helpers` build the specs, check the values against them, and convert them:

```js
const {
  createValueValidator,
  dictParamsToDict,
  makeDictChildSpec,
  makeDictParamSpec,
  makeDoubleParamSpec,
} = require('spot-sdk-js');

// An exposure between 0.0001 and 1, 0.01 by default.
const spec = makeDictParamSpec({ exposure: makeDictChildSpec(makeDoubleParamSpec(0.01, null, 0.0001, 1.0)) }, false);
const validate = createValueValidator(spec);
const error = validate(params); // null if the values match the spec.
const values = dictParamsToDict(params); // { exposure: 0.01 }
```

## Service faults

`FaultClient` raises and clears the faults of a service, shown on the tablet:

```js
const { FaultClient } = require('spot-sdk-js');
const serviceFaultPb = require('spot-sdk-js/src/bosdyn/api/service_fault_pb');

const faultClient = await robot.ensureClient(FaultClient.defaultServiceName);
const faultId = new serviceFaultPb.ServiceFaultId().setFaultName('camera-disconnected').setServiceName('my-service');
await faultClient.triggerServiceFault(
  new serviceFaultPb.ServiceFault()
    .setFaultId(faultId)
    .setErrorMessage('The camera is disconnected')
    .setSeverity(serviceFaultPb.ServiceFault.Severity.SEVERITY_WARN),
);
await faultClient.clearServiceFault(faultId);
```

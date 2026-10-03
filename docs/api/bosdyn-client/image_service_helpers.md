# bosdyn-client/image_service_helpers

Helpers for implementing an image service: image sources, capture of the images in the background, and a
servicer for many image sources.

```js
const { CaptureLock, CameraInterface, VisualImageSource, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`CaptureLock`](#capturelock) | Class | A lock for asynchronous code, like the threading.Lock of Python: run(fn) calls fn once the previous calls are done. |
| [`CameraInterface`](#camerainterface) | Class | Abstract class interface for capturing and decoding images from a camera. |
| [`VisualImageSource`](#visualimagesource) | Class | Helper class to represent a single image source. |
| [`ThreadCaptureOutput`](#threadcaptureoutput) | Class | Output of ImageCaptureThread.getLatestCapturedImage(). |
| [`ImageCaptureThread`](#imagecapturethread) | Class | Continuously query and store the last successfully captured image and its associated timestamp for a single camera device, in the background. |
| [`CameraBaseImageServicer`](#camerabaseimageservicer) | Class | gRPC service to provide access to multiple different image sources: add it to a grpc-js server with server.addService(ImageServiceService, servicer). |
| [`convertRgbToGrayscale`](#convertrgbtograyscale) | Function | Convert an RGB image to grayscale using Pillow's formula. |
| [`CLEAR_FAULT_RPC_TIMEOUT_MSECS`](#constants) | Constant | Timeout of the ClearServiceFault RPCs, in milliseconds (Python's CLEAR_FAULT_RPC_TIMEOUT_SECS = 0.1). |

## CaptureLock

```ts
class CaptureLock extends Lock
```

A lock for asynchronous code, like the threading.Lock of Python: run(fn) calls fn once the previous calls are done.

## CameraInterface

```ts
class CameraInterface
```

Abstract class interface for capturing and decoding images from a camera.

This interface is used by the VisualImageSource to ensure that each image source has the expected capture and
decoding methods with the right specification.

### Properties

| Property | Type | Description |
|---|---|---|
| `captureLock` | `CaptureLock` | Provided as a convenience for blockingCapture(), which several requests may call at the same time, like the capture_lock of Python (it was missing): `return this.captureLock.run(async () => { ... })`. |

### blockingCapture

```ts
blockingCapture({ customParams }?: {
    customParams?: serviceCustomizationPb.DictParam | null | undefined;
}): any[] | Promise<any[]>
```

Communicates with the camera payload to collect the image data. Several requests may call it at the same time.

| Parameter | Type | Description |
|---|---|---|
| `options` | `{ customParams?: serviceCustomizationPb.DictParam \| null \| undefined; }` | (*Optional*) |
| `options.customParams` | `?serviceCustomizationPb.DictParam` | Custom parameters defined by the image source affecting the resulting capture. (*Optional*) |

**Returns** `any[] \| Promise<any[]>`: The image data (in any format), and the capture timestamp in seconds (float) in the service computer's clock.

### imageDecode

```ts
imageDecode(imageData: any, imageProto: imagePb.Image, imageReq: imagePb.ImageRequest): void | Promise<void>
```

Decode the image data into an Image proto based on the requested format and quality.

| Parameter | Type | Description |
|---|---|---|
| `imageData` | `any` | The image data output from a capture. |
| `imageProto` | `imagePb.Image` | The proto message to populate with decoded image data. |
| `imageReq` | `imagePb.ImageRequest` | The image request associated with the imageData. |

**Returns** `void \| Promise<void>`: Mutates the imageProto message with the decoded data. This function should set the image data, pixel format, image format, and potentially the transform snapshot fields within the imageProto protobuf message.

## VisualImageSource

```ts
class VisualImageSource
```

Helper class to represent a single image source.

It can capture images and decode image data for an image service, and can be configured to:
- throw faults for capture or decode failures;
- request images continuously in the background, to allow image services to respond more rapidly to GetImage
  requests.

### new VisualImageSource

```ts
constructor(imageName: string, cameraInterface: CameraInterface, rows?: number | null, cols?: number | null, gain?: (number | (() => number)) | null, exposure?: (number | (() => number)) | null, pixelFormats?: imagePb.Image.PixelFormat[], logger?: Logger | null, paramSpec?: serviceCustomizationPb.DictParam.Spec | null)
```

| Parameter | Type | Description |
|---|---|---|
| `imageName` | `string` | The name of the image source. |
| `cameraInterface` | `CameraInterface` | A camera class which inherits from and implements the abstract methods of the CameraInterface class. |
| `rows` | `number \| null` | The number of rows of pixels in the image. (*Optional*, default `null`) |
| `cols` | `number \| null` | The number of cols of pixels in the image. (*Optional*, default `null`) |
| `gain` | `(number \| (() => number)) \| null` | The sensor's gain in dB. This can be a fixed value or a function which returns the gain. (*Optional*, default `null`) |
| `exposure` | `(number \| (() => number)) \| null` | The exposure time for an image in seconds. This can be a fixed value or a function which returns the exposure time. (*Optional*, default `null`) |
| `pixelFormats` | `imagePb.Image.PixelFormat[]` | ] Supported pixel formats. (*Optional*, default `[`) |
| `logger` | `Logger \| null` | Logger for debug and warning messages. (*Optional*, default `null`) |
| `paramSpec` | `serviceCustomizationPb.DictParam.Spec \| null` | A set of custom parameters passed into this image source. (*Optional*, default `null`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `imageSourceName` | `string` |  |
| `supportedPixelFormats` | `imagePb.Image.PixelFormat[]` |  |
| `imageSourceProto` | `imagePb.ImageSource` |  |
| `getImageCaptureParams` | `(requestCustomParams?: null) => imagePb.CaptureParameters` |  |
| `paramSpec` | `serviceCustomizationPb.DictParam.Spec \| null` |  |
| `valueValidator` | `(arg0: serviceCustomizationPb.DictParam) => serviceCustomizationPb.CustomParamError \| null` |  |
| `cameraInterface` | `CameraInterface` |  |
| `captureFunction` | `(arg0: serviceCustomizationPb.DictParam \| null) => Promise<any[]>` | Captures an image with the camera interface, and checks for errors. |
| `captureThread` | `ImageCaptureThread \| null` |  |
| `faultClient` | `FaultClient \| null` |  |
| `cameraCaptureFault` | `serviceFaultPb.ServiceFault` |  |
| `decodeDataFault` | `serviceFaultPb.ServiceFault` |  |
| `activeFaultIdNames` | `Set<any>` |  |
| `logger` | `import("./logger_util").Logger` |  |
| `lastErrorMessage` | `string \| null` |  |

### VisualImageSource.makeImageSource

```ts
static makeImageSource(sourceName: string, rows?: number | null, cols?: number | null, pixelFormats?: imagePb.Image.PixelFormat[], imageType?: imagePb.ImageSource.ImageType, imageFormats?: imagePb.Image.Format[], paramSpec?: serviceCustomizationPb.DictParam.Spec | null): imagePb.ImageSource
```

Create an instance of the ImageSource for a given source name.

| Parameter | Type | Description |
|---|---|---|
| `sourceName` | `string` | The name for the camera source. |
| `rows` | `number \| null` | The number of rows of pixels in the image. (*Optional*, default `null`) |
| `cols` | `number \| null` | The number of cols of pixels in the image. (*Optional*, default `null`) |
| `pixelFormats` | `imagePb.Image.PixelFormat[]` | ] The pixel formats supported. (*Optional*, default `[`) |
| `imageType` | `imagePb.ImageSource.ImageType` | The type of image (e.g. visual, depth). (*Optional*) |
| `imageFormats` | `imagePb.Image.Format[]` | The image formats supported (jpeg, raw). (*Optional*) |
| `paramSpec` | `serviceCustomizationPb.DictParam.Spec \| null` | A set of custom parameters passed into this image source. (*Optional*, default `null`) |

**Returns** `imagePb.ImageSource`

### VisualImageSource.makeCaptureParameters

```ts
static makeCaptureParameters(gain?: (number | (() => number)) | null, exposure?: (number | (() => number)) | null, requestCustomParams?: serviceCustomizationPb.DictParam | null): imagePb.CaptureParameters
```

Creates an instance of the CaptureParameters protobuf message.

| Parameter | Type | Description |
|---|---|---|
| `gain` | `(number \| (() => number)) \| null` | The sensor's gain in dB. (*Optional*, default `null`) |
| `exposure` | `(number \| (() => number)) \| null` | The exposure time for an image in seconds. (*Optional*, default `null`) |
| `requestCustomParams` | `serviceCustomizationPb.DictParam \| null` | Custom Params associated with the image request. (*Optional*, default `null`) |

**Returns** `imagePb.CaptureParameters`

### setLogger

```ts
setLogger(logger: Logger | null): void
```

Override the existing logger for the VisualImageSource class.

| Parameter | Type | Description |
|---|---|---|
| `logger` | `Logger \| null` |  |

**Returns** `void`

### createCaptureThread

```ts
createCaptureThread(customParams?: serviceCustomizationPb.DictParam | null): void
```

Start a background loop to continuously capture images.

| Parameter | Type | Description |
|---|---|---|
| `customParams` | `serviceCustomizationPb.DictParam \| null` | Custom parameters of the background captures. (*Optional*, default `null`) |

**Returns** `void`

### initializeFaults

```ts
initializeFaults(faultClient: FaultClient | null, imageService: string): Promise<void>
```

Initialize a fault client and faults for the image source (linked to the image service). All faults associated
with the image service name provided will be cleared.

| Parameter | Type | Description |
|---|---|---|
| `faultClient` | `FaultClient \| null` | The fault client to communicate with the robot. |
| `imageService` | `string` | The image service name to associate faults with. |

**Returns** `Promise<void>`

### triggerFault

```ts
triggerFault(errorMessage: string, fault: serviceFaultPb.ServiceFault): Promise<void>
```

Trigger a service fault for a failure to the fault service.

| Parameter | Type | Description |
|---|---|---|
| `errorMessage` | `string` | The error message to provide in the fault. |
| `fault` | `serviceFaultPb.ServiceFault` | The complete service fault to be issued. |

**Returns** `Promise<void>`

### clearFault

```ts
clearFault(fault: serviceFaultPb.ServiceFault): Promise<void>
```

Attempts to clear a fault from the fault service.

| Parameter | Type | Description |
|---|---|---|
| `fault` | `serviceFaultPb.ServiceFault` | The fault (which contains an ID) to be cleared. |

**Returns** `Promise<void>`

### getImageAndTimestamp

```ts
getImageAndTimestamp(customParams?: serviceCustomizationPb.DictParam | null): Promise<any[]>
```

Retrieve the latest captured image and timestamp.

| Parameter | Type | Description |
|---|---|---|
| `customParams` | `serviceCustomizationPb.DictParam \| null` | Custom parameters affecting the capture. (*Optional*, default `null`) |

**Returns** `Promise<any[]>`: The latest captured image and the time (in seconds) associated with that image capture. Triggers a camera capture fault and returns [null, null] if the image cannot be retrieved.

### imageDecodeWithErrorChecking

```ts
imageDecodeWithErrorChecking(imageData: any, imageProto: imagePb.Image, imageReq: imagePb.ImageRequest): Promise<imagePb.ImageResponse.Status>
```

Decode the image data into an Image proto based on the requested format and quality.

| Parameter | Type | Description |
|---|---|---|
| `imageData` | `any` | The image data returned by the camera interface's blockingCapture function. |
| `imageProto` | `imagePb.Image` | The image proto to be mutated with the decoded data. |
| `imageReq` | `imagePb.ImageRequest` | The image request associated with the imageData. |

**Returns** `Promise<imagePb.ImageResponse.Status>`: Whether the decoding succeeded. A decode data fault is triggered if the image or pixels cannot be decoded to the desired format.

### stopCapturing

```ts
stopCapturing(): Promise<void>
```

Stop the background captures, if any.

**Returns** `Promise<void>`: Resolves once the capture in progress, if any, has ended.

## ThreadCaptureOutput

```ts
class ThreadCaptureOutput
```

Output of ImageCaptureThread.getLatestCapturedImage().

### new ThreadCaptureOutput

```ts
constructor(isValid: boolean, image: any, timestamp: number | null)
```

| Parameter | Type | Description |
|---|---|---|
| `isValid` | `boolean` | Whether the latest capture uses the custom parameters of the latest request, and is therefore returned. |
| `image` | `any` | If the latest capture is valid, the image data in any format. |
| `timestamp` | `number \| null` | The timestamp that the latest valid capture was taken. |

### Properties

| Property | Type | Description |
|---|---|---|
| `isValid` | `boolean` |  |
| `image` | `any` |  |
| `timestamp` | `number \| null` |  |

## ImageCaptureThread

```ts
class ImageCaptureThread
```

Continuously query and store the last successfully captured image and its associated timestamp for a single
camera device, in the background.

### new ImageCaptureThread

```ts
constructor(imageSourceName: string, captureFunc: (arg0: serviceCustomizationPb.DictParam | null) => (any[] | Promise<any[]>), capturePeriodMsecs?: number, customParams?: serviceCustomizationPb.DictParam | null)
```

| Parameter | Type | Description |
|---|---|---|
| `imageSourceName` | `string` | The image source name. |
| `captureFunc` | `(arg0: serviceCustomizationPb.DictParam \| null) => (any[] \| Promise<any[]>)` | The function capturing the image data and timestamp. |
| `capturePeriodMsecs` | `number` | Amount of time (in milliseconds) between captures (it was 50 s). (*Optional*, default `50`) |
| `customParams` | `serviceCustomizationPb.DictParam \| null` | Custom parameters passed to captureFunc. (*Optional*, default `null`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `imageSourceName` | `string` |  |
| `lastCapturedImage` | `any` |  |
| `lastCapturedTime` | `any` |  |
| `hasUpdatedCapture` | `boolean` |  |
| `capturePeriodMsecs` | `number` |  |
| `customParams` | `serviceCustomizationPb.DictParam \| null` |  |
| `initCaptureFunction` | `(arg0: serviceCustomizationPb.DictParam \| null) => (any[] \| Promise<any[]>)` |  |
| `captureFunction` | `() => any` |  |

### startCapturing

```ts
startCapturing(): void
```

Start the background captures.

**Returns** `void`

### maybeUpdateThread

```ts
maybeUpdateThread(customParams?: serviceCustomizationPb.DictParam | null): void
```

Use new custom parameters for the next captures.

| Parameter | Type | Description |
|---|---|---|
| `customParams` | `serviceCustomizationPb.DictParam \| null` | (*Optional*, default `null`) |

**Returns** `void`

### setLastCapturedImage

```ts
setLastCapturedImage(imageFrame: any, captureTime: any): void
```

Update the last image capture and timestamp.

| Parameter | Type | Description |
|---|---|---|
| `imageFrame` | `any` |  |
| `captureTime` | `any` |  |

**Returns** `void`

### getLatestCapturedImage

```ts
getLatestCapturedImage(customParams?: serviceCustomizationPb.DictParam | null): ThreadCaptureOutput
```

The last image and timestamp if the image uses these custom parameters. Otherwise, the next captures use them, and
the output is not valid.

| Parameter | Type | Description |
|---|---|---|
| `customParams` | `serviceCustomizationPb.DictParam \| null` | (*Optional*, default `null`) |

**Returns** `ThreadCaptureOutput`

### stopCapturing

```ts
stopCapturing(): Promise<void>
```

Stop the background captures.

**Returns** `Promise<void>`: Resolves once the capture in progress, if any, has ended.

## CameraBaseImageServicer

```ts
class CameraBaseImageServicer
```

gRPC service to provide access to multiple different image sources: add it to a grpc-js server with
server.addService(ImageServiceService, servicer).

The service can list the available image (device) sources and query each source for image data. Its
initialization is asynchronous: the RPCs wait for it, and `await servicer.ready` (or
CameraBaseImageServicer.create())
waits for it and reports its errors.

### new CameraBaseImageServicer

```ts
constructor(bosdynSdkRobot: import("./robot").Robot, serviceName: string, imageSources: VisualImageSource[], logger?: Logger | null, useBackgroundCaptureThread?: boolean, backgroundCaptureParams?: serviceCustomizationPb.DictParam | null, logImages?: boolean)
```

| Parameter | Type | Description |
|---|---|---|
| `bosdynSdkRobot` | `import("./robot").Robot` | The robot instance for the service to connect to. |
| `serviceName` | `string` | The name of the image service. |
| `imageSources` | `VisualImageSource[]` | The list of image sources. |
| `logger` | `Logger \| null` | Logger for debug and warning messages. (*Optional*, default `null`) |
| `useBackgroundCaptureThread` | `boolean` | If true, the images are captured continuously in the background, so the image service can respond rapidly to the GetImage request. If false, the image service captures during the GetImage request. (*Optional*, default `true`) |
| `backgroundCaptureParams` | `serviceCustomizationPb.DictParam \| null` | Custom image source parameters used for all of the background captures. (*Optional*, default `null`) |
| `logImages` | `boolean` | If true, include image request/response messages in robot logs. (*Optional*, default `false`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `logger` | `import("./logger_util").Logger` |  |
| `bosdynSdkRobot` | `import("./robot").Robot` |  |
| `serviceName` | `string` |  |
| `faultClient` | `any` |  |
| `dataBufferClient` | `any` |  |
| `imageSourcesMapped` | `Map<string, VisualImageSource>` | The image sources by name. |
| `ready` | `Promise<void>` | Resolves once the servicer is initialized. |

### CameraBaseImageServicer.create

```ts
static create(...args: any[]): Promise<CameraBaseImageServicer>
```

Create a servicer and wait for its initialization.

| Parameter | Type | Description |
|---|---|---|
| `...args` | `any[]` | The arguments of the constructor. |

**Returns** `Promise<CameraBaseImageServicer>`

### listImageSources

```ts
listImageSources(call: any, callback: Function): Promise<void>
```

ListImageSources RPC: the list of ImageSources for this given service.

| Parameter | Type | Description |
|---|---|---|
| `call` | `any` | The call, with the ListImageSourcesRequest. |
| `callback` | `Function` | Receives the ListImageSourcesResponse. |

**Returns** `Promise<void>`

### getImage

```ts
getImage(call: any, callback: Function): Promise<void>
```

GetImage RPC: the latest image capture from all the image sources specified in the request.

| Parameter | Type | Description |
|---|---|---|
| `call` | `any` | The call, with the GetImageRequest. |
| `callback` | `Function` | Receives the GetImageResponse. |

**Returns** `Promise<void>`

### stop

```ts
stop(): Promise<void>
```

Stop the background captures of the image sources (Python's __del__).

**Returns** `Promise<void>`

### delete

```ts
delete(): Promise<void>
```

Same as stop().

**Returns** `Promise<void>`

## convertRgbToGrayscale

```ts
export function convertRgbToGrayscale(imageDataRgb: Uint8Array): Uint8Array
```

Convert an RGB image to grayscale using Pillow's formula.

| Parameter | Type | Description |
|---|---|---|
| `imageDataRgb` | `Uint8Array` | The RGB image data, with the R, G, B channels of each pixel in that order. |

**Returns** `Uint8Array`: The grayscale image data, one byte per pixel.

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `CLEAR_FAULT_RPC_TIMEOUT_MSECS` | `100` | Timeout of the ClearServiceFault RPCs, in milliseconds (Python's CLEAR_FAULT_RPC_TIMEOUT_SECS = 0.1). |

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `serviceCustomizationPb` | `spot-sdk-js/src/bosdyn/api/service_customization_pb` |
| `imagePb` | `spot-sdk-js/src/bosdyn/api/image_pb` |
| `serviceFaultPb` | `spot-sdk-js/src/bosdyn/api/service_fault_pb` |

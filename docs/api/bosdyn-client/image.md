# bosdyn-client/image

For clients to use the image service.

```js
const { ImageClient, buildImageRequest, writePgmOrPpm, ... } = require('spot-sdk-js');
// Several modules export these names with different values: they are required from the module.
const { SourceDataError } = require('spot-sdk-js/src/bosdyn-client/image');
```

| Export | Kind | Description |
|---|---|---|
| [`ImageClient`](#imageclient) | Class | Client for the image service. |
| [`buildImageRequest`](#buildimagerequest) | Function | Helper function which builds an ImageRequest from an image source name. |
| [`writePgmOrPpm`](#writepgmorppm) | Function | Write raw data from image_response to a PGM file. |
| [`writeImageData`](#writeimagedata) | Function | Write image data from image_response to a file. |
| [`saveImagesAsFiles`](#saveimagesasfiles) | Function | Write image responses to files. |
| [`pixelToCameraSpace`](#pixeltocameraspace) | Function | Using the camera intrinsics, determine the [x,y,z] point in the camera frame for the [u,v] pixel coordinates. |
| [`depthImageToPointcloud`](#depthimagetopointcloud) | Function | Converts a depth image into a point cloud using the camera intrinsics. |
| [`MAX_DEPTH_IMAGE_RANGE`](#constants) | Constant | Depth images use PIXEL_FORMAT_DEPTH_U16. |
| [`ImageResponseError`](#imageresponseerror) | Class | General class of errors for Image service. |
| [`UnknownImageSourceError`](#unknownimagesourceerror) | Class | System cannot find the requested image source name. |
| [`SourceDataError`](#sourcedataerror) | Class | System cannot generate the ImageSource at this time. |
| [`ImageDataError`](#imagedataerror) | Class | System cannot generate image data for the ImageCapture at this time. |
| [`UnsupportedImageFormatRequestedError`](#unsupportedimageformatrequestederror) | Class | The image service cannot return data in the requested format. |
| [`UnsupportedPixelFormatRequestedError`](#unsupportedpixelformatrequestederror) | Class | The image service cannot return data in the requested pixel format. |
| [`UnsupportedResizeRatioRequestedError`](#unsupportedresizeratiorequestederror) | Class | The image service cannot return data with the requested resize ratio. |

## ImageClient

```ts
class ImageClient extends BaseClient<ImageServiceClient>
```

Client for the image service.

### Properties

| Property | Type | Description |
|---|---|---|
| `defaultServiceName` | `string` | Static. Value: `'image'`. |
| `serviceType` | `string` | Static. Value: `'bosdyn.api.ImageService'`. |

### listImageSources

```ts
listImageSources(args?: Object): Promise<imagePb.ImageSource[]>
```

Obtain the list of ImageSources.

| Parameter | Type | Description |
|---|---|---|
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<imagePb.ImageSource[]>`

### getImageFromSources

```ts
getImageFromSources(imageSources: string[], args?: Object): Promise<imagePb.ImageResponse[]>
```

Obtain images from sources using default parameters.

| Parameter | Type | Description |
|---|---|---|
| `imageSources` | `string[]` | The different image sources to request images from. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<imagePb.ImageResponse[]>`

### getImage

```ts
getImage(imageRequests: imagePb.ImageRequest[], args?: Object): Promise<imagePb.ImageResponse[]>
```

Obtain the set of images from the robot.

| Parameter | Type | Description |
|---|---|---|
| `imageRequests` | `imagePb.ImageRequest[]` | A list of the ImageRequest protobuf messages which specify which images to collect. |
| `args` | `Object` | Extra arguments for controlling RPC details. (*Optional*) |

**Returns** `Promise<imagePb.ImageResponse[]>`

## ImageResponseError

```ts
class ImageResponseError extends ResponseError
```

General class of errors for Image service.

## UnknownImageSourceError

```ts
class UnknownImageSourceError extends ImageResponseError
```

System cannot find the requested image source name.

## SourceDataError

```ts
class SourceDataError extends ImageResponseError
```

System cannot generate the ImageSource at this time.

## ImageDataError

```ts
class ImageDataError extends ImageResponseError
```

System cannot generate image data for the ImageCapture at this time.

## UnsupportedImageFormatRequestedError

```ts
class UnsupportedImageFormatRequestedError extends ImageResponseError
```

The image service cannot return data in the requested format.

## UnsupportedPixelFormatRequestedError

```ts
class UnsupportedPixelFormatRequestedError extends ImageResponseError
```

The image service cannot return data in the requested pixel format.

## UnsupportedResizeRatioRequestedError

```ts
class UnsupportedResizeRatioRequestedError extends ImageResponseError
```

The image service cannot return data with the requested resize ratio.

## buildImageRequest

```ts
export function buildImageRequest(imageSourceName: string, qualityPercent?: number, imageFormat?: imagePb.Image.Format, pixelFormat?: imagePb.Image.PixelFormat, resizeRatio?: number, fallbackFormats?: imagePb.Image.PixelFormat | imagePb.Image.PixelFormat[]): imagePb.ImageRequest
```

Helper function which builds an ImageRequest from an image source name.

By default the robot will choose an appropriate format when no image format
is provided. For example, it will choose JPEG for visual images, or RAW for
depth images. Clients can provide an image_format for other cases.

| Parameter | Type | Description |
|---|---|---|
| `imageSourceName` | `string` | The image source to query. |
| `qualityPercent` | `number` | The image quality from [0,100] (percent-value). (*Optional*) |
| `imageFormat` | `imagePb.Image.Format` | The type of format for the image data, such as JPEG, RAW, or RLE. (*Optional*) |
| `pixelFormat` | `imagePb.Image.PixelFormat` | The pixel format of the image. (*Optional*) |
| `resizeRatio` | `number` | Resize ratio for image dimensions. (*Optional*) |
| `fallbackFormats` | `imagePb.Image.PixelFormat \| imagePb.Image.PixelFormat[]` | Fallback pixel formats to use if the pixelFormat is invalid. (*Optional*) |

**Returns** `imagePb.ImageRequest`

## writePgmOrPpm

```ts
export function writePgmOrPpm(imageResponse: imagePb.ImageResponse, filename?: string, filepath?: string, includePixelFormat?: boolean): void
```

Write raw data from image_response to a PGM file.

| Parameter | Type | Description |
|---|---|---|
| `imageResponse` | `imagePb.ImageResponse` | The ImageResponse proto to parse. |
| `filename` | `string` | Name of the output file, if None is passed, then "image-{SOURCENAME}.pgm" is used. (*Optional*) |
| `filepath` | `string` | The directory to save the image. (*Optional*) |
| `includePixelFormat` | `boolean` | Append the pixel format to the image name when generating a filename ("image-{SOURCENAME}-{PIXELFORMAT}.pgm"). (*Optional*) |

**Returns** `void`

## writeImageData

```ts
export function writeImageData(imageResponse: imagePb.ImageResponse, filename?: string, filepath?: string, includePixelFormat?: boolean): void
```

Write image data from image_response to a file.

| Parameter | Type | Description |
|---|---|---|
| `imageResponse` | `imagePb.ImageResponse` | The ImageResponse proto to parse. |
| `filename` | `string` | Name of the output file (including the file extension), if null is passed, then "image-{SOURCENAME}.jpg" is used. (*Optional*) |
| `filepath` | `string` | The directory to save the image. (*Optional*) |
| `includePixelFormat` | `boolean` | Append the pixel format to the image name when generating a filename ("image-{SOURCENAME}-{PIXELFORMAT}.jpg"). (*Optional*) |

## saveImagesAsFiles

```ts
export function saveImagesAsFiles(imageResponses: imagePb.ImageResponse[] | imagePb.GetImageResponse, filename?: string, filepath?: string, includePixelFormat?: boolean): void
```

Write image responses to files.

| Parameter | Type | Description |
|---|---|---|
| `imageResponses` | `imagePb.ImageResponse[] \| imagePb.GetImageResponse` | The list of image responses to save, as returned by ImageClient.getImage(), or the GetImageResponse that contains them. |
| `filename` | `string` | Name prefix of the output files (made unique by an integer suffix), if null is passed the image source name is used. (*Optional*) |
| `filepath` | `string` | The directory to save the image files. (*Optional*) |
| `includePixelFormat` | `boolean` | Append the pixel format to the image name when generating a filename ("image-{SOURCENAME}-{PIXELFORMAT}.jpg"). (*Optional*) |

## pixelToCameraSpace

```ts
export function pixelToCameraSpace(imageProto: imagePb.ImageSource, pixelX: number, pixelY: number, depth?: number): number[]
```

Using the camera intrinsics, determine the [x,y,z] point in the camera frame for
the [u,v] pixel coordinates.

| Parameter | Type | Description |
|---|---|---|
| `imageProto` | `imagePb.ImageSource` | The image source proto which the pixel coordinates are from. Use of imagePb.ImageCaptureAndSource or imagePb.ImageResponse types here have been deprecated. |
| `pixelX` | `number` | x-coordinate. |
| `pixelY` | `number` | y-coordinate. |
| `depth` | `number` | The depth from the camera to the point of interest. (*Optional*) |

**Returns** `number[]`

**Throws**

- `ValueError` The image source has no pinhole camera model.

## depthImageToPointcloud

```ts
export function depthImageToPointcloud(imageResponse: imagePb.ImageResponse, minDist?: number, maxDist?: number): NdArray
```

Converts a depth image into a point cloud using the camera intrinsics. The point
cloud is represented as a numpy array of [x,y,z] values. Requests can optionally filter
the results based on the points distance to the image plane. A depth image is represented
with an unsigned 16-bit integer and a scale factor to convert that distance to meters. In
addition, values of zero and 2^16 (uint 16 maximum) are used to represent invalid indices.
A (minDist * depth_scale) value that casts to an integer value &lt;=0 will be assigned a
value of 1 (the minimum representational distance). Similarly, a (maxDist * depth_scale)
value that casts to &gt;= 2^16 will be assigned a value of 2^16 - 1 (the maximum
representational distance).

| Parameter | Type | Description |
|---|---|---|
| `imageResponse` | `imagePb.ImageResponse` | An ImageResponse containing a depth image. |
| `minDist` | `number` | All points in the returned point cloud will be greater than minDist from the image plane [meters]. (*Optional*) |
| `maxDist` | `number` | All points in the returned point cloud will be less than maxDist from the image plane [meters]. (*Optional*) |

**Returns** `NdArray`: The [x,y,z] values of the point cloud, expressed in the sensor frame: an array of shape (N, 3).

**Throws**

- `ValueError` The image is not a depth image with a pinhole camera model.

## Constants

| Constant | Value or type | Description |
|---|---|---|
| `MAX_DEPTH_IMAGE_RANGE` | `65535` | Depth images use PIXEL_FORMAT_DEPTH_U16. A value of 0 or MAX_DEPTH_IMAGE_RANGE represents invalid data. |

## Protobuf modules

The types of this page named `<module>.<Message>` are the protobuf messages of these modules:

| Name | Module |
|---|---|
| `imagePb` | `spot-sdk-js/src/bosdyn/api/image_pb` |

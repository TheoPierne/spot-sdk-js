/**
 * @file For clients to use the image service.
 */

'use strict';

const { Buffer } = require('node:buffer');
const { writeFileSync } = require('node:fs');
const path = require('node:path');
const process = require('node:process');

const { array, zeros } = require('@d4c/numjs').default;

const {
  BaseClient,
  errorFactory,
  commonHeaderErrors,
  customParamsError,
  handleCommonHeaderErrors,
} = require('./common');
const { ResponseError, UnsetStatusError, ValueError } = require('./exceptions');
const { DefaultDict } = require('./util');

const imagePb = require('../bosdyn/api/image_pb');
const { ImageServiceClient } = require('../bosdyn/api/image_service_grpc_pb');

/**
 * @typedef {import('@d4c/numjs').NdArray} NdArray
 */

/** General class of errors for Image service. */
class ImageResponseError extends ResponseError {}
/** System cannot find the requested image source name. */
class UnknownImageSourceError extends ImageResponseError {}
/** System cannot generate the ImageSource at this time. */
class SourceDataError extends ImageResponseError {}
/** System cannot generate image data for the ImageCapture at this time. */
class ImageDataError extends ImageResponseError {}
/** The image service cannot return data in the requested format. */
class UnsupportedImageFormatRequestedError extends ImageResponseError {}
/** The image service cannot return data in the requested pixel format. */
class UnsupportedPixelFormatRequestedError extends ImageResponseError {}
/** The image service cannot return data with the requested resize ratio. */
class UnsupportedResizeRatioRequestedError extends ImageResponseError {}

const _STATUS_TO_ERROR = DefaultDict(() => [ResponseError, null]);

_STATUS_TO_ERROR.set(imagePb.ImageResponse.Status.STATUS_OK, [null, null]);
_STATUS_TO_ERROR.set(imagePb.ImageResponse.Status.STATUS_UNKNOWN_CAMERA, [
  UnknownImageSourceError,
  'System cannot find the requested image source name.',
]);
_STATUS_TO_ERROR.set(imagePb.ImageResponse.Status.STATUS_SOURCE_DATA_ERROR, [
  SourceDataError,
  'System cannot generate the ImageSource at this time.',
]);
_STATUS_TO_ERROR.set(imagePb.ImageResponse.Status.STATUS_IMAGE_DATA_ERROR, [
  ImageDataError,
  'System cannot generate image data for the ImageCapture at this time.',
]);
_STATUS_TO_ERROR.set(imagePb.ImageResponse.Status.STATUS_UNSUPPORTED_IMAGE_FORMAT_REQUESTED, [
  UnsupportedImageFormatRequestedError,
  'The image service cannot return data in the requested format.',
]);
_STATUS_TO_ERROR.set(imagePb.ImageResponse.Status.STATUS_UNSUPPORTED_PIXEL_FORMAT_REQUESTED, [
  UnsupportedPixelFormatRequestedError,
  'The image service cannot return data in the requested pixel format.',
]);
_STATUS_TO_ERROR.set(imagePb.ImageResponse.Status.STATUS_UNSUPPORTED_RESIZE_RATIO_REQUESTED, [
  UnsupportedResizeRatioRequestedError,
  'The image service cannot return data with the requested resize ratio.',
]);
_STATUS_TO_ERROR.set(imagePb.ImageResponse.Status.STATUS_UNKNOWN, [
  UnsetStatusError,
  "Response's status field (in either message or common header) was UNKNOWN value.",
]);

/**
 * Return a custom exception based on the first invalid image response, null if no error.
 * @param {imagePb.GetImageResponse} response
 * @returns {?Error}
 */
const _errorFromResponse = handleCommonHeaderErrors(response => {
  for (const imageResponse of response.getImageResponsesList()) {
    let result = customParamsError(imageResponse, null, 'status', 'custom_param_error', response);

    if (result) {
      return result;
    }

    result = errorFactory(response, imageResponse.getStatus(), imagePb.ImageResponse.Status, _STATUS_TO_ERROR);

    if (result) {
      result.response = response;
      return result;
    }
  }
  return null;
});

/**
 * Client for the image service.
 * @extends {BaseClient<ImageServiceClient>}
 */
class ImageClient extends BaseClient {
  static defaultServiceName = 'image';
  static serviceType = 'bosdyn.api.ImageService';

  constructor() {
    super(ImageServiceClient);
  }

  /**
   * Obtain the list of ImageSources.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<imagePb.ImageSource[]>}
   */
  listImageSources(args) {
    const req = ImageClient._getListImageSourceRequest();
    return this.call(this._stub.listImageSources, req, _listImageSourcesValue, commonHeaderErrors, false, args);
  }

  /**
   * Obtain images from sources using default parameters.
   * @param {string[]} imageSources The different image sources to request images from.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<imagePb.ImageResponse[]>}
   */
  getImageFromSources(imageSources, args) {
    return this.getImage(
      imageSources.map(x => buildImageRequest(x)),
      args,
    );
  }

  /**
   * Obtain the set of images from the robot.
   * @param {imagePb.ImageRequest[]} imageRequests A list of the ImageRequest protobuf messages which
   * specify which images to collect.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<imagePb.ImageResponse[]>}
   */
  getImage(imageRequests, args) {
    const req = ImageClient._getImageRequest(imageRequests);
    return this.call(this._stub.getImage, req, _getImageValue, _errorFromResponse, false, args);
  }

  static _getImageRequest(imageRequests) {
    return new imagePb.GetImageRequest().setImageRequestsList(imageRequests);
  }

  static _getListImageSourceRequest() {
    return new imagePb.ListImageSourcesRequest();
  }
}

/**
 * Helper function which builds an ImageRequest from an image source name.
 *
 * By default the robot will choose an appropriate format when no image format
 * is provided. For example, it will choose JPEG for visual images, or RAW for
 * depth images. Clients can provide an image_format for other cases.
 * @param {string} imageSourceName The image source to query.
 * @param {number} qualityPercent The image quality from [0,100] (percent-value).
 * @param {imagePb.Image.Format} imageFormat The type of format for the image data, such as JPEG, RAW, or RLE.
 * @param {imagePb.Image.PixelFormat} pixelFormat The pixel format of the image.
 * @param {number} resizeRatio Resize ratio for image dimensions.
 * @param {imagePb.Image.PixelFormat|imagePb.Image.PixelFormat[]} fallbackFormats Fallback pixel formats to use
 * if the pixelFormat is invalid.
 * @returns {imagePb.ImageRequest}
 */
function buildImageRequest(
  imageSourceName,
  qualityPercent = 75,
  imageFormat = null,
  pixelFormat = null,
  resizeRatio = null,
  fallbackFormats = [],
) {
  return new imagePb.ImageRequest()
    .setImageSourceName(imageSourceName)
    .setQualityPercent(qualityPercent)
    .setImageFormat(imageFormat)
    .setResizeRatio(resizeRatio)
    .setPixelFormat(pixelFormat)
    .setFallbackFormatsList(Array.isArray(fallbackFormats) ? fallbackFormats : [fallbackFormats]);
}

function _listImageSourcesValue(response) {
  return response.getImageSourcesList();
}

function _getImageValue(response) {
  return response.getImageResponsesList();
}

/**
 * Name of a pixel format, e.g. 'PIXEL_FORMAT_RGB_U8'.
 * @param {imagePb.Image.PixelFormat} pixelFormat
 * @returns {string}
 */
function _pixelFormatName(pixelFormat) {
  return Object.keys(imagePb.Image.PixelFormat).find(key => imagePb.Image.PixelFormat[key] === pixelFormat);
}

/**
 * Bytes per value of the pixel formats that PGM/PPM files support, like pixel_format_to_numpy_type() in Python.
 * @param {imagePb.Image.PixelFormat} pixelFormat
 * @returns {number}
 */
function _pixelFormatBytes(pixelFormat) {
  const { PixelFormat } = imagePb.Image;
  switch (pixelFormat) {
    case PixelFormat.PIXEL_FORMAT_GREYSCALE_U8:
    case PixelFormat.PIXEL_FORMAT_RGB_U8:
    case PixelFormat.PIXEL_FORMAT_RGBA_U8:
      return 1;
    case PixelFormat.PIXEL_FORMAT_DEPTH_U16:
    case PixelFormat.PIXEL_FORMAT_GREYSCALE_U16:
      return 2;
    default:
      throw new Error(`Image PixelFormat type ${pixelFormat} not supported`);
  }
}

/**
 * Write raw data from image_response to a PGM file.
 * @param {imagePb.ImageResponse} imageResponse The ImageResponse proto to parse.
 * @param {string} filename Name of the output file, if None is passed, then "image-{SOURCENAME}.pgm" is used.
 * @param {string} filepath The directory to save the image.
 * @param {boolean} includePixelFormat Append the pixel format to the image name when generating
 * a filename ("image-{SOURCENAME}-{PIXELFORMAT}.pgm").
 * @returns {void}
 */
function writePgmOrPpm(imageResponse, filename = '', filepath = './', includePixelFormat = false) {
  const { PixelFormat } = imagePb.Image;
  const image = imageResponse.getShot()?.getImage() ?? new imagePb.Image();
  const sourceName = imageResponse.getSource()?.getName() ?? '';
  const pixelFormat = image.getPixelFormat();
  // Determine the data type to decode the image.
  const bytesPerValue = _pixelFormatBytes(pixelFormat);
  const maxVal = bytesPerValue === 2 ? 0xffff : 0xff;

  let numChannels = 1;
  let pgmHeaderNumber = 'P5';
  let fileExtension = '.pgm';

  // Determine the pixel format to get the number of channels the data comes in.
  if (pixelFormat === PixelFormat.PIXEL_FORMAT_RGB_U8) {
    numChannels = 3;
    pgmHeaderNumber = 'P6';
    fileExtension = '.ppm';
  } else if (pixelFormat === PixelFormat.PIXEL_FORMAT_RGBA_U8) {
    console.log('[IMAGE] PGM/PPM format does not support RGBA encodings.');
    return;
  } else if (
    ![
      PixelFormat.PIXEL_FORMAT_GREYSCALE_U8,
      PixelFormat.PIXEL_FORMAT_DEPTH_U16,
      PixelFormat.PIXEL_FORMAT_GREYSCALE_U16,
    ].includes(pixelFormat)
  ) {
    console.log(`[IMAGE] Unsupported pixel format for PGM/PPM: ${_pixelFormatName(pixelFormat)}.`);
    return;
  }

  const data = image.getData_asU8();
  const height = image.getRows();
  const width = image.getCols();
  if (data.length !== height * width * numChannels * bytesPerValue) {
    // eslint-disable-next-line
    console.log(`[IMAGE] Cannot convert raw image into expected shape (rows ${height}, cols ${width}, color channels ${numChannels}).`);
    return;
  }
  // Like Python, the values are written in the byte order of the machine (little-endian): GREYSCALE_U16
  // images come big-endian.
  const pixels = Buffer.from(data);
  if (pixelFormat === PixelFormat.PIXEL_FORMAT_GREYSCALE_U16) {
    pixels.swap16();
  }

  if (!filename) {
    if (includePixelFormat) {
      filename = `image-${sourceName}-${_pixelFormatName(pixelFormat)}${fileExtension}`;
    } else {
      filename = `image-${sourceName}${fileExtension}`;
    }
  }
  filename = path.join(filepath, filename);

  const pgmHeader = `${pgmHeaderNumber} ${width} ${height} ${maxVal}\n`;
  try {
    writeFileSync(filename, Buffer.concat([Buffer.from(pgmHeader, 'latin1'), pixels]));
  } catch (err) {
    console.log(`[IMAGE] Cannot open file ${filename}. Exception thrown: ${err}`);
    return;
  }
  console.log(`[IMAGE] Saved matrix with pixel values from camera "${sourceName}" to file "${filename}".`);
}

/**
 * Write image data from image_response to a file.
 * @param {imagePb.ImageResponse} imageResponse The ImageResponse proto to parse.
 * @param {string} filename Name of the output file (including the file extension), if null is
 * passed, then "image-{SOURCENAME}.jpg" is used.
 * @param {string} filepath The directory to save the image.
 * @param {boolean} includePixelFormat Append the pixel format to the image name when generating
 * a filename ("image-{SOURCENAME}-{PIXELFORMAT}.jpg").
 */
function writeImageData(imageResponse, filename = '', filepath = './', includePixelFormat = false) {
  const image = imageResponse.getShot()?.getImage() ?? new imagePb.Image();
  const sourceName = imageResponse.getSource()?.getName() ?? '';
  if (!filename) {
    if (includePixelFormat) {
      filename = `image-${sourceName}-${_pixelFormatName(image.getPixelFormat())}.jpg`;
    } else {
      filename = `image-${sourceName}.jpg`;
    }
  }

  filename = path.join(filepath, filename);
  try {
    writeFileSync(filename, image.getData_asU8());
    console.log(`[IMAGE] Saved "${sourceName}" to "${filename}".`);
  } catch (err) {
    console.log(`[IMAGE] Failed to save "${sourceName}".`);
    console.error(err);
  }
}

/**
 * Write image responses to files.
 * @param {imagePb.ImageResponse[]|imagePb.GetImageResponse} imageResponses The list of image responses to save,
 * as returned by ImageClient.getImage(), or the GetImageResponse that contains them.
 * @param {string} filename Name prefix of the output files (made unique by an integer suffix), if null
 * is passed the image source name is used.
 * @param {string} filepath The directory to save the image files.
 * @param {boolean} includePixelFormat Append the pixel format to the image name when generating
 * a filename ("image-{SOURCENAME}-{PIXELFORMAT}.jpg").
 */
function saveImagesAsFiles(imageResponses, filename = '', filepath = './', includePixelFormat = false) {
  const responses = Array.isArray(imageResponses) ? imageResponses : imageResponses.getImageResponsesList();
  for (const [index, image] of responses.entries()) {
    let saveFileName = '';
    if (filename) {
      // Add a suffix of the index of the image to ensure the filename is unique.
      saveFileName = `${filename}${index}`;
    }
    const format = image.getShot()?.getImage()?.getFormat() ?? imagePb.Image.Format.FORMAT_UNKNOWN;
    if (format === imagePb.Image.Format.FORMAT_UNKNOWN) {
      // Don't save an image with no format.
      continue;
    } else if (format !== imagePb.Image.Format.FORMAT_JPEG) {
      // Save raw and rle sources as PGM/PPM files.
      writePgmOrPpm(image, saveFileName, filepath, includePixelFormat);
    } else {
      // Save jpeg format as a jpeg image.
      writeImageData(image, saveFileName, filepath, includePixelFormat);
    }
  }
}

let _warnedImageSourceDeprecation = false;

/**
 * Using the camera intrinsics, determine the [x,y,z] point in the camera frame for
 * the [u,v] pixel coordinates.
 * @param {imagePb.ImageSource} imageProto The image source proto which the pixel coordinates are from.
 * Use of imagePb.ImageCaptureAndSource or imagePb.ImageResponse types here have been deprecated.
 * @param {number} pixelX x-coordinate.
 * @param {number} pixelY y-coordinate.
 * @param {number} depth The depth from the camera to the point of interest.
 * @returns {number[]}
 * @throws {ValueError} The image source has no pinhole camera model.
 */
function pixelToCameraSpace(imageProto, pixelX, pixelY, depth = 1.0) {
  let imageSource = imageProto;
  if (imageProto instanceof imagePb.ImageResponse || imageProto instanceof imagePb.ImageCaptureAndSource) {
    if (!_warnedImageSourceDeprecation) {
      _warnedImageSourceDeprecation = true;
      process.emitWarning(
        'Use of imagePb.ImageCaptureAndSource or imagePb.ImageResponse types for imageProto argument have ' +
          'been deprecated, use imagePb.ImageSource instead. version=4.0.0',
        'DeprecationWarning',
      );
    }
    imageSource = imageProto.getSource() ?? new imagePb.ImageSource();
  }

  if (!imageSource.hasPinhole()) {
    throw new ValueError('Requires a pinhole camera_model.');
  }

  const focalLength = imageSource.getPinhole().getIntrinsics().getFocalLength();
  const principalPoint = imageSource.getPinhole().getIntrinsics().getPrincipalPoint();

  const focalX = focalLength.getX();
  const focalY = focalLength.getY();

  const principalX = principalPoint.getX();
  const principalY = principalPoint.getY();

  const xRtCamera = (depth * (pixelX - principalX)) / focalX;
  const yRtCamera = (depth * (pixelY - principalY)) / focalY;
  return [xRtCamera, yRtCamera, depth];
}

/**
 * Depth images use PIXEL_FORMAT_DEPTH_U16. A value of 0 or MAX_DEPTH_IMAGE_RANGE
 * represents invalid data.
 * @constant
 */
const MAX_DEPTH_IMAGE_RANGE = Math.pow(2, 16) - 1;

/**
 * Round to the nearest integer, halves to the nearest even integer, like numpy.rint.
 * @param {number} value
 * @returns {number}
 */
function _rint(value) {
  const rounded = Math.round(value);
  return Math.abs(value - Math.trunc(value)) === 0.5 && rounded % 2 !== 0 ? rounded - 1 : rounded;
}

/**
 * Returns which values of the depth data are valid.
 * @param {ArrayLike<number>} depthArray The depth data.
 * @param {number} minDist All points in the returned point cloud will be greater than min_dist from the image plane.
 * @param {number} maxDist All points in the returned point cloud will be less than max_dist from the image plane.
 * @returns {boolean[]} For each value of the depth data, whether it is valid.
 */
function _depthImageGetValidIndices(depthArray, minDist = 1, maxDist = MAX_DEPTH_IMAGE_RANGE - 1) {
  // Saturate the input to valid values.
  minDist = Math.min(Math.max(minDist, 1), MAX_DEPTH_IMAGE_RANGE - 1);
  maxDist = Math.min(Math.max(maxDist, 1), MAX_DEPTH_IMAGE_RANGE - 1);

  return Array.from(depthArray, value => value >= minDist && value <= maxDist);
}

/**
 * Interprets the image data as 16-bit depth values.
 * @param {imagePb.ImageResponse} imageResponse An ImageResponse containing a depth image.
 * @returns {Uint16Array} The depth values, row by row.
 * @throws {ValueError} The data does not fit the shape of the image.
 */
function _depthImageData(imageResponse) {
  const image = imageResponse.getShot().getImage();
  const data = image.getData_asU8();
  if (data.length % 2 !== 0 || data.length / 2 !== image.getRows() * image.getCols()) {
    throw new ValueError(
      `cannot reshape ${data.length} bytes of depth data into shape (${image.getRows()}, ${image.getCols()})`,
    );
  }
  // The bytes of the data can start at an odd offset: they are read one value at a time, little-endian like
  // numpy on the usual machines.
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  return Uint16Array.from({ length: data.length / 2 }, (_, i) => view.getUint16(2 * i, true));
}

/**
 * Converts a depth image into a point cloud using the camera intrinsics. The point
 * cloud is represented as a numpy array of [x,y,z] values. Requests can optionally filter
 * the results based on the points distance to the image plane. A depth image is represented
 * with an unsigned 16-bit integer and a scale factor to convert that distance to meters. In
 * addition, values of zero and 2^16 (uint 16 maximum) are used to represent invalid indices.
 * A (minDist * depth_scale) value that casts to an integer value <=0 will be assigned a
 * value of 1 (the minimum representational distance). Similarly, a (maxDist * depth_scale)
 * value that casts to >= 2^16 will be assigned a value of 2^16 - 1 (the maximum
 * representational distance).
 * @param {imagePb.ImageResponse} imageResponse An ImageResponse containing a depth image.
 * @param {number} minDist All points in the returned point cloud will be greater than minDist
 * from the image plane [meters].
 * @param {number} maxDist All points in the returned point cloud will be less than maxDist
 * from the image plane [meters].
 * @returns {NdArray} The [x,y,z] values of the point cloud, expressed in the sensor frame: an array of
 * shape (N, 3).
 * @throws {ValueError} The image is not a depth image with a pinhole camera model.
 */
function depthImageToPointcloud(imageResponse, minDist = 0, maxDist = 1000) {
  const source = imageResponse.getSource() ?? new imagePb.ImageSource();
  if (source.getImageType() !== imagePb.ImageSource.ImageType.IMAGE_TYPE_DEPTH) {
    throw new ValueError('requires an image_type of IMAGE_TYPE_DEPTH.');
  }

  if (imageResponse.getShot()?.getImage()?.getPixelFormat() !== imagePb.Image.PixelFormat.PIXEL_FORMAT_DEPTH_U16) {
    throw new ValueError('IMAGE_TYPE_DEPTH with an unsupported format, requires PIXEL_FORMAT_DEPTH_U16.');
  }

  if (!source.hasPinhole()) {
    throw new ValueError('Requires a pinhole camera_model.');
  }

  const sourceRows = source.getRows();
  const sourceCols = source.getCols();
  const intrinsics = source.getPinhole().getIntrinsics();
  const fx = intrinsics.getFocalLength().getX();
  const fy = intrinsics.getFocalLength().getY();
  const cx = intrinsics.getPrincipalPoint().getX();
  const cy = intrinsics.getPrincipalPoint().getY();
  const depthScale = source.getDepthScale();

  const depthArray = _depthImageData(imageResponse);
  if (depthArray.length !== sourceRows * sourceCols) {
    throw new ValueError(`the depth image does not have the ${sourceRows} rows and ${sourceCols} cols of its source`);
  }

  // Determine which indices have valid data in the user requested range.
  const validInds = _depthImageGetValidIndices(depthArray, _rint(minDist * depthScale), _rint(maxDist * depthScale));

  // Convert the valid distance data to (x,y,z) values expressed in the sensor frame, row by row.
  const points = [];
  for (let row = 0; row < sourceRows; row++) {
    for (let col = 0; col < sourceCols; col++) {
      const index = row * sourceCols + col;
      if (validInds[index]) {
        const z = depthArray[index] / depthScale;
        points.push([(z * (col - cx)) / fx, (z * (row - cy)) / fy, z]);
      }
    }
  }
  return points.length > 0 ? array(points) : zeros([0, 3]);
}

module.exports = {
  ImageClient,
  ImageResponseError,
  UnknownImageSourceError,
  SourceDataError,
  ImageDataError,
  buildImageRequest,
  writePgmOrPpm,
  writeImageData,
  saveImagesAsFiles,
  pixelToCameraSpace,
  depthImageToPointcloud,
  MAX_DEPTH_IMAGE_RANGE,
  UnsupportedImageFormatRequestedError,
  UnsupportedPixelFormatRequestedError,
  UnsupportedResizeRatioRequestedError,
};

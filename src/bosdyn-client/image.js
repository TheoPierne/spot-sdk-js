'use strict';

const { writeFileSync } = require('node:fs');
const path = require('node:path');

const { max, array, divide, multiply, subtract, stack } = require('@d4c/numjs').default;
const sharp = require('sharp');

const { BaseClient, errorFactory, commonHeaderErrors, customParamsError } = require('./common');
const { ResponseError, UnsetStatusError } = require('./exceptions');
const { DefaultDict } = require('./util');

const imagePb = require('../bosdyn/api/image_pb');
const { ImageServiceClient } = require('../bosdyn/api/image_service_grpc_pb');

class ImageResponseError extends ResponseError {}
class UnknownImageSourceError extends ImageResponseError {}
class SourceDataError extends ImageResponseError {}
class ImageDataError extends ImageResponseError {}
class UnsupportedImageFormatRequestedError extends ImageResponseError {}
class UnsupportedPixelFormatRequestedError extends ImageResponseError {}
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

function _errorFromResponse(response) {
  for (const imageResponse of response.getImageResponsesList()) {
    let result = customParamsError(imageResponse, null, 'status', 'custom_param_error', response);

    if (result) {
      return result;
    }

    result = errorFactory(
      response,
      imageResponse.getStatus(),
      Object.keys(imagePb.ImageResponse.Status),
      _STATUS_TO_ERROR,
    );

    if (result) {
      result.response = response;
      return result;
    }
  }
  return null;
}

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
   * @param {Object} args Extra arguments for controlling RPC details.
   * @returns {Promise<imagePb.ImageSource[]>}
   */
  listImageSources(args) {
    const req = ImageClient._getListImageSourceRequest();
    return this.call(this._stub.listImageSources, req, _listImageSourcesValue, commonHeaderErrors, false, args);
  }

  /**
   * Obtain images from sources using default parameters.
   * @param {string[]} imageSources The different image sources to request images from.
   * @param {Object} args Extra arguments for controlling RPC details.
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
   * @param {Object} args Extra arguments for controlling RPC details.
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
 * Write raw data from image_response to a PGM file.
 * @param {imagePb.ImageResponse} imageResponse The ImageResponse proto to parse.
 * @param {string} filename Name of the output file, if None is passed, then "image-{SOURCENAME}.pgm" is used.
 * @param {string} filepath The directory to save the image.
 * @param {boolean} includePixelFormat Append the pixel format to the image name when generating
 * a filename ("image-{SOURCENAME}-{PIXELFORMAT}.pgm").
 * @returns {void}
 */
function writePgmOrPpm(imageResponse, filename = '', filepath = './', includePixelFormat = false) {
  let numChannels = 1;
  let pgmHeaderNumber = 'P5';
  let fileExtension = '.pgm';

  if (imageResponse.getShot().getImage().getPixelFormat() === imagePb.Image.PixelFormat.PIXEL_FORMAT_RGB_U8) {
    numChannels = 3;
    pgmHeaderNumber = 'P6';
    fileExtension = '.ppm';
  } else if (imageResponse.getShot().getImage().getPixelFormat() === imagePb.Image.PixelFormat.PIXEL_FORMAT_RGBA_U8) {
    console.log('[IMAGE] PGM/PPM format does not support RGBA encodings.');
    return;
  } else if (
    imageResponse.getShot().getImage().getPixelFormat() in
    [
      imagePb.Image.PixelFormat.PIXEL_FORMAT_GREYSCALE_U8,
      imagePb.Image.PixelFormat.PIXEL_FORMAT_DEPTH_U16,
      imagePb.Image.PixelFormat.PIXEL_FORMAT_GREYSCALE_U16,
    ]
  ) {
    numChannels = 1;
  } else {
    console.log(
      `[IMAGE] Unsupported pixel format for PGM/PPM: ${
        imagePb.Image.PixelFormat[imageResponse.getShot().getImage().getPixelFormat()]
      }.`,
    );
    return;
  }

  let img = sharp(imageResponse.getShot().getImage().getData(), {
    raw: {
      channels: numChannels,
    },
  });
  const height = imageResponse.getShot().getImage().getRows();
  const width = imageResponse.getShot().getImage().getCols();
  try {
    img = img.resize(width, height);
  } catch (err) {
    // eslint-disable-next-line
    console.log(`[IMAGE] Cannot convert raw image into expected shape (rows ${height}, cols ${width}, color channels ${numChannels}).`);
    console.error(err);
    return;
  }
  if (filename.length === 0) {
    if (includePixelFormat) {
      filename = `image-${imageResponse.getSource().getName()}-${Object.keys(imagePb.Image.PixelFormat).find(
        key => imagePb.Image.PixelFormat[key] === imageResponse.getShot().getImage().getPixelFormat(),
      )}${fileExtension}`;
    } else {
      filename = `image-${imageResponse.getSource().getName()}${fileExtension}`;
    }
  }
  filename = path.join(filepath, filename);

  img.toArray().then(data => {
    const maxVal = max(array(data));
    const pgmHeader = `${pgmHeaderNumber} ${width} ${height} ${maxVal}\n`;
    writeFileSync(filename, pgmHeader);
    img.toFile(filename);
    console.log(
      `[IMAGE] Saved matrix with pixel values from camera "${imageResponse
        .getSource()
        .getName()}" to file "${filename}".`,
    );
  });
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
  if (filename.length === 0) {
    if (includePixelFormat) {
      filename = `image-${imageResponse.getSource().getName()}-${Object.keys(imagePb.Image.PixelFormat).find(
        key => imagePb.Image.PixelFormat[key] === imageResponse.getShot().getImage().getPixelFormat(),
      )}.jpg`;
    } else {
      filename = `image-${imageResponse.getSource().getName()}.jpg`;
    }
  }

  filename = path.join(filepath, filename);
  try {
    writeFileSync(filename, imageResponse.getShot().getImage().getData());
    console.log(`[IMAGE] Saved "${imageResponse.source.name}" to "${filename}".`);
  } catch (err) {
    console.log(`[IMAGE] Failed to save "${imageResponse.source.name}".`);
    console.error(err);
  }
}

/**
 * Write image responses to files.
 * @param {imagePb.ImageResponse[]} imageResponses The list of image responses to save.
 * @param {string} filename Name prefix of the output files (made unique by an integer suffix), if null
 * is passed the image source name is used.
 * @param {string} filepath The directory to save the image files.
 * @param {boolean} includePixelFormat Append the pixel format to the image name when generating
 * a filename ("image-{SOURCENAME}-{PIXELFORMAT}.jpg").
 */
function saveImagesAsFiles(imageResponses, filename = '', filepath = './', includePixelFormat = false) {
  for (const [index, image] of imageResponses.getImageResponsesList().entries()) {
    let saveFileName = '';
    if (filename.length !== 0) {
      saveFileName = `${filename}${index}`;
    }
    if (image.getShot().getImage().getFormat() === imagePb.Image.Format.FORMAT_UNKNOWN) {
      continue;
    } else if (image.getShot().getImage().getFormat() !== imagePb.Image.Format.FORMAT_JPEG) {
      writePgmOrPpm(image, saveFileName, filepath, includePixelFormat);
    } else {
      writeImageData(image, saveFileName, filepath, includePixelFormat);
    }
  }
}

/**
 * Using the camera intrinsics, determine the [x,y,z] point in the camera frame for
 * the [u,v] pixel coordinates.
 * @param {imagePb.ImageSource} imageProto The image source proto which the pixel coordinates are from.
 * Use of imagePb.ImageCaptureAndSource or imagePb.ImageResponse types here have been deprecated.
 * @param {number} pixelX x-coordinate.
 * @param {number} pixelY y-coordinate.
 * @param {number} depth The depth from the camera to the point of interest.
 * @returns {number[]}
 */
function pixelToCameraSpace(imageProto, pixelX, pixelY, depth = 1.0) {
  if (!imageProto.hasPinhole()) {
    throw new TypeError('Requires a pinhole camera_model.');
  }

  const focalLength = imageProto.getPinhole().getIntrinsics().getFocalLength();
  const principalPoint = imageProto.getPinhole().getIntrinsics().getPrincipalPoint();

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
 * Returns an array of indices containing valid depth data.
 * @param {number[]} depthArray An array representation of the depth data.
 * @param {number} minDist All points in the returned point cloud will be greater than min_dist from the image plane.
 * @param {number} maxDist All points in the returned point cloud will be less than max_dist from the image plane.
 * @returns {boolean[]}
 */
function _depthImageGetValidIndices(depthArray, minDist = 1, maxDist = MAX_DEPTH_IMAGE_RANGE - 1) {
  minDist = Math.min(Math.max(minDist, 1), MAX_DEPTH_IMAGE_RANGE - 1);
  maxDist = Math.min(Math.max(maxDist, 1), MAX_DEPTH_IMAGE_RANGE - 1);

  return depthArray.map(value => value >= minDist && value <= maxDist);
}

/**
 * Interprets the image data as an array.
 * @param {imagePb.ImageResponse} imageResponse An ImageResponse containing a depth image.
 * @returns {any[]}
 */
function _depthImageDataToNumpy(imageResponse) {
  const image = imageResponse.getShot().getImage();
  const data = image.getData();

  const depthArray = array(new Uint16Array(data.buffer, data.byteOffset, data.length / 2));
  const reshaped = depthArray.reshape(image.getRows(), image.getCols(), -1);

  if (reshaped.shape[2] === 1) {
    return reshaped.reshape(image.getRows(), image.getCols());
  }

  return reshaped;
}

function _generateGrid(rows, cols) {
  const firstAxis = [];
  const secondAxis = [];

  for (let i = 0; i < rows; i++) {
    firstAxis.push([]);
    secondAxis.push([]);
    for (let j = 0; j < cols; j++) {
      firstAxis[i].push(i);
      secondAxis[i].push(j);
    }
  }

  return [array(firstAxis), array(secondAxis)];
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
 * @returns {NdArray}
 */
function depthImageToPointcloud(imageResponse, minDist = 0, maxDist = 1000) {
  if (imageResponse.getSource().getImageType() !== imagePb.ImageSource.IMAGE_TYPE_DEPTH) {
    throw new TypeError('requires an image_type of IMAGE_TYPE_DEPTH.');
  }

  if (imageResponse.getShot().getImage().getPixelFormat() !== imagePb.Image.PIXEL_FORMAT_DEPTH_U16) {
    throw new TypeError('IMAGE_TYPE_DEPTH with an unsupported format, requires PIXEL_FORMAT_DEPTH_U16.');
  }

  if (!imageResponse.getSource().hasPinhole()) {
    throw new Error('Requires a pinhole camera_model.');
  }

  const sourceRows = imageResponse.getSource().getRows();
  const sourceCols = imageResponse.getSource().getCols();
  const fx = imageResponse.getSource().getPinhole().getIntrinsics().getFocalLength().getX();
  const fy = imageResponse.getSource().getPinhole().getIntrinsics().getFocalLength().getY();
  const cx = imageResponse.getSource().getPinhole().getIntrinsics().getPrincipalPoint().getX();
  const cy = imageResponse.getSource().getPinhole().getIntrinsics().getPrincipalPoint().getY();
  const depthScale = imageResponse.getSource().getDepthScale();

  // Convert the proto representation into a numpy array.
  let depthArray = _depthImageDataToNumpy(imageResponse);

  // Determine which indices have valid data in the user requested range.
  const validInds = _depthImageGetValidIndices(
    depthArray,
    Math.round(minDist * depthScale),
    Math.round(maxDist * depthScale),
  );

  // Compute the valid data.
  let [rows, cols] = _generateGrid(sourceRows, sourceCols);
  depthArray = array(depthArray.tolist().filter((_, index) => validInds[index]));
  rows = array(rows.tolist().filter((_, index) => validInds[index]));
  cols = array(cols.tolist().filter((_, index) => validInds[index]));

  // Convert the valid distance data to (x,y,z) values expressed in the sensor frame.
  const z = divide(depthArray, depthArray);
  const x = divide(multiply(z, subtract(cols, cx)), fx);
  const y = divide(multiply(z, subtract(rows, cy)), fy);
  return stack([x, y, z]).T;
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
};

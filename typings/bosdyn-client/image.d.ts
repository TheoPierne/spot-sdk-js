export type NdArray = import("@d4c/numjs").NdArray;
/**
 * Client for the image service.
 * @extends {BaseClient<ImageServiceClient>}
 */
export class ImageClient extends BaseClient<ImageServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    static _getImageRequest(imageRequests: any): imagePb.GetImageRequest;
    static _getListImageSourceRequest(): imagePb.ListImageSourcesRequest;
    constructor();
    /**
     * Obtain the list of ImageSources.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<imagePb.ImageSource[]>}
     */
    listImageSources(args?: Object): Promise<imagePb.ImageSource[]>;
    /**
     * Obtain images from sources using default parameters.
     * @param {string[]} imageSources The different image sources to request images from.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<imagePb.ImageResponse[]>}
     */
    getImageFromSources(imageSources: string[], args?: Object): Promise<imagePb.ImageResponse[]>;
    /**
     * Obtain the set of images from the robot.
     * @param {imagePb.ImageRequest[]} imageRequests A list of the ImageRequest protobuf messages which
     * specify which images to collect.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<imagePb.ImageResponse[]>}
     */
    getImage(imageRequests: imagePb.ImageRequest[], args?: Object): Promise<imagePb.ImageResponse[]>;
}
/**
 * @typedef {import('@d4c/numjs').NdArray} NdArray
 */
/** General class of errors for Image service. */
export class ImageResponseError extends ResponseError {
}
/** System cannot find the requested image source name. */
export class UnknownImageSourceError extends ImageResponseError {
}
/** System cannot generate the ImageSource at this time. */
export class SourceDataError extends ImageResponseError {
}
/** System cannot generate image data for the ImageCapture at this time. */
export class ImageDataError extends ImageResponseError {
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
export function buildImageRequest(imageSourceName: string, qualityPercent?: number, imageFormat?: imagePb.Image.Format, pixelFormat?: imagePb.Image.PixelFormat, resizeRatio?: number, fallbackFormats?: imagePb.Image.PixelFormat | imagePb.Image.PixelFormat[]): imagePb.ImageRequest;
/**
 * Write raw data from image_response to a PGM file.
 * @param {imagePb.ImageResponse} imageResponse The ImageResponse proto to parse.
 * @param {string} filename Name of the output file, if None is passed, then "image-{SOURCENAME}.pgm" is used.
 * @param {string} filepath The directory to save the image.
 * @param {boolean} includePixelFormat Append the pixel format to the image name when generating
 * a filename ("image-{SOURCENAME}-{PIXELFORMAT}.pgm").
 * @returns {void}
 */
export function writePgmOrPpm(imageResponse: imagePb.ImageResponse, filename?: string, filepath?: string, includePixelFormat?: boolean): void;
/**
 * Write image data from image_response to a file.
 * @param {imagePb.ImageResponse} imageResponse The ImageResponse proto to parse.
 * @param {string} filename Name of the output file (including the file extension), if null is
 * passed, then "image-{SOURCENAME}.jpg" is used.
 * @param {string} filepath The directory to save the image.
 * @param {boolean} includePixelFormat Append the pixel format to the image name when generating
 * a filename ("image-{SOURCENAME}-{PIXELFORMAT}.jpg").
 */
export function writeImageData(imageResponse: imagePb.ImageResponse, filename?: string, filepath?: string, includePixelFormat?: boolean): void;
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
export function saveImagesAsFiles(imageResponses: imagePb.ImageResponse[] | imagePb.GetImageResponse, filename?: string, filepath?: string, includePixelFormat?: boolean): void;
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
export function pixelToCameraSpace(imageProto: imagePb.ImageSource, pixelX: number, pixelY: number, depth?: number): number[];
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
export function depthImageToPointcloud(imageResponse: imagePb.ImageResponse, minDist?: number, maxDist?: number): NdArray;
/**
 * Depth images use PIXEL_FORMAT_DEPTH_U16. A value of 0 or MAX_DEPTH_IMAGE_RANGE
 * represents invalid data.
 * @constant
 */
export const MAX_DEPTH_IMAGE_RANGE: number;
/** The image service cannot return data in the requested format. */
export class UnsupportedImageFormatRequestedError extends ImageResponseError {
}
/** The image service cannot return data in the requested pixel format. */
export class UnsupportedPixelFormatRequestedError extends ImageResponseError {
}
/** The image service cannot return data with the requested resize ratio. */
export class UnsupportedResizeRatioRequestedError extends ImageResponseError {
}
import { ImageServiceClient } from "../../src/bosdyn/api/image_service_grpc_pb";
import { BaseClient } from "./common";
import imagePb = require("../../src/bosdyn/api/image_pb");
import { ResponseError } from "./exceptions";

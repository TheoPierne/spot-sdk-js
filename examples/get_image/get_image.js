#!/usr/bin/env node
'use strict';

const { Buffer } = require('node:buffer');
const process = require('node:process');

const cv = require('@u4/opencv4nodejs');
const { ArgumentParser } = require('argparse');

const image_pb = require('../../src/bosdyn/api/image_pb');
const { ImageClient, buildImageRequest } = require('../../src/bosdyn-client/image');
const util = require('../../src/bosdyn-client/util');

const { createStandardSdk } = require('../../src/index');

const ROTATION_ANGLE = {
  back_fisheye_image: 0,
  frontleft_fisheye_image: -78,
  frontright_fisheye_image: -102,
  left_fisheye_image: 0,
  right_fisheye_image: 180,
};

function pixelFormatTypeStrings() {
  return Object.keys(image_pb.Image.PixelFormat).slice(1);
}

function pixelFormatStringToEnum(enumString) {
  return image_pb.Image.PixelFormat[enumString];
}

/**
 * Rotate an image counterclockwise by an angle in degrees, into an image large enough to hold all of it, like
 * ndimage.rotate() of scipy (same size, same center).
 * @param {cv.Mat} img
 * @param {number} angle
 * @returns {cv.Mat}
 */
function rotate(img, angle) {
  const radians = (angle * Math.PI) / 180;
  const cos = Math.abs(Math.cos(radians));
  const sin = Math.abs(Math.sin(radians));
  const { rows, cols } = img;
  const outRows = Math.trunc(rows * cos + cols * sin + 0.5);
  const outCols = Math.trunc(rows * sin + cols * cos + 0.5);
  // A positive angle of OpenCV turns counterclockwise too. The center of the image goes to the center of the output.
  const matrix = cv.getRotationMatrix2D(new cv.Point2((cols - 1) / 2, (rows - 1) / 2), angle, 1);
  matrix.set(0, 2, matrix.at(0, 2) + (outCols - cols) / 2);
  matrix.set(1, 2, matrix.at(1, 2) + (outRows - rows) / 2);
  return img.warpAffine(matrix, new cv.Size(outCols, outRows));
}

async function main(args = null) {
  const parser = new ArgumentParser();
  util.addBaseArguments(parser);

  parser.add_argument('--list', { help: 'list image sources', action: 'store_true' });
  parser.add_argument('--auto-rotate', { help: 'rotate right and front images to be upright', action: 'store_true' });
  parser.add_argument('--image-sources', { help: 'Get image from source(s)', action: 'append' });
  parser.add_argument('--image-service', {
    help: 'Name of the image service to query.',
    default: ImageClient.defaultServiceName,
  });
  parser.add_argument('--pixel-format', {
    help: 'Requested pixel format of image. If supplied, will be used for all sources.',
    choices: pixelFormatTypeStrings(),
  });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  // Create robot object with an image client.
  const sdk = createStandardSdk('image_capture');
  const robot = sdk.createRobot(options.hostname);
  await util.authenticate(robot);
  await robot.syncWithDirectory();
  await (await robot.timeSync).waitForSync();

  /** @type {ImageClient} */
  const imageClient = await robot.ensureClient(options.image_service);

  // Raise exception if no actionable argument provided
  if (!options.list && !options.image_sources) {
    parser.error('Must provide actionable argument (list or image-sources).');
  }

  // Optionally list image sources on robot.
  if (options.list) {
    const imageSources = await imageClient.listImageSources();
    console.log('Image sources:');
    for (const source of imageSources) {
      console.log(`\t${source.getName()}`);
    }
  }

  // Optionally capture one or more images.
  if (options.image_sources) {
    // Capture and save images to disk
    const pixelFormat = pixelFormatStringToEnum(options.pixel_format);
    const imageRequests = options.image_sources.map(x => buildImageRequest(x, undefined, undefined, pixelFormat));
    const imageResponses = await imageClient.getImage(imageRequests);

    const { PixelFormat } = image_pb.Image;
    for (const image of imageResponses) {
      const shot = image.getShot().getImage();
      // Assume a default of 1 byte encodings.
      let numChannels = 1;
      let bytesPerChannel = 1;
      let extension;
      if (shot.getPixelFormat() === PixelFormat.PIXEL_FORMAT_DEPTH_U16) {
        bytesPerChannel = 2;
        extension = '.png';
      } else if (shot.getPixelFormat() === PixelFormat.PIXEL_FORMAT_GREYSCALE_U16) {
        // Python reshapes it into 2 channels of 8 bits, which cv2.imwrite() refuses: one channel of 16 bits, in a PNG
        // like the depth (a JPEG keeps 8 bits).
        bytesPerChannel = 2;
        extension = '.png';
      } else {
        if (shot.getPixelFormat() === PixelFormat.PIXEL_FORMAT_RGB_U8) {
          numChannels = 3;
        } else if (shot.getPixelFormat() === PixelFormat.PIXEL_FORMAT_RGBA_U8) {
          numChannels = 4;
        }
        extension = '.jpg';
      }

      const data = Buffer.from(shot.getData_asU8());
      const rows = shot.getRows();
      const cols = shot.getCols();
      const raw = shot.getFormat() === image_pb.Image.Format.FORMAT_RAW;
      let img;
      // Python reshapes the raw data into rows x cols x channels, and decodes it when the size does not match (the
      // raw images, e.g. the depth, could not be decoded).
      if (raw && data.length === rows * cols * numChannels * bytesPerChannel) {
        const type = bytesPerChannel === 2 ? cv.CV_16UC1 : { 1: cv.CV_8UC1, 3: cv.CV_8UC3, 4: cv.CV_8UC4 }[numChannels];
        img = new cv.Mat(data, rows, cols, type);
      } else {
        img = cv.imdecode(data, cv.IMREAD_UNCHANGED);
      }

      if (options.auto_rotate) {
        // No rotation for the other sources, e.g. the depth (a KeyError in Python).
        img = rotate(img, ROTATION_ANGLE[image.getSource().getName()] ?? 0);
      }

      // Save the image from the GetImage request to the current directory with the filename
      // matching that of the image source.
      // Remove any slashes from the filename the image is saved at locally.
      const imageSavedPath = image.getSource().getName().replaceAll('/', '');
      cv.imwrite(`${imageSavedPath}${extension}`, img);

      console.log(`Save ${imageSavedPath}${extension} to ${process.cwd()}`);
    }
  }
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch(e => {
      throw e;
    });
} else {
  module.exports = main;
}

#!/usr/bin/env node
'use strict';

// Simple image display example.

const { Buffer } = require('node:buffer');
const process = require('node:process');
const { setImmediate } = require('node:timers/promises');

const cv = require('@u4/opencv4nodejs');
const { ArgumentParser } = require('argparse');

const imagePb = require('../../src/bosdyn/api/image_pb');
const { TimedOutError } = require('../../src/bosdyn-client/exceptions');
const { ImageClient, buildImageRequest } = require('../../src/bosdyn-client/image');
const { LoggerUtil } = require('../../src/bosdyn-client/logger_util');
const util = require('../../src/bosdyn-client/util');
const { createStandardSdk } = require('../../src/index');

const _LOGGER = LoggerUtil.getLogger('image_viewer');

const VALUE_FOR_Q_KEYSTROKE = 113;
const VALUE_FOR_ESC_KEYSTROKE = 27;

const ROTATION_ANGLE = {
  back_fisheye_image: 0,
  frontleft_fisheye_image: -78,
  frontright_fisheye_image: -102,
  left_fisheye_image: 0,
  right_fisheye_image: 180,
};

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

/**
 * Convert an image proto message to an openCV image.
 * @param {imagePb.ImageResponse} image
 * @param {boolean} [autoRotate=true]
 * @returns {[cv.Mat, string]} The image, and the extension of its file.
 */
function imageToOpencv(image, autoRotate = true) {
  const shot = image.getShot().getImage();
  const { PixelFormat } = imagePb.Image;
  // Assume a default of 1 byte encodings.
  let numChannels = 1;
  let bytesPerChannel;
  let extension;
  if (shot.getPixelFormat() === PixelFormat.PIXEL_FORMAT_DEPTH_U16) {
    bytesPerChannel = 2;
    extension = '.png';
  } else {
    bytesPerChannel = 1;
    if (shot.getPixelFormat() === PixelFormat.PIXEL_FORMAT_RGB_U8) {
      numChannels = 3;
    } else if (shot.getPixelFormat() === PixelFormat.PIXEL_FORMAT_RGBA_U8) {
      numChannels = 4;
    } else if (shot.getPixelFormat() === PixelFormat.PIXEL_FORMAT_GREYSCALE_U8) {
      numChannels = 1;
    } else if (shot.getPixelFormat() === PixelFormat.PIXEL_FORMAT_GREYSCALE_U16) {
      numChannels = 1;
      bytesPerChannel = 2;
    }
    extension = '.jpg';
  }

  const data = Buffer.from(shot.getData_asU8());
  const rows = shot.getRows();
  const cols = shot.getCols();
  const raw = shot.getFormat() === imagePb.Image.Format.FORMAT_RAW;
  let img;
  // Python reshapes the raw data into rows x cols x channels, and decodes it when the size does not match.
  if (raw && data.length === rows * cols * numChannels * bytesPerChannel) {
    const type = bytesPerChannel === 2 ? cv.CV_16UC1 : { 1: cv.CV_8UC1, 3: cv.CV_8UC3, 4: cv.CV_8UC4 }[numChannels];
    img = new cv.Mat(data, rows, cols, type);
  } else {
    img = cv.imdecode(data, cv.IMREAD_UNCHANGED);
  }

  if (autoRotate) {
    // No rotation for the other sources (a KeyError in Python).
    img = rotate(img, ROTATION_ANGLE[image.getSource().getName()] ?? 0);
  }

  return [img, extension];
}

/**
 * Recreate the ImageClient from the robot object.
 * @param {import('../../src/bosdyn-client/robot').Robot} robot
 * @param {string} imageService The name of the image service.
 * @returns {Promise<ImageClient>}
 */
function resetImageClient(robot, imageService) {
  // Python always recreates the client of 'image' (channel 'api.spot.robot'), whatever --image-service is.
  delete robot.channelsByAuthority[robot.authoritiesByName[imageService]];
  delete robot.serviceClientsByName[imageService];
  return robot.ensureClient(imageService);
}

/**
 * Wait for the images while the windows handle the keys, like the loop on images_future.done() of Python: waitKey()
 * runs the windows, and blocks the event loop meanwhile.
 * @param {Promise<imagePb.ImageResponse[]>} imagesPromise
 * @returns {Promise<?imagePb.ImageResponse[]>} The images, or null if Q or Esc was pressed.
 */
async function waitForImages(imagesPromise) {
  const pending = Symbol('pending');
  for (;;) {
    // Lets the RPC go on, then checks whether it is done.
    const result = await Promise.race([imagesPromise, setImmediate(pending)]);
    if (result !== pending) return result;
    // Python also prints each key code (-1 without a key, every 25 ms): left out.
    const keystroke = cv.waitKey(25);
    if (keystroke === VALUE_FOR_ESC_KEYSTROKE || keystroke === VALUE_FOR_Q_KEYSTROKE) return null;
  }
}

async function main(args = null) {
  // Parse args
  const parser = new ArgumentParser();
  util.addBaseArguments(parser);
  parser.add_argument('--image-sources', { help: 'Get image from source(s)', action: 'append' });
  parser.add_argument('--image-service', {
    help: 'Name of the image service to query.',
    default: ImageClient.defaultServiceName,
  });
  parser.add_argument('-j', '--jpeg-quality-percent', {
    help: 'JPEG quality percentage (0-100)',
    type: 'int',
    default: 50,
  });
  parser.add_argument('-c', '--capture-delay', {
    help: 'Time [ms] to wait before the next capture',
    type: 'int',
    default: 100,
  });
  parser.add_argument('-r', '--resize-ratio', { help: 'Fraction to resize the image', type: 'float', default: 1 });
  parser.add_argument('--disable-full-screen', {
    help: 'A single image source gets displayed full screen by default. This flag disables that.',
    action: 'store_true',
  });
  parser.add_argument('--auto-rotate', { help: 'rotate right and front images to be upright', action: 'store_true' });
  const options = args === null ? parser.parse_args() : parser.parse_args(args);
  // Python fails with a TypeError without image sources.
  if (!options.image_sources) parser.error('Must provide at least one --image-sources.');

  // Create robot object with an image client.
  const sdk = createStandardSdk('image_capture');
  const robot = sdk.createRobot(options.hostname);
  await util.authenticate(robot);
  await robot.syncWithDirectory();
  await (await robot.timeSync).waitForSync();

  /** @type {ImageClient} */
  let imageClient = await robot.ensureClient(options.image_service);
  const requests = options.image_sources.map(source =>
    buildImageRequest(source, options.jpeg_quality_percent, null, null, options.resize_ratio),
  );

  for (const imageSource of options.image_sources) {
    cv.namedWindow(imageSource, cv.WINDOW_NORMAL);
    if (options.image_sources.length > 1 || options.disable_full_screen) {
      cv.setWindowProperty(imageSource, cv.WND_PROP_AUTOSIZE, cv.WINDOW_AUTOSIZE);
    } else {
      cv.setWindowProperty(imageSource, cv.WND_PROP_FULLSCREEN, cv.WINDOW_FULLSCREEN);
    }
  }

  let keystroke = null;
  let timeoutCountBeforeReset = 0;
  const t1 = Date.now();
  let imageCount = 0;
  while (keystroke !== VALUE_FOR_Q_KEYSTROKE && keystroke !== VALUE_FOR_ESC_KEYSTROKE) {
    let images;
    try {
      images = await waitForImages(imageClient.getImage(requests, { timeout: 500 }));
      // Python exits with 1 there, and at the end (its main() returns nothing): quitting is no error here.
      if (images === null) return true;
    } catch (err) {
      // The timeout of the RPC. Python catches the TimedOutError of the time sync, which the RPC never raises: it
      // logs the timeouts as warnings, and never recreates the client.
      if (err instanceof TimedOutError) {
        if (timeoutCountBeforeReset === 5) {
          // To attempt to handle bad comms and continue the live image stream, try recreating the
          // image client after having an RPC timeout 5 times.
          _LOGGER.info('Resetting image client after 5+ timeout errors.');
          imageClient = await resetImageClient(robot, options.image_service);
          timeoutCountBeforeReset = 0;
        } else {
          timeoutCountBeforeReset += 1;
        }
      } else {
        _LOGGER.warn(String(err));
      }
      continue;
    }
    for (const image of images) {
      const [img] = imageToOpencv(image, options.auto_rotate);
      cv.imshow(image.getSource().getName(), img);
    }
    keystroke = cv.waitKey(options.capture_delay);
    imageCount += 1;
    console.log(`Mean image retrieval rate: ${imageCount / ((Date.now() - t1) / 1000)}Hz`);
  }
  return true;
}

if (require.main === module) {
  main()
    .then(ok => process.exit(ok ? 0 : 1))
    .catch(e => {
      throw e;
    });
} else {
  module.exports = main;
}

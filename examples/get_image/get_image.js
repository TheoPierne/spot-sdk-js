#!/usr/bin/env node
'use strict';

const { Buffer } = require('node:buffer');
const process = require('node:process');

const nj = require('@d4c/numjs').default;
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

function rotateBound(image, angle) {
  const [h, w] = image.sizes;
  const [cX, cY] = [Math.round(w / 2), Math.round(h / 2)];

  // Grab the rotation matrix (applying the negative of the
  // angle to rotate clockwise), then grab the sine and cosine
  // (i.e., the rotation components of the matrix)
  const M = cv.getRotationMatrix2D(new cv.Point2(cX, cY), -angle, 1.0);
  const cos = Math.abs(M.at(0, 0));
  const sin = Math.abs(M.at(0, 1));

  // Compute the new bounding dimensions of the image
  const nW = parseInt(h * sin + w * cos);
  const nH = parseInt(h * cos + w * sin);

  // Adjust the rotation matrix to take into account translation
  M.set(0, 2, M.at(0, 2) + Math.round(nW / 2) - cX);
  M.set(1, 2, M.at(1, 2) + Math.round(nH / 2) - cY);

  // Perform the actual rotation and return the image
  return image.warpAffine(M, new cv.Size(nW, nH));
}

async function main(args = null) {
  const parser = new ArgumentParser();
  util.addCommonArguments(parser);

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

  const sdk = createStandardSdk('image_capture');
  const robot = sdk.createRobot(options.hostname);
  await robot.authenticate(options.username, options.password);
  await robot.syncWithDirectory();
  await (await robot.timeSync).waitForSync();

  /** @type {ImageClient} */
  const imageClient = await robot.ensureClient(options.image_service);

  if (!options.list && !options.image_sources) {
    parser.error('Must provide actionable argument (list or image-sources).');
  }

  if (options.list) {
    const imageSources = await imageClient.listImageSources();
    console.log('Image sources:');
    for (const source of imageSources) {
      console.log(`\t${source.getName()}`);
    }
    process.exit(0);
  }

  if (options.image_sources) {
    const pixelFormat = pixelFormatStringToEnum(options.pixel_format);
    const imageRequests = options.image_sources.map(x => buildImageRequest(x, undefined, undefined, pixelFormat));
    const imageResponses = await imageClient.getImage(imageRequests);

    for (const image of imageResponses) {
      let extension, dtype;

      if (image.getShot().getImage().getPixelFormat() === image_pb.Image.PixelFormat.PIXEL_FORMAT_DEPTH_U16) {
        dtype = 'uint16';
        extension = '.png';
      } else {
        dtype = 'uint8';
        extension = '.jpg';
      }

      const data = Buffer.from(image.getShot().getImage().getData_asB64(), 'base64');
      let img = nj[dtype](Array.from(data));

      img = Buffer.from(img.tolist());
      img = cv.imdecode(img);

      if (options.auto_rotate) {
        const rot = ROTATION_ANGLE[image.getSource().getName()];
        img = rotateBound(img, rot);
      }

      // Save the image from the GetImage request to the current directory with the filename
      // matching that of the image source.
      const imageSavedPath = image.getSource().getName().replace('/', '');
      cv.imwrite(`${imageSavedPath}${extension}`, img);

      console.log(`Save ${imageSavedPath}${extension} to ${__dirname}`);
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

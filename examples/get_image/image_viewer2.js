// Copyright (c) 2022 Boston Dynamics, Inc.  All rights reserved.
//
// Downloading, reproducing, distributing or otherwise using the SDK Software
// is subject to the terms and conditions of the Boston Dynamics Software
// Development Kit License (20191101-BDSDK-SL).

'use strict';

const { Buffer } = require('node:buffer');
const process = require('node:process');

const cv = require('@u4/opencv4nodejs');
const argparse = require('argparse');
const nj = require('numjs');

const { ImageClient, build_image_request } = require('../../bosdyn-client/image');
const { LoggerUtil } = require('../../bosdyn-client/loggerUtil'); // Maybe not needed
const { TimedOutError } = require('../../bosdyn-client/time_sync');
const util = require('../../bosdyn-client/util');
const image_pb = require('../../bosdyn/api/image_pb');

const client = require('../../index');

const VALUE_FOR_Q_KEYSTROKE = 113;
const VALUE_FOR_ESC_KEYSTROKE = 27;

const ROTATION_ANGLE = {
  back_fisheye_image: 0,
  frontleft_fisheye_image: -78,
  frontright_fisheye_image: -102,
  left_fisheye_image: 0,
  right_fisheye_image: 180,
};

function rotate_bound(image, angle) {
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

function image_to_opencv(image, auto_rotate = True) {
  // Convert an image proto message to an openCV image.
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

  if (auto_rotate) {
    const rot = ROTATION_ANGLE[image.getSource().getName()];
    img = rotate_bound(img, rot);
  }

  return img, extension; // Maybe not needed
}
async function reset_image_client(robot) {
  // Recreate the ImageClient from the robot object.
  await delete robot.service_clients_by_name('image');
  await delete robot.channels_by_authority('api.spot.robot');
  return await robot.ensure_client('image');
}

async function main(args = null) {
  // Parse args
  const parser = argparse.ArgumentParser();
  util.add_common_arguments(parser);

  parser.add_argument('--image-sources', { help: 'Get image from source(s)', action: 'append' });
  parser.add_argument('--image-service', {
    help: 'Name of the image service to query.',
    default: ImageClient.default_service_name,
  });
  parser.add_argument('-j', '--jpeg-quality-percent', {
    help: 'JPEG quality percentage (0-100)',
    type: int,
    default: 50,
  });
  parser.add_argument('-c', '--capture-delay', {
    help: 'Time [ms] to wait before the next capture',
    type: int,
    default: 100,
  });
  parser.add_argument('--disable-full-screen', {
    help: 'A single image source gets displayed full screen by default. This flag disables that.',
    action: 'store_true',
  });
  parser.add_argument('--auto-rotate', { help: 'rotate right and front images to be upright', action: 'store_true' });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const sdk = client.sdk.create_standard_sdk('image_capture');
  const robot = sdk.create_robot(options.hostname);
  await robot.authenticate(options.username, options.password);
  await robot.sync_with_directory();
  await (await robot.time_sync).wait_for_sync();

  let image_client = await robot.ensure_client(options.image_service);

  const requests = options.image_sources.map(x =>
    build_image_request(x, undefined, undefined, (quality_percent = options.jpeg_quality_percent)),
  );

  for (const image of image_responses) {
    cv.namedWindow(image_source, cv.WINDOW_NORMAL);
    if (len(options.image_sources) > 1 || options.disable_full_screen) {
      cv2.setWindowProperty(image_source, cv.WND_PROP_AUTOSIZE, cv.WINDOW_AUTOSIZE);
    } else {
      cv2.setWindowProperty(image_source, cv.WND_PROP_FULLSCREEN, cv.WINDOW_FULLSCREEN);
    }
  }

  let keystroke = null;
  let timeout_count_before_reset = 0;

  while (keystroke !== VALUE_FOR_Q_KEYSTROKE && keystroke !== VALUE_FOR_ESC_KEYSTROKE) {
    try {
      // Code to get image
      let images = await somePromise();
      for (let i = 0; i < images.length; i++) {
        let image = images[i];
        image = image.rotate(ROTATION_ANGLE[image.source.name]);
        opencv4nodejs.imshow(image.source.name, image);
      }
      keystroke = opencv4nodejs.waitKey(options.capture_delay);
    } catch (err) {
      if (err instanceof TimedOutError) {
        if (timeout_count_before_reset === 5) {
          console.log('Resetting image client after 5+ timeout errors.');
          // Code to reset image client
          timeout_count_before_reset = 0;
        } else {
          timeout_count_before_reset++;
        }
      } else {
        console.warn(err);
        continue;
      }
    }
  }
  if (keystroke === VALUE_FOR_ESC_KEYSTROKE || keystroke === VALUE_FOR_Q_KEYSTROKE) {
    process.exit(1);
  }

  for (var i = 0, _pj_a = images.length; i < _pj_a; i += 1) {
    [image, _] = image_to_opencv(images[i], options.auto_rotate);
    cv2.imshow(images[i].source.name, image);
  }

  keystroke = cv2.waitKey(options.capture_delay);
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

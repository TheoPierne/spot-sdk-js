'use strict';

const { Buffer } = require('node:buffer');

const cv = require('@u4/opencv4nodejs');
const argparse = require('argparse');
const nj = require('numjs');

const { ImageClient, build_image_request } = require('../../bosdyn-client/image');
const util = require('../../bosdyn-client/util');
const image_pb = require('../../bosdyn/api/image_pb');

const client = require('../../index');

const ROTATION_ANGLE = {
  back_fisheye_image: 0,
  frontleft_fisheye_image: -78,
  frontright_fisheye_image: -102,
  left_fisheye_image: 0,
  right_fisheye_image: 180,
};

function pixel_format_type_strings() {
  return Object.keys(image_pb.Image.PixelFormat).slice(1);
}

function pixel_format_string_to_enum(enum_string) {
  return image_pb.Image.PixelFormat[enum_string];
}

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

async function main(args = null) {
  const parser = argparse.ArgumentParser();
  util.add_common_arguments(parser);

  parser.add_argument('--list', { help: 'list image sources', action: 'store_true' });
  parser.add_argument('--auto-rotate', { help: 'rotate right and front images to be upright', action: 'store_true' });
  parser.add_argument('--image-sources', { help: 'Get image from source(s)', action: 'append' });
  parser.add_argument('--image-service', {
    help: 'Name of the image service to query.',
    default: ImageClient.default_service_name,
  });
  parser.add_argument('--pixel-format', {
    help: 'Requested pixel format of image. If supplied, will be used for all sources.',
    choices: pixel_format_type_strings(),
  });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const sdk = client.sdk.create_standard_sdk('image_capture');
  const robot = sdk.create_robot(options.hostname);
  await robot.authenticate(options.username, options.password);
  await robot.sync_with_directory();
  await (await robot.time_sync).wait_for_sync();

  const image_client = await robot.ensure_client(options.image_service);

  if (!options.list && !options.image_sources) {
    parser.error('Must provide actionable argument (list or image-sources).');
  }

  if (options.list) {
    const image_sources = await image_client.list_image_sources();
    console.log('Image sources:');
    for (const source of image_sources) {
      console.log(`\t${source.getName()}`);
    }
  }

  if (options.image_sources) {
    const pixel_format = pixel_format_string_to_enum(options.pixel_format);
    const image_requests = options.image_sources.map(x => build_image_request(x, undefined, undefined, pixel_format));
    const image_responses = await image_client.get_image(image_requests);

    for (const image of image_responses) {
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
        img = rotate_bound(img, rot);
      }

      // Save the image from the GetImage request to the current directory with the filename
      // matching that of the image source.
      const image_saved_path = image.getSource().getName().replace('/', '');
      cv.imwrite(`${image_saved_path}${extension}`, img);

      console.log(`Save ${image_saved_path}${extension} to ${__dirname}`);
    }
    return true;
  }
  return false;
}

if (require.main === module) {
  main();
} else {
  module.exports = main;
}

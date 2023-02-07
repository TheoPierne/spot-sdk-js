// Copyright (c) 2022 Boston Dynamics, Inc.  All rights reserved.
//
// Downloading, reproducing, distributing or otherwise using the SDK Software
// is subject to the terms and conditions of the Boston Dynamics Software
// Development Kit License (20191101-BDSDK-SL).

// Example demonstrating capture of both visual and depth images and then overlaying them.
'use strict';

const process = require('node:process');
const cv = require('@u4/opencv4nodejs');
const argparse = require('argparse');
// Import sys

const nj = require('numjs');

const { ImageClient } = require('../../bosdyn-client/image');
const util = require('../../bosdyn-client/util');
const client = require('../../index');

async function main(args = null) {
  // Parse args
  const parser = argparse.ArgumentParser();
  util.add_common_arguments(parser);
  parser.add_argument('--to-depth', {
    help: 'Convert to the depth frame. Default is convert to visual.',
    action: 'store_true',
  });
  parser.add_argument('--camera', {
    help: 'Camera to acquire image from.',
    default: 'frontleft',
    choices: ['frontleft', 'frontright', 'left', 'right', 'back'],
  });
  parser.add_argument('--auto-rotate', { help: 'rotate right and front images to be upright', action: 'store_true' });
  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  let sources;
  if (options.to_depth) {
    sources = [`${options.camera}_depth`, `${options.camera}_visual_in_depth_frame`];
  } else {
    sources = [`${options.camera}_depth_in_visual_frame`, `${options.camera}_fisheye_image`];
  }

  // Create robot object with an image client.
  const sdk = client.sdk.create_standard_sdk('image_capture');
  const robot = sdk.create_robot(options.hostname);
  await robot.authenticate(options.username, options.password);
  const image_client = await robot.ensure_client(ImageClient.default_service_name);

  // Capture and save images to disk
  // eslint-disable-next-line no-undef
  const image_responses = await image_client.get_image_from_sources(sources);

  // Image responses are in the same order as the requests.
  // Convert to opencv images.

  if (image_responses.length < 2) {
    console.log('Error: failed to get images.');
    return false;
  }

  // Depth is a raw bytestream
  let cv_depth = nj.frombuffer(image_responses[0].shot.image.data, (dtype = nj.uint16));
  cv_depth = cv_depth.reshape(image_responses[0].shot.image.rows, image_responses[0].shot.image.cols);

  // Visual is a JPEG
  const cv_visual = cv.imdecode(nj.frombuffer(image_responses[1].shot.image.data, (dtype = nj.uint8)), -1);

  // Convert the visual image from a single channel to RGB so we can add color
  let visual_rgb;
  if (cv_visual.shape.length === 3) {
    visual_rgb = cv_visual;
  } else {
    visual_rgb = cv.cvtColor(cv_visual, cv.COLOR_GRAY2RGB);
  }

  // Map depth ranges to color

  // cv.applyColorMap() only supports 8-bit; convert from 16-bit to 8-bit and do scaling
  const min_val = nj.min(cv_depth);
  const max_val = nj.max(cv_depth);
  const depth_range = max_val - min_val;
  const depth8 = ((255.0 / depth_range) * (cv_depth - min_val)).astype('uint8');
  const depth8_rgb = cv.cvtColor(depth8, cv.COLOR_GRAY2RGB);
  const depth_color = cv.applyColorMap(depth8_rgb, cv.COLORMAP_JET);

  // Add the two images together.
  let out = cv.addWeighted(visual_rgb, 0.5, depth_color, 0.5, 0);

  if (options.auto_rotate) {
    if (image_responses[0].source.name[(0, 5)] === 'front') {
      out = cv.rotate(out, cv.ROTATE_90_CLOCKWISE);
    } else if (image_responses[0].source.name[(0, 5)] === 'right') {
      out = cv.rotate(out, cv.ROTATE_180);
    }
  }
  // Write the image out.
  const filename = `${options.camera}.jpg`;
  cv.imwrite(filename, out);

  return true;
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

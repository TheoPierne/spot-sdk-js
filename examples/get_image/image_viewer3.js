const cv = require('opencv4nodejs');
const ndimage = require('scipy-ndimage');
const argparse = require('argparse');
const logging = require('logging');
const bosdyn = require('bosdyn');
const bosdynClient = require('bosdyn/client');

const VALUE_FOR_Q_KEYSTROKE = 113;
const VALUE_FOR_ESC_KEYSTROKE = 27;

const ROTATION_ANGLE = {
  'back_fisheye_image': 0,
  'frontleft_fisheye_image': -78,
  'frontright_fisheye_image': -102,
  'left_fisheye_image': 0,
  'right_fisheye_image': 180
};

const _LOGGER = logging.getLogger(__filename);

function image_to_opencv(image, auto_rotate = true) {
  let num_channels = 1;
  let dtype = 'uint8';
  let extension = '.jpg';

  if (image.shot.image.pixel_format === image_pb2.Image.PIXEL_FORMAT_DEPTH_U16) {
    dtype = 'uint16';
    extension = '.png';
  } else {
    if (image.shot.image.pixel_format === image_pb2.Image.PIXEL_FORMAT_RGB_U8) {
      num_channels = 3;
    } else if (image.shot.image.pixel_format === image_pb2.Image.PIXEL_FORMAT_RGBA_U8) {
      num_channels = 4;
    } else if (image.shot.image.pixel_format === image_pb2.Image.PIXEL_FORMAT_GREYSCALE_U8) {
      num_channels = 1;
    } else if (image.shot.image.pixel_format === image_pb2.Image.PIXEL_FORMAT_GREYSCALE_U16) {
      num_channels = 1;
      dtype = 'uint16';
    }
  }

  let img = Buffer.from(image.shot.image.data, 'binary');
  if (image.shot.image.format === image_pb2.Image.FORMAT_RAW) {
    try {
      img = cv.imdecode(img, cv.IMREAD_UNCHANGED);
    } catch (err) {
      img = cv.imdecode(img, -1);
    }
  } else {
    img = cv.imdecode(img, -1);
  }

  if (auto_rotate) {
    img = ndimage.rotate(img, ROTATION_ANGLE[image.source.name]);
  }

  return img, extension;
}

function reset_image_client(robot) {
  delete robot.service_clients_by_name['image'];
  delete robot.channels_by_authority['api.spot.robot'];
    return robot.ensure_client('image');
  }
  
  function main(argv) {
    // Parse args
    const parser = new argparse.ArgumentParser();
    bosdynClient.util.add_base_arguments(parser);
    parser.add_argument('--image-sources', help='Get image from source(s)', action='append');
    parser.add_argument('--image-service', help='Name of the image service to query.', default=bosdyn.client.image.ImageClient.default_service_name);
    parser.add_argument('-j', '--jpeg-quality-percent', help="JPEG quality percentage (0-100)", type=int, default=80);
    parser.add_argument('-r', '--rotate-images', help='Automatically rotate images based on source.', action='store_true', default=true);
    const args = parser.parse_args(argv);
  
    // Create robot object
    const robot = bosdynClient.create_robot(args.hostname);
    robot.authenticate(args.username, args.password);
  
    // Create image client
    let image_client = robot.ensure_client(bosdyn.api.image.ImageService);
  
    if (args.image_sources) {
      // Get images from specified sources
      for (const source of args.image_sources) {
        try {
          const image = image_client.get_image(source);
          const [img, extension] = image_to_opencv(image, args.rotate_images);
  
          // Display the image
          cv.imshow(source, img);
          cv.waitKey();
          cv.destroyAllWindows();
        } catch (err) {
          if (err instanceof bosdyn.client.time_sync.TimedOutError) {
            _LOGGER.error('Timed out waiting for image from source: %s', source);
          } else {
            _LOGGER.error('Failed to get image from source: %s. Error: %s', source, err);
          }
          image_client = reset_image_client(robot);
        }
      }
    } else {
      // Get images from all sources
      const sources = image_client.list_image_sources();
      for (const source of sources.image_sources) {
        try {
          const image = image_client.get_image(source.name);
          const [img, extension] = image_to_opencv(image, args.rotate_images);
  
          // Display the image
          cv.imshow(source.name, img);
          cv.waitKey();
          cv.destroyAllWindows();
        } catch (err) {
          if (err instanceof bosdyn.client.time_sync.TimedOutError) {
            _LOGGER.error('Timed out waiting for image from source: %s', source.name);
          } else {
            _LOGGER.error('Failed to get image from source: %s. Error: %s', source.name, err);
        }
        image_client = reset_image_client(robot);
      }
    }
  }

  robot.logout();
}

// if the file is run directly, not imported, call the main function
if (require.main === module) {
  main(process.argv.slice(2));
}
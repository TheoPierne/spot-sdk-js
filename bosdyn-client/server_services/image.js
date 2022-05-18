'use strict';

const path = require('node:path');
const cv = require('@u4/opencv4nodejs');

const { LoggerUtil } = require('../../bosdyn-client/loggerUtil');
const image_pb = require('../../bosdyn/api/image_pb');
const image_service_grpc_pb = require('../../bosdyn/api/image_service_grpc_pb');

const { populate_response_header } = require('../util');

const logger = LoggerUtil.getLogger('IMAGE');

function listImageSources(call, callback) {
  logger.info('New request /listImageSources !');
  let reply = new image_pb.ListImageSourcesResponse();
  populate_response_header(reply, call.request);

  // eslint-disable-next-line
  const sourceA = new image_pb.ImageSource().setName('back_depth').setRows(240).setCols(424);
  // eslint-disable-next-line
  const sourceB = new image_pb.ImageSource().setName('back_depth_in_visual_frame').setRows(480).setCols(640);
  // eslint-disable-next-line
  const sourceC = new image_pb.ImageSource().setName('back_fisheye_image').setRows(480).setCols(640);

  reply.setImageSourcesList([sourceA, sourceB, sourceC]);

  callback(null, reply);
}

function getImage(call, callback) {
  logger.info('New request /getImage !');
  let reply = new image_pb.GetImageResponse();
  populate_response_header(reply, call.request);

  // /spot.jpg
  const imageData = cv.imread(path.join(__dirname, '/light.jpg'));
  const data = cv.imencode('.jpg', imageData);
  const dataArray = new Uint8Array(data);

  // eslint-disable-next-line
  const imageA = new image_pb.Image().setRows(800).setCols(800).setFormat(2).setPixelFormat(3).setData(dataArray);
  const shotA = new image_pb.ImageCapture().setImage(imageA);
  // eslint-disable-next-line
  const sourceA = new image_pb.ImageSource().setName('back_fisheye_image').setRows(480).setCols(640);
  // eslint-disable-next-line
  const ImageResponseA = new image_pb.ImageResponse().setStatus(1).setShot(shotA).setSource(sourceA);

  reply.setImageResponsesList([ImageResponseA]);

  callback(null, reply);
}

module.exports = {
  service: image_service_grpc_pb.ImageServiceService,
  func: {
    listImageSources,
    getImage,
  },
};

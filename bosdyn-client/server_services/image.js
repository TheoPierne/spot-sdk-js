'use strict';

const image_service_grpc_pb = require('../../bosdyn/api/image_service_grpc_pb');
const image_pb = require('../../bosdyn/api/image_pb');

const {populate_response_header} = require('../util');

const sharp = require('sharp');
const num = require('numjs');
const path = require('node:path');

function listImageSources(call, callback){
	console.log('Nouvelle requete [IMAGE] /listImageSources !');
	let reply = new image_pb.ListImageSourcesResponse();
	populate_response_header(reply, call.request);

	const sourceA = new image_pb.ImageSource()
	.setName('back_depth')
	.setRows(240)
	.setCols(424);

	const sourceB = new image_pb.ImageSource()
	.setName('back_depth_in_visual_frame')
	.setRows(480)
	.setCols(640);

	const sourceC = new image_pb.ImageSource()
	.setName('back_fisheye_image')
	.setRows(480)
	.setCols(640);

	reply.setImageSourcesList([sourceA, sourceB, sourceC]);

	callback(null, reply);
}

async function getImage(call, callback){
	console.log('Nouvelle requete [IMAGE] /getImage !');
	let reply = new image_pb.GetImageResponse();
	populate_response_header(reply, call.request);

	console.log(path.join(__dirname, '/spot.jpg'))

	const imageData = sharp(path.join(__dirname, '/spot.jpg'));

	const sourceA = new image_pb.ImageSource()
	.setName('back_fisheye_image')
	.setRows(480)
	.setCols(640);

	const { data, info } = await imageData
	.raw()
	.toBuffer({ resolveWithObject: true });

	const pixelArray = new Uint8Array(data.buffer);

	const imageA = new image_pb.Image()
	.setRows(800)
	.setCols(800)
	.setFormat(2)
	.setPixelFormat(3)
	.setData(pixelArray);

	const shotA = new image_pb.ImageCapture()
	.setImage(imageA);

	const ImageResponseA = new image_pb.ImageResponse()
	.setStatus(1)
	.setShot(shotA)
	.setSource(sourceA);

	reply.setImageResponsesList([ImageResponseA]);

	callback(null, reply);
}

module.exports = {
	service: image_service_grpc_pb.ImageServiceService,
	func: {
		listImageSources,
		getImage
	}
};
const numjs = require('numjs');
const path = require('path');
const {writeFileSync} = require('fs');

const {BaseClient, error_factory, common_header_errors, error_pair} = require('./common');
const {ResponseError, UnsetStatusError} = require('./exceptions');
const image_pb = require('../bosdyn/api/image_pb');
const image_service_grpc_pb = require('../bosdyn/api/image_service_grpc_pb');

class ImageResponseError extends ResponseError {
	constructor(msg){
		super(msg);
		this.name = 'ImageResponseError';
	}
};

class UnknownImageSourceError extends ImageResponseError {
	constructor(msg){
		super(msg);
		this.name = 'UnknownImageSourceError';
	}
};

class SourceDataError extends ImageResponseError {
	constructor(msg){
		super(msg);
		this.name = 'SourceDataError';
	}
};

class ImageDataError extends ImageResponseError {
	constructor(msg){
		super(msg);
		this.name = 'ImageDataError';
	}
};

class UnsupportedImageFormatRequestedError extends ImageResponseError {
	constructor(msg){
		super(msg);
		this.name = 'ImageDataError';
	}
};

const _STATUS_TO_ERROR = {
	[image_pb.ImageResponse.Status.STATUS_OK]: [null, null],
    [image_pb.ImageResponse.Status.STATUS_UNKNOWN_CAMERA]: [UnknownImageSourceError, 'System cannot find the requested image source name.'],
    [image_pb.ImageResponse.Status.STATUS_SOURCE_DATA_ERROR]: [SourceDataError, 'System cannot generate the ImageSource at this time.'],
    [image_pb.ImageResponse.Status.STATUS_IMAGE_DATA_ERROR]: [ImageDataError, 'System cannot generate image data for the ImageCapture at this time.'],
    [image_pb.ImageResponse.Status.STATUS_UNSUPPORTED_IMAGE_FORMAT_REQUESTED]: [UnsupportedImageFormatRequestedError, 'The image service cannot return data in the requested format.'],
    [image_pb.ImageResponse.Status.STATUS_UNKNOWN]: [UnsetStatusError, 'Response\'s status field (in either message or common header) was UNKNOWN value.']
}

function _error_from_response(response){
	for(const image_response of response.getImageResponsesList()){
		if(image_response.getStatus() == image_pb.ImageResponse.Status.STATUS_UNKNOWN){
			return new UnsetStatusError(response);
		}

		const result = error_factory(response, image_response.getStatus(), Object.keys(image_pb.ImageResponse.Status), _STATUS_TO_ERROR);
		if(result != null) return result;
	}
	return null;
}

class ImageClient extends BaseClient {

	static default_service_name = 'image';
	static service_type = 'bosdyn.api.ImageService';

	constructor(){
		super(image_service_grpc_pb.ImageServiceClient);
	}

	async list_image_sources(args){
		const req = ImageClient._get_list_image_source_request();
        return await this.call(this._stub.listImageSources, req, _list_image_sources_value, common_header_errors, args);
	}

	list_image_sources_async(args){
		const req = ImageClient._get_list_image_source_request();
        return this.call_async(this._stub.listImageSources, req, _list_image_sources_value, common_header_errors, args);
	}

	async get_image_from_sources(image_sources, args){
		return await this.get_image(image_sources.map(x => build_image_request(x)), args);
	}

	get_image_from_sources_async(image_sources, args){
		return this.get_image_async(image_sources.map(x => build_image_request(x)), args);
	}

	async get_image(image_requests, args){
		const req = ImageClient._get_image_request(image_requests);
        return await this.call(this._stub.getImage, req, _get_image_value, _error_from_response, args);
	}

	get_image_async(image_requests, args){
		var req = ImageClient._get_image_request(image_requests);
        return this.call_async(this._stub.getImage, req, _get_image_value, _error_from_response, args);
	}

	static _get_image_request(image_requests){
		return new image_pb.GetImageRequest().setImageRequestsList(image_requests);	
	}

	static _get_list_image_source_request(){
		return new image_pb.ListImageSourcesRequest();
	}
}


function build_image_request(image_source_name, quality_percent = 75, image_format = image_pb.Image.Format.FORMAT_UNKNOWN){
	const req = new image_pb.ImageRequest()
	.setImageSourceName(image_source_name)
	.setQualityPercent(quality_percent)
	.setImageFormat(image_format);
	return req;
}

function _list_image_sources_value(response){
    return response.getImageSourcesList();
}


function _get_image_value(response){
    return response.getImageResponsesList();
}

function write_pgm_or_ppm(image_response, filename = "", filepath = "./"){
	let dtype;
    if(image_response.getShot().getImage().getPixelFormat() == image_pb.Image.PixelFormat.PIXEL_FORMAT_DEPTH_U16){
        dtype = numjs.dtypes.uint16;
    }else{
        dtype = numjs.dtypes.uint8;
    }

    let num_channels = 1;
    let pgm_header_number = 'P5';
    let file_extension = ".pgm";

    if(image_response.getShot().getImage().getPixelFormat() == image_pb.Image.PixelFormat.PIXEL_FORMAT_RGB_U8){
        num_channels = 3;
        pgm_header_number = 'P6';
        file_extension = ".ppm";
    }else if(image_response.getShot().getImage().getPixelFormat() == image_pb.Image.PixelFormat.PIXEL_FORMAT_RGBA_U8){
        console.log("[IMAGE] PGM/PPM format does not support RGBA encodings.");
        return;
    }else if(image_response.getShot().getImage().getPixelFormat() in [image_pb.Image.PixelFormat.PIXEL_FORMAT_GREYSCALE_U8, image_pb.Image.PixelFormat.PIXEL_FORMAT_DEPTH_U16, image_pb.Image.PixelFormat.PIXEL_FORMAT_GREYSCALE_U16]){
        num_channels = 1;
    }else{
        console.log(`[IMAGE] Unsupported pixel format for PGM/PPM: ${image_pb.Image.PixelFormat[image_response.getShot().getImage().getPixelFormat()]}.`)
        return;
    }

    let img = numjs.images.read(image_response.getShot().getImage().getData(), dtype);
    const height = image_response.getShot().getImage().getRows();
    const width = image_response.getShot().getImage().getCols();
    try{
        img = numjs.images.resize(img, height, width);
    }catch(e){
        console.log(`[IMAGE] Cannot convert raw image into expected shape (rows ${height}, cols ${width}, color channels ${num_channels}).`);
       	console.error(err);
        return;
    }
    if(filename.length == 0) filename = `image-${image_response.source.name}${file_extension}`;
    filename = path.join(filepath, filename);

    const max_val = numjs.max(img);
    const pgm_header = `${pgm_header_number} ${width} ${height} ${max_val}\n`
    writeFileSync(filename, pgm_header);
    numjs.images.save(img, filename);
    console.log(`[IMAGE] Saved matrix with pixel values from camera "${image_response.source.name}" to file "${filename}".`);
}

function write_image_data(image_response, filename = "", filepath = "./"){
    if(filename.length == 0) filename = `image-${image_response.getSource().getName()}.jpg`;

    filename = path.join(filepath, filename);
    try{
        writeFileSync(filename, image_response.getShot().getImage().getData());
        console.log(`[IMAGE] Saved "${image_response.source.name}" to "${filename}".`);
    }catch(e){
        console.log(`[IMAGE] Failed to save "${image_response.source.name}".`);
        console.error(err);
    }
}

function save_images_as_files(image_responses, filename = "", filepath = "./"){
    for(const [index, image] of image_responses.getImageResponsesList().entries()){
        let save_file_name = "";
        if(filename.length != 0){
            save_file_name = `${filename}${index}`;
        }
        if(image.getShot().getImage().getFormat() == image_pb.Image.Format.FORMAT_UNKNOWN){
            continue;
        }else if(image.getShot().getImage().getFormat() != image_pb.Image.Format.FORMAT_JPEG){
            write_pgm_or_ppm(image, save_file_name, filepath);
        }else{
            write_image_data(image, save_file_name, filepath);
        }
    }
}

module.exports = {
	ImageClient,
	ImageResponseError,
	UnknownImageSourceError,
	SourceDataError,
	ImageDataError,
	build_image_request,
	write_pgm_or_ppm,
	write_image_data,
	save_images_as_files
};
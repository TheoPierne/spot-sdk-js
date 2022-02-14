'use strict';

const argparse = require('argparse');
const sharp = require('sharp');

const image_pb = require('../../bosdyn/api/image_pb');

const util = require('../../bosdyn-client/util');
const {ImageClient} = require('../../bosdyn-client/image');
const client = require('../../index');

const ROTATION_ANGLE = {
    back_fisheye_image: 0,
    frontleft_fisheye_image: -78,
    frontright_fisheye_image: -102,
    left_fisheye_image: 0,
    right_fisheye_image: 180
};

async function main(args = null){
    const parser = argparse.ArgumentParser();
    util.add_common_arguments(parser);

    parser.add_argument('--list', {help: 'list image sources', action: 'store_true'});
    parser.add_argument('--auto-rotate', {help: 'rotate right and front images to be upright', action: 'store_true'});
    parser.add_argument('--image-sources', {help: 'Get image from source(s)', action: 'append'});
    parser.add_argument('--image-service', {help: 'Name of the image service to query.', default: ImageClient.default_service_name});

    const options = (args == null) ? parser.parse_args() : parser.parse_args(args);

    const sdk = client.sdk.create_standard_sdk('image_capture');
    const robot = sdk.create_robot(options.hostname);
    await robot.authenticate(options.username, options.password);
    await robot.sync_with_directory();

    //robot.time_sync.wait_for_sync()

    const image_client = await robot.ensure_client(options.image_service);

    if(!options.list && !options.image_sources){
        parser.error('Must provide actionable argument (list or image-sources).');
    }

    if(options.list){
        const image_sources = await image_client.list_image_sources();
        console.log("Image sources:");
        for(const source of image_sources){
            console.log("\t" + source.getName());
        }
    }

    if(options.image_sources){
        const image_responses = await image_client.get_image_from_sources(options.image_sources);

        for(const image of image_responses){

            let extension, imageSharp, num_bytes = 1;

            if(image.getShot().getImage().getPixelFormat() == image_pb.Image.PixelFormat.PIXEL_FORMAT_DEPTH_U16){
                extension = ".png";
            }else{
                if(image.getShot().getImage().getPixelFormat() == image_pb.Image.PixelFormat.PIXEL_FORMAT_RGB_U8){
                    num_bytes = 3;
                }else if(image.getShot().getImage().getPixelFormat() == image_pb.Image.PixelFormat.PIXEL_FORMAT_RGBA_U8){
                    num_bytes = 4;
                }else if(image.getShot().getImage().getPixelFormat() == image_pb.Image.PixelFormat.PIXEL_FORMAT_GREYSCALE_U8){
                    num_bytes = 1;
                }else if(image.getShot().getImage().getPixelFormat() == image_pb.Image.PixelFormat.PIXEL_FORMAT_GREYSCALE_U16){
                    num_bytes = 2;
                }
                extension = ".jpg";
            }

            const data = new Uint8ClampedArray(image.getShot().getImage().getData_asU8());

            if(image.getShot().getImage().getFormat() == image_pb.Image.Format.FORMAT_RAW){
                imageSharp = sharp(data, {
                    raw: {
                        width: image.getShot().getImage().getCols(),
                        height: image.getShot().getImage().getRows(),
                        channels: num_bytes
                    }
                });
            }else{
                imageSharp = sharp(data);
            }

            if(options.auto_rotate){
                imageSharp = imageSharp.rotate(ROTATION_ANGLE[image.getSource().getName()]);
            }

            const image_saved_path = image.getSource().getName().replace('/', '');
            await imageSharp.toFile(`${image_saved_path}${extension}`);
            console.log(`Save ${image_saved_path}${extension} to ${__dirname}`)
        }
        return true;
    }
}


if(require.main === module){
    main();
}else{
    module.exports = main;
}
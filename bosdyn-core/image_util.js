const { execSync } = require("child_process");
const which = require('which');
const tmp = require('tmp');
const sharp = require('sharp');

const _viewers = [];

/**
* Register an image viewer. If order < 0 the viewer is used in first place.
* @param {class|function} viewer
* @param {number} [order=1]
* @returns {void}
*/
function register(viewer, order = 1){
    try{
        if(viewer.prototype instanceof Viewer){
            viewer = new viewer();
        }
    }catch(e){

    }

    if(order > 0){
        _viewers.push(viewer);
    }else{
        _viewers.unshift(viewer);
    }
}

/**
* Display image with default image viewer.
* @param {Buffer|Uint8Array|Uint8ClampedArray|Int8Array|Uint16Array|Int16Array|Uint32Array|Int32Array|Float32Array|Float64Array|string} image
* @param {object} options
* @param {string} options.title
* @returns {Promise<boolean>}
*/
async function show(image, options){
    for(const viewer of _viewers){
        const show = await viewer.show(image, options);
        if(show) return true;
    }
    return false;
}

/**
* Save image to path. (Convert any type of image into .png | .jpg | ...)
* @param {Buffer|Uint8Array|Uint8ClampedArray|Int8Array|Uint16Array|Int16Array|Uint32Array|Int32Array|Float32Array|Float64Array|string} image
* @param {string} name
* @returns {Promise<sharp>}
*/
async function save(image, name){
    return await sharp(image).toFile(name);
};


class Viewer {

    format = null;
    options = {};

    async show(image, options){
        return await this.show_image(image, options);
    }

    get_format(image){
        return this.format;
    }

    get_command(file, options){
        throw NotImplementedError;
    }

    async show_image(image, options){
        const file = await this.save_image(image);
        return this.show_file(file, options);
    }

    async save_image(image){
        const postfix = this.format ? `.${this.format.toLowerCase()}` : '.png';
        const file = tmp.fileSync({ mode: 0o644, prefix: 'bosdyn', postfix: postfix , discardDescriptor: true});
        await sharp(image).toFile(file.name);
        return file;
    }

    show_file(file, options){
        const CWD = process.cwd();
        const cmd = this.get_command(file.name, options);
        execSync(cmd, {cwd: CWD, shell: true});
        return true;
    }
}


class WindowsViewer extends Viewer {

    format = "PNG";
    options = {"compress_level": 1};

    get_command(file, options){
        return `start "Pillow" /WAIT "${file}" && ping -n 2 127.0.0.1 >NUL && del /f "${file}"`;
    }
}


if(process.platform == "win32"){
    register(WindowsViewer);
}

class MacViewer extends Viewer {

    format = "PNG";
    options = {"compress_level": 1};

    get_command(file, options){
        return `(open -a Preview.app "${file}"; sleep 20; rm -f "${file}")&`;
    }

    show_file(file, options){
        const CWD = process.cwd();
        const cmd = this.get_command(file.name, options);
        execSync(cmd, {cwd: CWD, shell: true});
        return true;
    }
}


if(process.platform == "darwin"){
    register(MacViewer);
}


class UnixViewer extends Viewer {

    format = "PNG";
    options = {"compress_level": 1};

    get_command(file, options){
        const command = this.get_command_ex(file, options)[0];
        return `(${command} "${file}"; rm -f "${file}")&`;
    }

    show_file(file, options){
        const CWD = process.cwd();
        const cmd = this.get_command(file.name, options);
        execSync(cmd, {cwd: CWD, shell: true});
        return true;
    }
}


class DisplayViewer extends UnixViewer {

    get_command_ex(file, options){
        let command = executable = "display";
        if(options.title) command += ` -name "${options.title}"`;
        return [command, executable];
    }
}


class GmDisplayViewer extends UnixViewer {

    get_command_ex(file, options){
        const executable = "gm";
        const command = "gm display"
        return [command, executable];
    }

}


class EogViewer extends UnixViewer {

    get_command_ex(file, options){
        const executable = "eog";
        const command = "eog -n";
        return [command, executable];
    }

}


class XVViewer extends UnixViewer {

    get_command_ex(file, options){
        let command = executable = "xv";
        if(options.title) command += ` -name "${options.title}"`;
        return [command, executable];
    }
}


if (!["win32", "darwin"].includes(process.platform)){
    if(which.sync('display', {nothrow: true})) register(DisplayViewer);
    if(which.sync('gm', {nothrow: true})) register(GmDisplayViewer);
    if(which.sync('eog', {nothrow: true})) register(EogViewer);
    if(which.sync('xv', {nothrow: true})) register(XVViewer);
}

module.exports = {
    Viewer,
    show,
    save,
    register
};
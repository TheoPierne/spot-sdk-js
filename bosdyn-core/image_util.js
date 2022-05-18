'use strict';

const { execSync } = require('node:child_process');
const process = require('node:process');

const sharp = require('sharp');
const tmp = require('tmp');
const which = require('which');

const _viewers = [];

/**
 * Register an image viewer. If order < 0 the viewer is used in first place.
 * @param {class|Function} viewer Image class's viewer.
 * @param {number} [order=1] The order to put the viewer.
 * @returns {void}
 */
function register(viewer, order = 1) {
  try {
    if (viewer.prototype instanceof Viewer) {
      viewer = new viewer();
    }
  } catch (e) {
    // Pass
  }

  if (order > 0) {
    _viewers.push(viewer);
  } else {
    _viewers.unshift(viewer);
  }
}

/**
 * Display image with default image viewer.
 * @param {Buffer|Array|string} image The data of the image.
 * @param {Object} options The options of the image.
 * @param {string} options.title The title of the image.
 * @returns {Promise<boolean>}
 */
async function show(image, options) {
  for (const viewer of _viewers) {
    // eslint-disable-next-line
    const show = await viewer.show(image, options);
    if (show) return true;
  }
  return false;
}

/**
 * Save image to path. (Convert any type of image into .png | .jpg | ...)
 * @param {Buffer|Array|string} image The data of the image.
 * @param {string} name The name of the image.
 * @returns {Promise<sharp>}
 */
function save(image, name) {
  return sharp(image).toFile(name);
}

class Viewer {
  format = null;
  options = {};

  show(image, options) {
    return this.show_image(image, options);
  }

  get_format() {
    return this.format;
  }

  get_command() {
    throw Error('Not implemented');
  }

  async show_image(image, options) {
    const file = await this.save_image(image);
    return this.show_file(file, options);
  }

  async save_image(image) {
    const postfix = this.format ? `.${this.format.toLowerCase()}` : '.png';
    const file = tmp.fileSync({ mode: 0o644, prefix: 'bosdyn', postfix: postfix, discardDescriptor: true });
    await sharp(image).toFile(file.name);
    return file;
  }

  show_file(file, options) {
    const CWD = process.cwd();
    const cmd = this.get_command(file.name, options);
    execSync(cmd, { cwd: CWD, shell: true });
    return true;
  }
}

class WindowsViewer extends Viewer {
  format = 'PNG';
  options = { compress_level: 1 };

  get_command(file) {
    return `start "Pillow" /WAIT "${file}" && ping -n 2 127.0.0.1 >NUL && del /f "${file}"`;
  }
}

if (process.platform === 'win32') {
  register(WindowsViewer);
}

class MacViewer extends Viewer {
  format = 'PNG';
  options = { compress_level: 1 };

  get_command(file) {
    return `(open -a Preview.app "${file}"; sleep 20; rm -f "${file}")&`;
  }

  show_file(file) {
    const CWD = process.cwd();
    const cmd = this.get_command(file.name);
    execSync(cmd, { cwd: CWD, shell: true });
    return true;
  }
}

if (process.platform === 'darwin') {
  register(MacViewer);
}

class UnixViewer extends Viewer {
  format = 'PNG';
  options = { compress_level: 1 };

  get_command(file, options) {
    const command = this.get_command_ex(file, options)[0];
    return `(${command} "${file}"; rm -f "${file}")&`;
  }

  show_file(file, options) {
    const CWD = process.cwd();
    const cmd = this.get_command(file.name, options);
    execSync(cmd, { cwd: CWD, shell: true });
    return true;
  }
}

class DisplayViewer extends UnixViewer {
  get_command_ex(file, options) {
    const executable = 'display';
    let command = 'display';
    if (options.title) command += ` -name "${options.title}"`;
    return [command, executable];
  }
}

class GmDisplayViewer extends UnixViewer {
  get_command_ex() {
    const executable = 'gm';
    const command = 'gm display';
    return [command, executable];
  }
}

class EogViewer extends UnixViewer {
  get_command_ex() {
    const executable = 'eog';
    const command = 'eog -n';
    return [command, executable];
  }
}

class XVViewer extends UnixViewer {
  get_command_ex(file, options) {
    const executable = 'xv';
    let command = 'xv';
    if (options.title) command += ` -name "${options.title}"`;
    return [command, executable];
  }
}

if (!['win32', 'darwin'].includes(process.platform)) {
  if (which.sync('display', { nothrow: true })) register(DisplayViewer);
  if (which.sync('gm', { nothrow: true })) register(GmDisplayViewer);
  if (which.sync('eog', { nothrow: true })) register(EogViewer);
  if (which.sync('xv', { nothrow: true })) register(XVViewer);
}

module.exports = {
  Viewer,
  show,
  save,
  register,
};

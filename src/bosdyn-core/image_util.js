/**
 * @file Displays and saves images with the image viewers of the system.
 */

'use strict';

const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const process = require('node:process');

// sharp and tmp are loaded when they are used (sharp takes 0.1 s to load, and the package root loads every module),
// and the viewers of the system are registered at the first use of the module.

const _viewers = [];
let _defaultViewersRegistered = false;

/**
 * Register an image viewer. If order < 0 the viewer is used in first place.
 * @param {typeof Viewer|Viewer} viewer A viewer, or its class.
 * @param {number} [order=1] The order to put the viewer.
 * @returns {void}
 */
function register(viewer, order = 1) {
  _registerDefaultViewers();
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
async function show(image, options = {}) {
  _registerDefaultViewers();
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
 * @returns {Promise<import('sharp').OutputInfo>}
 */
function save(image, name) {
  return require('sharp')(image).toFile(name);
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
    const file = require('tmp').fileSync({ mode: 0o644, prefix: 'bosdyn', postfix, discardDescriptor: true });
    await require('sharp')(image).toFile(file.name);
    return file;
  }

  show_file(file, options = {}) {
    // Like PIL's Popen: start the viewer without waiting for it. A synchronous exec would block the event
    // loop (and with it the lease, estop and time sync keep-alives) until the viewer is closed.
    const child = spawn(this.get_command(file.name, options), {
      cwd: process.cwd(),
      shell: true,
      detached: true,
      stdio: 'ignore',
      windowsHide: true,
    });
    child.on('error', () => {
      // Nothing to do: no viewer, no image.
    });
    child.unref();
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

class MacViewer extends Viewer {
  format = 'PNG';
  options = { compress_level: 1 };

  get_command(file) {
    return `(open -a Preview.app "${file}"; sleep 20; rm -f "${file}")&`;
  }
}

class UnixViewer extends Viewer {
  format = 'PNG';
  options = { compress_level: 1 };

  get_command(file, options = {}) {
    const command = this.get_command_ex(file, options)[0];
    return `(${command} "${file}"; rm -f "${file}")&`;
  }
}

/**
 * A title that cannot break out of its shell quotes.
 * @param {string} title The title of the image.
 * @returns {string}
 */
function _shellSafeTitle(title) {
  return String(title).replace(/["`$\\]/g, '');
}

class DisplayViewer extends UnixViewer {
  get_command_ex(file, options = {}) {
    const executable = 'display';
    let command = 'display';
    if (options.title) command += ` -name "${_shellSafeTitle(options.title)}"`;
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
  get_command_ex(file, options = {}) {
    const executable = 'xv';
    let command = 'xv';
    if (options.title) command += ` -name "${_shellSafeTitle(options.title)}"`;
    return [command, executable];
  }
}

/**
 * Whether an executable is in a directory of the PATH, like shutil.which() in Python (used on Linux only).
 * @param {string} name The name of the executable.
 * @returns {boolean}
 */
function _inPath(name) {
  return (process.env.PATH ?? '').split(path.delimiter).some(dir => {
    if (!dir) return false;
    try {
      const file = path.join(dir, name);
      fs.accessSync(file, fs.constants.X_OK);
      return fs.statSync(file).isFile();
    } catch {
      return false;
    }
  });
}

/**
 * Registers the viewers of the system, like PIL when it is imported, once.
 */
function _registerDefaultViewers() {
  if (_defaultViewersRegistered) return;
  _defaultViewersRegistered = true;
  if (process.platform === 'win32') {
    register(WindowsViewer);
  } else if (process.platform === 'darwin') {
    register(MacViewer);
  } else {
    if (_inPath('display')) register(DisplayViewer);
    if (_inPath('gm')) register(GmDisplayViewer);
    if (_inPath('eog')) register(EogViewer);
    if (_inPath('xv')) register(XVViewer);
  }
}

module.exports = {
  Viewer,
  show,
  save,
  register,
};

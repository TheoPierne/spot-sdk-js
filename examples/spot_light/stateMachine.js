'use strict';

const cv = require('@u4/opencv4nodejs');
const PID = require('node-pid-controller');
const num = require('numjs');

function argMax(array) {
  return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}

/* eslint-disable consistent-return */
function equalArray(comp1, comp2) {
  if (!Array.isArray(comp1) && !Array.isArray(comp2)) {
    return comp1 === comp2;
  } else if (Array.isArray(comp1) && Array.isArray(comp2)) {
    return comp1.length > comp2.length
      ? comp1.map((e, i) => equalArray(comp2[i], e))
      : comp2.map((e, i) => equalArray(comp1[i], e));
  } else if (Array.isArray(comp1) && !Array.isArray(comp2)) {
    return comp1.map(e => equalArray(e, comp2));
  } else if (!Array.isArray(comp1) && Array.isArray(comp2)) {
    return comp2.map(e => equalArray(e, comp1));
  }
}

function modifyArrayWithEARes(arr, res, value) {
  if (Array.isArray(res)) {
    return res.map((e, i) => modifyArrayWithEARes(arr[i], e, value));
  } else if (typeof res === 'boolean' && res === true) {
    return value;
  } else {
    return arr;
  }
}
/* eslint-enable consistent-return */

class StateMachine {
  constructor(name, robot) {
    this.enable = false;
    this.next_state = null;
    this._state_idx = 0;
    this._name = name;
    this._robot = robot;
    this._state_funcs = [];
    this._light_count = 0;
  }

  async exe() {
    if (!this.enable) return;

    await Promise.all(this._state_funcs.map(async e => await e.bind(this)()));
    this.enable = false;
    if (this.next_state !== null) this.next_state.enable = true;
  }

  _state_init() {
    console.log(`See Spot ${this._name}.`);
  }

  async _state_look_for_light() {
    try {
      const img = await this._robot.get_image();
      const roi = this._crop_img(img);

      const [light_found, roi_with_keypoints] = this._detect_blob(roi);

      if (light_found && this._light_count > 50) {
        this._state_idx += 1;
      }
      this._light_count = 0;
      cv.imwrite(`test_${this._name.toLowerCase()}.png`, img);

      this._light_count += 1;
      cv.imshowWait('', roi_with_keypoints);
    } catch (e) {
      console.log(e);
    }
  }

  _detect_blob(img, min_area = 2500) {
    // Binarize the image
    const grey_img = img.cvtColor(cv.COLOR_BGR2GRAY);
    const bin_img = grey_img.threshold(250, 255, cv.THRESH_BINARY);

    // Noise removal
    const kernel = new cv.Mat(3, 3, cv.CV_8U, 1);
    const filt_img = bin_img.morphologyEx(kernel, cv.MORPH_OPEN, new cv.Point(-1, -1), 2);

    // Finding sure foreground area
    const dist_transform = filt_img.distanceTransform(cv.DIST_L2, 5);
    let sure_fg = dist_transform.threshold(0.25 * dist_transform.minMaxLoc().maxVal, 255, 0);

    // CC analysis
    const connectivity = 8;
    if (sure_fg.depth !== cv.CV_8U && sure_fg.depth !== cv.CV_8S) sure_fg = sure_fg.convertTo(cv.CV_8U);
    const { labels, stats, centroids } = sure_fg.connectedComponentsWithStats(connectivity, cv.CV_32S);

    let area_found = false;
    let blob_center = [0, 0];
    let img_with_keypoints = img.copy();

    // See if we found more than the background (background is always at 0)
    if (stats.sizes[0] > 1) {
      // Find the largest area
      const statsArray = num.array(stats.getDataAsArray()).slice(1, 4).flatten().tolist(); // eslint-disable-line
      const largest_label_idx = argMax(statsArray) + 1;
      // Make sure the blob is big enough
      if (stats.at(largest_label_idx, cv.CC_STAT_AREA) > min_area) {
        area_found = true;
        const arr = equalArray(labels.getDataAsArray(), largest_label_idx);
        img_with_keypoints = modifyArrayWithEARes(img_with_keypoints.getDataAsArray(), arr, [0, 0, 255]);
        blob_center = centroids.getDataAsArray()[largest_label_idx];
      }
    }

    return [area_found, new cv.Mat(img_with_keypoints, cv.CV_8UC3), blob_center];
  }

  _crop_img(img) {
    // Find the center of the image
    const [img_height, img_width] = img.sizes;
    const img_center_x = Math.round(img_width / 2);
    const img_center_y = Math.round(img_height / 2);

    // The ROI is at the center of the image with half the width and height
    const x1 = parseInt(img_center_x * 0.5);
    const x2 = x1 + img_center_x;
    const y1 = parseInt(img_center_y * 0.5);
    const y2 = y1 + img_center_y;

    // Or x1 = img_center_x / 2; && y1 = img_center_y / 2;

    // Crop it to the ROI
    const roi = img.getRegion(new cv.Rect(x1, y1, x2, y2));
    return roi;
  }
}

class StateMachineSit extends StateMachine {
  constructor(robot) {
    super('Sit', robot);
    this._state_funcs = [this._state_init, this._state_sit, this._state_look_for_light];
  }

  async _state_sit() {
    console.log(`Spot is going to ${this._name.toLowerCase()}.`);
    await this._robot.sit_down();

    console.log("\n Shine a light in Spot's front left camera for Spot to stand.\n");
  }
}

// ===================================================================================================

class StateMachineStand extends StateMachine {
  constructor(robot) {
    super('Stand', robot);
    this._state_funcs = [this._state_init, this._state_stand, this._state_look_for_light];
  }

  async _state_stand() {
    console.log(`Spot is going to ${this._name.toLowerCase()}.`);
    await this._robot.stand_up();

    console.log("\n Shine a light in Spot's front left camera, and Spot will tilt to follow the light.\n");
  }
}

// ===================================================================================================

class StateMachineFollow extends StateMachine {
  constructor(robot) {
    super('Follow', robot);

    this._init_pt = null;
    this._pitch_pid = new PID(0.5, 0.5, 0);
    this._yaw_pid = new PID(0.5, 0.5, 0);
    this._state_funcs = [this._state_init, this._state_follow];
  }

  async _state_follow() {
    try {
      const img = await this._robot.get_image();

      const [img_height, img_width] = img.sizes;

      // Const img_center_x = Math.round(img_width / 2);
      // const img_center_y = Math.round(img_height / 2);

      const x1 = 0;
      const x2 = Math.floor(0.8 * img_width);
      const y1 = 0;
      const y2 = Math.floor(0.8 * img_height);

      const roi = img.getRegion(new cv.Rect(x1, y1, x2, y2));

      let [light_found, img_with_keypoints, pt] = this._detect_blob(roi, 3500);

      if (!light_found) {
        if (this._init_pt !== null && this._light_count > 50) {
          this._state_idx += 1;
          this._init_pt = null;
          this._light_count = 0;
        }

        this._light_count += 1;
        cv.imshow('', roi);
        cv.waitKey();
        return;
      }

      if (this._init_pt === null) {
        this._init_pt = pt;
      }

      const first = pt.map(e => parseInt(e));
      const sec = this._init_pt.map(e => parseInt(e));

      img_with_keypoints.drawCircle(new cv.Point(first[0], first[1]), 10, new cv.Vec(255, 0, 0), -1);
      img_with_keypoints.drawCircle(new cv.Point(sec[0], sec[1]), 10, new cv.Vec(0, 255, 0), -1);

      const MAX_ANGLE = 0.5;

      console.log(this._init_pt, pt, num.subtract(this._init_pt, pt).tolist());

      const adj = num
        .divide(num.subtract(this._init_pt, pt), this._init_pt)
        .tolist()
        .map(e => e * MAX_ANGLE);
      console.log(adj);
      const yaw_cmd = this._yaw_pid.update(-adj[0]);
      const pitch_update = this._pitch_pid.update(adj[1]);
      const pitch_cmd = pitch_update > MAX_ANGLE ? MAX_ANGLE : pitch_update < -MAX_ANGLE ? -MAX_ANGLE : pitch_update;

      const font = cv.FONT_HERSHEY_SIMPLEX;
      const bottom_left = new cv.Point(25, 25);
      const scale = 0.5;
      const color = new cv.Vec(0, 255, 0);
      const lineType = 1;
      const disp_text = `Yaw: ${adj[0]}     Pitch: ${pitch_cmd}`;
      img_with_keypoints.putText(disp_text, bottom_left, font, scale, color, lineType);

      cv.imshowWait('', img_with_keypoints);

      await this._robot.orient(yaw_cmd, pitch_cmd, 0);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = {
  StateMachine,
  StateMachineSit,
  StateMachineStand,
  StateMachineFollow,
};

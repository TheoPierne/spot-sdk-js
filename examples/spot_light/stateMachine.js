'use strict';

const num = require('@d4c/numjs').default;
const cv = require('@u4/opencv4nodejs');
const PID = require('node-pid-controller');

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
    this.nextState = null;
    this._stateIdx = 0;
    this._name = name;
    this._robot = robot;
    this._stateFuncs = [];
    this._lightCount = 0;
  }

  async exe() {
    if (!this.enable) return;

    await Promise.all(this._stateFuncs.map(e => e.bind(this)()));
    this.enable = false;
    if (this.nextState !== null) this.nextState.enable = true;
  }

  _stateInit() {
    console.log(`See Spot ${this._name}.`);
  }

  async _stateLookForLight() {
    try {
      const img = await this._robot.getImage();
      const roi = this._cropImg(img);

      const [lightFound, roiWithKeypoints] = this._detectBlob(roi);

      if (lightFound && this._lightCount > 50) {
        this._stateIdx += 1;
      }
      this._lightCount = 0;
      cv.imwrite(`test_${this._name.toLowerCase()}.png`, img);

      this._lightCount += 1;
      cv.imshowWait('', roiWithKeypoints);
    } catch (e) {
      console.log(e);
    }
  }

  _detectBlob(img, minArea = 2500) {
    // Binarize the image
    const greyImg = img.cvtColor(cv.COLOR_BGR2GRAY);
    const binImg = greyImg.threshold(250, 255, cv.THRESH_BINARY);

    // Noise removal
    const kernel = new cv.Mat(3, 3, cv.CV_8U, 1);
    const filtImg = binImg.morphologyEx(kernel, cv.MORPH_OPEN, new cv.Point(-1, -1), 2);

    // Finding sure foreground area
    const distTransform = filtImg.distanceTransform(cv.DIST_L2, 5);
    let sureFg = distTransform.threshold(0.25 * distTransform.minMaxLoc().maxVal, 255, 0);

    // CC analysis
    const connectivity = 8;
    if (sureFg.depth !== cv.CV_8U && sureFg.depth !== cv.CV_8S) sureFg = sureFg.convertTo(cv.CV_8U);
    const { labels, stats, centroids } = sureFg.connectedComponentsWithStats(connectivity, cv.CV_32S);

    let areaFound = false;
    let blobCenter = [0, 0];
    let imgWithKeypoints = img.copy();

    // See if we found more than the background (background is always at 0)
    if (stats.sizes[0] > 1) {
      // Find the largest area
      const statsArray = num.array(stats.getDataAsArray()).slice(1, 4).flatten().tolist(); // eslint-disable-line
      const largest_label_idx = argMax(statsArray) + 1;
      // Make sure the blob is big enough
      if (stats.at(largest_label_idx, cv.CC_STAT_AREA) > minArea) {
        areaFound = true;
        const arr = equalArray(labels.getDataAsArray(), largest_label_idx);
        imgWithKeypoints = modifyArrayWithEARes(imgWithKeypoints.getDataAsArray(), arr, [0, 0, 255]);
        blobCenter = centroids.getDataAsArray()[largest_label_idx];
      }
    }

    return [areaFound, new cv.Mat(imgWithKeypoints, cv.CV_8UC3), blobCenter];
  }

  _cropImg(img) {
    // Find the center of the image
    const [imgHeight, imgWidth] = img.sizes;
    const imgCenterX = Math.round(imgHeight / 2);
    const imgCenterY = Math.round(imgWidth / 2);

    // The ROI is at the center of the image with half the width and height
    const x1 = parseInt(imgCenterX * 0.5);
    const x2 = x1 + imgCenterX;
    const y1 = parseInt(imgCenterY * 0.5);
    const y2 = y1 + imgCenterY;

    // Or x1 = imgCenterX / 2; && y1 = imgCenterY / 2;

    // Crop it to the ROI
    return img.getRegion(new cv.Rect(x1, y1, x2, y2));
  }
}

class StateMachineSit extends StateMachine {
  constructor(robot) {
    super('Sit', robot);
    this._stateFuncs = [this._stateInit, this._stateSit, this._stateLookForLight];
  }

  async _stateSit() {
    console.log(`Spot is going to ${this._name.toLowerCase()}.`);
    await this._robot.sitDown();

    console.log("\n Shine a light in Spot's front left camera for Spot to stand.\n");
  }
}

// ===================================================================================================

class StateMachineStand extends StateMachine {
  constructor(robot) {
    super('Stand', robot);
    this._stateFuncs = [this._stateInit, this._stateStand, this._stateLookForLight];
  }

  async _stateStand() {
    console.log(`Spot is going to ${this._name.toLowerCase()}.`);
    await this._robot.standUp();

    console.log("\n Shine a light in Spot's front left camera, and Spot will tilt to follow the light.\n");
  }
}

// ===================================================================================================

class StateMachineFollow extends StateMachine {
  constructor(robot) {
    super('Follow', robot);

    this._initPt = null;
    this._pitchPid = new PID(0.5, 0.5, 0);
    this._yawPid = new PID(0.5, 0.5, 0);
    this._stateFuncs = [this._stateInit, this._stateFollow];
  }

  async _stateFollow() {
    try {
      const img = await this._robot.getImage();

      const [imgHeight, imgWidth] = img.sizes;

      // Const img_center_x = Math.round(imgWidth / 2);
      // const img_center_y = Math.round(imgWidth / 2);

      const x1 = 0;
      const x2 = Math.floor(0.8 * imgWidth);
      const y1 = 0;
      const y2 = Math.floor(0.8 * imgHeight);

      const roi = img.getRegion(new cv.Rect(x1, y1, x2, y2));

      let [lightFound, imgWithKeypoints, pt] = this._detect_blob(roi, 3500);

      if (!lightFound) {
        if (this._initPt !== null && this._lightCount > 50) {
          this._stateIdx += 1;
          this._initPt = null;
          this._lightCount = 0;
        }

        this._lightCount += 1;
        cv.imshow('', roi);
        cv.waitKey();
        return;
      }

      if (this._initPt === null) {
        this._initPt = pt;
      }

      const first = pt.map(e => parseInt(e));
      const sec = this._initPt.map(e => parseInt(e));

      imgWithKeypoints.drawCircle(new cv.Point(first[0], first[1]), 10, new cv.Vec(255, 0, 0), -1);
      imgWithKeypoints.drawCircle(new cv.Point(sec[0], sec[1]), 10, new cv.Vec(0, 255, 0), -1);

      const MAX_ANGLE = 0.5;

      console.log(this._initPt, pt, num.subtract(this._initPt, pt).tolist());

      const adj = num
        .divide(num.subtract(this._initPt, pt), this._initPt)
        .tolist()
        .map(e => e * MAX_ANGLE);
      console.log(adj);
      const yawCmd = this._yawPid.update(-adj[0]);
      const pitchUpdate = this._pitchPid.update(adj[1]);
      const pitchCmd = pitchUpdate > MAX_ANGLE ? MAX_ANGLE : pitchUpdate < -MAX_ANGLE ? -MAX_ANGLE : pitchUpdate;

      const font = cv.FONT_HERSHEY_SIMPLEX;
      const bottom_left = new cv.Point(25, 25);
      const scale = 0.5;
      const color = new cv.Vec(0, 255, 0);
      const lineType = 1;
      const disp_text = `Yaw: ${adj[0]}     Pitch: ${pitchCmd}`;
      imgWithKeypoints.putText(disp_text, bottom_left, font, scale, color, lineType);

      cv.imshowWait('', imgWithKeypoints);

      await this._robot.orient(yawCmd, pitchCmd, 0);
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

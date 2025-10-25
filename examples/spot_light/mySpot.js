'use strict';

const { Buffer } = require('node:buffer');
const cv = require('@u4/opencv4nodejs');

const { ImageClient } = require('../../src/bosdyn-client/image');
const { LeaseClient, LeaseKeepAlive } = require('../../src/bosdyn-client/lease');
const { RobotCommandClient, RobotCommandBuilder, blockingStand } = require('../../src/bosdyn-client/robot_command');
const { EulerZXY } = require('../../src/bosdyn-core/geometry');
const { createStandardSdk } = require('../../src/index');

class MyRobot {
  constructor() {
    /**
     * Handle to the Boston Dynamics API SDK
     * @type {Sdk}
     */
    this._sdk = null;

    /**
     * A handle to the spot robot
     * @type {Robot}
     */
    this._robot = null;

    /**
     * A handle to the lease for the robot connected
     * @type {LeaseClient}
     */
    this._leaseClient = null;

    /**
     * A handle to the lease for the robot connected
     * @type {LeaseKeepAlive}
     */
    this._leaseKeepAlive = null;
  }

  /**
   * Connect to a spot robot.
   * @param  {Object} config The configuration to use when connecting
   * @returns {Promise<void>}
   */
  async connect(config) {
    const sdkName = 'MySpot_sdk';

    // Util.setup_logging(config.verbose)

    // Create the SDK
    this._sdk = createStandardSdk(sdkName);

    // Use the SDK to create a robot
    this._robot = this._sdk.createRobot(config.hostname);
    // Bosdyn.client.util.authenticate(self._robot); new version of auth

    // Old version of auth
    await this._robot.authenticate(config.username, config.password);
  }

  /**
   * Get an image from the front left camera
   * @returns {Promise<any>}
   */
  async getImage() {
    if (this._robot === null) return 0;

    // Get image data from robot
    /** @type {ImageClient} */
    const imageClient = await this._robot.ensureClient(ImageClient.defaultServiceName);
    const imageResponse = await imageClient.getImageFromSources(['frontleft_fisheye_image']);

    // Convert the image data to a buffer
    const data = Buffer.from(imageResponse[0].getShot().getImage().getData_asB64(), 'base64');
    const img = cv.imdecode(data);

    // Rotate the image so it alight better with the real world
    const angle = 90;
    return this._rotateBound(img, angle);
  }

  /**
   * Ask Spot to stand up
   * @returns {Promise<void>}
   */
  async standUp() {
    if (this._robot === null) return;

    if (await this._prepForMotion()) {
      /** @type {RobotCommandClient} */
      const commandClient = await this._robot.ensureClient(RobotCommandClient.defaultServiceName);
      await blockingStand(commandClient, 10_000);
    }
  }

  /**
   * Ask Spot to sit down
   * @returns {Promise<void>}
   */
  async sitDown() {
    if (this._robot === null) return;

    if (await this._prepForMotion()) {
      /** @type {RobotCommandClient} */
      const commandClient = await this._robot.ensureClient(RobotCommandClient.defaultServiceName);
      const cmd = RobotCommandBuilder.synchroSitCommand();
      await commandClient.robotCommand(cmd);
    }
  }

  /**
   * Ask Spot to orient its body (e.g. yaw, pitch, roll)
   * @param  {number} yaw   Rotation about Z (+up/down) [rad]
   * @param  {number} pitch Rotation about Y (+left/right) [rad]
   * @param  {number} roll  Rotation about X (+front/back) [rad]
   * @returns {Promise<void>}
   */
  async orient(yaw = 0.0, pitch = 0.0, roll = 0.0) {
    if (this._robot === null) return;

    if (await this._prepForMotion()) {
      const rotation = new EulerZXY(yaw, pitch, roll);
      /** @type {RobotCommandClient} */
      const commandClient = await this._robot.ensureClient(RobotCommandClient.defaultServiceName);
      const cmd = RobotCommandBuilder.synchroStandCommand({ footprintRBody: rotation });
      await commandClient.robotCommand(cmd);
    }
  }

  /**
   * Prepare the robot for motion
   * @returns {Promise<boolean>} true if robot is ready for motion command; false otherwise
   * @private
   */
  async _prepForMotion() {
    if (this._robot === null) return false;

    // Establish time sync with the robot
    await (await this._robot.timeSync).waitForSync();

    // Verify the robot is not estopped
    console.assert(
      !(await this._robot.isEstopped()),
      'Robot is estopped. Please use an external E-Stop client, such as the estop SDK example, to configure E-Stop.',
    );

    // Acquire a lease to indicate that we want to control the robot
    if (this._leaseClient === null) {
      this._leaseClient = await this._robot.ensureClient(LeaseClient.defaultServiceName);
      await this._leaseClient.acquire();
      this._leaseKeepAlive = new LeaseKeepAlive(this._leaseClient);
      await this._leaseKeepAlive.waitForInitialization();
    }

    // Power the motor on
    if (await !this._robot.isPoweredOn()) await this._robot.powerOn(20_000);

    return this._robot.isPoweredOn();
  }

  _rotateBound(image, angle) {
    const [h, w] = image.sizes;
    const [cX, cY] = [Math.round(w / 2), Math.round(h / 2)];

    // Grab the rotation matrix (applying the negative of the
    // angle to rotate clockwise), then grab the sine and cosine
    // (i.e., the rotation components of the matrix)
    const M = cv.getRotationMatrix2D(new cv.Point2(cX, cY), -angle, 1.0);
    const cos = Math.abs(M.at(0, 0));
    const sin = Math.abs(M.at(0, 1));

    // Compute the new bounding dimensions of the image
    const nW = parseInt(h * sin + w * cos);
    const nH = parseInt(h * cos + w * sin);

    // Adjust the rotation matrix to take into account translation
    M.set(0, 2, M.at(0, 2) + Math.round(nW / 2) - cX);
    M.set(1, 2, M.at(1, 2) + Math.round(nH / 2) - cY);

    // Perform the actual rotation and return the image
    return image.warpAffine(M, new cv.Size(nW, nH));
  }
}

module.exports = {
  MyRobot,
};

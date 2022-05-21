'use strict';

const { Buffer } = require('node:buffer');
const cv = require('@u4/opencv4nodejs');
const { ImageClient } = require('../../bosdyn-client/image');

const { LeaseClient, LeaseKeepAlive } = require('../../bosdyn-client/lease');
const { RobotCommandClient, RobotCommandBuilder, blocking_stand } = require('../../bosdyn-client/robot_command');
const { EulerZXY } = require('../../bosdyn-core/geometry');
const client = require('../../index');

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
    this._lease_client = null;

    /**
     * A handle to the lease for the robot connected
     * @type {LeaseKeepAlive}
     */
    this._lease_keep_alive = null;
  }

  /**
   * Connect to a spot robot.
   * @param  {Object} config The configuration to use when connecting
   * @returns {Promise<void>}
   */
  async connect(config) {
    const sdk_name = 'MySpot_sdk';

    // Util.setup_logging(config.verbose)

    // Create the SDK
    this._sdk = client.sdk.create_standard_sdk(sdk_name);

    // Use the SDK to create a robot
    this._robot = this._sdk.create_robot(config.hostname);
    // Bosdyn.client.util.authenticate(self._robot); new version of auth

    // Old version of auth
    await this._robot.authenticate(config.username, config.password);
  }

  /**
   * Get an image from the front left camera
   * @returns {Array}
   */
  async get_image() {
    if (this._robot === null) return 0;

    // Get image data from robot
    const image_client = await this._robot.ensure_client(ImageClient.default_service_name);
    const image_response = await image_client.get_image_from_sources(['frontleft_fisheye_image']);

    // Convert the image data to a buffer
    const data = Buffer.from(image_response[0].getShot().getImage().getData_asB64(), 'base64');
    const img = cv.imdecode(data);

    // Rotate the image so it alight better with the real world
    const angle = 90;
    const rot_img = this._rotate_bound(img, angle);
    return rot_img;
  }

  /**
   * Ask Spot to stand up
   * @returns {Promise<void>}
   */
  async stand_up() {
    if (this._robot === null) return;

    if (await this._prep_for_motion()) {
      const command_client = await this._robot.ensure_client(RobotCommandClient.default_service_name);
      await blocking_stand(command_client, 10_000);
    }
  }

  /**
   * Ask Spot to sit down
   * @returns {Promise<void>}
   */
  async sit_down() {
    if (this._robot === null) return;

    if (await this._prep_for_motion()) {
      const command_client = await this._robot.ensure_client(RobotCommandClient.default_service_name);
      const cmd = RobotCommandBuilder.synchro_sit_command();
      await command_client.robot_command(cmd);
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

    if (await this._prep_for_motion()) {
      const rotation = new EulerZXY(yaw, pitch, roll);
      const command_client = await this._robot.ensure_client(RobotCommandClient.default_service_name);
      const cmd = RobotCommandBuilder.synchro_stand_command(undefined, undefined, rotation);
      await command_client.robot_command(cmd);
    }
  }

  /**
   * Prepare the robot for motion
   * @returns {Promise<boolean>} true if robot is ready for motion command; false otherwise
   */
  async _prep_for_motion() {
    if (this._robot === null) return false;

    // Establish time sync with the robot
    await (await this._robot.time_sync).wait_for_sync();

    // Verify the robot is not estopped
    console.assert(
      await !this._robot.is_estopped(),
      'Robot is estopped. Please use an external E-Stop client, such as the estop SDK example, to configure E-Stop.',
    );

    // Acquire a lease to indicate that we want to control the robot
    if (this._lease_client === null) {
      this._lease_client = await this._robot.ensure_client(LeaseClient.default_service_name);
      await this._lease_client.acquire();
      this._lease_keep_alive = new LeaseKeepAlive(this._lease_client);
      await this._lease_keep_alive.init();
    }

    // Power the motor on
    if (await !this._robot.is_powered_on()) await this._robot.power_on(20_000);

    return this._robot.is_powered_on();
  }

  _rotate_bound(image, angle) {
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

'use strict';

const { BaseClient, commonHeaderErrors } = require('./common');
const { addEdgeToTree } = require('./frame_helpers');
const { NoTimeSyncError, _TimeConverter } = require('./robot_command');

const geometryPb = require('../bosdyn/api/geometry_pb');
const worldObjectPb = require('../bosdyn/api/world_object_pb');
const { WorldObjectServiceClient } = require('../bosdyn/api/world_object_service_grpc_pb');
const { nowTimestamp } = require('../bosdyn-core/util');

/**
 * @typedef {import('./robot').Robot} Robot
 */

/**
 * Client for World Object service.
 * @extends {BaseClient<WorldObjectServiceClient>}
 */
class WorldObjectClient extends BaseClient {
  static defaultServiceName = 'world-objects';
  static serviceType = 'bosdyn.api.WorldObjectService';

  constructor() {
    super(WorldObjectServiceClient);
    this._timesyncEndpoint = null;
  }

  /**
   * Update instance from another object.
   * @param {Robot} other The object where to copy from.
   * @returns {void}
   */
  async updateFrom(other) {
    super.updateFrom(other);
    try {
      this._timesyncEndpoint = (await other.timeSync).endpoint;
    } catch (e) {
      // Pass
    }
  }

  /**
   * Accessor for timesync-endpoint that is grabbed via 'updateFrom()'.
   * @type {*}
   * @throws {NoTimeSyncError} Could not find the timesync endpoint for the robot.
   * @readonly
   */
  get timesyncEndpoint() {
    if (!this._timesyncEndpoint) {
      throw new NoTimeSyncError(null, '[world object service] No timesync endpoint set for the robot');
    }
    return this._timesyncEndpoint;
  }

  /**
   * Get a list of World Objects.
   * @param {?Array<worldObjectPb.WorldObjectType>} objectType Specific types to include in the response,
   * all other types will be filtered out.
   * @param {?number} timeStartPoint A client timestamp to filter objects in the response. All objects
   * will have a timestamp after this time.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<worldObjectPb.ListWorldObjectResponse>} The response message,
   * which includes the filtered list of all world objects.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {NoTimeSyncError} Couldn't convert the timestamp into robot time.
   */
  listWorldObjects(objectType = null, timeStartPoint = null, args) {
    if (timeStartPoint !== null) {
      timeStartPoint = this._updateTimeFilter(timeStartPoint, this.timesyncEndpoint);
    }
    const req = new worldObjectPb.ListWorldObjectRequest()
      .setObjectTypeList(objectType)
      .setTimestampFilter(timeStartPoint);
    return this.call(this._stub.listWorldObjects, req, _getWorldObjectValue, commonHeaderErrors, false, args);
  }

  /**
   * Mutate (add, change, delete) world objects.
   * @param {worldObjectPb.MutateWorldObjectRequest} mutationReq The request including the object
   * to be mutated and the type of mutation.
   * @param {Object} [args] Extra arguments for controlling RPC details.
   * @returns {Promise<worldObjectPb.MutateWorldObjectResponse>} The response message,
   * which includes the filtered list of all world objects.
   * @throws {RpcError} Problem communicating with the robot.
   * @throws {NoTimeSyncError} Couldn't convert the timestamp into robot time.
   */
  mutateWorldObjects(mutationReq, args) {
    if (mutationReq.getMutation().getObject().hasAcquisitionTime()) {
      const clientTimestamp = mutationReq.getMutation().getObject().getAcquisitionTime();
      mutationReq
        .getMutation()
        .getObject()
        .setAcquisitionTime(this._updateTimestampFilter(clientTimestamp, this.timesyncEndpoint));
    }
    return this.call(this._stub.mutateWorldObjects, mutationReq, _getStatus, commonHeaderErrors, true, args);
  }

  /**
   * Set or convert fields of the proto that need timestamps in the robot's clock.
   * @param {number} timestamp Client time, such as from Date.now().
   * @param {TimeSyncEndpoint} timesyncEndpoint A timesync endpoint associated with the robot object.
   * @returns {*}
   * @throws {NoTimeSyncError} Couldn't convert the timestamp into robot time.
   * @private
   */
  _updateTimeFilter(timestamp, timesyncEndpoint) {
    if (!timesyncEndpoint) {
      throw new NoTimeSyncError(null, '[WORLD OBJECT] No timesync endpoint set for the robot.');
    }
    const converter = new _TimeConverter(this, timesyncEndpoint);
    return converter.robotTimestampFromLocalSecs(timestamp);
  }

  /**
   * Set or convert fields of the proto that need timestamps in the robot's clock.
   * @param {google.protobuf.Timestamp} timestamp Client time.
   * @param {TimeSyncEndpoint} timesyncEndpoint A timesync endpoint associated with the robot object.
   * @returns {google.protobuf.Timestamp}
   * @throws {NoTimeSyncError} Couldn't convert the timestamp into robot time.
   * @private
   */
  _updateTimestampFilter(timestamp, timesyncEndpoint) {
    if (!timesyncEndpoint) {
      throw new NoTimeSyncError(null, '[WORLD OBJECT] No timesync endpoint set for the robot.');
    }
    const converter = new _TimeConverter(this, timesyncEndpoint);
    converter.convertTimestampFromLocalToRobot(timestamp);
    return timestamp;
  }

  /**
   * Create a drawable sphere world object that will be sent to the world object service
   * with a mutation request.
   * @param {string} name The human-readable name of the world object.
   * @param {number} xRtFrameName The coordinate position (x,y,z) of the drawable sphere.
   * @param {number} yRtFrameName The coordinate position (x,y,z) of the drawable sphere.
   * @param {number} zRtFrameName The coordinate position (x,y,z) of the drawable sphere.
   * @param {string} frameName The frame in which the sphere's position is described.
   * @param {number} radius The radius for the drawn sphere.
   * @param {number[]} rgba The RGBA color, where RGB are int values in [0,255] and A is a float in [0,1].
   * @param {boolean} listObjectsNow Should the ListWorldObjects request be made after creating the sphere world object.
   * @returns {Promise<worldObjectPb.MutateWorldObjectResponse>}
   */
  async drawSphere(
    name,
    xRtFrameName,
    yRtFrameName,
    zRtFrameName,
    frameName,
    radius = 0.05,
    rgba = [255, 0, 0, 1],
    listObjectsNow = true,
  ) {
    const visionTformDrawable = new geometryPb.SE3Pose()
      .setPosition(new geometryPb.Vec3().setX(xRtFrameName).setY(yRtFrameName).setZ(zRtFrameName))
      .setRotation(new geometryPb.Quaternion().setW(1).setX(0).setY(0).setZ(0));

    let edges = new geometryPb.FrameTreeSnapshot();
    const drawableFramName = name;
    edges = addEdgeToTree(edges, visionTformDrawable, frameName, drawableFramName);
    const snapshot = new geometryPb.FrameTreeSnapshot();
    const map = snapshot.getChildToParentEdgeMapMap();

    for (const [key, value] of edges.getChildToParentEdgeMapMap().entries()) {
      map.set(key, value);
    }

    const timeNow = nowTimestamp();

    const sphere = new worldObjectPb.DrawableSphere().setRadius(radius);
    const drawColor = new worldObjectPb.DrawableProperties.Color()
      .setR(rgba[0])
      .setG(rgba[1])
      .setB(rgba[2])
      .setA(rgba[3]);
    const sphereDrawableProp = new worldObjectPb.DrawableProperties()
      .setColor(drawColor)
      .setLabel(name)
      .setWireframe(false)
      .setSphere(sphere)
      .setFrameNameDrawable(drawableFramName);

    const sphereToAdd = new worldObjectPb.WorldObject()
      .setName(name)
      .setTransformsSnapshot(snapshot)
      .setAcquisitionTime(timeNow)
      .setDrawablePropertiesList([sphereDrawableProp]);

    const addSphere = makeAddWorldObjectReq(sphereToAdd);
    const resp = await this.mutateWorldObjects(addSphere);

    if (listObjectsNow) {
      await this.listWorldObjects();
    }

    return resp;
  }

  /**
   * Create a drawable 3D box world object that will be sent to the world object service
   * with a mutation request.
   * @param {string} name The human-readable name of the world object.
   * @param {string} drawableBoxFrameName The frame name for the drawable box frame.
   * @param {string} frameName The frame name which the drawable box is described relative to.
   * @param {geometryPb.SE3Pose} frameNameTformDrawableBox The SE3 pose of the drawable box relative to frame name.
   * @param {number[]} sizeEwrtBoxVec3 The size of the box (x,y,z) expressed with respect to the
   * drawable box frame.
   * @param {number[]} rgba The RGBA color, where RGB are int values in [0,255] and A is a float in [0,1].
   * @param {boolean} wireframe Should this be drawn as a wireframe [wireframe=true] or a solid object
   * [wireframe=false].
   * @param {boolean} listObjectsNow Should the ListWorldObjects request be made after creating
   * the sphere world object.
   * @returns {Promise<void>}
   */
  async drawOrientedBoundingBox(
    name,
    drawableBoxFrameName,
    frameName,
    frameNameTformDrawableBox,
    sizeEwrtBoxVec3,
    rgba = [255, 0, 0, 1],
    wireframe = true,
    listObjectsNow = false,
  ) {
    let edges = new geometryPb.FrameTreeSnapshot();
    const drawableFrameName = name;
    edges = addEdgeToTree(edges, frameNameTformDrawableBox, frameName, drawableFrameName);
    const snapshot = new geometryPb.FrameTreeSnapshot();
    const map = snapshot.getChildToParentEdgeMapMap();

    for (const [key, value] of edges.getChildToParentEdgeMapMap().entries()) {
      map.set(key, value);
    }

    const timeNow = nowTimestamp();

    const box = new worldObjectPb.DrawableBox().setSize(sizeEwrtBoxVec3);
    const drawColor = new worldObjectPb.DrawableProperties.Color()
      .setR(rgba[0])
      .setG(rgba[1])
      .setB(rgba[2])
      .setA(rgba[3]);
    const boxDrawableProp = new worldObjectPb.DrawableProperties()
      .setColor(drawColor)
      .setLabel(name)
      .setWireframe(wireframe)
      .setBox(box)
      .setFrameNameDrawable(drawableBoxFrameName);

    const boxToAdd = new worldObjectPb.WorldObject()
      .setName(name)
      .setTransformsSnapshot(snapshot)
      .setAcquisitionTime(timeNow)
      .setDrawablePropertiesList([boxDrawableProp]);

    const addBox = makeAddWorldObjectReq(boxToAdd);
    const resp = await this.mutateWorldObjects(addBox);

    if (listObjectsNow) {
      await this.listWorldObjects();
    }

    return resp;
  }
}

function _getWorldObjectValue(response) {
  return response;
}

function _getStatus(response) {
  if (response.getStatus() !== worldObjectPb.MutateWorldObjectResponse.Status.STATUS_OK) {
    if (response.getStatus() === worldObjectPb.MutateWorldObjectResponse.Status.STATUS_INVALID_MUTATION_ID) {
      console.log('[WORLD OBJECT] Object id not found, and could not be mutated.');
    }
    if (response.getStatus() === worldObjectPb.MutateWorldObjectResponse.Status.STATUS_NO_PERMISSION) {
      console.log(
        "[WORLD OBJECT] Cannot change/delete objects detected by Spot's perception system, only client objects.",
      );
    }
  }
  return response;
}

/**
 * Add a world object to the scene.
 * @param {worldObjectPb.WorldObject} worldObj The world object to be added into the robot's perception scene.
 * @returns {worldObjectPb.MutateWorldObjectRequest} A MutateWorldObjectRequest where the action is to
 * "add" the object to the scene.
 */
function makeAddWorldObjectReq(worldObj) {
  const addObj = new worldObjectPb.MutateWorldObjectRequest.Mutation()
    .setAction(worldObjectPb.MutateWorldObjectRequest.Action.ACTION_ADD)
    .setObject(worldObj);
  return new worldObjectPb.MutateWorldObjectRequest().setMutation(addObj);
}

/**
 * Delete a world object from the scene.
 * @param {worldObjectPb.WorldObject} worldObj The world object to be delete in the robot's perception scene. The
 * object must be a client-added object and have the correct world object
 * id returned by the service after adding the object.
 * @returns {worldObjectPb.MutateWorldObjectRequest} A MutateWorldObjectRequest where the action is to
 * "delete" the object to the scene.
 */
function makeDeleteWorldObjectReq(worldObj) {
  const delObj = new worldObjectPb.MutateWorldObjectRequest.Mutation()
    .setAction(worldObjectPb.MutateWorldObjectRequest.Action.ACTION_DELETE)
    .setObject(worldObj);
  return new worldObjectPb.MutateWorldObjectRequest().setMutation(delObj);
}

/**
 * Change/update an existing world object in the scene.
 * @param {worldObjectPb.WorldObject} worldObj The world object to be changed/updated
 * in the robot's perception scene.
 * The object must be a client-added object and have the correct world object
 * id returned by the service after adding the object.
 * @returns {worldObjectPb.MutateWorldObjectRequest} A MutateWorldObjectRequest where the action is to
 * "change" the object to the scene.
 */
function makeChangeWorldObjectReq(worldObj) {
  const changeObj = new worldObjectPb.MutateWorldObjectRequest.Mutation()
    .setAction(worldObjectPb.MutateWorldObjectRequest.Action.ACTION_CHANGE)
    .setObject(worldObj);
  return new worldObjectPb.MutateWorldObjectRequest().setMutation(changeObj);
}

/**
 * Create and send an "add" mutation request for each world object in an array. Return a matching
 * array of the object id's that are assigned when the object is created, so that each object we add
 * can be identified and removed individually (if desired) later.
 * @param {WorldObjectClient} worldObjectClient Client for World Object service.
 * @param {Array} worldObjectArray List of object id's.
 * @returns {Promise<Array>}
 */
async function sendAddMutationRequests(worldObjectClient, worldObjectArray) {
  const objId = Array.from({ length: worldObjectArray.length }, () => -1);
  for (let i = 0; i < worldObjectArray.length; i++) {
    const obj = worldObjectArray[i];
    const addReq = makeAddWorldObjectReq(obj);
    // eslint-disable-next-line no-await-in-loop
    const addResp = await worldObjectClient.mutateWorldObjects(addReq);
    objId[i] = addResp.getMutatedObjectId();
  }

  return objId;
}

/**
 * Create and send a "delete" mutation request for each world object successfully identified from a
 * given list of object id's.
 * @param {WorldObjectClient} worldObjectClient Client for World Object service.
 * @param {Array} deleteObjectIdArray List of object id's to send delete requests for.
 * @returns {Promise<void>}
 */
async function sendDeleteMutationRequests(worldObjectClient, deleteObjectIdArray) {
  const worldObjects = (await worldObjectClient.listWorldObjects()).getWorldObjectsList();
  for (const obj of worldObjects) {
    const thisObjectId = obj.getId();
    if (typeof deleteObjectIdArray === 'number') {
      deleteObjectIdArray = [deleteObjectIdArray];
    }

    for (let i = 0; i < deleteObjectIdArray.length; i++) {
      const deleteId = deleteObjectIdArray[i];
      if (thisObjectId === deleteId) {
        const delReq = makeDeleteWorldObjectReq(obj);
        // eslint-disable-next-line no-await-in-loop
        await worldObjectClient.mutateWorldObjects(delReq);
        continue;
      }
    }
  }
}

module.exports = {
  WorldObjectClient,
  makeAddWorldObjectReq,
  makeDeleteWorldObjectReq,
  makeChangeWorldObjectReq,
  sendAddMutationRequests,
  sendDeleteMutationRequests,
};

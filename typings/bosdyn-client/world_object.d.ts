export type RpcError = import("./exceptions").RpcError;
export type SE3Pose = import("./math_helpers").SE3Pose;
export type TimeSyncEndpoint = import("./time_sync").TimeSyncEndpoint;
export type Timestamp = import("google-protobuf/google/protobuf/timestamp_pb").Timestamp;
export type Robot = import("./robot").Robot;
/**
 * @typedef {import('./exceptions').RpcError} RpcError
 * @typedef {import('./math_helpers').SE3Pose} SE3Pose
 * @typedef {import('./time_sync').TimeSyncEndpoint} TimeSyncEndpoint
 * @typedef {import('google-protobuf/google/protobuf/timestamp_pb').Timestamp} Timestamp
 */
/**
 * @typedef {import('./robot').Robot} Robot
 */
/**
 * Client for World Object service.
 * @extends {BaseClient<WorldObjectServiceClient>}
 */
export class WorldObjectClient extends BaseClient<WorldObjectServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    _timesyncEndpoint: import("./time_sync").TimeSyncEndpoint | null;
    /**
     * Accessor for timesync-endpoint that is grabbed via 'updateFrom()'.
     * @type {*}
     * @throws {NoTimeSyncError} Could not find the timesync endpoint for the robot.
     */
    get timesyncEndpoint(): any;
    /**
     * Get a list of World Objects.
     * @param {?Array<worldObjectPb.WorldObjectType>} objectType Specific types to include in the response,
     * all other types will be filtered out.
     * @param {?number} timeStartPoint A client time in seconds since the epoch, like Python (e.g. nowSec(), not
     * Date.now()), to filter objects in the response. All objects will have a timestamp after this time.
     * @param {Object} [args] Extra arguments for controlling RPC details.
     * @returns {Promise<worldObjectPb.ListWorldObjectResponse>} The response message,
     * which includes the filtered list of all world objects.
     * @throws {RpcError} Problem communicating with the robot.
     * @throws {NoTimeSyncError} Couldn't convert the timestamp into robot time.
     */
    listWorldObjects(objectType?: Array<worldObjectPb.WorldObjectType> | null, timeStartPoint?: number | null, args?: Object): Promise<worldObjectPb.ListWorldObjectResponse>;
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
    mutateWorldObjects(mutationReq: worldObjectPb.MutateWorldObjectRequest, args?: Object): Promise<worldObjectPb.MutateWorldObjectResponse>;
    /**
     * Set or convert fields of the proto that need timestamps in the robot's clock.
     * @param {number} timestamp Client time in seconds since the epoch, such as from nowSec() (not Date.now(), which
     * is in milliseconds).
     * @param {TimeSyncEndpoint} timesyncEndpoint A timesync endpoint associated with the robot object.
     * @returns {*}
     * @throws {NoTimeSyncError} Couldn't convert the timestamp into robot time.
     * @private
     */
    private _updateTimeFilter;
    /**
     * Set or convert fields of the proto that need timestamps in the robot's clock.
     * @param {Timestamp} timestamp Client time.
     * @param {TimeSyncEndpoint} timesyncEndpoint A timesync endpoint associated with the robot object.
     * @returns {Timestamp}
     * @throws {NoTimeSyncError} Couldn't convert the timestamp into robot time.
     * @private
     */
    private _updateTimestampFilter;
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
    drawSphere(name: string, xRtFrameName: number, yRtFrameName: number, zRtFrameName: number, frameName: string, radius?: number, rgba?: number[], listObjectsNow?: boolean): Promise<worldObjectPb.MutateWorldObjectResponse>;
    /**
     * Create a drawable 3D box world object that will be sent to the world object service
     * with a mutation request.
     * @param {string} name The human-readable name of the world object.
     * @param {string} drawableBoxFrameName The frame name for the drawable box frame.
     * @param {string} frameName The frame name which the drawable box is described relative to.
     * @param {geometryPb.SE3Pose|SE3Pose} frameNameTformDrawableBox The SE3 pose of the drawable box relative to frame
     * name.
     * @param {geometryPb.Vec3|number[]} sizeEwrtBoxVec3 The size of the box (x,y,z) expressed with respect to the
     * drawable box frame: a Vec3 like Python, or [x, y, z] (an array was set as the Vec3, which could not be serialized).
     * @param {number[]} rgba The RGBA color, where RGB are int values in [0,255] and A is a float in [0,1].
     * @param {boolean} wireframe Should this be drawn as a wireframe [wireframe=true] or a solid object
     * [wireframe=false].
     * @param {boolean} listObjectsNow Should the ListWorldObjects request be made after creating
     * the sphere world object.
     * @returns {Promise<void>}
     */
    drawOrientedBoundingBox(name: string, drawableBoxFrameName: string, frameName: string, frameNameTformDrawableBox: geometryPb.SE3Pose | SE3Pose, sizeEwrtBoxVec3: geometryPb.Vec3 | number[], rgba?: number[], wireframe?: boolean, listObjectsNow?: boolean): Promise<void>;
}
/**
 * Add a world object to the scene.
 * @param {worldObjectPb.WorldObject} worldObj The world object to be added into the robot's perception scene.
 * @returns {worldObjectPb.MutateWorldObjectRequest} A MutateWorldObjectRequest where the action is to
 * "add" the object to the scene.
 */
export function makeAddWorldObjectReq(worldObj: worldObjectPb.WorldObject): worldObjectPb.MutateWorldObjectRequest;
/**
 * Delete a world object from the scene.
 * @param {worldObjectPb.WorldObject} worldObj The world object to be delete in the robot's perception scene. The
 * object must be a client-added object and have the correct world object
 * id returned by the service after adding the object.
 * @returns {worldObjectPb.MutateWorldObjectRequest} A MutateWorldObjectRequest where the action is to
 * "delete" the object to the scene.
 */
export function makeDeleteWorldObjectReq(worldObj: worldObjectPb.WorldObject): worldObjectPb.MutateWorldObjectRequest;
/**
 * Change/update an existing world object in the scene.
 * @param {worldObjectPb.WorldObject} worldObj The world object to be changed/updated
 * in the robot's perception scene.
 * The object must be a client-added object and have the correct world object
 * id returned by the service after adding the object.
 * @returns {worldObjectPb.MutateWorldObjectRequest} A MutateWorldObjectRequest where the action is to
 * "change" the object to the scene.
 */
export function makeChangeWorldObjectReq(worldObj: worldObjectPb.WorldObject): worldObjectPb.MutateWorldObjectRequest;
/**
 * Create and send an "add" mutation request for each world object in an array. Return a matching
 * array of the object id's that are assigned when the object is created, so that each object we add
 * can be identified and removed individually (if desired) later.
 * @param {WorldObjectClient} worldObjectClient Client for World Object service.
 * @param {Array} worldObjectArray List of object id's.
 * @returns {Promise<Array>}
 */
export function sendAddMutationRequests(worldObjectClient: WorldObjectClient, worldObjectArray: any[]): Promise<any[]>;
/**
 * Create and send a "delete" mutation request for each world object successfully identified from a
 * given list of object id's.
 * @param {WorldObjectClient} worldObjectClient Client for World Object service.
 * @param {Array} deleteObjectIdArray List of object id's to send delete requests for.
 * @returns {Promise<void>}
 */
export function sendDeleteMutationRequests(worldObjectClient: WorldObjectClient, deleteObjectIdArray: any[]): Promise<void>;
import { WorldObjectServiceClient } from "../../src/bosdyn/api/world_object_service_grpc_pb";
import { BaseClient } from "./common";
import worldObjectPb = require("../../src/bosdyn/api/world_object_pb");
import geometryPb = require("../../src/bosdyn/api/geometry_pb");

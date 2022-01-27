const jwt = require('jsonwebtoken');
const expandenv = require('expandenv');
const moment = require('moment');
const os = require('node:os');
const fs = require('node:fs');
const path = require('node:path');

const {ArmSurfaceContactClient} = require('./arm_surface_contact');
const {AuthClient} = require('./auth');
const {AutoReturnClient} = require('./auto_return');
const {DEFAULT_MAX_MESSAGE_LENGTH} = require('./channel');
const {DataAcquisitionClient} = require('./data_acquisition');
const {DataAcquisitionStoreClient} = require('./data_acquisition_store');
const {DataBufferClient} = require('./data_buffer');
const {DataServiceClient} = require('./data_service');
const {DirectoryClient} = require('./directory');
const {DirectoryRegistrationClient} = require('./directory_registration');
const {DockingClient} = require('./docking');
const {DoorClient} = require('./door');
const {EstopClient} = require('./estop');
const {FaultClient} = require('./fault');
const {GraphNavClient} = require('./graph_nav');
const {ImageClient} = require('./image');
const {IREnableDisableServiceClient} = require('./ir_enable_disable');
const {LeaseClient} = require('./lease');
const {LicenseClient} = require('./license');
const {LogAnnotationClient} = require('./log_annotation');
const {LocalGridClient} = require('./local_grid');
const {ManipulationApiClient} = require('./manipulation_api_client');
const {MapProcessingServiceClient} = require('./map_processing');
const {NetworkComputeBridgeClient} = require('./network_compute_bridge_client');
const {PayloadClient} = require('./payload');
const {PayloadRegistrationClient} = require('./payload_registration');
const {PointCloudClient} = require('./point_cloud');
const {PowerClient} = require('./power');
const {AddRequestHeader} = require('./processors');
const {GraphNavRecordingServiceClient} = require('./recording');
const {Robot} = require('./robot');
const {RobotCommandClient} = require('./robot_command');
const {RobotIdClient} = require('./robot_id');
const {RobotStateClient} = require('./robot_state');
const {SpotCheckClient} = require('./spot_check');
const {TimeSyncClient} = require('./time_sync');
const {WorldObjectClient} = require('./world_object');

class SdkError extends Error {
    constructor(msg){
        super(msg);
        this.name = 'SdkError';
    }
};

class UnsetAppTokenError extends SdkError {
    constructor(msg){
        super(msg);
        this.name = 'UnsetAppTokenError';
    }
};

class UnableToLoadAppTokenError extends SdkError {
    constructor(msg){
        super(msg);
        this.name = 'UnableToLoadAppTokenError';
    }
};

const BOSDYN_RESOURCE_ROOT = process.env['BOSDYN_RESOURCE_ROOT'] || path.resolve(expandenv('$USERPROFILE'), '.bosdyn');


function generate_client_name(prefix = ''){
    let process_info, user_name;

    try{
        process_info = `${path.basename(__filename)}-${process.pid}`;
    }catch(e){
        process_info = process.pid;
    }

    const machine_name = os.hostname();

    if(!machine_name){
        try{
            user_name = os.userInfo().username;
        }catch(e){
            console.warn('[SDK] Could not get username');
            user_name = '<unknown host>';
        }
    }
    return `${prefix}${machine_name || user_name}:${process_info}`
}

const _DEFAULT_SERVICE_CLIENTS = [
ArmSurfaceContactClient,
AuthClient,
AutoReturnClient,
DataAcquisitionClient,
DataAcquisitionStoreClient,
DataBufferClient,
DataServiceClient,
DirectoryClient,
DirectoryRegistrationClient,
DockingClient,
DoorClient,
EstopClient,
FaultClient,
GraphNavClient,
GraphNavRecordingServiceClient,
ImageClient,
IREnableDisableServiceClient,
LeaseClient,
LicenseClient,
LogAnnotationClient,
LocalGridClient,
ManipulationApiClient,
MapProcessingServiceClient,
NetworkComputeBridgeClient,
PayloadClient,
PayloadRegistrationClient,
PointCloudClient,
PowerClient,
RobotCommandClient,
RobotIdClient,
RobotStateClient,
SpotCheckClient,
TimeSyncClient,
WorldObjectClient
];


/**
 * Return an Sdk with the most common configuration.
 *
 * @param {string} client_name_prefix Prefix to pass to generate_client_name()
 * @param {array} service_clients List of service client classes to register in addition to the defaults.
 * @param {string} cert_resource_glob Glob expression matching robot certificate(s). Default null to use distributed certificate.
 * @return {Sdk} sdk
 * @throws {RangeError} Robot cert could not be loaded.
 */
 function create_standard_sdk(client_name_prefix, service_clients = null, cert_resource_glob = null){
     console.debug(`[SDK] Creating standard Sdk, cert glob: "${cert_resource_glob}"`);
     const sdk = new Sdk(client_name_prefix);
     const client_name = generate_client_name(client_name_prefix);
     sdk.load_robot_cert(cert_resource_glob);
     sdk.request_processors.push(new AddRequestHeader(() => client_name));

     let all_service_clients = _DEFAULT_SERVICE_CLIENTS;
     if (service_clients != null){
         if(Array.isArray(service_clients)){
             all_service_clients.concat(service_clients);
         }else{
             all_service_clients.push(service_clients);
         }
     }
     for (const client in all_service_clients){
         sdk.register_service_client(all_service_clients[client]);
     }
     return sdk;
 }

/**
 * Repository for settings typically common to a single developer and/or robot fleet. See also Robot for robot-specific settings.
 */
 class Sdk{
    /**
     * Create an Sdk.
     * @param {string} [name=null] Name to identify the client when communicating with the robot.
     */
     constructor(name = null){
         this.cert = null;
         this.client_name = name;
         this.logger = console;
         this.request_processors = [];
         this.response_processors = [];
         this.service_client_factories_by_type = {};
         this.service_type_by_name = {};
         this.robots = {};

         this.max_send_message_length = DEFAULT_MAX_MESSAGE_LENGTH;
         this.max_receive_message_length = DEFAULT_MAX_MESSAGE_LENGTH;
     }

    /**
     * Get a Robot initialized with this Sdk, creating it if it does not yet exist.
     * @param {string} address Network-resolvable address of the robot, e.g. '192.168.80.3'
     * @param {string} [name = null] A unique identifier for the robot, e.g. 'My First Robot'. Default null to use the address as the name.
     * @return {Robot} robot A Robot initialized with the current Sdk settings.
     */
     create_robot(address, name = null){
         if (address in this.robots){
             return this.robots[address];
         }
         const robot = new Robot(name || address);
         robot.address = address;

         robot.update_from(this);
         this.robots[address] = robot;

         return robot;
     }

    /**
     * Updates the send and receive max message length values in all the clients/channels created from this point on.
     * @param {number} max_message_length Max message length value to use for sending and receiving messages.
     * @return {void}
     */
     set_max_message_length(max_message_length){
         this.max_send_message_length = max_message_length;
         this.max_receive_message_length = max_message_length;
     }

    /**
     * Tell the Sdk how to create a specific type of service client.
     * @param {object} creation_func Callable that returns a client. Typically just the class.
     * @param {string} [service_type = null] Type of the service. If null (default), will try to get the name from creation_func.
     * @param {string} [service_name = null] Name of the service. If null (default), will try to get the name from creation_func.
     * @return {void}
     */
     register_service_client(creation_func, service_type = null, service_name = null){
         service_name = service_name || creation_func.default_service_name;
         service_type = service_type || creation_func.service_type;

         if (service_name != null){
             this.service_type_by_name[service_name] = service_type;
         } 
         this.service_client_factories_by_type[service_type] = creation_func;
     }

    /**
     * Load the SSL certificate for the robot.
     * @param {string} [resource_path_glob = null] Optional path to certificate resource(s).
                If null, will load the certificate in the 'resources' package.
                Otherwise, should be a glob expression to match certificates.
                Defaults to null.
     * @return {void}
     */
     load_robot_cert(resource_path_glob = null){
         this.cert = null
         if (resource_path_glob == null){
             const pathToResource = path.join(__dirname, 'resources', 'robot.pem');
             this.cert = fs.readFileSync(pathToResource, 'utf-8')
         }else{
             let cert_paths = [];
             fs.readdirSync(resource_path_glob).forEach(file => {
                 const link = `${resource_path_glob}${resource_path_glob.endsWith('/') ? '' : '/'}${file}`
                 file = fs.statSync(link);
                 if(file.isFile()){
                     cert_paths.push(link)
                 }
             });
             if(cert_paths.length == 0) throw RangeError(`No files matched ${resource_path_glob}`);
             this.cert = '';
             for (const cert_path of cert_paths){
                 this.cert += fs.readFileSync(cert_paths[cert_path], 'utf-8');
             }

         }
     }

    /**
     * Remove all cached Robot instances.
     * Subsequent calls to create_robot() will return newly created Robots.
     * Existing robot instances will continue to work, but their time sync and token refresh
     * threads will be stopped.
     */
     clear_robots(){
         for(const robot of Object.values(this.robots)){
             robot._shutdown();
         }
         this.robots = {};
     }

    /**
     * App tokens are no longer in use. Authorization is now handled via licenses.
     * @deprecated since v2.0.1
     */
     load_app_token(resource_path){
         process.emitWarning('Calling deprecated function !', {
             code: 'Deprecated',
             detail: 'App tokens are no longer in use. Authorization is now handled via licenses.'
         });
     }
 }

/**
 * Decodes a JWT token without verification.
 * @param {string} token A string representing a token.
 * @return {object} val Object containing information about the token.
       Empty object if failed to load token.
 * @throw {UnableToLoadAppTokenError} If the token cannot be read.
 */
 function decode_token(token){
     process.emitWarning('Calling deprecated function !', {
         code: 'Deprecated',
         detail: 'Decoding tokens is no longer supported in the sdk. Use jsonwebtoken directly instead.'
     });
     const val = jwt.decode(token, {complete: true})
     if(token == undefined){
         throw new UnableToLoadAppTokenError(`Problem decoding token, (maybe incorrectly formatted token) ${token}`);
     }else{
         return val;
     }
 }

/**
 * Log the time remaining until app token expires.
 * @param {string} token A jwt token
 * @throw {UnableToLoadAppTokenError} If the token expiration information cannot be retrieved.
 */
 function log_token_time_remaining(token){
     process.emitWarning('Calling deprecated function !', {
         code: 'Deprecated',
         detail: 'Decoding tokens is no longer supported in the sdk. Use jsonwebtoken directly instead.'
     });
     const token_values = decode_token(token);
     if ('exp' in token_values.payload == false) throw Error("Unknown token expiration");

     const expire_time = new Date(token_values.payload['exp'] * 1000);
     const time_to_expiration = expire_time - new Date();
     if (time_to_expiration < 0){
         console.error('[SDK] Your application token has expired. Please contact support@bostondynamics.com to request a robot license as application tokens have been deprecated.')
     }else if (time_to_expiration <= 2592000000){
         console.warn(`[SDK] Application token expires ${moment(new Date(expire_time), ["YYYY-MM-DD"]).toNow()} on ${moment(new Date(expire_time), ["YYYY-MM-DD"]).format("YYYY-MM-DD HH:mm")}. \nPlease contact support@bostondynamics.com to request a lease as application tokens have been deprecated.`)
     }else{
         console.debug(`[SDK] Application token expires on ${moment(new Date(expire_time), ["YYYY-MM-DD"]).format("YYYY-MM-DD")}`)
     }
 }

 module.exports = {
     generate_client_name, 
     create_standard_sdk, 
     decode_token, 
     log_token_time_remaining, 
     BOSDYN_RESOURCE_ROOT, 
     Sdk,
     SdkError,
     UnsetAppTokenError,
     UnableToLoadAppTokenError
 };
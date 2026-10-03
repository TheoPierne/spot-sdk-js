/**
 * A client of a service, with the type of its gRPC stub (any by default).
 */
export type BaseClient<Stub extends import("@grpc/grpc-js").Client = any> = import("./common").BaseClient<Stub>;
export type FrameTreeSnapshot = import("../../src/bosdyn/api/geometry_pb").FrameTreeSnapshot;
export type Parameter = import("../../src/bosdyn/api/parameter_pb").Parameter;
export type Payload = import("../../src/bosdyn/api/payload_pb").Payload;
export type RobotId = import("../../src/bosdyn/api/robot_id_pb").RobotId;
export type RobotHardwareConfigurationResponse = import("../../src/bosdyn/api/robot_state_pb").RobotHardwareConfigurationResponse;
export type GrpcChannel = import("@grpc/grpc-js").Channel;
export type ServiceEntry = import("../../src/bosdyn/api/directory_pb").ServiceEntry;
/**
 * @typedef {import('@grpc/grpc-js').Channel} GrpcChannel
 */
/**
 * @typedef {import('../../src/bosdyn/api/directory_pb').ServiceEntry} ServiceEntry
 */
/** General class of errors to handle non-response non-grpc errors. */
export class RobotError extends BosdynError {
}
/** Full service definition has not been registered in the robot instance. */
export class UnregisteredServiceError extends RobotError {
}
/**
 * Service name has not been registered in the robot instance.
 */
export class UnregisteredServiceNameError extends UnregisteredServiceError {
    serviceName: any;
}
/**
 * Service type has not been registered in the robot instance.
 */
export class UnregisteredServiceTypeError extends UnregisteredServiceError {
    serviceType: any;
}
/**
 * Settings common to one user's access to one robot.
 * This is the main point of access to all client functionality.
 * The ensureClient member is used to get any client to a service exposed on the robot.
 * Additionally, many helpers are exposed to provide commonly used functionality without
 * explicitly accessing a particular client object.
 * Note that any rpc call made to the robot can raise an RpcError subclass if there are
 * errors communicating with the robot.
 * Additionally, ResponseErrors will be raised if there was an error acting on the request itself.
 * An InvalidRequestError indicates a programming error, where the request was malformed in some way.
 * InvalidRequestErrors will never be thrown except in the case of client bugs.
 * See also Sdk and BaseClient
 */
export class Robot {
    constructor(name?: null);
    /**
     * The internal name of the robot instance.
     * @type {?string}
     * @private
     */
    private _name;
    /**
     * The client name associated with the robot.
     * @type {?string}
     */
    clientName: string | null;
    /**
     * The address of the robot, typically an IP or hostname.
     * @type {?string}
     */
    address: string | null;
    /**
     * The serial number of the robot.
     * @type {?string}
     */
    serialNumber: string | null;
    /**
     * The logger instance used for logging robot-related activities.
     * @type {import('winston').Logger}
     */
    logger: import("winston").Logger;
    /**
     * The user token used for authenticating requests to the robot.
     * @type {?string}
     */
    userToken: string | null;
    /**
     * The token cache used to store and manage user tokens.
     * @type {TokenCache}
     */
    tokenCache: TokenCache;
    /**
     * The token manager responsible for handling tokens (if any).
     * @type {?TokenManager}
     * @private
     */
    private _tokenManager;
    /**
     * Optional callback invoked when an error occurs in the token refresh loop, like Python's
     * token_refresh_error_callback: (error) => ErrorCallbackResult (or a promise of it).
     * @type {?Function}
     */
    tokenRefreshErrorCallback: Function | null;
    /**
     * The current username of the operator using the robot.
     * @type {?string}
     */
    _currentUser: string | null;
    /**
     * An object of service clients by their names.
     * @type {Object<string, BaseClient>}
     */
    serviceClientsByName: {
        [x: string]: import("./common").BaseClient<any>;
    };
    /**
     * Clients being created, by service name.
     * @type {Map<string, Promise<BaseClient>>}
     * @private
     */
    private _pendingClients;
    /**
     * An object of gRPC channels by authority (host).
     * @type {Object<string, GrpcChannel>}
     */
    channelsByAuthority: {
        [x: string]: import("@grpc/grpc-js").Channel;
    };
    /**
     * An object of authorities by service name.
     * @type {Object<string, string>}
     */
    authoritiesByName: {
        [x: string]: string;
    };
    /**
     * The robot's ID information.
     * @type {?RobotId}
     * @private
     */
    private _robotId;
    /**
     * The hardware configuration of the robot.
     * @type {?RobotHardwareConfigurationResponse}
     * @private
     */
    private _hardwareConfig;
    /**
     * Indicates whether the robot has an arm attached.
     * @type {boolean}
     * @private
     */
    private _hasArm;
    /**
     * The port used for secure gRPC communication.
     * @type {number}
     * @private
     */
    private _secureChannelPort;
    /**
     * Service client factories indexed by type.
     * @type {Object<string, BaseClient>}
     */
    serviceClientFactoriesByType: {
        [x: string]: import("./common").BaseClient<any>;
    };
    /**
     * Service types indexed by name.
     * @type {Object<string, string>}
     */
    serviceTypeByName: {
        [x: string]: string;
    };
    /**
     * Processors to handle outgoing requests.
     * @type {Array<Function>}
     */
    requestProcessors: Array<Function>;
    /**
     * Processors to handle incoming responses.
     * @type {Array<Function>}
     */
    responseProcessors: Array<Function>;
    /**
     * The application token used to authenticate the SDK with the robot.
     * @type {?string}
     */
    appToken: string | null;
    /**
     * The certificate used for secure communication with the robot.
     * @type {?string}
     */
    cert: string | null;
    /**
     * The lease wallet used to manage leases for the robot.
     * @type {LeaseWallet}
     */
    leaseWallet: LeaseWallet;
    /**
     * A reference to the time synchronization thread (if any).
     * @type {?TimeSyncThread}
     * @private
     */
    private _timeSyncThread;
    executor: any;
    /**
     * The maximum message length for sending requests over a gRPC channel.
     * @type {number}
     */
    maxSendMessageLength: number;
    /**
     * The maximum message length for receiving responses over a gRPC channel.
     * @type {number}
     */
    maxReceiveMessageLength: number;
    /**
     * Default service authority mappings used to bootstrap certain services.
     * @type {Object<string, string>}
     * @private
     */
    private _bootstrapServiceAuthorities;
    /**
     * Stop the timesync thread and the token manager
     * @private
     */
    private _shutdown;
    /**
     * Get the robot name
     * @type {?string}
     */
    get host(): string | null;
    _getTokenId(username: any): string;
    /**
     * Updates the cache with the existing user token.
     *
     * This method also instantiates a token manager to refresh the
     * user token. Furthermore, it should only be called after the
     * token has been retrieved.
     * @param {?string} username The username of the current user
     * @private
     */
    private _updateTokenCache;
    /**
     * Instantiates a token cache to persist the user token.
     * If the user provides a cache, it will be saved in the robot object for convenience.
     * @param {?TokenCache} tokenCache An optional instance of `TokenCache` used to store the user token.
     * If not provided, the existing token cache will be used.
     * @param {?string} uniqueId An optional unique identifier (e.g., serial number) for the robot.
     * If not provided, the existing `serialNumber` will be used, or it will be fetched from the robot if necessary.
     */
    setupTokenCache(tokenCache?: TokenCache | null, uniqueId?: string | null): Promise<void>;
    /**
     * Adds to this object's processors, etc. based on other
     * @param {import('./sdk').Sdk} other The other `Robot` instance from which to copy properties.
     */
    updateFrom(other: import("./sdk").Sdk): void;
    /**
     * Ensure a Client for a given service.
     *
     * Note: If a new service has been registered with the directory service, this may raise
     * UnregisteredServiceNameError when trying to connect to it until sync_with_directory() is
     * called.
     * @template {BaseClient} [T=any] The class of the client, e.g. `ensureClient<RobotStateClient>(...)` in TypeScript
     * (any by default).
     * @param {string} serviceName The name of the service.
     * @param {?GrpcChannel} channelToEnsure gRPC channel object to use. Default None, in
     * which case the Sdk data is used to generate a channel. The channel will become associated with
     * the client.
     * @param {any[]} options Any options to pass to the gRPC Channel creation
     * @param {?string} serviceEndpoint Endpoint of the service.
     * @returns {Promise<T>}
     */
    ensureClient<T extends BaseClient = any>(serviceName: string, channelToEnsure?: GrpcChannel | null, options?: any[], serviceEndpoint?: string | null): Promise<T>;
    /**
     * The function creating the client of a service.
     * @param {string} serviceName The name of the service.
     * @returns {new () => BaseClient} The class of the client.
     * @throws {UnregisteredServiceNameError|UnregisteredServiceTypeError}
     * @private
     */
    private _clientCreationFunction;
    /**
     * Create the client of a service, see ensureClient.
     * @returns {BaseClient}
     * @private
     */
    private _createClient;
    /**
     * Forgets the channel and the client of a service, like _reset_channel() in Python 5.2.0: the next ones are new.
     * The channel is not closed (other clients may use it).
     * @param {string} serviceName The name of the service.
     * @private
     */
    private _resetChannel;
    /**
     * The function giving a client a new channel after an InternalDeserializationError, like
     * _make_channel_reset_fn() in Python 5.2.0.
     * @param {string} serviceName The name of the service.
     * @returns {function(): Promise<GrpcChannel>}
     * @private
     */
    private _makeChannelResetFn;
    /**
     * Closes the gRPC channels of the robot, like shutdown() in Python. The background tasks of the time sync and of
     * the token refresh are stopped when the robot is disposed (`using robot = sdk.createRobot(...)`), or by
     * stopTimeSync() for the time sync.
     */
    shutdown(): void;
    /**
     * Return the RobotId proto for this robot, querying it from the robot if not yet cached.
     * @param {?number} [timeout=null] The timeout for this request.
     * @returns {Promise<import('../../src/bosdyn/api/robot_id_pb').RobotId>}
     */
    getCachedRobotId(timeout?: number | null): Promise<import("../../src/bosdyn/api/robot_id_pb").RobotId>;
    /**
     * Return the HardwareConfiguration proto for this robot, querying it from the robot if not yet cached.
     * @param {?number} [timeout=null] The timeout for this request.
     * @returns {Promise<import('../../src/bosdyn/api/robot_state_pb').HardwareConfiguration>}
     */
    getCachedHardwareHardwareConfiguration(timeout?: number | null): Promise<import("../../src/bosdyn/api/robot_state_pb").HardwareConfiguration>;
    /**
     * Verify the right information exists before calling the ensureSecureChannel method.
     * @param  {string}  serviceName Name of the service in the directory.
     * @param  {boolean} [secure=true] Create a secure channel or not.
     * @param  {Array} [options] Options of the grpc channel.
     * @param {string} [serviceEndpoint] Endpoint of the service.
     * @returns {Promise<GrpcChannel>} Existing channel if found, or newly created channel if not found.
     */
    ensureChannel(serviceName: string, secure?: boolean, options?: any[], serviceEndpoint?: string): Promise<GrpcChannel>;
    /**
     * Channel options with the max message lengths of this robot added when they are not given,
     * like Python's ensure_secure_channel. Without them, grpc-js refuses responses larger than 4 MB.
     * @param {Object|Array} options An object, or Python-like [[name, value], ...] pairs.
     * @returns {Object}
     * @private
     */
    private _channelOptions;
    /**
     * Get the channel to access the given authority, creating it if it doesn't exist.
     * @param {string} authority The authority to access
     * @param {Object} options Options of the channel
     * @returns {GrpcChannel}
     */
    ensureSecureChannel(authority: string, options?: Object): GrpcChannel;
    /**
     * Get the channel to access the given authority, creating it if it doesn't exist.
     * @param {string} authority The authority to access
     * @param {*} options
     * @returns {GrpcChannel}
     */
    ensureInsecureChannel(authority: string, options?: any): GrpcChannel;
    /**
     * Authenticate to this Robot with the username/password at the given service.
     * @param {string} username Username on the robot.
     * @param {string} password Password for the username on the robot.
     * @param {?number} timeout An optional timeout value for the operation.
     * @returns {Promise<void>}
     */
    authenticate(username: string, password: string, timeout?: number | null): Promise<void>;
    /**
     * Authenticate to this Robot with the token at the given service.
     * @param {string} token Token used to authenticate
     * @param {?number} timeout An optional timeout value for the operation.
     * @returns {Promise<void>}
     */
    authenticateWithToken(token: string, timeout?: number | null): Promise<void>;
    /**
     * Authenticate to this Robot with a cached token at the given service.
     * @param {string} username Username used to authenticate from cache
     * @param {?number} timeout An optional timeout value for the operation.
     * @returns {Promise<void>}
     */
    authenticateFromCache(username: string, timeout?: number | null): Promise<void>;
    /**
     * Authenticate to this Robot with the guid/secret of the hosting payload.
     *
     * This call is used to authenticate to a robot using payload credentials. If a payload is
     * not yet authorized, it will block until the payload is authorized by an operator in the
     * robot web page.
     * @param {string} guid The GUID of the registered payload requesting the token.
     * @param {string} secret The secret of the registered payload requesting the token.
     * @param {?PayloadRegistrationClient} payloadRegistrationClient Instance of PayloadRegistrationClient
     * @param {?number} timeout An optional timeout value for the operation.
     */
    authenticateFromPayloadCredentials(guid: string, secret: string, payloadRegistrationClient?: PayloadRegistrationClient | null, timeout?: number | null, retryInterval?: number): Promise<void>;
    /**
     * Update this Robot with a user token.
     * @param {string} userToken User token
     * @param {?string} username Username
     */
    updateUserToken(userToken: string, username?: string | null): void;
    /**
     * Return an ordered list of usernames queryable from the cache.
     * @returns {string[]}
     */
    getCachedUsernames(): string[];
    /**
     * Get all the information that identifies the robot.
     * @param {string} idServiceName The id service name
     * @returns {Promise<RobotId>}
     */
    getId(idServiceName?: string): Promise<RobotId>;
    /**
     * Get all the available services on the robot.
     * @returns {Promise<ServiceEntry[]>}
     */
    listServices(): Promise<ServiceEntry[]>;
    /**
     * Update local state with all available services on the robot.
     * @returns {Promise<Object<string, string>>}
     */
    syncWithDirectory(): Promise<{
        [x: string]: string;
    }>;
    /**
     * Alternate version of syncWithDirectory() that takes the list of services directly and does not perform any rpcs.
     * @param {ServiceEntry[]} servicesList The services list to sync with.
     * @returns {Object<string, string>}
     */
    syncWithServicesList(servicesList: ServiceEntry[]): {
        [x: string]: string;
    };
    /**
     * Register a payload with the robot and request a userToken.
     * This method will block until the payload is authorized by an operator in the robot webpage.
     * @param {Payload} payload The payload object to be registered with the robot.
     * @param {string} secret The secret key associated with the payload, used for authentication.
     * @param {?number} timeout An optional timeout value for the operation.
     */
    registerPayloadAndAuthenticate(payload: Payload, secret: string, timeout?: number | null, authRetryInterval?: number): Promise<void>;
    /**
     * Start time sync thread if needed.
     * @param {?number} timeSyncIntervalSec The interval (in seconds) that the time-sync estimate should be updated.
     */
    startTimeSync(timeSyncIntervalSec?: number | null): Promise<void>;
    /**
     * Stop the time sync thread if needed.
     */
    stopTimeSync(): void;
    /**
     * Accessor for the time-sync thread. Creates and starts thread if not already started.
     * @type {Promise<?TimeSyncThread>}
     */
    get timeSync(): Promise<TimeSyncThread | null>;
    /**
     * Get current robot time, seconds. Kicks off background time sync thread if not started.
     * @returns {Promise<number>}
     */
    timeSec(): Promise<number>;
    /**
     * Send an operator comment to the robot for the robot's log files.
     * @param {string} comment Operator comment text to be added to the log.
     * @param {?number} timestampSecs Comment time in seconds since the unix epoch (client clock).
     * If set, this is converted to robot time when sent to the robot.
     * If null and time sync is available, the current time is converted
     * to robot time and sent as the comment timestamp.
     * If null and time sync is unavailable, the logged timestamp will
     * be the time the robot receives this message.
     * @param {?number} timeout An optional timeout value for the operation.
     */
    operatorComment(comment: string, timestampSecs?: number | null, timeout?: number | null): Promise<void>;
    /**
     * Add an Event to the Data Buffer.
     * @param {string} eventType The type of event.
     * @param {dataBufferProtos.Event.Level} level The relative importance of the event.
     * @param {string} description A human-readable description of the event.
     * @param {number} startTimestampSecs Start of the event, in local time.
     * @param {?number} endTimestampSecs End of the event. startTimestampSecs is used if null.
     * @param {?string} idStr Unique id for event. A uuid is generated if null.
     * @param {?Parameter[]} parameters Parameters to attach to the event.
     * @param {dataBufferProtos.Event.LogPreserveHint} logPreserveHint A value from the enum
     * @returns {Promise<dataBufferProtos.RecordEventsResponse>}
     */
    logEvent(eventType: string, level: dataBufferProtos.Event.Level, description: string, startTimestampSecs: number, endTimestampSecs?: number | null, idStr?: string | null, parameters?: Parameter[] | null, logPreserveHint?: dataBufferProtos.Event.LogPreserveHint): Promise<dataBufferProtos.RecordEventsResponse>;
    /**
     * Power on robot. This function blocks until robot powers on.
     * @param {number} timeoutMsec Max time this function will block for.
     * @param {number} updateFrequency Frequency at which power status is checked.
     * @param {?number} timeout An optional timeout value for the operation.
     */
    powerOn(timeoutMsec?: number, updateFrequency?: number, timeout?: number | null): Promise<void>;
    /**
     * Power off robot. This function blocks until robot powers off. By default, this will
     * attempt to put the robot in a safe state before cutting power.
     * @param {boolean} cutImmediately True to cut power to the robot immediately. False to issue a
     * safe power off command to the robot.
     * @param {number} timeoutMsec Max time this function will block for.
     * @param {number} updateFrequency Frequency at which power status is checked.
     * @param {?number} timeout An optional timeout value for the operation.
     */
    powerOff(cutImmediately?: boolean, timeoutMsec?: number, updateFrequency?: number, timeout?: number | null): Promise<void>;
    /**
     * Check the power state of the robot.
     * @param {?number} timeout An optional timeout value for the operation.
     * @returns {Promise<boolean>}
     */
    isPoweredOn(timeout?: number | null): Promise<boolean>;
    /**
     * Check if the robot is estopped, usually indicating if an external application has not
     * registered and held an estop endpoint.
     * @param {?number} timeout An optional timeout value for the operation.
     * @returns {Promise<boolean>}
     */
    isEstopped(timeout?: number | null): Promise<boolean>;
    /**
     * Get the current frame tree snapshot from the robot state client.
     * @param {?number} timeout An optional timeout value for the operation.
     * @returns {Promise<FrameTreeSnapshot>}
     */
    getFrameTreeSnapshot(timeout?: number | null): Promise<FrameTreeSnapshot>;
    /**
     * Check if the robot has an arm attached.
     * @param {?number} timeout An optional timeout value for the operation.
     * @returns {Promise<boolean>}
     */
    hasArm(timeout?: number | null): Promise<boolean>;
    /**
     * Update the port used for creating secure channels, instead of using the default 443.
     *
     * Calling this method does not change existing channels. It only affects secure channels
     * created after this method is called.
     * @param {number} secureChannelPort The new secure channel port
     */
    updateSecureChannelPort(secureChannelPort: number): void;
    [Symbol.dispose](): void;
}
import { BosdynError } from "./exceptions";
import { TokenCache } from "./token_cache";
import { LeaseWallet } from "./lease";
import { PayloadRegistrationClient } from "./payload_registration";
import { TimeSyncThread } from "./time_sync";
import dataBufferProtos = require("../../src/bosdyn/api/data_buffer_pb");

'use strict';

const { setTimeout: sleep } = require('node:timers/promises');
const { isAsyncFunction } = require('node:util/types');

const { AuthClient } = require('./auth');
const channel = require('./channel');
const { DataBufferClient, logEvent } = require('./data_buffer');
const { DirectoryClient } = require('./directory');
const { DirectoryRegistrationClient } = require('./directory_registration');
const { EstopClient, isEstopped } = require('./estop');
const { LeaseWallet } = require('./lease');
const { LoggerUtil } = require('./loggerUtil');
const { PayloadRegistrationClient, PayloadNotAuthorizedError } = require('./payload_registration');
const { PowerClient, powerOn, powerOff, safePowerOffMotors, isPoweredOn } = require('./power');
const { RobotCommandClient } = require('./robot_command');
const { RobotIdClient } = require('./robot_id');
const { RobotStateClient, hasArm } = require('./robot_state');
const { TimeSyncThread, TimeSyncClient } = require('./time_sync');
const { TokenCache } = require('./token_cache');
const { TokenManager } = require('./token_manager');

const dataBufferProtos = require('../bosdyn/api/data_buffer_pb');
const { timestampToSec, nowSec } = require('../bosdyn-core/util');

const _DEFAULT_SECURE_CHANNEL_PORT = 443;

/**
 * @typedef {import('@grpc/grpc-js').Channel} GrpcChannel
 */

/**
 * @typedef {import('../bosdyn/api/directory_pb').ServiceEntry} ServiceEntry
 */

class RobotError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}
class UnregisteredServiceError extends RobotError {}

class UnregisteredServiceNameError extends UnregisteredServiceError {
  constructor(serviceName) {
    super(`Service name "${serviceName}" has not been registered`);
    this.name = 'UnregisteredServiceNameError';
    this.serviceName = serviceName;
  }

  toString() {
    return `Service name "${this.serviceName}" has not been registered`;
  }
}

class UnregisteredServiceTypeError extends UnregisteredServiceError {
  constructor(serviceType) {
    super(`Service name "${serviceType}" has not been registered`);
    this.name = 'UnregisteredServiceTypeError';
    this.serviceType = serviceType;
  }

  toString() {
    return `Service name "${this.serviceType}" has not been registered`;
  }
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
class Robot {
  constructor(name = null) {
    /**
     * The internal name of the robot instance.
     * @type {?string}
     * @private
     */
    this._name = name;

    /**
     * The client name associated with the robot.
     * @type {?string}
     */
    this.clientName = null;

    /**
     * The address of the robot, typically an IP or hostname.
     * @type {?string}
     */
    this.address = null;

    /**
     * The serial number of the robot.
     * @type {?string}
     */
    this.serialNumber = null;

    /**
     * The logger instance used for logging robot-related activities.
     * @type {import('winston').Logger}
     */
    this.logger = LoggerUtil.getLogger(this._name || 'bosdyn.Robot');

    /**
     * The user token used for authenticating requests to the robot.
     * @type {?string}
     */
    this.userToken = null;

    /**
     * The token cache used to store and manage user tokens.
     * @type {TokenCache}
     */
    this.tokenCache = new TokenCache();

    /**
     * The token manager responsible for handling tokens (if any).
     * @type {?TokenManager}
     * @private
     */
    this._tokenManager = null;

    /**
     * The current username of the operator using the robot.
     * @type {?string}
     */
    this._currentUser = null;

    /**
     * An object of service clients by their names.
     * @type {Object<string, BaseClient>}
     */
    this.serviceClientsByName = {};

    /**
     * An object of gRPC channels by authority (host).
     * @type {Object<string, GrpcChannel>}
     */
    this.channelsByAuthority = {};

    /**
     * An object of authorities by service name.
     * @type {Object<string, string>}
     */
    this.authoritiesByName = {};

    /**
     * The robot's ID information.
     * @type {?robotIdPb.RobotId}
     * @private
     */
    this._robotId = null;

    /**
     * The hardware configuration of the robot.
     * @type {?robotStatePb.RobotHardwareConfigurationResponse}
     * @private
     */
    this._hardwareConfig = null;

    /**
     * Indicates whether the robot has an arm attached.
     * @type {boolean}
     * @private
     */
    this._hasArm = false;

    /**
     * The port used for secure gRPC communication.
     * @type {number}
     * @private
     */
    this._secureChannelPort = _DEFAULT_SECURE_CHANNEL_PORT;

    // Things usually updated from an Sdk object.
    /**
     * Service client factories indexed by type.
     * @type {Object<string, BaseClient>}
     */
    this.serviceClientFactoriesByType = {};

    /**
     * Service types indexed by name.
     * @type {Object<string, string>}
     */
    this.serviceTypeByName = {};

    /**
     * Processors to handle outgoing requests.
     * @type {Array<Function>}
     */
    this.requestProcessors = [];

    /**
     * Processors to handle incoming responses.
     * @type {Array<Function>}
     */
    this.responseProcessors = [];

    /**
     * The application token used to authenticate the SDK with the robot.
     * @type {?string}
     */
    this.appToken = null;

    /**
     * The certificate used for secure communication with the robot.
     * @type {?string}
     */
    this.cert = null;

    /**
     * The lease wallet used to manage leases for the robot.
     * @type {LeaseWallet}
     */
    this.leaseWallet = new LeaseWallet();

    /**
     * A reference to the time synchronization thread (if any).
     * @type {?TimeSyncThread}
     * @private
     */
    this._timeSyncThread = null;
    this.executor = null;

    // Set default max message length for sending and receiving. These values are used when creating channels.

    /**
     * The maximum message length for sending requests over a gRPC channel.
     * @type {number}
     */
    this.maxSendMessageLength = channel.DEFAULT_MAX_MESSAGE_LENGTH;

    /**
     * The maximum message length for receiving responses over a gRPC channel.
     * @type {number}
     */
    this.maxReceiveMessageLength = channel.DEFAULT_MAX_MESSAGE_LENGTH;

    /**
     * Default service authority mappings used to bootstrap certain services.
     * @type {Object<string, string>}
     * @private
     */
    this._bootstrapServiceAuthorities = {
      [AuthClient.defaultServiceName]: 'auth.spot.robot',
      [DirectoryClient.defaultServiceName]: 'api.spot.robot',
      [DirectoryRegistrationClient.defaultServiceName]: 'api.spot.robot',
      [PayloadRegistrationClient.defaultServiceName]: 'payload-registration.spot.robot',
      [RobotIdClient.defaultServiceName]: 'id.spot.robot',
    };
  }

  [Symbol.dispose]() {
    this._shutdown();
  }

  /**
   * Stop the timesync thread and the token manager
   * @private
   */
  _shutdown() {
    if (this._timeSyncThread) {
      this._timeSyncThread.stop();
      this._timeSyncThread = null;
    }
    if (this._tokenManager) {
      this._tokenManager.stop();
      this._tokenManager = null;
    }
  }

  /**
   * Get the robot name
   * @type {?string}
   * @readonly
   */
  get host() {
    return this._name;
  }

  _getTokenId(username) {
    return `${this.serialNumber}.${username}`;
  }

  /**
   * Updates the cache with the existing user token.
   *
   * This method also instantiates a token manager to refresh the
   * user token. Furthermore, it should only be called after the
   * token has been retrieved.
   * @param {?string} username The username of the current user
   * @private
   */
  _updateTokenCache(username = null) {
    this._tokenManager ??= new TokenManager(this);
    this._currentUser ??= username;

    if (this._currentUser) {
      const key = this._getTokenId(this._currentUser);
      this.tokenCache.write(key, this.userToken);
    }
  }

  /**
   * Instantiates a token cache to persist the user token.
   * If the user provides a cache, it will be saved in the robot object for convenience.
   * @param {?TokenCache} tokenCache An optional instance of `TokenCache` used to store the user token.
   * If not provided, the existing token cache will be used.
   * @param {?string} uniqueId An optional unique identifier (e.g., serial number) for the robot.
   * If not provided, the existing `serialNumber` will be used, or it will be fetched from the robot if necessary.
   */
  async setupTokenCache(tokenCache = null, uniqueId = null) {
    this.serialNumber = uniqueId || this.serialNumber || (await this.getId()).getSerialNumber();
    this.tokenCache = tokenCache || this.tokenCache;
  }

  /**
   * Adds to this object's processors, etc. based on other
   * @param {Sdk} other The other `Robot` instance from which to copy properties.
   */
  updateFrom(other) {
    this.requestProcessors = [...this.requestProcessors, ...other.requestProcessors];
    this.responseProcessors = [...this.responseProcessors, ...other.responseProcessors];
    this.serviceClientFactoriesByType = { ...this.serviceClientFactoriesByType, ...other.serviceClientFactoriesByType };
    this.serviceTypeByName = { ...this.serviceTypeByName, ...other.serviceTypeByName };

    this.cert = other.cert;
    this.logger = LoggerUtil.getChild(other.logger, this._name || 'Robot');
    this.maxSendMessageLength = other.maxSendMessageLength;
    this.maxReceiveMessageLength = other.maxReceiveMessageLength;
    this.clientName = other.clientName;
    this.leaseWallet.setClientName(this.clientName);
    this.executor = other.executor;
  }

  /**
   * Ensure a Client for a given service.
   *
   * Note: If a new service has been registered with the directory service, this may raise
   * UnregisteredServiceNameError when trying to connect to it until sync_with_directory() is
   * called.
   * @param {string} serviceName The name of the service.
   * @param {?GrpcChannel} channelToEnsure gRPC channel object to use. Default None, in
   * which case the Sdk data is used to generate a channel. The channel will become associated with
   * the client.
   * @param {any[]} options Any options to pass to the gRPC Channel creation
   * @param {?string} serviceEndpoint Endpoint of the service.
   * @returns {Promise<any>}
   */
  async ensureClient(serviceName, channelToEnsure = null, options = [], serviceEndpoint = null) {
    if (this.serviceClientsByName[serviceName]) return this.serviceClientsByName[serviceName];

    let serviceType;

    if (this.serviceTypeByName[serviceName]) {
      serviceType = this.serviceTypeByName[serviceName];
    } else {
      throw new UnregisteredServiceNameError(serviceName);
    }

    let creationFunction;

    if (this.serviceClientFactoriesByType[serviceType]) {
      creationFunction = this.serviceClientFactoriesByType[serviceType];
    } else {
      throw new UnregisteredServiceTypeError(serviceType);
    }

    const client = new creationFunction();
    this.logger.debug(`[ROBOT] Created client for ${serviceName}`);

    if (channelToEnsure === null) {
      channelToEnsure = await this.ensureChannel(serviceName, true, options, serviceEndpoint);
    }

    client.channel = channelToEnsure;
    // eslint-disable-next-line
    isAsyncFunction(client.updateFrom) ? await client.updateFrom(this) : client.updateFrom(this);
    this.serviceClientsByName[serviceName] = client;
    return client;
  }

  shutdown() {
    for (const channelFromAuth of Object.values(this.channelsByAuthority)) {
      channelFromAuth.close();
    }
  }

  /**
   * Return the RobotId proto for this robot, querying it from the robot if not yet cached.
   * @param {?number} [timeout=null] The timeout for this request.
   * @returns {Promise<robotIdPb.RobotId>}
   */
  async getCachedRobotId(timeout = null) {
    if (this._robotId === null) {
      /** @type {RobotIdClient} */
      const robotIdClient = await this.ensureClient('robot-id');
      this._robotId = await robotIdClient.getId({ timeout });
    }
    return this._robotId;
  }

  /**
   * Return the HardwareConfiguration proto for this robot, querying it from the robot if not yet cached.
   * @param {?number} [timeout=null] The timeout for this request.
   * @returns {Promise<robotStatePb.RobotHardwareConfigurationResponse>}
   */
  async getCachedHardwareHardwareConfiguration(timeout = null) {
    if (!this._hardwareConfig) {
      /** @type {RobotStateClient} */
      const client = await this.ensureClient(RobotStateClient.defaultServiceName);
      this._hardwareConfig = await client.getRobotHardwareConfiguration({ timeout });
    }
    return this._hardwareConfig;
  }

  /**
   * Verify the right information exists before calling the ensureSecureChannel method.
   * @param  {string}  serviceName Name of the service in the directory.
   * @param  {boolean} [secure=true] Create a secure channel or not.
   * @param  {Array} [options] Options of the grpc channel.
   * @param {string} [serviceEndpoint] Endpoint of the service.
   * @returns {Promise<GrpcChannel>} Existing channel if found, or newly created channel if not found.
   */
  // eslint-disable-next-line no-unused-vars
  async ensureChannel(serviceName, secure = true, options = [], serviceEndpoint = null) {
    const option = options.length ? options.map(x => x[0]) : null;

    if (option !== null) {
      if (!('grpc.max_receive_message_length' in option[0])) {
        options.push({ 'grpc.max_receive_message_length': this.maxReceiveMessageLength });
      }
      if (!('grpc.max_send_message_length' in option[0])) {
        options.push({ 'grpc.max_send_message_length': this.maxSendMessageLength });
      }
    }

    let authority = this._bootstrapServiceAuthorities[serviceName];

    if (!authority) {
      authority = this.authoritiesByName[serviceName];
      if (!authority) {
        await this.syncWithDirectory();
        authority = this.authoritiesByName[serviceName];
      }
    }

    if (!authority) throw new UnregisteredServiceNameError(serviceName);

    return secure ? this.ensureSecureChannel(authority, options) : this.ensureInsecureChannel(authority, options);
  }

  /**
   * Get the channel to access the given authority, creating it if it doesn't exist."
   * @param {string} authority The authority to access
   * @param {Object} options Options of the channel
   * @returns {GrpcChannel}
   */
  ensureSecureChannel(authority, options = {}) {
    if (authority in this.channelsByAuthority) return this.channelsByAuthority[authority];

    const creds = channel.createSecureChannelCreds(this.cert, () => this.userToken);
    const channelData = channel.createSecureChannel(this.address, this._secureChannelPort, creds, authority, options);
    this.logger.debug(
      `[ROBOT] Created channel to ${this.address} at port ${this._secureChannelPort} with authority ${authority}`,
    );
    this.channelsByAuthority[authority] = channelData;
    return channelData;
  }

  ensureInsecureChannel(authority, options = []) {
    if (authority in this.channelsByAuthority) return this.channelsByAuthority[authority];
    const channelData = channel.createInsecureChannel(this.address, this._secureChannelPort, authority, options);
    this.logger.warn(
      // eslint-disable-next-line max-len
      `[ROBOT] Created insecure channel to ${this.address} at port ${this._secureChannelPort} with authority ${authority}`,
    );
    this.channelsByAuthority[authority] = channelData;
    return channelData;
  }

  /**
   * Authenticate to this Robot with the username/password at the given service.
   * @param {string} username Username on the robot.
   * @param {string} password Password for the username on the robot.
   * @param {?number} timeout An optional timeout value for the operation.
   */
  async authenticate(username, password, timeout = null) {
    const defaultServiceName = AuthClient.defaultServiceName;
    const authChannel = this.ensureSecureChannel(this._bootstrapServiceAuthorities[defaultServiceName]);
    /** @type {AuthClient} */
    const authClient = await this.ensureClient(defaultServiceName, authChannel);
    const userToken = await authClient.auth(username, password, { timeout });
    this.updateUserToken(userToken, username);
  }

  /**
   * Authenticate to this Robot with the token at the given service.
   * @param {string} token Token used to authenticate
   * @param {?number} timeout An optional timeout value for the operation.
   */
  async authenticateWithToken(token, timeout = null) {
    /** @type {AuthClient} */
    const authClient = await this.ensureClient(AuthClient.defaultservicename);
    const usertoken = await authClient.authWithToken(token, { timeout });
    this.updateUserToken(usertoken);
  }

  /**
   * Authenticate to this Robot with a cached token at the given service.
   * @param {string} username Username used to authenticate from cache
   * @param {?number} timeout An optional timeout value for the operation.
   */
  async authenticateFromCache(username, timeout = null) {
    const token = this.tokenCache.read(this._getTokenId(username));
    /** @type {AuthClient} */
    const authClient = await this.ensureClient(AuthClient.defaultServiceName);
    const userToken = await authClient.authWithToken(token, { timeout });
    this.updateUserToken(userToken, username);
  }

  /**
   * Authenticate to this Robot with the guid/secret of the hosting payload.
   *
   * This call is used to authenticate to a robot using payload credentials. If a payload is
   * not yet authorized, it will block until the payload is authorized by an operator in the
   * robot web page.
   * @param {*} guid The GUID of the registered payload requesting the token.
   * @param {string} secret The secret of the registered payload requesting the token.
   * @param {?PayloadRegistrationClient} payloadRegistrationClient Instance of PayloadRegistrationClient
   * @param {?number} timeout An optional timeout value for the operation.
   */
  async authenticateFromPayloadCredentials(guid, secret, payloadRegistrationClient = null, timeout = null, retryInterval = 1000) {
    let printedWarning = false;

    if (payloadRegistrationClient === null) {
      payloadRegistrationClient = await this.ensureClient(PayloadRegistrationClient.defaultServiceName);
    }

    let userToken = null;
    /* eslint-disable no-await-in-loop */
    while (userToken === null) {
      try {
        userToken = await payloadRegistrationClient.getPayloadAuthToken(guid, secret, { timeout });
      } catch (e) {
        if (e instanceof PayloadNotAuthorizedError) {
          if (!printedWarning) {
            printedWarning = true;
            // eslint-disable-next-line
            console.log('[ROBOT] Payload is not authorized. Authentication will block until an operator authorizes the payload in the Admin Console.');
          }
        }
      }
      await sleep(retryInterval);
    }
    /* eslint-enable no-await-in-loop */
    this.updateUserToken(userToken);
  }

  /**
   * Update this Robot with a user token.
   * @param {string} userToken User token
   * @param {?string} username Username
   */
  updateUserToken(userToken, username = null) {
    this.userToken = userToken;
    this._updateTokenCache(username);
  }

  /**
   * Return an ordered list of usernames queryable from the cache.
   * @returns {string[]}
   */
  getCachedUsernames() {
    const matches = this.tokenCache.match(this.serialNumber);
    const usernames = [];
    for (const match of matches) {
      const username = match.split('.');
      usernames.push(username);
    }
    return usernames.sort();
  }

  /**
   * Get all the information that identifies the robot.
   * @param {string} idServiceName The id service name
   * @returns {Promise<robotIdPb.RobotId>}
   */
  async getId(idServiceName = RobotIdClient.defaultServiceName) {
    /** @type {RobotIdClient} */
    const idClient = await this.ensureClient(idServiceName);
    return idClient.getId();
  }

  /**
   * Get all the available services on the robot.
   * @returns {Promise<ServiceEntry[]>}
   */
  async listServices() {
    /** @type {DirectoryClient} */
    const dirClient = await this.ensureClient(DirectoryClient.defaultServiceName);
    return dirClient.list();
  }

  /**
   * Update local state with all available services on the robot.
   * @returns {Promise<Object<string, string>>}
   */
  async syncWithDirectory() {
    const remoteServices = await this.listServices();
    return this.syncWithServicesList(remoteServices);
  }

  /**
   * Alternate version of syncWithDirectory() that takes the list of services directly and does not perform any rpcs.
   * @param {ServiceEntry[]} servicesList The services list to sync with.
   * @returns {Object<string, string>}
   */
  syncWithServicesList(servicesList) {
    for (const service of servicesList) {
      this.authoritiesByName[service.getName()] = service.getAuthority();
      this.serviceTypeByName[service.getName()] = service.getType();
    }
    return this.serviceTypeByName;
  }

  /**
   * Register a payload with the robot and request a userToken.
   * This method will block until the payload is authorized by an operator in the robot webpage.
   * @param {payloadPb.Payload} payload The payload object to be registered with the robot.
   * @param {string} secret The secret key associated with the payload, used for authentication.
   * @param {?number} timeout An optional timeout value for the operation.
   */
  async registerPayloadAndAuthenticate(payload, secret, timeout = null, authRetryInterval = 1000) {
    /** @type {PayloadRegistrationClient} */
    const payloadRegistrationClient = await this.ensureClient(PayloadRegistrationClient.defaultServiceName);
    try {
      await payloadRegistrationClient.registerPayload(payload, secret, { timeout });
    } catch (e) {
      // Pass
    }
    await this.authenticateFromPayloadCredentials(payload.getGuid(), secret, payloadRegistrationClient, timeout, authRetryInterval);
  }

  /**
   * Start time sync thread if needed.
   * @param {?number} timeSyncIntervalSec The interval (in seconds) that the time-sync estimate should be updated.
   */
  async startTimeSync(timeSyncIntervalSec = null) {
    const client = await this.ensureClient(TimeSyncClient.defaultServiceName);
    if (!this._timeSyncThread) this._timeSyncThread = new TimeSyncThread(client);
    if (timeSyncIntervalSec) this._timeSyncThread.timeSyncIntervalSec = timeSyncIntervalSec;
    if (this._timeSyncThread.stopped) this._timeSyncThread.start();
  }

  /**
   * Stop the time sync thread if needed.
   */
  stopTimeSync() {
    if (!this._timeSyncThread.stopped) this._timeSyncThread.stop();
  }

  /**
   * Accessor for the time-sync thread. Creates and starts thread if not already started.
   * @type {Promise<?TimeSyncThread>}
   * @readonly
   */
  get timeSync() {
    return this.startTimeSync().then(() => this._timeSyncThread);
  }

  /**
   * Get current robot time, seconds. Kicks off background time sync thread if not started.
   * @returns {Promise<number>}
   */
  async timeSec() {
    const robotTimestamp = await (await this.timeSync).robotTimestampFromLocalSecs(nowSec());
    return timestampToSec(robotTimestamp);
  }

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
  async operatorComment(comment, timestampSecs = null, timeout = null) {
    /** @type {DataBufferClient} */
    const client = await this.ensureClient(DataBufferClient.defaultServiceName);
    let robotTimestamp = null;
    if (timestampSecs === null) {
      try {
        robotTimestamp = await (await this.timeSync).robotTimestampFromLocalSecs(Date.now());
      } catch (e) {
        robotTimestamp = null;
      }
    } else {
      robotTimestamp = await (await this.timeSync).robotTimestampFromLocalSecs(timestampSecs);
    }
    await client.addOperatorComment(comment, robotTimestamp, { timeout });
  }

  /**
   * Add an Event to the Data Buffer.
   * @param {string} eventType The type of event.
   * @param {dataBufferProtos.Event.Level} level The relative importance of the event.
   * @param {string} description A human-readable description of the event.
   * @param {number} startTimestampSecs Start of the event, in local time.
   * @param {?number} endTimestampSecs End of the event. startTimestampSecs is used if null.
   * @param {?string} idStr Unique id for event. A uuid is generated if null.
   * @param {Parameter} parameters Parameters to attach to the event.
   * @param {dataBufferProtos.Event.LogPreserveHint} logPreserveHint A value from the enum
   * @returns {Promise<void>}
   */
  logEvent(
    eventType,
    level,
    description,
    startTimestampSecs,
    endTimestampSecs = null,
    idStr = null,
    parameters = null,
    logPreserveHint = dataBufferProtos.Event.LogPreserveHint.LOG_PRESERVE_HINT_NORMAL,
  ) {
    return logEvent(
      this,
      eventType,
      level,
      description,
      startTimestampSecs,
      endTimestampSecs,
      idStr,
      parameters,
      logPreserveHint,
    );
  }

  /**
   * Power on robot. This function blocks until robot powers on.
   * @param {number} timeoutMsec Max time this function will block for.
   * @param {number} updateFrequency Frequency at which power status is checked.
   * @param {?number} timeout An optional timeout value for the operation.
   */
  async powerOn(timeoutMsec = 20_000, updateFrequency = 1.0, timeout = null) {
    const client = await this.ensureClient(PowerClient.defaultServiceName);
    await powerOn(client, timeoutMsec, updateFrequency, { timeout });
  }

  /**
   * Power off robot. This function blocks until robot powers off. By default, this will
   * attempt to put the robot in a safe state before cutting power.
   * @param {boolean} cutImmediately True to cut power to the robot immediately. False to issue a
   * safe power off command to the robot.
   * @param {number} timeoutMsec Max time this function will block for.
   * @param {number} updateFrequency Frequency at which power status is checked.
   * @param {?number} timeout An optional timeout value for the operation.
   */
  async powerOff(cutImmediately = false, timeoutMsec = 20_000, updateFrequency = 1.0, timeout = null) {
    if (cutImmediately) {
      const powerClient = await this.ensureClient(PowerClient.defaultServiceName);
      await powerOff(powerClient, timeoutMsec, updateFrequency, { timeout });
    } else {
      const commandClient = await this.ensureClient(RobotCommandClient.defaultServiceName);
      const stateClient = await this.ensureClient(RobotStateClient.defaultServiceName);
      await safePowerOffMotors(commandClient, stateClient, timeoutMsec, updateFrequency, { timeout });
    }
  }

  /**
   * Check the power state of the robot.
   * @param {?number} timeout An optional timeout value for the operation.
   * @returns {Promise<boolean>}
   */
  async isPoweredOn(timeout = null) {
    /** @type {RobotStateClient} */
    const stateClient = await this.ensureClient(RobotStateClient.defaultServiceName);
    return isPoweredOn(stateClient, { timeout });
  }

  /**
   * Check if the robot is estopped, usually indicating if an external application has not
   * registered and held an estop endpoint.
   * @param {?number} timeout An optional timeout value for the operation.
   * @returns {Promise<boolean>}
   */
  async isEstopped(timeout = null) {
    /** @type {EstopClient} */
    const estopClient = await this.ensureClient(EstopClient.defaultServiceName);
    return isEstopped(estopClient, { timeout });
  }

  /**
   * Get the current frame tree snapshot from the robot state client.
   * @param {?number} timeout An optional timeout value for the operation.
   * @returns {Promise<geometryPb.FrameTreeSnapshot>}
   */
  async getFrameTreeSnapshot(timeout = null) {
    /** @type {RobotStateClient} */
    const client = await this.ensureClient(RobotStateClient.defaultServiceName);
    const currentState = await client.getRobotState({ timeout });
    return currentState.getKinematicState().getTransformsSnapshot();
  }

  /**
   * Check if the robot has an arm attached.
   * @param {?number} timeout An optional timeout value for the operation.
   * @returns {Promise<boolean>}
   */
  async hasArm(timeout = null) {
    if (this._hasArm) return this._hasArm;
    /** @type {RobotStateClient} */
    const stateClient = await this.ensureClient(RobotStateClient.defaultServiceName);
    this._hasArm = await hasArm(stateClient, timeout);
    return this._hasArm;
  }

  /**
   * Update the port used for creating secure channels, instead of using the default 443.
   *
   * Calling this method does not change existing channels. It only affects secure channels
   * created after this method is called.
   * @param {number} secureChannelPort The new secure channel port
   */
  updateSecureChannelPort(secureChannelPort) {
    this._secureChannelPort = secureChannelPort;
  }
}

module.exports = {
  RobotError,
  UnregisteredServiceError,
  UnregisteredServiceNameError,
  UnregisteredServiceTypeError,
  Robot,
};

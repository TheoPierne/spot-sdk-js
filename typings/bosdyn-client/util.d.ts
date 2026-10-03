export type ArgumentParser = import("argparse").ArgumentParser;
export type Robot = import("./robot").Robot;
/**
 * Check an options object like the keyword arguments of Python: a positional value (a number, a protobuf message...)
 * or an unknown option (e.g. a snake_case name) was silently ignored.
 * @param {?Object} options The options object (null or undefined: no options).
 * @param {string[]} names The names of the options.
 * @param {string} method The name of the function, for the error messages.
 * @returns {Object} The options, or an empty object.
 * @throws {TypeError} The options are not a plain object, or one of them is unknown.
 */
export function checkOptions(options: Object | null, names: string[], method: string): Object;
/**
 * Interactive CLI for scripting conveniences, like cli_login_prompt() in Python: the username is asked if unknown
 * (or confirmed if the password is unknown), and the password is always asked.
 * @param {?string} [username=null]
 * @param {?string} [password=null]
 * @returns {Promise<[string, string]>}
 */
export function cliLoginPrompt(username?: string | null, password?: string | null): Promise<[string, string]>;
/**
 * Interactive CLI for authenticating with the robot, like cli_auth() in Python: the credentials are asked again
 * until the authentication succeeds (a failure threw, and the credentials were only asked if both were missing).
 * @param {Robot} robot
 * @param {?string} [username=null]
 * @param {?string} [password=null]
 * @returns {Promise<void>}
 */
export function cliAuth(robot: Robot, username?: string | null, password?: string | null): Promise<void>;
/**
 * Generic function for authenticating with the robot, like Python. Tries to authenticate using the following
 * methods, in order:
 * - An existing auth token
 * - Username/Password supplied in the environment (BOSDYN_CLIENT_USERNAME, BOSDYN_CLIENT_PASSWORD)
 * - With a specified callback function, returning a username and password.
 * - A command line prompt, if possible (stdin is a tty).
 * @param {Robot} robot
 * @param {?function(): ([string, string]|Promise<[string, string]>)} [askpass=null] A function that retrieves
 * authentication credentials if none are specified via environment variables.
 * @returns {Promise<void>}
 * @throws {Error} Stdin is not a tty and no askpass specified.
 */
export function authenticate(robot: Robot, askpass?: (() => ([string, string] | Promise<[string, string]>)) | null): Promise<void>;
/**
 * Set the log level of every SDK logger: 'info' by default, 'debug' if verbose.
 * Like Python's setup_logging, this applies to all loggers (existing and future), not only this one.
 * @param {boolean} [verbose=false] Show debug-level messages.
 * @param {boolean} [includeDedupFilter=false] Don't log a message repeating the previous one (see
 * DedupLoggingMessages); the second argument was the levels, like Python it is whether to filter.
 * @param {Iterable<string>} [alwaysPrintLoggerLevels=['error']] The levels whose messages are always logged, like
 * CRITICAL and ERROR in Python.
 * @returns {import('winston').Logger}
 */
export function setupLogging(verbose?: boolean, includeDedupFilter?: boolean, alwaysPrintLoggerLevels?: Iterable<string>): import("winston").Logger;
/**
 * Logger filter to prevent duplicated messages from being logged, like DedupLoggingMessages of Python.
 */
export class DedupLoggingMessages {
    /**
     * @param {Iterable<string>} [alwaysPrintLoggerLevels=['error']] The levels whose messages are always logged.
     */
    constructor(alwaysPrintLoggerLevels?: Iterable<string>);
    lastErrorMessage: any;
    alwaysPrintLoggerLevels: Set<string>;
    /**
     * @param {Object} record A message of winston: level, message and the arguments to format.
     * @returns {boolean} Whether to log it: not if it repeats the previous one.
     */
    filter(record: Object): boolean;
}
/**
 * Check if the DedupLoggingMessages filter exists for the loggers, with these levels.
 * @param {{filter: ?Object}} logger LoggerUtil (the filter of all the loggers).
 * @param {Iterable<string>} alwaysPrintLoggerLevels
 * @returns {boolean}
 */
export function doesDedupFilterExist(logger: {
    filter: Object | null;
}, alwaysPrintLoggerLevels: Iterable<string>): boolean;
/**
 * The name of a value of a protobuf enum, like safe_pb_enum_to_string() in Python: it avoids throwing an exception if
 * the value is unknown by the enum object.
 * @param {number} value The enum value to convert.
 * @param {Object<string, number>} pbEnumObj The protobuf enum object to decode the value.
 * @returns {string}
 */
export function safePbEnumToString(value: number, pbEnumObj: {
    [x: string]: number;
}): string;
export function getLogger(): import("winston").Logger;
/**
 * Add arguments common to most applications used for authentication, like add_common_arguments() in Python (which
 * deprecates it for addBaseArguments()).
 * @param {ArgumentParser} parser
 * @param {boolean} [credentialsNoWarn=false] See addCredentialsArguments().
 */
export function addCommonArguments(parser: ArgumentParser, credentialsNoWarn?: boolean): void;
/**
 * Add username/password flags to parser, like add_credentials_arguments() in Python (deprecated there too: the
 * credentials are better read from the BOSDYN_CLIENT_USERNAME and BOSDYN_CLIENT_PASSWORD environment variables).
 * @param {ArgumentParser} parser
 * @param {boolean} [credentialsNoWarn=false] Don't log the deprecation warning when the flags are added (they still
 * warn when used).
 */
export function addCredentialsArguments(parser: ArgumentParser, credentialsNoWarn?: boolean): void;
/**
 * @typedef {import('argparse').ArgumentParser} ArgumentParser
 */
/**
 * Add hostname argument to parser.
 * @param {ArgumentParser} parser
 */
export function addBaseArguments(parser: ArgumentParser): void;
/**
 * Add arguments common to most payload related applications, like Python: --guid (with --secret) or
 * --payload-credentials-file (both --guid and --secret were required, even with a credentials file).
 * Use getGuidAndSecret() to get the guid and secret from the resulting parse.
 * @param {ArgumentParser} parser
 * @param {boolean} [required=true] Require either the guid/secret or file arguments to be provided.
 */
export function addPayloadCredentialsArguments(parser: ArgumentParser, required?: boolean): void;
/**
 * Add argument for payload_credentials_file to an ArgumentParser or argument group. This file is where the payload's
 * GUID and secret are stored. The GUID and secret can be securely generated on a per-robot basis and written to this
 * file with readOrCreatePayloadCredentials(filename).
 * @param {ArgumentParser} parser
 */
export function addPayloadCredentialsFileArgument(parser: ArgumentParser): void;
/**
 * Add arguments common to most applications hosting a GRPC service.
 * @param {ArgumentParser} parser
 */
export function addServiceHostingArguments(parser: ArgumentParser): void;
/**
 * Add arguments common to most applications defining a GRPC service endpoint.
 * @param {ArgumentParser} parser
 */
export function addServiceEndpointArguments(parser: ArgumentParser): void;
/**
 * Read the guid and secret from a file that already exists.
 * The file should have the guid and secret as the first and second lines in the file.
 * @param {string} filename Name of the file to read.
 * @returns {{guid: string, secret: string}}
 */
export function readPayloadCredentials(filename: string): {
    guid: string;
    secret: string;
};
/**
 * Only for use when attempting to register a payload. If simply trying to authenticate,
 * use getGuidOrSecret or readPayloadCredentials instead.
 * When registering, attempt to read the payload's guid and secret from the specified file.
 * If this file exists, it should have the guid and secret as the first and second lines in the
 * file. If the file does not exist, this function creates a valid credentials file at filename.
 * @param {string} filename Name of the file to read. Its parent directories should already exist and
 * it should have the right permissions to be read by the payload registration
 * service. If running on a CORE I/O, also ensure that this location is mounted
 * as a volume to the CORE I/O's /data or /persist locations.
 * @returns {{guid: string, secret: string}}
 */
export function readOrCreatePayloadCredentials(filename: string): {
    guid: string;
    secret: string;
};
/**
 * Get the guid and secret for a payload, based on the options that were added
 * via addPayloadCredentialsArguments().
 * @param {Object} parsedOptions Namespace result of parser.parse_args()
 * @returns {{guid: string, secret: string}}
 */
export function getGuidAndSecret(parsedOptions: Object): {
    guid: string;
    secret: string;
};
/**
 * A Map whose get() returns defaultValueFunc() for a missing key, like the collections.defaultdict of the status
 * tables of Python (the missing keys are not added).
 * @param {function(): *} defaultValueFunc
 * @returns {Map}
 */
export function DefaultDict(defaultValueFunc: () => any): Map<any, any>;
/**
 * Polyfill for `Symbol.dispose` and `Symbol.asyncDispose` which is used as a part of
 * {@link https://github.com/tc39/proposal-explicit-resource-management}. Node versions below 18.x
 * don't have these symbols by default, so we need to polyfill them.
 */
export function polyfillDispose(): void;
/**
 * Build a lookup table that maps google-protobuf message constructors
 * to their fully qualified type name.
 *
 * This is useful because in many builds `constructor.name` is empty
 * for protobuf-generated classes and google-protobuf does not expose
 * descriptors in JavaScript.
 *
 * The index is built once by walking a known protobuf namespace
 * (for example `proto.bosdyn.api`) and can then be used to resolve
 * a message type name in O(1).
 *
 * @param {object|Function} root Root protobuf namespace to scan (e.g. `proto.bosdyn.api`)
 * @param {string} [prefix] Optional prefix added to all resolved names (e.g. "bosdyn.api")
 * @returns {WeakMap<Function, string>}
 */
export function buildProtoIndex(root: object | Function, prefix?: string): WeakMap<Function, string>;
/**
 * Resolve the protobuf type name of a google-protobuf message instance.
 *
 * @param {object} msg Protobuf message instance
 * @param {WeakMap<Function, string>} typeIndex Index created by `buildProtoIndex`
 * @returns {string|null}
 */
export function getProtoTypeName(msg: object, typeIndex: WeakMap<Function, string>): string | null;
/**
 * Resolve the fully qualified protobuf type name (e.g. 'bosdyn.api.RobotCommandResponse') of a
 * google-protobuf message instance or class, the equivalent of Python's `DESCRIPTOR.full_name`.
 *
 * Generated modules register their classes on the global `proto` namespace when they are loaded,
 * so the index is rebuilt when an unknown class is met.
 * @param {object|Function} msgOrClass Protobuf message instance or class.
 * @returns {?string}
 */
export function protoTypeName(msgOrClass: object | Function): string | null;
/**
 * GET an HTTPS URL of the robot like the REST downloads of the Python SDK: urlopen() with an unverified SSL
 * context, so the certificate of the robot is not checked.
 * @param {string} url The URL, with its query string.
 * @param {Object<string, string>} headers Headers of the request.
 * @param {?number} [timeoutMs=null] Maximum inactivity of the connection in milliseconds, like the timeout of
 * urlopen(); null for none.
 * @returns {Promise<import('node:http').IncomingMessage>} The response, whose body is read as a stream.
 */
export function httpsGetUnverified(url: string, headers: {
    [x: string]: string;
}, timeoutMs?: number | null): Promise<import("node:http").IncomingMessage>;

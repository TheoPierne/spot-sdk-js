# bosdyn-client/util

Helper functions and classes for creating client applications.

```js
const { DedupLoggingMessages, checkOptions, cliLoginPrompt, ... } = require('spot-sdk-js');
```

| Export | Kind | Description |
|---|---|---|
| [`DedupLoggingMessages`](#deduploggingmessages) | Class | Logger filter to prevent duplicated messages from being logged, like DedupLoggingMessages of Python. |
| [`checkOptions`](#checkoptions) | Function | Check an options object like the keyword arguments of Python: a positional value (a number, a protobuf message...) or an unknown option (e.g. |
| [`cliLoginPrompt`](#cliloginprompt) | Function | Interactive CLI for scripting conveniences, like cli_login_prompt() in Python: the username is asked if unknown (or confirmed if the password is unknown), and the password is always asked. |
| [`cliAuth`](#cliauth) | Function | Interactive CLI for authenticating with the robot, like cli_auth() in Python: the credentials are asked again until the authentication succeeds (a failure threw, and the credentials were only asked if both were missing). |
| [`authenticate`](#authenticate) | Function | Generic function for authenticating with the robot, like Python. |
| [`setupLogging`](#setuplogging) | Function | Set the log level of every SDK logger: 'info' by default, 'debug' if verbose. |
| [`doesDedupFilterExist`](#doesdedupfilterexist) | Function | Check if the DedupLoggingMessages filter exists for the loggers, with these levels. |
| [`safePbEnumToString`](#safepbenumtostring) | Function | The name of a value of a protobuf enum, like safe_pb_enum_to_string() in Python: it avoids throwing an exception if the value is unknown by the enum object. |
| [`getLogger`](#getlogger) | Function |  |
| [`addCommonArguments`](#addcommonarguments) | Function | Add arguments common to most applications used for authentication, like add_common_arguments() in Python (which deprecates it for addBaseArguments()). |
| [`addCredentialsArguments`](#addcredentialsarguments) | Function | Add username/password flags to parser, like add_credentials_arguments() in Python (deprecated there too: the credentials are better read from the BOSDYN_CLIENT_USERNAME and BOSDYN_CLIENT_PASSWORD environment variables). |
| [`addBaseArguments`](#addbasearguments) | Function | Add hostname argument to parser. |
| [`addPayloadCredentialsArguments`](#addpayloadcredentialsarguments) | Function | Add arguments common to most payload related applications, like Python: --guid (with --secret) or --payload-credentials-file (both --guid and --secret were required, even with a credentials file). |
| [`addPayloadCredentialsFileArgument`](#addpayloadcredentialsfileargument) | Function | Add argument for payload_credentials_file to an ArgumentParser or argument group. |
| [`addServiceHostingArguments`](#addservicehostingarguments) | Function | Add arguments common to most applications hosting a GRPC service. |
| [`addServiceEndpointArguments`](#addserviceendpointarguments) | Function | Add arguments common to most applications defining a GRPC service endpoint. |
| [`readPayloadCredentials`](#readpayloadcredentials) | Function | Read the guid and secret from a file that already exists. |
| [`readOrCreatePayloadCredentials`](#readorcreatepayloadcredentials) | Function | Only for use when attempting to register a payload. |
| [`getGuidAndSecret`](#getguidandsecret) | Function | Get the guid and secret for a payload, based on the options that were added via addPayloadCredentialsArguments(). |
| [`DefaultDict`](#defaultdict) | Function | A Map whose get() returns defaultValueFunc() for a missing key, like the collections.defaultdict of the status tables of Python (the missing keys are not added). |
| [`polyfillDispose`](#polyfilldispose) | Function | Polyfill for `Symbol.dispose` and `Symbol.asyncDispose` which is used as a part of `https://github.com/tc39/proposal-explicit-resource-management`. |
| [`buildProtoIndex`](#buildprotoindex) | Function | Build a lookup table that maps google-protobuf message constructors to their fully qualified type name. |
| [`getProtoTypeName`](#getprototypename) | Function | Resolve the protobuf type name of a google-protobuf message instance. |
| [`protoTypeName`](#prototypename) | Function | Resolve the fully qualified protobuf type name (e.g. |
| [`httpsGetUnverified`](#httpsgetunverified) | Function | GET an HTTPS URL of the robot like the REST downloads of the Python SDK: urlopen() with an unverified SSL context, so the certificate of the robot is not checked. |

## DedupLoggingMessages

```ts
class DedupLoggingMessages
```

Logger filter to prevent duplicated messages from being logged, like DedupLoggingMessages of Python.

### new DedupLoggingMessages

```ts
constructor(alwaysPrintLoggerLevels?: Iterable<string>)
```

| Parameter | Type | Description |
|---|---|---|
| `alwaysPrintLoggerLevels` | `Iterable<string>` | ] The levels whose messages are always logged. (*Optional*, default `['error'`) |

### Properties

| Property | Type | Description |
|---|---|---|
| `lastErrorMessage` | `any` |  |
| `alwaysPrintLoggerLevels` | `Set<string>` |  |

### filter

```ts
filter(record: Object): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `record` | `Object` | A message of winston: level, message and the arguments to format. |

**Returns** `boolean`: Whether to log it: not if it repeats the previous one.

## checkOptions

```ts
export function checkOptions(options: Object | null, names: string[], method: string): Object
```

Check an options object like the keyword arguments of Python: a positional value (a number, a protobuf message...)
or an unknown option (e.g. a snake_case name) was silently ignored.

| Parameter | Type | Description |
|---|---|---|
| `options` | `Object \| null` | The options object (null or undefined: no options). |
| `names` | `string[]` | The names of the options. |
| `method` | `string` | The name of the function, for the error messages. |

**Returns** `Object`: The options, or an empty object.

**Throws**

- `TypeError` The options are not a plain object, or one of them is unknown.

## cliLoginPrompt

```ts
export function cliLoginPrompt(username?: string | null, password?: string | null): Promise<[string, string]>
```

Interactive CLI for scripting conveniences, like cli_login_prompt() in Python: the username is asked if unknown
(or confirmed if the password is unknown), and the password is always asked.

| Parameter | Type | Description |
|---|---|---|
| `username` | `string \| null` | (*Optional*, default `null`) |
| `password` | `string \| null` | (*Optional*, default `null`) |

**Returns** `Promise<[string, string]>`

## cliAuth

```ts
export function cliAuth(robot: Robot, username?: string | null, password?: string | null): Promise<void>
```

Interactive CLI for authenticating with the robot, like cli_auth() in Python: the credentials are asked again
until the authentication succeeds (a failure threw, and the credentials were only asked if both were missing).

| Parameter | Type | Description |
|---|---|---|
| `robot` | `Robot` |  |
| `username` | `string \| null` | (*Optional*, default `null`) |
| `password` | `string \| null` | (*Optional*, default `null`) |

**Returns** `Promise<void>`

## authenticate

```ts
export function authenticate(robot: Robot, askpass?: (() => ([string, string] | Promise<[string, string]>)) | null): Promise<void>
```

Generic function for authenticating with the robot, like Python. Tries to authenticate using the following
methods, in order:
- An existing auth token
- Username/Password supplied in the environment (BOSDYN_CLIENT_USERNAME, BOSDYN_CLIENT_PASSWORD)
- With a specified callback function, returning a username and password.
- A command line prompt, if possible (stdin is a tty).

| Parameter | Type | Description |
|---|---|---|
| `robot` | `Robot` |  |
| `askpass` | `(() => ([string, string] \| Promise<[string, string]>)) \| null` | A function that retrieves authentication credentials if none are specified via environment variables. (*Optional*, default `null`) |

**Returns** `Promise<void>`

**Throws**

- `Error` Stdin is not a tty and no askpass specified.

## setupLogging

```ts
export function setupLogging(verbose?: boolean, includeDedupFilter?: boolean, alwaysPrintLoggerLevels?: Iterable<string>): import("winston").Logger
```

Set the log level of every SDK logger: 'info' by default, 'debug' if verbose.
Like Python's setup_logging, this applies to all loggers (existing and future), not only this one.

| Parameter | Type | Description |
|---|---|---|
| `verbose` | `boolean` | Show debug-level messages. (*Optional*, default `false`) |
| `includeDedupFilter` | `boolean` | Don't log a message repeating the previous one (see DedupLoggingMessages); the second argument was the levels, like Python it is whether to filter. (*Optional*, default `false`) |
| `alwaysPrintLoggerLevels` | `Iterable<string>` | ] The levels whose messages are always logged, like CRITICAL and ERROR in Python. (*Optional*, default `['error'`) |

**Returns** `import("winston").Logger`

## doesDedupFilterExist

```ts
export function doesDedupFilterExist(logger: {
    filter: Object | null;
}, alwaysPrintLoggerLevels: Iterable<string>): boolean
```

Check if the DedupLoggingMessages filter exists for the loggers, with these levels.

| Parameter | Type | Description |
|---|---|---|
| `logger` | `{ filter: Object \| null; }` | LoggerUtil (the filter of all the loggers). |
| `alwaysPrintLoggerLevels` | `Iterable<string>` |  |

**Returns** `boolean`

## safePbEnumToString

```ts
export function safePbEnumToString(value: number, pbEnumObj: {
    [x: string]: number;
}): string
```

The name of a value of a protobuf enum, like safe_pb_enum_to_string() in Python: it avoids throwing an exception if
the value is unknown by the enum object.

| Parameter | Type | Description |
|---|---|---|
| `value` | `number` | The enum value to convert. |
| `pbEnumObj` | `{ [x: string]: number; }` | The protobuf enum object to decode the value. |

**Returns** `string`

## getLogger

```ts
export function getLogger(): import("winston").Logger
```

**Returns** `import("winston").Logger`

## addCommonArguments

```ts
export function addCommonArguments(parser: ArgumentParser, credentialsNoWarn?: boolean): void
```

Add arguments common to most applications used for authentication, like add_common_arguments() in Python (which
deprecates it for addBaseArguments()).

| Parameter | Type | Description |
|---|---|---|
| `parser` | `ArgumentParser` |  |
| `credentialsNoWarn` | `boolean` | See addCredentialsArguments(). (*Optional*, default `false`) |

## addCredentialsArguments

```ts
export function addCredentialsArguments(parser: ArgumentParser, credentialsNoWarn?: boolean): void
```

Add username/password flags to parser, like add_credentials_arguments() in Python (deprecated there too: the
credentials are better read from the BOSDYN_CLIENT_USERNAME and BOSDYN_CLIENT_PASSWORD environment variables).

| Parameter | Type | Description |
|---|---|---|
| `parser` | `ArgumentParser` |  |
| `credentialsNoWarn` | `boolean` | Don't log the deprecation warning when the flags are added (they still warn when used). (*Optional*, default `false`) |

## addBaseArguments

```ts
export function addBaseArguments(parser: ArgumentParser): void
```

Add hostname argument to parser.

| Parameter | Type | Description |
|---|---|---|
| `parser` | `ArgumentParser` |  |

## addPayloadCredentialsArguments

```ts
export function addPayloadCredentialsArguments(parser: ArgumentParser, required?: boolean): void
```

Add arguments common to most payload related applications, like Python: --guid (with --secret) or
--payload-credentials-file (both --guid and --secret were required, even with a credentials file).
Use getGuidAndSecret() to get the guid and secret from the resulting parse.

| Parameter | Type | Description |
|---|---|---|
| `parser` | `ArgumentParser` |  |
| `required` | `boolean` | Require either the guid/secret or file arguments to be provided. (*Optional*, default `true`) |

## addPayloadCredentialsFileArgument

```ts
export function addPayloadCredentialsFileArgument(parser: ArgumentParser): void
```

Add argument for payload_credentials_file to an ArgumentParser or argument group. This file is where the payload's
GUID and secret are stored. The GUID and secret can be securely generated on a per-robot basis and written to this
file with readOrCreatePayloadCredentials(filename).

| Parameter | Type | Description |
|---|---|---|
| `parser` | `ArgumentParser` |  |

## addServiceHostingArguments

```ts
export function addServiceHostingArguments(parser: ArgumentParser): void
```

Add arguments common to most applications hosting a GRPC service.

| Parameter | Type | Description |
|---|---|---|
| `parser` | `ArgumentParser` |  |

## addServiceEndpointArguments

```ts
export function addServiceEndpointArguments(parser: ArgumentParser): void
```

Add arguments common to most applications defining a GRPC service endpoint.

| Parameter | Type | Description |
|---|---|---|
| `parser` | `ArgumentParser` |  |

## readPayloadCredentials

```ts
export function readPayloadCredentials(filename: string): {
    guid: string;
    secret: string;
}
```

Read the guid and secret from a file that already exists.
The file should have the guid and secret as the first and second lines in the file.

| Parameter | Type | Description |
|---|---|---|
| `filename` | `string` | Name of the file to read. |

**Returns** `{ guid: string; secret: string; }`

## readOrCreatePayloadCredentials

```ts
export function readOrCreatePayloadCredentials(filename: string): {
    guid: string;
    secret: string;
}
```

Only for use when attempting to register a payload. If simply trying to authenticate,
use getGuidOrSecret or readPayloadCredentials instead.
When registering, attempt to read the payload's guid and secret from the specified file.
If this file exists, it should have the guid and secret as the first and second lines in the
file. If the file does not exist, this function creates a valid credentials file at filename.

| Parameter | Type | Description |
|---|---|---|
| `filename` | `string` | Name of the file to read. Its parent directories should already exist and it should have the right permissions to be read by the payload registration service. If running on a CORE I/O, also ensure that this location is mounted as a volume to the CORE I/O's /data or /persist locations. |

**Returns** `{ guid: string; secret: string; }`

## getGuidAndSecret

```ts
export function getGuidAndSecret(parsedOptions: Object): {
    guid: string;
    secret: string;
}
```

Get the guid and secret for a payload, based on the options that were added
via addPayloadCredentialsArguments().

| Parameter | Type | Description |
|---|---|---|
| `parsedOptions` | `Object` | Namespace result of parser.parse_args() |

**Returns** `{ guid: string; secret: string; }`

## DefaultDict

```ts
export function DefaultDict(defaultValueFunc: () => any): Map<any, any>
```

A Map whose get() returns defaultValueFunc() for a missing key, like the collections.defaultdict of the status
tables of Python (the missing keys are not added).

| Parameter | Type | Description |
|---|---|---|
| `defaultValueFunc` | `() => any` |  |

**Returns** `Map<any, any>`

## polyfillDispose

```ts
export function polyfillDispose(): void
```

Polyfill for `Symbol.dispose` and `Symbol.asyncDispose` which is used as a part of
`https://github.com/tc39/proposal-explicit-resource-management`. Node versions below 18.x
don't have these symbols by default, so we need to polyfill them.

## buildProtoIndex

```ts
export function buildProtoIndex(root: object | Function, prefix?: string): WeakMap<Function, string>
```

Build a lookup table that maps google-protobuf message constructors
to their fully qualified type name.

This is useful because in many builds `constructor.name` is empty
for protobuf-generated classes and google-protobuf does not expose
descriptors in JavaScript.

The index is built once by walking a known protobuf namespace
(for example `proto.bosdyn.api`) and can then be used to resolve
a message type name in O(1).

| Parameter | Type | Description |
|---|---|---|
| `root` | `object \| Function` | Root protobuf namespace to scan (e.g. `proto.bosdyn.api`) |
| `prefix` | `string` | Optional prefix added to all resolved names (e.g. "bosdyn.api") (*Optional*) |

**Returns** `WeakMap<Function, string>`

## getProtoTypeName

```ts
export function getProtoTypeName(msg: object, typeIndex: WeakMap<Function, string>): string | null
```

Resolve the protobuf type name of a google-protobuf message instance.

| Parameter | Type | Description |
|---|---|---|
| `msg` | `object` | Protobuf message instance |
| `typeIndex` | `WeakMap<Function, string>` | Index created by `buildProtoIndex` |

**Returns** `string \| null`

## protoTypeName

```ts
export function protoTypeName(msgOrClass: object | Function): string | null
```

Resolve the fully qualified protobuf type name (e.g. 'bosdyn.api.RobotCommandResponse') of a
google-protobuf message instance or class, the equivalent of Python's `DESCRIPTOR.full_name`.

Generated modules register their classes on the global `proto` namespace when they are loaded,
so the index is rebuilt when an unknown class is met.

| Parameter | Type | Description |
|---|---|---|
| `msgOrClass` | `object \| Function` | Protobuf message instance or class. |

**Returns** `string \| null`

## httpsGetUnverified

```ts
export function httpsGetUnverified(url: string, headers: {
    [x: string]: string;
}, timeoutMs?: number | null): Promise<import("node:http").IncomingMessage>
```

GET an HTTPS URL of the robot like the REST downloads of the Python SDK: urlopen() with an unverified SSL
context, so the certificate of the robot is not checked.

| Parameter | Type | Description |
|---|---|---|
| `url` | `string` | The URL, with its query string. |
| `headers` | `{ [x: string]: string; }` | Headers of the request. |
| `timeoutMs` | `number \| null` | Maximum inactivity of the connection in milliseconds, like the timeout of urlopen(); null for none. (*Optional*, default `null`) |

**Returns** `Promise<import("node:http").IncomingMessage>`: The response, whose body is read as a stream.

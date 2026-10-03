# Installation

## Requirements

- **Node.js 24 or later**. The SDK is a CommonJS package; ES modules import it too (see
  [TypeScript](/guide/typescript)).
- A **Spot robot**, and a user of the robot (created in its admin console). By default, the robot is at
  `192.168.80.3` on its Wi-Fi access point, and at `10.0.0.3` on its Ethernet port.

The SDK talks to the robot with [grpc-js](https://github.com/grpc/grpc-node), written in JavaScript: there is nothing
to compile. The image helpers use [sharp](https://sharp.pixelplumbing.com/), which npm installs with a prebuilt binary
for your platform; it is loaded only when you save or show an image.

## Install the package

```bash
npm install spot-sdk-js
```

Everything is exported by the package root:

```js
const { createStandardSdk, LeaseClient, RobotCommandBuilder } = require('spot-sdk-js');
```

See [Concepts](/guide/concepts#imports) for the few names that are required from their module or from a namespace.

## Credentials

A client authenticates with the username and the password of a user of the robot:

```js
await robot.authenticate('user', 'password');
```

The `authenticate(robot)` helper, used by the examples and the command line, takes them from the environment
variables `BOSDYN_CLIENT_USERNAME` and `BOSDYN_CLIENT_PASSWORD`, or asks for them in the terminal:

```bash
export BOSDYN_CLIENT_USERNAME=user
export BOSDYN_CLIENT_PASSWORD=password
```

```js
const { authenticate } = require('spot-sdk-js');

await authenticate(robot);
```

A payload authenticates with its own credentials instead: see [Payloads and services](/guide/payloads).

## Certificate of the robot

The robot presents a certificate signed by the root certificate authority of Boston Dynamics, which the SDK trusts by
default (`robot.pem` in the package). To connect to a robot or a mock robot signed by another authority, give its
certificate:

- in the environment variable `BOSDYN_CA_CERT`, a path or a glob pattern:

  ```bash
  export BOSDYN_CA_CERT=/path/to/ca.crt
  ```

- or in the code, before creating the robot:

  ```js
  const sdk = createStandardSdk('MyApp');
  sdk.loadRobotCert('/path/to/ca.crt');
  ```

## Other environment variables

| Variable | Use |
|---|---|
| `BOSDYN_CLIENT_USERNAME`, `BOSDYN_CLIENT_PASSWORD` | The credentials of `authenticate(robot)` and of the command line. |
| `BOSDYN_CA_CERT` | The certificates to trust instead of the certificate authority of Boston Dynamics. |
| `BOSDYN_RESOURCE_ROOT` | The directory of the resources of the SDK (`~/.bosdyn` by default), exported as `BOSDYN_RESOURCE_ROOT`. |

## Check the installation

The command line of the package reads the identity of a robot without credentials:

```bash
npx spot-sdk-js 192.168.80.3 id
```

Then follow [Getting started](/guide/getting-started).

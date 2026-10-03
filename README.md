# spot-sdk-js

The Node.js SDK of Spot, the robot of Boston Dynamics: an unofficial port of the official
[Python SDK](https://github.com/boston-dynamics/spot-sdk).

It follows the Python SDK module by module (the behavior and the protobuf definitions of the Spot SDK 5.2.0):
authentication, time sync, leases and E-Stop, power, robot commands, robot state, images, GraphNav, missions,
autowalk, docking, data buffer and data acquisition, the services of payloads, Spot CAM, GPS, choreography, Orbit,
BDDF files, a command line and TypeScript typings.

**Documentation:** guides and API reference in [`docs/`](docs/README.md) (`npm run docs` to browse them).

## Install

```bash
npm install spot-sdk-js
```

Node.js 22 or later.

## Example

```js
const {
  LeaseClient,
  LeaseKeepAlive,
  RobotCommandBuilder,
  RobotCommandClient,
  blockingStand,
  createStandardSdk,
} = require('spot-sdk-js');

async function main() {
  const sdk = createStandardSdk('MyApp');
  const robot = sdk.createRobot('192.168.80.3');
  await robot.authenticate(process.env.BOSDYN_CLIENT_USERNAME, process.env.BOSDYN_CLIENT_PASSWORD);
  await (await robot.timeSync).waitForSync();

  const leaseClient = await robot.ensureClient(LeaseClient.defaultServiceName);
  const leaseKeepAlive = new LeaseKeepAlive(leaseClient, { mustAcquire: true, returnAtExit: true });
  await leaseKeepAlive.waitForInitialization();
  try {
    await robot.powerOn(20_000);
    const commandClient = await robot.ensureClient(RobotCommandClient.defaultServiceName);
    await blockingStand(commandClient, 10_000);
    await commandClient.robotCommand(RobotCommandBuilder.synchroSitCommand());
  } finally {
    await leaseKeepAlive.shutdown();
    robot.shutdown();
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
```

The robot needs an E-Stop to power on: the tablet, or the [estop example](examples/estop). See
[Getting started](docs/guide/getting-started.md) for the details, and the [examples](examples).

## Command line

```bash
npx spot-sdk-js --help
npx spot-sdk-js 192.168.80.3 id
```

## Development

```bash
npm test               # the tests
npm run lint           # ESLint and Prettier
npm run build:typings  # the typings, from the JSDoc
npm run build:docs     # the typings, then the API reference of the documentation
```

See [Development](docs/guide/development.md) and the [changelog](CHANGELOG.md).

## License

This project is not affiliated with Boston Dynamics. See the [LICENSE](LICENSE) file.

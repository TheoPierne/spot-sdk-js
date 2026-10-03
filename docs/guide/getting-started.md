# Getting started

This page walks through a first program, a shorter version of the [hello_spot](/examples#hello-spot) example: it
connects to the robot, powers it on, makes it stand, takes a picture and powers it off.

> [!WARNING]
> The robot moves. Keep a clear space around it, and keep an E-Stop at hand: the tablet, or the
> [estop example](/examples#e-stop) running on another computer.

## The program

```js
const { setTimeout: sleep } = require('node:timers/promises');

const {
  EulerZXY,
  ImageClient,
  LeaseClient,
  LeaseKeepAlive,
  RobotCommandBuilder,
  RobotCommandClient,
  authenticate,
  blockingStand,
  createStandardSdk,
  imageUtil,
  setupLogging,
} = require('spot-sdk-js');

async function helloSpot(hostname) {
  setupLogging();
  const sdk = createStandardSdk('HelloSpotClient');
  const robot = sdk.createRobot(hostname);
  await authenticate(robot);

  // Time sync: the commands carry times on the clock of the robot.
  await (await robot.timeSync).waitForSync();

  if (await robot.isEstopped()) {
    throw new Error('The robot is estopped: register an E-Stop with the tablet or the estop example.');
  }

  const leaseClient = await robot.ensureClient(LeaseClient.defaultServiceName);
  const leaseKeepAlive = new LeaseKeepAlive(leaseClient, { mustAcquire: true, returnAtExit: true });
  await leaseKeepAlive.waitForInitialization();
  try {
    robot.logger.info('Powering on the robot...');
    await robot.powerOn(20_000);

    const commandClient = await robot.ensureClient(RobotCommandClient.defaultServiceName);
    await blockingStand(commandClient, 10_000);
    robot.logger.info('Standing.');
    await sleep(3_000);

    // Stand with the body turned by 0.4 rad around the vertical axis.
    await commandClient.robotCommand(RobotCommandBuilder.synchroStandCommand({ footprintRBody: new EulerZXY(0.4) }));
    await sleep(3_000);

    const imageClient = await robot.ensureClient(ImageClient.defaultServiceName);
    const [response] = await imageClient.getImageFromSources(['frontleft_fisheye_image']);
    await imageUtil.save(response.getShot().getImage().getData_asU8(), 'hello-spot.jpg');

    // Sits down, then cuts the power of the motors.
    await robot.powerOff(false, 20_000);
    robot.logger.info('Powered off.');
  } finally {
    // Returns the lease, even if something failed.
    await leaseKeepAlive.shutdown();
    robot.shutdown();
  }
}

helloSpot(process.argv[2]).catch(error => {
  console.error('Hello, Spot! failed:', error);
  process.exitCode = 1;
});
```

Run it with the address of the robot, and the credentials of a user in the environment:

```bash
BOSDYN_CLIENT_USERNAME=user BOSDYN_CLIENT_PASSWORD=password node hello_spot.js 192.168.80.3
```

## Step by step

### The Sdk and the Robot

`createStandardSdk()` creates an `Sdk` that knows the clients of all the standard services of the robot. The `Sdk`
holds the settings common to your application; `sdk.createRobot(address)` returns a `Robot`, the object of one robot:
its channels, its user token, its clients, its time sync. See [Concepts](/guide/concepts#the-sdk-and-the-robot).

### Authentication

`authenticate(robot)` takes the credentials from `BOSDYN_CLIENT_USERNAME` and `BOSDYN_CLIENT_PASSWORD`, or asks for
them. The robot then gets a user token, and refreshes it in the background. `robot.authenticate(username, password)`
does the same with the credentials of your choice.

### Time sync

Many commands are valid until a time, given on the clock of the robot. The time sync estimates the offset between your
clock and the clock of the robot, in the background. `robot.timeSync` starts it (it is a promise of the
`TimeSyncThread`), and `waitForSync()` waits until the first estimate is known.

### E-Stop

The robot powers its motors only if an E-Stop endpoint is registered and checks in: the tablet, the
[estop example](/examples#e-stop), or your own code (see [Robot control](/guide/robot-control#e-stop)). The E-Stop is a
separate application on purpose: it stops the robot even if your program hangs.

### Lease

The lease gives the control of the robot to one client at a time. `LeaseKeepAlive` acquires the lease of the body
(`mustAcquire`), keeps it alive in the background, and returns it at the end (`returnAtExit`), when you call
`shutdown()`: always call it, in a `finally` block. The clients that command the robot take the lease from the lease
wallet of the robot, which the keep-alive fills.

### Power and commands

`robot.powerOn(timeout)` powers the motors and waits until they are on, and `robot.powerOff(cutImmediately, timeout)`
powers them off: with `cutImmediately` false, the robot sits down first. The timeouts of these helpers are in
milliseconds.

The `RobotCommandClient` sends the commands that `RobotCommandBuilder` builds. `blockingStand()` sends a stand command
and waits until the robot stands; `robotCommand()` sends a command and returns its id, without waiting.

### Images

`ImageClient.getImageFromSources()` returns an `ImageResponse` per camera. The data of the image is in
`response.getShot().getImage()`: a JPEG here, which `imageUtil.save()` converts and writes.

## Next steps

- [Concepts](/guide/concepts): the options of the RPCs, the protobuf messages, the errors, the logs.
- [Robot control](/guide/robot-control): move the robot, the arm and the gripper, dock it.
- The [examples](/examples) of the repository.

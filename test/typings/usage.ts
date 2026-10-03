// Compiled by `npm run test:typings` (tsc, without output): the typings of the SDK are valid, and type the usual
// code of an application like the hello_spot example.
import {
  LeaseClient,
  LeaseKeepAlive,
  LoggerUtil,
  ResponseError,
  RobotCommandBuilder,
  RobotCommandClient,
  RobotStateClient,
  RpcError,
  SE2Pose,
  blockingStand,
  createStandardSdk,
  secondsToDuration,
  spotCam,
  type Robot,
} from 'spot-sdk-js';
import { NoTimeSyncError } from 'spot-sdk-js/src/bosdyn-client/graph_nav';
import { RobotState } from 'spot-sdk-js/src/bosdyn/api/robot_state_pb';

export async function helloSpot(address: string, username: string, password: string): Promise<number> {
  const sdk = createStandardSdk('TypingsCheck');
  const robot: Robot = sdk.createRobot(address);
  await robot.authenticate(username, password);
  await robot.startTimeSync();

  const stateClient: RobotStateClient = await robot.ensureClient(RobotStateClient.defaultServiceName);
  const state: RobotState = await stateClient.getRobotState();
  const batteryPercent = state.getPowerState()?.getLocomotionChargePercentage()?.getValue() ?? 0;

  const leaseClient: LeaseClient = await robot.ensureClient(LeaseClient.defaultServiceName);
  const keepAlive = new LeaseKeepAlive(leaseClient, { mustAcquire: true, returnAtExit: true });
  try {
    await robot.powerOn(20_000);
    const commandClient: RobotCommandClient = await robot.ensureClient(RobotCommandClient.defaultServiceName);
    await blockingStand(commandClient, 10_000);
    const commandId: number = await commandClient.robotCommand(RobotCommandBuilder.synchroSitCommand());
    LoggerUtil.getLogger('typings').info(`Sitting (${commandId}), ${new SE2Pose(1, 2, 0.5).toString()}`);
  } catch (err) {
    if (err instanceof RpcError || err instanceof ResponseError) {
      console.error(`Failed: ${err.message}`);
    } else {
      throw err;
    }
  } finally {
    await keepAlive.shutdown();
  }
  console.info(secondsToDuration(1.5).getNanos());
  return batteryPercent;
}

// The namespaces of the root, and a name several modules export (required from its module).
export function names(): string[] {
  const ptz: typeof spotCam.PtzClient = spotCam.PtzClient;
  return [ptz.defaultServiceName, new NoTimeSyncError(null, 'no time sync').message];
}

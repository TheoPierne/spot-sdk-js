'use strict';

const assert = require('node:assert');
const path = require('node:path');
const process = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');

const { ArgumentParser } = require('argparse');

const {
  ChoreographyClient,
  loadChoreographySequenceFromTxtFile,
} = require('../../src/bosdyn-choreography-client/choreography');
const { UnauthenticatedError, ResponseError } = require('../../src/bosdyn-client/exceptions');
const { LeaseClient, LeaseKeepAlive } = require('../../src/bosdyn-client/lease');
const { LicenseClient } = require('../../src/bosdyn-client/license');
const { addBaseArguments, authenticate } = require('../../src/bosdyn-client/util');
const { nowSec } = require('../../src/bosdyn-core/util');
const { createStandardSdk } = require('../../src/index');

const DEFAULT_DANCE = 'default_dance.csq';

async function main(args = null) {
  const parser = new ArgumentParser();
  addBaseArguments(parser);
  // Two optional arguments, like Python (a required mutually exclusive group forbade the default dance).
  parser.add_argument('--choreography-filepath', {
    help: 'The filepath to load the choreographed sequence text file from.',
  });
  parser.add_argument('--upload-only', { action: 'store_true', help: 'Only upload, without executing.' });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const sdk = createStandardSdk('UploadChoreography');
  sdk.registerServiceClient(ChoreographyClient);
  const robot = sdk.createRobot(options.hostname);

  await authenticate(robot);

  /** @type {LicenseClient} */
  const licenseClient = await robot.ensureClient(LicenseClient.defaultServiceName);

  const features = await licenseClient.getFeatureEnabled([ChoreographyClient.licenseName]);

  // The value of the feature (has() was true for a disabled feature).
  if (!features.get(ChoreographyClient.licenseName)) {
    robot.logger.error('This robot is not licensed for choreography');
    process.exit(1);
  }

  assert(
    !(await robot.isEstopped()),
    'Robot is estopped. Please use an external E-Stop client, such as the estop SDK example, to configure E-Stop.',
  );

  /** @type {LeaseClient} */
  const leaseClient = await robot.ensureClient(LeaseClient.defaultServiceName);
  await leaseClient.acquire();
  // The keep-alive starts its check-ins itself.
  const leaseKeepAlive = new LeaseKeepAlive(leaseClient);
  try {
    /** @type {ChoreographyClient} */
    const choreographyClient = await robot.ensureClient(ChoreographyClient.defaultServiceName);

    const filePath = options.choreographyFilepath ?? path.join(__dirname, DEFAULT_DANCE);
    let choreography;

    try {
      choreography = loadChoreographySequenceFromTxtFile(filePath);
    } catch (err) {
      robot.logger.error(`Failed to load choreography. Raised exception: ${err}`);
      return true;
    }

    try {
      await choreographyClient.uploadChoreography(choreography, true);
    } catch (err) {
      if (err instanceof UnauthenticatedError) {
        robot.logger.error(
          "The robot license must contain 'choreography' permissions to upload and execute dances. Please contact Boston Dynamics Support to get the appropriate license file.",
        );
      } else if (err instanceof ResponseError) {
        // The warnings must be addressed before the routine can be executed on robot.
        const warnings = err.response?.getWarningsList?.().join('') ?? '';
        robot.logger.error(`Choreography sequence upload failed. The following warnings were produced: ${warnings}`);
      } else {
        throw err;
      }
      return true;
    }

    const sequencesOnRobot = await choreographyClient.listAllSequences();
    const knownSequences = sequencesOnRobot.getKnownSequencesList().join('\n');
    robot.logger.info(`Sequence uploaded. All sequences on the robot: \n${knownSequences}`);

    if (options.uploadOnly) {
      return true;
    }

    await robot.powerOn();

    // The fields of a jspb message are read with getters (choreography.name was undefined).
    const routineName = choreography.getName();
    // Seconds, like the start time the choreography client takes (a Date.now() in ms started the dance in 55 years).
    const delayedStart = 5;
    const clientStartTime = nowSec() + delayedStart;
    const startSlice = 0;

    await choreographyClient.executeChoreography(routineName, clientStartTime, startSlice);

    let totalChoreographySlices = 0;

    for (const move of choreography.getMovesList()) {
      const endSlice = move.getStartSlice() + move.getRequestedSlices();

      if (totalChoreographySlices < endSlice) {
        totalChoreographySlices = endSlice;
      }
    }

    const estimatedSeconds = delayedStart + (totalChoreographySlices / choreography.getSlicesPerMinute()) * 60;

    await sleep((estimatedSeconds + 1) * 1000);

    await robot.powerOff();
    return true;
  } finally {
    await leaseKeepAlive.shutdown();
  }
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch(e => {
      throw e;
    });
} else {
  module.exports = main;
}

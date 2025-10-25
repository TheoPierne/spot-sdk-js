'use strict';

const assert = require('node:assert');
const process = require('node:process');
const { setTimeout: sleep } = require('node:timers/promises');

const { ArgumentParser } = require('argparse');

const { createStandardSdk } = require('../../src/index');
const { ChoreographyClient, loadChoreographySequenceFromTxtFile } = require('../../src/bosdyn-choreography-client/choreography')
const { addCommonArguments } = require('../../src/bosdyn-client/util');
const { LicenseClient } = require('../../src/bosdyn-client/license');
const { LeaseClient, LeaseKeepAlive } = require('../../src/bosdyn-client/lease');
const path = require('node:path');
const { UnauthenticatedError, ResponseError } = require('../../src/bosdyn-client/exceptions');

const DEFAULT_DANCE = 'default_dance.csq';

async function main(args = null) {
  const parser = new ArgumentParser();
  addCommonArguments(parser);
  const group = parser.add_mutually_exclusive_group({ required: true });
  group.add_argument('--choreography-filepath', { help: 'The filepath to load the choreographed sequence text file from.' });
  group.add_argument('--upload-only', { action: 'store_true', help: 'Only upload, without executing.' });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const sdk = createStandardSdk('UploadChoreography');
  sdk.registerServiceClient(ChoreographyClient);
  const robot = sdk.createRobot(options.hostname);

  await robot.authenticate(options.username, options.password);

  /** @type {LicenseClient} */
  const licenseClient = await robot.ensureClient(LicenseClient.defaultServiceName);

  const features = await licenseClient.getFeatureEnabled([ChoreographyClient.defaultServiceName]);

  if (!features.has(ChoreographyClient.defaultServiceName)) {
    robot.logger.error('This robot is not licensed for choreography');
    process.exit(1);
  }

  assert(
    !(await robot.isEstopped()),
    "Robot is estopped. Please use an external E-Stop client, such as the estop SDK example, to configure E-Stop."
  );

  /** @type {LeaseClient} */
  const leaseClient = await robot.ensureClient(LeaseClient.defaultServiceName);
  const lease = await leaseClient.acquire();
  const leaseKeepAlive = new LeaseKeepAlive(leaseClient);
  await leaseKeepAlive.initializeLease();
  leaseKeepAlive.startPeriodicCheckIn();

  /** @type {ChoreographyClient} */
  const choreographyClient = await robot.ensureClient(ChoreographyClient.defaultServiceName);

  const filePath = options.choreographyFilepath ?? path.join(__dirname, DEFAULT_DANCE);
  let choreography;

  try {
    choreography = loadChoreographySequenceFromTxtFile(filePath);
  } catch (err) {
    robot.logger.error('Failed to load choreography. Raised exception: ' + err);
    return true;
  }
  
  let uploadResponse;
  try {
    uploadResponse = await choreographyClient.uploadChoregraphy(choreography, true);
  } catch (err) {
    if (err instanceof UnauthenticatedError) {
      robot.logger.error("The robot license must contain 'choreography' permissions to upload and execute dances. Please contact Boston Dynamics Support to get the appropriate license file.");
    } else if (err instanceof ResponseError) {
      robot.logger.error('Choreography sequence upload failed. The following warnings were produced');
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
  
  const routineName = choreography.name;
  const delayedStart = 5000;
  const clientStartTime = Date.now() + delayedStart;
  const startSlice = 0;
  
  await choreographyClient.executeChoreography(routineName, clientStartTime, startSlice);
  
  let totalChoreographySlices = 0;
  
  for (const move of choreography.moves) {
    const endSlice = move.startSlice + move.requestedSlices;
    
    if (totalChoreographySlices < endSlice) {
      totalChoreographySlices = endSlice;
    }
  }
  
  const estimatedSeconds = delayedStart + totalChoreographySlices / choreography.slicesPerMinute * 60;
  
  await sleep(estimatedSeconds + 1000);
  
  await robot.powerOff();
  return true;
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

#!/usr/bin/env node
'use strict';

const process = require('node:process');

const { ArgumentParser } = require('argparse');

const { createClient } = require('../../../src/bosdyn-orbit/client');
const { addBaseArguments } = require('../../../src/bosdyn-orbit/utils');

async function getAnomalies(options) {
  const orbitClient = await createClient(options);

  // The limit is a query parameter, like params= in Python (the body of a GET request was ignored).
  const getAnomaliesResponse = await orbitClient.getAnomalies({ params: { limit: options.limit } });

  // Like response.ok of Python's requests (statusText is 'OK': the request always looked failed).
  if (getAnomaliesResponse.status >= 400) {
    const { data } = getAnomaliesResponse;
    console.error(`getAnomalies() failed: ${typeof data === 'string' ? data : JSON.stringify(data)}`);
    return false;
  }

  const anomaliesInOrbit = getAnomaliesResponse.data.resources;

  console.log('Here are the existing anomalies stored on the Orbit instance:');

  for (const anomaly of anomaliesInOrbit) {
    console.log(`\tAnomaly title: ${anomaly.title}`);
    console.log(`\t\taction name: ${anomaly.actionName}`);
    console.log(`\t\tstatus: ${anomaly.status}`);
    if (anomaly.elementId) {
      console.log(`\t\telementId: ${anomaly.elementId}`);
    }
    console.log(`\t\tuuid: ${anomaly.uuid}\n`);
  }

  return anomaliesInOrbit;
}

async function main(args = null) {
  const parser = new ArgumentParser();
  // The arguments of Orbit (--hostname, --verify, --cert), like Python: the robot arguments required a positional
  // hostname, and the example did not load (wrong path of util).
  addBaseArguments(parser);
  parser.add_argument('--limit', {
    required: false,
    type: 'int',
    default: 20,
    help: 'Maximum number of anomalies to report in the response to the get anomalies request.',
  });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);
  await getAnomalies(options);
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

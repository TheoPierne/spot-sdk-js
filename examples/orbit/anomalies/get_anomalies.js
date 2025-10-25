#!/usr/bin/env node
'use strict';

const process = require('node:process');

const { ArgumentParser } = require('argparse');

const { createClient } = require('../../../src/bosdyn-orbit/client');
const util = require('../../src/bosdyn-client/util');

async function getAnomalies(options) {
  const orbitClient = await createClient(options);
  
  const getAnomaliesResponse = await orbitClient.getAnomalies({ data: { limit: options.limit } });
  
  if (getAnomaliesResponse.statusText !== 'ok') {
    console.error('getAnomalies() failed : ' + getAnomaliesResponse.data);
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
  util.addCommonArguments(parser);
  parser.add_argument('--limit', { required: false, type: 'int', default: 20, help: 'Maximum number of anomalies to report in the response to the get anomalies request.' });

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


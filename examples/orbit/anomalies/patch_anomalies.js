#!/usr/bin/env node
'use strict';

// An example script to edit inspection anomaly data using the Boston Dynamics Orbit API.

const process = require('node:process');

const { ArgumentParser } = require('argparse');

const { createClient } = require('../../../src/bosdyn-orbit/client');
const { addBaseArguments } = require('../../../src/bosdyn-orbit/utils');

/**
 * The body of a response as text, like response.text of Python's requests.
 * @param {import('axios').AxiosResponse} response
 * @returns {string}
 */
function responseText({ data }) {
  return typeof data === 'string' ? data : JSON.stringify(data);
}

/**
 * A simple example to show how to use the Orbit client to close multiple anomalies at once.
 * @param {object} options The parsed arguments used for configuration options.
 * @returns {Promise<boolean>} False if the request fails and true if the request completes successfully.
 */
async function bulkCloseAnomalies(options) {
  // Create Orbit client object
  const orbitClient = await createClient(options);
  const anomalyElementIds = options.bulk_close_element_ids;

  // Make a patch request to close the anomalies on the specified Orbit instance
  const bulkCloseAnomaliesResponse = await orbitClient.patchBulkCloseAnomalies(anomalyElementIds);

  // Like response.ok of Python's requests.
  if (bulkCloseAnomaliesResponse.status >= 400) {
    console.error(`patchBulkCloseAnomalies() failed: ${responseText(bulkCloseAnomaliesResponse)}`);
    return false;
  }

  console.log(responseText(bulkCloseAnomaliesResponse));

  return true;
}

/**
 * A simple example to show how to use the Orbit client to edit existing anomalies to close or open them by setting
 * the status.
 * @param {object} options The parsed arguments used for configuration options.
 * @returns {Promise<boolean>} False if the request fails and true if the request completes successfully.
 */
async function updateAnomaly(options) {
  // Create Orbit client object
  const orbitClient = await createClient(options);
  const anomalyId = options.anomaly_uuid;

  // Creating an object to update the status field based on parsed argument 'status' set in the command line
  const updatedAnomalyData = { status: options.status };

  // Make a patch request to patch the specified status field in updatedAnomalyData
  const updateAnomalyResponse = await orbitClient.patchAnomalyById(anomalyId, updatedAnomalyData);

  if (updateAnomalyResponse.status >= 400) {
    // Python names bulk_close_anomalies() here (a copy of the function above).
    console.error(`patchAnomalyById() failed: ${responseText(updateAnomalyResponse)}`);
    return false;
  }

  console.log(`Patched Anomaly: ${JSON.stringify(updateAnomalyResponse.data, null, 4)}`);

  return true;
}

async function main(args = null) {
  const parser = new ArgumentParser();
  addBaseArguments(parser);

  // For bulk closing multiple anomalies
  parser.add_argument('--bulk-close-element-ids', {
    help: 'Element ids of the anomalies to be closed in bulk',
    required: false,
    type: 'str',
    nargs: '*',
    default: [],
  });

  // Patching a single anomaly with new status
  parser.add_argument('--anomaly-uuid', {
    help: 'uuid of the anomaly to change fields in',
    required: false,
    type: 'str',
    default: '',
  });

  // For setting the status of the anomaly specified with anomaly-uuid
  parser.add_argument('--status', {
    help: 'Value to set the specified anomaly "status" field to. Either "open" or "closed"',
    required: false,
    type: 'str',
    default: '',
  });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  // Ensure the required fields for each request are available in the parsed arguments to run each function
  const bulkClose = options.bulk_close_element_ids.length > 0;
  if (bulkClose && options.anomaly_uuid === '' && options.status === '') {
    return bulkCloseAnomalies(options);
  } else if (options.anomaly_uuid !== '' && options.status !== '' && !bulkClose) {
    return updateAnomaly(options);
  } else if (options.anomaly_uuid === '' && options.status !== '' && !bulkClose) {
    console.error(
      'Make sure to include an --anomaly-uuid argument in the terminal command for the anomaly that you would like ' +
        'to update.',
    );
  } else if (options.anomaly_uuid !== '' && options.status === '' && !bulkClose) {
    console.error('Make sure to include a --status argument of open or closed in the terminal command.');
  } else {
    console.error('Please only use arguments for the bulk close command or the update an individual anomaly command.');
  }
  return false;
}

if (require.main === module) {
  // Exit code 1 on failure. Python always exits with 1: its main() returns nothing.
  main()
    .then(ok => process.exit(ok ? 0 : 1))
    .catch(e => {
      throw e;
    });
} else {
  module.exports = main;
}

'use strict';

const { setTimeout, clearTimeout } = require('node:timers');

// Const { ResponseError } = require('./exceptions');

const data_acquisition_pb = require('../bosdyn/api/data_acquisition_pb');
const data_acquisition_store_pb = require('../bosdyn/api/data_acquisition_store_pb');

async function issue_acquire_data_request(
  data_acq_client,
  acquisition_requests,
  group_name,
  action_name,
  metadata = null,
) {
  const action_id = new data_acquisition_pb.CaptureActionId().setActionName(action_name).setGroupName(group_name);
  let request_id = null;

  try {
    request_id = await data_acq_client.acquire_data(
      acquisition_requests,
      action_name,
      action_id.getGroupName(),
      null,
      metadata,
    );
  } catch (e) {
    console.error(`[DATA ACQUISITION HELPERS] Exception raised by issue_acquire_data_request: ${e}`);
  }

  return { request_id, action_id };
}

async function acquire_and_process_request(
  data_acquisition_client,
  acquisition_requests,
  group_name,
  action_name,
  metadata = null,
  block_until_complete = true,
) {
  const { request_id } = await issue_acquire_data_request(
    data_acquisition_client,
    acquisition_requests,
    group_name,
    action_name,
    metadata,
  );

  if (!request_id) return false;

  if (!block_until_complete) return true;

  console.log(`[DATA ACQUISITION HELPERS] Waiting for acquisition (id: ${request_id}) to complete.`);
  /* eslint-disable */
  return new Promise(resolve => {
    (function loop() {
      const timeout = setTimeout(async () => {
        let get_status_response = null;
        try {
          get_status_response = await data_acquisition_client.get_status(request_id);
        } catch (e) {
          console.error(`[DATA ACQUISITION HELPERS] Exception: ${e}`);
          return resolve(false);
        }
        console.log(
          `[DATA ACQUISITION HELPERS] Current status is: ${
            data_acquisition_pb.GetStatusResponse.Status[get_status_response.getStatus()]
          }`,
        );
        if (get_status_response.getStatus() === data_acquisition_pb.GetStatusResponse.Status.STATUS_COMPLETE) {
          return resolve(true);
        }
        if (get_status_response.getStatus() === data_acquisition_pb.GetStatusResponse.Status.STATUS_TIMEDOUT) {
          console.log(`[DATA ACQUISITION HELPERS] Unrecoverable request timeout: ${get_status_response}`);
          return resolve(false);
        }
        if (get_status_response.getStatus() === data_acquisition_pb.GetStatusResponse.Status.STATUS_DATA_ERROR) {
          console.log(`[DATA ACQUISITION HELPERS] Data error was received: ${get_status_response}`);
          return resolve(false);
        }
        if (
          get_status_response.getStatus() ===
          data_acquisition_pb.GetStatusResponse.Status.STATUS_REQUEST_ID_DOES_NOT_EXIST
        ) {
          console.log(
            `[DATA ACQUISITION HELPERS] The acquisition request id "${request_id}" is unknown: ${get_status_response}`,
          );
          return resolve(false);
        }
        clearTimeout(timeout);
        loop();
      }, 200).unref();
    })();
  });
  /* eslint-enable */
}

async function cancel_acquisition_request(data_acq_client, request_id) {
  if (!request_id) return;

  try {
    let is_cancelled_response = await data_acq_client.cancel_acquisition(request_id);
    console.log(
      `[DATA ACQUISITION HELPERS] Status of the request to cancel the data-acquisition in progress: ${
        data_acquisition_pb.CancelAcquisitionResponse.Status[is_cancelled_response.getStatus()]
      }`,
    );
  } catch (e) {
    console.error(`[DATA ACQUISITION HELPERS] ResponseError raised when cancelling: ${e}`);
    return;
  }

  /* eslint-disable */
  while (true) {
    let get_status_response = null;
    try {
      get_status_response = await data_acq_client.get_status(request_id);
    } catch (e) {
      console.error(`[DATA ACQUISITION HELPERS] Exception: ${e}`);
      break;
    }

    console.log(
      `[DATA ACQUISITION HELPERS] Request ${request_id} status: ${
        data_acquisition_pb.GetStatusResponse.Status[get_status_response.getStatus()]
      }`,
    );
    if (get_status_response.getStatus() === data_acquisition_pb.GetStatusResponse.Status.STATUS_ACQUISITION_CANCELLED) {
      console.log('[DATA ACQUISITION HELPERS] The request is fully cancelled.');
      break;
    }
  }
  /* eslint-enable */
}

function clean_filename(filename) {
  return filename.replaceAll(/[:*?<>|]/gi, '');
}

function make_time_query_params(start_time_secs, end_time_secs, robot) {
  const from_timestamp = robot.time_sync.robot_timestamp_from_local_secs(start_time_secs);
  const to_timestamp = robot.time_sync.robot_timestamp_from_local_secs(end_time_secs);
  // Console.log(from_timestamp.toString(), to_timestamp.toString());
  const time_range = new data_acquisition_store_pb.TimeRangeQuery()
    .setFromTimestamp(from_timestamp)
    .setToTimestamp(to_timestamp);
  const query_params = new data_acquisition_store_pb.DataQueryParams().setTimeRange(time_range);
  return query_params;
}

async function make_time_query_params_from_group_name(group_name, data_store_client) {
  const action_id = new data_acquisition_pb.CaptureActionId().setGroupName(group_name);
  const action_ids = new data_acquisition_store_pb.ActionIdQuery().addActionIds(action_id);
  let query_params = new data_acquisition_store_pb.DataQueryParams().setActionIds(action_ids);
  let saved_capture_actions = [];
  try {
    saved_capture_actions = await data_store_client.list_capture_actions(query_params);
  } catch (e) {
    console.error(
      `[DATA ACQUISITION HELPERS] Failed to list the capture action ids for group_name ${group_name}: ${e}`,
    );
    return null;
  }

  let start_time = [null, null];
  let end_time = [null, null];
  for (const save_capture of saved_capture_actions) {
    const timestamp = save_capture.getTimestamp();
    const time_secs = timestamp.getSeconds() + timestamp.getNanos() / 1e9;

    if (time_secs === 0) continue;

    if (start_time[0] === null || time_secs < start_time[0]) {
      start_time = [time_secs, timestamp];
    }
    if (end_time[0] === null || time_secs > end_time[0]) {
      end_time = [time_secs, timestamp];
    }
  }

  if (start_time[0] === null && end_time[0] === null) {
    // eslint-disable-next-line
    console.error(`[DATA ACQUISITION HELPERS] Could not find a start/end time from the list of capture action ids: ${saved_capture_actions}`);
    return null;
  }

  console.assert(start_time[0] <= end_time[0]);

  start_time[1].setSeconds(start_time[1].getSeconds() - 3000);
  end_time[1].setSeconds(end_time[1].getSeconds() + 3000);

  // eslint-disable-next-line
  console.info(`[DATA ACQUISITION HELPERS] Downloading data with a start time of ${start_time[0]} seconds and end time of ${end_time[0]} seconds.`);

  const time_range = new data_acquisition_store_pb.TimeRangeQuery()
    .setFromTimestamp(start_time[1])
    .setToTimestamp(end_time[1]);
  query_params = new data_acquisition_store_pb.DataQueryParams().setTimeRange(time_range);
  return query_params;
}

function download_data_REST(query_params, hostname, token, destination_folder = './', additional_params = null) {
  const { mkdirSync, writeFileSync } = require('node:fs');
  const path = require('node:path');
  const fetch = require('node-fetch');

  function urlMaker(url, data = null) {
    let str = '';
    if (data) {
      for (const [key, value] of Object.entries(data)) {
        str += `${key}=${value}`;
      }
    }
    return `${url}${str === '' ? '' : `?${str}`}`;
  }

  try {
    const absolute_path = path.resolve(destination_folder);
    const folder = path.join(path.dirname(absolute_path), clean_filename(path.basename(absolute_path)), 'REST');
    mkdirSync(folder, { recursive: true });

    const get_params = additional_params || {};
    if ('time_range' in query_params) {
      const timeGetFrom = query_params.getTimeRange().getFromTimestamp();
      const timeGetTo = query_params.getTimeRange().getToTimestamp();
      get_params.from_nsec = timeGetFrom.getSeconds() * 1e9 + timeGetFrom.getNanos();
      get_params.to_nsec = timeGetTo.getSeconds() * 1e9 + timeGetTo.getNanos();
    }

    // Const chunk_size = 10 * 1024 ** 2;

    const options = {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    };

    fetch(urlMaker(`https://${hostname}/v1/data-buffer/daq-data/`, get_params), options)
      .then(res => res.buffer())
      .then(res => {
        console.log(`[DATA ACQUISITION HELPERS] Download request HTTPS status code: ${res.status}`);
        if (res.status === 204) {
          const timeGetFrom = query_params.getTimeRange().getFromTimestamp();
          const timeGetTo = query_params.getTimeRange().getToTimestamp();
          console.log(
            `[DATA ACQUISITION HELPERS] No content available for the specified download time range (in seconds): [${
              (timeGetFrom.getSeconds() * 1e9 + timeGetFrom.getNanos()) / 1e9
            }, ${(timeGetTo.getSeconds() * 1e9 + timeGetTo.getNanos()) / 1e9}]`,
          );
          return false;
        }

        let download_file = path.join(folder, 'download.zip');
        const content = res.headers.get('Content-Disposition');
        let start_ind = -1;
        if (content.length < 2) {
          console.log('[DATA ACQUISITION HELPERS] ERROR: Content-Disposition is not set correctly');
          return false;
        } else {
          start_ind = content.indexOf('"');
        }

        if (start_ind === -1) {
          console.error('[DATA ACQUISITION HELPERS] ERROR: Content-Disposition does not have a " character');
          return false;
        } else {
          start_ind += 1;
          download_file = path.join(folder, clean_filename(content.slice(start_ind, -1)));
        }

        return writeFileSync(download_file, res);
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  } catch (e) {
    console.log(e);
    return false;
  }
  return true;
}

module.exports = {
  issue_acquire_data_request,
  acquire_and_process_request,
  cancel_acquisition_request,
  clean_filename,
  make_time_query_params,
  make_time_query_params_from_group_name,
  download_data_REST,
};

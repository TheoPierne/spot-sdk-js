'use strict';

const { now_timestamp } = require('../bosdyn-core/util');
const header_pb = require('../bosdyn/api/header_pb');

/**
 * Sets header fields common to all bosdyn.api requests.
 * @class AddRequestHeader
 */
class AddRequestHeader {
  /**
   * Constructor, takes function to access the client name to insert into request headers.
   * @param {Function} client_name_func Function to get client's name.
   */
  constructor(client_name_func) {
    this.get_client_name = client_name_func;
  }

  _create_header() {
    const nowTimestamp = now_timestamp();
    const header = new header_pb.RequestHeader()
      .setRequestTimestamp(nowTimestamp)
      .setClientName(this.get_client_name());
    return header;
  }

  /**
   * Mutate request such that its header contains a client name and a timestamp.
   * Headers are not required for third party proto requests/responses.
   *
   * @param {*} request Request to apply the header.
   * @returns {void}
   */
  mutate(request) {
    const header = this._create_header();
    try {
      request.setHeader(header);
    } catch (e) {
      // Pass
    }
  }
}

module.exports = {
  AddRequestHeader,
};

'use strict';

const { RequestHeader } = require('../bosdyn/api/header_pb');
const { nowTimestamp } = require('../bosdyn-core/util');

/**
 * Sets header fields common to all bosdyn.api requests.
 */
class AddRequestHeader {
  /**
   * @param {Function} clientNameFunc Function to get client's name.
   */
  constructor(clientNameFunc) {
    this.getClientName = clientNameFunc;
  }

  /**
   * Build a protobuf RequestHeader
   * @returns {RequestHeader}
   * @private
   */
  _creatHeader() {
    const nowTimestampProto = nowTimestamp();
    const header = new RequestHeader()
      .setRequestTimestamp(nowTimestampProto)
      .setClientName(this.getClientName());
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
    const header = this._creatHeader();
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

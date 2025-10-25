'use strict';

const networkPb = require('../../bosdyn/api/spot_cam/network_pb');
const { NetworkServiceClient } = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const { BaseClient, handleCommonHeaderErrors } = require('../common');

/**
 * A client calling Spot CAM Network services such as ICE Candidates, SSL certs / Keys etc.
 *
 * Note: Interactive Connectivity Establishment (ICE) is a protocol which lets two devices use
 * an intermediary to exchange offers and answers even if the two devices are separated
 * by Network Address Translation (NAT).
 * @extends {BaseClient<NetworkServiceClient>}
 */
class NetworkClient extends BaseClient {
  static defaultServiceName = 'spot-cam-network';
  static serviceType = 'bosdyn.api.spot_cam.NetworkService';

  constructor() {
    super(NetworkServiceClient);
  }

  /**
   * Get ICE configuration from Spot CAM
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<networkPb.ICEServer[]>}
   */
  getICEConfiguration(args) {
    const request = new networkPb.GetICEConfigurationRequest();
    return this.call(
      this._stub.getICEConfiguration,
      request,
      this._iceServersFromResponse,
      _iceNetworkErrorFromResponse,
      false,
      args,
    );
  }

  /**
   * Set ICE configuration on Spot CAM. This overrides all existing configured servers
   * @param {networkPb.ICEServer[]} iceServers New server list
   * @param {Object} [args] Extra arguments for controlling RPC details
   * @returns {Promise<networkPb.SetICEConfigurationResponse>}
   */
  setICEConfiguration(iceServers, args) {
    const request = new networkPb.SetICEConfigurationRequest().setServersList(iceServers);
    return this.call(this._stub.setICEConfiguration, request, null, _iceNetworkErrorFromResponse, false, args);
  }

  _iceServersFromResponse(response) {
    return response.getServersList();
  }
}

const _iceNetworkErrorFromResponse = handleCommonHeaderErrors(() => null);

module.exports = {
  NetworkClient,
};

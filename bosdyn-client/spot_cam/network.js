'use strict';

const network_pb = require('../../bosdyn/api/spot_cam/network_pb');
const service_grpc_pb = require('../../bosdyn/api/spot_cam/service_grpc_pb');
const { BaseClient } = require('../common');

class NetworkClient extends BaseClient {
  static default_service_name = 'spot-cam-network';
  static service_type = 'bosdyn.api.spot_cam.NetworkService';

  constructor() {
    super(service_grpc_pb.NetworkServiceClient);
  }

  get_ice_configuration(args) {
    const request = new network_pb.GetICEConfigurationRequest();
    return this.call(
      this._stub.getICEConfiguration,
      request,
      this._ice_servers_from_response,
      this._ice_network_error_from_response,
      args,
    );
  }

  get_ice_configuration_async(args) {
    const request = new network_pb.GetICEConfigurationRequest();
    return this.call_async(
      this._stub.getICEConfiguration,
      request,
      this._ice_servers_from_response,
      this._ice_network_error_from_response,
      args,
    );
  }

  set_ice_configuration(ice_servers, args) {
    const request = this._set_ice_configuration_request(ice_servers);
    return this.call(this._stub.setICEConfiguration, request, null, this._ice_network_error_from_response, args);
  }

  set_ice_configuration_async(ice_servers, args) {
    const request = this._set_ice_configuration_request(ice_servers);
    return this.call_async(this._stub.setICEConfiguration, request, null, this._ice_network_error_from_response, args);
  }

  _set_ice_configuration_request(ice_servers) {
    return new network_pb.SetICEConfigurationRequest().addServers(ice_servers);
  }

  _ice_servers_from_response(response) {
    return response.getServersList();
  }

  /* eslint-disable no-unused-vars */
  _ice_network_error_from_response(response) {
    return null;
  }
  /* eslint-enable no-unused-vars */
}

module.exports = {
  NetworkClient,
};

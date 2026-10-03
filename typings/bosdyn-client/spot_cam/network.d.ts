/**
 * A client calling Spot CAM Network services such as ICE Candidates, SSL certs / Keys etc.
 *
 * Note: Interactive Connectivity Establishment (ICE) is a protocol which lets two devices use
 * an intermediary to exchange offers and answers even if the two devices are separated
 * by Network Address Translation (NAT).
 * @extends {BaseClient<NetworkServiceClient>}
 */
export class NetworkClient extends BaseClient<NetworkServiceClient> {
    static defaultServiceName: string;
    static serviceType: string;
    constructor();
    /**
     * Get ICE configuration from Spot CAM
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<networkPb.ICEServer[]>}
     */
    getICEConfiguration(args?: Object): Promise<networkPb.ICEServer[]>;
    /**
     * Set ICE configuration on Spot CAM. This overrides all existing configured servers
     * @param {networkPb.ICEServer[]} iceServers New server list
     * @param {Object} [args] Extra arguments for controlling RPC details
     * @returns {Promise<networkPb.SetICEConfigurationResponse>}
     */
    setICEConfiguration(iceServers: networkPb.ICEServer[], args?: Object): Promise<networkPb.SetICEConfigurationResponse>;
    _iceServersFromResponse(response: any): any;
}
import { NetworkServiceClient } from "../../../src/bosdyn/api/spot_cam/service_grpc_pb";
import { BaseClient } from "../common";
import networkPb = require("../../../src/bosdyn/api/spot_cam/network_pb");

export type DirectoryClient = import("./directory").DirectoryClient;
export type FaultClient = import("./fault").FaultClient;
export type RobotStateClient = import("./robot_state").RobotStateClient;
export type InvalidCustomParamValueError = import("./service_customization_helpers").InvalidCustomParamValueError;
/** Config data required to run a area callback service. */
export class AreaCallbackServiceConfig {
    /**
     * @param {string} serviceName The name of the service, for registering with directory.
     * @param {string[]} [requiredLeaseResources=[]] List of required lease resources.
     * @param {boolean} [logBeginCallbackData=false] Log the data field of the begin callback request.
     * @param {?AreaCallbackInformation} [areaCallbackInformation=null] Information describing the area callback.
     */
    constructor(serviceName: string, requiredLeaseResources?: string[], logBeginCallbackData?: boolean, areaCallbackInformation?: AreaCallbackInformation | null);
    serviceName: string;
    requiredLeaseResources: string[];
    logBeginCallbackData: boolean;
    areaCallbackInformation: AreaCallbackInformation;
    /**
     * Parse params and validate they agree with the spec stored in areaCallbackInformation.
     * @param {DictParam} params The parameters being validated.
     * @returns {Object} The values of the parameters.
     * @throws {InvalidCustomParamValueError} The parameters do not agree with the spec.
     */
    parseParams(params: DictParam): Object;
}
/**
 * Helper to raise service faults when other services are unavailable: every 0.5 second, the service is faulted when
 * one of the prerequisite services is not registered or is faulted, and its fault is cleared when they are all back.
 *
 * Python runs this endless loop in a daemon thread: here its waits do not keep the process alive, and a signal can
 * stop it (not in Python).
 * @param {FaultClient} faultClient
 * @param {RobotStateClient} robotStateClient
 * @param {DirectoryClient} directoryClient
 * @param {string} serviceName The service to fault, and the name of its fault.
 * @param {string[]} prereqServices The services it needs.
 * @param {Object} [options]
 * @param {?AbortSignal} [options.signal=null] Stops the loop.
 * @returns {Promise<void>} Resolves when the signal is aborted, rejects with an error which is not an error of the
 * SDK (the errors of the SDK are logged).
 */
export function handleServiceFaults(faultClient: FaultClient, robotStateClient: RobotStateClient, directoryClient: DirectoryClient, serviceName: string, prereqServices: string[], { signal }?: {
    signal?: AbortSignal | null | undefined;
}): Promise<void>;
import { AreaCallbackInformation } from "../../src/bosdyn/api/graph_nav/area_callback_pb";
import { DictParam } from "../../src/bosdyn/api/service_customization_pb";

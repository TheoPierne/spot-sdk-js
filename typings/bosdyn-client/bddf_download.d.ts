export type Robot = import("./robot").Robot;
export const DEFAULT_OUTPUT: "./download.bddf";
/**
 * Download data from robot in bddf format. Like Python, the certificate of the robot is not checked.
 * @param {Robot} robot API robot object, authenticated.
 * @param {string} hostname Hostname/ip-address of robot.
 * @param {?number} [startNsec=null] Start time of log.
 * @param {?number} [endNsec=null] End time of log.
 * @param {?string} [timespanSpec=null] If startNsec and endNsec are null, string representing the timespan to
 * download.
 * @param {?string} [outputFilename=null] Name of the file to write, by default the name given by the robot.
 * @param {boolean} [robotTime=false] If true, timespan is in robot clock, if false, in host clock.
 * @param {?string} [channel=null] If set, limit data to download to a specific channel.
 * @param {?string} [messageType=null] If set, limit data by specified message-type.
 * @param {?string} [grpcService=null] If set, limit GRPC log data by name of service.
 * @param {boolean} [showProgress=false] Print a dot for each chunk of the download.
 * @returns {Promise<?string>} Output filename, or null on error.
 * @throws {NotEstablishedError} Time sync with the robot could not be established.
 * @throws {Error} The robot answered with an HTTP error (e.g. 401 for a bad token), or the download failed.
 */
export function downloadData(robot: Robot, hostname: string, startNsec?: number | null, endNsec?: number | null, timespanSpec?: string | null, outputFilename?: string | null, robotTime?: boolean, channel?: string | null, messageType?: string | null, grpcService?: string | null, showProgress?: boolean): Promise<string | null>;
/**
 * Command-line interface.
 * @returns {Promise<number>} The exit code.
 */
export function main(): Promise<number>;

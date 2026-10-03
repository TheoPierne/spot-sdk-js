export type RobotTimeConverter = import("../../bosdyn-core/util").RobotTimeConverter;
export class NMEAParser {
    /**
     * The amount of time (in seconds) to wait before logging another decode error.
     * @type {number}
     */
    static LOG_THROTTLE_TIME: number;
    constructor(logger?: Console);
    data: string;
    /**
     * The NMEA messages with a timestamp, not grouped yet: [packet, sentence, client timestamp in seconds].
     * @type {Array<[Object, string, number]>}
     */
    fullLines: Array<[Object, string, number]>;
    logger: Console;
    groupingTimeout: number;
    lastFailedReadLogTime: number | null;
    lastGGA: string | null;
    /**
     * Convert a NMEA message group with the same UTC timestamp to a GpsDataPoint.
     * @param {Array<[Object, string, number]>} nmeaMessages The messages: [packet, sentence, client timestamp].
     * @param {?RobotTimeConverter} timeConverter Converter to robot time, null if the clocks are synchronized.
     * @returns {gpsPb.GpsDataPoint}
     */
    nmeaMessageGroupToGpsDataPoint(nmeaMessages: Array<[Object, string, number]>, timeConverter: RobotTimeConverter | null): gpsPb.GpsDataPoint;
    /**
     * Parse NMEA data, and return the GPS data points of the message groups it completes.
     * @param {string} newData New NMEA data: lines, possibly with an incomplete last line kept for the next call.
     * @param {?RobotTimeConverter} timeConverter Converter to robot time, null if the clocks are synchronized.
     * @param {boolean} [check=true] Reject the sentences without checksum. A wrong checksum is always rejected.
     * @returns {gpsPb.GpsDataPoint[]}
     */
    parse(newData: string, timeConverter: RobotTimeConverter | null, check?: boolean): gpsPb.GpsDataPoint[];
    /**
     * @returns {?string} The last GGA sentence of the data points returned by parse().
     */
    getLatestGga(): string | null;
    getLastGGA(): string | null;
}
import gpsPb = require("../../../src/bosdyn/api/gps/gps_pb");

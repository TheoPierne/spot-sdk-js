/**
 * Client for the Orbit web API
 */
export class OrbitClient {
    /**
     * The TLS options of the agent, like verify and cert in Python.
     * @param {boolean|string} verify
     * @param {?(string|string[]|{ cert: string|Buffer, key: string|Buffer })} cert
     * @returns {import('node:https').AgentOptions}
     * @private
     */
    private static _tlsOptions;
    /**
     * @param {string} hostname the IP address associated with the instance
     * @param {boolean|string} verify controls whether we verify the server’s TLS certificate, or the path of a CA
     * bundle to verify it with, like Python.
     * Note that verify=false makes your application vulnerable to man-in-the-middle (MitM) attacks
     * Defaults to true
     * @param {?(string|string[]|{ cert: string|Buffer, key: string|Buffer })} cert a local cert to use as client side
     * certificate, like Python: the path of a .pem file with the certificate and its key, or the paths of the
     * certificate and of the key. Or an object with their contents.
     * Note that the private key to your local certificate must be unencrypted.
     * Defaults to null.
     */
    constructor(hostname: string, verify?: boolean | string, cert?: (string | string[] | {
        cert: string | Buffer;
        key: string | Buffer;
    }) | null);
    /**
     * The hostname of the instance
     * @type {string}
     * @private
     */
    private _hostname;
    _session: axios.AxiosInstance;
    /**
     * The cookies of the instance, sent back like the cookies of a requests.Session.
     * @type {Map<string, string>}
     * @private
     */
    private _cookies;
    _isAuthenticated: boolean;
    /**
     * The initialization of the session, that the requests wait for (it was not awaited: its errors were lost, and
     * a request could go without the CSRF token).
     * @type {Promise<void>}
     * @private
     */
    private _ready;
    /**
     * Keep the cookies set by a response.
     * @param {axios.AxiosResponse} response
     * @private
     */
    private _storeCookies;
    _initSession(): Promise<void>;
    /**
     * Authorizes the client using the provided API token obtained from the instance.
     * Must call before using other client functions.
     * @param {string} apiToken The API token obtained from the instance
     * @returns {Promise<axios.AxiosResponse>}
     */
    authenticateWithApiToken(apiToken: string): Promise<axios.AxiosResponse>;
    /**
     * Base function for getting a resource in /api/v0/
     * @param {string} path the path appended to /api/v0/
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getResource(path: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Base function for getting a resource in data acquisition.
     * @param {string} path the path to the resource
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getResourceFromDataAcquisition(path: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Base function for posting a resource in /api/v0/
     * @param {string} path the path appended to /api/v0/
     * @param {Object} data data to post
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the post request
     * @returns {Promise<axios.AxiosResponse>}
     */
    postResource(path: string, data: Object, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Base function for patching a resource in /api/v0/
     * @param {string} path the path appended to /api/v0/
     * @param {object} data data to post
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the post request
     * @returns {Promise<axios.AxiosResponse>}
     */
    patchResource(path: string, data: object, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Base function for deleting a resource in /api/v0/
     * @param {string} path the path appended to /api/v0/
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the delete request
     * @returns {Promise<axios.AxiosResponse>}
     */
    deleteResource(path: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Retrieves version info.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getVersion(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Returns the current system time.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getSystemTime(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Returns robots on the specified instance.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getRobots(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Returns a robot on given a hostname of a specific robot.
     * @param {string} hostname the IP address associated with the desired robot on the instance
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getRobotByHostname(hostname: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Returns site walks on the specified instance
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getSiteWalks(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a site walk uuid, returns a site walk on the specified instance
     * @param {string} uuid the ID associated with the site walk
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getSiteWalkById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Returns SiteWalk as a zip archive which represents a collection of graph and mission data, like Python.
     * @param {string} uuid the ID associated with the site walk
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>} The response, whose data is the bytes of the archive.
     */
    getSiteWalkArchiveById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Returns site elements on the specified instance
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getSiteElements(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a site element uuid, returns a site element on the specified instance
     * @param {string} uuid the ID associated with the site element
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getSiteElementById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Returns site docks on the specified instance.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getSiteDocks(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a SiteDock uuid, returns a SiteDock on the specified instance.
     * @param {string} uuid The ID associated with the SiteDock
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getSiteDockById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Returns calendar events on the specified instance.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getCalendar(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a dictionary of query params, returns run events.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getRunEvents(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     *  Given a runEventUuid, returns a run event.
     * @param {string} uuid The ID associated with the run event.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getRunEventById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a dictionary of query params, returns run captures.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getRunCaptures(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a runCaptureUuid, returns a run capture.
     * @param {string} uuid The ID associated with the run capture
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getRunCaptureById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a dictionary of query params, returns runs.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getRuns(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a runUuid, returns a run.
     * @param {string} uuid The ID associated with the run
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getRunById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Retrieves the log of a run.
     * @param {string} uuid The ID of the run.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getRunLog(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a runUuid, returns run archives.
     * @param {string} uuid The ID associated with the run
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getRunArchivesById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a data capture url, returns a decoded image.
     * @param {string} url The url associated with the data capture in the form of https://hostname + runCapture["dataUrl"].
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getImage(url: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a data capture url, returns an image response, like Python (the status is not checked).
     * @param {string} url The url associated with the data capture in the form of https://hostname +
     * runCapture["dataUrl"].
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>} The response, whose data is a stream.
     */
    getImageResponse(url: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Returns webhook on the specified instance.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getWebhook(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a uuid, returns a specific webhook instance.
     * @param {string} uuid The ID associated with the webhook
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getWebhookById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a robot nickname, returns information about the robot.
     * @param {string} robotNickname The nickname of the robot
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getRobotInfo(robotNickname: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a dictionary of query params, returns anomalies.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getAnomalies(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Retrieves a *.zip containing an Orbit backup.
     * @param {string} taskId The task ID returned from the postBackupTask method.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getBackup(taskId: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Retrieves the status of a backup task started by the postBackupTask method.
     * @param {string} taskId The task ID returned from the postBackupTask method.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getBackupTask(taskId: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Retrieves session statistics.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getRunStatistics(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Retrieves session summary.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    getRunStatisticsSessionSummary(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a SiteWalk uuid, it exports the walksPb.Walk equivalent.
     * @param {string} siteWalkUuid the ID associated with the SiteWalk.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    postExportAsWalk(siteWalkUuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a walk data, imports it to the specified instance.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    postImportFromWalk(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Create a SiteElement. It also updates a pre-existing SiteElement using the associated UUID.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    postSiteElement(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Create a SiteWalk. It also updates a pre-existing SiteWalk using the associated UUID.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    postSiteWalk(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Create a SiteElement. It also updates a pre-existing SiteDock using the associated UUID.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    postSiteDock(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Add a robot to the specified instance.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    postRobot(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * This function serves two purposes. It creates a new calendar event on using the following arguments
     * when Event ID is not specified. When the Event ID associated with a pre-existing calendar event is specified,
     * the function overwrites the attributes of the pre-existing calendar event.
     * @param {?string} nickname The name associated with the robot.
     * @param {?number} timeMs The first kickoff time in terms of milliseconds since epoch.
     * @param {?number} repeatMs The delay time in milliseconds for repeating calendar events.
     * @param {?string} missionId The UUID associated with the mission (also known as SiteWalk).
     * @param {?boolean} forceAcquireEstop Instructs the system to force acquire the estop when the mission kicks off.
     * @param {?boolean} requireDocked Determines whether the event will require the robot to be docked to start.
     * @param {?string} scheduleName The desired name of the calendar event.
     * @param {?Array<{startMs: number, endMs: number}>} blackoutTimes A specification for a time period over the course
     * of a week when a schedule should not run
     * specified as array of object defined as {startMs: <number>, endMs: <number>}
     * with startMs (inclusive) being the millisecond offset from the beginning of the week (Sunday) when this blackout
     * period starts
     * and endMs (exclusive) being the millisecond offset from beginning of the week(Sunday) when this blackout period
     * ends.
     * @param {?string} disableReason (optional) A reason for disabling the calendar event.
     * @param {?string} eventId The auto-generated ID for a calendar event that is already posted on the instance.
     * This is only useful when editing a pre-existing calendar event.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    postCalendarEvent(nickname: (string | null) | undefined, timeMs: (number | null) | undefined, repeatMs: (number | null) | undefined, missionId: (string | null) | undefined, forceAcquireEstop: (boolean | null) | undefined, requireDocked: (boolean | null) | undefined, scheduleName: (string | null) | undefined, blackoutTimes: (Array<{
        startMs: number;
        endMs: number;
    }> | null) | undefined, disableReason: (string | null) | undefined, eventId: (string | null) | undefined, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Disable all scheduled missions.
     * @param {?string} disableReason Reason for disabling all scheduled missions.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    postCalendarEventsDisableAll(disableReason: (string | null) | undefined, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Disable specific scheduled mission by event ID.
     * @param {string} eventId Event Id associated with a mission to disable.
     * @param {string} disableReason Reason for disabling a scheduled mission.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    postCalendarEventDisableById(eventId: string, disableReason: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Enable all scheduled missions.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    postCalendarEventsEnableAll(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Enable specific scheduled mission by event ID.
     * @param {string} eventId Event Id associated with a mission to enable.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    postCalendarEventEnableById(eventId: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Create a webhook instance.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    postWebhook(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Update an existing webhook instance.
     * @param {string} uuid The ID associated with the desired webhook instance.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    postWebhookById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Generate a mission to send the robot back to the dock.
     * @param {string} robotNickname The nickname of the robot.
     * @param {string} siteDockUuid The uuid of the dock to send robot to.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    postReturnToDockMission(robotNickname: string, siteDockUuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Dispatch the robot to a mission given a mission uuid.
     * @param {string} robotNickname The nickname of the robot.
     * @param {string} driverId The current driver ID of the mission.
     * @param {string} missionUuid DEPRECATED. Use 'walk' instead.
     * @param {boolean} deleteMission DEPRECATED and no longer supported. Instead, use a temporary walk file that will
     * not be reused.
     * @param {boolean} forceAcquireEstop Whether to force acquire E-stop from the previous client.
     * @param {boolean} skipInitialization Whether to skip initialization when starting the return to dock mission.
     * @param {boolean} walk The walk to dispatch the robot to. If this is set, missionUuid should be null.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    postDispatchMissionToRobot(robotNickname: string, driverId: string, missionUuid: string | undefined, deleteMission: boolean | undefined, forceAcquireEstop: boolean | undefined, skipInitialization: boolean | undefined, walk: boolean | undefined, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Starts creating a backup zip file.
     * @param {boolean} includeMissions Specifies whether to include missions and maps in the backup.
     * @param {boolean} includeCaptures Specifies whether to include all inspection data captures in the backup.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    postBackupTask(includeMissions: boolean, includeCaptures: boolean, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Bulk close Anomalies by Element ID.
     * @param {string[]} elementIds The element ids of each anomaly to be closed.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    patchBulkCloseAnomalies(elementIds: string[], config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Patch an Anomaly by uuid.
     * @param {string} anomalyUuid The uuid of the anomaly to patch fields in.
     * @param {object} patchedFields An object of fields and new values to change in the specified anomaly.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    patchAnomalyById(anomalyUuid: string, patchedFields: object, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a SiteWalk uuid, deletes the SiteWalk associated with the uuid on the specified instance.
     * @param {string} uuid The ID associated with the desired SiteWalk
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    deleteSiteWalk(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Given a robot hostname, deletes the robot associated with the hostname on the specified instance
     * @param {string} robotHostname The IP address associated with the robot.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    deleteRobot(robotHostname: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Delete the specified calendar event on the specified instance.
     * @param {string} eventId The ID associated with the calendar event.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    deleteCalendarEvent(eventId: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Delete the specified webhook instance on the specified instance.
     * @param {string} uuid The ID associated with the desired webhook.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    deleteWebhook(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
    /**
     * Deletes the backup zip file from the Orbit instance.
     * @param {string} taskId The task id associated with the backup.
     * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
     * @returns {Promise<axios.AxiosResponse>}
     */
    deleteBackup(taskId: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>;
}
/**
 * Creates an orbit client object.
 * @param {{ hostname: string, verify: ?(boolean|string), cert: ?(string|string[]), key: ?string }} options The
 * options from argparse: verify is 'True' or 'False' (in any case, like Python 5.2.0), or the path of a CA bundle,
 * cert the path of a .pem file with the certificate and its key, or the paths of both. With key, cert and key are their
 * contents.
 * @returns {Promise<OrbitClient>}
 */
export function createClient(options: {
    hostname: string;
    verify: (boolean | string) | null;
    cert: (string | string[]) | null;
    key: string | null;
}): Promise<OrbitClient>;
import type * as axios from 'axios';

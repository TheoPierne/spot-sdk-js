'use strict';

const https = require('node:https');
const axios = require('axios');

const { UnauthenticatedClientError } = require('./exceptions');
const { getApiToken } = require('./utils');
const { emitWarning } = require('node:process');

const DEFAULT_HEADERS = { Accept: 'application/json' };
const OCTET_HEADER = { 'Content-type': 'application/octet-stream', Accept: 'application/octet-stream' };

/**
 * Client for the Orbit web API
 */
class OrbitClient {
  /**
   * @param {string} hostname the IP address associated with the instance
   * @param {boolean} verify controls whether we verify the server’s TLS certificate
   * Note that verify=false makes your application vulnerable to man-in-the-middle (MitM) attacks
   * Defaults to true
   * @param {{ cert: string, key: string }} cert a local cert to use as client side certificate
   * Note that the private key to your local certificate must be unencrypted because Requests does
   * not support using encrypted keys.
   * Defaults to null.
   */
  constructor(hostname, verify = true, { key = '', cert = '' } = cert) {
    /**
     * The hostname of the instance
     * @type {string}
     * @private
     */
    this._hostname = hostname;

    this._session = axios.create({
      baseURL: `https://${this._hostname}`,
      httpsAgent: new https.Agent({
        rejectUnauthorized: verify,
        cert: cert,
        key: key,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    this._isAuthenticated = false;

    this._initSession();
  }

  async _initSession() {
    try {
      // Perform an initial GET request to initialize session and cookies
      const response = await this._session.get('/');

      // Set default headers for future requests
      this._session.defaults.headers.common = { ...this._session.defaults.headers.common, ...DEFAULT_HEADERS };

      // Set the CSRF token in the headers (assuming it's in cookies)
      const csrfToken = response.headers['set-cookie'].find(cookie => cookie.includes('x-csrf-token'));
      if (csrfToken) {
        const tokenValue = csrfToken.split(';')[0].split('=')[1];
        this._session.defaults.headers.common['x-csrf-token'] = tokenValue;
      }

      console.log('Session initialized successfully.');
    } catch (error) {
      console.error('Error initializing session:', error);
    }
  }

  /**
   * Authorizes the client using the provided API token obtained from the instance.
   * Must call before using other client functions.
   * @param {string} apiToken The API token obtained from the instance
   * @returns {Promise<axios.AxiosResponse>}
   */
  async authenticateWithApiToken(apiToken) {
    if (!apiToken) {
      apiToken = await getApiToken();
    }

    this._session.defaults.headers.common = {
      ...this._session.defaults.headers.common,
      Authorization: `Bearer ${apiToken}`,
    };

    const authenticateResponse = await this._session.get('/api/v0/api_token/authenticate');

    if (authenticateResponse.statusText.toLowerCase() === 'ok') {
      this._isAuthenticated = true;
    } else {
      console.error(
        `Client: Login failed: ${authenticateResponse.data} Please, obtain a valid API token from the instance!`,
      );
      delete this._session.defaults.headers.common.Authorization;
    }

    return authenticateResponse;
  }

  /**
   * Base function for getting a resource in /api/v0/
   * @param {string} path the path appended to /api/v0/
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getResource(path, config) {
    if (!this._isAuthenticated) {
      throw new UnauthenticatedClientError();
    }
    return this._session.get(`/api/v0/${path}`, config);
  }

  /**
   * Base function for posting a resource in /api/v0/
   * @param {string} path the path appended to /api/v0/
   * @param {Object} data data to post
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the post request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postResource(path, data, config) {
    if (!this._isAuthenticated && path !== 'login') {
      throw new UnauthenticatedClientError();
    }
    return this._session.post(`/api/v0/${path}`, data, config);
  }
  
  /**
   * Base function for patching a resource in /api/v0/
   * @param {string} path the path appended to /api/v0/
   * @param {object} data data to post
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the post request
   * @returns {Promise<axios.AxiosResponse>}
   */
  patchResource(path, data, config) {
    if (!this._isAuthenticated && path !== 'login') {
      throw new UnauthenticatedClientError();
    }
    return this._session.patch(`/api/v0/${path}`, data, config);
  }

  /**
   * Base function for deleting a resource in /api/v0/
   * @param {string} path the path appended to /api/v0/
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the delete request
   * @returns {Promise<axios.AxiosResponse>}
   */
  deleteResource(path, config) {
    if (!this._isAuthenticated) {
      throw new UnauthenticatedClientError();
    }
    return this._session.delete(`/api/v0/${path}`, config);
  }

  /**
   * Retrieves version info.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getVersion(config) {
    return this.getResource('version', config);
  }

  /**
   * Returns the current system time.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getSystemTime(config) {
    return this.getResource('settings/system-time', config);
  }

  /**
   * Returns robots on the specified instance.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getRobots(config) {
    return this.getResource('robots', config);
  }

  /**
   * Returns a robot on given a hostname of a specific robot.
   * @param {string} hostname the IP address associated with the desired robot on the instance
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getRobotByHostname(hostname, config) {
    return this.getResource(`robots/${hostname}`, config);
  }

  /**
   * Returns site walks on the specified instance
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getSiteWalks(config) {
    return this.getResource('site_walks', config);
  }

  /**
   * Given a site walk uuid, returns a site walk on the specified instance
   * @param {string} uuid the ID associated with the site walk
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getSiteWalkById(uuid, config) {
    return this.getResource(`site_walks/${uuid}`, config);
  }

  /**
   * Returns site elements on the specified instance
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getSiteElements(config) {
    return this.getResource('site_elements', config);
  }

  /**
   * Given a site element uuid, returns a site element on the specified instance
   * @param {string} uuid the ID associated with the site element
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getSiteElementById(uuid, config) {
    return this.getResource(`site_elements/${uuid}`, config);
  }

  /**
   * Returns site docks on the specified instance.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getSiteDocks(config) {
    return this.getResource('site_docks', config);
  }

  /**
   * Given a SiteDock uuid, returns a SiteDock on the specified instance.
   * @param {string} uuid The ID associated with the SiteDock
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getSiteDockById(uuid, config) {
    return this.getResource(`site_docks/${uuid}`, config);
  }

  /**
   * Returns calendar events on the specified instance.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getCalendar(config) {
    return this.getResource('calendar/schedule', config);
  }

  /**
   * Given a dictionary of query params, returns run events.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getRunEvents(config) {
    return this.getResource('run_events', config);
  }

  /**
   *  Given a runEventUuid, returns a run event.
   * @param {string} uuid The ID associated with the run event.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getRunEventById(uuid, config) {
    return this.getResource(`run_events/${uuid}`, config);
  }

  /**
   * Given a dictionary of query params, returns run captures.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getRunCaptures(config) {
    return this.getResource('run_captures', config);
  }

  /**
   * Given a runCaptureUuid, returns a run capture.
   * @param {string} uuid The ID associated with the run capture
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getRunCaptureById(uuid, config) {
    return this.getResource(`run_captures/${uuid}`, config);
  }

  /**
   * Given a dictionary of query params, returns runs.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getRuns(config) {
    return this.getResource('runs', config);
  }

  /**
   * Given a runUuid, returns a run.
   * @param {string} uuid The ID associated with the run
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getRunById(uuid, config) {
    return this.getResource(`runs/${uuid}`, config);
  }

  /**
   * Retrieves the log of a run.
   * @param {string} uuid The ID of the run.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getRunLog(uuid, config) {
    return this.getResource(`runs/${uuid}/log`, config);
  }

  /**
   * Given a runUuid, returns run archives.
   * @param {string} uuid The ID associated with the run
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getRunArchivesById(uuid, config) {
    return this.getResource(`run_archives/${uuid}`, config);
  }

  /**
   * Given a data capture url, returns a decoded image.
   * @param {string} url The url associated with the data capture in the form of https://hostname + runCapture["dataUrl"].
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  async getImage(url, config) {
    if (!this._isAuthenticated) {
      throw new UnauthenticatedClientError();
    }

    const response = await this._session.get(url, { ...config, responseType: 'stream' });
    return response.data;
  }

  /**
   * Returns webhook on the specified instance.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getWebhook(config) {
    return this.getResource('webhooks', config);
  }

  /**
   * Given a uuid, returns a specific webhook instance.
   * @param {string} uuid The ID associated with the webhook
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getWebhookById(uuid, config) {
    return this.getResource(`webhooks/${uuid}`, config);
  }
  
  /**
   * Given a robot nickname, returns information about the robot.
   * @param {string} robotNickname The nickname of the robot
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getRobotInfo(robotNickname, config) {
    return this.getResource(`robot-session/${robotNickname}/session`, config);
  }
  
  /**
   * Given a dictionary of query params, returns anomalies.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getAnomalies(config) {
    return this.getResource('anomalies', config);
  }
  
  /**
   * Retrieves a *.zip containing an Orbit backup.
   * @param {string} taskId The task ID returned from the postBackupTask method.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getBackup(taskId, config) {
    return this.getResource(`backups/${taskId}`, { ...config, headers: { ...OCTET_HEADER } });
  }
  
  /**
   * Retrieves the status of a backup task started by the postBackupTask method.
   * @param {string} taskId The task ID returned from the postBackupTask method.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getBackupTask(taskId, config) {
    return this.getResource(`backup_tasks/${taskId}`, config);
  }
  
  /**
   * Retrieves session statistics.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getRunStatistics(config) {
    return this.getResource('run_statistics/sessions', config);
  }
  
  /**
   * Retrieves session summary.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  getRunStatisticsSessionSummary(config) {
    return this.getResource('run_statistics/sessions_summary', config);
  }
  
  /**
   * Given a SiteWalk uuid, it exports the walksPb.Walk equivalent.
   * @param {string} siteWalkUuid the ID associated with the SiteWalk.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postExportAsWalk(siteWalkUuid, config) {
    return this.postResource('site_walks/export_as_walk', { siteWalkUuid }, config);
  }
  
  /**
   * Given a walk data, imports it to the specified instance.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postImportFromWalk(config) {
    return this.postResource('site_walks/import_from_walk', undefined, config);
  }
  
  /**
   * Create a SiteElement. It also updates a pre-existing SiteElement using the associated UUID.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postSiteElement(config) {
    return this.postResource('site_elements', undefined, config);
  }
  
  /**
   * Create a SiteWalk. It also updates a pre-existing SiteWalk using the associated UUID.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postSiteWalk(config) {
    return this.postResource('site_walks', undefined, config);
  }
  
  /**
   * Create a SiteElement. It also updates a pre-existing SiteDock using the associated UUID.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postSiteDock(config) {
    return this.postResource('site_docks', undefined, config);
  }
  
  /**
   * Add a robot to the specified instance.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postRobot(config) {
    return this.postResource('robots', undefined, config);
  }
  
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
   * @param {?Array<{startMs: number, endMs: number}>} blackoutTimes A specification for a time period over the course of a week when a schedule should not run
   * specified as array of object defined as {startMs: <number>, endMs: <number>}
   * with startMs (inclusive) being the millisecond offset from the beginning of the week (Sunday) when this blackout period starts
   * and endMs (exclusive) being the millisecond offset from beginning of the week(Sunday) when this blackout period ends.
   * @param {?string} disableReason (optional) A reason for disabling the calendar event.
   * @param {?string} eventId The auto-generated ID for a calendar event that is already posted on the instance.
   * This is only useful when editing a pre-existing calendar event.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postCalendarEvent(
    nickname = null, timeMs = null, repeatMs = null, 
    missionId = null, forceAcquireEstop = null, requireDocked = null, 
    scheduleName = null, blackoutTimes = null, disableReason = null, 
    eventId = null, config
  ) {
    if ('json' in config) {
      return this.postResource('calendar/schedule', undefined, config);
    }
    
    const payload = {
      agent: {
        nickname
      },
      schedule: {
        timeMs,
        repeatMs,
        blackouts: blackoutTimes,
        disableReason,
      },
      task: {
        missionId,
        forceAcquireEstop,
        requireDocked,
      },
      eventMetadata: {
        name: scheduleName,
        eventId,
      }
    };
    
    return this.postResource('calendar/schedule', payload, config);
  }
  
  /**
   * Disable all scheduled missions.
   * @param {?string} disableReason Reason for disabling all scheduled missions.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postCalendarEventsDisableAll(disableReason = null, config) {
    return this.postResource('calendar/disable-enable', { disableReason }, config);
  }
  
  /**
   * Disable specific scheduled mission by event ID.
   * @param {string} eventId Event Id associated with a mission to disable.
   * @param {string} disableReason Reason for disabling a scheduled mission.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postCalendarEventDisableById(eventId, disableReason, config) {
    return this.postResource('calendar/disable-enable', { disableReason, eventId }, config);
  }
  
  /**
   * Enable all scheduled missions.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postCalendarEventsEnableAll(config) {
    return this.postResource('calendar/disable-enable', { disableReason: '' }, config);
  }
  
  /**
   * Enable specific scheduled mission by event ID.
   * @param {string} eventId Event Id associated with a mission to enable.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postCalendarEventEnableById(eventId, config) {
    return this.postResource('calendar/disable-enable', { disableReason: '', eventId }, config);
  }
  
  /**
   * Create a webhook instance.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postWebhook(config) {
    return this.postResource('webhooks', undefined, config);
  }
  
  /**
   * Update an existing webhook instance.
   * @param {string} uuid The ID associated with the desired webhook instance.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postWebhookById(uuid, config) {
    return this.postResource(`webhooks/${uuid}`, undefined, config);
  }
  
  /**
   * Generate a mission to send the robot back to the dock.
   * @param {string} robotNickname The nickname of the robot.
   * @param {string} siteDockUuid The uuid of the dock to send robot to.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postReturnToDockMission(robotNickname, siteDockUuid, config) {
    return this.postResource('graph/send-robot', { nickname: robotNickname, siteDockUuid }, config);
  }
  
  /**
   * Dispatch the robot to a mission given a mission uuid.
   * @param {string} robotNickname The nickname of the robot.
   * @param {string} driverId The current driver ID of the mission.
   * @param {string} missionUuid DEPRECATED. Use 'walk' instead.
   * @param {boolean} deleteMission DEPRECATED and no longer supported. Instead, use a temporary walk file that will not be reused.
   * @param {boolean} forceAcquireEstop Whether to force acquire E-stop from the previous client.
   * @param {boolean} skipInitialization Whether to skip initialization when starting the return to dock mission.
   * @param {boolean} walk The walk to dispatch the robot to. If this is set, missionUuid should be null.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postDispatchMissionToRobot(
    robotNickname,
    driverId,
    missionUuid = null,
    deleteMission = false,
    forceAcquireEstop = false,
    skipInitialization = true,
    walk = null,
    config
  ) {
    if ((missionUuid !== null && walk !== null) || (missionUuid === null && walk === null)) {
      throw new Error('Exactly one of missionUuid or walk must be set (not both or neither).');
    }
    
    if (deleteMission) {
      throw new Error("'deleteMission' is deprecated and no longer supported. Instead, pass in a 'walk' object that only temporarily exists and will not be reused.");
    }
    
    const dispatchTarget = {};
    if (missionUuid !== null) {
      emitWarning("'missionUuid' is deprecated and will be removed in a future release. Please use 'walk' instead.");
      dispatchTarget['missionId'] = missionUuid;
    }
    
    if (walk !== null) {
      dispatchTarget['walk'] = walk;
    }
    
    const payload = {
      agent: {
        nickname: robotNickname,
      },
      schedule: {
        timeMs: {
          low: 1,
          high: 0,
          unsigned: false,
        },
        repeatMs: {
          low: 0,
          high: 0,
          unsigned: false,
        },
      },
      task: {
        dispatchTarget,
        forceAcquireEstop,
        requireDocked: false,
        skipInitialization,
      },
      eventMetadata: {
        name: `Driver Triggered Mission (${driverId})`
      }
    };
    
    return this.postResource(`calendar/mission/dispatch/${robotNickname}?currentDriverId=${driverId}`, payload, config);
  }
  
  /**
   * Starts creating a backup zip file.
   * @param {boolean} includeMissions Specifies whether to include missions and maps in the backup.
   * @param {boolean} includeCaptures Specifies whether to include all inspection data captures in the backup. 
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  postBackupTask(includeMissions, includeCaptures, config) {
    return this.postResource('backup_tasks/', { includeMissions, includeCaptures }, config);
  }

  /**
   * Bulk close Anomalies by Element ID.
   * @param {string[]} elementIds The element ids of each anomaly to be closed.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  patchBulkCloseAnomalies(elementIds, config) {
    return this.patchResource('anomalies', { command: 'close', elementIds }, config);  
  }
  
  /**
   * Patch an Anomaly by uuid.
   * @param {string} anomalyUuid The uuid of the anomaly to patch fields in.
   * @param {object} patchedFields An object of fields and new values to change in the specified anomaly.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  patchAnomalyById(anomalyUuid, patchedFields, config) {
    return this.patchResource(`anomalies/${anomalyUuid}`, patchedFields, config);
  }
  
  /**
   * Given a SiteWalk uuid, deletes the SiteWalk associated with the uuid on the specified instance.
   * @param {string} uuid The ID associated with the desired SiteWalk
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  deleteSiteWalk(uuid, config) {
    return this.deleteResource(`site_walks/${uuid}`, config);
  }
  
  /**
   * Given a robot hostname, deletes the robot associated with the hostname on the specified instance
   * @param {string} robotHostname The IP address associated with the robot.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  deleteRobot(robotHostname, config) {
    return this.deleteResource(`robots/${robotHostname}`, config);
  }
  
  /**
   * Delete the specified calendar event on the specified instance.
   * @param {string} eventId The ID associated with the calendar event.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  deleteCalendarEvent(eventId, config) {
    return this.deleteResource(`calendar/schedule/${eventId}`, config);
  }
  
  /**
   * Delete the specified webhook instance on the specified instance.
   * @param {string} uuid The ID associated with the desired webhook.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  deleteWebhook(uuid, config) {
    return this.deleteResource(`webhooks/${uuid}`, config);
  }
  
  /**
   * Deletes the backup zip file from the Orbit instance.
   * @param {string} taskId The task id associated with the backup.
   * @param {axios.AxiosRequestConfig} config a variable number of keyword arguments for the get request
   * @returns {Promise<axios.AxiosResponse>}
   */
  deleteBackup(taskId, config) {
    return this.deleteResource(`backups/${taskId}`, config);
  }

}

/**
 * Creates an orbit client object.
 * @param {{ hostname: string, verify: boolean, cert: {cert: string, key: string }}} options The options from argparse
 * @returns {Promise<OrbitClient>}
 */
async function createClient(options) {
  const client = new OrbitClient(options.hostname, options.verify, { cert: options.cert, key: options.key });

  await client.authenticateWithApiToken();

  return client;
}

module.exports = {
  OrbitClient,
  createClient,
};

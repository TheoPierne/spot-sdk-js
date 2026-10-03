# bosdyn-orbit/client

Client for the web API of Orbit: HTTPS requests to its REST endpoints.

```js
const { OrbitClient, createClient } = require('spot-sdk-js').orbit;
```

| Export | Kind | Description |
|---|---|---|
| [`OrbitClient`](#orbitclient) | Class | Client for the Orbit web API |
| [`createClient`](#createclient) | Function | Creates an orbit client object. |

## OrbitClient

```ts
class OrbitClient
```

Client for the Orbit web API

### new OrbitClient

```ts
constructor(hostname: string, verify?: boolean | string, cert?: (string | string[] | {
    cert: string | Buffer;
    key: string | Buffer;
}) | null)
```

| Parameter | Type | Description |
|---|---|---|
| `hostname` | `string` | the IP address associated with the instance |
| `verify` | `boolean \| string` | controls whether we verify the server’s TLS certificate, or the path of a CA bundle to verify it with, like Python. Note that verify=false makes your application vulnerable to man-in-the-middle (MitM) attacks Defaults to true (*Optional*) |
| `cert` | `(string \| string[] \| { cert: string \| Buffer; key: string \| Buffer; }) \| null` | a local cert to use as client side certificate, like Python: the path of a .pem file with the certificate and its key, or the paths of the certificate and of the key. Or an object with their contents. Note that the private key to your local certificate must be unencrypted. Defaults to null. (*Optional*) |

### authenticateWithApiToken

```ts
authenticateWithApiToken(apiToken: string): Promise<axios.AxiosResponse>
```

Authorizes the client using the provided API token obtained from the instance.
Must call before using other client functions.

| Parameter | Type | Description |
|---|---|---|
| `apiToken` | `string` | The API token obtained from the instance |

**Returns** `Promise<axios.AxiosResponse>`

### getResource

```ts
getResource(path: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Base function for getting a resource in /api/v0/

| Parameter | Type | Description |
|---|---|---|
| `path` | `string` | the path appended to /api/v0/ |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getResourceFromDataAcquisition

```ts
getResourceFromDataAcquisition(path: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Base function for getting a resource in data acquisition.

| Parameter | Type | Description |
|---|---|---|
| `path` | `string` | the path to the resource |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### postResource

```ts
postResource(path: string, data: Object, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Base function for posting a resource in /api/v0/

| Parameter | Type | Description |
|---|---|---|
| `path` | `string` | the path appended to /api/v0/ |
| `data` | `Object` | data to post |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the post request |

**Returns** `Promise<axios.AxiosResponse>`

### patchResource

```ts
patchResource(path: string, data: object, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Base function for patching a resource in /api/v0/

| Parameter | Type | Description |
|---|---|---|
| `path` | `string` | the path appended to /api/v0/ |
| `data` | `object` | data to post |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the post request |

**Returns** `Promise<axios.AxiosResponse>`

### deleteResource

```ts
deleteResource(path: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Base function for deleting a resource in /api/v0/

| Parameter | Type | Description |
|---|---|---|
| `path` | `string` | the path appended to /api/v0/ |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the delete request |

**Returns** `Promise<axios.AxiosResponse>`

### getVersion

```ts
getVersion(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Retrieves version info.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getSystemTime

```ts
getSystemTime(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Returns the current system time.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getRobots

```ts
getRobots(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Returns robots on the specified instance.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getRobotByHostname

```ts
getRobotByHostname(hostname: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Returns a robot on given a hostname of a specific robot.

| Parameter | Type | Description |
|---|---|---|
| `hostname` | `string` | the IP address associated with the desired robot on the instance |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getSiteWalks

```ts
getSiteWalks(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Returns site walks on the specified instance

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getSiteWalkById

```ts
getSiteWalkById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a site walk uuid, returns a site walk on the specified instance

| Parameter | Type | Description |
|---|---|---|
| `uuid` | `string` | the ID associated with the site walk |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getSiteWalkArchiveById

```ts
getSiteWalkArchiveById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Returns SiteWalk as a zip archive which represents a collection of graph and mission data, like Python.

| Parameter | Type | Description |
|---|---|---|
| `uuid` | `string` | the ID associated with the site walk |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`: The response, whose data is the bytes of the archive.

### getSiteElements

```ts
getSiteElements(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Returns site elements on the specified instance

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getSiteElementById

```ts
getSiteElementById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a site element uuid, returns a site element on the specified instance

| Parameter | Type | Description |
|---|---|---|
| `uuid` | `string` | the ID associated with the site element |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getSiteDocks

```ts
getSiteDocks(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Returns site docks on the specified instance.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getSiteDockById

```ts
getSiteDockById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a SiteDock uuid, returns a SiteDock on the specified instance.

| Parameter | Type | Description |
|---|---|---|
| `uuid` | `string` | The ID associated with the SiteDock |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getCalendar

```ts
getCalendar(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Returns calendar events on the specified instance.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getRunEvents

```ts
getRunEvents(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a dictionary of query params, returns run events.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getRunEventById

```ts
getRunEventById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a runEventUuid, returns a run event.

| Parameter | Type | Description |
|---|---|---|
| `uuid` | `string` | The ID associated with the run event. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getRunCaptures

```ts
getRunCaptures(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a dictionary of query params, returns run captures.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getRunCaptureById

```ts
getRunCaptureById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a runCaptureUuid, returns a run capture.

| Parameter | Type | Description |
|---|---|---|
| `uuid` | `string` | The ID associated with the run capture |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getRuns

```ts
getRuns(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a dictionary of query params, returns runs.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getRunById

```ts
getRunById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a runUuid, returns a run.

| Parameter | Type | Description |
|---|---|---|
| `uuid` | `string` | The ID associated with the run |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getRunLog

```ts
getRunLog(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Retrieves the log of a run.

| Parameter | Type | Description |
|---|---|---|
| `uuid` | `string` | The ID of the run. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getRunArchivesById

```ts
getRunArchivesById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a runUuid, returns run archives.

| Parameter | Type | Description |
|---|---|---|
| `uuid` | `string` | The ID associated with the run |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getImage

```ts
getImage(url: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a data capture url, returns a decoded image.

| Parameter | Type | Description |
|---|---|---|
| `url` | `string` | The url associated with the data capture in the form of https://hostname + runCapture["dataUrl"]. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getImageResponse

```ts
getImageResponse(url: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a data capture url, returns an image response, like Python (the status is not checked).

| Parameter | Type | Description |
|---|---|---|
| `url` | `string` | The url associated with the data capture in the form of https://hostname + runCapture["dataUrl"]. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`: The response, whose data is a stream.

### getWebhook

```ts
getWebhook(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Returns webhook on the specified instance.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getWebhookById

```ts
getWebhookById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a uuid, returns a specific webhook instance.

| Parameter | Type | Description |
|---|---|---|
| `uuid` | `string` | The ID associated with the webhook |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getRobotInfo

```ts
getRobotInfo(robotNickname: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a robot nickname, returns information about the robot.

| Parameter | Type | Description |
|---|---|---|
| `robotNickname` | `string` | The nickname of the robot |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getAnomalies

```ts
getAnomalies(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a dictionary of query params, returns anomalies.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getBackup

```ts
getBackup(taskId: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Retrieves a *.zip containing an Orbit backup.

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The task ID returned from the postBackupTask method. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getBackupTask

```ts
getBackupTask(taskId: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Retrieves the status of a backup task started by the postBackupTask method.

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The task ID returned from the postBackupTask method. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getRunStatistics

```ts
getRunStatistics(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Retrieves session statistics.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### getRunStatisticsSessionSummary

```ts
getRunStatisticsSessionSummary(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Retrieves session summary.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### postExportAsWalk

```ts
postExportAsWalk(siteWalkUuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a SiteWalk uuid, it exports the walksPb.Walk equivalent.

| Parameter | Type | Description |
|---|---|---|
| `siteWalkUuid` | `string` | the ID associated with the SiteWalk. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### postImportFromWalk

```ts
postImportFromWalk(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a walk data, imports it to the specified instance.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### postSiteElement

```ts
postSiteElement(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Create a SiteElement. It also updates a pre-existing SiteElement using the associated UUID.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### postSiteWalk

```ts
postSiteWalk(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Create a SiteWalk. It also updates a pre-existing SiteWalk using the associated UUID.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### postSiteDock

```ts
postSiteDock(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Create a SiteElement. It also updates a pre-existing SiteDock using the associated UUID.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### postRobot

```ts
postRobot(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Add a robot to the specified instance.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### postCalendarEvent

```ts
postCalendarEvent(nickname: (string | null) | undefined, timeMs: (number | null) | undefined, repeatMs: (number | null) | undefined, missionId: (string | null) | undefined, forceAcquireEstop: (boolean | null) | undefined, requireDocked: (boolean | null) | undefined, scheduleName: (string | null) | undefined, blackoutTimes: (Array<{
    startMs: number;
    endMs: number;
}> | null) | undefined, disableReason: (string | null) | undefined, eventId: (string | null) | undefined, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

This function serves two purposes. It creates a new calendar event on using the following arguments
when Event ID is not specified. When the Event ID associated with a pre-existing calendar event is specified,
the function overwrites the attributes of the pre-existing calendar event.

| Parameter | Type | Description |
|---|---|---|
| `nickname` | `(string \| null) \| undefined` | The name associated with the robot. |
| `timeMs` | `(number \| null) \| undefined` | The first kickoff time in terms of milliseconds since epoch. |
| `repeatMs` | `(number \| null) \| undefined` | The delay time in milliseconds for repeating calendar events. |
| `missionId` | `(string \| null) \| undefined` | The UUID associated with the mission (also known as SiteWalk). |
| `forceAcquireEstop` | `(boolean \| null) \| undefined` | Instructs the system to force acquire the estop when the mission kicks off. |
| `requireDocked` | `(boolean \| null) \| undefined` | Determines whether the event will require the robot to be docked to start. |
| `scheduleName` | `(string \| null) \| undefined` | The desired name of the calendar event. |
| `blackoutTimes` | `(Array<{ startMs: number; endMs: number; }> \| null) \| undefined` | A specification for a time period over the course of a week when a schedule should not run specified as array of object defined as {startMs: &lt;number&gt;, endMs: &lt;number&gt;} with startMs (inclusive) being the millisecond offset from the beginning of the week (Sunday) when this blackout period starts and endMs (exclusive) being the millisecond offset from beginning of the week(Sunday) when this blackout period ends. |
| `disableReason` | `(string \| null) \| undefined` | (optional) A reason for disabling the calendar event. |
| `eventId` | `(string \| null) \| undefined` | The auto-generated ID for a calendar event that is already posted on the instance. This is only useful when editing a pre-existing calendar event. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### postCalendarEventsDisableAll

```ts
postCalendarEventsDisableAll(disableReason: (string | null) | undefined, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Disable all scheduled missions.

| Parameter | Type | Description |
|---|---|---|
| `disableReason` | `(string \| null) \| undefined` | Reason for disabling all scheduled missions. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### postCalendarEventDisableById

```ts
postCalendarEventDisableById(eventId: string, disableReason: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Disable specific scheduled mission by event ID.

| Parameter | Type | Description |
|---|---|---|
| `eventId` | `string` | Event Id associated with a mission to disable. |
| `disableReason` | `string` | Reason for disabling a scheduled mission. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### postCalendarEventsEnableAll

```ts
postCalendarEventsEnableAll(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Enable all scheduled missions.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### postCalendarEventEnableById

```ts
postCalendarEventEnableById(eventId: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Enable specific scheduled mission by event ID.

| Parameter | Type | Description |
|---|---|---|
| `eventId` | `string` | Event Id associated with a mission to enable. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### postWebhook

```ts
postWebhook(config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Create a webhook instance.

| Parameter | Type | Description |
|---|---|---|
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### postWebhookById

```ts
postWebhookById(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Update an existing webhook instance.

| Parameter | Type | Description |
|---|---|---|
| `uuid` | `string` | The ID associated with the desired webhook instance. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### postReturnToDockMission

```ts
postReturnToDockMission(robotNickname: string, siteDockUuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Generate a mission to send the robot back to the dock.

| Parameter | Type | Description |
|---|---|---|
| `robotNickname` | `string` | The nickname of the robot. |
| `siteDockUuid` | `string` | The uuid of the dock to send robot to. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### postDispatchMissionToRobot

```ts
postDispatchMissionToRobot(robotNickname: string, driverId: string, missionUuid: string | undefined, deleteMission: boolean | undefined, forceAcquireEstop: boolean | undefined, skipInitialization: boolean | undefined, walk: boolean | undefined, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Dispatch the robot to a mission given a mission uuid.

| Parameter | Type | Description |
|---|---|---|
| `robotNickname` | `string` | The nickname of the robot. |
| `driverId` | `string` | The current driver ID of the mission. |
| `missionUuid` | `string \| undefined` | DEPRECATED. Use 'walk' instead. |
| `deleteMission` | `boolean \| undefined` | DEPRECATED and no longer supported. Instead, use a temporary walk file that will not be reused. |
| `forceAcquireEstop` | `boolean \| undefined` | Whether to force acquire E-stop from the previous client. |
| `skipInitialization` | `boolean \| undefined` | Whether to skip initialization when starting the return to dock mission. |
| `walk` | `boolean \| undefined` | The walk to dispatch the robot to. If this is set, missionUuid should be null. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### postBackupTask

```ts
postBackupTask(includeMissions: boolean, includeCaptures: boolean, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Starts creating a backup zip file.

| Parameter | Type | Description |
|---|---|---|
| `includeMissions` | `boolean` | Specifies whether to include missions and maps in the backup. |
| `includeCaptures` | `boolean` | Specifies whether to include all inspection data captures in the backup. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### patchBulkCloseAnomalies

```ts
patchBulkCloseAnomalies(elementIds: string[], config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Bulk close Anomalies by Element ID.

| Parameter | Type | Description |
|---|---|---|
| `elementIds` | `string[]` | The element ids of each anomaly to be closed. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### patchAnomalyById

```ts
patchAnomalyById(anomalyUuid: string, patchedFields: object, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Patch an Anomaly by uuid.

| Parameter | Type | Description |
|---|---|---|
| `anomalyUuid` | `string` | The uuid of the anomaly to patch fields in. |
| `patchedFields` | `object` | An object of fields and new values to change in the specified anomaly. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### deleteSiteWalk

```ts
deleteSiteWalk(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a SiteWalk uuid, deletes the SiteWalk associated with the uuid on the specified instance.

| Parameter | Type | Description |
|---|---|---|
| `uuid` | `string` | The ID associated with the desired SiteWalk |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### deleteRobot

```ts
deleteRobot(robotHostname: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Given a robot hostname, deletes the robot associated with the hostname on the specified instance

| Parameter | Type | Description |
|---|---|---|
| `robotHostname` | `string` | The IP address associated with the robot. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### deleteCalendarEvent

```ts
deleteCalendarEvent(eventId: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Delete the specified calendar event on the specified instance.

| Parameter | Type | Description |
|---|---|---|
| `eventId` | `string` | The ID associated with the calendar event. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### deleteWebhook

```ts
deleteWebhook(uuid: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Delete the specified webhook instance on the specified instance.

| Parameter | Type | Description |
|---|---|---|
| `uuid` | `string` | The ID associated with the desired webhook. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

### deleteBackup

```ts
deleteBackup(taskId: string, config: axios.AxiosRequestConfig): Promise<axios.AxiosResponse>
```

Deletes the backup zip file from the Orbit instance.

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The task id associated with the backup. |
| `config` | `axios.AxiosRequestConfig` | a variable number of keyword arguments for the get request |

**Returns** `Promise<axios.AxiosResponse>`

## createClient

```ts
export function createClient(options: {
    hostname: string;
    verify: (boolean | string) | null;
    cert: (string | string[]) | null;
    key: string | null;
}): Promise<OrbitClient>
```

Creates an orbit client object.

| Parameter | Type | Description |
|---|---|---|
| `options` | `{ hostname: string; verify: (boolean \| string) \| null; cert: (string \| string[]) \| null; key: string \| null; }` | The options from argparse: verify is 'True' or 'False' (in any case, like Python 5.2.0), or the path of a CA bundle, cert the path of a .pem file with the certificate and its key, or the paths of both. With key, cert and key are their contents. |

**Returns** `Promise<OrbitClient>`

'use strict';

// Provides a very visible button to click to stop the robot (run it with qode: npm run gui).

const path = require('node:path');
const process = require('node:process');
const { clearInterval, setInterval } = require('node:timers');

const {
  AlignmentFlag,
  Direction,
  QBoxLayout,
  QIcon,
  QLabel,
  QMainWindow,
  QMessageBox,
  QPushButton,
  QSizePolicyPolicy,
  QWidget,
  WidgetEventTypes,
  WindowState,
  WindowType,
} = require('@nodegui/nodegui');
const argparse = require('argparse');

const estopPb = require('../../src/bosdyn/api/estop_pb');
const { EstopClient, EstopEndpoint, EstopKeepAlive } = require('../../src/bosdyn-client/estop');
const { LoggerUtil } = require('../../src/bosdyn-client/logger_util');
const util = require('../../src/bosdyn-client/util');
const { createStandardSdk } = require('../../src/index');

const STOP_BUTTON_STYLESHEET =
  'background-color: red; font: bold 60px; border-width: 5px; border-radius:20px; padding: 60px';
const RELEASE_BUTTON_STYLESHEET = 'background-color: green; border-width: 5px; border-radius:20px; padding: 10px';
const ERROR_LABEL_STYLESHEET = 'font: bold 15px';

/**
 * The GUI for the estop Button. Provides software estop.
 *
 * Unlike Python, there is no thread: the status queue of the keep-alive is read by a timer, and the widgets are
 * updated directly (the Qt signals of Python pass the updates from the threads to the GUI thread).
 * @extends {QMainWindow}
 */
class EstopGui extends QMainWindow {
  /**
   * Use EstopGui.create(), which sets up the estop endpoint first.
   * @param {string} hostname
   * @param {EstopKeepAlive} estopKeepAlive
   * @param {number} timeoutSec Timeout of the estop endpoint (seconds).
   */
  constructor(hostname, estopKeepAlive, timeoutSec) {
    super();

    this.logger = LoggerUtil.getLogger('Estop GUI');

    this.statusExtant = false;
    // Used to tell the status timer to stop.
    this.quitting = false;

    // Periodic check-in between keep-alive and robot
    this.estopKeepAlive = estopKeepAlive;
    this._statusMsg = '';

    // Configure UI.
    this.setCentralWidget(new QWidget());
    this.centerLayout = new QBoxLayout(Direction.TopToBottom);
    this.centralWidget().setLayout(this.centerLayout);
    this.centerLayout.setSpacing(1);
    this.centerLayout.setContentsMargins(1, 1, 1, 1);

    this.stopButton = new QPushButton(this);
    this.stopButton.setText('STOP');
    // A method bound to the GUI (the unbound stop of the keep-alive had no this).
    this.stopButton.addEventListener('clicked', () => this._stop());
    this.stopButton.setStyleSheet(STOP_BUTTON_STYLESHEET);
    this.stopButton.setSizePolicy(QSizePolicyPolicy.Expanding, QSizePolicyPolicy.Expanding);
    this.centerLayout.addWidget(this.stopButton);

    this.statusLabel = new QLabel();
    this.statusLabel.setText('Starting...');
    this.statusLabel.setAlignment(AlignmentFlag.AlignCenter);
    this.statusLabel.setStyleSheet(ERROR_LABEL_STYLESHEET);
    this.centerLayout.addWidget(this.statusLabel);

    this.releaseButton = new QPushButton(this);
    this.releaseButton.setText('Release');
    this.releaseButton.addEventListener('clicked', () => this._allow());
    this.releaseButton.setStyleSheet(RELEASE_BUTTON_STYLESHEET);
    this.centerLayout.addWidget(this.releaseButton);

    this.setWindowTitle(`E-Stop (${hostname} ${timeoutSec}sec)`);

    // Begin monitoring the keep-alive status (a busy loop blocked the event loop, so no check-in was sent).
    this._statusTimer = setInterval(() => this._checkKeepAliveStatus(), 100);
  }

  /**
   * Force the server to set up a single endpoint system, begin the periodic check-in and build the GUI.
   * @param {string} hostname
   * @param {EstopClient} client
   * @param {number} timeoutSec Timeout of the estop endpoint (seconds).
   * @param {?string} [name=null] Name of the estop endpoint.
   * @returns {Promise<EstopGui>}
   */
  static async create(hostname, client, timeoutSec, name = null) {
    const ep = new EstopEndpoint(client, name, timeoutSec);
    // Awaited before the check-ins (force_simple_setup() did not exist: a TypeError).
    await ep.forceSimpleSetup();
    return new EstopGui(hostname, new EstopKeepAlive(ep), timeoutSec);
  }

  /**
   * Make an rpc call to get the robot estop status.
   * @returns {Promise<void>}
   */
  async doStatusRpc() {
    let markup;
    try {
      const status = await this.estopKeepAlive.client.getStatus();
      markup = statusResponseToMarkup(status, this.estopKeepAlive.endpoint.uniqueId);
    } catch (e) {
      markup = 'Exception while getting status!';
      this.logger.error(`${markup} ${e?.stack ?? e}`);
    }
    this._launchEstopStatusDialog(markup);
  }

  /**
   * Asynchronously request and print the endpoint status.
   */
  status() {
    if (this.statusExtant) {
      this.logger.info('Ignoring duplicate request for status');
      return;
    }

    this.statusExtant = true;
    this.logger.info('Getting estop system status');
    this.doStatusRpc();
  }

  /**
   * Display the statuses of the estop keep alive queued since the last call.
   */
  _checkKeepAliveStatus() {
    const queue = this.estopKeepAlive.statusQueue;
    while (!this.quitting && !queue.empty()) {
      const [status, msg] = queue.get();
      if (status === EstopKeepAlive.KeepAliveStatus.OK) {
        this.setStatusLabel(`OK! ${new Date().toTimeString().slice(0, 8)}`);
      } else if (status === EstopKeepAlive.KeepAliveStatus.ERROR) {
        this.setStatusLabel(msg);
      } else if (status === EstopKeepAlive.KeepAliveStatus.DISABLED) {
        this.disableButtons();
      } else {
        throw new Error(`Unknown estop keep alive status seen: ${status}.`);
      }
    }
  }

  /**
   * Disable the estop buttons.
   */
  disableButtons() {
    this.stopButton.setEnabled(false);
    this.releaseButton.setEnabled(false);
    this.stopButton.setText('(disabled)');
    this.releaseButton.setText('(disabled)');
  }

  /**
   * @param {string} statusMsg
   */
  setStatusLabel(statusMsg) {
    this._statusMsg = statusMsg;
    this._updateStatusLabel();
  }

  _updateStatusLabel() {
    this.statusLabel.setText(`${levelString(this.estopKeepAlive.lastSetLevel)} ${this._statusMsg}`);
  }

  /**
   * @param {string} markup
   */
  _launchEstopStatusDialog(markup) {
    this.statusExtant = false;
    const d = new QMessageBox();
    d.setWindowTitle('SW Estop Status');
    d.setText(markup);
    d.exec();
  }

  /**
   * Shutdown estop keep-alive and the status timer.
   * @returns {Promise<void>}
   */
  async quit() {
    this.quitting = true;
    clearInterval(this._statusTimer);
    await this.estopKeepAlive.shutdown();
  }

  async _allow() {
    await this._checkIn(() => this.estopKeepAlive.allow(), 'Release');
  }

  async _stop() {
    await this._checkIn(() => this.estopKeepAlive.stop(), 'STOP');
  }

  /**
   * A check-in of a button: its failure is displayed (it was an unhandled rejection, which ended the process).
   * @param {() => Promise<void>} checkIn
   * @param {string} button
   * @returns {Promise<void>}
   */
  async _checkIn(checkIn, button) {
    try {
      await checkIn();
      this._updateStatusLabel();
    } catch (e) {
      this.logger.error(`${button} failed: ${e?.stack ?? e}`);
      this.setStatusLabel(`${button} failed: ${e?.message ?? e}`);
    }
  }
}

/**
 * Convert a stop level into a string for the UI.
 * @param {?number} level
 * @returns {string}
 */
function levelString(level) {
  if (level === estopPb.EstopStopLevel.ESTOP_LEVEL_NONE) return 'Allowed';
  if (
    level === estopPb.EstopStopLevel.ESTOP_LEVEL_CUT ||
    level === estopPb.EstopStopLevel.ESTOP_LEVEL_SETTLE_THEN_CUT
  ) {
    return 'Stopped';
  }
  return '';
}

/**
 * Name of a stop level (jspb enums map the names to the values).
 * @param {number} level
 * @returns {string}
 */
function stopLevelName(level) {
  return Object.keys(estopPb.EstopStopLevel).find(name => estopPb.EstopStopLevel[name] === level) ?? String(level);
}

/**
 * Convert an estopPb.EstopSystemStatus to some HTML text.
 * @param {estopPb.EstopSystemStatus} status The EstopSystemStatus to parse.
 * @param {?string} [myId=null] Optionally specify an endpoint unique ID. If that ID is in the active estop system,
 * additional text is inserted into the markup.
 * @returns {string} A string with HTML tags that can be displayed in a UI element (e.g. a dialog box)
 */
function statusResponseToMarkup(status, myId = null) {
  let msg = '';
  for (const e of status.getEndpointsList()) {
    const endpoint = e.getEndpoint();
    const me = myId === endpoint?.getUniqueId() ? '(me)' : '(not me)';
    const sinceValid = e.getTimeSinceValidResponse();
    // Seconds (nanos / 1e6 were thousandths of seconds).
    const time = (sinceValid?.getSeconds() ?? 0) + (sinceValid?.getNanos() ?? 0) / 1e9;
    const level = stopLevelName(e.getStopLevel());
    msg += `<b>${endpoint?.getName() ?? ''} ${me}</b>  ${level} (sent ${time.toFixed(2)} ago)<br>`;
  }

  const netLevel = stopLevelName(status.getStopLevel());
  const reason = status.getStopLevelDetails();
  return `<b>${netLevel}</b>  (${reason})<br><br>Endpoints:<br>${msg}`;
}

/**
 * Build the application window and configure the estop.
 * @param {string} hostname
 * @param {EstopClient} estopClient
 * @param {number} timeoutSec Timeout of this estop endpoint (seconds)
 * @returns {Promise<EstopGui>}
 */
async function buildApp(hostname, estopClient, timeoutSec) {
  const gui = await EstopGui.create(hostname, estopClient, timeoutSec, 'EStop');
  gui.setWindowIcon(new QIcon(path.join(__dirname, 'resources', 'stop-sign.png')));
  return gui;
}

/**
 * Show the window: the application runs until it is closed, then the estop keep-alive is shut down.
 * @param {EstopGui} buttonWindow
 */
function runApp(buttonWindow) {
  buttonWindow.addEventListener(WidgetEventTypes.Close, () => {
    buttonWindow.quit().catch(e => buttonWindow.logger.error(`Shutdown failed: ${e?.stack ?? e}`));
  });
  buttonWindow.show();
  // Prevents the garbage collection of the window.
  global.estopWindow = buttonWindow;
}

async function buildAndRunApp(hostname, estopClient, options) {
  const buttonWindow = await buildApp(hostname, estopClient, options.timeout);

  // Set some Qt flags for our GUI behavior.
  if (options.on_top) {
    buttonWindow.setWindowFlag(WindowType.WindowStaysOnTopHint, true);
  }
  if (options.start_minimized) {
    buttonWindow.setWindowState(WindowState.WindowMinimized);
  }

  // Look for a signal for a clean shut-down.
  process.on('SIGINT', () => {
    buttonWindow.logger.info('Estop gui received signal for clean shutdown. Exiting.');
    buttonWindow.quit().finally(() => process.exit(0));
  });

  runApp(buttonWindow);
}

async function main(args = null) {
  const parser = new argparse.ArgumentParser();
  util.addBaseArguments(parser);
  parser.add_argument('-t', '--timeout', { default: 5, type: 'float', help: 'Timeout in seconds' });
  parser.add_argument('--no-on-top', {
    help: 'Allow window to be hidden.',
    dest: 'on_top',
    action: 'store_false',
    default: true,
  });
  parser.add_argument('--start-minimized', {
    help: 'Start the window minimized.',
    dest: 'start_minimized',
    action: 'store_true',
    default: false,
  });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  util.setupLogging(options.verbose);

  // Create robot object
  const sdk = createStandardSdk('estop_gui');
  const robot = sdk.createRobot(options.hostname);
  await util.authenticate(robot);

  // Create estop client for the robot
  const estopClient = await robot.ensureClient(EstopClient.defaultServiceName);

  await buildAndRunApp(options.hostname, estopClient, options);
}

if (require.main === module) {
  main().catch(e => {
    console.error(e);
    process.exit(1);
  });
} else {
  module.exports = main;
}

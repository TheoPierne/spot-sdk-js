'use strict';

const path = require('node:path');
const process = require('node:process');
const { setImmediate } = require('node:timers');

const {
  AlignmentFlag,
  WindowType,
  WindowState,
  QIcon,
  QLabel,
  QWidget,
  QPushButton,
  QBoxLayout,
  QMessageBox,
  QMainWindow,
  QApplication,
  QSizePolicyPolicy,
} = require('@nodegui/nodegui');
const argparse = require('argparse');

const { EstopEndpoint, EstopKeepAlive, EstopClient } = require('../../bosdyn-client/estop');
const { LoggerUtil } = require('../../bosdyn-client/loggerUtil');

const util = require('../../bosdyn-client/util');
const estop_pb = require('../../bosdyn/api/estop_pb');
const client = require('../../index');

const STOP_BUTTON_STYLESHEET =
  'background-color: red; font: bold 60px; border-width: 5px; border-radius:20px; padding: 60px';
const RELEASE_BUTTON_STYLESHEET = 'background-color: green; border-width: 5px; border-radius:20px; padding: 10px';
const ERROR_LABEL_STYLESHEET = 'font: bold 15px';

/**
 * The GUI for the estop Button. Provides software estop.
 * @extends {QMainWindow}
 */
class EstopGui extends QMainWindow {
  // Disable_signal = QtCore.pyqtSignal()
  // checkin_status_signal = QtCore.pyqtSignal('QString')
  // got_status_signal = QtCore.pyqtSignal('QString')

  constructor(hostname, client, timeout_sec, name = null, unique_id = null) {
    super();

    this.logger = LoggerUtil.getLogger('Estop GUI');

    /* This.disable_signal.connect(this.disable_buttons);
		this.checkin_status_signal.connect(this.set_status_label);
		this.got_status_signal.connect(this._launch_estop_status_dialog);*/
    this.status_extant = false;
    this.quitting = false; // Used to tell threads to shutdown

    // Force server to set up a single endpoint system
    const ep = new EstopEndpoint(client, name, timeout_sec);
    ep.force_simple_setup();

    // Begin periodic check-in between keep-alive and robot
    this.estop_keep_alive = new EstopKeepAlive(ep);

    // Configure UI.
    this.setCentralWidget(new QWidget());
    this.center_layout = new QBoxLayout(0);
    this.center_layout.addWidget(this.centralWidget);
    // This.center_layout.setAlignment(AlignmentFlag.AlignTop);
    this.center_layout.setSpacing(1);
    this.center_layout.setContentsMargins(1, 1, 1, 1);

    this.stop_button = new QPushButton(this);
    this.stop_button.setText('STOP');
    this.stop_button.addEventListener('clicked', this.estop_keep_alive.stop);
    this.stop_button.setStyleSheet(STOP_BUTTON_STYLESHEET);
    this.stop_button.setSizePolicy(QSizePolicyPolicy.Expanding, QSizePolicyPolicy.Expanding);
    this.center_layout.addWidget(this.stop_button);

    this.status_label = new QLabel();
    this.status_label.setText('Starting...');
    this.status_label.setAlignment(AlignmentFlag.AlignCenter);
    this.status_label.setStyleSheet(ERROR_LABEL_STYLESHEET);
    this.center_layout.addWidget(this.status_label);

    this.release_button = new QPushButton(this);
    this.release_button.setText('Release');
    this.release_button.addEventListener('clicked', this.estop_keep_alive.allow);
    this.release_button.setStyleSheet(RELEASE_BUTTON_STYLESHEET);
    this.center_layout.addWidget(this.release_button);

    this.setWindowTitle(`E-Stop (${hostname} - ${timeout_sec}sec)`);

    // Begin monitoring the keep-alive status
    this.thread = setImmediate(this._check_keep_alive_status);
  }

  /**
   * Make an rpc call to get the robot estop status.
   * @returns {Promise<void>}
   */
  async do_status_rpc() {
    let status,
      markup = '',
      isCatch = false;
    try {
      status = await this.estop_keep_alive.client.get_status();
    } catch (e) {
      isCatch = true;
      markup = 'Exception while getting status!';
    }

    if (!isCatch) {
      markup = status_response_to_markup(status, this.estop_keep_alive.endpoint.unique_id);
    }

    this.got_status_signal.emit(markup);
  }

  /**
   * Request and print the endpoint status.
   * @returns {void}
   */
  status() {
    if (this.status_extant) {
      this.logger.info('Ignoring duplicate request for status');
      return;
    }

    this.status_extant = true;
    this.logger.info('Getting estop system status');
    setImmediate(this.do_status_rpc);
  }

  /**
   * Monitor estop keep alive status and display status in GUI via Qt signals.
   * @returns {void}
   */
  _check_keep_alive_status() {
    while (!this.quitting) {
      // Wait for queue to be populated. After timeout, check if GUI is still running.
      let status, msg;
      try {
        [status, msg] = [...this.estop_keep_alive.status_queue][0];
        console.log(status, msg);
        this.estop_keep_alive.status_queue.delete(status);
      } catch (e) {
        continue;
      }

      if (status === EstopKeepAlive.KeepAliveStatus.OK) {
        this.checkin_status_signal.emit(`OK! ${new Date()}`);
      } else if (status === EstopKeepAlive.KeepAliveStatus.ERROR) {
        this.checkin_status_signal.emit(msg);
      } else if (status === EstopKeepAlive.KeepAliveStatus.DISABLED) {
        this.disable_signal.emit(null);
      } else {
        throw new Error(`Unknown estop keep alive status seen: ${status}.`);
      }
    }
  }

  /**
   * Disable the estop buttons.
   * @returns {void}
   */
  disable_buttons() {
    this.stop_button.setEnabled(false);
    this.release_button.setEnabled(false);
    this.stop_button.setText('(disabled)');
    this.release_button.setText('(disabled)');
  }

  /**
   * Set status label.
   * @param {string} status_msg Status of the label.
   * @returns {void}
   */
  set_status_label(status_msg = '') {
    this.status_label.setText(status_msg);
  }

  /**
   * @param  {string} markup
   * @returns {void}
   */
  _launch_estop_status_dialog(markup) {
    this.status_extant = false;
    const d = new QMessageBox();
    d.setWindowTitle('SW Estop Status');
    d.setText(markup);
    d.exec();
  }

  /**
   * Shutdown estop keep-alive and all GUI threads.
   * @returns {void}
   */
  quit() {
    this.estop_keep_alive.shutdown();
    this.quitting = true;
  }
}

/**
 * Convert an estop_protos.EstopSystemStatus to some HTML text.
 * @param  {EstopSystemStatus} status The EstopSystemStatus to parse.
 * @param  {string} my_id  Optionally specify an endpoint unique ID. If that ID is in the active estop system,
 * additional text is inserted into the markup.
 * @returns {string}        A string with HTML tags that can be displayed in a UI element (e.g. a dialog box)
 */
function status_response_to_markup(status, my_id = null) {
  const endpoints_data = status.getEndpointsList().map(e => ({
    name: e.getEndpoint().getName(),
    me: e.getEndpoint().getUniqueId() === my_id ? '(me)' : '(not me)',
    proto_name: estop_pb.EstopStopLevel[e.getStopLevel()],
    time: e.getTimeSinceValidResponse().getSeconds() + e.getTimeSinceValidResponse().getNanos() / 1000000,
  }));

  let msg = '';

  for (const data of endpoints_data) {
    msg += `<b>${data.name} ${data.me}</b>  ${data.proto_name} (sent ${data.time} ago)<br>`;
  }

  const net_level = estop_pb.EstopStopLevel[status.getStopLevel()];
  const reason = status.getStopLevelDetails();
  const markup = `<b>${net_level}</b>  (${reason})<br><br>Endpoints:<br>${msg}`;

  return markup;
}

/**
 * Build the application window and configure the estop.
 * @param  {string} hostname
 * @param  {EstopClient} estop_client
 * @param  {number} timeout_sec  Timeout of this estop endpoint (seconds)
 * @returns {Array<QApplication, EstopGui>}
 */
function build_app(hostname, estop_client, timeout_sec) {
  const qt_app = new QApplication(process.argv);

  const icon_path = path.join(process.cwd(), 'resources', 'stop-sign.png');
  // Const icon = new QIcon(icon_path);
  // qt_app.setWindowIcon(icon);

  // Setting the taskbar icon in windows. See https://stackoverflow.com/a/1552105
  if (process.platform === 'win32') {
    // Const myappid = 'bostondynamics.estop_button.1'  // arbitrary string
    // ctypes.windll.shell32.SetCurrentProcessExplicitAppUserModelID(myappid);
  }

  const gui = new EstopGui(hostname, estop_client, timeout_sec, 'EStop');
  return [qt_app, gui];
}

/**
 * Run the QT application.
 * @param  {QApplication} qt_app
 * @param  {EstopGui} button_window
 * @returns {number}
 */
function run_app(qt_app, button_window) {
  button_window.show();
  const retcode = qt_app.exec();
  button_window.quit();
  return retcode;
}

function build_and_run_app(hostname, estop_client, options) {
  const [qt_app, button_window] = build_app(hostname, estop_client, options.timeout);

  if (!qt_app || !button_window) {
    process.exit(1);
  }

  // Set some Qt flags for our GUI behavior.
  if (options.on_top) {
    button_window.setWindowFlag(WindowType.WindowStaysOnTopHint, true);
  }
  if (options.start_minimized) {
    button_window.setWindowState(WindowState.WindowMinimized);
  }

  /**
   * Cleanly shut down the application on signal.
   * @returns {void}
   */
  function sigint_handler(sig, frame) {
    button_window.quit();
    button_window.logger.info('Estop gui received signal for clean shutdown. Exiting.');
    process.exit(0);
  }

  // Look for a signal for a clean shut-down.
  process.on('SIGINT', sigint_handler);
  // Set up a timer to let the python interpreter run once every 100ms. This lets us catch signals.
  // From https://stackoverflow.com/a/4939113.
  // timer = QtCore.QTimer()
  // timer.start(100)
  // Temporarily break out of the QT event loop, so we can look at signals.
  // timer.timeout.connect(lambda: None)

  return run_app(qt_app, button_window);
}

async function main(args = null) {
  const parser = argparse.ArgumentParser();
  util.add_common_arguments(parser);
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

  // Bosdyn.client.util.setup_logging(options.verbose)

  // Create robot object
  const sdk = client.sdk.create_standard_sdk('estop_gui');
  const robot = sdk.create_robot(options.hostname);
  await robot.authenticate(options.username, options.password);

  // Create estop client for the robot
  const estop_client = await robot.ensure_client(EstopClient.default_service_name);

  // Process.exit(build_and_run_app(options.hostname, estop_client, options));
  build_and_run_app(options.hostname, estop_client, options);
}

if (require.main === module) {
  main();
} else {
  module.exports = main;
}

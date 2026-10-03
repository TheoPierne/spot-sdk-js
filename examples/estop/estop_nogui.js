'use strict';

const process = require('node:process');
const { setInterval } = require('node:timers');

const argparse = require('argparse');
const blessed = require('reblessed');

const robot_state_pb = require('../../src/bosdyn/api/robot_state_pb');
const { EstopEndpoint, EstopKeepAlive, EstopClient, EndpointUnknownError } = require('../../src/bosdyn-client/estop');
const { RobotStateClient } = require('../../src/bosdyn-client/robot_state');
const util = require('../../src/bosdyn-client/util');
const client = require('../../src/index');

class EstopNoGui {
  constructor(robot_client, timeout_sec, name = null) {
    this.endpoint = new EstopEndpoint(robot_client, name, timeout_sec);
    this.estop_keep_alive = null;
  }

  /**
   * Force the robot to set up a single endpoint system, begin the periodic check-in and release the estop.
   * Must be awaited before using the other methods.
   */
  async start() {
    await this.endpoint.forceSimpleSetup();
    this.estop_keep_alive = new EstopKeepAlive(this.endpoint);
    await this.estop_keep_alive.allow();
  }

  stop() {
    return this.estop_keep_alive.stop();
  }

  allow() {
    return this.estop_keep_alive.allow();
  }

  settle_then_cut() {
    return this.estop_keep_alive.settleThenCut();
  }
}

async function main(args = null) {
  const parser = new argparse.ArgumentParser();
  util.addBaseArguments(parser);
  parser.add_argument('-t', '--timeout', { type: 'float', default: 5, help: 'Timeout in seconds' });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  util.setupLogging(options.verbose);

  // Create robot object
  const sdk = client.createStandardSdk('estop_nogui');
  const robot = sdk.createRobot(options.hostname);
  await util.authenticate(robot);

  // Create estop client for the robot
  const estop_client = await robot.ensureClient(EstopClient.defaultServiceName);

  // Create nogui estop. The estop timeout is in seconds, like the --timeout option.
  const estop_nogui = new EstopNoGui(estop_client, options.timeout, 'Estop NoGUI');
  await estop_nogui.start();

  // Create robot state client for the robot
  const state_client = await robot.ensureClient(RobotStateClient.defaultServiceName);

  // Create a screen object.
  const screen = blessed.screen({ fastCSR: true });
  screen.title = 'Bosdyn Spot EStop';

  function cleanup_example(_msg) {
    console.log('Exiting');
    estop_nogui.estop_keep_alive?.shutdown();

    // Clean up and close blessed
    screen.destroy();
  }

  function clean_exit(msg = '') {
    cleanup_example(msg);
    process.exit(0);
  }

  function run_example() {
    const box = blessed.box({
      top: 'center',
      left: 'center',
      width: '50%',
      height: '50%',
      content: '{center}Estop w/o GUI running.{/center}',
      tags: true,
      border: {
        type: 'line',
      },
      style: {
        fg: 'white',
        bg: 'blue',
        border: {
          fg: '#f0f0f0',
        },
        hover: {
          bg: 'green',
        },
      },
    });

    screen.append(box);
    box.enableInput();
    box.focus();

    screen.key(['q', 'C-c'], () => {
      clean_exit('Exit on user input');
    });

    // The estop calls are async: their errors are rejections, a synchronous try/catch would miss them.
    function on_estop_error(e) {
      if (e instanceof EndpointUnknownError) {
        clean_exit('This estop endpoint no longer valid. Exiting...');
      } else {
        box.setLine(8, `{red-fg}${e.message}{/red-fg}`);
        screen.render();
      }
    }

    screen.key('space', () => {
      estop_nogui.stop().catch(on_estop_error);
    });

    screen.key('r', () => {
      estop_nogui.allow().catch(on_estop_error);
    });

    screen.key('s', () => {
      estop_nogui.settle_then_cut().catch(on_estop_error);
    });

    box.setLine(1, '[q] or [Ctrl-C]: Quit');
    box.setLine(2, '[SPACE]: Trigger estop');
    box.setLine(3, '[r]: Release estop');
    box.setLine(4, '[s]: Settle then cut estop');
    screen.render();

    setInterval(async () => {
      let estop_status = '{yellow-bg}{green-fg}NOT_STOPPED{/}';
      let state;
      try {
        state = await state_client.getRobotState();
      } catch (e) {
        // An unhandled rejection would kill the process, and with it the estop check-ins.
        box.setLine(6, `{red-fg}Robot state unavailable: ${e.message}{/red-fg}`);
        screen.render();
        return;
      }
      const estop_states = state.getEstopStatesList();
      for (const estop_state of estop_states) {
        const state_str = Object.keys(robot_state_pb.EStopState.State)[estop_state.getState()];
        if (state_str === 'STATE_ESTOPPED') {
          estop_status = '{red-fg}STOPPED{/red-fg}';
          break;
        } else if (state_str === 'STATE_UNKNOWN') {
          estop_status = '{red-fg}ERROR{/red-fg}';
        } else if (state_str === 'STATE_NOT_ESTOPPED') {
          // Pass
        } else {
          // Unknown estop status
        }
      }

      // Display current estop status
      if (!estop_nogui.estop_keep_alive.statusQueue.empty()) {
        const latest_status = estop_nogui.estop_keep_alive.statusQueue.get()[1].trim();
        if (latest_status !== '') {
          // If you lose this estop endpoint, report it to user
          box.setLine(7, `{red-fg}${latest_status}{/red-fg}`);
        }
      }
      box.setLine(6, estop_status);
      screen.render();
    }, 500);
  }

  try {
    run_example();
  } catch (e) {
    console.log(e);
    cleanup_example(e);
    throw e;
  }
}

if (require.main === module) {
  main();
} else {
  module.exports = main;
}

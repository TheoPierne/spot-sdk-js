'use strict';

const process = require('node:process');
const { setInterval } = require('node:timers');

const argparse = require('argparse');
const blessed = require('reblessed');

const { EstopEndpoint, EstopKeepAlive, EstopClient, EndpointUnknownError } = require('../../bosdyn-client/estop');
const { RobotStateClient } = require('../../bosdyn-client/robot_state');
const util = require('../../bosdyn-client/util');
const estop_pb = require('../../bosdyn/api/estop_pb');
const robot_state_pb = require('../../bosdyn/api/robot_state_pb');
const client = require('../../index');

class EstopNoGui {
  constructor(robot_client, timeout_sec, name = null) {
    const ep = new EstopEndpoint(robot_client, name, timeout_sec);
    ep.force_simple_setup();

    this.estop_keep_alive = new EstopKeepAlive(ep);
    this.estop_keep_alive.allow();

    process.stdin.resume();
    process.on('SIGINT', this.estop_keep_alive._end_periodic_check_in);
  }

  stop() {
    this.estop_keep_alive.stop();
  }

  allow() {
    this.estop_keep_alive.allow();
  }

  settle_then_cut() {
    this.estop_keep_alive.settle_then_cut();
  }
}

async function main(args = null) {
  const parser = argparse.ArgumentParser();
  util.add_common_arguments(parser);
  parser.add_argument('-t', '--timeout', { type: 'float', default: 5, help: 'Timeout in seconds' });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  util.setup_logging(options.verbose);

  // Create robot object
  const sdk = client.sdk.create_standard_sdk('estop_nogui');
  const robot = sdk.create_robot(options.hostname);
  await robot.authenticate(options.username, options.password);

  // Create estop client for the robot
  const estop_client = await robot.ensure_client(EstopClient.default_service_name);

  // Create nogui estop
  // Assuming timeout is in seconds.
  const estop_nogui = new EstopNoGui(estop_client, options.timeout * 1000, 'Estop NoGUI');

  // Create robot state client for the robot
  const state_client = await robot.ensure_client(RobotStateClient.default_service_name);

  // Create a screen object.
  const screen = blessed.screen({ smartCSR: true });
  screen.title = 'Bosdyn Spot EStop';

  function cleanup_example(msg) {
    console.log('Exiting');
    estop_nogui.estop_keep_alive.shutdown();

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

    screen.key('space', () => {
      try {
        estop_nogui.stop();
      } catch (e) {
        if (e instanceof EndpointUnknownError) {
          clean_exit('This estop endpoint no longer valid. Exiting...');
        }
      }
    });

    screen.key('r', () => {
      try {
        estop_nogui.allow();
      } catch (e) {
        if (e instanceof EndpointUnknownError) {
          clean_exit('This estop endpoint no longer valid. Exiting...');
        }
      }
    });

    screen.key('s', () => {
      try {
        estop_nogui.settle_then_cut();
      } catch (e) {
        if (e instanceof EndpointUnknownError) {
          clean_exit('This estop endpoint no longer valid. Exiting...');
        }
      }
    });

    box.setLine(1, '[q] or [Ctrl-C]: Quit');
    box.setLine(2, '[SPACE]: Trigger estop');
    box.setLine(3, '[r]: Release estop');
    box.setLine(4, '[s]: Settle then cut estop');
    screen.render();

    setInterval(async () => {
      let estop_status = '{yellow-bg}{green-fg}NOT_STOPPED{/}';
      const state = await state_client.get_robot_state();
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
      if (!estop_nogui.estop_keep_alive.status_queue.empty()) {
        const latest_status = estop_nogui.estop_keep_alive.status_queue.get()[1].trim();
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

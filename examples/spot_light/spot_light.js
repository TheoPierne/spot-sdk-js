'use strict';

const argparse = require('argparse');

const { MyRobot } = require('./mySpot');
const { StateMachineSit, StateMachineStand, StateMachineFollow } = require('./stateMachine');
const util = require('../../bosdyn-client/util');

async function main(args = null) {
  const parser = argparse.ArgumentParser();
  util.add_common_arguments(parser);

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  try {
    const my_spot = new MyRobot();
    await my_spot.connect(options);

    const spot_states = [new StateMachineSit(my_spot), new StateMachineStand(my_spot), new StateMachineFollow(my_spot)];

    // Enter the sit state by default
    spot_states[0].enable = true;
    // From the sit state, it will transition to stand if light is seen
    spot_states[0].next_state = spot_states[1];
    // From stand, it will transition to follow if light is seen
    spot_states[1].next_state = spot_states[2];
    // From follow, it will transition back to sit if light is not seen
    spot_states[2].next_state = spot_states[0];

    const results = [];
    for (const state of spot_states) {
      results.push(state.exe());
    }
    await Promise.all(results);

    // Start the state machine
  } catch (e) {
    return false;
  }

  console.log('[SPOT_LIGHT] Done!!');
  return true;
}

if (require.main === module) {
  main();
} else {
  module.exports = main;
}

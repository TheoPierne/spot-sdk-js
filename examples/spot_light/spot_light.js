#!/usr/bin/env node
'use strict';

const process = require('node:process');

const { ArgumentParser } = require('argparse');

const { MyRobot } = require('./mySpot');
const { StateMachineSit, StateMachineStand, StateMachineFollow } = require('./stateMachine');
const util = require('../../src/bosdyn-client/util');

async function main(args = null) {
  const parser = new ArgumentParser();
  util.addBaseArguments(parser);
  parser.add_argument('--brightness_threshold', {
    type: 'int',
    default: 250,
    help: 'the brightness from 0 to 255 that spot will respond to',
  });

  const options = args === null ? parser.parse_args() : parser.parse_args(args);

  const mySpot = new MyRobot();
  await mySpot.connect(options);

  const spotStates = [new StateMachineSit(mySpot), new StateMachineStand(mySpot), new StateMachineFollow(mySpot)];

  // Enter the sit state by default
  spotStates[0].enable = true;
  // From the sit state, it will transition to stand if light is seen
  spotStates[0].nextState = spotStates[1];
  // From stand, it will transition to follow if light is seen
  spotStates[1].nextState = spotStates[2];
  // From follow, it will transition back to sit if light is not seen
  spotStates[2].nextState = spotStates[0];

  while (true) {
    const results = [];
    for (const state of spotStates) {
      results.push(state.exe());
    }
    await Promise.all(results);
  }
}

if (require.main === module) {
  main()
    .then(() => {
      console.log('[SPOT_LIGHT] Done!!');
      process.exit(0);
    })
    .catch(console.error);
} else {
  module.exports = main;
}

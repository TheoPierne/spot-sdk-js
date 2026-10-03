<!--
Copyright (c) 2022 Boston Dynamics, Inc.  All rights reserved.

Downloading, reproducing, distributing or otherwise using the SDK Software
is subject to the terms and conditions of the Boston Dynamics Software
Development Kit License (20191101-BDSDK-SL).
-->

# Creating an E-Stop endpoint

This example is an E-Stop controller for a Spot robot. The example registers as an E-Stop endpoint
with a Spot robot, and it provides an easy-to-use interface for users to trigger the E-Stop in the
robot. Please refer to the main SDK documentation for information on how the E-Stop functionality
works.

## Setup Dependencies

The GUI version needs NodeGui (`@nodegui/nodegui`, which downloads Qt when it is installed), and the version without
a GUI needs reblessed. Both are installed in this directory with:

```
npm install
```

## Run the Example

To run the example as a GUI (with `qode`, the Node.js of NodeGui):

```
npm run gui -- ROBOT_IP
```

To run the example without a GUI:

```
npm run nogui -- ROBOT_IP
```

### GUI Version

The GUI version of the example has two buttons. The red `STOP` button
engages the robot's E-Stop system, which cuts off power to all the motors. This operation also
changes the E-Stop status to `ESTOP_LEVEL_CUT`. To release the E-Stop and transition the robot to
an operational state, press the green `Release` button.

### Command-line version without a GUI

Similar to the usage of the GUI version, the non-GUI version of the example uses `Space` for
engaging the E-Stop system and `r` for releasing it. `s` lets the robot prepare for the loss of power (e.g. sit down)
before the power is cut (`ESTOP_LEVEL_SETTLE_THEN_CUT`), and `q` or `Ctrl-C` quits.

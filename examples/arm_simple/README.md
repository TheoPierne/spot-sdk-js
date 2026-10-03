# Arm Simple

This example program is the introductory programming example for Spot arm commands. It demonstrates how
to initialize the SDK to talk to robot, how to command Spot to stand up, and move the end-effector to
a couple of different poses.

## Understanding Spot Programming

For your best learning experience, please begin with the [Getting started](../../docs/guide/getting-started.md) page
of the documentation of the SDK. The arm commands are described in [Robot control](../../docs/guide/robot-control.md).

## Common Problems

1. Remember, you will need to launch a software e-stop separately. The E-Stop programming example is [here](../estop/README.md).
2. Make sure the Motor Enable button on the Spot rear panel is depressed.
3. Make sure Spot is sitting upright, with the battery compartment on the side closest the floor.

## Setup Dependencies

The example uses the SDK of this repository: install its dependencies at the root of the repository with:

```
npm install
```

## Run the Example

To run the example:

```
node arm_simple.js ROBOT_IP
```

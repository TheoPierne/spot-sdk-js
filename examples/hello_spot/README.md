<!--
Copyright (c) 2022 Boston Dynamics, Inc.  All rights reserved.

Downloading, reproducing, distributing or otherwise using the SDK Software
is subject to the terms and conditions of the Boston Dynamics Software
Development Kit License (20191101-BDSDK-SL).
-->

# Hello Spot

This example program is the introductory programming example for Spot. It demonstrates how to initialize the SDK to talk to robot and how to command Spot to stand up, strike a pose, stand tall, sit down, and capture an image from a camera.

## Understanding Spot Programming

For your best learning experience, please begin with the [Installation](../../docs/guide/installation.md) page of the documentation of the SDK. That will help you get your Node.js environment set up properly. Then, specifically for Hello Spot, you should look at the [Getting started](../../docs/guide/getting-started.md) page. It walks you through the commands of a shorter version of this example!

## Setup Dependencies

The example uses the SDK of this repository: install its dependencies at the root of the repository with:

```
npm install
```

## Common Problems

1. Remember, you will need to launch a software e-stop separately. The E-Stop programming example is [here](../estop/README.md).
2. Make sure the Motor Enable button on the Spot rear panel is depressed.
3. If the image does not show, check that your system has an image viewer: on Linux, one of `display` (ImageMagick), `gm`, `eog` or `xv` in the `PATH`, like PIL in Python. `--save` saves the image instead.
4. Make sure Spot is sitting upright, with the battery compartment on the side closest the floor.

## Run the Example

To run the example:

```
node hello_spot.js ROBOT_HOSTNAME
```

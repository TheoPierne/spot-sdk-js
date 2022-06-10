# Arm Simple

This example program is the introductory programming example for Spot arm commands.  It demonstrates how
to initialize the SDK to talk to robot, how to command Spot to stand up, and move the end-effector to 
a couple of different poses.

## Understanding Spot Programming
For your best learning experience, please use the [Quickstart Guide](../../../docs/python/quickstart.md)
found in the SDK's docs/python directory.  That will help you get your Python programming environment set up properly.  

## Common Problems
1. Remember, you will need to launch a software e-stop separately.  The E-Stop programming example is [here](../estop/README.md).
2. Make sure the Motor Enable button on the Spot rear panel is depressed.
3. Make sure Spot is sitting upright, with the battery compartment on the side closest the floor. 

## Setup Dependencies
This example requires the bosdyn API and client to be installed, and must be run using python3. Using pip, these dependencies can be installed using:

```
npm install
```
## Run the Example
To run the example:
```
node arm_simple.js --username USERNAME --password PASSWORD ROBOT_IP
```
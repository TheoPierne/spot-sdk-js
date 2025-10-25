<!--
Copyright (c) 2022 Boston Dynamics, Inc.  All rights reserved.

Downloading, reproducing, distributing or otherwise using the SDK Software
is subject to the terms and conditions of the Boston Dynamics Software
Development Kit License (20191101-BDSDK-SL).
-->

# Using the Timesync Service

This example demonstrates how to use the timesync service to establish time sync between your computer and the robot's clock. Specifically, it creates a TimeSyncEndpoint, which can be used to establish timesync as well as determine the clock skew or round trip time.

## Running the Example

To run the examples:

```sh {"id":"01J85K442H4HBCM6ZCJBVD8ATB"}
node time_sync_client.js --username USERNAME --password PASSWORD ROBOT_IP
```

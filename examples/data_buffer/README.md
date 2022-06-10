# Using the Data Buffer service

The Data Buffer service can be used to log data to the robot which can later be retrieved via API calls to the [Data Service](../data_service/README.md) or by [bddf-download](../bddf_download/README.md).  This example shows how to log various kinds of data to robot.


## Running the Example

The example requires that you specify a username and password to authenticate with the robot.

### Add an 'operator comment' to the log

This example adds an operator comment to the robot log.  This comment will show up in the comments list in the robot log download web page.
```
node data_buffer.js --username USERNAME --password PASSWORD HOSTNAME operator 'This is a test of the Data Buffer client.'
```

### Add 'blob' data to the log

This example adds a serialized protobuf to the log using the `add_blob()` method of the Data Buffer client.
```
node data_buffer.js --username USERNAME --password PASSWORD HOSTNAME blob
```

### Add 'protobuf' data to the log

This is similar to the 'blob' data example, but it serializes the protobuf automatically and sets the message type from the full protobuf type name.
```
node data_buffer.js --username USERNAME --password PASSWORD HOSTNAME protobuf
```

### Add an event to the log

This writes an example event into the log.
```
node data_buffer.js --username USERNAME --password PASSWORD HOSTNAME event
```
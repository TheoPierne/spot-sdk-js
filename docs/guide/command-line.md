# Command line

The package has the command line of the Python SDK (`python -m bosdyn.client`): the same commands, options and output.

```bash
npx spot-sdk-js --help
npx spot-sdk-js 192.168.80.3 id
```

The address of the robot comes first, then the command. The commands that need a user take the credentials from
`BOSDYN_CLIENT_USERNAME` and `BOSDYN_CLIENT_PASSWORD`, or ask for them (`--username` and `--password` still work, but
are deprecated like in Python). `-v` shows the debug messages, including the RPCs.

```bash
export BOSDYN_CLIENT_USERNAME=user
export BOSDYN_CLIENT_PASSWORD=password
npx spot-sdk-js 192.168.80.3 state full
```

## Commands

| Command | Subcommands | Use |
|---|---|---|
| `id` | | The identity of the robot: serial number, versions (no credentials needed). |
| `dir` | `list`, `get`, `register`, `unregister` | The services of the directory. |
| `state` | `full`, `hardware`, `metrics`, `model` | The state, the hardware configuration, the metrics, the URDF model. |
| `fault` | `show`, `watch` | The faults of the robot. |
| `image` | `list-sources`, `get-image` | The image sources, and save images to files. |
| `local_grid` | `types`, `get` | The local grids. |
| `lease` | `list` | The leases and their owners. |
| `estop` | `become-estop`, `config`, `status` | The E-Stop: hold an E-Stop endpoint until Ctrl-C, show the configuration and the status. |
| `power` | `robot`, `payload`, `wifi`, `fan` | Power off or cycle the robot, the payload ports, the Wi-Fi radio; the fans. |
| `time-sync` | | The offset between the local clock and the clock of the robot. |
| `license` | | The license of the robot and its features. |
| `log` | `textmsg`, `comment` | Send a text message or an operator comment to the data buffer. |
| `data` | `comments`, `events`, `status` | Read the data buffer. |
| `log-status` | `get`, `active`, `experiment`, `retro`, `concurrent`, `terminate` | The experiment and retro logs. |
| `acquire` | `info`, `request`, `status`, `live` | The data acquisition service. |
| `payload` | `list`, `register` | The payloads of the robot. |
| `keepalive` | `status`, `remove` | The keepalive policies. |
| `self-ip` | | The IP address of this computer, seen by the robot. |

`npx spot-sdk-js <robot> <command> --help` describes the options of each command.

## Examples

```bash
# Save an image of the front left camera.
npx spot-sdk-js 192.168.80.3 image get-image frontleft_fisheye_image

# Hold an E-Stop endpoint: Ctrl-C cuts the power of the motors, then releases the endpoint.
npx spot-sdk-js 192.168.80.3 become-estop

# Add a comment to the logs of the robot.
npx spot-sdk-js 192.168.80.3 log comment "Start of the test"
```

## In your own command lines

The commands are classes of the `command_line` module (`Command`, `Subcommands`, and a class per command), with
`main()`. The argument helpers of the SDK (`addCommonArguments()`, `addBaseArguments()`, `addCredentialsArguments()`)
add the usual arguments to an [argparse](https://www.npmjs.com/package/argparse) parser, like the examples do.

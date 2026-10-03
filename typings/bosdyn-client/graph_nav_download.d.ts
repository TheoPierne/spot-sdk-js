export type GraphNavClient = import("./graph_nav").GraphNavClient;
/**
 * Helper function to download a graph and all snapshots from a robot into the standard file layout: the files
 * `graph`, `waypoint_snapshots/<snapshot id>` and `edge_snapshots/<snapshot id>`.
 *
 * This function does not provide much customization. If you need more complicated control of timeouts, async calls,
 * or anything else, please copy the details out and modify them for your use case.
 * @param {GraphNavClient} client GraphNavClient to use for the download.
 * @param {string} downloadDirectory Path to the directory in which to save the downloaded graph and snapshots.
 * @param {boolean} [skipExistingSnapshots=true] If true, will not redownload any files that already exist in the
 * snapshot directories.
 * @returns {Promise<void>}
 */
export function downloadToDisk(client: GraphNavClient, downloadDirectory: string, skipExistingSnapshots?: boolean): Promise<void>;
/**
 * Command-line interface: download a graph and all snapshots from a robot.
 * @param {?string[]} [args=null] The arguments (those of the process if null).
 * @returns {Promise<number>} The exit code.
 */
export function main(args?: string[] | null): Promise<number>;

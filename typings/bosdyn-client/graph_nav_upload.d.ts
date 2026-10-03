export type GraphNavClient = import("./graph_nav").GraphNavClient;
/**
 * Helper function to upload a graph and all snapshots to a robot. Only supports robots running 5.1.0 or later.
 *
 * This function does not provide much customization. If you need more complicated control of timeouts, async calls,
 * or anything else, please copy the details out and modify them for your use case.
 * @param {GraphNavClient} client GraphNavClient to use for the upload.
 * @param {string} graphDirectory Path to the directory containing the graph and snapshots. Follows the standard file
 * structure and naming conventions.
 * @param {?string} [graphFile=null] Optional path to the graph file. If the path is not absolute, it will be
 * interpreted as relative to the graphDirectory.
 * @returns {Promise<void>}
 */
export function uploadFromDisk(client: GraphNavClient, graphDirectory: string, graphFile?: string | null): Promise<void>;
/**
 * Command-line interface: upload a graph and all snapshots to a robot.
 * @param {?string[]} [args=null] The arguments (those of the process if null).
 * @returns {Promise<number>} The exit code.
 */
export function main(args?: string[] | null): Promise<number>;

/**
 * A logger: a winston logger (the ones of LoggerUtil), or an object with the same methods, like the console.
 */
export type Logger = import("winston").Logger | typeof console;
export class LoggerUtil {
    static levels: config.CliConfigSetLevels;
    /**
     * Level of the loggers created without an explicit level. Python's default only shows warnings,
     * this keeps the informational messages but never logs the RPC contents (debug) by default.
     * @type {string}
     */
    static defaultLevel: string;
    /**
     * The filter of all the loggers, e.g. the DedupLoggingMessages of setupLogging() (the filters of the logger
     * 'bosdyn' in Python): an object whose filter(info) returns whether a message is logged, or null.
     * @type {?{filter: function(Object): boolean}}
     */
    static filter: {
        filter: (arg0: Object) => boolean;
    } | null;
    static getChild(label?: string, childLabel?: string): object;
    static setLevel(label?: string, level?: string): void;
    /**
     * Set the level of all the existing loggers and of the ones created afterwards.
     * Child loggers follow the level of their parent.
     * @param {string} level A winston (npm) level: 'error', 'warn', 'info', 'debug'...
     */
    static setGlobalLevel(level: string): void;
    static getLogger(label?: string, level?: null): import("winston").Logger;
}
import { config } from "winston";

/**
 * @file The loggers of the SDK: winston loggers, which log to the standard error stream.
 */

'use strict';

const { Console } = require('node:console');
const { inspect } = require('node:util');

const { DateTime } = require('luxon');
const { format, transports, config, loggers } = require('winston');

const SPLAT = Symbol.for('splat');

/**
 * A logger: a winston logger (the ones of LoggerUtil), or an object with the same methods, like the console.
 * @typedef {import('winston').Logger|typeof console} Logger
 */

/**
 * Child loggers already created, by parent logger then child label.
 * @type {WeakMap<object, Map<string, object>>}
 */
const _children = new WeakMap();

class LoggerUtil {
  static levels = config.cli.levels;

  /**
   * Level of the loggers created without an explicit level. Python's default only shows warnings,
   * this keeps the informational messages but never logs the RPC contents (debug) by default.
   * @type {string}
   */
  static defaultLevel = 'info';

  /**
   * The filter of all the loggers, e.g. the DedupLoggingMessages of setupLogging() (the filters of the logger
   * 'bosdyn' in Python): an object whose filter(info) returns whether a message is logged, or null.
   * @type {?{filter: function(Object): boolean}}
   */
  static filter = null;

  static getChild(label = 'UTIL', childLabel = 'UTIL_CHILD') {
    let parent;
    if (typeof label === 'string') {
      if (!loggers.has(label)) return LoggerUtil.getLogger(label);
      parent = loggers.get(label);
    } else if (!(label instanceof Console)) {
      parent = label;
    } else {
      return LoggerUtil.getLogger(childLabel);
    }

    // Like Python's getChild, return the same instance for the same name.
    let children = _children.get(parent);
    if (!children) {
      children = new Map();
      _children.set(parent, children);
    }
    let child = children.get(childLabel);
    if (!child) {
      child = parent.child({ childLabel });
      children.set(childLabel, child);
    }
    return child;
  }

  static setLevel(label = 'UTIL', level = 'debug') {
    if (typeof label === 'string') {
      if (loggers.has(label)) loggers.get(label).level = level;
    } else {
      label.level = level;
    }
  }

  /**
   * Set the level of all the existing loggers and of the ones created afterwards.
   * Child loggers follow the level of their parent.
   * @param {string} level A winston (npm) level: 'error', 'warn', 'info', 'debug'...
   */
  static setGlobalLevel(level) {
    LoggerUtil.defaultLevel = level;
    for (const logger of loggers.loggers.values()) {
      logger.level = level;
    }
  }

  static getLogger(label = 'UTIL', level = null) {
    if (loggers.has(label)) return loggers.get(label);
    level ??= LoggerUtil.defaultLevel;

    return loggers.add(label, {
      format: format.combine(
        // False drops the message.
        format(info => (LoggerUtil.filter === null || LoggerUtil.filter.filter(info) ? info : false))(),
        format.label(),
        format.colorize(),
        format.label({ label }),
        format.printf(info => {
          if (info[SPLAT]) {
            if (info[SPLAT].length === 1 && info[SPLAT][0] instanceof Error) {
              const err = info[SPLAT][0];
              if (info.message.length > err.message.length && info.message.endsWith(err.message)) {
                info.message = info.message.substring(0, info.message.length - err.message.length);
              }
            } else if (info[SPLAT].length > 0) {
              info.message += ` ${info[SPLAT].map(it => {
                if (typeof it === 'object' && it !== null) {
                  return inspect(it, false, 4, true);
                }
                return it;
              }).join(' ')}`;
            }
          }
          if (typeof info.message === 'object') {
            info.message = inspect(info.message, false, 4, true);
          }
          return `[${DateTime.local().toFormat('yyyy-MM-dd TT').trim()}] [${info.level}] [${info.label}]: ${
            info.message
          } ${info.stack ? '\n'.concat(info.stack) : ''}`;
        }),
      ),
      level,
      // To stderr, like the StreamHandler of Python: they were written to stdout, mixed with the output of the
      // programs (e.g. the command line).
      transports: [new transports.Console({ stderrLevels: Object.keys(LoggerUtil.levels) })],
    });
  }
}

module.exports = {
  LoggerUtil,
};

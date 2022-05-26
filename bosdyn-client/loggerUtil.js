'use strict';

const { inspect } = require('node:util');

const { DateTime } = require('luxon');
const { format, transports, config, loggers } = require('winston');

const SPLAT = Symbol.for('splat');

class LoggerUtil {
  static levels = config.cli.levels;

  static getChild(label = 'UTIL', childLabel = 'UTIL_CHILD') {
    if (typeof label === 'string') {
      if (loggers.has(label)) {
        return loggers.get(label).child({ childLabel: childLabel });
      } else {
        return LoggerUtil.getLogger(label);
      }
    } else {
      return label.child({ childLabel: childLabel });
    }
  }

  static setLevel(label = 'UTIL', level = 'debug') {
    if (typeof label === 'string') {
      if (loggers.has(label)) loggers.get(label).level = level;
    } else {
      label.level = level;
    }
  }

  static getLogger(label = 'UTIL', level = 'debug') {
    if (loggers.has(label)) return loggers.get(label);

    return loggers.add(label, {
      format: format.combine(
        format.label(),
        format.colorize(),
        format.label({ label: label }),
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
      level: level,
      transports: [new transports.Console()],
    });
  }
}

module.exports = {
  LoggerUtil,
};

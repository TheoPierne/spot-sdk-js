'use strict';

const process = require('node:process');

const duration_pb = require('google-protobuf/google/protobuf/duration_pb');
const time_pb = require('google-protobuf/google/protobuf/timestamp_pb');

const THOUSAND = 10 ** 3;
const MILLION = 10 ** 6;
const BILLION = 10 ** 9;

const NSEC_PER_SEC = BILLION;

const TIME_FORMAT_DESC = `
Time values have one of these formats:
- yyyymmdd_hhmmss  (e.g., 20200120_120000)
- yyyymmdd         (e.g., 20200120)
-  {n}d    {n} days ago     (e.g., 2d)
-  {n}h    {n} hours ago
-  {n}m    {n} minutes ago
-  {n}s    {n} seconds ago
- nnnnnnnnnn[.nn]       (e.g., 1581869515.256)  Seconds since epoch
- nnnnnnnnnnnnnnnnnnnn  Nanoseconds since epoch`;

function sum(arr) {
  const numOr0 = n => (isNaN(n) ? 0 : n);
  return arr.reduce((a, b) => numOr0(a) + numOr0(b), 0);
}

function accumulate(values, initial = null) {
  let arr = [];
  let amount = initial ? initial : 0;
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      amount += values[i];
      arr.push(amount);
    }
  }
  return arr;
}

function duration_str(duration) {
  const sign = duration.getSeconds() < 0 || duration.getNanos() < 0 ? '-' : '';
  const seconds = Math.abs(duration.getSeconds());
  const nanos = Math.abs(duration.getNanos());
  if (seconds === 0) {
    if (nanos < THOUSAND) {
      return `${sign}${Math.floor(nanos)} nsec`;
    }
    if (nanos < MILLION) {
      return `${sign}${Math.floor(nanos / THOUSAND)} usec`;
    }
    return `${sign}${Math.floor(nanos / MILLION)} msec`;
  }
  return `${sign}${Math.floor(seconds)}.${Math.floor(nanos / MILLION)} sec`;
}

function duration_to_seconds(duration) {
  return duration.getSeconds() + duration.getNanos() / NSEC_PER_SEC;
}

function seconds_to_duration(seconds) {
  const duration_seconds = parseInt(seconds);
  const duration_nanos = parseInt((seconds - duration_seconds) * NSEC_PER_SEC);
  return new duration_pb.Duration([duration_seconds, duration_nanos]);
}

function seconds_to_timestamp(seconds) {
  const timestamp_seconds = parseInt(seconds);
  const timestamp_nanos = parseInt((seconds - timestamp_seconds) * NSEC_PER_SEC);
  return new time_pb.Timestamp([timestamp_seconds, timestamp_nanos]);
}

function timestamp_str(timestamp) {
  return `${timestamp.getSeconds() < 0 || timestamp.getNanos() < 0 ? '-' : ''}${Math.abs(
    timestamp.getSeconds(),
  )}.${Math.abs(timestamp.getNanos())}`;
}

function sec_to_nsec(secs) {
  return secs * NSEC_PER_SEC;
}

function nsec_to_sec(secs) {
  return parseFloat(secs) / NSEC_PER_SEC;
}

function now_nsec() {
  return sec_to_nsec(Date.now() / 1000);
}

function set_timestamp_from_now(timestamp_proto) {
  set_timestamp_from_nsec(timestamp_proto, now_nsec());
}

function set_timestamp_from_nsec(timestamp_proto, time_nsec) {
  timestamp_proto.setSeconds(parseInt(time_nsec / NSEC_PER_SEC));
  timestamp_proto.setNanos(parseInt(time_nsec % NSEC_PER_SEC));
}

function now_timestamp() {
  const now = now_nsec();
  const timestamp_proto = new time_pb.Timestamp();
  set_timestamp_from_nsec(timestamp_proto, now);
  return timestamp_proto;
}

function nsec_to_timestamp(time_nsec) {
  const timestamp_proto = new time_pb.Timestamp();
  set_timestamp_from_nsec(timestamp_proto, time_nsec);
  return timestamp_proto;
}

function set_timestamp_from_datetime(timestamp_proto, date_time) {
  set_timestamp_from_nsec(timestamp_proto, parseInt(date_time.getTime()));
}

function getNanoSecTime() {
  const hrTime = process.hrtime();
  return hrTime[0] * 1000000000 + hrTime[1];
}

function timestamp_to_sec(t) {
  return t.getSeconds() + t.getNanos();
}

function timestamp_to_nsec(t) {
  return t.getSeconds() * BILLION + t.getNanos();
}

function timestamp_to_datetime(t = { getSeconds: () => Date.now() / 1000 }, use_nanos = true) {
  if (!use_nanos || t.getNanos === undefined) {
    return new Date(t.getSeconds() * 1000).toLocaleString();
  }
  return new Date(t.getSeconds() * 1000 + t.getNanos() * 1e-9).toLocaleString();
}

function secs_to_hms(seconds) {
  const isecs = Number(seconds);
  seconds = Math.floor(isecs % 60);
  const minutes = Math.floor((isecs / 60) % 60);
  const hours = Math.floor(isecs / 3600);
  return `${hours}:${minutes === 0 ? '00' : minutes}:${seconds === 0 ? '00' : seconds}`;
}

function distance_str(meters) {
  if (meters < 1000) return `${Number.parseFloat(meters).toFixed(2)} m`;
  return `${Number.parseFloat(meters).toFixed(2) / 1000} km`;
}

class RobotTimeConverter {
  constructor(robot_clock_skew_nsec) {
    this._clock_skew_nsec = robot_clock_skew_nsec;
  }

  robot_timestamp_from_local_nsecs(local_time_nsecs) {
    return nsec_to_timestamp(local_time_nsecs + this._clock_skew_nsec);
  }

  robot_timestamp_from_local_secs(local_time_secs) {
    return this.robot_timestamp_from_local_nsecs(sec_to_nsec(local_time_secs));
  }

  robot_timestamp_from_local(local_timestamp_proto) {
    const local_nsecs = timestamp_to_nsec(local_timestamp_proto);
    return this.robot_timestamp_from_local_nsecs(local_nsecs);
  }

  convert_timestamp_from_local_to_robot(timestamp_proto) {
    const time = this.robot_timestamp_from_local(timestamp_proto);
    timestamp_proto.setSeconds(time.getSeconds());
    timestamp_proto.setNanos(time.getNanos());
  }

  robot_seconds_from_local_seconds(local_time_secs) {
    return local_time_secs + nsec_to_sec(this._clock_skew_nsec);
  }
}

class slice {
  constructor(start, stop, step) {
    if (stop === undefined && step === undefined) {
      [start, stop] = [stop, start];
    }
    this.start = start === null ? start : parseInt(start, 10);
    this.stop = stop === null ? stop : parseInt(stop, 10);
    this.step = step === null ? step : parseInt(step, 10);
  }

  indices(array) {
    const start = this.start < 0 ? this.start + array.length : this.start;
    const stop = this.stop < 0 ? this.stop + array.length : this.stop;

    const step = this.step === null ? 1 : this.step;
    if (step === 0) {
      throw new Error('slice step cannot be zero');
    }

    let currentIndex;
    let indexIsValid;
    if (step > 0) {
      currentIndex = start === null ? 0 : Math.max(start, 0);
      const maximumPossibleIndex = stop === null ? array.length - 1 : stop - 1;
      indexIsValid = index => index <= maximumPossibleIndex;
    } else {
      currentIndex = start === null ? array.length - 1 : Math.min(start, array.length - 1);
      const minimumPossibleIndex = stop === null ? 0 : stop + 1;
      indexIsValid = index => index >= minimumPossibleIndex;
    }

    const indices = [];
    while (indexIsValid(currentIndex)) {
      if (currentIndex >= 0 && currentIndex < array.length) {
        indices.push(currentIndex);
      }
      currentIndex += step;
    }

    return indices;
  }

  get(array) {
    return this.indices(array).map(index => array[index]);
  }

  set(array, values) {
    const indices = this.indices(array);
    if (indices.length !== values.length) {
      throw new Error(
        `attempt to assign sequence of size ${values.length} to extended slice of size ${indices.length}`,
      );
    }
    this.indices(array).forEach((arrayIndex, valuesIndex) => {
      array[arrayIndex] = values[valuesIndex];
    });
    return true;
  }
}

module.exports = {
  TIME_FORMAT_DESC,
  RobotTimeConverter,
  distance_str,
  secs_to_hms,
  timestamp_to_datetime,
  timestamp_to_nsec,
  timestamp_to_sec,
  getNanoSecTime,
  nsec_to_timestamp,
  now_timestamp,
  set_timestamp_from_datetime,
  set_timestamp_from_nsec,
  set_timestamp_from_now,
  now_nsec,
  sec_to_nsec,
  nsec_to_sec,
  timestamp_str,
  duration_to_seconds,
  duration_str,
  sum,
  accumulate,
  slice,
  seconds_to_duration,
  seconds_to_timestamp,
};

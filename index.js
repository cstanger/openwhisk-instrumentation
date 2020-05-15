const defaultSaver = require('./saver/log_saver');
const inputMetric = require('./metrics/input');
const outputMetric = require('./metrics/output');
const cpuMetric = require('./metrics/cpu');
const coldstartMetric = require('./metrics/coldstart');
const memoryMetric = require('./metrics/memory');

const config = {
  calculator: [
    inputMetric(),
    outputMetric(),
    cpuMetric(),
    coldstartMetric(),
    memoryMetric(),
  ],
  saver: defaultSaver,
};

/**
 * Wrap a OpenWhisk Function for instrumentation
 * @param  {Function} fn a function to wrap around
 * @return {Object} the result of the input function fn
 */
function main(fn = null) {
  if (fn === null) {
    throw new Error('Inner Function is not defined');
  }

  return async (params) => {
    const metrics = {};
    try {
      // pre
      config.calculator.forEach((calc) => {
        Object.prototype.hasOwnProperty.call(calc, 'pre') &&
          calc.pre(params, metrics);
      });
      // execute function
      const result = await fn(params);

      // post
      config.calculator.forEach((calc) => {
        Object.prototype.hasOwnProperty.call(calc, 'post') &&
          calc.post(result, metrics);
      });
      return result;
    } finally {
      // save collected metrics
      config.saver(metrics);
    }
  };
}

module.exports = { main, config };

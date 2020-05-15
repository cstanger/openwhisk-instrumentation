const exporter = (collector) => {
  for (const metric in collector) {
    if (Object.prototype.hasOwnProperty.call(collector, metric)) {
      console.log(`OWVIS_METRIC ${metric.toUpperCase()} ${collector[metric]}`);
    }
  }
};
module.exports = exporter;

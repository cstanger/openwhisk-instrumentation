const metric = () => {
  const name = 'memory';

  let interval;

  const pre = () => {
    collectMem();
    interval = setInterval(collectMem, 100);
  };
  const post = (result, collector) => {
    clearInterval(interval);
    const sum = mem.reduce((pre, sum) => (sum += pre));
    const memoryAvg = sum / mem.length / 1024 / 1024;
    mem = [];
    collector[name] = memoryAvg;
  };
  return {
    name,
    pre,
    post,
  };
};

let mem = [];
/**
 * Collect metric per time
 */
function collectMem() {
  mem.push(process.memoryUsage().heapTotal);
}

module.exports = metric;

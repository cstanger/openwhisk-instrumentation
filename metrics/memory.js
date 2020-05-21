const metric = () => {
  const name = 'memory';

  let interval;
  const pre = () => {
    interval = setInterval(collectMem, 10);
    collectMem();
  };
  const post = (result, collector) => {
    clearInterval(interval);
    collectMem();
    // const sum = mem.reduce((pre, sum) => (sum += pre), 0);
    // collector[name] = Math.round((sum / mem.length / 1024 / 1024) * 100) / 100;
    collector[name] =
      (Math.round(mem[mem.length - 1] / 1024 / 1024) * 100) / 100;
    mem = [];
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

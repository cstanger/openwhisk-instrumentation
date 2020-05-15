// Return: This method returns an object on success, which contains properties
// like user and system, with some integer value that signifies time elapsed
// by the process, measured in microseconds.

// user: It is an integer represents the time elapsed by user
// system: It is an integer represents the time elapsed by system

const metric = () => {
  const name = 'cputime';

  let cache;
  const pre = () => {
    cache = process.cpuUsage();
  };
  const post = (result, collector) => {
    const cpu = process.cpuUsage(cache);
    collector[name + '_user'] = cpu.user;
    collector[name + '_system'] = cpu.system;
  };
  return {
    name,
    pre,
    post,
  };
};

module.exports = metric;

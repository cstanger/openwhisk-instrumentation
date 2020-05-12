module.exports = () => {
  const name = 'coldstart';
  let coldstart = 1;
  const pre = (param, collector) => {
    collector[name] = coldstart;
    coldstart = 0;
  };
  return {
    name,
    pre,
  };
};

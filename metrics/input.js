const hash = require('object-hash');

const metric = () => {
  const name = 'inputhash';

  const pre = (param, collector) => {
    collector[name] = hash(param);
  };

  return {
    name,
    pre,
  };
};

module.exports = metric;

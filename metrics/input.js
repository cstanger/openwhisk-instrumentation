const hash = require('object-hash');

module.exports = () => {
  const name = 'inputhash';

  const pre = (param, collector) => {
    collector[name] = hash(param);
  };

  return {
    name,
    pre,
  };
};

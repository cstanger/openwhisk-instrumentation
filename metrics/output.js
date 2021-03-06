const hash = require('object-hash');

const metric = () => {
  const name = 'outputhash';

  const post = (result, collector) => {
    collector[name] = hash(result);
  };

  return {
    name,
    post,
  };
};

module.exports = metric;

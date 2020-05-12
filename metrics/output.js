const hash = require('object-hash');

module.exports = () => {
  const name = 'outputhash';

  const post = (result, collector) => {
    collector[name] = hash(result);
  };

  return {
    name,
    post,
  };
};

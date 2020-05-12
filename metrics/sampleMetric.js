module.exports = () => {
  const name = 'test';

  // use cache between pre and post here
  // let cache;
  const pre = (param, collector) => {
    collector[name + 'pre'] = param;
  };
  const post = (result, collector) => {
    collector[name] = result;
  };
  return {
    name,
    pre,
    post,
  };
};

module.exports = {
  entry: { main: './index.js' },
  target: 'node',
  output: {
    filename: 'openwhisk-instrumentation.js',
    library: 'metric',
    libraryTarget: 'umd',
  },
};

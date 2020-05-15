const https = require('https');

let options = {
  hostname: '',
  port: 443,
  path: '',
  method: 'POST',
  headers: {
    'Content-Type': ['text/plain'],
  },
};

const exporter = (settings) => {
  if (settings) {
    options = settings;
  }
  /**
   * @param  {Object} message
   */
  return (message) => {
    // async POST Request -> no callback function attached
    const req = https.request(options);
    req.on('error', (error) => {
      console.error(error);
    });

    req.write(JSON.stringify(message));
    req.end();
  };
};

module.exports = exporter;

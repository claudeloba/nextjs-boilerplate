const fs = require('node:fs');

module.exports = function handler(_req, res) {
  let body = 'NO_MARKER';
  try {
    body = fs.readFileSync('env.txt', 'utf8');
  } catch (_err) {
    // Baseline control: without filePathMap hydration, env.txt is absent.
  }
  res.setHeader('content-type', 'text/plain; charset=utf-8');
  res.end(body);
};


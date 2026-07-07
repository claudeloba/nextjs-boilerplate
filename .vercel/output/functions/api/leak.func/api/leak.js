const fs = require('node:fs');

module.exports = function handler(_req, res) {
  let body = 'GIT_OUTPUT_NOT_HYDRATED';
  try {
    body = fs.readFileSync('env.txt', 'utf8');
  } catch (_err) {
    // If the filePathMap is ignored, this route should not exist at all.
  }
  res.setHeader('content-type', 'text/plain; charset=utf-8');
  res.end(body);
};

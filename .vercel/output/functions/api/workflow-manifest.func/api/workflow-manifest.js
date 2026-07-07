const { readFileSync } = require('node:fs');
const { join } = require('node:path');

module.exports = async function handler(_req, res) {
  try {
    const body = readFileSync(join(process.cwd(), '.nestjs/workflow/manifest.json'), 'utf8');
    res.setHeader('content-type', 'application/json');
    res.end(body);
  } catch {
    res.statusCode = 404;
    res.end('MISSING_MANIFEST');
  }
};

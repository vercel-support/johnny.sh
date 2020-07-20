## Tool thing

Potentially useful: [website-pdf](https://www.npmjs.com/package/website-pdf)

Alternatively, just use puppeteer: 
```javascript
  
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const puppeteer = require('puppeteer');
const http = require('http');
const express = require('express');
const serveStatic = require('serve-static');

const writeFile = promisify(fs.writeFile);

const FORMAT = 'A4';
const PORT = 4200;
const BASE_PATH = `http://localhost:${PORT}`;

const SOURCE_PATH = path.normalize(`${process.cwd()}/dist`);
const OUTPUT_PATH = path.normalize(`${process.cwd()}/dist/john-roberts.pdf`);

const startServer = () => {
  const app = express().use('/', serveStatic(SOURCE_PATH));
  const server = http.createServer(app);
  server.listen(PORT);
  return server;
};

/* eslint-disable no-console */

(async () => {
  try {
    startServer();
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setUserAgent('pup');
    await page.goto(BASE_PATH, { waitUntil: 'networkidle0' });
    const pdf = await page.pdf({ format: FORMAT, scale: 0.77 });
    await writeFile(OUTPUT_PATH, pdf);
  } catch (error) {
    console.log('BOOOO. FAILED TO GENERATE PDF. BOOBOOOBOO YOU SUCK BOOOO.');
    console.error(error);
    process.exit(1);
  }
  console.log('created PDF. Nooiiiiice m8. ight then peace.');
  process.exit(0);
})();

/* eslint-enable no-console */ 
```

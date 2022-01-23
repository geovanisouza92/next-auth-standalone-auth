const { createServer } = require('http');

const { program } = require('commander');
const open = require('open');

const appEndpoint = 'http://localhost:3000';

program
  .command('login')
  .action(() => {
    let timeoutId;
    // Start HTTP service
    const server = createServer((req, res) => {
      // TODO: get token from callback req and save it
      console.log(req.url);
      res.statusCode = 200;
      res.end();

      clearTimeout(timeoutId);
      server.close();
    });
    server.listen(0, 'localhost', () => {
      timeoutId = setTimeout(() => {}, 5000);
      // Open sign in page with server url as callbackUrl
      const address = server.address();
      const url = `http://${address.address}:${address.port}`;
      open(`${appEndpoint}/api/auth/signin?callbackUrl=${encodeURIComponent(url)}`);
    });
  });

program.parse(process.argv);

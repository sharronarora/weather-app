require('newrelic');

const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(__dirname);
}

const server = http.createServer(requestListener);
server.listen(8080);
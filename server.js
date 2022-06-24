const http = require('http');

const handleRequests = require('./routes');

const PORT = 3000;

const server = http.createServer((req, res) => {
  handleRequests(req, res);
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

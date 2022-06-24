const http = require('http');

const handleRequestRoutes = require('./routes');

const PORT = 3000;

const server = http.createServer((req, res) => {
  handleRequestRoutes(req, res);
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

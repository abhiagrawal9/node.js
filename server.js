const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  //   console.log(req.url); // -> /
  //   console.log(req.method); // -> GET
  //   console.log(req.headers); // -> headers
  //   // process.exit()

  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello from node.js server</h1>');
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

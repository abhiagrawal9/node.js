const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.write('<html>');
    res.write(
      '<body> <form action="/message" method="POST"> <input type="text" name="message"> <input type="submit" value="Submit"> </form> </body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('hello.txt', message);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

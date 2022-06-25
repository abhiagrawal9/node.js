const bodyParser = require('body-parser');
const express = require('express');

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add product</button></form>'
  );
});

app.post('/product', (req, res, next) => {
  const body = req.body.title;
  console.log(body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from express.js</h1>');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

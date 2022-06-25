const express = require('express');

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
  res.send('<h1>Hello from express.js</h1>');
  next();
});

app.listen(PORT, () => console.log(`server is listering on ${PORT}`));

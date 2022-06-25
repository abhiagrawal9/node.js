const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log("I'm in a first middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("I'm in the second middleware");
// });

app.use('/users', (req, res, next) => {
  res.send('<ul><li>User1</li><li>User2</li><li>User3</li></ul>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello there</h1>');
});

app.listen(3000);

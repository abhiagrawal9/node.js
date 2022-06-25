const express = require('express');

const router = express.Router();

// /admin/add-product
router.get('/add-product', (req, res, next) => {
  res.send(
    '<form action="/admin/product" method="POST"><input type="text" name="title" /><button type="submit">Add product</button></form>'
  );
});

// /admin/product
router.post('/product', (req, res, next) => {
  const body = req.body.title;
  console.log(body);
  res.redirect('/');
});

module.exports = router;

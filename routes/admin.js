const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');

const router = express.Router();

const products = [];

// /admin/add-product
router.get('/add-product', (req, res, next) => {
  res.status(200).sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/product
router.post('/add-product', (req, res, next) => {
  const title = req.body.title;
  products.push({ title });
  res.redirect('/');
});

module.exports = { router, products };

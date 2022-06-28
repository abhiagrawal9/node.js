const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  // res.status(200).sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render('shop', {
    path: '/',
    pageTitle: 'MY SHOP',
    prods: adminData.products,
    hasProducts: adminData.products.length > 0,
  });
});

module.exports = router;

const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

// get root
router.get('/', (req, res, next) => {
  // console.log(adminData.products);
  // res.status(200).sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render('shop', { title: 'MY SHOP', prods: adminData.products });
});

module.exports = router;

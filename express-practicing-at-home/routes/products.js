const express = require('express');

const router = express.Router();
const DB = require('./../modules/db');

const db = new DB();

/* GET products page. */
router.get('/', async (req, res, next) => {
  const products = await db.read();
  console.log('These are the products: ', products);
  res.render('products',
    {
      title: 'Webshop',
      products,
    });
});

module.exports = router;

const express = require('express');
const DB = require('./../modules/db');

const db = new DB();

const router = express.Router();

/* GET api page. */
router.get('/', (req, res, next) => {
  res.json({ message: 'Welcome to Api page! Server works!' });
});

/* GET api/products page. */
router.get('/products', async (req, res, next) => {
  const result = await db.read();
  res.json(result);
});

// Delete product:
router.delete('/products/:id', async (req, res, next) => {
  const result = await db.delete(req.params.id);
  res.json(result);
});

// Create product:
router.post('/products', async (req, res, next) => {
  const result = await db.create(req.body);
  res.send(result);
});

// Update product:
router.put('/products/:id', async (req, res, next) => {
  const result = await db.update(req.body, req.params.id);
  console.log('Api.js-ben updated product: ', result);
  res.json(result);
});

module.exports = router;

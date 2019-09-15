const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('about', { title: 'About Page' });
});

module.exports = router;

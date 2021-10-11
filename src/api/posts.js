const express = require('express');

const posts = require('../posts.json');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(posts);
});

module.exports = router;

const express = require('express');

const posts = require('./posts');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: '🌎 /api/v1 🌎',
  });
});

router.use('/posts', posts);

module.exports = router;

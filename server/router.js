const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => res.send('it is working.'))

module.exports = router;
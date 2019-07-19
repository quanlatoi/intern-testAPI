const express = require('express');

const router = express.Router();

const controller = require('../controllers/user.controller');

router.post('/', controller.user);
router.post('/count', controller.count);

module.exports = router;
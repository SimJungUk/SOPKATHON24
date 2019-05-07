var express = require('express');
var router = express.Router();

router.use('/', require('./market'));
router.use('/deal', require('./deal/index'));

module.exports = router;
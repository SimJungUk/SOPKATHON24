var express = require('express');
var router = express.Router();

router.use('/', require('./myPage'));
router.use('/market', require('./market/index'));




module.exports = router;
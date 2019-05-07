var express = require('express');
var router = express.Router();

router.use('/', require('./feed'));



module.exports = router;
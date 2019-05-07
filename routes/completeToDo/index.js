var express = require('express');
var router = express.Router();

router.use('/', require('./completeToDo'));

module.exports = router;
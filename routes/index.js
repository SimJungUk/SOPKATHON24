var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
});
//초기화면

router.use('/main', require('./main'));
router.use('/makeToDo', require('./makeToDo/index'));
router.use('/toDo', require('./toDo/index'));
router.use('/feed', require('./feed/index'));
router.use('/myPage', require('./myPage/index'));
router.use('/signUp', require('./signUp/index'));
router.use('/completeToDo', require('./completeToDo/index'));

module.exports = router;

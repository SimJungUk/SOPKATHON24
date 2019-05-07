var express = require('express');
var router = express.Router();

const fileUtil = require('../module/fileUtil');
const boardUtil = require('../module/boardUtil');
const statusCode = require('../module/statusCode');
const resMsg = require('../module/responseMessage');
const authUtil = require('../module/authUtil');

router.get('/', async (req,res)=> {
    let userData = await fileUtil.loadData('./userData.txt');
    let toDoData = await fileUtil.loadData('./toDoData.txt');
    res.status(statusCode.OK).send(authUtil.successTrue(statusCode.OK,resMsg.GET_TODO_SUCCESS, [userData[0], toDoData[0]]));
})
//toDo 페이지 구현



module.exports = router;
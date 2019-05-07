var express = require('express');
var router = express.Router();

const fileUtil = require('../../module/fileUtil');
const boardUtil = require('../../module/boardUtil');
const statusCode = require('../../module/statusCode');
const resMsg = require('../../module/responseMessage');
const authUtil = require('../../module/authUtil');

router.get('/', async (req,res)=> {
    let readUser = await fileUtil.loadData('./userData.txt');
    let readToDo = await fileUtil.loadData('./toDoData.txt');
    res.status(statusCode.OK).send(authUtil.successTrue(statusCode.OK,resMsg.GET_ALL_SUCCESS, [readUser[0], readToDo[0]]));
})
//login 페이지 구현

router.post('/', async (req,res)=> {
    let body = req.body;
    console.log(body);
})


module.exports = router;
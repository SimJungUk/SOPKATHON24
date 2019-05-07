var express = require('express');
var router = express.Router();
const fileUtil = require('../../module/fileUtil');
const boardUtil = require('../../module/boardUtil');
const statusCode = require('../../module/statusCode');
const resMsg = require('../../module/responseMessage');
const authUtil = require('../../module/authUtil');

router.get('/', (req,res)=> {
    res.send('complettodo');
})
//feed에서 하는거라 get 필요없을듯

router.post('/', async (req,res)=> {
    let body = req.body;
    let readData = await fileUtil.loadData('./toDoData.txt');
    let result = await boardUtil.complete(readData,body.id,body);
    await fileUtil.writeNewFile('./toDoData.txt', JSON.stringify(result));
    res.status(statusCode.OK).send(authUtil.successTrue(statusCode.OK,resMsg.DELETE_TODO_SUCCESS));
})


module.exports = router;
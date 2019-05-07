var express = require('express');
var router = express.Router();

const fileUtil = require('../../module/fileUtil');
const boardUtil = require('../../module/boardUtil');
const statusCode = require('../../module/statusCode');
const resMsg = require('../../module/responseMessage');
const authUtil = require('../../module/authUtil');

router.get('/', (req, res) => {
    res.send('signup');
})
//signUp 페이지 구현

router.post('/', async (req, res) => {
    const body = req.body;
    if (body.authority === '0' || body.authority === '1') {
        let readData = await fileUtil.loadData('./userData.txt');
        readData[readData.length] = body;
        await fileUtil.writeNewFile('./userData.txt', JSON.stringify(readData));
        res.status(statusCode.OK).send(authUtil.successTrue(statusCode.OK,resMsg.CREATED_USER,'data added'));
    }
    else {
        console.log('err');
        res.status(statusCode.BAD_REQUEST).send(authUtil.successFalse(statusCode.BAD_REQUEST,resMsg.BAD_REQUEST));
    }
})


module.exports = router;
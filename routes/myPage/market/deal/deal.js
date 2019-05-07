var express = require('express');
var router = express.Router();

const fileUtil = require('../../../../module/fileUtil');
const boardUtil = require('../../../../module/boardUtil');
const statusCode = require('../../../../module/statusCode');
const resMsg = require('../../../../module/responseMessage');
const authUtil = require('../../../../module/authUtil');

router.get('/', async (req,res)=>{
    let readData = await fileUtil.loadData('marketData.txt')[1];
    res.status(statusCode.OK).send(authUtil.successTrue(statusCode.OK, resMsg.ADD_DEAL,readData));
})

router.post('/', async(req,res)=>{
    let body = req.body;
    if(body.answer === 'yes') {
        let readWish = await fileUtil.loadData('wishData.txt');
        readWish[readWish.length] = body;
        await fileUtil.writeNewFile('wishData', readWish);
        res.status(statusCode.OK).send(authUtil.successTrue(statusCode.OK, resMsg.DEAL_SUCCESS));
    }
    else {
        res.status(statusCode.OK).send(authUtil.successTrue(statusCode.OK, resMsg.DEAL_FAIL));
    }
})
module.exports = router;
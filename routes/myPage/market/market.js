var express = require('express');
var router = express.Router();
const fileUtil = require('../../../module/fileUtil');
const boardUtil = require('../../../module/boardUtil');
const statusCode = require('../../../module/statusCode');
const resMsg = require('../../../module/responseMessage');
const authUtil = require('../../../module/authUtil');

router.get('/', async (req,res)=>{
    res.send('market');
})
router.post('/', async (req, res)=>{
    let body = req.body;
    console.log(body);
    let readData = await fileUtil.loadData('./marketData.txt');
    readData[readData.length] = body;
    await fileUtil.writeNewFile('./marketData.txt', JSON.stringify(readData) );
    res.status(statusCode.OK).send(authUtil.successTrue(statusCode.OK, resMsg.ADD_MARKET_SUCCESS, 'data added'));
})

module.exports = router;
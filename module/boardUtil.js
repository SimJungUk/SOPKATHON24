const statusCode = require('./statusCode');
const resMsg = require('./responseMessage');
const authUtil = require('./authUtil');
const fs = require('fs');
const json2csv = require('json2csv');
const csvtojson = require('csvtojson');
const moment = require('moment');
const fileUtil = require('./fileUtil');


const boardUtil = {
    complete: async (data, id, body) => {
        return new Promise((resolve) => {
            let result = [];
            let iIdx = 0;

            for (var i = 0; i < data.length; i++) {
                if (data[i].id == id) {
                    if (data[i].type == 'habit') {
                        data[i].count++;
                        if(data[i].count == data[i].setDay) {
                            delete data[i];
                        }
                    }
                    else {
                        delete data[i];
                    }
                }

            } //id 가 같은 거 다지움


            for (var i = 0; i < data.length; i++) {
                if (data[i] != null) {
                    result[iIdx++] = data[i];
                }
            }//다 지우고 나면 null 값만 남는데 null 값 제외하고 저장한다.
            resolve(result);
        })
    }
}

module.exports = boardUtil;
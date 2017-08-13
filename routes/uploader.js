/**
 * Created by yasirmahmood on 12/08/2017.
 */

var express = require('express'),
    router = express.Router(),
    multipart = require('connect-multiparty'),
    multipartMiddleware = multipart(),
    csvParser = require('csvtojson');


/* Upload file. */
router.post('/', multipartMiddleware, function(req, res, next)
{
    var headers = [];
    var data = [];

    csvParser({checkColumn:true, toArrayString:true})
        .fromFile(req.files.file.path)
        .on('json',(csvRow, rowIndex)=>
    {
        if(rowIndex === 0)
        {
            //first row will be headers , exclude them from data.
            headers = Object.keys(csvRow);
        }
        else
        {
            data.push(Object.keys(csvRow).map(function(key) {
                return csvRow[key];
            }));
        }
    })
    .on('done', (error)=>
    {
        if(Boolean(error))
        {
            console.log('Error', error.err);
            res.status(400).send({error: true, message: error.err});
        }
        else
        {
            res.send({headers: headers, data: data});
        }
    });
});

module.exports = router;



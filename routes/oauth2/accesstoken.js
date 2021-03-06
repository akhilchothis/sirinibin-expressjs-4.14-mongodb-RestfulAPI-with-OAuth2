var express = require('express');
const { validationResult }  = require('express-validator/check');
var router = express.Router();


var accesstoken = require('./../../models/accesstoken');

/* POST accesstoken. */
router.post('/', accesstoken.validate, function (req, res, next) {

    res.setHeader('Content-Type', 'application/json');

    let errors = validationResult(req, res);

    if (!errors.isEmpty()) {

        return accesstoken.sendErrorResponse(errors, req, res);
    }

    return accesstoken.generateAccessToken(req, res);


});

module.exports = router;

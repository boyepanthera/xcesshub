const Fund = require('../models/fund.js'),
    Housing = require('../models/housing.js'),
    User = require('../models/user.js'),
    express = require('express'),
    router = express.Router({
        mergeParams: true
    });

module.exports = router;
var express = require('express');
var router = express.Router();
const service = require ('../services/services');


router.get ('/', service.artisansServices);


module.exports = router;

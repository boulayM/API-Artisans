var express = require('express');
var router = express.Router();
const service = require ('../services/fabrication');


router.get ('/', service.artisansFabrication);


module.exports = router;

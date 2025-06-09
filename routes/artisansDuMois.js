var express = require('express');
var router = express.Router();
const service = require ('../services/atdm');


router.get ('/', service.artisansDuMois);


module.exports = router;

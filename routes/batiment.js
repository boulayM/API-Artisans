var express = require('express');
var router = express.Router();
const service = require ('../services/batiment');


router.get ('/', service.artisansBatiment);


module.exports = router;

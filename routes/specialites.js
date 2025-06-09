var express = require('express');
var router = express.Router();
const service = require ('../services/specialites');


router.get ('/', service.getAll);

module.exports = router;

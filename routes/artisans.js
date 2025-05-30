var express = require('express');
var router = express.Router();

const service = require ('../services/artisans');

router.get ('/', service.getAll);

module.exports = router;

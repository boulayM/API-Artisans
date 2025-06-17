var express = require('express');
var router = express.Router();
const service = require ('../services/artisanId');


router.get ('/:id', service.getById);

module.exports = router;

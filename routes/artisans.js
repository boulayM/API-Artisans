var express = require('express');
var router = express.Router();
const service = require ('../services/artisans');


router.get ('/', service.getAll);
router.get ('/:nom', service.getByName);
router.get ('/:id', service.getById);

module.exports = router;

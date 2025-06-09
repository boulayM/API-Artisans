var express = require('express');
var router = express.Router();

const specRoute = require ('../routes/specialites');
const catRoute = require('../routes/categories');
const villesRoute = require ('../routes/villes');
const artisanIdRoute = require ('../routes/artisanId')

/* GET home page. */
router.get('/', async (req, res) => {
  res.render('index', { title: 'Express' });
});
 
router.use ('/specialites', specRoute);
router.use ('/categories', catRoute);
router.use ('/villes', villesRoute);
router.use ('/artisans/:id', artisanIdRoute);


module.exports = router;

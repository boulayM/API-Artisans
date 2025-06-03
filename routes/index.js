var express = require('express');
var router = express.Router();

const artisansRoute = require ('../routes/artisans');

/* GET home page. */
router.get('/', async (req, res) => {
  res.render('index', { title: 'Express' });
});
 
//router.use ('/artisan', artisansRoute);

module.exports = router;

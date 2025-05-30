var express = require('express');
var router = express.Router();

const artisansRoute = require ('../routes/artisans');

/* GET home page. */
router.get('/', async (req, res) => {
  res.render('index', { title: 'Express' });
});

router.use ('/artisans', artisansRoute);

module.exports = router;

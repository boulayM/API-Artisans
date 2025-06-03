var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const SECRET_KEY = process.env.SECRET_KEY;
const cors = require ('cors');
const Artisan = require ('./models/artisans');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const mysql = require ('./db/mysql');
mysql.dbConnection();

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use (cors({
    exposedHeaders: ['Authorization'],
    origin: '*'
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
/*
app.get('/artisan', async (req, res) => {
  try {
    const artisan = await Artisan.findAll({
  attributes: { exclude: ['createdAt', 'updatedAt'] }
});
    res.json(artisan);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch artisan' });
  }
}); 

*/
module.exports = app;

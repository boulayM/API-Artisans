var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const SECRET_KEY = process.env.SECRET_KEY;
const cors = require ('cors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const artisanIdRouter = require('./routes/artisanId');
const artisansRouter = require('./routes/artisans');
const villesRouter = require('./routes/villes');
const catRouter = require('./routes/categories');
const specRouter = require('./routes/specialites');
const atdmRouter = require('./routes/artisansDuMois');
const artAlimRouter = require('./routes/alimentation');
const artBatimentRouter = require('./routes/batiment');

const mysql = require ('./db/mysql');
mysql.dbConnection();
const { sequelize } = require('./db/mysql');
sequelize.sync()
  .then(() => console.log('Models synchronized.'))
  .catch(err => console.error('Error syncing models:', err));

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
app.use('/artisans', artisansRouter);
app.use('/artisans/:id', artisanIdRouter);
app.use('/atdm', atdmRouter);
app.use('/villes', villesRouter);
app.use('/categories', catRouter);
app.use('/specialites', specRouter);
app.use('/artAlim', artAlimRouter);
app.use('/artBatiment', artBatimentRouter);



module.exports = app;

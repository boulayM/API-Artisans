var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require ('cors');
const helmet = require ('helmet');
const rateLimit = require ('express-rate-limit');
const bodyParser = require('body-parser');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const artisanIdRouter = require('./routes/artisans');
const artisansRouter = require('./routes/artisans');
const artisanNom = require('./routes/artisans');
const atdmRouter = require('./routes/artisansDuMois');
const categoriesRouter = require ('./routes/categories');
const batimentRouter = require ('./routes/batiment');
const alimentRouter = require ('./routes/alimentation');
const fabricationRouter = require ('./routes/fabrication');
const servicesRouter = require ('./routes/services');
const emailRouter = require ('./routes/email');

const mysql = require ('./db/mysql');
mysql.dbConnection();

const { sequelize } = require('./db/mysql');
sequelize.sync()
  .then(() => console.log('Models synchronized.'))
  .catch(err => console.error('Error syncing models:', err));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});


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
app.use(helmet());
app.use(limiter);
app.use(bodyParser.json());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/artisans', artisansRouter);
app.use('/artisans/', artisanIdRouter);
app.use('/artisans/',artisanNom);
app.use('/atdm', atdmRouter);
app.use('/categories', categoriesRouter);
app.use('/batiment', batimentRouter);
app.use('/alimentation', alimentRouter);
app.use('/fabrication', fabricationRouter);
app.use('/services', servicesRouter);
app.use('/', emailRouter);

module.exports = app;

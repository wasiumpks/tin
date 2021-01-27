var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const userRouter = require('./routes/userRoute');
const itemRoute = require('./routes/itemRoute');
const orderRoute = require('./routes/orderRoute');

const klientApiRouter = require('./routes/KlientApiRoute');
const itemApiRouter = require('./routes/ItemApiRoute');
const orderApiRouter = require('./routes/OrderApiRoute');
const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
    .catch(err => {
      console.log(err);
    });

var app = express();

const session = require('express-session');
const authUtils = require("./util/authUtils");
app.use(session({
    secret: 'my_secret_password',
    resave: false
}));


app.use((req, res, next) => {
    const loggedUser = req.session.loggedUser;
    res.locals.loggedUser = loggedUser;
    if(!res.locals.loginError) {
        res.locals.loginError = undefined;
    }
    next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user',authUtils.permitAuthenticatedUser, userRouter);
app.use('/item',authUtils.permitAuthenticatedUser, itemRoute);
app.use('/order',authUtils.permitAuthenticatedUser, orderRoute);

app.use('/api/klients', klientApiRouter);
app.use('/api/items', itemApiRouter);
app.use('/api/orders', orderApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  console.log(err.message);
});

module.exports = app;

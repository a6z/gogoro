var express     = require('express'),
    path        = require('path'),
    webpack     = require('webpack'),
    webpackMiddleware = require('webpack-dev-middleware'),
    routes             = require('./routes/index'),
    port        = process.env.PORT || 3000;
    config      = require('./webpack.config.js')

const app       = express(),
      compiler  = webpack(config);

// view engine setup
// app.set('views', path.join(__dirname, 'public/views'));
// app.set('view engine', 'ejs');
// static file path and middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(webpackMiddleware(compiler));
app.use('/',routes);
// router setup
//app.use('/', routers);
app.listen(port);

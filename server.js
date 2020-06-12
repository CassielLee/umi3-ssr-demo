var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
var app = express();
const port = 3000;

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.engine('.html', require('ejs').__express);
// app.set('view engine', 'html');

// app.use(logger('dev'));

app.all('*', function(req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
  );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, './dist')));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

//api路由
app.use('/', async (req, res, next) => {
  // set locals, only providing error in development
  const render = require('./dist/umi.server');
  res.setHeader('Content-Type', 'text/html');
  // render the error page
  const context = {};
  const { html, error, rootContainer } = await render({
    // 有需要可带上 query
    path: req.url,
    context,
    // 可自定义 html 模板
    // htmlTemplate: defaultHtml,
    // 启用流式渲染
    // mode: 'stream',
    // html 片段静态标记（适用于静态站点生成）
    // staticMarkup: false,
    // 扩展 getInitialProps 在服务端渲染中的参数
    // getInitialPropsCtx: {},
    // manifest，正常情况下不需要
  });
  // support stream content
  res.status(200).send(html);
});

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
});

app.listen(port, err => {
  if (err) {
    throw err;
  }
  console.log(`> Ready on port ${port}, http://localhost:${port}`);
});

// module.exports = app;

// const express = require('express');
// const app = express();
// const render = require('./dist/umi.server');
// const fs = require('fs');
// // 这里简单的用fs读取一下文件，后面直接 扔给前端
// const umijs = fs.readFileSync('./dist/umi.js');
// const umicss = fs.readFileSync('./dist/umi.css');

// const port = 3000;

// const domain = 'http://localhost';

// // app.use(express.static(__dirname + './dist'));
// // Express
// app.use(async (req, res) => {
//   // 或者从 CDN 上下载到 server 端
//   // const serverPath = await downloadServerBundle('http://cdn.com/bar/umi.server.js');
//   /*
//       这里做了路由判断，更好的方案是用nginx配置静态目录（指向build好的目录，如dist）
//       或者通过express设置静态目录，umi加入publicPath配置
// */
//   // app.use(express.static(__dirname + 'dist'));
//   if (req && req.url === '/umi.css') {
//     res.setHeader('Content-Type', 'text/css');
//     res.send(umicss);
//   } else if (req && req.url === '/umi.js') {
//     res.setHeader('Content-Type', 'text/js');
//     res.send(umijs);
//   } else if (req && req.url.includes('.jpg')) {
//     res.setHeader('Content-Type', 'text/jepg');
//     res.send(fs.readFileSync(`./dist${req.url}`));
//   } else {
//     res.setHeader('Content-Type', 'text/html');
//     const context = {};
//     const { html, error, rootContainer } = await render({
//       // 有需要可带上 query
//       path: req.url,
//       context,
//     });

//     res.send(html);
//   }
// });

// app.listen(port, err => {
//   if (err) {
//     throw err;
//   }
//   console.log(`> Ready on port ${port}, ${domain}:${port}`);
// });

const express = require('express');
const app = express();
const render = require('./dist/umi.server');
const fs = require('fs');
// 这里简单的用fs读取一下文件，后面直接 扔给前端
const umijs = fs.readFileSync('./dist/umi.js');
const umicss = fs.readFileSync('./dist/umi.css');

const port = 3000;

const domain = 'http://localhost';

// app.use(express.static(__dirname + './dist'));
// Express
app.use(async (req, res) => {
  // 或者从 CDN 上下载到 server 端
  // const serverPath = await downloadServerBundle('http://cdn.com/bar/umi.server.js');
  /*
      这里做了路由判断，更好的方案是用nginx配置静态目录（指向build好的目录，如dist）
      或者通过express设置静态目录，umi加入publicPath配置
*/
  // app.use(express.static(__dirname + 'dist'));
  if (req && req.url === '/umi.css') {
    res.setHeader('Content-Type', 'text/css');
    res.send(umicss);
  } else if (req && req.url === '/umi.js') {
    res.setHeader('Content-Type', 'text/js');
    res.send(umijs);
  } else if (req && req.url.includes('.jpg')) {
    res.setHeader('Content-Type', 'text/jepg');
    res.send(fs.readFileSync(`./dist${req.url}`));
  } else {
    res.setHeader('Content-Type', 'text/html');
    const context = {};
    const { html, error, rootContainer } = await render({
      // 有需要可带上 query
      path: req.url,
      context,
    });

    res.send(html);
  }
});

app.listen(port, err => {
  if (err) {
    throw err;
  }
  console.log(`> Ready on port ${port}, ${domain}:${port}`);
});

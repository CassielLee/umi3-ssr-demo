## umi-ssr-demo

这是一个`umi3 + ts + dva + ssr`的尝鲜版；

### 服务端

umi3开启ssr打包之后会生成一个umi.server.js文件，这个文件需要在服务端进行引用，因此用express写了一个server.js进行node服务。

### 前端配置

只进行了一些简单的基础配置，更多配置请参考umi官方文档[umijs官方文档](https://umijs.org/zh-CN/docs)

### 项目运行

1. 安装依赖:在根目录下运行：`yarn` 或者是`npm install`;

2. 启动前端项目：`yarn start`或`npm start`;

3. 打包：`yarn run build`或`npm run build`;

4. 运行node服务：`yarn run server`或在根目录下`node ./server.js`

### 说明

1. 目前只是一个demo，ts为了方便很多地方将类型设置成any，实际开发中不建议这样做！

2. 另外是项目的配置比较简陋，但是图片、样式、页面都可以正常加载，但上线仍需谨慎！


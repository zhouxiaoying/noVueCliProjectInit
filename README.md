# npm init  生成package.json文件
# 安装vue  安装webpack 安装webpack-cli  webpack4以后  强制要求安装webpack-cli
# 安装webpack-dev-server 本地开发使用  "start": "webpack serve --open"
# 安装html-webpack-plugin  使用模板  创建public文件夹 index.html中定义div，id为app，在webpack.config.js中配置HtmlWebpackPlugin 
```
const HtmlWebpackPlugin = require('html-webpack-plugin');
plugins: [
new HtmlWebpackPlugin({
        title: '测试手动搭建',
        template:'./public/index.html'
      })
]
```

# 安装babel-loader   需要同时安装 @babel/core  @babel/preset-env  否则报错
# 安装css-loader 需要同时安装style-loader
# 安装vue-loader 解析vue文件
```
const { VueLoaderPlugin } = require("vue-loader");
plugins: [
        new VueLoaderPlugin()
        ]
```
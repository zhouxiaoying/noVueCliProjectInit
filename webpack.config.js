
const path = require("path");//nodejs里面的基本包，用来处理路径
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");
 
//__dirname表示文件相对于工程的路径
module.exports ={
    mode: 'development',
    entry: {
      index: './src/index.js'
    },
    devtool: 'inline-source-map',
   devServer: {
     static: './dist',
   },
   module:{
   rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
        test: /\.vue$/,
        loader: 'vue-loader'
    },
    {
        test: /\.css$/,
        use: ['style-loader','css-loader']
    }
  ]},
    plugins: [
        new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        title: '测试手动搭建',
        template:'./public/index.html'
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
}

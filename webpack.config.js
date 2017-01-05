 var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry:  './js/main.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         publicPath: '/js/',
         filename: 'bundle.js'
     },
     module: {
         loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=react']
         }]
     },
     stats: {
         colors: true
     },
     devServer: {
    inline:true,
    port: 8008
  }
 };
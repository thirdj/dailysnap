const path = require('path');
const webpack = require('webpack');
const PATHS = {
  src: path.join(__dirname, 'src'),    // 소스 파일은 src 폴더에
  build: path.join(__dirname, 'public') // 변환 후 파일은 build 폴더에
};

module.exports = {

  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://0.0.0.0:3001',
    'webpack/hot/only-dev-server'
  ],

  output: {
    path: '/',
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  devServer: {
    hot: true,
    colors: true,
    filename: 'bundle.js',
    publicPath: '/',
    historyApiFallback: true,
    contentBase: './public',
    proxy: {
      "*": "http://localhost:3000"
    }
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'react-hot',
          'babel?' + JSON.stringify({
            cacheDirectory: true,
            presets: ['es2015', 'react']
          })
        ],
        exclude: /node_modules/
      }
    ]
  }
};

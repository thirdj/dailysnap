const path = require('path');
const webpack = require('webpack');

const nodeModulesDir = path.resolve(__dirname, 'node_modules');

const PATHS = {
  entry: path.join(__dirname, 'src'),    // 소스 파일은 src 폴더에
  build: path.join(__dirname, 'public'), // 변환 후 파일은 build 폴더에
  dist: path.join(__dirname, 'dist')
};

module.exports = {

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8001',
    'webpack/hot/only-dev-server',
    PATHS.entry
  ],

  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },

  devtool: '#eval-source-map',

  devServer: {
    inline: true,
    progress: true,
    hot: true,
    colors: true,
    // filename: 'bundle.js',
    // publicPath: '../',
    historyApiFallback: true,
    contentBase: './public',
    host: '0.0.0.0',
    port: 8001
    // proxy: {
    //   "*": "http://localhost:3000"
    // }
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: [nodeModulesDir]
      }
    ],
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
        exclude: [nodeModulesDir]
      }
    ]
  },

  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx', '.css']
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

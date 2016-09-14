var rucksack = require('rucksack-css');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'amuireact-openspeech.js',
    libraryTarget: 'umd',
    library: 'React-openspeech'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: /src/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'postcss'
        ]
      }, {
        test: /\.css$/,
        exclude: /src/,
        loader: 'style!css'
      }, /*{
       test: /\.styl$/,
       loader: 'style!css!stylus'
       },*/ {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ],
  externals: {
    react: 'react'
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
};

var rucksack = require('rucksack-css')
var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, './'),
  entry: {
    jsx: './main.js',
    html: './index.html'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }, {
        test: /\.css$/,
        include: /client/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      }, {
        test: /\.css$/,
        exclude: /client/,
        loader: 'style!css'
      }, /*{
        test: /\.styl$/,
        loader: 'style!css!stylus'
      },*/ {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.(jpg|png)$/,
        loader: "url-loader"
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    }),
    new webpack.optimize.DedupePlugin(),
  ],
  devServer: {
    contentBase: './',
    hot: true
  }
}

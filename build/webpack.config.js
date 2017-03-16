const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const autoprefixer = require('autoprefixer');
const HtmlwebpackPlugin = require('html-webpack-plugin');

// 辅助函数
const utils = require('./utils');
const fullPath = utils.fullPath;

// 项目根路径
const ROOT_PATH = fullPath('../');
// 项目源码路径
const SRC_PATH = ROOT_PATH + '/src';
// 产出路径
const DIST_PATH = ROOT_PATH + '/dist';

const args = process.argv;
//压缩
var uglify = args.indexOf('--uglify') > -1;

// node_modules
const NODE_MODULES_PATH = ROOT_PATH + '/node_modules';

const imgPath = ROOT_PATH + 'src/assets/img';

// 判断开发环境
//const __DEV__ = process.env.NODE_ENV !== 'production';

// Common plugins
const plugins = [
  new webpack
    .optimize
    .CommonsChunkPlugin({name: 'vendor', minChunks: Infinity, filename: 'vendor-[hash].js'}),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  new HtmlwebpackPlugin({
    template: SRC_PATH + '/index.html',
    path: DIST_PATH,
    filename: 'index.html',
    minify: false
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [autoprefixer({
          browsers: ['last 3 version', 'ie >= 10']
        })],
      context: SRC_PATH
    }
  })
];

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
    }
  }, {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader']
  }, {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
  },
  {
    // test: /\.(jpe?g|png|gif|svg)$/i,
    // include: imgPath,
    // use: ['file-loader','image-webpack-loader']
    test: /\.(gif|png|jpe?g|svg)$/i,
    loaders: [
      'file-loader',
      {
        loader: 'image-webpack-loader',
        query: {
          progressive: true,
          optimizationLevel: 7,
          interlaced: false,
          pngquant: {
            quality: '65-90',
            speed: 4
          }
        }
      }
    ]
  },
];

var config = {
  context: SRC_PATH,
  entry: {
    app: [
       SRC_PATH + '/index.js'
    ],
    vendor: [
      'react-dom',
      'react-redux',
      'react-router',
      'react',
      'redux-thunk',
      'redux',
      'babel-polyfill'
    ]
  },
  output: {
    path: DIST_PATH,
    filename: 'app-[hash].js'
  },
  module: {
    rules
  },
  resolve: {
    extensions: [
      '.js', '.jsx'
    ],
    modules: [NODE_MODULES_PATH, SRC_PATH]
  },
  plugins: plugins
};

module.exports = config;

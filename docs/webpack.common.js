const path = require('path');
const { AureliaPlugin } = require('aurelia-webpack-plugin');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

class AureliaHtmlPlugin {
  apply (compiler) {
    compiler.hooks.compilation.tap('AureliaHtmlPlugin', (compilation) => {
      compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(
        'AureliaHtmlPlugin',
        (pluginArgs, cb) => {
          pluginArgs.body.push({
            tagName: 'div',
            voidTag: false,
            attributes: {
              'aurelia-app': 'main'
            }
          });
          cb(null, pluginArgs);
        }
      );
    });
  }
}

module.exports = {
  cache: true,
  entry: 'aurelia-bootstrapper',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' }
        ]
      },
      {
        test: /\.ts$/,
        use: [
          { loader: 'ts-loader', options: { transpileOnly: true } }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['src', 'node_modules'],
    symlinks: false
  },
  output: {
    chunkFilename: '[chunkhash].js',
    filename: '[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: '[chunkhash].js.map'
  },
  plugins: [
    new AureliaPlugin({
      aureliaApp: 'main',
      features: {
        ie: false,
        polyfills: 'es2015',
        svg: false,
        unparser: false
      }
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      useTypescriptIncrementalApi: true,
      memoryLimit: 4096
    }),
    new HtmlWebpackPlugin({
      body: '',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      meta: {
        description: 'Documentation for Material Components Web for Aurelia',
        'format-detection': 'telephone=no',
        viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      },
      title: 'Material Components Web for Aurelia'
    }),
    new AureliaHtmlPlugin(),
    new CspHtmlWebpackPlugin(
      {
        'base-uri': "'self'",
        'child-src': "'none'",
        'connect-src': "'self'",
        'default-src': "'none'",
        'font-src': "'self'",
        'form-action': "'none'",
        'frame-src': "'none'",
        'img-src': "'self'",
        'media-src': "'self'",
        'object-src': "'none'",
        'script-src': ["'unsafe-inline'", "'self'"],
        'style-src': ["'self'", "'unsafe-inline'"]
      }, {
        enabled: true,
        hashingMethod: 'sha256'
      }
    )
  ]
};

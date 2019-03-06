const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  name: 'production',
  performance: {
    maxEntrypointSize: 500000
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.AggressiveSplittingPlugin({
      minSize: 50000,
      maxSize: 100000
    }),
    new ResourceHintWebpackPlugin()
  ]
});

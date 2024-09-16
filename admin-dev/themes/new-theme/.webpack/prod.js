const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const LicensePlugin = require('webpack-license-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./common.js');

/**
 * Returns the production webpack config,
 * by merging production specific configuration with the common one.
 *
 */
function prodConfig() {
  const prod = Object.assign(common, {
    stats: 'minimal',
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          extractComments: false,
        }),
      ],
    },
  });

  // Required for Vue production environment
  prod.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new LicensePlugin({
      outputFilename: 'thirdPartyNotice.json',
      licenseOverrides: {
        'vazirmatn@32.102.0': 'OFL-1.1',
        'typeahead.js@0.11.1': 'MIT',
        '@prestashopcorp/puik-components@2.1.0': 'MIT'
      },
      replenishDefaultLicenseTexts: true,
    }),
  );
  
  prod.module.rules.push(
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
      ],
    },
  );

  return prod;
}

module.exports = prodConfig;

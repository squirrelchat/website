/*
 * Copyright (c) 2020-present Bowser65 & vinceh121, All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

const { resolve } = require('path')
const { readdirSync, unlinkSync } = require('fs')
const TerserJSPlugin = require('terser-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { DefinePlugin, IgnorePlugin } = require('webpack')

// Env vars
const commitHash = require('child_process').execSync('git rev-parse HEAD').toString().trim()
const isDev = process.env.NODE_ENV === 'development'
const src = resolve(__dirname, 'src')

const baseConfig = {
  mode: isDev ? 'development' : 'production',
  entry: resolve(src, 'main.jsx'),
  output: {
    filename: isDev ? '[name].js' : '[contenthash].js',
    chunkFilename: isDev ? '[name].chk.js' : '[contenthash].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
    alias: {
      'react-dom': isDev ? '@hot-loader/react-dom' : 'react-dom'
    }
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.jsx?/,
        include: src,
        use: [
          isDev ? 'react-hot-loader/webpack' : null,
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: true,
              compact: true,
              presets: [ '@babel/preset-react' ],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-export-default-from',
                '@babel/plugin-proposal-object-rest-spread',
                isDev ? 'react-hot-loader/babel' : null
              ].filter(Boolean)
            }
          }
        ].filter(Boolean)
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: { hmr: isDev }
          },
          // If you want to disable css modules, remove the block below and uncomment this line.
          // 'css-loader',
          {
            loader: 'css-loader',
            options: {
              localsConvention: 'camelCaseOnly',
              modules: { localIdentName: '[local]-[hash:7]' }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(svg|mp4|webm|woff2?|eot|ttf|otf|wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[hash:20].[ext]' }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[hash:20].[ext]' }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: isDev,
              mozjpeg: {
                progressive: true,
                quality: 95
              },
              optipng: { enabled: false },
              pngquant: {
                quality: [ 0.9, 1 ],
                speed: 4
              },
              gifsicle: {
                interlaced: true,
                optimizationLevel: 2
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ManifestPlugin({
      fileName: resolve(__dirname, 'http', 'dist', 'manifest.json')
    }),
    new MiniCSSExtractPlugin({
      filename: isDev ? '[name].css' : '[contenthash].css',
      chunkFilename: isDev ? '[name].css' : '[contenthash].css'
    }),
    new DefinePlugin({
      WEBPACK: {
        GIT_REVISION: JSON.stringify(commitHash)
      },
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  optimization: {
    minimize: !isDev,
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          parse: { ecma: 8 },
          compress: {
            ecma: 5,
            warnings: false,
            inline: 2
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          }
        },
        extractComments: false,
        parallel: true,
        cache: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: [ 'default', {
            cssDeclarationSorter: true,
            discardUnused: true,
            mergeIdents: true,
            reduceIdents: true
          } ]
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.s?css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  devServer: {
    quiet: true,
    historyApiFallback: true,
    allowedHosts: [ 'localhost', '.ngrok.io' ],
    proxy: { '/': `http://localhost:${process.env.PORT || 6969}` }
  }
}

if (isDev) {
  baseConfig.entry = [ 'react-hot-loader/patch', 'webpack/hot/dev-server', baseConfig.entry ]
  baseConfig.plugins.push(new FriendlyErrorsWebpackPlugin())
  module.exports = baseConfig
} else {
  baseConfig.plugins.push({
    apply: (compiler) =>
      compiler.hooks.compile.tap('cleanBuild', () => {
        for (const filename of readdirSync(compiler.options.output.path)) {
          if (filename !== 'manifest.json') {
            unlinkSync(resolve(compiler.options.output.path, filename))
          }
        }
      })
  })

  const nodeCfg = Object.assign({}, baseConfig)
  // Prevent nested structs from being refs
  nodeCfg.plugins = [ ...nodeCfg.plugins ]
  nodeCfg.output = Object.assign({}, nodeCfg.output)
  nodeCfg.optimization = Object.assign({}, nodeCfg.optimization)

  // Actual edits
  nodeCfg.entry = resolve(src, 'components', 'App.jsx')
  nodeCfg.optimization.minimize = false
  nodeCfg.output.filename = 'App.js'
  nodeCfg.output.chunkFilename = '[name].chk.js'
  nodeCfg.output.libraryTarget = 'commonjs2'
  nodeCfg.output.path = resolve(__dirname, 'http', 'dist')
  nodeCfg.plugins = nodeCfg.plugins.slice(1)
  nodeCfg.plugins.push(new IgnorePlugin(/\.(s?css|png|jpe?g|gif|svg|mp4|webm|woff2?|eot|ttf|otf|wav)$/))
  nodeCfg.target = 'node'
  nodeCfg.externals = [ require('webpack-node-externals')() ]
  nodeCfg.node = {
    __dirname: false,
    __filename: false
  }

  module.exports = [ baseConfig, nodeCfg ]
}

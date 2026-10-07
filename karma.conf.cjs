const webpack = require('webpack')

module.exports = function (config) {
  const coverage = process.env.COVERAGE === 'true'

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'src/tests/**/*.spec.jsx', watched: false }
    ],
    preprocessors: {
      'src/tests/**/*.spec.jsx': ['webpack']
    },
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('test')
        })
      ]
    },
    reporters: coverage ? ['progress', 'coverage'] : ['progress'],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text-summary' },
        { type: 'lcovonly', subdir: '.' }
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    browsers: ['jsdom'],
    concurrency: Infinity,
    client: {
      jasmine: {
        random: false
      }
    }
  })
}

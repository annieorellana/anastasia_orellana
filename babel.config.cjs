module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  plugins: process.env.BABEL_ENV === 'test' && process.env.COVERAGE === 'true'
    ? ['babel-plugin-istanbul']
    : []
}

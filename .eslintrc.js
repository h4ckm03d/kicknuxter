module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    node: true,
    mocha: true
  },
  extends: [
    'eslint:recommended',
    "plugin:vue-libs/recommended",
  ],
  plugins: [
    'eslint-plugin'
  ],
  rules: {
    "space-before-function-paren": 0
  }
}
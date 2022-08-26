module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    "eslint:recommended"
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-invalid-this": "warn",
    "init-declarations": "warn",
    "array-bracket-newline": "warn",
    "array-bracket-spacing": "warn",
    "comma-dangle": "error",
    "comma-spacing": "warn",
    "comma-style": ["error", "last"],
    "keyword-spacing": "warn",
    "key-spacing": "warn",
    "arrow-spacing": "warn",
    "semi": ["error", "always"]
  }
}

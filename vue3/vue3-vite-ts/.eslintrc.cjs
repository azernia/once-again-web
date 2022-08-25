/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
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

/*
 * @Author: Bug Router
 * @Date: 2024-04-25 13:18:48
 * @Description: Default
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'generator-star-spacing': 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'no-tabs': 'off',
    'object-curly-spacing': 0,
    'space-before-function-paren': 0,
    'no-multiple-empty-lines': 0,
    'no-useless-constructor': 0,
    'no-trailing-spaces': 'off',
    'prefer-const': 1, //首选const
    'no-const-assign': 2,
    'no-var': 1 //禁用var，用let和const代替
  }
}

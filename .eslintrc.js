module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0, // 禁用函数前空格校验
    'indent': 'off' //禁用缩进校验，与格式化插件冲突
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

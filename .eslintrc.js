module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
    jquery: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'airbnb-base'],
  plugins: ['vue', 'markdown'],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'config/webpack.base.conf.js'
      }
    }
  },
  rules: {
    // 强制使用分号
    semi: [2, 'always'],
    // import是否需要后缀
    'import/extensions': [
      2,
      'always',
      {
        js: 'never',
        vue: 'never'
      }
    ],
    // 禁止对 function 的参数进行重新赋值
    'no-param-reassign': 0,
    // 只导出一个模块的时候，使用default
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': 0,
    // 要求箭头函数体使用大括号
    'arrow-body-style': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0,
    'no-alert': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,

    // 禁止出现未使用过的表达式
    'no-unused-expressions': [
      2,
      { allowTernary: true, allowShortCircuit: true }
    ],
    'linebreak-style': 0,
    'max-len': 0,
    // 要求 require() 出现在顶层模块作用域中
    'global-require': 0,
    // 动态require
    'import/no-dynamic-require': 0,
    // 要求或禁止末尾逗号
    'comma-dangle': [2, 'never']
  }
};

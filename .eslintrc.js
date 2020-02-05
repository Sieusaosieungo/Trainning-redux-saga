module.exports = {
  parser: 'babel-eslint', // accept ES6
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  rules: {
    'react/prop-types': 1,
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'jsx-quotes': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-max-props-per-line': 1,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': ['error'],
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'react/jsx-uses-vars': 2,
    'class-methods-use-this': 0,
  },
  plugins: ['prettier'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};

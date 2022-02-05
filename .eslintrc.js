module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    // 'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'linebreak-style': 'off',
    'prefer-const': 'off',
    'no-plusplus': 'off',
    eqeqeq: 'off',
  },
};

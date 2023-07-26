module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb', 'airbnb/hooks',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      'files': ['**/?(*.)+(spec|test|stories).[tj]s?(x)'],
      'rules': {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
        'react-hooks/rules-of-hooks': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'i18next'],
  rules: {
    'quote-props': 'off',
    'indent': ['error', 2, {
      ignoredNodes: ['JSXElement *', 'JSXElement'],
    }],
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': [1, {
      extensions: ['.tsx', '.jsx'],
    }],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/function-component-definition': [2, {
      namedComponents: ['function-declaration', 'function-expression', 'arrow-function'],
    }],
    'no-shadow': 'off',
    'react/button-has-type': 'off',
    'semi': 'off',
    'max-len': [1, {
      'ignoreComments': true,
      'code': 100,
    }],
    'no-param-reassign': [2, { 'ignorePropertyModificationsFor': ['config'] }],
    'react/destructuring-assignment': 'off',
    'jsx-a11y/no-autofocus': 'off',
  },
};

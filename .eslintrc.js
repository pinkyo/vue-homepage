// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    parser: 'babel-eslint'
  },

  env: {
    browser: true,
    node: true
  },

  extends: 'airbnb-base',

  // required to lint *.vue files
  plugins: [
    'html'
  ],

  // check if imports actually resolve
  'settings': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],

  // add your custom rules here
  'rules': {
    "semi": [2, "never"],
    "comma-dangle": 0,
    'no-param-reassign': 0,
    'no-multi-assign': 0,

    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },

  rules: {
    semi: [
      2,
      'never'
    ],
    'comma-dangle': 0,
    'no-param-reassign': 0,
    'no-multi-assign': 0,
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never'
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: [
          'test/unit/index.js'
        ]
      }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}

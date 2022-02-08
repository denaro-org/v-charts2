module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'standard',
    'plugin:markdown/recommended'
  ],
  rules: {
    'object-curly-newline': ['error', {
      multiline: true,
      minProperties: 2
    }],
    'import/order': [
      'error',
      {
        groups: [
          'index',
          'sibling',
          'parent',
          'internal',
          'external',
          'builtin',
          'object',
          'type'
        ]
      }
    ],
    indent: ['error', 2],
    'arrow-parens': ['error', 'always'],
    'sort-imports': [
      'error',
      { ignoreDeclarationSort: true }
    ],
    'comma-spacing': [
      'error',
      { after: true }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false
      }
    ]
  }
}

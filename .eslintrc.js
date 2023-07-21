module.exports = {
  extends: '@labforward/eslint-config-node',
  ignorePatterns: ['dist'],
  overrides: [
    {
      extends: ['plugin:jest/recommended'],
      files: ['**/__tests__/**/*.test.ts'],
      plugins: ['jest'],
      rules: {
        'max-nested-callbacks': 'off',
      },
    },
  ],
  parserOptions: {
    requireConfigFile: false,
  },
  root: true,
  rules: {
    // Allow importing devDependencies.
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'internal',
            pattern: '@/**',
          },
          {
            group: 'internal',
            pattern: '@fixtures/**',
          },
        ],
      },
    ],
  },
};

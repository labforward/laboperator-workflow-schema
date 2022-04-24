module.exports = {
  extends: '@labforward/eslint-config-node',
  ignorePatterns: ['dist'],
  overrides: [
    {
      files: ['**/__tests__/**/*.test.ts'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
    },
  ],
  parserOptions: {
    requireConfigFile: false,
  },
  root: true,
  rules: {
    // Allow importing devDependencies.
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};

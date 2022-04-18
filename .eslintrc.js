module.exports = {
  root: true,
  extends: '@labforward/eslint-config-node',
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {
    // Allow importing devDependencies.
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};

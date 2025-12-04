import { defineConfig } from 'eslint/config';
import jest from 'eslint-plugin-jest';
import nodeConfig from '@laboperator-gmbh/eslint-config-node';

export default defineConfig(
  nodeConfig,
  { ignores: ['**/dist'] },
  {
    rules: {
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  },
  {
    files: ['**/__tests__/**/*.test.ts'],

    extends: [jest.configs['flat/recommended']],
    rules: {
      'max-nested-callbacks': 'off',
    },
  },
);

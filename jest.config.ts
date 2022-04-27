/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@fixtures/(.*)': '<rootDir>/src/__tests__/fixtures/$1',
  },
  /**
   * Use ts-jest to also handle type checking when running tests.
   * https://kulshekhar.github.io/ts-jest/docs/getting-started/presets.
   */
  preset: 'ts-jest',
  reporters: ['default'],
  roots: ['<rootDir>/src/'],
  verbose: true,
};

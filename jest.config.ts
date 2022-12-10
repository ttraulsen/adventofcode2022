import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/**/*.test.ts'],
  forceExit: true,
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.ts', '!**/__*__/**'],
  reporters: ['default', 'jest-junit'],
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: '.',
};
export default config;

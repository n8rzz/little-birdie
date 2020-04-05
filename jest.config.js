module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>src/renderer/__helpers__/setupTestEnv.ts'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  },
  verbose: true,
};

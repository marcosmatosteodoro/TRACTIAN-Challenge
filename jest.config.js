module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/','/dist/'],
  moduleNameMapper: {
    '\\.(scss|css|less)$': 'identity-obj-proxy',
    '^@/context/(.*)$': '<rootDir>/src/context/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
}
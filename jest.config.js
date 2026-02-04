module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: ['server.js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
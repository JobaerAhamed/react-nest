module.exports = {
  rootDir: 'src/server',
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coverageDirectory: '../../coverage/server',
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'json-summary'],
  testEnvironment: 'node',
};

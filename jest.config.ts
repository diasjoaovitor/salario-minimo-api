export default {
  preset: 'ts-jest',
  testRegex: '((\\.|/*.)(test))\\.ts?$',
  modulePaths: ['<rootDir>/src/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}

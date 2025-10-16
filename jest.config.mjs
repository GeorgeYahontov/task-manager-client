export default {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@core/(.*)$': '<rootDir>/src/app/core/$1',
    '^@shared/(.*)$': '<rootDir>/src/app/shared/$1',
    '^@common/(.*)$': '<rootDir>/src/app/common/$1',
    '^@features/(.*)$': '<rootDir>/src/app/features/$1',
    '^@auth/(.*)$': '<rootDir>/src/app/features/auth/$1',
    '^@tasks/(.*)$': '<rootDir>/src/app/features/tasks/$1'
  }
};

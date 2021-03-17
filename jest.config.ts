export default {
  preset: "ts-jest",
  testEnvironment: 'node',
  // transform: { "^.+\\.tsx?$": "ts-jest" },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  }
};


module.exports = {
  roots: [
    "<rootDir>/src/ui"
  ],
  collectCoverageFrom: [
    "src/ui/**/*.{js,jsx,ts,tsx}",
    "!src/ui/**/*.d.ts"
  ],
  setupFiles: [
    "react-app-polyfill/jsdom"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/src/ui/setupTests.ts"
  ],
  testMatch: [
    "<rootDir>/src/ui/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/ui/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  testEnvironment: "jsdom",
  testRunner: "/Users/dev_backup/junk/learn-nest/node_modules/jest-circus/runner.js",
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/config/jest/babelTransform.js",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  modulePaths: [],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  resetMocks: true
}

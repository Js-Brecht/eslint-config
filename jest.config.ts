export default {
    preset: "ts-jest",
    notify: false,
    verbose: true,
    coverageProvider: "v8",
    globals: {
        "ts-jest": {
            compiler: require.resolve("ttypescript"),
            tsconfig: "tsconfig-jest.json",
        },
    },
    moduleFileExtensions: [
        "js",
        "json",
        "jsx",
        "ts",
        "tsx",
        "node",
    ],
    testEnvironment: "node",
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)",
    ],
    testPathIgnorePatterns: [
        "/lib/",
        "/bin/",
        "/node_modules/",
    ],
    transformIgnorePatterns: [
        "/node_modules/",
        "\\.pnp\\.[^\\/]+$",
        "/lib/",
    ],
    reporters: [ "jest-standard-reporter" ],
} as import("@jest/types").Config.InitialOptions;

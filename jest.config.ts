import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    extensionsToTreatAsEsm: [".ts"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: ["v8"],
};

export default config;

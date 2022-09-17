import type {Config} from 'jest';

const config: Config = {
    preset: 'ts-jest/presets/default-esm',
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1'
    },
    transform: {
        '<regex_match_files': [
            'ts-jest',
            {
                useESM: true
            }
        ]
    }
};

export default config;
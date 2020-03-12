module.exports = {
    extends: [
        'gsandf',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    overrides: [
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': ['off']
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'array-callback-return': 'error',
        camelcase: 'off',
        'no-extra-label': 'error',
        'no-native-reassign': 'error',
        'no-restricted-syntax': ['error'],
        'no-unused-labels': 'error',
        'no-useless-concat': 'error',
        radix: ['error', 'as-needed'],
        'require-yield': 'error',
        'sort-keys': 'off'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};

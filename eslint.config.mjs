import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.ts'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'script',
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['eslint.config.mjs', 'prettier.config.mjs'],
                },
            },
        },
        rules: {
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/ban-ts-comment': 'error',
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
            'array-bracket-spacing': ['error', 'never'],
            '@typescript-eslint/return-await': ['error', 'always'],
            'object-curly-spacing': ['error', 'never'],
            '@typescript-eslint/no-floating-promises': 'error',
        },
    },
    {
        ignores: ['tmp', 'dist', 'coverage'],
    },
    eslintConfigPrettier,
);

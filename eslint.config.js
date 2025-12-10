import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],

    plugins: {
      import: importPlugin,
    },

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    rules: {
      // Limit file length
      'max-lines': ['warn', { max: 250 }],

      // Padded blank lines between blocks
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: 'block', next: 'block-like' },
        { blankLine: 'always', prev: '*', next: 'block-like' },
      ],

      // Console rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // Error on constant conditions
      'no-constant-condition': 'error',

      // Unused vars warning
      'no-unused-vars': 'warn',

      // TS override from your old config
      '@typescript-eslint/no-explicit-any': 'off',

      // Import order rules
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
        },
      ],
    },

    // Optional: improves import/order for TypeScript paths
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  },
]);

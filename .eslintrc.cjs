module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // External packages come first
          ['^@?\\w'],
          // Internal files
          ['^@/'],
          // Colocated files
          ['^\\.\\./', '^\\./'],
          // Style imports
          ['^.+\\.?(css)$'],
        ],
      },
    ],
  },
};

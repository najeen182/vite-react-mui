module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',

  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    'import/extensions': ['.js', '.jsx', '.mjs'],

    react: { version: '18.2' }
  },
  plugins: ['react-refresh'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.jsx', // Add this line
          '**/*.spec.js',
          '**/*.spec.jsx', // Add this line
          'tests/**/*.js',
          'tests/**/*.jsx', // Add this line
          'test/**/*.js',
          'test/**/*.jsx', // Add this line
          '**/webpack.config.js',
          '**/vite.config.js',
        ],
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

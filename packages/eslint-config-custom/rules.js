module.exports = {
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/indent': 0,
  // Sometimes this rule decreases readability.
  'arrow-body-style': 0,
  'consistent-return': 0,
  'function-paren-newline': 0,

  // We select line endings depending on current OS.
  // See: https://stackoverflow.com/q/39114446/2771889
  'linebreak-style': ['error', (process.platform === 'win32' ? 'windows' : 'unix')],
  'no-await-in-loop': 0,
  'no-console': 0,
  'no-continue': 0,
  'no-multiple-empty-lines': ['error', {
    max: 1,
    maxEOF: 1,
    maxBOF: 0,
  }],
  'no-nested-ternary': 0,
  // Sometimes we need to write "void promise".
  'no-void': 0,
  'object-curly-newline': ['error', { consistent: true }],
  'operator-linebreak': 0,

  // We use special module resolution, that's why we need extensions.
  'import/extensions': 0,
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-duplicates': 'error',
  'import/no-empty-named-blocks': 'error',
  // We have extraneous deps, because we have workspace.
  // 'import/no-extraneous-dependencies': 0,
  'import/no-mutable-exports': 0,
  'import/no-self-import': 'error',
  'import/order': 0,

  // We don't use default exports anywhere.
  'import/prefer-default-export': 0,

  // Simple sort.
  // https://github.com/lydell/eslint-plugin-simple-import-sort?tab=readme-ov-file#custom-grouping
  'simple-import-sort/imports': ['error', {
    groups: [
      // Node.js builtins prefixed with `node:`.
      // node:fs
      [/^node:/.source],

      // Packages.
      // solid-js
      [/^@?\w/.source],

      // Tsconfig alias.
      // ~/styles
      [/^~\//.source],

      // Parent imports.
      // ../Typography.js
      [/^\.\.\//.source],

      // Current folder imports.
      // ./utils.js
      [/\.\/.+\.(?!s?css)/.source],

      // Styles.
      // ./Typography.scss
      // ./Typography.css
      [/\.s?css$/.source],
    ],
  }],
  'simple-import-sort/exports': 'error',
};
module.exports = {
  env: {
    browser: true,
    jest: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'prettier'],
  rules: {
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
  overrides: [
    {
      files: ['index.js'],
      rules: {
        'react/jsx-filename-extension': 'off',
      },
    },
    {
      files: ['components/Dots.jsx'],
      rules: {
        // these array elements will not be moved around
        // so it's ok to use the index as part of the key
        'react/no-array-index-key': 'off',
      },
    },
  ],
};

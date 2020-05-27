module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    // eslint
    'nuxt/no-cjs-in-config': 'off',
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],
    // ts-lint
    '@typescript-eslint/explicit-function-return-type': ['error'],
  }
}

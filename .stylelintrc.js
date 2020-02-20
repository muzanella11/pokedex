module.exports = {
  extends: 'stylelint-config-standard',

  ignoreFiles: [
    'node_modules',
    'bower_components'
  ],

  rules: {
    'font-family-no-missing-generic-family-keyword': null,
    'at-rule-no-unknown': null,
    'at-rule-name-space-after': 'always',
    'at-rule-semicolon-newline-after': 'always',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always',
    'color-hex-case': 'upper',
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,
    'declaration-bang-space-after': 'never',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'declaration-property-unit-whitelist': {
      "font-size": ["rem", "em", "px"],
      "/^animation/": ["ms"]
    },
    'comment-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['after-comment', 'stylelint-commands']
    }],
    'comment-whitespace-inside': 'always',
    'no-descending-specificity': null
  }
}

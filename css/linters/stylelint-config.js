
/**
*
* stylelint's configuration file for Netshoes' CSS code styleguide.
* http://github.com/netshoes/styleguide/css
*
* A full description of all rules presented here can be found at stylelint's website
* http://stylelint.io
*
*/
module.exports = {
  'rules': {
    'at-rule-no-vendor-prefix': 2,
    'block-closing-brace-newline-after': [2, 'always-multi-line'],
    'block-closing-brace-newline-before': [2, 'always-multi-line'],
    'block-closing-brace-space-after': [2, 'always-single-line'],
    'block-closing-brace-space-before': [2, 'always-single-line'],
    'block-no-empty': 2,
    'block-opening-brace-newline-after': [2, 'always-multi-line'],
    'block-opening-brace-space-after': [2, 'always'],
    'block-opening-brace-space-before': [2, 'always'],
    'color-hex-case': [2, 'upper'],
    'color-no-invalid-hex': 2,
    'comment-empty-line-before': [2, 'always'],
    'comment-space-inside': [2, 'always'],
    'declaration-bang-space-after': [2, 'never'],
    'declaration-bang-space-before': [2, 'always'],
    'declaration-block-semicolon-newline-after': [2, 'always'],
    'declaration-block-semicolon-newline-before': [2, 'never-multi-line'],
    'declaration-block-semicolon-space-after': [2, 'always-single-line'],
    'declaration-block-semicolon-space-before': [2, 'never'],
    'declaration-colon-space-after': [2, 'always'],
    'declaration-colon-space-before': [2, 'never'],
    'function-comma-space-after': [2, 'always'],
    'function-comma-space-before': [2, 'never'],
    'function-parentheses-space-inside': [2, 'never'],
    'function-space-after': [2, 'always'],
    'function-url-quotes': [2, 'single'],
    'indentation': [2, 2],
    'media-feature-colon-space-after': [2, 'always'],
    'media-feature-colon-space-before': [2, 'never'],
    'media-feature-name-no-vendor-prefix': 2,
    'media-feature-range-operator-space-after': [2, 'always'],
    'media-feature-range-operator-space-before': [2, 'always'],
    'media-query-parentheses-space-inside': [2, 'never'],
    'no-eol-whitespace': 2,
    'number-leading-zero': [2, 'always'],
    'number-no-trailing-zeros': 2,
    'number-zero-length-no-unit': 2,
    'property-blacklist': ['pointer-events', 'font-smoothing', 'text-rendering'],
    'property-no-vendor-prefix': 2,
    'rule-no-duplicate-properties': 2,
    'rule-trailing-semicolon': [2, 'always'],
    'selector-combinator-space-after': [2, 'always'],
    'selector-combinator-space-before': [2, 'always'],
    'selector-list-comma-newline-after': [2, 'always-multi-line'],
    'selector-list-comma-newline-before': [2, 'never-multi-line'],
    'selector-list-comma-space-after': [2, 'always'],
    'selector-list-comma-space-before': [2, 'never'],
    'selector-no-vendor-prefix': 2,
    'selector-pseudo-element-colon-notation': [2, 'double'],
    'string-quotes': [2, 'single'],
    'value-list-comma-newline-after': [2, 'never-multi-line'],
    'value-list-comma-newline-before': [2, 'never-multi-line'],
    'value-list-comma-space-after': [2, 'always'],
    'value-list-comma-space-before': [2, 'never'],
    'value-no-vendor-prefix': 2
  }
};

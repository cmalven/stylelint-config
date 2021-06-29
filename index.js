"use strict";

module.exports = {
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "at-rule-blacklist": null,
    "at-rule-empty-line-before": null,
    "at-rule-name-case": "lower",
    "at-rule-name-newline-after": null,
    "at-rule-name-space-after": "always",
    "at-rule-no-unknown": null,
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": ["always", { "ignoreAtRules": ["if", "else"] }],
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-space-after": null,
    "block-closing-brace-space-before": "always-single-line",
    "block-no-empty": null,
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-newline-before": null,
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": null,
    "color-no-hex": null,
    "color-no-invalid-hex": true,
    "comment-empty-line-before": null,
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",
    "comment-word-blacklist": null,
    "custom-media-pattern": "",
    "custom-property-empty-line-before": "never",
    "custom-property-pattern": "",
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-redundant-longhand-properties": null,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 3,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": "never",
    "declaration-no-important": null,
    "declaration-property-value-disallowed-list": {},
    "font-family-name-quotes": "always-unless-keyword",
    "font-family-no-duplicate-names": true,
    "font-weight-notation": "named-where-possible",
    "function-blacklist": null,
    "function-calc-no-invalid": true,
    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": null,
    "function-comma-newline-before": "never-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 1,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": null,
    "function-parentheses-space-inside": "never-single-line",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    "function-url-scheme-blacklist": null,
    "function-whitespace-after": "always",
    "indentation": 2,
    "keyframe-declaration-no-important": true,
    "length-zero-no-unit": null,
    "max-empty-lines": 2,
    "max-nesting-depth": 3,
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-blacklist": null,
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-newline-before": "never-multi-line",
    "media-query-list-comma-space-after": "always",
    "media-query-list-comma-space-before": "never",
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "no-empty-source": true,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,
    "number-leading-zero": "always",
    "number-max-precision": 4,
    "number-no-trailing-zeros": true,
    "property-blacklist": null,
    "property-case": "lower",
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": ["always-multi-line", { "except": ["first-nested"],"ignore": ["after-comment"] }],
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-blacklist": null,
    "selector-attribute-operator-space-after": "always",
    "selector-attribute-operator-space-before": "always",
    "selector-attribute-quotes": "always",
    "selector-class-pattern": "",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-id-pattern": "",
    "selector-list-comma-newline-after": "always-multi-line",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",
    "selector-max-attribute": 2,
    "selector-max-class": 5,
    "selector-max-combinators": 5,
    "selector-max-compound-selectors": 5,
    "selector-max-empty-lines": 0,
    "selector-max-id": 0,
    "selector-max-specificity": null,
    "selector-max-type": 3,
    "selector-max-universal": 2,
    "selector-nested-pattern": "",
    "selector-no-qualifying-type": null,
    "selector-no-vendor-prefix": null,
    "selector-pseudo-class-blacklist": null,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": null,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "single",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "string-quotes": "single",
    "time-min-milliseconds": 10,
    "unit-blacklist": null,
    "unit-case": "lower",
    "unit-no-unknown": true,
    "value-keyword-case": "lower",
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 1,
    "value-no-vendor-prefix": true,

    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-closing-brace-space-after": "always-intermediate",
    "scss/at-else-empty-line-before": null,
    "scss/at-else-if-parentheses-space-before": "always",
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-parentheses-space-before": "never",
    "scss/at-function-pattern": null,
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-if-closing-brace-space-after": "always-intermediate",
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": null,
    "scss/at-import-partial-extension-whitelist": null,
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "scss/at-mixin-parentheses-space-before": "never",
    "scss/at-mixin-pattern": null,
    "scss/at-rule-no-unknown": true,
    "scss/declaration-nested-properties": "never",
    "scss/declaration-nested-properties-no-divided-groups": null,
    "scss/dollar-variable-colon-newline-after": null,
    "scss/dollar-variable-colon-space-after": "always-single-line",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-empty-line-before": null,
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/dollar-variable-pattern": null,
    "scss/double-slash-comment-empty-line-before": null,
    "scss/double-slash-comment-inline": null,
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/media-feature-value-dollar-variable": "always",
    "scss/operator-no-newline-after": null,
    "scss/operator-no-newline-before": true,
    "scss/operator-no-unspaced": true,
    "scss/partial-no-import": null,
    "scss/percent-placeholder-pattern": null,
    "scss/selector-no-redundant-nesting-selector": null
  }
};

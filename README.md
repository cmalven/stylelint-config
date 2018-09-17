# Malven Co. Stylelint Config

> The Malven Co. shareable config for stylelint.

Use it as is or as a foundation for your own config.

## Installation

```bash
npm install stylelint stylelint-scss @malven/stylelint-config --save-dev
```

## Usage

If you've installed `@malven/stylelint-config` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "@malven/stylelint-config"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, turn off the `block-no-empty` rule, and add the `unit-whitelist` rule:

```json
{
  "extends": "@malven/stylelint-config",
  "rules": {
    "at-rule-no-unknown": [ true, {
      "ignoreAtRules": [
        "extends"
      ]
    }],
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```


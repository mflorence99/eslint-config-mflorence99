module.exports = {
  "env": {
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import-splitnsort/recommended"
  ],
  "ignorePatterns": [
    "*.js",
    "node_modules/"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "import-splitnsort"
  ],
  "reportUnusedDisableDirectives": true,
  "rules": {
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/brace-style": "error",
    "@typescript-eslint/class-literal-property-style": [
      "error",
      "fields"
    ],
    "@typescript-eslint/comma-spacing": [
      "error",
      {
        "after": true,
        "before": false
      }
    ],
    "@typescript-eslint/default-param-last": [
      "error"
    ],
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-ordering": [
      "error",
      {
        "default": {
          "memberTypes": [
            "signature",
            "public-static-field",
            "protected-static-field",
            "private-static-field",
            "public-instance-field",
            "protected-instance-field",
            "private-instance-field",
            "public-abstract-field",
            "protected-abstract-field",
            "private-abstract-field",
            "public-field",
            "protected-field",
            "private-field",
            "static-field",
            "instance-field",
            "abstract-field",
            "field",
            "public-constructor",
            "protected-constructor",
            "private-constructor",
            "constructor",
            "public-static-method",
            "protected-static-method",
            "private-static-method",
            "public-instance-method",
            "protected-instance-method",
            "private-instance-method",
            "public-abstract-method",
            "protected-abstract-method",
            "private-abstract-method",
            "public-method",
            "protected-method",
            "private-method",
            "static-method",
            "instance-method",
            "abstract-method",
            "method"
          ],
          "order": "alphabetically"
        }
      }
    ],
    "@typescript-eslint/method-signature-style": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "format": [
          "camelCase"
        ],
        "selector": "default"
      },
      {
        "format": [
          "camelCase",
          "UPPER_CASE"
        ],
        "selector": "variable"
      },
      {
        "format": [
          "camelCase"
        ],
        "leadingUnderscore": "allow",
        "selector": "parameter"
      },
      {
        "format": [
          "camelCase"
        ],
        "leadingUnderscore": "allow",
        "modifiers": [
          "private"
        ],
        "selector": "memberLike"
      },
      {
        "format": [
          "PascalCase"
        ],
        "selector": "typeLike"
      }
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extra-non-null-assertion": [
      "error"
    ],
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-implied-eval": "off",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": false,
        "vars": "all"
      }
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/quotes": [
      "error",
      "single"
    ],
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/semi": [
      "error",
      "always"
    ],
    "@typescript-eslint/unbound-method": [
      "error",
      {
        "ignoreStatic": true
      }
    ],
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "comma-spacing": "off",
    "default-param-last": "off",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "func-call-spacing": "error",
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true,
        "overrides": {}
      }
    ],
    "max-len": "off",
    "no-empty": "off",
    "no-prototype-builtins": "off",
    "no-unused-vars": [
      "off"
    ],
    "quotes": "off",
    "semi": "off",
    "space-before-blocks": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": [
      "error",
      "always"
    ]
  }
};

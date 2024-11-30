import typescriptEslint from "@typescript-eslint/eslint-plugin";
import importSplitnsort from "eslint-plugin-import-splitnsort";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/*.js", "**/node_modules/"],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import-splitnsort/recommended",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        "import-splitnsort": importSplitnsort,
    },

    linterOptions: {
        reportUnusedDisableDirectives: true,
    },

    languageOptions: {
        globals: {
            ...globals.node,
        },

        parser: tsParser,
        sourceType: "module",
    },

    rules: {
        "@typescript-eslint/adjacent-overload-signatures": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/class-literal-property-style": ["error", "fields"],

        "@typescript-eslint/default-param-last": ["error"],
        "@typescript-eslint/explicit-function-return-type": ["error"],
        "@typescript-eslint/explicit-module-boundary-types": "off",

        "@typescript-eslint/member-ordering": ["error", {
            default: {
                order: "alphabetically",

                memberTypes: [
                    "signature",
                    "call-signature",
                    "public-static-field",
                    "protected-static-field",
                    "private-static-field",
                    "#private-static-field",
                    "public-decorated-field",
                    "protected-decorated-field",
                    "private-decorated-field",
                    "public-instance-field",
                    "protected-instance-field",
                    "private-instance-field",
                    "#private-instance-field",
                    "public-abstract-field",
                    "protected-abstract-field",
                    "public-field",
                    "protected-field",
                    "private-field",
                    "#private-field",
                    "static-field",
                    "instance-field",
                    "abstract-field",
                    "decorated-field",
                    "field",
                    "static-initialization",
                    "public-constructor",
                    "protected-constructor",
                    "private-constructor",
                    "constructor",
                    "public-static-get",
                    "protected-static-get",
                    "private-static-get",
                    "#private-static-get",
                    "public-decorated-get",
                    "protected-decorated-get",
                    "private-decorated-get",
                    "public-instance-get",
                    "protected-instance-get",
                    "private-instance-get",
                    "#private-instance-get",
                    "public-abstract-get",
                    "protected-abstract-get",
                    "public-get",
                    "protected-get",
                    "private-get",
                    "#private-get",
                    "static-get",
                    "instance-get",
                    "abstract-get",
                    "decorated-get",
                    "get",
                    "public-static-set",
                    "protected-static-set",
                    "private-static-set",
                    "#private-static-set",
                    "public-decorated-set",
                    "protected-decorated-set",
                    "private-decorated-set",
                    "public-instance-set",
                    "protected-instance-set",
                    "private-instance-set",
                    "#private-instance-set",
                    "public-abstract-set",
                    "protected-abstract-set",
                    "public-set",
                    "protected-set",
                    "private-set",
                    "#private-set",
                    "static-set",
                    "instance-set",
                    "abstract-set",
                    "decorated-set",
                    "set",
                    "public-static-method",
                    "protected-static-method",
                    "private-static-method",
                    "#private-static-method",
                    "public-decorated-method",
                    "protected-decorated-method",
                    "private-decorated-method",
                    "public-instance-method",
                    "protected-instance-method",
                    "private-instance-method",
                    "#private-instance-method",
                    "public-abstract-method",
                    "protected-abstract-method",
                    "public-method",
                    "protected-method",
                    "private-method",
                    "#private-method",
                    "static-method",
                    "instance-method",
                    "abstract-method",
                    "decorated-method",
                    "method",
                ],
            },
        }],

        "@typescript-eslint/method-signature-style": "off",

        "@typescript-eslint/naming-convention": ["error", {
            format: ["camelCase"],
            selector: "default",
        }, {
            format: ["camelCase", "UPPER_CASE"],
            selector: "variable",
        }, {
            format: ["camelCase"],
            leadingUnderscore: "allow",
            selector: "parameter",
        }, {
            format: ["camelCase"],
            leadingUnderscore: "allow",
            modifiers: ["private"],
            selector: "memberLike",
        }, {
            format: ["PascalCase"],
            selector: "typeLike",
        }],

        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extra-non-null-assertion": ["error"],
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-implied-eval": "off",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",

        "@typescript-eslint/no-unused-vars": ["error", {
            argsIgnorePattern: "^_",
            ignoreRestSiblings: false,
            vars: "all",
        }],

        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/restrict-template-expressions": "off",

        "@typescript-eslint/unbound-method": ["error", {
            ignoreStatic: true,
        }],

        "brace-style": ["error", "1tbs", {
            allowSingleLine: true,
        }],

        "comma-spacing": "off",
        "default-param-last": "off",
        eqeqeq: ["error", "smart"],
        "func-call-spacing": "error",

        indent: ["error", 2, {
            SwitchCase: 1,
        }],

        "keyword-spacing": ["error", {
            before: true,
            after: true,
            overrides: {},
        }],

        "max-len": "off",
        "no-empty": "off",
        "no-prototype-builtins": "off",
        "no-unused-vars": ["off"],
        quotes: "off",
        semi: "off",
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": ["error", "always"],
    },
}];

import filenames from "eslint-plugin-filenames";
import tailwindcss from "eslint-plugin-tailwindcss";
import simpleImportSort from "eslint-plugin-simple-import-sort";
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
    ignores: ["**/node_modules", "**/out", "!**/.storybook"],
}, ...compat.extends("airbnb-base", "next/core-web-vitals", "plugin:prettier/recommended"), {
    plugins: {
        filenames,
    },

    rules: {
        "prettier/prettier": ["error", {
            singleQuote: true,
            endOfLine: "auto",
        }],

        "func-style": ["error", "expression"],
        "filenames/match-regex": ["error", "^[a-z-]+$", true],
    },
}, ...compat.extends(
    "plugin:tailwindcss/recommended",
    "airbnb",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
).map(config => ({
    ...config,
    files: ["**/*.js", "**/*.jsx"],
})), {
    files: ["**/*.js", "**/*.jsx"],

    plugins: {
        tailwindcss,
        "simple-import-sort": simpleImportSort,
        filenames,
    },

    settings: {
        "import/resolver": {
            node: {
                moduleDirectory: ["node_modules", "."],
            },

            alias: {
                map: [["@", "./src"]],
                extensions: [".js", ".jsx"],
            },
        },
    },

    rules: {
        "import/extensions": "off",
        "react/function-component-definition": "off",
        "react/destructuring-assignment": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
        "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
        "import/prefer-default-export": "off",
        "simple-import-sort/imports": "off",
        "simple-import-sort/exports": "off",
        "import/order": "off",
        "unused-imports/no-unused-imports": "off",
        "unused-imports/no-unused-vars": "off",
        "react/jsx-sort-props": "off",
        "func-style": ["error", "expression"],
        "filenames/match-regex": ["error", "^[a-z0-9-]+$", true],
    },
}];
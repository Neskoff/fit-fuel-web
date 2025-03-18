import globals from "globals";
import pluginJs from "@eslint/js";
import typeScriptEsLint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import configPrettier from "eslint-config-prettier/flat";
import pluginPrettier from "eslint-plugin-prettier/recommended";

const reactVersion = "detect";
const filePattern = ["**/*.{js,mjs,cjs,ts,jsx,tsx}"];

const ignorePatterns = [
  "**/node_modules/**",
  "**/dist/**",
  "**/build/**",
  "**/coverage/**",
  "**/.husky/**",
];

export default [
  { files: filePattern },
  { ignores: ignorePatterns },
  { settings: { react: { version: reactVersion } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...typeScriptEsLint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginPrettier,
  configPrettier,
];

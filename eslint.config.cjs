const eslint = require("@eslint/js");
const tsEslint = require("typescript-eslint");
const eslintConfigCommonJS = require("./eslint/configs/commonjs.cjs");
const eslintConfigIgnores = require("./eslint/configs/ignores.cjs");
const eslintConfigPrettier = require("./eslint/configs/prettier.cjs");

module.exports = tsEslint.config(
  eslint.configs.recommended,
  ...eslintConfigIgnores,
  ...eslintConfigPrettier,
  ...eslintConfigCommonJS,
);

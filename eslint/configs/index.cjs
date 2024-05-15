const eslintConfigTypescript = require("./typescript.cjs");
const eslintConfigEsm = require("./esm.cjs");
const eslintConfigCommonJS = require("./commonjs.cjs");

// Plugins
const eslintConfigPrettier = require("./prettier.cjs");
const eslintConfigSvelte = require("./svelte.cjs");
const eslintConfigIgnores = require("./ignores.cjs");

module.exports = {
  eslintConfigTypescript,
  eslintConfigEsm,
  eslintConfigCommonJS,
  eslintConfigPrettier,
  eslintConfigSvelte,
  eslintConfigIgnores,
};

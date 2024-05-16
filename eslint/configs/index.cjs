const eslintConfigCommonJS = require('./commonjs.cjs')
const eslintConfigEsm = require('./esm.cjs')
const eslintConfigIgnores = require('./ignores.cjs')

// Plugins
const eslintConfigImport = require('./import.cjs')
const eslintConfigPrettier = require('./prettier.cjs')
const eslintConfigSvelte = require('./svelte.cjs')
const eslintConfigTypescript = require('./typescript.cjs')

module.exports = {
  eslintConfigTypescript,
  eslintConfigEsm,
  eslintConfigCommonJS,
  eslintConfigPrettier,
  eslintConfigSvelte,
  eslintConfigIgnores,
  eslintConfigImport,
}

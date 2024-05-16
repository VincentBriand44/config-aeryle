const eslint = require('@eslint/js')
const tsEslint = require('typescript-eslint')

const { eslintConfigIgnores, eslintConfigPrettier, eslintConfigImport } = require('./eslint/configs/index.cjs')

module.exports = tsEslint.config(
  eslint.configs.recommended,
  ...eslintConfigIgnores,
  ...eslintConfigPrettier,
  ...eslintConfigImport
)

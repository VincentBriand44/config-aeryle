# How to use ESLint's configs

1. Install the necessary packages

```bash
npm install --save-dev eslint typescript-eslint
```

2. Create a `eslint.config.cjs` file in the root of your project
3. Use the barebones config (Typescript only)

```javascript
const tsEslint = require('typescript-eslint')
const { eslintConfigTypescript } = require('config-aeryle/eslint/configs/index.cjs')

module.exports = tsEslint.config(
  ...eslintConfigTypescript
  // Additional configs
)
```

# Optional configs

## eslint-plugin-import

```javascript
const {
  eslintConfigTypescript,
  eslintConfigCommonJS,
  eslintConfigEsm,
  eslintConfigImport,
} = require('config-aeryle/eslint/configs/index.cjs')

module.exports = tsEslint.config(
  ...eslintConfigTypescript,
  ...eslintConfigCommonJS,
  ...eslintConfigEsm,
  ...eslintConfigImport
  // Additional configs
)
```

# How to use Prettier's configs

1. Install the necessary packages

```bash
npm install --save-dev prettier
```

2. Create a `.prettierrc.js` file in the root of your project
3. Use the barebones config

```javascript
import { prettierConfig } from './prettier/configs/default.js'

export default {
  ...prettierConfig,
}
```

# Optional configs

## prettier-plugin-svelte

```javascript
import { prettierConfig } from 'config-aeryle/configs/default.js'
import { prettierConfigSvelte } from 'config-aeryle/configs/svelte.js'

export default {
  ...prettierConfig,
  ...prettierConfigSvelte,
}
```

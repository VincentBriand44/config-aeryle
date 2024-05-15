import { prettierConfig } from './default.js'

/** @type {import("prettier").Config} */
export const prettierConfigTailwind = {
  plugins: [...(prettierConfig.plugins ?? []), 'prettier-plugin-tailwind'],
}

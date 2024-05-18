import { prettierConfig } from './default'

/** @type {import("prettier").Config} */
export const prettierConfigSvelte = {
  plugins: ['prettier-plugin-svelte'],
  overrides: [
    ...(prettierConfig.overrides ?? []),
    {
      files: ['**/*.svelte'],
      options: {
        parser: 'svelte',
      },
    },
  ],
  svelteAllowShorthand: true,
  svelteStrictMode: false,
  svelteSortOrder: 'scripts-options-markup-styles',
}

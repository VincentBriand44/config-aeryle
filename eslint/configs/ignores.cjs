const tsEslint = require("typescript-eslint");

/** @type {import('eslint').Linter.FlatConfig} */
module.exports = tsEslint.config({
  name: "ignores",
  ignores: [
    ".DS_Store",
    "node_modules",
    "build",
    ".svelte-kit",
    "package",
    ".env",
    ".env.*",
    "!.env.example",
    "android",

    // Ignore files for PNPM, NPM and YARN
    "pnpm-lock.yaml",
    "bun.lockb",
    "package-lock.json",
    "yarn.lock",
  ],
});

// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    trailingComma: 'all',
    tabWidth: 2,
    semi: false,
    singleQuote: true,
    printWidth: 120,
    bracketSpacing: true,
    arrowParens: 'always',
    endOfLine: 'lf',
}

module.exports = config

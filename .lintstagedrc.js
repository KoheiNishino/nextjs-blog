const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --dir . --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{ts,tsx}': [() => 'tsc'],
  '*.{js,ts,tsx}': [buildEslintCommand],
  '*.test.{js,ts,tsx}': ['jest'],
  '*.{css,scss}': ['stylelint --fix'],
}

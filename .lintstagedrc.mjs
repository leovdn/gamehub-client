import path from 'path'

const buildEslintCommand = (filenames) =>
  `yarn lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`


export default {
  "**/*.{js,ts,tsx}": [buildEslintCommand, 'yarn test --findRelatedTests --bail --passWithNoTests'],
}

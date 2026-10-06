# JERA Design UI

## Installation

***NOTE: Since this package is private, GitHub PAT (package:read) is required.***

1. Create GitHub PAT if you didn't have it yet [here](https://github.com/settings/tokens/new).

1. Create `.npmrc` in the project that uses this package:

   ```
   @jeraoss:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${NPM_TOKEN}
   ```

1. Set your GitHub PAT to `$NPM_TOKEN` environment variable in the current process:

   ```bash
   export NPM_TOKEN=your_token
   ```

1. Install this package and its dependencies:

   ```bash
   yarn add @jeraoss/jera-design-ui react react-dom uikit @azure/msal-browser @azure/msal-react navi react-navi
   ```

## Development

### ⚠️ NOTE ⚠️

DO NOT include `uikit` in the dependencies of this package directly. `uikit` should be in the dependencies of a project that uses this package.

## Publishing

1. Bump the package version ([npm Docs - npm-version](https://docs.npmjs.com/cli/v8/commands/npm-version)).

   For example:

   ```bash
   npm version patch # v1.0.2 -> v1.0.3
   ```

1. Push new changes and the tag:

   ```bash
   git push --follow-tags
   ```

1.  Visit the [tag list](https://github.com/jeraoss/jera-design-ui/tags) and create a new release.

    This will trigger the [GitHub Action](https://github.com/jeraoss/jera-design-ui/actions).

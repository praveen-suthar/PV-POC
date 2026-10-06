# nodejs-frontend-template

## Installation

1. Install the dependencies.

    ```bash
    $ yarn
    ```

## Development

1. Start containers.

    You can choose one of:

    ```bash
    # Start with the existing containers.
    $ yarn dev:container:start
    ```

    ```bash
    # Build and start new containers without cache.
    $ yarn dev:container:start:nocache
    ```

1. 🎉 Happy coding! 🎉

## Development tools

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [JERADesignUI](https://github.com/jeraoss/jera-design-ui/packages/1051588)
- [UIkit](https://getuikit.com/docs)
- [Navi](https://frontarm.com/navi/en/)
- [Jest](https://jestjs.io/)
- [TypeORM](https://typeorm.io/)
- [Parcel](https://parceljs.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [husky](https://typicode.github.io/husky/#/)
- [lint-staged](https://github.com/okonet/lint-staged)

## Troubleshooting

1. *Cannot find module '@jeraoss/jera-design-ui' or its corresponding type declarations.*

   Try:

   ```sh
   yarn build-lib
   yarn link:jera-design-ui
   ```

# using-ts-aliases-in-cypress-tests

- install dependencies with `npm ci`
- start the local app with `npm start`
- from another terminal start Cypress tests `npm run cy:open`

You should see end-to-end tests from [cypress/integration/spec.ts](cypress/integration/spec.ts) running against the page.

See path aliases in [cypress/tsconfig.json](cypress/tsconfig.json) and matching Webpack aliases in [cypress/plugins/cy-ts-preprocessor.js](cypress/plugins/cy-ts-preprocessor.js)

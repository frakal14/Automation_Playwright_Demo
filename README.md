## Commands

- check `NodeJS` version  
  `node -v`
- new project with Playwright  
  `npm init playwright@latest`
- record tests for given site  
  `npx playwright codegen http://www.automationpractice.pl/index.php?`
- run tests without browser GUI  
  `npx playwright test`
- run tests with browser GUI  
  `npx playwright test --headed`
- view report  
  `npx playwright show-report`
- run trace
  `npx playwright test --trace on`

## Playwright Config modifications

- config file `playwright.config.ts`
- disable browsers, i.e. Firefox

  ```javascript
  // {
  //   name: 'firefox',
  //   use: {
  //     ...devices['Desktop Firefox'],
  //   },
  // },
  ```

  ## Visual Studio Code

  - Preview: for README.md
  - Autosave: in file -> autosave enabled
  - Added Prettier

  ## Prettier

  - install Prettier
  - npm install --save-dev --save-exact prettier

  - configure Prettier

  - exlude files in .prettierignore

  - package-lock.json
  - playwright-report
  - test-results

  set rules in .prettierrc.json

        {
            "singleQuote": true
        }

  run Prettier
  npx prettier --write .

additionaly you can install VSC extension: Prettier

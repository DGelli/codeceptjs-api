# codeceptjs-bdd-appium


## Prepare environment
- **Have installed**
    - `NodeJs` (last version) [download](https://nodejs.org/pt-br/download/)
    - `Visual Studio Code` (Last version) [download](https://code.visualstudio.com/download)
- **Installing dependencies**
  
    In a terminal, into the project folder directory, run command: `npm install`


## Run tests using terminal

- **Run tests**
    - single run:
        ```
        npx codeceptjs run --verbose
        ```
    - run with report.xml:
        ```
        npx codeceptjs run --reporter mocha-junit-reporter
        ```
    - run with cucumber tags:
        ```
        npx codeceptjs run --grep '@testAll'
        ```
    - Run with environment variables:
        ```
        ENV 'hml2' npx codeceptjs run
        ```
    - run with shortcut, you can parameterize the shortcuts in the script of the `package.json` file (run only git bash):
        ```
        npm run api
        npm run tag @get
        ```
## Run Allure
**Launch Allure server and see the report like on a screenshot above (Required: JAVA_HOME)**
    
    allure serve output

## Repairs if necessary
    npm update
    npm install npm@latest

## Validações
// matche code
I.seeResponseCodeIs(200);

// matches 200, 201, 202, ... 206
I.seeResponseCodeIsSuccessful();

// matches 300...308
I.seeResponseCodeIsRedirection();

// matches 400..451
I.seeResponseCodeIsClientError();

// matches 500-511
I.seeResponseCodeIsServerError();
# aspireapp

I have use Cucumber for BDD Test Structure

The cypress-cucumber-preprocessor adds support for using feature files when testing with Cypress.

Installation
Install the plugin by running:

npm install --save-dev cypress-cucumber-preprocessor

Cypress Configuration
Add it to your plugins:

cypress/plugins/index.js

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

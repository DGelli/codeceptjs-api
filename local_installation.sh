#!/bin/bash

# Install codecept
npx create-codeceptjs .
# Install asserts and Resources
npm i codeceptjs-chai
# Install .env file reader
npm install dotenv --save
# Install multi report
npm i mocha-multi
# Install Allure Report
npm install allure-commandline --save-dev

# some dependences
npm i cpf_cnpj
npm i codeceptjs-tests
npm i datetime-helper
npm i random-number
npm i datetime-helper

# FINAL CHECKS
npm audit fix

# Run a single scenario to check if everything works:
# npx codeceptjs run --features --steps --grep '@testAll'
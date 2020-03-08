// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
//import config from "../config";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
Cypress.Commands.add("login", (key) => { 
  cy.visit('https://bbtestassignment.now.sh/')
  cy.get('input[type=text]').type(key);
        cy.contains('Start').click();
      

 })

 Cypress.Commands.add("loginairtable", (email,password) => { 
  cy.visit('https://airtable.com/login?continue=%2FtblxxESZYZmCQS1lG%2FviwadzzXK9lCdaJVZ%3Fblocks%3Dhide')
  cy.get('input[name=email]').type(email)
  cy.get('input[name=password]').type(password)
  cy.get('input[type=submit]').click()
      

 })

// existing commands.
Cypress.Commands.add("authVisit", () => {
  cy.setCookie("base_id", "appmNAuZiipjKe3yG");
  cy.visit("/");
});

Cypress.Commands.add("guestVisit", () => {
  cy.clearCookies();
  cy.visit("/");
});

Cypress.Commands.add("logout", () => {
  cy.clearCookies();
  cy.visit("/auth/logout");
});
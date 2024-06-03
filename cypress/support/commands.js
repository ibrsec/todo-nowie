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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('home', () => {  
          cy.visit('http://localhost:3000/')
          cy.get('[data-test="home-hero"]').should("be.visible")
  
        

})
Cypress.Commands.add('navbar', () => {
    describe('navbar test', () => {
        it('navbar', () => {
          cy.visit('http://localhost:3000/')
          cy.get('[data-test="home-hero"]').should("be.visible")
        })
        
      })

})
Cypress.Commands.add('login', () => {
          cy.visit("http://localhost:3000/login").get('[data-test="login-header"]').should("be.visible").contains("Login")
        cy.get('[data-test="login-email-input"]').should("be.visible").type("test@test.com");
        cy.get('[data-test="login-password-input"]').should("be.visible").type("test123");
        cy.get('[data-test="login-submit"]').should("be.visible").contains("Submit").click({force: true})
        cy.get('.Toastify__toast-body').should("be.visible").contains("Logged in successfully!");
        // cy.url().contains("/dashboard");
        cy.title().should('eq', 'Dashboard | Todo Nowie')
        cy.get('[data-test="dashboard-header"').should("be.visible").contains("Today's Todos")

})
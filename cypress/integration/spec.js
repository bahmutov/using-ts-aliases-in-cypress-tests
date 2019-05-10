// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />
it('shows greeting', function () {
  cy.visit('http://localhost:1234')
  cy.contains('#app', 'Hello World').should('be.visible')
})

// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
import {greeting} from '@src/utils'
it('shows greeting', function () {
  cy.visit('http://localhost:1234')
  cy.contains('#app', greeting).should('be.visible')
})

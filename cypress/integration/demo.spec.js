describe('the issue', () => {
    it('be bad', () => {
        cy.visit('')
        cy.contains('Click me').click()
        cy.get('[data-testid="response-content"]').should('have.text', `I'm null`)
    })
})
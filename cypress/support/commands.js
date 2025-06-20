Cypress.Commands.add('Campos',()=>{
    cy.visit('../src/index.html')
    cy.get('#Name').type('telma')
    cy.get('#Job').type('Analista de teste/ QA')
    cy.get('#email').type('qa@teste.com')
    cy.get('#phone').type('819999999')
})
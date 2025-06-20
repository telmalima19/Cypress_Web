describe('Cypress e Github Actions', () => {
  it('passes', () => {
    cy.visit('../src/index.html')
    cy.title().should('eq','Curso de Cypress + Github Actions')
  })

it('Preencher campos', () => {
    cy.visit('../src/index.html')
    cy.get('#Name').type('telma')
    cy.get('#Job').type('Analista de teste/ QA')
    cy.get('#email').type('qa@teste.com')
    cy.get('#phone').type('819999999')
  })
it('Selecionar produtos', () => {
    cy.visit('../src/index.html')
    cy.get('#product').select('carro')
    cy.get('#product').select('aeroporto')
    cy.get('#product').select('Empresa')
    cy.get('#product').select('Mercado')
    
  })
  it('Marcar radio button', () => {
    cy.visit('../src/index.html')
    cy.get('input[type="radio"][value="rh"]').check
    cy.get('input[type="radio"][value="diretoria"]').check
    cy.get('input[type="radio"][value="operador"]').check
    })
    it('Marcar check', () => {
    cy.visit('../src/index.html')
    cy.get('#email-checkbox').check()
    cy.get('#phone-checkbox').check()
    })
    it('Desmarcar check', () => {
    cy.visit('../src/index.html')
    cy.get('#email-checkbox').check()
    cy.get('#email-checkbox').uncheck()
    })
    it('Preenche a caixa de Texto',()=>{
    cy.visit('../src/index.html')
    cy.get('#text-area').type('Telma QA')
  })
    it('Anexa um Arquivo',()=>{
    cy.visit('../src/index.html')
    cy.get('#file-upload').as('fileInput').attachFile('arquivo.txt')
  })

})
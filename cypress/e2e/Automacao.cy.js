const texto="dsfkerhtiuerhituretiiertuebtihieruhti eiruterthuierhtuiheriutheuirht"
describe('Cypress e Github Actions', () => {
  it('Validar titulo', () => {
    cy.visit('../src/index.html')
    cy.title().should('eq','Curso de Cypress + Github Actions')
  })

it('Preencher campos', () => {
  cy.Campos()

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
    it('Preenche a caixa de texto',()=>{
    cy.visit('../src/index.html')
    cy.get('#text-area').type('Telma QA')
  })
      it('Preenche a caixa de texto com texto longo',()=>{
    cy.visit('../src/index.html')
    cy.get('#text-area').type(texto)
  })
    it('Anexa um Arquivo de texto',()=>{
    cy.visit('../src/index.html')
    cy.get('#file-upload').as('fileInput').attachFile('arquivo.txt')
  })
      it('Anexa imagem',()=>{
    cy.visit('../src/index.html')
    cy.get('#file-upload').as('fileInput').attachFile('imagem.jpg')
  })

  it('Enviar cadastro sucesso',()=>{
    cy.visit('../src/index.html')
    cy.Campos()
    cy.get('#phone-checkbox').check()
    cy.get('#text-area').type('Teste QA')
    cy.contains("button",'Enviar').click()
  })
})
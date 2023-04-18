function dadosLogin(email, senha) {
    cy.get('input[formcontrolname="userName"]').focus().type(email) // .focus().type - Caso precise por foco no campo antes de digitar
    cy.get('input[formcontrolname="password"]').focus().type(senha, {log: false})
  }

function logar() {
  cy.contains('button', 'login').click()
  }

Cypress.Commands.add('loginInvalido', (email, senha) => { 
    dadosLogin('teste','1234')
    logar()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Invalid user name or password')
    })
})

Cypress.Commands.add('loginValido', (email, senha) => {  
    dadosLogin(Cypress.env('userName'), Cypress.env('password')) // Dados das variaveis de ambiente em cypress.env.json
    logar()

    cy.contains('a', '(Logout)').should('be.visible')
})

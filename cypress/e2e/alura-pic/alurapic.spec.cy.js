describe('Usabilidade tela inicial', () => {

    beforeEach(() => {
        cy.urlAluraPic()
    })

    //it.only

    it('Verificar mensagens da tela inicial', () => {
        cy.contains('ap-vmessage', 'User name is required').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required').should('be.visible')
        cy.get('button[type="submit"]').should('be.disabled') // Botão deve estar desabilitado quando não há dados informados
    })

    it('Verificar botao habilitado na tela inicial', () => {
        cy.get('input[formcontrolname="userName"]').type('Flavio')
        cy.get('input[formcontrolname="password"]').type('123')
        cy.get('button[type="submit"]').should('be.enabled') // Botão deve habilitado quando não há dados informados
    })

    it('Verificar o nome da aplicacao na tela inicial', () => {
        cy.contains('a', 'ALURAPIC').should('be.visible')
    })

    it('Verificar menu clicavel na tela inicial', () => {
        cy.get('.navbar-brand > .fa').click()
        cy.get('.menu-bar > .fa').should('be.visible')
    })

})
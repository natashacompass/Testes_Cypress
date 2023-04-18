describe('Login de usuarios Alura Pic', () => {

    beforeEach(() => {
        cy.urlAluraPic()
        //cy.visit('/')
    })

    it('Fazer login com usuario invalido', () => {
        cy.loginInvalido()
    })

    it('Fazer login com usuario valido', () => {
        cy.loginValido()
    })

})
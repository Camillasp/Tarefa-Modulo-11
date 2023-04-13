/// <reference types="cypress" />

describe('Funcionalidade Pré cadastro', () => {

    beforeEach (() => {
        cy.visit('http://lojaebac.ebaonline.art.br/minha-conta/')

    });
    
    it('Deve completar o pré cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email()

        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('!teste@testes$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()
        
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

});
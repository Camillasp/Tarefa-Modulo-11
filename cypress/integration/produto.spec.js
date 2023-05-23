/// <reference types="cypress" />

const { contains } = require("cypress/types/jquery");

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaonline.art.br/produtos/')
    });

    it('Deve selecionarum produto da lista', () => {
        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt')
            .clik()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
        contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click

        cy.get('.dropdow-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' x "Ariel Roll Sleeve" foram adicionados no seu carrinho.')
        
    });

    it('Deve adicionar produtos ao carrinho, com comando customizado', () => {
        
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'M', 'Black', 3)
    });

    it('Deve adicionar produtos ao carrinho, com comando customizado', () => {

        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XS', 'Red', 1)
        
    });

});
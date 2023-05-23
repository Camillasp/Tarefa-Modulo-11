class EnderecoPage {

    editarEnderecoFaturamento() {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-adress > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#billing_first').clear().type('Camilla')
        cy.get('#billing_last').type('Pacheco')
        cy.get('#billing_company').type('EBAC')
        cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
        cy.get('#billing_address').clear().type('Av. Camargo Aranha')
        cy.get('#billing_address').clear().type('120')
        cy.get('#billing_city').clear().type('Valinhos')
        cy.get('#select2-billing_state-container').click().type('São Paulo{enter}')
        cy.get('#billing_postcode').type('01000100')
        cy.get('#billing_phone').clear().type('119090671122')
        cy.get('#billing_email').clear().type('email@dominio.com')
        cy.get('.button').click


    }

    editarEnderecoEntrega() {

    }

}

export default new EnderecoPage()
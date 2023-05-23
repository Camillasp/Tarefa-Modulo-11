/// <reference types="cypress" />

import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade de Endereçamento, Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha conta')
        cy.fixture('perfil').then(dados =>{
        cy.login(dados.usuario, dados.senha)

        })

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Camilla','Pacheco', 'EBAC', 'Brasil', 'Av. Camargo Aranha', '120', 'Valinhos', 'São Paulo', '01000100', '119090671122', 'camilla@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    });


    it('Deve fazer cadastro de faturamento com sucesso, usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[2].nome,
            dadosEndereco[2].sobrenome,
            dadosEndereco[2].empresa,
            dadosEndereco[2].endereco,
            dadosEndereco[2].numero,
            dadosEndereco[2].pais,
            dadosEndereco[2].cidade,
            dadosEndereco[2].estado,
            dadosEndereco[2].cep,
            dadosEndereco[2].telefone,
            dadosEndereco[2].email
            )

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });


    it('Deve fazer cadastro de faturamento com sucesso', () => {
        
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        
    });
});
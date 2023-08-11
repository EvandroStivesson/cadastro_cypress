describe('Testando MeuPc.Net', () => {
  it('cadastro automatico', () => {

    //responvesavel para selecionar o site de 
    cy.visit('https://meupc.net/')
    

    //espera 1 segundo
    cy.wait(1000)

    //faz a acão de clica na opcão escolihda
    cy.get('.navbar-burger').click()
    
    //clica tbm, mas de uma forma mais especifica por existir outros com a msm href
    cy.get('ul.menu-list') //pegamos a ul da classe menu-list
    .children('li')//pegamos o filho da ul
    .children('a[href="https://meupc.net/cadastro"]')//pegamos o filho que tem o href
    .click()
    
    //faz a função de escrever nos campos selecionados                                                                
    cy.get('input[name="nome"]').type('teste')
    cy.get('input[name="email"]').type('teste@gmail.com')
    cy.get('input[placeholder="Defina uma senha"]').type('@1000923ssA')


    //força um click na opção de box
     cy.get('input[type="checkbox"]').check({force: true})

   cy.contains('Cadastrar-se').click()
   cy.contains('Escolha seu nome de usuário').should('be.visible')
  })
})
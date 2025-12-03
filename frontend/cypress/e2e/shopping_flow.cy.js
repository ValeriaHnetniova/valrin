describe('Сценарій покупки (User Flow)', () => {
  
  it('Користувач заходить, додає товар і перевіряє кошик', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('input[type="email"]').type('test@cypress.com');
    cy.get('input[type="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    
    cy.contains('LOG OUT').should('be.visible');

    cy.contains('view all').click(); 
    cy.url().should('include', '/collection');

    cy.get('img').last().click(); 

    cy.contains('Додати в кошик').should('be.visible');
    
    cy.contains('Додати в кошик').click();

    cy.contains('Додати в кошик').should('not.exist');

    cy.contains('CART').click();
    cy.url().should('include', '/cart');

    cy.get('button').contains('×').should('exist'); 
    cy.contains('Разом').should('be.visible'); 
  });
});
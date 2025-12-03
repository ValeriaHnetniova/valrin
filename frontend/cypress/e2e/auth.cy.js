describe('Авторизація та Реєстрація', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:5173/login');
  });

  it('1. Успішний вхід користувача', () => {
    
    cy.get('input[type="email"]').type('test@cypress.com');
    cy.get('input[type="password"]').type('password123');
    
    cy.get('button[type="submit"]').click();

    cy.url().should('eq', 'http://localhost:5173/');
    
    cy.contains('LOG OUT').should('be.visible');
    cy.contains('LOG IN').should('not.exist');
  });

  it('2. Помилка при неправильному паролі', () => {
    cy.get('input[type="email"]').type('test@cypress.com');
    cy.get('input[type="password"]').type('wrongpassword'); 
    
    cy.get('button[type="submit"]').click();

    cy.contains(/error|помилка|credential/i).should('be.visible');
    
    cy.url().should('include', '/login');
  });

 it('3. Перехід на сторінку реєстрації', () => {
    cy.resetSession(); 

    cy.visit('http://localhost:5173/login');

    cy.contains('REGISTER').click();
    
    cy.url().should('include', '/register');
    
    cy.get('input[placeholder="First Name"]').should('be.visible'); 
  });
});
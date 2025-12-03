describe('Навігація по сайту (Гість)', () => {
  
  beforeEach(() => {
    cy.resetSession();

    cy.visit('http://localhost:5173');
    
    cy.wait(1000);
  });

  it('1. Головна сторінка завантажується коректно', () => {
    cy.contains('VALRIN').should('be.visible'); 
    cy.contains('HOME').should('be.visible');
    cy.contains('LOG IN').should('be.visible'); 
  });

  it('2. Перехід на сторінку "About"', () => {
    cy.contains('ABOUT').click();
    
    cy.url().should('include', '/about');
    cy.contains('In September 1998, we presented our first women’s clothing collection, New Era, which became a symbol of a new approach to fashion. ').should('be.visible');
  });

  it('3. Перехід на сторінку "Collection"', () => {
    cy.contains('view all').click();
    
    cy.url().should('include', '/collection');
    cy.get('img').should('have.length.greaterThan', 0);
  });

  it('4. Захист роутів: Гість не може зайти в /cart', () => {
    cy.visit('http://localhost:5173/cart');

    cy.url().should('include', '/login'); 
    cy.contains('LOG IN').should('be.visible');
  });
});
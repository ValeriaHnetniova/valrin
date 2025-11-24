import React from 'react';
import Header from './Header';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';
import { MemoryRouter } from 'react-router-dom';

const TestWrapper = ({ authValue, cartValue, children }) => {
  return (
    <MemoryRouter> 
      <AuthContext.Provider value={authValue}>
        <CartContext.Provider value={cartValue}>
          {children}
        </CartContext.Provider>
      </AuthContext.Provider>
    </MemoryRouter>
  );
};

describe('<Header />', () => {

  it('1. Гість бачить кнопку LOG IN і не бачить кошика', () => {
    const mockAuth = { 
      currentUser: null, 
      logout: cy.stub() 
    };
    const mockCart = { cartItems: [] };

    cy.mount(
      <TestWrapper authValue={mockAuth} cartValue={mockCart}>
        <Header />
      </TestWrapper>
    );

    cy.get('a').contains('LOG IN').should('be.visible'); 
    cy.get('a').contains('LOG OUT').should('not.exist'); 
    cy.get('a').contains('CART').should('not.exist');    
    cy.get('div').contains('VALRIN').should('be.visible'); 
  });

  it('2. Залогінений юзер бачить LOG OUT і правильну кількість у кошику', () => {
    const mockAuth = { 
      currentUser: { email: 'test@user.com', uid: '123' }, 
      logout: cy.stub() 
    };

    const mockCart = { 
      cartItems: [
        { id: 1, title: 'Shirt', quantity: 2 },
        { id: 2, title: 'Pants', quantity: 3 }
      ] 
    };

    cy.mount(
      <TestWrapper authValue={mockAuth} cartValue={mockCart}>
        <Header />
      </TestWrapper>
    );

    cy.get('a').contains('LOG OUT').should('be.visible'); 
    cy.get('a').contains('LOG IN').should('not.exist');   
    
    cy.get('a').contains('CART (5)').should('be.visible');
  });

  it('3. Клік по LOG OUT викликає функцію logout', () => {
    const logoutSpy = cy.stub().as('logoutSpy');

    const mockAuth = { 
      currentUser: { uid: '123' }, 
      logout: logoutSpy 
    };
    const mockCart = { cartItems: [] };

    cy.mount(
      <TestWrapper authValue={mockAuth} cartValue={mockCart}>
        <Header />
      </TestWrapper>
    );

    cy.contains('LOG OUT').click();

    cy.get('@logoutSpy').should('have.been.calledOnce');
  });

  it('4. Посилання HOME та ABOUT рендеряться з правильними шляхами', () => {
    const mockAuth = { currentUser: null };
    const mockCart = { cartItems: [] };

    cy.mount(
      <TestWrapper authValue={mockAuth} cartValue={mockCart}>
        <Header />
      </TestWrapper>
    );

    cy.contains('HOME').should('have.attr', 'href', '/');
    cy.contains('ABOUT').should('have.attr', 'href', '/about');
  });

});
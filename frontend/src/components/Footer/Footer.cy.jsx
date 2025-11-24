import React from 'react';
import Footer from './Footer';
import { MemoryRouter } from 'react-router-dom';

describe('<Footer />', () => {

  it('1. Рендерить всі секції та правильні посилання навігації', () => {
    cy.mount(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    cy.contains('Help').should('be.visible');
    
    cy.contains('VALRIN').should('be.visible');

    cy.contains('About Us').should('have.attr', 'href', '/about');
    cy.contains('Contacts').should('have.attr', 'href', '/contacts');
    cy.contains('Register/ Sign in').should('have.attr', 'href', '/login');
  });

  it('2. Має правильне посилання на Instagram (відкривається в новій вкладці)', () => {
    cy.mount(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    cy.contains('INSTAGRAM')
      .should('be.visible')
      .and('have.attr', 'href', 'https://instagram.com') 
      .and('have.attr', 'target', '_blank')             
      .and('have.attr', 'rel', 'noreferrer');           
  });

  it('3. Змінює класи залежно від пропса noMargin', () => {
    cy.mount(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    cy.get('footer')
      .invoke('attr', 'class')
      .should('not.contain', 'footerLogin');

    cy.mount(
      <MemoryRouter>
        <Footer noMargin={true} />
      </MemoryRouter>
    );
    cy.get('footer')
      .invoke('attr', 'class')
      .should('contain', 'footerLogin');
  });

});
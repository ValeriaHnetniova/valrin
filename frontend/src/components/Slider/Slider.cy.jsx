import React from 'react';
import Slider from './Slider';
import { MemoryRouter } from 'react-router-dom';

describe('<Slider />', () => {

  it('1. Рендерить заголовок, опис та кнопку "view all"', () => {
    cy.mount(
      <MemoryRouter>
        <Slider />
      </MemoryRouter>
    );

    cy.contains('CHECK OUT OUR NEW COLLECTION "PURE"').should('be.visible');

    cy.contains('The "Pure" collection embodies the essence').should('be.visible');

    cy.contains('view all')
      .should('be.visible')
      .and('have.attr', 'href', '/collection');
  });

  it('2. Рендерить слайди з картинками та текстом', () => {
    cy.mount(
      <MemoryRouter>
        <Slider />
      </MemoryRouter>
    );

    const firstItem = { text: "Stellar Steps Heels", img: "/img/card1.png" };
    
    cy.contains(firstItem.text).should('exist');

    cy.get(`img[src="${firstItem.img}"]`).should('exist');
  });

  it('3. Рендерить кнопки навігації (Prev/Next)', () => {
    cy.mount(
      <MemoryRouter>
        <Slider />
      </MemoryRouter>
    );

    cy.get('button').contains('❮').should('be.visible').click();

    cy.get('button').contains('❯').should('be.visible').click();
  });

  it('4. Секція має правильний клас зі стилів', () => {
    cy.mount(
      <MemoryRouter>
        <Slider />
      </MemoryRouter>
    );

    cy.get('section')
      .invoke('attr', 'class')
      .should('contain', 'collectionSection');
  });

});
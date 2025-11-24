import React from 'react';
import BackButton from './BackButton';

describe('<BackButton />', () => {

  it('1. Рендериться кнопка з правильним текстом "back"', () => {
    cy.mount(<BackButton />);

    cy.get('input[type="button"]')
      .should('be.visible')           
      .and('have.value', 'back');      
  });

 it('2. Викликає window.history.back() при кліку', () => {
    cy.mount(<BackButton />);

    cy.window().then((win) => {
      cy.stub(win.history, 'back').as('historyBackStub');
    });

    cy.get('input[value="back"]').click();

    cy.get('@historyBackStub').should('have.been.calledOnce');
  });

  it('3. Має CSS клас для стилізації', () => {
    cy.mount(<BackButton />);

    cy.get('input[type="button"]')
      .invoke('attr', 'class')
      .should('contain', 'buttonBack');
  });

});
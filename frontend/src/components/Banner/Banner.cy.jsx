import React from 'react';
import Banner from './Banner';

describe('<Banner />', () => {

  it('1. Рендерить зображення з правильними атрибутами src та alt', () => {
    const testImage = '/img/test-banner.png';
    const testAlt = 'Опис банера';

    cy.mount(<Banner imageSrc={testImage} altText={testAlt} />);

    cy.get('img')
      .should('be.visible')                
      .and('have.attr', 'src', testImage)   
      .and('have.attr', 'alt', testAlt);   
  });

  it('2. Картинка загорнута в секцію з правильним класом', () => {
    cy.mount(<Banner imageSrc="test.jpg" altText="test" />);

    cy.get('img')
      .parent() 
      .should('have.prop', 'tagName', 'SECTION') 
      
      .invoke('attr', 'class')
      .should('contain', 'banner');
  });

});
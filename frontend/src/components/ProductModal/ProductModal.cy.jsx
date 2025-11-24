import React from 'react';
import ProductModal from './ProductModal';
import { CartContext } from '../../context/CartContext';

const TestWrapper = ({ cartValue, children }) => {
  return (
    <CartContext.Provider value={cartValue}>
      {children}
    </CartContext.Provider>
  );
};

describe('<ProductModal />', () => {

  const testProduct = {
    id: '123',
    title: 'Super Jacket',
    price: '150$',
    image: '/img/test-jacket.png'
  };

  it('1. Рендерить інформацію про товар (назва, ціна, картинка)', () => {
    const mockCart = { addItem: cy.stub() };
    const onCloseSpy = cy.stub();

    cy.mount(
      <TestWrapper cartValue={mockCart}>
        <ProductModal product={testProduct} onClose={onCloseSpy} />
      </TestWrapper>
    );

    cy.contains(testProduct.title).should('be.visible');
    cy.contains(testProduct.price).should('be.visible');
    cy.get('img')
      .should('have.attr', 'src', testProduct.image)
      .and('have.attr', 'alt', testProduct.title);
  });

  it('2. Клік "Додати в кошик" викликає addItem та onClose', () => {
    const addItemSpy = cy.stub().as('addItemSpy');
    const onCloseSpy = cy.stub().as('onCloseSpy');

    const mockCart = { addItem: addItemSpy };

    cy.mount(
      <TestWrapper cartValue={mockCart}>
        <ProductModal product={testProduct} onClose={onCloseSpy} />
      </TestWrapper>
    );

    cy.contains('Додати в кошик').click();

    cy.get('@addItemSpy').should('have.been.calledWith', testProduct);

    cy.get('@onCloseSpy').should('have.been.called');
  });

  it('3. Закривається при кліку на хрестик або фон, але НЕ на контент', () => {
    const onCloseSpy = cy.stub().as('onCloseSpy');
    const mockCart = { addItem: cy.stub() };

    cy.mount(
      <TestWrapper cartValue={mockCart}>
        <ProductModal product={testProduct} onClose={onCloseSpy} />
      </TestWrapper>
    );

    cy.get('button').contains('×').click();
    cy.get('@onCloseSpy').should('have.been.calledOnce');

    // Використовуємо .then(), щоб скинути шпигуна ВЧАСНО
    cy.wrap(onCloseSpy).then((spy) => {
        spy.resetHistory();
    });

    cy.get('div[class*="modalContent"]').click();
    cy.get('@onCloseSpy').should('not.have.been.called');

    cy.get('div[class*="modalOverlay"]').click('topLeft', { force: true });
    cy.get('@onCloseSpy').should('have.been.calledOnce');
  });

});
import React from 'react';
import Forms from './Forms';
import { MemoryRouter } from 'react-router-dom';

const TestWrapper = ({ children }) => {
  return <MemoryRouter>{children}</MemoryRouter>; 
};

describe('<Forms />', () => {
  
  it('1. Рендерить форму ЛОГІНУ і відправляє правильні дані', () => {
    const mutateSpy = cy.stub().as('mutateSpy');

    const mockUseMutationHook = () => ({
      mutate: mutateSpy,
      isPending: false,
      isError: false,
      error: null
    });

    cy.mount(
      <TestWrapper>
        <Forms useMutationHook={mockUseMutationHook} />
      </TestWrapper>
    );

    cy.get('h1').should('contain', 'LOG IN'); 
    cy.get('input[placeholder="E-mail"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('input[placeholder="First Name"]').should('not.exist');
    
    cy.get('input[placeholder="E-mail"]').type('test@email.com');
    cy.get('input[placeholder="Password"]').type('password123');
    
    cy.get('button[type="submit"]').click();

    cy.get('@mutateSpy').should('have.been.calledWith', {
      email: 'test@email.com',
      password: 'password123'
    });
  });

  it('2. Рендерить форму РЕЄСТРАЦІЇ і відправляє всі 4 поля', () => {
    const mutateSpy = cy.stub().as('mutateSpy');
    const mockUseMutationHook = () => ({
      mutate: mutateSpy,
      isPending: false,
      isError: false,
      error: null
    });

    cy.mount(
      <TestWrapper>
        <Forms 
          type="register"
          title="CREATE ACCOUNT"
          buttonText="REGISTER NOW"
          useMutationHook={mockUseMutationHook}
        />
      </TestWrapper>
    );

    cy.get('h1').should('contain', 'CREATE ACCOUNT');
    cy.get('button[type="submit"]').should('contain', 'REGISTER NOW');
    
    cy.get('input[placeholder="First Name"]').should('be.visible');
    cy.get('input[placeholder="Last Name"]').should('be.visible');

    cy.get('input[placeholder="E-mail"]').type('new@user.com');
    cy.get('input[placeholder="Password"]').type('secretPass');
    cy.get('input[placeholder="First Name"]').type('Ivan');
    cy.get('input[placeholder="Last Name"]').type('Petrov');

    cy.get('button[type="submit"]').click();

    cy.get('@mutateSpy').should('have.been.calledWith', {
      email: 'new@user.com',
      password: 'secretPass',
      firstName: 'Ivan',
      lastName: 'Petrov'
    });
  });

  it('3. Блокує кнопку і змінює текст під час завантаження', () => {
    const mockUseMutationHook = () => ({
      mutate: cy.stub(),
      isPending: true, 
      isError: false,
      error: null
    });

    cy.mount(
      <TestWrapper>
        <Forms useMutationHook={mockUseMutationHook} />
      </TestWrapper>
    );

    cy.get('button[type="submit"]').should('contain', 'Зачекайте...');
    cy.get('button[type="submit"]').should('be.disabled');
  });

  it('4. Показує червоний блок з помилкою, якщо запит не вдався', () => {
    const errorMessage = 'Користувач не знайдений';
    
    const mockUseMutationHook = () => ({
      mutate: cy.stub(),
      isPending: false,
      isError: true, 
      error: { message: errorMessage } 
    });

    cy.mount(
      <TestWrapper>
        <Forms useMutationHook={mockUseMutationHook} />
      </TestWrapper>
    );

    cy.contains(errorMessage).should('be.visible');
    
    cy.contains(errorMessage)
      .should('have.css', 'border-color', 'rgb(255, 0, 0)'); 
  });

  it('5. Не відправляє форму, якщо поля пусті (HTML5 validation)', () => {
    const mutateSpy = cy.stub().as('mutateSpy');
    const mockUseMutationHook = () => ({
      mutate: mutateSpy,
      isPending: false,
      isError: false,
      error: null
    });

    cy.mount(
      <TestWrapper>
        <Forms useMutationHook={mockUseMutationHook} />
      </TestWrapper>
    );

    cy.get('button[type="submit"]').click();

    cy.get('@mutateSpy').should('not.have.been.called');

    cy.get('input[placeholder="E-mail"]').should('have.attr', 'required');
  });

});
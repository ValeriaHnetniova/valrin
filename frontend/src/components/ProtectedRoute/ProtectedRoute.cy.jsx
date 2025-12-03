import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { AuthContext } from '../../context/AuthContext'; 

describe('<ProtectedRoute />', () => {

  it('1. Рендерить дочірній контент, якщо користувач авторизований', () => {
    const mockAuth = { 
      currentUser: { uid: '123', email: 'test@user.com' } 
    };

    cy.mount(
      <MemoryRouter>
        <AuthContext.Provider value={mockAuth}>
          <ProtectedRoute>
            <h1>SECRET CONTENT</h1>
          </ProtectedRoute>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    cy.contains('SECRET CONTENT').should('be.visible');
  });

  it('2. Перенаправляє на /login, якщо користувача немає', () => {
    const mockAuth = { currentUser: null };

    cy.mount(
      <MemoryRouter initialEntries={['/protected']}>
        <AuthContext.Provider value={mockAuth}>
          <Routes>
            <Route 
              path="/protected" 
              element={
                <ProtectedRoute>
                  <h1>SECRET CONTENT</h1>
                </ProtectedRoute>
              } 
            />

            <Route path="/login" element={<h1>Login Page</h1>} />
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    cy.contains('SECRET CONTENT').should('not.exist');
    
    cy.contains('Login Page').should('be.visible');
  });

});
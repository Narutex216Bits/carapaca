import React, { createContext, useContext, useState } from 'react';

// Criação do contexto
const AuthContext = createContext();

// Hook personalizado para usar o contexto
export const useAuth = () => useContext(AuthContext);

// Componente de provedor para gerenciar o estado de autenticação
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

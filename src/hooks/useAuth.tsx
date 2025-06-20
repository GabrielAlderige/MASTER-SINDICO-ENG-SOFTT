
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  type: 'sindico' | 'morador' | 'porteiro';
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (userType: 'sindico' | 'morador' | 'porteiro') => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const getUserInfo = (userType: 'sindico' | 'morador' | 'porteiro'): User => {
  switch (userType) {
    case 'sindico':
      return { type: 'sindico', name: 'João Mendes', email: 'joao@sindico.com' };
    case 'morador':
      return { type: 'morador', name: 'Carla Souza', email: 'carla@morador.com' };
    case 'porteiro':
      return { type: 'porteiro', name: 'Roberto Lima', email: 'roberto@porteiro.com' };
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Verificar se há usuário salvo no localStorage ao inicializar
  useEffect(() => {
    const savedUser = localStorage.getItem('masterSindicoUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userType: 'sindico' | 'morador' | 'porteiro') => {
    const userInfo = getUserInfo(userType);
    setUser(userInfo);
    localStorage.setItem('masterSindicoUser', JSON.stringify(userInfo));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('masterSindicoUser');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};


import React from 'react';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';
import Header from '@/components/Header';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const { isAuthenticated, login } = useAuth();

  if (!isAuthenticated) {
    return <Login onLogin={login} />;
  }

  return (
    <div>
      <Header />
      <Dashboard />
    </div>
  );
};

export default Index;

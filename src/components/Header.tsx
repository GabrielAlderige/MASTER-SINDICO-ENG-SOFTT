
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, Home, User, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Header = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  const getUserIcon = () => {
    switch (user.type) {
      case 'sindico': return Building;
      case 'morador': return Home;
      case 'porteiro': return User;
    }
  };

  const getUserRole = () => {
    switch (user.type) {
      case 'sindico': return 'Síndico Profissional';
      case 'morador': return 'Moradora - Apt 302';
      case 'porteiro': return 'Porteiro';
    }
  };

  const getUserColor = () => {
    switch (user.type) {
      case 'sindico': return 'bg-blue-100 text-blue-800';
      case 'morador': return 'bg-green-100 text-green-800';
      case 'porteiro': return 'bg-purple-100 text-purple-800';
    }
  };

  const IconComponent = getUserIcon();

  return (
    <div className="bg-white border-b shadow-sm p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Master Síndico</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-500">{getUserRole()}</p>
          </div>
          
          <Badge variant="secondary" className={getUserColor()}>
            <IconComponent className="w-3 h-3 mr-1" />
            {user.type === 'sindico' ? 'Síndico' : user.type === 'morador' ? 'Morador' : 'Porteiro'}
          </Badge>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={logout}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="w-4 h-4 mr-1" />
            Sair
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

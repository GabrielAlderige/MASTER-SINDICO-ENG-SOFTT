
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, Home, User } from 'lucide-react';

interface UserTypeSelectorProps {
  currentUser: 'sindico' | 'morador' | 'porteiro';
  onUserChange: (userType: 'sindico' | 'morador' | 'porteiro') => void;
}

const UserTypeSelector = ({ currentUser, onUserChange }: UserTypeSelectorProps) => {
  const userTypes = [
    {
      type: 'sindico' as const,
      label: 'Síndico',
      description: 'João Mendes',
      icon: Building,
      color: 'bg-blue-500'
    },
    {
      type: 'morador' as const,
      label: 'Morador',
      description: 'Carla Souza',
      icon: Home,
      color: 'bg-green-500'
    },
    {
      type: 'porteiro' as const,
      label: 'Porteiro',
      description: 'Roberto Lima',
      icon: User,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg border p-3">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-xs font-medium text-gray-600">Visualizar como:</span>
        </div>
        <div className="flex flex-col space-y-2">
          {userTypes.map((user) => {
            const IconComponent = user.icon;
            return (
              <Button
                key={user.type}
                variant={currentUser === user.type ? "default" : "ghost"}
                size="sm"
                onClick={() => onUserChange(user.type)}
                className={`justify-start w-full ${
                  currentUser === user.type ? 'bg-primary text-primary-foreground' : ''
                }`}
              >
                <div className={`w-4 h-4 ${user.color} rounded mr-2 flex items-center justify-center`}>
                  <IconComponent className="w-2.5 h-2.5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-medium">{user.label}</div>
                  <div className="text-xs opacity-75">{user.description}</div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelector;

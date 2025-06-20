
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Building, Home, User, LogIn } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LoginProps {
  onLogin: (userType: 'sindico' | 'morador' | 'porteiro') => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [userType, setUserType] = useState<'sindico' | 'morador' | 'porteiro'>('sindico');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Credenciais demo para cada tipo de usuário
  const credentials = {
    sindico: { email: 'joao@sindico.com', password: '123456', name: 'João Mendes' },
    morador: { email: 'carla@morador.com', password: '123456', name: 'Carla Souza' },
    porteiro: { email: 'roberto@porteiro.com', password: '123456', name: 'Roberto Lima' }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular delay de autenticação
    await new Promise(resolve => setTimeout(resolve, 1000));

    const userCredentials = credentials[userType];
    
    if (email === userCredentials.email && password === userCredentials.password) {
      toast({
        title: "Login realizado com sucesso!",
        description: `Bem-vindo(a), ${userCredentials.name}`,
      });
      onLogin(userType);
    } else {
      toast({
        title: "Erro no login",
        description: "Email ou senha incorretos",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  const getUserTypeInfo = (type: 'sindico' | 'morador' | 'porteiro') => {
    switch (type) {
      case 'sindico':
        return { 
          label: 'Síndico', 
          icon: Building, 
          color: 'text-blue-600',
          description: 'Administrador do condomínio'
        };
      case 'morador':
        return { 
          label: 'Morador', 
          icon: Home, 
          color: 'text-green-600',
          description: 'Residente do condomínio'
        };
      case 'porteiro':
        return { 
          label: 'Porteiro', 
          icon: User, 
          color: 'text-purple-600',
          description: 'Funcionário da portaria'
        };
    }
  };

  const fillDemoCredentials = () => {
    const userCredentials = credentials[userType];
    setEmail(userCredentials.email);
    setPassword(userCredentials.password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
            Master Síndico
          </CardTitle>
          <CardDescription>
            Sistema de gestão condominial
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Seleção do tipo de usuário */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Tipo de usuário</Label>
              <RadioGroup 
                value={userType} 
                onValueChange={(value) => setUserType(value as 'sindico' | 'morador' | 'porteiro')}
                className="grid grid-cols-1 gap-3"
              >
                {(['sindico', 'morador', 'porteiro'] as const).map((type) => {
                  const info = getUserTypeInfo(type);
                  const IconComponent = info.icon;
                  
                  return (
                    <div key={type} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer">
                      <RadioGroupItem value={type} id={type} />
                      <div className="flex items-center space-x-2 flex-1">
                        <IconComponent className={`w-5 h-5 ${info.color}`} />
                        <div>
                          <Label htmlFor={type} className="font-medium cursor-pointer">
                            {info.label}
                          </Label>
                          <p className="text-xs text-gray-500">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </RadioGroup>
            </div>

            {/* Campos de login */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Botão demo */}
            <Button 
              type="button" 
              variant="outline" 
              className="w-full" 
              onClick={fillDemoCredentials}
            >
              Usar credenciais demo
            </Button>

            {/* Credenciais demo visíveis */}
            <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg">
              <p className="font-medium mb-1">Credenciais demo:</p>
              <p>Email: {credentials[userType].email}</p>
              <p>Senha: {credentials[userType].password}</p>
            </div>

            {/* Botão de login */}
            <Button 
              type="submit" 
              className="w-full gradient-green text-black hover:opacity-90"
              disabled={isLoading}
            >
              {isLoading ? (
                <>Entrando...</>
              ) : (
                <>
                  <LogIn className="w-4 h-4 mr-2" />
                  Entrar
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

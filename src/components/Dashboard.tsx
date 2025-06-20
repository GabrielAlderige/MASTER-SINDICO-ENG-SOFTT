
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Package, 
  Wrench, 
  Users, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) return null;

  const getGreeting = () => {
    switch (user.type) {
      case 'sindico': return `Bem-vindo, ${user.name}`;
      case 'morador': return `Bem-vinda, ${user.name}`;
      case 'porteiro': return `Bem-vindo, ${user.name}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Greeting */}
        <div className="mb-8">
          <p className="text-xl text-gray-600">{getGreeting()}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Reservas Ativas</p>
                  <p className="text-2xl font-bold text-green-600">3</p>
                </div>
                <Calendar className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Entregas Pendentes</p>
                  <p className="text-2xl font-bold text-blue-600">7</p>
                </div>
                <Package className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Manutenções</p>
                  <p className="text-2xl font-bold text-orange-600">2</p>
                </div>
                <Wrench className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Moradores</p>
                  <p className="text-2xl font-bold text-purple-600">48</p>
                </div>
                <Users className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/reservas')}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-green-600" />
                <span>Reservas de Áreas</span>
              </CardTitle>
              <CardDescription>
                Gerencie reservas da churrasqueira, salão de festas e outras áreas comuns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Próxima reserva</span>
                  <Badge variant="outline">Hoje 14:00</Badge>
                </div>
                <Button 
                  className="w-full gradient-green text-black hover:opacity-90"
                  onClick={(e) => {e.stopPropagation(); navigate('/reservas');}}
                >
                  Gerenciar Reservas
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/entregas')}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Package className="w-6 h-6 text-blue-600" />
                <span>Entregas</span>
              </CardTitle>
              <CardDescription>
                Controle de correspondências e encomendas dos moradores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Pendentes hoje</span>
                  <Badge variant="outline">7 entregas</Badge>
                </div>
                <Button 
                  className="w-full gradient-blue text-white hover:opacity-90"
                  onClick={(e) => {e.stopPropagation(); navigate('/entregas');}}
                >
                  Ver Entregas
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/manutencao')}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wrench className="w-6 h-6 text-orange-600" />
                <span>Manutenção</span>
              </CardTitle>
              <CardDescription>
                Chamados e acompanhamento de serviços de manutenção
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Chamados abertos</span>
                  <Badge variant="outline">2 ativos</Badge>
                </div>
                <Button 
                  className="w-full gradient-orange text-white hover:opacity-90"
                  onClick={(e) => {e.stopPropagation(); navigate('/manutencao');}}
                >
                  Ver Chamados
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Atividades Recentes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-green-50">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Reserva aprovada</p>
                  <p className="text-xs text-gray-600">Churrasqueira - Apt 205 - Hoje 18:00</p>
                </div>
                <span className="text-xs text-gray-500">2h atrás</span>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50">
                <Package className="w-5 h-5 text-blue-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Nova entrega registrada</p>
                  <p className="text-xs text-gray-600">Encomenda para Apt 302</p>
                </div>
                <span className="text-xs text-gray-500">30min atrás</span>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-lg bg-orange-50">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Chamado de manutenção</p>
                  <p className="text-xs text-gray-600">Ar condicionado - Apt 302</p>
                </div>
                <span className="text-xs text-gray-500">1h atrás</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

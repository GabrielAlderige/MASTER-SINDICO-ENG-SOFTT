
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, Clock, MapPin, ArrowLeft, Bell, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Entregas = () => {
  const navigate = useNavigate();
  const [entregas, setEntregas] = useState([
    {
      id: 1,
      apartamento: '302',
      morador: 'Carla Souza',
      tipo: 'Encomenda',
      remetente: 'Magazine Luiza',
      dataRecebimento: '2024-06-20',
      horaRecebimento: '14:30',
      status: 'pendente',
      descricao: 'Caixa média - Eletrônicos'
    },
    {
      id: 2,
      apartamento: '105',
      morador: 'Roberto Silva',
      tipo: 'Correspondência',
      remetente: 'Banco do Brasil',
      dataRecebimento: '2024-06-20',
      horaRecebimento: '13:45',
      status: 'entregue',
      descricao: 'Envelope bancário'
    },
    {
      id: 3,
      apartamento: '204',
      morador: 'Ana Costa',
      tipo: 'Encomenda',
      remetente: 'Americanas',
      dataRecebimento: '2024-06-19',
      horaRecebimento: '16:20',
      status: 'pendente',
      descricao: 'Pacote pequeno - Roupas'
    }
  ]);

  const [novaEntrega, setNovaEntrega] = useState({
    apartamento: '',
    tipo: 'Encomenda',
    remetente: '',
    descricao: ''
  });

  const handleNovaEntrega = () => {
    if (novaEntrega.apartamento && novaEntrega.remetente) {
      const agora = new Date();
      const nova = {
        id: entregas.length + 1,
        ...novaEntrega,
        morador: `Morador Apt ${novaEntrega.apartamento}`,
        dataRecebimento: agora.toISOString().split('T')[0],
        horaRecebimento: agora.toTimeString().slice(0, 5),
        status: 'pendente' as const
      };
      
      setEntregas([nova, ...entregas]);
      setNovaEntrega({ apartamento: '', tipo: 'Encomenda', remetente: '', descricao: '' });
      alert(`Entrega registrada! Morador do apt ${nova.apartamento} foi notificado.`);
    }
  };

  const marcarComoEntregue = (id: number) => {
    setEntregas(prev => 
      prev.map(entrega => 
        entrega.id === id 
          ? { ...entrega, status: 'entregue' as const }
          : entrega
      )
    );
  };

  const notificarMorador = (entrega: any) => {
    alert(`Notificação enviada para ${entrega.morador} (Apt ${entrega.apartamento})`);
  };

  const getStatusColor = (status: string) => {
    return status === 'pendente' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Gestão de Entregas</h1>
              <p className="text-gray-600">Registre e acompanhe entregas de correspondências</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Formulário Nova Entrega */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="w-5 h-5" />
                  <span>Nova Entrega</span>
                </CardTitle>
                <CardDescription>Registrar nova correspondência</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Apartamento
                  </label>
                  <input
                    type="text"
                    value={novaEntrega.apartamento}
                    onChange={(e) => setNovaEntrega({...novaEntrega, apartamento: e.target.value})}
                    placeholder="ex: 302"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo
                  </label>
                  <select
                    value={novaEntrega.tipo}
                    onChange={(e) => setNovaEntrega({...novaEntrega, tipo: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Encomenda">Encomenda</option>
                    <option value="Correspondência">Correspondência</option>
                    <option value="Documento">Documento</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Remetente
                  </label>
                  <input
                    type="text"
                    value={novaEntrega.remetente}
                    onChange={(e) => setNovaEntrega({...novaEntrega, remetente: e.target.value})}
                    placeholder="ex: Correios, Amazon"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Descrição
                  </label>
                  <textarea
                    value={novaEntrega.descricao}
                    onChange={(e) => setNovaEntrega({...novaEntrega, descricao: e.target.value})}
                    placeholder="Descreva o tamanho/tipo da entrega"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <Button 
                  onClick={handleNovaEntrega}
                  className="w-full gradient-green text-black hover:opacity-90"
                  size="lg"
                >
                  <Package className="w-4 h-4 mr-2" />
                  Registrar Entrega
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Entregas */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Entregas Recentes</h2>
            {entregas.map((entrega) => (
              <Card key={entrega.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center space-x-2">
                        <Package className="w-5 h-5" />
                        <span>Apt {entrega.apartamento} - {entrega.morador}</span>
                      </CardTitle>
                      <CardDescription>{entrega.tipo} de {entrega.remetente}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(entrega.status)}>
                      {entrega.status === 'pendente' ? 'Aguardando' : 'Entregue'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Recebido em {entrega.dataRecebimento} às {entrega.horaRecebimento}</span>
                    </div>
                    {entrega.descricao && (
                      <p className="text-sm text-gray-700">{entrega.descricao}</p>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => notificarMorador(entrega)}
                      className="flex items-center space-x-1"
                    >
                      <Bell className="w-3 h-3" />
                      <span>Notificar</span>
                    </Button>
                    
                    {entrega.status === 'pendente' && (
                      <Button
                        size="sm"
                        onClick={() => marcarComoEntregue(entrega.id)}
                        className="flex items-center space-x-1 gradient-green text-black hover:opacity-90"
                      >
                        <Check className="w-3 h-3" />
                        <span>Marcar Entregue</span>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entregas;

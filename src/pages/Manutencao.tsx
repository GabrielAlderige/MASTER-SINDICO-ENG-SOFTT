
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wrench, Clock, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Manutencao = () => {
  const navigate = useNavigate();
  const [chamados, setChamados] = useState([
    {
      id: 1,
      apartamento: '302',
      morador: 'Carla Souza',
      tipo: 'Elétrica',
      descricao: 'Ar condicionado parou de funcionar',
      dataCriacao: '2024-06-20',
      horaCriacao: '08:30',
      status: 'pendente',
      prioridade: 'alta'
    },
    {
      id: 2,
      apartamento: '105',
      morador: 'Roberto Silva',
      tipo: 'Hidráulica',
      descricao: 'Vazamento na pia da cozinha',
      dataCriacao: '2024-06-19',
      horaCriacao: '14:15',
      status: 'em_andamento',
      prioridade: 'media'
    },
    {
      id: 3,
      apartamento: '204',
      morador: 'Ana Costa',
      tipo: 'Geral',
      descricao: 'Fechadura da porta principal travando',
      dataCriacao: '2024-06-18',
      horaCriacao: '16:45',
      status: 'concluido',
      prioridade: 'baixa'
    }
  ]);

  const [novoChamado, setNovoChamado] = useState({
    apartamento: '',
    tipo: 'Geral',
    descricao: '',
    prioridade: 'media'
  });

  const handleNovoChamado = () => {
    if (novoChamado.apartamento && novoChamado.descricao) {
      const agora = new Date();
      const novo = {
        id: chamados.length + 1,
        ...novoChamado,
        morador: `Morador Apt ${novoChamado.apartamento}`,
        dataCriacao: agora.toISOString().split('T')[0],
        horaCriacao: agora.toTimeString().slice(0, 5),
        status: 'pendente' as const
      };
      
      setChamados([novo, ...chamados]);
      setNovoChamado({ apartamento: '', tipo: 'Geral', descricao: '', prioridade: 'media' });
      alert(`Chamado registrado! ID: #${novo.id}`);
    }
  };

  const atualizarStatus = (id: number, novoStatus: string) => {
    setChamados(prev => 
      prev.map(chamado => 
        chamado.id === id 
          ? { ...chamado, status: novoStatus }
          : chamado
      )
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pendente': return 'bg-yellow-100 text-yellow-800';
      case 'em_andamento': return 'bg-blue-100 text-blue-800';
      case 'concluido': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPrioridadeColor = (prioridade: string) => {
    switch (prioridade) {
      case 'alta': return 'bg-red-100 text-red-800';
      case 'media': return 'bg-orange-100 text-orange-800';
      case 'baixa': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
              <h1 className="text-3xl font-bold text-gray-900">Manutenção</h1>
              <p className="text-gray-600">Gerencie chamados de manutenção do condomínio</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Formulário Novo Chamado */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wrench className="w-5 h-5" />
                  <span>Novo Chamado</span>
                </CardTitle>
                <CardDescription>Registrar nova solicitação de manutenção</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Apartamento
                  </label>
                  <input
                    type="text"
                    value={novoChamado.apartamento}
                    onChange={(e) => setNovoChamado({...novoChamado, apartamento: e.target.value})}
                    placeholder="ex: 302"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo
                  </label>
                  <select
                    value={novoChamado.tipo}
                    onChange={(e) => setNovoChamado({...novoChamado, tipo: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Geral">Geral</option>
                    <option value="Elétrica">Elétrica</option>
                    <option value="Hidráulica">Hidráulica</option>
                    <option value="Pintura">Pintura</option>
                    <option value="Jardinagem">Jardinagem</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prioridade
                  </label>
                  <select
                    value={novoChamado.prioridade}
                    onChange={(e) => setNovoChamado({...novoChamado, prioridade: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="baixa">Baixa</option>
                    <option value="media">Média</option>
                    <option value="alta">Alta</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Descrição do Problema
                  </label>
                  <textarea
                    value={novoChamado.descricao}
                    onChange={(e) => setNovoChamado({...novoChamado, descricao: e.target.value})}
                    placeholder="Descreva detalhadamente o problema"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <Button 
                  onClick={handleNovoChamado}
                  className="w-full gradient-green text-black hover:opacity-90"
                  size="lg"
                >
                  <Wrench className="w-4 h-4 mr-2" />
                  Abrir Chamado
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Chamados */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Chamados Recentes</h2>
            {chamados.map((chamado) => (
              <Card key={chamado.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center space-x-2">
                        <Wrench className="w-5 h-5" />
                        <span>#{chamado.id} - Apt {chamado.apartamento}</span>
                      </CardTitle>
                      <CardDescription>{chamado.morador} • {chamado.tipo}</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Badge className={getStatusColor(chamado.status)}>
                        {chamado.status === 'pendente' ? 'Pendente' : 
                         chamado.status === 'em_andamento' ? 'Em Andamento' : 'Concluído'}
                      </Badge>
                      <Badge className={getPrioridadeColor(chamado.prioridade)}>
                        {chamado.prioridade === 'alta' ? 'Alta' : 
                         chamado.prioridade === 'media' ? 'Média' : 'Baixa'}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-700">{chamado.descricao}</p>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Criado em {chamado.dataCriacao} às {chamado.horaCriacao}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 mt-4">
                    {chamado.status === 'pendente' && (
                      <Button
                        size="sm"
                        onClick={() => atualizarStatus(chamado.id, 'em_andamento')}
                        className="flex items-center space-x-1 gradient-green text-black hover:opacity-90"
                      >
                        <AlertCircle className="w-3 h-3" />
                        <span>Iniciar</span>
                      </Button>
                    )}
                    
                    {chamado.status === 'em_andamento' && (
                      <Button
                        size="sm"
                        onClick={() => atualizarStatus(chamado.id, 'concluido')}
                        className="flex items-center space-x-1 gradient-green text-black hover:opacity-90"
                      >
                        <CheckCircle className="w-3 h-3" />
                        <span>Concluir</span>
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

export default Manutencao;

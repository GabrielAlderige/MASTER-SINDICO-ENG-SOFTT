
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Reservas = () => {
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const areas = [
    {
      id: 'churrasqueira',
      name: 'Churrasqueira',
      description: 'Área gourmet com churrasqueira e mesa para 12 pessoas',
      capacity: '12 pessoas',
      available: true,
      image: '🍖'
    },
    {
      id: 'salao-festas',
      name: 'Salão de Festas',
      description: 'Espaço amplo para eventos e comemorações',
      capacity: '40 pessoas',
      available: true,
      image: '🎉'
    },
    {
      id: 'playground',
      name: 'Playground',
      description: 'Área recreativa para crianças',
      capacity: '15 crianças',
      available: false,
      image: '🎪'
    },
    {
      id: 'quadra',
      name: 'Quadra Esportiva',
      description: 'Quadra poliesportiva para futebol e vôlei',
      capacity: '20 pessoas',
      available: true,
      image: '⚽'
    }
  ];

  const horarios = [
    '08:00', '10:00', '14:00', '16:00', '18:00', '20:00'
  ];

  const handleReserva = () => {
    if (selectedArea && selectedDate && selectedTime) {
      alert(`Reserva solicitada!\nÁrea: ${areas.find(a => a.id === selectedArea)?.name}\nData: ${selectedDate}\nHorário: ${selectedTime}`);
      // Reset form
      setSelectedArea(null);
      setSelectedDate('');
      setSelectedTime('');
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
              <h1 className="text-3xl font-bold text-gray-900">Reservas de Áreas Comuns</h1>
              <p className="text-gray-600">Selecione e reserve espaços do condomínio</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Áreas Disponíveis */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Áreas Disponíveis</h2>
            {areas.map((area) => (
              <Card 
                key={area.id} 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedArea === area.id ? 'ring-2 ring-primary border-primary' : ''
                } ${!area.available ? 'opacity-50' : ''}`}
                onClick={() => area.available && setSelectedArea(area.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{area.image}</div>
                      <div>
                        <CardTitle className="text-lg">{area.name}</CardTitle>
                        <CardDescription>{area.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant={area.available ? "default" : "secondary"}>
                      {area.available ? 'Disponível' : 'Ocupada'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{area.capacity}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Formulário de Reserva */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Fazer Reserva</h2>
            <Card>
              <CardHeader>
                <CardTitle>Detalhes da Reserva</CardTitle>
                <CardDescription>
                  {selectedArea ? 
                    `Reservando: ${areas.find(a => a.id === selectedArea)?.name}` : 
                    'Selecione uma área para continuar'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Data da Reserva
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    disabled={!selectedArea}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Horário
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {horarios.map((horario) => (
                      <Button
                        key={horario}
                        variant={selectedTime === horario ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(horario)}
                        disabled={!selectedArea}
                        className="flex items-center space-x-1"
                      >
                        <Clock className="w-3 h-3" />
                        <span>{horario}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={handleReserva}
                  disabled={!selectedArea || !selectedDate || !selectedTime}
                  className="w-full gradient-green text-black hover:opacity-90"
                  size="lg"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Confirmar Reserva
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservas;

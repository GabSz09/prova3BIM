import React, { useState } from 'react';
import { Visitor } from './types';
import { Header } from './Header';
import { VisitorSummary } from './components/VisitorSummary';
import { VisitorList } from './components/VisitorList';

const initialVisitors: Visitor[] = [
  { id: '1', nomeVisitante: 'Carlos Silva', documentoParcial: '123.***', destino: 'Apto 101', moradorResponsavel: 'Ana Souza', status: 'Pendente' },
  { id: '2', nomeVisitante: 'Mariana Lima', documentoParcial: '456.***', destino: 'Apto 202', moradorResponsavel: 'Roberto Alves', status: 'Entrada Liberada', horarioEntrada: '08:30' },
  { id: '3', nomeVisitante: 'João Pereira', documentoParcial: '789.***', destino: 'Apto 101', moradorResponsavel: 'Ana Souza', status: 'Não Autorizada' },
  { id: '4', nomeVisitante: 'Fernanda Costa', documentoParcial: '321.***', destino: 'Apto 303', moradorResponsavel: 'Beatriz Lima', status: 'Finalizada', horarioEntrada: '07:00', horarioSaida: '08:15' },
  { id: '5', nomeVisitante: 'Lucas Santos', documentoParcial: '654.***', destino: 'Apto 101', moradorResponsavel: 'Ana Souza', status: 'Entrada Liberada', horarioEntrada: '09:00' },
];

export const App: React.FC = () => {
  const [visitors, setVisitors] = useState<Visitor[]>(initialVisitors);

  const handleEntrada = (id: string) => {
    setVisitors(prev =>
      prev.map(v => v.id === id
        ? { ...v, status: 'Entrada Liberada', horarioEntrada: new Date().toLocaleTimeString().slice(0, 5) }
        : v
      )
    );
  };

  const handleSaida = (id: string) => {
    setVisitors(prev =>
      prev.map(v => v.id === id
        ? { ...v, status: 'Finalizada', horarioSaida: new Date().toLocaleTimeString().slice(0, 5) }
        : v
      )
    );
  };

  const handleNaoAutorizar = (id: string) => {
    setVisitors(prev =>
      prev.map(v => v.id === id ? { ...v, status: 'Não Autorizada' } : v)
    );
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <Header />
      <VisitorSummary visitors={visitors} />
      <VisitorList
        visitors={visitors}
        onEntrada={handleEntrada}
        onSaida={handleSaida}
        onNaoAutorizar={handleNaoAutorizar}
      />
    </div>
  );
};
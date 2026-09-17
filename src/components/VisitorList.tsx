import React from 'react';
import { Visitor } from './types';

interface VisitorListProps {
  visitors: Visitor[];
  onEntrada: (id: string) => void;
  onSaida: (id: string) => void;
  onNaoAutorizar: (id: string) => void;
}

export const VisitorList: React.FC<VisitorListProps> = ({
  visitors,
  onEntrada,
  onSaida,
  onNaoAutorizar,
}) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={thStyle}>Visitante</th>
          <th style={thStyle}>Destino</th>
          <th style={thStyle}>Morador</th>
          <th style={thStyle}>Status</th>
          <th style={thStyle}>Entrada</th>
          <th style={thStyle}>Saída</th>
          <th style={thStyle}>Ações</th>
        </tr>
      </thead>
      <tbody>
        {visitors.map((v) => (
          <tr key={v.id}>
            <td style={tdStyle}>{v.nomeVisitante}</td>
            <td style={tdStyle}>{v.destino}</td>
            <td style={tdStyle}>{v.moradorResponsavel}</td>
            <td style={tdStyle}>{v.status}</td>
            <td style={tdStyle}>{v.horarioEntrada ?? '-'}</td>
            <td style={tdStyle}>{v.horarioSaida ?? '-'}</td>
            <td style={tdStyle}>
              <button onClick={() => onEntrada(v.id)}>Liberar Entrada</button>{' '}
              <button onClick={() => onSaida(v.id)}>Registrar Saída</button>{' '}
              <button onClick={() => onNaoAutorizar(v.id)}>Não Autorizar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const thStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '0.5rem',
  borderBottom: '2px solid #cbd5e1',
};

const tdStyle: React.CSSProperties = {
  padding: '0.5rem',
  borderBottom: '1px solid #e2e8f0',
};
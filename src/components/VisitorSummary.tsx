/* ACOMPANHAR MUDANÇAS DE STATUS E RESUMIR REGISTROS VISUALMENTE */

import React from 'react';
import type { Visitor } from './types';

interface VisitorSummaryProps {
    visitors: Visitor[];
}

export const VisitorSummary: React.FC<VisitorSummaryProps> = ({ visitors }) => {
    const total = visitors.length;
    const pendentes = visitors.filter(v => v.status === 'Pendente').length;
    const liberadas = visitors.filter(v => v.status === 'Entrada Liberada').length;
    const naoAutorizadas = visitors.filter(v => v.status === 'Não Autorizada').length;
    const finalizadas = visitors.filter(v => v.status === 'Finalizada').length;

    return (
        <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
        }}>
            <div style={cardStyle('#64748b')}>
                Total: {total}
            </div>
            <div style={cardStyle('#eab308')}>
                Pendentes: {pendentes}
            </div>
            <div style={cardStyle('#22c55e')}>
                Em Andamento: {liberadas}
            </div>
            <div style={cardStyle('#ef4444')}>
                Não Autorizadas: {naoAutorizadas}
            </div>
            <div style={cardStyle('#3b82f6')}>
                Finalizadas: {finalizadas}
            </div>
        </div>
    );
};

const cardStyle = (borderColor: string) => ({
    padding: '0.75rem',
    backgroundColor: '#f8fafc',
    borderLeft: `5px solid ${borderColor}`,
    borderRadius: '6px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
});
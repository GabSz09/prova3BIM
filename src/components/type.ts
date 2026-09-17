export type VisitorStatus = 'Pendente' | 'Entrada Liberada' | 'Não Autorizada' | 'Finalizada';

export interface Visitor {
  id: string;
  nomeVisitante: string;
  documentoParcial: string;
  destino: string;
  moradorResponsavel: string;
  horarioEntrada?: string;
  horarioSaida?: string;
  status: VisitorStatus;
}
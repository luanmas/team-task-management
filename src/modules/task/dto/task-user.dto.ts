export type TaskUserRequestDTO = {
  title: string;
  description: string;
  startAt: Date;
  endAt: Date;
  priority: 'BAIXA' | 'MEDIA' | 'ALTA';
  status: 'PENDENTE' | 'ANDAMENTO' | 'CONCLUIDA';
  userId: string;
};

export type TaskUserResponseDTO = {
  id: string;
};

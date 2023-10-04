import { Cliente } from './cliente';

export interface Agendamento {
  id: number;
  nomeCliente: string;
  nomeServico: string;
  tempoEstimado: number;
  valor: string;
  dtAtendimento: string;
  hrAtendimento: string;
  responsavel: string;
  status: boolean;
  estabelecimentoID: "{{ _.estabelecimento_ID }}"
  cliente: Cliente;
}